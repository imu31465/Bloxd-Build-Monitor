export const id = 304;
export const ids = [304];
export const modules = {
  41166: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      _KTXTextureLoader: () => av
    });
    var hv = Pv(38209);
    class Sv {
      constructor(vv, zv) {
        if (this.data = vv, this.isInvalid = !1, !Sv.IsValid(vv)) return this.isInvalid = !0, void hv.d.Error("texture missing KTX identifier");
        const Pv = Uint32Array.BYTES_PER_ELEMENT,
          ev = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * Pv),
          gv = 67305985 === ev.getUint32(0, !0);
        return this.glType = ev.getUint32(1 * Pv, gv), this.glTypeSize = ev.getUint32(2 * Pv, gv), this.glFormat = ev.getUint32(3 * Pv, gv), this.glInternalFormat = ev.getUint32(4 * Pv, gv), this.glBaseInternalFormat = ev.getUint32(5 * Pv, gv), this.pixelWidth = ev.getUint32(6 * Pv, gv), this.pixelHeight = ev.getUint32(7 * Pv, gv), this.pixelDepth = ev.getUint32(8 * Pv, gv), this.numberOfArrayElements = ev.getUint32(9 * Pv, gv), this.numberOfFaces = ev.getUint32(10 * Pv, gv), this.numberOfMipmapLevels = ev.getUint32(11 * Pv, gv), this.bytesOfKeyValueData = ev.getUint32(12 * Pv, gv), 0 !== this.glType ? (hv.d.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (hv.d.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (hv.d.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== zv ? (hv.d.Error("number of faces expected" + zv + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Sv.COMPRESSED_2D))
      }
      uploadLevels(vv, zv) {
        switch (this.loadType) {
          case Sv.COMPRESSED_2D:
            this._upload2DCompressedLevels(vv, zv);
          case Sv.TEX_2D:
          case Sv.COMPRESSED_3D:
          case Sv.TEX_3D:
        }
      }
      _upload2DCompressedLevels(vv, zv) {
        let Pv = Sv.HEADER_LEN + this.bytesOfKeyValueData,
          hv = this.pixelWidth,
          ev = this.pixelHeight;
        const gv = zv ? this.numberOfMipmapLevels : 1;
        for (let Sv = 0; Sv < gv; Sv++) {
          const zv = new Int32Array(this.data.buffer, this.data.byteOffset + Pv, 1)[0];
          Pv += 4;
          for (let gv = 0; gv < this.numberOfFaces; gv++) {
            const pv = new Uint8Array(this.data.buffer, this.data.byteOffset + Pv, zv);
            vv.ma()._uploadCompressedDataToTextureDirectly(vv, vv.format, hv, ev, pv, gv, Sv), Pv += zv, Pv += 3 - (zv + 3) % 4
          }
          hv = Math.max(1, .5 * hv), ev = Math.max(1, .5 * ev)
        }
      }
      static IsValid(vv) {
        if (vv.byteLength >= 12) {
          const zv = new Uint8Array(vv.buffer, vv.byteOffset, 12);
          if (171 === zv[0] && 75 === zv[1] && 84 === zv[2] && 88 === zv[3] && 32 === zv[4] && 49 === zv[5] && 49 === zv[6] && 187 === zv[7] && 13 === zv[8] && 10 === zv[9] && 26 === zv[10] && 10 === zv[11]) return !0
        }
        return !1
      }
    }
    Sv.HEADER_LEN = 64, Sv.COMPRESSED_2D = 0, Sv.COMPRESSED_3D = 1, Sv.TEX_2D = 2, Sv.TEX_3D = 3;
    var ev, gv, pv, dv = Pv(41174),
      Nv = Pv(39399);

    function lv(vv, zv) {
      const Pv = zv?.jsDecoderModule || KTX2DECODER;
      vv && (vv.wasmBaseUrl && (Pv.Transcoder.WasmBaseUrl = vv.wasmBaseUrl), vv.wasmUASTCToASTC && (Pv.LiteTranscoder_UASTC_ASTC.WasmModuleURL = vv.wasmUASTCToASTC), vv.wasmUASTCToBC7 && (Pv.LiteTranscoder_UASTC_BC7.WasmModuleURL = vv.wasmUASTCToBC7), vv.wasmUASTCToRGBA_UNORM && (Pv.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = vv.wasmUASTCToRGBA_UNORM), vv.wasmUASTCToRGBA_SRGB && (Pv.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = vv.wasmUASTCToRGBA_SRGB), vv.wasmUASTCToR8_UNORM && (Pv.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = vv.wasmUASTCToR8_UNORM), vv.wasmUASTCToRG8_UNORM && (Pv.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = vv.wasmUASTCToRG8_UNORM), vv.jsMSCTranscoder && (Pv.MSCTranscoder.JSModuleURL = vv.jsMSCTranscoder), vv.wasmMSCTranscoder && (Pv.MSCTranscoder.WasmModuleURL = vv.wasmMSCTranscoder), vv.wasmZSTDDecoder && (Pv.ZSTDDecoder.WasmModuleURL = vv.wasmZSTDDecoder)), zv && (zv.wasmUASTCToASTC && (Pv.LiteTranscoder_UASTC_ASTC.WasmBinary = zv.wasmUASTCToASTC), zv.wasmUASTCToBC7 && (Pv.LiteTranscoder_UASTC_BC7.WasmBinary = zv.wasmUASTCToBC7), zv.wasmUASTCToRGBA_UNORM && (Pv.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = zv.wasmUASTCToRGBA_UNORM), zv.wasmUASTCToRGBA_SRGB && (Pv.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = zv.wasmUASTCToRGBA_SRGB), zv.wasmUASTCToR8_UNORM && (Pv.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = zv.wasmUASTCToR8_UNORM), zv.wasmUASTCToRG8_UNORM && (Pv.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = zv.wasmUASTCToRG8_UNORM), zv.jsMSCTranscoder && (Pv.MSCTranscoder.JSModule = zv.jsMSCTranscoder), zv.wasmMSCTranscoder && (Pv.MSCTranscoder.WasmBinary = zv.wasmMSCTranscoder), zv.wasmZSTDDecoder && (Pv.ZSTDDecoder.WasmBinary = zv.wasmZSTDDecoder))
    }

    function Tv(vv) {
      let zv;
      "undefined" === typeof vv && "undefined" !== typeof KTX2DECODER && (vv = KTX2DECODER), onmessage = Pv => {
        if (Pv.data) switch (Pv.data.action) {
          case "init": {
            const hv = Pv.data.urls;
            hv && (hv.jsDecoderModule && "undefined" === typeof vv && (importScripts(hv.jsDecoderModule), vv = KTX2DECODER), lv(hv)), Pv.data.wasmBinaries && lv(void 0, {
              ...Pv.data.wasmBinaries,
              jsDecoderModule: vv
            }), zv = new vv.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            vv.KTX2Decoder.DefaultDecoderOptions = Pv.data.options;
            break;
          case "decode":
            zv.decode(Pv.data.data, Pv.data.caps, Pv.data.options).then((vv => {
              const zv = [];
              for (let Pv = 0; Pv < vv.mipmaps.length; ++Pv) {
                const hv = vv.mipmaps[Pv];
                hv && hv.data && zv.push(hv.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: vv
              }, zv)
            })).catch((vv => {
              postMessage({
                action: "decoded",
                success: !1,
                al: vv
              })
            }))
        }
      }
    }! function(vv) {
      vv[vv.ETC1S = 0] = "ETC1S", vv[vv.UASTC4x4 = 1] = "UASTC4x4", vv[vv.RGBA32 = 2] = "RGBA32"
    }(ev || (ev = {})),
    function(vv) {
      vv[vv.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", vv[vv.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", vv[vv.BC7_RGBA = 1] = "BC7_RGBA", vv[vv.BC3_RGBA = 2] = "BC3_RGBA", vv[vv.BC1_RGB = 3] = "BC1_RGB", vv[vv.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", vv[vv.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", vv[vv.ETC2_RGBA = 6] = "ETC2_RGBA", vv[vv.ETC1_RGB = 7] = "ETC1_RGB", vv[vv.RGBA32 = 8] = "RGBA32", vv[vv.R8 = 9] = "R8", vv[vv.RG8 = 10] = "RG8"
    }(gv || (gv = {})),
    function(vv) {
      vv[vv.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", vv[vv.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", vv[vv.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", vv[vv.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", vv[vv.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", vv[vv.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", vv[vv.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", vv[vv.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", vv[vv.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", vv[vv.RGBA8Format = 32856] = "RGBA8Format", vv[vv.R8Format = 33321] = "R8Format", vv[vv.RG8Format = 33323] = "RG8Format"
    }(pv || (pv = {}));
    class Wv {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(vv) {
        if (Wv._WorkerPoolPromise || Wv._DecoderModulePromise) return;
        const zv = {
          wasmBaseUrl: Nv.h.ScriptBaseUrl,
          jsDecoderModule: Nv.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Nv.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Nv.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Nv.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Nv.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Nv.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Nv.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Nv.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Nv.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Nv.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        vv && "function" === typeof Worker && "undefined" !== typeof URL ? Wv._WorkerPoolPromise = new Promise((Pv => {
          const hv = `${lv}(${Tv})()`,
            Sv = URL.createObjectURL(new Blob([hv], {
              type: "application/javascript"
            }));
          Pv(new dv.c(vv, (async () => await async function(vv, zv, Pv) {
            return await new Promise(((hv, Sv) => {
              const ev = zv => {
                  vv.removeEventListener("error", ev), vv.removeEventListener("message", gv), Sv(zv)
                },
                gv = zv => {
                  "init" === zv.data.action && (vv.removeEventListener("error", ev), vv.removeEventListener("message", gv), hv(vv))
                };
              vv.addEventListener("error", ev), vv.addEventListener("message", gv), vv.postMessage({
                action: "init",
                urls: Pv,
                wasmBinaries: zv
              })
            }))
          }(new Worker(Sv), void 0, zv))))
        })) : "undefined" === typeof Wv._KTX2DecoderModule ? Wv._DecoderModulePromise = Nv.h.LoadBabylonScriptAsync(zv.jsDecoderModule).then((() => (Wv._KTX2DecoderModule = KTX2DECODER, Wv._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Wv._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, lv(zv, Wv._KTX2DecoderModule), new Wv._KTX2DecoderModule.KTX2Decoder))) : (Wv._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Wv._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Wv._DecoderModulePromise = Promise.resolve(new Wv._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wv.DefaultNumWorkers;
        this._engine = vv;
        const Pv = "object" === typeof zv && zv.workerPool || Wv.WorkerPool;
        if (Pv) Wv._WorkerPoolPromise = Promise.resolve(Pv);
        else {
          "object" === typeof zv ? Wv._KTX2DecoderModule = zv?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Wv._KTX2DecoderModule = KTX2DECODER);
          const vv = "number" === typeof zv ? zv : zv.numWorkers ?? Wv.DefaultNumWorkers;
          Wv._Initialize(vv)
        }
      }
      async _uploadAsync(vv, zv, Pv) {
        const hv = await this._decodeAsync(vv, Pv);
        this._createTexture(hv, zv, Pv)
      }
      async _decodeAsync(vv, zv) {
        const Pv = this._engine.getCaps(),
          hv = {
            astc: !!Pv.astc,
            bptc: !!Pv.bptc,
            s3tc: !!Pv.s3tc,
            pvrtc: !!Pv.pvrtc,
            etc2: !!Pv.etc2,
            etc1: !!Pv.etc1
          };
        if (Wv._WorkerPoolPromise) {
          const Pv = await Wv._WorkerPoolPromise;
          return await new Promise(((Sv, ev) => {
            Pv.push(((Pv, gv) => {
              const pv = vv => {
                  Pv.removeEventListener("error", pv), Pv.removeEventListener("message", dv), ev(vv), gv()
                },
                dv = vv => {
                  "decoded" === vv.data.action && (Pv.removeEventListener("error", pv), Pv.removeEventListener("message", dv), vv.data.success ? Sv(vv.data.decodedData) : ev({
                    message: vv.data.al
                  }), gv())
                };
              Pv.addEventListener("error", pv), Pv.addEventListener("message", dv), Pv.postMessage({
                action: "setDefaultDecoderOptions",
                options: Wv.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Nv = new Uint8Array(vv.byteLength);
              Nv.set(new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength)), Pv.postMessage({
                action: "decode",
                data: Nv,
                caps: hv,
                options: zv
              }, [Nv.buffer])
            }))
          }))
        }
        if (Wv._DecoderModulePromise) {
          const hv = await Wv._DecoderModulePromise;
          return Wv.DefaultDecoderOptions.isDirty && (Wv._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Wv.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Sv, ev) => {
            hv.decode(vv, Pv, zv).then((vv => {
              Sv(vv)
            })).catch((vv => {
              ev({
                message: vv
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(vv, zv, Pv) {
        if ((vv.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, zv), Pv && (Pv.transcodedFormat = vv.transcodedFormat, Pv.isInGammaSpace = vv.isInGammaSpace, Pv.hasAlpha = vv.hasAlpha, Pv.transcoderName = vv.transcoderName);
        let hv = !0;
        switch (vv.transcodedFormat) {
          case 32856:
            zv.type = 0, zv.format = 5;
            break;
          case 33321:
            zv.type = 0, zv.format = 6;
            break;
          case 33323:
            zv.type = 0, zv.format = 7;
            break;
          default:
            zv.format = vv.transcodedFormat, hv = !1
        }
        if (zv._gammaSpace = vv.isInGammaSpace, zv.generateMipMaps = vv.mipmaps.length > 1, zv.width = vv.mipmaps[0].width, zv.height = vv.mipmaps[0].height, vv.errors) throw new Error("KTX2 container - could not transcode the data. " + vv.errors);
        for (let Sv = 0; Sv < vv.mipmaps.length; ++Sv) {
          const Pv = vv.mipmaps[Sv];
          if (!Pv || !Pv.data) throw new Error("KTX2 container - could not transcode one of the image");
          hv ? (zv.width = Pv.width, zv.height = Pv.height, this._engine._uploadDataToTextureDirectly(zv, Pv.data, 0, Sv, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(zv, vv.transcodedFormat, Pv.width, Pv.height, Pv.data, 0, Sv)
        }
        zv._extension = ".ktx2", zv.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(vv) {
        if (vv.byteLength >= 12) {
          const zv = new Uint8Array(vv.buffer, vv.byteOffset, 12);
          if (171 === zv[0] && 75 === zv[1] && 84 === zv[2] && 88 === zv[3] && 32 === zv[4] && 50 === zv[5] && 48 === zv[6] && 187 === zv[7] && 13 === zv[8] && 10 === zv[9] && 26 === zv[10] && 10 === zv[11]) return !0
        }
        return !1
      }
    }

    function wv(vv) {
      switch (vv) {
        case 35916:
          return 33776;
        case 35918:
          return 33778;
        case 35919:
          return 33779;
        case 37493:
          return 37492;
        case 37497:
          return 37496;
        case 37495:
          return 37494;
        case 37840:
          return 37808;
        case 37841:
          return 37809;
        case 37842:
          return 37810;
        case 37843:
          return 37811;
        case 37844:
          return 37812;
        case 37845:
          return 37813;
        case 37846:
          return 37814;
        case 37847:
          return 37815;
        case 37848:
          return 37816;
        case 37849:
          return 37817;
        case 37850:
          return 37818;
        case 37851:
          return 37819;
        case 37852:
          return 37820;
        case 37853:
          return 37821;
        case 36493:
          return 36492
      }
      return null
    }
    Wv.URLConfig = {
      jsDecoderModule: "https://cdn.babylonjs.com/babylon.ktx2Decoder.js",
      wasmUASTCToASTC: null,
      wasmUASTCToBC7: null,
      wasmUASTCToRGBA_UNORM: null,
      wasmUASTCToRGBA_SRGB: null,
      wasmUASTCToR8_UNORM: null,
      wasmUASTCToRG8_UNORM: null,
      jsMSCTranscoder: null,
      wasmMSCTranscoder: null,
      wasmZSTDDecoder: null
    }, Wv.DefaultNumWorkers = Wv.GetDefaultNumWorkers(), Wv.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(vv) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== vv && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = vv, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(vv) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== vv && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = vv, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(vv) {
        this._forceRGBA !== vv && (this._forceRGBA = vv, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(vv) {
        this._forceR8 !== vv && (this._forceR8 = vv, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(vv) {
        this._forceRG8 !== vv && (this._forceRG8 = vv, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(vv) {
        this._bypassTranscoders !== vv && (this._bypassTranscoders = vv, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const vv = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (vv.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (vv.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (vv.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (vv.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (vv.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (vv.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [gv.BC1_RGB, gv.BC3_RGBA],
            yes: {
              transcodeFormat: gv.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = vv, vv
      }
    };
    class av {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(vv, zv, Pv, hv) {
        if (Array.isArray(vv)) return;
        zv._invertVScale = !zv.invertY;
        const ev = zv.ma(),
          gv = new Sv(vv, 6),
          pv = wv(gv.glInternalFormat);
        null !== pv ? (zv.format = pv, zv._useSRGBBuffer = ev._getUseSRGBBuffer(!0, !zv.generateMipMaps), zv._gammaSpace = !0) : zv.format = gv.glInternalFormat;
        const dv = gv.numberOfMipmapLevels > 1 && zv.generateMipMaps;
        ev._unpackFlipY(!0), gv.uploadLevels(zv, zv.generateMipMaps), zv.width = gv.pixelWidth, zv.height = gv.pixelHeight, ev._setCubeMapTextureParams(zv, dv, gv.numberOfMipmapLevels - 1), zv.isReady = !0, zv.onLoadedObservable.notifyObservers(zv), zv.onLoadedObservable.clear(), hv && hv()
      }
      loadData(vv, zv, Pv, ev) {
        if (Sv.IsValid(vv)) {
          zv._invertVScale = !zv.invertY;
          const hv = new Sv(vv, 1),
            ev = wv(hv.glInternalFormat);
          null !== ev ? (zv.format = ev, zv._useSRGBBuffer = zv.ma()._getUseSRGBBuffer(!0, !zv.generateMipMaps), zv._gammaSpace = !0) : zv.format = hv.glInternalFormat, Pv(hv.pixelWidth, hv.pixelHeight, zv.generateMipMaps, !0, (() => {
            hv.uploadLevels(zv, zv.generateMipMaps)
          }), hv.isInvalid)
        } else if (Wv.IsValid(vv)) {
          new Wv(zv.ma())._uploadAsync(vv, zv, ev).then((() => {
            Pv(zv.width, zv.height, zv.generateMipMaps, !0, (() => {}), !1)
          }), (vv => {
            hv.d.Warn(`Failed to load KTX2 texture data: ${vv.message}`), Pv(0, 0, !1, !1, (() => {}), !0)
          }))
        } else hv.d.Error("texture missing KTX identifier"), Pv(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41174: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    class hv {
      constructor(vv) {
        this._pendingActions = new Array, this._workerInfos = vv.map((vv => ({
          workerPromise: Promise.resolve(vv),
          idle: !0
        })))
      }
      dispose() {
        for (const vv of this._workerInfos) vv.workerPromise.then((vv => {
          vv.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(vv) {
        this._executeOnIdleWorker(vv) || this._pendingActions.push(vv)
      }
      _executeOnIdleWorker(vv) {
        for (const zv of this._workerInfos)
          if (zv.idle) return this._execute(zv, vv), !0;
        return !1
      }
      _execute(vv, zv) {
        vv.idle = !1, vv.workerPromise.then((Pv => {
          zv(Pv, (() => {
            const zv = this._pendingActions.shift();
            zv ? this._execute(vv, zv) : vv.idle = !0
          }))
        }))
      }
    }
    class Sv extends hv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sv.DefaultOptions;
        super([]), this._maxWorkers = vv, this._createWorkerAsync = zv, this._options = Pv
      }
      push(vv) {
        if (!this._executeOnIdleWorker(vv))
          if (this._workerInfos.length < this._maxWorkers) {
            const zv = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(zv), this._execute(zv, vv)
          } else this._pendingActions.push(vv)
      }
      _execute(vv, zv) {
        vv.timeoutId && (clearTimeout(vv.timeoutId), delete vv.timeoutId), super._execute(vv, ((Pv, hv) => {
          zv(Pv, (() => {
            hv(), vv.idle && (vv.timeoutId = setTimeout((() => {
              vv.workerPromise.then((vv => {
                vv.terminate()
              }));
              const zv = this._workerInfos.indexOf(vv); - 1 !== zv && this._workerInfos.splice(zv, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Sv.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);