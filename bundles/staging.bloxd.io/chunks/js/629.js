export const id = 629;
export const ids = [629];
export const modules = {
  54320: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      _BasisTextureLoader: () => Yr
    });
    var Zr, Wr = Qr(41950),
      ar = Qr(40246),
      jr = Qr(42310),
      Ir = Qr(41731);

    function fr() {
      const rr = 0,
        Sr = 1,
        Qr = 2,
        Zr = 3,
        Wr = 6,
        ar = 8,
        jr = 9,
        Ir = 10,
        fr = 14;
      let Er = null;

      function pr(rr, Sr, Qr, Zr, Wr) {
        const ar = rr.getImageTranscodedSizeInBytes(Sr, Qr, Zr);
        let jr = new Uint8Array(ar);
        if (!rr.transcodeImage(jr, Sr, Qr, Zr, 1, 0)) return null;
        if (Wr) {
          jr = function(rr, Sr, Qr, Zr) {
            const Wr = new Uint16Array(4),
              ar = new Uint16Array(Qr * Zr),
              jr = Qr / 4,
              Ir = Zr / 4;
            for (let fr = 0; fr < Ir; fr++)
              for (let Zr = 0; Zr < jr; Zr++) {
                const Ir = Sr + 8 * (fr * jr + Zr);
                Wr[0] = rr[Ir] | rr[Ir + 1] << 8, Wr[1] = rr[Ir + 2] | rr[Ir + 3] << 8, Wr[2] = (2 * (31 & Wr[0]) + 1 * (31 & Wr[1])) / 3 | (2 * (2016 & Wr[0]) + 1 * (2016 & Wr[1])) / 3 & 2016 | (2 * (63488 & Wr[0]) + 1 * (63488 & Wr[1])) / 3 & 63488, Wr[3] = (2 * (31 & Wr[1]) + 1 * (31 & Wr[0])) / 3 | (2 * (2016 & Wr[1]) + 1 * (2016 & Wr[0])) / 3 & 2016 | (2 * (63488 & Wr[1]) + 1 * (63488 & Wr[0])) / 3 & 63488;
                for (let Sr = 0; Sr < 4; Sr++) {
                  const jr = rr[Ir + 4 + Sr];
                  let Er = (4 * fr + Sr) * Qr + 4 * Zr;
                  ar[Er++] = Wr[3 & jr], ar[Er++] = Wr[jr >> 2 & 3], ar[Er++] = Wr[jr >> 4 & 3], ar[Er] = Wr[jr >> 6 & 3]
                }
              }
            return ar
          }(jr, 0, rr.getImageWidth(Sr, Qr) + 3 & -4, rr.getImageHeight(Sr, Qr) + 3 & -4)
        }
        return jr
      }
      onmessage = xr => {
        if ("init" === xr.data.action) {
          if (xr.data.url) try {
            importScripts(xr.data.url)
          } catch (mr) {
            postMessage({
              action: "error",
              error: mr
            })
          }
          Er || (Er = BASIS({
            wasmBinary: xr.data.wasmBinary
          })), null !== Er && Er.then((rr => {
            BASIS = rr, rr.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === xr.data.action) {
          const Er = xr.data.config,
            mr = xr.data.imageData,
            Nr = new BASIS.BasisFile(mr),
            Ur = function(rr) {
              const Sr = rr.getHasAlpha(),
                Qr = rr.getNumImages(),
                Zr = [];
              for (let Wr = 0; Wr < Qr; Wr++) {
                const Sr = {
                    levels: []
                  },
                  Qr = rr.getNumLevels(Wr);
                for (let Zr = 0; Zr < Qr; Zr++) {
                  const Qr = {
                    width: rr.getImageWidth(Wr, Zr),
                    height: rr.getImageHeight(Wr, Zr)
                  };
                  Sr.levels.push(Qr)
                }
                Zr.push(Sr)
              }
              return {
                hasAlpha: Sr,
                images: Zr
              }
            }(Nr);
          let tr = xr.data.ignoreSupportedFormats ? null : function(Er, pr) {
              let xr = null;
              Er.supportedCompressionFormats && (xr = Er.supportedCompressionFormats.astc ? Ir : Er.supportedCompressionFormats.bc7 ? Wr : Er.supportedCompressionFormats.s3tc ? pr.hasAlpha ? Zr : Qr : Er.supportedCompressionFormats.pvrtc ? pr.hasAlpha ? jr : ar : Er.supportedCompressionFormats.etc2 ? Sr : Er.supportedCompressionFormats.etc1 ? rr : fr);
              return xr
            }(xr.data.config, Ur),
            hr = !1;
          null === tr && (hr = !0, tr = Ur.hasAlpha ? Zr : Qr);
          let zr = !0;
          Nr.startTranscoding() || (zr = !1);
          const Yr = [];
          for (let rr = 0; rr < Ur.images.length && zr; rr++) {
            const Sr = Ur.images[rr];
            if (void 0 === Er.loadSingleImage || Er.loadSingleImage === rr) {
              let Qr = Sr.levels.length;
              !1 === Er.loadMipmapLevels && (Qr = 1);
              for (let Zr = 0; Zr < Qr; Zr++) {
                const Qr = Sr.levels[Zr],
                  Wr = pr(Nr, rr, Zr, tr, hr);
                if (!Wr) {
                  zr = !1;
                  break
                }
                Qr.transcodedPixels = Wr, Yr.push(Qr.transcodedPixels.buffer)
              }
            }
          }
          Nr.close(), Nr.delete(), hr && (tr = -1), zr ? postMessage({
            action: "transcode",
            success: zr,
            id: xr.data.id,
            fileInfo: Ur,
            format: tr
          }, Yr) : postMessage({
            action: "transcode",
            success: zr,
            id: xr.data.id
          })
        }
      }
    }! function(rr) {
      rr[rr.cTFETC1 = 0] = "cTFETC1", rr[rr.cTFETC2 = 1] = "cTFETC2", rr[rr.cTFBC1 = 2] = "cTFBC1", rr[rr.cTFBC3 = 3] = "cTFBC3", rr[rr.cTFBC4 = 4] = "cTFBC4", rr[rr.cTFBC5 = 5] = "cTFBC5", rr[rr.cTFBC7 = 6] = "cTFBC7", rr[rr.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", rr[rr.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", rr[rr.cTFASTC_4x4 = 10] = "cTFASTC_4x4", rr[rr.cTFATC_RGB = 11] = "cTFATC_RGB", rr[rr.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", rr[rr.cTFRGBA32 = 13] = "cTFRGBA32", rr[rr.cTFRGB565 = 14] = "cTFRGB565", rr[rr.cTFBGR565 = 15] = "cTFBGR565", rr[rr.cTFRGBA4444 = 16] = "cTFRGBA4444", rr[rr.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", rr[rr.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", rr[rr.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", rr[rr.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", rr[rr.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Zr || (Zr = {}));
    const Er = {
      JSModuleURL: `${Wr.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Wr.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let pr = null,
      xr = null,
      mr = 0;
    const Nr = async () => (pr || (pr = new Promise(((rr, Sr) => {
      xr ? rr(xr) : Wr.h.LoadFileAsync(Wr.h.GetBabylonScriptURL(Er.WasmModuleURL)).then((Qr => {
        if ("function" !== typeof URL) return Sr("Basis transcoder requires an environment with a URL constructor");
        const Zr = URL.createObjectURL(new Blob([`(${fr})()`], {
          type: "application/javascript"
        }));
        xr = new Worker(Zr), async function(rr, Sr, Qr) {
          return await new Promise(((Zr, ar) => {
            const jr = Sr => {
              "init" === Sr.data.action ? (rr.removeEventListener("message", jr), Zr(rr)) : "error" === Sr.data.action && ar(Sr.data.error || "error initializing worker")
            };
            rr.addEventListener("message", jr), rr.postMessage({
              action: "init",
              url: Qr ? Wr.h.GetBabylonScriptURL(Qr) : void 0,
              wasmBinary: Sr
            }, [Sr])
          }))
        }(xr, Qr, Er.JSModuleURL).then(rr, Sr)
      })).catch(Sr)
    }))), await pr), Ur = async (rr, Sr) => {
      const Qr = rr instanceof ArrayBuffer ? new Uint8Array(rr) : rr;
      return await new Promise(((rr, Zr) => {
        Nr().then((() => {
          const Wr = mr++,
            ar = Sr => {
              "transcode" === Sr.data.action && Sr.data.id === Wr && (xr.removeEventListener("message", ar), Sr.data.success ? rr(Sr.data) : Zr("Transcode is not supported on this device"))
            };
          xr.addEventListener("message", ar);
          const jr = new Uint8Array(Qr.byteLength);
          jr.set(new Uint8Array(Qr.buffer, Qr.byteOffset, Qr.byteLength)), xr.postMessage({
            action: "transcode",
            id: Wr,
            imageData: jr,
            config: Sr,
            ignoreSupportedFormats: false
          }, [jr.buffer])
        }), (rr => {
          Zr(rr)
        }))
      }))
    }, tr = (rr, Sr) => {
      let Qr = Sr._gl?.TEXTURE_2D;
      rr.isCube && (Qr = Sr._gl?.TEXTURE_CUBE_MAP), Sr._bindTextureDirectly(Qr, rr, !0)
    }, hr = (rr, Sr) => {
      const Qr = rr.MU();
      for (let Wr = 0; Wr < Sr.fileInfo.images.length; Wr++) {
        const fr = Sr.fileInfo.images[Wr].levels[0];
        if (rr._invertVScale = rr.invertY, -1 === Sr.format || Sr.format === Zr.cTFRGB565)
          if (rr.type = 10, rr.format = 4, !Qr._features.basisNeedsPOT || Math.log2(fr.width) % 1 === 0 && Math.log2(fr.height) % 1 === 0) rr._invertVScale = !rr.invertY, rr.width = fr.width + 3 & -4, rr.height = fr.height + 3 & -4, rr.samplingMode = 2, tr(rr, Qr), Qr._uploadDataToTextureDirectly(rr, new Uint16Array(fr.transcodedPixels.buffer), Wr, 0, 4, !0);
          else {
            const Sr = new Ir.b(Qr, 2);
            rr._invertVScale = rr.invertY, Sr.type = 10, Sr.format = 4, Sr.width = fr.width + 3 & -4, Sr.height = fr.height + 3 & -4, tr(Sr, Qr), Qr._uploadDataToTextureDirectly(Sr, new Uint16Array(fr.transcodedPixels.buffer), Wr, 0, 4, !0), Qr._rescaleTexture(Sr, rr, Qr.scenes[0], Qr._getInternalFormat(4), (() => {
              Qr._releaseTexture(Sr), tr(rr, Qr)
            }))
          }
        else {
          rr.width = fr.width, rr.height = fr.height, rr.generateMipMaps = Sr.fileInfo.images[Wr].levels.length > 1;
          const Zr = zr.GetInternalFormatFromBasisFormat(Sr.format, Qr);
          rr.format = Zr, tr(rr, Qr);
          const Ir = Sr.fileInfo.images[Wr].levels;
          for (let Sr = 0; Sr < Ir.length; Sr++) {
            const ar = Ir[Sr];
            Qr._uploadCompressedDataToTextureDirectly(rr, Zr, ar.width, ar.height, ar.transcodedPixels, Wr, Sr)
          }!Qr._features.basisNeedsPOT || Math.log2(rr.width) % 1 === 0 && Math.log2(rr.height) % 1 === 0 || (ar.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), rr._cachedWrapU = jr.f.CLAMP_ADDRESSMODE, rr._cachedWrapV = jr.f.CLAMP_ADDRESSMODE)
        }
      }
    }, zr = {
      JSModuleURL: Er.JSModuleURL,
      WasmModuleURL: Er.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (rr, Sr) => {
        let Qr;
        switch (rr) {
          case Zr.cTFETC1:
            Qr = 36196;
            break;
          case Zr.cTFBC1:
            Qr = 33776;
            break;
          case Zr.cTFBC4:
            Qr = 33779;
            break;
          case Zr.cTFASTC_4x4:
            Qr = 37808;
            break;
          case Zr.cTFETC2:
            Qr = 37496;
            break;
          case Zr.cTFBC7:
            Qr = 36492
        }
        if (void 0 === Qr) throw "The chosen Basis transcoder format is not currently supported";
        return Qr
      },
      TranscodeAsync: Ur,
      LoadTextureFromTranscodeResult: hr
    };
    class Yr {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(rr, Sr, Qr, Zr, ar) {
        if (Array.isArray(rr)) return;
        const jr = Sr.MU().getCaps(),
          Ir = {
            supportedCompressionFormats: {
              etc1: !!jr.etc1,
              s3tc: !!jr.s3tc,
              pvrtc: !!jr.pvrtc,
              etc2: !!jr.etc2,
              astc: !!jr.astc,
              bc7: !!jr.bptc
            }
          };
        Ur(rr, Ir).then((rr => {
          const Qr = rr.fileInfo.images[0].levels.length > 1 && Sr.generateMipMaps;
          hr(Sr, rr), Sr.MU()._setCubeMapTextureParams(Sr, Qr), Sr.isReady = !0, Sr.onLoadedObservable.notifyObservers(Sr), Sr.onLoadedObservable.clear(), Zr && Zr()
        })).catch((rr => {
          Wr.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Sr.isReady = !0, ar && ar(rr)
        }))
      }
      loadData(rr, Sr, Qr) {
        const Zr = Sr.MU().getCaps(),
          ar = {
            supportedCompressionFormats: {
              etc1: !!Zr.etc1,
              s3tc: !!Zr.s3tc,
              pvrtc: !!Zr.pvrtc,
              etc2: !!Zr.etc2,
              astc: !!Zr.astc,
              bc7: !!Zr.bptc
            }
          };
        Ur(rr, ar).then((rr => {
          const Zr = rr.fileInfo.images[0].levels[0],
            Wr = rr.fileInfo.images[0].levels.length > 1 && Sr.generateMipMaps;
          Qr(Zr.width, Zr.height, Wr, -1 !== rr.format, (() => {
            hr(Sr, rr)
          }))
        })).catch((rr => {
          Wr.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Wr.h.Warn(`Failed to transcode Basis file: ${rr}`), Qr(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);