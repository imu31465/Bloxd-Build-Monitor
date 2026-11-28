export const id = 629;
export const ids = [629];
export const modules = {
  54007: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      _BasisTextureLoader: () => sb
    });
    var eb, Hb = Mb(41771),
      pb = Mb(39971),
      Vb = Mb(42152),
      gb = Mb(41506);

    function lb() {
      const bb = 0,
        wb = 1,
        Mb = 2,
        eb = 3,
        Hb = 6,
        pb = 8,
        Vb = 9,
        gb = 10,
        lb = 14;
      let Lb = null;

      function Ib(bb, wb, Mb, eb, Hb) {
        const pb = bb.getImageTranscodedSizeInBytes(wb, Mb, eb);
        let Vb = new Uint8Array(pb);
        if (!bb.transcodeImage(Vb, wb, Mb, eb, 1, 0)) return null;
        if (Hb) {
          Vb = function(bb, wb, Mb, eb) {
            const Hb = new Uint16Array(4),
              pb = new Uint16Array(Mb * eb),
              Vb = Mb / 4,
              gb = eb / 4;
            for (let lb = 0; lb < gb; lb++)
              for (let eb = 0; eb < Vb; eb++) {
                const gb = wb + 8 * (lb * Vb + eb);
                Hb[0] = bb[gb] | bb[gb + 1] << 8, Hb[1] = bb[gb + 2] | bb[gb + 3] << 8, Hb[2] = (2 * (31 & Hb[0]) + 1 * (31 & Hb[1])) / 3 | (2 * (2016 & Hb[0]) + 1 * (2016 & Hb[1])) / 3 & 2016 | (2 * (63488 & Hb[0]) + 1 * (63488 & Hb[1])) / 3 & 63488, Hb[3] = (2 * (31 & Hb[1]) + 1 * (31 & Hb[0])) / 3 | (2 * (2016 & Hb[1]) + 1 * (2016 & Hb[0])) / 3 & 2016 | (2 * (63488 & Hb[1]) + 1 * (63488 & Hb[0])) / 3 & 63488;
                for (let wb = 0; wb < 4; wb++) {
                  const Vb = bb[gb + 4 + wb];
                  let Lb = (4 * lb + wb) * Mb + 4 * eb;
                  pb[Lb++] = Hb[3 & Vb], pb[Lb++] = Hb[Vb >> 2 & 3], pb[Lb++] = Hb[Vb >> 4 & 3], pb[Lb] = Hb[Vb >> 6 & 3]
                }
              }
            return pb
          }(Vb, 0, bb.getImageWidth(wb, Mb) + 3 & -4, bb.getImageHeight(wb, Mb) + 3 & -4)
        }
        return Vb
      }
      onmessage = Ob => {
        if ("init" === Ob.data.action) {
          if (Ob.data.url) try {
            importScripts(Ob.data.url)
          } catch (Ub) {
            postMessage({
              action: "error",
              error: Ub
            })
          }
          Lb || (Lb = BASIS({
            wasmBinary: Ob.data.wasmBinary
          })), null !== Lb && Lb.then((bb => {
            BASIS = bb, bb.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Ob.data.action) {
          const Lb = Ob.data.config,
            Ub = Ob.data.imageData,
            tb = new BASIS.BasisFile(Ub),
            Cb = function(bb) {
              const wb = bb.getHasAlpha(),
                Mb = bb.getNumImages(),
                eb = [];
              for (let Hb = 0; Hb < Mb; Hb++) {
                const wb = {
                    levels: []
                  },
                  Mb = bb.getNumLevels(Hb);
                for (let eb = 0; eb < Mb; eb++) {
                  const Mb = {
                    width: bb.getImageWidth(Hb, eb),
                    height: bb.getImageHeight(Hb, eb)
                  };
                  wb.levels.push(Mb)
                }
                eb.push(wb)
              }
              return {
                hasAlpha: wb,
                images: eb
              }
            }(tb);
          let Eb = Ob.data.ignoreSupportedFormats ? null : function(Lb, Ib) {
              let Ob = null;
              Lb.supportedCompressionFormats && (Ob = Lb.supportedCompressionFormats.astc ? gb : Lb.supportedCompressionFormats.bc7 ? Hb : Lb.supportedCompressionFormats.s3tc ? Ib.hasAlpha ? eb : Mb : Lb.supportedCompressionFormats.pvrtc ? Ib.hasAlpha ? Vb : pb : Lb.supportedCompressionFormats.etc2 ? wb : Lb.supportedCompressionFormats.etc1 ? bb : lb);
              return Ob
            }(Ob.data.config, Cb),
            Fb = !1;
          null === Eb && (Fb = !0, Eb = Cb.hasAlpha ? eb : Mb);
          let Bb = !0;
          tb.startTranscoding() || (Bb = !1);
          const sb = [];
          for (let bb = 0; bb < Cb.images.length && Bb; bb++) {
            const wb = Cb.images[bb];
            if (void 0 === Lb.loadSingleImage || Lb.loadSingleImage === bb) {
              let Mb = wb.levels.length;
              !1 === Lb.loadMipmapLevels && (Mb = 1);
              for (let eb = 0; eb < Mb; eb++) {
                const Mb = wb.levels[eb],
                  Hb = Ib(tb, bb, eb, Eb, Fb);
                if (!Hb) {
                  Bb = !1;
                  break
                }
                Mb.transcodedPixels = Hb, sb.push(Mb.transcodedPixels.buffer)
              }
            }
          }
          tb.close(), tb.delete(), Fb && (Eb = -1), Bb ? postMessage({
            action: "transcode",
            success: Bb,
            id: Ob.data.id,
            fileInfo: Cb,
            format: Eb
          }, sb) : postMessage({
            action: "transcode",
            success: Bb,
            id: Ob.data.id
          })
        }
      }
    }! function(bb) {
      bb[bb.cTFETC1 = 0] = "cTFETC1", bb[bb.cTFETC2 = 1] = "cTFETC2", bb[bb.cTFBC1 = 2] = "cTFBC1", bb[bb.cTFBC3 = 3] = "cTFBC3", bb[bb.cTFBC4 = 4] = "cTFBC4", bb[bb.cTFBC5 = 5] = "cTFBC5", bb[bb.cTFBC7 = 6] = "cTFBC7", bb[bb.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", bb[bb.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", bb[bb.cTFASTC_4x4 = 10] = "cTFASTC_4x4", bb[bb.cTFATC_RGB = 11] = "cTFATC_RGB", bb[bb.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", bb[bb.cTFRGBA32 = 13] = "cTFRGBA32", bb[bb.cTFRGB565 = 14] = "cTFRGB565", bb[bb.cTFBGR565 = 15] = "cTFBGR565", bb[bb.cTFRGBA4444 = 16] = "cTFRGBA4444", bb[bb.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", bb[bb.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", bb[bb.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", bb[bb.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", bb[bb.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(eb || (eb = {}));
    const Lb = {
      JSModuleURL: `${Hb.e._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Hb.e._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Ib = null,
      Ob = null,
      Ub = 0;
    const tb = async () => (Ib || (Ib = new Promise(((bb, wb) => {
      Ob ? bb(Ob) : Hb.e.LoadFileAsync(Hb.e.GetBabylonScriptURL(Lb.WasmModuleURL)).then((Mb => {
        if ("function" !== typeof URL) return wb("Basis transcoder requires an environment with a URL constructor");
        const eb = URL.createObjectURL(new Blob([`(${lb})()`], {
          type: "application/javascript"
        }));
        Ob = new Worker(eb), async function(bb, wb, Mb) {
          return await new Promise(((eb, pb) => {
            const Vb = wb => {
              "init" === wb.data.action ? (bb.removeEventListener("message", Vb), eb(bb)) : "error" === wb.data.action && pb(wb.data.error || "error initializing worker")
            };
            bb.addEventListener("message", Vb), bb.postMessage({
              action: "init",
              url: Mb ? Hb.e.GetBabylonScriptURL(Mb) : void 0,
              wasmBinary: wb
            }, [wb])
          }))
        }(Ob, Mb, Lb.JSModuleURL).then(bb, wb)
      })).catch(wb)
    }))), await Ib), Cb = async (bb, wb) => {
      const Mb = bb instanceof ArrayBuffer ? new Uint8Array(bb) : bb;
      return await new Promise(((bb, eb) => {
        tb().then((() => {
          const Hb = Ub++,
            pb = wb => {
              "transcode" === wb.data.action && wb.data.id === Hb && (Ob.removeEventListener("message", pb), wb.data.success ? bb(wb.data) : eb("Transcode is not supported on this device"))
            };
          Ob.addEventListener("message", pb);
          const Vb = new Uint8Array(Mb.byteLength);
          Vb.set(new Uint8Array(Mb.buffer, Mb.byteOffset, Mb.byteLength)), Ob.postMessage({
            action: "transcode",
            id: Hb,
            imageData: Vb,
            config: wb,
            ignoreSupportedFormats: false
          }, [Vb.buffer])
        }), (bb => {
          eb(bb)
        }))
      }))
    }, Eb = (bb, wb) => {
      let Mb = wb._gl?.TEXTURE_2D;
      bb.isCube && (Mb = wb._gl?.TEXTURE_CUBE_MAP), wb._bindTextureDirectly(Mb, bb, !0)
    }, Fb = (bb, wb) => {
      const Mb = bb.DC();
      for (let Hb = 0; Hb < wb.fileInfo.images.length; Hb++) {
        const lb = wb.fileInfo.images[Hb].levels[0];
        if (bb._invertVScale = bb.invertY, -1 === wb.format || wb.format === eb.cTFRGB565)
          if (bb.type = 10, bb.format = 4, !Mb._features.basisNeedsPOT || Math.log2(lb.width) % 1 === 0 && Math.log2(lb.height) % 1 === 0) bb._invertVScale = !bb.invertY, bb.width = lb.width + 3 & -4, bb.height = lb.height + 3 & -4, bb.samplingMode = 2, Eb(bb, Mb), Mb._uploadDataToTextureDirectly(bb, new Uint16Array(lb.transcodedPixels.buffer), Hb, 0, 4, !0);
          else {
            const wb = new gb.e(Mb, 2);
            bb._invertVScale = bb.invertY, wb.type = 10, wb.format = 4, wb.width = lb.width + 3 & -4, wb.height = lb.height + 3 & -4, Eb(wb, Mb), Mb._uploadDataToTextureDirectly(wb, new Uint16Array(lb.transcodedPixels.buffer), Hb, 0, 4, !0), Mb._rescaleTexture(wb, bb, Mb.scenes[0], Mb._getInternalFormat(4), (() => {
              Mb._releaseTexture(wb), Eb(bb, Mb)
            }))
          }
        else {
          bb.width = lb.width, bb.height = lb.height, bb.generateMipMaps = wb.fileInfo.images[Hb].levels.length > 1;
          const eb = Bb.GetInternalFormatFromBasisFormat(wb.format, Mb);
          bb.format = eb, Eb(bb, Mb);
          const gb = wb.fileInfo.images[Hb].levels;
          for (let wb = 0; wb < gb.length; wb++) {
            const pb = gb[wb];
            Mb._uploadCompressedDataToTextureDirectly(bb, eb, pb.width, pb.height, pb.transcodedPixels, Hb, wb)
          }!Mb._features.basisNeedsPOT || Math.log2(bb.width) % 1 === 0 && Math.log2(bb.height) % 1 === 0 || (pb.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), bb._cachedWrapU = Vb.f.CLAMP_ADDRESSMODE, bb._cachedWrapV = Vb.f.CLAMP_ADDRESSMODE)
        }
      }
    }, Bb = {
      JSModuleURL: Lb.JSModuleURL,
      WasmModuleURL: Lb.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (bb, wb) => {
        let Mb;
        switch (bb) {
          case eb.cTFETC1:
            Mb = 36196;
            break;
          case eb.cTFBC1:
            Mb = 33776;
            break;
          case eb.cTFBC4:
            Mb = 33779;
            break;
          case eb.cTFASTC_4x4:
            Mb = 37808;
            break;
          case eb.cTFETC2:
            Mb = 37496;
            break;
          case eb.cTFBC7:
            Mb = 36492
        }
        if (void 0 === Mb) throw "The chosen Basis transcoder format is not currently supported";
        return Mb
      },
      TranscodeAsync: Cb,
      LoadTextureFromTranscodeResult: Fb
    };
    class sb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, wb, Mb, eb, pb) {
        if (Array.isArray(bb)) return;
        const Vb = wb.DC().getCaps(),
          gb = {
            supportedCompressionFormats: {
              etc1: !!Vb.etc1,
              s3tc: !!Vb.s3tc,
              pvrtc: !!Vb.pvrtc,
              etc2: !!Vb.etc2,
              astc: !!Vb.astc,
              bc7: !!Vb.bptc
            }
          };
        Cb(bb, gb).then((bb => {
          const Mb = bb.fileInfo.images[0].levels.length > 1 && wb.generateMipMaps;
          Fb(wb, bb), wb.DC()._setCubeMapTextureParams(wb, Mb), wb.isReady = !0, wb.onLoadedObservable.notifyObservers(wb), wb.onLoadedObservable.clear(), eb && eb()
        })).catch((bb => {
          Hb.e.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), wb.isReady = !0, pb && pb(bb)
        }))
      }
      loadData(bb, wb, Mb) {
        const eb = wb.DC().getCaps(),
          pb = {
            supportedCompressionFormats: {
              etc1: !!eb.etc1,
              s3tc: !!eb.s3tc,
              pvrtc: !!eb.pvrtc,
              etc2: !!eb.etc2,
              astc: !!eb.astc,
              bc7: !!eb.bptc
            }
          };
        Cb(bb, pb).then((bb => {
          const eb = bb.fileInfo.images[0].levels[0],
            Hb = bb.fileInfo.images[0].levels.length > 1 && wb.generateMipMaps;
          Mb(eb.width, eb.height, Hb, -1 !== bb.format, (() => {
            Fb(wb, bb)
          }))
        })).catch((bb => {
          Hb.e.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Hb.e.Warn(`Failed to transcode Basis file: ${bb}`), Mb(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);