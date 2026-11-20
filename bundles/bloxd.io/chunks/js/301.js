export const id = 301;
export const ids = [301];
export const modules = {
  41236: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      _BasisTextureLoader: () => lb
    });
    var Bb, Ob = hb(39559),
      Gb = hb(38302),
      Ub = hb(39932),
      Lb = hb(39287);

    function Yb() {
      const bb = 0,
        ub = 1,
        hb = 2,
        Bb = 3,
        Ob = 6,
        Gb = 8,
        Ub = 9,
        Lb = 10,
        Yb = 14;
      let Sb = null;

      function ab(bb, ub, hb, Bb, Ob) {
        const Gb = bb.getImageTranscodedSizeInBytes(ub, hb, Bb);
        let Ub = new Uint8Array(Gb);
        if (!bb.transcodeImage(Ub, ub, hb, Bb, 1, 0)) return null;
        if (Ob) {
          Ub = function(bb, ub, hb, Bb) {
            const Ob = new Uint16Array(4),
              Gb = new Uint16Array(hb * Bb),
              Ub = hb / 4,
              Lb = Bb / 4;
            for (let Yb = 0; Yb < Lb; Yb++)
              for (let Bb = 0; Bb < Ub; Bb++) {
                const Lb = ub + 8 * (Yb * Ub + Bb);
                Ob[0] = bb[Lb] | bb[Lb + 1] << 8, Ob[1] = bb[Lb + 2] | bb[Lb + 3] << 8, Ob[2] = (2 * (31 & Ob[0]) + 1 * (31 & Ob[1])) / 3 | (2 * (2016 & Ob[0]) + 1 * (2016 & Ob[1])) / 3 & 2016 | (2 * (63488 & Ob[0]) + 1 * (63488 & Ob[1])) / 3 & 63488, Ob[3] = (2 * (31 & Ob[1]) + 1 * (31 & Ob[0])) / 3 | (2 * (2016 & Ob[1]) + 1 * (2016 & Ob[0])) / 3 & 2016 | (2 * (63488 & Ob[1]) + 1 * (63488 & Ob[0])) / 3 & 63488;
                for (let ub = 0; ub < 4; ub++) {
                  const Ub = bb[Lb + 4 + ub];
                  let Sb = (4 * Yb + ub) * hb + 4 * Bb;
                  Gb[Sb++] = Ob[3 & Ub], Gb[Sb++] = Ob[Ub >> 2 & 3], Gb[Sb++] = Ob[Ub >> 4 & 3], Gb[Sb] = Ob[Ub >> 6 & 3]
                }
              }
            return Gb
          }(Ub, 0, bb.getImageWidth(ub, hb) + 3 & -4, bb.getImageHeight(ub, hb) + 3 & -4)
        }
        return Ub
      }
      onmessage = Hb => {
        if ("init" === Hb.data.action) {
          if (Hb.data.url) try {
            importScripts(Hb.data.url)
          } catch (wb) {
            postMessage({
              action: "error",
              error: wb
            })
          }
          Sb || (Sb = BASIS({
            wasmBinary: Hb.data.wasmBinary
          })), null !== Sb && Sb.then((bb => {
            BASIS = bb, bb.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Hb.data.action) {
          const Sb = Hb.data.config,
            wb = Hb.data.imageData,
            Zb = new BASIS.BasisFile(wb),
            Xb = function(bb) {
              const ub = bb.getHasAlpha(),
                hb = bb.getNumImages(),
                Bb = [];
              for (let Ob = 0; Ob < hb; Ob++) {
                const ub = {
                    levels: []
                  },
                  hb = bb.getNumLevels(Ob);
                for (let Bb = 0; Bb < hb; Bb++) {
                  const hb = {
                    width: bb.getImageWidth(Ob, Bb),
                    height: bb.getImageHeight(Ob, Bb)
                  };
                  ub.levels.push(hb)
                }
                Bb.push(ub)
              }
              return {
                hasAlpha: ub,
                images: Bb
              }
            }(Zb);
          let pb = Hb.data.ignoreSupportedFormats ? null : function(Sb, ab) {
              let Hb = null;
              Sb.supportedCompressionFormats && (Hb = Sb.supportedCompressionFormats.astc ? Lb : Sb.supportedCompressionFormats.bc7 ? Ob : Sb.supportedCompressionFormats.s3tc ? ab.hasAlpha ? Bb : hb : Sb.supportedCompressionFormats.pvrtc ? ab.hasAlpha ? Ub : Gb : Sb.supportedCompressionFormats.etc2 ? ub : Sb.supportedCompressionFormats.etc1 ? bb : Yb);
              return Hb
            }(Hb.data.config, Xb),
            ob = !1;
          null === pb && (ob = !0, pb = Xb.hasAlpha ? Bb : hb);
          let Ab = !0;
          Zb.startTranscoding() || (Ab = !1);
          const lb = [];
          for (let bb = 0; bb < Xb.images.length && Ab; bb++) {
            const ub = Xb.images[bb];
            if (void 0 === Sb.loadSingleImage || Sb.loadSingleImage === bb) {
              let hb = ub.levels.length;
              !1 === Sb.loadMipmapLevels && (hb = 1);
              for (let Bb = 0; Bb < hb; Bb++) {
                const hb = ub.levels[Bb],
                  Ob = ab(Zb, bb, Bb, pb, ob);
                if (!Ob) {
                  Ab = !1;
                  break
                }
                hb.transcodedPixels = Ob, lb.push(hb.transcodedPixels.buffer)
              }
            }
          }
          Zb.close(), Zb.delete(), ob && (pb = -1), Ab ? postMessage({
            action: "transcode",
            success: Ab,
            id: Hb.data.id,
            fileInfo: Xb,
            format: pb
          }, lb) : postMessage({
            action: "transcode",
            success: Ab,
            id: Hb.data.id
          })
        }
      }
    }! function(bb) {
      bb[bb.cTFETC1 = 0] = "cTFETC1", bb[bb.cTFETC2 = 1] = "cTFETC2", bb[bb.cTFBC1 = 2] = "cTFBC1", bb[bb.cTFBC3 = 3] = "cTFBC3", bb[bb.cTFBC4 = 4] = "cTFBC4", bb[bb.cTFBC5 = 5] = "cTFBC5", bb[bb.cTFBC7 = 6] = "cTFBC7", bb[bb.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", bb[bb.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", bb[bb.cTFASTC_4x4 = 10] = "cTFASTC_4x4", bb[bb.cTFATC_RGB = 11] = "cTFATC_RGB", bb[bb.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", bb[bb.cTFRGBA32 = 13] = "cTFRGBA32", bb[bb.cTFRGB565 = 14] = "cTFRGB565", bb[bb.cTFBGR565 = 15] = "cTFBGR565", bb[bb.cTFRGBA4444 = 16] = "cTFRGBA4444", bb[bb.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", bb[bb.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", bb[bb.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", bb[bb.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", bb[bb.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Bb || (Bb = {}));
    const Sb = {
      JSModuleURL: `${Ob.k._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Ob.k._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let ab = null,
      Hb = null,
      wb = 0;
    const Zb = async () => (ab || (ab = new Promise(((bb, ub) => {
      Hb ? bb(Hb) : Ob.k.LoadFileAsync(Ob.k.GetBabylonScriptURL(Sb.WasmModuleURL)).then((hb => {
        if ("function" !== typeof URL) return ub("Basis transcoder requires an environment with a URL constructor");
        const Bb = URL.createObjectURL(new Blob([`(${Yb})()`], {
          type: "application/javascript"
        }));
        Hb = new Worker(Bb), async function(bb, ub, hb) {
          return await new Promise(((Bb, Gb) => {
            const Ub = ub => {
              "init" === ub.data.action ? (bb.removeEventListener("message", Ub), Bb(bb)) : "error" === ub.data.action && Gb(ub.data.error || "error initializing worker")
            };
            bb.addEventListener("message", Ub), bb.postMessage({
              action: "init",
              url: hb ? Ob.k.GetBabylonScriptURL(hb) : void 0,
              wasmBinary: ub
            }, [ub])
          }))
        }(Hb, hb, Sb.JSModuleURL).then(bb, ub)
      })).catch(ub)
    }))), await ab), Xb = async (bb, ub) => {
      const hb = bb instanceof ArrayBuffer ? new Uint8Array(bb) : bb;
      return await new Promise(((bb, Bb) => {
        Zb().then((() => {
          const Ob = wb++,
            Gb = ub => {
              "transcode" === ub.data.action && ub.data.id === Ob && (Hb.removeEventListener("message", Gb), ub.data.success ? bb(ub.data) : Bb("Transcode is not supported on this device"))
            };
          Hb.addEventListener("message", Gb);
          const Ub = new Uint8Array(hb.byteLength);
          Ub.set(new Uint8Array(hb.buffer, hb.byteOffset, hb.byteLength)), Hb.postMessage({
            action: "transcode",
            id: Ob,
            imageData: Ub,
            config: ub,
            ignoreSupportedFormats: false
          }, [Ub.buffer])
        }), (bb => {
          Bb(bb)
        }))
      }))
    }, pb = (bb, ub) => {
      let hb = ub._gl?.TEXTURE_2D;
      bb.isCube && (hb = ub._gl?.TEXTURE_CUBE_MAP), ub._bindTextureDirectly(hb, bb, !0)
    }, ob = (bb, ub) => {
      const hb = bb.UX();
      for (let Ob = 0; Ob < ub.fileInfo.images.length; Ob++) {
        const Yb = ub.fileInfo.images[Ob].levels[0];
        if (bb._invertVScale = bb.invertY, -1 === ub.format || ub.format === Bb.cTFRGB565)
          if (bb.type = 10, bb.format = 4, !hb._features.basisNeedsPOT || Math.log2(Yb.width) % 1 === 0 && Math.log2(Yb.height) % 1 === 0) bb._invertVScale = !bb.invertY, bb.width = Yb.width + 3 & -4, bb.height = Yb.height + 3 & -4, bb.samplingMode = 2, pb(bb, hb), hb._uploadDataToTextureDirectly(bb, new Uint16Array(Yb.transcodedPixels.buffer), Ob, 0, 4, !0);
          else {
            const ub = new Lb.b(hb, 2);
            bb._invertVScale = bb.invertY, ub.type = 10, ub.format = 4, ub.width = Yb.width + 3 & -4, ub.height = Yb.height + 3 & -4, pb(ub, hb), hb._uploadDataToTextureDirectly(ub, new Uint16Array(Yb.transcodedPixels.buffer), Ob, 0, 4, !0), hb._rescaleTexture(ub, bb, hb.scenes[0], hb._getInternalFormat(4), (() => {
              hb._releaseTexture(ub), pb(bb, hb)
            }))
          }
        else {
          bb.width = Yb.width, bb.height = Yb.height, bb.generateMipMaps = ub.fileInfo.images[Ob].levels.length > 1;
          const Bb = Ab.GetInternalFormatFromBasisFormat(ub.format, hb);
          bb.format = Bb, pb(bb, hb);
          const Lb = ub.fileInfo.images[Ob].levels;
          for (let ub = 0; ub < Lb.length; ub++) {
            const Gb = Lb[ub];
            hb._uploadCompressedDataToTextureDirectly(bb, Bb, Gb.width, Gb.height, Gb.transcodedPixels, Ob, ub)
          }!hb._features.basisNeedsPOT || Math.log2(bb.width) % 1 === 0 && Math.log2(bb.height) % 1 === 0 || (Gb.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), bb._cachedWrapU = Ub.f.CLAMP_ADDRESSMODE, bb._cachedWrapV = Ub.f.CLAMP_ADDRESSMODE)
        }
      }
    }, Ab = {
      JSModuleURL: Sb.JSModuleURL,
      WasmModuleURL: Sb.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (bb, ub) => {
        let hb;
        switch (bb) {
          case Bb.cTFETC1:
            hb = 36196;
            break;
          case Bb.cTFBC1:
            hb = 33776;
            break;
          case Bb.cTFBC4:
            hb = 33779;
            break;
          case Bb.cTFASTC_4x4:
            hb = 37808;
            break;
          case Bb.cTFETC2:
            hb = 37496;
            break;
          case Bb.cTFBC7:
            hb = 36492
        }
        if (void 0 === hb) throw "The chosen Basis transcoder format is not currently supported";
        return hb
      },
      TranscodeAsync: Xb,
      LoadTextureFromTranscodeResult: ob
    };
    class lb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, ub, hb, Bb, Gb) {
        if (Array.isArray(bb)) return;
        const Ub = ub.UX().getCaps(),
          Lb = {
            supportedCompressionFormats: {
              etc1: !!Ub.etc1,
              s3tc: !!Ub.s3tc,
              pvrtc: !!Ub.pvrtc,
              etc2: !!Ub.etc2,
              astc: !!Ub.astc,
              bc7: !!Ub.bptc
            }
          };
        Xb(bb, Lb).then((bb => {
          const hb = bb.fileInfo.images[0].levels.length > 1 && ub.generateMipMaps;
          ob(ub, bb), ub.UX()._setCubeMapTextureParams(ub, hb), ub.isReady = !0, ub.onLoadedObservable.notifyObservers(ub), ub.onLoadedObservable.clear(), Bb && Bb()
        })).catch((bb => {
          Ob.k.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), ub.isReady = !0, Gb && Gb(bb)
        }))
      }
      loadData(bb, ub, hb) {
        const Bb = ub.UX().getCaps(),
          Gb = {
            supportedCompressionFormats: {
              etc1: !!Bb.etc1,
              s3tc: !!Bb.s3tc,
              pvrtc: !!Bb.pvrtc,
              etc2: !!Bb.etc2,
              astc: !!Bb.astc,
              bc7: !!Bb.bptc
            }
          };
        Xb(bb, Gb).then((bb => {
          const Bb = bb.fileInfo.images[0].levels[0],
            Ob = bb.fileInfo.images[0].levels.length > 1 && ub.generateMipMaps;
          hb(Bb.width, Bb.height, Ob, -1 !== bb.format, (() => {
            ob(ub, bb)
          }))
        })).catch((bb => {
          Ob.k.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Ob.k.Warn(`Failed to transcode Basis file: ${bb}`), hb(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);