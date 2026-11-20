export const id = 301;
export const ids = [301];
export const modules = {
  41085: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      _BasisTextureLoader: () => cv
    });
    var hv, Sv = Pv(39399),
      ev = Pv(38209),
      gv = Pv(39798),
      pv = Pv(39134);

    function dv() {
      const vv = 0,
        zv = 1,
        Pv = 2,
        hv = 3,
        Sv = 6,
        ev = 8,
        gv = 9,
        pv = 10,
        dv = 14;
      let Nv = null;

      function lv(vv, zv, Pv, hv, Sv) {
        const ev = vv.getImageTranscodedSizeInBytes(zv, Pv, hv);
        let gv = new Uint8Array(ev);
        if (!vv.transcodeImage(gv, zv, Pv, hv, 1, 0)) return null;
        if (Sv) {
          gv = function(vv, zv, Pv, hv) {
            const Sv = new Uint16Array(4),
              ev = new Uint16Array(Pv * hv),
              gv = Pv / 4,
              pv = hv / 4;
            for (let dv = 0; dv < pv; dv++)
              for (let hv = 0; hv < gv; hv++) {
                const pv = zv + 8 * (dv * gv + hv);
                Sv[0] = vv[pv] | vv[pv + 1] << 8, Sv[1] = vv[pv + 2] | vv[pv + 3] << 8, Sv[2] = (2 * (31 & Sv[0]) + 1 * (31 & Sv[1])) / 3 | (2 * (2016 & Sv[0]) + 1 * (2016 & Sv[1])) / 3 & 2016 | (2 * (63488 & Sv[0]) + 1 * (63488 & Sv[1])) / 3 & 63488, Sv[3] = (2 * (31 & Sv[1]) + 1 * (31 & Sv[0])) / 3 | (2 * (2016 & Sv[1]) + 1 * (2016 & Sv[0])) / 3 & 2016 | (2 * (63488 & Sv[1]) + 1 * (63488 & Sv[0])) / 3 & 63488;
                for (let zv = 0; zv < 4; zv++) {
                  const gv = vv[pv + 4 + zv];
                  let Nv = (4 * dv + zv) * Pv + 4 * hv;
                  ev[Nv++] = Sv[3 & gv], ev[Nv++] = Sv[gv >> 2 & 3], ev[Nv++] = Sv[gv >> 4 & 3], ev[Nv] = Sv[gv >> 6 & 3]
                }
              }
            return ev
          }(gv, 0, vv.getImageWidth(zv, Pv) + 3 & -4, vv.getImageHeight(zv, Pv) + 3 & -4)
        }
        return gv
      }
      onmessage = Tv => {
        if ("init" === Tv.data.action) {
          if (Tv.data.url) try {
            importScripts(Tv.data.url)
          } catch (Wv) {
            postMessage({
              action: "error",
              error: Wv
            })
          }
          Nv || (Nv = BASIS({
            wasmBinary: Tv.data.wasmBinary
          })), null !== Nv && Nv.then((vv => {
            BASIS = vv, vv.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Tv.data.action) {
          const Nv = Tv.data.config,
            Wv = Tv.data.imageData,
            wv = new BASIS.BasisFile(Wv),
            av = function(vv) {
              const zv = vv.getHasAlpha(),
                Pv = vv.getNumImages(),
                hv = [];
              for (let Sv = 0; Sv < Pv; Sv++) {
                const zv = {
                    levels: []
                  },
                  Pv = vv.getNumLevels(Sv);
                for (let hv = 0; hv < Pv; hv++) {
                  const Pv = {
                    width: vv.getImageWidth(Sv, hv),
                    height: vv.getImageHeight(Sv, hv)
                  };
                  zv.levels.push(Pv)
                }
                hv.push(zv)
              }
              return {
                hasAlpha: zv,
                images: hv
              }
            }(wv);
          let sv = Tv.data.ignoreSupportedFormats ? null : function(Nv, lv) {
              let Tv = null;
              Nv.supportedCompressionFormats && (Tv = Nv.supportedCompressionFormats.astc ? pv : Nv.supportedCompressionFormats.bc7 ? Sv : Nv.supportedCompressionFormats.s3tc ? lv.hasAlpha ? hv : Pv : Nv.supportedCompressionFormats.pvrtc ? lv.hasAlpha ? gv : ev : Nv.supportedCompressionFormats.etc2 ? zv : Nv.supportedCompressionFormats.etc1 ? vv : dv);
              return Tv
            }(Tv.data.config, av),
            Cv = !1;
          null === sv && (Cv = !0, sv = av.hasAlpha ? hv : Pv);
          let iv = !0;
          wv.startTranscoding() || (iv = !1);
          const cv = [];
          for (let vv = 0; vv < av.images.length && iv; vv++) {
            const zv = av.images[vv];
            if (void 0 === Nv.loadSingleImage || Nv.loadSingleImage === vv) {
              let Pv = zv.levels.length;
              !1 === Nv.loadMipmapLevels && (Pv = 1);
              for (let hv = 0; hv < Pv; hv++) {
                const Pv = zv.levels[hv],
                  Sv = lv(wv, vv, hv, sv, Cv);
                if (!Sv) {
                  iv = !1;
                  break
                }
                Pv.transcodedPixels = Sv, cv.push(Pv.transcodedPixels.buffer)
              }
            }
          }
          wv.close(), wv.delete(), Cv && (sv = -1), iv ? postMessage({
            action: "transcode",
            success: iv,
            id: Tv.data.id,
            fileInfo: av,
            format: sv
          }, cv) : postMessage({
            action: "transcode",
            success: iv,
            id: Tv.data.id
          })
        }
      }
    }! function(vv) {
      vv[vv.cTFETC1 = 0] = "cTFETC1", vv[vv.cTFETC2 = 1] = "cTFETC2", vv[vv.cTFBC1 = 2] = "cTFBC1", vv[vv.cTFBC3 = 3] = "cTFBC3", vv[vv.cTFBC4 = 4] = "cTFBC4", vv[vv.cTFBC5 = 5] = "cTFBC5", vv[vv.cTFBC7 = 6] = "cTFBC7", vv[vv.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", vv[vv.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", vv[vv.cTFASTC_4x4 = 10] = "cTFASTC_4x4", vv[vv.cTFATC_RGB = 11] = "cTFATC_RGB", vv[vv.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", vv[vv.cTFRGBA32 = 13] = "cTFRGBA32", vv[vv.cTFRGB565 = 14] = "cTFRGB565", vv[vv.cTFBGR565 = 15] = "cTFBGR565", vv[vv.cTFRGBA4444 = 16] = "cTFRGBA4444", vv[vv.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", vv[vv.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", vv[vv.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", vv[vv.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", vv[vv.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(hv || (hv = {}));
    const Nv = {
      JSModuleURL: `${Sv.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Sv.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let lv = null,
      Tv = null,
      Wv = 0;
    const wv = async () => (lv || (lv = new Promise(((vv, zv) => {
      Tv ? vv(Tv) : Sv.h.LoadFileAsync(Sv.h.GetBabylonScriptURL(Nv.WasmModuleURL)).then((Pv => {
        if ("function" !== typeof URL) return zv("Basis transcoder requires an environment with a URL constructor");
        const hv = URL.createObjectURL(new Blob([`(${dv})()`], {
          type: "application/javascript"
        }));
        Tv = new Worker(hv), async function(vv, zv, Pv) {
          return await new Promise(((hv, ev) => {
            const gv = zv => {
              "init" === zv.data.action ? (vv.removeEventListener("message", gv), hv(vv)) : "error" === zv.data.action && ev(zv.data.error || "error initializing worker")
            };
            vv.addEventListener("message", gv), vv.postMessage({
              action: "init",
              url: Pv ? Sv.h.GetBabylonScriptURL(Pv) : void 0,
              wasmBinary: zv
            }, [zv])
          }))
        }(Tv, Pv, Nv.JSModuleURL).then(vv, zv)
      })).catch(zv)
    }))), await lv), av = async (vv, zv) => {
      const Pv = vv instanceof ArrayBuffer ? new Uint8Array(vv) : vv;
      return await new Promise(((vv, hv) => {
        wv().then((() => {
          const Sv = Wv++,
            ev = zv => {
              "transcode" === zv.data.action && zv.data.id === Sv && (Tv.removeEventListener("message", ev), zv.data.success ? vv(zv.data) : hv("Transcode is not supported on this device"))
            };
          Tv.addEventListener("message", ev);
          const gv = new Uint8Array(Pv.byteLength);
          gv.set(new Uint8Array(Pv.buffer, Pv.byteOffset, Pv.byteLength)), Tv.postMessage({
            action: "transcode",
            id: Sv,
            imageData: gv,
            config: zv,
            ignoreSupportedFormats: false
          }, [gv.buffer])
        }), (vv => {
          hv(vv)
        }))
      }))
    }, sv = (vv, zv) => {
      let Pv = zv._gl?.TEXTURE_2D;
      vv.isCube && (Pv = zv._gl?.TEXTURE_CUBE_MAP), zv._bindTextureDirectly(Pv, vv, !0)
    }, Cv = (vv, zv) => {
      const Pv = vv.ma();
      for (let Sv = 0; Sv < zv.fileInfo.images.length; Sv++) {
        const dv = zv.fileInfo.images[Sv].levels[0];
        if (vv._invertVScale = vv.invertY, -1 === zv.format || zv.format === hv.cTFRGB565)
          if (vv.type = 10, vv.format = 4, !Pv._features.basisNeedsPOT || Math.log2(dv.width) % 1 === 0 && Math.log2(dv.height) % 1 === 0) vv._invertVScale = !vv.invertY, vv.width = dv.width + 3 & -4, vv.height = dv.height + 3 & -4, vv.samplingMode = 2, sv(vv, Pv), Pv._uploadDataToTextureDirectly(vv, new Uint16Array(dv.transcodedPixels.buffer), Sv, 0, 4, !0);
          else {
            const zv = new pv.e(Pv, 2);
            vv._invertVScale = vv.invertY, zv.type = 10, zv.format = 4, zv.width = dv.width + 3 & -4, zv.height = dv.height + 3 & -4, sv(zv, Pv), Pv._uploadDataToTextureDirectly(zv, new Uint16Array(dv.transcodedPixels.buffer), Sv, 0, 4, !0), Pv._rescaleTexture(zv, vv, Pv.scenes[0], Pv._getInternalFormat(4), (() => {
              Pv._releaseTexture(zv), sv(vv, Pv)
            }))
          }
        else {
          vv.width = dv.width, vv.height = dv.height, vv.generateMipMaps = zv.fileInfo.images[Sv].levels.length > 1;
          const hv = iv.GetInternalFormatFromBasisFormat(zv.format, Pv);
          vv.format = hv, sv(vv, Pv);
          const pv = zv.fileInfo.images[Sv].levels;
          for (let zv = 0; zv < pv.length; zv++) {
            const ev = pv[zv];
            Pv._uploadCompressedDataToTextureDirectly(vv, hv, ev.width, ev.height, ev.transcodedPixels, Sv, zv)
          }!Pv._features.basisNeedsPOT || Math.log2(vv.width) % 1 === 0 && Math.log2(vv.height) % 1 === 0 || (ev.d.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), vv._cachedWrapU = gv.e.CLAMP_ADDRESSMODE, vv._cachedWrapV = gv.e.CLAMP_ADDRESSMODE)
        }
      }
    }, iv = {
      JSModuleURL: Nv.JSModuleURL,
      WasmModuleURL: Nv.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (vv, zv) => {
        let Pv;
        switch (vv) {
          case hv.cTFETC1:
            Pv = 36196;
            break;
          case hv.cTFBC1:
            Pv = 33776;
            break;
          case hv.cTFBC4:
            Pv = 33779;
            break;
          case hv.cTFASTC_4x4:
            Pv = 37808;
            break;
          case hv.cTFETC2:
            Pv = 37496;
            break;
          case hv.cTFBC7:
            Pv = 36492
        }
        if (void 0 === Pv) throw "The chosen Basis transcoder format is not currently supported";
        return Pv
      },
      TranscodeAsync: av,
      LoadTextureFromTranscodeResult: Cv
    };
    class cv {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(vv, zv, Pv, hv, ev) {
        if (Array.isArray(vv)) return;
        const gv = zv.ma().getCaps(),
          pv = {
            supportedCompressionFormats: {
              etc1: !!gv.etc1,
              s3tc: !!gv.s3tc,
              pvrtc: !!gv.pvrtc,
              etc2: !!gv.etc2,
              astc: !!gv.astc,
              bc7: !!gv.bptc
            }
          };
        av(vv, pv).then((vv => {
          const Pv = vv.fileInfo.images[0].levels.length > 1 && zv.generateMipMaps;
          Cv(zv, vv), zv.ma()._setCubeMapTextureParams(zv, Pv), zv.isReady = !0, zv.onLoadedObservable.notifyObservers(zv), zv.onLoadedObservable.clear(), hv && hv()
        })).catch((vv => {
          Sv.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), zv.isReady = !0, ev && ev(vv)
        }))
      }
      loadData(vv, zv, Pv) {
        const hv = zv.ma().getCaps(),
          ev = {
            supportedCompressionFormats: {
              etc1: !!hv.etc1,
              s3tc: !!hv.s3tc,
              pvrtc: !!hv.pvrtc,
              etc2: !!hv.etc2,
              astc: !!hv.astc,
              bc7: !!hv.bptc
            }
          };
        av(vv, ev).then((vv => {
          const hv = vv.fileInfo.images[0].levels[0],
            Sv = vv.fileInfo.images[0].levels.length > 1 && zv.generateMipMaps;
          Pv(hv.width, hv.height, Sv, -1 !== vv.format, (() => {
            Cv(zv, vv)
          }))
        })).catch((vv => {
          Sv.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Sv.h.Warn(`Failed to transcode Basis file: ${vv}`), Pv(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);