export const id = 288;
export const ids = [288];
export const modules = {
  40488: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      _ENVTextureLoader: () => MB
    });
    var VB = dB(38689),
      yB = dB(36126),
      pB = dB(36157),
      lB = dB(38732),
      JB = dB(38569),
      YB = dB(38741),
      gB = (dB(38843), dB(40496)),
      oB = dB(37651),
      kB = (dB(40506), dB(40532), dB(38819));
    const LB = "image/png",
      OB = [134, 22, 135, 150, 246, 214, 150, 54];

    function DB(BB) {
      const TB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      let dB = 0;
      for (let lB = 0; lB < OB.length; lB++)
        if (TB.getUint8(dB++) !== OB[lB]) return oB.b.Error("Not a babylon environment map"), null;
      let VB, yB = "";
      for (; VB = TB.getUint8(dB++);) yB += String.fromCharCode(VB);
      let pB = JSON.parse(yB);
      return pB = uB(pB), pB.binaryDataPosition = dB, pB.specular && (pB.specular.lodGenerationScale = pB.specular.lodGenerationScale || .8), pB
    }

    function uB(BB) {
      if (BB.version > 2) throw new Error(`Unsupported babylon environment map version "${BB.version}". Latest supported version is "2".`);
      return 2 === BB.version ? BB : BB = {
        ...BB,
        version: 2,
        imageType: LB
      }
    }

    function HB(BB, TB) {
      const dB = (TB = uB(TB)).specular;
      let VB = Math.log2(TB.width);
      if (VB = Math.round(VB) + 1, dB.mipmaps.length !== 6 * VB) throw new Error(`Unsupported specular mipmaps number "${dB.mipmaps.length}"`);
      const yB = new Array(VB);
      for (let pB = 0; pB < VB; pB++) {
        yB[pB] = new Array(6);
        for (let VB = 0; VB < 6; VB++) {
          const lB = dB.mipmaps[6 * pB + VB];
          yB[pB][VB] = new Uint8Array(BB.buffer, BB.byteOffset + TB.binaryDataPosition + lB.position, lB.length)
        }
      }
      return yB
    }

    function EB(BB, TB) {
      TB = uB(TB);
      const dB = new Array(6),
        VB = TB.irradiance?.irradianceTexture;
      if (VB) {
        if (6 !== VB.faces.length) throw new Error(`Incorrect irradiance texture faces number "${VB.faces.length}"`);
        for (let yB = 0; yB < 6; yB++) {
          const pB = VB.faces[yB];
          dB[yB] = new Uint8Array(BB.buffer, BB.byteOffset + TB.binaryDataPosition + pB.position, pB.length)
        }
      }
      return dB
    }

    function vB(BB, TB, dB) {
      const VB = (dB = uB(dB)).specular;
      if (!VB) return Promise.resolve([]);
      BB._lodGenerationScale = VB.lodGenerationScale;
      const pB = [],
        lB = HB(TB, dB);
      pB.push(iB(BB, lB, dB.imageType));
      const JB = dB.irradiance?.irradianceTexture;
      if (JB) {
        const VB = EB(TB, dB);
        let lB = null;
        dB.irradiance?.irradianceTexture?.dominantDirection && (lB = yB.p.FromArray(dB.irradiance.irradianceTexture.dominantDirection)), pB.push(NB(BB, VB, JB.size, dB.imageType, lB))
      }
      return Promise.all(pB)
    }
    async function mB(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB) {
      return await new Promise(((kB, LB) => {
        if (dB) {
          const dB = TB.createTexture(null, !0, !0, null, 1, null, (BB => {
            LB(BB)
          }), BB);
          VB?.onEffectCreatedObservable.addOnce((JB => {
            JB.executeWhenCompiled((() => {
              VB.externalTextureSamplerBinding = !0, VB.onApply = VB => {
                VB._bindTexture("textureSampler", dB), VB.setFloat2("scale", 1, TB._features.needsInvertingBitmap && BB instanceof ImageBitmap ? -1 : 1)
              }, TB.scenes.length && (TB.scenes[0].postProcessManager.directRender([VB], gB, !0, pB, lB), TB.restoreDefaultFramebuffer(), dB.dispose(), URL.revokeObjectURL(yB), kB())
            }))
          }))
        } else {
          if (TB._uploadImageToTexture(oB, BB, pB, lB), JB) {
            const dB = YB[lB];
            dB && TB._uploadImageToTexture(dB._texture, BB, pB, 0)
          }
          kB()
        }
      }))
    }
    async function iB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LB;
      const VB = BB.PD();
      BB.format = 5, BB.type = 0, BB.generateMipMaps = !0, BB._cachedAnisotropicFilteringLevel = null, VB.updateTextureSamplingMode(3, BB), await tB(BB, TB, !0, dB), BB.isReady = !0
    }
    async function NB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LB,
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const pB = BB.PD(),
        lB = new JB.e(pB, 5),
        gB = new YB.b(pB, lB);
      BB._irradianceTexture = gB, gB._dominantDirection = yB, lB.isCube = !0, lB.format = 5, lB.type = 0, lB.generateMipMaps = !0, lB._cachedAnisotropicFilteringLevel = null, lB.generateMipMaps = !0, lB.width = dB, lB.height = dB, pB.updateTextureSamplingMode(3, lB), await tB(lB, [TB], !1, VB), pB.generateMipMapsForCubemap(lB), lB.isReady = !0
    }
    async function tB(BB, TB, yB) {
      let lB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LB;
      if (!(0, VB.i)(BB.width)) throw new Error("Texture size must be a power of two");
      const oB = (0, pB.ILog2)(BB.width) + 1,
        OB = BB.PD();
      let DB = !1,
        uB = !1,
        HB = null,
        EB = null,
        vB = null;
      const iB = OB.getCaps();
      iB.textureLOD ? OB._features.supportRenderAndCopyToLodForFloatTextures ? iB.textureHalfFloatRender && iB.textureHalfFloatLinearFiltering ? (DB = !0, BB.type = 2) : iB.textureFloatRender && iB.textureFloatLinearFiltering && (DB = !0, BB.type = 1) : DB = !1 : (DB = !1, uB = yB);
      let NB = 0;
      if (DB) OB.isWebGPU ? (NB = 1, await dB.e(322).then((() => dB(59938)))) : await dB.e(304).then((() => dB(59942))), HB = new gB.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, OB, !1, void 0, BB.type, void 0, null, !1, void 0, NB), BB._isRGBD = !1, BB.invertY = !1, EB = OB.createRenderTargetCubeTexture(BB.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: BB.type,
        format: 5
      });
      else if (BB._isRGBD = !0, BB.invertY = !0, uB) {
        const TB = 3;
        vB = {};
        const dB = BB._lodGenerationScale,
          VB = BB._lodGenerationOffset;
        for (let yB = 0; yB < TB; yB++) {
          const pB = (oB - 1) * dB + VB,
            lB = VB + (pB - VB) * (1 - yB / (TB - 1)),
            gB = Math.round(Math.min(Math.max(lB, 0), pB)),
            kB = new JB.e(OB, 2);
          kB.isCube = !0, kB.invertY = !0, kB.generateMipMaps = !1, OB.updateTextureSamplingMode(2, kB);
          const LB = new YB.b(null);
          switch (LB._isCube = !0, LB._texture = kB, vB[gB] = LB, yB) {
            case 0:
              BB._lodTextureLow = LB;
              break;
            case 1:
              BB._lodTextureMid = LB;
              break;
            case 2:
              BB._lodTextureHigh = LB
          }
        }
      }
      const tB = [];
      for (let dB = 0; dB < TB.length; dB++)
        for (let VB = 0; VB < 6; VB++) {
          const yB = TB[dB][VB],
            pB = (0, kB.j)(yB),
            JB = new Blob([pB], {
              type: lB
            }),
            YB = URL.createObjectURL(JB);
          let gB;
          if (OB._features.forceBitmapOverHTMLImageElement) gB = OB.createImageBitmap(JB, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async TB => await mB(TB, OB, DB, HB, YB, VB, dB, uB, vB, EB, BB)));
          else {
            const TB = new Image;
            TB.src = YB, gB = new Promise(((yB, pB) => {
              TB.onload = () => {
                mB(TB, OB, DB, HB, YB, VB, dB, uB, vB, EB, BB).then((() => yB())).catch((BB => {
                  pB(BB)
                }))
              }, TB.onerror = BB => {
                pB(BB)
              }
            }))
          }
          tB.push(gB)
        }
      if (await Promise.all(tB), TB.length < oB) {
        let dB;
        const VB = Math.pow(2, oB - 1 - TB.length),
          yB = VB * VB * 4;
        switch (BB.type) {
          case 0:
            dB = new Uint8Array(yB);
            break;
          case 2:
            dB = new Uint16Array(yB);
            break;
          case 1:
            dB = new Float32Array(yB)
        }
        for (let pB = TB.length; pB < oB; pB++)
          for (let TB = 0; TB < 6; TB++) OB._uploadArrayBufferViewToTexture(EB?.texture || BB, dB, TB, pB)
      }
      if (EB) {
        const TB = BB._irradianceTexture;
        BB._irradianceTexture = null, OB._releaseTexture(BB), EB._swapAndDie(BB), BB._irradianceTexture = TB
      }
      HB && HB.dispose(), uB && (BB._lodTextureHigh && BB._lodTextureHigh._texture && (BB._lodTextureHigh._texture.isReady = !0), BB._lodTextureMid && BB._lodTextureMid._texture && (BB._lodTextureMid._texture.isReady = !0), BB._lodTextureLow && BB._lodTextureLow._texture && (BB._lodTextureLow._texture.isReady = !0))
    }

    function fB(BB, TB) {
      const dB = (TB = uB(TB)).irradiance;
      if (!dB) return;
      const VB = new lB.d;
      yB.p.FromArrayToRef(dB.x, 0, VB.x), yB.p.FromArrayToRef(dB.y, 0, VB.y), yB.p.FromArrayToRef(dB.z, 0, VB.z), yB.p.FromArrayToRef(dB.xx, 0, VB.xx), yB.p.FromArrayToRef(dB.yy, 0, VB.yy), yB.p.FromArrayToRef(dB.zz, 0, VB.zz), yB.p.FromArrayToRef(dB.yz, 0, VB.yz), yB.p.FromArrayToRef(dB.zx, 0, VB.zx), yB.p.FromArrayToRef(dB.xy, 0, VB.xy), BB._sphericalPolynomial = VB
    }
    var sB = dB(40538);
    class MB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, TB, dB, VB, yB) {
        if (Array.isArray(BB)) return;
        const pB = DB(BB);
        if (pB) {
          TB.width = pB.width, TB.height = pB.width;
          try {
            (0, sB.e)(), fB(TB, pB), vB(TB, BB, pB).then((() => {
              TB.isReady = !0, TB.onLoadedObservable.notifyObservers(TB), TB.onLoadedObservable.clear(), VB && VB()
            }), (BB => {
              yB?.("Can not upload environment levels", BB)
            }))
          } catch (lB) {
            yB?.("Can not upload environment file", lB)
          }
        } else yB && yB("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  40538: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB = dB(40463),
      yB = dB(38741);
    let pB = !1;

    function lB() {
      pB || (pB = !0, yB.b.prototype._sphericalPolynomialTargetSize = 0, yB.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(yB.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = VB.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((BB => {
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
  40463: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => gB
    });
    var VB = dB(36126),
      yB = dB(36157),
      pB = dB(38732),
      lB = dB(36132),
      JB = dB(36183);
    class YB {
      constructor(BB, TB, dB, VB) {
        this.name = BB, this.worldAxisForNormal = TB, this.worldAxisForFileX = dB, this.worldAxisForFileY = VB
      }
    }
    class gB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.jU()?.PD().flushFramebuffer();
        const TB = BB.getSize().width,
          dB = BB._sphericalPolynomialTargetSize,
          VB = dB > 0 ? this._NearestPow2Floor(dB) : 0,
          yB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          pB = VB > 0 && VB < TB && yB,
          lB = pB ? Math.max(0, Math.round(Math.log2(TB / VB))) : 0,
          JB = pB ? Math.max(1, Math.floor(TB / Math.pow(2, lB))) : TB,
          YB = BB.readPixels(0, lB, void 0, !1),
          gB = BB.readPixels(1, lB, void 0, !1);
        let oB, kB;
        BB.isRenderTarget ? (oB = BB.readPixels(3, lB, void 0, !1), kB = BB.readPixels(2, lB, void 0, !1)) : (oB = BB.readPixels(2, lB, void 0, !1), kB = BB.readPixels(3, lB, void 0, !1));
        const LB = BB.readPixels(4, lB, void 0, !1),
          OB = BB.readPixels(5, lB, void 0, !1),
          DB = BB.gammaSpace,
          uB = VB > 0 && VB < TB && !pB;
        return new Promise((BB => {
          Promise.all([gB, YB, oB, kB, LB, OB]).then((dB => {
            let [yB, pB, lB, YB, gB, oB] = dB, kB = JB;
            if (uB) {
              const BB = 4;
              yB = this._DownsampleFace(yB, TB, VB, BB), pB = this._DownsampleFace(pB, TB, VB, BB), lB = this._DownsampleFace(lB, TB, VB, BB), YB = this._DownsampleFace(YB, TB, VB, BB), gB = this._DownsampleFace(gB, TB, VB, BB), oB = this._DownsampleFace(oB, TB, VB, BB), kB = VB
            }
            const LB = {
              size: kB,
              right: pB,
              left: yB,
              up: lB,
              down: YB,
              front: gB,
              back: oB,
              format: 5,
              type: yB instanceof Float32Array ? 1 : 0,
              gammaSpace: DB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(LB))
          }))
        }))
      }
      static _AreaElement(BB, TB) {
        return Math.atan2(BB * TB, Math.sqrt(BB * BB + TB * TB + 1))
      }
      static _DownsampleFace(BB, TB, dB, VB) {
        const yB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          pB = dB * dB * VB,
          lB = new Float32Array(pB),
          JB = TB / dB,
          YB = 1 / (JB * JB);
        for (let oB = 0; oB < dB; oB++) {
          const BB = Math.floor(oB * JB),
            pB = Math.floor((oB + 1) * JB);
          for (let gB = 0; gB < dB; gB++) {
            const kB = Math.floor(gB * JB),
              LB = Math.floor((gB + 1) * JB),
              OB = (oB * dB + gB) * VB;
            for (let dB = 0; dB < VB; dB++) {
              let JB = 0;
              for (let lB = BB; lB < pB; lB++)
                for (let BB = kB; BB < LB; BB++) JB += yB[(lB * TB + BB) * VB + dB];
              lB[OB + dB] = JB * YB
            }
          }
        }
        if (BB instanceof Float32Array) return lB;
        const gB = new(0, BB.constructor)(pB);
        for (let oB = 0; oB < pB; oB++) gB[oB] = lB[oB] + .5 | 0;
        return gB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const dB = TB > 0 ? this._NearestPow2Floor(TB) : 0;
        if (dB > 0 && BB.size > dB) {
          const TB = 5 === BB.format ? 4 : 3,
            VB = ["right", "left", "up", "down", "front", "back"],
            yB = {};
          for (const pB of VB) yB[pB] = this._DownsampleFace(BB[pB], BB.size, dB, TB);
          BB = {
            ...BB,
            ...yB,
            size: dB
          }
        }
        const VB = new pB.b;
        let YB = 0;
        const gB = 2 / BB.size,
          oB = gB,
          kB = .5 * gB,
          LB = kB - 1;
        for (let pB = 0; pB < 6; pB++) {
          const TB = this._FileFaces[pB],
            dB = BB[TB.name];
          let OB = LB;
          const DB = 5 === BB.format ? 4 : 3;
          for (let pB = 0; pB < BB.size; pB++) {
            let uB = LB;
            for (let oB = 0; oB < BB.size; oB++) {
              const LB = TB.worldAxisForFileX.scale(uB).add(TB.worldAxisForFileY.scale(OB)).add(TB.worldAxisForNormal);
              LB.normalize();
              const HB = this._AreaElement(uB - kB, OB - kB) - this._AreaElement(uB - kB, OB + kB) - this._AreaElement(uB + kB, OB - kB) + this._AreaElement(uB + kB, OB + kB);
              let EB = dB[pB * BB.size * DB + oB * DB + 0],
                vB = dB[pB * BB.size * DB + oB * DB + 1],
                mB = dB[pB * BB.size * DB + oB * DB + 2];
              isNaN(EB) && (EB = 0), isNaN(vB) && (vB = 0), isNaN(mB) && (mB = 0), 0 === BB.type && (EB /= 255, vB /= 255, mB /= 255), BB.gammaSpace && (EB = Math.pow((0, yB.Clamp)(EB), lB.j), vB = Math.pow((0, yB.Clamp)(vB), lB.j), mB = Math.pow((0, yB.Clamp)(mB), lB.j));
              const iB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(EB, vB, mB);
                if (BB > iB) {
                  const TB = iB / BB;
                  EB *= TB, vB *= TB, mB *= TB
                }
              } else EB = (0, yB.Clamp)(EB, 0, iB), vB = (0, yB.Clamp)(vB, 0, iB), mB = (0, yB.Clamp)(mB, 0, iB);
              const NB = new JB.c(EB, vB, mB);
              VB.addLight(LB, NB, HB), YB += HB, uB += gB
            }
            OB += oB
          }
        }
        const OB = 6 * (4 * Math.PI) / 6 / YB;
        return VB.scaleInPlace(OB), VB.convertIncidentRadianceToIrradiance(), VB.convertIrradianceToLambertianRadiance(), pB.d.FromHarmonics(VB)
      }
    }
    gB._FileFaces = [new YB("right", new VB.p(1, 0, 0), new VB.p(0, 0, -1), new VB.p(0, -1, 0)), new YB("left", new VB.p(-1, 0, 0), new VB.p(0, 0, 1), new VB.p(0, -1, 0)), new YB("up", new VB.p(0, 1, 0), new VB.p(1, 0, 0), new VB.p(0, 0, 1)), new YB("down", new VB.p(0, -1, 0), new VB.p(1, 0, 0), new VB.p(0, 0, -1)), new YB("front", new VB.p(0, 0, 1), new VB.p(1, 0, 0), new VB.p(0, -1, 0)), new YB("back", new VB.p(0, 0, -1), new VB.p(-1, 0, 0), new VB.p(0, -1, 0))], gB.MAX_HDRI_VALUE = 4096, gB.PRESERVE_CLAMPED_COLORS = !1
  },
  40506: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(40496),
      yB = dB(40510);
    class pB {
      static ExpandRGBDTexture(BB) {
        const TB = BB._texture;
        if (!TB || !BB.isRGBD) return;
        const yB = TB.PD(),
          pB = yB.getCaps(),
          lB = TB.isReady;
        let JB = !1;
        pB.textureHalfFloatRender && pB.textureHalfFloatLinearFiltering ? (JB = !0, TB.type = 2) : pB.textureFloatRender && pB.textureFloatLinearFiltering && (JB = !0, TB.type = 1), JB && (TB.isReady = !1, TB._isRGBD = !1, TB.invertY = !1);
        const YB = async () => {
          const pB = yB.isWebGPU,
            lB = pB ? 1 : 0;
          TB.isReady = !1, pB ? await dB.e(322).then((() => dB(59938))) : await dB.e(304).then((() => dB(59942)));
          const JB = new VB.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, yB, !1, void 0, TB.type, void 0, null, !1, void 0, lB);
          JB.externalTextureSamplerBinding = !0;
          const YB = yB.createRenderTargetTexture(TB.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: TB.samplingMode,
            type: TB.type,
            format: 5
          });
          JB.onEffectCreatedObservable.addOnce((dB => {
            dB.executeWhenCompiled((() => {
              JB.onApply = BB => {
                BB._bindTexture("textureSampler", TB), BB.setFloat2("scale", 1, 1)
              }, BB.jU()?.postProcessManager.directRender([JB], YB, !0), yB.restoreDefaultFramebuffer(), yB._releaseTexture(TB), JB && JB.dispose(), YB._swapAndDie(TB), TB.isReady = !0
            }))
          }))
        };
        JB && (lB ? YB() : BB.onLoadObservable.addOnce(YB))
      }
      static async EncodeTextureToRGBD(BB, TB) {
        let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return TB.PD().isWebGPU ? await dB.e(323).then((() => dB(59964))) : await dB.e(305).then((() => dB(59959))), await (0, yB.d)("rgbdEncode", BB, TB, VB, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);