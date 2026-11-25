export const id = 617;
export const ids = [617];
export const modules = {
  44433: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      _ENVTextureLoader: () => wM
    });
    var OM = iM(41034),
      SM = iM(38040),
      jM = iM(38074),
      aM = iM(41086),
      PM = iM(40939),
      nM = iM(41091),
      QM = (iM(41196), iM(44439)),
      zM = iM(39711),
      LM = (iM(44452), iM(44478), iM(41167));
    const mM = "image/png",
      HM = [134, 22, 135, 150, 246, 214, 150, 54];

    function hM(MM) {
      const rM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
      let iM = 0;
      for (let aM = 0; aM < HM.length; aM++)
        if (rM.getUint8(iM++) !== HM[aM]) return zM.e.Error("Not a babylon environment map"), null;
      let OM, SM = "";
      for (; OM = rM.getUint8(iM++);) SM += String.fromCharCode(OM);
      let jM = JSON.parse(SM);
      return jM = JM(jM), jM.binaryDataPosition = iM, jM.specular && (jM.specular.lodGenerationScale = jM.specular.lodGenerationScale || .8), jM
    }

    function JM(MM) {
      if (MM.version > 2) throw new Error(`Unsupported babylon environment map version "${MM.version}". Latest supported version is "2".`);
      return 2 === MM.version ? MM : MM = {
        ...MM,
        version: 2,
        imageType: mM
      }
    }

    function dM(MM, rM) {
      const iM = (rM = JM(rM)).specular;
      let OM = Math.log2(rM.width);
      if (OM = Math.round(OM) + 1, iM.mipmaps.length !== 6 * OM) throw new Error(`Unsupported specular mipmaps number "${iM.mipmaps.length}"`);
      const SM = new Array(OM);
      for (let jM = 0; jM < OM; jM++) {
        SM[jM] = new Array(6);
        for (let OM = 0; OM < 6; OM++) {
          const aM = iM.mipmaps[6 * jM + OM];
          SM[jM][OM] = new Uint8Array(MM.buffer, MM.byteOffset + rM.binaryDataPosition + aM.position, aM.length)
        }
      }
      return SM
    }

    function yM(MM, rM) {
      rM = JM(rM);
      const iM = new Array(6),
        OM = rM.irradiance?.irradianceTexture;
      if (OM) {
        if (6 !== OM.faces.length) throw new Error(`Incorrect irradiance texture faces number "${OM.faces.length}"`);
        for (let SM = 0; SM < 6; SM++) {
          const jM = OM.faces[SM];
          iM[SM] = new Uint8Array(MM.buffer, MM.byteOffset + rM.binaryDataPosition + jM.position, jM.length)
        }
      }
      return iM
    }

    function lM(MM, rM, iM) {
      const OM = (iM = JM(iM)).specular;
      if (!OM) return Promise.resolve([]);
      MM._lodGenerationScale = OM.lodGenerationScale;
      const jM = [],
        aM = dM(rM, iM);
      jM.push(UM(MM, aM, iM.imageType));
      const PM = iM.irradiance?.irradianceTexture;
      if (PM) {
        const OM = yM(rM, iM);
        let aM = null;
        iM.irradiance?.irradianceTexture?.dominantDirection && (aM = SM.q.FromArray(iM.irradiance.irradianceTexture.dominantDirection)), jM.push(GM(MM, OM, PM.size, iM.imageType, aM))
      }
      return Promise.all(jM)
    }
    async function EM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
      return await new Promise(((LM, mM) => {
        if (iM) {
          const iM = rM.createTexture(null, !0, !0, null, 1, null, (MM => {
            mM(MM)
          }), MM);
          OM?.onEffectCreatedObservable.addOnce((PM => {
            PM.executeWhenCompiled((() => {
              OM.externalTextureSamplerBinding = !0, OM.onApply = OM => {
                OM._bindTexture("textureSampler", iM), OM.setFloat2("scale", 1, rM._features.needsInvertingBitmap && MM instanceof ImageBitmap ? -1 : 1)
              }, rM.scenes.length && (rM.scenes[0].postProcessManager.directRender([OM], QM, !0, jM, aM), rM.restoreDefaultFramebuffer(), iM.dispose(), URL.revokeObjectURL(SM), LM())
            }))
          }))
        } else {
          if (rM._uploadImageToTexture(zM, MM, jM, aM), PM) {
            const iM = nM[aM];
            iM && rM._uploadImageToTexture(iM._texture, MM, jM, 0)
          }
          LM()
        }
      }))
    }
    async function UM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mM;
      const OM = MM.ph();
      MM.format = 5, MM.type = 0, MM.generateMipMaps = !0, MM._cachedAnisotropicFilteringLevel = null, OM.updateTextureSamplingMode(3, MM), await CM(MM, rM, !0, iM), MM.isReady = !0
    }
    async function GM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mM,
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const jM = MM.ph(),
        aM = new PM.c(jM, 5),
        QM = new nM.c(jM, aM);
      MM._irradianceTexture = QM, QM._dominantDirection = SM, aM.isCube = !0, aM.format = 5, aM.type = 0, aM.generateMipMaps = !0, aM._cachedAnisotropicFilteringLevel = null, aM.generateMipMaps = !0, aM.width = iM, aM.height = iM, jM.updateTextureSamplingMode(3, aM), await CM(aM, [rM], !1, OM), jM.generateMipMapsForCubemap(aM), aM.isReady = !0
    }
    async function CM(MM, rM, SM) {
      let aM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mM;
      if (!(0, OM.g)(MM.width)) throw new Error("Texture size must be a power of two");
      const zM = (0, jM.ILog2)(MM.width) + 1,
        HM = MM.ph();
      let hM = !1,
        JM = !1,
        dM = null,
        yM = null,
        lM = null;
      const UM = HM.getCaps();
      UM.textureLOD ? HM._features.supportRenderAndCopyToLodForFloatTextures ? UM.textureHalfFloatRender && UM.textureHalfFloatLinearFiltering ? (hM = !0, MM.type = 2) : UM.textureFloatRender && UM.textureFloatLinearFiltering && (hM = !0, MM.type = 1) : hM = !1 : (hM = !1, JM = SM);
      let GM = 0;
      if (hM) HM.isWebGPU ? (GM = 1, await iM.e(651).then((() => iM(64026)))) : await iM.e(633).then((() => iM(64034))), dM = new QM.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, HM, !1, void 0, MM.type, void 0, null, !1, void 0, GM), MM._isRGBD = !1, MM.invertY = !1, yM = HM.createRenderTargetCubeTexture(MM.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: MM.type,
        format: 5
      });
      else if (MM._isRGBD = !0, MM.invertY = !0, JM) {
        const rM = 3;
        lM = {};
        const iM = MM._lodGenerationScale,
          OM = MM._lodGenerationOffset;
        for (let SM = 0; SM < rM; SM++) {
          const jM = (zM - 1) * iM + OM,
            aM = OM + (jM - OM) * (1 - SM / (rM - 1)),
            QM = Math.round(Math.min(Math.max(aM, 0), jM)),
            LM = new PM.c(HM, 2);
          LM.isCube = !0, LM.invertY = !0, LM.generateMipMaps = !1, HM.updateTextureSamplingMode(2, LM);
          const mM = new nM.c(null);
          switch (mM._isCube = !0, mM._texture = LM, lM[QM] = mM, SM) {
            case 0:
              MM._lodTextureLow = mM;
              break;
            case 1:
              MM._lodTextureMid = mM;
              break;
            case 2:
              MM._lodTextureHigh = mM
          }
        }
      }
      const CM = [];
      for (let iM = 0; iM < rM.length; iM++)
        for (let OM = 0; OM < 6; OM++) {
          const SM = rM[iM][OM],
            jM = (0, LM.i)(SM),
            PM = new Blob([jM], {
              type: aM
            }),
            nM = URL.createObjectURL(PM);
          let QM;
          if (HM._features.forceBitmapOverHTMLImageElement) QM = HM.createImageBitmap(PM, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async rM => await EM(rM, HM, hM, dM, nM, OM, iM, JM, lM, yM, MM)));
          else {
            const rM = new Image;
            rM.src = nM, QM = new Promise(((SM, jM) => {
              rM.onload = () => {
                EM(rM, HM, hM, dM, nM, OM, iM, JM, lM, yM, MM).then((() => SM())).catch((MM => {
                  jM(MM)
                }))
              }, rM.onerror = MM => {
                jM(MM)
              }
            }))
          }
          CM.push(QM)
        }
      if (await Promise.all(CM), rM.length < zM) {
        let iM;
        const OM = Math.pow(2, zM - 1 - rM.length),
          SM = OM * OM * 4;
        switch (MM.type) {
          case 0:
            iM = new Uint8Array(SM);
            break;
          case 2:
            iM = new Uint16Array(SM);
            break;
          case 1:
            iM = new Float32Array(SM)
        }
        for (let jM = rM.length; jM < zM; jM++)
          for (let rM = 0; rM < 6; rM++) HM._uploadArrayBufferViewToTexture(yM?.texture || MM, iM, rM, jM)
      }
      if (yM) {
        const rM = MM._irradianceTexture;
        MM._irradianceTexture = null, HM._releaseTexture(MM), yM._swapAndDie(MM), MM._irradianceTexture = rM
      }
      dM && dM.dispose(), JM && (MM._lodTextureHigh && MM._lodTextureHigh._texture && (MM._lodTextureHigh._texture.isReady = !0), MM._lodTextureMid && MM._lodTextureMid._texture && (MM._lodTextureMid._texture.isReady = !0), MM._lodTextureLow && MM._lodTextureLow._texture && (MM._lodTextureLow._texture.isReady = !0))
    }

    function eM(MM, rM) {
      const iM = (rM = JM(rM)).irradiance;
      if (!iM) return;
      const OM = new aM.c;
      SM.q.FromArrayToRef(iM.x, 0, OM.x), SM.q.FromArrayToRef(iM.y, 0, OM.y), SM.q.FromArrayToRef(iM.z, 0, OM.z), SM.q.FromArrayToRef(iM.xx, 0, OM.xx), SM.q.FromArrayToRef(iM.yy, 0, OM.yy), SM.q.FromArrayToRef(iM.zz, 0, OM.zz), SM.q.FromArrayToRef(iM.yz, 0, OM.yz), SM.q.FromArrayToRef(iM.zx, 0, OM.zx), SM.q.FromArrayToRef(iM.xy, 0, OM.xy), MM._sphericalPolynomial = OM
    }
    var bM = iM(44485);
    class wM {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(MM, rM, iM, OM, SM) {
        if (Array.isArray(MM)) return;
        const jM = hM(MM);
        if (jM) {
          rM.width = jM.width, rM.height = jM.width;
          try {
            (0, bM.d)(), eM(rM, jM), lM(rM, MM, jM).then((() => {
              rM.isReady = !0, rM.onLoadedObservable.notifyObservers(rM), rM.onLoadedObservable.clear(), OM && OM()
            }), (MM => {
              SM?.("Can not upload environment levels", MM)
            }))
          } catch (aM) {
            SM?.("Can not upload environment file", aM)
          }
        } else SM && SM("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  44485: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(44412),
      SM = iM(41091);
    let jM = !1;

    function aM() {
      jM || (jM = !0, SM.c.prototype._sphericalPolynomialTargetSize = 0, SM.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(SM.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = OM.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((MM => {
              this._texture._sphericalPolynomial = MM, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(MM) {
          this._texture && (this._texture._sphericalPolynomial = MM)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  44412: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => QM
    });
    var OM = iM(38040),
      SM = iM(38074),
      jM = iM(41086),
      aM = iM(38044),
      PM = iM(38173);
    class nM {
      constructor(MM, rM, iM, OM) {
        this.name = MM, this.worldAxisForNormal = rM, this.worldAxisForFileX = iM, this.worldAxisForFileY = OM
      }
    }
    class QM {
      static _NearestPow2Floor(MM) {
        return MM <= 1 ? 1 : 1 << Math.floor(Math.log2(MM))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(MM) {
        if (!MM.isCube) return null;
        MM.Hk()?.ph().flushFramebuffer();
        const rM = MM.getSize().width,
          iM = MM._sphericalPolynomialTargetSize,
          OM = iM > 0 ? this._NearestPow2Floor(iM) : 0,
          SM = !MM.noMipmap && !0 === MM._texture?.generateMipMaps,
          jM = OM > 0 && OM < rM && SM,
          aM = jM ? Math.max(0, Math.round(Math.log2(rM / OM))) : 0,
          PM = jM ? Math.max(1, Math.floor(rM / Math.pow(2, aM))) : rM,
          nM = MM.readPixels(0, aM, void 0, !1),
          QM = MM.readPixels(1, aM, void 0, !1);
        let zM, LM;
        MM.isRenderTarget ? (zM = MM.readPixels(3, aM, void 0, !1), LM = MM.readPixels(2, aM, void 0, !1)) : (zM = MM.readPixels(2, aM, void 0, !1), LM = MM.readPixels(3, aM, void 0, !1));
        const mM = MM.readPixels(4, aM, void 0, !1),
          HM = MM.readPixels(5, aM, void 0, !1),
          hM = MM.gammaSpace,
          JM = OM > 0 && OM < rM && !jM;
        return new Promise((MM => {
          Promise.all([QM, nM, zM, LM, mM, HM]).then((iM => {
            let [SM, jM, aM, nM, QM, zM] = iM, LM = PM;
            if (JM) {
              const MM = 4;
              SM = this._DownsampleFace(SM, rM, OM, MM), jM = this._DownsampleFace(jM, rM, OM, MM), aM = this._DownsampleFace(aM, rM, OM, MM), nM = this._DownsampleFace(nM, rM, OM, MM), QM = this._DownsampleFace(QM, rM, OM, MM), zM = this._DownsampleFace(zM, rM, OM, MM), LM = OM
            }
            const mM = {
              size: LM,
              right: jM,
              left: SM,
              up: aM,
              down: nM,
              front: QM,
              back: zM,
              format: 5,
              type: SM instanceof Float32Array ? 1 : 0,
              gammaSpace: hM
            };
            MM(this.ConvertCubeMapToSphericalPolynomial(mM))
          }))
        }))
      }
      static _AreaElement(MM, rM) {
        return Math.atan2(MM * rM, Math.sqrt(MM * MM + rM * rM + 1))
      }
      static _DownsampleFace(MM, rM, iM, OM) {
        const SM = MM instanceof Float32Array ? MM : Float32Array.from(MM),
          jM = iM * iM * OM,
          aM = new Float32Array(jM),
          PM = rM / iM,
          nM = 1 / (PM * PM);
        for (let zM = 0; zM < iM; zM++) {
          const MM = Math.floor(zM * PM),
            jM = Math.floor((zM + 1) * PM);
          for (let QM = 0; QM < iM; QM++) {
            const LM = Math.floor(QM * PM),
              mM = Math.floor((QM + 1) * PM),
              HM = (zM * iM + QM) * OM;
            for (let iM = 0; iM < OM; iM++) {
              let PM = 0;
              for (let aM = MM; aM < jM; aM++)
                for (let MM = LM; MM < mM; MM++) PM += SM[(aM * rM + MM) * OM + iM];
              aM[HM + iM] = PM * nM
            }
          }
        }
        if (MM instanceof Float32Array) return aM;
        const QM = new(0, MM.constructor)(jM);
        for (let zM = 0; zM < jM; zM++) QM[zM] = aM[zM] + .5 | 0;
        return QM
      }
      static ConvertCubeMapToSphericalPolynomial(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const iM = rM > 0 ? this._NearestPow2Floor(rM) : 0;
        if (iM > 0 && MM.size > iM) {
          const rM = 5 === MM.format ? 4 : 3,
            OM = ["right", "left", "up", "down", "front", "back"],
            SM = {};
          for (const jM of OM) SM[jM] = this._DownsampleFace(MM[jM], MM.size, iM, rM);
          MM = {
            ...MM,
            ...SM,
            size: iM
          }
        }
        const OM = new jM.b;
        let nM = 0;
        const QM = 2 / MM.size,
          zM = QM,
          LM = .5 * QM,
          mM = LM - 1;
        for (let jM = 0; jM < 6; jM++) {
          const rM = this._FileFaces[jM],
            iM = MM[rM.name];
          let HM = mM;
          const hM = 5 === MM.format ? 4 : 3;
          for (let jM = 0; jM < MM.size; jM++) {
            let JM = mM;
            for (let zM = 0; zM < MM.size; zM++) {
              const mM = rM.worldAxisForFileX.scale(JM).add(rM.worldAxisForFileY.scale(HM)).add(rM.worldAxisForNormal);
              mM.normalize();
              const dM = this._AreaElement(JM - LM, HM - LM) - this._AreaElement(JM - LM, HM + LM) - this._AreaElement(JM + LM, HM - LM) + this._AreaElement(JM + LM, HM + LM);
              let yM = iM[jM * MM.size * hM + zM * hM + 0],
                lM = iM[jM * MM.size * hM + zM * hM + 1],
                EM = iM[jM * MM.size * hM + zM * hM + 2];
              isNaN(yM) && (yM = 0), isNaN(lM) && (lM = 0), isNaN(EM) && (EM = 0), 0 === MM.type && (yM /= 255, lM /= 255, EM /= 255), MM.gammaSpace && (yM = Math.pow((0, SM.Clamp)(yM), aM.h), lM = Math.pow((0, SM.Clamp)(lM), aM.h), EM = Math.pow((0, SM.Clamp)(EM), aM.h));
              const UM = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const MM = Math.max(yM, lM, EM);
                if (MM > UM) {
                  const rM = UM / MM;
                  yM *= rM, lM *= rM, EM *= rM
                }
              } else yM = (0, SM.Clamp)(yM, 0, UM), lM = (0, SM.Clamp)(lM, 0, UM), EM = (0, SM.Clamp)(EM, 0, UM);
              const GM = new PM.d(yM, lM, EM);
              OM.addLight(mM, GM, dM), nM += dM, JM += QM
            }
            HM += zM
          }
        }
        const HM = 6 * (4 * Math.PI) / 6 / nM;
        return OM.scaleInPlace(HM), OM.convertIncidentRadianceToIrradiance(), OM.convertIrradianceToLambertianRadiance(), jM.c.FromHarmonics(OM)
      }
    }
    QM._FileFaces = [new nM("right", new OM.q(1, 0, 0), new OM.q(0, 0, -1), new OM.q(0, -1, 0)), new nM("left", new OM.q(-1, 0, 0), new OM.q(0, 0, 1), new OM.q(0, -1, 0)), new nM("up", new OM.q(0, 1, 0), new OM.q(1, 0, 0), new OM.q(0, 0, 1)), new nM("down", new OM.q(0, -1, 0), new OM.q(1, 0, 0), new OM.q(0, 0, -1)), new nM("front", new OM.q(0, 0, 1), new OM.q(1, 0, 0), new OM.q(0, -1, 0)), new nM("back", new OM.q(0, 0, -1), new OM.q(-1, 0, 0), new OM.q(0, -1, 0))], QM.MAX_HDRI_VALUE = 4096, QM.PRESERVE_CLAMPED_COLORS = !1
  },
  44452: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(44439),
      SM = iM(44458);
    class jM {
      static ExpandRGBDTexture(MM) {
        const rM = MM._texture;
        if (!rM || !MM.isRGBD) return;
        const SM = rM.ph(),
          jM = SM.getCaps(),
          aM = rM.isReady;
        let PM = !1;
        jM.textureHalfFloatRender && jM.textureHalfFloatLinearFiltering ? (PM = !0, rM.type = 2) : jM.textureFloatRender && jM.textureFloatLinearFiltering && (PM = !0, rM.type = 1), PM && (rM.isReady = !1, rM._isRGBD = !1, rM.invertY = !1);
        const nM = async () => {
          const jM = SM.isWebGPU,
            aM = jM ? 1 : 0;
          rM.isReady = !1, jM ? await iM.e(651).then((() => iM(64026))) : await iM.e(633).then((() => iM(64034)));
          const PM = new OM.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, SM, !1, void 0, rM.type, void 0, null, !1, void 0, aM);
          PM.externalTextureSamplerBinding = !0;
          const nM = SM.createRenderTargetTexture(rM.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: rM.samplingMode,
            type: rM.type,
            format: 5
          });
          PM.onEffectCreatedObservable.addOnce((iM => {
            iM.executeWhenCompiled((() => {
              PM.onApply = MM => {
                MM._bindTexture("textureSampler", rM), MM.setFloat2("scale", 1, 1)
              }, MM.Hk()?.postProcessManager.directRender([PM], nM, !0), SM.restoreDefaultFramebuffer(), SM._releaseTexture(rM), PM && PM.dispose(), nM._swapAndDie(rM), rM.isReady = !0
            }))
          }))
        };
        PM && (aM ? nM() : MM.onLoadObservable.addOnce(nM))
      }
      static async EncodeTextureToRGBD(MM, rM) {
        let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return rM.ph().isWebGPU ? await iM.e(652).then((() => iM(64042))) : await iM.e(634).then((() => iM(64039))), await (0, SM.d)("rgbdEncode", MM, rM, OM, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);