export const id = 619;
export const ids = [619];
export const modules = {
  44426: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      _BasisTextureLoader: () => lM
    });
    var OM, SM = iM(41205),
      jM = iM(39711),
      aM = iM(41560),
      PM = iM(40939);

    function nM() {
      const MM = 0,
        rM = 1,
        iM = 2,
        OM = 3,
        SM = 6,
        jM = 8,
        aM = 9,
        PM = 10,
        nM = 14;
      let QM = null;

      function zM(MM, rM, iM, OM, SM) {
        const jM = MM.getImageTranscodedSizeInBytes(rM, iM, OM);
        let aM = new Uint8Array(jM);
        if (!MM.transcodeImage(aM, rM, iM, OM, 1, 0)) return null;
        if (SM) {
          aM = function(MM, rM, iM, OM) {
            const SM = new Uint16Array(4),
              jM = new Uint16Array(iM * OM),
              aM = iM / 4,
              PM = OM / 4;
            for (let nM = 0; nM < PM; nM++)
              for (let OM = 0; OM < aM; OM++) {
                const PM = rM + 8 * (nM * aM + OM);
                SM[0] = MM[PM] | MM[PM + 1] << 8, SM[1] = MM[PM + 2] | MM[PM + 3] << 8, SM[2] = (2 * (31 & SM[0]) + 1 * (31 & SM[1])) / 3 | (2 * (2016 & SM[0]) + 1 * (2016 & SM[1])) / 3 & 2016 | (2 * (63488 & SM[0]) + 1 * (63488 & SM[1])) / 3 & 63488, SM[3] = (2 * (31 & SM[1]) + 1 * (31 & SM[0])) / 3 | (2 * (2016 & SM[1]) + 1 * (2016 & SM[0])) / 3 & 2016 | (2 * (63488 & SM[1]) + 1 * (63488 & SM[0])) / 3 & 63488;
                for (let rM = 0; rM < 4; rM++) {
                  const aM = MM[PM + 4 + rM];
                  let QM = (4 * nM + rM) * iM + 4 * OM;
                  jM[QM++] = SM[3 & aM], jM[QM++] = SM[aM >> 2 & 3], jM[QM++] = SM[aM >> 4 & 3], jM[QM] = SM[aM >> 6 & 3]
                }
              }
            return jM
          }(aM, 0, MM.getImageWidth(rM, iM) + 3 & -4, MM.getImageHeight(rM, iM) + 3 & -4)
        }
        return aM
      }
      onmessage = LM => {
        if ("init" === LM.data.action) {
          if (LM.data.url) try {
            importScripts(LM.data.url)
          } catch (mM) {
            postMessage({
              action: "error",
              error: mM
            })
          }
          QM || (QM = BASIS({
            wasmBinary: LM.data.wasmBinary
          })), null !== QM && QM.then((MM => {
            BASIS = MM, MM.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === LM.data.action) {
          const QM = LM.data.config,
            mM = LM.data.imageData,
            HM = new BASIS.BasisFile(mM),
            hM = function(MM) {
              const rM = MM.getHasAlpha(),
                iM = MM.getNumImages(),
                OM = [];
              for (let SM = 0; SM < iM; SM++) {
                const rM = {
                    levels: []
                  },
                  iM = MM.getNumLevels(SM);
                for (let OM = 0; OM < iM; OM++) {
                  const iM = {
                    width: MM.getImageWidth(SM, OM),
                    height: MM.getImageHeight(SM, OM)
                  };
                  rM.levels.push(iM)
                }
                OM.push(rM)
              }
              return {
                hasAlpha: rM,
                images: OM
              }
            }(HM);
          let JM = LM.data.ignoreSupportedFormats ? null : function(QM, zM) {
              let LM = null;
              QM.supportedCompressionFormats && (LM = QM.supportedCompressionFormats.astc ? PM : QM.supportedCompressionFormats.bc7 ? SM : QM.supportedCompressionFormats.s3tc ? zM.hasAlpha ? OM : iM : QM.supportedCompressionFormats.pvrtc ? zM.hasAlpha ? aM : jM : QM.supportedCompressionFormats.etc2 ? rM : QM.supportedCompressionFormats.etc1 ? MM : nM);
              return LM
            }(LM.data.config, hM),
            dM = !1;
          null === JM && (dM = !0, JM = hM.hasAlpha ? OM : iM);
          let yM = !0;
          HM.startTranscoding() || (yM = !1);
          const lM = [];
          for (let MM = 0; MM < hM.images.length && yM; MM++) {
            const rM = hM.images[MM];
            if (void 0 === QM.loadSingleImage || QM.loadSingleImage === MM) {
              let iM = rM.levels.length;
              !1 === QM.loadMipmapLevels && (iM = 1);
              for (let OM = 0; OM < iM; OM++) {
                const iM = rM.levels[OM],
                  SM = zM(HM, MM, OM, JM, dM);
                if (!SM) {
                  yM = !1;
                  break
                }
                iM.transcodedPixels = SM, lM.push(iM.transcodedPixels.buffer)
              }
            }
          }
          HM.close(), HM.delete(), dM && (JM = -1), yM ? postMessage({
            action: "transcode",
            success: yM,
            id: LM.data.id,
            fileInfo: hM,
            format: JM
          }, lM) : postMessage({
            action: "transcode",
            success: yM,
            id: LM.data.id
          })
        }
      }
    }! function(MM) {
      MM[MM.cTFETC1 = 0] = "cTFETC1", MM[MM.cTFETC2 = 1] = "cTFETC2", MM[MM.cTFBC1 = 2] = "cTFBC1", MM[MM.cTFBC3 = 3] = "cTFBC3", MM[MM.cTFBC4 = 4] = "cTFBC4", MM[MM.cTFBC5 = 5] = "cTFBC5", MM[MM.cTFBC7 = 6] = "cTFBC7", MM[MM.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", MM[MM.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", MM[MM.cTFASTC_4x4 = 10] = "cTFASTC_4x4", MM[MM.cTFATC_RGB = 11] = "cTFATC_RGB", MM[MM.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", MM[MM.cTFRGBA32 = 13] = "cTFRGBA32", MM[MM.cTFRGB565 = 14] = "cTFRGB565", MM[MM.cTFBGR565 = 15] = "cTFBGR565", MM[MM.cTFRGBA4444 = 16] = "cTFRGBA4444", MM[MM.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", MM[MM.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", MM[MM.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", MM[MM.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", MM[MM.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(OM || (OM = {}));
    const QM = {
      JSModuleURL: `${SM.e._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${SM.e._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let zM = null,
      LM = null,
      mM = 0;
    const HM = async () => (zM || (zM = new Promise(((MM, rM) => {
      LM ? MM(LM) : SM.e.LoadFileAsync(SM.e.GetBabylonScriptURL(QM.WasmModuleURL)).then((iM => {
        if ("function" !== typeof URL) return rM("Basis transcoder requires an environment with a URL constructor");
        const OM = URL.createObjectURL(new Blob([`(${nM})()`], {
          type: "application/javascript"
        }));
        LM = new Worker(OM), async function(MM, rM, iM) {
          return await new Promise(((OM, jM) => {
            const aM = rM => {
              "init" === rM.data.action ? (MM.removeEventListener("message", aM), OM(MM)) : "error" === rM.data.action && jM(rM.data.error || "error initializing worker")
            };
            MM.addEventListener("message", aM), MM.postMessage({
              action: "init",
              url: iM ? SM.e.GetBabylonScriptURL(iM) : void 0,
              wasmBinary: rM
            }, [rM])
          }))
        }(LM, iM, QM.JSModuleURL).then(MM, rM)
      })).catch(rM)
    }))), await zM), hM = async (MM, rM) => {
      const iM = MM instanceof ArrayBuffer ? new Uint8Array(MM) : MM;
      return await new Promise(((MM, OM) => {
        HM().then((() => {
          const SM = mM++,
            jM = rM => {
              "transcode" === rM.data.action && rM.data.id === SM && (LM.removeEventListener("message", jM), rM.data.success ? MM(rM.data) : OM("Transcode is not supported on this device"))
            };
          LM.addEventListener("message", jM);
          const aM = new Uint8Array(iM.byteLength);
          aM.set(new Uint8Array(iM.buffer, iM.byteOffset, iM.byteLength)), LM.postMessage({
            action: "transcode",
            id: SM,
            imageData: aM,
            config: rM,
            ignoreSupportedFormats: false
          }, [aM.buffer])
        }), (MM => {
          OM(MM)
        }))
      }))
    }, JM = (MM, rM) => {
      let iM = rM._gl?.TEXTURE_2D;
      MM.isCube && (iM = rM._gl?.TEXTURE_CUBE_MAP), rM._bindTextureDirectly(iM, MM, !0)
    }, dM = (MM, rM) => {
      const iM = MM.ph();
      for (let SM = 0; SM < rM.fileInfo.images.length; SM++) {
        const nM = rM.fileInfo.images[SM].levels[0];
        if (MM._invertVScale = MM.invertY, -1 === rM.format || rM.format === OM.cTFRGB565)
          if (MM.type = 10, MM.format = 4, !iM._features.basisNeedsPOT || Math.log2(nM.width) % 1 === 0 && Math.log2(nM.height) % 1 === 0) MM._invertVScale = !MM.invertY, MM.width = nM.width + 3 & -4, MM.height = nM.height + 3 & -4, MM.samplingMode = 2, JM(MM, iM), iM._uploadDataToTextureDirectly(MM, new Uint16Array(nM.transcodedPixels.buffer), SM, 0, 4, !0);
          else {
            const rM = new PM.c(iM, 2);
            MM._invertVScale = MM.invertY, rM.type = 10, rM.format = 4, rM.width = nM.width + 3 & -4, rM.height = nM.height + 3 & -4, JM(rM, iM), iM._uploadDataToTextureDirectly(rM, new Uint16Array(nM.transcodedPixels.buffer), SM, 0, 4, !0), iM._rescaleTexture(rM, MM, iM.scenes[0], iM._getInternalFormat(4), (() => {
              iM._releaseTexture(rM), JM(MM, iM)
            }))
          }
        else {
          MM.width = nM.width, MM.height = nM.height, MM.generateMipMaps = rM.fileInfo.images[SM].levels.length > 1;
          const OM = yM.GetInternalFormatFromBasisFormat(rM.format, iM);
          MM.format = OM, JM(MM, iM);
          const PM = rM.fileInfo.images[SM].levels;
          for (let rM = 0; rM < PM.length; rM++) {
            const jM = PM[rM];
            iM._uploadCompressedDataToTextureDirectly(MM, OM, jM.width, jM.height, jM.transcodedPixels, SM, rM)
          }!iM._features.basisNeedsPOT || Math.log2(MM.width) % 1 === 0 && Math.log2(MM.height) % 1 === 0 || (jM.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), MM._cachedWrapU = aM.h.CLAMP_ADDRESSMODE, MM._cachedWrapV = aM.h.CLAMP_ADDRESSMODE)
        }
      }
    }, yM = {
      JSModuleURL: QM.JSModuleURL,
      WasmModuleURL: QM.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (MM, rM) => {
        let iM;
        switch (MM) {
          case OM.cTFETC1:
            iM = 36196;
            break;
          case OM.cTFBC1:
            iM = 33776;
            break;
          case OM.cTFBC4:
            iM = 33779;
            break;
          case OM.cTFASTC_4x4:
            iM = 37808;
            break;
          case OM.cTFETC2:
            iM = 37496;
            break;
          case OM.cTFBC7:
            iM = 36492
        }
        if (void 0 === iM) throw "The chosen Basis transcoder format is not currently supported";
        return iM
      },
      TranscodeAsync: hM,
      LoadTextureFromTranscodeResult: dM
    };
    class lM {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(MM, rM, iM, OM, jM) {
        if (Array.isArray(MM)) return;
        const aM = rM.ph().getCaps(),
          PM = {
            supportedCompressionFormats: {
              etc1: !!aM.etc1,
              s3tc: !!aM.s3tc,
              pvrtc: !!aM.pvrtc,
              etc2: !!aM.etc2,
              astc: !!aM.astc,
              bc7: !!aM.bptc
            }
          };
        hM(MM, PM).then((MM => {
          const iM = MM.fileInfo.images[0].levels.length > 1 && rM.generateMipMaps;
          dM(rM, MM), rM.ph()._setCubeMapTextureParams(rM, iM), rM.isReady = !0, rM.onLoadedObservable.notifyObservers(rM), rM.onLoadedObservable.clear(), OM && OM()
        })).catch((MM => {
          SM.e.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), rM.isReady = !0, jM && jM(MM)
        }))
      }
      loadData(MM, rM, iM) {
        const OM = rM.ph().getCaps(),
          jM = {
            supportedCompressionFormats: {
              etc1: !!OM.etc1,
              s3tc: !!OM.s3tc,
              pvrtc: !!OM.pvrtc,
              etc2: !!OM.etc2,
              astc: !!OM.astc,
              bc7: !!OM.bptc
            }
          };
        hM(MM, jM).then((MM => {
          const OM = MM.fileInfo.images[0].levels[0],
            SM = MM.fileInfo.images[0].levels.length > 1 && rM.generateMipMaps;
          iM(OM.width, OM.height, SM, -1 !== MM.format, (() => {
            dM(rM, MM)
          }))
        })).catch((MM => {
          SM.e.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), SM.e.Warn(`Failed to transcode Basis file: ${MM}`), iM(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);