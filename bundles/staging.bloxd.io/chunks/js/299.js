export const id = 299;
export const ids = [299];
export const modules = {
  41354: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      _ENVTextureLoader: () => wT
    });
    var lT = cT(39549),
      MT = cT(36892),
      KT = cT(36937),
      OT = cT(39607),
      yT = cT(39454),
      fT = cT(39615),
      xT = (cT(39720), cT(41357)),
      IT = cT(38512),
      AT = (cT(41368), cT(41386), cT(39689));
    const CT = "image/png",
      jT = [134, 22, 135, 150, 246, 214, 150, 54];

    function vT(TT) {
      const kT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      let cT = 0;
      for (let OT = 0; OT < jT.length; OT++)
        if (kT.getUint8(cT++) !== jT[OT]) return IT.e.Error("Not a babylon environment map"), null;
      let lT, MT = "";
      for (; lT = kT.getUint8(cT++);) MT += String.fromCharCode(lT);
      let KT = JSON.parse(MT);
      return KT = tT(KT), KT.binaryDataPosition = cT, KT.specular && (KT.specular.lodGenerationScale = KT.specular.lodGenerationScale || .8), KT
    }

    function tT(TT) {
      if (TT.version > 2) throw new Error(`Unsupported babylon environment map version "${TT.version}". Latest supported version is "2".`);
      return 2 === TT.version ? TT : TT = {
        ...TT,
        version: 2,
        imageType: CT
      }
    }

    function hT(TT, kT) {
      const cT = (kT = tT(kT)).specular;
      let lT = Math.log2(kT.width);
      if (lT = Math.round(lT) + 1, cT.mipmaps.length !== 6 * lT) throw new Error(`Unsupported specular mipmaps number "${cT.mipmaps.length}"`);
      const MT = new Array(lT);
      for (let KT = 0; KT < lT; KT++) {
        MT[KT] = new Array(6);
        for (let lT = 0; lT < 6; lT++) {
          const OT = cT.mipmaps[6 * KT + lT];
          MT[KT][lT] = new Uint8Array(TT.buffer, TT.byteOffset + kT.binaryDataPosition + OT.position, OT.length)
        }
      }
      return MT
    }

    function NT(TT, kT) {
      kT = tT(kT);
      const cT = new Array(6),
        lT = kT.irradiance?.irradianceTexture;
      if (lT) {
        if (6 !== lT.faces.length) throw new Error(`Incorrect irradiance texture faces number "${lT.faces.length}"`);
        for (let MT = 0; MT < 6; MT++) {
          const KT = lT.faces[MT];
          cT[MT] = new Uint8Array(TT.buffer, TT.byteOffset + kT.binaryDataPosition + KT.position, KT.length)
        }
      }
      return cT
    }

    function QT(TT, kT, cT) {
      const lT = (cT = tT(cT)).specular;
      if (!lT) return Promise.resolve([]);
      TT._lodGenerationScale = lT.lodGenerationScale;
      const KT = [],
        OT = hT(kT, cT);
      KT.push(DT(TT, OT, cT.imageType));
      const yT = cT.irradiance?.irradianceTexture;
      if (yT) {
        const lT = NT(kT, cT);
        let OT = null;
        cT.irradiance?.irradianceTexture?.dominantDirection && (OT = MT.m.FromArray(cT.irradiance.irradianceTexture.dominantDirection)), KT.push(aT(TT, lT, yT.size, cT.imageType, OT))
      }
      return Promise.all(KT)
    }
    async function ST(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT) {
      return await new Promise(((AT, CT) => {
        if (cT) {
          const cT = kT.createTexture(null, !0, !0, null, 1, null, (TT => {
            CT(TT)
          }), TT);
          lT?.onEffectCreatedObservable.addOnce((yT => {
            yT.executeWhenCompiled((() => {
              lT.externalTextureSamplerBinding = !0, lT.onApply = lT => {
                lT._bindTexture("textureSampler", cT), lT.setFloat2("scale", 1, kT._features.needsInvertingBitmap && TT instanceof ImageBitmap ? -1 : 1)
              }, kT.scenes.length && (kT.scenes[0].postProcessManager.directRender([lT], xT, !0, KT, OT), kT.restoreDefaultFramebuffer(), cT.dispose(), URL.revokeObjectURL(MT), AT())
            }))
          }))
        } else {
          if (kT._uploadImageToTexture(IT, TT, KT, OT), yT) {
            const cT = fT[OT];
            cT && kT._uploadImageToTexture(cT._texture, TT, KT, 0)
          }
          AT()
        }
      }))
    }
    async function DT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CT;
      const lT = TT.Dv();
      TT.format = 5, TT.type = 0, TT.generateMipMaps = !0, TT._cachedAnisotropicFilteringLevel = null, lT.updateTextureSamplingMode(3, TT), await FT(TT, kT, !0, cT), TT.isReady = !0
    }
    async function aT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CT,
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const KT = TT.Dv(),
        OT = new yT.b(KT, 5),
        xT = new fT.c(KT, OT);
      TT._irradianceTexture = xT, xT._dominantDirection = MT, OT.isCube = !0, OT.format = 5, OT.type = 0, OT.generateMipMaps = !0, OT._cachedAnisotropicFilteringLevel = null, OT.generateMipMaps = !0, OT.width = cT, OT.height = cT, KT.updateTextureSamplingMode(3, OT), await FT(OT, [kT], !1, lT), KT.generateMipMapsForCubemap(OT), OT.isReady = !0
    }
    async function FT(TT, kT, MT) {
      let OT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CT;
      if (!(0, lT.g)(TT.width)) throw new Error("Texture size must be a power of two");
      const IT = (0, KT.ILog2)(TT.width) + 1,
        jT = TT.Dv();
      let vT = !1,
        tT = !1,
        hT = null,
        NT = null,
        QT = null;
      const DT = jT.getCaps();
      DT.textureLOD ? jT._features.supportRenderAndCopyToLodForFloatTextures ? DT.textureHalfFloatRender && DT.textureHalfFloatLinearFiltering ? (vT = !0, TT.type = 2) : DT.textureFloatRender && DT.textureFloatLinearFiltering && (vT = !0, TT.type = 1) : vT = !1 : (vT = !1, tT = MT);
      let aT = 0;
      if (vT) jT.isWebGPU ? (aT = 1, await cT.e(333).then((() => cT(60771)))) : await cT.e(315).then((() => cT(60773))), hT = new xT.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, jT, !1, void 0, TT.type, void 0, null, !1, void 0, aT), TT._isRGBD = !1, TT.invertY = !1, NT = jT.createRenderTargetCubeTexture(TT.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: TT.type,
        format: 5
      });
      else if (TT._isRGBD = !0, TT.invertY = !0, tT) {
        const kT = 3;
        QT = {};
        const cT = TT._lodGenerationScale,
          lT = TT._lodGenerationOffset;
        for (let MT = 0; MT < kT; MT++) {
          const KT = (IT - 1) * cT + lT,
            OT = lT + (KT - lT) * (1 - MT / (kT - 1)),
            xT = Math.round(Math.min(Math.max(OT, 0), KT)),
            AT = new yT.b(jT, 2);
          AT.isCube = !0, AT.invertY = !0, AT.generateMipMaps = !1, jT.updateTextureSamplingMode(2, AT);
          const CT = new fT.c(null);
          switch (CT._isCube = !0, CT._texture = AT, QT[xT] = CT, MT) {
            case 0:
              TT._lodTextureLow = CT;
              break;
            case 1:
              TT._lodTextureMid = CT;
              break;
            case 2:
              TT._lodTextureHigh = CT
          }
        }
      }
      const FT = [];
      for (let cT = 0; cT < kT.length; cT++)
        for (let lT = 0; lT < 6; lT++) {
          const MT = kT[cT][lT],
            KT = (0, AT.h)(MT),
            yT = new Blob([KT], {
              type: OT
            }),
            fT = URL.createObjectURL(yT);
          let xT;
          if (jT._features.forceBitmapOverHTMLImageElement) xT = jT.createImageBitmap(yT, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async kT => await ST(kT, jT, vT, hT, fT, lT, cT, tT, QT, NT, TT)));
          else {
            const kT = new Image;
            kT.src = fT, xT = new Promise(((MT, KT) => {
              kT.onload = () => {
                ST(kT, jT, vT, hT, fT, lT, cT, tT, QT, NT, TT).then((() => MT())).catch((TT => {
                  KT(TT)
                }))
              }, kT.onerror = TT => {
                KT(TT)
              }
            }))
          }
          FT.push(xT)
        }
      if (await Promise.all(FT), kT.length < IT) {
        let cT;
        const lT = Math.pow(2, IT - 1 - kT.length),
          MT = lT * lT * 4;
        switch (TT.type) {
          case 0:
            cT = new Uint8Array(MT);
            break;
          case 2:
            cT = new Uint16Array(MT);
            break;
          case 1:
            cT = new Float32Array(MT)
        }
        for (let KT = kT.length; KT < IT; KT++)
          for (let kT = 0; kT < 6; kT++) jT._uploadArrayBufferViewToTexture(NT?.texture || TT, cT, kT, KT)
      }
      if (NT) {
        const kT = TT._irradianceTexture;
        TT._irradianceTexture = null, jT._releaseTexture(TT), NT._swapAndDie(TT), TT._irradianceTexture = kT
      }
      hT && hT.dispose(), tT && (TT._lodTextureHigh && TT._lodTextureHigh._texture && (TT._lodTextureHigh._texture.isReady = !0), TT._lodTextureMid && TT._lodTextureMid._texture && (TT._lodTextureMid._texture.isReady = !0), TT._lodTextureLow && TT._lodTextureLow._texture && (TT._lodTextureLow._texture.isReady = !0))
    }

    function rT(TT, kT) {
      const cT = (kT = tT(kT)).irradiance;
      if (!cT) return;
      const lT = new OT.e;
      MT.m.FromArrayToRef(cT.x, 0, lT.x), MT.m.FromArrayToRef(cT.y, 0, lT.y), MT.m.FromArrayToRef(cT.z, 0, lT.z), MT.m.FromArrayToRef(cT.xx, 0, lT.xx), MT.m.FromArrayToRef(cT.yy, 0, lT.yy), MT.m.FromArrayToRef(cT.zz, 0, lT.zz), MT.m.FromArrayToRef(cT.yz, 0, lT.yz), MT.m.FromArrayToRef(cT.zx, 0, lT.zx), MT.m.FromArrayToRef(cT.xy, 0, lT.xy), TT._sphericalPolynomial = lT
    }
    var PT = cT(41393);
    class wT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, kT, cT, lT, MT) {
        if (Array.isArray(TT)) return;
        const KT = vT(TT);
        if (KT) {
          kT.width = KT.width, kT.height = KT.width;
          try {
            (0, PT.d)(), rT(kT, KT), QT(kT, TT, KT).then((() => {
              kT.isReady = !0, kT.onLoadedObservable.notifyObservers(kT), kT.onLoadedObservable.clear(), lT && lT()
            }), (TT => {
              MT?.("Can not upload environment levels", TT)
            }))
          } catch (OT) {
            MT?.("Can not upload environment file", OT)
          }
        } else MT && MT("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41393: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(41333),
      MT = cT(39615);
    let KT = !1;

    function OT() {
      KT || (KT = !0, MT.c.prototype._sphericalPolynomialTargetSize = 0, MT.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(MT.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = lT.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((TT => {
              this._texture._sphericalPolynomial = TT, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(TT) {
          this._texture && (this._texture._sphericalPolynomial = TT)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41333: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => xT
    });
    var lT = cT(36892),
      MT = cT(36937),
      KT = cT(39607),
      OT = cT(36901),
      yT = cT(37093);
    class fT {
      constructor(TT, kT, cT, lT) {
        this.name = TT, this.worldAxisForNormal = kT, this.worldAxisForFileX = cT, this.worldAxisForFileY = lT
      }
    }
    class xT {
      static _NearestPow2Floor(TT) {
        return TT <= 1 ? 1 : 1 << Math.floor(Math.log2(TT))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(TT) {
        if (!TT.isCube) return null;
        TT.NJ()?.Dv().flushFramebuffer();
        const kT = TT.getSize().width,
          cT = TT._sphericalPolynomialTargetSize,
          lT = cT > 0 ? this._NearestPow2Floor(cT) : 0,
          MT = !TT.noMipmap && !0 === TT._texture?.generateMipMaps,
          KT = lT > 0 && lT < kT && MT,
          OT = KT ? Math.max(0, Math.round(Math.log2(kT / lT))) : 0,
          yT = KT ? Math.max(1, Math.floor(kT / Math.pow(2, OT))) : kT,
          fT = TT.readPixels(0, OT, void 0, !1),
          xT = TT.readPixels(1, OT, void 0, !1);
        let IT, AT;
        TT.isRenderTarget ? (IT = TT.readPixels(3, OT, void 0, !1), AT = TT.readPixels(2, OT, void 0, !1)) : (IT = TT.readPixels(2, OT, void 0, !1), AT = TT.readPixels(3, OT, void 0, !1));
        const CT = TT.readPixels(4, OT, void 0, !1),
          jT = TT.readPixels(5, OT, void 0, !1),
          vT = TT.gammaSpace,
          tT = lT > 0 && lT < kT && !KT;
        return new Promise((TT => {
          Promise.all([xT, fT, IT, AT, CT, jT]).then((cT => {
            let [MT, KT, OT, fT, xT, IT] = cT, AT = yT;
            if (tT) {
              const TT = 4;
              MT = this._DownsampleFace(MT, kT, lT, TT), KT = this._DownsampleFace(KT, kT, lT, TT), OT = this._DownsampleFace(OT, kT, lT, TT), fT = this._DownsampleFace(fT, kT, lT, TT), xT = this._DownsampleFace(xT, kT, lT, TT), IT = this._DownsampleFace(IT, kT, lT, TT), AT = lT
            }
            const CT = {
              size: AT,
              right: KT,
              left: MT,
              up: OT,
              down: fT,
              front: xT,
              back: IT,
              format: 5,
              type: MT instanceof Float32Array ? 1 : 0,
              gammaSpace: vT
            };
            TT(this.ConvertCubeMapToSphericalPolynomial(CT))
          }))
        }))
      }
      static _AreaElement(TT, kT) {
        return Math.atan2(TT * kT, Math.sqrt(TT * TT + kT * kT + 1))
      }
      static _DownsampleFace(TT, kT, cT, lT) {
        const MT = TT instanceof Float32Array ? TT : Float32Array.from(TT),
          KT = cT * cT * lT,
          OT = new Float32Array(KT),
          yT = kT / cT,
          fT = 1 / (yT * yT);
        for (let IT = 0; IT < cT; IT++) {
          const TT = Math.floor(IT * yT),
            KT = Math.floor((IT + 1) * yT);
          for (let xT = 0; xT < cT; xT++) {
            const AT = Math.floor(xT * yT),
              CT = Math.floor((xT + 1) * yT),
              jT = (IT * cT + xT) * lT;
            for (let cT = 0; cT < lT; cT++) {
              let yT = 0;
              for (let OT = TT; OT < KT; OT++)
                for (let TT = AT; TT < CT; TT++) yT += MT[(OT * kT + TT) * lT + cT];
              OT[jT + cT] = yT * fT
            }
          }
        }
        if (TT instanceof Float32Array) return OT;
        const xT = new(0, TT.constructor)(KT);
        for (let IT = 0; IT < KT; IT++) xT[IT] = OT[IT] + .5 | 0;
        return xT
      }
      static ConvertCubeMapToSphericalPolynomial(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cT = kT > 0 ? this._NearestPow2Floor(kT) : 0;
        if (cT > 0 && TT.size > cT) {
          const kT = 5 === TT.format ? 4 : 3,
            lT = ["right", "left", "up", "down", "front", "back"],
            MT = {};
          for (const KT of lT) MT[KT] = this._DownsampleFace(TT[KT], TT.size, cT, kT);
          TT = {
            ...TT,
            ...MT,
            size: cT
          }
        }
        const lT = new KT.c;
        let fT = 0;
        const xT = 2 / TT.size,
          IT = xT,
          AT = .5 * xT,
          CT = AT - 1;
        for (let KT = 0; KT < 6; KT++) {
          const kT = this._FileFaces[KT],
            cT = TT[kT.name];
          let jT = CT;
          const vT = 5 === TT.format ? 4 : 3;
          for (let KT = 0; KT < TT.size; KT++) {
            let tT = CT;
            for (let IT = 0; IT < TT.size; IT++) {
              const CT = kT.worldAxisForFileX.scale(tT).add(kT.worldAxisForFileY.scale(jT)).add(kT.worldAxisForNormal);
              CT.normalize();
              const hT = this._AreaElement(tT - AT, jT - AT) - this._AreaElement(tT - AT, jT + AT) - this._AreaElement(tT + AT, jT - AT) + this._AreaElement(tT + AT, jT + AT);
              let NT = cT[KT * TT.size * vT + IT * vT + 0],
                QT = cT[KT * TT.size * vT + IT * vT + 1],
                ST = cT[KT * TT.size * vT + IT * vT + 2];
              isNaN(NT) && (NT = 0), isNaN(QT) && (QT = 0), isNaN(ST) && (ST = 0), 0 === TT.type && (NT /= 255, QT /= 255, ST /= 255), TT.gammaSpace && (NT = Math.pow((0, MT.Clamp)(NT), OT.g), QT = Math.pow((0, MT.Clamp)(QT), OT.g), ST = Math.pow((0, MT.Clamp)(ST), OT.g));
              const DT = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const TT = Math.max(NT, QT, ST);
                if (TT > DT) {
                  const kT = DT / TT;
                  NT *= kT, QT *= kT, ST *= kT
                }
              } else NT = (0, MT.Clamp)(NT, 0, DT), QT = (0, MT.Clamp)(QT, 0, DT), ST = (0, MT.Clamp)(ST, 0, DT);
              const aT = new yT.c(NT, QT, ST);
              lT.addLight(CT, aT, hT), fT += hT, tT += xT
            }
            jT += IT
          }
        }
        const jT = 6 * (4 * Math.PI) / 6 / fT;
        return lT.scaleInPlace(jT), lT.convertIncidentRadianceToIrradiance(), lT.convertIrradianceToLambertianRadiance(), KT.e.FromHarmonics(lT)
      }
    }
    xT._FileFaces = [new fT("right", new lT.m(1, 0, 0), new lT.m(0, 0, -1), new lT.m(0, -1, 0)), new fT("left", new lT.m(-1, 0, 0), new lT.m(0, 0, 1), new lT.m(0, -1, 0)), new fT("up", new lT.m(0, 1, 0), new lT.m(1, 0, 0), new lT.m(0, 0, 1)), new fT("down", new lT.m(0, -1, 0), new lT.m(1, 0, 0), new lT.m(0, 0, -1)), new fT("front", new lT.m(0, 0, 1), new lT.m(1, 0, 0), new lT.m(0, -1, 0)), new fT("back", new lT.m(0, 0, -1), new lT.m(-1, 0, 0), new lT.m(0, -1, 0))], xT.MAX_HDRI_VALUE = 4096, xT.PRESERVE_CLAMPED_COLORS = !1
  },
  41368: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT
    });
    var lT = cT(41357),
      MT = cT(41377);
    class KT {
      static ExpandRGBDTexture(TT) {
        const kT = TT._texture;
        if (!kT || !TT.isRGBD) return;
        const MT = kT.Dv(),
          KT = MT.getCaps(),
          OT = kT.isReady;
        let yT = !1;
        KT.textureHalfFloatRender && KT.textureHalfFloatLinearFiltering ? (yT = !0, kT.type = 2) : KT.textureFloatRender && KT.textureFloatLinearFiltering && (yT = !0, kT.type = 1), yT && (kT.isReady = !1, kT._isRGBD = !1, kT.invertY = !1);
        const fT = async () => {
          const KT = MT.isWebGPU,
            OT = KT ? 1 : 0;
          kT.isReady = !1, KT ? await cT.e(333).then((() => cT(60771))) : await cT.e(315).then((() => cT(60773)));
          const yT = new lT.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, MT, !1, void 0, kT.type, void 0, null, !1, void 0, OT);
          yT.externalTextureSamplerBinding = !0;
          const fT = MT.createRenderTargetTexture(kT.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: kT.samplingMode,
            type: kT.type,
            format: 5
          });
          yT.onEffectCreatedObservable.addOnce((cT => {
            cT.executeWhenCompiled((() => {
              yT.onApply = TT => {
                TT._bindTexture("textureSampler", kT), TT.setFloat2("scale", 1, 1)
              }, TT.NJ()?.postProcessManager.directRender([yT], fT, !0), MT.restoreDefaultFramebuffer(), MT._releaseTexture(kT), yT && yT.dispose(), fT._swapAndDie(kT), kT.isReady = !0
            }))
          }))
        };
        yT && (OT ? fT() : TT.onLoadObservable.addOnce(fT))
      }
      static async EncodeTextureToRGBD(TT, kT) {
        let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return kT.Dv().isWebGPU ? await cT.e(334).then((() => cT(60793))) : await cT.e(316).then((() => cT(60788))), await (0, MT.b)("rgbdEncode", TT, kT, lT, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);