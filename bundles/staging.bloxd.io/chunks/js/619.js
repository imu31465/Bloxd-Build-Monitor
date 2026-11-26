export const id = 619;
export const ids = [619];
export const modules = {
  44683: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      _BasisTextureLoader: () => jV
    });
    var JV, YV = xV(41341),
      UV = xV(39870),
      yV = xV(41738),
      pV = xV(41077);

    function QV() {
      const VV = 0,
        eV = 1,
        xV = 2,
        JV = 3,
        YV = 6,
        UV = 8,
        yV = 9,
        pV = 10,
        QV = 14;
      let nV = null;

      function wV(VV, eV, xV, JV, YV) {
        const UV = VV.getImageTranscodedSizeInBytes(eV, xV, JV);
        let yV = new Uint8Array(UV);
        if (!VV.transcodeImage(yV, eV, xV, JV, 1, 0)) return null;
        if (YV) {
          yV = function(VV, eV, xV, JV) {
            const YV = new Uint16Array(4),
              UV = new Uint16Array(xV * JV),
              yV = xV / 4,
              pV = JV / 4;
            for (let QV = 0; QV < pV; QV++)
              for (let JV = 0; JV < yV; JV++) {
                const pV = eV + 8 * (QV * yV + JV);
                YV[0] = VV[pV] | VV[pV + 1] << 8, YV[1] = VV[pV + 2] | VV[pV + 3] << 8, YV[2] = (2 * (31 & YV[0]) + 1 * (31 & YV[1])) / 3 | (2 * (2016 & YV[0]) + 1 * (2016 & YV[1])) / 3 & 2016 | (2 * (63488 & YV[0]) + 1 * (63488 & YV[1])) / 3 & 63488, YV[3] = (2 * (31 & YV[1]) + 1 * (31 & YV[0])) / 3 | (2 * (2016 & YV[1]) + 1 * (2016 & YV[0])) / 3 & 2016 | (2 * (63488 & YV[1]) + 1 * (63488 & YV[0])) / 3 & 63488;
                for (let eV = 0; eV < 4; eV++) {
                  const yV = VV[pV + 4 + eV];
                  let nV = (4 * QV + eV) * xV + 4 * JV;
                  UV[nV++] = YV[3 & yV], UV[nV++] = YV[yV >> 2 & 3], UV[nV++] = YV[yV >> 4 & 3], UV[nV] = YV[yV >> 6 & 3]
                }
              }
            return UV
          }(yV, 0, VV.getImageWidth(eV, xV) + 3 & -4, VV.getImageHeight(eV, xV) + 3 & -4)
        }
        return yV
      }
      onmessage = ZV => {
        if ("init" === ZV.data.action) {
          if (ZV.data.url) try {
            importScripts(ZV.data.url)
          } catch (vV) {
            postMessage({
              action: "error",
              error: vV
            })
          }
          nV || (nV = BASIS({
            wasmBinary: ZV.data.wasmBinary
          })), null !== nV && nV.then((VV => {
            BASIS = VV, VV.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === ZV.data.action) {
          const nV = ZV.data.config,
            vV = ZV.data.imageData,
            rV = new BASIS.BasisFile(vV),
            kV = function(VV) {
              const eV = VV.getHasAlpha(),
                xV = VV.getNumImages(),
                JV = [];
              for (let YV = 0; YV < xV; YV++) {
                const eV = {
                    levels: []
                  },
                  xV = VV.getNumLevels(YV);
                for (let JV = 0; JV < xV; JV++) {
                  const xV = {
                    width: VV.getImageWidth(YV, JV),
                    height: VV.getImageHeight(YV, JV)
                  };
                  eV.levels.push(xV)
                }
                JV.push(eV)
              }
              return {
                hasAlpha: eV,
                images: JV
              }
            }(rV);
          let bV = ZV.data.ignoreSupportedFormats ? null : function(nV, wV) {
              let ZV = null;
              nV.supportedCompressionFormats && (ZV = nV.supportedCompressionFormats.astc ? pV : nV.supportedCompressionFormats.bc7 ? YV : nV.supportedCompressionFormats.s3tc ? wV.hasAlpha ? JV : xV : nV.supportedCompressionFormats.pvrtc ? wV.hasAlpha ? yV : UV : nV.supportedCompressionFormats.etc2 ? eV : nV.supportedCompressionFormats.etc1 ? VV : QV);
              return ZV
            }(ZV.data.config, kV),
            EV = !1;
          null === bV && (EV = !0, bV = kV.hasAlpha ? JV : xV);
          let BV = !0;
          rV.startTranscoding() || (BV = !1);
          const jV = [];
          for (let VV = 0; VV < kV.images.length && BV; VV++) {
            const eV = kV.images[VV];
            if (void 0 === nV.loadSingleImage || nV.loadSingleImage === VV) {
              let xV = eV.levels.length;
              !1 === nV.loadMipmapLevels && (xV = 1);
              for (let JV = 0; JV < xV; JV++) {
                const xV = eV.levels[JV],
                  YV = wV(rV, VV, JV, bV, EV);
                if (!YV) {
                  BV = !1;
                  break
                }
                xV.transcodedPixels = YV, jV.push(xV.transcodedPixels.buffer)
              }
            }
          }
          rV.close(), rV.delete(), EV && (bV = -1), BV ? postMessage({
            action: "transcode",
            success: BV,
            id: ZV.data.id,
            fileInfo: kV,
            format: bV
          }, jV) : postMessage({
            action: "transcode",
            success: BV,
            id: ZV.data.id
          })
        }
      }
    }! function(VV) {
      VV[VV.cTFETC1 = 0] = "cTFETC1", VV[VV.cTFETC2 = 1] = "cTFETC2", VV[VV.cTFBC1 = 2] = "cTFBC1", VV[VV.cTFBC3 = 3] = "cTFBC3", VV[VV.cTFBC4 = 4] = "cTFBC4", VV[VV.cTFBC5 = 5] = "cTFBC5", VV[VV.cTFBC7 = 6] = "cTFBC7", VV[VV.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", VV[VV.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", VV[VV.cTFASTC_4x4 = 10] = "cTFASTC_4x4", VV[VV.cTFATC_RGB = 11] = "cTFATC_RGB", VV[VV.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", VV[VV.cTFRGBA32 = 13] = "cTFRGBA32", VV[VV.cTFRGB565 = 14] = "cTFRGB565", VV[VV.cTFBGR565 = 15] = "cTFBGR565", VV[VV.cTFRGBA4444 = 16] = "cTFRGBA4444", VV[VV.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", VV[VV.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", VV[VV.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", VV[VV.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", VV[VV.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(JV || (JV = {}));
    const nV = {
      JSModuleURL: `${YV.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${YV.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let wV = null,
      ZV = null,
      vV = 0;
    const rV = async () => (wV || (wV = new Promise(((VV, eV) => {
      ZV ? VV(ZV) : YV.j.LoadFileAsync(YV.j.GetBabylonScriptURL(nV.WasmModuleURL)).then((xV => {
        if ("function" !== typeof URL) return eV("Basis transcoder requires an environment with a URL constructor");
        const JV = URL.createObjectURL(new Blob([`(${QV})()`], {
          type: "application/javascript"
        }));
        ZV = new Worker(JV), async function(VV, eV, xV) {
          return await new Promise(((JV, UV) => {
            const yV = eV => {
              "init" === eV.data.action ? (VV.removeEventListener("message", yV), JV(VV)) : "error" === eV.data.action && UV(eV.data.error || "error initializing worker")
            };
            VV.addEventListener("message", yV), VV.postMessage({
              action: "init",
              url: xV ? YV.j.GetBabylonScriptURL(xV) : void 0,
              wasmBinary: eV
            }, [eV])
          }))
        }(ZV, xV, nV.JSModuleURL).then(VV, eV)
      })).catch(eV)
    }))), await wV), kV = async (VV, eV) => {
      const xV = VV instanceof ArrayBuffer ? new Uint8Array(VV) : VV;
      return await new Promise(((VV, JV) => {
        rV().then((() => {
          const YV = vV++,
            UV = eV => {
              "transcode" === eV.data.action && eV.data.id === YV && (ZV.removeEventListener("message", UV), eV.data.success ? VV(eV.data) : JV("Transcode is not supported on this device"))
            };
          ZV.addEventListener("message", UV);
          const yV = new Uint8Array(xV.byteLength);
          yV.set(new Uint8Array(xV.buffer, xV.byteOffset, xV.byteLength)), ZV.postMessage({
            action: "transcode",
            id: YV,
            imageData: yV,
            config: eV,
            ignoreSupportedFormats: false
          }, [yV.buffer])
        }), (VV => {
          JV(VV)
        }))
      }))
    }, bV = (VV, eV) => {
      let xV = eV._gl?.TEXTURE_2D;
      VV.isCube && (xV = eV._gl?.TEXTURE_CUBE_MAP), eV._bindTextureDirectly(xV, VV, !0)
    }, EV = (VV, eV) => {
      const xV = VV.sk();
      for (let YV = 0; YV < eV.fileInfo.images.length; YV++) {
        const QV = eV.fileInfo.images[YV].levels[0];
        if (VV._invertVScale = VV.invertY, -1 === eV.format || eV.format === JV.cTFRGB565)
          if (VV.type = 10, VV.format = 4, !xV._features.basisNeedsPOT || Math.log2(QV.width) % 1 === 0 && Math.log2(QV.height) % 1 === 0) VV._invertVScale = !VV.invertY, VV.width = QV.width + 3 & -4, VV.height = QV.height + 3 & -4, VV.samplingMode = 2, bV(VV, xV), xV._uploadDataToTextureDirectly(VV, new Uint16Array(QV.transcodedPixels.buffer), YV, 0, 4, !0);
          else {
            const eV = new pV.e(xV, 2);
            VV._invertVScale = VV.invertY, eV.type = 10, eV.format = 4, eV.width = QV.width + 3 & -4, eV.height = QV.height + 3 & -4, bV(eV, xV), xV._uploadDataToTextureDirectly(eV, new Uint16Array(QV.transcodedPixels.buffer), YV, 0, 4, !0), xV._rescaleTexture(eV, VV, xV.scenes[0], xV._getInternalFormat(4), (() => {
              xV._releaseTexture(eV), bV(VV, xV)
            }))
          }
        else {
          VV.width = QV.width, VV.height = QV.height, VV.generateMipMaps = eV.fileInfo.images[YV].levels.length > 1;
          const JV = BV.GetInternalFormatFromBasisFormat(eV.format, xV);
          VV.format = JV, bV(VV, xV);
          const pV = eV.fileInfo.images[YV].levels;
          for (let eV = 0; eV < pV.length; eV++) {
            const UV = pV[eV];
            xV._uploadCompressedDataToTextureDirectly(VV, JV, UV.width, UV.height, UV.transcodedPixels, YV, eV)
          }!xV._features.basisNeedsPOT || Math.log2(VV.width) % 1 === 0 && Math.log2(VV.height) % 1 === 0 || (UV.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), VV._cachedWrapU = yV.f.CLAMP_ADDRESSMODE, VV._cachedWrapV = yV.f.CLAMP_ADDRESSMODE)
        }
      }
    }, BV = {
      JSModuleURL: nV.JSModuleURL,
      WasmModuleURL: nV.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (VV, eV) => {
        let xV;
        switch (VV) {
          case JV.cTFETC1:
            xV = 36196;
            break;
          case JV.cTFBC1:
            xV = 33776;
            break;
          case JV.cTFBC4:
            xV = 33779;
            break;
          case JV.cTFASTC_4x4:
            xV = 37808;
            break;
          case JV.cTFETC2:
            xV = 37496;
            break;
          case JV.cTFBC7:
            xV = 36492
        }
        if (void 0 === xV) throw "The chosen Basis transcoder format is not currently supported";
        return xV
      },
      TranscodeAsync: kV,
      LoadTextureFromTranscodeResult: EV
    };
    class jV {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(VV, eV, xV, JV, UV) {
        if (Array.isArray(VV)) return;
        const yV = eV.sk().getCaps(),
          pV = {
            supportedCompressionFormats: {
              etc1: !!yV.etc1,
              s3tc: !!yV.s3tc,
              pvrtc: !!yV.pvrtc,
              etc2: !!yV.etc2,
              astc: !!yV.astc,
              bc7: !!yV.bptc
            }
          };
        kV(VV, pV).then((VV => {
          const xV = VV.fileInfo.images[0].levels.length > 1 && eV.generateMipMaps;
          EV(eV, VV), eV.sk()._setCubeMapTextureParams(eV, xV), eV.isReady = !0, eV.onLoadedObservable.notifyObservers(eV), eV.onLoadedObservable.clear(), JV && JV()
        })).catch((VV => {
          YV.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), eV.isReady = !0, UV && UV(VV)
        }))
      }
      loadData(VV, eV, xV) {
        const JV = eV.sk().getCaps(),
          UV = {
            supportedCompressionFormats: {
              etc1: !!JV.etc1,
              s3tc: !!JV.s3tc,
              pvrtc: !!JV.pvrtc,
              etc2: !!JV.etc2,
              astc: !!JV.astc,
              bc7: !!JV.bptc
            }
          };
        kV(VV, UV).then((VV => {
          const JV = VV.fileInfo.images[0].levels[0],
            YV = VV.fileInfo.images[0].levels.length > 1 && eV.generateMipMaps;
          xV(JV.width, JV.height, YV, -1 !== VV.format, (() => {
            EV(eV, VV)
          }))
        })).catch((VV => {
          YV.j.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), YV.j.Warn(`Failed to transcode Basis file: ${VV}`), xV(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);