export const id = 617;
export const ids = [617];
export const modules = {
  44690: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      _ENVTextureLoader: () => NV
    });
    var JV = xV(41190),
      YV = xV(38269),
      UV = xV(38303),
      yV = xV(41248),
      pV = xV(41077),
      QV = xV(41252),
      nV = (xV(41337), xV(44697)),
      wV = xV(39870),
      ZV = (xV(44706), xV(44723), xV(41318));
    const vV = "image/png",
      rV = [134, 22, 135, 150, 246, 214, 150, 54];

    function kV(VV) {
      const eV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength);
      let xV = 0;
      for (let yV = 0; yV < rV.length; yV++)
        if (eV.getUint8(xV++) !== rV[yV]) return wV.b.Error("Not a babylon environment map"), null;
      let JV, YV = "";
      for (; JV = eV.getUint8(xV++);) YV += String.fromCharCode(JV);
      let UV = JSON.parse(YV);
      return UV = bV(UV), UV.binaryDataPosition = xV, UV.specular && (UV.specular.lodGenerationScale = UV.specular.lodGenerationScale || .8), UV
    }

    function bV(VV) {
      if (VV.version > 2) throw new Error(`Unsupported babylon environment map version "${VV.version}". Latest supported version is "2".`);
      return 2 === VV.version ? VV : VV = {
        ...VV,
        version: 2,
        imageType: vV
      }
    }

    function EV(VV, eV) {
      const xV = (eV = bV(eV)).specular;
      let JV = Math.log2(eV.width);
      if (JV = Math.round(JV) + 1, xV.mipmaps.length !== 6 * JV) throw new Error(`Unsupported specular mipmaps number "${xV.mipmaps.length}"`);
      const YV = new Array(JV);
      for (let UV = 0; UV < JV; UV++) {
        YV[UV] = new Array(6);
        for (let JV = 0; JV < 6; JV++) {
          const yV = xV.mipmaps[6 * UV + JV];
          YV[UV][JV] = new Uint8Array(VV.buffer, VV.byteOffset + eV.binaryDataPosition + yV.position, yV.length)
        }
      }
      return YV
    }

    function BV(VV, eV) {
      eV = bV(eV);
      const xV = new Array(6),
        JV = eV.irradiance?.irradianceTexture;
      if (JV) {
        if (6 !== JV.faces.length) throw new Error(`Incorrect irradiance texture faces number "${JV.faces.length}"`);
        for (let YV = 0; YV < 6; YV++) {
          const UV = JV.faces[YV];
          xV[YV] = new Uint8Array(VV.buffer, VV.byteOffset + eV.binaryDataPosition + UV.position, UV.length)
        }
      }
      return xV
    }

    function jV(VV, eV, xV) {
      const JV = (xV = bV(xV)).specular;
      if (!JV) return Promise.resolve([]);
      VV._lodGenerationScale = JV.lodGenerationScale;
      const UV = [],
        yV = EV(eV, xV);
      UV.push(tV(VV, yV, xV.imageType));
      const pV = xV.irradiance?.irradianceTexture;
      if (pV) {
        const JV = BV(eV, xV);
        let yV = null;
        xV.irradiance?.irradianceTexture?.dominantDirection && (yV = YV.o.FromArray(xV.irradiance.irradianceTexture.dominantDirection)), UV.push(FV(VV, JV, pV.size, xV.imageType, yV))
      }
      return Promise.all(UV)
    }
    async function qV(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
      return await new Promise(((ZV, vV) => {
        if (xV) {
          const xV = eV.createTexture(null, !0, !0, null, 1, null, (VV => {
            vV(VV)
          }), VV);
          JV?.onEffectCreatedObservable.addOnce((pV => {
            pV.executeWhenCompiled((() => {
              JV.externalTextureSamplerBinding = !0, JV.onApply = JV => {
                JV._bindTexture("textureSampler", xV), JV.setFloat2("scale", 1, eV._features.needsInvertingBitmap && VV instanceof ImageBitmap ? -1 : 1)
              }, eV.scenes.length && (eV.scenes[0].postProcessManager.directRender([JV], nV, !0, UV, yV), eV.restoreDefaultFramebuffer(), xV.dispose(), URL.revokeObjectURL(YV), ZV())
            }))
          }))
        } else {
          if (eV._uploadImageToTexture(wV, VV, UV, yV), pV) {
            const xV = QV[yV];
            xV && eV._uploadImageToTexture(xV._texture, VV, UV, 0)
          }
          ZV()
        }
      }))
    }
    async function tV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vV;
      const JV = VV.sk();
      VV.format = 5, VV.type = 0, VV.generateMipMaps = !0, VV._cachedAnisotropicFilteringLevel = null, JV.updateTextureSamplingMode(3, VV), await TV(VV, eV, !0, xV), VV.isReady = !0
    }
    async function FV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vV,
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const UV = VV.sk(),
        yV = new pV.e(UV, 5),
        nV = new QV.c(UV, yV);
      VV._irradianceTexture = nV, nV._dominantDirection = YV, yV.isCube = !0, yV.format = 5, yV.type = 0, yV.generateMipMaps = !0, yV._cachedAnisotropicFilteringLevel = null, yV.generateMipMaps = !0, yV.width = xV, yV.height = xV, UV.updateTextureSamplingMode(3, yV), await TV(yV, [eV], !1, JV), UV.generateMipMapsForCubemap(yV), yV.isReady = !0
    }
    async function TV(VV, eV, YV) {
      let yV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vV;
      if (!(0, JV.k)(VV.width)) throw new Error("Texture size must be a power of two");
      const wV = (0, UV.ILog2)(VV.width) + 1,
        rV = VV.sk();
      let kV = !1,
        bV = !1,
        EV = null,
        BV = null,
        jV = null;
      const tV = rV.getCaps();
      tV.textureLOD ? rV._features.supportRenderAndCopyToLodForFloatTextures ? tV.textureHalfFloatRender && tV.textureHalfFloatLinearFiltering ? (kV = !0, VV.type = 2) : tV.textureFloatRender && tV.textureFloatLinearFiltering && (kV = !0, VV.type = 1) : kV = !1 : (kV = !1, bV = YV);
      let FV = 0;
      if (kV) rV.isWebGPU ? (FV = 1, await xV.e(651).then((() => xV(64410)))) : await xV.e(633).then((() => xV(64417))), EV = new nV.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, rV, !1, void 0, VV.type, void 0, null, !1, void 0, FV), VV._isRGBD = !1, VV.invertY = !1, BV = rV.createRenderTargetCubeTexture(VV.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: VV.type,
        format: 5
      });
      else if (VV._isRGBD = !0, VV.invertY = !0, bV) {
        const eV = 3;
        jV = {};
        const xV = VV._lodGenerationScale,
          JV = VV._lodGenerationOffset;
        for (let YV = 0; YV < eV; YV++) {
          const UV = (wV - 1) * xV + JV,
            yV = JV + (UV - JV) * (1 - YV / (eV - 1)),
            nV = Math.round(Math.min(Math.max(yV, 0), UV)),
            ZV = new pV.e(rV, 2);
          ZV.isCube = !0, ZV.invertY = !0, ZV.generateMipMaps = !1, rV.updateTextureSamplingMode(2, ZV);
          const vV = new QV.c(null);
          switch (vV._isCube = !0, vV._texture = ZV, jV[nV] = vV, YV) {
            case 0:
              VV._lodTextureLow = vV;
              break;
            case 1:
              VV._lodTextureMid = vV;
              break;
            case 2:
              VV._lodTextureHigh = vV
          }
        }
      }
      const TV = [];
      for (let xV = 0; xV < eV.length; xV++)
        for (let JV = 0; JV < 6; JV++) {
          const YV = eV[xV][JV],
            UV = (0, ZV.i)(YV),
            pV = new Blob([UV], {
              type: yV
            }),
            QV = URL.createObjectURL(pV);
          let nV;
          if (rV._features.forceBitmapOverHTMLImageElement) nV = rV.createImageBitmap(pV, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async eV => await qV(eV, rV, kV, EV, QV, JV, xV, bV, jV, BV, VV)));
          else {
            const eV = new Image;
            eV.src = QV, nV = new Promise(((YV, UV) => {
              eV.onload = () => {
                qV(eV, rV, kV, EV, QV, JV, xV, bV, jV, BV, VV).then((() => YV())).catch((VV => {
                  UV(VV)
                }))
              }, eV.onerror = VV => {
                UV(VV)
              }
            }))
          }
          TV.push(nV)
        }
      if (await Promise.all(TV), eV.length < wV) {
        let xV;
        const JV = Math.pow(2, wV - 1 - eV.length),
          YV = JV * JV * 4;
        switch (VV.type) {
          case 0:
            xV = new Uint8Array(YV);
            break;
          case 2:
            xV = new Uint16Array(YV);
            break;
          case 1:
            xV = new Float32Array(YV)
        }
        for (let UV = eV.length; UV < wV; UV++)
          for (let eV = 0; eV < 6; eV++) rV._uploadArrayBufferViewToTexture(BV?.texture || VV, xV, eV, UV)
      }
      if (BV) {
        const eV = VV._irradianceTexture;
        VV._irradianceTexture = null, rV._releaseTexture(VV), BV._swapAndDie(VV), VV._irradianceTexture = eV
      }
      EV && EV.dispose(), bV && (VV._lodTextureHigh && VV._lodTextureHigh._texture && (VV._lodTextureHigh._texture.isReady = !0), VV._lodTextureMid && VV._lodTextureMid._texture && (VV._lodTextureMid._texture.isReady = !0), VV._lodTextureLow && VV._lodTextureLow._texture && (VV._lodTextureLow._texture.isReady = !0))
    }

    function PV(VV, eV) {
      const xV = (eV = bV(eV)).irradiance;
      if (!xV) return;
      const JV = new yV.f;
      YV.o.FromArrayToRef(xV.x, 0, JV.x), YV.o.FromArrayToRef(xV.y, 0, JV.y), YV.o.FromArrayToRef(xV.z, 0, JV.z), YV.o.FromArrayToRef(xV.xx, 0, JV.xx), YV.o.FromArrayToRef(xV.yy, 0, JV.yy), YV.o.FromArrayToRef(xV.zz, 0, JV.zz), YV.o.FromArrayToRef(xV.yz, 0, JV.yz), YV.o.FromArrayToRef(xV.zx, 0, JV.zx), YV.o.FromArrayToRef(xV.xy, 0, JV.xy), VV._sphericalPolynomial = JV
    }
    var AV = xV(44725);
    class NV {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(VV, eV, xV, JV, YV) {
        if (Array.isArray(VV)) return;
        const UV = kV(VV);
        if (UV) {
          eV.width = UV.width, eV.height = UV.width;
          try {
            (0, AV.b)(), PV(eV, UV), jV(eV, VV, UV).then((() => {
              eV.isReady = !0, eV.onLoadedObservable.notifyObservers(eV), eV.onLoadedObservable.clear(), JV && JV()
            }), (VV => {
              YV?.("Can not upload environment levels", VV)
            }))
          } catch (yV) {
            YV?.("Can not upload environment file", yV)
          }
        } else YV && YV("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  44725: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV
    });
    var JV = xV(44663),
      YV = xV(41252);
    let UV = !1;

    function yV() {
      UV || (UV = !0, YV.c.prototype._sphericalPolynomialTargetSize = 0, YV.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(YV.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = JV.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((VV => {
              this._texture._sphericalPolynomial = VV, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(VV) {
          this._texture && (this._texture._sphericalPolynomial = VV)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  44663: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV
    });
    var JV = xV(38269),
      YV = xV(38303),
      UV = xV(41248),
      yV = xV(38272),
      pV = xV(38389);
    class QV {
      constructor(VV, eV, xV, JV) {
        this.name = VV, this.worldAxisForNormal = eV, this.worldAxisForFileX = xV, this.worldAxisForFileY = JV
      }
    }
    class nV {
      static _NearestPow2Floor(VV) {
        return VV <= 1 ? 1 : 1 << Math.floor(Math.log2(VV))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(VV) {
        if (!VV.isCube) return null;
        VV.dD()?.sk().flushFramebuffer();
        const eV = VV.getSize().width,
          xV = VV._sphericalPolynomialTargetSize,
          JV = xV > 0 ? this._NearestPow2Floor(xV) : 0,
          YV = !VV.noMipmap && !0 === VV._texture?.generateMipMaps,
          UV = JV > 0 && JV < eV && YV,
          yV = UV ? Math.max(0, Math.round(Math.log2(eV / JV))) : 0,
          pV = UV ? Math.max(1, Math.floor(eV / Math.pow(2, yV))) : eV,
          QV = VV.readPixels(0, yV, void 0, !1),
          nV = VV.readPixels(1, yV, void 0, !1);
        let wV, ZV;
        VV.isRenderTarget ? (wV = VV.readPixels(3, yV, void 0, !1), ZV = VV.readPixels(2, yV, void 0, !1)) : (wV = VV.readPixels(2, yV, void 0, !1), ZV = VV.readPixels(3, yV, void 0, !1));
        const vV = VV.readPixels(4, yV, void 0, !1),
          rV = VV.readPixels(5, yV, void 0, !1),
          kV = VV.gammaSpace,
          bV = JV > 0 && JV < eV && !UV;
        return new Promise((VV => {
          Promise.all([nV, QV, wV, ZV, vV, rV]).then((xV => {
            let [YV, UV, yV, QV, nV, wV] = xV, ZV = pV;
            if (bV) {
              const VV = 4;
              YV = this._DownsampleFace(YV, eV, JV, VV), UV = this._DownsampleFace(UV, eV, JV, VV), yV = this._DownsampleFace(yV, eV, JV, VV), QV = this._DownsampleFace(QV, eV, JV, VV), nV = this._DownsampleFace(nV, eV, JV, VV), wV = this._DownsampleFace(wV, eV, JV, VV), ZV = JV
            }
            const vV = {
              size: ZV,
              right: UV,
              left: YV,
              up: yV,
              down: QV,
              front: nV,
              back: wV,
              format: 5,
              type: YV instanceof Float32Array ? 1 : 0,
              gammaSpace: kV
            };
            VV(this.ConvertCubeMapToSphericalPolynomial(vV))
          }))
        }))
      }
      static _AreaElement(VV, eV) {
        return Math.atan2(VV * eV, Math.sqrt(VV * VV + eV * eV + 1))
      }
      static _DownsampleFace(VV, eV, xV, JV) {
        const YV = VV instanceof Float32Array ? VV : Float32Array.from(VV),
          UV = xV * xV * JV,
          yV = new Float32Array(UV),
          pV = eV / xV,
          QV = 1 / (pV * pV);
        for (let wV = 0; wV < xV; wV++) {
          const VV = Math.floor(wV * pV),
            UV = Math.floor((wV + 1) * pV);
          for (let nV = 0; nV < xV; nV++) {
            const ZV = Math.floor(nV * pV),
              vV = Math.floor((nV + 1) * pV),
              rV = (wV * xV + nV) * JV;
            for (let xV = 0; xV < JV; xV++) {
              let pV = 0;
              for (let yV = VV; yV < UV; yV++)
                for (let VV = ZV; VV < vV; VV++) pV += YV[(yV * eV + VV) * JV + xV];
              yV[rV + xV] = pV * QV
            }
          }
        }
        if (VV instanceof Float32Array) return yV;
        const nV = new(0, VV.constructor)(UV);
        for (let wV = 0; wV < UV; wV++) nV[wV] = yV[wV] + .5 | 0;
        return nV
      }
      static ConvertCubeMapToSphericalPolynomial(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const xV = eV > 0 ? this._NearestPow2Floor(eV) : 0;
        if (xV > 0 && VV.size > xV) {
          const eV = 5 === VV.format ? 4 : 3,
            JV = ["right", "left", "up", "down", "front", "back"],
            YV = {};
          for (const UV of JV) YV[UV] = this._DownsampleFace(VV[UV], VV.size, xV, eV);
          VV = {
            ...VV,
            ...YV,
            size: xV
          }
        }
        const JV = new UV.e;
        let QV = 0;
        const nV = 2 / VV.size,
          wV = nV,
          ZV = .5 * nV,
          vV = ZV - 1;
        for (let UV = 0; UV < 6; UV++) {
          const eV = this._FileFaces[UV],
            xV = VV[eV.name];
          let rV = vV;
          const kV = 5 === VV.format ? 4 : 3;
          for (let UV = 0; UV < VV.size; UV++) {
            let bV = vV;
            for (let wV = 0; wV < VV.size; wV++) {
              const vV = eV.worldAxisForFileX.scale(bV).add(eV.worldAxisForFileY.scale(rV)).add(eV.worldAxisForNormal);
              vV.normalize();
              const EV = this._AreaElement(bV - ZV, rV - ZV) - this._AreaElement(bV - ZV, rV + ZV) - this._AreaElement(bV + ZV, rV - ZV) + this._AreaElement(bV + ZV, rV + ZV);
              let BV = xV[UV * VV.size * kV + wV * kV + 0],
                jV = xV[UV * VV.size * kV + wV * kV + 1],
                qV = xV[UV * VV.size * kV + wV * kV + 2];
              isNaN(BV) && (BV = 0), isNaN(jV) && (jV = 0), isNaN(qV) && (qV = 0), 0 === VV.type && (BV /= 255, jV /= 255, qV /= 255), VV.gammaSpace && (BV = Math.pow((0, YV.Clamp)(BV), yV.f), jV = Math.pow((0, YV.Clamp)(jV), yV.f), qV = Math.pow((0, YV.Clamp)(qV), yV.f));
              const tV = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const VV = Math.max(BV, jV, qV);
                if (VV > tV) {
                  const eV = tV / VV;
                  BV *= eV, jV *= eV, qV *= eV
                }
              } else BV = (0, YV.Clamp)(BV, 0, tV), jV = (0, YV.Clamp)(jV, 0, tV), qV = (0, YV.Clamp)(qV, 0, tV);
              const FV = new pV.d(BV, jV, qV);
              JV.addLight(vV, FV, EV), QV += EV, bV += nV
            }
            rV += wV
          }
        }
        const rV = 6 * (4 * Math.PI) / 6 / QV;
        return JV.scaleInPlace(rV), JV.convertIncidentRadianceToIrradiance(), JV.convertIrradianceToLambertianRadiance(), UV.f.FromHarmonics(JV)
      }
    }
    nV._FileFaces = [new QV("right", new JV.o(1, 0, 0), new JV.o(0, 0, -1), new JV.o(0, -1, 0)), new QV("left", new JV.o(-1, 0, 0), new JV.o(0, 0, 1), new JV.o(0, -1, 0)), new QV("up", new JV.o(0, 1, 0), new JV.o(1, 0, 0), new JV.o(0, 0, 1)), new QV("down", new JV.o(0, -1, 0), new JV.o(1, 0, 0), new JV.o(0, 0, -1)), new QV("front", new JV.o(0, 0, 1), new JV.o(1, 0, 0), new JV.o(0, -1, 0)), new QV("back", new JV.o(0, 0, -1), new JV.o(-1, 0, 0), new JV.o(0, -1, 0))], nV.MAX_HDRI_VALUE = 4096, nV.PRESERVE_CLAMPED_COLORS = !1
  },
  44706: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(44697),
      YV = xV(44714);
    class UV {
      static ExpandRGBDTexture(VV) {
        const eV = VV._texture;
        if (!eV || !VV.isRGBD) return;
        const YV = eV.sk(),
          UV = YV.getCaps(),
          yV = eV.isReady;
        let pV = !1;
        UV.textureHalfFloatRender && UV.textureHalfFloatLinearFiltering ? (pV = !0, eV.type = 2) : UV.textureFloatRender && UV.textureFloatLinearFiltering && (pV = !0, eV.type = 1), pV && (eV.isReady = !1, eV._isRGBD = !1, eV.invertY = !1);
        const QV = async () => {
          const UV = YV.isWebGPU,
            yV = UV ? 1 : 0;
          eV.isReady = !1, UV ? await xV.e(651).then((() => xV(64410))) : await xV.e(633).then((() => xV(64417)));
          const pV = new JV.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, YV, !1, void 0, eV.type, void 0, null, !1, void 0, yV);
          pV.externalTextureSamplerBinding = !0;
          const QV = YV.createRenderTargetTexture(eV.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: eV.samplingMode,
            type: eV.type,
            format: 5
          });
          pV.onEffectCreatedObservable.addOnce((xV => {
            xV.executeWhenCompiled((() => {
              pV.onApply = VV => {
                VV._bindTexture("textureSampler", eV), VV.setFloat2("scale", 1, 1)
              }, VV.dD()?.postProcessManager.directRender([pV], QV, !0), YV.restoreDefaultFramebuffer(), YV._releaseTexture(eV), pV && pV.dispose(), QV._swapAndDie(eV), eV.isReady = !0
            }))
          }))
        };
        pV && (yV ? QV() : VV.onLoadObservable.addOnce(QV))
      }
      static async EncodeTextureToRGBD(VV, eV) {
        let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return eV.sk().isWebGPU ? await xV.e(652).then((() => xV(64429))) : await xV.e(634).then((() => xV(64425))), await (0, YV.d)("rgbdEncode", VV, eV, JV, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);