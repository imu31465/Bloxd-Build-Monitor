export const id = 301;
export const ids = [301];
export const modules = {
  41352: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      _BasisTextureLoader: () => QT
    });
    var lT, MT = cT(39727),
      KT = cT(38512),
      OT = cT(40111),
      yT = cT(39454);

    function fT() {
      const TT = 0,
        kT = 1,
        cT = 2,
        lT = 3,
        MT = 6,
        KT = 8,
        OT = 9,
        yT = 10,
        fT = 14;
      let xT = null;

      function IT(TT, kT, cT, lT, MT) {
        const KT = TT.getImageTranscodedSizeInBytes(kT, cT, lT);
        let OT = new Uint8Array(KT);
        if (!TT.transcodeImage(OT, kT, cT, lT, 1, 0)) return null;
        if (MT) {
          OT = function(TT, kT, cT, lT) {
            const MT = new Uint16Array(4),
              KT = new Uint16Array(cT * lT),
              OT = cT / 4,
              yT = lT / 4;
            for (let fT = 0; fT < yT; fT++)
              for (let lT = 0; lT < OT; lT++) {
                const yT = kT + 8 * (fT * OT + lT);
                MT[0] = TT[yT] | TT[yT + 1] << 8, MT[1] = TT[yT + 2] | TT[yT + 3] << 8, MT[2] = (2 * (31 & MT[0]) + 1 * (31 & MT[1])) / 3 | (2 * (2016 & MT[0]) + 1 * (2016 & MT[1])) / 3 & 2016 | (2 * (63488 & MT[0]) + 1 * (63488 & MT[1])) / 3 & 63488, MT[3] = (2 * (31 & MT[1]) + 1 * (31 & MT[0])) / 3 | (2 * (2016 & MT[1]) + 1 * (2016 & MT[0])) / 3 & 2016 | (2 * (63488 & MT[1]) + 1 * (63488 & MT[0])) / 3 & 63488;
                for (let kT = 0; kT < 4; kT++) {
                  const OT = TT[yT + 4 + kT];
                  let xT = (4 * fT + kT) * cT + 4 * lT;
                  KT[xT++] = MT[3 & OT], KT[xT++] = MT[OT >> 2 & 3], KT[xT++] = MT[OT >> 4 & 3], KT[xT] = MT[OT >> 6 & 3]
                }
              }
            return KT
          }(OT, 0, TT.getImageWidth(kT, cT) + 3 & -4, TT.getImageHeight(kT, cT) + 3 & -4)
        }
        return OT
      }
      onmessage = AT => {
        if ("init" === AT.data.action) {
          if (AT.data.url) try {
            importScripts(AT.data.url)
          } catch (CT) {
            postMessage({
              action: "error",
              error: CT
            })
          }
          xT || (xT = BASIS({
            wasmBinary: AT.data.wasmBinary
          })), null !== xT && xT.then((TT => {
            BASIS = TT, TT.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === AT.data.action) {
          const xT = AT.data.config,
            CT = AT.data.imageData,
            jT = new BASIS.BasisFile(CT),
            vT = function(TT) {
              const kT = TT.getHasAlpha(),
                cT = TT.getNumImages(),
                lT = [];
              for (let MT = 0; MT < cT; MT++) {
                const kT = {
                    levels: []
                  },
                  cT = TT.getNumLevels(MT);
                for (let lT = 0; lT < cT; lT++) {
                  const cT = {
                    width: TT.getImageWidth(MT, lT),
                    height: TT.getImageHeight(MT, lT)
                  };
                  kT.levels.push(cT)
                }
                lT.push(kT)
              }
              return {
                hasAlpha: kT,
                images: lT
              }
            }(jT);
          let tT = AT.data.ignoreSupportedFormats ? null : function(xT, IT) {
              let AT = null;
              xT.supportedCompressionFormats && (AT = xT.supportedCompressionFormats.astc ? yT : xT.supportedCompressionFormats.bc7 ? MT : xT.supportedCompressionFormats.s3tc ? IT.hasAlpha ? lT : cT : xT.supportedCompressionFormats.pvrtc ? IT.hasAlpha ? OT : KT : xT.supportedCompressionFormats.etc2 ? kT : xT.supportedCompressionFormats.etc1 ? TT : fT);
              return AT
            }(AT.data.config, vT),
            hT = !1;
          null === tT && (hT = !0, tT = vT.hasAlpha ? lT : cT);
          let NT = !0;
          jT.startTranscoding() || (NT = !1);
          const QT = [];
          for (let TT = 0; TT < vT.images.length && NT; TT++) {
            const kT = vT.images[TT];
            if (void 0 === xT.loadSingleImage || xT.loadSingleImage === TT) {
              let cT = kT.levels.length;
              !1 === xT.loadMipmapLevels && (cT = 1);
              for (let lT = 0; lT < cT; lT++) {
                const cT = kT.levels[lT],
                  MT = IT(jT, TT, lT, tT, hT);
                if (!MT) {
                  NT = !1;
                  break
                }
                cT.transcodedPixels = MT, QT.push(cT.transcodedPixels.buffer)
              }
            }
          }
          jT.close(), jT.delete(), hT && (tT = -1), NT ? postMessage({
            action: "transcode",
            success: NT,
            id: AT.data.id,
            fileInfo: vT,
            format: tT
          }, QT) : postMessage({
            action: "transcode",
            success: NT,
            id: AT.data.id
          })
        }
      }
    }! function(TT) {
      TT[TT.cTFETC1 = 0] = "cTFETC1", TT[TT.cTFETC2 = 1] = "cTFETC2", TT[TT.cTFBC1 = 2] = "cTFBC1", TT[TT.cTFBC3 = 3] = "cTFBC3", TT[TT.cTFBC4 = 4] = "cTFBC4", TT[TT.cTFBC5 = 5] = "cTFBC5", TT[TT.cTFBC7 = 6] = "cTFBC7", TT[TT.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", TT[TT.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", TT[TT.cTFASTC_4x4 = 10] = "cTFASTC_4x4", TT[TT.cTFATC_RGB = 11] = "cTFATC_RGB", TT[TT.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", TT[TT.cTFRGBA32 = 13] = "cTFRGBA32", TT[TT.cTFRGB565 = 14] = "cTFRGB565", TT[TT.cTFBGR565 = 15] = "cTFBGR565", TT[TT.cTFRGBA4444 = 16] = "cTFRGBA4444", TT[TT.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", TT[TT.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", TT[TT.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", TT[TT.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", TT[TT.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(lT || (lT = {}));
    const xT = {
      JSModuleURL: `${MT.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${MT.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let IT = null,
      AT = null,
      CT = 0;
    const jT = async () => (IT || (IT = new Promise(((TT, kT) => {
      AT ? TT(AT) : MT.h.LoadFileAsync(MT.h.GetBabylonScriptURL(xT.WasmModuleURL)).then((cT => {
        if ("function" !== typeof URL) return kT("Basis transcoder requires an environment with a URL constructor");
        const lT = URL.createObjectURL(new Blob([`(${fT})()`], {
          type: "application/javascript"
        }));
        AT = new Worker(lT), async function(TT, kT, cT) {
          return await new Promise(((lT, KT) => {
            const OT = kT => {
              "init" === kT.data.action ? (TT.removeEventListener("message", OT), lT(TT)) : "error" === kT.data.action && KT(kT.data.error || "error initializing worker")
            };
            TT.addEventListener("message", OT), TT.postMessage({
              action: "init",
              url: cT ? MT.h.GetBabylonScriptURL(cT) : void 0,
              wasmBinary: kT
            }, [kT])
          }))
        }(AT, cT, xT.JSModuleURL).then(TT, kT)
      })).catch(kT)
    }))), await IT), vT = async (TT, kT) => {
      const cT = TT instanceof ArrayBuffer ? new Uint8Array(TT) : TT;
      return await new Promise(((TT, lT) => {
        jT().then((() => {
          const MT = CT++,
            KT = kT => {
              "transcode" === kT.data.action && kT.data.id === MT && (AT.removeEventListener("message", KT), kT.data.success ? TT(kT.data) : lT("Transcode is not supported on this device"))
            };
          AT.addEventListener("message", KT);
          const OT = new Uint8Array(cT.byteLength);
          OT.set(new Uint8Array(cT.buffer, cT.byteOffset, cT.byteLength)), AT.postMessage({
            action: "transcode",
            id: MT,
            imageData: OT,
            config: kT,
            ignoreSupportedFormats: false
          }, [OT.buffer])
        }), (TT => {
          lT(TT)
        }))
      }))
    }, tT = (TT, kT) => {
      let cT = kT._gl?.TEXTURE_2D;
      TT.isCube && (cT = kT._gl?.TEXTURE_CUBE_MAP), kT._bindTextureDirectly(cT, TT, !0)
    }, hT = (TT, kT) => {
      const cT = TT.Dv();
      for (let MT = 0; MT < kT.fileInfo.images.length; MT++) {
        const fT = kT.fileInfo.images[MT].levels[0];
        if (TT._invertVScale = TT.invertY, -1 === kT.format || kT.format === lT.cTFRGB565)
          if (TT.type = 10, TT.format = 4, !cT._features.basisNeedsPOT || Math.log2(fT.width) % 1 === 0 && Math.log2(fT.height) % 1 === 0) TT._invertVScale = !TT.invertY, TT.width = fT.width + 3 & -4, TT.height = fT.height + 3 & -4, TT.samplingMode = 2, tT(TT, cT), cT._uploadDataToTextureDirectly(TT, new Uint16Array(fT.transcodedPixels.buffer), MT, 0, 4, !0);
          else {
            const kT = new yT.b(cT, 2);
            TT._invertVScale = TT.invertY, kT.type = 10, kT.format = 4, kT.width = fT.width + 3 & -4, kT.height = fT.height + 3 & -4, tT(kT, cT), cT._uploadDataToTextureDirectly(kT, new Uint16Array(fT.transcodedPixels.buffer), MT, 0, 4, !0), cT._rescaleTexture(kT, TT, cT.scenes[0], cT._getInternalFormat(4), (() => {
              cT._releaseTexture(kT), tT(TT, cT)
            }))
          }
        else {
          TT.width = fT.width, TT.height = fT.height, TT.generateMipMaps = kT.fileInfo.images[MT].levels.length > 1;
          const lT = NT.GetInternalFormatFromBasisFormat(kT.format, cT);
          TT.format = lT, tT(TT, cT);
          const yT = kT.fileInfo.images[MT].levels;
          for (let kT = 0; kT < yT.length; kT++) {
            const KT = yT[kT];
            cT._uploadCompressedDataToTextureDirectly(TT, lT, KT.width, KT.height, KT.transcodedPixels, MT, kT)
          }!cT._features.basisNeedsPOT || Math.log2(TT.width) % 1 === 0 && Math.log2(TT.height) % 1 === 0 || (KT.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), TT._cachedWrapU = OT.f.CLAMP_ADDRESSMODE, TT._cachedWrapV = OT.f.CLAMP_ADDRESSMODE)
        }
      }
    }, NT = {
      JSModuleURL: xT.JSModuleURL,
      WasmModuleURL: xT.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (TT, kT) => {
        let cT;
        switch (TT) {
          case lT.cTFETC1:
            cT = 36196;
            break;
          case lT.cTFBC1:
            cT = 33776;
            break;
          case lT.cTFBC4:
            cT = 33779;
            break;
          case lT.cTFASTC_4x4:
            cT = 37808;
            break;
          case lT.cTFETC2:
            cT = 37496;
            break;
          case lT.cTFBC7:
            cT = 36492
        }
        if (void 0 === cT) throw "The chosen Basis transcoder format is not currently supported";
        return cT
      },
      TranscodeAsync: vT,
      LoadTextureFromTranscodeResult: hT
    };
    class QT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, kT, cT, lT, KT) {
        if (Array.isArray(TT)) return;
        const OT = kT.Dv().getCaps(),
          yT = {
            supportedCompressionFormats: {
              etc1: !!OT.etc1,
              s3tc: !!OT.s3tc,
              pvrtc: !!OT.pvrtc,
              etc2: !!OT.etc2,
              astc: !!OT.astc,
              bc7: !!OT.bptc
            }
          };
        vT(TT, yT).then((TT => {
          const cT = TT.fileInfo.images[0].levels.length > 1 && kT.generateMipMaps;
          hT(kT, TT), kT.Dv()._setCubeMapTextureParams(kT, cT), kT.isReady = !0, kT.onLoadedObservable.notifyObservers(kT), kT.onLoadedObservable.clear(), lT && lT()
        })).catch((TT => {
          MT.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), kT.isReady = !0, KT && KT(TT)
        }))
      }
      loadData(TT, kT, cT) {
        const lT = kT.Dv().getCaps(),
          KT = {
            supportedCompressionFormats: {
              etc1: !!lT.etc1,
              s3tc: !!lT.s3tc,
              pvrtc: !!lT.pvrtc,
              etc2: !!lT.etc2,
              astc: !!lT.astc,
              bc7: !!lT.bptc
            }
          };
        vT(TT, KT).then((TT => {
          const lT = TT.fileInfo.images[0].levels[0],
            MT = TT.fileInfo.images[0].levels.length > 1 && kT.generateMipMaps;
          cT(lT.width, lT.height, MT, -1 !== TT.format, (() => {
            hT(kT, TT)
          }))
        })).catch((TT => {
          MT.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), MT.h.Warn(`Failed to transcode Basis file: ${TT}`), cT(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);