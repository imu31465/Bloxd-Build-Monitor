export const id = 307;
export const ids = [307];
export const modules = {
  41373: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      _ENVTextureLoader: () => sk
    });
    var Dk = ik(39501),
      fk = ik(36698),
      Sk = ik(36729),
      bk = ik(39558),
      rk = ik(39391),
      Pk = ik(39564),
      mk = (ik(39653), ik(41376)),
      Mk = ik(38272),
      Kk = (ik(41393), ik(41413), ik(39623));
    const xk = "image/png",
      nk = [134, 22, 135, 150, 246, 214, 150, 54];

    function Uk(kk) {
      const ek = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      let ik = 0;
      for (let bk = 0; bk < nk.length; bk++)
        if (ek.getUint8(ik++) !== nk[bk]) return Mk.b.Error("Not a babylon environment map"), null;
      let Dk, fk = "";
      for (; Dk = ek.getUint8(ik++);) fk += String.fromCharCode(Dk);
      let Sk = JSON.parse(fk);
      return Sk = Hk(Sk), Sk.binaryDataPosition = ik, Sk.specular && (Sk.specular.lodGenerationScale = Sk.specular.lodGenerationScale || .8), Sk
    }

    function Hk(kk) {
      if (kk.version > 2) throw new Error(`Unsupported babylon environment map version "${kk.version}". Latest supported version is "2".`);
      return 2 === kk.version ? kk : kk = {
        ...kk,
        version: 2,
        imageType: xk
      }
    }

    function wk(kk, ek) {
      const ik = (ek = Hk(ek)).specular;
      let Dk = Math.log2(ek.width);
      if (Dk = Math.round(Dk) + 1, ik.mipmaps.length !== 6 * Dk) throw new Error(`Unsupported specular mipmaps number "${ik.mipmaps.length}"`);
      const fk = new Array(Dk);
      for (let Sk = 0; Sk < Dk; Sk++) {
        fk[Sk] = new Array(6);
        for (let Dk = 0; Dk < 6; Dk++) {
          const bk = ik.mipmaps[6 * Sk + Dk];
          fk[Sk][Dk] = new Uint8Array(kk.buffer, kk.byteOffset + ek.binaryDataPosition + bk.position, bk.length)
        }
      }
      return fk
    }

    function lk(kk, ek) {
      ek = Hk(ek);
      const ik = new Array(6),
        Dk = ek.irradiance?.irradianceTexture;
      if (Dk) {
        if (6 !== Dk.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Dk.faces.length}"`);
        for (let fk = 0; fk < 6; fk++) {
          const Sk = Dk.faces[fk];
          ik[fk] = new Uint8Array(kk.buffer, kk.byteOffset + ek.binaryDataPosition + Sk.position, Sk.length)
        }
      }
      return ik
    }

    function pk(kk, ek, ik) {
      const Dk = (ik = Hk(ik)).specular;
      if (!Dk) return Promise.resolve([]);
      kk._lodGenerationScale = Dk.lodGenerationScale;
      const Sk = [],
        bk = wk(ek, ik);
      Sk.push(Yk(kk, bk, ik.imageType));
      const rk = ik.irradiance?.irradianceTexture;
      if (rk) {
        const Dk = lk(ek, ik);
        let bk = null;
        ik.irradiance?.irradianceTexture?.dominantDirection && (bk = fk.o.FromArray(ik.irradiance.irradianceTexture.dominantDirection)), Sk.push(Lk(kk, Dk, rk.size, ik.imageType, bk))
      }
      return Promise.all(Sk)
    }
    async function yk(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk) {
      return await new Promise(((Kk, xk) => {
        if (ik) {
          const ik = ek.createTexture(null, !0, !0, null, 1, null, (kk => {
            xk(kk)
          }), kk);
          Dk?.onEffectCreatedObservable.addOnce((rk => {
            rk.executeWhenCompiled((() => {
              Dk.externalTextureSamplerBinding = !0, Dk.onApply = Dk => {
                Dk._bindTexture("textureSampler", ik), Dk.setFloat2("scale", 1, ek._features.needsInvertingBitmap && kk instanceof ImageBitmap ? -1 : 1)
              }, ek.scenes.length && (ek.scenes[0].postProcessManager.directRender([Dk], mk, !0, Sk, bk), ek.restoreDefaultFramebuffer(), ik.dispose(), URL.revokeObjectURL(fk), Kk())
            }))
          }))
        } else {
          if (ek._uploadImageToTexture(Mk, kk, Sk, bk), rk) {
            const ik = Pk[bk];
            ik && ek._uploadImageToTexture(ik._texture, kk, Sk, 0)
          }
          Kk()
        }
      }))
    }
    async function Yk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xk;
      const Dk = kk.JU();
      kk.format = 5, kk.type = 0, kk.generateMipMaps = !0, kk._cachedAnisotropicFilteringLevel = null, Dk.updateTextureSamplingMode(3, kk), await Ck(kk, ek, !0, ik), kk.isReady = !0
    }
    async function Lk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xk,
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Sk = kk.JU(),
        bk = new rk.b(Sk, 5),
        mk = new Pk.b(Sk, bk);
      kk._irradianceTexture = mk, mk._dominantDirection = fk, bk.isCube = !0, bk.format = 5, bk.type = 0, bk.generateMipMaps = !0, bk._cachedAnisotropicFilteringLevel = null, bk.generateMipMaps = !0, bk.width = ik, bk.height = ik, Sk.updateTextureSamplingMode(3, bk), await Ck(bk, [ek], !1, Dk), Sk.generateMipMapsForCubemap(bk), bk.isReady = !0
    }
    async function Ck(kk, ek, fk) {
      let bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xk;
      if (!(0, Dk.j)(kk.width)) throw new Error("Texture size must be a power of two");
      const Mk = (0, Sk.ILog2)(kk.width) + 1,
        nk = kk.JU();
      let Uk = !1,
        Hk = !1,
        wk = null,
        lk = null,
        pk = null;
      const Yk = nk.getCaps();
      Yk.textureLOD ? nk._features.supportRenderAndCopyToLodForFloatTextures ? Yk.textureHalfFloatRender && Yk.textureHalfFloatLinearFiltering ? (Uk = !0, kk.type = 2) : Yk.textureFloatRender && Yk.textureFloatLinearFiltering && (Uk = !0, kk.type = 1) : Uk = !1 : (Uk = !1, Hk = fk);
      let Lk = 0;
      if (Uk) nk.isWebGPU ? (Lk = 1, await ik.e(341).then((() => ik(60794)))) : await ik.e(323).then((() => ik(60800))), wk = new mk.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, nk, !1, void 0, kk.type, void 0, null, !1, void 0, Lk), kk._isRGBD = !1, kk.invertY = !1, lk = nk.createRenderTargetCubeTexture(kk.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: kk.type,
        format: 5
      });
      else if (kk._isRGBD = !0, kk.invertY = !0, Hk) {
        const ek = 3;
        pk = {};
        const ik = kk._lodGenerationScale,
          Dk = kk._lodGenerationOffset;
        for (let fk = 0; fk < ek; fk++) {
          const Sk = (Mk - 1) * ik + Dk,
            bk = Dk + (Sk - Dk) * (1 - fk / (ek - 1)),
            mk = Math.round(Math.min(Math.max(bk, 0), Sk)),
            Kk = new rk.b(nk, 2);
          Kk.isCube = !0, Kk.invertY = !0, Kk.generateMipMaps = !1, nk.updateTextureSamplingMode(2, Kk);
          const xk = new Pk.b(null);
          switch (xk._isCube = !0, xk._texture = Kk, pk[mk] = xk, fk) {
            case 0:
              kk._lodTextureLow = xk;
              break;
            case 1:
              kk._lodTextureMid = xk;
              break;
            case 2:
              kk._lodTextureHigh = xk
          }
        }
      }
      const Ck = [];
      for (let ik = 0; ik < ek.length; ik++)
        for (let Dk = 0; Dk < 6; Dk++) {
          const fk = ek[ik][Dk],
            Sk = (0, Kk.m)(fk),
            rk = new Blob([Sk], {
              type: bk
            }),
            Pk = URL.createObjectURL(rk);
          let mk;
          if (nk._features.forceBitmapOverHTMLImageElement) mk = nk.createImageBitmap(rk, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async ek => await yk(ek, nk, Uk, wk, Pk, Dk, ik, Hk, pk, lk, kk)));
          else {
            const ek = new Image;
            ek.src = Pk, mk = new Promise(((fk, Sk) => {
              ek.onload = () => {
                yk(ek, nk, Uk, wk, Pk, Dk, ik, Hk, pk, lk, kk).then((() => fk())).catch((kk => {
                  Sk(kk)
                }))
              }, ek.onerror = kk => {
                Sk(kk)
              }
            }))
          }
          Ck.push(mk)
        }
      if (await Promise.all(Ck), ek.length < Mk) {
        let ik;
        const Dk = Math.pow(2, Mk - 1 - ek.length),
          fk = Dk * Dk * 4;
        switch (kk.type) {
          case 0:
            ik = new Uint8Array(fk);
            break;
          case 2:
            ik = new Uint16Array(fk);
            break;
          case 1:
            ik = new Float32Array(fk)
        }
        for (let Sk = ek.length; Sk < Mk; Sk++)
          for (let ek = 0; ek < 6; ek++) nk._uploadArrayBufferViewToTexture(lk?.texture || kk, ik, ek, Sk)
      }
      if (lk) {
        const ek = kk._irradianceTexture;
        kk._irradianceTexture = null, nk._releaseTexture(kk), lk._swapAndDie(kk), kk._irradianceTexture = ek
      }
      wk && wk.dispose(), Hk && (kk._lodTextureHigh && kk._lodTextureHigh._texture && (kk._lodTextureHigh._texture.isReady = !0), kk._lodTextureMid && kk._lodTextureMid._texture && (kk._lodTextureMid._texture.isReady = !0), kk._lodTextureLow && kk._lodTextureLow._texture && (kk._lodTextureLow._texture.isReady = !0))
    }

    function Ak(kk, ek) {
      const ik = (ek = Hk(ek)).irradiance;
      if (!ik) return;
      const Dk = new bk.f;
      fk.o.FromArrayToRef(ik.x, 0, Dk.x), fk.o.FromArrayToRef(ik.y, 0, Dk.y), fk.o.FromArrayToRef(ik.z, 0, Dk.z), fk.o.FromArrayToRef(ik.xx, 0, Dk.xx), fk.o.FromArrayToRef(ik.yy, 0, Dk.yy), fk.o.FromArrayToRef(ik.zz, 0, Dk.zz), fk.o.FromArrayToRef(ik.yz, 0, Dk.yz), fk.o.FromArrayToRef(ik.zx, 0, Dk.zx), fk.o.FromArrayToRef(ik.xy, 0, Dk.xy), kk._sphericalPolynomial = Dk
    }
    var jk = ik(41420);
    class sk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(kk, ek, ik, Dk, fk) {
        if (Array.isArray(kk)) return;
        const Sk = Uk(kk);
        if (Sk) {
          ek.width = Sk.width, ek.height = Sk.width;
          try {
            (0, jk.d)(), Ak(ek, Sk), pk(ek, kk, Sk).then((() => {
              ek.isReady = !0, ek.onLoadedObservable.notifyObservers(ek), ek.onLoadedObservable.clear(), Dk && Dk()
            }), (kk => {
              fk?.("Can not upload environment levels", kk)
            }))
          } catch (bk) {
            fk?.("Can not upload environment file", bk)
          }
        } else fk && fk("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41420: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(41347),
      fk = ik(39564);
    let Sk = !1;

    function bk() {
      Sk || (Sk = !0, fk.b.prototype._sphericalPolynomialTargetSize = 0, fk.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(fk.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Dk.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((kk => {
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
  41347: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => mk
    });
    var Dk = ik(36698),
      fk = ik(36729),
      Sk = ik(39558),
      bk = ik(36703),
      rk = ik(36874);
    class Pk {
      constructor(kk, ek, ik, Dk) {
        this.name = kk, this.worldAxisForNormal = ek, this.worldAxisForFileX = ik, this.worldAxisForFileY = Dk
      }
    }
    class mk {
      static _NearestPow2Floor(kk) {
        return kk <= 1 ? 1 : 1 << Math.floor(Math.log2(kk))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(kk) {
        if (!kk.isCube) return null;
        kk.XF()?.JU().flushFramebuffer();
        const ek = kk.getSize().width,
          ik = kk._sphericalPolynomialTargetSize,
          Dk = ik > 0 ? this._NearestPow2Floor(ik) : 0,
          fk = !kk.noMipmap && !0 === kk._texture?.generateMipMaps,
          Sk = Dk > 0 && Dk < ek && fk,
          bk = Sk ? Math.max(0, Math.round(Math.log2(ek / Dk))) : 0,
          rk = Sk ? Math.max(1, Math.floor(ek / Math.pow(2, bk))) : ek,
          Pk = kk.readPixels(0, bk, void 0, !1),
          mk = kk.readPixels(1, bk, void 0, !1);
        let Mk, Kk;
        kk.isRenderTarget ? (Mk = kk.readPixels(3, bk, void 0, !1), Kk = kk.readPixels(2, bk, void 0, !1)) : (Mk = kk.readPixels(2, bk, void 0, !1), Kk = kk.readPixels(3, bk, void 0, !1));
        const xk = kk.readPixels(4, bk, void 0, !1),
          nk = kk.readPixels(5, bk, void 0, !1),
          Uk = kk.gammaSpace,
          Hk = Dk > 0 && Dk < ek && !Sk;
        return new Promise((kk => {
          Promise.all([mk, Pk, Mk, Kk, xk, nk]).then((ik => {
            let [fk, Sk, bk, Pk, mk, Mk] = ik, Kk = rk;
            if (Hk) {
              const kk = 4;
              fk = this._DownsampleFace(fk, ek, Dk, kk), Sk = this._DownsampleFace(Sk, ek, Dk, kk), bk = this._DownsampleFace(bk, ek, Dk, kk), Pk = this._DownsampleFace(Pk, ek, Dk, kk), mk = this._DownsampleFace(mk, ek, Dk, kk), Mk = this._DownsampleFace(Mk, ek, Dk, kk), Kk = Dk
            }
            const xk = {
              size: Kk,
              right: Sk,
              left: fk,
              up: bk,
              down: Pk,
              front: mk,
              back: Mk,
              format: 5,
              type: fk instanceof Float32Array ? 1 : 0,
              gammaSpace: Uk
            };
            kk(this.ConvertCubeMapToSphericalPolynomial(xk))
          }))
        }))
      }
      static _AreaElement(kk, ek) {
        return Math.atan2(kk * ek, Math.sqrt(kk * kk + ek * ek + 1))
      }
      static _DownsampleFace(kk, ek, ik, Dk) {
        const fk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
          Sk = ik * ik * Dk,
          bk = new Float32Array(Sk),
          rk = ek / ik,
          Pk = 1 / (rk * rk);
        for (let Mk = 0; Mk < ik; Mk++) {
          const kk = Math.floor(Mk * rk),
            Sk = Math.floor((Mk + 1) * rk);
          for (let mk = 0; mk < ik; mk++) {
            const Kk = Math.floor(mk * rk),
              xk = Math.floor((mk + 1) * rk),
              nk = (Mk * ik + mk) * Dk;
            for (let ik = 0; ik < Dk; ik++) {
              let rk = 0;
              for (let bk = kk; bk < Sk; bk++)
                for (let kk = Kk; kk < xk; kk++) rk += fk[(bk * ek + kk) * Dk + ik];
              bk[nk + ik] = rk * Pk
            }
          }
        }
        if (kk instanceof Float32Array) return bk;
        const mk = new(0, kk.constructor)(Sk);
        for (let Mk = 0; Mk < Sk; Mk++) mk[Mk] = bk[Mk] + .5 | 0;
        return mk
      }
      static ConvertCubeMapToSphericalPolynomial(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ik = ek > 0 ? this._NearestPow2Floor(ek) : 0;
        if (ik > 0 && kk.size > ik) {
          const ek = 5 === kk.format ? 4 : 3,
            Dk = ["right", "left", "up", "down", "front", "back"],
            fk = {};
          for (const Sk of Dk) fk[Sk] = this._DownsampleFace(kk[Sk], kk.size, ik, ek);
          kk = {
            ...kk,
            ...fk,
            size: ik
          }
        }
        const Dk = new Sk.b;
        let Pk = 0;
        const mk = 2 / kk.size,
          Mk = mk,
          Kk = .5 * mk,
          xk = Kk - 1;
        for (let Sk = 0; Sk < 6; Sk++) {
          const ek = this._FileFaces[Sk],
            ik = kk[ek.name];
          let nk = xk;
          const Uk = 5 === kk.format ? 4 : 3;
          for (let Sk = 0; Sk < kk.size; Sk++) {
            let Hk = xk;
            for (let Mk = 0; Mk < kk.size; Mk++) {
              const xk = ek.worldAxisForFileX.scale(Hk).add(ek.worldAxisForFileY.scale(nk)).add(ek.worldAxisForNormal);
              xk.normalize();
              const wk = this._AreaElement(Hk - Kk, nk - Kk) - this._AreaElement(Hk - Kk, nk + Kk) - this._AreaElement(Hk + Kk, nk - Kk) + this._AreaElement(Hk + Kk, nk + Kk);
              let lk = ik[Sk * kk.size * Uk + Mk * Uk + 0],
                pk = ik[Sk * kk.size * Uk + Mk * Uk + 1],
                yk = ik[Sk * kk.size * Uk + Mk * Uk + 2];
              isNaN(lk) && (lk = 0), isNaN(pk) && (pk = 0), isNaN(yk) && (yk = 0), 0 === kk.type && (lk /= 255, pk /= 255, yk /= 255), kk.gammaSpace && (lk = Math.pow((0, fk.Clamp)(lk), bk.i), pk = Math.pow((0, fk.Clamp)(pk), bk.i), yk = Math.pow((0, fk.Clamp)(yk), bk.i));
              const Yk = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const kk = Math.max(lk, pk, yk);
                if (kk > Yk) {
                  const ek = Yk / kk;
                  lk *= ek, pk *= ek, yk *= ek
                }
              } else lk = (0, fk.Clamp)(lk, 0, Yk), pk = (0, fk.Clamp)(pk, 0, Yk), yk = (0, fk.Clamp)(yk, 0, Yk);
              const Lk = new rk.e(lk, pk, yk);
              Dk.addLight(xk, Lk, wk), Pk += wk, Hk += mk
            }
            nk += Mk
          }
        }
        const nk = 6 * (4 * Math.PI) / 6 / Pk;
        return Dk.scaleInPlace(nk), Dk.convertIncidentRadianceToIrradiance(), Dk.convertIrradianceToLambertianRadiance(), Sk.f.FromHarmonics(Dk)
      }
    }
    mk._FileFaces = [new Pk("right", new Dk.o(1, 0, 0), new Dk.o(0, 0, -1), new Dk.o(0, -1, 0)), new Pk("left", new Dk.o(-1, 0, 0), new Dk.o(0, 0, 1), new Dk.o(0, -1, 0)), new Pk("up", new Dk.o(0, 1, 0), new Dk.o(1, 0, 0), new Dk.o(0, 0, 1)), new Pk("down", new Dk.o(0, -1, 0), new Dk.o(1, 0, 0), new Dk.o(0, 0, -1)), new Pk("front", new Dk.o(0, 0, 1), new Dk.o(1, 0, 0), new Dk.o(0, -1, 0)), new Pk("back", new Dk.o(0, 0, -1), new Dk.o(-1, 0, 0), new Dk.o(0, -1, 0))], mk.MAX_HDRI_VALUE = 4096, mk.PRESERVE_CLAMPED_COLORS = !1
  },
  41393: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk
    });
    var Dk = ik(41376),
      fk = ik(41397);
    class Sk {
      static ExpandRGBDTexture(kk) {
        const ek = kk._texture;
        if (!ek || !kk.isRGBD) return;
        const fk = ek.JU(),
          Sk = fk.getCaps(),
          bk = ek.isReady;
        let rk = !1;
        Sk.textureHalfFloatRender && Sk.textureHalfFloatLinearFiltering ? (rk = !0, ek.type = 2) : Sk.textureFloatRender && Sk.textureFloatLinearFiltering && (rk = !0, ek.type = 1), rk && (ek.isReady = !1, ek._isRGBD = !1, ek.invertY = !1);
        const Pk = async () => {
          const Sk = fk.isWebGPU,
            bk = Sk ? 1 : 0;
          ek.isReady = !1, Sk ? await ik.e(341).then((() => ik(60794))) : await ik.e(323).then((() => ik(60800)));
          const rk = new Dk.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, fk, !1, void 0, ek.type, void 0, null, !1, void 0, bk);
          rk.externalTextureSamplerBinding = !0;
          const Pk = fk.createRenderTargetTexture(ek.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: ek.samplingMode,
            type: ek.type,
            format: 5
          });
          rk.onEffectCreatedObservable.addOnce((ik => {
            ik.executeWhenCompiled((() => {
              rk.onApply = kk => {
                kk._bindTexture("textureSampler", ek), kk.setFloat2("scale", 1, 1)
              }, kk.XF()?.postProcessManager.directRender([rk], Pk, !0), fk.restoreDefaultFramebuffer(), fk._releaseTexture(ek), rk && rk.dispose(), Pk._swapAndDie(ek), ek.isReady = !0
            }))
          }))
        };
        rk && (bk ? Pk() : kk.onLoadObservable.addOnce(Pk))
      }
      static async EncodeTextureToRGBD(kk, ek) {
        let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return ek.JU().isWebGPU ? await ik.e(342).then((() => ik(60811))) : await ik.e(324).then((() => ik(60807))), await (0, fk.c)("rgbdEncode", kk, ek, Dk, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);