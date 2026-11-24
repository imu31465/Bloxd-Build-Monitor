export const id = 310;
export const ids = [310];
export const modules = {
  41811: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      _BasisTextureLoader: () => Vm
    });
    var hm, Am = fm(40203),
      am = fm(38766),
      xm = fm(40585),
      wm = fm(39942);

    function Dm() {
      const mm = 0,
        Tm = 1,
        fm = 2,
        hm = 3,
        Am = 6,
        am = 8,
        xm = 9,
        wm = 10,
        Dm = 14;
      let im = null;

      function Rm(mm, Tm, fm, hm, Am) {
        const am = mm.getImageTranscodedSizeInBytes(Tm, fm, hm);
        let xm = new Uint8Array(am);
        if (!mm.transcodeImage(xm, Tm, fm, hm, 1, 0)) return null;
        if (Am) {
          xm = function(mm, Tm, fm, hm) {
            const Am = new Uint16Array(4),
              am = new Uint16Array(fm * hm),
              xm = fm / 4,
              wm = hm / 4;
            for (let Dm = 0; Dm < wm; Dm++)
              for (let hm = 0; hm < xm; hm++) {
                const wm = Tm + 8 * (Dm * xm + hm);
                Am[0] = mm[wm] | mm[wm + 1] << 8, Am[1] = mm[wm + 2] | mm[wm + 3] << 8, Am[2] = (2 * (31 & Am[0]) + 1 * (31 & Am[1])) / 3 | (2 * (2016 & Am[0]) + 1 * (2016 & Am[1])) / 3 & 2016 | (2 * (63488 & Am[0]) + 1 * (63488 & Am[1])) / 3 & 63488, Am[3] = (2 * (31 & Am[1]) + 1 * (31 & Am[0])) / 3 | (2 * (2016 & Am[1]) + 1 * (2016 & Am[0])) / 3 & 2016 | (2 * (63488 & Am[1]) + 1 * (63488 & Am[0])) / 3 & 63488;
                for (let Tm = 0; Tm < 4; Tm++) {
                  const xm = mm[wm + 4 + Tm];
                  let im = (4 * Dm + Tm) * fm + 4 * hm;
                  am[im++] = Am[3 & xm], am[im++] = Am[xm >> 2 & 3], am[im++] = Am[xm >> 4 & 3], am[im] = Am[xm >> 6 & 3]
                }
              }
            return am
          }(xm, 0, mm.getImageWidth(Tm, fm) + 3 & -4, mm.getImageHeight(Tm, fm) + 3 & -4)
        }
        return xm
      }
      onmessage = pm => {
        if ("init" === pm.data.action) {
          if (pm.data.url) try {
            importScripts(pm.data.url)
          } catch (Em) {
            postMessage({
              action: "error",
              error: Em
            })
          }
          im || (im = BASIS({
            wasmBinary: pm.data.wasmBinary
          })), null !== im && im.then((mm => {
            BASIS = mm, mm.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === pm.data.action) {
          const im = pm.data.config,
            Em = pm.data.imageData,
            om = new BASIS.BasisFile(Em),
            Om = function(mm) {
              const Tm = mm.getHasAlpha(),
                fm = mm.getNumImages(),
                hm = [];
              for (let Am = 0; Am < fm; Am++) {
                const Tm = {
                    levels: []
                  },
                  fm = mm.getNumLevels(Am);
                for (let hm = 0; hm < fm; hm++) {
                  const fm = {
                    width: mm.getImageWidth(Am, hm),
                    height: mm.getImageHeight(Am, hm)
                  };
                  Tm.levels.push(fm)
                }
                hm.push(Tm)
              }
              return {
                hasAlpha: Tm,
                images: hm
              }
            }(om);
          let Ym = pm.data.ignoreSupportedFormats ? null : function(im, Rm) {
              let pm = null;
              im.supportedCompressionFormats && (pm = im.supportedCompressionFormats.astc ? wm : im.supportedCompressionFormats.bc7 ? Am : im.supportedCompressionFormats.s3tc ? Rm.hasAlpha ? hm : fm : im.supportedCompressionFormats.pvrtc ? Rm.hasAlpha ? xm : am : im.supportedCompressionFormats.etc2 ? Tm : im.supportedCompressionFormats.etc1 ? mm : Dm);
              return pm
            }(pm.data.config, Om),
            qm = !1;
          null === Ym && (qm = !0, Ym = Om.hasAlpha ? hm : fm);
          let jm = !0;
          om.startTranscoding() || (jm = !1);
          const Vm = [];
          for (let mm = 0; mm < Om.images.length && jm; mm++) {
            const Tm = Om.images[mm];
            if (void 0 === im.loadSingleImage || im.loadSingleImage === mm) {
              let fm = Tm.levels.length;
              !1 === im.loadMipmapLevels && (fm = 1);
              for (let hm = 0; hm < fm; hm++) {
                const fm = Tm.levels[hm],
                  Am = Rm(om, mm, hm, Ym, qm);
                if (!Am) {
                  jm = !1;
                  break
                }
                fm.transcodedPixels = Am, Vm.push(fm.transcodedPixels.buffer)
              }
            }
          }
          om.close(), om.delete(), qm && (Ym = -1), jm ? postMessage({
            action: "transcode",
            success: jm,
            id: pm.data.id,
            fileInfo: Om,
            format: Ym
          }, Vm) : postMessage({
            action: "transcode",
            success: jm,
            id: pm.data.id
          })
        }
      }
    }! function(mm) {
      mm[mm.cTFETC1 = 0] = "cTFETC1", mm[mm.cTFETC2 = 1] = "cTFETC2", mm[mm.cTFBC1 = 2] = "cTFBC1", mm[mm.cTFBC3 = 3] = "cTFBC3", mm[mm.cTFBC4 = 4] = "cTFBC4", mm[mm.cTFBC5 = 5] = "cTFBC5", mm[mm.cTFBC7 = 6] = "cTFBC7", mm[mm.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", mm[mm.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", mm[mm.cTFASTC_4x4 = 10] = "cTFASTC_4x4", mm[mm.cTFATC_RGB = 11] = "cTFATC_RGB", mm[mm.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", mm[mm.cTFRGBA32 = 13] = "cTFRGBA32", mm[mm.cTFRGB565 = 14] = "cTFRGB565", mm[mm.cTFBGR565 = 15] = "cTFBGR565", mm[mm.cTFRGBA4444 = 16] = "cTFRGBA4444", mm[mm.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", mm[mm.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", mm[mm.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", mm[mm.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", mm[mm.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(hm || (hm = {}));
    const im = {
      JSModuleURL: `${Am.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Am.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Rm = null,
      pm = null,
      Em = 0;
    const om = async () => (Rm || (Rm = new Promise(((mm, Tm) => {
      pm ? mm(pm) : Am.h.LoadFileAsync(Am.h.GetBabylonScriptURL(im.WasmModuleURL)).then((fm => {
        if ("function" !== typeof URL) return Tm("Basis transcoder requires an environment with a URL constructor");
        const hm = URL.createObjectURL(new Blob([`(${Dm})()`], {
          type: "application/javascript"
        }));
        pm = new Worker(hm), async function(mm, Tm, fm) {
          return await new Promise(((hm, am) => {
            const xm = Tm => {
              "init" === Tm.data.action ? (mm.removeEventListener("message", xm), hm(mm)) : "error" === Tm.data.action && am(Tm.data.error || "error initializing worker")
            };
            mm.addEventListener("message", xm), mm.postMessage({
              action: "init",
              url: fm ? Am.h.GetBabylonScriptURL(fm) : void 0,
              wasmBinary: Tm
            }, [Tm])
          }))
        }(pm, fm, im.JSModuleURL).then(mm, Tm)
      })).catch(Tm)
    }))), await Rm), Om = async (mm, Tm) => {
      const fm = mm instanceof ArrayBuffer ? new Uint8Array(mm) : mm;
      return await new Promise(((mm, hm) => {
        om().then((() => {
          const Am = Em++,
            am = Tm => {
              "transcode" === Tm.data.action && Tm.data.id === Am && (pm.removeEventListener("message", am), Tm.data.success ? mm(Tm.data) : hm("Transcode is not supported on this device"))
            };
          pm.addEventListener("message", am);
          const xm = new Uint8Array(fm.byteLength);
          xm.set(new Uint8Array(fm.buffer, fm.byteOffset, fm.byteLength)), pm.postMessage({
            action: "transcode",
            id: Am,
            imageData: xm,
            config: Tm,
            ignoreSupportedFormats: false
          }, [xm.buffer])
        }), (mm => {
          hm(mm)
        }))
      }))
    }, Ym = (mm, Tm) => {
      let fm = Tm._gl?.TEXTURE_2D;
      mm.isCube && (fm = Tm._gl?.TEXTURE_CUBE_MAP), Tm._bindTextureDirectly(fm, mm, !0)
    }, qm = (mm, Tm) => {
      const fm = mm.dO();
      for (let Am = 0; Am < Tm.fileInfo.images.length; Am++) {
        const Dm = Tm.fileInfo.images[Am].levels[0];
        if (mm._invertVScale = mm.invertY, -1 === Tm.format || Tm.format === hm.cTFRGB565)
          if (mm.type = 10, mm.format = 4, !fm._features.basisNeedsPOT || Math.log2(Dm.width) % 1 === 0 && Math.log2(Dm.height) % 1 === 0) mm._invertVScale = !mm.invertY, mm.width = Dm.width + 3 & -4, mm.height = Dm.height + 3 & -4, mm.samplingMode = 2, Ym(mm, fm), fm._uploadDataToTextureDirectly(mm, new Uint16Array(Dm.transcodedPixels.buffer), Am, 0, 4, !0);
          else {
            const Tm = new wm.d(fm, 2);
            mm._invertVScale = mm.invertY, Tm.type = 10, Tm.format = 4, Tm.width = Dm.width + 3 & -4, Tm.height = Dm.height + 3 & -4, Ym(Tm, fm), fm._uploadDataToTextureDirectly(Tm, new Uint16Array(Dm.transcodedPixels.buffer), Am, 0, 4, !0), fm._rescaleTexture(Tm, mm, fm.scenes[0], fm._getInternalFormat(4), (() => {
              fm._releaseTexture(Tm), Ym(mm, fm)
            }))
          }
        else {
          mm.width = Dm.width, mm.height = Dm.height, mm.generateMipMaps = Tm.fileInfo.images[Am].levels.length > 1;
          const hm = jm.GetInternalFormatFromBasisFormat(Tm.format, fm);
          mm.format = hm, Ym(mm, fm);
          const wm = Tm.fileInfo.images[Am].levels;
          for (let Tm = 0; Tm < wm.length; Tm++) {
            const am = wm[Tm];
            fm._uploadCompressedDataToTextureDirectly(mm, hm, am.width, am.height, am.transcodedPixels, Am, Tm)
          }!fm._features.basisNeedsPOT || Math.log2(mm.width) % 1 === 0 && Math.log2(mm.height) % 1 === 0 || (am.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), mm._cachedWrapU = xm.f.CLAMP_ADDRESSMODE, mm._cachedWrapV = xm.f.CLAMP_ADDRESSMODE)
        }
      }
    }, jm = {
      JSModuleURL: im.JSModuleURL,
      WasmModuleURL: im.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (mm, Tm) => {
        let fm;
        switch (mm) {
          case hm.cTFETC1:
            fm = 36196;
            break;
          case hm.cTFBC1:
            fm = 33776;
            break;
          case hm.cTFBC4:
            fm = 33779;
            break;
          case hm.cTFASTC_4x4:
            fm = 37808;
            break;
          case hm.cTFETC2:
            fm = 37496;
            break;
          case hm.cTFBC7:
            fm = 36492
        }
        if (void 0 === fm) throw "The chosen Basis transcoder format is not currently supported";
        return fm
      },
      TranscodeAsync: Om,
      LoadTextureFromTranscodeResult: qm
    };
    class Vm {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(mm, Tm, fm, hm, am) {
        if (Array.isArray(mm)) return;
        const xm = Tm.dO().getCaps(),
          wm = {
            supportedCompressionFormats: {
              etc1: !!xm.etc1,
              s3tc: !!xm.s3tc,
              pvrtc: !!xm.pvrtc,
              etc2: !!xm.etc2,
              astc: !!xm.astc,
              bc7: !!xm.bptc
            }
          };
        Om(mm, wm).then((mm => {
          const fm = mm.fileInfo.images[0].levels.length > 1 && Tm.generateMipMaps;
          qm(Tm, mm), Tm.dO()._setCubeMapTextureParams(Tm, fm), Tm.isReady = !0, Tm.onLoadedObservable.notifyObservers(Tm), Tm.onLoadedObservable.clear(), hm && hm()
        })).catch((mm => {
          Am.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Tm.isReady = !0, am && am(mm)
        }))
      }
      loadData(mm, Tm, fm) {
        const hm = Tm.dO().getCaps(),
          am = {
            supportedCompressionFormats: {
              etc1: !!hm.etc1,
              s3tc: !!hm.s3tc,
              pvrtc: !!hm.pvrtc,
              etc2: !!hm.etc2,
              astc: !!hm.astc,
              bc7: !!hm.bptc
            }
          };
        Om(mm, am).then((mm => {
          const hm = mm.fileInfo.images[0].levels[0],
            Am = mm.fileInfo.images[0].levels.length > 1 && Tm.generateMipMaps;
          fm(hm.width, hm.height, Am, -1 !== mm.format, (() => {
            qm(Tm, mm)
          }))
        })).catch((mm => {
          Am.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Am.h.Warn(`Failed to transcode Basis file: ${mm}`), fm(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);