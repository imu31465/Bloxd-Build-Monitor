export const id = 303;
export const ids = [303];
export const modules = {
  41259: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      _KTXTextureLoader: () => ek
    });
    var Rk = Bk(38320);
    class tk {
      constructor(kk, Fk) {
        if (this.data = kk, this.isInvalid = !1, !tk.IsValid(kk)) return this.isInvalid = !0, void Rk.b.Error("texture missing KTX identifier");
        const Bk = Uint32Array.BYTES_PER_ELEMENT,
          ak = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * Bk),
          Xk = 67305985 === ak.getUint32(0, !0);
        return this.glType = ak.getUint32(1 * Bk, Xk), this.glTypeSize = ak.getUint32(2 * Bk, Xk), this.glFormat = ak.getUint32(3 * Bk, Xk), this.glInternalFormat = ak.getUint32(4 * Bk, Xk), this.glBaseInternalFormat = ak.getUint32(5 * Bk, Xk), this.pixelWidth = ak.getUint32(6 * Bk, Xk), this.pixelHeight = ak.getUint32(7 * Bk, Xk), this.pixelDepth = ak.getUint32(8 * Bk, Xk), this.numberOfArrayElements = ak.getUint32(9 * Bk, Xk), this.numberOfFaces = ak.getUint32(10 * Bk, Xk), this.numberOfMipmapLevels = ak.getUint32(11 * Bk, Xk), this.bytesOfKeyValueData = ak.getUint32(12 * Bk, Xk), 0 !== this.glType ? (Rk.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Rk.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Rk.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== Fk ? (Rk.b.Error("number of faces expected" + Fk + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = tk.COMPRESSED_2D))
      }
      uploadLevels(kk, Fk) {
        switch (this.loadType) {
          case tk.COMPRESSED_2D:
            this._upload2DCompressedLevels(kk, Fk);
          case tk.TEX_2D:
          case tk.COMPRESSED_3D:
          case tk.TEX_3D:
        }
      }
      _upload2DCompressedLevels(kk, Fk) {
        let Bk = tk.HEADER_LEN + this.bytesOfKeyValueData,
          Rk = this.pixelWidth,
          ak = this.pixelHeight;
        const Xk = Fk ? this.numberOfMipmapLevels : 1;
        for (let tk = 0; tk < Xk; tk++) {
          const Fk = new Int32Array(this.data.buffer, this.data.byteOffset + Bk, 1)[0];
          Bk += 4;
          for (let Xk = 0; Xk < this.numberOfFaces; Xk++) {
            const bk = new Uint8Array(this.data.buffer, this.data.byteOffset + Bk, Fk);
            kk.ne()._uploadCompressedDataToTextureDirectly(kk, kk.format, Rk, ak, bk, Xk, tk), Bk += Fk, Bk += 3 - (Fk + 3) % 4
          }
          Rk = Math.max(1, .5 * Rk), ak = Math.max(1, .5 * ak)
        }
      }
      static IsValid(kk) {
        if (kk.byteLength >= 12) {
          const Fk = new Uint8Array(kk.buffer, kk.byteOffset, 12);
          if (171 === Fk[0] && 75 === Fk[1] && 84 === Fk[2] && 88 === Fk[3] && 32 === Fk[4] && 49 === Fk[5] && 49 === Fk[6] && 187 === Fk[7] && 13 === Fk[8] && 10 === Fk[9] && 26 === Fk[10] && 10 === Fk[11]) return !0
        }
        return !1
      }
    }
    tk.HEADER_LEN = 64, tk.COMPRESSED_2D = 0, tk.COMPRESSED_3D = 1, tk.TEX_2D = 2, tk.TEX_3D = 3;
    var ak, Xk, bk, wk = Bk(41267),
      dk = Bk(39492);

    function sk(kk, Fk) {
      const Bk = Fk?.jsDecoderModule || KTX2DECODER;
      kk && (kk.wasmBaseUrl && (Bk.Transcoder.WasmBaseUrl = kk.wasmBaseUrl), kk.wasmUASTCToASTC && (Bk.LiteTranscoder_UASTC_ASTC.WasmModuleURL = kk.wasmUASTCToASTC), kk.wasmUASTCToBC7 && (Bk.LiteTranscoder_UASTC_BC7.WasmModuleURL = kk.wasmUASTCToBC7), kk.wasmUASTCToRGBA_UNORM && (Bk.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = kk.wasmUASTCToRGBA_UNORM), kk.wasmUASTCToRGBA_SRGB && (Bk.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = kk.wasmUASTCToRGBA_SRGB), kk.wasmUASTCToR8_UNORM && (Bk.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = kk.wasmUASTCToR8_UNORM), kk.wasmUASTCToRG8_UNORM && (Bk.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = kk.wasmUASTCToRG8_UNORM), kk.jsMSCTranscoder && (Bk.MSCTranscoder.JSModuleURL = kk.jsMSCTranscoder), kk.wasmMSCTranscoder && (Bk.MSCTranscoder.WasmModuleURL = kk.wasmMSCTranscoder), kk.wasmZSTDDecoder && (Bk.ZSTDDecoder.WasmModuleURL = kk.wasmZSTDDecoder)), Fk && (Fk.wasmUASTCToASTC && (Bk.LiteTranscoder_UASTC_ASTC.WasmBinary = Fk.wasmUASTCToASTC), Fk.wasmUASTCToBC7 && (Bk.LiteTranscoder_UASTC_BC7.WasmBinary = Fk.wasmUASTCToBC7), Fk.wasmUASTCToRGBA_UNORM && (Bk.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = Fk.wasmUASTCToRGBA_UNORM), Fk.wasmUASTCToRGBA_SRGB && (Bk.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = Fk.wasmUASTCToRGBA_SRGB), Fk.wasmUASTCToR8_UNORM && (Bk.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = Fk.wasmUASTCToR8_UNORM), Fk.wasmUASTCToRG8_UNORM && (Bk.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = Fk.wasmUASTCToRG8_UNORM), Fk.jsMSCTranscoder && (Bk.MSCTranscoder.JSModule = Fk.jsMSCTranscoder), Fk.wasmMSCTranscoder && (Bk.MSCTranscoder.WasmBinary = Fk.wasmMSCTranscoder), Fk.wasmZSTDDecoder && (Bk.ZSTDDecoder.WasmBinary = Fk.wasmZSTDDecoder))
    }

    function Vk(kk) {
      let Fk;
      "undefined" === typeof kk && "undefined" !== typeof KTX2DECODER && (kk = KTX2DECODER), onmessage = Bk => {
        if (Bk.data) switch (Bk.data.action) {
          case "init": {
            const Rk = Bk.data.urls;
            Rk && (Rk.jsDecoderModule && "undefined" === typeof kk && (importScripts(Rk.jsDecoderModule), kk = KTX2DECODER), sk(Rk)), Bk.data.wasmBinaries && sk(void 0, {
              ...Bk.data.wasmBinaries,
              jsDecoderModule: kk
            }), Fk = new kk.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            kk.KTX2Decoder.DefaultDecoderOptions = Bk.data.options;
            break;
          case "decode":
            Fk.decode(Bk.data.data, Bk.data.caps, Bk.data.options).then((kk => {
              const Fk = [];
              for (let Bk = 0; Bk < kk.mipmaps.length; ++Bk) {
                const Rk = kk.mipmaps[Bk];
                Rk && Rk.data && Fk.push(Rk.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: kk
              }, Fk)
            })).catch((kk => {
              postMessage({
                action: "decoded",
                success: !1,
                UX: kk
              })
            }))
        }
      }
    }! function(kk) {
      kk[kk.ETC1S = 0] = "ETC1S", kk[kk.UASTC4x4 = 1] = "UASTC4x4", kk[kk.RGBA32 = 2] = "RGBA32"
    }(ak || (ak = {})),
    function(kk) {
      kk[kk.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", kk[kk.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", kk[kk.BC7_RGBA = 1] = "BC7_RGBA", kk[kk.BC3_RGBA = 2] = "BC3_RGBA", kk[kk.BC1_RGB = 3] = "BC1_RGB", kk[kk.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", kk[kk.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", kk[kk.ETC2_RGBA = 6] = "ETC2_RGBA", kk[kk.ETC1_RGB = 7] = "ETC1_RGB", kk[kk.RGBA32 = 8] = "RGBA32", kk[kk.R8 = 9] = "R8", kk[kk.RG8 = 10] = "RG8"
    }(Xk || (Xk = {})),
    function(kk) {
      kk[kk.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", kk[kk.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", kk[kk.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", kk[kk.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", kk[kk.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", kk[kk.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", kk[kk.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", kk[kk.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", kk[kk.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", kk[kk.RGBA8Format = 32856] = "RGBA8Format", kk[kk.R8Format = 33321] = "R8Format", kk[kk.RG8Format = 33323] = "RG8Format"
    }(bk || (bk = {}));
    class Jk {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(kk) {
        if (Jk._WorkerPoolPromise || Jk._DecoderModulePromise) return;
        const Fk = {
          wasmBaseUrl: dk.h.ScriptBaseUrl,
          jsDecoderModule: dk.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: dk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: dk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: dk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: dk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: dk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: dk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: dk.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: dk.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: dk.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        kk && "function" === typeof Worker && "undefined" !== typeof URL ? Jk._WorkerPoolPromise = new Promise((Bk => {
          const Rk = `${sk}(${Vk})()`,
            tk = URL.createObjectURL(new Blob([Rk], {
              type: "application/javascript"
            }));
          Bk(new wk.d(kk, (async () => await async function(kk, Fk, Bk) {
            return await new Promise(((Rk, tk) => {
              const ak = Fk => {
                  kk.removeEventListener("error", ak), kk.removeEventListener("message", Xk), tk(Fk)
                },
                Xk = Fk => {
                  "init" === Fk.data.action && (kk.removeEventListener("error", ak), kk.removeEventListener("message", Xk), Rk(kk))
                };
              kk.addEventListener("error", ak), kk.addEventListener("message", Xk), kk.postMessage({
                action: "init",
                urls: Bk,
                wasmBinaries: Fk
              })
            }))
          }(new Worker(tk), void 0, Fk))))
        })) : "undefined" === typeof Jk._KTX2DecoderModule ? Jk._DecoderModulePromise = dk.h.LoadBabylonScriptAsync(Fk.jsDecoderModule).then((() => (Jk._KTX2DecoderModule = KTX2DECODER, Jk._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Jk._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, sk(Fk, Jk._KTX2DecoderModule), new Jk._KTX2DecoderModule.KTX2Decoder))) : (Jk._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Jk._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Jk._DecoderModulePromise = Promise.resolve(new Jk._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Jk.DefaultNumWorkers;
        this._engine = kk;
        const Bk = "object" === typeof Fk && Fk.workerPool || Jk.WorkerPool;
        if (Bk) Jk._WorkerPoolPromise = Promise.resolve(Bk);
        else {
          "object" === typeof Fk ? Jk._KTX2DecoderModule = Fk?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Jk._KTX2DecoderModule = KTX2DECODER);
          const kk = "number" === typeof Fk ? Fk : Fk.numWorkers ?? Jk.DefaultNumWorkers;
          Jk._Initialize(kk)
        }
      }
      async _uploadAsync(kk, Fk, Bk) {
        const Rk = await this._decodeAsync(kk, Bk);
        this._createTexture(Rk, Fk, Bk)
      }
      async _decodeAsync(kk, Fk) {
        const Bk = this._engine.getCaps(),
          Rk = {
            astc: !!Bk.astc,
            bptc: !!Bk.bptc,
            s3tc: !!Bk.s3tc,
            pvrtc: !!Bk.pvrtc,
            etc2: !!Bk.etc2,
            etc1: !!Bk.etc1
          };
        if (Jk._WorkerPoolPromise) {
          const Bk = await Jk._WorkerPoolPromise;
          return await new Promise(((tk, ak) => {
            Bk.push(((Bk, Xk) => {
              const bk = kk => {
                  Bk.removeEventListener("error", bk), Bk.removeEventListener("message", wk), ak(kk), Xk()
                },
                wk = kk => {
                  "decoded" === kk.data.action && (Bk.removeEventListener("error", bk), Bk.removeEventListener("message", wk), kk.data.success ? tk(kk.data.decodedData) : ak({
                    message: kk.data.UX
                  }), Xk())
                };
              Bk.addEventListener("error", bk), Bk.addEventListener("message", wk), Bk.postMessage({
                action: "setDefaultDecoderOptions",
                options: Jk.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const dk = new Uint8Array(kk.byteLength);
              dk.set(new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength)), Bk.postMessage({
                action: "decode",
                data: dk,
                caps: Rk,
                options: Fk
              }, [dk.buffer])
            }))
          }))
        }
        if (Jk._DecoderModulePromise) {
          const Rk = await Jk._DecoderModulePromise;
          return Jk.DefaultDecoderOptions.isDirty && (Jk._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Jk.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((tk, ak) => {
            Rk.decode(kk, Bk, Fk).then((kk => {
              tk(kk)
            })).catch((kk => {
              ak({
                message: kk
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(kk, Fk, Bk) {
        if ((kk.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, Fk), Bk && (Bk.transcodedFormat = kk.transcodedFormat, Bk.isInGammaSpace = kk.isInGammaSpace, Bk.hasAlpha = kk.hasAlpha, Bk.transcoderName = kk.transcoderName);
        let Rk = !0;
        switch (kk.transcodedFormat) {
          case 32856:
            Fk.type = 0, Fk.format = 5;
            break;
          case 33321:
            Fk.type = 0, Fk.format = 6;
            break;
          case 33323:
            Fk.type = 0, Fk.format = 7;
            break;
          default:
            Fk.format = kk.transcodedFormat, Rk = !1
        }
        if (Fk._gammaSpace = kk.isInGammaSpace, Fk.generateMipMaps = kk.mipmaps.length > 1, Fk.width = kk.mipmaps[0].width, Fk.height = kk.mipmaps[0].height, kk.errors) throw new Error("KTX2 container - could not transcode the data. " + kk.errors);
        for (let tk = 0; tk < kk.mipmaps.length; ++tk) {
          const Bk = kk.mipmaps[tk];
          if (!Bk || !Bk.data) throw new Error("KTX2 container - could not transcode one of the image");
          Rk ? (Fk.width = Bk.width, Fk.height = Bk.height, this._engine._uploadDataToTextureDirectly(Fk, Bk.data, 0, tk, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(Fk, kk.transcodedFormat, Bk.width, Bk.height, Bk.data, 0, tk)
        }
        Fk._extension = ".ktx2", Fk.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(kk) {
        if (kk.byteLength >= 12) {
          const Fk = new Uint8Array(kk.buffer, kk.byteOffset, 12);
          if (171 === Fk[0] && 75 === Fk[1] && 84 === Fk[2] && 88 === Fk[3] && 32 === Fk[4] && 50 === Fk[5] && 48 === Fk[6] && 187 === Fk[7] && 13 === Fk[8] && 10 === Fk[9] && 26 === Fk[10] && 10 === Fk[11]) return !0
        }
        return !1
      }
    }

    function Ak(kk) {
      switch (kk) {
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
    Jk.URLConfig = {
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
    }, Jk.DefaultNumWorkers = Jk.GetDefaultNumWorkers(), Jk.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(kk) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== kk && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = kk, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(kk) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== kk && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = kk, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(kk) {
        this._forceRGBA !== kk && (this._forceRGBA = kk, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(kk) {
        this._forceR8 !== kk && (this._forceR8 = kk, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(kk) {
        this._forceRG8 !== kk && (this._forceRG8 = kk, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(kk) {
        this._bypassTranscoders !== kk && (this._bypassTranscoders = kk, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const kk = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (kk.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (kk.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (kk.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (kk.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (kk.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (kk.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [Xk.BC1_RGB, Xk.BC3_RGBA],
            yes: {
              transcodeFormat: Xk.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = kk, kk
      }
    };
    class ek {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(kk, Fk, Bk, Rk) {
        if (Array.isArray(kk)) return;
        Fk._invertVScale = !Fk.invertY;
        const ak = Fk.ne(),
          Xk = new tk(kk, 6),
          bk = Ak(Xk.glInternalFormat);
        null !== bk ? (Fk.format = bk, Fk._useSRGBBuffer = ak._getUseSRGBBuffer(!0, !Fk.generateMipMaps), Fk._gammaSpace = !0) : Fk.format = Xk.glInternalFormat;
        const wk = Xk.numberOfMipmapLevels > 1 && Fk.generateMipMaps;
        ak._unpackFlipY(!0), Xk.uploadLevels(Fk, Fk.generateMipMaps), Fk.width = Xk.pixelWidth, Fk.height = Xk.pixelHeight, ak._setCubeMapTextureParams(Fk, wk, Xk.numberOfMipmapLevels - 1), Fk.isReady = !0, Fk.onLoadedObservable.notifyObservers(Fk), Fk.onLoadedObservable.clear(), Rk && Rk()
      }
      loadData(kk, Fk, Bk, ak) {
        if (tk.IsValid(kk)) {
          Fk._invertVScale = !Fk.invertY;
          const Rk = new tk(kk, 1),
            ak = Ak(Rk.glInternalFormat);
          null !== ak ? (Fk.format = ak, Fk._useSRGBBuffer = Fk.ne()._getUseSRGBBuffer(!0, !Fk.generateMipMaps), Fk._gammaSpace = !0) : Fk.format = Rk.glInternalFormat, Bk(Rk.pixelWidth, Rk.pixelHeight, Fk.generateMipMaps, !0, (() => {
            Rk.uploadLevels(Fk, Fk.generateMipMaps)
          }), Rk.isInvalid)
        } else if (Jk.IsValid(kk)) {
          new Jk(Fk.ne())._uploadAsync(kk, Fk, ak).then((() => {
            Bk(Fk.width, Fk.height, Fk.generateMipMaps, !0, (() => {}), !1)
          }), (kk => {
            Rk.b.Warn(`Failed to load KTX2 texture data: ${kk.message}`), Bk(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Rk.b.Error("texture missing KTX identifier"), Bk(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41267: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk
    });
    class Rk {
      constructor(kk) {
        this._pendingActions = new Array, this._workerInfos = kk.map((kk => ({
          workerPromise: Promise.resolve(kk),
          idle: !0
        })))
      }
      dispose() {
        for (const kk of this._workerInfos) kk.workerPromise.then((kk => {
          kk.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(kk) {
        this._executeOnIdleWorker(kk) || this._pendingActions.push(kk)
      }
      _executeOnIdleWorker(kk) {
        for (const Fk of this._workerInfos)
          if (Fk.idle) return this._execute(Fk, kk), !0;
        return !1
      }
      _execute(kk, Fk) {
        kk.idle = !1, kk.workerPromise.then((Bk => {
          Fk(Bk, (() => {
            const Fk = this._pendingActions.shift();
            Fk ? this._execute(kk, Fk) : kk.idle = !0
          }))
        }))
      }
    }
    class tk extends Rk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tk.DefaultOptions;
        super([]), this._maxWorkers = kk, this._createWorkerAsync = Fk, this._options = Bk
      }
      push(kk) {
        if (!this._executeOnIdleWorker(kk))
          if (this._workerInfos.length < this._maxWorkers) {
            const Fk = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Fk), this._execute(Fk, kk)
          } else this._pendingActions.push(kk)
      }
      _execute(kk, Fk) {
        kk.timeoutId && (clearTimeout(kk.timeoutId), delete kk.timeoutId), super._execute(kk, ((Bk, Rk) => {
          Fk(Bk, (() => {
            Rk(), kk.idle && (kk.timeoutId = setTimeout((() => {
              kk.workerPromise.then((kk => {
                kk.terminate()
              }));
              const Fk = this._workerInfos.indexOf(kk); - 1 !== Fk && this._workerInfos.splice(Fk, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    tk.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);