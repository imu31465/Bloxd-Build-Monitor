export const id = 298;
export const ids = [298];
export const modules = {
  40888: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      _ENVTextureLoader: () => HD
    });
    var ID = cD(39084),
      pD = cD(36446),
      iD = cD(36479),
      fD = cD(39142),
      bD = cD(38979),
      QD = cD(39148),
      wD = (cD(39239), cD(40895)),
      SD = cD(38048),
      BD = (cD(40908), cD(40941), cD(39213));
    const yD = "image/png",
      MD = [134, 22, 135, 150, 246, 214, 150, 54];

    function tD(DD) {
      const CD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      let cD = 0;
      for (let fD = 0; fD < MD.length; fD++)
        if (CD.getUint8(cD++) !== MD[fD]) return SD.e.Error("Not a babylon environment map"), null;
      let ID, pD = "";
      for (; ID = CD.getUint8(cD++);) pD += String.fromCharCode(ID);
      let iD = JSON.parse(pD);
      return iD = ZD(iD), iD.binaryDataPosition = cD, iD.specular && (iD.specular.lodGenerationScale = iD.specular.lodGenerationScale || .8), iD
    }

    function ZD(DD) {
      if (DD.version > 2) throw new Error(`Unsupported babylon environment map version "${DD.version}". Latest supported version is "2".`);
      return 2 === DD.version ? DD : DD = {
        ...DD,
        version: 2,
        imageType: yD
      }
    }

    function oD(DD, CD) {
      const cD = (CD = ZD(CD)).specular;
      let ID = Math.log2(CD.width);
      if (ID = Math.round(ID) + 1, cD.mipmaps.length !== 6 * ID) throw new Error(`Unsupported specular mipmaps number "${cD.mipmaps.length}"`);
      const pD = new Array(ID);
      for (let iD = 0; iD < ID; iD++) {
        pD[iD] = new Array(6);
        for (let ID = 0; ID < 6; ID++) {
          const fD = cD.mipmaps[6 * iD + ID];
          pD[iD][ID] = new Uint8Array(DD.buffer, DD.byteOffset + CD.binaryDataPosition + fD.position, fD.length)
        }
      }
      return pD
    }

    function vD(DD, CD) {
      CD = ZD(CD);
      const cD = new Array(6),
        ID = CD.irradiance?.irradianceTexture;
      if (ID) {
        if (6 !== ID.faces.length) throw new Error(`Incorrect irradiance texture faces number "${ID.faces.length}"`);
        for (let pD = 0; pD < 6; pD++) {
          const iD = ID.faces[pD];
          cD[pD] = new Uint8Array(DD.buffer, DD.byteOffset + CD.binaryDataPosition + iD.position, iD.length)
        }
      }
      return cD
    }

    function ND(DD, CD, cD) {
      const ID = (cD = ZD(cD)).specular;
      if (!ID) return Promise.resolve([]);
      DD._lodGenerationScale = ID.lodGenerationScale;
      const iD = [],
        fD = oD(CD, cD);
      iD.push(XD(DD, fD, cD.imageType));
      const bD = cD.irradiance?.irradianceTexture;
      if (bD) {
        const ID = vD(CD, cD);
        let fD = null;
        cD.irradiance?.irradianceTexture?.dominantDirection && (fD = pD.p.FromArray(cD.irradiance.irradianceTexture.dominantDirection)), iD.push(mD(DD, ID, bD.size, cD.imageType, fD))
      }
      return Promise.all(iD)
    }
    async function gD(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD) {
      return await new Promise(((BD, yD) => {
        if (cD) {
          const cD = CD.createTexture(null, !0, !0, null, 1, null, (DD => {
            yD(DD)
          }), DD);
          ID?.onEffectCreatedObservable.addOnce((bD => {
            bD.executeWhenCompiled((() => {
              ID.externalTextureSamplerBinding = !0, ID.onApply = ID => {
                ID._bindTexture("textureSampler", cD), ID.setFloat2("scale", 1, CD._features.needsInvertingBitmap && DD instanceof ImageBitmap ? -1 : 1)
              }, CD.scenes.length && (CD.scenes[0].postProcessManager.directRender([ID], wD, !0, iD, fD), CD.restoreDefaultFramebuffer(), cD.dispose(), URL.revokeObjectURL(pD), BD())
            }))
          }))
        } else {
          if (CD._uploadImageToTexture(SD, DD, iD, fD), bD) {
            const cD = QD[fD];
            cD && CD._uploadImageToTexture(cD._texture, DD, iD, 0)
          }
          BD()
        }
      }))
    }
    async function XD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yD;
      const ID = DD.DZ();
      DD.format = 5, DD.type = 0, DD.generateMipMaps = !0, DD._cachedAnisotropicFilteringLevel = null, ID.updateTextureSamplingMode(3, DD), await nD(DD, CD, !0, cD), DD.isReady = !0
    }
    async function mD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yD,
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const iD = DD.DZ(),
        fD = new bD.c(iD, 5),
        wD = new QD.d(iD, fD);
      DD._irradianceTexture = wD, wD._dominantDirection = pD, fD.isCube = !0, fD.format = 5, fD.type = 0, fD.generateMipMaps = !0, fD._cachedAnisotropicFilteringLevel = null, fD.generateMipMaps = !0, fD.width = cD, fD.height = cD, iD.updateTextureSamplingMode(3, fD), await nD(fD, [CD], !1, ID), iD.generateMipMapsForCubemap(fD), fD.isReady = !0
    }
    async function nD(DD, CD, pD) {
      let fD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yD;
      if (!(0, ID.h)(DD.width)) throw new Error("Texture size must be a power of two");
      const SD = (0, iD.ILog2)(DD.width) + 1,
        MD = DD.DZ();
      let tD = !1,
        ZD = !1,
        oD = null,
        vD = null,
        ND = null;
      const XD = MD.getCaps();
      XD.textureLOD ? MD._features.supportRenderAndCopyToLodForFloatTextures ? XD.textureHalfFloatRender && XD.textureHalfFloatLinearFiltering ? (tD = !0, DD.type = 2) : XD.textureFloatRender && XD.textureFloatLinearFiltering && (tD = !0, DD.type = 1) : tD = !1 : (tD = !1, ZD = pD);
      let mD = 0;
      if (tD) MD.isWebGPU ? (mD = 1, await cD.e(332).then((() => cD(60609)))) : await cD.e(314).then((() => cD(60613))), oD = new wD.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, MD, !1, void 0, DD.type, void 0, null, !1, void 0, mD), DD._isRGBD = !1, DD.invertY = !1, vD = MD.createRenderTargetCubeTexture(DD.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: DD.type,
        format: 5
      });
      else if (DD._isRGBD = !0, DD.invertY = !0, ZD) {
        const CD = 3;
        ND = {};
        const cD = DD._lodGenerationScale,
          ID = DD._lodGenerationOffset;
        for (let pD = 0; pD < CD; pD++) {
          const iD = (SD - 1) * cD + ID,
            fD = ID + (iD - ID) * (1 - pD / (CD - 1)),
            wD = Math.round(Math.min(Math.max(fD, 0), iD)),
            BD = new bD.c(MD, 2);
          BD.isCube = !0, BD.invertY = !0, BD.generateMipMaps = !1, MD.updateTextureSamplingMode(2, BD);
          const yD = new QD.d(null);
          switch (yD._isCube = !0, yD._texture = BD, ND[wD] = yD, pD) {
            case 0:
              DD._lodTextureLow = yD;
              break;
            case 1:
              DD._lodTextureMid = yD;
              break;
            case 2:
              DD._lodTextureHigh = yD
          }
        }
      }
      const nD = [];
      for (let cD = 0; cD < CD.length; cD++)
        for (let ID = 0; ID < 6; ID++) {
          const pD = CD[cD][ID],
            iD = (0, BD.k)(pD),
            bD = new Blob([iD], {
              type: fD
            }),
            QD = URL.createObjectURL(bD);
          let wD;
          if (MD._features.forceBitmapOverHTMLImageElement) wD = MD.createImageBitmap(bD, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async CD => await gD(CD, MD, tD, oD, QD, ID, cD, ZD, ND, vD, DD)));
          else {
            const CD = new Image;
            CD.src = QD, wD = new Promise(((pD, iD) => {
              CD.onload = () => {
                gD(CD, MD, tD, oD, QD, ID, cD, ZD, ND, vD, DD).then((() => pD())).catch((DD => {
                  iD(DD)
                }))
              }, CD.onerror = DD => {
                iD(DD)
              }
            }))
          }
          nD.push(wD)
        }
      if (await Promise.all(nD), CD.length < SD) {
        let cD;
        const ID = Math.pow(2, SD - 1 - CD.length),
          pD = ID * ID * 4;
        switch (DD.type) {
          case 0:
            cD = new Uint8Array(pD);
            break;
          case 2:
            cD = new Uint16Array(pD);
            break;
          case 1:
            cD = new Float32Array(pD)
        }
        for (let iD = CD.length; iD < SD; iD++)
          for (let CD = 0; CD < 6; CD++) MD._uploadArrayBufferViewToTexture(vD?.texture || DD, cD, CD, iD)
      }
      if (vD) {
        const CD = DD._irradianceTexture;
        DD._irradianceTexture = null, MD._releaseTexture(DD), vD._swapAndDie(DD), DD._irradianceTexture = CD
      }
      oD && oD.dispose(), ZD && (DD._lodTextureHigh && DD._lodTextureHigh._texture && (DD._lodTextureHigh._texture.isReady = !0), DD._lodTextureMid && DD._lodTextureMid._texture && (DD._lodTextureMid._texture.isReady = !0), DD._lodTextureLow && DD._lodTextureLow._texture && (DD._lodTextureLow._texture.isReady = !0))
    }

    function OD(DD, CD) {
      const cD = (CD = ZD(CD)).irradiance;
      if (!cD) return;
      const ID = new fD.f;
      pD.p.FromArrayToRef(cD.x, 0, ID.x), pD.p.FromArrayToRef(cD.y, 0, ID.y), pD.p.FromArrayToRef(cD.z, 0, ID.z), pD.p.FromArrayToRef(cD.xx, 0, ID.xx), pD.p.FromArrayToRef(cD.yy, 0, ID.yy), pD.p.FromArrayToRef(cD.zz, 0, ID.zz), pD.p.FromArrayToRef(cD.yz, 0, ID.yz), pD.p.FromArrayToRef(cD.zx, 0, ID.zx), pD.p.FromArrayToRef(cD.xy, 0, ID.xy), DD._sphericalPolynomial = ID
    }
    var PD = cD(40949);
    class HD {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(DD, CD, cD, ID, pD) {
        if (Array.isArray(DD)) return;
        const iD = tD(DD);
        if (iD) {
          CD.width = iD.width, CD.height = iD.width;
          try {
            (0, PD.d)(), OD(CD, iD), ND(CD, DD, iD).then((() => {
              CD.isReady = !0, CD.onLoadedObservable.notifyObservers(CD), CD.onLoadedObservable.clear(), ID && ID()
            }), (DD => {
              pD?.("Can not upload environment levels", DD)
            }))
          } catch (fD) {
            pD?.("Can not upload environment file", fD)
          }
        } else pD && pD("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  40949: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(40859),
      pD = cD(39148);
    let iD = !1;

    function fD() {
      iD || (iD = !0, pD.d.prototype._sphericalPolynomialTargetSize = 0, pD.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(pD.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = ID.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((DD => {
              this._texture._sphericalPolynomial = DD, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(DD) {
          this._texture && (this._texture._sphericalPolynomial = DD)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  40859: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD
    });
    var ID = cD(36446),
      pD = cD(36479),
      iD = cD(39142),
      fD = cD(36449),
      bD = cD(36622);
    class QD {
      constructor(DD, CD, cD, ID) {
        this.name = DD, this.worldAxisForNormal = CD, this.worldAxisForFileX = cD, this.worldAxisForFileY = ID
      }
    }
    class wD {
      static _NearestPow2Floor(DD) {
        return DD <= 1 ? 1 : 1 << Math.floor(Math.log2(DD))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(DD) {
        if (!DD.isCube) return null;
        DD.hq()?.DZ().flushFramebuffer();
        const CD = DD.getSize().width,
          cD = DD._sphericalPolynomialTargetSize,
          ID = cD > 0 ? this._NearestPow2Floor(cD) : 0,
          pD = !DD.noMipmap && !0 === DD._texture?.generateMipMaps,
          iD = ID > 0 && ID < CD && pD,
          fD = iD ? Math.max(0, Math.round(Math.log2(CD / ID))) : 0,
          bD = iD ? Math.max(1, Math.floor(CD / Math.pow(2, fD))) : CD,
          QD = DD.readPixels(0, fD, void 0, !1),
          wD = DD.readPixels(1, fD, void 0, !1);
        let SD, BD;
        DD.isRenderTarget ? (SD = DD.readPixels(3, fD, void 0, !1), BD = DD.readPixels(2, fD, void 0, !1)) : (SD = DD.readPixels(2, fD, void 0, !1), BD = DD.readPixels(3, fD, void 0, !1));
        const yD = DD.readPixels(4, fD, void 0, !1),
          MD = DD.readPixels(5, fD, void 0, !1),
          tD = DD.gammaSpace,
          ZD = ID > 0 && ID < CD && !iD;
        return new Promise((DD => {
          Promise.all([wD, QD, SD, BD, yD, MD]).then((cD => {
            let [pD, iD, fD, QD, wD, SD] = cD, BD = bD;
            if (ZD) {
              const DD = 4;
              pD = this._DownsampleFace(pD, CD, ID, DD), iD = this._DownsampleFace(iD, CD, ID, DD), fD = this._DownsampleFace(fD, CD, ID, DD), QD = this._DownsampleFace(QD, CD, ID, DD), wD = this._DownsampleFace(wD, CD, ID, DD), SD = this._DownsampleFace(SD, CD, ID, DD), BD = ID
            }
            const yD = {
              size: BD,
              right: iD,
              left: pD,
              up: fD,
              down: QD,
              front: wD,
              back: SD,
              format: 5,
              type: pD instanceof Float32Array ? 1 : 0,
              gammaSpace: tD
            };
            DD(this.ConvertCubeMapToSphericalPolynomial(yD))
          }))
        }))
      }
      static _AreaElement(DD, CD) {
        return Math.atan2(DD * CD, Math.sqrt(DD * DD + CD * CD + 1))
      }
      static _DownsampleFace(DD, CD, cD, ID) {
        const pD = DD instanceof Float32Array ? DD : Float32Array.from(DD),
          iD = cD * cD * ID,
          fD = new Float32Array(iD),
          bD = CD / cD,
          QD = 1 / (bD * bD);
        for (let SD = 0; SD < cD; SD++) {
          const DD = Math.floor(SD * bD),
            iD = Math.floor((SD + 1) * bD);
          for (let wD = 0; wD < cD; wD++) {
            const BD = Math.floor(wD * bD),
              yD = Math.floor((wD + 1) * bD),
              MD = (SD * cD + wD) * ID;
            for (let cD = 0; cD < ID; cD++) {
              let bD = 0;
              for (let fD = DD; fD < iD; fD++)
                for (let DD = BD; DD < yD; DD++) bD += pD[(fD * CD + DD) * ID + cD];
              fD[MD + cD] = bD * QD
            }
          }
        }
        if (DD instanceof Float32Array) return fD;
        const wD = new(0, DD.constructor)(iD);
        for (let SD = 0; SD < iD; SD++) wD[SD] = fD[SD] + .5 | 0;
        return wD
      }
      static ConvertCubeMapToSphericalPolynomial(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cD = CD > 0 ? this._NearestPow2Floor(CD) : 0;
        if (cD > 0 && DD.size > cD) {
          const CD = 5 === DD.format ? 4 : 3,
            ID = ["right", "left", "up", "down", "front", "back"],
            pD = {};
          for (const iD of ID) pD[iD] = this._DownsampleFace(DD[iD], DD.size, cD, CD);
          DD = {
            ...DD,
            ...pD,
            size: cD
          }
        }
        const ID = new iD.e;
        let QD = 0;
        const wD = 2 / DD.size,
          SD = wD,
          BD = .5 * wD,
          yD = BD - 1;
        for (let iD = 0; iD < 6; iD++) {
          const CD = this._FileFaces[iD],
            cD = DD[CD.name];
          let MD = yD;
          const tD = 5 === DD.format ? 4 : 3;
          for (let iD = 0; iD < DD.size; iD++) {
            let ZD = yD;
            for (let SD = 0; SD < DD.size; SD++) {
              const yD = CD.worldAxisForFileX.scale(ZD).add(CD.worldAxisForFileY.scale(MD)).add(CD.worldAxisForNormal);
              yD.normalize();
              const oD = this._AreaElement(ZD - BD, MD - BD) - this._AreaElement(ZD - BD, MD + BD) - this._AreaElement(ZD + BD, MD - BD) + this._AreaElement(ZD + BD, MD + BD);
              let vD = cD[iD * DD.size * tD + SD * tD + 0],
                ND = cD[iD * DD.size * tD + SD * tD + 1],
                gD = cD[iD * DD.size * tD + SD * tD + 2];
              isNaN(vD) && (vD = 0), isNaN(ND) && (ND = 0), isNaN(gD) && (gD = 0), 0 === DD.type && (vD /= 255, ND /= 255, gD /= 255), DD.gammaSpace && (vD = Math.pow((0, pD.Clamp)(vD), fD.h), ND = Math.pow((0, pD.Clamp)(ND), fD.h), gD = Math.pow((0, pD.Clamp)(gD), fD.h));
              const XD = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const DD = Math.max(vD, ND, gD);
                if (DD > XD) {
                  const CD = XD / DD;
                  vD *= CD, ND *= CD, gD *= CD
                }
              } else vD = (0, pD.Clamp)(vD, 0, XD), ND = (0, pD.Clamp)(ND, 0, XD), gD = (0, pD.Clamp)(gD, 0, XD);
              const mD = new bD.d(vD, ND, gD);
              ID.addLight(yD, mD, oD), QD += oD, ZD += wD
            }
            MD += SD
          }
        }
        const MD = 6 * (4 * Math.PI) / 6 / QD;
        return ID.scaleInPlace(MD), ID.convertIncidentRadianceToIrradiance(), ID.convertIrradianceToLambertianRadiance(), iD.f.FromHarmonics(ID)
      }
    }
    wD._FileFaces = [new QD("right", new ID.p(1, 0, 0), new ID.p(0, 0, -1), new ID.p(0, -1, 0)), new QD("left", new ID.p(-1, 0, 0), new ID.p(0, 0, 1), new ID.p(0, -1, 0)), new QD("up", new ID.p(0, 1, 0), new ID.p(1, 0, 0), new ID.p(0, 0, 1)), new QD("down", new ID.p(0, -1, 0), new ID.p(1, 0, 0), new ID.p(0, 0, -1)), new QD("front", new ID.p(0, 0, 1), new ID.p(1, 0, 0), new ID.p(0, -1, 0)), new QD("back", new ID.p(0, 0, -1), new ID.p(-1, 0, 0), new ID.p(0, -1, 0))], wD.MAX_HDRI_VALUE = 4096, wD.PRESERVE_CLAMPED_COLORS = !1
  },
  40908: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = cD(40895),
      pD = cD(40917);
    class iD {
      static ExpandRGBDTexture(DD) {
        const CD = DD._texture;
        if (!CD || !DD.isRGBD) return;
        const pD = CD.DZ(),
          iD = pD.getCaps(),
          fD = CD.isReady;
        let bD = !1;
        iD.textureHalfFloatRender && iD.textureHalfFloatLinearFiltering ? (bD = !0, CD.type = 2) : iD.textureFloatRender && iD.textureFloatLinearFiltering && (bD = !0, CD.type = 1), bD && (CD.isReady = !1, CD._isRGBD = !1, CD.invertY = !1);
        const QD = async () => {
          const iD = pD.isWebGPU,
            fD = iD ? 1 : 0;
          CD.isReady = !1, iD ? await cD.e(332).then((() => cD(60609))) : await cD.e(314).then((() => cD(60613)));
          const bD = new ID.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, pD, !1, void 0, CD.type, void 0, null, !1, void 0, fD);
          bD.externalTextureSamplerBinding = !0;
          const QD = pD.createRenderTargetTexture(CD.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: CD.samplingMode,
            type: CD.type,
            format: 5
          });
          bD.onEffectCreatedObservable.addOnce((cD => {
            cD.executeWhenCompiled((() => {
              bD.onApply = DD => {
                DD._bindTexture("textureSampler", CD), DD.setFloat2("scale", 1, 1)
              }, DD.hq()?.postProcessManager.directRender([bD], QD, !0), pD.restoreDefaultFramebuffer(), pD._releaseTexture(CD), bD && bD.dispose(), QD._swapAndDie(CD), CD.isReady = !0
            }))
          }))
        };
        bD && (fD ? QD() : DD.onLoadObservable.addOnce(QD))
      }
      static async EncodeTextureToRGBD(DD, CD) {
        let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return CD.DZ().isWebGPU ? await cD.e(333).then((() => cD(60630))) : await cD.e(315).then((() => cD(60625))), await (0, pD.d)("rgbdEncode", DD, CD, ID, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);