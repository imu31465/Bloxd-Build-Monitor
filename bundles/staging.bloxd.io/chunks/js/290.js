export const id = 290;
export const ids = [290];
export const modules = {
  40479: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      _BasisTextureLoader: () => vB
    });
    var VB, yB = dB(38848),
      pB = dB(37651),
      lB = dB(39218),
      JB = dB(38569);

    function YB() {
      const BB = 0,
        TB = 1,
        dB = 2,
        VB = 3,
        yB = 6,
        pB = 8,
        lB = 9,
        JB = 10,
        YB = 14;
      let gB = null;

      function oB(BB, TB, dB, VB, yB) {
        const pB = BB.getImageTranscodedSizeInBytes(TB, dB, VB);
        let lB = new Uint8Array(pB);
        if (!BB.transcodeImage(lB, TB, dB, VB, 1, 0)) return null;
        if (yB) {
          lB = function(BB, TB, dB, VB) {
            const yB = new Uint16Array(4),
              pB = new Uint16Array(dB * VB),
              lB = dB / 4,
              JB = VB / 4;
            for (let YB = 0; YB < JB; YB++)
              for (let VB = 0; VB < lB; VB++) {
                const JB = TB + 8 * (YB * lB + VB);
                yB[0] = BB[JB] | BB[JB + 1] << 8, yB[1] = BB[JB + 2] | BB[JB + 3] << 8, yB[2] = (2 * (31 & yB[0]) + 1 * (31 & yB[1])) / 3 | (2 * (2016 & yB[0]) + 1 * (2016 & yB[1])) / 3 & 2016 | (2 * (63488 & yB[0]) + 1 * (63488 & yB[1])) / 3 & 63488, yB[3] = (2 * (31 & yB[1]) + 1 * (31 & yB[0])) / 3 | (2 * (2016 & yB[1]) + 1 * (2016 & yB[0])) / 3 & 2016 | (2 * (63488 & yB[1]) + 1 * (63488 & yB[0])) / 3 & 63488;
                for (let TB = 0; TB < 4; TB++) {
                  const lB = BB[JB + 4 + TB];
                  let gB = (4 * YB + TB) * dB + 4 * VB;
                  pB[gB++] = yB[3 & lB], pB[gB++] = yB[lB >> 2 & 3], pB[gB++] = yB[lB >> 4 & 3], pB[gB] = yB[lB >> 6 & 3]
                }
              }
            return pB
          }(lB, 0, BB.getImageWidth(TB, dB) + 3 & -4, BB.getImageHeight(TB, dB) + 3 & -4)
        }
        return lB
      }
      onmessage = kB => {
        if ("init" === kB.data.action) {
          if (kB.data.url) try {
            importScripts(kB.data.url)
          } catch (LB) {
            postMessage({
              action: "error",
              error: LB
            })
          }
          gB || (gB = BASIS({
            wasmBinary: kB.data.wasmBinary
          })), null !== gB && gB.then((BB => {
            BASIS = BB, BB.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === kB.data.action) {
          const gB = kB.data.config,
            LB = kB.data.imageData,
            OB = new BASIS.BasisFile(LB),
            DB = function(BB) {
              const TB = BB.getHasAlpha(),
                dB = BB.getNumImages(),
                VB = [];
              for (let yB = 0; yB < dB; yB++) {
                const TB = {
                    levels: []
                  },
                  dB = BB.getNumLevels(yB);
                for (let VB = 0; VB < dB; VB++) {
                  const dB = {
                    width: BB.getImageWidth(yB, VB),
                    height: BB.getImageHeight(yB, VB)
                  };
                  TB.levels.push(dB)
                }
                VB.push(TB)
              }
              return {
                hasAlpha: TB,
                images: VB
              }
            }(OB);
          let uB = kB.data.ignoreSupportedFormats ? null : function(gB, oB) {
              let kB = null;
              gB.supportedCompressionFormats && (kB = gB.supportedCompressionFormats.astc ? JB : gB.supportedCompressionFormats.bc7 ? yB : gB.supportedCompressionFormats.s3tc ? oB.hasAlpha ? VB : dB : gB.supportedCompressionFormats.pvrtc ? oB.hasAlpha ? lB : pB : gB.supportedCompressionFormats.etc2 ? TB : gB.supportedCompressionFormats.etc1 ? BB : YB);
              return kB
            }(kB.data.config, DB),
            HB = !1;
          null === uB && (HB = !0, uB = DB.hasAlpha ? VB : dB);
          let EB = !0;
          OB.startTranscoding() || (EB = !1);
          const vB = [];
          for (let BB = 0; BB < DB.images.length && EB; BB++) {
            const TB = DB.images[BB];
            if (void 0 === gB.loadSingleImage || gB.loadSingleImage === BB) {
              let dB = TB.levels.length;
              !1 === gB.loadMipmapLevels && (dB = 1);
              for (let VB = 0; VB < dB; VB++) {
                const dB = TB.levels[VB],
                  yB = oB(OB, BB, VB, uB, HB);
                if (!yB) {
                  EB = !1;
                  break
                }
                dB.transcodedPixels = yB, vB.push(dB.transcodedPixels.buffer)
              }
            }
          }
          OB.close(), OB.delete(), HB && (uB = -1), EB ? postMessage({
            action: "transcode",
            success: EB,
            id: kB.data.id,
            fileInfo: DB,
            format: uB
          }, vB) : postMessage({
            action: "transcode",
            success: EB,
            id: kB.data.id
          })
        }
      }
    }! function(BB) {
      BB[BB.cTFETC1 = 0] = "cTFETC1", BB[BB.cTFETC2 = 1] = "cTFETC2", BB[BB.cTFBC1 = 2] = "cTFBC1", BB[BB.cTFBC3 = 3] = "cTFBC3", BB[BB.cTFBC4 = 4] = "cTFBC4", BB[BB.cTFBC5 = 5] = "cTFBC5", BB[BB.cTFBC7 = 6] = "cTFBC7", BB[BB.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", BB[BB.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", BB[BB.cTFASTC_4x4 = 10] = "cTFASTC_4x4", BB[BB.cTFATC_RGB = 11] = "cTFATC_RGB", BB[BB.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", BB[BB.cTFRGBA32 = 13] = "cTFRGBA32", BB[BB.cTFRGB565 = 14] = "cTFRGB565", BB[BB.cTFBGR565 = 15] = "cTFBGR565", BB[BB.cTFRGBA4444 = 16] = "cTFRGBA4444", BB[BB.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", BB[BB.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", BB[BB.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", BB[BB.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", BB[BB.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(VB || (VB = {}));
    const gB = {
      JSModuleURL: `${yB.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${yB.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let oB = null,
      kB = null,
      LB = 0;
    const OB = async () => (oB || (oB = new Promise(((BB, TB) => {
      kB ? BB(kB) : yB.h.LoadFileAsync(yB.h.GetBabylonScriptURL(gB.WasmModuleURL)).then((dB => {
        if ("function" !== typeof URL) return TB("Basis transcoder requires an environment with a URL constructor");
        const VB = URL.createObjectURL(new Blob([`(${YB})()`], {
          type: "application/javascript"
        }));
        kB = new Worker(VB), async function(BB, TB, dB) {
          return await new Promise(((VB, pB) => {
            const lB = TB => {
              "init" === TB.data.action ? (BB.removeEventListener("message", lB), VB(BB)) : "error" === TB.data.action && pB(TB.data.error || "error initializing worker")
            };
            BB.addEventListener("message", lB), BB.postMessage({
              action: "init",
              url: dB ? yB.h.GetBabylonScriptURL(dB) : void 0,
              wasmBinary: TB
            }, [TB])
          }))
        }(kB, dB, gB.JSModuleURL).then(BB, TB)
      })).catch(TB)
    }))), await oB), DB = async (BB, TB) => {
      const dB = BB instanceof ArrayBuffer ? new Uint8Array(BB) : BB;
      return await new Promise(((BB, VB) => {
        OB().then((() => {
          const yB = LB++,
            pB = TB => {
              "transcode" === TB.data.action && TB.data.id === yB && (kB.removeEventListener("message", pB), TB.data.success ? BB(TB.data) : VB("Transcode is not supported on this device"))
            };
          kB.addEventListener("message", pB);
          const lB = new Uint8Array(dB.byteLength);
          lB.set(new Uint8Array(dB.buffer, dB.byteOffset, dB.byteLength)), kB.postMessage({
            action: "transcode",
            id: yB,
            imageData: lB,
            config: TB,
            ignoreSupportedFormats: false
          }, [lB.buffer])
        }), (BB => {
          VB(BB)
        }))
      }))
    }, uB = (BB, TB) => {
      let dB = TB._gl?.TEXTURE_2D;
      BB.isCube && (dB = TB._gl?.TEXTURE_CUBE_MAP), TB._bindTextureDirectly(dB, BB, !0)
    }, HB = (BB, TB) => {
      const dB = BB.PD();
      for (let yB = 0; yB < TB.fileInfo.images.length; yB++) {
        const YB = TB.fileInfo.images[yB].levels[0];
        if (BB._invertVScale = BB.invertY, -1 === TB.format || TB.format === VB.cTFRGB565)
          if (BB.type = 10, BB.format = 4, !dB._features.basisNeedsPOT || Math.log2(YB.width) % 1 === 0 && Math.log2(YB.height) % 1 === 0) BB._invertVScale = !BB.invertY, BB.width = YB.width + 3 & -4, BB.height = YB.height + 3 & -4, BB.samplingMode = 2, uB(BB, dB), dB._uploadDataToTextureDirectly(BB, new Uint16Array(YB.transcodedPixels.buffer), yB, 0, 4, !0);
          else {
            const TB = new JB.e(dB, 2);
            BB._invertVScale = BB.invertY, TB.type = 10, TB.format = 4, TB.width = YB.width + 3 & -4, TB.height = YB.height + 3 & -4, uB(TB, dB), dB._uploadDataToTextureDirectly(TB, new Uint16Array(YB.transcodedPixels.buffer), yB, 0, 4, !0), dB._rescaleTexture(TB, BB, dB.scenes[0], dB._getInternalFormat(4), (() => {
              dB._releaseTexture(TB), uB(BB, dB)
            }))
          }
        else {
          BB.width = YB.width, BB.height = YB.height, BB.generateMipMaps = TB.fileInfo.images[yB].levels.length > 1;
          const VB = EB.GetInternalFormatFromBasisFormat(TB.format, dB);
          BB.format = VB, uB(BB, dB);
          const JB = TB.fileInfo.images[yB].levels;
          for (let TB = 0; TB < JB.length; TB++) {
            const pB = JB[TB];
            dB._uploadCompressedDataToTextureDirectly(BB, VB, pB.width, pB.height, pB.transcodedPixels, yB, TB)
          }!dB._features.basisNeedsPOT || Math.log2(BB.width) % 1 === 0 && Math.log2(BB.height) % 1 === 0 || (pB.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), BB._cachedWrapU = lB.f.CLAMP_ADDRESSMODE, BB._cachedWrapV = lB.f.CLAMP_ADDRESSMODE)
        }
      }
    }, EB = {
      JSModuleURL: gB.JSModuleURL,
      WasmModuleURL: gB.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (BB, TB) => {
        let dB;
        switch (BB) {
          case VB.cTFETC1:
            dB = 36196;
            break;
          case VB.cTFBC1:
            dB = 33776;
            break;
          case VB.cTFBC4:
            dB = 33779;
            break;
          case VB.cTFASTC_4x4:
            dB = 37808;
            break;
          case VB.cTFETC2:
            dB = 37496;
            break;
          case VB.cTFBC7:
            dB = 36492
        }
        if (void 0 === dB) throw "The chosen Basis transcoder format is not currently supported";
        return dB
      },
      TranscodeAsync: DB,
      LoadTextureFromTranscodeResult: HB
    };
    class vB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, TB, dB, VB, pB) {
        if (Array.isArray(BB)) return;
        const lB = TB.PD().getCaps(),
          JB = {
            supportedCompressionFormats: {
              etc1: !!lB.etc1,
              s3tc: !!lB.s3tc,
              pvrtc: !!lB.pvrtc,
              etc2: !!lB.etc2,
              astc: !!lB.astc,
              bc7: !!lB.bptc
            }
          };
        DB(BB, JB).then((BB => {
          const dB = BB.fileInfo.images[0].levels.length > 1 && TB.generateMipMaps;
          HB(TB, BB), TB.PD()._setCubeMapTextureParams(TB, dB), TB.isReady = !0, TB.onLoadedObservable.notifyObservers(TB), TB.onLoadedObservable.clear(), VB && VB()
        })).catch((BB => {
          yB.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), TB.isReady = !0, pB && pB(BB)
        }))
      }
      loadData(BB, TB, dB) {
        const VB = TB.PD().getCaps(),
          pB = {
            supportedCompressionFormats: {
              etc1: !!VB.etc1,
              s3tc: !!VB.s3tc,
              pvrtc: !!VB.pvrtc,
              etc2: !!VB.etc2,
              astc: !!VB.astc,
              bc7: !!VB.bptc
            }
          };
        DB(BB, pB).then((BB => {
          const VB = BB.fileInfo.images[0].levels[0],
            yB = BB.fileInfo.images[0].levels.length > 1 && TB.generateMipMaps;
          dB(VB.width, VB.height, yB, -1 !== BB.format, (() => {
            HB(TB, BB)
          }))
        })).catch((BB => {
          yB.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), yB.h.Warn(`Failed to transcode Basis file: ${BB}`), dB(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);