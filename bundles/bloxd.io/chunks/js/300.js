export const id = 300;
export const ids = [300];
export const modules = {
  41179: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      _BasisTextureLoader: () => Cb
    });
    var kb, Wb = sb(39531),
      ab = sb(38284),
      Tb = sb(39895),
      Ub = sb(39241);

    function Ib() {
      const bb = 0,
        cb = 1,
        sb = 2,
        kb = 3,
        Wb = 6,
        ab = 8,
        Tb = 9,
        Ub = 10,
        Ib = 14;
      let Hb = null;

      function fb(bb, cb, sb, kb, Wb) {
        const ab = bb.getImageTranscodedSizeInBytes(cb, sb, kb);
        let Tb = new Uint8Array(ab);
        if (!bb.transcodeImage(Tb, cb, sb, kb, 1, 0)) return null;
        if (Wb) {
          Tb = function(bb, cb, sb, kb) {
            const Wb = new Uint16Array(4),
              ab = new Uint16Array(sb * kb),
              Tb = sb / 4,
              Ub = kb / 4;
            for (let Ib = 0; Ib < Ub; Ib++)
              for (let kb = 0; kb < Tb; kb++) {
                const Ub = cb + 8 * (Ib * Tb + kb);
                Wb[0] = bb[Ub] | bb[Ub + 1] << 8, Wb[1] = bb[Ub + 2] | bb[Ub + 3] << 8, Wb[2] = (2 * (31 & Wb[0]) + 1 * (31 & Wb[1])) / 3 | (2 * (2016 & Wb[0]) + 1 * (2016 & Wb[1])) / 3 & 2016 | (2 * (63488 & Wb[0]) + 1 * (63488 & Wb[1])) / 3 & 63488, Wb[3] = (2 * (31 & Wb[1]) + 1 * (31 & Wb[0])) / 3 | (2 * (2016 & Wb[1]) + 1 * (2016 & Wb[0])) / 3 & 2016 | (2 * (63488 & Wb[1]) + 1 * (63488 & Wb[0])) / 3 & 63488;
                for (let cb = 0; cb < 4; cb++) {
                  const Tb = bb[Ub + 4 + cb];
                  let Hb = (4 * Ib + cb) * sb + 4 * kb;
                  ab[Hb++] = Wb[3 & Tb], ab[Hb++] = Wb[Tb >> 2 & 3], ab[Hb++] = Wb[Tb >> 4 & 3], ab[Hb] = Wb[Tb >> 6 & 3]
                }
              }
            return ab
          }(Tb, 0, bb.getImageWidth(cb, sb) + 3 & -4, bb.getImageHeight(cb, sb) + 3 & -4)
        }
        return Tb
      }
      onmessage = Mb => {
        if ("init" === Mb.data.action) {
          if (Mb.data.url) try {
            importScripts(Mb.data.url)
          } catch (Xb) {
            postMessage({
              action: "error",
              error: Xb
            })
          }
          Hb || (Hb = BASIS({
            wasmBinary: Mb.data.wasmBinary
          })), null !== Hb && Hb.then((bb => {
            BASIS = bb, bb.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Mb.data.action) {
          const Hb = Mb.data.config,
            Xb = Mb.data.imageData,
            nb = new BASIS.BasisFile(Xb),
            mb = function(bb) {
              const cb = bb.getHasAlpha(),
                sb = bb.getNumImages(),
                kb = [];
              for (let Wb = 0; Wb < sb; Wb++) {
                const cb = {
                    levels: []
                  },
                  sb = bb.getNumLevels(Wb);
                for (let kb = 0; kb < sb; kb++) {
                  const sb = {
                    width: bb.getImageWidth(Wb, kb),
                    height: bb.getImageHeight(Wb, kb)
                  };
                  cb.levels.push(sb)
                }
                kb.push(cb)
              }
              return {
                hasAlpha: cb,
                images: kb
              }
            }(nb);
          let lb = Mb.data.ignoreSupportedFormats ? null : function(Hb, fb) {
              let Mb = null;
              Hb.supportedCompressionFormats && (Mb = Hb.supportedCompressionFormats.astc ? Ub : Hb.supportedCompressionFormats.bc7 ? Wb : Hb.supportedCompressionFormats.s3tc ? fb.hasAlpha ? kb : sb : Hb.supportedCompressionFormats.pvrtc ? fb.hasAlpha ? Tb : ab : Hb.supportedCompressionFormats.etc2 ? cb : Hb.supportedCompressionFormats.etc1 ? bb : Ib);
              return Mb
            }(Mb.data.config, mb),
            Qb = !1;
          null === lb && (Qb = !0, lb = mb.hasAlpha ? kb : sb);
          let eb = !0;
          nb.startTranscoding() || (eb = !1);
          const Cb = [];
          for (let bb = 0; bb < mb.images.length && eb; bb++) {
            const cb = mb.images[bb];
            if (void 0 === Hb.loadSingleImage || Hb.loadSingleImage === bb) {
              let sb = cb.levels.length;
              !1 === Hb.loadMipmapLevels && (sb = 1);
              for (let kb = 0; kb < sb; kb++) {
                const sb = cb.levels[kb],
                  Wb = fb(nb, bb, kb, lb, Qb);
                if (!Wb) {
                  eb = !1;
                  break
                }
                sb.transcodedPixels = Wb, Cb.push(sb.transcodedPixels.buffer)
              }
            }
          }
          nb.close(), nb.delete(), Qb && (lb = -1), eb ? postMessage({
            action: "transcode",
            success: eb,
            id: Mb.data.id,
            fileInfo: mb,
            format: lb
          }, Cb) : postMessage({
            action: "transcode",
            success: eb,
            id: Mb.data.id
          })
        }
      }
    }! function(bb) {
      bb[bb.cTFETC1 = 0] = "cTFETC1", bb[bb.cTFETC2 = 1] = "cTFETC2", bb[bb.cTFBC1 = 2] = "cTFBC1", bb[bb.cTFBC3 = 3] = "cTFBC3", bb[bb.cTFBC4 = 4] = "cTFBC4", bb[bb.cTFBC5 = 5] = "cTFBC5", bb[bb.cTFBC7 = 6] = "cTFBC7", bb[bb.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", bb[bb.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", bb[bb.cTFASTC_4x4 = 10] = "cTFASTC_4x4", bb[bb.cTFATC_RGB = 11] = "cTFATC_RGB", bb[bb.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", bb[bb.cTFRGBA32 = 13] = "cTFRGBA32", bb[bb.cTFRGB565 = 14] = "cTFRGB565", bb[bb.cTFBGR565 = 15] = "cTFBGR565", bb[bb.cTFRGBA4444 = 16] = "cTFRGBA4444", bb[bb.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", bb[bb.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", bb[bb.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", bb[bb.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", bb[bb.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(kb || (kb = {}));
    const Hb = {
      JSModuleURL: `${Wb.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Wb.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let fb = null,
      Mb = null,
      Xb = 0;
    const nb = async () => (fb || (fb = new Promise(((bb, cb) => {
      Mb ? bb(Mb) : Wb.g.LoadFileAsync(Wb.g.GetBabylonScriptURL(Hb.WasmModuleURL)).then((sb => {
        if ("function" !== typeof URL) return cb("Basis transcoder requires an environment with a URL constructor");
        const kb = URL.createObjectURL(new Blob([`(${Ib})()`], {
          type: "application/javascript"
        }));
        Mb = new Worker(kb), async function(bb, cb, sb) {
          return await new Promise(((kb, ab) => {
            const Tb = cb => {
              "init" === cb.data.action ? (bb.removeEventListener("message", Tb), kb(bb)) : "error" === cb.data.action && ab(cb.data.error || "error initializing worker")
            };
            bb.addEventListener("message", Tb), bb.postMessage({
              action: "init",
              url: sb ? Wb.g.GetBabylonScriptURL(sb) : void 0,
              wasmBinary: cb
            }, [cb])
          }))
        }(Mb, sb, Hb.JSModuleURL).then(bb, cb)
      })).catch(cb)
    }))), await fb), mb = async (bb, cb) => {
      const sb = bb instanceof ArrayBuffer ? new Uint8Array(bb) : bb;
      return await new Promise(((bb, kb) => {
        nb().then((() => {
          const Wb = Xb++,
            ab = cb => {
              "transcode" === cb.data.action && cb.data.id === Wb && (Mb.removeEventListener("message", ab), cb.data.success ? bb(cb.data) : kb("Transcode is not supported on this device"))
            };
          Mb.addEventListener("message", ab);
          const Tb = new Uint8Array(sb.byteLength);
          Tb.set(new Uint8Array(sb.buffer, sb.byteOffset, sb.byteLength)), Mb.postMessage({
            action: "transcode",
            id: Wb,
            imageData: Tb,
            config: cb,
            ignoreSupportedFormats: false
          }, [Tb.buffer])
        }), (bb => {
          kb(bb)
        }))
      }))
    }, lb = (bb, cb) => {
      let sb = cb._gl?.TEXTURE_2D;
      bb.isCube && (sb = cb._gl?.TEXTURE_CUBE_MAP), cb._bindTextureDirectly(sb, bb, !0)
    }, Qb = (bb, cb) => {
      const sb = bb.Sm();
      for (let Wb = 0; Wb < cb.fileInfo.images.length; Wb++) {
        const Ib = cb.fileInfo.images[Wb].levels[0];
        if (bb._invertVScale = bb.invertY, -1 === cb.format || cb.format === kb.cTFRGB565)
          if (bb.type = 10, bb.format = 4, !sb._features.basisNeedsPOT || Math.log2(Ib.width) % 1 === 0 && Math.log2(Ib.height) % 1 === 0) bb._invertVScale = !bb.invertY, bb.width = Ib.width + 3 & -4, bb.height = Ib.height + 3 & -4, bb.samplingMode = 2, lb(bb, sb), sb._uploadDataToTextureDirectly(bb, new Uint16Array(Ib.transcodedPixels.buffer), Wb, 0, 4, !0);
          else {
            const cb = new Ub.b(sb, 2);
            bb._invertVScale = bb.invertY, cb.type = 10, cb.format = 4, cb.width = Ib.width + 3 & -4, cb.height = Ib.height + 3 & -4, lb(cb, sb), sb._uploadDataToTextureDirectly(cb, new Uint16Array(Ib.transcodedPixels.buffer), Wb, 0, 4, !0), sb._rescaleTexture(cb, bb, sb.scenes[0], sb._getInternalFormat(4), (() => {
              sb._releaseTexture(cb), lb(bb, sb)
            }))
          }
        else {
          bb.width = Ib.width, bb.height = Ib.height, bb.generateMipMaps = cb.fileInfo.images[Wb].levels.length > 1;
          const kb = eb.GetInternalFormatFromBasisFormat(cb.format, sb);
          bb.format = kb, lb(bb, sb);
          const Ub = cb.fileInfo.images[Wb].levels;
          for (let cb = 0; cb < Ub.length; cb++) {
            const ab = Ub[cb];
            sb._uploadCompressedDataToTextureDirectly(bb, kb, ab.width, ab.height, ab.transcodedPixels, Wb, cb)
          }!sb._features.basisNeedsPOT || Math.log2(bb.width) % 1 === 0 && Math.log2(bb.height) % 1 === 0 || (ab.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), bb._cachedWrapU = Tb.e.CLAMP_ADDRESSMODE, bb._cachedWrapV = Tb.e.CLAMP_ADDRESSMODE)
        }
      }
    }, eb = {
      JSModuleURL: Hb.JSModuleURL,
      WasmModuleURL: Hb.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (bb, cb) => {
        let sb;
        switch (bb) {
          case kb.cTFETC1:
            sb = 36196;
            break;
          case kb.cTFBC1:
            sb = 33776;
            break;
          case kb.cTFBC4:
            sb = 33779;
            break;
          case kb.cTFASTC_4x4:
            sb = 37808;
            break;
          case kb.cTFETC2:
            sb = 37496;
            break;
          case kb.cTFBC7:
            sb = 36492
        }
        if (void 0 === sb) throw "The chosen Basis transcoder format is not currently supported";
        return sb
      },
      TranscodeAsync: mb,
      LoadTextureFromTranscodeResult: Qb
    };
    class Cb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, cb, sb, kb, ab) {
        if (Array.isArray(bb)) return;
        const Tb = cb.Sm().getCaps(),
          Ub = {
            supportedCompressionFormats: {
              etc1: !!Tb.etc1,
              s3tc: !!Tb.s3tc,
              pvrtc: !!Tb.pvrtc,
              etc2: !!Tb.etc2,
              astc: !!Tb.astc,
              bc7: !!Tb.bptc
            }
          };
        mb(bb, Ub).then((bb => {
          const sb = bb.fileInfo.images[0].levels.length > 1 && cb.generateMipMaps;
          Qb(cb, bb), cb.Sm()._setCubeMapTextureParams(cb, sb), cb.isReady = !0, cb.onLoadedObservable.notifyObservers(cb), cb.onLoadedObservable.clear(), kb && kb()
        })).catch((bb => {
          Wb.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), cb.isReady = !0, ab && ab(bb)
        }))
      }
      loadData(bb, cb, sb) {
        const kb = cb.Sm().getCaps(),
          ab = {
            supportedCompressionFormats: {
              etc1: !!kb.etc1,
              s3tc: !!kb.s3tc,
              pvrtc: !!kb.pvrtc,
              etc2: !!kb.etc2,
              astc: !!kb.astc,
              bc7: !!kb.bptc
            }
          };
        mb(bb, ab).then((bb => {
          const kb = bb.fileInfo.images[0].levels[0],
            Wb = bb.fileInfo.images[0].levels.length > 1 && cb.generateMipMaps;
          sb(kb.width, kb.height, Wb, -1 !== bb.format, (() => {
            Qb(cb, bb)
          }))
        })).catch((bb => {
          Wb.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Wb.g.Warn(`Failed to transcode Basis file: ${bb}`), sb(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);