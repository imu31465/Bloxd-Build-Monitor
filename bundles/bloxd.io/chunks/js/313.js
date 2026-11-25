export const id = 313;
export const ids = [313];
export const modules = {
  42240: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      _ENVTextureLoader: () => CG
    });
    var wG = ZG(40319),
      SG = ZG(37439),
      LG = ZG(37471),
      yG = ZG(40379),
      kG = ZG(40210),
      UG = ZG(40387),
      YG = (ZG(40475), ZG(42248)),
      VG = ZG(39093),
      pG = (ZG(42262), ZG(42289), ZG(40447));
    const fG = "image/png",
      QG = [134, 22, 135, 150, 246, 214, 150, 54];

    function KG(GG) {
      const bG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength);
      let ZG = 0;
      for (let yG = 0; yG < QG.length; yG++)
        if (bG.getUint8(ZG++) !== QG[yG]) return VG.c.Error("Not a babylon environment map"), null;
      let wG, SG = "";
      for (; wG = bG.getUint8(ZG++);) SG += String.fromCharCode(wG);
      let LG = JSON.parse(SG);
      return LG = hG(LG), LG.binaryDataPosition = ZG, LG.specular && (LG.specular.lodGenerationScale = LG.specular.lodGenerationScale || .8), LG
    }

    function hG(GG) {
      if (GG.version > 2) throw new Error(`Unsupported babylon environment map version "${GG.version}". Latest supported version is "2".`);
      return 2 === GG.version ? GG : GG = {
        ...GG,
        version: 2,
        imageType: fG
      }
    }

    function dG(GG, bG) {
      const ZG = (bG = hG(bG)).specular;
      let wG = Math.log2(bG.width);
      if (wG = Math.round(wG) + 1, ZG.mipmaps.length !== 6 * wG) throw new Error(`Unsupported specular mipmaps number "${ZG.mipmaps.length}"`);
      const SG = new Array(wG);
      for (let LG = 0; LG < wG; LG++) {
        SG[LG] = new Array(6);
        for (let wG = 0; wG < 6; wG++) {
          const yG = ZG.mipmaps[6 * LG + wG];
          SG[LG][wG] = new Uint8Array(GG.buffer, GG.byteOffset + bG.binaryDataPosition + yG.position, yG.length)
        }
      }
      return SG
    }

    function JG(GG, bG) {
      bG = hG(bG);
      const ZG = new Array(6),
        wG = bG.irradiance?.irradianceTexture;
      if (wG) {
        if (6 !== wG.faces.length) throw new Error(`Incorrect irradiance texture faces number "${wG.faces.length}"`);
        for (let SG = 0; SG < 6; SG++) {
          const LG = wG.faces[SG];
          ZG[SG] = new Uint8Array(GG.buffer, GG.byteOffset + bG.binaryDataPosition + LG.position, LG.length)
        }
      }
      return ZG
    }

    function rG(GG, bG, ZG) {
      const wG = (ZG = hG(ZG)).specular;
      if (!wG) return Promise.resolve([]);
      GG._lodGenerationScale = wG.lodGenerationScale;
      const LG = [],
        yG = dG(bG, ZG);
      LG.push(EG(GG, yG, ZG.imageType));
      const kG = ZG.irradiance?.irradianceTexture;
      if (kG) {
        const wG = JG(bG, ZG);
        let yG = null;
        ZG.irradiance?.irradianceTexture?.dominantDirection && (yG = SG.p.FromArray(ZG.irradiance.irradianceTexture.dominantDirection)), LG.push(oG(GG, wG, kG.size, ZG.imageType, yG))
      }
      return Promise.all(LG)
    }
    async function zG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
      return await new Promise(((pG, fG) => {
        if (ZG) {
          const ZG = bG.createTexture(null, !0, !0, null, 1, null, (GG => {
            fG(GG)
          }), GG);
          wG?.onEffectCreatedObservable.addOnce((kG => {
            kG.executeWhenCompiled((() => {
              wG.externalTextureSamplerBinding = !0, wG.onApply = wG => {
                wG._bindTexture("textureSampler", ZG), wG.setFloat2("scale", 1, bG._features.needsInvertingBitmap && GG instanceof ImageBitmap ? -1 : 1)
              }, bG.scenes.length && (bG.scenes[0].postProcessManager.directRender([wG], YG, !0, LG, yG), bG.restoreDefaultFramebuffer(), ZG.dispose(), URL.revokeObjectURL(SG), pG())
            }))
          }))
        } else {
          if (bG._uploadImageToTexture(VG, GG, LG, yG), kG) {
            const ZG = UG[yG];
            ZG && bG._uploadImageToTexture(ZG._texture, GG, LG, 0)
          }
          pG()
        }
      }))
    }
    async function EG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fG;
      const wG = GG.CK();
      GG.format = 5, GG.type = 0, GG.generateMipMaps = !0, GG._cachedAnisotropicFilteringLevel = null, wG.updateTextureSamplingMode(3, GG), await XG(GG, bG, !0, ZG), GG.isReady = !0
    }
    async function oG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fG,
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const LG = GG.CK(),
        yG = new kG.b(LG, 5),
        YG = new UG.b(LG, yG);
      GG._irradianceTexture = YG, YG._dominantDirection = SG, yG.isCube = !0, yG.format = 5, yG.type = 0, yG.generateMipMaps = !0, yG._cachedAnisotropicFilteringLevel = null, yG.generateMipMaps = !0, yG.width = ZG, yG.height = ZG, LG.updateTextureSamplingMode(3, yG), await XG(yG, [bG], !1, wG), LG.generateMipMapsForCubemap(yG), yG.isReady = !0
    }
    async function XG(GG, bG, SG) {
      let yG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fG;
      if (!(0, wG.k)(GG.width)) throw new Error("Texture size must be a power of two");
      const VG = (0, LG.ILog2)(GG.width) + 1,
        QG = GG.CK();
      let KG = !1,
        hG = !1,
        dG = null,
        JG = null,
        rG = null;
      const EG = QG.getCaps();
      EG.textureLOD ? QG._features.supportRenderAndCopyToLodForFloatTextures ? EG.textureHalfFloatRender && EG.textureHalfFloatLinearFiltering ? (KG = !0, GG.type = 2) : EG.textureFloatRender && EG.textureFloatLinearFiltering && (KG = !0, GG.type = 1) : KG = !1 : (KG = !1, hG = SG);
      let oG = 0;
      if (KG) QG.isWebGPU ? (oG = 1, await ZG.e(347).then((() => ZG(61933)))) : await ZG.e(329).then((() => ZG(61942))), dG = new YG.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, QG, !1, void 0, GG.type, void 0, null, !1, void 0, oG), GG._isRGBD = !1, GG.invertY = !1, JG = QG.createRenderTargetCubeTexture(GG.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: GG.type,
        format: 5
      });
      else if (GG._isRGBD = !0, GG.invertY = !0, hG) {
        const bG = 3;
        rG = {};
        const ZG = GG._lodGenerationScale,
          wG = GG._lodGenerationOffset;
        for (let SG = 0; SG < bG; SG++) {
          const LG = (VG - 1) * ZG + wG,
            yG = wG + (LG - wG) * (1 - SG / (bG - 1)),
            YG = Math.round(Math.min(Math.max(yG, 0), LG)),
            pG = new kG.b(QG, 2);
          pG.isCube = !0, pG.invertY = !0, pG.generateMipMaps = !1, QG.updateTextureSamplingMode(2, pG);
          const fG = new UG.b(null);
          switch (fG._isCube = !0, fG._texture = pG, rG[YG] = fG, SG) {
            case 0:
              GG._lodTextureLow = fG;
              break;
            case 1:
              GG._lodTextureMid = fG;
              break;
            case 2:
              GG._lodTextureHigh = fG
          }
        }
      }
      const XG = [];
      for (let ZG = 0; ZG < bG.length; ZG++)
        for (let wG = 0; wG < 6; wG++) {
          const SG = bG[ZG][wG],
            LG = (0, pG.j)(SG),
            kG = new Blob([LG], {
              type: yG
            }),
            UG = URL.createObjectURL(kG);
          let YG;
          if (QG._features.forceBitmapOverHTMLImageElement) YG = QG.createImageBitmap(kG, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async bG => await zG(bG, QG, KG, dG, UG, wG, ZG, hG, rG, JG, GG)));
          else {
            const bG = new Image;
            bG.src = UG, YG = new Promise(((SG, LG) => {
              bG.onload = () => {
                zG(bG, QG, KG, dG, UG, wG, ZG, hG, rG, JG, GG).then((() => SG())).catch((GG => {
                  LG(GG)
                }))
              }, bG.onerror = GG => {
                LG(GG)
              }
            }))
          }
          XG.push(YG)
        }
      if (await Promise.all(XG), bG.length < VG) {
        let ZG;
        const wG = Math.pow(2, VG - 1 - bG.length),
          SG = wG * wG * 4;
        switch (GG.type) {
          case 0:
            ZG = new Uint8Array(SG);
            break;
          case 2:
            ZG = new Uint16Array(SG);
            break;
          case 1:
            ZG = new Float32Array(SG)
        }
        for (let LG = bG.length; LG < VG; LG++)
          for (let bG = 0; bG < 6; bG++) QG._uploadArrayBufferViewToTexture(JG?.texture || GG, ZG, bG, LG)
      }
      if (JG) {
        const bG = GG._irradianceTexture;
        GG._irradianceTexture = null, QG._releaseTexture(GG), JG._swapAndDie(GG), GG._irradianceTexture = bG
      }
      dG && dG.dispose(), hG && (GG._lodTextureHigh && GG._lodTextureHigh._texture && (GG._lodTextureHigh._texture.isReady = !0), GG._lodTextureMid && GG._lodTextureMid._texture && (GG._lodTextureMid._texture.isReady = !0), GG._lodTextureLow && GG._lodTextureLow._texture && (GG._lodTextureLow._texture.isReady = !0))
    }

    function uG(GG, bG) {
      const ZG = (bG = hG(bG)).irradiance;
      if (!ZG) return;
      const wG = new yG.e;
      SG.p.FromArrayToRef(ZG.x, 0, wG.x), SG.p.FromArrayToRef(ZG.y, 0, wG.y), SG.p.FromArrayToRef(ZG.z, 0, wG.z), SG.p.FromArrayToRef(ZG.xx, 0, wG.xx), SG.p.FromArrayToRef(ZG.yy, 0, wG.yy), SG.p.FromArrayToRef(ZG.zz, 0, wG.zz), SG.p.FromArrayToRef(ZG.yz, 0, wG.yz), SG.p.FromArrayToRef(ZG.zx, 0, wG.zx), SG.p.FromArrayToRef(ZG.xy, 0, wG.xy), GG._sphericalPolynomial = wG
    }
    var iG = ZG(42292);
    class CG {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(GG, bG, ZG, wG, SG) {
        if (Array.isArray(GG)) return;
        const LG = KG(GG);
        if (LG) {
          bG.width = LG.width, bG.height = LG.width;
          try {
            (0, iG.e)(), uG(bG, LG), rG(bG, GG, LG).then((() => {
              bG.isReady = !0, bG.onLoadedObservable.notifyObservers(bG), bG.onLoadedObservable.clear(), wG && wG()
            }), (GG => {
              SG?.("Can not upload environment levels", GG)
            }))
          } catch (yG) {
            SG?.("Can not upload environment file", yG)
          }
        } else SG && SG("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  42292: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(42219),
      SG = ZG(40387);
    let LG = !1;

    function yG() {
      LG || (LG = !0, SG.b.prototype._sphericalPolynomialTargetSize = 0, SG.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(SG.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = wG.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((GG => {
              this._texture._sphericalPolynomial = GG, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(GG) {
          this._texture && (this._texture._sphericalPolynomial = GG)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  42219: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => YG
    });
    var wG = ZG(37439),
      SG = ZG(37471),
      LG = ZG(40379),
      yG = ZG(37443),
      kG = ZG(37621);
    class UG {
      constructor(GG, bG, ZG, wG) {
        this.name = GG, this.worldAxisForNormal = bG, this.worldAxisForFileX = ZG, this.worldAxisForFileY = wG
      }
    }
    class YG {
      static _NearestPow2Floor(GG) {
        return GG <= 1 ? 1 : 1 << Math.floor(Math.log2(GG))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(GG) {
        if (!GG.isCube) return null;
        GG.Dv()?.CK().flushFramebuffer();
        const bG = GG.getSize().width,
          ZG = GG._sphericalPolynomialTargetSize,
          wG = ZG > 0 ? this._NearestPow2Floor(ZG) : 0,
          SG = !GG.noMipmap && !0 === GG._texture?.generateMipMaps,
          LG = wG > 0 && wG < bG && SG,
          yG = LG ? Math.max(0, Math.round(Math.log2(bG / wG))) : 0,
          kG = LG ? Math.max(1, Math.floor(bG / Math.pow(2, yG))) : bG,
          UG = GG.readPixels(0, yG, void 0, !1),
          YG = GG.readPixels(1, yG, void 0, !1);
        let VG, pG;
        GG.isRenderTarget ? (VG = GG.readPixels(3, yG, void 0, !1), pG = GG.readPixels(2, yG, void 0, !1)) : (VG = GG.readPixels(2, yG, void 0, !1), pG = GG.readPixels(3, yG, void 0, !1));
        const fG = GG.readPixels(4, yG, void 0, !1),
          QG = GG.readPixels(5, yG, void 0, !1),
          KG = GG.gammaSpace,
          hG = wG > 0 && wG < bG && !LG;
        return new Promise((GG => {
          Promise.all([YG, UG, VG, pG, fG, QG]).then((ZG => {
            let [SG, LG, yG, UG, YG, VG] = ZG, pG = kG;
            if (hG) {
              const GG = 4;
              SG = this._DownsampleFace(SG, bG, wG, GG), LG = this._DownsampleFace(LG, bG, wG, GG), yG = this._DownsampleFace(yG, bG, wG, GG), UG = this._DownsampleFace(UG, bG, wG, GG), YG = this._DownsampleFace(YG, bG, wG, GG), VG = this._DownsampleFace(VG, bG, wG, GG), pG = wG
            }
            const fG = {
              size: pG,
              right: LG,
              left: SG,
              up: yG,
              down: UG,
              front: YG,
              back: VG,
              format: 5,
              type: SG instanceof Float32Array ? 1 : 0,
              gammaSpace: KG
            };
            GG(this.ConvertCubeMapToSphericalPolynomial(fG))
          }))
        }))
      }
      static _AreaElement(GG, bG) {
        return Math.atan2(GG * bG, Math.sqrt(GG * GG + bG * bG + 1))
      }
      static _DownsampleFace(GG, bG, ZG, wG) {
        const SG = GG instanceof Float32Array ? GG : Float32Array.from(GG),
          LG = ZG * ZG * wG,
          yG = new Float32Array(LG),
          kG = bG / ZG,
          UG = 1 / (kG * kG);
        for (let VG = 0; VG < ZG; VG++) {
          const GG = Math.floor(VG * kG),
            LG = Math.floor((VG + 1) * kG);
          for (let YG = 0; YG < ZG; YG++) {
            const pG = Math.floor(YG * kG),
              fG = Math.floor((YG + 1) * kG),
              QG = (VG * ZG + YG) * wG;
            for (let ZG = 0; ZG < wG; ZG++) {
              let kG = 0;
              for (let yG = GG; yG < LG; yG++)
                for (let GG = pG; GG < fG; GG++) kG += SG[(yG * bG + GG) * wG + ZG];
              yG[QG + ZG] = kG * UG
            }
          }
        }
        if (GG instanceof Float32Array) return yG;
        const YG = new(0, GG.constructor)(LG);
        for (let VG = 0; VG < LG; VG++) YG[VG] = yG[VG] + .5 | 0;
        return YG
      }
      static ConvertCubeMapToSphericalPolynomial(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZG = bG > 0 ? this._NearestPow2Floor(bG) : 0;
        if (ZG > 0 && GG.size > ZG) {
          const bG = 5 === GG.format ? 4 : 3,
            wG = ["right", "left", "up", "down", "front", "back"],
            SG = {};
          for (const LG of wG) SG[LG] = this._DownsampleFace(GG[LG], GG.size, ZG, bG);
          GG = {
            ...GG,
            ...SG,
            size: ZG
          }
        }
        const wG = new LG.b;
        let UG = 0;
        const YG = 2 / GG.size,
          VG = YG,
          pG = .5 * YG,
          fG = pG - 1;
        for (let LG = 0; LG < 6; LG++) {
          const bG = this._FileFaces[LG],
            ZG = GG[bG.name];
          let QG = fG;
          const KG = 5 === GG.format ? 4 : 3;
          for (let LG = 0; LG < GG.size; LG++) {
            let hG = fG;
            for (let VG = 0; VG < GG.size; VG++) {
              const fG = bG.worldAxisForFileX.scale(hG).add(bG.worldAxisForFileY.scale(QG)).add(bG.worldAxisForNormal);
              fG.normalize();
              const dG = this._AreaElement(hG - pG, QG - pG) - this._AreaElement(hG - pG, QG + pG) - this._AreaElement(hG + pG, QG - pG) + this._AreaElement(hG + pG, QG + pG);
              let JG = ZG[LG * GG.size * KG + VG * KG + 0],
                rG = ZG[LG * GG.size * KG + VG * KG + 1],
                zG = ZG[LG * GG.size * KG + VG * KG + 2];
              isNaN(JG) && (JG = 0), isNaN(rG) && (rG = 0), isNaN(zG) && (zG = 0), 0 === GG.type && (JG /= 255, rG /= 255, zG /= 255), GG.gammaSpace && (JG = Math.pow((0, SG.Clamp)(JG), yG.k), rG = Math.pow((0, SG.Clamp)(rG), yG.k), zG = Math.pow((0, SG.Clamp)(zG), yG.k));
              const EG = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const GG = Math.max(JG, rG, zG);
                if (GG > EG) {
                  const bG = EG / GG;
                  JG *= bG, rG *= bG, zG *= bG
                }
              } else JG = (0, SG.Clamp)(JG, 0, EG), rG = (0, SG.Clamp)(rG, 0, EG), zG = (0, SG.Clamp)(zG, 0, EG);
              const oG = new kG.c(JG, rG, zG);
              wG.addLight(fG, oG, dG), UG += dG, hG += YG
            }
            QG += VG
          }
        }
        const QG = 6 * (4 * Math.PI) / 6 / UG;
        return wG.scaleInPlace(QG), wG.convertIncidentRadianceToIrradiance(), wG.convertIrradianceToLambertianRadiance(), LG.e.FromHarmonics(wG)
      }
    }
    YG._FileFaces = [new UG("right", new wG.p(1, 0, 0), new wG.p(0, 0, -1), new wG.p(0, -1, 0)), new UG("left", new wG.p(-1, 0, 0), new wG.p(0, 0, 1), new wG.p(0, -1, 0)), new UG("up", new wG.p(0, 1, 0), new wG.p(1, 0, 0), new wG.p(0, 0, 1)), new UG("down", new wG.p(0, -1, 0), new wG.p(1, 0, 0), new wG.p(0, 0, -1)), new UG("front", new wG.p(0, 0, 1), new wG.p(1, 0, 0), new wG.p(0, -1, 0)), new UG("back", new wG.p(0, 0, -1), new wG.p(-1, 0, 0), new wG.p(0, -1, 0))], YG.MAX_HDRI_VALUE = 4096, YG.PRESERVE_CLAMPED_COLORS = !1
  },
  42262: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG
    });
    var wG = ZG(42248),
      SG = ZG(42268);
    class LG {
      static ExpandRGBDTexture(GG) {
        const bG = GG._texture;
        if (!bG || !GG.isRGBD) return;
        const SG = bG.CK(),
          LG = SG.getCaps(),
          yG = bG.isReady;
        let kG = !1;
        LG.textureHalfFloatRender && LG.textureHalfFloatLinearFiltering ? (kG = !0, bG.type = 2) : LG.textureFloatRender && LG.textureFloatLinearFiltering && (kG = !0, bG.type = 1), kG && (bG.isReady = !1, bG._isRGBD = !1, bG.invertY = !1);
        const UG = async () => {
          const LG = SG.isWebGPU,
            yG = LG ? 1 : 0;
          bG.isReady = !1, LG ? await ZG.e(347).then((() => ZG(61933))) : await ZG.e(329).then((() => ZG(61942)));
          const kG = new wG.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, SG, !1, void 0, bG.type, void 0, null, !1, void 0, yG);
          kG.externalTextureSamplerBinding = !0;
          const UG = SG.createRenderTargetTexture(bG.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: bG.samplingMode,
            type: bG.type,
            format: 5
          });
          kG.onEffectCreatedObservable.addOnce((ZG => {
            ZG.executeWhenCompiled((() => {
              kG.onApply = GG => {
                GG._bindTexture("textureSampler", bG), GG.setFloat2("scale", 1, 1)
              }, GG.Dv()?.postProcessManager.directRender([kG], UG, !0), SG.restoreDefaultFramebuffer(), SG._releaseTexture(bG), kG && kG.dispose(), UG._swapAndDie(bG), bG.isReady = !0
            }))
          }))
        };
        kG && (yG ? UG() : GG.onLoadObservable.addOnce(UG))
      }
      static async EncodeTextureToRGBD(GG, bG) {
        let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return bG.CK().isWebGPU ? await ZG.e(348).then((() => ZG(61960))) : await ZG.e(330).then((() => ZG(61956))), await (0, SG.e)("rgbdEncode", GG, bG, wG, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);