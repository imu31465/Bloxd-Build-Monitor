export const id = 309;
export const ids = [309];
export const modules = {
  41367: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      _BasisTextureLoader: () => pk
    });
    var Dk, fk = ik(39662),
      Sk = ik(38272),
      bk = ik(40053),
      rk = ik(39391);

    function Pk() {
      const kk = 0,
        ek = 1,
        ik = 2,
        Dk = 3,
        fk = 6,
        Sk = 8,
        bk = 9,
        rk = 10,
        Pk = 14;
      let mk = null;

      function Mk(kk, ek, ik, Dk, fk) {
        const Sk = kk.getImageTranscodedSizeInBytes(ek, ik, Dk);
        let bk = new Uint8Array(Sk);
        if (!kk.transcodeImage(bk, ek, ik, Dk, 1, 0)) return null;
        if (fk) {
          bk = function(kk, ek, ik, Dk) {
            const fk = new Uint16Array(4),
              Sk = new Uint16Array(ik * Dk),
              bk = ik / 4,
              rk = Dk / 4;
            for (let Pk = 0; Pk < rk; Pk++)
              for (let Dk = 0; Dk < bk; Dk++) {
                const rk = ek + 8 * (Pk * bk + Dk);
                fk[0] = kk[rk] | kk[rk + 1] << 8, fk[1] = kk[rk + 2] | kk[rk + 3] << 8, fk[2] = (2 * (31 & fk[0]) + 1 * (31 & fk[1])) / 3 | (2 * (2016 & fk[0]) + 1 * (2016 & fk[1])) / 3 & 2016 | (2 * (63488 & fk[0]) + 1 * (63488 & fk[1])) / 3 & 63488, fk[3] = (2 * (31 & fk[1]) + 1 * (31 & fk[0])) / 3 | (2 * (2016 & fk[1]) + 1 * (2016 & fk[0])) / 3 & 2016 | (2 * (63488 & fk[1]) + 1 * (63488 & fk[0])) / 3 & 63488;
                for (let ek = 0; ek < 4; ek++) {
                  const bk = kk[rk + 4 + ek];
                  let mk = (4 * Pk + ek) * ik + 4 * Dk;
                  Sk[mk++] = fk[3 & bk], Sk[mk++] = fk[bk >> 2 & 3], Sk[mk++] = fk[bk >> 4 & 3], Sk[mk] = fk[bk >> 6 & 3]
                }
              }
            return Sk
          }(bk, 0, kk.getImageWidth(ek, ik) + 3 & -4, kk.getImageHeight(ek, ik) + 3 & -4)
        }
        return bk
      }
      onmessage = Kk => {
        if ("init" === Kk.data.action) {
          if (Kk.data.url) try {
            importScripts(Kk.data.url)
          } catch (xk) {
            postMessage({
              action: "error",
              error: xk
            })
          }
          mk || (mk = BASIS({
            wasmBinary: Kk.data.wasmBinary
          })), null !== mk && mk.then((kk => {
            BASIS = kk, kk.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Kk.data.action) {
          const mk = Kk.data.config,
            xk = Kk.data.imageData,
            nk = new BASIS.BasisFile(xk),
            Uk = function(kk) {
              const ek = kk.getHasAlpha(),
                ik = kk.getNumImages(),
                Dk = [];
              for (let fk = 0; fk < ik; fk++) {
                const ek = {
                    levels: []
                  },
                  ik = kk.getNumLevels(fk);
                for (let Dk = 0; Dk < ik; Dk++) {
                  const ik = {
                    width: kk.getImageWidth(fk, Dk),
                    height: kk.getImageHeight(fk, Dk)
                  };
                  ek.levels.push(ik)
                }
                Dk.push(ek)
              }
              return {
                hasAlpha: ek,
                images: Dk
              }
            }(nk);
          let Hk = Kk.data.ignoreSupportedFormats ? null : function(mk, Mk) {
              let Kk = null;
              mk.supportedCompressionFormats && (Kk = mk.supportedCompressionFormats.astc ? rk : mk.supportedCompressionFormats.bc7 ? fk : mk.supportedCompressionFormats.s3tc ? Mk.hasAlpha ? Dk : ik : mk.supportedCompressionFormats.pvrtc ? Mk.hasAlpha ? bk : Sk : mk.supportedCompressionFormats.etc2 ? ek : mk.supportedCompressionFormats.etc1 ? kk : Pk);
              return Kk
            }(Kk.data.config, Uk),
            wk = !1;
          null === Hk && (wk = !0, Hk = Uk.hasAlpha ? Dk : ik);
          let lk = !0;
          nk.startTranscoding() || (lk = !1);
          const pk = [];
          for (let kk = 0; kk < Uk.images.length && lk; kk++) {
            const ek = Uk.images[kk];
            if (void 0 === mk.loadSingleImage || mk.loadSingleImage === kk) {
              let ik = ek.levels.length;
              !1 === mk.loadMipmapLevels && (ik = 1);
              for (let Dk = 0; Dk < ik; Dk++) {
                const ik = ek.levels[Dk],
                  fk = Mk(nk, kk, Dk, Hk, wk);
                if (!fk) {
                  lk = !1;
                  break
                }
                ik.transcodedPixels = fk, pk.push(ik.transcodedPixels.buffer)
              }
            }
          }
          nk.close(), nk.delete(), wk && (Hk = -1), lk ? postMessage({
            action: "transcode",
            success: lk,
            id: Kk.data.id,
            fileInfo: Uk,
            format: Hk
          }, pk) : postMessage({
            action: "transcode",
            success: lk,
            id: Kk.data.id
          })
        }
      }
    }! function(kk) {
      kk[kk.cTFETC1 = 0] = "cTFETC1", kk[kk.cTFETC2 = 1] = "cTFETC2", kk[kk.cTFBC1 = 2] = "cTFBC1", kk[kk.cTFBC3 = 3] = "cTFBC3", kk[kk.cTFBC4 = 4] = "cTFBC4", kk[kk.cTFBC5 = 5] = "cTFBC5", kk[kk.cTFBC7 = 6] = "cTFBC7", kk[kk.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", kk[kk.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", kk[kk.cTFASTC_4x4 = 10] = "cTFASTC_4x4", kk[kk.cTFATC_RGB = 11] = "cTFATC_RGB", kk[kk.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", kk[kk.cTFRGBA32 = 13] = "cTFRGBA32", kk[kk.cTFRGB565 = 14] = "cTFRGB565", kk[kk.cTFBGR565 = 15] = "cTFBGR565", kk[kk.cTFRGBA4444 = 16] = "cTFRGBA4444", kk[kk.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", kk[kk.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", kk[kk.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", kk[kk.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", kk[kk.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Dk || (Dk = {}));
    const mk = {
      JSModuleURL: `${fk.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${fk.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Mk = null,
      Kk = null,
      xk = 0;
    const nk = async () => (Mk || (Mk = new Promise(((kk, ek) => {
      Kk ? kk(Kk) : fk.i.LoadFileAsync(fk.i.GetBabylonScriptURL(mk.WasmModuleURL)).then((ik => {
        if ("function" !== typeof URL) return ek("Basis transcoder requires an environment with a URL constructor");
        const Dk = URL.createObjectURL(new Blob([`(${Pk})()`], {
          type: "application/javascript"
        }));
        Kk = new Worker(Dk), async function(kk, ek, ik) {
          return await new Promise(((Dk, Sk) => {
            const bk = ek => {
              "init" === ek.data.action ? (kk.removeEventListener("message", bk), Dk(kk)) : "error" === ek.data.action && Sk(ek.data.error || "error initializing worker")
            };
            kk.addEventListener("message", bk), kk.postMessage({
              action: "init",
              url: ik ? fk.i.GetBabylonScriptURL(ik) : void 0,
              wasmBinary: ek
            }, [ek])
          }))
        }(Kk, ik, mk.JSModuleURL).then(kk, ek)
      })).catch(ek)
    }))), await Mk), Uk = async (kk, ek) => {
      const ik = kk instanceof ArrayBuffer ? new Uint8Array(kk) : kk;
      return await new Promise(((kk, Dk) => {
        nk().then((() => {
          const fk = xk++,
            Sk = ek => {
              "transcode" === ek.data.action && ek.data.id === fk && (Kk.removeEventListener("message", Sk), ek.data.success ? kk(ek.data) : Dk("Transcode is not supported on this device"))
            };
          Kk.addEventListener("message", Sk);
          const bk = new Uint8Array(ik.byteLength);
          bk.set(new Uint8Array(ik.buffer, ik.byteOffset, ik.byteLength)), Kk.postMessage({
            action: "transcode",
            id: fk,
            imageData: bk,
            config: ek,
            ignoreSupportedFormats: false
          }, [bk.buffer])
        }), (kk => {
          Dk(kk)
        }))
      }))
    }, Hk = (kk, ek) => {
      let ik = ek._gl?.TEXTURE_2D;
      kk.isCube && (ik = ek._gl?.TEXTURE_CUBE_MAP), ek._bindTextureDirectly(ik, kk, !0)
    }, wk = (kk, ek) => {
      const ik = kk.JU();
      for (let fk = 0; fk < ek.fileInfo.images.length; fk++) {
        const Pk = ek.fileInfo.images[fk].levels[0];
        if (kk._invertVScale = kk.invertY, -1 === ek.format || ek.format === Dk.cTFRGB565)
          if (kk.type = 10, kk.format = 4, !ik._features.basisNeedsPOT || Math.log2(Pk.width) % 1 === 0 && Math.log2(Pk.height) % 1 === 0) kk._invertVScale = !kk.invertY, kk.width = Pk.width + 3 & -4, kk.height = Pk.height + 3 & -4, kk.samplingMode = 2, Hk(kk, ik), ik._uploadDataToTextureDirectly(kk, new Uint16Array(Pk.transcodedPixels.buffer), fk, 0, 4, !0);
          else {
            const ek = new rk.b(ik, 2);
            kk._invertVScale = kk.invertY, ek.type = 10, ek.format = 4, ek.width = Pk.width + 3 & -4, ek.height = Pk.height + 3 & -4, Hk(ek, ik), ik._uploadDataToTextureDirectly(ek, new Uint16Array(Pk.transcodedPixels.buffer), fk, 0, 4, !0), ik._rescaleTexture(ek, kk, ik.scenes[0], ik._getInternalFormat(4), (() => {
              ik._releaseTexture(ek), Hk(kk, ik)
            }))
          }
        else {
          kk.width = Pk.width, kk.height = Pk.height, kk.generateMipMaps = ek.fileInfo.images[fk].levels.length > 1;
          const Dk = lk.GetInternalFormatFromBasisFormat(ek.format, ik);
          kk.format = Dk, Hk(kk, ik);
          const rk = ek.fileInfo.images[fk].levels;
          for (let ek = 0; ek < rk.length; ek++) {
            const Sk = rk[ek];
            ik._uploadCompressedDataToTextureDirectly(kk, Dk, Sk.width, Sk.height, Sk.transcodedPixels, fk, ek)
          }!ik._features.basisNeedsPOT || Math.log2(kk.width) % 1 === 0 && Math.log2(kk.height) % 1 === 0 || (Sk.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), kk._cachedWrapU = bk.f.CLAMP_ADDRESSMODE, kk._cachedWrapV = bk.f.CLAMP_ADDRESSMODE)
        }
      }
    }, lk = {
      JSModuleURL: mk.JSModuleURL,
      WasmModuleURL: mk.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (kk, ek) => {
        let ik;
        switch (kk) {
          case Dk.cTFETC1:
            ik = 36196;
            break;
          case Dk.cTFBC1:
            ik = 33776;
            break;
          case Dk.cTFBC4:
            ik = 33779;
            break;
          case Dk.cTFASTC_4x4:
            ik = 37808;
            break;
          case Dk.cTFETC2:
            ik = 37496;
            break;
          case Dk.cTFBC7:
            ik = 36492
        }
        if (void 0 === ik) throw "The chosen Basis transcoder format is not currently supported";
        return ik
      },
      TranscodeAsync: Uk,
      LoadTextureFromTranscodeResult: wk
    };
    class pk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(kk, ek, ik, Dk, Sk) {
        if (Array.isArray(kk)) return;
        const bk = ek.JU().getCaps(),
          rk = {
            supportedCompressionFormats: {
              etc1: !!bk.etc1,
              s3tc: !!bk.s3tc,
              pvrtc: !!bk.pvrtc,
              etc2: !!bk.etc2,
              astc: !!bk.astc,
              bc7: !!bk.bptc
            }
          };
        Uk(kk, rk).then((kk => {
          const ik = kk.fileInfo.images[0].levels.length > 1 && ek.generateMipMaps;
          wk(ek, kk), ek.JU()._setCubeMapTextureParams(ek, ik), ek.isReady = !0, ek.onLoadedObservable.notifyObservers(ek), ek.onLoadedObservable.clear(), Dk && Dk()
        })).catch((kk => {
          fk.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), ek.isReady = !0, Sk && Sk(kk)
        }))
      }
      loadData(kk, ek, ik) {
        const Dk = ek.JU().getCaps(),
          Sk = {
            supportedCompressionFormats: {
              etc1: !!Dk.etc1,
              s3tc: !!Dk.s3tc,
              pvrtc: !!Dk.pvrtc,
              etc2: !!Dk.etc2,
              astc: !!Dk.astc,
              bc7: !!Dk.bptc
            }
          };
        Uk(kk, Sk).then((kk => {
          const Dk = kk.fileInfo.images[0].levels[0],
            fk = kk.fileInfo.images[0].levels.length > 1 && ek.generateMipMaps;
          ik(Dk.width, Dk.height, fk, -1 !== kk.format, (() => {
            wk(ek, kk)
          }))
        })).catch((kk => {
          fk.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), fk.i.Warn(`Failed to transcode Basis file: ${kk}`), ik(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);