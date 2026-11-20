export const id = 300;
export const ids = [300];
export const modules = {
  41134: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      _BasisTextureLoader: () => WU
    });
    var tU, pU = gU(39473),
      EU = gU(38236),
      PU = gU(39855),
      TU = gU(39203);

    function qU() {
      const UU = 0,
        RU = 1,
        gU = 2,
        tU = 3,
        pU = 6,
        EU = 8,
        PU = 9,
        TU = 10,
        qU = 14;
      let KU = null;

      function cU(UU, RU, gU, tU, pU) {
        const EU = UU.getImageTranscodedSizeInBytes(RU, gU, tU);
        let PU = new Uint8Array(EU);
        if (!UU.transcodeImage(PU, RU, gU, tU, 1, 0)) return null;
        if (pU) {
          PU = function(UU, RU, gU, tU) {
            const pU = new Uint16Array(4),
              EU = new Uint16Array(gU * tU),
              PU = gU / 4,
              TU = tU / 4;
            for (let qU = 0; qU < TU; qU++)
              for (let tU = 0; tU < PU; tU++) {
                const TU = RU + 8 * (qU * PU + tU);
                pU[0] = UU[TU] | UU[TU + 1] << 8, pU[1] = UU[TU + 2] | UU[TU + 3] << 8, pU[2] = (2 * (31 & pU[0]) + 1 * (31 & pU[1])) / 3 | (2 * (2016 & pU[0]) + 1 * (2016 & pU[1])) / 3 & 2016 | (2 * (63488 & pU[0]) + 1 * (63488 & pU[1])) / 3 & 63488, pU[3] = (2 * (31 & pU[1]) + 1 * (31 & pU[0])) / 3 | (2 * (2016 & pU[1]) + 1 * (2016 & pU[0])) / 3 & 2016 | (2 * (63488 & pU[1]) + 1 * (63488 & pU[0])) / 3 & 63488;
                for (let RU = 0; RU < 4; RU++) {
                  const PU = UU[TU + 4 + RU];
                  let KU = (4 * qU + RU) * gU + 4 * tU;
                  EU[KU++] = pU[3 & PU], EU[KU++] = pU[PU >> 2 & 3], EU[KU++] = pU[PU >> 4 & 3], EU[KU] = pU[PU >> 6 & 3]
                }
              }
            return EU
          }(PU, 0, UU.getImageWidth(RU, gU) + 3 & -4, UU.getImageHeight(RU, gU) + 3 & -4)
        }
        return PU
      }
      onmessage = GU => {
        if ("init" === GU.data.action) {
          if (GU.data.url) try {
            importScripts(GU.data.url)
          } catch (jU) {
            postMessage({
              action: "error",
              error: jU
            })
          }
          KU || (KU = BASIS({
            wasmBinary: GU.data.wasmBinary
          })), null !== KU && KU.then((UU => {
            BASIS = UU, UU.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === GU.data.action) {
          const KU = GU.data.config,
            jU = GU.data.imageData,
            uU = new BASIS.BasisFile(jU),
            CU = function(UU) {
              const RU = UU.getHasAlpha(),
                gU = UU.getNumImages(),
                tU = [];
              for (let pU = 0; pU < gU; pU++) {
                const RU = {
                    levels: []
                  },
                  gU = UU.getNumLevels(pU);
                for (let tU = 0; tU < gU; tU++) {
                  const gU = {
                    width: UU.getImageWidth(pU, tU),
                    height: UU.getImageHeight(pU, tU)
                  };
                  RU.levels.push(gU)
                }
                tU.push(RU)
              }
              return {
                hasAlpha: RU,
                images: tU
              }
            }(uU);
          let hU = GU.data.ignoreSupportedFormats ? null : function(KU, cU) {
              let GU = null;
              KU.supportedCompressionFormats && (GU = KU.supportedCompressionFormats.astc ? TU : KU.supportedCompressionFormats.bc7 ? pU : KU.supportedCompressionFormats.s3tc ? cU.hasAlpha ? tU : gU : KU.supportedCompressionFormats.pvrtc ? cU.hasAlpha ? PU : EU : KU.supportedCompressionFormats.etc2 ? RU : KU.supportedCompressionFormats.etc1 ? UU : qU);
              return GU
            }(GU.data.config, CU),
            QU = !1;
          null === hU && (QU = !0, hU = CU.hasAlpha ? tU : gU);
          let eU = !0;
          uU.startTranscoding() || (eU = !1);
          const WU = [];
          for (let UU = 0; UU < CU.images.length && eU; UU++) {
            const RU = CU.images[UU];
            if (void 0 === KU.loadSingleImage || KU.loadSingleImage === UU) {
              let gU = RU.levels.length;
              !1 === KU.loadMipmapLevels && (gU = 1);
              for (let tU = 0; tU < gU; tU++) {
                const gU = RU.levels[tU],
                  pU = cU(uU, UU, tU, hU, QU);
                if (!pU) {
                  eU = !1;
                  break
                }
                gU.transcodedPixels = pU, WU.push(gU.transcodedPixels.buffer)
              }
            }
          }
          uU.close(), uU.delete(), QU && (hU = -1), eU ? postMessage({
            action: "transcode",
            success: eU,
            id: GU.data.id,
            fileInfo: CU,
            format: hU
          }, WU) : postMessage({
            action: "transcode",
            success: eU,
            id: GU.data.id
          })
        }
      }
    }! function(UU) {
      UU[UU.cTFETC1 = 0] = "cTFETC1", UU[UU.cTFETC2 = 1] = "cTFETC2", UU[UU.cTFBC1 = 2] = "cTFBC1", UU[UU.cTFBC3 = 3] = "cTFBC3", UU[UU.cTFBC4 = 4] = "cTFBC4", UU[UU.cTFBC5 = 5] = "cTFBC5", UU[UU.cTFBC7 = 6] = "cTFBC7", UU[UU.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", UU[UU.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", UU[UU.cTFASTC_4x4 = 10] = "cTFASTC_4x4", UU[UU.cTFATC_RGB = 11] = "cTFATC_RGB", UU[UU.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", UU[UU.cTFRGBA32 = 13] = "cTFRGBA32", UU[UU.cTFRGB565 = 14] = "cTFRGB565", UU[UU.cTFBGR565 = 15] = "cTFBGR565", UU[UU.cTFRGBA4444 = 16] = "cTFRGBA4444", UU[UU.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", UU[UU.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", UU[UU.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", UU[UU.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", UU[UU.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(tU || (tU = {}));
    const KU = {
      JSModuleURL: `${pU.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${pU.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let cU = null,
      GU = null,
      jU = 0;
    const uU = async () => (cU || (cU = new Promise(((UU, RU) => {
      GU ? UU(GU) : pU.g.LoadFileAsync(pU.g.GetBabylonScriptURL(KU.WasmModuleURL)).then((gU => {
        if ("function" !== typeof URL) return RU("Basis transcoder requires an environment with a URL constructor");
        const tU = URL.createObjectURL(new Blob([`(${qU})()`], {
          type: "application/javascript"
        }));
        GU = new Worker(tU), async function(UU, RU, gU) {
          return await new Promise(((tU, EU) => {
            const PU = RU => {
              "init" === RU.data.action ? (UU.removeEventListener("message", PU), tU(UU)) : "error" === RU.data.action && EU(RU.data.error || "error initializing worker")
            };
            UU.addEventListener("message", PU), UU.postMessage({
              action: "init",
              url: gU ? pU.g.GetBabylonScriptURL(gU) : void 0,
              wasmBinary: RU
            }, [RU])
          }))
        }(GU, gU, KU.JSModuleURL).then(UU, RU)
      })).catch(RU)
    }))), await cU), CU = async (UU, RU) => {
      const gU = UU instanceof ArrayBuffer ? new Uint8Array(UU) : UU;
      return await new Promise(((UU, tU) => {
        uU().then((() => {
          const pU = jU++,
            EU = RU => {
              "transcode" === RU.data.action && RU.data.id === pU && (GU.removeEventListener("message", EU), RU.data.success ? UU(RU.data) : tU("Transcode is not supported on this device"))
            };
          GU.addEventListener("message", EU);
          const PU = new Uint8Array(gU.byteLength);
          PU.set(new Uint8Array(gU.buffer, gU.byteOffset, gU.byteLength)), GU.postMessage({
            action: "transcode",
            id: pU,
            imageData: PU,
            config: RU,
            ignoreSupportedFormats: false
          }, [PU.buffer])
        }), (UU => {
          tU(UU)
        }))
      }))
    }, hU = (UU, RU) => {
      let gU = RU._gl?.TEXTURE_2D;
      UU.isCube && (gU = RU._gl?.TEXTURE_CUBE_MAP), RU._bindTextureDirectly(gU, UU, !0)
    }, QU = (UU, RU) => {
      const gU = UU.WC();
      for (let pU = 0; pU < RU.fileInfo.images.length; pU++) {
        const qU = RU.fileInfo.images[pU].levels[0];
        if (UU._invertVScale = UU.invertY, -1 === RU.format || RU.format === tU.cTFRGB565)
          if (UU.type = 10, UU.format = 4, !gU._features.basisNeedsPOT || Math.log2(qU.width) % 1 === 0 && Math.log2(qU.height) % 1 === 0) UU._invertVScale = !UU.invertY, UU.width = qU.width + 3 & -4, UU.height = qU.height + 3 & -4, UU.samplingMode = 2, hU(UU, gU), gU._uploadDataToTextureDirectly(UU, new Uint16Array(qU.transcodedPixels.buffer), pU, 0, 4, !0);
          else {
            const RU = new TU.d(gU, 2);
            UU._invertVScale = UU.invertY, RU.type = 10, RU.format = 4, RU.width = qU.width + 3 & -4, RU.height = qU.height + 3 & -4, hU(RU, gU), gU._uploadDataToTextureDirectly(RU, new Uint16Array(qU.transcodedPixels.buffer), pU, 0, 4, !0), gU._rescaleTexture(RU, UU, gU.scenes[0], gU._getInternalFormat(4), (() => {
              gU._releaseTexture(RU), hU(UU, gU)
            }))
          }
        else {
          UU.width = qU.width, UU.height = qU.height, UU.generateMipMaps = RU.fileInfo.images[pU].levels.length > 1;
          const tU = eU.GetInternalFormatFromBasisFormat(RU.format, gU);
          UU.format = tU, hU(UU, gU);
          const TU = RU.fileInfo.images[pU].levels;
          for (let RU = 0; RU < TU.length; RU++) {
            const EU = TU[RU];
            gU._uploadCompressedDataToTextureDirectly(UU, tU, EU.width, EU.height, EU.transcodedPixels, pU, RU)
          }!gU._features.basisNeedsPOT || Math.log2(UU.width) % 1 === 0 && Math.log2(UU.height) % 1 === 0 || (EU.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), UU._cachedWrapU = PU.e.CLAMP_ADDRESSMODE, UU._cachedWrapV = PU.e.CLAMP_ADDRESSMODE)
        }
      }
    }, eU = {
      JSModuleURL: KU.JSModuleURL,
      WasmModuleURL: KU.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (UU, RU) => {
        let gU;
        switch (UU) {
          case tU.cTFETC1:
            gU = 36196;
            break;
          case tU.cTFBC1:
            gU = 33776;
            break;
          case tU.cTFBC4:
            gU = 33779;
            break;
          case tU.cTFASTC_4x4:
            gU = 37808;
            break;
          case tU.cTFETC2:
            gU = 37496;
            break;
          case tU.cTFBC7:
            gU = 36492
        }
        if (void 0 === gU) throw "The chosen Basis transcoder format is not currently supported";
        return gU
      },
      TranscodeAsync: CU,
      LoadTextureFromTranscodeResult: QU
    };
    class WU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(UU, RU, gU, tU, EU) {
        if (Array.isArray(UU)) return;
        const PU = RU.WC().getCaps(),
          TU = {
            supportedCompressionFormats: {
              etc1: !!PU.etc1,
              s3tc: !!PU.s3tc,
              pvrtc: !!PU.pvrtc,
              etc2: !!PU.etc2,
              astc: !!PU.astc,
              bc7: !!PU.bptc
            }
          };
        CU(UU, TU).then((UU => {
          const gU = UU.fileInfo.images[0].levels.length > 1 && RU.generateMipMaps;
          QU(RU, UU), RU.WC()._setCubeMapTextureParams(RU, gU), RU.isReady = !0, RU.onLoadedObservable.notifyObservers(RU), RU.onLoadedObservable.clear(), tU && tU()
        })).catch((UU => {
          pU.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), RU.isReady = !0, EU && EU(UU)
        }))
      }
      loadData(UU, RU, gU) {
        const tU = RU.WC().getCaps(),
          EU = {
            supportedCompressionFormats: {
              etc1: !!tU.etc1,
              s3tc: !!tU.s3tc,
              pvrtc: !!tU.pvrtc,
              etc2: !!tU.etc2,
              astc: !!tU.astc,
              bc7: !!tU.bptc
            }
          };
        CU(UU, EU).then((UU => {
          const tU = UU.fileInfo.images[0].levels[0],
            pU = UU.fileInfo.images[0].levels.length > 1 && RU.generateMipMaps;
          gU(tU.width, tU.height, pU, -1 !== UU.format, (() => {
            QU(RU, UU)
          }))
        })).catch((UU => {
          pU.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), pU.g.Warn(`Failed to transcode Basis file: ${UU}`), gU(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);