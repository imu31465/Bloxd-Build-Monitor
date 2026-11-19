export const id = 300;
export const ids = [300];
export const modules = {
  40841: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      _BasisTextureLoader: () => EY
    });
    var FY, AY = DY(39219),
      IY = DY(38040),
      RY = DY(39596),
      OY = DY(38975);

    function gY() {
      const YY = 0,
        rY = 1,
        DY = 2,
        FY = 3,
        AY = 6,
        IY = 8,
        RY = 9,
        OY = 10,
        gY = 14;
      let aY = null;

      function vY(YY, rY, DY, FY, AY) {
        const IY = YY.getImageTranscodedSizeInBytes(rY, DY, FY);
        let RY = new Uint8Array(IY);
        if (!YY.transcodeImage(RY, rY, DY, FY, 1, 0)) return null;
        if (AY) {
          RY = function(YY, rY, DY, FY) {
            const AY = new Uint16Array(4),
              IY = new Uint16Array(DY * FY),
              RY = DY / 4,
              OY = FY / 4;
            for (let gY = 0; gY < OY; gY++)
              for (let FY = 0; FY < RY; FY++) {
                const OY = rY + 8 * (gY * RY + FY);
                AY[0] = YY[OY] | YY[OY + 1] << 8, AY[1] = YY[OY + 2] | YY[OY + 3] << 8, AY[2] = (2 * (31 & AY[0]) + 1 * (31 & AY[1])) / 3 | (2 * (2016 & AY[0]) + 1 * (2016 & AY[1])) / 3 & 2016 | (2 * (63488 & AY[0]) + 1 * (63488 & AY[1])) / 3 & 63488, AY[3] = (2 * (31 & AY[1]) + 1 * (31 & AY[0])) / 3 | (2 * (2016 & AY[1]) + 1 * (2016 & AY[0])) / 3 & 2016 | (2 * (63488 & AY[1]) + 1 * (63488 & AY[0])) / 3 & 63488;
                for (let rY = 0; rY < 4; rY++) {
                  const RY = YY[OY + 4 + rY];
                  let aY = (4 * gY + rY) * DY + 4 * FY;
                  IY[aY++] = AY[3 & RY], IY[aY++] = AY[RY >> 2 & 3], IY[aY++] = AY[RY >> 4 & 3], IY[aY] = AY[RY >> 6 & 3]
                }
              }
            return IY
          }(RY, 0, YY.getImageWidth(rY, DY) + 3 & -4, YY.getImageHeight(rY, DY) + 3 & -4)
        }
        return RY
      }
      onmessage = uY => {
        if ("init" === uY.data.action) {
          if (uY.data.url) try {
            importScripts(uY.data.url)
          } catch (sY) {
            postMessage({
              action: "error",
              error: sY
            })
          }
          aY || (aY = BASIS({
            wasmBinary: uY.data.wasmBinary
          })), null !== aY && aY.then((YY => {
            BASIS = YY, YY.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === uY.data.action) {
          const aY = uY.data.config,
            sY = uY.data.imageData,
            iY = new BASIS.BasisFile(sY),
            yY = function(YY) {
              const rY = YY.getHasAlpha(),
                DY = YY.getNumImages(),
                FY = [];
              for (let AY = 0; AY < DY; AY++) {
                const rY = {
                    levels: []
                  },
                  DY = YY.getNumLevels(AY);
                for (let FY = 0; FY < DY; FY++) {
                  const DY = {
                    width: YY.getImageWidth(AY, FY),
                    height: YY.getImageHeight(AY, FY)
                  };
                  rY.levels.push(DY)
                }
                FY.push(rY)
              }
              return {
                hasAlpha: rY,
                images: FY
              }
            }(iY);
          let QY = uY.data.ignoreSupportedFormats ? null : function(aY, vY) {
              let uY = null;
              aY.supportedCompressionFormats && (uY = aY.supportedCompressionFormats.astc ? OY : aY.supportedCompressionFormats.bc7 ? AY : aY.supportedCompressionFormats.s3tc ? vY.hasAlpha ? FY : DY : aY.supportedCompressionFormats.pvrtc ? vY.hasAlpha ? RY : IY : aY.supportedCompressionFormats.etc2 ? rY : aY.supportedCompressionFormats.etc1 ? YY : gY);
              return uY
            }(uY.data.config, yY),
            oY = !1;
          null === QY && (oY = !0, QY = yY.hasAlpha ? FY : DY);
          let WY = !0;
          iY.startTranscoding() || (WY = !1);
          const EY = [];
          for (let YY = 0; YY < yY.images.length && WY; YY++) {
            const rY = yY.images[YY];
            if (void 0 === aY.loadSingleImage || aY.loadSingleImage === YY) {
              let DY = rY.levels.length;
              !1 === aY.loadMipmapLevels && (DY = 1);
              for (let FY = 0; FY < DY; FY++) {
                const DY = rY.levels[FY],
                  AY = vY(iY, YY, FY, QY, oY);
                if (!AY) {
                  WY = !1;
                  break
                }
                DY.transcodedPixels = AY, EY.push(DY.transcodedPixels.buffer)
              }
            }
          }
          iY.close(), iY.delete(), oY && (QY = -1), WY ? postMessage({
            action: "transcode",
            success: WY,
            id: uY.data.id,
            fileInfo: yY,
            format: QY
          }, EY) : postMessage({
            action: "transcode",
            success: WY,
            id: uY.data.id
          })
        }
      }
    }! function(YY) {
      YY[YY.cTFETC1 = 0] = "cTFETC1", YY[YY.cTFETC2 = 1] = "cTFETC2", YY[YY.cTFBC1 = 2] = "cTFBC1", YY[YY.cTFBC3 = 3] = "cTFBC3", YY[YY.cTFBC4 = 4] = "cTFBC4", YY[YY.cTFBC5 = 5] = "cTFBC5", YY[YY.cTFBC7 = 6] = "cTFBC7", YY[YY.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", YY[YY.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", YY[YY.cTFASTC_4x4 = 10] = "cTFASTC_4x4", YY[YY.cTFATC_RGB = 11] = "cTFATC_RGB", YY[YY.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", YY[YY.cTFRGBA32 = 13] = "cTFRGBA32", YY[YY.cTFRGB565 = 14] = "cTFRGB565", YY[YY.cTFBGR565 = 15] = "cTFBGR565", YY[YY.cTFRGBA4444 = 16] = "cTFRGBA4444", YY[YY.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", YY[YY.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", YY[YY.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", YY[YY.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", YY[YY.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(FY || (FY = {}));
    const aY = {
      JSModuleURL: `${AY.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${AY.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let vY = null,
      uY = null,
      sY = 0;
    const iY = async () => (vY || (vY = new Promise(((YY, rY) => {
      uY ? YY(uY) : AY.i.LoadFileAsync(AY.i.GetBabylonScriptURL(aY.WasmModuleURL)).then((DY => {
        if ("function" !== typeof URL) return rY("Basis transcoder requires an environment with a URL constructor");
        const FY = URL.createObjectURL(new Blob([`(${gY})()`], {
          type: "application/javascript"
        }));
        uY = new Worker(FY), async function(YY, rY, DY) {
          return await new Promise(((FY, IY) => {
            const RY = rY => {
              "init" === rY.data.action ? (YY.removeEventListener("message", RY), FY(YY)) : "error" === rY.data.action && IY(rY.data.error || "error initializing worker")
            };
            YY.addEventListener("message", RY), YY.postMessage({
              action: "init",
              url: DY ? AY.i.GetBabylonScriptURL(DY) : void 0,
              wasmBinary: rY
            }, [rY])
          }))
        }(uY, DY, aY.JSModuleURL).then(YY, rY)
      })).catch(rY)
    }))), await vY), yY = async (YY, rY) => {
      const DY = YY instanceof ArrayBuffer ? new Uint8Array(YY) : YY;
      return await new Promise(((YY, FY) => {
        iY().then((() => {
          const AY = sY++,
            IY = rY => {
              "transcode" === rY.data.action && rY.data.id === AY && (uY.removeEventListener("message", IY), rY.data.success ? YY(rY.data) : FY("Transcode is not supported on this device"))
            };
          uY.addEventListener("message", IY);
          const RY = new Uint8Array(DY.byteLength);
          RY.set(new Uint8Array(DY.buffer, DY.byteOffset, DY.byteLength)), uY.postMessage({
            action: "transcode",
            id: AY,
            imageData: RY,
            config: rY,
            ignoreSupportedFormats: false
          }, [RY.buffer])
        }), (YY => {
          FY(YY)
        }))
      }))
    }, QY = (YY, rY) => {
      let DY = rY._gl?.TEXTURE_2D;
      YY.isCube && (DY = rY._gl?.TEXTURE_CUBE_MAP), rY._bindTextureDirectly(DY, YY, !0)
    }, oY = (YY, rY) => {
      const DY = YY.ky();
      for (let AY = 0; AY < rY.fileInfo.images.length; AY++) {
        const gY = rY.fileInfo.images[AY].levels[0];
        if (YY._invertVScale = YY.invertY, -1 === rY.format || rY.format === FY.cTFRGB565)
          if (YY.type = 10, YY.format = 4, !DY._features.basisNeedsPOT || Math.log2(gY.width) % 1 === 0 && Math.log2(gY.height) % 1 === 0) YY._invertVScale = !YY.invertY, YY.width = gY.width + 3 & -4, YY.height = gY.height + 3 & -4, YY.samplingMode = 2, QY(YY, DY), DY._uploadDataToTextureDirectly(YY, new Uint16Array(gY.transcodedPixels.buffer), AY, 0, 4, !0);
          else {
            const rY = new OY.c(DY, 2);
            YY._invertVScale = YY.invertY, rY.type = 10, rY.format = 4, rY.width = gY.width + 3 & -4, rY.height = gY.height + 3 & -4, QY(rY, DY), DY._uploadDataToTextureDirectly(rY, new Uint16Array(gY.transcodedPixels.buffer), AY, 0, 4, !0), DY._rescaleTexture(rY, YY, DY.scenes[0], DY._getInternalFormat(4), (() => {
              DY._releaseTexture(rY), QY(YY, DY)
            }))
          }
        else {
          YY.width = gY.width, YY.height = gY.height, YY.generateMipMaps = rY.fileInfo.images[AY].levels.length > 1;
          const FY = WY.GetInternalFormatFromBasisFormat(rY.format, DY);
          YY.format = FY, QY(YY, DY);
          const OY = rY.fileInfo.images[AY].levels;
          for (let rY = 0; rY < OY.length; rY++) {
            const IY = OY[rY];
            DY._uploadCompressedDataToTextureDirectly(YY, FY, IY.width, IY.height, IY.transcodedPixels, AY, rY)
          }!DY._features.basisNeedsPOT || Math.log2(YY.width) % 1 === 0 && Math.log2(YY.height) % 1 === 0 || (IY.d.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), YY._cachedWrapU = RY.i.CLAMP_ADDRESSMODE, YY._cachedWrapV = RY.i.CLAMP_ADDRESSMODE)
        }
      }
    }, WY = {
      JSModuleURL: aY.JSModuleURL,
      WasmModuleURL: aY.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (YY, rY) => {
        let DY;
        switch (YY) {
          case FY.cTFETC1:
            DY = 36196;
            break;
          case FY.cTFBC1:
            DY = 33776;
            break;
          case FY.cTFBC4:
            DY = 33779;
            break;
          case FY.cTFASTC_4x4:
            DY = 37808;
            break;
          case FY.cTFETC2:
            DY = 37496;
            break;
          case FY.cTFBC7:
            DY = 36492
        }
        if (void 0 === DY) throw "The chosen Basis transcoder format is not currently supported";
        return DY
      },
      TranscodeAsync: yY,
      LoadTextureFromTranscodeResult: oY
    };
    class EY {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(YY, rY, DY, FY, IY) {
        if (Array.isArray(YY)) return;
        const RY = rY.ky().getCaps(),
          OY = {
            supportedCompressionFormats: {
              etc1: !!RY.etc1,
              s3tc: !!RY.s3tc,
              pvrtc: !!RY.pvrtc,
              etc2: !!RY.etc2,
              astc: !!RY.astc,
              bc7: !!RY.bptc
            }
          };
        yY(YY, OY).then((YY => {
          const DY = YY.fileInfo.images[0].levels.length > 1 && rY.generateMipMaps;
          oY(rY, YY), rY.ky()._setCubeMapTextureParams(rY, DY), rY.isReady = !0, rY.onLoadedObservable.notifyObservers(rY), rY.onLoadedObservable.clear(), FY && FY()
        })).catch((YY => {
          AY.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), rY.isReady = !0, IY && IY(YY)
        }))
      }
      loadData(YY, rY, DY) {
        const FY = rY.ky().getCaps(),
          IY = {
            supportedCompressionFormats: {
              etc1: !!FY.etc1,
              s3tc: !!FY.s3tc,
              pvrtc: !!FY.pvrtc,
              etc2: !!FY.etc2,
              astc: !!FY.astc,
              bc7: !!FY.bptc
            }
          };
        yY(YY, IY).then((YY => {
          const FY = YY.fileInfo.images[0].levels[0],
            AY = YY.fileInfo.images[0].levels.length > 1 && rY.generateMipMaps;
          DY(FY.width, FY.height, AY, -1 !== YY.format, (() => {
            oY(rY, YY)
          }))
        })).catch((YY => {
          AY.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), AY.i.Warn(`Failed to transcode Basis file: ${YY}`), DY(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);