export const id = 617;
export const ids = [617];
export const modules = {
  45261: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      _ENVTextureLoader: () => bH
    });
    var AH = LH(41222),
      rH = LH(37963),
      SH = LH(38002),
      hH = LH(41275),
      tH = LH(41122),
      zH = LH(41283),
      CH = (LH(41383), LH(45266)),
      EH = LH(39595),
      XH = (LH(45276), LH(45299), LH(41356));
    const GH = "image/png",
      YH = [134, 22, 135, 150, 246, 214, 150, 54];

    function uH(HH) {
      const BH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
      let LH = 0;
      for (let hH = 0; hH < YH.length; hH++)
        if (BH.getUint8(LH++) !== YH[hH]) return EH.e.Error("Not a babylon environment map"), null;
      let AH, rH = "";
      for (; AH = BH.getUint8(LH++);) rH += String.fromCharCode(AH);
      let SH = JSON.parse(rH);
      return SH = QH(SH), SH.binaryDataPosition = LH, SH.specular && (SH.specular.lodGenerationScale = SH.specular.lodGenerationScale || .8), SH
    }

    function QH(HH) {
      if (HH.version > 2) throw new Error(`Unsupported babylon environment map version "${HH.version}". Latest supported version is "2".`);
      return 2 === HH.version ? HH : HH = {
        ...HH,
        version: 2,
        imageType: GH
      }
    }

    function WH(HH, BH) {
      const LH = (BH = QH(BH)).specular;
      let AH = Math.log2(BH.width);
      if (AH = Math.round(AH) + 1, LH.mipmaps.length !== 6 * AH) throw new Error(`Unsupported specular mipmaps number "${LH.mipmaps.length}"`);
      const rH = new Array(AH);
      for (let SH = 0; SH < AH; SH++) {
        rH[SH] = new Array(6);
        for (let AH = 0; AH < 6; AH++) {
          const hH = LH.mipmaps[6 * SH + AH];
          rH[SH][AH] = new Uint8Array(HH.buffer, HH.byteOffset + BH.binaryDataPosition + hH.position, hH.length)
        }
      }
      return rH
    }

    function MH(HH, BH) {
      BH = QH(BH);
      const LH = new Array(6),
        AH = BH.irradiance?.irradianceTexture;
      if (AH) {
        if (6 !== AH.faces.length) throw new Error(`Incorrect irradiance texture faces number "${AH.faces.length}"`);
        for (let rH = 0; rH < 6; rH++) {
          const SH = AH.faces[rH];
          LH[rH] = new Uint8Array(HH.buffer, HH.byteOffset + BH.binaryDataPosition + SH.position, SH.length)
        }
      }
      return LH
    }

    function xH(HH, BH, LH) {
      const AH = (LH = QH(LH)).specular;
      if (!AH) return Promise.resolve([]);
      HH._lodGenerationScale = AH.lodGenerationScale;
      const SH = [],
        hH = WH(BH, LH);
      SH.push(PH(HH, hH, LH.imageType));
      const tH = LH.irradiance?.irradianceTexture;
      if (tH) {
        const AH = MH(BH, LH);
        let hH = null;
        LH.irradiance?.irradianceTexture?.dominantDirection && (hH = rH.o.FromArray(LH.irradiance.irradianceTexture.dominantDirection)), SH.push(TH(HH, AH, tH.size, LH.imageType, hH))
      }
      return Promise.all(SH)
    }
    async function vH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
      return await new Promise(((XH, GH) => {
        if (LH) {
          const LH = BH.createTexture(null, !0, !0, null, 1, null, (HH => {
            GH(HH)
          }), HH);
          AH?.onEffectCreatedObservable.addOnce((tH => {
            tH.executeWhenCompiled((() => {
              AH.externalTextureSamplerBinding = !0, AH.onApply = AH => {
                AH._bindTexture("textureSampler", LH), AH.setFloat2("scale", 1, BH._features.needsInvertingBitmap && HH instanceof ImageBitmap ? -1 : 1)
              }, BH.scenes.length && (BH.scenes[0].postProcessManager.directRender([AH], CH, !0, SH, hH), BH.restoreDefaultFramebuffer(), LH.dispose(), URL.revokeObjectURL(rH), XH())
            }))
          }))
        } else {
          if (BH._uploadImageToTexture(EH, HH, SH, hH), tH) {
            const LH = zH[hH];
            LH && BH._uploadImageToTexture(LH._texture, HH, SH, 0)
          }
          XH()
        }
      }))
    }
    async function PH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GH;
      const AH = HH.Iu();
      HH.format = 5, HH.type = 0, HH.generateMipMaps = !0, HH._cachedAnisotropicFilteringLevel = null, AH.updateTextureSamplingMode(3, HH), await UH(HH, BH, !0, LH), HH.isReady = !0
    }
    async function TH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GH,
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const SH = HH.Iu(),
        hH = new tH.e(SH, 5),
        CH = new zH.e(SH, hH);
      HH._irradianceTexture = CH, CH._dominantDirection = rH, hH.isCube = !0, hH.format = 5, hH.type = 0, hH.generateMipMaps = !0, hH._cachedAnisotropicFilteringLevel = null, hH.generateMipMaps = !0, hH.width = LH, hH.height = LH, SH.updateTextureSamplingMode(3, hH), await UH(hH, [BH], !1, AH), SH.generateMipMapsForCubemap(hH), hH.isReady = !0
    }
    async function UH(HH, BH, rH) {
      let hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GH;
      if (!(0, AH.g)(HH.width)) throw new Error("Texture size must be a power of two");
      const EH = (0, SH.ILog2)(HH.width) + 1,
        YH = HH.Iu();
      let uH = !1,
        QH = !1,
        WH = null,
        MH = null,
        xH = null;
      const PH = YH.getCaps();
      PH.textureLOD ? YH._features.supportRenderAndCopyToLodForFloatTextures ? PH.textureHalfFloatRender && PH.textureHalfFloatLinearFiltering ? (uH = !0, HH.type = 2) : PH.textureFloatRender && PH.textureFloatLinearFiltering && (uH = !0, HH.type = 1) : uH = !1 : (uH = !1, QH = rH);
      let TH = 0;
      if (uH) YH.isWebGPU ? (TH = 1, await LH.e(651).then((() => LH(64229)))) : await LH.e(633).then((() => LH(64238))), WH = new CH.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, YH, !1, void 0, HH.type, void 0, null, !1, void 0, TH), HH._isRGBD = !1, HH.invertY = !1, MH = YH.createRenderTargetCubeTexture(HH.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: HH.type,
        format: 5
      });
      else if (HH._isRGBD = !0, HH.invertY = !0, QH) {
        const BH = 3;
        xH = {};
        const LH = HH._lodGenerationScale,
          AH = HH._lodGenerationOffset;
        for (let rH = 0; rH < BH; rH++) {
          const SH = (EH - 1) * LH + AH,
            hH = AH + (SH - AH) * (1 - rH / (BH - 1)),
            CH = Math.round(Math.min(Math.max(hH, 0), SH)),
            XH = new tH.e(YH, 2);
          XH.isCube = !0, XH.invertY = !0, XH.generateMipMaps = !1, YH.updateTextureSamplingMode(2, XH);
          const GH = new zH.e(null);
          switch (GH._isCube = !0, GH._texture = XH, xH[CH] = GH, rH) {
            case 0:
              HH._lodTextureLow = GH;
              break;
            case 1:
              HH._lodTextureMid = GH;
              break;
            case 2:
              HH._lodTextureHigh = GH
          }
        }
      }
      const UH = [];
      for (let LH = 0; LH < BH.length; LH++)
        for (let AH = 0; AH < 6; AH++) {
          const rH = BH[LH][AH],
            SH = (0, XH.m)(rH),
            tH = new Blob([SH], {
              type: hH
            }),
            zH = URL.createObjectURL(tH);
          let CH;
          if (YH._features.forceBitmapOverHTMLImageElement) CH = YH.createImageBitmap(tH, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async BH => await vH(BH, YH, uH, WH, zH, AH, LH, QH, xH, MH, HH)));
          else {
            const BH = new Image;
            BH.src = zH, CH = new Promise(((rH, SH) => {
              BH.onload = () => {
                vH(BH, YH, uH, WH, zH, AH, LH, QH, xH, MH, HH).then((() => rH())).catch((HH => {
                  SH(HH)
                }))
              }, BH.onerror = HH => {
                SH(HH)
              }
            }))
          }
          UH.push(CH)
        }
      if (await Promise.all(UH), BH.length < EH) {
        let LH;
        const AH = Math.pow(2, EH - 1 - BH.length),
          rH = AH * AH * 4;
        switch (HH.type) {
          case 0:
            LH = new Uint8Array(rH);
            break;
          case 2:
            LH = new Uint16Array(rH);
            break;
          case 1:
            LH = new Float32Array(rH)
        }
        for (let SH = BH.length; SH < EH; SH++)
          for (let BH = 0; BH < 6; BH++) YH._uploadArrayBufferViewToTexture(MH?.texture || HH, LH, BH, SH)
      }
      if (MH) {
        const BH = HH._irradianceTexture;
        HH._irradianceTexture = null, YH._releaseTexture(HH), MH._swapAndDie(HH), HH._irradianceTexture = BH
      }
      WH && WH.dispose(), QH && (HH._lodTextureHigh && HH._lodTextureHigh._texture && (HH._lodTextureHigh._texture.isReady = !0), HH._lodTextureMid && HH._lodTextureMid._texture && (HH._lodTextureMid._texture.isReady = !0), HH._lodTextureLow && HH._lodTextureLow._texture && (HH._lodTextureLow._texture.isReady = !0))
    }

    function VH(HH, BH) {
      const LH = (BH = QH(BH)).irradiance;
      if (!LH) return;
      const AH = new hH.g;
      rH.o.FromArrayToRef(LH.x, 0, AH.x), rH.o.FromArrayToRef(LH.y, 0, AH.y), rH.o.FromArrayToRef(LH.z, 0, AH.z), rH.o.FromArrayToRef(LH.xx, 0, AH.xx), rH.o.FromArrayToRef(LH.yy, 0, AH.yy), rH.o.FromArrayToRef(LH.zz, 0, AH.zz), rH.o.FromArrayToRef(LH.yz, 0, AH.yz), rH.o.FromArrayToRef(LH.zx, 0, AH.zx), rH.o.FromArrayToRef(LH.xy, 0, AH.xy), HH._sphericalPolynomial = AH
    }
    var OH = LH(45301);
    class bH {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(HH, BH, LH, AH, rH) {
        if (Array.isArray(HH)) return;
        const SH = uH(HH);
        if (SH) {
          BH.width = SH.width, BH.height = SH.width;
          try {
            (0, OH.e)(), VH(BH, SH), xH(BH, HH, SH).then((() => {
              BH.isReady = !0, BH.onLoadedObservable.notifyObservers(BH), BH.onLoadedObservable.clear(), AH && AH()
            }), (HH => {
              rH?.("Can not upload environment levels", HH)
            }))
          } catch (hH) {
            rH?.("Can not upload environment file", hH)
          }
        } else rH && rH("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  45301: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    var AH = LH(45245),
      rH = LH(41283);
    let SH = !1;

    function hH() {
      SH || (SH = !0, rH.e.prototype._sphericalPolynomialTargetSize = 0, rH.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(rH.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = AH.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((HH => {
              this._texture._sphericalPolynomial = HH, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(HH) {
          this._texture && (this._texture._sphericalPolynomial = HH)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  45245: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH
    });
    var AH = LH(37963),
      rH = LH(38002),
      SH = LH(41275),
      hH = LH(37972),
      tH = LH(38074);
    class zH {
      constructor(HH, BH, LH, AH) {
        this.name = HH, this.worldAxisForNormal = BH, this.worldAxisForFileX = LH, this.worldAxisForFileY = AH
      }
    }
    class CH {
      static _NearestPow2Floor(HH) {
        return HH <= 1 ? 1 : 1 << Math.floor(Math.log2(HH))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(HH) {
        if (!HH.isCube) return null;
        HH.yN()?.Iu().flushFramebuffer();
        const BH = HH.getSize().width,
          LH = HH._sphericalPolynomialTargetSize,
          AH = LH > 0 ? this._NearestPow2Floor(LH) : 0,
          rH = !HH.noMipmap && !0 === HH._texture?.generateMipMaps,
          SH = AH > 0 && AH < BH && rH,
          hH = SH ? Math.max(0, Math.round(Math.log2(BH / AH))) : 0,
          tH = SH ? Math.max(1, Math.floor(BH / Math.pow(2, hH))) : BH,
          zH = HH.readPixels(0, hH, void 0, !1),
          CH = HH.readPixels(1, hH, void 0, !1);
        let EH, XH;
        HH.isRenderTarget ? (EH = HH.readPixels(3, hH, void 0, !1), XH = HH.readPixels(2, hH, void 0, !1)) : (EH = HH.readPixels(2, hH, void 0, !1), XH = HH.readPixels(3, hH, void 0, !1));
        const GH = HH.readPixels(4, hH, void 0, !1),
          YH = HH.readPixels(5, hH, void 0, !1),
          uH = HH.gammaSpace,
          QH = AH > 0 && AH < BH && !SH;
        return new Promise((HH => {
          Promise.all([CH, zH, EH, XH, GH, YH]).then((LH => {
            let [rH, SH, hH, zH, CH, EH] = LH, XH = tH;
            if (QH) {
              const HH = 4;
              rH = this._DownsampleFace(rH, BH, AH, HH), SH = this._DownsampleFace(SH, BH, AH, HH), hH = this._DownsampleFace(hH, BH, AH, HH), zH = this._DownsampleFace(zH, BH, AH, HH), CH = this._DownsampleFace(CH, BH, AH, HH), EH = this._DownsampleFace(EH, BH, AH, HH), XH = AH
            }
            const GH = {
              size: XH,
              right: SH,
              left: rH,
              up: hH,
              down: zH,
              front: CH,
              back: EH,
              format: 5,
              type: rH instanceof Float32Array ? 1 : 0,
              gammaSpace: uH
            };
            HH(this.ConvertCubeMapToSphericalPolynomial(GH))
          }))
        }))
      }
      static _AreaElement(HH, BH) {
        return Math.atan2(HH * BH, Math.sqrt(HH * HH + BH * BH + 1))
      }
      static _DownsampleFace(HH, BH, LH, AH) {
        const rH = HH instanceof Float32Array ? HH : Float32Array.from(HH),
          SH = LH * LH * AH,
          hH = new Float32Array(SH),
          tH = BH / LH,
          zH = 1 / (tH * tH);
        for (let EH = 0; EH < LH; EH++) {
          const HH = Math.floor(EH * tH),
            SH = Math.floor((EH + 1) * tH);
          for (let CH = 0; CH < LH; CH++) {
            const XH = Math.floor(CH * tH),
              GH = Math.floor((CH + 1) * tH),
              YH = (EH * LH + CH) * AH;
            for (let LH = 0; LH < AH; LH++) {
              let tH = 0;
              for (let hH = HH; hH < SH; hH++)
                for (let HH = XH; HH < GH; HH++) tH += rH[(hH * BH + HH) * AH + LH];
              hH[YH + LH] = tH * zH
            }
          }
        }
        if (HH instanceof Float32Array) return hH;
        const CH = new(0, HH.constructor)(SH);
        for (let EH = 0; EH < SH; EH++) CH[EH] = hH[EH] + .5 | 0;
        return CH
      }
      static ConvertCubeMapToSphericalPolynomial(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const LH = BH > 0 ? this._NearestPow2Floor(BH) : 0;
        if (LH > 0 && HH.size > LH) {
          const BH = 5 === HH.format ? 4 : 3,
            AH = ["right", "left", "up", "down", "front", "back"],
            rH = {};
          for (const SH of AH) rH[SH] = this._DownsampleFace(HH[SH], HH.size, LH, BH);
          HH = {
            ...HH,
            ...rH,
            size: LH
          }
        }
        const AH = new SH.e;
        let zH = 0;
        const CH = 2 / HH.size,
          EH = CH,
          XH = .5 * CH,
          GH = XH - 1;
        for (let SH = 0; SH < 6; SH++) {
          const BH = this._FileFaces[SH],
            LH = HH[BH.name];
          let YH = GH;
          const uH = 5 === HH.format ? 4 : 3;
          for (let SH = 0; SH < HH.size; SH++) {
            let QH = GH;
            for (let EH = 0; EH < HH.size; EH++) {
              const GH = BH.worldAxisForFileX.scale(QH).add(BH.worldAxisForFileY.scale(YH)).add(BH.worldAxisForNormal);
              GH.normalize();
              const WH = this._AreaElement(QH - XH, YH - XH) - this._AreaElement(QH - XH, YH + XH) - this._AreaElement(QH + XH, YH - XH) + this._AreaElement(QH + XH, YH + XH);
              let MH = LH[SH * HH.size * uH + EH * uH + 0],
                xH = LH[SH * HH.size * uH + EH * uH + 1],
                vH = LH[SH * HH.size * uH + EH * uH + 2];
              isNaN(MH) && (MH = 0), isNaN(xH) && (xH = 0), isNaN(vH) && (vH = 0), 0 === HH.type && (MH /= 255, xH /= 255, vH /= 255), HH.gammaSpace && (MH = Math.pow((0, rH.Clamp)(MH), hH.f), xH = Math.pow((0, rH.Clamp)(xH), hH.f), vH = Math.pow((0, rH.Clamp)(vH), hH.f));
              const PH = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const HH = Math.max(MH, xH, vH);
                if (HH > PH) {
                  const BH = PH / HH;
                  MH *= BH, xH *= BH, vH *= BH
                }
              } else MH = (0, rH.Clamp)(MH, 0, PH), xH = (0, rH.Clamp)(xH, 0, PH), vH = (0, rH.Clamp)(vH, 0, PH);
              const TH = new tH.c(MH, xH, vH);
              AH.addLight(GH, TH, WH), zH += WH, QH += CH
            }
            YH += EH
          }
        }
        const YH = 6 * (4 * Math.PI) / 6 / zH;
        return AH.scaleInPlace(YH), AH.convertIncidentRadianceToIrradiance(), AH.convertIrradianceToLambertianRadiance(), SH.g.FromHarmonics(AH)
      }
    }
    CH._FileFaces = [new zH("right", new AH.o(1, 0, 0), new AH.o(0, 0, -1), new AH.o(0, -1, 0)), new zH("left", new AH.o(-1, 0, 0), new AH.o(0, 0, 1), new AH.o(0, -1, 0)), new zH("up", new AH.o(0, 1, 0), new AH.o(1, 0, 0), new AH.o(0, 0, 1)), new zH("down", new AH.o(0, -1, 0), new AH.o(1, 0, 0), new AH.o(0, 0, -1)), new zH("front", new AH.o(0, 0, 1), new AH.o(1, 0, 0), new AH.o(0, -1, 0)), new zH("back", new AH.o(0, 0, -1), new AH.o(-1, 0, 0), new AH.o(0, -1, 0))], CH.MAX_HDRI_VALUE = 4096, CH.PRESERVE_CLAMPED_COLORS = !1
  },
  45276: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(45266),
      rH = LH(45285);
    class SH {
      static ExpandRGBDTexture(HH) {
        const BH = HH._texture;
        if (!BH || !HH.isRGBD) return;
        const rH = BH.Iu(),
          SH = rH.getCaps(),
          hH = BH.isReady;
        let tH = !1;
        SH.textureHalfFloatRender && SH.textureHalfFloatLinearFiltering ? (tH = !0, BH.type = 2) : SH.textureFloatRender && SH.textureFloatLinearFiltering && (tH = !0, BH.type = 1), tH && (BH.isReady = !1, BH._isRGBD = !1, BH.invertY = !1);
        const zH = async () => {
          const SH = rH.isWebGPU,
            hH = SH ? 1 : 0;
          BH.isReady = !1, SH ? await LH.e(651).then((() => LH(64229))) : await LH.e(633).then((() => LH(64238)));
          const tH = new AH.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, rH, !1, void 0, BH.type, void 0, null, !1, void 0, hH);
          tH.externalTextureSamplerBinding = !0;
          const zH = rH.createRenderTargetTexture(BH.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: BH.samplingMode,
            type: BH.type,
            format: 5
          });
          tH.onEffectCreatedObservable.addOnce((LH => {
            LH.executeWhenCompiled((() => {
              tH.onApply = HH => {
                HH._bindTexture("textureSampler", BH), HH.setFloat2("scale", 1, 1)
              }, HH.yN()?.postProcessManager.directRender([tH], zH, !0), rH.restoreDefaultFramebuffer(), rH._releaseTexture(BH), tH && tH.dispose(), zH._swapAndDie(BH), BH.isReady = !0
            }))
          }))
        };
        tH && (hH ? zH() : HH.onLoadObservable.addOnce(zH))
      }
      static async EncodeTextureToRGBD(HH, BH) {
        let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return BH.Iu().isWebGPU ? await LH.e(652).then((() => LH(64248))) : await LH.e(634).then((() => LH(64245))), await (0, rH.d)("rgbdEncode", HH, BH, AH, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);