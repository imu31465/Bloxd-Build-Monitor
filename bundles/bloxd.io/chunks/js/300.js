export const id = 300;
export const ids = [300];
export const modules = {
  40894: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      _BasisTextureLoader: () => Bz
    });
    var Fz, Wz = sz(39264),
      Xz = sz(38097),
      Oz = sz(39617),
      oz = sz(39021);

    function vz() {
      const zz = 0,
        tz = 1,
        sz = 2,
        Fz = 3,
        Wz = 6,
        Xz = 8,
        Oz = 9,
        oz = 10,
        vz = 14;
      let Uz = null;

      function Kz(zz, tz, sz, Fz, Wz) {
        const Xz = zz.getImageTranscodedSizeInBytes(tz, sz, Fz);
        let Oz = new Uint8Array(Xz);
        if (!zz.transcodeImage(Oz, tz, sz, Fz, 1, 0)) return null;
        if (Wz) {
          Oz = function(zz, tz, sz, Fz) {
            const Wz = new Uint16Array(4),
              Xz = new Uint16Array(sz * Fz),
              Oz = sz / 4,
              oz = Fz / 4;
            for (let vz = 0; vz < oz; vz++)
              for (let Fz = 0; Fz < Oz; Fz++) {
                const oz = tz + 8 * (vz * Oz + Fz);
                Wz[0] = zz[oz] | zz[oz + 1] << 8, Wz[1] = zz[oz + 2] | zz[oz + 3] << 8, Wz[2] = (2 * (31 & Wz[0]) + 1 * (31 & Wz[1])) / 3 | (2 * (2016 & Wz[0]) + 1 * (2016 & Wz[1])) / 3 & 2016 | (2 * (63488 & Wz[0]) + 1 * (63488 & Wz[1])) / 3 & 63488, Wz[3] = (2 * (31 & Wz[1]) + 1 * (31 & Wz[0])) / 3 | (2 * (2016 & Wz[1]) + 1 * (2016 & Wz[0])) / 3 & 2016 | (2 * (63488 & Wz[1]) + 1 * (63488 & Wz[0])) / 3 & 63488;
                for (let tz = 0; tz < 4; tz++) {
                  const Oz = zz[oz + 4 + tz];
                  let Uz = (4 * vz + tz) * sz + 4 * Fz;
                  Xz[Uz++] = Wz[3 & Oz], Xz[Uz++] = Wz[Oz >> 2 & 3], Xz[Uz++] = Wz[Oz >> 4 & 3], Xz[Uz] = Wz[Oz >> 6 & 3]
                }
              }
            return Xz
          }(Oz, 0, zz.getImageWidth(tz, sz) + 3 & -4, zz.getImageHeight(tz, sz) + 3 & -4)
        }
        return Oz
      }
      onmessage = uz => {
        if ("init" === uz.data.action) {
          if (uz.data.url) try {
            importScripts(uz.data.url)
          } catch (Nz) {
            postMessage({
              action: "error",
              error: Nz
            })
          }
          Uz || (Uz = BASIS({
            wasmBinary: uz.data.wasmBinary
          })), null !== Uz && Uz.then((zz => {
            BASIS = zz, zz.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === uz.data.action) {
          const Uz = uz.data.config,
            Nz = uz.data.imageData,
            bz = new BASIS.BasisFile(Nz),
            wz = function(zz) {
              const tz = zz.getHasAlpha(),
                sz = zz.getNumImages(),
                Fz = [];
              for (let Wz = 0; Wz < sz; Wz++) {
                const tz = {
                    levels: []
                  },
                  sz = zz.getNumLevels(Wz);
                for (let Fz = 0; Fz < sz; Fz++) {
                  const sz = {
                    width: zz.getImageWidth(Wz, Fz),
                    height: zz.getImageHeight(Wz, Fz)
                  };
                  tz.levels.push(sz)
                }
                Fz.push(tz)
              }
              return {
                hasAlpha: tz,
                images: Fz
              }
            }(bz);
          let Dz = uz.data.ignoreSupportedFormats ? null : function(Uz, Kz) {
              let uz = null;
              Uz.supportedCompressionFormats && (uz = Uz.supportedCompressionFormats.astc ? oz : Uz.supportedCompressionFormats.bc7 ? Wz : Uz.supportedCompressionFormats.s3tc ? Kz.hasAlpha ? Fz : sz : Uz.supportedCompressionFormats.pvrtc ? Kz.hasAlpha ? Oz : Xz : Uz.supportedCompressionFormats.etc2 ? tz : Uz.supportedCompressionFormats.etc1 ? zz : vz);
              return uz
            }(uz.data.config, wz),
            gz = !1;
          null === Dz && (gz = !0, Dz = wz.hasAlpha ? Fz : sz);
          let Hz = !0;
          bz.startTranscoding() || (Hz = !1);
          const Bz = [];
          for (let zz = 0; zz < wz.images.length && Hz; zz++) {
            const tz = wz.images[zz];
            if (void 0 === Uz.loadSingleImage || Uz.loadSingleImage === zz) {
              let sz = tz.levels.length;
              !1 === Uz.loadMipmapLevels && (sz = 1);
              for (let Fz = 0; Fz < sz; Fz++) {
                const sz = tz.levels[Fz],
                  Wz = Kz(bz, zz, Fz, Dz, gz);
                if (!Wz) {
                  Hz = !1;
                  break
                }
                sz.transcodedPixels = Wz, Bz.push(sz.transcodedPixels.buffer)
              }
            }
          }
          bz.close(), bz.delete(), gz && (Dz = -1), Hz ? postMessage({
            action: "transcode",
            success: Hz,
            id: uz.data.id,
            fileInfo: wz,
            format: Dz
          }, Bz) : postMessage({
            action: "transcode",
            success: Hz,
            id: uz.data.id
          })
        }
      }
    }! function(zz) {
      zz[zz.cTFETC1 = 0] = "cTFETC1", zz[zz.cTFETC2 = 1] = "cTFETC2", zz[zz.cTFBC1 = 2] = "cTFBC1", zz[zz.cTFBC3 = 3] = "cTFBC3", zz[zz.cTFBC4 = 4] = "cTFBC4", zz[zz.cTFBC5 = 5] = "cTFBC5", zz[zz.cTFBC7 = 6] = "cTFBC7", zz[zz.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", zz[zz.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", zz[zz.cTFASTC_4x4 = 10] = "cTFASTC_4x4", zz[zz.cTFATC_RGB = 11] = "cTFATC_RGB", zz[zz.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", zz[zz.cTFRGBA32 = 13] = "cTFRGBA32", zz[zz.cTFRGB565 = 14] = "cTFRGB565", zz[zz.cTFBGR565 = 15] = "cTFBGR565", zz[zz.cTFRGBA4444 = 16] = "cTFRGBA4444", zz[zz.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", zz[zz.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", zz[zz.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", zz[zz.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", zz[zz.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Fz || (Fz = {}));
    const Uz = {
      JSModuleURL: `${Wz.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Wz.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Kz = null,
      uz = null,
      Nz = 0;
    const bz = async () => (Kz || (Kz = new Promise(((zz, tz) => {
      uz ? zz(uz) : Wz.j.LoadFileAsync(Wz.j.GetBabylonScriptURL(Uz.WasmModuleURL)).then((sz => {
        if ("function" !== typeof URL) return tz("Basis transcoder requires an environment with a URL constructor");
        const Fz = URL.createObjectURL(new Blob([`(${vz})()`], {
          type: "application/javascript"
        }));
        uz = new Worker(Fz), async function(zz, tz, sz) {
          return await new Promise(((Fz, Xz) => {
            const Oz = tz => {
              "init" === tz.data.action ? (zz.removeEventListener("message", Oz), Fz(zz)) : "error" === tz.data.action && Xz(tz.data.error || "error initializing worker")
            };
            zz.addEventListener("message", Oz), zz.postMessage({
              action: "init",
              url: sz ? Wz.j.GetBabylonScriptURL(sz) : void 0,
              wasmBinary: tz
            }, [tz])
          }))
        }(uz, sz, Uz.JSModuleURL).then(zz, tz)
      })).catch(tz)
    }))), await Kz), wz = async (zz, tz) => {
      const sz = zz instanceof ArrayBuffer ? new Uint8Array(zz) : zz;
      return await new Promise(((zz, Fz) => {
        bz().then((() => {
          const Wz = Nz++,
            Xz = tz => {
              "transcode" === tz.data.action && tz.data.id === Wz && (uz.removeEventListener("message", Xz), tz.data.success ? zz(tz.data) : Fz("Transcode is not supported on this device"))
            };
          uz.addEventListener("message", Xz);
          const Oz = new Uint8Array(sz.byteLength);
          Oz.set(new Uint8Array(sz.buffer, sz.byteOffset, sz.byteLength)), uz.postMessage({
            action: "transcode",
            id: Wz,
            imageData: Oz,
            config: tz,
            ignoreSupportedFormats: false
          }, [Oz.buffer])
        }), (zz => {
          Fz(zz)
        }))
      }))
    }, Dz = (zz, tz) => {
      let sz = tz._gl?.TEXTURE_2D;
      zz.isCube && (sz = tz._gl?.TEXTURE_CUBE_MAP), tz._bindTextureDirectly(sz, zz, !0)
    }, gz = (zz, tz) => {
      const sz = zz.FD();
      for (let Wz = 0; Wz < tz.fileInfo.images.length; Wz++) {
        const vz = tz.fileInfo.images[Wz].levels[0];
        if (zz._invertVScale = zz.invertY, -1 === tz.format || tz.format === Fz.cTFRGB565)
          if (zz.type = 10, zz.format = 4, !sz._features.basisNeedsPOT || Math.log2(vz.width) % 1 === 0 && Math.log2(vz.height) % 1 === 0) zz._invertVScale = !zz.invertY, zz.width = vz.width + 3 & -4, zz.height = vz.height + 3 & -4, zz.samplingMode = 2, Dz(zz, sz), sz._uploadDataToTextureDirectly(zz, new Uint16Array(vz.transcodedPixels.buffer), Wz, 0, 4, !0);
          else {
            const tz = new oz.d(sz, 2);
            zz._invertVScale = zz.invertY, tz.type = 10, tz.format = 4, tz.width = vz.width + 3 & -4, tz.height = vz.height + 3 & -4, Dz(tz, sz), sz._uploadDataToTextureDirectly(tz, new Uint16Array(vz.transcodedPixels.buffer), Wz, 0, 4, !0), sz._rescaleTexture(tz, zz, sz.scenes[0], sz._getInternalFormat(4), (() => {
              sz._releaseTexture(tz), Dz(zz, sz)
            }))
          }
        else {
          zz.width = vz.width, zz.height = vz.height, zz.generateMipMaps = tz.fileInfo.images[Wz].levels.length > 1;
          const Fz = Hz.GetInternalFormatFromBasisFormat(tz.format, sz);
          zz.format = Fz, Dz(zz, sz);
          const oz = tz.fileInfo.images[Wz].levels;
          for (let tz = 0; tz < oz.length; tz++) {
            const Xz = oz[tz];
            sz._uploadCompressedDataToTextureDirectly(zz, Fz, Xz.width, Xz.height, Xz.transcodedPixels, Wz, tz)
          }!sz._features.basisNeedsPOT || Math.log2(zz.width) % 1 === 0 && Math.log2(zz.height) % 1 === 0 || (Xz.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), zz._cachedWrapU = Oz.g.CLAMP_ADDRESSMODE, zz._cachedWrapV = Oz.g.CLAMP_ADDRESSMODE)
        }
      }
    }, Hz = {
      JSModuleURL: Uz.JSModuleURL,
      WasmModuleURL: Uz.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (zz, tz) => {
        let sz;
        switch (zz) {
          case Fz.cTFETC1:
            sz = 36196;
            break;
          case Fz.cTFBC1:
            sz = 33776;
            break;
          case Fz.cTFBC4:
            sz = 33779;
            break;
          case Fz.cTFASTC_4x4:
            sz = 37808;
            break;
          case Fz.cTFETC2:
            sz = 37496;
            break;
          case Fz.cTFBC7:
            sz = 36492
        }
        if (void 0 === sz) throw "The chosen Basis transcoder format is not currently supported";
        return sz
      },
      TranscodeAsync: wz,
      LoadTextureFromTranscodeResult: gz
    };
    class Bz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(zz, tz, sz, Fz, Xz) {
        if (Array.isArray(zz)) return;
        const Oz = tz.FD().getCaps(),
          oz = {
            supportedCompressionFormats: {
              etc1: !!Oz.etc1,
              s3tc: !!Oz.s3tc,
              pvrtc: !!Oz.pvrtc,
              etc2: !!Oz.etc2,
              astc: !!Oz.astc,
              bc7: !!Oz.bptc
            }
          };
        wz(zz, oz).then((zz => {
          const sz = zz.fileInfo.images[0].levels.length > 1 && tz.generateMipMaps;
          gz(tz, zz), tz.FD()._setCubeMapTextureParams(tz, sz), tz.isReady = !0, tz.onLoadedObservable.notifyObservers(tz), tz.onLoadedObservable.clear(), Fz && Fz()
        })).catch((zz => {
          Wz.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), tz.isReady = !0, Xz && Xz(zz)
        }))
      }
      loadData(zz, tz, sz) {
        const Fz = tz.FD().getCaps(),
          Xz = {
            supportedCompressionFormats: {
              etc1: !!Fz.etc1,
              s3tc: !!Fz.s3tc,
              pvrtc: !!Fz.pvrtc,
              etc2: !!Fz.etc2,
              astc: !!Fz.astc,
              bc7: !!Fz.bptc
            }
          };
        wz(zz, Xz).then((zz => {
          const Fz = zz.fileInfo.images[0].levels[0],
            Wz = zz.fileInfo.images[0].levels.length > 1 && tz.generateMipMaps;
          sz(Fz.width, Fz.height, Wz, -1 !== zz.format, (() => {
            gz(tz, zz)
          }))
        })).catch((zz => {
          Wz.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Wz.j.Warn(`Failed to transcode Basis file: ${zz}`), sz(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);