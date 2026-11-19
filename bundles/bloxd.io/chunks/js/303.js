export const id = 303;
export const ids = [303];
export const modules = {
  40656: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      _KTXTextureLoader: () => cT
    });
    var iT = IT(37660);
    class zT {
      constructor(TT, oT) {
        if (this.data = TT, this.isInvalid = !1, !zT.IsValid(TT)) return this.isInvalid = !0, void iT.d.Error("texture missing KTX identifier");
        const IT = Uint32Array.BYTES_PER_ELEMENT,
          kT = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * IT),
          WT = 67305985 === kT.getUint32(0, !0);
        return this.glType = kT.getUint32(1 * IT, WT), this.glTypeSize = kT.getUint32(2 * IT, WT), this.glFormat = kT.getUint32(3 * IT, WT), this.glInternalFormat = kT.getUint32(4 * IT, WT), this.glBaseInternalFormat = kT.getUint32(5 * IT, WT), this.pixelWidth = kT.getUint32(6 * IT, WT), this.pixelHeight = kT.getUint32(7 * IT, WT), this.pixelDepth = kT.getUint32(8 * IT, WT), this.numberOfArrayElements = kT.getUint32(9 * IT, WT), this.numberOfFaces = kT.getUint32(10 * IT, WT), this.numberOfMipmapLevels = kT.getUint32(11 * IT, WT), this.bytesOfKeyValueData = kT.getUint32(12 * IT, WT), 0 !== this.glType ? (iT.d.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (iT.d.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (iT.d.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== oT ? (iT.d.Error("number of faces expected" + oT + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = zT.COMPRESSED_2D))
      }
      uploadLevels(TT, oT) {
        switch (this.loadType) {
          case zT.COMPRESSED_2D:
            this._upload2DCompressedLevels(TT, oT);
          case zT.TEX_2D:
          case zT.COMPRESSED_3D:
          case zT.TEX_3D:
        }
      }
      _upload2DCompressedLevels(TT, oT) {
        let IT = zT.HEADER_LEN + this.bytesOfKeyValueData,
          iT = this.pixelWidth,
          kT = this.pixelHeight;
        const WT = oT ? this.numberOfMipmapLevels : 1;
        for (let zT = 0; zT < WT; zT++) {
          const oT = new Int32Array(this.data.buffer, this.data.byteOffset + IT, 1)[0];
          IT += 4;
          for (let WT = 0; WT < this.numberOfFaces; WT++) {
            const XT = new Uint8Array(this.data.buffer, this.data.byteOffset + IT, oT);
            TT.Zc()._uploadCompressedDataToTextureDirectly(TT, TT.format, iT, kT, XT, WT, zT), IT += oT, IT += 3 - (oT + 3) % 4
          }
          iT = Math.max(1, .5 * iT), kT = Math.max(1, .5 * kT)
        }
      }
      static IsValid(TT) {
        if (TT.byteLength >= 12) {
          const oT = new Uint8Array(TT.buffer, TT.byteOffset, 12);
          if (171 === oT[0] && 75 === oT[1] && 84 === oT[2] && 88 === oT[3] && 32 === oT[4] && 49 === oT[5] && 49 === oT[6] && 187 === oT[7] && 13 === oT[8] && 10 === oT[9] && 26 === oT[10] && 10 === oT[11]) return !0
        }
        return !1
      }
    }
    zT.HEADER_LEN = 64, zT.COMPRESSED_2D = 0, zT.COMPRESSED_3D = 1, zT.TEX_2D = 2, zT.TEX_3D = 3;
    var kT, WT, XT, BT = IT(40663),
      FT = IT(38886);

    function ST(TT, oT) {
      const IT = oT?.jsDecoderModule || KTX2DECODER;
      TT && (TT.wasmBaseUrl && (IT.Transcoder.WasmBaseUrl = TT.wasmBaseUrl), TT.wasmUASTCToASTC && (IT.LiteTranscoder_UASTC_ASTC.WasmModuleURL = TT.wasmUASTCToASTC), TT.wasmUASTCToBC7 && (IT.LiteTranscoder_UASTC_BC7.WasmModuleURL = TT.wasmUASTCToBC7), TT.wasmUASTCToRGBA_UNORM && (IT.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = TT.wasmUASTCToRGBA_UNORM), TT.wasmUASTCToRGBA_SRGB && (IT.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = TT.wasmUASTCToRGBA_SRGB), TT.wasmUASTCToR8_UNORM && (IT.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = TT.wasmUASTCToR8_UNORM), TT.wasmUASTCToRG8_UNORM && (IT.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = TT.wasmUASTCToRG8_UNORM), TT.jsMSCTranscoder && (IT.MSCTranscoder.JSModuleURL = TT.jsMSCTranscoder), TT.wasmMSCTranscoder && (IT.MSCTranscoder.WasmModuleURL = TT.wasmMSCTranscoder), TT.wasmZSTDDecoder && (IT.ZSTDDecoder.WasmModuleURL = TT.wasmZSTDDecoder)), oT && (oT.wasmUASTCToASTC && (IT.LiteTranscoder_UASTC_ASTC.WasmBinary = oT.wasmUASTCToASTC), oT.wasmUASTCToBC7 && (IT.LiteTranscoder_UASTC_BC7.WasmBinary = oT.wasmUASTCToBC7), oT.wasmUASTCToRGBA_UNORM && (IT.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = oT.wasmUASTCToRGBA_UNORM), oT.wasmUASTCToRGBA_SRGB && (IT.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = oT.wasmUASTCToRGBA_SRGB), oT.wasmUASTCToR8_UNORM && (IT.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = oT.wasmUASTCToR8_UNORM), oT.wasmUASTCToRG8_UNORM && (IT.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = oT.wasmUASTCToRG8_UNORM), oT.jsMSCTranscoder && (IT.MSCTranscoder.JSModule = oT.jsMSCTranscoder), oT.wasmMSCTranscoder && (IT.MSCTranscoder.WasmBinary = oT.wasmMSCTranscoder), oT.wasmZSTDDecoder && (IT.ZSTDDecoder.WasmBinary = oT.wasmZSTDDecoder))
    }

    function DT(TT) {
      let oT;
      "undefined" === typeof TT && "undefined" !== typeof KTX2DECODER && (TT = KTX2DECODER), onmessage = IT => {
        if (IT.data) switch (IT.data.action) {
          case "init": {
            const iT = IT.data.urls;
            iT && (iT.jsDecoderModule && "undefined" === typeof TT && (importScripts(iT.jsDecoderModule), TT = KTX2DECODER), ST(iT)), IT.data.wasmBinaries && ST(void 0, {
              ...IT.data.wasmBinaries,
              jsDecoderModule: TT
            }), oT = new TT.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            TT.KTX2Decoder.DefaultDecoderOptions = IT.data.options;
            break;
          case "decode":
            oT.decode(IT.data.data, IT.data.caps, IT.data.options).then((TT => {
              const oT = [];
              for (let IT = 0; IT < TT.mipmaps.length; ++IT) {
                const iT = TT.mipmaps[IT];
                iT && iT.data && oT.push(iT.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: TT
              }, oT)
            })).catch((TT => {
              postMessage({
                action: "decoded",
                success: !1,
                US: TT
              })
            }))
        }
      }
    }! function(TT) {
      TT[TT.ETC1S = 0] = "ETC1S", TT[TT.UASTC4x4 = 1] = "UASTC4x4", TT[TT.RGBA32 = 2] = "RGBA32"
    }(kT || (kT = {})),
    function(TT) {
      TT[TT.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", TT[TT.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", TT[TT.BC7_RGBA = 1] = "BC7_RGBA", TT[TT.BC3_RGBA = 2] = "BC3_RGBA", TT[TT.BC1_RGB = 3] = "BC1_RGB", TT[TT.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", TT[TT.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", TT[TT.ETC2_RGBA = 6] = "ETC2_RGBA", TT[TT.ETC1_RGB = 7] = "ETC1_RGB", TT[TT.RGBA32 = 8] = "RGBA32", TT[TT.R8 = 9] = "R8", TT[TT.RG8 = 10] = "RG8"
    }(WT || (WT = {})),
    function(TT) {
      TT[TT.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", TT[TT.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", TT[TT.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", TT[TT.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", TT[TT.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", TT[TT.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", TT[TT.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", TT[TT.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", TT[TT.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", TT[TT.RGBA8Format = 32856] = "RGBA8Format", TT[TT.R8Format = 33321] = "R8Format", TT[TT.RG8Format = 33323] = "RG8Format"
    }(XT || (XT = {}));
    class LT {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(TT) {
        if (LT._WorkerPoolPromise || LT._DecoderModulePromise) return;
        const oT = {
          wasmBaseUrl: FT.i.ScriptBaseUrl,
          jsDecoderModule: FT.i.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: FT.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: FT.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: FT.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: FT.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: FT.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: FT.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: FT.i.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: FT.i.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: FT.i.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        TT && "function" === typeof Worker && "undefined" !== typeof URL ? LT._WorkerPoolPromise = new Promise((IT => {
          const iT = `${ST}(${DT})()`,
            zT = URL.createObjectURL(new Blob([iT], {
              type: "application/javascript"
            }));
          IT(new BT.e(TT, (async () => await async function(TT, oT, IT) {
            return await new Promise(((iT, zT) => {
              const kT = oT => {
                  TT.removeEventListener("error", kT), TT.removeEventListener("message", WT), zT(oT)
                },
                WT = oT => {
                  "init" === oT.data.action && (TT.removeEventListener("error", kT), TT.removeEventListener("message", WT), iT(TT))
                };
              TT.addEventListener("error", kT), TT.addEventListener("message", WT), TT.postMessage({
                action: "init",
                urls: IT,
                wasmBinaries: oT
              })
            }))
          }(new Worker(zT), void 0, oT))))
        })) : "undefined" === typeof LT._KTX2DecoderModule ? LT._DecoderModulePromise = FT.i.LoadBabylonScriptAsync(oT.jsDecoderModule).then((() => (LT._KTX2DecoderModule = KTX2DECODER, LT._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, LT._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, ST(oT, LT._KTX2DecoderModule), new LT._KTX2DecoderModule.KTX2Decoder))) : (LT._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, LT._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, LT._DecoderModulePromise = Promise.resolve(new LT._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LT.DefaultNumWorkers;
        this._engine = TT;
        const IT = "object" === typeof oT && oT.workerPool || LT.WorkerPool;
        if (IT) LT._WorkerPoolPromise = Promise.resolve(IT);
        else {
          "object" === typeof oT ? LT._KTX2DecoderModule = oT?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (LT._KTX2DecoderModule = KTX2DECODER);
          const TT = "number" === typeof oT ? oT : oT.numWorkers ?? LT.DefaultNumWorkers;
          LT._Initialize(TT)
        }
      }
      async _uploadAsync(TT, oT, IT) {
        const iT = await this._decodeAsync(TT, IT);
        this._createTexture(iT, oT, IT)
      }
      async _decodeAsync(TT, oT) {
        const IT = this._engine.getCaps(),
          iT = {
            astc: !!IT.astc,
            bptc: !!IT.bptc,
            s3tc: !!IT.s3tc,
            pvrtc: !!IT.pvrtc,
            etc2: !!IT.etc2,
            etc1: !!IT.etc1
          };
        if (LT._WorkerPoolPromise) {
          const IT = await LT._WorkerPoolPromise;
          return await new Promise(((zT, kT) => {
            IT.push(((IT, WT) => {
              const XT = TT => {
                  IT.removeEventListener("error", XT), IT.removeEventListener("message", BT), kT(TT), WT()
                },
                BT = TT => {
                  "decoded" === TT.data.action && (IT.removeEventListener("error", XT), IT.removeEventListener("message", BT), TT.data.success ? zT(TT.data.decodedData) : kT({
                    message: TT.data.US
                  }), WT())
                };
              IT.addEventListener("error", XT), IT.addEventListener("message", BT), IT.postMessage({
                action: "setDefaultDecoderOptions",
                options: LT.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const FT = new Uint8Array(TT.byteLength);
              FT.set(new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength)), IT.postMessage({
                action: "decode",
                data: FT,
                caps: iT,
                options: oT
              }, [FT.buffer])
            }))
          }))
        }
        if (LT._DecoderModulePromise) {
          const iT = await LT._DecoderModulePromise;
          return LT.DefaultDecoderOptions.isDirty && (LT._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = LT.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((zT, kT) => {
            iT.decode(TT, IT, oT).then((TT => {
              zT(TT)
            })).catch((TT => {
              kT({
                message: TT
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(TT, oT, IT) {
        if ((TT.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, oT), IT && (IT.transcodedFormat = TT.transcodedFormat, IT.isInGammaSpace = TT.isInGammaSpace, IT.hasAlpha = TT.hasAlpha, IT.transcoderName = TT.transcoderName);
        let iT = !0;
        switch (TT.transcodedFormat) {
          case 32856:
            oT.type = 0, oT.format = 5;
            break;
          case 33321:
            oT.type = 0, oT.format = 6;
            break;
          case 33323:
            oT.type = 0, oT.format = 7;
            break;
          default:
            oT.format = TT.transcodedFormat, iT = !1
        }
        if (oT._gammaSpace = TT.isInGammaSpace, oT.generateMipMaps = TT.mipmaps.length > 1, oT.width = TT.mipmaps[0].width, oT.height = TT.mipmaps[0].height, TT.errors) throw new Error("KTX2 container - could not transcode the data. " + TT.errors);
        for (let zT = 0; zT < TT.mipmaps.length; ++zT) {
          const IT = TT.mipmaps[zT];
          if (!IT || !IT.data) throw new Error("KTX2 container - could not transcode one of the image");
          iT ? (oT.width = IT.width, oT.height = IT.height, this._engine._uploadDataToTextureDirectly(oT, IT.data, 0, zT, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(oT, TT.transcodedFormat, IT.width, IT.height, IT.data, 0, zT)
        }
        oT._extension = ".ktx2", oT.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(TT) {
        if (TT.byteLength >= 12) {
          const oT = new Uint8Array(TT.buffer, TT.byteOffset, 12);
          if (171 === oT[0] && 75 === oT[1] && 84 === oT[2] && 88 === oT[3] && 32 === oT[4] && 50 === oT[5] && 48 === oT[6] && 187 === oT[7] && 13 === oT[8] && 10 === oT[9] && 26 === oT[10] && 10 === oT[11]) return !0
        }
        return !1
      }
    }

    function xT(TT) {
      switch (TT) {
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
    LT.URLConfig = {
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
    }, LT.DefaultNumWorkers = LT.GetDefaultNumWorkers(), LT.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(TT) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== TT && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = TT, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(TT) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== TT && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = TT, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(TT) {
        this._forceRGBA !== TT && (this._forceRGBA = TT, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(TT) {
        this._forceR8 !== TT && (this._forceR8 = TT, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(TT) {
        this._forceRG8 !== TT && (this._forceRG8 = TT, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(TT) {
        this._bypassTranscoders !== TT && (this._bypassTranscoders = TT, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const TT = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (TT.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (TT.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (TT.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (TT.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (TT.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (TT.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [WT.BC1_RGB, WT.BC3_RGBA],
            yes: {
              transcodeFormat: WT.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = TT, TT
      }
    };
    class cT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, oT, IT, iT) {
        if (Array.isArray(TT)) return;
        oT._invertVScale = !oT.invertY;
        const kT = oT.Zc(),
          WT = new zT(TT, 6),
          XT = xT(WT.glInternalFormat);
        null !== XT ? (oT.format = XT, oT._useSRGBBuffer = kT._getUseSRGBBuffer(!0, !oT.generateMipMaps), oT._gammaSpace = !0) : oT.format = WT.glInternalFormat;
        const BT = WT.numberOfMipmapLevels > 1 && oT.generateMipMaps;
        kT._unpackFlipY(!0), WT.uploadLevels(oT, oT.generateMipMaps), oT.width = WT.pixelWidth, oT.height = WT.pixelHeight, kT._setCubeMapTextureParams(oT, BT, WT.numberOfMipmapLevels - 1), oT.isReady = !0, oT.onLoadedObservable.notifyObservers(oT), oT.onLoadedObservable.clear(), iT && iT()
      }
      loadData(TT, oT, IT, kT) {
        if (zT.IsValid(TT)) {
          oT._invertVScale = !oT.invertY;
          const iT = new zT(TT, 1),
            kT = xT(iT.glInternalFormat);
          null !== kT ? (oT.format = kT, oT._useSRGBBuffer = oT.Zc()._getUseSRGBBuffer(!0, !oT.generateMipMaps), oT._gammaSpace = !0) : oT.format = iT.glInternalFormat, IT(iT.pixelWidth, iT.pixelHeight, oT.generateMipMaps, !0, (() => {
            iT.uploadLevels(oT, oT.generateMipMaps)
          }), iT.isInvalid)
        } else if (LT.IsValid(TT)) {
          new LT(oT.Zc())._uploadAsync(TT, oT, kT).then((() => {
            IT(oT.width, oT.height, oT.generateMipMaps, !0, (() => {}), !1)
          }), (TT => {
            iT.d.Warn(`Failed to load KTX2 texture data: ${TT.message}`), IT(0, 0, !1, !1, (() => {}), !0)
          }))
        } else iT.d.Error("texture missing KTX identifier"), IT(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  40663: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT
    });
    class iT {
      constructor(TT) {
        this._pendingActions = new Array, this._workerInfos = TT.map((TT => ({
          workerPromise: Promise.resolve(TT),
          idle: !0
        })))
      }
      dispose() {
        for (const TT of this._workerInfos) TT.workerPromise.then((TT => {
          TT.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(TT) {
        this._executeOnIdleWorker(TT) || this._pendingActions.push(TT)
      }
      _executeOnIdleWorker(TT) {
        for (const oT of this._workerInfos)
          if (oT.idle) return this._execute(oT, TT), !0;
        return !1
      }
      _execute(TT, oT) {
        TT.idle = !1, TT.workerPromise.then((IT => {
          oT(IT, (() => {
            const oT = this._pendingActions.shift();
            oT ? this._execute(TT, oT) : TT.idle = !0
          }))
        }))
      }
    }
    class zT extends iT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.DefaultOptions;
        super([]), this._maxWorkers = TT, this._createWorkerAsync = oT, this._options = IT
      }
      push(TT) {
        if (!this._executeOnIdleWorker(TT))
          if (this._workerInfos.length < this._maxWorkers) {
            const oT = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(oT), this._execute(oT, TT)
          } else this._pendingActions.push(TT)
      }
      _execute(TT, oT) {
        TT.timeoutId && (clearTimeout(TT.timeoutId), delete TT.timeoutId), super._execute(TT, ((IT, iT) => {
          oT(IT, (() => {
            iT(), TT.idle && (TT.timeoutId = setTimeout((() => {
              TT.workerPromise.then((TT => {
                TT.terminate()
              }));
              const oT = this._workerInfos.indexOf(TT); - 1 !== oT && this._workerInfos.splice(oT, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    zT.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);