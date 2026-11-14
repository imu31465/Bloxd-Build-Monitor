export const id = 280;
export const ids = [280];
export const modules = {
  39626: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      _BasisTextureLoader: () => TF
    });
    var CF, AF = SF(38065),
      uF = SF(37076),
      hF = SF(38448),
      bW = SF(37796);

    function dF() {
      const FF = 0,
        WF = 1,
        SF = 2,
        CF = 3,
        AF = 6,
        uF = 8,
        hF = 9,
        bW = 10,
        dF = 14;
      let PF = null;

      function RF(FF, WF, SF, CF, AF) {
        const uF = FF.getImageTranscodedSizeInBytes(WF, SF, CF);
        let hF = new Uint8Array(uF);
        if (!FF.transcodeImage(hF, WF, SF, CF, 1, 0)) return null;
        if (AF) {
          hF = function(FF, WF, SF, CF) {
            const AF = new Uint16Array(4),
              uF = new Uint16Array(SF * CF),
              hF = SF / 4,
              bW = CF / 4;
            for (let dF = 0; dF < bW; dF++)
              for (let CF = 0; CF < hF; CF++) {
                const bW = WF + 8 * (dF * hF + CF);
                AF[0] = FF[bW] | FF[bW + 1] << 8, AF[1] = FF[bW + 2] | FF[bW + 3] << 8, AF[2] = (2 * (31 & AF[0]) + 1 * (31 & AF[1])) / 3 | (2 * (2016 & AF[0]) + 1 * (2016 & AF[1])) / 3 & 2016 | (2 * (63488 & AF[0]) + 1 * (63488 & AF[1])) / 3 & 63488, AF[3] = (2 * (31 & AF[1]) + 1 * (31 & AF[0])) / 3 | (2 * (2016 & AF[1]) + 1 * (2016 & AF[0])) / 3 & 2016 | (2 * (63488 & AF[1]) + 1 * (63488 & AF[0])) / 3 & 63488;
                for (let WF = 0; WF < 4; WF++) {
                  const hF = FF[bW + 4 + WF];
                  let PF = (4 * dF + WF) * SF + 4 * CF;
                  uF[PF++] = AF[3 & hF], uF[PF++] = AF[hF >> 2 & 3], uF[PF++] = AF[hF >> 4 & 3], uF[PF] = AF[hF >> 6 & 3]
                }
              }
            return uF
          }(hF, 0, FF.getImageWidth(WF, SF) + 3 & -4, FF.getImageHeight(WF, SF) + 3 & -4)
        }
        return hF
      }
      onmessage = iW => {
        if ("init" === iW.data.action) {
          if (iW.data.url) try {
            importScripts(iW.data.url)
          } catch (eF) {
            postMessage({
              action: "error",
              error: eF
            })
          }
          PF || (PF = BASIS({
            wasmBinary: iW.data.wasmBinary
          })), null !== PF && PF.then((FF => {
            BASIS = FF, FF.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === iW.data.action) {
          const PF = iW.data.config,
            eF = iW.data.imageData,
            EF = new BASIS.BasisFile(eF),
            QF = function(FF) {
              const WF = FF.getHasAlpha(),
                SF = FF.getNumImages(),
                CF = [];
              for (let AF = 0; AF < SF; AF++) {
                const WF = {
                    levels: []
                  },
                  SF = FF.getNumLevels(AF);
                for (let CF = 0; CF < SF; CF++) {
                  const SF = {
                    width: FF.getImageWidth(AF, CF),
                    height: FF.getImageHeight(AF, CF)
                  };
                  WF.levels.push(SF)
                }
                CF.push(WF)
              }
              return {
                hasAlpha: WF,
                images: CF
              }
            }(EF);
          let rW = iW.data.ignoreSupportedFormats ? null : function(PF, RF) {
              let iW = null;
              PF.supportedCompressionFormats && (iW = PF.supportedCompressionFormats.astc ? bW : PF.supportedCompressionFormats.bc7 ? AF : PF.supportedCompressionFormats.s3tc ? RF.hasAlpha ? CF : SF : PF.supportedCompressionFormats.pvrtc ? RF.hasAlpha ? hF : uF : PF.supportedCompressionFormats.etc2 ? WF : PF.supportedCompressionFormats.etc1 ? FF : dF);
              return iW
            }(iW.data.config, QF),
            gW = !1;
          null === rW && (gW = !0, rW = QF.hasAlpha ? CF : SF);
          let tW = !0;
          EF.startTranscoding() || (tW = !1);
          const TF = [];
          for (let FF = 0; FF < QF.images.length && tW; FF++) {
            const WF = QF.images[FF];
            if (void 0 === PF.loadSingleImage || PF.loadSingleImage === FF) {
              let SF = WF.levels.length;
              !1 === PF.loadMipmapLevels && (SF = 1);
              for (let CF = 0; CF < SF; CF++) {
                const SF = WF.levels[CF],
                  AF = RF(EF, FF, CF, rW, gW);
                if (!AF) {
                  tW = !1;
                  break
                }
                SF.transcodedPixels = AF, TF.push(SF.transcodedPixels.buffer)
              }
            }
          }
          EF.close(), EF.delete(), gW && (rW = -1), tW ? postMessage({
            action: "transcode",
            success: tW,
            id: iW.data.id,
            fileInfo: QF,
            format: rW
          }, TF) : postMessage({
            action: "transcode",
            success: tW,
            id: iW.data.id
          })
        }
      }
    }! function(FF) {
      FF[FF.cTFETC1 = 0] = "cTFETC1", FF[FF.cTFETC2 = 1] = "cTFETC2", FF[FF.cTFBC1 = 2] = "cTFBC1", FF[FF.cTFBC3 = 3] = "cTFBC3", FF[FF.cTFBC4 = 4] = "cTFBC4", FF[FF.cTFBC5 = 5] = "cTFBC5", FF[FF.cTFBC7 = 6] = "cTFBC7", FF[FF.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", FF[FF.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", FF[FF.cTFASTC_4x4 = 10] = "cTFASTC_4x4", FF[FF.cTFATC_RGB = 11] = "cTFATC_RGB", FF[FF.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", FF[FF.cTFRGBA32 = 13] = "cTFRGBA32", FF[FF.cTFRGB565 = 14] = "cTFRGB565", FF[FF.cTFBGR565 = 15] = "cTFBGR565", FF[FF.cTFRGBA4444 = 16] = "cTFRGBA4444", FF[FF.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", FF[FF.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", FF[FF.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", FF[FF.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", FF[FF.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(CF || (CF = {}));
    const PF = {
      JSModuleURL: `${AF.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${AF.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let RF = null,
      iW = null,
      eF = 0;
    const EF = async () => (RF || (RF = new Promise(((FF, WF) => {
      iW ? FF(iW) : AF.h.LoadFileAsync(AF.h.GetBabylonScriptURL(PF.WasmModuleURL)).then((SF => {
        if ("function" !== typeof URL) return WF("Basis transcoder requires an environment with a URL constructor");
        const CF = URL.createObjectURL(new Blob([`(${dF})()`], {
          type: "application/javascript"
        }));
        iW = new Worker(CF), async function(FF, WF, SF) {
          return await new Promise(((CF, uF) => {
            const hF = WF => {
              "init" === WF.data.action ? (FF.removeEventListener("message", hF), CF(FF)) : "error" === WF.data.action && uF(WF.data.error || "error initializing worker")
            };
            FF.addEventListener("message", hF), FF.postMessage({
              action: "init",
              url: SF ? AF.h.GetBabylonScriptURL(SF) : void 0,
              wasmBinary: WF
            }, [WF])
          }))
        }(iW, SF, PF.JSModuleURL).then(FF, WF)
      })).catch(WF)
    }))), await RF), QF = async (FF, WF) => {
      const SF = FF instanceof ArrayBuffer ? new Uint8Array(FF) : FF;
      return await new Promise(((FF, CF) => {
        EF().then((() => {
          const AF = eF++,
            uF = WF => {
              "transcode" === WF.data.action && WF.data.id === AF && (iW.removeEventListener("message", uF), WF.data.success ? FF(WF.data) : CF("Transcode is not supported on this device"))
            };
          iW.addEventListener("message", uF);
          const hF = new Uint8Array(SF.byteLength);
          hF.set(new Uint8Array(SF.buffer, SF.byteOffset, SF.byteLength)), iW.postMessage({
            action: "transcode",
            id: AF,
            imageData: hF,
            config: WF,
            ignoreSupportedFormats: false
          }, [hF.buffer])
        }), (FF => {
          CF(FF)
        }))
      }))
    }, rW = (FF, WF) => {
      let SF = WF._gl?.TEXTURE_2D;
      FF.isCube && (SF = WF._gl?.TEXTURE_CUBE_MAP), WF._bindTextureDirectly(SF, FF, !0)
    }, gW = (FF, WF) => {
      const SF = FF.sC();
      for (let AF = 0; AF < WF.fileInfo.images.length; AF++) {
        const dF = WF.fileInfo.images[AF].levels[0];
        if (FF._invertVScale = FF.invertY, -1 === WF.format || WF.format === CF.cTFRGB565)
          if (FF.type = 10, FF.format = 4, !SF._features.basisNeedsPOT || Math.log2(dF.width) % 1 === 0 && Math.log2(dF.height) % 1 === 0) FF._invertVScale = !FF.invertY, FF.width = dF.width + 3 & -4, FF.height = dF.height + 3 & -4, FF.samplingMode = 2, rW(FF, SF), SF._uploadDataToTextureDirectly(FF, new Uint16Array(dF.transcodedPixels.buffer), AF, 0, 4, !0);
          else {
            const WF = new bW.b(SF, 2);
            FF._invertVScale = FF.invertY, WF.type = 10, WF.format = 4, WF.width = dF.width + 3 & -4, WF.height = dF.height + 3 & -4, rW(WF, SF), SF._uploadDataToTextureDirectly(WF, new Uint16Array(dF.transcodedPixels.buffer), AF, 0, 4, !0), SF._rescaleTexture(WF, FF, SF.scenes[0], SF._getInternalFormat(4), (() => {
              SF._releaseTexture(WF), rW(FF, SF)
            }))
          }
        else {
          FF.width = dF.width, FF.height = dF.height, FF.generateMipMaps = WF.fileInfo.images[AF].levels.length > 1;
          const CF = tW.GetInternalFormatFromBasisFormat(WF.format, SF);
          FF.format = CF, rW(FF, SF);
          const bW = WF.fileInfo.images[AF].levels;
          for (let WF = 0; WF < bW.length; WF++) {
            const uF = bW[WF];
            SF._uploadCompressedDataToTextureDirectly(FF, CF, uF.width, uF.height, uF.transcodedPixels, AF, WF)
          }!SF._features.basisNeedsPOT || Math.log2(FF.width) % 1 === 0 && Math.log2(FF.height) % 1 === 0 || (uF.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), FF._cachedWrapU = hF.i.CLAMP_ADDRESSMODE, FF._cachedWrapV = hF.i.CLAMP_ADDRESSMODE)
        }
      }
    }, tW = {
      JSModuleURL: PF.JSModuleURL,
      WasmModuleURL: PF.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (FF, WF) => {
        let SF;
        switch (FF) {
          case CF.cTFETC1:
            SF = 36196;
            break;
          case CF.cTFBC1:
            SF = 33776;
            break;
          case CF.cTFBC4:
            SF = 33779;
            break;
          case CF.cTFASTC_4x4:
            SF = 37808;
            break;
          case CF.cTFETC2:
            SF = 37496;
            break;
          case CF.cTFBC7:
            SF = 36492
        }
        if (void 0 === SF) throw "The chosen Basis transcoder format is not currently supported";
        return SF
      },
      TranscodeAsync: QF,
      LoadTextureFromTranscodeResult: gW
    };
    class TF {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(FF, WF, SF, CF, uF) {
        if (Array.isArray(FF)) return;
        const hF = WF.sC().getCaps(),
          bW = {
            supportedCompressionFormats: {
              etc1: !!hF.etc1,
              s3tc: !!hF.s3tc,
              pvrtc: !!hF.pvrtc,
              etc2: !!hF.etc2,
              astc: !!hF.astc,
              bc7: !!hF.bptc
            }
          };
        QF(FF, bW).then((FF => {
          const SF = FF.fileInfo.images[0].levels.length > 1 && WF.generateMipMaps;
          gW(WF, FF), WF.sC()._setCubeMapTextureParams(WF, SF), WF.isReady = !0, WF.onLoadedObservable.notifyObservers(WF), WF.onLoadedObservable.clear(), CF && CF()
        })).catch((FF => {
          AF.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), WF.isReady = !0, uF && uF(FF)
        }))
      }
      loadData(FF, WF, SF) {
        const CF = WF.sC().getCaps(),
          uF = {
            supportedCompressionFormats: {
              etc1: !!CF.etc1,
              s3tc: !!CF.s3tc,
              pvrtc: !!CF.pvrtc,
              etc2: !!CF.etc2,
              astc: !!CF.astc,
              bc7: !!CF.bptc
            }
          };
        QF(FF, uF).then((FF => {
          const CF = FF.fileInfo.images[0].levels[0],
            AF = FF.fileInfo.images[0].levels.length > 1 && WF.generateMipMaps;
          SF(CF.width, CF.height, AF, -1 !== FF.format, (() => {
            gW(WF, FF)
          }))
        })).catch((FF => {
          AF.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), AF.h.Warn(`Failed to transcode Basis file: ${FF}`), SF(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);