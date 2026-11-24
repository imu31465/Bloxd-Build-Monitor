export const id = 315;
export const ids = [315];
export const modules = {
  42046: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      _BasisTextureLoader: () => tp
    });
    var Op, op = cp(40304),
      Ip = cp(38905),
      Sp = cp(40654),
      xp = cp(40033);

    function Lp() {
      const pp = 0,
        ip = 1,
        cp = 2,
        Op = 3,
        op = 6,
        Ip = 8,
        Sp = 9,
        xp = 10,
        Lp = 14;
      let Yp = null;

      function Dp(pp, ip, cp, Op, op) {
        const Ip = pp.getImageTranscodedSizeInBytes(ip, cp, Op);
        let Sp = new Uint8Array(Ip);
        if (!pp.transcodeImage(Sp, ip, cp, Op, 1, 0)) return null;
        if (op) {
          Sp = function(pp, ip, cp, Op) {
            const op = new Uint16Array(4),
              Ip = new Uint16Array(cp * Op),
              Sp = cp / 4,
              xp = Op / 4;
            for (let Lp = 0; Lp < xp; Lp++)
              for (let Op = 0; Op < Sp; Op++) {
                const xp = ip + 8 * (Lp * Sp + Op);
                op[0] = pp[xp] | pp[xp + 1] << 8, op[1] = pp[xp + 2] | pp[xp + 3] << 8, op[2] = (2 * (31 & op[0]) + 1 * (31 & op[1])) / 3 | (2 * (2016 & op[0]) + 1 * (2016 & op[1])) / 3 & 2016 | (2 * (63488 & op[0]) + 1 * (63488 & op[1])) / 3 & 63488, op[3] = (2 * (31 & op[1]) + 1 * (31 & op[0])) / 3 | (2 * (2016 & op[1]) + 1 * (2016 & op[0])) / 3 & 2016 | (2 * (63488 & op[1]) + 1 * (63488 & op[0])) / 3 & 63488;
                for (let ip = 0; ip < 4; ip++) {
                  const Sp = pp[xp + 4 + ip];
                  let Yp = (4 * Lp + ip) * cp + 4 * Op;
                  Ip[Yp++] = op[3 & Sp], Ip[Yp++] = op[Sp >> 2 & 3], Ip[Yp++] = op[Sp >> 4 & 3], Ip[Yp] = op[Sp >> 6 & 3]
                }
              }
            return Ip
          }(Sp, 0, pp.getImageWidth(ip, cp) + 3 & -4, pp.getImageHeight(ip, cp) + 3 & -4)
        }
        return Sp
      }
      onmessage = Ap => {
        if ("init" === Ap.data.action) {
          if (Ap.data.url) try {
            importScripts(Ap.data.url)
          } catch (Pp) {
            postMessage({
              action: "error",
              error: Pp
            })
          }
          Yp || (Yp = BASIS({
            wasmBinary: Ap.data.wasmBinary
          })), null !== Yp && Yp.then((pp => {
            BASIS = pp, pp.initializeBasis(), postMessage({
              action: "init"
            })
          }))
        } else if ("transcode" === Ap.data.action) {
          const Yp = Ap.data.config,
            Pp = Ap.data.imageData,
            Wp = new BASIS.BasisFile(Pp),
            yp = function(pp) {
              const ip = pp.getHasAlpha(),
                cp = pp.getNumImages(),
                Op = [];
              for (let op = 0; op < cp; op++) {
                const ip = {
                    levels: []
                  },
                  cp = pp.getNumLevels(op);
                for (let Op = 0; Op < cp; Op++) {
                  const cp = {
                    width: pp.getImageWidth(op, Op),
                    height: pp.getImageHeight(op, Op)
                  };
                  ip.levels.push(cp)
                }
                Op.push(ip)
              }
              return {
                hasAlpha: ip,
                images: Op
              }
            }(Wp);
          let Up = Ap.data.ignoreSupportedFormats ? null : function(Yp, Dp) {
              let Ap = null;
              Yp.supportedCompressionFormats && (Ap = Yp.supportedCompressionFormats.astc ? xp : Yp.supportedCompressionFormats.bc7 ? op : Yp.supportedCompressionFormats.s3tc ? Dp.hasAlpha ? Op : cp : Yp.supportedCompressionFormats.pvrtc ? Dp.hasAlpha ? Sp : Ip : Yp.supportedCompressionFormats.etc2 ? ip : Yp.supportedCompressionFormats.etc1 ? pp : Lp);
              return Ap
            }(Ap.data.config, yp),
            wp = !1;
          null === Up && (wp = !0, Up = yp.hasAlpha ? Op : cp);
          let vp = !0;
          Wp.startTranscoding() || (vp = !1);
          const tp = [];
          for (let pp = 0; pp < yp.images.length && vp; pp++) {
            const ip = yp.images[pp];
            if (void 0 === Yp.loadSingleImage || Yp.loadSingleImage === pp) {
              let cp = ip.levels.length;
              !1 === Yp.loadMipmapLevels && (cp = 1);
              for (let Op = 0; Op < cp; Op++) {
                const cp = ip.levels[Op],
                  op = Dp(Wp, pp, Op, Up, wp);
                if (!op) {
                  vp = !1;
                  break
                }
                cp.transcodedPixels = op, tp.push(cp.transcodedPixels.buffer)
              }
            }
          }
          Wp.close(), Wp.delete(), wp && (Up = -1), vp ? postMessage({
            action: "transcode",
            success: vp,
            id: Ap.data.id,
            fileInfo: yp,
            format: Up
          }, tp) : postMessage({
            action: "transcode",
            success: vp,
            id: Ap.data.id
          })
        }
      }
    }! function(pp) {
      pp[pp.cTFETC1 = 0] = "cTFETC1", pp[pp.cTFETC2 = 1] = "cTFETC2", pp[pp.cTFBC1 = 2] = "cTFBC1", pp[pp.cTFBC3 = 3] = "cTFBC3", pp[pp.cTFBC4 = 4] = "cTFBC4", pp[pp.cTFBC5 = 5] = "cTFBC5", pp[pp.cTFBC7 = 6] = "cTFBC7", pp[pp.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", pp[pp.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA", pp[pp.cTFASTC_4x4 = 10] = "cTFASTC_4x4", pp[pp.cTFATC_RGB = 11] = "cTFATC_RGB", pp[pp.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA", pp[pp.cTFRGBA32 = 13] = "cTFRGBA32", pp[pp.cTFRGB565 = 14] = "cTFRGB565", pp[pp.cTFBGR565 = 15] = "cTFBGR565", pp[pp.cTFRGBA4444 = 16] = "cTFRGBA4444", pp[pp.cTFFXT1_RGB = 17] = "cTFFXT1_RGB", pp[pp.cTFPVRTC2_4_RGB = 18] = "cTFPVRTC2_4_RGB", pp[pp.cTFPVRTC2_4_RGBA = 19] = "cTFPVRTC2_4_RGBA", pp[pp.cTFETC2_EAC_R11 = 20] = "cTFETC2_EAC_R11", pp[pp.cTFETC2_EAC_RG11 = 21] = "cTFETC2_EAC_RG11"
    }(Op || (Op = {}));
    const Yp = {
      JSModuleURL: `${op.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
      WasmModuleURL: `${op.i._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
    };
    let Dp = null,
      Ap = null,
      Pp = 0;
    const Wp = async () => (Dp || (Dp = new Promise(((pp, ip) => {
      Ap ? pp(Ap) : op.i.LoadFileAsync(op.i.GetBabylonScriptURL(Yp.WasmModuleURL)).then((cp => {
        if ("function" !== typeof URL) return ip("Basis transcoder requires an environment with a URL constructor");
        const Op = URL.createObjectURL(new Blob([`(${Lp})()`], {
          type: "application/javascript"
        }));
        Ap = new Worker(Op), async function(pp, ip, cp) {
          return await new Promise(((Op, Ip) => {
            const Sp = ip => {
              "init" === ip.data.action ? (pp.removeEventListener("message", Sp), Op(pp)) : "error" === ip.data.action && Ip(ip.data.error || "error initializing worker")
            };
            pp.addEventListener("message", Sp), pp.postMessage({
              action: "init",
              url: cp ? op.i.GetBabylonScriptURL(cp) : void 0,
              wasmBinary: ip
            }, [ip])
          }))
        }(Ap, cp, Yp.JSModuleURL).then(pp, ip)
      })).catch(ip)
    }))), await Dp), yp = async (pp, ip) => {
      const cp = pp instanceof ArrayBuffer ? new Uint8Array(pp) : pp;
      return await new Promise(((pp, Op) => {
        Wp().then((() => {
          const op = Pp++,
            Ip = ip => {
              "transcode" === ip.data.action && ip.data.id === op && (Ap.removeEventListener("message", Ip), ip.data.success ? pp(ip.data) : Op("Transcode is not supported on this device"))
            };
          Ap.addEventListener("message", Ip);
          const Sp = new Uint8Array(cp.byteLength);
          Sp.set(new Uint8Array(cp.buffer, cp.byteOffset, cp.byteLength)), Ap.postMessage({
            action: "transcode",
            id: op,
            imageData: Sp,
            config: ip,
            ignoreSupportedFormats: false
          }, [Sp.buffer])
        }), (pp => {
          Op(pp)
        }))
      }))
    }, Up = (pp, ip) => {
      let cp = ip._gl?.TEXTURE_2D;
      pp.isCube && (cp = ip._gl?.TEXTURE_CUBE_MAP), ip._bindTextureDirectly(cp, pp, !0)
    }, wp = (pp, ip) => {
      const cp = pp.gy();
      for (let op = 0; op < ip.fileInfo.images.length; op++) {
        const Lp = ip.fileInfo.images[op].levels[0];
        if (pp._invertVScale = pp.invertY, -1 === ip.format || ip.format === Op.cTFRGB565)
          if (pp.type = 10, pp.format = 4, !cp._features.basisNeedsPOT || Math.log2(Lp.width) % 1 === 0 && Math.log2(Lp.height) % 1 === 0) pp._invertVScale = !pp.invertY, pp.width = Lp.width + 3 & -4, pp.height = Lp.height + 3 & -4, pp.samplingMode = 2, Up(pp, cp), cp._uploadDataToTextureDirectly(pp, new Uint16Array(Lp.transcodedPixels.buffer), op, 0, 4, !0);
          else {
            const ip = new xp.b(cp, 2);
            pp._invertVScale = pp.invertY, ip.type = 10, ip.format = 4, ip.width = Lp.width + 3 & -4, ip.height = Lp.height + 3 & -4, Up(ip, cp), cp._uploadDataToTextureDirectly(ip, new Uint16Array(Lp.transcodedPixels.buffer), op, 0, 4, !0), cp._rescaleTexture(ip, pp, cp.scenes[0], cp._getInternalFormat(4), (() => {
              cp._releaseTexture(ip), Up(pp, cp)
            }))
          }
        else {
          pp.width = Lp.width, pp.height = Lp.height, pp.generateMipMaps = ip.fileInfo.images[op].levels.length > 1;
          const Op = vp.GetInternalFormatFromBasisFormat(ip.format, cp);
          pp.format = Op, Up(pp, cp);
          const xp = ip.fileInfo.images[op].levels;
          for (let ip = 0; ip < xp.length; ip++) {
            const Ip = xp[ip];
            cp._uploadCompressedDataToTextureDirectly(pp, Op, Ip.width, Ip.height, Ip.transcodedPixels, op, ip)
          }!cp._features.basisNeedsPOT || Math.log2(pp.width) % 1 === 0 && Math.log2(pp.height) % 1 === 0 || (Ip.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."), pp._cachedWrapU = Sp.d.CLAMP_ADDRESSMODE, pp._cachedWrapV = Sp.d.CLAMP_ADDRESSMODE)
        }
      }
    }, vp = {
      JSModuleURL: Yp.JSModuleURL,
      WasmModuleURL: Yp.WasmModuleURL,
      GetInternalFormatFromBasisFormat: (pp, ip) => {
        let cp;
        switch (pp) {
          case Op.cTFETC1:
            cp = 36196;
            break;
          case Op.cTFBC1:
            cp = 33776;
            break;
          case Op.cTFBC4:
            cp = 33779;
            break;
          case Op.cTFASTC_4x4:
            cp = 37808;
            break;
          case Op.cTFETC2:
            cp = 37496;
            break;
          case Op.cTFBC7:
            cp = 36492
        }
        if (void 0 === cp) throw "The chosen Basis transcoder format is not currently supported";
        return cp
      },
      TranscodeAsync: yp,
      LoadTextureFromTranscodeResult: wp
    };
    class tp {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(pp, ip, cp, Op, Ip) {
        if (Array.isArray(pp)) return;
        const Sp = ip.gy().getCaps(),
          xp = {
            supportedCompressionFormats: {
              etc1: !!Sp.etc1,
              s3tc: !!Sp.s3tc,
              pvrtc: !!Sp.pvrtc,
              etc2: !!Sp.etc2,
              astc: !!Sp.astc,
              bc7: !!Sp.bptc
            }
          };
        yp(pp, xp).then((pp => {
          const cp = pp.fileInfo.images[0].levels.length > 1 && ip.generateMipMaps;
          wp(ip, pp), ip.gy()._setCubeMapTextureParams(ip, cp), ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), Op && Op()
        })).catch((pp => {
          op.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), ip.isReady = !0, Ip && Ip(pp)
        }))
      }
      loadData(pp, ip, cp) {
        const Op = ip.gy().getCaps(),
          Ip = {
            supportedCompressionFormats: {
              etc1: !!Op.etc1,
              s3tc: !!Op.s3tc,
              pvrtc: !!Op.pvrtc,
              etc2: !!Op.etc2,
              astc: !!Op.astc,
              bc7: !!Op.bptc
            }
          };
        yp(pp, Ip).then((pp => {
          const Op = pp.fileInfo.images[0].levels[0],
            op = pp.fileInfo.images[0].levels.length > 1 && ip.generateMipMaps;
          cp(Op.width, Op.height, op, -1 !== pp.format, (() => {
            wp(ip, pp)
          }))
        })).catch((pp => {
          op.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), op.i.Warn(`Failed to transcode Basis file: ${pp}`), cp(0, 0, !1, !1, (() => {}), !0)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);