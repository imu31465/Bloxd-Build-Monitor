export const id = 629;
export const ids = [629];
export const modules = {
  54209: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      _BasisTextureLoader: () => Td
    });
    var Wd, Fd = md(42029),
      Rd = md(40262),
      Xd = md(42412),
      Kd = md(41763);

    function hd() {
      const dd = 0,
        Od = 1,
        md = 2,
        Wd = 3,
        Fd = 6,
        Rd = 8,
        Xd = 9,
        Kd = 10,
        hd = 14;
      let vd = null;

      function Qd(dd, Od, md, Wd, Fd) {
        const Rd = dd.getImageTranscodedSizeInBytes(Od, md, Wd);
        let Xd = new Uint8Array(Rd);
        if (!dd.transcodeImage(Xd, Od, md, Wd, 1, 0)) return null;
        if (Fd) {
          Xd = function(dd, Od, md, Wd) {
            const Fd = new Uint16Array(4),
              Rd = new Uint16Array(md * Wd),
              Xd = md / 4,
              Kd = Wd / 4;
            for (let hd = 0; hd < Kd; hd++)
              for (let Wd = 0; Wd < Xd; Wd++) {
                const Kd = Od + 8 * (hd * Xd + Wd);
                Fd[0] = dd[Kd] | dd[Kd + 1] << 8, Fd[1] = dd[Kd + 2] | dd[Kd + 3] << 8, Fd[2] = (2 * (31 & Fd[0]) + 1 * (31 & Fd[1])) / 3 | (2 * (2016 & Fd[0]) + 1 * (2016 & Fd[1])) / 3 & 2016 | (2 * (63488 & Fd[0]) + 1 * (63488 & Fd[1])) / 3 & 63488, Fd[3] = (2 * (31 & Fd[1]) + 1 * (31 & Fd[0])) / 3 | (2 * (2016 & Fd[1]) + 1 * (2016 & Fd[0])) / 3 & 2016 | (2 * (63488 & Fd[1]) + 1 * (63488 & Fd[0])) / 3 & 63488;
                for (let Od = 0; Od < 4; Od++) {
                  const Xd = dd[Kd + 4 + Od];
                  let vd = (4 * hd + Od) * md + 4 * Wd;
                  Rd[vd++] = Fd[3 & Xd], Rd[vd++] = Fd[Xd >> 2 & 3], Rd[vd++] = Fd[Xd >> 4 & 3], Rd[vd] = Fd[Xd >> 6 & 3]
                }
              }
            return Rd
          }(Xd, 0, dd.getImageWidth(Od, md) + 3 & -4, dd.getImageHeight(Od, md) + 3 & -4)
        }
        return Xd
      }
      onmessage = td => {
        if ("init" === td.data.action) {
          if (td.data.url) try {
            importScripts(td.data.url)
          } catch (od) {
            postMessage({
              action: "error",
              error: od
            })
          }
          vd || (vd = BASIS({
            wasmBinary: td.data.wasmBinary
          })), null !== vd && vd.then((dd => {
            BASIS = dd, dd.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === td.data.action) {
          const vd = td.data.config,
            od = td.data.imageData,
            Nd = new BASIS.BasisFile(od),
            qd = function(dd) {
              const Od = dd.getHasAlpha(),
                md = dd.getNumImages(),
                Wd = [];
              for (let Fd = 0; Fd < md; Fd++) {
                const Od = {
                    levels: []
                  },
                  md = dd.getNumLevels(Fd);
                for (let Wd = 0; Wd < md; Wd++) {
                  const md = {
                    width: dd.getImageWidth(Fd, Wd),
                    height: dd.getImageHeight(Fd, Wd)
                  };
                  Od.levels.push(md)
                }
                Wd.push(Od)
              }
              return {
                hasAlpha: Od,
                images: Wd
              }
            }(Nd);
          let Hd = td.data.ignoreSupportedFormats ? null : function(vd, Qd) {
              let td = null;
              vd.supportedCompressionFormats && (td = vd.supportedCompressionFormats.astc ? Kd : vd.supportedCompressionFormats.bc7 ? Fd : vd.supportedCompressionFormats.s3tc ? Qd.hasAlpha ? Wd : md : vd.supportedCompressionFormats.pvrtc ? Qd.hasAlpha ? Xd : Rd : vd.supportedCompressionFormats.etc2 ? Od : vd.supportedCompressionFormats.etc1 ? dd : hd);
              return td
            }(td.data.config, qd),
            yd = !1;
          null === Hd && (yd = !0, Hd = qd.hasAlpha ? Wd : md);
          let bd = !0;
          Nd.startTranscoding() || (bd = !1);
          const Td = [];
          for (let dd = 0; dd < qd.images.length && bd; dd++) {
            const Od = qd.images[dd];
            if (void 0 === vd.loadSingleImage || vd.loadSingleImage === dd) {
              let md = Od.levels.length;
              !1 === vd.loadMipmapLevels && (md = 1);
              for (let Wd = 0; Wd < md; Wd++) {
                const md = Od.levels[Wd],
                  Fd = Qd(Nd, dd, Wd, Hd, yd);
                if (!Fd) {
                  bd = !1;
                  break
                }
                md.transcodedPixels = Fd, Td.push(md.transcodedPixels.buffer)
              }
            }
          }
          Nd.close(), Nd.delete(), yd && (Hd = -1), bd ? postMessage({
            action: "transcode",
            success: bd,
            id: td.data.id,
            fileInfo: qd,
            format: Hd
          }, Td) : postMessage({
            action: "transcode",
            success: bd,
            id: td.data.id
          })
        }
      }
    }! function(dd) {
      dd[dd.cTFETC1 = 0] = "cTFETC1", dd[dd.cTFETC2 = 1] = "cTFETC2", dd[dd.cTFBC1 = 2] = "cTFBC1", dd[dd.cTFBC3 = 3] = "cTFBC3", dd[dd.cTFBC4 = 4] = "cTFBC4", dd[dd.cTFBC5 = 5] = "cTFBC5", dd[dd.cTFBC7 = 6] = "cTFBC7", dd[dd.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", dd[dd.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", dd[dd.cTFASTC_4x4 = 10] = "cTFASTC_4x4", dd[dd.cTFATC_RGB = 11] = "cTFATC_RGB", dd[dd.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", dd[dd.cTFRGBA32 = 13] = "cTFRGBA32", dd[dd.cTFRGB565 = 14] = "cTFRGB565", dd[dd.cTFBGR565 = 15] = "cTFBGR565", dd[dd.cTFRGBA4444 = 16] = "cTFRGBA4444", dd[dd.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", dd[dd.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", dd[dd.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", dd[dd.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", dd[dd.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Wd || (Wd = {}));
    const vd = {
      JSModuleURL: `${Fd.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Fd.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Qd = null,
      td = null,
      od = 0;
    const Nd = async () => (Qd || (Qd = new Promise(((dd, Od) => {
      td ? dd(td) : Fd.g.LoadFileAsync(Fd.g.GetBabylonScriptURL(vd.WasmModuleURL)).then((md => {
        if ("function" !== typeof URL) return Od("Basis transcoder requires an environment with a URL constructor");
        const Wd = URL.createObjectURL(new Blob([`(${hd})()`], {
          type: "application/javascript"
        }));
        td = new Worker(Wd), async function(dd, Od, md) {
          return await new Promise(((Wd, Rd) => {
            const Xd = Od => {
              "init" === Od.data.action ? (dd.removeEventListener("message", Xd), Wd(dd)) : "error" === Od.data.action && Rd(Od.data.error || "error initializing worker")
            };
            dd.addEventListener("message", Xd), dd.postMessage({
              action: "init",
              url: md ? Fd.g.GetBabylonScriptURL(md) : void 0,
              wasmBinary: Od
            }, [Od])
          }))
        }(td, md, vd.JSModuleURL).then(dd, Od)
      })).catch(Od)
    }))), await Qd), qd = async (dd, Od) => {
      const md = dd instanceof ArrayBuffer ? new Uint8Array(dd) : dd;
      return await new Promise(((dd, Wd) => {
        Nd().then((() => {
          const Fd = od++,
            Rd = Od => {
              "transcode" === Od.data.action && Od.data.id === Fd && (td.removeEventListener("message", Rd), Od.data.success ? dd(Od.data) : Wd("Transcode is not supported on this device"))
            };
          td.addEventListener("message", Rd);
          const Xd = new Uint8Array(md.byteLength);
          Xd.set(new Uint8Array(md.buffer, md.byteOffset, md.byteLength)), td.postMessage({
            action: "transcode",
            id: Fd,
            imageData: Xd,
            config: Od,
            ignoreSupportedFormats: false
          }, [Xd.buffer])
        }), (dd => {
          Wd(dd)
        }))
      }))
    }, Hd = (dd, Od) => {
      let md = Od._gl?.TEXTURE_2D;
      dd.isCube && (md = Od._gl?.TEXTURE_CUBE_MAP), Od._bindTextureDirectly(md, dd, !0)
    }, yd = (dd, Od) => {
      const md = dd.Iq();
      for (let Fd = 0; Fd < Od.fileInfo.images.length; Fd++) {
        const hd = Od.fileInfo.images[Fd].levels[0];
        if (dd._invertVScale = dd.invertY, -1 === Od.format || Od.format === Wd.cTFRGB565)
          if (dd.type = 10, dd.format = 4, !md._features.basisNeedsPOT || Math.log2(hd.width) % 1 === 0 && Math.log2(hd.height) % 1 === 0) dd._invertVScale = !dd.invertY, dd.width = hd.width + 3 & -4, dd.height = hd.height + 3 & -4, dd.samplingMode = 2, Hd(dd, md), md._uploadDataToTextureDirectly(dd, new Uint16Array(hd.transcodedPixels.buffer), Fd, 0, 4, !0);
          else {
            const Od = new Kd.c(md, 2);
            dd._invertVScale = dd.invertY, Od.type = 10, Od.format = 4, Od.width = hd.width + 3 & -4, Od.height = hd.height + 3 & -4, Hd(Od, md), md._uploadDataToTextureDirectly(Od, new Uint16Array(hd.transcodedPixels.buffer), Fd, 0, 4, !0), md._rescaleTexture(Od, dd, md.scenes[0], md._getInternalFormat(4), (() => {
              md._releaseTexture(Od), Hd(dd, md)
            }))
          }
        else {
          dd.width = hd.width, dd.height = hd.height, dd.generateMipMaps = Od.fileInfo.images[Fd].levels.length > 1;
          const Wd = bd.GetInternalFormatFromBasisFormat(Od.format, md);
          dd.format = Wd, Hd(dd, md);
          const Kd = Od.fileInfo.images[Fd].levels;
          for (let Od = 0; Od < Kd.length; Od++) {
            const Rd = Kd[Od];
            md._uploadCompressedDataToTextureDirectly(dd, Wd, Rd.width, Rd.height, Rd.transcodedPixels, Fd, Od)
          }!md._features.basisNeedsPOT || Math.log2(dd.width) % 1 === 0 && Math.log2(dd.height) % 1 === 0 || (Rd.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), dd._cachedWrapU = Xd.f.CLAMP_ADDRESSMODE, dd._cachedWrapV = Xd.f.CLAMP_ADDRESSMODE)
        }
      }
    }, bd = {
      JSModuleURL: vd.JSModuleURL,
      WasmModuleURL: vd.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (dd, Od) => {
        let md;
        switch (dd) {
          case Wd.cTFETC1:
            md = 36196;
            break;
          case Wd.cTFBC1:
            md = 33776;
            break;
          case Wd.cTFBC4:
            md = 33779;
            break;
          case Wd.cTFASTC_4x4:
            md = 37808;
            break;
          case Wd.cTFETC2:
            md = 37496;
            break;
          case Wd.cTFBC7:
            md = 36492
        }
        if (void 0 === md) throw "The chosen Basis transcoder format is not currently supported";
        return md
      },
      TranscodeAsync: qd,
      LoadTextureFromTranscodeResult: yd
    };
    class Td {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(dd, Od, md, Wd, Rd) {
        if (Array.isArray(dd)) return;
        const Xd = Od.Iq().getCaps(),
          Kd = {
            supportedCompressionFormats: {
              etc1: !!Xd.etc1,
              s3tc: !!Xd.s3tc,
              pvrtc: !!Xd.pvrtc,
              etc2: !!Xd.etc2,
              astc: !!Xd.astc,
              bc7: !!Xd.bptc
            }
          };
        qd(dd, Kd).then((dd => {
          const md = dd.fileInfo.images[0].levels.length > 1 && Od.generateMipMaps;
          yd(Od, dd), Od.Iq()._setCubeMapTextureParams(Od, md), Od.isReady = !0, Od.onLoadedObservable.notifyObservers(Od), Od.onLoadedObservable.clear(), Wd && Wd()
        })).catch((dd => {
          Fd.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Od.isReady = !0, Rd && Rd(dd)
        }))
      }
      loadData(dd, Od, md) {
        const Wd = Od.Iq().getCaps(),
          Rd = {
            supportedCompressionFormats: {
              etc1: !!Wd.etc1,
              s3tc: !!Wd.s3tc,
              pvrtc: !!Wd.pvrtc,
              etc2: !!Wd.etc2,
              astc: !!Wd.astc,
              bc7: !!Wd.bptc
            }
          };
        qd(dd, Rd).then((dd => {
          const Wd = dd.fileInfo.images[0].levels[0],
            Fd = dd.fileInfo.images[0].levels.length > 1 && Od.generateMipMaps;
          md(Wd.width, Wd.height, Fd, -1 !== dd.format, (() => {
            yd(Od, dd)
          }))
        })).catch((dd => {
          Fd.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Fd.g.Warn(`Failed to transcode Basis file: ${dd}`), md(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);