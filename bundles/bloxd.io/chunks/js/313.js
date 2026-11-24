export const id = 313;
export const ids = [313];
export const modules = {
  41883: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      _ENVTextureLoader: () => iB
    });
    var QB = zB(40015),
      nB = zB(37171),
      dB = zB(37208),
      IB = zB(40056),
      NB = zB(39913),
      uB = zB(40062),
      UB = (zB(40156), zB(41892)),
      aB = zB(38783),
      pB = (zB(41898), zB(41914), zB(40125));
    const rB = "image/png",
      sB = [134, 22, 135, 150, 246, 214, 150, 54];

    function JB(BB) {
      const jB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      let zB = 0;
      for (let IB = 0; IB < sB.length; IB++)
        if (jB.getUint8(zB++) !== sB[IB]) return aB.c.Error("Not a babylon environment map"), null;
      let QB, nB = "";
      for (; QB = jB.getUint8(zB++);) nB += String.fromCharCode(QB);
      let dB = JSON.parse(nB);
      return dB = mB(dB), dB.binaryDataPosition = zB, dB.specular && (dB.specular.lodGenerationScale = dB.specular.lodGenerationScale || .8), dB
    }

    function mB(BB) {
      if (BB.version > 2) throw new Error(`Unsupported babylon environment map version "${BB.version}". Latest supported version is "2".`);
      return 2 === BB.version ? BB : BB = {
        ...BB,
        version: 2,
        imageType: rB
      }
    }

    function yB(BB, jB) {
      const zB = (jB = mB(jB)).specular;
      let QB = Math.log2(jB.width);
      if (QB = Math.round(QB) + 1, zB.mipmaps.length !== 6 * QB) throw new Error(`Unsupported specular mipmaps number "${zB.mipmaps.length}"`);
      const nB = new Array(QB);
      for (let dB = 0; dB < QB; dB++) {
        nB[dB] = new Array(6);
        for (let QB = 0; QB < 6; QB++) {
          const IB = zB.mipmaps[6 * dB + QB];
          nB[dB][QB] = new Uint8Array(BB.buffer, BB.byteOffset + jB.binaryDataPosition + IB.position, IB.length)
        }
      }
      return nB
    }

    function kB(BB, jB) {
      jB = mB(jB);
      const zB = new Array(6),
        QB = jB.irradiance?.irradianceTexture;
      if (QB) {
        if (6 !== QB.faces.length) throw new Error(`Incorrect irradiance texture faces number "${QB.faces.length}"`);
        for (let nB = 0; nB < 6; nB++) {
          const dB = QB.faces[nB];
          zB[nB] = new Uint8Array(BB.buffer, BB.byteOffset + jB.binaryDataPosition + dB.position, dB.length)
        }
      }
      return zB
    }

    function GB(BB, jB, zB) {
      const QB = (zB = mB(zB)).specular;
      if (!QB) return Promise.resolve([]);
      BB._lodGenerationScale = QB.lodGenerationScale;
      const dB = [],
        IB = yB(jB, zB);
      dB.push(gB(BB, IB, zB.imageType));
      const NB = zB.irradiance?.irradianceTexture;
      if (NB) {
        const QB = kB(jB, zB);
        let IB = null;
        zB.irradiance?.irradianceTexture?.dominantDirection && (IB = nB.m.FromArray(zB.irradiance.irradianceTexture.dominantDirection)), dB.push(tB(BB, QB, NB.size, zB.imageType, IB))
      }
      return Promise.all(dB)
    }
    async function LB(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB) {
      return await new Promise(((pB, rB) => {
        if (zB) {
          const zB = jB.createTexture(null, !0, !0, null, 1, null, (BB => {
            rB(BB)
          }), BB);
          QB?.onEffectCreatedObservable.addOnce((NB => {
            NB.executeWhenCompiled((() => {
              QB.externalTextureSamplerBinding = !0, QB.onApply = QB => {
                QB._bindTexture("textureSampler", zB), QB.setFloat2("scale", 1, jB._features.needsInvertingBitmap && BB instanceof ImageBitmap ? -1 : 1)
              }, jB.scenes.length && (jB.scenes[0].postProcessManager.directRender([QB], UB, !0, dB, IB), jB.restoreDefaultFramebuffer(), zB.dispose(), URL.revokeObjectURL(nB), pB())
            }))
          }))
        } else {
          if (jB._uploadImageToTexture(aB, BB, dB, IB), NB) {
            const zB = uB[IB];
            zB && jB._uploadImageToTexture(zB._texture, BB, dB, 0)
          }
          pB()
        }
      }))
    }
    async function gB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rB;
      const QB = BB.wJ();
      BB.format = 5, BB.type = 0, BB.generateMipMaps = !0, BB._cachedAnisotropicFilteringLevel = null, QB.updateTextureSamplingMode(3, BB), await SB(BB, jB, !0, zB), BB.isReady = !0
    }
    async function tB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rB,
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const dB = BB.wJ(),
        IB = new NB.d(dB, 5),
        UB = new uB.c(dB, IB);
      BB._irradianceTexture = UB, UB._dominantDirection = nB, IB.isCube = !0, IB.format = 5, IB.type = 0, IB.generateMipMaps = !0, IB._cachedAnisotropicFilteringLevel = null, IB.generateMipMaps = !0, IB.width = zB, IB.height = zB, dB.updateTextureSamplingMode(3, IB), await SB(IB, [jB], !1, QB), dB.generateMipMapsForCubemap(IB), IB.isReady = !0
    }
    async function SB(BB, jB, nB) {
      let IB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rB;
      if (!(0, QB.d)(BB.width)) throw new Error("Texture size must be a power of two");
      const aB = (0, dB.ILog2)(BB.width) + 1,
        sB = BB.wJ();
      let JB = !1,
        mB = !1,
        yB = null,
        kB = null,
        GB = null;
      const gB = sB.getCaps();
      gB.textureLOD ? sB._features.supportRenderAndCopyToLodForFloatTextures ? gB.textureHalfFloatRender && gB.textureHalfFloatLinearFiltering ? (JB = !0, BB.type = 2) : gB.textureFloatRender && gB.textureFloatLinearFiltering && (JB = !0, BB.type = 1) : JB = !1 : (JB = !1, mB = nB);
      let tB = 0;
      if (JB) sB.isWebGPU ? (tB = 1, await zB.e(347).then((() => zB(61543)))) : await zB.e(329).then((() => zB(61545))), yB = new UB.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, sB, !1, void 0, BB.type, void 0, null, !1, void 0, tB), BB._isRGBD = !1, BB.invertY = !1, kB = sB.createRenderTargetCubeTexture(BB.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: BB.type,
        format: 5
      });
      else if (BB._isRGBD = !0, BB.invertY = !0, mB) {
        const jB = 3;
        GB = {};
        const zB = BB._lodGenerationScale,
          QB = BB._lodGenerationOffset;
        for (let nB = 0; nB < jB; nB++) {
          const dB = (aB - 1) * zB + QB,
            IB = QB + (dB - QB) * (1 - nB / (jB - 1)),
            UB = Math.round(Math.min(Math.max(IB, 0), dB)),
            pB = new NB.d(sB, 2);
          pB.isCube = !0, pB.invertY = !0, pB.generateMipMaps = !1, sB.updateTextureSamplingMode(2, pB);
          const rB = new uB.c(null);
          switch (rB._isCube = !0, rB._texture = pB, GB[UB] = rB, nB) {
            case 0:
              BB._lodTextureLow = rB;
              break;
            case 1:
              BB._lodTextureMid = rB;
              break;
            case 2:
              BB._lodTextureHigh = rB
          }
        }
      }
      const SB = [];
      for (let zB = 0; zB < jB.length; zB++)
        for (let QB = 0; QB < 6; QB++) {
          const nB = jB[zB][QB],
            dB = (0, pB.i)(nB),
            NB = new Blob([dB], {
              type: IB
            }),
            uB = URL.createObjectURL(NB);
          let UB;
          if (sB._features.forceBitmapOverHTMLImageElement) UB = sB.createImageBitmap(NB, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async jB => await LB(jB, sB, JB, yB, uB, QB, zB, mB, GB, kB, BB)));
          else {
            const jB = new Image;
            jB.src = uB, UB = new Promise(((nB, dB) => {
              jB.onload = () => {
                LB(jB, sB, JB, yB, uB, QB, zB, mB, GB, kB, BB).then((() => nB())).catch((BB => {
                  dB(BB)
                }))
              }, jB.onerror = BB => {
                dB(BB)
              }
            }))
          }
          SB.push(UB)
        }
      if (await Promise.all(SB), jB.length < aB) {
        let zB;
        const QB = Math.pow(2, aB - 1 - jB.length),
          nB = QB * QB * 4;
        switch (BB.type) {
          case 0:
            zB = new Uint8Array(nB);
            break;
          case 2:
            zB = new Uint16Array(nB);
            break;
          case 1:
            zB = new Float32Array(nB)
        }
        for (let dB = jB.length; dB < aB; dB++)
          for (let jB = 0; jB < 6; jB++) sB._uploadArrayBufferViewToTexture(kB?.texture || BB, zB, jB, dB)
      }
      if (kB) {
        const jB = BB._irradianceTexture;
        BB._irradianceTexture = null, sB._releaseTexture(BB), kB._swapAndDie(BB), BB._irradianceTexture = jB
      }
      yB && yB.dispose(), mB && (BB._lodTextureHigh && BB._lodTextureHigh._texture && (BB._lodTextureHigh._texture.isReady = !0), BB._lodTextureMid && BB._lodTextureMid._texture && (BB._lodTextureMid._texture.isReady = !0), BB._lodTextureLow && BB._lodTextureLow._texture && (BB._lodTextureLow._texture.isReady = !0))
    }

    function MB(BB, jB) {
      const zB = (jB = mB(jB)).irradiance;
      if (!zB) return;
      const QB = new IB.h;
      nB.m.FromArrayToRef(zB.x, 0, QB.x), nB.m.FromArrayToRef(zB.y, 0, QB.y), nB.m.FromArrayToRef(zB.z, 0, QB.z), nB.m.FromArrayToRef(zB.xx, 0, QB.xx), nB.m.FromArrayToRef(zB.yy, 0, QB.yy), nB.m.FromArrayToRef(zB.zz, 0, QB.zz), nB.m.FromArrayToRef(zB.yz, 0, QB.yz), nB.m.FromArrayToRef(zB.zx, 0, QB.zx), nB.m.FromArrayToRef(zB.xy, 0, QB.xy), BB._sphericalPolynomial = QB
    }
    var EB = zB(41916);
    class iB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, jB, zB, QB, nB) {
        if (Array.isArray(BB)) return;
        const dB = JB(BB);
        if (dB) {
          jB.width = dB.width, jB.height = dB.width;
          try {
            (0, EB.b)(), MB(jB, dB), GB(jB, BB, dB).then((() => {
              jB.isReady = !0, jB.onLoadedObservable.notifyObservers(jB), jB.onLoadedObservable.clear(), QB && QB()
            }), (BB => {
              nB?.("Can not upload environment levels", BB)
            }))
          } catch (IB) {
            nB?.("Can not upload environment file", IB)
          }
        } else nB && nB("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41916: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(41862),
      nB = zB(40062);
    let dB = !1;

    function IB() {
      dB || (dB = !0, nB.c.prototype._sphericalPolynomialTargetSize = 0, nB.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(nB.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = QB.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((BB => {
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
  41862: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB
    });
    var QB = zB(37171),
      nB = zB(37208),
      dB = zB(40056),
      IB = zB(37178),
      NB = zB(37379);
    class uB {
      constructor(BB, jB, zB, QB) {
        this.name = BB, this.worldAxisForNormal = jB, this.worldAxisForFileX = zB, this.worldAxisForFileY = QB
      }
    }
    class UB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.aY()?.wJ().flushFramebuffer();
        const jB = BB.getSize().width,
          zB = BB._sphericalPolynomialTargetSize,
          QB = zB > 0 ? this._NearestPow2Floor(zB) : 0,
          nB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          dB = QB > 0 && QB < jB && nB,
          IB = dB ? Math.max(0, Math.round(Math.log2(jB / QB))) : 0,
          NB = dB ? Math.max(1, Math.floor(jB / Math.pow(2, IB))) : jB,
          uB = BB.readPixels(0, IB, void 0, !1),
          UB = BB.readPixels(1, IB, void 0, !1);
        let aB, pB;
        BB.isRenderTarget ? (aB = BB.readPixels(3, IB, void 0, !1), pB = BB.readPixels(2, IB, void 0, !1)) : (aB = BB.readPixels(2, IB, void 0, !1), pB = BB.readPixels(3, IB, void 0, !1));
        const rB = BB.readPixels(4, IB, void 0, !1),
          sB = BB.readPixels(5, IB, void 0, !1),
          JB = BB.gammaSpace,
          mB = QB > 0 && QB < jB && !dB;
        return new Promise((BB => {
          Promise.all([UB, uB, aB, pB, rB, sB]).then((zB => {
            let [nB, dB, IB, uB, UB, aB] = zB, pB = NB;
            if (mB) {
              const BB = 4;
              nB = this._DownsampleFace(nB, jB, QB, BB), dB = this._DownsampleFace(dB, jB, QB, BB), IB = this._DownsampleFace(IB, jB, QB, BB), uB = this._DownsampleFace(uB, jB, QB, BB), UB = this._DownsampleFace(UB, jB, QB, BB), aB = this._DownsampleFace(aB, jB, QB, BB), pB = QB
            }
            const rB = {
              size: pB,
              right: dB,
              left: nB,
              up: IB,
              down: uB,
              front: UB,
              back: aB,
              format: 5,
              type: nB instanceof Float32Array ? 1 : 0,
              gammaSpace: JB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(rB))
          }))
        }))
      }
      static _AreaElement(BB, jB) {
        return Math.atan2(BB * jB, Math.sqrt(BB * BB + jB * jB + 1))
      }
      static _DownsampleFace(BB, jB, zB, QB) {
        const nB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          dB = zB * zB * QB,
          IB = new Float32Array(dB),
          NB = jB / zB,
          uB = 1 / (NB * NB);
        for (let aB = 0; aB < zB; aB++) {
          const BB = Math.floor(aB * NB),
            dB = Math.floor((aB + 1) * NB);
          for (let UB = 0; UB < zB; UB++) {
            const pB = Math.floor(UB * NB),
              rB = Math.floor((UB + 1) * NB),
              sB = (aB * zB + UB) * QB;
            for (let zB = 0; zB < QB; zB++) {
              let NB = 0;
              for (let IB = BB; IB < dB; IB++)
                for (let BB = pB; BB < rB; BB++) NB += nB[(IB * jB + BB) * QB + zB];
              IB[sB + zB] = NB * uB
            }
          }
        }
        if (BB instanceof Float32Array) return IB;
        const UB = new(0, BB.constructor)(dB);
        for (let aB = 0; aB < dB; aB++) UB[aB] = IB[aB] + .5 | 0;
        return UB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zB = jB > 0 ? this._NearestPow2Floor(jB) : 0;
        if (zB > 0 && BB.size > zB) {
          const jB = 5 === BB.format ? 4 : 3,
            QB = ["right", "left", "up", "down", "front", "back"],
            nB = {};
          for (const dB of QB) nB[dB] = this._DownsampleFace(BB[dB], BB.size, zB, jB);
          BB = {
            ...BB,
            ...nB,
            size: zB
          }
        }
        const QB = new dB.d;
        let uB = 0;
        const UB = 2 / BB.size,
          aB = UB,
          pB = .5 * UB,
          rB = pB - 1;
        for (let dB = 0; dB < 6; dB++) {
          const jB = this._FileFaces[dB],
            zB = BB[jB.name];
          let sB = rB;
          const JB = 5 === BB.format ? 4 : 3;
          for (let dB = 0; dB < BB.size; dB++) {
            let mB = rB;
            for (let aB = 0; aB < BB.size; aB++) {
              const rB = jB.worldAxisForFileX.scale(mB).add(jB.worldAxisForFileY.scale(sB)).add(jB.worldAxisForNormal);
              rB.normalize();
              const yB = this._AreaElement(mB - pB, sB - pB) - this._AreaElement(mB - pB, sB + pB) - this._AreaElement(mB + pB, sB - pB) + this._AreaElement(mB + pB, sB + pB);
              let kB = zB[dB * BB.size * JB + aB * JB + 0],
                GB = zB[dB * BB.size * JB + aB * JB + 1],
                LB = zB[dB * BB.size * JB + aB * JB + 2];
              isNaN(kB) && (kB = 0), isNaN(GB) && (GB = 0), isNaN(LB) && (LB = 0), 0 === BB.type && (kB /= 255, GB /= 255, LB /= 255), BB.gammaSpace && (kB = Math.pow((0, nB.Clamp)(kB), IB.h), GB = Math.pow((0, nB.Clamp)(GB), IB.h), LB = Math.pow((0, nB.Clamp)(LB), IB.h));
              const gB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(kB, GB, LB);
                if (BB > gB) {
                  const jB = gB / BB;
                  kB *= jB, GB *= jB, LB *= jB
                }
              } else kB = (0, nB.Clamp)(kB, 0, gB), GB = (0, nB.Clamp)(GB, 0, gB), LB = (0, nB.Clamp)(LB, 0, gB);
              const tB = new NB.d(kB, GB, LB);
              QB.addLight(rB, tB, yB), uB += yB, mB += UB
            }
            sB += aB
          }
        }
        const sB = 6 * (4 * Math.PI) / 6 / uB;
        return QB.scaleInPlace(sB), QB.convertIncidentRadianceToIrradiance(), QB.convertIrradianceToLambertianRadiance(), dB.h.FromHarmonics(QB)
      }
    }
    UB._FileFaces = [new uB("right", new QB.m(1, 0, 0), new QB.m(0, 0, -1), new QB.m(0, -1, 0)), new uB("left", new QB.m(-1, 0, 0), new QB.m(0, 0, 1), new QB.m(0, -1, 0)), new uB("up", new QB.m(0, 1, 0), new QB.m(1, 0, 0), new QB.m(0, 0, 1)), new uB("down", new QB.m(0, -1, 0), new QB.m(1, 0, 0), new QB.m(0, 0, -1)), new uB("front", new QB.m(0, 0, 1), new QB.m(1, 0, 0), new QB.m(0, -1, 0)), new uB("back", new QB.m(0, 0, -1), new QB.m(-1, 0, 0), new QB.m(0, -1, 0))], UB.MAX_HDRI_VALUE = 4096, UB.PRESERVE_CLAMPED_COLORS = !1
  },
  41898: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB
    });
    var QB = zB(41892),
      nB = zB(41900);
    class dB {
      static ExpandRGBDTexture(BB) {
        const jB = BB._texture;
        if (!jB || !BB.isRGBD) return;
        const nB = jB.wJ(),
          dB = nB.getCaps(),
          IB = jB.isReady;
        let NB = !1;
        dB.textureHalfFloatRender && dB.textureHalfFloatLinearFiltering ? (NB = !0, jB.type = 2) : dB.textureFloatRender && dB.textureFloatLinearFiltering && (NB = !0, jB.type = 1), NB && (jB.isReady = !1, jB._isRGBD = !1, jB.invertY = !1);
        const uB = async () => {
          const dB = nB.isWebGPU,
            IB = dB ? 1 : 0;
          jB.isReady = !1, dB ? await zB.e(347).then((() => zB(61543))) : await zB.e(329).then((() => zB(61545)));
          const NB = new QB.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, nB, !1, void 0, jB.type, void 0, null, !1, void 0, IB);
          NB.externalTextureSamplerBinding = !0;
          const uB = nB.createRenderTargetTexture(jB.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: jB.samplingMode,
            type: jB.type,
            format: 5
          });
          NB.onEffectCreatedObservable.addOnce((zB => {
            zB.executeWhenCompiled((() => {
              NB.onApply = BB => {
                BB._bindTexture("textureSampler", jB), BB.setFloat2("scale", 1, 1)
              }, BB.aY()?.postProcessManager.directRender([NB], uB, !0), nB.restoreDefaultFramebuffer(), nB._releaseTexture(jB), NB && NB.dispose(), uB._swapAndDie(jB), jB.isReady = !0
            }))
          }))
        };
        NB && (IB ? uB() : BB.onLoadObservable.addOnce(uB))
      }
      static async EncodeTextureToRGBD(BB, jB) {
        let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return jB.wJ().isWebGPU ? await zB.e(348).then((() => zB(61553))) : await zB.e(330).then((() => zB(61551))), await (0, nB.e)("rgbdEncode", BB, jB, QB, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);