export const id = 315;
export const ids = [315];
export const modules = {
  41926: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      _BasisTextureLoader: () => fT
    });
    var WT, zT = mT(40201),
      MT = mT(38800),
      gT = mT(40602),
      nT = mT(39913);

    function HT() {
      const TT = 0,
        UT = 1,
        mT = 2,
        WT = 3,
        zT = 6,
        MT = 8,
        gT = 9,
        nT = 10,
        HT = 14;
      let kT = null;

      function jT(TT, UT, mT, WT, zT) {
        const MT = TT.getImageTranscodedSizeInBytes(UT, mT, WT);
        let gT = new Uint8Array(MT);
        if (!TT.transcodeImage(gT, UT, mT, WT, 1, 0)) return null;
        if (zT) {
          gT = function(TT, UT, mT, WT) {
            const zT = new Uint16Array(4),
              MT = new Uint16Array(mT * WT),
              gT = mT / 4,
              nT = WT / 4;
            for (let HT = 0; HT < nT; HT++)
              for (let WT = 0; WT < gT; WT++) {
                const nT = UT + 8 * (HT * gT + WT);
                zT[0] = TT[nT] | TT[nT + 1] << 8, zT[1] = TT[nT + 2] | TT[nT + 3] << 8, zT[2] = (2 * (31 & zT[0]) + 1 * (31 & zT[1])) / 3 | (2 * (2016 & zT[0]) + 1 * (2016 & zT[1])) / 3 & 2016 | (2 * (63488 & zT[0]) + 1 * (63488 & zT[1])) / 3 & 63488, zT[3] = (2 * (31 & zT[1]) + 1 * (31 & zT[0])) / 3 | (2 * (2016 & zT[1]) + 1 * (2016 & zT[0])) / 3 & 2016 | (2 * (63488 & zT[1]) + 1 * (63488 & zT[0])) / 3 & 63488;
                for (let UT = 0; UT < 4; UT++) {
                  const gT = TT[nT + 4 + UT];
                  let kT = (4 * HT + UT) * mT + 4 * WT;
                  MT[kT++] = zT[3 & gT], MT[kT++] = zT[gT >> 2 & 3], MT[kT++] = zT[gT >> 4 & 3], MT[kT] = zT[gT >> 6 & 3]
                }
              }
            return MT
          }(gT, 0, TT.getImageWidth(UT, mT) + 3 & -4, TT.getImageHeight(UT, mT) + 3 & -4)
        }
        return gT
      }
      onmessage = lT => {
        if ("init" === lT.data.action) {
          if (lT.data.url) try {
            importScripts(lT.data.url)
          } catch (LT) {
            postMessage({
              action: "error",
              error: LT
            })
          }
          kT || (kT = BASIS({
            wasmBinary: lT.data.wasmBinary
          })), null !== kT && kT.then((TT => {
            BASIS = TT, TT.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === lT.data.action) {
          const kT = lT.data.config,
            LT = lT.data.imageData,
            pT = new BASIS.BasisFile(LT),
            BT = function(TT) {
              const UT = TT.getHasAlpha(),
                mT = TT.getNumImages(),
                WT = [];
              for (let zT = 0; zT < mT; zT++) {
                const UT = {
                    levels: []
                  },
                  mT = TT.getNumLevels(zT);
                for (let WT = 0; WT < mT; WT++) {
                  const mT = {
                    width: TT.getImageWidth(zT, WT),
                    height: TT.getImageHeight(zT, WT)
                  };
                  UT.levels.push(mT)
                }
                WT.push(UT)
              }
              return {
                hasAlpha: UT,
                images: WT
              }
            }(pT);
          let ZT = lT.data.ignoreSupportedFormats ? null : function(kT, jT) {
              let lT = null;
              kT.supportedCompressionFormats && (lT = kT.supportedCompressionFormats.astc ? nT : kT.supportedCompressionFormats.bc7 ? zT : kT.supportedCompressionFormats.s3tc ? jT.hasAlpha ? WT : mT : kT.supportedCompressionFormats.pvrtc ? jT.hasAlpha ? gT : MT : kT.supportedCompressionFormats.etc2 ? UT : kT.supportedCompressionFormats.etc1 ? TT : HT);
              return lT
            }(lT.data.config, BT),
            cT = !1;
          null === ZT && (cT = !0, ZT = BT.hasAlpha ? WT : mT);
          let vT = !0;
          pT.startTranscoding() || (vT = !1);
          const fT = [];
          for (let TT = 0; TT < BT.images.length && vT; TT++) {
            const UT = BT.images[TT];
            if (void 0 === kT.loadSingleImage || kT.loadSingleImage === TT) {
              let mT = UT.levels.length;
              !1 === kT.loadMipmapLevels && (mT = 1);
              for (let WT = 0; WT < mT; WT++) {
                const mT = UT.levels[WT],
                  zT = jT(pT, TT, WT, ZT, cT);
                if (!zT) {
                  vT = !1;
                  break
                }
                mT.transcodedPixels = zT, fT.push(mT.transcodedPixels.buffer)
              }
            }
          }
          pT.close(), pT.delete(), cT && (ZT = -1), vT ? postMessage({
            action: "transcode",
            success: vT,
            id: lT.data.id,
            fileInfo: BT,
            format: ZT
          }, fT) : postMessage({
            action: "transcode",
            success: vT,
            id: lT.data.id
          })
        }
      }
    }! function(TT) {
      TT[TT.cTFETC1 = 0] = "cTFETC1", TT[TT.cTFETC2 = 1] = "cTFETC2", TT[TT.cTFBC1 = 2] = "cTFBC1", TT[TT.cTFBC3 = 3] = "cTFBC3", TT[TT.cTFBC4 = 4] = "cTFBC4", TT[TT.cTFBC5 = 5] = "cTFBC5", TT[TT.cTFBC7 = 6] = "cTFBC7", TT[TT.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", TT[TT.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", TT[TT.cTFASTC_4x4 = 10] = "cTFASTC_4x4", TT[TT.cTFATC_RGB = 11] = "cTFATC_RGB", TT[TT.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", TT[TT.cTFRGBA32 = 13] = "cTFRGBA32", TT[TT.cTFRGB565 = 14] = "cTFRGB565", TT[TT.cTFBGR565 = 15] = "cTFBGR565", TT[TT.cTFRGBA4444 = 16] = "cTFRGBA4444", TT[TT.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", TT[TT.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", TT[TT.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", TT[TT.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", TT[TT.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(WT || (WT = {}));
    const kT = {
      JSModuleURL: `${zT.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${zT.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let jT = null,
      lT = null,
      LT = 0;
    const pT = async () => (jT || (jT = new Promise(((TT, UT) => {
      lT ? TT(lT) : zT.j.LoadFileAsync(zT.j.GetBabylonScriptURL(kT.WasmModuleURL)).then((mT => {
        if ("function" !== typeof URL) return UT("Basis transcoder requires an environment with a URL constructor");
        const WT = URL.createObjectURL(new Blob([`(${HT})()`], {
          type: "application/javascript"
        }));
        lT = new Worker(WT), async function(TT, UT, mT) {
          return await new Promise(((WT, MT) => {
            const gT = UT => {
              "init" === UT.data.action ? (TT.removeEventListener("message", gT), WT(TT)) : "error" === UT.data.action && MT(UT.data.error || "error initializing worker")
            };
            TT.addEventListener("message", gT), TT.postMessage({
              action: "init",
              url: mT ? zT.j.GetBabylonScriptURL(mT) : void 0,
              wasmBinary: UT
            }, [UT])
          }))
        }(lT, mT, kT.JSModuleURL).then(TT, UT)
      })).catch(UT)
    }))), await jT), BT = async (TT, UT) => {
      const mT = TT instanceof ArrayBuffer ? new Uint8Array(TT) : TT;
      return await new Promise(((TT, WT) => {
        pT().then((() => {
          const zT = LT++,
            MT = UT => {
              "transcode" === UT.data.action && UT.data.id === zT && (lT.removeEventListener("message", MT), UT.data.success ? TT(UT.data) : WT("Transcode is not supported on this device"))
            };
          lT.addEventListener("message", MT);
          const gT = new Uint8Array(mT.byteLength);
          gT.set(new Uint8Array(mT.buffer, mT.byteOffset, mT.byteLength)), lT.postMessage({
            action: "transcode",
            id: zT,
            imageData: gT,
            config: UT,
            ignoreSupportedFormats: false
          }, [gT.buffer])
        }), (TT => {
          WT(TT)
        }))
      }))
    }, ZT = (TT, UT) => {
      let mT = UT._gl?.TEXTURE_2D;
      TT.isCube && (mT = UT._gl?.TEXTURE_CUBE_MAP), UT._bindTextureDirectly(mT, TT, !0)
    }, cT = (TT, UT) => {
      const mT = TT.eB();
      for (let zT = 0; zT < UT.fileInfo.images.length; zT++) {
        const HT = UT.fileInfo.images[zT].levels[0];
        if (TT._invertVScale = TT.invertY, -1 === UT.format || UT.format === WT.cTFRGB565)
          if (TT.type = 10, TT.format = 4, !mT._features.basisNeedsPOT || Math.log2(HT.width) % 1 === 0 && Math.log2(HT.height) % 1 === 0) TT._invertVScale = !TT.invertY, TT.width = HT.width + 3 & -4, TT.height = HT.height + 3 & -4, TT.samplingMode = 2, ZT(TT, mT), mT._uploadDataToTextureDirectly(TT, new Uint16Array(HT.transcodedPixels.buffer), zT, 0, 4, !0);
          else {
            const UT = new nT.b(mT, 2);
            TT._invertVScale = TT.invertY, UT.type = 10, UT.format = 4, UT.width = HT.width + 3 & -4, UT.height = HT.height + 3 & -4, ZT(UT, mT), mT._uploadDataToTextureDirectly(UT, new Uint16Array(HT.transcodedPixels.buffer), zT, 0, 4, !0), mT._rescaleTexture(UT, TT, mT.scenes[0], mT._getInternalFormat(4), (() => {
              mT._releaseTexture(UT), ZT(TT, mT)
            }))
          }
        else {
          TT.width = HT.width, TT.height = HT.height, TT.generateMipMaps = UT.fileInfo.images[zT].levels.length > 1;
          const WT = vT.GetInternalFormatFromBasisFormat(UT.format, mT);
          TT.format = WT, ZT(TT, mT);
          const nT = UT.fileInfo.images[zT].levels;
          for (let UT = 0; UT < nT.length; UT++) {
            const MT = nT[UT];
            mT._uploadCompressedDataToTextureDirectly(TT, WT, MT.width, MT.height, MT.transcodedPixels, zT, UT)
          }!mT._features.basisNeedsPOT || Math.log2(TT.width) % 1 === 0 && Math.log2(TT.height) % 1 === 0 || (MT.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), TT._cachedWrapU = gT.g.CLAMP_ADDRESSMODE, TT._cachedWrapV = gT.g.CLAMP_ADDRESSMODE)
        }
      }
    }, vT = {
      JSModuleURL: kT.JSModuleURL,
      WasmModuleURL: kT.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (TT, UT) => {
        let mT;
        switch (TT) {
          case WT.cTFETC1:
            mT = 36196;
            break;
          case WT.cTFBC1:
            mT = 33776;
            break;
          case WT.cTFBC4:
            mT = 33779;
            break;
          case WT.cTFASTC_4x4:
            mT = 37808;
            break;
          case WT.cTFETC2:
            mT = 37496;
            break;
          case WT.cTFBC7:
            mT = 36492
        }
        if (void 0 === mT) throw "The chosen Basis transcoder format is not currently supported";
        return mT
      },
      TranscodeAsync: BT,
      LoadTextureFromTranscodeResult: cT
    };
    class fT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, UT, mT, WT, MT) {
        if (Array.isArray(TT)) return;
        const gT = UT.eB().getCaps(),
          nT = {
            supportedCompressionFormats: {
              etc1: !!gT.etc1,
              s3tc: !!gT.s3tc,
              pvrtc: !!gT.pvrtc,
              etc2: !!gT.etc2,
              astc: !!gT.astc,
              bc7: !!gT.bptc
            }
          };
        BT(TT, nT).then((TT => {
          const mT = TT.fileInfo.images[0].levels.length > 1 && UT.generateMipMaps;
          cT(UT, TT), UT.eB()._setCubeMapTextureParams(UT, mT), UT.isReady = !0, UT.onLoadedObservable.notifyObservers(UT), UT.onLoadedObservable.clear(), WT && WT()
        })).catch((TT => {
          zT.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), UT.isReady = !0, MT && MT(TT)
        }))
      }
      loadData(TT, UT, mT) {
        const WT = UT.eB().getCaps(),
          MT = {
            supportedCompressionFormats: {
              etc1: !!WT.etc1,
              s3tc: !!WT.s3tc,
              pvrtc: !!WT.pvrtc,
              etc2: !!WT.etc2,
              astc: !!WT.astc,
              bc7: !!WT.bptc
            }
          };
        BT(TT, MT).then((TT => {
          const WT = TT.fileInfo.images[0].levels[0],
            zT = TT.fileInfo.images[0].levels.length > 1 && UT.generateMipMaps;
          mT(WT.width, WT.height, zT, -1 !== TT.format, (() => {
            cT(UT, TT)
          }))
        })).catch((TT => {
          zT.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), zT.j.Warn(`Failed to transcode Basis file: ${TT}`), mT(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);