export const id = 225;
export const ids = [225, 230];
export const modules = {
  41239: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(41169),
      qQ = wQ(39397);
    let oQ = !1;

    function DQ() {
      oQ || (oQ = !0, qQ.b.prototype._sphericalPolynomialTargetSize = 0, qQ.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(qQ.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = LQ.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((QQ => {
              this._texture._sphericalPolynomial = QQ, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(QQ) {
          this._texture && (this._texture._sphericalPolynomial = QQ)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36870: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      Color3: () => LQ.b,
      b: () => LQ.e
    });
    var LQ = wQ(36873);
    (0, LQ.h)()
  },
  37320: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    var LQ = wQ(37324);
    class qQ {
      static GetPlanes(QQ) {
        const FQ = [];
        for (let wQ = 0; wQ < 6; wQ++) FQ.push(new LQ.d(0, 0, 0, 0));
        return qQ.GetPlanesToRef(QQ, FQ), FQ
      }
      static GetNearPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[2], FQ.normal.y = wQ[7] + wQ[6], FQ.normal.z = wQ[11] + wQ[10], FQ.d = wQ[15] + wQ[14], FQ.normalize()
      }
      static GetFarPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[2], FQ.normal.y = wQ[7] - wQ[6], FQ.normal.z = wQ[11] - wQ[10], FQ.d = wQ[15] - wQ[14], FQ.normalize()
      }
      static GetLeftPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[0], FQ.normal.y = wQ[7] + wQ[4], FQ.normal.z = wQ[11] + wQ[8], FQ.d = wQ[15] + wQ[12], FQ.normalize()
      }
      static GetRightPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[0], FQ.normal.y = wQ[7] - wQ[4], FQ.normal.z = wQ[11] - wQ[8], FQ.d = wQ[15] - wQ[12], FQ.normalize()
      }
      static GetTopPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[1], FQ.normal.y = wQ[7] - wQ[5], FQ.normal.z = wQ[11] - wQ[9], FQ.d = wQ[15] - wQ[13], FQ.normalize()
      }
      static GetBottomPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[1], FQ.normal.y = wQ[7] + wQ[5], FQ.normal.z = wQ[11] + wQ[9], FQ.d = wQ[15] + wQ[13], FQ.normalize()
      }
      static GetPlanesToRef(QQ, FQ) {
        qQ.GetNearPlaneToRef(QQ, FQ[0]), qQ.GetFarPlaneToRef(QQ, FQ[1]), qQ.GetLeftPlaneToRef(QQ, FQ[2]), qQ.GetRightPlaneToRef(QQ, FQ[3]), qQ.GetTopPlaneToRef(QQ, FQ[4]), qQ.GetBottomPlaneToRef(QQ, FQ[5])
      }
      static IsPointInFrustum(QQ, FQ) {
        for (let wQ = 0; wQ < 6; wQ++)
          if (FQ[wQ].dotCoordinate(QQ) < 0) return !1;
        return !0
      }
    }
  },
  37324: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ
    });
    var LQ = wQ(36696);
    class qQ {
      constructor(QQ, FQ, wQ, qQ) {
        this.normal = new LQ.p(QQ, FQ, wQ), this.d = qQ
      }
      RLQ() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let QQ = this.normal.getHashCode();
        return QQ = 397 * QQ ^ this.d, QQ
      }
      normalize() {
        const QQ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let FQ = 0;
        return 0 !== QQ && (FQ = 1 / QQ), this.normal.x *= FQ, this.normal.y *= FQ, this.normal.z *= FQ, this.d *= FQ, this
      }
      transform(QQ) {
        const FQ = qQ._TmpMatrix;
        QQ.invertToRef(FQ);
        const wQ = FQ.m,
          LQ = this.normal.x,
          oQ = this.normal.y,
          DQ = this.normal.z,
          kQ = this.d,
          vQ = LQ * wQ[0] + oQ * wQ[1] + DQ * wQ[2] + kQ * wQ[3],
          mQ = LQ * wQ[4] + oQ * wQ[5] + DQ * wQ[6] + kQ * wQ[7],
          uQ = LQ * wQ[8] + oQ * wQ[9] + DQ * wQ[10] + kQ * wQ[11],
          HQ = LQ * wQ[12] + oQ * wQ[13] + DQ * wQ[14] + kQ * wQ[15];
        return new qQ(vQ, mQ, uQ, HQ)
      }
      dotCoordinate(QQ) {
        return this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z + this.d
      }
      copyFromPoints(QQ, FQ, wQ) {
        const LQ = FQ.x - QQ.x,
          qQ = FQ.y - QQ.y,
          oQ = FQ.z - QQ.z,
          DQ = wQ.x - QQ.x,
          kQ = wQ.y - QQ.y,
          vQ = wQ.z - QQ.z,
          mQ = qQ * vQ - oQ * kQ,
          uQ = oQ * DQ - LQ * vQ,
          HQ = LQ * kQ - qQ * DQ,
          bQ = Math.sqrt(mQ * mQ + uQ * uQ + HQ * HQ);
        let YQ;
        return YQ = 0 !== bQ ? 1 / bQ : 0, this.normal.x = mQ * YQ, this.normal.y = uQ * YQ, this.normal.z = HQ * YQ, this.d = -(this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z), this
      }
      isFrontFacingTo(QQ, FQ) {
        return LQ.p.Dot(this.normal, QQ) <= FQ
      }
      signedDistanceTo(QQ) {
        return LQ.p.Dot(QQ, this.normal) + this.d
      }
      static FromArray(QQ) {
        return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
      }
      static FromPoints(QQ, FQ, wQ) {
        const LQ = new qQ(0, 0, 0, 0);
        return LQ.copyFromPoints(QQ, FQ, wQ), LQ
      }
      static FromPositionAndNormal(QQ, FQ) {
        const wQ = new qQ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(QQ, FQ, wQ)
      }
      static FromPositionAndNormalToRef(QQ, FQ, wQ) {
        return wQ.normal.Qs(FQ), wQ.normal.normalize(), wQ.d = -QQ.dot(wQ.normal), wQ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(QQ, FQ, wQ) {
        const qQ = -(FQ.x * QQ.x + FQ.y * QQ.y + FQ.z * QQ.z);
        return LQ.p.Dot(wQ, FQ) + qQ
      }
    }
    qQ._TmpMatrix = LQ.c.Identity()
  },
  36688: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      Matrix: () => LQ.c,
      Quaternion: () => LQ.e,
      RegisterMathVector: () => LQ.i,
      TmpVectors: () => LQ.k,
      Vector2: () => LQ.n,
      Ox: () => LQ.p,
      Vector4: () => LQ.t
    });
    var LQ = wQ(36696);
    (0, LQ.i)()
  },
  37631: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.x = QQ, this.y = FQ, this.width = wQ, this.height = LQ
      }
      toGlobal(QQ, FQ) {
        return new LQ(this.x * QQ, this.y * FQ, this.width * QQ, this.height * FQ)
      }
      toGlobalToRef(QQ, FQ, wQ) {
        return wQ.x = this.x * QQ, wQ.y = this.y * FQ, wQ.width = this.width * QQ, wQ.height = this.height * FQ, this
      }
      clone() {
        return new LQ(this.x, this.y, this.width, this.height)
      }
    }
  },
  41169: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => mQ
    });
    var LQ = wQ(36696),
      qQ = wQ(36729),
      oQ = wQ(39389),
      DQ = wQ(36705),
      kQ = wQ(36873);
    class vQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.name = QQ, this.worldAxisForNormal = FQ, this.worldAxisForFileX = wQ, this.worldAxisForFileY = LQ
      }
    }
    class mQ {
      static _NearestPow2Floor(QQ) {
        return QQ <= 1 ? 1 : 1 << Math.floor(Math.log2(QQ))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(QQ) {
        if (!QQ.isCube) return null;
        QQ.iN()?.Wx().flushFramebuffer();
        const FQ = QQ.getSize().width,
          wQ = QQ._sphericalPolynomialTargetSize,
          LQ = wQ > 0 ? this._NearestPow2Floor(wQ) : 0,
          qQ = !QQ.noMipmap && !0 === QQ._texture?.generateMipMaps,
          oQ = LQ > 0 && LQ < FQ && qQ,
          DQ = oQ ? Math.max(0, Math.round(Math.log2(FQ / LQ))) : 0,
          kQ = oQ ? Math.max(1, Math.floor(FQ / Math.pow(2, DQ))) : FQ,
          vQ = QQ.readPixels(0, DQ, void 0, !1),
          mQ = QQ.readPixels(1, DQ, void 0, !1);
        let uQ, HQ;
        QQ.isRenderTarget ? (uQ = QQ.readPixels(3, DQ, void 0, !1), HQ = QQ.readPixels(2, DQ, void 0, !1)) : (uQ = QQ.readPixels(2, DQ, void 0, !1), HQ = QQ.readPixels(3, DQ, void 0, !1));
        const bQ = QQ.readPixels(4, DQ, void 0, !1),
          YQ = QQ.readPixels(5, DQ, void 0, !1),
          xQ = QQ.gammaSpace,
          AQ = LQ > 0 && LQ < FQ && !oQ;
        return new Promise((QQ => {
          Promise.all([mQ, vQ, uQ, HQ, bQ, YQ]).then((wQ => {
            let [qQ, oQ, DQ, vQ, mQ, uQ] = wQ, HQ = kQ;
            if (AQ) {
              const QQ = 4;
              qQ = this._DownsampleFace(qQ, FQ, LQ, QQ), oQ = this._DownsampleFace(oQ, FQ, LQ, QQ), DQ = this._DownsampleFace(DQ, FQ, LQ, QQ), vQ = this._DownsampleFace(vQ, FQ, LQ, QQ), mQ = this._DownsampleFace(mQ, FQ, LQ, QQ), uQ = this._DownsampleFace(uQ, FQ, LQ, QQ), HQ = LQ
            }
            const bQ = {
              size: HQ,
              right: oQ,
              left: qQ,
              up: DQ,
              down: vQ,
              front: mQ,
              back: uQ,
              format: 5,
              type: qQ instanceof Float32Array ? 1 : 0,
              gammaSpace: xQ
            };
            QQ(this.ConvertCubeMapToSphericalPolynomial(bQ))
          }))
        }))
      }
      static _AreaElement(QQ, FQ) {
        return Math.atan2(QQ * FQ, Math.sqrt(QQ * QQ + FQ * FQ + 1))
      }
      static _DownsampleFace(QQ, FQ, wQ, LQ) {
        const qQ = QQ instanceof Float32Array ? QQ : Float32Array.from(QQ),
          oQ = wQ * wQ * LQ,
          DQ = new Float32Array(oQ),
          kQ = FQ / wQ,
          vQ = 1 / (kQ * kQ);
        for (let uQ = 0; uQ < wQ; uQ++) {
          const QQ = Math.floor(uQ * kQ),
            oQ = Math.floor((uQ + 1) * kQ);
          for (let mQ = 0; mQ < wQ; mQ++) {
            const HQ = Math.floor(mQ * kQ),
              bQ = Math.floor((mQ + 1) * kQ),
              YQ = (uQ * wQ + mQ) * LQ;
            for (let wQ = 0; wQ < LQ; wQ++) {
              let kQ = 0;
              for (let DQ = QQ; DQ < oQ; DQ++)
                for (let QQ = HQ; QQ < bQ; QQ++) kQ += qQ[(DQ * FQ + QQ) * LQ + wQ];
              DQ[YQ + wQ] = kQ * vQ
            }
          }
        }
        if (QQ instanceof Float32Array) return DQ;
        const mQ = new(0, QQ.constructor)(oQ);
        for (let uQ = 0; uQ < oQ; uQ++) mQ[uQ] = DQ[uQ] + .5 | 0;
        return mQ
      }
      static ConvertCubeMapToSphericalPolynomial(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wQ = FQ > 0 ? this._NearestPow2Floor(FQ) : 0;
        if (wQ > 0 && QQ.size > wQ) {
          const FQ = 5 === QQ.format ? 4 : 3,
            LQ = ["right", "left", "up", "down", "front", "back"],
            qQ = {};
          for (const oQ of LQ) qQ[oQ] = this._DownsampleFace(QQ[oQ], QQ.size, wQ, FQ);
          QQ = {
            ...QQ,
            ...qQ,
            size: wQ
          }
        }
        const LQ = new oQ.b;
        let vQ = 0;
        const mQ = 2 / QQ.size,
          uQ = mQ,
          HQ = .5 * mQ,
          bQ = HQ - 1;
        for (let oQ = 0; oQ < 6; oQ++) {
          const FQ = this._FileFaces[oQ],
            wQ = QQ[FQ.name];
          let YQ = bQ;
          const xQ = 5 === QQ.format ? 4 : 3;
          for (let oQ = 0; oQ < QQ.size; oQ++) {
            let AQ = bQ;
            for (let uQ = 0; uQ < QQ.size; uQ++) {
              const bQ = FQ.worldAxisForFileX.scale(AQ).add(FQ.worldAxisForFileY.scale(YQ)).add(FQ.worldAxisForNormal);
              bQ.normalize();
              const tQ = this._AreaElement(AQ - HQ, YQ - HQ) - this._AreaElement(AQ - HQ, YQ + HQ) - this._AreaElement(AQ + HQ, YQ - HQ) + this._AreaElement(AQ + HQ, YQ + HQ);
              let eQ = wQ[oQ * QQ.size * xQ + uQ * xQ + 0],
                MQ = wQ[oQ * QQ.size * xQ + uQ * xQ + 1],
                GQ = wQ[oQ * QQ.size * xQ + uQ * xQ + 2];
              isNaN(eQ) && (eQ = 0), isNaN(MQ) && (MQ = 0), isNaN(GQ) && (GQ = 0), 0 === QQ.type && (eQ /= 255, MQ /= 255, GQ /= 255), QQ.gammaSpace && (eQ = Math.pow((0, qQ.Clamp)(eQ), DQ.g), MQ = Math.pow((0, qQ.Clamp)(MQ), DQ.g), GQ = Math.pow((0, qQ.Clamp)(GQ), DQ.g));
              const pQ = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const QQ = Math.max(eQ, MQ, GQ);
                if (QQ > pQ) {
                  const FQ = pQ / QQ;
                  eQ *= FQ, MQ *= FQ, GQ *= FQ
                }
              } else eQ = (0, qQ.Clamp)(eQ, 0, pQ), MQ = (0, qQ.Clamp)(MQ, 0, pQ), GQ = (0, qQ.Clamp)(GQ, 0, pQ);
              const cQ = new kQ.b(eQ, MQ, GQ);
              LQ.addLight(bQ, cQ, tQ), vQ += tQ, AQ += mQ
            }
            YQ += uQ
          }
        }
        const YQ = 6 * (4 * Math.PI) / 6 / vQ;
        return LQ.scaleInPlace(YQ), LQ.convertIncidentRadianceToIrradiance(), LQ.convertIrradianceToLambertianRadiance(), oQ.e.FromHarmonics(LQ)
      }
    }
    mQ._FileFaces = [new vQ("right", new LQ.p(1, 0, 0), new LQ.p(0, 0, -1), new LQ.p(0, -1, 0)), new vQ("left", new LQ.p(-1, 0, 0), new LQ.p(0, 0, 1), new LQ.p(0, -1, 0)), new vQ("up", new LQ.p(0, 1, 0), new LQ.p(1, 0, 0), new LQ.p(0, 0, 1)), new vQ("down", new LQ.p(0, -1, 0), new LQ.p(1, 0, 0), new LQ.p(0, 0, -1)), new vQ("front", new LQ.p(0, 0, 1), new LQ.p(1, 0, 0), new LQ.p(0, -1, 0)), new vQ("back", new LQ.p(0, 0, -1), new LQ.p(-1, 0, 0), new LQ.p(0, -1, 0))], mQ.MAX_HDRI_VALUE = 4096, mQ.PRESERVE_CLAMPED_COLORS = !1
  },
  40956: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ.h,
      e: () => LQ.p
    });
    var LQ = wQ(39448);
    (0, LQ.t)()
  },
  37452: (QQ, FQ, wQ) => {
    function LQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const FQ = 16 * Math.random() | 0;
        return ("x" === QQ ? FQ : 3 & FQ | 8).toString(16)
      }))
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  },
  41209: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ
    });
    var LQ = wQ(41200),
      qQ = wQ(41214);
    class oQ {
      static ExpandRGBDTexture(QQ) {
        const FQ = QQ._texture;
        if (!FQ || !QQ.isRGBD) return;
        const qQ = FQ.Wx(),
          oQ = qQ.getCaps(),
          DQ = FQ.isReady;
        let kQ = !1;
        oQ.textureHalfFloatRender && oQ.textureHalfFloatLinearFiltering ? (kQ = !0, FQ.type = 2) : oQ.textureFloatRender && oQ.textureFloatLinearFiltering && (kQ = !0, FQ.type = 1), kQ && (FQ.isReady = !1, FQ._isRGBD = !1, FQ.invertY = !1);
        const vQ = async () => {
          const oQ = qQ.isWebGPU,
            DQ = oQ ? 1 : 0;
          FQ.isReady = !1, oQ ? await wQ.e(333).then((() => wQ(60878))) : await wQ.e(315).then((() => wQ(60885)));
          const kQ = new LQ.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, qQ, !1, void 0, FQ.type, void 0, null, !1, void 0, DQ);
          kQ.externalTextureSamplerBinding = !0;
          const vQ = qQ.createRenderTargetTexture(FQ.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: FQ.samplingMode,
            type: FQ.type,
            format: 5
          });
          kQ.onEffectCreatedObservable.addOnce((wQ => {
            wQ.executeWhenCompiled((() => {
              kQ.onApply = QQ => {
                QQ._bindTexture("textureSampler", FQ), QQ.setFloat2("scale", 1, 1)
              }, QQ.iN()?.postProcessManager.directRender([kQ], vQ, !0), qQ.restoreDefaultFramebuffer(), qQ._releaseTexture(FQ), kQ && kQ.dispose(), vQ._swapAndDie(FQ), FQ.isReady = !0
            }))
          }))
        };
        kQ && (DQ ? vQ() : QQ.onLoadObservable.addOnce(vQ))
      }
      static async EncodeTextureToRGBD(QQ, FQ) {
        let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return FQ.Wx().isWebGPU ? await wQ.e(334).then((() => wQ(60908))) : await wQ.e(316).then((() => wQ(60900))), await (0, qQ.b)("rgbdEncode", QQ, FQ, LQ, 1, 5)
      }
    }
  },
  60631: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      AsyncLoop: () => LQ.d,
      RegisterTools: () => LQ.e,
      Tools: () => LQ.g,
      className: () => LQ.k
    });
    var LQ = wQ(39505);
    (0, LQ.e)()
  },
  41257: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    class LQ {
      constructor(QQ) {
        this._pendingActions = new Array, this._workerInfos = QQ.map((QQ => ({
          workerPromise: Promise.resolve(QQ),
          idle: !0
        })))
      }
      dispose() {
        for (const QQ of this._workerInfos) QQ.workerPromise.then((QQ => {
          QQ.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(QQ) {
        this._executeOnIdleWorker(QQ) || this._pendingActions.push(QQ)
      }
      _executeOnIdleWorker(QQ) {
        for (const FQ of this._workerInfos)
          if (FQ.idle) return this._execute(FQ, QQ), !0;
        return !1
      }
      _execute(QQ, FQ) {
        QQ.idle = !1, QQ.workerPromise.then((wQ => {
          FQ(wQ, (() => {
            const FQ = this._pendingActions.shift();
            FQ ? this._execute(QQ, FQ) : QQ.idle = !0
          }))
        }))
      }
    }
    class qQ extends LQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.DefaultOptions;
        super([]), this._maxWorkers = QQ, this._createWorkerAsync = FQ, this._options = wQ
      }
      push(QQ) {
        if (!this._executeOnIdleWorker(QQ))
          if (this._workerInfos.length < this._maxWorkers) {
            const FQ = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(FQ), this._execute(FQ, QQ)
          } else this._pendingActions.push(QQ)
      }
      _execute(QQ, FQ) {
        QQ.timeoutId && (clearTimeout(QQ.timeoutId), delete QQ.timeoutId), super._execute(QQ, ((wQ, LQ) => {
          FQ(wQ, (() => {
            LQ(), QQ.idle && (QQ.timeoutId = setTimeout((() => {
              QQ.workerPromise.then((QQ => {
                QQ.terminate()
              }));
              const FQ = this._workerInfos.indexOf(QQ); - 1 !== FQ && this._workerInfos.splice(FQ, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    qQ.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60666: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      AbstractThreeMfSerializer: () => Zk,
      BVHExporter: () => sD,
      ContentTypeFileName: () => ek,
      DefaultXmlSerializerFormatOptions: () => JD,
      DefaultXmlSerializerNumberOptions: () => hD,
      EXT_lights_area: () => eq,
      EXT_mesh_gpu_instancing: () => aL,
      EXT_texture_avif: () => kD,
      EXT_texture_webp: () => LD,
      GLTF2Export: () => zL,
      GLTFData: () => mQ,
      GetXmlFieldMeta: () => jD,
      GetXmlName: () => aD,
      IsQualifiedName: () => rD,
      KHR_draco_mesh_compression: () => BL,
      KHR_interactivity: () => uq,
      KHR_lights_punctual: () => Dq,
      KHR_materials_anisotropy: () => cq,
      KHR_materials_clearcoat: () => Rq,
      KHR_materials_coat: () => Nq,
      KHR_materials_diffuse_roughness: () => jo,
      KHR_materials_diffuse_transmission: () => aq,
      KHR_materials_dispersion: () => hq,
      KHR_materials_emissive_strength: () => gq,
      KHR_materials_fuzz: () => Ho,
      KHR_materials_ior: () => Bq,
      KHR_materials_iridescence: () => wo,
      KHR_materials_openpbr: () => Vo,
      KHR_materials_sheen: () => Do,
      KHR_materials_specular: () => Ao,
      KHR_materials_transmission: () => Go,
      KHR_materials_unlit: () => io,
      KHR_materials_volume: () => so,
      KHR_materials_volume_scatter: () => No,
      KHR_texture_basisu: () => Bo,
      KHR_texture_transform: () => no,
      Known3mfRelationshipTypes: () => Mk,
      KnownI3mfContentType: () => bk,
      Matrix3d: () => ik,
      MatrixFormatter: () => Wk,
      ModelFileName: () => Ak,
      NumberFormatter: () => gD,
      OBJExport: () => DQ,
      Object3dDirName: () => xk,
      OpenXmlContentTypesNamespace: () => uk,
      OpenXmlRelationshipsNamespace: () => Hk,
      RegisterEXT_lights_area: () => Gq,
      RegisterEXT_mesh_gpu_instancing: () => fL,
      RegisterEXT_texture_avif: () => mD,
      RegisterEXT_texture_webp: () => oD,
      RegisterKHR_draco_mesh_compression: () => Qq,
      RegisterKHR_interactivity: () => bq,
      RegisterKHR_lights_punctual: () => vq,
      RegisterKHR_materials_anisotropy: () => Sq,
      RegisterKHR_materials_clearcoat: () => sq,
      RegisterKHR_materials_coat: () => Kq,
      RegisterKHR_materials_diffuse_roughness: () => Xo,
      RegisterKHR_materials_diffuse_transmission: () => fq,
      RegisterKHR_materials_dispersion: () => Eq,
      RegisterKHR_materials_emissive_strength: () => Zq,
      RegisterKHR_materials_fuzz: () => Yo,
      RegisterKHR_materials_ior: () => Qo,
      RegisterKHR_materials_iridescence: () => qo,
      RegisterKHR_materials_openpbr: () => Jo,
      RegisterKHR_materials_sheen: () => vo,
      RegisterKHR_materials_specular: () => eo,
      RegisterKHR_materials_transmission: () => co,
      RegisterKHR_materials_unlit: () => Ro,
      RegisterKHR_materials_volume: () => Io,
      RegisterKHR_materials_volume_scatter: () => Ko,
      RegisterKHR_texture_basisu: () => FD,
      RegisterKHR_texture_transform: () => Po,
      RelationshipDirName: () => Yk,
      RelationshipFileName: () => tk,
      ResolveFormatOptions: () => nD,
      ResolveNumberOptions: () => ED,
      STLExport: () => uD,
      ST_ObjectType: () => mk,
      ST_Unit: () => vk,
      StringXmlWriter: () => Lk,
      ThreeDimModelNamespace: () => Dk,
      ThreeMf: () => yk,
      ThreeMfBase: () => Xk,
      ThreeMfBaseMaterials: () => ak,
      ThreeMfBuild: () => fk,
      ThreeMfComponent: () => jk,
      ThreeMfComponents: () => lk,
      ThreeMfComponentsBuilder: () => Jk,
      ThreeMfContentType: () => pk,
      ThreeMfContentTypes: () => Gk,
      ThreeMfDocument: () => Sk,
      ThreeMfDocumentBuilder: () => Pk,
      ThreeMfItem: () => Vk,
      ThreeMfMaterialBuilder: () => nk,
      ThreeMfMesh: () => Uk,
      ThreeMfMeshBuilder: () => Ek,
      ThreeMfMeta: () => Ok,
      ThreeMfMetadataGroup: () => sk,
      ThreeMfModel: () => Rk,
      ThreeMfModelBuilder: () => gk,
      ThreeMfObject: () => Ik,
      ThreeMfObjectBuilder: () => hk,
      ThreeMfRelationship: () => Ck,
      ThreeMfRelationships: () => ck,
      ThreeMfResources: () => rk,
      ThreeMfSerializer: () => Qv,
      ThreeMfSerializerGlobalConfiguration: () => Bk,
      ThreeMfTriangle: () => zk,
      ThreeMfTriangles: () => Kk,
      ThreeMfVertex: () => Tk,
      ThreeMfVertices: () => Nk,
      ToQualifiedString: () => VD,
      TokenType: () => Fk,
      TriangleSetsNamespace: () => kk,
      USDZExportAsync: () => RD,
      Utf8XmlWriterToBytes: () => qk,
      XmlAttr: () => zD,
      XmlBuilder: () => wk,
      XmlElem: () => lD,
      XmlIgnore: () => KD,
      XmlName: () => TD,
      XmlNameToParts: () => fD,
      XmlSerializer: () => dD,
      _ConvertToGLTFPBRMetallicRoughness: () => Rw,
      _SolveMetallic: () => Ww,
      __IGLTFExporterExtension: () => kQ
    });
    var LQ = wQ(36688),
      qQ = wQ(60631),
      oQ = wQ(39717);
    class DQ {
      static OBJ(QQ, FQ, wQ, DQ) {
        const kQ = [];
        let vQ = 1,
          mQ = 1;
        FQ && (wQ || (wQ = "mat"), kQ.push("mtllib " + wQ + ".mtl"));
        for (let uQ = 0; uQ < QQ.length; uQ++) {
          const wQ = QQ[uQ],
            HQ = wQ.name || `mesh${uQ}}`;
          kQ.push(`o ${HQ}`);
          let bQ = null;
          if (DQ) {
            const QQ = wQ.computeWorldMatrix(!0);
            bQ = new LQ.Matrix, QQ.invertToRef(bQ), wQ.bakeTransformIntoVertices(QQ)
          }
          if (FQ) {
            const QQ = wQ.material;
            QQ && kQ.push("usemtl " + QQ.id)
          }
          const YQ = wQ.geometry;
          if (!YQ) {
            qQ.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const xQ = YQ.getVerticesData("position"),
            AQ = YQ.getVerticesData("normal"),
            tQ = YQ.getVerticesData("uv"),
            eQ = YQ.OLQ();
          let MQ = 0,
            GQ = 0;
          if (!xQ || !eQ) {
            qQ.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const pQ = QQ[0].iN().useRightHandedSystem ? 1 : -1;
          for (let QQ = 0; QQ < xQ.length; QQ += 3) kQ.push("v " + xQ[QQ] * pQ + " " + xQ[QQ + 1] + " " + xQ[QQ + 2]), MQ++;
          if (null != AQ)
            for (let QQ = 0; QQ < AQ.length; QQ += 3) kQ.push("vn " + AQ[QQ] * pQ + " " + AQ[QQ + 1] + " " + AQ[QQ + 2]);
          if (null != tQ)
            for (let QQ = 0; QQ < tQ.length; QQ += 2) kQ.push("vt " + tQ[QQ] + " " + tQ[QQ + 1]), GQ++;
          const cQ = ["", "", ""],
            CQ = (wQ.material || wQ.iN().defaultMaterial)._getEffectiveOrientation(wQ),
            [SQ, iQ] = CQ === oQ.d.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let QQ = 0; QQ < eQ.length; QQ += 3) {
            const FQ = [String(eQ[QQ] + vQ), String(eQ[QQ + SQ] + vQ), String(eQ[QQ + iQ] + vQ)],
              wQ = [String(eQ[QQ] + mQ), String(eQ[QQ + SQ] + mQ), String(eQ[QQ + iQ] + mQ)],
              LQ = FQ,
              qQ = null != tQ ? wQ : cQ,
              oQ = null != AQ ? FQ : cQ;
            kQ.push("f " + LQ[0] + "/" + qQ[0] + "/" + oQ[0] + " " + LQ[1] + "/" + qQ[1] + "/" + oQ[1] + " " + LQ[2] + "/" + qQ[2] + "/" + oQ[2])
          }
          DQ && bQ && wQ.bakeTransformIntoVertices(bQ), vQ += MQ, mQ += GQ
        }
        return kQ.join("\n")
      }
      static MTL(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const wQ = [],
          LQ = QQ.material;
        wQ.push("newmtl " + FQ), wQ.push("  Ns " + LQ.specularPower.toFixed(4)), wQ.push("  Ni 1.5000"), wQ.push("  d " + LQ.alpha.toFixed(4)), wQ.push("  Tr 0.0000"), wQ.push("  Tf 1.0000 1.0000 1.0000"), wQ.push("  illum 2"), wQ.push("  Ka " + LQ.ambientColor.r.toFixed(4) + " " + LQ.ambientColor.g.toFixed(4) + " " + LQ.ambientColor.b.toFixed(4)), wQ.push("  Kd " + LQ.diffuseColor.r.toFixed(4) + " " + LQ.diffuseColor.g.toFixed(4) + " " + LQ.diffuseColor.b.toFixed(4)), wQ.push("  Ks " + LQ.specularColor.r.toFixed(4) + " " + LQ.specularColor.g.toFixed(4) + " " + LQ.specularColor.b.toFixed(4)), wQ.push("  Ke " + LQ.emissiveColor.r.toFixed(4) + " " + LQ.emissiveColor.g.toFixed(4) + " " + LQ.emissiveColor.b.toFixed(4));
        LQ.ambientTexture && wQ.push("  map_Ka " + LQ.ambientTexture.name), LQ.diffuseTexture && wQ.push("  map_Kd " + LQ.diffuseTexture.name), LQ.specularTexture && wQ.push("  map_Ks " + LQ.specularTexture.name), LQ.bumpTexture && wQ.push("  map_bump -imfchan z " + LQ.bumpTexture.name), LQ.opacityTexture && wQ.push("  map_d " + LQ.opacityTexture.name);
        return wQ.join("\n")
      }
    }
    var kQ = 0,
      vQ = wQ(40956);
    class mQ {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const QQ in this.files) {
          const FQ = this.files[QQ],
            wQ = new Blob([FQ], {
              type: (0, vQ.d)(QQ)
            });
          qQ.Tools.Download(wQ, QQ)
        }
      }
    }
    var uQ = wQ(40554),
      HQ = wQ(40518),
      bQ = wQ(41039),
      YQ = wQ(40526),
      xQ = wQ(39211),
      AQ = wQ(36720),
      tQ = wQ(36870),
      eQ = wQ(36729);
    const MQ = eQ.HighestCommonFactor,
      GQ = {
        ...eQ,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: MQ
      };
    var pQ = wQ(41214),
      cQ = wQ(40539),
      CQ = wQ(40998),
      SQ = wQ(41005),
      iQ = wQ(41235);
    (0, iQ.RegisterDumpTools)();
    var WQ = wQ(39402),
      RQ = wQ(39409),
      OQ = wQ(38203),
      sQ = wQ(39518),
      rQ = wQ(39897),
      IQ = wQ(41209);
    let UQ = 0;
    const NQ = (QQ, FQ, wQ, LQ) => {
        if (!QQ[wQ]) {
          const qQ = QQ.useDelayedTextureLoading;
          QQ.useDelayedTextureLoading = !1;
          const oQ = QQ._blockEntityCollection;
          QQ._blockEntityCollection = !1;
          const DQ = rQ.e.CreateFromBase64String(FQ, LQ + UQ++, QQ, !0, !1, rQ.e.BILINEAR_SAMPLINGMODE);
          QQ._blockEntityCollection = oQ;
          const kQ = QQ.Wx().getLoadedTexturesCache(),
            vQ = kQ.indexOf(DQ.getInternalTexture()); - 1 !== vQ && kQ.splice(vQ, 1), DQ.isRGBD = !0, DQ.wrapU = rQ.e.CLAMP_ADDRESSMODE, DQ.wrapV = rQ.e.CLAMP_ADDRESSMODE, QQ[wQ] = DQ, QQ.useDelayedTextureLoading = qQ, IQ.d.ExpandRGBDTexture(DQ);
          const mQ = QQ.Wx().onContextRestoredObservable.add((() => {
            DQ.isRGBD = !0;
            const FQ = QQ.onBeforeRenderObservable.add((() => {
              DQ.isReady() && (QQ.onBeforeRenderObservable.remove(FQ), IQ.d.ExpandRGBDTexture(DQ))
            }))
          }));
          QQ.zN.add((() => {
            QQ.Wx().onContextRestoredObservable.remove(mQ)
          }))
        }
        return QQ[wQ]
      },
      TQ = QQ => NQ(QQ, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      KQ = QQ => NQ(QQ, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      zQ = QQ => NQ(QQ, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var lQ = wQ(39496),
      jQ = wQ(36696),
      aQ = wQ(39561),
      XQ = wQ(39711),
      fQ = wQ(39781);
    class VQ extends XQ.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let hQ = (() => {
      var QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ;
      let uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ = fQ.d,
        pQ = [],
        cQ = [],
        CQ = [],
        SQ = [],
        iQ = [],
        OQ = [],
        sQ = [],
        rQ = [],
        IQ = [],
        UQ = [],
        NQ = [],
        TQ = [],
        KQ = [],
        zQ = [],
        lQ = [],
        jQ = [],
        aQ = [],
        XQ = [];
      return QQ = class extends GQ {
        get useEnergyConservation() {
          return (0, WQ.c)(this, FQ, "f")
        }
        set useEnergyConservation(QQ) {
          (0, WQ.f)(this, FQ, QQ, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, WQ.c)(this, wQ, "f")
        }
        set useSmithVisibilityHeightCorrelated(QQ) {
          (0, WQ.f)(this, wQ, QQ, "f")
        }
        get useSphericalHarmonics() {
          return (0, WQ.c)(this, LQ, "f")
        }
        set useSphericalHarmonics(QQ) {
          (0, WQ.f)(this, LQ, QQ, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, WQ.c)(this, qQ, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(QQ) {
          (0, WQ.f)(this, qQ, QQ, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, WQ.c)(this, oQ, "f")
        }
        set mixIblRadianceWithIrradiance(QQ) {
          (0, WQ.f)(this, oQ, QQ, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, WQ.c)(this, DQ, "f")
        }
        set useLegacySpecularEnergyConservation(QQ) {
          (0, WQ.f)(this, DQ, QQ, "f")
        }
        get baseDiffuseModel() {
          return (0, WQ.c)(this, kQ, "f")
        }
        set baseDiffuseModel(QQ) {
          (0, WQ.f)(this, kQ, QQ, "f")
        }
        get dielectricSpecularModel() {
          return (0, WQ.c)(this, vQ, "f")
        }
        set dielectricSpecularModel(QQ) {
          (0, WQ.f)(this, vQ, QQ, "f")
        }
        get conductorSpecularModel() {
          return (0, WQ.c)(this, mQ, "f")
        }
        set conductorSpecularModel(QQ) {
          (0, WQ.f)(this, mQ, QQ, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(uQ) {
          let HQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(uQ, "PBRBRDF", 90, new VQ, HQ), this._useEnergyConservation = QQ.DEFAULT_USE_ENERGY_CONSERVATION, FQ.set(this, (0, WQ.l)(this, pQ, QQ.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, WQ.l)(this, cQ), QQ.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), wQ.set(this, (0, WQ.l)(this, CQ, QQ.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, WQ.l)(this, SQ), QQ.DEFAULT_USE_SPHERICAL_HARMONICS), LQ.set(this, (0, WQ.l)(this, iQ, QQ.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, WQ.l)(this, OQ), QQ.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), qQ.set(this, (0, WQ.l)(this, sQ, QQ.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, WQ.l)(this, rQ), QQ.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), oQ.set(this, (0, WQ.l)(this, IQ, QQ.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, WQ.l)(this, UQ), QQ.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), DQ.set(this, (0, WQ.l)(this, NQ, QQ.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, WQ.l)(this, TQ), QQ.DEFAULT_DIFFUSE_MODEL), kQ.set(this, (0, WQ.l)(this, KQ, QQ.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, WQ.l)(this, zQ), QQ.DEFAULT_DIELECTRIC_SPECULAR_MODEL), vQ.set(this, (0, WQ.l)(this, lQ, QQ.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, WQ.l)(this, jQ), QQ.DEFAULT_CONDUCTOR_SPECULAR_MODEL), mQ.set(this, (0, WQ.l)(this, aQ, QQ.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, WQ.l)(this, XQ), this._internalMarkAllSubMeshesAsMiscDirty = uQ._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(QQ) {
          QQ.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, QQ.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, QQ.SPHERICAL_HARMONICS = this._useSphericalHarmonics, QQ.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, QQ.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, QQ.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, QQ.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, QQ.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, QQ.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, FQ = new WeakMap, wQ = new WeakMap, LQ = new WeakMap, qQ = new WeakMap, oQ = new WeakMap, DQ = new WeakMap, kQ = new WeakMap, vQ = new WeakMap, mQ = new WeakMap, (() => {
        const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(GQ[Symbol.metadata] ?? null) : void 0;
        uQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], HQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], bQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], YQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], xQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], AQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], tQ = [(0, RQ.I)("baseDiffuseModel"), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], eQ = [(0, RQ.I)("dielectricSpecularModel"), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], MQ = [(0, RQ.I)("conductorSpecularModel"), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], (0, WQ.i)(QQ, null, uQ, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useEnergyConservation" in QQ,
            get: QQ => QQ.useEnergyConservation,
            set: (QQ, FQ) => {
              QQ.useEnergyConservation = FQ
            }
          },
          metadata: FQ
        }, pQ, cQ), (0, WQ.i)(QQ, null, HQ, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useSmithVisibilityHeightCorrelated" in QQ,
            get: QQ => QQ.useSmithVisibilityHeightCorrelated,
            set: (QQ, FQ) => {
              QQ.useSmithVisibilityHeightCorrelated = FQ
            }
          },
          metadata: FQ
        }, CQ, SQ), (0, WQ.i)(QQ, null, bQ, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useSphericalHarmonics" in QQ,
            get: QQ => QQ.useSphericalHarmonics,
            set: (QQ, FQ) => {
              QQ.useSphericalHarmonics = FQ
            }
          },
          metadata: FQ
        }, iQ, OQ), (0, WQ.i)(QQ, null, YQ, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useSpecularGlossinessInputEnergyConservation" in QQ,
            get: QQ => QQ.useSpecularGlossinessInputEnergyConservation,
            set: (QQ, FQ) => {
              QQ.useSpecularGlossinessInputEnergyConservation = FQ
            }
          },
          metadata: FQ
        }, sQ, rQ), (0, WQ.i)(QQ, null, xQ, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "mixIblRadianceWithIrradiance" in QQ,
            get: QQ => QQ.mixIblRadianceWithIrradiance,
            set: (QQ, FQ) => {
              QQ.mixIblRadianceWithIrradiance = FQ
            }
          },
          metadata: FQ
        }, IQ, UQ), (0, WQ.i)(QQ, null, AQ, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useLegacySpecularEnergyConservation" in QQ,
            get: QQ => QQ.useLegacySpecularEnergyConservation,
            set: (QQ, FQ) => {
              QQ.useLegacySpecularEnergyConservation = FQ
            }
          },
          metadata: FQ
        }, NQ, TQ), (0, WQ.i)(QQ, null, tQ, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "baseDiffuseModel" in QQ,
            get: QQ => QQ.baseDiffuseModel,
            set: (QQ, FQ) => {
              QQ.baseDiffuseModel = FQ
            }
          },
          metadata: FQ
        }, KQ, zQ), (0, WQ.i)(QQ, null, eQ, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "dielectricSpecularModel" in QQ,
            get: QQ => QQ.dielectricSpecularModel,
            set: (QQ, FQ) => {
              QQ.dielectricSpecularModel = FQ
            }
          },
          metadata: FQ
        }, lQ, jQ), (0, WQ.i)(QQ, null, MQ, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "conductorSpecularModel" in QQ,
            get: QQ => QQ.conductorSpecularModel,
            set: (QQ, FQ) => {
              QQ.conductorSpecularModel = FQ
            }
          },
          metadata: FQ
        }, aQ, XQ), FQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FQ
        })
      })(), QQ.DEFAULT_USE_ENERGY_CONSERVATION = !0, QQ.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, QQ.DEFAULT_USE_SPHERICAL_HARMONICS = !0, QQ.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, QQ.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, QQ.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, QQ.DEFAULT_DIFFUSE_MODEL = 0, QQ.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, QQ.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, QQ
    })();
    var JQ = wQ(39704),
      EQ = wQ(36873),
      nQ = wQ(39708),
      gQ = wQ(39527),
      PQ = wQ(39768),
      ZQ = wQ(39760),
      yQ = wQ(39770),
      BQ = wQ(39752);
    class dQ extends XQ.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let QF = (() => {
      var QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ;
      let uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ = fQ.d,
        OQ = [],
        sQ = [],
        rQ = [],
        IQ = [],
        UQ = [],
        NQ = [],
        TQ = [],
        KQ = [],
        zQ = [],
        lQ = [],
        jQ = [],
        aQ = [],
        XQ = [],
        VQ = [],
        hQ = [],
        JQ = [],
        nQ = [],
        gQ = [],
        PQ = [],
        yQ = [],
        QF = [],
        FF = [],
        wF = [],
        LF = [],
        qF = [],
        oF = [],
        DF = [],
        kF = [];
      return QQ = class extends iQ {
        get isEnabled() {
          return (0, WQ.c)(this, FQ, "f")
        }
        set isEnabled(QQ) {
          (0, WQ.f)(this, FQ, QQ, "f")
        }
        get indexOfRefraction() {
          return (0, WQ.c)(this, wQ, "f")
        }
        set indexOfRefraction(QQ) {
          (0, WQ.f)(this, wQ, QQ, "f")
        }
        get texture() {
          return (0, WQ.c)(this, LQ, "f")
        }
        set texture(QQ) {
          (0, WQ.f)(this, LQ, QQ, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, WQ.c)(this, qQ, "f")
        }
        set useRoughnessFromMainTexture(QQ) {
          (0, WQ.f)(this, qQ, QQ, "f")
        }
        get textureRoughness() {
          return (0, WQ.c)(this, oQ, "f")
        }
        set textureRoughness(QQ) {
          (0, WQ.f)(this, oQ, QQ, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, WQ.c)(this, DQ, "f")
        }
        set remapF0OnInterfaceChange(QQ) {
          (0, WQ.f)(this, DQ, QQ, "f")
        }
        get bumpTexture() {
          return (0, WQ.c)(this, kQ, "f")
        }
        set bumpTexture(QQ) {
          (0, WQ.f)(this, kQ, QQ, "f")
        }
        get isTintEnabled() {
          return (0, WQ.c)(this, vQ, "f")
        }
        set isTintEnabled(QQ) {
          (0, WQ.f)(this, vQ, QQ, "f")
        }
        get tintTexture() {
          return (0, WQ.c)(this, mQ, "f")
        }
        set tintTexture(QQ) {
          (0, WQ.f)(this, mQ, QQ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(uQ) {
          let HQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(uQ, "PBRClearCoat", 100, new dQ, HQ), this._isEnabled = !1, FQ.set(this, (0, WQ.l)(this, OQ, !1)), this.intensity = ((0, WQ.l)(this, sQ), (0, WQ.l)(this, rQ, 1)), this.roughness = ((0, WQ.l)(this, IQ), (0, WQ.l)(this, UQ, 0)), this._indexOfRefraction = ((0, WQ.l)(this, NQ), QQ._DefaultIndexOfRefraction), wQ.set(this, (0, WQ.l)(this, TQ, QQ._DefaultIndexOfRefraction)), this._texture = ((0, WQ.l)(this, KQ), null), LQ.set(this, (0, WQ.l)(this, zQ, null)), this._useRoughnessFromMainTexture = ((0, WQ.l)(this, lQ), !0), qQ.set(this, (0, WQ.l)(this, jQ, !0)), this._textureRoughness = ((0, WQ.l)(this, aQ), null), oQ.set(this, (0, WQ.l)(this, XQ, null)), this._remapF0OnInterfaceChange = ((0, WQ.l)(this, VQ), !0), DQ.set(this, (0, WQ.l)(this, hQ, !0)), this._bumpTexture = ((0, WQ.l)(this, JQ), null), kQ.set(this, (0, WQ.l)(this, nQ, null)), this._isTintEnabled = ((0, WQ.l)(this, gQ), !1), vQ.set(this, (0, WQ.l)(this, PQ, !1)), this.tintColor = ((0, WQ.l)(this, yQ), (0, WQ.l)(this, QF, EQ.b.White())), this.tintColorAtDistance = ((0, WQ.l)(this, FF), (0, WQ.l)(this, wF, 1)), this.tintThickness = ((0, WQ.l)(this, LF), (0, WQ.l)(this, qF, 1)), this._tintTexture = ((0, WQ.l)(this, oF), null), mQ.set(this, (0, WQ.l)(this, DF, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, WQ.l)(this, kF), this._internalMarkAllSubMeshesAsTexturesDirty = uQ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(QQ, FQ, wQ) {
          if (!this._isEnabled) return !0;
          const LQ = this._material._disableBumpMap;
          if (QQ._areTexturesDirty && FQ.texturesEnabled) {
            if (this._texture && ZQ.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && ZQ.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (wQ.getCaps().standardDerivatives && this._bumpTexture && ZQ.e.ClearCoatBumpTextureEnabled && !LQ && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && ZQ.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(FQ, wQ) {
          this._isEnabled ? (FQ.CLEARCOAT = !0, FQ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, FQ.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, FQ._areTexturesDirty && wQ.texturesEnabled && (this._texture && ZQ.e.ClearCoatTextureEnabled ? (0, BQ.X)(this._texture, FQ, "CLEARCOAT_TEXTURE") : FQ.CLEARCOAT_TEXTURE = !1, this._textureRoughness && ZQ.e.ClearCoatTextureEnabled ? (0, BQ.X)(this._textureRoughness, FQ, "CLEARCOAT_TEXTURE_ROUGHNESS") : FQ.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && ZQ.e.ClearCoatBumpTextureEnabled ? (0, BQ.X)(this._bumpTexture, FQ, "CLEARCOAT_BUMP") : FQ.CLEARCOAT_BUMP = !1, FQ.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === QQ._DefaultIndexOfRefraction, this._isTintEnabled ? (FQ.CLEARCOAT_TINT = !0, this._tintTexture && ZQ.e.ClearCoatTintTextureEnabled ? ((0, BQ.X)(this._tintTexture, FQ, "CLEARCOAT_TINT_TEXTURE"), FQ.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : FQ.CLEARCOAT_TINT_TEXTURE = !1) : (FQ.CLEARCOAT_TINT = !1, FQ.CLEARCOAT_TINT_TEXTURE = !1))) : (FQ.CLEARCOAT = !1, FQ.CLEARCOAT_TEXTURE = !1, FQ.CLEARCOAT_TEXTURE_ROUGHNESS = !1, FQ.CLEARCOAT_BUMP = !1, FQ.CLEARCOAT_TINT = !1, FQ.CLEARCOAT_TINT_TEXTURE = !1, FQ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, FQ.CLEARCOAT_DEFAULTIOR = !1, FQ.CLEARCOAT_TEXTUREDIRECTUV = 0, FQ.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, FQ.CLEARCOAT_BUMPDIRECTUV = 0, FQ.CLEARCOAT_REMAP_F0 = !1, FQ.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, FQ.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(QQ, FQ, wQ, LQ) {
          if (!this._isEnabled) return;
          const qQ = LQ.materialDefines,
            oQ = this._material.isFrozen,
            DQ = this._material._disableBumpMap,
            kQ = this._material._invertNormalMapX,
            vQ = this._material._invertNormalMapY;
          if (!QQ.useUbo || !oQ || !QQ.isSync) {
            (this._texture || this._textureRoughness) && ZQ.e.ClearCoatTextureEnabled && (QQ.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, BQ.y)(this._texture, QQ, "clearCoat"), this._textureRoughness && !qQ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, BQ.y)(this._textureRoughness, QQ, "clearCoatRoughness")), this._bumpTexture && wQ.getCaps().standardDerivatives && ZQ.e.ClearCoatTextureEnabled && !DQ && (QQ.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, BQ.y)(this._bumpTexture, QQ, "clearCoatBump"), FQ._mirroredCameraPosition ? QQ.updateFloat2("vClearCoatTangentSpaceParams", kQ ? 1 : -1, vQ ? 1 : -1) : QQ.updateFloat2("vClearCoatTangentSpaceParams", kQ ? -1 : 1, vQ ? -1 : 1)), this._tintTexture && ZQ.e.ClearCoatTintTextureEnabled && (QQ.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, BQ.y)(this._tintTexture, QQ, "clearCoatTint")), QQ.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const LQ = 1 - this._indexOfRefraction,
              oQ = 1 + this._indexOfRefraction,
              mQ = Math.pow(-LQ / oQ, 2),
              uQ = 1 / this._indexOfRefraction;
            QQ.updateFloat4("vClearCoatRefractionParams", mQ, uQ, LQ, oQ), this._isTintEnabled && (QQ.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), QQ.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          FQ.texturesEnabled && (this._texture && ZQ.e.ClearCoatTextureEnabled && QQ.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !qQ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && ZQ.e.ClearCoatTextureEnabled && QQ.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && wQ.getCaps().standardDerivatives && ZQ.e.ClearCoatBumpTextureEnabled && !DQ && QQ.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && ZQ.e.ClearCoatTintTextureEnabled && QQ.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(QQ) {
          return this._texture === QQ || (this._textureRoughness === QQ || (this._bumpTexture === QQ || this._tintTexture === QQ))
        }
        getActiveTextures(QQ) {
          this._texture && QQ.push(this._texture), this._textureRoughness && QQ.push(this._textureRoughness), this._bumpTexture && QQ.push(this._bumpTexture), this._tintTexture && QQ.push(this._tintTexture)
        }
        getAnimatables(QQ) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && QQ.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && QQ.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && QQ.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && QQ.push(this._tintTexture)
        }
        dispose(QQ) {
          QQ && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(QQ, FQ, wQ) {
          return QQ.CLEARCOAT_BUMP && FQ.addFallback(wQ++, "CLEARCOAT_BUMP"), QQ.CLEARCOAT_TINT && FQ.addFallback(wQ++, "CLEARCOAT_TINT"), QQ.CLEARCOAT && FQ.addFallback(wQ++, "CLEARCOAT"), wQ
        }
        getSamplers(QQ) {
          QQ.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vClearCoatParams",
              size: 2,
              type: "vec2"
            }, {
              name: "vClearCoatRefractionParams",
              size: 4,
              type: "vec4"
            }, {
              name: "vClearCoatInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "clearCoatMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "clearCoatRoughnessMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vClearCoatBumpInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vClearCoatTangentSpaceParams",
              size: 2,
              type: "vec2"
            }, {
              name: "clearCoatBumpMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vClearCoatTintParams",
              size: 4,
              type: "vec4"
            }, {
              name: "clearCoatColorAtDistance",
              size: 1,
              type: "float"
            }, {
              name: "vClearCoatTintInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "clearCoatTintMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, FQ = new WeakMap, wQ = new WeakMap, LQ = new WeakMap, qQ = new WeakMap, oQ = new WeakMap, DQ = new WeakMap, kQ = new WeakMap, vQ = new WeakMap, mQ = new WeakMap, (() => {
        const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(iQ[Symbol.metadata] ?? null) : void 0;
        uQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], HQ = [(0, RQ.I)()], bQ = [(0, RQ.I)()], YQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], xQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], AQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], tQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], eQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], MQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], GQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], pQ = [(0, RQ.m)()], cQ = [(0, RQ.I)()], CQ = [(0, RQ.I)()], SQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], (0, WQ.i)(QQ, null, uQ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, FQ) => {
              QQ.isEnabled = FQ
            }
          },
          metadata: FQ
        }, OQ, sQ), (0, WQ.i)(QQ, null, YQ, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "indexOfRefraction" in QQ,
            get: QQ => QQ.indexOfRefraction,
            set: (QQ, FQ) => {
              QQ.indexOfRefraction = FQ
            }
          },
          metadata: FQ
        }, TQ, KQ), (0, WQ.i)(QQ, null, xQ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "texture" in QQ,
            get: QQ => QQ.texture,
            set: (QQ, FQ) => {
              QQ.texture = FQ
            }
          },
          metadata: FQ
        }, zQ, lQ), (0, WQ.i)(QQ, null, AQ, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRoughnessFromMainTexture" in QQ,
            get: QQ => QQ.useRoughnessFromMainTexture,
            set: (QQ, FQ) => {
              QQ.useRoughnessFromMainTexture = FQ
            }
          },
          metadata: FQ
        }, jQ, aQ), (0, WQ.i)(QQ, null, tQ, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "textureRoughness" in QQ,
            get: QQ => QQ.textureRoughness,
            set: (QQ, FQ) => {
              QQ.textureRoughness = FQ
            }
          },
          metadata: FQ
        }, XQ, VQ), (0, WQ.i)(QQ, null, eQ, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: QQ => "remapF0OnInterfaceChange" in QQ,
            get: QQ => QQ.remapF0OnInterfaceChange,
            set: (QQ, FQ) => {
              QQ.remapF0OnInterfaceChange = FQ
            }
          },
          metadata: FQ
        }, hQ, JQ), (0, WQ.i)(QQ, null, MQ, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "bumpTexture" in QQ,
            get: QQ => QQ.bumpTexture,
            set: (QQ, FQ) => {
              QQ.bumpTexture = FQ
            }
          },
          metadata: FQ
        }, nQ, gQ), (0, WQ.i)(QQ, null, GQ, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isTintEnabled" in QQ,
            get: QQ => QQ.isTintEnabled,
            set: (QQ, FQ) => {
              QQ.isTintEnabled = FQ
            }
          },
          metadata: FQ
        }, PQ, yQ), (0, WQ.i)(QQ, null, SQ, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintTexture" in QQ,
            get: QQ => QQ.tintTexture,
            set: (QQ, FQ) => {
              QQ.tintTexture = FQ
            }
          },
          metadata: FQ
        }, DF, kF), (0, WQ.i)(null, null, HQ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensity" in QQ,
            get: QQ => QQ.intensity,
            set: (QQ, FQ) => {
              QQ.intensity = FQ
            }
          },
          metadata: FQ
        }, rQ, IQ), (0, WQ.i)(null, null, bQ, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "roughness" in QQ,
            get: QQ => QQ.roughness,
            set: (QQ, FQ) => {
              QQ.roughness = FQ
            }
          },
          metadata: FQ
        }, UQ, NQ), (0, WQ.i)(null, null, pQ, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintColor" in QQ,
            get: QQ => QQ.tintColor,
            set: (QQ, FQ) => {
              QQ.tintColor = FQ
            }
          },
          metadata: FQ
        }, QF, FF), (0, WQ.i)(null, null, cQ, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintColorAtDistance" in QQ,
            get: QQ => QQ.tintColorAtDistance,
            set: (QQ, FQ) => {
              QQ.tintColorAtDistance = FQ
            }
          },
          metadata: FQ
        }, wF, LF), (0, WQ.i)(null, null, CQ, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintThickness" in QQ,
            get: QQ => QQ.tintThickness,
            set: (QQ, FQ) => {
              QQ.tintThickness = FQ
            }
          },
          metadata: FQ
        }, qF, oF), FQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FQ
        })
      })(), QQ._DefaultIndexOfRefraction = 1.5, QQ
    })();
    class FF extends XQ.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let wF = (() => {
      var QQ, FQ, wQ, LQ;
      let qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ = fQ.d,
        bQ = [],
        YQ = [],
        xQ = [],
        AQ = [],
        tQ = [],
        eQ = [],
        MQ = [],
        GQ = [],
        pQ = [],
        cQ = [],
        CQ = [],
        SQ = [],
        iQ = [],
        OQ = [];
      return QQ = class extends HQ {
        get isEnabled() {
          return (0, WQ.c)(this, FQ, "f")
        }
        set isEnabled(QQ) {
          (0, WQ.f)(this, FQ, QQ, "f")
        }
        get texture() {
          return (0, WQ.c)(this, wQ, "f")
        }
        set texture(QQ) {
          (0, WQ.f)(this, wQ, QQ, "f")
        }
        get thicknessTexture() {
          return (0, WQ.c)(this, LQ, "f")
        }
        set thicknessTexture(QQ) {
          (0, WQ.f)(this, LQ, QQ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(qQ) {
          let oQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(qQ, "PBRIridescence", 110, new FF, oQ), this._isEnabled = !1, FQ.set(this, (0, WQ.l)(this, bQ, !1)), this.intensity = ((0, WQ.l)(this, YQ), (0, WQ.l)(this, xQ, 1)), this.minimumThickness = ((0, WQ.l)(this, AQ), (0, WQ.l)(this, tQ, QQ._DefaultMinimumThickness)), this.maximumThickness = ((0, WQ.l)(this, eQ), (0, WQ.l)(this, MQ, QQ._DefaultMaximumThickness)), this.indexOfRefraction = ((0, WQ.l)(this, GQ), (0, WQ.l)(this, pQ, QQ._DefaultIndexOfRefraction)), this._texture = ((0, WQ.l)(this, cQ), null), wQ.set(this, (0, WQ.l)(this, CQ, null)), this._thicknessTexture = ((0, WQ.l)(this, SQ), null), LQ.set(this, (0, WQ.l)(this, iQ, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, WQ.l)(this, OQ), this._internalMarkAllSubMeshesAsTexturesDirty = qQ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(QQ, FQ) {
          if (!this._isEnabled) return !0;
          if (QQ._areTexturesDirty && FQ.texturesEnabled) {
            if (this._texture && ZQ.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && ZQ.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(QQ, FQ) {
          this._isEnabled ? (QQ.IRIDESCENCE = !0, QQ._areTexturesDirty && FQ.texturesEnabled && (this._texture && ZQ.e.IridescenceTextureEnabled ? (0, BQ.X)(this._texture, QQ, "IRIDESCENCE_TEXTURE") : QQ.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && ZQ.e.IridescenceTextureEnabled ? (0, BQ.X)(this._thicknessTexture, QQ, "IRIDESCENCE_THICKNESS_TEXTURE") : QQ.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (QQ.IRIDESCENCE = !1, QQ.IRIDESCENCE_TEXTURE = !1, QQ.IRIDESCENCE_THICKNESS_TEXTURE = !1, QQ.IRIDESCENCE_TEXTUREDIRECTUV = 0, QQ.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(QQ, FQ) {
          if (!this._isEnabled) return;
          const wQ = this._material.isFrozen;
          QQ.useUbo && wQ && QQ.isSync || ((this._texture || this._thicknessTexture) && ZQ.e.IridescenceTextureEnabled && (QQ.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, BQ.y)(this._texture, QQ, "iridescence"), this._thicknessTexture && (0, BQ.y)(this._thicknessTexture, QQ, "iridescenceThickness")), QQ.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), FQ.texturesEnabled && (this._texture && ZQ.e.IridescenceTextureEnabled && QQ.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && ZQ.e.IridescenceTextureEnabled && QQ.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(QQ) {
          return this._texture === QQ || this._thicknessTexture === QQ
        }
        getActiveTextures(QQ) {
          this._texture && QQ.push(this._texture), this._thicknessTexture && QQ.push(this._thicknessTexture)
        }
        getAnimatables(QQ) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && QQ.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && QQ.push(this._thicknessTexture)
        }
        dispose(QQ) {
          QQ && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(QQ, FQ, wQ) {
          return QQ.IRIDESCENCE && FQ.addFallback(wQ++, "IRIDESCENCE"), wQ
        }
        getSamplers(QQ) {
          QQ.push("iridescenceSampler", "iridescenceThicknessSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vIridescenceParams",
              size: 4,
              type: "vec4"
            }, {
              name: "vIridescenceInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "iridescenceMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "iridescenceThicknessMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, FQ = new WeakMap, wQ = new WeakMap, LQ = new WeakMap, (() => {
        const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(HQ[Symbol.metadata] ?? null) : void 0;
        qQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], oQ = [(0, RQ.I)()], DQ = [(0, RQ.I)()], kQ = [(0, RQ.I)()], vQ = [(0, RQ.I)()], mQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], uQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], (0, WQ.i)(QQ, null, qQ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, FQ) => {
              QQ.isEnabled = FQ
            }
          },
          metadata: FQ
        }, bQ, YQ), (0, WQ.i)(QQ, null, mQ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "texture" in QQ,
            get: QQ => QQ.texture,
            set: (QQ, FQ) => {
              QQ.texture = FQ
            }
          },
          metadata: FQ
        }, CQ, SQ), (0, WQ.i)(QQ, null, uQ, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "thicknessTexture" in QQ,
            get: QQ => QQ.thicknessTexture,
            set: (QQ, FQ) => {
              QQ.thicknessTexture = FQ
            }
          },
          metadata: FQ
        }, iQ, OQ), (0, WQ.i)(null, null, oQ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensity" in QQ,
            get: QQ => QQ.intensity,
            set: (QQ, FQ) => {
              QQ.intensity = FQ
            }
          },
          metadata: FQ
        }, xQ, AQ), (0, WQ.i)(null, null, DQ, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "minimumThickness" in QQ,
            get: QQ => QQ.minimumThickness,
            set: (QQ, FQ) => {
              QQ.minimumThickness = FQ
            }
          },
          metadata: FQ
        }, tQ, eQ), (0, WQ.i)(null, null, kQ, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "maximumThickness" in QQ,
            get: QQ => QQ.maximumThickness,
            set: (QQ, FQ) => {
              QQ.maximumThickness = FQ
            }
          },
          metadata: FQ
        }, MQ, GQ), (0, WQ.i)(null, null, vQ, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "indexOfRefraction" in QQ,
            get: QQ => QQ.indexOfRefraction,
            set: (QQ, FQ) => {
              QQ.indexOfRefraction = FQ
            }
          },
          metadata: FQ
        }, pQ, cQ), FQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FQ
        })
      })(), QQ._DefaultMinimumThickness = 100, QQ._DefaultMaximumThickness = 400, QQ._DefaultIndexOfRefraction = 1.3, QQ
    })();
    class LF extends XQ.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let qF = (() => {
      var QQ, FQ, wQ, LQ;
      let qQ, oQ, DQ, kQ, vQ, mQ = fQ.d,
        uQ = [],
        HQ = [],
        bQ = [],
        YQ = [],
        xQ = [],
        AQ = [],
        tQ = [],
        eQ = [],
        MQ = [],
        GQ = [];
      return QQ = class extends mQ {
        get isEnabled() {
          return (0, WQ.c)(this, FQ, "f")
        }
        set isEnabled(QQ) {
          (0, WQ.f)(this, FQ, QQ, "f")
        }
        set angle(QQ) {
          this.direction.x = Math.cos(QQ), this.direction.y = Math.sin(QQ)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, WQ.c)(this, wQ, "f")
        }
        set texture(QQ) {
          (0, WQ.f)(this, wQ, QQ, "f")
        }
        get legacy() {
          return (0, WQ.c)(this, LQ, "f")
        }
        set legacy(QQ) {
          (0, WQ.f)(this, LQ, QQ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        _markAllSubMeshesAsMiscDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(QQ) {
          let qQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(QQ, "PBRAnisotropic", 110, new LF, qQ), this._isEnabled = !1, FQ.set(this, (0, WQ.l)(this, uQ, !1)), this.intensity = ((0, WQ.l)(this, HQ), (0, WQ.l)(this, bQ, 1)), this.direction = ((0, WQ.l)(this, YQ), (0, WQ.l)(this, xQ, new jQ.n(1, 0))), this._texture = ((0, WQ.l)(this, AQ), null), wQ.set(this, (0, WQ.l)(this, tQ, null)), this._legacy = ((0, WQ.l)(this, eQ), !1), LQ.set(this, (0, WQ.l)(this, MQ, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, WQ.l)(this, GQ), this._internalMarkAllSubMeshesAsTexturesDirty = QQ._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = QQ._dirtyCallbacks[16]
        }
        isReadyForSubMesh(QQ, FQ) {
          return !this._isEnabled || !(QQ._areTexturesDirty && FQ.texturesEnabled && this._texture && ZQ.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(QQ, FQ, wQ) {
          this._isEnabled ? (QQ.ANISOTROPIC = this._isEnabled, this._isEnabled && !wQ.isVerticesDataPresent(aQ.h.TangentKind) && (QQ._needUVs = !0, QQ.MAINUV1 = !0), QQ._areTexturesDirty && FQ.texturesEnabled && (this._texture && ZQ.e.AnisotropicTextureEnabled ? (0, BQ.X)(this._texture, QQ, "ANISOTROPIC_TEXTURE") : QQ.ANISOTROPIC_TEXTURE = !1), QQ._areMiscDirty && (QQ.ANISOTROPIC_LEGACY = this._legacy)) : (QQ.ANISOTROPIC = !1, QQ.ANISOTROPIC_TEXTURE = !1, QQ.ANISOTROPIC_TEXTUREDIRECTUV = 0, QQ.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(QQ, FQ) {
          if (!this._isEnabled) return;
          const wQ = this._material.isFrozen;
          QQ.useUbo && wQ && QQ.isSync || (this._texture && ZQ.e.AnisotropicTextureEnabled && (QQ.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, BQ.y)(this._texture, QQ, "anisotropy")), QQ.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), FQ.texturesEnabled && this._texture && ZQ.e.AnisotropicTextureEnabled && QQ.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(QQ) {
          return this._texture === QQ
        }
        getActiveTextures(QQ) {
          this._texture && QQ.push(this._texture)
        }
        getAnimatables(QQ) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && QQ.push(this._texture)
        }
        dispose(QQ) {
          QQ && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(QQ, FQ, wQ) {
          return QQ.ANISOTROPIC && FQ.addFallback(wQ++, "ANISOTROPIC"), wQ
        }
        getSamplers(QQ) {
          QQ.push("anisotropySampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vAnisotropy",
              size: 3,
              type: "vec3"
            }, {
              name: "vAnisotropyInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "anisotropyMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
        parse(QQ, FQ, wQ) {
          super.parse(QQ, FQ, wQ), void 0 === QQ.legacy && (this.legacy = !0)
        }
      }, FQ = new WeakMap, wQ = new WeakMap, LQ = new WeakMap, (() => {
        const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(mQ[Symbol.metadata] ?? null) : void 0;
        qQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], oQ = [(0, RQ.I)()], DQ = [(0, RQ.C)()], kQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], vQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], (0, WQ.i)(QQ, null, qQ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, FQ) => {
              QQ.isEnabled = FQ
            }
          },
          metadata: FQ
        }, uQ, HQ), (0, WQ.i)(QQ, null, kQ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "texture" in QQ,
            get: QQ => QQ.texture,
            set: (QQ, FQ) => {
              QQ.texture = FQ
            }
          },
          metadata: FQ
        }, tQ, eQ), (0, WQ.i)(QQ, null, vQ, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: QQ => "legacy" in QQ,
            get: QQ => QQ.legacy,
            set: (QQ, FQ) => {
              QQ.legacy = FQ
            }
          },
          metadata: FQ
        }, MQ, GQ), (0, WQ.i)(null, null, oQ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensity" in QQ,
            get: QQ => QQ.intensity,
            set: (QQ, FQ) => {
              QQ.intensity = FQ
            }
          },
          metadata: FQ
        }, bQ, YQ), (0, WQ.i)(null, null, DQ, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "direction" in QQ,
            get: QQ => QQ.direction,
            set: (QQ, FQ) => {
              QQ.direction = FQ
            }
          },
          metadata: FQ
        }, xQ, AQ), FQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FQ
        })
      })(), QQ
    })();
    class oF extends XQ.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let DF = (() => {
      var QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ;
      let vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ = fQ.d,
        MQ = [],
        GQ = [],
        pQ = [],
        cQ = [],
        CQ = [],
        SQ = [],
        iQ = [],
        OQ = [],
        sQ = [],
        rQ = [],
        IQ = [],
        UQ = [],
        NQ = [],
        TQ = [],
        KQ = [],
        zQ = [],
        lQ = [],
        jQ = [];
      return QQ = class extends eQ {
        get isEnabled() {
          return (0, WQ.c)(this, FQ, "f")
        }
        set isEnabled(QQ) {
          (0, WQ.f)(this, FQ, QQ, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, WQ.c)(this, wQ, "f")
        }
        set linkSheenWithAlbedo(QQ) {
          (0, WQ.f)(this, wQ, QQ, "f")
        }
        get texture() {
          return (0, WQ.c)(this, LQ, "f")
        }
        set texture(QQ) {
          (0, WQ.f)(this, LQ, QQ, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, WQ.c)(this, qQ, "f")
        }
        set useRoughnessFromMainTexture(QQ) {
          (0, WQ.f)(this, qQ, QQ, "f")
        }
        get roughness() {
          return (0, WQ.c)(this, oQ, "f")
        }
        set roughness(QQ) {
          (0, WQ.f)(this, oQ, QQ, "f")
        }
        get textureRoughness() {
          return (0, WQ.c)(this, DQ, "f")
        }
        set textureRoughness(QQ) {
          (0, WQ.f)(this, DQ, QQ, "f")
        }
        get albedoScaling() {
          return (0, WQ.c)(this, kQ, "f")
        }
        set albedoScaling(QQ) {
          (0, WQ.f)(this, kQ, QQ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(QQ) {
          let vQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(QQ, "Sheen", 120, new oF, vQ), this._isEnabled = !1, FQ.set(this, (0, WQ.l)(this, MQ, !1)), this._linkSheenWithAlbedo = ((0, WQ.l)(this, GQ), !1), wQ.set(this, (0, WQ.l)(this, pQ, !1)), this.intensity = ((0, WQ.l)(this, cQ), (0, WQ.l)(this, CQ, 1)), this.color = ((0, WQ.l)(this, SQ), (0, WQ.l)(this, iQ, EQ.b.White())), this._texture = ((0, WQ.l)(this, OQ), null), LQ.set(this, (0, WQ.l)(this, sQ, null)), this._useRoughnessFromMainTexture = ((0, WQ.l)(this, rQ), !0), qQ.set(this, (0, WQ.l)(this, IQ, !0)), this._roughness = ((0, WQ.l)(this, UQ), null), oQ.set(this, (0, WQ.l)(this, NQ, null)), this._textureRoughness = ((0, WQ.l)(this, TQ), null), DQ.set(this, (0, WQ.l)(this, KQ, null)), this._albedoScaling = ((0, WQ.l)(this, zQ), !1), kQ.set(this, (0, WQ.l)(this, lQ, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, WQ.l)(this, jQ), this._internalMarkAllSubMeshesAsTexturesDirty = QQ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(QQ, FQ) {
          if (!this._isEnabled) return !0;
          if (QQ._areTexturesDirty && FQ.texturesEnabled) {
            if (this._texture && ZQ.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && ZQ.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(QQ, FQ) {
          this._isEnabled ? (QQ.SHEEN = !0, QQ.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, QQ.SHEEN_ROUGHNESS = null !== this._roughness, QQ.SHEEN_ALBEDOSCALING = this._albedoScaling, QQ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, QQ._areTexturesDirty && FQ.texturesEnabled && (this._texture && ZQ.e.SheenTextureEnabled ? ((0, BQ.X)(this._texture, QQ, "SHEEN_TEXTURE"), QQ.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : QQ.SHEEN_TEXTURE = !1, this._textureRoughness && ZQ.e.SheenTextureEnabled ? (0, BQ.X)(this._textureRoughness, QQ, "SHEEN_TEXTURE_ROUGHNESS") : QQ.SHEEN_TEXTURE_ROUGHNESS = !1)) : (QQ.SHEEN = !1, QQ.SHEEN_TEXTURE = !1, QQ.SHEEN_TEXTURE_ROUGHNESS = !1, QQ.SHEEN_LINKWITHALBEDO = !1, QQ.SHEEN_ROUGHNESS = !1, QQ.SHEEN_ALBEDOSCALING = !1, QQ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, QQ.SHEEN_GAMMATEXTURE = !1, QQ.SHEEN_TEXTUREDIRECTUV = 0, QQ.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(QQ, FQ, wQ, LQ) {
          if (!this._isEnabled) return;
          const qQ = LQ.materialDefines,
            oQ = this._material.isFrozen;
          QQ.useUbo && oQ && QQ.isSync || ((this._texture || this._textureRoughness) && ZQ.e.SheenTextureEnabled && (QQ.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, BQ.y)(this._texture, QQ, "sheen"), this._textureRoughness && !qQ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, BQ.y)(this._textureRoughness, QQ, "sheenRoughness")), QQ.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && QQ.updateFloat("vSheenRoughness", this._roughness)), FQ.texturesEnabled && (this._texture && ZQ.e.SheenTextureEnabled && QQ.setTexture("sheenSampler", this._texture), this._textureRoughness && !qQ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && ZQ.e.SheenTextureEnabled && QQ.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(QQ) {
          return this._texture === QQ || this._textureRoughness === QQ
        }
        getActiveTextures(QQ) {
          this._texture && QQ.push(this._texture), this._textureRoughness && QQ.push(this._textureRoughness)
        }
        getAnimatables(QQ) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && QQ.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && QQ.push(this._textureRoughness)
        }
        dispose(QQ) {
          QQ && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(QQ, FQ, wQ) {
          return QQ.SHEEN && FQ.addFallback(wQ++, "SHEEN"), wQ
        }
        getSamplers(QQ) {
          QQ.push("sheenSampler", "sheenRoughnessSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vSheenColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vSheenRoughness",
              size: 1,
              type: "float"
            }, {
              name: "vSheenInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "sheenMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "sheenRoughnessMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, FQ = new WeakMap, wQ = new WeakMap, LQ = new WeakMap, qQ = new WeakMap, oQ = new WeakMap, DQ = new WeakMap, kQ = new WeakMap, (() => {
        const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(eQ[Symbol.metadata] ?? null) : void 0;
        vQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], mQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], uQ = [(0, RQ.I)()], HQ = [(0, RQ.m)()], bQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], YQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], xQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], AQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], tQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], (0, WQ.i)(QQ, null, vQ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, FQ) => {
              QQ.isEnabled = FQ
            }
          },
          metadata: FQ
        }, MQ, GQ), (0, WQ.i)(QQ, null, mQ, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: QQ => "linkSheenWithAlbedo" in QQ,
            get: QQ => QQ.linkSheenWithAlbedo,
            set: (QQ, FQ) => {
              QQ.linkSheenWithAlbedo = FQ
            }
          },
          metadata: FQ
        }, pQ, cQ), (0, WQ.i)(QQ, null, bQ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "texture" in QQ,
            get: QQ => QQ.texture,
            set: (QQ, FQ) => {
              QQ.texture = FQ
            }
          },
          metadata: FQ
        }, sQ, rQ), (0, WQ.i)(QQ, null, YQ, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRoughnessFromMainTexture" in QQ,
            get: QQ => QQ.useRoughnessFromMainTexture,
            set: (QQ, FQ) => {
              QQ.useRoughnessFromMainTexture = FQ
            }
          },
          metadata: FQ
        }, IQ, UQ), (0, WQ.i)(QQ, null, xQ, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "roughness" in QQ,
            get: QQ => QQ.roughness,
            set: (QQ, FQ) => {
              QQ.roughness = FQ
            }
          },
          metadata: FQ
        }, NQ, TQ), (0, WQ.i)(QQ, null, AQ, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "textureRoughness" in QQ,
            get: QQ => QQ.textureRoughness,
            set: (QQ, FQ) => {
              QQ.textureRoughness = FQ
            }
          },
          metadata: FQ
        }, KQ, zQ), (0, WQ.i)(QQ, null, tQ, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: QQ => "albedoScaling" in QQ,
            get: QQ => QQ.albedoScaling,
            set: (QQ, FQ) => {
              QQ.albedoScaling = FQ
            }
          },
          metadata: FQ
        }, lQ, jQ), (0, WQ.i)(null, null, uQ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensity" in QQ,
            get: QQ => QQ.intensity,
            set: (QQ, FQ) => {
              QQ.intensity = FQ
            }
          },
          metadata: FQ
        }, CQ, SQ), (0, WQ.i)(null, null, HQ, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: QQ => "color" in QQ,
            get: QQ => QQ.color,
            set: (QQ, FQ) => {
              QQ.color = FQ
            }
          },
          metadata: FQ
        }, iQ, OQ), FQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FQ
        })
      })(), QQ
    })();
    class kF extends XQ.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let vF = (() => {
      var QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ;
      let eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, OQ, sQ, rQ, IQ, UQ, NQ, TQ, KQ, zQ, lQ, aQ, XQ, VQ, hQ, JQ, nQ, gQ, PQ, yQ, dQ, QF, FF, wF = fQ.d,
        LF = [],
        qF = [],
        oF = [],
        DF = [],
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
        hF = [],
        JF = [],
        EF = [],
        nF = [],
        gF = [],
        PF = [],
        ZF = [],
        yF = [],
        BF = [],
        dF = [],
        Qw = [],
        Fw = [],
        ww = [],
        Lw = [],
        qw = [],
        ow = [],
        Dw = [],
        kw = [],
        vw = [],
        mw = [],
        uw = [],
        Hw = [];
      return QQ = class extends wF {
        get isRefractionEnabled() {
          return (0, WQ.c)(this, FQ, "f")
        }
        set isRefractionEnabled(QQ) {
          (0, WQ.f)(this, FQ, QQ, "f")
        }
        get isTranslucencyEnabled() {
          return (0, WQ.c)(this, wQ, "f")
        }
        set isTranslucencyEnabled(QQ) {
          (0, WQ.f)(this, wQ, QQ, "f")
        }
        get isDispersionEnabled() {
          return (0, WQ.c)(this, LQ, "f")
        }
        set isDispersionEnabled(QQ) {
          (0, WQ.f)(this, LQ, QQ, "f")
        }
        get isScatteringEnabled() {
          return (0, WQ.c)(this, qQ, "f")
        }
        set isScatteringEnabled(QQ) {
          (0, WQ.f)(this, qQ, QQ, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(QQ) {
          this._scene.enableSubSurfaceForPrePass() && QQ && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(QQ))
        }
        get useAlbedoToTintRefraction() {
          return (0, WQ.c)(this, oQ, "f")
        }
        set useAlbedoToTintRefraction(QQ) {
          (0, WQ.f)(this, oQ, QQ, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, WQ.c)(this, DQ, "f")
        }
        set useAlbedoToTintTranslucency(QQ) {
          (0, WQ.f)(this, DQ, QQ, "f")
        }
        get thicknessTexture() {
          return (0, WQ.c)(this, kQ, "f")
        }
        set thicknessTexture(QQ) {
          (0, WQ.f)(this, kQ, QQ, "f")
        }
        get refractionTexture() {
          return (0, WQ.c)(this, vQ, "f")
        }
        set refractionTexture(QQ) {
          (0, WQ.f)(this, vQ, QQ, "f")
        }
        get indexOfRefraction() {
          return (0, WQ.c)(this, mQ, "f")
        }
        set indexOfRefraction(QQ) {
          (0, WQ.f)(this, mQ, QQ, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(QQ) {
          const FQ = QQ >= 1 ? QQ : -1;
          this._volumeIndexOfRefraction !== FQ && (this._volumeIndexOfRefraction = FQ, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, WQ.c)(this, uQ, "f")
        }
        set invertRefractionY(QQ) {
          (0, WQ.f)(this, uQ, QQ, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, WQ.c)(this, HQ, "f")
        }
        set linkRefractionWithTransparency(QQ) {
          (0, WQ.f)(this, HQ, QQ, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, WQ.c)(this, bQ, "f")
        }
        set useMaskFromThicknessTexture(QQ) {
          (0, WQ.f)(this, bQ, QQ, "f")
        }
        get refractionIntensityTexture() {
          return (0, WQ.c)(this, YQ, "f")
        }
        set refractionIntensityTexture(QQ) {
          (0, WQ.f)(this, YQ, QQ, "f")
        }
        get translucencyIntensityTexture() {
          return (0, WQ.c)(this, xQ, "f")
        }
        set translucencyIntensityTexture(QQ) {
          (0, WQ.f)(this, xQ, QQ, "f")
        }
        get translucencyColorTexture() {
          return (0, WQ.c)(this, AQ, "f")
        }
        set translucencyColorTexture(QQ) {
          (0, WQ.f)(this, AQ, QQ, "f")
        }
        get useGltfStyleTextures() {
          return (0, WQ.c)(this, tQ, "f")
        }
        set useGltfStyleTextures(QQ) {
          (0, WQ.f)(this, tQ, QQ, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(QQ) {
          this.legacyTranslucency = QQ
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        _markScenePrePassDirty() {
          this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled), this._internalMarkAllSubMeshesAsTexturesDirty(), this._internalMarkScenePrePassDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(eQ) {
          let MQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(eQ, "PBRSubSurface", 130, new kF, MQ), this._isRefractionEnabled = !1, FQ.set(this, (0, WQ.l)(this, LF, !1)), this._isTranslucencyEnabled = ((0, WQ.l)(this, qF), !1), wQ.set(this, (0, WQ.l)(this, oF, !1)), this._isDispersionEnabled = ((0, WQ.l)(this, DF), !1), LQ.set(this, (0, WQ.l)(this, vF, !1)), this._isScatteringEnabled = ((0, WQ.l)(this, mF), !1), qQ.set(this, (0, WQ.l)(this, uF, !1)), this._scatteringDiffusionProfileIndex = ((0, WQ.l)(this, HF), (0, WQ.l)(this, bF, 0)), this.refractionIntensity = ((0, WQ.l)(this, YF), (0, WQ.l)(this, xF, 1)), this.translucencyIntensity = ((0, WQ.l)(this, AF), (0, WQ.l)(this, tF, 1)), this._useAlbedoToTintRefraction = ((0, WQ.l)(this, eF), !1), oQ.set(this, (0, WQ.l)(this, MF, !1)), this._useAlbedoToTintTranslucency = ((0, WQ.l)(this, GF), !1), DQ.set(this, (0, WQ.l)(this, pF, !1)), this._thicknessTexture = ((0, WQ.l)(this, cF), null), kQ.set(this, (0, WQ.l)(this, CF, null)), this._refractionTexture = ((0, WQ.l)(this, SF), null), vQ.set(this, (0, WQ.l)(this, iF, null)), this._indexOfRefraction = ((0, WQ.l)(this, WF), 1.5), mQ.set(this, (0, WQ.l)(this, RF, 1.5)), this._volumeIndexOfRefraction = ((0, WQ.l)(this, OF), (0, WQ.l)(this, sF, -1)), this._invertRefractionY = ((0, WQ.l)(this, rF), !1), uQ.set(this, (0, WQ.l)(this, IF, !1)), this._linkRefractionWithTransparency = ((0, WQ.l)(this, UF), !1), HQ.set(this, (0, WQ.l)(this, NF, !1)), this.minimumThickness = ((0, WQ.l)(this, TF), (0, WQ.l)(this, KF, 0)), this.maximumThickness = ((0, WQ.l)(this, zF), (0, WQ.l)(this, lF, 1)), this.useThicknessAsDepth = ((0, WQ.l)(this, jF), (0, WQ.l)(this, aF, !1)), this.tintColor = ((0, WQ.l)(this, XF), (0, WQ.l)(this, fF, EQ.b.White())), this.tintColorAtDistance = ((0, WQ.l)(this, VF), (0, WQ.l)(this, hF, 1)), this.dispersion = ((0, WQ.l)(this, JF), (0, WQ.l)(this, EF, 0)), this.diffusionDistance = ((0, WQ.l)(this, nF), (0, WQ.l)(this, gF, EQ.b.White())), this._useMaskFromThicknessTexture = ((0, WQ.l)(this, PF), !1), bQ.set(this, (0, WQ.l)(this, ZF, !1)), this._refractionIntensityTexture = ((0, WQ.l)(this, yF), null), YQ.set(this, (0, WQ.l)(this, BF, null)), this._translucencyIntensityTexture = ((0, WQ.l)(this, dF), null), xQ.set(this, (0, WQ.l)(this, Qw, null)), this.translucencyColor = ((0, WQ.l)(this, Fw), (0, WQ.l)(this, ww, null)), this._translucencyColorTexture = ((0, WQ.l)(this, Lw), null), AQ.set(this, (0, WQ.l)(this, qw, null)), this._useGltfStyleTextures = ((0, WQ.l)(this, ow), !0), tQ.set(this, (0, WQ.l)(this, Dw, !0)), this.applyAlbedoAfterSubSurface = ((0, WQ.l)(this, kw), (0, WQ.l)(this, vw, QQ.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, WQ.l)(this, mw), (0, WQ.l)(this, uw, QQ.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, WQ.l)(this, Hw), this._scene = eQ.iN(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = eQ._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = eQ._dirtyCallbacks[32]
        }
        isReadyForSubMesh(QQ, FQ) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (QQ._areTexturesDirty && FQ.texturesEnabled) {
            if (this._thicknessTexture && ZQ.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && ZQ.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && ZQ.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && ZQ.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const QQ = this._getRefractionTexture(FQ);
            if (QQ && ZQ.e.RefractionTextureEnabled && !QQ.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(QQ, FQ) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return QQ.SUBSURFACE = !1, QQ.SS_DISPERSION = !1, QQ.SS_TRANSLUCENCY = !1, QQ.SS_SCATTERING = !1, QQ.SS_REFRACTION = !1, QQ.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, QQ.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, QQ.SS_THICKNESSANDMASK_TEXTURE = !1, QQ.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, QQ.SS_HAS_THICKNESS = !1, QQ.SS_REFRACTIONINTENSITY_TEXTURE = !1, QQ.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, QQ.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, QQ.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, QQ.SS_REFRACTIONMAP_3D = !1, QQ.SS_REFRACTIONMAP_OPPOSITEZ = !1, QQ.SS_LODINREFRACTIONALPHA = !1, QQ.SS_GAMMAREFRACTION = !1, QQ.SS_RGBDREFRACTION = !1, QQ.SS_LINEARSPECULARREFRACTION = !1, QQ.SS_LINKREFRACTIONTOTRANSPARENCY = !1, QQ.SS_ALBEDOFORREFRACTIONTINT = !1, QQ.SS_ALBEDOFORTRANSLUCENCYTINT = !1, QQ.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, QQ.SS_USE_THICKNESS_AS_DEPTH = !1, QQ.SS_USE_GLTF_TEXTURES = !1, QQ.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, QQ.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, QQ.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(QQ.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (QQ._areTexturesDirty) {
            if (QQ.SUBSURFACE = !0, QQ.SS_DISPERSION = this._isDispersionEnabled, QQ.SS_TRANSLUCENCY = this._isTranslucencyEnabled, QQ.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, QQ.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, QQ.SS_SCATTERING = this._isScatteringEnabled, QQ.SS_THICKNESSANDMASK_TEXTURE = !1, QQ.SS_REFRACTIONINTENSITY_TEXTURE = !1, QQ.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, QQ.SS_HAS_THICKNESS = !1, QQ.SS_USE_GLTF_TEXTURES = !1, QQ.SS_REFRACTION = !1, QQ.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, QQ.SS_REFRACTIONMAP_3D = !1, QQ.SS_GAMMAREFRACTION = !1, QQ.SS_RGBDREFRACTION = !1, QQ.SS_LINEARSPECULARREFRACTION = !1, QQ.SS_REFRACTIONMAP_OPPOSITEZ = !1, QQ.SS_LODINREFRACTIONALPHA = !1, QQ.SS_LINKREFRACTIONTOTRANSPARENCY = !1, QQ.SS_ALBEDOFORREFRACTIONTINT = !1, QQ.SS_ALBEDOFORTRANSLUCENCYTINT = !1, QQ.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, QQ.SS_USE_THICKNESS_AS_DEPTH = !1, QQ.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, QQ.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, QQ._areTexturesDirty && FQ.texturesEnabled && (this._thicknessTexture && ZQ.e.ThicknessTextureEnabled && (0, BQ.X)(this._thicknessTexture, QQ, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && ZQ.e.RefractionIntensityTextureEnabled && (0, BQ.X)(this._refractionIntensityTexture, QQ, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && ZQ.e.TranslucencyIntensityTextureEnabled && (0, BQ.X)(this._translucencyIntensityTexture, QQ, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && ZQ.e.TranslucencyColorTextureEnabled && ((0, BQ.X)(this._translucencyColorTexture, QQ, "SS_TRANSLUCENCYCOLOR_TEXTURE"), QQ.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), QQ.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, QQ.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, QQ.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, QQ.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && FQ.texturesEnabled) {
              const wQ = this._getRefractionTexture(FQ);
              wQ && ZQ.e.RefractionTextureEnabled && (QQ.SS_REFRACTION = !0, QQ.SS_REFRACTIONMAP_3D = wQ.isCube, QQ.SS_GAMMAREFRACTION = wQ.gammaSpace, QQ.SS_RGBDREFRACTION = wQ.isRGBD, QQ.SS_LINEARSPECULARREFRACTION = wQ.linearSpecularLOD, QQ.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && wQ.isCube ? !wQ.invertZ : wQ.invertZ, QQ.SS_LODINREFRACTIONALPHA = wQ.lodLevelInAlpha, QQ.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, QQ.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, QQ.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = wQ.isCube && wQ.boundingBoxSize, QQ.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (QQ.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(QQ, FQ, wQ, LQ) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) QQ.updateFloat2("vThicknessParam", 0, 0);
            else {
              LQ.getRenderingMesh().getWorldMatrix().decompose(jQ.k.Ox[0]);
              const FQ = Math.max(Math.abs(jQ.k.Ox[0].x), Math.abs(jQ.k.Ox[0].y), Math.abs(jQ.k.Ox[0].z));
              QQ.updateFloat2("vThicknessParam", this.minimumThickness * FQ, (this.maximumThickness - this.minimumThickness) * FQ)
            }
        }
        bindForSubMesh(QQ, FQ, wQ, LQ) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const qQ = LQ.materialDefines,
            oQ = this._material.isFrozen,
            DQ = this._material.realTimeFiltering,
            kQ = qQ.LODBASEDMICROSFURACE,
            vQ = this._getRefractionTexture(FQ);
          if (!QQ.useUbo || !oQ || !QQ.isSync) {
            if (this._thicknessTexture && ZQ.e.ThicknessTextureEnabled && (QQ.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, BQ.y)(this._thicknessTexture, QQ, "thickness")), this._refractionIntensityTexture && ZQ.e.RefractionIntensityTextureEnabled && qQ.SS_REFRACTIONINTENSITY_TEXTURE && (QQ.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, BQ.y)(this._refractionIntensityTexture, QQ, "refractionIntensity")), this._translucencyColorTexture && ZQ.e.TranslucencyColorTextureEnabled && qQ.SS_TRANSLUCENCYCOLOR_TEXTURE && (QQ.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, BQ.y)(this._translucencyColorTexture, QQ, "translucencyColor")), this._translucencyIntensityTexture && ZQ.e.TranslucencyIntensityTextureEnabled && qQ.SS_TRANSLUCENCYINTENSITY_TEXTURE && (QQ.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, BQ.y)(this._translucencyIntensityTexture, QQ, "translucencyIntensity")), vQ && ZQ.e.RefractionTextureEnabled) {
              QQ.Y5("refractionMatrix", vQ.getRefractionTextureMatrix());
              let FQ = 1;
              vQ.isCube || vQ.depth && (FQ = vQ.depth);
              const wQ = vQ.getSize().width,
                LQ = this.volumeIndexOfRefraction;
              if (QQ.updateFloat4("vRefractionInfos", vQ.level, 1 / LQ, FQ, this._invertRefractionY ? -1 : 1), QQ.updateFloat4("vRefractionMicrosurfaceInfos", wQ, vQ.lodGenerationScale, vQ.lodGenerationOffset, 1 / this.indexOfRefraction), DQ && QQ.updateFloat2("vRefractionFilteringInfo", wQ, Math.log2(wQ)), vQ.boundingBoxSize) {
                const FQ = vQ;
                QQ.updateVector3("vRefractionPosition", FQ.boundingBoxPosition), QQ.updateVector3("vRefractionSize", FQ.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && QQ.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), QQ.updateColor3("vDiffusionDistance", this.diffusionDistance), QQ.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), QQ.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), QQ.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), QQ.updateFloat("dispersion", this.dispersion)
          }
          FQ.texturesEnabled && (this._thicknessTexture && ZQ.e.ThicknessTextureEnabled && QQ.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && ZQ.e.RefractionIntensityTextureEnabled && qQ.SS_REFRACTIONINTENSITY_TEXTURE && QQ.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && ZQ.e.TranslucencyIntensityTextureEnabled && qQ.SS_TRANSLUCENCYINTENSITY_TEXTURE && QQ.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && ZQ.e.TranslucencyColorTextureEnabled && qQ.SS_TRANSLUCENCYCOLOR_TEXTURE && QQ.setTexture("translucencyColorSampler", this._translucencyColorTexture), vQ && ZQ.e.RefractionTextureEnabled && (kQ ? QQ.setTexture("refractionSampler", vQ) : (QQ.setTexture("refractionSampler", vQ._lodTextureMid || vQ), QQ.setTexture("refractionSamplerLow", vQ._lodTextureLow || vQ), QQ.setTexture("refractionSamplerHigh", vQ._lodTextureHigh || vQ))))
        }
        _getRefractionTexture(QQ) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? QQ.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(QQ) {
          ZQ.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && QQ.push(this._refractionTexture)
        }
        hasTexture(QQ) {
          return this._thicknessTexture === QQ || (this._refractionTexture === QQ || (this._refractionIntensityTexture === QQ || (this._translucencyIntensityTexture === QQ || this._translucencyColorTexture === QQ)))
        }
        hasRenderTargetTextures() {
          return !!(ZQ.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(QQ) {
          this._thicknessTexture && QQ.push(this._thicknessTexture), this._refractionTexture && QQ.push(this._refractionTexture), this._refractionIntensityTexture && QQ.push(this._refractionIntensityTexture), this._translucencyColorTexture && QQ.push(this._translucencyColorTexture), this._translucencyIntensityTexture && QQ.push(this._translucencyIntensityTexture)
        }
        getAnimatables(QQ) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && QQ.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && QQ.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && QQ.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && QQ.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && QQ.push(this._translucencyIntensityTexture)
        }
        dispose(QQ) {
          QQ && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(QQ, FQ, wQ) {
          return QQ.SS_SCATTERING && FQ.addFallback(wQ++, "SS_SCATTERING"), QQ.SS_TRANSLUCENCY && FQ.addFallback(wQ++, "SS_TRANSLUCENCY"), wQ
        }
        getSamplers(QQ) {
          QQ.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vRefractionMicrosurfaceInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "vRefractionFilteringInfo",
              size: 2,
              type: "vec2"
            }, {
              name: "vTranslucencyIntensityInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vRefractionInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "refractionMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vThicknessInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vRefractionIntensityInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "thicknessMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "refractionIntensityMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "translucencyIntensityMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vThicknessParam",
              size: 2,
              type: "vec2"
            }, {
              name: "vDiffusionDistance",
              size: 3,
              type: "vec3"
            }, {
              name: "vTintColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vSubSurfaceIntensity",
              size: 3,
              type: "vec3"
            }, {
              name: "vRefractionPosition",
              size: 3,
              type: "vec3"
            }, {
              name: "vRefractionSize",
              size: 3,
              type: "vec3"
            }, {
              name: "scatteringDiffusionProfile",
              size: 1,
              type: "float"
            }, {
              name: "dispersion",
              size: 1,
              type: "float"
            }, {
              name: "vTranslucencyColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vTranslucencyColorInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "translucencyColorMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, FQ = new WeakMap, wQ = new WeakMap, LQ = new WeakMap, qQ = new WeakMap, oQ = new WeakMap, DQ = new WeakMap, kQ = new WeakMap, vQ = new WeakMap, mQ = new WeakMap, uQ = new WeakMap, HQ = new WeakMap, bQ = new WeakMap, YQ = new WeakMap, xQ = new WeakMap, AQ = new WeakMap, tQ = new WeakMap, (() => {
        const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(wF[Symbol.metadata] ?? null) : void 0;
        eQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], MQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], GQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], pQ = [(0, RQ.I)(), (0, RQ.e)("_markScenePrePassDirty")], cQ = [(0, RQ.I)()], CQ = [(0, RQ.I)()], SQ = [(0, RQ.I)()], iQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], OQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], sQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], rQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], IQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], UQ = [(0, RQ.I)()], NQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], TQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], KQ = [(0, RQ.I)()], zQ = [(0, RQ.I)()], lQ = [(0, RQ.I)()], aQ = [(0, RQ.m)()], XQ = [(0, RQ.I)()], VQ = [(0, RQ.I)()], hQ = [(0, RQ.m)()], JQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], nQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], gQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], PQ = [(0, RQ.m)()], yQ = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], dQ = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], QF = [(0, RQ.I)()], FF = [(0, RQ.I)()], (0, WQ.i)(QQ, null, eQ, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isRefractionEnabled" in QQ,
            get: QQ => QQ.isRefractionEnabled,
            set: (QQ, FQ) => {
              QQ.isRefractionEnabled = FQ
            }
          },
          metadata: FQ
        }, LF, qF), (0, WQ.i)(QQ, null, MQ, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isTranslucencyEnabled" in QQ,
            get: QQ => QQ.isTranslucencyEnabled,
            set: (QQ, FQ) => {
              QQ.isTranslucencyEnabled = FQ
            }
          },
          metadata: FQ
        }, oF, DF), (0, WQ.i)(QQ, null, GQ, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isDispersionEnabled" in QQ,
            get: QQ => QQ.isDispersionEnabled,
            set: (QQ, FQ) => {
              QQ.isDispersionEnabled = FQ
            }
          },
          metadata: FQ
        }, vF, mF), (0, WQ.i)(QQ, null, pQ, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isScatteringEnabled" in QQ,
            get: QQ => QQ.isScatteringEnabled,
            set: (QQ, FQ) => {
              QQ.isScatteringEnabled = FQ
            }
          },
          metadata: FQ
        }, uF, HF), (0, WQ.i)(QQ, null, iQ, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAlbedoToTintRefraction" in QQ,
            get: QQ => QQ.useAlbedoToTintRefraction,
            set: (QQ, FQ) => {
              QQ.useAlbedoToTintRefraction = FQ
            }
          },
          metadata: FQ
        }, MF, GF), (0, WQ.i)(QQ, null, OQ, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAlbedoToTintTranslucency" in QQ,
            get: QQ => QQ.useAlbedoToTintTranslucency,
            set: (QQ, FQ) => {
              QQ.useAlbedoToTintTranslucency = FQ
            }
          },
          metadata: FQ
        }, pF, cF), (0, WQ.i)(QQ, null, sQ, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "thicknessTexture" in QQ,
            get: QQ => QQ.thicknessTexture,
            set: (QQ, FQ) => {
              QQ.thicknessTexture = FQ
            }
          },
          metadata: FQ
        }, CF, SF), (0, WQ.i)(QQ, null, rQ, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "refractionTexture" in QQ,
            get: QQ => QQ.refractionTexture,
            set: (QQ, FQ) => {
              QQ.refractionTexture = FQ
            }
          },
          metadata: FQ
        }, iF, WF), (0, WQ.i)(QQ, null, IQ, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "indexOfRefraction" in QQ,
            get: QQ => QQ.indexOfRefraction,
            set: (QQ, FQ) => {
              QQ.indexOfRefraction = FQ
            }
          },
          metadata: FQ
        }, RF, OF), (0, WQ.i)(QQ, null, NQ, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: QQ => "invertRefractionY" in QQ,
            get: QQ => QQ.invertRefractionY,
            set: (QQ, FQ) => {
              QQ.invertRefractionY = FQ
            }
          },
          metadata: FQ
        }, IF, UF), (0, WQ.i)(QQ, null, TQ, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: QQ => "linkRefractionWithTransparency" in QQ,
            get: QQ => QQ.linkRefractionWithTransparency,
            set: (QQ, FQ) => {
              QQ.linkRefractionWithTransparency = FQ
            }
          },
          metadata: FQ
        }, NF, TF), (0, WQ.i)(QQ, null, JQ, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useMaskFromThicknessTexture" in QQ,
            get: QQ => QQ.useMaskFromThicknessTexture,
            set: (QQ, FQ) => {
              QQ.useMaskFromThicknessTexture = FQ
            }
          },
          metadata: FQ
        }, ZF, yF), (0, WQ.i)(QQ, null, nQ, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "refractionIntensityTexture" in QQ,
            get: QQ => QQ.refractionIntensityTexture,
            set: (QQ, FQ) => {
              QQ.refractionIntensityTexture = FQ
            }
          },
          metadata: FQ
        }, BF, dF), (0, WQ.i)(QQ, null, gQ, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "translucencyIntensityTexture" in QQ,
            get: QQ => QQ.translucencyIntensityTexture,
            set: (QQ, FQ) => {
              QQ.translucencyIntensityTexture = FQ
            }
          },
          metadata: FQ
        }, Qw, Fw), (0, WQ.i)(QQ, null, yQ, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "translucencyColorTexture" in QQ,
            get: QQ => QQ.translucencyColorTexture,
            set: (QQ, FQ) => {
              QQ.translucencyColorTexture = FQ
            }
          },
          metadata: FQ
        }, qw, ow), (0, WQ.i)(QQ, null, dQ, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useGltfStyleTextures" in QQ,
            get: QQ => QQ.useGltfStyleTextures,
            set: (QQ, FQ) => {
              QQ.useGltfStyleTextures = FQ
            }
          },
          metadata: FQ
        }, Dw, kw), (0, WQ.i)(null, null, cQ, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_scatteringDiffusionProfileIndex" in QQ,
            get: QQ => QQ._scatteringDiffusionProfileIndex,
            set: (QQ, FQ) => {
              QQ._scatteringDiffusionProfileIndex = FQ
            }
          },
          metadata: FQ
        }, bF, YF), (0, WQ.i)(null, null, CQ, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "refractionIntensity" in QQ,
            get: QQ => QQ.refractionIntensity,
            set: (QQ, FQ) => {
              QQ.refractionIntensity = FQ
            }
          },
          metadata: FQ
        }, xF, AF), (0, WQ.i)(null, null, SQ, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "translucencyIntensity" in QQ,
            get: QQ => QQ.translucencyIntensity,
            set: (QQ, FQ) => {
              QQ.translucencyIntensity = FQ
            }
          },
          metadata: FQ
        }, tF, eF), (0, WQ.i)(null, null, UQ, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_volumeIndexOfRefraction" in QQ,
            get: QQ => QQ._volumeIndexOfRefraction,
            set: (QQ, FQ) => {
              QQ._volumeIndexOfRefraction = FQ
            }
          },
          metadata: FQ
        }, sF, rF), (0, WQ.i)(null, null, KQ, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "minimumThickness" in QQ,
            get: QQ => QQ.minimumThickness,
            set: (QQ, FQ) => {
              QQ.minimumThickness = FQ
            }
          },
          metadata: FQ
        }, KF, zF), (0, WQ.i)(null, null, zQ, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "maximumThickness" in QQ,
            get: QQ => QQ.maximumThickness,
            set: (QQ, FQ) => {
              QQ.maximumThickness = FQ
            }
          },
          metadata: FQ
        }, lF, jF), (0, WQ.i)(null, null, lQ, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useThicknessAsDepth" in QQ,
            get: QQ => QQ.useThicknessAsDepth,
            set: (QQ, FQ) => {
              QQ.useThicknessAsDepth = FQ
            }
          },
          metadata: FQ
        }, aF, XF), (0, WQ.i)(null, null, aQ, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintColor" in QQ,
            get: QQ => QQ.tintColor,
            set: (QQ, FQ) => {
              QQ.tintColor = FQ
            }
          },
          metadata: FQ
        }, fF, VF), (0, WQ.i)(null, null, XQ, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintColorAtDistance" in QQ,
            get: QQ => QQ.tintColorAtDistance,
            set: (QQ, FQ) => {
              QQ.tintColorAtDistance = FQ
            }
          },
          metadata: FQ
        }, hF, JF), (0, WQ.i)(null, null, VQ, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "dispersion" in QQ,
            get: QQ => QQ.dispersion,
            set: (QQ, FQ) => {
              QQ.dispersion = FQ
            }
          },
          metadata: FQ
        }, EF, nF), (0, WQ.i)(null, null, hQ, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "diffusionDistance" in QQ,
            get: QQ => QQ.diffusionDistance,
            set: (QQ, FQ) => {
              QQ.diffusionDistance = FQ
            }
          },
          metadata: FQ
        }, gF, PF), (0, WQ.i)(null, null, PQ, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "translucencyColor" in QQ,
            get: QQ => QQ.translucencyColor,
            set: (QQ, FQ) => {
              QQ.translucencyColor = FQ
            }
          },
          metadata: FQ
        }, ww, Lw), (0, WQ.i)(null, null, QF, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: QQ => "applyAlbedoAfterSubSurface" in QQ,
            get: QQ => QQ.applyAlbedoAfterSubSurface,
            set: (QQ, FQ) => {
              QQ.applyAlbedoAfterSubSurface = FQ
            }
          },
          metadata: FQ
        }, vw, mw), (0, WQ.i)(null, null, FF, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: QQ => "legacyTranslucency" in QQ,
            get: QQ => QQ.legacyTranslucency,
            set: (QQ, FQ) => {
              QQ.legacyTranslucency = FQ
            }
          },
          metadata: FQ
        }, uw, Hw), FQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FQ
        })
      })(), QQ.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, QQ.DEFAULT_LEGACY_TRANSLUCENCY = !1, QQ
    })();
    var mF = wQ(39778),
      uF = wQ(39754),
      HF = wQ(39787),
      bF = wQ(39790),
      YF = wQ(39796),
      xF = wQ(39803),
      AF = wQ(39809),
      tF = wQ(39815),
      eF = wQ(39277);
    const MF = {
      effect: null,
      subMesh: null
    };
    class GF extends((0, AF.b)((0, xF.d)(XQ.c))) {}
    class pF extends((0, nQ.c)(GF)) {
      constructor(QQ) {
        super(QQ), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class cF extends((0, tF.d)(PQ.e)) {}
    let CF = (() => {
      var QQ, FQ;
      let LQ, qQ = cF,
        DQ = [],
        kQ = [];
      return QQ = class extends qQ {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(QQ) {
          this._realTimeFiltering = QQ, this.dFQ(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(QQ) {
          this._realTimeFilteringQuality = QQ, this.dFQ(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, WQ.c)(this, FQ, "f")
        }
        set debugMode(QQ) {
          (0, WQ.f)(this, FQ, QQ, "f")
        }
        constructor(wQ, LQ) {
          super(wQ, LQ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || QQ.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new jQ.t(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = QQ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = EQ.b.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new EQ.b(0, 0, 0), this._albedoColor = new EQ.b(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new EQ.b(1, 1, 1), this._reflectionColor = new EQ.b(1, 1, 1), this._emissiveColor = new EQ.b(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = QQ.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new sQ.d(16), this._globalAmbientColor = new EQ.b(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, FQ.set(this, (0, WQ.l)(this, DQ, 0)), this.debugLimit = ((0, WQ.l)(this, kQ), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new hQ(this), this.clearCoat = new QF(this), this.iridescence = new wF(this), this.anisotropy = new qF(this), this.sheen = new DF(this), this.subSurface = new vF(this), this.detailMap = new mF.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), ZQ.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = TQ(this.iN()), this.prePassConfiguration = new JQ.d
        }
        get hasRenderTargetTextures() {
          return !!(ZQ.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === QQ.PBRMATERIAL_OPAQUE || this._transparencyMode === QQ.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === QQ.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== QQ.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(QQ, FQ, wQ) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const LQ = FQ._drawWrapper;
          if (LQ.effect && this.isFrozen && LQ._wasPreviouslyReady && LQ._wasPreviouslyUsingInstances === wQ) return !0;
          FQ.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), FQ.materialDefines = new pF(this._eventInfo.defineNames));
          const qQ = FQ.materialDefines;
          if (this._isReadyForSubMesh(FQ)) return !0;
          const oQ = this.iN(),
            DQ = oQ.Wx();
          if (qQ._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, oQ.texturesEnabled)) {
            if (this._albedoTexture && ZQ.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && ZQ.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && ZQ.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && ZQ.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && ZQ.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const QQ = this._getReflectionTexture();
            if (QQ && ZQ.e.ReflectionTextureEnabled) {
              if (!QQ.isReadyOrNotBlocking()) return !1;
              if (QQ.irradianceTexture) {
                if (!QQ.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!QQ.sphericalPolynomial && QQ.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && ZQ.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && ZQ.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (ZQ.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (DQ.getCaps().standardDerivatives && this._bumpTexture && ZQ.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && ZQ.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = qQ, this._eventInfo.subMesh = FQ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (qQ._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (qQ.AREALIGHTUSED || qQ.CLUSTLIGHT_BATCH)
            for (let HQ = 0; HQ < QQ.lightSources.length; HQ++)
              if (!QQ.lightSources[HQ]._isReady()) return !1;
          if (DQ.getCaps().standardDerivatives || QQ.isVerticesDataPresent(aQ.h.NormalKind) || (QQ.createNormals(!0), OQ.c.Warn("PBRMaterial: Normals have been created for the mesh: " + QQ.name)), !(0, BQ.c)(oQ, QQ, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const kQ = FQ.effect,
            vQ = qQ._areLightsDisposed,
            mQ = this._prepareEffect(QQ, FQ.getRenderingMesh(), qQ, this.onCompiled, this.onError, wQ, null);
          let uQ = !1;
          if (mQ)
            if (this._onEffectCreatedObservable && (MF.effect = mQ, MF.subMesh = FQ, this._onEffectCreatedObservable.notifyObservers(MF)), this.allowShaderHotSwapping && kQ && !mQ.isReady()) {
              if (qQ.markAsUnprocessed(), uQ = this.isFrozen, vQ) return qQ._areLightsDisposed = !0, !1
            } else oQ.resetCachedMaterial(), FQ.setEffect(mQ, qQ, this._materialContext);
          return !(!FQ.effect || !FQ.effect.isReady()) && (qQ._renderId = oQ.getRenderId(), LQ._wasPreviouslyReady = !uQ, LQ._wasPreviouslyUsingInstances = !!wQ, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(FQ, wQ, LQ) {
          let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            DQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            kQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(FQ, wQ, LQ, DQ, kQ), !LQ.isDirty) return null;
          LQ.markAsProcessed();
          const vQ = this.iN().Wx(),
            mQ = new yQ.d;
          let uQ = 0;
          LQ.USESPHERICALINVERTEX && mQ.addFallback(uQ++, "USESPHERICALINVERTEX"), LQ.FOG && mQ.addFallback(uQ, "FOG"), LQ.SPECULARAA && mQ.addFallback(uQ, "SPECULARAA"), LQ.POINTSIZE && mQ.addFallback(uQ, "POINTSIZE"), LQ.LOGARITHMICDEPTH && mQ.addFallback(uQ, "LOGARITHMICDEPTH"), LQ.PARALLAX && mQ.addFallback(uQ, "PARALLAX"), LQ.PARALLAX_RHS && mQ.addFallback(uQ, "PARALLAX_RHS"), LQ.PARALLAXOCCLUSION && mQ.addFallback(uQ++, "PARALLAXOCCLUSION"), LQ.ENVIRONMENTBRDF && mQ.addFallback(uQ++, "ENVIRONMENTBRDF"), LQ.TANGENT && mQ.addFallback(uQ++, "TANGENT"), LQ.BUMP && mQ.addFallback(uQ++, "BUMP"), uQ = (0, BQ.C)(LQ, mQ, this._maxSimultaneousLights, uQ), LQ.SPECULARTERM && mQ.addFallback(uQ++, "SPECULARTERM"), LQ.USESPHERICALFROMREFLECTIONMAP && mQ.addFallback(uQ++, "USESPHERICALFROMREFLECTIONMAP"), LQ.USEIRRADIANCEMAP && mQ.addFallback(uQ++, "USEIRRADIANCEMAP"), LQ.LIGHTMAP && mQ.addFallback(uQ++, "LIGHTMAP"), LQ.NORMAL && mQ.addFallback(uQ++, "NORMAL"), LQ.AMBIENT && mQ.addFallback(uQ++, "AMBIENT"), LQ.EMISSIVE && mQ.addFallback(uQ++, "EMISSIVE"), LQ.VERTEXCOLOR && mQ.addFallback(uQ++, "VERTEXCOLOR"), LQ.MORPHTARGETS && mQ.addFallback(uQ++, "MORPHTARGETS"), LQ.MULTIVIEW && mQ.addFallback(0, "MULTIVIEW");
          const HQ = [aQ.h.PositionKind];
          LQ.NORMAL && HQ.push(aQ.h.NormalKind), LQ.TANGENT && HQ.push(aQ.h.TangentKind);
          for (let QQ = 1; QQ <= 6; ++QQ) LQ["UV" + QQ] && HQ.push(`uv${1===QQ?"":QQ}`);
          LQ.VERTEXCOLOR && HQ.push(aQ.h.ColorKind), (0, BQ.F)(HQ, FQ, LQ, mQ), (0, BQ.I)(HQ, LQ), (0, BQ.J)(HQ, FQ, LQ), (0, BQ.E)(HQ, FQ, LQ);
          let bQ = "pbr";
          const YQ = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            xQ = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, BQ.lb)(YQ, xQ, !0);
          const AQ = ["Material", "Scene", "Mesh"],
            tQ = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: LQ.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = mQ, this._eventInfo.fallbackRank = uQ, this._eventInfo.defines = LQ, this._eventInfo.uniforms = YQ, this._eventInfo.attributes = HQ, this._eventInfo.samplers = xQ, this._eventInfo.uniformBuffersNames = AQ, this._eventInfo.customCode = void 0, this._eventInfo.mesh = FQ, this._eventInfo.indexParameters = tQ, this._callbackPluginEventGeneric(128, this._eventInfo), YF.b.AddUniformsAndSamplers(YQ, xQ), JQ.d.AddUniforms(YQ), JQ.d.AddSamplers(xQ), (0, uF.d)(YQ), this._useVertexPulling) {
            const QQ = wQ?.geometry;
            QQ && (this._vertexPullingMetadata = (0, HF.i)(QQ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((QQ, FQ) => {
              YQ.push(`vp_${FQ}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          gQ.e && (gQ.e.PrepareUniforms(YQ, LQ), gQ.e.PrepareSamplers(xQ, LQ)), (0, BQ.pb)({
            uniformsNames: YQ,
            uniformBuffersNames: AQ,
            samplers: xQ,
            defines: LQ,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const eQ = {};
          this.customShaderNameResolve && (bQ = this.customShaderNameResolve(bQ, YQ, AQ, xQ, LQ, HQ, eQ));
          const MQ = LQ.toString(),
            GQ = vQ.createEffect(bQ, {
              attributes: HQ,
              uniformsNames: YQ,
              uniformBuffersNames: AQ,
              samplers: xQ,
              defines: MQ,
              fallbacks: mQ,
              onCompiled: qQ,
              onError: oQ,
              indexParameters: tQ,
              processFinalCode: eQ.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: LQ.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: QQ._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, vQ);
          return this._eventInfo.customCode = void 0, GQ
        }
        _prepareDefines(FQ, wQ, LQ) {
          let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const DQ = wQ.hasThinInstances,
            kQ = this.iN(),
            vQ = kQ.Wx();
          (0, BQ.U)(kQ, FQ, LQ, !0, this._maxSimultaneousLights, this._disableLighting), LQ._needNormals = !0, (0, BQ.ab)(kQ, LQ);
          const mQ = this.needAlphaBlendingForMesh(FQ) && this.iN().useOrderIndependentTransparency;
          if ((0, BQ.fb)(kQ, LQ, this.canRenderToMRT && !mQ), (0, BQ.bb)(kQ, LQ, mQ), YF.b.PrepareDefines(vQ.currentRenderPassId, FQ, LQ), LQ.METALLICWORKFLOW = this.isMetallicWorkflow(), LQ._areTexturesDirty) {
            LQ._needUVs = !1;
            for (let QQ = 1; QQ <= 6; ++QQ) LQ["MAINUV" + QQ] = !1;
            if (kQ.texturesEnabled) {
              LQ.ALBEDODIRECTUV = 0, LQ.BASE_WEIGHTDIRECTUV = 0, LQ.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, LQ.AMBIENTDIRECTUV = 0, LQ.OPACITYDIRECTUV = 0, LQ.EMISSIVEDIRECTUV = 0, LQ.REFLECTIVITYDIRECTUV = 0, LQ.MICROSURFACEMAPDIRECTUV = 0, LQ.METALLIC_REFLECTANCEDIRECTUV = 0, LQ.REFLECTANCEDIRECTUV = 0, LQ.BUMPDIRECTUV = 0, LQ.LIGHTMAPDIRECTUV = 0, vQ.getCaps().textureLOD && (LQ.LODBASEDMICROSFURACE = !0), this._albedoTexture && ZQ.e.DiffuseTextureEnabled ? ((0, BQ.X)(this._albedoTexture, LQ, "ALBEDO"), LQ.GAMMAALBEDO = this._albedoTexture.gammaSpace) : LQ.ALBEDO = !1, this._baseWeightTexture && ZQ.e.BaseWeightTextureEnabled ? (0, BQ.X)(this._baseWeightTexture, LQ, "BASE_WEIGHT") : LQ.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && ZQ.e.BaseDiffuseRoughnessTextureEnabled ? (0, BQ.X)(this._baseDiffuseRoughnessTexture, LQ, "BASE_DIFFUSE_ROUGHNESS") : LQ.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && ZQ.e.AmbientTextureEnabled ? ((0, BQ.X)(this._ambientTexture, LQ, "AMBIENT"), LQ.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : LQ.AMBIENT = !1, this._opacityTexture && ZQ.e.OpacityTextureEnabled ? ((0, BQ.X)(this._opacityTexture, LQ, "OPACITY"), LQ.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : LQ.OPACITY = !1;
              const QQ = this._getReflectionTexture(),
                FQ = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || vQ.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, BQ.T)(kQ, QQ, LQ, this.realTimeFiltering, this.realTimeFilteringQuality, !FQ), this._lightmapTexture && ZQ.e.LightmapTextureEnabled ? ((0, BQ.X)(this._lightmapTexture, LQ, "LIGHTMAP"), LQ.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, LQ.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, LQ.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : LQ.LIGHTMAP = !1, this._emissiveTexture && ZQ.e.EmissiveTextureEnabled ? ((0, BQ.X)(this._emissiveTexture, LQ, "EMISSIVE"), LQ.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : LQ.EMISSIVE = !1, ZQ.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, BQ.X)(this._metallicTexture, LQ, "REFLECTIVITY"), LQ.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, LQ.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, LQ.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, LQ.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, LQ.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, BQ.X)(this._reflectivityTexture, LQ, "REFLECTIVITY"), LQ.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, LQ.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, LQ.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : LQ.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (LQ.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, BQ.X)(this._metallicReflectanceTexture, LQ, "METALLIC_REFLECTANCE"), LQ.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : LQ.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, BQ.X)(this._reflectanceTexture, LQ, "REFLECTANCE"), LQ.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : LQ.REFLECTANCE = !1) : (LQ.METALLIC_REFLECTANCE = !1, LQ.REFLECTANCE = !1), this._microSurfaceTexture ? (0, BQ.X)(this._microSurfaceTexture, LQ, "MICROSURFACEMAP") : LQ.MICROSURFACEMAP = !1) : (LQ.REFLECTIVITY = !1, LQ.MICROSURFACEMAP = !1), vQ.getCaps().standardDerivatives && this._bumpTexture && ZQ.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, BQ.X)(this._bumpTexture, LQ, "BUMP"), this._useParallax && this._albedoTexture && ZQ.e.DiffuseTextureEnabled ? (LQ.PARALLAX = !0, LQ.PARALLAX_RHS = kQ.useRightHandedSystem, LQ.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : LQ.PARALLAX = !1, LQ.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (LQ.BUMP = !1, LQ.PARALLAX = !1, LQ.PARALLAX_RHS = !1, LQ.PARALLAXOCCLUSION = !1, LQ.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && ZQ.e.ReflectionTextureEnabled ? (LQ.ENVIRONMENTBRDF = !0, LQ.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (LQ.ENVIRONMENTBRDF = !1, LQ.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? LQ.ALPHAFROMALBEDO = !0 : LQ.ALPHAFROMALBEDO = !1
            }
            LQ.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === QQ.LIGHTFALLOFF_STANDARD ? (LQ.USEPHYSICALLIGHTFALLOFF = !1, LQ.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === QQ.LIGHTFALLOFF_GLTF ? (LQ.USEPHYSICALLIGHTFALLOFF = !1, LQ.USEGLTFLIGHTFALLOFF = !0) : (LQ.USEPHYSICALLIGHTFALLOFF = !0, LQ.USEGLTFLIGHTFALLOFF = !1), LQ.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? LQ.TWOSIDEDLIGHTING = !0 : LQ.TWOSIDEDLIGHTING = !1, LQ.MIRRORED = !!kQ._mirroredCameraPosition, LQ.SPECULARAA = vQ.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(LQ._areTexturesDirty || LQ._areMiscDirty) && (LQ.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, LQ.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, LQ.ALPHABLEND = this.needAlphaBlendingForMesh(FQ), LQ.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, LQ.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), LQ._areTexturesDirty && (LQ.TEXTURE_REPETITION_MODE = vQ.version > 1 || vQ.isWebGPU ? this.textureRepetitionMode : 0), LQ._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(LQ), LQ.FORCENORMALFORWARD = this._forceNormalForward, LQ.RADIANCEOCCLUSION = this._useRadianceOcclusion, LQ.HORIZONOCCLUSION = this._useHorizonOcclusion, LQ._areMiscDirty && ((0, BQ.Y)(FQ, kQ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(FQ), LQ, this._applyDecalMapAfterDetailMap, this._useVertexPulling, wQ, this._isVertexOutputInvariant), LQ.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !FQ.isVerticesDataPresent(aQ.h.NormalKind), LQ.DEBUGMODE = this._debugMode), (0, BQ.R)(kQ, vQ, this, LQ, !!qQ, oQ, DQ), this._eventInfo.defines = LQ, this._eventInfo.mesh = FQ, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, BQ.N)(FQ, LQ, !0, !0, !0, this._transparencyMode !== QQ.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(QQ, FQ, wQ) {
          const LQ = {
            clipPlane: !1,
            useInstances: !1,
            ...wQ
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const wQ = new pF(this._eventInfo.defineNames),
              qQ = this._prepareEffect(QQ, QQ, wQ, void 0, void 0, LQ.useInstances, LQ.clipPlane);
            this._onEffectCreatedObservable && (MF.effect = qQ, MF.subMesh = null, this._onEffectCreatedObservable.notifyObservers(MF)), qQ.isReady() ? FQ && FQ(this) : qQ.onCompileObservable.add((() => {
              FQ && FQ(this)
            }))
          })()
        }
        buildUniformLayout() {
          const QQ = this._uniformBuffer;
          QQ.addUniform("vAlbedoInfos", 2), QQ.addUniform("vBaseWeightInfos", 2), QQ.addUniform("vBaseDiffuseRoughnessInfos", 2), QQ.addUniform("vAmbientInfos", 4), QQ.addUniform("vOpacityInfos", 2), QQ.addUniform("vEmissiveInfos", 2), QQ.addUniform("vLightmapInfos", 2), QQ.addUniform("vReflectivityInfos", 3), QQ.addUniform("vMicroSurfaceSamplerInfos", 2), QQ.addUniform("vBumpInfos", 3), QQ.addUniform("albedoMatrix", 16), QQ.addUniform("baseWeightMatrix", 16), QQ.addUniform("baseDiffuseRoughnessMatrix", 16), QQ.addUniform("ambientMatrix", 16), QQ.addUniform("opacityMatrix", 16), QQ.addUniform("emissiveMatrix", 16), QQ.addUniform("lightmapMatrix", 16), QQ.addUniform("reflectivityMatrix", 16), QQ.addUniform("microSurfaceSamplerMatrix", 16), QQ.addUniform("bumpMatrix", 16), QQ.addUniform("vTangentSpaceParams", 2), QQ.addUniform("vAlbedoColor", 4), QQ.addUniform("baseWeight", 1), QQ.addUniform("baseDiffuseRoughness", 1), QQ.addUniform("vLightingIntensity", 4), QQ.addUniform("pointSize", 1), QQ.addUniform("vReflectivityColor", 4), QQ.addUniform("vEmissiveColor", 3), QQ.addUniform("vAmbientColor", 3), QQ.addUniform("vDebugMode", 2), QQ.addUniform("vMetallicReflectanceFactors", 4), QQ.addUniform("vMetallicReflectanceInfos", 2), QQ.addUniform("metallicReflectanceMatrix", 16), QQ.addUniform("vReflectanceInfos", 2), QQ.addUniform("reflectanceMatrix", 16), QQ.addUniform("cameraInfo", 4), QQ.addUniform("vTextureRepetitionHexTilingParams", 4), (0, BQ.jb)(QQ, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(QQ, FQ, wQ) {
          const LQ = this.iN(),
            qQ = wQ.materialDefines;
          if (!qQ) return;
          const oQ = wQ.effect;
          if (!oQ) return;
          this._activeEffect = oQ, FQ.getMeshUniformBuffer().bindToEffect(oQ, "Mesh"), FQ.transferToEffect(QQ);
          const DQ = LQ.Wx();
          this._uniformBuffer.bindToEffect(oQ, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, LQ, FQ, QQ, this.isFrozen), YF.b.Bind(DQ.currentRenderPassId, this._activeEffect, FQ, QQ, this);
          const kQ = LQ.activeCamera;
          kQ ? this._uniformBuffer.updateFloat4("cameraInfo", kQ.minZ, kQ.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const vQ = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", vQ[0], vQ[1], vQ[2], vQ[3]), this._eventInfo.subMesh = wQ, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), qQ.OBJECTSPACE_NORMALMAP && (QQ.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const mQ = this._mustRebind(LQ, oQ, wQ, FQ.visibility),
            uQ = DQ._features.needToAlwaysBindUniformBuffers;
          (0, BQ.d)(FQ, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, HF.e)(this._activeEffect, this._vertexPullingMetadata);
          let HQ = null;
          const bQ = this._uniformBuffer;
          if (mQ) {
            if (this.bindViewProjection(oQ), HQ = this._getReflectionTexture(), !bQ.useUbo || !this.isFrozen || !bQ.isSync || wQ._drawWrapper._forceRebindOnNextCall) {
              if (LQ.texturesEnabled && (this._albedoTexture && ZQ.e.DiffuseTextureEnabled && (bQ.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, BQ.y)(this._albedoTexture, bQ, "albedo")), this._baseWeightTexture && ZQ.e.BaseWeightTextureEnabled && (bQ.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, BQ.y)(this._baseWeightTexture, bQ, "baseWeight")), this._baseDiffuseRoughnessTexture && ZQ.e.BaseDiffuseRoughnessTextureEnabled && (bQ.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, BQ.y)(this._baseDiffuseRoughnessTexture, bQ, "baseDiffuseRoughness")), this._ambientTexture && ZQ.e.AmbientTextureEnabled && (bQ.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, BQ.y)(this._ambientTexture, bQ, "ambient")), this._opacityTexture && ZQ.e.OpacityTextureEnabled && (bQ.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, BQ.y)(this._opacityTexture, bQ, "opacity")), this._emissiveTexture && ZQ.e.EmissiveTextureEnabled && (bQ.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, BQ.y)(this._emissiveTexture, bQ, "emissive")), this._lightmapTexture && ZQ.e.LightmapTextureEnabled && (bQ.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, BQ.y)(this._lightmapTexture, bQ, "lightmap")), ZQ.e.SpecularTextureEnabled && (this._metallicTexture ? (bQ.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, BQ.y)(this._metallicTexture, bQ, "reflectivity")) : this._reflectivityTexture && (bQ.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, BQ.y)(this._reflectivityTexture, bQ, "reflectivity")), this._metallicReflectanceTexture && (bQ.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, BQ.y)(this._metallicReflectanceTexture, bQ, "metallicReflectance")), this._reflectanceTexture && qQ.REFLECTANCE && (bQ.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, BQ.y)(this._reflectanceTexture, bQ, "reflectance")), this._microSurfaceTexture && (bQ.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, BQ.y)(this._microSurfaceTexture, bQ, "microSurfaceSampler"))), this._bumpTexture && DQ.getCaps().standardDerivatives && ZQ.e.BumpTextureEnabled && !this._disableBumpMap && (bQ.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, BQ.y)(this._bumpTexture, bQ, "bump"), LQ._mirroredCameraPosition ? bQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : bQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, BQ.h)(LQ, qQ, bQ, this._reflectionColor, HQ, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && bQ.updateFloat("pointSize", this.pointSize), qQ.METALLICWORKFLOW) {
                EQ.i.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, EQ.i.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const QQ = this.subSurface?._indexOfRefraction ?? 1.5,
                  FQ = 1;
                EQ.i.Color4[0].b = QQ;
                const wQ = Math.pow((QQ - FQ) / (QQ + FQ), 2);
                EQ.i.Color4[0].a = wQ, bQ.updateDirectColor4("vReflectivityColor", EQ.i.Color4[0]), bQ.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else bQ.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              bQ.updateColor3("vEmissiveColor", ZQ.e.EmissiveTextureEnabled ? this._emissiveColor : EQ.b.BlackReadOnly), !qQ.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? bQ.updateColor4("vAlbedoColor", this._albedoColor, 1) : bQ.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), bQ.updateFloat("baseWeight", this._baseWeight), bQ.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * LQ.environmentIntensity, this._lightingInfos.w = this._specularIntensity, bQ.updateVector4("vLightingIntensity", this._lightingInfos), LQ.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), bQ.updateColor3("vAmbientColor", this._globalAmbientColor), bQ.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            LQ.texturesEnabled && (this._albedoTexture && ZQ.e.DiffuseTextureEnabled && bQ.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && ZQ.e.BaseWeightTextureEnabled && bQ.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && ZQ.e.BaseDiffuseRoughnessTextureEnabled && bQ.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && ZQ.e.AmbientTextureEnabled && bQ.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && ZQ.e.OpacityTextureEnabled && bQ.setTexture("opacitySampler", this._opacityTexture), (0, BQ.j)(LQ, qQ, bQ, HQ, this.realTimeFiltering), qQ.ENVIRONMENTBRDF && bQ.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && ZQ.e.EmissiveTextureEnabled && bQ.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && ZQ.e.LightmapTextureEnabled && bQ.setTexture("lightmapSampler", this._lightmapTexture), ZQ.e.SpecularTextureEnabled && (this._metallicTexture ? bQ.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && bQ.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && bQ.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && qQ.REFLECTANCE && bQ.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && bQ.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && DQ.getCaps().standardDerivatives && ZQ.e.BumpTextureEnabled && !this._disableBumpMap && bQ.setTexture("bumpSampler", this._bumpTexture)), this.iN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(FQ) && this.iN().depthPeelingRenderer.bind(oQ), this._eventInfo.subMesh = wQ, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, uF.h)(this._activeEffect, this, LQ), this.bindEyePosition(oQ)
          } else uQ && (this._needToBindSceneUbo = !0);
          !mQ && this.isFrozen && !uQ || !LQ.lightsEnabled || this._disableLighting || (0, BQ.n)(LQ, FQ, this._activeEffect, qQ, this._maxSimultaneousLights), !mQ && this.isFrozen || ((LQ.fogEnabled && FQ.applyFog && LQ.fogMode !== lQ.e.FOGMODE_NONE || HQ || this.subSurface.refractionTexture || FQ.receiveShadows || qQ.PREPASS || qQ.CLUSTLIGHT_BATCH) && this.bindView(oQ), (0, BQ.g)(LQ, FQ, this._activeEffect, !0), qQ.NUM_MORPH_INFLUENCERS && (0, BQ.s)(FQ, this._activeEffect), qQ.BAKED_VERTEX_ANIMATION_TEXTURE && FQ.bakedVertexAnimationManager?.bind(oQ, qQ.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, BQ.r)(qQ, this._activeEffect, LQ)), this._afterBind(FQ, this._activeEffect, wQ), bQ.update()
        }
        getAnimatables() {
          const QQ = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && QQ.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && QQ.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && QQ.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && QQ.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && QQ.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && QQ.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && QQ.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? QQ.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && QQ.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && QQ.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && QQ.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && QQ.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && QQ.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && QQ.push(this._microSurfaceTexture), QQ
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.iN().environmentTexture
        }
        getActiveTextures() {
          const QQ = super.getActiveTextures();
          return this._albedoTexture && QQ.push(this._albedoTexture), this._baseWeightTexture && QQ.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && QQ.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && QQ.push(this._ambientTexture), this._opacityTexture && QQ.push(this._opacityTexture), this._reflectionTexture && QQ.push(this._reflectionTexture), this._emissiveTexture && QQ.push(this._emissiveTexture), this._reflectivityTexture && QQ.push(this._reflectivityTexture), this._metallicTexture && QQ.push(this._metallicTexture), this._metallicReflectanceTexture && QQ.push(this._metallicReflectanceTexture), this._reflectanceTexture && QQ.push(this._reflectanceTexture), this._microSurfaceTexture && QQ.push(this._microSurfaceTexture), this._bumpTexture && QQ.push(this._bumpTexture), this._lightmapTexture && QQ.push(this._lightmapTexture), QQ
        }
        hasTexture(QQ) {
          return !!super.hasTexture(QQ) || (this._albedoTexture === QQ || (this._baseWeightTexture === QQ || (this._baseDiffuseRoughnessTexture === QQ || (this._ambientTexture === QQ || (this._opacityTexture === QQ || (this._reflectionTexture === QQ || (this._emissiveTexture === QQ || (this._reflectivityTexture === QQ || (this._metallicTexture === QQ || (this._metallicReflectanceTexture === QQ || (this._reflectanceTexture === QQ || (this._microSurfaceTexture === QQ || (this._bumpTexture === QQ || this._lightmapTexture === QQ)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const QQ = this.iN().enableSubSurfaceForPrePass();
          return QQ && (QQ.enabled = !0), !0
        }
        dispose(QQ, FQ) {
          this._breakShaderLoadedCheck = !0, FQ && (this._environmentBRDFTexture && this.iN().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(QQ, FQ)
        }
      }, FQ = new WeakMap, (() => {
        const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(qQ[Symbol.metadata] ?? null) : void 0;
        LQ = [(0, RQ.e)("_markAllSubMeshesAsMiscDirty")], (0, WQ.i)(QQ, null, LQ, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "debugMode" in QQ,
            get: QQ => QQ.debugMode,
            set: (QQ, FQ) => {
              QQ.debugMode = FQ
            }
          },
          metadata: FQ
        }, DQ, kQ), FQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FQ
        })
      })(), QQ.PBRMATERIAL_OPAQUE = oQ.d.MATERIAL_OPAQUE, QQ.PBRMATERIAL_ALPHATEST = oQ.d.MATERIAL_ALPHATEST, QQ.PBRMATERIAL_ALPHABLEND = oQ.d.MATERIAL_ALPHABLEND, QQ.PBRMATERIAL_ALPHATESTANDBLEND = oQ.d.MATERIAL_ALPHATESTANDBLEND, QQ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, QQ.LIGHTFALLOFF_PHYSICAL = 0, QQ.LIGHTFALLOFF_GLTF = 1, QQ.LIGHTFALLOFF_STANDARD = 2, QQ.ForceGLSL = !1, QQ._ShaderLoader = new bF.b((() => [Promise.all([wQ.e(308), wQ.e(319)]).then((() => wQ(61024))), Promise.all([wQ.e(313), wQ.e(309), wQ.e(373), wQ.e(322), wQ.e(372)]).then((() => wQ(61041)))]), (() => [Promise.all([wQ.e(327), wQ.e(329), wQ.e(336)]).then((() => wQ(61106))), Promise.all([wQ.e(327), wQ.e(330), wQ.e(376), wQ.e(340), wQ.e(375)]).then((() => wQ(61133)))])), QQ
    })();
    Object.getOwnPropertyDescriptor(CF.prototype, "decalMap") || Object.defineProperty(CF.prototype, "decalMap", (0, eF.e)("PBRBaseMaterial", "decalMap")), (0, wQ(41239).c)();
    var SF = wQ(39426);
    var iF = wQ(39505),
      WF = wQ(41218),
      RF = wQ(39226),
      OF = wQ(39240),
      sF = wQ(39346);
    let rF = !1;
    const IF = new EQ.e,
      UF = new EQ.e;
    class NF extends WF.e {
      get isSupported() {
        return this._engine?.getCaps().drawBuffersExtension ?? !1
      }
      get textures() {
        return this._textures
      }
      get count() {
        return this._count
      }
      get depthTexture() {
        return this._textures[this._textures.length - 1]
      }
      set wrapU(QQ) {
        if (this._textures)
          for (let FQ = 0; FQ < this._textures.length; FQ++) this._textures[FQ].wrapU = QQ
      }
      set wrapV(QQ) {
        if (this._textures)
          for (let FQ = 0; FQ < this._textures.length; FQ++) this._textures[FQ].wrapV = QQ
      }
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = !(!qQ || !qQ.generateMipMaps) && qQ.generateMipMaps,
          kQ = !(!qQ || !qQ.generateDepthTexture) && qQ.generateDepthTexture,
          vQ = qQ && qQ.depthTextureFormat ? qQ.depthTextureFormat : 15,
          mQ = !qQ || void 0 === qQ.doNotChangeAspectRatio || qQ.doNotChangeAspectRatio,
          uQ = !(!qQ || !qQ.drawOnlyOnFirstAttachmentByDefault) && qQ.drawOnlyOnFirstAttachmentByDefault;
        if (super(QQ, FQ, LQ, DQ, mQ, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), rF || (rF = !0, OF.ThinEngine.prototype.restoreSingleAttachment = function() {
            const QQ = this._gl;
            this.bindAttachments([QQ.BACK])
          }, OF.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const QQ = this._gl;
            this.bindAttachments([QQ.COLOR_ATTACHMENT0])
          }, OF.ThinEngine.prototype.buildTextureLayout = function(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const wQ = this._gl,
              LQ = [];
            if (FQ) LQ.push(wQ.BACK);
            else
              for (let qQ = 0; qQ < QQ.length; qQ++) QQ[qQ] ? LQ.push(wQ["COLOR_ATTACHMENT" + qQ]) : LQ.push(wQ.NONE);
            return LQ
          }, OF.ThinEngine.prototype.bindAttachments = function(QQ) {
            const FQ = this._gl,
              wQ = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, wQ)
              for (let LQ = 0; LQ < QQ.length; LQ++) QQ[LQ] !== FQ.NONE && wQ[LQ] && (0, sF.g)(wQ[LQ].format) && (this._integerMRTAttachmentsMask |= 1 << LQ);
            FQ.drawBuffers(QQ)
          }, OF.ThinEngine.prototype.clearAttachments = function(QQ, FQ, wQ, LQ) {
            let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const DQ = this._currentRenderTarget?.textures;
            let kQ = !1;
            if (wQ && QQ && DQ)
              for (let vQ = 0; vQ < FQ.length; vQ++) {
                const QQ = DQ[vQ];
                if (FQ[vQ] !== this._gl.NONE && QQ && (0, sF.g)(QQ.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  kQ = !0;
                  break
                }
              }
            if (!kQ || !QQ || !DQ) return this.bindAttachments(FQ), void this.clear(QQ, wQ, LQ, qQ, oQ);
            this.bindAttachments(FQ), this._applyColorWriteState();
            for (let vQ = 0; vQ < FQ.length; vQ++) {
              const wQ = DQ[vQ];
              if (FQ[vQ] !== this._gl.NONE && wQ) {
                let FQ = QQ;
                if ((0, sF.g)(wQ.format)) {
                  const LQ = (0, sF.j)(wQ.type);
                  FQ = LQ ? IF : UF;
                  const qQ = LQ ? 255 : 1;
                  FQ.r = Math.round(QQ.r * qQ), FQ.g = Math.round(QQ.g * qQ), FQ.b = Math.round(QQ.b * qQ), FQ.a = Math.round(QQ.a * qQ)
                }
                this._clearColorAttachment(vQ, FQ, wQ.format, wQ.type)
              }
            }
            if (LQ || qQ) {
              const QQ = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, LQ, qQ, oQ)
              } finally {
                this._integerMRTAttachmentsMask = QQ
              }
            }
          }, OF.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wQ = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, QQ.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(QQ), FQ || this.generateMipMapsMultiFramebuffer(QQ), wQ && (QQ._MSAAFramebuffer && this._bindUnboundFramebuffer(QQ._framebuffer), wQ()), this._bindUnboundFramebuffer(null)
          }, OF.ThinEngine.prototype.createMultipleRenderTarget = function(QQ, FQ) {
            let wQ, LQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              qQ = !1,
              oQ = !0,
              DQ = !1,
              kQ = !1,
              vQ = 1,
              mQ = 1,
              uQ = [],
              HQ = [],
              bQ = [],
              YQ = [],
              xQ = [],
              AQ = [],
              tQ = [],
              eQ = [],
              MQ = [],
              GQ = !1;
            const pQ = this._createHardwareRenderTargetWrapper(!0, !1, QQ);
            void 0 !== FQ && (qQ = void 0 !== FQ.generateMipMaps && FQ.generateMipMaps, oQ = void 0 === FQ.generateDepthBuffer || FQ.generateDepthBuffer, DQ = void 0 !== FQ.generateStencilBuffer && FQ.generateStencilBuffer, kQ = void 0 !== FQ.generateDepthTexture && FQ.generateDepthTexture, vQ = FQ.FkQ ?? 1, mQ = FQ.samples ?? mQ, uQ = FQ.types || uQ, HQ = FQ.samplingModes || HQ, bQ = FQ.useSRGBBuffers || bQ, YQ = FQ.formats || YQ, xQ = FQ.targetTypes || xQ, AQ = FQ.faceIndex || AQ, tQ = FQ.layerIndex || tQ, eQ = FQ.layerCounts || eQ, MQ = FQ.labels || MQ, GQ = FQ.dontCreateTextures ?? !1, this.oA > 1 && (13 === FQ.depthTextureFormat || 17 === FQ.depthTextureFormat || 16 === FQ.depthTextureFormat || 14 === FQ.depthTextureFormat || 18 === FQ.depthTextureFormat) && (wQ = FQ.depthTextureFormat)), void 0 === wQ && (wQ = DQ ? 13 : 14);
            const cQ = this._gl,
              CQ = this._currentFramebuffer,
              SQ = cQ.createFramebuffer();
            this._bindUnboundFramebuffer(SQ);
            const iQ = QQ.width ?? QQ,
              WQ = QQ.height ?? QQ,
              RQ = [],
              sQ = [],
              rQ = this.oA > 1 && (13 === wQ || 17 === wQ || 18 === wQ);
            pQ.label = FQ?.label ?? "MultiRenderTargetWrapper", pQ._framebuffer = SQ, pQ._generateDepthBuffer = kQ || oQ, pQ._generateStencilBuffer = kQ ? rQ : DQ, pQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(pQ._generateStencilBuffer, pQ._generateDepthBuffer, iQ, WQ, 1, wQ), pQ._attachments = sQ;
            for (let IQ = 0; IQ < vQ; IQ++) {
              let QQ = HQ[IQ] || 3,
                FQ = uQ[IQ] || 0,
                wQ = bQ[IQ] || !1;
              const LQ = YQ[IQ] || 5,
                oQ = xQ[IQ] || 3553,
                DQ = eQ[IQ] ?? 1;
              (1 !== FQ || this._caps.textureFloatLinearFiltering) && (2 !== FQ || this._caps.textureHalfFloatLinearFiltering) || (QQ = 1);
              const kQ = this._getSamplingParameters(QQ, qQ);
              1 !== FQ || this._caps.textureFloat || (FQ = 0, OQ.c.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), wQ = wQ && this._caps.supportSRGBBuffers && (this.oA > 1 || this.isWebGPU);
              const vQ = this.oA > 1,
                mQ = cQ[vQ ? "COLOR_ATTACHMENT" + IQ : "COLOR_ATTACHMENT" + IQ + "_WEBGL"];
              if (sQ.push(mQ), -1 === oQ || GQ) continue;
              const AQ = new RF.d(this, 6);
              RQ[IQ] = AQ, cQ.activeTexture(cQ["TEXTURE" + IQ]), cQ.bindTexture(oQ, AQ._hardwareTexture.underlyingResource), cQ.texParameteri(oQ, cQ.TEXTURE_MAG_FILTER, kQ.mag), cQ.texParameteri(oQ, cQ.TEXTURE_MIN_FILTER, kQ.min), cQ.texParameteri(oQ, cQ.TEXTURE_WRAP_S, cQ.CLAMP_TO_EDGE), cQ.texParameteri(oQ, cQ.TEXTURE_WRAP_T, cQ.CLAMP_TO_EDGE);
              const tQ = this._getRGBABufferInternalSizedFormat(FQ, LQ, wQ),
                CQ = this._getInternalFormat(LQ),
                SQ = this._getWebGLTextureType(FQ);
              if (!vQ || 35866 !== oQ && 32879 !== oQ)
                if (34067 === oQ) {
                  for (let QQ = 0; QQ < 6; QQ++) cQ.texImage2D(cQ.TEXTURE_CUBE_MAP_POSITIVE_X + QQ, 0, tQ, iQ, WQ, 0, CQ, SQ, null);
                  AQ.isCube = !0
                } else cQ.texImage2D(cQ.TEXTURE_2D, 0, tQ, iQ, WQ, 0, CQ, SQ, null);
              else 35866 === oQ ? AQ.is2DArray = !0 : AQ.is3D = !0, AQ.baseDepth = AQ.depth = DQ, cQ.texImage3D(oQ, 0, tQ, iQ, WQ, DQ, 0, CQ, SQ, null);
              qQ && cQ.generateMipmap(oQ), this._bindTextureDirectly(oQ, null), AQ.baseWidth = iQ, AQ.baseHeight = WQ, AQ.width = iQ, AQ.height = WQ, AQ.isReady = !0, AQ.samples = 1, AQ.generateMipMaps = qQ, AQ.samplingMode = QQ, AQ.type = FQ, AQ._useSRGBBuffer = wQ, AQ.format = LQ, AQ.label = MQ[IQ] ?? pQ.label + "-Texture" + IQ, this._internalTexturesCache.push(AQ)
            }
            if (kQ && this._caps.depthTextureExtension && !GQ) {
              const QQ = new RF.d(this, 14);
              let FQ = 5,
                LQ = cQ.DEPTH_COMPONENT16,
                oQ = cQ.DEPTH_COMPONENT,
                DQ = cQ.UNSIGNED_SHORT,
                kQ = cQ.DEPTH_ATTACHMENT;
              this.oA < 2 ? LQ = cQ.DEPTH_COMPONENT : 14 === wQ ? (FQ = 1, DQ = cQ.FLOAT, LQ = cQ.DEPTH_COMPONENT32F) : 18 === wQ ? (FQ = 0, DQ = cQ.FLOAT_32_UNSIGNED_INT_24_8_REV, LQ = cQ.DEPTH32F_STENCIL8, oQ = cQ.DEPTH_STENCIL, kQ = cQ.DEPTH_STENCIL_ATTACHMENT) : 16 === wQ ? (FQ = 0, DQ = cQ.UNSIGNED_INT, LQ = cQ.DEPTH_COMPONENT24, kQ = cQ.DEPTH_ATTACHMENT) : 13 !== wQ && 17 !== wQ || (FQ = 12, DQ = cQ.UNSIGNED_INT_24_8, LQ = cQ.DEPTH24_STENCIL8, oQ = cQ.DEPTH_STENCIL, kQ = cQ.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(cQ.TEXTURE_2D, QQ, !0), cQ.texParameteri(cQ.TEXTURE_2D, cQ.TEXTURE_MAG_FILTER, cQ.NEAREST), cQ.texParameteri(cQ.TEXTURE_2D, cQ.TEXTURE_MIN_FILTER, cQ.NEAREST), cQ.texParameteri(cQ.TEXTURE_2D, cQ.TEXTURE_WRAP_S, cQ.CLAMP_TO_EDGE), cQ.texParameteri(cQ.TEXTURE_2D, cQ.TEXTURE_WRAP_T, cQ.CLAMP_TO_EDGE), cQ.texImage2D(cQ.TEXTURE_2D, 0, LQ, iQ, WQ, 0, oQ, DQ, null), cQ.framebufferTexture2D(cQ.FRAMEBUFFER, kQ, cQ.TEXTURE_2D, QQ._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(cQ.TEXTURE_2D, null), pQ._depthStencilTexture = QQ, pQ._depthStencilTextureWithStencil = rQ, QQ.baseWidth = iQ, QQ.baseHeight = WQ, QQ.width = iQ, QQ.height = WQ, QQ.isReady = !0, QQ.samples = 1, QQ.generateMipMaps = qQ, QQ.samplingMode = 1, QQ.format = wQ, QQ.type = FQ, QQ.label = pQ.label + "-DepthStencil", RQ[vQ] = QQ, this._internalTexturesCache.push(QQ)
            }
            if (pQ.setTextures(RQ), LQ && cQ.drawBuffers(sQ), this._bindUnboundFramebuffer(CQ), pQ.setLayerAndFaceIndices(tQ, AQ), this.resetTextureCache(), GQ) {
              if (mQ > 1) {
                const QQ = cQ.createFramebuffer();
                if (!QQ) throw new Error("Unable to create multi sampled framebuffer");
                pQ._samples = mQ, pQ._MSAAFramebuffer = QQ, vQ > 0 && LQ && (this._bindUnboundFramebuffer(QQ), cQ.drawBuffers(sQ), this._bindUnboundFramebuffer(CQ))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(pQ, mQ, LQ);
            return pQ
          }, OF.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(QQ, FQ) {
            let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.oA < 2 || !QQ) return 1;
            if (QQ.samples === FQ) return FQ;
            const LQ = this._gl;
            FQ = Math.min(FQ, this.getCaps().maxMSAASamples), QQ._depthStencilBuffer && (LQ.deleteRenderbuffer(QQ._depthStencilBuffer), QQ._depthStencilBuffer = null), QQ._MSAAFramebuffer && (LQ.deleteFramebuffer(QQ._MSAAFramebuffer), QQ._MSAAFramebuffer = null);
            const qQ = QQ._attachments.length;
            for (let DQ = 0; DQ < qQ; DQ++) {
              const FQ = QQ.textures[DQ]._hardwareTexture;
              FQ?.releaseMSAARenderBuffers()
            }
            if (FQ > 1 && "function" === typeof LQ.renderbufferStorageMultisample) {
              const oQ = LQ.createFramebuffer();
              if (!oQ) throw new Error("Unable to create multi sampled framebuffer");
              QQ._MSAAFramebuffer = oQ, this._bindUnboundFramebuffer(oQ);
              const DQ = [];
              for (let wQ = 0; wQ < qQ; wQ++) {
                const qQ = QQ.textures[wQ],
                  oQ = qQ._hardwareTexture,
                  kQ = LQ[this.oA > 1 ? "COLOR_ATTACHMENT" + wQ : "COLOR_ATTACHMENT" + wQ + "_WEBGL"],
                  vQ = this._createRenderBuffer(qQ.width, qQ.height, FQ, -1, this._getRGBABufferInternalSizedFormat(qQ.type, qQ.format, qQ._useSRGBBuffer), kQ);
                if (!vQ) throw new Error("Unable to create multi sampled framebuffer");
                oQ.addMSAARenderBuffer(vQ), qQ.samples = FQ, DQ.push(kQ)
              }
              wQ && LQ.drawBuffers(DQ)
            } else this._bindUnboundFramebuffer(QQ._framebuffer);
            const oQ = QQ._depthStencilTexture ? QQ._depthStencilTexture.format : void 0;
            return QQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(QQ._generateStencilBuffer, QQ._generateDepthBuffer, QQ.width, QQ.height, FQ, oQ), this._bindUnboundFramebuffer(null), QQ._samples = FQ, FQ
          }, OF.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(QQ) {
            const FQ = QQ,
              wQ = this._gl;
            if (FQ.isMulti)
              for (let LQ = 0; LQ < FQ._attachments.length; LQ++) {
                const QQ = FQ.textures[LQ];
                !QQ?.generateMipMaps || QQ?.isCube || QQ?.is3D || (this._bindTextureDirectly(wQ.TEXTURE_2D, QQ, !0), wQ.generateMipmap(wQ.TEXTURE_2D), this._bindTextureDirectly(wQ.TEXTURE_2D, null))
              }
          }, OF.ThinEngine.prototype.resolveMultiFramebuffer = function(QQ) {
            const FQ = QQ,
              wQ = this._gl;
            if (!FQ._MSAAFramebuffer || !FQ.isMulti) return;
            let LQ = FQ.resolveMSAAColors ? wQ.COLOR_BUFFER_BIT : 0;
            LQ |= FQ._generateDepthBuffer && FQ.resolveMSAADepth ? wQ.DEPTH_BUFFER_BIT : 0, LQ |= FQ._generateStencilBuffer && FQ.resolveMSAAStencil ? wQ.STENCIL_BUFFER_BIT : 0;
            const qQ = FQ._attachments,
              oQ = qQ.length;
            wQ.bindFramebuffer(wQ.READ_FRAMEBUFFER, FQ._MSAAFramebuffer), wQ.bindFramebuffer(wQ.DRAW_FRAMEBUFFER, FQ._framebuffer);
            for (let DQ = 0; DQ < oQ; DQ++) {
              const QQ = FQ.textures[DQ];
              for (let FQ = 0; FQ < oQ; FQ++) qQ[FQ] = wQ.NONE;
              qQ[DQ] = wQ[this.oA > 1 ? "COLOR_ATTACHMENT" + DQ : "COLOR_ATTACHMENT" + DQ + "_WEBGL"], wQ.readBuffer(qQ[DQ]), wQ.drawBuffers(qQ), wQ.blitFramebuffer(0, 0, QQ.width, QQ.height, 0, 0, QQ.width, QQ.height, LQ, wQ.NEAREST)
            }
            for (let DQ = 0; DQ < oQ; DQ++) qQ[DQ] = wQ[this.oA > 1 ? "COLOR_ATTACHMENT" + DQ : "COLOR_ATTACHMENT" + DQ + "_WEBGL"];
            wQ.drawBuffers(qQ), wQ.bindFramebuffer(this._gl.FRAMEBUFFER, FQ._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = oQ;
        const HQ = [],
          bQ = [],
          YQ = [],
          xQ = [],
          AQ = [],
          tQ = [],
          eQ = [],
          MQ = [];
        this._initTypes(wQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, qQ);
        const GQ = !qQ || void 0 === qQ.generateDepthBuffer || qQ.generateDepthBuffer,
          pQ = !(!qQ || void 0 === qQ.generateStencilBuffer) && qQ.generateStencilBuffer,
          cQ = qQ && qQ.samples ? qQ.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: bQ,
          generateMipMaps: DQ,
          generateDepthBuffer: GQ,
          generateStencilBuffer: pQ,
          generateDepthTexture: kQ,
          depthTextureFormat: vQ,
          types: HQ,
          FkQ: wQ,
          useSRGBBuffers: YQ,
          samples: cQ,
          formats: xQ,
          targetTypes: AQ,
          faceIndex: tQ,
          layerIndex: eQ,
          layerCounts: MQ,
          labels: oQ,
          label: QQ
        }, this._count = wQ, this._drawOnlyOnFirstAttachmentByDefault = uQ, wQ > 0 && (this._createInternalTextures(), this._createTextures(oQ))
      }
      _initTypes(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
        for (let uQ = 0; uQ < QQ; uQ++) mQ && mQ.types && void 0 !== mQ.types[uQ] ? FQ.push(mQ.types[uQ]) : FQ.push(mQ && mQ.defaultType ? mQ.defaultType : 0), mQ && mQ.samplingModes && void 0 !== mQ.samplingModes[uQ] ? wQ.push(mQ.samplingModes[uQ]) : wQ.push(rQ.e.BILINEAR_SAMPLINGMODE), mQ && mQ.useSRGBBuffers && void 0 !== mQ.useSRGBBuffers[uQ] ? LQ.push(mQ.useSRGBBuffers[uQ]) : LQ.push(!1), mQ && mQ.formats && void 0 !== mQ.formats[uQ] ? qQ.push(mQ.formats[uQ]) : qQ.push(5), mQ && mQ.targetTypes && void 0 !== mQ.targetTypes[uQ] ? oQ.push(mQ.targetTypes[uQ]) : oQ.push(3553), mQ && mQ.faceIndex && void 0 !== mQ.faceIndex[uQ] ? DQ.push(mQ.faceIndex[uQ]) : DQ.push(0), mQ && mQ.layerIndex && void 0 !== mQ.layerIndex[uQ] ? kQ.push(mQ.layerIndex[uQ]) : kQ.push(0), mQ && mQ.layerCounts && void 0 !== mQ.layerCounts[uQ] ? vQ.push(mQ.layerCounts[uQ]) : vQ.push(1)
      }
      _createInternaTextureIndexMapping() {
        const QQ = {},
          FQ = [];
        if (!this._renderTarget) return FQ;
        const wQ = this._renderTarget.textures;
        for (let LQ = 0; LQ < wQ.length; LQ++) {
          const qQ = wQ[LQ];
          if (!qQ) continue;
          const oQ = QQ[qQ.uniqueId];
          void 0 !== oQ ? FQ[LQ] = oQ : QQ[qQ.uniqueId] = LQ
        }
        return FQ
      }
      _rebuild() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || QQ) return;
        const LQ = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), FQ && (this._releaseTextures(), this._createTextures(wQ));
        const qQ = this._renderTarget.textures;
        for (let oQ = 0; oQ < qQ.length; oQ++) {
          const QQ = this._textures[oQ];
          void 0 !== LQ[oQ] && this._renderTarget.setTexture(qQ[LQ[oQ]], oQ), QQ._texture = qQ[oQ], QQ._texture && (QQ._noMipmap = !QQ._texture.useMipMaps, QQ._useSRGBBuffer = QQ._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let QQ = 0; QQ < this._textures.length; QQ++) this._textures[QQ]._texture = null, this._textures[QQ].dispose()
      }
      _createTextures(QQ) {
        const FQ = this._renderTarget.textures;
        this._textures = [];
        for (let wQ = 0; wQ < FQ.length; wQ++) {
          const LQ = new rQ.e(null, this.iN());
          QQ?.[wQ] && (LQ.name = QQ[wQ]), LQ._texture = FQ[wQ], LQ._texture && (LQ._noMipmap = !LQ._texture.useMipMaps, LQ._useSRGBBuffer = LQ._texture._useSRGBBuffer), this._textures.push(LQ)
        }
      }
      setInternalTexture(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === FQ && (this._texture = QQ), this.renderTarget.setTexture(QQ, FQ, wQ), this.textures[FQ] || (this.textures[FQ] = new rQ.e(null, this.iN()), this.textures[FQ].name = this._textureNames?.[FQ] ?? this.textures[FQ].name), this.textures[FQ]._texture = QQ, this.textures[FQ]._noMipmap = !QQ.useMipMaps, this.textures[FQ]._useSRGBBuffer = QQ._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[FQ] = QQ.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[FQ] = QQ.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[FQ] = QQ._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[FQ])) {
          let wQ;
          wQ = QQ.is2DArray ? 35866 : QQ.isCube ? 34067 : QQ.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[FQ] = wQ
        }
      }
      setLayerAndFaceIndex(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[QQ] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[QQ] = FQ), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[QQ] = wQ), this.renderTarget.setLayerAndFaceIndex(QQ, FQ, wQ))
      }
      setLayerAndFaceIndices(QQ, FQ) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = QQ, this._multiRenderTargetOptions.faceIndex = FQ, this.renderTarget.setLayerAndFaceIndices(QQ, FQ))
      }
      get samples() {
        return this._samples
      }
      set samples(QQ) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(QQ) : this._samples = QQ
      }
      resize(QQ) {
        this._processSizeParameter(QQ), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(QQ, FQ, wQ) {
        this._multiRenderTargetOptions.FkQ = QQ, this._count = QQ;
        const LQ = [],
          qQ = [],
          oQ = [],
          DQ = [],
          kQ = [],
          vQ = [],
          mQ = [],
          uQ = [];
        this._textureNames = wQ, this._initTypes(QQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, FQ), this._multiRenderTargetOptions.types = LQ, this._multiRenderTargetOptions.samplingModes = qQ, this._multiRenderTargetOptions.useSRGBBuffers = oQ, this._multiRenderTargetOptions.formats = DQ, this._multiRenderTargetOptions.targetTypes = kQ, this._multiRenderTargetOptions.faceIndex = vQ, this._multiRenderTargetOptions.layerIndex = mQ, this._multiRenderTargetOptions.layerCounts = uQ, this._multiRenderTargetOptions.labels = wQ, this._rebuild(!1, !0, wQ)
      }
      _unbindFrameBuffer(QQ, FQ) {
        this._renderTarget && QQ.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(FQ)
        }))
      }
      dispose() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), QQ ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const QQ = this._renderTarget?.textures;
        if (QQ) {
          for (let FQ = QQ.length - 1; FQ >= 0; FQ--) this._textures[FQ]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var TF = wQ(39589);
    class KF {
      constructor(QQ) {
        this.name = TF.b.NAME_GEOMETRYBUFFERRENDERER, this.lA = QQ
      }
      register() {
        this.lA._gatherRenderTargetsStage.registerStep(TF.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(QQ) {
        this.lA._geometryBufferRenderer && QQ.push(this.lA._geometryBufferRenderer.getGBuffer())
      }
    }
    let zF = !1;
    var lF;
    ! function(QQ) {
      QQ[QQ.Small = 0] = "Small", QQ[QQ.Medium = 1] = "Medium", QQ[QQ.Large = 2] = "Large", QQ[QQ.ExtraLarge = 3] = "ExtraLarge"
    }(lF || (lF = {}));
    const jF = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      aF = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class XF {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(QQ) {
        if (QQ && this._enableMeshBlendTag && !this._scene.Wx().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = QQ
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(QQ) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = QQ, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(QQ, FQ) {
        QQ === XF.POSITION_TEXTURE_TYPE ? (this._positionIndex = FQ, this._enablePosition = !0) : QQ === XF.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = FQ, this._enableVelocity = !0) : QQ === XF.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = FQ, this._enableVelocityLinear = !0) : QQ === XF.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = FQ, this._enableReflectivity = !0) : QQ === XF.DEPTH_TEXTURE_TYPE ? (this._depthIndex = FQ, this._enableDepth = !0) : QQ === XF.NORMAL_TEXTURE_TYPE ? (this._normalIndex = FQ, this._enableNormal = !0) : QQ === XF.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = FQ, this._enableScreenspaceDepth = !0) : QQ === XF.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = FQ, this._enableIrradiance = !0) : QQ === XF.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = FQ, this._enableObjectId = !0) : QQ === XF.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = FQ, this._enableMeshBlendTag = !0)
      }
      _setAttachments(QQ) {
        this._attachmentsFromPrePass = QQ
      }
      _linkInternalTexture(QQ) {
        this._multiRenderTarget.setInternalTexture(QQ, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(QQ) {
        this._multiRenderTarget.renderList = QQ
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(QQ) {
        switch (QQ) {
          case XF.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case XF.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case XF.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case XF.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case XF.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case XF.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case XF.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case XF.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case XF.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case XF.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(QQ) {
        this._enableDepth = QQ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(QQ) {
        this._enableNormal = QQ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(QQ) {
        this._enablePosition = QQ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(QQ) {
        this._enableVelocity = QQ, QQ || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = QQ
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(QQ) {
        this._enableVelocityLinear = QQ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(QQ) {
        this._enableReflectivity = QQ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(QQ) {
        this._enableScreenspaceDepth = QQ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(QQ) {
        this._enableIrradiance = QQ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(QQ) {
        if (QQ && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (QQ && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (QQ && !this._enableObjectId && !this._linkedWithPrePass) {
          const QQ = this._scene.Wx(),
            FQ = Math.min(QQ.getCaps().maxDrawBuffers ?? 1, 8),
            wQ = this._assignRenderTargetIndices()[0] + 1;
          if (QQ.getCaps().drawBuffersExtension && wQ > FQ) throw new Error(`GeometryBufferRenderer: ${wQ} color attachments were requested, but this engine supports at most ${FQ}`)
        }
        this._enableObjectId = QQ, QQ || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(QQ) {
        if (this._enableMeshBlendTag !== QQ) {
          if (QQ) {
            const QQ = this._scene.Wx();
            if (! function(QQ) {
                return "NATIVE" !== QQ.shaderPlatformName && (QQ.isWebGPU || 2 === QQ.oA)
              }(QQ)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !QQ.isWebGPU && !QQ.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const FQ = Math.min(QQ.getCaps().maxDrawBuffers ?? 1, 8),
                wQ = this._assignRenderTargetIndices()[0] + 1;
              if (QQ.getCaps().drawBuffersExtension && wQ > FQ) throw new Error(`GeometryBufferRenderer: ${wQ} color attachments were requested, but this engine supports at most ${FQ}`)
            }
          }
          this._enableMeshBlendTag = QQ, QQ || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get lA() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        var qQ;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new EQ.e(0, 0, 0, 0), this._clearDepthColor = new EQ.e(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = QQ, this._ratioOrDimensions = FQ, this._useUbo = QQ.Wx().supportsUniformBuffers, this._depthFormat = wQ, this._textureTypesAndFormats = LQ || {}, this._initShaderSourceAsync(), qQ = XF, zF || (zF = !0, Object.defineProperty(lQ.e.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(QQ) {
            QQ && QQ.isSupported && (this._geometryBufferRenderer = QQ)
          },
          enumerable: !0,
          configurable: !0
        }), lQ.e.prototype.enableGeometryBufferRenderer = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            wQ = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new qQ(this, QQ, FQ, wQ), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, lQ.e.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, qQ._SceneComponentInitialization = QQ => {
          let FQ = QQ._getComponent(TF.b.NAME_GEOMETRYBUFFERRENDERER);
          FQ || (FQ = new KF(QQ), QQ.HLQ(FQ))
        }), XF._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Wx().isWebGPU && !XF.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([wQ.e(328).then((() => wQ(61329))), Promise.all([wQ.e(327), wQ.e(339)]).then((() => wQ(61337)))])) : await Promise.all([wQ.e(311).then((() => wQ(61343))), wQ.e(310).then((() => wQ(61352)))]), this._shadersLoaded = !0
      }
      isReady(QQ, FQ) {
        if (!this._shadersLoaded) return !1;
        const wQ = QQ.Ux();
        if (wQ && wQ.disableDepthWrite) return !1;
        if (function(QQ) {
            return QQ._isGaussianSplatting || "GaussianSplattingMesh" === (FQ = QQ.getClassName()) || "GaussianSplattingStream" === FQ;
            var FQ
          }(QQ.getMesh())) return !1;
        const LQ = [],
          qQ = [aQ.h.PositionKind],
          oQ = QQ.getMesh();
        oQ.isVerticesDataPresent(aQ.h.NormalKind) && (LQ.push("#define HAS_NORMAL_ATTRIBUTE"), qQ.push(aQ.h.NormalKind));
        let DQ = !1,
          kQ = !1;
        if (wQ) {
          let QQ = !1;
          if (wQ.needAlphaTestingForMesh(oQ) && wQ.getAlphaTestTexture() && (LQ.push("#define ALPHATEST"), LQ.push(`#define ALPHATEST_UV${wQ.getAlphaTestTexture().coordinatesIndex+1}`), QQ = !0), (wQ.bumpTexture || wQ.normalTexture || wQ.geometryNormalTexture) && ZQ.e.BumpTextureEnabled) {
            const FQ = wQ.bumpTexture || wQ.normalTexture || wQ.geometryNormalTexture;
            LQ.push("#define BUMP"), LQ.push(`#define BUMP_UV${FQ.coordinatesIndex+1}`), QQ = !0
          }
          if (this._enableReflectivity) {
            let FQ = !1;
            if ("PBRMetallicRoughnessMaterial" === wQ.getClassName()) wQ.metallicRoughnessTexture && (LQ.push("#define ORMTEXTURE"), LQ.push(`#define REFLECTIVITY_UV${wQ.metallicRoughnessTexture.coordinatesIndex+1}`), LQ.push("#define METALLICWORKFLOW"), QQ = !0, FQ = !0), null != wQ.metallic && (LQ.push("#define METALLIC"), LQ.push("#define METALLICWORKFLOW"), FQ = !0), null != wQ.roughness && (LQ.push("#define ROUGHNESS"), LQ.push("#define METALLICWORKFLOW"), FQ = !0), FQ && (wQ.baseTexture && (LQ.push("#define ALBEDOTEXTURE"), LQ.push(`#define ALBEDO_UV${wQ.baseTexture.coordinatesIndex+1}`), wQ.baseTexture.gammaSpace && LQ.push("#define GAMMAALBEDO"), QQ = !0), wQ.baseColor && LQ.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === wQ.getClassName()) wQ.specularGlossinessTexture ? (LQ.push("#define SPECULARGLOSSINESSTEXTURE"), LQ.push(`#define REFLECTIVITY_UV${wQ.specularGlossinessTexture.coordinatesIndex+1}`), QQ = !0, wQ.specularGlossinessTexture.gammaSpace && LQ.push("#define GAMMAREFLECTIVITYTEXTURE")) : wQ.specularColor && LQ.push("#define REFLECTIVITYCOLOR"), null != wQ.glossiness && LQ.push("#define GLOSSINESS");
            else if ("PBRMaterial" === wQ.getClassName()) wQ.metallicTexture && (LQ.push("#define ORMTEXTURE"), LQ.push(`#define REFLECTIVITY_UV${wQ.metallicTexture.coordinatesIndex+1}`), LQ.push("#define METALLICWORKFLOW"), QQ = !0, FQ = !0), null != wQ.metallic && (LQ.push("#define METALLIC"), LQ.push("#define METALLICWORKFLOW"), FQ = !0), null != wQ.roughness && (LQ.push("#define ROUGHNESS"), LQ.push("#define METALLICWORKFLOW"), FQ = !0), FQ ? (wQ.albedoTexture && (LQ.push("#define ALBEDOTEXTURE"), LQ.push(`#define ALBEDO_UV${wQ.albedoTexture.coordinatesIndex+1}`), wQ.albedoTexture.gammaSpace && LQ.push("#define GAMMAALBEDO"), QQ = !0), wQ.albedoColor && LQ.push("#define ALBEDOCOLOR")) : (wQ.reflectivityTexture ? (LQ.push("#define SPECULARGLOSSINESSTEXTURE"), LQ.push(`#define REFLECTIVITY_UV${wQ.reflectivityTexture.coordinatesIndex+1}`), wQ.reflectivityTexture.gammaSpace && LQ.push("#define GAMMAREFLECTIVITYTEXTURE"), QQ = !0) : wQ.reflectivityColor && LQ.push("#define REFLECTIVITYCOLOR"), null != wQ.microSurface && LQ.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === wQ.getClassName()) wQ.specularTexture && (LQ.push("#define REFLECTIVITYTEXTURE"), LQ.push(`#define REFLECTIVITY_UV${wQ.specularTexture.coordinatesIndex+1}`), wQ.specularTexture.gammaSpace && LQ.push("#define GAMMAREFLECTIVITYTEXTURE"), QQ = !0), wQ.specularColor && LQ.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === wQ.getClassName()) {
              const FQ = wQ;
              LQ.push("#define METALLIC"), LQ.push("#define ROUGHNESS"), FQ._useRoughnessFromMetallicTextureGreen && FQ.baseMetalnessTexture ? (LQ.push("#define ORMTEXTURE"), LQ.push(`#define REFLECTIVITY_UV${FQ.baseMetalnessTexture.coordinatesIndex+1}`), QQ = !0) : FQ.baseMetalnessTexture ? (LQ.push("#define METALLIC_TEXTURE"), LQ.push(`#define METALLIC_UV${FQ.baseMetalnessTexture.coordinatesIndex+1}`), QQ = !0) : FQ.specularRoughnessTexture && (LQ.push("#define ROUGHNESS_TEXTURE"), LQ.push(`#define ROUGHNESS_UV${FQ.specularRoughnessTexture.coordinatesIndex+1}`), QQ = !0), FQ.baseColorTexture && (LQ.push("#define ALBEDOTEXTURE"), LQ.push(`#define ALBEDO_UV${FQ.baseColorTexture.coordinatesIndex+1}`), FQ.baseColorTexture.gammaSpace && LQ.push("#define GAMMAALBEDO"), QQ = !0), FQ.baseColor && LQ.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (LQ.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === wQ.getClassName())) {
            const FQ = wQ;
            FQ.subsurfaceWeight > 0 && FQ.subsurfaceWeightTexture && (LQ.push("#define SUBSURFACE_WEIGHT"), LQ.push(`#define SUBSURFACEWEIGHT_UV${FQ.subsurfaceWeightTexture.coordinatesIndex+1}`), QQ = !0), FQ.transmissionWeight > 0 && FQ.transmissionWeightTexture && (LQ.push("#define TRANSMISSION_WEIGHT"), LQ.push(`#define TRANSMISSIONWEIGHT_UV${FQ.transmissionWeightTexture.coordinatesIndex+1}`), QQ = !0)
          }
          QQ && (LQ.push("#define NEED_UV"), oQ.isVerticesDataPresent(aQ.h.UVKind) && (qQ.push(aQ.h.UVKind), LQ.push("#define UV1"), DQ = !0), oQ.isVerticesDataPresent(aQ.h.UV2Kind) && (qQ.push(aQ.h.UV2Kind), LQ.push("#define UV2"), kQ = !0))
        }
        if (this._enableDepth && (LQ.push("#define DEPTH"), LQ.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (LQ.push("#define NORMAL"), LQ.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (LQ.push("#define POSITION"), LQ.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (LQ.push("#define VELOCITY"), LQ.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(oQ) && LQ.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (LQ.push("#define VELOCITY_LINEAR"), LQ.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(oQ) && LQ.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (LQ.push("#define REFLECTIVITY"), LQ.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (LQ.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), LQ.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          LQ.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), LQ.push("#define IRRADIANCE");
          const QQ = this._scene;
          if (QQ.environmentTexture) {
            const FQ = {};
            let qQ = !1,
              oQ = 0;
            "OpenPBRMaterial" !== wQ.getClassName() && "StandardMaterial" !== wQ.getClassName() && "PBRMetallicRoughnessMaterial" !== wQ.getClassName() && "PBRSpecularGlossinessMaterial" !== wQ.getClassName() && "PBRMaterial" !== wQ.getClassName() || (qQ = !!wQ.realtimeFiltering, oQ = wQ.realtimeFilteringQuality || 0), (0, BQ.T)(QQ, QQ.environmentTexture, FQ, qQ, oQ, !0);
            for (const QQ in FQ) FQ[QQ] && LQ.push("#define " + QQ);
            FQ.USEIRRADIANCEMAP || LQ.push("#define SPHERICAL_HARMONICS");
            const DQ = QQ.postProcessRenderPipelineManager.supportedPipelines.find((QQ => "IBLShadowsRenderPipeline" === QQ.getClassName()));
            if (DQ) {
              const QQ = DQ;
              QQ._getAccumulatedTexture() && (LQ.push("#define IBL_SHADOW_TEXTURE"), QQ.coloredShadows && LQ.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (LQ.push("#define OBJECT_ID"), LQ.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (LQ.push("#define MESH_BLEND_TAG"), LQ.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && LQ.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && LQ.push("#define ENCODE_NORMAL"), oQ.useBones && oQ.computeBonesUsingShaders && oQ.skeleton ? (qQ.push(aQ.h.MatricesIndicesKind), qQ.push(aQ.h.MatricesWeightsKind), oQ.numBoneInfluencers > 4 && (qQ.push(aQ.h.MatricesIndicesExtraKind), qQ.push(aQ.h.MatricesWeightsExtraKind)), LQ.push("#define NUM_BONE_INFLUENCERS " + oQ.numBoneInfluencers), LQ.push("#define BONETEXTURE " + oQ.skeleton.isUsingTextureForMatrices), LQ.push("#define BonesPerMesh " + (oQ.skeleton.bones.length + 1))) : (LQ.push("#define NUM_BONE_INFLUENCERS 0"), LQ.push("#define BONETEXTURE false"), LQ.push("#define BonesPerMesh 0"));
        const vQ = oQ.morphTargetManager ? (0, BQ.K)(oQ.morphTargetManager, LQ, qQ, oQ, !0, !0, !1, DQ, kQ, !1) : 0;
        FQ && (LQ.push("#define INSTANCES"), (0, BQ.qb)(qQ, this._enableVelocity || this._enableVelocityLinear), QQ.getRenderingMesh().hasThinInstances && LQ.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? LQ.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : LQ.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, uF.o)(wQ, this._scene, LQ);
        const mQ = this._scene.Wx(),
          uQ = QQ._getDrawWrapper(void 0, !0),
          HQ = uQ.defines,
          bQ = LQ.join("\n");
        return HQ !== bQ && uQ.setEffect(mQ.createEffect("geometry", {
          attributes: qQ,
          uniformsNames: aF,
          samplers: jF,
          defines: bQ,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: vQ
          },
          shaderLanguage: this.shaderLanguage
        }, mQ), bQ), uQ.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(QQ) {
        if (this._enableObjectId && 1 !== QQ) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== QQ) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = QQ
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.Wx().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.lA.Wx()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.lA.Wx().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const QQ = [],
          FQ = [];
        let wQ = 0;
        return this._enableDepth && (this._depthIndex = wQ, wQ++, QQ.push("gBuffer_Depth"), FQ.push(this._textureTypesAndFormats[XF.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = wQ, wQ++, QQ.push("gBuffer_Normal"), FQ.push(this._textureTypesAndFormats[XF.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = wQ, wQ++, QQ.push("gBuffer_Position"), FQ.push(this._textureTypesAndFormats[XF.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = wQ, wQ++, QQ.push("gBuffer_Velocity"), FQ.push(this._textureTypesAndFormats[XF.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = wQ, wQ++, QQ.push("gBuffer_VelocityLinear"), FQ.push(this._textureTypesAndFormats[XF.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = wQ, wQ++, QQ.push("gBuffer_Reflectivity"), FQ.push(this._textureTypesAndFormats[XF.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = wQ, wQ++, QQ.push("gBuffer_ScreenspaceDepth"), FQ.push(this._textureTypesAndFormats[XF.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = wQ, wQ++, QQ.push("gBuffer_Irradiance"), FQ.push(this._textureTypesAndFormats[XF.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = wQ, wQ++, QQ.push("gBuffer_ObjectId"), FQ.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = wQ, wQ++, QQ.push("gBuffer_MeshBlendTag"), FQ.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [wQ, QQ, FQ]
      }
      _createRenderTargets() {
        const QQ = this._scene.Wx(),
          [FQ, wQ, LQ] = this._assignRenderTargetIndices(),
          qQ = Math.min(QQ.getCaps().maxDrawBuffers ?? 1, 8);
        if (QQ.getCaps().drawBuffersExtension && FQ > qQ) throw new Error(`GeometryBufferRenderer: ${FQ} color attachments were requested, but this engine supports at most ${qQ}`);
        let DQ = 0;
        QQ._caps.textureFloat && QQ._caps.textureFloatLinearFiltering ? DQ = 1 : QQ._caps.textureHalfFloat && QQ._caps.textureHalfFloatLinearFiltering && (DQ = 2);
        const kQ = this._getRenderTargetDimensions(),
          vQ = [],
          mQ = [],
          uQ = [];
        for (const oQ of LQ) oQ ? (vQ.push(oQ.textureType), mQ.push(oQ.textureFormat), uQ.push(oQ.samplingMode ?? 2)) : (vQ.push(DQ), mQ.push(5), uQ.push(2));
        if (this._normalsAreUnsigned = 11 === vQ[XF.NORMAL_TEXTURE_TYPE] || 13 === vQ[XF.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new NF("gBuffer", kQ, FQ, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: vQ,
            formats: mQ,
            samplingModes: uQ,
            depthTextureFormat: this._depthFormat
          }, wQ.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = rQ.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = rQ.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const HQ = [!0],
          bQ = [!1],
          YQ = [!0];
        for (let oQ = 1; oQ < FQ; ++oQ) HQ.push(!0), YQ.push(!1), bQ.push(!0);
        const xQ = QQ.buildTextureLayout(HQ),
          AQ = QQ.buildTextureLayout(bQ),
          tQ = QQ.buildTextureLayout(YQ);
        this._multiRenderTarget.onClearObservable.add((QQ => {
          const FQ = this.useSpecificClearForDepthTexture ? AQ : xQ;
          QQ.clearAttachments(this._clearColor, FQ, !0, !0, !0), this.useSpecificClearForDepthTexture && QQ.clearAttachments(this._clearDepthColor, tQ, !0, !1, !1), QQ.bindAttachments(xQ)
        })), this._resizeObserver = QQ.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const eQ = QQ => {
          const FQ = QQ.getRenderingMesh(),
            wQ = QQ.getEffectiveMesh(),
            LQ = this._scene,
            qQ = LQ.Wx(),
            DQ = QQ.Ux();
          if (!DQ) return;
          if (wQ._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[wQ.uniqueId] && (this._previousTransformationMatrices[wQ.uniqueId] = {
              nH: jQ.c.Identity(),
              viewProjection: LQ.getTransformMatrix()
            }, FQ.skeleton)) {
            const QQ = FQ.skeleton.getTransformMatrices(FQ);
            this._previousBonesTransformationMatrices[FQ.uniqueId] = this._copyBonesTransformationMatrices(QQ, new Float32Array(QQ.length))
          }
          const kQ = FQ._getInstancesRenderList(QQ._id, !!QQ.getReplacementMesh());
          if (kQ.mustReturn) return;
          const vQ = qQ.getCaps().instancedArrays && (null !== kQ.visibleInstances[QQ._id] || FQ.hasThinInstances),
            mQ = wQ.getWorldMatrix();
          if (this.isReady(QQ, vQ)) {
            const uQ = QQ._getDrawWrapper();
            if (!uQ) return;
            const HQ = uQ.effect;
            let bQ;
            qQ.enableEffect(uQ), vQ || FQ._bind(QQ, HQ, DQ.fillMode), this._useUbo ? ((0, BQ.w)(HQ, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (HQ.setMatrix("viewProjection", LQ.getTransformMatrix()), HQ.setMatrix("view", LQ.getViewMatrix()), this._scene.bindEyePosition(HQ, "vEyePosition"));
            if (FQ._instanceDataStorage.isFrozen || !DQ.backFaceCulling && null === DQ.sideOrientation) bQ = FQ._effectiveSideOrientation;
            else {
              const QQ = wQ._getWorldMatrixDeterminant();
              bQ = DQ._getEffectiveOrientation(FQ), QQ < 0 && (bQ = bQ === oQ.d.ClockWiseSideOrientation ? oQ.d.CounterClockWiseSideOrientation : oQ.d.ClockWiseSideOrientation)
            }
            if (DQ._preBind(uQ, bQ), DQ.needAlphaTestingForMesh(wQ)) {
              const QQ = DQ.getAlphaTestTexture();
              QQ && (HQ.setTexture("diffuseSampler", QQ), HQ.setMatrix("diffuseMatrix", QQ.getTextureMatrix()), HQ.setFloat("alphaCutOff", DQ.alphaCutOff ?? .4))
            }
            if ((DQ.bumpTexture || DQ.normalTexture || DQ.geometryNormalTexture) && LQ.Wx().getCaps().standardDerivatives && ZQ.e.BumpTextureEnabled) {
              const QQ = DQ.bumpTexture || DQ.normalTexture || DQ.geometryNormalTexture;
              HQ.setFloat3("vBumpInfos", QQ.coordinatesIndex, 1 / QQ.level, DQ.parallaxScaleBias), HQ.setMatrix("bumpMatrix", QQ.getTextureMatrix()), HQ.setTexture("bumpSampler", QQ), HQ.setFloat2("vTangentSpaceParams", DQ.invertNormalMapX ? -1 : 1, DQ.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === DQ.getClassName()) null !== DQ.metallicRoughnessTexture && (HQ.setTexture("reflectivitySampler", DQ.metallicRoughnessTexture), HQ.setMatrix("reflectivityMatrix", DQ.metallicRoughnessTexture.getTextureMatrix())), null !== DQ.metallic && HQ.setFloat("metallic", DQ.metallic), null !== DQ.roughness && HQ.setFloat("glossiness", 1 - DQ.roughness), null !== DQ.baseTexture && (HQ.setTexture("albedoSampler", DQ.baseTexture), HQ.setMatrix("albedoMatrix", DQ.baseTexture.getTextureMatrix())), null !== DQ.baseColor && HQ.setColor3("albedoColor", DQ.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === DQ.getClassName()) null !== DQ.specularGlossinessTexture ? (HQ.setTexture("reflectivitySampler", DQ.specularGlossinessTexture), HQ.setMatrix("reflectivityMatrix", DQ.specularGlossinessTexture.getTextureMatrix())) : null !== DQ.specularColor && HQ.setColor3("reflectivityColor", DQ.specularColor), null !== DQ.glossiness && HQ.setFloat("glossiness", DQ.glossiness);
            else if ("PBRMaterial" === DQ.getClassName()) null !== DQ.metallicTexture && (HQ.setTexture("reflectivitySampler", DQ.metallicTexture), HQ.setMatrix("reflectivityMatrix", DQ.metallicTexture.getTextureMatrix())), null !== DQ.metallic && HQ.setFloat("metallic", DQ.metallic), null !== DQ.roughness && HQ.setFloat("glossiness", 1 - DQ.roughness), null !== DQ.roughness || null !== DQ.metallic || null !== DQ.metallicTexture ? (null !== DQ.albedoTexture && (HQ.setTexture("albedoSampler", DQ.albedoTexture), HQ.setMatrix("albedoMatrix", DQ.albedoTexture.getTextureMatrix())), null !== DQ.albedoColor && HQ.setColor3("albedoColor", DQ.albedoColor)) : (null !== DQ.reflectivityTexture ? (HQ.setTexture("reflectivitySampler", DQ.reflectivityTexture), HQ.setMatrix("reflectivityMatrix", DQ.reflectivityTexture.getTextureMatrix())) : null !== DQ.reflectivityColor && HQ.setColor3("reflectivityColor", DQ.reflectivityColor), null !== DQ.microSurface && HQ.setFloat("glossiness", DQ.microSurface));
            else if ("StandardMaterial" === DQ.getClassName()) null !== DQ.specularTexture && (HQ.setTexture("reflectivitySampler", DQ.specularTexture), HQ.setMatrix("reflectivityMatrix", DQ.specularTexture.getTextureMatrix())), null !== DQ.specularColor && HQ.setColor3("reflectivityColor", DQ.specularColor);
            else if ("OpenPBRMaterial" === DQ.getClassName()) {
              const QQ = DQ;
              QQ._useRoughnessFromMetallicTextureGreen && QQ.baseMetalnessTexture ? (HQ.setTexture("reflectivitySampler", QQ.baseMetalnessTexture), HQ.setMatrix("reflectivityMatrix", QQ.baseMetalnessTexture.getTextureMatrix())) : QQ.baseMetalnessTexture ? (HQ.setTexture("metallicSampler", QQ.baseMetalnessTexture), HQ.setMatrix("metallicMatrix", QQ.baseMetalnessTexture.getTextureMatrix())) : QQ.specularRoughnessTexture && (HQ.setTexture("roughnessSampler", QQ.specularRoughnessTexture), HQ.setMatrix("roughnessMatrix", QQ.specularRoughnessTexture.getTextureMatrix())), HQ.setFloat("metallic", QQ.baseMetalness), HQ.setFloat("glossiness", 1 - QQ.specularRoughness), null !== QQ.baseColorTexture && (HQ.setTexture("albedoSampler", QQ.baseColorTexture), HQ.setMatrix("albedoMatrix", QQ.baseColorTexture.getTextureMatrix())), null !== QQ.baseColor && HQ.setColor3("albedoColor", QQ.baseColor)
            }
            if (this._enableIrradiance && LQ.environmentTexture) {
              const QQ = LQ.environmentTexture,
                FQ = LQ.postProcessRenderPipelineManager.supportedPipelines.find((QQ => "IBLShadowsRenderPipeline" === QQ.getClassName()));
              if (FQ) {
                const QQ = FQ._getAccumulatedTexture();
                QQ && (HQ.setTexture("iblShadowSampler", QQ), HQ.setFloat2("shadowTextureSize", QQ.getSize().width, QQ.getSize().height))
              }
              if (HQ.setMatrix("reflectionMatrix", QQ.getReflectionTextureMatrix()), HQ.setFloat2("vReflectionInfos", QQ.level * LQ.iblIntensity, 0), HQ.setTexture("reflectionSampler", QQ), QQ.irradianceTexture && (HQ.setTexture("irradianceSampler", QQ.irradianceTexture), QQ.irradianceTexture._dominantDirection && HQ.setVector3("vReflectionDominantDirection", QQ.irradianceTexture._dominantDirection)), QQ.sphericalPolynomial) {
                const FQ = QQ.sphericalPolynomial;
                if (FQ.preScaledHarmonics) {
                  const QQ = FQ.preScaledHarmonics;
                  HQ.setVector3("vSphericalL00", QQ.l00), HQ.setVector3("vSphericalL1_1", QQ.l1_1), HQ.setVector3("vSphericalL10", QQ.l10), HQ.setVector3("vSphericalL11", QQ.l11), HQ.setVector3("vSphericalL2_2", QQ.l2_2), HQ.setVector3("vSphericalL2_1", QQ.l2_1), HQ.setVector3("vSphericalL20", QQ.l20), HQ.setVector3("vSphericalL21", QQ.l21), HQ.setVector3("vSphericalL22", QQ.l22)
                } else HQ.setFloat3("vSphericalX", FQ.x.x, FQ.x.y, FQ.x.z), HQ.setFloat3("vSphericalY", FQ.y.x, FQ.y.y, FQ.y.z), HQ.setFloat3("vSphericalZ", FQ.z.x, FQ.z.y, FQ.z.z), HQ.setFloat3("vSphericalXX_ZZ", FQ.xx.x - FQ.zz.x, FQ.xx.y - FQ.zz.y, FQ.xx.z - FQ.zz.z), HQ.setFloat3("vSphericalYY_ZZ", FQ.yy.x - FQ.zz.x, FQ.yy.y - FQ.zz.y, FQ.yy.z - FQ.zz.z), HQ.setFloat3("vSphericalZZ", FQ.zz.x, FQ.zz.y, FQ.zz.z), HQ.setFloat3("vSphericalXY", FQ.xy.x, FQ.xy.y, FQ.xy.z), HQ.setFloat3("vSphericalYZ", FQ.yz.x, FQ.yz.y, FQ.yz.z), HQ.setFloat3("vSphericalZX", FQ.zx.x, FQ.zx.y, FQ.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === DQ.getClassName()) {
                const QQ = DQ;
                HQ.setFloat("vSubsurfaceWeight", QQ.subsurfaceWeight), QQ.subsurfaceWeightTexture && (HQ.setTexture("subsurfaceWeightSampler", QQ.subsurfaceWeightTexture), HQ.setMatrix("subsurfaceWeightMatrix", QQ.subsurfaceWeightTexture.getTextureMatrix())), HQ.setFloat("vTransmissionWeight", QQ.transmissionWeight), QQ.transmissionWeightTexture && (HQ.setTexture("transmissionWeightSampler", QQ.transmissionWeightTexture), HQ.setMatrix("transmissionWeightMatrix", QQ.transmissionWeightTexture.getTextureMatrix())), HQ.setFloat("vTransmissionScatterAnisotropy", QQ.transmissionScatterAnisotropy), HQ.setFloat("vSubsurfaceScatterAnisotropy", QQ.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, uF.h)(HQ, DQ, this._scene), FQ.useBones && FQ.computeBonesUsingShaders && FQ.skeleton) {
              const QQ = FQ.skeleton;
              if (QQ.isUsingTextureForMatrices && HQ.getUniformIndex("boneTextureInfo") > -1) {
                const wQ = QQ.getTransformMatrixTexture(FQ);
                HQ.setTexture("boneSampler", wQ), HQ.setFloat2("boneTextureInfo", QQ._textureWidth, QQ._textureHeight)
              } else HQ.setMatrices("mBones", FQ.skeleton.getTransformMatrices(FQ));
              (this._enableVelocity || this._enableVelocityLinear) && HQ.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[FQ.uniqueId])
            }
            if ((0, BQ.s)(FQ, HQ), FQ.morphTargetManager && FQ.morphTargetManager.isUsingTextureForTargets && FQ.morphTargetManager._bind(HQ), (this._enableVelocity || this._enableVelocityLinear) && (HQ.setMatrix("previousWorld", this._previousTransformationMatrices[wQ.uniqueId].nH), HQ.setMatrix("previousViewProjection", this._previousTransformationMatrices[wQ.uniqueId].viewProjection)), this._enableObjectId) {
              let QQ = FQ.uniqueId;
              if (this.objectIdProvider) QQ = (0, YF.i)(FQ, this.objectIdProvider);
              else if (QQ > 16777215) throw new Error(`Invalid geometry object ID ${QQ} for mesh "${FQ.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              HQ.setFloat("objectId", QQ)
            }
            if (this._enableMeshBlendTag) {
              const QQ = this.meshBlendTagProvider ? (0, YF.f)(FQ, this.meshBlendTagProvider) : FQ.meshBlendingTag;
              HQ.setInt("meshBlendTag", QQ)
            }
            vQ && FQ.hasThinInstances && HQ.setMatrix("world", mQ), FQ._processRendering(wQ, QQ, HQ, DQ.fillMode, kQ, vQ, ((QQ, FQ) => {
              QQ || HQ.setMatrix("world", FQ)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[wQ.uniqueId].nH = mQ.clone(), this._previousTransformationMatrices[wQ.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), FQ.skeleton && this._copyBonesTransformationMatrices(FQ.skeleton.getTransformMatrices(FQ), this._previousBonesTransformationMatrices[wQ.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (FQ, wQ, LQ) => {
          if ((LQ || 0 === wQ) && FQ.lC)
            for (let qQ = 0; qQ < FQ.lC.length; ++qQ) {
              const wQ = FQ.lC[qQ],
                LQ = wQ.Ux(),
                oQ = wQ.getRenderingMesh();
              if (!LQ) continue;
              const DQ = oQ._getInstancesRenderList(wQ._id, !!wQ.getReplacementMesh()),
                kQ = QQ.getCaps().instancedArrays && (null !== DQ.visibleInstances[wQ._id] || oQ.hasThinInstances);
              if (!this.isReady(wQ, kQ)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (FQ, wQ, LQ, qQ) => {
          let oQ;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Wx().bindAttachments(this._attachmentsFromPrePass)
          }
          if (qQ.length) {
            for (QQ.setColorWrite(!1), oQ = 0; oQ < qQ.length; oQ++) eQ(qQ.data[oQ]);
            QQ.setColorWrite(!0)
          }
          for (oQ = 0; oQ < FQ.length; oQ++) eQ(FQ.data[oQ]);
          for (QQ.setDepthWrite(!1), oQ = 0; oQ < wQ.length; oQ++) eQ(wQ.data[oQ]);
          if (this.renderTransparentMeshes)
            for (oQ = 0; oQ < LQ.length; oQ++) eQ(LQ.data[oQ]);
          QQ.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const QQ = this._scene.Wx();
        return {
          width: Math.max(1, Math.floor(QQ.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(QQ.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(QQ, FQ) {
        for (let wQ = 0; wQ < QQ.length; wQ++) FQ[wQ] = QQ[wQ];
        return FQ
      }
    }
    XF.ForceGLSL = !1, XF.DEPTH_TEXTURE_TYPE = 0, XF.NORMAL_TEXTURE_TYPE = 1, XF.POSITION_TEXTURE_TYPE = 2, XF.VELOCITY_TEXTURE_TYPE = 3, XF.REFLECTIVITY_TEXTURE_TYPE = 4, XF.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, XF.VELOCITY_LINEAR_TEXTURE_TYPE = 6, XF.IRRADIANCE_TEXTURE_TYPE = 7, XF.OBJECT_ID_TEXTURE_TYPE = 8, XF.MESH_BLEND_TAG_TEXTURE_TYPE = 9, XF._SceneComponentInitialization = QQ => {
      throw (0, eF.k)("GeometryBufferRendererSceneComponent")
    };
    var fF = wQ(36741);
    const VF = {
      effect: null,
      subMesh: null
    };

    function hF(QQ) {
      if ("number" === typeof QQ) return 1;
      if (QQ instanceof jQ.n) return 2;
      if (QQ instanceof jQ.p || QQ instanceof EQ.b) return 3;
      if (QQ instanceof jQ.t || QQ instanceof EQ.e) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class JF {
      populateVectorFromLinkedProperties(QQ) {
        const FQ = hF(QQ);
        for (const wQ in this.linkedProperties) {
          const QQ = this.linkedProperties[wQ],
            LQ = QQ.numComponents;
          if (FQ < LQ || QQ.targetUniformComponentOffset > FQ - LQ) return void(1 == LQ ? OQ.c.Error(`Float property ${QQ.name} has an offset that is too large.`) : OQ.c.Error(`Vector${LQ} property ${QQ.name} won't fit in Vector${FQ} or has an offset that is too large.`));
          "number" === typeof QQ.value ? JF._tmpArray[QQ.targetUniformComponentOffset] = QQ.value : QQ.value.toArray(JF._tmpArray, QQ.targetUniformComponentOffset)
        }
        QQ.bwQ(JF._tmpArray)
      }
      constructor(QQ, FQ) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = QQ, this.numComponents = FQ
      }
    }
    JF._tmpArray = [0, 0, 0, 0];
    class EF {
      constructor(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          oQ = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = QQ, this.targetUniformName = wQ, this.defaultValue = FQ, this.value = FQ, this.targetUniformComponentNum = LQ, this.targetUniformComponentOffset = qQ, this.requiredDefine = oQ
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : hF(this.defaultValue)
      }
    }
    class nF {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(QQ, FQ, wQ) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = QQ, this.samplerPrefix = FQ, this.textureDefine = wQ
      }
    }
    class gF extends((0, AF.b)((0, xF.d)(XQ.c))) {}
    class PF extends(function(QQ) {
      return class extends QQ {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(gF)) {}
    class ZF extends((0, nQ.c)(PF)) {
      constructor(QQ) {
        super(QQ), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class yF extends((0, tF.d)(PQ.e)) {}
    let BF = (() => {
        var QQ, FQ, LQ, qQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, IQ, UQ, NQ, TQ, lQ, XQ, fQ, VQ, hQ, nQ, PQ, dQ, QF, FF, wF, LF, qF, oF, DF, kF, vF, mF, xF, AF, tF, eF, MF, GF, pF, cF, CF, WF, RF, OF, sF, rF, IF, UF, NF, TF, KF, zF, lF, jF, aF, fF, hF, gF, PF, BF, dF, Qw, Fw, ww, Lw, qw, ow, Dw, kw, vw, mw, uw, Hw, bw, Yw, xw, Aw, tw, ew, Mw, Gw, pw, Cw, Sw, iw, Ww, Rw, Ow, sw, rw;
        let Iw, Uw, Nw, Tw, Kw, zw, lw, jw, aw, Xw, fw, Vw, hw, Jw, Ew, nw, gw, Pw, Zw, yw, Bw, dw, QL, FL, wL, LL, qL, oL, DL, kL, vL, mL, uL, HL, bL, YL, xL, AL, tL, eL, ML, GL, pL, cL, CL, SL, iL, WL, RL, OL, sL, rL, IL, UL, NL, TL, KL, zL, lL, jL, aL, XL, fL, VL, hL, JL, EL, nL, gL, PL, ZL, yL, BL, dL, Qq, Fq, wq, Lq, qq, oq, Dq, kq, vq, mq, uq, Hq, bq, Yq, xq, Aq, tq, eq, Mq, Gq, pq, cq, Cq, Sq, iq, Wq, Rq, Oq, sq, rq, Iq, Uq = yF,
          Nq = [],
          Tq = [],
          Kq = [],
          zq = [],
          lq = [],
          jq = [],
          aq = [],
          Xq = [],
          fq = [],
          Vq = [],
          hq = [],
          Jq = [],
          Eq = [],
          nq = [],
          gq = [],
          Pq = [],
          Zq = [],
          yq = [],
          Bq = [],
          dq = [],
          Qo = [],
          Fo = [],
          wo = [],
          Lo = [],
          qo = [],
          oo = [],
          Do = [],
          ko = [],
          vo = [],
          mo = [],
          uo = [],
          Ho = [],
          bo = [],
          Yo = [],
          xo = [],
          Ao = [],
          to = [],
          eo = [],
          Mo = [],
          Go = [],
          po = [],
          co = [],
          Co = [],
          So = [],
          io = [],
          Wo = [],
          Ro = [],
          Oo = [],
          so = [],
          ro = [],
          Io = [],
          Uo = [],
          No = [],
          To = [],
          Ko = [],
          zo = [],
          jo = [],
          ao = [],
          Xo = [],
          fo = [],
          Vo = [],
          ho = [],
          Jo = [],
          Eo = [],
          no = [],
          go = [],
          Po = [],
          Zo = [],
          yo = [],
          Bo = [],
          QD = [],
          FD = [],
          wD = [],
          LD = [],
          qD = [],
          oD = [],
          DD = [],
          kD = [],
          vD = [],
          mD = [],
          uD = [],
          HD = [],
          bD = [],
          YD = [],
          xD = [],
          AD = [],
          tD = [],
          eD = [],
          MD = [],
          GD = [],
          pD = [],
          cD = [],
          CD = [],
          SD = [],
          iD = [],
          WD = [],
          RD = [],
          OD = [],
          sD = [],
          rD = [],
          ID = [],
          UD = [],
          ND = [],
          TD = [],
          KD = [],
          zD = [],
          lD = [],
          jD = [],
          aD = [],
          XD = [],
          fD = [],
          VD = [],
          hD = [],
          JD = [],
          ED = [],
          nD = [],
          gD = [],
          PD = [],
          ZD = [],
          yD = [],
          BD = [],
          dD = [],
          Qk = [],
          Fk = [],
          wk = [],
          Lk = [],
          qk = [],
          Dk = [],
          kk = [],
          vk = [],
          mk = [],
          uk = [],
          Hk = [],
          bk = [],
          Yk = [],
          xk = [],
          Ak = [],
          tk = [],
          ek = [],
          Mk = [],
          Gk = [],
          pk = [],
          ck = [],
          Ck = [],
          Sk = [],
          ik = [],
          Wk = [],
          Rk = [],
          Ok = [],
          sk = [],
          rk = [],
          Ik = [],
          Uk = [],
          Nk = [],
          Tk = [],
          Kk = [],
          zk = [],
          lk = [],
          jk = [],
          ak = [],
          Xk = [],
          fk = [],
          Vk = [],
          hk = [],
          Jk = [],
          Ek = [],
          nk = [],
          gk = [],
          Pk = [],
          Zk = [],
          yk = [],
          Bk = [],
          dk = [],
          Qv = [],
          Fv = [],
          wv = [],
          Lv = [],
          qv = [],
          ov = [],
          Dv = [],
          kv = [],
          vv = [],
          mv = [],
          uv = [],
          Hv = [],
          bv = [],
          Yv = [],
          xv = [],
          Av = [],
          tv = [],
          ev = [],
          Mv = [],
          Gv = [],
          pv = [],
          cv = [],
          Cv = [],
          Sv = [],
          iv = [],
          Wv = [],
          Rv = [],
          Ov = [],
          sv = [],
          rv = [],
          Iv = [],
          Uv = [];
        return QQ = class extends Uq {
          get baseWeight() {
            return (0, WQ.c)(this, FQ, "f")
          }
          set baseWeight(QQ) {
            (0, WQ.f)(this, FQ, QQ, "f")
          }
          get baseWeightTexture() {
            return (0, WQ.c)(this, LQ, "f")
          }
          set baseWeightTexture(QQ) {
            (0, WQ.f)(this, LQ, QQ, "f")
          }
          get baseColor() {
            return (0, WQ.c)(this, qQ, "f")
          }
          set baseColor(QQ) {
            (0, WQ.f)(this, qQ, QQ, "f")
          }
          get baseColorTexture() {
            return (0, WQ.c)(this, DQ, "f")
          }
          set baseColorTexture(QQ) {
            (0, WQ.f)(this, DQ, QQ, "f")
          }
          get baseDiffuseRoughness() {
            return (0, WQ.c)(this, kQ, "f")
          }
          set baseDiffuseRoughness(QQ) {
            (0, WQ.f)(this, kQ, QQ, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, WQ.c)(this, vQ, "f")
          }
          set baseDiffuseRoughnessTexture(QQ) {
            (0, WQ.f)(this, vQ, QQ, "f")
          }
          get baseMetalness() {
            return (0, WQ.c)(this, mQ, "f")
          }
          set baseMetalness(QQ) {
            (0, WQ.f)(this, mQ, QQ, "f")
          }
          get baseMetalnessTexture() {
            return (0, WQ.c)(this, uQ, "f")
          }
          set baseMetalnessTexture(QQ) {
            (0, WQ.f)(this, uQ, QQ, "f")
          }
          get specularWeight() {
            return (0, WQ.c)(this, HQ, "f")
          }
          set specularWeight(QQ) {
            (0, WQ.f)(this, HQ, QQ, "f")
          }
          get specularWeightTexture() {
            return (0, WQ.c)(this, bQ, "f")
          }
          set specularWeightTexture(QQ) {
            (0, WQ.f)(this, bQ, QQ, "f")
          }
          get specularColor() {
            return (0, WQ.c)(this, YQ, "f")
          }
          set specularColor(QQ) {
            (0, WQ.f)(this, YQ, QQ, "f")
          }
          get specularColorTexture() {
            return (0, WQ.c)(this, xQ, "f")
          }
          set specularColorTexture(QQ) {
            (0, WQ.f)(this, xQ, QQ, "f")
          }
          get specularRoughness() {
            return (0, WQ.c)(this, AQ, "f")
          }
          set specularRoughness(QQ) {
            (0, WQ.f)(this, AQ, QQ, "f")
          }
          get specularRoughnessTexture() {
            return (0, WQ.c)(this, tQ, "f")
          }
          set specularRoughnessTexture(QQ) {
            (0, WQ.f)(this, tQ, QQ, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, WQ.c)(this, eQ, "f")
          }
          set specularRoughnessAnisotropy(QQ) {
            (0, WQ.f)(this, eQ, QQ, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, WQ.c)(this, MQ, "f")
          }
          set specularRoughnessAnisotropyTexture(QQ) {
            (0, WQ.f)(this, MQ, QQ, "f")
          }
          get specularIor() {
            return (0, WQ.c)(this, GQ, "f")
          }
          set specularIor(QQ) {
            (0, WQ.f)(this, GQ, QQ, "f")
          }
          get transmissionWeight() {
            return (0, WQ.c)(this, pQ, "f")
          }
          set transmissionWeight(QQ) {
            (0, WQ.f)(this, pQ, QQ, "f")
          }
          get transmissionWeightTexture() {
            return (0, WQ.c)(this, cQ, "f")
          }
          set transmissionWeightTexture(QQ) {
            (0, WQ.f)(this, cQ, QQ, "f")
          }
          get transmissionColor() {
            return (0, WQ.c)(this, CQ, "f")
          }
          set transmissionColor(QQ) {
            (0, WQ.f)(this, CQ, QQ, "f")
          }
          get transmissionColorTexture() {
            return (0, WQ.c)(this, SQ, "f")
          }
          set transmissionColorTexture(QQ) {
            (0, WQ.f)(this, SQ, QQ, "f")
          }
          get transmissionDepth() {
            return (0, WQ.c)(this, iQ, "f")
          }
          set transmissionDepth(QQ) {
            (0, WQ.f)(this, iQ, QQ, "f")
          }
          get transmissionDepthTexture() {
            return (0, WQ.c)(this, IQ, "f")
          }
          set transmissionDepthTexture(QQ) {
            (0, WQ.f)(this, IQ, QQ, "f")
          }
          get transmissionScatter() {
            return (0, WQ.c)(this, UQ, "f")
          }
          set transmissionScatter(QQ) {
            (0, WQ.f)(this, UQ, QQ, "f")
          }
          get transmissionScatterTexture() {
            return (0, WQ.c)(this, NQ, "f")
          }
          set transmissionScatterTexture(QQ) {
            (0, WQ.f)(this, NQ, QQ, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, WQ.c)(this, TQ, "f")
          }
          set transmissionScatterAnisotropy(QQ) {
            (0, WQ.f)(this, TQ, QQ, "f")
          }
          get transmissionDispersionScale() {
            return (0, WQ.c)(this, lQ, "f")
          }
          set transmissionDispersionScale(QQ) {
            (0, WQ.f)(this, lQ, QQ, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, WQ.c)(this, XQ, "f")
          }
          set transmissionDispersionScaleTexture(QQ) {
            (0, WQ.f)(this, XQ, QQ, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, WQ.c)(this, fQ, "f")
          }
          set transmissionDispersionAbbeNumber(QQ) {
            (0, WQ.f)(this, fQ, QQ, "f")
          }
          get subsurfaceWeight() {
            return (0, WQ.c)(this, VQ, "f")
          }
          set subsurfaceWeight(QQ) {
            (0, WQ.f)(this, VQ, QQ, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, WQ.c)(this, hQ, "f")
          }
          set subsurfaceWeightTexture(QQ) {
            (0, WQ.f)(this, hQ, QQ, "f")
          }
          get subsurfaceColor() {
            return (0, WQ.c)(this, nQ, "f")
          }
          set subsurfaceColor(QQ) {
            (0, WQ.f)(this, nQ, QQ, "f")
          }
          get subsurfaceColorTexture() {
            return (0, WQ.c)(this, PQ, "f")
          }
          set subsurfaceColorTexture(QQ) {
            (0, WQ.f)(this, PQ, QQ, "f")
          }
          get subsurfaceRadius() {
            return (0, WQ.c)(this, dQ, "f")
          }
          set subsurfaceRadius(QQ) {
            (0, WQ.f)(this, dQ, QQ, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, WQ.c)(this, QF, "f")
          }
          set subsurfaceRadiusScale(QQ) {
            (0, WQ.f)(this, QF, QQ, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, WQ.c)(this, FF, "f")
          }
          set subsurfaceRadiusScaleTexture(QQ) {
            (0, WQ.f)(this, FF, QQ, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, WQ.c)(this, wF, "f")
          }
          set subsurfaceScatterAnisotropy(QQ) {
            (0, WQ.f)(this, wF, QQ, "f")
          }
          get coatWeight() {
            return (0, WQ.c)(this, LF, "f")
          }
          set coatWeight(QQ) {
            (0, WQ.f)(this, LF, QQ, "f")
          }
          get coatWeightTexture() {
            return (0, WQ.c)(this, qF, "f")
          }
          set coatWeightTexture(QQ) {
            (0, WQ.f)(this, qF, QQ, "f")
          }
          get coatColor() {
            return (0, WQ.c)(this, oF, "f")
          }
          set coatColor(QQ) {
            (0, WQ.f)(this, oF, QQ, "f")
          }
          get coatColorTexture() {
            return (0, WQ.c)(this, DF, "f")
          }
          set coatColorTexture(QQ) {
            (0, WQ.f)(this, DF, QQ, "f")
          }
          get coatRoughness() {
            return (0, WQ.c)(this, kF, "f")
          }
          set coatRoughness(QQ) {
            (0, WQ.f)(this, kF, QQ, "f")
          }
          get coatRoughnessTexture() {
            return (0, WQ.c)(this, vF, "f")
          }
          set coatRoughnessTexture(QQ) {
            (0, WQ.f)(this, vF, QQ, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, WQ.c)(this, mF, "f")
          }
          set coatRoughnessAnisotropy(QQ) {
            (0, WQ.f)(this, mF, QQ, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, WQ.c)(this, xF, "f")
          }
          set coatRoughnessAnisotropyTexture(QQ) {
            (0, WQ.f)(this, xF, QQ, "f")
          }
          get coatIor() {
            return (0, WQ.c)(this, AF, "f")
          }
          set coatIor(QQ) {
            (0, WQ.f)(this, AF, QQ, "f")
          }
          get coatDarkening() {
            return (0, WQ.c)(this, tF, "f")
          }
          set coatDarkening(QQ) {
            (0, WQ.f)(this, tF, QQ, "f")
          }
          get coatDarkeningTexture() {
            return (0, WQ.c)(this, eF, "f")
          }
          set coatDarkeningTexture(QQ) {
            (0, WQ.f)(this, eF, QQ, "f")
          }
          get fuzzWeight() {
            return (0, WQ.c)(this, MF, "f")
          }
          set fuzzWeight(QQ) {
            (0, WQ.f)(this, MF, QQ, "f")
          }
          get fuzzWeightTexture() {
            return (0, WQ.c)(this, GF, "f")
          }
          set fuzzWeightTexture(QQ) {
            (0, WQ.f)(this, GF, QQ, "f")
          }
          get fuzzColor() {
            return (0, WQ.c)(this, pF, "f")
          }
          set fuzzColor(QQ) {
            (0, WQ.f)(this, pF, QQ, "f")
          }
          get fuzzColorTexture() {
            return (0, WQ.c)(this, cF, "f")
          }
          set fuzzColorTexture(QQ) {
            (0, WQ.f)(this, cF, QQ, "f")
          }
          get fuzzRoughness() {
            return (0, WQ.c)(this, CF, "f")
          }
          set fuzzRoughness(QQ) {
            (0, WQ.f)(this, CF, QQ, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, WQ.c)(this, WF, "f")
          }
          set fuzzRoughnessTexture(QQ) {
            (0, WQ.f)(this, WF, QQ, "f")
          }
          get geometryThinWalled() {
            return (0, WQ.c)(this, RF, "f")
          }
          set geometryThinWalled(QQ) {
            (0, WQ.f)(this, RF, QQ, "f")
          }
          get geometryNormalTexture() {
            return (0, WQ.c)(this, OF, "f")
          }
          set geometryNormalTexture(QQ) {
            (0, WQ.f)(this, OF, QQ, "f")
          }
          get geometryTangent() {
            return (0, WQ.c)(this, sF, "f")
          }
          set geometryTangent(QQ) {
            (0, WQ.f)(this, sF, QQ, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(QQ) {
            this.geometryTangent = new jQ.n(Math.cos(QQ), Math.sin(QQ))
          }
          get geometryTangentTexture() {
            return (0, WQ.c)(this, rF, "f")
          }
          set geometryTangentTexture(QQ) {
            (0, WQ.f)(this, rF, QQ, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, WQ.c)(this, IF, "f")
          }
          set geometryCoatNormalTexture(QQ) {
            (0, WQ.f)(this, IF, QQ, "f")
          }
          get geometryCoatTangent() {
            return (0, WQ.c)(this, UF, "f")
          }
          set geometryCoatTangent(QQ) {
            (0, WQ.f)(this, UF, QQ, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(QQ) {
            this.geometryCoatTangent = new jQ.n(Math.cos(QQ), Math.sin(QQ))
          }
          get geometryCoatTangentTexture() {
            return (0, WQ.c)(this, NF, "f")
          }
          set geometryCoatTangentTexture(QQ) {
            (0, WQ.f)(this, NF, QQ, "f")
          }
          get geometryOpacity() {
            return (0, WQ.c)(this, TF, "f")
          }
          set geometryOpacity(QQ) {
            (0, WQ.f)(this, TF, QQ, "f")
          }
          get geometryOpacityTexture() {
            return (0, WQ.c)(this, KF, "f")
          }
          set geometryOpacityTexture(QQ) {
            (0, WQ.f)(this, KF, QQ, "f")
          }
          get geometryThickness() {
            return (0, WQ.c)(this, zF, "f")
          }
          set geometryThickness(QQ) {
            (0, WQ.f)(this, zF, QQ, "f")
          }
          get geometryThicknessTexture() {
            return (0, WQ.c)(this, lF, "f")
          }
          set geometryThicknessTexture(QQ) {
            (0, WQ.f)(this, lF, QQ, "f")
          }
          get emissionLuminance() {
            return (0, WQ.c)(this, jF, "f")
          }
          set emissionLuminance(QQ) {
            (0, WQ.f)(this, jF, QQ, "f")
          }
          get emissionColor() {
            return (0, WQ.c)(this, aF, "f")
          }
          set emissionColor(QQ) {
            (0, WQ.f)(this, aF, QQ, "f")
          }
          get emissionColorTexture() {
            return (0, WQ.c)(this, fF, "f")
          }
          set emissionColorTexture(QQ) {
            (0, WQ.f)(this, fF, QQ, "f")
          }
          get thinFilmWeight() {
            return (0, WQ.c)(this, hF, "f")
          }
          set thinFilmWeight(QQ) {
            (0, WQ.f)(this, hF, QQ, "f")
          }
          get thinFilmWeightTexture() {
            return (0, WQ.c)(this, gF, "f")
          }
          set thinFilmWeightTexture(QQ) {
            (0, WQ.f)(this, gF, QQ, "f")
          }
          get thinFilmThickness() {
            return (0, WQ.c)(this, PF, "f")
          }
          set thinFilmThickness(QQ) {
            (0, WQ.f)(this, PF, QQ, "f")
          }
          get thinFilmThicknessMin() {
            return (0, WQ.c)(this, BF, "f")
          }
          set thinFilmThicknessMin(QQ) {
            (0, WQ.f)(this, BF, QQ, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, WQ.c)(this, dF, "f")
          }
          set thinFilmThicknessTexture(QQ) {
            (0, WQ.f)(this, dF, QQ, "f")
          }
          get thinFilmIor() {
            return (0, WQ.c)(this, Qw, "f")
          }
          set thinFilmIor(QQ) {
            (0, WQ.f)(this, Qw, QQ, "f")
          }
          get ambientOcclusionTexture() {
            return (0, WQ.c)(this, Fw, "f")
          }
          set ambientOcclusionTexture(QQ) {
            (0, WQ.f)(this, Fw, QQ, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(QQ) {
            this._sssQuality !== QQ && (this._sssQuality = QQ, this.dFQ(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(QQ) {
            this._sssIrradianceTexture !== QQ && (this._sssIrradianceTexture = QQ, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(QQ) {
            this._sssDepthTexture !== QQ && (this._sssDepthTexture = QQ, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, WQ.c)(this, ww, "f")
          }
          set directIntensity(QQ) {
            (0, WQ.f)(this, ww, QQ, "f")
          }
          get environmentIntensity() {
            return (0, WQ.c)(this, Lw, "f")
          }
          set environmentIntensity(QQ) {
            (0, WQ.f)(this, Lw, QQ, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, WQ.c)(this, qw, "f")
          }
          set useSpecularWeightFromTextureAlpha(QQ) {
            (0, WQ.f)(this, qw, QQ, "f")
          }
          get forceAlphaTest() {
            return (0, WQ.c)(this, ow, "f")
          }
          set forceAlphaTest(QQ) {
            (0, WQ.f)(this, ow, QQ, "f")
          }
          get alphaCutOff() {
            return (0, WQ.c)(this, Dw, "f")
          }
          set alphaCutOff(QQ) {
            (0, WQ.f)(this, Dw, QQ, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, WQ.c)(this, kw, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(QQ) {
            (0, WQ.f)(this, kw, QQ, "f")
          }
          get useAmbientInGrayScale() {
            return (0, WQ.c)(this, vw, "f")
          }
          set useAmbientInGrayScale(QQ) {
            (0, WQ.f)(this, vw, QQ, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(EQ.b.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === oQ.d.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(QQ) {
            QQ !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = QQ ? oQ.d.LIGHTFALLOFF_PHYSICAL : oQ.d.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === oQ.d.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(QQ) {
            QQ !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = QQ ? oQ.d.LIGHTFALLOFF_GLTF : oQ.d.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, WQ.c)(this, mw, "f")
          }
          set useObjectSpaceNormalMap(QQ) {
            (0, WQ.f)(this, mw, QQ, "f")
          }
          get useParallax() {
            return (0, WQ.c)(this, uw, "f")
          }
          set useParallax(QQ) {
            (0, WQ.f)(this, uw, QQ, "f")
          }
          get useParallaxOcclusion() {
            return (0, WQ.c)(this, Hw, "f")
          }
          set useParallaxOcclusion(QQ) {
            (0, WQ.f)(this, Hw, QQ, "f")
          }
          get parallaxScaleBias() {
            return (0, WQ.c)(this, bw, "f")
          }
          set parallaxScaleBias(QQ) {
            (0, WQ.f)(this, bw, QQ, "f")
          }
          get disableLighting() {
            return (0, WQ.c)(this, Yw, "f")
          }
          set disableLighting(QQ) {
            (0, WQ.f)(this, Yw, QQ, "f")
          }
          get forceIrradianceInFragment() {
            return (0, WQ.c)(this, xw, "f")
          }
          set forceIrradianceInFragment(QQ) {
            (0, WQ.f)(this, xw, QQ, "f")
          }
          get maxSimultaneousLights() {
            return (0, WQ.c)(this, Aw, "f")
          }
          set maxSimultaneousLights(QQ) {
            (0, WQ.f)(this, Aw, QQ, "f")
          }
          get invertNormalMapX() {
            return (0, WQ.c)(this, tw, "f")
          }
          set invertNormalMapX(QQ) {
            (0, WQ.f)(this, tw, QQ, "f")
          }
          get invertNormalMapY() {
            return (0, WQ.c)(this, ew, "f")
          }
          set invertNormalMapY(QQ) {
            (0, WQ.f)(this, ew, QQ, "f")
          }
          get twoSidedLighting() {
            return (0, WQ.c)(this, Mw, "f")
          }
          set twoSidedLighting(QQ) {
            (0, WQ.f)(this, Mw, QQ, "f")
          }
          get useAlphaFresnel() {
            return (0, WQ.c)(this, Gw, "f")
          }
          set useAlphaFresnel(QQ) {
            (0, WQ.f)(this, Gw, QQ, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, WQ.c)(this, pw, "f")
          }
          set useLinearAlphaFresnel(QQ) {
            (0, WQ.f)(this, pw, QQ, "f")
          }
          get environmentBRDFTexture() {
            return (0, WQ.c)(this, Cw, "f")
          }
          set environmentBRDFTexture(QQ) {
            (0, WQ.f)(this, Cw, QQ, "f")
          }
          get forceNormalForward() {
            return (0, WQ.c)(this, Sw, "f")
          }
          set forceNormalForward(QQ) {
            (0, WQ.f)(this, Sw, QQ, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, WQ.c)(this, iw, "f")
          }
          set enableSpecularAntiAliasing(QQ) {
            (0, WQ.f)(this, iw, QQ, "f")
          }
          get useHorizonOcclusion() {
            return (0, WQ.c)(this, Ww, "f")
          }
          set useHorizonOcclusion(QQ) {
            (0, WQ.f)(this, Ww, QQ, "f")
          }
          get useRadianceOcclusion() {
            return (0, WQ.c)(this, Rw, "f")
          }
          set useRadianceOcclusion(QQ) {
            (0, WQ.f)(this, Rw, QQ, "f")
          }
          get unlit() {
            return (0, WQ.c)(this, Ow, "f")
          }
          set unlit(QQ) {
            (0, WQ.f)(this, Ow, QQ, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, WQ.c)(this, sw, "f")
          }
          set applyDecalMapAfterDetailMap(QQ) {
            (0, WQ.f)(this, sw, QQ, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(QQ) {
            this._backgroundRefractionTexture = QQ, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(QQ) {
            this._refractionHighQualityBlur !== QQ && (this._refractionHighQualityBlur = QQ, this.dFQ(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(QQ) {
            this._realTimeFiltering = QQ, this.dFQ(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(QQ) {
            this._realTimeFilteringQuality = QQ, this.dFQ(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(QQ) {
            this._fuzzSampleNumber = QQ, this.dFQ(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, WQ.c)(this, rw, "f")
          }
          set debugMode(QQ) {
            (0, WQ.f)(this, rw, QQ, "f")
          }
          constructor(wQ, RQ) {
            super(wQ, RQ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || QQ.ForceGLSL), FQ.set(this, ((0, WQ.l)(this, Nq), (0, WQ.l)(this, Tq, void 0))), this._baseWeight = ((0, WQ.l)(this, Kq), new EF("base_weight", 1, "vBaseWeight", 1)), LQ.set(this, (0, WQ.l)(this, zq, void 0)), this._baseWeightTexture = ((0, WQ.l)(this, lq), new nF("base_weight", "baseWeight", "BASE_WEIGHT")), qQ.set(this, (0, WQ.l)(this, jq, void 0)), this._baseColor = ((0, WQ.l)(this, aq), new EF("base_color", EQ.b.White(), "vBaseColor", 4)), DQ.set(this, (0, WQ.l)(this, Xq, void 0)), this._baseColorTexture = ((0, WQ.l)(this, fq), new nF("base_color", "baseColor", "BASE_COLOR")), kQ.set(this, (0, WQ.l)(this, Vq, void 0)), this._baseDiffuseRoughness = ((0, WQ.l)(this, hq), new EF("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), vQ.set(this, (0, WQ.l)(this, Jq, void 0)), this._baseDiffuseRoughnessTexture = ((0, WQ.l)(this, Eq), new nF("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), mQ.set(this, (0, WQ.l)(this, nq, void 0)), this._baseMetalness = ((0, WQ.l)(this, gq), new EF("base_metalness", 0, "vReflectanceInfo", 4, 0)), uQ.set(this, (0, WQ.l)(this, Pq, void 0)), this._baseMetalnessTexture = ((0, WQ.l)(this, Zq), new nF("base_metalness", "baseMetalness", "BASE_METALNESS")), HQ.set(this, (0, WQ.l)(this, yq, void 0)), this._specularWeight = ((0, WQ.l)(this, Bq), new EF("specular_weight", 1, "vReflectanceInfo", 4, 3)), bQ.set(this, (0, WQ.l)(this, dq, void 0)), this._specularWeightTexture = ((0, WQ.l)(this, Qo), new nF("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), YQ.set(this, (0, WQ.l)(this, Fo, void 0)), this._specularColor = ((0, WQ.l)(this, wo), new EF("specular_color", EQ.b.White(), "vSpecularColor", 4)), xQ.set(this, (0, WQ.l)(this, Lo, void 0)), this._specularColorTexture = ((0, WQ.l)(this, qo), new nF("specular_color", "specularColor", "SPECULAR_COLOR")), AQ.set(this, (0, WQ.l)(this, oo, void 0)), this._specularRoughness = ((0, WQ.l)(this, Do), new EF("specular_roughness", .3, "vReflectanceInfo", 4, 1)), tQ.set(this, (0, WQ.l)(this, ko, void 0)), this._specularRoughnessTexture = ((0, WQ.l)(this, vo), new nF("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), eQ.set(this, (0, WQ.l)(this, mo, void 0)), this._specularRoughnessAnisotropy = ((0, WQ.l)(this, uo), new EF("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), MQ.set(this, (0, WQ.l)(this, Ho, void 0)), this._specularRoughnessAnisotropyTexture = ((0, WQ.l)(this, bo), new nF("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), GQ.set(this, (0, WQ.l)(this, Yo, void 0)), this._specularIor = ((0, WQ.l)(this, xo), new EF("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), pQ.set(this, (0, WQ.l)(this, Ao, void 0)), this._transmissionWeight = ((0, WQ.l)(this, to), new EF("transmission_weight", 0, "vTransmissionWeight", 1)), cQ.set(this, (0, WQ.l)(this, eo, void 0)), this._transmissionWeightTexture = ((0, WQ.l)(this, Mo), new nF("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), CQ.set(this, (0, WQ.l)(this, Go, void 0)), this._transmissionColor = ((0, WQ.l)(this, po), new EF("transmission_color", EQ.b.White(), "vTransmissionColor", 3, 0)), SQ.set(this, (0, WQ.l)(this, co, void 0)), this._transmissionColorTexture = ((0, WQ.l)(this, Co), new nF("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), iQ.set(this, (0, WQ.l)(this, So, void 0)), this._transmissionDepth = ((0, WQ.l)(this, io), new EF("transmission_depth", 0, "vTransmissionDepth", 1, 0)), IQ.set(this, (0, WQ.l)(this, Wo, void 0)), this._transmissionDepthTexture = ((0, WQ.l)(this, Ro), new nF("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), UQ.set(this, (0, WQ.l)(this, Oo, void 0)), this._transmissionScatter = ((0, WQ.l)(this, so), new EF("transmission_scatter", EQ.b.Black(), "vTransmissionScatter", 3, 0)), NQ.set(this, (0, WQ.l)(this, ro, void 0)), this._transmissionScatterTexture = ((0, WQ.l)(this, Io), new nF("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), TQ.set(this, (0, WQ.l)(this, Uo, void 0)), this._transmissionScatterAnisotropy = ((0, WQ.l)(this, No), new EF("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), lQ.set(this, (0, WQ.l)(this, To, void 0)), this._transmissionDispersionScale = ((0, WQ.l)(this, Ko), new EF("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), XQ.set(this, (0, WQ.l)(this, zo, void 0)), this._transmissionDispersionScaleTexture = ((0, WQ.l)(this, jo), new nF("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), fQ.set(this, (0, WQ.l)(this, ao, void 0)), this._transmissionDispersionAbbeNumber = ((0, WQ.l)(this, Xo), new EF("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), VQ.set(this, (0, WQ.l)(this, fo, void 0)), this._subsurfaceWeight = ((0, WQ.l)(this, Vo), new EF("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), hQ.set(this, (0, WQ.l)(this, ho, void 0)), this._subsurfaceWeightTexture = ((0, WQ.l)(this, Jo), new nF("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), nQ.set(this, (0, WQ.l)(this, Eo, void 0)), this._subsurfaceColor = ((0, WQ.l)(this, no), new EF("subsurface_color", new EQ.b(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), PQ.set(this, (0, WQ.l)(this, go, void 0)), this._subsurfaceColorTexture = ((0, WQ.l)(this, Po), new nF("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), dQ.set(this, (0, WQ.l)(this, Zo, void 0)), this._subsurfaceRadius = ((0, WQ.l)(this, yo), new EF("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), QF.set(this, (0, WQ.l)(this, Bo, void 0)), this._subsurfaceRadiusScale = ((0, WQ.l)(this, QD), new EF("subsurface_radius_scale", new EQ.b(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), FF.set(this, (0, WQ.l)(this, FD, void 0)), this._subsurfaceRadiusScaleTexture = ((0, WQ.l)(this, wD), new nF("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), wF.set(this, (0, WQ.l)(this, LD, void 0)), this._subsurfaceScatterAnisotropy = ((0, WQ.l)(this, qD), new EF("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), LF.set(this, (0, WQ.l)(this, oD, void 0)), this._coatWeight = ((0, WQ.l)(this, DD), new EF("coat_weight", 0, "vCoatWeight", 1, 0)), qF.set(this, (0, WQ.l)(this, kD, void 0)), this._coatWeightTexture = ((0, WQ.l)(this, vD), new nF("coat_weight", "coatWeight", "COAT_WEIGHT")), oF.set(this, (0, WQ.l)(this, mD, void 0)), this._coatColor = ((0, WQ.l)(this, uD), new EF("coat_color", EQ.b.White(), "vCoatColor", 3, 0)), DF.set(this, (0, WQ.l)(this, HD, void 0)), this._coatColorTexture = ((0, WQ.l)(this, bD), new nF("coat_color", "coatColor", "COAT_COLOR")), kF.set(this, (0, WQ.l)(this, YD, void 0)), this._coatRoughness = ((0, WQ.l)(this, xD), new EF("coat_roughness", 0, "vCoatRoughness", 1, 0)), vF.set(this, (0, WQ.l)(this, AD, void 0)), this._coatRoughnessTexture = ((0, WQ.l)(this, tD), new nF("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), mF.set(this, (0, WQ.l)(this, eD, void 0)), this._coatRoughnessAnisotropy = ((0, WQ.l)(this, MD), new EF("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), xF.set(this, (0, WQ.l)(this, GD, void 0)), this._coatRoughnessAnisotropyTexture = ((0, WQ.l)(this, pD), new nF("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), AF.set(this, (0, WQ.l)(this, cD, void 0)), this._coatIor = ((0, WQ.l)(this, CD), new EF("coat_ior", 1.5, "vCoatIor", 1, 0)), tF.set(this, (0, WQ.l)(this, SD, void 0)), this._coatDarkening = ((0, WQ.l)(this, iD), new EF("coat_darkening", 1, "vCoatDarkening", 1, 0)), eF.set(this, (0, WQ.l)(this, WD, void 0)), this._coatDarkeningTexture = ((0, WQ.l)(this, RD), new nF("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, MF.set(this, (0, WQ.l)(this, OD, void 0)), this._fuzzWeight = ((0, WQ.l)(this, sD), new EF("fuzz_weight", 0, "vFuzzWeight", 1, 0)), GF.set(this, (0, WQ.l)(this, rD, void 0)), this._fuzzWeightTexture = ((0, WQ.l)(this, ID), new nF("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), pF.set(this, (0, WQ.l)(this, UD, void 0)), this._fuzzColor = ((0, WQ.l)(this, ND), new EF("fuzz_color", EQ.b.White(), "vFuzzColor", 3, 0)), cF.set(this, (0, WQ.l)(this, TD, void 0)), this._fuzzColorTexture = ((0, WQ.l)(this, KD), new nF("fuzz_color", "fuzzColor", "FUZZ_COLOR")), CF.set(this, (0, WQ.l)(this, zD, void 0)), this._fuzzRoughness = ((0, WQ.l)(this, lD), new EF("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), WF.set(this, (0, WQ.l)(this, jD, void 0)), this._fuzzRoughnessTexture = ((0, WQ.l)(this, aD), new nF("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), RF.set(this, (0, WQ.l)(this, XD, void 0)), this._geometryThinWalled = ((0, WQ.l)(this, fD), new EF("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), OF.set(this, (0, WQ.l)(this, VD, void 0)), this._geometryNormalTexture = ((0, WQ.l)(this, hD), new nF("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), sF.set(this, (0, WQ.l)(this, JD, void 0)), this._geometryTangent = ((0, WQ.l)(this, ED), new EF("geometry_tangent", new jQ.n(1, 0), "vSpecularAnisotropy", 3, 0)), rF.set(this, (0, WQ.l)(this, nD, void 0)), this._geometryTangentTexture = ((0, WQ.l)(this, gD), new nF("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), IF.set(this, (0, WQ.l)(this, PD, void 0)), this._geometryCoatNormalTexture = ((0, WQ.l)(this, ZD), new nF("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), UF.set(this, (0, WQ.l)(this, yD, void 0)), this._geometryCoatTangent = ((0, WQ.l)(this, BD), new EF("geometry_coat_tangent", new jQ.n(1, 0), "vGeometryCoatTangent", 2, 0)), NF.set(this, (0, WQ.l)(this, dD, void 0)), this._geometryCoatTangentTexture = ((0, WQ.l)(this, Qk), new nF("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), TF.set(this, (0, WQ.l)(this, Fk, void 0)), this._geometryOpacity = ((0, WQ.l)(this, wk), new EF("geometry_opacity", 1, "vBaseColor", 4, 3)), KF.set(this, (0, WQ.l)(this, Lk, void 0)), this._geometryOpacityTexture = ((0, WQ.l)(this, qk), new nF("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), zF.set(this, (0, WQ.l)(this, Dk, void 0)), this._geometryThickness = ((0, WQ.l)(this, kk), new EF("geometry_thickness", 0, "vGeometryThickness", 1, 0)), lF.set(this, (0, WQ.l)(this, vk, void 0)), this._geometryThicknessTexture = ((0, WQ.l)(this, mk), new nF("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), jF.set(this, (0, WQ.l)(this, uk, void 0)), this._emissionLuminance = ((0, WQ.l)(this, Hk), new EF("emission_luminance", 1, "vLightingIntensity", 4, 1)), aF.set(this, (0, WQ.l)(this, bk, void 0)), this._emissionColor = ((0, WQ.l)(this, Yk), new EF("emission_color", EQ.b.Black(), "vEmissionColor", 3)), fF.set(this, (0, WQ.l)(this, xk, void 0)), this._emissionColorTexture = ((0, WQ.l)(this, Ak), new nF("emission_color", "emissionColor", "EMISSION_COLOR")), hF.set(this, (0, WQ.l)(this, tk, void 0)), this._thinFilmWeight = ((0, WQ.l)(this, ek), new EF("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), gF.set(this, (0, WQ.l)(this, Mk, void 0)), this._thinFilmWeightTexture = ((0, WQ.l)(this, Gk), new nF("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), PF.set(this, (0, WQ.l)(this, pk, void 0)), this._thinFilmThickness = ((0, WQ.l)(this, ck), new EF("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), BF.set(this, (0, WQ.l)(this, Ck, void 0)), this._thinFilmThicknessMin = ((0, WQ.l)(this, Sk), new EF("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), dF.set(this, (0, WQ.l)(this, ik, void 0)), this._thinFilmThicknessTexture = ((0, WQ.l)(this, Wk), new nF("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Qw.set(this, (0, WQ.l)(this, Rk, void 0)), this._thinFilmIor = ((0, WQ.l)(this, Ok), new EF("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), Fw.set(this, (0, WQ.l)(this, sk, void 0)), this._ambientOcclusionTexture = ((0, WQ.l)(this, rk), new nF("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = QQ.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, ww.set(this, (0, WQ.l)(this, Ik, 1)), Lw.set(this, ((0, WQ.l)(this, Uk), (0, WQ.l)(this, Nk, 1))), qw.set(this, ((0, WQ.l)(this, Tk), (0, WQ.l)(this, Kk, !1))), ow.set(this, ((0, WQ.l)(this, zk), (0, WQ.l)(this, lk, !1))), Dw.set(this, ((0, WQ.l)(this, jk), (0, WQ.l)(this, ak, .4))), kw.set(this, ((0, WQ.l)(this, Xk), (0, WQ.l)(this, fk, !1))), vw.set(this, ((0, WQ.l)(this, Vk), (0, WQ.l)(this, hk, !1))), mw.set(this, ((0, WQ.l)(this, Jk), (0, WQ.l)(this, Ek, !1))), uw.set(this, ((0, WQ.l)(this, nk), (0, WQ.l)(this, gk, !1))), Hw.set(this, ((0, WQ.l)(this, Pk), (0, WQ.l)(this, Zk, !1))), bw.set(this, ((0, WQ.l)(this, yk), (0, WQ.l)(this, Bk, .05))), Yw.set(this, ((0, WQ.l)(this, dk), (0, WQ.l)(this, Qv, !1))), xw.set(this, ((0, WQ.l)(this, Fv), (0, WQ.l)(this, wv, !1))), Aw.set(this, ((0, WQ.l)(this, Lv), (0, WQ.l)(this, qv, 4))), tw.set(this, ((0, WQ.l)(this, ov), (0, WQ.l)(this, Dv, !1))), ew.set(this, ((0, WQ.l)(this, kv), (0, WQ.l)(this, vv, !1))), Mw.set(this, ((0, WQ.l)(this, mv), (0, WQ.l)(this, uv, !1))), Gw.set(this, ((0, WQ.l)(this, Hv), (0, WQ.l)(this, bv, !1))), pw.set(this, ((0, WQ.l)(this, Yv), (0, WQ.l)(this, xv, !1))), Cw.set(this, ((0, WQ.l)(this, Av), (0, WQ.l)(this, tv, null))), Sw.set(this, ((0, WQ.l)(this, ev), (0, WQ.l)(this, Mv, !1))), iw.set(this, ((0, WQ.l)(this, Gv), (0, WQ.l)(this, pv, !1))), Ww.set(this, ((0, WQ.l)(this, cv), (0, WQ.l)(this, Cv, !0))), Rw.set(this, ((0, WQ.l)(this, Sv), (0, WQ.l)(this, iv, !0))), Ow.set(this, ((0, WQ.l)(this, Wv), (0, WQ.l)(this, Rv, !1))), sw.set(this, ((0, WQ.l)(this, Ov), (0, WQ.l)(this, sv, !1))), this._lightingInfos = ((0, WQ.l)(this, rv), new jQ.t(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = oQ.d.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new sQ.d(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, rw.set(this, (0, WQ.l)(this, Iv, 0)), this.debugLimit = ((0, WQ.l)(this, Uv), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = oQ.d.MATERIAL_OPAQUE, this.iN() && !this.iN()?.Wx().isWebGPU && this.iN().Wx().oA < 2 && OQ.c.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), QQ._noiseTextures[this.iN().uniqueId] || (QQ._noiseTextures[this.iN().uniqueId] = new rQ.e(iF.g.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.iN(), !1, !0, 1), this.iN().zN.addOnce((() => {
              QQ._noiseTextures[this.iN().uniqueId]?.dispose(), delete QQ._noiseTextures[this.iN().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), ZQ.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), ZQ.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = zQ(this.iN()), this._environmentFuzzBRDFTexture = KQ(this.iN()), this.prePassConfiguration = new JQ.d, this._propertyList = {};
            for (const QQ of Object.getOwnPropertyNames(this)) {
              const FQ = this[QQ];
              FQ instanceof EF && (this._propertyList[QQ] = FQ)
            }
            Object.keys(this._propertyList).forEach((QQ => {
              const FQ = this._propertyList[QQ];
              let wQ = this._uniformsList[FQ.targetUniformName];
              wQ ? wQ.numComponents !== FQ.targetUniformComponentNum ? OQ.c.Error(`Uniform ${FQ.targetUniformName} already exists of size ${wQ.numComponents}, but trying to set it to ${FQ.targetUniformComponentNum}.`) : wQ.requiredDefine !== FQ.requiredDefine && (wQ.requiredDefine = void 0) : (wQ = new JF(FQ.targetUniformName, FQ.targetUniformComponentNum), wQ.requiredDefine = FQ.requiredDefine, this._uniformsList[FQ.targetUniformName] = wQ), "" === wQ.firstLinkedKey && (wQ.firstLinkedKey = FQ.name), wQ.linkedProperties[FQ.name] = FQ
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const QQ of Object.getOwnPropertyNames(this)) {
              const FQ = this[QQ];
              FQ instanceof nF && (this._samplersList[QQ] = FQ)
            }
            for (const QQ in this._samplersList) {
              const FQ = this._samplersList[QQ].textureDefine;
              this._samplerDefines[FQ] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[FQ + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[FQ + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(ZQ.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(ZQ.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          getClassName() {
            return "OpenPBRMaterial"
          }
          get transparencyMode() {
            return this._transparencyMode
          }
          set transparencyMode(QQ) {
            this._transparencyMode !== QQ && (this._transparencyMode = QQ, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== oQ.d.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(QQ) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(QQ)
          }
          clone(FQ) {
            let wQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const qQ = SF.c.Clone((() => new QQ(FQ, this.iN())), this, {
              cloneTexturesOnlyOnce: wQ
            });
            return qQ.id = FQ, qQ.name = FQ, this.stencil.copyTo(qQ.stencil), this._clonePlugins(qQ, LQ), qQ
          }
          serialize() {
            const QQ = super.serialize();
            return QQ.customType = "BABYLON.OpenPBRMaterial", QQ
          }
          static Parse(FQ, wQ, LQ) {
            const qQ = SF.c.Parse((() => new QQ(FQ.name, wQ)), FQ, wQ, LQ);
            return FQ.stencil && qQ.stencil.parse(FQ.stencil, wQ, LQ), oQ.d._ParsePlugins(FQ, qQ, wQ, LQ), qQ
          }
          forceCompilation(QQ, FQ, wQ) {
            const LQ = {
              clipPlane: !1,
              useInstances: !1,
              ...wQ
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const wQ = new ZF({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                qQ = this._prepareEffect(QQ, QQ, wQ, void 0, void 0, LQ.useInstances, LQ.clipPlane);
              this._onEffectCreatedObservable && (VF.effect = qQ, VF.subMesh = null, this._onEffectCreatedObservable.notifyObservers(VF)), qQ.isReady() ? FQ && FQ(this) : qQ.onCompileObservable.add((() => {
                FQ && FQ(this)
              }))
            })()
          }
          isReadyForSubMesh(FQ, wQ, LQ) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const qQ = wQ._drawWrapper;
            if (qQ.effect && this.isFrozen && qQ._wasPreviouslyReady && qQ._wasPreviouslyUsingInstances === LQ) return !0;
            wQ.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), wQ.materialDefines = new ZF({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const oQ = wQ.materialDefines;
            if (this._isReadyForSubMesh(wQ)) return !0;
            const DQ = this.iN(),
              kQ = DQ.Wx();
            if (oQ._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, DQ.texturesEnabled)) {
              for (const QQ in this._samplersList) {
                const FQ = this._samplersList[QQ];
                if (FQ.value && !FQ.value.isReadyOrNotBlocking()) return !1
              }
              const FQ = this._getRadianceTexture();
              if (FQ && ZQ.e.ReflectionTextureEnabled) {
                if (!FQ.isReadyOrNotBlocking()) return !1;
                if (FQ.irradianceTexture) {
                  if (!FQ.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!FQ.sphericalPolynomial && FQ.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && ZQ.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && ZQ.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && ZQ.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (QQ._noiseTextures[DQ.uniqueId] && !QQ._noiseTextures[DQ.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = oQ, this._eventInfo.subMesh = wQ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (oQ._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (oQ.AREALIGHTUSED)
              for (let QQ = 0; QQ < FQ.lightSources.length; QQ++)
                if (!FQ.lightSources[QQ]._isReady()) return !1;
            if (kQ.getCaps().standardDerivatives || FQ.isVerticesDataPresent(aQ.h.NormalKind) || (FQ.createNormals(!0), OQ.c.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + FQ.name)), !(0, BQ.c)(DQ, FQ, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const vQ = wQ.effect,
              mQ = oQ._areLightsDisposed,
              uQ = this._prepareEffect(FQ, wQ.getRenderingMesh(), oQ, this.onCompiled, this.onError, LQ, null);
            let HQ = !1;
            if (uQ)
              if (this._onEffectCreatedObservable && (VF.effect = uQ, VF.subMesh = wQ, this._onEffectCreatedObservable.notifyObservers(VF)), this.allowShaderHotSwapping && vQ && !uQ.isReady()) {
                if (oQ.markAsUnprocessed(), HQ = this.isFrozen, mQ) return oQ._areLightsDisposed = !0, !1
              } else DQ.resetCachedMaterial(), wQ.setEffect(uQ, oQ, this._materialContext);
            return !(!wQ.effect || !wQ.effect.isReady()) && (oQ._renderId = DQ.getRenderId(), qQ._wasPreviouslyReady = !HQ, qQ._wasPreviouslyUsingInstances = !!LQ, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const QQ = this._uniformBuffer;
            QQ.addUniform("vTangentSpaceParams", 2), QQ.addUniform("vLightingIntensity", 4), QQ.addUniform("pointSize", 1), QQ.addUniform("vDebugMode", 2), QQ.addUniform("renderTargetSize", 2), QQ.addUniform("cameraInfo", 4), QQ.addUniform("vTextureRepetitionHexTilingParams", 4), QQ.addUniform("backgroundRefractionMatrix", 16), QQ.addUniform("vBackgroundRefractionInfos", 3), (0, BQ.jb)(QQ, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((FQ => {
              QQ.addUniform(FQ.name, FQ.numComponents)
            })), Object.values(this._samplersList).forEach((FQ => {
              QQ.addUniform(FQ.samplerInfoName, 2), QQ.addUniform(FQ.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(QQ, FQ, wQ, LQ) {
            if (0 === this.geometryThickness) QQ.updateFloat("vGeometryThickness", 0);
            else {
              LQ.getRenderingMesh().getWorldMatrix().decompose(jQ.k.Ox[0]);
              const FQ = Math.max(Math.abs(jQ.k.Ox[0].x), Math.abs(jQ.k.Ox[0].y), Math.abs(jQ.k.Ox[0].z));
              QQ.updateFloat("vGeometryThickness", this.geometryThickness * FQ)
            }
          }
          bindForSubMesh(FQ, wQ, LQ) {
            const qQ = this.iN(),
              oQ = LQ.materialDefines;
            if (!oQ) return;
            const DQ = LQ.effect;
            if (!DQ) return;
            this._activeEffect = DQ, wQ.getMeshUniformBuffer().bindToEffect(DQ, "Mesh"), wQ.transferToEffect(FQ);
            const kQ = qQ.Wx();
            this._uniformBuffer.bindToEffect(DQ, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, qQ, wQ, FQ, this.isFrozen), YF.b.Bind(kQ.currentRenderPassId, this._activeEffect, wQ, FQ, this);
            const vQ = qQ.activeCamera;
            vQ ? this._uniformBuffer.updateFloat4("cameraInfo", vQ.minZ, vQ.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const mQ = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", mQ[0], mQ[1], mQ[2], mQ[3]), this._eventInfo.subMesh = LQ, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), oQ.OBJECTSPACE_NORMALMAP && (FQ.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const uQ = this._mustRebind(qQ, DQ, LQ, wQ.visibility),
              HQ = kQ._features.needToAlwaysBindUniformBuffers;
            (0, BQ.d)(wQ, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, HF.e)(this._activeEffect, this._vertexPullingMetadata);
            const bQ = this._uniformBuffer;
            if (uQ) {
              this.bindViewProjection(DQ);
              const FQ = this._getRadianceTexture();
              if (!bQ.useUbo || !this.isFrozen || !bQ.isSync || LQ._drawWrapper._forceRebindOnNextCall) {
                if (qQ.texturesEnabled) {
                  for (const QQ in this._samplersList) {
                    const FQ = this._samplersList[QQ];
                    FQ.value && (bQ.updateFloat2(FQ.samplerInfoName, FQ.value.coordinatesIndex, FQ.value.level), (0, BQ.y)(FQ.value, bQ, FQ.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (qQ._mirroredCameraPosition ? bQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : bQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, BQ.h)(qQ, oQ, bQ, EQ.b.White(), FQ, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && bQ.updateFloat("pointSize", this.pointSize);
                const QQ = this._uniformsArray;
                for (let FQ = 0, wQ = QQ.length; FQ < wQ; FQ++) {
                  const wQ = QQ[FQ];
                  (void 0 === wQ.requiredDefine || oQ[wQ.requiredDefine]) && (4 === wQ.numComponents ? (wQ.populateVectorFromLinkedProperties(jQ.k.Vector4[0]), bQ.updateVector4(wQ.name, jQ.k.Vector4[0])) : 3 === wQ.numComponents ? (wQ.populateVectorFromLinkedProperties(jQ.k.Ox[0]), bQ.updateVector3(wQ.name, jQ.k.Ox[0])) : 2 === wQ.numComponents ? (wQ.populateVectorFromLinkedProperties(jQ.k.Vector2[0]), bQ.updateFloat2(wQ.name, jQ.k.Vector2[0].x, jQ.k.Vector2[0].y)) : 1 === wQ.numComponents && bQ.updateFloat(wQ.name, wQ.linkedProperties[wQ.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * qQ.environmentIntensity, this._lightingInfos.w = 1, bQ.updateVector4("vLightingIntensity", this._lightingInfos), bQ.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (qQ.texturesEnabled) {
                for (const QQ in this._samplersList) {
                  const FQ = this._samplersList[QQ];
                  FQ.value && bQ.setTexture(FQ.samplerName, FQ.value)
                }
                if ((0, BQ.j)(qQ, oQ, bQ, FQ, this.realTimeFiltering), oQ.ENVIRONMENTBRDF && bQ.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), oQ.FUZZENVIRONMENTBRDF && bQ.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), oQ.REFRACTED_BACKGROUND && (bQ.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), bQ.Y5("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), jQ.k.Ox[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), bQ.updateVector3("vBackgroundRefractionInfos", jQ.k.Ox[1])), (oQ.ANISOTROPIC || oQ.FUZZ || oQ.REFRACTED_BACKGROUND || oQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && bQ.setTexture("blueNoiseSampler", QQ._noiseTextures[this.iN().uniqueId]), oQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const QQ = this.sssIrradianceTexture.getSize().width,
                    FQ = this.sssIrradianceTexture.getSize().height;
                  bQ.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), bQ.setTexture("sceneDepthSampler", this.sssDepthTexture), bQ.updateFloat2("renderTargetSize", QQ, FQ)
                }
              }
              this.iN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(wQ) && this.iN().depthPeelingRenderer.bind(DQ), this._eventInfo.subMesh = LQ, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, uF.h)(this._activeEffect, this, qQ), this.bindEyePosition(DQ)
            } else HQ && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, qQ, qQ.Wx(), LQ), !uQ && this.isFrozen && !HQ || !qQ.lightsEnabled || this._disableLighting || (0, BQ.n)(qQ, wQ, this._activeEffect, oQ, this._maxSimultaneousLights), !uQ && this.isFrozen || (this.bindView(DQ), (0, BQ.g)(qQ, wQ, this._activeEffect, !0), oQ.NUM_MORPH_INFLUENCERS && (0, BQ.s)(wQ, this._activeEffect), oQ.BAKED_VERTEX_ANIMATION_TEXTURE && wQ.bakedVertexAnimationManager?.bind(DQ, oQ.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, BQ.r)(oQ, this._activeEffect, qQ)), this._afterBind(wQ, this._activeEffect, LQ), bQ.update()
          }
          getAnimatables() {
            const QQ = super.getAnimatables();
            for (const FQ in this._samplersList) {
              const wQ = this._samplersList[FQ];
              wQ.value && wQ.value.animations && wQ.value.animations.length > 0 && QQ.push(wQ.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && QQ.push(this._radianceTexture), QQ
          }
          getActiveTextures() {
            const QQ = super.getActiveTextures();
            for (const FQ in this._samplersList) {
              const wQ = this._samplersList[FQ];
              wQ.value && QQ.push(wQ.value)
            }
            return this._radianceTexture && QQ.push(this._radianceTexture), QQ
          }
          hasTexture(QQ) {
            if (super.hasTexture(QQ)) return !0;
            for (const FQ in this._samplersList) {
              if (this._samplersList[FQ].value === QQ) return !0
            }
            return this._radianceTexture === QQ
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(QQ, FQ) {
            if (this._breakShaderLoadedCheck = !0, FQ) {
              this._environmentBRDFTexture && this.iN().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.iN().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const QQ in this._samplersList) {
                const FQ = this._samplersList[QQ];
                FQ.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(QQ, FQ)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.iN().environmentTexture
          }
          _prepareEffect(FQ, wQ, LQ) {
            let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              DQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              kQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(FQ, wQ, LQ, DQ, kQ), !LQ.isDirty) return null;
            LQ.markAsProcessed();
            const vQ = this.iN().Wx(),
              mQ = new yQ.d;
            let uQ = 0;
            LQ.USESPHERICALINVERTEX && mQ.addFallback(uQ++, "USESPHERICALINVERTEX"), LQ.FOG && mQ.addFallback(uQ, "FOG"), LQ.SPECULARAA && mQ.addFallback(uQ, "SPECULARAA"), LQ.POINTSIZE && mQ.addFallback(uQ, "POINTSIZE"), LQ.LOGARITHMICDEPTH && mQ.addFallback(uQ, "LOGARITHMICDEPTH"), LQ.PARALLAX && mQ.addFallback(uQ, "PARALLAX"), LQ.PARALLAX_RHS && mQ.addFallback(uQ, "PARALLAX_RHS"), LQ.PARALLAXOCCLUSION && mQ.addFallback(uQ++, "PARALLAXOCCLUSION"), LQ.ENVIRONMENTBRDF && mQ.addFallback(uQ++, "ENVIRONMENTBRDF"), LQ.TANGENT && mQ.addFallback(uQ++, "TANGENT"), uQ = (0, BQ.C)(LQ, mQ, this._maxSimultaneousLights, uQ), LQ.SPECULARTERM && mQ.addFallback(uQ++, "SPECULARTERM"), LQ.USESPHERICALFROMREFLECTIONMAP && mQ.addFallback(uQ++, "USESPHERICALFROMREFLECTIONMAP"), LQ.USEIRRADIANCEMAP && mQ.addFallback(uQ++, "USEIRRADIANCEMAP"), LQ.NORMAL && mQ.addFallback(uQ++, "NORMAL"), LQ.VERTEXCOLOR && mQ.addFallback(uQ++, "VERTEXCOLOR"), LQ.MORPHTARGETS && mQ.addFallback(uQ++, "MORPHTARGETS"), LQ.MULTIVIEW && mQ.addFallback(0, "MULTIVIEW");
            const HQ = [aQ.h.PositionKind];
            LQ.NORMAL && HQ.push(aQ.h.NormalKind), LQ.TANGENT && HQ.push(aQ.h.TangentKind);
            for (let QQ = 1; QQ <= 6; ++QQ) LQ["UV" + QQ] && HQ.push(`uv${1===QQ?"":QQ}`);
            LQ.VERTEXCOLOR && HQ.push(aQ.h.ColorKind), (0, BQ.F)(HQ, FQ, LQ, mQ), (0, BQ.I)(HQ, LQ), (0, BQ.J)(HQ, FQ, LQ), (0, BQ.E)(HQ, FQ, LQ);
            let bQ = "openpbr";
            const YQ = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const QQ in this._uniformsList) YQ.push(QQ);
            const xQ = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            LQ.FUZZENVIRONMENTBRDF && xQ.push("environmentFuzzBrdfSampler"), LQ.REFRACTED_BACKGROUND && xQ.push("backgroundRefractionSampler"), (LQ.ANISOTROPIC || LQ.FUZZ || LQ.REFRACTED_BACKGROUND || LQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && xQ.push("blueNoiseSampler"), LQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (xQ.push("sceneIrradianceSampler"), xQ.push("sceneDepthSampler"));
            for (const QQ in this._samplersList) {
              const FQ = this._samplersList[QQ];
              xQ.push(FQ.samplerName), YQ.push(FQ.samplerInfoName), YQ.push(FQ.samplerMatrixName)
            }(0, BQ.lb)(YQ, xQ, !0);
            const AQ = ["Material", "Scene", "Mesh"],
              tQ = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: LQ.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = mQ, this._eventInfo.fallbackRank = uQ, this._eventInfo.defines = LQ, this._eventInfo.uniforms = YQ, this._eventInfo.attributes = HQ, this._eventInfo.samplers = xQ, this._eventInfo.uniformBuffersNames = AQ, this._eventInfo.customCode = void 0, this._eventInfo.mesh = FQ, this._eventInfo.indexParameters = tQ, this._callbackPluginEventGeneric(128, this._eventInfo), YF.b.AddUniformsAndSamplers(YQ, xQ), JQ.d.AddUniforms(YQ), JQ.d.AddSamplers(xQ), (0, uF.d)(YQ), this._useVertexPulling) {
              const QQ = wQ?.geometry;
              QQ && (this._vertexPullingMetadata = (0, HF.i)(QQ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((QQ, FQ) => {
                YQ.push(`vp_${FQ}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            gQ.e && (gQ.e.PrepareUniforms(YQ, LQ), gQ.e.PrepareSamplers(xQ, LQ)), (0, BQ.pb)({
              uniformsNames: YQ,
              uniformBuffersNames: AQ,
              samplers: xQ,
              defines: LQ,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const eQ = {};
            this.customShaderNameResolve && (bQ = this.customShaderNameResolve(bQ, YQ, AQ, xQ, LQ, HQ, eQ));
            const MQ = LQ.toString(),
              GQ = vQ.createEffect(bQ, {
                attributes: HQ,
                uniformsNames: YQ,
                uniformBuffersNames: AQ,
                samplers: xQ,
                defines: MQ,
                fallbacks: mQ,
                onCompiled: qQ,
                onError: oQ,
                indexParameters: tQ,
                processFinalCode: eQ.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: LQ.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: QQ._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, vQ);
            return this._eventInfo.customCode = void 0, GQ
          }
          _prepareDefines(FQ, wQ, LQ) {
            let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              DQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const kQ = wQ.hasThinInstances,
              vQ = this.iN(),
              mQ = vQ.Wx();
            (0, BQ.U)(vQ, FQ, LQ, !0, this._maxSimultaneousLights, this._disableLighting), LQ._needNormals = !0, (0, BQ.ab)(vQ, LQ);
            const uQ = this.needAlphaBlendingForMesh(FQ) && this.iN().useOrderIndependentTransparency;
            if ((0, BQ.fb)(vQ, LQ, this.canRenderToMRT && !uQ), (0, BQ.bb)(vQ, LQ, uQ), YF.b.PrepareDefines(mQ.currentRenderPassId, FQ, LQ), LQ._areTexturesDirty) {
              LQ._needUVs = !1;
              for (let QQ = 1; QQ <= 6; ++QQ) LQ["MAINUV" + QQ] = !1;
              if (vQ.texturesEnabled) {
                for (const wQ in this._samplersList) {
                  const QQ = this._samplersList[wQ];
                  QQ.value ? ((0, BQ.X)(QQ.value, LQ, QQ.textureDefine), LQ[QQ.textureDefine + "_GAMMA"] = QQ.value.gammaSpace) : LQ[QQ.textureDefine] = !1
                }
                const QQ = this._getRadianceTexture(),
                  FQ = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || mQ.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, BQ.T)(vQ, QQ, LQ, this.realTimeFiltering, this.realTimeFilteringQuality, !FQ), this._baseMetalnessTexture && (LQ.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), LQ.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, LQ.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, LQ.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, LQ.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, LQ.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, LQ.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, LQ.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, LQ.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, LQ.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, LQ.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, LQ.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && ZQ.e.DiffuseTextureEnabled ? (LQ.PARALLAX = !0, LQ.PARALLAX_RHS = vQ.useRightHandedSystem, LQ.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : LQ.PARALLAX = !1, LQ.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (LQ.PARALLAX = !1, LQ.PARALLAX_RHS = !1, LQ.PARALLAXOCCLUSION = !1, LQ.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && ZQ.e.ReflectionTextureEnabled ? (LQ.ENVIRONMENTBRDF = !0, LQ.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (LQ.ENVIRONMENTBRDF = !1, LQ.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? LQ.FUZZENVIRONMENTBRDF = !0 : LQ.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  LQ.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && ZQ.e.RefractionTextureEnabled, LQ.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, LQ.REFRACTED_LIGHTS = !0;
                  const QQ = this._getRadianceTexture();
                  QQ ? (LQ.REFRACTED_ENVIRONMENT = ZQ.e.RefractionTextureEnabled, LQ.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.iN().useRightHandedSystem ? !QQ.invertZ : QQ.invertZ, LQ.REFRACTED_ENVIRONMENT_LOCAL_CUBE = QQ.isCube && QQ.boundingBoxSize) : LQ.REFRACTED_ENVIRONMENT = !1
                } else LQ.REFRACTED_BACKGROUND = !1, LQ.REFRACTED_LIGHTS = !1, LQ.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? LQ.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : LQ.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === oQ.d.LIGHTFALLOFF_STANDARD ? (LQ.USEPHYSICALLIGHTFALLOFF = !1, LQ.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === oQ.d.LIGHTFALLOFF_GLTF ? (LQ.USEPHYSICALLIGHTFALLOFF = !1, LQ.USEGLTFLIGHTFALLOFF = !0) : (LQ.USEPHYSICALLIGHTFALLOFF = !0, LQ.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? LQ.TWOSIDEDLIGHTING = !0 : LQ.TWOSIDEDLIGHTING = !1, LQ.MIRRORED = !!vQ._mirroredCameraPosition, LQ.SPECULARAA = mQ.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(LQ._areTexturesDirty || LQ._areMiscDirty) && (LQ.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, LQ.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, LQ.ALPHABLEND = this.needAlphaBlendingForMesh(FQ)), LQ._areTexturesDirty && (LQ.TEXTURE_REPETITION_MODE = mQ.version > 1 || mQ.isWebGPU ? this.textureRepetitionMode : 0), LQ._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(LQ), LQ.FORCENORMALFORWARD = this._forceNormalForward, LQ.RADIANCEOCCLUSION = this._useRadianceOcclusion, LQ.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && QQ._noiseTextures[vQ.uniqueId] && ZQ.e.ReflectionTextureEnabled ? (LQ.ANISOTROPIC = !0, FQ.isVerticesDataPresent(aQ.h.TangentKind) || (LQ._needUVs = !0, LQ.MAINUV1 = !0), this._useGltfStyleAnisotropy && (LQ.USE_GLTF_STYLE_ANISOTROPY = !0), LQ.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, LQ.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (LQ.ANISOTROPIC = !1, LQ.USE_GLTF_STYLE_ANISOTROPY = !1, LQ.ANISOTROPIC_BASE = !1, LQ.ANISOTROPIC_COAT = !1), LQ.THIN_FILM = this.thinFilmWeight > 0, LQ.IRIDESCENCE = this.thinFilmWeight > 0, LQ.DISPERSION = this.transmissionDispersionScale > 0, LQ.SCATTERING = this.hasScattering;
            if (LQ.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, LQ.TRANSMISSION_SLAB = this.transmissionWeight > 0, LQ.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, LQ.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !LQ.PREPASS && (LQ.SUBSURFACE_SLAB || LQ.TRANSMISSION_SLAB_VOLUME)) {
              let QQ = !1;
              if (!this.sssIrradianceTexture && vQ.geometryBufferRenderer) {
                const FQ = vQ.geometryBufferRenderer.getTextureIndex(XF.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = vQ.geometryBufferRenderer.getGBuffer().textures[FQ], QQ = !0
              }
              if (!this.sssDepthTexture && vQ.geometryBufferRenderer) {
                const FQ = vQ.geometryBufferRenderer.getTextureIndex(XF.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = vQ.geometryBufferRenderer.getGBuffer().textures[FQ], QQ = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (LQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, QQ && (LQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            LQ.FUZZ = this.fuzzWeight > 0 && ZQ.e.ReflectionTextureEnabled, LQ.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, LQ.FUZZ ? (FQ.isVerticesDataPresent(aQ.h.TangentKind) || (LQ._needUVs = !0, LQ.MAINUV1 = !0), this._environmentFuzzBRDFTexture = KQ(this.iN()), LQ.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, LQ.FUZZENVIRONMENTBRDF = !1, LQ.FUZZ_IBL_SAMPLES = 0), LQ._areMiscDirty && ((0, BQ.Y)(FQ, vQ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(FQ), LQ, this._applyDecalMapAfterDetailMap, this._useVertexPulling, wQ, this._isVertexOutputInvariant), LQ.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !FQ.isVerticesDataPresent(aQ.h.NormalKind), LQ.DEBUGMODE = this._debugMode), (0, BQ.R)(vQ, mQ, this, LQ, !!qQ, DQ, kQ), this._eventInfo.defines = LQ, this._eventInfo.mesh = FQ, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, BQ.N)(FQ, LQ, !0, !0, !0, this._transparencyMode !== oQ.d.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, FQ = new WeakMap, LQ = new WeakMap, qQ = new WeakMap, DQ = new WeakMap, kQ = new WeakMap, vQ = new WeakMap, mQ = new WeakMap, uQ = new WeakMap, HQ = new WeakMap, bQ = new WeakMap, YQ = new WeakMap, xQ = new WeakMap, AQ = new WeakMap, tQ = new WeakMap, eQ = new WeakMap, MQ = new WeakMap, GQ = new WeakMap, pQ = new WeakMap, cQ = new WeakMap, CQ = new WeakMap, SQ = new WeakMap, iQ = new WeakMap, IQ = new WeakMap, UQ = new WeakMap, NQ = new WeakMap, TQ = new WeakMap, lQ = new WeakMap, XQ = new WeakMap, fQ = new WeakMap, VQ = new WeakMap, hQ = new WeakMap, nQ = new WeakMap, PQ = new WeakMap, dQ = new WeakMap, QF = new WeakMap, FF = new WeakMap, wF = new WeakMap, LF = new WeakMap, qF = new WeakMap, oF = new WeakMap, DF = new WeakMap, kF = new WeakMap, vF = new WeakMap, mF = new WeakMap, xF = new WeakMap, AF = new WeakMap, tF = new WeakMap, eF = new WeakMap, MF = new WeakMap, GF = new WeakMap, pF = new WeakMap, cF = new WeakMap, CF = new WeakMap, WF = new WeakMap, RF = new WeakMap, OF = new WeakMap, sF = new WeakMap, rF = new WeakMap, IF = new WeakMap, UF = new WeakMap, NF = new WeakMap, TF = new WeakMap, KF = new WeakMap, zF = new WeakMap, lF = new WeakMap, jF = new WeakMap, aF = new WeakMap, fF = new WeakMap, hF = new WeakMap, gF = new WeakMap, PF = new WeakMap, BF = new WeakMap, dF = new WeakMap, Qw = new WeakMap, Fw = new WeakMap, ww = new WeakMap, Lw = new WeakMap, qw = new WeakMap, ow = new WeakMap, Dw = new WeakMap, kw = new WeakMap, vw = new WeakMap, mw = new WeakMap, uw = new WeakMap, Hw = new WeakMap, bw = new WeakMap, Yw = new WeakMap, xw = new WeakMap, Aw = new WeakMap, tw = new WeakMap, ew = new WeakMap, Mw = new WeakMap, Gw = new WeakMap, pw = new WeakMap, Cw = new WeakMap, Sw = new WeakMap, iw = new WeakMap, Ww = new WeakMap, Rw = new WeakMap, Ow = new WeakMap, sw = new WeakMap, rw = new WeakMap, (() => {
          const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(Uq[Symbol.metadata] ?? null) : void 0;
          Iw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Uw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Nw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Tw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Kw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], zw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], lw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], jw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], aw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Xw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], fw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Vw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], hw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Jw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Ew = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], nw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], gw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Pw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Zw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], yw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Bw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], dw = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], QL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], FL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], wL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], LL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], qL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], oL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], DL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], kL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], vL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], mL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], uL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], HL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], bL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], YL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], xL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], AL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], tL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], eL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], ML = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], GL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], pL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], cL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], CL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], SL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], iL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], WL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], RL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], OL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], sL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], rL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], IL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], UL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], NL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], TL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], KL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], zL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], lL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], jL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], aL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], XL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], fL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], VL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], hL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], JL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], EL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], nL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], gL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], PL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], ZL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], yL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], BL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], dL = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Qq = [(0, RQ.c)("_markAllSubMeshesAsTexturesDirty")], Fq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], wq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Lq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], qq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], oq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Dq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], kq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], vq = [(0, RQ.I)()], mq = [(0, RQ.I)()], uq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Hq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], bq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Yq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], xq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsLightsDirty")], Aq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], tq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsLightsDirty")], eq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Mq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Gq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], pq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], cq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Cq = [(0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Sq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], iq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Wq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Rq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Oq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], sq = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], rq = [(0, RQ.e)("_markAllSubMeshesAsMiscDirty")], Iq = [(0, RQ.I)()], (0, WQ.i)(QQ, null, Iw, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseWeight" in QQ,
              get: QQ => QQ.baseWeight,
              set: (QQ, FQ) => {
                QQ.baseWeight = FQ
              }
            },
            metadata: FQ
          }, Tq, Kq), (0, WQ.i)(QQ, null, Uw, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseWeightTexture" in QQ,
              get: QQ => QQ.baseWeightTexture,
              set: (QQ, FQ) => {
                QQ.baseWeightTexture = FQ
              }
            },
            metadata: FQ
          }, zq, lq), (0, WQ.i)(QQ, null, Nw, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseColor" in QQ,
              get: QQ => QQ.baseColor,
              set: (QQ, FQ) => {
                QQ.baseColor = FQ
              }
            },
            metadata: FQ
          }, jq, aq), (0, WQ.i)(QQ, null, Tw, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseColorTexture" in QQ,
              get: QQ => QQ.baseColorTexture,
              set: (QQ, FQ) => {
                QQ.baseColorTexture = FQ
              }
            },
            metadata: FQ
          }, Xq, fq), (0, WQ.i)(QQ, null, Kw, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseDiffuseRoughness" in QQ,
              get: QQ => QQ.baseDiffuseRoughness,
              set: (QQ, FQ) => {
                QQ.baseDiffuseRoughness = FQ
              }
            },
            metadata: FQ
          }, Vq, hq), (0, WQ.i)(QQ, null, zw, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseDiffuseRoughnessTexture" in QQ,
              get: QQ => QQ.baseDiffuseRoughnessTexture,
              set: (QQ, FQ) => {
                QQ.baseDiffuseRoughnessTexture = FQ
              }
            },
            metadata: FQ
          }, Jq, Eq), (0, WQ.i)(QQ, null, lw, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseMetalness" in QQ,
              get: QQ => QQ.baseMetalness,
              set: (QQ, FQ) => {
                QQ.baseMetalness = FQ
              }
            },
            metadata: FQ
          }, nq, gq), (0, WQ.i)(QQ, null, jw, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseMetalnessTexture" in QQ,
              get: QQ => QQ.baseMetalnessTexture,
              set: (QQ, FQ) => {
                QQ.baseMetalnessTexture = FQ
              }
            },
            metadata: FQ
          }, Pq, Zq), (0, WQ.i)(QQ, null, aw, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularWeight" in QQ,
              get: QQ => QQ.specularWeight,
              set: (QQ, FQ) => {
                QQ.specularWeight = FQ
              }
            },
            metadata: FQ
          }, yq, Bq), (0, WQ.i)(QQ, null, Xw, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularWeightTexture" in QQ,
              get: QQ => QQ.specularWeightTexture,
              set: (QQ, FQ) => {
                QQ.specularWeightTexture = FQ
              }
            },
            metadata: FQ
          }, dq, Qo), (0, WQ.i)(QQ, null, fw, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularColor" in QQ,
              get: QQ => QQ.specularColor,
              set: (QQ, FQ) => {
                QQ.specularColor = FQ
              }
            },
            metadata: FQ
          }, Fo, wo), (0, WQ.i)(QQ, null, Vw, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularColorTexture" in QQ,
              get: QQ => QQ.specularColorTexture,
              set: (QQ, FQ) => {
                QQ.specularColorTexture = FQ
              }
            },
            metadata: FQ
          }, Lo, qo), (0, WQ.i)(QQ, null, hw, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularRoughness" in QQ,
              get: QQ => QQ.specularRoughness,
              set: (QQ, FQ) => {
                QQ.specularRoughness = FQ
              }
            },
            metadata: FQ
          }, oo, Do), (0, WQ.i)(QQ, null, Jw, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularRoughnessTexture" in QQ,
              get: QQ => QQ.specularRoughnessTexture,
              set: (QQ, FQ) => {
                QQ.specularRoughnessTexture = FQ
              }
            },
            metadata: FQ
          }, ko, vo), (0, WQ.i)(QQ, null, Ew, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularRoughnessAnisotropy" in QQ,
              get: QQ => QQ.specularRoughnessAnisotropy,
              set: (QQ, FQ) => {
                QQ.specularRoughnessAnisotropy = FQ
              }
            },
            metadata: FQ
          }, mo, uo), (0, WQ.i)(QQ, null, nw, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularRoughnessAnisotropyTexture" in QQ,
              get: QQ => QQ.specularRoughnessAnisotropyTexture,
              set: (QQ, FQ) => {
                QQ.specularRoughnessAnisotropyTexture = FQ
              }
            },
            metadata: FQ
          }, Ho, bo), (0, WQ.i)(QQ, null, gw, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularIor" in QQ,
              get: QQ => QQ.specularIor,
              set: (QQ, FQ) => {
                QQ.specularIor = FQ
              }
            },
            metadata: FQ
          }, Yo, xo), (0, WQ.i)(QQ, null, Pw, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionWeight" in QQ,
              get: QQ => QQ.transmissionWeight,
              set: (QQ, FQ) => {
                QQ.transmissionWeight = FQ
              }
            },
            metadata: FQ
          }, Ao, to), (0, WQ.i)(QQ, null, Zw, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionWeightTexture" in QQ,
              get: QQ => QQ.transmissionWeightTexture,
              set: (QQ, FQ) => {
                QQ.transmissionWeightTexture = FQ
              }
            },
            metadata: FQ
          }, eo, Mo), (0, WQ.i)(QQ, null, yw, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionColor" in QQ,
              get: QQ => QQ.transmissionColor,
              set: (QQ, FQ) => {
                QQ.transmissionColor = FQ
              }
            },
            metadata: FQ
          }, Go, po), (0, WQ.i)(QQ, null, Bw, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionColorTexture" in QQ,
              get: QQ => QQ.transmissionColorTexture,
              set: (QQ, FQ) => {
                QQ.transmissionColorTexture = FQ
              }
            },
            metadata: FQ
          }, co, Co), (0, WQ.i)(QQ, null, dw, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionDepth" in QQ,
              get: QQ => QQ.transmissionDepth,
              set: (QQ, FQ) => {
                QQ.transmissionDepth = FQ
              }
            },
            metadata: FQ
          }, So, io), (0, WQ.i)(QQ, null, QL, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionDepthTexture" in QQ,
              get: QQ => QQ.transmissionDepthTexture,
              set: (QQ, FQ) => {
                QQ.transmissionDepthTexture = FQ
              }
            },
            metadata: FQ
          }, Wo, Ro), (0, WQ.i)(QQ, null, FL, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionScatter" in QQ,
              get: QQ => QQ.transmissionScatter,
              set: (QQ, FQ) => {
                QQ.transmissionScatter = FQ
              }
            },
            metadata: FQ
          }, Oo, so), (0, WQ.i)(QQ, null, wL, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionScatterTexture" in QQ,
              get: QQ => QQ.transmissionScatterTexture,
              set: (QQ, FQ) => {
                QQ.transmissionScatterTexture = FQ
              }
            },
            metadata: FQ
          }, ro, Io), (0, WQ.i)(QQ, null, LL, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionScatterAnisotropy" in QQ,
              get: QQ => QQ.transmissionScatterAnisotropy,
              set: (QQ, FQ) => {
                QQ.transmissionScatterAnisotropy = FQ
              }
            },
            metadata: FQ
          }, Uo, No), (0, WQ.i)(QQ, null, qL, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionDispersionScale" in QQ,
              get: QQ => QQ.transmissionDispersionScale,
              set: (QQ, FQ) => {
                QQ.transmissionDispersionScale = FQ
              }
            },
            metadata: FQ
          }, To, Ko), (0, WQ.i)(QQ, null, oL, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionDispersionScaleTexture" in QQ,
              get: QQ => QQ.transmissionDispersionScaleTexture,
              set: (QQ, FQ) => {
                QQ.transmissionDispersionScaleTexture = FQ
              }
            },
            metadata: FQ
          }, zo, jo), (0, WQ.i)(QQ, null, DL, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionDispersionAbbeNumber" in QQ,
              get: QQ => QQ.transmissionDispersionAbbeNumber,
              set: (QQ, FQ) => {
                QQ.transmissionDispersionAbbeNumber = FQ
              }
            },
            metadata: FQ
          }, ao, Xo), (0, WQ.i)(QQ, null, kL, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceWeight" in QQ,
              get: QQ => QQ.subsurfaceWeight,
              set: (QQ, FQ) => {
                QQ.subsurfaceWeight = FQ
              }
            },
            metadata: FQ
          }, fo, Vo), (0, WQ.i)(QQ, null, vL, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceWeightTexture" in QQ,
              get: QQ => QQ.subsurfaceWeightTexture,
              set: (QQ, FQ) => {
                QQ.subsurfaceWeightTexture = FQ
              }
            },
            metadata: FQ
          }, ho, Jo), (0, WQ.i)(QQ, null, mL, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceColor" in QQ,
              get: QQ => QQ.subsurfaceColor,
              set: (QQ, FQ) => {
                QQ.subsurfaceColor = FQ
              }
            },
            metadata: FQ
          }, Eo, no), (0, WQ.i)(QQ, null, uL, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceColorTexture" in QQ,
              get: QQ => QQ.subsurfaceColorTexture,
              set: (QQ, FQ) => {
                QQ.subsurfaceColorTexture = FQ
              }
            },
            metadata: FQ
          }, go, Po), (0, WQ.i)(QQ, null, HL, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceRadius" in QQ,
              get: QQ => QQ.subsurfaceRadius,
              set: (QQ, FQ) => {
                QQ.subsurfaceRadius = FQ
              }
            },
            metadata: FQ
          }, Zo, yo), (0, WQ.i)(QQ, null, bL, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceRadiusScale" in QQ,
              get: QQ => QQ.subsurfaceRadiusScale,
              set: (QQ, FQ) => {
                QQ.subsurfaceRadiusScale = FQ
              }
            },
            metadata: FQ
          }, Bo, QD), (0, WQ.i)(QQ, null, YL, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceRadiusScaleTexture" in QQ,
              get: QQ => QQ.subsurfaceRadiusScaleTexture,
              set: (QQ, FQ) => {
                QQ.subsurfaceRadiusScaleTexture = FQ
              }
            },
            metadata: FQ
          }, FD, wD), (0, WQ.i)(QQ, null, xL, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceScatterAnisotropy" in QQ,
              get: QQ => QQ.subsurfaceScatterAnisotropy,
              set: (QQ, FQ) => {
                QQ.subsurfaceScatterAnisotropy = FQ
              }
            },
            metadata: FQ
          }, LD, qD), (0, WQ.i)(QQ, null, AL, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatWeight" in QQ,
              get: QQ => QQ.coatWeight,
              set: (QQ, FQ) => {
                QQ.coatWeight = FQ
              }
            },
            metadata: FQ
          }, oD, DD), (0, WQ.i)(QQ, null, tL, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatWeightTexture" in QQ,
              get: QQ => QQ.coatWeightTexture,
              set: (QQ, FQ) => {
                QQ.coatWeightTexture = FQ
              }
            },
            metadata: FQ
          }, kD, vD), (0, WQ.i)(QQ, null, eL, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatColor" in QQ,
              get: QQ => QQ.coatColor,
              set: (QQ, FQ) => {
                QQ.coatColor = FQ
              }
            },
            metadata: FQ
          }, mD, uD), (0, WQ.i)(QQ, null, ML, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatColorTexture" in QQ,
              get: QQ => QQ.coatColorTexture,
              set: (QQ, FQ) => {
                QQ.coatColorTexture = FQ
              }
            },
            metadata: FQ
          }, HD, bD), (0, WQ.i)(QQ, null, GL, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatRoughness" in QQ,
              get: QQ => QQ.coatRoughness,
              set: (QQ, FQ) => {
                QQ.coatRoughness = FQ
              }
            },
            metadata: FQ
          }, YD, xD), (0, WQ.i)(QQ, null, pL, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatRoughnessTexture" in QQ,
              get: QQ => QQ.coatRoughnessTexture,
              set: (QQ, FQ) => {
                QQ.coatRoughnessTexture = FQ
              }
            },
            metadata: FQ
          }, AD, tD), (0, WQ.i)(QQ, null, cL, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatRoughnessAnisotropy" in QQ,
              get: QQ => QQ.coatRoughnessAnisotropy,
              set: (QQ, FQ) => {
                QQ.coatRoughnessAnisotropy = FQ
              }
            },
            metadata: FQ
          }, eD, MD), (0, WQ.i)(QQ, null, CL, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatRoughnessAnisotropyTexture" in QQ,
              get: QQ => QQ.coatRoughnessAnisotropyTexture,
              set: (QQ, FQ) => {
                QQ.coatRoughnessAnisotropyTexture = FQ
              }
            },
            metadata: FQ
          }, GD, pD), (0, WQ.i)(QQ, null, SL, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatIor" in QQ,
              get: QQ => QQ.coatIor,
              set: (QQ, FQ) => {
                QQ.coatIor = FQ
              }
            },
            metadata: FQ
          }, cD, CD), (0, WQ.i)(QQ, null, iL, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatDarkening" in QQ,
              get: QQ => QQ.coatDarkening,
              set: (QQ, FQ) => {
                QQ.coatDarkening = FQ
              }
            },
            metadata: FQ
          }, SD, iD), (0, WQ.i)(QQ, null, WL, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatDarkeningTexture" in QQ,
              get: QQ => QQ.coatDarkeningTexture,
              set: (QQ, FQ) => {
                QQ.coatDarkeningTexture = FQ
              }
            },
            metadata: FQ
          }, WD, RD), (0, WQ.i)(QQ, null, RL, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzWeight" in QQ,
              get: QQ => QQ.fuzzWeight,
              set: (QQ, FQ) => {
                QQ.fuzzWeight = FQ
              }
            },
            metadata: FQ
          }, OD, sD), (0, WQ.i)(QQ, null, OL, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzWeightTexture" in QQ,
              get: QQ => QQ.fuzzWeightTexture,
              set: (QQ, FQ) => {
                QQ.fuzzWeightTexture = FQ
              }
            },
            metadata: FQ
          }, rD, ID), (0, WQ.i)(QQ, null, sL, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzColor" in QQ,
              get: QQ => QQ.fuzzColor,
              set: (QQ, FQ) => {
                QQ.fuzzColor = FQ
              }
            },
            metadata: FQ
          }, UD, ND), (0, WQ.i)(QQ, null, rL, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzColorTexture" in QQ,
              get: QQ => QQ.fuzzColorTexture,
              set: (QQ, FQ) => {
                QQ.fuzzColorTexture = FQ
              }
            },
            metadata: FQ
          }, TD, KD), (0, WQ.i)(QQ, null, IL, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzRoughness" in QQ,
              get: QQ => QQ.fuzzRoughness,
              set: (QQ, FQ) => {
                QQ.fuzzRoughness = FQ
              }
            },
            metadata: FQ
          }, zD, lD), (0, WQ.i)(QQ, null, UL, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzRoughnessTexture" in QQ,
              get: QQ => QQ.fuzzRoughnessTexture,
              set: (QQ, FQ) => {
                QQ.fuzzRoughnessTexture = FQ
              }
            },
            metadata: FQ
          }, jD, aD), (0, WQ.i)(QQ, null, NL, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryThinWalled" in QQ,
              get: QQ => QQ.geometryThinWalled,
              set: (QQ, FQ) => {
                QQ.geometryThinWalled = FQ
              }
            },
            metadata: FQ
          }, XD, fD), (0, WQ.i)(QQ, null, TL, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryNormalTexture" in QQ,
              get: QQ => QQ.geometryNormalTexture,
              set: (QQ, FQ) => {
                QQ.geometryNormalTexture = FQ
              }
            },
            metadata: FQ
          }, VD, hD), (0, WQ.i)(QQ, null, KL, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryTangent" in QQ,
              get: QQ => QQ.geometryTangent,
              set: (QQ, FQ) => {
                QQ.geometryTangent = FQ
              }
            },
            metadata: FQ
          }, JD, ED), (0, WQ.i)(QQ, null, zL, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryTangentTexture" in QQ,
              get: QQ => QQ.geometryTangentTexture,
              set: (QQ, FQ) => {
                QQ.geometryTangentTexture = FQ
              }
            },
            metadata: FQ
          }, nD, gD), (0, WQ.i)(QQ, null, lL, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryCoatNormalTexture" in QQ,
              get: QQ => QQ.geometryCoatNormalTexture,
              set: (QQ, FQ) => {
                QQ.geometryCoatNormalTexture = FQ
              }
            },
            metadata: FQ
          }, PD, ZD), (0, WQ.i)(QQ, null, jL, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryCoatTangent" in QQ,
              get: QQ => QQ.geometryCoatTangent,
              set: (QQ, FQ) => {
                QQ.geometryCoatTangent = FQ
              }
            },
            metadata: FQ
          }, yD, BD), (0, WQ.i)(QQ, null, aL, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryCoatTangentTexture" in QQ,
              get: QQ => QQ.geometryCoatTangentTexture,
              set: (QQ, FQ) => {
                QQ.geometryCoatTangentTexture = FQ
              }
            },
            metadata: FQ
          }, dD, Qk), (0, WQ.i)(QQ, null, XL, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryOpacity" in QQ,
              get: QQ => QQ.geometryOpacity,
              set: (QQ, FQ) => {
                QQ.geometryOpacity = FQ
              }
            },
            metadata: FQ
          }, Fk, wk), (0, WQ.i)(QQ, null, fL, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryOpacityTexture" in QQ,
              get: QQ => QQ.geometryOpacityTexture,
              set: (QQ, FQ) => {
                QQ.geometryOpacityTexture = FQ
              }
            },
            metadata: FQ
          }, Lk, qk), (0, WQ.i)(QQ, null, VL, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryThickness" in QQ,
              get: QQ => QQ.geometryThickness,
              set: (QQ, FQ) => {
                QQ.geometryThickness = FQ
              }
            },
            metadata: FQ
          }, Dk, kk), (0, WQ.i)(QQ, null, hL, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryThicknessTexture" in QQ,
              get: QQ => QQ.geometryThicknessTexture,
              set: (QQ, FQ) => {
                QQ.geometryThicknessTexture = FQ
              }
            },
            metadata: FQ
          }, vk, mk), (0, WQ.i)(QQ, null, JL, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissionLuminance" in QQ,
              get: QQ => QQ.emissionLuminance,
              set: (QQ, FQ) => {
                QQ.emissionLuminance = FQ
              }
            },
            metadata: FQ
          }, uk, Hk), (0, WQ.i)(QQ, null, EL, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissionColor" in QQ,
              get: QQ => QQ.emissionColor,
              set: (QQ, FQ) => {
                QQ.emissionColor = FQ
              }
            },
            metadata: FQ
          }, bk, Yk), (0, WQ.i)(QQ, null, nL, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissionColorTexture" in QQ,
              get: QQ => QQ.emissionColorTexture,
              set: (QQ, FQ) => {
                QQ.emissionColorTexture = FQ
              }
            },
            metadata: FQ
          }, xk, Ak), (0, WQ.i)(QQ, null, gL, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmWeight" in QQ,
              get: QQ => QQ.thinFilmWeight,
              set: (QQ, FQ) => {
                QQ.thinFilmWeight = FQ
              }
            },
            metadata: FQ
          }, tk, ek), (0, WQ.i)(QQ, null, PL, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmWeightTexture" in QQ,
              get: QQ => QQ.thinFilmWeightTexture,
              set: (QQ, FQ) => {
                QQ.thinFilmWeightTexture = FQ
              }
            },
            metadata: FQ
          }, Mk, Gk), (0, WQ.i)(QQ, null, ZL, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmThickness" in QQ,
              get: QQ => QQ.thinFilmThickness,
              set: (QQ, FQ) => {
                QQ.thinFilmThickness = FQ
              }
            },
            metadata: FQ
          }, pk, ck), (0, WQ.i)(QQ, null, yL, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmThicknessMin" in QQ,
              get: QQ => QQ.thinFilmThicknessMin,
              set: (QQ, FQ) => {
                QQ.thinFilmThicknessMin = FQ
              }
            },
            metadata: FQ
          }, Ck, Sk), (0, WQ.i)(QQ, null, BL, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmThicknessTexture" in QQ,
              get: QQ => QQ.thinFilmThicknessTexture,
              set: (QQ, FQ) => {
                QQ.thinFilmThicknessTexture = FQ
              }
            },
            metadata: FQ
          }, ik, Wk), (0, WQ.i)(QQ, null, dL, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmIor" in QQ,
              get: QQ => QQ.thinFilmIor,
              set: (QQ, FQ) => {
                QQ.thinFilmIor = FQ
              }
            },
            metadata: FQ
          }, Rk, Ok), (0, WQ.i)(QQ, null, Qq, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ambientOcclusionTexture" in QQ,
              get: QQ => QQ.ambientOcclusionTexture,
              set: (QQ, FQ) => {
                QQ.ambientOcclusionTexture = FQ
              }
            },
            metadata: FQ
          }, sk, rk), (0, WQ.i)(QQ, null, Fq, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: QQ => "directIntensity" in QQ,
              get: QQ => QQ.directIntensity,
              set: (QQ, FQ) => {
                QQ.directIntensity = FQ
              }
            },
            metadata: FQ
          }, Ik, Uk), (0, WQ.i)(QQ, null, wq, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: QQ => "environmentIntensity" in QQ,
              get: QQ => QQ.environmentIntensity,
              set: (QQ, FQ) => {
                QQ.environmentIntensity = FQ
              }
            },
            metadata: FQ
          }, Nk, Tk), (0, WQ.i)(QQ, null, Lq, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useSpecularWeightFromTextureAlpha" in QQ,
              get: QQ => QQ.useSpecularWeightFromTextureAlpha,
              set: (QQ, FQ) => {
                QQ.useSpecularWeightFromTextureAlpha = FQ
              }
            },
            metadata: FQ
          }, Kk, zk), (0, WQ.i)(QQ, null, qq, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: QQ => "forceAlphaTest" in QQ,
              get: QQ => QQ.forceAlphaTest,
              set: (QQ, FQ) => {
                QQ.forceAlphaTest = FQ
              }
            },
            metadata: FQ
          }, lk, jk), (0, WQ.i)(QQ, null, oq, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alphaCutOff" in QQ,
              get: QQ => QQ.alphaCutOff,
              set: (QQ, FQ) => {
                QQ.alphaCutOff = FQ
              }
            },
            metadata: FQ
          }, ak, Xk), (0, WQ.i)(QQ, null, Dq, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useAmbientOcclusionFromMetallicTextureRed" in QQ,
              get: QQ => QQ.useAmbientOcclusionFromMetallicTextureRed,
              set: (QQ, FQ) => {
                QQ.useAmbientOcclusionFromMetallicTextureRed = FQ
              }
            },
            metadata: FQ
          }, fk, Vk), (0, WQ.i)(QQ, null, kq, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useAmbientInGrayScale" in QQ,
              get: QQ => QQ.useAmbientInGrayScale,
              set: (QQ, FQ) => {
                QQ.useAmbientInGrayScale = FQ
              }
            },
            metadata: FQ
          }, hk, Jk), (0, WQ.i)(QQ, null, vq, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: QQ => "usePhysicalLightFalloff" in QQ,
              get: QQ => QQ.usePhysicalLightFalloff
            },
            metadata: FQ
          }, null, Nq), (0, WQ.i)(QQ, null, mq, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useGLTFLightFalloff" in QQ,
              get: QQ => QQ.useGLTFLightFalloff
            },
            metadata: FQ
          }, null, Nq), (0, WQ.i)(QQ, null, uq, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useObjectSpaceNormalMap" in QQ,
              get: QQ => QQ.useObjectSpaceNormalMap,
              set: (QQ, FQ) => {
                QQ.useObjectSpaceNormalMap = FQ
              }
            },
            metadata: FQ
          }, Ek, nk), (0, WQ.i)(QQ, null, Hq, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useParallax" in QQ,
              get: QQ => QQ.useParallax,
              set: (QQ, FQ) => {
                QQ.useParallax = FQ
              }
            },
            metadata: FQ
          }, gk, Pk), (0, WQ.i)(QQ, null, bq, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useParallaxOcclusion" in QQ,
              get: QQ => QQ.useParallaxOcclusion,
              set: (QQ, FQ) => {
                QQ.useParallaxOcclusion = FQ
              }
            },
            metadata: FQ
          }, Zk, yk), (0, WQ.i)(QQ, null, Yq, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: QQ => "parallaxScaleBias" in QQ,
              get: QQ => QQ.parallaxScaleBias,
              set: (QQ, FQ) => {
                QQ.parallaxScaleBias = FQ
              }
            },
            metadata: FQ
          }, Bk, dk), (0, WQ.i)(QQ, null, xq, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "disableLighting" in QQ,
              get: QQ => QQ.disableLighting,
              set: (QQ, FQ) => {
                QQ.disableLighting = FQ
              }
            },
            metadata: FQ
          }, Qv, Fv), (0, WQ.i)(QQ, null, Aq, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: QQ => "forceIrradianceInFragment" in QQ,
              get: QQ => QQ.forceIrradianceInFragment,
              set: (QQ, FQ) => {
                QQ.forceIrradianceInFragment = FQ
              }
            },
            metadata: FQ
          }, wv, Lv), (0, WQ.i)(QQ, null, tq, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: QQ => "maxSimultaneousLights" in QQ,
              get: QQ => QQ.maxSimultaneousLights,
              set: (QQ, FQ) => {
                QQ.maxSimultaneousLights = FQ
              }
            },
            metadata: FQ
          }, qv, ov), (0, WQ.i)(QQ, null, eq, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "invertNormalMapX" in QQ,
              get: QQ => QQ.invertNormalMapX,
              set: (QQ, FQ) => {
                QQ.invertNormalMapX = FQ
              }
            },
            metadata: FQ
          }, Dv, kv), (0, WQ.i)(QQ, null, Mq, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "invertNormalMapY" in QQ,
              get: QQ => QQ.invertNormalMapY,
              set: (QQ, FQ) => {
                QQ.invertNormalMapY = FQ
              }
            },
            metadata: FQ
          }, vv, mv), (0, WQ.i)(QQ, null, Gq, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "twoSidedLighting" in QQ,
              get: QQ => QQ.twoSidedLighting,
              set: (QQ, FQ) => {
                QQ.twoSidedLighting = FQ
              }
            },
            metadata: FQ
          }, uv, Hv), (0, WQ.i)(QQ, null, pq, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useAlphaFresnel" in QQ,
              get: QQ => QQ.useAlphaFresnel,
              set: (QQ, FQ) => {
                QQ.useAlphaFresnel = FQ
              }
            },
            metadata: FQ
          }, bv, Yv), (0, WQ.i)(QQ, null, cq, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useLinearAlphaFresnel" in QQ,
              get: QQ => QQ.useLinearAlphaFresnel,
              set: (QQ, FQ) => {
                QQ.useLinearAlphaFresnel = FQ
              }
            },
            metadata: FQ
          }, xv, Av), (0, WQ.i)(QQ, null, Cq, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "environmentBRDFTexture" in QQ,
              get: QQ => QQ.environmentBRDFTexture,
              set: (QQ, FQ) => {
                QQ.environmentBRDFTexture = FQ
              }
            },
            metadata: FQ
          }, tv, ev), (0, WQ.i)(QQ, null, Sq, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: QQ => "forceNormalForward" in QQ,
              get: QQ => QQ.forceNormalForward,
              set: (QQ, FQ) => {
                QQ.forceNormalForward = FQ
              }
            },
            metadata: FQ
          }, Mv, Gv), (0, WQ.i)(QQ, null, iq, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: QQ => "enableSpecularAntiAliasing" in QQ,
              get: QQ => QQ.enableSpecularAntiAliasing,
              set: (QQ, FQ) => {
                QQ.enableSpecularAntiAliasing = FQ
              }
            },
            metadata: FQ
          }, pv, cv), (0, WQ.i)(QQ, null, Wq, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useHorizonOcclusion" in QQ,
              get: QQ => QQ.useHorizonOcclusion,
              set: (QQ, FQ) => {
                QQ.useHorizonOcclusion = FQ
              }
            },
            metadata: FQ
          }, Cv, Sv), (0, WQ.i)(QQ, null, Rq, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useRadianceOcclusion" in QQ,
              get: QQ => QQ.useRadianceOcclusion,
              set: (QQ, FQ) => {
                QQ.useRadianceOcclusion = FQ
              }
            },
            metadata: FQ
          }, iv, Wv), (0, WQ.i)(QQ, null, Oq, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "unlit" in QQ,
              get: QQ => QQ.unlit,
              set: (QQ, FQ) => {
                QQ.unlit = FQ
              }
            },
            metadata: FQ
          }, Rv, Ov), (0, WQ.i)(QQ, null, sq, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "applyDecalMapAfterDetailMap" in QQ,
              get: QQ => QQ.applyDecalMapAfterDetailMap,
              set: (QQ, FQ) => {
                QQ.applyDecalMapAfterDetailMap = FQ
              }
            },
            metadata: FQ
          }, sv, rv), (0, WQ.i)(QQ, null, rq, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "debugMode" in QQ,
              get: QQ => QQ.debugMode,
              set: (QQ, FQ) => {
                QQ.debugMode = FQ
              }
            },
            metadata: FQ
          }, Iv, Uv), (0, WQ.i)(QQ, null, Iq, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transparencyMode" in QQ,
              get: QQ => QQ.transparencyMode
            },
            metadata: FQ
          }, null, Nq), FQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FQ
          })
        })(), QQ.SSS_QUALITY_LOW = 0, QQ.SSS_QUALITY_MEDIUM = 1, QQ.SSS_QUALITY_HIGH = 2, QQ._noiseTextures = {}, QQ.ForceGLSL = !1, QQ._ShaderLoader = new bF.b((() => [Promise.all([wQ.e(308), wQ.e(374)]).then((() => wQ(61234))), Promise.all([wQ.e(313), wQ.e(309), wQ.e(373), wQ.e(378)]).then((() => wQ(61241)))]), (() => [Promise.all([wQ.e(327), wQ.e(329), wQ.e(377)]).then((() => wQ(61285))), Promise.all([wQ.e(327), wQ.e(330), wQ.e(376), wQ.e(379)]).then((() => wQ(61295)))])), QQ
      })(),
      dF = !1;
    dF || (dF = !0, (0, gQ.h)(), (0, fF.e)("BABYLON.OpenPBRMaterial", BF));
    var Qw = wQ(36722);
    class Fw {
      constructor(QQ) {
        this.name = TF.b.NAME_PROCEDURALTEXTURE, this.lA = QQ
      }
      register() {
        this.lA._beforeClearStage.registerStep(TF.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.lA.proceduralTexturesEnabled) {
          iF.g.StartPerformanceCounter("Procedural textures", this.lA.proceduralTextures.length > 0);
          for (let QQ = 0; QQ < this.lA.proceduralTextures.length; QQ++) {
            const FQ = this.lA.proceduralTextures[QQ];
            FQ._shouldRender() && FQ.render()
          }
          iF.g.EndPerformanceCounter("Procedural textures", this.lA.proceduralTextures.length > 0)
        }
      }
    }
    var ww = wQ(39748);
    let Lw = (() => {
      var QQ;
      let FQ, LQ, qQ, DQ, kQ, vQ = rQ.e,
        mQ = [],
        uQ = [],
        HQ = [],
        bQ = [],
        YQ = [],
        xQ = [],
        tQ = [],
        eQ = [],
        MQ = [];
      return QQ = class extends vQ {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(QQ, FQ, wQ, LQ) {
          let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, LQ, !oQ), this.isEnabled = ((0, WQ.l)(this, mQ), (0, WQ.l)(this, uQ, !0)), this.autoClear = ((0, WQ.l)(this, HQ), (0, WQ.l)(this, bQ, !0)), this.onGenerated = (0, WQ.l)(this, YQ), this.onGeneratedObservable = new Qw.e, this.onBeforeGenerationObservable = new Qw.e, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, WQ.l)(this, xQ, void 0), this._drawWrapper = (0, WQ.l)(this, tQ), this._textures = {}, this._size = (0, WQ.l)(this, eQ, void 0), this._textureType = (0, WQ.l)(this, MQ), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === qQ || qQ instanceof rQ.e ? (this._options = {}, this._fallbackTexture = qQ) : (this._options = qQ, this._fallbackTexture = qQ.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let vQ = (LQ = this.iN() || AQ.d.LastCreatedScene)._getComponent(TF.b.NAME_PROCEDURALTEXTURE);
          vQ || (vQ = new Fw(LQ), LQ.HLQ(vQ)), this._options.skipSceneRegistration || LQ.proceduralTextures.push(this), this._fullEngine = LQ.Wx(), this.name = QQ, this.isRenderTarget = !0, this._size = FQ, this._textureType = kQ, this._generateMipMaps = oQ, this._drawWrapper = new ww.d(this._fullEngine), this.setFragment(wQ);
          const GQ = this._createRtWrapper(DQ, FQ, oQ, kQ);
          this._texture = GQ.texture;
          const pQ = [];
          pQ.push(1, 1), pQ.push(-1, 1), pQ.push(-1, -1), pQ.push(1, -1), this._vertexBuffers[aQ.h.PositionKind] = new aQ.h(this._fullEngine, pQ, aQ.h.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(QQ, FQ, wQ, LQ) {
          return QQ ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(FQ, {
            generateMipMaps: wQ,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: LQ,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(FQ, {
            generateMipMaps: wQ,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: LQ,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(QQ) {
          this._drawWrapper.effect = QQ
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((QQ => {
            this._contentData = this.readPixels(0, 0, QQ), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const QQ = this._fullEngine,
            FQ = [];
          FQ.push(0), FQ.push(1), FQ.push(2), FQ.push(0), FQ.push(2), FQ.push(3), this._indexBuffer = QQ.createIndexBuffer(FQ)
        }
        _rebuild() {
          const QQ = this._vertexBuffers[aQ.h.PositionKind];
          QQ && QQ._rebuild(), this._createIndexBuffer(), this.refreshRate === WF.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = WF.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(QQ) {
          if (this.isReady()) return void QQ(this);
          const FQ = this.getEffect();
          FQ && FQ.executeWhenCompiled((() => {
            QQ(this)
          }))
        }
        isReady() {
          const QQ = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const FQ = this._getDefines();
          if (this._drawWrapper.effect && FQ === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const LQ = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== FQ && (this._cachedDefines = FQ, this._drawWrapper.effect = QQ.createEffect(LQ, [aQ.h.PositionKind], this._uniforms, this._samplers, FQ, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([wQ.e(382).then((() => wQ(61375))), this._options.extraInitializationsAsync()]) : await Promise.all([wQ.e(383).then((() => wQ(61381))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await wQ.e(382).then((() => wQ(61375))) : await wQ.e(383).then((() => wQ(61381)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(QQ) {
          this._fragment = QQ
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(QQ) {
          this._refreshRate = QQ, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(QQ, FQ) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const wQ = this._texture.isCube;
          this._rtWrapper.dispose();
          const LQ = this._createRtWrapper(wQ, QQ, FQ, this._textureType);
          this._texture = LQ.texture, this._size = QQ, this._generateMipMaps = FQ
        }
        _checkUniform(QQ) {
          -1 === this._uniforms.indexOf(QQ) && this._uniforms.push(QQ)
        }
        setTexture(QQ, FQ) {
          return -1 === this._samplers.indexOf(QQ) && this._samplers.push(QQ), this._textures[QQ] = FQ, this
        }
        setFloat(QQ, FQ) {
          return this._checkUniform(QQ), this._floats[QQ] = FQ, this
        }
        setInt(QQ, FQ) {
          return this._checkUniform(QQ), this._ints[QQ] = FQ, this
        }
        setFloats(QQ, FQ) {
          return this._checkUniform(QQ), this._floatsArrays[QQ] = FQ, this
        }
        setColor3(QQ, FQ) {
          return this._checkUniform(QQ), this._colors3[QQ] = FQ, this
        }
        setColor4(QQ, FQ) {
          return this._checkUniform(QQ), this._colors4[QQ] = FQ, this
        }
        setVector2(QQ, FQ) {
          return this._checkUniform(QQ), this._vectors2[QQ] = FQ, this
        }
        setVector3(QQ, FQ) {
          return this._checkUniform(QQ), this._vectors3[QQ] = FQ, this
        }
        setVector4(QQ, FQ) {
          return this._checkUniform(QQ), this._vectors4[QQ] = FQ, this
        }
        setMatrix(QQ, FQ) {
          return this._checkUniform(QQ), this._matrices[QQ] = FQ, this
        }
        render(QQ) {
          const FQ = this.iN();
          if (!FQ) return;
          const wQ = this._fullEngine;
          if (wQ.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), wQ.setState(!1), !this.nodeMaterialSource) {
            for (const QQ in this._textures) this._drawWrapper.effect.setTexture(QQ, this._textures[QQ]);
            for (const QQ in this._ints) this._drawWrapper.effect.setInt(QQ, this._ints[QQ]);
            for (const QQ in this._floats) this._drawWrapper.effect.setFloat(QQ, this._floats[QQ]);
            for (const QQ in this._floatsArrays) this._drawWrapper.effect.setArray(QQ, this._floatsArrays[QQ]);
            for (const QQ in this._colors3) this._drawWrapper.effect.setColor3(QQ, this._colors3[QQ]);
            for (const QQ in this._colors4) {
              const FQ = this._colors4[QQ];
              this._drawWrapper.effect.setFloat4(QQ, FQ.r, FQ.g, FQ.b, FQ.a)
            }
            for (const QQ in this._vectors2) this._drawWrapper.effect.setVector2(QQ, this._vectors2[QQ]);
            for (const QQ in this._vectors3) this._drawWrapper.effect.setVector3(QQ, this._vectors3[QQ]);
            for (const QQ in this._vectors4) this._drawWrapper.effect.setVector4(QQ, this._vectors4[QQ]);
            for (const QQ in this._matrices) this._drawWrapper.effect.setMatrix(QQ, this._matrices[QQ])
          }
          if (!this._texture || !this._rtWrapper) return;
          wQ._enableGPUDebugMarkers && wQ._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const LQ = wQ.currentViewport;
          if (this.isCube)
            for (let qQ = 0; qQ < 6; qQ++) wQ.bindFramebuffer(this._rtWrapper, qQ, void 0, void 0, !0), wQ.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", qQ), this.autoClear && wQ.clear(FQ.clearColor, !0, !1, !1), wQ.drawElementsType(oQ.d.TriangleFillMode, 0, 6), wQ.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let QQ = 1;
            this._rtWrapper.is3D ? QQ = this._rtWrapper.depth : this._rtWrapper.is2DArray && (QQ = this._rtWrapper.layers);
            for (let LQ = 0; LQ < QQ; LQ++) {
              if (wQ.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, LQ), wQ.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== QQ ? LQ / (QQ - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", LQ);
                for (const QQ in this._textures) this._drawWrapper.effect.setTexture(QQ, this._textures[QQ])
              }
              this.autoClear && wQ.clear(FQ.clearColor, !0, !1, !1), wQ.drawElementsType(oQ.d.TriangleFillMode, 0, 6), wQ.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          LQ && wQ.setViewport(LQ), this.isCube && wQ.generateMipMapsForCubemap(this._texture, !0), wQ._enableGPUDebugMarkers && wQ._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const FQ = this.getSize(),
            wQ = new QQ(this.name, FQ.width, this._fragment, this.iN(), this._fallbackTexture, this._generateMipMaps);
          return wQ.hasAlpha = this.hasAlpha, wQ.level = this.level, wQ.coordinatesMode = this.coordinatesMode, wQ
        }
        dispose() {
          const QQ = this.iN();
          if (!QQ) return;
          const FQ = QQ.proceduralTextures.indexOf(this);
          FQ >= 0 && QQ.proceduralTextures.splice(FQ, 1);
          const wQ = this._vertexBuffers[aQ.h.PositionKind];
          wQ && (wQ.dispose(), this._vertexBuffers[aQ.h.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const wQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(vQ[Symbol.metadata] ?? null) : void 0;
        FQ = [(0, RQ.I)()], LQ = [(0, RQ.I)()], qQ = [(0, RQ.I)()], DQ = [(0, RQ.I)()], kQ = [(0, RQ.I)()], (0, WQ.i)(QQ, null, kQ, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: QQ => "refreshRate" in QQ,
            get: QQ => QQ.refreshRate
          },
          metadata: wQ
        }, null, mQ), (0, WQ.i)(null, null, FQ, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, FQ) => {
              QQ.isEnabled = FQ
            }
          },
          metadata: wQ
        }, uQ, HQ), (0, WQ.i)(null, null, LQ, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: QQ => "autoClear" in QQ,
            get: QQ => QQ.autoClear,
            set: (QQ, FQ) => {
              QQ.autoClear = FQ
            }
          },
          metadata: wQ
        }, bQ, YQ), (0, WQ.i)(null, null, qQ, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_generateMipMaps" in QQ,
            get: QQ => QQ._generateMipMaps,
            set: (QQ, FQ) => {
              QQ._generateMipMaps = FQ
            }
          },
          metadata: wQ
        }, xQ, tQ), (0, WQ.i)(null, null, DQ, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_size" in QQ,
            get: QQ => QQ._size,
            set: (QQ, FQ) => {
              QQ._size = FQ
            }
          },
          metadata: wQ
        }, eQ, MQ), wQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wQ
        })
      })(), QQ
    })();

    function qw(QQ) {
      return "texture" in QQ
    }

    function ow(QQ) {
      return "value" in QQ
    }
    async function Dw(QQ, FQ, LQ) {
      const qQ = [FQ.red, FQ.green, FQ.blue, FQ.alpha],
        oQ = [],
        DQ = [];
      for (let wQ = 0; wQ < 4; wQ++) {
        const QQ = qQ[wQ];
        if (QQ)
          if (qw(QQ)) {
            if (QQ.sourceChannel < 0 || QQ.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let FQ = oQ.indexOf(QQ.texture); - 1 === FQ && (FQ = oQ.length, oQ.push(QQ.texture)), DQ[wQ] = FQ
          } else {
            if (!ow(QQ)) throw new Error("Invalid channel input configuration");
            if (QQ.value < 0 || QQ.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            DQ[wQ] = -1
          }
        else DQ[wQ] = -1
      }
      let kQ = FQ.outputSize;
      if (!kQ && oQ.length > 0) {
        let QQ = 0;
        for (const FQ of oQ) {
          const wQ = FQ.getSize(),
            LQ = Math.max(wQ.width, wQ.height);
          LQ > QQ && (QQ = LQ, kQ = wQ.width === wQ.height ? QQ : wQ)
        }
      }
      kQ = kQ || 512;
      const vQ = [],
        mQ = new Set;
      for (let wQ = 0; wQ < 4; wQ++) {
        const QQ = qQ[wQ],
          FQ = ["RED", "GREEN", "BLUE", "ALPHA"][wQ];
        if (QQ && qw(QQ)) {
          vQ.push(`${FQ}_FROM_TEXTURE`);
          const QQ = DQ[wQ];
          mQ.add(QQ)
        }
      }
      mQ.forEach((QQ => {
        vQ.push(`USE_TEXTURE${QQ}`)
      }));
      const uQ = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: LQ.Wx().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            LQ.Wx().isWebGPU ? await Promise.all([wQ.e(380).then((() => wQ(61358)))]) : await Promise.all([wQ.e(381).then((() => wQ(61366)))])
          },
          skipSceneRegistration: !0
        },
        HQ = new Lw(QQ, kQ, "textureMerger", LQ, uQ);
      HQ.refreshRate = -1, HQ.defines = vQ.length > 0 ? "#define " + vQ.join("\n#define ") + "\n" : "";
      for (let wQ = 0; wQ < oQ.length; wQ++) bQ = oQ[wQ], (YQ = HQ).uOffset = bQ.uOffset, YQ.vOffset = bQ.vOffset, YQ.uScale = bQ.uScale, YQ.vScale = bQ.vScale, YQ.uAng = bQ.uAng, YQ.vAng = bQ.vAng, YQ.wAng = bQ.wAng, YQ.uRotationCenter = bQ.uRotationCenter, YQ.vRotationCenter = bQ.vRotationCenter, HQ.setTexture(`inputTexture${wQ}`, oQ[wQ]);
      var bQ, YQ;
      for (let wQ = 0; wQ < 4; wQ++) {
        const QQ = qQ[wQ],
          FQ = ["red", "green", "blue", "alpha"][wQ];
        if (QQ && qw(QQ)) {
          const LQ = DQ[wQ];
          HQ.setInt(`${FQ}TextureIndex`, LQ), HQ.setInt(`${FQ}SourceChannel`, QQ.sourceChannel)
        } else {
          let LQ;
          LQ = QQ && ow(QQ) ? QQ.value : 3 === wQ ? 1 : 0, HQ.setFloat(`${FQ}ConstantValue`, LQ)
        }
      }
      return await new Promise(((QQ, FQ) => {
        HQ.executeWhenReady((() => {
          try {
            HQ.render(), QQ(HQ)
          } catch (wQ) {
            FQ(wQ instanceof Error ? wQ : new Error(String(wQ)))
          }
        }))
      }))
    }

    function kw(QQ, FQ) {
      return {
        texture: QQ,
        sourceChannel: FQ
      }
    }

    function vw(QQ) {
      return {
        value: QQ
      }
    }

    function mw(QQ, FQ, wQ, LQ) {
      return {
        red: QQ,
        green: FQ,
        blue: wQ,
        alpha: LQ
      }
    }
    var uw = wQ(39219),
      Hw = wQ(39330),
      bw = wQ(36717),
      Yw = wQ(39385),
      xw = wQ(39317);
    class Aw {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class tw extends uw.b {
      isDeterministicLockStep() {
        return this._options.deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._options.lockstepMaxSteps
      }
      getHardwareScalingLevel() {
        return 1
      }
      get supportsUniformBuffers() {
        return !!this._options?.enableMultiview || this.oA > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Aw;
        super(null), void 0 === QQ.deterministicLockstep && (QQ.deterministicLockstep = !1), void 0 !== QQ.timeStep && (this._timeStep = QQ.timeStep), void 0 === QQ.lockstepMaxSteps && (QQ.lockstepMaxSteps = 4), this._options = QQ, bw.e.SetMatrixPrecision(!!QQ.useHighPrecisionMatrix), this._caps = {
          maxTexturesImageUnits: 16,
          maxVertexTextureImageUnits: 16,
          maxCombinedTexturesImageUnits: 32,
          maxTextureSize: 512,
          maxCubemapTextureSize: 512,
          maxDrawBuffers: 0,
          maxRenderTextureSize: 512,
          maxVertexAttribs: 16,
          maxVaryingVectors: 16,
          maxFragmentUniformVectors: 16,
          maxVertexUniformVectors: 16,
          shaderFloatPrecision: 10,
          standardDerivatives: !1,
          astc: null,
          pvrtc: null,
          etc1: null,
          etc2: null,
          bptc: null,
          maxAnisotropy: 0,
          uintIndices: !1,
          fragmentDepthSupported: !1,
          highPrecisionShaderSupported: !0,
          colorBufferFloat: !1,
          blendFloat: !1,
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          textureFloat: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloat: !1,
          textureHalfFloatLinearFiltering: !1,
          textureHalfFloatRender: !1,
          textureLOD: !1,
          texelFetch: !1,
          drawBuffersExtension: !1,
          depthTextureExtension: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          supportOcclusionQuery: !1,
          canUseTimestampForTimerQuery: !1,
          maxMSAASamples: 1,
          blendMinMax: !1,
          canUseGLInstanceID: !1,
          canUseGLVertexID: !1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: !1,
          textureMaxLevel: !1,
          texture2DArrayMaxLayerCount: 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !1,
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, QQ.enableMultiview && (this._caps.multiview = {
          framebufferTextureMultiviewOVR: () => {}
        }), this._features = {
          forceBitmapOverHTMLImageElement: !1,
          supportRenderAndCopyToLodForFloatTextures: !1,
          supportDepthStencilTexture: !1,
          supportShadowSamplers: !1,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: !1,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: !1,
          basisNeedsPOT: !1,
          support3DTextures: !1,
          needTypeSuffixInShaderConstants: !1,
          supportMSAA: !1,
          supportSSAO2: !1,
          supportIBLShadows: !1,
          supportExtendedTextureFormats: !1,
          supportSwitchCaseInShader: !1,
          supportSyncTextureRead: !1,
          needsInvertingBitmap: !1,
          useUBOBindingCache: !1,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !0,
          supportSpriteInstancing: !1,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }, QQ.renderingCanvas && (this._renderingCanvas = QQ.renderingCanvas), OQ.c.Log(`Babylon.js v${uw.b.Version} - Null engine`);
        const FQ = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (FQ.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (FQ.Blob = function() {})
      }
      createVertexBuffer(QQ) {
        const FQ = new Hw.c;
        return FQ.references = 1, FQ
      }
      createIndexBuffer(QQ) {
        const FQ = new Hw.c;
        return FQ.references = 1, FQ
      }
      clear(QQ, FQ, wQ) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(QQ, FQ, wQ) {
        this._cachedViewport = QQ
      }
      createUniformBuffer(QQ) {
        const FQ = new Hw.c;
        return FQ.references = 1, FQ.MH = QQ instanceof Array ? QQ.length * Float32Array.BYTES_PER_ELEMENT : QQ.byteLength, FQ
      }
      createDynamicUniformBuffer(QQ) {
        return this.createUniformBuffer(QQ)
      }
      updateUniformBuffer(QQ, FQ, wQ, LQ) {}
      bindUniformBufferBase(QQ, FQ, wQ) {}
      bindUniformBlock(QQ, FQ, wQ) {}
      createShaderProgram(QQ, FQ, wQ, LQ, qQ) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(QQ, FQ) {
        return []
      }
      getAttributes(QQ, FQ) {
        return []
      }
      bindSamplers(QQ) {
        this._currentEffect = null
      }
      enableEffect(QQ) {
        QQ = null !== QQ && (0, xw.d)(QQ) ? QQ.effect : QQ, this._currentEffect = QQ, QQ && (QQ.onBind && QQ.onBind(QQ), QQ._onBindObservable && QQ._onBindObservable.notifyObservers(QQ))
      }
      setStateCullFaceType(QQ, FQ) {}
      setState(QQ) {}
      setIntArray(QQ, FQ) {
        return !0
      }
      setIntArray2(QQ, FQ) {
        return !0
      }
      setIntArray3(QQ, FQ) {
        return !0
      }
      setIntArray4(QQ, FQ) {
        return !0
      }
      setFloatArray(QQ, FQ) {
        return !0
      }
      setFloatArray2(QQ, FQ) {
        return !0
      }
      setFloatArray3(QQ, FQ) {
        return !0
      }
      setFloatArray4(QQ, FQ) {
        return !0
      }
      setArray(QQ, FQ) {
        return !0
      }
      setArray2(QQ, FQ) {
        return !0
      }
      setArray3(QQ, FQ) {
        return !0
      }
      setArray4(QQ, FQ) {
        return !0
      }
      setMatrices(QQ, FQ) {
        return !0
      }
      setMatrix3x3(QQ, FQ) {
        return !0
      }
      setMatrix2x2(QQ, FQ) {
        return !0
      }
      setFloat(QQ, FQ) {
        return !0
      }
      setFloat2(QQ, FQ, wQ) {
        return !0
      }
      setFloat3(QQ, FQ, wQ, LQ) {
        return !0
      }
      setBool(QQ, FQ) {
        return !0
      }
      setFloat4(QQ, FQ, wQ, LQ, qQ) {
        return !0
      }
      setAlphaMode(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[wQ] !== QQ && (this.alphaState.setAlphaBlend(0 !== QQ, 0), FQ || this.setDepthWrite(0 === QQ), this._alphaMode[wQ] = QQ)
      }
      bindBuffers(QQ, FQ, wQ) {}
      wipeCaches(QQ) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, QQ && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(QQ, FQ, wQ, LQ) {}
      drawElementsType(QQ, FQ, wQ, LQ) {}
      drawArraysType(QQ, FQ, wQ, LQ) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(QQ) {}
      createTexture(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          DQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          kQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const vQ = new RF.d(this, 1),
          mQ = String(QQ);
        return vQ.url = mQ, vQ.generateMipMaps = !FQ, vQ.samplingMode = qQ, vQ.invertY = wQ, vQ.baseWidth = this._options.textureSize, vQ.baseHeight = this._options.textureSize, vQ.width = this._options.textureSize, vQ.height = this._options.textureSize, kQ && (vQ.format = kQ), DQ && (vQ._buffer = DQ), vQ.isReady = !0, oQ && setTimeout((() => {
          oQ(vQ)
        })), this._internalTexturesCache.push(vQ), vQ
      }
      _createHardwareRenderTargetWrapper(QQ, FQ, wQ) {
        const LQ = new Yw.e(QQ, FQ, wQ, this);
        return this._renderTargetWrapperCache.push(LQ), LQ
      }
      createRenderTargetTexture(QQ, FQ) {
        const wQ = this._createHardwareRenderTargetWrapper(!1, !1, QQ),
          LQ = {};
        void 0 !== FQ && "object" === typeof FQ ? (LQ.generateMipMaps = FQ.generateMipMaps, LQ.generateDepthBuffer = void 0 === FQ.generateDepthBuffer || FQ.generateDepthBuffer, LQ.generateStencilBuffer = LQ.generateDepthBuffer && FQ.generateStencilBuffer, LQ.type = void 0 === FQ.type ? 0 : FQ.type, LQ.samplingMode = void 0 === FQ.samplingMode ? 3 : FQ.samplingMode) : (LQ.generateMipMaps = FQ, LQ.generateDepthBuffer = !0, LQ.generateStencilBuffer = !1, LQ.type = 0, LQ.samplingMode = 3);
        const qQ = new RF.d(this, 5);
        wQ.setTexture(qQ);
        const oQ = QQ.width || QQ,
          DQ = QQ.height || QQ;
        return wQ._generateDepthBuffer = LQ.generateDepthBuffer, wQ._generateStencilBuffer = !!LQ.generateStencilBuffer, qQ.baseWidth = oQ, qQ.baseHeight = DQ, qQ.width = oQ, qQ.height = DQ, qQ.isReady = !0, qQ.samples = 1, qQ.generateMipMaps = !!LQ.generateMipMaps, qQ.samplingMode = LQ.samplingMode, qQ.type = LQ.type, this._internalTexturesCache.push(qQ), wQ
      }
      createMultiviewRenderTargetTexture(QQ, FQ) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const wQ = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: QQ,
            height: FQ
          }),
          LQ = new RF.d(this, 5, !0);
        return LQ.baseWidth = QQ, LQ.baseHeight = FQ, LQ.width = QQ, LQ.height = FQ, LQ.isMultiview = !0, LQ.isReady = !0, LQ.format = 5, LQ.samples = 1, wQ.setTextures(LQ), wQ
      }
      bindMultiviewFramebuffer(QQ) {
        this.bindFramebuffer(QQ, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(QQ, FQ) {
        const wQ = this._createHardwareRenderTargetWrapper(!1, !0, QQ),
          LQ = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...FQ
          };
        LQ.generateStencilBuffer = LQ.generateDepthBuffer && LQ.generateStencilBuffer, (1 !== LQ.type || this._caps.textureFloatLinearFiltering) && (2 !== LQ.type || this._caps.textureHalfFloatLinearFiltering) || (LQ.samplingMode = 1), wQ._generateDepthBuffer = LQ.generateDepthBuffer, wQ._generateStencilBuffer = !!LQ.generateStencilBuffer;
        const qQ = new RF.d(this, 5);
        return qQ.baseWidth = QQ, qQ.baseHeight = QQ, qQ.width = QQ, qQ.height = QQ, qQ.isReady = !0, qQ.isCube = !0, qQ.samples = 1, qQ.generateMipMaps = !!LQ.generateMipMaps, qQ.samplingMode = LQ.samplingMode, qQ.type = LQ.type, this._internalTexturesCache.push(qQ), wQ
      }
      updateTextureSamplingMode(QQ, FQ) {
        FQ.samplingMode = QQ
      }
      createRawTexture(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        let kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          vQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          mQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const uQ = new RF.d(this, 3);
        return uQ.baseWidth = FQ, uQ.baseHeight = wQ, uQ.width = FQ, uQ.height = wQ, uQ.format = LQ, uQ.generateMipMaps = qQ, uQ.samplingMode = DQ, uQ.invertY = oQ, uQ._compression = kQ, uQ.type = vQ, uQ._useSRGBBuffer = mQ, this._doNotHandleContextLost || (uQ._bufferView = QQ), uQ
      }
      updateRawTexture(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        QQ && (QQ._bufferView = FQ, QQ.format = wQ, QQ.invertY = LQ, QQ._compression = qQ, QQ.type = oQ, QQ._useSRGBBuffer = DQ)
      }
      bindFramebuffer(QQ, FQ, wQ, LQ, qQ) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = QQ, this._currentFramebuffer = null, this._cachedViewport && !qQ && this.setViewport(this._cachedViewport, wQ, LQ)
      }
      unBindFramebuffer(QQ) {
        let FQ = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, FQ && FQ(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(QQ) {
        const FQ = new Hw.c;
        return FQ.references = 1, FQ.MH = 1, FQ
      }
      updateDynamicTexture(QQ, FQ, wQ) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(QQ) {}
      updateDynamicIndexBuffer(QQ, FQ) {}
      updateDynamicVertexBuffer(QQ, FQ, wQ, LQ) {}
      _bindTextureDirectly(QQ, FQ) {
        return this._boundTexturesCache[this._activeChannel] !== FQ && (this._boundTexturesCache[this._activeChannel] = FQ, !0)
      }
      _bindTexture(QQ, FQ) {
        QQ < 0 || this._bindTextureDirectly(0, FQ)
      }
      _deleteBuffer(QQ) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(QQ) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(QQ, FQ, wQ, LQ, qQ) {}
      _uploadDataToTextureDirectly(QQ, FQ) {}
      _uploadArrayBufferViewToTexture(QQ, FQ) {}
      _uploadImageToTexture(QQ, FQ) {}
    }
    wQ(39445), wQ(39477), wQ(39436);
    async function ew(QQ) {
      const FQ = QQ.getInternalTexture();
      if (!FQ || 1 !== FQ.source) return null;
      if (FQ.invertY) {
        const FQ = QQ.iN()?.Wx();
        if (!(FQ instanceof tw)) return null
      }
      const wQ = FQ._buffer;
      let LQ, oQ = QQ.mimeType;
      try {
        wQ ? ArrayBuffer.isView(wQ) ? LQ = wQ.buffer.slice(wQ.byteOffset, wQ.byteOffset + wQ.byteLength) : wQ instanceof ArrayBuffer ? LQ = wQ : wQ instanceof Blob ? (LQ = await wQ.arrayBuffer(), oQ = wQ.type || oQ) : "string" === typeof wQ ? (LQ = await qQ.Tools.LoadFileAsync(wQ), oQ = (0, vQ.d)(wQ) || oQ) : "undefined" !== typeof HTMLImageElement && wQ instanceof HTMLImageElement && (LQ = await qQ.Tools.LoadFileAsync(wQ.src), oQ = (0, vQ.d)(wQ.src) || oQ) : (LQ = await qQ.Tools.LoadFileAsync(FQ.url), oQ = (0, vQ.d)(FQ.url) || oQ)
      } catch {
        return null
      }
      if (LQ && !oQ && FQ.url) {
        const QQ = FQ.url.match(/^data:([^;,]+)/);
        oQ = QQ ? QQ[1] : (0, vQ.d)(FQ.url)
      }
      return LQ && oQ ? {
        data: LQ,
        mimeType: oQ
      } : null
    }
    const Mw = 1e-6,
      Gw = new tQ.Color3(.04, .04, .04),
      pw = 1024,
      Cw = tQ.Color3.White(),
      Sw = tQ.Color3.BlackReadOnly;

    function iw(QQ) {
      switch (QQ) {
        case "image/jpeg":
        case "image/png":
        case "image/webp":
        case "image/avif":
        case "image/ktx2":
          return !0;
        default:
          return !1
      }
    }

    function Ww(QQ, FQ, wQ) {
      if (FQ < Gw.r) return 0;
      const LQ = Gw.r,
        qQ = QQ * wQ / (1 - Gw.r) + FQ - 2 * Gw.r,
        oQ = qQ * qQ - 4 * LQ * (Gw.r - FQ);
      return GQ.Clamp((-qQ + Math.sqrt(oQ)) / (2 * LQ), 0, 1)
    }

    function Rw(QQ) {
      const FQ = QQ.diffuseColor.toLinearSpace(QQ.iN().Wx().useExactSrgbConversions).scale(.5),
        wQ = QQ.alpha,
        LQ = function(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new jQ.n(0, 1),
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new jQ.n(0, .1),
            LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jQ.n(0, .1),
            qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new jQ.n(1300, .1);
          return function(QQ, FQ, wQ, LQ, qQ) {
            return (1 - QQ) * (1 - QQ) * (1 - QQ) * FQ + 3 * (1 - QQ) * (1 - QQ) * QQ * wQ + 3 * (1 - QQ) * QQ * QQ * LQ + QQ * QQ * QQ * qQ
          }(Math.pow(QQ / qQ.x, .333333), FQ.y, wQ.y, LQ.y, qQ.y)
        }(GQ.Clamp(QQ.specularPower, 0, pw));
      return {
        baseColorFactor: [FQ.r, FQ.g, FQ.b, wQ],
        metallicFactor: 0,
        roughnessFactor: LQ
      }
    }

    function Ow(QQ, FQ) {
      FQ.needAlphaBlending() ? QQ.alphaMode = "BLEND" : FQ.needAlphaTesting() && (QQ.alphaMode = "MASK", QQ.alphaCutoff = FQ.alphaCutOff)
    }

    function sw(QQ, FQ, wQ) {
      const LQ = new Uint8Array(QQ * FQ * 4);
      for (let qQ = 0; qQ < LQ.length; qQ += 4) LQ[qQ] = LQ[qQ + 1] = LQ[qQ + 2] = LQ[qQ + 3] = 255;
      return CQ.c.CreateRGBATexture(LQ, QQ, FQ, wQ)
    }

    function rw(QQ) {
      if (QQ instanceof Uint8Array) {
        const FQ = QQ.length,
          wQ = new Float32Array(QQ.length);
        for (let LQ = 0; LQ < FQ; ++LQ) wQ[LQ] = QQ[LQ] / 255;
        return wQ
      }
      if (QQ instanceof Float32Array) return QQ;
      throw new Error("Unsupported pixel format!")
    }
    class Iw {
      constructor(QQ) {
        this._exporter = QQ, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(QQ) {
        return QQ ? this._textureMap.get(QQ.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(QQ, FQ) {
        const wQ = Rw(QQ),
          LQ = {
            name: QQ.name
          };
        if (null == QQ.backFaceCulling || QQ.backFaceCulling || (QQ.twoSidedLighting || qQ.Tools.Warn(QQ.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), LQ.doubleSided = !0), FQ) {
          const FQ = [],
            qQ = QQ.diffuseTexture;
          qQ && FQ.push(this.exportTextureAsync(qQ).then((QQ => {
            QQ && (wQ.baseColorTexture = QQ)
          })));
          const oQ = QQ.bumpTexture;
          oQ && FQ.push(this.exportTextureAsync(oQ).then((QQ => {
            QQ && (LQ.normalTexture = QQ, 1 !== oQ.level && (LQ.normalTexture.scale = oQ.level))
          })));
          const DQ = QQ.emissiveTexture;
          DQ && (LQ.emissiveFactor = [1, 1, 1], FQ.push(this.exportTextureAsync(DQ).then((QQ => {
            QQ && (LQ.emissiveTexture = QQ)
          }))));
          const kQ = QQ.ambientTexture;
          kQ && FQ.push(this.exportTextureAsync(kQ).then((QQ => {
            if (QQ) {
              const FQ = {
                index: QQ.index
              };
              LQ.occlusionTexture = FQ
            }
          }))), FQ.length > 0 && (this._exporter._materialNeedsUVsSet.add(QQ), await Promise.all(FQ))
        }(QQ.alpha < 1 || QQ.opacityTexture) && (QQ.alphaMode === SQ.d.ALPHA_COMBINE ? LQ.alphaMode = "BLEND" : qQ.Tools.Warn(QQ.name + ": glTF 2.0 does not support alpha mode: " + QQ.alphaMode.toString())), QQ.emissiveColor && !QQ.emissiveColor.equalsWithEpsilon(Sw, Mw) && (LQ.emissiveFactor = QQ.emissiveColor.RLQ()), LQ.pbrMetallicRoughness = wQ, Ow(LQ, QQ), await this._finishMaterialAsync(LQ, QQ);
        const oQ = this._exporter._materials;
        return oQ.push(LQ), oQ.length - 1
      }
      async _finishMaterialAsync(QQ, FQ) {
        const wQ = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", QQ, FQ),
          LQ = [];
        for (const qQ of wQ) LQ.push(this.exportTextureAsync(qQ));
        await Promise.all(LQ), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", QQ, FQ)
      }
      _resizeTexturesToSameDimensions(QQ, FQ, wQ) {
        const LQ = QQ ? QQ.getSize() : {
            width: 0,
            height: 0
          },
          qQ = FQ ? FQ.getSize() : {
            width: 0,
            height: 0
          };
        let oQ, DQ;
        return LQ.width < qQ.width ? (oQ = QQ && QQ instanceof cQ.b ? pQ.e.CreateResizedCopy(QQ, qQ.width, qQ.height, !0) : sw(qQ.width, qQ.height, wQ), DQ = FQ) : LQ.width > qQ.width ? (DQ = FQ && FQ instanceof cQ.b ? pQ.e.CreateResizedCopy(FQ, LQ.width, LQ.height, !0) : sw(LQ.width, LQ.height, wQ), oQ = QQ) : (oQ = QQ, DQ = FQ), {
          texture1: oQ,
          texture2: DQ
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(QQ, FQ, wQ) {
        const LQ = new Array;
        if (!QQ && !FQ) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const qQ = QQ ? QQ.iN() : FQ ? FQ.iN() : null;
        if (qQ) {
          const oQ = this._resizeTexturesToSameDimensions(QQ, FQ, qQ),
            DQ = oQ.texture1?.getSize();
          let kQ, vQ;
          const mQ = DQ.width,
            uQ = DQ.height,
            HQ = await oQ.texture1.readPixels(),
            bQ = await oQ.texture2.readPixels();
          if (!HQ) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (kQ = rw(HQ), !bQ) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          vQ = rw(bQ);
          const YQ = vQ.byteLength,
            xQ = new Uint8Array(YQ),
            AQ = new Uint8Array(YQ),
            eQ = 4,
            MQ = new tQ.Color3(0, 0, 0);
          let GQ = 0,
            pQ = 0;
          for (let QQ = 0; QQ < uQ; ++QQ)
            for (let FQ = 0; FQ < mQ; ++FQ) {
              const LQ = (mQ * QQ + FQ) * eQ,
                DQ = {
                  diffuseColor: new tQ.Color3(kQ[LQ], kQ[LQ + 1], kQ[LQ + 2]).toLinearSpace(qQ.Wx().useExactSrgbConversions).multiply(wQ.diffuseColor),
                  specularColor: new tQ.Color3(vQ[LQ], vQ[LQ + 1], vQ[LQ + 2]).toLinearSpace(qQ.Wx().useExactSrgbConversions).multiply(wQ.specularColor),
                  glossiness: vQ[LQ + 3] * wQ.glossiness
                },
                uQ = this._convertSpecularGlossinessToMetallicRoughness(DQ);
              MQ.r = Math.max(MQ.r, uQ.baseColor.r), MQ.g = Math.max(MQ.g, uQ.baseColor.g), MQ.b = Math.max(MQ.b, uQ.baseColor.b), GQ = Math.max(GQ, uQ.metallic), pQ = Math.max(pQ, uQ.roughness), AQ[LQ] = 255 * uQ.baseColor.r, AQ[LQ + 1] = 255 * uQ.baseColor.g, AQ[LQ + 2] = 255 * uQ.baseColor.b, AQ[LQ + 3] = oQ.texture1.hasAlpha ? 255 * kQ[LQ + 3] : 255, xQ[LQ] = 0, xQ[LQ + 1] = 255 * uQ.roughness, xQ[LQ + 2] = 255 * uQ.metallic, xQ[LQ + 3] = 255
            }
          const cQ = {
            baseColor: MQ,
            metallic: GQ,
            roughness: pQ
          };
          let CQ = !1,
            SQ = !1;
          for (let QQ = 0; QQ < uQ; ++QQ)
            for (let FQ = 0; FQ < mQ; ++FQ) {
              const wQ = (mQ * QQ + FQ) * eQ;
              AQ[wQ] /= cQ.baseColor.r > Mw ? cQ.baseColor.r : 1, AQ[wQ + 1] /= cQ.baseColor.g > Mw ? cQ.baseColor.g : 1, AQ[wQ + 2] /= cQ.baseColor.b > Mw ? cQ.baseColor.b : 1;
              const LQ = tQ.Color3.FromInts(AQ[wQ], AQ[wQ + 1], AQ[wQ + 2]).toGammaSpace(qQ.Wx().useExactSrgbConversions);
              AQ[wQ] = 255 * LQ.r, AQ[wQ + 1] = 255 * LQ.g, AQ[wQ + 2] = 255 * LQ.b, LQ.equalsWithEpsilon(Cw, Mw) || (SQ = !0), xQ[wQ + 1] /= cQ.roughness > Mw ? cQ.roughness : 1, xQ[wQ + 2] /= cQ.metallic > Mw ? cQ.metallic : 1;
              tQ.Color3.FromInts(255, xQ[wQ + 1], xQ[wQ + 2]).equalsWithEpsilon(Cw, Mw) || (CQ = !0)
            }
          return CQ && LQ.push((0, iQ.EncodeImageAsync)(xQ, mQ, uQ).then((QQ => {
            cQ.metallicRoughnessTextureData = QQ
          }))), SQ && LQ.push((0, iQ.EncodeImageAsync)(AQ, mQ, uQ).then((QQ => {
            cQ.baseColorTextureData = QQ
          }))), await Promise.all(LQ).then((() => cQ))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(QQ) {
        const FQ = this._getPerceivedBrightness(QQ.diffuseColor),
          wQ = this._getPerceivedBrightness(QQ.specularColor),
          LQ = 1 - this._getMaxComponent(QQ.specularColor),
          qQ = Ww(FQ, wQ, LQ),
          oQ = QQ.diffuseColor.scale(LQ / (1 - Gw.r) / Math.max(1 - qQ, Mw)),
          DQ = QQ.specularColor.subtract(Gw.scale(1 - qQ)).scale(1 / Math.max(qQ, Mw));
        let kQ = tQ.Color3.Lerp(oQ, DQ, qQ * qQ);
        kQ = kQ.clampToRef(0, 1, kQ);
        return {
          baseColor: kQ,
          metallic: qQ,
          roughness: 1 - QQ.glossiness
        }
      }
      _getPerceivedBrightness(QQ) {
        return Math.sqrt(.299 * QQ.r * QQ.r + .587 * QQ.g * QQ.g + .114 * QQ.b * QQ.b)
      }
      _getMaxComponent(QQ) {
        return Math.max(QQ.r, Math.max(QQ.g, QQ.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        const mQ = [],
          uQ = {
            baseColor: QQ,
            metallic: FQ,
            roughness: wQ
          };
        if (vQ)
          if (DQ instanceof BF) {
            if (DQ.geometryOpacityTexture) {
              const QQ = LQ && LQ.getInternalTexture() ? LQ.getInternalTexture().uniqueId : 0,
                FQ = DQ.geometryOpacityTexture && DQ.geometryOpacityTexture.getInternalTexture() ? DQ.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                wQ = Number(`${QQ}${FQ}`),
                qQ = this._textureMap.get(wQ);
              qQ ? kQ.baseColorTexture = qQ : mQ.push(Dw("baseColorOpacityTexture", mw(LQ ? kw(LQ, 0) : vw(1), LQ ? kw(LQ, 1) : vw(1), LQ ? kw(LQ, 2) : vw(1), kw(DQ.geometryOpacityTexture, 0)), DQ.iN()).then((async QQ => {
                const FQ = await this.exportTextureAsync(QQ, wQ);
                FQ && (kQ.baseColorTexture = FQ)
              })))
            } else LQ && mQ.push(this.exportTextureAsync(LQ).then((QQ => {
              QQ && (kQ.baseColorTexture = QQ)
            })));
            if (DQ._useMetallicFromMetallicTextureBlue && qQ) mQ.push(this.exportTextureAsync(qQ).then((QQ => {
              QQ && (kQ.metallicRoughnessTexture = QQ)
            })));
            else if (oQ || qQ) {
              const QQ = qQ && qQ.getInternalTexture() ? qQ.getInternalTexture().uniqueId : 0,
                FQ = oQ && oQ.getInternalTexture() ? oQ.getInternalTexture().uniqueId : 0,
                wQ = Number(`${QQ}${FQ}`),
                LQ = this._textureMap.get(wQ);
              LQ ? kQ.metallicRoughnessTexture = LQ : mQ.push(Dw("MetalRoughTexture", mw(DQ.ambientOcclusionTexture ? kw(DQ.ambientOcclusionTexture, 0) : vw(1), oQ ? kw(oQ, 0) : vw(1), qQ ? kw(qQ, 0) : vw(1)), DQ.iN()).then((async QQ => {
                const FQ = await this.exportTextureAsync(QQ, wQ);
                FQ && (kQ.metallicRoughnessTexture = FQ)
              })))
            }
          } else LQ && mQ.push(this.exportTextureAsync(LQ).then((QQ => {
            QQ && (kQ.baseColorTexture = QQ)
          }))), qQ && mQ.push(this.exportTextureAsync(qQ).then((QQ => {
            QQ && (kQ.metallicRoughnessTexture = QQ)
          })));
        return mQ.length > 0 && (this._exporter._materialNeedsUVsSet.add(DQ), await Promise.all(mQ)), uQ
      }
      _getTextureSampler(QQ) {
        const FQ = {};
        if (!QQ || !(QQ instanceof cQ.b)) return FQ;
        const wQ = this._getGLTFTextureWrapMode(QQ.wrapU);
        10497 !== wQ && (FQ.wrapS = wQ);
        const LQ = this._getGLTFTextureWrapMode(QQ.wrapV);
        switch (10497 !== LQ && (FQ.wrapT = LQ), QQ.samplingMode) {
          case cQ.b.LINEAR_LINEAR:
            FQ.magFilter = 9729, FQ.minFilter = 9729;
            break;
          case cQ.b.LINEAR_NEAREST:
            FQ.magFilter = 9729, FQ.minFilter = 9728;
            break;
          case cQ.b.NEAREST_LINEAR:
            FQ.magFilter = 9728, FQ.minFilter = 9729;
            break;
          case cQ.b.NEAREST_LINEAR_MIPLINEAR:
            FQ.magFilter = 9728, FQ.minFilter = 9987;
            break;
          case cQ.b.NEAREST_NEAREST:
            FQ.magFilter = 9728, FQ.minFilter = 9728;
            break;
          case cQ.b.NEAREST_LINEAR_MIPNEAREST:
            FQ.magFilter = 9728, FQ.minFilter = 9985;
            break;
          case cQ.b.LINEAR_NEAREST_MIPNEAREST:
            FQ.magFilter = 9729, FQ.minFilter = 9984;
            break;
          case cQ.b.LINEAR_NEAREST_MIPLINEAR:
            FQ.magFilter = 9729, FQ.minFilter = 9986;
            break;
          case cQ.b.NEAREST_NEAREST_MIPLINEAR:
            FQ.magFilter = 9728, FQ.minFilter = 9986;
            break;
          case cQ.b.LINEAR_LINEAR_MIPLINEAR:
            FQ.magFilter = 9729, FQ.minFilter = 9987;
            break;
          case cQ.b.LINEAR_LINEAR_MIPNEAREST:
            FQ.magFilter = 9729, FQ.minFilter = 9985;
            break;
          case cQ.b.NEAREST_NEAREST_MIPNEAREST:
            FQ.magFilter = 9728, FQ.minFilter = 9984
        }
        return FQ
      }
      _getGLTFTextureWrapMode(QQ) {
        switch (QQ) {
          case cQ.b.WRAP_ADDRESSMODE:
            return 10497;
          case cQ.b.CLAMP_ADDRESSMODE:
            return 33071;
          case cQ.b.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return qQ.Tools.Error(`Unsupported Texture Wrap Mode ${QQ}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(QQ, FQ, wQ) {
        const LQ = {
            diffuseColor: QQ._albedoColor,
            specularColor: QQ._reflectivityColor,
            glossiness: QQ._microSurface
          },
          qQ = QQ._albedoTexture,
          oQ = QQ._reflectivityTexture,
          DQ = QQ._useMicroSurfaceFromReflectivityMapAlpha;
        if (oQ && !DQ) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((qQ || oQ) && wQ) {
          this._exporter._materialNeedsUVsSet.add(QQ);
          const wQ = this._exportTextureSampler(qQ || oQ),
            DQ = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(qQ, oQ, LQ),
            kQ = this._exporter._textures;
          if (DQ.baseColorTextureData) {
            const QQ = await this._exportImageAsync(`baseColor${kQ.length}`, DQ.baseColorTextureData);
            FQ.baseColorTexture = this._exportTextureInfo(QQ, wQ, qQ?.coordinatesIndex)
          }
          if (DQ.metallicRoughnessTextureData) {
            const QQ = await this._exportImageAsync(`metallicRoughness${kQ.length}`, DQ.metallicRoughnessTextureData);
            FQ.metallicRoughnessTexture = this._exportTextureInfo(QQ, wQ, oQ?.coordinatesIndex)
          }
          return DQ
        }
        return this._convertSpecularGlossinessToMetallicRoughness(LQ)
      }
      async exportPBRMaterialAsync(QQ, FQ) {
        const wQ = {},
          LQ = {
            name: QQ.name
          },
          qQ = QQ.isMetallicWorkflow();
        if (qQ) {
          const FQ = QQ._albedoColor,
            LQ = QQ.alpha;
          FQ && (wQ.baseColorFactor = [FQ.r, FQ.g, FQ.b, LQ])
        }
        const oQ = qQ ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(QQ._albedoColor, QQ._metallic, QQ._roughness, QQ._albedoTexture, QQ._metallicTexture, QQ._metallicTexture, QQ, wQ, FQ) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(QQ, wQ, FQ);
        await this._setMetallicRoughnessPbrMaterialAsync(oQ, QQ, LQ, wQ, FQ), await this._finishMaterialAsync(LQ, QQ);
        const DQ = this._exporter._materials;
        return DQ.push(LQ), DQ.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(QQ, FQ, wQ, LQ, oQ) {
        if (Ow(wQ, FQ), QQ.baseColor.equalsWithEpsilon(Cw, Mw) && GQ.WithinEpsilon(FQ.alpha, 1, Mw) || (LQ.baseColorFactor = [QQ.baseColor.r, QQ.baseColor.g, QQ.baseColor.b, FQ.alpha]), null != QQ.metallic && 1 !== QQ.metallic && (LQ.metallicFactor = QQ.metallic), null != QQ.roughness && 1 !== QQ.roughness && (LQ.roughnessFactor = QQ.roughness), null == FQ.backFaceCulling || FQ.backFaceCulling || (FQ._twoSidedLighting || qQ.Tools.Warn(FQ.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), wQ.doubleSided = !0), oQ) {
          const QQ = [],
            qQ = FQ instanceof CF ? FQ._bumpTexture : FQ.geometryNormalTexture;
          qQ && QQ.push(this.exportTextureAsync(qQ).then((QQ => {
            QQ && (wQ.normalTexture = QQ, 1 !== qQ.level && (wQ.normalTexture.scale = qQ.level))
          })));
          const oQ = FQ instanceof CF ? FQ._ambientTexture : FQ.ambientOcclusionTexture;
          oQ && QQ.push(new Promise((async QQ => {
            if (FQ instanceof BF && LQ.metallicRoughnessTexture) {
              const FQ = this._exportTextureSampler(oQ),
                wQ = this._exporter._textures[LQ.metallicRoughnessTexture.index].source,
                qQ = this._exportTextureInfo(wQ, FQ, oQ.coordinatesIndex);
              return this._textureMap.set(oQ.uniqueId, qQ), this._exporter._extensionsPostExportTextures("exporter", qQ, oQ), QQ(qQ)
            }
            return QQ(await this.exportTextureAsync(oQ))
          })).then((async QQ => {
            if (QQ) {
              const LQ = {
                index: QQ.index,
                texCoord: QQ.texCoord,
                extensions: QQ.extensions
              };
              wQ.occlusionTexture = LQ, LQ.strength = FQ instanceof CF ? FQ._ambientTextureStrength : FQ.ambientOcclusionTexture.level
            }
          })));
          const DQ = FQ instanceof CF ? FQ._emissiveTexture : FQ.emissionColorTexture;
          DQ && QQ.push(this.exportTextureAsync(DQ).then((QQ => {
            QQ && (wQ.emissiveTexture = QQ)
          }))), QQ.length > 0 && (this._exporter._materialNeedsUVsSet.add(FQ), await Promise.all(QQ))
        }
        const DQ = FQ instanceof CF ? FQ._emissiveColor : FQ.emissionColor;
        DQ.equalsWithEpsilon(Sw, Mw) || (wQ.emissiveFactor = DQ.RLQ()), wQ.pbrMetallicRoughness = LQ
      }
      async exportOpenPBRMaterialAsync(QQ, FQ) {
        const wQ = {},
          LQ = {
            name: QQ.name
          },
          qQ = QQ.baseColor,
          oQ = QQ.geometryOpacity;
        qQ && (wQ.baseColorFactor = [qQ.r, qQ.g, qQ.b, oQ]);
        const DQ = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(QQ.baseColor, QQ.baseMetalness, QQ.specularRoughness, QQ.baseColorTexture, QQ.baseMetalnessTexture, QQ.specularRoughnessTexture, QQ, wQ, FQ);
        await this._setMetallicRoughnessPbrMaterialAsync(DQ, QQ, LQ, wQ, FQ), await this._finishMaterialAsync(LQ, QQ);
        const kQ = this._exporter._materials;
        return kQ.push(LQ), kQ.length - 1
      }
      async exportTextureAsync(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = this._textureMap.get(FQ ?? QQ.uniqueId);
        if (wQ) return wQ;
        const LQ = this._exportTextureSampler(QQ),
          qQ = await this._exportTextureImageAsync(QQ);
        return wQ = this._exportTextureInfo(qQ, LQ, QQ.coordinatesIndex), this._textureMap.set(FQ ?? QQ.uniqueId, wQ), this._exporter._extensionsPostExportTextures("exporter", wQ, QQ), wQ
      }
      async _exportTextureImageAsync(QQ) {
        const FQ = QQ.mimeType ?? "none",
          wQ = this._internalTextureToImage,
          LQ = QQ.getInternalTexture().uniqueId;
        wQ[LQ] = wQ[LQ] || {};
        let oQ = wQ[LQ][FQ];
        return void 0 === oQ && (oQ = (async () => {
          const wQ = await ew(QQ);
          if (wQ && iw(wQ.mimeType) && ("none" === FQ || wQ.mimeType === FQ)) return await this._exportImageAsync(QQ.name, new Blob([wQ.data], {
            type: wQ.mimeType
          }));
          let LQ = "image/png";
          "none" !== FQ && (iw(FQ) ? LQ = FQ : (LQ = "image/png", qQ.Tools.Warn(`Unsupported media type: ${FQ}. Exporting texture as PNG.`)));
          const oQ = QQ.getSize(),
            DQ = await (0, pQ.d)(QQ),
            kQ = await (0, iQ.EncodeImageAsync)(DQ, oQ.width, oQ.height, LQ);
          return await this._exportImageAsync(QQ.name, kQ)
        })(), wQ[LQ][FQ] = oQ), await oQ
      }
      async _exportImageAsync(QQ, FQ) {
        const wQ = this._exporter._images;
        let LQ;
        if (this._exporter._shouldUseGlb) {
          LQ = {
            name: QQ,
            mimeType: FQ.type,
            bufferView: void 0
          };
          const wQ = await FQ.arrayBuffer(),
            qQ = this._exporter._bufferManager.createBufferView(new Uint8Array(wQ));
          this._exporter._bufferManager.setBufferView(LQ, qQ)
        } else {
          const oQ = QQ.replace(/\.\/|\/|\.\\|\\/g, "_"),
            DQ = function(QQ) {
              switch (QQ) {
                case "image/jpeg":
                  return ".jpg";
                case "image/png":
                  return ".png";
                case "image/webp":
                  return ".webp";
                case "image/avif":
                  return ".avif";
                case "image/ktx2":
                  return ".ktx2"
              }
            }(FQ.type);
          let kQ = oQ + DQ;
          wQ.some((QQ => QQ.uri === kQ)) && (kQ = `${oQ}_${qQ.Tools.RandomId()}${DQ}`), LQ = {
            name: QQ,
            uri: kQ
          }, this._exporter._imageData[kQ] = FQ
        }
        return wQ.push(LQ), wQ.length - 1
      }
      _exportTextureInfo(QQ, FQ, wQ) {
        const LQ = this._exporter._textures;
        let qQ = LQ.findIndex((wQ => wQ.sampler == FQ && wQ.source === QQ)); - 1 === qQ && (qQ = LQ.length, LQ.push({
          source: QQ,
          sampler: FQ
        }));
        const oQ = {
          index: qQ
        };
        return wQ && (oQ.texCoord = wQ), oQ
      }
      _exportTextureSampler(QQ) {
        const FQ = this._getTextureSampler(QQ),
          wQ = this._exporter._samplers,
          LQ = wQ.findIndex((QQ => QQ.minFilter === FQ.minFilter && QQ.magFilter === FQ.magFilter && QQ.wrapS === FQ.wrapS && QQ.wrapT === FQ.wrapT));
        return -1 !== LQ ? LQ : (wQ.push(FQ), wQ.length - 1)
      }
    }
    var Uw = wQ(39470),
      Nw = wQ(39633);
    (0, Nw.c)();
    var Tw = wQ(36705);
    const Kw = LQ.Matrix.Compose(new LQ.Ox(-1, 1, 1), LQ.Quaternion.Identity(), LQ.Ox.Zero());

    function zw(QQ, FQ) {
      if (!(QQ instanceof HQ.e)) return !1;
      if (FQ) {
        if (!QQ.getWorldMatrix().equalsWithEpsilon(LQ.Matrix.IdentityReadOnly, Tw.b)) return !1
      } else {
        if (!QQ.getWorldMatrix().multiplyToRef(Kw, LQ.TmpVectors.Matrix[0]).equalsWithEpsilon(LQ.Matrix.IdentityReadOnly, Tw.b)) return !1
      }
      return !(QQ instanceof bQ.e && QQ.geometry)
    }
    const lw = LQ.Ox.ZeroReadOnly,
      jw = LQ.Quaternion.Identity(),
      aw = LQ.Ox.OneReadOnly,
      Xw = new LQ.Ox(-1, 1, 1);

    function fw(QQ, FQ) {
      const {
        byteOffset: wQ,
        byteStride: LQ,
        type: qQ,
        normalized: oQ
      } = QQ, DQ = QQ.getSize(), kQ = FQ.reduce(((QQ, FQ) => FQ.getTotalVertices() > QQ ? FQ.getTotalVertices() : QQ), -Number.MAX_VALUE);
      return {
        byteOffset: wQ,
        byteStride: LQ,
        componentCount: DQ,
        type: qQ,
        count: kQ * DQ,
        normalized: oQ,
        totalVertices: kQ,
        kind: QQ.getKind()
      }
    }

    function Vw(QQ) {
      switch (QQ) {
        case "MAT2":
        case "VEC4":
          return 4;
        case "MAT3":
          return 9;
        case "MAT4":
          return 16;
        case "SCALAR":
          return 1;
        case "VEC2":
          return 2;
        case "VEC3":
          return 3
      }
    }

    function hw(QQ) {
      switch (QQ) {
        case uQ.d.PositionKind:
        case uQ.d.NormalKind:
        case uQ.d.TangentKind:
        case uQ.d.ColorKind:
        case uQ.d.MatricesIndicesKind:
        case uQ.d.MatricesIndicesExtraKind:
        case uQ.d.MatricesWeightsKind:
        case uQ.d.MatricesWeightsExtraKind:
        case uQ.d.UVKind:
        case uQ.d.UV2Kind:
        case uQ.d.UV3Kind:
        case uQ.d.UV4Kind:
        case uQ.d.UV5Kind:
        case uQ.d.UV6Kind:
          return !0
      }
      return !1
    }

    function Jw(QQ) {
      const FQ = Math.sqrt(QQ.x * QQ.x + QQ.y * QQ.y + QQ.z * QQ.z);
      FQ > 0 && (QQ.x /= FQ, QQ.y /= FQ, QQ.z /= FQ)
    }

    function Ew(QQ) {
      return QQ.x *= -1, QQ
    }

    function nw(QQ) {
      if (QQ.x * QQ.x + QQ.y * QQ.y > .5) {
        const FQ = Math.abs(QQ.x),
          wQ = Math.abs(QQ.y);
        if (FQ > wQ) {
          const wQ = Math.sign(QQ.x);
          QQ.x = FQ, QQ.y *= -wQ, QQ.z *= -wQ, QQ.w *= wQ
        } else {
          const FQ = Math.sign(QQ.y);
          QQ.x *= -FQ, QQ.y = wQ, QQ.z *= FQ, QQ.w *= -FQ
        }
      } else {
        const FQ = Math.abs(QQ.z),
          wQ = Math.abs(QQ.w);
        if (FQ > wQ) {
          const wQ = Math.sign(QQ.z);
          QQ.x *= -wQ, QQ.y *= wQ, QQ.z = FQ, QQ.w *= -wQ
        } else {
          const FQ = Math.sign(QQ.w);
          QQ.x *= FQ, QQ.y *= -FQ, QQ.z *= -FQ, QQ.w = wQ
        }
      }
      return QQ
    }

    function gw(QQ) {
      QQ.vQQ(-QQ.z, QQ.w, QQ.x, -QQ.y)
    }

    function Pw(QQ, FQ) {
      const wQ = LQ.Ox.FromArrayToRef(FQ.translation || [0, 0, 0], 0, LQ.TmpVectors.Ox[0]),
        qQ = LQ.Quaternion.FromArrayToRef(FQ.rotation || [0, 0, 0, 1], 0, LQ.TmpVectors.Quaternion[0]),
        oQ = LQ.Matrix.ComposeToRef(aw, qQ, wQ, LQ.TmpVectors.Matrix[0]),
        DQ = LQ.Ox.FromArrayToRef(QQ.translation || [0, 0, 0], 0, LQ.TmpVectors.Ox[2]),
        kQ = LQ.Quaternion.FromArrayToRef(QQ.rotation || [0, 0, 0, 1], 0, LQ.TmpVectors.Quaternion[1]),
        vQ = LQ.Matrix.ComposeToRef(aw, kQ, DQ, LQ.TmpVectors.Matrix[1]);
      oQ.multiplyToRef(vQ, vQ), vQ.decompose(void 0, qQ, wQ), wQ.equalsWithEpsilon(lw, Tw.b) ? delete FQ.translation : FQ.translation = wQ.RLQ(), qQ.equalsWithEpsilon(jw, Tw.b) ? delete FQ.rotation : FQ.rotation = qQ.RLQ(), FQ.scale && delete FQ.scale
    }

    function Zw(QQ, FQ) {
      if (!(FQ instanceof HQ.e)) return !1;
      if (!(1 === FQ.getChildren().length && 0 === QQ.getChildren().length && QQ.parent === FQ)) return !1;
      const wQ = QQ.iN(),
        LQ = QQ instanceof Nw.g && !wQ.useRightHandedSystem ? Xw : aw;
      return !!FQ.ck.equalsWithEpsilon(LQ, Tw.b) || (OQ.c.Warn(`Cannot collapse node ${QQ.name} into parent node ${FQ.name} with modified scaling.`), !1)
    }

    function yw(QQ) {
      if (QQ instanceof Array) {
        const FQ = new Float32Array(QQ);
        return new Uint8Array(FQ.buffer, FQ.byteOffset, FQ.byteLength)
      }
      return ArrayBuffer.isView(QQ) ? new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength) : new Uint8Array(QQ)
    }

    function Bw(QQ, FQ) {
      for (const [wQ, LQ] of Object.entries(QQ)) {
        const qQ = FQ[wQ];
        (Array.isArray(LQ) && Array.isArray(qQ) && dw(LQ, qQ) || LQ === qQ) && delete QQ[wQ]
      }
      return QQ
    }

    function dw(QQ, FQ) {
      return QQ.length === FQ.length && QQ.every(((QQ, wQ) => QQ === FQ[wQ]))
    }
    const QL = new Map([
      [Int8Array, (QQ, FQ, wQ) => QQ.setInt8(FQ, wQ)],
      [Uint8Array, (QQ, FQ, wQ) => QQ.setUint8(FQ, wQ)],
      [Uint8ClampedArray, (QQ, FQ, wQ) => QQ.setUint8(FQ, wQ)],
      [Int16Array, (QQ, FQ, wQ) => QQ.setInt16(FQ, wQ, !0)],
      [Uint16Array, (QQ, FQ, wQ) => QQ.setUint16(FQ, wQ, !0)],
      [Int32Array, (QQ, FQ, wQ) => QQ.setInt32(FQ, wQ, !0)],
      [Uint32Array, (QQ, FQ, wQ) => QQ.setUint32(FQ, wQ, !0)],
      [Float32Array, (QQ, FQ, wQ) => QQ.setFloat32(FQ, wQ, !0)],
      [Float64Array, (QQ, FQ, wQ) => QQ.setFloat64(FQ, wQ, !0)]
    ]);
    class FL {
      writeTypedArray(QQ) {
        this._checkGrowBuffer(QQ.byteLength);
        const FQ = QL.get(QQ.constructor);
        for (let wQ = 0; wQ < QQ.length; wQ++) FQ(this._dataView, this._byteOffset, QQ[wQ]), this._byteOffset += QQ.BYTES_PER_ELEMENT
      }
      constructor(QQ) {
        this._data = new Uint8Array(QQ), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(QQ) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, QQ), this._byteOffset++
      }
      writeInt8(QQ) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, QQ), this._byteOffset++
      }
      writeInt16(QQ) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, QQ, !0), this._byteOffset += 2
      }
      writeUInt16(QQ) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, QQ, !0), this._byteOffset += 2
      }
      writeInt32(QQ) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, QQ, !0), this._byteOffset += 4
      }
      writeUInt32(QQ) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, QQ, !0), this._byteOffset += 4
      }
      writeFloat32(QQ) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, QQ, !0), this._byteOffset += 4
      }
      writeFloat64(QQ) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, QQ, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(QQ) {
        const FQ = this.byteOffset + QQ;
        if (FQ > this._data.byteLength) {
          const QQ = new Uint8Array(2 * FQ);
          QQ.set(this._data), this._data = QQ, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function wL(QQ) {
      return QQ % 4 === 0 ? 4 : QQ % 2 === 0 ? 2 : 1
    }
    class LL {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(QQ) {
        let FQ = 0;
        this._bufferViewToData.forEach((QQ => {
          FQ += QQ.byteLength
        }));
        const wQ = new FL(FQ),
          LQ = Array.from(this._bufferViewToData.keys()).sort(((QQ, FQ) => wL(FQ.byteLength) - wL(QQ.byteLength)));
        for (const qQ of LQ) {
          qQ.byteOffset = wQ.byteOffset, QQ.push(qQ);
          const FQ = QQ.length - 1,
            LQ = this.getPropertiesWithBufferView(qQ);
          for (const QQ of LQ) QQ.bufferView = FQ;
          wQ.writeTypedArray(this._bufferViewToData.get(qQ)), this._bufferViewToData.delete(qQ)
        }
        return wQ.getOutputData()
      }
      createBufferView(QQ, FQ) {
        const wQ = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: QQ.byteLength,
          byteStride: FQ
        };
        return this._bufferViewToData.set(wQ, QQ), wQ
      }
      createAccessor(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        this._verifyBufferView(QQ);
        const kQ = {
          bufferView: void 0,
          componentType: wQ,
          count: LQ,
          type: FQ,
          min: oQ?.min,
          max: oQ?.max,
          normalized: DQ,
          byteOffset: qQ
        };
        return this.setBufferView(kQ, QQ), this._accessorToBufferView.set(kQ, QQ), kQ
      }
      setBufferView(QQ, FQ) {
        this._verifyBufferView(FQ);
        this.getPropertiesWithBufferView(FQ).push(QQ)
      }
      removeBufferView(QQ) {
        const FQ = this.getPropertiesWithBufferView(QQ);
        for (const wQ of FQ) void 0 !== wQ.bufferView && delete wQ.bufferView;
        this._bufferViewToData.delete(QQ), this._bufferViewToProperties.delete(QQ), this._accessorToBufferView.forEach(((FQ, wQ) => {
          FQ === QQ && (void 0 !== wQ.byteOffset && delete wQ.byteOffset, this._accessorToBufferView.delete(wQ))
        }))
      }
      getBufferView(QQ) {
        const FQ = this._accessorToBufferView.get(QQ);
        return this._verifyBufferView(FQ), FQ
      }
      getPropertiesWithBufferView(QQ) {
        return this._verifyBufferView(QQ), this._bufferViewToProperties.set(QQ, this._bufferViewToProperties.get(QQ) ?? []), this._bufferViewToProperties.get(QQ)
      }
      getData(QQ) {
        return this._verifyBufferView(QQ), this._bufferViewToData.get(QQ)
      }
      _verifyBufferView(QQ) {
        if (void 0 === QQ || !this._bufferViewToData.has(QQ)) throw new Error(`BufferView ${QQ} not found in BufferManager.`)
      }
    }
    var qL = wQ(39642);
    (0, qL.g)();
    var oL = wQ(39870);
    (0, oL.f)();
    var DL = wQ(39692),
      kL = wQ(40506);
    (0, kL.h)();
    let vL = (() => {
      var QQ;
      let FQ, wQ, LQ = [],
        qQ = [],
        oQ = [],
        DQ = [];
      return QQ = class {
        get influence() {
          return this._influence
        }
        set influence(QQ) {
          if (this._influence === QQ) return;
          const FQ = this._influence;
          this._influence = QQ, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === FQ || 0 === QQ)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(QQ) {
          this._animationPropertiesOverride = QQ
        }
        constructor(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            kQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = QQ, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Qw.e, this._onDataLayoutChanged = new Qw.e, this.id = (0, WQ.l)(this, LQ, void 0), this.morphTargetManager = ((0, WQ.l)(this, qQ), (0, WQ.l)(this, oQ, null)), this._animationPropertiesOverride = ((0, WQ.l)(this, DQ), null), this.id = QQ, this.morphTargetManager = kQ, this._scene = wQ || AQ.d.LastCreatedScene, this.influence = FQ, this._scene && (this._uniqueId = this._scene.getUniqueId())
        }
        get uniqueId() {
          return this._uniqueId
        }
        get hasPositions() {
          return !!this._positions
        }
        get hasNormals() {
          return !!this._normals
        }
        get hasTangents() {
          return !!this._tangents
        }
        get hasUVs() {
          return !!this._uvs
        }
        get hasUV2s() {
          return !!this._uv2s
        }
        get hasColors() {
          return !!this._colors
        }
        get vertexCount() {
          return this._positions ? this._positions.length / 3 : this._normals ? this._normals.length / 3 : this._tangents ? this._tangents.length / 3 : this._uvs ? this._uvs.length / 2 : this._uv2s ? this._uv2s.length / 2 : this._colors ? this._colors.length / 4 : 0
        }
        wkQ(QQ) {
          const FQ = this.hasPositions;
          this._positions = QQ, FQ !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(QQ) {
          const FQ = this.hasNormals;
          this._normals = QQ, FQ !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(QQ) {
          const FQ = this.hasTangents;
          this._tangents = QQ, FQ !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(QQ) {
          const FQ = this.hasUVs;
          this._uvs = QQ, FQ !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(QQ) {
          const FQ = this.hasUV2s;
          this._uv2s = QQ, FQ !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(QQ) {
          const FQ = this.hasColors;
          this._colors = QQ, FQ !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const FQ = SF.c.Clone((() => new QQ(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return FQ._positions = this._positions, FQ._normals = this._normals, FQ._tangents = this._tangents, FQ._uvs = this._uvs, FQ._uv2s = this._uv2s, FQ._colors = this._colors, FQ
        }
        serialize() {
          const QQ = {};
          return QQ.name = this.name, QQ.influence = this.influence, null != this.id && (QQ.id = this.id), QQ.uniqueId = this.uniqueId, QQ.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (QQ.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (QQ.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (QQ.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (QQ.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (QQ.colors = Array.prototype.slice.call(this.getColors())), SF.c.AppendSerializedAnimations(this, QQ), QQ
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(FQ, wQ) {
          let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const qQ = new QQ(FQ.name, FQ.influence, wQ, LQ);
          if (qQ.wkQ(FQ.positions), null != FQ.id && (qQ.id = FQ.id), FQ.normals && qQ.setNormals(FQ.normals), FQ.tangents && qQ.setTangents(FQ.tangents), FQ.uvs && qQ.setUVs(FQ.uvs), FQ.uv2s && qQ.setUV2s(FQ.uv2s), FQ.colors && qQ.setColors(FQ.colors), FQ.animations) {
            for (let QQ = 0; QQ < FQ.animations.length; QQ++) {
              const wQ = FQ.animations[QQ],
                LQ = (0, fF.b)("BABYLON.Animation");
              LQ && qQ.animations.push(LQ.Parse(wQ))
            }
            FQ.autoAnimate && wQ && wQ.beginAnimation(qQ, FQ.autoAnimateFrom, FQ.autoAnimateTo, FQ.autoAnimateLoop, FQ.autoAnimateSpeed || 1)
          }
          return qQ
        }
        static FromMesh(FQ, wQ, LQ) {
          wQ || (wQ = FQ.name);
          const qQ = new QQ(wQ, LQ, FQ.iN(), FQ.morphTargetManager);
          return qQ.wkQ(FQ.getVerticesData(aQ.h.PositionKind)), FQ.isVerticesDataPresent(aQ.h.NormalKind) && qQ.setNormals(FQ.getVerticesData(aQ.h.NormalKind)), FQ.isVerticesDataPresent(aQ.h.TangentKind) && qQ.setTangents(FQ.getVerticesData(aQ.h.TangentKind)), FQ.isVerticesDataPresent(aQ.h.UVKind) && qQ.setUVs(FQ.getVerticesData(aQ.h.UVKind)), FQ.isVerticesDataPresent(aQ.h.UV2Kind) && qQ.setUV2s(FQ.getVerticesData(aQ.h.UV2Kind)), FQ.isVerticesDataPresent(aQ.h.ColorKind) && qQ.setColors(FQ.getVerticesData(aQ.h.ColorKind)), qQ
        }
      }, (() => {
        const kQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [(0, RQ.I)()], wQ = [(0, RQ.I)()], (0, WQ.i)(null, null, FQ, {
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
          metadata: kQ
        }, LQ, qQ), (0, WQ.i)(null, null, wQ, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: QQ => "morphTargetManager" in QQ,
            get: QQ => QQ.morphTargetManager,
            set: (QQ, FQ) => {
              QQ.morphTargetManager = FQ
            }
          },
          metadata: kQ
        }, oQ, DQ), kQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kQ
        })
      })(), QQ
    })();
    var mL, uL = wQ(40563),
      HL = wQ(39690);
    ! function(QQ) {
      QQ[QQ.INTANGENT = 0] = "INTANGENT", QQ[QQ.OUTTANGENT = 1] = "OUTTANGENT"
    }(mL || (mL = {}));
    class bL {
      static _IsTransformable(QQ) {
        return QQ && (QQ instanceof HQ.e || QQ instanceof qL.e || QQ instanceof HL.c)
      }
      static _CreateNodeAnimation(QQ, FQ, wQ, LQ, oQ) {
        if (this._IsTransformable(QQ)) {
          const DQ = [],
            kQ = [],
            vQ = FQ.getKeys(),
            mQ = bL._CalculateMinMaxKeyFrames(vQ),
            uQ = bL._DeduceInterpolation(vQ, wQ, LQ),
            HQ = uQ.interpolationType,
            bQ = uQ.shouldBakeAnimation;
          if (bQ ? bL._CreateBakedAnimation(QQ, FQ, wQ, mQ.min, mQ.max, FQ.framePerSecond, oQ, DQ, kQ, mQ, LQ) : "LINEAR" === HQ || "STEP" === HQ ? bL._CreateLinearOrStepAnimation(QQ, FQ, wQ, DQ, kQ, LQ) : "CUBICSPLINE" === HQ ? bL._CreateCubicSplineAnimation(QQ, FQ, wQ, DQ, kQ, LQ) : bL._CreateBakedAnimation(QQ, FQ, wQ, mQ.min, mQ.max, FQ.framePerSecond, oQ, DQ, kQ, mQ, LQ), DQ.length && kQ.length) {
            return {
              inputs: DQ,
              outputs: kQ,
              samplerInterpolation: HQ,
              inputsMin: bQ ? mQ.min : qQ.Tools.FloatRound(mQ.min / FQ.framePerSecond),
              inputsMax: bQ ? mQ.max : qQ.Tools.FloatRound(mQ.max / FQ.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(QQ) {
        let FQ = null,
          wQ = "VEC3",
          LQ = !1;
        const oQ = QQ.targetProperty.split(".");
        switch (oQ[0]) {
          case "ck":
            FQ = "scale";
            break;
          case "position":
            FQ = "translation";
            break;
          case "rotation":
            wQ = "VEC4", FQ = "rotation";
            break;
          case "rotationQuaternion":
            wQ = "VEC4", LQ = !0, FQ = "rotation";
            break;
          case "influence":
            wQ = "SCALAR", FQ = "weights";
            break;
          default:
            qQ.Tools.Error(`Unsupported animatable property ${oQ[0]}`)
        }
        return FQ ? {
          animationChannelTargetPath: FQ,
          dataAccessorType: wQ,
          useQuaternion: LQ
        } : (qQ.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
        let HQ;
        if (bL._IsTransformable(QQ) && QQ.animations)
          for (const bQ of QQ.animations) {
            if (uQ && !uQ(bQ)) continue;
            const qQ = bL._DeduceAnimationInfo(bQ);
            qQ && (HQ = {
              name: bQ.name,
              samplers: [],
              channels: []
            }, bL._AddAnimation(`${bQ.name}`, bQ.hasRunningRuntimeAnimations ? FQ : HQ, QQ, bQ, qQ.dataAccessorType, qQ.animationChannelTargetPath, LQ, oQ, DQ, kQ, qQ.useQuaternion, vQ, mQ), HQ.samplers.length && HQ.channels.length && wQ.push(HQ))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
        let HQ;
        if (QQ instanceof uL.c) {
          const qQ = QQ.morphTargetManager;
          if (qQ)
            for (let bQ = 0; bQ < qQ.numTargets; ++bQ) {
              const YQ = qQ.getTarget(bQ);
              for (const xQ of YQ.animations) {
                if (uQ && !uQ(xQ)) continue;
                const YQ = new kL.d(`${xQ.name}`, "influence", xQ.framePerSecond, xQ.dataType, xQ.xQ, xQ.enableBlending),
                  AQ = [],
                  tQ = xQ.getKeys();
                for (let QQ = 0; QQ < tQ.length; ++QQ) {
                  const FQ = tQ[QQ];
                  for (let QQ = 0; QQ < qQ.numTargets; ++QQ) QQ == bQ ? AQ.push(FQ) : AQ.push({
                    frame: FQ.frame,
                    value: 0
                  })
                }
                YQ.setKeys(AQ, !0);
                const eQ = bL._DeduceAnimationInfo(YQ);
                eQ && (HQ = {
                  name: YQ.name,
                  samplers: [],
                  channels: []
                }, bL._AddAnimation(xQ.name, xQ.hasRunningRuntimeAnimations ? FQ : HQ, QQ, YQ, eQ.dataAccessorType, eQ.animationChannelTargetPath, LQ, oQ, DQ, kQ, eQ.useQuaternion, vQ, mQ, qQ.numTargets), HQ.samplers.length && HQ.channels.length && wQ.push(HQ))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
        let uQ;
        if (QQ.animationGroups) {
          const HQ = QQ.animationGroups;
          for (const bQ of HQ) {
            const HQ = new Map,
              YQ = new Map,
              xQ = new Set,
              AQ = bQ.to - bQ.from;
            uQ = {
              name: bQ.name,
              channels: [],
              samplers: []
            };
            for (let FQ = 0; FQ < bQ.targetedAnimations.length; ++FQ) {
              const mQ = bQ.targetedAnimations[FQ],
                AQ = mQ.target,
                tQ = mQ.animation;
              if (vQ && !vQ(tQ)) continue;
              const eQ = kQ.has(AQ);
              if (this._IsTransformable(AQ) || 1 === AQ.length && this._IsTransformable(AQ[0])) {
                const QQ = bL._DeduceAnimationInfo(mQ.animation);
                if (QQ) {
                  const FQ = this._IsTransformable(AQ) ? AQ : this._IsTransformable(AQ[0]) ? AQ[0] : null;
                  FQ && bL._AddAnimation(`${tQ.name}`, uQ, FQ, tQ, QQ.dataAccessorType, QQ.animationChannelTargetPath, wQ, LQ, qQ, oQ, QQ.useQuaternion, DQ, eQ)
                }
              } else if (AQ instanceof vL || 1 === AQ.length && AQ[0] instanceof vL) {
                if (bL._DeduceAnimationInfo(mQ.animation)) {
                  const FQ = AQ instanceof vL ? AQ : AQ[0];
                  if (FQ) {
                    const wQ = QQ.morphTargetManagers.find((QQ => {
                      for (let wQ = 0; wQ < QQ.numTargets; ++wQ)
                        if (QQ.getTarget(wQ) === FQ) return !0;
                      return !1
                    }));
                    if (wQ) {
                      const LQ = QQ.meshes.find((QQ => QQ.morphTargetManager === wQ));
                      LQ && (HQ.has(LQ) || HQ.set(LQ, new Map), HQ.get(LQ)?.set(FQ, tQ), xQ.add(LQ), YQ.set(LQ, tQ))
                    }
                  }
                }
              }
            }
            xQ.forEach((QQ => {
              const FQ = QQ.morphTargetManager;
              let kQ = null;
              const vQ = [],
                mQ = YQ.get(QQ).getKeys(),
                xQ = mQ.length;
              for (let wQ = 0; wQ < xQ; ++wQ)
                for (let LQ = 0; LQ < FQ.numTargets; ++LQ) {
                  const qQ = FQ.getTarget(LQ),
                    oQ = HQ.get(QQ);
                  if (oQ) {
                    const FQ = oQ.get(qQ);
                    FQ ? (kQ || (kQ = new kL.d(`${bQ.name}_${QQ.name}_MorphWeightAnimation`, "influence", FQ.framePerSecond, kL.d.ANIMATIONTYPE_FLOAT, FQ.xQ, FQ.enableBlending)), vQ.push(FQ.getKeys()[wQ])) : vQ.push({
                      frame: bQ.from + AQ / xQ * wQ,
                      value: qQ.influence,
                      inTangent: mQ[0].inTangent ? 0 : void 0,
                      outTangent: mQ[0].outTangent ? 0 : void 0
                    })
                  }
                }
              kQ.setKeys(vQ, !0);
              const tQ = bL._DeduceAnimationInfo(kQ);
              tQ && bL._AddAnimation(`${bQ.name}_${QQ.name}_MorphWeightAnimation`, uQ, QQ, kQ, tQ.dataAccessorType, tQ.animationChannelTargetPath, wQ, LQ, qQ, oQ, tQ.useQuaternion, DQ, !1, FQ?.numTargets)
            })), uQ.channels.length && uQ.samplers.length && (mQ?.set(bQ, FQ.length), FQ.push(uQ))
          }
        }
      }
      static _AddAnimation(QQ, FQ, wQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ) {
        const AQ = bL._CreateNodeAnimation(wQ, qQ, DQ, HQ, bQ);
        let tQ, eQ, MQ, GQ, pQ, cQ;
        if (AQ) {
          if (xQ) {
            let QQ, FQ = 0;
            const wQ = [];
            for (; AQ.inputs.length > 0;) QQ = AQ.inputs.shift(), FQ % xQ == 0 && wQ.push(QQ), FQ++;
            AQ.inputs = wQ
          }
          const QQ = kQ.get(wQ),
            qQ = new Float32Array(AQ.inputs);
          tQ = vQ.createBufferView(qQ), eQ = vQ.createAccessor(tQ, "SCALAR", 5126, AQ.inputs.length, void 0, {
            min: [AQ.inputsMin],
            max: [AQ.inputsMax]
          }), uQ.push(eQ), MQ = uQ.length - 1;
          const mQ = new LQ.Quaternion,
            HQ = new LQ.Ox,
            bQ = new LQ.Ox,
            CQ = wQ instanceof qL.e,
            SQ = Vw(oQ),
            iQ = new Float32Array(AQ.outputs.length * SQ);
          AQ.outputs.forEach((function(QQ, FQ) {
            let wQ = QQ;
            switch (DQ) {
              case "translation":
                YQ && (LQ.Ox.FromArrayToRef(QQ, 0, bQ), Ew(bQ), bQ.toArray(wQ));
                break;
              case "rotation":
                4 === QQ.length ? LQ.Quaternion.FromArrayToRef(QQ, 0, mQ) : (wQ = new Array(4), LQ.Ox.FromArrayToRef(QQ, 0, HQ), LQ.Quaternion.FromEulerVectorToRef(HQ, mQ)), YQ && (nw(mQ), CQ && gw(mQ)), mQ.toArray(wQ)
            }
            iQ.set(wQ, FQ * SQ)
          })), tQ = vQ.createBufferView(iQ), eQ = vQ.createAccessor(tQ, oQ, 5126, AQ.outputs.length), uQ.push(eQ), GQ = uQ.length - 1, pQ = {
            interpolation: AQ.samplerInterpolation,
            input: MQ,
            output: GQ
          }, FQ.samplers.push(pQ), cQ = {
            sampler: FQ.samplers.length - 1,
            target: {
              node: QQ,
              path: DQ
            }
          }, FQ.channels.push(cQ)
        }
      }
      static _CreateBakedAnimation(QQ, FQ, wQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ) {
        let YQ;
        const xQ = LQ.Quaternion.Identity();
        let AQ, tQ, eQ, MQ, GQ, pQ = null,
          cQ = null;
        HQ.min = qQ.Tools.FloatRound(oQ / kQ);
        const CQ = FQ.getKeys();
        for (let LQ = 0, SQ = CQ.length; LQ < SQ; ++LQ) {
          if (tQ = CQ[LQ], LQ + 1 < SQ)
            if (eQ = CQ[LQ + 1], tQ.value.equals && tQ.value.equals(eQ.value) || tQ.value === eQ.value) {
              if (0 !== LQ) continue;
              GQ = tQ.frame
            } else GQ = eQ.frame;
          else {
            if (MQ = CQ[LQ - 1], tQ.value.equals && tQ.value.equals(MQ.value) || tQ.value === MQ.value) continue;
            GQ = DQ
          }
          if (GQ)
            for (let LQ = tQ.frame; LQ <= GQ; LQ += vQ) {
              if (AQ = qQ.Tools.FloatRound(LQ / kQ), AQ === pQ) continue;
              pQ = AQ, cQ = AQ;
              const oQ = {
                key: 0,
                repeatCount: 0,
                xQ: FQ.xQ
              };
              YQ = FQ._interpolate(LQ, oQ), bL._SetInterpolatedValue(QQ, YQ, AQ, FQ, wQ, xQ, mQ, uQ, bQ)
            }
        }
        cQ && (HQ.max = cQ)
      }
      static _ConvertFactorToVector3OrQuaternion(QQ, FQ, wQ, oQ, DQ) {
        const kQ = bL._GetBasePositionRotationOrScale(FQ, oQ, DQ),
          vQ = wQ.targetProperty.split("."),
          mQ = vQ ? vQ[1] : "",
          uQ = DQ ? LQ.Quaternion.FromArray(kQ).normalize() : LQ.Ox.FromArray(kQ);
        switch (mQ) {
          case "x":
          case "y":
          case "z":
            uQ[mQ] = QQ;
            break;
          case "w":
            uQ.w = QQ;
            break;
          default:
            qQ.Tools.Error(`glTFAnimation: Unsupported component name "${mQ}"!`)
        }
        return uQ
      }
      static _SetInterpolatedValue(QQ, FQ, wQ, qQ, oQ, DQ, kQ, vQ, mQ) {
        let uQ;
        kQ.push(wQ), "weights" !== oQ ? (qQ.dataType === kL.d.ANIMATIONTYPE_FLOAT && (FQ = this._ConvertFactorToVector3OrQuaternion(FQ, QQ, qQ, oQ, mQ)), "rotation" === oQ ? (mQ ? DQ = FQ : (uQ = FQ, LQ.Quaternion.RotationYawPitchRollToRef(uQ.y, uQ.x, uQ.z, DQ)), vQ.push(DQ.RLQ())) : (uQ = FQ, vQ.push(uQ.RLQ()))) : vQ.push([FQ])
      }
      static _CreateLinearOrStepAnimation(QQ, FQ, wQ, LQ, qQ, oQ) {
        for (const DQ of FQ.getKeys()) LQ.push(DQ.frame / FQ.framePerSecond), bL._AddKeyframeValue(DQ, FQ, qQ, wQ, QQ, oQ)
      }
      static _CreateCubicSplineAnimation(QQ, FQ, wQ, LQ, qQ, oQ) {
        FQ.getKeys().forEach((function(DQ) {
          LQ.push(DQ.frame / FQ.framePerSecond), bL._AddSplineTangent(mL.INTANGENT, qQ, wQ, "CUBICSPLINE", DQ, oQ), bL._AddKeyframeValue(DQ, FQ, qQ, wQ, QQ, oQ), bL._AddSplineTangent(mL.OUTTANGENT, qQ, wQ, "CUBICSPLINE", DQ, oQ)
        }))
      }
      static _GetBasePositionRotationOrScale(QQ, FQ, wQ) {
        let qQ;
        if ("rotation" === FQ)
          if (wQ) {
            qQ = (QQ.rotationQuaternion ?? LQ.Quaternion.Identity()).RLQ()
          } else {
            qQ = (QQ.rotation ?? LQ.Ox.Zero()).RLQ()
          }
        else if ("translation" === FQ) {
          qQ = (QQ.position ?? LQ.Ox.Zero()).RLQ()
        } else {
          qQ = (QQ.ck ?? LQ.Ox.One()).RLQ()
        }
        return qQ
      }
      static _AddKeyframeValue(QQ, FQ, wQ, oQ, DQ, kQ) {
        let vQ;
        const mQ = FQ.dataType;
        if (mQ === kL.d.ANIMATIONTYPE_VECTOR3) {
          let FQ = QQ.value.RLQ();
          if ("rotation" === oQ) {
            const QQ = LQ.Ox.FromArray(FQ);
            FQ = LQ.Quaternion.RotationYawPitchRoll(QQ.y, QQ.x, QQ.z).RLQ()
          }
          wQ.push(FQ)
        } else if (mQ === kL.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === oQ) wQ.push([QQ.value]);
          else if (vQ = this._ConvertFactorToVector3OrQuaternion(QQ.value, DQ, FQ, oQ, kQ), vQ) {
            if ("rotation" === oQ) {
              const QQ = kQ ? vQ : LQ.Quaternion.RotationYawPitchRoll(vQ.y, vQ.x, vQ.z).normalize();
              wQ.push(QQ.RLQ())
            }
            wQ.push(vQ.RLQ())
          }
        } else mQ === kL.d.ANIMATIONTYPE_QUATERNION ? wQ.push(QQ.value.normalize().RLQ()) : qQ.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(QQ, FQ, wQ) {
        let LQ, qQ, oQ = !1;
        if ("rotation" === FQ && !wQ) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let DQ = 0, kQ = QQ.length; DQ < kQ; ++DQ)
          if (qQ = QQ[DQ], qQ.inTangent || qQ.outTangent)
            if (LQ) {
              if ("CUBICSPLINE" !== LQ) {
                LQ = "LINEAR", oQ = !0;
                break
              }
            } else LQ = "CUBICSPLINE";
        else if (LQ) {
          if ("CUBICSPLINE" === LQ || qQ.interpolation && 1 === qQ.interpolation && "STEP" !== LQ) {
            LQ = "LINEAR", oQ = !0;
            break
          }
        } else LQ = qQ.interpolation && 1 === qQ.interpolation ? "STEP" : "LINEAR";
        return LQ || (LQ = "LINEAR"), {
          interpolationType: LQ,
          shouldBakeAnimation: oQ
        }
      }
      static _AddSplineTangent(QQ, FQ, wQ, qQ, oQ, DQ) {
        let kQ;
        const vQ = QQ === mL.INTANGENT ? oQ.inTangent : oQ.outTangent;
        if ("CUBICSPLINE" === qQ) {
          if ("rotation" === wQ)
            if (vQ)
              if (DQ) kQ = vQ.RLQ();
              else {
                const QQ = vQ;
                kQ = LQ.Quaternion.RotationYawPitchRoll(QQ.y, QQ.x, QQ.z).RLQ()
              }
          else kQ = [0, 0, 0, 0];
          else kQ = "weights" === wQ ? vQ ? [vQ] : [0] : vQ ? vQ.RLQ() : [0, 0, 0];
          FQ.push(kQ)
        }
      }
      static _CalculateMinMaxKeyFrames(QQ) {
        let FQ = 1 / 0,
          wQ = -1 / 0;
        return QQ.forEach((function(QQ) {
          FQ = Math.min(FQ, QQ.frame), wQ = Math.max(wQ, QQ.frame)
        })), {
          min: FQ,
          max: wQ
        }
      }
    }

    function YL(QQ, FQ, wQ, oQ, DQ, kQ) {
      const vQ = {
          attributes: {},
          influence: QQ.influence,
          name: QQ.name
        },
        mQ = FQ.geometry;
      if (!mQ) return qQ.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), vQ;
      const HQ = kQ ? -1 : 1,
        bQ = LQ.Ox.Zero();
      let YQ, xQ;
      if (QQ.hasPositions) {
        const oQ = QQ.getPositions(),
          kQ = mQ.getVerticesData(uQ.d.PositionKind);
        if (kQ) {
          const QQ = new Float32Array(kQ.length),
            FQ = [1 / 0, 1 / 0, 1 / 0],
            qQ = [-1 / 0, -1 / 0, -1 / 0];
          xQ = kQ.length / 3, YQ = 0;
          for (let wQ = YQ; wQ < xQ; ++wQ) {
            const DQ = LQ.Ox.FromArray(kQ, 3 * wQ);
            LQ.Ox.FromArray(oQ, 3 * wQ).subtractToRef(DQ, bQ), bQ.x *= HQ, FQ[0] = Math.min(FQ[0], bQ.x), qQ[0] = Math.max(qQ[0], bQ.x), FQ[1] = Math.min(FQ[1], bQ.y), qQ[1] = Math.max(qQ[1], bQ.y), FQ[2] = Math.min(FQ[2], bQ.z), qQ[2] = Math.max(qQ[2], bQ.z), QQ[3 * wQ] = bQ.x, QQ[3 * wQ + 1] = bQ.y, QQ[3 * wQ + 2] = bQ.z
          }
          const mQ = wQ.createBufferView(QQ, 12),
            uQ = wQ.createAccessor(mQ, "VEC3", 5126, oQ.length / 3, 0, {
              min: FQ,
              max: qQ
            });
          DQ.push(uQ), vQ.attributes.POSITION = DQ.length - 1
        } else qQ.Tools.Warn(`Morph target positions for mesh ${FQ.name} were not exported. Mesh does not have position vertex data`)
      }
      if (QQ.hasNormals) {
        const oQ = QQ.getNormals(),
          kQ = mQ.getVerticesData(uQ.d.NormalKind);
        if (kQ) {
          const QQ = new Float32Array(kQ.length);
          xQ = kQ.length / 3, YQ = 0;
          for (let wQ = YQ; wQ < xQ; ++wQ) {
            const FQ = LQ.Ox.FromArray(kQ, 3 * wQ).normalize();
            LQ.Ox.FromArray(oQ, 3 * wQ).normalize().subtractToRef(FQ, bQ), QQ[3 * wQ] = bQ.x * HQ, QQ[3 * wQ + 1] = bQ.y, QQ[3 * wQ + 2] = bQ.z
          }
          const FQ = wQ.createBufferView(QQ, 12),
            qQ = wQ.createAccessor(FQ, "VEC3", 5126, oQ.length / 3, 0);
          DQ.push(qQ), vQ.attributes.NORMAL = DQ.length - 1
        } else qQ.Tools.Warn(`Morph target normals for mesh ${FQ.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (QQ.hasTangents) {
        const oQ = QQ.getTangents(),
          kQ = mQ.getVerticesData(uQ.d.TangentKind);
        if (kQ) {
          xQ = kQ.length / 4;
          const QQ = new Float32Array(3 * xQ);
          YQ = 0;
          for (let wQ = YQ; wQ < xQ; ++wQ) {
            const FQ = LQ.Ox.FromArray(kQ, 4 * wQ);
            Jw(FQ);
            const qQ = LQ.Ox.FromArray(oQ, 3 * wQ);
            Jw(qQ), qQ.subtractToRef(FQ, bQ), QQ[3 * wQ] = bQ.x * HQ, QQ[3 * wQ + 1] = bQ.y, QQ[3 * wQ + 2] = bQ.z
          }
          const FQ = wQ.createBufferView(QQ, 12),
            qQ = wQ.createAccessor(FQ, "VEC3", 5126, xQ, 0);
          DQ.push(qQ), vQ.attributes.TANGENT = DQ.length - 1
        } else qQ.Tools.Warn(`Morph target tangents for mesh ${FQ.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (QQ.hasColors) {
        const oQ = QQ.getColors(),
          kQ = mQ.getVerticesData(uQ.d.ColorKind),
          HQ = mQ.getVertexBuffer(uQ.d.ColorKind);
        if (kQ && HQ) {
          const QQ = HQ.getSize();
          xQ = kQ.length / QQ;
          const FQ = new Float32Array(xQ * QQ);
          YQ = 0;
          for (let wQ = YQ; wQ < xQ; ++wQ)
            if (3 === QQ) {
              const qQ = LQ.Ox.FromArray(kQ, wQ * QQ);
              LQ.Ox.FromArray(oQ, wQ * QQ).subtractToRef(qQ, bQ), FQ[3 * wQ] = bQ.x, FQ[3 * wQ + 1] = bQ.y, FQ[3 * wQ + 2] = bQ.z
            } else if (4 === QQ) {
            const qQ = new LQ.Vector4,
              DQ = LQ.Vector4.FromArray(kQ, wQ * QQ);
            LQ.Vector4.FromArray(oQ, wQ * QQ).subtractToRef(DQ, qQ), FQ[4 * wQ] = qQ.x, FQ[4 * wQ + 1] = qQ.y, FQ[4 * wQ + 2] = qQ.z, FQ[4 * wQ + 3] = qQ.w
          } else qQ.Tools.Warn(`Unsupported number of components for color attribute: ${QQ}`);
          const mQ = wQ.createBufferView(FQ, 4 * QQ),
            uQ = wQ.createAccessor(mQ, 3 === QQ ? "VEC3" : "VEC4", 5126, xQ, 0);
          DQ.push(uQ), vQ.attributes.COLOR_0 = DQ.length - 1
        } else qQ.Tools.Warn(`Morph target colors for mesh ${FQ.name} were not exported. Mesh does not have colors vertex data`)
      }
      return vQ
    }
    var xL = wQ(40988);
    class AL {}
    AL.DEFAULT_COLOR = EQ.b.White(), AL.DEFAULT_WIDTH_ATTENUATED = 1, AL.DEFAULT_WIDTH = .1;
    var tL = wQ(40502);
    class eL {
      constructor(QQ) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = QQ
      }
      moveTo(QQ, FQ) {
        this._currentPath = new tL.j(QQ, FQ), this._tempPaths.push(this._currentPath)
      }
      lineTo(QQ, FQ) {
        this._currentPath.addLineTo(QQ, FQ)
      }
      quadraticCurveTo(QQ, FQ, wQ, LQ) {
        this._currentPath.addQuadraticCurveTo(QQ, FQ, wQ, LQ, this._resolution)
      }
      bezierCurveTo(QQ, FQ, wQ, LQ, qQ, oQ) {
        this._currentPath.addBezierCurveTo(QQ, FQ, wQ, LQ, qQ, oQ, this._resolution)
      }
      extractHoles() {
        for (const QQ of this._tempPaths) QQ.area() > 0 ? this._holes.push(QQ) : this._paths.push(QQ);
        if (!this._paths.length && this._holes.length) {
          const QQ = this._holes;
          this._holes = this._paths, this._paths = QQ
        }
        this._tempPaths.length = 0
      }
      get paths() {
        return this._paths
      }
      get holes() {
        return this._holes
      }
    }

    function ML(QQ, FQ, wQ, LQ, qQ, oQ) {
      const DQ = oQ.glyphs[QQ] || oQ.glyphs["?"];
      if (!DQ) return null;
      const kQ = new eL(qQ);
      if (DQ.o) {
        const QQ = DQ.o.split(" ");
        for (let qQ = 0, oQ = QQ.length; qQ < oQ;) {
          switch (QQ[qQ++]) {
            case "m": {
              const oQ = parseInt(QQ[qQ++]) * FQ + wQ,
                DQ = parseInt(QQ[qQ++]) * FQ + LQ;
              kQ.moveTo(oQ, DQ);
              break
            }
            case "l": {
              const oQ = parseInt(QQ[qQ++]) * FQ + wQ,
                DQ = parseInt(QQ[qQ++]) * FQ + LQ;
              kQ.lineTo(oQ, DQ);
              break
            }
            case "q": {
              const oQ = parseInt(QQ[qQ++]) * FQ + wQ,
                DQ = parseInt(QQ[qQ++]) * FQ + LQ,
                vQ = parseInt(QQ[qQ++]) * FQ + wQ,
                mQ = parseInt(QQ[qQ++]) * FQ + LQ;
              kQ.quadraticCurveTo(vQ, mQ, oQ, DQ);
              break
            }
            case "b": {
              const oQ = parseInt(QQ[qQ++]) * FQ + wQ,
                DQ = parseInt(QQ[qQ++]) * FQ + LQ,
                vQ = parseInt(QQ[qQ++]) * FQ + wQ,
                mQ = parseInt(QQ[qQ++]) * FQ + LQ,
                uQ = parseInt(QQ[qQ++]) * FQ + wQ,
                HQ = parseInt(QQ[qQ++]) * FQ + LQ;
              kQ.bezierCurveTo(vQ, mQ, uQ, HQ, oQ, DQ);
              break
            }
          }
        }
      }
      return kQ.extractHoles(), {
        offsetX: DQ.ha * FQ,
        shapePath: kQ
      }
    }

    function GL(QQ, FQ, wQ, LQ) {
      const qQ = Array.from(QQ),
        oQ = FQ / LQ.resolution,
        DQ = (LQ.boundingBox.yMax - LQ.boundingBox.yMin + LQ.underlineThickness) * oQ,
        kQ = [];
      let vQ = 0,
        mQ = 0;
      for (let uQ = 0; uQ < qQ.length; uQ++) {
        const QQ = qQ[uQ];
        if ("\n" === QQ) vQ = 0, mQ -= DQ;
        else {
          const FQ = ML(QQ, oQ, vQ, mQ, wQ, LQ);
          FQ && (vQ += FQ.offsetX, kQ.push(FQ.shapePath))
        }
      }
      return kQ
    }
    class pL {
      static ConvertPoints(QQ, FQ) {
        if (QQ.length && Array.isArray(QQ) && "number" === typeof QQ[0]) return [QQ];
        if (QQ.length && Array.isArray(QQ[0]) && "number" === typeof QQ[0][0]) return QQ;
        if (QQ.length && !Array.isArray(QQ[0]) && QQ[0] instanceof jQ.p) {
          const FQ = [];
          for (let wQ = 0; wQ < QQ.length; wQ++) {
            const LQ = QQ[wQ];
            FQ.push(LQ.x, LQ.y, LQ.z)
          }
          return [FQ]
        }
        if (QQ.length > 0 && Array.isArray(QQ[0]) && QQ[0].length > 0 && QQ[0][0] instanceof jQ.p) {
          const FQ = [],
            wQ = QQ;
          for (const QQ of wQ) FQ.push(QQ.flatMap((QQ => [QQ.x, QQ.y, QQ.z])));
          return FQ
        }
        if (QQ instanceof Float32Array) {
          if (FQ?.floatArrayStride) {
            const wQ = [],
              LQ = 3 * FQ.floatArrayStride;
            for (let FQ = 0; FQ < QQ.length; FQ += LQ) {
              const qQ = new Array(LQ);
              for (let wQ = 0; wQ < LQ; wQ++) qQ[wQ] = QQ[FQ + wQ];
              wQ.push(qQ)
            }
            return wQ
          }
          return [Array.from(QQ)]
        }
        if (QQ.length && QQ[0] instanceof Float32Array) {
          const FQ = [];
          for (const wQ of QQ) FQ.push(Array.from(wQ));
          return FQ
        }
        return []
      }
      static OmitZeroLengthPredicate(QQ, FQ, wQ) {
        const LQ = [];
        return FQ.subtract(QQ).lengthSquared() > 0 && LQ.push([QQ, FQ]), wQ.subtract(FQ).lengthSquared() > 0 && LQ.push([FQ, wQ]), QQ.subtract(wQ).lengthSquared() > 0 && LQ.push([wQ, QQ]), 0 === LQ.length ? null : LQ
      }
      static OmitDuplicatesPredicate(QQ, FQ, wQ, LQ) {
        const qQ = [];
        return pL._SearchInPoints(QQ, FQ, LQ) || qQ.push([QQ, FQ]), pL._SearchInPoints(FQ, wQ, LQ) || qQ.push([FQ, wQ]), pL._SearchInPoints(wQ, QQ, LQ) || qQ.push([wQ, QQ]), 0 === qQ.length ? null : qQ
      }
      static _SearchInPoints(QQ, FQ, wQ) {
        for (const LQ of wQ)
          for (let wQ = 0; wQ < LQ.length; wQ++)
            if (LQ[wQ]?.equals(QQ) && (LQ[wQ + 1]?.equals(FQ) || LQ[wQ - 1]?.equals(FQ))) return !0;
        return !1
      }
      static MeshesToLines(QQ, FQ) {
        const wQ = [];
        for (let LQ = 0; LQ < QQ.length; LQ++) {
          const qQ = QQ[LQ],
            oQ = qQ.getVerticesData(aQ.h.PositionKind),
            DQ = qQ.OLQ();
          if (oQ && DQ)
            for (let QQ = 0, kQ = 0; QQ < DQ.length; QQ++) {
              const vQ = 3 * DQ[kQ++],
                mQ = 3 * DQ[kQ++],
                uQ = 3 * DQ[kQ++],
                HQ = new jQ.p(oQ[vQ], oQ[vQ + 1], oQ[vQ + 2]),
                bQ = new jQ.p(oQ[mQ], oQ[mQ + 1], oQ[mQ + 2]),
                YQ = new jQ.p(oQ[uQ], oQ[uQ + 1], oQ[uQ + 2]);
              if (FQ) {
                const kQ = FQ(HQ, bQ, YQ, wQ, QQ, vQ, qQ, LQ, oQ, DQ);
                if (kQ)
                  for (const QQ of kQ) wQ.push(QQ)
              } else wQ.push([HQ, bQ], [bQ, YQ], [YQ, HQ])
            }
        }
        return wQ
      }
      static ToVector3Array(QQ) {
        if (Array.isArray(QQ[0])) {
          const FQ = [],
            wQ = QQ;
          for (const QQ of wQ) {
            const wQ = [];
            for (let FQ = 0; FQ < QQ.length; FQ += 3) wQ.push(new jQ.p(QQ[FQ], QQ[FQ + 1], QQ[FQ + 2]));
            FQ.push(wQ)
          }
          return FQ
        }
        const FQ = QQ,
          wQ = [];
        for (let LQ = 0; LQ < FQ.length; LQ += 3) wQ.push(new jQ.p(FQ[LQ], FQ[LQ + 1], FQ[LQ + 2]));
        return wQ
      }
      static ToNumberArray(QQ) {
        return QQ.flatMap((QQ => [QQ.x, QQ.y, QQ.z]))
      }
      static GetPointsCountInfo(QQ) {
        const FQ = new Array(QQ.length);
        let wQ = 0;
        for (let LQ = QQ.length; LQ--;) FQ[LQ] = QQ[LQ].length / 3, wQ += FQ[LQ];
        return {
          total: wQ,
          counts: FQ
        }
      }
      static GetLineLength(QQ) {
        if (0 === QQ.length) return 0;
        let FQ;
        FQ = "number" === typeof QQ[0] ? pL.ToVector3Array(QQ) : QQ;
        const wQ = jQ.k.Ox[0];
        let LQ = 0;
        for (let qQ = 0; qQ < FQ.length - 1; qQ++) {
          const QQ = FQ[qQ];
          LQ += FQ[qQ + 1].subtractToRef(QQ, wQ).length()
        }
        return LQ
      }
      static GetLineLengthArray(QQ, FQ) {
        const wQ = FQ ? new Float32Array(FQ, 0, QQ.length / 3) : new Float32Array(QQ.length / 3);
        let LQ = 0;
        for (let qQ = 0, oQ = QQ.length / 3 - 1; qQ < oQ; qQ++) {
          let FQ = QQ[3 * qQ + 0],
            oQ = QQ[3 * qQ + 1],
            DQ = QQ[3 * qQ + 2];
          FQ -= QQ[3 * qQ + 3], oQ -= QQ[3 * qQ + 4], DQ -= QQ[3 * qQ + 5];
          LQ += Math.sqrt(FQ * FQ + oQ * oQ + DQ * DQ), wQ[qQ + 1] = LQ
        }
        return wQ
      }
      static SegmentizeSegmentByCount(QQ, FQ, wQ) {
        const LQ = [],
          qQ = FQ.subtract(QQ),
          oQ = jQ.k.Ox[0];
        oQ.K3(wQ);
        const DQ = jQ.k.Ox[1];
        qQ.divideToRef(oQ, DQ);
        let kQ = QQ.clone();
        LQ.push(kQ);
        for (let vQ = 0; vQ < wQ; vQ++) kQ = kQ.clone(), LQ.push(kQ.addInPlace(DQ));
        return LQ
      }
      static SegmentizeLineBySegmentLength(QQ, FQ) {
        const wQ = QQ[0] instanceof jQ.p ? pL.GetLineSegments(QQ) : "number" === typeof QQ[0] ? pL.GetLineSegments(pL.ToVector3Array(QQ)) : QQ,
          LQ = [];
        for (const qQ of wQ)
          if (qQ.length > FQ) {
            const QQ = pL.SegmentizeSegmentByCount(qQ.point1, qQ.point2, Math.ceil(qQ.length / FQ));
            for (const FQ of QQ) LQ.push(FQ)
          } else LQ.push(qQ.point1), LQ.push(qQ.point2);
        return LQ
      }
      static SegmentizeLineBySegmentCount(QQ, FQ) {
        const wQ = "number" === typeof QQ[0] ? pL.ToVector3Array(QQ) : QQ,
          LQ = pL.GetLineLength(wQ) / FQ;
        return pL.SegmentizeLineBySegmentLength(wQ, LQ)
      }
      static GetLineSegments(QQ) {
        const FQ = [];
        for (let wQ = 0; wQ < QQ.length - 1; wQ++) {
          const LQ = QQ[wQ],
            qQ = QQ[wQ + 1],
            oQ = qQ.subtract(LQ).length();
          FQ.push({
            point1: LQ,
            point2: qQ,
            length: oQ
          })
        }
        return FQ
      }
      static GetMinMaxSegmentLength(QQ) {
        const FQ = pL.GetLineSegments(QQ).sort((QQ => QQ.length));
        return {
          min: FQ[0].length,
          max: FQ[FQ.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qQ = FQ * wQ;
        let oQ = 0,
          DQ = 0;
        const kQ = QQ.length;
        for (let mQ = 0; mQ < kQ; mQ++) {
          if (qQ <= oQ + QQ[mQ].length) {
            DQ = mQ;
            break
          }
          oQ += QQ[mQ].length
        }
        const vQ = (qQ - oQ) / QQ[DQ].length;
        return QQ[DQ].point2.subtractToRef(QQ[DQ].point1, jQ.k.Ox[0]), jQ.k.Ox[0].scaleToRef(vQ, jQ.k.Ox[1]), LQ || jQ.k.Ox[1].addInPlace(QQ[DQ].point1), jQ.k.Ox[1].clone()
      }
      static GetCircleLinePoints(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / FQ;
        const oQ = [];
        for (let DQ = 0; DQ <= FQ; DQ++) oQ.push(new jQ.p(Math.cos(DQ * qQ) * QQ, Math.sin(DQ * qQ) * LQ, wQ));
        return oQ
      }
      static GetBezierLinePoints(QQ, FQ, wQ, LQ) {
        return tL.f.CreateQuadraticBezier(QQ, FQ, wQ, LQ).getPoints().flatMap((QQ => [QQ.x, QQ.y, QQ.z]))
      }
      static GetArrowCap(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [QQ.clone(), QQ.add(FQ.multiplyByFloats(wQ, wQ, wQ))],
          widths: [LQ, qQ, oQ, DQ]
        }
      }
      static GetPointsFromText(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const DQ = [],
          kQ = GL(QQ, FQ, wQ, LQ);
        for (const vQ of kQ) {
          for (const QQ of vQ.paths) {
            const FQ = [],
              wQ = QQ.getPoints();
            for (const QQ of wQ) FQ.push(QQ.x, QQ.y, qQ);
            DQ.push(FQ)
          }
          if (oQ)
            for (const QQ of vQ.holes) {
              const FQ = [],
                wQ = QQ.getPoints();
              for (const QQ of wQ) FQ.push(QQ.x, QQ.y, qQ);
              DQ.push(FQ)
            }
        }
        return DQ
      }
      static Color3toRGBAUint8(QQ) {
        const FQ = new Uint8Array(4 * QQ.length);
        for (let wQ = 0, LQ = 0; wQ < QQ.length; wQ++) FQ[LQ++] = 255 * QQ[wQ].r, FQ[LQ++] = 255 * QQ[wQ].g, FQ[LQ++] = 255 * QQ[wQ].b, FQ[LQ++] = 255;
        return FQ
      }
      static CreateColorsTexture(QQ, FQ, wQ, LQ) {
        const qQ = LQ.Wx().getCaps().maxTextureSize ?? 1,
          oQ = FQ.length > qQ ? qQ : FQ.length,
          DQ = Math.ceil(FQ.length / qQ);
        DQ > 1 && (FQ = [...FQ, ...Array(oQ * DQ - FQ.length).fill(FQ[0])]);
        const kQ = pL.Color3toRGBAUint8(FQ),
          vQ = new CQ.c(kQ, oQ, DQ, uw.b.TEXTUREFORMAT_RGBA, LQ, !1, !0, wQ);
        return vQ.name = QQ, vQ
      }
      static PrepareEmptyColorsTexture(QQ) {
        if (!AL.EmptyColorsTexture) {
          const FQ = new Uint8Array(4);
          AL.EmptyColorsTexture = new CQ.c(FQ, 1, 1, uw.b.TEXTUREFORMAT_RGBA, QQ, !1, !1, CQ.c.NEAREST_NEAREST), AL.EmptyColorsTexture.name = "grlEmptyColorsTexture", AL.EmptyColorsTexture.zN.addOnce((() => {
            AL.EmptyColorsTexture = null
          }))
        }
        return AL.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        AL.EmptyColorsTexture?.dispose(), AL.EmptyColorsTexture = null
      }
      static BooleanToNumber(QQ) {
        return QQ ? 1 : 0
      }
    }
    class cL extends XQ.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class CL extends fQ.d {
      isCompatible(QQ) {
        return !0
      }
      constructor(QQ, FQ, wQ) {
        wQ = wQ || {
          color: AL.DEFAULT_COLOR
        };
        const LQ = new cL;
        LQ.GREASED_LINE_HAS_COLOR = !!wQ.color && !wQ.useColors, LQ.GREASED_LINE_SIZE_ATTENUATION = wQ.sizeAttenuation ?? !1, LQ.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === wQ.colorDistributionType, LQ.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (FQ ?? QQ.iN()).useRightHandedSystem, LQ.GREASED_LINE_CAMERA_FACING = wQ.cameraFacing ?? !0, super(QQ, CL.GREASED_LINE_MATERIAL_NAME, 200, LQ, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = wQ?.forceGLSL || CL.ForceGLSL, this._scene = FQ ?? QQ.iN(), this._engine = this._scene.Wx(), this._cameraFacing = wQ.cameraFacing ?? !0, this.visibility = wQ.visibility ?? 1, this.useDash = wQ.useDash ?? !1, this.dashRatio = wQ.dashRatio ?? .5, this.dashOffset = wQ.dashOffset ?? 0, this.width = wQ.width ? wQ.width : wQ.sizeAttenuation ? AL.DEFAULT_WIDTH_ATTENUATED : AL.DEFAULT_WIDTH, this._sizeAttenuation = wQ.sizeAttenuation ?? !1, this.colorMode = wQ.colorMode ?? 0, this._color = wQ.color ?? null, this.useColors = wQ.useColors ?? !1, this._colorsDistributionType = wQ.colorDistributionType ?? 0, this.colorsSampling = wQ.colorsSampling ?? CQ.c.NEAREST_NEAREST, this._colors = wQ.colors ?? null, this.dashCount = wQ.dashCount ?? 1, this.resolution = wQ.resolution ?? new jQ.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), wQ.colorsTexture ? this.colorsTexture = wQ.colorsTexture : this._colors ? this.colorsTexture = pL.CreateColorsTexture(`${QQ.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? AL.DEFAULT_COLOR, pL.PrepareEmptyColorsTexture(this._scene)), this._engine.zN.add((() => {
          pL.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(QQ) {
        QQ.push("grl_offsets"), QQ.push("grl_widths"), QQ.push("grl_colorPointers"), QQ.push("grl_counters"), this._cameraFacing ? (QQ.push("grl_previousAndSide"), QQ.push("grl_nextAndCounters")) : QQ.push("grl_slopes")
      }
      getSamplers(QQ) {
        QQ.push("grl_colors")
      }
      getActiveTextures(QQ) {
        this.colorsTexture && QQ.push(this.colorsTexture)
      }
      getUniforms() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const FQ = [{
          name: "grl_singleColor",
          size: 3,
          type: "vec3"
        }, {
          name: "grl_textureSize",
          size: 2,
          type: "vec2"
        }, {
          name: "grl_dashOptions",
          size: 4,
          type: "vec4"
        }, {
          name: "grl_colorMode_visibility_colorsWidth_useColors",
          size: 4,
          type: "vec4"
        }];
        return this._cameraFacing && FQ.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === QQ && FQ.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: FQ,
          vertex: this._cameraFacing && this._isGLSL(QQ) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(QQ) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(QQ) {
        if (this._cameraFacing) {
          QQ.Y5("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || QQ.Y5("viewProjection", this._scene.getTransformMatrix());
          const FQ = jQ.k.Vector4[0];
          FQ.x = this._aspect, FQ.y = this._resolution.x, FQ.z = this._resolution.y, FQ.w = this.width, QQ.updateVector4("grl_aspect_resolution_lineWidth", FQ)
        }
        const FQ = jQ.k.Vector4[0];
        FQ.x = pL.BooleanToNumber(this.useDash), FQ.y = this._dashArray, FQ.z = this.dashOffset, FQ.w = this.dashRatio, QQ.updateVector4("grl_dashOptions", FQ);
        const wQ = jQ.k.Vector4[1];
        wQ.x = this.colorMode, wQ.y = this.visibility, wQ.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, wQ.w = pL.BooleanToNumber(this.useColors), QQ.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", wQ), this._color && QQ.updateColor3("grl_singleColor", this._color);
        const LQ = this.colorsTexture ?? AL.EmptyColorsTexture;
        QQ.setTexture("grl_colors", LQ), QQ.updateFloat2("grl_textureSize", LQ?.getSize().width ?? 1, LQ?.getSize().height ?? 1)
      }
      prepareDefines(QQ, FQ, wQ) {
        QQ.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, QQ.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, QQ.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, QQ.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = FQ.useRightHandedSystem, QQ.GREASED_LINE_CAMERA_FACING = this._cameraFacing, QQ.GREASED_LINE_USE_OFFSETS = !!wQ.offsets
      }
      getClassName() {
        return CL.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(FQ) ? function(QQ, FQ) {
          if ("vertex" === QQ) {
            const QQ = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return FQ && (QQ["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), QQ
          }
          return "fragment" === QQ ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(QQ, this._cameraFacing) : function(QQ, FQ) {
          if ("vertex" === QQ) {
            const QQ = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return FQ && (QQ["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), QQ
          }
          return "fragment" === QQ ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(QQ, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(QQ) {
        this.setColors(QQ)
      }
      setColors(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = this._colors?.length ?? 0;
        if (this._colors = QQ, null !== QQ && 0 !== QQ.length) {
          if (!FQ || wQ)
            if (this.colorsTexture && LQ === QQ.length && !wQ) {
              const FQ = pL.Color3toRGBAUint8(QQ);
              this.colorsTexture.update(FQ)
            } else this.colorsTexture?.dispose(), this.colorsTexture = pL.CreateColorsTexture(`${this._material.name}-colors-texture`, QQ, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(QQ) {
        this._dashCount = QQ, this._dashArray = 1 / QQ
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(QQ) {
        this._sizeAttenuation = QQ, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(QQ) {
        this.setColor(QQ)
      }
      setColor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== QQ || null !== this._color && null === QQ ? (this._color = QQ, FQ || this.markAllDefinesAsDirty()) : this._color = QQ
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(QQ) {
        this._colorsDistributionType = QQ, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(QQ) {
        this._aspect = QQ.x / QQ.y, this._resolution = QQ
      }
      serialize() {
        const QQ = super.serialize(),
          FQ = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this.colorsSampling,
            colorMode: this.colorMode,
            dashCount: this._dashCount,
            dashOffset: this.dashOffset,
            dashRatio: this.dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this.useColors,
            useDash: this.useDash,
            visibility: this.visibility,
            width: this.width
          };
        return this._colors && (FQ.colors = this._colors), this._color && (FQ.color = this._color), QQ.greasedLineMaterialOptions = FQ, QQ
      }
      parse(QQ, FQ, wQ) {
        super.parse(QQ, FQ, wQ);
        const LQ = QQ.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), LQ.color && this.setColor(LQ.color, !0), LQ.colorDistributionType && (this.colorsDistributionType = LQ.colorDistributionType), LQ.colors && (this.colors = LQ.colors), LQ.colorsSampling && (this.colorsSampling = LQ.colorsSampling), LQ.colorMode && (this.colorMode = LQ.colorMode), LQ.useColors && (this.useColors = LQ.useColors), LQ.visibility && (this.visibility = LQ.visibility), LQ.useDash && (this.useDash = LQ.useDash), LQ.dashCount && (this.dashCount = LQ.dashCount), LQ.dashRatio && (this.dashRatio = LQ.dashRatio), LQ.dashOffset && (this.dashOffset = LQ.dashOffset), LQ.width && (this.width = LQ.width), LQ.sizeAttenuation && (this.sizeAttenuation = LQ.sizeAttenuation), LQ.resolution && (this.resolution = LQ.resolution), this.colors ? this.colorsTexture = pL.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, FQ) : pL.PrepareEmptyColorsTexture(FQ), this.markAllDefinesAsDirty()
      }
      copyTo(QQ) {
        const FQ = QQ;
        FQ.colorsTexture?.dispose(), this._colors && (FQ.colorsTexture = pL.CreateColorsTexture(`${FQ._material.name}-colors-texture`, this._colors, FQ.colorsSampling, this._scene)), FQ.setColor(this.color, !0), FQ.colorsDistributionType = this.colorsDistributionType, FQ.colorsSampling = this.colorsSampling, FQ.colorMode = this.colorMode, FQ.useColors = this.useColors, FQ.visibility = this.visibility, FQ.useDash = this.useDash, FQ.dashCount = this.dashCount, FQ.dashRatio = this.dashRatio, FQ.dashOffset = this.dashOffset, FQ.width = this.width, FQ.sizeAttenuation = this.sizeAttenuation, FQ.resolution = this.resolution, FQ.markAllDefinesAsDirty()
      }
      _isGLSL(QQ) {
        return 0 === QQ || this._forceGLSL
      }
    }
    CL.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", CL.ForceGLSL = !1;
    var SL = wQ(39829),
      iL = wQ(39835),
      WL = wQ(38200),
      RL = wQ(39892),
      OL = wQ(39233);
    class sL extends RL.q {
      constructor(QQ, FQ, LQ) {
        const qQ = FQ.Wx(),
          oQ = qQ.isWebGPU && !(LQ.forceGLSL || sL.ForceGLSL),
          DQ = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        FQ.useRightHandedSystem && DQ.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const kQ = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        LQ.cameraFacing ? (DQ.push("GREASED_LINE_CAMERA_FACING"), kQ.push("grl_previousAndSide", "grl_nextAndCounters")) : (kQ.push("grl_slopes"), kQ.push("grl_counters"));
        const vQ = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (oQ || vQ.push("world", "viewProjection", "view", "projection"), super(QQ, FQ, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: oQ ? ["Scene", "Mesh"] : void 0,
            attributes: kQ,
            uniforms: vQ,
            samplers: oQ ? [] : ["grlColors"],
            defines: DQ,
            extraInitializationsAsync: async () => {
              oQ ? await Promise.all([wQ.e(325).then((() => wQ(61385))), wQ.e(384).then((() => wQ(61387)))]) : await Promise.all([wQ.e(318).then((() => wQ(61390))), wQ.e(385).then((() => wQ(61399)))])
            },
            shaderLanguage: oQ ? 1 : 0
          }), this._color = EQ.b.White(), this._colorsDistributionType = 0, this._colorsTexture = null, LQ = LQ || {
            color: AL.DEFAULT_COLOR
          }, this.visibility = LQ.visibility ?? 1, this.useDash = LQ.useDash ?? !1, this.dashRatio = LQ.dashRatio ?? .5, this.dashOffset = LQ.dashOffset ?? 0, this.dashCount = LQ.dashCount ?? 1, this.width = LQ.width ? LQ.width : LQ.sizeAttenuation && LQ.cameraFacing ? AL.DEFAULT_WIDTH_ATTENUATED : AL.DEFAULT_WIDTH, this.sizeAttenuation = LQ.sizeAttenuation ?? !1, this.color = LQ.color ?? EQ.b.White(), this.useColors = LQ.useColors ?? !1, this.colorsDistributionType = LQ.colorDistributionType ?? 0, this.colorsSampling = LQ.colorsSampling ?? CQ.c.NEAREST_NEAREST, this.colorMode = LQ.colorMode ?? 0, this._colors = LQ.colors ?? null, this._cameraFacing = LQ.cameraFacing ?? !0, this.resolution = LQ.resolution ?? new jQ.n(qQ.getRenderWidth(), qQ.getRenderHeight()), LQ.colorsTexture ? this.colorsTexture = LQ.colorsTexture : this._colors ? this.colorsTexture = pL.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, FQ) : (this._color = this._color ?? AL.DEFAULT_COLOR, this.colorsTexture = pL.PrepareEmptyColorsTexture(FQ)), oQ) {
          const QQ = new OL.b;
          QQ.setParameters(), QQ.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", QQ)
        }
        qQ.zN.add((() => {
          pL.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== AL.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new jQ.n(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(QQ) {
        this.setColors(QQ)
      }
      setColors(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = this._colors?.length ?? 0;
        if (this._colors = QQ, null !== QQ && 0 !== QQ.length) {
          if (!FQ || wQ)
            if (this._colorsTexture && LQ === QQ.length && !wQ) {
              const FQ = pL.Color3toRGBAUint8(QQ);
              this._colorsTexture.update(FQ)
            } else this._colorsTexture && this._colorsTexture !== AL.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = pL.CreateColorsTexture(`${this.name}-colors-texture`, QQ, this.colorsSampling, this.iN())
        } else {
          this._colorsTexture && this._colorsTexture !== AL.EmptyColorsTexture && this._colorsTexture.dispose();
          const QQ = this.iN();
          QQ && (this.colorsTexture = pL.PrepareEmptyColorsTexture(QQ))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(QQ) {
        this._colorsTexture = QQ, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(QQ) {
        this._width = QQ, this.setFloat("grlWidth", QQ)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(QQ) {
        this._useColors = QQ, this.setFloat("grlUseColors", pL.BooleanToNumber(QQ))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(QQ) {
        this._colorsSampling = QQ
      }
      get visibility() {
        return this._visibility
      }
      set visibility(QQ) {
        this._visibility = QQ, this.setFloat("grlVisibility", QQ)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(QQ) {
        this._useDash = QQ, this.setFloat("grlUseDash", pL.BooleanToNumber(QQ))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(QQ) {
        this._dashOffset = QQ, this.setFloat("grlDashOffset", QQ)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(QQ) {
        this._dashRatio = QQ, this.setFloat("grlDashRatio", QQ)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(QQ) {
        this._dashCount = QQ, this._dashArray = 1 / QQ, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(QQ) {
        this._sizeAttenuation = QQ, this.setFloat("grlSizeAttenuation", pL.BooleanToNumber(QQ))
      }
      get color() {
        return this._color
      }
      set color(QQ) {
        this.setColor(QQ)
      }
      setColor(QQ) {
        QQ = QQ ?? AL.DEFAULT_COLOR, this._color = QQ, this.setColor3("grlColor", QQ)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(QQ) {
        this._colorsDistributionType = QQ, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(QQ) {
        this._colorMode = QQ, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(QQ) {
        this._resolution = QQ, this.setVector2("grlResolution", QQ), this.setFloat("grlAspect", QQ.x / QQ.y)
      }
      serialize() {
        const QQ = super.serialize(),
          FQ = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this._colorsSampling,
            colorMode: this._colorMode,
            color: this._color,
            dashCount: this._dashCount,
            dashOffset: this._dashOffset,
            dashRatio: this._dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this._useColors,
            useDash: this._useDash,
            visibility: this._visibility,
            width: this._width,
            cameraFacing: this._cameraFacing
          };
        return this._colors && (FQ.colors = this._colors), QQ.greasedLineMaterialOptions = FQ, QQ
      }
      parse(QQ, FQ, wQ) {
        const LQ = QQ.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), LQ.color && (this.color = LQ.color), LQ.colorDistributionType && (this.colorsDistributionType = LQ.colorDistributionType), LQ.colorsSampling && (this.colorsSampling = LQ.colorsSampling), LQ.colorMode && (this.colorMode = LQ.colorMode), LQ.useColors && (this.useColors = LQ.useColors), LQ.visibility && (this.visibility = LQ.visibility), LQ.useDash && (this.useDash = LQ.useDash), LQ.dashCount && (this.dashCount = LQ.dashCount), LQ.dashRatio && (this.dashRatio = LQ.dashRatio), LQ.dashOffset && (this.dashOffset = LQ.dashOffset), LQ.width && (this.width = LQ.width), LQ.sizeAttenuation && (this.sizeAttenuation = LQ.sizeAttenuation), LQ.resolution && (this.resolution = LQ.resolution), LQ.colors ? this.colorsTexture = pL.CreateColorsTexture(`${this.name}-colors-texture`, LQ.colors, this.colorsSampling, this.iN()) : this.colorsTexture = pL.PrepareEmptyColorsTexture(FQ), this._cameraFacing = LQ.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var rL, IL, UL;
    sL.ForceGLSL = !1,
      function(QQ) {
        QQ[QQ.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", QQ[QQ.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(rL || (rL = {})),
      function(QQ) {
        QQ[QQ.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", QQ[QQ.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", QQ[QQ.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(IL || (IL = {})),
      function(QQ) {
        QQ[QQ.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", QQ[QQ.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", QQ[QQ.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", QQ[QQ.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", QQ[QQ.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(UL || (UL = {}));
    class NL extends SL.c {
      constructor(QQ, FQ, wQ) {
        super(QQ, FQ, null, null, !1, !1), this.name = QQ, this._options = wQ, this._lazy = !1, this._updatable = !1, this._engine = FQ.Wx(), this._lazy = wQ.lazy ?? !1, this._updatable = wQ.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = wQ.colorPointers ?? [], this._widths = wQ.widths ?? new Array(wQ.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(QQ) {
        let FQ = 0;
        for (const LQ of this._points) FQ += LQ.length;
        const wQ = FQ / 3 * 2 - this._widths.length;
        for (let LQ = 0; LQ < wQ; LQ++) this._widths.push(QQ)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Ix && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(QQ, FQ) {
        for (const wQ of QQ) this._points.push(wQ);
        this._lazy || this.setPoints(this._points, FQ)
      }
      dispose(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(QQ, FQ)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(QQ) {
        this._uvs = QQ instanceof Float32Array ? QQ : new Float32Array(QQ), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(QQ) {
        this.material instanceof sL && this.material.setDefine("GREASED_LINE_USE_OFFSETS", QQ?.length > 0), this._offsets = QQ, this._offsetsBuffer ? this._offsetsBuffer.update(QQ) : this._createOffsetsBuffer(QQ)
      }
      get widths() {
        return this._widths
      }
      set widths(QQ) {
        this._widths = QQ, this._lazy || this._widthsBuffer && this._widthsBuffer.update(QQ)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(QQ) {
        this._colorPointers = QQ, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(QQ)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof sL) return this.material;
        const QQ = this.material?.pluginManager?.getPlugin(CL.GREASED_LINE_MATERIAL_NAME);
        return QQ || void 0
      }
      get points() {
        const QQ = [];
        return WL.b.DeepCopy(this._points, QQ), QQ
      }
      setPoints(QQ, FQ) {
        this._points = pL.ConvertPoints(QQ, FQ?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), FQ?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, FQ)
      }
      _initGreasedLine() {
        this._vertexPositions = [], this._indices = [], this._uvs = []
      }
      _createLineOptions() {
        return {
          points: this._points,
          colorPointers: this._colorPointers,
          lazy: this._lazy,
          updatable: this._updatable,
          uvs: this._uvs,
          widths: this._widths,
          ribbonOptions: this._options.ribbonOptions
        }
      }
      serialize(QQ) {
        super.serialize(QQ), QQ.type = this.getClassName(), QQ.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = new iL.c;
        return FQ.positions = this._vertexPositions, FQ.indices = this._indices, FQ.uvs = this._uvs, QQ && (FQ.normals = [], iL.c.ComputeNormals(this._vertexPositions, this._indices, FQ.normals)), FQ.applyToMesh(this, this._options.updatable), FQ
      }
      _createOffsetsBuffer(QQ) {
        const FQ = this._scene.Wx(),
          wQ = new aQ.c(FQ, QQ, this._updatable, 3);
        this.setVerticesBuffer(wQ.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = wQ
      }
    }
    class TL {
      constructor(QQ, FQ) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = QQ, this.wasAddedByNoopNode = FQ
      }
      getIndicesAccessor(QQ, FQ, wQ, LQ, qQ) {
        return this._indicesAccessorMap.get(QQ)?.get(FQ)?.get(wQ)?.get(LQ)?.get(qQ)
      }
      setIndicesAccessor(QQ, FQ, wQ, LQ, qQ, oQ) {
        let DQ = this._indicesAccessorMap.get(QQ);
        DQ || (DQ = new Map, this._indicesAccessorMap.set(QQ, DQ));
        let kQ = DQ.get(FQ);
        kQ || (kQ = new Map, DQ.set(FQ, kQ));
        let vQ = kQ.get(wQ);
        vQ || (vQ = new Map, kQ.set(wQ, vQ));
        let mQ = vQ.get(LQ);
        mQ || (mQ = new Map, vQ.set(LQ, mQ)), mQ.set(qQ, oQ)
      }
      pushExportedNode(QQ) {
        this._exportedNodes.has(QQ) || this._exportedNodes.add(QQ)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(QQ) {
        return this._vertexBufferViewMap.get(QQ)
      }
      setVertexBufferView(QQ, FQ) {
        this._vertexBufferViewMap.set(QQ, FQ)
      }
      setRemappedBufferView(QQ, FQ, wQ) {
        this._remappedBufferView.set(QQ, new Map), this._remappedBufferView.get(QQ).set(FQ, wQ)
      }
      getRemappedBufferView(QQ, FQ) {
        return this._remappedBufferView.get(QQ)?.get(FQ)
      }
      getVertexAccessor(QQ, FQ, wQ) {
        return this._vertexAccessorMap.get(QQ)?.get(FQ)?.get(wQ)
      }
      setVertexAccessor(QQ, FQ, wQ, LQ) {
        let qQ = this._vertexAccessorMap.get(QQ);
        qQ || (qQ = new Map, this._vertexAccessorMap.set(QQ, qQ));
        let oQ = qQ.get(FQ);
        oQ || (oQ = new Map, qQ.set(FQ, oQ)), oQ.set(wQ, LQ)
      }
      hasVertexColorAlpha(QQ) {
        return this._vertexMapColorAlpha.get(QQ) || !1
      }
      setHasVertexColorAlpha(QQ, FQ) {
        return this._vertexMapColorAlpha.set(QQ, FQ)
      }
      getMesh(QQ) {
        return this._meshMap.get(QQ)
      }
      setMesh(QQ, FQ) {
        this._meshMap.set(QQ, FQ)
      }
      bindMorphDataToMesh(QQ, FQ) {
        const wQ = this._meshMorphTargetMap.get(QQ) || [];
        this._meshMorphTargetMap.set(QQ, wQ), -1 === wQ.indexOf(FQ) && wQ.push(FQ)
      }
      getMorphTargetsFromMesh(QQ) {
        return this._meshMorphTargetMap.get(QQ)
      }
    }
    class KL {
      _ApplyExtension(QQ, FQ, wQ, LQ) {
        if (wQ >= FQ.length) return Promise.resolve(QQ);
        const qQ = LQ(FQ[wQ], QQ);
        return qQ ? qQ.then((async QQ => QQ ? await this._ApplyExtension(QQ, FQ, wQ + 1, LQ) : null)) : this._ApplyExtension(QQ, FQ, wQ + 1, LQ)
      }
      _ApplyExtensions(QQ, FQ) {
        const wQ = [];
        for (const LQ of KL._ExtensionNames) wQ.push(this._extensions[LQ]);
        return this._ApplyExtension(QQ, wQ, 0, FQ)
      }
      _extensionsPostExportNodeAsync(QQ, FQ, wQ, LQ, qQ) {
        return this._ApplyExtensions(FQ, ((FQ, oQ) => FQ.postExportNodeAsync && FQ.postExportNodeAsync(QQ, oQ, wQ, LQ, qQ, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(QQ, FQ, wQ) {
        return this._ApplyExtensions(FQ, ((FQ, LQ) => FQ.postExportMaterialAsync && FQ.postExportMaterialAsync(QQ, LQ, wQ)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        const LQ = [];
        return await Promise.all(KL._ExtensionNames.map((async qQ => {
          const oQ = this._extensions[qQ];
          if (oQ.postExportMaterialAdditionalTexturesAsync) {
            const qQ = await oQ.postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ);
            LQ.push(...qQ)
          }
        }))), LQ
      }
      _extensionsPostExportTextures(QQ, FQ, wQ) {
        for (const LQ of KL._ExtensionNames) {
          const qQ = this._extensions[LQ];
          qQ.postExportTexture && qQ.postExportTexture(QQ, FQ, wQ)
        }
      }
      _extensionsPostExportMeshPrimitive(QQ) {
        for (const FQ of KL._ExtensionNames) {
          const wQ = this._extensions[FQ];
          wQ.postExportMeshPrimitive && wQ.postExportMeshPrimitive(QQ, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const QQ of KL._ExtensionNames) {
          const FQ = this._extensions[QQ];
          FQ.preGenerateBinaryAsync && await FQ.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(QQ) {
        for (const FQ of KL._ExtensionNames) {
          const wQ = this._extensions[FQ];
          wQ.enabled && QQ(wQ)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((QQ => {
          var FQ, wQ, LQ;
          QQ.wasUsed && ((FQ = this._glTF).extensionsUsed || (FQ.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(QQ.name) && this._glTF.extensionsUsed.push(QQ.name), QQ.required && ((wQ = this._glTF).extensionsRequired || (wQ.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(QQ.name) && this._glTF.extensionsRequired.push(QQ.name)), (LQ = this._glTF).extensions || (LQ.extensions = {}), QQ.onExporting && QQ.onExporting())
        }))
      }
      _loadExtensions() {
        for (const QQ of KL._ExtensionNames) {
          const FQ = KL._ExtensionFactories[QQ](this);
          this._extensions[QQ] = FQ
        }
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AQ.d.LastCreatedScene,
          FQ = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${xQ.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Iw(this), this._extensions = {}, this._bufferManager = new LL, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !QQ) throw new Error("No scene available to export");
        this._babylonScene = QQ, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: QQ => QQ?.oN?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...FQ
        }, this._loadExtensions()
      }
      dispose() {
        for (const QQ in this._extensions) {
          this._extensions[QQ].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        KL.UnregisterExtension(QQ) && qQ.Tools.Warn(`Extension with the name ${QQ} already exists`), KL._ExtensionFactories[QQ] = FQ;
        const LQ = wQ ?? 0;
        KL._ExtensionOrders[QQ] = LQ;
        let oQ = KL._ExtensionNames.length;
        for (let qQ = 0; qQ < KL._ExtensionNames.length; qQ++) {
          const QQ = KL._ExtensionNames[qQ];
          if (LQ < KL._ExtensionOrders[QQ]) {
            oQ = qQ;
            break
          }
        }
        KL._ExtensionNames.splice(oQ, 0, QQ)
      }
      static UnregisterExtension(QQ) {
        if (!KL._ExtensionFactories[QQ]) return !1;
        delete KL._ExtensionFactories[QQ], delete KL._ExtensionOrders[QQ];
        const FQ = KL._ExtensionNames.indexOf(QQ);
        return -1 !== FQ && KL._ExtensionNames.splice(FQ, 1), !0
      }
      _generateJSON(QQ, FQ, wQ) {
        const LQ = {
          byteLength: QQ
        };
        return LQ.byteLength && (this._glTF.buffers = [LQ]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.lA = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (LQ.uri = FQ + ".bin"), wQ ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(QQ) {
        const FQ = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const wQ = this._generateJSON(FQ.byteLength, QQ, !0),
          LQ = new Blob([FQ], {
            type: "application/octet-stream"
          }),
          qQ = QQ + ".gltf",
          oQ = QQ + ".bin",
          DQ = new mQ;
        if (DQ.files[qQ] = wQ, DQ.files[oQ] = LQ, this._imageData)
          for (const kQ in this._imageData) DQ.files[kQ] = this._imageData[kQ];
        return DQ
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(QQ) {
        const FQ = QQ % 4;
        return 0 === FQ ? FQ : 4 - FQ
      }
      async generateGLBAsync(QQ) {
        this._shouldUseGlb = !0;
        const FQ = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const wQ = this._generateJSON(FQ.byteLength),
          LQ = QQ + ".glb";
        let qQ, oQ = wQ.length;
        if ("undefined" !== typeof TextEncoder) {
          qQ = (new TextEncoder).encode(wQ), oQ = qQ.length
        }
        const DQ = this._getPadding(oQ),
          kQ = this._getPadding(FQ.byteLength),
          vQ = 28 + oQ + DQ + FQ.byteLength + kQ,
          uQ = new FL(vQ);
        if (uQ.writeUInt32(1179937895), uQ.writeUInt32(2), uQ.writeUInt32(vQ), uQ.writeUInt32(oQ + DQ), uQ.writeUInt32(1313821514), qQ) uQ.writeTypedArray(qQ);
        else {
          const QQ = "_".charCodeAt(0);
          for (let FQ = 0; FQ < oQ; ++FQ) {
            const LQ = wQ.charCodeAt(FQ);
            LQ != wQ.codePointAt(FQ) ? uQ.writeUInt8(QQ) : uQ.writeUInt8(LQ)
          }
        }
        for (let mQ = 0; mQ < DQ; ++mQ) uQ.writeUInt8(32);
        uQ.writeUInt32(FQ.byteLength + kQ), uQ.writeUInt32(5130562), uQ.writeTypedArray(FQ);
        for (let mQ = 0; mQ < kQ; ++mQ) uQ.writeUInt8(0);
        const HQ = new mQ;
        return HQ.files[LQ] = new Blob([uQ.getOutputData()], {
          type: "application/octet-stream"
        }), HQ
      }
      _setNodeTransformation(QQ, FQ, wQ) {
        if (FQ.getPivotPoint().equalsWithEpsilon(lw, Tw.b) || qQ.Tools.Warn("Pivot points are not supported in the glTF serializer"), !FQ.position.equalsWithEpsilon(lw, Tw.b)) {
          const qQ = LQ.TmpVectors.Ox[0].Qs(FQ.position);
          wQ && Ew(qQ), QQ.translation = qQ.RLQ()
        }
        FQ.ck.equalsWithEpsilon(aw, Tw.b) || (QQ.scale = FQ.ck.RLQ());
        const oQ = FQ.rotationQuaternion?.clone() || LQ.Quaternion.FromEulerAngles(FQ.rotation.x, FQ.rotation.y, FQ.rotation.z);
        oQ.equalsWithEpsilon(jw, Tw.b) || (wQ && nw(oQ), QQ.rotation = oQ.normalize().RLQ())
      }
      _setCameraTransformation(QQ, FQ, wQ) {
        const qQ = LQ.TmpVectors.Ox[0],
          oQ = LQ.TmpVectors.Quaternion[0],
          DQ = FQ.getWorldMatrix();
        if (FQ.parent) {
          const QQ = FQ.parent.getWorldMatrix().invertToRef(LQ.TmpVectors.Matrix[0]);
          DQ.multiplyToRef(QQ, LQ.TmpVectors.Matrix[1]).decompose(void 0, oQ, qQ)
        } else DQ.decompose(void 0, oQ, qQ);
        qQ.equalsWithEpsilon(lw, Tw.b) || (wQ && Ew(qQ), QQ.translation = qQ.RLQ()), wQ && nw(oQ), this._babylonScene.useRightHandedSystem || gw(oQ), oQ.equalsWithEpsilon(jw, Tw.b) || (QQ.rotation = oQ.RLQ())
      }
      _listAvailableCameras() {
        for (const QQ of this._babylonScene.cameras) {
          const FQ = {
            type: QQ.mode === qL.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (QQ.name && (FQ.name = QQ.name), "perspective" === FQ.type) FQ.perspective = {
            aspectRatio: QQ.Wx().getAspectRatio(QQ),
            yfov: QQ.fovMode === qL.e.FOVMODE_VERTICAL_FIXED ? QQ.fov : QQ.fov * QQ.Wx().getAspectRatio(QQ),
            znear: QQ.minZ,
            zfar: QQ.maxZ
          };
          else if ("orthographic" === FQ.type) {
            const wQ = QQ.orthoLeft && QQ.orthoRight ? .5 * (QQ.orthoRight - QQ.orthoLeft) : .5 * QQ.Wx().getRenderWidth(),
              LQ = QQ.orthoBottom && QQ.orthoTop ? .5 * (QQ.orthoTop - QQ.orthoBottom) : .5 * QQ.Wx().getRenderHeight();
            FQ.orthographic = {
              xmag: wQ,
              ymag: LQ,
              znear: QQ.minZ,
              zfar: QQ.maxZ
            }
          }
          this._camerasMap.set(QQ, FQ)
        }
      }
      _exportAndAssignCameras() {
        const QQ = Array.from(this._camerasMap.values());
        for (const FQ of QQ) {
          const QQ = this._nodesCameraMap.get(FQ);
          if (void 0 !== QQ) {
            this._cameras.push(FQ);
            for (const FQ of QQ) FQ.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const QQ of this._babylonScene.skeletons) {
          if (QQ.bones.length <= 0) continue;
          const FQ = {
            joints: []
          };
          this._skinMap.set(QQ, FQ)
        }
      }
      _exportAndAssignSkeletons(QQ) {
        for (const wQ of this._babylonScene.skeletons) {
          if (wQ.bones.length <= 0) continue;
          const oQ = this._skinMap.get(wQ);
          if (void 0 == oQ) continue;
          const DQ = {};
          let kQ = -1;
          for (let QQ = 0; QQ < wQ.bones.length; ++QQ) {
            const FQ = wQ.bones[QQ],
              LQ = FQ.getIndex() ?? QQ; - 1 !== LQ && (DQ[LQ] = FQ, LQ > kQ && (kQ = LQ))
          }
          const vQ = [];
          for (let wQ = 0; wQ <= kQ; ++wQ) {
            const kQ = DQ[wQ],
              mQ = kQ.getTransformNode(),
              uQ = mQ ? this._nodeMap.get(mQ) : void 0;
            if (void 0 === uQ) {
              qQ.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            oQ.joints.push(uQ);
            const HQ = kQ.getAbsoluteInverseBindMatrix().clone();
            QQ.has(mQ) && (FQ = HQ, Kw.invertToRef(LQ.TmpVectors.Matrix[0]).multiplyToRef(FQ, FQ).multiplyToRef(Kw, FQ)), vQ.push(HQ)
          }
          const mQ = this._nodesSkinMap.get(oQ);
          if (oQ.joints.length > 0 && void 0 !== mQ) {
            const QQ = new Float32Array(16 * vQ.length);
            vQ.forEach(((FQ, wQ) => {
              QQ.set(FQ.m, 16 * wQ)
            }));
            const FQ = this._bufferManager.createBufferView(QQ);
            this._accessors.push(this._bufferManager.createAccessor(FQ, "MAT4", 5126, vQ.length)), oQ.inverseBindMatrices = this._accessors.length - 1, this._skins.push(oQ);
            const wQ = this._skins.length - 1;
            for (const LQ of mQ) LQ.skin = wQ
          }
        }
        var FQ
      }
      async _exportSceneAsync() {
        const QQ = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const FQ = this._options.metadataSelector(this._babylonScene.metadata);
          FQ && (QQ.extras = FQ)
        }
        const FQ = new Array,
          wQ = new Array,
          LQ = new Array,
          qQ = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let oQ;
        if (qQ && !this._options.includeCoordinateSystemConversionNodes)
          for (const mQ of this._babylonScene.animationGroups)
            for (const QQ of mQ.targetedAnimations) {
              const FQ = QQ.target;
              FQ instanceof HQ.e && !FQ.parent && (oQ ?? (oQ = new Set)).add(FQ)
            }
        for (const mQ of this._babylonScene.rootNodes) {
          const QQ = mQ.animations,
            DQ = !!QQ && QQ.length > 0 || oQ?.has(mQ);
          qQ && !this._options.includeCoordinateSystemConversionNodes && zw(mQ, this._babylonScene.useRightHandedSystem) && !DQ ? LQ.push(...mQ.getChildren()) : this._babylonScene.useRightHandedSystem ? FQ.push(mQ) : wQ.push(mQ)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const DQ = new TL(!0, !1);
        QQ.nodes.push(...await this._exportNodesAsync(wQ, DQ));
        const kQ = new TL(!1, !1);
        QQ.nodes.push(...await this._exportNodesAsync(FQ, kQ));
        const vQ = new TL(!1, !0);
        QQ.nodes.push(...await this._exportNodesAsync(LQ, vQ)), QQ.nodes.length && this._scenes.push(QQ), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(DQ.getNodesSet()), this._babylonScene.animationGroups.length && bL._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, DQ.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(QQ) {
        return this._nodeMap.get(QQ)
      }
      _getAnimationIndex(QQ) {
        return this._animationGroupMap.get(QQ)
      }
      _getCameraIndex(QQ) {
        const FQ = this._camerasMap.get(QQ);
        if (!FQ) return;
        const wQ = this._cameras.indexOf(FQ);
        return wQ >= 0 ? wQ : void 0
      }
      _getMaterialIndex(QQ) {
        return this._materialMap.get(QQ)
      }
      _getRootIndex(QQ, FQ) {
        switch (QQ) {
          case "nodes":
            return this._getNodeIndex(FQ);
          case "animations":
            return this._getAnimationIndex(FQ);
          case "cameras":
            return this._getCameraIndex(FQ);
          case "materials":
            return this._getMaterialIndex(FQ);
          case "meshes": {
            const QQ = this._getNodeIndex(FQ);
            return void 0 === QQ ? void 0 : this._nodes[QQ]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(FQ)?.index;
          case "images": {
            const QQ = this._materialExporter.getTextureInfo(FQ)?.index;
            if (void 0 === QQ) return;
            const wQ = this._textures[QQ];
            for (const FQ of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const QQ = wQ?.extensions?.[FQ]?.source;
              if ("number" === typeof QQ) return QQ
            }
            return wQ?.source
          }
          case "samplers": {
            const QQ = this._materialExporter.getTextureInfo(FQ)?.index;
            return void 0 === QQ ? void 0 : this._textures[QQ]?.sampler
          }
          case "skins": {
            const QQ = this._skinMap.get(FQ),
              wQ = QQ ? this._skins.indexOf(QQ) : -1;
            return wQ >= 0 ? wQ : void 0
          }
          case "scenes":
            return FQ === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(QQ, FQ, wQ) {
        const LQ = this._nodes[QQ];
        if (!LQ) throw new Error(`Cannot write ${FQ}: glTF node ${QQ} does not exist.`);
        LQ.extensions || (LQ.extensions = {}), LQ.extensions[FQ] = wQ
      }
      _shouldExportNode(QQ) {
        let FQ = this._shouldExportNodeMap.get(QQ);
        return void 0 === FQ && (FQ = this._options.shouldExportNode(QQ), this._shouldExportNodeMap.set(QQ, FQ)), FQ
      }
      async _exportNodesAsync(QQ, FQ) {
        const wQ = new Array;
        this._exportBuffers(QQ, FQ);
        for (const LQ of QQ) await this._exportNodeAsync(LQ, wQ, FQ);
        return wQ
      }
      _collectBuffers(QQ, FQ, wQ, LQ, qQ) {
        if (this._shouldExportNode(QQ) && QQ instanceof bQ.e && QQ.geometry) {
          const oQ = QQ.geometry.getVertexBuffers();
          if (oQ)
            for (const LQ in oQ) {
              if (!hw(LQ)) continue;
              const DQ = oQ[LQ];
              qQ.setHasVertexColorAlpha(DQ, QQ.hasVertexAlpha);
              const kQ = DQ._buffer,
                vQ = FQ.get(kQ) || [];
              FQ.set(kQ, vQ), -1 === vQ.indexOf(DQ) && vQ.push(DQ);
              const mQ = wQ.get(DQ) || [];
              wQ.set(DQ, mQ), -1 === mQ.indexOf(QQ) && mQ.push(QQ)
            }
          const DQ = QQ.morphTargetManager;
          if (DQ)
            for (let FQ = 0; FQ < DQ.numTargets; FQ++) {
              const wQ = DQ.getTarget(FQ),
                qQ = LQ.get(wQ) || [];
              LQ.set(wQ, qQ), -1 === qQ.indexOf(QQ) && qQ.push(QQ)
            }
        }
        for (const oQ of QQ.getChildren()) this._collectBuffers(oQ, FQ, wQ, LQ, qQ)
      }
      _exportBuffers(QQ, FQ) {
        const wQ = new Map,
          LQ = new Map,
          qQ = new Map;
        for (const kQ of QQ) this._collectBuffers(kQ, wQ, LQ, qQ, FQ);
        const oQ = Array.from(wQ.keys());
        for (const kQ of oQ) {
          const QQ = kQ.getData();
          if (!QQ) throw new Error("Buffer data is not available");
          const qQ = wQ.get(kQ);
          if (!qQ) continue;
          const oQ = qQ[0].byteStride;
          if (qQ.some((QQ => QQ.byteStride !== oQ))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const DQ = yw(QQ).slice();
          for (const FQ of qQ) {
            const QQ = LQ.get(FQ),
              {
                byteOffset: wQ,
                byteStride: qQ,
                componentCount: oQ,
                type: kQ,
                count: vQ,
                normalized: mQ,
                kind: HQ
              } = fw(FQ, QQ);
            switch (HQ) {
              case uQ.d.NormalKind:
              case uQ.d.TangentKind:
                (0, Uw.j)(DQ, wQ, qQ, oQ, kQ, vQ, mQ, (QQ => {
                  const FQ = Math.sqrt(QQ[0] * QQ[0] + QQ[1] * QQ[1] + QQ[2] * QQ[2]);
                  if (FQ > 0) {
                    const wQ = 1 / FQ;
                    QQ[0] *= wQ, QQ[1] *= wQ, QQ[2] *= wQ
                  }
                }));
                break;
              case uQ.d.ColorKind: {
                const FQ = QQ.filter((QQ => QQ.material instanceof DL.StandardMaterial || null == QQ.material)).length;
                if (0 == FQ) break;
                if (FQ != QQ.length) {
                  OQ.c.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                kQ == uQ.d.UNSIGNED_BYTE && OQ.c.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const LQ = new tQ.Color3,
                  HQ = new tQ.b,
                  bQ = this._babylonScene.Wx().useExactSrgbConversions;
                (0, Uw.j)(DQ, wQ, qQ, oQ, kQ, vQ, mQ, (QQ => {
                  3 === QQ.length ? (LQ.bwQ(QQ, 0), LQ.toLinearSpaceToRef(LQ, bQ), LQ.toArray(QQ, 0)) : (HQ.bwQ(QQ, 0), HQ.toLinearSpaceToRef(HQ, bQ), HQ.toArray(QQ, 0))
                }))
              }
            }
          }
          if (FQ.convertToRightHanded) {
            for (const QQ of qQ) {
              const FQ = LQ.get(QQ),
                {
                  byteOffset: wQ,
                  byteStride: qQ,
                  componentCount: oQ,
                  type: kQ,
                  count: vQ,
                  normalized: mQ,
                  kind: HQ
                } = fw(QQ, FQ);
              switch (HQ) {
                case uQ.d.PositionKind:
                case uQ.d.NormalKind:
                case uQ.d.TangentKind:
                  (0, Uw.j)(DQ, wQ, qQ, oQ, kQ, vQ, mQ, (QQ => {
                    QQ[0] = -QQ[0]
                  }))
              }
            }
            FQ.convertedToRightHandedBuffers.set(kQ, DQ)
          }
          const vQ = this._bufferManager.createBufferView(DQ, oQ);
          FQ.setVertexBufferView(kQ, vQ);
          const mQ = new Map;
          for (const FQ of qQ) {
            const QQ = LQ.get(FQ),
              {
                kind: wQ,
                totalVertices: qQ
              } = fw(FQ, QQ);
            switch (wQ) {
              case uQ.d.MatricesIndicesKind:
              case uQ.d.MatricesIndicesExtraKind:
                if (FQ.type == uQ.d.FLOAT) {
                  const QQ = FQ.getFloatData(qQ);
                  null !== QQ && mQ.set(FQ, QQ)
                }
            }
          }
          0 !== mQ.size && OQ.c.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const HQ = Array.from(mQ.keys());
          for (const wQ of HQ) {
            const QQ = mQ.get(wQ);
            if (!QQ) continue;
            const LQ = QQ.some((QQ => QQ >= 256)),
              qQ = new(LQ ? Uint16Array : Uint8Array)(QQ.length);
            for (let FQ = 0; FQ < QQ.length; FQ++) qQ[FQ] = QQ[FQ];
            const oQ = this._bufferManager.createBufferView(qQ, 4 * (LQ ? 2 : 1));
            FQ.setRemappedBufferView(kQ, wQ, oQ)
          }
        }
        const DQ = Array.from(qQ.keys());
        for (const kQ of DQ) {
          const QQ = qQ.get(kQ);
          if (!QQ) continue;
          const wQ = YL(kQ, QQ[0], this._bufferManager, this._bufferViews, this._accessors, FQ.convertToRightHanded);
          for (const LQ of QQ) FQ.bindMorphDataToMesh(LQ, wQ)
        }
      }
      async _exportNodeAsync(QQ, FQ, wQ) {
        let LQ = this._nodeMap.get(QQ);
        if (void 0 !== LQ) return void(FQ.includes(LQ) || FQ.push(LQ));
        const qQ = await this._createNodeAsync(QQ, wQ);
        if (qQ) {
          LQ = this._nodes.length, this._nodes.push(qQ), this._nodeMap.set(QQ, LQ), wQ.pushExportedNode(QQ), FQ.push(LQ);
          const oQ = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            DQ = [];
          this._babylonScene.animationGroups.length || (bL._CreateMorphTargetAnimationFromMorphTargetAnimations(QQ, oQ, DQ, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, wQ.convertToRightHanded, this._options.shouldExportAnimation), QQ.animations.length && bL._CreateNodeAnimationFromNodeAnimations(QQ, oQ, DQ, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, wQ.convertToRightHanded, this._options.shouldExportAnimation)), oQ.channels.length && oQ.samplers.length && this._animations.push(oQ), DQ.forEach((QQ => {
            QQ.channels.length && QQ.samplers.length && this._animations.push(QQ)
          }))
        }
        const oQ = qQ ? [] : FQ;
        for (const DQ of QQ.getChildren()) await this._exportNodeAsync(DQ, oQ, wQ);
        qQ && oQ.length && (qQ.children = oQ)
      }
      async _createNodeAsync(QQ, FQ) {
        if (!this._shouldExportNode(QQ)) return null;
        const wQ = {};
        if (QQ.name && (wQ.name = QQ.name), QQ.metadata) {
          const FQ = this._options.metadataSelector(QQ.metadata);
          FQ && (wQ.extras = FQ)
        }
        if (QQ instanceof HQ.e && (this._setNodeTransformation(wQ, QQ, FQ.convertToRightHanded), QQ instanceof bQ.e)) {
          const LQ = QQ instanceof YQ.e ? QQ.cqQ : QQ;
          if (LQ.lC && LQ.lC.length > 0 && (wQ.mesh = await this._exportMeshAsync(LQ, FQ)), QQ.skeleton) {
            const FQ = this._skinMap.get(QQ.skeleton);
            void 0 !== FQ && (void 0 === this._nodesSkinMap.get(FQ) && this._nodesSkinMap.set(FQ, []), this._nodesSkinMap.get(FQ)?.push(wQ))
          }
        }
        if (QQ instanceof Nw.g) {
          const LQ = this._camerasMap.get(QQ);
          if (LQ) {
            void 0 === this._nodesCameraMap.get(LQ) && this._nodesCameraMap.set(LQ, []), this._setCameraTransformation(wQ, QQ, FQ.convertToRightHanded);
            const qQ = QQ.parent;
            if (null !== qQ && Zw(QQ, qQ)) {
              const QQ = this._nodeMap.get(qQ);
              if (void 0 !== QQ) {
                const FQ = this._nodes[QQ];
                return Pw(wQ, FQ), this._nodesCameraMap.get(LQ)?.push(FQ), null
              }
            }
            this._nodesCameraMap.get(LQ)?.push(wQ)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", wQ, QQ, this._nodeMap, FQ.convertToRightHanded) ? wQ : (OQ.c.Warn(`Not exporting node ${QQ.name}`), null)
      }
      _exportIndices(QQ, FQ, wQ, LQ, qQ, DQ, kQ, vQ, mQ) {
        let uQ = null;
        mQ.mode = function(QQ) {
          switch (QQ) {
            case oQ.d.TriangleFillMode:
              return 4;
            case oQ.d.TriangleStripDrawMode:
              return 5;
            case oQ.d.TriangleFanDrawMode:
              return 6;
            case oQ.d.PointListDrawMode:
            case oQ.d.PointFillMode:
              return 0;
            case oQ.d.LineLoopDrawMode:
              return 2;
            case oQ.d.LineListDrawMode:
              return 1;
            case oQ.d.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${QQ}`)
        }(DQ);
        const HQ = kQ !== oQ.d.CounterClockWiseSideOrientation && function(QQ) {
          switch (QQ) {
            case oQ.d.TriangleFillMode:
            case oQ.d.TriangleStripDrawMode:
            case oQ.d.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(DQ);
        if (HQ) {
          if (DQ === oQ.d.TriangleStripDrawMode || DQ === oQ.d.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const kQ = FQ ? new Uint32Array(LQ) : new Uint16Array(LQ);
          if (QQ)
            for (let FQ = 0; FQ + 2 < LQ; FQ += 3) kQ[FQ] = QQ[wQ + FQ] + qQ, kQ[FQ + 1] = QQ[wQ + FQ + 2] + qQ, kQ[FQ + 2] = QQ[wQ + FQ + 1] + qQ;
          else
            for (let QQ = 0; QQ + 2 < LQ; QQ += 3) kQ[QQ] = QQ, kQ[QQ + 1] = QQ + 2, kQ[QQ + 2] = QQ + 1;
          uQ = kQ
        } else if (QQ && 0 !== qQ) {
          const oQ = FQ ? new Uint32Array(LQ) : new Uint16Array(LQ);
          for (let FQ = 0; FQ < LQ; FQ++) oQ[FQ] = QQ[wQ + FQ] + qQ;
          uQ = oQ
        } else QQ && (uQ = function(QQ, FQ, wQ, LQ) {
          let qQ = QQ;
          return 0 === FQ && wQ === QQ.length || (qQ = Array.isArray(QQ) ? QQ.slice(FQ, FQ + wQ) : QQ.subarray(FQ, FQ + wQ)), qQ instanceof Int32Array ? new Uint32Array(qQ.buffer, qQ.byteOffset, qQ.length) : Array.isArray(qQ) ? LQ ? new Uint32Array(qQ) : new Uint16Array(qQ) : qQ
        }(QQ, wQ, LQ, FQ));
        if (uQ) {
          let oQ = vQ.getIndicesAccessor(QQ, wQ, LQ, qQ, HQ);
          if (void 0 === oQ) {
            const DQ = this._bufferManager.createBufferView(uQ),
              kQ = FQ ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(DQ, "SCALAR", kQ, LQ, 0)), oQ = this._accessors.length - 1, vQ.setIndicesAccessor(QQ, wQ, LQ, qQ, HQ, oQ)
          }
          mQ.indices = oQ
        }
      }
      _exportVertexBuffer(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = QQ.getKind();
        if (!hw(DQ)) return;
        if (DQ.startsWith("uv") && !this._options.exportUnusedUVs && (!FQ || !this._materialNeedsUVsSet.has(FQ))) return;
        let kQ = qQ.getVertexAccessor(QQ, wQ, LQ);
        if (void 0 === kQ) {
          const FQ = qQ.convertedToRightHandedBuffers.get(QQ._buffer) || QQ._buffer.getData(),
            oQ = DQ === uQ.d.PositionKind ? function(QQ, FQ, wQ, LQ) {
              const {
                byteOffset: qQ,
                byteStride: oQ,
                type: DQ,
                normalized: kQ
              } = FQ, vQ = FQ.getSize(), mQ = new Array(vQ).fill(1 / 0), uQ = new Array(vQ).fill(-1 / 0);
              return (0, Uw.j)(QQ, qQ + wQ * oQ, oQ, vQ, DQ, LQ * vQ, kQ, (QQ => {
                for (let FQ = 0; FQ < vQ; FQ++) mQ[FQ] = Math.min(mQ[FQ], QQ[FQ]), uQ[FQ] = Math.max(uQ[FQ], QQ[FQ])
              })), {
                min: mQ,
                max: uQ
              }
            }(FQ, QQ, wQ, LQ) : void 0,
            vQ = (DQ === uQ.d.MatricesIndicesKind || DQ === uQ.d.MatricesIndicesExtraKind) && QQ.type === uQ.d.FLOAT,
            mQ = vQ ? uQ.d.UNSIGNED_BYTE : QQ.type,
            HQ = vQ ? void 0 : QQ.normalized,
            bQ = vQ ? qQ.getRemappedBufferView(QQ._buffer, QQ) : qQ.getVertexBufferView(QQ._buffer),
            YQ = QQ.byteOffset + wQ * QQ.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(bQ, function(QQ, FQ) {
            if (QQ == uQ.d.ColorKind) return FQ ? "VEC4" : "VEC3";
            switch (QQ) {
              case uQ.d.PositionKind:
              case uQ.d.NormalKind:
                return "VEC3";
              case uQ.d.TangentKind:
              case uQ.d.MatricesIndicesKind:
              case uQ.d.MatricesIndicesExtraKind:
              case uQ.d.MatricesWeightsKind:
              case uQ.d.MatricesWeightsExtraKind:
                return "VEC4";
              case uQ.d.UVKind:
              case uQ.d.UV2Kind:
              case uQ.d.UV3Kind:
              case uQ.d.UV4Kind:
              case uQ.d.UV5Kind:
              case uQ.d.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${QQ}`)
          }(DQ, qQ.hasVertexColorAlpha(QQ)), mQ, LQ, YQ, oQ, HQ)), kQ = this._accessors.length - 1, qQ.setVertexAccessor(QQ, wQ, LQ, kQ)
        }
        oQ.attributes[function(QQ) {
          switch (QQ) {
            case uQ.d.PositionKind:
              return "POSITION";
            case uQ.d.NormalKind:
              return "NORMAL";
            case uQ.d.TangentKind:
              return "TANGENT";
            case uQ.d.ColorKind:
              return "COLOR_0";
            case uQ.d.UVKind:
              return "TEXCOORD_0";
            case uQ.d.UV2Kind:
              return "TEXCOORD_1";
            case uQ.d.UV3Kind:
              return "TEXCOORD_2";
            case uQ.d.UV4Kind:
              return "TEXCOORD_3";
            case uQ.d.UV5Kind:
              return "TEXCOORD_4";
            case uQ.d.UV6Kind:
              return "TEXCOORD_5";
            case uQ.d.MatricesIndicesKind:
              return "JOINTS_0";
            case uQ.d.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case uQ.d.MatricesWeightsKind:
              return "WEIGHTS_0";
            case uQ.d.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${QQ}`)
        }(DQ)] = kQ
      }
      async _exportMaterialAsync(QQ, FQ, wQ, LQ) {
        let qQ = this._materialMap.get(QQ);
        if (void 0 === qQ) {
          const LQ = FQ && Object.keys(FQ).some((QQ => QQ.startsWith("uv")));
          if ((QQ = QQ instanceof oL.c ? QQ.qQQ[wQ.materialIndex] : QQ) instanceof CF) qQ = await this._materialExporter.exportPBRMaterialAsync(QQ, LQ);
          else if (QQ instanceof DL.StandardMaterial) qQ = await this._materialExporter.exportStandardMaterialAsync(QQ, LQ);
          else {
            if (!(QQ instanceof BF)) return void OQ.c.Warn(`Unsupported material '${QQ.name}' with type ${QQ.getClassName()}`);
            qQ = await this._materialExporter.exportOpenPBRMaterialAsync(QQ, LQ)
          }
          this._materialMap.set(QQ, qQ)
        }
        LQ.material = qQ
      }
      async _exportMeshAsync(QQ, FQ) {
        let wQ = FQ.getMesh(QQ);
        if (void 0 !== wQ) return wQ;
        const LQ = {
          primitives: []
        };
        wQ = this._meshes.length, this._meshes.push(LQ), FQ.setMesh(QQ, wQ);
        const qQ = QQ.isUnIndexed ? null : QQ.OLQ(),
          DQ = QQ.geometry?.getVertexBuffers(),
          kQ = FQ.getMorphTargetsFromMesh(QQ),
          vQ = QQ instanceof xL.e,
          mQ = QQ instanceof NL,
          uQ = QQ.lC;
        if (DQ && uQ && uQ.length > 0)
          for (const HQ of uQ) {
            const wQ = {
                attributes: {}
              },
              uQ = HQ.Ux() || this._babylonScene.defaultMaterial;
            if (mQ) {
              const FQ = {
                  name: uQ.name
                },
                LQ = QQ,
                qQ = tQ.Color3.White(),
                oQ = LQ.material?.alpha ?? 1,
                DQ = LQ.greasedLineMaterial?.color ?? qQ;
              (!DQ.equalsWithEpsilon(qQ, Tw.b) || oQ < 1) && (FQ.pbrMetallicRoughness = {
                baseColorFactor: [...DQ.RLQ(), oQ]
              }), this._materials.push(FQ), wQ.material = this._materials.length - 1
            } else if (vQ) {
              const FQ = {
                  name: uQ.name
                },
                LQ = QQ;
              (!LQ.color.equalsWithEpsilon(tQ.Color3.White(), Tw.b) || LQ.alpha < 1) && (FQ.pbrMetallicRoughness = {
                baseColorFactor: [...LQ.color.RLQ(), LQ.alpha]
              }), this._materials.push(FQ), wQ.material = this._materials.length - 1
            } else await this._exportMaterialAsync(uQ, DQ, HQ, wQ);
            const bQ = vQ || mQ ? oQ.d.LineListDrawMode : QQ.overrideRenderingFillMode ?? uQ.fillMode;
            let YQ = uQ._getEffectiveOrientation(QQ);
            FQ.wasAddedByNoopNode && !QQ.iN().useRightHandedSystem && (YQ = YQ === oQ.d.ClockWiseSideOrientation ? oQ.d.CounterClockWiseSideOrientation : oQ.d.ClockWiseSideOrientation), this._exportIndices(qQ, qQ ? (0, Uw.c)(qQ, HQ.indexCount, HQ.indexStart, HQ.verticesStart) : HQ.verticesCount > 65535, qQ ? HQ.indexStart : HQ.verticesStart, qQ ? HQ.indexCount : HQ.verticesCount, -HQ.verticesStart, bQ, YQ, FQ, wQ);
            for (const QQ of Object.values(DQ)) this._exportVertexBuffer(QQ, uQ, HQ.verticesStart, HQ.verticesCount, FQ, wQ);
            if (kQ) {
              wQ.targets = [];
              for (const QQ of kQ) wQ.targets.push(QQ.attributes)
            }
            LQ.primitives.push(wQ), this._extensionsPostExportMeshPrimitive(wQ)
          }
        if (kQ) {
          LQ.weights = [], LQ.extras || (LQ.extras = {}), LQ.extras.targetNames = [];
          for (const QQ of kQ) LQ.weights.push(QQ.influence), LQ.extras.targetNames.push(QQ.name)
        }
        return wQ
      }
    }
    KL._ExtensionNames = new Array, KL._ExtensionFactories = {}, KL._ExtensionOrders = {};
    class zL {
      static async GLTFAsync(QQ, FQ, wQ) {
        wQ && wQ.exportWithoutWaitingForScene || await QQ.whenReadyAsync();
        const LQ = new KL(QQ, wQ),
          qQ = await LQ.generateGLTFAsync(FQ.replace(/\.[^/.]+$/, ""));
        return LQ.dispose(), qQ
      }
      static async GLBAsync(QQ, FQ, wQ) {
        wQ && wQ.exportWithoutWaitingForScene || await QQ.whenReadyAsync();
        const LQ = new KL(QQ, wQ),
          qQ = await LQ.generateGLBAsync(FQ.replace(/\.[^/.]+$/, ""));
        return LQ.dispose(), qQ
      }
    }
    const lL = "EXT_mesh_gpu_instancing";

    function jL(QQ, FQ) {
      const wQ = new Float32Array(3 * FQ);
      for (let LQ = 0; LQ < FQ; LQ++) wQ[3 * LQ + 0] = QQ[4 * LQ + 0], wQ[3 * LQ + 1] = QQ[4 * LQ + 1], wQ[3 * LQ + 2] = QQ[4 * LQ + 2];
      return wQ
    }
    class aL {
      constructor(QQ) {
        this.name = lL, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(QQ, FQ, wQ, LQ, qQ, oQ) {
        return await new Promise((QQ => {
          if (FQ && wQ instanceof SL.c && wQ.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const QQ = jQ.p.Zero(),
              LQ = jQ.e.Identity(),
              DQ = jQ.p.One(),
              kQ = wQ.thinInstanceGetWorldMatrices(),
              vQ = jQ.k.Ox[2],
              mQ = jQ.k.Quaternion[1],
              uQ = jQ.k.Ox[3];
            let HQ = !1,
              bQ = !1,
              YQ = !1;
            const xQ = new Float32Array(3 * wQ.o4),
              AQ = new Float32Array(4 * wQ.o4),
              tQ = new Float32Array(3 * wQ.o4);
            let eQ = 0;
            for (const FQ of kQ) FQ.decompose(uQ, mQ, vQ), qQ && (Ew(vQ), nw(mQ)), xQ.set(vQ.RLQ(), 3 * eQ), AQ.set(mQ.normalize().RLQ(), 4 * eQ), tQ.set(uQ.RLQ(), 3 * eQ), HQ = HQ || !vQ.equalsWithEpsilon(QQ), bQ = bQ || !mQ.equalsWithEpsilon(LQ), YQ = YQ || !uQ.equalsWithEpsilon(DQ), eQ++;
            const MQ = {
              attributes: {}
            };
            HQ && (MQ.attributes.TRANSLATION = this._buildAccessor(xQ, "VEC3", wQ.o4, oQ)), bQ && (MQ.attributes.ROTATION = this._buildAccessor(AQ, "VEC4", wQ.o4, oQ)), YQ && (MQ.attributes.SCALE = this._buildAccessor(tQ, "VEC3", wQ.o4, oQ));
            let GQ = wQ._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (GQ) {
              const QQ = wQ.o4,
                FQ = "VEC3";
              wQ.hasVertexAlpha && GQ.length === 4 * QQ ? (this._instanceColorWarned || (OQ.c.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), GQ = jL(GQ, QQ)) : GQ.length === 4 * QQ && (GQ = jL(GQ, QQ)), GQ.length === 3 * QQ && (MQ.attributes._COLOR_0 = this._buildAccessor(GQ, FQ, QQ, oQ))
            }
            FQ.extensions = FQ.extensions || {}, FQ.extensions[lL] = MQ
          }
          QQ(FQ)
        }))
      }
      _buildAccessor(QQ, FQ, wQ, LQ) {
        const qQ = LQ.createBufferView(QQ),
          oQ = LQ.createAccessor(qQ, FQ, 5126, wQ);
        return this._exporter._accessors.push(oQ), this._exporter._accessors.length - 1
      }
    }
    let XL = !1;

    function fL() {
      XL || (XL = !0, KL.RegisterExtension(lL, (QQ => new aL(QQ))))
    }
    wQ(39906);
    fL();
    var VL = wQ(41257);

    function hL(QQ, FQ, wQ, LQ) {
      const qQ = QQ;
      let oQ = null,
        DQ = null,
        kQ = null,
        vQ = null;
      const mQ = {},
        uQ = FQ.find((QQ => "POSITION" === QQ.dracoName));
      if (!uQ) throw new Error("Draco: Missing position attribute for encoding.");
      if (!wQ) {
        const QQ = uQ.data.length / uQ.size;
        wQ = new(QQ > 65535 ? Uint32Array : Uint16Array)(QQ);
        for (let FQ = 0; FQ < QQ; FQ++) wQ[FQ] = FQ
      }
      try {
        oQ = new qQ.Encoder, DQ = new qQ.MeshBuilder, kQ = new qQ.Mesh, DQ.AddFacesToMesh(kQ, wQ.length / 3, wQ);
        const QQ = new Map([
          [Float32Array, (QQ, FQ, wQ, LQ, qQ, oQ) => QQ.AddFloatAttribute(FQ, wQ, LQ, qQ, oQ)],
          [Uint32Array, (QQ, FQ, wQ, LQ, qQ, oQ) => QQ.AddUInt32Attribute(FQ, wQ, LQ, qQ, oQ)],
          [Uint16Array, (QQ, FQ, wQ, LQ, qQ, oQ) => QQ.AddUInt16Attribute(FQ, wQ, LQ, qQ, oQ)],
          [Uint8Array, (QQ, FQ, wQ, LQ, qQ, oQ) => QQ.AddUInt8Attribute(FQ, wQ, LQ, qQ, oQ)],
          [Int32Array, (QQ, FQ, wQ, LQ, qQ, oQ) => QQ.AddInt32Attribute(FQ, wQ, LQ, qQ, oQ)],
          [Int16Array, (QQ, FQ, wQ, LQ, qQ, oQ) => QQ.AddInt16Attribute(FQ, wQ, LQ, qQ, oQ)],
          [Int8Array, (QQ, FQ, wQ, LQ, qQ, oQ) => QQ.AddInt8Attribute(FQ, wQ, LQ, qQ, oQ)]
        ]);
        for (const wQ of FQ) {
          wQ.data instanceof Uint8ClampedArray && (wQ.data = new Uint8Array(wQ.data));
          const FQ = QQ.get(wQ.data.constructor),
            vQ = wQ.data.length / wQ.size;
          mQ[wQ.kind] = FQ(DQ, kQ, qQ[wQ.dracoName], vQ, wQ.size, wQ.data), LQ.quantizationBits && LQ.quantizationBits[wQ.dracoName] && oQ.SetAttributeQuantization(qQ[wQ.dracoName], LQ.quantizationBits[wQ.dracoName])
        }
        LQ.method && oQ.SetEncodingMethod(qQ[LQ.method]), void 0 !== LQ.encodeSpeed && void 0 !== LQ.decodeSpeed && oQ.SetSpeedOptions(LQ.encodeSpeed, LQ.decodeSpeed), vQ = new qQ.DracoInt8Array;
        const uQ = oQ.EncodeMeshToDracoBuffer(kQ, vQ);
        if (uQ <= 0) throw new Error("Draco: Failed to encode.");
        const HQ = new Int8Array(uQ);
        for (let FQ = 0; FQ < uQ; FQ++) HQ[FQ] = vQ.GetValue(FQ);
        return {
          data: HQ,
          attributeIds: mQ
        }
      } finally {
        kQ && qQ.destroy(kQ), DQ && qQ.destroy(DQ), oQ && qQ.destroy(oQ), vQ && qQ.destroy(vQ)
      }
    }

    function JL() {
      let QQ;
      onmessage = FQ => {
        const wQ = FQ.data;
        switch (wQ.id) {
          case "init": {
            wQ.url && importScripts(wQ.url);
            const FQ = wQ.wasmBinary ? {
              wasmBinary: wQ.wasmBinary
            } : {};
            QQ = DracoEncoderModule(FQ), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!QQ) throw new Error("Draco: Encoder module is not available.");
            QQ.then((QQ => {
              const FQ = hL(QQ, wQ.attributes, wQ.indices, wQ.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: FQ
              }, FQ ? [FQ.data.buffer] : void 0)
            })).catch((QQ => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: QQ.message
              })
            }))
        }
      }
    }
    class EL {
      constructor(QQ) {
        if (QQ.workerPool) return void(this._workerPoolPromise = Promise.resolve(QQ.workerPool));
        const FQ = QQ.wasmBinary,
          wQ = QQ.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          LQ = wQ && "function" === typeof Worker && "function" === typeof URL,
          qQ = LQ || !QQ.jsModule,
          oQ = QQ.wasmUrl && QQ.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: qQ ? iF.g.GetBabylonScriptURL(QQ.wasmUrl, !0) : "",
            wasmBinaryPromise: FQ ? Promise.resolve(FQ) : iF.g.LoadFileAsync(iF.g.GetBabylonScriptURL(QQ.wasmBinaryUrl, !0))
          } : {
            url: qQ ? iF.g.GetBabylonScriptURL(QQ.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        LQ ? this._workerPoolPromise = oQ.wasmBinaryPromise.then((QQ => {
          const FQ = this._getWorkerContent(),
            LQ = URL.createObjectURL(new Blob([FQ], {
              type: "application/javascript"
            }));
          return new VL.c(wQ, (() => async function(QQ, FQ, wQ) {
            return await new Promise(((LQ, qQ) => {
              const oQ = FQ => {
                  QQ.removeEventListener("error", oQ), QQ.removeEventListener("message", DQ), qQ(FQ)
                },
                DQ = FQ => {
                  "initDone" === FQ.data.id && (QQ.removeEventListener("error", oQ), QQ.removeEventListener("message", DQ), LQ(QQ))
                };
              if (QQ.addEventListener("error", oQ), QQ.addEventListener("message", DQ), FQ) {
                const LQ = FQ.slice(0);
                QQ.postMessage({
                  id: "init",
                  url: wQ,
                  wasmBinary: LQ
                }, [LQ])
              } else QQ.postMessage({
                id: "init",
                url: wQ
              })
            }))
          }(new Worker(LQ), QQ, oQ.url)))
        })) : this._modulePromise = oQ.wasmBinaryPromise.then((async FQ => {
          if (!this._isModuleAvailable() && !QQ.jsModule) {
            if (!oQ.url) throw new Error("Draco codec module is not available");
            await iF.g.LoadBabylonScriptAsync(oQ.url)
          }
          return await this._createModuleAsync(FQ, QQ.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((QQ => {
          QQ.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function nL() {
      const QQ = QQ => !!QQ && "object" === typeof QQ;
      for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
      return wQ.reduce(((FQ, wQ) => {
        const LQ = Object.keys(wQ);
        for (const qQ of LQ) {
          const LQ = FQ[qQ],
            oQ = wQ[qQ];
          Array.isArray(LQ) && Array.isArray(oQ) ? FQ[qQ] = LQ.concat(oQ) : QQ(LQ) && QQ(oQ) ? FQ[qQ] = nL(LQ, oQ) : FQ[qQ] = oQ
        }
        return FQ
      }), {})
    }

    function gL(QQ) {
      return QQ === aQ.h.PositionKind ? "POSITION" : QQ === aQ.h.NormalKind ? "NORMAL" : QQ === aQ.h.ColorKind ? "COLOR" : QQ.startsWith(aQ.h.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const PL = {
      decodeSpeed: 5,
      encodeSpeed: 5,
      method: "MESH_EDGEBREAKER_ENCODING",
      quantizationBits: {
        POSITION: 14,
        NORMAL: 10,
        COLOR: 8,
        TEX_COORD: 12,
        GENERIC: 12
      }
    };
    class ZL extends EL {
      static get DefaultAvailable() {
        return !!((QQ = ZL.DefaultConfiguration).wasmUrl && (QQ.wasmBinary || QQ.wasmBinaryUrl) && "object" === typeof WebAssembly || QQ.fallbackUrl);
        var QQ
      }
      static get Default() {
        return ZL._Default ?? (ZL._Default = new ZL), ZL._Default
      }
      static ResetDefault(QQ) {
        ZL._Default && (QQ || ZL._Default.dispose(), ZL._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(QQ, FQ) {
        return {
          module: await (FQ || DracoEncoderModule)({
            wasmBinary: QQ
          })
        }
      }
      _getWorkerContent() {
        return `${hL}(${JL})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZL.DefaultConfiguration)
      }
      async _encodeAsync(QQ, FQ, wQ) {
        const LQ = wQ ? nL(PL, wQ) : PL;
        if (this._workerPoolPromise) {
          const wQ = await this._workerPoolPromise;
          return await new Promise(((qQ, oQ) => {
            wQ.push(((wQ, DQ) => {
              const kQ = QQ => {
                  wQ.removeEventListener("error", kQ), wQ.removeEventListener("message", vQ), oQ(QQ), DQ()
                },
                vQ = QQ => {
                  "encodeMeshSuccess" === QQ.data.id ? (wQ.removeEventListener("error", kQ), wQ.removeEventListener("message", vQ), qQ(QQ.data.encodedMeshData), DQ()) : "encodeMeshError" === QQ.data.id && (wQ.removeEventListener("error", kQ), wQ.removeEventListener("message", vQ), oQ(new Error(QQ.data.errorMessage)), DQ())
                };
              wQ.addEventListener("error", kQ), wQ.addEventListener("message", vQ);
              const mQ = [];
              for (const FQ of QQ) mQ.push(FQ.data.buffer);
              FQ && mQ.push(FQ.buffer), wQ.postMessage({
                id: "encodeMesh",
                attributes: QQ,
                indices: FQ,
                options: LQ
              }, mQ)
            }))
          }))
        }
        if (this._modulePromise) {
          return hL((await this._modulePromise).module, QQ, FQ, LQ)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(QQ, FQ) {
        if (0 == QQ.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        QQ instanceof SL.c && QQ.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === FQ?.method && (OQ.c.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), FQ.method = "MESH_SEQUENTIAL_ENCODING");
        const wQ = function(QQ) {
            let FQ = QQ.OLQ(void 0, !0);
            return !FQ || FQ instanceof Uint32Array || FQ instanceof Uint16Array || (FQ = ((0, Uw.c)(FQ, FQ.length) ? Uint32Array : Uint16Array).from(FQ)), FQ
          }(QQ),
          LQ = function(QQ, FQ) {
            const wQ = [];
            for (const LQ of QQ.getVerticesDataKinds()) {
              if (FQ?.includes(LQ)) {
                if (LQ === aQ.h.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const qQ = QQ.getVertexBuffer(LQ),
                oQ = qQ.getSize(),
                DQ = (0, Uw.u)(qQ.getData(), oQ, qQ.type, qQ.byteOffset, qQ.byteStride, QQ.getTotalVertices(), !0);
              wQ.push({
                kind: LQ,
                dracoName: gL(LQ),
                size: oQ,
                data: DQ
              })
            }
            return wQ
          }(QQ, FQ?.excludedAttributes);
        return await this._encodeAsync(LQ, wQ, FQ)
      }
    }
    ZL.DefaultConfiguration = {
      wasmUrl: `${iF.g._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${iF.g._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${iF.g._DefaultCdnUrl}/draco_encoder.js`
    }, ZL._Default = null;
    const yL = "KHR_draco_mesh_compression";
    class BL {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(QQ) {
        this.name = yL, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === QQ.options.meshCompressionMethod && ZL.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(QQ, FQ, wQ) {
        if (!this.enabled) return;
        if (4 !== QQ.mode && 5 !== QQ.mode) return void OQ.c.Warn("Cannot compress primitive with mode " + QQ.mode + ".");
        const LQ = [],
          qQ = [];
        let oQ = null;
        if (void 0 !== QQ.indices) {
          const DQ = wQ[QQ.indices],
            kQ = FQ.getBufferView(DQ);
          oQ = FQ.getData(kQ).slice(), LQ.push(kQ), qQ.push(DQ)
        }
        const DQ = [];
        for (const [uQ, HQ] of Object.entries(QQ.attributes)) {
          const QQ = wQ[HQ],
            oQ = FQ.getBufferView(QQ),
            vQ = Vw(QQ.type),
            mQ = (0, Uw.u)(FQ.getData(oQ), vQ, QQ.componentType, QQ.byteOffset || 0, oQ.byteStride || (0, Uw.q)(QQ.componentType) * vQ, QQ.count, !0);
          DQ.push({
            kind: uQ,
            dracoName: (kQ = uQ, "POSITION" === kQ ? "POSITION" : "NORMAL" === kQ ? "NORMAL" : kQ.startsWith("COLOR") ? "COLOR" : kQ.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Vw(QQ.type),
            data: mQ
          }), LQ.push(oQ), qQ.push(QQ)
        }
        var kQ;
        const vQ = {
            method: QQ.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          mQ = ZL.Default._encodeAsync(DQ, oQ, vQ).then((wQ => {
            const oQ = {
                bufferView: -1,
                attributes: wQ.attributeIds
              },
              DQ = FQ.createBufferView(wQ.data);
            FQ.setBufferView(oQ, DQ);
            for (const QQ of LQ) this._bufferViewsUsed.add(QQ);
            for (const QQ of qQ) this._accessorsUsed.add(QQ);
            QQ.extensions || (QQ.extensions = {}), QQ.extensions[yL] = oQ
          })).catch((QQ => {
            OQ.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + QQ.message)
          }));
        this._encodePromises.push(mQ), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(QQ) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((FQ => {
          QQ.getPropertiesWithBufferView(FQ).every((QQ => this._accessorsUsed.has(QQ))) && QQ.removeBufferView(FQ)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let dL = !1;

    function Qq() {
      dL || (dL = !0, KL.RegisterExtension(yL, (QQ => new BL(QQ))))
    }
    Qq();
    var Fq = wQ(40986);
    const wq = "KHR_lights_punctual",
      Lq = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      qq = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      oq = jQ.p.Backward();
    class Dq {
      constructor(QQ) {
        this.name = wq, this.enabled = !0, this.required = !1, this._exporter = QQ
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[wq] = this._lights
      }
      async postExportNodeAsync(QQ, FQ, wQ, LQ, qQ) {
        return await new Promise((oQ => {
          if (!(wQ instanceof HL.c)) return void oQ(FQ);
          const DQ = wQ.getTypeID() == HL.c.LIGHTTYPEID_POINTLIGHT ? "point" : wQ.getTypeID() == HL.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : wQ.getTypeID() == HL.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!DQ || !(wQ instanceof Fq.b)) return OQ.c.Warn(`${QQ}: Light ${wQ.name} is not supported in ${wq}`), void oQ(FQ);
          if (wQ.falloffType !== HL.c.FALLOFF_GLTF && OQ.c.Warn(`${QQ}: Light falloff for ${wQ.name} does not match the ${wq} specification!`), !wQ.position.LkQ(0, 0, 0)) {
            const QQ = jQ.k.Ox[0].Qs(wQ.position);
            qQ && Ew(QQ), FQ.translation = QQ.RLQ()
          }
          if ("point" !== DQ) {
            const QQ = wQ.direction.normalizeToRef(jQ.k.Ox[0]);
            qQ && Ew(QQ);
            const LQ = jQ.e.FromUnitVectorsToRef(oq, QQ, jQ.k.Quaternion[0]);
            jQ.e.IsIdentity(LQ) || (FQ.rotation = LQ.RLQ())
          }
          const kQ = {
            type: DQ,
            name: wQ.name,
            color: wQ.diffuse.RLQ(),
            intensity: wQ.intensity,
            range: wQ.range
          };
          if (Bw(kQ, Lq), "spot" === DQ) {
            const QQ = wQ;
            kQ.spot = {
              innerConeAngle: QQ.innerAngle / 2,
              outerConeAngle: QQ.angle / 2
            }, Bw(kQ.spot, qq)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(kQ);
          const vQ = {
              light: this._lights.lights.length - 1
            },
            mQ = wQ.parent;
          if (mQ && Zw(wQ, mQ)) {
            const QQ = LQ.get(mQ);
            if (QQ) {
              const wQ = this._exporter._nodes[QQ];
              return Pw(FQ, wQ), wQ.extensions || (wQ.extensions = {}), wQ.extensions[wq] = vQ, void oQ(null)
            }
          }
          FQ.extensions || (FQ.extensions = {}), FQ.extensions[wq] = vQ, oQ(FQ)
        }))
      }
    }
    let kq = !1;

    function vq() {
      kq || (kq = !0, KL.RegisterExtension(wq, (QQ => new Dq(QQ))))
    }
    vq();
    const mq = "KHR_interactivity";
    class uq {
      constructor(QQ) {
        this._exporter = QQ, this.name = mq, this.enabled = !!QQ.options.khrInteractivity, this.required = QQ.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var QQ, FQ, wQ;
        const LQ = this._exporter.options.khrInteractivity;
        if (!LQ) return;
        const qQ = LQ.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: QQ => this._exporter._getNodeIndex(QQ),
          getAnimationIndex: QQ => this._exporter._getAnimationIndex(QQ),
          getCameraIndex: QQ => this._exporter._getCameraIndex(QQ),
          getMaterialIndex: QQ => this._exporter._getMaterialIndex(QQ),
          getRootIndex: (QQ, FQ) => this._exporter._getRootIndex(QQ, FQ),
          setNodeExtension: (QQ, FQ, wQ) => this._exporter._setNodeExtension(QQ, FQ, wQ)
        });
        this._exporter._glTF.extensions[mq] = qQ;
        for (const oQ of LQ.additionalExtensionsUsed)(QQ = this._exporter._glTF).extensionsUsed || (QQ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(oQ) && this._exporter._glTF.extensionsUsed.push(oQ);
        for (const oQ of LQ.additionalExtensionsRequired)(FQ = this._exporter._glTF).extensionsUsed || (FQ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(oQ) && this._exporter._glTF.extensionsUsed.push(oQ), (wQ = this._exporter._glTF).extensionsRequired || (wQ.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(oQ) && this._exporter._glTF.extensionsRequired.push(oQ)
      }
    }
    let Hq = !1;

    function bq() {
      Hq || (Hq = !0, KL.RegisterExtension(mq, (QQ => new uq(QQ)), 200))
    }
    bq();
    const Yq = "EXT_lights_area",
      xq = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      Aq = {
        aspect: 1
      },
      tq = jQ.p.Backward();
    class eq {
      constructor(QQ) {
        this.name = Yq, this.enabled = !0, this.required = !1, this._exporter = QQ
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Yq] = this._lights
      }
      async postExportNodeAsync(QQ, FQ, wQ, LQ, qQ) {
        return await new Promise((oQ => {
          if (!(wQ instanceof HL.c)) return void oQ(FQ);
          const DQ = wQ.getTypeID() == HL.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!DQ) return OQ.c.Warn(`${QQ}: Light ${wQ.name} is not supported in ${Yq}`), void oQ(FQ);
          const kQ = wQ;
          if (kQ.falloffType !== HL.c.FALLOFF_GLTF && OQ.c.Warn(`${QQ}: Light falloff for ${wQ.name} does not match the ${Yq} specification!`), !kQ.position.LkQ(0, 0, 0)) {
            const QQ = jQ.k.Ox[0].Qs(kQ.position);
            qQ && Ew(QQ), FQ.translation = QQ.RLQ()
          }
          const vQ = jQ.p.Forward();
          qQ && Ew(vQ);
          const mQ = jQ.e.FromUnitVectorsToRef(tq, vQ, jQ.k.Quaternion[0]);
          jQ.e.IsIdentity(mQ) || (FQ.rotation = mQ.RLQ());
          const uQ = {
            type: DQ,
            name: kQ.name,
            color: kQ.diffuse.RLQ(),
            intensity: kQ.intensity,
            size: kQ.height,
            rect: {
              aspect: kQ.width / kQ.height
            }
          };
          Bw(uQ, xq), uQ.rect && Bw(uQ.rect, Aq), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(uQ);
          const HQ = {
              light: this._lights.lights.length - 1
            },
            bQ = wQ.parent;
          if (bQ && Zw(kQ, bQ)) {
            const QQ = LQ.get(bQ);
            if (QQ) {
              const wQ = this._exporter._nodes[QQ];
              return Pw(FQ, wQ), wQ.extensions || (wQ.extensions = {}), wQ.extensions[Yq] = HQ, void oQ(null)
            }
          }
          FQ.extensions || (FQ.extensions = {}), FQ.extensions[Yq] = HQ, oQ(FQ)
        }))
      }
    }
    let Mq = !1;

    function Gq() {
      Mq || (Mq = !0, KL.RegisterExtension(Yq, (QQ => new eq(QQ))))
    }
    Gq();
    const pq = "KHR_materials_anisotropy";
    class cq {
      constructor(QQ) {
        this.name = pq, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        const LQ = [];
        if (wQ instanceof CF) {
          if (wQ.anisotropy.isEnabled && !wQ.anisotropy.legacy) return wQ.anisotropy.texture && LQ.push(wQ.anisotropy.texture), LQ
        } else if (wQ instanceof BF && wQ.specularRoughnessAnisotropy > 0) {
          const QQ = function(QQ) {
            const FQ = QQ.specularRoughnessAnisotropyTexture,
              wQ = QQ.geometryTangentTexture;
            return `${FQ&&FQ.getInternalTexture()?FQ.getInternalTexture().uniqueId:"NoStrength"}_${wQ&&wQ.getInternalTexture()?wQ.getInternalTexture().uniqueId:"NoTangent"}`
          }(wQ);
          if (this._anisoTexturesMap[QQ]) LQ.push(this._anisoTexturesMap[QQ]);
          else {
            const FQ = await async function(QQ) {
              const FQ = QQ.iN(),
                wQ = QQ.specularRoughnessAnisotropyTexture,
                LQ = QQ.geometryTangentTexture;
              return wQ || LQ ? await Dw("AnisotropyTexture", mw(LQ ? kw(LQ, 0) : vw(1), LQ ? kw(LQ, 1) : vw(0), wQ ? kw(wQ, 0) : vw(1)), FQ) : null
            }(wQ);
            FQ && (LQ.push(FQ), this._anisoTexturesMap[QQ] = FQ)
          }
          return LQ
        }
        return []
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          var LQ;
          if (wQ instanceof CF) {
            if (!wQ.anisotropy.isEnabled || wQ.anisotropy.legacy) return void QQ(FQ);
            this._wasUsed = !0, FQ.extensions = FQ.extensions || {};
            const LQ = this._exporter._materialExporter.getTextureInfo(wQ.anisotropy.texture),
              qQ = {
                anisotropyStrength: wQ.anisotropy.intensity,
                anisotropyRotation: wQ.anisotropy.angle,
                anisotropyTexture: LQ ?? void 0
              };
            null !== qQ.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[pq] = qQ
          } else if (wQ instanceof BF && wQ.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, FQ.extensions = FQ.extensions || {};
            let qQ = wQ.specularRoughnessTexture;
            wQ._useRoughnessFromMetallicTextureGreen && (qQ = wQ.baseMetalnessTexture);
            const oQ = this._anisoTexturesMap[wQ.id];
            if (!qQ && !oQ) {
              let LQ = wQ.specularRoughness,
                qQ = wQ.specularRoughnessAnisotropy;
              if (!wQ._useGltfStyleAnisotropy) {
                const QQ = function(QQ, FQ) {
                  const wQ = QQ * QQ,
                    LQ = wQ * Math.sqrt(2 / (1 + (1 - FQ) * (1 - FQ))),
                    qQ = (1 - FQ) * LQ;
                  return {
                    newBaseRoughness: Math.sqrt(qQ),
                    newAnisotropyStrength: Math.min(Math.sqrt((LQ - wQ) / Math.max(1 - wQ, 1e-4)), 1)
                  }
                }(wQ.specularRoughness, wQ.specularRoughnessAnisotropy);
                LQ = QQ.newBaseRoughness, qQ = QQ.newAnisotropyStrength
              }
              FQ.pbrMetallicRoughness && (FQ.pbrMetallicRoughness.roughnessFactor = LQ);
              const oQ = {
                anisotropyStrength: qQ,
                anisotropyRotation: wQ.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return FQ.extensions[pq] = oQ, QQ(FQ)
            }
            const DQ = oQ ? this._exporter._materialExporter.getTextureInfo(oQ) : null,
              kQ = {
                anisotropyStrength: wQ.specularRoughnessAnisotropy,
                anisotropyRotation: wQ.geometryTangentAngle,
                anisotropyTexture: DQ || void 0,
                extensions: {}
              };
            wQ._useGltfStyleAnisotropy || (FQ.extensions.KHR_materials_openpbr = {}, (LQ = this._exporter._glTF).extensionsUsed || (LQ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[pq] = kQ
          }
          QQ(FQ)
        }))
      }
    }
    let Cq = !1;

    function Sq() {
      Cq || (Cq = !0, KL.RegisterExtension(pq, (QQ => new cq(QQ))))
    }
    Sq();
    const iq = "KHR_materials_clearcoat";

    function Wq(QQ, FQ) {
      const wQ = new rQ.e(FQ.name, FQ.iN());
      return wQ._texture = QQ, wQ.coordinatesIndex = FQ.coordinatesIndex, FQ instanceof rQ.e && (wQ.uOffset = FQ.uOffset, wQ.vOffset = FQ.vOffset, wQ.uScale = FQ.uScale, wQ.vScale = FQ.vScale, wQ.wAng = FQ.wAng), wQ.wrapU = FQ.wrapU, wQ.wrapV = FQ.wrapV, wQ
    }
    class Rq {
      constructor(QQ) {
        this.name = iq, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = QQ
      }
      dispose() {
        for (const QQ of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[QQ].dispose()
        }
        this._mergedTexturesMap = {};
        for (const QQ of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[QQ].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        const LQ = [];
        if (wQ instanceof CF) {
          if (wQ.clearCoat.isEnabled) return wQ.clearCoat.texture && LQ.push(wQ.clearCoat.texture), !wQ.clearCoat.useRoughnessFromMainTexture && wQ.clearCoat.textureRoughness && LQ.push(wQ.clearCoat.textureRoughness), wQ.clearCoat.bumpTexture && LQ.push(wQ.clearCoat.bumpTexture), LQ
        } else if (wQ instanceof BF && wQ.coatWeight > 0) {
          let QQ = !1;
          if (wQ.coatWeightTexture ? wQ.coatRoughnessTexture ? wQ._useCoatRoughnessFromGreenChannel && wQ.coatWeightTexture.getInternalTexture() === wQ.coatRoughnessTexture.getInternalTexture() ? (LQ.push(wQ.coatWeightTexture), LQ.push(wQ.coatRoughnessTexture)) : QQ = !0 : LQ.push(wQ.coatWeightTexture) : wQ.coatRoughnessTexture && (wQ._useCoatRoughnessFromGreenChannel ? LQ.push(wQ.coatRoughnessTexture) : QQ = !0), QQ) {
            const QQ = function(QQ) {
              const FQ = QQ.coatWeightTexture,
                wQ = FQ && FQ.getInternalTexture() ? FQ.getInternalTexture().uniqueId : "NoCoat",
                LQ = QQ.coatRoughnessTexture;
              return `${wQ}_${LQ&&LQ.getInternalTexture()?LQ.getInternalTexture().uniqueId:"NoRoughness"}`
            }(wQ);
            if (!this._cachedInternalTexturesMap[QQ]) {
              const FQ = await async function(QQ) {
                const FQ = QQ.iN(),
                  wQ = QQ.coatWeightTexture,
                  LQ = QQ.coatRoughnessTexture;
                return wQ || LQ ? (await Dw("CoatTexture", mw(wQ ? kw(wQ, 0) : vw(1), LQ ? kw(LQ, QQ._useCoatRoughnessFromGreenChannel ? 1 : 0) : vw(1)), FQ)).getInternalTexture() : null
              }(wQ);
              FQ && (this._cachedInternalTexturesMap[QQ] = FQ)
            }
            this._cachedInternalTexturesMap[QQ] && (wQ.coatWeightTexture && (this._mergedTexturesMap[wQ.coatWeightTexture.uniqueId] = Wq(this._cachedInternalTexturesMap[QQ], wQ.coatWeightTexture), LQ.push(this._mergedTexturesMap[wQ.coatWeightTexture.uniqueId])), wQ.coatRoughnessTexture && (this._mergedTexturesMap[wQ.coatRoughnessTexture.uniqueId] = Wq(this._cachedInternalTexturesMap[QQ], wQ.coatRoughnessTexture), LQ.push(this._mergedTexturesMap[wQ.coatRoughnessTexture.uniqueId])))
          }
          return wQ.geometryCoatNormalTexture && LQ.push(wQ.geometryCoatNormalTexture), LQ
        }
        return []
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          if (wQ instanceof CF) {
            if (!wQ.clearCoat.isEnabled) return void QQ(FQ);
            this._wasUsed = !0, FQ.extensions = FQ.extensions || {};
            const LQ = this._exporter._materialExporter.getTextureInfo(wQ.clearCoat.texture);
            let qQ;
            qQ = wQ.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(wQ.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(wQ.clearCoat.textureRoughness), wQ.clearCoat.isTintEnabled && iF.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${wQ.name}`), wQ.clearCoat.remapF0OnInterfaceChange && iF.g.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${wQ.name}`);
            const oQ = this._exporter._materialExporter.getTextureInfo(wQ.clearCoat.bumpTexture),
              DQ = {
                clearcoatFactor: wQ.clearCoat.intensity,
                clearcoatTexture: LQ ?? void 0,
                clearcoatRoughnessFactor: wQ.clearCoat.roughness,
                clearcoatRoughnessTexture: qQ ?? void 0,
                clearcoatNormalTexture: oQ ?? void 0
              };
            null === DQ.clearcoatTexture && null === DQ.clearcoatRoughnessTexture && null === DQ.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[iq] = DQ
          } else if (wQ instanceof BF) {
            if (0 == wQ.coatWeight) return void QQ(FQ);
            let LQ, qQ, oQ, DQ;
            this._wasUsed = !0, FQ.extensions = FQ.extensions || {}, wQ.coatWeightTexture && (LQ = this._mergedTexturesMap[wQ.coatWeightTexture.uniqueId], qQ = this._exporter._materialExporter.getTextureInfo(LQ)), wQ.coatRoughnessTexture && (oQ = this._mergedTexturesMap[wQ.coatRoughnessTexture.uniqueId], DQ = this._exporter._materialExporter.getTextureInfo(oQ)), wQ.coatColorTexture && iF.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${wQ.name}`);
            const kQ = this._exporter._materialExporter.getTextureInfo(wQ.geometryCoatNormalTexture),
              vQ = {
                clearcoatFactor: wQ.coatWeight,
                clearcoatTexture: qQ ?? void 0,
                clearcoatRoughnessFactor: wQ.coatRoughness,
                clearcoatRoughnessTexture: DQ ?? void 0,
                clearcoatNormalTexture: kQ ?? void 0
              };
            null === vQ.clearcoatTexture && null === vQ.clearcoatRoughnessTexture && null === vQ.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[iq] = vQ
          }
          QQ(FQ)
        }))
      }
    }
    let Oq = !1;

    function sq() {
      Oq || (Oq = !0, KL.RegisterExtension(iq, (QQ => new Rq(QQ))))
    }
    sq();
    const rq = "KHR_materials_coat";

    function Iq(QQ) {
      const FQ = QQ.coatRoughnessAnisotropyTexture,
        wQ = QQ.geometryCoatTangentTexture;
      return `${FQ&&FQ.getInternalTexture()?FQ.getInternalTexture().uniqueId:"NoStrength"}_${wQ&&wQ.getInternalTexture()?wQ.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Uq(QQ, FQ) {
      const wQ = new rQ.e(FQ.name, FQ.iN());
      return wQ._texture = QQ, wQ.coordinatesIndex = FQ.coordinatesIndex, FQ instanceof rQ.e && (wQ.uOffset = FQ.uOffset, wQ.vOffset = FQ.vOffset, wQ.uScale = FQ.uScale, wQ.vScale = FQ.vScale, wQ.wAng = FQ.wAng), wQ.wrapU = FQ.wrapU, wQ.wrapV = FQ.wrapV, wQ
    }
    class Nq {
      constructor(QQ) {
        this.name = rq, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = QQ
      }
      dispose() {
        for (const QQ of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[QQ].dispose()
        }
        this._mergedTexturesMap = {};
        for (const QQ of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[QQ].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        const LQ = [];
        if (wQ instanceof CF) {
          if (wQ.clearCoat.isEnabled) return wQ.clearCoat.texture && LQ.push(wQ.clearCoat.texture), !wQ.clearCoat.useRoughnessFromMainTexture && wQ.clearCoat.textureRoughness && LQ.push(wQ.clearCoat.textureRoughness), wQ.clearCoat.bumpTexture && LQ.push(wQ.clearCoat.bumpTexture), wQ.clearCoat.tintTexture && LQ.push(wQ.clearCoat.tintTexture), LQ
        } else if (wQ instanceof BF && wQ.coatWeight > 0) {
          let QQ = !1;
          if (wQ.coatWeightTexture ? wQ.coatRoughnessTexture ? wQ._useCoatRoughnessFromGreenChannel && wQ.coatWeightTexture.getInternalTexture() === wQ.coatRoughnessTexture.getInternalTexture() ? (LQ.push(wQ.coatWeightTexture), LQ.push(wQ.coatRoughnessTexture)) : QQ = !0 : LQ.push(wQ.coatWeightTexture) : wQ.coatRoughnessTexture && (wQ._useCoatRoughnessFromGreenChannel ? LQ.push(wQ.coatRoughnessTexture) : QQ = !0), QQ) {
            const QQ = function(QQ) {
              const FQ = QQ.coatWeightTexture,
                wQ = FQ && FQ.getInternalTexture() ? FQ.getInternalTexture().uniqueId : "NoCoat",
                LQ = QQ.coatRoughnessTexture;
              return `${wQ}_${LQ&&LQ.getInternalTexture()?LQ.getInternalTexture().uniqueId:"NoRoughness"}`
            }(wQ);
            if (!this._cachedInternalTexturesMap[QQ]) {
              const FQ = await async function(QQ) {
                const FQ = QQ.iN(),
                  wQ = QQ.coatWeightTexture,
                  LQ = QQ.coatRoughnessTexture;
                return wQ || LQ ? (await Dw("CoatTexture", mw(wQ ? kw(wQ, 0) : vw(1), LQ ? kw(LQ, QQ._useCoatRoughnessFromGreenChannel ? 1 : 0) : vw(1)), FQ)).getInternalTexture() : null
              }(wQ);
              FQ && (this._cachedInternalTexturesMap[QQ] = FQ)
            }
            this._cachedInternalTexturesMap[QQ] && (wQ.coatWeightTexture && (this._mergedTexturesMap[wQ.coatWeightTexture.uniqueId] = Uq(this._cachedInternalTexturesMap[QQ], wQ.coatWeightTexture), LQ.push(this._mergedTexturesMap[wQ.coatWeightTexture.uniqueId])), wQ.coatRoughnessTexture && (this._mergedTexturesMap[wQ.coatRoughnessTexture.uniqueId] = Uq(this._cachedInternalTexturesMap[QQ], wQ.coatRoughnessTexture), LQ.push(this._mergedTexturesMap[wQ.coatRoughnessTexture.uniqueId])))
          }
          if (wQ.geometryCoatNormalTexture && LQ.push(wQ.geometryCoatNormalTexture), wQ.coatColorTexture && LQ.push(wQ.coatColorTexture), wQ.coatRoughnessAnisotropy > 0) {
            const QQ = Iq(wQ);
            if (this._mergedTexturesMap[QQ]) LQ.push(this._mergedTexturesMap[QQ]);
            else {
              const FQ = await async function(QQ) {
                const FQ = QQ.iN(),
                  wQ = QQ.coatRoughnessAnisotropyTexture,
                  LQ = QQ.geometryCoatTangentTexture;
                return wQ || LQ ? await Dw("AnisotropyTexture", mw(LQ ? kw(LQ, 0) : vw(1), LQ ? kw(LQ, 1) : vw(0), wQ ? kw(wQ, 0) : vw(1)), FQ) : null
              }(wQ);
              FQ && (LQ.push(FQ), this._mergedTexturesMap[QQ] = FQ)
            }
            return LQ
          }
          return LQ
        }
        return []
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          var LQ;
          if (wQ instanceof CF) {
            if (!wQ.clearCoat.isEnabled) return void QQ(FQ);
            this._wasUsed = !0, FQ.extensions = FQ.extensions || {};
            const LQ = this._exporter._materialExporter.getTextureInfo(wQ.clearCoat.texture);
            let qQ, oQ;
            qQ = wQ.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(wQ.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(wQ.clearCoat.textureRoughness), wQ.clearCoat.isTintEnabled && (oQ = this._exporter._materialExporter.getTextureInfo(wQ.clearCoat.tintTexture));
            const DQ = this._exporter._materialExporter.getTextureInfo(wQ.clearCoat.bumpTexture),
              kQ = wQ.clearCoat.indexOfRefraction,
              vQ = {
                coatFactor: wQ.clearCoat.intensity,
                coatTexture: LQ ?? void 0,
                coatRoughnessFactor: wQ.clearCoat.roughness,
                coatRoughnessTexture: qQ ?? void 0,
                coatNormalTexture: DQ ?? void 0,
                coatColorFactor: wQ.clearCoat.tintColor.RLQ(),
                coatColorTexture: oQ ?? void 0,
                coatIor: 1.5 !== kQ ? kQ : void 0
              };
            null === vQ.coatTexture && null === vQ.coatRoughnessTexture && null === vQ.coatRoughnessTexture && null === vQ.coatColorTexture || this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[rq] = vQ
          } else if (wQ instanceof BF) {
            if (0 == wQ.coatWeight) return void QQ(FQ);
            let qQ, oQ, DQ, kQ;
            this._wasUsed = !0, FQ.extensions = FQ.extensions || {}, wQ.coatWeightTexture && (qQ = this._mergedTexturesMap[wQ.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[wQ.coatWeightTexture.uniqueId] : wQ.coatWeightTexture, oQ = this._exporter._materialExporter.getTextureInfo(qQ)), wQ.coatRoughnessTexture && (DQ = this._mergedTexturesMap[wQ.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[wQ.coatRoughnessTexture.uniqueId] : wQ.coatRoughnessTexture, kQ = this._exporter._materialExporter.getTextureInfo(DQ));
            const vQ = this._exporter._materialExporter.getTextureInfo(wQ.geometryCoatNormalTexture),
              mQ = this._exporter._materialExporter.getTextureInfo(wQ.coatColorTexture),
              uQ = wQ.coatIor,
              HQ = wQ.coatDarkening,
              bQ = wQ.coatRoughnessTexture,
              YQ = Iq(wQ),
              xQ = this._mergedTexturesMap[YQ];
            let AQ, tQ = 0,
              eQ = 0;
            if (wQ.coatRoughnessAnisotropy > 0) {
              if (bQ || xQ) {
                const QQ = xQ ? this._exporter._materialExporter.getTextureInfo(xQ) : null;
                tQ = wQ.coatRoughnessAnisotropy, eQ = wQ.geometryCoatTangentAngle, AQ = QQ || void 0
              } else {
                let QQ = wQ.coatRoughness,
                  LQ = wQ.coatRoughnessAnisotropy;
                if (!wQ._useGltfStyleAnisotropy) {
                  const FQ = function(QQ, FQ) {
                    const wQ = QQ * QQ,
                      LQ = wQ * Math.sqrt(2 / (1 + (1 - FQ) * (1 - FQ))),
                      qQ = (1 - FQ) * LQ;
                    return {
                      newBaseRoughness: Math.sqrt(qQ),
                      newAnisotropyStrength: Math.min(Math.sqrt((LQ - wQ) / Math.max(1 - wQ, 1e-4)), 1)
                    }
                  }(wQ.coatRoughness, wQ.coatRoughnessAnisotropy);
                  QQ = FQ.newBaseRoughness, LQ = FQ.newAnisotropyStrength
                }
                FQ.pbrMetallicRoughness && (FQ.pbrMetallicRoughness.roughnessFactor = QQ), tQ = LQ, eQ = wQ.geometryCoatTangentAngle + .5 * Math.PI, AQ = void 0
              }
              wQ._useGltfStyleAnisotropy || (FQ.extensions.KHR_materials_openpbr = {}, (LQ = this._exporter._glTF).extensionsUsed || (LQ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const MQ = {
              coatFactor: wQ.coatWeight,
              coatTexture: oQ ?? void 0,
              coatRoughnessFactor: wQ.coatRoughness,
              coatRoughnessTexture: kQ ?? void 0,
              coatNormalTexture: vQ ?? void 0,
              coatColorFactor: wQ.coatColor.RLQ(),
              coatColorTexture: mQ ?? void 0,
              coatIor: 1.5 !== uQ ? uQ : void 0,
              coatDarkeningFactor: 1 !== HQ ? HQ : void 0,
              coatAnisotropyRotation: eQ,
              coatAnisotropyStrength: tQ,
              coatAnisotropyTexture: AQ
            };
            null === MQ.coatTexture && null === MQ.coatRoughnessTexture && null === MQ.coatRoughnessTexture && null === MQ.coatAnisotropyTexture && null === MQ.coatColorTexture || this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[rq] = MQ
          }
          QQ(FQ)
        }))
      }
    }
    let Tq = !1;

    function Kq() {
      Tq || (Tq = !0, KL.RegisterExtension(rq, (QQ => new Nq(QQ))))
    }
    Kq();
    let zq = (() => {
      var QQ, FQ, wQ, LQ, qQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, OQ, sQ, rQ, IQ, UQ, NQ, KQ, zQ, lQ, jQ, aQ, XQ, fQ, VQ, hQ, JQ, nQ, gQ, PQ, ZQ, yQ, BQ, dQ, QF, FF, wF, LF, qF, oF, DF, kF, vF, mF, uF, HF, bF, YF, xF, AF, tF, eF, MF, GF;
      let pF, cF, iF, WF, RF, OF, sF, rF, IF, UF, NF, TF, KF, zF, lF, jF, aF, XF, fF, VF, hF, JF, EF, nF, gF, PF, ZF, yF, BF, dF, Qw, Fw, ww, Lw, qw, ow, Dw, kw, vw, mw, uw, Hw, bw, Yw, xw, Aw, tw, ew, Mw, Gw, pw, Cw, Sw, iw, Ww, Rw, Ow, sw, rw, Iw, Uw, Nw, Tw, Kw, zw, lw, jw, aw, Xw = CF,
        fw = [],
        Vw = [],
        hw = [],
        Jw = [],
        Ew = [],
        nw = [],
        gw = [],
        Pw = [],
        Zw = [],
        yw = [],
        Bw = [],
        dw = [],
        QL = [],
        FL = [],
        wL = [],
        LL = [],
        qL = [],
        oL = [],
        DL = [],
        kL = [],
        vL = [],
        mL = [],
        uL = [],
        HL = [],
        bL = [],
        YL = [],
        xL = [],
        AL = [],
        tL = [],
        eL = [],
        ML = [],
        GL = [],
        pL = [],
        cL = [],
        CL = [],
        SL = [],
        iL = [],
        WL = [],
        RL = [],
        OL = [],
        sL = [],
        rL = [],
        IL = [],
        UL = [],
        NL = [],
        TL = [],
        KL = [],
        zL = [],
        lL = [],
        jL = [],
        aL = [],
        XL = [],
        fL = [],
        VL = [],
        hL = [],
        JL = [],
        EL = [],
        nL = [],
        gL = [],
        PL = [],
        ZL = [],
        yL = [],
        BL = [],
        dL = [],
        Qq = [],
        Fq = [],
        wq = [],
        Lq = [],
        qq = [],
        oq = [],
        Dq = [],
        kq = [],
        vq = [],
        mq = [],
        uq = [],
        Hq = [],
        bq = [],
        Yq = [],
        xq = [],
        Aq = [],
        tq = [],
        eq = [],
        Mq = [],
        Gq = [],
        pq = [],
        cq = [],
        Cq = [],
        Sq = [],
        iq = [],
        Wq = [],
        Rq = [],
        Oq = [],
        sq = [],
        rq = [],
        Iq = [],
        Uq = [],
        Nq = [],
        Tq = [],
        Kq = [],
        zq = [],
        lq = [],
        jq = [],
        aq = [],
        Xq = [],
        fq = [],
        Vq = [],
        hq = [],
        Jq = [],
        Eq = [],
        nq = [],
        gq = [],
        Pq = [],
        Zq = [],
        yq = [],
        Bq = [],
        dq = [],
        Qo = [],
        Fo = [],
        wo = [],
        Lo = [],
        qo = [],
        oo = [],
        Do = [],
        ko = [],
        vo = [],
        mo = [],
        uo = [],
        Ho = [],
        bo = [],
        Yo = [],
        xo = [],
        Ao = [],
        to = [];
      return QQ = class extends Xw {
        get directIntensity() {
          return (0, WQ.c)(this, FQ, "f")
        }
        set directIntensity(QQ) {
          (0, WQ.f)(this, FQ, QQ, "f")
        }
        get emissiveIntensity() {
          return (0, WQ.c)(this, wQ, "f")
        }
        set emissiveIntensity(QQ) {
          (0, WQ.f)(this, wQ, QQ, "f")
        }
        get environmentIntensity() {
          return (0, WQ.c)(this, LQ, "f")
        }
        set environmentIntensity(QQ) {
          (0, WQ.f)(this, LQ, QQ, "f")
        }
        get specularIntensity() {
          return (0, WQ.c)(this, qQ, "f")
        }
        set specularIntensity(QQ) {
          (0, WQ.f)(this, qQ, QQ, "f")
        }
        get disableBumpMap() {
          return (0, WQ.c)(this, DQ, "f")
        }
        set disableBumpMap(QQ) {
          (0, WQ.f)(this, DQ, QQ, "f")
        }
        get albedoTexture() {
          return (0, WQ.c)(this, kQ, "f")
        }
        set albedoTexture(QQ) {
          (0, WQ.f)(this, kQ, QQ, "f")
        }
        get baseWeightTexture() {
          return (0, WQ.c)(this, vQ, "f")
        }
        set baseWeightTexture(QQ) {
          (0, WQ.f)(this, vQ, QQ, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, WQ.c)(this, mQ, "f")
        }
        set baseDiffuseRoughnessTexture(QQ) {
          (0, WQ.f)(this, mQ, QQ, "f")
        }
        get ambientTexture() {
          return (0, WQ.c)(this, uQ, "f")
        }
        set ambientTexture(QQ) {
          (0, WQ.f)(this, uQ, QQ, "f")
        }
        get ambientTextureStrength() {
          return (0, WQ.c)(this, HQ, "f")
        }
        set ambientTextureStrength(QQ) {
          (0, WQ.f)(this, HQ, QQ, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, WQ.c)(this, bQ, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(QQ) {
          (0, WQ.f)(this, bQ, QQ, "f")
        }
        get opacityTexture() {
          return (0, WQ.c)(this, YQ, "f")
        }
        set opacityTexture(QQ) {
          (0, WQ.f)(this, YQ, QQ, "f")
        }
        get reflectionTexture() {
          return (0, WQ.c)(this, xQ, "f")
        }
        set reflectionTexture(QQ) {
          (0, WQ.f)(this, xQ, QQ, "f")
        }
        get emissiveTexture() {
          return (0, WQ.c)(this, AQ, "f")
        }
        set emissiveTexture(QQ) {
          (0, WQ.f)(this, AQ, QQ, "f")
        }
        get reflectivityTexture() {
          return (0, WQ.c)(this, tQ, "f")
        }
        set reflectivityTexture(QQ) {
          (0, WQ.f)(this, tQ, QQ, "f")
        }
        get metallicTexture() {
          return (0, WQ.c)(this, eQ, "f")
        }
        set metallicTexture(QQ) {
          (0, WQ.f)(this, eQ, QQ, "f")
        }
        get metallic() {
          return (0, WQ.c)(this, MQ, "f")
        }
        set metallic(QQ) {
          (0, WQ.f)(this, MQ, QQ, "f")
        }
        get roughness() {
          return (0, WQ.c)(this, GQ, "f")
        }
        set roughness(QQ) {
          (0, WQ.f)(this, GQ, QQ, "f")
        }
        get metallicF0Factor() {
          return (0, WQ.c)(this, pQ, "f")
        }
        set metallicF0Factor(QQ) {
          (0, WQ.f)(this, pQ, QQ, "f")
        }
        get metallicReflectanceColor() {
          return (0, WQ.c)(this, cQ, "f")
        }
        set metallicReflectanceColor(QQ) {
          (0, WQ.f)(this, cQ, QQ, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, WQ.c)(this, CQ, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(QQ) {
          (0, WQ.f)(this, CQ, QQ, "f")
        }
        get metallicReflectanceTexture() {
          return (0, WQ.c)(this, SQ, "f")
        }
        set metallicReflectanceTexture(QQ) {
          (0, WQ.f)(this, SQ, QQ, "f")
        }
        get reflectanceTexture() {
          return (0, WQ.c)(this, iQ, "f")
        }
        set reflectanceTexture(QQ) {
          (0, WQ.f)(this, iQ, QQ, "f")
        }
        get microSurfaceTexture() {
          return (0, WQ.c)(this, OQ, "f")
        }
        set microSurfaceTexture(QQ) {
          (0, WQ.f)(this, OQ, QQ, "f")
        }
        get bumpTexture() {
          return (0, WQ.c)(this, sQ, "f")
        }
        set bumpTexture(QQ) {
          (0, WQ.f)(this, sQ, QQ, "f")
        }
        get lightmapTexture() {
          return (0, WQ.c)(this, rQ, "f")
        }
        set lightmapTexture(QQ) {
          (0, WQ.f)(this, rQ, QQ, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(QQ) {
          this.subSurface.refractionTexture = QQ, QQ ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, WQ.c)(this, IQ, "f")
        }
        set ambientColor(QQ) {
          (0, WQ.f)(this, IQ, QQ, "f")
        }
        get albedoColor() {
          return (0, WQ.c)(this, UQ, "f")
        }
        set albedoColor(QQ) {
          (0, WQ.f)(this, UQ, QQ, "f")
        }
        get baseWeight() {
          return (0, WQ.c)(this, NQ, "f")
        }
        set baseWeight(QQ) {
          (0, WQ.f)(this, NQ, QQ, "f")
        }
        get baseDiffuseRoughness() {
          return (0, WQ.c)(this, KQ, "f")
        }
        set baseDiffuseRoughness(QQ) {
          (0, WQ.f)(this, KQ, QQ, "f")
        }
        get reflectivityColor() {
          return (0, WQ.c)(this, zQ, "f")
        }
        set reflectivityColor(QQ) {
          (0, WQ.f)(this, zQ, QQ, "f")
        }
        get reflectionColor() {
          return (0, WQ.c)(this, lQ, "f")
        }
        set reflectionColor(QQ) {
          (0, WQ.f)(this, lQ, QQ, "f")
        }
        get emissiveColor() {
          return (0, WQ.c)(this, jQ, "f")
        }
        set emissiveColor(QQ) {
          (0, WQ.f)(this, jQ, QQ, "f")
        }
        get microSurface() {
          return (0, WQ.c)(this, aQ, "f")
        }
        set microSurface(QQ) {
          (0, WQ.f)(this, aQ, QQ, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(QQ) {
          this.subSurface.indexOfRefraction = QQ
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(QQ) {
          this.subSurface.invertRefractionY = QQ
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(QQ) {
          this.subSurface.linkRefractionWithTransparency = QQ, QQ && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, WQ.c)(this, XQ, "f")
        }
        set useLightmapAsShadowmap(QQ) {
          (0, WQ.f)(this, XQ, QQ, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, WQ.c)(this, fQ, "f")
        }
        set useAlphaFromAlbedoTexture(QQ) {
          (0, WQ.f)(this, fQ, QQ, "f")
        }
        get forceAlphaTest() {
          return (0, WQ.c)(this, VQ, "f")
        }
        set forceAlphaTest(QQ) {
          (0, WQ.f)(this, VQ, QQ, "f")
        }
        get alphaCutOff() {
          return (0, WQ.c)(this, hQ, "f")
        }
        set alphaCutOff(QQ) {
          (0, WQ.f)(this, hQ, QQ, "f")
        }
        get useSpecularOverAlpha() {
          return (0, WQ.c)(this, JQ, "f")
        }
        set useSpecularOverAlpha(QQ) {
          (0, WQ.f)(this, JQ, QQ, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, WQ.c)(this, nQ, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(QQ) {
          (0, WQ.f)(this, nQ, QQ, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, WQ.c)(this, gQ, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(QQ) {
          (0, WQ.f)(this, gQ, QQ, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, WQ.c)(this, PQ, "f")
        }
        set useRoughnessFromMetallicTextureGreen(QQ) {
          (0, WQ.f)(this, PQ, QQ, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, WQ.c)(this, ZQ, "f")
        }
        set useMetallnessFromMetallicTextureBlue(QQ) {
          (0, WQ.f)(this, ZQ, QQ, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, WQ.c)(this, yQ, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(QQ) {
          (0, WQ.f)(this, yQ, QQ, "f")
        }
        get useAmbientInGrayScale() {
          return (0, WQ.c)(this, BQ, "f")
        }
        set useAmbientInGrayScale(QQ) {
          (0, WQ.f)(this, BQ, QQ, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, WQ.c)(this, dQ, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(QQ) {
          (0, WQ.f)(this, dQ, QQ, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === CF.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(QQ) {
          QQ !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = QQ ? CF.LIGHTFALLOFF_PHYSICAL : CF.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === CF.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(QQ) {
          QQ !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = QQ ? CF.LIGHTFALLOFF_GLTF : CF.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, WQ.c)(this, QF, "f")
        }
        set useRadianceOverAlpha(QQ) {
          (0, WQ.f)(this, QF, QQ, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, WQ.c)(this, FF, "f")
        }
        set useObjectSpaceNormalMap(QQ) {
          (0, WQ.f)(this, FF, QQ, "f")
        }
        get useParallax() {
          return (0, WQ.c)(this, wF, "f")
        }
        set useParallax(QQ) {
          (0, WQ.f)(this, wF, QQ, "f")
        }
        get useParallaxOcclusion() {
          return (0, WQ.c)(this, LF, "f")
        }
        set useParallaxOcclusion(QQ) {
          (0, WQ.f)(this, LF, QQ, "f")
        }
        get parallaxScaleBias() {
          return (0, WQ.c)(this, qF, "f")
        }
        set parallaxScaleBias(QQ) {
          (0, WQ.f)(this, qF, QQ, "f")
        }
        get disableLighting() {
          return (0, WQ.c)(this, oF, "f")
        }
        set disableLighting(QQ) {
          (0, WQ.f)(this, oF, QQ, "f")
        }
        get forceIrradianceInFragment() {
          return (0, WQ.c)(this, DF, "f")
        }
        set forceIrradianceInFragment(QQ) {
          (0, WQ.f)(this, DF, QQ, "f")
        }
        get maxSimultaneousLights() {
          return (0, WQ.c)(this, kF, "f")
        }
        set maxSimultaneousLights(QQ) {
          (0, WQ.f)(this, kF, QQ, "f")
        }
        get invertNormalMapX() {
          return (0, WQ.c)(this, vF, "f")
        }
        set invertNormalMapX(QQ) {
          (0, WQ.f)(this, vF, QQ, "f")
        }
        get invertNormalMapY() {
          return (0, WQ.c)(this, mF, "f")
        }
        set invertNormalMapY(QQ) {
          (0, WQ.f)(this, mF, QQ, "f")
        }
        get twoSidedLighting() {
          return (0, WQ.c)(this, uF, "f")
        }
        set twoSidedLighting(QQ) {
          (0, WQ.f)(this, uF, QQ, "f")
        }
        get useAlphaFresnel() {
          return (0, WQ.c)(this, HF, "f")
        }
        set useAlphaFresnel(QQ) {
          (0, WQ.f)(this, HF, QQ, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, WQ.c)(this, bF, "f")
        }
        set useLinearAlphaFresnel(QQ) {
          (0, WQ.f)(this, bF, QQ, "f")
        }
        get environmentBRDFTexture() {
          return (0, WQ.c)(this, YF, "f")
        }
        set environmentBRDFTexture(QQ) {
          (0, WQ.f)(this, YF, QQ, "f")
        }
        get forceNormalForward() {
          return (0, WQ.c)(this, xF, "f")
        }
        set forceNormalForward(QQ) {
          (0, WQ.f)(this, xF, QQ, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, WQ.c)(this, AF, "f")
        }
        set enableSpecularAntiAliasing(QQ) {
          (0, WQ.f)(this, AF, QQ, "f")
        }
        get useHorizonOcclusion() {
          return (0, WQ.c)(this, tF, "f")
        }
        set useHorizonOcclusion(QQ) {
          (0, WQ.f)(this, tF, QQ, "f")
        }
        get useRadianceOcclusion() {
          return (0, WQ.c)(this, eF, "f")
        }
        set useRadianceOcclusion(QQ) {
          (0, WQ.f)(this, eF, QQ, "f")
        }
        get unlit() {
          return (0, WQ.c)(this, MF, "f")
        }
        set unlit(QQ) {
          (0, WQ.f)(this, MF, QQ, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, WQ.c)(this, GF, "f")
        }
        set applyDecalMapAfterDetailMap(QQ) {
          (0, WQ.f)(this, GF, QQ, "f")
        }
        constructor(oQ, RQ) {
          super(oQ, RQ, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), FQ.set(this, ((0, WQ.l)(this, fw), (0, WQ.l)(this, Vw, 1))), wQ.set(this, ((0, WQ.l)(this, hw), (0, WQ.l)(this, Jw, 1))), LQ.set(this, ((0, WQ.l)(this, Ew), (0, WQ.l)(this, nw, 1))), qQ.set(this, ((0, WQ.l)(this, gw), (0, WQ.l)(this, Pw, 1))), DQ.set(this, ((0, WQ.l)(this, Zw), (0, WQ.l)(this, yw, !1))), kQ.set(this, ((0, WQ.l)(this, Bw), (0, WQ.l)(this, dw, void 0))), vQ.set(this, ((0, WQ.l)(this, QL), (0, WQ.l)(this, FL, void 0))), mQ.set(this, ((0, WQ.l)(this, wL), (0, WQ.l)(this, LL, void 0))), uQ.set(this, ((0, WQ.l)(this, qL), (0, WQ.l)(this, oL, void 0))), HQ.set(this, ((0, WQ.l)(this, DL), (0, WQ.l)(this, kL, 1))), bQ.set(this, ((0, WQ.l)(this, vL), (0, WQ.l)(this, mL, QQ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), YQ.set(this, ((0, WQ.l)(this, uL), (0, WQ.l)(this, HL, void 0))), xQ.set(this, ((0, WQ.l)(this, bL), (0, WQ.l)(this, YL, void 0))), AQ.set(this, ((0, WQ.l)(this, xL), (0, WQ.l)(this, AL, void 0))), tQ.set(this, ((0, WQ.l)(this, tL), (0, WQ.l)(this, eL, void 0))), eQ.set(this, ((0, WQ.l)(this, ML), (0, WQ.l)(this, GL, void 0))), MQ.set(this, ((0, WQ.l)(this, pL), (0, WQ.l)(this, cL, void 0))), GQ.set(this, ((0, WQ.l)(this, CL), (0, WQ.l)(this, SL, void 0))), pQ.set(this, ((0, WQ.l)(this, iL), (0, WQ.l)(this, WL, 1))), cQ.set(this, ((0, WQ.l)(this, RL), (0, WQ.l)(this, OL, EQ.b.White()))), CQ.set(this, ((0, WQ.l)(this, sL), (0, WQ.l)(this, rL, !1))), SQ.set(this, ((0, WQ.l)(this, IL), (0, WQ.l)(this, UL, void 0))), iQ.set(this, ((0, WQ.l)(this, NL), (0, WQ.l)(this, TL, void 0))), OQ.set(this, ((0, WQ.l)(this, KL), (0, WQ.l)(this, zL, void 0))), sQ.set(this, ((0, WQ.l)(this, lL), (0, WQ.l)(this, jL, void 0))), rQ.set(this, ((0, WQ.l)(this, aL), (0, WQ.l)(this, XL, void 0))), IQ.set(this, ((0, WQ.l)(this, fL), (0, WQ.l)(this, VL, new EQ.b(0, 0, 0)))), UQ.set(this, ((0, WQ.l)(this, hL), (0, WQ.l)(this, JL, new EQ.b(1, 1, 1)))), NQ.set(this, ((0, WQ.l)(this, EL), (0, WQ.l)(this, nL, 1))), KQ.set(this, ((0, WQ.l)(this, gL), (0, WQ.l)(this, PL, void 0))), zQ.set(this, ((0, WQ.l)(this, ZL), (0, WQ.l)(this, yL, new EQ.b(1, 1, 1)))), lQ.set(this, ((0, WQ.l)(this, BL), (0, WQ.l)(this, dL, new EQ.b(1, 1, 1)))), jQ.set(this, ((0, WQ.l)(this, Qq), (0, WQ.l)(this, Fq, new EQ.b(0, 0, 0)))), aQ.set(this, ((0, WQ.l)(this, wq), (0, WQ.l)(this, Lq, 1))), XQ.set(this, ((0, WQ.l)(this, qq), (0, WQ.l)(this, oq, !1))), fQ.set(this, ((0, WQ.l)(this, Dq), (0, WQ.l)(this, kq, !1))), VQ.set(this, ((0, WQ.l)(this, vq), (0, WQ.l)(this, mq, !1))), hQ.set(this, ((0, WQ.l)(this, uq), (0, WQ.l)(this, Hq, .4))), JQ.set(this, ((0, WQ.l)(this, bq), (0, WQ.l)(this, Yq, !0))), nQ.set(this, ((0, WQ.l)(this, xq), (0, WQ.l)(this, Aq, !1))), gQ.set(this, ((0, WQ.l)(this, tq), (0, WQ.l)(this, eq, !0))), PQ.set(this, ((0, WQ.l)(this, Mq), (0, WQ.l)(this, Gq, !1))), ZQ.set(this, ((0, WQ.l)(this, pq), (0, WQ.l)(this, cq, !1))), yQ.set(this, ((0, WQ.l)(this, Cq), (0, WQ.l)(this, Sq, !1))), BQ.set(this, ((0, WQ.l)(this, iq), (0, WQ.l)(this, Wq, !1))), dQ.set(this, ((0, WQ.l)(this, Rq), (0, WQ.l)(this, Oq, !1))), QF.set(this, ((0, WQ.l)(this, sq), (0, WQ.l)(this, rq, !0))), FF.set(this, ((0, WQ.l)(this, Iq), (0, WQ.l)(this, Uq, !1))), wF.set(this, ((0, WQ.l)(this, Nq), (0, WQ.l)(this, Tq, !1))), LF.set(this, ((0, WQ.l)(this, Kq), (0, WQ.l)(this, zq, !1))), qF.set(this, ((0, WQ.l)(this, lq), (0, WQ.l)(this, jq, .05))), oF.set(this, ((0, WQ.l)(this, aq), (0, WQ.l)(this, Xq, !1))), DF.set(this, ((0, WQ.l)(this, fq), (0, WQ.l)(this, Vq, !1))), kF.set(this, ((0, WQ.l)(this, hq), (0, WQ.l)(this, Jq, 4))), vF.set(this, ((0, WQ.l)(this, Eq), (0, WQ.l)(this, nq, !1))), mF.set(this, ((0, WQ.l)(this, gq), (0, WQ.l)(this, Pq, !1))), uF.set(this, ((0, WQ.l)(this, Zq), (0, WQ.l)(this, yq, !1))), HF.set(this, ((0, WQ.l)(this, Bq), (0, WQ.l)(this, dq, !1))), bF.set(this, ((0, WQ.l)(this, Qo), (0, WQ.l)(this, Fo, !1))), YF.set(this, ((0, WQ.l)(this, wo), (0, WQ.l)(this, Lo, null))), xF.set(this, ((0, WQ.l)(this, qo), (0, WQ.l)(this, oo, !1))), AF.set(this, ((0, WQ.l)(this, Do), (0, WQ.l)(this, ko, !1))), tF.set(this, ((0, WQ.l)(this, vo), (0, WQ.l)(this, mo, !0))), eF.set(this, ((0, WQ.l)(this, uo), (0, WQ.l)(this, Ho, !0))), MF.set(this, ((0, WQ.l)(this, bo), (0, WQ.l)(this, Yo, !1))), GF.set(this, ((0, WQ.l)(this, xo), (0, WQ.l)(this, Ao, !1))), (0, WQ.l)(this, to), this._environmentBRDFTexture = TQ(this.iN())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(FQ) {
          let wQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const qQ = SF.c.Clone((() => new QQ(FQ, this.iN())), this, {
            cloneTexturesOnlyOnce: wQ
          });
          return qQ.id = FQ, qQ.name = FQ, this.stencil.copyTo(qQ.stencil), this._clonePlugins(qQ, LQ), qQ
        }
        serialize() {
          const QQ = super.serialize();
          return QQ.customType = "BABYLON.PBRMaterial", QQ
        }
        static Parse(FQ, wQ, LQ) {
          const qQ = SF.c.Parse((() => new QQ(FQ.name, wQ)), FQ, wQ, LQ);
          return FQ.stencil && qQ.stencil.parse(FQ.stencil, wQ, LQ), oQ.d._ParsePlugins(FQ, qQ, wQ, LQ), FQ.clearCoat && qQ.clearCoat.parse(FQ.clearCoat, wQ, LQ), FQ.anisotropy && qQ.anisotropy.parse(FQ.anisotropy, wQ, LQ), FQ.brdf && qQ.brdf.parse(FQ.brdf, wQ, LQ), FQ.sheen && qQ.sheen.parse(FQ.sheen, wQ, LQ), FQ.subSurface && qQ.subSurface.parse(FQ.subSurface, wQ, LQ), FQ.iridescence && qQ.iridescence.parse(FQ.iridescence, wQ, LQ), qQ
        }
      }, FQ = new WeakMap, wQ = new WeakMap, LQ = new WeakMap, qQ = new WeakMap, DQ = new WeakMap, kQ = new WeakMap, vQ = new WeakMap, mQ = new WeakMap, uQ = new WeakMap, HQ = new WeakMap, bQ = new WeakMap, YQ = new WeakMap, xQ = new WeakMap, AQ = new WeakMap, tQ = new WeakMap, eQ = new WeakMap, MQ = new WeakMap, GQ = new WeakMap, pQ = new WeakMap, cQ = new WeakMap, CQ = new WeakMap, SQ = new WeakMap, iQ = new WeakMap, OQ = new WeakMap, sQ = new WeakMap, rQ = new WeakMap, IQ = new WeakMap, UQ = new WeakMap, NQ = new WeakMap, KQ = new WeakMap, zQ = new WeakMap, lQ = new WeakMap, jQ = new WeakMap, aQ = new WeakMap, XQ = new WeakMap, fQ = new WeakMap, VQ = new WeakMap, hQ = new WeakMap, JQ = new WeakMap, nQ = new WeakMap, gQ = new WeakMap, PQ = new WeakMap, ZQ = new WeakMap, yQ = new WeakMap, BQ = new WeakMap, dQ = new WeakMap, QF = new WeakMap, FF = new WeakMap, wF = new WeakMap, LF = new WeakMap, qF = new WeakMap, oF = new WeakMap, DF = new WeakMap, kF = new WeakMap, vF = new WeakMap, mF = new WeakMap, uF = new WeakMap, HF = new WeakMap, bF = new WeakMap, YF = new WeakMap, xF = new WeakMap, AF = new WeakMap, tF = new WeakMap, eF = new WeakMap, MF = new WeakMap, GF = new WeakMap, (() => {
        const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xw[Symbol.metadata] ?? null) : void 0;
        pF = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], cF = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], iF = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], WF = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], RF = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], OF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], sF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], rF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], IF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], UF = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], NF = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], TF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], KF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], zF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], lF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], jF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], aF = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], XF = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], fF = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], VF = [(0, RQ.m)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], hF = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], JF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], EF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], nF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], gF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], PF = [(0, RQ.z)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty", null)], ZF = [(0, RQ.m)("ambient"), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], yF = [(0, RQ.m)("albedo"), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], BF = [(0, RQ.I)("baseWeight"), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], dF = [(0, RQ.I)("baseDiffuseRoughness"), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Qw = [(0, RQ.m)("reflectivity"), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Fw = [(0, RQ.m)("reflection"), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], ww = [(0, RQ.m)("emissive"), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Lw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], qw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], ow = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Dw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], kw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], vw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], mw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], uw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Hw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], bw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Yw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], xw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Aw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], tw = [(0, RQ.I)()], ew = [(0, RQ.I)()], Mw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Gw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], pw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Cw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Sw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], iw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsLightsDirty")], Ww = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Rw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsLightsDirty")], Ow = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], sw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], rw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Iw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Uw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Nw = [(0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Tw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], Kw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], zw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], lw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsTexturesDirty")], jw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], aw = [(0, RQ.I)(), (0, RQ.e)("_markAllSubMeshesAsMiscDirty")], (0, WQ.i)(QQ, null, pF, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "directIntensity" in QQ,
            get: QQ => QQ.directIntensity,
            set: (QQ, FQ) => {
              QQ.directIntensity = FQ
            }
          },
          metadata: FQ
        }, Vw, hw), (0, WQ.i)(QQ, null, cF, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "emissiveIntensity" in QQ,
            get: QQ => QQ.emissiveIntensity,
            set: (QQ, FQ) => {
              QQ.emissiveIntensity = FQ
            }
          },
          metadata: FQ
        }, Jw, Ew), (0, WQ.i)(QQ, null, iF, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "environmentIntensity" in QQ,
            get: QQ => QQ.environmentIntensity,
            set: (QQ, FQ) => {
              QQ.environmentIntensity = FQ
            }
          },
          metadata: FQ
        }, nw, gw), (0, WQ.i)(QQ, null, WF, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "specularIntensity" in QQ,
            get: QQ => QQ.specularIntensity,
            set: (QQ, FQ) => {
              QQ.specularIntensity = FQ
            }
          },
          metadata: FQ
        }, Pw, Zw), (0, WQ.i)(QQ, null, RF, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: QQ => "disableBumpMap" in QQ,
            get: QQ => QQ.disableBumpMap,
            set: (QQ, FQ) => {
              QQ.disableBumpMap = FQ
            }
          },
          metadata: FQ
        }, yw, Bw), (0, WQ.i)(QQ, null, OF, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "albedoTexture" in QQ,
            get: QQ => QQ.albedoTexture,
            set: (QQ, FQ) => {
              QQ.albedoTexture = FQ
            }
          },
          metadata: FQ
        }, dw, QL), (0, WQ.i)(QQ, null, sF, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "baseWeightTexture" in QQ,
            get: QQ => QQ.baseWeightTexture,
            set: (QQ, FQ) => {
              QQ.baseWeightTexture = FQ
            }
          },
          metadata: FQ
        }, FL, wL), (0, WQ.i)(QQ, null, rF, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "baseDiffuseRoughnessTexture" in QQ,
            get: QQ => QQ.baseDiffuseRoughnessTexture,
            set: (QQ, FQ) => {
              QQ.baseDiffuseRoughnessTexture = FQ
            }
          },
          metadata: FQ
        }, LL, qL), (0, WQ.i)(QQ, null, IF, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ambientTexture" in QQ,
            get: QQ => QQ.ambientTexture,
            set: (QQ, FQ) => {
              QQ.ambientTexture = FQ
            }
          },
          metadata: FQ
        }, oL, DL), (0, WQ.i)(QQ, null, UF, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ambientTextureStrength" in QQ,
            get: QQ => QQ.ambientTextureStrength,
            set: (QQ, FQ) => {
              QQ.ambientTextureStrength = FQ
            }
          },
          metadata: FQ
        }, kL, vL), (0, WQ.i)(QQ, null, NF, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ambientTextureImpactOnAnalyticalLights" in QQ,
            get: QQ => QQ.ambientTextureImpactOnAnalyticalLights,
            set: (QQ, FQ) => {
              QQ.ambientTextureImpactOnAnalyticalLights = FQ
            }
          },
          metadata: FQ
        }, mL, uL), (0, WQ.i)(QQ, null, TF, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "opacityTexture" in QQ,
            get: QQ => QQ.opacityTexture,
            set: (QQ, FQ) => {
              QQ.opacityTexture = FQ
            }
          },
          metadata: FQ
        }, HL, bL), (0, WQ.i)(QQ, null, KF, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reflectionTexture" in QQ,
            get: QQ => QQ.reflectionTexture,
            set: (QQ, FQ) => {
              QQ.reflectionTexture = FQ
            }
          },
          metadata: FQ
        }, YL, xL), (0, WQ.i)(QQ, null, zF, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "emissiveTexture" in QQ,
            get: QQ => QQ.emissiveTexture,
            set: (QQ, FQ) => {
              QQ.emissiveTexture = FQ
            }
          },
          metadata: FQ
        }, AL, tL), (0, WQ.i)(QQ, null, lF, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reflectivityTexture" in QQ,
            get: QQ => QQ.reflectivityTexture,
            set: (QQ, FQ) => {
              QQ.reflectivityTexture = FQ
            }
          },
          metadata: FQ
        }, eL, ML), (0, WQ.i)(QQ, null, jF, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metallicTexture" in QQ,
            get: QQ => QQ.metallicTexture,
            set: (QQ, FQ) => {
              QQ.metallicTexture = FQ
            }
          },
          metadata: FQ
        }, GL, pL), (0, WQ.i)(QQ, null, aF, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metallic" in QQ,
            get: QQ => QQ.metallic,
            set: (QQ, FQ) => {
              QQ.metallic = FQ
            }
          },
          metadata: FQ
        }, cL, CL), (0, WQ.i)(QQ, null, XF, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "roughness" in QQ,
            get: QQ => QQ.roughness,
            set: (QQ, FQ) => {
              QQ.roughness = FQ
            }
          },
          metadata: FQ
        }, SL, iL), (0, WQ.i)(QQ, null, fF, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metallicF0Factor" in QQ,
            get: QQ => QQ.metallicF0Factor,
            set: (QQ, FQ) => {
              QQ.metallicF0Factor = FQ
            }
          },
          metadata: FQ
        }, WL, RL), (0, WQ.i)(QQ, null, VF, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metallicReflectanceColor" in QQ,
            get: QQ => QQ.metallicReflectanceColor,
            set: (QQ, FQ) => {
              QQ.metallicReflectanceColor = FQ
            }
          },
          metadata: FQ
        }, OL, sL), (0, WQ.i)(QQ, null, hF, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useOnlyMetallicFromMetallicReflectanceTexture" in QQ,
            get: QQ => QQ.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (QQ, FQ) => {
              QQ.useOnlyMetallicFromMetallicReflectanceTexture = FQ
            }
          },
          metadata: FQ
        }, rL, IL), (0, WQ.i)(QQ, null, JF, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metallicReflectanceTexture" in QQ,
            get: QQ => QQ.metallicReflectanceTexture,
            set: (QQ, FQ) => {
              QQ.metallicReflectanceTexture = FQ
            }
          },
          metadata: FQ
        }, UL, NL), (0, WQ.i)(QQ, null, EF, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reflectanceTexture" in QQ,
            get: QQ => QQ.reflectanceTexture,
            set: (QQ, FQ) => {
              QQ.reflectanceTexture = FQ
            }
          },
          metadata: FQ
        }, TL, KL), (0, WQ.i)(QQ, null, nF, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "microSurfaceTexture" in QQ,
            get: QQ => QQ.microSurfaceTexture,
            set: (QQ, FQ) => {
              QQ.microSurfaceTexture = FQ
            }
          },
          metadata: FQ
        }, zL, lL), (0, WQ.i)(QQ, null, gF, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "bumpTexture" in QQ,
            get: QQ => QQ.bumpTexture,
            set: (QQ, FQ) => {
              QQ.bumpTexture = FQ
            }
          },
          metadata: FQ
        }, jL, aL), (0, WQ.i)(QQ, null, PF, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "lightmapTexture" in QQ,
            get: QQ => QQ.lightmapTexture,
            set: (QQ, FQ) => {
              QQ.lightmapTexture = FQ
            }
          },
          metadata: FQ
        }, XL, fL), (0, WQ.i)(QQ, null, ZF, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ambientColor" in QQ,
            get: QQ => QQ.ambientColor,
            set: (QQ, FQ) => {
              QQ.ambientColor = FQ
            }
          },
          metadata: FQ
        }, VL, hL), (0, WQ.i)(QQ, null, yF, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "albedoColor" in QQ,
            get: QQ => QQ.albedoColor,
            set: (QQ, FQ) => {
              QQ.albedoColor = FQ
            }
          },
          metadata: FQ
        }, JL, EL), (0, WQ.i)(QQ, null, BF, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: QQ => "baseWeight" in QQ,
            get: QQ => QQ.baseWeight,
            set: (QQ, FQ) => {
              QQ.baseWeight = FQ
            }
          },
          metadata: FQ
        }, nL, gL), (0, WQ.i)(QQ, null, dF, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "baseDiffuseRoughness" in QQ,
            get: QQ => QQ.baseDiffuseRoughness,
            set: (QQ, FQ) => {
              QQ.baseDiffuseRoughness = FQ
            }
          },
          metadata: FQ
        }, PL, ZL), (0, WQ.i)(QQ, null, Qw, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reflectivityColor" in QQ,
            get: QQ => QQ.reflectivityColor,
            set: (QQ, FQ) => {
              QQ.reflectivityColor = FQ
            }
          },
          metadata: FQ
        }, yL, BL), (0, WQ.i)(QQ, null, Fw, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reflectionColor" in QQ,
            get: QQ => QQ.reflectionColor,
            set: (QQ, FQ) => {
              QQ.reflectionColor = FQ
            }
          },
          metadata: FQ
        }, dL, Qq), (0, WQ.i)(QQ, null, ww, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "emissiveColor" in QQ,
            get: QQ => QQ.emissiveColor,
            set: (QQ, FQ) => {
              QQ.emissiveColor = FQ
            }
          },
          metadata: FQ
        }, Fq, wq), (0, WQ.i)(QQ, null, Lw, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: QQ => "microSurface" in QQ,
            get: QQ => QQ.microSurface,
            set: (QQ, FQ) => {
              QQ.microSurface = FQ
            }
          },
          metadata: FQ
        }, Lq, qq), (0, WQ.i)(QQ, null, qw, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useLightmapAsShadowmap" in QQ,
            get: QQ => QQ.useLightmapAsShadowmap,
            set: (QQ, FQ) => {
              QQ.useLightmapAsShadowmap = FQ
            }
          },
          metadata: FQ
        }, oq, Dq), (0, WQ.i)(QQ, null, ow, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAlphaFromAlbedoTexture" in QQ,
            get: QQ => QQ.useAlphaFromAlbedoTexture,
            set: (QQ, FQ) => {
              QQ.useAlphaFromAlbedoTexture = FQ
            }
          },
          metadata: FQ
        }, kq, vq), (0, WQ.i)(QQ, null, Dw, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: QQ => "forceAlphaTest" in QQ,
            get: QQ => QQ.forceAlphaTest,
            set: (QQ, FQ) => {
              QQ.forceAlphaTest = FQ
            }
          },
          metadata: FQ
        }, mq, uq), (0, WQ.i)(QQ, null, kw, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: QQ => "alphaCutOff" in QQ,
            get: QQ => QQ.alphaCutOff,
            set: (QQ, FQ) => {
              QQ.alphaCutOff = FQ
            }
          },
          metadata: FQ
        }, Hq, bq), (0, WQ.i)(QQ, null, vw, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useSpecularOverAlpha" in QQ,
            get: QQ => QQ.useSpecularOverAlpha,
            set: (QQ, FQ) => {
              QQ.useSpecularOverAlpha = FQ
            }
          },
          metadata: FQ
        }, Yq, xq), (0, WQ.i)(QQ, null, mw, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useMicroSurfaceFromReflectivityMapAlpha" in QQ,
            get: QQ => QQ.useMicroSurfaceFromReflectivityMapAlpha,
            set: (QQ, FQ) => {
              QQ.useMicroSurfaceFromReflectivityMapAlpha = FQ
            }
          },
          metadata: FQ
        }, Aq, tq), (0, WQ.i)(QQ, null, uw, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRoughnessFromMetallicTextureAlpha" in QQ,
            get: QQ => QQ.useRoughnessFromMetallicTextureAlpha,
            set: (QQ, FQ) => {
              QQ.useRoughnessFromMetallicTextureAlpha = FQ
            }
          },
          metadata: FQ
        }, eq, Mq), (0, WQ.i)(QQ, null, Hw, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRoughnessFromMetallicTextureGreen" in QQ,
            get: QQ => QQ.useRoughnessFromMetallicTextureGreen,
            set: (QQ, FQ) => {
              QQ.useRoughnessFromMetallicTextureGreen = FQ
            }
          },
          metadata: FQ
        }, Gq, pq), (0, WQ.i)(QQ, null, bw, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useMetallnessFromMetallicTextureBlue" in QQ,
            get: QQ => QQ.useMetallnessFromMetallicTextureBlue,
            set: (QQ, FQ) => {
              QQ.useMetallnessFromMetallicTextureBlue = FQ
            }
          },
          metadata: FQ
        }, cq, Cq), (0, WQ.i)(QQ, null, Yw, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAmbientOcclusionFromMetallicTextureRed" in QQ,
            get: QQ => QQ.useAmbientOcclusionFromMetallicTextureRed,
            set: (QQ, FQ) => {
              QQ.useAmbientOcclusionFromMetallicTextureRed = FQ
            }
          },
          metadata: FQ
        }, Sq, iq), (0, WQ.i)(QQ, null, xw, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAmbientInGrayScale" in QQ,
            get: QQ => QQ.useAmbientInGrayScale,
            set: (QQ, FQ) => {
              QQ.useAmbientInGrayScale = FQ
            }
          },
          metadata: FQ
        }, Wq, Rq), (0, WQ.i)(QQ, null, Aw, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAutoMicroSurfaceFromReflectivityMap" in QQ,
            get: QQ => QQ.useAutoMicroSurfaceFromReflectivityMap,
            set: (QQ, FQ) => {
              QQ.useAutoMicroSurfaceFromReflectivityMap = FQ
            }
          },
          metadata: FQ
        }, Oq, sq), (0, WQ.i)(QQ, null, tw, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: QQ => "usePhysicalLightFalloff" in QQ,
            get: QQ => QQ.usePhysicalLightFalloff
          },
          metadata: FQ
        }, null, fw), (0, WQ.i)(QQ, null, ew, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useGLTFLightFalloff" in QQ,
            get: QQ => QQ.useGLTFLightFalloff
          },
          metadata: FQ
        }, null, fw), (0, WQ.i)(QQ, null, Mw, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRadianceOverAlpha" in QQ,
            get: QQ => QQ.useRadianceOverAlpha,
            set: (QQ, FQ) => {
              QQ.useRadianceOverAlpha = FQ
            }
          },
          metadata: FQ
        }, rq, Iq), (0, WQ.i)(QQ, null, Gw, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useObjectSpaceNormalMap" in QQ,
            get: QQ => QQ.useObjectSpaceNormalMap,
            set: (QQ, FQ) => {
              QQ.useObjectSpaceNormalMap = FQ
            }
          },
          metadata: FQ
        }, Uq, Nq), (0, WQ.i)(QQ, null, pw, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useParallax" in QQ,
            get: QQ => QQ.useParallax,
            set: (QQ, FQ) => {
              QQ.useParallax = FQ
            }
          },
          metadata: FQ
        }, Tq, Kq), (0, WQ.i)(QQ, null, Cw, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useParallaxOcclusion" in QQ,
            get: QQ => QQ.useParallaxOcclusion,
            set: (QQ, FQ) => {
              QQ.useParallaxOcclusion = FQ
            }
          },
          metadata: FQ
        }, zq, lq), (0, WQ.i)(QQ, null, Sw, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: QQ => "parallaxScaleBias" in QQ,
            get: QQ => QQ.parallaxScaleBias,
            set: (QQ, FQ) => {
              QQ.parallaxScaleBias = FQ
            }
          },
          metadata: FQ
        }, jq, aq), (0, WQ.i)(QQ, null, iw, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: QQ => "disableLighting" in QQ,
            get: QQ => QQ.disableLighting,
            set: (QQ, FQ) => {
              QQ.disableLighting = FQ
            }
          },
          metadata: FQ
        }, Xq, fq), (0, WQ.i)(QQ, null, Ww, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: QQ => "forceIrradianceInFragment" in QQ,
            get: QQ => QQ.forceIrradianceInFragment,
            set: (QQ, FQ) => {
              QQ.forceIrradianceInFragment = FQ
            }
          },
          metadata: FQ
        }, Vq, hq), (0, WQ.i)(QQ, null, Rw, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: QQ => "maxSimultaneousLights" in QQ,
            get: QQ => QQ.maxSimultaneousLights,
            set: (QQ, FQ) => {
              QQ.maxSimultaneousLights = FQ
            }
          },
          metadata: FQ
        }, Jq, Eq), (0, WQ.i)(QQ, null, Ow, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: QQ => "invertNormalMapX" in QQ,
            get: QQ => QQ.invertNormalMapX,
            set: (QQ, FQ) => {
              QQ.invertNormalMapX = FQ
            }
          },
          metadata: FQ
        }, nq, gq), (0, WQ.i)(QQ, null, sw, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: QQ => "invertNormalMapY" in QQ,
            get: QQ => QQ.invertNormalMapY,
            set: (QQ, FQ) => {
              QQ.invertNormalMapY = FQ
            }
          },
          metadata: FQ
        }, Pq, Zq), (0, WQ.i)(QQ, null, rw, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: QQ => "twoSidedLighting" in QQ,
            get: QQ => QQ.twoSidedLighting,
            set: (QQ, FQ) => {
              QQ.twoSidedLighting = FQ
            }
          },
          metadata: FQ
        }, yq, Bq), (0, WQ.i)(QQ, null, Iw, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAlphaFresnel" in QQ,
            get: QQ => QQ.useAlphaFresnel,
            set: (QQ, FQ) => {
              QQ.useAlphaFresnel = FQ
            }
          },
          metadata: FQ
        }, dq, Qo), (0, WQ.i)(QQ, null, Uw, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useLinearAlphaFresnel" in QQ,
            get: QQ => QQ.useLinearAlphaFresnel,
            set: (QQ, FQ) => {
              QQ.useLinearAlphaFresnel = FQ
            }
          },
          metadata: FQ
        }, Fo, wo), (0, WQ.i)(QQ, null, Nw, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "environmentBRDFTexture" in QQ,
            get: QQ => QQ.environmentBRDFTexture,
            set: (QQ, FQ) => {
              QQ.environmentBRDFTexture = FQ
            }
          },
          metadata: FQ
        }, Lo, qo), (0, WQ.i)(QQ, null, Tw, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: QQ => "forceNormalForward" in QQ,
            get: QQ => QQ.forceNormalForward,
            set: (QQ, FQ) => {
              QQ.forceNormalForward = FQ
            }
          },
          metadata: FQ
        }, oo, Do), (0, WQ.i)(QQ, null, Kw, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: QQ => "enableSpecularAntiAliasing" in QQ,
            get: QQ => QQ.enableSpecularAntiAliasing,
            set: (QQ, FQ) => {
              QQ.enableSpecularAntiAliasing = FQ
            }
          },
          metadata: FQ
        }, ko, vo), (0, WQ.i)(QQ, null, zw, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useHorizonOcclusion" in QQ,
            get: QQ => QQ.useHorizonOcclusion,
            set: (QQ, FQ) => {
              QQ.useHorizonOcclusion = FQ
            }
          },
          metadata: FQ
        }, mo, uo), (0, WQ.i)(QQ, null, lw, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRadianceOcclusion" in QQ,
            get: QQ => QQ.useRadianceOcclusion,
            set: (QQ, FQ) => {
              QQ.useRadianceOcclusion = FQ
            }
          },
          metadata: FQ
        }, Ho, bo), (0, WQ.i)(QQ, null, jw, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: QQ => "unlit" in QQ,
            get: QQ => QQ.unlit,
            set: (QQ, FQ) => {
              QQ.unlit = FQ
            }
          },
          metadata: FQ
        }, Yo, xo), (0, WQ.i)(QQ, null, aw, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: QQ => "applyDecalMapAfterDetailMap" in QQ,
            get: QQ => QQ.applyDecalMapAfterDetailMap,
            set: (QQ, FQ) => {
              QQ.applyDecalMapAfterDetailMap = FQ
            }
          },
          metadata: FQ
        }, Ao, to), FQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FQ
        })
      })(), QQ.PBRMATERIAL_OPAQUE = CF.PBRMATERIAL_OPAQUE, QQ.PBRMATERIAL_ALPHATEST = CF.PBRMATERIAL_ALPHATEST, QQ.PBRMATERIAL_ALPHABLEND = CF.PBRMATERIAL_ALPHABLEND, QQ.PBRMATERIAL_ALPHATESTANDBLEND = CF.PBRMATERIAL_ALPHATESTANDBLEND, QQ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = CF.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, QQ
    })();
    const lq = "KHR_materials_diffuse_transmission";

    function jq(QQ, FQ) {
      const wQ = FQ.subSurface;
      let LQ = null;
      return wQ.translucencyIntensityTexture ? LQ = wQ.translucencyIntensityTexture : wQ.thicknessTexture && wQ.useMaskFromThicknessTexture && (LQ = wQ.thicknessTexture), LQ && !wQ.useGltfStyleTextures ? (OQ.c.Warn(`${QQ}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${FQ.name}`, 1), null) : LQ
    }
    class aq {
      constructor(QQ) {
        this.name = lq, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        const LQ = [];
        if (wQ instanceof zq && this._isExtensionEnabled(wQ)) {
          const FQ = jq(QQ, wQ);
          return FQ && LQ.push(FQ), wQ.subSurface.translucencyColorTexture && LQ.push(wQ.subSurface.translucencyColorTexture), LQ
        }
        return LQ
      }
      _isExtensionEnabled(QQ) {
        if (QQ.unlit) return !1;
        const FQ = QQ.subSurface;
        return !!FQ.isTranslucencyEnabled && (!QQ.unlit && !FQ.useAlbedoToTintTranslucency && FQ.useGltfStyleTextures && 1 === FQ.volumeIndexOfRefraction && 0 === FQ.minimumThickness && 0 === FQ.maximumThickness)
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((LQ => {
          if (wQ instanceof zq && this._isExtensionEnabled(wQ)) {
            this._wasUsed = !0;
            const LQ = wQ.subSurface,
              qQ = jq(QQ, wQ),
              oQ = 0 == LQ.translucencyIntensity ? void 0 : LQ.translucencyIntensity,
              DQ = this._exporter._materialExporter.getTextureInfo(qQ) ?? void 0,
              kQ = !LQ.translucencyColor || LQ.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : LQ.translucencyColor.RLQ(),
              vQ = this._exporter._materialExporter.getTextureInfo(LQ.translucencyColorTexture) ?? void 0,
              mQ = {
                diffuseTransmissionFactor: oQ,
                diffuseTransmissionTexture: DQ,
                diffuseTransmissionColorFactor: kQ,
                diffuseTransmissionColorTexture: vQ
              };
            (DQ || vQ) && this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions = FQ.extensions || {}, FQ.extensions[lq] = mQ
          }
          LQ(FQ)
        }))
      }
    }
    let Xq = !1;

    function fq() {
      Xq || (Xq = !0, KL.RegisterExtension(lq, (QQ => new aq(QQ))))
    }
    fq();
    const Vq = "KHR_materials_dispersion";
    class hq {
      constructor() {
        this.name = Vq, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(QQ) {
        if (QQ.unlit) return !1;
        const FQ = QQ.subSurface;
        return !(!FQ.isRefractionEnabled && !FQ.isDispersionEnabled)
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          if (wQ instanceof zq && this._isExtensionEnabled(wQ)) {
            this._wasUsed = !0;
            const QQ = {
              dispersion: wQ.subSurface.dispersion
            };
            FQ.extensions = FQ.extensions || {}, FQ.extensions[Vq] = QQ
          }
          QQ(FQ)
        }))
      }
    }
    let Jq = !1;

    function Eq() {
      Jq || (Jq = !0, KL.RegisterExtension(Vq, (() => new hq)))
    }
    Eq();
    const nq = "KHR_materials_emissive_strength";
    class gq {
      constructor() {
        this.name = nq, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(QQ, FQ, wQ) {
        return await new Promise((QQ => {
          if (!(wQ instanceof zq)) return QQ(FQ);
          const LQ = wQ.emissiveColor.scale(wQ.emissiveIntensity),
            qQ = Math.max(...LQ.RLQ());
          if (qQ > 1) {
            FQ.emissiveFactor = LQ.scale(1 / qQ).RLQ(), this._wasUsed = !0;
            const QQ = {
              emissiveStrength: qQ
            };
            FQ.extensions || (FQ.extensions = {}), FQ.extensions[nq] = QQ
          } else FQ.emissiveFactor = LQ.RLQ();
          return QQ(FQ)
        }))
      }
    }
    let Pq = !1;

    function Zq() {
      Pq || (Pq = !0, KL.RegisterExtension(nq, (() => new gq)))
    }
    Zq();
    const yq = "KHR_materials_ior";
    class Bq {
      constructor() {
        this.name = yq, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(QQ) {
        return !QQ.unlit && (QQ instanceof BF ? 1.5 != QQ.specularIor : QQ instanceof zq && (void 0 != QQ.indexOfRefraction && 1.5 != QQ.indexOfRefraction))
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          if (wQ instanceof zq && this._isExtensionEnabled(wQ)) {
            this._wasUsed = !0;
            const QQ = {
              ior: wQ.indexOfRefraction
            };
            FQ.extensions = FQ.extensions || {}, FQ.extensions[yq] = QQ
          } else if (wQ instanceof BF && this._isExtensionEnabled(wQ)) {
            this._wasUsed = !0;
            const QQ = {
              ior: wQ.specularIor
            };
            FQ.extensions = FQ.extensions || {}, FQ.extensions[yq] = QQ
          }
          QQ(FQ)
        }))
      }
    }
    let dq = !1;

    function Qo() {
      dq || (dq = !0, KL.RegisterExtension(yq, (() => new Bq)))
    }
    Qo();
    const Fo = "KHR_materials_iridescence";
    class wo {
      constructor(QQ) {
        this.name = Fo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        const LQ = [];
        if (wQ instanceof CF) {
          if (wQ.iridescence.isEnabled) return wQ.iridescence.texture && LQ.push(wQ.iridescence.texture), wQ.iridescence.thicknessTexture && wQ.iridescence.thicknessTexture !== wQ.iridescence.texture && LQ.push(wQ.iridescence.thicknessTexture), LQ
        } else if (wQ instanceof BF && wQ.thinFilmWeight > 0) return wQ.thinFilmWeightTexture && LQ.push(wQ.thinFilmWeightTexture), wQ.thinFilmThicknessTexture && wQ.thinFilmThicknessTexture !== wQ.thinFilmWeightTexture && LQ.push(wQ.thinFilmThicknessTexture), LQ;
        return []
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          if (wQ instanceof CF) {
            if (!wQ.iridescence.isEnabled) return void QQ(FQ);
            this._wasUsed = !0, FQ.extensions = FQ.extensions || {};
            const LQ = this._exporter._materialExporter.getTextureInfo(wQ.iridescence.texture),
              qQ = this._exporter._materialExporter.getTextureInfo(wQ.iridescence.thicknessTexture),
              oQ = {
                iridescenceFactor: wQ.iridescence.intensity,
                iridescenceIor: wQ.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: wQ.iridescence.minimumThickness,
                iridescenceThicknessMaximum: wQ.iridescence.maximumThickness,
                iridescenceTexture: LQ ?? void 0,
                iridescenceThicknessTexture: qQ ?? void 0
              };
            null === oQ.iridescenceTexture && null === oQ.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[Fo] = oQ
          } else if (wQ instanceof BF) {
            if (wQ.thinFilmWeight <= 0) return void QQ(FQ);
            this._wasUsed = !0, FQ.extensions = FQ.extensions || {};
            const LQ = this._exporter._materialExporter.getTextureInfo(wQ.thinFilmWeightTexture),
              qQ = this._exporter._materialExporter.getTextureInfo(wQ.thinFilmThicknessTexture),
              oQ = {
                iridescenceFactor: wQ.thinFilmWeight,
                iridescenceIor: wQ.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * wQ.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * wQ.thinFilmThickness,
                iridescenceTexture: LQ ?? void 0,
                iridescenceThicknessTexture: qQ ?? void 0
              };
            null === oQ.iridescenceTexture && null === oQ.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[Fo] = oQ
          }
          QQ(FQ)
        }))
      }
    }
    let Lo = !1;

    function qo() {
      Lo || (Lo = !0, KL.RegisterExtension(Fo, (QQ => new wo(QQ))))
    }
    qo();
    const oo = "KHR_materials_sheen";
    class Do {
      constructor(QQ) {
        this.name = oo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        return wQ instanceof zq && wQ.sheen.isEnabled && wQ.sheen.texture ? [wQ.sheen.texture] : []
      }
      async postExportMaterialAsync(QQ, FQ, wQ) {
        return await new Promise((QQ => {
          if (wQ instanceof zq) {
            if (!wQ.sheen.isEnabled) return void QQ(FQ);
            this._wasUsed = !0, null == FQ.extensions && (FQ.extensions = {});
            const LQ = {
              sheenColorFactor: wQ.sheen.color.RLQ(),
              sheenRoughnessFactor: wQ.sheen.roughness ?? 0
            };
            null === LQ.sheenColorTexture && null === LQ.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(wQ), wQ.sheen.texture && (LQ.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(wQ.sheen.texture) ?? void 0), wQ.sheen.textureRoughness && !wQ.sheen.useRoughnessFromMainTexture ? LQ.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(wQ.sheen.textureRoughness) ?? void 0 : wQ.sheen.texture && wQ.sheen.useRoughnessFromMainTexture && (LQ.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(wQ.sheen.texture) ?? void 0), FQ.extensions[oo] = LQ
          }
          QQ(FQ)
        }))
      }
    }
    let ko = !1;

    function vo() {
      ko || (ko = !0, KL.RegisterExtension(oo, (QQ => new Do(QQ))))
    }
    vo();
    const mo = "KHR_materials_fuzz";

    function uo(QQ, FQ) {
      const wQ = new rQ.e(FQ.name, FQ.iN());
      return wQ._texture = QQ, wQ.coordinatesIndex = FQ.coordinatesIndex, FQ instanceof rQ.e && (wQ.uOffset = FQ.uOffset, wQ.vOffset = FQ.vOffset, wQ.uScale = FQ.uScale, wQ.vScale = FQ.vScale, wQ.wAng = FQ.wAng), wQ.wrapU = FQ.wrapU, wQ.wrapV = FQ.wrapV, wQ
    }
    class Ho {
      constructor(QQ) {
        this.name = mo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = QQ
      }
      dispose() {
        for (const QQ of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[QQ].dispose()
        }
        this._mergedTexturesMap = {};
        for (const QQ of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[QQ].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        if (wQ instanceof BF) {
          const QQ = [];
          if (wQ.fuzzWeight > 0) {
            wQ.fuzzWeightTexture && QQ.push(wQ.fuzzWeightTexture);
            let FQ = !1;
            if (wQ.fuzzRoughnessTexture && (wQ._useFuzzRoughnessFromTextureAlpha ? QQ.push(wQ.fuzzRoughnessTexture) : FQ = !0), wQ.fuzzColorTexture && !FQ && QQ.push(wQ.fuzzColorTexture), FQ) {
              const FQ = function(QQ) {
                const FQ = QQ.fuzzColorTexture,
                  wQ = FQ && FQ.getInternalTexture() ? FQ.getInternalTexture().uniqueId : "NoFuzzColor",
                  LQ = QQ.fuzzRoughnessTexture;
                return `FuzzColor_${wQ}_FuzzRoughness_${LQ&&LQ.getInternalTexture()?LQ.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(wQ);
              if (!this._cachedInternalTexturesMap[FQ]) {
                const QQ = await async function(QQ) {
                  const FQ = QQ.iN(),
                    wQ = QQ.fuzzColorTexture,
                    LQ = QQ.fuzzRoughnessTexture;
                  return wQ || LQ ? (await Dw("FuzzTexture", mw(wQ ? kw(wQ, 0) : vw(1), wQ ? kw(wQ, 1) : vw(1), wQ ? kw(wQ, 2) : vw(1), LQ ? kw(LQ, QQ._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : vw(1)), FQ)).getInternalTexture() : null
                }(wQ);
                QQ && (this._cachedInternalTexturesMap[FQ] = QQ)
              }
              this._cachedInternalTexturesMap[FQ] && (wQ.fuzzColorTexture && (this._mergedTexturesMap[wQ.fuzzColorTexture.uniqueId] = uo(this._cachedInternalTexturesMap[FQ], wQ.fuzzColorTexture), QQ.push(this._mergedTexturesMap[wQ.fuzzColorTexture.uniqueId])), wQ.fuzzRoughnessTexture && (this._mergedTexturesMap[wQ.fuzzRoughnessTexture.uniqueId] = uo(this._cachedInternalTexturesMap[FQ], wQ.fuzzRoughnessTexture), QQ.push(this._mergedTexturesMap[wQ.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return QQ
        }
        return []
      }
      async postExportMaterialAsync(QQ, FQ, wQ) {
        return await new Promise((QQ => {
          if (wQ instanceof BF) {
            if (0 == wQ.fuzzWeight) return void QQ(FQ);
            this._wasUsed = !0, null == FQ.extensions && (FQ.extensions = {});
            const LQ = {
              fuzzFactor: wQ.fuzzWeight,
              fuzzColorFactor: wQ.fuzzColor.RLQ(),
              fuzzRoughnessFactor: wQ.fuzzRoughness
            };
            let qQ, oQ;
            wQ.fuzzWeightTexture && (LQ.fuzzTexture = this._exporter._materialExporter.getTextureInfo(wQ.fuzzWeightTexture) ?? void 0), wQ.fuzzColorTexture && (qQ = this._mergedTexturesMap[wQ.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[wQ.fuzzColorTexture.uniqueId] : wQ.fuzzColorTexture, LQ.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(qQ) ?? void 0), wQ.fuzzRoughnessTexture && (oQ = this._mergedTexturesMap[wQ.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[wQ.fuzzRoughnessTexture.uniqueId] : wQ.fuzzRoughnessTexture, LQ.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(oQ) ?? void 0), null === LQ.fuzzColorTexture && null === LQ.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[mo] = LQ
          }
          QQ(FQ)
        }))
      }
    }
    let bo = !1;

    function Yo() {
      bo || (bo = !0, KL.RegisterExtension(mo, (QQ => new Ho(QQ))))
    }
    Yo();
    const xo = "KHR_materials_specular";
    class Ao {
      constructor(QQ) {
        this.name = xo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        const LQ = [];
        return wQ instanceof zq && this._isExtensionEnabled(wQ) ? (wQ.metallicReflectanceTexture && LQ.push(wQ.metallicReflectanceTexture), wQ.reflectanceTexture && LQ.push(wQ.reflectanceTexture), LQ) : LQ
      }
      _isExtensionEnabled(QQ) {
        return !QQ.unlit && (void 0 != QQ.metallicF0Factor && 1 != QQ.metallicF0Factor || void 0 != QQ.metallicReflectanceColor && !QQ.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(QQ))
      }
      _hasTexturesExtension(QQ) {
        return null != QQ.metallicReflectanceTexture || null != QQ.reflectanceTexture
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          var LQ;
          if (wQ instanceof zq && this._isExtensionEnabled(wQ)) {
            this._wasUsed = !0, FQ.extensions = FQ.extensions || {};
            const QQ = this._exporter._materialExporter.getTextureInfo(wQ.metallicReflectanceTexture) ?? void 0,
              LQ = this._exporter._materialExporter.getTextureInfo(wQ.reflectanceTexture) ?? void 0,
              qQ = {
                specularFactor: 1 == wQ.metallicF0Factor ? void 0 : wQ.metallicF0Factor,
                specularTexture: QQ,
                specularColorFactor: wQ.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : wQ.metallicReflectanceColor.RLQ(),
                specularColorTexture: LQ
              };
            this._hasTexturesExtension(wQ) && this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[xo] = qQ
          } else if (wQ instanceof BF) {
            FQ.extensions = FQ.extensions || {};
            const qQ = this._exporter._materialExporter.getTextureInfo(wQ.specularWeightTexture) ?? void 0,
              oQ = this._exporter._materialExporter.getTextureInfo(wQ.specularColorTexture) ?? void 0,
              DQ = 1 == wQ.specularWeight ? void 0 : wQ.specularWeight,
              kQ = wQ.specularColor.equalsFloats(1, 1, 1) ? void 0 : wQ.specularColor.RLQ();
            if (!oQ && !qQ && void 0 === DQ && void 0 === kQ) return QQ(FQ);
            this._wasUsed = !0;
            const vQ = {
                specularEdgeColorEnabled: !0
              },
              mQ = {
                specularFactor: DQ,
                specularTexture: qQ,
                specularColorFactor: kQ,
                specularColorTexture: oQ,
                extensions: {}
              };
            mQ.extensions.EXT_materials_specular_edge_color = vQ, (LQ = this._exporter._glTF).extensionsUsed || (LQ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (qQ || oQ) && this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[xo] = mQ
          }
          QQ(FQ)
        }))
      }
    }
    let to = !1;

    function eo() {
      to || (to = !0, KL.RegisterExtension(xo, (QQ => new Ao(QQ))))
    }
    eo();
    const Mo = "KHR_materials_transmission";
    class Go {
      constructor(QQ) {
        this.name = Mo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        const LQ = [];
        if (wQ instanceof zq) {
          if (this._isExtensionEnabled(wQ)) return wQ.subSurface.refractionIntensityTexture && wQ.subSurface.useGltfStyleTextures && LQ.push(wQ.subSurface.refractionIntensityTexture), LQ
        } else wQ instanceof BF && (wQ.transmissionWeight > 0 && wQ.transmissionWeightTexture && (LQ.push(wQ.transmissionWeightTexture), wQ.transmissionColorTexture && LQ.push(wQ.transmissionColorTexture)), wQ.subsurfaceWeight > 0 && wQ.subsurfaceWeightTexture && LQ.push(wQ.subsurfaceWeightTexture));
        return LQ
      }
      _isExtensionEnabled(QQ) {
        if (QQ instanceof BF && !QQ.unlit) return QQ.transmissionWeight > 0 || QQ.subsurfaceWeight > 0;
        if (QQ instanceof zq && !QQ.unlit) {
          const FQ = QQ.subSurface;
          return FQ.isRefractionEnabled && void 0 != FQ.refractionIntensity && 0 != FQ.refractionIntensity || null != FQ.refractionIntensityTexture && FQ.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(QQ, FQ, wQ) {
        if (!this._isExtensionEnabled(wQ)) return FQ;
        if (wQ instanceof zq) {
          this._wasUsed = !0;
          const LQ = wQ.subSurface,
            qQ = {
              transmissionFactor: 0 === LQ.refractionIntensity ? void 0 : LQ.refractionIntensity
            };
          if (LQ.refractionIntensityTexture)
            if (LQ.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(wQ);
              const QQ = this._exporter._materialExporter.getTextureInfo(LQ.refractionIntensityTexture);
              QQ && (qQ.transmissionTexture = QQ)
            } else OQ.c.Warn(`${QQ}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          FQ.extensions || (FQ.extensions = {}), FQ.extensions[Mo] = qQ
        } else if (wQ instanceof BF) {
          this._wasUsed = !0;
          const QQ = {
            transmissionFactor: (1 - wQ.transmissionWeight) * wQ.subsurfaceWeight + wQ.transmissionWeight
          };
          if (wQ.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(wQ);
            const FQ = this._exporter._materialExporter.getTextureInfo(wQ.transmissionWeightTexture);
            FQ && (QQ.transmissionTexture = FQ)
          } else if (wQ.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(wQ);
            const FQ = this._exporter._materialExporter.getTextureInfo(wQ.subsurfaceWeightTexture);
            FQ && (QQ.transmissionTexture = FQ)
          }
          if (0 == wQ.transmissionDepth && (!wQ.transmissionColor.equals(EQ.b.White()) || wQ.transmissionColorTexture) && FQ.pbrMetallicRoughness && (FQ.pbrMetallicRoughness.baseColorFactor || (FQ.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), FQ.pbrMetallicRoughness.baseColorFactor[0] *= wQ.transmissionColor.r, FQ.pbrMetallicRoughness.baseColorFactor[1] *= wQ.transmissionColor.g, FQ.pbrMetallicRoughness.baseColorFactor[2] *= wQ.transmissionColor.b, wQ.transmissionColorTexture && !FQ.pbrMetallicRoughness.baseColorTexture)) {
            const QQ = this._exporter._materialExporter.getTextureInfo(wQ.transmissionColorTexture);
            QQ && (FQ.pbrMetallicRoughness.baseColorTexture = QQ, this._exporter._materialNeedsUVsSet.add(wQ))
          }
          FQ.extensions || (FQ.extensions = {}), FQ.extensions[Mo] = QQ
        }
        return FQ
      }
    }
    let po = !1;

    function co() {
      po || (po = !0, KL.RegisterExtension(Mo, (QQ => new Go(QQ))))
    }
    co();
    var Co = wQ(39696);
    const So = "KHR_materials_unlit";
    class io {
      constructor() {
        this.name = So, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          let LQ = !1;
          wQ instanceof zq ? LQ = wQ.unlit : wQ instanceof Co.d && (LQ = wQ.disableLighting), LQ && (this._wasUsed = !0, null == FQ.extensions && (FQ.extensions = {}), FQ.extensions[So] = {}), QQ(FQ)
        }))
      }
    }
    let Wo = !1;

    function Ro() {
      Wo || (Wo = !0, KL.RegisterExtension(So, (() => new io)))
    }
    Ro();
    const Oo = "KHR_materials_volume";
    class so {
      constructor(QQ) {
        this.name = Oo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        const LQ = [];
        if (wQ instanceof zq) {
          if (this._isExtensionEnabled(wQ)) return wQ.subSurface.thicknessTexture && LQ.push(wQ.subSurface.thicknessTexture), LQ
        } else wQ instanceof BF && (wQ.transmissionWeight > 0 || wQ.subsurfaceWeight > 0) && wQ.geometryThicknessTexture && LQ.push(wQ.geometryThicknessTexture);
        return LQ
      }
      _isExtensionEnabled(QQ) {
        if (QQ.unlit) return !1;
        const FQ = QQ.subSurface;
        return !(!FQ.isRefractionEnabled && !FQ.isTranslucencyEnabled) && (void 0 != FQ.maximumThickness && 0 != FQ.maximumThickness || void 0 != FQ.tintColorAtDistance && FQ.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != FQ.tintColor && FQ.tintColor != EQ.b.White() || this._hasTexturesExtension(QQ))
      }
      _hasTexturesExtension(QQ) {
        return null != QQ.subSurface.thicknessTexture
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          if (wQ instanceof zq && this._isExtensionEnabled(wQ)) {
            this._wasUsed = !0;
            const QQ = wQ.subSurface,
              LQ = {
                thicknessFactor: 0 == QQ.maximumThickness ? void 0 : QQ.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(QQ.thicknessTexture) ?? void 0,
                attenuationDistance: QQ.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : QQ.tintColorAtDistance,
                attenuationColor: QQ.tintColor.equalsFloats(1, 1, 1) ? void 0 : QQ.tintColor.RLQ()
              };
            this._hasTexturesExtension(wQ) && this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions = FQ.extensions || {}, FQ.extensions[Oo] = LQ
          } else if (wQ instanceof BF) {
            const QQ = wQ.transmissionWeight > 0 && !wQ.geometryThinWalled,
              LQ = wQ.subsurfaceWeight > 0 && !wQ.geometryThinWalled;
            if (QQ || LQ) {
              this._wasUsed = !0;
              const qQ = wQ.geometryThickness,
                oQ = this._exporter._materialExporter.getTextureInfo(wQ.geometryThicknessTexture) ?? void 0;
              let DQ;
              oQ && this._exporter._materialNeedsUVsSet.add(wQ);
              const kQ = EQ.b.White().RLQ();
              if (QQ && wQ.transmissionDepth > 0) {
                const QQ = 1 / wQ.transmissionDepth;
                let FQ = new jQ.p(-Math.log(wQ.transmissionColor.r) * QQ, -Math.log(wQ.transmissionColor.g) * QQ, -Math.log(wQ.transmissionColor.b) * QQ);
                const LQ = new jQ.p(wQ.transmissionScatter.r * QQ, wQ.transmissionScatter.g * QQ, wQ.transmissionScatter.b * QQ),
                  qQ = FQ.subtract(LQ),
                  oQ = Math.min(qQ.x, qQ.y, qQ.z);
                oQ < 0 && (qQ.x = qQ.x - oQ, qQ.y = qQ.y - oQ, qQ.z = qQ.z - oQ), FQ = qQ.add(LQ);
                DQ = 1 / Math.max(FQ.x, FQ.y, FQ.z), kQ[0] = Math.exp(-FQ.x * DQ), kQ[1] = Math.exp(-FQ.y * DQ), kQ[2] = Math.exp(-FQ.z * DQ)
              } else DQ = Number.MAX_VALUE, kQ[0] = 1, kQ[1] = 1, kQ[2] = 1;
              let vQ = 1;
              const mQ = EQ.b.White().RLQ();
              if (LQ) {
                const QQ = wQ.subsurfaceRadius,
                  FQ = wQ.subsurfaceRadiusScale,
                  LQ = new jQ.p(FQ.r, FQ.g, FQ.b).multiplyByFloats(QQ, QQ, QQ),
                  qQ = new jQ.p(1 / Math.max(LQ.x, 1e-6), 1 / Math.max(LQ.y, 1e-6), 1 / Math.max(LQ.z, 1e-6));
                vQ = 1 / Math.max(qQ.x, qQ.y, qQ.z), mQ[0] = Math.exp(-qQ.x * vQ), mQ[1] = Math.exp(-qQ.y * vQ), mQ[2] = Math.exp(-qQ.z * vQ)
              }
              const uQ = (1 - wQ.transmissionWeight) * wQ.subsurfaceWeight,
                HQ = uQ + wQ.transmissionWeight,
                bQ = 1 / Math.max(HQ, 1e-6),
                YQ = wQ.transmissionWeight * bQ,
                xQ = uQ * bQ,
                AQ = kQ.map(((QQ, FQ) => QQ * YQ + mQ[FQ] * xQ)),
                tQ = {
                  thicknessFactor: qQ,
                  thicknessTexture: oQ,
                  attenuationDistance: DQ * YQ + vQ * xQ,
                  attenuationColor: AQ
                };
              FQ.extensions = FQ.extensions || {}, FQ.extensions[Oo] = tQ
            }
          }
          QQ(FQ)
        }))
      }
    }
    let ro = !1;

    function Io() {
      ro || (ro = !0, KL.RegisterExtension(Oo, (QQ => new so(QQ))))
    }
    Io();
    const Uo = "KHR_materials_volume_scatter";
    class No {
      constructor(QQ) {
        this.name = Uo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        const LQ = [];
        return wQ instanceof BF && (wQ.transmissionWeight > 0 && wQ.transmissionScatterTexture && LQ.push(wQ.transmissionScatterTexture), wQ.subsurfaceWeight > 0 && wQ.subsurfaceColorTexture && LQ.push(wQ.subsurfaceColorTexture)), LQ
      }
      _isExtensionEnabled(QQ) {
        if (QQ.unlit) return !1;
        const FQ = QQ.transmissionWeight > 0 && !QQ.geometryThinWalled && QQ.transmissionDepth > 0 && !QQ.transmissionScatter.equals(EQ.b.Black()),
          wQ = QQ.subsurfaceWeight > 0 && !QQ.geometryThinWalled;
        return !(!FQ && !wQ)
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          if (wQ instanceof BF && this._isExtensionEnabled(wQ)) {
            this._wasUsed = !0;
            let QQ = jQ.p.Zero(),
              LQ = 0;
            if (wQ.transmissionWeight > 0) {
              QQ = function(QQ) {
                const FQ = new jQ.p(Math.sqrt(1 - QQ.x), Math.sqrt(1 - QQ.y), Math.sqrt(1 - QQ.z)),
                  wQ = new jQ.p(1, 1, 1),
                  LQ = wQ.subtract(FQ),
                  qQ = wQ.subtract(new jQ.p(.139, .139, .139).multiplyInPlace(FQ)),
                  oQ = wQ.add(new jQ.p(1.17, 1.17, 1.17).multiplyInPlace(FQ));
                return LQ.multiplyInPlace(qQ).divideInPlace(oQ)
              }(new jQ.p(wQ.transmissionScatter.r, wQ.transmissionScatter.g, wQ.transmissionScatter.b)), LQ = wQ.transmissionScatterAnisotropy
            }
            const qQ = jQ.p.Zero();
            let oQ = 0;
            wQ.subsurfaceWeight > 0 && (qQ.set(wQ.subsurfaceColor.r, wQ.subsurfaceColor.g, wQ.subsurfaceColor.b), oQ = wQ.subsurfaceScatterAnisotropy);
            const DQ = (1 - wQ.transmissionWeight) * wQ.subsurfaceWeight,
              kQ = DQ + wQ.transmissionWeight,
              vQ = 1 / Math.max(kQ, 1e-6),
              mQ = wQ.transmissionWeight * vQ,
              uQ = DQ * vQ,
              HQ = {
                multiscatterColorFactor: QQ.multiplyByFloats(mQ, mQ, mQ).addInPlace(qQ.multiplyByFloats(uQ, uQ, uQ)).RLQ(),
                scatterAnisotropy: LQ * mQ + oQ * uQ
              };
            if (wQ.subsurfaceWeight > 0 && wQ.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(wQ);
              const QQ = this._exporter._materialExporter.getTextureInfo(wQ.subsurfaceColorTexture);
              QQ && (HQ.multiscatterColorTexture = QQ)
            } else if (wQ.transmissionWeight > 0 && wQ.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(wQ);
              const QQ = this._exporter._materialExporter.getTextureInfo(wQ.transmissionScatterTexture);
              QQ && (HQ.multiscatterColorTexture = QQ)
            }
            FQ.extensions = FQ.extensions || {}, FQ.extensions[Uo] = HQ
          }
          QQ(FQ)
        }))
      }
    }
    let To = !1;

    function Ko() {
      To || (To = !0, KL.RegisterExtension(Uo, (QQ => new No(QQ)), 101))
    }
    Ko();
    const zo = "KHR_materials_diffuse_roughness";
    class jo {
      constructor(QQ) {
        this.name = zo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, FQ, wQ) {
        const LQ = [];
        if (wQ instanceof CF) {
          if (wQ._baseDiffuseRoughness) return wQ._baseDiffuseRoughnessTexture && LQ.push(wQ._baseDiffuseRoughnessTexture), LQ
        } else if (wQ instanceof BF && wQ.baseDiffuseRoughness) return wQ.baseDiffuseRoughnessTexture && LQ.push(wQ.baseDiffuseRoughnessTexture), LQ;
        return []
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          let LQ = null,
            qQ = null;
          if (wQ instanceof CF ? (LQ = wQ._baseDiffuseRoughness, qQ = wQ._baseDiffuseRoughnessTexture) : wQ instanceof BF && (LQ = wQ.baseDiffuseRoughness, qQ = wQ.baseDiffuseRoughnessTexture), !LQ) return void QQ(FQ);
          this._wasUsed = !0, FQ.extensions = FQ.extensions || {};
          const oQ = {
            diffuseRoughnessFactor: LQ,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(qQ) ?? void 0
          };
          null !== oQ.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(wQ), FQ.extensions[zo] = oQ, QQ(FQ)
        }))
      }
    }
    let ao = !1;

    function Xo() {
      ao || (ao = !0, KL.RegisterExtension(zo, (QQ => new jo(QQ))))
    }
    Xo();
    const fo = "KHR_materials_openpbr";
    class Vo {
      constructor() {
        this.name = fo, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(QQ, FQ, wQ) {
        return new Promise((QQ => {
          wQ instanceof BF && (this._wasUsed = !0, FQ.extensions = FQ.extensions || {}, FQ.extensions[fo] = {}), QQ(FQ)
        }))
      }
    }
    let ho = !1;

    function Jo() {
      ho || (ho = !0, KL.RegisterExtension(fo, (() => new Vo)))
    }
    Jo();
    const Eo = "KHR_texture_transform";
    class no {
      constructor() {
        this.name = Eo, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(QQ, FQ, wQ) {
        if (wQ.iN() || iF.g.Warn(`${QQ}: "scene" is not defined for Babylon texture ${wQ.name}!`), (0 !== wQ.uAng || 0 !== wQ.vAng) && (iF.g.Warn(`${QQ}: Texture ${wQ.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== wQ.uRotationCenter || 0 !== wQ.vRotationCenter)) return;
        const LQ = {};
        let qQ = !1;
        if (0 === wQ.uOffset && 0 === wQ.vOffset || (LQ.offset = [wQ.uOffset, wQ.vOffset], qQ = !0), 1 === wQ.uScale && 1 === wQ.vScale || (LQ.scale = [wQ.uScale, wQ.vScale], qQ = !0), 0 !== wQ.wAng) {
          if (0 !== wQ.uRotationCenter || 0 !== wQ.vRotationCenter) {
            if (wQ.homogeneousRotationInUVTransform && wQ.uScale !== wQ.vScale) return void iF.g.Warn(`${QQ}: Texture ${wQ.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${Eo}.`);
            iF.g.Warn(`${QQ}: Texture ${wQ.name} with non-origin rotation center will be exported using an adjusted offset with ${Eo}.`), LQ.offset = function(QQ) {
              const {
                uOffset: FQ,
                vOffset: wQ,
                uRotationCenter: LQ,
                vRotationCenter: qQ,
                uScale: oQ,
                vScale: DQ,
                wAng: kQ
              } = QQ, vQ = Math.cos(kQ), mQ = Math.sin(kQ), uQ = LQ * oQ, HQ = qQ * DQ;
              return [FQ + (uQ * (1 - vQ) + HQ * mQ), wQ + (HQ * (1 - vQ) - uQ * mQ)]
            }(wQ)
          }
          LQ.rotation = -wQ.wAng, qQ = !0
        }
        0 !== wQ.coordinatesIndex && (LQ.texCoord = wQ.coordinatesIndex, qQ = !0), qQ && (this._wasUsed = !0, FQ.extensions || (FQ.extensions = {}), FQ.extensions[Eo] = LQ)
      }
    }
    let go = !1;

    function Po() {
      go || (go = !0, KL.RegisterExtension(Eo, (() => new no)))
    }
    Po();
    var Zo = wQ(39448);
    const yo = "KHR_texture_basisu";
    class Bo {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(QQ) {
        this.name = yo, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      postExportTexture(QQ, FQ) {
        const wQ = this._exporter._textures[FQ.index],
          LQ = wQ.source;
        if (void 0 === LQ) return;
        const qQ = this._exporter._images[LQ];
        "image/ktx2" === (qQ.mimeType || (0, Zo.h)(qQ.uri)) && (wQ.source = void 0, wQ.extensions || (wQ.extensions = {}), wQ.extensions[yo] = {
          source: LQ
        }, this._wasUsed = !0)
      }
    }
    let QD = !1;

    function FD() {
      QD || (QD = !0, KL.RegisterExtension(yo, (QQ => new Bo(QQ))))
    }
    FD();
    const wD = "EXT_texture_webp";
    class LD {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(QQ) {
        this.name = wD, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      postExportTexture(QQ, FQ) {
        const wQ = this._exporter._textures[FQ.index],
          LQ = wQ.source;
        if (void 0 === LQ) return;
        const qQ = this._exporter._images[LQ];
        "image/webp" === (qQ.mimeType || (0, Zo.h)(qQ.uri)) && (wQ.source = void 0, wQ.extensions || (wQ.extensions = {}), wQ.extensions[wD] = {
          source: LQ
        }, this._wasUsed = !0)
      }
    }
    let qD = !1;

    function oD() {
      qD || (qD = !0, KL.RegisterExtension(wD, (QQ => new LD(QQ))))
    }
    oD();
    const DD = "EXT_texture_avif";
    class kD {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(QQ) {
        this.name = DD, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      postExportTexture(QQ, FQ) {
        const wQ = this._exporter._textures[FQ.index],
          LQ = wQ.source;
        if (void 0 === LQ) return;
        const qQ = this._exporter._images[LQ];
        "image/avif" === (qQ.mimeType || (0, Zo.h)(qQ.uri)) && (wQ.source = void 0, wQ.extensions || (wQ.extensions = {}), wQ.extensions[DD] = {
          source: LQ
        }, this._wasUsed = !0)
      }
    }
    let vD = !1;

    function mD() {
      vD || (vD = !0, KL.RegisterExtension(DD, (QQ => new kD(QQ))))
    }
    mD();
    class uD {
      static CreateSTL(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          oQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          DQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          kQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          vQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const mQ = function(QQ, FQ, wQ) {
            const qQ = [3 * QQ[wQ], 3 * QQ[wQ + 1], 3 * QQ[wQ + 2]],
              oQ = [new LQ.Ox(FQ[qQ[0]], FQ[qQ[0] + 2], FQ[qQ[0] + 1]), new LQ.Ox(FQ[qQ[1]], FQ[qQ[1] + 2], FQ[qQ[1] + 1]), new LQ.Ox(FQ[qQ[2]], FQ[qQ[2] + 2], FQ[qQ[2] + 1])],
              DQ = oQ[0].subtract(oQ[1]),
              kQ = oQ[2].subtract(oQ[1]);
            return {
              v: oQ,
              n: LQ.Ox.Cross(kQ, DQ).normalize()
            }
          },
          HQ = function(QQ, FQ, wQ, LQ) {
            return FQ = bQ(QQ, FQ, wQ.x, LQ), FQ = bQ(QQ, FQ, wQ.y, LQ), bQ(QQ, FQ, wQ.z, LQ)
          },
          bQ = function(QQ, FQ, wQ, LQ) {
            return QQ.setFloat32(FQ, wQ, LQ), FQ + 4
          },
          xQ = function(QQ) {
            if (kQ) {
              let FQ = QQ;
              QQ instanceof YQ.e && (FQ = QQ.cqQ);
              const wQ = FQ.getVerticesData(uQ.d.PositionKind, !0, !0);
              if (!wQ) return [];
              const qQ = LQ.Ox.Zero();
              let oQ;
              for (oQ = 0; oQ < wQ.length; oQ += 3) LQ.Ox.TransformCoordinatesFromFloatsToRef(wQ[oQ], wQ[oQ + 1], wQ[oQ + 2], QQ.computeWorldMatrix(!0), qQ).toArray(wQ, oQ);
              return wQ
            }
            return QQ.getVerticesData(uQ.d.PositionKind) || []
          };
        kQ && (DQ = !0);
        let AQ = "",
          tQ = 0,
          eQ = 0;
        if (qQ) {
          for (let wQ = 0; wQ < QQ.length; wQ++) {
            const FQ = QQ[wQ].OLQ();
            tQ += FQ ? FQ.length / 3 : 0
          }
          const FQ = new ArrayBuffer(84 + 50 * tQ);
          AQ = new DataView(FQ), eQ += 80, AQ.setUint32(eQ, tQ, oQ), eQ += 4
        } else vQ || (AQ = "solid stlmesh\r\n");
        for (let LQ = 0; LQ < QQ.length; LQ++) {
          const FQ = QQ[LQ];
          !qQ && vQ && (AQ += "solid " + FQ.name + "\r\n"), !DQ && FQ instanceof uL.c && FQ.bakeCurrentTransformIntoVertices();
          const wQ = xQ(FQ),
            kQ = FQ.OLQ() || [];
          for (let QQ = 0; QQ < kQ.length; QQ += 3) {
            const FQ = mQ(kQ, wQ, QQ);
            qQ ? (eQ = HQ(AQ, eQ, FQ.n, oQ), eQ = HQ(AQ, eQ, FQ.v[0], oQ), eQ = HQ(AQ, eQ, FQ.v[1], oQ), eQ = HQ(AQ, eQ, FQ.v[2], oQ), eQ += 2) : (AQ += "\tfacet normal " + FQ.n.x + " " + FQ.n.y + " " + FQ.n.z + "\r\n", AQ += "\t\touter loop\r\n", AQ += "\t\t\tvertex " + FQ.v[0].x + " " + FQ.v[0].y + " " + FQ.v[0].z + "\r\n", AQ += "\t\t\tvertex " + FQ.v[1].x + " " + FQ.v[1].y + " " + FQ.v[1].z + "\r\n", AQ += "\t\t\tvertex " + FQ.v[2].x + " " + FQ.v[2].y + " " + FQ.v[2].z + "\r\n", AQ += "\t\tendloop\r\n", AQ += "\tendfacet\r\n")
          }!qQ && vQ && (AQ += "endsolid " + name + "\r\n")
        }
        if (qQ || vQ || (AQ += "endsolid stlmesh"), FQ) {
          const QQ = document.createElement("a"),
            FQ = new Blob([AQ], {
              type: "application/octet-stream"
            });
          QQ.href = window.URL.createObjectURL(FQ), QQ.download = wQ + ".stl", QQ.click()
        }
        return AQ
      }
    }

    function HD(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const qQ = [];
      for (let oQ = 0; oQ < QQ.length / wQ; oQ++) {
        const DQ = QQ[oQ * wQ] * (LQ ? -1 : 1),
          kQ = QQ[oQ * wQ + 1],
          vQ = QQ[oQ * wQ + 2];
        qQ.push(`(${DQ.toPrecision(FQ.precision)}, ${kQ.toPrecision(FQ.precision)}, ${vQ.toPrecision(FQ.precision)})`)
      }
      return qQ.join(", ")
    }

    function bD(QQ, FQ) {
      const wQ = [];
      for (let LQ = 0; LQ < QQ.length / 2; LQ++) {
        const qQ = QQ[2 * LQ],
          oQ = QQ[2 * LQ + 1];
        wQ.push(`(${qQ.toPrecision(FQ.precision)}, ${(1-oQ).toPrecision(FQ.precision)})`)
      }
      return wQ.join(", ")
    }

    function YD(QQ, FQ, wQ, LQ) {
      const qQ = QQ.getVerticesData(uQ.d.PositionKind),
        oQ = QQ.getVerticesData(uQ.d.NormalKind);
      if (qQ && oQ) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${wQ}"\n\t\tint[] faceVertexCounts = [${function(QQ){const FQ=QQ.OLQ()?.length?QQ.getTotalIndices():QQ.getTotalVertices();return Array(FQ/3).fill(3).join(", ")}(QQ)}]\n\t\tint[] faceVertexIndices = [${function(QQ){const FQ=QQ.OLQ(),wQ=FQ?.length??QQ.getTotalVertices(),LQ=[];if(null!==FQ)for(let qQ=0;qQ<wQ;qQ++)LQ.push(FQ[qQ]);else for(let qQ=0;qQ<wQ;qQ++)LQ.push(qQ);return LQ.join(", ")}(QQ)}]\n\t\tnormal3f[] normals = [${HD(oQ,FQ,void 0,LQ)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${HD(qQ,FQ,void 0,LQ)}]\n        ${function(QQ,FQ){let wQ="";for(let qQ=0;qQ<4;qQ++){const LQ=qQ>0?qQ:"",oQ=QQ.getVerticesData(uQ.d.UVKind+(LQ?LQ+1:""));oQ&&(wQ+=`\n\t\ttexCoord2f[] primvars:st${LQ} = [${bD(oQ,FQ)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const LQ=QQ.getVerticesData(uQ.d.ColorKind);return LQ&&(wQ+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        HD(LQ, FQ, LQ.length / QQ.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),wQ}(QQ,FQ)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function xD(QQ, FQ, wQ, LQ) {
      return `\n        def "Geometry"\n        {\n        ${YD(QQ,FQ,wQ,LQ)}\n        }\n        `
    }

    function AD(QQ) {
      let FQ = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return FQ += QQ, fflate.strToU8(FQ)
    }

    function tD(QQ) {
      const FQ = QQ.m;
      return `( ${eD(FQ,0)}, ${eD(FQ,4)}, ${eD(FQ,8)}, ${eD(FQ,12)} )`
    }

    function eD(QQ, FQ) {
      return `(${QQ[FQ+0]}, ${QQ[FQ+1]}, ${QQ[FQ+2]}, ${QQ[FQ+3]})`
    }

    function MD(QQ, FQ) {
      const wQ = "Object_" + QQ.uniqueId,
        LQ = tD(FQ);
      return `def Xform "${wQ}" (\n\tprepend references = @./geometries/Geometry_${QQ.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${LQ}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${QQ.material.uniqueId}>\n}\n\n`
    }

    function GD(QQ) {
      switch (QQ) {
        case SQ.d.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case SQ.d.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case SQ.d.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function pD(QQ) {
      return `(${QQ.x}, ${QQ.y})`
    }

    function cD(QQ) {
      return `(${QQ.r}, ${QQ.g}, ${QQ.b})`
    }

    function CD(QQ) {
      return "image/jpeg" === QQ || "image/png" === QQ
    }

    function SD(QQ, FQ, wQ, qQ, oQ, DQ) {
      const kQ = QQ.getInternalTexture().uniqueId + "_" + QQ.invertY,
        mQ = QQ.mimeType || (0, vQ.d)(QQ.getInternalTexture()?.url ?? ""),
        uQ = CD(mQ) ? mQ : "image/png",
        HQ = "image/jpeg" === uQ ? "jpg" : "png";
      oQ[kQ] = {
        texture: QQ,
        mimeType: uQ,
        ext: HQ
      };
      const bQ = QQ.coordinatesIndex > 0 ? "st" + QQ.coordinatesIndex : "st",
        YQ = new LQ.Vector2(QQ.uScale, QQ.vScale),
        xQ = new LQ.Vector2(QQ.uOffset, QQ.vOffset),
        AQ = QQ.wAng,
        tQ = Math.sin(AQ),
        eQ = Math.cos(AQ);
      return xQ.y = 1 - xQ.y - YQ.y, xQ.x += tQ * YQ.x, xQ.y += (1 - eQ) * YQ.y, `\n    def Shader "PrimvarReader_${wQ}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${bQ}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${wQ}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${FQ.uniqueId}/PrimvarReader_${wQ}.outputs:result>\n        float inputs:rotation = ${(AQ*(180/Math.PI)).toFixed(DQ.precision)}\n        float2 inputs:scale = ${pD(YQ)}\n        float2 inputs:translation = ${pD(xQ)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${QQ.uniqueId}_${wQ}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${kQ}.${HQ}@\n        float2 inputs:st.connect = </Root/Materials/Material_${FQ.uniqueId}/Transform2d_${wQ}.outputs:result>\n        ${qQ?"float4 inputs:scale = "+function(QQ){return`(${QQ.r}, ${QQ.g}, ${QQ.b}, 1.0)`}(qQ):""}\n        token inputs:sourceColorSpace = "${QQ.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${GD(QQ.wrapU)}"\n        token inputs:wrapT = "${GD(QQ.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${FQ.needAlphaBlending()||FQ.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function iD(QQ, FQ, wQ) {
      const LQ = "\t\t\t",
        qQ = [],
        oQ = [],
        {
          diffuseMap: DQ,
          diffuse: kQ,
          alphaCutOff: vQ,
          emissiveMap: mQ,
          emissive: uQ,
          normalMap: HQ,
          roughnessMap: bQ,
          roughnessChannel: YQ,
          roughness: xQ,
          metalnessMap: AQ,
          metalnessChannel: eQ,
          metalness: MQ,
          aoMap: GQ,
          aoMapChannel: pQ,
          aoMapIntensity: cQ,
          alphaMap: CQ,
          ior: SQ,
          clearCoatEnabled: iQ,
          clearCoat: WQ,
          clearCoatMap: RQ,
          clearCoatRoughness: OQ,
          clearCoatRoughnessMap: sQ
        } = function(QQ) {
          const FQ = {
            diffuseMap: null,
            diffuse: null,
            alphaCutOff: 0,
            emissiveMap: null,
            emissive: null,
            normalMap: null,
            roughnessMap: null,
            roughnessChannel: "a",
            roughness: 0,
            metalnessMap: null,
            metalnessChannel: "r",
            metalness: 0,
            aoMap: null,
            aoMapChannel: "rgb",
            aoMapIntensity: 0,
            alphaMap: null,
            ior: 1,
            clearCoatEnabled: !1,
            clearCoat: 0,
            clearCoatMap: null,
            clearCoatRoughness: 0,
            clearCoatRoughnessMap: null
          };
          return QQ instanceof DL.StandardMaterial ? {
            ...FQ,
            diffuseMap: QQ.diffuseTexture,
            diffuse: QQ.diffuseColor,
            alphaCutOff: QQ.alphaCutOff,
            emissiveMap: QQ.emissiveTexture,
            emissive: QQ.emissiveColor,
            roughness: 1,
            alphaMap: QQ.opacityTexture
          } : QQ instanceof CF ? {
            ...FQ,
            diffuseMap: QQ._albedoTexture,
            diffuse: QQ._albedoColor,
            alphaCutOff: QQ._alphaCutOff,
            emissiveMap: QQ._emissiveTexture,
            emissive: QQ._emissiveColor,
            normalMap: QQ._bumpTexture,
            roughnessMap: QQ._metallicTexture,
            roughnessChannel: QQ._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: QQ._roughness ?? 1,
            metalnessMap: QQ._metallicTexture,
            metalnessChannel: QQ._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: QQ._metallic ?? 0,
            aoMap: QQ._ambientTexture,
            aoMapChannel: QQ._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: QQ._ambientTextureStrength,
            alphaMap: QQ._opacityTexture,
            ior: QQ.subSurface.indexOfRefraction,
            clearCoatEnabled: QQ.clearCoat.isEnabled,
            clearCoat: QQ.clearCoat.intensity,
            clearCoatMap: QQ.clearCoat.texture,
            clearCoatRoughness: QQ.clearCoat.roughness,
            clearCoatRoughnessMap: QQ.clearCoat.useRoughnessFromMainTexture ? QQ.clearCoat.texture : QQ.clearCoat.textureRoughness
          } : FQ
        }(QQ);
      return null !== DQ ? (qQ.push(`${LQ}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${DQ.uniqueId}_diffuse.outputs:rgb>`), QQ.needAlphaBlending() ? qQ.push(`${LQ}float inputs:opacity.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${DQ.uniqueId}_diffuse.outputs:a>`) : QQ.needAlphaTesting() && (qQ.push(`${LQ}float inputs:opacity.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${DQ.uniqueId}_diffuse.outputs:a>`), qQ.push(`${LQ}float inputs:opacityThreshold = ${vQ}`)), oQ.push(SD(DQ, QQ, "diffuse", kQ, FQ, wQ))) : qQ.push(`${LQ}color3f inputs:diffuseColor = ${cD(kQ||tQ.Color3.White())}`), null !== mQ ? (qQ.push(`${LQ}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${mQ.uniqueId}_emissive.outputs:rgb>`), oQ.push(SD(mQ, QQ, "emissive", uQ, FQ, wQ))) : uQ && uQ.toLuminance() > 0 && qQ.push(`${LQ}color3f inputs:emissiveColor = ${cD(uQ)}`), null !== HQ && (qQ.push(`${LQ}normal3f inputs:normal.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${HQ.uniqueId}_normal.outputs:rgb>`), oQ.push(SD(HQ, QQ, "normal", null, FQ, wQ))), null !== GQ && (qQ.push(`${LQ}float inputs:occlusion.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${GQ.uniqueId}_occlusion.outputs:${pQ}>`), oQ.push(SD(GQ, QQ, "occlusion", new tQ.Color3(cQ, cQ, cQ), FQ, wQ))), null !== bQ ? (qQ.push(`${LQ}float inputs:roughness.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${bQ.uniqueId}_roughness.outputs:${YQ}>`), oQ.push(SD(bQ, QQ, "roughness", new tQ.Color3(xQ, xQ, xQ), FQ, wQ))) : qQ.push(`${LQ}float inputs:roughness = ${xQ}`), null !== AQ ? (qQ.push(`${LQ}float inputs:metallic.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${AQ.uniqueId}_metallic.outputs:${eQ}>`), oQ.push(SD(AQ, QQ, "metallic", new tQ.Color3(MQ, MQ, MQ), FQ, wQ))) : qQ.push(`${LQ}float inputs:metallic = ${MQ}`), null !== CQ ? (qQ.push(`${LQ}float inputs:opacity.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${CQ.uniqueId}_opacity.outputs:r>`), qQ.push(`${LQ}float inputs:opacityThreshold = 0.0001`), oQ.push(SD(CQ, QQ, "opacity", null, FQ, wQ))) : qQ.push(`${LQ}float inputs:opacity = ${QQ.alpha}`), iQ && (null !== RQ ? (qQ.push(`${LQ}float inputs:clearcoat.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${RQ.uniqueId}_clearcoat.outputs:r>`), oQ.push(SD(RQ, QQ, "clearcoat", new tQ.Color3(WQ, WQ, WQ), FQ, wQ))) : qQ.push(`${LQ}float inputs:clearcoat = ${WQ}`), null !== sQ ? (qQ.push(`${LQ}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${sQ.uniqueId}_clearcoatRoughness.outputs:g>`), oQ.push(SD(sQ, QQ, "clearcoatRoughness", new tQ.Color3(OQ, OQ, OQ), FQ, wQ))) : qQ.push(`${LQ}float inputs:clearcoatRoughness = ${OQ}`)), qQ.push(`${LQ}float inputs:ior = ${SQ}`), `\n\tdef Material "Material_${QQ.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${qQ.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${QQ.uniqueId}/PreviewSurface.outputs:surface>\n\n${oQ.join("\n")}\n\n\t}\n`
    }

    function WD(QQ) {
      QQ.computeWorldMatrix(!0);
      const FQ = QQ.getWorldMatrix().clone(),
        wQ = QQ.iN().useRightHandedSystem;
      let LQ = QQ.material?._getEffectiveOrientation(QQ) ?? QQ.sideOrientation,
        DQ = !wQ,
        kQ = QQ.parent;
      for (; kQ;) {
        if (zw(kQ, wQ) && null === kQ.parent) {
          wQ || (FQ.multiplyToRef(kQ.getWorldMatrix().invert(), FQ), LQ = LQ === oQ.d.ClockWiseSideOrientation ? oQ.d.CounterClockWiseSideOrientation : oQ.d.ClockWiseSideOrientation), DQ = !1;
          break
        }
        kQ = kQ.parent
      }
      return FQ.determinant() < 0 && qQ.Tools.Warn(`Mesh ${QQ.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: FQ,
        windingOrder: LQ === oQ.d.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: DQ
      }
    }
    async function RD(QQ, FQ, wQ) {
      const oQ = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...FQ
      };
      "undefined" === typeof fflate && await qQ.Tools.LoadScriptAsync(oQ.fflateUrl);
      const DQ = {};
      DQ[oQ.modelFileName] = null;
      let kQ = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      kQ += function(QQ) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===QQ.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${QQ.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${QQ.planeAnchoringAlignment}"`:""}\n            `
      }(oQ);
      const vQ = {};
      for (const LQ of QQ.meshes) {
        if (0 === LQ.getTotalVertices()) continue;
        const QQ = LQ,
          FQ = QQ.geometry,
          mQ = QQ.material;
        if (!mQ || !FQ || wQ && !wQ(QQ)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(mQ.getClassName())) {
          const wQ = "geometries/Geometry_" + FQ.uniqueId + ".usda",
            {
              matrix: LQ,
              windingOrder: qQ,
              convertToRightHanded: uQ
            } = WD(QQ);
          if (!(wQ in DQ)) {
            const QQ = xD(FQ, oQ, qQ, uQ);
            DQ[wQ] = AD(QQ)
          }
          mQ.uniqueId in vQ || (vQ[mQ.uniqueId] = mQ), kQ += MD(QQ, LQ)
        } else qQ.Tools.Warn("USDZExportAsync does not support this material type: " + mQ.getClassName())
      }
      QQ.activeCamera && oQ.exportCamera && (kQ += function(QQ, FQ) {
        const wQ = "Camera_" + QQ.uniqueId,
          qQ = tD(LQ.Matrix.RotationY(Math.PI).multiply(QQ.getWorldMatrix()));
        if (QQ.mode === SQ.d.ORTHOGRAPHIC_CAMERA) return `def Camera "${wQ}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${qQ}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${QQ.minZ.toPrecision(FQ.precision)}, ${QQ.maxZ.toPrecision(FQ.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(QQ.orthoLeft||1)+Math.abs(QQ.orthoRight||1))).toPrecision(FQ.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(QQ.orthoTop||1)+Math.abs(QQ.orthoBottom||1))).toPrecision(FQ.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const LQ = QQ.Wx().getAspectRatio(QQ),
            oQ = FQ.cameraSensorWidth || 35;
          return `def Camera "${wQ}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${qQ}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${QQ.minZ.toPrecision(FQ.precision)}, ${QQ.maxZ.toPrecision(FQ.precision)})\n\t\t\tfloat focalLength = ${(oQ/(2*Math.tan(.5*QQ.fov))).toPrecision(FQ.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(oQ*LQ).toPrecision(FQ.precision)}\n\t\t\tfloat verticalAperture = ${(oQ/LQ).toPrecision(FQ.precision)}            \n\t\t}\n\t\n\t`
        }
      }(QQ.activeCamera, oQ)), kQ += "\n            }\n        }";
      const mQ = {};
      kQ += function(QQ, FQ, wQ) {
        const LQ = [];
        for (const qQ in QQ) {
          const oQ = QQ[qQ];
          LQ.push(iD(oQ, FQ, wQ))
        }
        return `\n    def "Materials"\n{\n${LQ.join("")}\n}\n\n`
      }(vQ, mQ, oQ), kQ += "\n    }", DQ[oQ.modelFileName] = fflate.strToU8(kQ);
      for (const LQ in mQ) {
        const {
          texture: QQ,
          ext: FQ,
          mimeType: wQ
        } = mQ[LQ], qQ = await ew(QQ);
        if (qQ && CD(qQ.mimeType) && qQ.mimeType === wQ) DQ[`textures/Texture_${LQ}.${FQ}`] = new Uint8Array(qQ.data);
        else {
          const qQ = QQ.getSize(),
            oQ = await (0, pQ.d)(QQ),
            kQ = await iQ.DumpTools.DumpDataAsync(qQ.width, qQ.height, oQ, wQ, void 0, !1, !0);
          DQ[`textures/Texture_${LQ}.${FQ}`] = new Uint8Array(kQ).slice()
        }
      }
      let uQ = 0;
      for (const LQ in DQ) {
        const QQ = DQ[LQ];
        if (!QQ) continue;
        uQ += 34 + LQ.length;
        const FQ = 63 & uQ;
        if (4 !== FQ) {
          const wQ = new Uint8Array(64 - FQ);
          DQ[LQ] = [QQ, {
            extra: {
              12345: wQ
            }
          }]
        }
        uQ = QQ.length
      }
      return fflate.zipSync(DQ, {
        level: 0
      })
    }
    var OD = wQ(40514);
    class sD {
      static Export(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        if (!QQ || 0 === QQ.bones.length) throw new Error("Invalid or empty skeleton provided");
        let LQ = FQ;
        FQ && 0 !== FQ.length || (LQ = QQ.animations.map((QQ => QQ.name)));
        let qQ = null;
        for (const mQ of LQ) {
          const FQ = QQ.getAnimationRange(mQ);
          FQ && (qQ = qQ ? new OD.b("animation-range", Math.min(qQ.from, FQ.from), Math.max(qQ.to, FQ.to)) : FQ)
        }
        if (!qQ && (QQ.animations.length > 0 && (qQ = QQ.getAnimationRange(QQ.animations[0].name)), !qQ)) throw new Error("No animation range found in skeleton");
        const oQ = wQ || 1 / (QQ.animations[0]?.framePerSecond || 30),
          DQ = this._BuildBoneHierarchy(QQ, LQ);
        let kQ = 0;
        for (const mQ of DQ) mQ.positionKeys.length > 0 && (kQ = Math.max(kQ, mQ.positionKeys.length)), mQ.rotationKeys.length > 0 && (kQ = Math.max(kQ, mQ.rotationKeys.length));
        0 === kQ && (kQ = Math.floor((qQ.to - qQ.from) / oQ) + 1);
        let vQ = "";
        return vQ += "HIERARCHY\n", vQ += this._ExportHierarchy(DQ, 0), vQ += "MOTION\n", vQ += `Frames: ${kQ}\n`, vQ += `Frame Time: ${oQ.toFixed(6)}\n`, vQ += this._ExportMotionData(DQ, kQ, 0, LQ), vQ
      }
      static _BuildBoneHierarchy(QQ, FQ) {
        const wQ = new Map,
          LQ = [];
        for (const qQ of QQ.bones) {
          const QQ = {
            bone: qQ,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          wQ.set(qQ, QQ)
        }
        for (const qQ of QQ.bones) {
          const QQ = wQ.get(qQ);
          if (qQ.animations.length > 0)
            for (const wQ of qQ.animations) FQ.includes(wQ.name) && ("position" === wQ.targetProperty ? (QQ.hasPositionChannels = !0, QQ.positionKeys.push(...wQ.getKeys())) : "rotationQuaternion" === wQ.targetProperty && (QQ.hasRotationChannels = !0, QQ.rotationKeys.push(...wQ.getKeys())));
          if (qQ.getParent()) {
            const FQ = wQ.get(qQ.getParent());
            FQ && FQ.children.push(QQ)
          } else LQ.push(QQ)
        }
        return LQ
      }
      static _ExportHierarchy(QQ, FQ) {
        let wQ = "";
        const LQ = "    ".repeat(FQ);
        for (const qQ of QQ) {
          const QQ = qQ.bone;
          if (this._IsEndSite(qQ)) {
            wQ += `${LQ}End Site\n`, wQ += `${LQ}{\n`;
            const FQ = this._GetBoneOffset(QQ);
            wQ += `${LQ}    OFFSET ${FQ.x.toFixed(6)} ${FQ.y.toFixed(6)} ${FQ.z.toFixed(6)}\n`, wQ += `${LQ}}\n`
          } else {
            wQ += `${0===FQ?"ROOT":`${LQ}JOINT`} ${QQ.name}\n`, wQ += `${LQ}{\n`;
            const oQ = this._GetBoneOffset(QQ);
            wQ += `${LQ}    OFFSET ${oQ.x.toFixed(6)} ${oQ.y.toFixed(6)} ${oQ.z.toFixed(6)}\n`;
            const DQ = [];
            qQ.hasPositionChannels && DQ.push("Xposition", "Yposition", "Zposition"), qQ.hasRotationChannels && DQ.push("Zrotation", "Xrotation", "Yrotation"), DQ.length > 0 && (wQ += `${LQ}    CHANNELS ${DQ.length} ${DQ.join(" ")}\n`), qQ.children.length > 0 && (wQ += this._ExportHierarchy(qQ.children, FQ + 1)), wQ += `${LQ}}\n`
          }
        }
        return wQ
      }
      static _IsEndSite(QQ) {
        return 0 === QQ.children.length
      }
      static _GetBoneOffset(QQ) {
        try {
          if (!QQ.getParent()) return QQ.getRestMatrix().getTranslation();
          return QQ.getLocalMatrix().getTranslation()
        } catch (FQ) {
          return LQ.Ox.Zero()
        }
      }
      static _ExportMotionData(QQ, FQ, wQ, LQ) {
        let qQ = "";
        for (let oQ = 0; oQ < FQ; oQ++) {
          const FQ = [];
          this._CollectFrameValues(QQ, oQ + wQ, FQ, LQ), qQ += FQ.map((QQ => QQ.toFixed(6))).join(" ") + "\n"
        }
        return qQ
      }
      static _CollectFrameValues(QQ, FQ, wQ, LQ) {
        for (const qQ of QQ)
          if (!this._IsEndSite(qQ)) {
            if (qQ.hasPositionChannels) {
              const QQ = this._GetPositionAtFrameIndex(qQ.positionKeys, FQ);
              wQ.push(QQ.x, QQ.y, QQ.z)
            }
            if (qQ.hasRotationChannels) {
              const QQ = this._GetRotationAtFrameIndex(qQ.rotationKeys, FQ),
                LQ = this._QuaternionToEuler(QQ);
              wQ.push(LQ.z, LQ.x, LQ.y)
            }
            qQ.children.length > 0 && this._CollectFrameValues(qQ.children, FQ, wQ, LQ)
          }
      }
      static _GetPositionAtFrameIndex(QQ, FQ) {
        if (0 === QQ.length) return LQ.Ox.Zero();
        return QQ[Math.max(0, Math.min(FQ, QQ.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(QQ, FQ) {
        if (0 === QQ.length) return LQ.Quaternion.Identity();
        return QQ[Math.max(0, Math.min(FQ, QQ.length - 1))].value.clone()
      }
      static _QuaternionToEuler(QQ) {
        const FQ = new LQ.Matrix;
        QQ.toRotationMatrix(FQ);
        const wQ = FQ.m;
        let oQ, DQ, kQ;
        const vQ = Math.sqrt(wQ[0] * wQ[0] + wQ[1] * wQ[1]);
        return vQ > Tw.b ? (oQ = Math.atan2(wQ[6], wQ[10]), DQ = Math.atan2(-wQ[2], vQ), kQ = Math.atan2(wQ[1], wQ[0])) : (oQ = Math.atan2(-wQ[9], wQ[5]), DQ = Math.atan2(-wQ[2], vQ), kQ = 0), new LQ.Ox(qQ.Tools.ToDegrees(oQ), qQ.Tools.ToDegrees(DQ), qQ.Tools.ToDegrees(kQ))
      }
    }

    function rD(QQ) {
      return "string" === typeof QQ?.name
    }
    const ID = Symbol("__xml:meta$__"),
      UD = Symbol("__xml:name$__");

    function ND(QQ, FQ) {
      Object.prototype.hasOwnProperty.call(QQ.metadata, ID) || (QQ.metadata[ID] = []), QQ.metadata[ID].push(FQ)
    }

    function TD(QQ) {
      return (FQ, wQ) => {
        FQ[UD] = QQ
      }
    }

    function KD() {
      return (QQ, FQ) => ND(FQ, {
        kind: "none",
        prop: String(FQ.name),
        ignore: !0
      })
    }

    function zD(QQ) {
      return (FQ, wQ) => ND(wQ, {
        kind: "attr",
        prop: String(wQ.name),
        ...QQ
      })
    }

    function lD(QQ) {
      return (FQ, wQ) => ND(wQ, {
        kind: "elem",
        prop: String(wQ.name),
        ...QQ
      })
    }

    function jD(QQ) {
      const FQ = "function" === typeof QQ ? QQ : QQ?.constructor,
        wQ = FQ?.[Symbol.metadata];
      if (!wQ) return [];
      const LQ = [];
      let qQ = wQ;
      for (; qQ;) Object.prototype.hasOwnProperty.call(qQ, ID) && LQ.push(...qQ[ID]), qQ = Object.getPrototypeOf(qQ);
      return LQ
    }

    function aD(QQ) {
      const FQ = QQ?.constructor?.[UD];
      return FQ || void 0
    }

    function XD(QQ) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(QQ)
    }

    function fD(QQ) {
      if (rD(QQ)) return QQ;
      const FQ = (QQ ?? "").trim();
      if (!FQ) return {
        name: ""
      };
      const wQ = FQ.indexOf(":");
      if (-1 === wQ) return {
        name: FQ
      };
      if (-1 !== FQ.indexOf(":", wQ + 1)) return {
        name: FQ
      };
      const LQ = FQ.slice(0, wQ),
        qQ = FQ.slice(wQ + 1);
      return XD(LQ) && XD(qQ) ? {
        ns: LQ,
        name: qQ
      } : {
        name: FQ
      }
    }

    function VD(QQ, FQ) {
      return FQ ? `${FQ}:${QQ}` : QQ
    }
    const hD = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      JD = Object.freeze({
        number: hD
      });

    function ED(QQ) {
      const FQ = QQ?.eps ?? hD.eps;
      return {
        eps: FQ,
        maxDecimalsCap: QQ?.maxDecimalsCap ?? hD.maxDecimalsCap,
        trimTrailingZeros: QQ?.trimTrailingZeros ?? hD.trimTrailingZeros,
        fixedDecimals: QQ?.fixedDecimals,
        allowScientific: QQ?.allowScientific ?? hD.allowScientific,
        snapNearZero: QQ?.snapNearZero ?? hD.snapNearZero,
        zeroThreshold: QQ?.zeroThreshold ?? FQ,
        perAttributeEps: QQ?.perAttributeEps
      }
    }

    function nD(QQ) {
      return {
        number: ED(QQ?.number)
      }
    }
    class gD {
      constructor(QQ) {
        if (this.o = QQ, this._o = QQ.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(QQ) {
        if (!Number.isFinite(QQ)) throw new Error(`Cannot format non-finite number: ${QQ}`);
        const FQ = this._o,
          wQ = this._clampInt(FQ.maxDecimalsCap ?? 15, 0, 20),
          LQ = FQ.trimTrailingZeros ?? !0,
          qQ = FQ.snapNearZero ?? !0,
          oQ = FQ.zeroThreshold ?? FQ.eps,
          DQ = 1 / FQ.eps;
        let kQ, vQ = Math.round(QQ * DQ) / DQ;
        if (Object.is(vQ, -0) && (vQ = 0), qQ && Math.abs(vQ) <= oQ && (vQ = 0), kQ = void 0 !== FQ.fixedDecimals ? this._clampInt(FQ.fixedDecimals, 0, wQ) : this._clampInt(Math.ceil(-Math.log10(FQ.eps)), 0, wQ), FQ.allowScientific, 0 === kQ) return String(Math.trunc(vQ));
        let mQ = vQ.toFixed(kQ);
        if (LQ && void 0 === FQ.fixedDecimals && (mQ = mQ.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(mQ)) throw new Error(`Scientific notation not allowed in XML output: ${mQ}`);
        return mQ
      }
      _clampInt(QQ, FQ, wQ) {
        return Number.isFinite(QQ) ? (QQ = Math.trunc(QQ), Math.max(FQ, Math.min(wQ, QQ))) : FQ
      }
    }

    function PD(QQ) {
      return QQ instanceof Date
    }

    function ZD(QQ) {
      return "string" === typeof QQ
    }

    function yD(QQ) {
      return "string" === typeof QQ || "number" === typeof QQ || "boolean" === typeof QQ || "bigint" === typeof QQ || PD(QQ)
    }

    function BD(QQ) {
      return "number" === typeof QQ || "boolean" === typeof QQ || "bigint" === typeof QQ || PD(QQ)
    }
    class dD {
      constructor(QQ, FQ) {
        this._ns = new Map, this._prefixCount = 0, this._builder = QQ, this._format = nD(FQ), this._nFmt = new gD(this._format)
      }
      withNamespace() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        for (const LQ of FQ) this._assignNamespace(LQ);
        return this
      }
      serialize(QQ, FQ) {
        if (!(FQ = FQ ?? aD(QQ))) throw new Error("can not find name for given object");
        const wQ = fD(FQ);
        wQ.ns && this._assignNamespace(wQ.ns, "xmlns"), this._gatherNamespaces(QQ, new WeakSet);
        const LQ = this._builder.ele(null, wQ.name);
        for (const [qQ, oQ] of Array.from(this._ns.entries())) LQ.att("xmlns", oQ, qQ);
        this._writeObjectContent(LQ, QQ, (new WeakSet).add(QQ)), this._builder.end()
      }
      _writeObject(QQ, FQ, wQ) {
        if (wQ.has(FQ)) return;
        if (wQ.add(FQ), Array.isArray(FQ)) {
          for (const LQ of FQ) BD(LQ) || (ZD(LQ) ? this._builder.text(LQ) : this._writeObject(QQ, LQ, wQ));
          return
        }
        const LQ = aD(FQ);
        if (!LQ) return;
        const qQ = fD(LQ),
          oQ = this._getPrefix(qQ),
          DQ = VD(qQ.name, oQ);
        QQ.ele(null, DQ), this._writeObjectContent(QQ, FQ, wQ), this._builder.end()
      }
      _getPrefix(QQ) {
        if (QQ.ns) {
          const FQ = this._ns.get(QQ.ns.toLowerCase());
          if ("xmlns" !== FQ) return FQ
        }
      }
      _writeObjectContent(QQ, FQ, wQ) {
        const LQ = jD(FQ) ?? [],
          qQ = new Map;
        for (const DQ of LQ) {
          const QQ = qQ.get(DQ.prop) ?? [];
          QQ.push(DQ), qQ.set(DQ.prop, QQ)
        }
        const oQ = Object.keys(FQ).sort(((QQ, FQ) => {
          const wQ = (qQ.get(QQ) ?? []).some((QQ => "attr" === QQ.kind));
          return wQ === (qQ.get(FQ) ?? []).some((QQ => "attr" === QQ.kind)) ? 0 : wQ ? -1 : 1
        }));
        for (const DQ of oQ) {
          const LQ = FQ[DQ];
          if (null === LQ || void 0 === LQ) continue;
          const oQ = qQ.get(DQ);
          if (oQ) {
            if (oQ.some((QQ => !0 === QQ.ignore || "none" === QQ.kind))) continue;
            for (const FQ of oQ) {
              const wQ = FQ.name ?? FQ.prop.toLowerCase();
              if (wQ) switch (FQ.kind) {
                case "attr": {
                  let qQ = null;
                  if ("number" === typeof LQ && this._nFmt && (qQ = this._nFmt.toString(LQ)), FQ.formatter) {
                    qQ = new FQ.formatter(this._format).toString(LQ)
                  }
                  if (qQ = qQ ?? LQ.toString(), qQ) {
                    const FQ = fD(wQ),
                      LQ = this._getPrefix(FQ),
                      oQ = VD(FQ.name, LQ);
                    QQ.att(null, oQ, qQ)
                  }
                  break
                }
              }
            }
          } else BD(LQ) || (ZD(LQ) ? this._builder.text(LQ) : this._writeObject(QQ, LQ, wQ))
        }
      }
      _gatherNamespaces(QQ, FQ) {
        if (FQ.has(QQ)) return;
        if (FQ.add(QQ), Array.isArray(QQ)) {
          for (const wQ of QQ) yD(wQ) || this._gatherNamespaces(wQ, FQ);
          return
        }
        const wQ = aD(QQ);
        wQ && this._assignNamespace(wQ);
        const LQ = jD(QQ) ?? [],
          qQ = new Map;
        for (const DQ of LQ) {
          const QQ = qQ.get(DQ.prop) ?? [];
          QQ.push(DQ), qQ.set(DQ.prop, QQ)
        }
        const oQ = [];
        for (const DQ of Object.keys(QQ)) {
          const FQ = QQ[DQ];
          if (null === FQ || void 0 === FQ) continue;
          const wQ = qQ.get(DQ);
          if (wQ) {
            if (wQ.some((QQ => !0 === QQ.ignore || "none" === QQ.kind))) continue;
            for (const QQ of wQ) QQ.name && this._assignNamespace(QQ.name)
          }
          oQ.push(FQ)
        }
        for (const DQ of oQ) yD(DQ) || this._gatherNamespaces(DQ, FQ)
      }
      _assignNamespace(QQ, FQ) {
        const wQ = fD(QQ);
        if (wQ?.ns) {
          const QQ = wQ.ns.toLowerCase();
          this._ns.get(QQ) || this._ns.set(QQ, FQ ?? this._buildNsPrefix(QQ))
        } else if ("xmlns" === FQ) {
          const QQ = wQ.name.toLowerCase();
          this._ns.get(QQ) || this._ns.set(QQ, FQ ?? this._buildNsPrefix(QQ))
        }
      }
      _buildNsPrefix(QQ) {
        let FQ, wQ = !1;
        do {
          FQ = "ns" + this._prefixCount++;
          for (const QQ of Array.from(this._ns.values()))
            if (QQ === FQ) {
              wQ = !0;
              break
            }
        } while (wQ);
        return FQ
      }
    }
    class Qk {}
    var Fk;
    Qk.OpenTag = "<", Qk.CloseTag = ">", Qk.Slash = "/", Qk.Question = "?", Qk.Quote = '"', Qk.Equal = "=", Qk.Space = " ", Qk.Semicolon = ":", Qk.Dec = "<?xml", Qk.Xml = "xml", Qk.Xmlns = "xmlns", Qk.Xsi = "xsi", Qk.VersionKeyword = "version", Qk.EncodingKeyword = "encoding", Qk.StandaloneKeyword = "standalone",
      function(QQ) {
        QQ[QQ.Declaration = 0] = "Declaration", QQ[QQ.Tag = 1] = "Tag", QQ[QQ.Attribute = 2] = "Attribute", QQ[QQ.Text = 3] = "Text"
      }(Fk || (Fk = {}));
    class wk {
      constructor(QQ) {
        this._ctxStack = [], this._d = 0, this._w = QQ
      }
      dec(QQ, FQ, wQ) {
        return this._w.write(Qk.Dec), this._writeAttStr(Qk.VersionKeyword, QQ), FQ && this._writeAttStr(Qk.EncodingKeyword, FQ), void 0 !== wQ && this._writeAttStr(Qk.StandaloneKeyword, wQ ? "yes" : "no"), this._w.write(Qk.Question, Qk.CloseTag), this
      }
      att(QQ, FQ, wQ) {
        const LQ = this._peekContext();
        if (!LQ) throw new Error("att() without open element");
        if (LQ.closed) throw new Error(`att() after start tag closed for <${LQ.name}>`);
        if (this._isXmlnsDecl(QQ, FQ)) {
          if (FQ === Qk.Xmlns) LQ.defaultNs = wQ, this._registerNamespace(LQ, "", wQ), this._writeAttStr(Qk.Xmlns, wQ);
          else if (QQ) this._registerNamespace(LQ, FQ, wQ), this._writeAttStr(`${QQ}:${FQ}`, wQ);
          else {
            const QQ = FQ.slice(6);
            this._registerNamespace(LQ, QQ, wQ), this._writeAttStr(FQ, wQ)
          }
          return LQ.lastToken = Fk.Attribute, this
        }
        let qQ = FQ;
        if (QQ) {
          qQ = `${this._ensurePrefixDeclared(LQ,QQ)}:${FQ}`
        }
        return LQ.lastToken = Fk.Attribute, this._writeAttStr(qQ, wQ), this
      }
      ele(QQ, FQ) {
        const wQ = this._peekContext();
        wQ && this._closeOpenTagIfNeeded(wQ);
        let LQ = FQ;
        if (QQ) {
          LQ = `${this._lookupPrefix(QQ)??QQ}:${FQ}`
        }
        return this._pushContext(LQ, ++this._d), this._w.write(Qk.OpenTag, LQ), this
      }
      text(QQ) {
        const FQ = this._peekContext();
        if (!FQ) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(FQ), FQ.lastToken = Fk.Text, this._w.write(this._escText(QQ)), this
      }
      end() {
        const QQ = this._popContext();
        return QQ && (this._d--, QQ.closed ? this._w.write(Qk.OpenTag, Qk.Slash, QQ.name, Qk.CloseTag) : this._w.write(Qk.Slash, Qk.CloseTag)), this
      }
      _pushContext(QQ, FQ) {
        const wQ = new wk.Context(QQ, FQ);
        return this._ctxStack.push(wQ), wQ
      }
      _popContext() {
        return this._ctxStack.pop()
      }
      _peekContext() {
        return this._ctxStack[this._ctxStack.length - 1]
      }
      get _contextDepth() {
        return this._ctxStack.length
      }
      _writeAttStr(QQ, FQ) {
        this._w.write(Qk.Space, QQ, Qk.Equal, Qk.Quote, this._escAttr(FQ), Qk.Quote)
      }
      _lookupPrefix(QQ) {
        let FQ = this._ctxStack.length - 1;
        if (FQ >= 0)
          do {
            const wQ = this._ctxStack[FQ--],
              LQ = wQ.ns2prefix?.get(QQ);
            if (LQ) return LQ
          } while (FQ >= 0)
      }
      _escText(QQ) {
        return QQ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(QQ) {
        return this._escText(QQ).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(QQ, FQ) {
        if (QQ) return QQ === Qk.Xmlns;
        const wQ = FQ.length,
          LQ = Qk.Xmlns.length;
        return wQ >= LQ && (FQ.startsWith(Qk.Xmlns) && (FQ.length == LQ || FQ[LQ] == Qk.Semicolon))
      }
      _registerNamespace(QQ, FQ, wQ) {
        if (FQ === Qk.Xml || FQ === Qk.Xmlns) throw new Error(`reserved prefix '${FQ}'`);
        const LQ = QQ.prefix2ns.get(FQ);
        if (LQ && LQ !== wQ) throw new Error(`prefix '${FQ}' already bound to a different namespace`);
        QQ.ns2prefix.get(wQ) || QQ.ns2prefix.set(wQ, FQ), QQ.prefix2ns.set(FQ, wQ)
      }
      _allocPrefix(QQ) {
        let FQ = 1;
        for (;;) {
          const wQ = "ns" + FQ++;
          if (!QQ.prefix2ns.has(wQ)) return wQ
        }
      }
      _ensurePrefixDeclared(QQ, FQ) {
        const wQ = this._lookupPrefix(FQ);
        if (wQ) return wQ;
        if (QQ.closed) throw new Error(`can not declare namespace after start tag closed for <${QQ.name}>`);
        const LQ = this._allocPrefix(QQ);
        return this._writeAttStr(`${Qk.Xmlns}:${LQ}`, FQ), this._registerNamespace(QQ, LQ, FQ), LQ
      }
      _closeOpenTagIfNeeded(QQ) {
        QQ.closed || (this._w.write(Qk.CloseTag), QQ.closed = !0)
      }
    }
    wk.Context = class {
      constructor(QQ, FQ) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = QQ, this.depth = FQ
      }
    };
    class Lk {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        if (0 === FQ.length) return this;
        const LQ = FQ.join("");
        return this._chunks.push(LQ), this.count += LQ.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class qk {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = QQ, this._opts = FQ, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        if (0 === FQ.length) return this;
        const LQ = FQ.join("");
        if (0 === LQ.length) return this;
        this._pending += LQ, this._pendingChars += LQ.length;
        const qQ = this._opts.flushChars ?? 65536;
        return this._pendingChars >= qQ && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const QQ = this._encoder.encode(this._pending);
        return this._sink.push(QQ), this.count += QQ.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const Dk = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      kk = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var vk, mk;
    ! function(QQ) {
      QQ.micron = "micron", QQ.millimeter = "millimeter", QQ.centimeter = "centimeter", QQ.inch = "inch", QQ.foot = "foot", QQ.meter = "meter"
    }(vk || (vk = {})),
    function(QQ) {
      QQ.model = "model", QQ.solidsupport = "solidsupport", QQ.support = "support", QQ.surface = "surface", QQ.other = "other"
    }(mk || (mk = {}));
    const uk = "http://schemas.openxmlformats.org/package/2006/content-types",
      Hk = "http://schemas.openxmlformats.org/package/2006/relationships";
    var bk;
    ! function(QQ) {
      QQ.Relationships = "application/vnd.openxmlformats-package.relationships+xml", QQ.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", QQ.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", QQ.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", QQ.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", QQ.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", QQ.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", QQ.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", QQ.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", QQ.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", QQ.Png = "image/png", QQ.Jpeg = "image/jpeg", QQ.Tiff = "image/tiff", QQ.Xml = "application/xml"
    }(bk || (bk = {}));
    const Yk = "_rels/",
      xk = "3D/",
      Ak = "3dmodel.model",
      tk = ".rels",
      ek = "[Content_Types].xml";
    class Mk {
      static IsKnown(QQ) {
        return Mk.Known.has(QQ)
      }
      static IsThreeDimModel(QQ) {
        return QQ === Mk.ThreeDimModel
      }
    }
    Mk.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Mk.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Mk.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Mk.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", Mk.Known = new Set([Mk.ThreeDimModel, Mk.Thumbnail, Mk.PrintTicket, Mk.MustPreserve]);
    let Gk = (() => {
        let QQ, FQ, wQ = [TD({
            ns: uk,
            name: "Types"
          })],
          LQ = [];
        FQ = class {
          constructor() {
            this.items = []
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfContentTypes"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, WQ.i)(null, QQ = {
            value: FQ
          }, wQ, {
            kind: "class",
            name: FQ.name,
            metadata: qQ
          }, null, LQ), FQ = QQ.value, qQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, WQ.l)(FQ, LQ)
        })(), FQ
      })(),
      pk = (() => {
        let QQ, FQ, wQ, LQ, qQ = [TD({
            ns: uk,
            name: "Default"
          })],
          oQ = [],
          DQ = [],
          kQ = [],
          vQ = [],
          mQ = [];
        FQ = class {
          constructor(QQ, FQ) {
            this.ext = (0, WQ.l)(this, DQ, void 0), this.ct = ((0, WQ.l)(this, kQ), (0, WQ.l)(this, vQ, void 0)), (0, WQ.l)(this, mQ), this.ext = QQ, this.ct = FQ
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfContentType"), (() => {
          const uQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wQ = [zD({
            name: {
              ns: uk,
              name: "Extension"
            }
          })], LQ = [zD({
            name: {
              ns: uk,
              name: "ContentType"
            }
          })], (0, WQ.i)(null, null, wQ, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ext" in QQ,
              get: QQ => QQ.ext,
              set: (QQ, FQ) => {
                QQ.ext = FQ
              }
            },
            metadata: uQ
          }, DQ, kQ), (0, WQ.i)(null, null, LQ, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ct" in QQ,
              get: QQ => QQ.ct,
              set: (QQ, FQ) => {
                QQ.ct = FQ
              }
            },
            metadata: uQ
          }, vQ, mQ), (0, WQ.i)(null, QQ = {
            value: FQ
          }, qQ, {
            kind: "class",
            name: FQ.name,
            metadata: uQ
          }, null, oQ), FQ = QQ.value, uQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uQ
          }), (0, WQ.l)(FQ, oQ)
        })(), FQ
      })(),
      ck = (() => {
        let QQ, FQ, wQ = [TD({
            ns: Hk,
            name: "Relationships"
          })],
          LQ = [];
        FQ = class {
          constructor() {
            this.items = []
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfRelationships"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, WQ.i)(null, QQ = {
            value: FQ
          }, wQ, {
            kind: "class",
            name: FQ.name,
            metadata: qQ
          }, null, LQ), FQ = QQ.value, qQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, WQ.l)(FQ, LQ)
        })(), FQ
      })(),
      Ck = (() => {
        let QQ, FQ, wQ, LQ, qQ, oQ = [TD({
            ns: Hk,
            name: "Relationship"
          })],
          DQ = [],
          kQ = [],
          vQ = [],
          mQ = [],
          uQ = [],
          HQ = [],
          bQ = [];
        FQ = class {
          constructor(QQ, FQ, wQ) {
            this.id = (0, WQ.l)(this, kQ, void 0), this.type = ((0, WQ.l)(this, vQ), (0, WQ.l)(this, mQ, void 0)), this.target = ((0, WQ.l)(this, uQ), (0, WQ.l)(this, HQ, void 0)), (0, WQ.l)(this, bQ), this.id = QQ, this.type = FQ, this.target = wQ
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfRelationship"), (() => {
          const YQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wQ = [zD({
            name: "Id"
          })], LQ = [zD({
            name: "Type"
          })], qQ = [zD({
            name: "Target"
          })], (0, WQ.i)(null, null, wQ, {
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
            metadata: YQ
          }, kQ, vQ), (0, WQ.i)(null, null, LQ, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: QQ => "type" in QQ,
              get: QQ => QQ.type,
              set: (QQ, FQ) => {
                QQ.type = FQ
              }
            },
            metadata: YQ
          }, mQ, uQ), (0, WQ.i)(null, null, qQ, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: QQ => "target" in QQ,
              get: QQ => QQ.target,
              set: (QQ, FQ) => {
                QQ.target = FQ
              }
            },
            metadata: YQ
          }, HQ, bQ), (0, WQ.i)(null, QQ = {
            value: FQ
          }, oQ, {
            kind: "class",
            name: FQ.name,
            metadata: YQ
          }, null, DQ), FQ = QQ.value, YQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YQ
          }), (0, WQ.l)(FQ, DQ)
        })(), FQ
      })();
    class Sk {
      constructor(QQ, FQ, wQ) {
        this.contentTypes = QQ, this.relationships = FQ, this.model = wQ
      }
    }
    class ik {
      static Zero() {
        return new ik([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(QQ) {
        this.values = QQ
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Wk {
      constructor(QQ) {
        this.o = QQ, this._f = new gD(QQ)
      }
      toString(QQ) {
        return QQ.values.map((QQ => this._f.toString(QQ))).join(" ")
      }
    }
    let Rk = (() => {
        let QQ, FQ, wQ, LQ, qQ, oQ = [TD({
            ns: Dk,
            name: "model"
          })],
          DQ = [],
          kQ = [],
          vQ = [],
          mQ = [],
          uQ = [],
          HQ = [],
          bQ = [];
        FQ = class {
          constructor() {
            this.unit = (0, WQ.l)(this, kQ, vk.millimeter), this.requiredextensions = ((0, WQ.l)(this, vQ), (0, WQ.l)(this, mQ, void 0)), this.recommendedextensions = ((0, WQ.l)(this, uQ), (0, WQ.l)(this, HQ, void 0)), this.metadata = (0, WQ.l)(this, bQ)
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfModel"), (() => {
          const YQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wQ = [zD({
            name: "unit"
          })], LQ = [zD({
            name: "requiredextensions"
          })], qQ = [zD({
            name: "recommendedextensions"
          })], (0, WQ.i)(null, null, wQ, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "unit" in QQ,
              get: QQ => QQ.unit,
              set: (QQ, FQ) => {
                QQ.unit = FQ
              }
            },
            metadata: YQ
          }, kQ, vQ), (0, WQ.i)(null, null, LQ, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: QQ => "requiredextensions" in QQ,
              get: QQ => QQ.requiredextensions,
              set: (QQ, FQ) => {
                QQ.requiredextensions = FQ
              }
            },
            metadata: YQ
          }, mQ, uQ), (0, WQ.i)(null, null, qQ, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: QQ => "recommendedextensions" in QQ,
              get: QQ => QQ.recommendedextensions,
              set: (QQ, FQ) => {
                QQ.recommendedextensions = FQ
              }
            },
            metadata: YQ
          }, HQ, bQ), (0, WQ.i)(null, QQ = {
            value: FQ
          }, oQ, {
            kind: "class",
            name: FQ.name,
            metadata: YQ
          }, null, DQ), FQ = QQ.value, YQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YQ
          })
        })(), FQ.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, WQ.l)(FQ, DQ), FQ
      })(),
      Ok = (() => {
        let QQ, FQ, wQ, LQ, qQ, oQ = [TD({
            ns: Dk,
            name: "meta"
          })],
          DQ = [],
          kQ = [],
          vQ = [],
          mQ = [],
          uQ = [],
          HQ = [],
          bQ = [];
        FQ = class {
          constructor(QQ, FQ, wQ, LQ) {
            this.name = (0, WQ.l)(this, kQ, void 0), this.preserve = ((0, WQ.l)(this, vQ), (0, WQ.l)(this, mQ, void 0)), this.type = ((0, WQ.l)(this, uQ), (0, WQ.l)(this, HQ, void 0)), this.value = (0, WQ.l)(this, bQ), this.name = QQ, this.value = FQ, this.preserve = wQ, this.type = LQ
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfMeta"), (() => {
          const YQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wQ = [zD({
            name: "name"
          })], LQ = [zD({
            name: "preserve"
          })], qQ = [zD({
            name: "type"
          })], (0, WQ.i)(null, null, wQ, {
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
            metadata: YQ
          }, kQ, vQ), (0, WQ.i)(null, null, LQ, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: QQ => "preserve" in QQ,
              get: QQ => QQ.preserve,
              set: (QQ, FQ) => {
                QQ.preserve = FQ
              }
            },
            metadata: YQ
          }, mQ, uQ), (0, WQ.i)(null, null, qQ, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: QQ => "type" in QQ,
              get: QQ => QQ.type,
              set: (QQ, FQ) => {
                QQ.type = FQ
              }
            },
            metadata: YQ
          }, HQ, bQ), (0, WQ.i)(null, QQ = {
            value: FQ
          }, oQ, {
            kind: "class",
            name: FQ.name,
            metadata: YQ
          }, null, DQ), FQ = QQ.value, YQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YQ
          }), (0, WQ.l)(FQ, DQ)
        })(), FQ
      })(),
      sk = (() => {
        let QQ, FQ, wQ = [TD({
            ns: Dk,
            name: "metadatagroup"
          })],
          LQ = [];
        FQ = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfMetadataGroup"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, WQ.i)(null, QQ = {
            value: FQ
          }, wQ, {
            kind: "class",
            name: FQ.name,
            metadata: qQ
          }, null, LQ), FQ = QQ.value, qQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, WQ.l)(FQ, LQ)
        })(), FQ
      })(),
      rk = (() => {
        let QQ, FQ, wQ = [TD({
            ns: Dk,
            name: "resources"
          })],
          LQ = [];
        FQ = class {
          constructor() {
            this.object = []
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfResources"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, WQ.i)(null, QQ = {
            value: FQ
          }, wQ, {
            kind: "class",
            name: FQ.name,
            metadata: qQ
          }, null, LQ), FQ = QQ.value, qQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, WQ.l)(FQ, LQ)
        })(), FQ
      })(),
      Ik = (() => {
        let QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ = [TD({
            ns: Dk,
            name: "object"
          })],
          uQ = [],
          HQ = [],
          bQ = [],
          YQ = [],
          xQ = [],
          AQ = [],
          tQ = [],
          eQ = [],
          MQ = [],
          GQ = [],
          pQ = [],
          cQ = [],
          CQ = [],
          SQ = [],
          iQ = [];
        FQ = class {
          constructor(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mk.model;
            this.id = (0, WQ.l)(this, HQ, void 0), this.type = ((0, WQ.l)(this, bQ), (0, WQ.l)(this, YQ, void 0)), this.thumbnail = ((0, WQ.l)(this, xQ), (0, WQ.l)(this, AQ, void 0)), this.partnumber = ((0, WQ.l)(this, tQ), (0, WQ.l)(this, eQ, void 0)), this.name = ((0, WQ.l)(this, MQ), (0, WQ.l)(this, GQ, void 0)), this.pid = ((0, WQ.l)(this, pQ), (0, WQ.l)(this, cQ, void 0)), this.pindex = ((0, WQ.l)(this, CQ), (0, WQ.l)(this, SQ, void 0)), this.metadatagroup = (0, WQ.l)(this, iQ), this.id = QQ, this.type = FQ
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfObject"), (() => {
          const RQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wQ = [zD({
            name: "id"
          })], LQ = [zD({
            name: "type"
          })], qQ = [zD({
            name: "thumbnail"
          })], oQ = [zD({
            name: "partnumber"
          })], DQ = [zD({
            name: "name"
          })], kQ = [zD({
            name: "pid"
          })], vQ = [zD({
            name: "pindex"
          })], (0, WQ.i)(null, null, wQ, {
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
            metadata: RQ
          }, HQ, bQ), (0, WQ.i)(null, null, LQ, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: QQ => "type" in QQ,
              get: QQ => QQ.type,
              set: (QQ, FQ) => {
                QQ.type = FQ
              }
            },
            metadata: RQ
          }, YQ, xQ), (0, WQ.i)(null, null, qQ, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thumbnail" in QQ,
              get: QQ => QQ.thumbnail,
              set: (QQ, FQ) => {
                QQ.thumbnail = FQ
              }
            },
            metadata: RQ
          }, AQ, tQ), (0, WQ.i)(null, null, oQ, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: QQ => "partnumber" in QQ,
              get: QQ => QQ.partnumber,
              set: (QQ, FQ) => {
                QQ.partnumber = FQ
              }
            },
            metadata: RQ
          }, eQ, MQ), (0, WQ.i)(null, null, DQ, {
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
            metadata: RQ
          }, GQ, pQ), (0, WQ.i)(null, null, kQ, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pid" in QQ,
              get: QQ => QQ.pid,
              set: (QQ, FQ) => {
                QQ.pid = FQ
              }
            },
            metadata: RQ
          }, cQ, CQ), (0, WQ.i)(null, null, vQ, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pindex" in QQ,
              get: QQ => QQ.pindex,
              set: (QQ, FQ) => {
                QQ.pindex = FQ
              }
            },
            metadata: RQ
          }, SQ, iQ), (0, WQ.i)(null, QQ = {
            value: FQ
          }, mQ, {
            kind: "class",
            name: FQ.name,
            metadata: RQ
          }, null, uQ), FQ = QQ.value, RQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RQ
          }), (0, WQ.l)(FQ, uQ)
        })(), FQ
      })(),
      Uk = (() => {
        let QQ, FQ, wQ = [TD({
            ns: Dk,
            name: "mesh"
          })],
          LQ = [];
        FQ = class {
          constructor(QQ, FQ) {
            this.vertices = QQ ?? new Nk, this.triangles = FQ ?? new Kk
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfMesh"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, WQ.i)(null, QQ = {
            value: FQ
          }, wQ, {
            kind: "class",
            name: FQ.name,
            metadata: qQ
          }, null, LQ), FQ = QQ.value, qQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, WQ.l)(FQ, LQ)
        })(), FQ
      })(),
      Nk = (() => {
        let QQ, FQ, wQ = [TD({
            ns: Dk,
            name: "vertices"
          })],
          LQ = [];
        FQ = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfVertices"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, WQ.i)(null, QQ = {
            value: FQ
          }, wQ, {
            kind: "class",
            name: FQ.name,
            metadata: qQ
          }, null, LQ), FQ = QQ.value, qQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, WQ.l)(FQ, LQ)
        })(), FQ
      })(),
      Tk = (() => {
        let QQ, FQ, wQ, LQ, qQ, oQ = [TD({
            ns: Dk,
            name: "vertex"
          })],
          DQ = [],
          kQ = [],
          vQ = [],
          mQ = [],
          uQ = [],
          HQ = [],
          bQ = [];
        FQ = class {
          constructor() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, WQ.l)(this, kQ, void 0), this.y = ((0, WQ.l)(this, vQ), (0, WQ.l)(this, mQ, void 0)), this.z = ((0, WQ.l)(this, uQ), (0, WQ.l)(this, HQ, void 0)), (0, WQ.l)(this, bQ), this.x = QQ, this.y = FQ, this.z = wQ
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfVertex"), (() => {
          const YQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wQ = [zD({
            name: "x"
          })], LQ = [zD({
            name: "y"
          })], qQ = [zD({
            name: "z"
          })], (0, WQ.i)(null, null, wQ, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: QQ => "x" in QQ,
              get: QQ => QQ.x,
              set: (QQ, FQ) => {
                QQ.x = FQ
              }
            },
            metadata: YQ
          }, kQ, vQ), (0, WQ.i)(null, null, LQ, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: QQ => "y" in QQ,
              get: QQ => QQ.y,
              set: (QQ, FQ) => {
                QQ.y = FQ
              }
            },
            metadata: YQ
          }, mQ, uQ), (0, WQ.i)(null, null, qQ, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: QQ => "z" in QQ,
              get: QQ => QQ.z,
              set: (QQ, FQ) => {
                QQ.z = FQ
              }
            },
            metadata: YQ
          }, HQ, bQ), (0, WQ.i)(null, QQ = {
            value: FQ
          }, oQ, {
            kind: "class",
            name: FQ.name,
            metadata: YQ
          }, null, DQ), FQ = QQ.value, YQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YQ
          }), (0, WQ.l)(FQ, DQ)
        })(), FQ
      })(),
      Kk = (() => {
        let QQ, FQ, wQ = [TD({
            ns: Dk,
            name: "triangles"
          })],
          LQ = [];
        FQ = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfTriangles"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, WQ.i)(null, QQ = {
            value: FQ
          }, wQ, {
            kind: "class",
            name: FQ.name,
            metadata: qQ
          }, null, LQ), FQ = QQ.value, qQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, WQ.l)(FQ, LQ)
        })(), FQ
      })(),
      zk = (() => {
        let QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ = [TD({
            ns: Dk,
            name: "triangle"
          })],
          uQ = [],
          HQ = [],
          bQ = [],
          YQ = [],
          xQ = [],
          AQ = [],
          tQ = [],
          eQ = [],
          MQ = [],
          GQ = [],
          pQ = [],
          cQ = [],
          CQ = [],
          SQ = [],
          iQ = [];
        FQ = class {
          constructor(QQ, FQ, wQ) {
            this.v1 = (0, WQ.l)(this, HQ, void 0), this.v2 = ((0, WQ.l)(this, bQ), (0, WQ.l)(this, YQ, void 0)), this.v3 = ((0, WQ.l)(this, xQ), (0, WQ.l)(this, AQ, void 0)), this.p1 = ((0, WQ.l)(this, tQ), (0, WQ.l)(this, eQ, void 0)), this.p2 = ((0, WQ.l)(this, MQ), (0, WQ.l)(this, GQ, void 0)), this.p3 = ((0, WQ.l)(this, pQ), (0, WQ.l)(this, cQ, void 0)), this.pid = ((0, WQ.l)(this, CQ), (0, WQ.l)(this, SQ, void 0)), (0, WQ.l)(this, iQ), this.v1 = QQ, this.v2 = FQ, this.v3 = wQ
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfTriangle"), (() => {
          const RQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wQ = [zD({
            name: "v1"
          })], LQ = [zD({
            name: "v2"
          })], qQ = [zD({
            name: "v3"
          })], oQ = [zD({
            name: "p1"
          })], DQ = [zD({
            name: "p2"
          })], kQ = [zD({
            name: "p3"
          })], vQ = [zD({
            name: "pid"
          })], (0, WQ.i)(null, null, wQ, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: QQ => "v1" in QQ,
              get: QQ => QQ.v1,
              set: (QQ, FQ) => {
                QQ.v1 = FQ
              }
            },
            metadata: RQ
          }, HQ, bQ), (0, WQ.i)(null, null, LQ, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: QQ => "v2" in QQ,
              get: QQ => QQ.v2,
              set: (QQ, FQ) => {
                QQ.v2 = FQ
              }
            },
            metadata: RQ
          }, YQ, xQ), (0, WQ.i)(null, null, qQ, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: QQ => "v3" in QQ,
              get: QQ => QQ.v3,
              set: (QQ, FQ) => {
                QQ.v3 = FQ
              }
            },
            metadata: RQ
          }, AQ, tQ), (0, WQ.i)(null, null, oQ, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: QQ => "p1" in QQ,
              get: QQ => QQ.p1,
              set: (QQ, FQ) => {
                QQ.p1 = FQ
              }
            },
            metadata: RQ
          }, eQ, MQ), (0, WQ.i)(null, null, DQ, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: QQ => "p2" in QQ,
              get: QQ => QQ.p2,
              set: (QQ, FQ) => {
                QQ.p2 = FQ
              }
            },
            metadata: RQ
          }, GQ, pQ), (0, WQ.i)(null, null, kQ, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: QQ => "p3" in QQ,
              get: QQ => QQ.p3,
              set: (QQ, FQ) => {
                QQ.p3 = FQ
              }
            },
            metadata: RQ
          }, cQ, CQ), (0, WQ.i)(null, null, vQ, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pid" in QQ,
              get: QQ => QQ.pid,
              set: (QQ, FQ) => {
                QQ.pid = FQ
              }
            },
            metadata: RQ
          }, SQ, iQ), (0, WQ.i)(null, QQ = {
            value: FQ
          }, mQ, {
            kind: "class",
            name: FQ.name,
            metadata: RQ
          }, null, uQ), FQ = QQ.value, RQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RQ
          }), (0, WQ.l)(FQ, uQ)
        })(), FQ
      })(),
      lk = (() => {
        let QQ, FQ, wQ = [TD({
            ns: Dk,
            name: "components"
          })],
          LQ = [];
        FQ = class {
          constructor() {
            this.component = []
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfComponents"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, WQ.i)(null, QQ = {
            value: FQ
          }, wQ, {
            kind: "class",
            name: FQ.name,
            metadata: qQ
          }, null, LQ), FQ = QQ.value, qQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, WQ.l)(FQ, LQ)
        })(), FQ
      })(),
      jk = (() => {
        let QQ, FQ, wQ, LQ, qQ = [TD({
            ns: Dk,
            name: "component"
          })],
          oQ = [],
          DQ = [],
          kQ = [],
          vQ = [],
          mQ = [];
        FQ = class {
          constructor(QQ, FQ) {
            this.objectid = (0, WQ.l)(this, DQ, void 0), this.transform = ((0, WQ.l)(this, kQ), (0, WQ.l)(this, vQ, void 0)), (0, WQ.l)(this, mQ), this.objectid = QQ, this.transform = FQ
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfComponent"), (() => {
          const uQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wQ = [zD({
            name: "objectid"
          })], LQ = [zD({
            name: "transform",
            formatter: Wk
          })], (0, WQ.i)(null, null, wQ, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: QQ => "objectid" in QQ,
              get: QQ => QQ.objectid,
              set: (QQ, FQ) => {
                QQ.objectid = FQ
              }
            },
            metadata: uQ
          }, DQ, kQ), (0, WQ.i)(null, null, LQ, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transform" in QQ,
              get: QQ => QQ.transform,
              set: (QQ, FQ) => {
                QQ.transform = FQ
              }
            },
            metadata: uQ
          }, vQ, mQ), (0, WQ.i)(null, QQ = {
            value: FQ
          }, qQ, {
            kind: "class",
            name: FQ.name,
            metadata: uQ
          }, null, oQ), FQ = QQ.value, uQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uQ
          }), (0, WQ.l)(FQ, oQ)
        })(), FQ
      })(),
      ak = (() => {
        let QQ, FQ, wQ, LQ = [TD({
            ns: Dk,
            name: "basematerials"
          })],
          qQ = [],
          oQ = [],
          DQ = [];
        FQ = class {
          constructor(QQ) {
            this.id = (0, WQ.l)(this, oQ, void 0), this.base = ((0, WQ.l)(this, DQ), []), this.id = QQ
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfBaseMaterials"), (() => {
          const kQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wQ = [zD({
            name: "id"
          })], (0, WQ.i)(null, null, wQ, {
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
            metadata: kQ
          }, oQ, DQ), (0, WQ.i)(null, QQ = {
            value: FQ
          }, LQ, {
            kind: "class",
            name: FQ.name,
            metadata: kQ
          }, null, qQ), FQ = QQ.value, kQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kQ
          }), (0, WQ.l)(FQ, qQ)
        })(), FQ
      })(),
      Xk = (() => {
        let QQ, FQ, wQ, LQ, qQ = [TD({
            ns: Dk,
            name: "base"
          })],
          oQ = [],
          DQ = [],
          kQ = [],
          vQ = [],
          mQ = [];
        FQ = class {
          constructor(QQ, FQ) {
            this.name = (0, WQ.l)(this, DQ, void 0), this.displaycolor = ((0, WQ.l)(this, kQ), (0, WQ.l)(this, vQ, void 0)), (0, WQ.l)(this, mQ), this.name = QQ, this.displaycolor = FQ
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfBase"), (() => {
          const uQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wQ = [zD({
            name: "name"
          })], LQ = [zD({
            name: "displaycolor"
          })], (0, WQ.i)(null, null, wQ, {
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
            metadata: uQ
          }, DQ, kQ), (0, WQ.i)(null, null, LQ, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "displaycolor" in QQ,
              get: QQ => QQ.displaycolor,
              set: (QQ, FQ) => {
                QQ.displaycolor = FQ
              }
            },
            metadata: uQ
          }, vQ, mQ), (0, WQ.i)(null, QQ = {
            value: FQ
          }, qQ, {
            kind: "class",
            name: FQ.name,
            metadata: uQ
          }, null, oQ), FQ = QQ.value, uQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uQ
          }), (0, WQ.l)(FQ, oQ)
        })(), FQ
      })(),
      fk = (() => {
        let QQ, FQ, wQ = [TD({
            ns: Dk,
            name: "build"
          })],
          LQ = [];
        FQ = class {
          constructor() {
            this.item = []
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfBuild"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, WQ.i)(null, QQ = {
            value: FQ
          }, wQ, {
            kind: "class",
            name: FQ.name,
            metadata: qQ
          }, null, LQ), FQ = QQ.value, qQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, WQ.l)(FQ, LQ)
        })(), FQ
      })(),
      Vk = (() => {
        let QQ, FQ, wQ, LQ, qQ, oQ = [TD({
            ns: Dk,
            name: "item"
          })],
          DQ = [],
          kQ = [],
          vQ = [],
          mQ = [],
          uQ = [],
          HQ = [],
          bQ = [];
        FQ = class {
          constructor(QQ, FQ, wQ) {
            this.objectid = (0, WQ.l)(this, kQ, void 0), this.transform = ((0, WQ.l)(this, vQ), (0, WQ.l)(this, mQ, void 0)), this.partnumber = ((0, WQ.l)(this, uQ), (0, WQ.l)(this, HQ, void 0)), this.metadatagroup = (0, WQ.l)(this, bQ), this.objectid = QQ, this.transform = FQ, this.partnumber = wQ
          }
        };
        return (0, WQ.m)(FQ, "ThreeMfItem"), (() => {
          const YQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wQ = [zD({
            name: "objectid"
          })], LQ = [zD({
            name: "transform",
            formatter: Wk
          })], qQ = [zD({
            name: "partnumber"
          })], (0, WQ.i)(null, null, wQ, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: QQ => "objectid" in QQ,
              get: QQ => QQ.objectid,
              set: (QQ, FQ) => {
                QQ.objectid = FQ
              }
            },
            metadata: YQ
          }, kQ, vQ), (0, WQ.i)(null, null, LQ, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transform" in QQ,
              get: QQ => QQ.transform,
              set: (QQ, FQ) => {
                QQ.transform = FQ
              }
            },
            metadata: YQ
          }, mQ, uQ), (0, WQ.i)(null, null, qQ, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: QQ => "partnumber" in QQ,
              get: QQ => QQ.partnumber,
              set: (QQ, FQ) => {
                QQ.partnumber = FQ
              }
            },
            metadata: YQ
          }, HQ, bQ), (0, WQ.i)(null, QQ = {
            value: FQ
          }, oQ, {
            kind: "class",
            name: FQ.name,
            metadata: YQ
          }, null, DQ), FQ = QQ.value, YQ && Object.defineProperty(FQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YQ
          }), (0, WQ.l)(FQ, DQ)
        })(), FQ
      })();
    class hk {
      constructor(QQ, FQ) {
        this._object = new Ik(QQ, FQ)
      }
      withName(QQ) {
        return this._object.name = QQ, this
      }
      withThumbnail(QQ) {
        return this._object.thumbnail = QQ, this
      }
      withProperty(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = QQ, this._object.id = FQ, this
      }
      build() {
        return this._object
      }
      reset(QQ, FQ) {
        this._object = new Ik(QQ, FQ)
      }
    }
    class Jk extends hk {
      constructor(QQ) {
        super(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mk.model), this._object.content = new lk
      }
      withComponent(QQ, FQ) {
        return this._object.content.component.push(new jk(QQ, FQ)), this
      }
    }
    class Ek extends hk {
      constructor(QQ) {
        super(QQ, mk.model)
      }
      withPostProcessHandlers(QQ, FQ) {
        return this._vh = QQ, this._th = FQ, this
      }
      withData(QQ) {
        return this._object.content = this._buildMesh(QQ), this
      }
      withMaterial(QQ, FQ) {
        return this._object.pid = QQ, this._object.pindex = FQ, this
      }
      _buildMesh(QQ) {
        const FQ = this._buildVertices(QQ.positions),
          wQ = this._buildTriangle(QQ.indices);
        return new Uk(FQ, wQ)
      }
      _buildVertices(QQ) {
        const FQ = new Nk;
        if (QQ)
          for (let wQ = 0; wQ < QQ.length;) {
            const LQ = QQ[wQ++],
              qQ = QQ[wQ++],
              oQ = QQ[wQ++];
            let DQ = new Tk(LQ, qQ, oQ);
            this._vh && (DQ = this._vh(DQ)), FQ.vertex.push(DQ)
          }
        return FQ
      }
      _buildTriangle(QQ) {
        const FQ = new Kk;
        if (QQ)
          for (let wQ = 0; wQ < QQ.length;) {
            const LQ = QQ[wQ++],
              qQ = QQ[wQ++],
              oQ = QQ[wQ++];
            let DQ = new zk(LQ, qQ, oQ);
            this._th && (DQ = this._th(DQ)), FQ.triangle.push(DQ)
          }
        return FQ
      }
    }
    class nk {
      constructor(QQ) {
        this._m = new ak(QQ)
      }
      withColor(QQ, FQ) {
        this._m.base = this._m.base ?? [];
        let wQ = this._m.base.find((FQ => FQ.name.toLowerCase() === QQ.toLowerCase()));
        return wQ ? (wQ.displaycolor = this._rgbaToHex(FQ), this) : (wQ = new Xk(QQ, this._rgbaToHex(FQ)), this._m.base.push(wQ), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(QQ) {
        const FQ = QQ => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(QQ, 1 / 2.2)))),
          wQ = FQ(QQ.r).toString(16).padStart(2, "0").toUpperCase(),
          LQ = FQ(QQ.g).toString(16).padStart(2, "0").toUpperCase(),
          qQ = FQ(QQ.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof QQ.a) {
          return `#${wQ}${LQ}${qQ}${Math.round(Math.min(255,Math.max(0,255*QQ.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${wQ}${LQ}${qQ}`
      }
    }
    class gk {
      constructor() {
        this._model = new Rk, this._objects = new Map
      }
      withMetaData(QQ, FQ, wQ, LQ) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Ok(QQ, FQ, wQ, LQ)), this
      }
      withMaterial(QQ) {
        return QQ instanceof nk && (QQ = QQ.build()), QQ && (this._model.resources = this._model.resources ?? new rk, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(QQ)), this
      }
      withMesh(QQ) {
        return QQ instanceof Ek && (QQ = QQ.build()), this._model.resources = this._model.resources ?? new rk, this._model.resources.object.push(QQ), this
      }
      withComponents(QQ) {
        return QQ instanceof Jk && (QQ = QQ.build()), this._model.resources = this._model.resources ?? new rk, this._model.resources.object.push(QQ), this
      }
      withBuild(QQ, FQ, wQ) {
        return this._model.build = this._model.build ?? new fk, this._model.build.item?.push(new Vk(QQ, FQ, wQ)), this
      }
      withUnit(QQ) {
        return this._model.unit = QQ, this
      }
      reset() {
        return this._model = new Rk, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    gk.KnownMetaSet = new Set(Rk.KnownMeta.map((QQ => QQ.toLowerCase())));
    class Pk {
      withContentType(QQ) {
        this._cts || (this._cts = new Gk);
        const FQ = this._cts.items;
        return FQ.some((FQ => FQ.ext === QQ.ext && FQ.ct === QQ.ct)) || FQ.push(QQ), this
      }
      withRelationship(QQ) {
        this._rs || (this._rs = new ck);
        const FQ = this._rs.items;
        return FQ.some((FQ => FQ.id === QQ.id)) || FQ.push(QQ), this.withContentType(new pk("rels", bk.Relationships)), this
      }
      withModel(QQ) {
        return QQ instanceof gk && (QQ = QQ.build()), this._m = QQ, this.withContentType(new pk("model", bk.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const QQ = `${xk}${Ak}`;
        if (!this._rs) {
          const FQ = `/${QQ}`;
          this.withRelationship(new Ck("rel0", Mk.ThreeDimModel, FQ))
        }
        return new Sk(this._cts, this._rs, this._m)
      }
    }
    class Zk {
      constructor(QQ) {
        this._o = QQ
      }
      get options() {
        return this._o
      }
      async serializeAsync(QQ) {
        const FQ = await this.ensureZipLibReadyAsync();
        if (!FQ) return;
        const wQ = FQ.Zip,
          LQ = FQ.ZipDeflate;
        if (!wQ || !LQ) throw new Error("fflate Zip / ZipDeflate not available");
        const qQ = function(QQ, FQ, wQ) {
          const qQ = new LQ(FQ, {
            level: 6
          });
          QQ.add(qQ);
          const oQ = function(QQ) {
              return {
                push: (FQ, wQ) => QQ.push(FQ, wQ)
              }
            }(qQ),
            DQ = new qk(oQ),
            kQ = new wk(DQ).dec("1.0", "UTF-8");
          new dD(kQ).serialize(wQ), DQ.finish()
        };
        for (var oQ = arguments.length, DQ = new Array(oQ > 1 ? oQ - 1 : 0), kQ = 1; kQ < oQ; kQ++) DQ[kQ - 1] = arguments[kQ];
        const vQ = this.toDocument(...DQ);
        if (!vQ) return;
        const mQ = new wQ(QQ);
        qQ(mQ, ek, vQ.contentTypes), qQ(mQ, `${Yk}${tk}`, vQ.relationships), qQ(mQ, `${xk}${Ak}`, vQ.model), mQ.end()
      }
      toDocument() {
        const QQ = (new gk).withUnit(this._o?.unit ?? vk.millimeter);
        if (this.options.metadata)
          for (const qQ in this.options.metadata) QQ.withMetaData(qQ, this.options.metadata[qQ]);
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        return (new Pk).withModel(this.toModel(QQ, ...wQ)).build()
      }
    }
    class yk {
      static async SerializeToMemoryAsync(QQ) {
        const FQ = new Array;
        let wQ = 0;
        for (var LQ = arguments.length, qQ = new Array(LQ > 1 ? LQ - 1 : 0), oQ = 1; oQ < LQ; oQ++) qQ[oQ - 1] = arguments[oQ];
        if (await QQ.serializeAsync((function(QQ, LQ, qQ) {
            FQ.push(LQ), wQ += LQ.length
          }), ...qQ), !wQ) return;
        const DQ = new Uint8Array(wQ);
        let kQ = 0;
        for (const vQ of FQ) DQ.set(vQ, kQ), kQ += vQ.length;
        return DQ
      }
    }
    class Bk {}
    Bk.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class dk {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = QQ, this._to = FQ, this._step = wQ, this._i = QQ
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const QQ = this._i;
        return this._i += this._step, QQ
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class Qv extends Zk {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Qv.DefaultOptions,
          ...QQ
        })
      }
      toModel(QQ) {
        for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
        wQ = wQ.filter((QQ => QQ instanceof uL.c || QQ instanceof YQ.e));
        const qQ = new dk,
          oQ = QQ,
          DQ = new Map,
          kQ = this.options.exportInstances ? [] : null;
        for (let vQ = 0; vQ < wQ.length; vQ++) {
          const QQ = wQ[vQ];
          if (QQ instanceof YQ.e) {
            kQ?.push(QQ);
            continue
          }
          const FQ = QQ.name || `mesh${vQ}`,
            LQ = QQ.getWorldMatrix(),
            mQ = this._handleBabylonTo3mfMatrixTransformToRef(LQ, ik.Zero()),
            uQ = QQ.lC;
          if (void 0 === uQ) continue;
          const HQ = 1 == uQ.length;
          for (let wQ = 0; wQ < uQ.length; wQ++) {
            const LQ = uQ[wQ],
              kQ = this._extractSubMesh(QQ, LQ);
            if (kQ) {
              const QQ = HQ ? `${FQ}` : `${FQ}_${wQ}`,
                vQ = new Ek(qQ.next()).withData(kQ).withName(QQ).build();
              oQ.withMesh(vQ), oQ.withBuild(vQ.id, mQ), DQ.set(LQ, vQ)
            }
          }
        }
        if (kQ && kQ.length) {
          const QQ = this._groupBy(kQ, (QQ => QQ.cqQ));
          for (const [FQ, wQ] of Array.from(QQ.entries()))
            if (wQ && wQ.length)
              for (let QQ = 0; QQ < wQ.length; QQ++) {
                const LQ = wQ[QQ].getWorldMatrix(),
                  qQ = FQ.lC;
                for (let QQ = 0; QQ < qQ.length; QQ++) {
                  const FQ = qQ[QQ],
                    wQ = DQ.get(FQ);
                  wQ && oQ.withBuild(wQ.id, this._handleBabylonTo3mfMatrixTransformToRef(LQ, ik.Zero()))
                }
              }
        }
        return oQ.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const QQ = globalThis;
          return QQ.fflate || await qQ.Tools.LoadScriptAsync(Bk.FFLATEUrl), QQ.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(QQ, FQ) {
        const wQ = QQ.OLQ();
        if (!wQ) return;
        const LQ = QQ.getVerticesData(Qv._PositionKind);
        if (!LQ) return;
        if (0 == FQ.indexStart && FQ.indexCount == wQ.length) return {
          positions: LQ,
          indices: wQ
        };
        const qQ = FQ.indexStart,
          oQ = new Map,
          DQ = [],
          kQ = new Uint32Array(FQ.indexCount);
        for (let vQ = 0; vQ < FQ.indexCount; vQ++) {
          const QQ = wQ[qQ + vQ];
          let FQ = oQ.get(QQ);
          if (void 0 === FQ) {
            FQ = oQ.size, oQ.set(QQ, FQ);
            const wQ = 3 * QQ;
            DQ.push(LQ[wQ], LQ[wQ + 1], LQ[wQ + 2])
          }
          kQ[vQ] = FQ
        }
        return {
          positions: new Float32Array(DQ),
          indices: kQ
        }
      }
      _groupBy(QQ, FQ) {
        const wQ = new Map;
        for (const LQ of QQ) {
          const QQ = FQ(LQ),
            qQ = wQ.get(QQ);
          qQ ? qQ.push(LQ) : wQ.set(QQ, [LQ])
        }
        return wQ
      }
      _handleBabylonTo3mfMatrixTransformToRef(QQ, FQ) {
        const wQ = QQ.multiplyToRef(Qv._R_BJS_TO_3MF, jQ.c.Zero()).m;
        return FQ.values = [wQ[0], wQ[1], wQ[2], wQ[4], wQ[5], wQ[6], wQ[8], wQ[9], wQ[10], wQ[12], wQ[13], wQ[14]], FQ
      }
    }
    Qv.DefaultOptions = {
      unit: vk.meter,
      exportInstances: !1
    }, Qv._PositionKind = "position", Qv._R_BJS_TO_3MF = jQ.c.RotationX(Math.PI / 2).multiply(jQ.c.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);