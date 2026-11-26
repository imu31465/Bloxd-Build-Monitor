export const id = 614;
export const ids = [614];
export const modules = {
  44484: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      _ENVTextureLoader: () => dU
    });
    var cU = zU(41036),
      yU = zU(37819),
      QU = zU(37855),
      AU = zU(41103),
      FU = zU(40940),
      oU = zU(41108),
      DU = (zU(41202), zU(44492)),
      EU = zU(39493),
      YU = (zU(44507), zU(44529), zU(41177));
    const NU = "image/png",
      IU = [134, 22, 135, 150, 246, 214, 150, 54];

    function pU(UU) {
      const XU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
      let zU = 0;
      for (let AU = 0; AU < IU.length; AU++)
        if (XU.getUint8(zU++) !== IU[AU]) return EU.b.Error("Not a babylon environment map"), null;
      let cU, yU = "";
      for (; cU = XU.getUint8(zU++);) yU += String.fromCharCode(cU);
      let QU = JSON.parse(yU);
      return QU = aU(QU), QU.binaryDataPosition = zU, QU.specular && (QU.specular.lodGenerationScale = QU.specular.lodGenerationScale || .8), QU
    }

    function aU(UU) {
      if (UU.version > 2) throw new Error(`Unsupported babylon environment map version "${UU.version}". Latest supported version is "2".`);
      return 2 === UU.version ? UU : UU = {
        ...UU,
        version: 2,
        imageType: NU
      }
    }

    function tU(UU, XU) {
      const zU = (XU = aU(XU)).specular;
      let cU = Math.log2(XU.width);
      if (cU = Math.round(cU) + 1, zU.mipmaps.length !== 6 * cU) throw new Error(`Unsupported specular mipmaps number "${zU.mipmaps.length}"`);
      const yU = new Array(cU);
      for (let QU = 0; QU < cU; QU++) {
        yU[QU] = new Array(6);
        for (let cU = 0; cU < 6; cU++) {
          const AU = zU.mipmaps[6 * QU + cU];
          yU[QU][cU] = new Uint8Array(UU.buffer, UU.byteOffset + XU.binaryDataPosition + AU.position, AU.length)
        }
      }
      return yU
    }

    function gU(UU, XU) {
      XU = aU(XU);
      const zU = new Array(6),
        cU = XU.irradiance?.irradianceTexture;
      if (cU) {
        if (6 !== cU.faces.length) throw new Error(`Incorrect irradiance texture faces number "${cU.faces.length}"`);
        for (let yU = 0; yU < 6; yU++) {
          const QU = cU.faces[yU];
          zU[yU] = new Uint8Array(UU.buffer, UU.byteOffset + XU.binaryDataPosition + QU.position, QU.length)
        }
      }
      return zU
    }

    function kU(UU, XU, zU) {
      const cU = (zU = aU(zU)).specular;
      if (!cU) return Promise.resolve([]);
      UU._lodGenerationScale = cU.lodGenerationScale;
      const QU = [],
        AU = tU(XU, zU);
      QU.push(BU(UU, AU, zU.imageType));
      const FU = zU.irradiance?.irradianceTexture;
      if (FU) {
        const cU = gU(XU, zU);
        let AU = null;
        zU.irradiance?.irradianceTexture?.dominantDirection && (AU = yU.q.FromArray(zU.irradiance.irradianceTexture.dominantDirection)), QU.push(ZU(UU, cU, FU.size, zU.imageType, AU))
      }
      return Promise.all(QU)
    }
    async function GU(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
      return await new Promise(((YU, NU) => {
        if (zU) {
          const zU = XU.createTexture(null, !0, !0, null, 1, null, (UU => {
            NU(UU)
          }), UU);
          cU?.onEffectCreatedObservable.addOnce((FU => {
            FU.executeWhenCompiled((() => {
              cU.externalTextureSamplerBinding = !0, cU.onApply = cU => {
                cU._bindTexture("textureSampler", zU), cU.setFloat2("scale", 1, XU._features.needsInvertingBitmap && UU instanceof ImageBitmap ? -1 : 1)
              }, XU.scenes.length && (XU.scenes[0].postProcessManager.directRender([cU], DU, !0, QU, AU), XU.restoreDefaultFramebuffer(), zU.dispose(), URL.revokeObjectURL(yU), YU())
            }))
          }))
        } else {
          if (XU._uploadImageToTexture(EU, UU, QU, AU), FU) {
            const zU = oU[AU];
            zU && XU._uploadImageToTexture(zU._texture, UU, QU, 0)
          }
          YU()
        }
      }))
    }
    async function BU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NU;
      const cU = UU.qp();
      UU.format = 5, UU.type = 0, UU.generateMipMaps = !0, UU._cachedAnisotropicFilteringLevel = null, cU.updateTextureSamplingMode(3, UU), await RU(UU, XU, !0, zU), UU.isReady = !0
    }
    async function ZU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : NU,
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const QU = UU.qp(),
        AU = new FU.e(QU, 5),
        DU = new oU.e(QU, AU);
      UU._irradianceTexture = DU, DU._dominantDirection = yU, AU.isCube = !0, AU.format = 5, AU.type = 0, AU.generateMipMaps = !0, AU._cachedAnisotropicFilteringLevel = null, AU.generateMipMaps = !0, AU.width = zU, AU.height = zU, QU.updateTextureSamplingMode(3, AU), await RU(AU, [XU], !1, cU), QU.generateMipMapsForCubemap(AU), AU.isReady = !0
    }
    async function RU(UU, XU, yU) {
      let AU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : NU;
      if (!(0, cU.k)(UU.width)) throw new Error("Texture size must be a power of two");
      const EU = (0, QU.ILog2)(UU.width) + 1,
        IU = UU.qp();
      let pU = !1,
        aU = !1,
        tU = null,
        gU = null,
        kU = null;
      const BU = IU.getCaps();
      BU.textureLOD ? IU._features.supportRenderAndCopyToLodForFloatTextures ? BU.textureHalfFloatRender && BU.textureHalfFloatLinearFiltering ? (pU = !0, UU.type = 2) : BU.textureFloatRender && BU.textureFloatLinearFiltering && (pU = !0, UU.type = 1) : pU = !1 : (pU = !1, aU = yU);
      let ZU = 0;
      if (pU) IU.isWebGPU ? (ZU = 1, await zU.e(648).then((() => zU(64051)))) : await zU.e(630).then((() => zU(64057))), tU = new DU.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, IU, !1, void 0, UU.type, void 0, null, !1, void 0, ZU), UU._isRGBD = !1, UU.invertY = !1, gU = IU.createRenderTargetCubeTexture(UU.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: UU.type,
        format: 5
      });
      else if (UU._isRGBD = !0, UU.invertY = !0, aU) {
        const XU = 3;
        kU = {};
        const zU = UU._lodGenerationScale,
          cU = UU._lodGenerationOffset;
        for (let yU = 0; yU < XU; yU++) {
          const QU = (EU - 1) * zU + cU,
            AU = cU + (QU - cU) * (1 - yU / (XU - 1)),
            DU = Math.round(Math.min(Math.max(AU, 0), QU)),
            YU = new FU.e(IU, 2);
          YU.isCube = !0, YU.invertY = !0, YU.generateMipMaps = !1, IU.updateTextureSamplingMode(2, YU);
          const NU = new oU.e(null);
          switch (NU._isCube = !0, NU._texture = YU, kU[DU] = NU, yU) {
            case 0:
              UU._lodTextureLow = NU;
              break;
            case 1:
              UU._lodTextureMid = NU;
              break;
            case 2:
              UU._lodTextureHigh = NU
          }
        }
      }
      const RU = [];
      for (let zU = 0; zU < XU.length; zU++)
        for (let cU = 0; cU < 6; cU++) {
          const yU = XU[zU][cU],
            QU = (0, YU.l)(yU),
            FU = new Blob([QU], {
              type: AU
            }),
            oU = URL.createObjectURL(FU);
          let DU;
          if (IU._features.forceBitmapOverHTMLImageElement) DU = IU.createImageBitmap(FU, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async XU => await GU(XU, IU, pU, tU, oU, cU, zU, aU, kU, gU, UU)));
          else {
            const XU = new Image;
            XU.src = oU, DU = new Promise(((yU, QU) => {
              XU.onload = () => {
                GU(XU, IU, pU, tU, oU, cU, zU, aU, kU, gU, UU).then((() => yU())).catch((UU => {
                  QU(UU)
                }))
              }, XU.onerror = UU => {
                QU(UU)
              }
            }))
          }
          RU.push(DU)
        }
      if (await Promise.all(RU), XU.length < EU) {
        let zU;
        const cU = Math.pow(2, EU - 1 - XU.length),
          yU = cU * cU * 4;
        switch (UU.type) {
          case 0:
            zU = new Uint8Array(yU);
            break;
          case 2:
            zU = new Uint16Array(yU);
            break;
          case 1:
            zU = new Float32Array(yU)
        }
        for (let QU = XU.length; QU < EU; QU++)
          for (let XU = 0; XU < 6; XU++) IU._uploadArrayBufferViewToTexture(gU?.texture || UU, zU, XU, QU)
      }
      if (gU) {
        const XU = UU._irradianceTexture;
        UU._irradianceTexture = null, IU._releaseTexture(UU), gU._swapAndDie(UU), UU._irradianceTexture = XU
      }
      tU && tU.dispose(), aU && (UU._lodTextureHigh && UU._lodTextureHigh._texture && (UU._lodTextureHigh._texture.isReady = !0), UU._lodTextureMid && UU._lodTextureMid._texture && (UU._lodTextureMid._texture.isReady = !0), UU._lodTextureLow && UU._lodTextureLow._texture && (UU._lodTextureLow._texture.isReady = !0))
    }

    function PU(UU, XU) {
      const zU = (XU = aU(XU)).irradiance;
      if (!zU) return;
      const cU = new AU.c;
      yU.q.FromArrayToRef(zU.x, 0, cU.x), yU.q.FromArrayToRef(zU.y, 0, cU.y), yU.q.FromArrayToRef(zU.z, 0, cU.z), yU.q.FromArrayToRef(zU.xx, 0, cU.xx), yU.q.FromArrayToRef(zU.yy, 0, cU.yy), yU.q.FromArrayToRef(zU.zz, 0, cU.zz), yU.q.FromArrayToRef(zU.yz, 0, cU.yz), yU.q.FromArrayToRef(zU.zx, 0, cU.zx), yU.q.FromArrayToRef(zU.xy, 0, cU.xy), UU._sphericalPolynomial = cU
    }
    var WU = zU(44532);
    class dU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(UU, XU, zU, cU, yU) {
        if (Array.isArray(UU)) return;
        const QU = pU(UU);
        if (QU) {
          XU.width = QU.width, XU.height = QU.width;
          try {
            (0, WU.b)(), PU(XU, QU), kU(XU, UU, QU).then((() => {
              XU.isReady = !0, XU.onLoadedObservable.notifyObservers(XU), XU.onLoadedObservable.clear(), cU && cU()
            }), (UU => {
              yU?.("Can not upload environment levels", UU)
            }))
          } catch (AU) {
            yU?.("Can not upload environment file", AU)
          }
        } else yU && yU("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  44532: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU
    });
    var cU = zU(44458),
      yU = zU(41108);
    let QU = !1;

    function AU() {
      QU || (QU = !0, yU.e.prototype._sphericalPolynomialTargetSize = 0, yU.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(yU.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = cU.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((UU => {
              this._texture._sphericalPolynomial = UU, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(UU) {
          this._texture && (this._texture._sphericalPolynomial = UU)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  44458: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU
    });
    var cU = zU(37819),
      yU = zU(37855),
      QU = zU(41103),
      AU = zU(37825),
      FU = zU(37923);
    class oU {
      constructor(UU, XU, zU, cU) {
        this.name = UU, this.worldAxisForNormal = XU, this.worldAxisForFileX = zU, this.worldAxisForFileY = cU
      }
    }
    class DU {
      static _NearestPow2Floor(UU) {
        return UU <= 1 ? 1 : 1 << Math.floor(Math.log2(UU))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(UU) {
        if (!UU.isCube) return null;
        UU.nS()?.qp().flushFramebuffer();
        const XU = UU.getSize().width,
          zU = UU._sphericalPolynomialTargetSize,
          cU = zU > 0 ? this._NearestPow2Floor(zU) : 0,
          yU = !UU.noMipmap && !0 === UU._texture?.generateMipMaps,
          QU = cU > 0 && cU < XU && yU,
          AU = QU ? Math.max(0, Math.round(Math.log2(XU / cU))) : 0,
          FU = QU ? Math.max(1, Math.floor(XU / Math.pow(2, AU))) : XU,
          oU = UU.readPixels(0, AU, void 0, !1),
          DU = UU.readPixels(1, AU, void 0, !1);
        let EU, YU;
        UU.isRenderTarget ? (EU = UU.readPixels(3, AU, void 0, !1), YU = UU.readPixels(2, AU, void 0, !1)) : (EU = UU.readPixels(2, AU, void 0, !1), YU = UU.readPixels(3, AU, void 0, !1));
        const NU = UU.readPixels(4, AU, void 0, !1),
          IU = UU.readPixels(5, AU, void 0, !1),
          pU = UU.gammaSpace,
          aU = cU > 0 && cU < XU && !QU;
        return new Promise((UU => {
          Promise.all([DU, oU, EU, YU, NU, IU]).then((zU => {
            let [yU, QU, AU, oU, DU, EU] = zU, YU = FU;
            if (aU) {
              const UU = 4;
              yU = this._DownsampleFace(yU, XU, cU, UU), QU = this._DownsampleFace(QU, XU, cU, UU), AU = this._DownsampleFace(AU, XU, cU, UU), oU = this._DownsampleFace(oU, XU, cU, UU), DU = this._DownsampleFace(DU, XU, cU, UU), EU = this._DownsampleFace(EU, XU, cU, UU), YU = cU
            }
            const NU = {
              size: YU,
              right: QU,
              left: yU,
              up: AU,
              down: oU,
              front: DU,
              back: EU,
              format: 5,
              type: yU instanceof Float32Array ? 1 : 0,
              gammaSpace: pU
            };
            UU(this.ConvertCubeMapToSphericalPolynomial(NU))
          }))
        }))
      }
      static _AreaElement(UU, XU) {
        return Math.atan2(UU * XU, Math.sqrt(UU * UU + XU * XU + 1))
      }
      static _DownsampleFace(UU, XU, zU, cU) {
        const yU = UU instanceof Float32Array ? UU : Float32Array.from(UU),
          QU = zU * zU * cU,
          AU = new Float32Array(QU),
          FU = XU / zU,
          oU = 1 / (FU * FU);
        for (let EU = 0; EU < zU; EU++) {
          const UU = Math.floor(EU * FU),
            QU = Math.floor((EU + 1) * FU);
          for (let DU = 0; DU < zU; DU++) {
            const YU = Math.floor(DU * FU),
              NU = Math.floor((DU + 1) * FU),
              IU = (EU * zU + DU) * cU;
            for (let zU = 0; zU < cU; zU++) {
              let FU = 0;
              for (let AU = UU; AU < QU; AU++)
                for (let UU = YU; UU < NU; UU++) FU += yU[(AU * XU + UU) * cU + zU];
              AU[IU + zU] = FU * oU
            }
          }
        }
        if (UU instanceof Float32Array) return AU;
        const DU = new(0, UU.constructor)(QU);
        for (let EU = 0; EU < QU; EU++) DU[EU] = AU[EU] + .5 | 0;
        return DU
      }
      static ConvertCubeMapToSphericalPolynomial(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zU = XU > 0 ? this._NearestPow2Floor(XU) : 0;
        if (zU > 0 && UU.size > zU) {
          const XU = 5 === UU.format ? 4 : 3,
            cU = ["right", "left", "up", "down", "front", "back"],
            yU = {};
          for (const QU of cU) yU[QU] = this._DownsampleFace(UU[QU], UU.size, zU, XU);
          UU = {
            ...UU,
            ...yU,
            size: zU
          }
        }
        const cU = new QU.b;
        let oU = 0;
        const DU = 2 / UU.size,
          EU = DU,
          YU = .5 * DU,
          NU = YU - 1;
        for (let QU = 0; QU < 6; QU++) {
          const XU = this._FileFaces[QU],
            zU = UU[XU.name];
          let IU = NU;
          const pU = 5 === UU.format ? 4 : 3;
          for (let QU = 0; QU < UU.size; QU++) {
            let aU = NU;
            for (let EU = 0; EU < UU.size; EU++) {
              const NU = XU.worldAxisForFileX.scale(aU).add(XU.worldAxisForFileY.scale(IU)).add(XU.worldAxisForNormal);
              NU.normalize();
              const tU = this._AreaElement(aU - YU, IU - YU) - this._AreaElement(aU - YU, IU + YU) - this._AreaElement(aU + YU, IU - YU) + this._AreaElement(aU + YU, IU + YU);
              let gU = zU[QU * UU.size * pU + EU * pU + 0],
                kU = zU[QU * UU.size * pU + EU * pU + 1],
                GU = zU[QU * UU.size * pU + EU * pU + 2];
              isNaN(gU) && (gU = 0), isNaN(kU) && (kU = 0), isNaN(GU) && (GU = 0), 0 === UU.type && (gU /= 255, kU /= 255, GU /= 255), UU.gammaSpace && (gU = Math.pow((0, yU.Clamp)(gU), AU.h), kU = Math.pow((0, yU.Clamp)(kU), AU.h), GU = Math.pow((0, yU.Clamp)(GU), AU.h));
              const BU = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const UU = Math.max(gU, kU, GU);
                if (UU > BU) {
                  const XU = BU / UU;
                  gU *= XU, kU *= XU, GU *= XU
                }
              } else gU = (0, yU.Clamp)(gU, 0, BU), kU = (0, yU.Clamp)(kU, 0, BU), GU = (0, yU.Clamp)(GU, 0, BU);
              const ZU = new FU.b(gU, kU, GU);
              cU.addLight(NU, ZU, tU), oU += tU, aU += DU
            }
            IU += EU
          }
        }
        const IU = 6 * (4 * Math.PI) / 6 / oU;
        return cU.scaleInPlace(IU), cU.convertIncidentRadianceToIrradiance(), cU.convertIrradianceToLambertianRadiance(), QU.c.FromHarmonics(cU)
      }
    }
    DU._FileFaces = [new oU("right", new cU.q(1, 0, 0), new cU.q(0, 0, -1), new cU.q(0, -1, 0)), new oU("left", new cU.q(-1, 0, 0), new cU.q(0, 0, 1), new cU.q(0, -1, 0)), new oU("up", new cU.q(0, 1, 0), new cU.q(1, 0, 0), new cU.q(0, 0, 1)), new oU("down", new cU.q(0, -1, 0), new cU.q(1, 0, 0), new cU.q(0, 0, -1)), new oU("front", new cU.q(0, 0, 1), new cU.q(1, 0, 0), new cU.q(0, -1, 0)), new oU("back", new cU.q(0, 0, -1), new cU.q(-1, 0, 0), new cU.q(0, -1, 0))], DU.MAX_HDRI_VALUE = 4096, DU.PRESERVE_CLAMPED_COLORS = !1
  },
  44507: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(44492),
      yU = zU(44509);
    class QU {
      static ExpandRGBDTexture(UU) {
        const XU = UU._texture;
        if (!XU || !UU.isRGBD) return;
        const yU = XU.qp(),
          QU = yU.getCaps(),
          AU = XU.isReady;
        let FU = !1;
        QU.textureHalfFloatRender && QU.textureHalfFloatLinearFiltering ? (FU = !0, XU.type = 2) : QU.textureFloatRender && QU.textureFloatLinearFiltering && (FU = !0, XU.type = 1), FU && (XU.isReady = !1, XU._isRGBD = !1, XU.invertY = !1);
        const oU = async () => {
          const QU = yU.isWebGPU,
            AU = QU ? 1 : 0;
          XU.isReady = !1, QU ? await zU.e(648).then((() => zU(64051))) : await zU.e(630).then((() => zU(64057)));
          const FU = new cU.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, yU, !1, void 0, XU.type, void 0, null, !1, void 0, AU);
          FU.externalTextureSamplerBinding = !0;
          const oU = yU.createRenderTargetTexture(XU.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: XU.samplingMode,
            type: XU.type,
            format: 5
          });
          FU.onEffectCreatedObservable.addOnce((zU => {
            zU.executeWhenCompiled((() => {
              FU.onApply = UU => {
                UU._bindTexture("textureSampler", XU), UU.setFloat2("scale", 1, 1)
              }, UU.nS()?.postProcessManager.directRender([FU], oU, !0), yU.restoreDefaultFramebuffer(), yU._releaseTexture(XU), FU && FU.dispose(), oU._swapAndDie(XU), XU.isReady = !0
            }))
          }))
        };
        FU && (AU ? oU() : UU.onLoadObservable.addOnce(oU))
      }
      static async EncodeTextureToRGBD(UU, XU) {
        let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return XU.qp().isWebGPU ? await zU.e(649).then((() => zU(64078))) : await zU.e(631).then((() => zU(64069))), await (0, yU.c)("rgbdEncode", UU, XU, cU, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);