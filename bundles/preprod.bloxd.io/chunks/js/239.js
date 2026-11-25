export const id = 239;
export const ids = [239, 245];
export const modules = {
  42083: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(42014),
      qQ = XQ(40253);
    let TQ = !1;

    function zQ() {
      TQ || (TQ = !0, qQ.c.prototype._sphericalPolynomialTargetSize = 0, qQ.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(qQ.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = wQ.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((QQ => {
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
  37539: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      Color3: () => wQ.b,
      d: () => wQ.d
    });
    var wQ = XQ(37546);
    (0, wQ.h)()
  },
  38041: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = XQ(38047);
    class qQ {
      static GetPlanes(QQ) {
        const WQ = [];
        for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
        return qQ.GetPlanesToRef(QQ, WQ), WQ
      }
      static GetNearPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[2], WQ.normal.y = XQ[7] + XQ[6], WQ.normal.z = XQ[11] + XQ[10], WQ.d = XQ[15] + XQ[14], WQ.normalize()
      }
      static GetFarPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[2], WQ.normal.y = XQ[7] - XQ[6], WQ.normal.z = XQ[11] - XQ[10], WQ.d = XQ[15] - XQ[14], WQ.normalize()
      }
      static GetLeftPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[0], WQ.normal.y = XQ[7] + XQ[4], WQ.normal.z = XQ[11] + XQ[8], WQ.d = XQ[15] + XQ[12], WQ.normalize()
      }
      static GetRightPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[0], WQ.normal.y = XQ[7] - XQ[4], WQ.normal.z = XQ[11] - XQ[8], WQ.d = XQ[15] - XQ[12], WQ.normalize()
      }
      static GetTopPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[1], WQ.normal.y = XQ[7] - XQ[5], WQ.normal.z = XQ[11] - XQ[9], WQ.d = XQ[15] - XQ[13], WQ.normalize()
      }
      static GetBottomPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[1], WQ.normal.y = XQ[7] + XQ[5], WQ.normal.z = XQ[11] + XQ[9], WQ.d = XQ[15] + XQ[13], WQ.normalize()
      }
      static GetPlanesToRef(QQ, WQ) {
        qQ.GetNearPlaneToRef(QQ, WQ[0]), qQ.GetFarPlaneToRef(QQ, WQ[1]), qQ.GetLeftPlaneToRef(QQ, WQ[2]), qQ.GetRightPlaneToRef(QQ, WQ[3]), qQ.GetTopPlaneToRef(QQ, WQ[4]), qQ.GetBottomPlaneToRef(QQ, WQ[5])
      }
      static IsPointInFrustum(QQ, WQ) {
        for (let XQ = 0; XQ < 6; XQ++)
          if (WQ[XQ].dotCoordinate(QQ) < 0) return !1;
        return !0
      }
    }
  },
  38047: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ
    });
    var wQ = XQ(37370);
    class qQ {
      constructor(QQ, WQ, XQ, qQ) {
        this.normal = new wQ.s(QQ, WQ, XQ), this.d = qQ
      }
      awQ() {
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
        let WQ = 0;
        return 0 !== QQ && (WQ = 1 / QQ), this.normal.x *= WQ, this.normal.y *= WQ, this.normal.z *= WQ, this.d *= WQ, this
      }
      transform(QQ) {
        const WQ = qQ._TmpMatrix;
        QQ.invertToRef(WQ);
        const XQ = WQ.m,
          wQ = this.normal.x,
          TQ = this.normal.y,
          zQ = this.normal.z,
          sQ = this.d,
          FQ = wQ * XQ[0] + TQ * XQ[1] + zQ * XQ[2] + sQ * XQ[3],
          PQ = wQ * XQ[4] + TQ * XQ[5] + zQ * XQ[6] + sQ * XQ[7],
          gQ = wQ * XQ[8] + TQ * XQ[9] + zQ * XQ[10] + sQ * XQ[11],
          JQ = wQ * XQ[12] + TQ * XQ[13] + zQ * XQ[14] + sQ * XQ[15];
        return new qQ(FQ, PQ, gQ, JQ)
      }
      dotCoordinate(QQ) {
        return this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z + this.d
      }
      copyFromPoints(QQ, WQ, XQ) {
        const wQ = WQ.x - QQ.x,
          qQ = WQ.y - QQ.y,
          TQ = WQ.z - QQ.z,
          zQ = XQ.x - QQ.x,
          sQ = XQ.y - QQ.y,
          FQ = XQ.z - QQ.z,
          PQ = qQ * FQ - TQ * sQ,
          gQ = TQ * zQ - wQ * FQ,
          JQ = wQ * sQ - qQ * zQ,
          rQ = Math.sqrt(PQ * PQ + gQ * gQ + JQ * JQ);
        let IQ;
        return IQ = 0 !== rQ ? 1 / rQ : 0, this.normal.x = PQ * IQ, this.normal.y = gQ * IQ, this.normal.z = JQ * IQ, this.d = -(this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z), this
      }
      isFrontFacingTo(QQ, WQ) {
        return wQ.s.Dot(this.normal, QQ) <= WQ
      }
      signedDistanceTo(QQ) {
        return wQ.s.Dot(QQ, this.normal) + this.d
      }
      static FromArray(QQ) {
        return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
      }
      static FromPoints(QQ, WQ, XQ) {
        const wQ = new qQ(0, 0, 0, 0);
        return wQ.copyFromPoints(QQ, WQ, XQ), wQ
      }
      static FromPositionAndNormal(QQ, WQ) {
        const XQ = new qQ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(QQ, WQ, XQ)
      }
      static FromPositionAndNormalToRef(QQ, WQ, XQ) {
        return XQ.normal.WH(WQ), XQ.normal.normalize(), XQ.d = -QQ.dot(XQ.normal), XQ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(QQ, WQ, XQ) {
        const qQ = -(WQ.x * QQ.x + WQ.y * QQ.y + WQ.z * QQ.z);
        return wQ.s.Dot(XQ, WQ) + qQ
      }
    }
    qQ._TmpMatrix = wQ.e.Identity()
  },
  37367: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      Matrix: () => wQ.e,
      Quaternion: () => wQ.h,
      RegisterMathVector: () => wQ.l,
      TmpVectors: () => wQ.m,
      Vector2: () => wQ.q,
      vj: () => wQ.s,
      Vector4: () => wQ.w
    });
    var wQ = XQ(37370);
    (0, wQ.l)()
  },
  38377: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.x = QQ, this.y = WQ, this.width = XQ, this.height = wQ
      }
      toGlobal(QQ, WQ) {
        return new wQ(this.x * QQ, this.y * WQ, this.width * QQ, this.height * WQ)
      }
      toGlobalToRef(QQ, WQ, XQ) {
        return XQ.x = this.x * QQ, XQ.y = this.y * WQ, XQ.width = this.width * QQ, XQ.height = this.height * WQ, this
      }
      clone() {
        return new wQ(this.x, this.y, this.width, this.height)
      }
    }
  },
  42014: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ
    });
    var wQ = XQ(37370),
      qQ = XQ(37404),
      TQ = XQ(40250),
      zQ = XQ(37374),
      sQ = XQ(37546);
    class FQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.name = QQ, this.worldAxisForNormal = WQ, this.worldAxisForFileX = XQ, this.worldAxisForFileY = wQ
      }
    }
    class PQ {
      static _NearestPow2Floor(QQ) {
        return QQ <= 1 ? 1 : 1 << Math.floor(Math.log2(QQ))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(QQ) {
        if (!QQ.isCube) return null;
        QQ.sE()?.Uj().flushFramebuffer();
        const WQ = QQ.getSize().width,
          XQ = QQ._sphericalPolynomialTargetSize,
          wQ = XQ > 0 ? this._NearestPow2Floor(XQ) : 0,
          qQ = !QQ.noMipmap && !0 === QQ._texture?.generateMipMaps,
          TQ = wQ > 0 && wQ < WQ && qQ,
          zQ = TQ ? Math.max(0, Math.round(Math.log2(WQ / wQ))) : 0,
          sQ = TQ ? Math.max(1, Math.floor(WQ / Math.pow(2, zQ))) : WQ,
          FQ = QQ.readPixels(0, zQ, void 0, !1),
          PQ = QQ.readPixels(1, zQ, void 0, !1);
        let gQ, JQ;
        QQ.isRenderTarget ? (gQ = QQ.readPixels(3, zQ, void 0, !1), JQ = QQ.readPixels(2, zQ, void 0, !1)) : (gQ = QQ.readPixels(2, zQ, void 0, !1), JQ = QQ.readPixels(3, zQ, void 0, !1));
        const rQ = QQ.readPixels(4, zQ, void 0, !1),
          IQ = QQ.readPixels(5, zQ, void 0, !1),
          jQ = QQ.gammaSpace,
          BQ = wQ > 0 && wQ < WQ && !TQ;
        return new Promise((QQ => {
          Promise.all([PQ, FQ, gQ, JQ, rQ, IQ]).then((XQ => {
            let [qQ, TQ, zQ, FQ, PQ, gQ] = XQ, JQ = sQ;
            if (BQ) {
              const QQ = 4;
              qQ = this._DownsampleFace(qQ, WQ, wQ, QQ), TQ = this._DownsampleFace(TQ, WQ, wQ, QQ), zQ = this._DownsampleFace(zQ, WQ, wQ, QQ), FQ = this._DownsampleFace(FQ, WQ, wQ, QQ), PQ = this._DownsampleFace(PQ, WQ, wQ, QQ), gQ = this._DownsampleFace(gQ, WQ, wQ, QQ), JQ = wQ
            }
            const rQ = {
              size: JQ,
              right: TQ,
              left: qQ,
              up: zQ,
              down: FQ,
              front: PQ,
              back: gQ,
              format: 5,
              type: qQ instanceof Float32Array ? 1 : 0,
              gammaSpace: jQ
            };
            QQ(this.ConvertCubeMapToSphericalPolynomial(rQ))
          }))
        }))
      }
      static _AreaElement(QQ, WQ) {
        return Math.atan2(QQ * WQ, Math.sqrt(QQ * QQ + WQ * WQ + 1))
      }
      static _DownsampleFace(QQ, WQ, XQ, wQ) {
        const qQ = QQ instanceof Float32Array ? QQ : Float32Array.from(QQ),
          TQ = XQ * XQ * wQ,
          zQ = new Float32Array(TQ),
          sQ = WQ / XQ,
          FQ = 1 / (sQ * sQ);
        for (let gQ = 0; gQ < XQ; gQ++) {
          const QQ = Math.floor(gQ * sQ),
            TQ = Math.floor((gQ + 1) * sQ);
          for (let PQ = 0; PQ < XQ; PQ++) {
            const JQ = Math.floor(PQ * sQ),
              rQ = Math.floor((PQ + 1) * sQ),
              IQ = (gQ * XQ + PQ) * wQ;
            for (let XQ = 0; XQ < wQ; XQ++) {
              let sQ = 0;
              for (let zQ = QQ; zQ < TQ; zQ++)
                for (let QQ = JQ; QQ < rQ; QQ++) sQ += qQ[(zQ * WQ + QQ) * wQ + XQ];
              zQ[IQ + XQ] = sQ * FQ
            }
          }
        }
        if (QQ instanceof Float32Array) return zQ;
        const PQ = new(0, QQ.constructor)(TQ);
        for (let gQ = 0; gQ < TQ; gQ++) PQ[gQ] = zQ[gQ] + .5 | 0;
        return PQ
      }
      static ConvertCubeMapToSphericalPolynomial(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const XQ = WQ > 0 ? this._NearestPow2Floor(WQ) : 0;
        if (XQ > 0 && QQ.size > XQ) {
          const WQ = 5 === QQ.format ? 4 : 3,
            wQ = ["right", "left", "up", "down", "front", "back"],
            qQ = {};
          for (const TQ of wQ) qQ[TQ] = this._DownsampleFace(QQ[TQ], QQ.size, XQ, WQ);
          QQ = {
            ...QQ,
            ...qQ,
            size: XQ
          }
        }
        const wQ = new TQ.b;
        let FQ = 0;
        const PQ = 2 / QQ.size,
          gQ = PQ,
          JQ = .5 * PQ,
          rQ = JQ - 1;
        for (let TQ = 0; TQ < 6; TQ++) {
          const WQ = this._FileFaces[TQ],
            XQ = QQ[WQ.name];
          let IQ = rQ;
          const jQ = 5 === QQ.format ? 4 : 3;
          for (let TQ = 0; TQ < QQ.size; TQ++) {
            let BQ = rQ;
            for (let gQ = 0; gQ < QQ.size; gQ++) {
              const rQ = WQ.worldAxisForFileX.scale(BQ).add(WQ.worldAxisForFileY.scale(IQ)).add(WQ.worldAxisForNormal);
              rQ.normalize();
              const yQ = this._AreaElement(BQ - JQ, IQ - JQ) - this._AreaElement(BQ - JQ, IQ + JQ) - this._AreaElement(BQ + JQ, IQ - JQ) + this._AreaElement(BQ + JQ, IQ + JQ);
              let VQ = XQ[TQ * QQ.size * jQ + gQ * jQ + 0],
                DQ = XQ[TQ * QQ.size * jQ + gQ * jQ + 1],
                pQ = XQ[TQ * QQ.size * jQ + gQ * jQ + 2];
              isNaN(VQ) && (VQ = 0), isNaN(DQ) && (DQ = 0), isNaN(pQ) && (pQ = 0), 0 === QQ.type && (VQ /= 255, DQ /= 255, pQ /= 255), QQ.gammaSpace && (VQ = Math.pow((0, qQ.Clamp)(VQ), zQ.h), DQ = Math.pow((0, qQ.Clamp)(DQ), zQ.h), pQ = Math.pow((0, qQ.Clamp)(pQ), zQ.h));
              const GQ = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const QQ = Math.max(VQ, DQ, pQ);
                if (QQ > GQ) {
                  const WQ = GQ / QQ;
                  VQ *= WQ, DQ *= WQ, pQ *= WQ
                }
              } else VQ = (0, qQ.Clamp)(VQ, 0, GQ), DQ = (0, qQ.Clamp)(DQ, 0, GQ), pQ = (0, qQ.Clamp)(pQ, 0, GQ);
              const UQ = new sQ.b(VQ, DQ, pQ);
              wQ.addLight(rQ, UQ, yQ), FQ += yQ, BQ += PQ
            }
            IQ += gQ
          }
        }
        const IQ = 6 * (4 * Math.PI) / 6 / FQ;
        return wQ.scaleInPlace(IQ), wQ.convertIncidentRadianceToIrradiance(), wQ.convertIrradianceToLambertianRadiance(), TQ.e.FromHarmonics(wQ)
      }
    }
    PQ._FileFaces = [new FQ("right", new wQ.s(1, 0, 0), new wQ.s(0, 0, -1), new wQ.s(0, -1, 0)), new FQ("left", new wQ.s(-1, 0, 0), new wQ.s(0, 0, 1), new wQ.s(0, -1, 0)), new FQ("up", new wQ.s(0, 1, 0), new wQ.s(1, 0, 0), new wQ.s(0, 0, 1)), new FQ("down", new wQ.s(0, -1, 0), new wQ.s(1, 0, 0), new wQ.s(0, 0, -1)), new FQ("front", new wQ.s(0, 0, 1), new wQ.s(1, 0, 0), new wQ.s(0, -1, 0)), new FQ("back", new wQ.s(0, 0, -1), new wQ.s(-1, 0, 0), new wQ.s(0, -1, 0))], PQ.MAX_HDRI_VALUE = 4096, PQ.PRESERVE_CLAMPED_COLORS = !1
  },
  41791: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.i,
      f: () => wQ.r
    });
    var wQ = XQ(40307);
    (0, wQ.w)()
  },
  38191: (QQ, WQ, XQ) => {
    function wQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const WQ = 16 * Math.random() | 0;
        return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
      }))
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  },
  42055: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(42041),
      qQ = XQ(42062);
    class TQ {
      static ExpandRGBDTexture(QQ) {
        const WQ = QQ._texture;
        if (!WQ || !QQ.isRGBD) return;
        const qQ = WQ.Uj(),
          TQ = qQ.getCaps(),
          zQ = WQ.isReady;
        let sQ = !1;
        TQ.textureHalfFloatRender && TQ.textureHalfFloatLinearFiltering ? (sQ = !0, WQ.type = 2) : TQ.textureFloatRender && TQ.textureFloatLinearFiltering && (sQ = !0, WQ.type = 1), sQ && (WQ.isReady = !1, WQ._isRGBD = !1, WQ.invertY = !1);
        const FQ = async () => {
          const TQ = qQ.isWebGPU,
            zQ = TQ ? 1 : 0;
          WQ.isReady = !1, TQ ? await XQ.e(351).then((() => XQ(61658))) : await XQ.e(333).then((() => XQ(61663)));
          const sQ = new wQ.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, qQ, !1, void 0, WQ.type, void 0, null, !1, void 0, zQ);
          sQ.externalTextureSamplerBinding = !0;
          const FQ = qQ.createRenderTargetTexture(WQ.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: WQ.samplingMode,
            type: WQ.type,
            format: 5
          });
          sQ.onEffectCreatedObservable.addOnce((XQ => {
            XQ.executeWhenCompiled((() => {
              sQ.onApply = QQ => {
                QQ._bindTexture("textureSampler", WQ), QQ.setFloat2("scale", 1, 1)
              }, QQ.sE()?.postProcessManager.directRender([sQ], FQ, !0), qQ.restoreDefaultFramebuffer(), qQ._releaseTexture(WQ), sQ && sQ.dispose(), FQ._swapAndDie(WQ), WQ.isReady = !0
            }))
          }))
        };
        sQ && (zQ ? FQ() : QQ.onLoadObservable.addOnce(FQ))
      }
      static async EncodeTextureToRGBD(QQ, WQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return WQ.Uj().isWebGPU ? await XQ.e(352).then((() => XQ(61677))) : await XQ.e(334).then((() => XQ(61673))), await (0, qQ.b)("rgbdEncode", QQ, WQ, wQ, 1, 5)
      }
    }
  },
  61523: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      AsyncLoop: () => wQ.c,
      RegisterTools: () => wQ.f,
      Tools: () => wQ.g,
      className: () => wQ.k
    });
    var wQ = XQ(40357);
    (0, wQ.f)()
  },
  42100: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    class wQ {
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
        for (const WQ of this._workerInfos)
          if (WQ.idle) return this._execute(WQ, QQ), !0;
        return !1
      }
      _execute(QQ, WQ) {
        QQ.idle = !1, QQ.workerPromise.then((XQ => {
          WQ(XQ, (() => {
            const WQ = this._pendingActions.shift();
            WQ ? this._execute(QQ, WQ) : QQ.idle = !0
          }))
        }))
      }
    }
    class qQ extends wQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.DefaultOptions;
        super([]), this._maxWorkers = QQ, this._createWorkerAsync = WQ, this._options = XQ
      }
      push(QQ) {
        if (!this._executeOnIdleWorker(QQ))
          if (this._workerInfos.length < this._maxWorkers) {
            const WQ = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(WQ), this._execute(WQ, QQ)
          } else this._pendingActions.push(QQ)
      }
      _execute(QQ, WQ) {
        QQ.timeoutId && (clearTimeout(QQ.timeoutId), delete QQ.timeoutId), super._execute(QQ, ((XQ, wQ) => {
          WQ(XQ, (() => {
            wQ(), QQ.idle && (QQ.timeoutId = setTimeout((() => {
              QQ.workerPromise.then((QQ => {
                QQ.terminate()
              }));
              const WQ = this._workerInfos.indexOf(QQ); - 1 !== WQ && this._workerInfos.splice(WQ, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    qQ.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61554: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      AbstractThreeMfSerializer: () => Zs,
      BVHExporter: () => az,
      ContentTypeFileName: () => ys,
      DefaultXmlSerializerFormatOptions: () => oz,
      DefaultXmlSerializerNumberOptions: () => tz,
      EXT_lights_area: () => Vq,
      EXT_mesh_gpu_instancing: () => fw,
      EXT_texture_avif: () => Tz,
      EXT_texture_webp: () => Wz,
      GLTF2Export: () => uw,
      GLTFData: () => PQ,
      GetXmlFieldMeta: () => uz,
      GetXmlName: () => Lz,
      IsQualifiedName: () => lz,
      KHR_draco_mesh_compression: () => mw,
      KHR_interactivity: () => gq,
      KHR_lights_punctual: () => zq,
      KHR_materials_anisotropy: () => Uq,
      KHR_materials_clearcoat: () => aq,
      KHR_materials_coat: () => Rq,
      KHR_materials_diffuse_roughness: () => LT,
      KHR_materials_diffuse_transmission: () => fq,
      KHR_materials_dispersion: () => eq,
      KHR_materials_emissive_strength: () => Nq,
      KHR_materials_fuzz: () => JT,
      KHR_materials_ior: () => mq,
      KHR_materials_iridescence: () => XT,
      KHR_materials_openpbr: () => tT,
      KHR_materials_sheen: () => zT,
      KHR_materials_specular: () => BT,
      KHR_materials_transmission: () => pT,
      KHR_materials_unlit: () => dT,
      KHR_materials_volume: () => hT,
      KHR_materials_volume_scatter: () => RT,
      KHR_texture_basisu: () => KT,
      KHR_texture_transform: () => xT,
      Known3mfRelationshipTypes: () => Vs,
      KnownI3mfContentType: () => Ps,
      Matrix3d: () => vs,
      MatrixFormatter: () => ds,
      ModelFileName: () => Is,
      NumberFormatter: () => xz,
      OBJExport: () => zQ,
      Object3dDirName: () => rs,
      OpenXmlContentTypesNamespace: () => ss,
      OpenXmlRelationshipsNamespace: () => Fs,
      RegisterEXT_lights_area: () => pq,
      RegisterEXT_mesh_gpu_instancing: () => tw,
      RegisterEXT_texture_avif: () => sz,
      RegisterEXT_texture_webp: () => wz,
      RegisterKHR_draco_mesh_compression: () => Qq,
      RegisterKHR_interactivity: () => rq,
      RegisterKHR_lights_punctual: () => Fq,
      RegisterKHR_materials_anisotropy: () => vq,
      RegisterKHR_materials_clearcoat: () => hq,
      RegisterKHR_materials_coat: () => Cq,
      RegisterKHR_materials_diffuse_roughness: () => fT,
      RegisterKHR_materials_diffuse_transmission: () => tq,
      RegisterKHR_materials_dispersion: () => xq,
      RegisterKHR_materials_emissive_strength: () => Oq,
      RegisterKHR_materials_fuzz: () => IT,
      RegisterKHR_materials_ior: () => QT,
      RegisterKHR_materials_iridescence: () => qT,
      RegisterKHR_materials_openpbr: () => eT,
      RegisterKHR_materials_sheen: () => FT,
      RegisterKHR_materials_specular: () => VT,
      RegisterKHR_materials_transmission: () => UT,
      RegisterKHR_materials_unlit: () => aT,
      RegisterKHR_materials_volume: () => cT,
      RegisterKHR_materials_volume_scatter: () => CT,
      RegisterKHR_texture_basisu: () => MT,
      RegisterKHR_texture_transform: () => NT,
      RelationshipDirName: () => gs,
      RelationshipFileName: () => Bs,
      ResolveFormatOptions: () => nz,
      ResolveNumberOptions: () => ez,
      STLExport: () => Fz,
      ST_ObjectType: () => zs,
      ST_Unit: () => Ts,
      StringXmlWriter: () => Ws,
      ThreeDimModelNamespace: () => ws,
      ThreeMf: () => Os,
      ThreeMfBase: () => fs,
      ThreeMfBaseMaterials: () => ks,
      ThreeMfBuild: () => Ss,
      ThreeMfComponent: () => Ls,
      ThreeMfComponents: () => us,
      ThreeMfComponentsBuilder: () => es,
      ThreeMfContentType: () => ps,
      ThreeMfContentTypes: () => Ds,
      ThreeMfDocument: () => bs,
      ThreeMfDocumentBuilder: () => Ns,
      ThreeMfItem: () => ts,
      ThreeMfMaterialBuilder: () => xs,
      ThreeMfMesh: () => cs,
      ThreeMfMeshBuilder: () => ns,
      ThreeMfMeta: () => as,
      ThreeMfMetadataGroup: () => ls,
      ThreeMfModel: () => Hs,
      ThreeMfModelBuilder: () => Ys,
      ThreeMfObject: () => is,
      ThreeMfObjectBuilder: () => os,
      ThreeMfRelationship: () => Us,
      ThreeMfRelationships: () => Gs,
      ThreeMfResources: () => hs,
      ThreeMfSerializer: () => Ms,
      ThreeMfSerializerGlobalConfiguration: () => Ks,
      ThreeMfTriangle: () => Cs,
      ThreeMfTriangles: () => Es,
      ThreeMfVertex: () => Rs,
      ThreeMfVertices: () => As,
      ToQualifiedString: () => Sz,
      TokenType: () => Mz,
      TriangleSetsNamespace: () => qs,
      USDZExportAsync: () => dz,
      Utf8XmlWriterToBytes: () => Xs,
      XmlAttr: () => Ez,
      XmlBuilder: () => Qs,
      XmlElem: () => Cz,
      XmlIgnore: () => Rz,
      XmlName: () => Az,
      XmlNameToParts: () => fz,
      XmlSerializer: () => Kz,
      _ConvertToGLTFPBRMetallicRoughness: () => HX,
      _SolveMetallic: () => dX,
      __IGLTFExporterExtension: () => sQ
    });
    var wQ = XQ(37367),
      qQ = XQ(61523),
      TQ = XQ(40551);
    class zQ {
      static OBJ(QQ, WQ, XQ, zQ) {
        const sQ = [];
        let FQ = 1,
          PQ = 1;
        WQ && (XQ || (XQ = "mat"), sQ.push("mtllib " + XQ + ".mtl"));
        for (let gQ = 0; gQ < QQ.length; gQ++) {
          const XQ = QQ[gQ],
            JQ = XQ.name || `mesh${gQ}}`;
          sQ.push(`o ${JQ}`);
          let rQ = null;
          if (zQ) {
            const QQ = XQ.computeWorldMatrix(!0);
            rQ = new wQ.Matrix, QQ.invertToRef(rQ), XQ.bakeTransformIntoVertices(QQ)
          }
          if (WQ) {
            const QQ = XQ.material;
            QQ && sQ.push("usemtl " + QQ.id)
          }
          const IQ = XQ.geometry;
          if (!IQ) {
            qQ.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const jQ = IQ.getVerticesData("position"),
            BQ = IQ.getVerticesData("normal"),
            yQ = IQ.getVerticesData("uv"),
            VQ = IQ.lwQ();
          let DQ = 0,
            pQ = 0;
          if (!jQ || !VQ) {
            qQ.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const GQ = QQ[0].sE().useRightHandedSystem ? 1 : -1;
          for (let QQ = 0; QQ < jQ.length; QQ += 3) sQ.push("v " + jQ[QQ] * GQ + " " + jQ[QQ + 1] + " " + jQ[QQ + 2]), DQ++;
          if (null != BQ)
            for (let QQ = 0; QQ < BQ.length; QQ += 3) sQ.push("vn " + BQ[QQ] * GQ + " " + BQ[QQ + 1] + " " + BQ[QQ + 2]);
          if (null != yQ)
            for (let QQ = 0; QQ < yQ.length; QQ += 2) sQ.push("vt " + yQ[QQ] + " " + yQ[QQ + 1]), pQ++;
          const UQ = ["", "", ""],
            bQ = (XQ.material || XQ.sE().defaultMaterial)._getEffectiveOrientation(XQ),
            [vQ, dQ] = bQ === TQ.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let QQ = 0; QQ < VQ.length; QQ += 3) {
            const WQ = [String(VQ[QQ] + FQ), String(VQ[QQ + vQ] + FQ), String(VQ[QQ + dQ] + FQ)],
              XQ = [String(VQ[QQ] + PQ), String(VQ[QQ + vQ] + PQ), String(VQ[QQ + dQ] + PQ)],
              wQ = WQ,
              qQ = null != yQ ? XQ : UQ,
              TQ = null != BQ ? WQ : UQ;
            sQ.push("f " + wQ[0] + "/" + qQ[0] + "/" + TQ[0] + " " + wQ[1] + "/" + qQ[1] + "/" + TQ[1] + " " + wQ[2] + "/" + qQ[2] + "/" + TQ[2])
          }
          zQ && rQ && XQ.bakeTransformIntoVertices(rQ), FQ += DQ, PQ += pQ
        }
        return sQ.join("\n")
      }
      static MTL(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const XQ = [],
          wQ = QQ.material;
        XQ.push("newmtl " + WQ), XQ.push("  Ns " + wQ.specularPower.toFixed(4)), XQ.push("  Ni 1.5000"), XQ.push("  d " + wQ.alpha.toFixed(4)), XQ.push("  Tr 0.0000"), XQ.push("  Tf 1.0000 1.0000 1.0000"), XQ.push("  illum 2"), XQ.push("  Ka " + wQ.ambientColor.r.toFixed(4) + " " + wQ.ambientColor.g.toFixed(4) + " " + wQ.ambientColor.b.toFixed(4)), XQ.push("  Kd " + wQ.diffuseColor.r.toFixed(4) + " " + wQ.diffuseColor.g.toFixed(4) + " " + wQ.diffuseColor.b.toFixed(4)), XQ.push("  Ks " + wQ.specularColor.r.toFixed(4) + " " + wQ.specularColor.g.toFixed(4) + " " + wQ.specularColor.b.toFixed(4)), XQ.push("  Ke " + wQ.emissiveColor.r.toFixed(4) + " " + wQ.emissiveColor.g.toFixed(4) + " " + wQ.emissiveColor.b.toFixed(4));
        wQ.ambientTexture && XQ.push("  map_Ka " + wQ.ambientTexture.name), wQ.diffuseTexture && XQ.push("  map_Kd " + wQ.diffuseTexture.name), wQ.specularTexture && XQ.push("  map_Ks " + wQ.specularTexture.name), wQ.bumpTexture && XQ.push("  map_bump -imfchan z " + wQ.bumpTexture.name), wQ.opacityTexture && XQ.push("  map_d " + wQ.opacityTexture.name);
        return XQ.join("\n")
      }
    }
    var sQ = 0,
      FQ = XQ(41791);
    class PQ {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const QQ in this.files) {
          const WQ = this.files[QQ],
            XQ = new Blob([WQ], {
              type: (0, FQ.b)(QQ)
            });
          qQ.Tools.Download(XQ, QQ)
        }
      }
    }
    var gQ = XQ(41373),
      JQ = XQ(41320),
      rQ = XQ(41870),
      IQ = XQ(41326),
      jQ = XQ(40089),
      BQ = XQ(37392),
      yQ = XQ(37539),
      VQ = XQ(37404);
    const DQ = VQ.HighestCommonFactor,
      pQ = {
        ...VQ,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: DQ
      };
    var GQ = XQ(42062),
      UQ = XQ(41354),
      bQ = XQ(41832),
      vQ = XQ(41834),
      dQ = XQ(42076);
    (0, dQ.RegisterDumpTools)();
    var HQ = XQ(40260),
      aQ = XQ(40268),
      lQ = XQ(38956),
      hQ = XQ(40371),
      iQ = XQ(40724),
      cQ = XQ(42055);
    let AQ = 0;
    const RQ = (QQ, WQ, XQ, wQ) => {
        if (!QQ[XQ]) {
          const qQ = QQ.useDelayedTextureLoading;
          QQ.useDelayedTextureLoading = !1;
          const TQ = QQ._blockEntityCollection;
          QQ._blockEntityCollection = !1;
          const zQ = iQ.g.CreateFromBase64String(WQ, wQ + AQ++, QQ, !0, !1, iQ.g.BILINEAR_SAMPLINGMODE);
          QQ._blockEntityCollection = TQ;
          const sQ = QQ.Uj().getLoadedTexturesCache(),
            FQ = sQ.indexOf(zQ.getInternalTexture()); - 1 !== FQ && sQ.splice(FQ, 1), zQ.isRGBD = !0, zQ.wrapU = iQ.g.CLAMP_ADDRESSMODE, zQ.wrapV = iQ.g.CLAMP_ADDRESSMODE, QQ[XQ] = zQ, QQ.useDelayedTextureLoading = qQ, cQ.d.ExpandRGBDTexture(zQ);
          const PQ = QQ.Uj().Gj.add((() => {
            zQ.isRGBD = !0;
            const WQ = QQ.onBeforeRenderObservable.add((() => {
              zQ.isReady() && (QQ.onBeforeRenderObservable.remove(WQ), cQ.d.ExpandRGBDTexture(zQ))
            }))
          }));
          QQ.yE.add((() => {
            QQ.Uj().Gj.remove(PQ)
          }))
        }
        return QQ[XQ]
      },
      EQ = QQ => RQ(QQ, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      CQ = QQ => RQ(QQ, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      uQ = QQ => RQ(QQ, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var LQ = XQ(40355),
      kQ = XQ(37370),
      fQ = XQ(40404),
      SQ = XQ(40542),
      tQ = XQ(40612);
    class oQ extends SQ.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let eQ = (() => {
      var QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ;
      let gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ = tQ.b,
        GQ = [],
        UQ = [],
        bQ = [],
        vQ = [],
        dQ = [],
        lQ = [],
        hQ = [],
        iQ = [],
        cQ = [],
        AQ = [],
        RQ = [],
        EQ = [],
        CQ = [],
        uQ = [],
        LQ = [],
        kQ = [],
        fQ = [],
        SQ = [];
      return QQ = class extends pQ {
        get useEnergyConservation() {
          return (0, HQ.d)(this, WQ, "f")
        }
        set useEnergyConservation(QQ) {
          (0, HQ.h)(this, WQ, QQ, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, HQ.d)(this, XQ, "f")
        }
        set useSmithVisibilityHeightCorrelated(QQ) {
          (0, HQ.h)(this, XQ, QQ, "f")
        }
        get useSphericalHarmonics() {
          return (0, HQ.d)(this, wQ, "f")
        }
        set useSphericalHarmonics(QQ) {
          (0, HQ.h)(this, wQ, QQ, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, HQ.d)(this, qQ, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(QQ) {
          (0, HQ.h)(this, qQ, QQ, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, HQ.d)(this, TQ, "f")
        }
        set mixIblRadianceWithIrradiance(QQ) {
          (0, HQ.h)(this, TQ, QQ, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, HQ.d)(this, zQ, "f")
        }
        set useLegacySpecularEnergyConservation(QQ) {
          (0, HQ.h)(this, zQ, QQ, "f")
        }
        get baseDiffuseModel() {
          return (0, HQ.d)(this, sQ, "f")
        }
        set baseDiffuseModel(QQ) {
          (0, HQ.h)(this, sQ, QQ, "f")
        }
        get dielectricSpecularModel() {
          return (0, HQ.d)(this, FQ, "f")
        }
        set dielectricSpecularModel(QQ) {
          (0, HQ.h)(this, FQ, QQ, "f")
        }
        get conductorSpecularModel() {
          return (0, HQ.d)(this, PQ, "f")
        }
        set conductorSpecularModel(QQ) {
          (0, HQ.h)(this, PQ, QQ, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(gQ) {
          let JQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(gQ, "PBRBRDF", 90, new oQ, JQ), this._useEnergyConservation = QQ.DEFAULT_USE_ENERGY_CONSERVATION, WQ.set(this, (0, HQ.n)(this, GQ, QQ.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, HQ.n)(this, UQ), QQ.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), XQ.set(this, (0, HQ.n)(this, bQ, QQ.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, HQ.n)(this, vQ), QQ.DEFAULT_USE_SPHERICAL_HARMONICS), wQ.set(this, (0, HQ.n)(this, dQ, QQ.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, HQ.n)(this, lQ), QQ.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), qQ.set(this, (0, HQ.n)(this, hQ, QQ.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, HQ.n)(this, iQ), QQ.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), TQ.set(this, (0, HQ.n)(this, cQ, QQ.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, HQ.n)(this, AQ), QQ.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), zQ.set(this, (0, HQ.n)(this, RQ, QQ.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, HQ.n)(this, EQ), QQ.DEFAULT_DIFFUSE_MODEL), sQ.set(this, (0, HQ.n)(this, CQ, QQ.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, HQ.n)(this, uQ), QQ.DEFAULT_DIELECTRIC_SPECULAR_MODEL), FQ.set(this, (0, HQ.n)(this, LQ, QQ.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, HQ.n)(this, kQ), QQ.DEFAULT_CONDUCTOR_SPECULAR_MODEL), PQ.set(this, (0, HQ.n)(this, fQ, QQ.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, HQ.n)(this, SQ), this._internalMarkAllSubMeshesAsMiscDirty = gQ._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(QQ) {
          QQ.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, QQ.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, QQ.SPHERICAL_HARMONICS = this._useSphericalHarmonics, QQ.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, QQ.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, QQ.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, QQ.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, QQ.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, QQ.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, WQ = new WeakMap, XQ = new WeakMap, wQ = new WeakMap, qQ = new WeakMap, TQ = new WeakMap, zQ = new WeakMap, sQ = new WeakMap, FQ = new WeakMap, PQ = new WeakMap, (() => {
        const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(pQ[Symbol.metadata] ?? null) : void 0;
        gQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], JQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], rQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], IQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], jQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], BQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], yQ = [(0, aQ.I)("baseDiffuseModel"), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], VQ = [(0, aQ.I)("dielectricSpecularModel"), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], DQ = [(0, aQ.I)("conductorSpecularModel"), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], (0, HQ.k)(QQ, null, gQ, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useEnergyConservation" in QQ,
            get: QQ => QQ.useEnergyConservation,
            set: (QQ, WQ) => {
              QQ.useEnergyConservation = WQ
            }
          },
          metadata: WQ
        }, GQ, UQ), (0, HQ.k)(QQ, null, JQ, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useSmithVisibilityHeightCorrelated" in QQ,
            get: QQ => QQ.useSmithVisibilityHeightCorrelated,
            set: (QQ, WQ) => {
              QQ.useSmithVisibilityHeightCorrelated = WQ
            }
          },
          metadata: WQ
        }, bQ, vQ), (0, HQ.k)(QQ, null, rQ, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useSphericalHarmonics" in QQ,
            get: QQ => QQ.useSphericalHarmonics,
            set: (QQ, WQ) => {
              QQ.useSphericalHarmonics = WQ
            }
          },
          metadata: WQ
        }, dQ, lQ), (0, HQ.k)(QQ, null, IQ, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useSpecularGlossinessInputEnergyConservation" in QQ,
            get: QQ => QQ.useSpecularGlossinessInputEnergyConservation,
            set: (QQ, WQ) => {
              QQ.useSpecularGlossinessInputEnergyConservation = WQ
            }
          },
          metadata: WQ
        }, hQ, iQ), (0, HQ.k)(QQ, null, jQ, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "mixIblRadianceWithIrradiance" in QQ,
            get: QQ => QQ.mixIblRadianceWithIrradiance,
            set: (QQ, WQ) => {
              QQ.mixIblRadianceWithIrradiance = WQ
            }
          },
          metadata: WQ
        }, cQ, AQ), (0, HQ.k)(QQ, null, BQ, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useLegacySpecularEnergyConservation" in QQ,
            get: QQ => QQ.useLegacySpecularEnergyConservation,
            set: (QQ, WQ) => {
              QQ.useLegacySpecularEnergyConservation = WQ
            }
          },
          metadata: WQ
        }, RQ, EQ), (0, HQ.k)(QQ, null, yQ, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "baseDiffuseModel" in QQ,
            get: QQ => QQ.baseDiffuseModel,
            set: (QQ, WQ) => {
              QQ.baseDiffuseModel = WQ
            }
          },
          metadata: WQ
        }, CQ, uQ), (0, HQ.k)(QQ, null, VQ, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "dielectricSpecularModel" in QQ,
            get: QQ => QQ.dielectricSpecularModel,
            set: (QQ, WQ) => {
              QQ.dielectricSpecularModel = WQ
            }
          },
          metadata: WQ
        }, LQ, kQ), (0, HQ.k)(QQ, null, DQ, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "conductorSpecularModel" in QQ,
            get: QQ => QQ.conductorSpecularModel,
            set: (QQ, WQ) => {
              QQ.conductorSpecularModel = WQ
            }
          },
          metadata: WQ
        }, fQ, SQ), WQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WQ
        })
      })(), QQ.DEFAULT_USE_ENERGY_CONSERVATION = !0, QQ.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, QQ.DEFAULT_USE_SPHERICAL_HARMONICS = !0, QQ.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, QQ.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, QQ.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, QQ.DEFAULT_DIFFUSE_MODEL = 0, QQ.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, QQ.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, QQ
    })();
    var nQ = XQ(40535),
      xQ = XQ(37546),
      YQ = XQ(40538),
      NQ = XQ(40379),
      ZQ = XQ(40596),
      OQ = XQ(40591),
      KQ = XQ(40602),
      mQ = XQ(40584);
    class MQ extends SQ.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let QW = (() => {
      var QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ;
      let gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ = tQ.b,
        lQ = [],
        hQ = [],
        iQ = [],
        cQ = [],
        AQ = [],
        RQ = [],
        EQ = [],
        CQ = [],
        uQ = [],
        LQ = [],
        kQ = [],
        fQ = [],
        SQ = [],
        oQ = [],
        eQ = [],
        nQ = [],
        YQ = [],
        NQ = [],
        ZQ = [],
        KQ = [],
        QW = [],
        WW = [],
        XW = [],
        wW = [],
        qW = [],
        TW = [],
        zW = [],
        sW = [];
      return QQ = class extends dQ {
        get isEnabled() {
          return (0, HQ.d)(this, WQ, "f")
        }
        set isEnabled(QQ) {
          (0, HQ.h)(this, WQ, QQ, "f")
        }
        get indexOfRefraction() {
          return (0, HQ.d)(this, XQ, "f")
        }
        set indexOfRefraction(QQ) {
          (0, HQ.h)(this, XQ, QQ, "f")
        }
        get texture() {
          return (0, HQ.d)(this, wQ, "f")
        }
        set texture(QQ) {
          (0, HQ.h)(this, wQ, QQ, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, HQ.d)(this, qQ, "f")
        }
        set useRoughnessFromMainTexture(QQ) {
          (0, HQ.h)(this, qQ, QQ, "f")
        }
        get textureRoughness() {
          return (0, HQ.d)(this, TQ, "f")
        }
        set textureRoughness(QQ) {
          (0, HQ.h)(this, TQ, QQ, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, HQ.d)(this, zQ, "f")
        }
        set remapF0OnInterfaceChange(QQ) {
          (0, HQ.h)(this, zQ, QQ, "f")
        }
        get bumpTexture() {
          return (0, HQ.d)(this, sQ, "f")
        }
        set bumpTexture(QQ) {
          (0, HQ.h)(this, sQ, QQ, "f")
        }
        get isTintEnabled() {
          return (0, HQ.d)(this, FQ, "f")
        }
        set isTintEnabled(QQ) {
          (0, HQ.h)(this, FQ, QQ, "f")
        }
        get tintTexture() {
          return (0, HQ.d)(this, PQ, "f")
        }
        set tintTexture(QQ) {
          (0, HQ.h)(this, PQ, QQ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(gQ) {
          let JQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(gQ, "PBRClearCoat", 100, new MQ, JQ), this._isEnabled = !1, WQ.set(this, (0, HQ.n)(this, lQ, !1)), this.intensity = ((0, HQ.n)(this, hQ), (0, HQ.n)(this, iQ, 1)), this.roughness = ((0, HQ.n)(this, cQ), (0, HQ.n)(this, AQ, 0)), this._indexOfRefraction = ((0, HQ.n)(this, RQ), QQ._DefaultIndexOfRefraction), XQ.set(this, (0, HQ.n)(this, EQ, QQ._DefaultIndexOfRefraction)), this._texture = ((0, HQ.n)(this, CQ), null), wQ.set(this, (0, HQ.n)(this, uQ, null)), this._useRoughnessFromMainTexture = ((0, HQ.n)(this, LQ), !0), qQ.set(this, (0, HQ.n)(this, kQ, !0)), this._textureRoughness = ((0, HQ.n)(this, fQ), null), TQ.set(this, (0, HQ.n)(this, SQ, null)), this._remapF0OnInterfaceChange = ((0, HQ.n)(this, oQ), !0), zQ.set(this, (0, HQ.n)(this, eQ, !0)), this._bumpTexture = ((0, HQ.n)(this, nQ), null), sQ.set(this, (0, HQ.n)(this, YQ, null)), this._isTintEnabled = ((0, HQ.n)(this, NQ), !1), FQ.set(this, (0, HQ.n)(this, ZQ, !1)), this.tintColor = ((0, HQ.n)(this, KQ), (0, HQ.n)(this, QW, xQ.b.White())), this.tintColorAtDistance = ((0, HQ.n)(this, WW), (0, HQ.n)(this, XW, 1)), this.tintThickness = ((0, HQ.n)(this, wW), (0, HQ.n)(this, qW, 1)), this._tintTexture = ((0, HQ.n)(this, TW), null), PQ.set(this, (0, HQ.n)(this, zW, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, HQ.n)(this, sW), this._internalMarkAllSubMeshesAsTexturesDirty = gQ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(QQ, WQ, XQ) {
          if (!this._isEnabled) return !0;
          const wQ = this._material._disableBumpMap;
          if (QQ._areTexturesDirty && WQ.texturesEnabled) {
            if (this._texture && OQ.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && OQ.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (XQ.getCaps().standardDerivatives && this._bumpTexture && OQ.e.ClearCoatBumpTextureEnabled && !wQ && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && OQ.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(WQ, XQ) {
          this._isEnabled ? (WQ.CLEARCOAT = !0, WQ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, WQ.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, WQ._areTexturesDirty && XQ.texturesEnabled && (this._texture && OQ.e.ClearCoatTextureEnabled ? (0, mQ.db)(this._texture, WQ, "CLEARCOAT_TEXTURE") : WQ.CLEARCOAT_TEXTURE = !1, this._textureRoughness && OQ.e.ClearCoatTextureEnabled ? (0, mQ.db)(this._textureRoughness, WQ, "CLEARCOAT_TEXTURE_ROUGHNESS") : WQ.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && OQ.e.ClearCoatBumpTextureEnabled ? (0, mQ.db)(this._bumpTexture, WQ, "CLEARCOAT_BUMP") : WQ.CLEARCOAT_BUMP = !1, WQ.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === QQ._DefaultIndexOfRefraction, this._isTintEnabled ? (WQ.CLEARCOAT_TINT = !0, this._tintTexture && OQ.e.ClearCoatTintTextureEnabled ? ((0, mQ.db)(this._tintTexture, WQ, "CLEARCOAT_TINT_TEXTURE"), WQ.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : WQ.CLEARCOAT_TINT_TEXTURE = !1) : (WQ.CLEARCOAT_TINT = !1, WQ.CLEARCOAT_TINT_TEXTURE = !1))) : (WQ.CLEARCOAT = !1, WQ.CLEARCOAT_TEXTURE = !1, WQ.CLEARCOAT_TEXTURE_ROUGHNESS = !1, WQ.CLEARCOAT_BUMP = !1, WQ.CLEARCOAT_TINT = !1, WQ.CLEARCOAT_TINT_TEXTURE = !1, WQ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, WQ.CLEARCOAT_DEFAULTIOR = !1, WQ.CLEARCOAT_TEXTUREDIRECTUV = 0, WQ.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, WQ.CLEARCOAT_BUMPDIRECTUV = 0, WQ.CLEARCOAT_REMAP_F0 = !1, WQ.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, WQ.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(QQ, WQ, XQ, wQ) {
          if (!this._isEnabled) return;
          const qQ = wQ.materialDefines,
            TQ = this._material.isFrozen,
            zQ = this._material._disableBumpMap,
            sQ = this._material._invertNormalMapX,
            FQ = this._material._invertNormalMapY;
          if (!QQ.useUbo || !TQ || !QQ.isSync) {
            (this._texture || this._textureRoughness) && OQ.e.ClearCoatTextureEnabled && (QQ.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, mQ.E)(this._texture, QQ, "clearCoat"), this._textureRoughness && !qQ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, mQ.E)(this._textureRoughness, QQ, "clearCoatRoughness")), this._bumpTexture && XQ.getCaps().standardDerivatives && OQ.e.ClearCoatTextureEnabled && !zQ && (QQ.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, mQ.E)(this._bumpTexture, QQ, "clearCoatBump"), WQ._mirroredCameraPosition ? QQ.updateFloat2("vClearCoatTangentSpaceParams", sQ ? 1 : -1, FQ ? 1 : -1) : QQ.updateFloat2("vClearCoatTangentSpaceParams", sQ ? -1 : 1, FQ ? -1 : 1)), this._tintTexture && OQ.e.ClearCoatTintTextureEnabled && (QQ.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, mQ.E)(this._tintTexture, QQ, "clearCoatTint")), QQ.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const wQ = 1 - this._indexOfRefraction,
              TQ = 1 + this._indexOfRefraction,
              PQ = Math.pow(-wQ / TQ, 2),
              gQ = 1 / this._indexOfRefraction;
            QQ.updateFloat4("vClearCoatRefractionParams", PQ, gQ, wQ, TQ), this._isTintEnabled && (QQ.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), QQ.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          WQ.texturesEnabled && (this._texture && OQ.e.ClearCoatTextureEnabled && QQ.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !qQ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && OQ.e.ClearCoatTextureEnabled && QQ.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && XQ.getCaps().standardDerivatives && OQ.e.ClearCoatBumpTextureEnabled && !zQ && QQ.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && OQ.e.ClearCoatTintTextureEnabled && QQ.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(QQ, WQ, XQ) {
          return QQ.CLEARCOAT_BUMP && WQ.addFallback(XQ++, "CLEARCOAT_BUMP"), QQ.CLEARCOAT_TINT && WQ.addFallback(XQ++, "CLEARCOAT_TINT"), QQ.CLEARCOAT && WQ.addFallback(XQ++, "CLEARCOAT"), XQ
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
      }, WQ = new WeakMap, XQ = new WeakMap, wQ = new WeakMap, qQ = new WeakMap, TQ = new WeakMap, zQ = new WeakMap, sQ = new WeakMap, FQ = new WeakMap, PQ = new WeakMap, (() => {
        const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(dQ[Symbol.metadata] ?? null) : void 0;
        gQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], JQ = [(0, aQ.I)()], rQ = [(0, aQ.I)()], IQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], jQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], BQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], yQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], VQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], DQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], pQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], GQ = [(0, aQ.l)()], UQ = [(0, aQ.I)()], bQ = [(0, aQ.I)()], vQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], (0, HQ.k)(QQ, null, gQ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, WQ) => {
              QQ.isEnabled = WQ
            }
          },
          metadata: WQ
        }, lQ, hQ), (0, HQ.k)(QQ, null, IQ, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "indexOfRefraction" in QQ,
            get: QQ => QQ.indexOfRefraction,
            set: (QQ, WQ) => {
              QQ.indexOfRefraction = WQ
            }
          },
          metadata: WQ
        }, EQ, CQ), (0, HQ.k)(QQ, null, jQ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "texture" in QQ,
            get: QQ => QQ.texture,
            set: (QQ, WQ) => {
              QQ.texture = WQ
            }
          },
          metadata: WQ
        }, uQ, LQ), (0, HQ.k)(QQ, null, BQ, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRoughnessFromMainTexture" in QQ,
            get: QQ => QQ.useRoughnessFromMainTexture,
            set: (QQ, WQ) => {
              QQ.useRoughnessFromMainTexture = WQ
            }
          },
          metadata: WQ
        }, kQ, fQ), (0, HQ.k)(QQ, null, yQ, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "textureRoughness" in QQ,
            get: QQ => QQ.textureRoughness,
            set: (QQ, WQ) => {
              QQ.textureRoughness = WQ
            }
          },
          metadata: WQ
        }, SQ, oQ), (0, HQ.k)(QQ, null, VQ, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: QQ => "remapF0OnInterfaceChange" in QQ,
            get: QQ => QQ.remapF0OnInterfaceChange,
            set: (QQ, WQ) => {
              QQ.remapF0OnInterfaceChange = WQ
            }
          },
          metadata: WQ
        }, eQ, nQ), (0, HQ.k)(QQ, null, DQ, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "bumpTexture" in QQ,
            get: QQ => QQ.bumpTexture,
            set: (QQ, WQ) => {
              QQ.bumpTexture = WQ
            }
          },
          metadata: WQ
        }, YQ, NQ), (0, HQ.k)(QQ, null, pQ, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isTintEnabled" in QQ,
            get: QQ => QQ.isTintEnabled,
            set: (QQ, WQ) => {
              QQ.isTintEnabled = WQ
            }
          },
          metadata: WQ
        }, ZQ, KQ), (0, HQ.k)(QQ, null, vQ, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintTexture" in QQ,
            get: QQ => QQ.tintTexture,
            set: (QQ, WQ) => {
              QQ.tintTexture = WQ
            }
          },
          metadata: WQ
        }, zW, sW), (0, HQ.k)(null, null, JQ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensity" in QQ,
            get: QQ => QQ.intensity,
            set: (QQ, WQ) => {
              QQ.intensity = WQ
            }
          },
          metadata: WQ
        }, iQ, cQ), (0, HQ.k)(null, null, rQ, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "roughness" in QQ,
            get: QQ => QQ.roughness,
            set: (QQ, WQ) => {
              QQ.roughness = WQ
            }
          },
          metadata: WQ
        }, AQ, RQ), (0, HQ.k)(null, null, GQ, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintColor" in QQ,
            get: QQ => QQ.tintColor,
            set: (QQ, WQ) => {
              QQ.tintColor = WQ
            }
          },
          metadata: WQ
        }, QW, WW), (0, HQ.k)(null, null, UQ, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintColorAtDistance" in QQ,
            get: QQ => QQ.tintColorAtDistance,
            set: (QQ, WQ) => {
              QQ.tintColorAtDistance = WQ
            }
          },
          metadata: WQ
        }, XW, wW), (0, HQ.k)(null, null, bQ, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintThickness" in QQ,
            get: QQ => QQ.tintThickness,
            set: (QQ, WQ) => {
              QQ.tintThickness = WQ
            }
          },
          metadata: WQ
        }, qW, TW), WQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WQ
        })
      })(), QQ._DefaultIndexOfRefraction = 1.5, QQ
    })();
    class WW extends SQ.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let XW = (() => {
      var QQ, WQ, XQ, wQ;
      let qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ = tQ.b,
        rQ = [],
        IQ = [],
        jQ = [],
        BQ = [],
        yQ = [],
        VQ = [],
        DQ = [],
        pQ = [],
        GQ = [],
        UQ = [],
        bQ = [],
        vQ = [],
        dQ = [],
        lQ = [];
      return QQ = class extends JQ {
        get isEnabled() {
          return (0, HQ.d)(this, WQ, "f")
        }
        set isEnabled(QQ) {
          (0, HQ.h)(this, WQ, QQ, "f")
        }
        get texture() {
          return (0, HQ.d)(this, XQ, "f")
        }
        set texture(QQ) {
          (0, HQ.h)(this, XQ, QQ, "f")
        }
        get thicknessTexture() {
          return (0, HQ.d)(this, wQ, "f")
        }
        set thicknessTexture(QQ) {
          (0, HQ.h)(this, wQ, QQ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(qQ) {
          let TQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(qQ, "PBRIridescence", 110, new WW, TQ), this._isEnabled = !1, WQ.set(this, (0, HQ.n)(this, rQ, !1)), this.intensity = ((0, HQ.n)(this, IQ), (0, HQ.n)(this, jQ, 1)), this.minimumThickness = ((0, HQ.n)(this, BQ), (0, HQ.n)(this, yQ, QQ._DefaultMinimumThickness)), this.maximumThickness = ((0, HQ.n)(this, VQ), (0, HQ.n)(this, DQ, QQ._DefaultMaximumThickness)), this.indexOfRefraction = ((0, HQ.n)(this, pQ), (0, HQ.n)(this, GQ, QQ._DefaultIndexOfRefraction)), this._texture = ((0, HQ.n)(this, UQ), null), XQ.set(this, (0, HQ.n)(this, bQ, null)), this._thicknessTexture = ((0, HQ.n)(this, vQ), null), wQ.set(this, (0, HQ.n)(this, dQ, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, HQ.n)(this, lQ), this._internalMarkAllSubMeshesAsTexturesDirty = qQ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(QQ, WQ) {
          if (!this._isEnabled) return !0;
          if (QQ._areTexturesDirty && WQ.texturesEnabled) {
            if (this._texture && OQ.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && OQ.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(QQ, WQ) {
          this._isEnabled ? (QQ.IRIDESCENCE = !0, QQ._areTexturesDirty && WQ.texturesEnabled && (this._texture && OQ.e.IridescenceTextureEnabled ? (0, mQ.db)(this._texture, QQ, "IRIDESCENCE_TEXTURE") : QQ.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && OQ.e.IridescenceTextureEnabled ? (0, mQ.db)(this._thicknessTexture, QQ, "IRIDESCENCE_THICKNESS_TEXTURE") : QQ.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (QQ.IRIDESCENCE = !1, QQ.IRIDESCENCE_TEXTURE = !1, QQ.IRIDESCENCE_THICKNESS_TEXTURE = !1, QQ.IRIDESCENCE_TEXTUREDIRECTUV = 0, QQ.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(QQ, WQ) {
          if (!this._isEnabled) return;
          const XQ = this._material.isFrozen;
          QQ.useUbo && XQ && QQ.isSync || ((this._texture || this._thicknessTexture) && OQ.e.IridescenceTextureEnabled && (QQ.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, mQ.E)(this._texture, QQ, "iridescence"), this._thicknessTexture && (0, mQ.E)(this._thicknessTexture, QQ, "iridescenceThickness")), QQ.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), WQ.texturesEnabled && (this._texture && OQ.e.IridescenceTextureEnabled && QQ.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && OQ.e.IridescenceTextureEnabled && QQ.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(QQ, WQ, XQ) {
          return QQ.IRIDESCENCE && WQ.addFallback(XQ++, "IRIDESCENCE"), XQ
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
      }, WQ = new WeakMap, XQ = new WeakMap, wQ = new WeakMap, (() => {
        const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(JQ[Symbol.metadata] ?? null) : void 0;
        qQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], TQ = [(0, aQ.I)()], zQ = [(0, aQ.I)()], sQ = [(0, aQ.I)()], FQ = [(0, aQ.I)()], PQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], gQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], (0, HQ.k)(QQ, null, qQ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, WQ) => {
              QQ.isEnabled = WQ
            }
          },
          metadata: WQ
        }, rQ, IQ), (0, HQ.k)(QQ, null, PQ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "texture" in QQ,
            get: QQ => QQ.texture,
            set: (QQ, WQ) => {
              QQ.texture = WQ
            }
          },
          metadata: WQ
        }, bQ, vQ), (0, HQ.k)(QQ, null, gQ, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "thicknessTexture" in QQ,
            get: QQ => QQ.thicknessTexture,
            set: (QQ, WQ) => {
              QQ.thicknessTexture = WQ
            }
          },
          metadata: WQ
        }, dQ, lQ), (0, HQ.k)(null, null, TQ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensity" in QQ,
            get: QQ => QQ.intensity,
            set: (QQ, WQ) => {
              QQ.intensity = WQ
            }
          },
          metadata: WQ
        }, jQ, BQ), (0, HQ.k)(null, null, zQ, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "minimumThickness" in QQ,
            get: QQ => QQ.minimumThickness,
            set: (QQ, WQ) => {
              QQ.minimumThickness = WQ
            }
          },
          metadata: WQ
        }, yQ, VQ), (0, HQ.k)(null, null, sQ, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "maximumThickness" in QQ,
            get: QQ => QQ.maximumThickness,
            set: (QQ, WQ) => {
              QQ.maximumThickness = WQ
            }
          },
          metadata: WQ
        }, DQ, pQ), (0, HQ.k)(null, null, FQ, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "indexOfRefraction" in QQ,
            get: QQ => QQ.indexOfRefraction,
            set: (QQ, WQ) => {
              QQ.indexOfRefraction = WQ
            }
          },
          metadata: WQ
        }, GQ, UQ), WQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WQ
        })
      })(), QQ._DefaultMinimumThickness = 100, QQ._DefaultMaximumThickness = 400, QQ._DefaultIndexOfRefraction = 1.3, QQ
    })();
    class wW extends SQ.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let qW = (() => {
      var QQ, WQ, XQ, wQ;
      let qQ, TQ, zQ, sQ, FQ, PQ = tQ.b,
        gQ = [],
        JQ = [],
        rQ = [],
        IQ = [],
        jQ = [],
        BQ = [],
        yQ = [],
        VQ = [],
        DQ = [],
        pQ = [];
      return QQ = class extends PQ {
        get isEnabled() {
          return (0, HQ.d)(this, WQ, "f")
        }
        set isEnabled(QQ) {
          (0, HQ.h)(this, WQ, QQ, "f")
        }
        set angle(QQ) {
          this.direction.x = Math.cos(QQ), this.direction.y = Math.sin(QQ)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, HQ.d)(this, XQ, "f")
        }
        set texture(QQ) {
          (0, HQ.h)(this, XQ, QQ, "f")
        }
        get legacy() {
          return (0, HQ.d)(this, wQ, "f")
        }
        set legacy(QQ) {
          (0, HQ.h)(this, wQ, QQ, "f")
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
          super(QQ, "PBRAnisotropic", 110, new wW, qQ), this._isEnabled = !1, WQ.set(this, (0, HQ.n)(this, gQ, !1)), this.intensity = ((0, HQ.n)(this, JQ), (0, HQ.n)(this, rQ, 1)), this.direction = ((0, HQ.n)(this, IQ), (0, HQ.n)(this, jQ, new kQ.q(1, 0))), this._texture = ((0, HQ.n)(this, BQ), null), XQ.set(this, (0, HQ.n)(this, yQ, null)), this._legacy = ((0, HQ.n)(this, VQ), !1), wQ.set(this, (0, HQ.n)(this, DQ, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, HQ.n)(this, pQ), this._internalMarkAllSubMeshesAsTexturesDirty = QQ._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = QQ._dirtyCallbacks[16]
        }
        isReadyForSubMesh(QQ, WQ) {
          return !this._isEnabled || !(QQ._areTexturesDirty && WQ.texturesEnabled && this._texture && OQ.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(QQ, WQ, XQ) {
          this._isEnabled ? (QQ.ANISOTROPIC = this._isEnabled, this._isEnabled && !XQ.isVerticesDataPresent(fQ.l.TangentKind) && (QQ._needUVs = !0, QQ.MAINUV1 = !0), QQ._areTexturesDirty && WQ.texturesEnabled && (this._texture && OQ.e.AnisotropicTextureEnabled ? (0, mQ.db)(this._texture, QQ, "ANISOTROPIC_TEXTURE") : QQ.ANISOTROPIC_TEXTURE = !1), QQ._areMiscDirty && (QQ.ANISOTROPIC_LEGACY = this._legacy)) : (QQ.ANISOTROPIC = !1, QQ.ANISOTROPIC_TEXTURE = !1, QQ.ANISOTROPIC_TEXTUREDIRECTUV = 0, QQ.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(QQ, WQ) {
          if (!this._isEnabled) return;
          const XQ = this._material.isFrozen;
          QQ.useUbo && XQ && QQ.isSync || (this._texture && OQ.e.AnisotropicTextureEnabled && (QQ.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, mQ.E)(this._texture, QQ, "anisotropy")), QQ.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), WQ.texturesEnabled && this._texture && OQ.e.AnisotropicTextureEnabled && QQ.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(QQ, WQ, XQ) {
          return QQ.ANISOTROPIC && WQ.addFallback(XQ++, "ANISOTROPIC"), XQ
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
        parse(QQ, WQ, XQ) {
          super.parse(QQ, WQ, XQ), void 0 === QQ.legacy && (this.legacy = !0)
        }
      }, WQ = new WeakMap, XQ = new WeakMap, wQ = new WeakMap, (() => {
        const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(PQ[Symbol.metadata] ?? null) : void 0;
        qQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], TQ = [(0, aQ.I)()], zQ = [(0, aQ.D)()], sQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], FQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], (0, HQ.k)(QQ, null, qQ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, WQ) => {
              QQ.isEnabled = WQ
            }
          },
          metadata: WQ
        }, gQ, JQ), (0, HQ.k)(QQ, null, sQ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "texture" in QQ,
            get: QQ => QQ.texture,
            set: (QQ, WQ) => {
              QQ.texture = WQ
            }
          },
          metadata: WQ
        }, yQ, VQ), (0, HQ.k)(QQ, null, FQ, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: QQ => "legacy" in QQ,
            get: QQ => QQ.legacy,
            set: (QQ, WQ) => {
              QQ.legacy = WQ
            }
          },
          metadata: WQ
        }, DQ, pQ), (0, HQ.k)(null, null, TQ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensity" in QQ,
            get: QQ => QQ.intensity,
            set: (QQ, WQ) => {
              QQ.intensity = WQ
            }
          },
          metadata: WQ
        }, rQ, IQ), (0, HQ.k)(null, null, zQ, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "direction" in QQ,
            get: QQ => QQ.direction,
            set: (QQ, WQ) => {
              QQ.direction = WQ
            }
          },
          metadata: WQ
        }, jQ, BQ), WQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WQ
        })
      })(), QQ
    })();
    class TW extends SQ.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let zW = (() => {
      var QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ;
      let FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ = tQ.b,
        DQ = [],
        pQ = [],
        GQ = [],
        UQ = [],
        bQ = [],
        vQ = [],
        dQ = [],
        lQ = [],
        hQ = [],
        iQ = [],
        cQ = [],
        AQ = [],
        RQ = [],
        EQ = [],
        CQ = [],
        uQ = [],
        LQ = [],
        kQ = [];
      return QQ = class extends VQ {
        get isEnabled() {
          return (0, HQ.d)(this, WQ, "f")
        }
        set isEnabled(QQ) {
          (0, HQ.h)(this, WQ, QQ, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, HQ.d)(this, XQ, "f")
        }
        set linkSheenWithAlbedo(QQ) {
          (0, HQ.h)(this, XQ, QQ, "f")
        }
        get texture() {
          return (0, HQ.d)(this, wQ, "f")
        }
        set texture(QQ) {
          (0, HQ.h)(this, wQ, QQ, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, HQ.d)(this, qQ, "f")
        }
        set useRoughnessFromMainTexture(QQ) {
          (0, HQ.h)(this, qQ, QQ, "f")
        }
        get roughness() {
          return (0, HQ.d)(this, TQ, "f")
        }
        set roughness(QQ) {
          (0, HQ.h)(this, TQ, QQ, "f")
        }
        get textureRoughness() {
          return (0, HQ.d)(this, zQ, "f")
        }
        set textureRoughness(QQ) {
          (0, HQ.h)(this, zQ, QQ, "f")
        }
        get albedoScaling() {
          return (0, HQ.d)(this, sQ, "f")
        }
        set albedoScaling(QQ) {
          (0, HQ.h)(this, sQ, QQ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(QQ) {
          let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(QQ, "Sheen", 120, new TW, FQ), this._isEnabled = !1, WQ.set(this, (0, HQ.n)(this, DQ, !1)), this._linkSheenWithAlbedo = ((0, HQ.n)(this, pQ), !1), XQ.set(this, (0, HQ.n)(this, GQ, !1)), this.intensity = ((0, HQ.n)(this, UQ), (0, HQ.n)(this, bQ, 1)), this.color = ((0, HQ.n)(this, vQ), (0, HQ.n)(this, dQ, xQ.b.White())), this._texture = ((0, HQ.n)(this, lQ), null), wQ.set(this, (0, HQ.n)(this, hQ, null)), this._useRoughnessFromMainTexture = ((0, HQ.n)(this, iQ), !0), qQ.set(this, (0, HQ.n)(this, cQ, !0)), this._roughness = ((0, HQ.n)(this, AQ), null), TQ.set(this, (0, HQ.n)(this, RQ, null)), this._textureRoughness = ((0, HQ.n)(this, EQ), null), zQ.set(this, (0, HQ.n)(this, CQ, null)), this._albedoScaling = ((0, HQ.n)(this, uQ), !1), sQ.set(this, (0, HQ.n)(this, LQ, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, HQ.n)(this, kQ), this._internalMarkAllSubMeshesAsTexturesDirty = QQ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(QQ, WQ) {
          if (!this._isEnabled) return !0;
          if (QQ._areTexturesDirty && WQ.texturesEnabled) {
            if (this._texture && OQ.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && OQ.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(QQ, WQ) {
          this._isEnabled ? (QQ.SHEEN = !0, QQ.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, QQ.SHEEN_ROUGHNESS = null !== this._roughness, QQ.SHEEN_ALBEDOSCALING = this._albedoScaling, QQ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, QQ._areTexturesDirty && WQ.texturesEnabled && (this._texture && OQ.e.SheenTextureEnabled ? ((0, mQ.db)(this._texture, QQ, "SHEEN_TEXTURE"), QQ.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : QQ.SHEEN_TEXTURE = !1, this._textureRoughness && OQ.e.SheenTextureEnabled ? (0, mQ.db)(this._textureRoughness, QQ, "SHEEN_TEXTURE_ROUGHNESS") : QQ.SHEEN_TEXTURE_ROUGHNESS = !1)) : (QQ.SHEEN = !1, QQ.SHEEN_TEXTURE = !1, QQ.SHEEN_TEXTURE_ROUGHNESS = !1, QQ.SHEEN_LINKWITHALBEDO = !1, QQ.SHEEN_ROUGHNESS = !1, QQ.SHEEN_ALBEDOSCALING = !1, QQ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, QQ.SHEEN_GAMMATEXTURE = !1, QQ.SHEEN_TEXTUREDIRECTUV = 0, QQ.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(QQ, WQ, XQ, wQ) {
          if (!this._isEnabled) return;
          const qQ = wQ.materialDefines,
            TQ = this._material.isFrozen;
          QQ.useUbo && TQ && QQ.isSync || ((this._texture || this._textureRoughness) && OQ.e.SheenTextureEnabled && (QQ.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, mQ.E)(this._texture, QQ, "sheen"), this._textureRoughness && !qQ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, mQ.E)(this._textureRoughness, QQ, "sheenRoughness")), QQ.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && QQ.updateFloat("vSheenRoughness", this._roughness)), WQ.texturesEnabled && (this._texture && OQ.e.SheenTextureEnabled && QQ.setTexture("sheenSampler", this._texture), this._textureRoughness && !qQ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && OQ.e.SheenTextureEnabled && QQ.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(QQ, WQ, XQ) {
          return QQ.SHEEN && WQ.addFallback(XQ++, "SHEEN"), XQ
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
      }, WQ = new WeakMap, XQ = new WeakMap, wQ = new WeakMap, qQ = new WeakMap, TQ = new WeakMap, zQ = new WeakMap, sQ = new WeakMap, (() => {
        const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(VQ[Symbol.metadata] ?? null) : void 0;
        FQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], PQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], gQ = [(0, aQ.I)()], JQ = [(0, aQ.l)()], rQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], IQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], jQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], BQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], yQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], (0, HQ.k)(QQ, null, FQ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, WQ) => {
              QQ.isEnabled = WQ
            }
          },
          metadata: WQ
        }, DQ, pQ), (0, HQ.k)(QQ, null, PQ, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: QQ => "linkSheenWithAlbedo" in QQ,
            get: QQ => QQ.linkSheenWithAlbedo,
            set: (QQ, WQ) => {
              QQ.linkSheenWithAlbedo = WQ
            }
          },
          metadata: WQ
        }, GQ, UQ), (0, HQ.k)(QQ, null, rQ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "texture" in QQ,
            get: QQ => QQ.texture,
            set: (QQ, WQ) => {
              QQ.texture = WQ
            }
          },
          metadata: WQ
        }, hQ, iQ), (0, HQ.k)(QQ, null, IQ, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRoughnessFromMainTexture" in QQ,
            get: QQ => QQ.useRoughnessFromMainTexture,
            set: (QQ, WQ) => {
              QQ.useRoughnessFromMainTexture = WQ
            }
          },
          metadata: WQ
        }, cQ, AQ), (0, HQ.k)(QQ, null, jQ, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "roughness" in QQ,
            get: QQ => QQ.roughness,
            set: (QQ, WQ) => {
              QQ.roughness = WQ
            }
          },
          metadata: WQ
        }, RQ, EQ), (0, HQ.k)(QQ, null, BQ, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "textureRoughness" in QQ,
            get: QQ => QQ.textureRoughness,
            set: (QQ, WQ) => {
              QQ.textureRoughness = WQ
            }
          },
          metadata: WQ
        }, CQ, uQ), (0, HQ.k)(QQ, null, yQ, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: QQ => "albedoScaling" in QQ,
            get: QQ => QQ.albedoScaling,
            set: (QQ, WQ) => {
              QQ.albedoScaling = WQ
            }
          },
          metadata: WQ
        }, LQ, kQ), (0, HQ.k)(null, null, gQ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensity" in QQ,
            get: QQ => QQ.intensity,
            set: (QQ, WQ) => {
              QQ.intensity = WQ
            }
          },
          metadata: WQ
        }, bQ, vQ), (0, HQ.k)(null, null, JQ, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: QQ => "color" in QQ,
            get: QQ => QQ.color,
            set: (QQ, WQ) => {
              QQ.color = WQ
            }
          },
          metadata: WQ
        }, dQ, lQ), WQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WQ
        })
      })(), QQ
    })();
    class sW extends SQ.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let FW = (() => {
      var QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ;
      let VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, lQ, hQ, iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, fQ, SQ, oQ, eQ, nQ, YQ, NQ, ZQ, KQ, MQ, QW, WW, XW = tQ.b,
        wW = [],
        qW = [],
        TW = [],
        zW = [],
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
        eW = [],
        nW = [],
        xW = [],
        YW = [],
        NW = [],
        ZW = [],
        OW = [],
        KW = [],
        mW = [],
        MW = [],
        QX = [],
        WX = [],
        XX = [],
        wX = [],
        qX = [],
        TX = [],
        zX = [],
        sX = [],
        FX = [],
        PX = [],
        gX = [],
        JX = [];
      return QQ = class extends XW {
        get isRefractionEnabled() {
          return (0, HQ.d)(this, WQ, "f")
        }
        set isRefractionEnabled(QQ) {
          (0, HQ.h)(this, WQ, QQ, "f")
        }
        get isTranslucencyEnabled() {
          return (0, HQ.d)(this, XQ, "f")
        }
        set isTranslucencyEnabled(QQ) {
          (0, HQ.h)(this, XQ, QQ, "f")
        }
        get isDispersionEnabled() {
          return (0, HQ.d)(this, wQ, "f")
        }
        set isDispersionEnabled(QQ) {
          (0, HQ.h)(this, wQ, QQ, "f")
        }
        get isScatteringEnabled() {
          return (0, HQ.d)(this, qQ, "f")
        }
        set isScatteringEnabled(QQ) {
          (0, HQ.h)(this, qQ, QQ, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(QQ) {
          this._scene.enableSubSurfaceForPrePass() && QQ && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(QQ))
        }
        get useAlbedoToTintRefraction() {
          return (0, HQ.d)(this, TQ, "f")
        }
        set useAlbedoToTintRefraction(QQ) {
          (0, HQ.h)(this, TQ, QQ, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, HQ.d)(this, zQ, "f")
        }
        set useAlbedoToTintTranslucency(QQ) {
          (0, HQ.h)(this, zQ, QQ, "f")
        }
        get thicknessTexture() {
          return (0, HQ.d)(this, sQ, "f")
        }
        set thicknessTexture(QQ) {
          (0, HQ.h)(this, sQ, QQ, "f")
        }
        get refractionTexture() {
          return (0, HQ.d)(this, FQ, "f")
        }
        set refractionTexture(QQ) {
          (0, HQ.h)(this, FQ, QQ, "f")
        }
        get indexOfRefraction() {
          return (0, HQ.d)(this, PQ, "f")
        }
        set indexOfRefraction(QQ) {
          (0, HQ.h)(this, PQ, QQ, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(QQ) {
          const WQ = QQ >= 1 ? QQ : -1;
          this._volumeIndexOfRefraction !== WQ && (this._volumeIndexOfRefraction = WQ, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, HQ.d)(this, gQ, "f")
        }
        set invertRefractionY(QQ) {
          (0, HQ.h)(this, gQ, QQ, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, HQ.d)(this, JQ, "f")
        }
        set linkRefractionWithTransparency(QQ) {
          (0, HQ.h)(this, JQ, QQ, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, HQ.d)(this, rQ, "f")
        }
        set useMaskFromThicknessTexture(QQ) {
          (0, HQ.h)(this, rQ, QQ, "f")
        }
        get refractionIntensityTexture() {
          return (0, HQ.d)(this, IQ, "f")
        }
        set refractionIntensityTexture(QQ) {
          (0, HQ.h)(this, IQ, QQ, "f")
        }
        get translucencyIntensityTexture() {
          return (0, HQ.d)(this, jQ, "f")
        }
        set translucencyIntensityTexture(QQ) {
          (0, HQ.h)(this, jQ, QQ, "f")
        }
        get translucencyColorTexture() {
          return (0, HQ.d)(this, BQ, "f")
        }
        set translucencyColorTexture(QQ) {
          (0, HQ.h)(this, BQ, QQ, "f")
        }
        get useGltfStyleTextures() {
          return (0, HQ.d)(this, yQ, "f")
        }
        set useGltfStyleTextures(QQ) {
          (0, HQ.h)(this, yQ, QQ, "f")
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
        constructor(VQ) {
          let DQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(VQ, "PBRSubSurface", 130, new sW, DQ), this._isRefractionEnabled = !1, WQ.set(this, (0, HQ.n)(this, wW, !1)), this._isTranslucencyEnabled = ((0, HQ.n)(this, qW), !1), XQ.set(this, (0, HQ.n)(this, TW, !1)), this._isDispersionEnabled = ((0, HQ.n)(this, zW), !1), wQ.set(this, (0, HQ.n)(this, FW, !1)), this._isScatteringEnabled = ((0, HQ.n)(this, PW), !1), qQ.set(this, (0, HQ.n)(this, gW, !1)), this._scatteringDiffusionProfileIndex = ((0, HQ.n)(this, JW), (0, HQ.n)(this, rW, 0)), this.refractionIntensity = ((0, HQ.n)(this, IW), (0, HQ.n)(this, jW, 1)), this.translucencyIntensity = ((0, HQ.n)(this, BW), (0, HQ.n)(this, yW, 1)), this._useAlbedoToTintRefraction = ((0, HQ.n)(this, VW), !1), TQ.set(this, (0, HQ.n)(this, DW, !1)), this._useAlbedoToTintTranslucency = ((0, HQ.n)(this, pW), !1), zQ.set(this, (0, HQ.n)(this, GW, !1)), this._thicknessTexture = ((0, HQ.n)(this, UW), null), sQ.set(this, (0, HQ.n)(this, bW, null)), this._refractionTexture = ((0, HQ.n)(this, vW), null), FQ.set(this, (0, HQ.n)(this, dW, null)), this._indexOfRefraction = ((0, HQ.n)(this, HW), 1.5), PQ.set(this, (0, HQ.n)(this, aW, 1.5)), this._volumeIndexOfRefraction = ((0, HQ.n)(this, lW), (0, HQ.n)(this, hW, -1)), this._invertRefractionY = ((0, HQ.n)(this, iW), !1), gQ.set(this, (0, HQ.n)(this, cW, !1)), this._linkRefractionWithTransparency = ((0, HQ.n)(this, AW), !1), JQ.set(this, (0, HQ.n)(this, RW, !1)), this.minimumThickness = ((0, HQ.n)(this, EW), (0, HQ.n)(this, CW, 0)), this.maximumThickness = ((0, HQ.n)(this, uW), (0, HQ.n)(this, LW, 1)), this.useThicknessAsDepth = ((0, HQ.n)(this, kW), (0, HQ.n)(this, fW, !1)), this.tintColor = ((0, HQ.n)(this, SW), (0, HQ.n)(this, tW, xQ.b.White())), this.tintColorAtDistance = ((0, HQ.n)(this, oW), (0, HQ.n)(this, eW, 1)), this.dispersion = ((0, HQ.n)(this, nW), (0, HQ.n)(this, xW, 0)), this.diffusionDistance = ((0, HQ.n)(this, YW), (0, HQ.n)(this, NW, xQ.b.White())), this._useMaskFromThicknessTexture = ((0, HQ.n)(this, ZW), !1), rQ.set(this, (0, HQ.n)(this, OW, !1)), this._refractionIntensityTexture = ((0, HQ.n)(this, KW), null), IQ.set(this, (0, HQ.n)(this, mW, null)), this._translucencyIntensityTexture = ((0, HQ.n)(this, MW), null), jQ.set(this, (0, HQ.n)(this, QX, null)), this.translucencyColor = ((0, HQ.n)(this, WX), (0, HQ.n)(this, XX, null)), this._translucencyColorTexture = ((0, HQ.n)(this, wX), null), BQ.set(this, (0, HQ.n)(this, qX, null)), this._useGltfStyleTextures = ((0, HQ.n)(this, TX), !0), yQ.set(this, (0, HQ.n)(this, zX, !0)), this.applyAlbedoAfterSubSurface = ((0, HQ.n)(this, sX), (0, HQ.n)(this, FX, QQ.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, HQ.n)(this, PX), (0, HQ.n)(this, gX, QQ.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, HQ.n)(this, JX), this._scene = VQ.sE(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = VQ._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = VQ._dirtyCallbacks[32]
        }
        isReadyForSubMesh(QQ, WQ) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (QQ._areTexturesDirty && WQ.texturesEnabled) {
            if (this._thicknessTexture && OQ.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && OQ.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && OQ.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && OQ.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const QQ = this._getRefractionTexture(WQ);
            if (QQ && OQ.e.RefractionTextureEnabled && !QQ.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(QQ, WQ) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return QQ.SUBSURFACE = !1, QQ.SS_DISPERSION = !1, QQ.SS_TRANSLUCENCY = !1, QQ.SS_SCATTERING = !1, QQ.SS_REFRACTION = !1, QQ.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, QQ.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, QQ.SS_THICKNESSANDMASK_TEXTURE = !1, QQ.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, QQ.SS_HAS_THICKNESS = !1, QQ.SS_REFRACTIONINTENSITY_TEXTURE = !1, QQ.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, QQ.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, QQ.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, QQ.SS_REFRACTIONMAP_3D = !1, QQ.SS_REFRACTIONMAP_OPPOSITEZ = !1, QQ.SS_LODINREFRACTIONALPHA = !1, QQ.SS_GAMMAREFRACTION = !1, QQ.SS_RGBDREFRACTION = !1, QQ.SS_LINEARSPECULARREFRACTION = !1, QQ.SS_LINKREFRACTIONTOTRANSPARENCY = !1, QQ.SS_ALBEDOFORREFRACTIONTINT = !1, QQ.SS_ALBEDOFORTRANSLUCENCYTINT = !1, QQ.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, QQ.SS_USE_THICKNESS_AS_DEPTH = !1, QQ.SS_USE_GLTF_TEXTURES = !1, QQ.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, QQ.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, QQ.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(QQ.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (QQ._areTexturesDirty) {
            if (QQ.SUBSURFACE = !0, QQ.SS_DISPERSION = this._isDispersionEnabled, QQ.SS_TRANSLUCENCY = this._isTranslucencyEnabled, QQ.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, QQ.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, QQ.SS_SCATTERING = this._isScatteringEnabled, QQ.SS_THICKNESSANDMASK_TEXTURE = !1, QQ.SS_REFRACTIONINTENSITY_TEXTURE = !1, QQ.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, QQ.SS_HAS_THICKNESS = !1, QQ.SS_USE_GLTF_TEXTURES = !1, QQ.SS_REFRACTION = !1, QQ.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, QQ.SS_REFRACTIONMAP_3D = !1, QQ.SS_GAMMAREFRACTION = !1, QQ.SS_RGBDREFRACTION = !1, QQ.SS_LINEARSPECULARREFRACTION = !1, QQ.SS_REFRACTIONMAP_OPPOSITEZ = !1, QQ.SS_LODINREFRACTIONALPHA = !1, QQ.SS_LINKREFRACTIONTOTRANSPARENCY = !1, QQ.SS_ALBEDOFORREFRACTIONTINT = !1, QQ.SS_ALBEDOFORTRANSLUCENCYTINT = !1, QQ.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, QQ.SS_USE_THICKNESS_AS_DEPTH = !1, QQ.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, QQ.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, QQ._areTexturesDirty && WQ.texturesEnabled && (this._thicknessTexture && OQ.e.ThicknessTextureEnabled && (0, mQ.db)(this._thicknessTexture, QQ, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && OQ.e.RefractionIntensityTextureEnabled && (0, mQ.db)(this._refractionIntensityTexture, QQ, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && OQ.e.TranslucencyIntensityTextureEnabled && (0, mQ.db)(this._translucencyIntensityTexture, QQ, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && OQ.e.TranslucencyColorTextureEnabled && ((0, mQ.db)(this._translucencyColorTexture, QQ, "SS_TRANSLUCENCYCOLOR_TEXTURE"), QQ.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), QQ.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, QQ.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, QQ.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, QQ.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && WQ.texturesEnabled) {
              const XQ = this._getRefractionTexture(WQ);
              XQ && OQ.e.RefractionTextureEnabled && (QQ.SS_REFRACTION = !0, QQ.SS_REFRACTIONMAP_3D = XQ.isCube, QQ.SS_GAMMAREFRACTION = XQ.gammaSpace, QQ.SS_RGBDREFRACTION = XQ.isRGBD, QQ.SS_LINEARSPECULARREFRACTION = XQ.linearSpecularLOD, QQ.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && XQ.isCube ? !XQ.invertZ : XQ.invertZ, QQ.SS_LODINREFRACTIONALPHA = XQ.lodLevelInAlpha, QQ.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, QQ.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, QQ.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = XQ.isCube && XQ.boundingBoxSize, QQ.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (QQ.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(QQ, WQ, XQ, wQ) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) QQ.updateFloat2("vThicknessParam", 0, 0);
            else {
              wQ.getRenderingMesh().getWorldMatrix().decompose(kQ.m.vj[0]);
              const WQ = Math.max(Math.abs(kQ.m.vj[0].x), Math.abs(kQ.m.vj[0].y), Math.abs(kQ.m.vj[0].z));
              QQ.updateFloat2("vThicknessParam", this.minimumThickness * WQ, (this.maximumThickness - this.minimumThickness) * WQ)
            }
        }
        bindForSubMesh(QQ, WQ, XQ, wQ) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const qQ = wQ.materialDefines,
            TQ = this._material.isFrozen,
            zQ = this._material.realTimeFiltering,
            sQ = qQ.LODBASEDMICROSFURACE,
            FQ = this._getRefractionTexture(WQ);
          if (!QQ.useUbo || !TQ || !QQ.isSync) {
            if (this._thicknessTexture && OQ.e.ThicknessTextureEnabled && (QQ.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, mQ.E)(this._thicknessTexture, QQ, "thickness")), this._refractionIntensityTexture && OQ.e.RefractionIntensityTextureEnabled && qQ.SS_REFRACTIONINTENSITY_TEXTURE && (QQ.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, mQ.E)(this._refractionIntensityTexture, QQ, "refractionIntensity")), this._translucencyColorTexture && OQ.e.TranslucencyColorTextureEnabled && qQ.SS_TRANSLUCENCYCOLOR_TEXTURE && (QQ.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, mQ.E)(this._translucencyColorTexture, QQ, "translucencyColor")), this._translucencyIntensityTexture && OQ.e.TranslucencyIntensityTextureEnabled && qQ.SS_TRANSLUCENCYINTENSITY_TEXTURE && (QQ.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, mQ.E)(this._translucencyIntensityTexture, QQ, "translucencyIntensity")), FQ && OQ.e.RefractionTextureEnabled) {
              QQ.N_("refractionMatrix", FQ.getRefractionTextureMatrix());
              let WQ = 1;
              FQ.isCube || FQ.depth && (WQ = FQ.depth);
              const XQ = FQ.getSize().width,
                wQ = this.volumeIndexOfRefraction;
              if (QQ.updateFloat4("vRefractionInfos", FQ.level, 1 / wQ, WQ, this._invertRefractionY ? -1 : 1), QQ.updateFloat4("vRefractionMicrosurfaceInfos", XQ, FQ.lodGenerationScale, FQ.lodGenerationOffset, 1 / this.indexOfRefraction), zQ && QQ.updateFloat2("vRefractionFilteringInfo", XQ, Math.log2(XQ)), FQ.boundingBoxSize) {
                const WQ = FQ;
                QQ.updateVector3("vRefractionPosition", WQ.boundingBoxPosition), QQ.updateVector3("vRefractionSize", WQ.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && QQ.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), QQ.updateColor3("vDiffusionDistance", this.diffusionDistance), QQ.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), QQ.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), QQ.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), QQ.updateFloat("dispersion", this.dispersion)
          }
          WQ.texturesEnabled && (this._thicknessTexture && OQ.e.ThicknessTextureEnabled && QQ.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && OQ.e.RefractionIntensityTextureEnabled && qQ.SS_REFRACTIONINTENSITY_TEXTURE && QQ.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && OQ.e.TranslucencyIntensityTextureEnabled && qQ.SS_TRANSLUCENCYINTENSITY_TEXTURE && QQ.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && OQ.e.TranslucencyColorTextureEnabled && qQ.SS_TRANSLUCENCYCOLOR_TEXTURE && QQ.setTexture("translucencyColorSampler", this._translucencyColorTexture), FQ && OQ.e.RefractionTextureEnabled && (sQ ? QQ.setTexture("refractionSampler", FQ) : (QQ.setTexture("refractionSampler", FQ._lodTextureMid || FQ), QQ.setTexture("refractionSamplerLow", FQ._lodTextureLow || FQ), QQ.setTexture("refractionSamplerHigh", FQ._lodTextureHigh || FQ))))
        }
        _getRefractionTexture(QQ) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? QQ.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(QQ) {
          OQ.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && QQ.push(this._refractionTexture)
        }
        hasTexture(QQ) {
          return this._thicknessTexture === QQ || (this._refractionTexture === QQ || (this._refractionIntensityTexture === QQ || (this._translucencyIntensityTexture === QQ || this._translucencyColorTexture === QQ)))
        }
        hasRenderTargetTextures() {
          return !!(OQ.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(QQ, WQ, XQ) {
          return QQ.SS_SCATTERING && WQ.addFallback(XQ++, "SS_SCATTERING"), QQ.SS_TRANSLUCENCY && WQ.addFallback(XQ++, "SS_TRANSLUCENCY"), XQ
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
      }, WQ = new WeakMap, XQ = new WeakMap, wQ = new WeakMap, qQ = new WeakMap, TQ = new WeakMap, zQ = new WeakMap, sQ = new WeakMap, FQ = new WeakMap, PQ = new WeakMap, gQ = new WeakMap, JQ = new WeakMap, rQ = new WeakMap, IQ = new WeakMap, jQ = new WeakMap, BQ = new WeakMap, yQ = new WeakMap, (() => {
        const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(XW[Symbol.metadata] ?? null) : void 0;
        VQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], DQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], pQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], GQ = [(0, aQ.I)(), (0, aQ.e)("_markScenePrePassDirty")], UQ = [(0, aQ.I)()], bQ = [(0, aQ.I)()], vQ = [(0, aQ.I)()], dQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], lQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], hQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], iQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], cQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], AQ = [(0, aQ.I)()], RQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], EQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], CQ = [(0, aQ.I)()], uQ = [(0, aQ.I)()], LQ = [(0, aQ.I)()], fQ = [(0, aQ.l)()], SQ = [(0, aQ.I)()], oQ = [(0, aQ.I)()], eQ = [(0, aQ.l)()], nQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], YQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], NQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], ZQ = [(0, aQ.l)()], KQ = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], MQ = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], QW = [(0, aQ.I)()], WW = [(0, aQ.I)()], (0, HQ.k)(QQ, null, VQ, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isRefractionEnabled" in QQ,
            get: QQ => QQ.isRefractionEnabled,
            set: (QQ, WQ) => {
              QQ.isRefractionEnabled = WQ
            }
          },
          metadata: WQ
        }, wW, qW), (0, HQ.k)(QQ, null, DQ, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isTranslucencyEnabled" in QQ,
            get: QQ => QQ.isTranslucencyEnabled,
            set: (QQ, WQ) => {
              QQ.isTranslucencyEnabled = WQ
            }
          },
          metadata: WQ
        }, TW, zW), (0, HQ.k)(QQ, null, pQ, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isDispersionEnabled" in QQ,
            get: QQ => QQ.isDispersionEnabled,
            set: (QQ, WQ) => {
              QQ.isDispersionEnabled = WQ
            }
          },
          metadata: WQ
        }, FW, PW), (0, HQ.k)(QQ, null, GQ, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isScatteringEnabled" in QQ,
            get: QQ => QQ.isScatteringEnabled,
            set: (QQ, WQ) => {
              QQ.isScatteringEnabled = WQ
            }
          },
          metadata: WQ
        }, gW, JW), (0, HQ.k)(QQ, null, dQ, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAlbedoToTintRefraction" in QQ,
            get: QQ => QQ.useAlbedoToTintRefraction,
            set: (QQ, WQ) => {
              QQ.useAlbedoToTintRefraction = WQ
            }
          },
          metadata: WQ
        }, DW, pW), (0, HQ.k)(QQ, null, lQ, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAlbedoToTintTranslucency" in QQ,
            get: QQ => QQ.useAlbedoToTintTranslucency,
            set: (QQ, WQ) => {
              QQ.useAlbedoToTintTranslucency = WQ
            }
          },
          metadata: WQ
        }, GW, UW), (0, HQ.k)(QQ, null, hQ, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "thicknessTexture" in QQ,
            get: QQ => QQ.thicknessTexture,
            set: (QQ, WQ) => {
              QQ.thicknessTexture = WQ
            }
          },
          metadata: WQ
        }, bW, vW), (0, HQ.k)(QQ, null, iQ, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "refractionTexture" in QQ,
            get: QQ => QQ.refractionTexture,
            set: (QQ, WQ) => {
              QQ.refractionTexture = WQ
            }
          },
          metadata: WQ
        }, dW, HW), (0, HQ.k)(QQ, null, cQ, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "indexOfRefraction" in QQ,
            get: QQ => QQ.indexOfRefraction,
            set: (QQ, WQ) => {
              QQ.indexOfRefraction = WQ
            }
          },
          metadata: WQ
        }, aW, lW), (0, HQ.k)(QQ, null, RQ, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: QQ => "invertRefractionY" in QQ,
            get: QQ => QQ.invertRefractionY,
            set: (QQ, WQ) => {
              QQ.invertRefractionY = WQ
            }
          },
          metadata: WQ
        }, cW, AW), (0, HQ.k)(QQ, null, EQ, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: QQ => "linkRefractionWithTransparency" in QQ,
            get: QQ => QQ.linkRefractionWithTransparency,
            set: (QQ, WQ) => {
              QQ.linkRefractionWithTransparency = WQ
            }
          },
          metadata: WQ
        }, RW, EW), (0, HQ.k)(QQ, null, nQ, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useMaskFromThicknessTexture" in QQ,
            get: QQ => QQ.useMaskFromThicknessTexture,
            set: (QQ, WQ) => {
              QQ.useMaskFromThicknessTexture = WQ
            }
          },
          metadata: WQ
        }, OW, KW), (0, HQ.k)(QQ, null, YQ, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "refractionIntensityTexture" in QQ,
            get: QQ => QQ.refractionIntensityTexture,
            set: (QQ, WQ) => {
              QQ.refractionIntensityTexture = WQ
            }
          },
          metadata: WQ
        }, mW, MW), (0, HQ.k)(QQ, null, NQ, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "translucencyIntensityTexture" in QQ,
            get: QQ => QQ.translucencyIntensityTexture,
            set: (QQ, WQ) => {
              QQ.translucencyIntensityTexture = WQ
            }
          },
          metadata: WQ
        }, QX, WX), (0, HQ.k)(QQ, null, KQ, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "translucencyColorTexture" in QQ,
            get: QQ => QQ.translucencyColorTexture,
            set: (QQ, WQ) => {
              QQ.translucencyColorTexture = WQ
            }
          },
          metadata: WQ
        }, qX, TX), (0, HQ.k)(QQ, null, MQ, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useGltfStyleTextures" in QQ,
            get: QQ => QQ.useGltfStyleTextures,
            set: (QQ, WQ) => {
              QQ.useGltfStyleTextures = WQ
            }
          },
          metadata: WQ
        }, zX, sX), (0, HQ.k)(null, null, UQ, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_scatteringDiffusionProfileIndex" in QQ,
            get: QQ => QQ._scatteringDiffusionProfileIndex,
            set: (QQ, WQ) => {
              QQ._scatteringDiffusionProfileIndex = WQ
            }
          },
          metadata: WQ
        }, rW, IW), (0, HQ.k)(null, null, bQ, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "refractionIntensity" in QQ,
            get: QQ => QQ.refractionIntensity,
            set: (QQ, WQ) => {
              QQ.refractionIntensity = WQ
            }
          },
          metadata: WQ
        }, jW, BW), (0, HQ.k)(null, null, vQ, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "translucencyIntensity" in QQ,
            get: QQ => QQ.translucencyIntensity,
            set: (QQ, WQ) => {
              QQ.translucencyIntensity = WQ
            }
          },
          metadata: WQ
        }, yW, VW), (0, HQ.k)(null, null, AQ, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_volumeIndexOfRefraction" in QQ,
            get: QQ => QQ._volumeIndexOfRefraction,
            set: (QQ, WQ) => {
              QQ._volumeIndexOfRefraction = WQ
            }
          },
          metadata: WQ
        }, hW, iW), (0, HQ.k)(null, null, CQ, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "minimumThickness" in QQ,
            get: QQ => QQ.minimumThickness,
            set: (QQ, WQ) => {
              QQ.minimumThickness = WQ
            }
          },
          metadata: WQ
        }, CW, uW), (0, HQ.k)(null, null, uQ, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "maximumThickness" in QQ,
            get: QQ => QQ.maximumThickness,
            set: (QQ, WQ) => {
              QQ.maximumThickness = WQ
            }
          },
          metadata: WQ
        }, LW, kW), (0, HQ.k)(null, null, LQ, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useThicknessAsDepth" in QQ,
            get: QQ => QQ.useThicknessAsDepth,
            set: (QQ, WQ) => {
              QQ.useThicknessAsDepth = WQ
            }
          },
          metadata: WQ
        }, fW, SW), (0, HQ.k)(null, null, fQ, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintColor" in QQ,
            get: QQ => QQ.tintColor,
            set: (QQ, WQ) => {
              QQ.tintColor = WQ
            }
          },
          metadata: WQ
        }, tW, oW), (0, HQ.k)(null, null, SQ, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "tintColorAtDistance" in QQ,
            get: QQ => QQ.tintColorAtDistance,
            set: (QQ, WQ) => {
              QQ.tintColorAtDistance = WQ
            }
          },
          metadata: WQ
        }, eW, nW), (0, HQ.k)(null, null, oQ, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "dispersion" in QQ,
            get: QQ => QQ.dispersion,
            set: (QQ, WQ) => {
              QQ.dispersion = WQ
            }
          },
          metadata: WQ
        }, xW, YW), (0, HQ.k)(null, null, eQ, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "diffusionDistance" in QQ,
            get: QQ => QQ.diffusionDistance,
            set: (QQ, WQ) => {
              QQ.diffusionDistance = WQ
            }
          },
          metadata: WQ
        }, NW, ZW), (0, HQ.k)(null, null, ZQ, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "translucencyColor" in QQ,
            get: QQ => QQ.translucencyColor,
            set: (QQ, WQ) => {
              QQ.translucencyColor = WQ
            }
          },
          metadata: WQ
        }, XX, wX), (0, HQ.k)(null, null, QW, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: QQ => "applyAlbedoAfterSubSurface" in QQ,
            get: QQ => QQ.applyAlbedoAfterSubSurface,
            set: (QQ, WQ) => {
              QQ.applyAlbedoAfterSubSurface = WQ
            }
          },
          metadata: WQ
        }, FX, PX), (0, HQ.k)(null, null, WW, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: QQ => "legacyTranslucency" in QQ,
            get: QQ => QQ.legacyTranslucency,
            set: (QQ, WQ) => {
              QQ.legacyTranslucency = WQ
            }
          },
          metadata: WQ
        }, gX, JX), WQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WQ
        })
      })(), QQ.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, QQ.DEFAULT_LEGACY_TRANSLUCENCY = !1, QQ
    })();
    var PW = XQ(40608),
      gW = XQ(40589),
      JW = XQ(40621),
      rW = XQ(40623),
      IW = XQ(40628),
      jW = XQ(40632),
      BW = XQ(40636),
      yW = XQ(40640),
      VW = XQ(40153);
    const DW = {
      effect: null,
      subMesh: null
    };
    class pW extends((0, BW.e)((0, jW.b)(SQ.e))) {}
    class GW extends((0, YQ.d)(pW)) {
      constructor(QQ) {
        super(QQ), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class UW extends((0, yW.e)(ZQ.d)) {}
    let bW = (() => {
      var QQ, WQ;
      let wQ, qQ = UW,
        zQ = [],
        sQ = [];
      return QQ = class extends qQ {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(QQ) {
          this._realTimeFiltering = QQ, this.KWQ(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(QQ) {
          this._realTimeFilteringQuality = QQ, this.KWQ(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, HQ.d)(this, WQ, "f")
        }
        set debugMode(QQ) {
          (0, HQ.h)(this, WQ, QQ, "f")
        }
        constructor(XQ, wQ) {
          super(XQ, wQ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || QQ.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new kQ.w(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = QQ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = xQ.b.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new xQ.b(0, 0, 0), this._albedoColor = new xQ.b(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new xQ.b(1, 1, 1), this._reflectionColor = new xQ.b(1, 1, 1), this._emissiveColor = new xQ.b(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = QQ.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new hQ.e(16), this._globalAmbientColor = new xQ.b(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, WQ.set(this, (0, HQ.n)(this, zQ, 0)), this.debugLimit = ((0, HQ.n)(this, sQ), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new eQ(this), this.clearCoat = new QW(this), this.iridescence = new XW(this), this.anisotropy = new qW(this), this.sheen = new zW(this), this.subSurface = new FW(this), this.detailMap = new PW.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), OQ.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = EQ(this.sE()), this.prePassConfiguration = new nQ.e
        }
        get hasRenderTargetTextures() {
          return !!(OQ.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(QQ, WQ, XQ) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const wQ = WQ._drawWrapper;
          if (wQ.effect && this.isFrozen && wQ._wasPreviouslyReady && wQ._wasPreviouslyUsingInstances === XQ) return !0;
          WQ.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), WQ.materialDefines = new GW(this._eventInfo.defineNames));
          const qQ = WQ.materialDefines;
          if (this._isReadyForSubMesh(WQ)) return !0;
          const TQ = this.sE(),
            zQ = TQ.Uj();
          if (qQ._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, TQ.texturesEnabled)) {
            if (this._albedoTexture && OQ.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && OQ.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && OQ.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && OQ.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && OQ.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const QQ = this._getReflectionTexture();
            if (QQ && OQ.e.ReflectionTextureEnabled) {
              if (!QQ.isReadyOrNotBlocking()) return !1;
              if (QQ.irradianceTexture) {
                if (!QQ.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!QQ.sphericalPolynomial && QQ.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && OQ.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && OQ.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (OQ.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (zQ.getCaps().standardDerivatives && this._bumpTexture && OQ.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && OQ.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = qQ, this._eventInfo.subMesh = WQ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (qQ._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (qQ.AREALIGHTUSED || qQ.CLUSTLIGHT_BATCH)
            for (let JQ = 0; JQ < QQ.lightSources.length; JQ++)
              if (!QQ.lightSources[JQ]._isReady()) return !1;
          if (zQ.getCaps().standardDerivatives || QQ.isVerticesDataPresent(fQ.l.NormalKind) || (QQ.createNormals(!0), lQ.b.Warn("PBRMaterial: Normals have been created for the mesh: " + QQ.name)), !(0, mQ.e)(TQ, QQ, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const sQ = WQ.effect,
            FQ = qQ._areLightsDisposed,
            PQ = this._prepareEffect(QQ, WQ.getRenderingMesh(), qQ, this.onCompiled, this.onError, XQ, null);
          let gQ = !1;
          if (PQ)
            if (this._onEffectCreatedObservable && (DW.effect = PQ, DW.subMesh = WQ, this._onEffectCreatedObservable.notifyObservers(DW)), this.allowShaderHotSwapping && sQ && !PQ.isReady()) {
              if (qQ.markAsUnprocessed(), gQ = this.isFrozen, FQ) return qQ._areLightsDisposed = !0, !1
            } else TQ.resetCachedMaterial(), WQ.setEffect(PQ, qQ, this._materialContext);
          return !(!WQ.effect || !WQ.effect.isReady()) && (qQ._renderId = TQ.getRenderId(), wQ._wasPreviouslyReady = !gQ, wQ._wasPreviouslyUsingInstances = !!XQ, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(WQ, XQ, wQ) {
          let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            sQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(WQ, XQ, wQ, zQ, sQ), !wQ.isDirty) return null;
          wQ.markAsProcessed();
          const FQ = this.sE().Uj(),
            PQ = new KQ.e;
          let gQ = 0;
          wQ.USESPHERICALINVERTEX && PQ.addFallback(gQ++, "USESPHERICALINVERTEX"), wQ.FOG && PQ.addFallback(gQ, "FOG"), wQ.SPECULARAA && PQ.addFallback(gQ, "SPECULARAA"), wQ.POINTSIZE && PQ.addFallback(gQ, "POINTSIZE"), wQ.LOGARITHMICDEPTH && PQ.addFallback(gQ, "LOGARITHMICDEPTH"), wQ.PARALLAX && PQ.addFallback(gQ, "PARALLAX"), wQ.PARALLAX_RHS && PQ.addFallback(gQ, "PARALLAX_RHS"), wQ.PARALLAXOCCLUSION && PQ.addFallback(gQ++, "PARALLAXOCCLUSION"), wQ.ENVIRONMENTBRDF && PQ.addFallback(gQ++, "ENVIRONMENTBRDF"), wQ.TANGENT && PQ.addFallback(gQ++, "TANGENT"), wQ.BUMP && PQ.addFallback(gQ++, "BUMP"), gQ = (0, mQ.G)(wQ, PQ, this._maxSimultaneousLights, gQ), wQ.SPECULARTERM && PQ.addFallback(gQ++, "SPECULARTERM"), wQ.USESPHERICALFROMREFLECTIONMAP && PQ.addFallback(gQ++, "USESPHERICALFROMREFLECTIONMAP"), wQ.USEIRRADIANCEMAP && PQ.addFallback(gQ++, "USEIRRADIANCEMAP"), wQ.LIGHTMAP && PQ.addFallback(gQ++, "LIGHTMAP"), wQ.NORMAL && PQ.addFallback(gQ++, "NORMAL"), wQ.AMBIENT && PQ.addFallback(gQ++, "AMBIENT"), wQ.EMISSIVE && PQ.addFallback(gQ++, "EMISSIVE"), wQ.VERTEXCOLOR && PQ.addFallback(gQ++, "VERTEXCOLOR"), wQ.MORPHTARGETS && PQ.addFallback(gQ++, "MORPHTARGETS"), wQ.MULTIVIEW && PQ.addFallback(0, "MULTIVIEW");
          const JQ = [fQ.l.PositionKind];
          wQ.NORMAL && JQ.push(fQ.l.NormalKind), wQ.TANGENT && JQ.push(fQ.l.TangentKind);
          for (let QQ = 1; QQ <= 6; ++QQ) wQ["UV" + QQ] && JQ.push(`uv${1===QQ?"":QQ}`);
          wQ.VERTEXCOLOR && JQ.push(fQ.l.ColorKind), (0, mQ.N)(JQ, WQ, wQ, PQ), (0, mQ.R)(JQ, wQ), (0, mQ.S)(JQ, WQ, wQ), (0, mQ.J)(JQ, WQ, wQ);
          let rQ = "pbr";
          const IQ = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            jQ = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, mQ.rb)(IQ, jQ, !0);
          const BQ = ["Material", "Scene", "Mesh"],
            yQ = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: wQ.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = PQ, this._eventInfo.fallbackRank = gQ, this._eventInfo.defines = wQ, this._eventInfo.uniforms = IQ, this._eventInfo.attributes = JQ, this._eventInfo.samplers = jQ, this._eventInfo.uniformBuffersNames = BQ, this._eventInfo.customCode = void 0, this._eventInfo.mesh = WQ, this._eventInfo.indexParameters = yQ, this._callbackPluginEventGeneric(128, this._eventInfo), IW.d.AddUniformsAndSamplers(IQ, jQ), nQ.e.AddUniforms(IQ), nQ.e.AddSamplers(jQ), (0, gW.c)(IQ), this._useVertexPulling) {
            const QQ = XQ?.geometry;
            QQ && (this._vertexPullingMetadata = (0, JW.d)(QQ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((QQ, WQ) => {
              IQ.push(`vp_${WQ}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          NQ.c && (NQ.c.PrepareUniforms(IQ, wQ), NQ.c.PrepareSamplers(jQ, wQ)), (0, mQ.tb)({
            uniformsNames: IQ,
            uniformBuffersNames: BQ,
            samplers: jQ,
            defines: wQ,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const VQ = {};
          this.customShaderNameResolve && (rQ = this.customShaderNameResolve(rQ, IQ, BQ, jQ, wQ, JQ, VQ));
          const DQ = wQ.toString(),
            pQ = FQ.createEffect(rQ, {
              attributes: JQ,
              uniformsNames: IQ,
              uniformBuffersNames: BQ,
              samplers: jQ,
              defines: DQ,
              fallbacks: PQ,
              onCompiled: qQ,
              onError: TQ,
              indexParameters: yQ,
              processFinalCode: VQ.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: wQ.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: QQ._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, FQ);
          return this._eventInfo.customCode = void 0, pQ
        }
        _prepareDefines(WQ, XQ, wQ) {
          let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const zQ = XQ.hasThinInstances,
            sQ = this.sE(),
            FQ = sQ.Uj();
          (0, mQ.ab)(sQ, WQ, wQ, !0, this._maxSimultaneousLights, this._disableLighting), wQ._needNormals = !0, (0, mQ.hb)(sQ, wQ);
          const PQ = this.needAlphaBlendingForMesh(WQ) && this.sE().useOrderIndependentTransparency;
          if ((0, mQ.mb)(sQ, wQ, this.canRenderToMRT && !PQ), (0, mQ.jb)(sQ, wQ, PQ), IW.d.PrepareDefines(FQ.currentRenderPassId, WQ, wQ), wQ.METALLICWORKFLOW = this.isMetallicWorkflow(), wQ._areTexturesDirty) {
            wQ._needUVs = !1;
            for (let QQ = 1; QQ <= 6; ++QQ) wQ["MAINUV" + QQ] = !1;
            if (sQ.texturesEnabled) {
              wQ.ALBEDODIRECTUV = 0, wQ.BASE_WEIGHTDIRECTUV = 0, wQ.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, wQ.AMBIENTDIRECTUV = 0, wQ.OPACITYDIRECTUV = 0, wQ.EMISSIVEDIRECTUV = 0, wQ.REFLECTIVITYDIRECTUV = 0, wQ.MICROSURFACEMAPDIRECTUV = 0, wQ.METALLIC_REFLECTANCEDIRECTUV = 0, wQ.REFLECTANCEDIRECTUV = 0, wQ.BUMPDIRECTUV = 0, wQ.LIGHTMAPDIRECTUV = 0, FQ.getCaps().textureLOD && (wQ.LODBASEDMICROSFURACE = !0), this._albedoTexture && OQ.e.DiffuseTextureEnabled ? ((0, mQ.db)(this._albedoTexture, wQ, "ALBEDO"), wQ.GAMMAALBEDO = this._albedoTexture.gammaSpace) : wQ.ALBEDO = !1, this._baseWeightTexture && OQ.e.BaseWeightTextureEnabled ? (0, mQ.db)(this._baseWeightTexture, wQ, "BASE_WEIGHT") : wQ.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && OQ.e.BaseDiffuseRoughnessTextureEnabled ? (0, mQ.db)(this._baseDiffuseRoughnessTexture, wQ, "BASE_DIFFUSE_ROUGHNESS") : wQ.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && OQ.e.AmbientTextureEnabled ? ((0, mQ.db)(this._ambientTexture, wQ, "AMBIENT"), wQ.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : wQ.AMBIENT = !1, this._opacityTexture && OQ.e.OpacityTextureEnabled ? ((0, mQ.db)(this._opacityTexture, wQ, "OPACITY"), wQ.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : wQ.OPACITY = !1;
              const QQ = this._getReflectionTexture(),
                WQ = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || FQ.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, mQ.$)(sQ, QQ, wQ, this.realTimeFiltering, this.realTimeFilteringQuality, !WQ), this._lightmapTexture && OQ.e.LightmapTextureEnabled ? ((0, mQ.db)(this._lightmapTexture, wQ, "LIGHTMAP"), wQ.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, wQ.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, wQ.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : wQ.LIGHTMAP = !1, this._emissiveTexture && OQ.e.EmissiveTextureEnabled ? ((0, mQ.db)(this._emissiveTexture, wQ, "EMISSIVE"), wQ.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : wQ.EMISSIVE = !1, OQ.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, mQ.db)(this._metallicTexture, wQ, "REFLECTIVITY"), wQ.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, wQ.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, wQ.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, wQ.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, wQ.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, mQ.db)(this._reflectivityTexture, wQ, "REFLECTIVITY"), wQ.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, wQ.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, wQ.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : wQ.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (wQ.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, mQ.db)(this._metallicReflectanceTexture, wQ, "METALLIC_REFLECTANCE"), wQ.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : wQ.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, mQ.db)(this._reflectanceTexture, wQ, "REFLECTANCE"), wQ.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : wQ.REFLECTANCE = !1) : (wQ.METALLIC_REFLECTANCE = !1, wQ.REFLECTANCE = !1), this._microSurfaceTexture ? (0, mQ.db)(this._microSurfaceTexture, wQ, "MICROSURFACEMAP") : wQ.MICROSURFACEMAP = !1) : (wQ.REFLECTIVITY = !1, wQ.MICROSURFACEMAP = !1), FQ.getCaps().standardDerivatives && this._bumpTexture && OQ.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, mQ.db)(this._bumpTexture, wQ, "BUMP"), this._useParallax && this._albedoTexture && OQ.e.DiffuseTextureEnabled ? (wQ.PARALLAX = !0, wQ.PARALLAX_RHS = sQ.useRightHandedSystem, wQ.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : wQ.PARALLAX = !1, wQ.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (wQ.BUMP = !1, wQ.PARALLAX = !1, wQ.PARALLAX_RHS = !1, wQ.PARALLAXOCCLUSION = !1, wQ.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && OQ.e.ReflectionTextureEnabled ? (wQ.ENVIRONMENTBRDF = !0, wQ.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (wQ.ENVIRONMENTBRDF = !1, wQ.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? wQ.ALPHAFROMALBEDO = !0 : wQ.ALPHAFROMALBEDO = !1
            }
            wQ.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === QQ.LIGHTFALLOFF_STANDARD ? (wQ.USEPHYSICALLIGHTFALLOFF = !1, wQ.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === QQ.LIGHTFALLOFF_GLTF ? (wQ.USEPHYSICALLIGHTFALLOFF = !1, wQ.USEGLTFLIGHTFALLOFF = !0) : (wQ.USEPHYSICALLIGHTFALLOFF = !0, wQ.USEGLTFLIGHTFALLOFF = !1), wQ.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? wQ.TWOSIDEDLIGHTING = !0 : wQ.TWOSIDEDLIGHTING = !1, wQ.MIRRORED = !!sQ._mirroredCameraPosition, wQ.SPECULARAA = FQ.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(wQ._areTexturesDirty || wQ._areMiscDirty) && (wQ.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, wQ.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, wQ.ALPHABLEND = this.needAlphaBlendingForMesh(WQ), wQ.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, wQ.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), wQ._areTexturesDirty && (wQ.TEXTURE_REPETITION_MODE = FQ.version > 1 || FQ.isWebGPU ? this.textureRepetitionMode : 0), wQ._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(wQ), wQ.FORCENORMALFORWARD = this._forceNormalForward, wQ.RADIANCEOCCLUSION = this._useRadianceOcclusion, wQ.HORIZONOCCLUSION = this._useHorizonOcclusion, wQ._areMiscDirty && ((0, mQ.fb)(WQ, sQ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(WQ), wQ, this._applyDecalMapAfterDetailMap, this._useVertexPulling, XQ, this._isVertexOutputInvariant), wQ.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !WQ.isVerticesDataPresent(fQ.l.NormalKind), wQ.DEBUGMODE = this._debugMode), (0, mQ._)(sQ, FQ, this, wQ, !!qQ, TQ, zQ), this._eventInfo.defines = wQ, this._eventInfo.mesh = WQ, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, mQ.X)(WQ, wQ, !0, !0, !0, this._transparencyMode !== QQ.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(QQ, WQ, XQ) {
          const wQ = {
            clipPlane: !1,
            useInstances: !1,
            ...XQ
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const XQ = new GW(this._eventInfo.defineNames),
              qQ = this._prepareEffect(QQ, QQ, XQ, void 0, void 0, wQ.useInstances, wQ.clipPlane);
            this._onEffectCreatedObservable && (DW.effect = qQ, DW.subMesh = null, this._onEffectCreatedObservable.notifyObservers(DW)), qQ.isReady() ? WQ && WQ(this) : qQ.onCompileObservable.add((() => {
              WQ && WQ(this)
            }))
          })()
        }
        buildUniformLayout() {
          const QQ = this._uniformBuffer;
          QQ.addUniform("vAlbedoInfos", 2), QQ.addUniform("vBaseWeightInfos", 2), QQ.addUniform("vBaseDiffuseRoughnessInfos", 2), QQ.addUniform("vAmbientInfos", 4), QQ.addUniform("vOpacityInfos", 2), QQ.addUniform("vEmissiveInfos", 2), QQ.addUniform("vLightmapInfos", 2), QQ.addUniform("vReflectivityInfos", 3), QQ.addUniform("vMicroSurfaceSamplerInfos", 2), QQ.addUniform("vBumpInfos", 3), QQ.addUniform("albedoMatrix", 16), QQ.addUniform("baseWeightMatrix", 16), QQ.addUniform("baseDiffuseRoughnessMatrix", 16), QQ.addUniform("ambientMatrix", 16), QQ.addUniform("opacityMatrix", 16), QQ.addUniform("emissiveMatrix", 16), QQ.addUniform("lightmapMatrix", 16), QQ.addUniform("reflectivityMatrix", 16), QQ.addUniform("microSurfaceSamplerMatrix", 16), QQ.addUniform("bumpMatrix", 16), QQ.addUniform("vTangentSpaceParams", 2), QQ.addUniform("vAlbedoColor", 4), QQ.addUniform("baseWeight", 1), QQ.addUniform("baseDiffuseRoughness", 1), QQ.addUniform("vLightingIntensity", 4), QQ.addUniform("pointSize", 1), QQ.addUniform("vReflectivityColor", 4), QQ.addUniform("vEmissiveColor", 3), QQ.addUniform("vAmbientColor", 3), QQ.addUniform("vDebugMode", 2), QQ.addUniform("vMetallicReflectanceFactors", 4), QQ.addUniform("vMetallicReflectanceInfos", 2), QQ.addUniform("metallicReflectanceMatrix", 16), QQ.addUniform("vReflectanceInfos", 2), QQ.addUniform("reflectanceMatrix", 16), QQ.addUniform("cameraInfo", 4), QQ.addUniform("vTextureRepetitionHexTilingParams", 4), (0, mQ.nb)(QQ, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(QQ, WQ, XQ) {
          const wQ = this.sE(),
            qQ = XQ.materialDefines;
          if (!qQ) return;
          const TQ = XQ.effect;
          if (!TQ) return;
          this._activeEffect = TQ, WQ.getMeshUniformBuffer().bindToEffect(TQ, "Mesh"), WQ.transferToEffect(QQ);
          const zQ = wQ.Uj();
          this._uniformBuffer.bindToEffect(TQ, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, wQ, WQ, QQ, this.isFrozen), IW.d.Bind(zQ.currentRenderPassId, this._activeEffect, WQ, QQ, this);
          const sQ = wQ.activeCamera;
          sQ ? this._uniformBuffer.updateFloat4("cameraInfo", sQ.minZ, sQ.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const FQ = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", FQ[0], FQ[1], FQ[2], FQ[3]), this._eventInfo.subMesh = XQ, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), qQ.OBJECTSPACE_NORMALMAP && (QQ.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const PQ = this._mustRebind(wQ, TQ, XQ, WQ.visibility),
            gQ = zQ._features.needToAlwaysBindUniformBuffers;
          (0, mQ.i)(WQ, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, JW.c)(this._activeEffect, this._vertexPullingMetadata);
          let JQ = null;
          const rQ = this._uniformBuffer;
          if (PQ) {
            if (this.bindViewProjection(TQ), JQ = this._getReflectionTexture(), !rQ.useUbo || !this.isFrozen || !rQ.isSync || XQ._drawWrapper._forceRebindOnNextCall) {
              if (wQ.texturesEnabled && (this._albedoTexture && OQ.e.DiffuseTextureEnabled && (rQ.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, mQ.E)(this._albedoTexture, rQ, "albedo")), this._baseWeightTexture && OQ.e.BaseWeightTextureEnabled && (rQ.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, mQ.E)(this._baseWeightTexture, rQ, "baseWeight")), this._baseDiffuseRoughnessTexture && OQ.e.BaseDiffuseRoughnessTextureEnabled && (rQ.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, mQ.E)(this._baseDiffuseRoughnessTexture, rQ, "baseDiffuseRoughness")), this._ambientTexture && OQ.e.AmbientTextureEnabled && (rQ.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, mQ.E)(this._ambientTexture, rQ, "ambient")), this._opacityTexture && OQ.e.OpacityTextureEnabled && (rQ.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, mQ.E)(this._opacityTexture, rQ, "opacity")), this._emissiveTexture && OQ.e.EmissiveTextureEnabled && (rQ.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, mQ.E)(this._emissiveTexture, rQ, "emissive")), this._lightmapTexture && OQ.e.LightmapTextureEnabled && (rQ.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, mQ.E)(this._lightmapTexture, rQ, "lightmap")), OQ.e.SpecularTextureEnabled && (this._metallicTexture ? (rQ.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, mQ.E)(this._metallicTexture, rQ, "reflectivity")) : this._reflectivityTexture && (rQ.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, mQ.E)(this._reflectivityTexture, rQ, "reflectivity")), this._metallicReflectanceTexture && (rQ.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, mQ.E)(this._metallicReflectanceTexture, rQ, "metallicReflectance")), this._reflectanceTexture && qQ.REFLECTANCE && (rQ.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, mQ.E)(this._reflectanceTexture, rQ, "reflectance")), this._microSurfaceTexture && (rQ.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, mQ.E)(this._microSurfaceTexture, rQ, "microSurfaceSampler"))), this._bumpTexture && zQ.getCaps().standardDerivatives && OQ.e.BumpTextureEnabled && !this._disableBumpMap && (rQ.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, mQ.E)(this._bumpTexture, rQ, "bump"), wQ._mirroredCameraPosition ? rQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : rQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, mQ.p)(wQ, qQ, rQ, this._reflectionColor, JQ, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && rQ.updateFloat("pointSize", this.pointSize), qQ.METALLICWORKFLOW) {
                xQ.l.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, xQ.l.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const QQ = this.subSurface?._indexOfRefraction ?? 1.5,
                  WQ = 1;
                xQ.l.Color4[0].b = QQ;
                const XQ = Math.pow((QQ - WQ) / (QQ + WQ), 2);
                xQ.l.Color4[0].a = XQ, rQ.updateDirectColor4("vReflectivityColor", xQ.l.Color4[0]), rQ.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else rQ.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              rQ.updateColor3("vEmissiveColor", OQ.e.EmissiveTextureEnabled ? this._emissiveColor : xQ.b.BlackReadOnly), !qQ.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? rQ.updateColor4("vAlbedoColor", this._albedoColor, 1) : rQ.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), rQ.updateFloat("baseWeight", this._baseWeight), rQ.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * wQ.environmentIntensity, this._lightingInfos.w = this._specularIntensity, rQ.updateVector4("vLightingIntensity", this._lightingInfos), wQ.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), rQ.updateColor3("vAmbientColor", this._globalAmbientColor), rQ.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            wQ.texturesEnabled && (this._albedoTexture && OQ.e.DiffuseTextureEnabled && rQ.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && OQ.e.BaseWeightTextureEnabled && rQ.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && OQ.e.BaseDiffuseRoughnessTextureEnabled && rQ.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && OQ.e.AmbientTextureEnabled && rQ.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && OQ.e.OpacityTextureEnabled && rQ.setTexture("opacitySampler", this._opacityTexture), (0, mQ.r)(wQ, qQ, rQ, JQ, this.realTimeFiltering), qQ.ENVIRONMENTBRDF && rQ.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && OQ.e.EmissiveTextureEnabled && rQ.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && OQ.e.LightmapTextureEnabled && rQ.setTexture("lightmapSampler", this._lightmapTexture), OQ.e.SpecularTextureEnabled && (this._metallicTexture ? rQ.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && rQ.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && rQ.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && qQ.REFLECTANCE && rQ.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && rQ.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && zQ.getCaps().standardDerivatives && OQ.e.BumpTextureEnabled && !this._disableBumpMap && rQ.setTexture("bumpSampler", this._bumpTexture)), this.sE().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(WQ) && this.sE().depthPeelingRenderer.bind(TQ), this._eventInfo.subMesh = XQ, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, gW.d)(this._activeEffect, this, wQ), this.bindEyePosition(TQ)
          } else gQ && (this._needToBindSceneUbo = !0);
          !PQ && this.isFrozen && !gQ || !wQ.lightsEnabled || this._disableLighting || (0, mQ.t)(wQ, WQ, this._activeEffect, qQ, this._maxSimultaneousLights), !PQ && this.isFrozen || ((wQ.fogEnabled && WQ.applyFog && wQ.fogMode !== LQ.h.FOGMODE_NONE || JQ || this.subSurface.refractionTexture || WQ.receiveShadows || qQ.PREPASS || qQ.CLUSTLIGHT_BATCH) && this.bindView(TQ), (0, mQ.l)(wQ, WQ, this._activeEffect, !0), qQ.NUM_MORPH_INFLUENCERS && (0, mQ.A)(WQ, this._activeEffect), qQ.BAKED_VERTEX_ANIMATION_TEXTURE && WQ.bakedVertexAnimationManager?.bind(TQ, qQ.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, mQ.w)(qQ, this._activeEffect, wQ)), this._afterBind(WQ, this._activeEffect, XQ), rQ.update()
        }
        getAnimatables() {
          const QQ = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && QQ.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && QQ.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && QQ.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && QQ.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && QQ.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && QQ.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && QQ.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? QQ.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && QQ.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && QQ.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && QQ.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && QQ.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && QQ.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && QQ.push(this._microSurfaceTexture), QQ
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.sE().environmentTexture
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
          const QQ = this.sE().enableSubSurfaceForPrePass();
          return QQ && (QQ.enabled = !0), !0
        }
        dispose(QQ, WQ) {
          this._breakShaderLoadedCheck = !0, WQ && (this._environmentBRDFTexture && this.sE().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(QQ, WQ)
        }
      }, WQ = new WeakMap, (() => {
        const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(qQ[Symbol.metadata] ?? null) : void 0;
        wQ = [(0, aQ.e)("_markAllSubMeshesAsMiscDirty")], (0, HQ.k)(QQ, null, wQ, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "debugMode" in QQ,
            get: QQ => QQ.debugMode,
            set: (QQ, WQ) => {
              QQ.debugMode = WQ
            }
          },
          metadata: WQ
        }, zQ, sQ), WQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WQ
        })
      })(), QQ.PBRMATERIAL_OPAQUE = TQ.b.MATERIAL_OPAQUE, QQ.PBRMATERIAL_ALPHATEST = TQ.b.MATERIAL_ALPHATEST, QQ.PBRMATERIAL_ALPHABLEND = TQ.b.MATERIAL_ALPHABLEND, QQ.PBRMATERIAL_ALPHATESTANDBLEND = TQ.b.MATERIAL_ALPHATESTANDBLEND, QQ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, QQ.LIGHTFALLOFF_PHYSICAL = 0, QQ.LIGHTFALLOFF_GLTF = 1, QQ.LIGHTFALLOFF_STANDARD = 2, QQ.ForceGLSL = !1, QQ._ShaderLoader = new rW.e((() => [Promise.all([XQ.e(326), XQ.e(337)]).then((() => XQ(61797))), Promise.all([XQ.e(331), XQ.e(327), XQ.e(388), XQ.e(340), XQ.e(387)]).then((() => XQ(61823)))]), (() => [Promise.all([XQ.e(345), XQ.e(347), XQ.e(354)]).then((() => XQ(61895))), Promise.all([XQ.e(345), XQ.e(348), XQ.e(391), XQ.e(358), XQ.e(390)]).then((() => XQ(61922)))])), QQ
    })();
    Object.getOwnPropertyDescriptor(bW.prototype, "decalMap") || Object.defineProperty(bW.prototype, "decalMap", (0, VW.g)("PBRBaseMaterial", "decalMap")), (0, XQ(42083).b)();
    var vW = XQ(40286);
    var dW = XQ(40357),
      HW = XQ(42064),
      aW = XQ(40103),
      lW = XQ(40117),
      hW = XQ(40212);
    let iW = !1;
    const cW = new xQ.d,
      AW = new xQ.d;
    class RW extends HW.c {
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
          for (let WQ = 0; WQ < this._textures.length; WQ++) this._textures[WQ].wrapU = QQ
      }
      set wrapV(QQ) {
        if (this._textures)
          for (let WQ = 0; WQ < this._textures.length; WQ++) this._textures[WQ].wrapV = QQ
      }
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = !(!qQ || !qQ.generateMipMaps) && qQ.generateMipMaps,
          sQ = !(!qQ || !qQ.generateDepthTexture) && qQ.generateDepthTexture,
          FQ = qQ && qQ.depthTextureFormat ? qQ.depthTextureFormat : 15,
          PQ = !qQ || void 0 === qQ.doNotChangeAspectRatio || qQ.doNotChangeAspectRatio,
          gQ = !(!qQ || !qQ.drawOnlyOnFirstAttachmentByDefault) && qQ.drawOnlyOnFirstAttachmentByDefault;
        if (super(QQ, WQ, wQ, zQ, PQ, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), iW || (iW = !0, lW.ThinEngine.prototype.restoreSingleAttachment = function() {
            const QQ = this._gl;
            this.bindAttachments([QQ.BACK])
          }, lW.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const QQ = this._gl;
            this.bindAttachments([QQ.COLOR_ATTACHMENT0])
          }, lW.ThinEngine.prototype.buildTextureLayout = function(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const XQ = this._gl,
              wQ = [];
            if (WQ) wQ.push(XQ.BACK);
            else
              for (let qQ = 0; qQ < QQ.length; qQ++) QQ[qQ] ? wQ.push(XQ["COLOR_ATTACHMENT" + qQ]) : wQ.push(XQ.NONE);
            return wQ
          }, lW.ThinEngine.prototype.bindAttachments = function(QQ) {
            const WQ = this._gl,
              XQ = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, XQ)
              for (let wQ = 0; wQ < QQ.length; wQ++) QQ[wQ] !== WQ.NONE && XQ[wQ] && (0, hW.k)(XQ[wQ].format) && (this._integerMRTAttachmentsMask |= 1 << wQ);
            WQ.drawBuffers(QQ)
          }, lW.ThinEngine.prototype.clearAttachments = function(QQ, WQ, XQ, wQ) {
            let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const zQ = this._currentRenderTarget?.textures;
            let sQ = !1;
            if (XQ && QQ && zQ)
              for (let FQ = 0; FQ < WQ.length; FQ++) {
                const QQ = zQ[FQ];
                if (WQ[FQ] !== this._gl.NONE && QQ && (0, hW.k)(QQ.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  sQ = !0;
                  break
                }
              }
            if (!sQ || !QQ || !zQ) return this.bindAttachments(WQ), void this.clear(QQ, XQ, wQ, qQ, TQ);
            this.bindAttachments(WQ), this._applyColorWriteState();
            for (let FQ = 0; FQ < WQ.length; FQ++) {
              const XQ = zQ[FQ];
              if (WQ[FQ] !== this._gl.NONE && XQ) {
                let WQ = QQ;
                if ((0, hW.k)(XQ.format)) {
                  const wQ = (0, hW.o)(XQ.type);
                  WQ = wQ ? cW : AW;
                  const qQ = wQ ? 255 : 1;
                  WQ.r = Math.round(QQ.r * qQ), WQ.g = Math.round(QQ.g * qQ), WQ.b = Math.round(QQ.b * qQ), WQ.a = Math.round(QQ.a * qQ)
                }
                this._clearColorAttachment(FQ, WQ, XQ.format, XQ.type)
              }
            }
            if (wQ || qQ) {
              const QQ = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, wQ, qQ, TQ)
              } finally {
                this._integerMRTAttachmentsMask = QQ
              }
            }
          }, lW.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              XQ = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, QQ.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(QQ), WQ || this.generateMipMapsMultiFramebuffer(QQ), XQ && (QQ._MSAAFramebuffer && this._bindUnboundFramebuffer(QQ._framebuffer), XQ()), this._bindUnboundFramebuffer(null)
          }, lW.ThinEngine.prototype.createMultipleRenderTarget = function(QQ, WQ) {
            let XQ, wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              qQ = !1,
              TQ = !0,
              zQ = !1,
              sQ = !1,
              FQ = 1,
              PQ = 1,
              gQ = [],
              JQ = [],
              rQ = [],
              IQ = [],
              jQ = [],
              BQ = [],
              yQ = [],
              VQ = [],
              DQ = [],
              pQ = !1;
            const GQ = this._createHardwareRenderTargetWrapper(!0, !1, QQ);
            void 0 !== WQ && (qQ = void 0 !== WQ.generateMipMaps && WQ.generateMipMaps, TQ = void 0 === WQ.generateDepthBuffer || WQ.generateDepthBuffer, zQ = void 0 !== WQ.generateStencilBuffer && WQ.generateStencilBuffer, sQ = void 0 !== WQ.generateDepthTexture && WQ.generateDepthTexture, FQ = WQ.ssQ ?? 1, PQ = WQ.samples ?? PQ, gQ = WQ.types || gQ, JQ = WQ.samplingModes || JQ, rQ = WQ.useSRGBBuffers || rQ, IQ = WQ.formats || IQ, jQ = WQ.targetTypes || jQ, BQ = WQ.faceIndex || BQ, yQ = WQ.layerIndex || yQ, VQ = WQ.layerCounts || VQ, DQ = WQ.labels || DQ, pQ = WQ.dontCreateTextures ?? !1, this.Mj > 1 && (13 === WQ.depthTextureFormat || 17 === WQ.depthTextureFormat || 16 === WQ.depthTextureFormat || 14 === WQ.depthTextureFormat || 18 === WQ.depthTextureFormat) && (XQ = WQ.depthTextureFormat)), void 0 === XQ && (XQ = zQ ? 13 : 14);
            const UQ = this._gl,
              bQ = this._currentFramebuffer,
              vQ = UQ.createFramebuffer();
            this._bindUnboundFramebuffer(vQ);
            const dQ = QQ.width ?? QQ,
              HQ = QQ.height ?? QQ,
              aQ = [],
              hQ = [],
              iQ = this.Mj > 1 && (13 === XQ || 17 === XQ || 18 === XQ);
            GQ.label = WQ?.label ?? "MultiRenderTargetWrapper", GQ._framebuffer = vQ, GQ._generateDepthBuffer = sQ || TQ, GQ._generateStencilBuffer = sQ ? iQ : zQ, GQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(GQ._generateStencilBuffer, GQ._generateDepthBuffer, dQ, HQ, 1, XQ), GQ._attachments = hQ;
            for (let cQ = 0; cQ < FQ; cQ++) {
              let QQ = JQ[cQ] || 3,
                WQ = gQ[cQ] || 0,
                XQ = rQ[cQ] || !1;
              const wQ = IQ[cQ] || 5,
                TQ = jQ[cQ] || 3553,
                zQ = VQ[cQ] ?? 1;
              (1 !== WQ || this._caps.textureFloatLinearFiltering) && (2 !== WQ || this._caps.textureHalfFloatLinearFiltering) || (QQ = 1);
              const sQ = this._getSamplingParameters(QQ, qQ);
              1 !== WQ || this._caps.textureFloat || (WQ = 0, lQ.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), XQ = XQ && this._caps.supportSRGBBuffers && (this.Mj > 1 || this.isWebGPU);
              const FQ = this.Mj > 1,
                PQ = UQ[FQ ? "COLOR_ATTACHMENT" + cQ : "COLOR_ATTACHMENT" + cQ + "_WEBGL"];
              if (hQ.push(PQ), -1 === TQ || pQ) continue;
              const BQ = new aW.e(this, 6);
              aQ[cQ] = BQ, UQ.activeTexture(UQ["TEXTURE" + cQ]), UQ.bindTexture(TQ, BQ._hardwareTexture.underlyingResource), UQ.texParameteri(TQ, UQ.TEXTURE_MAG_FILTER, sQ.mag), UQ.texParameteri(TQ, UQ.TEXTURE_MIN_FILTER, sQ.min), UQ.texParameteri(TQ, UQ.TEXTURE_WRAP_S, UQ.CLAMP_TO_EDGE), UQ.texParameteri(TQ, UQ.TEXTURE_WRAP_T, UQ.CLAMP_TO_EDGE);
              const yQ = this._getRGBABufferInternalSizedFormat(WQ, wQ, XQ),
                bQ = this._getInternalFormat(wQ),
                vQ = this._getWebGLTextureType(WQ);
              if (!FQ || 35866 !== TQ && 32879 !== TQ)
                if (34067 === TQ) {
                  for (let QQ = 0; QQ < 6; QQ++) UQ.texImage2D(UQ.TEXTURE_CUBE_MAP_POSITIVE_X + QQ, 0, yQ, dQ, HQ, 0, bQ, vQ, null);
                  BQ.isCube = !0
                } else UQ.texImage2D(UQ.TEXTURE_2D, 0, yQ, dQ, HQ, 0, bQ, vQ, null);
              else 35866 === TQ ? BQ.is2DArray = !0 : BQ.is3D = !0, BQ.baseDepth = BQ.depth = zQ, UQ.texImage3D(TQ, 0, yQ, dQ, HQ, zQ, 0, bQ, vQ, null);
              qQ && UQ.generateMipmap(TQ), this._bindTextureDirectly(TQ, null), BQ.baseWidth = dQ, BQ.baseHeight = HQ, BQ.width = dQ, BQ.height = HQ, BQ.isReady = !0, BQ.samples = 1, BQ.generateMipMaps = qQ, BQ.samplingMode = QQ, BQ.type = WQ, BQ._useSRGBBuffer = XQ, BQ.format = wQ, BQ.label = DQ[cQ] ?? GQ.label + "-Texture" + cQ, this._internalTexturesCache.push(BQ)
            }
            if (sQ && this._caps.depthTextureExtension && !pQ) {
              const QQ = new aW.e(this, 14);
              let WQ = 5,
                wQ = UQ.DEPTH_COMPONENT16,
                TQ = UQ.DEPTH_COMPONENT,
                zQ = UQ.UNSIGNED_SHORT,
                sQ = UQ.DEPTH_ATTACHMENT;
              this.Mj < 2 ? wQ = UQ.DEPTH_COMPONENT : 14 === XQ ? (WQ = 1, zQ = UQ.FLOAT, wQ = UQ.DEPTH_COMPONENT32F) : 18 === XQ ? (WQ = 0, zQ = UQ.FLOAT_32_UNSIGNED_INT_24_8_REV, wQ = UQ.DEPTH32F_STENCIL8, TQ = UQ.DEPTH_STENCIL, sQ = UQ.DEPTH_STENCIL_ATTACHMENT) : 16 === XQ ? (WQ = 0, zQ = UQ.UNSIGNED_INT, wQ = UQ.DEPTH_COMPONENT24, sQ = UQ.DEPTH_ATTACHMENT) : 13 !== XQ && 17 !== XQ || (WQ = 12, zQ = UQ.UNSIGNED_INT_24_8, wQ = UQ.DEPTH24_STENCIL8, TQ = UQ.DEPTH_STENCIL, sQ = UQ.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(UQ.TEXTURE_2D, QQ, !0), UQ.texParameteri(UQ.TEXTURE_2D, UQ.TEXTURE_MAG_FILTER, UQ.NEAREST), UQ.texParameteri(UQ.TEXTURE_2D, UQ.TEXTURE_MIN_FILTER, UQ.NEAREST), UQ.texParameteri(UQ.TEXTURE_2D, UQ.TEXTURE_WRAP_S, UQ.CLAMP_TO_EDGE), UQ.texParameteri(UQ.TEXTURE_2D, UQ.TEXTURE_WRAP_T, UQ.CLAMP_TO_EDGE), UQ.texImage2D(UQ.TEXTURE_2D, 0, wQ, dQ, HQ, 0, TQ, zQ, null), UQ.framebufferTexture2D(UQ.FRAMEBUFFER, sQ, UQ.TEXTURE_2D, QQ._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(UQ.TEXTURE_2D, null), GQ._depthStencilTexture = QQ, GQ._depthStencilTextureWithStencil = iQ, QQ.baseWidth = dQ, QQ.baseHeight = HQ, QQ.width = dQ, QQ.height = HQ, QQ.isReady = !0, QQ.samples = 1, QQ.generateMipMaps = qQ, QQ.samplingMode = 1, QQ.format = XQ, QQ.type = WQ, QQ.label = GQ.label + "-DepthStencil", aQ[FQ] = QQ, this._internalTexturesCache.push(QQ)
            }
            if (GQ.setTextures(aQ), wQ && UQ.drawBuffers(hQ), this._bindUnboundFramebuffer(bQ), GQ.setLayerAndFaceIndices(yQ, BQ), this.resetTextureCache(), pQ) {
              if (PQ > 1) {
                const QQ = UQ.createFramebuffer();
                if (!QQ) throw new Error("Unable to create multi sampled framebuffer");
                GQ._samples = PQ, GQ._MSAAFramebuffer = QQ, FQ > 0 && wQ && (this._bindUnboundFramebuffer(QQ), UQ.drawBuffers(hQ), this._bindUnboundFramebuffer(bQ))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(GQ, PQ, wQ);
            return GQ
          }, lW.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(QQ, WQ) {
            let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Mj < 2 || !QQ) return 1;
            if (QQ.samples === WQ) return WQ;
            const wQ = this._gl;
            WQ = Math.min(WQ, this.getCaps().maxMSAASamples), QQ._depthStencilBuffer && (wQ.deleteRenderbuffer(QQ._depthStencilBuffer), QQ._depthStencilBuffer = null), QQ._MSAAFramebuffer && (wQ.deleteFramebuffer(QQ._MSAAFramebuffer), QQ._MSAAFramebuffer = null);
            const qQ = QQ._attachments.length;
            for (let zQ = 0; zQ < qQ; zQ++) {
              const WQ = QQ.textures[zQ]._hardwareTexture;
              WQ?.releaseMSAARenderBuffers()
            }
            if (WQ > 1 && "function" === typeof wQ.renderbufferStorageMultisample) {
              const TQ = wQ.createFramebuffer();
              if (!TQ) throw new Error("Unable to create multi sampled framebuffer");
              QQ._MSAAFramebuffer = TQ, this._bindUnboundFramebuffer(TQ);
              const zQ = [];
              for (let XQ = 0; XQ < qQ; XQ++) {
                const qQ = QQ.textures[XQ],
                  TQ = qQ._hardwareTexture,
                  sQ = wQ[this.Mj > 1 ? "COLOR_ATTACHMENT" + XQ : "COLOR_ATTACHMENT" + XQ + "_WEBGL"],
                  FQ = this._createRenderBuffer(qQ.width, qQ.height, WQ, -1, this._getRGBABufferInternalSizedFormat(qQ.type, qQ.format, qQ._useSRGBBuffer), sQ);
                if (!FQ) throw new Error("Unable to create multi sampled framebuffer");
                TQ.addMSAARenderBuffer(FQ), qQ.samples = WQ, zQ.push(sQ)
              }
              XQ && wQ.drawBuffers(zQ)
            } else this._bindUnboundFramebuffer(QQ._framebuffer);
            const TQ = QQ._depthStencilTexture ? QQ._depthStencilTexture.format : void 0;
            return QQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(QQ._generateStencilBuffer, QQ._generateDepthBuffer, QQ.width, QQ.height, WQ, TQ), this._bindUnboundFramebuffer(null), QQ._samples = WQ, WQ
          }, lW.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(QQ) {
            const WQ = QQ,
              XQ = this._gl;
            if (WQ.isMulti)
              for (let wQ = 0; wQ < WQ._attachments.length; wQ++) {
                const QQ = WQ.textures[wQ];
                !QQ?.generateMipMaps || QQ?.isCube || QQ?.is3D || (this._bindTextureDirectly(XQ.TEXTURE_2D, QQ, !0), XQ.generateMipmap(XQ.TEXTURE_2D), this._bindTextureDirectly(XQ.TEXTURE_2D, null))
              }
          }, lW.ThinEngine.prototype.resolveMultiFramebuffer = function(QQ) {
            const WQ = QQ,
              XQ = this._gl;
            if (!WQ._MSAAFramebuffer || !WQ.isMulti) return;
            let wQ = WQ.resolveMSAAColors ? XQ.COLOR_BUFFER_BIT : 0;
            wQ |= WQ._generateDepthBuffer && WQ.resolveMSAADepth ? XQ.DEPTH_BUFFER_BIT : 0, wQ |= WQ._generateStencilBuffer && WQ.resolveMSAAStencil ? XQ.STENCIL_BUFFER_BIT : 0;
            const qQ = WQ._attachments,
              TQ = qQ.length;
            XQ.bindFramebuffer(XQ.READ_FRAMEBUFFER, WQ._MSAAFramebuffer), XQ.bindFramebuffer(XQ.DRAW_FRAMEBUFFER, WQ._framebuffer);
            for (let zQ = 0; zQ < TQ; zQ++) {
              const QQ = WQ.textures[zQ];
              for (let WQ = 0; WQ < TQ; WQ++) qQ[WQ] = XQ.NONE;
              qQ[zQ] = XQ[this.Mj > 1 ? "COLOR_ATTACHMENT" + zQ : "COLOR_ATTACHMENT" + zQ + "_WEBGL"], XQ.readBuffer(qQ[zQ]), XQ.drawBuffers(qQ), XQ.blitFramebuffer(0, 0, QQ.width, QQ.height, 0, 0, QQ.width, QQ.height, wQ, XQ.NEAREST)
            }
            for (let zQ = 0; zQ < TQ; zQ++) qQ[zQ] = XQ[this.Mj > 1 ? "COLOR_ATTACHMENT" + zQ : "COLOR_ATTACHMENT" + zQ + "_WEBGL"];
            XQ.drawBuffers(qQ), XQ.bindFramebuffer(this._gl.FRAMEBUFFER, WQ._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = TQ;
        const JQ = [],
          rQ = [],
          IQ = [],
          jQ = [],
          BQ = [],
          yQ = [],
          VQ = [],
          DQ = [];
        this._initTypes(XQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, qQ);
        const pQ = !qQ || void 0 === qQ.generateDepthBuffer || qQ.generateDepthBuffer,
          GQ = !(!qQ || void 0 === qQ.generateStencilBuffer) && qQ.generateStencilBuffer,
          UQ = qQ && qQ.samples ? qQ.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: rQ,
          generateMipMaps: zQ,
          generateDepthBuffer: pQ,
          generateStencilBuffer: GQ,
          generateDepthTexture: sQ,
          depthTextureFormat: FQ,
          types: JQ,
          ssQ: XQ,
          useSRGBBuffers: IQ,
          samples: UQ,
          formats: jQ,
          targetTypes: BQ,
          faceIndex: yQ,
          layerIndex: VQ,
          layerCounts: DQ,
          labels: TQ,
          label: QQ
        }, this._count = XQ, this._drawOnlyOnFirstAttachmentByDefault = gQ, XQ > 0 && (this._createInternalTextures(), this._createTextures(TQ))
      }
      _initTypes(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
        for (let gQ = 0; gQ < QQ; gQ++) PQ && PQ.types && void 0 !== PQ.types[gQ] ? WQ.push(PQ.types[gQ]) : WQ.push(PQ && PQ.defaultType ? PQ.defaultType : 0), PQ && PQ.samplingModes && void 0 !== PQ.samplingModes[gQ] ? XQ.push(PQ.samplingModes[gQ]) : XQ.push(iQ.g.BILINEAR_SAMPLINGMODE), PQ && PQ.useSRGBBuffers && void 0 !== PQ.useSRGBBuffers[gQ] ? wQ.push(PQ.useSRGBBuffers[gQ]) : wQ.push(!1), PQ && PQ.formats && void 0 !== PQ.formats[gQ] ? qQ.push(PQ.formats[gQ]) : qQ.push(5), PQ && PQ.targetTypes && void 0 !== PQ.targetTypes[gQ] ? TQ.push(PQ.targetTypes[gQ]) : TQ.push(3553), PQ && PQ.faceIndex && void 0 !== PQ.faceIndex[gQ] ? zQ.push(PQ.faceIndex[gQ]) : zQ.push(0), PQ && PQ.layerIndex && void 0 !== PQ.layerIndex[gQ] ? sQ.push(PQ.layerIndex[gQ]) : sQ.push(0), PQ && PQ.layerCounts && void 0 !== PQ.layerCounts[gQ] ? FQ.push(PQ.layerCounts[gQ]) : FQ.push(1)
      }
      _createInternaTextureIndexMapping() {
        const QQ = {},
          WQ = [];
        if (!this._renderTarget) return WQ;
        const XQ = this._renderTarget.textures;
        for (let wQ = 0; wQ < XQ.length; wQ++) {
          const qQ = XQ[wQ];
          if (!qQ) continue;
          const TQ = QQ[qQ.uniqueId];
          void 0 !== TQ ? WQ[wQ] = TQ : QQ[qQ.uniqueId] = wQ
        }
        return WQ
      }
      _rebuild() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || QQ) return;
        const wQ = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), WQ && (this._releaseTextures(), this._createTextures(XQ));
        const qQ = this._renderTarget.textures;
        for (let TQ = 0; TQ < qQ.length; TQ++) {
          const QQ = this._textures[TQ];
          void 0 !== wQ[TQ] && this._renderTarget.setTexture(qQ[wQ[TQ]], TQ), QQ._texture = qQ[TQ], QQ._texture && (QQ._noMipmap = !QQ._texture.useMipMaps, QQ._useSRGBBuffer = QQ._texture._useSRGBBuffer)
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
        const WQ = this._renderTarget.textures;
        this._textures = [];
        for (let XQ = 0; XQ < WQ.length; XQ++) {
          const wQ = new iQ.g(null, this.sE());
          QQ?.[XQ] && (wQ.name = QQ[XQ]), wQ._texture = WQ[XQ], wQ._texture && (wQ._noMipmap = !wQ._texture.useMipMaps, wQ._useSRGBBuffer = wQ._texture._useSRGBBuffer), this._textures.push(wQ)
        }
      }
      setInternalTexture(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === WQ && (this._texture = QQ), this.renderTarget.setTexture(QQ, WQ, XQ), this.textures[WQ] || (this.textures[WQ] = new iQ.g(null, this.sE()), this.textures[WQ].name = this._textureNames?.[WQ] ?? this.textures[WQ].name), this.textures[WQ]._texture = QQ, this.textures[WQ]._noMipmap = !QQ.useMipMaps, this.textures[WQ]._useSRGBBuffer = QQ._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[WQ] = QQ.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[WQ] = QQ.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[WQ] = QQ._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[WQ])) {
          let XQ;
          XQ = QQ.is2DArray ? 35866 : QQ.isCube ? 34067 : QQ.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[WQ] = XQ
        }
      }
      setLayerAndFaceIndex(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[QQ] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[QQ] = WQ), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[QQ] = XQ), this.renderTarget.setLayerAndFaceIndex(QQ, WQ, XQ))
      }
      setLayerAndFaceIndices(QQ, WQ) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = QQ, this._multiRenderTargetOptions.faceIndex = WQ, this.renderTarget.setLayerAndFaceIndices(QQ, WQ))
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
      updateCount(QQ, WQ, XQ) {
        this._multiRenderTargetOptions.ssQ = QQ, this._count = QQ;
        const wQ = [],
          qQ = [],
          TQ = [],
          zQ = [],
          sQ = [],
          FQ = [],
          PQ = [],
          gQ = [];
        this._textureNames = XQ, this._initTypes(QQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, WQ), this._multiRenderTargetOptions.types = wQ, this._multiRenderTargetOptions.samplingModes = qQ, this._multiRenderTargetOptions.useSRGBBuffers = TQ, this._multiRenderTargetOptions.formats = zQ, this._multiRenderTargetOptions.targetTypes = sQ, this._multiRenderTargetOptions.faceIndex = FQ, this._multiRenderTargetOptions.layerIndex = PQ, this._multiRenderTargetOptions.layerCounts = gQ, this._multiRenderTargetOptions.labels = XQ, this._rebuild(!1, !0, XQ)
      }
      _unbindFrameBuffer(QQ, WQ) {
        this._renderTarget && QQ.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(WQ)
        }))
      }
      dispose() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), QQ ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const QQ = this._renderTarget?.textures;
        if (QQ) {
          for (let WQ = QQ.length - 1; WQ >= 0; WQ--) this._textures[WQ]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var EW = XQ(40432);
    class CW {
      constructor(QQ) {
        this.name = EW.c.NAME_GEOMETRYBUFFERRENDERER, this.cB = QQ
      }
      register() {
        this.cB._gatherRenderTargetsStage.registerStep(EW.c.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(QQ) {
        this.cB._geometryBufferRenderer && QQ.push(this.cB._geometryBufferRenderer.getGBuffer())
      }
    }
    let uW = !1;
    var LW;
    ! function(QQ) {
      QQ[QQ.Small = 0] = "Small", QQ[QQ.Medium = 1] = "Medium", QQ[QQ.Large = 2] = "Large", QQ[QQ.ExtraLarge = 3] = "ExtraLarge"
    }(LW || (LW = {}));
    const kW = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      fW = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class SW {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(QQ) {
        if (QQ && this._enableMeshBlendTag && !this._scene.Uj().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
      _forceTextureType(QQ, WQ) {
        QQ === SW.POSITION_TEXTURE_TYPE ? (this._positionIndex = WQ, this._enablePosition = !0) : QQ === SW.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = WQ, this._enableVelocity = !0) : QQ === SW.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = WQ, this._enableVelocityLinear = !0) : QQ === SW.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = WQ, this._enableReflectivity = !0) : QQ === SW.DEPTH_TEXTURE_TYPE ? (this._depthIndex = WQ, this._enableDepth = !0) : QQ === SW.NORMAL_TEXTURE_TYPE ? (this._normalIndex = WQ, this._enableNormal = !0) : QQ === SW.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = WQ, this._enableScreenspaceDepth = !0) : QQ === SW.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = WQ, this._enableIrradiance = !0) : QQ === SW.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = WQ, this._enableObjectId = !0) : QQ === SW.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = WQ, this._enableMeshBlendTag = !0)
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
          case SW.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case SW.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case SW.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case SW.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case SW.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case SW.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case SW.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case SW.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case SW.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case SW.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const QQ = this._scene.Uj(),
            WQ = Math.min(QQ.getCaps().maxDrawBuffers ?? 1, 8),
            XQ = this._assignRenderTargetIndices()[0] + 1;
          if (QQ.getCaps().drawBuffersExtension && XQ > WQ) throw new Error(`GeometryBufferRenderer: ${XQ} color attachments were requested, but this engine supports at most ${WQ}`)
        }
        this._enableObjectId = QQ, QQ || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(QQ) {
        if (this._enableMeshBlendTag !== QQ) {
          if (QQ) {
            const QQ = this._scene.Uj();
            if (! function(QQ) {
                return "NATIVE" !== QQ.shaderPlatformName && (QQ.isWebGPU || 2 === QQ.Mj)
              }(QQ)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !QQ.isWebGPU && !QQ.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const WQ = Math.min(QQ.getCaps().maxDrawBuffers ?? 1, 8),
                XQ = this._assignRenderTargetIndices()[0] + 1;
              if (QQ.getCaps().drawBuffersExtension && XQ > WQ) throw new Error(`GeometryBufferRenderer: ${XQ} color attachments were requested, but this engine supports at most ${WQ}`)
            }
          }
          this._enableMeshBlendTag = QQ, QQ || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get cB() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        var qQ;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new xQ.d(0, 0, 0, 0), this._clearDepthColor = new xQ.d(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = QQ, this._ratioOrDimensions = WQ, this._useUbo = QQ.Uj().supportsUniformBuffers, this._depthFormat = XQ, this._textureTypesAndFormats = wQ || {}, this._initShaderSourceAsync(), qQ = SW, uW || (uW = !0, Object.defineProperty(LQ.h.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(QQ) {
            QQ && QQ.isSupported && (this._geometryBufferRenderer = QQ)
          },
          enumerable: !0,
          configurable: !0
        }), LQ.h.prototype.enableGeometryBufferRenderer = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            XQ = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new qQ(this, QQ, WQ, XQ), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, LQ.h.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, qQ._SceneComponentInitialization = QQ => {
          let WQ = QQ._getComponent(EW.c.NAME_GEOMETRYBUFFERRENDERER);
          WQ || (WQ = new CW(QQ), QQ.rwQ(WQ))
        }), SW._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Uj().isWebGPU && !SW.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([XQ.e(346).then((() => XQ(62102))), Promise.all([XQ.e(345), XQ.e(357)]).then((() => XQ(62109)))])) : await Promise.all([XQ.e(329).then((() => XQ(62114))), XQ.e(328).then((() => XQ(62123)))]), this._shadersLoaded = !0
      }
      isReady(QQ, WQ) {
        if (!this._shadersLoaded) return !1;
        const XQ = QQ.lj();
        if (XQ && XQ.disableDepthWrite) return !1;
        if (function(QQ) {
            return QQ._isGaussianSplatting || "GaussianSplattingMesh" === (WQ = QQ.getClassName()) || "GaussianSplattingStream" === WQ;
            var WQ
          }(QQ.getMesh())) return !1;
        const wQ = [],
          qQ = [fQ.l.PositionKind],
          TQ = QQ.getMesh();
        TQ.isVerticesDataPresent(fQ.l.NormalKind) && (wQ.push("#define HAS_NORMAL_ATTRIBUTE"), qQ.push(fQ.l.NormalKind));
        let zQ = !1,
          sQ = !1;
        if (XQ) {
          let QQ = !1;
          if (XQ.needAlphaTestingForMesh(TQ) && XQ.getAlphaTestTexture() && (wQ.push("#define ALPHATEST"), wQ.push(`#define ALPHATEST_UV${XQ.getAlphaTestTexture().coordinatesIndex+1}`), QQ = !0), (XQ.bumpTexture || XQ.normalTexture || XQ.geometryNormalTexture) && OQ.e.BumpTextureEnabled) {
            const WQ = XQ.bumpTexture || XQ.normalTexture || XQ.geometryNormalTexture;
            wQ.push("#define BUMP"), wQ.push(`#define BUMP_UV${WQ.coordinatesIndex+1}`), QQ = !0
          }
          if (this._enableReflectivity) {
            let WQ = !1;
            if ("PBRMetallicRoughnessMaterial" === XQ.getClassName()) XQ.metallicRoughnessTexture && (wQ.push("#define ORMTEXTURE"), wQ.push(`#define REFLECTIVITY_UV${XQ.metallicRoughnessTexture.coordinatesIndex+1}`), wQ.push("#define METALLICWORKFLOW"), QQ = !0, WQ = !0), null != XQ.metallic && (wQ.push("#define METALLIC"), wQ.push("#define METALLICWORKFLOW"), WQ = !0), null != XQ.roughness && (wQ.push("#define ROUGHNESS"), wQ.push("#define METALLICWORKFLOW"), WQ = !0), WQ && (XQ.baseTexture && (wQ.push("#define ALBEDOTEXTURE"), wQ.push(`#define ALBEDO_UV${XQ.baseTexture.coordinatesIndex+1}`), XQ.baseTexture.gammaSpace && wQ.push("#define GAMMAALBEDO"), QQ = !0), XQ.baseColor && wQ.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === XQ.getClassName()) XQ.specularGlossinessTexture ? (wQ.push("#define SPECULARGLOSSINESSTEXTURE"), wQ.push(`#define REFLECTIVITY_UV${XQ.specularGlossinessTexture.coordinatesIndex+1}`), QQ = !0, XQ.specularGlossinessTexture.gammaSpace && wQ.push("#define GAMMAREFLECTIVITYTEXTURE")) : XQ.specularColor && wQ.push("#define REFLECTIVITYCOLOR"), null != XQ.glossiness && wQ.push("#define GLOSSINESS");
            else if ("PBRMaterial" === XQ.getClassName()) XQ.metallicTexture && (wQ.push("#define ORMTEXTURE"), wQ.push(`#define REFLECTIVITY_UV${XQ.metallicTexture.coordinatesIndex+1}`), wQ.push("#define METALLICWORKFLOW"), QQ = !0, WQ = !0), null != XQ.metallic && (wQ.push("#define METALLIC"), wQ.push("#define METALLICWORKFLOW"), WQ = !0), null != XQ.roughness && (wQ.push("#define ROUGHNESS"), wQ.push("#define METALLICWORKFLOW"), WQ = !0), WQ ? (XQ.albedoTexture && (wQ.push("#define ALBEDOTEXTURE"), wQ.push(`#define ALBEDO_UV${XQ.albedoTexture.coordinatesIndex+1}`), XQ.albedoTexture.gammaSpace && wQ.push("#define GAMMAALBEDO"), QQ = !0), XQ.albedoColor && wQ.push("#define ALBEDOCOLOR")) : (XQ.reflectivityTexture ? (wQ.push("#define SPECULARGLOSSINESSTEXTURE"), wQ.push(`#define REFLECTIVITY_UV${XQ.reflectivityTexture.coordinatesIndex+1}`), XQ.reflectivityTexture.gammaSpace && wQ.push("#define GAMMAREFLECTIVITYTEXTURE"), QQ = !0) : XQ.reflectivityColor && wQ.push("#define REFLECTIVITYCOLOR"), null != XQ.microSurface && wQ.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === XQ.getClassName()) XQ.specularTexture && (wQ.push("#define REFLECTIVITYTEXTURE"), wQ.push(`#define REFLECTIVITY_UV${XQ.specularTexture.coordinatesIndex+1}`), XQ.specularTexture.gammaSpace && wQ.push("#define GAMMAREFLECTIVITYTEXTURE"), QQ = !0), XQ.specularColor && wQ.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === XQ.getClassName()) {
              const WQ = XQ;
              wQ.push("#define METALLIC"), wQ.push("#define ROUGHNESS"), WQ._useRoughnessFromMetallicTextureGreen && WQ.baseMetalnessTexture ? (wQ.push("#define ORMTEXTURE"), wQ.push(`#define REFLECTIVITY_UV${WQ.baseMetalnessTexture.coordinatesIndex+1}`), QQ = !0) : WQ.baseMetalnessTexture ? (wQ.push("#define METALLIC_TEXTURE"), wQ.push(`#define METALLIC_UV${WQ.baseMetalnessTexture.coordinatesIndex+1}`), QQ = !0) : WQ.specularRoughnessTexture && (wQ.push("#define ROUGHNESS_TEXTURE"), wQ.push(`#define ROUGHNESS_UV${WQ.specularRoughnessTexture.coordinatesIndex+1}`), QQ = !0), WQ.baseColorTexture && (wQ.push("#define ALBEDOTEXTURE"), wQ.push(`#define ALBEDO_UV${WQ.baseColorTexture.coordinatesIndex+1}`), WQ.baseColorTexture.gammaSpace && wQ.push("#define GAMMAALBEDO"), QQ = !0), WQ.baseColor && wQ.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (wQ.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === XQ.getClassName())) {
            const WQ = XQ;
            WQ.subsurfaceWeight > 0 && WQ.subsurfaceWeightTexture && (wQ.push("#define SUBSURFACE_WEIGHT"), wQ.push(`#define SUBSURFACEWEIGHT_UV${WQ.subsurfaceWeightTexture.coordinatesIndex+1}`), QQ = !0), WQ.transmissionWeight > 0 && WQ.transmissionWeightTexture && (wQ.push("#define TRANSMISSION_WEIGHT"), wQ.push(`#define TRANSMISSIONWEIGHT_UV${WQ.transmissionWeightTexture.coordinatesIndex+1}`), QQ = !0)
          }
          QQ && (wQ.push("#define NEED_UV"), TQ.isVerticesDataPresent(fQ.l.UVKind) && (qQ.push(fQ.l.UVKind), wQ.push("#define UV1"), zQ = !0), TQ.isVerticesDataPresent(fQ.l.UV2Kind) && (qQ.push(fQ.l.UV2Kind), wQ.push("#define UV2"), sQ = !0))
        }
        if (this._enableDepth && (wQ.push("#define DEPTH"), wQ.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (wQ.push("#define NORMAL"), wQ.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (wQ.push("#define POSITION"), wQ.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (wQ.push("#define VELOCITY"), wQ.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(TQ) && wQ.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (wQ.push("#define VELOCITY_LINEAR"), wQ.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(TQ) && wQ.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (wQ.push("#define REFLECTIVITY"), wQ.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (wQ.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), wQ.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          wQ.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), wQ.push("#define IRRADIANCE");
          const QQ = this._scene;
          if (QQ.environmentTexture) {
            const WQ = {};
            let qQ = !1,
              TQ = 0;
            "OpenPBRMaterial" !== XQ.getClassName() && "StandardMaterial" !== XQ.getClassName() && "PBRMetallicRoughnessMaterial" !== XQ.getClassName() && "PBRSpecularGlossinessMaterial" !== XQ.getClassName() && "PBRMaterial" !== XQ.getClassName() || (qQ = !!XQ.realtimeFiltering, TQ = XQ.realtimeFilteringQuality || 0), (0, mQ.$)(QQ, QQ.environmentTexture, WQ, qQ, TQ, !0);
            for (const QQ in WQ) WQ[QQ] && wQ.push("#define " + QQ);
            WQ.USEIRRADIANCEMAP || wQ.push("#define SPHERICAL_HARMONICS");
            const zQ = QQ.postProcessRenderPipelineManager.supportedPipelines.find((QQ => "IBLShadowsRenderPipeline" === QQ.getClassName()));
            if (zQ) {
              const QQ = zQ;
              QQ._getAccumulatedTexture() && (wQ.push("#define IBL_SHADOW_TEXTURE"), QQ.coloredShadows && wQ.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (wQ.push("#define OBJECT_ID"), wQ.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (wQ.push("#define MESH_BLEND_TAG"), wQ.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && wQ.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && wQ.push("#define ENCODE_NORMAL"), TQ.useBones && TQ.computeBonesUsingShaders && TQ.skeleton ? (qQ.push(fQ.l.MatricesIndicesKind), qQ.push(fQ.l.MatricesWeightsKind), TQ.numBoneInfluencers > 4 && (qQ.push(fQ.l.MatricesIndicesExtraKind), qQ.push(fQ.l.MatricesWeightsExtraKind)), wQ.push("#define NUM_BONE_INFLUENCERS " + TQ.numBoneInfluencers), wQ.push("#define BONETEXTURE " + TQ.skeleton.isUsingTextureForMatrices), wQ.push("#define BonesPerMesh " + (TQ.skeleton.bones.length + 1))) : (wQ.push("#define NUM_BONE_INFLUENCERS 0"), wQ.push("#define BONETEXTURE false"), wQ.push("#define BonesPerMesh 0"));
        const FQ = TQ.morphTargetManager ? (0, mQ.W)(TQ.morphTargetManager, wQ, qQ, TQ, !0, !0, !1, zQ, sQ, !1) : 0;
        WQ && (wQ.push("#define INSTANCES"), (0, mQ.xb)(qQ, this._enableVelocity || this._enableVelocityLinear), QQ.getRenderingMesh().hasThinInstances && wQ.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? wQ.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : wQ.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, gW.g)(XQ, this._scene, wQ);
        const PQ = this._scene.Uj(),
          gQ = QQ._getDrawWrapper(void 0, !0),
          JQ = gQ.defines,
          rQ = wQ.join("\n");
        return JQ !== rQ && gQ.setEffect(PQ.createEffect("geometry", {
          attributes: qQ,
          uniformsNames: fW,
          samplers: kW,
          defines: rQ,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: FQ
          },
          shaderLanguage: this.shaderLanguage
        }, PQ), rQ), gQ.effect.isReady()
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
          this._scene.Uj().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.cB.Uj()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.cB.Uj().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const QQ = [],
          WQ = [];
        let XQ = 0;
        return this._enableDepth && (this._depthIndex = XQ, XQ++, QQ.push("gBuffer_Depth"), WQ.push(this._textureTypesAndFormats[SW.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = XQ, XQ++, QQ.push("gBuffer_Normal"), WQ.push(this._textureTypesAndFormats[SW.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = XQ, XQ++, QQ.push("gBuffer_Position"), WQ.push(this._textureTypesAndFormats[SW.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = XQ, XQ++, QQ.push("gBuffer_Velocity"), WQ.push(this._textureTypesAndFormats[SW.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = XQ, XQ++, QQ.push("gBuffer_VelocityLinear"), WQ.push(this._textureTypesAndFormats[SW.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = XQ, XQ++, QQ.push("gBuffer_Reflectivity"), WQ.push(this._textureTypesAndFormats[SW.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = XQ, XQ++, QQ.push("gBuffer_ScreenspaceDepth"), WQ.push(this._textureTypesAndFormats[SW.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = XQ, XQ++, QQ.push("gBuffer_Irradiance"), WQ.push(this._textureTypesAndFormats[SW.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = XQ, XQ++, QQ.push("gBuffer_ObjectId"), WQ.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = XQ, XQ++, QQ.push("gBuffer_MeshBlendTag"), WQ.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [XQ, QQ, WQ]
      }
      _createRenderTargets() {
        const QQ = this._scene.Uj(),
          [WQ, XQ, wQ] = this._assignRenderTargetIndices(),
          qQ = Math.min(QQ.getCaps().maxDrawBuffers ?? 1, 8);
        if (QQ.getCaps().drawBuffersExtension && WQ > qQ) throw new Error(`GeometryBufferRenderer: ${WQ} color attachments were requested, but this engine supports at most ${qQ}`);
        let zQ = 0;
        QQ._caps.textureFloat && QQ._caps.textureFloatLinearFiltering ? zQ = 1 : QQ._caps.textureHalfFloat && QQ._caps.textureHalfFloatLinearFiltering && (zQ = 2);
        const sQ = this._getRenderTargetDimensions(),
          FQ = [],
          PQ = [],
          gQ = [];
        for (const TQ of wQ) TQ ? (FQ.push(TQ.textureType), PQ.push(TQ.textureFormat), gQ.push(TQ.samplingMode ?? 2)) : (FQ.push(zQ), PQ.push(5), gQ.push(2));
        if (this._normalsAreUnsigned = 11 === FQ[SW.NORMAL_TEXTURE_TYPE] || 13 === FQ[SW.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new RW("gBuffer", sQ, WQ, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: FQ,
            formats: PQ,
            samplingModes: gQ,
            depthTextureFormat: this._depthFormat
          }, XQ.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = iQ.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = iQ.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const JQ = [!0],
          rQ = [!1],
          IQ = [!0];
        for (let TQ = 1; TQ < WQ; ++TQ) JQ.push(!0), IQ.push(!1), rQ.push(!0);
        const jQ = QQ.buildTextureLayout(JQ),
          BQ = QQ.buildTextureLayout(rQ),
          yQ = QQ.buildTextureLayout(IQ);
        this._multiRenderTarget.onClearObservable.add((QQ => {
          const WQ = this.useSpecificClearForDepthTexture ? BQ : jQ;
          QQ.clearAttachments(this._clearColor, WQ, !0, !0, !0), this.useSpecificClearForDepthTexture && QQ.clearAttachments(this._clearDepthColor, yQ, !0, !1, !1), QQ.bindAttachments(jQ)
        })), this._resizeObserver = QQ.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const VQ = QQ => {
          const WQ = QQ.getRenderingMesh(),
            XQ = QQ.getEffectiveMesh(),
            wQ = this._scene,
            qQ = wQ.Uj(),
            zQ = QQ.lj();
          if (!zQ) return;
          if (XQ._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[XQ.uniqueId] && (this._previousTransformationMatrices[XQ.uniqueId] = {
              nJ: kQ.e.Identity(),
              viewProjection: wQ.getTransformMatrix()
            }, WQ.skeleton)) {
            const QQ = WQ.skeleton.getTransformMatrices(WQ);
            this._previousBonesTransformationMatrices[WQ.uniqueId] = this._copyBonesTransformationMatrices(QQ, new Float32Array(QQ.length))
          }
          const sQ = WQ._getInstancesRenderList(QQ._id, !!QQ.getReplacementMesh());
          if (sQ.mustReturn) return;
          const FQ = qQ.getCaps().instancedArrays && (null !== sQ.visibleInstances[QQ._id] || WQ.hasThinInstances),
            PQ = XQ.getWorldMatrix();
          if (this.isReady(QQ, FQ)) {
            const gQ = QQ._getDrawWrapper();
            if (!gQ) return;
            const JQ = gQ.effect;
            let rQ;
            qQ.enableEffect(gQ), FQ || WQ._bind(QQ, JQ, zQ.fillMode), this._useUbo ? ((0, mQ.C)(JQ, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (JQ.setMatrix("viewProjection", wQ.getTransformMatrix()), JQ.setMatrix("view", wQ.getViewMatrix()), this._scene.bindEyePosition(JQ, "vEyePosition"));
            if (WQ._instanceDataStorage.isFrozen || !zQ.backFaceCulling && null === zQ.sideOrientation) rQ = WQ._effectiveSideOrientation;
            else {
              const QQ = XQ._getWorldMatrixDeterminant();
              rQ = zQ._getEffectiveOrientation(WQ), QQ < 0 && (rQ = rQ === TQ.b.ClockWiseSideOrientation ? TQ.b.CounterClockWiseSideOrientation : TQ.b.ClockWiseSideOrientation)
            }
            if (zQ._preBind(gQ, rQ), zQ.needAlphaTestingForMesh(XQ)) {
              const QQ = zQ.getAlphaTestTexture();
              QQ && (JQ.setTexture("diffuseSampler", QQ), JQ.setMatrix("diffuseMatrix", QQ.getTextureMatrix()), JQ.setFloat("alphaCutOff", zQ.alphaCutOff ?? .4))
            }
            if ((zQ.bumpTexture || zQ.normalTexture || zQ.geometryNormalTexture) && wQ.Uj().getCaps().standardDerivatives && OQ.e.BumpTextureEnabled) {
              const QQ = zQ.bumpTexture || zQ.normalTexture || zQ.geometryNormalTexture;
              JQ.setFloat3("vBumpInfos", QQ.coordinatesIndex, 1 / QQ.level, zQ.parallaxScaleBias), JQ.setMatrix("bumpMatrix", QQ.getTextureMatrix()), JQ.setTexture("bumpSampler", QQ), JQ.setFloat2("vTangentSpaceParams", zQ.invertNormalMapX ? -1 : 1, zQ.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === zQ.getClassName()) null !== zQ.metallicRoughnessTexture && (JQ.setTexture("reflectivitySampler", zQ.metallicRoughnessTexture), JQ.setMatrix("reflectivityMatrix", zQ.metallicRoughnessTexture.getTextureMatrix())), null !== zQ.metallic && JQ.setFloat("metallic", zQ.metallic), null !== zQ.roughness && JQ.setFloat("glossiness", 1 - zQ.roughness), null !== zQ.baseTexture && (JQ.setTexture("albedoSampler", zQ.baseTexture), JQ.setMatrix("albedoMatrix", zQ.baseTexture.getTextureMatrix())), null !== zQ.baseColor && JQ.setColor3("albedoColor", zQ.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === zQ.getClassName()) null !== zQ.specularGlossinessTexture ? (JQ.setTexture("reflectivitySampler", zQ.specularGlossinessTexture), JQ.setMatrix("reflectivityMatrix", zQ.specularGlossinessTexture.getTextureMatrix())) : null !== zQ.specularColor && JQ.setColor3("reflectivityColor", zQ.specularColor), null !== zQ.glossiness && JQ.setFloat("glossiness", zQ.glossiness);
            else if ("PBRMaterial" === zQ.getClassName()) null !== zQ.metallicTexture && (JQ.setTexture("reflectivitySampler", zQ.metallicTexture), JQ.setMatrix("reflectivityMatrix", zQ.metallicTexture.getTextureMatrix())), null !== zQ.metallic && JQ.setFloat("metallic", zQ.metallic), null !== zQ.roughness && JQ.setFloat("glossiness", 1 - zQ.roughness), null !== zQ.roughness || null !== zQ.metallic || null !== zQ.metallicTexture ? (null !== zQ.albedoTexture && (JQ.setTexture("albedoSampler", zQ.albedoTexture), JQ.setMatrix("albedoMatrix", zQ.albedoTexture.getTextureMatrix())), null !== zQ.albedoColor && JQ.setColor3("albedoColor", zQ.albedoColor)) : (null !== zQ.reflectivityTexture ? (JQ.setTexture("reflectivitySampler", zQ.reflectivityTexture), JQ.setMatrix("reflectivityMatrix", zQ.reflectivityTexture.getTextureMatrix())) : null !== zQ.reflectivityColor && JQ.setColor3("reflectivityColor", zQ.reflectivityColor), null !== zQ.microSurface && JQ.setFloat("glossiness", zQ.microSurface));
            else if ("StandardMaterial" === zQ.getClassName()) null !== zQ.specularTexture && (JQ.setTexture("reflectivitySampler", zQ.specularTexture), JQ.setMatrix("reflectivityMatrix", zQ.specularTexture.getTextureMatrix())), null !== zQ.specularColor && JQ.setColor3("reflectivityColor", zQ.specularColor);
            else if ("OpenPBRMaterial" === zQ.getClassName()) {
              const QQ = zQ;
              QQ._useRoughnessFromMetallicTextureGreen && QQ.baseMetalnessTexture ? (JQ.setTexture("reflectivitySampler", QQ.baseMetalnessTexture), JQ.setMatrix("reflectivityMatrix", QQ.baseMetalnessTexture.getTextureMatrix())) : QQ.baseMetalnessTexture ? (JQ.setTexture("metallicSampler", QQ.baseMetalnessTexture), JQ.setMatrix("metallicMatrix", QQ.baseMetalnessTexture.getTextureMatrix())) : QQ.specularRoughnessTexture && (JQ.setTexture("roughnessSampler", QQ.specularRoughnessTexture), JQ.setMatrix("roughnessMatrix", QQ.specularRoughnessTexture.getTextureMatrix())), JQ.setFloat("metallic", QQ.baseMetalness), JQ.setFloat("glossiness", 1 - QQ.specularRoughness), null !== QQ.baseColorTexture && (JQ.setTexture("albedoSampler", QQ.baseColorTexture), JQ.setMatrix("albedoMatrix", QQ.baseColorTexture.getTextureMatrix())), null !== QQ.baseColor && JQ.setColor3("albedoColor", QQ.baseColor)
            }
            if (this._enableIrradiance && wQ.environmentTexture) {
              const QQ = wQ.environmentTexture,
                WQ = wQ.postProcessRenderPipelineManager.supportedPipelines.find((QQ => "IBLShadowsRenderPipeline" === QQ.getClassName()));
              if (WQ) {
                const QQ = WQ._getAccumulatedTexture();
                QQ && (JQ.setTexture("iblShadowSampler", QQ), JQ.setFloat2("shadowTextureSize", QQ.getSize().width, QQ.getSize().height))
              }
              if (JQ.setMatrix("reflectionMatrix", QQ.getReflectionTextureMatrix()), JQ.setFloat2("vReflectionInfos", QQ.level * wQ.iblIntensity, 0), JQ.setTexture("reflectionSampler", QQ), QQ.irradianceTexture && (JQ.setTexture("irradianceSampler", QQ.irradianceTexture), QQ.irradianceTexture._dominantDirection && JQ.setVector3("vReflectionDominantDirection", QQ.irradianceTexture._dominantDirection)), QQ.sphericalPolynomial) {
                const WQ = QQ.sphericalPolynomial;
                if (WQ.preScaledHarmonics) {
                  const QQ = WQ.preScaledHarmonics;
                  JQ.setVector3("vSphericalL00", QQ.l00), JQ.setVector3("vSphericalL1_1", QQ.l1_1), JQ.setVector3("vSphericalL10", QQ.l10), JQ.setVector3("vSphericalL11", QQ.l11), JQ.setVector3("vSphericalL2_2", QQ.l2_2), JQ.setVector3("vSphericalL2_1", QQ.l2_1), JQ.setVector3("vSphericalL20", QQ.l20), JQ.setVector3("vSphericalL21", QQ.l21), JQ.setVector3("vSphericalL22", QQ.l22)
                } else JQ.setFloat3("vSphericalX", WQ.x.x, WQ.x.y, WQ.x.z), JQ.setFloat3("vSphericalY", WQ.y.x, WQ.y.y, WQ.y.z), JQ.setFloat3("vSphericalZ", WQ.z.x, WQ.z.y, WQ.z.z), JQ.setFloat3("vSphericalXX_ZZ", WQ.xx.x - WQ.zz.x, WQ.xx.y - WQ.zz.y, WQ.xx.z - WQ.zz.z), JQ.setFloat3("vSphericalYY_ZZ", WQ.yy.x - WQ.zz.x, WQ.yy.y - WQ.zz.y, WQ.yy.z - WQ.zz.z), JQ.setFloat3("vSphericalZZ", WQ.zz.x, WQ.zz.y, WQ.zz.z), JQ.setFloat3("vSphericalXY", WQ.xy.x, WQ.xy.y, WQ.xy.z), JQ.setFloat3("vSphericalYZ", WQ.yz.x, WQ.yz.y, WQ.yz.z), JQ.setFloat3("vSphericalZX", WQ.zx.x, WQ.zx.y, WQ.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === zQ.getClassName()) {
                const QQ = zQ;
                JQ.setFloat("vSubsurfaceWeight", QQ.subsurfaceWeight), QQ.subsurfaceWeightTexture && (JQ.setTexture("subsurfaceWeightSampler", QQ.subsurfaceWeightTexture), JQ.setMatrix("subsurfaceWeightMatrix", QQ.subsurfaceWeightTexture.getTextureMatrix())), JQ.setFloat("vTransmissionWeight", QQ.transmissionWeight), QQ.transmissionWeightTexture && (JQ.setTexture("transmissionWeightSampler", QQ.transmissionWeightTexture), JQ.setMatrix("transmissionWeightMatrix", QQ.transmissionWeightTexture.getTextureMatrix())), JQ.setFloat("vTransmissionScatterAnisotropy", QQ.transmissionScatterAnisotropy), JQ.setFloat("vSubsurfaceScatterAnisotropy", QQ.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, gW.d)(JQ, zQ, this._scene), WQ.useBones && WQ.computeBonesUsingShaders && WQ.skeleton) {
              const QQ = WQ.skeleton;
              if (QQ.isUsingTextureForMatrices && JQ.getUniformIndex("boneTextureInfo") > -1) {
                const XQ = QQ.getTransformMatrixTexture(WQ);
                JQ.setTexture("boneSampler", XQ), JQ.setFloat2("boneTextureInfo", QQ._textureWidth, QQ._textureHeight)
              } else JQ.setMatrices("mBones", WQ.skeleton.getTransformMatrices(WQ));
              (this._enableVelocity || this._enableVelocityLinear) && JQ.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[WQ.uniqueId])
            }
            if ((0, mQ.A)(WQ, JQ), WQ.morphTargetManager && WQ.morphTargetManager.isUsingTextureForTargets && WQ.morphTargetManager._bind(JQ), (this._enableVelocity || this._enableVelocityLinear) && (JQ.setMatrix("previousWorld", this._previousTransformationMatrices[XQ.uniqueId].nJ), JQ.setMatrix("previousViewProjection", this._previousTransformationMatrices[XQ.uniqueId].viewProjection)), this._enableObjectId) {
              let QQ = WQ.uniqueId;
              if (this.objectIdProvider) QQ = (0, IW.h)(WQ, this.objectIdProvider);
              else if (QQ > 16777215) throw new Error(`Invalid geometry object ID ${QQ} for mesh "${WQ.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              JQ.setFloat("objectId", QQ)
            }
            if (this._enableMeshBlendTag) {
              const QQ = this.meshBlendTagProvider ? (0, IW.g)(WQ, this.meshBlendTagProvider) : WQ.meshBlendingTag;
              JQ.setInt("meshBlendTag", QQ)
            }
            FQ && WQ.hasThinInstances && JQ.setMatrix("world", PQ), WQ._processRendering(XQ, QQ, JQ, zQ.fillMode, sQ, FQ, ((QQ, WQ) => {
              QQ || JQ.setMatrix("world", WQ)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[XQ.uniqueId].nJ = PQ.clone(), this._previousTransformationMatrices[XQ.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), WQ.skeleton && this._copyBonesTransformationMatrices(WQ.skeleton.getTransformMatrices(WQ), this._previousBonesTransformationMatrices[XQ.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (WQ, XQ, wQ) => {
          if ((wQ || 0 === XQ) && WQ.ZD)
            for (let qQ = 0; qQ < WQ.ZD.length; ++qQ) {
              const XQ = WQ.ZD[qQ],
                wQ = XQ.lj(),
                TQ = XQ.getRenderingMesh();
              if (!wQ) continue;
              const zQ = TQ._getInstancesRenderList(XQ._id, !!XQ.getReplacementMesh()),
                sQ = QQ.getCaps().instancedArrays && (null !== zQ.visibleInstances[XQ._id] || TQ.hasThinInstances);
              if (!this.isReady(XQ, sQ)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (WQ, XQ, wQ, qQ) => {
          let TQ;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Uj().bindAttachments(this._attachmentsFromPrePass)
          }
          if (qQ.length) {
            for (QQ.setColorWrite(!1), TQ = 0; TQ < qQ.length; TQ++) VQ(qQ.data[TQ]);
            QQ.setColorWrite(!0)
          }
          for (TQ = 0; TQ < WQ.length; TQ++) VQ(WQ.data[TQ]);
          for (QQ.setDepthWrite(!1), TQ = 0; TQ < XQ.length; TQ++) VQ(XQ.data[TQ]);
          if (this.renderTransparentMeshes)
            for (TQ = 0; TQ < wQ.length; TQ++) VQ(wQ.data[TQ]);
          QQ.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const QQ = this._scene.Uj();
        return {
          width: Math.max(1, Math.floor(QQ.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(QQ.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(QQ, WQ) {
        for (let XQ = 0; XQ < QQ.length; XQ++) WQ[XQ] = QQ[XQ];
        return WQ
      }
    }
    SW.ForceGLSL = !1, SW.DEPTH_TEXTURE_TYPE = 0, SW.NORMAL_TEXTURE_TYPE = 1, SW.POSITION_TEXTURE_TYPE = 2, SW.VELOCITY_TEXTURE_TYPE = 3, SW.REFLECTIVITY_TEXTURE_TYPE = 4, SW.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, SW.VELOCITY_LINEAR_TEXTURE_TYPE = 6, SW.IRRADIANCE_TEXTURE_TYPE = 7, SW.OBJECT_ID_TEXTURE_TYPE = 8, SW.MESH_BLEND_TAG_TEXTURE_TYPE = 9, SW._SceneComponentInitialization = QQ => {
      throw (0, VW.i)("GeometryBufferRendererSceneComponent")
    };
    var tW = XQ(37418);
    const oW = {
      effect: null,
      subMesh: null
    };

    function eW(QQ) {
      if ("number" === typeof QQ) return 1;
      if (QQ instanceof kQ.q) return 2;
      if (QQ instanceof kQ.s || QQ instanceof xQ.b) return 3;
      if (QQ instanceof kQ.w || QQ instanceof xQ.d) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class nW {
      populateVectorFromLinkedProperties(QQ) {
        const WQ = eW(QQ);
        for (const XQ in this.linkedProperties) {
          const QQ = this.linkedProperties[XQ],
            wQ = QQ.numComponents;
          if (WQ < wQ || QQ.targetUniformComponentOffset > WQ - wQ) return void(1 == wQ ? lQ.b.Error(`Float property ${QQ.name} has an offset that is too large.`) : lQ.b.Error(`Vector${wQ} property ${QQ.name} won't fit in Vector${WQ} or has an offset that is too large.`));
          "number" === typeof QQ.value ? nW._tmpArray[QQ.targetUniformComponentOffset] = QQ.value : QQ.value.toArray(nW._tmpArray, QQ.targetUniformComponentOffset)
        }
        QQ.gXQ(nW._tmpArray)
      }
      constructor(QQ, WQ) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = QQ, this.numComponents = WQ
      }
    }
    nW._tmpArray = [0, 0, 0, 0];
    class xW {
      constructor(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          TQ = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = QQ, this.targetUniformName = XQ, this.defaultValue = WQ, this.value = WQ, this.targetUniformComponentNum = wQ, this.targetUniformComponentOffset = qQ, this.requiredDefine = TQ
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : eW(this.defaultValue)
      }
    }
    class YW {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(QQ, WQ, XQ) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = QQ, this.samplerPrefix = WQ, this.textureDefine = XQ
      }
    }
    class NW extends((0, BW.e)((0, jW.b)(SQ.e))) {}
    class ZW extends(function(QQ) {
      return class extends QQ {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(NW)) {}
    class OW extends((0, YQ.d)(ZW)) {
      constructor(QQ) {
        super(QQ), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class KW extends((0, yW.e)(ZQ.d)) {}
    let mW = (() => {
        var QQ, WQ, wQ, qQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, cQ, AQ, RQ, EQ, LQ, SQ, tQ, oQ, eQ, YQ, ZQ, MQ, QW, WW, XW, wW, qW, TW, zW, sW, FW, PW, jW, BW, yW, VW, DW, pW, GW, UW, bW, HW, aW, lW, hW, iW, cW, AW, RW, EW, CW, uW, LW, kW, fW, tW, eW, NW, ZW, mW, MW, QX, WX, XX, wX, qX, TX, zX, sX, FX, PX, gX, JX, rX, IX, jX, BX, yX, VX, DX, pX, GX, UX, bX, vX, dX, HX, aX, lX, hX;
        let iX, cX, AX, RX, EX, CX, uX, LX, kX, fX, SX, tX, oX, eX, nX, xX, YX, NX, ZX, OX, KX, mX, MX, Qw, Ww, Xw, ww, qw, Tw, zw, sw, Fw, Pw, gw, Jw, rw, Iw, jw, Bw, yw, Vw, Dw, pw, Gw, Uw, bw, vw, dw, Hw, aw, lw, hw, iw, Aw, Rw, Ew, Cw, uw, Lw, kw, fw, Sw, tw, ow, ew, nw, xw, Yw, Nw, Zw, Ow, Kw, mw, Mw, Qq, Wq, Xq, wq, qq, Tq, zq, sq, Fq, Pq, gq, Jq, rq, Iq, jq, Bq, yq, Vq, Dq, pq, Gq, Uq, bq, vq, dq, Hq, aq, lq, hq, iq, cq, Aq = KW,
          Rq = [],
          Eq = [],
          Cq = [],
          uq = [],
          Lq = [],
          kq = [],
          fq = [],
          Sq = [],
          tq = [],
          oq = [],
          eq = [],
          nq = [],
          xq = [],
          Yq = [],
          Nq = [],
          Zq = [],
          Oq = [],
          Kq = [],
          mq = [],
          Mq = [],
          QT = [],
          WT = [],
          XT = [],
          wT = [],
          qT = [],
          TT = [],
          zT = [],
          sT = [],
          FT = [],
          PT = [],
          gT = [],
          JT = [],
          rT = [],
          IT = [],
          jT = [],
          BT = [],
          yT = [],
          VT = [],
          DT = [],
          pT = [],
          GT = [],
          UT = [],
          bT = [],
          vT = [],
          dT = [],
          HT = [],
          aT = [],
          lT = [],
          hT = [],
          iT = [],
          cT = [],
          AT = [],
          RT = [],
          ET = [],
          CT = [],
          uT = [],
          LT = [],
          kT = [],
          fT = [],
          ST = [],
          tT = [],
          oT = [],
          eT = [],
          nT = [],
          xT = [],
          YT = [],
          NT = [],
          ZT = [],
          OT = [],
          KT = [],
          mT = [],
          MT = [],
          Qz = [],
          Wz = [],
          Xz = [],
          wz = [],
          qz = [],
          Tz = [],
          zz = [],
          sz = [],
          Fz = [],
          Pz = [],
          gz = [],
          Jz = [],
          rz = [],
          Iz = [],
          jz = [],
          Bz = [],
          yz = [],
          Vz = [],
          Dz = [],
          pz = [],
          Gz = [],
          Uz = [],
          bz = [],
          vz = [],
          dz = [],
          Hz = [],
          az = [],
          lz = [],
          hz = [],
          iz = [],
          cz = [],
          Az = [],
          Rz = [],
          Ez = [],
          Cz = [],
          uz = [],
          Lz = [],
          kz = [],
          fz = [],
          Sz = [],
          tz = [],
          oz = [],
          ez = [],
          nz = [],
          xz = [],
          Yz = [],
          Nz = [],
          Zz = [],
          Oz = [],
          Kz = [],
          mz = [],
          Mz = [],
          Qs = [],
          Ws = [],
          Xs = [],
          ws = [],
          qs = [],
          Ts = [],
          zs = [],
          ss = [],
          Fs = [],
          Ps = [],
          gs = [],
          rs = [],
          Is = [],
          Bs = [],
          ys = [],
          Vs = [],
          Ds = [],
          ps = [],
          Gs = [],
          Us = [],
          bs = [],
          vs = [],
          ds = [],
          Hs = [],
          as = [],
          ls = [],
          hs = [],
          is = [],
          cs = [],
          As = [],
          Rs = [],
          Es = [],
          Cs = [],
          us = [],
          Ls = [],
          ks = [],
          fs = [],
          Ss = [],
          ts = [],
          os = [],
          es = [],
          ns = [],
          xs = [],
          Ys = [],
          Ns = [],
          Zs = [],
          Os = [],
          Ks = [],
          ms = [],
          Ms = [],
          QF = [],
          WF = [],
          XF = [],
          wF = [],
          qF = [],
          TF = [],
          zF = [],
          sF = [],
          FF = [],
          PF = [],
          gF = [],
          JF = [],
          rF = [],
          IF = [],
          jF = [],
          BF = [],
          yF = [],
          VF = [],
          DF = [],
          pF = [],
          GF = [],
          UF = [],
          bF = [],
          vF = [],
          dF = [],
          HF = [],
          aF = [],
          lF = [],
          hF = [],
          iF = [],
          cF = [];
        return QQ = class extends Aq {
          get baseWeight() {
            return (0, HQ.d)(this, WQ, "f")
          }
          set baseWeight(QQ) {
            (0, HQ.h)(this, WQ, QQ, "f")
          }
          get baseWeightTexture() {
            return (0, HQ.d)(this, wQ, "f")
          }
          set baseWeightTexture(QQ) {
            (0, HQ.h)(this, wQ, QQ, "f")
          }
          get baseColor() {
            return (0, HQ.d)(this, qQ, "f")
          }
          set baseColor(QQ) {
            (0, HQ.h)(this, qQ, QQ, "f")
          }
          get baseColorTexture() {
            return (0, HQ.d)(this, zQ, "f")
          }
          set baseColorTexture(QQ) {
            (0, HQ.h)(this, zQ, QQ, "f")
          }
          get baseDiffuseRoughness() {
            return (0, HQ.d)(this, sQ, "f")
          }
          set baseDiffuseRoughness(QQ) {
            (0, HQ.h)(this, sQ, QQ, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, HQ.d)(this, FQ, "f")
          }
          set baseDiffuseRoughnessTexture(QQ) {
            (0, HQ.h)(this, FQ, QQ, "f")
          }
          get baseMetalness() {
            return (0, HQ.d)(this, PQ, "f")
          }
          set baseMetalness(QQ) {
            (0, HQ.h)(this, PQ, QQ, "f")
          }
          get baseMetalnessTexture() {
            return (0, HQ.d)(this, gQ, "f")
          }
          set baseMetalnessTexture(QQ) {
            (0, HQ.h)(this, gQ, QQ, "f")
          }
          get specularWeight() {
            return (0, HQ.d)(this, JQ, "f")
          }
          set specularWeight(QQ) {
            (0, HQ.h)(this, JQ, QQ, "f")
          }
          get specularWeightTexture() {
            return (0, HQ.d)(this, rQ, "f")
          }
          set specularWeightTexture(QQ) {
            (0, HQ.h)(this, rQ, QQ, "f")
          }
          get specularColor() {
            return (0, HQ.d)(this, IQ, "f")
          }
          set specularColor(QQ) {
            (0, HQ.h)(this, IQ, QQ, "f")
          }
          get specularColorTexture() {
            return (0, HQ.d)(this, jQ, "f")
          }
          set specularColorTexture(QQ) {
            (0, HQ.h)(this, jQ, QQ, "f")
          }
          get specularRoughness() {
            return (0, HQ.d)(this, BQ, "f")
          }
          set specularRoughness(QQ) {
            (0, HQ.h)(this, BQ, QQ, "f")
          }
          get specularRoughnessTexture() {
            return (0, HQ.d)(this, yQ, "f")
          }
          set specularRoughnessTexture(QQ) {
            (0, HQ.h)(this, yQ, QQ, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, HQ.d)(this, VQ, "f")
          }
          set specularRoughnessAnisotropy(QQ) {
            (0, HQ.h)(this, VQ, QQ, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, HQ.d)(this, DQ, "f")
          }
          set specularRoughnessAnisotropyTexture(QQ) {
            (0, HQ.h)(this, DQ, QQ, "f")
          }
          get specularIor() {
            return (0, HQ.d)(this, pQ, "f")
          }
          set specularIor(QQ) {
            (0, HQ.h)(this, pQ, QQ, "f")
          }
          get transmissionWeight() {
            return (0, HQ.d)(this, GQ, "f")
          }
          set transmissionWeight(QQ) {
            (0, HQ.h)(this, GQ, QQ, "f")
          }
          get transmissionWeightTexture() {
            return (0, HQ.d)(this, UQ, "f")
          }
          set transmissionWeightTexture(QQ) {
            (0, HQ.h)(this, UQ, QQ, "f")
          }
          get transmissionColor() {
            return (0, HQ.d)(this, bQ, "f")
          }
          set transmissionColor(QQ) {
            (0, HQ.h)(this, bQ, QQ, "f")
          }
          get transmissionColorTexture() {
            return (0, HQ.d)(this, vQ, "f")
          }
          set transmissionColorTexture(QQ) {
            (0, HQ.h)(this, vQ, QQ, "f")
          }
          get transmissionDepth() {
            return (0, HQ.d)(this, dQ, "f")
          }
          set transmissionDepth(QQ) {
            (0, HQ.h)(this, dQ, QQ, "f")
          }
          get transmissionDepthTexture() {
            return (0, HQ.d)(this, cQ, "f")
          }
          set transmissionDepthTexture(QQ) {
            (0, HQ.h)(this, cQ, QQ, "f")
          }
          get transmissionScatter() {
            return (0, HQ.d)(this, AQ, "f")
          }
          set transmissionScatter(QQ) {
            (0, HQ.h)(this, AQ, QQ, "f")
          }
          get transmissionScatterTexture() {
            return (0, HQ.d)(this, RQ, "f")
          }
          set transmissionScatterTexture(QQ) {
            (0, HQ.h)(this, RQ, QQ, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, HQ.d)(this, EQ, "f")
          }
          set transmissionScatterAnisotropy(QQ) {
            (0, HQ.h)(this, EQ, QQ, "f")
          }
          get transmissionDispersionScale() {
            return (0, HQ.d)(this, LQ, "f")
          }
          set transmissionDispersionScale(QQ) {
            (0, HQ.h)(this, LQ, QQ, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, HQ.d)(this, SQ, "f")
          }
          set transmissionDispersionScaleTexture(QQ) {
            (0, HQ.h)(this, SQ, QQ, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, HQ.d)(this, tQ, "f")
          }
          set transmissionDispersionAbbeNumber(QQ) {
            (0, HQ.h)(this, tQ, QQ, "f")
          }
          get subsurfaceWeight() {
            return (0, HQ.d)(this, oQ, "f")
          }
          set subsurfaceWeight(QQ) {
            (0, HQ.h)(this, oQ, QQ, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, HQ.d)(this, eQ, "f")
          }
          set subsurfaceWeightTexture(QQ) {
            (0, HQ.h)(this, eQ, QQ, "f")
          }
          get subsurfaceColor() {
            return (0, HQ.d)(this, YQ, "f")
          }
          set subsurfaceColor(QQ) {
            (0, HQ.h)(this, YQ, QQ, "f")
          }
          get subsurfaceColorTexture() {
            return (0, HQ.d)(this, ZQ, "f")
          }
          set subsurfaceColorTexture(QQ) {
            (0, HQ.h)(this, ZQ, QQ, "f")
          }
          get subsurfaceRadius() {
            return (0, HQ.d)(this, MQ, "f")
          }
          set subsurfaceRadius(QQ) {
            (0, HQ.h)(this, MQ, QQ, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, HQ.d)(this, QW, "f")
          }
          set subsurfaceRadiusScale(QQ) {
            (0, HQ.h)(this, QW, QQ, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, HQ.d)(this, WW, "f")
          }
          set subsurfaceRadiusScaleTexture(QQ) {
            (0, HQ.h)(this, WW, QQ, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, HQ.d)(this, XW, "f")
          }
          set subsurfaceScatterAnisotropy(QQ) {
            (0, HQ.h)(this, XW, QQ, "f")
          }
          get coatWeight() {
            return (0, HQ.d)(this, wW, "f")
          }
          set coatWeight(QQ) {
            (0, HQ.h)(this, wW, QQ, "f")
          }
          get coatWeightTexture() {
            return (0, HQ.d)(this, qW, "f")
          }
          set coatWeightTexture(QQ) {
            (0, HQ.h)(this, qW, QQ, "f")
          }
          get coatColor() {
            return (0, HQ.d)(this, TW, "f")
          }
          set coatColor(QQ) {
            (0, HQ.h)(this, TW, QQ, "f")
          }
          get coatColorTexture() {
            return (0, HQ.d)(this, zW, "f")
          }
          set coatColorTexture(QQ) {
            (0, HQ.h)(this, zW, QQ, "f")
          }
          get coatRoughness() {
            return (0, HQ.d)(this, sW, "f")
          }
          set coatRoughness(QQ) {
            (0, HQ.h)(this, sW, QQ, "f")
          }
          get coatRoughnessTexture() {
            return (0, HQ.d)(this, FW, "f")
          }
          set coatRoughnessTexture(QQ) {
            (0, HQ.h)(this, FW, QQ, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, HQ.d)(this, PW, "f")
          }
          set coatRoughnessAnisotropy(QQ) {
            (0, HQ.h)(this, PW, QQ, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, HQ.d)(this, jW, "f")
          }
          set coatRoughnessAnisotropyTexture(QQ) {
            (0, HQ.h)(this, jW, QQ, "f")
          }
          get coatIor() {
            return (0, HQ.d)(this, BW, "f")
          }
          set coatIor(QQ) {
            (0, HQ.h)(this, BW, QQ, "f")
          }
          get coatDarkening() {
            return (0, HQ.d)(this, yW, "f")
          }
          set coatDarkening(QQ) {
            (0, HQ.h)(this, yW, QQ, "f")
          }
          get coatDarkeningTexture() {
            return (0, HQ.d)(this, VW, "f")
          }
          set coatDarkeningTexture(QQ) {
            (0, HQ.h)(this, VW, QQ, "f")
          }
          get fuzzWeight() {
            return (0, HQ.d)(this, DW, "f")
          }
          set fuzzWeight(QQ) {
            (0, HQ.h)(this, DW, QQ, "f")
          }
          get fuzzWeightTexture() {
            return (0, HQ.d)(this, pW, "f")
          }
          set fuzzWeightTexture(QQ) {
            (0, HQ.h)(this, pW, QQ, "f")
          }
          get fuzzColor() {
            return (0, HQ.d)(this, GW, "f")
          }
          set fuzzColor(QQ) {
            (0, HQ.h)(this, GW, QQ, "f")
          }
          get fuzzColorTexture() {
            return (0, HQ.d)(this, UW, "f")
          }
          set fuzzColorTexture(QQ) {
            (0, HQ.h)(this, UW, QQ, "f")
          }
          get fuzzRoughness() {
            return (0, HQ.d)(this, bW, "f")
          }
          set fuzzRoughness(QQ) {
            (0, HQ.h)(this, bW, QQ, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, HQ.d)(this, HW, "f")
          }
          set fuzzRoughnessTexture(QQ) {
            (0, HQ.h)(this, HW, QQ, "f")
          }
          get geometryThinWalled() {
            return (0, HQ.d)(this, aW, "f")
          }
          set geometryThinWalled(QQ) {
            (0, HQ.h)(this, aW, QQ, "f")
          }
          get geometryNormalTexture() {
            return (0, HQ.d)(this, lW, "f")
          }
          set geometryNormalTexture(QQ) {
            (0, HQ.h)(this, lW, QQ, "f")
          }
          get geometryTangent() {
            return (0, HQ.d)(this, hW, "f")
          }
          set geometryTangent(QQ) {
            (0, HQ.h)(this, hW, QQ, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(QQ) {
            this.geometryTangent = new kQ.q(Math.cos(QQ), Math.sin(QQ))
          }
          get geometryTangentTexture() {
            return (0, HQ.d)(this, iW, "f")
          }
          set geometryTangentTexture(QQ) {
            (0, HQ.h)(this, iW, QQ, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, HQ.d)(this, cW, "f")
          }
          set geometryCoatNormalTexture(QQ) {
            (0, HQ.h)(this, cW, QQ, "f")
          }
          get geometryCoatTangent() {
            return (0, HQ.d)(this, AW, "f")
          }
          set geometryCoatTangent(QQ) {
            (0, HQ.h)(this, AW, QQ, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(QQ) {
            this.geometryCoatTangent = new kQ.q(Math.cos(QQ), Math.sin(QQ))
          }
          get geometryCoatTangentTexture() {
            return (0, HQ.d)(this, RW, "f")
          }
          set geometryCoatTangentTexture(QQ) {
            (0, HQ.h)(this, RW, QQ, "f")
          }
          get geometryOpacity() {
            return (0, HQ.d)(this, EW, "f")
          }
          set geometryOpacity(QQ) {
            (0, HQ.h)(this, EW, QQ, "f")
          }
          get geometryOpacityTexture() {
            return (0, HQ.d)(this, CW, "f")
          }
          set geometryOpacityTexture(QQ) {
            (0, HQ.h)(this, CW, QQ, "f")
          }
          get geometryThickness() {
            return (0, HQ.d)(this, uW, "f")
          }
          set geometryThickness(QQ) {
            (0, HQ.h)(this, uW, QQ, "f")
          }
          get geometryThicknessTexture() {
            return (0, HQ.d)(this, LW, "f")
          }
          set geometryThicknessTexture(QQ) {
            (0, HQ.h)(this, LW, QQ, "f")
          }
          get emissionLuminance() {
            return (0, HQ.d)(this, kW, "f")
          }
          set emissionLuminance(QQ) {
            (0, HQ.h)(this, kW, QQ, "f")
          }
          get emissionColor() {
            return (0, HQ.d)(this, fW, "f")
          }
          set emissionColor(QQ) {
            (0, HQ.h)(this, fW, QQ, "f")
          }
          get emissionColorTexture() {
            return (0, HQ.d)(this, tW, "f")
          }
          set emissionColorTexture(QQ) {
            (0, HQ.h)(this, tW, QQ, "f")
          }
          get thinFilmWeight() {
            return (0, HQ.d)(this, eW, "f")
          }
          set thinFilmWeight(QQ) {
            (0, HQ.h)(this, eW, QQ, "f")
          }
          get thinFilmWeightTexture() {
            return (0, HQ.d)(this, NW, "f")
          }
          set thinFilmWeightTexture(QQ) {
            (0, HQ.h)(this, NW, QQ, "f")
          }
          get thinFilmThickness() {
            return (0, HQ.d)(this, ZW, "f")
          }
          set thinFilmThickness(QQ) {
            (0, HQ.h)(this, ZW, QQ, "f")
          }
          get thinFilmThicknessMin() {
            return (0, HQ.d)(this, mW, "f")
          }
          set thinFilmThicknessMin(QQ) {
            (0, HQ.h)(this, mW, QQ, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, HQ.d)(this, MW, "f")
          }
          set thinFilmThicknessTexture(QQ) {
            (0, HQ.h)(this, MW, QQ, "f")
          }
          get thinFilmIor() {
            return (0, HQ.d)(this, QX, "f")
          }
          set thinFilmIor(QQ) {
            (0, HQ.h)(this, QX, QQ, "f")
          }
          get ambientOcclusionTexture() {
            return (0, HQ.d)(this, WX, "f")
          }
          set ambientOcclusionTexture(QQ) {
            (0, HQ.h)(this, WX, QQ, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(QQ) {
            this._sssQuality !== QQ && (this._sssQuality = QQ, this.KWQ(1))
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
            return (0, HQ.d)(this, XX, "f")
          }
          set directIntensity(QQ) {
            (0, HQ.h)(this, XX, QQ, "f")
          }
          get environmentIntensity() {
            return (0, HQ.d)(this, wX, "f")
          }
          set environmentIntensity(QQ) {
            (0, HQ.h)(this, wX, QQ, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, HQ.d)(this, qX, "f")
          }
          set useSpecularWeightFromTextureAlpha(QQ) {
            (0, HQ.h)(this, qX, QQ, "f")
          }
          get forceAlphaTest() {
            return (0, HQ.d)(this, TX, "f")
          }
          set forceAlphaTest(QQ) {
            (0, HQ.h)(this, TX, QQ, "f")
          }
          get alphaCutOff() {
            return (0, HQ.d)(this, zX, "f")
          }
          set alphaCutOff(QQ) {
            (0, HQ.h)(this, zX, QQ, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, HQ.d)(this, sX, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(QQ) {
            (0, HQ.h)(this, sX, QQ, "f")
          }
          get useAmbientInGrayScale() {
            return (0, HQ.d)(this, FX, "f")
          }
          set useAmbientInGrayScale(QQ) {
            (0, HQ.h)(this, FX, QQ, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(xQ.b.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === TQ.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(QQ) {
            QQ !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = QQ ? TQ.b.LIGHTFALLOFF_PHYSICAL : TQ.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === TQ.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(QQ) {
            QQ !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = QQ ? TQ.b.LIGHTFALLOFF_GLTF : TQ.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, HQ.d)(this, PX, "f")
          }
          set useObjectSpaceNormalMap(QQ) {
            (0, HQ.h)(this, PX, QQ, "f")
          }
          get useParallax() {
            return (0, HQ.d)(this, gX, "f")
          }
          set useParallax(QQ) {
            (0, HQ.h)(this, gX, QQ, "f")
          }
          get useParallaxOcclusion() {
            return (0, HQ.d)(this, JX, "f")
          }
          set useParallaxOcclusion(QQ) {
            (0, HQ.h)(this, JX, QQ, "f")
          }
          get parallaxScaleBias() {
            return (0, HQ.d)(this, rX, "f")
          }
          set parallaxScaleBias(QQ) {
            (0, HQ.h)(this, rX, QQ, "f")
          }
          get disableLighting() {
            return (0, HQ.d)(this, IX, "f")
          }
          set disableLighting(QQ) {
            (0, HQ.h)(this, IX, QQ, "f")
          }
          get forceIrradianceInFragment() {
            return (0, HQ.d)(this, jX, "f")
          }
          set forceIrradianceInFragment(QQ) {
            (0, HQ.h)(this, jX, QQ, "f")
          }
          get maxSimultaneousLights() {
            return (0, HQ.d)(this, BX, "f")
          }
          set maxSimultaneousLights(QQ) {
            (0, HQ.h)(this, BX, QQ, "f")
          }
          get invertNormalMapX() {
            return (0, HQ.d)(this, yX, "f")
          }
          set invertNormalMapX(QQ) {
            (0, HQ.h)(this, yX, QQ, "f")
          }
          get invertNormalMapY() {
            return (0, HQ.d)(this, VX, "f")
          }
          set invertNormalMapY(QQ) {
            (0, HQ.h)(this, VX, QQ, "f")
          }
          get twoSidedLighting() {
            return (0, HQ.d)(this, DX, "f")
          }
          set twoSidedLighting(QQ) {
            (0, HQ.h)(this, DX, QQ, "f")
          }
          get useAlphaFresnel() {
            return (0, HQ.d)(this, pX, "f")
          }
          set useAlphaFresnel(QQ) {
            (0, HQ.h)(this, pX, QQ, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, HQ.d)(this, GX, "f")
          }
          set useLinearAlphaFresnel(QQ) {
            (0, HQ.h)(this, GX, QQ, "f")
          }
          get environmentBRDFTexture() {
            return (0, HQ.d)(this, UX, "f")
          }
          set environmentBRDFTexture(QQ) {
            (0, HQ.h)(this, UX, QQ, "f")
          }
          get forceNormalForward() {
            return (0, HQ.d)(this, bX, "f")
          }
          set forceNormalForward(QQ) {
            (0, HQ.h)(this, bX, QQ, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, HQ.d)(this, vX, "f")
          }
          set enableSpecularAntiAliasing(QQ) {
            (0, HQ.h)(this, vX, QQ, "f")
          }
          get useHorizonOcclusion() {
            return (0, HQ.d)(this, dX, "f")
          }
          set useHorizonOcclusion(QQ) {
            (0, HQ.h)(this, dX, QQ, "f")
          }
          get useRadianceOcclusion() {
            return (0, HQ.d)(this, HX, "f")
          }
          set useRadianceOcclusion(QQ) {
            (0, HQ.h)(this, HX, QQ, "f")
          }
          get unlit() {
            return (0, HQ.d)(this, aX, "f")
          }
          set unlit(QQ) {
            (0, HQ.h)(this, aX, QQ, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, HQ.d)(this, lX, "f")
          }
          set applyDecalMapAfterDetailMap(QQ) {
            (0, HQ.h)(this, lX, QQ, "f")
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
            this._refractionHighQualityBlur !== QQ && (this._refractionHighQualityBlur = QQ, this.KWQ(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(QQ) {
            this._realTimeFiltering = QQ, this.KWQ(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(QQ) {
            this._realTimeFilteringQuality = QQ, this.KWQ(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(QQ) {
            this._fuzzSampleNumber = QQ, this.KWQ(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, HQ.d)(this, hX, "f")
          }
          set debugMode(QQ) {
            (0, HQ.h)(this, hX, QQ, "f")
          }
          constructor(XQ, aQ) {
            super(XQ, aQ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || QQ.ForceGLSL), WQ.set(this, ((0, HQ.n)(this, Rq), (0, HQ.n)(this, Eq, void 0))), this._baseWeight = ((0, HQ.n)(this, Cq), new xW("base_weight", 1, "vBaseWeight", 1)), wQ.set(this, (0, HQ.n)(this, uq, void 0)), this._baseWeightTexture = ((0, HQ.n)(this, Lq), new YW("base_weight", "baseWeight", "BASE_WEIGHT")), qQ.set(this, (0, HQ.n)(this, kq, void 0)), this._baseColor = ((0, HQ.n)(this, fq), new xW("base_color", xQ.b.White(), "vBaseColor", 4)), zQ.set(this, (0, HQ.n)(this, Sq, void 0)), this._baseColorTexture = ((0, HQ.n)(this, tq), new YW("base_color", "baseColor", "BASE_COLOR")), sQ.set(this, (0, HQ.n)(this, oq, void 0)), this._baseDiffuseRoughness = ((0, HQ.n)(this, eq), new xW("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), FQ.set(this, (0, HQ.n)(this, nq, void 0)), this._baseDiffuseRoughnessTexture = ((0, HQ.n)(this, xq), new YW("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), PQ.set(this, (0, HQ.n)(this, Yq, void 0)), this._baseMetalness = ((0, HQ.n)(this, Nq), new xW("base_metalness", 0, "vReflectanceInfo", 4, 0)), gQ.set(this, (0, HQ.n)(this, Zq, void 0)), this._baseMetalnessTexture = ((0, HQ.n)(this, Oq), new YW("base_metalness", "baseMetalness", "BASE_METALNESS")), JQ.set(this, (0, HQ.n)(this, Kq, void 0)), this._specularWeight = ((0, HQ.n)(this, mq), new xW("specular_weight", 1, "vReflectanceInfo", 4, 3)), rQ.set(this, (0, HQ.n)(this, Mq, void 0)), this._specularWeightTexture = ((0, HQ.n)(this, QT), new YW("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), IQ.set(this, (0, HQ.n)(this, WT, void 0)), this._specularColor = ((0, HQ.n)(this, XT), new xW("specular_color", xQ.b.White(), "vSpecularColor", 4)), jQ.set(this, (0, HQ.n)(this, wT, void 0)), this._specularColorTexture = ((0, HQ.n)(this, qT), new YW("specular_color", "specularColor", "SPECULAR_COLOR")), BQ.set(this, (0, HQ.n)(this, TT, void 0)), this._specularRoughness = ((0, HQ.n)(this, zT), new xW("specular_roughness", .3, "vReflectanceInfo", 4, 1)), yQ.set(this, (0, HQ.n)(this, sT, void 0)), this._specularRoughnessTexture = ((0, HQ.n)(this, FT), new YW("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), VQ.set(this, (0, HQ.n)(this, PT, void 0)), this._specularRoughnessAnisotropy = ((0, HQ.n)(this, gT), new xW("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), DQ.set(this, (0, HQ.n)(this, JT, void 0)), this._specularRoughnessAnisotropyTexture = ((0, HQ.n)(this, rT), new YW("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), pQ.set(this, (0, HQ.n)(this, IT, void 0)), this._specularIor = ((0, HQ.n)(this, jT), new xW("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), GQ.set(this, (0, HQ.n)(this, BT, void 0)), this._transmissionWeight = ((0, HQ.n)(this, yT), new xW("transmission_weight", 0, "vTransmissionWeight", 1)), UQ.set(this, (0, HQ.n)(this, VT, void 0)), this._transmissionWeightTexture = ((0, HQ.n)(this, DT), new YW("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), bQ.set(this, (0, HQ.n)(this, pT, void 0)), this._transmissionColor = ((0, HQ.n)(this, GT), new xW("transmission_color", xQ.b.White(), "vTransmissionColor", 3, 0)), vQ.set(this, (0, HQ.n)(this, UT, void 0)), this._transmissionColorTexture = ((0, HQ.n)(this, bT), new YW("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), dQ.set(this, (0, HQ.n)(this, vT, void 0)), this._transmissionDepth = ((0, HQ.n)(this, dT), new xW("transmission_depth", 0, "vTransmissionDepth", 1, 0)), cQ.set(this, (0, HQ.n)(this, HT, void 0)), this._transmissionDepthTexture = ((0, HQ.n)(this, aT), new YW("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), AQ.set(this, (0, HQ.n)(this, lT, void 0)), this._transmissionScatter = ((0, HQ.n)(this, hT), new xW("transmission_scatter", xQ.b.Black(), "vTransmissionScatter", 3, 0)), RQ.set(this, (0, HQ.n)(this, iT, void 0)), this._transmissionScatterTexture = ((0, HQ.n)(this, cT), new YW("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), EQ.set(this, (0, HQ.n)(this, AT, void 0)), this._transmissionScatterAnisotropy = ((0, HQ.n)(this, RT), new xW("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), LQ.set(this, (0, HQ.n)(this, ET, void 0)), this._transmissionDispersionScale = ((0, HQ.n)(this, CT), new xW("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), SQ.set(this, (0, HQ.n)(this, uT, void 0)), this._transmissionDispersionScaleTexture = ((0, HQ.n)(this, LT), new YW("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), tQ.set(this, (0, HQ.n)(this, kT, void 0)), this._transmissionDispersionAbbeNumber = ((0, HQ.n)(this, fT), new xW("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), oQ.set(this, (0, HQ.n)(this, ST, void 0)), this._subsurfaceWeight = ((0, HQ.n)(this, tT), new xW("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), eQ.set(this, (0, HQ.n)(this, oT, void 0)), this._subsurfaceWeightTexture = ((0, HQ.n)(this, eT), new YW("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), YQ.set(this, (0, HQ.n)(this, nT, void 0)), this._subsurfaceColor = ((0, HQ.n)(this, xT), new xW("subsurface_color", new xQ.b(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), ZQ.set(this, (0, HQ.n)(this, YT, void 0)), this._subsurfaceColorTexture = ((0, HQ.n)(this, NT), new YW("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), MQ.set(this, (0, HQ.n)(this, ZT, void 0)), this._subsurfaceRadius = ((0, HQ.n)(this, OT), new xW("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), QW.set(this, (0, HQ.n)(this, KT, void 0)), this._subsurfaceRadiusScale = ((0, HQ.n)(this, mT), new xW("subsurface_radius_scale", new xQ.b(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), WW.set(this, (0, HQ.n)(this, MT, void 0)), this._subsurfaceRadiusScaleTexture = ((0, HQ.n)(this, Qz), new YW("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), XW.set(this, (0, HQ.n)(this, Wz, void 0)), this._subsurfaceScatterAnisotropy = ((0, HQ.n)(this, Xz), new xW("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), wW.set(this, (0, HQ.n)(this, wz, void 0)), this._coatWeight = ((0, HQ.n)(this, qz), new xW("coat_weight", 0, "vCoatWeight", 1, 0)), qW.set(this, (0, HQ.n)(this, Tz, void 0)), this._coatWeightTexture = ((0, HQ.n)(this, zz), new YW("coat_weight", "coatWeight", "COAT_WEIGHT")), TW.set(this, (0, HQ.n)(this, sz, void 0)), this._coatColor = ((0, HQ.n)(this, Fz), new xW("coat_color", xQ.b.White(), "vCoatColor", 3, 0)), zW.set(this, (0, HQ.n)(this, Pz, void 0)), this._coatColorTexture = ((0, HQ.n)(this, gz), new YW("coat_color", "coatColor", "COAT_COLOR")), sW.set(this, (0, HQ.n)(this, Jz, void 0)), this._coatRoughness = ((0, HQ.n)(this, rz), new xW("coat_roughness", 0, "vCoatRoughness", 1, 0)), FW.set(this, (0, HQ.n)(this, Iz, void 0)), this._coatRoughnessTexture = ((0, HQ.n)(this, jz), new YW("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), PW.set(this, (0, HQ.n)(this, Bz, void 0)), this._coatRoughnessAnisotropy = ((0, HQ.n)(this, yz), new xW("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), jW.set(this, (0, HQ.n)(this, Vz, void 0)), this._coatRoughnessAnisotropyTexture = ((0, HQ.n)(this, Dz), new YW("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), BW.set(this, (0, HQ.n)(this, pz, void 0)), this._coatIor = ((0, HQ.n)(this, Gz), new xW("coat_ior", 1.5, "vCoatIor", 1, 0)), yW.set(this, (0, HQ.n)(this, Uz, void 0)), this._coatDarkening = ((0, HQ.n)(this, bz), new xW("coat_darkening", 1, "vCoatDarkening", 1, 0)), VW.set(this, (0, HQ.n)(this, vz, void 0)), this._coatDarkeningTexture = ((0, HQ.n)(this, dz), new YW("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, DW.set(this, (0, HQ.n)(this, Hz, void 0)), this._fuzzWeight = ((0, HQ.n)(this, az), new xW("fuzz_weight", 0, "vFuzzWeight", 1, 0)), pW.set(this, (0, HQ.n)(this, lz, void 0)), this._fuzzWeightTexture = ((0, HQ.n)(this, hz), new YW("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), GW.set(this, (0, HQ.n)(this, iz, void 0)), this._fuzzColor = ((0, HQ.n)(this, cz), new xW("fuzz_color", xQ.b.White(), "vFuzzColor", 3, 0)), UW.set(this, (0, HQ.n)(this, Az, void 0)), this._fuzzColorTexture = ((0, HQ.n)(this, Rz), new YW("fuzz_color", "fuzzColor", "FUZZ_COLOR")), bW.set(this, (0, HQ.n)(this, Ez, void 0)), this._fuzzRoughness = ((0, HQ.n)(this, Cz), new xW("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), HW.set(this, (0, HQ.n)(this, uz, void 0)), this._fuzzRoughnessTexture = ((0, HQ.n)(this, Lz), new YW("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), aW.set(this, (0, HQ.n)(this, kz, void 0)), this._geometryThinWalled = ((0, HQ.n)(this, fz), new xW("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), lW.set(this, (0, HQ.n)(this, Sz, void 0)), this._geometryNormalTexture = ((0, HQ.n)(this, tz), new YW("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), hW.set(this, (0, HQ.n)(this, oz, void 0)), this._geometryTangent = ((0, HQ.n)(this, ez), new xW("geometry_tangent", new kQ.q(1, 0), "vSpecularAnisotropy", 3, 0)), iW.set(this, (0, HQ.n)(this, nz, void 0)), this._geometryTangentTexture = ((0, HQ.n)(this, xz), new YW("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), cW.set(this, (0, HQ.n)(this, Yz, void 0)), this._geometryCoatNormalTexture = ((0, HQ.n)(this, Nz), new YW("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), AW.set(this, (0, HQ.n)(this, Zz, void 0)), this._geometryCoatTangent = ((0, HQ.n)(this, Oz), new xW("geometry_coat_tangent", new kQ.q(1, 0), "vGeometryCoatTangent", 2, 0)), RW.set(this, (0, HQ.n)(this, Kz, void 0)), this._geometryCoatTangentTexture = ((0, HQ.n)(this, mz), new YW("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), EW.set(this, (0, HQ.n)(this, Mz, void 0)), this._geometryOpacity = ((0, HQ.n)(this, Qs), new xW("geometry_opacity", 1, "vBaseColor", 4, 3)), CW.set(this, (0, HQ.n)(this, Ws, void 0)), this._geometryOpacityTexture = ((0, HQ.n)(this, Xs), new YW("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), uW.set(this, (0, HQ.n)(this, ws, void 0)), this._geometryThickness = ((0, HQ.n)(this, qs), new xW("geometry_thickness", 0, "vGeometryThickness", 1, 0)), LW.set(this, (0, HQ.n)(this, Ts, void 0)), this._geometryThicknessTexture = ((0, HQ.n)(this, zs), new YW("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), kW.set(this, (0, HQ.n)(this, ss, void 0)), this._emissionLuminance = ((0, HQ.n)(this, Fs), new xW("emission_luminance", 1, "vLightingIntensity", 4, 1)), fW.set(this, (0, HQ.n)(this, Ps, void 0)), this._emissionColor = ((0, HQ.n)(this, gs), new xW("emission_color", xQ.b.Black(), "vEmissionColor", 3)), tW.set(this, (0, HQ.n)(this, rs, void 0)), this._emissionColorTexture = ((0, HQ.n)(this, Is), new YW("emission_color", "emissionColor", "EMISSION_COLOR")), eW.set(this, (0, HQ.n)(this, Bs, void 0)), this._thinFilmWeight = ((0, HQ.n)(this, ys), new xW("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), NW.set(this, (0, HQ.n)(this, Vs, void 0)), this._thinFilmWeightTexture = ((0, HQ.n)(this, Ds), new YW("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), ZW.set(this, (0, HQ.n)(this, ps, void 0)), this._thinFilmThickness = ((0, HQ.n)(this, Gs), new xW("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), mW.set(this, (0, HQ.n)(this, Us, void 0)), this._thinFilmThicknessMin = ((0, HQ.n)(this, bs), new xW("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), MW.set(this, (0, HQ.n)(this, vs, void 0)), this._thinFilmThicknessTexture = ((0, HQ.n)(this, ds), new YW("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), QX.set(this, (0, HQ.n)(this, Hs, void 0)), this._thinFilmIor = ((0, HQ.n)(this, as), new xW("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), WX.set(this, (0, HQ.n)(this, ls, void 0)), this._ambientOcclusionTexture = ((0, HQ.n)(this, hs), new YW("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = QQ.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, XX.set(this, (0, HQ.n)(this, is, 1)), wX.set(this, ((0, HQ.n)(this, cs), (0, HQ.n)(this, As, 1))), qX.set(this, ((0, HQ.n)(this, Rs), (0, HQ.n)(this, Es, !1))), TX.set(this, ((0, HQ.n)(this, Cs), (0, HQ.n)(this, us, !1))), zX.set(this, ((0, HQ.n)(this, Ls), (0, HQ.n)(this, ks, .4))), sX.set(this, ((0, HQ.n)(this, fs), (0, HQ.n)(this, Ss, !1))), FX.set(this, ((0, HQ.n)(this, ts), (0, HQ.n)(this, os, !1))), PX.set(this, ((0, HQ.n)(this, es), (0, HQ.n)(this, ns, !1))), gX.set(this, ((0, HQ.n)(this, xs), (0, HQ.n)(this, Ys, !1))), JX.set(this, ((0, HQ.n)(this, Ns), (0, HQ.n)(this, Zs, !1))), rX.set(this, ((0, HQ.n)(this, Os), (0, HQ.n)(this, Ks, .05))), IX.set(this, ((0, HQ.n)(this, ms), (0, HQ.n)(this, Ms, !1))), jX.set(this, ((0, HQ.n)(this, QF), (0, HQ.n)(this, WF, !1))), BX.set(this, ((0, HQ.n)(this, XF), (0, HQ.n)(this, wF, 4))), yX.set(this, ((0, HQ.n)(this, qF), (0, HQ.n)(this, TF, !1))), VX.set(this, ((0, HQ.n)(this, zF), (0, HQ.n)(this, sF, !1))), DX.set(this, ((0, HQ.n)(this, FF), (0, HQ.n)(this, PF, !1))), pX.set(this, ((0, HQ.n)(this, gF), (0, HQ.n)(this, JF, !1))), GX.set(this, ((0, HQ.n)(this, rF), (0, HQ.n)(this, IF, !1))), UX.set(this, ((0, HQ.n)(this, jF), (0, HQ.n)(this, BF, null))), bX.set(this, ((0, HQ.n)(this, yF), (0, HQ.n)(this, VF, !1))), vX.set(this, ((0, HQ.n)(this, DF), (0, HQ.n)(this, pF, !1))), dX.set(this, ((0, HQ.n)(this, GF), (0, HQ.n)(this, UF, !0))), HX.set(this, ((0, HQ.n)(this, bF), (0, HQ.n)(this, vF, !0))), aX.set(this, ((0, HQ.n)(this, dF), (0, HQ.n)(this, HF, !1))), lX.set(this, ((0, HQ.n)(this, aF), (0, HQ.n)(this, lF, !1))), this._lightingInfos = ((0, HQ.n)(this, hF), new kQ.w(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = TQ.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new hQ.e(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, hX.set(this, (0, HQ.n)(this, iF, 0)), this.debugLimit = ((0, HQ.n)(this, cF), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = TQ.b.MATERIAL_OPAQUE, this.sE() && !this.sE()?.Uj().isWebGPU && this.sE().Uj().Mj < 2 && lQ.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), QQ._noiseTextures[this.sE().uniqueId] || (QQ._noiseTextures[this.sE().uniqueId] = new iQ.g(dW.g.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.sE(), !1, !0, 1), this.sE().yE.addOnce((() => {
              QQ._noiseTextures[this.sE().uniqueId]?.dispose(), delete QQ._noiseTextures[this.sE().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), OQ.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), OQ.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = uQ(this.sE()), this._environmentFuzzBRDFTexture = CQ(this.sE()), this.prePassConfiguration = new nQ.e, this._propertyList = {};
            for (const QQ of Object.getOwnPropertyNames(this)) {
              const WQ = this[QQ];
              WQ instanceof xW && (this._propertyList[QQ] = WQ)
            }
            Object.keys(this._propertyList).forEach((QQ => {
              const WQ = this._propertyList[QQ];
              let XQ = this._uniformsList[WQ.targetUniformName];
              XQ ? XQ.numComponents !== WQ.targetUniformComponentNum ? lQ.b.Error(`Uniform ${WQ.targetUniformName} already exists of size ${XQ.numComponents}, but trying to set it to ${WQ.targetUniformComponentNum}.`) : XQ.requiredDefine !== WQ.requiredDefine && (XQ.requiredDefine = void 0) : (XQ = new nW(WQ.targetUniformName, WQ.targetUniformComponentNum), XQ.requiredDefine = WQ.requiredDefine, this._uniformsList[WQ.targetUniformName] = XQ), "" === XQ.firstLinkedKey && (XQ.firstLinkedKey = WQ.name), XQ.linkedProperties[WQ.name] = WQ
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const QQ of Object.getOwnPropertyNames(this)) {
              const WQ = this[QQ];
              WQ instanceof YW && (this._samplersList[QQ] = WQ)
            }
            for (const QQ in this._samplersList) {
              const WQ = this._samplersList[QQ].textureDefine;
              this._samplerDefines[WQ] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[WQ + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[WQ + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(OQ.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(OQ.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== TQ.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
          clone(WQ) {
            let XQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const qQ = vW.b.Clone((() => new QQ(WQ, this.sE())), this, {
              cloneTexturesOnlyOnce: XQ
            });
            return qQ.id = WQ, qQ.name = WQ, this.stencil.copyTo(qQ.stencil), this._clonePlugins(qQ, wQ), qQ
          }
          serialize() {
            const QQ = super.serialize();
            return QQ.customType = "BABYLON.OpenPBRMaterial", QQ
          }
          static Parse(WQ, XQ, wQ) {
            const qQ = vW.b.Parse((() => new QQ(WQ.name, XQ)), WQ, XQ, wQ);
            return WQ.stencil && qQ.stencil.parse(WQ.stencil, XQ, wQ), TQ.b._ParsePlugins(WQ, qQ, XQ, wQ), qQ
          }
          forceCompilation(QQ, WQ, XQ) {
            const wQ = {
              clipPlane: !1,
              useInstances: !1,
              ...XQ
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const XQ = new OW({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                qQ = this._prepareEffect(QQ, QQ, XQ, void 0, void 0, wQ.useInstances, wQ.clipPlane);
              this._onEffectCreatedObservable && (oW.effect = qQ, oW.subMesh = null, this._onEffectCreatedObservable.notifyObservers(oW)), qQ.isReady() ? WQ && WQ(this) : qQ.onCompileObservable.add((() => {
                WQ && WQ(this)
              }))
            })()
          }
          isReadyForSubMesh(WQ, XQ, wQ) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const qQ = XQ._drawWrapper;
            if (qQ.effect && this.isFrozen && qQ._wasPreviouslyReady && qQ._wasPreviouslyUsingInstances === wQ) return !0;
            XQ.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), XQ.materialDefines = new OW({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const TQ = XQ.materialDefines;
            if (this._isReadyForSubMesh(XQ)) return !0;
            const zQ = this.sE(),
              sQ = zQ.Uj();
            if (TQ._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, zQ.texturesEnabled)) {
              for (const QQ in this._samplersList) {
                const WQ = this._samplersList[QQ];
                if (WQ.value && !WQ.value.isReadyOrNotBlocking()) return !1
              }
              const WQ = this._getRadianceTexture();
              if (WQ && OQ.e.ReflectionTextureEnabled) {
                if (!WQ.isReadyOrNotBlocking()) return !1;
                if (WQ.irradianceTexture) {
                  if (!WQ.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!WQ.sphericalPolynomial && WQ.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && OQ.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && OQ.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && OQ.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (QQ._noiseTextures[zQ.uniqueId] && !QQ._noiseTextures[zQ.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = TQ, this._eventInfo.subMesh = XQ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (TQ._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (TQ.AREALIGHTUSED)
              for (let QQ = 0; QQ < WQ.lightSources.length; QQ++)
                if (!WQ.lightSources[QQ]._isReady()) return !1;
            if (sQ.getCaps().standardDerivatives || WQ.isVerticesDataPresent(fQ.l.NormalKind) || (WQ.createNormals(!0), lQ.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + WQ.name)), !(0, mQ.e)(zQ, WQ, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const FQ = XQ.effect,
              PQ = TQ._areLightsDisposed,
              gQ = this._prepareEffect(WQ, XQ.getRenderingMesh(), TQ, this.onCompiled, this.onError, wQ, null);
            let JQ = !1;
            if (gQ)
              if (this._onEffectCreatedObservable && (oW.effect = gQ, oW.subMesh = XQ, this._onEffectCreatedObservable.notifyObservers(oW)), this.allowShaderHotSwapping && FQ && !gQ.isReady()) {
                if (TQ.markAsUnprocessed(), JQ = this.isFrozen, PQ) return TQ._areLightsDisposed = !0, !1
              } else zQ.resetCachedMaterial(), XQ.setEffect(gQ, TQ, this._materialContext);
            return !(!XQ.effect || !XQ.effect.isReady()) && (TQ._renderId = zQ.getRenderId(), qQ._wasPreviouslyReady = !JQ, qQ._wasPreviouslyUsingInstances = !!wQ, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const QQ = this._uniformBuffer;
            QQ.addUniform("vTangentSpaceParams", 2), QQ.addUniform("vLightingIntensity", 4), QQ.addUniform("pointSize", 1), QQ.addUniform("vDebugMode", 2), QQ.addUniform("renderTargetSize", 2), QQ.addUniform("cameraInfo", 4), QQ.addUniform("vTextureRepetitionHexTilingParams", 4), QQ.addUniform("backgroundRefractionMatrix", 16), QQ.addUniform("vBackgroundRefractionInfos", 3), (0, mQ.nb)(QQ, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((WQ => {
              QQ.addUniform(WQ.name, WQ.numComponents)
            })), Object.values(this._samplersList).forEach((WQ => {
              QQ.addUniform(WQ.samplerInfoName, 2), QQ.addUniform(WQ.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(QQ, WQ, XQ, wQ) {
            if (0 === this.geometryThickness) QQ.updateFloat("vGeometryThickness", 0);
            else {
              wQ.getRenderingMesh().getWorldMatrix().decompose(kQ.m.vj[0]);
              const WQ = Math.max(Math.abs(kQ.m.vj[0].x), Math.abs(kQ.m.vj[0].y), Math.abs(kQ.m.vj[0].z));
              QQ.updateFloat("vGeometryThickness", this.geometryThickness * WQ)
            }
          }
          bindForSubMesh(WQ, XQ, wQ) {
            const qQ = this.sE(),
              TQ = wQ.materialDefines;
            if (!TQ) return;
            const zQ = wQ.effect;
            if (!zQ) return;
            this._activeEffect = zQ, XQ.getMeshUniformBuffer().bindToEffect(zQ, "Mesh"), XQ.transferToEffect(WQ);
            const sQ = qQ.Uj();
            this._uniformBuffer.bindToEffect(zQ, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, qQ, XQ, WQ, this.isFrozen), IW.d.Bind(sQ.currentRenderPassId, this._activeEffect, XQ, WQ, this);
            const FQ = qQ.activeCamera;
            FQ ? this._uniformBuffer.updateFloat4("cameraInfo", FQ.minZ, FQ.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const PQ = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", PQ[0], PQ[1], PQ[2], PQ[3]), this._eventInfo.subMesh = wQ, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), TQ.OBJECTSPACE_NORMALMAP && (WQ.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const gQ = this._mustRebind(qQ, zQ, wQ, XQ.visibility),
              JQ = sQ._features.needToAlwaysBindUniformBuffers;
            (0, mQ.i)(XQ, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, JW.c)(this._activeEffect, this._vertexPullingMetadata);
            const rQ = this._uniformBuffer;
            if (gQ) {
              this.bindViewProjection(zQ);
              const WQ = this._getRadianceTexture();
              if (!rQ.useUbo || !this.isFrozen || !rQ.isSync || wQ._drawWrapper._forceRebindOnNextCall) {
                if (qQ.texturesEnabled) {
                  for (const QQ in this._samplersList) {
                    const WQ = this._samplersList[QQ];
                    WQ.value && (rQ.updateFloat2(WQ.samplerInfoName, WQ.value.coordinatesIndex, WQ.value.level), (0, mQ.E)(WQ.value, rQ, WQ.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (qQ._mirroredCameraPosition ? rQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : rQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, mQ.p)(qQ, TQ, rQ, xQ.b.White(), WQ, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && rQ.updateFloat("pointSize", this.pointSize);
                const QQ = this._uniformsArray;
                for (let WQ = 0, XQ = QQ.length; WQ < XQ; WQ++) {
                  const XQ = QQ[WQ];
                  (void 0 === XQ.requiredDefine || TQ[XQ.requiredDefine]) && (4 === XQ.numComponents ? (XQ.populateVectorFromLinkedProperties(kQ.m.Vector4[0]), rQ.updateVector4(XQ.name, kQ.m.Vector4[0])) : 3 === XQ.numComponents ? (XQ.populateVectorFromLinkedProperties(kQ.m.vj[0]), rQ.updateVector3(XQ.name, kQ.m.vj[0])) : 2 === XQ.numComponents ? (XQ.populateVectorFromLinkedProperties(kQ.m.Vector2[0]), rQ.updateFloat2(XQ.name, kQ.m.Vector2[0].x, kQ.m.Vector2[0].y)) : 1 === XQ.numComponents && rQ.updateFloat(XQ.name, XQ.linkedProperties[XQ.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * qQ.environmentIntensity, this._lightingInfos.w = 1, rQ.updateVector4("vLightingIntensity", this._lightingInfos), rQ.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (qQ.texturesEnabled) {
                for (const QQ in this._samplersList) {
                  const WQ = this._samplersList[QQ];
                  WQ.value && rQ.setTexture(WQ.samplerName, WQ.value)
                }
                if ((0, mQ.r)(qQ, TQ, rQ, WQ, this.realTimeFiltering), TQ.ENVIRONMENTBRDF && rQ.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), TQ.FUZZENVIRONMENTBRDF && rQ.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), TQ.REFRACTED_BACKGROUND && (rQ.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), rQ.N_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), kQ.m.vj[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), rQ.updateVector3("vBackgroundRefractionInfos", kQ.m.vj[1])), (TQ.ANISOTROPIC || TQ.FUZZ || TQ.REFRACTED_BACKGROUND || TQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && rQ.setTexture("blueNoiseSampler", QQ._noiseTextures[this.sE().uniqueId]), TQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const QQ = this.sssIrradianceTexture.getSize().width,
                    WQ = this.sssIrradianceTexture.getSize().height;
                  rQ.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), rQ.setTexture("sceneDepthSampler", this.sssDepthTexture), rQ.updateFloat2("renderTargetSize", QQ, WQ)
                }
              }
              this.sE().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(XQ) && this.sE().depthPeelingRenderer.bind(zQ), this._eventInfo.subMesh = wQ, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, gW.d)(this._activeEffect, this, qQ), this.bindEyePosition(zQ)
            } else JQ && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, qQ, qQ.Uj(), wQ), !gQ && this.isFrozen && !JQ || !qQ.lightsEnabled || this._disableLighting || (0, mQ.t)(qQ, XQ, this._activeEffect, TQ, this._maxSimultaneousLights), !gQ && this.isFrozen || (this.bindView(zQ), (0, mQ.l)(qQ, XQ, this._activeEffect, !0), TQ.NUM_MORPH_INFLUENCERS && (0, mQ.A)(XQ, this._activeEffect), TQ.BAKED_VERTEX_ANIMATION_TEXTURE && XQ.bakedVertexAnimationManager?.bind(zQ, TQ.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, mQ.w)(TQ, this._activeEffect, qQ)), this._afterBind(XQ, this._activeEffect, wQ), rQ.update()
          }
          getAnimatables() {
            const QQ = super.getAnimatables();
            for (const WQ in this._samplersList) {
              const XQ = this._samplersList[WQ];
              XQ.value && XQ.value.animations && XQ.value.animations.length > 0 && QQ.push(XQ.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && QQ.push(this._radianceTexture), QQ
          }
          getActiveTextures() {
            const QQ = super.getActiveTextures();
            for (const WQ in this._samplersList) {
              const XQ = this._samplersList[WQ];
              XQ.value && QQ.push(XQ.value)
            }
            return this._radianceTexture && QQ.push(this._radianceTexture), QQ
          }
          hasTexture(QQ) {
            if (super.hasTexture(QQ)) return !0;
            for (const WQ in this._samplersList) {
              if (this._samplersList[WQ].value === QQ) return !0
            }
            return this._radianceTexture === QQ
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(QQ, WQ) {
            if (this._breakShaderLoadedCheck = !0, WQ) {
              this._environmentBRDFTexture && this.sE().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.sE().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const QQ in this._samplersList) {
                const WQ = this._samplersList[QQ];
                WQ.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(QQ, WQ)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.sE().environmentTexture
          }
          _prepareEffect(WQ, XQ, wQ) {
            let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              sQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(WQ, XQ, wQ, zQ, sQ), !wQ.isDirty) return null;
            wQ.markAsProcessed();
            const FQ = this.sE().Uj(),
              PQ = new KQ.e;
            let gQ = 0;
            wQ.USESPHERICALINVERTEX && PQ.addFallback(gQ++, "USESPHERICALINVERTEX"), wQ.FOG && PQ.addFallback(gQ, "FOG"), wQ.SPECULARAA && PQ.addFallback(gQ, "SPECULARAA"), wQ.POINTSIZE && PQ.addFallback(gQ, "POINTSIZE"), wQ.LOGARITHMICDEPTH && PQ.addFallback(gQ, "LOGARITHMICDEPTH"), wQ.PARALLAX && PQ.addFallback(gQ, "PARALLAX"), wQ.PARALLAX_RHS && PQ.addFallback(gQ, "PARALLAX_RHS"), wQ.PARALLAXOCCLUSION && PQ.addFallback(gQ++, "PARALLAXOCCLUSION"), wQ.ENVIRONMENTBRDF && PQ.addFallback(gQ++, "ENVIRONMENTBRDF"), wQ.TANGENT && PQ.addFallback(gQ++, "TANGENT"), gQ = (0, mQ.G)(wQ, PQ, this._maxSimultaneousLights, gQ), wQ.SPECULARTERM && PQ.addFallback(gQ++, "SPECULARTERM"), wQ.USESPHERICALFROMREFLECTIONMAP && PQ.addFallback(gQ++, "USESPHERICALFROMREFLECTIONMAP"), wQ.USEIRRADIANCEMAP && PQ.addFallback(gQ++, "USEIRRADIANCEMAP"), wQ.NORMAL && PQ.addFallback(gQ++, "NORMAL"), wQ.VERTEXCOLOR && PQ.addFallback(gQ++, "VERTEXCOLOR"), wQ.MORPHTARGETS && PQ.addFallback(gQ++, "MORPHTARGETS"), wQ.MULTIVIEW && PQ.addFallback(0, "MULTIVIEW");
            const JQ = [fQ.l.PositionKind];
            wQ.NORMAL && JQ.push(fQ.l.NormalKind), wQ.TANGENT && JQ.push(fQ.l.TangentKind);
            for (let QQ = 1; QQ <= 6; ++QQ) wQ["UV" + QQ] && JQ.push(`uv${1===QQ?"":QQ}`);
            wQ.VERTEXCOLOR && JQ.push(fQ.l.ColorKind), (0, mQ.N)(JQ, WQ, wQ, PQ), (0, mQ.R)(JQ, wQ), (0, mQ.S)(JQ, WQ, wQ), (0, mQ.J)(JQ, WQ, wQ);
            let rQ = "openpbr";
            const IQ = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const QQ in this._uniformsList) IQ.push(QQ);
            const jQ = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            wQ.FUZZENVIRONMENTBRDF && jQ.push("environmentFuzzBrdfSampler"), wQ.REFRACTED_BACKGROUND && jQ.push("backgroundRefractionSampler"), (wQ.ANISOTROPIC || wQ.FUZZ || wQ.REFRACTED_BACKGROUND || wQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && jQ.push("blueNoiseSampler"), wQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (jQ.push("sceneIrradianceSampler"), jQ.push("sceneDepthSampler"));
            for (const QQ in this._samplersList) {
              const WQ = this._samplersList[QQ];
              jQ.push(WQ.samplerName), IQ.push(WQ.samplerInfoName), IQ.push(WQ.samplerMatrixName)
            }(0, mQ.rb)(IQ, jQ, !0);
            const BQ = ["Material", "Scene", "Mesh"],
              yQ = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: wQ.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = PQ, this._eventInfo.fallbackRank = gQ, this._eventInfo.defines = wQ, this._eventInfo.uniforms = IQ, this._eventInfo.attributes = JQ, this._eventInfo.samplers = jQ, this._eventInfo.uniformBuffersNames = BQ, this._eventInfo.customCode = void 0, this._eventInfo.mesh = WQ, this._eventInfo.indexParameters = yQ, this._callbackPluginEventGeneric(128, this._eventInfo), IW.d.AddUniformsAndSamplers(IQ, jQ), nQ.e.AddUniforms(IQ), nQ.e.AddSamplers(jQ), (0, gW.c)(IQ), this._useVertexPulling) {
              const QQ = XQ?.geometry;
              QQ && (this._vertexPullingMetadata = (0, JW.d)(QQ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((QQ, WQ) => {
                IQ.push(`vp_${WQ}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            NQ.c && (NQ.c.PrepareUniforms(IQ, wQ), NQ.c.PrepareSamplers(jQ, wQ)), (0, mQ.tb)({
              uniformsNames: IQ,
              uniformBuffersNames: BQ,
              samplers: jQ,
              defines: wQ,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const VQ = {};
            this.customShaderNameResolve && (rQ = this.customShaderNameResolve(rQ, IQ, BQ, jQ, wQ, JQ, VQ));
            const DQ = wQ.toString(),
              pQ = FQ.createEffect(rQ, {
                attributes: JQ,
                uniformsNames: IQ,
                uniformBuffersNames: BQ,
                samplers: jQ,
                defines: DQ,
                fallbacks: PQ,
                onCompiled: qQ,
                onError: TQ,
                indexParameters: yQ,
                processFinalCode: VQ.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: wQ.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: QQ._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, FQ);
            return this._eventInfo.customCode = void 0, pQ
          }
          _prepareDefines(WQ, XQ, wQ) {
            let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              zQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const sQ = XQ.hasThinInstances,
              FQ = this.sE(),
              PQ = FQ.Uj();
            (0, mQ.ab)(FQ, WQ, wQ, !0, this._maxSimultaneousLights, this._disableLighting), wQ._needNormals = !0, (0, mQ.hb)(FQ, wQ);
            const gQ = this.needAlphaBlendingForMesh(WQ) && this.sE().useOrderIndependentTransparency;
            if ((0, mQ.mb)(FQ, wQ, this.canRenderToMRT && !gQ), (0, mQ.jb)(FQ, wQ, gQ), IW.d.PrepareDefines(PQ.currentRenderPassId, WQ, wQ), wQ._areTexturesDirty) {
              wQ._needUVs = !1;
              for (let QQ = 1; QQ <= 6; ++QQ) wQ["MAINUV" + QQ] = !1;
              if (FQ.texturesEnabled) {
                for (const XQ in this._samplersList) {
                  const QQ = this._samplersList[XQ];
                  QQ.value ? ((0, mQ.db)(QQ.value, wQ, QQ.textureDefine), wQ[QQ.textureDefine + "_GAMMA"] = QQ.value.gammaSpace) : wQ[QQ.textureDefine] = !1
                }
                const QQ = this._getRadianceTexture(),
                  WQ = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || PQ.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, mQ.$)(FQ, QQ, wQ, this.realTimeFiltering, this.realTimeFilteringQuality, !WQ), this._baseMetalnessTexture && (wQ.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), wQ.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, wQ.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, wQ.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, wQ.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, wQ.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, wQ.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, wQ.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, wQ.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, wQ.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, wQ.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, wQ.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && OQ.e.DiffuseTextureEnabled ? (wQ.PARALLAX = !0, wQ.PARALLAX_RHS = FQ.useRightHandedSystem, wQ.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : wQ.PARALLAX = !1, wQ.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (wQ.PARALLAX = !1, wQ.PARALLAX_RHS = !1, wQ.PARALLAXOCCLUSION = !1, wQ.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && OQ.e.ReflectionTextureEnabled ? (wQ.ENVIRONMENTBRDF = !0, wQ.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (wQ.ENVIRONMENTBRDF = !1, wQ.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? wQ.FUZZENVIRONMENTBRDF = !0 : wQ.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  wQ.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && OQ.e.RefractionTextureEnabled, wQ.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, wQ.REFRACTED_LIGHTS = !0;
                  const QQ = this._getRadianceTexture();
                  QQ ? (wQ.REFRACTED_ENVIRONMENT = OQ.e.RefractionTextureEnabled, wQ.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.sE().useRightHandedSystem ? !QQ.invertZ : QQ.invertZ, wQ.REFRACTED_ENVIRONMENT_LOCAL_CUBE = QQ.isCube && QQ.boundingBoxSize) : wQ.REFRACTED_ENVIRONMENT = !1
                } else wQ.REFRACTED_BACKGROUND = !1, wQ.REFRACTED_LIGHTS = !1, wQ.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? wQ.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : wQ.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === TQ.b.LIGHTFALLOFF_STANDARD ? (wQ.USEPHYSICALLIGHTFALLOFF = !1, wQ.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === TQ.b.LIGHTFALLOFF_GLTF ? (wQ.USEPHYSICALLIGHTFALLOFF = !1, wQ.USEGLTFLIGHTFALLOFF = !0) : (wQ.USEPHYSICALLIGHTFALLOFF = !0, wQ.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? wQ.TWOSIDEDLIGHTING = !0 : wQ.TWOSIDEDLIGHTING = !1, wQ.MIRRORED = !!FQ._mirroredCameraPosition, wQ.SPECULARAA = PQ.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(wQ._areTexturesDirty || wQ._areMiscDirty) && (wQ.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, wQ.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, wQ.ALPHABLEND = this.needAlphaBlendingForMesh(WQ)), wQ._areTexturesDirty && (wQ.TEXTURE_REPETITION_MODE = PQ.version > 1 || PQ.isWebGPU ? this.textureRepetitionMode : 0), wQ._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(wQ), wQ.FORCENORMALFORWARD = this._forceNormalForward, wQ.RADIANCEOCCLUSION = this._useRadianceOcclusion, wQ.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && QQ._noiseTextures[FQ.uniqueId] && OQ.e.ReflectionTextureEnabled ? (wQ.ANISOTROPIC = !0, WQ.isVerticesDataPresent(fQ.l.TangentKind) || (wQ._needUVs = !0, wQ.MAINUV1 = !0), this._useGltfStyleAnisotropy && (wQ.USE_GLTF_STYLE_ANISOTROPY = !0), wQ.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, wQ.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (wQ.ANISOTROPIC = !1, wQ.USE_GLTF_STYLE_ANISOTROPY = !1, wQ.ANISOTROPIC_BASE = !1, wQ.ANISOTROPIC_COAT = !1), wQ.THIN_FILM = this.thinFilmWeight > 0, wQ.IRIDESCENCE = this.thinFilmWeight > 0, wQ.DISPERSION = this.transmissionDispersionScale > 0, wQ.SCATTERING = this.hasScattering;
            if (wQ.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, wQ.TRANSMISSION_SLAB = this.transmissionWeight > 0, wQ.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, wQ.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !wQ.PREPASS && (wQ.SUBSURFACE_SLAB || wQ.TRANSMISSION_SLAB_VOLUME)) {
              let QQ = !1;
              if (!this.sssIrradianceTexture && FQ.geometryBufferRenderer) {
                const WQ = FQ.geometryBufferRenderer.getTextureIndex(SW.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = FQ.geometryBufferRenderer.getGBuffer().textures[WQ], QQ = !0
              }
              if (!this.sssDepthTexture && FQ.geometryBufferRenderer) {
                const WQ = FQ.geometryBufferRenderer.getTextureIndex(SW.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = FQ.geometryBufferRenderer.getGBuffer().textures[WQ], QQ = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (wQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, QQ && (wQ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            wQ.FUZZ = this.fuzzWeight > 0 && OQ.e.ReflectionTextureEnabled, wQ.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, wQ.FUZZ ? (WQ.isVerticesDataPresent(fQ.l.TangentKind) || (wQ._needUVs = !0, wQ.MAINUV1 = !0), this._environmentFuzzBRDFTexture = CQ(this.sE()), wQ.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, wQ.FUZZENVIRONMENTBRDF = !1, wQ.FUZZ_IBL_SAMPLES = 0), wQ._areMiscDirty && ((0, mQ.fb)(WQ, FQ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(WQ), wQ, this._applyDecalMapAfterDetailMap, this._useVertexPulling, XQ, this._isVertexOutputInvariant), wQ.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !WQ.isVerticesDataPresent(fQ.l.NormalKind), wQ.DEBUGMODE = this._debugMode), (0, mQ._)(FQ, PQ, this, wQ, !!qQ, zQ, sQ), this._eventInfo.defines = wQ, this._eventInfo.mesh = WQ, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, mQ.X)(WQ, wQ, !0, !0, !0, this._transparencyMode !== TQ.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, WQ = new WeakMap, wQ = new WeakMap, qQ = new WeakMap, zQ = new WeakMap, sQ = new WeakMap, FQ = new WeakMap, PQ = new WeakMap, gQ = new WeakMap, JQ = new WeakMap, rQ = new WeakMap, IQ = new WeakMap, jQ = new WeakMap, BQ = new WeakMap, yQ = new WeakMap, VQ = new WeakMap, DQ = new WeakMap, pQ = new WeakMap, GQ = new WeakMap, UQ = new WeakMap, bQ = new WeakMap, vQ = new WeakMap, dQ = new WeakMap, cQ = new WeakMap, AQ = new WeakMap, RQ = new WeakMap, EQ = new WeakMap, LQ = new WeakMap, SQ = new WeakMap, tQ = new WeakMap, oQ = new WeakMap, eQ = new WeakMap, YQ = new WeakMap, ZQ = new WeakMap, MQ = new WeakMap, QW = new WeakMap, WW = new WeakMap, XW = new WeakMap, wW = new WeakMap, qW = new WeakMap, TW = new WeakMap, zW = new WeakMap, sW = new WeakMap, FW = new WeakMap, PW = new WeakMap, jW = new WeakMap, BW = new WeakMap, yW = new WeakMap, VW = new WeakMap, DW = new WeakMap, pW = new WeakMap, GW = new WeakMap, UW = new WeakMap, bW = new WeakMap, HW = new WeakMap, aW = new WeakMap, lW = new WeakMap, hW = new WeakMap, iW = new WeakMap, cW = new WeakMap, AW = new WeakMap, RW = new WeakMap, EW = new WeakMap, CW = new WeakMap, uW = new WeakMap, LW = new WeakMap, kW = new WeakMap, fW = new WeakMap, tW = new WeakMap, eW = new WeakMap, NW = new WeakMap, ZW = new WeakMap, mW = new WeakMap, MW = new WeakMap, QX = new WeakMap, WX = new WeakMap, XX = new WeakMap, wX = new WeakMap, qX = new WeakMap, TX = new WeakMap, zX = new WeakMap, sX = new WeakMap, FX = new WeakMap, PX = new WeakMap, gX = new WeakMap, JX = new WeakMap, rX = new WeakMap, IX = new WeakMap, jX = new WeakMap, BX = new WeakMap, yX = new WeakMap, VX = new WeakMap, DX = new WeakMap, pX = new WeakMap, GX = new WeakMap, UX = new WeakMap, bX = new WeakMap, vX = new WeakMap, dX = new WeakMap, HX = new WeakMap, aX = new WeakMap, lX = new WeakMap, hX = new WeakMap, (() => {
          const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(Aq[Symbol.metadata] ?? null) : void 0;
          iX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], cX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], AX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], RX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], EX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], CX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], uX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], LX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], kX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], fX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], SX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], tX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], oX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], eX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], nX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], xX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], YX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], NX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], ZX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], OX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], KX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], mX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], MX = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Qw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Ww = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Xw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], ww = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], qw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Tw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], zw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], sw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Fw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Pw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], gw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Jw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], rw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Iw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], jw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Bw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], yw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Vw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Dw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], pw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Gw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Uw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], bw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], vw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], dw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Hw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], aw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], lw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], hw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], iw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Aw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Rw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Ew = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Cw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], uw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Lw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], kw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], fw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Sw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], tw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], ow = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], ew = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], nw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], xw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Yw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Nw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Zw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Ow = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Kw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], mw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Mw = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Qq = [(0, aQ.b)("_markAllSubMeshesAsTexturesDirty")], Wq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], Xq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], wq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], qq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Tq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], zq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], sq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], Fq = [(0, aQ.I)()], Pq = [(0, aQ.I)()], gq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], Jq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], rq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], Iq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], jq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsLightsDirty")], Bq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], yq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsLightsDirty")], Vq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], Dq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], pq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], Gq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], Uq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], bq = [(0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], vq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], dq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], Hq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], aq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], lq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], hq = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], iq = [(0, aQ.e)("_markAllSubMeshesAsMiscDirty")], cq = [(0, aQ.I)()], (0, HQ.k)(QQ, null, iX, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseWeight" in QQ,
              get: QQ => QQ.baseWeight,
              set: (QQ, WQ) => {
                QQ.baseWeight = WQ
              }
            },
            metadata: WQ
          }, Eq, Cq), (0, HQ.k)(QQ, null, cX, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseWeightTexture" in QQ,
              get: QQ => QQ.baseWeightTexture,
              set: (QQ, WQ) => {
                QQ.baseWeightTexture = WQ
              }
            },
            metadata: WQ
          }, uq, Lq), (0, HQ.k)(QQ, null, AX, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseColor" in QQ,
              get: QQ => QQ.baseColor,
              set: (QQ, WQ) => {
                QQ.baseColor = WQ
              }
            },
            metadata: WQ
          }, kq, fq), (0, HQ.k)(QQ, null, RX, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseColorTexture" in QQ,
              get: QQ => QQ.baseColorTexture,
              set: (QQ, WQ) => {
                QQ.baseColorTexture = WQ
              }
            },
            metadata: WQ
          }, Sq, tq), (0, HQ.k)(QQ, null, EX, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseDiffuseRoughness" in QQ,
              get: QQ => QQ.baseDiffuseRoughness,
              set: (QQ, WQ) => {
                QQ.baseDiffuseRoughness = WQ
              }
            },
            metadata: WQ
          }, oq, eq), (0, HQ.k)(QQ, null, CX, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseDiffuseRoughnessTexture" in QQ,
              get: QQ => QQ.baseDiffuseRoughnessTexture,
              set: (QQ, WQ) => {
                QQ.baseDiffuseRoughnessTexture = WQ
              }
            },
            metadata: WQ
          }, nq, xq), (0, HQ.k)(QQ, null, uX, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseMetalness" in QQ,
              get: QQ => QQ.baseMetalness,
              set: (QQ, WQ) => {
                QQ.baseMetalness = WQ
              }
            },
            metadata: WQ
          }, Yq, Nq), (0, HQ.k)(QQ, null, LX, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "baseMetalnessTexture" in QQ,
              get: QQ => QQ.baseMetalnessTexture,
              set: (QQ, WQ) => {
                QQ.baseMetalnessTexture = WQ
              }
            },
            metadata: WQ
          }, Zq, Oq), (0, HQ.k)(QQ, null, kX, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularWeight" in QQ,
              get: QQ => QQ.specularWeight,
              set: (QQ, WQ) => {
                QQ.specularWeight = WQ
              }
            },
            metadata: WQ
          }, Kq, mq), (0, HQ.k)(QQ, null, fX, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularWeightTexture" in QQ,
              get: QQ => QQ.specularWeightTexture,
              set: (QQ, WQ) => {
                QQ.specularWeightTexture = WQ
              }
            },
            metadata: WQ
          }, Mq, QT), (0, HQ.k)(QQ, null, SX, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularColor" in QQ,
              get: QQ => QQ.specularColor,
              set: (QQ, WQ) => {
                QQ.specularColor = WQ
              }
            },
            metadata: WQ
          }, WT, XT), (0, HQ.k)(QQ, null, tX, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularColorTexture" in QQ,
              get: QQ => QQ.specularColorTexture,
              set: (QQ, WQ) => {
                QQ.specularColorTexture = WQ
              }
            },
            metadata: WQ
          }, wT, qT), (0, HQ.k)(QQ, null, oX, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularRoughness" in QQ,
              get: QQ => QQ.specularRoughness,
              set: (QQ, WQ) => {
                QQ.specularRoughness = WQ
              }
            },
            metadata: WQ
          }, TT, zT), (0, HQ.k)(QQ, null, eX, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularRoughnessTexture" in QQ,
              get: QQ => QQ.specularRoughnessTexture,
              set: (QQ, WQ) => {
                QQ.specularRoughnessTexture = WQ
              }
            },
            metadata: WQ
          }, sT, FT), (0, HQ.k)(QQ, null, nX, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularRoughnessAnisotropy" in QQ,
              get: QQ => QQ.specularRoughnessAnisotropy,
              set: (QQ, WQ) => {
                QQ.specularRoughnessAnisotropy = WQ
              }
            },
            metadata: WQ
          }, PT, gT), (0, HQ.k)(QQ, null, xX, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularRoughnessAnisotropyTexture" in QQ,
              get: QQ => QQ.specularRoughnessAnisotropyTexture,
              set: (QQ, WQ) => {
                QQ.specularRoughnessAnisotropyTexture = WQ
              }
            },
            metadata: WQ
          }, JT, rT), (0, HQ.k)(QQ, null, YX, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularIor" in QQ,
              get: QQ => QQ.specularIor,
              set: (QQ, WQ) => {
                QQ.specularIor = WQ
              }
            },
            metadata: WQ
          }, IT, jT), (0, HQ.k)(QQ, null, NX, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionWeight" in QQ,
              get: QQ => QQ.transmissionWeight,
              set: (QQ, WQ) => {
                QQ.transmissionWeight = WQ
              }
            },
            metadata: WQ
          }, BT, yT), (0, HQ.k)(QQ, null, ZX, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionWeightTexture" in QQ,
              get: QQ => QQ.transmissionWeightTexture,
              set: (QQ, WQ) => {
                QQ.transmissionWeightTexture = WQ
              }
            },
            metadata: WQ
          }, VT, DT), (0, HQ.k)(QQ, null, OX, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionColor" in QQ,
              get: QQ => QQ.transmissionColor,
              set: (QQ, WQ) => {
                QQ.transmissionColor = WQ
              }
            },
            metadata: WQ
          }, pT, GT), (0, HQ.k)(QQ, null, KX, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionColorTexture" in QQ,
              get: QQ => QQ.transmissionColorTexture,
              set: (QQ, WQ) => {
                QQ.transmissionColorTexture = WQ
              }
            },
            metadata: WQ
          }, UT, bT), (0, HQ.k)(QQ, null, mX, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionDepth" in QQ,
              get: QQ => QQ.transmissionDepth,
              set: (QQ, WQ) => {
                QQ.transmissionDepth = WQ
              }
            },
            metadata: WQ
          }, vT, dT), (0, HQ.k)(QQ, null, MX, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionDepthTexture" in QQ,
              get: QQ => QQ.transmissionDepthTexture,
              set: (QQ, WQ) => {
                QQ.transmissionDepthTexture = WQ
              }
            },
            metadata: WQ
          }, HT, aT), (0, HQ.k)(QQ, null, Qw, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionScatter" in QQ,
              get: QQ => QQ.transmissionScatter,
              set: (QQ, WQ) => {
                QQ.transmissionScatter = WQ
              }
            },
            metadata: WQ
          }, lT, hT), (0, HQ.k)(QQ, null, Ww, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionScatterTexture" in QQ,
              get: QQ => QQ.transmissionScatterTexture,
              set: (QQ, WQ) => {
                QQ.transmissionScatterTexture = WQ
              }
            },
            metadata: WQ
          }, iT, cT), (0, HQ.k)(QQ, null, Xw, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionScatterAnisotropy" in QQ,
              get: QQ => QQ.transmissionScatterAnisotropy,
              set: (QQ, WQ) => {
                QQ.transmissionScatterAnisotropy = WQ
              }
            },
            metadata: WQ
          }, AT, RT), (0, HQ.k)(QQ, null, ww, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionDispersionScale" in QQ,
              get: QQ => QQ.transmissionDispersionScale,
              set: (QQ, WQ) => {
                QQ.transmissionDispersionScale = WQ
              }
            },
            metadata: WQ
          }, ET, CT), (0, HQ.k)(QQ, null, qw, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionDispersionScaleTexture" in QQ,
              get: QQ => QQ.transmissionDispersionScaleTexture,
              set: (QQ, WQ) => {
                QQ.transmissionDispersionScaleTexture = WQ
              }
            },
            metadata: WQ
          }, uT, LT), (0, HQ.k)(QQ, null, Tw, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transmissionDispersionAbbeNumber" in QQ,
              get: QQ => QQ.transmissionDispersionAbbeNumber,
              set: (QQ, WQ) => {
                QQ.transmissionDispersionAbbeNumber = WQ
              }
            },
            metadata: WQ
          }, kT, fT), (0, HQ.k)(QQ, null, zw, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceWeight" in QQ,
              get: QQ => QQ.subsurfaceWeight,
              set: (QQ, WQ) => {
                QQ.subsurfaceWeight = WQ
              }
            },
            metadata: WQ
          }, ST, tT), (0, HQ.k)(QQ, null, sw, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceWeightTexture" in QQ,
              get: QQ => QQ.subsurfaceWeightTexture,
              set: (QQ, WQ) => {
                QQ.subsurfaceWeightTexture = WQ
              }
            },
            metadata: WQ
          }, oT, eT), (0, HQ.k)(QQ, null, Fw, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceColor" in QQ,
              get: QQ => QQ.subsurfaceColor,
              set: (QQ, WQ) => {
                QQ.subsurfaceColor = WQ
              }
            },
            metadata: WQ
          }, nT, xT), (0, HQ.k)(QQ, null, Pw, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceColorTexture" in QQ,
              get: QQ => QQ.subsurfaceColorTexture,
              set: (QQ, WQ) => {
                QQ.subsurfaceColorTexture = WQ
              }
            },
            metadata: WQ
          }, YT, NT), (0, HQ.k)(QQ, null, gw, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceRadius" in QQ,
              get: QQ => QQ.subsurfaceRadius,
              set: (QQ, WQ) => {
                QQ.subsurfaceRadius = WQ
              }
            },
            metadata: WQ
          }, ZT, OT), (0, HQ.k)(QQ, null, Jw, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceRadiusScale" in QQ,
              get: QQ => QQ.subsurfaceRadiusScale,
              set: (QQ, WQ) => {
                QQ.subsurfaceRadiusScale = WQ
              }
            },
            metadata: WQ
          }, KT, mT), (0, HQ.k)(QQ, null, rw, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceRadiusScaleTexture" in QQ,
              get: QQ => QQ.subsurfaceRadiusScaleTexture,
              set: (QQ, WQ) => {
                QQ.subsurfaceRadiusScaleTexture = WQ
              }
            },
            metadata: WQ
          }, MT, Qz), (0, HQ.k)(QQ, null, Iw, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: QQ => "subsurfaceScatterAnisotropy" in QQ,
              get: QQ => QQ.subsurfaceScatterAnisotropy,
              set: (QQ, WQ) => {
                QQ.subsurfaceScatterAnisotropy = WQ
              }
            },
            metadata: WQ
          }, Wz, Xz), (0, HQ.k)(QQ, null, jw, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatWeight" in QQ,
              get: QQ => QQ.coatWeight,
              set: (QQ, WQ) => {
                QQ.coatWeight = WQ
              }
            },
            metadata: WQ
          }, wz, qz), (0, HQ.k)(QQ, null, Bw, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatWeightTexture" in QQ,
              get: QQ => QQ.coatWeightTexture,
              set: (QQ, WQ) => {
                QQ.coatWeightTexture = WQ
              }
            },
            metadata: WQ
          }, Tz, zz), (0, HQ.k)(QQ, null, yw, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatColor" in QQ,
              get: QQ => QQ.coatColor,
              set: (QQ, WQ) => {
                QQ.coatColor = WQ
              }
            },
            metadata: WQ
          }, sz, Fz), (0, HQ.k)(QQ, null, Vw, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatColorTexture" in QQ,
              get: QQ => QQ.coatColorTexture,
              set: (QQ, WQ) => {
                QQ.coatColorTexture = WQ
              }
            },
            metadata: WQ
          }, Pz, gz), (0, HQ.k)(QQ, null, Dw, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatRoughness" in QQ,
              get: QQ => QQ.coatRoughness,
              set: (QQ, WQ) => {
                QQ.coatRoughness = WQ
              }
            },
            metadata: WQ
          }, Jz, rz), (0, HQ.k)(QQ, null, pw, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatRoughnessTexture" in QQ,
              get: QQ => QQ.coatRoughnessTexture,
              set: (QQ, WQ) => {
                QQ.coatRoughnessTexture = WQ
              }
            },
            metadata: WQ
          }, Iz, jz), (0, HQ.k)(QQ, null, Gw, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatRoughnessAnisotropy" in QQ,
              get: QQ => QQ.coatRoughnessAnisotropy,
              set: (QQ, WQ) => {
                QQ.coatRoughnessAnisotropy = WQ
              }
            },
            metadata: WQ
          }, Bz, yz), (0, HQ.k)(QQ, null, Uw, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatRoughnessAnisotropyTexture" in QQ,
              get: QQ => QQ.coatRoughnessAnisotropyTexture,
              set: (QQ, WQ) => {
                QQ.coatRoughnessAnisotropyTexture = WQ
              }
            },
            metadata: WQ
          }, Vz, Dz), (0, HQ.k)(QQ, null, bw, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatIor" in QQ,
              get: QQ => QQ.coatIor,
              set: (QQ, WQ) => {
                QQ.coatIor = WQ
              }
            },
            metadata: WQ
          }, pz, Gz), (0, HQ.k)(QQ, null, vw, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatDarkening" in QQ,
              get: QQ => QQ.coatDarkening,
              set: (QQ, WQ) => {
                QQ.coatDarkening = WQ
              }
            },
            metadata: WQ
          }, Uz, bz), (0, HQ.k)(QQ, null, dw, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "coatDarkeningTexture" in QQ,
              get: QQ => QQ.coatDarkeningTexture,
              set: (QQ, WQ) => {
                QQ.coatDarkeningTexture = WQ
              }
            },
            metadata: WQ
          }, vz, dz), (0, HQ.k)(QQ, null, Hw, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzWeight" in QQ,
              get: QQ => QQ.fuzzWeight,
              set: (QQ, WQ) => {
                QQ.fuzzWeight = WQ
              }
            },
            metadata: WQ
          }, Hz, az), (0, HQ.k)(QQ, null, aw, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzWeightTexture" in QQ,
              get: QQ => QQ.fuzzWeightTexture,
              set: (QQ, WQ) => {
                QQ.fuzzWeightTexture = WQ
              }
            },
            metadata: WQ
          }, lz, hz), (0, HQ.k)(QQ, null, lw, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzColor" in QQ,
              get: QQ => QQ.fuzzColor,
              set: (QQ, WQ) => {
                QQ.fuzzColor = WQ
              }
            },
            metadata: WQ
          }, iz, cz), (0, HQ.k)(QQ, null, hw, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzColorTexture" in QQ,
              get: QQ => QQ.fuzzColorTexture,
              set: (QQ, WQ) => {
                QQ.fuzzColorTexture = WQ
              }
            },
            metadata: WQ
          }, Az, Rz), (0, HQ.k)(QQ, null, iw, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzRoughness" in QQ,
              get: QQ => QQ.fuzzRoughness,
              set: (QQ, WQ) => {
                QQ.fuzzRoughness = WQ
              }
            },
            metadata: WQ
          }, Ez, Cz), (0, HQ.k)(QQ, null, Aw, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "fuzzRoughnessTexture" in QQ,
              get: QQ => QQ.fuzzRoughnessTexture,
              set: (QQ, WQ) => {
                QQ.fuzzRoughnessTexture = WQ
              }
            },
            metadata: WQ
          }, uz, Lz), (0, HQ.k)(QQ, null, Rw, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryThinWalled" in QQ,
              get: QQ => QQ.geometryThinWalled,
              set: (QQ, WQ) => {
                QQ.geometryThinWalled = WQ
              }
            },
            metadata: WQ
          }, kz, fz), (0, HQ.k)(QQ, null, Ew, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryNormalTexture" in QQ,
              get: QQ => QQ.geometryNormalTexture,
              set: (QQ, WQ) => {
                QQ.geometryNormalTexture = WQ
              }
            },
            metadata: WQ
          }, Sz, tz), (0, HQ.k)(QQ, null, Cw, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryTangent" in QQ,
              get: QQ => QQ.geometryTangent,
              set: (QQ, WQ) => {
                QQ.geometryTangent = WQ
              }
            },
            metadata: WQ
          }, oz, ez), (0, HQ.k)(QQ, null, uw, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryTangentTexture" in QQ,
              get: QQ => QQ.geometryTangentTexture,
              set: (QQ, WQ) => {
                QQ.geometryTangentTexture = WQ
              }
            },
            metadata: WQ
          }, nz, xz), (0, HQ.k)(QQ, null, Lw, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryCoatNormalTexture" in QQ,
              get: QQ => QQ.geometryCoatNormalTexture,
              set: (QQ, WQ) => {
                QQ.geometryCoatNormalTexture = WQ
              }
            },
            metadata: WQ
          }, Yz, Nz), (0, HQ.k)(QQ, null, kw, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryCoatTangent" in QQ,
              get: QQ => QQ.geometryCoatTangent,
              set: (QQ, WQ) => {
                QQ.geometryCoatTangent = WQ
              }
            },
            metadata: WQ
          }, Zz, Oz), (0, HQ.k)(QQ, null, fw, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryCoatTangentTexture" in QQ,
              get: QQ => QQ.geometryCoatTangentTexture,
              set: (QQ, WQ) => {
                QQ.geometryCoatTangentTexture = WQ
              }
            },
            metadata: WQ
          }, Kz, mz), (0, HQ.k)(QQ, null, Sw, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryOpacity" in QQ,
              get: QQ => QQ.geometryOpacity,
              set: (QQ, WQ) => {
                QQ.geometryOpacity = WQ
              }
            },
            metadata: WQ
          }, Mz, Qs), (0, HQ.k)(QQ, null, tw, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryOpacityTexture" in QQ,
              get: QQ => QQ.geometryOpacityTexture,
              set: (QQ, WQ) => {
                QQ.geometryOpacityTexture = WQ
              }
            },
            metadata: WQ
          }, Ws, Xs), (0, HQ.k)(QQ, null, ow, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryThickness" in QQ,
              get: QQ => QQ.geometryThickness,
              set: (QQ, WQ) => {
                QQ.geometryThickness = WQ
              }
            },
            metadata: WQ
          }, ws, qs), (0, HQ.k)(QQ, null, ew, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "geometryThicknessTexture" in QQ,
              get: QQ => QQ.geometryThicknessTexture,
              set: (QQ, WQ) => {
                QQ.geometryThicknessTexture = WQ
              }
            },
            metadata: WQ
          }, Ts, zs), (0, HQ.k)(QQ, null, nw, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissionLuminance" in QQ,
              get: QQ => QQ.emissionLuminance,
              set: (QQ, WQ) => {
                QQ.emissionLuminance = WQ
              }
            },
            metadata: WQ
          }, ss, Fs), (0, HQ.k)(QQ, null, xw, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissionColor" in QQ,
              get: QQ => QQ.emissionColor,
              set: (QQ, WQ) => {
                QQ.emissionColor = WQ
              }
            },
            metadata: WQ
          }, Ps, gs), (0, HQ.k)(QQ, null, Yw, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissionColorTexture" in QQ,
              get: QQ => QQ.emissionColorTexture,
              set: (QQ, WQ) => {
                QQ.emissionColorTexture = WQ
              }
            },
            metadata: WQ
          }, rs, Is), (0, HQ.k)(QQ, null, Nw, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmWeight" in QQ,
              get: QQ => QQ.thinFilmWeight,
              set: (QQ, WQ) => {
                QQ.thinFilmWeight = WQ
              }
            },
            metadata: WQ
          }, Bs, ys), (0, HQ.k)(QQ, null, Zw, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmWeightTexture" in QQ,
              get: QQ => QQ.thinFilmWeightTexture,
              set: (QQ, WQ) => {
                QQ.thinFilmWeightTexture = WQ
              }
            },
            metadata: WQ
          }, Vs, Ds), (0, HQ.k)(QQ, null, Ow, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmThickness" in QQ,
              get: QQ => QQ.thinFilmThickness,
              set: (QQ, WQ) => {
                QQ.thinFilmThickness = WQ
              }
            },
            metadata: WQ
          }, ps, Gs), (0, HQ.k)(QQ, null, Kw, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmThicknessMin" in QQ,
              get: QQ => QQ.thinFilmThicknessMin,
              set: (QQ, WQ) => {
                QQ.thinFilmThicknessMin = WQ
              }
            },
            metadata: WQ
          }, Us, bs), (0, HQ.k)(QQ, null, mw, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmThicknessTexture" in QQ,
              get: QQ => QQ.thinFilmThicknessTexture,
              set: (QQ, WQ) => {
                QQ.thinFilmThicknessTexture = WQ
              }
            },
            metadata: WQ
          }, vs, ds), (0, HQ.k)(QQ, null, Mw, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thinFilmIor" in QQ,
              get: QQ => QQ.thinFilmIor,
              set: (QQ, WQ) => {
                QQ.thinFilmIor = WQ
              }
            },
            metadata: WQ
          }, Hs, as), (0, HQ.k)(QQ, null, Qq, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ambientOcclusionTexture" in QQ,
              get: QQ => QQ.ambientOcclusionTexture,
              set: (QQ, WQ) => {
                QQ.ambientOcclusionTexture = WQ
              }
            },
            metadata: WQ
          }, ls, hs), (0, HQ.k)(QQ, null, Wq, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: QQ => "directIntensity" in QQ,
              get: QQ => QQ.directIntensity,
              set: (QQ, WQ) => {
                QQ.directIntensity = WQ
              }
            },
            metadata: WQ
          }, is, cs), (0, HQ.k)(QQ, null, Xq, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: QQ => "environmentIntensity" in QQ,
              get: QQ => QQ.environmentIntensity,
              set: (QQ, WQ) => {
                QQ.environmentIntensity = WQ
              }
            },
            metadata: WQ
          }, As, Rs), (0, HQ.k)(QQ, null, wq, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useSpecularWeightFromTextureAlpha" in QQ,
              get: QQ => QQ.useSpecularWeightFromTextureAlpha,
              set: (QQ, WQ) => {
                QQ.useSpecularWeightFromTextureAlpha = WQ
              }
            },
            metadata: WQ
          }, Es, Cs), (0, HQ.k)(QQ, null, qq, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: QQ => "forceAlphaTest" in QQ,
              get: QQ => QQ.forceAlphaTest,
              set: (QQ, WQ) => {
                QQ.forceAlphaTest = WQ
              }
            },
            metadata: WQ
          }, us, Ls), (0, HQ.k)(QQ, null, Tq, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alphaCutOff" in QQ,
              get: QQ => QQ.alphaCutOff,
              set: (QQ, WQ) => {
                QQ.alphaCutOff = WQ
              }
            },
            metadata: WQ
          }, ks, fs), (0, HQ.k)(QQ, null, zq, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useAmbientOcclusionFromMetallicTextureRed" in QQ,
              get: QQ => QQ.useAmbientOcclusionFromMetallicTextureRed,
              set: (QQ, WQ) => {
                QQ.useAmbientOcclusionFromMetallicTextureRed = WQ
              }
            },
            metadata: WQ
          }, Ss, ts), (0, HQ.k)(QQ, null, sq, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useAmbientInGrayScale" in QQ,
              get: QQ => QQ.useAmbientInGrayScale,
              set: (QQ, WQ) => {
                QQ.useAmbientInGrayScale = WQ
              }
            },
            metadata: WQ
          }, os, es), (0, HQ.k)(QQ, null, Fq, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: QQ => "usePhysicalLightFalloff" in QQ,
              get: QQ => QQ.usePhysicalLightFalloff
            },
            metadata: WQ
          }, null, Rq), (0, HQ.k)(QQ, null, Pq, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useGLTFLightFalloff" in QQ,
              get: QQ => QQ.useGLTFLightFalloff
            },
            metadata: WQ
          }, null, Rq), (0, HQ.k)(QQ, null, gq, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useObjectSpaceNormalMap" in QQ,
              get: QQ => QQ.useObjectSpaceNormalMap,
              set: (QQ, WQ) => {
                QQ.useObjectSpaceNormalMap = WQ
              }
            },
            metadata: WQ
          }, ns, xs), (0, HQ.k)(QQ, null, Jq, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useParallax" in QQ,
              get: QQ => QQ.useParallax,
              set: (QQ, WQ) => {
                QQ.useParallax = WQ
              }
            },
            metadata: WQ
          }, Ys, Ns), (0, HQ.k)(QQ, null, rq, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useParallaxOcclusion" in QQ,
              get: QQ => QQ.useParallaxOcclusion,
              set: (QQ, WQ) => {
                QQ.useParallaxOcclusion = WQ
              }
            },
            metadata: WQ
          }, Zs, Os), (0, HQ.k)(QQ, null, Iq, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: QQ => "parallaxScaleBias" in QQ,
              get: QQ => QQ.parallaxScaleBias,
              set: (QQ, WQ) => {
                QQ.parallaxScaleBias = WQ
              }
            },
            metadata: WQ
          }, Ks, ms), (0, HQ.k)(QQ, null, jq, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "disableLighting" in QQ,
              get: QQ => QQ.disableLighting,
              set: (QQ, WQ) => {
                QQ.disableLighting = WQ
              }
            },
            metadata: WQ
          }, Ms, QF), (0, HQ.k)(QQ, null, Bq, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: QQ => "forceIrradianceInFragment" in QQ,
              get: QQ => QQ.forceIrradianceInFragment,
              set: (QQ, WQ) => {
                QQ.forceIrradianceInFragment = WQ
              }
            },
            metadata: WQ
          }, WF, XF), (0, HQ.k)(QQ, null, yq, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: QQ => "maxSimultaneousLights" in QQ,
              get: QQ => QQ.maxSimultaneousLights,
              set: (QQ, WQ) => {
                QQ.maxSimultaneousLights = WQ
              }
            },
            metadata: WQ
          }, wF, qF), (0, HQ.k)(QQ, null, Vq, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "invertNormalMapX" in QQ,
              get: QQ => QQ.invertNormalMapX,
              set: (QQ, WQ) => {
                QQ.invertNormalMapX = WQ
              }
            },
            metadata: WQ
          }, TF, zF), (0, HQ.k)(QQ, null, Dq, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "invertNormalMapY" in QQ,
              get: QQ => QQ.invertNormalMapY,
              set: (QQ, WQ) => {
                QQ.invertNormalMapY = WQ
              }
            },
            metadata: WQ
          }, sF, FF), (0, HQ.k)(QQ, null, pq, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "twoSidedLighting" in QQ,
              get: QQ => QQ.twoSidedLighting,
              set: (QQ, WQ) => {
                QQ.twoSidedLighting = WQ
              }
            },
            metadata: WQ
          }, PF, gF), (0, HQ.k)(QQ, null, Gq, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useAlphaFresnel" in QQ,
              get: QQ => QQ.useAlphaFresnel,
              set: (QQ, WQ) => {
                QQ.useAlphaFresnel = WQ
              }
            },
            metadata: WQ
          }, JF, rF), (0, HQ.k)(QQ, null, Uq, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useLinearAlphaFresnel" in QQ,
              get: QQ => QQ.useLinearAlphaFresnel,
              set: (QQ, WQ) => {
                QQ.useLinearAlphaFresnel = WQ
              }
            },
            metadata: WQ
          }, IF, jF), (0, HQ.k)(QQ, null, bq, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "environmentBRDFTexture" in QQ,
              get: QQ => QQ.environmentBRDFTexture,
              set: (QQ, WQ) => {
                QQ.environmentBRDFTexture = WQ
              }
            },
            metadata: WQ
          }, BF, yF), (0, HQ.k)(QQ, null, vq, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: QQ => "forceNormalForward" in QQ,
              get: QQ => QQ.forceNormalForward,
              set: (QQ, WQ) => {
                QQ.forceNormalForward = WQ
              }
            },
            metadata: WQ
          }, VF, DF), (0, HQ.k)(QQ, null, dq, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: QQ => "enableSpecularAntiAliasing" in QQ,
              get: QQ => QQ.enableSpecularAntiAliasing,
              set: (QQ, WQ) => {
                QQ.enableSpecularAntiAliasing = WQ
              }
            },
            metadata: WQ
          }, pF, GF), (0, HQ.k)(QQ, null, Hq, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useHorizonOcclusion" in QQ,
              get: QQ => QQ.useHorizonOcclusion,
              set: (QQ, WQ) => {
                QQ.useHorizonOcclusion = WQ
              }
            },
            metadata: WQ
          }, UF, bF), (0, HQ.k)(QQ, null, aq, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useRadianceOcclusion" in QQ,
              get: QQ => QQ.useRadianceOcclusion,
              set: (QQ, WQ) => {
                QQ.useRadianceOcclusion = WQ
              }
            },
            metadata: WQ
          }, vF, dF), (0, HQ.k)(QQ, null, lq, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "unlit" in QQ,
              get: QQ => QQ.unlit,
              set: (QQ, WQ) => {
                QQ.unlit = WQ
              }
            },
            metadata: WQ
          }, HF, aF), (0, HQ.k)(QQ, null, hq, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "applyDecalMapAfterDetailMap" in QQ,
              get: QQ => QQ.applyDecalMapAfterDetailMap,
              set: (QQ, WQ) => {
                QQ.applyDecalMapAfterDetailMap = WQ
              }
            },
            metadata: WQ
          }, lF, hF), (0, HQ.k)(QQ, null, iq, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "debugMode" in QQ,
              get: QQ => QQ.debugMode,
              set: (QQ, WQ) => {
                QQ.debugMode = WQ
              }
            },
            metadata: WQ
          }, iF, cF), (0, HQ.k)(QQ, null, cq, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transparencyMode" in QQ,
              get: QQ => QQ.transparencyMode
            },
            metadata: WQ
          }, null, Rq), WQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: WQ
          })
        })(), QQ.SSS_QUALITY_LOW = 0, QQ.SSS_QUALITY_MEDIUM = 1, QQ.SSS_QUALITY_HIGH = 2, QQ._noiseTextures = {}, QQ.ForceGLSL = !1, QQ._ShaderLoader = new rW.e((() => [Promise.all([XQ.e(326), XQ.e(389)]).then((() => XQ(62010))), Promise.all([XQ.e(331), XQ.e(327), XQ.e(388), XQ.e(393)]).then((() => XQ(62020)))]), (() => [Promise.all([XQ.e(345), XQ.e(347), XQ.e(392)]).then((() => XQ(62056))), Promise.all([XQ.e(345), XQ.e(348), XQ.e(391), XQ.e(394)]).then((() => XQ(62065)))])), QQ
      })(),
      MW = !1;
    MW || (MW = !0, (0, NQ.g)(), (0, tW.d)("BABYLON.OpenPBRMaterial", mW));
    var QX = XQ(37399);
    class WX {
      constructor(QQ) {
        this.name = EW.c.NAME_PROCEDURALTEXTURE, this.cB = QQ
      }
      register() {
        this.cB._beforeClearStage.registerStep(EW.c.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.cB.proceduralTexturesEnabled) {
          dW.g.StartPerformanceCounter("Procedural textures", this.cB.proceduralTextures.length > 0);
          for (let QQ = 0; QQ < this.cB.proceduralTextures.length; QQ++) {
            const WQ = this.cB.proceduralTextures[QQ];
            WQ._shouldRender() && WQ.render()
          }
          dW.g.EndPerformanceCounter("Procedural textures", this.cB.proceduralTextures.length > 0)
        }
      }
    }
    var XX = XQ(40578);
    let wX = (() => {
      var QQ;
      let WQ, wQ, qQ, zQ, sQ, FQ = iQ.g,
        PQ = [],
        gQ = [],
        JQ = [],
        rQ = [],
        IQ = [],
        jQ = [],
        yQ = [],
        VQ = [],
        DQ = [];
      return QQ = class extends FQ {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(QQ, WQ, XQ, wQ) {
          let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, wQ, !TQ), this.isEnabled = ((0, HQ.n)(this, PQ), (0, HQ.n)(this, gQ, !0)), this.autoClear = ((0, HQ.n)(this, JQ), (0, HQ.n)(this, rQ, !0)), this.onGenerated = (0, HQ.n)(this, IQ), this.onGeneratedObservable = new QX.b, this.onBeforeGenerationObservable = new QX.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, HQ.n)(this, jQ, void 0), this._drawWrapper = (0, HQ.n)(this, yQ), this._textures = {}, this._size = (0, HQ.n)(this, VQ, void 0), this._textureType = (0, HQ.n)(this, DQ), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === qQ || qQ instanceof iQ.g ? (this._options = {}, this._fallbackTexture = qQ) : (this._options = qQ, this._fallbackTexture = qQ.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let FQ = (wQ = this.sE() || BQ.d.LastCreatedScene)._getComponent(EW.c.NAME_PROCEDURALTEXTURE);
          FQ || (FQ = new WX(wQ), wQ.rwQ(FQ)), this._options.skipSceneRegistration || wQ.proceduralTextures.push(this), this._fullEngine = wQ.Uj(), this.name = QQ, this.isRenderTarget = !0, this._size = WQ, this._textureType = sQ, this._generateMipMaps = TQ, this._drawWrapper = new XX.d(this._fullEngine), this.setFragment(XQ);
          const pQ = this._createRtWrapper(zQ, WQ, TQ, sQ);
          this._texture = pQ.texture;
          const GQ = [];
          GQ.push(1, 1), GQ.push(-1, 1), GQ.push(-1, -1), GQ.push(1, -1), this._vertexBuffers[fQ.l.PositionKind] = new fQ.l(this._fullEngine, GQ, fQ.l.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(QQ, WQ, XQ, wQ) {
          return QQ ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(WQ, {
            generateMipMaps: XQ,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: wQ,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(WQ, {
            generateMipMaps: XQ,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: wQ,
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
            WQ = [];
          WQ.push(0), WQ.push(1), WQ.push(2), WQ.push(0), WQ.push(2), WQ.push(3), this._indexBuffer = QQ.createIndexBuffer(WQ)
        }
        _rebuild() {
          const QQ = this._vertexBuffers[fQ.l.PositionKind];
          QQ && QQ._rebuild(), this._createIndexBuffer(), this.refreshRate === HW.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = HW.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(QQ) {
          if (this.isReady()) return void QQ(this);
          const WQ = this.getEffect();
          WQ && WQ.executeWhenCompiled((() => {
            QQ(this)
          }))
        }
        isReady() {
          const QQ = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const WQ = this._getDefines();
          if (this._drawWrapper.effect && WQ === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const wQ = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== WQ && (this._cachedDefines = WQ, this._drawWrapper.effect = QQ.createEffect(wQ, [fQ.l.PositionKind], this._uniforms, this._samplers, WQ, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([XQ.e(397).then((() => XQ(62139))), this._options.extraInitializationsAsync()]) : await Promise.all([XQ.e(398).then((() => XQ(62144))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await XQ.e(397).then((() => XQ(62139))) : await XQ.e(398).then((() => XQ(62144)))
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
        resize(QQ, WQ) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const XQ = this._texture.isCube;
          this._rtWrapper.dispose();
          const wQ = this._createRtWrapper(XQ, QQ, WQ, this._textureType);
          this._texture = wQ.texture, this._size = QQ, this._generateMipMaps = WQ
        }
        _checkUniform(QQ) {
          -1 === this._uniforms.indexOf(QQ) && this._uniforms.push(QQ)
        }
        setTexture(QQ, WQ) {
          return -1 === this._samplers.indexOf(QQ) && this._samplers.push(QQ), this._textures[QQ] = WQ, this
        }
        setFloat(QQ, WQ) {
          return this._checkUniform(QQ), this._floats[QQ] = WQ, this
        }
        setInt(QQ, WQ) {
          return this._checkUniform(QQ), this._ints[QQ] = WQ, this
        }
        setFloats(QQ, WQ) {
          return this._checkUniform(QQ), this._floatsArrays[QQ] = WQ, this
        }
        setColor3(QQ, WQ) {
          return this._checkUniform(QQ), this._colors3[QQ] = WQ, this
        }
        setColor4(QQ, WQ) {
          return this._checkUniform(QQ), this._colors4[QQ] = WQ, this
        }
        setVector2(QQ, WQ) {
          return this._checkUniform(QQ), this._vectors2[QQ] = WQ, this
        }
        setVector3(QQ, WQ) {
          return this._checkUniform(QQ), this._vectors3[QQ] = WQ, this
        }
        setVector4(QQ, WQ) {
          return this._checkUniform(QQ), this._vectors4[QQ] = WQ, this
        }
        setMatrix(QQ, WQ) {
          return this._checkUniform(QQ), this._matrices[QQ] = WQ, this
        }
        render(QQ) {
          const WQ = this.sE();
          if (!WQ) return;
          const XQ = this._fullEngine;
          if (XQ.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), XQ.setState(!1), !this.nodeMaterialSource) {
            for (const QQ in this._textures) this._drawWrapper.effect.setTexture(QQ, this._textures[QQ]);
            for (const QQ in this._ints) this._drawWrapper.effect.setInt(QQ, this._ints[QQ]);
            for (const QQ in this._floats) this._drawWrapper.effect.setFloat(QQ, this._floats[QQ]);
            for (const QQ in this._floatsArrays) this._drawWrapper.effect.setArray(QQ, this._floatsArrays[QQ]);
            for (const QQ in this._colors3) this._drawWrapper.effect.setColor3(QQ, this._colors3[QQ]);
            for (const QQ in this._colors4) {
              const WQ = this._colors4[QQ];
              this._drawWrapper.effect.setFloat4(QQ, WQ.r, WQ.g, WQ.b, WQ.a)
            }
            for (const QQ in this._vectors2) this._drawWrapper.effect.setVector2(QQ, this._vectors2[QQ]);
            for (const QQ in this._vectors3) this._drawWrapper.effect.setVector3(QQ, this._vectors3[QQ]);
            for (const QQ in this._vectors4) this._drawWrapper.effect.setVector4(QQ, this._vectors4[QQ]);
            for (const QQ in this._matrices) this._drawWrapper.effect.setMatrix(QQ, this._matrices[QQ])
          }
          if (!this._texture || !this._rtWrapper) return;
          XQ._enableGPUDebugMarkers && XQ._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const wQ = XQ.currentViewport;
          if (this.isCube)
            for (let qQ = 0; qQ < 6; qQ++) XQ.bindFramebuffer(this._rtWrapper, qQ, void 0, void 0, !0), XQ.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", qQ), this.autoClear && XQ.clear(WQ.clearColor, !0, !1, !1), XQ.drawElementsType(TQ.b.TriangleFillMode, 0, 6), XQ.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let QQ = 1;
            this._rtWrapper.is3D ? QQ = this._rtWrapper.depth : this._rtWrapper.is2DArray && (QQ = this._rtWrapper.layers);
            for (let wQ = 0; wQ < QQ; wQ++) {
              if (XQ.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, wQ), XQ.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== QQ ? wQ / (QQ - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", wQ);
                for (const QQ in this._textures) this._drawWrapper.effect.setTexture(QQ, this._textures[QQ])
              }
              this.autoClear && XQ.clear(WQ.clearColor, !0, !1, !1), XQ.drawElementsType(TQ.b.TriangleFillMode, 0, 6), XQ.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          wQ && XQ.setViewport(wQ), this.isCube && XQ.generateMipMapsForCubemap(this._texture, !0), XQ._enableGPUDebugMarkers && XQ._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const WQ = this.getSize(),
            XQ = new QQ(this.name, WQ.width, this._fragment, this.sE(), this._fallbackTexture, this._generateMipMaps);
          return XQ.hasAlpha = this.hasAlpha, XQ.level = this.level, XQ.coordinatesMode = this.coordinatesMode, XQ
        }
        dispose() {
          const QQ = this.sE();
          if (!QQ) return;
          const WQ = QQ.proceduralTextures.indexOf(this);
          WQ >= 0 && QQ.proceduralTextures.splice(WQ, 1);
          const XQ = this._vertexBuffers[fQ.l.PositionKind];
          XQ && (XQ.dispose(), this._vertexBuffers[fQ.l.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const XQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(FQ[Symbol.metadata] ?? null) : void 0;
        WQ = [(0, aQ.I)()], wQ = [(0, aQ.I)()], qQ = [(0, aQ.I)()], zQ = [(0, aQ.I)()], sQ = [(0, aQ.I)()], (0, HQ.k)(QQ, null, sQ, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: QQ => "refreshRate" in QQ,
            get: QQ => QQ.refreshRate
          },
          metadata: XQ
        }, null, PQ), (0, HQ.k)(null, null, WQ, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, WQ) => {
              QQ.isEnabled = WQ
            }
          },
          metadata: XQ
        }, gQ, JQ), (0, HQ.k)(null, null, wQ, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: QQ => "autoClear" in QQ,
            get: QQ => QQ.autoClear,
            set: (QQ, WQ) => {
              QQ.autoClear = WQ
            }
          },
          metadata: XQ
        }, rQ, IQ), (0, HQ.k)(null, null, qQ, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_generateMipMaps" in QQ,
            get: QQ => QQ._generateMipMaps,
            set: (QQ, WQ) => {
              QQ._generateMipMaps = WQ
            }
          },
          metadata: XQ
        }, jQ, yQ), (0, HQ.k)(null, null, zQ, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_size" in QQ,
            get: QQ => QQ._size,
            set: (QQ, WQ) => {
              QQ._size = WQ
            }
          },
          metadata: XQ
        }, VQ, DQ), XQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XQ
        })
      })(), QQ
    })();

    function qX(QQ) {
      return "texture" in QQ
    }

    function TX(QQ) {
      return "value" in QQ
    }
    async function zX(QQ, WQ, wQ) {
      const qQ = [WQ.red, WQ.green, WQ.blue, WQ.alpha],
        TQ = [],
        zQ = [];
      for (let XQ = 0; XQ < 4; XQ++) {
        const QQ = qQ[XQ];
        if (QQ)
          if (qX(QQ)) {
            if (QQ.sourceChannel < 0 || QQ.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let WQ = TQ.indexOf(QQ.texture); - 1 === WQ && (WQ = TQ.length, TQ.push(QQ.texture)), zQ[XQ] = WQ
          } else {
            if (!TX(QQ)) throw new Error("Invalid channel input configuration");
            if (QQ.value < 0 || QQ.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            zQ[XQ] = -1
          }
        else zQ[XQ] = -1
      }
      let sQ = WQ.outputSize;
      if (!sQ && TQ.length > 0) {
        let QQ = 0;
        for (const WQ of TQ) {
          const XQ = WQ.getSize(),
            wQ = Math.max(XQ.width, XQ.height);
          wQ > QQ && (QQ = wQ, sQ = XQ.width === XQ.height ? QQ : XQ)
        }
      }
      sQ = sQ || 512;
      const FQ = [],
        PQ = new Set;
      for (let XQ = 0; XQ < 4; XQ++) {
        const QQ = qQ[XQ],
          WQ = ["RED", "GREEN", "BLUE", "ALPHA"][XQ];
        if (QQ && qX(QQ)) {
          FQ.push(`${WQ}_FROM_TEXTURE`);
          const QQ = zQ[XQ];
          PQ.add(QQ)
        }
      }
      PQ.forEach((QQ => {
        FQ.push(`USE_TEXTURE${QQ}`)
      }));
      const gQ = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: wQ.Uj().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            wQ.Uj().isWebGPU ? await Promise.all([XQ.e(395).then((() => XQ(62127)))]) : await Promise.all([XQ.e(396).then((() => XQ(62136)))])
          },
          skipSceneRegistration: !0
        },
        JQ = new wX(QQ, sQ, "textureMerger", wQ, gQ);
      JQ.refreshRate = -1, JQ.defines = FQ.length > 0 ? "#define " + FQ.join("\n#define ") + "\n" : "";
      for (let XQ = 0; XQ < TQ.length; XQ++) rQ = TQ[XQ], (IQ = JQ).uOffset = rQ.uOffset, IQ.vOffset = rQ.vOffset, IQ.uScale = rQ.uScale, IQ.vScale = rQ.vScale, IQ.uAng = rQ.uAng, IQ.vAng = rQ.vAng, IQ.wAng = rQ.wAng, IQ.uRotationCenter = rQ.uRotationCenter, IQ.vRotationCenter = rQ.vRotationCenter, JQ.setTexture(`inputTexture${XQ}`, TQ[XQ]);
      var rQ, IQ;
      for (let XQ = 0; XQ < 4; XQ++) {
        const QQ = qQ[XQ],
          WQ = ["red", "green", "blue", "alpha"][XQ];
        if (QQ && qX(QQ)) {
          const wQ = zQ[XQ];
          JQ.setInt(`${WQ}TextureIndex`, wQ), JQ.setInt(`${WQ}SourceChannel`, QQ.sourceChannel)
        } else {
          let wQ;
          wQ = QQ && TX(QQ) ? QQ.value : 3 === XQ ? 1 : 0, JQ.setFloat(`${WQ}ConstantValue`, wQ)
        }
      }
      return await new Promise(((QQ, WQ) => {
        JQ.executeWhenReady((() => {
          try {
            JQ.render(), QQ(JQ)
          } catch (XQ) {
            WQ(XQ instanceof Error ? XQ : new Error(String(XQ)))
          }
        }))
      }))
    }

    function sX(QQ, WQ) {
      return {
        texture: QQ,
        sourceChannel: WQ
      }
    }

    function FX(QQ) {
      return {
        value: QQ
      }
    }

    function PX(QQ, WQ, XQ, wQ) {
      return {
        red: QQ,
        green: WQ,
        blue: XQ,
        alpha: wQ
      }
    }
    var gX = XQ(40095),
      JX = XQ(40199),
      rX = XQ(37387),
      IX = XQ(40247),
      jX = XQ(40188);
    class BX {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class yX extends gX.d {
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
        return !!this._options?.enableMultiview || this.Mj > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new BX;
        super(null), void 0 === QQ.deterministicLockstep && (QQ.deterministicLockstep = !1), void 0 !== QQ.timeStep && (this._timeStep = QQ.timeStep), void 0 === QQ.lockstepMaxSteps && (QQ.lockstepMaxSteps = 4), this._options = QQ, rX.e.SetMatrixPrecision(!!QQ.useHighPrecisionMatrix), this._caps = {
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
        }, QQ.renderingCanvas && (this._renderingCanvas = QQ.renderingCanvas), lQ.b.Log(`Babylon.js v${gX.d.Version} - Null engine`);
        const WQ = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (WQ.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (WQ.Blob = function() {})
      }
      createVertexBuffer(QQ) {
        const WQ = new JX.b;
        return WQ.references = 1, WQ
      }
      createIndexBuffer(QQ) {
        const WQ = new JX.b;
        return WQ.references = 1, WQ
      }
      clear(QQ, WQ, XQ) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(QQ, WQ, XQ) {
        this._cachedViewport = QQ
      }
      createUniformBuffer(QQ) {
        const WQ = new JX.b;
        return WQ.references = 1, WQ.yJ = QQ instanceof Array ? QQ.length * Float32Array.BYTES_PER_ELEMENT : QQ.byteLength, WQ
      }
      createDynamicUniformBuffer(QQ) {
        return this.createUniformBuffer(QQ)
      }
      updateUniformBuffer(QQ, WQ, XQ, wQ) {}
      bindUniformBufferBase(QQ, WQ, XQ) {}
      bindUniformBlock(QQ, WQ, XQ) {}
      createShaderProgram(QQ, WQ, XQ, wQ, qQ) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(QQ, WQ) {
        return []
      }
      getAttributes(QQ, WQ) {
        return []
      }
      bindSamplers(QQ) {
        this._currentEffect = null
      }
      enableEffect(QQ) {
        QQ = null !== QQ && (0, jX.c)(QQ) ? QQ.effect : QQ, this._currentEffect = QQ, QQ && (QQ.onBind && QQ.onBind(QQ), QQ._onBindObservable && QQ._onBindObservable.notifyObservers(QQ))
      }
      setStateCullFaceType(QQ, WQ) {}
      setState(QQ) {}
      setIntArray(QQ, WQ) {
        return !0
      }
      setIntArray2(QQ, WQ) {
        return !0
      }
      setIntArray3(QQ, WQ) {
        return !0
      }
      setIntArray4(QQ, WQ) {
        return !0
      }
      setFloatArray(QQ, WQ) {
        return !0
      }
      setFloatArray2(QQ, WQ) {
        return !0
      }
      setFloatArray3(QQ, WQ) {
        return !0
      }
      setFloatArray4(QQ, WQ) {
        return !0
      }
      setArray(QQ, WQ) {
        return !0
      }
      setArray2(QQ, WQ) {
        return !0
      }
      setArray3(QQ, WQ) {
        return !0
      }
      setArray4(QQ, WQ) {
        return !0
      }
      setMatrices(QQ, WQ) {
        return !0
      }
      setMatrix3x3(QQ, WQ) {
        return !0
      }
      setMatrix2x2(QQ, WQ) {
        return !0
      }
      setFloat(QQ, WQ) {
        return !0
      }
      setFloat2(QQ, WQ, XQ) {
        return !0
      }
      setFloat3(QQ, WQ, XQ, wQ) {
        return !0
      }
      setBool(QQ, WQ) {
        return !0
      }
      setFloat4(QQ, WQ, XQ, wQ, qQ) {
        return !0
      }
      setAlphaMode(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[XQ] !== QQ && (this.alphaState.setAlphaBlend(0 !== QQ, 0), WQ || this.setDepthWrite(0 === QQ), this._alphaMode[XQ] = QQ)
      }
      bindBuffers(QQ, WQ, XQ) {}
      wipeCaches(QQ) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, QQ && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(QQ, WQ, XQ, wQ) {}
      drawElementsType(QQ, WQ, XQ, wQ) {}
      drawArraysType(QQ, WQ, XQ, wQ) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(QQ) {}
      createTexture(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          zQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          sQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const FQ = new aW.e(this, 1),
          PQ = String(QQ);
        return FQ.url = PQ, FQ.generateMipMaps = !WQ, FQ.samplingMode = qQ, FQ.invertY = XQ, FQ.baseWidth = this._options.textureSize, FQ.baseHeight = this._options.textureSize, FQ.width = this._options.textureSize, FQ.height = this._options.textureSize, sQ && (FQ.format = sQ), zQ && (FQ._buffer = zQ), FQ.isReady = !0, TQ && setTimeout((() => {
          TQ(FQ)
        })), this._internalTexturesCache.push(FQ), FQ
      }
      _createHardwareRenderTargetWrapper(QQ, WQ, XQ) {
        const wQ = new IX.e(QQ, WQ, XQ, this);
        return this._renderTargetWrapperCache.push(wQ), wQ
      }
      createRenderTargetTexture(QQ, WQ) {
        const XQ = this._createHardwareRenderTargetWrapper(!1, !1, QQ),
          wQ = {};
        void 0 !== WQ && "object" === typeof WQ ? (wQ.generateMipMaps = WQ.generateMipMaps, wQ.generateDepthBuffer = void 0 === WQ.generateDepthBuffer || WQ.generateDepthBuffer, wQ.generateStencilBuffer = wQ.generateDepthBuffer && WQ.generateStencilBuffer, wQ.type = void 0 === WQ.type ? 0 : WQ.type, wQ.samplingMode = void 0 === WQ.samplingMode ? 3 : WQ.samplingMode) : (wQ.generateMipMaps = WQ, wQ.generateDepthBuffer = !0, wQ.generateStencilBuffer = !1, wQ.type = 0, wQ.samplingMode = 3);
        const qQ = new aW.e(this, 5);
        XQ.setTexture(qQ);
        const TQ = QQ.width || QQ,
          zQ = QQ.height || QQ;
        return XQ._generateDepthBuffer = wQ.generateDepthBuffer, XQ._generateStencilBuffer = !!wQ.generateStencilBuffer, qQ.baseWidth = TQ, qQ.baseHeight = zQ, qQ.width = TQ, qQ.height = zQ, qQ.isReady = !0, qQ.samples = 1, qQ.generateMipMaps = !!wQ.generateMipMaps, qQ.samplingMode = wQ.samplingMode, qQ.type = wQ.type, this._internalTexturesCache.push(qQ), XQ
      }
      createMultiviewRenderTargetTexture(QQ, WQ) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const XQ = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: QQ,
            height: WQ
          }),
          wQ = new aW.e(this, 5, !0);
        return wQ.baseWidth = QQ, wQ.baseHeight = WQ, wQ.width = QQ, wQ.height = WQ, wQ.isMultiview = !0, wQ.isReady = !0, wQ.format = 5, wQ.samples = 1, XQ.setTextures(wQ), XQ
      }
      bindMultiviewFramebuffer(QQ) {
        this.bindFramebuffer(QQ, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(QQ, WQ) {
        const XQ = this._createHardwareRenderTargetWrapper(!1, !0, QQ),
          wQ = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...WQ
          };
        wQ.generateStencilBuffer = wQ.generateDepthBuffer && wQ.generateStencilBuffer, (1 !== wQ.type || this._caps.textureFloatLinearFiltering) && (2 !== wQ.type || this._caps.textureHalfFloatLinearFiltering) || (wQ.samplingMode = 1), XQ._generateDepthBuffer = wQ.generateDepthBuffer, XQ._generateStencilBuffer = !!wQ.generateStencilBuffer;
        const qQ = new aW.e(this, 5);
        return qQ.baseWidth = QQ, qQ.baseHeight = QQ, qQ.width = QQ, qQ.height = QQ, qQ.isReady = !0, qQ.isCube = !0, qQ.samples = 1, qQ.generateMipMaps = !!wQ.generateMipMaps, qQ.samplingMode = wQ.samplingMode, qQ.type = wQ.type, this._internalTexturesCache.push(qQ), XQ
      }
      updateTextureSamplingMode(QQ, WQ) {
        WQ.samplingMode = QQ
      }
      createRawTexture(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        let sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          FQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          PQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const gQ = new aW.e(this, 3);
        return gQ.baseWidth = WQ, gQ.baseHeight = XQ, gQ.width = WQ, gQ.height = XQ, gQ.format = wQ, gQ.generateMipMaps = qQ, gQ.samplingMode = zQ, gQ.invertY = TQ, gQ._compression = sQ, gQ.type = FQ, gQ._useSRGBBuffer = PQ, this._doNotHandleContextLost || (gQ._bufferView = QQ), gQ
      }
      updateRawTexture(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        QQ && (QQ._bufferView = WQ, QQ.format = XQ, QQ.invertY = wQ, QQ._compression = qQ, QQ.type = TQ, QQ._useSRGBBuffer = zQ)
      }
      bindFramebuffer(QQ, WQ, XQ, wQ, qQ) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = QQ, this._currentFramebuffer = null, this._cachedViewport && !qQ && this.setViewport(this._cachedViewport, XQ, wQ)
      }
      unBindFramebuffer(QQ) {
        let WQ = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, WQ && WQ(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(QQ) {
        const WQ = new JX.b;
        return WQ.references = 1, WQ.yJ = 1, WQ
      }
      updateDynamicTexture(QQ, WQ, XQ) {}
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
      updateDynamicIndexBuffer(QQ, WQ) {}
      updateDynamicVertexBuffer(QQ, WQ, XQ, wQ) {}
      _bindTextureDirectly(QQ, WQ) {
        return this._boundTexturesCache[this._activeChannel] !== WQ && (this._boundTexturesCache[this._activeChannel] = WQ, !0)
      }
      _bindTexture(QQ, WQ) {
        QQ < 0 || this._bindTextureDirectly(0, WQ)
      }
      _deleteBuffer(QQ) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(QQ) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(QQ, WQ, XQ, wQ, qQ) {}
      _uploadDataToTextureDirectly(QQ, WQ) {}
      _uploadArrayBufferViewToTexture(QQ, WQ) {}
      _uploadImageToTexture(QQ, WQ) {}
    }
    XQ(40300), XQ(40342), XQ(40293);
    async function VX(QQ) {
      const WQ = QQ.getInternalTexture();
      if (!WQ || 1 !== WQ.source) return null;
      if (WQ.invertY) {
        const WQ = QQ.sE()?.Uj();
        if (!(WQ instanceof yX)) return null
      }
      const XQ = WQ._buffer;
      let wQ, TQ = QQ.mimeType;
      try {
        XQ ? ArrayBuffer.isView(XQ) ? wQ = XQ.buffer.slice(XQ.byteOffset, XQ.byteOffset + XQ.byteLength) : XQ instanceof ArrayBuffer ? wQ = XQ : XQ instanceof Blob ? (wQ = await XQ.arrayBuffer(), TQ = XQ.type || TQ) : "string" === typeof XQ ? (wQ = await qQ.Tools.LoadFileAsync(XQ), TQ = (0, FQ.b)(XQ) || TQ) : "undefined" !== typeof HTMLImageElement && XQ instanceof HTMLImageElement && (wQ = await qQ.Tools.LoadFileAsync(XQ.src), TQ = (0, FQ.b)(XQ.src) || TQ) : (wQ = await qQ.Tools.LoadFileAsync(WQ.url), TQ = (0, FQ.b)(WQ.url) || TQ)
      } catch {
        return null
      }
      if (wQ && !TQ && WQ.url) {
        const QQ = WQ.url.match(/^data:([^;,]+)/);
        TQ = QQ ? QQ[1] : (0, FQ.b)(WQ.url)
      }
      return wQ && TQ ? {
        data: wQ,
        mimeType: TQ
      } : null
    }
    const DX = 1e-6,
      pX = new yQ.Color3(.04, .04, .04),
      GX = 1024,
      UX = yQ.Color3.White(),
      bX = yQ.Color3.BlackReadOnly;

    function vX(QQ) {
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

    function dX(QQ, WQ, XQ) {
      if (WQ < pX.r) return 0;
      const wQ = pX.r,
        qQ = QQ * XQ / (1 - pX.r) + WQ - 2 * pX.r,
        TQ = qQ * qQ - 4 * wQ * (pX.r - WQ);
      return pQ.Clamp((-qQ + Math.sqrt(TQ)) / (2 * wQ), 0, 1)
    }

    function HX(QQ) {
      const WQ = QQ.diffuseColor.toLinearSpace(QQ.sE().Uj().useExactSrgbConversions).scale(.5),
        XQ = QQ.alpha,
        wQ = function(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new kQ.q(0, 1),
            XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new kQ.q(0, .1),
            wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kQ.q(0, .1),
            qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new kQ.q(1300, .1);
          return function(QQ, WQ, XQ, wQ, qQ) {
            return (1 - QQ) * (1 - QQ) * (1 - QQ) * WQ + 3 * (1 - QQ) * (1 - QQ) * QQ * XQ + 3 * (1 - QQ) * QQ * QQ * wQ + QQ * QQ * QQ * qQ
          }(Math.pow(QQ / qQ.x, .333333), WQ.y, XQ.y, wQ.y, qQ.y)
        }(pQ.Clamp(QQ.specularPower, 0, GX));
      return {
        baseColorFactor: [WQ.r, WQ.g, WQ.b, XQ],
        metallicFactor: 0,
        roughnessFactor: wQ
      }
    }

    function aX(QQ, WQ) {
      WQ.needAlphaBlending() ? QQ.alphaMode = "BLEND" : WQ.needAlphaTesting() && (QQ.alphaMode = "MASK", QQ.alphaCutoff = WQ.alphaCutOff)
    }

    function lX(QQ, WQ, XQ) {
      const wQ = new Uint8Array(QQ * WQ * 4);
      for (let qQ = 0; qQ < wQ.length; qQ += 4) wQ[qQ] = wQ[qQ + 1] = wQ[qQ + 2] = wQ[qQ + 3] = 255;
      return bQ.b.CreateRGBATexture(wQ, QQ, WQ, XQ)
    }

    function hX(QQ) {
      if (QQ instanceof Uint8Array) {
        const WQ = QQ.length,
          XQ = new Float32Array(QQ.length);
        for (let wQ = 0; wQ < WQ; ++wQ) XQ[wQ] = QQ[wQ] / 255;
        return XQ
      }
      if (QQ instanceof Float32Array) return QQ;
      throw new Error("Unsupported pixel format!")
    }
    class iX {
      constructor(QQ) {
        this._exporter = QQ, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(QQ) {
        return QQ ? this._textureMap.get(QQ.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(QQ, WQ) {
        const XQ = HX(QQ),
          wQ = {
            name: QQ.name
          };
        if (null == QQ.backFaceCulling || QQ.backFaceCulling || (QQ.twoSidedLighting || qQ.Tools.Warn(QQ.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), wQ.doubleSided = !0), WQ) {
          const WQ = [],
            qQ = QQ.diffuseTexture;
          qQ && WQ.push(this.exportTextureAsync(qQ).then((QQ => {
            QQ && (XQ.baseColorTexture = QQ)
          })));
          const TQ = QQ.bumpTexture;
          TQ && WQ.push(this.exportTextureAsync(TQ).then((QQ => {
            QQ && (wQ.normalTexture = QQ, 1 !== TQ.level && (wQ.normalTexture.scale = TQ.level))
          })));
          const zQ = QQ.emissiveTexture;
          zQ && (wQ.emissiveFactor = [1, 1, 1], WQ.push(this.exportTextureAsync(zQ).then((QQ => {
            QQ && (wQ.emissiveTexture = QQ)
          }))));
          const sQ = QQ.ambientTexture;
          sQ && WQ.push(this.exportTextureAsync(sQ).then((QQ => {
            if (QQ) {
              const WQ = {
                index: QQ.index
              };
              wQ.occlusionTexture = WQ
            }
          }))), WQ.length > 0 && (this._exporter._materialNeedsUVsSet.add(QQ), await Promise.all(WQ))
        }(QQ.alpha < 1 || QQ.opacityTexture) && (QQ.alphaMode === vQ.b.ALPHA_COMBINE ? wQ.alphaMode = "BLEND" : qQ.Tools.Warn(QQ.name + ": glTF 2.0 does not support alpha mode: " + QQ.alphaMode.toString())), QQ.emissiveColor && !QQ.emissiveColor.equalsWithEpsilon(bX, DX) && (wQ.emissiveFactor = QQ.emissiveColor.awQ()), wQ.pbrMetallicRoughness = XQ, aX(wQ, QQ), await this._finishMaterialAsync(wQ, QQ);
        const TQ = this._exporter._materials;
        return TQ.push(wQ), TQ.length - 1
      }
      async _finishMaterialAsync(QQ, WQ) {
        const XQ = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", QQ, WQ),
          wQ = [];
        for (const qQ of XQ) wQ.push(this.exportTextureAsync(qQ));
        await Promise.all(wQ), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", QQ, WQ)
      }
      _resizeTexturesToSameDimensions(QQ, WQ, XQ) {
        const wQ = QQ ? QQ.getSize() : {
            width: 0,
            height: 0
          },
          qQ = WQ ? WQ.getSize() : {
            width: 0,
            height: 0
          };
        let TQ, zQ;
        return wQ.width < qQ.width ? (TQ = QQ && QQ instanceof UQ.e ? GQ.f.CreateResizedCopy(QQ, qQ.width, qQ.height, !0) : lX(qQ.width, qQ.height, XQ), zQ = WQ) : wQ.width > qQ.width ? (zQ = WQ && WQ instanceof UQ.e ? GQ.f.CreateResizedCopy(WQ, wQ.width, wQ.height, !0) : lX(wQ.width, wQ.height, XQ), TQ = QQ) : (TQ = QQ, zQ = WQ), {
          texture1: TQ,
          texture2: zQ
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(QQ, WQ, XQ) {
        const wQ = new Array;
        if (!QQ && !WQ) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const qQ = QQ ? QQ.sE() : WQ ? WQ.sE() : null;
        if (qQ) {
          const TQ = this._resizeTexturesToSameDimensions(QQ, WQ, qQ),
            zQ = TQ.texture1?.getSize();
          let sQ, FQ;
          const PQ = zQ.width,
            gQ = zQ.height,
            JQ = await TQ.texture1.readPixels(),
            rQ = await TQ.texture2.readPixels();
          if (!JQ) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (sQ = hX(JQ), !rQ) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          FQ = hX(rQ);
          const IQ = FQ.byteLength,
            jQ = new Uint8Array(IQ),
            BQ = new Uint8Array(IQ),
            VQ = 4,
            DQ = new yQ.Color3(0, 0, 0);
          let pQ = 0,
            GQ = 0;
          for (let QQ = 0; QQ < gQ; ++QQ)
            for (let WQ = 0; WQ < PQ; ++WQ) {
              const wQ = (PQ * QQ + WQ) * VQ,
                zQ = {
                  diffuseColor: new yQ.Color3(sQ[wQ], sQ[wQ + 1], sQ[wQ + 2]).toLinearSpace(qQ.Uj().useExactSrgbConversions).multiply(XQ.diffuseColor),
                  specularColor: new yQ.Color3(FQ[wQ], FQ[wQ + 1], FQ[wQ + 2]).toLinearSpace(qQ.Uj().useExactSrgbConversions).multiply(XQ.specularColor),
                  glossiness: FQ[wQ + 3] * XQ.glossiness
                },
                gQ = this._convertSpecularGlossinessToMetallicRoughness(zQ);
              DQ.r = Math.max(DQ.r, gQ.baseColor.r), DQ.g = Math.max(DQ.g, gQ.baseColor.g), DQ.b = Math.max(DQ.b, gQ.baseColor.b), pQ = Math.max(pQ, gQ.metallic), GQ = Math.max(GQ, gQ.roughness), BQ[wQ] = 255 * gQ.baseColor.r, BQ[wQ + 1] = 255 * gQ.baseColor.g, BQ[wQ + 2] = 255 * gQ.baseColor.b, BQ[wQ + 3] = TQ.texture1.hasAlpha ? 255 * sQ[wQ + 3] : 255, jQ[wQ] = 0, jQ[wQ + 1] = 255 * gQ.roughness, jQ[wQ + 2] = 255 * gQ.metallic, jQ[wQ + 3] = 255
            }
          const UQ = {
            baseColor: DQ,
            metallic: pQ,
            roughness: GQ
          };
          let bQ = !1,
            vQ = !1;
          for (let QQ = 0; QQ < gQ; ++QQ)
            for (let WQ = 0; WQ < PQ; ++WQ) {
              const XQ = (PQ * QQ + WQ) * VQ;
              BQ[XQ] /= UQ.baseColor.r > DX ? UQ.baseColor.r : 1, BQ[XQ + 1] /= UQ.baseColor.g > DX ? UQ.baseColor.g : 1, BQ[XQ + 2] /= UQ.baseColor.b > DX ? UQ.baseColor.b : 1;
              const wQ = yQ.Color3.FromInts(BQ[XQ], BQ[XQ + 1], BQ[XQ + 2]).toGammaSpace(qQ.Uj().useExactSrgbConversions);
              BQ[XQ] = 255 * wQ.r, BQ[XQ + 1] = 255 * wQ.g, BQ[XQ + 2] = 255 * wQ.b, wQ.equalsWithEpsilon(UX, DX) || (vQ = !0), jQ[XQ + 1] /= UQ.roughness > DX ? UQ.roughness : 1, jQ[XQ + 2] /= UQ.metallic > DX ? UQ.metallic : 1;
              yQ.Color3.FromInts(255, jQ[XQ + 1], jQ[XQ + 2]).equalsWithEpsilon(UX, DX) || (bQ = !0)
            }
          return bQ && wQ.push((0, dQ.EncodeImageAsync)(jQ, PQ, gQ).then((QQ => {
            UQ.metallicRoughnessTextureData = QQ
          }))), vQ && wQ.push((0, dQ.EncodeImageAsync)(BQ, PQ, gQ).then((QQ => {
            UQ.baseColorTextureData = QQ
          }))), await Promise.all(wQ).then((() => UQ))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(QQ) {
        const WQ = this._getPerceivedBrightness(QQ.diffuseColor),
          XQ = this._getPerceivedBrightness(QQ.specularColor),
          wQ = 1 - this._getMaxComponent(QQ.specularColor),
          qQ = dX(WQ, XQ, wQ),
          TQ = QQ.diffuseColor.scale(wQ / (1 - pX.r) / Math.max(1 - qQ, DX)),
          zQ = QQ.specularColor.subtract(pX.scale(1 - qQ)).scale(1 / Math.max(qQ, DX));
        let sQ = yQ.Color3.Lerp(TQ, zQ, qQ * qQ);
        sQ = sQ.clampToRef(0, 1, sQ);
        return {
          baseColor: sQ,
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
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        const PQ = [],
          gQ = {
            baseColor: QQ,
            metallic: WQ,
            roughness: XQ
          };
        if (FQ)
          if (zQ instanceof mW) {
            if (zQ.geometryOpacityTexture) {
              const QQ = wQ && wQ.getInternalTexture() ? wQ.getInternalTexture().uniqueId : 0,
                WQ = zQ.geometryOpacityTexture && zQ.geometryOpacityTexture.getInternalTexture() ? zQ.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                XQ = Number(`${QQ}${WQ}`),
                qQ = this._textureMap.get(XQ);
              qQ ? sQ.baseColorTexture = qQ : PQ.push(zX("baseColorOpacityTexture", PX(wQ ? sX(wQ, 0) : FX(1), wQ ? sX(wQ, 1) : FX(1), wQ ? sX(wQ, 2) : FX(1), sX(zQ.geometryOpacityTexture, 0)), zQ.sE()).then((async QQ => {
                const WQ = await this.exportTextureAsync(QQ, XQ);
                WQ && (sQ.baseColorTexture = WQ)
              })))
            } else wQ && PQ.push(this.exportTextureAsync(wQ).then((QQ => {
              QQ && (sQ.baseColorTexture = QQ)
            })));
            if (zQ._useMetallicFromMetallicTextureBlue && qQ) PQ.push(this.exportTextureAsync(qQ).then((QQ => {
              QQ && (sQ.metallicRoughnessTexture = QQ)
            })));
            else if (TQ || qQ) {
              const QQ = qQ && qQ.getInternalTexture() ? qQ.getInternalTexture().uniqueId : 0,
                WQ = TQ && TQ.getInternalTexture() ? TQ.getInternalTexture().uniqueId : 0,
                XQ = Number(`${QQ}${WQ}`),
                wQ = this._textureMap.get(XQ);
              wQ ? sQ.metallicRoughnessTexture = wQ : PQ.push(zX("MetalRoughTexture", PX(zQ.ambientOcclusionTexture ? sX(zQ.ambientOcclusionTexture, 0) : FX(1), TQ ? sX(TQ, 0) : FX(1), qQ ? sX(qQ, 0) : FX(1)), zQ.sE()).then((async QQ => {
                const WQ = await this.exportTextureAsync(QQ, XQ);
                WQ && (sQ.metallicRoughnessTexture = WQ)
              })))
            }
          } else wQ && PQ.push(this.exportTextureAsync(wQ).then((QQ => {
            QQ && (sQ.baseColorTexture = QQ)
          }))), qQ && PQ.push(this.exportTextureAsync(qQ).then((QQ => {
            QQ && (sQ.metallicRoughnessTexture = QQ)
          })));
        return PQ.length > 0 && (this._exporter._materialNeedsUVsSet.add(zQ), await Promise.all(PQ)), gQ
      }
      _getTextureSampler(QQ) {
        const WQ = {};
        if (!QQ || !(QQ instanceof UQ.e)) return WQ;
        const XQ = this._getGLTFTextureWrapMode(QQ.wrapU);
        10497 !== XQ && (WQ.wrapS = XQ);
        const wQ = this._getGLTFTextureWrapMode(QQ.wrapV);
        switch (10497 !== wQ && (WQ.wrapT = wQ), QQ.samplingMode) {
          case UQ.e.LINEAR_LINEAR:
            WQ.magFilter = 9729, WQ.minFilter = 9729;
            break;
          case UQ.e.LINEAR_NEAREST:
            WQ.magFilter = 9729, WQ.minFilter = 9728;
            break;
          case UQ.e.NEAREST_LINEAR:
            WQ.magFilter = 9728, WQ.minFilter = 9729;
            break;
          case UQ.e.NEAREST_LINEAR_MIPLINEAR:
            WQ.magFilter = 9728, WQ.minFilter = 9987;
            break;
          case UQ.e.NEAREST_NEAREST:
            WQ.magFilter = 9728, WQ.minFilter = 9728;
            break;
          case UQ.e.NEAREST_LINEAR_MIPNEAREST:
            WQ.magFilter = 9728, WQ.minFilter = 9985;
            break;
          case UQ.e.LINEAR_NEAREST_MIPNEAREST:
            WQ.magFilter = 9729, WQ.minFilter = 9984;
            break;
          case UQ.e.LINEAR_NEAREST_MIPLINEAR:
            WQ.magFilter = 9729, WQ.minFilter = 9986;
            break;
          case UQ.e.NEAREST_NEAREST_MIPLINEAR:
            WQ.magFilter = 9728, WQ.minFilter = 9986;
            break;
          case UQ.e.LINEAR_LINEAR_MIPLINEAR:
            WQ.magFilter = 9729, WQ.minFilter = 9987;
            break;
          case UQ.e.LINEAR_LINEAR_MIPNEAREST:
            WQ.magFilter = 9729, WQ.minFilter = 9985;
            break;
          case UQ.e.NEAREST_NEAREST_MIPNEAREST:
            WQ.magFilter = 9728, WQ.minFilter = 9984
        }
        return WQ
      }
      _getGLTFTextureWrapMode(QQ) {
        switch (QQ) {
          case UQ.e.WRAP_ADDRESSMODE:
            return 10497;
          case UQ.e.CLAMP_ADDRESSMODE:
            return 33071;
          case UQ.e.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return qQ.Tools.Error(`Unsupported Texture Wrap Mode ${QQ}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(QQ, WQ, XQ) {
        const wQ = {
            diffuseColor: QQ._albedoColor,
            specularColor: QQ._reflectivityColor,
            glossiness: QQ._microSurface
          },
          qQ = QQ._albedoTexture,
          TQ = QQ._reflectivityTexture,
          zQ = QQ._useMicroSurfaceFromReflectivityMapAlpha;
        if (TQ && !zQ) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((qQ || TQ) && XQ) {
          this._exporter._materialNeedsUVsSet.add(QQ);
          const XQ = this._exportTextureSampler(qQ || TQ),
            zQ = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(qQ, TQ, wQ),
            sQ = this._exporter._textures;
          if (zQ.baseColorTextureData) {
            const QQ = await this._exportImageAsync(`baseColor${sQ.length}`, zQ.baseColorTextureData);
            WQ.baseColorTexture = this._exportTextureInfo(QQ, XQ, qQ?.coordinatesIndex)
          }
          if (zQ.metallicRoughnessTextureData) {
            const QQ = await this._exportImageAsync(`metallicRoughness${sQ.length}`, zQ.metallicRoughnessTextureData);
            WQ.metallicRoughnessTexture = this._exportTextureInfo(QQ, XQ, TQ?.coordinatesIndex)
          }
          return zQ
        }
        return this._convertSpecularGlossinessToMetallicRoughness(wQ)
      }
      async exportPBRMaterialAsync(QQ, WQ) {
        const XQ = {},
          wQ = {
            name: QQ.name
          },
          qQ = QQ.isMetallicWorkflow();
        if (qQ) {
          const WQ = QQ._albedoColor,
            wQ = QQ.alpha;
          WQ && (XQ.baseColorFactor = [WQ.r, WQ.g, WQ.b, wQ])
        }
        const TQ = qQ ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(QQ._albedoColor, QQ._metallic, QQ._roughness, QQ._albedoTexture, QQ._metallicTexture, QQ._metallicTexture, QQ, XQ, WQ) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(QQ, XQ, WQ);
        await this._setMetallicRoughnessPbrMaterialAsync(TQ, QQ, wQ, XQ, WQ), await this._finishMaterialAsync(wQ, QQ);
        const zQ = this._exporter._materials;
        return zQ.push(wQ), zQ.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(QQ, WQ, XQ, wQ, TQ) {
        if (aX(XQ, WQ), QQ.baseColor.equalsWithEpsilon(UX, DX) && pQ.WithinEpsilon(WQ.alpha, 1, DX) || (wQ.baseColorFactor = [QQ.baseColor.r, QQ.baseColor.g, QQ.baseColor.b, WQ.alpha]), null != QQ.metallic && 1 !== QQ.metallic && (wQ.metallicFactor = QQ.metallic), null != QQ.roughness && 1 !== QQ.roughness && (wQ.roughnessFactor = QQ.roughness), null == WQ.backFaceCulling || WQ.backFaceCulling || (WQ._twoSidedLighting || qQ.Tools.Warn(WQ.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), XQ.doubleSided = !0), TQ) {
          const QQ = [],
            qQ = WQ instanceof bW ? WQ._bumpTexture : WQ.geometryNormalTexture;
          qQ && QQ.push(this.exportTextureAsync(qQ).then((QQ => {
            QQ && (XQ.normalTexture = QQ, 1 !== qQ.level && (XQ.normalTexture.scale = qQ.level))
          })));
          const TQ = WQ instanceof bW ? WQ._ambientTexture : WQ.ambientOcclusionTexture;
          TQ && QQ.push(new Promise((async QQ => {
            if (WQ instanceof mW && wQ.metallicRoughnessTexture) {
              const WQ = this._exportTextureSampler(TQ),
                XQ = this._exporter._textures[wQ.metallicRoughnessTexture.index].source,
                qQ = this._exportTextureInfo(XQ, WQ, TQ.coordinatesIndex);
              return this._textureMap.set(TQ.uniqueId, qQ), this._exporter._extensionsPostExportTextures("exporter", qQ, TQ), QQ(qQ)
            }
            return QQ(await this.exportTextureAsync(TQ))
          })).then((async QQ => {
            if (QQ) {
              const wQ = {
                index: QQ.index,
                texCoord: QQ.texCoord,
                extensions: QQ.extensions
              };
              XQ.occlusionTexture = wQ, wQ.strength = WQ instanceof bW ? WQ._ambientTextureStrength : WQ.ambientOcclusionTexture.level
            }
          })));
          const zQ = WQ instanceof bW ? WQ._emissiveTexture : WQ.emissionColorTexture;
          zQ && QQ.push(this.exportTextureAsync(zQ).then((QQ => {
            QQ && (XQ.emissiveTexture = QQ)
          }))), QQ.length > 0 && (this._exporter._materialNeedsUVsSet.add(WQ), await Promise.all(QQ))
        }
        const zQ = WQ instanceof bW ? WQ._emissiveColor : WQ.emissionColor;
        zQ.equalsWithEpsilon(bX, DX) || (XQ.emissiveFactor = zQ.awQ()), XQ.pbrMetallicRoughness = wQ
      }
      async exportOpenPBRMaterialAsync(QQ, WQ) {
        const XQ = {},
          wQ = {
            name: QQ.name
          },
          qQ = QQ.baseColor,
          TQ = QQ.geometryOpacity;
        qQ && (XQ.baseColorFactor = [qQ.r, qQ.g, qQ.b, TQ]);
        const zQ = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(QQ.baseColor, QQ.baseMetalness, QQ.specularRoughness, QQ.baseColorTexture, QQ.baseMetalnessTexture, QQ.specularRoughnessTexture, QQ, XQ, WQ);
        await this._setMetallicRoughnessPbrMaterialAsync(zQ, QQ, wQ, XQ, WQ), await this._finishMaterialAsync(wQ, QQ);
        const sQ = this._exporter._materials;
        return sQ.push(wQ), sQ.length - 1
      }
      async exportTextureAsync(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = this._textureMap.get(WQ ?? QQ.uniqueId);
        if (XQ) return XQ;
        const wQ = this._exportTextureSampler(QQ),
          qQ = await this._exportTextureImageAsync(QQ);
        return XQ = this._exportTextureInfo(qQ, wQ, QQ.coordinatesIndex), this._textureMap.set(WQ ?? QQ.uniqueId, XQ), this._exporter._extensionsPostExportTextures("exporter", XQ, QQ), XQ
      }
      async _exportTextureImageAsync(QQ) {
        const WQ = QQ.mimeType ?? "none",
          XQ = this._internalTextureToImage,
          wQ = QQ.getInternalTexture().uniqueId;
        XQ[wQ] = XQ[wQ] || {};
        let TQ = XQ[wQ][WQ];
        return void 0 === TQ && (TQ = (async () => {
          const XQ = await VX(QQ);
          if (XQ && vX(XQ.mimeType) && ("none" === WQ || XQ.mimeType === WQ)) return await this._exportImageAsync(QQ.name, new Blob([XQ.data], {
            type: XQ.mimeType
          }));
          let wQ = "image/png";
          "none" !== WQ && (vX(WQ) ? wQ = WQ : (wQ = "image/png", qQ.Tools.Warn(`Unsupported media type: ${WQ}. Exporting texture as PNG.`)));
          const TQ = QQ.getSize(),
            zQ = await (0, GQ.d)(QQ),
            sQ = await (0, dQ.EncodeImageAsync)(zQ, TQ.width, TQ.height, wQ);
          return await this._exportImageAsync(QQ.name, sQ)
        })(), XQ[wQ][WQ] = TQ), await TQ
      }
      async _exportImageAsync(QQ, WQ) {
        const XQ = this._exporter._images;
        let wQ;
        if (this._exporter._shouldUseGlb) {
          wQ = {
            name: QQ,
            mimeType: WQ.type,
            bufferView: void 0
          };
          const XQ = await WQ.arrayBuffer(),
            qQ = this._exporter._bufferManager.createBufferView(new Uint8Array(XQ));
          this._exporter._bufferManager.setBufferView(wQ, qQ)
        } else {
          const TQ = QQ.replace(/\.\/|\/|\.\\|\\/g, "_"),
            zQ = function(QQ) {
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
            }(WQ.type);
          let sQ = TQ + zQ;
          XQ.some((QQ => QQ.uri === sQ)) && (sQ = `${TQ}_${qQ.Tools.RandomId()}${zQ}`), wQ = {
            name: QQ,
            uri: sQ
          }, this._exporter._imageData[sQ] = WQ
        }
        return XQ.push(wQ), XQ.length - 1
      }
      _exportTextureInfo(QQ, WQ, XQ) {
        const wQ = this._exporter._textures;
        let qQ = wQ.findIndex((XQ => XQ.sampler == WQ && XQ.source === QQ)); - 1 === qQ && (qQ = wQ.length, wQ.push({
          source: QQ,
          sampler: WQ
        }));
        const TQ = {
          index: qQ
        };
        return XQ && (TQ.texCoord = XQ), TQ
      }
      _exportTextureSampler(QQ) {
        const WQ = this._getTextureSampler(QQ),
          XQ = this._exporter._samplers,
          wQ = XQ.findIndex((QQ => QQ.minFilter === WQ.minFilter && QQ.magFilter === WQ.magFilter && QQ.wrapS === WQ.wrapS && QQ.wrapT === WQ.wrapT));
        return -1 !== wQ ? wQ : (XQ.push(WQ), XQ.length - 1)
      }
    }
    var cX = XQ(40331),
      AX = XQ(40484);
    (0, AX.b)();
    var RX = XQ(37374);
    const EX = wQ.Matrix.Compose(new wQ.vj(-1, 1, 1), wQ.Quaternion.Identity(), wQ.vj.Zero());

    function CX(QQ, WQ) {
      if (!(QQ instanceof JQ.b)) return !1;
      if (WQ) {
        if (!QQ.getWorldMatrix().equalsWithEpsilon(wQ.Matrix.IdentityReadOnly, RX.b)) return !1
      } else {
        if (!QQ.getWorldMatrix().multiplyToRef(EX, wQ.TmpVectors.Matrix[0]).equalsWithEpsilon(wQ.Matrix.IdentityReadOnly, RX.b)) return !1
      }
      return !(QQ instanceof rQ.c && QQ.geometry)
    }
    const uX = wQ.vj.ZeroReadOnly,
      LX = wQ.Quaternion.Identity(),
      kX = wQ.vj.OneReadOnly,
      fX = new wQ.vj(-1, 1, 1);

    function SX(QQ, WQ) {
      const {
        byteOffset: XQ,
        byteStride: wQ,
        type: qQ,
        normalized: TQ
      } = QQ, zQ = QQ.getSize(), sQ = WQ.reduce(((QQ, WQ) => WQ.getTotalVertices() > QQ ? WQ.getTotalVertices() : QQ), -Number.MAX_VALUE);
      return {
        byteOffset: XQ,
        byteStride: wQ,
        componentCount: zQ,
        type: qQ,
        count: sQ * zQ,
        normalized: TQ,
        totalVertices: sQ,
        kind: QQ.getKind()
      }
    }

    function tX(QQ) {
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

    function oX(QQ) {
      switch (QQ) {
        case gQ.f.PositionKind:
        case gQ.f.NormalKind:
        case gQ.f.TangentKind:
        case gQ.f.ColorKind:
        case gQ.f.MatricesIndicesKind:
        case gQ.f.MatricesIndicesExtraKind:
        case gQ.f.MatricesWeightsKind:
        case gQ.f.MatricesWeightsExtraKind:
        case gQ.f.UVKind:
        case gQ.f.UV2Kind:
        case gQ.f.UV3Kind:
        case gQ.f.UV4Kind:
        case gQ.f.UV5Kind:
        case gQ.f.UV6Kind:
          return !0
      }
      return !1
    }

    function eX(QQ) {
      const WQ = Math.sqrt(QQ.x * QQ.x + QQ.y * QQ.y + QQ.z * QQ.z);
      WQ > 0 && (QQ.x /= WQ, QQ.y /= WQ, QQ.z /= WQ)
    }

    function nX(QQ) {
      return QQ.x *= -1, QQ
    }

    function xX(QQ) {
      if (QQ.x * QQ.x + QQ.y * QQ.y > .5) {
        const WQ = Math.abs(QQ.x),
          XQ = Math.abs(QQ.y);
        if (WQ > XQ) {
          const XQ = Math.sign(QQ.x);
          QQ.x = WQ, QQ.y *= -XQ, QQ.z *= -XQ, QQ.w *= XQ
        } else {
          const WQ = Math.sign(QQ.y);
          QQ.x *= -WQ, QQ.y = XQ, QQ.z *= WQ, QQ.w *= -WQ
        }
      } else {
        const WQ = Math.abs(QQ.z),
          XQ = Math.abs(QQ.w);
        if (WQ > XQ) {
          const XQ = Math.sign(QQ.z);
          QQ.x *= -XQ, QQ.y *= XQ, QQ.z = WQ, QQ.w *= -XQ
        } else {
          const WQ = Math.sign(QQ.w);
          QQ.x *= WQ, QQ.y *= -WQ, QQ.z *= -WQ, QQ.w = XQ
        }
      }
      return QQ
    }

    function YX(QQ) {
      QQ.XQQ(-QQ.z, QQ.w, QQ.x, -QQ.y)
    }

    function NX(QQ, WQ) {
      const XQ = wQ.vj.FromArrayToRef(WQ.translation || [0, 0, 0], 0, wQ.TmpVectors.vj[0]),
        qQ = wQ.Quaternion.FromArrayToRef(WQ.rotation || [0, 0, 0, 1], 0, wQ.TmpVectors.Quaternion[0]),
        TQ = wQ.Matrix.ComposeToRef(kX, qQ, XQ, wQ.TmpVectors.Matrix[0]),
        zQ = wQ.vj.FromArrayToRef(QQ.translation || [0, 0, 0], 0, wQ.TmpVectors.vj[2]),
        sQ = wQ.Quaternion.FromArrayToRef(QQ.rotation || [0, 0, 0, 1], 0, wQ.TmpVectors.Quaternion[1]),
        FQ = wQ.Matrix.ComposeToRef(kX, sQ, zQ, wQ.TmpVectors.Matrix[1]);
      TQ.multiplyToRef(FQ, FQ), FQ.decompose(void 0, qQ, XQ), XQ.equalsWithEpsilon(uX, RX.b) ? delete WQ.translation : WQ.translation = XQ.awQ(), qQ.equalsWithEpsilon(LX, RX.b) ? delete WQ.rotation : WQ.rotation = qQ.awQ(), WQ.scale && delete WQ.scale
    }

    function ZX(QQ, WQ) {
      if (!(WQ instanceof JQ.b)) return !1;
      if (!(1 === WQ.getChildren().length && 0 === QQ.getChildren().length && QQ.parent === WQ)) return !1;
      const XQ = QQ.sE(),
        wQ = QQ instanceof AX.c && !XQ.useRightHandedSystem ? fX : kX;
      return !!WQ.oB.equalsWithEpsilon(wQ, RX.b) || (lQ.b.Warn(`Cannot collapse node ${QQ.name} into parent node ${WQ.name} with modified scaling.`), !1)
    }

    function OX(QQ) {
      if (QQ instanceof Array) {
        const WQ = new Float32Array(QQ);
        return new Uint8Array(WQ.buffer, WQ.byteOffset, WQ.byteLength)
      }
      return ArrayBuffer.isView(QQ) ? new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength) : new Uint8Array(QQ)
    }

    function KX(QQ, WQ) {
      for (const [XQ, wQ] of Object.entries(QQ)) {
        const qQ = WQ[XQ];
        (Array.isArray(wQ) && Array.isArray(qQ) && mX(wQ, qQ) || wQ === qQ) && delete QQ[XQ]
      }
      return QQ
    }

    function mX(QQ, WQ) {
      return QQ.length === WQ.length && QQ.every(((QQ, XQ) => QQ === WQ[XQ]))
    }
    const MX = new Map([
      [Int8Array, (QQ, WQ, XQ) => QQ.setInt8(WQ, XQ)],
      [Uint8Array, (QQ, WQ, XQ) => QQ.setUint8(WQ, XQ)],
      [Uint8ClampedArray, (QQ, WQ, XQ) => QQ.setUint8(WQ, XQ)],
      [Int16Array, (QQ, WQ, XQ) => QQ.setInt16(WQ, XQ, !0)],
      [Uint16Array, (QQ, WQ, XQ) => QQ.setUint16(WQ, XQ, !0)],
      [Int32Array, (QQ, WQ, XQ) => QQ.setInt32(WQ, XQ, !0)],
      [Uint32Array, (QQ, WQ, XQ) => QQ.setUint32(WQ, XQ, !0)],
      [Float32Array, (QQ, WQ, XQ) => QQ.setFloat32(WQ, XQ, !0)],
      [Float64Array, (QQ, WQ, XQ) => QQ.setFloat64(WQ, XQ, !0)]
    ]);
    class Qw {
      writeTypedArray(QQ) {
        this._checkGrowBuffer(QQ.byteLength);
        const WQ = MX.get(QQ.constructor);
        for (let XQ = 0; XQ < QQ.length; XQ++) WQ(this._dataView, this._byteOffset, QQ[XQ]), this._byteOffset += QQ.BYTES_PER_ELEMENT
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
        const WQ = this.byteOffset + QQ;
        if (WQ > this._data.byteLength) {
          const QQ = new Uint8Array(2 * WQ);
          QQ.set(this._data), this._data = QQ, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function Ww(QQ) {
      return QQ % 4 === 0 ? 4 : QQ % 2 === 0 ? 2 : 1
    }
    class Xw {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(QQ) {
        let WQ = 0;
        this._bufferViewToData.forEach((QQ => {
          WQ += QQ.byteLength
        }));
        const XQ = new Qw(WQ),
          wQ = Array.from(this._bufferViewToData.keys()).sort(((QQ, WQ) => Ww(WQ.byteLength) - Ww(QQ.byteLength)));
        for (const qQ of wQ) {
          qQ.byteOffset = XQ.byteOffset, QQ.push(qQ);
          const WQ = QQ.length - 1,
            wQ = this.getPropertiesWithBufferView(qQ);
          for (const QQ of wQ) QQ.bufferView = WQ;
          XQ.writeTypedArray(this._bufferViewToData.get(qQ)), this._bufferViewToData.delete(qQ)
        }
        return XQ.getOutputData()
      }
      createBufferView(QQ, WQ) {
        const XQ = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: QQ.byteLength,
          byteStride: WQ
        };
        return this._bufferViewToData.set(XQ, QQ), XQ
      }
      createAccessor(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        this._verifyBufferView(QQ);
        const sQ = {
          bufferView: void 0,
          componentType: XQ,
          count: wQ,
          type: WQ,
          min: TQ?.min,
          max: TQ?.max,
          normalized: zQ,
          byteOffset: qQ
        };
        return this.setBufferView(sQ, QQ), this._accessorToBufferView.set(sQ, QQ), sQ
      }
      setBufferView(QQ, WQ) {
        this._verifyBufferView(WQ);
        this.getPropertiesWithBufferView(WQ).push(QQ)
      }
      removeBufferView(QQ) {
        const WQ = this.getPropertiesWithBufferView(QQ);
        for (const XQ of WQ) void 0 !== XQ.bufferView && delete XQ.bufferView;
        this._bufferViewToData.delete(QQ), this._bufferViewToProperties.delete(QQ), this._accessorToBufferView.forEach(((WQ, XQ) => {
          WQ === QQ && (void 0 !== XQ.byteOffset && delete XQ.byteOffset, this._accessorToBufferView.delete(XQ))
        }))
      }
      getBufferView(QQ) {
        const WQ = this._accessorToBufferView.get(QQ);
        return this._verifyBufferView(WQ), WQ
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
    var ww = XQ(40487);
    (0, ww.h)();
    var qw = XQ(40697);
    (0, qw.g)();
    var Tw = XQ(40530),
      zw = XQ(41309);
    (0, zw.d)();
    let sw = (() => {
      var QQ;
      let WQ, XQ, wQ = [],
        qQ = [],
        TQ = [],
        zQ = [];
      return QQ = class {
        get influence() {
          return this._influence
        }
        set influence(QQ) {
          if (this._influence === QQ) return;
          const WQ = this._influence;
          this._influence = QQ, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === WQ || 0 === QQ)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(QQ) {
          this._animationPropertiesOverride = QQ
        }
        constructor(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            sQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = QQ, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new QX.b, this._onDataLayoutChanged = new QX.b, this.id = (0, HQ.n)(this, wQ, void 0), this.morphTargetManager = ((0, HQ.n)(this, qQ), (0, HQ.n)(this, TQ, null)), this._animationPropertiesOverride = ((0, HQ.n)(this, zQ), null), this.id = QQ, this.morphTargetManager = sQ, this._scene = XQ || BQ.d.LastCreatedScene, this.influence = WQ, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        FsQ(QQ) {
          const WQ = this.hasPositions;
          this._positions = QQ, WQ !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(QQ) {
          const WQ = this.hasNormals;
          this._normals = QQ, WQ !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(QQ) {
          const WQ = this.hasTangents;
          this._tangents = QQ, WQ !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(QQ) {
          const WQ = this.hasUVs;
          this._uvs = QQ, WQ !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(QQ) {
          const WQ = this.hasUV2s;
          this._uv2s = QQ, WQ !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(QQ) {
          const WQ = this.hasColors;
          this._colors = QQ, WQ !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const WQ = vW.b.Clone((() => new QQ(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return WQ._positions = this._positions, WQ._normals = this._normals, WQ._tangents = this._tangents, WQ._uvs = this._uvs, WQ._uv2s = this._uv2s, WQ._colors = this._colors, WQ
        }
        serialize() {
          const QQ = {};
          return QQ.name = this.name, QQ.influence = this.influence, null != this.id && (QQ.id = this.id), QQ.uniqueId = this.uniqueId, QQ.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (QQ.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (QQ.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (QQ.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (QQ.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (QQ.colors = Array.prototype.slice.call(this.getColors())), vW.b.AppendSerializedAnimations(this, QQ), QQ
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(WQ, XQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const qQ = new QQ(WQ.name, WQ.influence, XQ, wQ);
          if (qQ.FsQ(WQ.positions), null != WQ.id && (qQ.id = WQ.id), WQ.normals && qQ.setNormals(WQ.normals), WQ.tangents && qQ.setTangents(WQ.tangents), WQ.uvs && qQ.setUVs(WQ.uvs), WQ.uv2s && qQ.setUV2s(WQ.uv2s), WQ.colors && qQ.setColors(WQ.colors), WQ.animations) {
            for (let QQ = 0; QQ < WQ.animations.length; QQ++) {
              const XQ = WQ.animations[QQ],
                wQ = (0, tW.b)("BABYLON.Animation");
              wQ && qQ.animations.push(wQ.Parse(XQ))
            }
            WQ.autoAnimate && XQ && XQ.beginAnimation(qQ, WQ.autoAnimateFrom, WQ.autoAnimateTo, WQ.autoAnimateLoop, WQ.autoAnimateSpeed || 1)
          }
          return qQ
        }
        static FromMesh(WQ, XQ, wQ) {
          XQ || (XQ = WQ.name);
          const qQ = new QQ(XQ, wQ, WQ.sE(), WQ.morphTargetManager);
          return qQ.FsQ(WQ.getVerticesData(fQ.l.PositionKind)), WQ.isVerticesDataPresent(fQ.l.NormalKind) && qQ.setNormals(WQ.getVerticesData(fQ.l.NormalKind)), WQ.isVerticesDataPresent(fQ.l.TangentKind) && qQ.setTangents(WQ.getVerticesData(fQ.l.TangentKind)), WQ.isVerticesDataPresent(fQ.l.UVKind) && qQ.setUVs(WQ.getVerticesData(fQ.l.UVKind)), WQ.isVerticesDataPresent(fQ.l.UV2Kind) && qQ.setUV2s(WQ.getVerticesData(fQ.l.UV2Kind)), WQ.isVerticesDataPresent(fQ.l.ColorKind) && qQ.setColors(WQ.getVerticesData(fQ.l.ColorKind)), qQ
        }
      }, (() => {
        const sQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [(0, aQ.I)()], XQ = [(0, aQ.I)()], (0, HQ.k)(null, null, WQ, {
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
          metadata: sQ
        }, wQ, qQ), (0, HQ.k)(null, null, XQ, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: QQ => "morphTargetManager" in QQ,
            get: QQ => QQ.morphTargetManager,
            set: (QQ, WQ) => {
              QQ.morphTargetManager = WQ
            }
          },
          metadata: sQ
        }, TQ, zQ), sQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sQ
        })
      })(), QQ
    })();
    var Fw, Pw = XQ(41379),
      gw = XQ(40525);
    ! function(QQ) {
      QQ[QQ.INTANGENT = 0] = "INTANGENT", QQ[QQ.OUTTANGENT = 1] = "OUTTANGENT"
    }(Fw || (Fw = {}));
    class Jw {
      static _IsTransformable(QQ) {
        return QQ && (QQ instanceof JQ.b || QQ instanceof ww.d || QQ instanceof gw.d)
      }
      static _CreateNodeAnimation(QQ, WQ, XQ, wQ, TQ) {
        if (this._IsTransformable(QQ)) {
          const zQ = [],
            sQ = [],
            FQ = WQ.getKeys(),
            PQ = Jw._CalculateMinMaxKeyFrames(FQ),
            gQ = Jw._DeduceInterpolation(FQ, XQ, wQ),
            JQ = gQ.interpolationType,
            rQ = gQ.shouldBakeAnimation;
          if (rQ ? Jw._CreateBakedAnimation(QQ, WQ, XQ, PQ.min, PQ.max, WQ.framePerSecond, TQ, zQ, sQ, PQ, wQ) : "LINEAR" === JQ || "STEP" === JQ ? Jw._CreateLinearOrStepAnimation(QQ, WQ, XQ, zQ, sQ, wQ) : "CUBICSPLINE" === JQ ? Jw._CreateCubicSplineAnimation(QQ, WQ, XQ, zQ, sQ, wQ) : Jw._CreateBakedAnimation(QQ, WQ, XQ, PQ.min, PQ.max, WQ.framePerSecond, TQ, zQ, sQ, PQ, wQ), zQ.length && sQ.length) {
            return {
              inputs: zQ,
              outputs: sQ,
              samplerInterpolation: JQ,
              inputsMin: rQ ? PQ.min : qQ.Tools.FloatRound(PQ.min / WQ.framePerSecond),
              inputsMax: rQ ? PQ.max : qQ.Tools.FloatRound(PQ.max / WQ.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(QQ) {
        let WQ = null,
          XQ = "VEC3",
          wQ = !1;
        const TQ = QQ.targetProperty.split(".");
        switch (TQ[0]) {
          case "oB":
            WQ = "scale";
            break;
          case "position":
            WQ = "translation";
            break;
          case "rotation":
            XQ = "VEC4", WQ = "rotation";
            break;
          case "rotationQuaternion":
            XQ = "VEC4", wQ = !0, WQ = "rotation";
            break;
          case "influence":
            XQ = "SCALAR", WQ = "weights";
            break;
          default:
            qQ.Tools.Error(`Unsupported animatable property ${TQ[0]}`)
        }
        return WQ ? {
          animationChannelTargetPath: WQ,
          dataAccessorType: XQ,
          useQuaternion: wQ
        } : (qQ.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
        let JQ;
        if (Jw._IsTransformable(QQ) && QQ.animations)
          for (const rQ of QQ.animations) {
            if (gQ && !gQ(rQ)) continue;
            const qQ = Jw._DeduceAnimationInfo(rQ);
            qQ && (JQ = {
              name: rQ.name,
              samplers: [],
              channels: []
            }, Jw._AddAnimation(`${rQ.name}`, rQ.hasRunningRuntimeAnimations ? WQ : JQ, QQ, rQ, qQ.dataAccessorType, qQ.animationChannelTargetPath, wQ, TQ, zQ, sQ, qQ.useQuaternion, FQ, PQ), JQ.samplers.length && JQ.channels.length && XQ.push(JQ))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
        let JQ;
        if (QQ instanceof Pw.b) {
          const qQ = QQ.morphTargetManager;
          if (qQ)
            for (let rQ = 0; rQ < qQ.numTargets; ++rQ) {
              const IQ = qQ.getTarget(rQ);
              for (const jQ of IQ.animations) {
                if (gQ && !gQ(jQ)) continue;
                const IQ = new zw.b(`${jQ.name}`, "influence", jQ.framePerSecond, jQ.dataType, jQ.nw, jQ.enableBlending),
                  BQ = [],
                  yQ = jQ.getKeys();
                for (let QQ = 0; QQ < yQ.length; ++QQ) {
                  const WQ = yQ[QQ];
                  for (let QQ = 0; QQ < qQ.numTargets; ++QQ) QQ == rQ ? BQ.push(WQ) : BQ.push({
                    frame: WQ.frame,
                    value: 0
                  })
                }
                IQ.setKeys(BQ, !0);
                const VQ = Jw._DeduceAnimationInfo(IQ);
                VQ && (JQ = {
                  name: IQ.name,
                  samplers: [],
                  channels: []
                }, Jw._AddAnimation(jQ.name, jQ.hasRunningRuntimeAnimations ? WQ : JQ, QQ, IQ, VQ.dataAccessorType, VQ.animationChannelTargetPath, wQ, TQ, zQ, sQ, VQ.useQuaternion, FQ, PQ, qQ.numTargets), JQ.samplers.length && JQ.channels.length && XQ.push(JQ))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
        let gQ;
        if (QQ.animationGroups) {
          const JQ = QQ.animationGroups;
          for (const rQ of JQ) {
            const JQ = new Map,
              IQ = new Map,
              jQ = new Set,
              BQ = rQ.to - rQ.from;
            gQ = {
              name: rQ.name,
              channels: [],
              samplers: []
            };
            for (let WQ = 0; WQ < rQ.targetedAnimations.length; ++WQ) {
              const PQ = rQ.targetedAnimations[WQ],
                BQ = PQ.target,
                yQ = PQ.animation;
              if (FQ && !FQ(yQ)) continue;
              const VQ = sQ.has(BQ);
              if (this._IsTransformable(BQ) || 1 === BQ.length && this._IsTransformable(BQ[0])) {
                const QQ = Jw._DeduceAnimationInfo(PQ.animation);
                if (QQ) {
                  const WQ = this._IsTransformable(BQ) ? BQ : this._IsTransformable(BQ[0]) ? BQ[0] : null;
                  WQ && Jw._AddAnimation(`${yQ.name}`, gQ, WQ, yQ, QQ.dataAccessorType, QQ.animationChannelTargetPath, XQ, wQ, qQ, TQ, QQ.useQuaternion, zQ, VQ)
                }
              } else if (BQ instanceof sw || 1 === BQ.length && BQ[0] instanceof sw) {
                if (Jw._DeduceAnimationInfo(PQ.animation)) {
                  const WQ = BQ instanceof sw ? BQ : BQ[0];
                  if (WQ) {
                    const XQ = QQ.morphTargetManagers.find((QQ => {
                      for (let XQ = 0; XQ < QQ.numTargets; ++XQ)
                        if (QQ.getTarget(XQ) === WQ) return !0;
                      return !1
                    }));
                    if (XQ) {
                      const wQ = QQ.meshes.find((QQ => QQ.morphTargetManager === XQ));
                      wQ && (JQ.has(wQ) || JQ.set(wQ, new Map), JQ.get(wQ)?.set(WQ, yQ), jQ.add(wQ), IQ.set(wQ, yQ))
                    }
                  }
                }
              }
            }
            jQ.forEach((QQ => {
              const WQ = QQ.morphTargetManager;
              let sQ = null;
              const FQ = [],
                PQ = IQ.get(QQ).getKeys(),
                jQ = PQ.length;
              for (let XQ = 0; XQ < jQ; ++XQ)
                for (let wQ = 0; wQ < WQ.numTargets; ++wQ) {
                  const qQ = WQ.getTarget(wQ),
                    TQ = JQ.get(QQ);
                  if (TQ) {
                    const WQ = TQ.get(qQ);
                    WQ ? (sQ || (sQ = new zw.b(`${rQ.name}_${QQ.name}_MorphWeightAnimation`, "influence", WQ.framePerSecond, zw.b.ANIMATIONTYPE_FLOAT, WQ.nw, WQ.enableBlending)), FQ.push(WQ.getKeys()[XQ])) : FQ.push({
                      frame: rQ.from + BQ / jQ * XQ,
                      value: qQ.influence,
                      inTangent: PQ[0].inTangent ? 0 : void 0,
                      outTangent: PQ[0].outTangent ? 0 : void 0
                    })
                  }
                }
              sQ.setKeys(FQ, !0);
              const yQ = Jw._DeduceAnimationInfo(sQ);
              yQ && Jw._AddAnimation(`${rQ.name}_${QQ.name}_MorphWeightAnimation`, gQ, QQ, sQ, yQ.dataAccessorType, yQ.animationChannelTargetPath, XQ, wQ, qQ, TQ, yQ.useQuaternion, zQ, !1, WQ?.numTargets)
            })), gQ.channels.length && gQ.samplers.length && (PQ?.set(rQ, WQ.length), WQ.push(gQ))
          }
        }
      }
      static _AddAnimation(QQ, WQ, XQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ) {
        const BQ = Jw._CreateNodeAnimation(XQ, qQ, zQ, JQ, rQ);
        let yQ, VQ, DQ, pQ, GQ, UQ;
        if (BQ) {
          if (jQ) {
            let QQ, WQ = 0;
            const XQ = [];
            for (; BQ.inputs.length > 0;) QQ = BQ.inputs.shift(), WQ % jQ == 0 && XQ.push(QQ), WQ++;
            BQ.inputs = XQ
          }
          const QQ = sQ.get(XQ),
            qQ = new Float32Array(BQ.inputs);
          yQ = FQ.createBufferView(qQ), VQ = FQ.createAccessor(yQ, "SCALAR", 5126, BQ.inputs.length, void 0, {
            min: [BQ.inputsMin],
            max: [BQ.inputsMax]
          }), gQ.push(VQ), DQ = gQ.length - 1;
          const PQ = new wQ.Quaternion,
            JQ = new wQ.vj,
            rQ = new wQ.vj,
            bQ = XQ instanceof ww.d,
            vQ = tX(TQ),
            dQ = new Float32Array(BQ.outputs.length * vQ);
          BQ.outputs.forEach((function(QQ, WQ) {
            let XQ = QQ;
            switch (zQ) {
              case "translation":
                IQ && (wQ.vj.FromArrayToRef(QQ, 0, rQ), nX(rQ), rQ.toArray(XQ));
                break;
              case "rotation":
                4 === QQ.length ? wQ.Quaternion.FromArrayToRef(QQ, 0, PQ) : (XQ = new Array(4), wQ.vj.FromArrayToRef(QQ, 0, JQ), wQ.Quaternion.FromEulerVectorToRef(JQ, PQ)), IQ && (xX(PQ), bQ && YX(PQ)), PQ.toArray(XQ)
            }
            dQ.set(XQ, WQ * vQ)
          })), yQ = FQ.createBufferView(dQ), VQ = FQ.createAccessor(yQ, TQ, 5126, BQ.outputs.length), gQ.push(VQ), pQ = gQ.length - 1, GQ = {
            interpolation: BQ.samplerInterpolation,
            input: DQ,
            output: pQ
          }, WQ.samplers.push(GQ), UQ = {
            sampler: WQ.samplers.length - 1,
            target: {
              node: QQ,
              path: zQ
            }
          }, WQ.channels.push(UQ)
        }
      }
      static _CreateBakedAnimation(QQ, WQ, XQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ) {
        let IQ;
        const jQ = wQ.Quaternion.Identity();
        let BQ, yQ, VQ, DQ, pQ, GQ = null,
          UQ = null;
        JQ.min = qQ.Tools.FloatRound(TQ / sQ);
        const bQ = WQ.getKeys();
        for (let wQ = 0, vQ = bQ.length; wQ < vQ; ++wQ) {
          if (yQ = bQ[wQ], wQ + 1 < vQ)
            if (VQ = bQ[wQ + 1], yQ.value.equals && yQ.value.equals(VQ.value) || yQ.value === VQ.value) {
              if (0 !== wQ) continue;
              pQ = yQ.frame
            } else pQ = VQ.frame;
          else {
            if (DQ = bQ[wQ - 1], yQ.value.equals && yQ.value.equals(DQ.value) || yQ.value === DQ.value) continue;
            pQ = zQ
          }
          if (pQ)
            for (let wQ = yQ.frame; wQ <= pQ; wQ += FQ) {
              if (BQ = qQ.Tools.FloatRound(wQ / sQ), BQ === GQ) continue;
              GQ = BQ, UQ = BQ;
              const TQ = {
                key: 0,
                repeatCount: 0,
                nw: WQ.nw
              };
              IQ = WQ._interpolate(wQ, TQ), Jw._SetInterpolatedValue(QQ, IQ, BQ, WQ, XQ, jQ, PQ, gQ, rQ)
            }
        }
        UQ && (JQ.max = UQ)
      }
      static _ConvertFactorToVector3OrQuaternion(QQ, WQ, XQ, TQ, zQ) {
        const sQ = Jw._GetBasePositionRotationOrScale(WQ, TQ, zQ),
          FQ = XQ.targetProperty.split("."),
          PQ = FQ ? FQ[1] : "",
          gQ = zQ ? wQ.Quaternion.FromArray(sQ).normalize() : wQ.vj.FromArray(sQ);
        switch (PQ) {
          case "x":
          case "y":
          case "z":
            gQ[PQ] = QQ;
            break;
          case "w":
            gQ.w = QQ;
            break;
          default:
            qQ.Tools.Error(`glTFAnimation: Unsupported component name "${PQ}"!`)
        }
        return gQ
      }
      static _SetInterpolatedValue(QQ, WQ, XQ, qQ, TQ, zQ, sQ, FQ, PQ) {
        let gQ;
        sQ.push(XQ), "weights" !== TQ ? (qQ.dataType === zw.b.ANIMATIONTYPE_FLOAT && (WQ = this._ConvertFactorToVector3OrQuaternion(WQ, QQ, qQ, TQ, PQ)), "rotation" === TQ ? (PQ ? zQ = WQ : (gQ = WQ, wQ.Quaternion.RotationYawPitchRollToRef(gQ.y, gQ.x, gQ.z, zQ)), FQ.push(zQ.awQ())) : (gQ = WQ, FQ.push(gQ.awQ()))) : FQ.push([WQ])
      }
      static _CreateLinearOrStepAnimation(QQ, WQ, XQ, wQ, qQ, TQ) {
        for (const zQ of WQ.getKeys()) wQ.push(zQ.frame / WQ.framePerSecond), Jw._AddKeyframeValue(zQ, WQ, qQ, XQ, QQ, TQ)
      }
      static _CreateCubicSplineAnimation(QQ, WQ, XQ, wQ, qQ, TQ) {
        WQ.getKeys().forEach((function(zQ) {
          wQ.push(zQ.frame / WQ.framePerSecond), Jw._AddSplineTangent(Fw.INTANGENT, qQ, XQ, "CUBICSPLINE", zQ, TQ), Jw._AddKeyframeValue(zQ, WQ, qQ, XQ, QQ, TQ), Jw._AddSplineTangent(Fw.OUTTANGENT, qQ, XQ, "CUBICSPLINE", zQ, TQ)
        }))
      }
      static _GetBasePositionRotationOrScale(QQ, WQ, XQ) {
        let qQ;
        if ("rotation" === WQ)
          if (XQ) {
            qQ = (QQ.rotationQuaternion ?? wQ.Quaternion.Identity()).awQ()
          } else {
            qQ = (QQ.rotation ?? wQ.vj.Zero()).awQ()
          }
        else if ("translation" === WQ) {
          qQ = (QQ.position ?? wQ.vj.Zero()).awQ()
        } else {
          qQ = (QQ.oB ?? wQ.vj.One()).awQ()
        }
        return qQ
      }
      static _AddKeyframeValue(QQ, WQ, XQ, TQ, zQ, sQ) {
        let FQ;
        const PQ = WQ.dataType;
        if (PQ === zw.b.ANIMATIONTYPE_VECTOR3) {
          let WQ = QQ.value.awQ();
          if ("rotation" === TQ) {
            const QQ = wQ.vj.FromArray(WQ);
            WQ = wQ.Quaternion.RotationYawPitchRoll(QQ.y, QQ.x, QQ.z).awQ()
          }
          XQ.push(WQ)
        } else if (PQ === zw.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === TQ) XQ.push([QQ.value]);
          else if (FQ = this._ConvertFactorToVector3OrQuaternion(QQ.value, zQ, WQ, TQ, sQ), FQ) {
            if ("rotation" === TQ) {
              const QQ = sQ ? FQ : wQ.Quaternion.RotationYawPitchRoll(FQ.y, FQ.x, FQ.z).normalize();
              XQ.push(QQ.awQ())
            }
            XQ.push(FQ.awQ())
          }
        } else PQ === zw.b.ANIMATIONTYPE_QUATERNION ? XQ.push(QQ.value.normalize().awQ()) : qQ.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(QQ, WQ, XQ) {
        let wQ, qQ, TQ = !1;
        if ("rotation" === WQ && !XQ) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let zQ = 0, sQ = QQ.length; zQ < sQ; ++zQ)
          if (qQ = QQ[zQ], qQ.inTangent || qQ.outTangent)
            if (wQ) {
              if ("CUBICSPLINE" !== wQ) {
                wQ = "LINEAR", TQ = !0;
                break
              }
            } else wQ = "CUBICSPLINE";
        else if (wQ) {
          if ("CUBICSPLINE" === wQ || qQ.interpolation && 1 === qQ.interpolation && "STEP" !== wQ) {
            wQ = "LINEAR", TQ = !0;
            break
          }
        } else wQ = qQ.interpolation && 1 === qQ.interpolation ? "STEP" : "LINEAR";
        return wQ || (wQ = "LINEAR"), {
          interpolationType: wQ,
          shouldBakeAnimation: TQ
        }
      }
      static _AddSplineTangent(QQ, WQ, XQ, qQ, TQ, zQ) {
        let sQ;
        const FQ = QQ === Fw.INTANGENT ? TQ.inTangent : TQ.outTangent;
        if ("CUBICSPLINE" === qQ) {
          if ("rotation" === XQ)
            if (FQ)
              if (zQ) sQ = FQ.awQ();
              else {
                const QQ = FQ;
                sQ = wQ.Quaternion.RotationYawPitchRoll(QQ.y, QQ.x, QQ.z).awQ()
              }
          else sQ = [0, 0, 0, 0];
          else sQ = "weights" === XQ ? FQ ? [FQ] : [0] : FQ ? FQ.awQ() : [0, 0, 0];
          WQ.push(sQ)
        }
      }
      static _CalculateMinMaxKeyFrames(QQ) {
        let WQ = 1 / 0,
          XQ = -1 / 0;
        return QQ.forEach((function(QQ) {
          WQ = Math.min(WQ, QQ.frame), XQ = Math.max(XQ, QQ.frame)
        })), {
          min: WQ,
          max: XQ
        }
      }
    }

    function rw(QQ, WQ, XQ, TQ, zQ, sQ) {
      const FQ = {
          attributes: {},
          influence: QQ.influence,
          name: QQ.name
        },
        PQ = WQ.geometry;
      if (!PQ) return qQ.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), FQ;
      const JQ = sQ ? -1 : 1,
        rQ = wQ.vj.Zero();
      let IQ, jQ;
      if (QQ.hasPositions) {
        const TQ = QQ.getPositions(),
          sQ = PQ.getVerticesData(gQ.f.PositionKind);
        if (sQ) {
          const QQ = new Float32Array(sQ.length),
            WQ = [1 / 0, 1 / 0, 1 / 0],
            qQ = [-1 / 0, -1 / 0, -1 / 0];
          jQ = sQ.length / 3, IQ = 0;
          for (let XQ = IQ; XQ < jQ; ++XQ) {
            const zQ = wQ.vj.FromArray(sQ, 3 * XQ);
            wQ.vj.FromArray(TQ, 3 * XQ).subtractToRef(zQ, rQ), rQ.x *= JQ, WQ[0] = Math.min(WQ[0], rQ.x), qQ[0] = Math.max(qQ[0], rQ.x), WQ[1] = Math.min(WQ[1], rQ.y), qQ[1] = Math.max(qQ[1], rQ.y), WQ[2] = Math.min(WQ[2], rQ.z), qQ[2] = Math.max(qQ[2], rQ.z), QQ[3 * XQ] = rQ.x, QQ[3 * XQ + 1] = rQ.y, QQ[3 * XQ + 2] = rQ.z
          }
          const PQ = XQ.createBufferView(QQ, 12),
            gQ = XQ.createAccessor(PQ, "VEC3", 5126, TQ.length / 3, 0, {
              min: WQ,
              max: qQ
            });
          zQ.push(gQ), FQ.attributes.POSITION = zQ.length - 1
        } else qQ.Tools.Warn(`Morph target positions for mesh ${WQ.name} were not exported. Mesh does not have position vertex data`)
      }
      if (QQ.hasNormals) {
        const TQ = QQ.getNormals(),
          sQ = PQ.getVerticesData(gQ.f.NormalKind);
        if (sQ) {
          const QQ = new Float32Array(sQ.length);
          jQ = sQ.length / 3, IQ = 0;
          for (let XQ = IQ; XQ < jQ; ++XQ) {
            const WQ = wQ.vj.FromArray(sQ, 3 * XQ).normalize();
            wQ.vj.FromArray(TQ, 3 * XQ).normalize().subtractToRef(WQ, rQ), QQ[3 * XQ] = rQ.x * JQ, QQ[3 * XQ + 1] = rQ.y, QQ[3 * XQ + 2] = rQ.z
          }
          const WQ = XQ.createBufferView(QQ, 12),
            qQ = XQ.createAccessor(WQ, "VEC3", 5126, TQ.length / 3, 0);
          zQ.push(qQ), FQ.attributes.NORMAL = zQ.length - 1
        } else qQ.Tools.Warn(`Morph target normals for mesh ${WQ.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (QQ.hasTangents) {
        const TQ = QQ.getTangents(),
          sQ = PQ.getVerticesData(gQ.f.TangentKind);
        if (sQ) {
          jQ = sQ.length / 4;
          const QQ = new Float32Array(3 * jQ);
          IQ = 0;
          for (let XQ = IQ; XQ < jQ; ++XQ) {
            const WQ = wQ.vj.FromArray(sQ, 4 * XQ);
            eX(WQ);
            const qQ = wQ.vj.FromArray(TQ, 3 * XQ);
            eX(qQ), qQ.subtractToRef(WQ, rQ), QQ[3 * XQ] = rQ.x * JQ, QQ[3 * XQ + 1] = rQ.y, QQ[3 * XQ + 2] = rQ.z
          }
          const WQ = XQ.createBufferView(QQ, 12),
            qQ = XQ.createAccessor(WQ, "VEC3", 5126, jQ, 0);
          zQ.push(qQ), FQ.attributes.TANGENT = zQ.length - 1
        } else qQ.Tools.Warn(`Morph target tangents for mesh ${WQ.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (QQ.hasColors) {
        const TQ = QQ.getColors(),
          sQ = PQ.getVerticesData(gQ.f.ColorKind),
          JQ = PQ.getVertexBuffer(gQ.f.ColorKind);
        if (sQ && JQ) {
          const QQ = JQ.getSize();
          jQ = sQ.length / QQ;
          const WQ = new Float32Array(jQ * QQ);
          IQ = 0;
          for (let XQ = IQ; XQ < jQ; ++XQ)
            if (3 === QQ) {
              const qQ = wQ.vj.FromArray(sQ, XQ * QQ);
              wQ.vj.FromArray(TQ, XQ * QQ).subtractToRef(qQ, rQ), WQ[3 * XQ] = rQ.x, WQ[3 * XQ + 1] = rQ.y, WQ[3 * XQ + 2] = rQ.z
            } else if (4 === QQ) {
            const qQ = new wQ.Vector4,
              zQ = wQ.Vector4.FromArray(sQ, XQ * QQ);
            wQ.Vector4.FromArray(TQ, XQ * QQ).subtractToRef(zQ, qQ), WQ[4 * XQ] = qQ.x, WQ[4 * XQ + 1] = qQ.y, WQ[4 * XQ + 2] = qQ.z, WQ[4 * XQ + 3] = qQ.w
          } else qQ.Tools.Warn(`Unsupported number of components for color attribute: ${QQ}`);
          const PQ = XQ.createBufferView(WQ, 4 * QQ),
            gQ = XQ.createAccessor(PQ, 3 === QQ ? "VEC3" : "VEC4", 5126, jQ, 0);
          zQ.push(gQ), FQ.attributes.COLOR_0 = zQ.length - 1
        } else qQ.Tools.Warn(`Morph target colors for mesh ${WQ.name} were not exported. Mesh does not have colors vertex data`)
      }
      return FQ
    }
    var Iw = XQ(41827);
    class jw {}
    jw.DEFAULT_COLOR = xQ.b.White(), jw.DEFAULT_WIDTH_ATTENUATED = 1, jw.DEFAULT_WIDTH = .1;
    var Bw = XQ(41305);
    class yw {
      constructor(QQ) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = QQ
      }
      moveTo(QQ, WQ) {
        this._currentPath = new Bw.l(QQ, WQ), this._tempPaths.push(this._currentPath)
      }
      lineTo(QQ, WQ) {
        this._currentPath.addLineTo(QQ, WQ)
      }
      quadraticCurveTo(QQ, WQ, XQ, wQ) {
        this._currentPath.addQuadraticCurveTo(QQ, WQ, XQ, wQ, this._resolution)
      }
      bezierCurveTo(QQ, WQ, XQ, wQ, qQ, TQ) {
        this._currentPath.addBezierCurveTo(QQ, WQ, XQ, wQ, qQ, TQ, this._resolution)
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

    function Vw(QQ, WQ, XQ, wQ, qQ, TQ) {
      const zQ = TQ.glyphs[QQ] || TQ.glyphs["?"];
      if (!zQ) return null;
      const sQ = new yw(qQ);
      if (zQ.o) {
        const QQ = zQ.o.split(" ");
        for (let qQ = 0, TQ = QQ.length; qQ < TQ;) {
          switch (QQ[qQ++]) {
            case "m": {
              const TQ = parseInt(QQ[qQ++]) * WQ + XQ,
                zQ = parseInt(QQ[qQ++]) * WQ + wQ;
              sQ.moveTo(TQ, zQ);
              break
            }
            case "l": {
              const TQ = parseInt(QQ[qQ++]) * WQ + XQ,
                zQ = parseInt(QQ[qQ++]) * WQ + wQ;
              sQ.lineTo(TQ, zQ);
              break
            }
            case "q": {
              const TQ = parseInt(QQ[qQ++]) * WQ + XQ,
                zQ = parseInt(QQ[qQ++]) * WQ + wQ,
                FQ = parseInt(QQ[qQ++]) * WQ + XQ,
                PQ = parseInt(QQ[qQ++]) * WQ + wQ;
              sQ.quadraticCurveTo(FQ, PQ, TQ, zQ);
              break
            }
            case "b": {
              const TQ = parseInt(QQ[qQ++]) * WQ + XQ,
                zQ = parseInt(QQ[qQ++]) * WQ + wQ,
                FQ = parseInt(QQ[qQ++]) * WQ + XQ,
                PQ = parseInt(QQ[qQ++]) * WQ + wQ,
                gQ = parseInt(QQ[qQ++]) * WQ + XQ,
                JQ = parseInt(QQ[qQ++]) * WQ + wQ;
              sQ.bezierCurveTo(FQ, PQ, gQ, JQ, TQ, zQ);
              break
            }
          }
        }
      }
      return sQ.extractHoles(), {
        offsetX: zQ.ha * WQ,
        shapePath: sQ
      }
    }

    function Dw(QQ, WQ, XQ, wQ) {
      const qQ = Array.from(QQ),
        TQ = WQ / wQ.resolution,
        zQ = (wQ.boundingBox.yMax - wQ.boundingBox.yMin + wQ.underlineThickness) * TQ,
        sQ = [];
      let FQ = 0,
        PQ = 0;
      for (let gQ = 0; gQ < qQ.length; gQ++) {
        const QQ = qQ[gQ];
        if ("\n" === QQ) FQ = 0, PQ -= zQ;
        else {
          const WQ = Vw(QQ, TQ, FQ, PQ, XQ, wQ);
          WQ && (FQ += WQ.offsetX, sQ.push(WQ.shapePath))
        }
      }
      return sQ
    }
    class pw {
      static ConvertPoints(QQ, WQ) {
        if (QQ.length && Array.isArray(QQ) && "number" === typeof QQ[0]) return [QQ];
        if (QQ.length && Array.isArray(QQ[0]) && "number" === typeof QQ[0][0]) return QQ;
        if (QQ.length && !Array.isArray(QQ[0]) && QQ[0] instanceof kQ.s) {
          const WQ = [];
          for (let XQ = 0; XQ < QQ.length; XQ++) {
            const wQ = QQ[XQ];
            WQ.push(wQ.x, wQ.y, wQ.z)
          }
          return [WQ]
        }
        if (QQ.length > 0 && Array.isArray(QQ[0]) && QQ[0].length > 0 && QQ[0][0] instanceof kQ.s) {
          const WQ = [],
            XQ = QQ;
          for (const QQ of XQ) WQ.push(QQ.flatMap((QQ => [QQ.x, QQ.y, QQ.z])));
          return WQ
        }
        if (QQ instanceof Float32Array) {
          if (WQ?.floatArrayStride) {
            const XQ = [],
              wQ = 3 * WQ.floatArrayStride;
            for (let WQ = 0; WQ < QQ.length; WQ += wQ) {
              const qQ = new Array(wQ);
              for (let XQ = 0; XQ < wQ; XQ++) qQ[XQ] = QQ[WQ + XQ];
              XQ.push(qQ)
            }
            return XQ
          }
          return [Array.from(QQ)]
        }
        if (QQ.length && QQ[0] instanceof Float32Array) {
          const WQ = [];
          for (const XQ of QQ) WQ.push(Array.from(XQ));
          return WQ
        }
        return []
      }
      static OmitZeroLengthPredicate(QQ, WQ, XQ) {
        const wQ = [];
        return WQ.subtract(QQ).lengthSquared() > 0 && wQ.push([QQ, WQ]), XQ.subtract(WQ).lengthSquared() > 0 && wQ.push([WQ, XQ]), QQ.subtract(XQ).lengthSquared() > 0 && wQ.push([XQ, QQ]), 0 === wQ.length ? null : wQ
      }
      static OmitDuplicatesPredicate(QQ, WQ, XQ, wQ) {
        const qQ = [];
        return pw._SearchInPoints(QQ, WQ, wQ) || qQ.push([QQ, WQ]), pw._SearchInPoints(WQ, XQ, wQ) || qQ.push([WQ, XQ]), pw._SearchInPoints(XQ, QQ, wQ) || qQ.push([XQ, QQ]), 0 === qQ.length ? null : qQ
      }
      static _SearchInPoints(QQ, WQ, XQ) {
        for (const wQ of XQ)
          for (let XQ = 0; XQ < wQ.length; XQ++)
            if (wQ[XQ]?.equals(QQ) && (wQ[XQ + 1]?.equals(WQ) || wQ[XQ - 1]?.equals(WQ))) return !0;
        return !1
      }
      static MeshesToLines(QQ, WQ) {
        const XQ = [];
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          const qQ = QQ[wQ],
            TQ = qQ.getVerticesData(fQ.l.PositionKind),
            zQ = qQ.lwQ();
          if (TQ && zQ)
            for (let QQ = 0, sQ = 0; QQ < zQ.length; QQ++) {
              const FQ = 3 * zQ[sQ++],
                PQ = 3 * zQ[sQ++],
                gQ = 3 * zQ[sQ++],
                JQ = new kQ.s(TQ[FQ], TQ[FQ + 1], TQ[FQ + 2]),
                rQ = new kQ.s(TQ[PQ], TQ[PQ + 1], TQ[PQ + 2]),
                IQ = new kQ.s(TQ[gQ], TQ[gQ + 1], TQ[gQ + 2]);
              if (WQ) {
                const sQ = WQ(JQ, rQ, IQ, XQ, QQ, FQ, qQ, wQ, TQ, zQ);
                if (sQ)
                  for (const QQ of sQ) XQ.push(QQ)
              } else XQ.push([JQ, rQ], [rQ, IQ], [IQ, JQ])
            }
        }
        return XQ
      }
      static ToVector3Array(QQ) {
        if (Array.isArray(QQ[0])) {
          const WQ = [],
            XQ = QQ;
          for (const QQ of XQ) {
            const XQ = [];
            for (let WQ = 0; WQ < QQ.length; WQ += 3) XQ.push(new kQ.s(QQ[WQ], QQ[WQ + 1], QQ[WQ + 2]));
            WQ.push(XQ)
          }
          return WQ
        }
        const WQ = QQ,
          XQ = [];
        for (let wQ = 0; wQ < WQ.length; wQ += 3) XQ.push(new kQ.s(WQ[wQ], WQ[wQ + 1], WQ[wQ + 2]));
        return XQ
      }
      static ToNumberArray(QQ) {
        return QQ.flatMap((QQ => [QQ.x, QQ.y, QQ.z]))
      }
      static GetPointsCountInfo(QQ) {
        const WQ = new Array(QQ.length);
        let XQ = 0;
        for (let wQ = QQ.length; wQ--;) WQ[wQ] = QQ[wQ].length / 3, XQ += WQ[wQ];
        return {
          total: XQ,
          counts: WQ
        }
      }
      static GetLineLength(QQ) {
        if (0 === QQ.length) return 0;
        let WQ;
        WQ = "number" === typeof QQ[0] ? pw.ToVector3Array(QQ) : QQ;
        const XQ = kQ.m.vj[0];
        let wQ = 0;
        for (let qQ = 0; qQ < WQ.length - 1; qQ++) {
          const QQ = WQ[qQ];
          wQ += WQ[qQ + 1].subtractToRef(QQ, XQ).length()
        }
        return wQ
      }
      static GetLineLengthArray(QQ, WQ) {
        const XQ = WQ ? new Float32Array(WQ, 0, QQ.length / 3) : new Float32Array(QQ.length / 3);
        let wQ = 0;
        for (let qQ = 0, TQ = QQ.length / 3 - 1; qQ < TQ; qQ++) {
          let WQ = QQ[3 * qQ + 0],
            TQ = QQ[3 * qQ + 1],
            zQ = QQ[3 * qQ + 2];
          WQ -= QQ[3 * qQ + 3], TQ -= QQ[3 * qQ + 4], zQ -= QQ[3 * qQ + 5];
          wQ += Math.sqrt(WQ * WQ + TQ * TQ + zQ * zQ), XQ[qQ + 1] = wQ
        }
        return XQ
      }
      static SegmentizeSegmentByCount(QQ, WQ, XQ) {
        const wQ = [],
          qQ = WQ.subtract(QQ),
          TQ = kQ.m.vj[0];
        TQ.h_(XQ);
        const zQ = kQ.m.vj[1];
        qQ.divideToRef(TQ, zQ);
        let sQ = QQ.clone();
        wQ.push(sQ);
        for (let FQ = 0; FQ < XQ; FQ++) sQ = sQ.clone(), wQ.push(sQ.addInPlace(zQ));
        return wQ
      }
      static SegmentizeLineBySegmentLength(QQ, WQ) {
        const XQ = QQ[0] instanceof kQ.s ? pw.GetLineSegments(QQ) : "number" === typeof QQ[0] ? pw.GetLineSegments(pw.ToVector3Array(QQ)) : QQ,
          wQ = [];
        for (const qQ of XQ)
          if (qQ.length > WQ) {
            const QQ = pw.SegmentizeSegmentByCount(qQ.point1, qQ.point2, Math.ceil(qQ.length / WQ));
            for (const WQ of QQ) wQ.push(WQ)
          } else wQ.push(qQ.point1), wQ.push(qQ.point2);
        return wQ
      }
      static SegmentizeLineBySegmentCount(QQ, WQ) {
        const XQ = "number" === typeof QQ[0] ? pw.ToVector3Array(QQ) : QQ,
          wQ = pw.GetLineLength(XQ) / WQ;
        return pw.SegmentizeLineBySegmentLength(XQ, wQ)
      }
      static GetLineSegments(QQ) {
        const WQ = [];
        for (let XQ = 0; XQ < QQ.length - 1; XQ++) {
          const wQ = QQ[XQ],
            qQ = QQ[XQ + 1],
            TQ = qQ.subtract(wQ).length();
          WQ.push({
            point1: wQ,
            point2: qQ,
            length: TQ
          })
        }
        return WQ
      }
      static GetMinMaxSegmentLength(QQ) {
        const WQ = pw.GetLineSegments(QQ).sort((QQ => QQ.length));
        return {
          min: WQ[0].length,
          max: WQ[WQ.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qQ = WQ * XQ;
        let TQ = 0,
          zQ = 0;
        const sQ = QQ.length;
        for (let PQ = 0; PQ < sQ; PQ++) {
          if (qQ <= TQ + QQ[PQ].length) {
            zQ = PQ;
            break
          }
          TQ += QQ[PQ].length
        }
        const FQ = (qQ - TQ) / QQ[zQ].length;
        return QQ[zQ].point2.subtractToRef(QQ[zQ].point1, kQ.m.vj[0]), kQ.m.vj[0].scaleToRef(FQ, kQ.m.vj[1]), wQ || kQ.m.vj[1].addInPlace(QQ[zQ].point1), kQ.m.vj[1].clone()
      }
      static GetCircleLinePoints(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / WQ;
        const TQ = [];
        for (let zQ = 0; zQ <= WQ; zQ++) TQ.push(new kQ.s(Math.cos(zQ * qQ) * QQ, Math.sin(zQ * qQ) * wQ, XQ));
        return TQ
      }
      static GetBezierLinePoints(QQ, WQ, XQ, wQ) {
        return Bw.i.CreateQuadraticBezier(QQ, WQ, XQ, wQ).getPoints().flatMap((QQ => [QQ.x, QQ.y, QQ.z]))
      }
      static GetArrowCap(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [QQ.clone(), QQ.add(WQ.multiplyByFloats(XQ, XQ, XQ))],
          widths: [wQ, qQ, TQ, zQ]
        }
      }
      static GetPointsFromText(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const zQ = [],
          sQ = Dw(QQ, WQ, XQ, wQ);
        for (const FQ of sQ) {
          for (const QQ of FQ.paths) {
            const WQ = [],
              XQ = QQ.getPoints();
            for (const QQ of XQ) WQ.push(QQ.x, QQ.y, qQ);
            zQ.push(WQ)
          }
          if (TQ)
            for (const QQ of FQ.holes) {
              const WQ = [],
                XQ = QQ.getPoints();
              for (const QQ of XQ) WQ.push(QQ.x, QQ.y, qQ);
              zQ.push(WQ)
            }
        }
        return zQ
      }
      static Color3toRGBAUint8(QQ) {
        const WQ = new Uint8Array(4 * QQ.length);
        for (let XQ = 0, wQ = 0; XQ < QQ.length; XQ++) WQ[wQ++] = 255 * QQ[XQ].r, WQ[wQ++] = 255 * QQ[XQ].g, WQ[wQ++] = 255 * QQ[XQ].b, WQ[wQ++] = 255;
        return WQ
      }
      static CreateColorsTexture(QQ, WQ, XQ, wQ) {
        const qQ = wQ.Uj().getCaps().maxTextureSize ?? 1,
          TQ = WQ.length > qQ ? qQ : WQ.length,
          zQ = Math.ceil(WQ.length / qQ);
        zQ > 1 && (WQ = [...WQ, ...Array(TQ * zQ - WQ.length).fill(WQ[0])]);
        const sQ = pw.Color3toRGBAUint8(WQ),
          FQ = new bQ.b(sQ, TQ, zQ, gX.d.TEXTUREFORMAT_RGBA, wQ, !1, !0, XQ);
        return FQ.name = QQ, FQ
      }
      static PrepareEmptyColorsTexture(QQ) {
        if (!jw.EmptyColorsTexture) {
          const WQ = new Uint8Array(4);
          jw.EmptyColorsTexture = new bQ.b(WQ, 1, 1, gX.d.TEXTUREFORMAT_RGBA, QQ, !1, !1, bQ.b.NEAREST_NEAREST), jw.EmptyColorsTexture.name = "grlEmptyColorsTexture", jw.EmptyColorsTexture.yE.addOnce((() => {
            jw.EmptyColorsTexture = null
          }))
        }
        return jw.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        jw.EmptyColorsTexture?.dispose(), jw.EmptyColorsTexture = null
      }
      static BooleanToNumber(QQ) {
        return QQ ? 1 : 0
      }
    }
    class Gw extends SQ.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class Uw extends tQ.b {
      isCompatible(QQ) {
        return !0
      }
      constructor(QQ, WQ, XQ) {
        XQ = XQ || {
          color: jw.DEFAULT_COLOR
        };
        const wQ = new Gw;
        wQ.GREASED_LINE_HAS_COLOR = !!XQ.color && !XQ.useColors, wQ.GREASED_LINE_SIZE_ATTENUATION = XQ.sizeAttenuation ?? !1, wQ.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === XQ.colorDistributionType, wQ.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (WQ ?? QQ.sE()).useRightHandedSystem, wQ.GREASED_LINE_CAMERA_FACING = XQ.cameraFacing ?? !0, super(QQ, Uw.GREASED_LINE_MATERIAL_NAME, 200, wQ, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = XQ?.forceGLSL || Uw.ForceGLSL, this._scene = WQ ?? QQ.sE(), this._engine = this._scene.Uj(), this._cameraFacing = XQ.cameraFacing ?? !0, this.visibility = XQ.visibility ?? 1, this.useDash = XQ.useDash ?? !1, this.dashRatio = XQ.dashRatio ?? .5, this.dashOffset = XQ.dashOffset ?? 0, this.width = XQ.width ? XQ.width : XQ.sizeAttenuation ? jw.DEFAULT_WIDTH_ATTENUATED : jw.DEFAULT_WIDTH, this._sizeAttenuation = XQ.sizeAttenuation ?? !1, this.colorMode = XQ.colorMode ?? 0, this._color = XQ.color ?? null, this.useColors = XQ.useColors ?? !1, this._colorsDistributionType = XQ.colorDistributionType ?? 0, this.colorsSampling = XQ.colorsSampling ?? bQ.b.NEAREST_NEAREST, this._colors = XQ.colors ?? null, this.dashCount = XQ.dashCount ?? 1, this.resolution = XQ.resolution ?? new kQ.q(this._engine.getRenderWidth(), this._engine.getRenderHeight()), XQ.colorsTexture ? this.colorsTexture = XQ.colorsTexture : this._colors ? this.colorsTexture = pw.CreateColorsTexture(`${QQ.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? jw.DEFAULT_COLOR, pw.PrepareEmptyColorsTexture(this._scene)), this._engine.yE.add((() => {
          pw.DisposeEmptyColorsTexture()
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
        const WQ = [{
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
        return this._cameraFacing && WQ.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === QQ && WQ.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: WQ,
          vertex: this._cameraFacing && this._isGLSL(QQ) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(QQ) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(QQ) {
        if (this._cameraFacing) {
          QQ.N_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || QQ.N_("viewProjection", this._scene.getTransformMatrix());
          const WQ = kQ.m.Vector4[0];
          WQ.x = this._aspect, WQ.y = this._resolution.x, WQ.z = this._resolution.y, WQ.w = this.width, QQ.updateVector4("grl_aspect_resolution_lineWidth", WQ)
        }
        const WQ = kQ.m.Vector4[0];
        WQ.x = pw.BooleanToNumber(this.useDash), WQ.y = this._dashArray, WQ.z = this.dashOffset, WQ.w = this.dashRatio, QQ.updateVector4("grl_dashOptions", WQ);
        const XQ = kQ.m.Vector4[1];
        XQ.x = this.colorMode, XQ.y = this.visibility, XQ.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, XQ.w = pw.BooleanToNumber(this.useColors), QQ.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", XQ), this._color && QQ.updateColor3("grl_singleColor", this._color);
        const wQ = this.colorsTexture ?? jw.EmptyColorsTexture;
        QQ.setTexture("grl_colors", wQ), QQ.updateFloat2("grl_textureSize", wQ?.getSize().width ?? 1, wQ?.getSize().height ?? 1)
      }
      prepareDefines(QQ, WQ, XQ) {
        QQ.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, QQ.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, QQ.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, QQ.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = WQ.useRightHandedSystem, QQ.GREASED_LINE_CAMERA_FACING = this._cameraFacing, QQ.GREASED_LINE_USE_OFFSETS = !!XQ.offsets
      }
      getClassName() {
        return Uw.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(WQ) ? function(QQ, WQ) {
          if ("vertex" === QQ) {
            const QQ = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return WQ && (QQ["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), QQ
          }
          return "fragment" === QQ ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(QQ, this._cameraFacing) : function(QQ, WQ) {
          if ("vertex" === QQ) {
            const QQ = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return WQ && (QQ["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), QQ
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
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = this._colors?.length ?? 0;
        if (this._colors = QQ, null !== QQ && 0 !== QQ.length) {
          if (!WQ || XQ)
            if (this.colorsTexture && wQ === QQ.length && !XQ) {
              const WQ = pw.Color3toRGBAUint8(QQ);
              this.colorsTexture.update(WQ)
            } else this.colorsTexture?.dispose(), this.colorsTexture = pw.CreateColorsTexture(`${this._material.name}-colors-texture`, QQ, this.colorsSampling, this._scene)
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
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== QQ || null !== this._color && null === QQ ? (this._color = QQ, WQ || this.markAllDefinesAsDirty()) : this._color = QQ
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
          WQ = {
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
        return this._colors && (WQ.colors = this._colors), this._color && (WQ.color = this._color), QQ.greasedLineMaterialOptions = WQ, QQ
      }
      parse(QQ, WQ, XQ) {
        super.parse(QQ, WQ, XQ);
        const wQ = QQ.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), wQ.color && this.setColor(wQ.color, !0), wQ.colorDistributionType && (this.colorsDistributionType = wQ.colorDistributionType), wQ.colors && (this.colors = wQ.colors), wQ.colorsSampling && (this.colorsSampling = wQ.colorsSampling), wQ.colorMode && (this.colorMode = wQ.colorMode), wQ.useColors && (this.useColors = wQ.useColors), wQ.visibility && (this.visibility = wQ.visibility), wQ.useDash && (this.useDash = wQ.useDash), wQ.dashCount && (this.dashCount = wQ.dashCount), wQ.dashRatio && (this.dashRatio = wQ.dashRatio), wQ.dashOffset && (this.dashOffset = wQ.dashOffset), wQ.width && (this.width = wQ.width), wQ.sizeAttenuation && (this.sizeAttenuation = wQ.sizeAttenuation), wQ.resolution && (this.resolution = wQ.resolution), this.colors ? this.colorsTexture = pw.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, WQ) : pw.PrepareEmptyColorsTexture(WQ), this.markAllDefinesAsDirty()
      }
      copyTo(QQ) {
        const WQ = QQ;
        WQ.colorsTexture?.dispose(), this._colors && (WQ.colorsTexture = pw.CreateColorsTexture(`${WQ._material.name}-colors-texture`, this._colors, WQ.colorsSampling, this._scene)), WQ.setColor(this.color, !0), WQ.colorsDistributionType = this.colorsDistributionType, WQ.colorsSampling = this.colorsSampling, WQ.colorMode = this.colorMode, WQ.useColors = this.useColors, WQ.visibility = this.visibility, WQ.useDash = this.useDash, WQ.dashCount = this.dashCount, WQ.dashRatio = this.dashRatio, WQ.dashOffset = this.dashOffset, WQ.width = this.width, WQ.sizeAttenuation = this.sizeAttenuation, WQ.resolution = this.resolution, WQ.markAllDefinesAsDirty()
      }
      _isGLSL(QQ) {
        return 0 === QQ || this._forceGLSL
      }
    }
    Uw.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", Uw.ForceGLSL = !1;
    var bw = XQ(40651),
      vw = XQ(40661),
      dw = XQ(38947),
      Hw = XQ(40717),
      aw = XQ(40111);
    class lw extends Hw.t {
      constructor(QQ, WQ, wQ) {
        const qQ = WQ.Uj(),
          TQ = qQ.isWebGPU && !(wQ.forceGLSL || lw.ForceGLSL),
          zQ = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        WQ.useRightHandedSystem && zQ.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const sQ = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        wQ.cameraFacing ? (zQ.push("GREASED_LINE_CAMERA_FACING"), sQ.push("grl_previousAndSide", "grl_nextAndCounters")) : (sQ.push("grl_slopes"), sQ.push("grl_counters"));
        const FQ = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (TQ || FQ.push("world", "viewProjection", "view", "projection"), super(QQ, WQ, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: TQ ? ["Scene", "Mesh"] : void 0,
            attributes: sQ,
            uniforms: FQ,
            samplers: TQ ? [] : ["grlColors"],
            defines: zQ,
            extraInitializationsAsync: async () => {
              TQ ? await Promise.all([XQ.e(343).then((() => XQ(62152))), XQ.e(399).then((() => XQ(62158)))]) : await Promise.all([XQ.e(336).then((() => XQ(62164))), XQ.e(400).then((() => XQ(62166)))])
            },
            shaderLanguage: TQ ? 1 : 0
          }), this._color = xQ.b.White(), this._colorsDistributionType = 0, this._colorsTexture = null, wQ = wQ || {
            color: jw.DEFAULT_COLOR
          }, this.visibility = wQ.visibility ?? 1, this.useDash = wQ.useDash ?? !1, this.dashRatio = wQ.dashRatio ?? .5, this.dashOffset = wQ.dashOffset ?? 0, this.dashCount = wQ.dashCount ?? 1, this.width = wQ.width ? wQ.width : wQ.sizeAttenuation && wQ.cameraFacing ? jw.DEFAULT_WIDTH_ATTENUATED : jw.DEFAULT_WIDTH, this.sizeAttenuation = wQ.sizeAttenuation ?? !1, this.color = wQ.color ?? xQ.b.White(), this.useColors = wQ.useColors ?? !1, this.colorsDistributionType = wQ.colorDistributionType ?? 0, this.colorsSampling = wQ.colorsSampling ?? bQ.b.NEAREST_NEAREST, this.colorMode = wQ.colorMode ?? 0, this._colors = wQ.colors ?? null, this._cameraFacing = wQ.cameraFacing ?? !0, this.resolution = wQ.resolution ?? new kQ.q(qQ.getRenderWidth(), qQ.getRenderHeight()), wQ.colorsTexture ? this.colorsTexture = wQ.colorsTexture : this._colors ? this.colorsTexture = pw.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, WQ) : (this._color = this._color ?? jw.DEFAULT_COLOR, this.colorsTexture = pw.PrepareEmptyColorsTexture(WQ)), TQ) {
          const QQ = new aw.b;
          QQ.setParameters(), QQ.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", QQ)
        }
        qQ.yE.add((() => {
          pw.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== jw.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new kQ.q(this._colorMode, this._colorsDistributionType))
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
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = this._colors?.length ?? 0;
        if (this._colors = QQ, null !== QQ && 0 !== QQ.length) {
          if (!WQ || XQ)
            if (this._colorsTexture && wQ === QQ.length && !XQ) {
              const WQ = pw.Color3toRGBAUint8(QQ);
              this._colorsTexture.update(WQ)
            } else this._colorsTexture && this._colorsTexture !== jw.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = pw.CreateColorsTexture(`${this.name}-colors-texture`, QQ, this.colorsSampling, this.sE())
        } else {
          this._colorsTexture && this._colorsTexture !== jw.EmptyColorsTexture && this._colorsTexture.dispose();
          const QQ = this.sE();
          QQ && (this.colorsTexture = pw.PrepareEmptyColorsTexture(QQ))
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
        this._useColors = QQ, this.setFloat("grlUseColors", pw.BooleanToNumber(QQ))
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
        this._useDash = QQ, this.setFloat("grlUseDash", pw.BooleanToNumber(QQ))
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
        this._sizeAttenuation = QQ, this.setFloat("grlSizeAttenuation", pw.BooleanToNumber(QQ))
      }
      get color() {
        return this._color
      }
      set color(QQ) {
        this.setColor(QQ)
      }
      setColor(QQ) {
        QQ = QQ ?? jw.DEFAULT_COLOR, this._color = QQ, this.setColor3("grlColor", QQ)
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
          WQ = {
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
        return this._colors && (WQ.colors = this._colors), QQ.greasedLineMaterialOptions = WQ, QQ
      }
      parse(QQ, WQ, XQ) {
        const wQ = QQ.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), wQ.color && (this.color = wQ.color), wQ.colorDistributionType && (this.colorsDistributionType = wQ.colorDistributionType), wQ.colorsSampling && (this.colorsSampling = wQ.colorsSampling), wQ.colorMode && (this.colorMode = wQ.colorMode), wQ.useColors && (this.useColors = wQ.useColors), wQ.visibility && (this.visibility = wQ.visibility), wQ.useDash && (this.useDash = wQ.useDash), wQ.dashCount && (this.dashCount = wQ.dashCount), wQ.dashRatio && (this.dashRatio = wQ.dashRatio), wQ.dashOffset && (this.dashOffset = wQ.dashOffset), wQ.width && (this.width = wQ.width), wQ.sizeAttenuation && (this.sizeAttenuation = wQ.sizeAttenuation), wQ.resolution && (this.resolution = wQ.resolution), wQ.colors ? this.colorsTexture = pw.CreateColorsTexture(`${this.name}-colors-texture`, wQ.colors, this.colorsSampling, this.sE()) : this.colorsTexture = pw.PrepareEmptyColorsTexture(WQ), this._cameraFacing = wQ.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var hw, iw, Aw;
    lw.ForceGLSL = !1,
      function(QQ) {
        QQ[QQ.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", QQ[QQ.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(hw || (hw = {})),
      function(QQ) {
        QQ[QQ.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", QQ[QQ.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", QQ[QQ.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(iw || (iw = {})),
      function(QQ) {
        QQ[QQ.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", QQ[QQ.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", QQ[QQ.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", QQ[QQ.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", QQ[QQ.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Aw || (Aw = {}));
    class Rw extends bw.d {
      constructor(QQ, WQ, XQ) {
        super(QQ, WQ, null, null, !1, !1), this.name = QQ, this._options = XQ, this._lazy = !1, this._updatable = !1, this._engine = WQ.Uj(), this._lazy = XQ.lazy ?? !1, this._updatable = XQ.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = XQ.colorPointers ?? [], this._widths = XQ.widths ?? new Array(XQ.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(QQ) {
        let WQ = 0;
        for (const wQ of this._points) WQ += wQ.length;
        const XQ = WQ / 3 * 2 - this._widths.length;
        for (let wQ = 0; wQ < XQ; wQ++) this._widths.push(QQ)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.aj && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(QQ, WQ) {
        for (const XQ of QQ) this._points.push(XQ);
        this._lazy || this.setPoints(this._points, WQ)
      }
      dispose(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(QQ, WQ)
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
        this.material instanceof lw && this.material.setDefine("GREASED_LINE_USE_OFFSETS", QQ?.length > 0), this._offsets = QQ, this._offsetsBuffer ? this._offsetsBuffer.update(QQ) : this._createOffsetsBuffer(QQ)
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
        if (this.material && this.material instanceof lw) return this.material;
        const QQ = this.material?.pluginManager?.getPlugin(Uw.GREASED_LINE_MATERIAL_NAME);
        return QQ || void 0
      }
      get points() {
        const QQ = [];
        return dw.d.DeepCopy(this._points, QQ), QQ
      }
      setPoints(QQ, WQ) {
        this._points = pw.ConvertPoints(QQ, WQ?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), WQ?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, WQ)
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
        const WQ = new vw.e;
        return WQ.positions = this._vertexPositions, WQ.indices = this._indices, WQ.uvs = this._uvs, QQ && (WQ.normals = [], vw.e.ComputeNormals(this._vertexPositions, this._indices, WQ.normals)), WQ.applyToMesh(this, this._options.updatable), WQ
      }
      _createOffsetsBuffer(QQ) {
        const WQ = this._scene.Uj(),
          XQ = new fQ.d(WQ, QQ, this._updatable, 3);
        this.setVerticesBuffer(XQ.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = XQ
      }
    }
    class Ew {
      constructor(QQ, WQ) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = QQ, this.wasAddedByNoopNode = WQ
      }
      getIndicesAccessor(QQ, WQ, XQ, wQ, qQ) {
        return this._indicesAccessorMap.get(QQ)?.get(WQ)?.get(XQ)?.get(wQ)?.get(qQ)
      }
      setIndicesAccessor(QQ, WQ, XQ, wQ, qQ, TQ) {
        let zQ = this._indicesAccessorMap.get(QQ);
        zQ || (zQ = new Map, this._indicesAccessorMap.set(QQ, zQ));
        let sQ = zQ.get(WQ);
        sQ || (sQ = new Map, zQ.set(WQ, sQ));
        let FQ = sQ.get(XQ);
        FQ || (FQ = new Map, sQ.set(XQ, FQ));
        let PQ = FQ.get(wQ);
        PQ || (PQ = new Map, FQ.set(wQ, PQ)), PQ.set(qQ, TQ)
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
      setVertexBufferView(QQ, WQ) {
        this._vertexBufferViewMap.set(QQ, WQ)
      }
      setRemappedBufferView(QQ, WQ, XQ) {
        this._remappedBufferView.set(QQ, new Map), this._remappedBufferView.get(QQ).set(WQ, XQ)
      }
      getRemappedBufferView(QQ, WQ) {
        return this._remappedBufferView.get(QQ)?.get(WQ)
      }
      getVertexAccessor(QQ, WQ, XQ) {
        return this._vertexAccessorMap.get(QQ)?.get(WQ)?.get(XQ)
      }
      setVertexAccessor(QQ, WQ, XQ, wQ) {
        let qQ = this._vertexAccessorMap.get(QQ);
        qQ || (qQ = new Map, this._vertexAccessorMap.set(QQ, qQ));
        let TQ = qQ.get(WQ);
        TQ || (TQ = new Map, qQ.set(WQ, TQ)), TQ.set(XQ, wQ)
      }
      hasVertexColorAlpha(QQ) {
        return this._vertexMapColorAlpha.get(QQ) || !1
      }
      setHasVertexColorAlpha(QQ, WQ) {
        return this._vertexMapColorAlpha.set(QQ, WQ)
      }
      getMesh(QQ) {
        return this._meshMap.get(QQ)
      }
      setMesh(QQ, WQ) {
        this._meshMap.set(QQ, WQ)
      }
      bindMorphDataToMesh(QQ, WQ) {
        const XQ = this._meshMorphTargetMap.get(QQ) || [];
        this._meshMorphTargetMap.set(QQ, XQ), -1 === XQ.indexOf(WQ) && XQ.push(WQ)
      }
      getMorphTargetsFromMesh(QQ) {
        return this._meshMorphTargetMap.get(QQ)
      }
    }
    class Cw {
      _ApplyExtension(QQ, WQ, XQ, wQ) {
        if (XQ >= WQ.length) return Promise.resolve(QQ);
        const qQ = wQ(WQ[XQ], QQ);
        return qQ ? qQ.then((async QQ => QQ ? await this._ApplyExtension(QQ, WQ, XQ + 1, wQ) : null)) : this._ApplyExtension(QQ, WQ, XQ + 1, wQ)
      }
      _ApplyExtensions(QQ, WQ) {
        const XQ = [];
        for (const wQ of Cw._ExtensionNames) XQ.push(this._extensions[wQ]);
        return this._ApplyExtension(QQ, XQ, 0, WQ)
      }
      _extensionsPostExportNodeAsync(QQ, WQ, XQ, wQ, qQ) {
        return this._ApplyExtensions(WQ, ((WQ, TQ) => WQ.postExportNodeAsync && WQ.postExportNodeAsync(QQ, TQ, XQ, wQ, qQ, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(QQ, WQ, XQ) {
        return this._ApplyExtensions(WQ, ((WQ, wQ) => WQ.postExportMaterialAsync && WQ.postExportMaterialAsync(QQ, wQ, XQ)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        const wQ = [];
        return await Promise.all(Cw._ExtensionNames.map((async qQ => {
          const TQ = this._extensions[qQ];
          if (TQ.postExportMaterialAdditionalTexturesAsync) {
            const qQ = await TQ.postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ);
            wQ.push(...qQ)
          }
        }))), wQ
      }
      _extensionsPostExportTextures(QQ, WQ, XQ) {
        for (const wQ of Cw._ExtensionNames) {
          const qQ = this._extensions[wQ];
          qQ.postExportTexture && qQ.postExportTexture(QQ, WQ, XQ)
        }
      }
      _extensionsPostExportMeshPrimitive(QQ) {
        for (const WQ of Cw._ExtensionNames) {
          const XQ = this._extensions[WQ];
          XQ.postExportMeshPrimitive && XQ.postExportMeshPrimitive(QQ, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const QQ of Cw._ExtensionNames) {
          const WQ = this._extensions[QQ];
          WQ.preGenerateBinaryAsync && await WQ.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(QQ) {
        for (const WQ of Cw._ExtensionNames) {
          const XQ = this._extensions[WQ];
          XQ.enabled && QQ(XQ)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((QQ => {
          var WQ, XQ, wQ;
          QQ.wasUsed && ((WQ = this._glTF).extensionsUsed || (WQ.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(QQ.name) && this._glTF.extensionsUsed.push(QQ.name), QQ.required && ((XQ = this._glTF).extensionsRequired || (XQ.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(QQ.name) && this._glTF.extensionsRequired.push(QQ.name)), (wQ = this._glTF).extensions || (wQ.extensions = {}), QQ.onExporting && QQ.onExporting())
        }))
      }
      _loadExtensions() {
        for (const QQ of Cw._ExtensionNames) {
          const WQ = Cw._ExtensionFactories[QQ](this);
          this._extensions[QQ] = WQ
        }
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BQ.d.LastCreatedScene,
          WQ = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${jQ.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new iX(this), this._extensions = {}, this._bufferManager = new Xw, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !QQ) throw new Error("No scene available to export");
        this._babylonScene = QQ, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: QQ => QQ?.vR?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...WQ
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
      static RegisterExtension(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        Cw.UnregisterExtension(QQ) && qQ.Tools.Warn(`Extension with the name ${QQ} already exists`), Cw._ExtensionFactories[QQ] = WQ;
        const wQ = XQ ?? 0;
        Cw._ExtensionOrders[QQ] = wQ;
        let TQ = Cw._ExtensionNames.length;
        for (let qQ = 0; qQ < Cw._ExtensionNames.length; qQ++) {
          const QQ = Cw._ExtensionNames[qQ];
          if (wQ < Cw._ExtensionOrders[QQ]) {
            TQ = qQ;
            break
          }
        }
        Cw._ExtensionNames.splice(TQ, 0, QQ)
      }
      static UnregisterExtension(QQ) {
        if (!Cw._ExtensionFactories[QQ]) return !1;
        delete Cw._ExtensionFactories[QQ], delete Cw._ExtensionOrders[QQ];
        const WQ = Cw._ExtensionNames.indexOf(QQ);
        return -1 !== WQ && Cw._ExtensionNames.splice(WQ, 1), !0
      }
      _generateJSON(QQ, WQ, XQ) {
        const wQ = {
          byteLength: QQ
        };
        return wQ.byteLength && (this._glTF.buffers = [wQ]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.cB = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (wQ.uri = WQ + ".bin"), XQ ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(QQ) {
        const WQ = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const XQ = this._generateJSON(WQ.byteLength, QQ, !0),
          wQ = new Blob([WQ], {
            type: "application/octet-stream"
          }),
          qQ = QQ + ".gltf",
          TQ = QQ + ".bin",
          zQ = new PQ;
        if (zQ.files[qQ] = XQ, zQ.files[TQ] = wQ, this._imageData)
          for (const sQ in this._imageData) zQ.files[sQ] = this._imageData[sQ];
        return zQ
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(QQ) {
        const WQ = QQ % 4;
        return 0 === WQ ? WQ : 4 - WQ
      }
      async generateGLBAsync(QQ) {
        this._shouldUseGlb = !0;
        const WQ = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const XQ = this._generateJSON(WQ.byteLength),
          wQ = QQ + ".glb";
        let qQ, TQ = XQ.length;
        if ("undefined" !== typeof TextEncoder) {
          qQ = (new TextEncoder).encode(XQ), TQ = qQ.length
        }
        const zQ = this._getPadding(TQ),
          sQ = this._getPadding(WQ.byteLength),
          FQ = 28 + TQ + zQ + WQ.byteLength + sQ,
          gQ = new Qw(FQ);
        if (gQ.writeUInt32(1179937895), gQ.writeUInt32(2), gQ.writeUInt32(FQ), gQ.writeUInt32(TQ + zQ), gQ.writeUInt32(1313821514), qQ) gQ.writeTypedArray(qQ);
        else {
          const QQ = "_".charCodeAt(0);
          for (let WQ = 0; WQ < TQ; ++WQ) {
            const wQ = XQ.charCodeAt(WQ);
            wQ != XQ.codePointAt(WQ) ? gQ.writeUInt8(QQ) : gQ.writeUInt8(wQ)
          }
        }
        for (let PQ = 0; PQ < zQ; ++PQ) gQ.writeUInt8(32);
        gQ.writeUInt32(WQ.byteLength + sQ), gQ.writeUInt32(5130562), gQ.writeTypedArray(WQ);
        for (let PQ = 0; PQ < sQ; ++PQ) gQ.writeUInt8(0);
        const JQ = new PQ;
        return JQ.files[wQ] = new Blob([gQ.getOutputData()], {
          type: "application/octet-stream"
        }), JQ
      }
      _setNodeTransformation(QQ, WQ, XQ) {
        if (WQ.getPivotPoint().equalsWithEpsilon(uX, RX.b) || qQ.Tools.Warn("Pivot points are not supported in the glTF serializer"), !WQ.position.equalsWithEpsilon(uX, RX.b)) {
          const qQ = wQ.TmpVectors.vj[0].WH(WQ.position);
          XQ && nX(qQ), QQ.translation = qQ.awQ()
        }
        WQ.oB.equalsWithEpsilon(kX, RX.b) || (QQ.scale = WQ.oB.awQ());
        const TQ = WQ.rotationQuaternion?.clone() || wQ.Quaternion.FromEulerAngles(WQ.rotation.x, WQ.rotation.y, WQ.rotation.z);
        TQ.equalsWithEpsilon(LX, RX.b) || (XQ && xX(TQ), QQ.rotation = TQ.normalize().awQ())
      }
      _setCameraTransformation(QQ, WQ, XQ) {
        const qQ = wQ.TmpVectors.vj[0],
          TQ = wQ.TmpVectors.Quaternion[0],
          zQ = WQ.getWorldMatrix();
        if (WQ.parent) {
          const QQ = WQ.parent.getWorldMatrix().invertToRef(wQ.TmpVectors.Matrix[0]);
          zQ.multiplyToRef(QQ, wQ.TmpVectors.Matrix[1]).decompose(void 0, TQ, qQ)
        } else zQ.decompose(void 0, TQ, qQ);
        qQ.equalsWithEpsilon(uX, RX.b) || (XQ && nX(qQ), QQ.translation = qQ.awQ()), XQ && xX(TQ), this._babylonScene.useRightHandedSystem || YX(TQ), TQ.equalsWithEpsilon(LX, RX.b) || (QQ.rotation = TQ.awQ())
      }
      _listAvailableCameras() {
        for (const QQ of this._babylonScene.cameras) {
          const WQ = {
            type: QQ.mode === ww.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (QQ.name && (WQ.name = QQ.name), "perspective" === WQ.type) WQ.perspective = {
            aspectRatio: QQ.Uj().getAspectRatio(QQ),
            yfov: QQ.fovMode === ww.d.FOVMODE_VERTICAL_FIXED ? QQ.fov : QQ.fov * QQ.Uj().getAspectRatio(QQ),
            znear: QQ.minZ,
            zfar: QQ.maxZ
          };
          else if ("orthographic" === WQ.type) {
            const XQ = QQ.orthoLeft && QQ.orthoRight ? .5 * (QQ.orthoRight - QQ.orthoLeft) : .5 * QQ.Uj().getRenderWidth(),
              wQ = QQ.orthoBottom && QQ.orthoTop ? .5 * (QQ.orthoTop - QQ.orthoBottom) : .5 * QQ.Uj().getRenderHeight();
            WQ.orthographic = {
              xmag: XQ,
              ymag: wQ,
              znear: QQ.minZ,
              zfar: QQ.maxZ
            }
          }
          this._camerasMap.set(QQ, WQ)
        }
      }
      _exportAndAssignCameras() {
        const QQ = Array.from(this._camerasMap.values());
        for (const WQ of QQ) {
          const QQ = this._nodesCameraMap.get(WQ);
          if (void 0 !== QQ) {
            this._cameras.push(WQ);
            for (const WQ of QQ) WQ.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const QQ of this._babylonScene.skeletons) {
          if (QQ.bones.length <= 0) continue;
          const WQ = {
            joints: []
          };
          this._skinMap.set(QQ, WQ)
        }
      }
      _exportAndAssignSkeletons(QQ) {
        for (const XQ of this._babylonScene.skeletons) {
          if (XQ.bones.length <= 0) continue;
          const TQ = this._skinMap.get(XQ);
          if (void 0 == TQ) continue;
          const zQ = {};
          let sQ = -1;
          for (let QQ = 0; QQ < XQ.bones.length; ++QQ) {
            const WQ = XQ.bones[QQ],
              wQ = WQ.getIndex() ?? QQ; - 1 !== wQ && (zQ[wQ] = WQ, wQ > sQ && (sQ = wQ))
          }
          const FQ = [];
          for (let XQ = 0; XQ <= sQ; ++XQ) {
            const sQ = zQ[XQ],
              PQ = sQ.getTransformNode(),
              gQ = PQ ? this._nodeMap.get(PQ) : void 0;
            if (void 0 === gQ) {
              qQ.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            TQ.joints.push(gQ);
            const JQ = sQ.getAbsoluteInverseBindMatrix().clone();
            QQ.has(PQ) && (WQ = JQ, EX.invertToRef(wQ.TmpVectors.Matrix[0]).multiplyToRef(WQ, WQ).multiplyToRef(EX, WQ)), FQ.push(JQ)
          }
          const PQ = this._nodesSkinMap.get(TQ);
          if (TQ.joints.length > 0 && void 0 !== PQ) {
            const QQ = new Float32Array(16 * FQ.length);
            FQ.forEach(((WQ, XQ) => {
              QQ.set(WQ.m, 16 * XQ)
            }));
            const WQ = this._bufferManager.createBufferView(QQ);
            this._accessors.push(this._bufferManager.createAccessor(WQ, "MAT4", 5126, FQ.length)), TQ.inverseBindMatrices = this._accessors.length - 1, this._skins.push(TQ);
            const XQ = this._skins.length - 1;
            for (const wQ of PQ) wQ.skin = XQ
          }
        }
        var WQ
      }
      async _exportSceneAsync() {
        const QQ = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const WQ = this._options.metadataSelector(this._babylonScene.metadata);
          WQ && (QQ.extras = WQ)
        }
        const WQ = new Array,
          XQ = new Array,
          wQ = new Array,
          qQ = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let TQ;
        if (qQ && !this._options.includeCoordinateSystemConversionNodes)
          for (const PQ of this._babylonScene.animationGroups)
            for (const QQ of PQ.targetedAnimations) {
              const WQ = QQ.target;
              WQ instanceof JQ.b && !WQ.parent && (TQ ?? (TQ = new Set)).add(WQ)
            }
        for (const PQ of this._babylonScene.rootNodes) {
          const QQ = PQ.animations,
            zQ = !!QQ && QQ.length > 0 || TQ?.has(PQ);
          qQ && !this._options.includeCoordinateSystemConversionNodes && CX(PQ, this._babylonScene.useRightHandedSystem) && !zQ ? wQ.push(...PQ.getChildren()) : this._babylonScene.useRightHandedSystem ? WQ.push(PQ) : XQ.push(PQ)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const zQ = new Ew(!0, !1);
        QQ.nodes.push(...await this._exportNodesAsync(XQ, zQ));
        const sQ = new Ew(!1, !1);
        QQ.nodes.push(...await this._exportNodesAsync(WQ, sQ));
        const FQ = new Ew(!1, !0);
        QQ.nodes.push(...await this._exportNodesAsync(wQ, FQ)), QQ.nodes.length && this._scenes.push(QQ), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(zQ.getNodesSet()), this._babylonScene.animationGroups.length && Jw._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, zQ.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(QQ) {
        return this._nodeMap.get(QQ)
      }
      _getAnimationIndex(QQ) {
        return this._animationGroupMap.get(QQ)
      }
      _getCameraIndex(QQ) {
        const WQ = this._camerasMap.get(QQ);
        if (!WQ) return;
        const XQ = this._cameras.indexOf(WQ);
        return XQ >= 0 ? XQ : void 0
      }
      _getMaterialIndex(QQ) {
        return this._materialMap.get(QQ)
      }
      _getRootIndex(QQ, WQ) {
        switch (QQ) {
          case "nodes":
            return this._getNodeIndex(WQ);
          case "animations":
            return this._getAnimationIndex(WQ);
          case "cameras":
            return this._getCameraIndex(WQ);
          case "materials":
            return this._getMaterialIndex(WQ);
          case "meshes": {
            const QQ = this._getNodeIndex(WQ);
            return void 0 === QQ ? void 0 : this._nodes[QQ]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(WQ)?.index;
          case "images": {
            const QQ = this._materialExporter.getTextureInfo(WQ)?.index;
            if (void 0 === QQ) return;
            const XQ = this._textures[QQ];
            for (const WQ of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const QQ = XQ?.extensions?.[WQ]?.source;
              if ("number" === typeof QQ) return QQ
            }
            return XQ?.source
          }
          case "samplers": {
            const QQ = this._materialExporter.getTextureInfo(WQ)?.index;
            return void 0 === QQ ? void 0 : this._textures[QQ]?.sampler
          }
          case "skins": {
            const QQ = this._skinMap.get(WQ),
              XQ = QQ ? this._skins.indexOf(QQ) : -1;
            return XQ >= 0 ? XQ : void 0
          }
          case "scenes":
            return WQ === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(QQ, WQ, XQ) {
        const wQ = this._nodes[QQ];
        if (!wQ) throw new Error(`Cannot write ${WQ}: glTF node ${QQ} does not exist.`);
        wQ.extensions || (wQ.extensions = {}), wQ.extensions[WQ] = XQ
      }
      _shouldExportNode(QQ) {
        let WQ = this._shouldExportNodeMap.get(QQ);
        return void 0 === WQ && (WQ = this._options.shouldExportNode(QQ), this._shouldExportNodeMap.set(QQ, WQ)), WQ
      }
      async _exportNodesAsync(QQ, WQ) {
        const XQ = new Array;
        this._exportBuffers(QQ, WQ);
        for (const wQ of QQ) await this._exportNodeAsync(wQ, XQ, WQ);
        return XQ
      }
      _collectBuffers(QQ, WQ, XQ, wQ, qQ) {
        if (this._shouldExportNode(QQ) && QQ instanceof rQ.c && QQ.geometry) {
          const TQ = QQ.geometry.getVertexBuffers();
          if (TQ)
            for (const wQ in TQ) {
              if (!oX(wQ)) continue;
              const zQ = TQ[wQ];
              qQ.setHasVertexColorAlpha(zQ, QQ.hasVertexAlpha);
              const sQ = zQ._buffer,
                FQ = WQ.get(sQ) || [];
              WQ.set(sQ, FQ), -1 === FQ.indexOf(zQ) && FQ.push(zQ);
              const PQ = XQ.get(zQ) || [];
              XQ.set(zQ, PQ), -1 === PQ.indexOf(QQ) && PQ.push(QQ)
            }
          const zQ = QQ.morphTargetManager;
          if (zQ)
            for (let WQ = 0; WQ < zQ.numTargets; WQ++) {
              const XQ = zQ.getTarget(WQ),
                qQ = wQ.get(XQ) || [];
              wQ.set(XQ, qQ), -1 === qQ.indexOf(QQ) && qQ.push(QQ)
            }
        }
        for (const TQ of QQ.getChildren()) this._collectBuffers(TQ, WQ, XQ, wQ, qQ)
      }
      _exportBuffers(QQ, WQ) {
        const XQ = new Map,
          wQ = new Map,
          qQ = new Map;
        for (const sQ of QQ) this._collectBuffers(sQ, XQ, wQ, qQ, WQ);
        const TQ = Array.from(XQ.keys());
        for (const sQ of TQ) {
          const QQ = sQ.getData();
          if (!QQ) throw new Error("Buffer data is not available");
          const qQ = XQ.get(sQ);
          if (!qQ) continue;
          const TQ = qQ[0].byteStride;
          if (qQ.some((QQ => QQ.byteStride !== TQ))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const zQ = OX(QQ).slice();
          for (const WQ of qQ) {
            const QQ = wQ.get(WQ),
              {
                byteOffset: XQ,
                byteStride: qQ,
                componentCount: TQ,
                type: sQ,
                count: FQ,
                normalized: PQ,
                kind: JQ
              } = SX(WQ, QQ);
            switch (JQ) {
              case gQ.f.NormalKind:
              case gQ.f.TangentKind:
                (0, cX.j)(zQ, XQ, qQ, TQ, sQ, FQ, PQ, (QQ => {
                  const WQ = Math.sqrt(QQ[0] * QQ[0] + QQ[1] * QQ[1] + QQ[2] * QQ[2]);
                  if (WQ > 0) {
                    const XQ = 1 / WQ;
                    QQ[0] *= XQ, QQ[1] *= XQ, QQ[2] *= XQ
                  }
                }));
                break;
              case gQ.f.ColorKind: {
                const WQ = QQ.filter((QQ => QQ.material instanceof Tw.StandardMaterial || null == QQ.material)).length;
                if (0 == WQ) break;
                if (WQ != QQ.length) {
                  lQ.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                sQ == gQ.f.UNSIGNED_BYTE && lQ.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const wQ = new yQ.Color3,
                  JQ = new yQ.d,
                  rQ = this._babylonScene.Uj().useExactSrgbConversions;
                (0, cX.j)(zQ, XQ, qQ, TQ, sQ, FQ, PQ, (QQ => {
                  3 === QQ.length ? (wQ.gXQ(QQ, 0), wQ.toLinearSpaceToRef(wQ, rQ), wQ.toArray(QQ, 0)) : (JQ.gXQ(QQ, 0), JQ.toLinearSpaceToRef(JQ, rQ), JQ.toArray(QQ, 0))
                }))
              }
            }
          }
          if (WQ.convertToRightHanded) {
            for (const QQ of qQ) {
              const WQ = wQ.get(QQ),
                {
                  byteOffset: XQ,
                  byteStride: qQ,
                  componentCount: TQ,
                  type: sQ,
                  count: FQ,
                  normalized: PQ,
                  kind: JQ
                } = SX(QQ, WQ);
              switch (JQ) {
                case gQ.f.PositionKind:
                case gQ.f.NormalKind:
                case gQ.f.TangentKind:
                  (0, cX.j)(zQ, XQ, qQ, TQ, sQ, FQ, PQ, (QQ => {
                    QQ[0] = -QQ[0]
                  }))
              }
            }
            WQ.convertedToRightHandedBuffers.set(sQ, zQ)
          }
          const FQ = this._bufferManager.createBufferView(zQ, TQ);
          WQ.setVertexBufferView(sQ, FQ);
          const PQ = new Map;
          for (const WQ of qQ) {
            const QQ = wQ.get(WQ),
              {
                kind: XQ,
                totalVertices: qQ
              } = SX(WQ, QQ);
            switch (XQ) {
              case gQ.f.MatricesIndicesKind:
              case gQ.f.MatricesIndicesExtraKind:
                if (WQ.type == gQ.f.FLOAT) {
                  const QQ = WQ.getFloatData(qQ);
                  null !== QQ && PQ.set(WQ, QQ)
                }
            }
          }
          0 !== PQ.size && lQ.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const JQ = Array.from(PQ.keys());
          for (const XQ of JQ) {
            const QQ = PQ.get(XQ);
            if (!QQ) continue;
            const wQ = QQ.some((QQ => QQ >= 256)),
              qQ = new(wQ ? Uint16Array : Uint8Array)(QQ.length);
            for (let WQ = 0; WQ < QQ.length; WQ++) qQ[WQ] = QQ[WQ];
            const TQ = this._bufferManager.createBufferView(qQ, 4 * (wQ ? 2 : 1));
            WQ.setRemappedBufferView(sQ, XQ, TQ)
          }
        }
        const zQ = Array.from(qQ.keys());
        for (const sQ of zQ) {
          const QQ = qQ.get(sQ);
          if (!QQ) continue;
          const XQ = rw(sQ, QQ[0], this._bufferManager, this._bufferViews, this._accessors, WQ.convertToRightHanded);
          for (const wQ of QQ) WQ.bindMorphDataToMesh(wQ, XQ)
        }
      }
      async _exportNodeAsync(QQ, WQ, XQ) {
        let wQ = this._nodeMap.get(QQ);
        if (void 0 !== wQ) return void(WQ.includes(wQ) || WQ.push(wQ));
        const qQ = await this._createNodeAsync(QQ, XQ);
        if (qQ) {
          wQ = this._nodes.length, this._nodes.push(qQ), this._nodeMap.set(QQ, wQ), XQ.pushExportedNode(QQ), WQ.push(wQ);
          const TQ = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            zQ = [];
          this._babylonScene.animationGroups.length || (Jw._CreateMorphTargetAnimationFromMorphTargetAnimations(QQ, TQ, zQ, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, XQ.convertToRightHanded, this._options.shouldExportAnimation), QQ.animations.length && Jw._CreateNodeAnimationFromNodeAnimations(QQ, TQ, zQ, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, XQ.convertToRightHanded, this._options.shouldExportAnimation)), TQ.channels.length && TQ.samplers.length && this._animations.push(TQ), zQ.forEach((QQ => {
            QQ.channels.length && QQ.samplers.length && this._animations.push(QQ)
          }))
        }
        const TQ = qQ ? [] : WQ;
        for (const zQ of QQ.getChildren()) await this._exportNodeAsync(zQ, TQ, XQ);
        qQ && TQ.length && (qQ.children = TQ)
      }
      async _createNodeAsync(QQ, WQ) {
        if (!this._shouldExportNode(QQ)) return null;
        const XQ = {};
        if (QQ.name && (XQ.name = QQ.name), QQ.metadata) {
          const WQ = this._options.metadataSelector(QQ.metadata);
          WQ && (XQ.extras = WQ)
        }
        if (QQ instanceof JQ.b && (this._setNodeTransformation(XQ, QQ, WQ.convertToRightHanded), QQ instanceof rQ.c)) {
          const wQ = QQ instanceof IQ.b ? QQ.bqQ : QQ;
          if (wQ.ZD && wQ.ZD.length > 0 && (XQ.mesh = await this._exportMeshAsync(wQ, WQ)), QQ.skeleton) {
            const WQ = this._skinMap.get(QQ.skeleton);
            void 0 !== WQ && (void 0 === this._nodesSkinMap.get(WQ) && this._nodesSkinMap.set(WQ, []), this._nodesSkinMap.get(WQ)?.push(XQ))
          }
        }
        if (QQ instanceof AX.c) {
          const wQ = this._camerasMap.get(QQ);
          if (wQ) {
            void 0 === this._nodesCameraMap.get(wQ) && this._nodesCameraMap.set(wQ, []), this._setCameraTransformation(XQ, QQ, WQ.convertToRightHanded);
            const qQ = QQ.parent;
            if (null !== qQ && ZX(QQ, qQ)) {
              const QQ = this._nodeMap.get(qQ);
              if (void 0 !== QQ) {
                const WQ = this._nodes[QQ];
                return NX(XQ, WQ), this._nodesCameraMap.get(wQ)?.push(WQ), null
              }
            }
            this._nodesCameraMap.get(wQ)?.push(XQ)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", XQ, QQ, this._nodeMap, WQ.convertToRightHanded) ? XQ : (lQ.b.Warn(`Not exporting node ${QQ.name}`), null)
      }
      _exportIndices(QQ, WQ, XQ, wQ, qQ, zQ, sQ, FQ, PQ) {
        let gQ = null;
        PQ.mode = function(QQ) {
          switch (QQ) {
            case TQ.b.TriangleFillMode:
              return 4;
            case TQ.b.TriangleStripDrawMode:
              return 5;
            case TQ.b.TriangleFanDrawMode:
              return 6;
            case TQ.b.PointListDrawMode:
            case TQ.b.PointFillMode:
              return 0;
            case TQ.b.LineLoopDrawMode:
              return 2;
            case TQ.b.LineListDrawMode:
              return 1;
            case TQ.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${QQ}`)
        }(zQ);
        const JQ = sQ !== TQ.b.CounterClockWiseSideOrientation && function(QQ) {
          switch (QQ) {
            case TQ.b.TriangleFillMode:
            case TQ.b.TriangleStripDrawMode:
            case TQ.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(zQ);
        if (JQ) {
          if (zQ === TQ.b.TriangleStripDrawMode || zQ === TQ.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const sQ = WQ ? new Uint32Array(wQ) : new Uint16Array(wQ);
          if (QQ)
            for (let WQ = 0; WQ + 2 < wQ; WQ += 3) sQ[WQ] = QQ[XQ + WQ] + qQ, sQ[WQ + 1] = QQ[XQ + WQ + 2] + qQ, sQ[WQ + 2] = QQ[XQ + WQ + 1] + qQ;
          else
            for (let QQ = 0; QQ + 2 < wQ; QQ += 3) sQ[QQ] = QQ, sQ[QQ + 1] = QQ + 2, sQ[QQ + 2] = QQ + 1;
          gQ = sQ
        } else if (QQ && 0 !== qQ) {
          const TQ = WQ ? new Uint32Array(wQ) : new Uint16Array(wQ);
          for (let WQ = 0; WQ < wQ; WQ++) TQ[WQ] = QQ[XQ + WQ] + qQ;
          gQ = TQ
        } else QQ && (gQ = function(QQ, WQ, XQ, wQ) {
          let qQ = QQ;
          return 0 === WQ && XQ === QQ.length || (qQ = Array.isArray(QQ) ? QQ.slice(WQ, WQ + XQ) : QQ.subarray(WQ, WQ + XQ)), qQ instanceof Int32Array ? new Uint32Array(qQ.buffer, qQ.byteOffset, qQ.length) : Array.isArray(qQ) ? wQ ? new Uint32Array(qQ) : new Uint16Array(qQ) : qQ
        }(QQ, XQ, wQ, WQ));
        if (gQ) {
          let TQ = FQ.getIndicesAccessor(QQ, XQ, wQ, qQ, JQ);
          if (void 0 === TQ) {
            const zQ = this._bufferManager.createBufferView(gQ),
              sQ = WQ ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(zQ, "SCALAR", sQ, wQ, 0)), TQ = this._accessors.length - 1, FQ.setIndicesAccessor(QQ, XQ, wQ, qQ, JQ, TQ)
          }
          PQ.indices = TQ
        }
      }
      _exportVertexBuffer(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = QQ.getKind();
        if (!oX(zQ)) return;
        if (zQ.startsWith("uv") && !this._options.exportUnusedUVs && (!WQ || !this._materialNeedsUVsSet.has(WQ))) return;
        let sQ = qQ.getVertexAccessor(QQ, XQ, wQ);
        if (void 0 === sQ) {
          const WQ = qQ.convertedToRightHandedBuffers.get(QQ._buffer) || QQ._buffer.getData(),
            TQ = zQ === gQ.f.PositionKind ? function(QQ, WQ, XQ, wQ) {
              const {
                byteOffset: qQ,
                byteStride: TQ,
                type: zQ,
                normalized: sQ
              } = WQ, FQ = WQ.getSize(), PQ = new Array(FQ).fill(1 / 0), gQ = new Array(FQ).fill(-1 / 0);
              return (0, cX.j)(QQ, qQ + XQ * TQ, TQ, FQ, zQ, wQ * FQ, sQ, (QQ => {
                for (let WQ = 0; WQ < FQ; WQ++) PQ[WQ] = Math.min(PQ[WQ], QQ[WQ]), gQ[WQ] = Math.max(gQ[WQ], QQ[WQ])
              })), {
                min: PQ,
                max: gQ
              }
            }(WQ, QQ, XQ, wQ) : void 0,
            FQ = (zQ === gQ.f.MatricesIndicesKind || zQ === gQ.f.MatricesIndicesExtraKind) && QQ.type === gQ.f.FLOAT,
            PQ = FQ ? gQ.f.UNSIGNED_BYTE : QQ.type,
            JQ = FQ ? void 0 : QQ.normalized,
            rQ = FQ ? qQ.getRemappedBufferView(QQ._buffer, QQ) : qQ.getVertexBufferView(QQ._buffer),
            IQ = QQ.byteOffset + XQ * QQ.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(rQ, function(QQ, WQ) {
            if (QQ == gQ.f.ColorKind) return WQ ? "VEC4" : "VEC3";
            switch (QQ) {
              case gQ.f.PositionKind:
              case gQ.f.NormalKind:
                return "VEC3";
              case gQ.f.TangentKind:
              case gQ.f.MatricesIndicesKind:
              case gQ.f.MatricesIndicesExtraKind:
              case gQ.f.MatricesWeightsKind:
              case gQ.f.MatricesWeightsExtraKind:
                return "VEC4";
              case gQ.f.UVKind:
              case gQ.f.UV2Kind:
              case gQ.f.UV3Kind:
              case gQ.f.UV4Kind:
              case gQ.f.UV5Kind:
              case gQ.f.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${QQ}`)
          }(zQ, qQ.hasVertexColorAlpha(QQ)), PQ, wQ, IQ, TQ, JQ)), sQ = this._accessors.length - 1, qQ.setVertexAccessor(QQ, XQ, wQ, sQ)
        }
        TQ.attributes[function(QQ) {
          switch (QQ) {
            case gQ.f.PositionKind:
              return "POSITION";
            case gQ.f.NormalKind:
              return "NORMAL";
            case gQ.f.TangentKind:
              return "TANGENT";
            case gQ.f.ColorKind:
              return "COLOR_0";
            case gQ.f.UVKind:
              return "TEXCOORD_0";
            case gQ.f.UV2Kind:
              return "TEXCOORD_1";
            case gQ.f.UV3Kind:
              return "TEXCOORD_2";
            case gQ.f.UV4Kind:
              return "TEXCOORD_3";
            case gQ.f.UV5Kind:
              return "TEXCOORD_4";
            case gQ.f.UV6Kind:
              return "TEXCOORD_5";
            case gQ.f.MatricesIndicesKind:
              return "JOINTS_0";
            case gQ.f.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case gQ.f.MatricesWeightsKind:
              return "WEIGHTS_0";
            case gQ.f.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${QQ}`)
        }(zQ)] = sQ
      }
      async _exportMaterialAsync(QQ, WQ, XQ, wQ) {
        let qQ = this._materialMap.get(QQ);
        if (void 0 === qQ) {
          const wQ = WQ && Object.keys(WQ).some((QQ => QQ.startsWith("uv")));
          if ((QQ = QQ instanceof qw.c ? QQ.Z2[XQ.materialIndex] : QQ) instanceof bW) qQ = await this._materialExporter.exportPBRMaterialAsync(QQ, wQ);
          else if (QQ instanceof Tw.StandardMaterial) qQ = await this._materialExporter.exportStandardMaterialAsync(QQ, wQ);
          else {
            if (!(QQ instanceof mW)) return void lQ.b.Warn(`Unsupported material '${QQ.name}' with type ${QQ.getClassName()}`);
            qQ = await this._materialExporter.exportOpenPBRMaterialAsync(QQ, wQ)
          }
          this._materialMap.set(QQ, qQ)
        }
        wQ.material = qQ
      }
      async _exportMeshAsync(QQ, WQ) {
        let XQ = WQ.getMesh(QQ);
        if (void 0 !== XQ) return XQ;
        const wQ = {
          primitives: []
        };
        XQ = this._meshes.length, this._meshes.push(wQ), WQ.setMesh(QQ, XQ);
        const qQ = QQ.isUnIndexed ? null : QQ.lwQ(),
          zQ = QQ.geometry?.getVertexBuffers(),
          sQ = WQ.getMorphTargetsFromMesh(QQ),
          FQ = QQ instanceof Iw.d,
          PQ = QQ instanceof Rw,
          gQ = QQ.ZD;
        if (zQ && gQ && gQ.length > 0)
          for (const JQ of gQ) {
            const XQ = {
                attributes: {}
              },
              gQ = JQ.lj() || this._babylonScene.defaultMaterial;
            if (PQ) {
              const WQ = {
                  name: gQ.name
                },
                wQ = QQ,
                qQ = yQ.Color3.White(),
                TQ = wQ.material?.alpha ?? 1,
                zQ = wQ.greasedLineMaterial?.color ?? qQ;
              (!zQ.equalsWithEpsilon(qQ, RX.b) || TQ < 1) && (WQ.pbrMetallicRoughness = {
                baseColorFactor: [...zQ.awQ(), TQ]
              }), this._materials.push(WQ), XQ.material = this._materials.length - 1
            } else if (FQ) {
              const WQ = {
                  name: gQ.name
                },
                wQ = QQ;
              (!wQ.color.equalsWithEpsilon(yQ.Color3.White(), RX.b) || wQ.alpha < 1) && (WQ.pbrMetallicRoughness = {
                baseColorFactor: [...wQ.color.awQ(), wQ.alpha]
              }), this._materials.push(WQ), XQ.material = this._materials.length - 1
            } else await this._exportMaterialAsync(gQ, zQ, JQ, XQ);
            const rQ = FQ || PQ ? TQ.b.LineListDrawMode : QQ.overrideRenderingFillMode ?? gQ.fillMode;
            let IQ = gQ._getEffectiveOrientation(QQ);
            WQ.wasAddedByNoopNode && !QQ.sE().useRightHandedSystem && (IQ = IQ === TQ.b.ClockWiseSideOrientation ? TQ.b.CounterClockWiseSideOrientation : TQ.b.ClockWiseSideOrientation), this._exportIndices(qQ, qQ ? (0, cX.e)(qQ, JQ.indexCount, JQ.indexStart, JQ.verticesStart) : JQ.verticesCount > 65535, qQ ? JQ.indexStart : JQ.verticesStart, qQ ? JQ.indexCount : JQ.verticesCount, -JQ.verticesStart, rQ, IQ, WQ, XQ);
            for (const QQ of Object.values(zQ)) this._exportVertexBuffer(QQ, gQ, JQ.verticesStart, JQ.verticesCount, WQ, XQ);
            if (sQ) {
              XQ.targets = [];
              for (const QQ of sQ) XQ.targets.push(QQ.attributes)
            }
            wQ.primitives.push(XQ), this._extensionsPostExportMeshPrimitive(XQ)
          }
        if (sQ) {
          wQ.weights = [], wQ.extras || (wQ.extras = {}), wQ.extras.targetNames = [];
          for (const QQ of sQ) wQ.weights.push(QQ.influence), wQ.extras.targetNames.push(QQ.name)
        }
        return XQ
      }
    }
    Cw._ExtensionNames = new Array, Cw._ExtensionFactories = {}, Cw._ExtensionOrders = {};
    class uw {
      static async GLTFAsync(QQ, WQ, XQ) {
        XQ && XQ.exportWithoutWaitingForScene || await QQ.whenReadyAsync();
        const wQ = new Cw(QQ, XQ),
          qQ = await wQ.generateGLTFAsync(WQ.replace(/\.[^/.]+$/, ""));
        return wQ.dispose(), qQ
      }
      static async GLBAsync(QQ, WQ, XQ) {
        XQ && XQ.exportWithoutWaitingForScene || await QQ.whenReadyAsync();
        const wQ = new Cw(QQ, XQ),
          qQ = await wQ.generateGLBAsync(WQ.replace(/\.[^/.]+$/, ""));
        return wQ.dispose(), qQ
      }
    }
    const Lw = "EXT_mesh_gpu_instancing";

    function kw(QQ, WQ) {
      const XQ = new Float32Array(3 * WQ);
      for (let wQ = 0; wQ < WQ; wQ++) XQ[3 * wQ + 0] = QQ[4 * wQ + 0], XQ[3 * wQ + 1] = QQ[4 * wQ + 1], XQ[3 * wQ + 2] = QQ[4 * wQ + 2];
      return XQ
    }
    class fw {
      constructor(QQ) {
        this.name = Lw, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(QQ, WQ, XQ, wQ, qQ, TQ) {
        return await new Promise((QQ => {
          if (WQ && XQ instanceof bw.d && XQ.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const QQ = kQ.s.Zero(),
              wQ = kQ.h.Identity(),
              zQ = kQ.s.One(),
              sQ = XQ.thinInstanceGetWorldMatrices(),
              FQ = kQ.m.vj[2],
              PQ = kQ.m.Quaternion[1],
              gQ = kQ.m.vj[3];
            let JQ = !1,
              rQ = !1,
              IQ = !1;
            const jQ = new Float32Array(3 * XQ.f_),
              BQ = new Float32Array(4 * XQ.f_),
              yQ = new Float32Array(3 * XQ.f_);
            let VQ = 0;
            for (const WQ of sQ) WQ.decompose(gQ, PQ, FQ), qQ && (nX(FQ), xX(PQ)), jQ.set(FQ.awQ(), 3 * VQ), BQ.set(PQ.normalize().awQ(), 4 * VQ), yQ.set(gQ.awQ(), 3 * VQ), JQ = JQ || !FQ.equalsWithEpsilon(QQ), rQ = rQ || !PQ.equalsWithEpsilon(wQ), IQ = IQ || !gQ.equalsWithEpsilon(zQ), VQ++;
            const DQ = {
              attributes: {}
            };
            JQ && (DQ.attributes.TRANSLATION = this._buildAccessor(jQ, "VEC3", XQ.f_, TQ)), rQ && (DQ.attributes.ROTATION = this._buildAccessor(BQ, "VEC4", XQ.f_, TQ)), IQ && (DQ.attributes.SCALE = this._buildAccessor(yQ, "VEC3", XQ.f_, TQ));
            let pQ = XQ._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (pQ) {
              const QQ = XQ.f_,
                WQ = "VEC3";
              XQ.hasVertexAlpha && pQ.length === 4 * QQ ? (this._instanceColorWarned || (lQ.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), pQ = kw(pQ, QQ)) : pQ.length === 4 * QQ && (pQ = kw(pQ, QQ)), pQ.length === 3 * QQ && (DQ.attributes._COLOR_0 = this._buildAccessor(pQ, WQ, QQ, TQ))
            }
            WQ.extensions = WQ.extensions || {}, WQ.extensions[Lw] = DQ
          }
          QQ(WQ)
        }))
      }
      _buildAccessor(QQ, WQ, XQ, wQ) {
        const qQ = wQ.createBufferView(QQ),
          TQ = wQ.createAccessor(qQ, WQ, 5126, XQ);
        return this._exporter._accessors.push(TQ), this._exporter._accessors.length - 1
      }
    }
    let Sw = !1;

    function tw() {
      Sw || (Sw = !0, Cw.RegisterExtension(Lw, (QQ => new fw(QQ))))
    }
    XQ(40732);
    tw();
    var ow = XQ(42100);

    function ew(QQ, WQ, XQ, wQ) {
      const qQ = QQ;
      let TQ = null,
        zQ = null,
        sQ = null,
        FQ = null;
      const PQ = {},
        gQ = WQ.find((QQ => "POSITION" === QQ.dracoName));
      if (!gQ) throw new Error("Draco: Missing position attribute for encoding.");
      if (!XQ) {
        const QQ = gQ.data.length / gQ.size;
        XQ = new(QQ > 65535 ? Uint32Array : Uint16Array)(QQ);
        for (let WQ = 0; WQ < QQ; WQ++) XQ[WQ] = WQ
      }
      try {
        TQ = new qQ.Encoder, zQ = new qQ.MeshBuilder, sQ = new qQ.Mesh, zQ.AddFacesToMesh(sQ, XQ.length / 3, XQ);
        const QQ = new Map([
          [Float32Array, (QQ, WQ, XQ, wQ, qQ, TQ) => QQ.AddFloatAttribute(WQ, XQ, wQ, qQ, TQ)],
          [Uint32Array, (QQ, WQ, XQ, wQ, qQ, TQ) => QQ.AddUInt32Attribute(WQ, XQ, wQ, qQ, TQ)],
          [Uint16Array, (QQ, WQ, XQ, wQ, qQ, TQ) => QQ.AddUInt16Attribute(WQ, XQ, wQ, qQ, TQ)],
          [Uint8Array, (QQ, WQ, XQ, wQ, qQ, TQ) => QQ.AddUInt8Attribute(WQ, XQ, wQ, qQ, TQ)],
          [Int32Array, (QQ, WQ, XQ, wQ, qQ, TQ) => QQ.AddInt32Attribute(WQ, XQ, wQ, qQ, TQ)],
          [Int16Array, (QQ, WQ, XQ, wQ, qQ, TQ) => QQ.AddInt16Attribute(WQ, XQ, wQ, qQ, TQ)],
          [Int8Array, (QQ, WQ, XQ, wQ, qQ, TQ) => QQ.AddInt8Attribute(WQ, XQ, wQ, qQ, TQ)]
        ]);
        for (const XQ of WQ) {
          XQ.data instanceof Uint8ClampedArray && (XQ.data = new Uint8Array(XQ.data));
          const WQ = QQ.get(XQ.data.constructor),
            FQ = XQ.data.length / XQ.size;
          PQ[XQ.kind] = WQ(zQ, sQ, qQ[XQ.dracoName], FQ, XQ.size, XQ.data), wQ.quantizationBits && wQ.quantizationBits[XQ.dracoName] && TQ.SetAttributeQuantization(qQ[XQ.dracoName], wQ.quantizationBits[XQ.dracoName])
        }
        wQ.method && TQ.SetEncodingMethod(qQ[wQ.method]), void 0 !== wQ.encodeSpeed && void 0 !== wQ.decodeSpeed && TQ.SetSpeedOptions(wQ.encodeSpeed, wQ.decodeSpeed), FQ = new qQ.DracoInt8Array;
        const gQ = TQ.EncodeMeshToDracoBuffer(sQ, FQ);
        if (gQ <= 0) throw new Error("Draco: Failed to encode.");
        const JQ = new Int8Array(gQ);
        for (let WQ = 0; WQ < gQ; WQ++) JQ[WQ] = FQ.GetValue(WQ);
        return {
          data: JQ,
          attributeIds: PQ
        }
      } finally {
        sQ && qQ.destroy(sQ), zQ && qQ.destroy(zQ), TQ && qQ.destroy(TQ), FQ && qQ.destroy(FQ)
      }
    }

    function nw() {
      let QQ;
      onmessage = WQ => {
        const XQ = WQ.data;
        switch (XQ.id) {
          case "init": {
            XQ.url && importScripts(XQ.url);
            const WQ = XQ.wasmBinary ? {
              wasmBinary: XQ.wasmBinary
            } : {};
            QQ = DracoEncoderModule(WQ), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!QQ) throw new Error("Draco: Encoder module is not available.");
            QQ.then((QQ => {
              const WQ = ew(QQ, XQ.attributes, XQ.indices, XQ.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: WQ
              }, WQ ? [WQ.data.buffer] : void 0)
            })).catch((QQ => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: QQ.message
              })
            }))
        }
      }
    }
    class xw {
      constructor(QQ) {
        if (QQ.workerPool) return void(this._workerPoolPromise = Promise.resolve(QQ.workerPool));
        const WQ = QQ.wasmBinary,
          XQ = QQ.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          wQ = XQ && "function" === typeof Worker && "function" === typeof URL,
          qQ = wQ || !QQ.jsModule,
          TQ = QQ.wasmUrl && QQ.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: qQ ? dW.g.GetBabylonScriptURL(QQ.wasmUrl, !0) : "",
            wasmBinaryPromise: WQ ? Promise.resolve(WQ) : dW.g.LoadFileAsync(dW.g.GetBabylonScriptURL(QQ.wasmBinaryUrl, !0))
          } : {
            url: qQ ? dW.g.GetBabylonScriptURL(QQ.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        wQ ? this._workerPoolPromise = TQ.wasmBinaryPromise.then((QQ => {
          const WQ = this._getWorkerContent(),
            wQ = URL.createObjectURL(new Blob([WQ], {
              type: "application/javascript"
            }));
          return new ow.e(XQ, (() => async function(QQ, WQ, XQ) {
            return await new Promise(((wQ, qQ) => {
              const TQ = WQ => {
                  QQ.removeEventListener("error", TQ), QQ.removeEventListener("message", zQ), qQ(WQ)
                },
                zQ = WQ => {
                  "initDone" === WQ.data.id && (QQ.removeEventListener("error", TQ), QQ.removeEventListener("message", zQ), wQ(QQ))
                };
              if (QQ.addEventListener("error", TQ), QQ.addEventListener("message", zQ), WQ) {
                const wQ = WQ.slice(0);
                QQ.postMessage({
                  id: "init",
                  url: XQ,
                  wasmBinary: wQ
                }, [wQ])
              } else QQ.postMessage({
                id: "init",
                url: XQ
              })
            }))
          }(new Worker(wQ), QQ, TQ.url)))
        })) : this._modulePromise = TQ.wasmBinaryPromise.then((async WQ => {
          if (!this._isModuleAvailable() && !QQ.jsModule) {
            if (!TQ.url) throw new Error("Draco codec module is not available");
            await dW.g.LoadBabylonScriptAsync(TQ.url)
          }
          return await this._createModuleAsync(WQ, QQ.jsModule)
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

    function Yw() {
      const QQ = QQ => !!QQ && "object" === typeof QQ;
      for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
      return XQ.reduce(((WQ, XQ) => {
        const wQ = Object.keys(XQ);
        for (const qQ of wQ) {
          const wQ = WQ[qQ],
            TQ = XQ[qQ];
          Array.isArray(wQ) && Array.isArray(TQ) ? WQ[qQ] = wQ.concat(TQ) : QQ(wQ) && QQ(TQ) ? WQ[qQ] = Yw(wQ, TQ) : WQ[qQ] = TQ
        }
        return WQ
      }), {})
    }

    function Nw(QQ) {
      return QQ === fQ.l.PositionKind ? "POSITION" : QQ === fQ.l.NormalKind ? "NORMAL" : QQ === fQ.l.ColorKind ? "COLOR" : QQ.startsWith(fQ.l.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const Zw = {
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
    class Ow extends xw {
      static get DefaultAvailable() {
        return !!((QQ = Ow.DefaultConfiguration).wasmUrl && (QQ.wasmBinary || QQ.wasmBinaryUrl) && "object" === typeof WebAssembly || QQ.fallbackUrl);
        var QQ
      }
      static get Default() {
        return Ow._Default ?? (Ow._Default = new Ow), Ow._Default
      }
      static ResetDefault(QQ) {
        Ow._Default && (QQ || Ow._Default.dispose(), Ow._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(QQ, WQ) {
        return {
          module: await (WQ || DracoEncoderModule)({
            wasmBinary: QQ
          })
        }
      }
      _getWorkerContent() {
        return `${ew}(${nw})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ow.DefaultConfiguration)
      }
      async _encodeAsync(QQ, WQ, XQ) {
        const wQ = XQ ? Yw(Zw, XQ) : Zw;
        if (this._workerPoolPromise) {
          const XQ = await this._workerPoolPromise;
          return await new Promise(((qQ, TQ) => {
            XQ.push(((XQ, zQ) => {
              const sQ = QQ => {
                  XQ.removeEventListener("error", sQ), XQ.removeEventListener("message", FQ), TQ(QQ), zQ()
                },
                FQ = QQ => {
                  "encodeMeshSuccess" === QQ.data.id ? (XQ.removeEventListener("error", sQ), XQ.removeEventListener("message", FQ), qQ(QQ.data.encodedMeshData), zQ()) : "encodeMeshError" === QQ.data.id && (XQ.removeEventListener("error", sQ), XQ.removeEventListener("message", FQ), TQ(new Error(QQ.data.errorMessage)), zQ())
                };
              XQ.addEventListener("error", sQ), XQ.addEventListener("message", FQ);
              const PQ = [];
              for (const WQ of QQ) PQ.push(WQ.data.buffer);
              WQ && PQ.push(WQ.buffer), XQ.postMessage({
                id: "encodeMesh",
                attributes: QQ,
                indices: WQ,
                options: wQ
              }, PQ)
            }))
          }))
        }
        if (this._modulePromise) {
          return ew((await this._modulePromise).module, QQ, WQ, wQ)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(QQ, WQ) {
        if (0 == QQ.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        QQ instanceof bw.d && QQ.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === WQ?.method && (lQ.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), WQ.method = "MESH_SEQUENTIAL_ENCODING");
        const XQ = function(QQ) {
            let WQ = QQ.lwQ(void 0, !0);
            return !WQ || WQ instanceof Uint32Array || WQ instanceof Uint16Array || (WQ = ((0, cX.e)(WQ, WQ.length) ? Uint32Array : Uint16Array).from(WQ)), WQ
          }(QQ),
          wQ = function(QQ, WQ) {
            const XQ = [];
            for (const wQ of QQ.getVerticesDataKinds()) {
              if (WQ?.includes(wQ)) {
                if (wQ === fQ.l.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const qQ = QQ.getVertexBuffer(wQ),
                TQ = qQ.getSize(),
                zQ = (0, cX.w)(qQ.getData(), TQ, qQ.type, qQ.byteOffset, qQ.byteStride, QQ.getTotalVertices(), !0);
              XQ.push({
                kind: wQ,
                dracoName: Nw(wQ),
                size: TQ,
                data: zQ
              })
            }
            return XQ
          }(QQ, WQ?.excludedAttributes);
        return await this._encodeAsync(wQ, XQ, WQ)
      }
    }
    Ow.DefaultConfiguration = {
      wasmUrl: `${dW.g._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${dW.g._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${dW.g._DefaultCdnUrl}/draco_encoder.js`
    }, Ow._Default = null;
    const Kw = "KHR_draco_mesh_compression";
    class mw {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(QQ) {
        this.name = Kw, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === QQ.options.meshCompressionMethod && Ow.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(QQ, WQ, XQ) {
        if (!this.enabled) return;
        if (4 !== QQ.mode && 5 !== QQ.mode) return void lQ.b.Warn("Cannot compress primitive with mode " + QQ.mode + ".");
        const wQ = [],
          qQ = [];
        let TQ = null;
        if (void 0 !== QQ.indices) {
          const zQ = XQ[QQ.indices],
            sQ = WQ.getBufferView(zQ);
          TQ = WQ.getData(sQ).slice(), wQ.push(sQ), qQ.push(zQ)
        }
        const zQ = [];
        for (const [gQ, JQ] of Object.entries(QQ.attributes)) {
          const QQ = XQ[JQ],
            TQ = WQ.getBufferView(QQ),
            FQ = tX(QQ.type),
            PQ = (0, cX.w)(WQ.getData(TQ), FQ, QQ.componentType, QQ.byteOffset || 0, TQ.byteStride || (0, cX.t)(QQ.componentType) * FQ, QQ.count, !0);
          zQ.push({
            kind: gQ,
            dracoName: (sQ = gQ, "POSITION" === sQ ? "POSITION" : "NORMAL" === sQ ? "NORMAL" : sQ.startsWith("COLOR") ? "COLOR" : sQ.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: tX(QQ.type),
            data: PQ
          }), wQ.push(TQ), qQ.push(QQ)
        }
        var sQ;
        const FQ = {
            method: QQ.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          PQ = Ow.Default._encodeAsync(zQ, TQ, FQ).then((XQ => {
            const TQ = {
                bufferView: -1,
                attributes: XQ.attributeIds
              },
              zQ = WQ.createBufferView(XQ.data);
            WQ.setBufferView(TQ, zQ);
            for (const QQ of wQ) this._bufferViewsUsed.add(QQ);
            for (const QQ of qQ) this._accessorsUsed.add(QQ);
            QQ.extensions || (QQ.extensions = {}), QQ.extensions[Kw] = TQ
          })).catch((QQ => {
            lQ.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + QQ.message)
          }));
        this._encodePromises.push(PQ), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(QQ) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((WQ => {
          QQ.getPropertiesWithBufferView(WQ).every((QQ => this._accessorsUsed.has(QQ))) && QQ.removeBufferView(WQ)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let Mw = !1;

    function Qq() {
      Mw || (Mw = !0, Cw.RegisterExtension(Kw, (QQ => new mw(QQ))))
    }
    Qq();
    var Wq = XQ(41824);
    const Xq = "KHR_lights_punctual",
      wq = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      qq = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      Tq = kQ.s.Backward();
    class zq {
      constructor(QQ) {
        this.name = Xq, this.enabled = !0, this.required = !1, this._exporter = QQ
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Xq] = this._lights
      }
      async postExportNodeAsync(QQ, WQ, XQ, wQ, qQ) {
        return await new Promise((TQ => {
          if (!(XQ instanceof gw.d)) return void TQ(WQ);
          const zQ = XQ.getTypeID() == gw.d.LIGHTTYPEID_POINTLIGHT ? "point" : XQ.getTypeID() == gw.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : XQ.getTypeID() == gw.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!zQ || !(XQ instanceof Wq.e)) return lQ.b.Warn(`${QQ}: Light ${XQ.name} is not supported in ${Xq}`), void TQ(WQ);
          if (XQ.falloffType !== gw.d.FALLOFF_GLTF && lQ.b.Warn(`${QQ}: Light falloff for ${XQ.name} does not match the ${Xq} specification!`), !XQ.position.PsQ(0, 0, 0)) {
            const QQ = kQ.m.vj[0].WH(XQ.position);
            qQ && nX(QQ), WQ.translation = QQ.awQ()
          }
          if ("point" !== zQ) {
            const QQ = XQ.direction.normalizeToRef(kQ.m.vj[0]);
            qQ && nX(QQ);
            const wQ = kQ.h.FromUnitVectorsToRef(Tq, QQ, kQ.m.Quaternion[0]);
            kQ.h.IsIdentity(wQ) || (WQ.rotation = wQ.awQ())
          }
          const sQ = {
            type: zQ,
            name: XQ.name,
            color: XQ.diffuse.awQ(),
            intensity: XQ.intensity,
            range: XQ.range
          };
          if (KX(sQ, wq), "spot" === zQ) {
            const QQ = XQ;
            sQ.spot = {
              innerConeAngle: QQ.innerAngle / 2,
              outerConeAngle: QQ.angle / 2
            }, KX(sQ.spot, qq)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(sQ);
          const FQ = {
              light: this._lights.lights.length - 1
            },
            PQ = XQ.parent;
          if (PQ && ZX(XQ, PQ)) {
            const QQ = wQ.get(PQ);
            if (QQ) {
              const XQ = this._exporter._nodes[QQ];
              return NX(WQ, XQ), XQ.extensions || (XQ.extensions = {}), XQ.extensions[Xq] = FQ, void TQ(null)
            }
          }
          WQ.extensions || (WQ.extensions = {}), WQ.extensions[Xq] = FQ, TQ(WQ)
        }))
      }
    }
    let sq = !1;

    function Fq() {
      sq || (sq = !0, Cw.RegisterExtension(Xq, (QQ => new zq(QQ))))
    }
    Fq();
    const Pq = "KHR_interactivity";
    class gq {
      constructor(QQ) {
        this._exporter = QQ, this.name = Pq, this.enabled = !!QQ.options.khrInteractivity, this.required = QQ.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var QQ, WQ, XQ;
        const wQ = this._exporter.options.khrInteractivity;
        if (!wQ) return;
        const qQ = wQ.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: QQ => this._exporter._getNodeIndex(QQ),
          getAnimationIndex: QQ => this._exporter._getAnimationIndex(QQ),
          getCameraIndex: QQ => this._exporter._getCameraIndex(QQ),
          getMaterialIndex: QQ => this._exporter._getMaterialIndex(QQ),
          getRootIndex: (QQ, WQ) => this._exporter._getRootIndex(QQ, WQ),
          setNodeExtension: (QQ, WQ, XQ) => this._exporter._setNodeExtension(QQ, WQ, XQ)
        });
        this._exporter._glTF.extensions[Pq] = qQ;
        for (const TQ of wQ.additionalExtensionsUsed)(QQ = this._exporter._glTF).extensionsUsed || (QQ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(TQ) && this._exporter._glTF.extensionsUsed.push(TQ);
        for (const TQ of wQ.additionalExtensionsRequired)(WQ = this._exporter._glTF).extensionsUsed || (WQ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(TQ) && this._exporter._glTF.extensionsUsed.push(TQ), (XQ = this._exporter._glTF).extensionsRequired || (XQ.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(TQ) && this._exporter._glTF.extensionsRequired.push(TQ)
      }
    }
    let Jq = !1;

    function rq() {
      Jq || (Jq = !0, Cw.RegisterExtension(Pq, (QQ => new gq(QQ)), 200))
    }
    rq();
    const Iq = "EXT_lights_area",
      jq = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      Bq = {
        aspect: 1
      },
      yq = kQ.s.Backward();
    class Vq {
      constructor(QQ) {
        this.name = Iq, this.enabled = !0, this.required = !1, this._exporter = QQ
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Iq] = this._lights
      }
      async postExportNodeAsync(QQ, WQ, XQ, wQ, qQ) {
        return await new Promise((TQ => {
          if (!(XQ instanceof gw.d)) return void TQ(WQ);
          const zQ = XQ.getTypeID() == gw.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!zQ) return lQ.b.Warn(`${QQ}: Light ${XQ.name} is not supported in ${Iq}`), void TQ(WQ);
          const sQ = XQ;
          if (sQ.falloffType !== gw.d.FALLOFF_GLTF && lQ.b.Warn(`${QQ}: Light falloff for ${XQ.name} does not match the ${Iq} specification!`), !sQ.position.PsQ(0, 0, 0)) {
            const QQ = kQ.m.vj[0].WH(sQ.position);
            qQ && nX(QQ), WQ.translation = QQ.awQ()
          }
          const FQ = kQ.s.Forward();
          qQ && nX(FQ);
          const PQ = kQ.h.FromUnitVectorsToRef(yq, FQ, kQ.m.Quaternion[0]);
          kQ.h.IsIdentity(PQ) || (WQ.rotation = PQ.awQ());
          const gQ = {
            type: zQ,
            name: sQ.name,
            color: sQ.diffuse.awQ(),
            intensity: sQ.intensity,
            size: sQ.height,
            rect: {
              aspect: sQ.width / sQ.height
            }
          };
          KX(gQ, jq), gQ.rect && KX(gQ.rect, Bq), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(gQ);
          const JQ = {
              light: this._lights.lights.length - 1
            },
            rQ = XQ.parent;
          if (rQ && ZX(sQ, rQ)) {
            const QQ = wQ.get(rQ);
            if (QQ) {
              const XQ = this._exporter._nodes[QQ];
              return NX(WQ, XQ), XQ.extensions || (XQ.extensions = {}), XQ.extensions[Iq] = JQ, void TQ(null)
            }
          }
          WQ.extensions || (WQ.extensions = {}), WQ.extensions[Iq] = JQ, TQ(WQ)
        }))
      }
    }
    let Dq = !1;

    function pq() {
      Dq || (Dq = !0, Cw.RegisterExtension(Iq, (QQ => new Vq(QQ))))
    }
    pq();
    const Gq = "KHR_materials_anisotropy";
    class Uq {
      constructor(QQ) {
        this.name = Gq, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        const wQ = [];
        if (XQ instanceof bW) {
          if (XQ.anisotropy.isEnabled && !XQ.anisotropy.legacy) return XQ.anisotropy.texture && wQ.push(XQ.anisotropy.texture), wQ
        } else if (XQ instanceof mW && XQ.specularRoughnessAnisotropy > 0) {
          const QQ = function(QQ) {
            const WQ = QQ.specularRoughnessAnisotropyTexture,
              XQ = QQ.geometryTangentTexture;
            return `${WQ&&WQ.getInternalTexture()?WQ.getInternalTexture().uniqueId:"NoStrength"}_${XQ&&XQ.getInternalTexture()?XQ.getInternalTexture().uniqueId:"NoTangent"}`
          }(XQ);
          if (this._anisoTexturesMap[QQ]) wQ.push(this._anisoTexturesMap[QQ]);
          else {
            const WQ = await async function(QQ) {
              const WQ = QQ.sE(),
                XQ = QQ.specularRoughnessAnisotropyTexture,
                wQ = QQ.geometryTangentTexture;
              return XQ || wQ ? await zX("AnisotropyTexture", PX(wQ ? sX(wQ, 0) : FX(1), wQ ? sX(wQ, 1) : FX(0), XQ ? sX(XQ, 0) : FX(1)), WQ) : null
            }(XQ);
            WQ && (wQ.push(WQ), this._anisoTexturesMap[QQ] = WQ)
          }
          return wQ
        }
        return []
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          var wQ;
          if (XQ instanceof bW) {
            if (!XQ.anisotropy.isEnabled || XQ.anisotropy.legacy) return void QQ(WQ);
            this._wasUsed = !0, WQ.extensions = WQ.extensions || {};
            const wQ = this._exporter._materialExporter.getTextureInfo(XQ.anisotropy.texture),
              qQ = {
                anisotropyStrength: XQ.anisotropy.intensity,
                anisotropyRotation: XQ.anisotropy.angle,
                anisotropyTexture: wQ ?? void 0
              };
            null !== qQ.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[Gq] = qQ
          } else if (XQ instanceof mW && XQ.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, WQ.extensions = WQ.extensions || {};
            let qQ = XQ.specularRoughnessTexture;
            XQ._useRoughnessFromMetallicTextureGreen && (qQ = XQ.baseMetalnessTexture);
            const TQ = this._anisoTexturesMap[XQ.id];
            if (!qQ && !TQ) {
              let wQ = XQ.specularRoughness,
                qQ = XQ.specularRoughnessAnisotropy;
              if (!XQ._useGltfStyleAnisotropy) {
                const QQ = function(QQ, WQ) {
                  const XQ = QQ * QQ,
                    wQ = XQ * Math.sqrt(2 / (1 + (1 - WQ) * (1 - WQ))),
                    qQ = (1 - WQ) * wQ;
                  return {
                    newBaseRoughness: Math.sqrt(qQ),
                    newAnisotropyStrength: Math.min(Math.sqrt((wQ - XQ) / Math.max(1 - XQ, 1e-4)), 1)
                  }
                }(XQ.specularRoughness, XQ.specularRoughnessAnisotropy);
                wQ = QQ.newBaseRoughness, qQ = QQ.newAnisotropyStrength
              }
              WQ.pbrMetallicRoughness && (WQ.pbrMetallicRoughness.roughnessFactor = wQ);
              const TQ = {
                anisotropyStrength: qQ,
                anisotropyRotation: XQ.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return WQ.extensions[Gq] = TQ, QQ(WQ)
            }
            const zQ = TQ ? this._exporter._materialExporter.getTextureInfo(TQ) : null,
              sQ = {
                anisotropyStrength: XQ.specularRoughnessAnisotropy,
                anisotropyRotation: XQ.geometryTangentAngle,
                anisotropyTexture: zQ || void 0,
                extensions: {}
              };
            XQ._useGltfStyleAnisotropy || (WQ.extensions.KHR_materials_openpbr = {}, (wQ = this._exporter._glTF).extensionsUsed || (wQ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[Gq] = sQ
          }
          QQ(WQ)
        }))
      }
    }
    let bq = !1;

    function vq() {
      bq || (bq = !0, Cw.RegisterExtension(Gq, (QQ => new Uq(QQ))))
    }
    vq();
    const dq = "KHR_materials_clearcoat";

    function Hq(QQ, WQ) {
      const XQ = new iQ.g(WQ.name, WQ.sE());
      return XQ._texture = QQ, XQ.coordinatesIndex = WQ.coordinatesIndex, WQ instanceof iQ.g && (XQ.uOffset = WQ.uOffset, XQ.vOffset = WQ.vOffset, XQ.uScale = WQ.uScale, XQ.vScale = WQ.vScale, XQ.wAng = WQ.wAng), XQ.wrapU = WQ.wrapU, XQ.wrapV = WQ.wrapV, XQ
    }
    class aq {
      constructor(QQ) {
        this.name = dq, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = QQ
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
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        const wQ = [];
        if (XQ instanceof bW) {
          if (XQ.clearCoat.isEnabled) return XQ.clearCoat.texture && wQ.push(XQ.clearCoat.texture), !XQ.clearCoat.useRoughnessFromMainTexture && XQ.clearCoat.textureRoughness && wQ.push(XQ.clearCoat.textureRoughness), XQ.clearCoat.bumpTexture && wQ.push(XQ.clearCoat.bumpTexture), wQ
        } else if (XQ instanceof mW && XQ.coatWeight > 0) {
          let QQ = !1;
          if (XQ.coatWeightTexture ? XQ.coatRoughnessTexture ? XQ._useCoatRoughnessFromGreenChannel && XQ.coatWeightTexture.getInternalTexture() === XQ.coatRoughnessTexture.getInternalTexture() ? (wQ.push(XQ.coatWeightTexture), wQ.push(XQ.coatRoughnessTexture)) : QQ = !0 : wQ.push(XQ.coatWeightTexture) : XQ.coatRoughnessTexture && (XQ._useCoatRoughnessFromGreenChannel ? wQ.push(XQ.coatRoughnessTexture) : QQ = !0), QQ) {
            const QQ = function(QQ) {
              const WQ = QQ.coatWeightTexture,
                XQ = WQ && WQ.getInternalTexture() ? WQ.getInternalTexture().uniqueId : "NoCoat",
                wQ = QQ.coatRoughnessTexture;
              return `${XQ}_${wQ&&wQ.getInternalTexture()?wQ.getInternalTexture().uniqueId:"NoRoughness"}`
            }(XQ);
            if (!this._cachedInternalTexturesMap[QQ]) {
              const WQ = await async function(QQ) {
                const WQ = QQ.sE(),
                  XQ = QQ.coatWeightTexture,
                  wQ = QQ.coatRoughnessTexture;
                return XQ || wQ ? (await zX("CoatTexture", PX(XQ ? sX(XQ, 0) : FX(1), wQ ? sX(wQ, QQ._useCoatRoughnessFromGreenChannel ? 1 : 0) : FX(1)), WQ)).getInternalTexture() : null
              }(XQ);
              WQ && (this._cachedInternalTexturesMap[QQ] = WQ)
            }
            this._cachedInternalTexturesMap[QQ] && (XQ.coatWeightTexture && (this._mergedTexturesMap[XQ.coatWeightTexture.uniqueId] = Hq(this._cachedInternalTexturesMap[QQ], XQ.coatWeightTexture), wQ.push(this._mergedTexturesMap[XQ.coatWeightTexture.uniqueId])), XQ.coatRoughnessTexture && (this._mergedTexturesMap[XQ.coatRoughnessTexture.uniqueId] = Hq(this._cachedInternalTexturesMap[QQ], XQ.coatRoughnessTexture), wQ.push(this._mergedTexturesMap[XQ.coatRoughnessTexture.uniqueId])))
          }
          return XQ.geometryCoatNormalTexture && wQ.push(XQ.geometryCoatNormalTexture), wQ
        }
        return []
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          if (XQ instanceof bW) {
            if (!XQ.clearCoat.isEnabled) return void QQ(WQ);
            this._wasUsed = !0, WQ.extensions = WQ.extensions || {};
            const wQ = this._exporter._materialExporter.getTextureInfo(XQ.clearCoat.texture);
            let qQ;
            qQ = XQ.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(XQ.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(XQ.clearCoat.textureRoughness), XQ.clearCoat.isTintEnabled && dW.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${XQ.name}`), XQ.clearCoat.remapF0OnInterfaceChange && dW.g.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${XQ.name}`);
            const TQ = this._exporter._materialExporter.getTextureInfo(XQ.clearCoat.bumpTexture),
              zQ = {
                clearcoatFactor: XQ.clearCoat.intensity,
                clearcoatTexture: wQ ?? void 0,
                clearcoatRoughnessFactor: XQ.clearCoat.roughness,
                clearcoatRoughnessTexture: qQ ?? void 0,
                clearcoatNormalTexture: TQ ?? void 0
              };
            null === zQ.clearcoatTexture && null === zQ.clearcoatRoughnessTexture && null === zQ.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[dq] = zQ
          } else if (XQ instanceof mW) {
            if (0 == XQ.coatWeight) return void QQ(WQ);
            let wQ, qQ, TQ, zQ;
            this._wasUsed = !0, WQ.extensions = WQ.extensions || {}, XQ.coatWeightTexture && (wQ = this._mergedTexturesMap[XQ.coatWeightTexture.uniqueId], qQ = this._exporter._materialExporter.getTextureInfo(wQ)), XQ.coatRoughnessTexture && (TQ = this._mergedTexturesMap[XQ.coatRoughnessTexture.uniqueId], zQ = this._exporter._materialExporter.getTextureInfo(TQ)), XQ.coatColorTexture && dW.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${XQ.name}`);
            const sQ = this._exporter._materialExporter.getTextureInfo(XQ.geometryCoatNormalTexture),
              FQ = {
                clearcoatFactor: XQ.coatWeight,
                clearcoatTexture: qQ ?? void 0,
                clearcoatRoughnessFactor: XQ.coatRoughness,
                clearcoatRoughnessTexture: zQ ?? void 0,
                clearcoatNormalTexture: sQ ?? void 0
              };
            null === FQ.clearcoatTexture && null === FQ.clearcoatRoughnessTexture && null === FQ.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[dq] = FQ
          }
          QQ(WQ)
        }))
      }
    }
    let lq = !1;

    function hq() {
      lq || (lq = !0, Cw.RegisterExtension(dq, (QQ => new aq(QQ))))
    }
    hq();
    const iq = "KHR_materials_coat";

    function cq(QQ) {
      const WQ = QQ.coatRoughnessAnisotropyTexture,
        XQ = QQ.geometryCoatTangentTexture;
      return `${WQ&&WQ.getInternalTexture()?WQ.getInternalTexture().uniqueId:"NoStrength"}_${XQ&&XQ.getInternalTexture()?XQ.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Aq(QQ, WQ) {
      const XQ = new iQ.g(WQ.name, WQ.sE());
      return XQ._texture = QQ, XQ.coordinatesIndex = WQ.coordinatesIndex, WQ instanceof iQ.g && (XQ.uOffset = WQ.uOffset, XQ.vOffset = WQ.vOffset, XQ.uScale = WQ.uScale, XQ.vScale = WQ.vScale, XQ.wAng = WQ.wAng), XQ.wrapU = WQ.wrapU, XQ.wrapV = WQ.wrapV, XQ
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
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        const wQ = [];
        if (XQ instanceof bW) {
          if (XQ.clearCoat.isEnabled) return XQ.clearCoat.texture && wQ.push(XQ.clearCoat.texture), !XQ.clearCoat.useRoughnessFromMainTexture && XQ.clearCoat.textureRoughness && wQ.push(XQ.clearCoat.textureRoughness), XQ.clearCoat.bumpTexture && wQ.push(XQ.clearCoat.bumpTexture), XQ.clearCoat.tintTexture && wQ.push(XQ.clearCoat.tintTexture), wQ
        } else if (XQ instanceof mW && XQ.coatWeight > 0) {
          let QQ = !1;
          if (XQ.coatWeightTexture ? XQ.coatRoughnessTexture ? XQ._useCoatRoughnessFromGreenChannel && XQ.coatWeightTexture.getInternalTexture() === XQ.coatRoughnessTexture.getInternalTexture() ? (wQ.push(XQ.coatWeightTexture), wQ.push(XQ.coatRoughnessTexture)) : QQ = !0 : wQ.push(XQ.coatWeightTexture) : XQ.coatRoughnessTexture && (XQ._useCoatRoughnessFromGreenChannel ? wQ.push(XQ.coatRoughnessTexture) : QQ = !0), QQ) {
            const QQ = function(QQ) {
              const WQ = QQ.coatWeightTexture,
                XQ = WQ && WQ.getInternalTexture() ? WQ.getInternalTexture().uniqueId : "NoCoat",
                wQ = QQ.coatRoughnessTexture;
              return `${XQ}_${wQ&&wQ.getInternalTexture()?wQ.getInternalTexture().uniqueId:"NoRoughness"}`
            }(XQ);
            if (!this._cachedInternalTexturesMap[QQ]) {
              const WQ = await async function(QQ) {
                const WQ = QQ.sE(),
                  XQ = QQ.coatWeightTexture,
                  wQ = QQ.coatRoughnessTexture;
                return XQ || wQ ? (await zX("CoatTexture", PX(XQ ? sX(XQ, 0) : FX(1), wQ ? sX(wQ, QQ._useCoatRoughnessFromGreenChannel ? 1 : 0) : FX(1)), WQ)).getInternalTexture() : null
              }(XQ);
              WQ && (this._cachedInternalTexturesMap[QQ] = WQ)
            }
            this._cachedInternalTexturesMap[QQ] && (XQ.coatWeightTexture && (this._mergedTexturesMap[XQ.coatWeightTexture.uniqueId] = Aq(this._cachedInternalTexturesMap[QQ], XQ.coatWeightTexture), wQ.push(this._mergedTexturesMap[XQ.coatWeightTexture.uniqueId])), XQ.coatRoughnessTexture && (this._mergedTexturesMap[XQ.coatRoughnessTexture.uniqueId] = Aq(this._cachedInternalTexturesMap[QQ], XQ.coatRoughnessTexture), wQ.push(this._mergedTexturesMap[XQ.coatRoughnessTexture.uniqueId])))
          }
          if (XQ.geometryCoatNormalTexture && wQ.push(XQ.geometryCoatNormalTexture), XQ.coatColorTexture && wQ.push(XQ.coatColorTexture), XQ.coatRoughnessAnisotropy > 0) {
            const QQ = cq(XQ);
            if (this._mergedTexturesMap[QQ]) wQ.push(this._mergedTexturesMap[QQ]);
            else {
              const WQ = await async function(QQ) {
                const WQ = QQ.sE(),
                  XQ = QQ.coatRoughnessAnisotropyTexture,
                  wQ = QQ.geometryCoatTangentTexture;
                return XQ || wQ ? await zX("AnisotropyTexture", PX(wQ ? sX(wQ, 0) : FX(1), wQ ? sX(wQ, 1) : FX(0), XQ ? sX(XQ, 0) : FX(1)), WQ) : null
              }(XQ);
              WQ && (wQ.push(WQ), this._mergedTexturesMap[QQ] = WQ)
            }
            return wQ
          }
          return wQ
        }
        return []
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          var wQ;
          if (XQ instanceof bW) {
            if (!XQ.clearCoat.isEnabled) return void QQ(WQ);
            this._wasUsed = !0, WQ.extensions = WQ.extensions || {};
            const wQ = this._exporter._materialExporter.getTextureInfo(XQ.clearCoat.texture);
            let qQ, TQ;
            qQ = XQ.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(XQ.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(XQ.clearCoat.textureRoughness), XQ.clearCoat.isTintEnabled && (TQ = this._exporter._materialExporter.getTextureInfo(XQ.clearCoat.tintTexture));
            const zQ = this._exporter._materialExporter.getTextureInfo(XQ.clearCoat.bumpTexture),
              sQ = XQ.clearCoat.indexOfRefraction,
              FQ = {
                coatFactor: XQ.clearCoat.intensity,
                coatTexture: wQ ?? void 0,
                coatRoughnessFactor: XQ.clearCoat.roughness,
                coatRoughnessTexture: qQ ?? void 0,
                coatNormalTexture: zQ ?? void 0,
                coatColorFactor: XQ.clearCoat.tintColor.awQ(),
                coatColorTexture: TQ ?? void 0,
                coatIor: 1.5 !== sQ ? sQ : void 0
              };
            null === FQ.coatTexture && null === FQ.coatRoughnessTexture && null === FQ.coatRoughnessTexture && null === FQ.coatColorTexture || this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[iq] = FQ
          } else if (XQ instanceof mW) {
            if (0 == XQ.coatWeight) return void QQ(WQ);
            let qQ, TQ, zQ, sQ;
            this._wasUsed = !0, WQ.extensions = WQ.extensions || {}, XQ.coatWeightTexture && (qQ = this._mergedTexturesMap[XQ.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[XQ.coatWeightTexture.uniqueId] : XQ.coatWeightTexture, TQ = this._exporter._materialExporter.getTextureInfo(qQ)), XQ.coatRoughnessTexture && (zQ = this._mergedTexturesMap[XQ.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[XQ.coatRoughnessTexture.uniqueId] : XQ.coatRoughnessTexture, sQ = this._exporter._materialExporter.getTextureInfo(zQ));
            const FQ = this._exporter._materialExporter.getTextureInfo(XQ.geometryCoatNormalTexture),
              PQ = this._exporter._materialExporter.getTextureInfo(XQ.coatColorTexture),
              gQ = XQ.coatIor,
              JQ = XQ.coatDarkening,
              rQ = XQ.coatRoughnessTexture,
              IQ = cq(XQ),
              jQ = this._mergedTexturesMap[IQ];
            let BQ, yQ = 0,
              VQ = 0;
            if (XQ.coatRoughnessAnisotropy > 0) {
              if (rQ || jQ) {
                const QQ = jQ ? this._exporter._materialExporter.getTextureInfo(jQ) : null;
                yQ = XQ.coatRoughnessAnisotropy, VQ = XQ.geometryCoatTangentAngle, BQ = QQ || void 0
              } else {
                let QQ = XQ.coatRoughness,
                  wQ = XQ.coatRoughnessAnisotropy;
                if (!XQ._useGltfStyleAnisotropy) {
                  const WQ = function(QQ, WQ) {
                    const XQ = QQ * QQ,
                      wQ = XQ * Math.sqrt(2 / (1 + (1 - WQ) * (1 - WQ))),
                      qQ = (1 - WQ) * wQ;
                    return {
                      newBaseRoughness: Math.sqrt(qQ),
                      newAnisotropyStrength: Math.min(Math.sqrt((wQ - XQ) / Math.max(1 - XQ, 1e-4)), 1)
                    }
                  }(XQ.coatRoughness, XQ.coatRoughnessAnisotropy);
                  QQ = WQ.newBaseRoughness, wQ = WQ.newAnisotropyStrength
                }
                WQ.pbrMetallicRoughness && (WQ.pbrMetallicRoughness.roughnessFactor = QQ), yQ = wQ, VQ = XQ.geometryCoatTangentAngle + .5 * Math.PI, BQ = void 0
              }
              XQ._useGltfStyleAnisotropy || (WQ.extensions.KHR_materials_openpbr = {}, (wQ = this._exporter._glTF).extensionsUsed || (wQ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const DQ = {
              coatFactor: XQ.coatWeight,
              coatTexture: TQ ?? void 0,
              coatRoughnessFactor: XQ.coatRoughness,
              coatRoughnessTexture: sQ ?? void 0,
              coatNormalTexture: FQ ?? void 0,
              coatColorFactor: XQ.coatColor.awQ(),
              coatColorTexture: PQ ?? void 0,
              coatIor: 1.5 !== gQ ? gQ : void 0,
              coatDarkeningFactor: 1 !== JQ ? JQ : void 0,
              coatAnisotropyRotation: VQ,
              coatAnisotropyStrength: yQ,
              coatAnisotropyTexture: BQ
            };
            null === DQ.coatTexture && null === DQ.coatRoughnessTexture && null === DQ.coatRoughnessTexture && null === DQ.coatAnisotropyTexture && null === DQ.coatColorTexture || this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[iq] = DQ
          }
          QQ(WQ)
        }))
      }
    }
    let Eq = !1;

    function Cq() {
      Eq || (Eq = !0, Cw.RegisterExtension(iq, (QQ => new Rq(QQ))))
    }
    Cq();
    let uq = (() => {
      var QQ, WQ, XQ, wQ, qQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, lQ, hQ, iQ, cQ, AQ, RQ, CQ, uQ, LQ, kQ, fQ, SQ, tQ, oQ, eQ, nQ, YQ, NQ, ZQ, OQ, KQ, mQ, MQ, QW, WW, XW, wW, qW, TW, zW, sW, FW, PW, gW, JW, rW, IW, jW, BW, yW, VW, DW, pW;
      let GW, UW, dW, HW, aW, lW, hW, iW, cW, AW, RW, EW, CW, uW, LW, kW, fW, SW, tW, oW, eW, nW, xW, YW, NW, ZW, OW, KW, mW, MW, QX, WX, XX, wX, qX, TX, zX, sX, FX, PX, gX, JX, rX, IX, jX, BX, yX, VX, DX, pX, GX, UX, bX, vX, dX, HX, aX, lX, hX, iX, cX, AX, RX, EX, CX, uX, LX, kX, fX = bW,
        SX = [],
        tX = [],
        oX = [],
        eX = [],
        nX = [],
        xX = [],
        YX = [],
        NX = [],
        ZX = [],
        OX = [],
        KX = [],
        mX = [],
        MX = [],
        Qw = [],
        Ww = [],
        Xw = [],
        ww = [],
        qw = [],
        Tw = [],
        zw = [],
        sw = [],
        Fw = [],
        Pw = [],
        gw = [],
        Jw = [],
        rw = [],
        Iw = [],
        jw = [],
        Bw = [],
        yw = [],
        Vw = [],
        Dw = [],
        pw = [],
        Gw = [],
        Uw = [],
        bw = [],
        vw = [],
        dw = [],
        Hw = [],
        aw = [],
        lw = [],
        hw = [],
        iw = [],
        Aw = [],
        Rw = [],
        Ew = [],
        Cw = [],
        uw = [],
        Lw = [],
        kw = [],
        fw = [],
        Sw = [],
        tw = [],
        ow = [],
        ew = [],
        nw = [],
        xw = [],
        Yw = [],
        Nw = [],
        Zw = [],
        Ow = [],
        Kw = [],
        mw = [],
        Mw = [],
        Qq = [],
        Wq = [],
        Xq = [],
        wq = [],
        qq = [],
        Tq = [],
        zq = [],
        sq = [],
        Fq = [],
        Pq = [],
        gq = [],
        Jq = [],
        rq = [],
        Iq = [],
        jq = [],
        Bq = [],
        yq = [],
        Vq = [],
        Dq = [],
        pq = [],
        Gq = [],
        Uq = [],
        bq = [],
        vq = [],
        dq = [],
        Hq = [],
        aq = [],
        lq = [],
        hq = [],
        iq = [],
        cq = [],
        Aq = [],
        Rq = [],
        Eq = [],
        Cq = [],
        uq = [],
        Lq = [],
        kq = [],
        fq = [],
        Sq = [],
        tq = [],
        oq = [],
        eq = [],
        nq = [],
        xq = [],
        Yq = [],
        Nq = [],
        Zq = [],
        Oq = [],
        Kq = [],
        mq = [],
        Mq = [],
        QT = [],
        WT = [],
        XT = [],
        wT = [],
        qT = [],
        TT = [],
        zT = [],
        sT = [],
        FT = [],
        PT = [],
        gT = [],
        JT = [],
        rT = [],
        IT = [],
        jT = [],
        BT = [],
        yT = [];
      return QQ = class extends fX {
        get directIntensity() {
          return (0, HQ.d)(this, WQ, "f")
        }
        set directIntensity(QQ) {
          (0, HQ.h)(this, WQ, QQ, "f")
        }
        get emissiveIntensity() {
          return (0, HQ.d)(this, XQ, "f")
        }
        set emissiveIntensity(QQ) {
          (0, HQ.h)(this, XQ, QQ, "f")
        }
        get environmentIntensity() {
          return (0, HQ.d)(this, wQ, "f")
        }
        set environmentIntensity(QQ) {
          (0, HQ.h)(this, wQ, QQ, "f")
        }
        get specularIntensity() {
          return (0, HQ.d)(this, qQ, "f")
        }
        set specularIntensity(QQ) {
          (0, HQ.h)(this, qQ, QQ, "f")
        }
        get disableBumpMap() {
          return (0, HQ.d)(this, zQ, "f")
        }
        set disableBumpMap(QQ) {
          (0, HQ.h)(this, zQ, QQ, "f")
        }
        get albedoTexture() {
          return (0, HQ.d)(this, sQ, "f")
        }
        set albedoTexture(QQ) {
          (0, HQ.h)(this, sQ, QQ, "f")
        }
        get baseWeightTexture() {
          return (0, HQ.d)(this, FQ, "f")
        }
        set baseWeightTexture(QQ) {
          (0, HQ.h)(this, FQ, QQ, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, HQ.d)(this, PQ, "f")
        }
        set baseDiffuseRoughnessTexture(QQ) {
          (0, HQ.h)(this, PQ, QQ, "f")
        }
        get ambientTexture() {
          return (0, HQ.d)(this, gQ, "f")
        }
        set ambientTexture(QQ) {
          (0, HQ.h)(this, gQ, QQ, "f")
        }
        get ambientTextureStrength() {
          return (0, HQ.d)(this, JQ, "f")
        }
        set ambientTextureStrength(QQ) {
          (0, HQ.h)(this, JQ, QQ, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, HQ.d)(this, rQ, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(QQ) {
          (0, HQ.h)(this, rQ, QQ, "f")
        }
        get opacityTexture() {
          return (0, HQ.d)(this, IQ, "f")
        }
        set opacityTexture(QQ) {
          (0, HQ.h)(this, IQ, QQ, "f")
        }
        get reflectionTexture() {
          return (0, HQ.d)(this, jQ, "f")
        }
        set reflectionTexture(QQ) {
          (0, HQ.h)(this, jQ, QQ, "f")
        }
        get emissiveTexture() {
          return (0, HQ.d)(this, BQ, "f")
        }
        set emissiveTexture(QQ) {
          (0, HQ.h)(this, BQ, QQ, "f")
        }
        get reflectivityTexture() {
          return (0, HQ.d)(this, yQ, "f")
        }
        set reflectivityTexture(QQ) {
          (0, HQ.h)(this, yQ, QQ, "f")
        }
        get metallicTexture() {
          return (0, HQ.d)(this, VQ, "f")
        }
        set metallicTexture(QQ) {
          (0, HQ.h)(this, VQ, QQ, "f")
        }
        get metallic() {
          return (0, HQ.d)(this, DQ, "f")
        }
        set metallic(QQ) {
          (0, HQ.h)(this, DQ, QQ, "f")
        }
        get roughness() {
          return (0, HQ.d)(this, pQ, "f")
        }
        set roughness(QQ) {
          (0, HQ.h)(this, pQ, QQ, "f")
        }
        get metallicF0Factor() {
          return (0, HQ.d)(this, GQ, "f")
        }
        set metallicF0Factor(QQ) {
          (0, HQ.h)(this, GQ, QQ, "f")
        }
        get metallicReflectanceColor() {
          return (0, HQ.d)(this, UQ, "f")
        }
        set metallicReflectanceColor(QQ) {
          (0, HQ.h)(this, UQ, QQ, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, HQ.d)(this, bQ, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(QQ) {
          (0, HQ.h)(this, bQ, QQ, "f")
        }
        get metallicReflectanceTexture() {
          return (0, HQ.d)(this, vQ, "f")
        }
        set metallicReflectanceTexture(QQ) {
          (0, HQ.h)(this, vQ, QQ, "f")
        }
        get reflectanceTexture() {
          return (0, HQ.d)(this, dQ, "f")
        }
        set reflectanceTexture(QQ) {
          (0, HQ.h)(this, dQ, QQ, "f")
        }
        get microSurfaceTexture() {
          return (0, HQ.d)(this, lQ, "f")
        }
        set microSurfaceTexture(QQ) {
          (0, HQ.h)(this, lQ, QQ, "f")
        }
        get bumpTexture() {
          return (0, HQ.d)(this, hQ, "f")
        }
        set bumpTexture(QQ) {
          (0, HQ.h)(this, hQ, QQ, "f")
        }
        get lightmapTexture() {
          return (0, HQ.d)(this, iQ, "f")
        }
        set lightmapTexture(QQ) {
          (0, HQ.h)(this, iQ, QQ, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(QQ) {
          this.subSurface.refractionTexture = QQ, QQ ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, HQ.d)(this, cQ, "f")
        }
        set ambientColor(QQ) {
          (0, HQ.h)(this, cQ, QQ, "f")
        }
        get albedoColor() {
          return (0, HQ.d)(this, AQ, "f")
        }
        set albedoColor(QQ) {
          (0, HQ.h)(this, AQ, QQ, "f")
        }
        get baseWeight() {
          return (0, HQ.d)(this, RQ, "f")
        }
        set baseWeight(QQ) {
          (0, HQ.h)(this, RQ, QQ, "f")
        }
        get baseDiffuseRoughness() {
          return (0, HQ.d)(this, CQ, "f")
        }
        set baseDiffuseRoughness(QQ) {
          (0, HQ.h)(this, CQ, QQ, "f")
        }
        get reflectivityColor() {
          return (0, HQ.d)(this, uQ, "f")
        }
        set reflectivityColor(QQ) {
          (0, HQ.h)(this, uQ, QQ, "f")
        }
        get reflectionColor() {
          return (0, HQ.d)(this, LQ, "f")
        }
        set reflectionColor(QQ) {
          (0, HQ.h)(this, LQ, QQ, "f")
        }
        get emissiveColor() {
          return (0, HQ.d)(this, kQ, "f")
        }
        set emissiveColor(QQ) {
          (0, HQ.h)(this, kQ, QQ, "f")
        }
        get microSurface() {
          return (0, HQ.d)(this, fQ, "f")
        }
        set microSurface(QQ) {
          (0, HQ.h)(this, fQ, QQ, "f")
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
          return (0, HQ.d)(this, SQ, "f")
        }
        set useLightmapAsShadowmap(QQ) {
          (0, HQ.h)(this, SQ, QQ, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, HQ.d)(this, tQ, "f")
        }
        set useAlphaFromAlbedoTexture(QQ) {
          (0, HQ.h)(this, tQ, QQ, "f")
        }
        get forceAlphaTest() {
          return (0, HQ.d)(this, oQ, "f")
        }
        set forceAlphaTest(QQ) {
          (0, HQ.h)(this, oQ, QQ, "f")
        }
        get alphaCutOff() {
          return (0, HQ.d)(this, eQ, "f")
        }
        set alphaCutOff(QQ) {
          (0, HQ.h)(this, eQ, QQ, "f")
        }
        get useSpecularOverAlpha() {
          return (0, HQ.d)(this, nQ, "f")
        }
        set useSpecularOverAlpha(QQ) {
          (0, HQ.h)(this, nQ, QQ, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, HQ.d)(this, YQ, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(QQ) {
          (0, HQ.h)(this, YQ, QQ, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, HQ.d)(this, NQ, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(QQ) {
          (0, HQ.h)(this, NQ, QQ, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, HQ.d)(this, ZQ, "f")
        }
        set useRoughnessFromMetallicTextureGreen(QQ) {
          (0, HQ.h)(this, ZQ, QQ, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, HQ.d)(this, OQ, "f")
        }
        set useMetallnessFromMetallicTextureBlue(QQ) {
          (0, HQ.h)(this, OQ, QQ, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, HQ.d)(this, KQ, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(QQ) {
          (0, HQ.h)(this, KQ, QQ, "f")
        }
        get useAmbientInGrayScale() {
          return (0, HQ.d)(this, mQ, "f")
        }
        set useAmbientInGrayScale(QQ) {
          (0, HQ.h)(this, mQ, QQ, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, HQ.d)(this, MQ, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(QQ) {
          (0, HQ.h)(this, MQ, QQ, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === bW.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(QQ) {
          QQ !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = QQ ? bW.LIGHTFALLOFF_PHYSICAL : bW.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === bW.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(QQ) {
          QQ !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = QQ ? bW.LIGHTFALLOFF_GLTF : bW.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, HQ.d)(this, QW, "f")
        }
        set useRadianceOverAlpha(QQ) {
          (0, HQ.h)(this, QW, QQ, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, HQ.d)(this, WW, "f")
        }
        set useObjectSpaceNormalMap(QQ) {
          (0, HQ.h)(this, WW, QQ, "f")
        }
        get useParallax() {
          return (0, HQ.d)(this, XW, "f")
        }
        set useParallax(QQ) {
          (0, HQ.h)(this, XW, QQ, "f")
        }
        get useParallaxOcclusion() {
          return (0, HQ.d)(this, wW, "f")
        }
        set useParallaxOcclusion(QQ) {
          (0, HQ.h)(this, wW, QQ, "f")
        }
        get parallaxScaleBias() {
          return (0, HQ.d)(this, qW, "f")
        }
        set parallaxScaleBias(QQ) {
          (0, HQ.h)(this, qW, QQ, "f")
        }
        get disableLighting() {
          return (0, HQ.d)(this, TW, "f")
        }
        set disableLighting(QQ) {
          (0, HQ.h)(this, TW, QQ, "f")
        }
        get forceIrradianceInFragment() {
          return (0, HQ.d)(this, zW, "f")
        }
        set forceIrradianceInFragment(QQ) {
          (0, HQ.h)(this, zW, QQ, "f")
        }
        get maxSimultaneousLights() {
          return (0, HQ.d)(this, sW, "f")
        }
        set maxSimultaneousLights(QQ) {
          (0, HQ.h)(this, sW, QQ, "f")
        }
        get invertNormalMapX() {
          return (0, HQ.d)(this, FW, "f")
        }
        set invertNormalMapX(QQ) {
          (0, HQ.h)(this, FW, QQ, "f")
        }
        get invertNormalMapY() {
          return (0, HQ.d)(this, PW, "f")
        }
        set invertNormalMapY(QQ) {
          (0, HQ.h)(this, PW, QQ, "f")
        }
        get twoSidedLighting() {
          return (0, HQ.d)(this, gW, "f")
        }
        set twoSidedLighting(QQ) {
          (0, HQ.h)(this, gW, QQ, "f")
        }
        get useAlphaFresnel() {
          return (0, HQ.d)(this, JW, "f")
        }
        set useAlphaFresnel(QQ) {
          (0, HQ.h)(this, JW, QQ, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, HQ.d)(this, rW, "f")
        }
        set useLinearAlphaFresnel(QQ) {
          (0, HQ.h)(this, rW, QQ, "f")
        }
        get environmentBRDFTexture() {
          return (0, HQ.d)(this, IW, "f")
        }
        set environmentBRDFTexture(QQ) {
          (0, HQ.h)(this, IW, QQ, "f")
        }
        get forceNormalForward() {
          return (0, HQ.d)(this, jW, "f")
        }
        set forceNormalForward(QQ) {
          (0, HQ.h)(this, jW, QQ, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, HQ.d)(this, BW, "f")
        }
        set enableSpecularAntiAliasing(QQ) {
          (0, HQ.h)(this, BW, QQ, "f")
        }
        get useHorizonOcclusion() {
          return (0, HQ.d)(this, yW, "f")
        }
        set useHorizonOcclusion(QQ) {
          (0, HQ.h)(this, yW, QQ, "f")
        }
        get useRadianceOcclusion() {
          return (0, HQ.d)(this, VW, "f")
        }
        set useRadianceOcclusion(QQ) {
          (0, HQ.h)(this, VW, QQ, "f")
        }
        get unlit() {
          return (0, HQ.d)(this, DW, "f")
        }
        set unlit(QQ) {
          (0, HQ.h)(this, DW, QQ, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, HQ.d)(this, pW, "f")
        }
        set applyDecalMapAfterDetailMap(QQ) {
          (0, HQ.h)(this, pW, QQ, "f")
        }
        constructor(TQ, aQ) {
          super(TQ, aQ, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), WQ.set(this, ((0, HQ.n)(this, SX), (0, HQ.n)(this, tX, 1))), XQ.set(this, ((0, HQ.n)(this, oX), (0, HQ.n)(this, eX, 1))), wQ.set(this, ((0, HQ.n)(this, nX), (0, HQ.n)(this, xX, 1))), qQ.set(this, ((0, HQ.n)(this, YX), (0, HQ.n)(this, NX, 1))), zQ.set(this, ((0, HQ.n)(this, ZX), (0, HQ.n)(this, OX, !1))), sQ.set(this, ((0, HQ.n)(this, KX), (0, HQ.n)(this, mX, void 0))), FQ.set(this, ((0, HQ.n)(this, MX), (0, HQ.n)(this, Qw, void 0))), PQ.set(this, ((0, HQ.n)(this, Ww), (0, HQ.n)(this, Xw, void 0))), gQ.set(this, ((0, HQ.n)(this, ww), (0, HQ.n)(this, qw, void 0))), JQ.set(this, ((0, HQ.n)(this, Tw), (0, HQ.n)(this, zw, 1))), rQ.set(this, ((0, HQ.n)(this, sw), (0, HQ.n)(this, Fw, QQ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), IQ.set(this, ((0, HQ.n)(this, Pw), (0, HQ.n)(this, gw, void 0))), jQ.set(this, ((0, HQ.n)(this, Jw), (0, HQ.n)(this, rw, void 0))), BQ.set(this, ((0, HQ.n)(this, Iw), (0, HQ.n)(this, jw, void 0))), yQ.set(this, ((0, HQ.n)(this, Bw), (0, HQ.n)(this, yw, void 0))), VQ.set(this, ((0, HQ.n)(this, Vw), (0, HQ.n)(this, Dw, void 0))), DQ.set(this, ((0, HQ.n)(this, pw), (0, HQ.n)(this, Gw, void 0))), pQ.set(this, ((0, HQ.n)(this, Uw), (0, HQ.n)(this, bw, void 0))), GQ.set(this, ((0, HQ.n)(this, vw), (0, HQ.n)(this, dw, 1))), UQ.set(this, ((0, HQ.n)(this, Hw), (0, HQ.n)(this, aw, xQ.b.White()))), bQ.set(this, ((0, HQ.n)(this, lw), (0, HQ.n)(this, hw, !1))), vQ.set(this, ((0, HQ.n)(this, iw), (0, HQ.n)(this, Aw, void 0))), dQ.set(this, ((0, HQ.n)(this, Rw), (0, HQ.n)(this, Ew, void 0))), lQ.set(this, ((0, HQ.n)(this, Cw), (0, HQ.n)(this, uw, void 0))), hQ.set(this, ((0, HQ.n)(this, Lw), (0, HQ.n)(this, kw, void 0))), iQ.set(this, ((0, HQ.n)(this, fw), (0, HQ.n)(this, Sw, void 0))), cQ.set(this, ((0, HQ.n)(this, tw), (0, HQ.n)(this, ow, new xQ.b(0, 0, 0)))), AQ.set(this, ((0, HQ.n)(this, ew), (0, HQ.n)(this, nw, new xQ.b(1, 1, 1)))), RQ.set(this, ((0, HQ.n)(this, xw), (0, HQ.n)(this, Yw, 1))), CQ.set(this, ((0, HQ.n)(this, Nw), (0, HQ.n)(this, Zw, void 0))), uQ.set(this, ((0, HQ.n)(this, Ow), (0, HQ.n)(this, Kw, new xQ.b(1, 1, 1)))), LQ.set(this, ((0, HQ.n)(this, mw), (0, HQ.n)(this, Mw, new xQ.b(1, 1, 1)))), kQ.set(this, ((0, HQ.n)(this, Qq), (0, HQ.n)(this, Wq, new xQ.b(0, 0, 0)))), fQ.set(this, ((0, HQ.n)(this, Xq), (0, HQ.n)(this, wq, 1))), SQ.set(this, ((0, HQ.n)(this, qq), (0, HQ.n)(this, Tq, !1))), tQ.set(this, ((0, HQ.n)(this, zq), (0, HQ.n)(this, sq, !1))), oQ.set(this, ((0, HQ.n)(this, Fq), (0, HQ.n)(this, Pq, !1))), eQ.set(this, ((0, HQ.n)(this, gq), (0, HQ.n)(this, Jq, .4))), nQ.set(this, ((0, HQ.n)(this, rq), (0, HQ.n)(this, Iq, !0))), YQ.set(this, ((0, HQ.n)(this, jq), (0, HQ.n)(this, Bq, !1))), NQ.set(this, ((0, HQ.n)(this, yq), (0, HQ.n)(this, Vq, !0))), ZQ.set(this, ((0, HQ.n)(this, Dq), (0, HQ.n)(this, pq, !1))), OQ.set(this, ((0, HQ.n)(this, Gq), (0, HQ.n)(this, Uq, !1))), KQ.set(this, ((0, HQ.n)(this, bq), (0, HQ.n)(this, vq, !1))), mQ.set(this, ((0, HQ.n)(this, dq), (0, HQ.n)(this, Hq, !1))), MQ.set(this, ((0, HQ.n)(this, aq), (0, HQ.n)(this, lq, !1))), QW.set(this, ((0, HQ.n)(this, hq), (0, HQ.n)(this, iq, !0))), WW.set(this, ((0, HQ.n)(this, cq), (0, HQ.n)(this, Aq, !1))), XW.set(this, ((0, HQ.n)(this, Rq), (0, HQ.n)(this, Eq, !1))), wW.set(this, ((0, HQ.n)(this, Cq), (0, HQ.n)(this, uq, !1))), qW.set(this, ((0, HQ.n)(this, Lq), (0, HQ.n)(this, kq, .05))), TW.set(this, ((0, HQ.n)(this, fq), (0, HQ.n)(this, Sq, !1))), zW.set(this, ((0, HQ.n)(this, tq), (0, HQ.n)(this, oq, !1))), sW.set(this, ((0, HQ.n)(this, eq), (0, HQ.n)(this, nq, 4))), FW.set(this, ((0, HQ.n)(this, xq), (0, HQ.n)(this, Yq, !1))), PW.set(this, ((0, HQ.n)(this, Nq), (0, HQ.n)(this, Zq, !1))), gW.set(this, ((0, HQ.n)(this, Oq), (0, HQ.n)(this, Kq, !1))), JW.set(this, ((0, HQ.n)(this, mq), (0, HQ.n)(this, Mq, !1))), rW.set(this, ((0, HQ.n)(this, QT), (0, HQ.n)(this, WT, !1))), IW.set(this, ((0, HQ.n)(this, XT), (0, HQ.n)(this, wT, null))), jW.set(this, ((0, HQ.n)(this, qT), (0, HQ.n)(this, TT, !1))), BW.set(this, ((0, HQ.n)(this, zT), (0, HQ.n)(this, sT, !1))), yW.set(this, ((0, HQ.n)(this, FT), (0, HQ.n)(this, PT, !0))), VW.set(this, ((0, HQ.n)(this, gT), (0, HQ.n)(this, JT, !0))), DW.set(this, ((0, HQ.n)(this, rT), (0, HQ.n)(this, IT, !1))), pW.set(this, ((0, HQ.n)(this, jT), (0, HQ.n)(this, BT, !1))), (0, HQ.n)(this, yT), this._environmentBRDFTexture = EQ(this.sE())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(WQ) {
          let XQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const qQ = vW.b.Clone((() => new QQ(WQ, this.sE())), this, {
            cloneTexturesOnlyOnce: XQ
          });
          return qQ.id = WQ, qQ.name = WQ, this.stencil.copyTo(qQ.stencil), this._clonePlugins(qQ, wQ), qQ
        }
        serialize() {
          const QQ = super.serialize();
          return QQ.customType = "BABYLON.PBRMaterial", QQ
        }
        static Parse(WQ, XQ, wQ) {
          const qQ = vW.b.Parse((() => new QQ(WQ.name, XQ)), WQ, XQ, wQ);
          return WQ.stencil && qQ.stencil.parse(WQ.stencil, XQ, wQ), TQ.b._ParsePlugins(WQ, qQ, XQ, wQ), WQ.clearCoat && qQ.clearCoat.parse(WQ.clearCoat, XQ, wQ), WQ.anisotropy && qQ.anisotropy.parse(WQ.anisotropy, XQ, wQ), WQ.brdf && qQ.brdf.parse(WQ.brdf, XQ, wQ), WQ.sheen && qQ.sheen.parse(WQ.sheen, XQ, wQ), WQ.subSurface && qQ.subSurface.parse(WQ.subSurface, XQ, wQ), WQ.iridescence && qQ.iridescence.parse(WQ.iridescence, XQ, wQ), qQ
        }
      }, WQ = new WeakMap, XQ = new WeakMap, wQ = new WeakMap, qQ = new WeakMap, zQ = new WeakMap, sQ = new WeakMap, FQ = new WeakMap, PQ = new WeakMap, gQ = new WeakMap, JQ = new WeakMap, rQ = new WeakMap, IQ = new WeakMap, jQ = new WeakMap, BQ = new WeakMap, yQ = new WeakMap, VQ = new WeakMap, DQ = new WeakMap, pQ = new WeakMap, GQ = new WeakMap, UQ = new WeakMap, bQ = new WeakMap, vQ = new WeakMap, dQ = new WeakMap, lQ = new WeakMap, hQ = new WeakMap, iQ = new WeakMap, cQ = new WeakMap, AQ = new WeakMap, RQ = new WeakMap, CQ = new WeakMap, uQ = new WeakMap, LQ = new WeakMap, kQ = new WeakMap, fQ = new WeakMap, SQ = new WeakMap, tQ = new WeakMap, oQ = new WeakMap, eQ = new WeakMap, nQ = new WeakMap, YQ = new WeakMap, NQ = new WeakMap, ZQ = new WeakMap, OQ = new WeakMap, KQ = new WeakMap, mQ = new WeakMap, MQ = new WeakMap, QW = new WeakMap, WW = new WeakMap, XW = new WeakMap, wW = new WeakMap, qW = new WeakMap, TW = new WeakMap, zW = new WeakMap, sW = new WeakMap, FW = new WeakMap, PW = new WeakMap, gW = new WeakMap, JW = new WeakMap, rW = new WeakMap, IW = new WeakMap, jW = new WeakMap, BW = new WeakMap, yW = new WeakMap, VW = new WeakMap, DW = new WeakMap, pW = new WeakMap, (() => {
        const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(fX[Symbol.metadata] ?? null) : void 0;
        GW = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], UW = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], dW = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], HW = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], aW = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], lW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], hW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], iW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], cW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], AW = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], RW = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], EW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], CW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], uW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], LW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], kW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], fW = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], SW = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], oW = [(0, aQ.l)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], eW = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], nW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], xW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], NW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], ZW = [(0, aQ.z)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty", null)], OW = [(0, aQ.l)("ambient"), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], KW = [(0, aQ.l)("albedo"), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], mW = [(0, aQ.I)("baseWeight"), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], MW = [(0, aQ.I)("baseDiffuseRoughness"), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], QX = [(0, aQ.l)("reflectivity"), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], WX = [(0, aQ.l)("reflection"), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], XX = [(0, aQ.l)("emissive"), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], wX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], qX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], TX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], zX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], sX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], FX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], PX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], gX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], JX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], rX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], IX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], jX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], BX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], yX = [(0, aQ.I)()], VX = [(0, aQ.I)()], DX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], pX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], GX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], UX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], bX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], vX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsLightsDirty")], dX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], HX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsLightsDirty")], aX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], lX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], hX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], iX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], cX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], AX = [(0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], RX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], EX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], CX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], uX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsTexturesDirty")], LX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], kX = [(0, aQ.I)(), (0, aQ.e)("_markAllSubMeshesAsMiscDirty")], (0, HQ.k)(QQ, null, GW, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "directIntensity" in QQ,
            get: QQ => QQ.directIntensity,
            set: (QQ, WQ) => {
              QQ.directIntensity = WQ
            }
          },
          metadata: WQ
        }, tX, oX), (0, HQ.k)(QQ, null, UW, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "emissiveIntensity" in QQ,
            get: QQ => QQ.emissiveIntensity,
            set: (QQ, WQ) => {
              QQ.emissiveIntensity = WQ
            }
          },
          metadata: WQ
        }, eX, nX), (0, HQ.k)(QQ, null, dW, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "environmentIntensity" in QQ,
            get: QQ => QQ.environmentIntensity,
            set: (QQ, WQ) => {
              QQ.environmentIntensity = WQ
            }
          },
          metadata: WQ
        }, xX, YX), (0, HQ.k)(QQ, null, HW, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "specularIntensity" in QQ,
            get: QQ => QQ.specularIntensity,
            set: (QQ, WQ) => {
              QQ.specularIntensity = WQ
            }
          },
          metadata: WQ
        }, NX, ZX), (0, HQ.k)(QQ, null, aW, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: QQ => "disableBumpMap" in QQ,
            get: QQ => QQ.disableBumpMap,
            set: (QQ, WQ) => {
              QQ.disableBumpMap = WQ
            }
          },
          metadata: WQ
        }, OX, KX), (0, HQ.k)(QQ, null, lW, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "albedoTexture" in QQ,
            get: QQ => QQ.albedoTexture,
            set: (QQ, WQ) => {
              QQ.albedoTexture = WQ
            }
          },
          metadata: WQ
        }, mX, MX), (0, HQ.k)(QQ, null, hW, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "baseWeightTexture" in QQ,
            get: QQ => QQ.baseWeightTexture,
            set: (QQ, WQ) => {
              QQ.baseWeightTexture = WQ
            }
          },
          metadata: WQ
        }, Qw, Ww), (0, HQ.k)(QQ, null, iW, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "baseDiffuseRoughnessTexture" in QQ,
            get: QQ => QQ.baseDiffuseRoughnessTexture,
            set: (QQ, WQ) => {
              QQ.baseDiffuseRoughnessTexture = WQ
            }
          },
          metadata: WQ
        }, Xw, ww), (0, HQ.k)(QQ, null, cW, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ambientTexture" in QQ,
            get: QQ => QQ.ambientTexture,
            set: (QQ, WQ) => {
              QQ.ambientTexture = WQ
            }
          },
          metadata: WQ
        }, qw, Tw), (0, HQ.k)(QQ, null, AW, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ambientTextureStrength" in QQ,
            get: QQ => QQ.ambientTextureStrength,
            set: (QQ, WQ) => {
              QQ.ambientTextureStrength = WQ
            }
          },
          metadata: WQ
        }, zw, sw), (0, HQ.k)(QQ, null, RW, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ambientTextureImpactOnAnalyticalLights" in QQ,
            get: QQ => QQ.ambientTextureImpactOnAnalyticalLights,
            set: (QQ, WQ) => {
              QQ.ambientTextureImpactOnAnalyticalLights = WQ
            }
          },
          metadata: WQ
        }, Fw, Pw), (0, HQ.k)(QQ, null, EW, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "opacityTexture" in QQ,
            get: QQ => QQ.opacityTexture,
            set: (QQ, WQ) => {
              QQ.opacityTexture = WQ
            }
          },
          metadata: WQ
        }, gw, Jw), (0, HQ.k)(QQ, null, CW, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reflectionTexture" in QQ,
            get: QQ => QQ.reflectionTexture,
            set: (QQ, WQ) => {
              QQ.reflectionTexture = WQ
            }
          },
          metadata: WQ
        }, rw, Iw), (0, HQ.k)(QQ, null, uW, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "emissiveTexture" in QQ,
            get: QQ => QQ.emissiveTexture,
            set: (QQ, WQ) => {
              QQ.emissiveTexture = WQ
            }
          },
          metadata: WQ
        }, jw, Bw), (0, HQ.k)(QQ, null, LW, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reflectivityTexture" in QQ,
            get: QQ => QQ.reflectivityTexture,
            set: (QQ, WQ) => {
              QQ.reflectivityTexture = WQ
            }
          },
          metadata: WQ
        }, yw, Vw), (0, HQ.k)(QQ, null, kW, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metallicTexture" in QQ,
            get: QQ => QQ.metallicTexture,
            set: (QQ, WQ) => {
              QQ.metallicTexture = WQ
            }
          },
          metadata: WQ
        }, Dw, pw), (0, HQ.k)(QQ, null, fW, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metallic" in QQ,
            get: QQ => QQ.metallic,
            set: (QQ, WQ) => {
              QQ.metallic = WQ
            }
          },
          metadata: WQ
        }, Gw, Uw), (0, HQ.k)(QQ, null, SW, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "roughness" in QQ,
            get: QQ => QQ.roughness,
            set: (QQ, WQ) => {
              QQ.roughness = WQ
            }
          },
          metadata: WQ
        }, bw, vw), (0, HQ.k)(QQ, null, tW, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metallicF0Factor" in QQ,
            get: QQ => QQ.metallicF0Factor,
            set: (QQ, WQ) => {
              QQ.metallicF0Factor = WQ
            }
          },
          metadata: WQ
        }, dw, Hw), (0, HQ.k)(QQ, null, oW, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metallicReflectanceColor" in QQ,
            get: QQ => QQ.metallicReflectanceColor,
            set: (QQ, WQ) => {
              QQ.metallicReflectanceColor = WQ
            }
          },
          metadata: WQ
        }, aw, lw), (0, HQ.k)(QQ, null, eW, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useOnlyMetallicFromMetallicReflectanceTexture" in QQ,
            get: QQ => QQ.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (QQ, WQ) => {
              QQ.useOnlyMetallicFromMetallicReflectanceTexture = WQ
            }
          },
          metadata: WQ
        }, hw, iw), (0, HQ.k)(QQ, null, nW, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metallicReflectanceTexture" in QQ,
            get: QQ => QQ.metallicReflectanceTexture,
            set: (QQ, WQ) => {
              QQ.metallicReflectanceTexture = WQ
            }
          },
          metadata: WQ
        }, Aw, Rw), (0, HQ.k)(QQ, null, xW, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reflectanceTexture" in QQ,
            get: QQ => QQ.reflectanceTexture,
            set: (QQ, WQ) => {
              QQ.reflectanceTexture = WQ
            }
          },
          metadata: WQ
        }, Ew, Cw), (0, HQ.k)(QQ, null, YW, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "microSurfaceTexture" in QQ,
            get: QQ => QQ.microSurfaceTexture,
            set: (QQ, WQ) => {
              QQ.microSurfaceTexture = WQ
            }
          },
          metadata: WQ
        }, uw, Lw), (0, HQ.k)(QQ, null, NW, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "bumpTexture" in QQ,
            get: QQ => QQ.bumpTexture,
            set: (QQ, WQ) => {
              QQ.bumpTexture = WQ
            }
          },
          metadata: WQ
        }, kw, fw), (0, HQ.k)(QQ, null, ZW, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "lightmapTexture" in QQ,
            get: QQ => QQ.lightmapTexture,
            set: (QQ, WQ) => {
              QQ.lightmapTexture = WQ
            }
          },
          metadata: WQ
        }, Sw, tw), (0, HQ.k)(QQ, null, OW, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ambientColor" in QQ,
            get: QQ => QQ.ambientColor,
            set: (QQ, WQ) => {
              QQ.ambientColor = WQ
            }
          },
          metadata: WQ
        }, ow, ew), (0, HQ.k)(QQ, null, KW, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "albedoColor" in QQ,
            get: QQ => QQ.albedoColor,
            set: (QQ, WQ) => {
              QQ.albedoColor = WQ
            }
          },
          metadata: WQ
        }, nw, xw), (0, HQ.k)(QQ, null, mW, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: QQ => "baseWeight" in QQ,
            get: QQ => QQ.baseWeight,
            set: (QQ, WQ) => {
              QQ.baseWeight = WQ
            }
          },
          metadata: WQ
        }, Yw, Nw), (0, HQ.k)(QQ, null, MW, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "baseDiffuseRoughness" in QQ,
            get: QQ => QQ.baseDiffuseRoughness,
            set: (QQ, WQ) => {
              QQ.baseDiffuseRoughness = WQ
            }
          },
          metadata: WQ
        }, Zw, Ow), (0, HQ.k)(QQ, null, QX, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reflectivityColor" in QQ,
            get: QQ => QQ.reflectivityColor,
            set: (QQ, WQ) => {
              QQ.reflectivityColor = WQ
            }
          },
          metadata: WQ
        }, Kw, mw), (0, HQ.k)(QQ, null, WX, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reflectionColor" in QQ,
            get: QQ => QQ.reflectionColor,
            set: (QQ, WQ) => {
              QQ.reflectionColor = WQ
            }
          },
          metadata: WQ
        }, Mw, Qq), (0, HQ.k)(QQ, null, XX, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: QQ => "emissiveColor" in QQ,
            get: QQ => QQ.emissiveColor,
            set: (QQ, WQ) => {
              QQ.emissiveColor = WQ
            }
          },
          metadata: WQ
        }, Wq, Xq), (0, HQ.k)(QQ, null, wX, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: QQ => "microSurface" in QQ,
            get: QQ => QQ.microSurface,
            set: (QQ, WQ) => {
              QQ.microSurface = WQ
            }
          },
          metadata: WQ
        }, wq, qq), (0, HQ.k)(QQ, null, qX, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useLightmapAsShadowmap" in QQ,
            get: QQ => QQ.useLightmapAsShadowmap,
            set: (QQ, WQ) => {
              QQ.useLightmapAsShadowmap = WQ
            }
          },
          metadata: WQ
        }, Tq, zq), (0, HQ.k)(QQ, null, TX, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAlphaFromAlbedoTexture" in QQ,
            get: QQ => QQ.useAlphaFromAlbedoTexture,
            set: (QQ, WQ) => {
              QQ.useAlphaFromAlbedoTexture = WQ
            }
          },
          metadata: WQ
        }, sq, Fq), (0, HQ.k)(QQ, null, zX, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: QQ => "forceAlphaTest" in QQ,
            get: QQ => QQ.forceAlphaTest,
            set: (QQ, WQ) => {
              QQ.forceAlphaTest = WQ
            }
          },
          metadata: WQ
        }, Pq, gq), (0, HQ.k)(QQ, null, sX, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: QQ => "alphaCutOff" in QQ,
            get: QQ => QQ.alphaCutOff,
            set: (QQ, WQ) => {
              QQ.alphaCutOff = WQ
            }
          },
          metadata: WQ
        }, Jq, rq), (0, HQ.k)(QQ, null, FX, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useSpecularOverAlpha" in QQ,
            get: QQ => QQ.useSpecularOverAlpha,
            set: (QQ, WQ) => {
              QQ.useSpecularOverAlpha = WQ
            }
          },
          metadata: WQ
        }, Iq, jq), (0, HQ.k)(QQ, null, PX, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useMicroSurfaceFromReflectivityMapAlpha" in QQ,
            get: QQ => QQ.useMicroSurfaceFromReflectivityMapAlpha,
            set: (QQ, WQ) => {
              QQ.useMicroSurfaceFromReflectivityMapAlpha = WQ
            }
          },
          metadata: WQ
        }, Bq, yq), (0, HQ.k)(QQ, null, gX, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRoughnessFromMetallicTextureAlpha" in QQ,
            get: QQ => QQ.useRoughnessFromMetallicTextureAlpha,
            set: (QQ, WQ) => {
              QQ.useRoughnessFromMetallicTextureAlpha = WQ
            }
          },
          metadata: WQ
        }, Vq, Dq), (0, HQ.k)(QQ, null, JX, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRoughnessFromMetallicTextureGreen" in QQ,
            get: QQ => QQ.useRoughnessFromMetallicTextureGreen,
            set: (QQ, WQ) => {
              QQ.useRoughnessFromMetallicTextureGreen = WQ
            }
          },
          metadata: WQ
        }, pq, Gq), (0, HQ.k)(QQ, null, rX, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useMetallnessFromMetallicTextureBlue" in QQ,
            get: QQ => QQ.useMetallnessFromMetallicTextureBlue,
            set: (QQ, WQ) => {
              QQ.useMetallnessFromMetallicTextureBlue = WQ
            }
          },
          metadata: WQ
        }, Uq, bq), (0, HQ.k)(QQ, null, IX, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAmbientOcclusionFromMetallicTextureRed" in QQ,
            get: QQ => QQ.useAmbientOcclusionFromMetallicTextureRed,
            set: (QQ, WQ) => {
              QQ.useAmbientOcclusionFromMetallicTextureRed = WQ
            }
          },
          metadata: WQ
        }, vq, dq), (0, HQ.k)(QQ, null, jX, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAmbientInGrayScale" in QQ,
            get: QQ => QQ.useAmbientInGrayScale,
            set: (QQ, WQ) => {
              QQ.useAmbientInGrayScale = WQ
            }
          },
          metadata: WQ
        }, Hq, aq), (0, HQ.k)(QQ, null, BX, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAutoMicroSurfaceFromReflectivityMap" in QQ,
            get: QQ => QQ.useAutoMicroSurfaceFromReflectivityMap,
            set: (QQ, WQ) => {
              QQ.useAutoMicroSurfaceFromReflectivityMap = WQ
            }
          },
          metadata: WQ
        }, lq, hq), (0, HQ.k)(QQ, null, yX, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: QQ => "usePhysicalLightFalloff" in QQ,
            get: QQ => QQ.usePhysicalLightFalloff
          },
          metadata: WQ
        }, null, SX), (0, HQ.k)(QQ, null, VX, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useGLTFLightFalloff" in QQ,
            get: QQ => QQ.useGLTFLightFalloff
          },
          metadata: WQ
        }, null, SX), (0, HQ.k)(QQ, null, DX, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRadianceOverAlpha" in QQ,
            get: QQ => QQ.useRadianceOverAlpha,
            set: (QQ, WQ) => {
              QQ.useRadianceOverAlpha = WQ
            }
          },
          metadata: WQ
        }, iq, cq), (0, HQ.k)(QQ, null, pX, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useObjectSpaceNormalMap" in QQ,
            get: QQ => QQ.useObjectSpaceNormalMap,
            set: (QQ, WQ) => {
              QQ.useObjectSpaceNormalMap = WQ
            }
          },
          metadata: WQ
        }, Aq, Rq), (0, HQ.k)(QQ, null, GX, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useParallax" in QQ,
            get: QQ => QQ.useParallax,
            set: (QQ, WQ) => {
              QQ.useParallax = WQ
            }
          },
          metadata: WQ
        }, Eq, Cq), (0, HQ.k)(QQ, null, UX, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useParallaxOcclusion" in QQ,
            get: QQ => QQ.useParallaxOcclusion,
            set: (QQ, WQ) => {
              QQ.useParallaxOcclusion = WQ
            }
          },
          metadata: WQ
        }, uq, Lq), (0, HQ.k)(QQ, null, bX, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: QQ => "parallaxScaleBias" in QQ,
            get: QQ => QQ.parallaxScaleBias,
            set: (QQ, WQ) => {
              QQ.parallaxScaleBias = WQ
            }
          },
          metadata: WQ
        }, kq, fq), (0, HQ.k)(QQ, null, vX, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: QQ => "disableLighting" in QQ,
            get: QQ => QQ.disableLighting,
            set: (QQ, WQ) => {
              QQ.disableLighting = WQ
            }
          },
          metadata: WQ
        }, Sq, tq), (0, HQ.k)(QQ, null, dX, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: QQ => "forceIrradianceInFragment" in QQ,
            get: QQ => QQ.forceIrradianceInFragment,
            set: (QQ, WQ) => {
              QQ.forceIrradianceInFragment = WQ
            }
          },
          metadata: WQ
        }, oq, eq), (0, HQ.k)(QQ, null, HX, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: QQ => "maxSimultaneousLights" in QQ,
            get: QQ => QQ.maxSimultaneousLights,
            set: (QQ, WQ) => {
              QQ.maxSimultaneousLights = WQ
            }
          },
          metadata: WQ
        }, nq, xq), (0, HQ.k)(QQ, null, aX, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: QQ => "invertNormalMapX" in QQ,
            get: QQ => QQ.invertNormalMapX,
            set: (QQ, WQ) => {
              QQ.invertNormalMapX = WQ
            }
          },
          metadata: WQ
        }, Yq, Nq), (0, HQ.k)(QQ, null, lX, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: QQ => "invertNormalMapY" in QQ,
            get: QQ => QQ.invertNormalMapY,
            set: (QQ, WQ) => {
              QQ.invertNormalMapY = WQ
            }
          },
          metadata: WQ
        }, Zq, Oq), (0, HQ.k)(QQ, null, hX, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: QQ => "twoSidedLighting" in QQ,
            get: QQ => QQ.twoSidedLighting,
            set: (QQ, WQ) => {
              QQ.twoSidedLighting = WQ
            }
          },
          metadata: WQ
        }, Kq, mq), (0, HQ.k)(QQ, null, iX, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAlphaFresnel" in QQ,
            get: QQ => QQ.useAlphaFresnel,
            set: (QQ, WQ) => {
              QQ.useAlphaFresnel = WQ
            }
          },
          metadata: WQ
        }, Mq, QT), (0, HQ.k)(QQ, null, cX, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useLinearAlphaFresnel" in QQ,
            get: QQ => QQ.useLinearAlphaFresnel,
            set: (QQ, WQ) => {
              QQ.useLinearAlphaFresnel = WQ
            }
          },
          metadata: WQ
        }, WT, XT), (0, HQ.k)(QQ, null, AX, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "environmentBRDFTexture" in QQ,
            get: QQ => QQ.environmentBRDFTexture,
            set: (QQ, WQ) => {
              QQ.environmentBRDFTexture = WQ
            }
          },
          metadata: WQ
        }, wT, qT), (0, HQ.k)(QQ, null, RX, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: QQ => "forceNormalForward" in QQ,
            get: QQ => QQ.forceNormalForward,
            set: (QQ, WQ) => {
              QQ.forceNormalForward = WQ
            }
          },
          metadata: WQ
        }, TT, zT), (0, HQ.k)(QQ, null, EX, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: QQ => "enableSpecularAntiAliasing" in QQ,
            get: QQ => QQ.enableSpecularAntiAliasing,
            set: (QQ, WQ) => {
              QQ.enableSpecularAntiAliasing = WQ
            }
          },
          metadata: WQ
        }, sT, FT), (0, HQ.k)(QQ, null, CX, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useHorizonOcclusion" in QQ,
            get: QQ => QQ.useHorizonOcclusion,
            set: (QQ, WQ) => {
              QQ.useHorizonOcclusion = WQ
            }
          },
          metadata: WQ
        }, PT, gT), (0, HQ.k)(QQ, null, uX, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useRadianceOcclusion" in QQ,
            get: QQ => QQ.useRadianceOcclusion,
            set: (QQ, WQ) => {
              QQ.useRadianceOcclusion = WQ
            }
          },
          metadata: WQ
        }, JT, rT), (0, HQ.k)(QQ, null, LX, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: QQ => "unlit" in QQ,
            get: QQ => QQ.unlit,
            set: (QQ, WQ) => {
              QQ.unlit = WQ
            }
          },
          metadata: WQ
        }, IT, jT), (0, HQ.k)(QQ, null, kX, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: QQ => "applyDecalMapAfterDetailMap" in QQ,
            get: QQ => QQ.applyDecalMapAfterDetailMap,
            set: (QQ, WQ) => {
              QQ.applyDecalMapAfterDetailMap = WQ
            }
          },
          metadata: WQ
        }, BT, yT), WQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WQ
        })
      })(), QQ.PBRMATERIAL_OPAQUE = bW.PBRMATERIAL_OPAQUE, QQ.PBRMATERIAL_ALPHATEST = bW.PBRMATERIAL_ALPHATEST, QQ.PBRMATERIAL_ALPHABLEND = bW.PBRMATERIAL_ALPHABLEND, QQ.PBRMATERIAL_ALPHATESTANDBLEND = bW.PBRMATERIAL_ALPHATESTANDBLEND, QQ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = bW.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, QQ
    })();
    const Lq = "KHR_materials_diffuse_transmission";

    function kq(QQ, WQ) {
      const XQ = WQ.subSurface;
      let wQ = null;
      return XQ.translucencyIntensityTexture ? wQ = XQ.translucencyIntensityTexture : XQ.thicknessTexture && XQ.useMaskFromThicknessTexture && (wQ = XQ.thicknessTexture), wQ && !XQ.useGltfStyleTextures ? (lQ.b.Warn(`${QQ}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${WQ.name}`, 1), null) : wQ
    }
    class fq {
      constructor(QQ) {
        this.name = Lq, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        const wQ = [];
        if (XQ instanceof uq && this._isExtensionEnabled(XQ)) {
          const WQ = kq(QQ, XQ);
          return WQ && wQ.push(WQ), XQ.subSurface.translucencyColorTexture && wQ.push(XQ.subSurface.translucencyColorTexture), wQ
        }
        return wQ
      }
      _isExtensionEnabled(QQ) {
        if (QQ.unlit) return !1;
        const WQ = QQ.subSurface;
        return !!WQ.isTranslucencyEnabled && (!QQ.unlit && !WQ.useAlbedoToTintTranslucency && WQ.useGltfStyleTextures && 1 === WQ.volumeIndexOfRefraction && 0 === WQ.minimumThickness && 0 === WQ.maximumThickness)
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((wQ => {
          if (XQ instanceof uq && this._isExtensionEnabled(XQ)) {
            this._wasUsed = !0;
            const wQ = XQ.subSurface,
              qQ = kq(QQ, XQ),
              TQ = 0 == wQ.translucencyIntensity ? void 0 : wQ.translucencyIntensity,
              zQ = this._exporter._materialExporter.getTextureInfo(qQ) ?? void 0,
              sQ = !wQ.translucencyColor || wQ.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : wQ.translucencyColor.awQ(),
              FQ = this._exporter._materialExporter.getTextureInfo(wQ.translucencyColorTexture) ?? void 0,
              PQ = {
                diffuseTransmissionFactor: TQ,
                diffuseTransmissionTexture: zQ,
                diffuseTransmissionColorFactor: sQ,
                diffuseTransmissionColorTexture: FQ
              };
            (zQ || FQ) && this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions = WQ.extensions || {}, WQ.extensions[Lq] = PQ
          }
          wQ(WQ)
        }))
      }
    }
    let Sq = !1;

    function tq() {
      Sq || (Sq = !0, Cw.RegisterExtension(Lq, (QQ => new fq(QQ))))
    }
    tq();
    const oq = "KHR_materials_dispersion";
    class eq {
      constructor() {
        this.name = oq, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(QQ) {
        if (QQ.unlit) return !1;
        const WQ = QQ.subSurface;
        return !(!WQ.isRefractionEnabled && !WQ.isDispersionEnabled)
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          if (XQ instanceof uq && this._isExtensionEnabled(XQ)) {
            this._wasUsed = !0;
            const QQ = {
              dispersion: XQ.subSurface.dispersion
            };
            WQ.extensions = WQ.extensions || {}, WQ.extensions[oq] = QQ
          }
          QQ(WQ)
        }))
      }
    }
    let nq = !1;

    function xq() {
      nq || (nq = !0, Cw.RegisterExtension(oq, (() => new eq)))
    }
    xq();
    const Yq = "KHR_materials_emissive_strength";
    class Nq {
      constructor() {
        this.name = Yq, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(QQ, WQ, XQ) {
        return await new Promise((QQ => {
          if (!(XQ instanceof uq)) return QQ(WQ);
          const wQ = XQ.emissiveColor.scale(XQ.emissiveIntensity),
            qQ = Math.max(...wQ.awQ());
          if (qQ > 1) {
            WQ.emissiveFactor = wQ.scale(1 / qQ).awQ(), this._wasUsed = !0;
            const QQ = {
              emissiveStrength: qQ
            };
            WQ.extensions || (WQ.extensions = {}), WQ.extensions[Yq] = QQ
          } else WQ.emissiveFactor = wQ.awQ();
          return QQ(WQ)
        }))
      }
    }
    let Zq = !1;

    function Oq() {
      Zq || (Zq = !0, Cw.RegisterExtension(Yq, (() => new Nq)))
    }
    Oq();
    const Kq = "KHR_materials_ior";
    class mq {
      constructor() {
        this.name = Kq, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(QQ) {
        return !QQ.unlit && (QQ instanceof mW ? 1.5 != QQ.specularIor : QQ instanceof uq && (void 0 != QQ.indexOfRefraction && 1.5 != QQ.indexOfRefraction))
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          if (XQ instanceof uq && this._isExtensionEnabled(XQ)) {
            this._wasUsed = !0;
            const QQ = {
              ior: XQ.indexOfRefraction
            };
            WQ.extensions = WQ.extensions || {}, WQ.extensions[Kq] = QQ
          } else if (XQ instanceof mW && this._isExtensionEnabled(XQ)) {
            this._wasUsed = !0;
            const QQ = {
              ior: XQ.specularIor
            };
            WQ.extensions = WQ.extensions || {}, WQ.extensions[Kq] = QQ
          }
          QQ(WQ)
        }))
      }
    }
    let Mq = !1;

    function QT() {
      Mq || (Mq = !0, Cw.RegisterExtension(Kq, (() => new mq)))
    }
    QT();
    const WT = "KHR_materials_iridescence";
    class XT {
      constructor(QQ) {
        this.name = WT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        const wQ = [];
        if (XQ instanceof bW) {
          if (XQ.iridescence.isEnabled) return XQ.iridescence.texture && wQ.push(XQ.iridescence.texture), XQ.iridescence.thicknessTexture && XQ.iridescence.thicknessTexture !== XQ.iridescence.texture && wQ.push(XQ.iridescence.thicknessTexture), wQ
        } else if (XQ instanceof mW && XQ.thinFilmWeight > 0) return XQ.thinFilmWeightTexture && wQ.push(XQ.thinFilmWeightTexture), XQ.thinFilmThicknessTexture && XQ.thinFilmThicknessTexture !== XQ.thinFilmWeightTexture && wQ.push(XQ.thinFilmThicknessTexture), wQ;
        return []
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          if (XQ instanceof bW) {
            if (!XQ.iridescence.isEnabled) return void QQ(WQ);
            this._wasUsed = !0, WQ.extensions = WQ.extensions || {};
            const wQ = this._exporter._materialExporter.getTextureInfo(XQ.iridescence.texture),
              qQ = this._exporter._materialExporter.getTextureInfo(XQ.iridescence.thicknessTexture),
              TQ = {
                iridescenceFactor: XQ.iridescence.intensity,
                iridescenceIor: XQ.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: XQ.iridescence.minimumThickness,
                iridescenceThicknessMaximum: XQ.iridescence.maximumThickness,
                iridescenceTexture: wQ ?? void 0,
                iridescenceThicknessTexture: qQ ?? void 0
              };
            null === TQ.iridescenceTexture && null === TQ.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[WT] = TQ
          } else if (XQ instanceof mW) {
            if (XQ.thinFilmWeight <= 0) return void QQ(WQ);
            this._wasUsed = !0, WQ.extensions = WQ.extensions || {};
            const wQ = this._exporter._materialExporter.getTextureInfo(XQ.thinFilmWeightTexture),
              qQ = this._exporter._materialExporter.getTextureInfo(XQ.thinFilmThicknessTexture),
              TQ = {
                iridescenceFactor: XQ.thinFilmWeight,
                iridescenceIor: XQ.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * XQ.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * XQ.thinFilmThickness,
                iridescenceTexture: wQ ?? void 0,
                iridescenceThicknessTexture: qQ ?? void 0
              };
            null === TQ.iridescenceTexture && null === TQ.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[WT] = TQ
          }
          QQ(WQ)
        }))
      }
    }
    let wT = !1;

    function qT() {
      wT || (wT = !0, Cw.RegisterExtension(WT, (QQ => new XT(QQ))))
    }
    qT();
    const TT = "KHR_materials_sheen";
    class zT {
      constructor(QQ) {
        this.name = TT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        return XQ instanceof uq && XQ.sheen.isEnabled && XQ.sheen.texture ? [XQ.sheen.texture] : []
      }
      async postExportMaterialAsync(QQ, WQ, XQ) {
        return await new Promise((QQ => {
          if (XQ instanceof uq) {
            if (!XQ.sheen.isEnabled) return void QQ(WQ);
            this._wasUsed = !0, null == WQ.extensions && (WQ.extensions = {});
            const wQ = {
              sheenColorFactor: XQ.sheen.color.awQ(),
              sheenRoughnessFactor: XQ.sheen.roughness ?? 0
            };
            null === wQ.sheenColorTexture && null === wQ.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(XQ), XQ.sheen.texture && (wQ.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(XQ.sheen.texture) ?? void 0), XQ.sheen.textureRoughness && !XQ.sheen.useRoughnessFromMainTexture ? wQ.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(XQ.sheen.textureRoughness) ?? void 0 : XQ.sheen.texture && XQ.sheen.useRoughnessFromMainTexture && (wQ.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(XQ.sheen.texture) ?? void 0), WQ.extensions[TT] = wQ
          }
          QQ(WQ)
        }))
      }
    }
    let sT = !1;

    function FT() {
      sT || (sT = !0, Cw.RegisterExtension(TT, (QQ => new zT(QQ))))
    }
    FT();
    const PT = "KHR_materials_fuzz";

    function gT(QQ, WQ) {
      const XQ = new iQ.g(WQ.name, WQ.sE());
      return XQ._texture = QQ, XQ.coordinatesIndex = WQ.coordinatesIndex, WQ instanceof iQ.g && (XQ.uOffset = WQ.uOffset, XQ.vOffset = WQ.vOffset, XQ.uScale = WQ.uScale, XQ.vScale = WQ.vScale, XQ.wAng = WQ.wAng), XQ.wrapU = WQ.wrapU, XQ.wrapV = WQ.wrapV, XQ
    }
    class JT {
      constructor(QQ) {
        this.name = PT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = QQ
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
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        if (XQ instanceof mW) {
          const QQ = [];
          if (XQ.fuzzWeight > 0) {
            XQ.fuzzWeightTexture && QQ.push(XQ.fuzzWeightTexture);
            let WQ = !1;
            if (XQ.fuzzRoughnessTexture && (XQ._useFuzzRoughnessFromTextureAlpha ? QQ.push(XQ.fuzzRoughnessTexture) : WQ = !0), XQ.fuzzColorTexture && !WQ && QQ.push(XQ.fuzzColorTexture), WQ) {
              const WQ = function(QQ) {
                const WQ = QQ.fuzzColorTexture,
                  XQ = WQ && WQ.getInternalTexture() ? WQ.getInternalTexture().uniqueId : "NoFuzzColor",
                  wQ = QQ.fuzzRoughnessTexture;
                return `FuzzColor_${XQ}_FuzzRoughness_${wQ&&wQ.getInternalTexture()?wQ.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(XQ);
              if (!this._cachedInternalTexturesMap[WQ]) {
                const QQ = await async function(QQ) {
                  const WQ = QQ.sE(),
                    XQ = QQ.fuzzColorTexture,
                    wQ = QQ.fuzzRoughnessTexture;
                  return XQ || wQ ? (await zX("FuzzTexture", PX(XQ ? sX(XQ, 0) : FX(1), XQ ? sX(XQ, 1) : FX(1), XQ ? sX(XQ, 2) : FX(1), wQ ? sX(wQ, QQ._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : FX(1)), WQ)).getInternalTexture() : null
                }(XQ);
                QQ && (this._cachedInternalTexturesMap[WQ] = QQ)
              }
              this._cachedInternalTexturesMap[WQ] && (XQ.fuzzColorTexture && (this._mergedTexturesMap[XQ.fuzzColorTexture.uniqueId] = gT(this._cachedInternalTexturesMap[WQ], XQ.fuzzColorTexture), QQ.push(this._mergedTexturesMap[XQ.fuzzColorTexture.uniqueId])), XQ.fuzzRoughnessTexture && (this._mergedTexturesMap[XQ.fuzzRoughnessTexture.uniqueId] = gT(this._cachedInternalTexturesMap[WQ], XQ.fuzzRoughnessTexture), QQ.push(this._mergedTexturesMap[XQ.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return QQ
        }
        return []
      }
      async postExportMaterialAsync(QQ, WQ, XQ) {
        return await new Promise((QQ => {
          if (XQ instanceof mW) {
            if (0 == XQ.fuzzWeight) return void QQ(WQ);
            this._wasUsed = !0, null == WQ.extensions && (WQ.extensions = {});
            const wQ = {
              fuzzFactor: XQ.fuzzWeight,
              fuzzColorFactor: XQ.fuzzColor.awQ(),
              fuzzRoughnessFactor: XQ.fuzzRoughness
            };
            let qQ, TQ;
            XQ.fuzzWeightTexture && (wQ.fuzzTexture = this._exporter._materialExporter.getTextureInfo(XQ.fuzzWeightTexture) ?? void 0), XQ.fuzzColorTexture && (qQ = this._mergedTexturesMap[XQ.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[XQ.fuzzColorTexture.uniqueId] : XQ.fuzzColorTexture, wQ.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(qQ) ?? void 0), XQ.fuzzRoughnessTexture && (TQ = this._mergedTexturesMap[XQ.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[XQ.fuzzRoughnessTexture.uniqueId] : XQ.fuzzRoughnessTexture, wQ.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(TQ) ?? void 0), null === wQ.fuzzColorTexture && null === wQ.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[PT] = wQ
          }
          QQ(WQ)
        }))
      }
    }
    let rT = !1;

    function IT() {
      rT || (rT = !0, Cw.RegisterExtension(PT, (QQ => new JT(QQ))))
    }
    IT();
    const jT = "KHR_materials_specular";
    class BT {
      constructor(QQ) {
        this.name = jT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        const wQ = [];
        return XQ instanceof uq && this._isExtensionEnabled(XQ) ? (XQ.metallicReflectanceTexture && wQ.push(XQ.metallicReflectanceTexture), XQ.reflectanceTexture && wQ.push(XQ.reflectanceTexture), wQ) : wQ
      }
      _isExtensionEnabled(QQ) {
        return !QQ.unlit && (void 0 != QQ.metallicF0Factor && 1 != QQ.metallicF0Factor || void 0 != QQ.metallicReflectanceColor && !QQ.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(QQ))
      }
      _hasTexturesExtension(QQ) {
        return null != QQ.metallicReflectanceTexture || null != QQ.reflectanceTexture
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          var wQ;
          if (XQ instanceof uq && this._isExtensionEnabled(XQ)) {
            this._wasUsed = !0, WQ.extensions = WQ.extensions || {};
            const QQ = this._exporter._materialExporter.getTextureInfo(XQ.metallicReflectanceTexture) ?? void 0,
              wQ = this._exporter._materialExporter.getTextureInfo(XQ.reflectanceTexture) ?? void 0,
              qQ = {
                specularFactor: 1 == XQ.metallicF0Factor ? void 0 : XQ.metallicF0Factor,
                specularTexture: QQ,
                specularColorFactor: XQ.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : XQ.metallicReflectanceColor.awQ(),
                specularColorTexture: wQ
              };
            this._hasTexturesExtension(XQ) && this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[jT] = qQ
          } else if (XQ instanceof mW) {
            WQ.extensions = WQ.extensions || {};
            const qQ = this._exporter._materialExporter.getTextureInfo(XQ.specularWeightTexture) ?? void 0,
              TQ = this._exporter._materialExporter.getTextureInfo(XQ.specularColorTexture) ?? void 0,
              zQ = 1 == XQ.specularWeight ? void 0 : XQ.specularWeight,
              sQ = XQ.specularColor.equalsFloats(1, 1, 1) ? void 0 : XQ.specularColor.awQ();
            if (!TQ && !qQ && void 0 === zQ && void 0 === sQ) return QQ(WQ);
            this._wasUsed = !0;
            const FQ = {
                specularEdgeColorEnabled: !0
              },
              PQ = {
                specularFactor: zQ,
                specularTexture: qQ,
                specularColorFactor: sQ,
                specularColorTexture: TQ,
                extensions: {}
              };
            PQ.extensions.EXT_materials_specular_edge_color = FQ, (wQ = this._exporter._glTF).extensionsUsed || (wQ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (qQ || TQ) && this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[jT] = PQ
          }
          QQ(WQ)
        }))
      }
    }
    let yT = !1;

    function VT() {
      yT || (yT = !0, Cw.RegisterExtension(jT, (QQ => new BT(QQ))))
    }
    VT();
    const DT = "KHR_materials_transmission";
    class pT {
      constructor(QQ) {
        this.name = DT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        const wQ = [];
        if (XQ instanceof uq) {
          if (this._isExtensionEnabled(XQ)) return XQ.subSurface.refractionIntensityTexture && XQ.subSurface.useGltfStyleTextures && wQ.push(XQ.subSurface.refractionIntensityTexture), wQ
        } else XQ instanceof mW && (XQ.transmissionWeight > 0 && XQ.transmissionWeightTexture && (wQ.push(XQ.transmissionWeightTexture), XQ.transmissionColorTexture && wQ.push(XQ.transmissionColorTexture)), XQ.subsurfaceWeight > 0 && XQ.subsurfaceWeightTexture && wQ.push(XQ.subsurfaceWeightTexture));
        return wQ
      }
      _isExtensionEnabled(QQ) {
        if (QQ instanceof mW && !QQ.unlit) return QQ.transmissionWeight > 0 || QQ.subsurfaceWeight > 0;
        if (QQ instanceof uq && !QQ.unlit) {
          const WQ = QQ.subSurface;
          return WQ.isRefractionEnabled && void 0 != WQ.refractionIntensity && 0 != WQ.refractionIntensity || null != WQ.refractionIntensityTexture && WQ.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(QQ, WQ, XQ) {
        if (!this._isExtensionEnabled(XQ)) return WQ;
        if (XQ instanceof uq) {
          this._wasUsed = !0;
          const wQ = XQ.subSurface,
            qQ = {
              transmissionFactor: 0 === wQ.refractionIntensity ? void 0 : wQ.refractionIntensity
            };
          if (wQ.refractionIntensityTexture)
            if (wQ.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(XQ);
              const QQ = this._exporter._materialExporter.getTextureInfo(wQ.refractionIntensityTexture);
              QQ && (qQ.transmissionTexture = QQ)
            } else lQ.b.Warn(`${QQ}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          WQ.extensions || (WQ.extensions = {}), WQ.extensions[DT] = qQ
        } else if (XQ instanceof mW) {
          this._wasUsed = !0;
          const QQ = {
            transmissionFactor: (1 - XQ.transmissionWeight) * XQ.subsurfaceWeight + XQ.transmissionWeight
          };
          if (XQ.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(XQ);
            const WQ = this._exporter._materialExporter.getTextureInfo(XQ.transmissionWeightTexture);
            WQ && (QQ.transmissionTexture = WQ)
          } else if (XQ.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(XQ);
            const WQ = this._exporter._materialExporter.getTextureInfo(XQ.subsurfaceWeightTexture);
            WQ && (QQ.transmissionTexture = WQ)
          }
          if (0 == XQ.transmissionDepth && (!XQ.transmissionColor.equals(xQ.b.White()) || XQ.transmissionColorTexture) && WQ.pbrMetallicRoughness && (WQ.pbrMetallicRoughness.baseColorFactor || (WQ.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), WQ.pbrMetallicRoughness.baseColorFactor[0] *= XQ.transmissionColor.r, WQ.pbrMetallicRoughness.baseColorFactor[1] *= XQ.transmissionColor.g, WQ.pbrMetallicRoughness.baseColorFactor[2] *= XQ.transmissionColor.b, XQ.transmissionColorTexture && !WQ.pbrMetallicRoughness.baseColorTexture)) {
            const QQ = this._exporter._materialExporter.getTextureInfo(XQ.transmissionColorTexture);
            QQ && (WQ.pbrMetallicRoughness.baseColorTexture = QQ, this._exporter._materialNeedsUVsSet.add(XQ))
          }
          WQ.extensions || (WQ.extensions = {}), WQ.extensions[DT] = QQ
        }
        return WQ
      }
    }
    let GT = !1;

    function UT() {
      GT || (GT = !0, Cw.RegisterExtension(DT, (QQ => new pT(QQ))))
    }
    UT();
    var bT = XQ(40533);
    const vT = "KHR_materials_unlit";
    class dT {
      constructor() {
        this.name = vT, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          let wQ = !1;
          XQ instanceof uq ? wQ = XQ.unlit : XQ instanceof bT.i && (wQ = XQ.disableLighting), wQ && (this._wasUsed = !0, null == WQ.extensions && (WQ.extensions = {}), WQ.extensions[vT] = {}), QQ(WQ)
        }))
      }
    }
    let HT = !1;

    function aT() {
      HT || (HT = !0, Cw.RegisterExtension(vT, (() => new dT)))
    }
    aT();
    const lT = "KHR_materials_volume";
    class hT {
      constructor(QQ) {
        this.name = lT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        const wQ = [];
        if (XQ instanceof uq) {
          if (this._isExtensionEnabled(XQ)) return XQ.subSurface.thicknessTexture && wQ.push(XQ.subSurface.thicknessTexture), wQ
        } else XQ instanceof mW && (XQ.transmissionWeight > 0 || XQ.subsurfaceWeight > 0) && XQ.geometryThicknessTexture && wQ.push(XQ.geometryThicknessTexture);
        return wQ
      }
      _isExtensionEnabled(QQ) {
        if (QQ.unlit) return !1;
        const WQ = QQ.subSurface;
        return !(!WQ.isRefractionEnabled && !WQ.isTranslucencyEnabled) && (void 0 != WQ.maximumThickness && 0 != WQ.maximumThickness || void 0 != WQ.tintColorAtDistance && WQ.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != WQ.tintColor && WQ.tintColor != xQ.b.White() || this._hasTexturesExtension(QQ))
      }
      _hasTexturesExtension(QQ) {
        return null != QQ.subSurface.thicknessTexture
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          if (XQ instanceof uq && this._isExtensionEnabled(XQ)) {
            this._wasUsed = !0;
            const QQ = XQ.subSurface,
              wQ = {
                thicknessFactor: 0 == QQ.maximumThickness ? void 0 : QQ.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(QQ.thicknessTexture) ?? void 0,
                attenuationDistance: QQ.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : QQ.tintColorAtDistance,
                attenuationColor: QQ.tintColor.equalsFloats(1, 1, 1) ? void 0 : QQ.tintColor.awQ()
              };
            this._hasTexturesExtension(XQ) && this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions = WQ.extensions || {}, WQ.extensions[lT] = wQ
          } else if (XQ instanceof mW) {
            const QQ = XQ.transmissionWeight > 0 && !XQ.geometryThinWalled,
              wQ = XQ.subsurfaceWeight > 0 && !XQ.geometryThinWalled;
            if (QQ || wQ) {
              this._wasUsed = !0;
              const qQ = XQ.geometryThickness,
                TQ = this._exporter._materialExporter.getTextureInfo(XQ.geometryThicknessTexture) ?? void 0;
              let zQ;
              TQ && this._exporter._materialNeedsUVsSet.add(XQ);
              const sQ = xQ.b.White().awQ();
              if (QQ && XQ.transmissionDepth > 0) {
                const QQ = 1 / XQ.transmissionDepth;
                let WQ = new kQ.s(-Math.log(XQ.transmissionColor.r) * QQ, -Math.log(XQ.transmissionColor.g) * QQ, -Math.log(XQ.transmissionColor.b) * QQ);
                const wQ = new kQ.s(XQ.transmissionScatter.r * QQ, XQ.transmissionScatter.g * QQ, XQ.transmissionScatter.b * QQ),
                  qQ = WQ.subtract(wQ),
                  TQ = Math.min(qQ.x, qQ.y, qQ.z);
                TQ < 0 && (qQ.x = qQ.x - TQ, qQ.y = qQ.y - TQ, qQ.z = qQ.z - TQ), WQ = qQ.add(wQ);
                zQ = 1 / Math.max(WQ.x, WQ.y, WQ.z), sQ[0] = Math.exp(-WQ.x * zQ), sQ[1] = Math.exp(-WQ.y * zQ), sQ[2] = Math.exp(-WQ.z * zQ)
              } else zQ = Number.MAX_VALUE, sQ[0] = 1, sQ[1] = 1, sQ[2] = 1;
              let FQ = 1;
              const PQ = xQ.b.White().awQ();
              if (wQ) {
                const QQ = XQ.subsurfaceRadius,
                  WQ = XQ.subsurfaceRadiusScale,
                  wQ = new kQ.s(WQ.r, WQ.g, WQ.b).multiplyByFloats(QQ, QQ, QQ),
                  qQ = new kQ.s(1 / Math.max(wQ.x, 1e-6), 1 / Math.max(wQ.y, 1e-6), 1 / Math.max(wQ.z, 1e-6));
                FQ = 1 / Math.max(qQ.x, qQ.y, qQ.z), PQ[0] = Math.exp(-qQ.x * FQ), PQ[1] = Math.exp(-qQ.y * FQ), PQ[2] = Math.exp(-qQ.z * FQ)
              }
              const gQ = (1 - XQ.transmissionWeight) * XQ.subsurfaceWeight,
                JQ = gQ + XQ.transmissionWeight,
                rQ = 1 / Math.max(JQ, 1e-6),
                IQ = XQ.transmissionWeight * rQ,
                jQ = gQ * rQ,
                BQ = sQ.map(((QQ, WQ) => QQ * IQ + PQ[WQ] * jQ)),
                yQ = {
                  thicknessFactor: qQ,
                  thicknessTexture: TQ,
                  attenuationDistance: zQ * IQ + FQ * jQ,
                  attenuationColor: BQ
                };
              WQ.extensions = WQ.extensions || {}, WQ.extensions[lT] = yQ
            }
          }
          QQ(WQ)
        }))
      }
    }
    let iT = !1;

    function cT() {
      iT || (iT = !0, Cw.RegisterExtension(lT, (QQ => new hT(QQ))))
    }
    cT();
    const AT = "KHR_materials_volume_scatter";
    class RT {
      constructor(QQ) {
        this.name = AT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        const wQ = [];
        return XQ instanceof mW && (XQ.transmissionWeight > 0 && XQ.transmissionScatterTexture && wQ.push(XQ.transmissionScatterTexture), XQ.subsurfaceWeight > 0 && XQ.subsurfaceColorTexture && wQ.push(XQ.subsurfaceColorTexture)), wQ
      }
      _isExtensionEnabled(QQ) {
        if (QQ.unlit) return !1;
        const WQ = QQ.transmissionWeight > 0 && !QQ.geometryThinWalled && QQ.transmissionDepth > 0 && !QQ.transmissionScatter.equals(xQ.b.Black()),
          XQ = QQ.subsurfaceWeight > 0 && !QQ.geometryThinWalled;
        return !(!WQ && !XQ)
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          if (XQ instanceof mW && this._isExtensionEnabled(XQ)) {
            this._wasUsed = !0;
            let QQ = kQ.s.Zero(),
              wQ = 0;
            if (XQ.transmissionWeight > 0) {
              QQ = function(QQ) {
                const WQ = new kQ.s(Math.sqrt(1 - QQ.x), Math.sqrt(1 - QQ.y), Math.sqrt(1 - QQ.z)),
                  XQ = new kQ.s(1, 1, 1),
                  wQ = XQ.subtract(WQ),
                  qQ = XQ.subtract(new kQ.s(.139, .139, .139).multiplyInPlace(WQ)),
                  TQ = XQ.add(new kQ.s(1.17, 1.17, 1.17).multiplyInPlace(WQ));
                return wQ.multiplyInPlace(qQ).divideInPlace(TQ)
              }(new kQ.s(XQ.transmissionScatter.r, XQ.transmissionScatter.g, XQ.transmissionScatter.b)), wQ = XQ.transmissionScatterAnisotropy
            }
            const qQ = kQ.s.Zero();
            let TQ = 0;
            XQ.subsurfaceWeight > 0 && (qQ.set(XQ.subsurfaceColor.r, XQ.subsurfaceColor.g, XQ.subsurfaceColor.b), TQ = XQ.subsurfaceScatterAnisotropy);
            const zQ = (1 - XQ.transmissionWeight) * XQ.subsurfaceWeight,
              sQ = zQ + XQ.transmissionWeight,
              FQ = 1 / Math.max(sQ, 1e-6),
              PQ = XQ.transmissionWeight * FQ,
              gQ = zQ * FQ,
              JQ = {
                multiscatterColorFactor: QQ.multiplyByFloats(PQ, PQ, PQ).addInPlace(qQ.multiplyByFloats(gQ, gQ, gQ)).awQ(),
                scatterAnisotropy: wQ * PQ + TQ * gQ
              };
            if (XQ.subsurfaceWeight > 0 && XQ.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(XQ);
              const QQ = this._exporter._materialExporter.getTextureInfo(XQ.subsurfaceColorTexture);
              QQ && (JQ.multiscatterColorTexture = QQ)
            } else if (XQ.transmissionWeight > 0 && XQ.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(XQ);
              const QQ = this._exporter._materialExporter.getTextureInfo(XQ.transmissionScatterTexture);
              QQ && (JQ.multiscatterColorTexture = QQ)
            }
            WQ.extensions = WQ.extensions || {}, WQ.extensions[AT] = JQ
          }
          QQ(WQ)
        }))
      }
    }
    let ET = !1;

    function CT() {
      ET || (ET = !0, Cw.RegisterExtension(AT, (QQ => new RT(QQ)), 101))
    }
    CT();
    const uT = "KHR_materials_diffuse_roughness";
    class LT {
      constructor(QQ) {
        this.name = uT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
        const wQ = [];
        if (XQ instanceof bW) {
          if (XQ._baseDiffuseRoughness) return XQ._baseDiffuseRoughnessTexture && wQ.push(XQ._baseDiffuseRoughnessTexture), wQ
        } else if (XQ instanceof mW && XQ.baseDiffuseRoughness) return XQ.baseDiffuseRoughnessTexture && wQ.push(XQ.baseDiffuseRoughnessTexture), wQ;
        return []
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          let wQ = null,
            qQ = null;
          if (XQ instanceof bW ? (wQ = XQ._baseDiffuseRoughness, qQ = XQ._baseDiffuseRoughnessTexture) : XQ instanceof mW && (wQ = XQ.baseDiffuseRoughness, qQ = XQ.baseDiffuseRoughnessTexture), !wQ) return void QQ(WQ);
          this._wasUsed = !0, WQ.extensions = WQ.extensions || {};
          const TQ = {
            diffuseRoughnessFactor: wQ,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(qQ) ?? void 0
          };
          null !== TQ.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions[uT] = TQ, QQ(WQ)
        }))
      }
    }
    let kT = !1;

    function fT() {
      kT || (kT = !0, Cw.RegisterExtension(uT, (QQ => new LT(QQ))))
    }
    fT();
    const ST = "KHR_materials_openpbr";
    class tT {
      constructor() {
        this.name = ST, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(QQ, WQ, XQ) {
        return new Promise((QQ => {
          XQ instanceof mW && (this._wasUsed = !0, WQ.extensions = WQ.extensions || {}, WQ.extensions[ST] = {}), QQ(WQ)
        }))
      }
    }
    let oT = !1;

    function eT() {
      oT || (oT = !0, Cw.RegisterExtension(ST, (() => new tT)))
    }
    eT();
    const nT = "KHR_texture_transform";
    class xT {
      constructor() {
        this.name = nT, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(QQ, WQ, XQ) {
        if (XQ.sE() || dW.g.Warn(`${QQ}: "scene" is not defined for Babylon texture ${XQ.name}!`), (0 !== XQ.uAng || 0 !== XQ.vAng) && (dW.g.Warn(`${QQ}: Texture ${XQ.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== XQ.uRotationCenter || 0 !== XQ.vRotationCenter)) return;
        const wQ = {};
        let qQ = !1;
        if (0 === XQ.uOffset && 0 === XQ.vOffset || (wQ.offset = [XQ.uOffset, XQ.vOffset], qQ = !0), 1 === XQ.uScale && 1 === XQ.vScale || (wQ.scale = [XQ.uScale, XQ.vScale], qQ = !0), 0 !== XQ.wAng) {
          if (0 !== XQ.uRotationCenter || 0 !== XQ.vRotationCenter) {
            if (XQ.homogeneousRotationInUVTransform && XQ.uScale !== XQ.vScale) return void dW.g.Warn(`${QQ}: Texture ${XQ.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${nT}.`);
            dW.g.Warn(`${QQ}: Texture ${XQ.name} with non-origin rotation center will be exported using an adjusted offset with ${nT}.`), wQ.offset = function(QQ) {
              const {
                uOffset: WQ,
                vOffset: XQ,
                uRotationCenter: wQ,
                vRotationCenter: qQ,
                uScale: TQ,
                vScale: zQ,
                wAng: sQ
              } = QQ, FQ = Math.cos(sQ), PQ = Math.sin(sQ), gQ = wQ * TQ, JQ = qQ * zQ;
              return [WQ + (gQ * (1 - FQ) + JQ * PQ), XQ + (JQ * (1 - FQ) - gQ * PQ)]
            }(XQ)
          }
          wQ.rotation = -XQ.wAng, qQ = !0
        }
        0 !== XQ.coordinatesIndex && (wQ.texCoord = XQ.coordinatesIndex, qQ = !0), qQ && (this._wasUsed = !0, WQ.extensions || (WQ.extensions = {}), WQ.extensions[nT] = wQ)
      }
    }
    let YT = !1;

    function NT() {
      YT || (YT = !0, Cw.RegisterExtension(nT, (() => new xT)))
    }
    NT();
    var ZT = XQ(40307);
    const OT = "KHR_texture_basisu";
    class KT {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(QQ) {
        this.name = OT, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      postExportTexture(QQ, WQ) {
        const XQ = this._exporter._textures[WQ.index],
          wQ = XQ.source;
        if (void 0 === wQ) return;
        const qQ = this._exporter._images[wQ];
        "image/ktx2" === (qQ.mimeType || (0, ZT.i)(qQ.uri)) && (XQ.source = void 0, XQ.extensions || (XQ.extensions = {}), XQ.extensions[OT] = {
          source: wQ
        }, this._wasUsed = !0)
      }
    }
    let mT = !1;

    function MT() {
      mT || (mT = !0, Cw.RegisterExtension(OT, (QQ => new KT(QQ))))
    }
    MT();
    const Qz = "EXT_texture_webp";
    class Wz {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(QQ) {
        this.name = Qz, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      postExportTexture(QQ, WQ) {
        const XQ = this._exporter._textures[WQ.index],
          wQ = XQ.source;
        if (void 0 === wQ) return;
        const qQ = this._exporter._images[wQ];
        "image/webp" === (qQ.mimeType || (0, ZT.i)(qQ.uri)) && (XQ.source = void 0, XQ.extensions || (XQ.extensions = {}), XQ.extensions[Qz] = {
          source: wQ
        }, this._wasUsed = !0)
      }
    }
    let Xz = !1;

    function wz() {
      Xz || (Xz = !0, Cw.RegisterExtension(Qz, (QQ => new Wz(QQ))))
    }
    wz();
    const qz = "EXT_texture_avif";
    class Tz {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(QQ) {
        this.name = qz, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = QQ
      }
      dispose() {}
      postExportTexture(QQ, WQ) {
        const XQ = this._exporter._textures[WQ.index],
          wQ = XQ.source;
        if (void 0 === wQ) return;
        const qQ = this._exporter._images[wQ];
        "image/avif" === (qQ.mimeType || (0, ZT.i)(qQ.uri)) && (XQ.source = void 0, XQ.extensions || (XQ.extensions = {}), XQ.extensions[qz] = {
          source: wQ
        }, this._wasUsed = !0)
      }
    }
    let zz = !1;

    function sz() {
      zz || (zz = !0, Cw.RegisterExtension(qz, (QQ => new Tz(QQ))))
    }
    sz();
    class Fz {
      static CreateSTL(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          TQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          zQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          sQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          FQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const PQ = function(QQ, WQ, XQ) {
            const qQ = [3 * QQ[XQ], 3 * QQ[XQ + 1], 3 * QQ[XQ + 2]],
              TQ = [new wQ.vj(WQ[qQ[0]], WQ[qQ[0] + 2], WQ[qQ[0] + 1]), new wQ.vj(WQ[qQ[1]], WQ[qQ[1] + 2], WQ[qQ[1] + 1]), new wQ.vj(WQ[qQ[2]], WQ[qQ[2] + 2], WQ[qQ[2] + 1])],
              zQ = TQ[0].subtract(TQ[1]),
              sQ = TQ[2].subtract(TQ[1]);
            return {
              v: TQ,
              n: wQ.vj.Cross(sQ, zQ).normalize()
            }
          },
          JQ = function(QQ, WQ, XQ, wQ) {
            return WQ = rQ(QQ, WQ, XQ.x, wQ), WQ = rQ(QQ, WQ, XQ.y, wQ), rQ(QQ, WQ, XQ.z, wQ)
          },
          rQ = function(QQ, WQ, XQ, wQ) {
            return QQ.setFloat32(WQ, XQ, wQ), WQ + 4
          },
          jQ = function(QQ) {
            if (sQ) {
              let WQ = QQ;
              QQ instanceof IQ.b && (WQ = QQ.bqQ);
              const XQ = WQ.getVerticesData(gQ.f.PositionKind, !0, !0);
              if (!XQ) return [];
              const qQ = wQ.vj.Zero();
              let TQ;
              for (TQ = 0; TQ < XQ.length; TQ += 3) wQ.vj.TransformCoordinatesFromFloatsToRef(XQ[TQ], XQ[TQ + 1], XQ[TQ + 2], QQ.computeWorldMatrix(!0), qQ).toArray(XQ, TQ);
              return XQ
            }
            return QQ.getVerticesData(gQ.f.PositionKind) || []
          };
        sQ && (zQ = !0);
        let BQ = "",
          yQ = 0,
          VQ = 0;
        if (qQ) {
          for (let XQ = 0; XQ < QQ.length; XQ++) {
            const WQ = QQ[XQ].lwQ();
            yQ += WQ ? WQ.length / 3 : 0
          }
          const WQ = new ArrayBuffer(84 + 50 * yQ);
          BQ = new DataView(WQ), VQ += 80, BQ.setUint32(VQ, yQ, TQ), VQ += 4
        } else FQ || (BQ = "solid stlmesh\r\n");
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          const WQ = QQ[wQ];
          !qQ && FQ && (BQ += "solid " + WQ.name + "\r\n"), !zQ && WQ instanceof Pw.b && WQ.bakeCurrentTransformIntoVertices();
          const XQ = jQ(WQ),
            sQ = WQ.lwQ() || [];
          for (let QQ = 0; QQ < sQ.length; QQ += 3) {
            const WQ = PQ(sQ, XQ, QQ);
            qQ ? (VQ = JQ(BQ, VQ, WQ.n, TQ), VQ = JQ(BQ, VQ, WQ.v[0], TQ), VQ = JQ(BQ, VQ, WQ.v[1], TQ), VQ = JQ(BQ, VQ, WQ.v[2], TQ), VQ += 2) : (BQ += "\tfacet normal " + WQ.n.x + " " + WQ.n.y + " " + WQ.n.z + "\r\n", BQ += "\t\touter loop\r\n", BQ += "\t\t\tvertex " + WQ.v[0].x + " " + WQ.v[0].y + " " + WQ.v[0].z + "\r\n", BQ += "\t\t\tvertex " + WQ.v[1].x + " " + WQ.v[1].y + " " + WQ.v[1].z + "\r\n", BQ += "\t\t\tvertex " + WQ.v[2].x + " " + WQ.v[2].y + " " + WQ.v[2].z + "\r\n", BQ += "\t\tendloop\r\n", BQ += "\tendfacet\r\n")
          }!qQ && FQ && (BQ += "endsolid " + name + "\r\n")
        }
        if (qQ || FQ || (BQ += "endsolid stlmesh"), WQ) {
          const QQ = document.createElement("a"),
            WQ = new Blob([BQ], {
              type: "application/octet-stream"
            });
          QQ.href = window.URL.createObjectURL(WQ), QQ.download = XQ + ".stl", QQ.click()
        }
        return BQ
      }
    }

    function Pz(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const qQ = [];
      for (let TQ = 0; TQ < QQ.length / XQ; TQ++) {
        const zQ = QQ[TQ * XQ] * (wQ ? -1 : 1),
          sQ = QQ[TQ * XQ + 1],
          FQ = QQ[TQ * XQ + 2];
        qQ.push(`(${zQ.toPrecision(WQ.precision)}, ${sQ.toPrecision(WQ.precision)}, ${FQ.toPrecision(WQ.precision)})`)
      }
      return qQ.join(", ")
    }

    function gz(QQ, WQ) {
      const XQ = [];
      for (let wQ = 0; wQ < QQ.length / 2; wQ++) {
        const qQ = QQ[2 * wQ],
          TQ = QQ[2 * wQ + 1];
        XQ.push(`(${qQ.toPrecision(WQ.precision)}, ${(1-TQ).toPrecision(WQ.precision)})`)
      }
      return XQ.join(", ")
    }

    function Jz(QQ, WQ, XQ, wQ) {
      const qQ = QQ.getVerticesData(gQ.f.PositionKind),
        TQ = QQ.getVerticesData(gQ.f.NormalKind);
      if (qQ && TQ) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${XQ}"\n\t\tint[] faceVertexCounts = [${function(QQ){const WQ=QQ.lwQ()?.length?QQ.getTotalIndices():QQ.getTotalVertices();return Array(WQ/3).fill(3).join(", ")}(QQ)}]\n\t\tint[] faceVertexIndices = [${function(QQ){const WQ=QQ.lwQ(),XQ=WQ?.length??QQ.getTotalVertices(),wQ=[];if(null!==WQ)for(let qQ=0;qQ<XQ;qQ++)wQ.push(WQ[qQ]);else for(let qQ=0;qQ<XQ;qQ++)wQ.push(qQ);return wQ.join(", ")}(QQ)}]\n\t\tnormal3f[] normals = [${Pz(TQ,WQ,void 0,wQ)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${Pz(qQ,WQ,void 0,wQ)}]\n        ${function(QQ,WQ){let XQ="";for(let qQ=0;qQ<4;qQ++){const wQ=qQ>0?qQ:"",TQ=QQ.getVerticesData(gQ.f.UVKind+(wQ?wQ+1:""));TQ&&(XQ+=`\n\t\ttexCoord2f[] primvars:st${wQ} = [${gz(TQ,WQ)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const wQ=QQ.getVerticesData(gQ.f.ColorKind);return wQ&&(XQ+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        Pz(wQ, WQ, wQ.length / QQ.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),XQ}(QQ,WQ)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function rz(QQ, WQ, XQ, wQ) {
      return `\n        def "Geometry"\n        {\n        ${Jz(QQ,WQ,XQ,wQ)}\n        }\n        `
    }

    function Iz(QQ) {
      let WQ = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return WQ += QQ, fflate.strToU8(WQ)
    }

    function jz(QQ) {
      const WQ = QQ.m;
      return `( ${Bz(WQ,0)}, ${Bz(WQ,4)}, ${Bz(WQ,8)}, ${Bz(WQ,12)} )`
    }

    function Bz(QQ, WQ) {
      return `(${QQ[WQ+0]}, ${QQ[WQ+1]}, ${QQ[WQ+2]}, ${QQ[WQ+3]})`
    }

    function yz(QQ, WQ) {
      const XQ = "Object_" + QQ.uniqueId,
        wQ = jz(WQ);
      return `def Xform "${XQ}" (\n\tprepend references = @./geometries/Geometry_${QQ.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${wQ}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${QQ.material.uniqueId}>\n}\n\n`
    }

    function Vz(QQ) {
      switch (QQ) {
        case vQ.b.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case vQ.b.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case vQ.b.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function Dz(QQ) {
      return `(${QQ.x}, ${QQ.y})`
    }

    function pz(QQ) {
      return `(${QQ.r}, ${QQ.g}, ${QQ.b})`
    }

    function Gz(QQ) {
      return "image/jpeg" === QQ || "image/png" === QQ
    }

    function Uz(QQ, WQ, XQ, qQ, TQ, zQ) {
      const sQ = QQ.getInternalTexture().uniqueId + "_" + QQ.invertY,
        PQ = QQ.mimeType || (0, FQ.b)(QQ.getInternalTexture()?.url ?? ""),
        gQ = Gz(PQ) ? PQ : "image/png",
        JQ = "image/jpeg" === gQ ? "jpg" : "png";
      TQ[sQ] = {
        texture: QQ,
        mimeType: gQ,
        ext: JQ
      };
      const rQ = QQ.coordinatesIndex > 0 ? "st" + QQ.coordinatesIndex : "st",
        IQ = new wQ.Vector2(QQ.uScale, QQ.vScale),
        jQ = new wQ.Vector2(QQ.uOffset, QQ.vOffset),
        BQ = QQ.wAng,
        yQ = Math.sin(BQ),
        VQ = Math.cos(BQ);
      return jQ.y = 1 - jQ.y - IQ.y, jQ.x += yQ * IQ.x, jQ.y += (1 - VQ) * IQ.y, `\n    def Shader "PrimvarReader_${XQ}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${rQ}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${XQ}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${WQ.uniqueId}/PrimvarReader_${XQ}.outputs:result>\n        float inputs:rotation = ${(BQ*(180/Math.PI)).toFixed(zQ.precision)}\n        float2 inputs:scale = ${Dz(IQ)}\n        float2 inputs:translation = ${Dz(jQ)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${QQ.uniqueId}_${XQ}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${sQ}.${JQ}@\n        float2 inputs:st.connect = </Root/Materials/Material_${WQ.uniqueId}/Transform2d_${XQ}.outputs:result>\n        ${qQ?"float4 inputs:scale = "+function(QQ){return`(${QQ.r}, ${QQ.g}, ${QQ.b}, 1.0)`}(qQ):""}\n        token inputs:sourceColorSpace = "${QQ.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Vz(QQ.wrapU)}"\n        token inputs:wrapT = "${Vz(QQ.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${WQ.needAlphaBlending()||WQ.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function bz(QQ, WQ, XQ) {
      const wQ = "\t\t\t",
        qQ = [],
        TQ = [],
        {
          diffuseMap: zQ,
          diffuse: sQ,
          alphaCutOff: FQ,
          emissiveMap: PQ,
          emissive: gQ,
          normalMap: JQ,
          roughnessMap: rQ,
          roughnessChannel: IQ,
          roughness: jQ,
          metalnessMap: BQ,
          metalnessChannel: VQ,
          metalness: DQ,
          aoMap: pQ,
          aoMapChannel: GQ,
          aoMapIntensity: UQ,
          alphaMap: bQ,
          ior: vQ,
          clearCoatEnabled: dQ,
          clearCoat: HQ,
          clearCoatMap: aQ,
          clearCoatRoughness: lQ,
          clearCoatRoughnessMap: hQ
        } = function(QQ) {
          const WQ = {
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
          return QQ instanceof Tw.StandardMaterial ? {
            ...WQ,
            diffuseMap: QQ.diffuseTexture,
            diffuse: QQ.diffuseColor,
            alphaCutOff: QQ.alphaCutOff,
            emissiveMap: QQ.emissiveTexture,
            emissive: QQ.emissiveColor,
            roughness: 1,
            alphaMap: QQ.opacityTexture
          } : QQ instanceof bW ? {
            ...WQ,
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
          } : WQ
        }(QQ);
      return null !== zQ ? (qQ.push(`${wQ}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${zQ.uniqueId}_diffuse.outputs:rgb>`), QQ.needAlphaBlending() ? qQ.push(`${wQ}float inputs:opacity.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${zQ.uniqueId}_diffuse.outputs:a>`) : QQ.needAlphaTesting() && (qQ.push(`${wQ}float inputs:opacity.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${zQ.uniqueId}_diffuse.outputs:a>`), qQ.push(`${wQ}float inputs:opacityThreshold = ${FQ}`)), TQ.push(Uz(zQ, QQ, "diffuse", sQ, WQ, XQ))) : qQ.push(`${wQ}color3f inputs:diffuseColor = ${pz(sQ||yQ.Color3.White())}`), null !== PQ ? (qQ.push(`${wQ}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${PQ.uniqueId}_emissive.outputs:rgb>`), TQ.push(Uz(PQ, QQ, "emissive", gQ, WQ, XQ))) : gQ && gQ.toLuminance() > 0 && qQ.push(`${wQ}color3f inputs:emissiveColor = ${pz(gQ)}`), null !== JQ && (qQ.push(`${wQ}normal3f inputs:normal.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${JQ.uniqueId}_normal.outputs:rgb>`), TQ.push(Uz(JQ, QQ, "normal", null, WQ, XQ))), null !== pQ && (qQ.push(`${wQ}float inputs:occlusion.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${pQ.uniqueId}_occlusion.outputs:${GQ}>`), TQ.push(Uz(pQ, QQ, "occlusion", new yQ.Color3(UQ, UQ, UQ), WQ, XQ))), null !== rQ ? (qQ.push(`${wQ}float inputs:roughness.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${rQ.uniqueId}_roughness.outputs:${IQ}>`), TQ.push(Uz(rQ, QQ, "roughness", new yQ.Color3(jQ, jQ, jQ), WQ, XQ))) : qQ.push(`${wQ}float inputs:roughness = ${jQ}`), null !== BQ ? (qQ.push(`${wQ}float inputs:metallic.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${BQ.uniqueId}_metallic.outputs:${VQ}>`), TQ.push(Uz(BQ, QQ, "metallic", new yQ.Color3(DQ, DQ, DQ), WQ, XQ))) : qQ.push(`${wQ}float inputs:metallic = ${DQ}`), null !== bQ ? (qQ.push(`${wQ}float inputs:opacity.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${bQ.uniqueId}_opacity.outputs:r>`), qQ.push(`${wQ}float inputs:opacityThreshold = 0.0001`), TQ.push(Uz(bQ, QQ, "opacity", null, WQ, XQ))) : qQ.push(`${wQ}float inputs:opacity = ${QQ.alpha}`), dQ && (null !== aQ ? (qQ.push(`${wQ}float inputs:clearcoat.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${aQ.uniqueId}_clearcoat.outputs:r>`), TQ.push(Uz(aQ, QQ, "clearcoat", new yQ.Color3(HQ, HQ, HQ), WQ, XQ))) : qQ.push(`${wQ}float inputs:clearcoat = ${HQ}`), null !== hQ ? (qQ.push(`${wQ}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${QQ.uniqueId}/Texture_${hQ.uniqueId}_clearcoatRoughness.outputs:g>`), TQ.push(Uz(hQ, QQ, "clearcoatRoughness", new yQ.Color3(lQ, lQ, lQ), WQ, XQ))) : qQ.push(`${wQ}float inputs:clearcoatRoughness = ${lQ}`)), qQ.push(`${wQ}float inputs:ior = ${vQ}`), `\n\tdef Material "Material_${QQ.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${qQ.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${QQ.uniqueId}/PreviewSurface.outputs:surface>\n\n${TQ.join("\n")}\n\n\t}\n`
    }

    function vz(QQ) {
      QQ.computeWorldMatrix(!0);
      const WQ = QQ.getWorldMatrix().clone(),
        XQ = QQ.sE().useRightHandedSystem;
      let wQ = QQ.material?._getEffectiveOrientation(QQ) ?? QQ.sideOrientation,
        zQ = !XQ,
        sQ = QQ.parent;
      for (; sQ;) {
        if (CX(sQ, XQ) && null === sQ.parent) {
          XQ || (WQ.multiplyToRef(sQ.getWorldMatrix().invert(), WQ), wQ = wQ === TQ.b.ClockWiseSideOrientation ? TQ.b.CounterClockWiseSideOrientation : TQ.b.ClockWiseSideOrientation), zQ = !1;
          break
        }
        sQ = sQ.parent
      }
      return WQ.determinant() < 0 && qQ.Tools.Warn(`Mesh ${QQ.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: WQ,
        windingOrder: wQ === TQ.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: zQ
      }
    }
    async function dz(QQ, WQ, XQ) {
      const TQ = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...WQ
      };
      "undefined" === typeof fflate && await qQ.Tools.LoadScriptAsync(TQ.fflateUrl);
      const zQ = {};
      zQ[TQ.modelFileName] = null;
      let sQ = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      sQ += function(QQ) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===QQ.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${QQ.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${QQ.planeAnchoringAlignment}"`:""}\n            `
      }(TQ);
      const FQ = {};
      for (const wQ of QQ.meshes) {
        if (0 === wQ.getTotalVertices()) continue;
        const QQ = wQ,
          WQ = QQ.geometry,
          PQ = QQ.material;
        if (!PQ || !WQ || XQ && !XQ(QQ)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(PQ.getClassName())) {
          const XQ = "geometries/Geometry_" + WQ.uniqueId + ".usda",
            {
              matrix: wQ,
              windingOrder: qQ,
              convertToRightHanded: gQ
            } = vz(QQ);
          if (!(XQ in zQ)) {
            const QQ = rz(WQ, TQ, qQ, gQ);
            zQ[XQ] = Iz(QQ)
          }
          PQ.uniqueId in FQ || (FQ[PQ.uniqueId] = PQ), sQ += yz(QQ, wQ)
        } else qQ.Tools.Warn("USDZExportAsync does not support this material type: " + PQ.getClassName())
      }
      QQ.activeCamera && TQ.exportCamera && (sQ += function(QQ, WQ) {
        const XQ = "Camera_" + QQ.uniqueId,
          qQ = jz(wQ.Matrix.RotationY(Math.PI).multiply(QQ.getWorldMatrix()));
        if (QQ.mode === vQ.b.ORTHOGRAPHIC_CAMERA) return `def Camera "${XQ}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${qQ}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${QQ.minZ.toPrecision(WQ.precision)}, ${QQ.maxZ.toPrecision(WQ.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(QQ.orthoLeft||1)+Math.abs(QQ.orthoRight||1))).toPrecision(WQ.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(QQ.orthoTop||1)+Math.abs(QQ.orthoBottom||1))).toPrecision(WQ.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const wQ = QQ.Uj().getAspectRatio(QQ),
            TQ = WQ.cameraSensorWidth || 35;
          return `def Camera "${XQ}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${qQ}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${QQ.minZ.toPrecision(WQ.precision)}, ${QQ.maxZ.toPrecision(WQ.precision)})\n\t\t\tfloat focalLength = ${(TQ/(2*Math.tan(.5*QQ.fov))).toPrecision(WQ.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(TQ*wQ).toPrecision(WQ.precision)}\n\t\t\tfloat verticalAperture = ${(TQ/wQ).toPrecision(WQ.precision)}            \n\t\t}\n\t\n\t`
        }
      }(QQ.activeCamera, TQ)), sQ += "\n            }\n        }";
      const PQ = {};
      sQ += function(QQ, WQ, XQ) {
        const wQ = [];
        for (const qQ in QQ) {
          const TQ = QQ[qQ];
          wQ.push(bz(TQ, WQ, XQ))
        }
        return `\n    def "Materials"\n{\n${wQ.join("")}\n}\n\n`
      }(FQ, PQ, TQ), sQ += "\n    }", zQ[TQ.modelFileName] = fflate.strToU8(sQ);
      for (const wQ in PQ) {
        const {
          texture: QQ,
          ext: WQ,
          mimeType: XQ
        } = PQ[wQ], qQ = await VX(QQ);
        if (qQ && Gz(qQ.mimeType) && qQ.mimeType === XQ) zQ[`textures/Texture_${wQ}.${WQ}`] = new Uint8Array(qQ.data);
        else {
          const qQ = QQ.getSize(),
            TQ = await (0, GQ.d)(QQ),
            sQ = await dQ.DumpTools.DumpDataAsync(qQ.width, qQ.height, TQ, XQ, void 0, !1, !0);
          zQ[`textures/Texture_${wQ}.${WQ}`] = new Uint8Array(sQ).slice()
        }
      }
      let gQ = 0;
      for (const wQ in zQ) {
        const QQ = zQ[wQ];
        if (!QQ) continue;
        gQ += 34 + wQ.length;
        const WQ = 63 & gQ;
        if (4 !== WQ) {
          const XQ = new Uint8Array(64 - WQ);
          zQ[wQ] = [QQ, {
            extra: {
              12345: XQ
            }
          }]
        }
        gQ = QQ.length
      }
      return fflate.zipSync(zQ, {
        level: 0
      })
    }
    var Hz = XQ(41313);
    class az {
      static Export(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        if (!QQ || 0 === QQ.bones.length) throw new Error("Invalid or empty skeleton provided");
        let wQ = WQ;
        WQ && 0 !== WQ.length || (wQ = QQ.animations.map((QQ => QQ.name)));
        let qQ = null;
        for (const PQ of wQ) {
          const WQ = QQ.getAnimationRange(PQ);
          WQ && (qQ = qQ ? new Hz.b("animation-range", Math.min(qQ.from, WQ.from), Math.max(qQ.to, WQ.to)) : WQ)
        }
        if (!qQ && (QQ.animations.length > 0 && (qQ = QQ.getAnimationRange(QQ.animations[0].name)), !qQ)) throw new Error("No animation range found in skeleton");
        const TQ = XQ || 1 / (QQ.animations[0]?.framePerSecond || 30),
          zQ = this._BuildBoneHierarchy(QQ, wQ);
        let sQ = 0;
        for (const PQ of zQ) PQ.positionKeys.length > 0 && (sQ = Math.max(sQ, PQ.positionKeys.length)), PQ.rotationKeys.length > 0 && (sQ = Math.max(sQ, PQ.rotationKeys.length));
        0 === sQ && (sQ = Math.floor((qQ.to - qQ.from) / TQ) + 1);
        let FQ = "";
        return FQ += "HIERARCHY\n", FQ += this._ExportHierarchy(zQ, 0), FQ += "MOTION\n", FQ += `Frames: ${sQ}\n`, FQ += `Frame Time: ${TQ.toFixed(6)}\n`, FQ += this._ExportMotionData(zQ, sQ, 0, wQ), FQ
      }
      static _BuildBoneHierarchy(QQ, WQ) {
        const XQ = new Map,
          wQ = [];
        for (const qQ of QQ.bones) {
          const QQ = {
            bone: qQ,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          XQ.set(qQ, QQ)
        }
        for (const qQ of QQ.bones) {
          const QQ = XQ.get(qQ);
          if (qQ.animations.length > 0)
            for (const XQ of qQ.animations) WQ.includes(XQ.name) && ("position" === XQ.targetProperty ? (QQ.hasPositionChannels = !0, QQ.positionKeys.push(...XQ.getKeys())) : "rotationQuaternion" === XQ.targetProperty && (QQ.hasRotationChannels = !0, QQ.rotationKeys.push(...XQ.getKeys())));
          if (qQ.getParent()) {
            const WQ = XQ.get(qQ.getParent());
            WQ && WQ.children.push(QQ)
          } else wQ.push(QQ)
        }
        return wQ
      }
      static _ExportHierarchy(QQ, WQ) {
        let XQ = "";
        const wQ = "    ".repeat(WQ);
        for (const qQ of QQ) {
          const QQ = qQ.bone;
          if (this._IsEndSite(qQ)) {
            XQ += `${wQ}End Site\n`, XQ += `${wQ}{\n`;
            const WQ = this._GetBoneOffset(QQ);
            XQ += `${wQ}    OFFSET ${WQ.x.toFixed(6)} ${WQ.y.toFixed(6)} ${WQ.z.toFixed(6)}\n`, XQ += `${wQ}}\n`
          } else {
            XQ += `${0===WQ?"ROOT":`${wQ}JOINT`} ${QQ.name}\n`, XQ += `${wQ}{\n`;
            const TQ = this._GetBoneOffset(QQ);
            XQ += `${wQ}    OFFSET ${TQ.x.toFixed(6)} ${TQ.y.toFixed(6)} ${TQ.z.toFixed(6)}\n`;
            const zQ = [];
            qQ.hasPositionChannels && zQ.push("Xposition", "Yposition", "Zposition"), qQ.hasRotationChannels && zQ.push("Zrotation", "Xrotation", "Yrotation"), zQ.length > 0 && (XQ += `${wQ}    CHANNELS ${zQ.length} ${zQ.join(" ")}\n`), qQ.children.length > 0 && (XQ += this._ExportHierarchy(qQ.children, WQ + 1)), XQ += `${wQ}}\n`
          }
        }
        return XQ
      }
      static _IsEndSite(QQ) {
        return 0 === QQ.children.length
      }
      static _GetBoneOffset(QQ) {
        try {
          if (!QQ.getParent()) return QQ.getRestMatrix().getTranslation();
          return QQ.getLocalMatrix().getTranslation()
        } catch (WQ) {
          return wQ.vj.Zero()
        }
      }
      static _ExportMotionData(QQ, WQ, XQ, wQ) {
        let qQ = "";
        for (let TQ = 0; TQ < WQ; TQ++) {
          const WQ = [];
          this._CollectFrameValues(QQ, TQ + XQ, WQ, wQ), qQ += WQ.map((QQ => QQ.toFixed(6))).join(" ") + "\n"
        }
        return qQ
      }
      static _CollectFrameValues(QQ, WQ, XQ, wQ) {
        for (const qQ of QQ)
          if (!this._IsEndSite(qQ)) {
            if (qQ.hasPositionChannels) {
              const QQ = this._GetPositionAtFrameIndex(qQ.positionKeys, WQ);
              XQ.push(QQ.x, QQ.y, QQ.z)
            }
            if (qQ.hasRotationChannels) {
              const QQ = this._GetRotationAtFrameIndex(qQ.rotationKeys, WQ),
                wQ = this._QuaternionToEuler(QQ);
              XQ.push(wQ.z, wQ.x, wQ.y)
            }
            qQ.children.length > 0 && this._CollectFrameValues(qQ.children, WQ, XQ, wQ)
          }
      }
      static _GetPositionAtFrameIndex(QQ, WQ) {
        if (0 === QQ.length) return wQ.vj.Zero();
        return QQ[Math.max(0, Math.min(WQ, QQ.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(QQ, WQ) {
        if (0 === QQ.length) return wQ.Quaternion.Identity();
        return QQ[Math.max(0, Math.min(WQ, QQ.length - 1))].value.clone()
      }
      static _QuaternionToEuler(QQ) {
        const WQ = new wQ.Matrix;
        QQ.toRotationMatrix(WQ);
        const XQ = WQ.m;
        let TQ, zQ, sQ;
        const FQ = Math.sqrt(XQ[0] * XQ[0] + XQ[1] * XQ[1]);
        return FQ > RX.b ? (TQ = Math.atan2(XQ[6], XQ[10]), zQ = Math.atan2(-XQ[2], FQ), sQ = Math.atan2(XQ[1], XQ[0])) : (TQ = Math.atan2(-XQ[9], XQ[5]), zQ = Math.atan2(-XQ[2], FQ), sQ = 0), new wQ.vj(qQ.Tools.ToDegrees(TQ), qQ.Tools.ToDegrees(zQ), qQ.Tools.ToDegrees(sQ))
      }
    }

    function lz(QQ) {
      return "string" === typeof QQ?.name
    }
    const hz = Symbol("__xml:meta$__"),
      iz = Symbol("__xml:name$__");

    function cz(QQ, WQ) {
      Object.prototype.hasOwnProperty.call(QQ.metadata, hz) || (QQ.metadata[hz] = []), QQ.metadata[hz].push(WQ)
    }

    function Az(QQ) {
      return (WQ, XQ) => {
        WQ[iz] = QQ
      }
    }

    function Rz() {
      return (QQ, WQ) => cz(WQ, {
        kind: "none",
        prop: String(WQ.name),
        ignore: !0
      })
    }

    function Ez(QQ) {
      return (WQ, XQ) => cz(XQ, {
        kind: "attr",
        prop: String(XQ.name),
        ...QQ
      })
    }

    function Cz(QQ) {
      return (WQ, XQ) => cz(XQ, {
        kind: "elem",
        prop: String(XQ.name),
        ...QQ
      })
    }

    function uz(QQ) {
      const WQ = "function" === typeof QQ ? QQ : QQ?.constructor,
        XQ = WQ?.[Symbol.metadata];
      if (!XQ) return [];
      const wQ = [];
      let qQ = XQ;
      for (; qQ;) Object.prototype.hasOwnProperty.call(qQ, hz) && wQ.push(...qQ[hz]), qQ = Object.getPrototypeOf(qQ);
      return wQ
    }

    function Lz(QQ) {
      const WQ = QQ?.constructor?.[iz];
      return WQ || void 0
    }

    function kz(QQ) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(QQ)
    }

    function fz(QQ) {
      if (lz(QQ)) return QQ;
      const WQ = (QQ ?? "").trim();
      if (!WQ) return {
        name: ""
      };
      const XQ = WQ.indexOf(":");
      if (-1 === XQ) return {
        name: WQ
      };
      if (-1 !== WQ.indexOf(":", XQ + 1)) return {
        name: WQ
      };
      const wQ = WQ.slice(0, XQ),
        qQ = WQ.slice(XQ + 1);
      return kz(wQ) && kz(qQ) ? {
        ns: wQ,
        name: qQ
      } : {
        name: WQ
      }
    }

    function Sz(QQ, WQ) {
      return WQ ? `${WQ}:${QQ}` : QQ
    }
    const tz = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      oz = Object.freeze({
        number: tz
      });

    function ez(QQ) {
      const WQ = QQ?.eps ?? tz.eps;
      return {
        eps: WQ,
        maxDecimalsCap: QQ?.maxDecimalsCap ?? tz.maxDecimalsCap,
        trimTrailingZeros: QQ?.trimTrailingZeros ?? tz.trimTrailingZeros,
        fixedDecimals: QQ?.fixedDecimals,
        allowScientific: QQ?.allowScientific ?? tz.allowScientific,
        snapNearZero: QQ?.snapNearZero ?? tz.snapNearZero,
        zeroThreshold: QQ?.zeroThreshold ?? WQ,
        perAttributeEps: QQ?.perAttributeEps
      }
    }

    function nz(QQ) {
      return {
        number: ez(QQ?.number)
      }
    }
    class xz {
      constructor(QQ) {
        if (this.o = QQ, this._o = QQ.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(QQ) {
        if (!Number.isFinite(QQ)) throw new Error(`Cannot format non-finite number: ${QQ}`);
        const WQ = this._o,
          XQ = this._clampInt(WQ.maxDecimalsCap ?? 15, 0, 20),
          wQ = WQ.trimTrailingZeros ?? !0,
          qQ = WQ.snapNearZero ?? !0,
          TQ = WQ.zeroThreshold ?? WQ.eps,
          zQ = 1 / WQ.eps;
        let sQ, FQ = Math.round(QQ * zQ) / zQ;
        if (Object.is(FQ, -0) && (FQ = 0), qQ && Math.abs(FQ) <= TQ && (FQ = 0), sQ = void 0 !== WQ.fixedDecimals ? this._clampInt(WQ.fixedDecimals, 0, XQ) : this._clampInt(Math.ceil(-Math.log10(WQ.eps)), 0, XQ), WQ.allowScientific, 0 === sQ) return String(Math.trunc(FQ));
        let PQ = FQ.toFixed(sQ);
        if (wQ && void 0 === WQ.fixedDecimals && (PQ = PQ.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(PQ)) throw new Error(`Scientific notation not allowed in XML output: ${PQ}`);
        return PQ
      }
      _clampInt(QQ, WQ, XQ) {
        return Number.isFinite(QQ) ? (QQ = Math.trunc(QQ), Math.max(WQ, Math.min(XQ, QQ))) : WQ
      }
    }

    function Yz(QQ) {
      return QQ instanceof Date
    }

    function Nz(QQ) {
      return "string" === typeof QQ
    }

    function Zz(QQ) {
      return "string" === typeof QQ || "number" === typeof QQ || "boolean" === typeof QQ || "bigint" === typeof QQ || Yz(QQ)
    }

    function Oz(QQ) {
      return "number" === typeof QQ || "boolean" === typeof QQ || "bigint" === typeof QQ || Yz(QQ)
    }
    class Kz {
      constructor(QQ, WQ) {
        this._ns = new Map, this._prefixCount = 0, this._builder = QQ, this._format = nz(WQ), this._nFmt = new xz(this._format)
      }
      withNamespace() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        for (const wQ of WQ) this._assignNamespace(wQ);
        return this
      }
      serialize(QQ, WQ) {
        if (!(WQ = WQ ?? Lz(QQ))) throw new Error("can not find name for given object");
        const XQ = fz(WQ);
        XQ.ns && this._assignNamespace(XQ.ns, "xmlns"), this._gatherNamespaces(QQ, new WeakSet);
        const wQ = this._builder.ele(null, XQ.name);
        for (const [qQ, TQ] of Array.from(this._ns.entries())) wQ.att("xmlns", TQ, qQ);
        this._writeObjectContent(wQ, QQ, (new WeakSet).add(QQ)), this._builder.end()
      }
      _writeObject(QQ, WQ, XQ) {
        if (XQ.has(WQ)) return;
        if (XQ.add(WQ), Array.isArray(WQ)) {
          for (const wQ of WQ) Oz(wQ) || (Nz(wQ) ? this._builder.text(wQ) : this._writeObject(QQ, wQ, XQ));
          return
        }
        const wQ = Lz(WQ);
        if (!wQ) return;
        const qQ = fz(wQ),
          TQ = this._getPrefix(qQ),
          zQ = Sz(qQ.name, TQ);
        QQ.ele(null, zQ), this._writeObjectContent(QQ, WQ, XQ), this._builder.end()
      }
      _getPrefix(QQ) {
        if (QQ.ns) {
          const WQ = this._ns.get(QQ.ns.toLowerCase());
          if ("xmlns" !== WQ) return WQ
        }
      }
      _writeObjectContent(QQ, WQ, XQ) {
        const wQ = uz(WQ) ?? [],
          qQ = new Map;
        for (const zQ of wQ) {
          const QQ = qQ.get(zQ.prop) ?? [];
          QQ.push(zQ), qQ.set(zQ.prop, QQ)
        }
        const TQ = Object.keys(WQ).sort(((QQ, WQ) => {
          const XQ = (qQ.get(QQ) ?? []).some((QQ => "attr" === QQ.kind));
          return XQ === (qQ.get(WQ) ?? []).some((QQ => "attr" === QQ.kind)) ? 0 : XQ ? -1 : 1
        }));
        for (const zQ of TQ) {
          const wQ = WQ[zQ];
          if (null === wQ || void 0 === wQ) continue;
          const TQ = qQ.get(zQ);
          if (TQ) {
            if (TQ.some((QQ => !0 === QQ.ignore || "none" === QQ.kind))) continue;
            for (const WQ of TQ) {
              const XQ = WQ.name ?? WQ.prop.toLowerCase();
              if (XQ) switch (WQ.kind) {
                case "attr": {
                  let qQ = null;
                  if ("number" === typeof wQ && this._nFmt && (qQ = this._nFmt.toString(wQ)), WQ.formatter) {
                    qQ = new WQ.formatter(this._format).toString(wQ)
                  }
                  if (qQ = qQ ?? wQ.toString(), qQ) {
                    const WQ = fz(XQ),
                      wQ = this._getPrefix(WQ),
                      TQ = Sz(WQ.name, wQ);
                    QQ.att(null, TQ, qQ)
                  }
                  break
                }
              }
            }
          } else Oz(wQ) || (Nz(wQ) ? this._builder.text(wQ) : this._writeObject(QQ, wQ, XQ))
        }
      }
      _gatherNamespaces(QQ, WQ) {
        if (WQ.has(QQ)) return;
        if (WQ.add(QQ), Array.isArray(QQ)) {
          for (const XQ of QQ) Zz(XQ) || this._gatherNamespaces(XQ, WQ);
          return
        }
        const XQ = Lz(QQ);
        XQ && this._assignNamespace(XQ);
        const wQ = uz(QQ) ?? [],
          qQ = new Map;
        for (const zQ of wQ) {
          const QQ = qQ.get(zQ.prop) ?? [];
          QQ.push(zQ), qQ.set(zQ.prop, QQ)
        }
        const TQ = [];
        for (const zQ of Object.keys(QQ)) {
          const WQ = QQ[zQ];
          if (null === WQ || void 0 === WQ) continue;
          const XQ = qQ.get(zQ);
          if (XQ) {
            if (XQ.some((QQ => !0 === QQ.ignore || "none" === QQ.kind))) continue;
            for (const QQ of XQ) QQ.name && this._assignNamespace(QQ.name)
          }
          TQ.push(WQ)
        }
        for (const zQ of TQ) Zz(zQ) || this._gatherNamespaces(zQ, WQ)
      }
      _assignNamespace(QQ, WQ) {
        const XQ = fz(QQ);
        if (XQ?.ns) {
          const QQ = XQ.ns.toLowerCase();
          this._ns.get(QQ) || this._ns.set(QQ, WQ ?? this._buildNsPrefix(QQ))
        } else if ("xmlns" === WQ) {
          const QQ = XQ.name.toLowerCase();
          this._ns.get(QQ) || this._ns.set(QQ, WQ ?? this._buildNsPrefix(QQ))
        }
      }
      _buildNsPrefix(QQ) {
        let WQ, XQ = !1;
        do {
          WQ = "ns" + this._prefixCount++;
          for (const QQ of Array.from(this._ns.values()))
            if (QQ === WQ) {
              XQ = !0;
              break
            }
        } while (XQ);
        return WQ
      }
    }
    class mz {}
    var Mz;
    mz.OpenTag = "<", mz.CloseTag = ">", mz.Slash = "/", mz.Question = "?", mz.Quote = '"', mz.Equal = "=", mz.Space = " ", mz.Semicolon = ":", mz.Dec = "<?xml", mz.Xml = "xml", mz.Xmlns = "xmlns", mz.Xsi = "xsi", mz.VersionKeyword = "version", mz.EncodingKeyword = "encoding", mz.StandaloneKeyword = "standalone",
      function(QQ) {
        QQ[QQ.Declaration = 0] = "Declaration", QQ[QQ.Tag = 1] = "Tag", QQ[QQ.Attribute = 2] = "Attribute", QQ[QQ.Text = 3] = "Text"
      }(Mz || (Mz = {}));
    class Qs {
      constructor(QQ) {
        this._ctxStack = [], this._d = 0, this._w = QQ
      }
      dec(QQ, WQ, XQ) {
        return this._w.write(mz.Dec), this._writeAttStr(mz.VersionKeyword, QQ), WQ && this._writeAttStr(mz.EncodingKeyword, WQ), void 0 !== XQ && this._writeAttStr(mz.StandaloneKeyword, XQ ? "yes" : "no"), this._w.write(mz.Question, mz.CloseTag), this
      }
      att(QQ, WQ, XQ) {
        const wQ = this._peekContext();
        if (!wQ) throw new Error("att() without open element");
        if (wQ.closed) throw new Error(`att() after start tag closed for <${wQ.name}>`);
        if (this._isXmlnsDecl(QQ, WQ)) {
          if (WQ === mz.Xmlns) wQ.defaultNs = XQ, this._registerNamespace(wQ, "", XQ), this._writeAttStr(mz.Xmlns, XQ);
          else if (QQ) this._registerNamespace(wQ, WQ, XQ), this._writeAttStr(`${QQ}:${WQ}`, XQ);
          else {
            const QQ = WQ.slice(6);
            this._registerNamespace(wQ, QQ, XQ), this._writeAttStr(WQ, XQ)
          }
          return wQ.lastToken = Mz.Attribute, this
        }
        let qQ = WQ;
        if (QQ) {
          qQ = `${this._ensurePrefixDeclared(wQ,QQ)}:${WQ}`
        }
        return wQ.lastToken = Mz.Attribute, this._writeAttStr(qQ, XQ), this
      }
      ele(QQ, WQ) {
        const XQ = this._peekContext();
        XQ && this._closeOpenTagIfNeeded(XQ);
        let wQ = WQ;
        if (QQ) {
          wQ = `${this._lookupPrefix(QQ)??QQ}:${WQ}`
        }
        return this._pushContext(wQ, ++this._d), this._w.write(mz.OpenTag, wQ), this
      }
      text(QQ) {
        const WQ = this._peekContext();
        if (!WQ) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(WQ), WQ.lastToken = Mz.Text, this._w.write(this._escText(QQ)), this
      }
      end() {
        const QQ = this._popContext();
        return QQ && (this._d--, QQ.closed ? this._w.write(mz.OpenTag, mz.Slash, QQ.name, mz.CloseTag) : this._w.write(mz.Slash, mz.CloseTag)), this
      }
      _pushContext(QQ, WQ) {
        const XQ = new Qs.Context(QQ, WQ);
        return this._ctxStack.push(XQ), XQ
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
      _writeAttStr(QQ, WQ) {
        this._w.write(mz.Space, QQ, mz.Equal, mz.Quote, this._escAttr(WQ), mz.Quote)
      }
      _lookupPrefix(QQ) {
        let WQ = this._ctxStack.length - 1;
        if (WQ >= 0)
          do {
            const XQ = this._ctxStack[WQ--],
              wQ = XQ.ns2prefix?.get(QQ);
            if (wQ) return wQ
          } while (WQ >= 0)
      }
      _escText(QQ) {
        return QQ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(QQ) {
        return this._escText(QQ).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(QQ, WQ) {
        if (QQ) return QQ === mz.Xmlns;
        const XQ = WQ.length,
          wQ = mz.Xmlns.length;
        return XQ >= wQ && (WQ.startsWith(mz.Xmlns) && (WQ.length == wQ || WQ[wQ] == mz.Semicolon))
      }
      _registerNamespace(QQ, WQ, XQ) {
        if (WQ === mz.Xml || WQ === mz.Xmlns) throw new Error(`reserved prefix '${WQ}'`);
        const wQ = QQ.prefix2ns.get(WQ);
        if (wQ && wQ !== XQ) throw new Error(`prefix '${WQ}' already bound to a different namespace`);
        QQ.ns2prefix.get(XQ) || QQ.ns2prefix.set(XQ, WQ), QQ.prefix2ns.set(WQ, XQ)
      }
      _allocPrefix(QQ) {
        let WQ = 1;
        for (;;) {
          const XQ = "ns" + WQ++;
          if (!QQ.prefix2ns.has(XQ)) return XQ
        }
      }
      _ensurePrefixDeclared(QQ, WQ) {
        const XQ = this._lookupPrefix(WQ);
        if (XQ) return XQ;
        if (QQ.closed) throw new Error(`can not declare namespace after start tag closed for <${QQ.name}>`);
        const wQ = this._allocPrefix(QQ);
        return this._writeAttStr(`${mz.Xmlns}:${wQ}`, WQ), this._registerNamespace(QQ, wQ, WQ), wQ
      }
      _closeOpenTagIfNeeded(QQ) {
        QQ.closed || (this._w.write(mz.CloseTag), QQ.closed = !0)
      }
    }
    Qs.Context = class {
      constructor(QQ, WQ) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = QQ, this.depth = WQ
      }
    };
    class Ws {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        if (0 === WQ.length) return this;
        const wQ = WQ.join("");
        return this._chunks.push(wQ), this.count += wQ.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Xs {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = QQ, this._opts = WQ, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        if (0 === WQ.length) return this;
        const wQ = WQ.join("");
        if (0 === wQ.length) return this;
        this._pending += wQ, this._pendingChars += wQ.length;
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
    const ws = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      qs = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Ts, zs;
    ! function(QQ) {
      QQ.micron = "micron", QQ.millimeter = "millimeter", QQ.centimeter = "centimeter", QQ.inch = "inch", QQ.foot = "foot", QQ.meter = "meter"
    }(Ts || (Ts = {})),
    function(QQ) {
      QQ.model = "model", QQ.solidsupport = "solidsupport", QQ.support = "support", QQ.surface = "surface", QQ.other = "other"
    }(zs || (zs = {}));
    const ss = "http://schemas.openxmlformats.org/package/2006/content-types",
      Fs = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Ps;
    ! function(QQ) {
      QQ.Relationships = "application/vnd.openxmlformats-package.relationships+xml", QQ.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", QQ.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", QQ.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", QQ.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", QQ.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", QQ.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", QQ.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", QQ.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", QQ.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", QQ.Png = "image/png", QQ.Jpeg = "image/jpeg", QQ.Tiff = "image/tiff", QQ.Xml = "application/xml"
    }(Ps || (Ps = {}));
    const gs = "_rels/",
      rs = "3D/",
      Is = "3dmodel.model",
      Bs = ".rels",
      ys = "[Content_Types].xml";
    class Vs {
      static IsKnown(QQ) {
        return Vs.Known.has(QQ)
      }
      static IsThreeDimModel(QQ) {
        return QQ === Vs.ThreeDimModel
      }
    }
    Vs.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Vs.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Vs.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Vs.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", Vs.Known = new Set([Vs.ThreeDimModel, Vs.Thumbnail, Vs.PrintTicket, Vs.MustPreserve]);
    let Ds = (() => {
        let QQ, WQ, XQ = [Az({
            ns: ss,
            name: "Types"
          })],
          wQ = [];
        WQ = class {
          constructor() {
            this.items = []
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfContentTypes"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HQ.k)(null, QQ = {
            value: WQ
          }, XQ, {
            kind: "class",
            name: WQ.name,
            metadata: qQ
          }, null, wQ), WQ = QQ.value, qQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, HQ.n)(WQ, wQ)
        })(), WQ
      })(),
      ps = (() => {
        let QQ, WQ, XQ, wQ, qQ = [Az({
            ns: ss,
            name: "Default"
          })],
          TQ = [],
          zQ = [],
          sQ = [],
          FQ = [],
          PQ = [];
        WQ = class {
          constructor(QQ, WQ) {
            this.ext = (0, HQ.n)(this, zQ, void 0), this.ct = ((0, HQ.n)(this, sQ), (0, HQ.n)(this, FQ, void 0)), (0, HQ.n)(this, PQ), this.ext = QQ, this.ct = WQ
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfContentType"), (() => {
          const gQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XQ = [Ez({
            name: {
              ns: ss,
              name: "Extension"
            }
          })], wQ = [Ez({
            name: {
              ns: ss,
              name: "ContentType"
            }
          })], (0, HQ.k)(null, null, XQ, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ext" in QQ,
              get: QQ => QQ.ext,
              set: (QQ, WQ) => {
                QQ.ext = WQ
              }
            },
            metadata: gQ
          }, zQ, sQ), (0, HQ.k)(null, null, wQ, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ct" in QQ,
              get: QQ => QQ.ct,
              set: (QQ, WQ) => {
                QQ.ct = WQ
              }
            },
            metadata: gQ
          }, FQ, PQ), (0, HQ.k)(null, QQ = {
            value: WQ
          }, qQ, {
            kind: "class",
            name: WQ.name,
            metadata: gQ
          }, null, TQ), WQ = QQ.value, gQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gQ
          }), (0, HQ.n)(WQ, TQ)
        })(), WQ
      })(),
      Gs = (() => {
        let QQ, WQ, XQ = [Az({
            ns: Fs,
            name: "Relationships"
          })],
          wQ = [];
        WQ = class {
          constructor() {
            this.items = []
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfRelationships"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HQ.k)(null, QQ = {
            value: WQ
          }, XQ, {
            kind: "class",
            name: WQ.name,
            metadata: qQ
          }, null, wQ), WQ = QQ.value, qQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, HQ.n)(WQ, wQ)
        })(), WQ
      })(),
      Us = (() => {
        let QQ, WQ, XQ, wQ, qQ, TQ = [Az({
            ns: Fs,
            name: "Relationship"
          })],
          zQ = [],
          sQ = [],
          FQ = [],
          PQ = [],
          gQ = [],
          JQ = [],
          rQ = [];
        WQ = class {
          constructor(QQ, WQ, XQ) {
            this.id = (0, HQ.n)(this, sQ, void 0), this.type = ((0, HQ.n)(this, FQ), (0, HQ.n)(this, PQ, void 0)), this.target = ((0, HQ.n)(this, gQ), (0, HQ.n)(this, JQ, void 0)), (0, HQ.n)(this, rQ), this.id = QQ, this.type = WQ, this.target = XQ
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfRelationship"), (() => {
          const IQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XQ = [Ez({
            name: "Id"
          })], wQ = [Ez({
            name: "Type"
          })], qQ = [Ez({
            name: "Target"
          })], (0, HQ.k)(null, null, XQ, {
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
            metadata: IQ
          }, sQ, FQ), (0, HQ.k)(null, null, wQ, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: QQ => "type" in QQ,
              get: QQ => QQ.type,
              set: (QQ, WQ) => {
                QQ.type = WQ
              }
            },
            metadata: IQ
          }, PQ, gQ), (0, HQ.k)(null, null, qQ, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: QQ => "target" in QQ,
              get: QQ => QQ.target,
              set: (QQ, WQ) => {
                QQ.target = WQ
              }
            },
            metadata: IQ
          }, JQ, rQ), (0, HQ.k)(null, QQ = {
            value: WQ
          }, TQ, {
            kind: "class",
            name: WQ.name,
            metadata: IQ
          }, null, zQ), WQ = QQ.value, IQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IQ
          }), (0, HQ.n)(WQ, zQ)
        })(), WQ
      })();
    class bs {
      constructor(QQ, WQ, XQ) {
        this.contentTypes = QQ, this.relationships = WQ, this.model = XQ
      }
    }
    class vs {
      static Zero() {
        return new vs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(QQ) {
        this.values = QQ
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class ds {
      constructor(QQ) {
        this.o = QQ, this._f = new xz(QQ)
      }
      toString(QQ) {
        return QQ.values.map((QQ => this._f.toString(QQ))).join(" ")
      }
    }
    let Hs = (() => {
        let QQ, WQ, XQ, wQ, qQ, TQ = [Az({
            ns: ws,
            name: "model"
          })],
          zQ = [],
          sQ = [],
          FQ = [],
          PQ = [],
          gQ = [],
          JQ = [],
          rQ = [];
        WQ = class {
          constructor() {
            this.unit = (0, HQ.n)(this, sQ, Ts.millimeter), this.requiredextensions = ((0, HQ.n)(this, FQ), (0, HQ.n)(this, PQ, void 0)), this.recommendedextensions = ((0, HQ.n)(this, gQ), (0, HQ.n)(this, JQ, void 0)), this.metadata = (0, HQ.n)(this, rQ)
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfModel"), (() => {
          const IQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XQ = [Ez({
            name: "unit"
          })], wQ = [Ez({
            name: "requiredextensions"
          })], qQ = [Ez({
            name: "recommendedextensions"
          })], (0, HQ.k)(null, null, XQ, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "unit" in QQ,
              get: QQ => QQ.unit,
              set: (QQ, WQ) => {
                QQ.unit = WQ
              }
            },
            metadata: IQ
          }, sQ, FQ), (0, HQ.k)(null, null, wQ, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: QQ => "requiredextensions" in QQ,
              get: QQ => QQ.requiredextensions,
              set: (QQ, WQ) => {
                QQ.requiredextensions = WQ
              }
            },
            metadata: IQ
          }, PQ, gQ), (0, HQ.k)(null, null, qQ, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: QQ => "recommendedextensions" in QQ,
              get: QQ => QQ.recommendedextensions,
              set: (QQ, WQ) => {
                QQ.recommendedextensions = WQ
              }
            },
            metadata: IQ
          }, JQ, rQ), (0, HQ.k)(null, QQ = {
            value: WQ
          }, TQ, {
            kind: "class",
            name: WQ.name,
            metadata: IQ
          }, null, zQ), WQ = QQ.value, IQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IQ
          })
        })(), WQ.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, HQ.n)(WQ, zQ), WQ
      })(),
      as = (() => {
        let QQ, WQ, XQ, wQ, qQ, TQ = [Az({
            ns: ws,
            name: "meta"
          })],
          zQ = [],
          sQ = [],
          FQ = [],
          PQ = [],
          gQ = [],
          JQ = [],
          rQ = [];
        WQ = class {
          constructor(QQ, WQ, XQ, wQ) {
            this.name = (0, HQ.n)(this, sQ, void 0), this.preserve = ((0, HQ.n)(this, FQ), (0, HQ.n)(this, PQ, void 0)), this.type = ((0, HQ.n)(this, gQ), (0, HQ.n)(this, JQ, void 0)), this.value = (0, HQ.n)(this, rQ), this.name = QQ, this.value = WQ, this.preserve = XQ, this.type = wQ
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfMeta"), (() => {
          const IQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XQ = [Ez({
            name: "name"
          })], wQ = [Ez({
            name: "preserve"
          })], qQ = [Ez({
            name: "type"
          })], (0, HQ.k)(null, null, XQ, {
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
            metadata: IQ
          }, sQ, FQ), (0, HQ.k)(null, null, wQ, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: QQ => "preserve" in QQ,
              get: QQ => QQ.preserve,
              set: (QQ, WQ) => {
                QQ.preserve = WQ
              }
            },
            metadata: IQ
          }, PQ, gQ), (0, HQ.k)(null, null, qQ, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: QQ => "type" in QQ,
              get: QQ => QQ.type,
              set: (QQ, WQ) => {
                QQ.type = WQ
              }
            },
            metadata: IQ
          }, JQ, rQ), (0, HQ.k)(null, QQ = {
            value: WQ
          }, TQ, {
            kind: "class",
            name: WQ.name,
            metadata: IQ
          }, null, zQ), WQ = QQ.value, IQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IQ
          }), (0, HQ.n)(WQ, zQ)
        })(), WQ
      })(),
      ls = (() => {
        let QQ, WQ, XQ = [Az({
            ns: ws,
            name: "metadatagroup"
          })],
          wQ = [];
        WQ = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfMetadataGroup"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HQ.k)(null, QQ = {
            value: WQ
          }, XQ, {
            kind: "class",
            name: WQ.name,
            metadata: qQ
          }, null, wQ), WQ = QQ.value, qQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, HQ.n)(WQ, wQ)
        })(), WQ
      })(),
      hs = (() => {
        let QQ, WQ, XQ = [Az({
            ns: ws,
            name: "resources"
          })],
          wQ = [];
        WQ = class {
          constructor() {
            this.object = []
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfResources"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HQ.k)(null, QQ = {
            value: WQ
          }, XQ, {
            kind: "class",
            name: WQ.name,
            metadata: qQ
          }, null, wQ), WQ = QQ.value, qQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, HQ.n)(WQ, wQ)
        })(), WQ
      })(),
      is = (() => {
        let QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ = [Az({
            ns: ws,
            name: "object"
          })],
          gQ = [],
          JQ = [],
          rQ = [],
          IQ = [],
          jQ = [],
          BQ = [],
          yQ = [],
          VQ = [],
          DQ = [],
          pQ = [],
          GQ = [],
          UQ = [],
          bQ = [],
          vQ = [],
          dQ = [];
        WQ = class {
          constructor(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zs.model;
            this.id = (0, HQ.n)(this, JQ, void 0), this.type = ((0, HQ.n)(this, rQ), (0, HQ.n)(this, IQ, void 0)), this.thumbnail = ((0, HQ.n)(this, jQ), (0, HQ.n)(this, BQ, void 0)), this.partnumber = ((0, HQ.n)(this, yQ), (0, HQ.n)(this, VQ, void 0)), this.name = ((0, HQ.n)(this, DQ), (0, HQ.n)(this, pQ, void 0)), this.pid = ((0, HQ.n)(this, GQ), (0, HQ.n)(this, UQ, void 0)), this.pindex = ((0, HQ.n)(this, bQ), (0, HQ.n)(this, vQ, void 0)), this.metadatagroup = (0, HQ.n)(this, dQ), this.id = QQ, this.type = WQ
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfObject"), (() => {
          const aQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XQ = [Ez({
            name: "id"
          })], wQ = [Ez({
            name: "type"
          })], qQ = [Ez({
            name: "thumbnail"
          })], TQ = [Ez({
            name: "partnumber"
          })], zQ = [Ez({
            name: "name"
          })], sQ = [Ez({
            name: "pid"
          })], FQ = [Ez({
            name: "pindex"
          })], (0, HQ.k)(null, null, XQ, {
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
            metadata: aQ
          }, JQ, rQ), (0, HQ.k)(null, null, wQ, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: QQ => "type" in QQ,
              get: QQ => QQ.type,
              set: (QQ, WQ) => {
                QQ.type = WQ
              }
            },
            metadata: aQ
          }, IQ, jQ), (0, HQ.k)(null, null, qQ, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: QQ => "thumbnail" in QQ,
              get: QQ => QQ.thumbnail,
              set: (QQ, WQ) => {
                QQ.thumbnail = WQ
              }
            },
            metadata: aQ
          }, BQ, yQ), (0, HQ.k)(null, null, TQ, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: QQ => "partnumber" in QQ,
              get: QQ => QQ.partnumber,
              set: (QQ, WQ) => {
                QQ.partnumber = WQ
              }
            },
            metadata: aQ
          }, VQ, DQ), (0, HQ.k)(null, null, zQ, {
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
            metadata: aQ
          }, pQ, GQ), (0, HQ.k)(null, null, sQ, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pid" in QQ,
              get: QQ => QQ.pid,
              set: (QQ, WQ) => {
                QQ.pid = WQ
              }
            },
            metadata: aQ
          }, UQ, bQ), (0, HQ.k)(null, null, FQ, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pindex" in QQ,
              get: QQ => QQ.pindex,
              set: (QQ, WQ) => {
                QQ.pindex = WQ
              }
            },
            metadata: aQ
          }, vQ, dQ), (0, HQ.k)(null, QQ = {
            value: WQ
          }, PQ, {
            kind: "class",
            name: WQ.name,
            metadata: aQ
          }, null, gQ), WQ = QQ.value, aQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aQ
          }), (0, HQ.n)(WQ, gQ)
        })(), WQ
      })(),
      cs = (() => {
        let QQ, WQ, XQ = [Az({
            ns: ws,
            name: "mesh"
          })],
          wQ = [];
        WQ = class {
          constructor(QQ, WQ) {
            this.vertices = QQ ?? new As, this.triangles = WQ ?? new Es
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfMesh"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HQ.k)(null, QQ = {
            value: WQ
          }, XQ, {
            kind: "class",
            name: WQ.name,
            metadata: qQ
          }, null, wQ), WQ = QQ.value, qQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, HQ.n)(WQ, wQ)
        })(), WQ
      })(),
      As = (() => {
        let QQ, WQ, XQ = [Az({
            ns: ws,
            name: "vertices"
          })],
          wQ = [];
        WQ = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfVertices"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HQ.k)(null, QQ = {
            value: WQ
          }, XQ, {
            kind: "class",
            name: WQ.name,
            metadata: qQ
          }, null, wQ), WQ = QQ.value, qQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, HQ.n)(WQ, wQ)
        })(), WQ
      })(),
      Rs = (() => {
        let QQ, WQ, XQ, wQ, qQ, TQ = [Az({
            ns: ws,
            name: "vertex"
          })],
          zQ = [],
          sQ = [],
          FQ = [],
          PQ = [],
          gQ = [],
          JQ = [],
          rQ = [];
        WQ = class {
          constructor() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, HQ.n)(this, sQ, void 0), this.y = ((0, HQ.n)(this, FQ), (0, HQ.n)(this, PQ, void 0)), this.z = ((0, HQ.n)(this, gQ), (0, HQ.n)(this, JQ, void 0)), (0, HQ.n)(this, rQ), this.x = QQ, this.y = WQ, this.z = XQ
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfVertex"), (() => {
          const IQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XQ = [Ez({
            name: "x"
          })], wQ = [Ez({
            name: "y"
          })], qQ = [Ez({
            name: "z"
          })], (0, HQ.k)(null, null, XQ, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: QQ => "x" in QQ,
              get: QQ => QQ.x,
              set: (QQ, WQ) => {
                QQ.x = WQ
              }
            },
            metadata: IQ
          }, sQ, FQ), (0, HQ.k)(null, null, wQ, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: QQ => "y" in QQ,
              get: QQ => QQ.y,
              set: (QQ, WQ) => {
                QQ.y = WQ
              }
            },
            metadata: IQ
          }, PQ, gQ), (0, HQ.k)(null, null, qQ, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: QQ => "z" in QQ,
              get: QQ => QQ.z,
              set: (QQ, WQ) => {
                QQ.z = WQ
              }
            },
            metadata: IQ
          }, JQ, rQ), (0, HQ.k)(null, QQ = {
            value: WQ
          }, TQ, {
            kind: "class",
            name: WQ.name,
            metadata: IQ
          }, null, zQ), WQ = QQ.value, IQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IQ
          }), (0, HQ.n)(WQ, zQ)
        })(), WQ
      })(),
      Es = (() => {
        let QQ, WQ, XQ = [Az({
            ns: ws,
            name: "triangles"
          })],
          wQ = [];
        WQ = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfTriangles"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HQ.k)(null, QQ = {
            value: WQ
          }, XQ, {
            kind: "class",
            name: WQ.name,
            metadata: qQ
          }, null, wQ), WQ = QQ.value, qQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, HQ.n)(WQ, wQ)
        })(), WQ
      })(),
      Cs = (() => {
        let QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ = [Az({
            ns: ws,
            name: "triangle"
          })],
          gQ = [],
          JQ = [],
          rQ = [],
          IQ = [],
          jQ = [],
          BQ = [],
          yQ = [],
          VQ = [],
          DQ = [],
          pQ = [],
          GQ = [],
          UQ = [],
          bQ = [],
          vQ = [],
          dQ = [];
        WQ = class {
          constructor(QQ, WQ, XQ) {
            this.v1 = (0, HQ.n)(this, JQ, void 0), this.v2 = ((0, HQ.n)(this, rQ), (0, HQ.n)(this, IQ, void 0)), this.v3 = ((0, HQ.n)(this, jQ), (0, HQ.n)(this, BQ, void 0)), this.p1 = ((0, HQ.n)(this, yQ), (0, HQ.n)(this, VQ, void 0)), this.p2 = ((0, HQ.n)(this, DQ), (0, HQ.n)(this, pQ, void 0)), this.p3 = ((0, HQ.n)(this, GQ), (0, HQ.n)(this, UQ, void 0)), this.pid = ((0, HQ.n)(this, bQ), (0, HQ.n)(this, vQ, void 0)), (0, HQ.n)(this, dQ), this.v1 = QQ, this.v2 = WQ, this.v3 = XQ
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfTriangle"), (() => {
          const aQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XQ = [Ez({
            name: "v1"
          })], wQ = [Ez({
            name: "v2"
          })], qQ = [Ez({
            name: "v3"
          })], TQ = [Ez({
            name: "p1"
          })], zQ = [Ez({
            name: "p2"
          })], sQ = [Ez({
            name: "p3"
          })], FQ = [Ez({
            name: "pid"
          })], (0, HQ.k)(null, null, XQ, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: QQ => "v1" in QQ,
              get: QQ => QQ.v1,
              set: (QQ, WQ) => {
                QQ.v1 = WQ
              }
            },
            metadata: aQ
          }, JQ, rQ), (0, HQ.k)(null, null, wQ, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: QQ => "v2" in QQ,
              get: QQ => QQ.v2,
              set: (QQ, WQ) => {
                QQ.v2 = WQ
              }
            },
            metadata: aQ
          }, IQ, jQ), (0, HQ.k)(null, null, qQ, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: QQ => "v3" in QQ,
              get: QQ => QQ.v3,
              set: (QQ, WQ) => {
                QQ.v3 = WQ
              }
            },
            metadata: aQ
          }, BQ, yQ), (0, HQ.k)(null, null, TQ, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: QQ => "p1" in QQ,
              get: QQ => QQ.p1,
              set: (QQ, WQ) => {
                QQ.p1 = WQ
              }
            },
            metadata: aQ
          }, VQ, DQ), (0, HQ.k)(null, null, zQ, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: QQ => "p2" in QQ,
              get: QQ => QQ.p2,
              set: (QQ, WQ) => {
                QQ.p2 = WQ
              }
            },
            metadata: aQ
          }, pQ, GQ), (0, HQ.k)(null, null, sQ, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: QQ => "p3" in QQ,
              get: QQ => QQ.p3,
              set: (QQ, WQ) => {
                QQ.p3 = WQ
              }
            },
            metadata: aQ
          }, UQ, bQ), (0, HQ.k)(null, null, FQ, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pid" in QQ,
              get: QQ => QQ.pid,
              set: (QQ, WQ) => {
                QQ.pid = WQ
              }
            },
            metadata: aQ
          }, vQ, dQ), (0, HQ.k)(null, QQ = {
            value: WQ
          }, PQ, {
            kind: "class",
            name: WQ.name,
            metadata: aQ
          }, null, gQ), WQ = QQ.value, aQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aQ
          }), (0, HQ.n)(WQ, gQ)
        })(), WQ
      })(),
      us = (() => {
        let QQ, WQ, XQ = [Az({
            ns: ws,
            name: "components"
          })],
          wQ = [];
        WQ = class {
          constructor() {
            this.component = []
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfComponents"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HQ.k)(null, QQ = {
            value: WQ
          }, XQ, {
            kind: "class",
            name: WQ.name,
            metadata: qQ
          }, null, wQ), WQ = QQ.value, qQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, HQ.n)(WQ, wQ)
        })(), WQ
      })(),
      Ls = (() => {
        let QQ, WQ, XQ, wQ, qQ = [Az({
            ns: ws,
            name: "component"
          })],
          TQ = [],
          zQ = [],
          sQ = [],
          FQ = [],
          PQ = [];
        WQ = class {
          constructor(QQ, WQ) {
            this.objectid = (0, HQ.n)(this, zQ, void 0), this.transform = ((0, HQ.n)(this, sQ), (0, HQ.n)(this, FQ, void 0)), (0, HQ.n)(this, PQ), this.objectid = QQ, this.transform = WQ
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfComponent"), (() => {
          const gQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XQ = [Ez({
            name: "objectid"
          })], wQ = [Ez({
            name: "transform",
            formatter: ds
          })], (0, HQ.k)(null, null, XQ, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: QQ => "objectid" in QQ,
              get: QQ => QQ.objectid,
              set: (QQ, WQ) => {
                QQ.objectid = WQ
              }
            },
            metadata: gQ
          }, zQ, sQ), (0, HQ.k)(null, null, wQ, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transform" in QQ,
              get: QQ => QQ.transform,
              set: (QQ, WQ) => {
                QQ.transform = WQ
              }
            },
            metadata: gQ
          }, FQ, PQ), (0, HQ.k)(null, QQ = {
            value: WQ
          }, qQ, {
            kind: "class",
            name: WQ.name,
            metadata: gQ
          }, null, TQ), WQ = QQ.value, gQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gQ
          }), (0, HQ.n)(WQ, TQ)
        })(), WQ
      })(),
      ks = (() => {
        let QQ, WQ, XQ, wQ = [Az({
            ns: ws,
            name: "basematerials"
          })],
          qQ = [],
          TQ = [],
          zQ = [];
        WQ = class {
          constructor(QQ) {
            this.id = (0, HQ.n)(this, TQ, void 0), this.base = ((0, HQ.n)(this, zQ), []), this.id = QQ
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfBaseMaterials"), (() => {
          const sQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XQ = [Ez({
            name: "id"
          })], (0, HQ.k)(null, null, XQ, {
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
            metadata: sQ
          }, TQ, zQ), (0, HQ.k)(null, QQ = {
            value: WQ
          }, wQ, {
            kind: "class",
            name: WQ.name,
            metadata: sQ
          }, null, qQ), WQ = QQ.value, sQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sQ
          }), (0, HQ.n)(WQ, qQ)
        })(), WQ
      })(),
      fs = (() => {
        let QQ, WQ, XQ, wQ, qQ = [Az({
            ns: ws,
            name: "base"
          })],
          TQ = [],
          zQ = [],
          sQ = [],
          FQ = [],
          PQ = [];
        WQ = class {
          constructor(QQ, WQ) {
            this.name = (0, HQ.n)(this, zQ, void 0), this.displaycolor = ((0, HQ.n)(this, sQ), (0, HQ.n)(this, FQ, void 0)), (0, HQ.n)(this, PQ), this.name = QQ, this.displaycolor = WQ
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfBase"), (() => {
          const gQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XQ = [Ez({
            name: "name"
          })], wQ = [Ez({
            name: "displaycolor"
          })], (0, HQ.k)(null, null, XQ, {
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
            metadata: gQ
          }, zQ, sQ), (0, HQ.k)(null, null, wQ, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "displaycolor" in QQ,
              get: QQ => QQ.displaycolor,
              set: (QQ, WQ) => {
                QQ.displaycolor = WQ
              }
            },
            metadata: gQ
          }, FQ, PQ), (0, HQ.k)(null, QQ = {
            value: WQ
          }, qQ, {
            kind: "class",
            name: WQ.name,
            metadata: gQ
          }, null, TQ), WQ = QQ.value, gQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gQ
          }), (0, HQ.n)(WQ, TQ)
        })(), WQ
      })(),
      Ss = (() => {
        let QQ, WQ, XQ = [Az({
            ns: ws,
            name: "build"
          })],
          wQ = [];
        WQ = class {
          constructor() {
            this.item = []
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfBuild"), (() => {
          const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HQ.k)(null, QQ = {
            value: WQ
          }, XQ, {
            kind: "class",
            name: WQ.name,
            metadata: qQ
          }, null, wQ), WQ = QQ.value, qQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qQ
          }), (0, HQ.n)(WQ, wQ)
        })(), WQ
      })(),
      ts = (() => {
        let QQ, WQ, XQ, wQ, qQ, TQ = [Az({
            ns: ws,
            name: "item"
          })],
          zQ = [],
          sQ = [],
          FQ = [],
          PQ = [],
          gQ = [],
          JQ = [],
          rQ = [];
        WQ = class {
          constructor(QQ, WQ, XQ) {
            this.objectid = (0, HQ.n)(this, sQ, void 0), this.transform = ((0, HQ.n)(this, FQ), (0, HQ.n)(this, PQ, void 0)), this.partnumber = ((0, HQ.n)(this, gQ), (0, HQ.n)(this, JQ, void 0)), this.metadatagroup = (0, HQ.n)(this, rQ), this.objectid = QQ, this.transform = WQ, this.partnumber = XQ
          }
        };
        return (0, HQ.p)(WQ, "ThreeMfItem"), (() => {
          const IQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XQ = [Ez({
            name: "objectid"
          })], wQ = [Ez({
            name: "transform",
            formatter: ds
          })], qQ = [Ez({
            name: "partnumber"
          })], (0, HQ.k)(null, null, XQ, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: QQ => "objectid" in QQ,
              get: QQ => QQ.objectid,
              set: (QQ, WQ) => {
                QQ.objectid = WQ
              }
            },
            metadata: IQ
          }, sQ, FQ), (0, HQ.k)(null, null, wQ, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: QQ => "transform" in QQ,
              get: QQ => QQ.transform,
              set: (QQ, WQ) => {
                QQ.transform = WQ
              }
            },
            metadata: IQ
          }, PQ, gQ), (0, HQ.k)(null, null, qQ, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: QQ => "partnumber" in QQ,
              get: QQ => QQ.partnumber,
              set: (QQ, WQ) => {
                QQ.partnumber = WQ
              }
            },
            metadata: IQ
          }, JQ, rQ), (0, HQ.k)(null, QQ = {
            value: WQ
          }, TQ, {
            kind: "class",
            name: WQ.name,
            metadata: IQ
          }, null, zQ), WQ = QQ.value, IQ && Object.defineProperty(WQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IQ
          }), (0, HQ.n)(WQ, zQ)
        })(), WQ
      })();
    class os {
      constructor(QQ, WQ) {
        this._object = new is(QQ, WQ)
      }
      withName(QQ) {
        return this._object.name = QQ, this
      }
      withThumbnail(QQ) {
        return this._object.thumbnail = QQ, this
      }
      withProperty(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = QQ, this._object.id = WQ, this
      }
      build() {
        return this._object
      }
      reset(QQ, WQ) {
        this._object = new is(QQ, WQ)
      }
    }
    class es extends os {
      constructor(QQ) {
        super(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zs.model), this._object.content = new us
      }
      withComponent(QQ, WQ) {
        return this._object.content.component.push(new Ls(QQ, WQ)), this
      }
    }
    class ns extends os {
      constructor(QQ) {
        super(QQ, zs.model)
      }
      withPostProcessHandlers(QQ, WQ) {
        return this._vh = QQ, this._th = WQ, this
      }
      withData(QQ) {
        return this._object.content = this._buildMesh(QQ), this
      }
      withMaterial(QQ, WQ) {
        return this._object.pid = QQ, this._object.pindex = WQ, this
      }
      _buildMesh(QQ) {
        const WQ = this._buildVertices(QQ.positions),
          XQ = this._buildTriangle(QQ.indices);
        return new cs(WQ, XQ)
      }
      _buildVertices(QQ) {
        const WQ = new As;
        if (QQ)
          for (let XQ = 0; XQ < QQ.length;) {
            const wQ = QQ[XQ++],
              qQ = QQ[XQ++],
              TQ = QQ[XQ++];
            let zQ = new Rs(wQ, qQ, TQ);
            this._vh && (zQ = this._vh(zQ)), WQ.vertex.push(zQ)
          }
        return WQ
      }
      _buildTriangle(QQ) {
        const WQ = new Es;
        if (QQ)
          for (let XQ = 0; XQ < QQ.length;) {
            const wQ = QQ[XQ++],
              qQ = QQ[XQ++],
              TQ = QQ[XQ++];
            let zQ = new Cs(wQ, qQ, TQ);
            this._th && (zQ = this._th(zQ)), WQ.triangle.push(zQ)
          }
        return WQ
      }
    }
    class xs {
      constructor(QQ) {
        this._m = new ks(QQ)
      }
      withColor(QQ, WQ) {
        this._m.base = this._m.base ?? [];
        let XQ = this._m.base.find((WQ => WQ.name.toLowerCase() === QQ.toLowerCase()));
        return XQ ? (XQ.displaycolor = this._rgbaToHex(WQ), this) : (XQ = new fs(QQ, this._rgbaToHex(WQ)), this._m.base.push(XQ), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(QQ) {
        const WQ = QQ => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(QQ, 1 / 2.2)))),
          XQ = WQ(QQ.r).toString(16).padStart(2, "0").toUpperCase(),
          wQ = WQ(QQ.g).toString(16).padStart(2, "0").toUpperCase(),
          qQ = WQ(QQ.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof QQ.a) {
          return `#${XQ}${wQ}${qQ}${Math.round(Math.min(255,Math.max(0,255*QQ.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${XQ}${wQ}${qQ}`
      }
    }
    class Ys {
      constructor() {
        this._model = new Hs, this._objects = new Map
      }
      withMetaData(QQ, WQ, XQ, wQ) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new as(QQ, WQ, XQ, wQ)), this
      }
      withMaterial(QQ) {
        return QQ instanceof xs && (QQ = QQ.build()), QQ && (this._model.resources = this._model.resources ?? new hs, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(QQ)), this
      }
      withMesh(QQ) {
        return QQ instanceof ns && (QQ = QQ.build()), this._model.resources = this._model.resources ?? new hs, this._model.resources.object.push(QQ), this
      }
      withComponents(QQ) {
        return QQ instanceof es && (QQ = QQ.build()), this._model.resources = this._model.resources ?? new hs, this._model.resources.object.push(QQ), this
      }
      withBuild(QQ, WQ, XQ) {
        return this._model.build = this._model.build ?? new Ss, this._model.build.item?.push(new ts(QQ, WQ, XQ)), this
      }
      withUnit(QQ) {
        return this._model.unit = QQ, this
      }
      reset() {
        return this._model = new Hs, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Ys.KnownMetaSet = new Set(Hs.KnownMeta.map((QQ => QQ.toLowerCase())));
    class Ns {
      withContentType(QQ) {
        this._cts || (this._cts = new Ds);
        const WQ = this._cts.items;
        return WQ.some((WQ => WQ.ext === QQ.ext && WQ.ct === QQ.ct)) || WQ.push(QQ), this
      }
      withRelationship(QQ) {
        this._rs || (this._rs = new Gs);
        const WQ = this._rs.items;
        return WQ.some((WQ => WQ.id === QQ.id)) || WQ.push(QQ), this.withContentType(new ps("rels", Ps.Relationships)), this
      }
      withModel(QQ) {
        return QQ instanceof Ys && (QQ = QQ.build()), this._m = QQ, this.withContentType(new ps("model", Ps.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const QQ = `${rs}${Is}`;
        if (!this._rs) {
          const WQ = `/${QQ}`;
          this.withRelationship(new Us("rel0", Vs.ThreeDimModel, WQ))
        }
        return new bs(this._cts, this._rs, this._m)
      }
    }
    class Zs {
      constructor(QQ) {
        this._o = QQ
      }
      get options() {
        return this._o
      }
      async serializeAsync(QQ) {
        const WQ = await this.ensureZipLibReadyAsync();
        if (!WQ) return;
        const XQ = WQ.Zip,
          wQ = WQ.ZipDeflate;
        if (!XQ || !wQ) throw new Error("fflate Zip / ZipDeflate not available");
        const qQ = function(QQ, WQ, XQ) {
          const qQ = new wQ(WQ, {
            level: 6
          });
          QQ.add(qQ);
          const TQ = function(QQ) {
              return {
                push: (WQ, XQ) => QQ.push(WQ, XQ)
              }
            }(qQ),
            zQ = new Xs(TQ),
            sQ = new Qs(zQ).dec("1.0", "UTF-8");
          new Kz(sQ).serialize(XQ), zQ.finish()
        };
        for (var TQ = arguments.length, zQ = new Array(TQ > 1 ? TQ - 1 : 0), sQ = 1; sQ < TQ; sQ++) zQ[sQ - 1] = arguments[sQ];
        const FQ = this.toDocument(...zQ);
        if (!FQ) return;
        const PQ = new XQ(QQ);
        qQ(PQ, ys, FQ.contentTypes), qQ(PQ, `${gs}${Bs}`, FQ.relationships), qQ(PQ, `${rs}${Is}`, FQ.model), PQ.end()
      }
      toDocument() {
        const QQ = (new Ys).withUnit(this._o?.unit ?? Ts.millimeter);
        if (this.options.metadata)
          for (const qQ in this.options.metadata) QQ.withMetaData(qQ, this.options.metadata[qQ]);
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        return (new Ns).withModel(this.toModel(QQ, ...XQ)).build()
      }
    }
    class Os {
      static async SerializeToMemoryAsync(QQ) {
        const WQ = new Array;
        let XQ = 0;
        for (var wQ = arguments.length, qQ = new Array(wQ > 1 ? wQ - 1 : 0), TQ = 1; TQ < wQ; TQ++) qQ[TQ - 1] = arguments[TQ];
        if (await QQ.serializeAsync((function(QQ, wQ, qQ) {
            WQ.push(wQ), XQ += wQ.length
          }), ...qQ), !XQ) return;
        const zQ = new Uint8Array(XQ);
        let sQ = 0;
        for (const FQ of WQ) zQ.set(FQ, sQ), sQ += FQ.length;
        return zQ
      }
    }
    class Ks {}
    Ks.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class ms {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = QQ, this._to = WQ, this._step = XQ, this._i = QQ
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
    class Ms extends Zs {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Ms.DefaultOptions,
          ...QQ
        })
      }
      toModel(QQ) {
        for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
        XQ = XQ.filter((QQ => QQ instanceof Pw.b || QQ instanceof IQ.b));
        const qQ = new ms,
          TQ = QQ,
          zQ = new Map,
          sQ = this.options.exportInstances ? [] : null;
        for (let FQ = 0; FQ < XQ.length; FQ++) {
          const QQ = XQ[FQ];
          if (QQ instanceof IQ.b) {
            sQ?.push(QQ);
            continue
          }
          const WQ = QQ.name || `mesh${FQ}`,
            wQ = QQ.getWorldMatrix(),
            PQ = this._handleBabylonTo3mfMatrixTransformToRef(wQ, vs.Zero()),
            gQ = QQ.ZD;
          if (void 0 === gQ) continue;
          const JQ = 1 == gQ.length;
          for (let XQ = 0; XQ < gQ.length; XQ++) {
            const wQ = gQ[XQ],
              sQ = this._extractSubMesh(QQ, wQ);
            if (sQ) {
              const QQ = JQ ? `${WQ}` : `${WQ}_${XQ}`,
                FQ = new ns(qQ.next()).withData(sQ).withName(QQ).build();
              TQ.withMesh(FQ), TQ.withBuild(FQ.id, PQ), zQ.set(wQ, FQ)
            }
          }
        }
        if (sQ && sQ.length) {
          const QQ = this._groupBy(sQ, (QQ => QQ.bqQ));
          for (const [WQ, XQ] of Array.from(QQ.entries()))
            if (XQ && XQ.length)
              for (let QQ = 0; QQ < XQ.length; QQ++) {
                const wQ = XQ[QQ].getWorldMatrix(),
                  qQ = WQ.ZD;
                for (let QQ = 0; QQ < qQ.length; QQ++) {
                  const WQ = qQ[QQ],
                    XQ = zQ.get(WQ);
                  XQ && TQ.withBuild(XQ.id, this._handleBabylonTo3mfMatrixTransformToRef(wQ, vs.Zero()))
                }
              }
        }
        return TQ.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const QQ = globalThis;
          return QQ.fflate || await qQ.Tools.LoadScriptAsync(Ks.FFLATEUrl), QQ.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(QQ, WQ) {
        const XQ = QQ.lwQ();
        if (!XQ) return;
        const wQ = QQ.getVerticesData(Ms._PositionKind);
        if (!wQ) return;
        if (0 == WQ.indexStart && WQ.indexCount == XQ.length) return {
          positions: wQ,
          indices: XQ
        };
        const qQ = WQ.indexStart,
          TQ = new Map,
          zQ = [],
          sQ = new Uint32Array(WQ.indexCount);
        for (let FQ = 0; FQ < WQ.indexCount; FQ++) {
          const QQ = XQ[qQ + FQ];
          let WQ = TQ.get(QQ);
          if (void 0 === WQ) {
            WQ = TQ.size, TQ.set(QQ, WQ);
            const XQ = 3 * QQ;
            zQ.push(wQ[XQ], wQ[XQ + 1], wQ[XQ + 2])
          }
          sQ[FQ] = WQ
        }
        return {
          positions: new Float32Array(zQ),
          indices: sQ
        }
      }
      _groupBy(QQ, WQ) {
        const XQ = new Map;
        for (const wQ of QQ) {
          const QQ = WQ(wQ),
            qQ = XQ.get(QQ);
          qQ ? qQ.push(wQ) : XQ.set(QQ, [wQ])
        }
        return XQ
      }
      _handleBabylonTo3mfMatrixTransformToRef(QQ, WQ) {
        const XQ = QQ.multiplyToRef(Ms._R_BJS_TO_3MF, kQ.e.Zero()).m;
        return WQ.values = [XQ[0], XQ[1], XQ[2], XQ[4], XQ[5], XQ[6], XQ[8], XQ[9], XQ[10], XQ[12], XQ[13], XQ[14]], WQ
      }
    }
    Ms.DefaultOptions = {
      unit: Ts.meter,
      exportInstances: !1
    }, Ms._PositionKind = "position", Ms._R_BJS_TO_3MF = kQ.e.RotationX(Math.PI / 2).multiply(kQ.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);