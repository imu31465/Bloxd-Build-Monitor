export const id = 616;
export const ids = [616];
export const modules = {
  44477: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      _BasisTextureLoader: () => kU
    });
    var cU, yU = zU(41205),
      QU = zU(39493),
      AU = zU(41557),
      FU = zU(40940);

    function oU() {
      const UU = 0,
        XU = 1,
        zU = 2,
        cU = 3,
        yU = 6,
        QU = 8,
        AU = 9,
        FU = 10,
        oU = 14;
      let DU = null;

      function EU(UU, XU, zU, cU, yU) {
        const QU = UU.getImageTranscodedSizeInBytes(XU, zU, cU);
        let AU = new Uint8Array(QU);
        if (!UU.transcodeImage(AU, XU, zU, cU, 1, 0)) return null;
        if (yU) {
          AU = function(UU, XU, zU, cU) {
            const yU = new Uint16Array(4),
              QU = new Uint16Array(zU * cU),
              AU = zU / 4,
              FU = cU / 4;
            for (let oU = 0; oU < FU; oU++)
              for (let cU = 0; cU < AU; cU++) {
                const FU = XU + 8 * (oU * AU + cU);
                yU[0] = UU[FU] | UU[FU + 1] << 8, yU[1] = UU[FU + 2] | UU[FU + 3] << 8, yU[2] = (2 * (31 & yU[0]) + 1 * (31 & yU[1])) / 3 | (2 * (2016 & yU[0]) + 1 * (2016 & yU[1])) / 3 & 2016 | (2 * (63488 & yU[0]) + 1 * (63488 & yU[1])) / 3 & 63488, yU[3] = (2 * (31 & yU[1]) + 1 * (31 & yU[0])) / 3 | (2 * (2016 & yU[1]) + 1 * (2016 & yU[0])) / 3 & 2016 | (2 * (63488 & yU[1]) + 1 * (63488 & yU[0])) / 3 & 63488;
                for (let XU = 0; XU < 4; XU++) {
                  const AU = UU[FU + 4 + XU];
                  let DU = (4 * oU + XU) * zU + 4 * cU;
                  QU[DU++] = yU[3 & AU], QU[DU++] = yU[AU >> 2 & 3], QU[DU++] = yU[AU >> 4 & 3], QU[DU] = yU[AU >> 6 & 3]
                }
              }
            return QU
          }(AU, 0, UU.getImageWidth(XU, zU) + 3 & -4, UU.getImageHeight(XU, zU) + 3 & -4)
        }
        return AU
      }
      onmessage = YU => {
        if ("init" === YU.data.action) {
          if (YU.data.url) try {
            importScripts(YU.data.url)
          } catch (NU) {
            postMessage({
              action: "error",
              error: NU
            })
          }
          DU || (DU = BASIS({
            wasmBinary: YU.data.wasmBinary
          })), null !== DU && DU.then((UU => {
            BASIS = UU, UU.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === YU.data.action) {
          const DU = YU.data.config,
            NU = YU.data.imageData,
            IU = new BASIS.BasisFile(NU),
            pU = function(UU) {
              const XU = UU.getHasAlpha(),
                zU = UU.getNumImages(),
                cU = [];
              for (let yU = 0; yU < zU; yU++) {
                const XU = {
                    levels: []
                  },
                  zU = UU.getNumLevels(yU);
                for (let cU = 0; cU < zU; cU++) {
                  const zU = {
                    width: UU.getImageWidth(yU, cU),
                    height: UU.getImageHeight(yU, cU)
                  };
                  XU.levels.push(zU)
                }
                cU.push(XU)
              }
              return {
                hasAlpha: XU,
                images: cU
              }
            }(IU);
          let aU = YU.data.ignoreSupportedFormats ? null : function(DU, EU) {
              let YU = null;
              DU.supportedCompressionFormats && (YU = DU.supportedCompressionFormats.astc ? FU : DU.supportedCompressionFormats.bc7 ? yU : DU.supportedCompressionFormats.s3tc ? EU.hasAlpha ? cU : zU : DU.supportedCompressionFormats.pvrtc ? EU.hasAlpha ? AU : QU : DU.supportedCompressionFormats.etc2 ? XU : DU.supportedCompressionFormats.etc1 ? UU : oU);
              return YU
            }(YU.data.config, pU),
            tU = !1;
          null === aU && (tU = !0, aU = pU.hasAlpha ? cU : zU);
          let gU = !0;
          IU.startTranscoding() || (gU = !1);
          const kU = [];
          for (let UU = 0; UU < pU.images.length && gU; UU++) {
            const XU = pU.images[UU];
            if (void 0 === DU.loadSingleImage || DU.loadSingleImage === UU) {
              let zU = XU.levels.length;
              !1 === DU.loadMipmapLevels && (zU = 1);
              for (let cU = 0; cU < zU; cU++) {
                const zU = XU.levels[cU],
                  yU = EU(IU, UU, cU, aU, tU);
                if (!yU) {
                  gU = !1;
                  break
                }
                zU.transcodedPixels = yU, kU.push(zU.transcodedPixels.buffer)
              }
            }
          }
          IU.close(), IU.delete(), tU && (aU = -1), gU ? postMessage({
            action: "transcode",
            success: gU,
            id: YU.data.id,
            fileInfo: pU,
            format: aU
          }, kU) : postMessage({
            action: "transcode",
            success: gU,
            id: YU.data.id
          })
        }
      }
    }! function(UU) {
      UU[UU.cTFETC1 = 0] = "cTFETC1", UU[UU.cTFETC2 = 1] = "cTFETC2", UU[UU.cTFBC1 = 2] = "cTFBC1", UU[UU.cTFBC3 = 3] = "cTFBC3", UU[UU.cTFBC4 = 4] = "cTFBC4", UU[UU.cTFBC5 = 5] = "cTFBC5", UU[UU.cTFBC7 = 6] = "cTFBC7", UU[UU.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", UU[UU.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", UU[UU.cTFASTC_4x4 = 10] = "cTFASTC_4x4", UU[UU.cTFATC_RGB = 11] = "cTFATC_RGB", UU[UU.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", UU[UU.cTFRGBA32 = 13] = "cTFRGBA32", UU[UU.cTFRGB565 = 14] = "cTFRGB565", UU[UU.cTFBGR565 = 15] = "cTFBGR565", UU[UU.cTFRGBA4444 = 16] = "cTFRGBA4444", UU[UU.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", UU[UU.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", UU[UU.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", UU[UU.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", UU[UU.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(cU || (cU = {}));
    const DU = {
      JSModuleURL: `${yU.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${yU.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let EU = null,
      YU = null,
      NU = 0;
    const IU = async () => (EU || (EU = new Promise(((UU, XU) => {
      YU ? UU(YU) : yU.j.LoadFileAsync(yU.j.GetBabylonScriptURL(DU.WasmModuleURL)).then((zU => {
        if ("function" !== typeof URL) return XU("Basis transcoder requires an environment with a URL constructor");
        const cU = URL.createObjectURL(new Blob([`(${oU})()`], {
          type: "application/javascript"
        }));
        YU = new Worker(cU), async function(UU, XU, zU) {
          return await new Promise(((cU, QU) => {
            const AU = XU => {
              "init" === XU.data.action ? (UU.removeEventListener("message", AU), cU(UU)) : "error" === XU.data.action && QU(XU.data.error || "error initializing worker")
            };
            UU.addEventListener("message", AU), UU.postMessage({
              action: "init",
              url: zU ? yU.j.GetBabylonScriptURL(zU) : void 0,
              wasmBinary: XU
            }, [XU])
          }))
        }(YU, zU, DU.JSModuleURL).then(UU, XU)
      })).catch(XU)
    }))), await EU), pU = async (UU, XU) => {
      const zU = UU instanceof ArrayBuffer ? new Uint8Array(UU) : UU;
      return await new Promise(((UU, cU) => {
        IU().then((() => {
          const yU = NU++,
            QU = XU => {
              "transcode" === XU.data.action && XU.data.id === yU && (YU.removeEventListener("message", QU), XU.data.success ? UU(XU.data) : cU("Transcode is not supported on this device"))
            };
          YU.addEventListener("message", QU);
          const AU = new Uint8Array(zU.byteLength);
          AU.set(new Uint8Array(zU.buffer, zU.byteOffset, zU.byteLength)), YU.postMessage({
            action: "transcode",
            id: yU,
            imageData: AU,
            config: XU,
            ignoreSupportedFormats: false
          }, [AU.buffer])
        }), (UU => {
          cU(UU)
        }))
      }))
    }, aU = (UU, XU) => {
      let zU = XU._gl?.TEXTURE_2D;
      UU.isCube && (zU = XU._gl?.TEXTURE_CUBE_MAP), XU._bindTextureDirectly(zU, UU, !0)
    }, tU = (UU, XU) => {
      const zU = UU.qp();
      for (let yU = 0; yU < XU.fileInfo.images.length; yU++) {
        const oU = XU.fileInfo.images[yU].levels[0];
        if (UU._invertVScale = UU.invertY, -1 === XU.format || XU.format === cU.cTFRGB565)
          if (UU.type = 10, UU.format = 4, !zU._features.basisNeedsPOT || Math.log2(oU.width) % 1 === 0 && Math.log2(oU.height) % 1 === 0) UU._invertVScale = !UU.invertY, UU.width = oU.width + 3 & -4, UU.height = oU.height + 3 & -4, UU.samplingMode = 2, aU(UU, zU), zU._uploadDataToTextureDirectly(UU, new Uint16Array(oU.transcodedPixels.buffer), yU, 0, 4, !0);
          else {
            const XU = new FU.e(zU, 2);
            UU._invertVScale = UU.invertY, XU.type = 10, XU.format = 4, XU.width = oU.width + 3 & -4, XU.height = oU.height + 3 & -4, aU(XU, zU), zU._uploadDataToTextureDirectly(XU, new Uint16Array(oU.transcodedPixels.buffer), yU, 0, 4, !0), zU._rescaleTexture(XU, UU, zU.scenes[0], zU._getInternalFormat(4), (() => {
              zU._releaseTexture(XU), aU(UU, zU)
            }))
          }
        else {
          UU.width = oU.width, UU.height = oU.height, UU.generateMipMaps = XU.fileInfo.images[yU].levels.length > 1;
          const cU = gU.GetInternalFormatFromBasisFormat(XU.format, zU);
          UU.format = cU, aU(UU, zU);
          const FU = XU.fileInfo.images[yU].levels;
          for (let XU = 0; XU < FU.length; XU++) {
            const QU = FU[XU];
            zU._uploadCompressedDataToTextureDirectly(UU, cU, QU.width, QU.height, QU.transcodedPixels, yU, XU)
          }!zU._features.basisNeedsPOT || Math.log2(UU.width) % 1 === 0 && Math.log2(UU.height) % 1 === 0 || (QU.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), UU._cachedWrapU = AU.e.CLAMP_ADDRESSMODE, UU._cachedWrapV = AU.e.CLAMP_ADDRESSMODE)
        }
      }
    }, gU = {
      JSModuleURL: DU.JSModuleURL,
      WasmModuleURL: DU.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (UU, XU) => {
        let zU;
        switch (UU) {
          case cU.cTFETC1:
            zU = 36196;
            break;
          case cU.cTFBC1:
            zU = 33776;
            break;
          case cU.cTFBC4:
            zU = 33779;
            break;
          case cU.cTFASTC_4x4:
            zU = 37808;
            break;
          case cU.cTFETC2:
            zU = 37496;
            break;
          case cU.cTFBC7:
            zU = 36492
        }
        if (void 0 === zU) throw "The chosen Basis transcoder format is not currently supported";
        return zU
      },
      TranscodeAsync: pU,
      LoadTextureFromTranscodeResult: tU
    };
    class kU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(UU, XU, zU, cU, QU) {
        if (Array.isArray(UU)) return;
        const AU = XU.qp().getCaps(),
          FU = {
            supportedCompressionFormats: {
              etc1: !!AU.etc1,
              s3tc: !!AU.s3tc,
              pvrtc: !!AU.pvrtc,
              etc2: !!AU.etc2,
              astc: !!AU.astc,
              bc7: !!AU.bptc
            }
          };
        pU(UU, FU).then((UU => {
          const zU = UU.fileInfo.images[0].levels.length > 1 && XU.generateMipMaps;
          tU(XU, UU), XU.qp()._setCubeMapTextureParams(XU, zU), XU.isReady = !0, XU.onLoadedObservable.notifyObservers(XU), XU.onLoadedObservable.clear(), cU && cU()
        })).catch((UU => {
          yU.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), XU.isReady = !0, QU && QU(UU)
        }))
      }
      loadData(UU, XU, zU) {
        const cU = XU.qp().getCaps(),
          QU = {
            supportedCompressionFormats: {
              etc1: !!cU.etc1,
              s3tc: !!cU.s3tc,
              pvrtc: !!cU.pvrtc,
              etc2: !!cU.etc2,
              astc: !!cU.astc,
              bc7: !!cU.bptc
            }
          };
        pU(UU, QU).then((UU => {
          const cU = UU.fileInfo.images[0].levels[0],
            yU = UU.fileInfo.images[0].levels.length > 1 && XU.generateMipMaps;
          zU(cU.width, cU.height, yU, -1 !== UU.format, (() => {
            tU(XU, UU)
          }))
        })).catch((UU => {
          yU.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), yU.j.Warn(`Failed to transcode Basis file: ${UU}`), zU(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);