export const id = 308;
export const ids = [308];
export const modules = {
  41787: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      _ENVTextureLoader: () => Sk
    });
    var Xk = Ik(39923),
      Tk = Ik(37153),
      ik = Ik(37189),
      yk = Ik(39989),
      lk = Ik(39818),
      ak = Ik(39994),
      qk = (Ik(40090), Ik(41795)),
      Lk = Ik(38674),
      tk = (Ik(41803), Ik(41826), Ik(40056));
    const Zk = "image/png",
      jk = [134, 22, 135, 150, 246, 214, 150, 54];

    function ek(kk) {
      const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      let Ik = 0;
      for (let yk = 0; yk < jk.length; yk++)
        if (Fk.getUint8(Ik++) !== jk[yk]) return Lk.e.Error("Not a babylon environment map"), null;
      let Xk, Tk = "";
      for (; Xk = Fk.getUint8(Ik++);) Tk += String.fromCharCode(Xk);
      let ik = JSON.parse(Tk);
      return ik = wk(ik), ik.binaryDataPosition = Ik, ik.specular && (ik.specular.lodGenerationScale = ik.specular.lodGenerationScale || .8), ik
    }

    function wk(kk) {
      if (kk.version > 2) throw new Error(`Unsupported babylon environment map version "${kk.version}". Latest supported version is "2".`);
      return 2 === kk.version ? kk : kk = {
        ...kk,
        version: 2,
        imageType: Zk
      }
    }

    function Hk(kk, Fk) {
      const Ik = (Fk = wk(Fk)).specular;
      let Xk = Math.log2(Fk.width);
      if (Xk = Math.round(Xk) + 1, Ik.mipmaps.length !== 6 * Xk) throw new Error(`Unsupported specular mipmaps number "${Ik.mipmaps.length}"`);
      const Tk = new Array(Xk);
      for (let ik = 0; ik < Xk; ik++) {
        Tk[ik] = new Array(6);
        for (let Xk = 0; Xk < 6; Xk++) {
          const yk = Ik.mipmaps[6 * ik + Xk];
          Tk[ik][Xk] = new Uint8Array(kk.buffer, kk.byteOffset + Fk.binaryDataPosition + yk.position, yk.length)
        }
      }
      return Tk
    }

    function Jk(kk, Fk) {
      Fk = wk(Fk);
      const Ik = new Array(6),
        Xk = Fk.irradiance?.irradianceTexture;
      if (Xk) {
        if (6 !== Xk.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Xk.faces.length}"`);
        for (let Tk = 0; Tk < 6; Tk++) {
          const ik = Xk.faces[Tk];
          Ik[Tk] = new Uint8Array(kk.buffer, kk.byteOffset + Fk.binaryDataPosition + ik.position, ik.length)
        }
      }
      return Ik
    }

    function xk(kk, Fk, Ik) {
      const Xk = (Ik = wk(Ik)).specular;
      if (!Xk) return Promise.resolve([]);
      kk._lodGenerationScale = Xk.lodGenerationScale;
      const ik = [],
        yk = Hk(Fk, Ik);
      ik.push(Kk(kk, yk, Ik.imageType));
      const lk = Ik.irradiance?.irradianceTexture;
      if (lk) {
        const Xk = Jk(Fk, Ik);
        let yk = null;
        Ik.irradiance?.irradianceTexture?.dominantDirection && (yk = Tk.t.FromArray(Ik.irradiance.irradianceTexture.dominantDirection)), ik.push(Qk(kk, Xk, lk.size, Ik.imageType, yk))
      }
      return Promise.all(ik)
    }
    async function Pk(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk) {
      return await new Promise(((tk, Zk) => {
        if (Ik) {
          const Ik = Fk.createTexture(null, !0, !0, null, 1, null, (kk => {
            Zk(kk)
          }), kk);
          Xk?.onEffectCreatedObservable.addOnce((lk => {
            lk.executeWhenCompiled((() => {
              Xk.externalTextureSamplerBinding = !0, Xk.onApply = Xk => {
                Xk._bindTexture("textureSampler", Ik), Xk.setFloat2("scale", 1, Fk._features.needsInvertingBitmap && kk instanceof ImageBitmap ? -1 : 1)
              }, Fk.scenes.length && (Fk.scenes[0].postProcessManager.directRender([Xk], qk, !0, ik, yk), Fk.restoreDefaultFramebuffer(), Ik.dispose(), URL.revokeObjectURL(Tk), tk())
            }))
          }))
        } else {
          if (Fk._uploadImageToTexture(Lk, kk, ik, yk), lk) {
            const Ik = ak[yk];
            Ik && Fk._uploadImageToTexture(Ik._texture, kk, ik, 0)
          }
          tk()
        }
      }))
    }
    async function Kk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zk;
      const Xk = kk.Oe();
      kk.format = 5, kk.type = 0, kk.generateMipMaps = !0, kk._cachedAnisotropicFilteringLevel = null, Xk.updateTextureSamplingMode(3, kk), await sk(kk, Fk, !0, Ik), kk.isReady = !0
    }
    async function Qk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Zk,
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const ik = kk.Oe(),
        yk = new lk.b(ik, 5),
        qk = new ak.d(ik, yk);
      kk._irradianceTexture = qk, qk._dominantDirection = Tk, yk.isCube = !0, yk.format = 5, yk.type = 0, yk.generateMipMaps = !0, yk._cachedAnisotropicFilteringLevel = null, yk.generateMipMaps = !0, yk.width = Ik, yk.height = Ik, ik.updateTextureSamplingMode(3, yk), await sk(yk, [Fk], !1, Xk), ik.generateMipMapsForCubemap(yk), yk.isReady = !0
    }
    async function sk(kk, Fk, Tk) {
      let yk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Zk;
      if (!(0, Xk.j)(kk.width)) throw new Error("Texture size must be a power of two");
      const Lk = (0, ik.ILog2)(kk.width) + 1,
        jk = kk.Oe();
      let ek = !1,
        wk = !1,
        Hk = null,
        Jk = null,
        xk = null;
      const Kk = jk.getCaps();
      Kk.textureLOD ? jk._features.supportRenderAndCopyToLodForFloatTextures ? Kk.textureHalfFloatRender && Kk.textureHalfFloatLinearFiltering ? (ek = !0, kk.type = 2) : Kk.textureFloatRender && Kk.textureFloatLinearFiltering && (ek = !0, kk.type = 1) : ek = !1 : (ek = !1, wk = Tk);
      let Qk = 0;
      if (ek) jk.isWebGPU ? (Qk = 1, await Ik.e(342).then((() => Ik(61383)))) : await Ik.e(324).then((() => Ik(61389))), Hk = new qk.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, jk, !1, void 0, kk.type, void 0, null, !1, void 0, Qk), kk._isRGBD = !1, kk.invertY = !1, Jk = jk.createRenderTargetCubeTexture(kk.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: kk.type,
        format: 5
      });
      else if (kk._isRGBD = !0, kk.invertY = !0, wk) {
        const Fk = 3;
        xk = {};
        const Ik = kk._lodGenerationScale,
          Xk = kk._lodGenerationOffset;
        for (let Tk = 0; Tk < Fk; Tk++) {
          const ik = (Lk - 1) * Ik + Xk,
            yk = Xk + (ik - Xk) * (1 - Tk / (Fk - 1)),
            qk = Math.round(Math.min(Math.max(yk, 0), ik)),
            tk = new lk.b(jk, 2);
          tk.isCube = !0, tk.invertY = !0, tk.generateMipMaps = !1, jk.updateTextureSamplingMode(2, tk);
          const Zk = new ak.d(null);
          switch (Zk._isCube = !0, Zk._texture = tk, xk[qk] = Zk, Tk) {
            case 0:
              kk._lodTextureLow = Zk;
              break;
            case 1:
              kk._lodTextureMid = Zk;
              break;
            case 2:
              kk._lodTextureHigh = Zk
          }
        }
      }
      const sk = [];
      for (let Ik = 0; Ik < Fk.length; Ik++)
        for (let Xk = 0; Xk < 6; Xk++) {
          const Tk = Fk[Ik][Xk],
            ik = (0, tk.f)(Tk),
            lk = new Blob([ik], {
              type: yk
            }),
            ak = URL.createObjectURL(lk);
          let qk;
          if (jk._features.forceBitmapOverHTMLImageElement) qk = jk.createImageBitmap(lk, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async Fk => await Pk(Fk, jk, ek, Hk, ak, Xk, Ik, wk, xk, Jk, kk)));
          else {
            const Fk = new Image;
            Fk.src = ak, qk = new Promise(((Tk, ik) => {
              Fk.onload = () => {
                Pk(Fk, jk, ek, Hk, ak, Xk, Ik, wk, xk, Jk, kk).then((() => Tk())).catch((kk => {
                  ik(kk)
                }))
              }, Fk.onerror = kk => {
                ik(kk)
              }
            }))
          }
          sk.push(qk)
        }
      if (await Promise.all(sk), Fk.length < Lk) {
        let Ik;
        const Xk = Math.pow(2, Lk - 1 - Fk.length),
          Tk = Xk * Xk * 4;
        switch (kk.type) {
          case 0:
            Ik = new Uint8Array(Tk);
            break;
          case 2:
            Ik = new Uint16Array(Tk);
            break;
          case 1:
            Ik = new Float32Array(Tk)
        }
        for (let ik = Fk.length; ik < Lk; ik++)
          for (let Fk = 0; Fk < 6; Fk++) jk._uploadArrayBufferViewToTexture(Jk?.texture || kk, Ik, Fk, ik)
      }
      if (Jk) {
        const Fk = kk._irradianceTexture;
        kk._irradianceTexture = null, jk._releaseTexture(kk), Jk._swapAndDie(kk), kk._irradianceTexture = Fk
      }
      Hk && Hk.dispose(), wk && (kk._lodTextureHigh && kk._lodTextureHigh._texture && (kk._lodTextureHigh._texture.isReady = !0), kk._lodTextureMid && kk._lodTextureMid._texture && (kk._lodTextureMid._texture.isReady = !0), kk._lodTextureLow && kk._lodTextureLow._texture && (kk._lodTextureLow._texture.isReady = !0))
    }

    function Vk(kk, Fk) {
      const Ik = (Fk = wk(Fk)).irradiance;
      if (!Ik) return;
      const Xk = new yk.h;
      Tk.t.FromArrayToRef(Ik.x, 0, Xk.x), Tk.t.FromArrayToRef(Ik.y, 0, Xk.y), Tk.t.FromArrayToRef(Ik.z, 0, Xk.z), Tk.t.FromArrayToRef(Ik.xx, 0, Xk.xx), Tk.t.FromArrayToRef(Ik.yy, 0, Xk.yy), Tk.t.FromArrayToRef(Ik.zz, 0, Xk.zz), Tk.t.FromArrayToRef(Ik.yz, 0, Xk.yz), Tk.t.FromArrayToRef(Ik.zx, 0, Xk.zx), Tk.t.FromArrayToRef(Ik.xy, 0, Xk.xy), kk._sphericalPolynomial = Xk
    }
    var zk = Ik(41832);
    class Sk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(kk, Fk, Ik, Xk, Tk) {
        if (Array.isArray(kk)) return;
        const ik = ek(kk);
        if (ik) {
          Fk.width = ik.width, Fk.height = ik.width;
          try {
            (0, zk.c)(), Vk(Fk, ik), xk(Fk, kk, ik).then((() => {
              Fk.isReady = !0, Fk.onLoadedObservable.notifyObservers(Fk), Fk.onLoadedObservable.clear(), Xk && Xk()
            }), (kk => {
              Tk?.("Can not upload environment levels", kk)
            }))
          } catch (yk) {
            Tk?.("Can not upload environment file", yk)
          }
        } else Tk && Tk("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41832: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(41761),
      Tk = Ik(39994);
    let ik = !1;

    function yk() {
      ik || (ik = !0, Tk.d.prototype._sphericalPolynomialTargetSize = 0, Tk.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Tk.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Xk.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((kk => {
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
  41761: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk
    });
    var Xk = Ik(37153),
      Tk = Ik(37189),
      ik = Ik(39989),
      yk = Ik(37158),
      lk = Ik(37331);
    class ak {
      constructor(kk, Fk, Ik, Xk) {
        this.name = kk, this.worldAxisForNormal = Fk, this.worldAxisForFileX = Ik, this.worldAxisForFileY = Xk
      }
    }
    class qk {
      static _NearestPow2Floor(kk) {
        return kk <= 1 ? 1 : 1 << Math.floor(Math.log2(kk))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(kk) {
        if (!kk.isCube) return null;
        kk.mG()?.Oe().flushFramebuffer();
        const Fk = kk.getSize().width,
          Ik = kk._sphericalPolynomialTargetSize,
          Xk = Ik > 0 ? this._NearestPow2Floor(Ik) : 0,
          Tk = !kk.noMipmap && !0 === kk._texture?.generateMipMaps,
          ik = Xk > 0 && Xk < Fk && Tk,
          yk = ik ? Math.max(0, Math.round(Math.log2(Fk / Xk))) : 0,
          lk = ik ? Math.max(1, Math.floor(Fk / Math.pow(2, yk))) : Fk,
          ak = kk.readPixels(0, yk, void 0, !1),
          qk = kk.readPixels(1, yk, void 0, !1);
        let Lk, tk;
        kk.isRenderTarget ? (Lk = kk.readPixels(3, yk, void 0, !1), tk = kk.readPixels(2, yk, void 0, !1)) : (Lk = kk.readPixels(2, yk, void 0, !1), tk = kk.readPixels(3, yk, void 0, !1));
        const Zk = kk.readPixels(4, yk, void 0, !1),
          jk = kk.readPixels(5, yk, void 0, !1),
          ek = kk.gammaSpace,
          wk = Xk > 0 && Xk < Fk && !ik;
        return new Promise((kk => {
          Promise.all([qk, ak, Lk, tk, Zk, jk]).then((Ik => {
            let [Tk, ik, yk, ak, qk, Lk] = Ik, tk = lk;
            if (wk) {
              const kk = 4;
              Tk = this._DownsampleFace(Tk, Fk, Xk, kk), ik = this._DownsampleFace(ik, Fk, Xk, kk), yk = this._DownsampleFace(yk, Fk, Xk, kk), ak = this._DownsampleFace(ak, Fk, Xk, kk), qk = this._DownsampleFace(qk, Fk, Xk, kk), Lk = this._DownsampleFace(Lk, Fk, Xk, kk), tk = Xk
            }
            const Zk = {
              size: tk,
              right: ik,
              left: Tk,
              up: yk,
              down: ak,
              front: qk,
              back: Lk,
              format: 5,
              type: Tk instanceof Float32Array ? 1 : 0,
              gammaSpace: ek
            };
            kk(this.ConvertCubeMapToSphericalPolynomial(Zk))
          }))
        }))
      }
      static _AreaElement(kk, Fk) {
        return Math.atan2(kk * Fk, Math.sqrt(kk * kk + Fk * Fk + 1))
      }
      static _DownsampleFace(kk, Fk, Ik, Xk) {
        const Tk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
          ik = Ik * Ik * Xk,
          yk = new Float32Array(ik),
          lk = Fk / Ik,
          ak = 1 / (lk * lk);
        for (let Lk = 0; Lk < Ik; Lk++) {
          const kk = Math.floor(Lk * lk),
            ik = Math.floor((Lk + 1) * lk);
          for (let qk = 0; qk < Ik; qk++) {
            const tk = Math.floor(qk * lk),
              Zk = Math.floor((qk + 1) * lk),
              jk = (Lk * Ik + qk) * Xk;
            for (let Ik = 0; Ik < Xk; Ik++) {
              let lk = 0;
              for (let yk = kk; yk < ik; yk++)
                for (let kk = tk; kk < Zk; kk++) lk += Tk[(yk * Fk + kk) * Xk + Ik];
              yk[jk + Ik] = lk * ak
            }
          }
        }
        if (kk instanceof Float32Array) return yk;
        const qk = new(0, kk.constructor)(ik);
        for (let Lk = 0; Lk < ik; Lk++) qk[Lk] = yk[Lk] + .5 | 0;
        return qk
      }
      static ConvertCubeMapToSphericalPolynomial(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ik = Fk > 0 ? this._NearestPow2Floor(Fk) : 0;
        if (Ik > 0 && kk.size > Ik) {
          const Fk = 5 === kk.format ? 4 : 3,
            Xk = ["right", "left", "up", "down", "front", "back"],
            Tk = {};
          for (const ik of Xk) Tk[ik] = this._DownsampleFace(kk[ik], kk.size, Ik, Fk);
          kk = {
            ...kk,
            ...Tk,
            size: Ik
          }
        }
        const Xk = new ik.d;
        let ak = 0;
        const qk = 2 / kk.size,
          Lk = qk,
          tk = .5 * qk,
          Zk = tk - 1;
        for (let ik = 0; ik < 6; ik++) {
          const Fk = this._FileFaces[ik],
            Ik = kk[Fk.name];
          let jk = Zk;
          const ek = 5 === kk.format ? 4 : 3;
          for (let ik = 0; ik < kk.size; ik++) {
            let wk = Zk;
            for (let Lk = 0; Lk < kk.size; Lk++) {
              const Zk = Fk.worldAxisForFileX.scale(wk).add(Fk.worldAxisForFileY.scale(jk)).add(Fk.worldAxisForNormal);
              Zk.normalize();
              const Hk = this._AreaElement(wk - tk, jk - tk) - this._AreaElement(wk - tk, jk + tk) - this._AreaElement(wk + tk, jk - tk) + this._AreaElement(wk + tk, jk + tk);
              let Jk = Ik[ik * kk.size * ek + Lk * ek + 0],
                xk = Ik[ik * kk.size * ek + Lk * ek + 1],
                Pk = Ik[ik * kk.size * ek + Lk * ek + 2];
              isNaN(Jk) && (Jk = 0), isNaN(xk) && (xk = 0), isNaN(Pk) && (Pk = 0), 0 === kk.type && (Jk /= 255, xk /= 255, Pk /= 255), kk.gammaSpace && (Jk = Math.pow((0, Tk.Clamp)(Jk), yk.g), xk = Math.pow((0, Tk.Clamp)(xk), yk.g), Pk = Math.pow((0, Tk.Clamp)(Pk), yk.g));
              const Kk = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const kk = Math.max(Jk, xk, Pk);
                if (kk > Kk) {
                  const Fk = Kk / kk;
                  Jk *= Fk, xk *= Fk, Pk *= Fk
                }
              } else Jk = (0, Tk.Clamp)(Jk, 0, Kk), xk = (0, Tk.Clamp)(xk, 0, Kk), Pk = (0, Tk.Clamp)(Pk, 0, Kk);
              const Qk = new lk.e(Jk, xk, Pk);
              Xk.addLight(Zk, Qk, Hk), ak += Hk, wk += qk
            }
            jk += Lk
          }
        }
        const jk = 6 * (4 * Math.PI) / 6 / ak;
        return Xk.scaleInPlace(jk), Xk.convertIncidentRadianceToIrradiance(), Xk.convertIrradianceToLambertianRadiance(), ik.h.FromHarmonics(Xk)
      }
    }
    qk._FileFaces = [new ak("right", new Xk.t(1, 0, 0), new Xk.t(0, 0, -1), new Xk.t(0, -1, 0)), new ak("left", new Xk.t(-1, 0, 0), new Xk.t(0, 0, 1), new Xk.t(0, -1, 0)), new ak("up", new Xk.t(0, 1, 0), new Xk.t(1, 0, 0), new Xk.t(0, 0, 1)), new ak("down", new Xk.t(0, -1, 0), new Xk.t(1, 0, 0), new Xk.t(0, 0, -1)), new ak("front", new Xk.t(0, 0, 1), new Xk.t(1, 0, 0), new Xk.t(0, -1, 0)), new ak("back", new Xk.t(0, 0, -1), new Xk.t(-1, 0, 0), new Xk.t(0, -1, 0))], qk.MAX_HDRI_VALUE = 4096, qk.PRESERVE_CLAMPED_COLORS = !1
  },
  41803: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(41795),
      Tk = Ik(41809);
    class ik {
      static ExpandRGBDTexture(kk) {
        const Fk = kk._texture;
        if (!Fk || !kk.isRGBD) return;
        const Tk = Fk.Oe(),
          ik = Tk.getCaps(),
          yk = Fk.isReady;
        let lk = !1;
        ik.textureHalfFloatRender && ik.textureHalfFloatLinearFiltering ? (lk = !0, Fk.type = 2) : ik.textureFloatRender && ik.textureFloatLinearFiltering && (lk = !0, Fk.type = 1), lk && (Fk.isReady = !1, Fk._isRGBD = !1, Fk.invertY = !1);
        const ak = async () => {
          const ik = Tk.isWebGPU,
            yk = ik ? 1 : 0;
          Fk.isReady = !1, ik ? await Ik.e(342).then((() => Ik(61383))) : await Ik.e(324).then((() => Ik(61389)));
          const lk = new Xk.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Tk, !1, void 0, Fk.type, void 0, null, !1, void 0, yk);
          lk.externalTextureSamplerBinding = !0;
          const ak = Tk.createRenderTargetTexture(Fk.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Fk.samplingMode,
            type: Fk.type,
            format: 5
          });
          lk.onEffectCreatedObservable.addOnce((Ik => {
            Ik.executeWhenCompiled((() => {
              lk.onApply = kk => {
                kk._bindTexture("textureSampler", Fk), kk.setFloat2("scale", 1, 1)
              }, kk.mG()?.postProcessManager.directRender([lk], ak, !0), Tk.restoreDefaultFramebuffer(), Tk._releaseTexture(Fk), lk && lk.dispose(), ak._swapAndDie(Fk), Fk.isReady = !0
            }))
          }))
        };
        lk && (yk ? ak() : kk.onLoadObservable.addOnce(ak))
      }
      static async EncodeTextureToRGBD(kk, Fk) {
        let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Fk.Oe().isWebGPU ? await Ik.e(343).then((() => Ik(61404))) : await Ik.e(325).then((() => Ik(61400))), await (0, Tk.e)("rgbdEncode", kk, Fk, Xk, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);