export const id = 300;
export const ids = [300];
export const modules = {
  41360: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      _BasisTextureLoader: () => ju
    });
    var Eu, Ku = yu(39655),
      Qu = yu(38448),
      mu = yu(40054),
      Ju = yu(39385);

    function Nu() {
      const uu = 0,
        Ru = 1,
        yu = 2,
        Eu = 3,
        Ku = 6,
        Qu = 8,
        mu = 9,
        Ju = 10,
        Nu = 14;
      let Xu = null;

      function Vu(uu, Ru, yu, Eu, Ku) {
        const Qu = uu.getImageTranscodedSizeInBytes(Ru, yu, Eu);
        let mu = new Uint8Array(Qu);
        if (!uu.transcodeImage(mu, Ru, yu, Eu, 1, 0)) return null;
        if (Ku) {
          mu = function(uu, Ru, yu, Eu) {
            const Ku = new Uint16Array(4),
              Qu = new Uint16Array(yu * Eu),
              mu = yu / 4,
              Ju = Eu / 4;
            for (let Nu = 0; Nu < Ju; Nu++)
              for (let Eu = 0; Eu < mu; Eu++) {
                const Ju = Ru + 8 * (Nu * mu + Eu);
                Ku[0] = uu[Ju] | uu[Ju + 1] << 8, Ku[1] = uu[Ju + 2] | uu[Ju + 3] << 8, Ku[2] = (2 * (31 & Ku[0]) + 1 * (31 & Ku[1])) / 3 | (2 * (2016 & Ku[0]) + 1 * (2016 & Ku[1])) / 3 & 2016 | (2 * (63488 & Ku[0]) + 1 * (63488 & Ku[1])) / 3 & 63488, Ku[3] = (2 * (31 & Ku[1]) + 1 * (31 & Ku[0])) / 3 | (2 * (2016 & Ku[1]) + 1 * (2016 & Ku[0])) / 3 & 2016 | (2 * (63488 & Ku[1]) + 1 * (63488 & Ku[0])) / 3 & 63488;
                for (let Ru = 0; Ru < 4; Ru++) {
                  const mu = uu[Ju + 4 + Ru];
                  let Xu = (4 * Nu + Ru) * yu + 4 * Eu;
                  Qu[Xu++] = Ku[3 & mu], Qu[Xu++] = Ku[mu >> 2 & 3], Qu[Xu++] = Ku[mu >> 4 & 3], Qu[Xu] = Ku[mu >> 6 & 3]
                }
              }
            return Qu
          }(mu, 0, uu.getImageWidth(Ru, yu) + 3 & -4, uu.getImageHeight(Ru, yu) + 3 & -4)
        }
        return mu
      }
      onmessage = ru => {
        if ("init" === ru.data.action) {
          if (ru.data.url) try {
            importScripts(ru.data.url)
          } catch (Bu) {
            postMessage({
              action: "error",
              error: Bu
            })
          }
          Xu || (Xu = BASIS({
            wasmBinary: ru.data.wasmBinary
          })), null !== Xu && Xu.then((uu => {
            BASIS = uu, uu.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === ru.data.action) {
          const Xu = ru.data.config,
            Bu = ru.data.imageData,
            xu = new BASIS.BasisFile(Bu),
            Su = function(uu) {
              const Ru = uu.getHasAlpha(),
                yu = uu.getNumImages(),
                Eu = [];
              for (let Ku = 0; Ku < yu; Ku++) {
                const Ru = {
                    levels: []
                  },
                  yu = uu.getNumLevels(Ku);
                for (let Eu = 0; Eu < yu; Eu++) {
                  const yu = {
                    width: uu.getImageWidth(Ku, Eu),
                    height: uu.getImageHeight(Ku, Eu)
                  };
                  Ru.levels.push(yu)
                }
                Eu.push(Ru)
              }
              return {
                hasAlpha: Ru,
                images: Eu
              }
            }(xu);
          let pu = ru.data.ignoreSupportedFormats ? null : function(Xu, Vu) {
              let ru = null;
              Xu.supportedCompressionFormats && (ru = Xu.supportedCompressionFormats.astc ? Ju : Xu.supportedCompressionFormats.bc7 ? Ku : Xu.supportedCompressionFormats.s3tc ? Vu.hasAlpha ? Eu : yu : Xu.supportedCompressionFormats.pvrtc ? Vu.hasAlpha ? mu : Qu : Xu.supportedCompressionFormats.etc2 ? Ru : Xu.supportedCompressionFormats.etc1 ? uu : Nu);
              return ru
            }(ru.data.config, Su),
            Tu = !1;
          null === pu && (Tu = !0, pu = Su.hasAlpha ? Eu : yu);
          let Wu = !0;
          xu.startTranscoding() || (Wu = !1);
          const ju = [];
          for (let uu = 0; uu < Su.images.length && Wu; uu++) {
            const Ru = Su.images[uu];
            if (void 0 === Xu.loadSingleImage || Xu.loadSingleImage === uu) {
              let yu = Ru.levels.length;
              !1 === Xu.loadMipmapLevels && (yu = 1);
              for (let Eu = 0; Eu < yu; Eu++) {
                const yu = Ru.levels[Eu],
                  Ku = Vu(xu, uu, Eu, pu, Tu);
                if (!Ku) {
                  Wu = !1;
                  break
                }
                yu.transcodedPixels = Ku, ju.push(yu.transcodedPixels.buffer)
              }
            }
          }
          xu.close(), xu.delete(), Tu && (pu = -1), Wu ? postMessage({
            action: "transcode",
            success: Wu,
            id: ru.data.id,
            fileInfo: Su,
            format: pu
          }, ju) : postMessage({
            action: "transcode",
            success: Wu,
            id: ru.data.id
          })
        }
      }
    }! function(uu) {
      uu[uu.cTFETC1 = 0] = "cTFETC1", uu[uu.cTFETC2 = 1] = "cTFETC2", uu[uu.cTFBC1 = 2] = "cTFBC1", uu[uu.cTFBC3 = 3] = "cTFBC3", uu[uu.cTFBC4 = 4] = "cTFBC4", uu[uu.cTFBC5 = 5] = "cTFBC5", uu[uu.cTFBC7 = 6] = "cTFBC7", uu[uu.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", uu[uu.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", uu[uu.cTFASTC_4x4 = 10] = "cTFASTC_4x4", uu[uu.cTFATC_RGB = 11] = "cTFATC_RGB", uu[uu.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", uu[uu.cTFRGBA32 = 13] = "cTFRGBA32", uu[uu.cTFRGB565 = 14] = "cTFRGB565", uu[uu.cTFBGR565 = 15] = "cTFBGR565", uu[uu.cTFRGBA4444 = 16] = "cTFRGBA4444", uu[uu.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", uu[uu.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", uu[uu.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", uu[uu.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", uu[uu.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Eu || (Eu = {}));
    const Xu = {
      JSModuleURL: `${Ku.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Ku.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Vu = null,
      ru = null,
      Bu = 0;
    const xu = async () => (Vu || (Vu = new Promise(((uu, Ru) => {
      ru ? uu(ru) : Ku.i.LoadFileAsync(Ku.i.GetBabylonScriptURL(Xu.WasmModuleURL)).then((yu => {
        if ("function" !== typeof URL) return Ru("Basis transcoder requires an environment with a URL constructor");
        const Eu = URL.createObjectURL(new Blob([`(${Nu})()`], {
          type: "application/javascript"
        }));
        ru = new Worker(Eu), async function(uu, Ru, yu) {
          return await new Promise(((Eu, Qu) => {
            const mu = Ru => {
              "init" === Ru.data.action ? (uu.removeEventListener("message", mu), Eu(uu)) : "error" === Ru.data.action && Qu(Ru.data.error || "error initializing worker")
            };
            uu.addEventListener("message", mu), uu.postMessage({
              action: "init",
              url: yu ? Ku.i.GetBabylonScriptURL(yu) : void 0,
              wasmBinary: Ru
            }, [Ru])
          }))
        }(ru, yu, Xu.JSModuleURL).then(uu, Ru)
      })).catch(Ru)
    }))), await Vu), Su = async (uu, Ru) => {
      const yu = uu instanceof ArrayBuffer ? new Uint8Array(uu) : uu;
      return await new Promise(((uu, Eu) => {
        xu().then((() => {
          const Ku = Bu++,
            Qu = Ru => {
              "transcode" === Ru.data.action && Ru.data.id === Ku && (ru.removeEventListener("message", Qu), Ru.data.success ? uu(Ru.data) : Eu("Transcode is not supported on this device"))
            };
          ru.addEventListener("message", Qu);
          const mu = new Uint8Array(yu.byteLength);
          mu.set(new Uint8Array(yu.buffer, yu.byteOffset, yu.byteLength)), ru.postMessage({
            action: "transcode",
            id: Ku,
            imageData: mu,
            config: Ru,
            ignoreSupportedFormats: false
          }, [mu.buffer])
        }), (uu => {
          Eu(uu)
        }))
      }))
    }, pu = (uu, Ru) => {
      let yu = Ru._gl?.TEXTURE_2D;
      uu.isCube && (yu = Ru._gl?.TEXTURE_CUBE_MAP), Ru._bindTextureDirectly(yu, uu, !0)
    }, Tu = (uu, Ru) => {
      const yu = uu.eS();
      for (let Ku = 0; Ku < Ru.fileInfo.images.length; Ku++) {
        const Nu = Ru.fileInfo.images[Ku].levels[0];
        if (uu._invertVScale = uu.invertY, -1 === Ru.format || Ru.format === Eu.cTFRGB565)
          if (uu.type = 10, uu.format = 4, !yu._features.basisNeedsPOT || Math.log2(Nu.width) % 1 === 0 && Math.log2(Nu.height) % 1 === 0) uu._invertVScale = !uu.invertY, uu.width = Nu.width + 3 & -4, uu.height = Nu.height + 3 & -4, uu.samplingMode = 2, pu(uu, yu), yu._uploadDataToTextureDirectly(uu, new Uint16Array(Nu.transcodedPixels.buffer), Ku, 0, 4, !0);
          else {
            const Ru = new Ju.c(yu, 2);
            uu._invertVScale = uu.invertY, Ru.type = 10, Ru.format = 4, Ru.width = Nu.width + 3 & -4, Ru.height = Nu.height + 3 & -4, pu(Ru, yu), yu._uploadDataToTextureDirectly(Ru, new Uint16Array(Nu.transcodedPixels.buffer), Ku, 0, 4, !0), yu._rescaleTexture(Ru, uu, yu.scenes[0], yu._getInternalFormat(4), (() => {
              yu._releaseTexture(Ru), pu(uu, yu)
            }))
          }
        else {
          uu.width = Nu.width, uu.height = Nu.height, uu.generateMipMaps = Ru.fileInfo.images[Ku].levels.length > 1;
          const Eu = Wu.GetInternalFormatFromBasisFormat(Ru.format, yu);
          uu.format = Eu, pu(uu, yu);
          const Ju = Ru.fileInfo.images[Ku].levels;
          for (let Ru = 0; Ru < Ju.length; Ru++) {
            const Qu = Ju[Ru];
            yu._uploadCompressedDataToTextureDirectly(uu, Eu, Qu.width, Qu.height, Qu.transcodedPixels, Ku, Ru)
          }!yu._features.basisNeedsPOT || Math.log2(uu.width) % 1 === 0 && Math.log2(uu.height) % 1 === 0 || (Qu.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), uu._cachedWrapU = mu.h.CLAMP_ADDRESSMODE, uu._cachedWrapV = mu.h.CLAMP_ADDRESSMODE)
        }
      }
    }, Wu = {
      JSModuleURL: Xu.JSModuleURL,
      WasmModuleURL: Xu.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (uu, Ru) => {
        let yu;
        switch (uu) {
          case Eu.cTFETC1:
            yu = 36196;
            break;
          case Eu.cTFBC1:
            yu = 33776;
            break;
          case Eu.cTFBC4:
            yu = 33779;
            break;
          case Eu.cTFASTC_4x4:
            yu = 37808;
            break;
          case Eu.cTFETC2:
            yu = 37496;
            break;
          case Eu.cTFBC7:
            yu = 36492
        }
        if (void 0 === yu) throw "The chosen Basis transcoder format is not currently supported";
        return yu
      },
      TranscodeAsync: Su,
      LoadTextureFromTranscodeResult: Tu
    };
    class ju {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(uu, Ru, yu, Eu, Qu) {
        if (Array.isArray(uu)) return;
        const mu = Ru.eS().getCaps(),
          Ju = {
            supportedCompressionFormats: {
              etc1: !!mu.etc1,
              s3tc: !!mu.s3tc,
              pvrtc: !!mu.pvrtc,
              etc2: !!mu.etc2,
              astc: !!mu.astc,
              bc7: !!mu.bptc
            }
          };
        Su(uu, Ju).then((uu => {
          const yu = uu.fileInfo.images[0].levels.length > 1 && Ru.generateMipMaps;
          Tu(Ru, uu), Ru.eS()._setCubeMapTextureParams(Ru, yu), Ru.isReady = !0, Ru.onLoadedObservable.notifyObservers(Ru), Ru.onLoadedObservable.clear(), Eu && Eu()
        })).catch((uu => {
          Ku.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Ru.isReady = !0, Qu && Qu(uu)
        }))
      }
      loadData(uu, Ru, yu) {
        const Eu = Ru.eS().getCaps(),
          Qu = {
            supportedCompressionFormats: {
              etc1: !!Eu.etc1,
              s3tc: !!Eu.s3tc,
              pvrtc: !!Eu.pvrtc,
              etc2: !!Eu.etc2,
              astc: !!Eu.astc,
              bc7: !!Eu.bptc
            }
          };
        Su(uu, Qu).then((uu => {
          const Eu = uu.fileInfo.images[0].levels[0],
            Ku = uu.fileInfo.images[0].levels.length > 1 && Ru.generateMipMaps;
          yu(Eu.width, Eu.height, Ku, -1 !== uu.format, (() => {
            Tu(Ru, uu)
          }))
        })).catch((uu => {
          Ku.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Ku.i.Warn(`Failed to transcode Basis file: ${uu}`), yu(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);