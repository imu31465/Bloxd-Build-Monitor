export const id = 628;
export const ids = [628];
export const modules = {
  53811: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      _BasisTextureLoader: () => UR
    });
    var yR, tR = GR(41616),
      uR = GR(39914),
      ZR = GR(42011),
      qR = GR(41364);

    function iR() {
      const RR = 0,
        JR = 1,
        GR = 2,
        yR = 3,
        tR = 6,
        uR = 8,
        ZR = 9,
        qR = 10,
        iR = 14;
      let fR = null;

      function VR(RR, JR, GR, yR, tR) {
        const uR = RR.getImageTranscodedSizeInBytes(JR, GR, yR);
        let ZR = new Uint8Array(uR);
        if (!RR.transcodeImage(ZR, JR, GR, yR, 1, 0)) return null;
        if (tR) {
          ZR = function(RR, JR, GR, yR) {
            const tR = new Uint16Array(4),
              uR = new Uint16Array(GR * yR),
              ZR = GR / 4,
              qR = yR / 4;
            for (let iR = 0; iR < qR; iR++)
              for (let yR = 0; yR < ZR; yR++) {
                const qR = JR + 8 * (iR * ZR + yR);
                tR[0] = RR[qR] | RR[qR + 1] << 8, tR[1] = RR[qR + 2] | RR[qR + 3] << 8, tR[2] = (2 * (31 & tR[0]) + 1 * (31 & tR[1])) / 3 | (2 * (2016 & tR[0]) + 1 * (2016 & tR[1])) / 3 & 2016 | (2 * (63488 & tR[0]) + 1 * (63488 & tR[1])) / 3 & 63488, tR[3] = (2 * (31 & tR[1]) + 1 * (31 & tR[0])) / 3 | (2 * (2016 & tR[1]) + 1 * (2016 & tR[0])) / 3 & 2016 | (2 * (63488 & tR[1]) + 1 * (63488 & tR[0])) / 3 & 63488;
                for (let JR = 0; JR < 4; JR++) {
                  const ZR = RR[qR + 4 + JR];
                  let fR = (4 * iR + JR) * GR + 4 * yR;
                  uR[fR++] = tR[3 & ZR], uR[fR++] = tR[ZR >> 2 & 3], uR[fR++] = tR[ZR >> 4 & 3], uR[fR] = tR[ZR >> 6 & 3]
                }
              }
            return uR
          }(ZR, 0, RR.getImageWidth(JR, GR) + 3 & -4, RR.getImageHeight(JR, GR) + 3 & -4)
        }
        return ZR
      }
      onmessage = KR => {
        if ("init" === KR.data.action) {
          if (KR.data.url) try {
            importScripts(KR.data.url)
          } catch (wR) {
            postMessage({
              action: "error",
              error: wR
            })
          }
          fR || (fR = BASIS({
            wasmBinary: KR.data.wasmBinary
          })), null !== fR && fR.then((RR => {
            BASIS = RR, RR.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === KR.data.action) {
          const fR = KR.data.config,
            wR = KR.data.imageData,
            rR = new BASIS.BasisFile(wR),
            eR = function(RR) {
              const JR = RR.getHasAlpha(),
                GR = RR.getNumImages(),
                yR = [];
              for (let tR = 0; tR < GR; tR++) {
                const JR = {
                    levels: []
                  },
                  GR = RR.getNumLevels(tR);
                for (let yR = 0; yR < GR; yR++) {
                  const GR = {
                    width: RR.getImageWidth(tR, yR),
                    height: RR.getImageHeight(tR, yR)
                  };
                  JR.levels.push(GR)
                }
                yR.push(JR)
              }
              return {
                hasAlpha: JR,
                images: yR
              }
            }(rR);
          let aR = KR.data.ignoreSupportedFormats ? null : function(fR, VR) {
              let KR = null;
              fR.supportedCompressionFormats && (KR = fR.supportedCompressionFormats.astc ? qR : fR.supportedCompressionFormats.bc7 ? tR : fR.supportedCompressionFormats.s3tc ? VR.hasAlpha ? yR : GR : fR.supportedCompressionFormats.pvrtc ? VR.hasAlpha ? ZR : uR : fR.supportedCompressionFormats.etc2 ? JR : fR.supportedCompressionFormats.etc1 ? RR : iR);
              return KR
            }(KR.data.config, eR),
            LR = !1;
          null === aR && (LR = !0, aR = eR.hasAlpha ? yR : GR);
          let nR = !0;
          rR.startTranscoding() || (nR = !1);
          const UR = [];
          for (let RR = 0; RR < eR.images.length && nR; RR++) {
            const JR = eR.images[RR];
            if (void 0 === fR.loadSingleImage || fR.loadSingleImage === RR) {
              let GR = JR.levels.length;
              !1 === fR.loadMipmapLevels && (GR = 1);
              for (let yR = 0; yR < GR; yR++) {
                const GR = JR.levels[yR],
                  tR = VR(rR, RR, yR, aR, LR);
                if (!tR) {
                  nR = !1;
                  break
                }
                GR.transcodedPixels = tR, UR.push(GR.transcodedPixels.buffer)
              }
            }
          }
          rR.close(), rR.delete(), LR && (aR = -1), nR ? postMessage({
            action: "transcode",
            success: nR,
            id: KR.data.id,
            fileInfo: eR,
            format: aR
          }, UR) : postMessage({
            action: "transcode",
            success: nR,
            id: KR.data.id
          })
        }
      }
    }! function(RR) {
      RR[RR.cTFETC1 = 0] = "cTFETC1", RR[RR.cTFETC2 = 1] = "cTFETC2", RR[RR.cTFBC1 = 2] = "cTFBC1", RR[RR.cTFBC3 = 3] = "cTFBC3", RR[RR.cTFBC4 = 4] = "cTFBC4", RR[RR.cTFBC5 = 5] = "cTFBC5", RR[RR.cTFBC7 = 6] = "cTFBC7", RR[RR.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", RR[RR.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", RR[RR.cTFASTC_4x4 = 10] = "cTFASTC_4x4", RR[RR.cTFATC_RGB = 11] = "cTFATC_RGB", RR[RR.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", RR[RR.cTFRGBA32 = 13] = "cTFRGBA32", RR[RR.cTFRGB565 = 14] = "cTFRGB565", RR[RR.cTFBGR565 = 15] = "cTFBGR565", RR[RR.cTFRGBA4444 = 16] = "cTFRGBA4444", RR[RR.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", RR[RR.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", RR[RR.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", RR[RR.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", RR[RR.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(yR || (yR = {}));
    const fR = {
      JSModuleURL: `${tR.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${tR.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let VR = null,
      KR = null,
      wR = 0;
    const rR = async () => (VR || (VR = new Promise(((RR, JR) => {
      KR ? RR(KR) : tR.h.LoadFileAsync(tR.h.GetBabylonScriptURL(fR.WasmModuleURL)).then((GR => {
        if ("function" !== typeof URL) return JR("Basis transcoder requires an environment with a URL constructor");
        const yR = URL.createObjectURL(new Blob([`(${iR})()`], {
          type: "application/javascript"
        }));
        KR = new Worker(yR), async function(RR, JR, GR) {
          return await new Promise(((yR, uR) => {
            const ZR = JR => {
              "init" === JR.data.action ? (RR.removeEventListener("message", ZR), yR(RR)) : "error" === JR.data.action && uR(JR.data.error || "error initializing worker")
            };
            RR.addEventListener("message", ZR), RR.postMessage({
              action: "init",
              url: GR ? tR.h.GetBabylonScriptURL(GR) : void 0,
              wasmBinary: JR
            }, [JR])
          }))
        }(KR, GR, fR.JSModuleURL).then(RR, JR)
      })).catch(JR)
    }))), await VR), eR = async (RR, JR) => {
      const GR = RR instanceof ArrayBuffer ? new Uint8Array(RR) : RR;
      return await new Promise(((RR, yR) => {
        rR().then((() => {
          const tR = wR++,
            uR = JR => {
              "transcode" === JR.data.action && JR.data.id === tR && (KR.removeEventListener("message", uR), JR.data.success ? RR(JR.data) : yR("Transcode is not supported on this device"))
            };
          KR.addEventListener("message", uR);
          const ZR = new Uint8Array(GR.byteLength);
          ZR.set(new Uint8Array(GR.buffer, GR.byteOffset, GR.byteLength)), KR.postMessage({
            action: "transcode",
            id: tR,
            imageData: ZR,
            config: JR,
            ignoreSupportedFormats: false
          }, [ZR.buffer])
        }), (RR => {
          yR(RR)
        }))
      }))
    }, aR = (RR, JR) => {
      let GR = JR._gl?.TEXTURE_2D;
      RR.isCube && (GR = JR._gl?.TEXTURE_CUBE_MAP), JR._bindTextureDirectly(GR, RR, !0)
    }, LR = (RR, JR) => {
      const GR = RR.ke();
      for (let tR = 0; tR < JR.fileInfo.images.length; tR++) {
        const iR = JR.fileInfo.images[tR].levels[0];
        if (RR._invertVScale = RR.invertY, -1 === JR.format || JR.format === yR.cTFRGB565)
          if (RR.type = 10, RR.format = 4, !GR._features.basisNeedsPOT || Math.log2(iR.width) % 1 === 0 && Math.log2(iR.height) % 1 === 0) RR._invertVScale = !RR.invertY, RR.width = iR.width + 3 & -4, RR.height = iR.height + 3 & -4, RR.samplingMode = 2, aR(RR, GR), GR._uploadDataToTextureDirectly(RR, new Uint16Array(iR.transcodedPixels.buffer), tR, 0, 4, !0);
          else {
            const JR = new qR.b(GR, 2);
            RR._invertVScale = RR.invertY, JR.type = 10, JR.format = 4, JR.width = iR.width + 3 & -4, JR.height = iR.height + 3 & -4, aR(JR, GR), GR._uploadDataToTextureDirectly(JR, new Uint16Array(iR.transcodedPixels.buffer), tR, 0, 4, !0), GR._rescaleTexture(JR, RR, GR.scenes[0], GR._getInternalFormat(4), (() => {
              GR._releaseTexture(JR), aR(RR, GR)
            }))
          }
        else {
          RR.width = iR.width, RR.height = iR.height, RR.generateMipMaps = JR.fileInfo.images[tR].levels.length > 1;
          const yR = nR.GetInternalFormatFromBasisFormat(JR.format, GR);
          RR.format = yR, aR(RR, GR);
          const qR = JR.fileInfo.images[tR].levels;
          for (let JR = 0; JR < qR.length; JR++) {
            const uR = qR[JR];
            GR._uploadCompressedDataToTextureDirectly(RR, yR, uR.width, uR.height, uR.transcodedPixels, tR, JR)
          }!GR._features.basisNeedsPOT || Math.log2(RR.width) % 1 === 0 && Math.log2(RR.height) % 1 === 0 || (uR.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), RR._cachedWrapU = ZR.f.CLAMP_ADDRESSMODE, RR._cachedWrapV = ZR.f.CLAMP_ADDRESSMODE)
        }
      }
    }, nR = {
      JSModuleURL: fR.JSModuleURL,
      WasmModuleURL: fR.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (RR, JR) => {
        let GR;
        switch (RR) {
          case yR.cTFETC1:
            GR = 36196;
            break;
          case yR.cTFBC1:
            GR = 33776;
            break;
          case yR.cTFBC4:
            GR = 33779;
            break;
          case yR.cTFASTC_4x4:
            GR = 37808;
            break;
          case yR.cTFETC2:
            GR = 37496;
            break;
          case yR.cTFBC7:
            GR = 36492
        }
        if (void 0 === GR) throw "The chosen Basis transcoder format is not currently supported";
        return GR
      },
      TranscodeAsync: eR,
      LoadTextureFromTranscodeResult: LR
    };
    class UR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(RR, JR, GR, yR, uR) {
        if (Array.isArray(RR)) return;
        const ZR = JR.ke().getCaps(),
          qR = {
            supportedCompressionFormats: {
              etc1: !!ZR.etc1,
              s3tc: !!ZR.s3tc,
              pvrtc: !!ZR.pvrtc,
              etc2: !!ZR.etc2,
              astc: !!ZR.astc,
              bc7: !!ZR.bptc
            }
          };
        eR(RR, qR).then((RR => {
          const GR = RR.fileInfo.images[0].levels.length > 1 && JR.generateMipMaps;
          LR(JR, RR), JR.ke()._setCubeMapTextureParams(JR, GR), JR.isReady = !0, JR.onLoadedObservable.notifyObservers(JR), JR.onLoadedObservable.clear(), yR && yR()
        })).catch((RR => {
          tR.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), JR.isReady = !0, uR && uR(RR)
        }))
      }
      loadData(RR, JR, GR) {
        const yR = JR.ke().getCaps(),
          uR = {
            supportedCompressionFormats: {
              etc1: !!yR.etc1,
              s3tc: !!yR.s3tc,
              pvrtc: !!yR.pvrtc,
              etc2: !!yR.etc2,
              astc: !!yR.astc,
              bc7: !!yR.bptc
            }
          };
        eR(RR, uR).then((RR => {
          const yR = RR.fileInfo.images[0].levels[0],
            tR = RR.fileInfo.images[0].levels.length > 1 && JR.generateMipMaps;
          GR(yR.width, yR.height, tR, -1 !== RR.format, (() => {
            LR(JR, RR)
          }))
        })).catch((RR => {
          tR.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), tR.h.Warn(`Failed to transcode Basis file: ${RR}`), GR(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);