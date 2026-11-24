export const id = 315;
export const ids = [315];
export const modules = {
  42050: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      _BasisTextureLoader: () => Mt
    });
    var Ot, qt = Vt(40300),
      Dt = Vt(38899),
      mt = Vt(40661),
      dt = Vt(40037);

    function jt() {
      const tt = 0,
        et = 1,
        Vt = 2,
        Ot = 3,
        qt = 6,
        Dt = 8,
        mt = 9,
        dt = 10,
        jt = 14;
      let Ht = null;

      function Xt(tt, et, Vt, Ot, qt) {
        const Dt = tt.getImageTranscodedSizeInBytes(et, Vt, Ot);
        let mt = new Uint8Array(Dt);
        if (!tt.transcodeImage(mt, et, Vt, Ot, 1, 0)) return null;
        if (qt) {
          mt = function(tt, et, Vt, Ot) {
            const qt = new Uint16Array(4),
              Dt = new Uint16Array(Vt * Ot),
              mt = Vt / 4,
              dt = Ot / 4;
            for (let jt = 0; jt < dt; jt++)
              for (let Ot = 0; Ot < mt; Ot++) {
                const dt = et + 8 * (jt * mt + Ot);
                qt[0] = tt[dt] | tt[dt + 1] << 8, qt[1] = tt[dt + 2] | tt[dt + 3] << 8, qt[2] = (2 * (31 & qt[0]) + 1 * (31 & qt[1])) / 3 | (2 * (2016 & qt[0]) + 1 * (2016 & qt[1])) / 3 & 2016 | (2 * (63488 & qt[0]) + 1 * (63488 & qt[1])) / 3 & 63488, qt[3] = (2 * (31 & qt[1]) + 1 * (31 & qt[0])) / 3 | (2 * (2016 & qt[1]) + 1 * (2016 & qt[0])) / 3 & 2016 | (2 * (63488 & qt[1]) + 1 * (63488 & qt[0])) / 3 & 63488;
                for (let et = 0; et < 4; et++) {
                  const mt = tt[dt + 4 + et];
                  let Ht = (4 * jt + et) * Vt + 4 * Ot;
                  Dt[Ht++] = qt[3 & mt], Dt[Ht++] = qt[mt >> 2 & 3], Dt[Ht++] = qt[mt >> 4 & 3], Dt[Ht] = qt[mt >> 6 & 3]
                }
              }
            return Dt
          }(mt, 0, tt.getImageWidth(et, Vt) + 3 & -4, tt.getImageHeight(et, Vt) + 3 & -4)
        }
        return mt
      }
      onmessage = Qt => {
        if ("init" === Qt.data.action) {
          if (Qt.data.url) try {
            importScripts(Qt.data.url)
          } catch (lt) {
            postMessage({
              action: "error",
              error: lt
            })
          }
          Ht || (Ht = BASIS({
            wasmBinary: Qt.data.wasmBinary
          })), null !== Ht && Ht.then((tt => {
            BASIS = tt, tt.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Qt.data.action) {
          const Ht = Qt.data.config,
            lt = Qt.data.imageData,
            Et = new BASIS.BasisFile(lt),
            ft = function(tt) {
              const et = tt.getHasAlpha(),
                Vt = tt.getNumImages(),
                Ot = [];
              for (let qt = 0; qt < Vt; qt++) {
                const et = {
                    levels: []
                  },
                  Vt = tt.getNumLevels(qt);
                for (let Ot = 0; Ot < Vt; Ot++) {
                  const Vt = {
                    width: tt.getImageWidth(qt, Ot),
                    height: tt.getImageHeight(qt, Ot)
                  };
                  et.levels.push(Vt)
                }
                Ot.push(et)
              }
              return {
                hasAlpha: et,
                images: Ot
              }
            }(Et);
          let wt = Qt.data.ignoreSupportedFormats ? null : function(Ht, Xt) {
              let Qt = null;
              Ht.supportedCompressionFormats && (Qt = Ht.supportedCompressionFormats.astc ? dt : Ht.supportedCompressionFormats.bc7 ? qt : Ht.supportedCompressionFormats.s3tc ? Xt.hasAlpha ? Ot : Vt : Ht.supportedCompressionFormats.pvrtc ? Xt.hasAlpha ? mt : Dt : Ht.supportedCompressionFormats.etc2 ? et : Ht.supportedCompressionFormats.etc1 ? tt : jt);
              return Qt
            }(Qt.data.config, ft),
            yt = !1;
          null === wt && (yt = !0, wt = ft.hasAlpha ? Ot : Vt);
          let Nt = !0;
          Et.startTranscoding() || (Nt = !1);
          const Mt = [];
          for (let tt = 0; tt < ft.images.length && Nt; tt++) {
            const et = ft.images[tt];
            if (void 0 === Ht.loadSingleImage || Ht.loadSingleImage === tt) {
              let Vt = et.levels.length;
              !1 === Ht.loadMipmapLevels && (Vt = 1);
              for (let Ot = 0; Ot < Vt; Ot++) {
                const Vt = et.levels[Ot],
                  qt = Xt(Et, tt, Ot, wt, yt);
                if (!qt) {
                  Nt = !1;
                  break
                }
                Vt.transcodedPixels = qt, Mt.push(Vt.transcodedPixels.buffer)
              }
            }
          }
          Et.close(), Et.delete(), yt && (wt = -1), Nt ? postMessage({
            action: "transcode",
            success: Nt,
            id: Qt.data.id,
            fileInfo: ft,
            format: wt
          }, Mt) : postMessage({
            action: "transcode",
            success: Nt,
            id: Qt.data.id
          })
        }
      }
    }! function(tt) {
      tt[tt.cTFETC1 = 0] = "cTFETC1", tt[tt.cTFETC2 = 1] = "cTFETC2", tt[tt.cTFBC1 = 2] = "cTFBC1", tt[tt.cTFBC3 = 3] = "cTFBC3", tt[tt.cTFBC4 = 4] = "cTFBC4", tt[tt.cTFBC5 = 5] = "cTFBC5", tt[tt.cTFBC7 = 6] = "cTFBC7", tt[tt.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", tt[tt.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", tt[tt.cTFASTC_4x4 = 10] = "cTFASTC_4x4", tt[tt.cTFATC_RGB = 11] = "cTFATC_RGB", tt[tt.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", tt[tt.cTFRGBA32 = 13] = "cTFRGBA32", tt[tt.cTFRGB565 = 14] = "cTFRGB565", tt[tt.cTFBGR565 = 15] = "cTFBGR565", tt[tt.cTFRGBA4444 = 16] = "cTFRGBA4444", tt[tt.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", tt[tt.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", tt[tt.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", tt[tt.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", tt[tt.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Ot || (Ot = {}));
    const Ht = {
      JSModuleURL: `${qt.l._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${qt.l._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Xt = null,
      Qt = null,
      lt = 0;
    const Et = async () => (Xt || (Xt = new Promise(((tt, et) => {
      Qt ? tt(Qt) : qt.l.LoadFileAsync(qt.l.GetBabylonScriptURL(Ht.WasmModuleURL)).then((Vt => {
        if ("function" !== typeof URL) return et("Basis transcoder requires an environment with a URL constructor");
        const Ot = URL.createObjectURL(new Blob([`(${jt})()`], {
          type: "application/javascript"
        }));
        Qt = new Worker(Ot), async function(tt, et, Vt) {
          return await new Promise(((Ot, Dt) => {
            const mt = et => {
              "init" === et.data.action ? (tt.removeEventListener("message", mt), Ot(tt)) : "error" === et.data.action && Dt(et.data.error || "error initializing worker")
            };
            tt.addEventListener("message", mt), tt.postMessage({
              action: "init",
              url: Vt ? qt.l.GetBabylonScriptURL(Vt) : void 0,
              wasmBinary: et
            }, [et])
          }))
        }(Qt, Vt, Ht.JSModuleURL).then(tt, et)
      })).catch(et)
    }))), await Xt), ft = async (tt, et) => {
      const Vt = tt instanceof ArrayBuffer ? new Uint8Array(tt) : tt;
      return await new Promise(((tt, Ot) => {
        Et().then((() => {
          const qt = lt++,
            Dt = et => {
              "transcode" === et.data.action && et.data.id === qt && (Qt.removeEventListener("message", Dt), et.data.success ? tt(et.data) : Ot("Transcode is not supported on this device"))
            };
          Qt.addEventListener("message", Dt);
          const mt = new Uint8Array(Vt.byteLength);
          mt.set(new Uint8Array(Vt.buffer, Vt.byteOffset, Vt.byteLength)), Qt.postMessage({
            action: "transcode",
            id: qt,
            imageData: mt,
            config: et,
            ignoreSupportedFormats: false
          }, [mt.buffer])
        }), (tt => {
          Ot(tt)
        }))
      }))
    }, wt = (tt, et) => {
      let Vt = et._gl?.TEXTURE_2D;
      tt.isCube && (Vt = et._gl?.TEXTURE_CUBE_MAP), et._bindTextureDirectly(Vt, tt, !0)
    }, yt = (tt, et) => {
      const Vt = tt.Jf();
      for (let qt = 0; qt < et.fileInfo.images.length; qt++) {
        const jt = et.fileInfo.images[qt].levels[0];
        if (tt._invertVScale = tt.invertY, -1 === et.format || et.format === Ot.cTFRGB565)
          if (tt.type = 10, tt.format = 4, !Vt._features.basisNeedsPOT || Math.log2(jt.width) % 1 === 0 && Math.log2(jt.height) % 1 === 0) tt._invertVScale = !tt.invertY, tt.width = jt.width + 3 & -4, tt.height = jt.height + 3 & -4, tt.samplingMode = 2, wt(tt, Vt), Vt._uploadDataToTextureDirectly(tt, new Uint16Array(jt.transcodedPixels.buffer), qt, 0, 4, !0);
          else {
            const et = new dt.d(Vt, 2);
            tt._invertVScale = tt.invertY, et.type = 10, et.format = 4, et.width = jt.width + 3 & -4, et.height = jt.height + 3 & -4, wt(et, Vt), Vt._uploadDataToTextureDirectly(et, new Uint16Array(jt.transcodedPixels.buffer), qt, 0, 4, !0), Vt._rescaleTexture(et, tt, Vt.scenes[0], Vt._getInternalFormat(4), (() => {
              Vt._releaseTexture(et), wt(tt, Vt)
            }))
          }
        else {
          tt.width = jt.width, tt.height = jt.height, tt.generateMipMaps = et.fileInfo.images[qt].levels.length > 1;
          const Ot = Nt.GetInternalFormatFromBasisFormat(et.format, Vt);
          tt.format = Ot, wt(tt, Vt);
          const dt = et.fileInfo.images[qt].levels;
          for (let et = 0; et < dt.length; et++) {
            const Dt = dt[et];
            Vt._uploadCompressedDataToTextureDirectly(tt, Ot, Dt.width, Dt.height, Dt.transcodedPixels, qt, et)
          }!Vt._features.basisNeedsPOT || Math.log2(tt.width) % 1 === 0 && Math.log2(tt.height) % 1 === 0 || (Dt.d.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), tt._cachedWrapU = mt.f.CLAMP_ADDRESSMODE, tt._cachedWrapV = mt.f.CLAMP_ADDRESSMODE)
        }
      }
    }, Nt = {
      JSModuleURL: Ht.JSModuleURL,
      WasmModuleURL: Ht.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (tt, et) => {
        let Vt;
        switch (tt) {
          case Ot.cTFETC1:
            Vt = 36196;
            break;
          case Ot.cTFBC1:
            Vt = 33776;
            break;
          case Ot.cTFBC4:
            Vt = 33779;
            break;
          case Ot.cTFASTC_4x4:
            Vt = 37808;
            break;
          case Ot.cTFETC2:
            Vt = 37496;
            break;
          case Ot.cTFBC7:
            Vt = 36492
        }
        if (void 0 === Vt) throw "The chosen Basis transcoder format is not currently supported";
        return Vt
      },
      TranscodeAsync: ft,
      LoadTextureFromTranscodeResult: yt
    };
    class Mt {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(tt, et, Vt, Ot, Dt) {
        if (Array.isArray(tt)) return;
        const mt = et.Jf().getCaps(),
          dt = {
            supportedCompressionFormats: {
              etc1: !!mt.etc1,
              s3tc: !!mt.s3tc,
              pvrtc: !!mt.pvrtc,
              etc2: !!mt.etc2,
              astc: !!mt.astc,
              bc7: !!mt.bptc
            }
          };
        ft(tt, dt).then((tt => {
          const Vt = tt.fileInfo.images[0].levels.length > 1 && et.generateMipMaps;
          yt(et, tt), et.Jf()._setCubeMapTextureParams(et, Vt), et.isReady = !0, et.onLoadedObservable.notifyObservers(et), et.onLoadedObservable.clear(), Ot && Ot()
        })).catch((tt => {
          qt.l.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), et.isReady = !0, Dt && Dt(tt)
        }))
      }
      loadData(tt, et, Vt) {
        const Ot = et.Jf().getCaps(),
          Dt = {
            supportedCompressionFormats: {
              etc1: !!Ot.etc1,
              s3tc: !!Ot.s3tc,
              pvrtc: !!Ot.pvrtc,
              etc2: !!Ot.etc2,
              astc: !!Ot.astc,
              bc7: !!Ot.bptc
            }
          };
        ft(tt, Dt).then((tt => {
          const Ot = tt.fileInfo.images[0].levels[0],
            qt = tt.fileInfo.images[0].levels.length > 1 && et.generateMipMaps;
          Vt(Ot.width, Ot.height, qt, -1 !== tt.format, (() => {
            yt(et, tt)
          }))
        })).catch((tt => {
          qt.l.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), qt.l.Warn(`Failed to transcode Basis file: ${tt}`), Vt(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);