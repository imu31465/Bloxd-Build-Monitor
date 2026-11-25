export const id = 317;
export const ids = [317];
export const modules = {
  42034: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      _ENVTextureLoader: () => HQ
    });
    var wQ = XQ(40206),
      qQ = XQ(37370),
      TQ = XQ(37404),
      zQ = XQ(40250),
      sQ = XQ(40103),
      FQ = XQ(40253),
      PQ = (XQ(40355), XQ(42041)),
      gQ = XQ(38956),
      JQ = (XQ(42055), XQ(42076), XQ(40331));
    const rQ = "image/png",
      IQ = [134, 22, 135, 150, 246, 214, 150, 54];

    function jQ(QQ) {
      const WQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      let XQ = 0;
      for (let zQ = 0; zQ < IQ.length; zQ++)
        if (WQ.getUint8(XQ++) !== IQ[zQ]) return gQ.b.Error("Not a babylon environment map"), null;
      let wQ, qQ = "";
      for (; wQ = WQ.getUint8(XQ++);) qQ += String.fromCharCode(wQ);
      let TQ = JSON.parse(qQ);
      return TQ = BQ(TQ), TQ.binaryDataPosition = XQ, TQ.specular && (TQ.specular.lodGenerationScale = TQ.specular.lodGenerationScale || .8), TQ
    }

    function BQ(QQ) {
      if (QQ.version > 2) throw new Error(`Unsupported babylon environment map version "${QQ.version}". Latest supported version is "2".`);
      return 2 === QQ.version ? QQ : QQ = {
        ...QQ,
        version: 2,
        imageType: rQ
      }
    }

    function yQ(QQ, WQ) {
      const XQ = (WQ = BQ(WQ)).specular;
      let wQ = Math.log2(WQ.width);
      if (wQ = Math.round(wQ) + 1, XQ.mipmaps.length !== 6 * wQ) throw new Error(`Unsupported specular mipmaps number "${XQ.mipmaps.length}"`);
      const qQ = new Array(wQ);
      for (let TQ = 0; TQ < wQ; TQ++) {
        qQ[TQ] = new Array(6);
        for (let wQ = 0; wQ < 6; wQ++) {
          const zQ = XQ.mipmaps[6 * TQ + wQ];
          qQ[TQ][wQ] = new Uint8Array(QQ.buffer, QQ.byteOffset + WQ.binaryDataPosition + zQ.position, zQ.length)
        }
      }
      return qQ
    }

    function VQ(QQ, WQ) {
      WQ = BQ(WQ);
      const XQ = new Array(6),
        wQ = WQ.irradiance?.irradianceTexture;
      if (wQ) {
        if (6 !== wQ.faces.length) throw new Error(`Incorrect irradiance texture faces number "${wQ.faces.length}"`);
        for (let qQ = 0; qQ < 6; qQ++) {
          const TQ = wQ.faces[qQ];
          XQ[qQ] = new Uint8Array(QQ.buffer, QQ.byteOffset + WQ.binaryDataPosition + TQ.position, TQ.length)
        }
      }
      return XQ
    }

    function DQ(QQ, WQ, XQ) {
      const wQ = (XQ = BQ(XQ)).specular;
      if (!wQ) return Promise.resolve([]);
      QQ._lodGenerationScale = wQ.lodGenerationScale;
      const TQ = [],
        zQ = yQ(WQ, XQ);
      TQ.push(GQ(QQ, zQ, XQ.imageType));
      const sQ = XQ.irradiance?.irradianceTexture;
      if (sQ) {
        const wQ = VQ(WQ, XQ);
        let zQ = null;
        XQ.irradiance?.irradianceTexture?.dominantDirection && (zQ = qQ.s.FromArray(XQ.irradiance.irradianceTexture.dominantDirection)), TQ.push(UQ(QQ, wQ, sQ.size, XQ.imageType, zQ))
      }
      return Promise.all(TQ)
    }
    async function pQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
      return await new Promise(((JQ, rQ) => {
        if (XQ) {
          const XQ = WQ.createTexture(null, !0, !0, null, 1, null, (QQ => {
            rQ(QQ)
          }), QQ);
          wQ?.onEffectCreatedObservable.addOnce((sQ => {
            sQ.executeWhenCompiled((() => {
              wQ.externalTextureSamplerBinding = !0, wQ.onApply = wQ => {
                wQ._bindTexture("textureSampler", XQ), wQ.setFloat2("scale", 1, WQ._features.needsInvertingBitmap && QQ instanceof ImageBitmap ? -1 : 1)
              }, WQ.scenes.length && (WQ.scenes[0].postProcessManager.directRender([wQ], PQ, !0, TQ, zQ), WQ.restoreDefaultFramebuffer(), XQ.dispose(), URL.revokeObjectURL(qQ), JQ())
            }))
          }))
        } else {
          if (WQ._uploadImageToTexture(gQ, QQ, TQ, zQ), sQ) {
            const XQ = FQ[zQ];
            XQ && WQ._uploadImageToTexture(XQ._texture, QQ, TQ, 0)
          }
          JQ()
        }
      }))
    }
    async function GQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rQ;
      const wQ = QQ.Uj();
      QQ.format = 5, QQ.type = 0, QQ.generateMipMaps = !0, QQ._cachedAnisotropicFilteringLevel = null, wQ.updateTextureSamplingMode(3, QQ), await bQ(QQ, WQ, !0, XQ), QQ.isReady = !0
    }
    async function UQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rQ,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const TQ = QQ.Uj(),
        zQ = new sQ.e(TQ, 5),
        PQ = new FQ.c(TQ, zQ);
      QQ._irradianceTexture = PQ, PQ._dominantDirection = qQ, zQ.isCube = !0, zQ.format = 5, zQ.type = 0, zQ.generateMipMaps = !0, zQ._cachedAnisotropicFilteringLevel = null, zQ.generateMipMaps = !0, zQ.width = XQ, zQ.height = XQ, TQ.updateTextureSamplingMode(3, zQ), await bQ(zQ, [WQ], !1, wQ), TQ.generateMipMapsForCubemap(zQ), zQ.isReady = !0
    }
    async function bQ(QQ, WQ, qQ) {
      let zQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rQ;
      if (!(0, wQ.k)(QQ.width)) throw new Error("Texture size must be a power of two");
      const gQ = (0, TQ.ILog2)(QQ.width) + 1,
        IQ = QQ.Uj();
      let jQ = !1,
        BQ = !1,
        yQ = null,
        VQ = null,
        DQ = null;
      const GQ = IQ.getCaps();
      GQ.textureLOD ? IQ._features.supportRenderAndCopyToLodForFloatTextures ? GQ.textureHalfFloatRender && GQ.textureHalfFloatLinearFiltering ? (jQ = !0, QQ.type = 2) : GQ.textureFloatRender && GQ.textureFloatLinearFiltering && (jQ = !0, QQ.type = 1) : jQ = !1 : (jQ = !1, BQ = qQ);
      let UQ = 0;
      if (jQ) IQ.isWebGPU ? (UQ = 1, await XQ.e(351).then((() => XQ(61658)))) : await XQ.e(333).then((() => XQ(61663))), yQ = new PQ.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, IQ, !1, void 0, QQ.type, void 0, null, !1, void 0, UQ), QQ._isRGBD = !1, QQ.invertY = !1, VQ = IQ.createRenderTargetCubeTexture(QQ.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: QQ.type,
        format: 5
      });
      else if (QQ._isRGBD = !0, QQ.invertY = !0, BQ) {
        const WQ = 3;
        DQ = {};
        const XQ = QQ._lodGenerationScale,
          wQ = QQ._lodGenerationOffset;
        for (let qQ = 0; qQ < WQ; qQ++) {
          const TQ = (gQ - 1) * XQ + wQ,
            zQ = wQ + (TQ - wQ) * (1 - qQ / (WQ - 1)),
            PQ = Math.round(Math.min(Math.max(zQ, 0), TQ)),
            JQ = new sQ.e(IQ, 2);
          JQ.isCube = !0, JQ.invertY = !0, JQ.generateMipMaps = !1, IQ.updateTextureSamplingMode(2, JQ);
          const rQ = new FQ.c(null);
          switch (rQ._isCube = !0, rQ._texture = JQ, DQ[PQ] = rQ, qQ) {
            case 0:
              QQ._lodTextureLow = rQ;
              break;
            case 1:
              QQ._lodTextureMid = rQ;
              break;
            case 2:
              QQ._lodTextureHigh = rQ
          }
        }
      }
      const bQ = [];
      for (let XQ = 0; XQ < WQ.length; XQ++)
        for (let wQ = 0; wQ < 6; wQ++) {
          const qQ = WQ[XQ][wQ],
            TQ = (0, JQ.l)(qQ),
            sQ = new Blob([TQ], {
              type: zQ
            }),
            FQ = URL.createObjectURL(sQ);
          let PQ;
          if (IQ._features.forceBitmapOverHTMLImageElement) PQ = IQ.createImageBitmap(sQ, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async WQ => await pQ(WQ, IQ, jQ, yQ, FQ, wQ, XQ, BQ, DQ, VQ, QQ)));
          else {
            const WQ = new Image;
            WQ.src = FQ, PQ = new Promise(((qQ, TQ) => {
              WQ.onload = () => {
                pQ(WQ, IQ, jQ, yQ, FQ, wQ, XQ, BQ, DQ, VQ, QQ).then((() => qQ())).catch((QQ => {
                  TQ(QQ)
                }))
              }, WQ.onerror = QQ => {
                TQ(QQ)
              }
            }))
          }
          bQ.push(PQ)
        }
      if (await Promise.all(bQ), WQ.length < gQ) {
        let XQ;
        const wQ = Math.pow(2, gQ - 1 - WQ.length),
          qQ = wQ * wQ * 4;
        switch (QQ.type) {
          case 0:
            XQ = new Uint8Array(qQ);
            break;
          case 2:
            XQ = new Uint16Array(qQ);
            break;
          case 1:
            XQ = new Float32Array(qQ)
        }
        for (let TQ = WQ.length; TQ < gQ; TQ++)
          for (let WQ = 0; WQ < 6; WQ++) IQ._uploadArrayBufferViewToTexture(VQ?.texture || QQ, XQ, WQ, TQ)
      }
      if (VQ) {
        const WQ = QQ._irradianceTexture;
        QQ._irradianceTexture = null, IQ._releaseTexture(QQ), VQ._swapAndDie(QQ), QQ._irradianceTexture = WQ
      }
      yQ && yQ.dispose(), BQ && (QQ._lodTextureHigh && QQ._lodTextureHigh._texture && (QQ._lodTextureHigh._texture.isReady = !0), QQ._lodTextureMid && QQ._lodTextureMid._texture && (QQ._lodTextureMid._texture.isReady = !0), QQ._lodTextureLow && QQ._lodTextureLow._texture && (QQ._lodTextureLow._texture.isReady = !0))
    }

    function vQ(QQ, WQ) {
      const XQ = (WQ = BQ(WQ)).irradiance;
      if (!XQ) return;
      const wQ = new zQ.e;
      qQ.s.FromArrayToRef(XQ.x, 0, wQ.x), qQ.s.FromArrayToRef(XQ.y, 0, wQ.y), qQ.s.FromArrayToRef(XQ.z, 0, wQ.z), qQ.s.FromArrayToRef(XQ.xx, 0, wQ.xx), qQ.s.FromArrayToRef(XQ.yy, 0, wQ.yy), qQ.s.FromArrayToRef(XQ.zz, 0, wQ.zz), qQ.s.FromArrayToRef(XQ.yz, 0, wQ.yz), qQ.s.FromArrayToRef(XQ.zx, 0, wQ.zx), qQ.s.FromArrayToRef(XQ.xy, 0, wQ.xy), QQ._sphericalPolynomial = wQ
    }
    var dQ = XQ(42083);
    class HQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(QQ, WQ, XQ, wQ, qQ) {
        if (Array.isArray(QQ)) return;
        const TQ = jQ(QQ);
        if (TQ) {
          WQ.width = TQ.width, WQ.height = TQ.width;
          try {
            (0, dQ.b)(), vQ(WQ, TQ), DQ(WQ, QQ, TQ).then((() => {
              WQ.isReady = !0, WQ.onLoadedObservable.notifyObservers(WQ), WQ.onLoadedObservable.clear(), wQ && wQ()
            }), (QQ => {
              qQ?.("Can not upload environment levels", QQ)
            }))
          } catch (zQ) {
            qQ?.("Can not upload environment file", zQ)
          }
        } else qQ && qQ("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
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
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);