export const id = 298;
export const ids = [298];
export const modules = {
  41207: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      _ENVTextureLoader: () => Sk
    });
    var Rk = Bk(39329),
      tk = Bk(36758),
      ak = Bk(36790),
      Xk = Bk(39384),
      bk = Bk(39248),
      wk = Bk(39392),
      dk = (Bk(39489), Bk(41215)),
      sk = Bk(38320),
      Vk = (Bk(41222), Bk(41248), Bk(39463));
    const Jk = "image/png",
      Ak = [134, 22, 135, 150, 246, 214, 150, 54];

    function ek(kk) {
      const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      let Bk = 0;
      for (let Xk = 0; Xk < Ak.length; Xk++)
        if (Fk.getUint8(Bk++) !== Ak[Xk]) return sk.b.Error("Not a babylon environment map"), null;
      let Rk, tk = "";
      for (; Rk = Fk.getUint8(Bk++);) tk += String.fromCharCode(Rk);
      let ak = JSON.parse(tk);
      return ak = yk(ak), ak.binaryDataPosition = Bk, ak.specular && (ak.specular.lodGenerationScale = ak.specular.lodGenerationScale || .8), ak
    }

    function yk(kk) {
      if (kk.version > 2) throw new Error(`Unsupported babylon environment map version "${kk.version}". Latest supported version is "2".`);
      return 2 === kk.version ? kk : kk = {
        ...kk,
        version: 2,
        imageType: Jk
      }
    }

    function fk(kk, Fk) {
      const Bk = (Fk = yk(Fk)).specular;
      let Rk = Math.log2(Fk.width);
      if (Rk = Math.round(Rk) + 1, Bk.mipmaps.length !== 6 * Rk) throw new Error(`Unsupported specular mipmaps number "${Bk.mipmaps.length}"`);
      const tk = new Array(Rk);
      for (let ak = 0; ak < Rk; ak++) {
        tk[ak] = new Array(6);
        for (let Rk = 0; Rk < 6; Rk++) {
          const Xk = Bk.mipmaps[6 * ak + Rk];
          tk[ak][Rk] = new Uint8Array(kk.buffer, kk.byteOffset + Fk.binaryDataPosition + Xk.position, Xk.length)
        }
      }
      return tk
    }

    function mk(kk, Fk) {
      Fk = yk(Fk);
      const Bk = new Array(6),
        Rk = Fk.irradiance?.irradianceTexture;
      if (Rk) {
        if (6 !== Rk.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Rk.faces.length}"`);
        for (let tk = 0; tk < 6; tk++) {
          const ak = Rk.faces[tk];
          Bk[tk] = new Uint8Array(kk.buffer, kk.byteOffset + Fk.binaryDataPosition + ak.position, ak.length)
        }
      }
      return Bk
    }

    function Wk(kk, Fk, Bk) {
      const Rk = (Bk = yk(Bk)).specular;
      if (!Rk) return Promise.resolve([]);
      kk._lodGenerationScale = Rk.lodGenerationScale;
      const ak = [],
        Xk = fk(Fk, Bk);
      ak.push(ik(kk, Xk, Bk.imageType));
      const bk = Bk.irradiance?.irradianceTexture;
      if (bk) {
        const Rk = mk(Fk, Bk);
        let Xk = null;
        Bk.irradiance?.irradianceTexture?.dominantDirection && (Xk = tk.s.FromArray(Bk.irradiance.irradianceTexture.dominantDirection)), ak.push(Yk(kk, Rk, bk.size, Bk.imageType, Xk))
      }
      return Promise.all(ak)
    }
    async function vk(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk) {
      return await new Promise(((Vk, Jk) => {
        if (Bk) {
          const Bk = Fk.createTexture(null, !0, !0, null, 1, null, (kk => {
            Jk(kk)
          }), kk);
          Rk?.onEffectCreatedObservable.addOnce((bk => {
            bk.executeWhenCompiled((() => {
              Rk.externalTextureSamplerBinding = !0, Rk.onApply = Rk => {
                Rk._bindTexture("textureSampler", Bk), Rk.setFloat2("scale", 1, Fk._features.needsInvertingBitmap && kk instanceof ImageBitmap ? -1 : 1)
              }, Fk.scenes.length && (Fk.scenes[0].postProcessManager.directRender([Rk], dk, !0, ak, Xk), Fk.restoreDefaultFramebuffer(), Bk.dispose(), URL.revokeObjectURL(tk), Vk())
            }))
          }))
        } else {
          if (Fk._uploadImageToTexture(sk, kk, ak, Xk), bk) {
            const Bk = wk[Xk];
            Bk && Fk._uploadImageToTexture(Bk._texture, kk, ak, 0)
          }
          Vk()
        }
      }))
    }
    async function ik(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jk;
      const Rk = kk.ne();
      kk.format = 5, kk.type = 0, kk.generateMipMaps = !0, kk._cachedAnisotropicFilteringLevel = null, Rk.updateTextureSamplingMode(3, kk), await Lk(kk, Fk, !0, Bk), kk.isReady = !0
    }
    async function Yk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Jk,
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const ak = kk.ne(),
        Xk = new bk.c(ak, 5),
        dk = new wk.e(ak, Xk);
      kk._irradianceTexture = dk, dk._dominantDirection = tk, Xk.isCube = !0, Xk.format = 5, Xk.type = 0, Xk.generateMipMaps = !0, Xk._cachedAnisotropicFilteringLevel = null, Xk.generateMipMaps = !0, Xk.width = Bk, Xk.height = Bk, ak.updateTextureSamplingMode(3, Xk), await Lk(Xk, [Fk], !1, Rk), ak.generateMipMapsForCubemap(Xk), Xk.isReady = !0
    }
    async function Lk(kk, Fk, tk) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Jk;
      if (!(0, Rk.h)(kk.width)) throw new Error("Texture size must be a power of two");
      const sk = (0, ak.ILog2)(kk.width) + 1,
        Ak = kk.ne();
      let ek = !1,
        yk = !1,
        fk = null,
        mk = null,
        Wk = null;
      const ik = Ak.getCaps();
      ik.textureLOD ? Ak._features.supportRenderAndCopyToLodForFloatTextures ? ik.textureHalfFloatRender && ik.textureHalfFloatLinearFiltering ? (ek = !0, kk.type = 2) : ik.textureFloatRender && ik.textureFloatLinearFiltering && (ek = !0, kk.type = 1) : ek = !1 : (ek = !1, yk = tk);
      let Yk = 0;
      if (ek) Ak.isWebGPU ? (Yk = 1, await Bk.e(332).then((() => Bk(61139)))) : await Bk.e(314).then((() => Bk(61143))), fk = new dk.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Ak, !1, void 0, kk.type, void 0, null, !1, void 0, Yk), kk._isRGBD = !1, kk.invertY = !1, mk = Ak.createRenderTargetCubeTexture(kk.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: kk.type,
        format: 5
      });
      else if (kk._isRGBD = !0, kk.invertY = !0, yk) {
        const Fk = 3;
        Wk = {};
        const Bk = kk._lodGenerationScale,
          Rk = kk._lodGenerationOffset;
        for (let tk = 0; tk < Fk; tk++) {
          const ak = (sk - 1) * Bk + Rk,
            Xk = Rk + (ak - Rk) * (1 - tk / (Fk - 1)),
            dk = Math.round(Math.min(Math.max(Xk, 0), ak)),
            Vk = new bk.c(Ak, 2);
          Vk.isCube = !0, Vk.invertY = !0, Vk.generateMipMaps = !1, Ak.updateTextureSamplingMode(2, Vk);
          const Jk = new wk.e(null);
          switch (Jk._isCube = !0, Jk._texture = Vk, Wk[dk] = Jk, tk) {
            case 0:
              kk._lodTextureLow = Jk;
              break;
            case 1:
              kk._lodTextureMid = Jk;
              break;
            case 2:
              kk._lodTextureHigh = Jk
          }
        }
      }
      const Lk = [];
      for (let Bk = 0; Bk < Fk.length; Bk++)
        for (let Rk = 0; Rk < 6; Rk++) {
          const tk = Fk[Bk][Rk],
            ak = (0, Vk.k)(tk),
            bk = new Blob([ak], {
              type: Xk
            }),
            wk = URL.createObjectURL(bk);
          let dk;
          if (Ak._features.forceBitmapOverHTMLImageElement) dk = Ak.createImageBitmap(bk, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async Fk => await vk(Fk, Ak, ek, fk, wk, Rk, Bk, yk, Wk, mk, kk)));
          else {
            const Fk = new Image;
            Fk.src = wk, dk = new Promise(((tk, ak) => {
              Fk.onload = () => {
                vk(Fk, Ak, ek, fk, wk, Rk, Bk, yk, Wk, mk, kk).then((() => tk())).catch((kk => {
                  ak(kk)
                }))
              }, Fk.onerror = kk => {
                ak(kk)
              }
            }))
          }
          Lk.push(dk)
        }
      if (await Promise.all(Lk), Fk.length < sk) {
        let Bk;
        const Rk = Math.pow(2, sk - 1 - Fk.length),
          tk = Rk * Rk * 4;
        switch (kk.type) {
          case 0:
            Bk = new Uint8Array(tk);
            break;
          case 2:
            Bk = new Uint16Array(tk);
            break;
          case 1:
            Bk = new Float32Array(tk)
        }
        for (let ak = Fk.length; ak < sk; ak++)
          for (let Fk = 0; Fk < 6; Fk++) Ak._uploadArrayBufferViewToTexture(mk?.texture || kk, Bk, Fk, ak)
      }
      if (mk) {
        const Fk = kk._irradianceTexture;
        kk._irradianceTexture = null, Ak._releaseTexture(kk), mk._swapAndDie(kk), kk._irradianceTexture = Fk
      }
      fk && fk.dispose(), yk && (kk._lodTextureHigh && kk._lodTextureHigh._texture && (kk._lodTextureHigh._texture.isReady = !0), kk._lodTextureMid && kk._lodTextureMid._texture && (kk._lodTextureMid._texture.isReady = !0), kk._lodTextureLow && kk._lodTextureLow._texture && (kk._lodTextureLow._texture.isReady = !0))
    }

    function Ok(kk, Fk) {
      const Bk = (Fk = yk(Fk)).irradiance;
      if (!Bk) return;
      const Rk = new Xk.f;
      tk.s.FromArrayToRef(Bk.x, 0, Rk.x), tk.s.FromArrayToRef(Bk.y, 0, Rk.y), tk.s.FromArrayToRef(Bk.z, 0, Rk.z), tk.s.FromArrayToRef(Bk.xx, 0, Rk.xx), tk.s.FromArrayToRef(Bk.yy, 0, Rk.yy), tk.s.FromArrayToRef(Bk.zz, 0, Rk.zz), tk.s.FromArrayToRef(Bk.yz, 0, Rk.yz), tk.s.FromArrayToRef(Bk.zx, 0, Rk.zx), tk.s.FromArrayToRef(Bk.xy, 0, Rk.xy), kk._sphericalPolynomial = Rk
    }
    var Ek = Bk(41252);
    class Sk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(kk, Fk, Bk, Rk, tk) {
        if (Array.isArray(kk)) return;
        const ak = ek(kk);
        if (ak) {
          Fk.width = ak.width, Fk.height = ak.width;
          try {
            (0, Ek.b)(), Ok(Fk, ak), Wk(Fk, kk, ak).then((() => {
              Fk.isReady = !0, Fk.onLoadedObservable.notifyObservers(Fk), Fk.onLoadedObservable.clear(), Rk && Rk()
            }), (kk => {
              tk?.("Can not upload environment levels", kk)
            }))
          } catch (Xk) {
            tk?.("Can not upload environment file", Xk)
          }
        } else tk && tk("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41252: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(41182),
      tk = Bk(39392);
    let ak = !1;

    function Xk() {
      ak || (ak = !0, tk.e.prototype._sphericalPolynomialTargetSize = 0, tk.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(tk.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Rk.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((kk => {
              this._texture._sphericalPolynomial = kk, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(kk) {
          this._texture && (this._texture._sphericalPolynomial = kk)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41182: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => dk
    });
    var Rk = Bk(36758),
      tk = Bk(36790),
      ak = Bk(39384),
      Xk = Bk(36764),
      bk = Bk(36917);
    class wk {
      constructor(kk, Fk, Bk, Rk) {
        this.name = kk, this.worldAxisForNormal = Fk, this.worldAxisForFileX = Bk, this.worldAxisForFileY = Rk
      }
    }
    class dk {
      static _NearestPow2Floor(kk) {
        return kk <= 1 ? 1 : 1 << Math.floor(Math.log2(kk))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(kk) {
        if (!kk.isCube) return null;
        kk.XN()?.ne().flushFramebuffer();
        const Fk = kk.getSize().width,
          Bk = kk._sphericalPolynomialTargetSize,
          Rk = Bk > 0 ? this._NearestPow2Floor(Bk) : 0,
          tk = !kk.noMipmap && !0 === kk._texture?.generateMipMaps,
          ak = Rk > 0 && Rk < Fk && tk,
          Xk = ak ? Math.max(0, Math.round(Math.log2(Fk / Rk))) : 0,
          bk = ak ? Math.max(1, Math.floor(Fk / Math.pow(2, Xk))) : Fk,
          wk = kk.readPixels(0, Xk, void 0, !1),
          dk = kk.readPixels(1, Xk, void 0, !1);
        let sk, Vk;
        kk.isRenderTarget ? (sk = kk.readPixels(3, Xk, void 0, !1), Vk = kk.readPixels(2, Xk, void 0, !1)) : (sk = kk.readPixels(2, Xk, void 0, !1), Vk = kk.readPixels(3, Xk, void 0, !1));
        const Jk = kk.readPixels(4, Xk, void 0, !1),
          Ak = kk.readPixels(5, Xk, void 0, !1),
          ek = kk.gammaSpace,
          yk = Rk > 0 && Rk < Fk && !ak;
        return new Promise((kk => {
          Promise.all([dk, wk, sk, Vk, Jk, Ak]).then((Bk => {
            let [tk, ak, Xk, wk, dk, sk] = Bk, Vk = bk;
            if (yk) {
              const kk = 4;
              tk = this._DownsampleFace(tk, Fk, Rk, kk), ak = this._DownsampleFace(ak, Fk, Rk, kk), Xk = this._DownsampleFace(Xk, Fk, Rk, kk), wk = this._DownsampleFace(wk, Fk, Rk, kk), dk = this._DownsampleFace(dk, Fk, Rk, kk), sk = this._DownsampleFace(sk, Fk, Rk, kk), Vk = Rk
            }
            const Jk = {
              size: Vk,
              right: ak,
              left: tk,
              up: Xk,
              down: wk,
              front: dk,
              back: sk,
              format: 5,
              type: tk instanceof Float32Array ? 1 : 0,
              gammaSpace: ek
            };
            kk(this.ConvertCubeMapToSphericalPolynomial(Jk))
          }))
        }))
      }
      static _AreaElement(kk, Fk) {
        return Math.atan2(kk * Fk, Math.sqrt(kk * kk + Fk * Fk + 1))
      }
      static _DownsampleFace(kk, Fk, Bk, Rk) {
        const tk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
          ak = Bk * Bk * Rk,
          Xk = new Float32Array(ak),
          bk = Fk / Bk,
          wk = 1 / (bk * bk);
        for (let sk = 0; sk < Bk; sk++) {
          const kk = Math.floor(sk * bk),
            ak = Math.floor((sk + 1) * bk);
          for (let dk = 0; dk < Bk; dk++) {
            const Vk = Math.floor(dk * bk),
              Jk = Math.floor((dk + 1) * bk),
              Ak = (sk * Bk + dk) * Rk;
            for (let Bk = 0; Bk < Rk; Bk++) {
              let bk = 0;
              for (let Xk = kk; Xk < ak; Xk++)
                for (let kk = Vk; kk < Jk; kk++) bk += tk[(Xk * Fk + kk) * Rk + Bk];
              Xk[Ak + Bk] = bk * wk
            }
          }
        }
        if (kk instanceof Float32Array) return Xk;
        const dk = new(0, kk.constructor)(ak);
        for (let sk = 0; sk < ak; sk++) dk[sk] = Xk[sk] + .5 | 0;
        return dk
      }
      static ConvertCubeMapToSphericalPolynomial(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Bk = Fk > 0 ? this._NearestPow2Floor(Fk) : 0;
        if (Bk > 0 && kk.size > Bk) {
          const Fk = 5 === kk.format ? 4 : 3,
            Rk = ["right", "left", "up", "down", "front", "back"],
            tk = {};
          for (const ak of Rk) tk[ak] = this._DownsampleFace(kk[ak], kk.size, Bk, Fk);
          kk = {
            ...kk,
            ...tk,
            size: Bk
          }
        }
        const Rk = new ak.b;
        let wk = 0;
        const dk = 2 / kk.size,
          sk = dk,
          Vk = .5 * dk,
          Jk = Vk - 1;
        for (let ak = 0; ak < 6; ak++) {
          const Fk = this._FileFaces[ak],
            Bk = kk[Fk.name];
          let Ak = Jk;
          const ek = 5 === kk.format ? 4 : 3;
          for (let ak = 0; ak < kk.size; ak++) {
            let yk = Jk;
            for (let sk = 0; sk < kk.size; sk++) {
              const Jk = Fk.worldAxisForFileX.scale(yk).add(Fk.worldAxisForFileY.scale(Ak)).add(Fk.worldAxisForNormal);
              Jk.normalize();
              const fk = this._AreaElement(yk - Vk, Ak - Vk) - this._AreaElement(yk - Vk, Ak + Vk) - this._AreaElement(yk + Vk, Ak - Vk) + this._AreaElement(yk + Vk, Ak + Vk);
              let mk = Bk[ak * kk.size * ek + sk * ek + 0],
                Wk = Bk[ak * kk.size * ek + sk * ek + 1],
                vk = Bk[ak * kk.size * ek + sk * ek + 2];
              isNaN(mk) && (mk = 0), isNaN(Wk) && (Wk = 0), isNaN(vk) && (vk = 0), 0 === kk.type && (mk /= 255, Wk /= 255, vk /= 255), kk.gammaSpace && (mk = Math.pow((0, tk.Clamp)(mk), Xk.i), Wk = Math.pow((0, tk.Clamp)(Wk), Xk.i), vk = Math.pow((0, tk.Clamp)(vk), Xk.i));
              const ik = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const kk = Math.max(mk, Wk, vk);
                if (kk > ik) {
                  const Fk = ik / kk;
                  mk *= Fk, Wk *= Fk, vk *= Fk
                }
              } else mk = (0, tk.Clamp)(mk, 0, ik), Wk = (0, tk.Clamp)(Wk, 0, ik), vk = (0, tk.Clamp)(vk, 0, ik);
              const Yk = new bk.e(mk, Wk, vk);
              Rk.addLight(Jk, Yk, fk), wk += fk, yk += dk
            }
            Ak += sk
          }
        }
        const Ak = 6 * (4 * Math.PI) / 6 / wk;
        return Rk.scaleInPlace(Ak), Rk.convertIncidentRadianceToIrradiance(), Rk.convertIrradianceToLambertianRadiance(), ak.f.FromHarmonics(Rk)
      }
    }
    dk._FileFaces = [new wk("right", new Rk.s(1, 0, 0), new Rk.s(0, 0, -1), new Rk.s(0, -1, 0)), new wk("left", new Rk.s(-1, 0, 0), new Rk.s(0, 0, 1), new Rk.s(0, -1, 0)), new wk("up", new Rk.s(0, 1, 0), new Rk.s(1, 0, 0), new Rk.s(0, 0, 1)), new wk("down", new Rk.s(0, -1, 0), new Rk.s(1, 0, 0), new Rk.s(0, 0, -1)), new wk("front", new Rk.s(0, 0, 1), new Rk.s(1, 0, 0), new Rk.s(0, -1, 0)), new wk("back", new Rk.s(0, 0, -1), new Rk.s(-1, 0, 0), new Rk.s(0, -1, 0))], dk.MAX_HDRI_VALUE = 4096, dk.PRESERVE_CLAMPED_COLORS = !1
  },
  41222: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(41215),
      tk = Bk(41230);
    class ak {
      static ExpandRGBDTexture(kk) {
        const Fk = kk._texture;
        if (!Fk || !kk.isRGBD) return;
        const tk = Fk.ne(),
          ak = tk.getCaps(),
          Xk = Fk.isReady;
        let bk = !1;
        ak.textureHalfFloatRender && ak.textureHalfFloatLinearFiltering ? (bk = !0, Fk.type = 2) : ak.textureFloatRender && ak.textureFloatLinearFiltering && (bk = !0, Fk.type = 1), bk && (Fk.isReady = !1, Fk._isRGBD = !1, Fk.invertY = !1);
        const wk = async () => {
          const ak = tk.isWebGPU,
            Xk = ak ? 1 : 0;
          Fk.isReady = !1, ak ? await Bk.e(332).then((() => Bk(61139))) : await Bk.e(314).then((() => Bk(61143)));
          const bk = new Rk.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, tk, !1, void 0, Fk.type, void 0, null, !1, void 0, Xk);
          bk.externalTextureSamplerBinding = !0;
          const wk = tk.createRenderTargetTexture(Fk.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Fk.samplingMode,
            type: Fk.type,
            format: 5
          });
          bk.onEffectCreatedObservable.addOnce((Bk => {
            Bk.executeWhenCompiled((() => {
              bk.onApply = kk => {
                kk._bindTexture("textureSampler", Fk), kk.setFloat2("scale", 1, 1)
              }, kk.XN()?.postProcessManager.directRender([bk], wk, !0), tk.restoreDefaultFramebuffer(), tk._releaseTexture(Fk), bk && bk.dispose(), wk._swapAndDie(Fk), Fk.isReady = !0
            }))
          }))
        };
        bk && (Xk ? wk() : kk.onLoadObservable.addOnce(wk))
      }
      static async EncodeTextureToRGBD(kk, Fk) {
        let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Fk.ne().isWebGPU ? await Bk.e(333).then((() => Bk(61165))) : await Bk.e(315).then((() => Bk(61157))), await (0, tk.d)("rgbdEncode", kk, Fk, Rk, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);