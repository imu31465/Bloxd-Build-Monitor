export const id = 315;
export const ids = [315];
export const modules = {
  41807: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      _BasisTextureLoader: () => UB
    });
    var TB, JB = ZB(40152),
      oB = ZB(38718),
      GB = ZB(40521),
      vB = ZB(39885);

    function kB() {
      const BB = 0,
        IB = 1,
        ZB = 2,
        TB = 3,
        JB = 6,
        oB = 8,
        GB = 9,
        vB = 10,
        kB = 14;
      let cB = null;

      function nB(BB, IB, ZB, TB, JB) {
        const oB = BB.getImageTranscodedSizeInBytes(IB, ZB, TB);
        let GB = new Uint8Array(oB);
        if (!BB.transcodeImage(GB, IB, ZB, TB, 1, 0)) return null;
        if (JB) {
          GB = function(BB, IB, ZB, TB) {
            const JB = new Uint16Array(4),
              oB = new Uint16Array(ZB * TB),
              GB = ZB / 4,
              vB = TB / 4;
            for (let kB = 0; kB < vB; kB++)
              for (let TB = 0; TB < GB; TB++) {
                const vB = IB + 8 * (kB * GB + TB);
                JB[0] = BB[vB] | BB[vB + 1] << 8, JB[1] = BB[vB + 2] | BB[vB + 3] << 8, JB[2] = (2 * (31 & JB[0]) + 1 * (31 & JB[1])) / 3 | (2 * (2016 & JB[0]) + 1 * (2016 & JB[1])) / 3 & 2016 | (2 * (63488 & JB[0]) + 1 * (63488 & JB[1])) / 3 & 63488, JB[3] = (2 * (31 & JB[1]) + 1 * (31 & JB[0])) / 3 | (2 * (2016 & JB[1]) + 1 * (2016 & JB[0])) / 3 & 2016 | (2 * (63488 & JB[1]) + 1 * (63488 & JB[0])) / 3 & 63488;
                for (let IB = 0; IB < 4; IB++) {
                  const GB = BB[vB + 4 + IB];
                  let cB = (4 * kB + IB) * ZB + 4 * TB;
                  oB[cB++] = JB[3 & GB], oB[cB++] = JB[GB >> 2 & 3], oB[cB++] = JB[GB >> 4 & 3], oB[cB] = JB[GB >> 6 & 3]
                }
              }
            return oB
          }(GB, 0, BB.getImageWidth(IB, ZB) + 3 & -4, BB.getImageHeight(IB, ZB) + 3 & -4)
        }
        return GB
      }
      onmessage = hB => {
        if ("init" === hB.data.action) {
          if (hB.data.url) try {
            importScripts(hB.data.url)
          } catch (zB) {
            postMessage({
              action: "error",
              error: zB
            })
          }
          cB || (cB = BASIS({
            wasmBinary: hB.data.wasmBinary
          })), null !== cB && cB.then((BB => {
            BASIS = BB, BB.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === hB.data.action) {
          const cB = hB.data.config,
            zB = hB.data.imageData,
            FB = new BASIS.BasisFile(zB),
            NB = function(BB) {
              const IB = BB.getHasAlpha(),
                ZB = BB.getNumImages(),
                TB = [];
              for (let JB = 0; JB < ZB; JB++) {
                const IB = {
                    levels: []
                  },
                  ZB = BB.getNumLevels(JB);
                for (let TB = 0; TB < ZB; TB++) {
                  const ZB = {
                    width: BB.getImageWidth(JB, TB),
                    height: BB.getImageHeight(JB, TB)
                  };
                  IB.levels.push(ZB)
                }
                TB.push(IB)
              }
              return {
                hasAlpha: IB,
                images: TB
              }
            }(FB);
          let gB = hB.data.ignoreSupportedFormats ? null : function(cB, nB) {
              let hB = null;
              cB.supportedCompressionFormats && (hB = cB.supportedCompressionFormats.astc ? vB : cB.supportedCompressionFormats.bc7 ? JB : cB.supportedCompressionFormats.s3tc ? nB.hasAlpha ? TB : ZB : cB.supportedCompressionFormats.pvrtc ? nB.hasAlpha ? GB : oB : cB.supportedCompressionFormats.etc2 ? IB : cB.supportedCompressionFormats.etc1 ? BB : kB);
              return hB
            }(hB.data.config, NB),
            qB = !1;
          null === gB && (qB = !0, gB = NB.hasAlpha ? TB : ZB);
          let yB = !0;
          FB.startTranscoding() || (yB = !1);
          const UB = [];
          for (let BB = 0; BB < NB.images.length && yB; BB++) {
            const IB = NB.images[BB];
            if (void 0 === cB.loadSingleImage || cB.loadSingleImage === BB) {
              let ZB = IB.levels.length;
              !1 === cB.loadMipmapLevels && (ZB = 1);
              for (let TB = 0; TB < ZB; TB++) {
                const ZB = IB.levels[TB],
                  JB = nB(FB, BB, TB, gB, qB);
                if (!JB) {
                  yB = !1;
                  break
                }
                ZB.transcodedPixels = JB, UB.push(ZB.transcodedPixels.buffer)
              }
            }
          }
          FB.close(), FB.delete(), qB && (gB = -1), yB ? postMessage({
            action: "transcode",
            success: yB,
            id: hB.data.id,
            fileInfo: NB,
            format: gB
          }, UB) : postMessage({
            action: "transcode",
            success: yB,
            id: hB.data.id
          })
        }
      }
    }! function(BB) {
      BB[BB.cTFETC1 = 0] = "cTFETC1", BB[BB.cTFETC2 = 1] = "cTFETC2", BB[BB.cTFBC1 = 2] = "cTFBC1", BB[BB.cTFBC3 = 3] = "cTFBC3", BB[BB.cTFBC4 = 4] = "cTFBC4", BB[BB.cTFBC5 = 5] = "cTFBC5", BB[BB.cTFBC7 = 6] = "cTFBC7", BB[BB.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", BB[BB.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", BB[BB.cTFASTC_4x4 = 10] = "cTFASTC_4x4", BB[BB.cTFATC_RGB = 11] = "cTFATC_RGB", BB[BB.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", BB[BB.cTFRGBA32 = 13] = "cTFRGBA32", BB[BB.cTFRGB565 = 14] = "cTFRGB565", BB[BB.cTFBGR565 = 15] = "cTFBGR565", BB[BB.cTFRGBA4444 = 16] = "cTFRGBA4444", BB[BB.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", BB[BB.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", BB[BB.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", BB[BB.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", BB[BB.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(TB || (TB = {}));
    const cB = {
      JSModuleURL: `${JB.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${JB.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let nB = null,
      hB = null,
      zB = 0;
    const FB = async () => (nB || (nB = new Promise(((BB, IB) => {
      hB ? BB(hB) : JB.j.LoadFileAsync(JB.j.GetBabylonScriptURL(cB.WasmModuleURL)).then((ZB => {
        if ("function" !== typeof URL) return IB("Basis transcoder requires an environment with a URL constructor");
        const TB = URL.createObjectURL(new Blob([`(${kB})()`], {
          type: "application/javascript"
        }));
        hB = new Worker(TB), async function(BB, IB, ZB) {
          return await new Promise(((TB, oB) => {
            const GB = IB => {
              "init" === IB.data.action ? (BB.removeEventListener("message", GB), TB(BB)) : "error" === IB.data.action && oB(IB.data.error || "error initializing worker")
            };
            BB.addEventListener("message", GB), BB.postMessage({
              action: "init",
              url: ZB ? JB.j.GetBabylonScriptURL(ZB) : void 0,
              wasmBinary: IB
            }, [IB])
          }))
        }(hB, ZB, cB.JSModuleURL).then(BB, IB)
      })).catch(IB)
    }))), await nB), NB = async (BB, IB) => {
      const ZB = BB instanceof ArrayBuffer ? new Uint8Array(BB) : BB;
      return await new Promise(((BB, TB) => {
        FB().then((() => {
          const JB = zB++,
            oB = IB => {
              "transcode" === IB.data.action && IB.data.id === JB && (hB.removeEventListener("message", oB), IB.data.success ? BB(IB.data) : TB("Transcode is not supported on this device"))
            };
          hB.addEventListener("message", oB);
          const GB = new Uint8Array(ZB.byteLength);
          GB.set(new Uint8Array(ZB.buffer, ZB.byteOffset, ZB.byteLength)), hB.postMessage({
            action: "transcode",
            id: JB,
            imageData: GB,
            config: IB,
            ignoreSupportedFormats: false
          }, [GB.buffer])
        }), (BB => {
          TB(BB)
        }))
      }))
    }, gB = (BB, IB) => {
      let ZB = IB._gl?.TEXTURE_2D;
      BB.isCube && (ZB = IB._gl?.TEXTURE_CUBE_MAP), IB._bindTextureDirectly(ZB, BB, !0)
    }, qB = (BB, IB) => {
      const ZB = BB.PN();
      for (let JB = 0; JB < IB.fileInfo.images.length; JB++) {
        const kB = IB.fileInfo.images[JB].levels[0];
        if (BB._invertVScale = BB.invertY, -1 === IB.format || IB.format === TB.cTFRGB565)
          if (BB.type = 10, BB.format = 4, !ZB._features.basisNeedsPOT || Math.log2(kB.width) % 1 === 0 && Math.log2(kB.height) % 1 === 0) BB._invertVScale = !BB.invertY, BB.width = kB.width + 3 & -4, BB.height = kB.height + 3 & -4, BB.samplingMode = 2, gB(BB, ZB), ZB._uploadDataToTextureDirectly(BB, new Uint16Array(kB.transcodedPixels.buffer), JB, 0, 4, !0);
          else {
            const IB = new vB.b(ZB, 2);
            BB._invertVScale = BB.invertY, IB.type = 10, IB.format = 4, IB.width = kB.width + 3 & -4, IB.height = kB.height + 3 & -4, gB(IB, ZB), ZB._uploadDataToTextureDirectly(IB, new Uint16Array(kB.transcodedPixels.buffer), JB, 0, 4, !0), ZB._rescaleTexture(IB, BB, ZB.scenes[0], ZB._getInternalFormat(4), (() => {
              ZB._releaseTexture(IB), gB(BB, ZB)
            }))
          }
        else {
          BB.width = kB.width, BB.height = kB.height, BB.generateMipMaps = IB.fileInfo.images[JB].levels.length > 1;
          const TB = yB.GetInternalFormatFromBasisFormat(IB.format, ZB);
          BB.format = TB, gB(BB, ZB);
          const vB = IB.fileInfo.images[JB].levels;
          for (let IB = 0; IB < vB.length; IB++) {
            const oB = vB[IB];
            ZB._uploadCompressedDataToTextureDirectly(BB, TB, oB.width, oB.height, oB.transcodedPixels, JB, IB)
          }!ZB._features.basisNeedsPOT || Math.log2(BB.width) % 1 === 0 && Math.log2(BB.height) % 1 === 0 || (oB.d.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), BB._cachedWrapU = GB.e.CLAMP_ADDRESSMODE, BB._cachedWrapV = GB.e.CLAMP_ADDRESSMODE)
        }
      }
    }, yB = {
      JSModuleURL: cB.JSModuleURL,
      WasmModuleURL: cB.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (BB, IB) => {
        let ZB;
        switch (BB) {
          case TB.cTFETC1:
            ZB = 36196;
            break;
          case TB.cTFBC1:
            ZB = 33776;
            break;
          case TB.cTFBC4:
            ZB = 33779;
            break;
          case TB.cTFASTC_4x4:
            ZB = 37808;
            break;
          case TB.cTFETC2:
            ZB = 37496;
            break;
          case TB.cTFBC7:
            ZB = 36492
        }
        if (void 0 === ZB) throw "The chosen Basis transcoder format is not currently supported";
        return ZB
      },
      TranscodeAsync: NB,
      LoadTextureFromTranscodeResult: qB
    };
    class UB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, IB, ZB, TB, oB) {
        if (Array.isArray(BB)) return;
        const GB = IB.PN().getCaps(),
          vB = {
            supportedCompressionFormats: {
              etc1: !!GB.etc1,
              s3tc: !!GB.s3tc,
              pvrtc: !!GB.pvrtc,
              etc2: !!GB.etc2,
              astc: !!GB.astc,
              bc7: !!GB.bptc
            }
          };
        NB(BB, vB).then((BB => {
          const ZB = BB.fileInfo.images[0].levels.length > 1 && IB.generateMipMaps;
          qB(IB, BB), IB.PN()._setCubeMapTextureParams(IB, ZB), IB.isReady = !0, IB.onLoadedObservable.notifyObservers(IB), IB.onLoadedObservable.clear(), TB && TB()
        })).catch((BB => {
          JB.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), IB.isReady = !0, oB && oB(BB)
        }))
      }
      loadData(BB, IB, ZB) {
        const TB = IB.PN().getCaps(),
          oB = {
            supportedCompressionFormats: {
              etc1: !!TB.etc1,
              s3tc: !!TB.s3tc,
              pvrtc: !!TB.pvrtc,
              etc2: !!TB.etc2,
              astc: !!TB.astc,
              bc7: !!TB.bptc
            }
          };
        NB(BB, oB).then((BB => {
          const TB = BB.fileInfo.images[0].levels[0],
            JB = BB.fileInfo.images[0].levels.length > 1 && IB.generateMipMaps;
          ZB(TB.width, TB.height, JB, -1 !== BB.format, (() => {
            qB(IB, BB)
          }))
        })).catch((BB => {
          JB.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), JB.j.Warn(`Failed to transcode Basis file: ${BB}`), ZB(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);