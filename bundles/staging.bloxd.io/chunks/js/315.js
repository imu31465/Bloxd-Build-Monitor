export const id = 315;
export const ids = [315];
export const modules = {
  42235: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      _BasisTextureLoader: () => rG
    });
    var wG, SG = ZG(40477),
      LG = ZG(39093),
      yG = ZG(40857),
      kG = ZG(40210);

    function UG() {
      const GG = 0,
        bG = 1,
        ZG = 2,
        wG = 3,
        SG = 6,
        LG = 8,
        yG = 9,
        kG = 10,
        UG = 14;
      let YG = null;

      function VG(GG, bG, ZG, wG, SG) {
        const LG = GG.getImageTranscodedSizeInBytes(bG, ZG, wG);
        let yG = new Uint8Array(LG);
        if (!GG.transcodeImage(yG, bG, ZG, wG, 1, 0)) return null;
        if (SG) {
          yG = function(GG, bG, ZG, wG) {
            const SG = new Uint16Array(4),
              LG = new Uint16Array(ZG * wG),
              yG = ZG / 4,
              kG = wG / 4;
            for (let UG = 0; UG < kG; UG++)
              for (let wG = 0; wG < yG; wG++) {
                const kG = bG + 8 * (UG * yG + wG);
                SG[0] = GG[kG] | GG[kG + 1] << 8, SG[1] = GG[kG + 2] | GG[kG + 3] << 8, SG[2] = (2 * (31 & SG[0]) + 1 * (31 & SG[1])) / 3 | (2 * (2016 & SG[0]) + 1 * (2016 & SG[1])) / 3 & 2016 | (2 * (63488 & SG[0]) + 1 * (63488 & SG[1])) / 3 & 63488, SG[3] = (2 * (31 & SG[1]) + 1 * (31 & SG[0])) / 3 | (2 * (2016 & SG[1]) + 1 * (2016 & SG[0])) / 3 & 2016 | (2 * (63488 & SG[1]) + 1 * (63488 & SG[0])) / 3 & 63488;
                for (let bG = 0; bG < 4; bG++) {
                  const yG = GG[kG + 4 + bG];
                  let YG = (4 * UG + bG) * ZG + 4 * wG;
                  LG[YG++] = SG[3 & yG], LG[YG++] = SG[yG >> 2 & 3], LG[YG++] = SG[yG >> 4 & 3], LG[YG] = SG[yG >> 6 & 3]
                }
              }
            return LG
          }(yG, 0, GG.getImageWidth(bG, ZG) + 3 & -4, GG.getImageHeight(bG, ZG) + 3 & -4)
        }
        return yG
      }
      onmessage = pG => {
        if ("init" === pG.data.action) {
          if (pG.data.url) try {
            importScripts(pG.data.url)
          } catch (fG) {
            postMessage({
              action: "error",
              error: fG
            })
          }
          YG || (YG = BASIS({
            wasmBinary: pG.data.wasmBinary
          })), null !== YG && YG.then((GG => {
            BASIS = GG, GG.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === pG.data.action) {
          const YG = pG.data.config,
            fG = pG.data.imageData,
            QG = new BASIS.BasisFile(fG),
            KG = function(GG) {
              const bG = GG.getHasAlpha(),
                ZG = GG.getNumImages(),
                wG = [];
              for (let SG = 0; SG < ZG; SG++) {
                const bG = {
                    levels: []
                  },
                  ZG = GG.getNumLevels(SG);
                for (let wG = 0; wG < ZG; wG++) {
                  const ZG = {
                    width: GG.getImageWidth(SG, wG),
                    height: GG.getImageHeight(SG, wG)
                  };
                  bG.levels.push(ZG)
                }
                wG.push(bG)
              }
              return {
                hasAlpha: bG,
                images: wG
              }
            }(QG);
          let hG = pG.data.ignoreSupportedFormats ? null : function(YG, VG) {
              let pG = null;
              YG.supportedCompressionFormats && (pG = YG.supportedCompressionFormats.astc ? kG : YG.supportedCompressionFormats.bc7 ? SG : YG.supportedCompressionFormats.s3tc ? VG.hasAlpha ? wG : ZG : YG.supportedCompressionFormats.pvrtc ? VG.hasAlpha ? yG : LG : YG.supportedCompressionFormats.etc2 ? bG : YG.supportedCompressionFormats.etc1 ? GG : UG);
              return pG
            }(pG.data.config, KG),
            dG = !1;
          null === hG && (dG = !0, hG = KG.hasAlpha ? wG : ZG);
          let JG = !0;
          QG.startTranscoding() || (JG = !1);
          const rG = [];
          for (let GG = 0; GG < KG.images.length && JG; GG++) {
            const bG = KG.images[GG];
            if (void 0 === YG.loadSingleImage || YG.loadSingleImage === GG) {
              let ZG = bG.levels.length;
              !1 === YG.loadMipmapLevels && (ZG = 1);
              for (let wG = 0; wG < ZG; wG++) {
                const ZG = bG.levels[wG],
                  SG = VG(QG, GG, wG, hG, dG);
                if (!SG) {
                  JG = !1;
                  break
                }
                ZG.transcodedPixels = SG, rG.push(ZG.transcodedPixels.buffer)
              }
            }
          }
          QG.close(), QG.delete(), dG && (hG = -1), JG ? postMessage({
            action: "transcode",
            success: JG,
            id: pG.data.id,
            fileInfo: KG,
            format: hG
          }, rG) : postMessage({
            action: "transcode",
            success: JG,
            id: pG.data.id
          })
        }
      }
    }! function(GG) {
      GG[GG.cTFETC1 = 0] = "cTFETC1", GG[GG.cTFETC2 = 1] = "cTFETC2", GG[GG.cTFBC1 = 2] = "cTFBC1", GG[GG.cTFBC3 = 3] = "cTFBC3", GG[GG.cTFBC4 = 4] = "cTFBC4", GG[GG.cTFBC5 = 5] = "cTFBC5", GG[GG.cTFBC7 = 6] = "cTFBC7", GG[GG.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", GG[GG.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", GG[GG.cTFASTC_4x4 = 10] = "cTFASTC_4x4", GG[GG.cTFATC_RGB = 11] = "cTFATC_RGB", GG[GG.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", GG[GG.cTFRGBA32 = 13] = "cTFRGBA32", GG[GG.cTFRGB565 = 14] = "cTFRGB565", GG[GG.cTFBGR565 = 15] = "cTFBGR565", GG[GG.cTFRGBA4444 = 16] = "cTFRGBA4444", GG[GG.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", GG[GG.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", GG[GG.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", GG[GG.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", GG[GG.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(wG || (wG = {}));
    const YG = {
      JSModuleURL: `${SG.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${SG.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let VG = null,
      pG = null,
      fG = 0;
    const QG = async () => (VG || (VG = new Promise(((GG, bG) => {
      pG ? GG(pG) : SG.f.LoadFileAsync(SG.f.GetBabylonScriptURL(YG.WasmModuleURL)).then((ZG => {
        if ("function" !== typeof URL) return bG("Basis transcoder requires an environment with a URL constructor");
        const wG = URL.createObjectURL(new Blob([`(${UG})()`], {
          type: "application/javascript"
        }));
        pG = new Worker(wG), async function(GG, bG, ZG) {
          return await new Promise(((wG, LG) => {
            const yG = bG => {
              "init" === bG.data.action ? (GG.removeEventListener("message", yG), wG(GG)) : "error" === bG.data.action && LG(bG.data.error || "error initializing worker")
            };
            GG.addEventListener("message", yG), GG.postMessage({
              action: "init",
              url: ZG ? SG.f.GetBabylonScriptURL(ZG) : void 0,
              wasmBinary: bG
            }, [bG])
          }))
        }(pG, ZG, YG.JSModuleURL).then(GG, bG)
      })).catch(bG)
    }))), await VG), KG = async (GG, bG) => {
      const ZG = GG instanceof ArrayBuffer ? new Uint8Array(GG) : GG;
      return await new Promise(((GG, wG) => {
        QG().then((() => {
          const SG = fG++,
            LG = bG => {
              "transcode" === bG.data.action && bG.data.id === SG && (pG.removeEventListener("message", LG), bG.data.success ? GG(bG.data) : wG("Transcode is not supported on this device"))
            };
          pG.addEventListener("message", LG);
          const yG = new Uint8Array(ZG.byteLength);
          yG.set(new Uint8Array(ZG.buffer, ZG.byteOffset, ZG.byteLength)), pG.postMessage({
            action: "transcode",
            id: SG,
            imageData: yG,
            config: bG,
            ignoreSupportedFormats: false
          }, [yG.buffer])
        }), (GG => {
          wG(GG)
        }))
      }))
    }, hG = (GG, bG) => {
      let ZG = bG._gl?.TEXTURE_2D;
      GG.isCube && (ZG = bG._gl?.TEXTURE_CUBE_MAP), bG._bindTextureDirectly(ZG, GG, !0)
    }, dG = (GG, bG) => {
      const ZG = GG.CK();
      for (let SG = 0; SG < bG.fileInfo.images.length; SG++) {
        const UG = bG.fileInfo.images[SG].levels[0];
        if (GG._invertVScale = GG.invertY, -1 === bG.format || bG.format === wG.cTFRGB565)
          if (GG.type = 10, GG.format = 4, !ZG._features.basisNeedsPOT || Math.log2(UG.width) % 1 === 0 && Math.log2(UG.height) % 1 === 0) GG._invertVScale = !GG.invertY, GG.width = UG.width + 3 & -4, GG.height = UG.height + 3 & -4, GG.samplingMode = 2, hG(GG, ZG), ZG._uploadDataToTextureDirectly(GG, new Uint16Array(UG.transcodedPixels.buffer), SG, 0, 4, !0);
          else {
            const bG = new kG.b(ZG, 2);
            GG._invertVScale = GG.invertY, bG.type = 10, bG.format = 4, bG.width = UG.width + 3 & -4, bG.height = UG.height + 3 & -4, hG(bG, ZG), ZG._uploadDataToTextureDirectly(bG, new Uint16Array(UG.transcodedPixels.buffer), SG, 0, 4, !0), ZG._rescaleTexture(bG, GG, ZG.scenes[0], ZG._getInternalFormat(4), (() => {
              ZG._releaseTexture(bG), hG(GG, ZG)
            }))
          }
        else {
          GG.width = UG.width, GG.height = UG.height, GG.generateMipMaps = bG.fileInfo.images[SG].levels.length > 1;
          const wG = JG.GetInternalFormatFromBasisFormat(bG.format, ZG);
          GG.format = wG, hG(GG, ZG);
          const kG = bG.fileInfo.images[SG].levels;
          for (let bG = 0; bG < kG.length; bG++) {
            const LG = kG[bG];
            ZG._uploadCompressedDataToTextureDirectly(GG, wG, LG.width, LG.height, LG.transcodedPixels, SG, bG)
          }!ZG._features.basisNeedsPOT || Math.log2(GG.width) % 1 === 0 && Math.log2(GG.height) % 1 === 0 || (LG.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), GG._cachedWrapU = yG.d.CLAMP_ADDRESSMODE, GG._cachedWrapV = yG.d.CLAMP_ADDRESSMODE)
        }
      }
    }, JG = {
      JSModuleURL: YG.JSModuleURL,
      WasmModuleURL: YG.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (GG, bG) => {
        let ZG;
        switch (GG) {
          case wG.cTFETC1:
            ZG = 36196;
            break;
          case wG.cTFBC1:
            ZG = 33776;
            break;
          case wG.cTFBC4:
            ZG = 33779;
            break;
          case wG.cTFASTC_4x4:
            ZG = 37808;
            break;
          case wG.cTFETC2:
            ZG = 37496;
            break;
          case wG.cTFBC7:
            ZG = 36492
        }
        if (void 0 === ZG) throw "The chosen Basis transcoder format is not currently supported";
        return ZG
      },
      TranscodeAsync: KG,
      LoadTextureFromTranscodeResult: dG
    };
    class rG {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(GG, bG, ZG, wG, LG) {
        if (Array.isArray(GG)) return;
        const yG = bG.CK().getCaps(),
          kG = {
            supportedCompressionFormats: {
              etc1: !!yG.etc1,
              s3tc: !!yG.s3tc,
              pvrtc: !!yG.pvrtc,
              etc2: !!yG.etc2,
              astc: !!yG.astc,
              bc7: !!yG.bptc
            }
          };
        KG(GG, kG).then((GG => {
          const ZG = GG.fileInfo.images[0].levels.length > 1 && bG.generateMipMaps;
          dG(bG, GG), bG.CK()._setCubeMapTextureParams(bG, ZG), bG.isReady = !0, bG.onLoadedObservable.notifyObservers(bG), bG.onLoadedObservable.clear(), wG && wG()
        })).catch((GG => {
          SG.f.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), bG.isReady = !0, LG && LG(GG)
        }))
      }
      loadData(GG, bG, ZG) {
        const wG = bG.CK().getCaps(),
          LG = {
            supportedCompressionFormats: {
              etc1: !!wG.etc1,
              s3tc: !!wG.s3tc,
              pvrtc: !!wG.pvrtc,
              etc2: !!wG.etc2,
              astc: !!wG.astc,
              bc7: !!wG.bptc
            }
          };
        KG(GG, LG).then((GG => {
          const wG = GG.fileInfo.images[0].levels[0],
            SG = GG.fileInfo.images[0].levels.length > 1 && bG.generateMipMaps;
          ZG(wG.width, wG.height, SG, -1 !== GG.format, (() => {
            dG(bG, GG)
          }))
        })).catch((GG => {
          SG.f.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), SG.f.Warn(`Failed to transcode Basis file: ${GG}`), ZG(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);