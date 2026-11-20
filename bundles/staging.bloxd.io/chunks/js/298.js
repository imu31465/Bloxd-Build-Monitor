export const id = 298;
export const ids = [298];
export const modules = {
  41138: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      _ENVTextureLoader: () => nU
    });
    var tU = gU(39311),
      pU = gU(36600),
      EU = gU(36626),
      PU = gU(39364),
      TU = gU(39203),
      qU = gU(39373),
      KU = (gU(39468), gU(41147)),
      cU = gU(38236),
      GU = (gU(41161), gU(41181), gU(39437));
    const jU = "image/png",
      uU = [134, 22, 135, 150, 246, 214, 150, 54];

    function CU(UU) {
      const RU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
      let gU = 0;
      for (let PU = 0; PU < uU.length; PU++)
        if (RU.getUint8(gU++) !== uU[PU]) return cU.e.Error("Not a babylon environment map"), null;
      let tU, pU = "";
      for (; tU = RU.getUint8(gU++);) pU += String.fromCharCode(tU);
      let EU = JSON.parse(pU);
      return EU = hU(EU), EU.binaryDataPosition = gU, EU.specular && (EU.specular.lodGenerationScale = EU.specular.lodGenerationScale || .8), EU
    }

    function hU(UU) {
      if (UU.version > 2) throw new Error(`Unsupported babylon environment map version "${UU.version}". Latest supported version is "2".`);
      return 2 === UU.version ? UU : UU = {
        ...UU,
        version: 2,
        imageType: jU
      }
    }

    function QU(UU, RU) {
      const gU = (RU = hU(RU)).specular;
      let tU = Math.log2(RU.width);
      if (tU = Math.round(tU) + 1, gU.mipmaps.length !== 6 * tU) throw new Error(`Unsupported specular mipmaps number "${gU.mipmaps.length}"`);
      const pU = new Array(tU);
      for (let EU = 0; EU < tU; EU++) {
        pU[EU] = new Array(6);
        for (let tU = 0; tU < 6; tU++) {
          const PU = gU.mipmaps[6 * EU + tU];
          pU[EU][tU] = new Uint8Array(UU.buffer, UU.byteOffset + RU.binaryDataPosition + PU.position, PU.length)
        }
      }
      return pU
    }

    function eU(UU, RU) {
      RU = hU(RU);
      const gU = new Array(6),
        tU = RU.irradiance?.irradianceTexture;
      if (tU) {
        if (6 !== tU.faces.length) throw new Error(`Incorrect irradiance texture faces number "${tU.faces.length}"`);
        for (let pU = 0; pU < 6; pU++) {
          const EU = tU.faces[pU];
          gU[pU] = new Uint8Array(UU.buffer, UU.byteOffset + RU.binaryDataPosition + EU.position, EU.length)
        }
      }
      return gU
    }

    function WU(UU, RU, gU) {
      const tU = (gU = hU(gU)).specular;
      if (!tU) return Promise.resolve([]);
      UU._lodGenerationScale = tU.lodGenerationScale;
      const EU = [],
        PU = QU(RU, gU);
      EU.push(xU(UU, PU, gU.imageType));
      const TU = gU.irradiance?.irradianceTexture;
      if (TU) {
        const tU = eU(RU, gU);
        let PU = null;
        gU.irradiance?.irradianceTexture?.dominantDirection && (PU = pU.n.FromArray(gU.irradiance.irradianceTexture.dominantDirection)), EU.push(mU(UU, tU, TU.size, gU.imageType, PU))
      }
      return Promise.all(EU)
    }
    async function fU(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU) {
      return await new Promise(((GU, jU) => {
        if (gU) {
          const gU = RU.createTexture(null, !0, !0, null, 1, null, (UU => {
            jU(UU)
          }), UU);
          tU?.onEffectCreatedObservable.addOnce((TU => {
            TU.executeWhenCompiled((() => {
              tU.externalTextureSamplerBinding = !0, tU.onApply = tU => {
                tU._bindTexture("textureSampler", gU), tU.setFloat2("scale", 1, RU._features.needsInvertingBitmap && UU instanceof ImageBitmap ? -1 : 1)
              }, RU.scenes.length && (RU.scenes[0].postProcessManager.directRender([tU], KU, !0, EU, PU), RU.restoreDefaultFramebuffer(), gU.dispose(), URL.revokeObjectURL(pU), GU())
            }))
          }))
        } else {
          if (RU._uploadImageToTexture(cU, UU, EU, PU), TU) {
            const gU = qU[PU];
            gU && RU._uploadImageToTexture(gU._texture, UU, EU, 0)
          }
          GU()
        }
      }))
    }
    async function xU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jU;
      const tU = UU.WC();
      UU.format = 5, UU.type = 0, UU.generateMipMaps = !0, UU._cachedAnisotropicFilteringLevel = null, tU.updateTextureSamplingMode(3, UU), await IU(UU, RU, !0, gU), UU.isReady = !0
    }
    async function mU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jU,
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const EU = UU.WC(),
        PU = new TU.d(EU, 5),
        KU = new qU.b(EU, PU);
      UU._irradianceTexture = KU, KU._dominantDirection = pU, PU.isCube = !0, PU.format = 5, PU.type = 0, PU.generateMipMaps = !0, PU._cachedAnisotropicFilteringLevel = null, PU.generateMipMaps = !0, PU.width = gU, PU.height = gU, EU.updateTextureSamplingMode(3, PU), await IU(PU, [RU], !1, tU), EU.generateMipMapsForCubemap(PU), PU.isReady = !0
    }
    async function IU(UU, RU, pU) {
      let PU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jU;
      if (!(0, tU.f)(UU.width)) throw new Error("Texture size must be a power of two");
      const cU = (0, EU.ILog2)(UU.width) + 1,
        uU = UU.WC();
      let CU = !1,
        hU = !1,
        QU = null,
        eU = null,
        WU = null;
      const xU = uU.getCaps();
      xU.textureLOD ? uU._features.supportRenderAndCopyToLodForFloatTextures ? xU.textureHalfFloatRender && xU.textureHalfFloatLinearFiltering ? (CU = !0, UU.type = 2) : xU.textureFloatRender && xU.textureFloatLinearFiltering && (CU = !0, UU.type = 1) : CU = !1 : (CU = !1, hU = pU);
      let mU = 0;
      if (CU) uU.isWebGPU ? (mU = 1, await gU.e(332).then((() => gU(60758)))) : await gU.e(314).then((() => gU(60762))), QU = new KU.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, uU, !1, void 0, UU.type, void 0, null, !1, void 0, mU), UU._isRGBD = !1, UU.invertY = !1, eU = uU.createRenderTargetCubeTexture(UU.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: UU.type,
        format: 5
      });
      else if (UU._isRGBD = !0, UU.invertY = !0, hU) {
        const RU = 3;
        WU = {};
        const gU = UU._lodGenerationScale,
          tU = UU._lodGenerationOffset;
        for (let pU = 0; pU < RU; pU++) {
          const EU = (cU - 1) * gU + tU,
            PU = tU + (EU - tU) * (1 - pU / (RU - 1)),
            KU = Math.round(Math.min(Math.max(PU, 0), EU)),
            GU = new TU.d(uU, 2);
          GU.isCube = !0, GU.invertY = !0, GU.generateMipMaps = !1, uU.updateTextureSamplingMode(2, GU);
          const jU = new qU.b(null);
          switch (jU._isCube = !0, jU._texture = GU, WU[KU] = jU, pU) {
            case 0:
              UU._lodTextureLow = jU;
              break;
            case 1:
              UU._lodTextureMid = jU;
              break;
            case 2:
              UU._lodTextureHigh = jU
          }
        }
      }
      const IU = [];
      for (let gU = 0; gU < RU.length; gU++)
        for (let tU = 0; tU < 6; tU++) {
          const pU = RU[gU][tU],
            EU = (0, GU.k)(pU),
            TU = new Blob([EU], {
              type: PU
            }),
            qU = URL.createObjectURL(TU);
          let KU;
          if (uU._features.forceBitmapOverHTMLImageElement) KU = uU.createImageBitmap(TU, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async RU => await fU(RU, uU, CU, QU, qU, tU, gU, hU, WU, eU, UU)));
          else {
            const RU = new Image;
            RU.src = qU, KU = new Promise(((pU, EU) => {
              RU.onload = () => {
                fU(RU, uU, CU, QU, qU, tU, gU, hU, WU, eU, UU).then((() => pU())).catch((UU => {
                  EU(UU)
                }))
              }, RU.onerror = UU => {
                EU(UU)
              }
            }))
          }
          IU.push(KU)
        }
      if (await Promise.all(IU), RU.length < cU) {
        let gU;
        const tU = Math.pow(2, cU - 1 - RU.length),
          pU = tU * tU * 4;
        switch (UU.type) {
          case 0:
            gU = new Uint8Array(pU);
            break;
          case 2:
            gU = new Uint16Array(pU);
            break;
          case 1:
            gU = new Float32Array(pU)
        }
        for (let EU = RU.length; EU < cU; EU++)
          for (let RU = 0; RU < 6; RU++) uU._uploadArrayBufferViewToTexture(eU?.texture || UU, gU, RU, EU)
      }
      if (eU) {
        const RU = UU._irradianceTexture;
        UU._irradianceTexture = null, uU._releaseTexture(UU), eU._swapAndDie(UU), UU._irradianceTexture = RU
      }
      QU && QU.dispose(), hU && (UU._lodTextureHigh && UU._lodTextureHigh._texture && (UU._lodTextureHigh._texture.isReady = !0), UU._lodTextureMid && UU._lodTextureMid._texture && (UU._lodTextureMid._texture.isReady = !0), UU._lodTextureLow && UU._lodTextureLow._texture && (UU._lodTextureLow._texture.isReady = !0))
    }

    function JU(UU, RU) {
      const gU = (RU = hU(RU)).irradiance;
      if (!gU) return;
      const tU = new PU.c;
      pU.n.FromArrayToRef(gU.x, 0, tU.x), pU.n.FromArrayToRef(gU.y, 0, tU.y), pU.n.FromArrayToRef(gU.z, 0, tU.z), pU.n.FromArrayToRef(gU.xx, 0, tU.xx), pU.n.FromArrayToRef(gU.yy, 0, tU.yy), pU.n.FromArrayToRef(gU.zz, 0, tU.zz), pU.n.FromArrayToRef(gU.yz, 0, tU.yz), pU.n.FromArrayToRef(gU.zx, 0, tU.zx), pU.n.FromArrayToRef(gU.xy, 0, tU.xy), UU._sphericalPolynomial = tU
    }
    var wU = gU(41184);
    class nU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(UU, RU, gU, tU, pU) {
        if (Array.isArray(UU)) return;
        const EU = CU(UU);
        if (EU) {
          RU.width = EU.width, RU.height = EU.width;
          try {
            (0, wU.d)(), JU(RU, EU), WU(RU, UU, EU).then((() => {
              RU.isReady = !0, RU.onLoadedObservable.notifyObservers(RU), RU.onLoadedObservable.clear(), tU && tU()
            }), (UU => {
              pU?.("Can not upload environment levels", UU)
            }))
          } catch (PU) {
            pU?.("Can not upload environment file", PU)
          }
        } else pU && pU("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41184: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(41114),
      pU = gU(39373);
    let EU = !1;

    function PU() {
      EU || (EU = !0, pU.b.prototype._sphericalPolynomialTargetSize = 0, pU.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(pU.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = tU.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((UU => {
              this._texture._sphericalPolynomial = UU, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(UU) {
          this._texture && (this._texture._sphericalPolynomial = UU)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41114: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => KU
    });
    var tU = gU(36600),
      pU = gU(36626),
      EU = gU(39364),
      PU = gU(36602),
      TU = gU(36761);
    class qU {
      constructor(UU, RU, gU, tU) {
        this.name = UU, this.worldAxisForNormal = RU, this.worldAxisForFileX = gU, this.worldAxisForFileY = tU
      }
    }
    class KU {
      static _NearestPow2Floor(UU) {
        return UU <= 1 ? 1 : 1 << Math.floor(Math.log2(UU))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(UU) {
        if (!UU.isCube) return null;
        UU.aZ()?.WC().flushFramebuffer();
        const RU = UU.getSize().width,
          gU = UU._sphericalPolynomialTargetSize,
          tU = gU > 0 ? this._NearestPow2Floor(gU) : 0,
          pU = !UU.noMipmap && !0 === UU._texture?.generateMipMaps,
          EU = tU > 0 && tU < RU && pU,
          PU = EU ? Math.max(0, Math.round(Math.log2(RU / tU))) : 0,
          TU = EU ? Math.max(1, Math.floor(RU / Math.pow(2, PU))) : RU,
          qU = UU.readPixels(0, PU, void 0, !1),
          KU = UU.readPixels(1, PU, void 0, !1);
        let cU, GU;
        UU.isRenderTarget ? (cU = UU.readPixels(3, PU, void 0, !1), GU = UU.readPixels(2, PU, void 0, !1)) : (cU = UU.readPixels(2, PU, void 0, !1), GU = UU.readPixels(3, PU, void 0, !1));
        const jU = UU.readPixels(4, PU, void 0, !1),
          uU = UU.readPixels(5, PU, void 0, !1),
          CU = UU.gammaSpace,
          hU = tU > 0 && tU < RU && !EU;
        return new Promise((UU => {
          Promise.all([KU, qU, cU, GU, jU, uU]).then((gU => {
            let [pU, EU, PU, qU, KU, cU] = gU, GU = TU;
            if (hU) {
              const UU = 4;
              pU = this._DownsampleFace(pU, RU, tU, UU), EU = this._DownsampleFace(EU, RU, tU, UU), PU = this._DownsampleFace(PU, RU, tU, UU), qU = this._DownsampleFace(qU, RU, tU, UU), KU = this._DownsampleFace(KU, RU, tU, UU), cU = this._DownsampleFace(cU, RU, tU, UU), GU = tU
            }
            const jU = {
              size: GU,
              right: EU,
              left: pU,
              up: PU,
              down: qU,
              front: KU,
              back: cU,
              format: 5,
              type: pU instanceof Float32Array ? 1 : 0,
              gammaSpace: CU
            };
            UU(this.ConvertCubeMapToSphericalPolynomial(jU))
          }))
        }))
      }
      static _AreaElement(UU, RU) {
        return Math.atan2(UU * RU, Math.sqrt(UU * UU + RU * RU + 1))
      }
      static _DownsampleFace(UU, RU, gU, tU) {
        const pU = UU instanceof Float32Array ? UU : Float32Array.from(UU),
          EU = gU * gU * tU,
          PU = new Float32Array(EU),
          TU = RU / gU,
          qU = 1 / (TU * TU);
        for (let cU = 0; cU < gU; cU++) {
          const UU = Math.floor(cU * TU),
            EU = Math.floor((cU + 1) * TU);
          for (let KU = 0; KU < gU; KU++) {
            const GU = Math.floor(KU * TU),
              jU = Math.floor((KU + 1) * TU),
              uU = (cU * gU + KU) * tU;
            for (let gU = 0; gU < tU; gU++) {
              let TU = 0;
              for (let PU = UU; PU < EU; PU++)
                for (let UU = GU; UU < jU; UU++) TU += pU[(PU * RU + UU) * tU + gU];
              PU[uU + gU] = TU * qU
            }
          }
        }
        if (UU instanceof Float32Array) return PU;
        const KU = new(0, UU.constructor)(EU);
        for (let cU = 0; cU < EU; cU++) KU[cU] = PU[cU] + .5 | 0;
        return KU
      }
      static ConvertCubeMapToSphericalPolynomial(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gU = RU > 0 ? this._NearestPow2Floor(RU) : 0;
        if (gU > 0 && UU.size > gU) {
          const RU = 5 === UU.format ? 4 : 3,
            tU = ["right", "left", "up", "down", "front", "back"],
            pU = {};
          for (const EU of tU) pU[EU] = this._DownsampleFace(UU[EU], UU.size, gU, RU);
          UU = {
            ...UU,
            ...pU,
            size: gU
          }
        }
        const tU = new EU.b;
        let qU = 0;
        const KU = 2 / UU.size,
          cU = KU,
          GU = .5 * KU,
          jU = GU - 1;
        for (let EU = 0; EU < 6; EU++) {
          const RU = this._FileFaces[EU],
            gU = UU[RU.name];
          let uU = jU;
          const CU = 5 === UU.format ? 4 : 3;
          for (let EU = 0; EU < UU.size; EU++) {
            let hU = jU;
            for (let cU = 0; cU < UU.size; cU++) {
              const jU = RU.worldAxisForFileX.scale(hU).add(RU.worldAxisForFileY.scale(uU)).add(RU.worldAxisForNormal);
              jU.normalize();
              const QU = this._AreaElement(hU - GU, uU - GU) - this._AreaElement(hU - GU, uU + GU) - this._AreaElement(hU + GU, uU - GU) + this._AreaElement(hU + GU, uU + GU);
              let eU = gU[EU * UU.size * CU + cU * CU + 0],
                WU = gU[EU * UU.size * CU + cU * CU + 1],
                fU = gU[EU * UU.size * CU + cU * CU + 2];
              isNaN(eU) && (eU = 0), isNaN(WU) && (WU = 0), isNaN(fU) && (fU = 0), 0 === UU.type && (eU /= 255, WU /= 255, fU /= 255), UU.gammaSpace && (eU = Math.pow((0, pU.Clamp)(eU), PU.k), WU = Math.pow((0, pU.Clamp)(WU), PU.k), fU = Math.pow((0, pU.Clamp)(fU), PU.k));
              const xU = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const UU = Math.max(eU, WU, fU);
                if (UU > xU) {
                  const RU = xU / UU;
                  eU *= RU, WU *= RU, fU *= RU
                }
              } else eU = (0, pU.Clamp)(eU, 0, xU), WU = (0, pU.Clamp)(WU, 0, xU), fU = (0, pU.Clamp)(fU, 0, xU);
              const mU = new TU.e(eU, WU, fU);
              tU.addLight(jU, mU, QU), qU += QU, hU += KU
            }
            uU += cU
          }
        }
        const uU = 6 * (4 * Math.PI) / 6 / qU;
        return tU.scaleInPlace(uU), tU.convertIncidentRadianceToIrradiance(), tU.convertIrradianceToLambertianRadiance(), EU.c.FromHarmonics(tU)
      }
    }
    KU._FileFaces = [new qU("right", new tU.n(1, 0, 0), new tU.n(0, 0, -1), new tU.n(0, -1, 0)), new qU("left", new tU.n(-1, 0, 0), new tU.n(0, 0, 1), new tU.n(0, -1, 0)), new qU("up", new tU.n(0, 1, 0), new tU.n(1, 0, 0), new tU.n(0, 0, 1)), new qU("down", new tU.n(0, -1, 0), new tU.n(1, 0, 0), new tU.n(0, 0, -1)), new qU("front", new tU.n(0, 0, 1), new tU.n(1, 0, 0), new tU.n(0, -1, 0)), new qU("back", new tU.n(0, 0, -1), new tU.n(-1, 0, 0), new tU.n(0, -1, 0))], KU.MAX_HDRI_VALUE = 4096, KU.PRESERVE_CLAMPED_COLORS = !1
  },
  41161: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(41147),
      pU = gU(41165);
    class EU {
      static ExpandRGBDTexture(UU) {
        const RU = UU._texture;
        if (!RU || !UU.isRGBD) return;
        const pU = RU.WC(),
          EU = pU.getCaps(),
          PU = RU.isReady;
        let TU = !1;
        EU.textureHalfFloatRender && EU.textureHalfFloatLinearFiltering ? (TU = !0, RU.type = 2) : EU.textureFloatRender && EU.textureFloatLinearFiltering && (TU = !0, RU.type = 1), TU && (RU.isReady = !1, RU._isRGBD = !1, RU.invertY = !1);
        const qU = async () => {
          const EU = pU.isWebGPU,
            PU = EU ? 1 : 0;
          RU.isReady = !1, EU ? await gU.e(332).then((() => gU(60758))) : await gU.e(314).then((() => gU(60762)));
          const TU = new tU.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, pU, !1, void 0, RU.type, void 0, null, !1, void 0, PU);
          TU.externalTextureSamplerBinding = !0;
          const qU = pU.createRenderTargetTexture(RU.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: RU.samplingMode,
            type: RU.type,
            format: 5
          });
          TU.onEffectCreatedObservable.addOnce((gU => {
            gU.executeWhenCompiled((() => {
              TU.onApply = UU => {
                UU._bindTexture("textureSampler", RU), UU.setFloat2("scale", 1, 1)
              }, UU.aZ()?.postProcessManager.directRender([TU], qU, !0), pU.restoreDefaultFramebuffer(), pU._releaseTexture(RU), TU && TU.dispose(), qU._swapAndDie(RU), RU.isReady = !0
            }))
          }))
        };
        TU && (PU ? qU() : UU.onLoadObservable.addOnce(qU))
      }
      static async EncodeTextureToRGBD(UU, RU) {
        let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return RU.WC().isWebGPU ? await gU.e(333).then((() => gU(60776))) : await gU.e(315).then((() => gU(60773))), await (0, pU.c)("rgbdEncode", UU, RU, tU, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);