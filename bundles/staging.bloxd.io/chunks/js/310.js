export const id = 310;
export const ids = [310];
export const modules = {
  41697: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      _BasisTextureLoader: () => nD
    });
    var pD, sD = wD(40027),
      KD = wD(38662),
      rD = wD(40400),
      LD = wD(39761);

    function cD() {
      const DD = 0,
        zD = 1,
        wD = 2,
        pD = 3,
        sD = 6,
        KD = 8,
        rD = 9,
        LD = 10,
        cD = 14;
      let gD = null;

      function RD(DD, zD, wD, pD, sD) {
        const KD = DD.getImageTranscodedSizeInBytes(zD, wD, pD);
        let rD = new Uint8Array(KD);
        if (!DD.transcodeImage(rD, zD, wD, pD, 1, 0)) return null;
        if (sD) {
          rD = function(DD, zD, wD, pD) {
            const sD = new Uint16Array(4),
              KD = new Uint16Array(wD * pD),
              rD = wD / 4,
              LD = pD / 4;
            for (let cD = 0; cD < LD; cD++)
              for (let pD = 0; pD < rD; pD++) {
                const LD = zD + 8 * (cD * rD + pD);
                sD[0] = DD[LD] | DD[LD + 1] << 8, sD[1] = DD[LD + 2] | DD[LD + 3] << 8, sD[2] = (2 * (31 & sD[0]) + 1 * (31 & sD[1])) / 3 | (2 * (2016 & sD[0]) + 1 * (2016 & sD[1])) / 3 & 2016 | (2 * (63488 & sD[0]) + 1 * (63488 & sD[1])) / 3 & 63488, sD[3] = (2 * (31 & sD[1]) + 1 * (31 & sD[0])) / 3 | (2 * (2016 & sD[1]) + 1 * (2016 & sD[0])) / 3 & 2016 | (2 * (63488 & sD[1]) + 1 * (63488 & sD[0])) / 3 & 63488;
                for (let zD = 0; zD < 4; zD++) {
                  const rD = DD[LD + 4 + zD];
                  let gD = (4 * cD + zD) * wD + 4 * pD;
                  KD[gD++] = sD[3 & rD], KD[gD++] = sD[rD >> 2 & 3], KD[gD++] = sD[rD >> 4 & 3], KD[gD] = sD[rD >> 6 & 3]
                }
              }
            return KD
          }(rD, 0, DD.getImageWidth(zD, wD) + 3 & -4, DD.getImageHeight(zD, wD) + 3 & -4)
        }
        return rD
      }
      onmessage = AD => {
        if ("init" === AD.data.action) {
          if (AD.data.url) try {
            importScripts(AD.data.url)
          } catch (UD) {
            postMessage({
              action: "error",
              error: UD
            })
          }
          gD || (gD = BASIS({
            wasmBinary: AD.data.wasmBinary
          })), null !== gD && gD.then((DD => {
            BASIS = DD, DD.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === AD.data.action) {
          const gD = AD.data.config,
            UD = AD.data.imageData,
            fD = new BASIS.BasisFile(UD),
            ID = function(DD) {
              const zD = DD.getHasAlpha(),
                wD = DD.getNumImages(),
                pD = [];
              for (let sD = 0; sD < wD; sD++) {
                const zD = {
                    levels: []
                  },
                  wD = DD.getNumLevels(sD);
                for (let pD = 0; pD < wD; pD++) {
                  const wD = {
                    width: DD.getImageWidth(sD, pD),
                    height: DD.getImageHeight(sD, pD)
                  };
                  zD.levels.push(wD)
                }
                pD.push(zD)
              }
              return {
                hasAlpha: zD,
                images: pD
              }
            }(fD);
          let BD = AD.data.ignoreSupportedFormats ? null : function(gD, RD) {
              let AD = null;
              gD.supportedCompressionFormats && (AD = gD.supportedCompressionFormats.astc ? LD : gD.supportedCompressionFormats.bc7 ? sD : gD.supportedCompressionFormats.s3tc ? RD.hasAlpha ? pD : wD : gD.supportedCompressionFormats.pvrtc ? RD.hasAlpha ? rD : KD : gD.supportedCompressionFormats.etc2 ? zD : gD.supportedCompressionFormats.etc1 ? DD : cD);
              return AD
            }(AD.data.config, ID),
            GD = !1;
          null === BD && (GD = !0, BD = ID.hasAlpha ? pD : wD);
          let hD = !0;
          fD.startTranscoding() || (hD = !1);
          const nD = [];
          for (let DD = 0; DD < ID.images.length && hD; DD++) {
            const zD = ID.images[DD];
            if (void 0 === gD.loadSingleImage || gD.loadSingleImage === DD) {
              let wD = zD.levels.length;
              !1 === gD.loadMipmapLevels && (wD = 1);
              for (let pD = 0; pD < wD; pD++) {
                const wD = zD.levels[pD],
                  sD = RD(fD, DD, pD, BD, GD);
                if (!sD) {
                  hD = !1;
                  break
                }
                wD.transcodedPixels = sD, nD.push(wD.transcodedPixels.buffer)
              }
            }
          }
          fD.close(), fD.delete(), GD && (BD = -1), hD ? postMessage({
            action: "transcode",
            success: hD,
            id: AD.data.id,
            fileInfo: ID,
            format: BD
          }, nD) : postMessage({
            action: "transcode",
            success: hD,
            id: AD.data.id
          })
        }
      }
    }! function(DD) {
      DD[DD.cTFETC1 = 0] = "cTFETC1", DD[DD.cTFETC2 = 1] = "cTFETC2", DD[DD.cTFBC1 = 2] = "cTFBC1", DD[DD.cTFBC3 = 3] = "cTFBC3", DD[DD.cTFBC4 = 4] = "cTFBC4", DD[DD.cTFBC5 = 5] = "cTFBC5", DD[DD.cTFBC7 = 6] = "cTFBC7", DD[DD.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", DD[DD.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", DD[DD.cTFASTC_4x4 = 10] = "cTFASTC_4x4", DD[DD.cTFATC_RGB = 11] = "cTFATC_RGB", DD[DD.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", DD[DD.cTFRGBA32 = 13] = "cTFRGBA32", DD[DD.cTFRGB565 = 14] = "cTFRGB565", DD[DD.cTFBGR565 = 15] = "cTFBGR565", DD[DD.cTFRGBA4444 = 16] = "cTFRGBA4444", DD[DD.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", DD[DD.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", DD[DD.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", DD[DD.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", DD[DD.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(pD || (pD = {}));
    const gD = {
      JSModuleURL: `${sD.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${sD.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let RD = null,
      AD = null,
      UD = 0;
    const fD = async () => (RD || (RD = new Promise(((DD, zD) => {
      AD ? DD(AD) : sD.h.LoadFileAsync(sD.h.GetBabylonScriptURL(gD.WasmModuleURL)).then((wD => {
        if ("function" !== typeof URL) return zD("Basis transcoder requires an environment with a URL constructor");
        const pD = URL.createObjectURL(new Blob([`(${cD})()`], {
          type: "application/javascript"
        }));
        AD = new Worker(pD), async function(DD, zD, wD) {
          return await new Promise(((pD, KD) => {
            const rD = zD => {
              "init" === zD.data.action ? (DD.removeEventListener("message", rD), pD(DD)) : "error" === zD.data.action && KD(zD.data.error || "error initializing worker")
            };
            DD.addEventListener("message", rD), DD.postMessage({
              action: "init",
              url: wD ? sD.h.GetBabylonScriptURL(wD) : void 0,
              wasmBinary: zD
            }, [zD])
          }))
        }(AD, wD, gD.JSModuleURL).then(DD, zD)
      })).catch(zD)
    }))), await RD), ID = async (DD, zD) => {
      const wD = DD instanceof ArrayBuffer ? new Uint8Array(DD) : DD;
      return await new Promise(((DD, pD) => {
        fD().then((() => {
          const sD = UD++,
            KD = zD => {
              "transcode" === zD.data.action && zD.data.id === sD && (AD.removeEventListener("message", KD), zD.data.success ? DD(zD.data) : pD("Transcode is not supported on this device"))
            };
          AD.addEventListener("message", KD);
          const rD = new Uint8Array(wD.byteLength);
          rD.set(new Uint8Array(wD.buffer, wD.byteOffset, wD.byteLength)), AD.postMessage({
            action: "transcode",
            id: sD,
            imageData: rD,
            config: zD,
            ignoreSupportedFormats: false
          }, [rD.buffer])
        }), (DD => {
          pD(DD)
        }))
      }))
    }, BD = (DD, zD) => {
      let wD = zD._gl?.TEXTURE_2D;
      DD.isCube && (wD = zD._gl?.TEXTURE_CUBE_MAP), zD._bindTextureDirectly(wD, DD, !0)
    }, GD = (DD, zD) => {
      const wD = DD.iI();
      for (let sD = 0; sD < zD.fileInfo.images.length; sD++) {
        const cD = zD.fileInfo.images[sD].levels[0];
        if (DD._invertVScale = DD.invertY, -1 === zD.format || zD.format === pD.cTFRGB565)
          if (DD.type = 10, DD.format = 4, !wD._features.basisNeedsPOT || Math.log2(cD.width) % 1 === 0 && Math.log2(cD.height) % 1 === 0) DD._invertVScale = !DD.invertY, DD.width = cD.width + 3 & -4, DD.height = cD.height + 3 & -4, DD.samplingMode = 2, BD(DD, wD), wD._uploadDataToTextureDirectly(DD, new Uint16Array(cD.transcodedPixels.buffer), sD, 0, 4, !0);
          else {
            const zD = new LD.e(wD, 2);
            DD._invertVScale = DD.invertY, zD.type = 10, zD.format = 4, zD.width = cD.width + 3 & -4, zD.height = cD.height + 3 & -4, BD(zD, wD), wD._uploadDataToTextureDirectly(zD, new Uint16Array(cD.transcodedPixels.buffer), sD, 0, 4, !0), wD._rescaleTexture(zD, DD, wD.scenes[0], wD._getInternalFormat(4), (() => {
              wD._releaseTexture(zD), BD(DD, wD)
            }))
          }
        else {
          DD.width = cD.width, DD.height = cD.height, DD.generateMipMaps = zD.fileInfo.images[sD].levels.length > 1;
          const pD = hD.GetInternalFormatFromBasisFormat(zD.format, wD);
          DD.format = pD, BD(DD, wD);
          const LD = zD.fileInfo.images[sD].levels;
          for (let zD = 0; zD < LD.length; zD++) {
            const KD = LD[zD];
            wD._uploadCompressedDataToTextureDirectly(DD, pD, KD.width, KD.height, KD.transcodedPixels, sD, zD)
          }!wD._features.basisNeedsPOT || Math.log2(DD.width) % 1 === 0 && Math.log2(DD.height) % 1 === 0 || (KD.d.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), DD._cachedWrapU = rD.d.CLAMP_ADDRESSMODE, DD._cachedWrapV = rD.d.CLAMP_ADDRESSMODE)
        }
      }
    }, hD = {
      JSModuleURL: gD.JSModuleURL,
      WasmModuleURL: gD.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (DD, zD) => {
        let wD;
        switch (DD) {
          case pD.cTFETC1:
            wD = 36196;
            break;
          case pD.cTFBC1:
            wD = 33776;
            break;
          case pD.cTFBC4:
            wD = 33779;
            break;
          case pD.cTFASTC_4x4:
            wD = 37808;
            break;
          case pD.cTFETC2:
            wD = 37496;
            break;
          case pD.cTFBC7:
            wD = 36492
        }
        if (void 0 === wD) throw "The chosen Basis transcoder format is not currently supported";
        return wD
      },
      TranscodeAsync: ID,
      LoadTextureFromTranscodeResult: GD
    };
    class nD {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(DD, zD, wD, pD, KD) {
        if (Array.isArray(DD)) return;
        const rD = zD.iI().getCaps(),
          LD = {
            supportedCompressionFormats: {
              etc1: !!rD.etc1,
              s3tc: !!rD.s3tc,
              pvrtc: !!rD.pvrtc,
              etc2: !!rD.etc2,
              astc: !!rD.astc,
              bc7: !!rD.bptc
            }
          };
        ID(DD, LD).then((DD => {
          const wD = DD.fileInfo.images[0].levels.length > 1 && zD.generateMipMaps;
          GD(zD, DD), zD.iI()._setCubeMapTextureParams(zD, wD), zD.isReady = !0, zD.onLoadedObservable.notifyObservers(zD), zD.onLoadedObservable.clear(), pD && pD()
        })).catch((DD => {
          sD.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), zD.isReady = !0, KD && KD(DD)
        }))
      }
      loadData(DD, zD, wD) {
        const pD = zD.iI().getCaps(),
          KD = {
            supportedCompressionFormats: {
              etc1: !!pD.etc1,
              s3tc: !!pD.s3tc,
              pvrtc: !!pD.pvrtc,
              etc2: !!pD.etc2,
              astc: !!pD.astc,
              bc7: !!pD.bptc
            }
          };
        ID(DD, KD).then((DD => {
          const pD = DD.fileInfo.images[0].levels[0],
            sD = DD.fileInfo.images[0].levels.length > 1 && zD.generateMipMaps;
          wD(pD.width, pD.height, sD, -1 !== DD.format, (() => {
            GD(zD, DD)
          }))
        })).catch((DD => {
          sD.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), sD.h.Warn(`Failed to transcode Basis file: ${DD}`), wD(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);