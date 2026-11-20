export const id = 300;
export const ids = [300];
export const modules = {
  40894: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      _BasisTextureLoader: () => Zb
    });
    var Ab, Mb = Ub(39195),
      Tb = Ub(37989),
      Eb = Ub(39605),
      Yb = Ub(38915);

    function Bb() {
      const bb = 0,
        ab = 1,
        Ub = 2,
        Ab = 3,
        Mb = 6,
        Tb = 8,
        Eb = 9,
        Yb = 10,
        Bb = 14;
      let eb = null;

      function vb(bb, ab, Ub, Ab, Mb) {
        const Tb = bb.getImageTranscodedSizeInBytes(ab, Ub, Ab);
        let Eb = new Uint8Array(Tb);
        if (!bb.transcodeImage(Eb, ab, Ub, Ab, 1, 0)) return null;
        if (Mb) {
          Eb = function(bb, ab, Ub, Ab) {
            const Mb = new Uint16Array(4),
              Tb = new Uint16Array(Ub * Ab),
              Eb = Ub / 4,
              Yb = Ab / 4;
            for (let Bb = 0; Bb < Yb; Bb++)
              for (let Ab = 0; Ab < Eb; Ab++) {
                const Yb = ab + 8 * (Bb * Eb + Ab);
                Mb[0] = bb[Yb] | bb[Yb + 1] << 8, Mb[1] = bb[Yb + 2] | bb[Yb + 3] << 8, Mb[2] = (2 * (31 & Mb[0]) + 1 * (31 & Mb[1])) / 3 | (2 * (2016 & Mb[0]) + 1 * (2016 & Mb[1])) / 3 & 2016 | (2 * (63488 & Mb[0]) + 1 * (63488 & Mb[1])) / 3 & 63488, Mb[3] = (2 * (31 & Mb[1]) + 1 * (31 & Mb[0])) / 3 | (2 * (2016 & Mb[1]) + 1 * (2016 & Mb[0])) / 3 & 2016 | (2 * (63488 & Mb[1]) + 1 * (63488 & Mb[0])) / 3 & 63488;
                for (let ab = 0; ab < 4; ab++) {
                  const Eb = bb[Yb + 4 + ab];
                  let eb = (4 * Bb + ab) * Ub + 4 * Ab;
                  Tb[eb++] = Mb[3 & Eb], Tb[eb++] = Mb[Eb >> 2 & 3], Tb[eb++] = Mb[Eb >> 4 & 3], Tb[eb] = Mb[Eb >> 6 & 3]
                }
              }
            return Tb
          }(Eb, 0, bb.getImageWidth(ab, Ub) + 3 & -4, bb.getImageHeight(ab, Ub) + 3 & -4)
        }
        return Eb
      }
      onmessage = Lb => {
        if ("init" === Lb.data.action) {
          if (Lb.data.url) try {
            importScripts(Lb.data.url)
          } catch (Pb) {
            postMessage({
              action: "error",
              error: Pb
            })
          }
          eb || (eb = BASIS({
            wasmBinary: Lb.data.wasmBinary
          })), null !== eb && eb.then((bb => {
            BASIS = bb, bb.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Lb.data.action) {
          const eb = Lb.data.config,
            Pb = Lb.data.imageData,
            Xb = new BASIS.BasisFile(Pb),
            jb = function(bb) {
              const ab = bb.getHasAlpha(),
                Ub = bb.getNumImages(),
                Ab = [];
              for (let Mb = 0; Mb < Ub; Mb++) {
                const ab = {
                    levels: []
                  },
                  Ub = bb.getNumLevels(Mb);
                for (let Ab = 0; Ab < Ub; Ab++) {
                  const Ub = {
                    width: bb.getImageWidth(Mb, Ab),
                    height: bb.getImageHeight(Mb, Ab)
                  };
                  ab.levels.push(Ub)
                }
                Ab.push(ab)
              }
              return {
                hasAlpha: ab,
                images: Ab
              }
            }(Xb);
          let Rb = Lb.data.ignoreSupportedFormats ? null : function(eb, vb) {
              let Lb = null;
              eb.supportedCompressionFormats && (Lb = eb.supportedCompressionFormats.astc ? Yb : eb.supportedCompressionFormats.bc7 ? Mb : eb.supportedCompressionFormats.s3tc ? vb.hasAlpha ? Ab : Ub : eb.supportedCompressionFormats.pvrtc ? vb.hasAlpha ? Eb : Tb : eb.supportedCompressionFormats.etc2 ? ab : eb.supportedCompressionFormats.etc1 ? bb : Bb);
              return Lb
            }(Lb.data.config, jb),
            kb = !1;
          null === Rb && (kb = !0, Rb = jb.hasAlpha ? Ab : Ub);
          let yb = !0;
          Xb.startTranscoding() || (yb = !1);
          const Zb = [];
          for (let bb = 0; bb < jb.images.length && yb; bb++) {
            const ab = jb.images[bb];
            if (void 0 === eb.loadSingleImage || eb.loadSingleImage === bb) {
              let Ub = ab.levels.length;
              !1 === eb.loadMipmapLevels && (Ub = 1);
              for (let Ab = 0; Ab < Ub; Ab++) {
                const Ub = ab.levels[Ab],
                  Mb = vb(Xb, bb, Ab, Rb, kb);
                if (!Mb) {
                  yb = !1;
                  break
                }
                Ub.transcodedPixels = Mb, Zb.push(Ub.transcodedPixels.buffer)
              }
            }
          }
          Xb.close(), Xb.delete(), kb && (Rb = -1), yb ? postMessage({
            action: "transcode",
            success: yb,
            id: Lb.data.id,
            fileInfo: jb,
            format: Rb
          }, Zb) : postMessage({
            action: "transcode",
            success: yb,
            id: Lb.data.id
          })
        }
      }
    }! function(bb) {
      bb[bb.cTFETC1 = 0] = "cTFETC1", bb[bb.cTFETC2 = 1] = "cTFETC2", bb[bb.cTFBC1 = 2] = "cTFBC1", bb[bb.cTFBC3 = 3] = "cTFBC3", bb[bb.cTFBC4 = 4] = "cTFBC4", bb[bb.cTFBC5 = 5] = "cTFBC5", bb[bb.cTFBC7 = 6] = "cTFBC7", bb[bb.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", bb[bb.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", bb[bb.cTFASTC_4x4 = 10] = "cTFASTC_4x4", bb[bb.cTFATC_RGB = 11] = "cTFATC_RGB", bb[bb.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", bb[bb.cTFRGBA32 = 13] = "cTFRGBA32", bb[bb.cTFRGB565 = 14] = "cTFRGB565", bb[bb.cTFBGR565 = 15] = "cTFBGR565", bb[bb.cTFRGBA4444 = 16] = "cTFRGBA4444", bb[bb.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", bb[bb.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", bb[bb.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", bb[bb.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", bb[bb.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Ab || (Ab = {}));
    const eb = {
      JSModuleURL: `${Mb.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Mb.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let vb = null,
      Lb = null,
      Pb = 0;
    const Xb = async () => (vb || (vb = new Promise(((bb, ab) => {
      Lb ? bb(Lb) : Mb.h.LoadFileAsync(Mb.h.GetBabylonScriptURL(eb.WasmModuleURL)).then((Ub => {
        if ("function" !== typeof URL) return ab("Basis transcoder requires an environment with a URL constructor");
        const Ab = URL.createObjectURL(new Blob([`(${Bb})()`], {
          type: "application/javascript"
        }));
        Lb = new Worker(Ab), async function(bb, ab, Ub) {
          return await new Promise(((Ab, Tb) => {
            const Eb = ab => {
              "init" === ab.data.action ? (bb.removeEventListener("message", Eb), Ab(bb)) : "error" === ab.data.action && Tb(ab.data.error || "error initializing worker")
            };
            bb.addEventListener("message", Eb), bb.postMessage({
              action: "init",
              url: Ub ? Mb.h.GetBabylonScriptURL(Ub) : void 0,
              wasmBinary: ab
            }, [ab])
          }))
        }(Lb, Ub, eb.JSModuleURL).then(bb, ab)
      })).catch(ab)
    }))), await vb), jb = async (bb, ab) => {
      const Ub = bb instanceof ArrayBuffer ? new Uint8Array(bb) : bb;
      return await new Promise(((bb, Ab) => {
        Xb().then((() => {
          const Mb = Pb++,
            Tb = ab => {
              "transcode" === ab.data.action && ab.data.id === Mb && (Lb.removeEventListener("message", Tb), ab.data.success ? bb(ab.data) : Ab("Transcode is not supported on this device"))
            };
          Lb.addEventListener("message", Tb);
          const Eb = new Uint8Array(Ub.byteLength);
          Eb.set(new Uint8Array(Ub.buffer, Ub.byteOffset, Ub.byteLength)), Lb.postMessage({
            action: "transcode",
            id: Mb,
            imageData: Eb,
            config: ab,
            ignoreSupportedFormats: false
          }, [Eb.buffer])
        }), (bb => {
          Ab(bb)
        }))
      }))
    }, Rb = (bb, ab) => {
      let Ub = ab._gl?.TEXTURE_2D;
      bb.isCube && (Ub = ab._gl?.TEXTURE_CUBE_MAP), ab._bindTextureDirectly(Ub, bb, !0)
    }, kb = (bb, ab) => {
      const Ub = bb.vj();
      for (let Mb = 0; Mb < ab.fileInfo.images.length; Mb++) {
        const Bb = ab.fileInfo.images[Mb].levels[0];
        if (bb._invertVScale = bb.invertY, -1 === ab.format || ab.format === Ab.cTFRGB565)
          if (bb.type = 10, bb.format = 4, !Ub._features.basisNeedsPOT || Math.log2(Bb.width) % 1 === 0 && Math.log2(Bb.height) % 1 === 0) bb._invertVScale = !bb.invertY, bb.width = Bb.width + 3 & -4, bb.height = Bb.height + 3 & -4, bb.samplingMode = 2, Rb(bb, Ub), Ub._uploadDataToTextureDirectly(bb, new Uint16Array(Bb.transcodedPixels.buffer), Mb, 0, 4, !0);
          else {
            const ab = new Yb.b(Ub, 2);
            bb._invertVScale = bb.invertY, ab.type = 10, ab.format = 4, ab.width = Bb.width + 3 & -4, ab.height = Bb.height + 3 & -4, Rb(ab, Ub), Ub._uploadDataToTextureDirectly(ab, new Uint16Array(Bb.transcodedPixels.buffer), Mb, 0, 4, !0), Ub._rescaleTexture(ab, bb, Ub.scenes[0], Ub._getInternalFormat(4), (() => {
              Ub._releaseTexture(ab), Rb(bb, Ub)
            }))
          }
        else {
          bb.width = Bb.width, bb.height = Bb.height, bb.generateMipMaps = ab.fileInfo.images[Mb].levels.length > 1;
          const Ab = yb.GetInternalFormatFromBasisFormat(ab.format, Ub);
          bb.format = Ab, Rb(bb, Ub);
          const Yb = ab.fileInfo.images[Mb].levels;
          for (let ab = 0; ab < Yb.length; ab++) {
            const Tb = Yb[ab];
            Ub._uploadCompressedDataToTextureDirectly(bb, Ab, Tb.width, Tb.height, Tb.transcodedPixels, Mb, ab)
          }!Ub._features.basisNeedsPOT || Math.log2(bb.width) % 1 === 0 && Math.log2(bb.height) % 1 === 0 || (Tb.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), bb._cachedWrapU = Eb.e.CLAMP_ADDRESSMODE, bb._cachedWrapV = Eb.e.CLAMP_ADDRESSMODE)
        }
      }
    }, yb = {
      JSModuleURL: eb.JSModuleURL,
      WasmModuleURL: eb.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (bb, ab) => {
        let Ub;
        switch (bb) {
          case Ab.cTFETC1:
            Ub = 36196;
            break;
          case Ab.cTFBC1:
            Ub = 33776;
            break;
          case Ab.cTFBC4:
            Ub = 33779;
            break;
          case Ab.cTFASTC_4x4:
            Ub = 37808;
            break;
          case Ab.cTFETC2:
            Ub = 37496;
            break;
          case Ab.cTFBC7:
            Ub = 36492
        }
        if (void 0 === Ub) throw "The chosen Basis transcoder format is not currently supported";
        return Ub
      },
      TranscodeAsync: jb,
      LoadTextureFromTranscodeResult: kb
    };
    class Zb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, ab, Ub, Ab, Tb) {
        if (Array.isArray(bb)) return;
        const Eb = ab.vj().getCaps(),
          Yb = {
            supportedCompressionFormats: {
              etc1: !!Eb.etc1,
              s3tc: !!Eb.s3tc,
              pvrtc: !!Eb.pvrtc,
              etc2: !!Eb.etc2,
              astc: !!Eb.astc,
              bc7: !!Eb.bptc
            }
          };
        jb(bb, Yb).then((bb => {
          const Ub = bb.fileInfo.images[0].levels.length > 1 && ab.generateMipMaps;
          kb(ab, bb), ab.vj()._setCubeMapTextureParams(ab, Ub), ab.isReady = !0, ab.onLoadedObservable.notifyObservers(ab), ab.onLoadedObservable.clear(), Ab && Ab()
        })).catch((bb => {
          Mb.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), ab.isReady = !0, Tb && Tb(bb)
        }))
      }
      loadData(bb, ab, Ub) {
        const Ab = ab.vj().getCaps(),
          Tb = {
            supportedCompressionFormats: {
              etc1: !!Ab.etc1,
              s3tc: !!Ab.s3tc,
              pvrtc: !!Ab.pvrtc,
              etc2: !!Ab.etc2,
              astc: !!Ab.astc,
              bc7: !!Ab.bptc
            }
          };
        jb(bb, Tb).then((bb => {
          const Ab = bb.fileInfo.images[0].levels[0],
            Mb = bb.fileInfo.images[0].levels.length > 1 && ab.generateMipMaps;
          Ub(Ab.width, Ab.height, Mb, -1 !== bb.format, (() => {
            kb(ab, bb)
          }))
        })).catch((bb => {
          Mb.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Mb.h.Warn(`Failed to transcode Basis file: ${bb}`), Ub(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);