export const id = 300;
export const ids = [300];
export const modules = {
  40879: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      _BasisTextureLoader: () => ND
    });
    var ID, pD = cD(39245),
      iD = cD(38048),
      fD = cD(39595),
      bD = cD(38979);

    function QD() {
      const DD = 0,
        CD = 1,
        cD = 2,
        ID = 3,
        pD = 6,
        iD = 8,
        fD = 9,
        bD = 10,
        QD = 14;
      let wD = null;

      function SD(DD, CD, cD, ID, pD) {
        const iD = DD.getImageTranscodedSizeInBytes(CD, cD, ID);
        let fD = new Uint8Array(iD);
        if (!DD.transcodeImage(fD, CD, cD, ID, 1, 0)) return null;
        if (pD) {
          fD = function(DD, CD, cD, ID) {
            const pD = new Uint16Array(4),
              iD = new Uint16Array(cD * ID),
              fD = cD / 4,
              bD = ID / 4;
            for (let QD = 0; QD < bD; QD++)
              for (let ID = 0; ID < fD; ID++) {
                const bD = CD + 8 * (QD * fD + ID);
                pD[0] = DD[bD] | DD[bD + 1] << 8, pD[1] = DD[bD + 2] | DD[bD + 3] << 8, pD[2] = (2 * (31 & pD[0]) + 1 * (31 & pD[1])) / 3 | (2 * (2016 & pD[0]) + 1 * (2016 & pD[1])) / 3 & 2016 | (2 * (63488 & pD[0]) + 1 * (63488 & pD[1])) / 3 & 63488, pD[3] = (2 * (31 & pD[1]) + 1 * (31 & pD[0])) / 3 | (2 * (2016 & pD[1]) + 1 * (2016 & pD[0])) / 3 & 2016 | (2 * (63488 & pD[1]) + 1 * (63488 & pD[0])) / 3 & 63488;
                for (let CD = 0; CD < 4; CD++) {
                  const fD = DD[bD + 4 + CD];
                  let wD = (4 * QD + CD) * cD + 4 * ID;
                  iD[wD++] = pD[3 & fD], iD[wD++] = pD[fD >> 2 & 3], iD[wD++] = pD[fD >> 4 & 3], iD[wD] = pD[fD >> 6 & 3]
                }
              }
            return iD
          }(fD, 0, DD.getImageWidth(CD, cD) + 3 & -4, DD.getImageHeight(CD, cD) + 3 & -4)
        }
        return fD
      }
      onmessage = BD => {
        if ("init" === BD.data.action) {
          if (BD.data.url) try {
            importScripts(BD.data.url)
          } catch (yD) {
            postMessage({
              action: "error",
              error: yD
            })
          }
          wD || (wD = BASIS({
            wasmBinary: BD.data.wasmBinary
          })), null !== wD && wD.then((DD => {
            BASIS = DD, DD.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === BD.data.action) {
          const wD = BD.data.config,
            yD = BD.data.imageData,
            MD = new BASIS.BasisFile(yD),
            tD = function(DD) {
              const CD = DD.getHasAlpha(),
                cD = DD.getNumImages(),
                ID = [];
              for (let pD = 0; pD < cD; pD++) {
                const CD = {
                    levels: []
                  },
                  cD = DD.getNumLevels(pD);
                for (let ID = 0; ID < cD; ID++) {
                  const cD = {
                    width: DD.getImageWidth(pD, ID),
                    height: DD.getImageHeight(pD, ID)
                  };
                  CD.levels.push(cD)
                }
                ID.push(CD)
              }
              return {
                hasAlpha: CD,
                images: ID
              }
            }(MD);
          let ZD = BD.data.ignoreSupportedFormats ? null : function(wD, SD) {
              let BD = null;
              wD.supportedCompressionFormats && (BD = wD.supportedCompressionFormats.astc ? bD : wD.supportedCompressionFormats.bc7 ? pD : wD.supportedCompressionFormats.s3tc ? SD.hasAlpha ? ID : cD : wD.supportedCompressionFormats.pvrtc ? SD.hasAlpha ? fD : iD : wD.supportedCompressionFormats.etc2 ? CD : wD.supportedCompressionFormats.etc1 ? DD : QD);
              return BD
            }(BD.data.config, tD),
            oD = !1;
          null === ZD && (oD = !0, ZD = tD.hasAlpha ? ID : cD);
          let vD = !0;
          MD.startTranscoding() || (vD = !1);
          const ND = [];
          for (let DD = 0; DD < tD.images.length && vD; DD++) {
            const CD = tD.images[DD];
            if (void 0 === wD.loadSingleImage || wD.loadSingleImage === DD) {
              let cD = CD.levels.length;
              !1 === wD.loadMipmapLevels && (cD = 1);
              for (let ID = 0; ID < cD; ID++) {
                const cD = CD.levels[ID],
                  pD = SD(MD, DD, ID, ZD, oD);
                if (!pD) {
                  vD = !1;
                  break
                }
                cD.transcodedPixels = pD, ND.push(cD.transcodedPixels.buffer)
              }
            }
          }
          MD.close(), MD.delete(), oD && (ZD = -1), vD ? postMessage({
            action: "transcode",
            success: vD,
            id: BD.data.id,
            fileInfo: tD,
            format: ZD
          }, ND) : postMessage({
            action: "transcode",
            success: vD,
            id: BD.data.id
          })
        }
      }
    }! function(DD) {
      DD[DD.cTFETC1 = 0] = "cTFETC1", DD[DD.cTFETC2 = 1] = "cTFETC2", DD[DD.cTFBC1 = 2] = "cTFBC1", DD[DD.cTFBC3 = 3] = "cTFBC3", DD[DD.cTFBC4 = 4] = "cTFBC4", DD[DD.cTFBC5 = 5] = "cTFBC5", DD[DD.cTFBC7 = 6] = "cTFBC7", DD[DD.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", DD[DD.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", DD[DD.cTFASTC_4x4 = 10] = "cTFASTC_4x4", DD[DD.cTFATC_RGB = 11] = "cTFATC_RGB", DD[DD.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", DD[DD.cTFRGBA32 = 13] = "cTFRGBA32", DD[DD.cTFRGB565 = 14] = "cTFRGB565", DD[DD.cTFBGR565 = 15] = "cTFBGR565", DD[DD.cTFRGBA4444 = 16] = "cTFRGBA4444", DD[DD.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", DD[DD.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", DD[DD.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", DD[DD.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", DD[DD.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(ID || (ID = {}));
    const wD = {
      JSModuleURL: `${pD.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${pD.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let SD = null,
      BD = null,
      yD = 0;
    const MD = async () => (SD || (SD = new Promise(((DD, CD) => {
      BD ? DD(BD) : pD.g.LoadFileAsync(pD.g.GetBabylonScriptURL(wD.WasmModuleURL)).then((cD => {
        if ("function" !== typeof URL) return CD("Basis transcoder requires an environment with a URL constructor");
        const ID = URL.createObjectURL(new Blob([`(${QD})()`], {
          type: "application/javascript"
        }));
        BD = new Worker(ID), async function(DD, CD, cD) {
          return await new Promise(((ID, iD) => {
            const fD = CD => {
              "init" === CD.data.action ? (DD.removeEventListener("message", fD), ID(DD)) : "error" === CD.data.action && iD(CD.data.error || "error initializing worker")
            };
            DD.addEventListener("message", fD), DD.postMessage({
              action: "init",
              url: cD ? pD.g.GetBabylonScriptURL(cD) : void 0,
              wasmBinary: CD
            }, [CD])
          }))
        }(BD, cD, wD.JSModuleURL).then(DD, CD)
      })).catch(CD)
    }))), await SD), tD = async (DD, CD) => {
      const cD = DD instanceof ArrayBuffer ? new Uint8Array(DD) : DD;
      return await new Promise(((DD, ID) => {
        MD().then((() => {
          const pD = yD++,
            iD = CD => {
              "transcode" === CD.data.action && CD.data.id === pD && (BD.removeEventListener("message", iD), CD.data.success ? DD(CD.data) : ID("Transcode is not supported on this device"))
            };
          BD.addEventListener("message", iD);
          const fD = new Uint8Array(cD.byteLength);
          fD.set(new Uint8Array(cD.buffer, cD.byteOffset, cD.byteLength)), BD.postMessage({
            action: "transcode",
            id: pD,
            imageData: fD,
            config: CD,
            ignoreSupportedFormats: false
          }, [fD.buffer])
        }), (DD => {
          ID(DD)
        }))
      }))
    }, ZD = (DD, CD) => {
      let cD = CD._gl?.TEXTURE_2D;
      DD.isCube && (cD = CD._gl?.TEXTURE_CUBE_MAP), CD._bindTextureDirectly(cD, DD, !0)
    }, oD = (DD, CD) => {
      const cD = DD.DZ();
      for (let pD = 0; pD < CD.fileInfo.images.length; pD++) {
        const QD = CD.fileInfo.images[pD].levels[0];
        if (DD._invertVScale = DD.invertY, -1 === CD.format || CD.format === ID.cTFRGB565)
          if (DD.type = 10, DD.format = 4, !cD._features.basisNeedsPOT || Math.log2(QD.width) % 1 === 0 && Math.log2(QD.height) % 1 === 0) DD._invertVScale = !DD.invertY, DD.width = QD.width + 3 & -4, DD.height = QD.height + 3 & -4, DD.samplingMode = 2, ZD(DD, cD), cD._uploadDataToTextureDirectly(DD, new Uint16Array(QD.transcodedPixels.buffer), pD, 0, 4, !0);
          else {
            const CD = new bD.c(cD, 2);
            DD._invertVScale = DD.invertY, CD.type = 10, CD.format = 4, CD.width = QD.width + 3 & -4, CD.height = QD.height + 3 & -4, ZD(CD, cD), cD._uploadDataToTextureDirectly(CD, new Uint16Array(QD.transcodedPixels.buffer), pD, 0, 4, !0), cD._rescaleTexture(CD, DD, cD.scenes[0], cD._getInternalFormat(4), (() => {
              cD._releaseTexture(CD), ZD(DD, cD)
            }))
          }
        else {
          DD.width = QD.width, DD.height = QD.height, DD.generateMipMaps = CD.fileInfo.images[pD].levels.length > 1;
          const ID = vD.GetInternalFormatFromBasisFormat(CD.format, cD);
          DD.format = ID, ZD(DD, cD);
          const bD = CD.fileInfo.images[pD].levels;
          for (let CD = 0; CD < bD.length; CD++) {
            const iD = bD[CD];
            cD._uploadCompressedDataToTextureDirectly(DD, ID, iD.width, iD.height, iD.transcodedPixels, pD, CD)
          }!cD._features.basisNeedsPOT || Math.log2(DD.width) % 1 === 0 && Math.log2(DD.height) % 1 === 0 || (iD.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), DD._cachedWrapU = fD.c.CLAMP_ADDRESSMODE, DD._cachedWrapV = fD.c.CLAMP_ADDRESSMODE)
        }
      }
    }, vD = {
      JSModuleURL: wD.JSModuleURL,
      WasmModuleURL: wD.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (DD, CD) => {
        let cD;
        switch (DD) {
          case ID.cTFETC1:
            cD = 36196;
            break;
          case ID.cTFBC1:
            cD = 33776;
            break;
          case ID.cTFBC4:
            cD = 33779;
            break;
          case ID.cTFASTC_4x4:
            cD = 37808;
            break;
          case ID.cTFETC2:
            cD = 37496;
            break;
          case ID.cTFBC7:
            cD = 36492
        }
        if (void 0 === cD) throw "The chosen Basis transcoder format is not currently supported";
        return cD
      },
      TranscodeAsync: tD,
      LoadTextureFromTranscodeResult: oD
    };
    class ND {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(DD, CD, cD, ID, iD) {
        if (Array.isArray(DD)) return;
        const fD = CD.DZ().getCaps(),
          bD = {
            supportedCompressionFormats: {
              etc1: !!fD.etc1,
              s3tc: !!fD.s3tc,
              pvrtc: !!fD.pvrtc,
              etc2: !!fD.etc2,
              astc: !!fD.astc,
              bc7: !!fD.bptc
            }
          };
        tD(DD, bD).then((DD => {
          const cD = DD.fileInfo.images[0].levels.length > 1 && CD.generateMipMaps;
          oD(CD, DD), CD.DZ()._setCubeMapTextureParams(CD, cD), CD.isReady = !0, CD.onLoadedObservable.notifyObservers(CD), CD.onLoadedObservable.clear(), ID && ID()
        })).catch((DD => {
          pD.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), CD.isReady = !0, iD && iD(DD)
        }))
      }
      loadData(DD, CD, cD) {
        const ID = CD.DZ().getCaps(),
          iD = {
            supportedCompressionFormats: {
              etc1: !!ID.etc1,
              s3tc: !!ID.s3tc,
              pvrtc: !!ID.pvrtc,
              etc2: !!ID.etc2,
              astc: !!ID.astc,
              bc7: !!ID.bptc
            }
          };
        tD(DD, iD).then((DD => {
          const ID = DD.fileInfo.images[0].levels[0],
            pD = DD.fileInfo.images[0].levels.length > 1 && CD.generateMipMaps;
          cD(ID.width, ID.height, pD, -1 !== DD.format, (() => {
            oD(CD, DD)
          }))
        })).catch((DD => {
          pD.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), pD.g.Warn(`Failed to transcode Basis file: ${DD}`), cD(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);