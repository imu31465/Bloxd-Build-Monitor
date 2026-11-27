export const id = 619;
export const ids = [619];
export const modules = {
  44986: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      _BasisTextureLoader: () => ze
    });
    var ye, be = He(41203),
      Me = He(39467),
      Ke = He(41593),
      Ue = He(40924);

    function Fe() {
      const ee = 0,
        ie = 1,
        He = 2,
        ye = 3,
        be = 6,
        Me = 8,
        Ke = 9,
        Ue = 10,
        Fe = 14;
      let Je = null;

      function oe(ee, ie, He, ye, be) {
        const Me = ee.getImageTranscodedSizeInBytes(ie, He, ye);
        let Ke = new Uint8Array(Me);
        if (!ee.transcodeImage(Ke, ie, He, ye, 1, 0)) return null;
        if (be) {
          Ke = function(ee, ie, He, ye) {
            const be = new Uint16Array(4),
              Me = new Uint16Array(He * ye),
              Ke = He / 4,
              Ue = ye / 4;
            for (let Fe = 0; Fe < Ue; Fe++)
              for (let ye = 0; ye < Ke; ye++) {
                const Ue = ie + 8 * (Fe * Ke + ye);
                be[0] = ee[Ue] | ee[Ue + 1] << 8, be[1] = ee[Ue + 2] | ee[Ue + 3] << 8, be[2] = (2 * (31 & be[0]) + 1 * (31 & be[1])) / 3 | (2 * (2016 & be[0]) + 1 * (2016 & be[1])) / 3 & 2016 | (2 * (63488 & be[0]) + 1 * (63488 & be[1])) / 3 & 63488, be[3] = (2 * (31 & be[1]) + 1 * (31 & be[0])) / 3 | (2 * (2016 & be[1]) + 1 * (2016 & be[0])) / 3 & 2016 | (2 * (63488 & be[1]) + 1 * (63488 & be[0])) / 3 & 63488;
                for (let ie = 0; ie < 4; ie++) {
                  const Ke = ee[Ue + 4 + ie];
                  let Je = (4 * Fe + ie) * He + 4 * ye;
                  Me[Je++] = be[3 & Ke], Me[Je++] = be[Ke >> 2 & 3], Me[Je++] = be[Ke >> 4 & 3], Me[Je] = be[Ke >> 6 & 3]
                }
              }
            return Me
          }(Ke, 0, ee.getImageWidth(ie, He) + 3 & -4, ee.getImageHeight(ie, He) + 3 & -4)
        }
        return Ke
      }
      onmessage = Re => {
        if ("init" === Re.data.action) {
          if (Re.data.url) try {
            importScripts(Re.data.url)
          } catch (ke) {
            postMessage({
              action: "error",
              error: ke
            })
          }
          Je || (Je = BASIS({
            wasmBinary: Re.data.wasmBinary
          })), null !== Je && Je.then((ee => {
            BASIS = ee, ee.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Re.data.action) {
          const Je = Re.data.config,
            ke = Re.data.imageData,
            qe = new BASIS.BasisFile(ke),
            fe = function(ee) {
              const ie = ee.getHasAlpha(),
                He = ee.getNumImages(),
                ye = [];
              for (let be = 0; be < He; be++) {
                const ie = {
                    levels: []
                  },
                  He = ee.getNumLevels(be);
                for (let ye = 0; ye < He; ye++) {
                  const He = {
                    width: ee.getImageWidth(be, ye),
                    height: ee.getImageHeight(be, ye)
                  };
                  ie.levels.push(He)
                }
                ye.push(ie)
              }
              return {
                hasAlpha: ie,
                images: ye
              }
            }(qe);
          let Te = Re.data.ignoreSupportedFormats ? null : function(Je, oe) {
              let Re = null;
              Je.supportedCompressionFormats && (Re = Je.supportedCompressionFormats.astc ? Ue : Je.supportedCompressionFormats.bc7 ? be : Je.supportedCompressionFormats.s3tc ? oe.hasAlpha ? ye : He : Je.supportedCompressionFormats.pvrtc ? oe.hasAlpha ? Ke : Me : Je.supportedCompressionFormats.etc2 ? ie : Je.supportedCompressionFormats.etc1 ? ee : Fe);
              return Re
            }(Re.data.config, fe),
            pe = !1;
          null === Te && (pe = !0, Te = fe.hasAlpha ? ye : He);
          let Xe = !0;
          qe.startTranscoding() || (Xe = !1);
          const ze = [];
          for (let ee = 0; ee < fe.images.length && Xe; ee++) {
            const ie = fe.images[ee];
            if (void 0 === Je.loadSingleImage || Je.loadSingleImage === ee) {
              let He = ie.levels.length;
              !1 === Je.loadMipmapLevels && (He = 1);
              for (let ye = 0; ye < He; ye++) {
                const He = ie.levels[ye],
                  be = oe(qe, ee, ye, Te, pe);
                if (!be) {
                  Xe = !1;
                  break
                }
                He.transcodedPixels = be, ze.push(He.transcodedPixels.buffer)
              }
            }
          }
          qe.close(), qe.delete(), pe && (Te = -1), Xe ? postMessage({
            action: "transcode",
            success: Xe,
            id: Re.data.id,
            fileInfo: fe,
            format: Te
          }, ze) : postMessage({
            action: "transcode",
            success: Xe,
            id: Re.data.id
          })
        }
      }
    }! function(ee) {
      ee[ee.cTFETC1 = 0] = "cTFETC1", ee[ee.cTFETC2 = 1] = "cTFETC2", ee[ee.cTFBC1 = 2] = "cTFBC1", ee[ee.cTFBC3 = 3] = "cTFBC3", ee[ee.cTFBC4 = 4] = "cTFBC4", ee[ee.cTFBC5 = 5] = "cTFBC5", ee[ee.cTFBC7 = 6] = "cTFBC7", ee[ee.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", ee[ee.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", ee[ee.cTFASTC_4x4 = 10] = "cTFASTC_4x4", ee[ee.cTFATC_RGB = 11] = "cTFATC_RGB", ee[ee.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", ee[ee.cTFRGBA32 = 13] = "cTFRGBA32", ee[ee.cTFRGB565 = 14] = "cTFRGB565", ee[ee.cTFBGR565 = 15] = "cTFBGR565", ee[ee.cTFRGBA4444 = 16] = "cTFRGBA4444", ee[ee.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", ee[ee.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", ee[ee.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", ee[ee.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", ee[ee.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(ye || (ye = {}));
    const Je = {
      JSModuleURL: `${be.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${be.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let oe = null,
      Re = null,
      ke = 0;
    const qe = async () => (oe || (oe = new Promise(((ee, ie) => {
      Re ? ee(Re) : be.h.LoadFileAsync(be.h.GetBabylonScriptURL(Je.WasmModuleURL)).then((He => {
        if ("function" !== typeof URL) return ie("Basis transcoder requires an environment with a URL constructor");
        const ye = URL.createObjectURL(new Blob([`(${Fe})()`], {
          type: "application/javascript"
        }));
        Re = new Worker(ye), async function(ee, ie, He) {
          return await new Promise(((ye, Me) => {
            const Ke = ie => {
              "init" === ie.data.action ? (ee.removeEventListener("message", Ke), ye(ee)) : "error" === ie.data.action && Me(ie.data.error || "error initializing worker")
            };
            ee.addEventListener("message", Ke), ee.postMessage({
              action: "init",
              url: He ? be.h.GetBabylonScriptURL(He) : void 0,
              wasmBinary: ie
            }, [ie])
          }))
        }(Re, He, Je.JSModuleURL).then(ee, ie)
      })).catch(ie)
    }))), await oe), fe = async (ee, ie) => {
      const He = ee instanceof ArrayBuffer ? new Uint8Array(ee) : ee;
      return await new Promise(((ee, ye) => {
        qe().then((() => {
          const be = ke++,
            Me = ie => {
              "transcode" === ie.data.action && ie.data.id === be && (Re.removeEventListener("message", Me), ie.data.success ? ee(ie.data) : ye("Transcode is not supported on this device"))
            };
          Re.addEventListener("message", Me);
          const Ke = new Uint8Array(He.byteLength);
          Ke.set(new Uint8Array(He.buffer, He.byteOffset, He.byteLength)), Re.postMessage({
            action: "transcode",
            id: be,
            imageData: Ke,
            config: ie,
            ignoreSupportedFormats: false
          }, [Ke.buffer])
        }), (ee => {
          ye(ee)
        }))
      }))
    }, Te = (ee, ie) => {
      let He = ie._gl?.TEXTURE_2D;
      ee.isCube && (He = ie._gl?.TEXTURE_CUBE_MAP), ie._bindTextureDirectly(He, ee, !0)
    }, pe = (ee, ie) => {
      const He = ee.Nf();
      for (let be = 0; be < ie.fileInfo.images.length; be++) {
        const Fe = ie.fileInfo.images[be].levels[0];
        if (ee._invertVScale = ee.invertY, -1 === ie.format || ie.format === ye.cTFRGB565)
          if (ee.type = 10, ee.format = 4, !He._features.basisNeedsPOT || Math.log2(Fe.width) % 1 === 0 && Math.log2(Fe.height) % 1 === 0) ee._invertVScale = !ee.invertY, ee.width = Fe.width + 3 & -4, ee.height = Fe.height + 3 & -4, ee.samplingMode = 2, Te(ee, He), He._uploadDataToTextureDirectly(ee, new Uint16Array(Fe.transcodedPixels.buffer), be, 0, 4, !0);
          else {
            const ie = new Ue.b(He, 2);
            ee._invertVScale = ee.invertY, ie.type = 10, ie.format = 4, ie.width = Fe.width + 3 & -4, ie.height = Fe.height + 3 & -4, Te(ie, He), He._uploadDataToTextureDirectly(ie, new Uint16Array(Fe.transcodedPixels.buffer), be, 0, 4, !0), He._rescaleTexture(ie, ee, He.scenes[0], He._getInternalFormat(4), (() => {
              He._releaseTexture(ie), Te(ee, He)
            }))
          }
        else {
          ee.width = Fe.width, ee.height = Fe.height, ee.generateMipMaps = ie.fileInfo.images[be].levels.length > 1;
          const ye = Xe.GetInternalFormatFromBasisFormat(ie.format, He);
          ee.format = ye, Te(ee, He);
          const Ue = ie.fileInfo.images[be].levels;
          for (let ie = 0; ie < Ue.length; ie++) {
            const Me = Ue[ie];
            He._uploadCompressedDataToTextureDirectly(ee, ye, Me.width, Me.height, Me.transcodedPixels, be, ie)
          }!He._features.basisNeedsPOT || Math.log2(ee.width) % 1 === 0 && Math.log2(ee.height) % 1 === 0 || (Me.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), ee._cachedWrapU = Ke.e.CLAMP_ADDRESSMODE, ee._cachedWrapV = Ke.e.CLAMP_ADDRESSMODE)
        }
      }
    }, Xe = {
      JSModuleURL: Je.JSModuleURL,
      WasmModuleURL: Je.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (ee, ie) => {
        let He;
        switch (ee) {
          case ye.cTFETC1:
            He = 36196;
            break;
          case ye.cTFBC1:
            He = 33776;
            break;
          case ye.cTFBC4:
            He = 33779;
            break;
          case ye.cTFASTC_4x4:
            He = 37808;
            break;
          case ye.cTFETC2:
            He = 37496;
            break;
          case ye.cTFBC7:
            He = 36492
        }
        if (void 0 === He) throw "The chosen Basis transcoder format is not currently supported";
        return He
      },
      TranscodeAsync: fe,
      LoadTextureFromTranscodeResult: pe
    };
    class ze {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(ee, ie, He, ye, Me) {
        if (Array.isArray(ee)) return;
        const Ke = ie.Nf().getCaps(),
          Ue = {
            supportedCompressionFormats: {
              etc1: !!Ke.etc1,
              s3tc: !!Ke.s3tc,
              pvrtc: !!Ke.pvrtc,
              etc2: !!Ke.etc2,
              astc: !!Ke.astc,
              bc7: !!Ke.bptc
            }
          };
        fe(ee, Ue).then((ee => {
          const He = ee.fileInfo.images[0].levels.length > 1 && ie.generateMipMaps;
          pe(ie, ee), ie.Nf()._setCubeMapTextureParams(ie, He), ie.isReady = !0, ie.onLoadedObservable.notifyObservers(ie), ie.onLoadedObservable.clear(), ye && ye()
        })).catch((ee => {
          be.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), ie.isReady = !0, Me && Me(ee)
        }))
      }
      loadData(ee, ie, He) {
        const ye = ie.Nf().getCaps(),
          Me = {
            supportedCompressionFormats: {
              etc1: !!ye.etc1,
              s3tc: !!ye.s3tc,
              pvrtc: !!ye.pvrtc,
              etc2: !!ye.etc2,
              astc: !!ye.astc,
              bc7: !!ye.bptc
            }
          };
        fe(ee, Me).then((ee => {
          const ye = ee.fileInfo.images[0].levels[0],
            be = ee.fileInfo.images[0].levels.length > 1 && ie.generateMipMaps;
          He(ye.width, ye.height, be, -1 !== ee.format, (() => {
            pe(ie, ee)
          }))
        })).catch((ee => {
          be.h.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), be.h.Warn(`Failed to transcode Basis file: ${ee}`), He(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);