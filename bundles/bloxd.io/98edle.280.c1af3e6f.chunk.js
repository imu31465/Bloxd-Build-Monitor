export const id = 280;
export const ids = [280];
export const modules = {
  39232: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      _BasisTextureLoader: () => PW
    });
    var wW, CW = MW(37685),
      zR = MW(36721),
      AW = MW(38069),
      bR = MW(37424);

    function yR() {
      const WW = 0,
        RW = 1,
        MW = 2,
        wW = 3,
        CW = 6,
        zR = 8,
        AW = 9,
        bR = 10,
        yR = 14;
      let NW = null;

      function eW(WW, RW, MW, wW, CW) {
        const zR = WW.getImageTranscodedSizeInBytes(RW, MW, wW);
        let AW = new Uint8Array(zR);
        if (!WW.transcodeImage(AW, RW, MW, wW, 1, 0)) return null;
        if (CW) {
          AW = function(WW, RW, MW, wW) {
            const CW = new Uint16Array(4),
              zR = new Uint16Array(MW * wW),
              AW = MW / 4,
              bR = wW / 4;
            for (let yR = 0; yR < bR; yR++)
              for (let wW = 0; wW < AW; wW++) {
                const bR = RW + 8 * (yR * AW + wW);
                CW[0] = WW[bR] | WW[bR + 1] << 8, CW[1] = WW[bR + 2] | WW[bR + 3] << 8, CW[2] = (2 * (31 & CW[0]) + 1 * (31 & CW[1])) / 3 | (2 * (2016 & CW[0]) + 1 * (2016 & CW[1])) / 3 & 2016 | (2 * (63488 & CW[0]) + 1 * (63488 & CW[1])) / 3 & 63488, CW[3] = (2 * (31 & CW[1]) + 1 * (31 & CW[0])) / 3 | (2 * (2016 & CW[1]) + 1 * (2016 & CW[0])) / 3 & 2016 | (2 * (63488 & CW[1]) + 1 * (63488 & CW[0])) / 3 & 63488;
                for (let RW = 0; RW < 4; RW++) {
                  const AW = WW[bR + 4 + RW];
                  let NW = (4 * yR + RW) * MW + 4 * wW;
                  zR[NW++] = CW[3 & AW], zR[NW++] = CW[AW >> 2 & 3], zR[NW++] = CW[AW >> 4 & 3], zR[NW] = CW[AW >> 6 & 3]
                }
              }
            return zR
          }(AW, 0, WW.getImageWidth(RW, MW) + 3 & -4, WW.getImageHeight(RW, MW) + 3 & -4)
        }
        return AW
      }
      onmessage = BW => {
        if ("init" === BW.data.action) {
          if (BW.data.url) try {
            importScripts(BW.data.url)
          } catch (tR) {
            postMessage({
              action: "error",
              error: tR
            })
          }
          NW || (NW = BASIS({
            wasmBinary: BW.data.wasmBinary
          })), null !== NW && NW.then((WW => {
            BASIS = WW, WW.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === BW.data.action) {
          const NW = BW.data.config,
            tR = BW.data.imageData,
            TW = new BASIS.BasisFile(tR),
            gR = function(WW) {
              const RW = WW.getHasAlpha(),
                MW = WW.getNumImages(),
                wW = [];
              for (let CW = 0; CW < MW; CW++) {
                const RW = {
                    levels: []
                  },
                  MW = WW.getNumLevels(CW);
                for (let wW = 0; wW < MW; wW++) {
                  const MW = {
                    width: WW.getImageWidth(CW, wW),
                    height: WW.getImageHeight(CW, wW)
                  };
                  RW.levels.push(MW)
                }
                wW.push(RW)
              }
              return {
                hasAlpha: RW,
                images: wW
              }
            }(TW);
          let iR = BW.data.ignoreSupportedFormats ? null : function(NW, eW) {
              let BW = null;
              NW.supportedCompressionFormats && (BW = NW.supportedCompressionFormats.astc ? bR : NW.supportedCompressionFormats.bc7 ? CW : NW.supportedCompressionFormats.s3tc ? eW.hasAlpha ? wW : MW : NW.supportedCompressionFormats.pvrtc ? eW.hasAlpha ? AW : zR : NW.supportedCompressionFormats.etc2 ? RW : NW.supportedCompressionFormats.etc1 ? WW : yR);
              return BW
            }(BW.data.config, gR),
            YW = !1;
          null === iR && (YW = !0, iR = gR.hasAlpha ? wW : MW);
          let JW = !0;
          TW.startTranscoding() || (JW = !1);
          const PW = [];
          for (let WW = 0; WW < gR.images.length && JW; WW++) {
            const RW = gR.images[WW];
            if (void 0 === NW.loadSingleImage || NW.loadSingleImage === WW) {
              let MW = RW.levels.length;
              !1 === NW.loadMipmapLevels && (MW = 1);
              for (let wW = 0; wW < MW; wW++) {
                const MW = RW.levels[wW],
                  CW = eW(TW, WW, wW, iR, YW);
                if (!CW) {
                  JW = !1;
                  break
                }
                MW.transcodedPixels = CW, PW.push(MW.transcodedPixels.buffer)
              }
            }
          }
          TW.close(), TW.delete(), YW && (iR = -1), JW ? postMessage({
            action: "transcode",
            success: JW,
            id: BW.data.id,
            fileInfo: gR,
            format: iR
          }, PW) : postMessage({
            action: "transcode",
            success: JW,
            id: BW.data.id
          })
        }
      }
    }! function(WW) {
      WW[WW.cTFETC1 = 0] = "cTFETC1", WW[WW.cTFETC2 = 1] = "cTFETC2", WW[WW.cTFBC1 = 2] = "cTFBC1", WW[WW.cTFBC3 = 3] = "cTFBC3", WW[WW.cTFBC4 = 4] = "cTFBC4", WW[WW.cTFBC5 = 5] = "cTFBC5", WW[WW.cTFBC7 = 6] = "cTFBC7", WW[WW.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", WW[WW.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", WW[WW.cTFASTC_4x4 = 10] = "cTFASTC_4x4", WW[WW.cTFATC_RGB = 11] = "cTFATC_RGB", WW[WW.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", WW[WW.cTFRGBA32 = 13] = "cTFRGBA32", WW[WW.cTFRGB565 = 14] = "cTFRGB565", WW[WW.cTFBGR565 = 15] = "cTFBGR565", WW[WW.cTFRGBA4444 = 16] = "cTFRGBA4444", WW[WW.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", WW[WW.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", WW[WW.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", WW[WW.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", WW[WW.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(wW || (wW = {}));
    const NW = {
      JSModuleURL: `${CW.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${CW.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let eW = null,
      BW = null,
      tR = 0;
    const TW = async () => (eW || (eW = new Promise(((WW, RW) => {
      BW ? WW(BW) : CW.j.LoadFileAsync(CW.j.GetBabylonScriptURL(NW.WasmModuleURL)).then((MW => {
        if ("function" !== typeof URL) return RW("Basis transcoder requires an environment with a URL constructor");
        const wW = URL.createObjectURL(new Blob([`(${yR})()`], {
          type: "application/javascript"
        }));
        BW = new Worker(wW), async function(WW, RW, MW) {
          return await new Promise(((wW, zR) => {
            const AW = RW => {
              "init" === RW.data.action ? (WW.removeEventListener("message", AW), wW(WW)) : "error" === RW.data.action && zR(RW.data.error || "error initializing worker")
            };
            WW.addEventListener("message", AW), WW.postMessage({
              action: "init",
              url: MW ? CW.j.GetBabylonScriptURL(MW) : void 0,
              wasmBinary: RW
            }, [RW])
          }))
        }(BW, MW, NW.JSModuleURL).then(WW, RW)
      })).catch(RW)
    }))), await eW), gR = async (WW, RW) => {
      const MW = WW instanceof ArrayBuffer ? new Uint8Array(WW) : WW;
      return await new Promise(((WW, wW) => {
        TW().then((() => {
          const CW = tR++,
            zR = RW => {
              "transcode" === RW.data.action && RW.data.id === CW && (BW.removeEventListener("message", zR), RW.data.success ? WW(RW.data) : wW("Transcode is not supported on this device"))
            };
          BW.addEventListener("message", zR);
          const AW = new Uint8Array(MW.byteLength);
          AW.set(new Uint8Array(MW.buffer, MW.byteOffset, MW.byteLength)), BW.postMessage({
            action: "transcode",
            id: CW,
            imageData: AW,
            config: RW,
            ignoreSupportedFormats: false
          }, [AW.buffer])
        }), (WW => {
          wW(WW)
        }))
      }))
    }, iR = (WW, RW) => {
      let MW = RW._gl?.TEXTURE_2D;
      WW.isCube && (MW = RW._gl?.TEXTURE_CUBE_MAP), RW._bindTextureDirectly(MW, WW, !0)
    }, YW = (WW, RW) => {
      const MW = WW.mC();
      for (let CW = 0; CW < RW.fileInfo.images.length; CW++) {
        const yR = RW.fileInfo.images[CW].levels[0];
        if (WW._invertVScale = WW.invertY, -1 === RW.format || RW.format === wW.cTFRGB565)
          if (WW.type = 10, WW.format = 4, !MW._features.basisNeedsPOT || Math.log2(yR.width) % 1 === 0 && Math.log2(yR.height) % 1 === 0) WW._invertVScale = !WW.invertY, WW.width = yR.width + 3 & -4, WW.height = yR.height + 3 & -4, WW.samplingMode = 2, iR(WW, MW), MW._uploadDataToTextureDirectly(WW, new Uint16Array(yR.transcodedPixels.buffer), CW, 0, 4, !0);
          else {
            const RW = new bR.e(MW, 2);
            WW._invertVScale = WW.invertY, RW.type = 10, RW.format = 4, RW.width = yR.width + 3 & -4, RW.height = yR.height + 3 & -4, iR(RW, MW), MW._uploadDataToTextureDirectly(RW, new Uint16Array(yR.transcodedPixels.buffer), CW, 0, 4, !0), MW._rescaleTexture(RW, WW, MW.scenes[0], MW._getInternalFormat(4), (() => {
              MW._releaseTexture(RW), iR(WW, MW)
            }))
          }
        else {
          WW.width = yR.width, WW.height = yR.height, WW.generateMipMaps = RW.fileInfo.images[CW].levels.length > 1;
          const wW = JW.GetInternalFormatFromBasisFormat(RW.format, MW);
          WW.format = wW, iR(WW, MW);
          const bR = RW.fileInfo.images[CW].levels;
          for (let RW = 0; RW < bR.length; RW++) {
            const zR = bR[RW];
            MW._uploadCompressedDataToTextureDirectly(WW, wW, zR.width, zR.height, zR.transcodedPixels, CW, RW)
          }!MW._features.basisNeedsPOT || Math.log2(WW.width) % 1 === 0 && Math.log2(WW.height) % 1 === 0 || (zR.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), WW._cachedWrapU = AW.d.CLAMP_ADDRESSMODE, WW._cachedWrapV = AW.d.CLAMP_ADDRESSMODE)
        }
      }
    }, JW = {
      JSModuleURL: NW.JSModuleURL,
      WasmModuleURL: NW.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (WW, RW) => {
        let MW;
        switch (WW) {
          case wW.cTFETC1:
            MW = 36196;
            break;
          case wW.cTFBC1:
            MW = 33776;
            break;
          case wW.cTFBC4:
            MW = 33779;
            break;
          case wW.cTFASTC_4x4:
            MW = 37808;
            break;
          case wW.cTFETC2:
            MW = 37496;
            break;
          case wW.cTFBC7:
            MW = 36492
        }
        if (void 0 === MW) throw "The chosen Basis transcoder format is not currently supported";
        return MW
      },
      TranscodeAsync: gR,
      LoadTextureFromTranscodeResult: YW
    };
    class PW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(WW, RW, MW, wW, zR) {
        if (Array.isArray(WW)) return;
        const AW = RW.mC().getCaps(),
          bR = {
            supportedCompressionFormats: {
              etc1: !!AW.etc1,
              s3tc: !!AW.s3tc,
              pvrtc: !!AW.pvrtc,
              etc2: !!AW.etc2,
              astc: !!AW.astc,
              bc7: !!AW.bptc
            }
          };
        gR(WW, bR).then((WW => {
          const MW = WW.fileInfo.images[0].levels.length > 1 && RW.generateMipMaps;
          YW(RW, WW), RW.mC()._setCubeMapTextureParams(RW, MW), RW.isReady = !0, RW.onLoadedObservable.notifyObservers(RW), RW.onLoadedObservable.clear(), wW && wW()
        })).catch((WW => {
          CW.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), RW.isReady = !0, zR && zR(WW)
        }))
      }
      loadData(WW, RW, MW) {
        const wW = RW.mC().getCaps(),
          zR = {
            supportedCompressionFormats: {
              etc1: !!wW.etc1,
              s3tc: !!wW.s3tc,
              pvrtc: !!wW.pvrtc,
              etc2: !!wW.etc2,
              astc: !!wW.astc,
              bc7: !!wW.bptc
            }
          };
        gR(WW, zR).then((WW => {
          const wW = WW.fileInfo.images[0].levels[0],
            CW = WW.fileInfo.images[0].levels.length > 1 && RW.generateMipMaps;
          MW(wW.width, wW.height, CW, -1 !== WW.format, (() => {
            YW(RW, WW)
          }))
        })).catch((WW => {
          CW.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), CW.j.Warn(`Failed to transcode Basis file: ${WW}`), MW(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);