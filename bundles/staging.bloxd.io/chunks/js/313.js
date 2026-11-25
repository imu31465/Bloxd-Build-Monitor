export const id = 313;
export const ids = [313];
export const modules = {
  42066: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      _ENVTextureLoader: () => du
    });
    var su = ju(40192),
      Uu = ju(37494),
      Zu = ju(37519),
      Xu = ju(40245),
      lu = ju(40108),
      qu = ju(40253),
      fu = (ju(40350), ju(42068)),
      Cu = ju(39032),
      bu = (ju(42077), ju(42102), ju(40319));
    const cu = "image/png",
      Nu = [134, 22, 135, 150, 246, 214, 150, 54];

    function Ou(uu) {
      const Eu = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      let ju = 0;
      for (let Xu = 0; Xu < Nu.length; Xu++)
        if (Eu.getUint8(ju++) !== Nu[Xu]) return Cu.b.Error("Not a babylon environment map"), null;
      let su, Uu = "";
      for (; su = Eu.getUint8(ju++);) Uu += String.fromCharCode(su);
      let Zu = JSON.parse(Uu);
      return Zu = Yu(Zu), Zu.binaryDataPosition = ju, Zu.specular && (Zu.specular.lodGenerationScale = Zu.specular.lodGenerationScale || .8), Zu
    }

    function Yu(uu) {
      if (uu.version > 2) throw new Error(`Unsupported babylon environment map version "${uu.version}". Latest supported version is "2".`);
      return 2 === uu.version ? uu : uu = {
        ...uu,
        version: 2,
        imageType: cu
      }
    }

    function hu(uu, Eu) {
      const ju = (Eu = Yu(Eu)).specular;
      let su = Math.log2(Eu.width);
      if (su = Math.round(su) + 1, ju.mipmaps.length !== 6 * su) throw new Error(`Unsupported specular mipmaps number "${ju.mipmaps.length}"`);
      const Uu = new Array(su);
      for (let Zu = 0; Zu < su; Zu++) {
        Uu[Zu] = new Array(6);
        for (let su = 0; su < 6; su++) {
          const Xu = ju.mipmaps[6 * Zu + su];
          Uu[Zu][su] = new Uint8Array(uu.buffer, uu.byteOffset + Eu.binaryDataPosition + Xu.position, Xu.length)
        }
      }
      return Uu
    }

    function Du(uu, Eu) {
      Eu = Yu(Eu);
      const ju = new Array(6),
        su = Eu.irradiance?.irradianceTexture;
      if (su) {
        if (6 !== su.faces.length) throw new Error(`Incorrect irradiance texture faces number "${su.faces.length}"`);
        for (let Uu = 0; Uu < 6; Uu++) {
          const Zu = su.faces[Uu];
          ju[Uu] = new Uint8Array(uu.buffer, uu.byteOffset + Eu.binaryDataPosition + Zu.position, Zu.length)
        }
      }
      return ju
    }

    function gu(uu, Eu, ju) {
      const su = (ju = Yu(ju)).specular;
      if (!su) return Promise.resolve([]);
      uu._lodGenerationScale = su.lodGenerationScale;
      const Zu = [],
        Xu = hu(Eu, ju);
      Zu.push(eu(uu, Xu, ju.imageType));
      const lu = ju.irradiance?.irradianceTexture;
      if (lu) {
        const su = Du(Eu, ju);
        let Xu = null;
        ju.irradiance?.irradianceTexture?.dominantDirection && (Xu = Uu.t.FromArray(ju.irradiance.irradianceTexture.dominantDirection)), Zu.push(Gu(uu, su, lu.size, ju.imageType, Xu))
      }
      return Promise.all(Zu)
    }
    async function Mu(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu) {
      return await new Promise(((bu, cu) => {
        if (ju) {
          const ju = Eu.createTexture(null, !0, !0, null, 1, null, (uu => {
            cu(uu)
          }), uu);
          su?.onEffectCreatedObservable.addOnce((lu => {
            lu.executeWhenCompiled((() => {
              su.externalTextureSamplerBinding = !0, su.onApply = su => {
                su._bindTexture("textureSampler", ju), su.setFloat2("scale", 1, Eu._features.needsInvertingBitmap && uu instanceof ImageBitmap ? -1 : 1)
              }, Eu.scenes.length && (Eu.scenes[0].postProcessManager.directRender([su], fu, !0, Zu, Xu), Eu.restoreDefaultFramebuffer(), ju.dispose(), URL.revokeObjectURL(Uu), bu())
            }))
          }))
        } else {
          if (Eu._uploadImageToTexture(Cu, uu, Zu, Xu), lu) {
            const ju = qu[Xu];
            ju && Eu._uploadImageToTexture(ju._texture, uu, Zu, 0)
          }
          bu()
        }
      }))
    }
    async function eu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cu;
      const su = uu.wO();
      uu.format = 5, uu.type = 0, uu.generateMipMaps = !0, uu._cachedAnisotropicFilteringLevel = null, su.updateTextureSamplingMode(3, uu), await pu(uu, Eu, !0, ju), uu.isReady = !0
    }
    async function Gu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cu,
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Zu = uu.wO(),
        Xu = new lu.c(Zu, 5),
        fu = new qu.c(Zu, Xu);
      uu._irradianceTexture = fu, fu._dominantDirection = Uu, Xu.isCube = !0, Xu.format = 5, Xu.type = 0, Xu.generateMipMaps = !0, Xu._cachedAnisotropicFilteringLevel = null, Xu.generateMipMaps = !0, Xu.width = ju, Xu.height = ju, Zu.updateTextureSamplingMode(3, Xu), await pu(Xu, [Eu], !1, su), Zu.generateMipMapsForCubemap(Xu), Xu.isReady = !0
    }
    async function pu(uu, Eu, Uu) {
      let Xu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cu;
      if (!(0, su.k)(uu.width)) throw new Error("Texture size must be a power of two");
      const Cu = (0, Zu.ILog2)(uu.width) + 1,
        Nu = uu.wO();
      let Ou = !1,
        Yu = !1,
        hu = null,
        Du = null,
        gu = null;
      const eu = Nu.getCaps();
      eu.textureLOD ? Nu._features.supportRenderAndCopyToLodForFloatTextures ? eu.textureHalfFloatRender && eu.textureHalfFloatLinearFiltering ? (Ou = !0, uu.type = 2) : eu.textureFloatRender && eu.textureFloatLinearFiltering && (Ou = !0, uu.type = 1) : Ou = !1 : (Ou = !1, Yu = Uu);
      let Gu = 0;
      if (Ou) Nu.isWebGPU ? (Gu = 1, await ju.e(347).then((() => ju(61615)))) : await ju.e(329).then((() => ju(61624))), hu = new fu.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Nu, !1, void 0, uu.type, void 0, null, !1, void 0, Gu), uu._isRGBD = !1, uu.invertY = !1, Du = Nu.createRenderTargetCubeTexture(uu.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: uu.type,
        format: 5
      });
      else if (uu._isRGBD = !0, uu.invertY = !0, Yu) {
        const Eu = 3;
        gu = {};
        const ju = uu._lodGenerationScale,
          su = uu._lodGenerationOffset;
        for (let Uu = 0; Uu < Eu; Uu++) {
          const Zu = (Cu - 1) * ju + su,
            Xu = su + (Zu - su) * (1 - Uu / (Eu - 1)),
            fu = Math.round(Math.min(Math.max(Xu, 0), Zu)),
            bu = new lu.c(Nu, 2);
          bu.isCube = !0, bu.invertY = !0, bu.generateMipMaps = !1, Nu.updateTextureSamplingMode(2, bu);
          const cu = new qu.c(null);
          switch (cu._isCube = !0, cu._texture = bu, gu[fu] = cu, Uu) {
            case 0:
              uu._lodTextureLow = cu;
              break;
            case 1:
              uu._lodTextureMid = cu;
              break;
            case 2:
              uu._lodTextureHigh = cu
          }
        }
      }
      const pu = [];
      for (let ju = 0; ju < Eu.length; ju++)
        for (let su = 0; su < 6; su++) {
          const Uu = Eu[ju][su],
            Zu = (0, bu.l)(Uu),
            lu = new Blob([Zu], {
              type: Xu
            }),
            qu = URL.createObjectURL(lu);
          let fu;
          if (Nu._features.forceBitmapOverHTMLImageElement) fu = Nu.createImageBitmap(lu, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async Eu => await Mu(Eu, Nu, Ou, hu, qu, su, ju, Yu, gu, Du, uu)));
          else {
            const Eu = new Image;
            Eu.src = qu, fu = new Promise(((Uu, Zu) => {
              Eu.onload = () => {
                Mu(Eu, Nu, Ou, hu, qu, su, ju, Yu, gu, Du, uu).then((() => Uu())).catch((uu => {
                  Zu(uu)
                }))
              }, Eu.onerror = uu => {
                Zu(uu)
              }
            }))
          }
          pu.push(fu)
        }
      if (await Promise.all(pu), Eu.length < Cu) {
        let ju;
        const su = Math.pow(2, Cu - 1 - Eu.length),
          Uu = su * su * 4;
        switch (uu.type) {
          case 0:
            ju = new Uint8Array(Uu);
            break;
          case 2:
            ju = new Uint16Array(Uu);
            break;
          case 1:
            ju = new Float32Array(Uu)
        }
        for (let Zu = Eu.length; Zu < Cu; Zu++)
          for (let Eu = 0; Eu < 6; Eu++) Nu._uploadArrayBufferViewToTexture(Du?.texture || uu, ju, Eu, Zu)
      }
      if (Du) {
        const Eu = uu._irradianceTexture;
        uu._irradianceTexture = null, Nu._releaseTexture(uu), Du._swapAndDie(uu), uu._irradianceTexture = Eu
      }
      hu && hu.dispose(), Yu && (uu._lodTextureHigh && uu._lodTextureHigh._texture && (uu._lodTextureHigh._texture.isReady = !0), uu._lodTextureMid && uu._lodTextureMid._texture && (uu._lodTextureMid._texture.isReady = !0), uu._lodTextureLow && uu._lodTextureLow._texture && (uu._lodTextureLow._texture.isReady = !0))
    }

    function wu(uu, Eu) {
      const ju = (Eu = Yu(Eu)).irradiance;
      if (!ju) return;
      const su = new Xu.e;
      Uu.t.FromArrayToRef(ju.x, 0, su.x), Uu.t.FromArrayToRef(ju.y, 0, su.y), Uu.t.FromArrayToRef(ju.z, 0, su.z), Uu.t.FromArrayToRef(ju.xx, 0, su.xx), Uu.t.FromArrayToRef(ju.yy, 0, su.yy), Uu.t.FromArrayToRef(ju.zz, 0, su.zz), Uu.t.FromArrayToRef(ju.yz, 0, su.yz), Uu.t.FromArrayToRef(ju.zx, 0, su.zx), Uu.t.FromArrayToRef(ju.xy, 0, su.xy), uu._sphericalPolynomial = su
    }
    var Ju = ju(42109);
    class du {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(uu, Eu, ju, su, Uu) {
        if (Array.isArray(uu)) return;
        const Zu = Ou(uu);
        if (Zu) {
          Eu.width = Zu.width, Eu.height = Zu.width;
          try {
            (0, Ju.c)(), wu(Eu, Zu), gu(Eu, uu, Zu).then((() => {
              Eu.isReady = !0, Eu.onLoadedObservable.notifyObservers(Eu), Eu.onLoadedObservable.clear(), su && su()
            }), (uu => {
              Uu?.("Can not upload environment levels", uu)
            }))
          } catch (Xu) {
            Uu?.("Can not upload environment file", Xu)
          }
        } else Uu && Uu("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  42109: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(42037),
      Uu = ju(40253);
    let Zu = !1;

    function Xu() {
      Zu || (Zu = !0, Uu.c.prototype._sphericalPolynomialTargetSize = 0, Uu.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Uu.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = su.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((uu => {
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
  42037: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => fu
    });
    var su = ju(37494),
      Uu = ju(37519),
      Zu = ju(40245),
      Xu = ju(37496),
      lu = ju(37680);
    class qu {
      constructor(uu, Eu, ju, su) {
        this.name = uu, this.worldAxisForNormal = Eu, this.worldAxisForFileX = ju, this.worldAxisForFileY = su
      }
    }
    class fu {
      static _NearestPow2Floor(uu) {
        return uu <= 1 ? 1 : 1 << Math.floor(Math.log2(uu))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(uu) {
        if (!uu.isCube) return null;
        uu.hV()?.wO().flushFramebuffer();
        const Eu = uu.getSize().width,
          ju = uu._sphericalPolynomialTargetSize,
          su = ju > 0 ? this._NearestPow2Floor(ju) : 0,
          Uu = !uu.noMipmap && !0 === uu._texture?.generateMipMaps,
          Zu = su > 0 && su < Eu && Uu,
          Xu = Zu ? Math.max(0, Math.round(Math.log2(Eu / su))) : 0,
          lu = Zu ? Math.max(1, Math.floor(Eu / Math.pow(2, Xu))) : Eu,
          qu = uu.readPixels(0, Xu, void 0, !1),
          fu = uu.readPixels(1, Xu, void 0, !1);
        let Cu, bu;
        uu.isRenderTarget ? (Cu = uu.readPixels(3, Xu, void 0, !1), bu = uu.readPixels(2, Xu, void 0, !1)) : (Cu = uu.readPixels(2, Xu, void 0, !1), bu = uu.readPixels(3, Xu, void 0, !1));
        const cu = uu.readPixels(4, Xu, void 0, !1),
          Nu = uu.readPixels(5, Xu, void 0, !1),
          Ou = uu.gammaSpace,
          Yu = su > 0 && su < Eu && !Zu;
        return new Promise((uu => {
          Promise.all([fu, qu, Cu, bu, cu, Nu]).then((ju => {
            let [Uu, Zu, Xu, qu, fu, Cu] = ju, bu = lu;
            if (Yu) {
              const uu = 4;
              Uu = this._DownsampleFace(Uu, Eu, su, uu), Zu = this._DownsampleFace(Zu, Eu, su, uu), Xu = this._DownsampleFace(Xu, Eu, su, uu), qu = this._DownsampleFace(qu, Eu, su, uu), fu = this._DownsampleFace(fu, Eu, su, uu), Cu = this._DownsampleFace(Cu, Eu, su, uu), bu = su
            }
            const cu = {
              size: bu,
              right: Zu,
              left: Uu,
              up: Xu,
              down: qu,
              front: fu,
              back: Cu,
              format: 5,
              type: Uu instanceof Float32Array ? 1 : 0,
              gammaSpace: Ou
            };
            uu(this.ConvertCubeMapToSphericalPolynomial(cu))
          }))
        }))
      }
      static _AreaElement(uu, Eu) {
        return Math.atan2(uu * Eu, Math.sqrt(uu * uu + Eu * Eu + 1))
      }
      static _DownsampleFace(uu, Eu, ju, su) {
        const Uu = uu instanceof Float32Array ? uu : Float32Array.from(uu),
          Zu = ju * ju * su,
          Xu = new Float32Array(Zu),
          lu = Eu / ju,
          qu = 1 / (lu * lu);
        for (let Cu = 0; Cu < ju; Cu++) {
          const uu = Math.floor(Cu * lu),
            Zu = Math.floor((Cu + 1) * lu);
          for (let fu = 0; fu < ju; fu++) {
            const bu = Math.floor(fu * lu),
              cu = Math.floor((fu + 1) * lu),
              Nu = (Cu * ju + fu) * su;
            for (let ju = 0; ju < su; ju++) {
              let lu = 0;
              for (let Xu = uu; Xu < Zu; Xu++)
                for (let uu = bu; uu < cu; uu++) lu += Uu[(Xu * Eu + uu) * su + ju];
              Xu[Nu + ju] = lu * qu
            }
          }
        }
        if (uu instanceof Float32Array) return Xu;
        const fu = new(0, uu.constructor)(Zu);
        for (let Cu = 0; Cu < Zu; Cu++) fu[Cu] = Xu[Cu] + .5 | 0;
        return fu
      }
      static ConvertCubeMapToSphericalPolynomial(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ju = Eu > 0 ? this._NearestPow2Floor(Eu) : 0;
        if (ju > 0 && uu.size > ju) {
          const Eu = 5 === uu.format ? 4 : 3,
            su = ["right", "left", "up", "down", "front", "back"],
            Uu = {};
          for (const Zu of su) Uu[Zu] = this._DownsampleFace(uu[Zu], uu.size, ju, Eu);
          uu = {
            ...uu,
            ...Uu,
            size: ju
          }
        }
        const su = new Zu.b;
        let qu = 0;
        const fu = 2 / uu.size,
          Cu = fu,
          bu = .5 * fu,
          cu = bu - 1;
        for (let Zu = 0; Zu < 6; Zu++) {
          const Eu = this._FileFaces[Zu],
            ju = uu[Eu.name];
          let Nu = cu;
          const Ou = 5 === uu.format ? 4 : 3;
          for (let Zu = 0; Zu < uu.size; Zu++) {
            let Yu = cu;
            for (let Cu = 0; Cu < uu.size; Cu++) {
              const cu = Eu.worldAxisForFileX.scale(Yu).add(Eu.worldAxisForFileY.scale(Nu)).add(Eu.worldAxisForNormal);
              cu.normalize();
              const hu = this._AreaElement(Yu - bu, Nu - bu) - this._AreaElement(Yu - bu, Nu + bu) - this._AreaElement(Yu + bu, Nu - bu) + this._AreaElement(Yu + bu, Nu + bu);
              let Du = ju[Zu * uu.size * Ou + Cu * Ou + 0],
                gu = ju[Zu * uu.size * Ou + Cu * Ou + 1],
                Mu = ju[Zu * uu.size * Ou + Cu * Ou + 2];
              isNaN(Du) && (Du = 0), isNaN(gu) && (gu = 0), isNaN(Mu) && (Mu = 0), 0 === uu.type && (Du /= 255, gu /= 255, Mu /= 255), uu.gammaSpace && (Du = Math.pow((0, Uu.Clamp)(Du), Xu.i), gu = Math.pow((0, Uu.Clamp)(gu), Xu.i), Mu = Math.pow((0, Uu.Clamp)(Mu), Xu.i));
              const eu = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const uu = Math.max(Du, gu, Mu);
                if (uu > eu) {
                  const Eu = eu / uu;
                  Du *= Eu, gu *= Eu, Mu *= Eu
                }
              } else Du = (0, Uu.Clamp)(Du, 0, eu), gu = (0, Uu.Clamp)(gu, 0, eu), Mu = (0, Uu.Clamp)(Mu, 0, eu);
              const Gu = new lu.c(Du, gu, Mu);
              su.addLight(cu, Gu, hu), qu += hu, Yu += fu
            }
            Nu += Cu
          }
        }
        const Nu = 6 * (4 * Math.PI) / 6 / qu;
        return su.scaleInPlace(Nu), su.convertIncidentRadianceToIrradiance(), su.convertIrradianceToLambertianRadiance(), Zu.e.FromHarmonics(su)
      }
    }
    fu._FileFaces = [new qu("right", new su.t(1, 0, 0), new su.t(0, 0, -1), new su.t(0, -1, 0)), new qu("left", new su.t(-1, 0, 0), new su.t(0, 0, 1), new su.t(0, -1, 0)), new qu("up", new su.t(0, 1, 0), new su.t(1, 0, 0), new su.t(0, 0, 1)), new qu("down", new su.t(0, -1, 0), new su.t(1, 0, 0), new su.t(0, 0, -1)), new qu("front", new su.t(0, 0, 1), new su.t(1, 0, 0), new su.t(0, -1, 0)), new qu("back", new su.t(0, 0, -1), new su.t(-1, 0, 0), new su.t(0, -1, 0))], fu.MAX_HDRI_VALUE = 4096, fu.PRESERVE_CLAMPED_COLORS = !1
  },
  42077: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu
    });
    var su = ju(42068),
      Uu = ju(42082);
    class Zu {
      static ExpandRGBDTexture(uu) {
        const Eu = uu._texture;
        if (!Eu || !uu.isRGBD) return;
        const Uu = Eu.wO(),
          Zu = Uu.getCaps(),
          Xu = Eu.isReady;
        let lu = !1;
        Zu.textureHalfFloatRender && Zu.textureHalfFloatLinearFiltering ? (lu = !0, Eu.type = 2) : Zu.textureFloatRender && Zu.textureFloatLinearFiltering && (lu = !0, Eu.type = 1), lu && (Eu.isReady = !1, Eu._isRGBD = !1, Eu.invertY = !1);
        const qu = async () => {
          const Zu = Uu.isWebGPU,
            Xu = Zu ? 1 : 0;
          Eu.isReady = !1, Zu ? await ju.e(347).then((() => ju(61615))) : await ju.e(329).then((() => ju(61624)));
          const lu = new su.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Uu, !1, void 0, Eu.type, void 0, null, !1, void 0, Xu);
          lu.externalTextureSamplerBinding = !0;
          const qu = Uu.createRenderTargetTexture(Eu.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Eu.samplingMode,
            type: Eu.type,
            format: 5
          });
          lu.onEffectCreatedObservable.addOnce((ju => {
            ju.executeWhenCompiled((() => {
              lu.onApply = uu => {
                uu._bindTexture("textureSampler", Eu), uu.setFloat2("scale", 1, 1)
              }, uu.hV()?.postProcessManager.directRender([lu], qu, !0), Uu.restoreDefaultFramebuffer(), Uu._releaseTexture(Eu), lu && lu.dispose(), qu._swapAndDie(Eu), Eu.isReady = !0
            }))
          }))
        };
        lu && (Xu ? qu() : uu.onLoadObservable.addOnce(qu))
      }
      static async EncodeTextureToRGBD(uu, Eu) {
        let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Eu.wO().isWebGPU ? await ju.e(348).then((() => ju(61641))) : await ju.e(330).then((() => ju(61634))), await (0, Uu.c)("rgbdEncode", uu, Eu, su, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);