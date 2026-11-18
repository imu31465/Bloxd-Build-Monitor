export const id = 288;
export const ids = [288];
export const modules = {
  40258: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      _BasisTextureLoader: () => mb
    });
    var Uy, hy = Wy(38576),
      fy = Wy(37350),
      Zy = Wy(38989),
      cb = Wy(38287);

    function Py() {
      const yb = 0,
        bb = 1,
        Wy = 2,
        Uy = 3,
        hy = 6,
        fy = 8,
        Zy = 9,
        cb = 10,
        Py = 14;
      let oy = null;

      function By(yb, bb, Wy, Uy, hy) {
        const fy = yb.getImageTranscodedSizeInBytes(bb, Wy, Uy);
        let Zy = new Uint8Array(fy);
        if (!yb.transcodeImage(Zy, bb, Wy, Uy, 1, 0)) return null;
        if (hy) {
          Zy = function(yb, bb, Wy, Uy) {
            const hy = new Uint16Array(4),
              fy = new Uint16Array(Wy * Uy),
              Zy = Wy / 4,
              cb = Uy / 4;
            for (let Py = 0; Py < cb; Py++)
              for (let Uy = 0; Uy < Zy; Uy++) {
                const cb = bb + 8 * (Py * Zy + Uy);
                hy[0] = yb[cb] | yb[cb + 1] << 8, hy[1] = yb[cb + 2] | yb[cb + 3] << 8, hy[2] = (2 * (31 & hy[0]) + 1 * (31 & hy[1])) / 3 | (2 * (2016 & hy[0]) + 1 * (2016 & hy[1])) / 3 & 2016 | (2 * (63488 & hy[0]) + 1 * (63488 & hy[1])) / 3 & 63488, hy[3] = (2 * (31 & hy[1]) + 1 * (31 & hy[0])) / 3 | (2 * (2016 & hy[1]) + 1 * (2016 & hy[0])) / 3 & 2016 | (2 * (63488 & hy[1]) + 1 * (63488 & hy[0])) / 3 & 63488;
                for (let bb = 0; bb < 4; bb++) {
                  const Zy = yb[cb + 4 + bb];
                  let oy = (4 * Py + bb) * Wy + 4 * Uy;
                  fy[oy++] = hy[3 & Zy], fy[oy++] = hy[Zy >> 2 & 3], fy[oy++] = hy[Zy >> 4 & 3], fy[oy] = hy[Zy >> 6 & 3]
                }
              }
            return fy
          }(Zy, 0, yb.getImageWidth(bb, Wy) + 3 & -4, yb.getImageHeight(bb, Wy) + 3 & -4)
        }
        return Zy
      }
      onmessage = Ky => {
        if ("init" === Ky.data.action) {
          if (Ky.data.url) try {
            importScripts(Ky.data.url)
          } catch (ey) {
            postMessage({
              action: "error",
              error: ey
            })
          }
          oy || (oy = BASIS({
            wasmBinary: Ky.data.wasmBinary
          })), null !== oy && oy.then((yb => {
            BASIS = yb, yb.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Ky.data.action) {
          const oy = Ky.data.config,
            ey = Ky.data.imageData,
            qb = new BASIS.BasisFile(ey),
            sy = function(yb) {
              const bb = yb.getHasAlpha(),
                Wy = yb.getNumImages(),
                Uy = [];
              for (let hy = 0; hy < Wy; hy++) {
                const bb = {
                    levels: []
                  },
                  Wy = yb.getNumLevels(hy);
                for (let Uy = 0; Uy < Wy; Uy++) {
                  const Wy = {
                    width: yb.getImageWidth(hy, Uy),
                    height: yb.getImageHeight(hy, Uy)
                  };
                  bb.levels.push(Wy)
                }
                Uy.push(bb)
              }
              return {
                hasAlpha: bb,
                images: Uy
              }
            }(qb);
          let Sy = Ky.data.ignoreSupportedFormats ? null : function(oy, By) {
              let Ky = null;
              oy.supportedCompressionFormats && (Ky = oy.supportedCompressionFormats.astc ? cb : oy.supportedCompressionFormats.bc7 ? hy : oy.supportedCompressionFormats.s3tc ? By.hasAlpha ? Uy : Wy : oy.supportedCompressionFormats.pvrtc ? By.hasAlpha ? Zy : fy : oy.supportedCompressionFormats.etc2 ? bb : oy.supportedCompressionFormats.etc1 ? yb : Py);
              return Ky
            }(Ky.data.config, sy),
            Ey = !1;
          null === Sy && (Ey = !0, Sy = sy.hasAlpha ? Uy : Wy);
          let ly = !0;
          qb.startTranscoding() || (ly = !1);
          const mb = [];
          for (let yb = 0; yb < sy.images.length && ly; yb++) {
            const bb = sy.images[yb];
            if (void 0 === oy.loadSingleImage || oy.loadSingleImage === yb) {
              let Wy = bb.levels.length;
              !1 === oy.loadMipmapLevels && (Wy = 1);
              for (let Uy = 0; Uy < Wy; Uy++) {
                const Wy = bb.levels[Uy],
                  hy = By(qb, yb, Uy, Sy, Ey);
                if (!hy) {
                  ly = !1;
                  break
                }
                Wy.transcodedPixels = hy, mb.push(Wy.transcodedPixels.buffer)
              }
            }
          }
          qb.close(), qb.delete(), Ey && (Sy = -1), ly ? postMessage({
            action: "transcode",
            success: ly,
            id: Ky.data.id,
            fileInfo: sy,
            format: Sy
          }, mb) : postMessage({
            action: "transcode",
            success: ly,
            id: Ky.data.id
          })
        }
      }
    }! function(yb) {
      yb[yb.cTFETC1 = 0] = "cTFETC1", yb[yb.cTFETC2 = 1] = "cTFETC2", yb[yb.cTFBC1 = 2] = "cTFBC1", yb[yb.cTFBC3 = 3] = "cTFBC3", yb[yb.cTFBC4 = 4] = "cTFBC4", yb[yb.cTFBC5 = 5] = "cTFBC5", yb[yb.cTFBC7 = 6] = "cTFBC7", yb[yb.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", yb[yb.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", yb[yb.cTFASTC_4x4 = 10] = "cTFASTC_4x4", yb[yb.cTFATC_RGB = 11] = "cTFATC_RGB", yb[yb.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", yb[yb.cTFRGBA32 = 13] = "cTFRGBA32", yb[yb.cTFRGB565 = 14] = "cTFRGB565", yb[yb.cTFBGR565 = 15] = "cTFBGR565", yb[yb.cTFRGBA4444 = 16] = "cTFRGBA4444", yb[yb.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", yb[yb.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", yb[yb.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", yb[yb.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", yb[yb.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Uy || (Uy = {}));
    const oy = {
      JSModuleURL: `${hy.k._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${hy.k._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let By = null,
      Ky = null,
      ey = 0;
    const qb = async () => (By || (By = new Promise(((yb, bb) => {
      Ky ? yb(Ky) : hy.k.LoadFileAsync(hy.k.GetBabylonScriptURL(oy.WasmModuleURL)).then((Wy => {
        if ("function" !== typeof URL) return bb("Basis transcoder requires an environment with a URL constructor");
        const Uy = URL.createObjectURL(new Blob([`(${Py})()`], {
          type: "application/javascript"
        }));
        Ky = new Worker(Uy), async function(yb, bb, Wy) {
          return await new Promise(((Uy, fy) => {
            const Zy = bb => {
              "init" === bb.data.action ? (yb.removeEventListener("message", Zy), Uy(yb)) : "error" === bb.data.action && fy(bb.data.error || "error initializing worker")
            };
            yb.addEventListener("message", Zy), yb.postMessage({
              action: "init",
              url: Wy ? hy.k.GetBabylonScriptURL(Wy) : void 0,
              wasmBinary: bb
            }, [bb])
          }))
        }(Ky, Wy, oy.JSModuleURL).then(yb, bb)
      })).catch(bb)
    }))), await By), sy = async (yb, bb) => {
      const Wy = yb instanceof ArrayBuffer ? new Uint8Array(yb) : yb;
      return await new Promise(((yb, Uy) => {
        qb().then((() => {
          const hy = ey++,
            fy = bb => {
              "transcode" === bb.data.action && bb.data.id === hy && (Ky.removeEventListener("message", fy), bb.data.success ? yb(bb.data) : Uy("Transcode is not supported on this device"))
            };
          Ky.addEventListener("message", fy);
          const Zy = new Uint8Array(Wy.byteLength);
          Zy.set(new Uint8Array(Wy.buffer, Wy.byteOffset, Wy.byteLength)), Ky.postMessage({
            action: "transcode",
            id: hy,
            imageData: Zy,
            config: bb,
            ignoreSupportedFormats: false
          }, [Zy.buffer])
        }), (yb => {
          Uy(yb)
        }))
      }))
    }, Sy = (yb, bb) => {
      let Wy = bb._gl?.TEXTURE_2D;
      yb.isCube && (Wy = bb._gl?.TEXTURE_CUBE_MAP), bb._bindTextureDirectly(Wy, yb, !0)
    }, Ey = (yb, bb) => {
      const Wy = yb.xh();
      for (let hy = 0; hy < bb.fileInfo.images.length; hy++) {
        const Py = bb.fileInfo.images[hy].levels[0];
        if (yb._invertVScale = yb.invertY, -1 === bb.format || bb.format === Uy.cTFRGB565)
          if (yb.type = 10, yb.format = 4, !Wy._features.basisNeedsPOT || Math.log2(Py.width) % 1 === 0 && Math.log2(Py.height) % 1 === 0) yb._invertVScale = !yb.invertY, yb.width = Py.width + 3 & -4, yb.height = Py.height + 3 & -4, yb.samplingMode = 2, Sy(yb, Wy), Wy._uploadDataToTextureDirectly(yb, new Uint16Array(Py.transcodedPixels.buffer), hy, 0, 4, !0);
          else {
            const bb = new cb.d(Wy, 2);
            yb._invertVScale = yb.invertY, bb.type = 10, bb.format = 4, bb.width = Py.width + 3 & -4, bb.height = Py.height + 3 & -4, Sy(bb, Wy), Wy._uploadDataToTextureDirectly(bb, new Uint16Array(Py.transcodedPixels.buffer), hy, 0, 4, !0), Wy._rescaleTexture(bb, yb, Wy.scenes[0], Wy._getInternalFormat(4), (() => {
              Wy._releaseTexture(bb), Sy(yb, Wy)
            }))
          }
        else {
          yb.width = Py.width, yb.height = Py.height, yb.generateMipMaps = bb.fileInfo.images[hy].levels.length > 1;
          const Uy = ly.GetInternalFormatFromBasisFormat(bb.format, Wy);
          yb.format = Uy, Sy(yb, Wy);
          const cb = bb.fileInfo.images[hy].levels;
          for (let bb = 0; bb < cb.length; bb++) {
            const fy = cb[bb];
            Wy._uploadCompressedDataToTextureDirectly(yb, Uy, fy.width, fy.height, fy.transcodedPixels, hy, bb)
          }!Wy._features.basisNeedsPOT || Math.log2(yb.width) % 1 === 0 && Math.log2(yb.height) % 1 === 0 || (fy.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), yb._cachedWrapU = Zy.f.CLAMP_ADDRESSMODE, yb._cachedWrapV = Zy.f.CLAMP_ADDRESSMODE)
        }
      }
    }, ly = {
      JSModuleURL: oy.JSModuleURL,
      WasmModuleURL: oy.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (yb, bb) => {
        let Wy;
        switch (yb) {
          case Uy.cTFETC1:
            Wy = 36196;
            break;
          case Uy.cTFBC1:
            Wy = 33776;
            break;
          case Uy.cTFBC4:
            Wy = 33779;
            break;
          case Uy.cTFASTC_4x4:
            Wy = 37808;
            break;
          case Uy.cTFETC2:
            Wy = 37496;
            break;
          case Uy.cTFBC7:
            Wy = 36492
        }
        if (void 0 === Wy) throw "The chosen Basis transcoder format is not currently supported";
        return Wy
      },
      TranscodeAsync: sy,
      LoadTextureFromTranscodeResult: Ey
    };
    class mb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(yb, bb, Wy, Uy, fy) {
        if (Array.isArray(yb)) return;
        const Zy = bb.xh().getCaps(),
          cb = {
            supportedCompressionFormats: {
              etc1: !!Zy.etc1,
              s3tc: !!Zy.s3tc,
              pvrtc: !!Zy.pvrtc,
              etc2: !!Zy.etc2,
              astc: !!Zy.astc,
              bc7: !!Zy.bptc
            }
          };
        sy(yb, cb).then((yb => {
          const Wy = yb.fileInfo.images[0].levels.length > 1 && bb.generateMipMaps;
          Ey(bb, yb), bb.xh()._setCubeMapTextureParams(bb, Wy), bb.isReady = !0, bb.onLoadedObservable.notifyObservers(bb), bb.onLoadedObservable.clear(), Uy && Uy()
        })).catch((yb => {
          hy.k.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), bb.isReady = !0, fy && fy(yb)
        }))
      }
      loadData(yb, bb, Wy) {
        const Uy = bb.xh().getCaps(),
          fy = {
            supportedCompressionFormats: {
              etc1: !!Uy.etc1,
              s3tc: !!Uy.s3tc,
              pvrtc: !!Uy.pvrtc,
              etc2: !!Uy.etc2,
              astc: !!Uy.astc,
              bc7: !!Uy.bptc
            }
          };
        sy(yb, fy).then((yb => {
          const Uy = yb.fileInfo.images[0].levels[0],
            hy = yb.fileInfo.images[0].levels.length > 1 && bb.generateMipMaps;
          Wy(Uy.width, Uy.height, hy, -1 !== yb.format, (() => {
            Ey(bb, yb)
          }))
        })).catch((yb => {
          hy.k.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), hy.k.Warn(`Failed to transcode Basis file: ${yb}`), Wy(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);