export const id = 308;
export const ids = [308];
export const modules = {
  41702: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      _ENVTextureLoader: () => VD
    });
    var pD = wD(39852),
      sD = wD(37079),
      KD = wD(37125),
      rD = wD(39916),
      LD = wD(39761),
      cD = wD(39918),
      gD = (wD(40022), wD(41709)),
      RD = wD(38662),
      AD = (wD(41713), wD(41742), wD(39984));
    const UD = "image/png",
      fD = [134, 22, 135, 150, 246, 214, 150, 54];

    function ID(DD) {
      const zD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      let wD = 0;
      for (let rD = 0; rD < fD.length; rD++)
        if (zD.getUint8(wD++) !== fD[rD]) return RD.d.Error("Not a babylon environment map"), null;
      let pD, sD = "";
      for (; pD = zD.getUint8(wD++);) sD += String.fromCharCode(pD);
      let KD = JSON.parse(sD);
      return KD = BD(KD), KD.binaryDataPosition = wD, KD.specular && (KD.specular.lodGenerationScale = KD.specular.lodGenerationScale || .8), KD
    }

    function BD(DD) {
      if (DD.version > 2) throw new Error(`Unsupported babylon environment map version "${DD.version}". Latest supported version is "2".`);
      return 2 === DD.version ? DD : DD = {
        ...DD,
        version: 2,
        imageType: UD
      }
    }

    function GD(DD, zD) {
      const wD = (zD = BD(zD)).specular;
      let pD = Math.log2(zD.width);
      if (pD = Math.round(pD) + 1, wD.mipmaps.length !== 6 * pD) throw new Error(`Unsupported specular mipmaps number "${wD.mipmaps.length}"`);
      const sD = new Array(pD);
      for (let KD = 0; KD < pD; KD++) {
        sD[KD] = new Array(6);
        for (let pD = 0; pD < 6; pD++) {
          const rD = wD.mipmaps[6 * KD + pD];
          sD[KD][pD] = new Uint8Array(DD.buffer, DD.byteOffset + zD.binaryDataPosition + rD.position, rD.length)
        }
      }
      return sD
    }

    function hD(DD, zD) {
      zD = BD(zD);
      const wD = new Array(6),
        pD = zD.irradiance?.irradianceTexture;
      if (pD) {
        if (6 !== pD.faces.length) throw new Error(`Incorrect irradiance texture faces number "${pD.faces.length}"`);
        for (let sD = 0; sD < 6; sD++) {
          const KD = pD.faces[sD];
          wD[sD] = new Uint8Array(DD.buffer, DD.byteOffset + zD.binaryDataPosition + KD.position, KD.length)
        }
      }
      return wD
    }

    function nD(DD, zD, wD) {
      const pD = (wD = BD(wD)).specular;
      if (!pD) return Promise.resolve([]);
      DD._lodGenerationScale = pD.lodGenerationScale;
      const KD = [],
        rD = GD(zD, wD);
      KD.push(OD(DD, rD, wD.imageType));
      const LD = wD.irradiance?.irradianceTexture;
      if (LD) {
        const pD = hD(zD, wD);
        let rD = null;
        wD.irradiance?.irradianceTexture?.dominantDirection && (rD = sD.s.FromArray(wD.irradiance.irradianceTexture.dominantDirection)), KD.push(JD(DD, pD, LD.size, wD.imageType, rD))
      }
      return Promise.all(KD)
    }
    async function MD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
      return await new Promise(((AD, UD) => {
        if (wD) {
          const wD = zD.createTexture(null, !0, !0, null, 1, null, (DD => {
            UD(DD)
          }), DD);
          pD?.onEffectCreatedObservable.addOnce((LD => {
            LD.executeWhenCompiled((() => {
              pD.externalTextureSamplerBinding = !0, pD.onApply = pD => {
                pD._bindTexture("textureSampler", wD), pD.setFloat2("scale", 1, zD._features.needsInvertingBitmap && DD instanceof ImageBitmap ? -1 : 1)
              }, zD.scenes.length && (zD.scenes[0].postProcessManager.directRender([pD], gD, !0, KD, rD), zD.restoreDefaultFramebuffer(), wD.dispose(), URL.revokeObjectURL(sD), AD())
            }))
          }))
        } else {
          if (zD._uploadImageToTexture(RD, DD, KD, rD), LD) {
            const wD = cD[rD];
            wD && zD._uploadImageToTexture(wD._texture, DD, KD, 0)
          }
          AD()
        }
      }))
    }
    async function OD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UD;
      const pD = DD.iI();
      DD.format = 5, DD.type = 0, DD.generateMipMaps = !0, DD._cachedAnisotropicFilteringLevel = null, pD.updateTextureSamplingMode(3, DD), await ED(DD, zD, !0, wD), DD.isReady = !0
    }
    async function JD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UD,
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const KD = DD.iI(),
        rD = new LD.e(KD, 5),
        gD = new cD.d(KD, rD);
      DD._irradianceTexture = gD, gD._dominantDirection = sD, rD.isCube = !0, rD.format = 5, rD.type = 0, rD.generateMipMaps = !0, rD._cachedAnisotropicFilteringLevel = null, rD.generateMipMaps = !0, rD.width = wD, rD.height = wD, KD.updateTextureSamplingMode(3, rD), await ED(rD, [zD], !1, pD), KD.generateMipMapsForCubemap(rD), rD.isReady = !0
    }
    async function ED(DD, zD, sD) {
      let rD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UD;
      if (!(0, pD.g)(DD.width)) throw new Error("Texture size must be a power of two");
      const RD = (0, KD.ILog2)(DD.width) + 1,
        fD = DD.iI();
      let ID = !1,
        BD = !1,
        GD = null,
        hD = null,
        nD = null;
      const OD = fD.getCaps();
      OD.textureLOD ? fD._features.supportRenderAndCopyToLodForFloatTextures ? OD.textureHalfFloatRender && OD.textureHalfFloatLinearFiltering ? (ID = !0, DD.type = 2) : OD.textureFloatRender && OD.textureFloatLinearFiltering && (ID = !0, DD.type = 1) : ID = !1 : (ID = !1, BD = sD);
      let JD = 0;
      if (ID) fD.isWebGPU ? (JD = 1, await wD.e(342).then((() => wD(61148)))) : await wD.e(324).then((() => wD(61150))), GD = new gD.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, fD, !1, void 0, DD.type, void 0, null, !1, void 0, JD), DD._isRGBD = !1, DD.invertY = !1, hD = fD.createRenderTargetCubeTexture(DD.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: DD.type,
        format: 5
      });
      else if (DD._isRGBD = !0, DD.invertY = !0, BD) {
        const zD = 3;
        nD = {};
        const wD = DD._lodGenerationScale,
          pD = DD._lodGenerationOffset;
        for (let sD = 0; sD < zD; sD++) {
          const KD = (RD - 1) * wD + pD,
            rD = pD + (KD - pD) * (1 - sD / (zD - 1)),
            gD = Math.round(Math.min(Math.max(rD, 0), KD)),
            AD = new LD.e(fD, 2);
          AD.isCube = !0, AD.invertY = !0, AD.generateMipMaps = !1, fD.updateTextureSamplingMode(2, AD);
          const UD = new cD.d(null);
          switch (UD._isCube = !0, UD._texture = AD, nD[gD] = UD, sD) {
            case 0:
              DD._lodTextureLow = UD;
              break;
            case 1:
              DD._lodTextureMid = UD;
              break;
            case 2:
              DD._lodTextureHigh = UD
          }
        }
      }
      const ED = [];
      for (let wD = 0; wD < zD.length; wD++)
        for (let pD = 0; pD < 6; pD++) {
          const sD = zD[wD][pD],
            KD = (0, AD.j)(sD),
            LD = new Blob([KD], {
              type: rD
            }),
            cD = URL.createObjectURL(LD);
          let gD;
          if (fD._features.forceBitmapOverHTMLImageElement) gD = fD.createImageBitmap(LD, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async zD => await MD(zD, fD, ID, GD, cD, pD, wD, BD, nD, hD, DD)));
          else {
            const zD = new Image;
            zD.src = cD, gD = new Promise(((sD, KD) => {
              zD.onload = () => {
                MD(zD, fD, ID, GD, cD, pD, wD, BD, nD, hD, DD).then((() => sD())).catch((DD => {
                  KD(DD)
                }))
              }, zD.onerror = DD => {
                KD(DD)
              }
            }))
          }
          ED.push(gD)
        }
      if (await Promise.all(ED), zD.length < RD) {
        let wD;
        const pD = Math.pow(2, RD - 1 - zD.length),
          sD = pD * pD * 4;
        switch (DD.type) {
          case 0:
            wD = new Uint8Array(sD);
            break;
          case 2:
            wD = new Uint16Array(sD);
            break;
          case 1:
            wD = new Float32Array(sD)
        }
        for (let KD = zD.length; KD < RD; KD++)
          for (let zD = 0; zD < 6; zD++) fD._uploadArrayBufferViewToTexture(hD?.texture || DD, wD, zD, KD)
      }
      if (hD) {
        const zD = DD._irradianceTexture;
        DD._irradianceTexture = null, fD._releaseTexture(DD), hD._swapAndDie(DD), DD._irradianceTexture = zD
      }
      GD && GD.dispose(), BD && (DD._lodTextureHigh && DD._lodTextureHigh._texture && (DD._lodTextureHigh._texture.isReady = !0), DD._lodTextureMid && DD._lodTextureMid._texture && (DD._lodTextureMid._texture.isReady = !0), DD._lodTextureLow && DD._lodTextureLow._texture && (DD._lodTextureLow._texture.isReady = !0))
    }

    function QD(DD, zD) {
      const wD = (zD = BD(zD)).irradiance;
      if (!wD) return;
      const pD = new rD.e;
      sD.s.FromArrayToRef(wD.x, 0, pD.x), sD.s.FromArrayToRef(wD.y, 0, pD.y), sD.s.FromArrayToRef(wD.z, 0, pD.z), sD.s.FromArrayToRef(wD.xx, 0, pD.xx), sD.s.FromArrayToRef(wD.yy, 0, pD.yy), sD.s.FromArrayToRef(wD.zz, 0, pD.zz), sD.s.FromArrayToRef(wD.yz, 0, pD.yz), sD.s.FromArrayToRef(wD.zx, 0, pD.zx), sD.s.FromArrayToRef(wD.xy, 0, pD.xy), DD._sphericalPolynomial = pD
    }
    var XD = wD(41744);
    class VD {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(DD, zD, wD, pD, sD) {
        if (Array.isArray(DD)) return;
        const KD = ID(DD);
        if (KD) {
          zD.width = KD.width, zD.height = KD.width;
          try {
            (0, XD.d)(), QD(zD, KD), nD(zD, DD, KD).then((() => {
              zD.isReady = !0, zD.onLoadedObservable.notifyObservers(zD), zD.onLoadedObservable.clear(), pD && pD()
            }), (DD => {
              sD?.("Can not upload environment levels", DD)
            }))
          } catch (rD) {
            sD?.("Can not upload environment file", rD)
          }
        } else sD && sD("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41744: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD
    });
    var pD = wD(41678),
      sD = wD(39918);
    let KD = !1;

    function rD() {
      KD || (KD = !0, sD.d.prototype._sphericalPolynomialTargetSize = 0, sD.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(sD.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = pD.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((DD => {
              this._texture._sphericalPolynomial = DD, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(DD) {
          this._texture && (this._texture._sphericalPolynomial = DD)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41678: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => gD
    });
    var pD = wD(37079),
      sD = wD(37125),
      KD = wD(39916),
      rD = wD(37088),
      LD = wD(37273);
    class cD {
      constructor(DD, zD, wD, pD) {
        this.name = DD, this.worldAxisForNormal = zD, this.worldAxisForFileX = wD, this.worldAxisForFileY = pD
      }
    }
    class gD {
      static _NearestPow2Floor(DD) {
        return DD <= 1 ? 1 : 1 << Math.floor(Math.log2(DD))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(DD) {
        if (!DD.isCube) return null;
        DD.Ul()?.iI().flushFramebuffer();
        const zD = DD.getSize().width,
          wD = DD._sphericalPolynomialTargetSize,
          pD = wD > 0 ? this._NearestPow2Floor(wD) : 0,
          sD = !DD.noMipmap && !0 === DD._texture?.generateMipMaps,
          KD = pD > 0 && pD < zD && sD,
          rD = KD ? Math.max(0, Math.round(Math.log2(zD / pD))) : 0,
          LD = KD ? Math.max(1, Math.floor(zD / Math.pow(2, rD))) : zD,
          cD = DD.readPixels(0, rD, void 0, !1),
          gD = DD.readPixels(1, rD, void 0, !1);
        let RD, AD;
        DD.isRenderTarget ? (RD = DD.readPixels(3, rD, void 0, !1), AD = DD.readPixels(2, rD, void 0, !1)) : (RD = DD.readPixels(2, rD, void 0, !1), AD = DD.readPixels(3, rD, void 0, !1));
        const UD = DD.readPixels(4, rD, void 0, !1),
          fD = DD.readPixels(5, rD, void 0, !1),
          ID = DD.gammaSpace,
          BD = pD > 0 && pD < zD && !KD;
        return new Promise((DD => {
          Promise.all([gD, cD, RD, AD, UD, fD]).then((wD => {
            let [sD, KD, rD, cD, gD, RD] = wD, AD = LD;
            if (BD) {
              const DD = 4;
              sD = this._DownsampleFace(sD, zD, pD, DD), KD = this._DownsampleFace(KD, zD, pD, DD), rD = this._DownsampleFace(rD, zD, pD, DD), cD = this._DownsampleFace(cD, zD, pD, DD), gD = this._DownsampleFace(gD, zD, pD, DD), RD = this._DownsampleFace(RD, zD, pD, DD), AD = pD
            }
            const UD = {
              size: AD,
              right: KD,
              left: sD,
              up: rD,
              down: cD,
              front: gD,
              back: RD,
              format: 5,
              type: sD instanceof Float32Array ? 1 : 0,
              gammaSpace: ID
            };
            DD(this.ConvertCubeMapToSphericalPolynomial(UD))
          }))
        }))
      }
      static _AreaElement(DD, zD) {
        return Math.atan2(DD * zD, Math.sqrt(DD * DD + zD * zD + 1))
      }
      static _DownsampleFace(DD, zD, wD, pD) {
        const sD = DD instanceof Float32Array ? DD : Float32Array.from(DD),
          KD = wD * wD * pD,
          rD = new Float32Array(KD),
          LD = zD / wD,
          cD = 1 / (LD * LD);
        for (let RD = 0; RD < wD; RD++) {
          const DD = Math.floor(RD * LD),
            KD = Math.floor((RD + 1) * LD);
          for (let gD = 0; gD < wD; gD++) {
            const AD = Math.floor(gD * LD),
              UD = Math.floor((gD + 1) * LD),
              fD = (RD * wD + gD) * pD;
            for (let wD = 0; wD < pD; wD++) {
              let LD = 0;
              for (let rD = DD; rD < KD; rD++)
                for (let DD = AD; DD < UD; DD++) LD += sD[(rD * zD + DD) * pD + wD];
              rD[fD + wD] = LD * cD
            }
          }
        }
        if (DD instanceof Float32Array) return rD;
        const gD = new(0, DD.constructor)(KD);
        for (let RD = 0; RD < KD; RD++) gD[RD] = rD[RD] + .5 | 0;
        return gD
      }
      static ConvertCubeMapToSphericalPolynomial(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wD = zD > 0 ? this._NearestPow2Floor(zD) : 0;
        if (wD > 0 && DD.size > wD) {
          const zD = 5 === DD.format ? 4 : 3,
            pD = ["right", "left", "up", "down", "front", "back"],
            sD = {};
          for (const KD of pD) sD[KD] = this._DownsampleFace(DD[KD], DD.size, wD, zD);
          DD = {
            ...DD,
            ...sD,
            size: wD
          }
        }
        const pD = new KD.c;
        let cD = 0;
        const gD = 2 / DD.size,
          RD = gD,
          AD = .5 * gD,
          UD = AD - 1;
        for (let KD = 0; KD < 6; KD++) {
          const zD = this._FileFaces[KD],
            wD = DD[zD.name];
          let fD = UD;
          const ID = 5 === DD.format ? 4 : 3;
          for (let KD = 0; KD < DD.size; KD++) {
            let BD = UD;
            for (let RD = 0; RD < DD.size; RD++) {
              const UD = zD.worldAxisForFileX.scale(BD).add(zD.worldAxisForFileY.scale(fD)).add(zD.worldAxisForNormal);
              UD.normalize();
              const GD = this._AreaElement(BD - AD, fD - AD) - this._AreaElement(BD - AD, fD + AD) - this._AreaElement(BD + AD, fD - AD) + this._AreaElement(BD + AD, fD + AD);
              let hD = wD[KD * DD.size * ID + RD * ID + 0],
                nD = wD[KD * DD.size * ID + RD * ID + 1],
                MD = wD[KD * DD.size * ID + RD * ID + 2];
              isNaN(hD) && (hD = 0), isNaN(nD) && (nD = 0), isNaN(MD) && (MD = 0), 0 === DD.type && (hD /= 255, nD /= 255, MD /= 255), DD.gammaSpace && (hD = Math.pow((0, sD.Clamp)(hD), rD.g), nD = Math.pow((0, sD.Clamp)(nD), rD.g), MD = Math.pow((0, sD.Clamp)(MD), rD.g));
              const OD = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const DD = Math.max(hD, nD, MD);
                if (DD > OD) {
                  const zD = OD / DD;
                  hD *= zD, nD *= zD, MD *= zD
                }
              } else hD = (0, sD.Clamp)(hD, 0, OD), nD = (0, sD.Clamp)(nD, 0, OD), MD = (0, sD.Clamp)(MD, 0, OD);
              const JD = new LD.d(hD, nD, MD);
              pD.addLight(UD, JD, GD), cD += GD, BD += gD
            }
            fD += RD
          }
        }
        const fD = 6 * (4 * Math.PI) / 6 / cD;
        return pD.scaleInPlace(fD), pD.convertIncidentRadianceToIrradiance(), pD.convertIrradianceToLambertianRadiance(), KD.e.FromHarmonics(pD)
      }
    }
    gD._FileFaces = [new cD("right", new pD.s(1, 0, 0), new pD.s(0, 0, -1), new pD.s(0, -1, 0)), new cD("left", new pD.s(-1, 0, 0), new pD.s(0, 0, 1), new pD.s(0, -1, 0)), new cD("up", new pD.s(0, 1, 0), new pD.s(1, 0, 0), new pD.s(0, 0, 1)), new cD("down", new pD.s(0, -1, 0), new pD.s(1, 0, 0), new pD.s(0, 0, -1)), new cD("front", new pD.s(0, 0, 1), new pD.s(1, 0, 0), new pD.s(0, -1, 0)), new cD("back", new pD.s(0, 0, -1), new pD.s(-1, 0, 0), new pD.s(0, -1, 0))], gD.MAX_HDRI_VALUE = 4096, gD.PRESERVE_CLAMPED_COLORS = !1
  },
  41713: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD
    });
    var pD = wD(41709),
      sD = wD(41722);
    class KD {
      static ExpandRGBDTexture(DD) {
        const zD = DD._texture;
        if (!zD || !DD.isRGBD) return;
        const sD = zD.iI(),
          KD = sD.getCaps(),
          rD = zD.isReady;
        let LD = !1;
        KD.textureHalfFloatRender && KD.textureHalfFloatLinearFiltering ? (LD = !0, zD.type = 2) : KD.textureFloatRender && KD.textureFloatLinearFiltering && (LD = !0, zD.type = 1), LD && (zD.isReady = !1, zD._isRGBD = !1, zD.invertY = !1);
        const cD = async () => {
          const KD = sD.isWebGPU,
            rD = KD ? 1 : 0;
          zD.isReady = !1, KD ? await wD.e(342).then((() => wD(61148))) : await wD.e(324).then((() => wD(61150)));
          const LD = new pD.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, sD, !1, void 0, zD.type, void 0, null, !1, void 0, rD);
          LD.externalTextureSamplerBinding = !0;
          const cD = sD.createRenderTargetTexture(zD.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: zD.samplingMode,
            type: zD.type,
            format: 5
          });
          LD.onEffectCreatedObservable.addOnce((wD => {
            wD.executeWhenCompiled((() => {
              LD.onApply = DD => {
                DD._bindTexture("textureSampler", zD), DD.setFloat2("scale", 1, 1)
              }, DD.Ul()?.postProcessManager.directRender([LD], cD, !0), sD.restoreDefaultFramebuffer(), sD._releaseTexture(zD), LD && LD.dispose(), cD._swapAndDie(zD), zD.isReady = !0
            }))
          }))
        };
        LD && (rD ? cD() : DD.onLoadObservable.addOnce(cD))
      }
      static async EncodeTextureToRGBD(DD, zD) {
        let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return zD.iI().isWebGPU ? await wD.e(343).then((() => wD(61169))) : await wD.e(325).then((() => wD(61162))), await (0, sD.d)("rgbdEncode", DD, zD, pD, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);