export const id = 285;
export const ids = [285];
export const modules = {
  39722: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      _BasisTextureLoader: () => yB
    });
    var Vc, Ic = nc(38146),
      rB = nc(37191),
      uc = nc(38493),
      sc = nc(37895);

    function Mc() {
      const cB = 0,
        Bc = 1,
        nc = 2,
        Vc = 3,
        Ic = 6,
        rB = 8,
        uc = 9,
        sc = 10,
        Mc = 14;
      let Pc = null;

      function qB(cB, Bc, nc, Vc, Ic) {
        const rB = cB.getImageTranscodedSizeInBytes(Bc, nc, Vc);
        let uc = new Uint8Array(rB);
        if (!cB.transcodeImage(uc, Bc, nc, Vc, 1, 0)) return null;
        if (Ic) {
          uc = function(cB, Bc, nc, Vc) {
            const Ic = new Uint16Array(4),
              rB = new Uint16Array(nc * Vc),
              uc = nc / 4,
              sc = Vc / 4;
            for (let Mc = 0; Mc < sc; Mc++)
              for (let Vc = 0; Vc < uc; Vc++) {
                const sc = Bc + 8 * (Mc * uc + Vc);
                Ic[0] = cB[sc] | cB[sc + 1] << 8, Ic[1] = cB[sc + 2] | cB[sc + 3] << 8, Ic[2] = (2 * (31 & Ic[0]) + 1 * (31 & Ic[1])) / 3 | (2 * (2016 & Ic[0]) + 1 * (2016 & Ic[1])) / 3 & 2016 | (2 * (63488 & Ic[0]) + 1 * (63488 & Ic[1])) / 3 & 63488, Ic[3] = (2 * (31 & Ic[1]) + 1 * (31 & Ic[0])) / 3 | (2 * (2016 & Ic[1]) + 1 * (2016 & Ic[0])) / 3 & 2016 | (2 * (63488 & Ic[1]) + 1 * (63488 & Ic[0])) / 3 & 63488;
                for (let Bc = 0; Bc < 4; Bc++) {
                  const uc = cB[sc + 4 + Bc];
                  let Pc = (4 * Mc + Bc) * nc + 4 * Vc;
                  rB[Pc++] = Ic[3 & uc], rB[Pc++] = Ic[uc >> 2 & 3], rB[Pc++] = Ic[uc >> 4 & 3], rB[Pc] = Ic[uc >> 6 & 3]
                }
              }
            return rB
          }(uc, 0, cB.getImageWidth(Bc, nc) + 3 & -4, cB.getImageHeight(Bc, nc) + 3 & -4)
        }
        return uc
      }
      onmessage = Oc => {
        if ("init" === Oc.data.action) {
          if (Oc.data.url) try {
            importScripts(Oc.data.url)
          } catch (Tc) {
            postMessage({
              action: "error",
              error: Tc
            })
          }
          Pc || (Pc = BASIS({
            wasmBinary: Oc.data.wasmBinary
          })), null !== Pc && Pc.then((cB => {
            BASIS = cB, cB.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Oc.data.action) {
          const Pc = Oc.data.config,
            Tc = Oc.data.imageData,
            fc = new BASIS.BasisFile(Tc),
            mB = function(cB) {
              const Bc = cB.getHasAlpha(),
                nc = cB.getNumImages(),
                Vc = [];
              for (let Ic = 0; Ic < nc; Ic++) {
                const Bc = {
                    levels: []
                  },
                  nc = cB.getNumLevels(Ic);
                for (let Vc = 0; Vc < nc; Vc++) {
                  const nc = {
                    width: cB.getImageWidth(Ic, Vc),
                    height: cB.getImageHeight(Ic, Vc)
                  };
                  Bc.levels.push(nc)
                }
                Vc.push(Bc)
              }
              return {
                hasAlpha: Bc,
                images: Vc
              }
            }(fc);
          let ec = Oc.data.ignoreSupportedFormats ? null : function(Pc, qB) {
              let Oc = null;
              Pc.supportedCompressionFormats && (Oc = Pc.supportedCompressionFormats.astc ? sc : Pc.supportedCompressionFormats.bc7 ? Ic : Pc.supportedCompressionFormats.s3tc ? qB.hasAlpha ? Vc : nc : Pc.supportedCompressionFormats.pvrtc ? qB.hasAlpha ? uc : rB : Pc.supportedCompressionFormats.etc2 ? Bc : Pc.supportedCompressionFormats.etc1 ? cB : Mc);
              return Oc
            }(Oc.data.config, mB),
            tB = !1;
          null === ec && (tB = !0, ec = mB.hasAlpha ? Vc : nc);
          let Sc = !0;
          fc.startTranscoding() || (Sc = !1);
          const yB = [];
          for (let cB = 0; cB < mB.images.length && Sc; cB++) {
            const Bc = mB.images[cB];
            if (void 0 === Pc.loadSingleImage || Pc.loadSingleImage === cB) {
              let nc = Bc.levels.length;
              !1 === Pc.loadMipmapLevels && (nc = 1);
              for (let Vc = 0; Vc < nc; Vc++) {
                const nc = Bc.levels[Vc],
                  Ic = qB(fc, cB, Vc, ec, tB);
                if (!Ic) {
                  Sc = !1;
                  break
                }
                nc.transcodedPixels = Ic, yB.push(nc.transcodedPixels.buffer)
              }
            }
          }
          fc.close(), fc.delete(), tB && (ec = -1), Sc ? postMessage({
            action: "transcode",
            success: Sc,
            id: Oc.data.id,
            fileInfo: mB,
            format: ec
          }, yB) : postMessage({
            action: "transcode",
            success: Sc,
            id: Oc.data.id
          })
        }
      }
    }! function(cB) {
      cB[cB.cTFETC1 = 0] = "cTFETC1", cB[cB.cTFETC2 = 1] = "cTFETC2", cB[cB.cTFBC1 = 2] = "cTFBC1", cB[cB.cTFBC3 = 3] = "cTFBC3", cB[cB.cTFBC4 = 4] = "cTFBC4", cB[cB.cTFBC5 = 5] = "cTFBC5", cB[cB.cTFBC7 = 6] = "cTFBC7", cB[cB.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", cB[cB.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", cB[cB.cTFASTC_4x4 = 10] = "cTFASTC_4x4", cB[cB.cTFATC_RGB = 11] = "cTFATC_RGB", cB[cB.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", cB[cB.cTFRGBA32 = 13] = "cTFRGBA32", cB[cB.cTFRGB565 = 14] = "cTFRGB565", cB[cB.cTFBGR565 = 15] = "cTFBGR565", cB[cB.cTFRGBA4444 = 16] = "cTFRGBA4444", cB[cB.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", cB[cB.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", cB[cB.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", cB[cB.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", cB[cB.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Vc || (Vc = {}));
    const Pc = {
      JSModuleURL: `${Ic.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${Ic.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let qB = null,
      Oc = null,
      Tc = 0;
    const fc = async () => (qB || (qB = new Promise(((cB, Bc) => {
      Oc ? cB(Oc) : Ic.g.LoadFileAsync(Ic.g.GetBabylonScriptURL(Pc.WasmModuleURL)).then((nc => {
        if ("function" !== typeof URL) return Bc("Basis transcoder requires an environment with a URL constructor");
        const Vc = URL.createObjectURL(new Blob([`(${Mc})()`], {
          type: "application/javascript"
        }));
        Oc = new Worker(Vc), async function(cB, Bc, nc) {
          return await new Promise(((Vc, rB) => {
            const uc = Bc => {
              "init" === Bc.data.action ? (cB.removeEventListener("message", uc), Vc(cB)) : "error" === Bc.data.action && rB(Bc.data.error || "error initializing worker")
            };
            cB.addEventListener("message", uc), cB.postMessage({
              action: "init",
              url: nc ? Ic.g.GetBabylonScriptURL(nc) : void 0,
              wasmBinary: Bc
            }, [Bc])
          }))
        }(Oc, nc, Pc.JSModuleURL).then(cB, Bc)
      })).catch(Bc)
    }))), await qB), mB = async (cB, Bc) => {
      const nc = cB instanceof ArrayBuffer ? new Uint8Array(cB) : cB;
      return await new Promise(((cB, Vc) => {
        fc().then((() => {
          const Ic = Tc++,
            rB = Bc => {
              "transcode" === Bc.data.action && Bc.data.id === Ic && (Oc.removeEventListener("message", rB), Bc.data.success ? cB(Bc.data) : Vc("Transcode is not supported on this device"))
            };
          Oc.addEventListener("message", rB);
          const uc = new Uint8Array(nc.byteLength);
          uc.set(new Uint8Array(nc.buffer, nc.byteOffset, nc.byteLength)), Oc.postMessage({
            action: "transcode",
            id: Ic,
            imageData: uc,
            config: Bc,
            ignoreSupportedFormats: false
          }, [uc.buffer])
        }), (cB => {
          Vc(cB)
        }))
      }))
    }, ec = (cB, Bc) => {
      let nc = Bc._gl?.TEXTURE_2D;
      cB.isCube && (nc = Bc._gl?.TEXTURE_CUBE_MAP), Bc._bindTextureDirectly(nc, cB, !0)
    }, tB = (cB, Bc) => {
      const nc = cB.RV();
      for (let Ic = 0; Ic < Bc.fileInfo.images.length; Ic++) {
        const Mc = Bc.fileInfo.images[Ic].levels[0];
        if (cB._invertVScale = cB.invertY, -1 === Bc.format || Bc.format === Vc.cTFRGB565)
          if (cB.type = 10, cB.format = 4, !nc._features.basisNeedsPOT || Math.log2(Mc.width) % 1 === 0 && Math.log2(Mc.height) % 1 === 0) cB._invertVScale = !cB.invertY, cB.width = Mc.width + 3 & -4, cB.height = Mc.height + 3 & -4, cB.samplingMode = 2, ec(cB, nc), nc._uploadDataToTextureDirectly(cB, new Uint16Array(Mc.transcodedPixels.buffer), Ic, 0, 4, !0);
          else {
            const Bc = new sc.e(nc, 2);
            cB._invertVScale = cB.invertY, Bc.type = 10, Bc.format = 4, Bc.width = Mc.width + 3 & -4, Bc.height = Mc.height + 3 & -4, ec(Bc, nc), nc._uploadDataToTextureDirectly(Bc, new Uint16Array(Mc.transcodedPixels.buffer), Ic, 0, 4, !0), nc._rescaleTexture(Bc, cB, nc.scenes[0], nc._getInternalFormat(4), (() => {
              nc._releaseTexture(Bc), ec(cB, nc)
            }))
          }
        else {
          cB.width = Mc.width, cB.height = Mc.height, cB.generateMipMaps = Bc.fileInfo.images[Ic].levels.length > 1;
          const Vc = Sc.GetInternalFormatFromBasisFormat(Bc.format, nc);
          cB.format = Vc, ec(cB, nc);
          const sc = Bc.fileInfo.images[Ic].levels;
          for (let Bc = 0; Bc < sc.length; Bc++) {
            const rB = sc[Bc];
            nc._uploadCompressedDataToTextureDirectly(cB, Vc, rB.width, rB.height, rB.transcodedPixels, Ic, Bc)
          }!nc._features.basisNeedsPOT || Math.log2(cB.width) % 1 === 0 && Math.log2(cB.height) % 1 === 0 || (rB.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), cB._cachedWrapU = uc.e.CLAMP_ADDRESSMODE, cB._cachedWrapV = uc.e.CLAMP_ADDRESSMODE)
        }
      }
    }, Sc = {
      JSModuleURL: Pc.JSModuleURL,
      WasmModuleURL: Pc.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (cB, Bc) => {
        let nc;
        switch (cB) {
          case Vc.cTFETC1:
            nc = 36196;
            break;
          case Vc.cTFBC1:
            nc = 33776;
            break;
          case Vc.cTFBC4:
            nc = 33779;
            break;
          case Vc.cTFASTC_4x4:
            nc = 37808;
            break;
          case Vc.cTFETC2:
            nc = 37496;
            break;
          case Vc.cTFBC7:
            nc = 36492
        }
        if (void 0 === nc) throw "The chosen Basis transcoder format is not currently supported";
        return nc
      },
      TranscodeAsync: mB,
      LoadTextureFromTranscodeResult: tB
    };
    class yB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(cB, Bc, nc, Vc, rB) {
        if (Array.isArray(cB)) return;
        const uc = Bc.RV().getCaps(),
          sc = {
            supportedCompressionFormats: {
              etc1: !!uc.etc1,
              s3tc: !!uc.s3tc,
              pvrtc: !!uc.pvrtc,
              etc2: !!uc.etc2,
              astc: !!uc.astc,
              bc7: !!uc.bptc
            }
          };
        mB(cB, sc).then((cB => {
          const nc = cB.fileInfo.images[0].levels.length > 1 && Bc.generateMipMaps;
          tB(Bc, cB), Bc.RV()._setCubeMapTextureParams(Bc, nc), Bc.isReady = !0, Bc.onLoadedObservable.notifyObservers(Bc), Bc.onLoadedObservable.clear(), Vc && Vc()
        })).catch((cB => {
          Ic.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Bc.isReady = !0, rB && rB(cB)
        }))
      }
      loadData(cB, Bc, nc) {
        const Vc = Bc.RV().getCaps(),
          rB = {
            supportedCompressionFormats: {
              etc1: !!Vc.etc1,
              s3tc: !!Vc.s3tc,
              pvrtc: !!Vc.pvrtc,
              etc2: !!Vc.etc2,
              astc: !!Vc.astc,
              bc7: !!Vc.bptc
            }
          };
        mB(cB, rB).then((cB => {
          const Vc = cB.fileInfo.images[0].levels[0],
            Ic = cB.fileInfo.images[0].levels.length > 1 && Bc.generateMipMaps;
          nc(Vc.width, Vc.height, Ic, -1 !== cB.format, (() => {
            tB(Bc, cB)
          }))
        })).catch((cB => {
          Ic.g.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Ic.g.Warn(`Failed to transcode Basis file: ${cB}`), nc(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);