export const id = 288;
export const ids = [288];
export const modules = {
  40499: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      _ENVTextureLoader: () => yJ
    });
    var FJ = ZJ(38729),
      UJ = ZJ(36174),
      eJ = ZJ(36207),
      XJ = ZJ(38790),
      AJ = ZJ(38635),
      qJ = ZJ(38797),
      jJ = (ZJ(38874), ZJ(40501)),
      YJ = ZJ(37660),
      hJ = (ZJ(40512), ZJ(40538), ZJ(38859));
    const DJ = "image/png",
      sJ = [134, 22, 135, 150, 246, 214, 150, 54];

    function nJ(JJ) {
      const cJ = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength);
      let ZJ = 0;
      for (let XJ = 0; XJ < sJ.length; XJ++)
        if (cJ.getUint8(ZJ++) !== sJ[XJ]) return YJ.c.Error("Not a babylon environment map"), null;
      let FJ, UJ = "";
      for (; FJ = cJ.getUint8(ZJ++);) UJ += String.fromCharCode(FJ);
      let eJ = JSON.parse(UJ);
      return eJ = GJ(eJ), eJ.binaryDataPosition = ZJ, eJ.specular && (eJ.specular.lodGenerationScale = eJ.specular.lodGenerationScale || .8), eJ
    }

    function GJ(JJ) {
      if (JJ.version > 2) throw new Error(`Unsupported babylon environment map version "${JJ.version}". Latest supported version is "2".`);
      return 2 === JJ.version ? JJ : JJ = {
        ...JJ,
        version: 2,
        imageType: DJ
      }
    }

    function fJ(JJ, cJ) {
      const ZJ = (cJ = GJ(cJ)).specular;
      let FJ = Math.log2(cJ.width);
      if (FJ = Math.round(FJ) + 1, ZJ.mipmaps.length !== 6 * FJ) throw new Error(`Unsupported specular mipmaps number "${ZJ.mipmaps.length}"`);
      const UJ = new Array(FJ);
      for (let eJ = 0; eJ < FJ; eJ++) {
        UJ[eJ] = new Array(6);
        for (let FJ = 0; FJ < 6; FJ++) {
          const XJ = ZJ.mipmaps[6 * eJ + FJ];
          UJ[eJ][FJ] = new Uint8Array(JJ.buffer, JJ.byteOffset + cJ.binaryDataPosition + XJ.position, XJ.length)
        }
      }
      return UJ
    }

    function xJ(JJ, cJ) {
      cJ = GJ(cJ);
      const ZJ = new Array(6),
        FJ = cJ.irradiance?.irradianceTexture;
      if (FJ) {
        if (6 !== FJ.faces.length) throw new Error(`Incorrect irradiance texture faces number "${FJ.faces.length}"`);
        for (let UJ = 0; UJ < 6; UJ++) {
          const eJ = FJ.faces[UJ];
          ZJ[UJ] = new Uint8Array(JJ.buffer, JJ.byteOffset + cJ.binaryDataPosition + eJ.position, eJ.length)
        }
      }
      return ZJ
    }

    function rJ(JJ, cJ, ZJ) {
      const FJ = (ZJ = GJ(ZJ)).specular;
      if (!FJ) return Promise.resolve([]);
      JJ._lodGenerationScale = FJ.lodGenerationScale;
      const eJ = [],
        XJ = fJ(cJ, ZJ);
      eJ.push(mJ(JJ, XJ, ZJ.imageType));
      const AJ = ZJ.irradiance?.irradianceTexture;
      if (AJ) {
        const FJ = xJ(cJ, ZJ);
        let XJ = null;
        ZJ.irradiance?.irradianceTexture?.dominantDirection && (XJ = UJ.j.FromArray(ZJ.irradiance.irradianceTexture.dominantDirection)), eJ.push(QJ(JJ, FJ, AJ.size, ZJ.imageType, XJ))
      }
      return Promise.all(eJ)
    }
    async function vJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ) {
      return await new Promise(((hJ, DJ) => {
        if (ZJ) {
          const ZJ = cJ.createTexture(null, !0, !0, null, 1, null, (JJ => {
            DJ(JJ)
          }), JJ);
          FJ?.onEffectCreatedObservable.addOnce((AJ => {
            AJ.executeWhenCompiled((() => {
              FJ.externalTextureSamplerBinding = !0, FJ.onApply = FJ => {
                FJ._bindTexture("textureSampler", ZJ), FJ.setFloat2("scale", 1, cJ._features.needsInvertingBitmap && JJ instanceof ImageBitmap ? -1 : 1)
              }, cJ.scenes.length && (cJ.scenes[0].postProcessManager.directRender([FJ], jJ, !0, eJ, XJ), cJ.restoreDefaultFramebuffer(), ZJ.dispose(), URL.revokeObjectURL(UJ), hJ())
            }))
          }))
        } else {
          if (cJ._uploadImageToTexture(YJ, JJ, eJ, XJ), AJ) {
            const ZJ = qJ[XJ];
            ZJ && cJ._uploadImageToTexture(ZJ._texture, JJ, eJ, 0)
          }
          hJ()
        }
      }))
    }
    async function mJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DJ;
      const FJ = JJ.gn();
      JJ.format = 5, JJ.type = 0, JJ.generateMipMaps = !0, JJ._cachedAnisotropicFilteringLevel = null, FJ.updateTextureSamplingMode(3, JJ), await EJ(JJ, cJ, !0, ZJ), JJ.isReady = !0
    }
    async function QJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DJ,
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const eJ = JJ.gn(),
        XJ = new AJ.e(eJ, 5),
        jJ = new qJ.c(eJ, XJ);
      JJ._irradianceTexture = jJ, jJ._dominantDirection = UJ, XJ.isCube = !0, XJ.format = 5, XJ.type = 0, XJ.generateMipMaps = !0, XJ._cachedAnisotropicFilteringLevel = null, XJ.generateMipMaps = !0, XJ.width = ZJ, XJ.height = ZJ, eJ.updateTextureSamplingMode(3, XJ), await EJ(XJ, [cJ], !1, FJ), eJ.generateMipMapsForCubemap(XJ), XJ.isReady = !0
    }
    async function EJ(JJ, cJ, UJ) {
      let XJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DJ;
      if (!(0, FJ.e)(JJ.width)) throw new Error("Texture size must be a power of two");
      const YJ = (0, eJ.ILog2)(JJ.width) + 1,
        sJ = JJ.gn();
      let nJ = !1,
        GJ = !1,
        fJ = null,
        xJ = null,
        rJ = null;
      const mJ = sJ.getCaps();
      mJ.textureLOD ? sJ._features.supportRenderAndCopyToLodForFloatTextures ? mJ.textureHalfFloatRender && mJ.textureHalfFloatLinearFiltering ? (nJ = !0, JJ.type = 2) : mJ.textureFloatRender && mJ.textureFloatLinearFiltering && (nJ = !0, JJ.type = 1) : nJ = !1 : (nJ = !1, GJ = UJ);
      let QJ = 0;
      if (nJ) sJ.isWebGPU ? (QJ = 1, await ZJ.e(322).then((() => ZJ(59636)))) : await ZJ.e(304).then((() => ZJ(59641))), fJ = new jJ.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, sJ, !1, void 0, JJ.type, void 0, null, !1, void 0, QJ), JJ._isRGBD = !1, JJ.invertY = !1, xJ = sJ.createRenderTargetCubeTexture(JJ.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: JJ.type,
        format: 5
      });
      else if (JJ._isRGBD = !0, JJ.invertY = !0, GJ) {
        const cJ = 3;
        rJ = {};
        const ZJ = JJ._lodGenerationScale,
          FJ = JJ._lodGenerationOffset;
        for (let UJ = 0; UJ < cJ; UJ++) {
          const eJ = (YJ - 1) * ZJ + FJ,
            XJ = FJ + (eJ - FJ) * (1 - UJ / (cJ - 1)),
            jJ = Math.round(Math.min(Math.max(XJ, 0), eJ)),
            hJ = new AJ.e(sJ, 2);
          hJ.isCube = !0, hJ.invertY = !0, hJ.generateMipMaps = !1, sJ.updateTextureSamplingMode(2, hJ);
          const DJ = new qJ.c(null);
          switch (DJ._isCube = !0, DJ._texture = hJ, rJ[jJ] = DJ, UJ) {
            case 0:
              JJ._lodTextureLow = DJ;
              break;
            case 1:
              JJ._lodTextureMid = DJ;
              break;
            case 2:
              JJ._lodTextureHigh = DJ
          }
        }
      }
      const EJ = [];
      for (let ZJ = 0; ZJ < cJ.length; ZJ++)
        for (let FJ = 0; FJ < 6; FJ++) {
          const UJ = cJ[ZJ][FJ],
            eJ = (0, hJ.k)(UJ),
            AJ = new Blob([eJ], {
              type: XJ
            }),
            qJ = URL.createObjectURL(AJ);
          let jJ;
          if (sJ._features.forceBitmapOverHTMLImageElement) jJ = sJ.createImageBitmap(AJ, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async cJ => await vJ(cJ, sJ, nJ, fJ, qJ, FJ, ZJ, GJ, rJ, xJ, JJ)));
          else {
            const cJ = new Image;
            cJ.src = qJ, jJ = new Promise(((UJ, eJ) => {
              cJ.onload = () => {
                vJ(cJ, sJ, nJ, fJ, qJ, FJ, ZJ, GJ, rJ, xJ, JJ).then((() => UJ())).catch((JJ => {
                  eJ(JJ)
                }))
              }, cJ.onerror = JJ => {
                eJ(JJ)
              }
            }))
          }
          EJ.push(jJ)
        }
      if (await Promise.all(EJ), cJ.length < YJ) {
        let ZJ;
        const FJ = Math.pow(2, YJ - 1 - cJ.length),
          UJ = FJ * FJ * 4;
        switch (JJ.type) {
          case 0:
            ZJ = new Uint8Array(UJ);
            break;
          case 2:
            ZJ = new Uint16Array(UJ);
            break;
          case 1:
            ZJ = new Float32Array(UJ)
        }
        for (let eJ = cJ.length; eJ < YJ; eJ++)
          for (let cJ = 0; cJ < 6; cJ++) sJ._uploadArrayBufferViewToTexture(xJ?.texture || JJ, ZJ, cJ, eJ)
      }
      if (xJ) {
        const cJ = JJ._irradianceTexture;
        JJ._irradianceTexture = null, sJ._releaseTexture(JJ), xJ._swapAndDie(JJ), JJ._irradianceTexture = cJ
      }
      fJ && fJ.dispose(), GJ && (JJ._lodTextureHigh && JJ._lodTextureHigh._texture && (JJ._lodTextureHigh._texture.isReady = !0), JJ._lodTextureMid && JJ._lodTextureMid._texture && (JJ._lodTextureMid._texture.isReady = !0), JJ._lodTextureLow && JJ._lodTextureLow._texture && (JJ._lodTextureLow._texture.isReady = !0))
    }

    function VJ(JJ, cJ) {
      const ZJ = (cJ = GJ(cJ)).irradiance;
      if (!ZJ) return;
      const FJ = new XJ.h;
      UJ.j.FromArrayToRef(ZJ.x, 0, FJ.x), UJ.j.FromArrayToRef(ZJ.y, 0, FJ.y), UJ.j.FromArrayToRef(ZJ.z, 0, FJ.z), UJ.j.FromArrayToRef(ZJ.xx, 0, FJ.xx), UJ.j.FromArrayToRef(ZJ.yy, 0, FJ.yy), UJ.j.FromArrayToRef(ZJ.zz, 0, FJ.zz), UJ.j.FromArrayToRef(ZJ.yz, 0, FJ.yz), UJ.j.FromArrayToRef(ZJ.zx, 0, FJ.zx), UJ.j.FromArrayToRef(ZJ.xy, 0, FJ.xy), JJ._sphericalPolynomial = FJ
    }
    var KJ = ZJ(40542);
    class yJ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(JJ, cJ, ZJ, FJ, UJ) {
        if (Array.isArray(JJ)) return;
        const eJ = nJ(JJ);
        if (eJ) {
          cJ.width = eJ.width, cJ.height = eJ.width;
          try {
            (0, KJ.d)(), VJ(cJ, eJ), rJ(cJ, JJ, eJ).then((() => {
              cJ.isReady = !0, cJ.onLoadedObservable.notifyObservers(cJ), cJ.onLoadedObservable.clear(), FJ && FJ()
            }), (JJ => {
              UJ?.("Can not upload environment levels", JJ)
            }))
          } catch (XJ) {
            UJ?.("Can not upload environment file", XJ)
          }
        } else UJ && UJ("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  40542: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(40476),
      UJ = ZJ(38797);
    let eJ = !1;

    function XJ() {
      eJ || (eJ = !0, UJ.c.prototype._sphericalPolynomialTargetSize = 0, UJ.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(UJ.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = FJ.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((JJ => {
              this._texture._sphericalPolynomial = JJ, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(JJ) {
          this._texture && (this._texture._sphericalPolynomial = JJ)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  40476: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(36207),
      eJ = ZJ(38790),
      XJ = ZJ(36177),
      AJ = ZJ(36231);
    class qJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.name = JJ, this.worldAxisForNormal = cJ, this.worldAxisForFileX = ZJ, this.worldAxisForFileY = FJ
      }
    }
    class jJ {
      static _NearestPow2Floor(JJ) {
        return JJ <= 1 ? 1 : 1 << Math.floor(Math.log2(JJ))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(JJ) {
        if (!JJ.isCube) return null;
        JJ.Qy()?.gn().flushFramebuffer();
        const cJ = JJ.getSize().width,
          ZJ = JJ._sphericalPolynomialTargetSize,
          FJ = ZJ > 0 ? this._NearestPow2Floor(ZJ) : 0,
          UJ = !JJ.noMipmap && !0 === JJ._texture?.generateMipMaps,
          eJ = FJ > 0 && FJ < cJ && UJ,
          XJ = eJ ? Math.max(0, Math.round(Math.log2(cJ / FJ))) : 0,
          AJ = eJ ? Math.max(1, Math.floor(cJ / Math.pow(2, XJ))) : cJ,
          qJ = JJ.readPixels(0, XJ, void 0, !1),
          jJ = JJ.readPixels(1, XJ, void 0, !1);
        let YJ, hJ;
        JJ.isRenderTarget ? (YJ = JJ.readPixels(3, XJ, void 0, !1), hJ = JJ.readPixels(2, XJ, void 0, !1)) : (YJ = JJ.readPixels(2, XJ, void 0, !1), hJ = JJ.readPixels(3, XJ, void 0, !1));
        const DJ = JJ.readPixels(4, XJ, void 0, !1),
          sJ = JJ.readPixels(5, XJ, void 0, !1),
          nJ = JJ.gammaSpace,
          GJ = FJ > 0 && FJ < cJ && !eJ;
        return new Promise((JJ => {
          Promise.all([jJ, qJ, YJ, hJ, DJ, sJ]).then((ZJ => {
            let [UJ, eJ, XJ, qJ, jJ, YJ] = ZJ, hJ = AJ;
            if (GJ) {
              const JJ = 4;
              UJ = this._DownsampleFace(UJ, cJ, FJ, JJ), eJ = this._DownsampleFace(eJ, cJ, FJ, JJ), XJ = this._DownsampleFace(XJ, cJ, FJ, JJ), qJ = this._DownsampleFace(qJ, cJ, FJ, JJ), jJ = this._DownsampleFace(jJ, cJ, FJ, JJ), YJ = this._DownsampleFace(YJ, cJ, FJ, JJ), hJ = FJ
            }
            const DJ = {
              size: hJ,
              right: eJ,
              left: UJ,
              up: XJ,
              down: qJ,
              front: jJ,
              back: YJ,
              format: 5,
              type: UJ instanceof Float32Array ? 1 : 0,
              gammaSpace: nJ
            };
            JJ(this.ConvertCubeMapToSphericalPolynomial(DJ))
          }))
        }))
      }
      static _AreaElement(JJ, cJ) {
        return Math.atan2(JJ * cJ, Math.sqrt(JJ * JJ + cJ * cJ + 1))
      }
      static _DownsampleFace(JJ, cJ, ZJ, FJ) {
        const UJ = JJ instanceof Float32Array ? JJ : Float32Array.from(JJ),
          eJ = ZJ * ZJ * FJ,
          XJ = new Float32Array(eJ),
          AJ = cJ / ZJ,
          qJ = 1 / (AJ * AJ);
        for (let YJ = 0; YJ < ZJ; YJ++) {
          const JJ = Math.floor(YJ * AJ),
            eJ = Math.floor((YJ + 1) * AJ);
          for (let jJ = 0; jJ < ZJ; jJ++) {
            const hJ = Math.floor(jJ * AJ),
              DJ = Math.floor((jJ + 1) * AJ),
              sJ = (YJ * ZJ + jJ) * FJ;
            for (let ZJ = 0; ZJ < FJ; ZJ++) {
              let AJ = 0;
              for (let XJ = JJ; XJ < eJ; XJ++)
                for (let JJ = hJ; JJ < DJ; JJ++) AJ += UJ[(XJ * cJ + JJ) * FJ + ZJ];
              XJ[sJ + ZJ] = AJ * qJ
            }
          }
        }
        if (JJ instanceof Float32Array) return XJ;
        const jJ = new(0, JJ.constructor)(eJ);
        for (let YJ = 0; YJ < eJ; YJ++) jJ[YJ] = XJ[YJ] + .5 | 0;
        return jJ
      }
      static ConvertCubeMapToSphericalPolynomial(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZJ = cJ > 0 ? this._NearestPow2Floor(cJ) : 0;
        if (ZJ > 0 && JJ.size > ZJ) {
          const cJ = 5 === JJ.format ? 4 : 3,
            FJ = ["right", "left", "up", "down", "front", "back"],
            UJ = {};
          for (const eJ of FJ) UJ[eJ] = this._DownsampleFace(JJ[eJ], JJ.size, ZJ, cJ);
          JJ = {
            ...JJ,
            ...UJ,
            size: ZJ
          }
        }
        const FJ = new eJ.e;
        let qJ = 0;
        const jJ = 2 / JJ.size,
          YJ = jJ,
          hJ = .5 * jJ,
          DJ = hJ - 1;
        for (let eJ = 0; eJ < 6; eJ++) {
          const cJ = this._FileFaces[eJ],
            ZJ = JJ[cJ.name];
          let sJ = DJ;
          const nJ = 5 === JJ.format ? 4 : 3;
          for (let eJ = 0; eJ < JJ.size; eJ++) {
            let GJ = DJ;
            for (let YJ = 0; YJ < JJ.size; YJ++) {
              const DJ = cJ.worldAxisForFileX.scale(GJ).add(cJ.worldAxisForFileY.scale(sJ)).add(cJ.worldAxisForNormal);
              DJ.normalize();
              const fJ = this._AreaElement(GJ - hJ, sJ - hJ) - this._AreaElement(GJ - hJ, sJ + hJ) - this._AreaElement(GJ + hJ, sJ - hJ) + this._AreaElement(GJ + hJ, sJ + hJ);
              let xJ = ZJ[eJ * JJ.size * nJ + YJ * nJ + 0],
                rJ = ZJ[eJ * JJ.size * nJ + YJ * nJ + 1],
                vJ = ZJ[eJ * JJ.size * nJ + YJ * nJ + 2];
              isNaN(xJ) && (xJ = 0), isNaN(rJ) && (rJ = 0), isNaN(vJ) && (vJ = 0), 0 === JJ.type && (xJ /= 255, rJ /= 255, vJ /= 255), JJ.gammaSpace && (xJ = Math.pow((0, UJ.Clamp)(xJ), XJ.j), rJ = Math.pow((0, UJ.Clamp)(rJ), XJ.j), vJ = Math.pow((0, UJ.Clamp)(vJ), XJ.j));
              const mJ = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const JJ = Math.max(xJ, rJ, vJ);
                if (JJ > mJ) {
                  const cJ = mJ / JJ;
                  xJ *= cJ, rJ *= cJ, vJ *= cJ
                }
              } else xJ = (0, UJ.Clamp)(xJ, 0, mJ), rJ = (0, UJ.Clamp)(rJ, 0, mJ), vJ = (0, UJ.Clamp)(vJ, 0, mJ);
              const QJ = new AJ.e(xJ, rJ, vJ);
              FJ.addLight(DJ, QJ, fJ), qJ += fJ, GJ += jJ
            }
            sJ += YJ
          }
        }
        const sJ = 6 * (4 * Math.PI) / 6 / qJ;
        return FJ.scaleInPlace(sJ), FJ.convertIncidentRadianceToIrradiance(), FJ.convertIrradianceToLambertianRadiance(), eJ.h.FromHarmonics(FJ)
      }
    }
    jJ._FileFaces = [new qJ("right", new FJ.j(1, 0, 0), new FJ.j(0, 0, -1), new FJ.j(0, -1, 0)), new qJ("left", new FJ.j(-1, 0, 0), new FJ.j(0, 0, 1), new FJ.j(0, -1, 0)), new qJ("up", new FJ.j(0, 1, 0), new FJ.j(1, 0, 0), new FJ.j(0, 0, 1)), new qJ("down", new FJ.j(0, -1, 0), new FJ.j(1, 0, 0), new FJ.j(0, 0, -1)), new qJ("front", new FJ.j(0, 0, 1), new FJ.j(1, 0, 0), new FJ.j(0, -1, 0)), new qJ("back", new FJ.j(0, 0, -1), new FJ.j(-1, 0, 0), new FJ.j(0, -1, 0))], jJ.MAX_HDRI_VALUE = 4096, jJ.PRESERVE_CLAMPED_COLORS = !1
  },
  40512: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ
    });
    var FJ = ZJ(40501),
      UJ = ZJ(40520);
    class eJ {
      static ExpandRGBDTexture(JJ) {
        const cJ = JJ._texture;
        if (!cJ || !JJ.isRGBD) return;
        const UJ = cJ.gn(),
          eJ = UJ.getCaps(),
          XJ = cJ.isReady;
        let AJ = !1;
        eJ.textureHalfFloatRender && eJ.textureHalfFloatLinearFiltering ? (AJ = !0, cJ.type = 2) : eJ.textureFloatRender && eJ.textureFloatLinearFiltering && (AJ = !0, cJ.type = 1), AJ && (cJ.isReady = !1, cJ._isRGBD = !1, cJ.invertY = !1);
        const qJ = async () => {
          const eJ = UJ.isWebGPU,
            XJ = eJ ? 1 : 0;
          cJ.isReady = !1, eJ ? await ZJ.e(322).then((() => ZJ(59636))) : await ZJ.e(304).then((() => ZJ(59641)));
          const AJ = new FJ.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, UJ, !1, void 0, cJ.type, void 0, null, !1, void 0, XJ);
          AJ.externalTextureSamplerBinding = !0;
          const qJ = UJ.createRenderTargetTexture(cJ.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: cJ.samplingMode,
            type: cJ.type,
            format: 5
          });
          AJ.onEffectCreatedObservable.addOnce((ZJ => {
            ZJ.executeWhenCompiled((() => {
              AJ.onApply = JJ => {
                JJ._bindTexture("textureSampler", cJ), JJ.setFloat2("scale", 1, 1)
              }, JJ.Qy()?.postProcessManager.directRender([AJ], qJ, !0), UJ.restoreDefaultFramebuffer(), UJ._releaseTexture(cJ), AJ && AJ.dispose(), qJ._swapAndDie(cJ), cJ.isReady = !0
            }))
          }))
        };
        AJ && (XJ ? qJ() : JJ.onLoadObservable.addOnce(qJ))
      }
      static async EncodeTextureToRGBD(JJ, cJ) {
        let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return cJ.gn().isWebGPU ? await ZJ.e(323).then((() => ZJ(59654))) : await ZJ.e(305).then((() => ZJ(59652))), await (0, UJ.c)("rgbdEncode", JJ, cJ, FJ, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);