export const id = 628;
export const ids = [628];
export const modules = {
  53968: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      _BasisTextureLoader: () => kW
    });
    var mW, EW = OW(41620),
      NW = OW(39911),
      PW = OW(41992),
      LW = OW(41371);

    function cW() {
      const WW = 0,
        iW = 1,
        OW = 2,
        mW = 3,
        EW = 6,
        NW = 8,
        PW = 9,
        LW = 10,
        cW = 14;
      let wW = null;

      function tW(WW, iW, OW, mW, EW) {
        const NW = WW.getImageTranscodedSizeInBytes(iW, OW, mW);
        let PW = new Uint8Array(NW);
        if (!WW.transcodeImage(PW, iW, OW, mW, 1, 0)) return null;
        if (EW) {
          PW = function(WW, iW, OW, mW) {
            const EW = new Uint16Array(4),
              NW = new Uint16Array(OW * mW),
              PW = OW / 4,
              LW = mW / 4;
            for (let cW = 0; cW < LW; cW++)
              for (let mW = 0; mW < PW; mW++) {
                const LW = iW + 8 * (cW * PW + mW);
                EW[0] = WW[LW] | WW[LW + 1] << 8, EW[1] = WW[LW + 2] | WW[LW + 3] << 8, EW[2] = (2 * (31 & EW[0]) + 1 * (31 & EW[1])) / 3 | (2 * (2016 & EW[0]) + 1 * (2016 & EW[1])) / 3 & 2016 | (2 * (63488 & EW[0]) + 1 * (63488 & EW[1])) / 3 & 63488, EW[3] = (2 * (31 & EW[1]) + 1 * (31 & EW[0])) / 3 | (2 * (2016 & EW[1]) + 1 * (2016 & EW[0])) / 3 & 2016 | (2 * (63488 & EW[1]) + 1 * (63488 & EW[0])) / 3 & 63488;
                for (let iW = 0; iW < 4; iW++) {
                  const PW = WW[LW + 4 + iW];
                  let wW = (4 * cW + iW) * OW + 4 * mW;
                  NW[wW++] = EW[3 & PW], NW[wW++] = EW[PW >> 2 & 3], NW[wW++] = EW[PW >> 4 & 3], NW[wW] = EW[PW >> 6 & 3]
                }
              }
            return NW
          }(PW, 0, WW.getImageWidth(iW, OW) + 3 & -4, WW.getImageHeight(iW, OW) + 3 & -4)
        }
        return PW
      }
      onmessage = ZW => {
        if ("init" === ZW.data.action) {
          if (ZW.data.url) try {
            importScripts(ZW.data.url)
          } catch (xW) {
            postMessage({
              action: "error",
              error: xW
            })
          }
          wW || (wW = BASIS({
            wasmBinary: ZW.data.wasmBinary
          })), null !== wW && wW.then((WW => {
            BASIS = WW, WW.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === ZW.data.action) {
          const wW = ZW.data.config,
            xW = ZW.data.imageData,
            lW = new BASIS.BasisFile(xW),
            AW = function(WW) {
              const iW = WW.getHasAlpha(),
                OW = WW.getNumImages(),
                mW = [];
              for (let EW = 0; EW < OW; EW++) {
                const iW = {
                    levels: []
                  },
                  OW = WW.getNumLevels(EW);
                for (let mW = 0; mW < OW; mW++) {
                  const OW = {
                    width: WW.getImageWidth(EW, mW),
                    height: WW.getImageHeight(EW, mW)
                  };
                  iW.levels.push(OW)
                }
                mW.push(iW)
              }
              return {
                hasAlpha: iW,
                images: mW
              }
            }(lW);
          let bW = ZW.data.ignoreSupportedFormats ? null : function(wW, tW) {
              let ZW = null;
              wW.supportedCompressionFormats && (ZW = wW.supportedCompressionFormats.astc ? LW : wW.supportedCompressionFormats.bc7 ? EW : wW.supportedCompressionFormats.s3tc ? tW.hasAlpha ? mW : OW : wW.supportedCompressionFormats.pvrtc ? tW.hasAlpha ? PW : NW : wW.supportedCompressionFormats.etc2 ? iW : wW.supportedCompressionFormats.etc1 ? WW : cW);
              return ZW
            }(ZW.data.config, AW),
            jW = !1;
          null === bW && (jW = !0, bW = AW.hasAlpha ? mW : OW);
          let UW = !0;
          lW.startTranscoding() || (UW = !1);
          const kW = [];
          for (let WW = 0; WW < AW.images.length && UW; WW++) {
            const iW = AW.images[WW];
            if (void 0 === wW.loadSingleImage || wW.loadSingleImage === WW) {
              let OW = iW.levels.length;
              !1 === wW.loadMipmapLevels && (OW = 1);
              for (let mW = 0; mW < OW; mW++) {
                const OW = iW.levels[mW],
                  EW = tW(lW, WW, mW, bW, jW);
                if (!EW) {
                  UW = !1;
                  break
                }
                OW.transcodedPixels = EW, kW.push(OW.transcodedPixels.buffer)
              }
            }
          }
          lW.close(), lW.delete(), jW && (bW = -1), UW ? postMessage({
            action: "transcode",
            success: UW,
            id: ZW.data.id,
            fileInfo: AW,
            format: bW
          }, kW) : postMessage({
            action: "transcode",
            success: UW,
            id: ZW.data.id
          })
        }
      }
    }! function(WW) {
      WW[WW.cTFETC1 = 0] = "cTFETC1", WW[WW.cTFETC2 = 1] = "cTFETC2", WW[WW.cTFBC1 = 2] = "cTFBC1", WW[WW.cTFBC3 = 3] = "cTFBC3", WW[WW.cTFBC4 = 4] = "cTFBC4", WW[WW.cTFBC5 = 5] = "cTFBC5", WW[WW.cTFBC7 = 6] = "cTFBC7", WW[WW.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", WW[WW.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", WW[WW.cTFASTC_4x4 = 10] = "cTFASTC_4x4", WW[WW.cTFATC_RGB = 11] = "cTFATC_RGB", WW[WW.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", WW[WW.cTFRGBA32 = 13] = "cTFRGBA32", WW[WW.cTFRGB565 = 14] = "cTFRGB565", WW[WW.cTFBGR565 = 15] = "cTFBGR565", WW[WW.cTFRGBA4444 = 16] = "cTFRGBA4444", WW[WW.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", WW[WW.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", WW[WW.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", WW[WW.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", WW[WW.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(mW || (mW = {}));
    const wW = {
      JSModuleURL: `${EW.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${EW.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let tW = null,
      ZW = null,
      xW = 0;
    const lW = async () => (tW || (tW = new Promise(((WW, iW) => {
      ZW ? WW(ZW) : EW.f.LoadFileAsync(EW.f.GetBabylonScriptURL(wW.WasmModuleURL)).then((OW => {
        if ("function" !== typeof URL) return iW("Basis transcoder requires an environment with a URL constructor");
        const mW = URL.createObjectURL(new Blob([`(${cW})()`], {
          type: "application/javascript"
        }));
        ZW = new Worker(mW), async function(WW, iW, OW) {
          return await new Promise(((mW, NW) => {
            const PW = iW => {
              "init" === iW.data.action ? (WW.removeEventListener("message", PW), mW(WW)) : "error" === iW.data.action && NW(iW.data.error || "error initializing worker")
            };
            WW.addEventListener("message", PW), WW.postMessage({
              action: "init",
              url: OW ? EW.f.GetBabylonScriptURL(OW) : void 0,
              wasmBinary: iW
            }, [iW])
          }))
        }(ZW, OW, wW.JSModuleURL).then(WW, iW)
      })).catch(iW)
    }))), await tW), AW = async (WW, iW) => {
      const OW = WW instanceof ArrayBuffer ? new Uint8Array(WW) : WW;
      return await new Promise(((WW, mW) => {
        lW().then((() => {
          const EW = xW++,
            NW = iW => {
              "transcode" === iW.data.action && iW.data.id === EW && (ZW.removeEventListener("message", NW), iW.data.success ? WW(iW.data) : mW("Transcode is not supported on this device"))
            };
          ZW.addEventListener("message", NW);
          const PW = new Uint8Array(OW.byteLength);
          PW.set(new Uint8Array(OW.buffer, OW.byteOffset, OW.byteLength)), ZW.postMessage({
            action: "transcode",
            id: EW,
            imageData: PW,
            config: iW,
            ignoreSupportedFormats: false
          }, [PW.buffer])
        }), (WW => {
          mW(WW)
        }))
      }))
    }, bW = (WW, iW) => {
      let OW = iW._gl?.TEXTURE_2D;
      WW.isCube && (OW = iW._gl?.TEXTURE_CUBE_MAP), iW._bindTextureDirectly(OW, WW, !0)
    }, jW = (WW, iW) => {
      const OW = WW.VA();
      for (let EW = 0; EW < iW.fileInfo.images.length; EW++) {
        const cW = iW.fileInfo.images[EW].levels[0];
        if (WW._invertVScale = WW.invertY, -1 === iW.format || iW.format === mW.cTFRGB565)
          if (WW.type = 10, WW.format = 4, !OW._features.basisNeedsPOT || Math.log2(cW.width) % 1 === 0 && Math.log2(cW.height) % 1 === 0) WW._invertVScale = !WW.invertY, WW.width = cW.width + 3 & -4, WW.height = cW.height + 3 & -4, WW.samplingMode = 2, bW(WW, OW), OW._uploadDataToTextureDirectly(WW, new Uint16Array(cW.transcodedPixels.buffer), EW, 0, 4, !0);
          else {
            const iW = new LW.e(OW, 2);
            WW._invertVScale = WW.invertY, iW.type = 10, iW.format = 4, iW.width = cW.width + 3 & -4, iW.height = cW.height + 3 & -4, bW(iW, OW), OW._uploadDataToTextureDirectly(iW, new Uint16Array(cW.transcodedPixels.buffer), EW, 0, 4, !0), OW._rescaleTexture(iW, WW, OW.scenes[0], OW._getInternalFormat(4), (() => {
              OW._releaseTexture(iW), bW(WW, OW)
            }))
          }
        else {
          WW.width = cW.width, WW.height = cW.height, WW.generateMipMaps = iW.fileInfo.images[EW].levels.length > 1;
          const mW = UW.GetInternalFormatFromBasisFormat(iW.format, OW);
          WW.format = mW, bW(WW, OW);
          const LW = iW.fileInfo.images[EW].levels;
          for (let iW = 0; iW < LW.length; iW++) {
            const NW = LW[iW];
            OW._uploadCompressedDataToTextureDirectly(WW, mW, NW.width, NW.height, NW.transcodedPixels, EW, iW)
          }!OW._features.basisNeedsPOT || Math.log2(WW.width) % 1 === 0 && Math.log2(WW.height) % 1 === 0 || (NW.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), WW._cachedWrapU = PW.h.CLAMP_ADDRESSMODE, WW._cachedWrapV = PW.h.CLAMP_ADDRESSMODE)
        }
      }
    }, UW = {
      JSModuleURL: wW.JSModuleURL,
      WasmModuleURL: wW.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (WW, iW) => {
        let OW;
        switch (WW) {
          case mW.cTFETC1:
            OW = 36196;
            break;
          case mW.cTFBC1:
            OW = 33776;
            break;
          case mW.cTFBC4:
            OW = 33779;
            break;
          case mW.cTFASTC_4x4:
            OW = 37808;
            break;
          case mW.cTFETC2:
            OW = 37496;
            break;
          case mW.cTFBC7:
            OW = 36492
        }
        if (void 0 === OW) throw "The chosen Basis transcoder format is not currently supported";
        return OW
      },
      TranscodeAsync: AW,
      LoadTextureFromTranscodeResult: jW
    };
    class kW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(WW, iW, OW, mW, NW) {
        if (Array.isArray(WW)) return;
        const PW = iW.VA().getCaps(),
          LW = {
            supportedCompressionFormats: {
              etc1: !!PW.etc1,
              s3tc: !!PW.s3tc,
              pvrtc: !!PW.pvrtc,
              etc2: !!PW.etc2,
              astc: !!PW.astc,
              bc7: !!PW.bptc
            }
          };
        AW(WW, LW).then((WW => {
          const OW = WW.fileInfo.images[0].levels.length > 1 && iW.generateMipMaps;
          jW(iW, WW), iW.VA()._setCubeMapTextureParams(iW, OW), iW.isReady = !0, iW.onLoadedObservable.notifyObservers(iW), iW.onLoadedObservable.clear(), mW && mW()
        })).catch((WW => {
          EW.f.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), iW.isReady = !0, NW && NW(WW)
        }))
      }
      loadData(WW, iW, OW) {
        const mW = iW.VA().getCaps(),
          NW = {
            supportedCompressionFormats: {
              etc1: !!mW.etc1,
              s3tc: !!mW.s3tc,
              pvrtc: !!mW.pvrtc,
              etc2: !!mW.etc2,
              astc: !!mW.astc,
              bc7: !!mW.bptc
            }
          };
        AW(WW, NW).then((WW => {
          const mW = WW.fileInfo.images[0].levels[0],
            EW = WW.fileInfo.images[0].levels.length > 1 && iW.generateMipMaps;
          OW(mW.width, mW.height, EW, -1 !== WW.format, (() => {
            jW(iW, WW)
          }))
        })).catch((WW => {
          EW.f.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), EW.f.Warn(`Failed to transcode Basis file: ${WW}`), OW(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);