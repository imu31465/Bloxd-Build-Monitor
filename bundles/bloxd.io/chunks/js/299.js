export const id = 299;
export const ids = [299];
export const modules = {
  41197: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      _ENVTextureLoader: () => WQ
    });
    var LQ = wQ(39333),
      qQ = wQ(36696),
      oQ = wQ(36729),
      DQ = wQ(39389),
      kQ = wQ(39226),
      vQ = wQ(39397),
      mQ = (wQ(39496), wQ(41200)),
      uQ = wQ(38203),
      HQ = (wQ(41209), wQ(41235), wQ(39470));
    const bQ = "image/png",
      YQ = [134, 22, 135, 150, 246, 214, 150, 54];

    function xQ(QQ) {
      const FQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      let wQ = 0;
      for (let DQ = 0; DQ < YQ.length; DQ++)
        if (FQ.getUint8(wQ++) !== YQ[DQ]) return uQ.c.Error("Not a babylon environment map"), null;
      let LQ, qQ = "";
      for (; LQ = FQ.getUint8(wQ++);) qQ += String.fromCharCode(LQ);
      let oQ = JSON.parse(qQ);
      return oQ = AQ(oQ), oQ.binaryDataPosition = wQ, oQ.specular && (oQ.specular.lodGenerationScale = oQ.specular.lodGenerationScale || .8), oQ
    }

    function AQ(QQ) {
      if (QQ.version > 2) throw new Error(`Unsupported babylon environment map version "${QQ.version}". Latest supported version is "2".`);
      return 2 === QQ.version ? QQ : QQ = {
        ...QQ,
        version: 2,
        imageType: bQ
      }
    }

    function tQ(QQ, FQ) {
      const wQ = (FQ = AQ(FQ)).specular;
      let LQ = Math.log2(FQ.width);
      if (LQ = Math.round(LQ) + 1, wQ.mipmaps.length !== 6 * LQ) throw new Error(`Unsupported specular mipmaps number "${wQ.mipmaps.length}"`);
      const qQ = new Array(LQ);
      for (let oQ = 0; oQ < LQ; oQ++) {
        qQ[oQ] = new Array(6);
        for (let LQ = 0; LQ < 6; LQ++) {
          const DQ = wQ.mipmaps[6 * oQ + LQ];
          qQ[oQ][LQ] = new Uint8Array(QQ.buffer, QQ.byteOffset + FQ.binaryDataPosition + DQ.position, DQ.length)
        }
      }
      return qQ
    }

    function eQ(QQ, FQ) {
      FQ = AQ(FQ);
      const wQ = new Array(6),
        LQ = FQ.irradiance?.irradianceTexture;
      if (LQ) {
        if (6 !== LQ.faces.length) throw new Error(`Incorrect irradiance texture faces number "${LQ.faces.length}"`);
        for (let qQ = 0; qQ < 6; qQ++) {
          const oQ = LQ.faces[qQ];
          wQ[qQ] = new Uint8Array(QQ.buffer, QQ.byteOffset + FQ.binaryDataPosition + oQ.position, oQ.length)
        }
      }
      return wQ
    }

    function MQ(QQ, FQ, wQ) {
      const LQ = (wQ = AQ(wQ)).specular;
      if (!LQ) return Promise.resolve([]);
      QQ._lodGenerationScale = LQ.lodGenerationScale;
      const oQ = [],
        DQ = tQ(FQ, wQ);
      oQ.push(pQ(QQ, DQ, wQ.imageType));
      const kQ = wQ.irradiance?.irradianceTexture;
      if (kQ) {
        const LQ = eQ(FQ, wQ);
        let DQ = null;
        wQ.irradiance?.irradianceTexture?.dominantDirection && (DQ = qQ.p.FromArray(wQ.irradiance.irradianceTexture.dominantDirection)), oQ.push(cQ(QQ, LQ, kQ.size, wQ.imageType, DQ))
      }
      return Promise.all(oQ)
    }
    async function GQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
      return await new Promise(((HQ, bQ) => {
        if (wQ) {
          const wQ = FQ.createTexture(null, !0, !0, null, 1, null, (QQ => {
            bQ(QQ)
          }), QQ);
          LQ?.onEffectCreatedObservable.addOnce((kQ => {
            kQ.executeWhenCompiled((() => {
              LQ.externalTextureSamplerBinding = !0, LQ.onApply = LQ => {
                LQ._bindTexture("textureSampler", wQ), LQ.setFloat2("scale", 1, FQ._features.needsInvertingBitmap && QQ instanceof ImageBitmap ? -1 : 1)
              }, FQ.scenes.length && (FQ.scenes[0].postProcessManager.directRender([LQ], mQ, !0, oQ, DQ), FQ.restoreDefaultFramebuffer(), wQ.dispose(), URL.revokeObjectURL(qQ), HQ())
            }))
          }))
        } else {
          if (FQ._uploadImageToTexture(uQ, QQ, oQ, DQ), kQ) {
            const wQ = vQ[DQ];
            wQ && FQ._uploadImageToTexture(wQ._texture, QQ, oQ, 0)
          }
          HQ()
        }
      }))
    }
    async function pQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bQ;
      const LQ = QQ.Wx();
      QQ.format = 5, QQ.type = 0, QQ.generateMipMaps = !0, QQ._cachedAnisotropicFilteringLevel = null, LQ.updateTextureSamplingMode(3, QQ), await CQ(QQ, FQ, !0, wQ), QQ.isReady = !0
    }
    async function cQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bQ,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const oQ = QQ.Wx(),
        DQ = new kQ.d(oQ, 5),
        mQ = new vQ.b(oQ, DQ);
      QQ._irradianceTexture = mQ, mQ._dominantDirection = qQ, DQ.isCube = !0, DQ.format = 5, DQ.type = 0, DQ.generateMipMaps = !0, DQ._cachedAnisotropicFilteringLevel = null, DQ.generateMipMaps = !0, DQ.width = wQ, DQ.height = wQ, oQ.updateTextureSamplingMode(3, DQ), await CQ(DQ, [FQ], !1, LQ), oQ.generateMipMapsForCubemap(DQ), DQ.isReady = !0
    }
    async function CQ(QQ, FQ, qQ) {
      let DQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bQ;
      if (!(0, LQ.g)(QQ.width)) throw new Error("Texture size must be a power of two");
      const uQ = (0, oQ.ILog2)(QQ.width) + 1,
        YQ = QQ.Wx();
      let xQ = !1,
        AQ = !1,
        tQ = null,
        eQ = null,
        MQ = null;
      const pQ = YQ.getCaps();
      pQ.textureLOD ? YQ._features.supportRenderAndCopyToLodForFloatTextures ? pQ.textureHalfFloatRender && pQ.textureHalfFloatLinearFiltering ? (xQ = !0, QQ.type = 2) : pQ.textureFloatRender && pQ.textureFloatLinearFiltering && (xQ = !0, QQ.type = 1) : xQ = !1 : (xQ = !1, AQ = qQ);
      let cQ = 0;
      if (xQ) YQ.isWebGPU ? (cQ = 1, await wQ.e(333).then((() => wQ(60878)))) : await wQ.e(315).then((() => wQ(60885))), tQ = new mQ.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, YQ, !1, void 0, QQ.type, void 0, null, !1, void 0, cQ), QQ._isRGBD = !1, QQ.invertY = !1, eQ = YQ.createRenderTargetCubeTexture(QQ.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: QQ.type,
        format: 5
      });
      else if (QQ._isRGBD = !0, QQ.invertY = !0, AQ) {
        const FQ = 3;
        MQ = {};
        const wQ = QQ._lodGenerationScale,
          LQ = QQ._lodGenerationOffset;
        for (let qQ = 0; qQ < FQ; qQ++) {
          const oQ = (uQ - 1) * wQ + LQ,
            DQ = LQ + (oQ - LQ) * (1 - qQ / (FQ - 1)),
            mQ = Math.round(Math.min(Math.max(DQ, 0), oQ)),
            HQ = new kQ.d(YQ, 2);
          HQ.isCube = !0, HQ.invertY = !0, HQ.generateMipMaps = !1, YQ.updateTextureSamplingMode(2, HQ);
          const bQ = new vQ.b(null);
          switch (bQ._isCube = !0, bQ._texture = HQ, MQ[mQ] = bQ, qQ) {
            case 0:
              QQ._lodTextureLow = bQ;
              break;
            case 1:
              QQ._lodTextureMid = bQ;
              break;
            case 2:
              QQ._lodTextureHigh = bQ
          }
        }
      }
      const CQ = [];
      for (let wQ = 0; wQ < FQ.length; wQ++)
        for (let LQ = 0; LQ < 6; LQ++) {
          const qQ = FQ[wQ][LQ],
            oQ = (0, HQ.l)(qQ),
            kQ = new Blob([oQ], {
              type: DQ
            }),
            vQ = URL.createObjectURL(kQ);
          let mQ;
          if (YQ._features.forceBitmapOverHTMLImageElement) mQ = YQ.createImageBitmap(kQ, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async FQ => await GQ(FQ, YQ, xQ, tQ, vQ, LQ, wQ, AQ, MQ, eQ, QQ)));
          else {
            const FQ = new Image;
            FQ.src = vQ, mQ = new Promise(((qQ, oQ) => {
              FQ.onload = () => {
                GQ(FQ, YQ, xQ, tQ, vQ, LQ, wQ, AQ, MQ, eQ, QQ).then((() => qQ())).catch((QQ => {
                  oQ(QQ)
                }))
              }, FQ.onerror = QQ => {
                oQ(QQ)
              }
            }))
          }
          CQ.push(mQ)
        }
      if (await Promise.all(CQ), FQ.length < uQ) {
        let wQ;
        const LQ = Math.pow(2, uQ - 1 - FQ.length),
          qQ = LQ * LQ * 4;
        switch (QQ.type) {
          case 0:
            wQ = new Uint8Array(qQ);
            break;
          case 2:
            wQ = new Uint16Array(qQ);
            break;
          case 1:
            wQ = new Float32Array(qQ)
        }
        for (let oQ = FQ.length; oQ < uQ; oQ++)
          for (let FQ = 0; FQ < 6; FQ++) YQ._uploadArrayBufferViewToTexture(eQ?.texture || QQ, wQ, FQ, oQ)
      }
      if (eQ) {
        const FQ = QQ._irradianceTexture;
        QQ._irradianceTexture = null, YQ._releaseTexture(QQ), eQ._swapAndDie(QQ), QQ._irradianceTexture = FQ
      }
      tQ && tQ.dispose(), AQ && (QQ._lodTextureHigh && QQ._lodTextureHigh._texture && (QQ._lodTextureHigh._texture.isReady = !0), QQ._lodTextureMid && QQ._lodTextureMid._texture && (QQ._lodTextureMid._texture.isReady = !0), QQ._lodTextureLow && QQ._lodTextureLow._texture && (QQ._lodTextureLow._texture.isReady = !0))
    }

    function SQ(QQ, FQ) {
      const wQ = (FQ = AQ(FQ)).irradiance;
      if (!wQ) return;
      const LQ = new DQ.e;
      qQ.p.FromArrayToRef(wQ.x, 0, LQ.x), qQ.p.FromArrayToRef(wQ.y, 0, LQ.y), qQ.p.FromArrayToRef(wQ.z, 0, LQ.z), qQ.p.FromArrayToRef(wQ.xx, 0, LQ.xx), qQ.p.FromArrayToRef(wQ.yy, 0, LQ.yy), qQ.p.FromArrayToRef(wQ.zz, 0, LQ.zz), qQ.p.FromArrayToRef(wQ.yz, 0, LQ.yz), qQ.p.FromArrayToRef(wQ.zx, 0, LQ.zx), qQ.p.FromArrayToRef(wQ.xy, 0, LQ.xy), QQ._sphericalPolynomial = LQ
    }
    var iQ = wQ(41239);
    class WQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(QQ, FQ, wQ, LQ, qQ) {
        if (Array.isArray(QQ)) return;
        const oQ = xQ(QQ);
        if (oQ) {
          FQ.width = oQ.width, FQ.height = oQ.width;
          try {
            (0, iQ.c)(), SQ(FQ, oQ), MQ(FQ, QQ, oQ).then((() => {
              FQ.isReady = !0, FQ.onLoadedObservable.notifyObservers(FQ), FQ.onLoadedObservable.clear(), LQ && LQ()
            }), (QQ => {
              qQ?.("Can not upload environment levels", QQ)
            }))
          } catch (DQ) {
            qQ?.("Can not upload environment file", DQ)
          }
        } else qQ && qQ("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
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
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);