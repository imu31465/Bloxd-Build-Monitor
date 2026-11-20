export const id = 298;
export const ids = [298];
export const modules = {
  41366: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      _ENVTextureLoader: () => Au
    });
    var Eu = yu(39496),
      Ku = yu(36830),
      Qu = yu(36865),
      mu = yu(39547),
      Ju = yu(39385),
      Nu = yu(39555),
      Xu = (yu(39647), yu(41369)),
      Vu = yu(38448),
      ru = (yu(41378), yu(41401), yu(39625));
    const Bu = "image/png",
      xu = [134, 22, 135, 150, 246, 214, 150, 54];

    function Su(uu) {
      const Ru = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      let yu = 0;
      for (let mu = 0; mu < xu.length; mu++)
        if (Ru.getUint8(yu++) !== xu[mu]) return Vu.e.Error("Not a babylon environment map"), null;
      let Eu, Ku = "";
      for (; Eu = Ru.getUint8(yu++);) Ku += String.fromCharCode(Eu);
      let Qu = JSON.parse(Ku);
      return Qu = pu(Qu), Qu.binaryDataPosition = yu, Qu.specular && (Qu.specular.lodGenerationScale = Qu.specular.lodGenerationScale || .8), Qu
    }

    function pu(uu) {
      if (uu.version > 2) throw new Error(`Unsupported babylon environment map version "${uu.version}". Latest supported version is "2".`);
      return 2 === uu.version ? uu : uu = {
        ...uu,
        version: 2,
        imageType: Bu
      }
    }

    function Tu(uu, Ru) {
      const yu = (Ru = pu(Ru)).specular;
      let Eu = Math.log2(Ru.width);
      if (Eu = Math.round(Eu) + 1, yu.mipmaps.length !== 6 * Eu) throw new Error(`Unsupported specular mipmaps number "${yu.mipmaps.length}"`);
      const Ku = new Array(Eu);
      for (let Qu = 0; Qu < Eu; Qu++) {
        Ku[Qu] = new Array(6);
        for (let Eu = 0; Eu < 6; Eu++) {
          const mu = yu.mipmaps[6 * Qu + Eu];
          Ku[Qu][Eu] = new Uint8Array(uu.buffer, uu.byteOffset + Ru.binaryDataPosition + mu.position, mu.length)
        }
      }
      return Ku
    }

    function Wu(uu, Ru) {
      Ru = pu(Ru);
      const yu = new Array(6),
        Eu = Ru.irradiance?.irradianceTexture;
      if (Eu) {
        if (6 !== Eu.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Eu.faces.length}"`);
        for (let Ku = 0; Ku < 6; Ku++) {
          const Qu = Eu.faces[Ku];
          yu[Ku] = new Uint8Array(uu.buffer, uu.byteOffset + Ru.binaryDataPosition + Qu.position, Qu.length)
        }
      }
      return yu
    }

    function ju(uu, Ru, yu) {
      const Eu = (yu = pu(yu)).specular;
      if (!Eu) return Promise.resolve([]);
      uu._lodGenerationScale = Eu.lodGenerationScale;
      const Qu = [],
        mu = Tu(Ru, yu);
      Qu.push(du(uu, mu, yu.imageType));
      const Ju = yu.irradiance?.irradianceTexture;
      if (Ju) {
        const Eu = Wu(Ru, yu);
        let mu = null;
        yu.irradiance?.irradianceTexture?.dominantDirection && (mu = Ku.p.FromArray(yu.irradiance.irradianceTexture.dominantDirection)), Qu.push(bu(uu, Eu, Ju.size, yu.imageType, mu))
      }
      return Promise.all(Qu)
    }
    async function Hu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu) {
      return await new Promise(((ru, Bu) => {
        if (yu) {
          const yu = Ru.createTexture(null, !0, !0, null, 1, null, (uu => {
            Bu(uu)
          }), uu);
          Eu?.onEffectCreatedObservable.addOnce((Ju => {
            Ju.executeWhenCompiled((() => {
              Eu.externalTextureSamplerBinding = !0, Eu.onApply = Eu => {
                Eu._bindTexture("textureSampler", yu), Eu.setFloat2("scale", 1, Ru._features.needsInvertingBitmap && uu instanceof ImageBitmap ? -1 : 1)
              }, Ru.scenes.length && (Ru.scenes[0].postProcessManager.directRender([Eu], Xu, !0, Qu, mu), Ru.restoreDefaultFramebuffer(), yu.dispose(), URL.revokeObjectURL(Ku), ru())
            }))
          }))
        } else {
          if (Ru._uploadImageToTexture(Vu, uu, Qu, mu), Ju) {
            const yu = Nu[mu];
            yu && Ru._uploadImageToTexture(yu._texture, uu, Qu, 0)
          }
          ru()
        }
      }))
    }
    async function du(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bu;
      const Eu = uu.eS();
      uu.format = 5, uu.type = 0, uu.generateMipMaps = !0, uu._cachedAnisotropicFilteringLevel = null, Eu.updateTextureSamplingMode(3, uu), await Cu(uu, Ru, !0, yu), uu.isReady = !0
    }
    async function bu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bu,
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Qu = uu.eS(),
        mu = new Ju.c(Qu, 5),
        Xu = new Nu.e(Qu, mu);
      uu._irradianceTexture = Xu, Xu._dominantDirection = Ku, mu.isCube = !0, mu.format = 5, mu.type = 0, mu.generateMipMaps = !0, mu._cachedAnisotropicFilteringLevel = null, mu.generateMipMaps = !0, mu.width = yu, mu.height = yu, Qu.updateTextureSamplingMode(3, mu), await Cu(mu, [Ru], !1, Eu), Qu.generateMipMapsForCubemap(mu), mu.isReady = !0
    }
    async function Cu(uu, Ru, Ku) {
      let mu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bu;
      if (!(0, Eu.h)(uu.width)) throw new Error("Texture size must be a power of two");
      const Vu = (0, Qu.ILog2)(uu.width) + 1,
        xu = uu.eS();
      let Su = !1,
        pu = !1,
        Tu = null,
        Wu = null,
        ju = null;
      const du = xu.getCaps();
      du.textureLOD ? xu._features.supportRenderAndCopyToLodForFloatTextures ? du.textureHalfFloatRender && du.textureHalfFloatLinearFiltering ? (Su = !0, uu.type = 2) : du.textureFloatRender && du.textureFloatLinearFiltering && (Su = !0, uu.type = 1) : Su = !1 : (Su = !1, pu = Ku);
      let bu = 0;
      if (Su) xu.isWebGPU ? (bu = 1, await yu.e(332).then((() => yu(61242)))) : await yu.e(314).then((() => yu(61244))), Tu = new Xu.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, xu, !1, void 0, uu.type, void 0, null, !1, void 0, bu), uu._isRGBD = !1, uu.invertY = !1, Wu = xu.createRenderTargetCubeTexture(uu.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: uu.type,
        format: 5
      });
      else if (uu._isRGBD = !0, uu.invertY = !0, pu) {
        const Ru = 3;
        ju = {};
        const yu = uu._lodGenerationScale,
          Eu = uu._lodGenerationOffset;
        for (let Ku = 0; Ku < Ru; Ku++) {
          const Qu = (Vu - 1) * yu + Eu,
            mu = Eu + (Qu - Eu) * (1 - Ku / (Ru - 1)),
            Xu = Math.round(Math.min(Math.max(mu, 0), Qu)),
            ru = new Ju.c(xu, 2);
          ru.isCube = !0, ru.invertY = !0, ru.generateMipMaps = !1, xu.updateTextureSamplingMode(2, ru);
          const Bu = new Nu.e(null);
          switch (Bu._isCube = !0, Bu._texture = ru, ju[Xu] = Bu, Ku) {
            case 0:
              uu._lodTextureLow = Bu;
              break;
            case 1:
              uu._lodTextureMid = Bu;
              break;
            case 2:
              uu._lodTextureHigh = Bu
          }
        }
      }
      const Cu = [];
      for (let yu = 0; yu < Ru.length; yu++)
        for (let Eu = 0; Eu < 6; Eu++) {
          const Ku = Ru[yu][Eu],
            Qu = (0, ru.l)(Ku),
            Ju = new Blob([Qu], {
              type: mu
            }),
            Nu = URL.createObjectURL(Ju);
          let Xu;
          if (xu._features.forceBitmapOverHTMLImageElement) Xu = xu.createImageBitmap(Ju, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async Ru => await Hu(Ru, xu, Su, Tu, Nu, Eu, yu, pu, ju, Wu, uu)));
          else {
            const Ru = new Image;
            Ru.src = Nu, Xu = new Promise(((Ku, Qu) => {
              Ru.onload = () => {
                Hu(Ru, xu, Su, Tu, Nu, Eu, yu, pu, ju, Wu, uu).then((() => Ku())).catch((uu => {
                  Qu(uu)
                }))
              }, Ru.onerror = uu => {
                Qu(uu)
              }
            }))
          }
          Cu.push(Xu)
        }
      if (await Promise.all(Cu), Ru.length < Vu) {
        let yu;
        const Eu = Math.pow(2, Vu - 1 - Ru.length),
          Ku = Eu * Eu * 4;
        switch (uu.type) {
          case 0:
            yu = new Uint8Array(Ku);
            break;
          case 2:
            yu = new Uint16Array(Ku);
            break;
          case 1:
            yu = new Float32Array(Ku)
        }
        for (let Qu = Ru.length; Qu < Vu; Qu++)
          for (let Ru = 0; Ru < 6; Ru++) xu._uploadArrayBufferViewToTexture(Wu?.texture || uu, yu, Ru, Qu)
      }
      if (Wu) {
        const Ru = uu._irradianceTexture;
        uu._irradianceTexture = null, xu._releaseTexture(uu), Wu._swapAndDie(uu), uu._irradianceTexture = Ru
      }
      Tu && Tu.dispose(), pu && (uu._lodTextureHigh && uu._lodTextureHigh._texture && (uu._lodTextureHigh._texture.isReady = !0), uu._lodTextureMid && uu._lodTextureMid._texture && (uu._lodTextureMid._texture.isReady = !0), uu._lodTextureLow && uu._lodTextureLow._texture && (uu._lodTextureLow._texture.isReady = !0))
    }

    function ku(uu, Ru) {
      const yu = (Ru = pu(Ru)).irradiance;
      if (!yu) return;
      const Eu = new mu.e;
      Ku.p.FromArrayToRef(yu.x, 0, Eu.x), Ku.p.FromArrayToRef(yu.y, 0, Eu.y), Ku.p.FromArrayToRef(yu.z, 0, Eu.z), Ku.p.FromArrayToRef(yu.xx, 0, Eu.xx), Ku.p.FromArrayToRef(yu.yy, 0, Eu.yy), Ku.p.FromArrayToRef(yu.zz, 0, Eu.zz), Ku.p.FromArrayToRef(yu.yz, 0, Eu.yz), Ku.p.FromArrayToRef(yu.zx, 0, Eu.zx), Ku.p.FromArrayToRef(yu.xy, 0, Eu.xy), uu._sphericalPolynomial = Eu
    }
    var eu = yu(41407);
    class Au {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(uu, Ru, yu, Eu, Ku) {
        if (Array.isArray(uu)) return;
        const Qu = Su(uu);
        if (Qu) {
          Ru.width = Qu.width, Ru.height = Qu.width;
          try {
            (0, eu.e)(), ku(Ru, Qu), ju(Ru, uu, Qu).then((() => {
              Ru.isReady = !0, Ru.onLoadedObservable.notifyObservers(Ru), Ru.onLoadedObservable.clear(), Eu && Eu()
            }), (uu => {
              Ku?.("Can not upload environment levels", uu)
            }))
          } catch (mu) {
            Ku?.("Can not upload environment file", mu)
          }
        } else Ku && Ku("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41407: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(41347),
      Ku = yu(39555);
    let Qu = !1;

    function mu() {
      Qu || (Qu = !0, Ku.e.prototype._sphericalPolynomialTargetSize = 0, Ku.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Ku.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Eu.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((uu => {
              this._texture._sphericalPolynomial = uu, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(uu) {
          this._texture && (this._texture._sphericalPolynomial = uu)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41347: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Xu
    });
    var Eu = yu(36830),
      Ku = yu(36865),
      Qu = yu(39547),
      mu = yu(36833),
      Ju = yu(36991);
    class Nu {
      constructor(uu, Ru, yu, Eu) {
        this.name = uu, this.worldAxisForNormal = Ru, this.worldAxisForFileX = yu, this.worldAxisForFileY = Eu
      }
    }
    class Xu {
      static _NearestPow2Floor(uu) {
        return uu <= 1 ? 1 : 1 << Math.floor(Math.log2(uu))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(uu) {
        if (!uu.isCube) return null;
        uu.lD()?.eS().flushFramebuffer();
        const Ru = uu.getSize().width,
          yu = uu._sphericalPolynomialTargetSize,
          Eu = yu > 0 ? this._NearestPow2Floor(yu) : 0,
          Ku = !uu.noMipmap && !0 === uu._texture?.generateMipMaps,
          Qu = Eu > 0 && Eu < Ru && Ku,
          mu = Qu ? Math.max(0, Math.round(Math.log2(Ru / Eu))) : 0,
          Ju = Qu ? Math.max(1, Math.floor(Ru / Math.pow(2, mu))) : Ru,
          Nu = uu.readPixels(0, mu, void 0, !1),
          Xu = uu.readPixels(1, mu, void 0, !1);
        let Vu, ru;
        uu.isRenderTarget ? (Vu = uu.readPixels(3, mu, void 0, !1), ru = uu.readPixels(2, mu, void 0, !1)) : (Vu = uu.readPixels(2, mu, void 0, !1), ru = uu.readPixels(3, mu, void 0, !1));
        const Bu = uu.readPixels(4, mu, void 0, !1),
          xu = uu.readPixels(5, mu, void 0, !1),
          Su = uu.gammaSpace,
          pu = Eu > 0 && Eu < Ru && !Qu;
        return new Promise((uu => {
          Promise.all([Xu, Nu, Vu, ru, Bu, xu]).then((yu => {
            let [Ku, Qu, mu, Nu, Xu, Vu] = yu, ru = Ju;
            if (pu) {
              const uu = 4;
              Ku = this._DownsampleFace(Ku, Ru, Eu, uu), Qu = this._DownsampleFace(Qu, Ru, Eu, uu), mu = this._DownsampleFace(mu, Ru, Eu, uu), Nu = this._DownsampleFace(Nu, Ru, Eu, uu), Xu = this._DownsampleFace(Xu, Ru, Eu, uu), Vu = this._DownsampleFace(Vu, Ru, Eu, uu), ru = Eu
            }
            const Bu = {
              size: ru,
              right: Qu,
              left: Ku,
              up: mu,
              down: Nu,
              front: Xu,
              back: Vu,
              format: 5,
              type: Ku instanceof Float32Array ? 1 : 0,
              gammaSpace: Su
            };
            uu(this.ConvertCubeMapToSphericalPolynomial(Bu))
          }))
        }))
      }
      static _AreaElement(uu, Ru) {
        return Math.atan2(uu * Ru, Math.sqrt(uu * uu + Ru * Ru + 1))
      }
      static _DownsampleFace(uu, Ru, yu, Eu) {
        const Ku = uu instanceof Float32Array ? uu : Float32Array.from(uu),
          Qu = yu * yu * Eu,
          mu = new Float32Array(Qu),
          Ju = Ru / yu,
          Nu = 1 / (Ju * Ju);
        for (let Vu = 0; Vu < yu; Vu++) {
          const uu = Math.floor(Vu * Ju),
            Qu = Math.floor((Vu + 1) * Ju);
          for (let Xu = 0; Xu < yu; Xu++) {
            const ru = Math.floor(Xu * Ju),
              Bu = Math.floor((Xu + 1) * Ju),
              xu = (Vu * yu + Xu) * Eu;
            for (let yu = 0; yu < Eu; yu++) {
              let Ju = 0;
              for (let mu = uu; mu < Qu; mu++)
                for (let uu = ru; uu < Bu; uu++) Ju += Ku[(mu * Ru + uu) * Eu + yu];
              mu[xu + yu] = Ju * Nu
            }
          }
        }
        if (uu instanceof Float32Array) return mu;
        const Xu = new(0, uu.constructor)(Qu);
        for (let Vu = 0; Vu < Qu; Vu++) Xu[Vu] = mu[Vu] + .5 | 0;
        return Xu
      }
      static ConvertCubeMapToSphericalPolynomial(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const yu = Ru > 0 ? this._NearestPow2Floor(Ru) : 0;
        if (yu > 0 && uu.size > yu) {
          const Ru = 5 === uu.format ? 4 : 3,
            Eu = ["right", "left", "up", "down", "front", "back"],
            Ku = {};
          for (const Qu of Eu) Ku[Qu] = this._DownsampleFace(uu[Qu], uu.size, yu, Ru);
          uu = {
            ...uu,
            ...Ku,
            size: yu
          }
        }
        const Eu = new Qu.b;
        let Nu = 0;
        const Xu = 2 / uu.size,
          Vu = Xu,
          ru = .5 * Xu,
          Bu = ru - 1;
        for (let Qu = 0; Qu < 6; Qu++) {
          const Ru = this._FileFaces[Qu],
            yu = uu[Ru.name];
          let xu = Bu;
          const Su = 5 === uu.format ? 4 : 3;
          for (let Qu = 0; Qu < uu.size; Qu++) {
            let pu = Bu;
            for (let Vu = 0; Vu < uu.size; Vu++) {
              const Bu = Ru.worldAxisForFileX.scale(pu).add(Ru.worldAxisForFileY.scale(xu)).add(Ru.worldAxisForNormal);
              Bu.normalize();
              const Tu = this._AreaElement(pu - ru, xu - ru) - this._AreaElement(pu - ru, xu + ru) - this._AreaElement(pu + ru, xu - ru) + this._AreaElement(pu + ru, xu + ru);
              let Wu = yu[Qu * uu.size * Su + Vu * Su + 0],
                ju = yu[Qu * uu.size * Su + Vu * Su + 1],
                Hu = yu[Qu * uu.size * Su + Vu * Su + 2];
              isNaN(Wu) && (Wu = 0), isNaN(ju) && (ju = 0), isNaN(Hu) && (Hu = 0), 0 === uu.type && (Wu /= 255, ju /= 255, Hu /= 255), uu.gammaSpace && (Wu = Math.pow((0, Ku.Clamp)(Wu), mu.g), ju = Math.pow((0, Ku.Clamp)(ju), mu.g), Hu = Math.pow((0, Ku.Clamp)(Hu), mu.g));
              const du = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const uu = Math.max(Wu, ju, Hu);
                if (uu > du) {
                  const Ru = du / uu;
                  Wu *= Ru, ju *= Ru, Hu *= Ru
                }
              } else Wu = (0, Ku.Clamp)(Wu, 0, du), ju = (0, Ku.Clamp)(ju, 0, du), Hu = (0, Ku.Clamp)(Hu, 0, du);
              const bu = new Ju.d(Wu, ju, Hu);
              Eu.addLight(Bu, bu, Tu), Nu += Tu, pu += Xu
            }
            xu += Vu
          }
        }
        const xu = 6 * (4 * Math.PI) / 6 / Nu;
        return Eu.scaleInPlace(xu), Eu.convertIncidentRadianceToIrradiance(), Eu.convertIrradianceToLambertianRadiance(), Qu.e.FromHarmonics(Eu)
      }
    }
    Xu._FileFaces = [new Nu("right", new Eu.p(1, 0, 0), new Eu.p(0, 0, -1), new Eu.p(0, -1, 0)), new Nu("left", new Eu.p(-1, 0, 0), new Eu.p(0, 0, 1), new Eu.p(0, -1, 0)), new Nu("up", new Eu.p(0, 1, 0), new Eu.p(1, 0, 0), new Eu.p(0, 0, 1)), new Nu("down", new Eu.p(0, -1, 0), new Eu.p(1, 0, 0), new Eu.p(0, 0, -1)), new Nu("front", new Eu.p(0, 0, 1), new Eu.p(1, 0, 0), new Eu.p(0, -1, 0)), new Nu("back", new Eu.p(0, 0, -1), new Eu.p(-1, 0, 0), new Eu.p(0, -1, 0))], Xu.MAX_HDRI_VALUE = 4096, Xu.PRESERVE_CLAMPED_COLORS = !1
  },
  41378: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(41369),
      Ku = yu(41384);
    class Qu {
      static ExpandRGBDTexture(uu) {
        const Ru = uu._texture;
        if (!Ru || !uu.isRGBD) return;
        const Ku = Ru.eS(),
          Qu = Ku.getCaps(),
          mu = Ru.isReady;
        let Ju = !1;
        Qu.textureHalfFloatRender && Qu.textureHalfFloatLinearFiltering ? (Ju = !0, Ru.type = 2) : Qu.textureFloatRender && Qu.textureFloatLinearFiltering && (Ju = !0, Ru.type = 1), Ju && (Ru.isReady = !1, Ru._isRGBD = !1, Ru.invertY = !1);
        const Nu = async () => {
          const Qu = Ku.isWebGPU,
            mu = Qu ? 1 : 0;
          Ru.isReady = !1, Qu ? await yu.e(332).then((() => yu(61242))) : await yu.e(314).then((() => yu(61244)));
          const Ju = new Eu.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Ku, !1, void 0, Ru.type, void 0, null, !1, void 0, mu);
          Ju.externalTextureSamplerBinding = !0;
          const Nu = Ku.createRenderTargetTexture(Ru.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Ru.samplingMode,
            type: Ru.type,
            format: 5
          });
          Ju.onEffectCreatedObservable.addOnce((yu => {
            yu.executeWhenCompiled((() => {
              Ju.onApply = uu => {
                uu._bindTexture("textureSampler", Ru), uu.setFloat2("scale", 1, 1)
              }, uu.lD()?.postProcessManager.directRender([Ju], Nu, !0), Ku.restoreDefaultFramebuffer(), Ku._releaseTexture(Ru), Ju && Ju.dispose(), Nu._swapAndDie(Ru), Ru.isReady = !0
            }))
          }))
        };
        Ju && (mu ? Nu() : uu.onLoadObservable.addOnce(Nu))
      }
      static async EncodeTextureToRGBD(uu, Ru) {
        let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Ru.eS().isWebGPU ? await yu.e(333).then((() => yu(61261))) : await yu.e(315).then((() => yu(61255))), await (0, Ku.c)("rgbdEncode", uu, Ru, Eu, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);