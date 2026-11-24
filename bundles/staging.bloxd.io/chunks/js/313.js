export const id = 313;
export const ids = [313];
export const modules = {
  41840: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      _KTXTextureLoader: () => ek
    });
    var Xk = Ik(38674);
    class Tk {
      constructor(kk, Fk) {
        if (this.data = kk, this.isInvalid = !1, !Tk.IsValid(kk)) return this.isInvalid = !0, void Xk.e.Error("texture missing KTX identifier");
        const Ik = Uint32Array.BYTES_PER_ELEMENT,
          ik = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * Ik),
          yk = 67305985 === ik.getUint32(0, !0);
        return this.glType = ik.getUint32(1 * Ik, yk), this.glTypeSize = ik.getUint32(2 * Ik, yk), this.glFormat = ik.getUint32(3 * Ik, yk), this.glInternalFormat = ik.getUint32(4 * Ik, yk), this.glBaseInternalFormat = ik.getUint32(5 * Ik, yk), this.pixelWidth = ik.getUint32(6 * Ik, yk), this.pixelHeight = ik.getUint32(7 * Ik, yk), this.pixelDepth = ik.getUint32(8 * Ik, yk), this.numberOfArrayElements = ik.getUint32(9 * Ik, yk), this.numberOfFaces = ik.getUint32(10 * Ik, yk), this.numberOfMipmapLevels = ik.getUint32(11 * Ik, yk), this.bytesOfKeyValueData = ik.getUint32(12 * Ik, yk), 0 !== this.glType ? (Xk.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Xk.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Xk.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== Fk ? (Xk.e.Error("number of faces expected" + Fk + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Tk.COMPRESSED_2D))
      }
      uploadLevels(kk, Fk) {
        switch (this.loadType) {
          case Tk.COMPRESSED_2D:
            this._upload2DCompressedLevels(kk, Fk);
          case Tk.TEX_2D:
          case Tk.COMPRESSED_3D:
          case Tk.TEX_3D:
        }
      }
      _upload2DCompressedLevels(kk, Fk) {
        let Ik = Tk.HEADER_LEN + this.bytesOfKeyValueData,
          Xk = this.pixelWidth,
          ik = this.pixelHeight;
        const yk = Fk ? this.numberOfMipmapLevels : 1;
        for (let Tk = 0; Tk < yk; Tk++) {
          const Fk = new Int32Array(this.data.buffer, this.data.byteOffset + Ik, 1)[0];
          Ik += 4;
          for (let yk = 0; yk < this.numberOfFaces; yk++) {
            const lk = new Uint8Array(this.data.buffer, this.data.byteOffset + Ik, Fk);
            kk.Oe()._uploadCompressedDataToTextureDirectly(kk, kk.format, Xk, ik, lk, yk, Tk), Ik += Fk, Ik += 3 - (Fk + 3) % 4
          }
          Xk = Math.max(1, .5 * Xk), ik = Math.max(1, .5 * ik)
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
    Tk.HEADER_LEN = 64, Tk.COMPRESSED_2D = 0, Tk.COMPRESSED_3D = 1, Tk.TEX_2D = 2, Tk.TEX_3D = 3;
    var ik, yk, lk, ak = Ik(41846),
      qk = Ik(40097);

    function Lk(kk, Fk) {
      const Ik = Fk?.jsDecoderModule || KTX2DECODER;
      kk && (kk.wasmBaseUrl && (Ik.Transcoder.WasmBaseUrl = kk.wasmBaseUrl), kk.wasmUASTCToASTC && (Ik.LiteTranscoder_UASTC_ASTC.WasmModuleURL = kk.wasmUASTCToASTC), kk.wasmUASTCToBC7 && (Ik.LiteTranscoder_UASTC_BC7.WasmModuleURL = kk.wasmUASTCToBC7), kk.wasmUASTCToRGBA_UNORM && (Ik.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = kk.wasmUASTCToRGBA_UNORM), kk.wasmUASTCToRGBA_SRGB && (Ik.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = kk.wasmUASTCToRGBA_SRGB), kk.wasmUASTCToR8_UNORM && (Ik.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = kk.wasmUASTCToR8_UNORM), kk.wasmUASTCToRG8_UNORM && (Ik.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = kk.wasmUASTCToRG8_UNORM), kk.jsMSCTranscoder && (Ik.MSCTranscoder.JSModuleURL = kk.jsMSCTranscoder), kk.wasmMSCTranscoder && (Ik.MSCTranscoder.WasmModuleURL = kk.wasmMSCTranscoder), kk.wasmZSTDDecoder && (Ik.ZSTDDecoder.WasmModuleURL = kk.wasmZSTDDecoder)), Fk && (Fk.wasmUASTCToASTC && (Ik.LiteTranscoder_UASTC_ASTC.WasmBinary = Fk.wasmUASTCToASTC), Fk.wasmUASTCToBC7 && (Ik.LiteTranscoder_UASTC_BC7.WasmBinary = Fk.wasmUASTCToBC7), Fk.wasmUASTCToRGBA_UNORM && (Ik.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = Fk.wasmUASTCToRGBA_UNORM), Fk.wasmUASTCToRGBA_SRGB && (Ik.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = Fk.wasmUASTCToRGBA_SRGB), Fk.wasmUASTCToR8_UNORM && (Ik.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = Fk.wasmUASTCToR8_UNORM), Fk.wasmUASTCToRG8_UNORM && (Ik.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = Fk.wasmUASTCToRG8_UNORM), Fk.jsMSCTranscoder && (Ik.MSCTranscoder.JSModule = Fk.jsMSCTranscoder), Fk.wasmMSCTranscoder && (Ik.MSCTranscoder.WasmBinary = Fk.wasmMSCTranscoder), Fk.wasmZSTDDecoder && (Ik.ZSTDDecoder.WasmBinary = Fk.wasmZSTDDecoder))
    }

    function tk(kk) {
      let Fk;
      "undefined" === typeof kk && "undefined" !== typeof KTX2DECODER && (kk = KTX2DECODER), onmessage = Ik => {
        if (Ik.data) switch (Ik.data.action) {
          case "init": {
            const Xk = Ik.data.urls;
            Xk && (Xk.jsDecoderModule && "undefined" === typeof kk && (importScripts(Xk.jsDecoderModule), kk = KTX2DECODER), Lk(Xk)), Ik.data.wasmBinaries && Lk(void 0, {
              ...Ik.data.wasmBinaries,
              jsDecoderModule: kk
            }), Fk = new kk.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            kk.KTX2Decoder.DefaultDecoderOptions = Ik.data.options;
            break;
          case "decode":
            Fk.decode(Ik.data.data, Ik.data.caps, Ik.data.options).then((kk => {
              const Fk = [];
              for (let Ik = 0; Ik < kk.mipmaps.length; ++Ik) {
                const Xk = kk.mipmaps[Ik];
                Xk && Xk.data && Fk.push(Xk.data.buffer)
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
                oq: kk
              })
            }))
        }
      }
    }! function(kk) {
      kk[kk.ETC1S = 0] = "ETC1S", kk[kk.UASTC4x4 = 1] = "UASTC4x4", kk[kk.RGBA32 = 2] = "RGBA32"
    }(ik || (ik = {})),
    function(kk) {
      kk[kk.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", kk[kk.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", kk[kk.BC7_RGBA = 1] = "BC7_RGBA", kk[kk.BC3_RGBA = 2] = "BC3_RGBA", kk[kk.BC1_RGB = 3] = "BC1_RGB", kk[kk.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", kk[kk.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", kk[kk.ETC2_RGBA = 6] = "ETC2_RGBA", kk[kk.ETC1_RGB = 7] = "ETC1_RGB", kk[kk.RGBA32 = 8] = "RGBA32", kk[kk.R8 = 9] = "R8", kk[kk.RG8 = 10] = "RG8"
    }(yk || (yk = {})),
    function(kk) {
      kk[kk.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", kk[kk.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", kk[kk.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", kk[kk.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", kk[kk.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", kk[kk.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", kk[kk.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", kk[kk.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", kk[kk.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", kk[kk.RGBA8Format = 32856] = "RGBA8Format", kk[kk.R8Format = 33321] = "R8Format", kk[kk.RG8Format = 33323] = "RG8Format"
    }(lk || (lk = {}));
    class Zk {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(kk) {
        if (Zk._WorkerPoolPromise || Zk._DecoderModulePromise) return;
        const Fk = {
          wasmBaseUrl: qk.h.ScriptBaseUrl,
          jsDecoderModule: qk.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: qk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: qk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: qk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: qk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: qk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: qk.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: qk.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: qk.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: qk.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        kk && "function" === typeof Worker && "undefined" !== typeof URL ? Zk._WorkerPoolPromise = new Promise((Ik => {
          const Xk = `${Lk}(${tk})()`,
            Tk = URL.createObjectURL(new Blob([Xk], {
              type: "application/javascript"
            }));
          Ik(new ak.b(kk, (async () => await async function(kk, Fk, Ik) {
            return await new Promise(((Xk, Tk) => {
              const ik = Fk => {
                  kk.removeEventListener("error", ik), kk.removeEventListener("message", yk), Tk(Fk)
                },
                yk = Fk => {
                  "init" === Fk.data.action && (kk.removeEventListener("error", ik), kk.removeEventListener("message", yk), Xk(kk))
                };
              kk.addEventListener("error", ik), kk.addEventListener("message", yk), kk.postMessage({
                action: "init",
                urls: Ik,
                wasmBinaries: Fk
              })
            }))
          }(new Worker(Tk), void 0, Fk))))
        })) : "undefined" === typeof Zk._KTX2DecoderModule ? Zk._DecoderModulePromise = qk.h.LoadBabylonScriptAsync(Fk.jsDecoderModule).then((() => (Zk._KTX2DecoderModule = KTX2DECODER, Zk._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Zk._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Lk(Fk, Zk._KTX2DecoderModule), new Zk._KTX2DecoderModule.KTX2Decoder))) : (Zk._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Zk._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Zk._DecoderModulePromise = Promise.resolve(new Zk._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zk.DefaultNumWorkers;
        this._engine = kk;
        const Ik = "object" === typeof Fk && Fk.workerPool || Zk.WorkerPool;
        if (Ik) Zk._WorkerPoolPromise = Promise.resolve(Ik);
        else {
          "object" === typeof Fk ? Zk._KTX2DecoderModule = Fk?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Zk._KTX2DecoderModule = KTX2DECODER);
          const kk = "number" === typeof Fk ? Fk : Fk.numWorkers ?? Zk.DefaultNumWorkers;
          Zk._Initialize(kk)
        }
      }
      async _uploadAsync(kk, Fk, Ik) {
        const Xk = await this._decodeAsync(kk, Ik);
        this._createTexture(Xk, Fk, Ik)
      }
      async _decodeAsync(kk, Fk) {
        const Ik = this._engine.getCaps(),
          Xk = {
            astc: !!Ik.astc,
            bptc: !!Ik.bptc,
            s3tc: !!Ik.s3tc,
            pvrtc: !!Ik.pvrtc,
            etc2: !!Ik.etc2,
            etc1: !!Ik.etc1
          };
        if (Zk._WorkerPoolPromise) {
          const Ik = await Zk._WorkerPoolPromise;
          return await new Promise(((Tk, ik) => {
            Ik.push(((Ik, yk) => {
              const lk = kk => {
                  Ik.removeEventListener("error", lk), Ik.removeEventListener("message", ak), ik(kk), yk()
                },
                ak = kk => {
                  "decoded" === kk.data.action && (Ik.removeEventListener("error", lk), Ik.removeEventListener("message", ak), kk.data.success ? Tk(kk.data.decodedData) : ik({
                    message: kk.data.oq
                  }), yk())
                };
              Ik.addEventListener("error", lk), Ik.addEventListener("message", ak), Ik.postMessage({
                action: "setDefaultDecoderOptions",
                options: Zk.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const qk = new Uint8Array(kk.byteLength);
              qk.set(new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength)), Ik.postMessage({
                action: "decode",
                data: qk,
                caps: Xk,
                options: Fk
              }, [qk.buffer])
            }))
          }))
        }
        if (Zk._DecoderModulePromise) {
          const Xk = await Zk._DecoderModulePromise;
          return Zk.DefaultDecoderOptions.isDirty && (Zk._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Zk.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Tk, ik) => {
            Xk.decode(kk, Ik, Fk).then((kk => {
              Tk(kk)
            })).catch((kk => {
              ik({
                message: kk
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(kk, Fk, Ik) {
        if ((kk.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, Fk), Ik && (Ik.transcodedFormat = kk.transcodedFormat, Ik.isInGammaSpace = kk.isInGammaSpace, Ik.hasAlpha = kk.hasAlpha, Ik.transcoderName = kk.transcoderName);
        let Xk = !0;
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
            Fk.format = kk.transcodedFormat, Xk = !1
        }
        if (Fk._gammaSpace = kk.isInGammaSpace, Fk.generateMipMaps = kk.mipmaps.length > 1, Fk.width = kk.mipmaps[0].width, Fk.height = kk.mipmaps[0].height, kk.errors) throw new Error("KTX2 container - could not transcode the data. " + kk.errors);
        for (let Tk = 0; Tk < kk.mipmaps.length; ++Tk) {
          const Ik = kk.mipmaps[Tk];
          if (!Ik || !Ik.data) throw new Error("KTX2 container - could not transcode one of the image");
          Xk ? (Fk.width = Ik.width, Fk.height = Ik.height, this._engine._uploadDataToTextureDirectly(Fk, Ik.data, 0, Tk, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(Fk, kk.transcodedFormat, Ik.width, Ik.height, Ik.data, 0, Tk)
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

    function jk(kk) {
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
    Zk.URLConfig = {
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
    }, Zk.DefaultNumWorkers = Zk.GetDefaultNumWorkers(), Zk.DefaultDecoderOptions = new class {
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
            transcodeFormat: [yk.BC1_RGB, yk.BC3_RGBA],
            yes: {
              transcodeFormat: yk.RGBA32,
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
      loadCubeData(kk, Fk, Ik, Xk) {
        if (Array.isArray(kk)) return;
        Fk._invertVScale = !Fk.invertY;
        const ik = Fk.Oe(),
          yk = new Tk(kk, 6),
          lk = jk(yk.glInternalFormat);
        null !== lk ? (Fk.format = lk, Fk._useSRGBBuffer = ik._getUseSRGBBuffer(!0, !Fk.generateMipMaps), Fk._gammaSpace = !0) : Fk.format = yk.glInternalFormat;
        const ak = yk.numberOfMipmapLevels > 1 && Fk.generateMipMaps;
        ik._unpackFlipY(!0), yk.uploadLevels(Fk, Fk.generateMipMaps), Fk.width = yk.pixelWidth, Fk.height = yk.pixelHeight, ik._setCubeMapTextureParams(Fk, ak, yk.numberOfMipmapLevels - 1), Fk.isReady = !0, Fk.onLoadedObservable.notifyObservers(Fk), Fk.onLoadedObservable.clear(), Xk && Xk()
      }
      loadData(kk, Fk, Ik, ik) {
        if (Tk.IsValid(kk)) {
          Fk._invertVScale = !Fk.invertY;
          const Xk = new Tk(kk, 1),
            ik = jk(Xk.glInternalFormat);
          null !== ik ? (Fk.format = ik, Fk._useSRGBBuffer = Fk.Oe()._getUseSRGBBuffer(!0, !Fk.generateMipMaps), Fk._gammaSpace = !0) : Fk.format = Xk.glInternalFormat, Ik(Xk.pixelWidth, Xk.pixelHeight, Fk.generateMipMaps, !0, (() => {
            Xk.uploadLevels(Fk, Fk.generateMipMaps)
          }), Xk.isInvalid)
        } else if (Zk.IsValid(kk)) {
          new Zk(Fk.Oe())._uploadAsync(kk, Fk, ik).then((() => {
            Ik(Fk.width, Fk.height, Fk.generateMipMaps, !0, (() => {}), !1)
          }), (kk => {
            Xk.e.Warn(`Failed to load KTX2 texture data: ${kk.message}`), Ik(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Xk.e.Error("texture missing KTX identifier"), Ik(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41846: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    class Xk {
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
        kk.idle = !1, kk.workerPromise.then((Ik => {
          Fk(Ik, (() => {
            const Fk = this._pendingActions.shift();
            Fk ? this._execute(kk, Fk) : kk.idle = !0
          }))
        }))
      }
    }
    class Tk extends Xk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tk.DefaultOptions;
        super([]), this._maxWorkers = kk, this._createWorkerAsync = Fk, this._options = Ik
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
        kk.timeoutId && (clearTimeout(kk.timeoutId), delete kk.timeoutId), super._execute(kk, ((Ik, Xk) => {
          Fk(Ik, (() => {
            Xk(), kk.idle && (kk.timeoutId = setTimeout((() => {
              kk.workerPromise.then((kk => {
                kk.terminate()
              }));
              const Fk = this._workerInfos.indexOf(kk); - 1 !== Fk && this._workerInfos.splice(Fk, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Tk.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);