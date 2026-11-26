export const id = 619;
export const ids = [619];
export const modules = {
  45258: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      _BasisTextureLoader: () => xH
    });
    var AH, rH = LH(41387),
      SH = LH(39595),
      hH = LH(41777),
      tH = LH(41122);

    function zH() {
      const HH = 0,
        BH = 1,
        LH = 2,
        AH = 3,
        rH = 6,
        SH = 8,
        hH = 9,
        tH = 10,
        zH = 14;
      let CH = null;

      function EH(HH, BH, LH, AH, rH) {
        const SH = HH.getImageTranscodedSizeInBytes(BH, LH, AH);
        let hH = new Uint8Array(SH);
        if (!HH.transcodeImage(hH, BH, LH, AH, 1, 0)) return null;
        if (rH) {
          hH = function(HH, BH, LH, AH) {
            const rH = new Uint16Array(4),
              SH = new Uint16Array(LH * AH),
              hH = LH / 4,
              tH = AH / 4;
            for (let zH = 0; zH < tH; zH++)
              for (let AH = 0; AH < hH; AH++) {
                const tH = BH + 8 * (zH * hH + AH);
                rH[0] = HH[tH] | HH[tH + 1] << 8, rH[1] = HH[tH + 2] | HH[tH + 3] << 8, rH[2] = (2 * (31 & rH[0]) + 1 * (31 & rH[1])) / 3 | (2 * (2016 & rH[0]) + 1 * (2016 & rH[1])) / 3 & 2016 | (2 * (63488 & rH[0]) + 1 * (63488 & rH[1])) / 3 & 63488, rH[3] = (2 * (31 & rH[1]) + 1 * (31 & rH[0])) / 3 | (2 * (2016 & rH[1]) + 1 * (2016 & rH[0])) / 3 & 2016 | (2 * (63488 & rH[1]) + 1 * (63488 & rH[0])) / 3 & 63488;
                for (let BH = 0; BH < 4; BH++) {
                  const hH = HH[tH + 4 + BH];
                  let CH = (4 * zH + BH) * LH + 4 * AH;
                  SH[CH++] = rH[3 & hH], SH[CH++] = rH[hH >> 2 & 3], SH[CH++] = rH[hH >> 4 & 3], SH[CH] = rH[hH >> 6 & 3]
                }
              }
            return SH
          }(hH, 0, HH.getImageWidth(BH, LH) + 3 & -4, HH.getImageHeight(BH, LH) + 3 & -4)
        }
        return hH
      }
      onmessage = XH => {
        if ("init" === XH.data.action) {
          if (XH.data.url) try {
            importScripts(XH.data.url)
          } catch (GH) {
            postMessage({
              action: "error",
              error: GH
            })
          }
          CH || (CH = BASIS({
            wasmBinary: XH.data.wasmBinary
          })), null !== CH && CH.then((HH => {
            BASIS = HH, HH.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === XH.data.action) {
          const CH = XH.data.config,
            GH = XH.data.imageData,
            YH = new BASIS.BasisFile(GH),
            uH = function(HH) {
              const BH = HH.getHasAlpha(),
                LH = HH.getNumImages(),
                AH = [];
              for (let rH = 0; rH < LH; rH++) {
                const BH = {
                    levels: []
                  },
                  LH = HH.getNumLevels(rH);
                for (let AH = 0; AH < LH; AH++) {
                  const LH = {
                    width: HH.getImageWidth(rH, AH),
                    height: HH.getImageHeight(rH, AH)
                  };
                  BH.levels.push(LH)
                }
                AH.push(BH)
              }
              return {
                hasAlpha: BH,
                images: AH
              }
            }(YH);
          let QH = XH.data.ignoreSupportedFormats ? null : function(CH, EH) {
              let XH = null;
              CH.supportedCompressionFormats && (XH = CH.supportedCompressionFormats.astc ? tH : CH.supportedCompressionFormats.bc7 ? rH : CH.supportedCompressionFormats.s3tc ? EH.hasAlpha ? AH : LH : CH.supportedCompressionFormats.pvrtc ? EH.hasAlpha ? hH : SH : CH.supportedCompressionFormats.etc2 ? BH : CH.supportedCompressionFormats.etc1 ? HH : zH);
              return XH
            }(XH.data.config, uH),
            WH = !1;
          null === QH && (WH = !0, QH = uH.hasAlpha ? AH : LH);
          let MH = !0;
          YH.startTranscoding() || (MH = !1);
          const xH = [];
          for (let HH = 0; HH < uH.images.length && MH; HH++) {
            const BH = uH.images[HH];
            if (void 0 === CH.loadSingleImage || CH.loadSingleImage === HH) {
              let LH = BH.levels.length;
              !1 === CH.loadMipmapLevels && (LH = 1);
              for (let AH = 0; AH < LH; AH++) {
                const LH = BH.levels[AH],
                  rH = EH(YH, HH, AH, QH, WH);
                if (!rH) {
                  MH = !1;
                  break
                }
                LH.transcodedPixels = rH, xH.push(LH.transcodedPixels.buffer)
              }
            }
          }
          YH.close(), YH.delete(), WH && (QH = -1), MH ? postMessage({
            action: "transcode",
            success: MH,
            id: XH.data.id,
            fileInfo: uH,
            format: QH
          }, xH) : postMessage({
            action: "transcode",
            success: MH,
            id: XH.data.id
          })
        }
      }
    }! function(HH) {
      HH[HH.cTFETC1 = 0] = "cTFETC1", HH[HH.cTFETC2 = 1] = "cTFETC2", HH[HH.cTFBC1 = 2] = "cTFBC1", HH[HH.cTFBC3 = 3] = "cTFBC3", HH[HH.cTFBC4 = 4] = "cTFBC4", HH[HH.cTFBC5 = 5] = "cTFBC5", HH[HH.cTFBC7 = 6] = "cTFBC7", HH[HH.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", HH[HH.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", HH[HH.cTFASTC_4x4 = 10] = "cTFASTC_4x4", HH[HH.cTFATC_RGB = 11] = "cTFATC_RGB", HH[HH.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", HH[HH.cTFRGBA32 = 13] = "cTFRGBA32", HH[HH.cTFRGB565 = 14] = "cTFRGB565", HH[HH.cTFBGR565 = 15] = "cTFBGR565", HH[HH.cTFRGBA4444 = 16] = "cTFRGBA4444", HH[HH.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", HH[HH.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", HH[HH.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", HH[HH.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", HH[HH.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(AH || (AH = {}));
    const CH = {
      JSModuleURL: `${rH.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${rH.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let EH = null,
      XH = null,
      GH = 0;
    const YH = async () => (EH || (EH = new Promise(((HH, BH) => {
      XH ? HH(XH) : rH.i.LoadFileAsync(rH.i.GetBabylonScriptURL(CH.WasmModuleURL)).then((LH => {
        if ("function" !== typeof URL) return BH("Basis transcoder requires an environment with a URL constructor");
        const AH = URL.createObjectURL(new Blob([`(${zH})()`], {
          type: "application/javascript"
        }));
        XH = new Worker(AH), async function(HH, BH, LH) {
          return await new Promise(((AH, SH) => {
            const hH = BH => {
              "init" === BH.data.action ? (HH.removeEventListener("message", hH), AH(HH)) : "error" === BH.data.action && SH(BH.data.error || "error initializing worker")
            };
            HH.addEventListener("message", hH), HH.postMessage({
              action: "init",
              url: LH ? rH.i.GetBabylonScriptURL(LH) : void 0,
              wasmBinary: BH
            }, [BH])
          }))
        }(XH, LH, CH.JSModuleURL).then(HH, BH)
      })).catch(BH)
    }))), await EH), uH = async (HH, BH) => {
      const LH = HH instanceof ArrayBuffer ? new Uint8Array(HH) : HH;
      return await new Promise(((HH, AH) => {
        YH().then((() => {
          const rH = GH++,
            SH = BH => {
              "transcode" === BH.data.action && BH.data.id === rH && (XH.removeEventListener("message", SH), BH.data.success ? HH(BH.data) : AH("Transcode is not supported on this device"))
            };
          XH.addEventListener("message", SH);
          const hH = new Uint8Array(LH.byteLength);
          hH.set(new Uint8Array(LH.buffer, LH.byteOffset, LH.byteLength)), XH.postMessage({
            action: "transcode",
            id: rH,
            imageData: hH,
            config: BH,
            ignoreSupportedFormats: false
          }, [hH.buffer])
        }), (HH => {
          AH(HH)
        }))
      }))
    }, QH = (HH, BH) => {
      let LH = BH._gl?.TEXTURE_2D;
      HH.isCube && (LH = BH._gl?.TEXTURE_CUBE_MAP), BH._bindTextureDirectly(LH, HH, !0)
    }, WH = (HH, BH) => {
      const LH = HH.Iu();
      for (let rH = 0; rH < BH.fileInfo.images.length; rH++) {
        const zH = BH.fileInfo.images[rH].levels[0];
        if (HH._invertVScale = HH.invertY, -1 === BH.format || BH.format === AH.cTFRGB565)
          if (HH.type = 10, HH.format = 4, !LH._features.basisNeedsPOT || Math.log2(zH.width) % 1 === 0 && Math.log2(zH.height) % 1 === 0) HH._invertVScale = !HH.invertY, HH.width = zH.width + 3 & -4, HH.height = zH.height + 3 & -4, HH.samplingMode = 2, QH(HH, LH), LH._uploadDataToTextureDirectly(HH, new Uint16Array(zH.transcodedPixels.buffer), rH, 0, 4, !0);
          else {
            const BH = new tH.e(LH, 2);
            HH._invertVScale = HH.invertY, BH.type = 10, BH.format = 4, BH.width = zH.width + 3 & -4, BH.height = zH.height + 3 & -4, QH(BH, LH), LH._uploadDataToTextureDirectly(BH, new Uint16Array(zH.transcodedPixels.buffer), rH, 0, 4, !0), LH._rescaleTexture(BH, HH, LH.scenes[0], LH._getInternalFormat(4), (() => {
              LH._releaseTexture(BH), QH(HH, LH)
            }))
          }
        else {
          HH.width = zH.width, HH.height = zH.height, HH.generateMipMaps = BH.fileInfo.images[rH].levels.length > 1;
          const AH = MH.GetInternalFormatFromBasisFormat(BH.format, LH);
          HH.format = AH, QH(HH, LH);
          const tH = BH.fileInfo.images[rH].levels;
          for (let BH = 0; BH < tH.length; BH++) {
            const SH = tH[BH];
            LH._uploadCompressedDataToTextureDirectly(HH, AH, SH.width, SH.height, SH.transcodedPixels, rH, BH)
          }!LH._features.basisNeedsPOT || Math.log2(HH.width) % 1 === 0 && Math.log2(HH.height) % 1 === 0 || (SH.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), HH._cachedWrapU = hH.g.CLAMP_ADDRESSMODE, HH._cachedWrapV = hH.g.CLAMP_ADDRESSMODE)
        }
      }
    }, MH = {
      JSModuleURL: CH.JSModuleURL,
      WasmModuleURL: CH.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (HH, BH) => {
        let LH;
        switch (HH) {
          case AH.cTFETC1:
            LH = 36196;
            break;
          case AH.cTFBC1:
            LH = 33776;
            break;
          case AH.cTFBC4:
            LH = 33779;
            break;
          case AH.cTFASTC_4x4:
            LH = 37808;
            break;
          case AH.cTFETC2:
            LH = 37496;
            break;
          case AH.cTFBC7:
            LH = 36492
        }
        if (void 0 === LH) throw "The chosen Basis transcoder format is not currently supported";
        return LH
      },
      TranscodeAsync: uH,
      LoadTextureFromTranscodeResult: WH
    };
    class xH {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(HH, BH, LH, AH, SH) {
        if (Array.isArray(HH)) return;
        const hH = BH.Iu().getCaps(),
          tH = {
            supportedCompressionFormats: {
              etc1: !!hH.etc1,
              s3tc: !!hH.s3tc,
              pvrtc: !!hH.pvrtc,
              etc2: !!hH.etc2,
              astc: !!hH.astc,
              bc7: !!hH.bptc
            }
          };
        uH(HH, tH).then((HH => {
          const LH = HH.fileInfo.images[0].levels.length > 1 && BH.generateMipMaps;
          WH(BH, HH), BH.Iu()._setCubeMapTextureParams(BH, LH), BH.isReady = !0, BH.onLoadedObservable.notifyObservers(BH), BH.onLoadedObservable.clear(), AH && AH()
        })).catch((HH => {
          rH.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), BH.isReady = !0, SH && SH(HH)
        }))
      }
      loadData(HH, BH, LH) {
        const AH = BH.Iu().getCaps(),
          SH = {
            supportedCompressionFormats: {
              etc1: !!AH.etc1,
              s3tc: !!AH.s3tc,
              pvrtc: !!AH.pvrtc,
              etc2: !!AH.etc2,
              astc: !!AH.astc,
              bc7: !!AH.bptc
            }
          };
        uH(HH, SH).then((HH => {
          const AH = HH.fileInfo.images[0].levels[0],
            rH = HH.fileInfo.images[0].levels.length > 1 && BH.generateMipMaps;
          LH(AH.width, AH.height, rH, -1 !== HH.format, (() => {
            WH(BH, HH)
          }))
        })).catch((HH => {
          rH.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), rH.i.Warn(`Failed to transcode Basis file: ${HH}`), LH(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);