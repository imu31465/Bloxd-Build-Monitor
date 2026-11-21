export const id = 301;
export const ids = [301];
export const modules = {
  41191: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      _BasisTextureLoader: () => MQ
    });
    var LQ, qQ = wQ(39505),
      oQ = wQ(38203),
      DQ = wQ(39897),
      kQ = wQ(39226);

    function vQ() {
      const QQ = 0,
        FQ = 1,
        wQ = 2,
        LQ = 3,
        qQ = 6,
        oQ = 8,
        DQ = 9,
        kQ = 10,
        vQ = 14;
      let mQ = null;

      function uQ(QQ, FQ, wQ, LQ, qQ) {
        const oQ = QQ.getImageTranscodedSizeInBytes(FQ, wQ, LQ);
        let DQ = new Uint8Array(oQ);
        if (!QQ.transcodeImage(DQ, FQ, wQ, LQ, 1, 0)) return null;
        if (qQ) {
          DQ = function(QQ, FQ, wQ, LQ) {
            const qQ = new Uint16Array(4),
              oQ = new Uint16Array(wQ * LQ),
              DQ = wQ / 4,
              kQ = LQ / 4;
            for (let vQ = 0; vQ < kQ; vQ++)
              for (let LQ = 0; LQ < DQ; LQ++) {
                const kQ = FQ + 8 * (vQ * DQ + LQ);
                qQ[0] = QQ[kQ] | QQ[kQ + 1] << 8, qQ[1] = QQ[kQ + 2] | QQ[kQ + 3] << 8, qQ[2] = (2 * (31 & qQ[0]) + 1 * (31 & qQ[1])) / 3 | (2 * (2016 & qQ[0]) + 1 * (2016 & qQ[1])) / 3 & 2016 | (2 * (63488 & qQ[0]) + 1 * (63488 & qQ[1])) / 3 & 63488, qQ[3] = (2 * (31 & qQ[1]) + 1 * (31 & qQ[0])) / 3 | (2 * (2016 & qQ[1]) + 1 * (2016 & qQ[0])) / 3 & 2016 | (2 * (63488 & qQ[1]) + 1 * (63488 & qQ[0])) / 3 & 63488;
                for (let FQ = 0; FQ < 4; FQ++) {
                  const DQ = QQ[kQ + 4 + FQ];
                  let mQ = (4 * vQ + FQ) * wQ + 4 * LQ;
                  oQ[mQ++] = qQ[3 & DQ], oQ[mQ++] = qQ[DQ >> 2 & 3], oQ[mQ++] = qQ[DQ >> 4 & 3], oQ[mQ] = qQ[DQ >> 6 & 3]
                }
              }
            return oQ
          }(DQ, 0, QQ.getImageWidth(FQ, wQ) + 3 & -4, QQ.getImageHeight(FQ, wQ) + 3 & -4)
        }
        return DQ
      }
      onmessage = HQ => {
        if ("init" === HQ.data.action) {
          if (HQ.data.url) try {
            importScripts(HQ.data.url)
          } catch (bQ) {
            postMessage({
              action: "error",
              error: bQ
            })
          }
          mQ || (mQ = BASIS({
            wasmBinary: HQ.data.wasmBinary
          })), null !== mQ && mQ.then((QQ => {
            BASIS = QQ, QQ.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === HQ.data.action) {
          const mQ = HQ.data.config,
            bQ = HQ.data.imageData,
            YQ = new BASIS.BasisFile(bQ),
            xQ = function(QQ) {
              const FQ = QQ.getHasAlpha(),
                wQ = QQ.getNumImages(),
                LQ = [];
              for (let qQ = 0; qQ < wQ; qQ++) {
                const FQ = {
                    levels: []
                  },
                  wQ = QQ.getNumLevels(qQ);
                for (let LQ = 0; LQ < wQ; LQ++) {
                  const wQ = {
                    width: QQ.getImageWidth(qQ, LQ),
                    height: QQ.getImageHeight(qQ, LQ)
                  };
                  FQ.levels.push(wQ)
                }
                LQ.push(FQ)
              }
              return {
                hasAlpha: FQ,
                images: LQ
              }
            }(YQ);
          let AQ = HQ.data.ignoreSupportedFormats ? null : function(mQ, uQ) {
              let HQ = null;
              mQ.supportedCompressionFormats && (HQ = mQ.supportedCompressionFormats.astc ? kQ : mQ.supportedCompressionFormats.bc7 ? qQ : mQ.supportedCompressionFormats.s3tc ? uQ.hasAlpha ? LQ : wQ : mQ.supportedCompressionFormats.pvrtc ? uQ.hasAlpha ? DQ : oQ : mQ.supportedCompressionFormats.etc2 ? FQ : mQ.supportedCompressionFormats.etc1 ? QQ : vQ);
              return HQ
            }(HQ.data.config, xQ),
            tQ = !1;
          null === AQ && (tQ = !0, AQ = xQ.hasAlpha ? LQ : wQ);
          let eQ = !0;
          YQ.startTranscoding() || (eQ = !1);
          const MQ = [];
          for (let QQ = 0; QQ < xQ.images.length && eQ; QQ++) {
            const FQ = xQ.images[QQ];
            if (void 0 === mQ.loadSingleImage || mQ.loadSingleImage === QQ) {
              let wQ = FQ.levels.length;
              !1 === mQ.loadMipmapLevels && (wQ = 1);
              for (let LQ = 0; LQ < wQ; LQ++) {
                const wQ = FQ.levels[LQ],
                  qQ = uQ(YQ, QQ, LQ, AQ, tQ);
                if (!qQ) {
                  eQ = !1;
                  break
                }
                wQ.transcodedPixels = qQ, MQ.push(wQ.transcodedPixels.buffer)
              }
            }
          }
          YQ.close(), YQ.delete(), tQ && (AQ = -1), eQ ? postMessage({
            action: "transcode",
            success: eQ,
            id: HQ.data.id,
            fileInfo: xQ,
            format: AQ
          }, MQ) : postMessage({
            action: "transcode",
            success: eQ,
            id: HQ.data.id
          })
        }
      }
    }! function(QQ) {
      QQ[QQ.cTFETC1 = 0] = "cTFETC1", QQ[QQ.cTFETC2 = 1] = "cTFETC2", QQ[QQ.cTFBC1 = 2] = "cTFBC1", QQ[QQ.cTFBC3 = 3] = "cTFBC3", QQ[QQ.cTFBC4 = 4] = "cTFBC4", QQ[QQ.cTFBC5 = 5] = "cTFBC5", QQ[QQ.cTFBC7 = 6] = "cTFBC7", QQ[QQ.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", QQ[QQ.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", QQ[QQ.cTFASTC_4x4 = 10] = "cTFASTC_4x4", QQ[QQ.cTFATC_RGB = 11] = "cTFATC_RGB", QQ[QQ.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", QQ[QQ.cTFRGBA32 = 13] = "cTFRGBA32", QQ[QQ.cTFRGB565 = 14] = "cTFRGB565", QQ[QQ.cTFBGR565 = 15] = "cTFBGR565", QQ[QQ.cTFRGBA4444 = 16] = "cTFRGBA4444", QQ[QQ.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", QQ[QQ.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", QQ[QQ.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", QQ[QQ.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", QQ[QQ.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(LQ || (LQ = {}));
    const mQ = {
      JSModuleURL: `${qQ.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${qQ.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let uQ = null,
      HQ = null,
      bQ = 0;
    const YQ = async () => (uQ || (uQ = new Promise(((QQ, FQ) => {
      HQ ? QQ(HQ) : qQ.g.LoadFileAsync(qQ.g.GetBabylonScriptURL(mQ.WasmModuleURL)).then((wQ => {
        if ("function" !== typeof URL) return FQ("Basis transcoder requires an environment with a URL constructor");
        const LQ = URL.createObjectURL(new Blob([`(${vQ})()`], {
          type: "application/javascript"
        }));
        HQ = new Worker(LQ), async function(QQ, FQ, wQ) {
          return await new Promise(((LQ, oQ) => {
            const DQ = FQ => {
              "init" === FQ.data.action ? (QQ.removeEventListener("message", DQ), LQ(QQ)) : "error" === FQ.data.action && oQ(FQ.data.error || "error initializing worker")
            };
            QQ.addEventListener("message", DQ), QQ.postMessage({
              action: "init",
              url: wQ ? qQ.g.GetBabylonScriptURL(wQ) : void 0,
              wasmBinary: FQ
            }, [FQ])
          }))
        }(HQ, wQ, mQ.JSModuleURL).then(QQ, FQ)
      })).catch(FQ)
    }))), await uQ), xQ = async (QQ, FQ) => {
      const wQ = QQ instanceof ArrayBuffer ? new Uint8Array(QQ) : QQ;
      return await new Promise(((QQ, LQ) => {
        YQ().then((() => {
          const qQ = bQ++,
            oQ = FQ => {
              "transcode" === FQ.data.action && FQ.data.id === qQ && (HQ.removeEventListener("message", oQ), FQ.data.success ? QQ(FQ.data) : LQ("Transcode is not supported on this device"))
            };
          HQ.addEventListener("message", oQ);
          const DQ = new Uint8Array(wQ.byteLength);
          DQ.set(new Uint8Array(wQ.buffer, wQ.byteOffset, wQ.byteLength)), HQ.postMessage({
            action: "transcode",
            id: qQ,
            imageData: DQ,
            config: FQ,
            ignoreSupportedFormats: false
          }, [DQ.buffer])
        }), (QQ => {
          LQ(QQ)
        }))
      }))
    }, AQ = (QQ, FQ) => {
      let wQ = FQ._gl?.TEXTURE_2D;
      QQ.isCube && (wQ = FQ._gl?.TEXTURE_CUBE_MAP), FQ._bindTextureDirectly(wQ, QQ, !0)
    }, tQ = (QQ, FQ) => {
      const wQ = QQ.Wx();
      for (let qQ = 0; qQ < FQ.fileInfo.images.length; qQ++) {
        const vQ = FQ.fileInfo.images[qQ].levels[0];
        if (QQ._invertVScale = QQ.invertY, -1 === FQ.format || FQ.format === LQ.cTFRGB565)
          if (QQ.type = 10, QQ.format = 4, !wQ._features.basisNeedsPOT || Math.log2(vQ.width) % 1 === 0 && Math.log2(vQ.height) % 1 === 0) QQ._invertVScale = !QQ.invertY, QQ.width = vQ.width + 3 & -4, QQ.height = vQ.height + 3 & -4, QQ.samplingMode = 2, AQ(QQ, wQ), wQ._uploadDataToTextureDirectly(QQ, new Uint16Array(vQ.transcodedPixels.buffer), qQ, 0, 4, !0);
          else {
            const FQ = new kQ.d(wQ, 2);
            QQ._invertVScale = QQ.invertY, FQ.type = 10, FQ.format = 4, FQ.width = vQ.width + 3 & -4, FQ.height = vQ.height + 3 & -4, AQ(FQ, wQ), wQ._uploadDataToTextureDirectly(FQ, new Uint16Array(vQ.transcodedPixels.buffer), qQ, 0, 4, !0), wQ._rescaleTexture(FQ, QQ, wQ.scenes[0], wQ._getInternalFormat(4), (() => {
              wQ._releaseTexture(FQ), AQ(QQ, wQ)
            }))
          }
        else {
          QQ.width = vQ.width, QQ.height = vQ.height, QQ.generateMipMaps = FQ.fileInfo.images[qQ].levels.length > 1;
          const LQ = eQ.GetInternalFormatFromBasisFormat(FQ.format, wQ);
          QQ.format = LQ, AQ(QQ, wQ);
          const kQ = FQ.fileInfo.images[qQ].levels;
          for (let FQ = 0; FQ < kQ.length; FQ++) {
            const oQ = kQ[FQ];
            wQ._uploadCompressedDataToTextureDirectly(QQ, LQ, oQ.width, oQ.height, oQ.transcodedPixels, qQ, FQ)
          }!wQ._features.basisNeedsPOT || Math.log2(QQ.width) % 1 === 0 && Math.log2(QQ.height) % 1 === 0 || (oQ.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), QQ._cachedWrapU = DQ.e.CLAMP_ADDRESSMODE, QQ._cachedWrapV = DQ.e.CLAMP_ADDRESSMODE)
        }
      }
    }, eQ = {
      JSModuleURL: mQ.JSModuleURL,
      WasmModuleURL: mQ.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (QQ, FQ) => {
        let wQ;
        switch (QQ) {
          case LQ.cTFETC1:
            wQ = 36196;
            break;
          case LQ.cTFBC1:
            wQ = 33776;
            break;
          case LQ.cTFBC4:
            wQ = 33779;
            break;
          case LQ.cTFASTC_4x4:
            wQ = 37808;
            break;
          case LQ.cTFETC2:
            wQ = 37496;
            break;
          case LQ.cTFBC7:
            wQ = 36492
        }
        if (void 0 === wQ) throw "The chosen Basis transcoder format is not currently supported";
        return wQ
      },
      TranscodeAsync: xQ,
      LoadTextureFromTranscodeResult: tQ
    };
    class MQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(QQ, FQ, wQ, LQ, oQ) {
        if (Array.isArray(QQ)) return;
        const DQ = FQ.Wx().getCaps(),
          kQ = {
            supportedCompressionFormats: {
              etc1: !!DQ.etc1,
              s3tc: !!DQ.s3tc,
              pvrtc: !!DQ.pvrtc,
              etc2: !!DQ.etc2,
              astc: !!DQ.astc,
              bc7: !!DQ.bptc
            }
          };
        xQ(QQ, kQ).then((QQ => {
          const wQ = QQ.fileInfo.images[0].levels.length > 1 && FQ.generateMipMaps;
          tQ(FQ, QQ), FQ.Wx()._setCubeMapTextureParams(FQ, wQ), FQ.isReady = !0, FQ.onLoadedObservable.notifyObservers(FQ), FQ.onLoadedObservable.clear(), LQ && LQ()
        })).catch((QQ => {
          qQ.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), FQ.isReady = !0, oQ && oQ(QQ)
        }))
      }
      loadData(QQ, FQ, wQ) {
        const LQ = FQ.Wx().getCaps(),
          oQ = {
            supportedCompressionFormats: {
              etc1: !!LQ.etc1,
              s3tc: !!LQ.s3tc,
              pvrtc: !!LQ.pvrtc,
              etc2: !!LQ.etc2,
              astc: !!LQ.astc,
              bc7: !!LQ.bptc
            }
          };
        xQ(QQ, oQ).then((QQ => {
          const LQ = QQ.fileInfo.images[0].levels[0],
            qQ = QQ.fileInfo.images[0].levels.length > 1 && FQ.generateMipMaps;
          wQ(LQ.width, LQ.height, qQ, -1 !== QQ.format, (() => {
            tQ(FQ, QQ)
          }))
        })).catch((QQ => {
          qQ.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), qQ.g.Warn(`Failed to transcode Basis file: ${QQ}`), wQ(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);