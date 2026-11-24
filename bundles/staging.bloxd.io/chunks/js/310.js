export const id = 310;
export const ids = [310];
export const modules = {
  41780: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      _BasisTextureLoader: () => xk
    });
    var Xk, Tk = Ik(40097),
      ik = Ik(38674),
      yk = Ik(40489),
      lk = Ik(39818);

    function ak() {
      const kk = 0,
        Fk = 1,
        Ik = 2,
        Xk = 3,
        Tk = 6,
        ik = 8,
        yk = 9,
        lk = 10,
        ak = 14;
      let qk = null;

      function Lk(kk, Fk, Ik, Xk, Tk) {
        const ik = kk.getImageTranscodedSizeInBytes(Fk, Ik, Xk);
        let yk = new Uint8Array(ik);
        if (!kk.transcodeImage(yk, Fk, Ik, Xk, 1, 0)) return null;
        if (Tk) {
          yk = function(kk, Fk, Ik, Xk) {
            const Tk = new Uint16Array(4),
              ik = new Uint16Array(Ik * Xk),
              yk = Ik / 4,
              lk = Xk / 4;
            for (let ak = 0; ak < lk; ak++)
              for (let Xk = 0; Xk < yk; Xk++) {
                const lk = Fk + 8 * (ak * yk + Xk);
                Tk[0] = kk[lk] | kk[lk + 1] << 8, Tk[1] = kk[lk + 2] | kk[lk + 3] << 8, Tk[2] = (2 * (31 & Tk[0]) + 1 * (31 & Tk[1])) / 3 | (2 * (2016 & Tk[0]) + 1 * (2016 & Tk[1])) / 3 & 2016 | (2 * (63488 & Tk[0]) + 1 * (63488 & Tk[1])) / 3 & 63488, Tk[3] = (2 * (31 & Tk[1]) + 1 * (31 & Tk[0])) / 3 | (2 * (2016 & Tk[1]) + 1 * (2016 & Tk[0])) / 3 & 2016 | (2 * (63488 & Tk[1]) + 1 * (63488 & Tk[0])) / 3 & 63488;
                for (let Fk = 0; Fk < 4; Fk++) {
                  const yk = kk[lk + 4 + Fk];
                  let qk = (4 * ak + Fk) * Ik + 4 * Xk;
                  ik[qk++] = Tk[3 & yk], ik[qk++] = Tk[yk >> 2 & 3], ik[qk++] = Tk[yk >> 4 & 3], ik[qk] = Tk[yk >> 6 & 3]
                }
              }
            return ik
          }(yk, 0, kk.getImageWidth(Fk, Ik) + 3 & -4, kk.getImageHeight(Fk, Ik) + 3 & -4)
        }
        return yk
      }
      onmessage = tk => {
        if ("init" === tk.data.action) {
          if (tk.data.url) try {
            importScripts(tk.data.url)
          } catch (Zk) {
            postMessage({
              action: "error",
              error: Zk
            })
          }
          qk || (qk = BASIS({
            wasmBinary: tk.data.wasmBinary
          })), null !== qk && qk.then((kk => {
            BASIS = kk, kk.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === tk.data.action) {
          const qk = tk.data.config,
            Zk = tk.data.imageData,
            jk = new BASIS.BasisFile(Zk),
            ek = function(kk) {
              const Fk = kk.getHasAlpha(),
                Ik = kk.getNumImages(),
                Xk = [];
              for (let Tk = 0; Tk < Ik; Tk++) {
                const Fk = {
                    levels: []
                  },
                  Ik = kk.getNumLevels(Tk);
                for (let Xk = 0; Xk < Ik; Xk++) {
                  const Ik = {
                    width: kk.getImageWidth(Tk, Xk),
                    height: kk.getImageHeight(Tk, Xk)
                  };
                  Fk.levels.push(Ik)
                }
                Xk.push(Fk)
              }
              return {
                hasAlpha: Fk,
                images: Xk
              }
            }(jk);
          let wk = tk.data.ignoreSupportedFormats ? null : function(qk, Lk) {
              let tk = null;
              qk.supportedCompressionFormats && (tk = qk.supportedCompressionFormats.astc ? lk : qk.supportedCompressionFormats.bc7 ? Tk : qk.supportedCompressionFormats.s3tc ? Lk.hasAlpha ? Xk : Ik : qk.supportedCompressionFormats.pvrtc ? Lk.hasAlpha ? yk : ik : qk.supportedCompressionFormats.etc2 ? Fk : qk.supportedCompressionFormats.etc1 ? kk : ak);
              return tk
            }(tk.data.config, ek),
            Hk = !1;
          null === wk && (Hk = !0, wk = ek.hasAlpha ? Xk : Ik);
          let Jk = !0;
          jk.startTranscoding() || (Jk = !1);
          const xk = [];
          for (let kk = 0; kk < ek.images.length && Jk; kk++) {
            const Fk = ek.images[kk];
            if (void 0 === qk.loadSingleImage || qk.loadSingleImage === kk) {
              let Ik = Fk.levels.length;
              !1 === qk.loadMipmapLevels && (Ik = 1);
              for (let Xk = 0; Xk < Ik; Xk++) {
                const Ik = Fk.levels[Xk],
                  Tk = Lk(jk, kk, Xk, wk, Hk);
                if (!Tk) {
                  Jk = !1;
                  break
                }
                Ik.transcodedPixels = Tk, xk.push(Ik.transcodedPixels.buffer)
              }
            }
          }
          jk.close(), jk.delete(), Hk && (wk = -1), Jk ? postMessage({
            action: "transcode",
            success: Jk,
            id: tk.data.id,
            fileInfo: ek,
            format: wk
          }, xk) : postMessage({
            action: "transcode",
            success: Jk,
            id: tk.data.id
          })
        }
      }
    }! function(kk) {
      kk[kk.cTFETC1 = 0] = "cTFETC1", kk[kk.cTFETC2 = 1] = "cTFETC2", kk[kk.cTFBC1 = 2] = "cTFBC1", kk[kk.cTFBC3 = 3] = "cTFBC3", kk[kk.cTFBC4 = 4] = "cTFBC4", kk[kk.cTFBC5 = 5] = "cTFBC5", kk[kk.cTFBC7 = 6] = "cTFBC7", kk[kk.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", kk[kk.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", kk[kk.cTFASTC_4x4 = 10] = "cTFASTC_4x4", kk[kk.cTFATC_RGB = 11] = "cTFATC_RGB", kk[kk.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", kk[kk.cTFRGBA32 = 13] = "cTFRGBA32", kk[kk.cTFRGB565 = 14] = "cTFRGB565", kk[kk.cTFBGR565 = 15] = "cTFBGR565", kk[kk.cTFRGBA4444 = 16] = "cTFRGBA4444", kk[kk.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", kk[kk.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", kk[kk.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", kk[kk.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", kk[kk.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Xk || (Xk = {}));
    const qk = {
      JSModuleURL: `${Tk.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Tk.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Lk = null,
      tk = null,
      Zk = 0;
    const jk = async () => (Lk || (Lk = new Promise(((kk, Fk) => {
      tk ? kk(tk) : Tk.h.LoadFileAsync(Tk.h.GetBabylonScriptURL(qk.WasmModuleURL)).then((Ik => {
        if ("function" !== typeof URL) return Fk("Basis transcoder requires an environment with a URL constructor");
        const Xk = URL.createObjectURL(new Blob([`(${ak})()`], {
          type: "application/javascript"
        }));
        tk = new Worker(Xk), async function(kk, Fk, Ik) {
          return await new Promise(((Xk, ik) => {
            const yk = Fk => {
              "init" === Fk.data.action ? (kk.removeEventListener("message", yk), Xk(kk)) : "error" === Fk.data.action && ik(Fk.data.error || "error initializing worker")
            };
            kk.addEventListener("message", yk), kk.postMessage({
              action: "init",
              url: Ik ? Tk.h.GetBabylonScriptURL(Ik) : void 0,
              wasmBinary: Fk
            }, [Fk])
          }))
        }(tk, Ik, qk.JSModuleURL).then(kk, Fk)
      })).catch(Fk)
    }))), await Lk), ek = async (kk, Fk) => {
      const Ik = kk instanceof ArrayBuffer ? new Uint8Array(kk) : kk;
      return await new Promise(((kk, Xk) => {
        jk().then((() => {
          const Tk = Zk++,
            ik = Fk => {
              "transcode" === Fk.data.action && Fk.data.id === Tk && (tk.removeEventListener("message", ik), Fk.data.success ? kk(Fk.data) : Xk("Transcode is not supported on this device"))
            };
          tk.addEventListener("message", ik);
          const yk = new Uint8Array(Ik.byteLength);
          yk.set(new Uint8Array(Ik.buffer, Ik.byteOffset, Ik.byteLength)), tk.postMessage({
            action: "transcode",
            id: Tk,
            imageData: yk,
            config: Fk,
            ignoreSupportedFormats: false
          }, [yk.buffer])
        }), (kk => {
          Xk(kk)
        }))
      }))
    }, wk = (kk, Fk) => {
      let Ik = Fk._gl?.TEXTURE_2D;
      kk.isCube && (Ik = Fk._gl?.TEXTURE_CUBE_MAP), Fk._bindTextureDirectly(Ik, kk, !0)
    }, Hk = (kk, Fk) => {
      const Ik = kk.Oe();
      for (let Tk = 0; Tk < Fk.fileInfo.images.length; Tk++) {
        const ak = Fk.fileInfo.images[Tk].levels[0];
        if (kk._invertVScale = kk.invertY, -1 === Fk.format || Fk.format === Xk.cTFRGB565)
          if (kk.type = 10, kk.format = 4, !Ik._features.basisNeedsPOT || Math.log2(ak.width) % 1 === 0 && Math.log2(ak.height) % 1 === 0) kk._invertVScale = !kk.invertY, kk.width = ak.width + 3 & -4, kk.height = ak.height + 3 & -4, kk.samplingMode = 2, wk(kk, Ik), Ik._uploadDataToTextureDirectly(kk, new Uint16Array(ak.transcodedPixels.buffer), Tk, 0, 4, !0);
          else {
            const Fk = new lk.b(Ik, 2);
            kk._invertVScale = kk.invertY, Fk.type = 10, Fk.format = 4, Fk.width = ak.width + 3 & -4, Fk.height = ak.height + 3 & -4, wk(Fk, Ik), Ik._uploadDataToTextureDirectly(Fk, new Uint16Array(ak.transcodedPixels.buffer), Tk, 0, 4, !0), Ik._rescaleTexture(Fk, kk, Ik.scenes[0], Ik._getInternalFormat(4), (() => {
              Ik._releaseTexture(Fk), wk(kk, Ik)
            }))
          }
        else {
          kk.width = ak.width, kk.height = ak.height, kk.generateMipMaps = Fk.fileInfo.images[Tk].levels.length > 1;
          const Xk = Jk.GetInternalFormatFromBasisFormat(Fk.format, Ik);
          kk.format = Xk, wk(kk, Ik);
          const lk = Fk.fileInfo.images[Tk].levels;
          for (let Fk = 0; Fk < lk.length; Fk++) {
            const ik = lk[Fk];
            Ik._uploadCompressedDataToTextureDirectly(kk, Xk, ik.width, ik.height, ik.transcodedPixels, Tk, Fk)
          }!Ik._features.basisNeedsPOT || Math.log2(kk.width) % 1 === 0 && Math.log2(kk.height) % 1 === 0 || (ik.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), kk._cachedWrapU = yk.g.CLAMP_ADDRESSMODE, kk._cachedWrapV = yk.g.CLAMP_ADDRESSMODE)
        }
      }
    }, Jk = {
      JSModuleURL: qk.JSModuleURL,
      WasmModuleURL: qk.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (kk, Fk) => {
        let Ik;
        switch (kk) {
          case Xk.cTFETC1:
            Ik = 36196;
            break;
          case Xk.cTFBC1:
            Ik = 33776;
            break;
          case Xk.cTFBC4:
            Ik = 33779;
            break;
          case Xk.cTFASTC_4x4:
            Ik = 37808;
            break;
          case Xk.cTFETC2:
            Ik = 37496;
            break;
          case Xk.cTFBC7:
            Ik = 36492
        }
        if (void 0 === Ik) throw "The chosen Basis transcoder format is not currently supported";
        return Ik
      },
      TranscodeAsync: ek,
      LoadTextureFromTranscodeResult: Hk
    };
    class xk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(kk, Fk, Ik, Xk, ik) {
        if (Array.isArray(kk)) return;
        const yk = Fk.Oe().getCaps(),
          lk = {
            supportedCompressionFormats: {
              etc1: !!yk.etc1,
              s3tc: !!yk.s3tc,
              pvrtc: !!yk.pvrtc,
              etc2: !!yk.etc2,
              astc: !!yk.astc,
              bc7: !!yk.bptc
            }
          };
        ek(kk, lk).then((kk => {
          const Ik = kk.fileInfo.images[0].levels.length > 1 && Fk.generateMipMaps;
          Hk(Fk, kk), Fk.Oe()._setCubeMapTextureParams(Fk, Ik), Fk.isReady = !0, Fk.onLoadedObservable.notifyObservers(Fk), Fk.onLoadedObservable.clear(), Xk && Xk()
        })).catch((kk => {
          Tk.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Fk.isReady = !0, ik && ik(kk)
        }))
      }
      loadData(kk, Fk, Ik) {
        const Xk = Fk.Oe().getCaps(),
          ik = {
            supportedCompressionFormats: {
              etc1: !!Xk.etc1,
              s3tc: !!Xk.s3tc,
              pvrtc: !!Xk.pvrtc,
              etc2: !!Xk.etc2,
              astc: !!Xk.astc,
              bc7: !!Xk.bptc
            }
          };
        ek(kk, ik).then((kk => {
          const Xk = kk.fileInfo.images[0].levels[0],
            Tk = kk.fileInfo.images[0].levels.length > 1 && Fk.generateMipMaps;
          Ik(Xk.width, Xk.height, Tk, -1 !== kk.format, (() => {
            Hk(Fk, kk)
          }))
        })).catch((kk => {
          Tk.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Tk.h.Warn(`Failed to transcode Basis file: ${kk}`), Ik(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);