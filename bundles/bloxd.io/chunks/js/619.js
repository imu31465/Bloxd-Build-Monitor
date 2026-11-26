export const id = 619;
export const ids = [619];
export const modules = {
  44917: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      _BasisTextureLoader: () => RB
    });
    var YB, DB = GB(41097),
      QB = GB(39366),
      oB = GB(41470),
      jB = GB(40837);

    function yB() {
      const BB = 0,
        OB = 1,
        GB = 2,
        YB = 3,
        DB = 6,
        QB = 8,
        oB = 9,
        jB = 10,
        yB = 14;
      let JB = null;

      function MB(BB, OB, GB, YB, DB) {
        const QB = BB.getImageTranscodedSizeInBytes(OB, GB, YB);
        let oB = new Uint8Array(QB);
        if (!BB.transcodeImage(oB, OB, GB, YB, 1, 0)) return null;
        if (DB) {
          oB = function(BB, OB, GB, YB) {
            const DB = new Uint16Array(4),
              QB = new Uint16Array(GB * YB),
              oB = GB / 4,
              jB = YB / 4;
            for (let yB = 0; yB < jB; yB++)
              for (let YB = 0; YB < oB; YB++) {
                const jB = OB + 8 * (yB * oB + YB);
                DB[0] = BB[jB] | BB[jB + 1] << 8, DB[1] = BB[jB + 2] | BB[jB + 3] << 8, DB[2] = (2 * (31 & DB[0]) + 1 * (31 & DB[1])) / 3 | (2 * (2016 & DB[0]) + 1 * (2016 & DB[1])) / 3 & 2016 | (2 * (63488 & DB[0]) + 1 * (63488 & DB[1])) / 3 & 63488, DB[3] = (2 * (31 & DB[1]) + 1 * (31 & DB[0])) / 3 | (2 * (2016 & DB[1]) + 1 * (2016 & DB[0])) / 3 & 2016 | (2 * (63488 & DB[1]) + 1 * (63488 & DB[0])) / 3 & 63488;
                for (let OB = 0; OB < 4; OB++) {
                  const oB = BB[jB + 4 + OB];
                  let JB = (4 * yB + OB) * GB + 4 * YB;
                  QB[JB++] = DB[3 & oB], QB[JB++] = DB[oB >> 2 & 3], QB[JB++] = DB[oB >> 4 & 3], QB[JB] = DB[oB >> 6 & 3]
                }
              }
            return QB
          }(oB, 0, BB.getImageWidth(OB, GB) + 3 & -4, BB.getImageHeight(OB, GB) + 3 & -4)
        }
        return oB
      }
      onmessage = PB => {
        if ("init" === PB.data.action) {
          if (PB.data.url) try {
            importScripts(PB.data.url)
          } catch (zB) {
            postMessage({
              action: "error",
              error: zB
            })
          }
          JB || (JB = BASIS({
            wasmBinary: PB.data.wasmBinary
          })), null !== JB && JB.then((BB => {
            BASIS = BB, BB.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === PB.data.action) {
          const JB = PB.data.config,
            zB = PB.data.imageData,
            lB = new BASIS.BasisFile(zB),
            pB = function(BB) {
              const OB = BB.getHasAlpha(),
                GB = BB.getNumImages(),
                YB = [];
              for (let DB = 0; DB < GB; DB++) {
                const OB = {
                    levels: []
                  },
                  GB = BB.getNumLevels(DB);
                for (let YB = 0; YB < GB; YB++) {
                  const GB = {
                    width: BB.getImageWidth(DB, YB),
                    height: BB.getImageHeight(DB, YB)
                  };
                  OB.levels.push(GB)
                }
                YB.push(OB)
              }
              return {
                hasAlpha: OB,
                images: YB
              }
            }(lB);
          let qB = PB.data.ignoreSupportedFormats ? null : function(JB, MB) {
              let PB = null;
              JB.supportedCompressionFormats && (PB = JB.supportedCompressionFormats.astc ? jB : JB.supportedCompressionFormats.bc7 ? DB : JB.supportedCompressionFormats.s3tc ? MB.hasAlpha ? YB : GB : JB.supportedCompressionFormats.pvrtc ? MB.hasAlpha ? oB : QB : JB.supportedCompressionFormats.etc2 ? OB : JB.supportedCompressionFormats.etc1 ? BB : yB);
              return PB
            }(PB.data.config, pB),
            ZB = !1;
          null === qB && (ZB = !0, qB = pB.hasAlpha ? YB : GB);
          let NB = !0;
          lB.startTranscoding() || (NB = !1);
          const RB = [];
          for (let BB = 0; BB < pB.images.length && NB; BB++) {
            const OB = pB.images[BB];
            if (void 0 === JB.loadSingleImage || JB.loadSingleImage === BB) {
              let GB = OB.levels.length;
              !1 === JB.loadMipmapLevels && (GB = 1);
              for (let YB = 0; YB < GB; YB++) {
                const GB = OB.levels[YB],
                  DB = MB(lB, BB, YB, qB, ZB);
                if (!DB) {
                  NB = !1;
                  break
                }
                GB.transcodedPixels = DB, RB.push(GB.transcodedPixels.buffer)
              }
            }
          }
          lB.close(), lB.delete(), ZB && (qB = -1), NB ? postMessage({
            action: "transcode",
            success: NB,
            id: PB.data.id,
            fileInfo: pB,
            format: qB
          }, RB) : postMessage({
            action: "transcode",
            success: NB,
            id: PB.data.id
          })
        }
      }
    }! function(BB) {
      BB[BB.cTFETC1 = 0] = "cTFETC1", BB[BB.cTFETC2 = 1] = "cTFETC2", BB[BB.cTFBC1 = 2] = "cTFBC1", BB[BB.cTFBC3 = 3] = "cTFBC3", BB[BB.cTFBC4 = 4] = "cTFBC4", BB[BB.cTFBC5 = 5] = "cTFBC5", BB[BB.cTFBC7 = 6] = "cTFBC7", BB[BB.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", BB[BB.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", BB[BB.cTFASTC_4x4 = 10] = "cTFASTC_4x4", BB[BB.cTFATC_RGB = 11] = "cTFATC_RGB", BB[BB.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", BB[BB.cTFRGBA32 = 13] = "cTFRGBA32", BB[BB.cTFRGB565 = 14] = "cTFRGB565", BB[BB.cTFBGR565 = 15] = "cTFBGR565", BB[BB.cTFRGBA4444 = 16] = "cTFRGBA4444", BB[BB.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", BB[BB.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", BB[BB.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", BB[BB.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", BB[BB.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(YB || (YB = {}));
    const JB = {
      JSModuleURL: `${DB.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${DB.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let MB = null,
      PB = null,
      zB = 0;
    const lB = async () => (MB || (MB = new Promise(((BB, OB) => {
      PB ? BB(PB) : DB.j.LoadFileAsync(DB.j.GetBabylonScriptURL(JB.WasmModuleURL)).then((GB => {
        if ("function" !== typeof URL) return OB("Basis transcoder requires an environment with a URL constructor");
        const YB = URL.createObjectURL(new Blob([`(${yB})()`], {
          type: "application/javascript"
        }));
        PB = new Worker(YB), async function(BB, OB, GB) {
          return await new Promise(((YB, QB) => {
            const oB = OB => {
              "init" === OB.data.action ? (BB.removeEventListener("message", oB), YB(BB)) : "error" === OB.data.action && QB(OB.data.error || "error initializing worker")
            };
            BB.addEventListener("message", oB), BB.postMessage({
              action: "init",
              url: GB ? DB.j.GetBabylonScriptURL(GB) : void 0,
              wasmBinary: OB
            }, [OB])
          }))
        }(PB, GB, JB.JSModuleURL).then(BB, OB)
      })).catch(OB)
    }))), await MB), pB = async (BB, OB) => {
      const GB = BB instanceof ArrayBuffer ? new Uint8Array(BB) : BB;
      return await new Promise(((BB, YB) => {
        lB().then((() => {
          const DB = zB++,
            QB = OB => {
              "transcode" === OB.data.action && OB.data.id === DB && (PB.removeEventListener("message", QB), OB.data.success ? BB(OB.data) : YB("Transcode is not supported on this device"))
            };
          PB.addEventListener("message", QB);
          const oB = new Uint8Array(GB.byteLength);
          oB.set(new Uint8Array(GB.buffer, GB.byteOffset, GB.byteLength)), PB.postMessage({
            action: "transcode",
            id: DB,
            imageData: oB,
            config: OB,
            ignoreSupportedFormats: false
          }, [oB.buffer])
        }), (BB => {
          YB(BB)
        }))
      }))
    }, qB = (BB, OB) => {
      let GB = OB._gl?.TEXTURE_2D;
      BB.isCube && (GB = OB._gl?.TEXTURE_CUBE_MAP), OB._bindTextureDirectly(GB, BB, !0)
    }, ZB = (BB, OB) => {
      const GB = BB.Lp();
      for (let DB = 0; DB < OB.fileInfo.images.length; DB++) {
        const yB = OB.fileInfo.images[DB].levels[0];
        if (BB._invertVScale = BB.invertY, -1 === OB.format || OB.format === YB.cTFRGB565)
          if (BB.type = 10, BB.format = 4, !GB._features.basisNeedsPOT || Math.log2(yB.width) % 1 === 0 && Math.log2(yB.height) % 1 === 0) BB._invertVScale = !BB.invertY, BB.width = yB.width + 3 & -4, BB.height = yB.height + 3 & -4, BB.samplingMode = 2, qB(BB, GB), GB._uploadDataToTextureDirectly(BB, new Uint16Array(yB.transcodedPixels.buffer), DB, 0, 4, !0);
          else {
            const OB = new jB.b(GB, 2);
            BB._invertVScale = BB.invertY, OB.type = 10, OB.format = 4, OB.width = yB.width + 3 & -4, OB.height = yB.height + 3 & -4, qB(OB, GB), GB._uploadDataToTextureDirectly(OB, new Uint16Array(yB.transcodedPixels.buffer), DB, 0, 4, !0), GB._rescaleTexture(OB, BB, GB.scenes[0], GB._getInternalFormat(4), (() => {
              GB._releaseTexture(OB), qB(BB, GB)
            }))
          }
        else {
          BB.width = yB.width, BB.height = yB.height, BB.generateMipMaps = OB.fileInfo.images[DB].levels.length > 1;
          const YB = NB.GetInternalFormatFromBasisFormat(OB.format, GB);
          BB.format = YB, qB(BB, GB);
          const jB = OB.fileInfo.images[DB].levels;
          for (let OB = 0; OB < jB.length; OB++) {
            const QB = jB[OB];
            GB._uploadCompressedDataToTextureDirectly(BB, YB, QB.width, QB.height, QB.transcodedPixels, DB, OB)
          }!GB._features.basisNeedsPOT || Math.log2(BB.width) % 1 === 0 && Math.log2(BB.height) % 1 === 0 || (QB.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), BB._cachedWrapU = oB.e.CLAMP_ADDRESSMODE, BB._cachedWrapV = oB.e.CLAMP_ADDRESSMODE)
        }
      }
    }, NB = {
      JSModuleURL: JB.JSModuleURL,
      WasmModuleURL: JB.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (BB, OB) => {
        let GB;
        switch (BB) {
          case YB.cTFETC1:
            GB = 36196;
            break;
          case YB.cTFBC1:
            GB = 33776;
            break;
          case YB.cTFBC4:
            GB = 33779;
            break;
          case YB.cTFASTC_4x4:
            GB = 37808;
            break;
          case YB.cTFETC2:
            GB = 37496;
            break;
          case YB.cTFBC7:
            GB = 36492
        }
        if (void 0 === GB) throw "The chosen Basis transcoder format is not currently supported";
        return GB
      },
      TranscodeAsync: pB,
      LoadTextureFromTranscodeResult: ZB
    };
    class RB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, OB, GB, YB, QB) {
        if (Array.isArray(BB)) return;
        const oB = OB.Lp().getCaps(),
          jB = {
            supportedCompressionFormats: {
              etc1: !!oB.etc1,
              s3tc: !!oB.s3tc,
              pvrtc: !!oB.pvrtc,
              etc2: !!oB.etc2,
              astc: !!oB.astc,
              bc7: !!oB.bptc
            }
          };
        pB(BB, jB).then((BB => {
          const GB = BB.fileInfo.images[0].levels.length > 1 && OB.generateMipMaps;
          ZB(OB, BB), OB.Lp()._setCubeMapTextureParams(OB, GB), OB.isReady = !0, OB.onLoadedObservable.notifyObservers(OB), OB.onLoadedObservable.clear(), YB && YB()
        })).catch((BB => {
          DB.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), OB.isReady = !0, QB && QB(BB)
        }))
      }
      loadData(BB, OB, GB) {
        const YB = OB.Lp().getCaps(),
          QB = {
            supportedCompressionFormats: {
              etc1: !!YB.etc1,
              s3tc: !!YB.s3tc,
              pvrtc: !!YB.pvrtc,
              etc2: !!YB.etc2,
              astc: !!YB.astc,
              bc7: !!YB.bptc
            }
          };
        pB(BB, QB).then((BB => {
          const YB = BB.fileInfo.images[0].levels[0],
            DB = BB.fileInfo.images[0].levels.length > 1 && OB.generateMipMaps;
          GB(YB.width, YB.height, DB, -1 !== BB.format, (() => {
            ZB(OB, BB)
          }))
        })).catch((BB => {
          DB.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), DB.j.Warn(`Failed to transcode Basis file: ${BB}`), GB(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);