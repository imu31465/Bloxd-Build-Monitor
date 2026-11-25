export const id = 313;
export const ids = [313];
export const modules = {
  41812: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      _ENVTextureLoader: () => OB
    });
    var TB = ZB(39993),
      JB = ZB(37120),
      oB = ZB(37158),
      GB = ZB(40044),
      vB = ZB(39885),
      kB = ZB(40052),
      cB = (ZB(40148), ZB(41821)),
      nB = ZB(38718),
      hB = (ZB(41833), ZB(41862), ZB(40129));
    const zB = "image/png",
      FB = [134, 22, 135, 150, 246, 214, 150, 54];

    function NB(BB) {
      const IB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      let ZB = 0;
      for (let GB = 0; GB < FB.length; GB++)
        if (IB.getUint8(ZB++) !== FB[GB]) return nB.d.Error("Not a babylon environment map"), null;
      let TB, JB = "";
      for (; TB = IB.getUint8(ZB++);) JB += String.fromCharCode(TB);
      let oB = JSON.parse(JB);
      return oB = gB(oB), oB.binaryDataPosition = ZB, oB.specular && (oB.specular.lodGenerationScale = oB.specular.lodGenerationScale || .8), oB
    }

    function gB(BB) {
      if (BB.version > 2) throw new Error(`Unsupported babylon environment map version "${BB.version}". Latest supported version is "2".`);
      return 2 === BB.version ? BB : BB = {
        ...BB,
        version: 2,
        imageType: zB
      }
    }

    function qB(BB, IB) {
      const ZB = (IB = gB(IB)).specular;
      let TB = Math.log2(IB.width);
      if (TB = Math.round(TB) + 1, ZB.mipmaps.length !== 6 * TB) throw new Error(`Unsupported specular mipmaps number "${ZB.mipmaps.length}"`);
      const JB = new Array(TB);
      for (let oB = 0; oB < TB; oB++) {
        JB[oB] = new Array(6);
        for (let TB = 0; TB < 6; TB++) {
          const GB = ZB.mipmaps[6 * oB + TB];
          JB[oB][TB] = new Uint8Array(BB.buffer, BB.byteOffset + IB.binaryDataPosition + GB.position, GB.length)
        }
      }
      return JB
    }

    function yB(BB, IB) {
      IB = gB(IB);
      const ZB = new Array(6),
        TB = IB.irradiance?.irradianceTexture;
      if (TB) {
        if (6 !== TB.faces.length) throw new Error(`Incorrect irradiance texture faces number "${TB.faces.length}"`);
        for (let JB = 0; JB < 6; JB++) {
          const oB = TB.faces[JB];
          ZB[JB] = new Uint8Array(BB.buffer, BB.byteOffset + IB.binaryDataPosition + oB.position, oB.length)
        }
      }
      return ZB
    }

    function UB(BB, IB, ZB) {
      const TB = (ZB = gB(ZB)).specular;
      if (!TB) return Promise.resolve([]);
      BB._lodGenerationScale = TB.lodGenerationScale;
      const oB = [],
        GB = qB(IB, ZB);
      oB.push(dB(BB, GB, ZB.imageType));
      const vB = ZB.irradiance?.irradianceTexture;
      if (vB) {
        const TB = yB(IB, ZB);
        let GB = null;
        ZB.irradiance?.irradianceTexture?.dominantDirection && (GB = JB.s.FromArray(ZB.irradiance.irradianceTexture.dominantDirection)), oB.push(CB(BB, TB, vB.size, ZB.imageType, GB))
      }
      return Promise.all(oB)
    }
    async function WB(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB) {
      return await new Promise(((hB, zB) => {
        if (ZB) {
          const ZB = IB.createTexture(null, !0, !0, null, 1, null, (BB => {
            zB(BB)
          }), BB);
          TB?.onEffectCreatedObservable.addOnce((vB => {
            vB.executeWhenCompiled((() => {
              TB.externalTextureSamplerBinding = !0, TB.onApply = TB => {
                TB._bindTexture("textureSampler", ZB), TB.setFloat2("scale", 1, IB._features.needsInvertingBitmap && BB instanceof ImageBitmap ? -1 : 1)
              }, IB.scenes.length && (IB.scenes[0].postProcessManager.directRender([TB], cB, !0, oB, GB), IB.restoreDefaultFramebuffer(), ZB.dispose(), URL.revokeObjectURL(JB), hB())
            }))
          }))
        } else {
          if (IB._uploadImageToTexture(nB, BB, oB, GB), vB) {
            const ZB = kB[GB];
            ZB && IB._uploadImageToTexture(ZB._texture, BB, oB, 0)
          }
          hB()
        }
      }))
    }
    async function dB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zB;
      const TB = BB.PN();
      BB.format = 5, BB.type = 0, BB.generateMipMaps = !0, BB._cachedAnisotropicFilteringLevel = null, TB.updateTextureSamplingMode(3, BB), await QB(BB, IB, !0, ZB), BB.isReady = !0
    }
    async function CB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zB,
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const oB = BB.PN(),
        GB = new vB.b(oB, 5),
        cB = new kB.e(oB, GB);
      BB._irradianceTexture = cB, cB._dominantDirection = JB, GB.isCube = !0, GB.format = 5, GB.type = 0, GB.generateMipMaps = !0, GB._cachedAnisotropicFilteringLevel = null, GB.generateMipMaps = !0, GB.width = ZB, GB.height = ZB, oB.updateTextureSamplingMode(3, GB), await QB(GB, [IB], !1, TB), oB.generateMipMapsForCubemap(GB), GB.isReady = !0
    }
    async function QB(BB, IB, JB) {
      let GB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zB;
      if (!(0, TB.i)(BB.width)) throw new Error("Texture size must be a power of two");
      const nB = (0, oB.ILog2)(BB.width) + 1,
        FB = BB.PN();
      let NB = !1,
        gB = !1,
        qB = null,
        yB = null,
        UB = null;
      const dB = FB.getCaps();
      dB.textureLOD ? FB._features.supportRenderAndCopyToLodForFloatTextures ? dB.textureHalfFloatRender && dB.textureHalfFloatLinearFiltering ? (NB = !0, BB.type = 2) : dB.textureFloatRender && dB.textureFloatLinearFiltering && (NB = !0, BB.type = 1) : NB = !1 : (NB = !1, gB = JB);
      let CB = 0;
      if (NB) FB.isWebGPU ? (CB = 1, await ZB.e(347).then((() => ZB(61428)))) : await ZB.e(329).then((() => ZB(61430))), qB = new cB.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, FB, !1, void 0, BB.type, void 0, null, !1, void 0, CB), BB._isRGBD = !1, BB.invertY = !1, yB = FB.createRenderTargetCubeTexture(BB.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: BB.type,
        format: 5
      });
      else if (BB._isRGBD = !0, BB.invertY = !0, gB) {
        const IB = 3;
        UB = {};
        const ZB = BB._lodGenerationScale,
          TB = BB._lodGenerationOffset;
        for (let JB = 0; JB < IB; JB++) {
          const oB = (nB - 1) * ZB + TB,
            GB = TB + (oB - TB) * (1 - JB / (IB - 1)),
            cB = Math.round(Math.min(Math.max(GB, 0), oB)),
            hB = new vB.b(FB, 2);
          hB.isCube = !0, hB.invertY = !0, hB.generateMipMaps = !1, FB.updateTextureSamplingMode(2, hB);
          const zB = new kB.e(null);
          switch (zB._isCube = !0, zB._texture = hB, UB[cB] = zB, JB) {
            case 0:
              BB._lodTextureLow = zB;
              break;
            case 1:
              BB._lodTextureMid = zB;
              break;
            case 2:
              BB._lodTextureHigh = zB
          }
        }
      }
      const QB = [];
      for (let ZB = 0; ZB < IB.length; ZB++)
        for (let TB = 0; TB < 6; TB++) {
          const JB = IB[ZB][TB],
            oB = (0, hB.l)(JB),
            vB = new Blob([oB], {
              type: GB
            }),
            kB = URL.createObjectURL(vB);
          let cB;
          if (FB._features.forceBitmapOverHTMLImageElement) cB = FB.createImageBitmap(vB, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async IB => await WB(IB, FB, NB, qB, kB, TB, ZB, gB, UB, yB, BB)));
          else {
            const IB = new Image;
            IB.src = kB, cB = new Promise(((JB, oB) => {
              IB.onload = () => {
                WB(IB, FB, NB, qB, kB, TB, ZB, gB, UB, yB, BB).then((() => JB())).catch((BB => {
                  oB(BB)
                }))
              }, IB.onerror = BB => {
                oB(BB)
              }
            }))
          }
          QB.push(cB)
        }
      if (await Promise.all(QB), IB.length < nB) {
        let ZB;
        const TB = Math.pow(2, nB - 1 - IB.length),
          JB = TB * TB * 4;
        switch (BB.type) {
          case 0:
            ZB = new Uint8Array(JB);
            break;
          case 2:
            ZB = new Uint16Array(JB);
            break;
          case 1:
            ZB = new Float32Array(JB)
        }
        for (let oB = IB.length; oB < nB; oB++)
          for (let IB = 0; IB < 6; IB++) FB._uploadArrayBufferViewToTexture(yB?.texture || BB, ZB, IB, oB)
      }
      if (yB) {
        const IB = BB._irradianceTexture;
        BB._irradianceTexture = null, FB._releaseTexture(BB), yB._swapAndDie(BB), BB._irradianceTexture = IB
      }
      qB && qB.dispose(), gB && (BB._lodTextureHigh && BB._lodTextureHigh._texture && (BB._lodTextureHigh._texture.isReady = !0), BB._lodTextureMid && BB._lodTextureMid._texture && (BB._lodTextureMid._texture.isReady = !0), BB._lodTextureLow && BB._lodTextureLow._texture && (BB._lodTextureLow._texture.isReady = !0))
    }

    function sB(BB, IB) {
      const ZB = (IB = gB(IB)).irradiance;
      if (!ZB) return;
      const TB = new GB.f;
      JB.s.FromArrayToRef(ZB.x, 0, TB.x), JB.s.FromArrayToRef(ZB.y, 0, TB.y), JB.s.FromArrayToRef(ZB.z, 0, TB.z), JB.s.FromArrayToRef(ZB.xx, 0, TB.xx), JB.s.FromArrayToRef(ZB.yy, 0, TB.yy), JB.s.FromArrayToRef(ZB.zz, 0, TB.zz), JB.s.FromArrayToRef(ZB.yz, 0, TB.yz), JB.s.FromArrayToRef(ZB.zx, 0, TB.zx), JB.s.FromArrayToRef(ZB.xy, 0, TB.xy), BB._sphericalPolynomial = TB
    }
    var wB = ZB(41869);
    class OB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, IB, ZB, TB, JB) {
        if (Array.isArray(BB)) return;
        const oB = NB(BB);
        if (oB) {
          IB.width = oB.width, IB.height = oB.width;
          try {
            (0, wB.d)(), sB(IB, oB), UB(IB, BB, oB).then((() => {
              IB.isReady = !0, IB.onLoadedObservable.notifyObservers(IB), IB.onLoadedObservable.clear(), TB && TB()
            }), (BB => {
              JB?.("Can not upload environment levels", BB)
            }))
          } catch (GB) {
            JB?.("Can not upload environment file", GB)
          }
        } else JB && JB("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41869: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(41794),
      JB = ZB(40052);
    let oB = !1;

    function GB() {
      oB || (oB = !0, JB.e.prototype._sphericalPolynomialTargetSize = 0, JB.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(JB.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = TB.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((BB => {
              this._texture._sphericalPolynomial = BB, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(BB) {
          this._texture && (this._texture._sphericalPolynomial = BB)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41794: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => cB
    });
    var TB = ZB(37120),
      JB = ZB(37158),
      oB = ZB(40044),
      GB = ZB(37129),
      vB = ZB(37311);
    class kB {
      constructor(BB, IB, ZB, TB) {
        this.name = BB, this.worldAxisForNormal = IB, this.worldAxisForFileX = ZB, this.worldAxisForFileY = TB
      }
    }
    class cB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.JR()?.PN().flushFramebuffer();
        const IB = BB.getSize().width,
          ZB = BB._sphericalPolynomialTargetSize,
          TB = ZB > 0 ? this._NearestPow2Floor(ZB) : 0,
          JB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          oB = TB > 0 && TB < IB && JB,
          GB = oB ? Math.max(0, Math.round(Math.log2(IB / TB))) : 0,
          vB = oB ? Math.max(1, Math.floor(IB / Math.pow(2, GB))) : IB,
          kB = BB.readPixels(0, GB, void 0, !1),
          cB = BB.readPixels(1, GB, void 0, !1);
        let nB, hB;
        BB.isRenderTarget ? (nB = BB.readPixels(3, GB, void 0, !1), hB = BB.readPixels(2, GB, void 0, !1)) : (nB = BB.readPixels(2, GB, void 0, !1), hB = BB.readPixels(3, GB, void 0, !1));
        const zB = BB.readPixels(4, GB, void 0, !1),
          FB = BB.readPixels(5, GB, void 0, !1),
          NB = BB.gammaSpace,
          gB = TB > 0 && TB < IB && !oB;
        return new Promise((BB => {
          Promise.all([cB, kB, nB, hB, zB, FB]).then((ZB => {
            let [JB, oB, GB, kB, cB, nB] = ZB, hB = vB;
            if (gB) {
              const BB = 4;
              JB = this._DownsampleFace(JB, IB, TB, BB), oB = this._DownsampleFace(oB, IB, TB, BB), GB = this._DownsampleFace(GB, IB, TB, BB), kB = this._DownsampleFace(kB, IB, TB, BB), cB = this._DownsampleFace(cB, IB, TB, BB), nB = this._DownsampleFace(nB, IB, TB, BB), hB = TB
            }
            const zB = {
              size: hB,
              right: oB,
              left: JB,
              up: GB,
              down: kB,
              front: cB,
              back: nB,
              format: 5,
              type: JB instanceof Float32Array ? 1 : 0,
              gammaSpace: NB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(zB))
          }))
        }))
      }
      static _AreaElement(BB, IB) {
        return Math.atan2(BB * IB, Math.sqrt(BB * BB + IB * IB + 1))
      }
      static _DownsampleFace(BB, IB, ZB, TB) {
        const JB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          oB = ZB * ZB * TB,
          GB = new Float32Array(oB),
          vB = IB / ZB,
          kB = 1 / (vB * vB);
        for (let nB = 0; nB < ZB; nB++) {
          const BB = Math.floor(nB * vB),
            oB = Math.floor((nB + 1) * vB);
          for (let cB = 0; cB < ZB; cB++) {
            const hB = Math.floor(cB * vB),
              zB = Math.floor((cB + 1) * vB),
              FB = (nB * ZB + cB) * TB;
            for (let ZB = 0; ZB < TB; ZB++) {
              let vB = 0;
              for (let GB = BB; GB < oB; GB++)
                for (let BB = hB; BB < zB; BB++) vB += JB[(GB * IB + BB) * TB + ZB];
              GB[FB + ZB] = vB * kB
            }
          }
        }
        if (BB instanceof Float32Array) return GB;
        const cB = new(0, BB.constructor)(oB);
        for (let nB = 0; nB < oB; nB++) cB[nB] = GB[nB] + .5 | 0;
        return cB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZB = IB > 0 ? this._NearestPow2Floor(IB) : 0;
        if (ZB > 0 && BB.size > ZB) {
          const IB = 5 === BB.format ? 4 : 3,
            TB = ["right", "left", "up", "down", "front", "back"],
            JB = {};
          for (const oB of TB) JB[oB] = this._DownsampleFace(BB[oB], BB.size, ZB, IB);
          BB = {
            ...BB,
            ...JB,
            size: ZB
          }
        }
        const TB = new oB.c;
        let kB = 0;
        const cB = 2 / BB.size,
          nB = cB,
          hB = .5 * cB,
          zB = hB - 1;
        for (let oB = 0; oB < 6; oB++) {
          const IB = this._FileFaces[oB],
            ZB = BB[IB.name];
          let FB = zB;
          const NB = 5 === BB.format ? 4 : 3;
          for (let oB = 0; oB < BB.size; oB++) {
            let gB = zB;
            for (let nB = 0; nB < BB.size; nB++) {
              const zB = IB.worldAxisForFileX.scale(gB).add(IB.worldAxisForFileY.scale(FB)).add(IB.worldAxisForNormal);
              zB.normalize();
              const qB = this._AreaElement(gB - hB, FB - hB) - this._AreaElement(gB - hB, FB + hB) - this._AreaElement(gB + hB, FB - hB) + this._AreaElement(gB + hB, FB + hB);
              let yB = ZB[oB * BB.size * NB + nB * NB + 0],
                UB = ZB[oB * BB.size * NB + nB * NB + 1],
                WB = ZB[oB * BB.size * NB + nB * NB + 2];
              isNaN(yB) && (yB = 0), isNaN(UB) && (UB = 0), isNaN(WB) && (WB = 0), 0 === BB.type && (yB /= 255, UB /= 255, WB /= 255), BB.gammaSpace && (yB = Math.pow((0, JB.Clamp)(yB), GB.g), UB = Math.pow((0, JB.Clamp)(UB), GB.g), WB = Math.pow((0, JB.Clamp)(WB), GB.g));
              const dB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(yB, UB, WB);
                if (BB > dB) {
                  const IB = dB / BB;
                  yB *= IB, UB *= IB, WB *= IB
                }
              } else yB = (0, JB.Clamp)(yB, 0, dB), UB = (0, JB.Clamp)(UB, 0, dB), WB = (0, JB.Clamp)(WB, 0, dB);
              const CB = new vB.c(yB, UB, WB);
              TB.addLight(zB, CB, qB), kB += qB, gB += cB
            }
            FB += nB
          }
        }
        const FB = 6 * (4 * Math.PI) / 6 / kB;
        return TB.scaleInPlace(FB), TB.convertIncidentRadianceToIrradiance(), TB.convertIrradianceToLambertianRadiance(), oB.f.FromHarmonics(TB)
      }
    }
    cB._FileFaces = [new kB("right", new TB.s(1, 0, 0), new TB.s(0, 0, -1), new TB.s(0, -1, 0)), new kB("left", new TB.s(-1, 0, 0), new TB.s(0, 0, 1), new TB.s(0, -1, 0)), new kB("up", new TB.s(0, 1, 0), new TB.s(1, 0, 0), new TB.s(0, 0, 1)), new kB("down", new TB.s(0, -1, 0), new TB.s(1, 0, 0), new TB.s(0, 0, -1)), new kB("front", new TB.s(0, 0, 1), new TB.s(1, 0, 0), new TB.s(0, -1, 0)), new kB("back", new TB.s(0, 0, -1), new TB.s(-1, 0, 0), new TB.s(0, -1, 0))], cB.MAX_HDRI_VALUE = 4096, cB.PRESERVE_CLAMPED_COLORS = !1
  },
  41833: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(41821),
      JB = ZB(41842);
    class oB {
      static ExpandRGBDTexture(BB) {
        const IB = BB._texture;
        if (!IB || !BB.isRGBD) return;
        const JB = IB.PN(),
          oB = JB.getCaps(),
          GB = IB.isReady;
        let vB = !1;
        oB.textureHalfFloatRender && oB.textureHalfFloatLinearFiltering ? (vB = !0, IB.type = 2) : oB.textureFloatRender && oB.textureFloatLinearFiltering && (vB = !0, IB.type = 1), vB && (IB.isReady = !1, IB._isRGBD = !1, IB.invertY = !1);
        const kB = async () => {
          const oB = JB.isWebGPU,
            GB = oB ? 1 : 0;
          IB.isReady = !1, oB ? await ZB.e(347).then((() => ZB(61428))) : await ZB.e(329).then((() => ZB(61430)));
          const vB = new TB.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, JB, !1, void 0, IB.type, void 0, null, !1, void 0, GB);
          vB.externalTextureSamplerBinding = !0;
          const kB = JB.createRenderTargetTexture(IB.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: IB.samplingMode,
            type: IB.type,
            format: 5
          });
          vB.onEffectCreatedObservable.addOnce((ZB => {
            ZB.executeWhenCompiled((() => {
              vB.onApply = BB => {
                BB._bindTexture("textureSampler", IB), BB.setFloat2("scale", 1, 1)
              }, BB.JR()?.postProcessManager.directRender([vB], kB, !0), JB.restoreDefaultFramebuffer(), JB._releaseTexture(IB), vB && vB.dispose(), kB._swapAndDie(IB), IB.isReady = !0
            }))
          }))
        };
        vB && (GB ? kB() : BB.onLoadObservable.addOnce(kB))
      }
      static async EncodeTextureToRGBD(BB, IB) {
        let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return IB.PN().isWebGPU ? await ZB.e(348).then((() => ZB(61440))) : await ZB.e(330).then((() => ZB(61438))), await (0, JB.b)("rgbdEncode", BB, IB, TB, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);