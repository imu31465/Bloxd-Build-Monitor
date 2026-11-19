export const id = 300;
export const ids = [300];
export const modules = {
  40613: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      _BasisTextureLoader: () => AT
    });
    var iT, zT = IT(38886),
      kT = IT(37660),
      WT = IT(39270),
      XT = IT(38594);

    function BT() {
      const TT = 0,
        oT = 1,
        IT = 2,
        iT = 3,
        zT = 6,
        kT = 8,
        WT = 9,
        XT = 10,
        BT = 14;
      let FT = null;

      function ST(TT, oT, IT, iT, zT) {
        const kT = TT.getImageTranscodedSizeInBytes(oT, IT, iT);
        let WT = new Uint8Array(kT);
        if (!TT.transcodeImage(WT, oT, IT, iT, 1, 0)) return null;
        if (zT) {
          WT = function(TT, oT, IT, iT) {
            const zT = new Uint16Array(4),
              kT = new Uint16Array(IT * iT),
              WT = IT / 4,
              XT = iT / 4;
            for (let BT = 0; BT < XT; BT++)
              for (let iT = 0; iT < WT; iT++) {
                const XT = oT + 8 * (BT * WT + iT);
                zT[0] = TT[XT] | TT[XT + 1] << 8, zT[1] = TT[XT + 2] | TT[XT + 3] << 8, zT[2] = (2 * (31 & zT[0]) + 1 * (31 & zT[1])) / 3 | (2 * (2016 & zT[0]) + 1 * (2016 & zT[1])) / 3 & 2016 | (2 * (63488 & zT[0]) + 1 * (63488 & zT[1])) / 3 & 63488, zT[3] = (2 * (31 & zT[1]) + 1 * (31 & zT[0])) / 3 | (2 * (2016 & zT[1]) + 1 * (2016 & zT[0])) / 3 & 2016 | (2 * (63488 & zT[1]) + 1 * (63488 & zT[0])) / 3 & 63488;
                for (let oT = 0; oT < 4; oT++) {
                  const WT = TT[XT + 4 + oT];
                  let FT = (4 * BT + oT) * IT + 4 * iT;
                  kT[FT++] = zT[3 & WT], kT[FT++] = zT[WT >> 2 & 3], kT[FT++] = zT[WT >> 4 & 3], kT[FT] = zT[WT >> 6 & 3]
                }
              }
            return kT
          }(WT, 0, TT.getImageWidth(oT, IT) + 3 & -4, TT.getImageHeight(oT, IT) + 3 & -4)
        }
        return WT
      }
      onmessage = DT => {
        if ("init" === DT.data.action) {
          if (DT.data.url) try {
            importScripts(DT.data.url)
          } catch (LT) {
            postMessage({
              action: "error",
              error: LT
            })
          }
          FT || (FT = BASIS({
            wasmBinary: DT.data.wasmBinary
          })), null !== FT && FT.then((TT => {
            BASIS = TT, TT.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === DT.data.action) {
          const FT = DT.data.config,
            LT = DT.data.imageData,
            xT = new BASIS.BasisFile(LT),
            cT = function(TT) {
              const oT = TT.getHasAlpha(),
                IT = TT.getNumImages(),
                iT = [];
              for (let zT = 0; zT < IT; zT++) {
                const oT = {
                    levels: []
                  },
                  IT = TT.getNumLevels(zT);
                for (let iT = 0; iT < IT; iT++) {
                  const IT = {
                    width: TT.getImageWidth(zT, iT),
                    height: TT.getImageHeight(zT, iT)
                  };
                  oT.levels.push(IT)
                }
                iT.push(oT)
              }
              return {
                hasAlpha: oT,
                images: iT
              }
            }(xT);
          let KT = DT.data.ignoreSupportedFormats ? null : function(FT, ST) {
              let DT = null;
              FT.supportedCompressionFormats && (DT = FT.supportedCompressionFormats.astc ? XT : FT.supportedCompressionFormats.bc7 ? zT : FT.supportedCompressionFormats.s3tc ? ST.hasAlpha ? iT : IT : FT.supportedCompressionFormats.pvrtc ? ST.hasAlpha ? WT : kT : FT.supportedCompressionFormats.etc2 ? oT : FT.supportedCompressionFormats.etc1 ? TT : BT);
              return DT
            }(DT.data.config, cT),
            MT = !1;
          null === KT && (MT = !0, KT = cT.hasAlpha ? iT : IT);
          let rT = !0;
          xT.startTranscoding() || (rT = !1);
          const AT = [];
          for (let TT = 0; TT < cT.images.length && rT; TT++) {
            const oT = cT.images[TT];
            if (void 0 === FT.loadSingleImage || FT.loadSingleImage === TT) {
              let IT = oT.levels.length;
              !1 === FT.loadMipmapLevels && (IT = 1);
              for (let iT = 0; iT < IT; iT++) {
                const IT = oT.levels[iT],
                  zT = ST(xT, TT, iT, KT, MT);
                if (!zT) {
                  rT = !1;
                  break
                }
                IT.transcodedPixels = zT, AT.push(IT.transcodedPixels.buffer)
              }
            }
          }
          xT.close(), xT.delete(), MT && (KT = -1), rT ? postMessage({
            action: "transcode",
            success: rT,
            id: DT.data.id,
            fileInfo: cT,
            format: KT
          }, AT) : postMessage({
            action: "transcode",
            success: rT,
            id: DT.data.id
          })
        }
      }
    }! function(TT) {
      TT[TT.cTFETC1 = 0] = "cTFETC1", TT[TT.cTFETC2 = 1] = "cTFETC2", TT[TT.cTFBC1 = 2] = "cTFBC1", TT[TT.cTFBC3 = 3] = "cTFBC3", TT[TT.cTFBC4 = 4] = "cTFBC4", TT[TT.cTFBC5 = 5] = "cTFBC5", TT[TT.cTFBC7 = 6] = "cTFBC7", TT[TT.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", TT[TT.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", TT[TT.cTFASTC_4x4 = 10] = "cTFASTC_4x4", TT[TT.cTFATC_RGB = 11] = "cTFATC_RGB", TT[TT.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", TT[TT.cTFRGBA32 = 13] = "cTFRGBA32", TT[TT.cTFRGB565 = 14] = "cTFRGB565", TT[TT.cTFBGR565 = 15] = "cTFBGR565", TT[TT.cTFRGBA4444 = 16] = "cTFRGBA4444", TT[TT.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", TT[TT.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", TT[TT.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", TT[TT.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", TT[TT.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(iT || (iT = {}));
    const FT = {
      JSModuleURL: `${zT.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${zT.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let ST = null,
      DT = null,
      LT = 0;
    const xT = async () => (ST || (ST = new Promise(((TT, oT) => {
      DT ? TT(DT) : zT.i.LoadFileAsync(zT.i.GetBabylonScriptURL(FT.WasmModuleURL)).then((IT => {
        if ("function" !== typeof URL) return oT("Basis transcoder requires an environment with a URL constructor");
        const iT = URL.createObjectURL(new Blob([`(${BT})()`], {
          type: "application/javascript"
        }));
        DT = new Worker(iT), async function(TT, oT, IT) {
          return await new Promise(((iT, kT) => {
            const WT = oT => {
              "init" === oT.data.action ? (TT.removeEventListener("message", WT), iT(TT)) : "error" === oT.data.action && kT(oT.data.error || "error initializing worker")
            };
            TT.addEventListener("message", WT), TT.postMessage({
              action: "init",
              url: IT ? zT.i.GetBabylonScriptURL(IT) : void 0,
              wasmBinary: oT
            }, [oT])
          }))
        }(DT, IT, FT.JSModuleURL).then(TT, oT)
      })).catch(oT)
    }))), await ST), cT = async (TT, oT) => {
      const IT = TT instanceof ArrayBuffer ? new Uint8Array(TT) : TT;
      return await new Promise(((TT, iT) => {
        xT().then((() => {
          const zT = LT++,
            kT = oT => {
              "transcode" === oT.data.action && oT.data.id === zT && (DT.removeEventListener("message", kT), oT.data.success ? TT(oT.data) : iT("Transcode is not supported on this device"))
            };
          DT.addEventListener("message", kT);
          const WT = new Uint8Array(IT.byteLength);
          WT.set(new Uint8Array(IT.buffer, IT.byteOffset, IT.byteLength)), DT.postMessage({
            action: "transcode",
            id: zT,
            imageData: WT,
            config: oT,
            ignoreSupportedFormats: false
          }, [WT.buffer])
        }), (TT => {
          iT(TT)
        }))
      }))
    }, KT = (TT, oT) => {
      let IT = oT._gl?.TEXTURE_2D;
      TT.isCube && (IT = oT._gl?.TEXTURE_CUBE_MAP), oT._bindTextureDirectly(IT, TT, !0)
    }, MT = (TT, oT) => {
      const IT = TT.Zc();
      for (let zT = 0; zT < oT.fileInfo.images.length; zT++) {
        const BT = oT.fileInfo.images[zT].levels[0];
        if (TT._invertVScale = TT.invertY, -1 === oT.format || oT.format === iT.cTFRGB565)
          if (TT.type = 10, TT.format = 4, !IT._features.basisNeedsPOT || Math.log2(BT.width) % 1 === 0 && Math.log2(BT.height) % 1 === 0) TT._invertVScale = !TT.invertY, TT.width = BT.width + 3 & -4, TT.height = BT.height + 3 & -4, TT.samplingMode = 2, KT(TT, IT), IT._uploadDataToTextureDirectly(TT, new Uint16Array(BT.transcodedPixels.buffer), zT, 0, 4, !0);
          else {
            const oT = new XT.e(IT, 2);
            TT._invertVScale = TT.invertY, oT.type = 10, oT.format = 4, oT.width = BT.width + 3 & -4, oT.height = BT.height + 3 & -4, KT(oT, IT), IT._uploadDataToTextureDirectly(oT, new Uint16Array(BT.transcodedPixels.buffer), zT, 0, 4, !0), IT._rescaleTexture(oT, TT, IT.scenes[0], IT._getInternalFormat(4), (() => {
              IT._releaseTexture(oT), KT(TT, IT)
            }))
          }
        else {
          TT.width = BT.width, TT.height = BT.height, TT.generateMipMaps = oT.fileInfo.images[zT].levels.length > 1;
          const iT = rT.GetInternalFormatFromBasisFormat(oT.format, IT);
          TT.format = iT, KT(TT, IT);
          const XT = oT.fileInfo.images[zT].levels;
          for (let oT = 0; oT < XT.length; oT++) {
            const kT = XT[oT];
            IT._uploadCompressedDataToTextureDirectly(TT, iT, kT.width, kT.height, kT.transcodedPixels, zT, oT)
          }!IT._features.basisNeedsPOT || Math.log2(TT.width) % 1 === 0 && Math.log2(TT.height) % 1 === 0 || (kT.d.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), TT._cachedWrapU = WT.g.CLAMP_ADDRESSMODE, TT._cachedWrapV = WT.g.CLAMP_ADDRESSMODE)
        }
      }
    }, rT = {
      JSModuleURL: FT.JSModuleURL,
      WasmModuleURL: FT.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (TT, oT) => {
        let IT;
        switch (TT) {
          case iT.cTFETC1:
            IT = 36196;
            break;
          case iT.cTFBC1:
            IT = 33776;
            break;
          case iT.cTFBC4:
            IT = 33779;
            break;
          case iT.cTFASTC_4x4:
            IT = 37808;
            break;
          case iT.cTFETC2:
            IT = 37496;
            break;
          case iT.cTFBC7:
            IT = 36492
        }
        if (void 0 === IT) throw "The chosen Basis transcoder format is not currently supported";
        return IT
      },
      TranscodeAsync: cT,
      LoadTextureFromTranscodeResult: MT
    };
    class AT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, oT, IT, iT, kT) {
        if (Array.isArray(TT)) return;
        const WT = oT.Zc().getCaps(),
          XT = {
            supportedCompressionFormats: {
              etc1: !!WT.etc1,
              s3tc: !!WT.s3tc,
              pvrtc: !!WT.pvrtc,
              etc2: !!WT.etc2,
              astc: !!WT.astc,
              bc7: !!WT.bptc
            }
          };
        cT(TT, XT).then((TT => {
          const IT = TT.fileInfo.images[0].levels.length > 1 && oT.generateMipMaps;
          MT(oT, TT), oT.Zc()._setCubeMapTextureParams(oT, IT), oT.isReady = !0, oT.onLoadedObservable.notifyObservers(oT), oT.onLoadedObservable.clear(), iT && iT()
        })).catch((TT => {
          zT.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), oT.isReady = !0, kT && kT(TT)
        }))
      }
      loadData(TT, oT, IT) {
        const iT = oT.Zc().getCaps(),
          kT = {
            supportedCompressionFormats: {
              etc1: !!iT.etc1,
              s3tc: !!iT.s3tc,
              pvrtc: !!iT.pvrtc,
              etc2: !!iT.etc2,
              astc: !!iT.astc,
              bc7: !!iT.bptc
            }
          };
        cT(TT, kT).then((TT => {
          const iT = TT.fileInfo.images[0].levels[0],
            zT = TT.fileInfo.images[0].levels.length > 1 && oT.generateMipMaps;
          IT(iT.width, iT.height, zT, -1 !== TT.format, (() => {
            MT(oT, TT)
          }))
        })).catch((TT => {
          zT.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), zT.i.Warn(`Failed to transcode Basis file: ${TT}`), IT(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);