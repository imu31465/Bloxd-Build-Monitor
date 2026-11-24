export const id = 315;
export const ids = [315];
export const modules = {
  41880: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      _BasisTextureLoader: () => GB
    });
    var QB, nB = zB(40164),
      dB = zB(38783),
      IB = zB(40580),
      NB = zB(39913);

    function uB() {
      const BB = 0,
        jB = 1,
        zB = 2,
        QB = 3,
        nB = 6,
        dB = 8,
        IB = 9,
        NB = 10,
        uB = 14;
      let UB = null;

      function aB(BB, jB, zB, QB, nB) {
        const dB = BB.getImageTranscodedSizeInBytes(jB, zB, QB);
        let IB = new Uint8Array(dB);
        if (!BB.transcodeImage(IB, jB, zB, QB, 1, 0)) return null;
        if (nB) {
          IB = function(BB, jB, zB, QB) {
            const nB = new Uint16Array(4),
              dB = new Uint16Array(zB * QB),
              IB = zB / 4,
              NB = QB / 4;
            for (let uB = 0; uB < NB; uB++)
              for (let QB = 0; QB < IB; QB++) {
                const NB = jB + 8 * (uB * IB + QB);
                nB[0] = BB[NB] | BB[NB + 1] << 8, nB[1] = BB[NB + 2] | BB[NB + 3] << 8, nB[2] = (2 * (31 & nB[0]) + 1 * (31 & nB[1])) / 3 | (2 * (2016 & nB[0]) + 1 * (2016 & nB[1])) / 3 & 2016 | (2 * (63488 & nB[0]) + 1 * (63488 & nB[1])) / 3 & 63488, nB[3] = (2 * (31 & nB[1]) + 1 * (31 & nB[0])) / 3 | (2 * (2016 & nB[1]) + 1 * (2016 & nB[0])) / 3 & 2016 | (2 * (63488 & nB[1]) + 1 * (63488 & nB[0])) / 3 & 63488;
                for (let jB = 0; jB < 4; jB++) {
                  const IB = BB[NB + 4 + jB];
                  let UB = (4 * uB + jB) * zB + 4 * QB;
                  dB[UB++] = nB[3 & IB], dB[UB++] = nB[IB >> 2 & 3], dB[UB++] = nB[IB >> 4 & 3], dB[UB] = nB[IB >> 6 & 3]
                }
              }
            return dB
          }(IB, 0, BB.getImageWidth(jB, zB) + 3 & -4, BB.getImageHeight(jB, zB) + 3 & -4)
        }
        return IB
      }
      onmessage = pB => {
        if ("init" === pB.data.action) {
          if (pB.data.url) try {
            importScripts(pB.data.url)
          } catch (rB) {
            postMessage({
              action: "error",
              error: rB
            })
          }
          UB || (UB = BASIS({
            wasmBinary: pB.data.wasmBinary
          })), null !== UB && UB.then((BB => {
            BASIS = BB, BB.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === pB.data.action) {
          const UB = pB.data.config,
            rB = pB.data.imageData,
            sB = new BASIS.BasisFile(rB),
            JB = function(BB) {
              const jB = BB.getHasAlpha(),
                zB = BB.getNumImages(),
                QB = [];
              for (let nB = 0; nB < zB; nB++) {
                const jB = {
                    levels: []
                  },
                  zB = BB.getNumLevels(nB);
                for (let QB = 0; QB < zB; QB++) {
                  const zB = {
                    width: BB.getImageWidth(nB, QB),
                    height: BB.getImageHeight(nB, QB)
                  };
                  jB.levels.push(zB)
                }
                QB.push(jB)
              }
              return {
                hasAlpha: jB,
                images: QB
              }
            }(sB);
          let mB = pB.data.ignoreSupportedFormats ? null : function(UB, aB) {
              let pB = null;
              UB.supportedCompressionFormats && (pB = UB.supportedCompressionFormats.astc ? NB : UB.supportedCompressionFormats.bc7 ? nB : UB.supportedCompressionFormats.s3tc ? aB.hasAlpha ? QB : zB : UB.supportedCompressionFormats.pvrtc ? aB.hasAlpha ? IB : dB : UB.supportedCompressionFormats.etc2 ? jB : UB.supportedCompressionFormats.etc1 ? BB : uB);
              return pB
            }(pB.data.config, JB),
            yB = !1;
          null === mB && (yB = !0, mB = JB.hasAlpha ? QB : zB);
          let kB = !0;
          sB.startTranscoding() || (kB = !1);
          const GB = [];
          for (let BB = 0; BB < JB.images.length && kB; BB++) {
            const jB = JB.images[BB];
            if (void 0 === UB.loadSingleImage || UB.loadSingleImage === BB) {
              let zB = jB.levels.length;
              !1 === UB.loadMipmapLevels && (zB = 1);
              for (let QB = 0; QB < zB; QB++) {
                const zB = jB.levels[QB],
                  nB = aB(sB, BB, QB, mB, yB);
                if (!nB) {
                  kB = !1;
                  break
                }
                zB.transcodedPixels = nB, GB.push(zB.transcodedPixels.buffer)
              }
            }
          }
          sB.close(), sB.delete(), yB && (mB = -1), kB ? postMessage({
            action: "transcode",
            success: kB,
            id: pB.data.id,
            fileInfo: JB,
            format: mB
          }, GB) : postMessage({
            action: "transcode",
            success: kB,
            id: pB.data.id
          })
        }
      }
    }! function(BB) {
      BB[BB.cTFETC1 = 0] = "cTFETC1", BB[BB.cTFETC2 = 1] = "cTFETC2", BB[BB.cTFBC1 = 2] = "cTFBC1", BB[BB.cTFBC3 = 3] = "cTFBC3", BB[BB.cTFBC4 = 4] = "cTFBC4", BB[BB.cTFBC5 = 5] = "cTFBC5", BB[BB.cTFBC7 = 6] = "cTFBC7", BB[BB.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", BB[BB.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", BB[BB.cTFASTC_4x4 = 10] = "cTFASTC_4x4", BB[BB.cTFATC_RGB = 11] = "cTFATC_RGB", BB[BB.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", BB[BB.cTFRGBA32 = 13] = "cTFRGBA32", BB[BB.cTFRGB565 = 14] = "cTFRGB565", BB[BB.cTFBGR565 = 15] = "cTFBGR565", BB[BB.cTFRGBA4444 = 16] = "cTFRGBA4444", BB[BB.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", BB[BB.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", BB[BB.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", BB[BB.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", BB[BB.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(QB || (QB = {}));
    const UB = {
      JSModuleURL: `${nB.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${nB.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let aB = null,
      pB = null,
      rB = 0;
    const sB = async () => (aB || (aB = new Promise(((BB, jB) => {
      pB ? BB(pB) : nB.i.LoadFileAsync(nB.i.GetBabylonScriptURL(UB.WasmModuleURL)).then((zB => {
        if ("function" !== typeof URL) return jB("Basis transcoder requires an environment with a URL constructor");
        const QB = URL.createObjectURL(new Blob([`(${uB})()`], {
          type: "application/javascript"
        }));
        pB = new Worker(QB), async function(BB, jB, zB) {
          return await new Promise(((QB, dB) => {
            const IB = jB => {
              "init" === jB.data.action ? (BB.removeEventListener("message", IB), QB(BB)) : "error" === jB.data.action && dB(jB.data.error || "error initializing worker")
            };
            BB.addEventListener("message", IB), BB.postMessage({
              action: "init",
              url: zB ? nB.i.GetBabylonScriptURL(zB) : void 0,
              wasmBinary: jB
            }, [jB])
          }))
        }(pB, zB, UB.JSModuleURL).then(BB, jB)
      })).catch(jB)
    }))), await aB), JB = async (BB, jB) => {
      const zB = BB instanceof ArrayBuffer ? new Uint8Array(BB) : BB;
      return await new Promise(((BB, QB) => {
        sB().then((() => {
          const nB = rB++,
            dB = jB => {
              "transcode" === jB.data.action && jB.data.id === nB && (pB.removeEventListener("message", dB), jB.data.success ? BB(jB.data) : QB("Transcode is not supported on this device"))
            };
          pB.addEventListener("message", dB);
          const IB = new Uint8Array(zB.byteLength);
          IB.set(new Uint8Array(zB.buffer, zB.byteOffset, zB.byteLength)), pB.postMessage({
            action: "transcode",
            id: nB,
            imageData: IB,
            config: jB,
            ignoreSupportedFormats: false
          }, [IB.buffer])
        }), (BB => {
          QB(BB)
        }))
      }))
    }, mB = (BB, jB) => {
      let zB = jB._gl?.TEXTURE_2D;
      BB.isCube && (zB = jB._gl?.TEXTURE_CUBE_MAP), jB._bindTextureDirectly(zB, BB, !0)
    }, yB = (BB, jB) => {
      const zB = BB.wJ();
      for (let nB = 0; nB < jB.fileInfo.images.length; nB++) {
        const uB = jB.fileInfo.images[nB].levels[0];
        if (BB._invertVScale = BB.invertY, -1 === jB.format || jB.format === QB.cTFRGB565)
          if (BB.type = 10, BB.format = 4, !zB._features.basisNeedsPOT || Math.log2(uB.width) % 1 === 0 && Math.log2(uB.height) % 1 === 0) BB._invertVScale = !BB.invertY, BB.width = uB.width + 3 & -4, BB.height = uB.height + 3 & -4, BB.samplingMode = 2, mB(BB, zB), zB._uploadDataToTextureDirectly(BB, new Uint16Array(uB.transcodedPixels.buffer), nB, 0, 4, !0);
          else {
            const jB = new NB.d(zB, 2);
            BB._invertVScale = BB.invertY, jB.type = 10, jB.format = 4, jB.width = uB.width + 3 & -4, jB.height = uB.height + 3 & -4, mB(jB, zB), zB._uploadDataToTextureDirectly(jB, new Uint16Array(uB.transcodedPixels.buffer), nB, 0, 4, !0), zB._rescaleTexture(jB, BB, zB.scenes[0], zB._getInternalFormat(4), (() => {
              zB._releaseTexture(jB), mB(BB, zB)
            }))
          }
        else {
          BB.width = uB.width, BB.height = uB.height, BB.generateMipMaps = jB.fileInfo.images[nB].levels.length > 1;
          const QB = kB.GetInternalFormatFromBasisFormat(jB.format, zB);
          BB.format = QB, mB(BB, zB);
          const NB = jB.fileInfo.images[nB].levels;
          for (let jB = 0; jB < NB.length; jB++) {
            const dB = NB[jB];
            zB._uploadCompressedDataToTextureDirectly(BB, QB, dB.width, dB.height, dB.transcodedPixels, nB, jB)
          }!zB._features.basisNeedsPOT || Math.log2(BB.width) % 1 === 0 && Math.log2(BB.height) % 1 === 0 || (dB.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), BB._cachedWrapU = IB.i.CLAMP_ADDRESSMODE, BB._cachedWrapV = IB.i.CLAMP_ADDRESSMODE)
        }
      }
    }, kB = {
      JSModuleURL: UB.JSModuleURL,
      WasmModuleURL: UB.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (BB, jB) => {
        let zB;
        switch (BB) {
          case QB.cTFETC1:
            zB = 36196;
            break;
          case QB.cTFBC1:
            zB = 33776;
            break;
          case QB.cTFBC4:
            zB = 33779;
            break;
          case QB.cTFASTC_4x4:
            zB = 37808;
            break;
          case QB.cTFETC2:
            zB = 37496;
            break;
          case QB.cTFBC7:
            zB = 36492
        }
        if (void 0 === zB) throw "The chosen Basis transcoder format is not currently supported";
        return zB
      },
      TranscodeAsync: JB,
      LoadTextureFromTranscodeResult: yB
    };
    class GB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, jB, zB, QB, dB) {
        if (Array.isArray(BB)) return;
        const IB = jB.wJ().getCaps(),
          NB = {
            supportedCompressionFormats: {
              etc1: !!IB.etc1,
              s3tc: !!IB.s3tc,
              pvrtc: !!IB.pvrtc,
              etc2: !!IB.etc2,
              astc: !!IB.astc,
              bc7: !!IB.bptc
            }
          };
        JB(BB, NB).then((BB => {
          const zB = BB.fileInfo.images[0].levels.length > 1 && jB.generateMipMaps;
          yB(jB, BB), jB.wJ()._setCubeMapTextureParams(jB, zB), jB.isReady = !0, jB.onLoadedObservable.notifyObservers(jB), jB.onLoadedObservable.clear(), QB && QB()
        })).catch((BB => {
          nB.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), jB.isReady = !0, dB && dB(BB)
        }))
      }
      loadData(BB, jB, zB) {
        const QB = jB.wJ().getCaps(),
          dB = {
            supportedCompressionFormats: {
              etc1: !!QB.etc1,
              s3tc: !!QB.s3tc,
              pvrtc: !!QB.pvrtc,
              etc2: !!QB.etc2,
              astc: !!QB.astc,
              bc7: !!QB.bptc
            }
          };
        JB(BB, dB).then((BB => {
          const QB = BB.fileInfo.images[0].levels[0],
            nB = BB.fileInfo.images[0].levels.length > 1 && jB.generateMipMaps;
          zB(QB.width, QB.height, nB, -1 !== BB.format, (() => {
            yB(jB, BB)
          }))
        })).catch((BB => {
          nB.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), nB.i.Warn(`Failed to transcode Basis file: ${BB}`), zB(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);