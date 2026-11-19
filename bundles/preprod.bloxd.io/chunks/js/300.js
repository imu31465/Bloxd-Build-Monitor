export const id = 300;
export const ids = [300];
export const modules = {
  40992: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      _BasisTextureLoader: () => Xz
    });
    var Ez, nz = bz(39258),
      iz = bz(38060),
      lz = bz(39636),
      Mz = bz(39011);

    function tz() {
      const zz = 0,
        uz = 1,
        bz = 2,
        Ez = 3,
        nz = 6,
        iz = 8,
        lz = 9,
        Mz = 10,
        tz = 14;
      let Hz = null;

      function Oz(zz, uz, bz, Ez, nz) {
        const iz = zz.getImageTranscodedSizeInBytes(uz, bz, Ez);
        let lz = new Uint8Array(iz);
        if (!zz.transcodeImage(lz, uz, bz, Ez, 1, 0)) return null;
        if (nz) {
          lz = function(zz, uz, bz, Ez) {
            const nz = new Uint16Array(4),
              iz = new Uint16Array(bz * Ez),
              lz = bz / 4,
              Mz = Ez / 4;
            for (let tz = 0; tz < Mz; tz++)
              for (let Ez = 0; Ez < lz; Ez++) {
                const Mz = uz + 8 * (tz * lz + Ez);
                nz[0] = zz[Mz] | zz[Mz + 1] << 8, nz[1] = zz[Mz + 2] | zz[Mz + 3] << 8, nz[2] = (2 * (31 & nz[0]) + 1 * (31 & nz[1])) / 3 | (2 * (2016 & nz[0]) + 1 * (2016 & nz[1])) / 3 & 2016 | (2 * (63488 & nz[0]) + 1 * (63488 & nz[1])) / 3 & 63488, nz[3] = (2 * (31 & nz[1]) + 1 * (31 & nz[0])) / 3 | (2 * (2016 & nz[1]) + 1 * (2016 & nz[0])) / 3 & 2016 | (2 * (63488 & nz[1]) + 1 * (63488 & nz[0])) / 3 & 63488;
                for (let uz = 0; uz < 4; uz++) {
                  const lz = zz[Mz + 4 + uz];
                  let Hz = (4 * tz + uz) * bz + 4 * Ez;
                  iz[Hz++] = nz[3 & lz], iz[Hz++] = nz[lz >> 2 & 3], iz[Hz++] = nz[lz >> 4 & 3], iz[Hz] = nz[lz >> 6 & 3]
                }
              }
            return iz
          }(lz, 0, zz.getImageWidth(uz, bz) + 3 & -4, zz.getImageHeight(uz, bz) + 3 & -4)
        }
        return lz
      }
      onmessage = pz => {
        if ("init" === pz.data.action) {
          if (pz.data.url) try {
            importScripts(pz.data.url)
          } catch (dz) {
            postMessage({
              action: "error",
              error: dz
            })
          }
          Hz || (Hz = BASIS({
            wasmBinary: pz.data.wasmBinary
          })), null !== Hz && Hz.then((zz => {
            BASIS = zz, zz.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === pz.data.action) {
          const Hz = pz.data.config,
            dz = pz.data.imageData,
            Fz = new BASIS.BasisFile(dz),
            Zz = function(zz) {
              const uz = zz.getHasAlpha(),
                bz = zz.getNumImages(),
                Ez = [];
              for (let nz = 0; nz < bz; nz++) {
                const uz = {
                    levels: []
                  },
                  bz = zz.getNumLevels(nz);
                for (let Ez = 0; Ez < bz; Ez++) {
                  const bz = {
                    width: zz.getImageWidth(nz, Ez),
                    height: zz.getImageHeight(nz, Ez)
                  };
                  uz.levels.push(bz)
                }
                Ez.push(uz)
              }
              return {
                hasAlpha: uz,
                images: Ez
              }
            }(Fz);
          let Rz = pz.data.ignoreSupportedFormats ? null : function(Hz, Oz) {
              let pz = null;
              Hz.supportedCompressionFormats && (pz = Hz.supportedCompressionFormats.astc ? Mz : Hz.supportedCompressionFormats.bc7 ? nz : Hz.supportedCompressionFormats.s3tc ? Oz.hasAlpha ? Ez : bz : Hz.supportedCompressionFormats.pvrtc ? Oz.hasAlpha ? lz : iz : Hz.supportedCompressionFormats.etc2 ? uz : Hz.supportedCompressionFormats.etc1 ? zz : tz);
              return pz
            }(pz.data.config, Zz),
            Kz = !1;
          null === Rz && (Kz = !0, Rz = Zz.hasAlpha ? Ez : bz);
          let wz = !0;
          Fz.startTranscoding() || (wz = !1);
          const Xz = [];
          for (let zz = 0; zz < Zz.images.length && wz; zz++) {
            const uz = Zz.images[zz];
            if (void 0 === Hz.loadSingleImage || Hz.loadSingleImage === zz) {
              let bz = uz.levels.length;
              !1 === Hz.loadMipmapLevels && (bz = 1);
              for (let Ez = 0; Ez < bz; Ez++) {
                const bz = uz.levels[Ez],
                  nz = Oz(Fz, zz, Ez, Rz, Kz);
                if (!nz) {
                  wz = !1;
                  break
                }
                bz.transcodedPixels = nz, Xz.push(bz.transcodedPixels.buffer)
              }
            }
          }
          Fz.close(), Fz.delete(), Kz && (Rz = -1), wz ? postMessage({
            action: "transcode",
            success: wz,
            id: pz.data.id,
            fileInfo: Zz,
            format: Rz
          }, Xz) : postMessage({
            action: "transcode",
            success: wz,
            id: pz.data.id
          })
        }
      }
    }! function(zz) {
      zz[zz.cTFETC1 = 0] = "cTFETC1", zz[zz.cTFETC2 = 1] = "cTFETC2", zz[zz.cTFBC1 = 2] = "cTFBC1", zz[zz.cTFBC3 = 3] = "cTFBC3", zz[zz.cTFBC4 = 4] = "cTFBC4", zz[zz.cTFBC5 = 5] = "cTFBC5", zz[zz.cTFBC7 = 6] = "cTFBC7", zz[zz.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", zz[zz.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", zz[zz.cTFASTC_4x4 = 10] = "cTFASTC_4x4", zz[zz.cTFATC_RGB = 11] = "cTFATC_RGB", zz[zz.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", zz[zz.cTFRGBA32 = 13] = "cTFRGBA32", zz[zz.cTFRGB565 = 14] = "cTFRGB565", zz[zz.cTFBGR565 = 15] = "cTFBGR565", zz[zz.cTFRGBA4444 = 16] = "cTFRGBA4444", zz[zz.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", zz[zz.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", zz[zz.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", zz[zz.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", zz[zz.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Ez || (Ez = {}));
    const Hz = {
      JSModuleURL: `${nz.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${nz.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Oz = null,
      pz = null,
      dz = 0;
    const Fz = async () => (Oz || (Oz = new Promise(((zz, uz) => {
      pz ? zz(pz) : nz.h.LoadFileAsync(nz.h.GetBabylonScriptURL(Hz.WasmModuleURL)).then((bz => {
        if ("function" !== typeof URL) return uz("Basis transcoder requires an environment with a URL constructor");
        const Ez = URL.createObjectURL(new Blob([`(${tz})()`], {
          type: "application/javascript"
        }));
        pz = new Worker(Ez), async function(zz, uz, bz) {
          return await new Promise(((Ez, iz) => {
            const lz = uz => {
              "init" === uz.data.action ? (zz.removeEventListener("message", lz), Ez(zz)) : "error" === uz.data.action && iz(uz.data.error || "error initializing worker")
            };
            zz.addEventListener("message", lz), zz.postMessage({
              action: "init",
              url: bz ? nz.h.GetBabylonScriptURL(bz) : void 0,
              wasmBinary: uz
            }, [uz])
          }))
        }(pz, bz, Hz.JSModuleURL).then(zz, uz)
      })).catch(uz)
    }))), await Oz), Zz = async (zz, uz) => {
      const bz = zz instanceof ArrayBuffer ? new Uint8Array(zz) : zz;
      return await new Promise(((zz, Ez) => {
        Fz().then((() => {
          const nz = dz++,
            iz = uz => {
              "transcode" === uz.data.action && uz.data.id === nz && (pz.removeEventListener("message", iz), uz.data.success ? zz(uz.data) : Ez("Transcode is not supported on this device"))
            };
          pz.addEventListener("message", iz);
          const lz = new Uint8Array(bz.byteLength);
          lz.set(new Uint8Array(bz.buffer, bz.byteOffset, bz.byteLength)), pz.postMessage({
            action: "transcode",
            id: nz,
            imageData: lz,
            config: uz,
            ignoreSupportedFormats: false
          }, [lz.buffer])
        }), (zz => {
          Ez(zz)
        }))
      }))
    }, Rz = (zz, uz) => {
      let bz = uz._gl?.TEXTURE_2D;
      zz.isCube && (bz = uz._gl?.TEXTURE_CUBE_MAP), uz._bindTextureDirectly(bz, zz, !0)
    }, Kz = (zz, uz) => {
      const bz = zz.uR();
      for (let nz = 0; nz < uz.fileInfo.images.length; nz++) {
        const tz = uz.fileInfo.images[nz].levels[0];
        if (zz._invertVScale = zz.invertY, -1 === uz.format || uz.format === Ez.cTFRGB565)
          if (zz.type = 10, zz.format = 4, !bz._features.basisNeedsPOT || Math.log2(tz.width) % 1 === 0 && Math.log2(tz.height) % 1 === 0) zz._invertVScale = !zz.invertY, zz.width = tz.width + 3 & -4, zz.height = tz.height + 3 & -4, zz.samplingMode = 2, Rz(zz, bz), bz._uploadDataToTextureDirectly(zz, new Uint16Array(tz.transcodedPixels.buffer), nz, 0, 4, !0);
          else {
            const uz = new Mz.c(bz, 2);
            zz._invertVScale = zz.invertY, uz.type = 10, uz.format = 4, uz.width = tz.width + 3 & -4, uz.height = tz.height + 3 & -4, Rz(uz, bz), bz._uploadDataToTextureDirectly(uz, new Uint16Array(tz.transcodedPixels.buffer), nz, 0, 4, !0), bz._rescaleTexture(uz, zz, bz.scenes[0], bz._getInternalFormat(4), (() => {
              bz._releaseTexture(uz), Rz(zz, bz)
            }))
          }
        else {
          zz.width = tz.width, zz.height = tz.height, zz.generateMipMaps = uz.fileInfo.images[nz].levels.length > 1;
          const Ez = wz.GetInternalFormatFromBasisFormat(uz.format, bz);
          zz.format = Ez, Rz(zz, bz);
          const Mz = uz.fileInfo.images[nz].levels;
          for (let uz = 0; uz < Mz.length; uz++) {
            const iz = Mz[uz];
            bz._uploadCompressedDataToTextureDirectly(zz, Ez, iz.width, iz.height, iz.transcodedPixels, nz, uz)
          }!bz._features.basisNeedsPOT || Math.log2(zz.width) % 1 === 0 && Math.log2(zz.height) % 1 === 0 || (iz.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), zz._cachedWrapU = lz.e.CLAMP_ADDRESSMODE, zz._cachedWrapV = lz.e.CLAMP_ADDRESSMODE)
        }
      }
    }, wz = {
      JSModuleURL: Hz.JSModuleURL,
      WasmModuleURL: Hz.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (zz, uz) => {
        let bz;
        switch (zz) {
          case Ez.cTFETC1:
            bz = 36196;
            break;
          case Ez.cTFBC1:
            bz = 33776;
            break;
          case Ez.cTFBC4:
            bz = 33779;
            break;
          case Ez.cTFASTC_4x4:
            bz = 37808;
            break;
          case Ez.cTFETC2:
            bz = 37496;
            break;
          case Ez.cTFBC7:
            bz = 36492
        }
        if (void 0 === bz) throw "The chosen Basis transcoder format is not currently supported";
        return bz
      },
      TranscodeAsync: Zz,
      LoadTextureFromTranscodeResult: Kz
    };
    class Xz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(zz, uz, bz, Ez, iz) {
        if (Array.isArray(zz)) return;
        const lz = uz.uR().getCaps(),
          Mz = {
            supportedCompressionFormats: {
              etc1: !!lz.etc1,
              s3tc: !!lz.s3tc,
              pvrtc: !!lz.pvrtc,
              etc2: !!lz.etc2,
              astc: !!lz.astc,
              bc7: !!lz.bptc
            }
          };
        Zz(zz, Mz).then((zz => {
          const bz = zz.fileInfo.images[0].levels.length > 1 && uz.generateMipMaps;
          Kz(uz, zz), uz.uR()._setCubeMapTextureParams(uz, bz), uz.isReady = !0, uz.onLoadedObservable.notifyObservers(uz), uz.onLoadedObservable.clear(), Ez && Ez()
        })).catch((zz => {
          nz.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), uz.isReady = !0, iz && iz(zz)
        }))
      }
      loadData(zz, uz, bz) {
        const Ez = uz.uR().getCaps(),
          iz = {
            supportedCompressionFormats: {
              etc1: !!Ez.etc1,
              s3tc: !!Ez.s3tc,
              pvrtc: !!Ez.pvrtc,
              etc2: !!Ez.etc2,
              astc: !!Ez.astc,
              bc7: !!Ez.bptc
            }
          };
        Zz(zz, iz).then((zz => {
          const Ez = zz.fileInfo.images[0].levels[0],
            nz = zz.fileInfo.images[0].levels.length > 1 && uz.generateMipMaps;
          bz(Ez.width, Ez.height, nz, -1 !== zz.format, (() => {
            Kz(uz, zz)
          }))
        })).catch((zz => {
          nz.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), nz.h.Warn(`Failed to transcode Basis file: ${zz}`), bz(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);