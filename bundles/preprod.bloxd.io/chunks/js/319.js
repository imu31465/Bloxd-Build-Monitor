export const id = 319;
export const ids = [319];
export const modules = {
  42032: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      _BasisTextureLoader: () => DQ
    });
    var wQ, qQ = XQ(40357),
      TQ = XQ(38956),
      zQ = XQ(40724),
      sQ = XQ(40103);

    function FQ() {
      const QQ = 0,
        WQ = 1,
        XQ = 2,
        wQ = 3,
        qQ = 6,
        TQ = 8,
        zQ = 9,
        sQ = 10,
        FQ = 14;
      let PQ = null;

      function gQ(QQ, WQ, XQ, wQ, qQ) {
        const TQ = QQ.getImageTranscodedSizeInBytes(WQ, XQ, wQ);
        let zQ = new Uint8Array(TQ);
        if (!QQ.transcodeImage(zQ, WQ, XQ, wQ, 1, 0)) return null;
        if (qQ) {
          zQ = function(QQ, WQ, XQ, wQ) {
            const qQ = new Uint16Array(4),
              TQ = new Uint16Array(XQ * wQ),
              zQ = XQ / 4,
              sQ = wQ / 4;
            for (let FQ = 0; FQ < sQ; FQ++)
              for (let wQ = 0; wQ < zQ; wQ++) {
                const sQ = WQ + 8 * (FQ * zQ + wQ);
                qQ[0] = QQ[sQ] | QQ[sQ + 1] << 8, qQ[1] = QQ[sQ + 2] | QQ[sQ + 3] << 8, qQ[2] = (2 * (31 & qQ[0]) + 1 * (31 & qQ[1])) / 3 | (2 * (2016 & qQ[0]) + 1 * (2016 & qQ[1])) / 3 & 2016 | (2 * (63488 & qQ[0]) + 1 * (63488 & qQ[1])) / 3 & 63488, qQ[3] = (2 * (31 & qQ[1]) + 1 * (31 & qQ[0])) / 3 | (2 * (2016 & qQ[1]) + 1 * (2016 & qQ[0])) / 3 & 2016 | (2 * (63488 & qQ[1]) + 1 * (63488 & qQ[0])) / 3 & 63488;
                for (let WQ = 0; WQ < 4; WQ++) {
                  const zQ = QQ[sQ + 4 + WQ];
                  let PQ = (4 * FQ + WQ) * XQ + 4 * wQ;
                  TQ[PQ++] = qQ[3 & zQ], TQ[PQ++] = qQ[zQ >> 2 & 3], TQ[PQ++] = qQ[zQ >> 4 & 3], TQ[PQ] = qQ[zQ >> 6 & 3]
                }
              }
            return TQ
          }(zQ, 0, QQ.getImageWidth(WQ, XQ) + 3 & -4, QQ.getImageHeight(WQ, XQ) + 3 & -4)
        }
        return zQ
      }
      onmessage = JQ => {
        if ("init" === JQ.data.action) {
          if (JQ.data.url) try {
            importScripts(JQ.data.url)
          } catch (rQ) {
            postMessage({
              action: "error",
              error: rQ
            })
          }
          PQ || (PQ = BASIS({
            wasmBinary: JQ.data.wasmBinary
          })), null !== PQ && PQ.then((QQ => {
            BASIS = QQ, QQ.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === JQ.data.action) {
          const PQ = JQ.data.config,
            rQ = JQ.data.imageData,
            IQ = new BASIS.BasisFile(rQ),
            jQ = function(QQ) {
              const WQ = QQ.getHasAlpha(),
                XQ = QQ.getNumImages(),
                wQ = [];
              for (let qQ = 0; qQ < XQ; qQ++) {
                const WQ = {
                    levels: []
                  },
                  XQ = QQ.getNumLevels(qQ);
                for (let wQ = 0; wQ < XQ; wQ++) {
                  const XQ = {
                    width: QQ.getImageWidth(qQ, wQ),
                    height: QQ.getImageHeight(qQ, wQ)
                  };
                  WQ.levels.push(XQ)
                }
                wQ.push(WQ)
              }
              return {
                hasAlpha: WQ,
                images: wQ
              }
            }(IQ);
          let BQ = JQ.data.ignoreSupportedFormats ? null : function(PQ, gQ) {
              let JQ = null;
              PQ.supportedCompressionFormats && (JQ = PQ.supportedCompressionFormats.astc ? sQ : PQ.supportedCompressionFormats.bc7 ? qQ : PQ.supportedCompressionFormats.s3tc ? gQ.hasAlpha ? wQ : XQ : PQ.supportedCompressionFormats.pvrtc ? gQ.hasAlpha ? zQ : TQ : PQ.supportedCompressionFormats.etc2 ? WQ : PQ.supportedCompressionFormats.etc1 ? QQ : FQ);
              return JQ
            }(JQ.data.config, jQ),
            yQ = !1;
          null === BQ && (yQ = !0, BQ = jQ.hasAlpha ? wQ : XQ);
          let VQ = !0;
          IQ.startTranscoding() || (VQ = !1);
          const DQ = [];
          for (let QQ = 0; QQ < jQ.images.length && VQ; QQ++) {
            const WQ = jQ.images[QQ];
            if (void 0 === PQ.loadSingleImage || PQ.loadSingleImage === QQ) {
              let XQ = WQ.levels.length;
              !1 === PQ.loadMipmapLevels && (XQ = 1);
              for (let wQ = 0; wQ < XQ; wQ++) {
                const XQ = WQ.levels[wQ],
                  qQ = gQ(IQ, QQ, wQ, BQ, yQ);
                if (!qQ) {
                  VQ = !1;
                  break
                }
                XQ.transcodedPixels = qQ, DQ.push(XQ.transcodedPixels.buffer)
              }
            }
          }
          IQ.close(), IQ.delete(), yQ && (BQ = -1), VQ ? postMessage({
            action: "transcode",
            success: VQ,
            id: JQ.data.id,
            fileInfo: jQ,
            format: BQ
          }, DQ) : postMessage({
            action: "transcode",
            success: VQ,
            id: JQ.data.id
          })
        }
      }
    }! function(QQ) {
      QQ[QQ.cTFETC1 = 0] = "cTFETC1", QQ[QQ.cTFETC2 = 1] = "cTFETC2", QQ[QQ.cTFBC1 = 2] = "cTFBC1", QQ[QQ.cTFBC3 = 3] = "cTFBC3", QQ[QQ.cTFBC4 = 4] = "cTFBC4", QQ[QQ.cTFBC5 = 5] = "cTFBC5", QQ[QQ.cTFBC7 = 6] = "cTFBC7", QQ[QQ.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", QQ[QQ.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", QQ[QQ.cTFASTC_4x4 = 10] = "cTFASTC_4x4", QQ[QQ.cTFATC_RGB = 11] = "cTFATC_RGB", QQ[QQ.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", QQ[QQ.cTFRGBA32 = 13] = "cTFRGBA32", QQ[QQ.cTFRGB565 = 14] = "cTFRGB565", QQ[QQ.cTFBGR565 = 15] = "cTFBGR565", QQ[QQ.cTFRGBA4444 = 16] = "cTFRGBA4444", QQ[QQ.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", QQ[QQ.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", QQ[QQ.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", QQ[QQ.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", QQ[QQ.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(wQ || (wQ = {}));
    const PQ = {
      JSModuleURL: `${qQ.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${qQ.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let gQ = null,
      JQ = null,
      rQ = 0;
    const IQ = async () => (gQ || (gQ = new Promise(((QQ, WQ) => {
      JQ ? QQ(JQ) : qQ.g.LoadFileAsync(qQ.g.GetBabylonScriptURL(PQ.WasmModuleURL)).then((XQ => {
        if ("function" !== typeof URL) return WQ("Basis transcoder requires an environment with a URL constructor");
        const wQ = URL.createObjectURL(new Blob([`(${FQ})()`], {
          type: "application/javascript"
        }));
        JQ = new Worker(wQ), async function(QQ, WQ, XQ) {
          return await new Promise(((wQ, TQ) => {
            const zQ = WQ => {
              "init" === WQ.data.action ? (QQ.removeEventListener("message", zQ), wQ(QQ)) : "error" === WQ.data.action && TQ(WQ.data.error || "error initializing worker")
            };
            QQ.addEventListener("message", zQ), QQ.postMessage({
              action: "init",
              url: XQ ? qQ.g.GetBabylonScriptURL(XQ) : void 0,
              wasmBinary: WQ
            }, [WQ])
          }))
        }(JQ, XQ, PQ.JSModuleURL).then(QQ, WQ)
      })).catch(WQ)
    }))), await gQ), jQ = async (QQ, WQ) => {
      const XQ = QQ instanceof ArrayBuffer ? new Uint8Array(QQ) : QQ;
      return await new Promise(((QQ, wQ) => {
        IQ().then((() => {
          const qQ = rQ++,
            TQ = WQ => {
              "transcode" === WQ.data.action && WQ.data.id === qQ && (JQ.removeEventListener("message", TQ), WQ.data.success ? QQ(WQ.data) : wQ("Transcode is not supported on this device"))
            };
          JQ.addEventListener("message", TQ);
          const zQ = new Uint8Array(XQ.byteLength);
          zQ.set(new Uint8Array(XQ.buffer, XQ.byteOffset, XQ.byteLength)), JQ.postMessage({
            action: "transcode",
            id: qQ,
            imageData: zQ,
            config: WQ,
            ignoreSupportedFormats: false
          }, [zQ.buffer])
        }), (QQ => {
          wQ(QQ)
        }))
      }))
    }, BQ = (QQ, WQ) => {
      let XQ = WQ._gl?.TEXTURE_2D;
      QQ.isCube && (XQ = WQ._gl?.TEXTURE_CUBE_MAP), WQ._bindTextureDirectly(XQ, QQ, !0)
    }, yQ = (QQ, WQ) => {
      const XQ = QQ.Uj();
      for (let qQ = 0; qQ < WQ.fileInfo.images.length; qQ++) {
        const FQ = WQ.fileInfo.images[qQ].levels[0];
        if (QQ._invertVScale = QQ.invertY, -1 === WQ.format || WQ.format === wQ.cTFRGB565)
          if (QQ.type = 10, QQ.format = 4, !XQ._features.basisNeedsPOT || Math.log2(FQ.width) % 1 === 0 && Math.log2(FQ.height) % 1 === 0) QQ._invertVScale = !QQ.invertY, QQ.width = FQ.width + 3 & -4, QQ.height = FQ.height + 3 & -4, QQ.samplingMode = 2, BQ(QQ, XQ), XQ._uploadDataToTextureDirectly(QQ, new Uint16Array(FQ.transcodedPixels.buffer), qQ, 0, 4, !0);
          else {
            const WQ = new sQ.e(XQ, 2);
            QQ._invertVScale = QQ.invertY, WQ.type = 10, WQ.format = 4, WQ.width = FQ.width + 3 & -4, WQ.height = FQ.height + 3 & -4, BQ(WQ, XQ), XQ._uploadDataToTextureDirectly(WQ, new Uint16Array(FQ.transcodedPixels.buffer), qQ, 0, 4, !0), XQ._rescaleTexture(WQ, QQ, XQ.scenes[0], XQ._getInternalFormat(4), (() => {
              XQ._releaseTexture(WQ), BQ(QQ, XQ)
            }))
          }
        else {
          QQ.width = FQ.width, QQ.height = FQ.height, QQ.generateMipMaps = WQ.fileInfo.images[qQ].levels.length > 1;
          const wQ = VQ.GetInternalFormatFromBasisFormat(WQ.format, XQ);
          QQ.format = wQ, BQ(QQ, XQ);
          const sQ = WQ.fileInfo.images[qQ].levels;
          for (let WQ = 0; WQ < sQ.length; WQ++) {
            const TQ = sQ[WQ];
            XQ._uploadCompressedDataToTextureDirectly(QQ, wQ, TQ.width, TQ.height, TQ.transcodedPixels, qQ, WQ)
          }!XQ._features.basisNeedsPOT || Math.log2(QQ.width) % 1 === 0 && Math.log2(QQ.height) % 1 === 0 || (TQ.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), QQ._cachedWrapU = zQ.g.CLAMP_ADDRESSMODE, QQ._cachedWrapV = zQ.g.CLAMP_ADDRESSMODE)
        }
      }
    }, VQ = {
      JSModuleURL: PQ.JSModuleURL,
      WasmModuleURL: PQ.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (QQ, WQ) => {
        let XQ;
        switch (QQ) {
          case wQ.cTFETC1:
            XQ = 36196;
            break;
          case wQ.cTFBC1:
            XQ = 33776;
            break;
          case wQ.cTFBC4:
            XQ = 33779;
            break;
          case wQ.cTFASTC_4x4:
            XQ = 37808;
            break;
          case wQ.cTFETC2:
            XQ = 37496;
            break;
          case wQ.cTFBC7:
            XQ = 36492
        }
        if (void 0 === XQ) throw "The chosen Basis transcoder format is not currently supported";
        return XQ
      },
      TranscodeAsync: jQ,
      LoadTextureFromTranscodeResult: yQ
    };
    class DQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(QQ, WQ, XQ, wQ, TQ) {
        if (Array.isArray(QQ)) return;
        const zQ = WQ.Uj().getCaps(),
          sQ = {
            supportedCompressionFormats: {
              etc1: !!zQ.etc1,
              s3tc: !!zQ.s3tc,
              pvrtc: !!zQ.pvrtc,
              etc2: !!zQ.etc2,
              astc: !!zQ.astc,
              bc7: !!zQ.bptc
            }
          };
        jQ(QQ, sQ).then((QQ => {
          const XQ = QQ.fileInfo.images[0].levels.length > 1 && WQ.generateMipMaps;
          yQ(WQ, QQ), WQ.Uj()._setCubeMapTextureParams(WQ, XQ), WQ.isReady = !0, WQ.onLoadedObservable.notifyObservers(WQ), WQ.onLoadedObservable.clear(), wQ && wQ()
        })).catch((QQ => {
          qQ.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), WQ.isReady = !0, TQ && TQ(QQ)
        }))
      }
      loadData(QQ, WQ, XQ) {
        const wQ = WQ.Uj().getCaps(),
          TQ = {
            supportedCompressionFormats: {
              etc1: !!wQ.etc1,
              s3tc: !!wQ.s3tc,
              pvrtc: !!wQ.pvrtc,
              etc2: !!wQ.etc2,
              astc: !!wQ.astc,
              bc7: !!wQ.bptc
            }
          };
        jQ(QQ, TQ).then((QQ => {
          const wQ = QQ.fileInfo.images[0].levels[0],
            qQ = QQ.fileInfo.images[0].levels.length > 1 && WQ.generateMipMaps;
          XQ(wQ.width, wQ.height, qQ, -1 !== QQ.format, (() => {
            yQ(WQ, QQ)
          }))
        })).catch((QQ => {
          qQ.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), qQ.g.Warn(`Failed to transcode Basis file: ${QQ}`), XQ(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);