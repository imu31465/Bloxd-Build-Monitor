export const id = 301;
export const ids = [301];
export const modules = {
  41542: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      _BasisTextureLoader: () => Hq
    });
    var Yq, lq = gq(39845),
      Oq = gq(38653),
      mq = gq(40233),
      xq = gq(39593);

    function Aq() {
      const qq = 0,
        Eq = 1,
        gq = 2,
        Yq = 3,
        lq = 6,
        Oq = 8,
        mq = 9,
        xq = 10,
        Aq = 14;
      let cq = null;

      function uq(qq, Eq, gq, Yq, lq) {
        const Oq = qq.getImageTranscodedSizeInBytes(Eq, gq, Yq);
        let mq = new Uint8Array(Oq);
        if (!qq.transcodeImage(mq, Eq, gq, Yq, 1, 0)) return null;
        if (lq) {
          mq = function(qq, Eq, gq, Yq) {
            const lq = new Uint16Array(4),
              Oq = new Uint16Array(gq * Yq),
              mq = gq / 4,
              xq = Yq / 4;
            for (let Aq = 0; Aq < xq; Aq++)
              for (let Yq = 0; Yq < mq; Yq++) {
                const xq = Eq + 8 * (Aq * mq + Yq);
                lq[0] = qq[xq] | qq[xq + 1] << 8, lq[1] = qq[xq + 2] | qq[xq + 3] << 8, lq[2] = (2 * (31 & lq[0]) + 1 * (31 & lq[1])) / 3 | (2 * (2016 & lq[0]) + 1 * (2016 & lq[1])) / 3 & 2016 | (2 * (63488 & lq[0]) + 1 * (63488 & lq[1])) / 3 & 63488, lq[3] = (2 * (31 & lq[1]) + 1 * (31 & lq[0])) / 3 | (2 * (2016 & lq[1]) + 1 * (2016 & lq[0])) / 3 & 2016 | (2 * (63488 & lq[1]) + 1 * (63488 & lq[0])) / 3 & 63488;
                for (let Eq = 0; Eq < 4; Eq++) {
                  const mq = qq[xq + 4 + Eq];
                  let cq = (4 * Aq + Eq) * gq + 4 * Yq;
                  Oq[cq++] = lq[3 & mq], Oq[cq++] = lq[mq >> 2 & 3], Oq[cq++] = lq[mq >> 4 & 3], Oq[cq] = lq[mq >> 6 & 3]
                }
              }
            return Oq
          }(mq, 0, qq.getImageWidth(Eq, gq) + 3 & -4, qq.getImageHeight(Eq, gq) + 3 & -4)
        }
        return mq
      }
      onmessage = Bq => {
        if ("init" === Bq.data.action) {
          if (Bq.data.url) try {
            importScripts(Bq.data.url)
          } catch (Wq) {
            postMessage({
              action: "error",
              error: Wq
            })
          }
          cq || (cq = BASIS({
            wasmBinary: Bq.data.wasmBinary
          })), null !== cq && cq.then((qq => {
            BASIS = qq, qq.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Bq.data.action) {
          const cq = Bq.data.config,
            Wq = Bq.data.imageData,
            Nq = new BASIS.BasisFile(Wq),
            aq = function(qq) {
              const Eq = qq.getHasAlpha(),
                gq = qq.getNumImages(),
                Yq = [];
              for (let lq = 0; lq < gq; lq++) {
                const Eq = {
                    levels: []
                  },
                  gq = qq.getNumLevels(lq);
                for (let Yq = 0; Yq < gq; Yq++) {
                  const gq = {
                    width: qq.getImageWidth(lq, Yq),
                    height: qq.getImageHeight(lq, Yq)
                  };
                  Eq.levels.push(gq)
                }
                Yq.push(Eq)
              }
              return {
                hasAlpha: Eq,
                images: Yq
              }
            }(Nq);
          let Vq = Bq.data.ignoreSupportedFormats ? null : function(cq, uq) {
              let Bq = null;
              cq.supportedCompressionFormats && (Bq = cq.supportedCompressionFormats.astc ? xq : cq.supportedCompressionFormats.bc7 ? lq : cq.supportedCompressionFormats.s3tc ? uq.hasAlpha ? Yq : gq : cq.supportedCompressionFormats.pvrtc ? uq.hasAlpha ? mq : Oq : cq.supportedCompressionFormats.etc2 ? Eq : cq.supportedCompressionFormats.etc1 ? qq : Aq);
              return Bq
            }(Bq.data.config, aq),
            dq = !1;
          null === Vq && (dq = !0, Vq = aq.hasAlpha ? Yq : gq);
          let jq = !0;
          Nq.startTranscoding() || (jq = !1);
          const Hq = [];
          for (let qq = 0; qq < aq.images.length && jq; qq++) {
            const Eq = aq.images[qq];
            if (void 0 === cq.loadSingleImage || cq.loadSingleImage === qq) {
              let gq = Eq.levels.length;
              !1 === cq.loadMipmapLevels && (gq = 1);
              for (let Yq = 0; Yq < gq; Yq++) {
                const gq = Eq.levels[Yq],
                  lq = uq(Nq, qq, Yq, Vq, dq);
                if (!lq) {
                  jq = !1;
                  break
                }
                gq.transcodedPixels = lq, Hq.push(gq.transcodedPixels.buffer)
              }
            }
          }
          Nq.close(), Nq.delete(), dq && (Vq = -1), jq ? postMessage({
            action: "transcode",
            success: jq,
            id: Bq.data.id,
            fileInfo: aq,
            format: Vq
          }, Hq) : postMessage({
            action: "transcode",
            success: jq,
            id: Bq.data.id
          })
        }
      }
    }! function(qq) {
      qq[qq.cTFETC1 = 0] = "cTFETC1", qq[qq.cTFETC2 = 1] = "cTFETC2", qq[qq.cTFBC1 = 2] = "cTFBC1", qq[qq.cTFBC3 = 3] = "cTFBC3", qq[qq.cTFBC4 = 4] = "cTFBC4", qq[qq.cTFBC5 = 5] = "cTFBC5", qq[qq.cTFBC7 = 6] = "cTFBC7", qq[qq.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", qq[qq.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", qq[qq.cTFASTC_4x4 = 10] = "cTFASTC_4x4", qq[qq.cTFATC_RGB = 11] = "cTFATC_RGB", qq[qq.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", qq[qq.cTFRGBA32 = 13] = "cTFRGBA32", qq[qq.cTFRGB565 = 14] = "cTFRGB565", qq[qq.cTFBGR565 = 15] = "cTFBGR565", qq[qq.cTFRGBA4444 = 16] = "cTFRGBA4444", qq[qq.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", qq[qq.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", qq[qq.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", qq[qq.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", qq[qq.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Yq || (Yq = {}));
    const cq = {
      JSModuleURL: `${lq.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${lq.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let uq = null,
      Bq = null,
      Wq = 0;
    const Nq = async () => (uq || (uq = new Promise(((qq, Eq) => {
      Bq ? qq(Bq) : lq.f.LoadFileAsync(lq.f.GetBabylonScriptURL(cq.WasmModuleURL)).then((gq => {
        if ("function" !== typeof URL) return Eq("Basis transcoder requires an environment with a URL constructor");
        const Yq = URL.createObjectURL(new Blob([`(${Aq})()`], {
          type: "application/javascript"
        }));
        Bq = new Worker(Yq), async function(qq, Eq, gq) {
          return await new Promise(((Yq, Oq) => {
            const mq = Eq => {
              "init" === Eq.data.action ? (qq.removeEventListener("message", mq), Yq(qq)) : "error" === Eq.data.action && Oq(Eq.data.error || "error initializing worker")
            };
            qq.addEventListener("message", mq), qq.postMessage({
              action: "init",
              url: gq ? lq.f.GetBabylonScriptURL(gq) : void 0,
              wasmBinary: Eq
            }, [Eq])
          }))
        }(Bq, gq, cq.JSModuleURL).then(qq, Eq)
      })).catch(Eq)
    }))), await uq), aq = async (qq, Eq) => {
      const gq = qq instanceof ArrayBuffer ? new Uint8Array(qq) : qq;
      return await new Promise(((qq, Yq) => {
        Nq().then((() => {
          const lq = Wq++,
            Oq = Eq => {
              "transcode" === Eq.data.action && Eq.data.id === lq && (Bq.removeEventListener("message", Oq), Eq.data.success ? qq(Eq.data) : Yq("Transcode is not supported on this device"))
            };
          Bq.addEventListener("message", Oq);
          const mq = new Uint8Array(gq.byteLength);
          mq.set(new Uint8Array(gq.buffer, gq.byteOffset, gq.byteLength)), Bq.postMessage({
            action: "transcode",
            id: lq,
            imageData: mq,
            config: Eq,
            ignoreSupportedFormats: false
          }, [mq.buffer])
        }), (qq => {
          Yq(qq)
        }))
      }))
    }, Vq = (qq, Eq) => {
      let gq = Eq._gl?.TEXTURE_2D;
      qq.isCube && (gq = Eq._gl?.TEXTURE_CUBE_MAP), Eq._bindTextureDirectly(gq, qq, !0)
    }, dq = (qq, Eq) => {
      const gq = qq.Ba();
      for (let lq = 0; lq < Eq.fileInfo.images.length; lq++) {
        const Aq = Eq.fileInfo.images[lq].levels[0];
        if (qq._invertVScale = qq.invertY, -1 === Eq.format || Eq.format === Yq.cTFRGB565)
          if (qq.type = 10, qq.format = 4, !gq._features.basisNeedsPOT || Math.log2(Aq.width) % 1 === 0 && Math.log2(Aq.height) % 1 === 0) qq._invertVScale = !qq.invertY, qq.width = Aq.width + 3 & -4, qq.height = Aq.height + 3 & -4, qq.samplingMode = 2, Vq(qq, gq), gq._uploadDataToTextureDirectly(qq, new Uint16Array(Aq.transcodedPixels.buffer), lq, 0, 4, !0);
          else {
            const Eq = new xq.c(gq, 2);
            qq._invertVScale = qq.invertY, Eq.type = 10, Eq.format = 4, Eq.width = Aq.width + 3 & -4, Eq.height = Aq.height + 3 & -4, Vq(Eq, gq), gq._uploadDataToTextureDirectly(Eq, new Uint16Array(Aq.transcodedPixels.buffer), lq, 0, 4, !0), gq._rescaleTexture(Eq, qq, gq.scenes[0], gq._getInternalFormat(4), (() => {
              gq._releaseTexture(Eq), Vq(qq, gq)
            }))
          }
        else {
          qq.width = Aq.width, qq.height = Aq.height, qq.generateMipMaps = Eq.fileInfo.images[lq].levels.length > 1;
          const Yq = jq.GetInternalFormatFromBasisFormat(Eq.format, gq);
          qq.format = Yq, Vq(qq, gq);
          const xq = Eq.fileInfo.images[lq].levels;
          for (let Eq = 0; Eq < xq.length; Eq++) {
            const Oq = xq[Eq];
            gq._uploadCompressedDataToTextureDirectly(qq, Yq, Oq.width, Oq.height, Oq.transcodedPixels, lq, Eq)
          }!gq._features.basisNeedsPOT || Math.log2(qq.width) % 1 === 0 && Math.log2(qq.height) % 1 === 0 || (Oq.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), qq._cachedWrapU = mq.d.CLAMP_ADDRESSMODE, qq._cachedWrapV = mq.d.CLAMP_ADDRESSMODE)
        }
      }
    }, jq = {
      JSModuleURL: cq.JSModuleURL,
      WasmModuleURL: cq.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (qq, Eq) => {
        let gq;
        switch (qq) {
          case Yq.cTFETC1:
            gq = 36196;
            break;
          case Yq.cTFBC1:
            gq = 33776;
            break;
          case Yq.cTFBC4:
            gq = 33779;
            break;
          case Yq.cTFASTC_4x4:
            gq = 37808;
            break;
          case Yq.cTFETC2:
            gq = 37496;
            break;
          case Yq.cTFBC7:
            gq = 36492
        }
        if (void 0 === gq) throw "The chosen Basis transcoder format is not currently supported";
        return gq
      },
      TranscodeAsync: aq,
      LoadTextureFromTranscodeResult: dq
    };
    class Hq {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(qq, Eq, gq, Yq, Oq) {
        if (Array.isArray(qq)) return;
        const mq = Eq.Ba().getCaps(),
          xq = {
            supportedCompressionFormats: {
              etc1: !!mq.etc1,
              s3tc: !!mq.s3tc,
              pvrtc: !!mq.pvrtc,
              etc2: !!mq.etc2,
              astc: !!mq.astc,
              bc7: !!mq.bptc
            }
          };
        aq(qq, xq).then((qq => {
          const gq = qq.fileInfo.images[0].levels.length > 1 && Eq.generateMipMaps;
          dq(Eq, qq), Eq.Ba()._setCubeMapTextureParams(Eq, gq), Eq.isReady = !0, Eq.onLoadedObservable.notifyObservers(Eq), Eq.onLoadedObservable.clear(), Yq && Yq()
        })).catch((qq => {
          lq.f.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), Eq.isReady = !0, Oq && Oq(qq)
        }))
      }
      loadData(qq, Eq, gq) {
        const Yq = Eq.Ba().getCaps(),
          Oq = {
            supportedCompressionFormats: {
              etc1: !!Yq.etc1,
              s3tc: !!Yq.s3tc,
              pvrtc: !!Yq.pvrtc,
              etc2: !!Yq.etc2,
              astc: !!Yq.astc,
              bc7: !!Yq.bptc
            }
          };
        aq(qq, Oq).then((qq => {
          const Yq = qq.fileInfo.images[0].levels[0],
            lq = qq.fileInfo.images[0].levels.length > 1 && Eq.generateMipMaps;
          gq(Yq.width, Yq.height, lq, -1 !== qq.format, (() => {
            dq(Eq, qq)
          }))
        })).catch((qq => {
          lq.f.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), lq.f.Warn(`Failed to transcode Basis file: ${qq}`), gq(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);