export const id = 315;
export const ids = [315];
export const modules = {
  42062: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      _BasisTextureLoader: () => gu
    });
    var su, Uu = ju(40356),
      Zu = ju(39032),
      Xu = ju(40739),
      lu = ju(40108);

    function qu() {
      const uu = 0,
        Eu = 1,
        ju = 2,
        su = 3,
        Uu = 6,
        Zu = 8,
        Xu = 9,
        lu = 10,
        qu = 14;
      let fu = null;

      function Cu(uu, Eu, ju, su, Uu) {
        const Zu = uu.getImageTranscodedSizeInBytes(Eu, ju, su);
        let Xu = new Uint8Array(Zu);
        if (!uu.transcodeImage(Xu, Eu, ju, su, 1, 0)) return null;
        if (Uu) {
          Xu = function(uu, Eu, ju, su) {
            const Uu = new Uint16Array(4),
              Zu = new Uint16Array(ju * su),
              Xu = ju / 4,
              lu = su / 4;
            for (let qu = 0; qu < lu; qu++)
              for (let su = 0; su < Xu; su++) {
                const lu = Eu + 8 * (qu * Xu + su);
                Uu[0] = uu[lu] | uu[lu + 1] << 8, Uu[1] = uu[lu + 2] | uu[lu + 3] << 8, Uu[2] = (2 * (31 & Uu[0]) + 1 * (31 & Uu[1])) / 3 | (2 * (2016 & Uu[0]) + 1 * (2016 & Uu[1])) / 3 & 2016 | (2 * (63488 & Uu[0]) + 1 * (63488 & Uu[1])) / 3 & 63488, Uu[3] = (2 * (31 & Uu[1]) + 1 * (31 & Uu[0])) / 3 | (2 * (2016 & Uu[1]) + 1 * (2016 & Uu[0])) / 3 & 2016 | (2 * (63488 & Uu[1]) + 1 * (63488 & Uu[0])) / 3 & 63488;
                for (let Eu = 0; Eu < 4; Eu++) {
                  const Xu = uu[lu + 4 + Eu];
                  let fu = (4 * qu + Eu) * ju + 4 * su;
                  Zu[fu++] = Uu[3 & Xu], Zu[fu++] = Uu[Xu >> 2 & 3], Zu[fu++] = Uu[Xu >> 4 & 3], Zu[fu] = Uu[Xu >> 6 & 3]
                }
              }
            return Zu
          }(Xu, 0, uu.getImageWidth(Eu, ju) + 3 & -4, uu.getImageHeight(Eu, ju) + 3 & -4)
        }
        return Xu
      }
      onmessage = bu => {
        if ("init" === bu.data.action) {
          if (bu.data.url) try {
            importScripts(bu.data.url)
          } catch (cu) {
            postMessage({
              action: "error",
              error: cu
            })
          }
          fu || (fu = BASIS({
            wasmBinary: bu.data.wasmBinary
          })), null !== fu && fu.then((uu => {
            BASIS = uu, uu.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === bu.data.action) {
          const fu = bu.data.config,
            cu = bu.data.imageData,
            Nu = new BASIS.BasisFile(cu),
            Ou = function(uu) {
              const Eu = uu.getHasAlpha(),
                ju = uu.getNumImages(),
                su = [];
              for (let Uu = 0; Uu < ju; Uu++) {
                const Eu = {
                    levels: []
                  },
                  ju = uu.getNumLevels(Uu);
                for (let su = 0; su < ju; su++) {
                  const ju = {
                    width: uu.getImageWidth(Uu, su),
                    height: uu.getImageHeight(Uu, su)
                  };
                  Eu.levels.push(ju)
                }
                su.push(Eu)
              }
              return {
                hasAlpha: Eu,
                images: su
              }
            }(Nu);
          let Yu = bu.data.ignoreSupportedFormats ? null : function(fu, Cu) {
              let bu = null;
              fu.supportedCompressionFormats && (bu = fu.supportedCompressionFormats.astc ? lu : fu.supportedCompressionFormats.bc7 ? Uu : fu.supportedCompressionFormats.s3tc ? Cu.hasAlpha ? su : ju : fu.supportedCompressionFormats.pvrtc ? Cu.hasAlpha ? Xu : Zu : fu.supportedCompressionFormats.etc2 ? Eu : fu.supportedCompressionFormats.etc1 ? uu : qu);
              return bu
            }(bu.data.config, Ou),
            hu = !1;
          null === Yu && (hu = !0, Yu = Ou.hasAlpha ? su : ju);
          let Du = !0;
          Nu.startTranscoding() || (Du = !1);
          const gu = [];
          for (let uu = 0; uu < Ou.images.length && Du; uu++) {
            const Eu = Ou.images[uu];
            if (void 0 === fu.loadSingleImage || fu.loadSingleImage === uu) {
              let ju = Eu.levels.length;
              !1 === fu.loadMipmapLevels && (ju = 1);
              for (let su = 0; su < ju; su++) {
                const ju = Eu.levels[su],
                  Uu = Cu(Nu, uu, su, Yu, hu);
                if (!Uu) {
                  Du = !1;
                  break
                }
                ju.transcodedPixels = Uu, gu.push(ju.transcodedPixels.buffer)
              }
            }
          }
          Nu.close(), Nu.delete(), hu && (Yu = -1), Du ? postMessage({
            action: "transcode",
            success: Du,
            id: bu.data.id,
            fileInfo: Ou,
            format: Yu
          }, gu) : postMessage({
            action: "transcode",
            success: Du,
            id: bu.data.id
          })
        }
      }
    }! function(uu) {
      uu[uu.cTFETC1 = 0] = "cTFETC1", uu[uu.cTFETC2 = 1] = "cTFETC2", uu[uu.cTFBC1 = 2] = "cTFBC1", uu[uu.cTFBC3 = 3] = "cTFBC3", uu[uu.cTFBC4 = 4] = "cTFBC4", uu[uu.cTFBC5 = 5] = "cTFBC5", uu[uu.cTFBC7 = 6] = "cTFBC7", uu[uu.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", uu[uu.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", uu[uu.cTFASTC_4x4 = 10] = "cTFASTC_4x4", uu[uu.cTFATC_RGB = 11] = "cTFATC_RGB", uu[uu.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", uu[uu.cTFRGBA32 = 13] = "cTFRGBA32", uu[uu.cTFRGB565 = 14] = "cTFRGB565", uu[uu.cTFBGR565 = 15] = "cTFBGR565", uu[uu.cTFRGBA4444 = 16] = "cTFRGBA4444", uu[uu.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", uu[uu.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", uu[uu.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", uu[uu.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", uu[uu.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(su || (su = {}));
    const fu = {
      JSModuleURL: `${Uu.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Uu.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Cu = null,
      bu = null,
      cu = 0;
    const Nu = async () => (Cu || (Cu = new Promise(((uu, Eu) => {
      bu ? uu(bu) : Uu.h.LoadFileAsync(Uu.h.GetBabylonScriptURL(fu.WasmModuleURL)).then((ju => {
        if ("function" !== typeof URL) return Eu("Basis transcoder requires an environment with a URL constructor");
        const su = URL.createObjectURL(new Blob([`(${qu})()`], {
          type: "application/javascript"
        }));
        bu = new Worker(su), async function(uu, Eu, ju) {
          return await new Promise(((su, Zu) => {
            const Xu = Eu => {
              "init" === Eu.data.action ? (uu.removeEventListener("message", Xu), su(uu)) : "error" === Eu.data.action && Zu(Eu.data.error || "error initializing worker")
            };
            uu.addEventListener("message", Xu), uu.postMessage({
              action: "init",
              url: ju ? Uu.h.GetBabylonScriptURL(ju) : void 0,
              wasmBinary: Eu
            }, [Eu])
          }))
        }(bu, ju, fu.JSModuleURL).then(uu, Eu)
      })).catch(Eu)
    }))), await Cu), Ou = async (uu, Eu) => {
      const ju = uu instanceof ArrayBuffer ? new Uint8Array(uu) : uu;
      return await new Promise(((uu, su) => {
        Nu().then((() => {
          const Uu = cu++,
            Zu = Eu => {
              "transcode" === Eu.data.action && Eu.data.id === Uu && (bu.removeEventListener("message", Zu), Eu.data.success ? uu(Eu.data) : su("Transcode is not supported on this device"))
            };
          bu.addEventListener("message", Zu);
          const Xu = new Uint8Array(ju.byteLength);
          Xu.set(new Uint8Array(ju.buffer, ju.byteOffset, ju.byteLength)), bu.postMessage({
            action: "transcode",
            id: Uu,
            imageData: Xu,
            config: Eu,
            ignoreSupportedFormats: false
          }, [Xu.buffer])
        }), (uu => {
          su(uu)
        }))
      }))
    }, Yu = (uu, Eu) => {
      let ju = Eu._gl?.TEXTURE_2D;
      uu.isCube && (ju = Eu._gl?.TEXTURE_CUBE_MAP), Eu._bindTextureDirectly(ju, uu, !0)
    }, hu = (uu, Eu) => {
      const ju = uu.wO();
      for (let Uu = 0; Uu < Eu.fileInfo.images.length; Uu++) {
        const qu = Eu.fileInfo.images[Uu].levels[0];
        if (uu._invertVScale = uu.invertY, -1 === Eu.format || Eu.format === su.cTFRGB565)
          if (uu.type = 10, uu.format = 4, !ju._features.basisNeedsPOT || Math.log2(qu.width) % 1 === 0 && Math.log2(qu.height) % 1 === 0) uu._invertVScale = !uu.invertY, uu.width = qu.width + 3 & -4, uu.height = qu.height + 3 & -4, uu.samplingMode = 2, Yu(uu, ju), ju._uploadDataToTextureDirectly(uu, new Uint16Array(qu.transcodedPixels.buffer), Uu, 0, 4, !0);
          else {
            const Eu = new lu.c(ju, 2);
            uu._invertVScale = uu.invertY, Eu.type = 10, Eu.format = 4, Eu.width = qu.width + 3 & -4, Eu.height = qu.height + 3 & -4, Yu(Eu, ju), ju._uploadDataToTextureDirectly(Eu, new Uint16Array(qu.transcodedPixels.buffer), Uu, 0, 4, !0), ju._rescaleTexture(Eu, uu, ju.scenes[0], ju._getInternalFormat(4), (() => {
              ju._releaseTexture(Eu), Yu(uu, ju)
            }))
          }
        else {
          uu.width = qu.width, uu.height = qu.height, uu.generateMipMaps = Eu.fileInfo.images[Uu].levels.length > 1;
          const su = Du.GetInternalFormatFromBasisFormat(Eu.format, ju);
          uu.format = su, Yu(uu, ju);
          const lu = Eu.fileInfo.images[Uu].levels;
          for (let Eu = 0; Eu < lu.length; Eu++) {
            const Zu = lu[Eu];
            ju._uploadCompressedDataToTextureDirectly(uu, su, Zu.width, Zu.height, Zu.transcodedPixels, Uu, Eu)
          }!ju._features.basisNeedsPOT || Math.log2(uu.width) % 1 === 0 && Math.log2(uu.height) % 1 === 0 || (Zu.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), uu._cachedWrapU = Xu.g.CLAMP_ADDRESSMODE, uu._cachedWrapV = Xu.g.CLAMP_ADDRESSMODE)
        }
      }
    }, Du = {
      JSModuleURL: fu.JSModuleURL,
      WasmModuleURL: fu.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (uu, Eu) => {
        let ju;
        switch (uu) {
          case su.cTFETC1:
            ju = 36196;
            break;
          case su.cTFBC1:
            ju = 33776;
            break;
          case su.cTFBC4:
            ju = 33779;
            break;
          case su.cTFASTC_4x4:
            ju = 37808;
            break;
          case su.cTFETC2:
            ju = 37496;
            break;
          case su.cTFBC7:
            ju = 36492
        }
        if (void 0 === ju) throw "The chosen Basis transcoder format is not currently supported";
        return ju
      },
      TranscodeAsync: Ou,
      LoadTextureFromTranscodeResult: hu
    };
    class gu {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(uu, Eu, ju, su, Zu) {
        if (Array.isArray(uu)) return;
        const Xu = Eu.wO().getCaps(),
          lu = {
            supportedCompressionFormats: {
              etc1: !!Xu.etc1,
              s3tc: !!Xu.s3tc,
              pvrtc: !!Xu.pvrtc,
              etc2: !!Xu.etc2,
              astc: !!Xu.astc,
              bc7: !!Xu.bptc
            }
          };
        Ou(uu, lu).then((uu => {
          const ju = uu.fileInfo.images[0].levels.length > 1 && Eu.generateMipMaps;
          hu(Eu, uu), Eu.wO()._setCubeMapTextureParams(Eu, ju), Eu.isReady = !0, Eu.onLoadedObservable.notifyObservers(Eu), Eu.onLoadedObservable.clear(), su && su()
        })).catch((uu => {
          Uu.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Eu.isReady = !0, Zu && Zu(uu)
        }))
      }
      loadData(uu, Eu, ju) {
        const su = Eu.wO().getCaps(),
          Zu = {
            supportedCompressionFormats: {
              etc1: !!su.etc1,
              s3tc: !!su.s3tc,
              pvrtc: !!su.pvrtc,
              etc2: !!su.etc2,
              astc: !!su.astc,
              bc7: !!su.bptc
            }
          };
        Ou(uu, Zu).then((uu => {
          const su = uu.fileInfo.images[0].levels[0],
            Uu = uu.fileInfo.images[0].levels.length > 1 && Eu.generateMipMaps;
          ju(su.width, su.height, Uu, -1 !== uu.format, (() => {
            hu(Eu, uu)
          }))
        })).catch((uu => {
          Uu.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Uu.h.Warn(`Failed to transcode Basis file: ${uu}`), ju(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);