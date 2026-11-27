export const id = 626;
export const ids = [626];
export const modules = {
  53970: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      _ENVTextureLoader: () => TW
    });
    var mW = OW(41458),
      EW = OW(38241),
      NW = OW(38285),
      PW = OW(41506),
      LW = OW(41371),
      cW = OW(41511),
      wW = (OW(41612), OW(53977)),
      tW = OW(39911),
      ZW = (OW(53986), OW(54011), OW(41582));
    const xW = "image/png",
      lW = [134, 22, 135, 150, 246, 214, 150, 54];

    function AW(WW) {
      const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
      let OW = 0;
      for (let PW = 0; PW < lW.length; PW++)
        if (iW.getUint8(OW++) !== lW[PW]) return tW.b.Error("Not a babylon environment map"), null;
      let mW, EW = "";
      for (; mW = iW.getUint8(OW++);) EW += String.fromCharCode(mW);
      let NW = JSON.parse(EW);
      return NW = bW(NW), NW.binaryDataPosition = OW, NW.specular && (NW.specular.lodGenerationScale = NW.specular.lodGenerationScale || .8), NW
    }

    function bW(WW) {
      if (WW.version > 2) throw new Error(`Unsupported babylon environment map version "${WW.version}". Latest supported version is "2".`);
      return 2 === WW.version ? WW : WW = {
        ...WW,
        version: 2,
        imageType: xW
      }
    }

    function jW(WW, iW) {
      const OW = (iW = bW(iW)).specular;
      let mW = Math.log2(iW.width);
      if (mW = Math.round(mW) + 1, OW.mipmaps.length !== 6 * mW) throw new Error(`Unsupported specular mipmaps number "${OW.mipmaps.length}"`);
      const EW = new Array(mW);
      for (let NW = 0; NW < mW; NW++) {
        EW[NW] = new Array(6);
        for (let mW = 0; mW < 6; mW++) {
          const PW = OW.mipmaps[6 * NW + mW];
          EW[NW][mW] = new Uint8Array(WW.buffer, WW.byteOffset + iW.binaryDataPosition + PW.position, PW.length)
        }
      }
      return EW
    }

    function UW(WW, iW) {
      iW = bW(iW);
      const OW = new Array(6),
        mW = iW.irradiance?.irradianceTexture;
      if (mW) {
        if (6 !== mW.faces.length) throw new Error(`Incorrect irradiance texture faces number "${mW.faces.length}"`);
        for (let EW = 0; EW < 6; EW++) {
          const NW = mW.faces[EW];
          OW[EW] = new Uint8Array(WW.buffer, WW.byteOffset + iW.binaryDataPosition + NW.position, NW.length)
        }
      }
      return OW
    }

    function kW(WW, iW, OW) {
      const mW = (OW = bW(OW)).specular;
      if (!mW) return Promise.resolve([]);
      WW._lodGenerationScale = mW.lodGenerationScale;
      const NW = [],
        PW = jW(iW, OW);
      NW.push(MW(WW, PW, OW.imageType));
      const LW = OW.irradiance?.irradianceTexture;
      if (LW) {
        const mW = UW(iW, OW);
        let PW = null;
        OW.irradiance?.irradianceTexture?.dominantDirection && (PW = EW.q.FromArray(OW.irradiance.irradianceTexture.dominantDirection)), NW.push(KW(WW, mW, LW.size, OW.imageType, PW))
      }
      return Promise.all(NW)
    }
    async function sW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
      return await new Promise(((ZW, xW) => {
        if (OW) {
          const OW = iW.createTexture(null, !0, !0, null, 1, null, (WW => {
            xW(WW)
          }), WW);
          mW?.onEffectCreatedObservable.addOnce((LW => {
            LW.executeWhenCompiled((() => {
              mW.externalTextureSamplerBinding = !0, mW.onApply = mW => {
                mW._bindTexture("textureSampler", OW), mW.setFloat2("scale", 1, iW._features.needsInvertingBitmap && WW instanceof ImageBitmap ? -1 : 1)
              }, iW.scenes.length && (iW.scenes[0].postProcessManager.directRender([mW], wW, !0, NW, PW), iW.restoreDefaultFramebuffer(), OW.dispose(), URL.revokeObjectURL(EW), ZW())
            }))
          }))
        } else {
          if (iW._uploadImageToTexture(tW, WW, NW, PW), LW) {
            const OW = cW[PW];
            OW && iW._uploadImageToTexture(OW._texture, WW, NW, 0)
          }
          ZW()
        }
      }))
    }
    async function MW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xW;
      const mW = WW.VA();
      WW.format = 5, WW.type = 0, WW.generateMipMaps = !0, WW._cachedAnisotropicFilteringLevel = null, mW.updateTextureSamplingMode(3, WW), await SW(WW, iW, !0, OW), WW.isReady = !0
    }
    async function KW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xW,
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const NW = WW.VA(),
        PW = new LW.e(NW, 5),
        wW = new cW.c(NW, PW);
      WW._irradianceTexture = wW, wW._dominantDirection = EW, PW.isCube = !0, PW.format = 5, PW.type = 0, PW.generateMipMaps = !0, PW._cachedAnisotropicFilteringLevel = null, PW.generateMipMaps = !0, PW.width = OW, PW.height = OW, NW.updateTextureSamplingMode(3, PW), await SW(PW, [iW], !1, mW), NW.generateMipMapsForCubemap(PW), PW.isReady = !0
    }
    async function SW(WW, iW, EW) {
      let PW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xW;
      if (!(0, mW.i)(WW.width)) throw new Error("Texture size must be a power of two");
      const tW = (0, NW.ILog2)(WW.width) + 1,
        lW = WW.VA();
      let AW = !1,
        bW = !1,
        jW = null,
        UW = null,
        kW = null;
      const MW = lW.getCaps();
      MW.textureLOD ? lW._features.supportRenderAndCopyToLodForFloatTextures ? MW.textureHalfFloatRender && MW.textureHalfFloatLinearFiltering ? (AW = !0, WW.type = 2) : MW.textureFloatRender && MW.textureFloatLinearFiltering && (AW = !0, WW.type = 1) : AW = !1 : (AW = !1, bW = EW);
      let KW = 0;
      if (AW) lW.isWebGPU ? (KW = 1, await OW.e(660).then((() => OW(64519)))) : await OW.e(642).then((() => OW(64523))), jW = new wW.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, lW, !1, void 0, WW.type, void 0, null, !1, void 0, KW), WW._isRGBD = !1, WW.invertY = !1, UW = lW.createRenderTargetCubeTexture(WW.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: WW.type,
        format: 5
      });
      else if (WW._isRGBD = !0, WW.invertY = !0, bW) {
        const iW = 3;
        kW = {};
        const OW = WW._lodGenerationScale,
          mW = WW._lodGenerationOffset;
        for (let EW = 0; EW < iW; EW++) {
          const NW = (tW - 1) * OW + mW,
            PW = mW + (NW - mW) * (1 - EW / (iW - 1)),
            wW = Math.round(Math.min(Math.max(PW, 0), NW)),
            ZW = new LW.e(lW, 2);
          ZW.isCube = !0, ZW.invertY = !0, ZW.generateMipMaps = !1, lW.updateTextureSamplingMode(2, ZW);
          const xW = new cW.c(null);
          switch (xW._isCube = !0, xW._texture = ZW, kW[wW] = xW, EW) {
            case 0:
              WW._lodTextureLow = xW;
              break;
            case 1:
              WW._lodTextureMid = xW;
              break;
            case 2:
              WW._lodTextureHigh = xW
          }
        }
      }
      const SW = [];
      for (let OW = 0; OW < iW.length; OW++)
        for (let mW = 0; mW < 6; mW++) {
          const EW = iW[OW][mW],
            NW = (0, ZW.g)(EW),
            LW = new Blob([NW], {
              type: PW
            }),
            cW = URL.createObjectURL(LW);
          let wW;
          if (lW._features.forceBitmapOverHTMLImageElement) wW = lW.createImageBitmap(LW, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async iW => await sW(iW, lW, AW, jW, cW, mW, OW, bW, kW, UW, WW)));
          else {
            const iW = new Image;
            iW.src = cW, wW = new Promise(((EW, NW) => {
              iW.onload = () => {
                sW(iW, lW, AW, jW, cW, mW, OW, bW, kW, UW, WW).then((() => EW())).catch((WW => {
                  NW(WW)
                }))
              }, iW.onerror = WW => {
                NW(WW)
              }
            }))
          }
          SW.push(wW)
        }
      if (await Promise.all(SW), iW.length < tW) {
        let OW;
        const mW = Math.pow(2, tW - 1 - iW.length),
          EW = mW * mW * 4;
        switch (WW.type) {
          case 0:
            OW = new Uint8Array(EW);
            break;
          case 2:
            OW = new Uint16Array(EW);
            break;
          case 1:
            OW = new Float32Array(EW)
        }
        for (let NW = iW.length; NW < tW; NW++)
          for (let iW = 0; iW < 6; iW++) lW._uploadArrayBufferViewToTexture(UW?.texture || WW, OW, iW, NW)
      }
      if (UW) {
        const iW = WW._irradianceTexture;
        WW._irradianceTexture = null, lW._releaseTexture(WW), UW._swapAndDie(WW), WW._irradianceTexture = iW
      }
      jW && jW.dispose(), bW && (WW._lodTextureHigh && WW._lodTextureHigh._texture && (WW._lodTextureHigh._texture.isReady = !0), WW._lodTextureMid && WW._lodTextureMid._texture && (WW._lodTextureMid._texture.isReady = !0), WW._lodTextureLow && WW._lodTextureLow._texture && (WW._lodTextureLow._texture.isReady = !0))
    }

    function YW(WW, iW) {
      const OW = (iW = bW(iW)).irradiance;
      if (!OW) return;
      const mW = new PW.f;
      EW.q.FromArrayToRef(OW.x, 0, mW.x), EW.q.FromArrayToRef(OW.y, 0, mW.y), EW.q.FromArrayToRef(OW.z, 0, mW.z), EW.q.FromArrayToRef(OW.xx, 0, mW.xx), EW.q.FromArrayToRef(OW.yy, 0, mW.yy), EW.q.FromArrayToRef(OW.zz, 0, mW.zz), EW.q.FromArrayToRef(OW.yz, 0, mW.yz), EW.q.FromArrayToRef(OW.zx, 0, mW.zx), EW.q.FromArrayToRef(OW.xy, 0, mW.xy), WW._sphericalPolynomial = mW
    }
    var yW = OW(54015);
    class TW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(WW, iW, OW, mW, EW) {
        if (Array.isArray(WW)) return;
        const NW = AW(WW);
        if (NW) {
          iW.width = NW.width, iW.height = NW.width;
          try {
            (0, yW.c)(), YW(iW, NW), kW(iW, WW, NW).then((() => {
              iW.isReady = !0, iW.onLoadedObservable.notifyObservers(iW), iW.onLoadedObservable.clear(), mW && mW()
            }), (WW => {
              EW?.("Can not upload environment levels", WW)
            }))
          } catch (PW) {
            EW?.("Can not upload environment file", PW)
          }
        } else EW && EW("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  54015: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(53951),
      EW = OW(41511);
    let NW = !1;

    function PW() {
      NW || (NW = !0, EW.c.prototype._sphericalPolynomialTargetSize = 0, EW.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(EW.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = mW.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((WW => {
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
  53951: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => wW
    });
    var mW = OW(38241),
      EW = OW(38285),
      NW = OW(41506),
      PW = OW(38249),
      LW = OW(38372);
    class cW {
      constructor(WW, iW, OW, mW) {
        this.name = WW, this.worldAxisForNormal = iW, this.worldAxisForFileX = OW, this.worldAxisForFileY = mW
      }
    }
    class wW {
      static _NearestPow2Floor(WW) {
        return WW <= 1 ? 1 : 1 << Math.floor(Math.log2(WW))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(WW) {
        if (!WW.isCube) return null;
        WW.bD()?.VA().flushFramebuffer();
        const iW = WW.getSize().width,
          OW = WW._sphericalPolynomialTargetSize,
          mW = OW > 0 ? this._NearestPow2Floor(OW) : 0,
          EW = !WW.noMipmap && !0 === WW._texture?.generateMipMaps,
          NW = mW > 0 && mW < iW && EW,
          PW = NW ? Math.max(0, Math.round(Math.log2(iW / mW))) : 0,
          LW = NW ? Math.max(1, Math.floor(iW / Math.pow(2, PW))) : iW,
          cW = WW.readPixels(0, PW, void 0, !1),
          wW = WW.readPixels(1, PW, void 0, !1);
        let tW, ZW;
        WW.isRenderTarget ? (tW = WW.readPixels(3, PW, void 0, !1), ZW = WW.readPixels(2, PW, void 0, !1)) : (tW = WW.readPixels(2, PW, void 0, !1), ZW = WW.readPixels(3, PW, void 0, !1));
        const xW = WW.readPixels(4, PW, void 0, !1),
          lW = WW.readPixels(5, PW, void 0, !1),
          AW = WW.gammaSpace,
          bW = mW > 0 && mW < iW && !NW;
        return new Promise((WW => {
          Promise.all([wW, cW, tW, ZW, xW, lW]).then((OW => {
            let [EW, NW, PW, cW, wW, tW] = OW, ZW = LW;
            if (bW) {
              const WW = 4;
              EW = this._DownsampleFace(EW, iW, mW, WW), NW = this._DownsampleFace(NW, iW, mW, WW), PW = this._DownsampleFace(PW, iW, mW, WW), cW = this._DownsampleFace(cW, iW, mW, WW), wW = this._DownsampleFace(wW, iW, mW, WW), tW = this._DownsampleFace(tW, iW, mW, WW), ZW = mW
            }
            const xW = {
              size: ZW,
              right: NW,
              left: EW,
              up: PW,
              down: cW,
              front: wW,
              back: tW,
              format: 5,
              type: EW instanceof Float32Array ? 1 : 0,
              gammaSpace: AW
            };
            WW(this.ConvertCubeMapToSphericalPolynomial(xW))
          }))
        }))
      }
      static _AreaElement(WW, iW) {
        return Math.atan2(WW * iW, Math.sqrt(WW * WW + iW * iW + 1))
      }
      static _DownsampleFace(WW, iW, OW, mW) {
        const EW = WW instanceof Float32Array ? WW : Float32Array.from(WW),
          NW = OW * OW * mW,
          PW = new Float32Array(NW),
          LW = iW / OW,
          cW = 1 / (LW * LW);
        for (let tW = 0; tW < OW; tW++) {
          const WW = Math.floor(tW * LW),
            NW = Math.floor((tW + 1) * LW);
          for (let wW = 0; wW < OW; wW++) {
            const ZW = Math.floor(wW * LW),
              xW = Math.floor((wW + 1) * LW),
              lW = (tW * OW + wW) * mW;
            for (let OW = 0; OW < mW; OW++) {
              let LW = 0;
              for (let PW = WW; PW < NW; PW++)
                for (let WW = ZW; WW < xW; WW++) LW += EW[(PW * iW + WW) * mW + OW];
              PW[lW + OW] = LW * cW
            }
          }
        }
        if (WW instanceof Float32Array) return PW;
        const wW = new(0, WW.constructor)(NW);
        for (let tW = 0; tW < NW; tW++) wW[tW] = PW[tW] + .5 | 0;
        return wW
      }
      static ConvertCubeMapToSphericalPolynomial(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const OW = iW > 0 ? this._NearestPow2Floor(iW) : 0;
        if (OW > 0 && WW.size > OW) {
          const iW = 5 === WW.format ? 4 : 3,
            mW = ["right", "left", "up", "down", "front", "back"],
            EW = {};
          for (const NW of mW) EW[NW] = this._DownsampleFace(WW[NW], WW.size, OW, iW);
          WW = {
            ...WW,
            ...EW,
            size: OW
          }
        }
        const mW = new NW.e;
        let cW = 0;
        const wW = 2 / WW.size,
          tW = wW,
          ZW = .5 * wW,
          xW = ZW - 1;
        for (let NW = 0; NW < 6; NW++) {
          const iW = this._FileFaces[NW],
            OW = WW[iW.name];
          let lW = xW;
          const AW = 5 === WW.format ? 4 : 3;
          for (let NW = 0; NW < WW.size; NW++) {
            let bW = xW;
            for (let tW = 0; tW < WW.size; tW++) {
              const xW = iW.worldAxisForFileX.scale(bW).add(iW.worldAxisForFileY.scale(lW)).add(iW.worldAxisForNormal);
              xW.normalize();
              const jW = this._AreaElement(bW - ZW, lW - ZW) - this._AreaElement(bW - ZW, lW + ZW) - this._AreaElement(bW + ZW, lW - ZW) + this._AreaElement(bW + ZW, lW + ZW);
              let UW = OW[NW * WW.size * AW + tW * AW + 0],
                kW = OW[NW * WW.size * AW + tW * AW + 1],
                sW = OW[NW * WW.size * AW + tW * AW + 2];
              isNaN(UW) && (UW = 0), isNaN(kW) && (kW = 0), isNaN(sW) && (sW = 0), 0 === WW.type && (UW /= 255, kW /= 255, sW /= 255), WW.gammaSpace && (UW = Math.pow((0, EW.Clamp)(UW), PW.i), kW = Math.pow((0, EW.Clamp)(kW), PW.i), sW = Math.pow((0, EW.Clamp)(sW), PW.i));
              const MW = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const WW = Math.max(UW, kW, sW);
                if (WW > MW) {
                  const iW = MW / WW;
                  UW *= iW, kW *= iW, sW *= iW
                }
              } else UW = (0, EW.Clamp)(UW, 0, MW), kW = (0, EW.Clamp)(kW, 0, MW), sW = (0, EW.Clamp)(sW, 0, MW);
              const KW = new LW.b(UW, kW, sW);
              mW.addLight(xW, KW, jW), cW += jW, bW += wW
            }
            lW += tW
          }
        }
        const lW = 6 * (4 * Math.PI) / 6 / cW;
        return mW.scaleInPlace(lW), mW.convertIncidentRadianceToIrradiance(), mW.convertIrradianceToLambertianRadiance(), NW.f.FromHarmonics(mW)
      }
    }
    wW._FileFaces = [new cW("right", new mW.q(1, 0, 0), new mW.q(0, 0, -1), new mW.q(0, -1, 0)), new cW("left", new mW.q(-1, 0, 0), new mW.q(0, 0, 1), new mW.q(0, -1, 0)), new cW("up", new mW.q(0, 1, 0), new mW.q(1, 0, 0), new mW.q(0, 0, 1)), new cW("down", new mW.q(0, -1, 0), new mW.q(1, 0, 0), new mW.q(0, 0, -1)), new cW("front", new mW.q(0, 0, 1), new mW.q(1, 0, 0), new mW.q(0, -1, 0)), new cW("back", new mW.q(0, 0, -1), new mW.q(-1, 0, 0), new mW.q(0, -1, 0))], wW.MAX_HDRI_VALUE = 4096, wW.PRESERVE_CLAMPED_COLORS = !1
  },
  53986: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    var mW = OW(53977),
      EW = OW(53995);
    class NW {
      static ExpandRGBDTexture(WW) {
        const iW = WW._texture;
        if (!iW || !WW.isRGBD) return;
        const EW = iW.VA(),
          NW = EW.getCaps(),
          PW = iW.isReady;
        let LW = !1;
        NW.textureHalfFloatRender && NW.textureHalfFloatLinearFiltering ? (LW = !0, iW.type = 2) : NW.textureFloatRender && NW.textureFloatLinearFiltering && (LW = !0, iW.type = 1), LW && (iW.isReady = !1, iW._isRGBD = !1, iW.invertY = !1);
        const cW = async () => {
          const NW = EW.isWebGPU,
            PW = NW ? 1 : 0;
          iW.isReady = !1, NW ? await OW.e(660).then((() => OW(64519))) : await OW.e(642).then((() => OW(64523)));
          const LW = new mW.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, EW, !1, void 0, iW.type, void 0, null, !1, void 0, PW);
          LW.externalTextureSamplerBinding = !0;
          const cW = EW.createRenderTargetTexture(iW.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: iW.samplingMode,
            type: iW.type,
            format: 5
          });
          LW.onEffectCreatedObservable.addOnce((OW => {
            OW.executeWhenCompiled((() => {
              LW.onApply = WW => {
                WW._bindTexture("textureSampler", iW), WW.setFloat2("scale", 1, 1)
              }, WW.bD()?.postProcessManager.directRender([LW], cW, !0), EW.restoreDefaultFramebuffer(), EW._releaseTexture(iW), LW && LW.dispose(), cW._swapAndDie(iW), iW.isReady = !0
            }))
          }))
        };
        LW && (PW ? cW() : WW.onLoadObservable.addOnce(cW))
      }
      static async EncodeTextureToRGBD(WW, iW) {
        let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return iW.VA().isWebGPU ? await OW.e(661).then((() => OW(64545))) : await OW.e(643).then((() => OW(64537))), await (0, EW.c)("rgbdEncode", WW, iW, mW, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);