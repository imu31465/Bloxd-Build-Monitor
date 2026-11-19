export const id = 298;
export const ids = [298];
export const modules = {
  40616: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      _ENVTextureLoader: () => uT
    });
    var iT = IT(38698),
      zT = IT(36118),
      kT = IT(36156),
      WT = IT(38752),
      XT = IT(38594),
      BT = IT(38758),
      FT = (IT(38882), IT(40618)),
      ST = IT(37660),
      DT = (IT(40629), IT(40639), IT(38851));
    const LT = "image/png",
      xT = [134, 22, 135, 150, 246, 214, 150, 54];

    function cT(TT) {
      const oT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      let IT = 0;
      for (let WT = 0; WT < xT.length; WT++)
        if (oT.getUint8(IT++) !== xT[WT]) return ST.d.Error("Not a babylon environment map"), null;
      let iT, zT = "";
      for (; iT = oT.getUint8(IT++);) zT += String.fromCharCode(iT);
      let kT = JSON.parse(zT);
      return kT = KT(kT), kT.binaryDataPosition = IT, kT.specular && (kT.specular.lodGenerationScale = kT.specular.lodGenerationScale || .8), kT
    }

    function KT(TT) {
      if (TT.version > 2) throw new Error(`Unsupported babylon environment map version "${TT.version}". Latest supported version is "2".`);
      return 2 === TT.version ? TT : TT = {
        ...TT,
        version: 2,
        imageType: LT
      }
    }

    function MT(TT, oT) {
      const IT = (oT = KT(oT)).specular;
      let iT = Math.log2(oT.width);
      if (iT = Math.round(iT) + 1, IT.mipmaps.length !== 6 * iT) throw new Error(`Unsupported specular mipmaps number "${IT.mipmaps.length}"`);
      const zT = new Array(iT);
      for (let kT = 0; kT < iT; kT++) {
        zT[kT] = new Array(6);
        for (let iT = 0; iT < 6; iT++) {
          const WT = IT.mipmaps[6 * kT + iT];
          zT[kT][iT] = new Uint8Array(TT.buffer, TT.byteOffset + oT.binaryDataPosition + WT.position, WT.length)
        }
      }
      return zT
    }

    function rT(TT, oT) {
      oT = KT(oT);
      const IT = new Array(6),
        iT = oT.irradiance?.irradianceTexture;
      if (iT) {
        if (6 !== iT.faces.length) throw new Error(`Incorrect irradiance texture faces number "${iT.faces.length}"`);
        for (let zT = 0; zT < 6; zT++) {
          const kT = iT.faces[zT];
          IT[zT] = new Uint8Array(TT.buffer, TT.byteOffset + oT.binaryDataPosition + kT.position, kT.length)
        }
      }
      return IT
    }

    function AT(TT, oT, IT) {
      const iT = (IT = KT(IT)).specular;
      if (!iT) return Promise.resolve([]);
      TT._lodGenerationScale = iT.lodGenerationScale;
      const kT = [],
        WT = MT(oT, IT);
      kT.push(hT(TT, WT, IT.imageType));
      const XT = IT.irradiance?.irradianceTexture;
      if (XT) {
        const iT = rT(oT, IT);
        let WT = null;
        IT.irradiance?.irradianceTexture?.dominantDirection && (WT = zT.m.FromArray(IT.irradiance.irradianceTexture.dominantDirection)), kT.push(wT(TT, iT, XT.size, IT.imageType, WT))
      }
      return Promise.all(kT)
    }
    async function gT(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST) {
      return await new Promise(((DT, LT) => {
        if (IT) {
          const IT = oT.createTexture(null, !0, !0, null, 1, null, (TT => {
            LT(TT)
          }), TT);
          iT?.onEffectCreatedObservable.addOnce((XT => {
            XT.executeWhenCompiled((() => {
              iT.externalTextureSamplerBinding = !0, iT.onApply = iT => {
                iT._bindTexture("textureSampler", IT), iT.setFloat2("scale", 1, oT._features.needsInvertingBitmap && TT instanceof ImageBitmap ? -1 : 1)
              }, oT.scenes.length && (oT.scenes[0].postProcessManager.directRender([iT], FT, !0, kT, WT), oT.restoreDefaultFramebuffer(), IT.dispose(), URL.revokeObjectURL(zT), DT())
            }))
          }))
        } else {
          if (oT._uploadImageToTexture(ST, TT, kT, WT), XT) {
            const IT = BT[WT];
            IT && oT._uploadImageToTexture(IT._texture, TT, kT, 0)
          }
          DT()
        }
      }))
    }
    async function hT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LT;
      const iT = TT.Zc();
      TT.format = 5, TT.type = 0, TT.generateMipMaps = !0, TT._cachedAnisotropicFilteringLevel = null, iT.updateTextureSamplingMode(3, TT), await mT(TT, oT, !0, IT), TT.isReady = !0
    }
    async function wT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LT,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const kT = TT.Zc(),
        WT = new XT.e(kT, 5),
        FT = new BT.e(kT, WT);
      TT._irradianceTexture = FT, FT._dominantDirection = zT, WT.isCube = !0, WT.format = 5, WT.type = 0, WT.generateMipMaps = !0, WT._cachedAnisotropicFilteringLevel = null, WT.generateMipMaps = !0, WT.width = IT, WT.height = IT, kT.updateTextureSamplingMode(3, WT), await mT(WT, [oT], !1, iT), kT.generateMipMapsForCubemap(WT), WT.isReady = !0
    }
    async function mT(TT, oT, zT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LT;
      if (!(0, iT.h)(TT.width)) throw new Error("Texture size must be a power of two");
      const ST = (0, kT.ILog2)(TT.width) + 1,
        xT = TT.Zc();
      let cT = !1,
        KT = !1,
        MT = null,
        rT = null,
        AT = null;
      const hT = xT.getCaps();
      hT.textureLOD ? xT._features.supportRenderAndCopyToLodForFloatTextures ? hT.textureHalfFloatRender && hT.textureHalfFloatLinearFiltering ? (cT = !0, TT.type = 2) : hT.textureFloatRender && hT.textureFloatLinearFiltering && (cT = !0, TT.type = 1) : cT = !1 : (cT = !1, KT = zT);
      let wT = 0;
      if (cT) xT.isWebGPU ? (wT = 1, await IT.e(332).then((() => IT(60246)))) : await IT.e(314).then((() => IT(60251))), MT = new FT.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, xT, !1, void 0, TT.type, void 0, null, !1, void 0, wT), TT._isRGBD = !1, TT.invertY = !1, rT = xT.createRenderTargetCubeTexture(TT.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: TT.type,
        format: 5
      });
      else if (TT._isRGBD = !0, TT.invertY = !0, KT) {
        const oT = 3;
        AT = {};
        const IT = TT._lodGenerationScale,
          iT = TT._lodGenerationOffset;
        for (let zT = 0; zT < oT; zT++) {
          const kT = (ST - 1) * IT + iT,
            WT = iT + (kT - iT) * (1 - zT / (oT - 1)),
            FT = Math.round(Math.min(Math.max(WT, 0), kT)),
            DT = new XT.e(xT, 2);
          DT.isCube = !0, DT.invertY = !0, DT.generateMipMaps = !1, xT.updateTextureSamplingMode(2, DT);
          const LT = new BT.e(null);
          switch (LT._isCube = !0, LT._texture = DT, AT[FT] = LT, zT) {
            case 0:
              TT._lodTextureLow = LT;
              break;
            case 1:
              TT._lodTextureMid = LT;
              break;
            case 2:
              TT._lodTextureHigh = LT
          }
        }
      }
      const mT = [];
      for (let IT = 0; IT < oT.length; IT++)
        for (let iT = 0; iT < 6; iT++) {
          const zT = oT[IT][iT],
            kT = (0, DT.i)(zT),
            XT = new Blob([kT], {
              type: WT
            }),
            BT = URL.createObjectURL(XT);
          let FT;
          if (xT._features.forceBitmapOverHTMLImageElement) FT = xT.createImageBitmap(XT, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async oT => await gT(oT, xT, cT, MT, BT, iT, IT, KT, AT, rT, TT)));
          else {
            const oT = new Image;
            oT.src = BT, FT = new Promise(((zT, kT) => {
              oT.onload = () => {
                gT(oT, xT, cT, MT, BT, iT, IT, KT, AT, rT, TT).then((() => zT())).catch((TT => {
                  kT(TT)
                }))
              }, oT.onerror = TT => {
                kT(TT)
              }
            }))
          }
          mT.push(FT)
        }
      if (await Promise.all(mT), oT.length < ST) {
        let IT;
        const iT = Math.pow(2, ST - 1 - oT.length),
          zT = iT * iT * 4;
        switch (TT.type) {
          case 0:
            IT = new Uint8Array(zT);
            break;
          case 2:
            IT = new Uint16Array(zT);
            break;
          case 1:
            IT = new Float32Array(zT)
        }
        for (let kT = oT.length; kT < ST; kT++)
          for (let oT = 0; oT < 6; oT++) xT._uploadArrayBufferViewToTexture(rT?.texture || TT, IT, oT, kT)
      }
      if (rT) {
        const oT = TT._irradianceTexture;
        TT._irradianceTexture = null, xT._releaseTexture(TT), rT._swapAndDie(TT), TT._irradianceTexture = oT
      }
      MT && MT.dispose(), KT && (TT._lodTextureHigh && TT._lodTextureHigh._texture && (TT._lodTextureHigh._texture.isReady = !0), TT._lodTextureMid && TT._lodTextureMid._texture && (TT._lodTextureMid._texture.isReady = !0), TT._lodTextureLow && TT._lodTextureLow._texture && (TT._lodTextureLow._texture.isReady = !0))
    }

    function eT(TT, oT) {
      const IT = (oT = KT(oT)).irradiance;
      if (!IT) return;
      const iT = new WT.c;
      zT.m.FromArrayToRef(IT.x, 0, iT.x), zT.m.FromArrayToRef(IT.y, 0, iT.y), zT.m.FromArrayToRef(IT.z, 0, iT.z), zT.m.FromArrayToRef(IT.xx, 0, iT.xx), zT.m.FromArrayToRef(IT.yy, 0, iT.yy), zT.m.FromArrayToRef(IT.zz, 0, iT.zz), zT.m.FromArrayToRef(IT.yz, 0, iT.yz), zT.m.FromArrayToRef(IT.zx, 0, iT.zx), zT.m.FromArrayToRef(IT.xy, 0, iT.xy), TT._sphericalPolynomial = iT
    }
    var RT = IT(40643);
    class uT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, oT, IT, iT, zT) {
        if (Array.isArray(TT)) return;
        const kT = cT(TT);
        if (kT) {
          oT.width = kT.width, oT.height = kT.width;
          try {
            (0, RT.c)(), eT(oT, kT), AT(oT, TT, kT).then((() => {
              oT.isReady = !0, oT.onLoadedObservable.notifyObservers(oT), oT.onLoadedObservable.clear(), iT && iT()
            }), (TT => {
              zT?.("Can not upload environment levels", TT)
            }))
          } catch (WT) {
            zT?.("Can not upload environment file", WT)
          }
        } else zT && zT("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  40643: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT
    });
    var iT = IT(40597),
      zT = IT(38758);
    let kT = !1;

    function WT() {
      kT || (kT = !0, zT.e.prototype._sphericalPolynomialTargetSize = 0, zT.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(zT.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = iT.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((TT => {
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
  40597: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => FT
    });
    var iT = IT(36118),
      zT = IT(36156),
      kT = IT(38752),
      WT = IT(36125),
      XT = IT(36177);
    class BT {
      constructor(TT, oT, IT, iT) {
        this.name = TT, this.worldAxisForNormal = oT, this.worldAxisForFileX = IT, this.worldAxisForFileY = iT
      }
    }
    class FT {
      static _NearestPow2Floor(TT) {
        return TT <= 1 ? 1 : 1 << Math.floor(Math.log2(TT))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(TT) {
        if (!TT.isCube) return null;
        TT.pC()?.Zc().flushFramebuffer();
        const oT = TT.getSize().width,
          IT = TT._sphericalPolynomialTargetSize,
          iT = IT > 0 ? this._NearestPow2Floor(IT) : 0,
          zT = !TT.noMipmap && !0 === TT._texture?.generateMipMaps,
          kT = iT > 0 && iT < oT && zT,
          WT = kT ? Math.max(0, Math.round(Math.log2(oT / iT))) : 0,
          XT = kT ? Math.max(1, Math.floor(oT / Math.pow(2, WT))) : oT,
          BT = TT.readPixels(0, WT, void 0, !1),
          FT = TT.readPixels(1, WT, void 0, !1);
        let ST, DT;
        TT.isRenderTarget ? (ST = TT.readPixels(3, WT, void 0, !1), DT = TT.readPixels(2, WT, void 0, !1)) : (ST = TT.readPixels(2, WT, void 0, !1), DT = TT.readPixels(3, WT, void 0, !1));
        const LT = TT.readPixels(4, WT, void 0, !1),
          xT = TT.readPixels(5, WT, void 0, !1),
          cT = TT.gammaSpace,
          KT = iT > 0 && iT < oT && !kT;
        return new Promise((TT => {
          Promise.all([FT, BT, ST, DT, LT, xT]).then((IT => {
            let [zT, kT, WT, BT, FT, ST] = IT, DT = XT;
            if (KT) {
              const TT = 4;
              zT = this._DownsampleFace(zT, oT, iT, TT), kT = this._DownsampleFace(kT, oT, iT, TT), WT = this._DownsampleFace(WT, oT, iT, TT), BT = this._DownsampleFace(BT, oT, iT, TT), FT = this._DownsampleFace(FT, oT, iT, TT), ST = this._DownsampleFace(ST, oT, iT, TT), DT = iT
            }
            const LT = {
              size: DT,
              right: kT,
              left: zT,
              up: WT,
              down: BT,
              front: FT,
              back: ST,
              format: 5,
              type: zT instanceof Float32Array ? 1 : 0,
              gammaSpace: cT
            };
            TT(this.ConvertCubeMapToSphericalPolynomial(LT))
          }))
        }))
      }
      static _AreaElement(TT, oT) {
        return Math.atan2(TT * oT, Math.sqrt(TT * TT + oT * oT + 1))
      }
      static _DownsampleFace(TT, oT, IT, iT) {
        const zT = TT instanceof Float32Array ? TT : Float32Array.from(TT),
          kT = IT * IT * iT,
          WT = new Float32Array(kT),
          XT = oT / IT,
          BT = 1 / (XT * XT);
        for (let ST = 0; ST < IT; ST++) {
          const TT = Math.floor(ST * XT),
            kT = Math.floor((ST + 1) * XT);
          for (let FT = 0; FT < IT; FT++) {
            const DT = Math.floor(FT * XT),
              LT = Math.floor((FT + 1) * XT),
              xT = (ST * IT + FT) * iT;
            for (let IT = 0; IT < iT; IT++) {
              let XT = 0;
              for (let WT = TT; WT < kT; WT++)
                for (let TT = DT; TT < LT; TT++) XT += zT[(WT * oT + TT) * iT + IT];
              WT[xT + IT] = XT * BT
            }
          }
        }
        if (TT instanceof Float32Array) return WT;
        const FT = new(0, TT.constructor)(kT);
        for (let ST = 0; ST < kT; ST++) FT[ST] = WT[ST] + .5 | 0;
        return FT
      }
      static ConvertCubeMapToSphericalPolynomial(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const IT = oT > 0 ? this._NearestPow2Floor(oT) : 0;
        if (IT > 0 && TT.size > IT) {
          const oT = 5 === TT.format ? 4 : 3,
            iT = ["right", "left", "up", "down", "front", "back"],
            zT = {};
          for (const kT of iT) zT[kT] = this._DownsampleFace(TT[kT], TT.size, IT, oT);
          TT = {
            ...TT,
            ...zT,
            size: IT
          }
        }
        const iT = new kT.b;
        let BT = 0;
        const FT = 2 / TT.size,
          ST = FT,
          DT = .5 * FT,
          LT = DT - 1;
        for (let kT = 0; kT < 6; kT++) {
          const oT = this._FileFaces[kT],
            IT = TT[oT.name];
          let xT = LT;
          const cT = 5 === TT.format ? 4 : 3;
          for (let kT = 0; kT < TT.size; kT++) {
            let KT = LT;
            for (let ST = 0; ST < TT.size; ST++) {
              const LT = oT.worldAxisForFileX.scale(KT).add(oT.worldAxisForFileY.scale(xT)).add(oT.worldAxisForNormal);
              LT.normalize();
              const MT = this._AreaElement(KT - DT, xT - DT) - this._AreaElement(KT - DT, xT + DT) - this._AreaElement(KT + DT, xT - DT) + this._AreaElement(KT + DT, xT + DT);
              let rT = IT[kT * TT.size * cT + ST * cT + 0],
                AT = IT[kT * TT.size * cT + ST * cT + 1],
                gT = IT[kT * TT.size * cT + ST * cT + 2];
              isNaN(rT) && (rT = 0), isNaN(AT) && (AT = 0), isNaN(gT) && (gT = 0), 0 === TT.type && (rT /= 255, AT /= 255, gT /= 255), TT.gammaSpace && (rT = Math.pow((0, zT.Clamp)(rT), WT.l), AT = Math.pow((0, zT.Clamp)(AT), WT.l), gT = Math.pow((0, zT.Clamp)(gT), WT.l));
              const hT = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const TT = Math.max(rT, AT, gT);
                if (TT > hT) {
                  const oT = hT / TT;
                  rT *= oT, AT *= oT, gT *= oT
                }
              } else rT = (0, zT.Clamp)(rT, 0, hT), AT = (0, zT.Clamp)(AT, 0, hT), gT = (0, zT.Clamp)(gT, 0, hT);
              const wT = new XT.e(rT, AT, gT);
              iT.addLight(LT, wT, MT), BT += MT, KT += FT
            }
            xT += ST
          }
        }
        const xT = 6 * (4 * Math.PI) / 6 / BT;
        return iT.scaleInPlace(xT), iT.convertIncidentRadianceToIrradiance(), iT.convertIrradianceToLambertianRadiance(), kT.c.FromHarmonics(iT)
      }
    }
    FT._FileFaces = [new BT("right", new iT.m(1, 0, 0), new iT.m(0, 0, -1), new iT.m(0, -1, 0)), new BT("left", new iT.m(-1, 0, 0), new iT.m(0, 0, 1), new iT.m(0, -1, 0)), new BT("up", new iT.m(0, 1, 0), new iT.m(1, 0, 0), new iT.m(0, 0, 1)), new BT("down", new iT.m(0, -1, 0), new iT.m(1, 0, 0), new iT.m(0, 0, -1)), new BT("front", new iT.m(0, 0, 1), new iT.m(1, 0, 0), new iT.m(0, -1, 0)), new BT("back", new iT.m(0, 0, -1), new iT.m(-1, 0, 0), new iT.m(0, -1, 0))], FT.MAX_HDRI_VALUE = 4096, FT.PRESERVE_CLAMPED_COLORS = !1
  },
  40629: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(40618),
      zT = IT(40631);
    class kT {
      static ExpandRGBDTexture(TT) {
        const oT = TT._texture;
        if (!oT || !TT.isRGBD) return;
        const zT = oT.Zc(),
          kT = zT.getCaps(),
          WT = oT.isReady;
        let XT = !1;
        kT.textureHalfFloatRender && kT.textureHalfFloatLinearFiltering ? (XT = !0, oT.type = 2) : kT.textureFloatRender && kT.textureFloatLinearFiltering && (XT = !0, oT.type = 1), XT && (oT.isReady = !1, oT._isRGBD = !1, oT.invertY = !1);
        const BT = async () => {
          const kT = zT.isWebGPU,
            WT = kT ? 1 : 0;
          oT.isReady = !1, kT ? await IT.e(332).then((() => IT(60246))) : await IT.e(314).then((() => IT(60251)));
          const XT = new iT.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, zT, !1, void 0, oT.type, void 0, null, !1, void 0, WT);
          XT.externalTextureSamplerBinding = !0;
          const BT = zT.createRenderTargetTexture(oT.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: oT.samplingMode,
            type: oT.type,
            format: 5
          });
          XT.onEffectCreatedObservable.addOnce((IT => {
            IT.executeWhenCompiled((() => {
              XT.onApply = TT => {
                TT._bindTexture("textureSampler", oT), TT.setFloat2("scale", 1, 1)
              }, TT.pC()?.postProcessManager.directRender([XT], BT, !0), zT.restoreDefaultFramebuffer(), zT._releaseTexture(oT), XT && XT.dispose(), BT._swapAndDie(oT), oT.isReady = !0
            }))
          }))
        };
        XT && (WT ? BT() : TT.onLoadObservable.addOnce(BT))
      }
      static async EncodeTextureToRGBD(TT, oT) {
        let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return oT.Zc().isWebGPU ? await IT.e(333).then((() => IT(60271))) : await IT.e(315).then((() => IT(60264))), await (0, zT.b)("rgbdEncode", TT, oT, iT, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);