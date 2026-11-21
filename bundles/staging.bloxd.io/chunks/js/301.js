export const id = 301;
export const ids = [301];
export const modules = {
  41739: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      _BasisTextureLoader: () => Id
    });
    var pd, Nd = kd(40066),
      Wd = kd(38812),
      Pd = kd(40471),
      Zd = kd(39805);

    function gd() {
      const dd = 0,
        Jd = 1,
        kd = 2,
        pd = 3,
        Nd = 6,
        Wd = 8,
        Pd = 9,
        Zd = 10,
        gd = 14;
      let Cd = null;

      function Kd(dd, Jd, kd, pd, Nd) {
        const Wd = dd.getImageTranscodedSizeInBytes(Jd, kd, pd);
        let Pd = new Uint8Array(Wd);
        if (!dd.transcodeImage(Pd, Jd, kd, pd, 1, 0)) return null;
        if (Nd) {
          Pd = function(dd, Jd, kd, pd) {
            const Nd = new Uint16Array(4),
              Wd = new Uint16Array(kd * pd),
              Pd = kd / 4,
              Zd = pd / 4;
            for (let gd = 0; gd < Zd; gd++)
              for (let pd = 0; pd < Pd; pd++) {
                const Zd = Jd + 8 * (gd * Pd + pd);
                Nd[0] = dd[Zd] | dd[Zd + 1] << 8, Nd[1] = dd[Zd + 2] | dd[Zd + 3] << 8, Nd[2] = (2 * (31 & Nd[0]) + 1 * (31 & Nd[1])) / 3 | (2 * (2016 & Nd[0]) + 1 * (2016 & Nd[1])) / 3 & 2016 | (2 * (63488 & Nd[0]) + 1 * (63488 & Nd[1])) / 3 & 63488, Nd[3] = (2 * (31 & Nd[1]) + 1 * (31 & Nd[0])) / 3 | (2 * (2016 & Nd[1]) + 1 * (2016 & Nd[0])) / 3 & 2016 | (2 * (63488 & Nd[1]) + 1 * (63488 & Nd[0])) / 3 & 63488;
                for (let Jd = 0; Jd < 4; Jd++) {
                  const Pd = dd[Zd + 4 + Jd];
                  let Cd = (4 * gd + Jd) * kd + 4 * pd;
                  Wd[Cd++] = Nd[3 & Pd], Wd[Cd++] = Nd[Pd >> 2 & 3], Wd[Cd++] = Nd[Pd >> 4 & 3], Wd[Cd] = Nd[Pd >> 6 & 3]
                }
              }
            return Wd
          }(Pd, 0, dd.getImageWidth(Jd, kd) + 3 & -4, dd.getImageHeight(Jd, kd) + 3 & -4)
        }
        return Pd
      }
      onmessage = od => {
        if ("init" === od.data.action) {
          if (od.data.url) try {
            importScripts(od.data.url)
          } catch (ld) {
            postMessage({
              action: "error",
              error: ld
            })
          }
          Cd || (Cd = BASIS({
            wasmBinary: od.data.wasmBinary
          })), null !== Cd && Cd.then((dd => {
            BASIS = dd, dd.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === od.data.action) {
          const Cd = od.data.config,
            ld = od.data.imageData,
            Qd = new BASIS.BasisFile(ld),
            Ld = function(dd) {
              const Jd = dd.getHasAlpha(),
                kd = dd.getNumImages(),
                pd = [];
              for (let Nd = 0; Nd < kd; Nd++) {
                const Jd = {
                    levels: []
                  },
                  kd = dd.getNumLevels(Nd);
                for (let pd = 0; pd < kd; pd++) {
                  const kd = {
                    width: dd.getImageWidth(Nd, pd),
                    height: dd.getImageHeight(Nd, pd)
                  };
                  Jd.levels.push(kd)
                }
                pd.push(Jd)
              }
              return {
                hasAlpha: Jd,
                images: pd
              }
            }(Qd);
          let Od = od.data.ignoreSupportedFormats ? null : function(Cd, Kd) {
              let od = null;
              Cd.supportedCompressionFormats && (od = Cd.supportedCompressionFormats.astc ? Zd : Cd.supportedCompressionFormats.bc7 ? Nd : Cd.supportedCompressionFormats.s3tc ? Kd.hasAlpha ? pd : kd : Cd.supportedCompressionFormats.pvrtc ? Kd.hasAlpha ? Pd : Wd : Cd.supportedCompressionFormats.etc2 ? Jd : Cd.supportedCompressionFormats.etc1 ? dd : gd);
              return od
            }(od.data.config, Ld),
            ed = !1;
          null === Od && (ed = !0, Od = Ld.hasAlpha ? pd : kd);
          let Rd = !0;
          Qd.startTranscoding() || (Rd = !1);
          const Id = [];
          for (let dd = 0; dd < Ld.images.length && Rd; dd++) {
            const Jd = Ld.images[dd];
            if (void 0 === Cd.loadSingleImage || Cd.loadSingleImage === dd) {
              let kd = Jd.levels.length;
              !1 === Cd.loadMipmapLevels && (kd = 1);
              for (let pd = 0; pd < kd; pd++) {
                const kd = Jd.levels[pd],
                  Nd = Kd(Qd, dd, pd, Od, ed);
                if (!Nd) {
                  Rd = !1;
                  break
                }
                kd.transcodedPixels = Nd, Id.push(kd.transcodedPixels.buffer)
              }
            }
          }
          Qd.close(), Qd.delete(), ed && (Od = -1), Rd ? postMessage({
            action: "transcode",
            success: Rd,
            id: od.data.id,
            fileInfo: Ld,
            format: Od
          }, Id) : postMessage({
            action: "transcode",
            success: Rd,
            id: od.data.id
          })
        }
      }
    }! function(dd) {
      dd[dd.cTFETC1 = 0] = "cTFETC1", dd[dd.cTFETC2 = 1] = "cTFETC2", dd[dd.cTFBC1 = 2] = "cTFBC1", dd[dd.cTFBC3 = 3] = "cTFBC3", dd[dd.cTFBC4 = 4] = "cTFBC4", dd[dd.cTFBC5 = 5] = "cTFBC5", dd[dd.cTFBC7 = 6] = "cTFBC7", dd[dd.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", dd[dd.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", dd[dd.cTFASTC_4x4 = 10] = "cTFASTC_4x4", dd[dd.cTFATC_RGB = 11] = "cTFATC_RGB", dd[dd.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", dd[dd.cTFRGBA32 = 13] = "cTFRGBA32", dd[dd.cTFRGB565 = 14] = "cTFRGB565", dd[dd.cTFBGR565 = 15] = "cTFBGR565", dd[dd.cTFRGBA4444 = 16] = "cTFRGBA4444", dd[dd.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", dd[dd.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", dd[dd.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", dd[dd.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", dd[dd.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(pd || (pd = {}));
    const Cd = {
      JSModuleURL: `${Nd.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Nd.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Kd = null,
      od = null,
      ld = 0;
    const Qd = async () => (Kd || (Kd = new Promise(((dd, Jd) => {
      od ? dd(od) : Nd.h.LoadFileAsync(Nd.h.GetBabylonScriptURL(Cd.WasmModuleURL)).then((kd => {
        if ("function" !== typeof URL) return Jd("Basis transcoder requires an environment with a URL constructor");
        const pd = URL.createObjectURL(new Blob([`(${gd})()`], {
          type: "application/javascript"
        }));
        od = new Worker(pd), async function(dd, Jd, kd) {
          return await new Promise(((pd, Wd) => {
            const Pd = Jd => {
              "init" === Jd.data.action ? (dd.removeEventListener("message", Pd), pd(dd)) : "error" === Jd.data.action && Wd(Jd.data.error || "error initializing worker")
            };
            dd.addEventListener("message", Pd), dd.postMessage({
              action: "init",
              url: kd ? Nd.h.GetBabylonScriptURL(kd) : void 0,
              wasmBinary: Jd
            }, [Jd])
          }))
        }(od, kd, Cd.JSModuleURL).then(dd, Jd)
      })).catch(Jd)
    }))), await Kd), Ld = async (dd, Jd) => {
      const kd = dd instanceof ArrayBuffer ? new Uint8Array(dd) : dd;
      return await new Promise(((dd, pd) => {
        Qd().then((() => {
          const Nd = ld++,
            Wd = Jd => {
              "transcode" === Jd.data.action && Jd.data.id === Nd && (od.removeEventListener("message", Wd), Jd.data.success ? dd(Jd.data) : pd("Transcode is not supported on this device"))
            };
          od.addEventListener("message", Wd);
          const Pd = new Uint8Array(kd.byteLength);
          Pd.set(new Uint8Array(kd.buffer, kd.byteOffset, kd.byteLength)), od.postMessage({
            action: "transcode",
            id: Nd,
            imageData: Pd,
            config: Jd,
            ignoreSupportedFormats: false
          }, [Pd.buffer])
        }), (dd => {
          pd(dd)
        }))
      }))
    }, Od = (dd, Jd) => {
      let kd = Jd._gl?.TEXTURE_2D;
      dd.isCube && (kd = Jd._gl?.TEXTURE_CUBE_MAP), Jd._bindTextureDirectly(kd, dd, !0)
    }, ed = (dd, Jd) => {
      const kd = dd.eL();
      for (let Nd = 0; Nd < Jd.fileInfo.images.length; Nd++) {
        const gd = Jd.fileInfo.images[Nd].levels[0];
        if (dd._invertVScale = dd.invertY, -1 === Jd.format || Jd.format === pd.cTFRGB565)
          if (dd.type = 10, dd.format = 4, !kd._features.basisNeedsPOT || Math.log2(gd.width) % 1 === 0 && Math.log2(gd.height) % 1 === 0) dd._invertVScale = !dd.invertY, dd.width = gd.width + 3 & -4, dd.height = gd.height + 3 & -4, dd.samplingMode = 2, Od(dd, kd), kd._uploadDataToTextureDirectly(dd, new Uint16Array(gd.transcodedPixels.buffer), Nd, 0, 4, !0);
          else {
            const Jd = new Zd.b(kd, 2);
            dd._invertVScale = dd.invertY, Jd.type = 10, Jd.format = 4, Jd.width = gd.width + 3 & -4, Jd.height = gd.height + 3 & -4, Od(Jd, kd), kd._uploadDataToTextureDirectly(Jd, new Uint16Array(gd.transcodedPixels.buffer), Nd, 0, 4, !0), kd._rescaleTexture(Jd, dd, kd.scenes[0], kd._getInternalFormat(4), (() => {
              kd._releaseTexture(Jd), Od(dd, kd)
            }))
          }
        else {
          dd.width = gd.width, dd.height = gd.height, dd.generateMipMaps = Jd.fileInfo.images[Nd].levels.length > 1;
          const pd = Rd.GetInternalFormatFromBasisFormat(Jd.format, kd);
          dd.format = pd, Od(dd, kd);
          const Zd = Jd.fileInfo.images[Nd].levels;
          for (let Jd = 0; Jd < Zd.length; Jd++) {
            const Wd = Zd[Jd];
            kd._uploadCompressedDataToTextureDirectly(dd, pd, Wd.width, Wd.height, Wd.transcodedPixels, Nd, Jd)
          }!kd._features.basisNeedsPOT || Math.log2(dd.width) % 1 === 0 && Math.log2(dd.height) % 1 === 0 || (Wd.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), dd._cachedWrapU = Pd.c.CLAMP_ADDRESSMODE, dd._cachedWrapV = Pd.c.CLAMP_ADDRESSMODE)
        }
      }
    }, Rd = {
      JSModuleURL: Cd.JSModuleURL,
      WasmModuleURL: Cd.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (dd, Jd) => {
        let kd;
        switch (dd) {
          case pd.cTFETC1:
            kd = 36196;
            break;
          case pd.cTFBC1:
            kd = 33776;
            break;
          case pd.cTFBC4:
            kd = 33779;
            break;
          case pd.cTFASTC_4x4:
            kd = 37808;
            break;
          case pd.cTFETC2:
            kd = 37496;
            break;
          case pd.cTFBC7:
            kd = 36492
        }
        if (void 0 === kd) throw "The chosen Basis transcoder format is not currently supported";
        return kd
      },
      TranscodeAsync: Ld,
      LoadTextureFromTranscodeResult: ed
    };
    class Id {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(dd, Jd, kd, pd, Wd) {
        if (Array.isArray(dd)) return;
        const Pd = Jd.eL().getCaps(),
          Zd = {
            supportedCompressionFormats: {
              etc1: !!Pd.etc1,
              s3tc: !!Pd.s3tc,
              pvrtc: !!Pd.pvrtc,
              etc2: !!Pd.etc2,
              astc: !!Pd.astc,
              bc7: !!Pd.bptc
            }
          };
        Ld(dd, Zd).then((dd => {
          const kd = dd.fileInfo.images[0].levels.length > 1 && Jd.generateMipMaps;
          ed(Jd, dd), Jd.eL()._setCubeMapTextureParams(Jd, kd), Jd.isReady = !0, Jd.onLoadedObservable.notifyObservers(Jd), Jd.onLoadedObservable.clear(), pd && pd()
        })).catch((dd => {
          Nd.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Jd.isReady = !0, Wd && Wd(dd)
        }))
      }
      loadData(dd, Jd, kd) {
        const pd = Jd.eL().getCaps(),
          Wd = {
            supportedCompressionFormats: {
              etc1: !!pd.etc1,
              s3tc: !!pd.s3tc,
              pvrtc: !!pd.pvrtc,
              etc2: !!pd.etc2,
              astc: !!pd.astc,
              bc7: !!pd.bptc
            }
          };
        Ld(dd, Wd).then((dd => {
          const pd = dd.fileInfo.images[0].levels[0],
            Nd = dd.fileInfo.images[0].levels.length > 1 && Jd.generateMipMaps;
          kd(pd.width, pd.height, Nd, -1 !== dd.format, (() => {
            ed(Jd, dd)
          }))
        })).catch((dd => {
          Nd.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Nd.h.Warn(`Failed to transcode Basis file: ${dd}`), kd(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);