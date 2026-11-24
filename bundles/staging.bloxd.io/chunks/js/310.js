export const id = 310;
export const ids = [310];
export const modules = {
  41806: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      _BasisTextureLoader: () => nS
    });
    var tS, bS = gS(40133),
      XS = gS(38687),
      xS = gS(40510),
      NS = gS(39877);

    function qS() {
      const SS = 0,
        HS = 1,
        gS = 2,
        tS = 3,
        bS = 6,
        XS = 8,
        xS = 9,
        NS = 10,
        qS = 14;
      let uS = null;

      function IS(SS, HS, gS, tS, bS) {
        const XS = SS.getImageTranscodedSizeInBytes(HS, gS, tS);
        let xS = new Uint8Array(XS);
        if (!SS.transcodeImage(xS, HS, gS, tS, 1, 0)) return null;
        if (bS) {
          xS = function(SS, HS, gS, tS) {
            const bS = new Uint16Array(4),
              XS = new Uint16Array(gS * tS),
              xS = gS / 4,
              NS = tS / 4;
            for (let qS = 0; qS < NS; qS++)
              for (let tS = 0; tS < xS; tS++) {
                const NS = HS + 8 * (qS * xS + tS);
                bS[0] = SS[NS] | SS[NS + 1] << 8, bS[1] = SS[NS + 2] | SS[NS + 3] << 8, bS[2] = (2 * (31 & bS[0]) + 1 * (31 & bS[1])) / 3 | (2 * (2016 & bS[0]) + 1 * (2016 & bS[1])) / 3 & 2016 | (2 * (63488 & bS[0]) + 1 * (63488 & bS[1])) / 3 & 63488, bS[3] = (2 * (31 & bS[1]) + 1 * (31 & bS[0])) / 3 | (2 * (2016 & bS[1]) + 1 * (2016 & bS[0])) / 3 & 2016 | (2 * (63488 & bS[1]) + 1 * (63488 & bS[0])) / 3 & 63488;
                for (let HS = 0; HS < 4; HS++) {
                  const xS = SS[NS + 4 + HS];
                  let uS = (4 * qS + HS) * gS + 4 * tS;
                  XS[uS++] = bS[3 & xS], XS[uS++] = bS[xS >> 2 & 3], XS[uS++] = bS[xS >> 4 & 3], XS[uS] = bS[xS >> 6 & 3]
                }
              }
            return XS
          }(xS, 0, SS.getImageWidth(HS, gS) + 3 & -4, SS.getImageHeight(HS, gS) + 3 & -4)
        }
        return xS
      }
      onmessage = fS => {
        if ("init" === fS.data.action) {
          if (fS.data.url) try {
            importScripts(fS.data.url)
          } catch (kS) {
            postMessage({
              action: "error",
              error: kS
            })
          }
          uS || (uS = BASIS({
            wasmBinary: fS.data.wasmBinary
          })), null !== uS && uS.then((SS => {
            BASIS = SS, SS.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === fS.data.action) {
          const uS = fS.data.config,
            kS = fS.data.imageData,
            aS = new BASIS.BasisFile(kS),
            KS = function(SS) {
              const HS = SS.getHasAlpha(),
                gS = SS.getNumImages(),
                tS = [];
              for (let bS = 0; bS < gS; bS++) {
                const HS = {
                    levels: []
                  },
                  gS = SS.getNumLevels(bS);
                for (let tS = 0; tS < gS; tS++) {
                  const gS = {
                    width: SS.getImageWidth(bS, tS),
                    height: SS.getImageHeight(bS, tS)
                  };
                  HS.levels.push(gS)
                }
                tS.push(HS)
              }
              return {
                hasAlpha: HS,
                images: tS
              }
            }(aS);
          let jS = fS.data.ignoreSupportedFormats ? null : function(uS, IS) {
              let fS = null;
              uS.supportedCompressionFormats && (fS = uS.supportedCompressionFormats.astc ? NS : uS.supportedCompressionFormats.bc7 ? bS : uS.supportedCompressionFormats.s3tc ? IS.hasAlpha ? tS : gS : uS.supportedCompressionFormats.pvrtc ? IS.hasAlpha ? xS : XS : uS.supportedCompressionFormats.etc2 ? HS : uS.supportedCompressionFormats.etc1 ? SS : qS);
              return fS
            }(fS.data.config, KS),
            GS = !1;
          null === jS && (GS = !0, jS = KS.hasAlpha ? tS : gS);
          let CS = !0;
          aS.startTranscoding() || (CS = !1);
          const nS = [];
          for (let SS = 0; SS < KS.images.length && CS; SS++) {
            const HS = KS.images[SS];
            if (void 0 === uS.loadSingleImage || uS.loadSingleImage === SS) {
              let gS = HS.levels.length;
              !1 === uS.loadMipmapLevels && (gS = 1);
              for (let tS = 0; tS < gS; tS++) {
                const gS = HS.levels[tS],
                  bS = IS(aS, SS, tS, jS, GS);
                if (!bS) {
                  CS = !1;
                  break
                }
                gS.transcodedPixels = bS, nS.push(gS.transcodedPixels.buffer)
              }
            }
          }
          aS.close(), aS.delete(), GS && (jS = -1), CS ? postMessage({
            action: "transcode",
            success: CS,
            id: fS.data.id,
            fileInfo: KS,
            format: jS
          }, nS) : postMessage({
            action: "transcode",
            success: CS,
            id: fS.data.id
          })
        }
      }
    }! function(SS) {
      SS[SS.cTFETC1 = 0] = "cTFETC1", SS[SS.cTFETC2 = 1] = "cTFETC2", SS[SS.cTFBC1 = 2] = "cTFBC1", SS[SS.cTFBC3 = 3] = "cTFBC3", SS[SS.cTFBC4 = 4] = "cTFBC4", SS[SS.cTFBC5 = 5] = "cTFBC5", SS[SS.cTFBC7 = 6] = "cTFBC7", SS[SS.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", SS[SS.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", SS[SS.cTFASTC_4x4 = 10] = "cTFASTC_4x4", SS[SS.cTFATC_RGB = 11] = "cTFATC_RGB", SS[SS.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", SS[SS.cTFRGBA32 = 13] = "cTFRGBA32", SS[SS.cTFRGB565 = 14] = "cTFRGB565", SS[SS.cTFBGR565 = 15] = "cTFBGR565", SS[SS.cTFRGBA4444 = 16] = "cTFRGBA4444", SS[SS.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", SS[SS.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", SS[SS.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", SS[SS.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", SS[SS.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(tS || (tS = {}));
    const uS = {
      JSModuleURL: `${bS.k._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${bS.k._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let IS = null,
      fS = null,
      kS = 0;
    const aS = async () => (IS || (IS = new Promise(((SS, HS) => {
      fS ? SS(fS) : bS.k.LoadFileAsync(bS.k.GetBabylonScriptURL(uS.WasmModuleURL)).then((gS => {
        if ("function" !== typeof URL) return HS("Basis transcoder requires an environment with a URL constructor");
        const tS = URL.createObjectURL(new Blob([`(${qS})()`], {
          type: "application/javascript"
        }));
        fS = new Worker(tS), async function(SS, HS, gS) {
          return await new Promise(((tS, XS) => {
            const xS = HS => {
              "init" === HS.data.action ? (SS.removeEventListener("message", xS), tS(SS)) : "error" === HS.data.action && XS(HS.data.error || "error initializing worker")
            };
            SS.addEventListener("message", xS), SS.postMessage({
              action: "init",
              url: gS ? bS.k.GetBabylonScriptURL(gS) : void 0,
              wasmBinary: HS
            }, [HS])
          }))
        }(fS, gS, uS.JSModuleURL).then(SS, HS)
      })).catch(HS)
    }))), await IS), KS = async (SS, HS) => {
      const gS = SS instanceof ArrayBuffer ? new Uint8Array(SS) : SS;
      return await new Promise(((SS, tS) => {
        aS().then((() => {
          const bS = kS++,
            XS = HS => {
              "transcode" === HS.data.action && HS.data.id === bS && (fS.removeEventListener("message", XS), HS.data.success ? SS(HS.data) : tS("Transcode is not supported on this device"))
            };
          fS.addEventListener("message", XS);
          const xS = new Uint8Array(gS.byteLength);
          xS.set(new Uint8Array(gS.buffer, gS.byteOffset, gS.byteLength)), fS.postMessage({
            action: "transcode",
            id: bS,
            imageData: xS,
            config: HS,
            ignoreSupportedFormats: false
          }, [xS.buffer])
        }), (SS => {
          tS(SS)
        }))
      }))
    }, jS = (SS, HS) => {
      let gS = HS._gl?.TEXTURE_2D;
      SS.isCube && (gS = HS._gl?.TEXTURE_CUBE_MAP), HS._bindTextureDirectly(gS, SS, !0)
    }, GS = (SS, HS) => {
      const gS = SS.AK();
      for (let bS = 0; bS < HS.fileInfo.images.length; bS++) {
        const qS = HS.fileInfo.images[bS].levels[0];
        if (SS._invertVScale = SS.invertY, -1 === HS.format || HS.format === tS.cTFRGB565)
          if (SS.type = 10, SS.format = 4, !gS._features.basisNeedsPOT || Math.log2(qS.width) % 1 === 0 && Math.log2(qS.height) % 1 === 0) SS._invertVScale = !SS.invertY, SS.width = qS.width + 3 & -4, SS.height = qS.height + 3 & -4, SS.samplingMode = 2, jS(SS, gS), gS._uploadDataToTextureDirectly(SS, new Uint16Array(qS.transcodedPixels.buffer), bS, 0, 4, !0);
          else {
            const HS = new NS.e(gS, 2);
            SS._invertVScale = SS.invertY, HS.type = 10, HS.format = 4, HS.width = qS.width + 3 & -4, HS.height = qS.height + 3 & -4, jS(HS, gS), gS._uploadDataToTextureDirectly(HS, new Uint16Array(qS.transcodedPixels.buffer), bS, 0, 4, !0), gS._rescaleTexture(HS, SS, gS.scenes[0], gS._getInternalFormat(4), (() => {
              gS._releaseTexture(HS), jS(SS, gS)
            }))
          }
        else {
          SS.width = qS.width, SS.height = qS.height, SS.generateMipMaps = HS.fileInfo.images[bS].levels.length > 1;
          const tS = CS.GetInternalFormatFromBasisFormat(HS.format, gS);
          SS.format = tS, jS(SS, gS);
          const NS = HS.fileInfo.images[bS].levels;
          for (let HS = 0; HS < NS.length; HS++) {
            const XS = NS[HS];
            gS._uploadCompressedDataToTextureDirectly(SS, tS, XS.width, XS.height, XS.transcodedPixels, bS, HS)
          }!gS._features.basisNeedsPOT || Math.log2(SS.width) % 1 === 0 && Math.log2(SS.height) % 1 === 0 || (XS.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), SS._cachedWrapU = xS.i.CLAMP_ADDRESSMODE, SS._cachedWrapV = xS.i.CLAMP_ADDRESSMODE)
        }
      }
    }, CS = {
      JSModuleURL: uS.JSModuleURL,
      WasmModuleURL: uS.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (SS, HS) => {
        let gS;
        switch (SS) {
          case tS.cTFETC1:
            gS = 36196;
            break;
          case tS.cTFBC1:
            gS = 33776;
            break;
          case tS.cTFBC4:
            gS = 33779;
            break;
          case tS.cTFASTC_4x4:
            gS = 37808;
            break;
          case tS.cTFETC2:
            gS = 37496;
            break;
          case tS.cTFBC7:
            gS = 36492
        }
        if (void 0 === gS) throw "The chosen Basis transcoder format is not currently supported";
        return gS
      },
      TranscodeAsync: KS,
      LoadTextureFromTranscodeResult: GS
    };
    class nS {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(SS, HS, gS, tS, XS) {
        if (Array.isArray(SS)) return;
        const xS = HS.AK().getCaps(),
          NS = {
            supportedCompressionFormats: {
              etc1: !!xS.etc1,
              s3tc: !!xS.s3tc,
              pvrtc: !!xS.pvrtc,
              etc2: !!xS.etc2,
              astc: !!xS.astc,
              bc7: !!xS.bptc
            }
          };
        KS(SS, NS).then((SS => {
          const gS = SS.fileInfo.images[0].levels.length > 1 && HS.generateMipMaps;
          GS(HS, SS), HS.AK()._setCubeMapTextureParams(HS, gS), HS.isReady = !0, HS.onLoadedObservable.notifyObservers(HS), HS.onLoadedObservable.clear(), tS && tS()
        })).catch((SS => {
          bS.k.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), HS.isReady = !0, XS && XS(SS)
        }))
      }
      loadData(SS, HS, gS) {
        const tS = HS.AK().getCaps(),
          XS = {
            supportedCompressionFormats: {
              etc1: !!tS.etc1,
              s3tc: !!tS.s3tc,
              pvrtc: !!tS.pvrtc,
              etc2: !!tS.etc2,
              astc: !!tS.astc,
              bc7: !!tS.bptc
            }
          };
        KS(SS, XS).then((SS => {
          const tS = SS.fileInfo.images[0].levels[0],
            bS = SS.fileInfo.images[0].levels.length > 1 && HS.generateMipMaps;
          gS(tS.width, tS.height, bS, -1 !== SS.format, (() => {
            GS(HS, SS)
          }))
        })).catch((SS => {
          bS.k.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), bS.k.Warn(`Failed to transcode Basis file: ${SS}`), gS(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);