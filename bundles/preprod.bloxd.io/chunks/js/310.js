export const id = 310;
export const ids = [310];
export const modules = {
  41604: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      _BasisTextureLoader: () => GC
    });
    var QC, wC = ZC(39913),
      bC = ZC(38507),
      nC = ZC(40303),
      fC = ZC(39650);

    function oC() {
      const CC = 0,
        zC = 1,
        ZC = 2,
        QC = 3,
        wC = 6,
        bC = 8,
        nC = 9,
        fC = 10,
        oC = 14;
      let qC = null;

      function FC(CC, zC, ZC, QC, wC) {
        const bC = CC.getImageTranscodedSizeInBytes(zC, ZC, QC);
        let nC = new Uint8Array(bC);
        if (!CC.transcodeImage(nC, zC, ZC, QC, 1, 0)) return null;
        if (wC) {
          nC = function(CC, zC, ZC, QC) {
            const wC = new Uint16Array(4),
              bC = new Uint16Array(ZC * QC),
              nC = ZC / 4,
              fC = QC / 4;
            for (let oC = 0; oC < fC; oC++)
              for (let QC = 0; QC < nC; QC++) {
                const fC = zC + 8 * (oC * nC + QC);
                wC[0] = CC[fC] | CC[fC + 1] << 8, wC[1] = CC[fC + 2] | CC[fC + 3] << 8, wC[2] = (2 * (31 & wC[0]) + 1 * (31 & wC[1])) / 3 | (2 * (2016 & wC[0]) + 1 * (2016 & wC[1])) / 3 & 2016 | (2 * (63488 & wC[0]) + 1 * (63488 & wC[1])) / 3 & 63488, wC[3] = (2 * (31 & wC[1]) + 1 * (31 & wC[0])) / 3 | (2 * (2016 & wC[1]) + 1 * (2016 & wC[0])) / 3 & 2016 | (2 * (63488 & wC[1]) + 1 * (63488 & wC[0])) / 3 & 63488;
                for (let zC = 0; zC < 4; zC++) {
                  const nC = CC[fC + 4 + zC];
                  let qC = (4 * oC + zC) * ZC + 4 * QC;
                  bC[qC++] = wC[3 & nC], bC[qC++] = wC[nC >> 2 & 3], bC[qC++] = wC[nC >> 4 & 3], bC[qC] = wC[nC >> 6 & 3]
                }
              }
            return bC
          }(nC, 0, CC.getImageWidth(zC, ZC) + 3 & -4, CC.getImageHeight(zC, ZC) + 3 & -4)
        }
        return nC
      }
      onmessage = WC => {
        if ("init" === WC.data.action) {
          if (WC.data.url) try {
            importScripts(WC.data.url)
          } catch (NC) {
            postMessage({
              action: "error",
              error: NC
            })
          }
          qC || (qC = BASIS({
            wasmBinary: WC.data.wasmBinary
          })), null !== qC && qC.then((CC => {
            BASIS = CC, CC.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === WC.data.action) {
          const qC = WC.data.config,
            NC = WC.data.imageData,
            MC = new BASIS.BasisFile(NC),
            gC = function(CC) {
              const zC = CC.getHasAlpha(),
                ZC = CC.getNumImages(),
                QC = [];
              for (let wC = 0; wC < ZC; wC++) {
                const zC = {
                    levels: []
                  },
                  ZC = CC.getNumLevels(wC);
                for (let QC = 0; QC < ZC; QC++) {
                  const ZC = {
                    width: CC.getImageWidth(wC, QC),
                    height: CC.getImageHeight(wC, QC)
                  };
                  zC.levels.push(ZC)
                }
                QC.push(zC)
              }
              return {
                hasAlpha: zC,
                images: QC
              }
            }(MC);
          let SC = WC.data.ignoreSupportedFormats ? null : function(qC, FC) {
              let WC = null;
              qC.supportedCompressionFormats && (WC = qC.supportedCompressionFormats.astc ? fC : qC.supportedCompressionFormats.bc7 ? wC : qC.supportedCompressionFormats.s3tc ? FC.hasAlpha ? QC : ZC : qC.supportedCompressionFormats.pvrtc ? FC.hasAlpha ? nC : bC : qC.supportedCompressionFormats.etc2 ? zC : qC.supportedCompressionFormats.etc1 ? CC : oC);
              return WC
            }(WC.data.config, gC),
            pC = !1;
          null === SC && (pC = !0, SC = gC.hasAlpha ? QC : ZC);
          let PC = !0;
          MC.startTranscoding() || (PC = !1);
          const GC = [];
          for (let CC = 0; CC < gC.images.length && PC; CC++) {
            const zC = gC.images[CC];
            if (void 0 === qC.loadSingleImage || qC.loadSingleImage === CC) {
              let ZC = zC.levels.length;
              !1 === qC.loadMipmapLevels && (ZC = 1);
              for (let QC = 0; QC < ZC; QC++) {
                const ZC = zC.levels[QC],
                  wC = FC(MC, CC, QC, SC, pC);
                if (!wC) {
                  PC = !1;
                  break
                }
                ZC.transcodedPixels = wC, GC.push(ZC.transcodedPixels.buffer)
              }
            }
          }
          MC.close(), MC.delete(), pC && (SC = -1), PC ? postMessage({
            action: "transcode",
            success: PC,
            id: WC.data.id,
            fileInfo: gC,
            format: SC
          }, GC) : postMessage({
            action: "transcode",
            success: PC,
            id: WC.data.id
          })
        }
      }
    }! function(CC) {
      CC[CC.cTFETC1 = 0] = "cTFETC1", CC[CC.cTFETC2 = 1] = "cTFETC2", CC[CC.cTFBC1 = 2] = "cTFBC1", CC[CC.cTFBC3 = 3] = "cTFBC3", CC[CC.cTFBC4 = 4] = "cTFBC4", CC[CC.cTFBC5 = 5] = "cTFBC5", CC[CC.cTFBC7 = 6] = "cTFBC7", CC[CC.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", CC[CC.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", CC[CC.cTFASTC_4x4 = 10] = "cTFASTC_4x4", CC[CC.cTFATC_RGB = 11] = "cTFATC_RGB", CC[CC.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", CC[CC.cTFRGBA32 = 13] = "cTFRGBA32", CC[CC.cTFRGB565 = 14] = "cTFRGB565", CC[CC.cTFBGR565 = 15] = "cTFBGR565", CC[CC.cTFRGBA4444 = 16] = "cTFRGBA4444", CC[CC.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", CC[CC.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", CC[CC.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", CC[CC.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", CC[CC.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(QC || (QC = {}));
    const qC = {
      JSModuleURL: `${wC.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${wC.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let FC = null,
      WC = null,
      NC = 0;
    const MC = async () => (FC || (FC = new Promise(((CC, zC) => {
      WC ? CC(WC) : wC.g.LoadFileAsync(wC.g.GetBabylonScriptURL(qC.WasmModuleURL)).then((ZC => {
        if ("function" !== typeof URL) return zC("Basis transcoder requires an environment with a URL constructor");
        const QC = URL.createObjectURL(new Blob([`(${oC})()`], {
          type: "application/javascript"
        }));
        WC = new Worker(QC), async function(CC, zC, ZC) {
          return await new Promise(((QC, bC) => {
            const nC = zC => {
              "init" === zC.data.action ? (CC.removeEventListener("message", nC), QC(CC)) : "error" === zC.data.action && bC(zC.data.error || "error initializing worker")
            };
            CC.addEventListener("message", nC), CC.postMessage({
              action: "init",
              url: ZC ? wC.g.GetBabylonScriptURL(ZC) : void 0,
              wasmBinary: zC
            }, [zC])
          }))
        }(WC, ZC, qC.JSModuleURL).then(CC, zC)
      })).catch(zC)
    }))), await FC), gC = async (CC, zC) => {
      const ZC = CC instanceof ArrayBuffer ? new Uint8Array(CC) : CC;
      return await new Promise(((CC, QC) => {
        MC().then((() => {
          const wC = NC++,
            bC = zC => {
              "transcode" === zC.data.action && zC.data.id === wC && (WC.removeEventListener("message", bC), zC.data.success ? CC(zC.data) : QC("Transcode is not supported on this device"))
            };
          WC.addEventListener("message", bC);
          const nC = new Uint8Array(ZC.byteLength);
          nC.set(new Uint8Array(ZC.buffer, ZC.byteOffset, ZC.byteLength)), WC.postMessage({
            action: "transcode",
            id: wC,
            imageData: nC,
            config: zC,
            ignoreSupportedFormats: false
          }, [nC.buffer])
        }), (CC => {
          QC(CC)
        }))
      }))
    }, SC = (CC, zC) => {
      let ZC = zC._gl?.TEXTURE_2D;
      CC.isCube && (ZC = zC._gl?.TEXTURE_CUBE_MAP), zC._bindTextureDirectly(ZC, CC, !0)
    }, pC = (CC, zC) => {
      const ZC = CC.mg();
      for (let wC = 0; wC < zC.fileInfo.images.length; wC++) {
        const oC = zC.fileInfo.images[wC].levels[0];
        if (CC._invertVScale = CC.invertY, -1 === zC.format || zC.format === QC.cTFRGB565)
          if (CC.type = 10, CC.format = 4, !ZC._features.basisNeedsPOT || Math.log2(oC.width) % 1 === 0 && Math.log2(oC.height) % 1 === 0) CC._invertVScale = !CC.invertY, CC.width = oC.width + 3 & -4, CC.height = oC.height + 3 & -4, CC.samplingMode = 2, SC(CC, ZC), ZC._uploadDataToTextureDirectly(CC, new Uint16Array(oC.transcodedPixels.buffer), wC, 0, 4, !0);
          else {
            const zC = new fC.c(ZC, 2);
            CC._invertVScale = CC.invertY, zC.type = 10, zC.format = 4, zC.width = oC.width + 3 & -4, zC.height = oC.height + 3 & -4, SC(zC, ZC), ZC._uploadDataToTextureDirectly(zC, new Uint16Array(oC.transcodedPixels.buffer), wC, 0, 4, !0), ZC._rescaleTexture(zC, CC, ZC.scenes[0], ZC._getInternalFormat(4), (() => {
              ZC._releaseTexture(zC), SC(CC, ZC)
            }))
          }
        else {
          CC.width = oC.width, CC.height = oC.height, CC.generateMipMaps = zC.fileInfo.images[wC].levels.length > 1;
          const QC = PC.GetInternalFormatFromBasisFormat(zC.format, ZC);
          CC.format = QC, SC(CC, ZC);
          const fC = zC.fileInfo.images[wC].levels;
          for (let zC = 0; zC < fC.length; zC++) {
            const bC = fC[zC];
            ZC._uploadCompressedDataToTextureDirectly(CC, QC, bC.width, bC.height, bC.transcodedPixels, wC, zC)
          }!ZC._features.basisNeedsPOT || Math.log2(CC.width) % 1 === 0 && Math.log2(CC.height) % 1 === 0 || (bC.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), CC._cachedWrapU = nC.h.CLAMP_ADDRESSMODE, CC._cachedWrapV = nC.h.CLAMP_ADDRESSMODE)
        }
      }
    }, PC = {
      JSModuleURL: qC.JSModuleURL,
      WasmModuleURL: qC.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (CC, zC) => {
        let ZC;
        switch (CC) {
          case QC.cTFETC1:
            ZC = 36196;
            break;
          case QC.cTFBC1:
            ZC = 33776;
            break;
          case QC.cTFBC4:
            ZC = 33779;
            break;
          case QC.cTFASTC_4x4:
            ZC = 37808;
            break;
          case QC.cTFETC2:
            ZC = 37496;
            break;
          case QC.cTFBC7:
            ZC = 36492
        }
        if (void 0 === ZC) throw "The chosen Basis transcoder format is not currently supported";
        return ZC
      },
      TranscodeAsync: gC,
      LoadTextureFromTranscodeResult: pC
    };
    class GC {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(CC, zC, ZC, QC, bC) {
        if (Array.isArray(CC)) return;
        const nC = zC.mg().getCaps(),
          fC = {
            supportedCompressionFormats: {
              etc1: !!nC.etc1,
              s3tc: !!nC.s3tc,
              pvrtc: !!nC.pvrtc,
              etc2: !!nC.etc2,
              astc: !!nC.astc,
              bc7: !!nC.bptc
            }
          };
        gC(CC, fC).then((CC => {
          const ZC = CC.fileInfo.images[0].levels.length > 1 && zC.generateMipMaps;
          pC(zC, CC), zC.mg()._setCubeMapTextureParams(zC, ZC), zC.isReady = !0, zC.onLoadedObservable.notifyObservers(zC), zC.onLoadedObservable.clear(), QC && QC()
        })).catch((CC => {
          wC.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), zC.isReady = !0, bC && bC(CC)
        }))
      }
      loadData(CC, zC, ZC) {
        const QC = zC.mg().getCaps(),
          bC = {
            supportedCompressionFormats: {
              etc1: !!QC.etc1,
              s3tc: !!QC.s3tc,
              pvrtc: !!QC.pvrtc,
              etc2: !!QC.etc2,
              astc: !!QC.astc,
              bc7: !!QC.bptc
            }
          };
        gC(CC, bC).then((CC => {
          const QC = CC.fileInfo.images[0].levels[0],
            wC = CC.fileInfo.images[0].levels.length > 1 && zC.generateMipMaps;
          ZC(QC.width, QC.height, wC, -1 !== CC.format, (() => {
            pC(zC, CC)
          }))
        })).catch((CC => {
          wC.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), wC.g.Warn(`Failed to transcode Basis file: ${CC}`), ZC(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);