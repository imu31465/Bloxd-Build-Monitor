export const id = 300;
export const ids = [300];
export const modules = {
  41202: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      _BasisTextureLoader: () => Wk
    });
    var Rk, tk = Bk(39492),
      ak = Bk(38320),
      Xk = Bk(39895),
      bk = Bk(39248);

    function wk() {
      const kk = 0,
        Fk = 1,
        Bk = 2,
        Rk = 3,
        tk = 6,
        ak = 8,
        Xk = 9,
        bk = 10,
        wk = 14;
      let dk = null;

      function sk(kk, Fk, Bk, Rk, tk) {
        const ak = kk.getImageTranscodedSizeInBytes(Fk, Bk, Rk);
        let Xk = new Uint8Array(ak);
        if (!kk.transcodeImage(Xk, Fk, Bk, Rk, 1, 0)) return null;
        if (tk) {
          Xk = function(kk, Fk, Bk, Rk) {
            const tk = new Uint16Array(4),
              ak = new Uint16Array(Bk * Rk),
              Xk = Bk / 4,
              bk = Rk / 4;
            for (let wk = 0; wk < bk; wk++)
              for (let Rk = 0; Rk < Xk; Rk++) {
                const bk = Fk + 8 * (wk * Xk + Rk);
                tk[0] = kk[bk] | kk[bk + 1] << 8, tk[1] = kk[bk + 2] | kk[bk + 3] << 8, tk[2] = (2 * (31 & tk[0]) + 1 * (31 & tk[1])) / 3 | (2 * (2016 & tk[0]) + 1 * (2016 & tk[1])) / 3 & 2016 | (2 * (63488 & tk[0]) + 1 * (63488 & tk[1])) / 3 & 63488, tk[3] = (2 * (31 & tk[1]) + 1 * (31 & tk[0])) / 3 | (2 * (2016 & tk[1]) + 1 * (2016 & tk[0])) / 3 & 2016 | (2 * (63488 & tk[1]) + 1 * (63488 & tk[0])) / 3 & 63488;
                for (let Fk = 0; Fk < 4; Fk++) {
                  const Xk = kk[bk + 4 + Fk];
                  let dk = (4 * wk + Fk) * Bk + 4 * Rk;
                  ak[dk++] = tk[3 & Xk], ak[dk++] = tk[Xk >> 2 & 3], ak[dk++] = tk[Xk >> 4 & 3], ak[dk] = tk[Xk >> 6 & 3]
                }
              }
            return ak
          }(Xk, 0, kk.getImageWidth(Fk, Bk) + 3 & -4, kk.getImageHeight(Fk, Bk) + 3 & -4)
        }
        return Xk
      }
      onmessage = Vk => {
        if ("init" === Vk.data.action) {
          if (Vk.data.url) try {
            importScripts(Vk.data.url)
          } catch (Jk) {
            postMessage({
              action: "error",
              error: Jk
            })
          }
          dk || (dk = BASIS({
            wasmBinary: Vk.data.wasmBinary
          })), null !== dk && dk.then((kk => {
            BASIS = kk, kk.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Vk.data.action) {
          const dk = Vk.data.config,
            Jk = Vk.data.imageData,
            Ak = new BASIS.BasisFile(Jk),
            ek = function(kk) {
              const Fk = kk.getHasAlpha(),
                Bk = kk.getNumImages(),
                Rk = [];
              for (let tk = 0; tk < Bk; tk++) {
                const Fk = {
                    levels: []
                  },
                  Bk = kk.getNumLevels(tk);
                for (let Rk = 0; Rk < Bk; Rk++) {
                  const Bk = {
                    width: kk.getImageWidth(tk, Rk),
                    height: kk.getImageHeight(tk, Rk)
                  };
                  Fk.levels.push(Bk)
                }
                Rk.push(Fk)
              }
              return {
                hasAlpha: Fk,
                images: Rk
              }
            }(Ak);
          let yk = Vk.data.ignoreSupportedFormats ? null : function(dk, sk) {
              let Vk = null;
              dk.supportedCompressionFormats && (Vk = dk.supportedCompressionFormats.astc ? bk : dk.supportedCompressionFormats.bc7 ? tk : dk.supportedCompressionFormats.s3tc ? sk.hasAlpha ? Rk : Bk : dk.supportedCompressionFormats.pvrtc ? sk.hasAlpha ? Xk : ak : dk.supportedCompressionFormats.etc2 ? Fk : dk.supportedCompressionFormats.etc1 ? kk : wk);
              return Vk
            }(Vk.data.config, ek),
            fk = !1;
          null === yk && (fk = !0, yk = ek.hasAlpha ? Rk : Bk);
          let mk = !0;
          Ak.startTranscoding() || (mk = !1);
          const Wk = [];
          for (let kk = 0; kk < ek.images.length && mk; kk++) {
            const Fk = ek.images[kk];
            if (void 0 === dk.loadSingleImage || dk.loadSingleImage === kk) {
              let Bk = Fk.levels.length;
              !1 === dk.loadMipmapLevels && (Bk = 1);
              for (let Rk = 0; Rk < Bk; Rk++) {
                const Bk = Fk.levels[Rk],
                  tk = sk(Ak, kk, Rk, yk, fk);
                if (!tk) {
                  mk = !1;
                  break
                }
                Bk.transcodedPixels = tk, Wk.push(Bk.transcodedPixels.buffer)
              }
            }
          }
          Ak.close(), Ak.delete(), fk && (yk = -1), mk ? postMessage({
            action: "transcode",
            success: mk,
            id: Vk.data.id,
            fileInfo: ek,
            format: yk
          }, Wk) : postMessage({
            action: "transcode",
            success: mk,
            id: Vk.data.id
          })
        }
      }
    }! function(kk) {
      kk[kk.cTFETC1 = 0] = "cTFETC1", kk[kk.cTFETC2 = 1] = "cTFETC2", kk[kk.cTFBC1 = 2] = "cTFBC1", kk[kk.cTFBC3 = 3] = "cTFBC3", kk[kk.cTFBC4 = 4] = "cTFBC4", kk[kk.cTFBC5 = 5] = "cTFBC5", kk[kk.cTFBC7 = 6] = "cTFBC7", kk[kk.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", kk[kk.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", kk[kk.cTFASTC_4x4 = 10] = "cTFASTC_4x4", kk[kk.cTFATC_RGB = 11] = "cTFATC_RGB", kk[kk.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", kk[kk.cTFRGBA32 = 13] = "cTFRGBA32", kk[kk.cTFRGB565 = 14] = "cTFRGB565", kk[kk.cTFBGR565 = 15] = "cTFBGR565", kk[kk.cTFRGBA4444 = 16] = "cTFRGBA4444", kk[kk.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", kk[kk.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", kk[kk.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", kk[kk.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", kk[kk.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Rk || (Rk = {}));
    const dk = {
      JSModuleURL: `${tk.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${tk.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let sk = null,
      Vk = null,
      Jk = 0;
    const Ak = async () => (sk || (sk = new Promise(((kk, Fk) => {
      Vk ? kk(Vk) : tk.h.LoadFileAsync(tk.h.GetBabylonScriptURL(dk.WasmModuleURL)).then((Bk => {
        if ("function" !== typeof URL) return Fk("Basis transcoder requires an environment with a URL constructor");
        const Rk = URL.createObjectURL(new Blob([`(${wk})()`], {
          type: "application/javascript"
        }));
        Vk = new Worker(Rk), async function(kk, Fk, Bk) {
          return await new Promise(((Rk, ak) => {
            const Xk = Fk => {
              "init" === Fk.data.action ? (kk.removeEventListener("message", Xk), Rk(kk)) : "error" === Fk.data.action && ak(Fk.data.error || "error initializing worker")
            };
            kk.addEventListener("message", Xk), kk.postMessage({
              action: "init",
              url: Bk ? tk.h.GetBabylonScriptURL(Bk) : void 0,
              wasmBinary: Fk
            }, [Fk])
          }))
        }(Vk, Bk, dk.JSModuleURL).then(kk, Fk)
      })).catch(Fk)
    }))), await sk), ek = async (kk, Fk) => {
      const Bk = kk instanceof ArrayBuffer ? new Uint8Array(kk) : kk;
      return await new Promise(((kk, Rk) => {
        Ak().then((() => {
          const tk = Jk++,
            ak = Fk => {
              "transcode" === Fk.data.action && Fk.data.id === tk && (Vk.removeEventListener("message", ak), Fk.data.success ? kk(Fk.data) : Rk("Transcode is not supported on this device"))
            };
          Vk.addEventListener("message", ak);
          const Xk = new Uint8Array(Bk.byteLength);
          Xk.set(new Uint8Array(Bk.buffer, Bk.byteOffset, Bk.byteLength)), Vk.postMessage({
            action: "transcode",
            id: tk,
            imageData: Xk,
            config: Fk,
            ignoreSupportedFormats: false
          }, [Xk.buffer])
        }), (kk => {
          Rk(kk)
        }))
      }))
    }, yk = (kk, Fk) => {
      let Bk = Fk._gl?.TEXTURE_2D;
      kk.isCube && (Bk = Fk._gl?.TEXTURE_CUBE_MAP), Fk._bindTextureDirectly(Bk, kk, !0)
    }, fk = (kk, Fk) => {
      const Bk = kk.ne();
      for (let tk = 0; tk < Fk.fileInfo.images.length; tk++) {
        const wk = Fk.fileInfo.images[tk].levels[0];
        if (kk._invertVScale = kk.invertY, -1 === Fk.format || Fk.format === Rk.cTFRGB565)
          if (kk.type = 10, kk.format = 4, !Bk._features.basisNeedsPOT || Math.log2(wk.width) % 1 === 0 && Math.log2(wk.height) % 1 === 0) kk._invertVScale = !kk.invertY, kk.width = wk.width + 3 & -4, kk.height = wk.height + 3 & -4, kk.samplingMode = 2, yk(kk, Bk), Bk._uploadDataToTextureDirectly(kk, new Uint16Array(wk.transcodedPixels.buffer), tk, 0, 4, !0);
          else {
            const Fk = new bk.c(Bk, 2);
            kk._invertVScale = kk.invertY, Fk.type = 10, Fk.format = 4, Fk.width = wk.width + 3 & -4, Fk.height = wk.height + 3 & -4, yk(Fk, Bk), Bk._uploadDataToTextureDirectly(Fk, new Uint16Array(wk.transcodedPixels.buffer), tk, 0, 4, !0), Bk._rescaleTexture(Fk, kk, Bk.scenes[0], Bk._getInternalFormat(4), (() => {
              Bk._releaseTexture(Fk), yk(kk, Bk)
            }))
          }
        else {
          kk.width = wk.width, kk.height = wk.height, kk.generateMipMaps = Fk.fileInfo.images[tk].levels.length > 1;
          const Rk = mk.GetInternalFormatFromBasisFormat(Fk.format, Bk);
          kk.format = Rk, yk(kk, Bk);
          const bk = Fk.fileInfo.images[tk].levels;
          for (let Fk = 0; Fk < bk.length; Fk++) {
            const ak = bk[Fk];
            Bk._uploadCompressedDataToTextureDirectly(kk, Rk, ak.width, ak.height, ak.transcodedPixels, tk, Fk)
          }!Bk._features.basisNeedsPOT || Math.log2(kk.width) % 1 === 0 && Math.log2(kk.height) % 1 === 0 || (ak.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), kk._cachedWrapU = Xk.f.CLAMP_ADDRESSMODE, kk._cachedWrapV = Xk.f.CLAMP_ADDRESSMODE)
        }
      }
    }, mk = {
      JSModuleURL: dk.JSModuleURL,
      WasmModuleURL: dk.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (kk, Fk) => {
        let Bk;
        switch (kk) {
          case Rk.cTFETC1:
            Bk = 36196;
            break;
          case Rk.cTFBC1:
            Bk = 33776;
            break;
          case Rk.cTFBC4:
            Bk = 33779;
            break;
          case Rk.cTFASTC_4x4:
            Bk = 37808;
            break;
          case Rk.cTFETC2:
            Bk = 37496;
            break;
          case Rk.cTFBC7:
            Bk = 36492
        }
        if (void 0 === Bk) throw "The chosen Basis transcoder format is not currently supported";
        return Bk
      },
      TranscodeAsync: ek,
      LoadTextureFromTranscodeResult: fk
    };
    class Wk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(kk, Fk, Bk, Rk, ak) {
        if (Array.isArray(kk)) return;
        const Xk = Fk.ne().getCaps(),
          bk = {
            supportedCompressionFormats: {
              etc1: !!Xk.etc1,
              s3tc: !!Xk.s3tc,
              pvrtc: !!Xk.pvrtc,
              etc2: !!Xk.etc2,
              astc: !!Xk.astc,
              bc7: !!Xk.bptc
            }
          };
        ek(kk, bk).then((kk => {
          const Bk = kk.fileInfo.images[0].levels.length > 1 && Fk.generateMipMaps;
          fk(Fk, kk), Fk.ne()._setCubeMapTextureParams(Fk, Bk), Fk.isReady = !0, Fk.onLoadedObservable.notifyObservers(Fk), Fk.onLoadedObservable.clear(), Rk && Rk()
        })).catch((kk => {
          tk.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Fk.isReady = !0, ak && ak(kk)
        }))
      }
      loadData(kk, Fk, Bk) {
        const Rk = Fk.ne().getCaps(),
          ak = {
            supportedCompressionFormats: {
              etc1: !!Rk.etc1,
              s3tc: !!Rk.s3tc,
              pvrtc: !!Rk.pvrtc,
              etc2: !!Rk.etc2,
              astc: !!Rk.astc,
              bc7: !!Rk.bptc
            }
          };
        ek(kk, ak).then((kk => {
          const Rk = kk.fileInfo.images[0].levels[0],
            tk = kk.fileInfo.images[0].levels.length > 1 && Fk.generateMipMaps;
          Bk(Rk.width, Rk.height, tk, -1 !== kk.format, (() => {
            fk(Fk, kk)
          }))
        })).catch((kk => {
          tk.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), tk.h.Warn(`Failed to transcode Basis file: ${kk}`), Bk(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);