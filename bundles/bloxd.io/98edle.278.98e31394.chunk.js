export const id = 278;
export const ids = [278];
export const modules = {
  39238: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      _ENVTextureLoader: () => rR
    });
    var wW = MW(37520),
      CW = MW(35324),
      zR = MW(35353),
      AW = MW(37574),
      bR = MW(37424),
      yR = MW(37579),
      NW = (MW(37677), MW(39244)),
      eW = MW(36721),
      BW = (MW(39258), MW(39287), MW(37652));
    const tR = "image/png",
      TW = [134, 22, 135, 150, 246, 214, 150, 54];

    function gR(WW) {
      const RW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
      let MW = 0;
      for (let AW = 0; AW < TW.length; AW++)
        if (RW.getUint8(MW++) !== TW[AW]) return eW.b.Error("Not a babylon environment map"), null;
      let wW, CW = "";
      for (; wW = RW.getUint8(MW++);) CW += String.fromCharCode(wW);
      let zR = JSON.parse(CW);
      return zR = iR(zR), zR.binaryDataPosition = MW, zR.specular && (zR.specular.lodGenerationScale = zR.specular.lodGenerationScale || .8), zR
    }

    function iR(WW) {
      if (WW.version > 2) throw new Error(`Unsupported babylon environment map version "${WW.version}". Latest supported version is "2".`);
      return 2 === WW.version ? WW : WW = {
        ...WW,
        version: 2,
        imageType: tR
      }
    }

    function YW(WW, RW) {
      const MW = (RW = iR(RW)).specular;
      let wW = Math.log2(RW.width);
      if (wW = Math.round(wW) + 1, MW.mipmaps.length !== 6 * wW) throw new Error(`Unsupported specular mipmaps number "${MW.mipmaps.length}"`);
      const CW = new Array(wW);
      for (let zR = 0; zR < wW; zR++) {
        CW[zR] = new Array(6);
        for (let wW = 0; wW < 6; wW++) {
          const AW = MW.mipmaps[6 * zR + wW];
          CW[zR][wW] = new Uint8Array(WW.buffer, WW.byteOffset + RW.binaryDataPosition + AW.position, AW.length)
        }
      }
      return CW
    }

    function JW(WW, RW) {
      RW = iR(RW);
      const MW = new Array(6),
        wW = RW.irradiance?.irradianceTexture;
      if (wW) {
        if (6 !== wW.faces.length) throw new Error(`Incorrect irradiance texture faces number "${wW.faces.length}"`);
        for (let CW = 0; CW < 6; CW++) {
          const zR = wW.faces[CW];
          MW[CW] = new Uint8Array(WW.buffer, WW.byteOffset + RW.binaryDataPosition + zR.position, zR.length)
        }
      }
      return MW
    }

    function PW(WW, RW, MW) {
      const wW = (MW = iR(MW)).specular;
      if (!wW) return Promise.resolve([]);
      WW._lodGenerationScale = wW.lodGenerationScale;
      const zR = [],
        AW = YW(RW, MW);
      zR.push(oW(WW, AW, MW.imageType));
      const bR = MW.irradiance?.irradianceTexture;
      if (bR) {
        const wW = JW(RW, MW);
        let AW = null;
        MW.irradiance?.irradianceTexture?.dominantDirection && (AW = CW.q.FromArray(MW.irradiance.irradianceTexture.dominantDirection)), zR.push(lW(WW, wW, bR.size, MW.imageType, AW))
      }
      return Promise.all(zR)
    }
    async function IW(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW) {
      return await new Promise(((BW, tR) => {
        if (MW) {
          const MW = RW.createTexture(null, !0, !0, null, 1, null, (WW => {
            tR(WW)
          }), WW);
          wW?.onEffectCreatedObservable.addOnce((bR => {
            bR.executeWhenCompiled((() => {
              wW.externalTextureSamplerBinding = !0, wW.onApply = wW => {
                wW._bindTexture("textureSampler", MW), wW.setFloat2("scale", 1, RW._features.needsInvertingBitmap && WW instanceof ImageBitmap ? -1 : 1)
              }, RW.scenes.length && (RW.scenes[0].postProcessManager.directRender([wW], NW, !0, zR, AW), RW.restoreDefaultFramebuffer(), MW.dispose(), URL.revokeObjectURL(CW), BW())
            }))
          }))
        } else {
          if (RW._uploadImageToTexture(eW, WW, zR, AW), bR) {
            const MW = yR[AW];
            MW && RW._uploadImageToTexture(MW._texture, WW, zR, 0)
          }
          BW()
        }
      }))
    }
    async function oW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tR;
      const wW = WW.mC();
      WW.format = 5, WW.type = 0, WW.generateMipMaps = !0, WW._cachedAnisotropicFilteringLevel = null, wW.updateTextureSamplingMode(3, WW), await FW(WW, RW, !0, MW), WW.isReady = !0
    }
    async function lW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tR,
        CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const zR = WW.mC(),
        AW = new bR.e(zR, 5),
        NW = new yR.c(zR, AW);
      WW._irradianceTexture = NW, NW._dominantDirection = CW, AW.isCube = !0, AW.format = 5, AW.type = 0, AW.generateMipMaps = !0, AW._cachedAnisotropicFilteringLevel = null, AW.generateMipMaps = !0, AW.width = MW, AW.height = MW, zR.updateTextureSamplingMode(3, AW), await FW(AW, [RW], !1, wW), zR.generateMipMapsForCubemap(AW), AW.isReady = !0
    }
    async function FW(WW, RW, CW) {
      let AW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tR;
      if (!(0, wW.f)(WW.width)) throw new Error("Texture size must be a power of two");
      const eW = (0, zR.ILog2)(WW.width) + 1,
        TW = WW.mC();
      let gR = !1,
        iR = !1,
        YW = null,
        JW = null,
        PW = null;
      const oW = TW.getCaps();
      oW.textureLOD ? TW._features.supportRenderAndCopyToLodForFloatTextures ? oW.textureHalfFloatRender && oW.textureHalfFloatLinearFiltering ? (gR = !0, WW.type = 2) : oW.textureFloatRender && oW.textureFloatLinearFiltering && (gR = !0, WW.type = 1) : gR = !1 : (gR = !1, iR = CW);
      let lW = 0;
      if (gR) TW.isWebGPU ? (lW = 1, await MW.e(312).then((() => MW(58797)))) : await MW.e(294).then((() => MW(58804))), YW = new NW.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, TW, !1, void 0, WW.type, void 0, null, !1, void 0, lW), WW._isRGBD = !1, WW.invertY = !1, JW = TW.createRenderTargetCubeTexture(WW.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: WW.type,
        format: 5
      });
      else if (WW._isRGBD = !0, WW.invertY = !0, iR) {
        const RW = 3;
        PW = {};
        const MW = WW._lodGenerationScale,
          wW = WW._lodGenerationOffset;
        for (let CW = 0; CW < RW; CW++) {
          const zR = (eW - 1) * MW + wW,
            AW = wW + (zR - wW) * (1 - CW / (RW - 1)),
            NW = Math.round(Math.min(Math.max(AW, 0), zR)),
            BW = new bR.e(TW, 2);
          BW.isCube = !0, BW.invertY = !0, BW.generateMipMaps = !1, TW.updateTextureSamplingMode(2, BW);
          const tR = new yR.c(null);
          switch (tR._isCube = !0, tR._texture = BW, PW[NW] = tR, CW) {
            case 0:
              WW._lodTextureLow = tR;
              break;
            case 1:
              WW._lodTextureMid = tR;
              break;
            case 2:
              WW._lodTextureHigh = tR
          }
        }
      }
      const FW = [];
      for (let MW = 0; MW < RW.length; MW++)
        for (let wW = 0; wW < 6; wW++) {
          const CW = RW[MW][wW],
            zR = (0, BW.m)(CW),
            bR = new Blob([zR], {
              type: AW
            }),
            yR = URL.createObjectURL(bR);
          let NW;
          if (TW._features.forceBitmapOverHTMLImageElement) NW = TW.createImageBitmap(bR, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async RW => await IW(RW, TW, gR, YW, yR, wW, MW, iR, PW, JW, WW)));
          else {
            const RW = new Image;
            RW.src = yR, NW = new Promise(((CW, zR) => {
              RW.onload = () => {
                IW(RW, TW, gR, YW, yR, wW, MW, iR, PW, JW, WW).then((() => CW())).catch((WW => {
                  zR(WW)
                }))
              }, RW.onerror = WW => {
                zR(WW)
              }
            }))
          }
          FW.push(NW)
        }
      if (await Promise.all(FW), RW.length < eW) {
        let MW;
        const wW = Math.pow(2, eW - 1 - RW.length),
          CW = wW * wW * 4;
        switch (WW.type) {
          case 0:
            MW = new Uint8Array(CW);
            break;
          case 2:
            MW = new Uint16Array(CW);
            break;
          case 1:
            MW = new Float32Array(CW)
        }
        for (let zR = RW.length; zR < eW; zR++)
          for (let RW = 0; RW < 6; RW++) TW._uploadArrayBufferViewToTexture(JW?.texture || WW, MW, RW, zR)
      }
      if (JW) {
        const RW = WW._irradianceTexture;
        WW._irradianceTexture = null, TW._releaseTexture(WW), JW._swapAndDie(WW), WW._irradianceTexture = RW
      }
      YW && YW.dispose(), iR && (WW._lodTextureHigh && WW._lodTextureHigh._texture && (WW._lodTextureHigh._texture.isReady = !0), WW._lodTextureMid && WW._lodTextureMid._texture && (WW._lodTextureMid._texture.isReady = !0), WW._lodTextureLow && WW._lodTextureLow._texture && (WW._lodTextureLow._texture.isReady = !0))
    }

    function fW(WW, RW) {
      const MW = (RW = iR(RW)).irradiance;
      if (!MW) return;
      const wW = new AW.d;
      CW.q.FromArrayToRef(MW.x, 0, wW.x), CW.q.FromArrayToRef(MW.y, 0, wW.y), CW.q.FromArrayToRef(MW.z, 0, wW.z), CW.q.FromArrayToRef(MW.xx, 0, wW.xx), CW.q.FromArrayToRef(MW.yy, 0, wW.yy), CW.q.FromArrayToRef(MW.zz, 0, wW.zz), CW.q.FromArrayToRef(MW.yz, 0, wW.yz), CW.q.FromArrayToRef(MW.zx, 0, wW.zx), CW.q.FromArrayToRef(MW.xy, 0, wW.xy), WW._sphericalPolynomial = wW
    }
    var QW = MW(39290);
    class rR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(WW, RW, MW, wW, CW) {
        if (Array.isArray(WW)) return;
        const zR = gR(WW);
        if (zR) {
          RW.width = zR.width, RW.height = zR.width;
          try {
            (0, QW.c)(), fW(RW, zR), PW(RW, WW, zR).then((() => {
              RW.isReady = !0, RW.onLoadedObservable.notifyObservers(RW), RW.onLoadedObservable.clear(), wW && wW()
            }), (WW => {
              CW?.("Can not upload environment levels", WW)
            }))
          } catch (AW) {
            CW?.("Can not upload environment file", AW)
          }
        } else CW && CW("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  39290: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(39222),
      CW = MW(37579);
    let zR = !1;

    function AW() {
      zR || (zR = !0, CW.c.prototype._sphericalPolynomialTargetSize = 0, CW.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(CW.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = wW.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((WW => {
              this._texture._sphericalPolynomial = WW, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(WW) {
          this._texture && (this._texture._sphericalPolynomial = WW)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  39222: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW
    });
    var wW = MW(35324),
      CW = MW(35353),
      zR = MW(37574),
      AW = MW(35328),
      bR = MW(35376);
    class yR {
      constructor(WW, RW, MW, wW) {
        this.name = WW, this.worldAxisForNormal = RW, this.worldAxisForFileX = MW, this.worldAxisForFileY = wW
      }
    }
    class NW {
      static _NearestPow2Floor(WW) {
        return WW <= 1 ? 1 : 1 << Math.floor(Math.log2(WW))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(WW) {
        if (!WW.isCube) return null;
        WW.QRW()?.mC().flushFramebuffer();
        const RW = WW.getSize().width,
          MW = WW._sphericalPolynomialTargetSize,
          wW = MW > 0 ? this._NearestPow2Floor(MW) : 0,
          CW = !WW.noMipmap && !0 === WW._texture?.generateMipMaps,
          zR = wW > 0 && wW < RW && CW,
          AW = zR ? Math.max(0, Math.round(Math.log2(RW / wW))) : 0,
          bR = zR ? Math.max(1, Math.floor(RW / Math.pow(2, AW))) : RW,
          yR = WW.readPixels(0, AW, void 0, !1),
          NW = WW.readPixels(1, AW, void 0, !1);
        let eW, BW;
        WW.isRenderTarget ? (eW = WW.readPixels(3, AW, void 0, !1), BW = WW.readPixels(2, AW, void 0, !1)) : (eW = WW.readPixels(2, AW, void 0, !1), BW = WW.readPixels(3, AW, void 0, !1));
        const tR = WW.readPixels(4, AW, void 0, !1),
          TW = WW.readPixels(5, AW, void 0, !1),
          gR = WW.gammaSpace,
          iR = wW > 0 && wW < RW && !zR;
        return new Promise((WW => {
          Promise.all([NW, yR, eW, BW, tR, TW]).then((MW => {
            let [CW, zR, AW, yR, NW, eW] = MW, BW = bR;
            if (iR) {
              const WW = 4;
              CW = this._DownsampleFace(CW, RW, wW, WW), zR = this._DownsampleFace(zR, RW, wW, WW), AW = this._DownsampleFace(AW, RW, wW, WW), yR = this._DownsampleFace(yR, RW, wW, WW), NW = this._DownsampleFace(NW, RW, wW, WW), eW = this._DownsampleFace(eW, RW, wW, WW), BW = wW
            }
            const tR = {
              size: BW,
              right: zR,
              left: CW,
              up: AW,
              down: yR,
              front: NW,
              back: eW,
              format: 5,
              type: CW instanceof Float32Array ? 1 : 0,
              gammaSpace: gR
            };
            WW(this.ConvertCubeMapToSphericalPolynomial(tR))
          }))
        }))
      }
      static _AreaElement(WW, RW) {
        return Math.atan2(WW * RW, Math.sqrt(WW * WW + RW * RW + 1))
      }
      static _DownsampleFace(WW, RW, MW, wW) {
        const CW = WW instanceof Float32Array ? WW : Float32Array.from(WW),
          zR = MW * MW * wW,
          AW = new Float32Array(zR),
          bR = RW / MW,
          yR = 1 / (bR * bR);
        for (let eW = 0; eW < MW; eW++) {
          const WW = Math.floor(eW * bR),
            zR = Math.floor((eW + 1) * bR);
          for (let NW = 0; NW < MW; NW++) {
            const BW = Math.floor(NW * bR),
              tR = Math.floor((NW + 1) * bR),
              TW = (eW * MW + NW) * wW;
            for (let MW = 0; MW < wW; MW++) {
              let bR = 0;
              for (let AW = WW; AW < zR; AW++)
                for (let WW = BW; WW < tR; WW++) bR += CW[(AW * RW + WW) * wW + MW];
              AW[TW + MW] = bR * yR
            }
          }
        }
        if (WW instanceof Float32Array) return AW;
        const NW = new(0, WW.constructor)(zR);
        for (let eW = 0; eW < zR; eW++) NW[eW] = AW[eW] + .5 | 0;
        return NW
      }
      static ConvertCubeMapToSphericalPolynomial(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const MW = RW > 0 ? this._NearestPow2Floor(RW) : 0;
        if (MW > 0 && WW.size > MW) {
          const RW = 5 === WW.format ? 4 : 3,
            wW = ["right", "left", "up", "down", "front", "back"],
            CW = {};
          for (const zR of wW) CW[zR] = this._DownsampleFace(WW[zR], WW.size, MW, RW);
          WW = {
            ...WW,
            ...CW,
            size: MW
          }
        }
        const wW = new zR.c;
        let yR = 0;
        const NW = 2 / WW.size,
          eW = NW,
          BW = .5 * NW,
          tR = BW - 1;
        for (let zR = 0; zR < 6; zR++) {
          const RW = this._FileFaces[zR],
            MW = WW[RW.name];
          let TW = tR;
          const gR = 5 === WW.format ? 4 : 3;
          for (let zR = 0; zR < WW.size; zR++) {
            let iR = tR;
            for (let eW = 0; eW < WW.size; eW++) {
              const tR = RW.worldAxisForFileX.scale(iR).add(RW.worldAxisForFileY.scale(TW)).add(RW.worldAxisForNormal);
              tR.normalize();
              const YW = this._AreaElement(iR - BW, TW - BW) - this._AreaElement(iR - BW, TW + BW) - this._AreaElement(iR + BW, TW - BW) + this._AreaElement(iR + BW, TW + BW);
              let JW = MW[zR * WW.size * gR + eW * gR + 0],
                PW = MW[zR * WW.size * gR + eW * gR + 1],
                IW = MW[zR * WW.size * gR + eW * gR + 2];
              isNaN(JW) && (JW = 0), isNaN(PW) && (PW = 0), isNaN(IW) && (IW = 0), 0 === WW.type && (JW /= 255, PW /= 255, IW /= 255), WW.gammaSpace && (JW = Math.pow((0, CW.Clamp)(JW), AW.k), PW = Math.pow((0, CW.Clamp)(PW), AW.k), IW = Math.pow((0, CW.Clamp)(IW), AW.k));
              const oW = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const WW = Math.max(JW, PW, IW);
                if (WW > oW) {
                  const RW = oW / WW;
                  JW *= RW, PW *= RW, IW *= RW
                }
              } else JW = (0, CW.Clamp)(JW, 0, oW), PW = (0, CW.Clamp)(PW, 0, oW), IW = (0, CW.Clamp)(IW, 0, oW);
              const lW = new bR.d(JW, PW, IW);
              wW.addLight(tR, lW, YW), yR += YW, iR += NW
            }
            TW += eW
          }
        }
        const TW = 6 * (4 * Math.PI) / 6 / yR;
        return wW.scaleInPlace(TW), wW.convertIncidentRadianceToIrradiance(), wW.convertIrradianceToLambertianRadiance(), zR.d.FromHarmonics(wW)
      }
    }
    NW._FileFaces = [new yR("right", new wW.q(1, 0, 0), new wW.q(0, 0, -1), new wW.q(0, -1, 0)), new yR("left", new wW.q(-1, 0, 0), new wW.q(0, 0, 1), new wW.q(0, -1, 0)), new yR("up", new wW.q(0, 1, 0), new wW.q(1, 0, 0), new wW.q(0, 0, 1)), new yR("down", new wW.q(0, -1, 0), new wW.q(1, 0, 0), new wW.q(0, 0, -1)), new yR("front", new wW.q(0, 0, 1), new wW.q(1, 0, 0), new wW.q(0, -1, 0)), new yR("back", new wW.q(0, 0, -1), new wW.q(-1, 0, 0), new wW.q(0, -1, 0))], NW.MAX_HDRI_VALUE = 4096, NW.PRESERVE_CLAMPED_COLORS = !1
  },
  39258: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = MW(39244),
      CW = MW(39265);
    class zR {
      static ExpandRGBDTexture(WW) {
        const RW = WW._texture;
        if (!RW || !WW.isRGBD) return;
        const CW = RW.mC(),
          zR = CW.getCaps(),
          AW = RW.isReady;
        let bR = !1;
        zR.textureHalfFloatRender && zR.textureHalfFloatLinearFiltering ? (bR = !0, RW.type = 2) : zR.textureFloatRender && zR.textureFloatLinearFiltering && (bR = !0, RW.type = 1), bR && (RW.isReady = !1, RW._isRGBD = !1, RW.invertY = !1);
        const yR = async () => {
          const zR = CW.isWebGPU,
            AW = zR ? 1 : 0;
          RW.isReady = !1, zR ? await MW.e(312).then((() => MW(58797))) : await MW.e(294).then((() => MW(58804)));
          const bR = new wW.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, CW, !1, void 0, RW.type, void 0, null, !1, void 0, AW);
          bR.externalTextureSamplerBinding = !0;
          const yR = CW.createRenderTargetTexture(RW.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: RW.samplingMode,
            type: RW.type,
            format: 5
          });
          bR.onEffectCreatedObservable.addOnce((MW => {
            MW.executeWhenCompiled((() => {
              bR.onApply = WW => {
                WW._bindTexture("textureSampler", RW), WW.setFloat2("scale", 1, 1)
              }, WW.QRW()?.postProcessManager.directRender([bR], yR, !0), CW.restoreDefaultFramebuffer(), CW._releaseTexture(RW), bR && bR.dispose(), yR._swapAndDie(RW), RW.isReady = !0
            }))
          }))
        };
        bR && (AW ? yR() : WW.onLoadObservable.addOnce(yR))
      }
      static async EncodeTextureToRGBD(WW, RW) {
        let wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return RW.mC().isWebGPU ? await MW.e(313).then((() => MW(58815))) : await MW.e(295).then((() => MW(58813))), await (0, CW.b)("rgbdEncode", WW, RW, wW, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);