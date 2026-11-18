export const id = 290;
export const ids = [290];
export const modules = {
  40497: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      _BasisTextureLoader: () => rJ
    });
    var FJ, UJ = ZJ(38879),
      eJ = ZJ(37660),
      XJ = ZJ(39243),
      AJ = ZJ(38635);

    function qJ() {
      const JJ = 0,
        cJ = 1,
        ZJ = 2,
        FJ = 3,
        UJ = 6,
        eJ = 8,
        XJ = 9,
        AJ = 10,
        qJ = 14;
      let jJ = null;

      function YJ(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = JJ.getImageTranscodedSizeInBytes(cJ, ZJ, FJ);
        let XJ = new Uint8Array(eJ);
        if (!JJ.transcodeImage(XJ, cJ, ZJ, FJ, 1, 0)) return null;
        if (UJ) {
          XJ = function(JJ, cJ, ZJ, FJ) {
            const UJ = new Uint16Array(4),
              eJ = new Uint16Array(ZJ * FJ),
              XJ = ZJ / 4,
              AJ = FJ / 4;
            for (let qJ = 0; qJ < AJ; qJ++)
              for (let FJ = 0; FJ < XJ; FJ++) {
                const AJ = cJ + 8 * (qJ * XJ + FJ);
                UJ[0] = JJ[AJ] | JJ[AJ + 1] << 8, UJ[1] = JJ[AJ + 2] | JJ[AJ + 3] << 8, UJ[2] = (2 * (31 & UJ[0]) + 1 * (31 & UJ[1])) / 3 | (2 * (2016 & UJ[0]) + 1 * (2016 & UJ[1])) / 3 & 2016 | (2 * (63488 & UJ[0]) + 1 * (63488 & UJ[1])) / 3 & 63488, UJ[3] = (2 * (31 & UJ[1]) + 1 * (31 & UJ[0])) / 3 | (2 * (2016 & UJ[1]) + 1 * (2016 & UJ[0])) / 3 & 2016 | (2 * (63488 & UJ[1]) + 1 * (63488 & UJ[0])) / 3 & 63488;
                for (let cJ = 0; cJ < 4; cJ++) {
                  const XJ = JJ[AJ + 4 + cJ];
                  let jJ = (4 * qJ + cJ) * ZJ + 4 * FJ;
                  eJ[jJ++] = UJ[3 & XJ], eJ[jJ++] = UJ[XJ >> 2 & 3], eJ[jJ++] = UJ[XJ >> 4 & 3], eJ[jJ] = UJ[XJ >> 6 & 3]
                }
              }
            return eJ
          }(XJ, 0, JJ.getImageWidth(cJ, ZJ) + 3 & -4, JJ.getImageHeight(cJ, ZJ) + 3 & -4)
        }
        return XJ
      }
      onmessage = hJ => {
        if ("init" === hJ.data.action) {
          if (hJ.data.url) try {
            importScripts(hJ.data.url)
          } catch (DJ) {
            postMessage({
              action: "error",
              error: DJ
            })
          }
          jJ || (jJ = BASIS({
            wasmBinary: hJ.data.wasmBinary
          })), null !== jJ && jJ.then((JJ => {
            BASIS = JJ, JJ.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === hJ.data.action) {
          const jJ = hJ.data.config,
            DJ = hJ.data.imageData,
            sJ = new BASIS.BasisFile(DJ),
            nJ = function(JJ) {
              const cJ = JJ.getHasAlpha(),
                ZJ = JJ.getNumImages(),
                FJ = [];
              for (let UJ = 0; UJ < ZJ; UJ++) {
                const cJ = {
                    levels: []
                  },
                  ZJ = JJ.getNumLevels(UJ);
                for (let FJ = 0; FJ < ZJ; FJ++) {
                  const ZJ = {
                    width: JJ.getImageWidth(UJ, FJ),
                    height: JJ.getImageHeight(UJ, FJ)
                  };
                  cJ.levels.push(ZJ)
                }
                FJ.push(cJ)
              }
              return {
                hasAlpha: cJ,
                images: FJ
              }
            }(sJ);
          let GJ = hJ.data.ignoreSupportedFormats ? null : function(jJ, YJ) {
              let hJ = null;
              jJ.supportedCompressionFormats && (hJ = jJ.supportedCompressionFormats.astc ? AJ : jJ.supportedCompressionFormats.bc7 ? UJ : jJ.supportedCompressionFormats.s3tc ? YJ.hasAlpha ? FJ : ZJ : jJ.supportedCompressionFormats.pvrtc ? YJ.hasAlpha ? XJ : eJ : jJ.supportedCompressionFormats.etc2 ? cJ : jJ.supportedCompressionFormats.etc1 ? JJ : qJ);
              return hJ
            }(hJ.data.config, nJ),
            fJ = !1;
          null === GJ && (fJ = !0, GJ = nJ.hasAlpha ? FJ : ZJ);
          let xJ = !0;
          sJ.startTranscoding() || (xJ = !1);
          const rJ = [];
          for (let JJ = 0; JJ < nJ.images.length && xJ; JJ++) {
            const cJ = nJ.images[JJ];
            if (void 0 === jJ.loadSingleImage || jJ.loadSingleImage === JJ) {
              let ZJ = cJ.levels.length;
              !1 === jJ.loadMipmapLevels && (ZJ = 1);
              for (let FJ = 0; FJ < ZJ; FJ++) {
                const ZJ = cJ.levels[FJ],
                  UJ = YJ(sJ, JJ, FJ, GJ, fJ);
                if (!UJ) {
                  xJ = !1;
                  break
                }
                ZJ.transcodedPixels = UJ, rJ.push(ZJ.transcodedPixels.buffer)
              }
            }
          }
          sJ.close(), sJ.delete(), fJ && (GJ = -1), xJ ? postMessage({
            action: "transcode",
            success: xJ,
            id: hJ.data.id,
            fileInfo: nJ,
            format: GJ
          }, rJ) : postMessage({
            action: "transcode",
            success: xJ,
            id: hJ.data.id
          })
        }
      }
    }! function(JJ) {
      JJ[JJ.cTFETC1 = 0] = "cTFETC1", JJ[JJ.cTFETC2 = 1] = "cTFETC2", JJ[JJ.cTFBC1 = 2] = "cTFBC1", JJ[JJ.cTFBC3 = 3] = "cTFBC3", JJ[JJ.cTFBC4 = 4] = "cTFBC4", JJ[JJ.cTFBC5 = 5] = "cTFBC5", JJ[JJ.cTFBC7 = 6] = "cTFBC7", JJ[JJ.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", JJ[JJ.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", JJ[JJ.cTFASTC_4x4 = 10] = "cTFASTC_4x4", JJ[JJ.cTFATC_RGB = 11] = "cTFATC_RGB", JJ[JJ.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", JJ[JJ.cTFRGBA32 = 13] = "cTFRGBA32", JJ[JJ.cTFRGB565 = 14] = "cTFRGB565", JJ[JJ.cTFBGR565 = 15] = "cTFBGR565", JJ[JJ.cTFRGBA4444 = 16] = "cTFRGBA4444", JJ[JJ.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", JJ[JJ.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", JJ[JJ.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", JJ[JJ.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", JJ[JJ.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(FJ || (FJ = {}));
    const jJ = {
      JSModuleURL: `${UJ.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${UJ.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let YJ = null,
      hJ = null,
      DJ = 0;
    const sJ = async () => (YJ || (YJ = new Promise(((JJ, cJ) => {
      hJ ? JJ(hJ) : UJ.j.LoadFileAsync(UJ.j.GetBabylonScriptURL(jJ.WasmModuleURL)).then((ZJ => {
        if ("function" !== typeof URL) return cJ("Basis transcoder requires an environment with a URL constructor");
        const FJ = URL.createObjectURL(new Blob([`(${qJ})()`], {
          type: "application/javascript"
        }));
        hJ = new Worker(FJ), async function(JJ, cJ, ZJ) {
          return await new Promise(((FJ, eJ) => {
            const XJ = cJ => {
              "init" === cJ.data.action ? (JJ.removeEventListener("message", XJ), FJ(JJ)) : "error" === cJ.data.action && eJ(cJ.data.error || "error initializing worker")
            };
            JJ.addEventListener("message", XJ), JJ.postMessage({
              action: "init",
              url: ZJ ? UJ.j.GetBabylonScriptURL(ZJ) : void 0,
              wasmBinary: cJ
            }, [cJ])
          }))
        }(hJ, ZJ, jJ.JSModuleURL).then(JJ, cJ)
      })).catch(cJ)
    }))), await YJ), nJ = async (JJ, cJ) => {
      const ZJ = JJ instanceof ArrayBuffer ? new Uint8Array(JJ) : JJ;
      return await new Promise(((JJ, FJ) => {
        sJ().then((() => {
          const UJ = DJ++,
            eJ = cJ => {
              "transcode" === cJ.data.action && cJ.data.id === UJ && (hJ.removeEventListener("message", eJ), cJ.data.success ? JJ(cJ.data) : FJ("Transcode is not supported on this device"))
            };
          hJ.addEventListener("message", eJ);
          const XJ = new Uint8Array(ZJ.byteLength);
          XJ.set(new Uint8Array(ZJ.buffer, ZJ.byteOffset, ZJ.byteLength)), hJ.postMessage({
            action: "transcode",
            id: UJ,
            imageData: XJ,
            config: cJ,
            ignoreSupportedFormats: false
          }, [XJ.buffer])
        }), (JJ => {
          FJ(JJ)
        }))
      }))
    }, GJ = (JJ, cJ) => {
      let ZJ = cJ._gl?.TEXTURE_2D;
      JJ.isCube && (ZJ = cJ._gl?.TEXTURE_CUBE_MAP), cJ._bindTextureDirectly(ZJ, JJ, !0)
    }, fJ = (JJ, cJ) => {
      const ZJ = JJ.gn();
      for (let UJ = 0; UJ < cJ.fileInfo.images.length; UJ++) {
        const qJ = cJ.fileInfo.images[UJ].levels[0];
        if (JJ._invertVScale = JJ.invertY, -1 === cJ.format || cJ.format === FJ.cTFRGB565)
          if (JJ.type = 10, JJ.format = 4, !ZJ._features.basisNeedsPOT || Math.log2(qJ.width) % 1 === 0 && Math.log2(qJ.height) % 1 === 0) JJ._invertVScale = !JJ.invertY, JJ.width = qJ.width + 3 & -4, JJ.height = qJ.height + 3 & -4, JJ.samplingMode = 2, GJ(JJ, ZJ), ZJ._uploadDataToTextureDirectly(JJ, new Uint16Array(qJ.transcodedPixels.buffer), UJ, 0, 4, !0);
          else {
            const cJ = new AJ.e(ZJ, 2);
            JJ._invertVScale = JJ.invertY, cJ.type = 10, cJ.format = 4, cJ.width = qJ.width + 3 & -4, cJ.height = qJ.height + 3 & -4, GJ(cJ, ZJ), ZJ._uploadDataToTextureDirectly(cJ, new Uint16Array(qJ.transcodedPixels.buffer), UJ, 0, 4, !0), ZJ._rescaleTexture(cJ, JJ, ZJ.scenes[0], ZJ._getInternalFormat(4), (() => {
              ZJ._releaseTexture(cJ), GJ(JJ, ZJ)
            }))
          }
        else {
          JJ.width = qJ.width, JJ.height = qJ.height, JJ.generateMipMaps = cJ.fileInfo.images[UJ].levels.length > 1;
          const FJ = xJ.GetInternalFormatFromBasisFormat(cJ.format, ZJ);
          JJ.format = FJ, GJ(JJ, ZJ);
          const AJ = cJ.fileInfo.images[UJ].levels;
          for (let cJ = 0; cJ < AJ.length; cJ++) {
            const eJ = AJ[cJ];
            ZJ._uploadCompressedDataToTextureDirectly(JJ, FJ, eJ.width, eJ.height, eJ.transcodedPixels, UJ, cJ)
          }!ZJ._features.basisNeedsPOT || Math.log2(JJ.width) % 1 === 0 && Math.log2(JJ.height) % 1 === 0 || (eJ.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), JJ._cachedWrapU = XJ.i.CLAMP_ADDRESSMODE, JJ._cachedWrapV = XJ.i.CLAMP_ADDRESSMODE)
        }
      }
    }, xJ = {
      JSModuleURL: jJ.JSModuleURL,
      WasmModuleURL: jJ.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (JJ, cJ) => {
        let ZJ;
        switch (JJ) {
          case FJ.cTFETC1:
            ZJ = 36196;
            break;
          case FJ.cTFBC1:
            ZJ = 33776;
            break;
          case FJ.cTFBC4:
            ZJ = 33779;
            break;
          case FJ.cTFASTC_4x4:
            ZJ = 37808;
            break;
          case FJ.cTFETC2:
            ZJ = 37496;
            break;
          case FJ.cTFBC7:
            ZJ = 36492
        }
        if (void 0 === ZJ) throw "The chosen Basis transcoder format is not currently supported";
        return ZJ
      },
      TranscodeAsync: nJ,
      LoadTextureFromTranscodeResult: fJ
    };
    class rJ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(JJ, cJ, ZJ, FJ, eJ) {
        if (Array.isArray(JJ)) return;
        const XJ = cJ.gn().getCaps(),
          AJ = {
            supportedCompressionFormats: {
              etc1: !!XJ.etc1,
              s3tc: !!XJ.s3tc,
              pvrtc: !!XJ.pvrtc,
              etc2: !!XJ.etc2,
              astc: !!XJ.astc,
              bc7: !!XJ.bptc
            }
          };
        nJ(JJ, AJ).then((JJ => {
          const ZJ = JJ.fileInfo.images[0].levels.length > 1 && cJ.generateMipMaps;
          fJ(cJ, JJ), cJ.gn()._setCubeMapTextureParams(cJ, ZJ), cJ.isReady = !0, cJ.onLoadedObservable.notifyObservers(cJ), cJ.onLoadedObservable.clear(), FJ && FJ()
        })).catch((JJ => {
          UJ.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), cJ.isReady = !0, eJ && eJ(JJ)
        }))
      }
      loadData(JJ, cJ, ZJ) {
        const FJ = cJ.gn().getCaps(),
          eJ = {
            supportedCompressionFormats: {
              etc1: !!FJ.etc1,
              s3tc: !!FJ.s3tc,
              pvrtc: !!FJ.pvrtc,
              etc2: !!FJ.etc2,
              astc: !!FJ.astc,
              bc7: !!FJ.bptc
            }
          };
        nJ(JJ, eJ).then((JJ => {
          const FJ = JJ.fileInfo.images[0].levels[0],
            UJ = JJ.fileInfo.images[0].levels.length > 1 && cJ.generateMipMaps;
          ZJ(FJ.width, FJ.height, UJ, -1 !== JJ.format, (() => {
            fJ(cJ, JJ)
          }))
        })).catch((JJ => {
          UJ.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), UJ.j.Warn(`Failed to transcode Basis file: ${JJ}`), ZJ(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);