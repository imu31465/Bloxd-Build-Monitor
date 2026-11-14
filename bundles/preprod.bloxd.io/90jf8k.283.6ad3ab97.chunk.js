export const id = 283;
export const ids = [283];
export const modules = {
  39681: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      _KTXTextureLoader: () => QF
    });
    var CF = SF(37076);
    class AF {
      constructor(FF, WF) {
        if (this.data = FF, this.isInvalid = !1, !AF.IsValid(FF)) return this.isInvalid = !0, void CF.b.Error("texture missing KTX identifier");
        const SF = Uint32Array.BYTES_PER_ELEMENT,
          uF = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * SF),
          hF = 67305985 === uF.getUint32(0, !0);
        return this.glType = uF.getUint32(1 * SF, hF), this.glTypeSize = uF.getUint32(2 * SF, hF), this.glFormat = uF.getUint32(3 * SF, hF), this.glInternalFormat = uF.getUint32(4 * SF, hF), this.glBaseInternalFormat = uF.getUint32(5 * SF, hF), this.pixelWidth = uF.getUint32(6 * SF, hF), this.pixelHeight = uF.getUint32(7 * SF, hF), this.pixelDepth = uF.getUint32(8 * SF, hF), this.numberOfArrayElements = uF.getUint32(9 * SF, hF), this.numberOfFaces = uF.getUint32(10 * SF, hF), this.numberOfMipmapLevels = uF.getUint32(11 * SF, hF), this.bytesOfKeyValueData = uF.getUint32(12 * SF, hF), 0 !== this.glType ? (CF.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (CF.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (CF.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== WF ? (CF.b.Error("number of faces expected" + WF + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = AF.COMPRESSED_2D))
      }
      uploadLevels(FF, WF) {
        switch (this.loadType) {
          case AF.COMPRESSED_2D:
            this._upload2DCompressedLevels(FF, WF);
          case AF.TEX_2D:
          case AF.COMPRESSED_3D:
          case AF.TEX_3D:
        }
      }
      _upload2DCompressedLevels(FF, WF) {
        let SF = AF.HEADER_LEN + this.bytesOfKeyValueData,
          CF = this.pixelWidth,
          uF = this.pixelHeight;
        const hF = WF ? this.numberOfMipmapLevels : 1;
        for (let AF = 0; AF < hF; AF++) {
          const WF = new Int32Array(this.data.buffer, this.data.byteOffset + SF, 1)[0];
          SF += 4;
          for (let hF = 0; hF < this.numberOfFaces; hF++) {
            const bW = new Uint8Array(this.data.buffer, this.data.byteOffset + SF, WF);
            FF.sC()._uploadCompressedDataToTextureDirectly(FF, FF.format, CF, uF, bW, hF, AF), SF += WF, SF += 3 - (WF + 3) % 4
          }
          CF = Math.max(1, .5 * CF), uF = Math.max(1, .5 * uF)
        }
      }
      static IsValid(FF) {
        if (FF.byteLength >= 12) {
          const WF = new Uint8Array(FF.buffer, FF.byteOffset, 12);
          if (171 === WF[0] && 75 === WF[1] && 84 === WF[2] && 88 === WF[3] && 32 === WF[4] && 49 === WF[5] && 49 === WF[6] && 187 === WF[7] && 13 === WF[8] && 10 === WF[9] && 26 === WF[10] && 10 === WF[11]) return !0
        }
        return !1
      }
    }
    AF.HEADER_LEN = 64, AF.COMPRESSED_2D = 0, AF.COMPRESSED_3D = 1, AF.TEX_2D = 2, AF.TEX_3D = 3;
    var uF, hF, bW, dF = SF(39690),
      PF = SF(38065);

    function RF(FF, WF) {
      const SF = WF?.jsDecoderModule || KTX2DECODER;
      FF && (FF.wasmBaseUrl && (SF.Transcoder.WasmBaseUrl = FF.wasmBaseUrl), FF.wasmUASTCToASTC && (SF.LiteTranscoder_UASTC_ASTC.WasmModuleURL = FF.wasmUASTCToASTC), FF.wasmUASTCToBC7 && (SF.LiteTranscoder_UASTC_BC7.WasmModuleURL = FF.wasmUASTCToBC7), FF.wasmUASTCToRGBA_UNORM && (SF.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = FF.wasmUASTCToRGBA_UNORM), FF.wasmUASTCToRGBA_SRGB && (SF.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = FF.wasmUASTCToRGBA_SRGB), FF.wasmUASTCToR8_UNORM && (SF.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = FF.wasmUASTCToR8_UNORM), FF.wasmUASTCToRG8_UNORM && (SF.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = FF.wasmUASTCToRG8_UNORM), FF.jsMSCTranscoder && (SF.MSCTranscoder.JSModuleURL = FF.jsMSCTranscoder), FF.wasmMSCTranscoder && (SF.MSCTranscoder.WasmModuleURL = FF.wasmMSCTranscoder), FF.wasmZSTDDecoder && (SF.ZSTDDecoder.WasmModuleURL = FF.wasmZSTDDecoder)), WF && (WF.wasmUASTCToASTC && (SF.LiteTranscoder_UASTC_ASTC.WasmBinary = WF.wasmUASTCToASTC), WF.wasmUASTCToBC7 && (SF.LiteTranscoder_UASTC_BC7.WasmBinary = WF.wasmUASTCToBC7), WF.wasmUASTCToRGBA_UNORM && (SF.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = WF.wasmUASTCToRGBA_UNORM), WF.wasmUASTCToRGBA_SRGB && (SF.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = WF.wasmUASTCToRGBA_SRGB), WF.wasmUASTCToR8_UNORM && (SF.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = WF.wasmUASTCToR8_UNORM), WF.wasmUASTCToRG8_UNORM && (SF.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = WF.wasmUASTCToRG8_UNORM), WF.jsMSCTranscoder && (SF.MSCTranscoder.JSModule = WF.jsMSCTranscoder), WF.wasmMSCTranscoder && (SF.MSCTranscoder.WasmBinary = WF.wasmMSCTranscoder), WF.wasmZSTDDecoder && (SF.ZSTDDecoder.WasmBinary = WF.wasmZSTDDecoder))
    }

    function iW(FF) {
      let WF;
      "undefined" === typeof FF && "undefined" !== typeof KTX2DECODER && (FF = KTX2DECODER), onmessage = SF => {
        if (SF.data) switch (SF.data.action) {
          case "init": {
            const CF = SF.data.urls;
            CF && (CF.jsDecoderModule && "undefined" === typeof FF && (importScripts(CF.jsDecoderModule), FF = KTX2DECODER), RF(CF)), SF.data.wasmBinaries && RF(void 0, {
              ...SF.data.wasmBinaries,
              jsDecoderModule: FF
            }), WF = new FF.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            FF.KTX2Decoder.DefaultDecoderOptions = SF.data.options;
            break;
          case "decode":
            WF.decode(SF.data.data, SF.data.caps, SF.data.options).then((FF => {
              const WF = [];
              for (let SF = 0; SF < FF.mipmaps.length; ++SF) {
                const CF = FF.mipmaps[SF];
                CF && CF.data && WF.push(CF.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: FF
              }, WF)
            })).catch((FF => {
              postMessage({
                action: "decoded",
                success: !1,
                rb: FF
              })
            }))
        }
      }
    }! function(FF) {
      FF[FF.ETC1S = 0] = "ETC1S", FF[FF.UASTC4x4 = 1] = "UASTC4x4", FF[FF.RGBA32 = 2] = "RGBA32"
    }(uF || (uF = {})),
    function(FF) {
      FF[FF.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", FF[FF.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", FF[FF.BC7_RGBA = 1] = "BC7_RGBA", FF[FF.BC3_RGBA = 2] = "BC3_RGBA", FF[FF.BC1_RGB = 3] = "BC1_RGB", FF[FF.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", FF[FF.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", FF[FF.ETC2_RGBA = 6] = "ETC2_RGBA", FF[FF.ETC1_RGB = 7] = "ETC1_RGB", FF[FF.RGBA32 = 8] = "RGBA32", FF[FF.R8 = 9] = "R8", FF[FF.RG8 = 10] = "RG8"
    }(hF || (hF = {})),
    function(FF) {
      FF[FF.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", FF[FF.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", FF[FF.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", FF[FF.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", FF[FF.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", FF[FF.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", FF[FF.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", FF[FF.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", FF[FF.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", FF[FF.RGBA8Format = 32856] = "RGBA8Format", FF[FF.R8Format = 33321] = "R8Format", FF[FF.RG8Format = 33323] = "RG8Format"
    }(bW || (bW = {}));
    class eF {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(FF) {
        if (eF._WorkerPoolPromise || eF._DecoderModulePromise) return;
        const WF = {
          wasmBaseUrl: PF.h.ScriptBaseUrl,
          jsDecoderModule: PF.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: PF.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: PF.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: PF.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: PF.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: PF.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: PF.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: PF.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: PF.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: PF.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        FF && "function" === typeof Worker && "undefined" !== typeof URL ? eF._WorkerPoolPromise = new Promise((SF => {
          const CF = `${RF}(${iW})()`,
            AF = URL.createObjectURL(new Blob([CF], {
              type: "application/javascript"
            }));
          SF(new dF.b(FF, (async () => await async function(FF, WF, SF) {
            return await new Promise(((CF, AF) => {
              const uF = WF => {
                  FF.removeEventListener("error", uF), FF.removeEventListener("message", hF), AF(WF)
                },
                hF = WF => {
                  "init" === WF.data.action && (FF.removeEventListener("error", uF), FF.removeEventListener("message", hF), CF(FF))
                };
              FF.addEventListener("error", uF), FF.addEventListener("message", hF), FF.postMessage({
                action: "init",
                urls: SF,
                wasmBinaries: WF
              })
            }))
          }(new Worker(AF), void 0, WF))))
        })) : "undefined" === typeof eF._KTX2DecoderModule ? eF._DecoderModulePromise = PF.h.LoadBabylonScriptAsync(WF.jsDecoderModule).then((() => (eF._KTX2DecoderModule = KTX2DECODER, eF._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, eF._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, RF(WF, eF._KTX2DecoderModule), new eF._KTX2DecoderModule.KTX2Decoder))) : (eF._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, eF._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, eF._DecoderModulePromise = Promise.resolve(new eF._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.DefaultNumWorkers;
        this._engine = FF;
        const SF = "object" === typeof WF && WF.workerPool || eF.WorkerPool;
        if (SF) eF._WorkerPoolPromise = Promise.resolve(SF);
        else {
          "object" === typeof WF ? eF._KTX2DecoderModule = WF?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (eF._KTX2DecoderModule = KTX2DECODER);
          const FF = "number" === typeof WF ? WF : WF.numWorkers ?? eF.DefaultNumWorkers;
          eF._Initialize(FF)
        }
      }
      async _uploadAsync(FF, WF, SF) {
        const CF = await this._decodeAsync(FF, SF);
        this._createTexture(CF, WF, SF)
      }
      async _decodeAsync(FF, WF) {
        const SF = this._engine.getCaps(),
          CF = {
            astc: !!SF.astc,
            bptc: !!SF.bptc,
            s3tc: !!SF.s3tc,
            pvrtc: !!SF.pvrtc,
            etc2: !!SF.etc2,
            etc1: !!SF.etc1
          };
        if (eF._WorkerPoolPromise) {
          const SF = await eF._WorkerPoolPromise;
          return await new Promise(((AF, uF) => {
            SF.push(((SF, hF) => {
              const bW = FF => {
                  SF.removeEventListener("error", bW), SF.removeEventListener("message", dF), uF(FF), hF()
                },
                dF = FF => {
                  "decoded" === FF.data.action && (SF.removeEventListener("error", bW), SF.removeEventListener("message", dF), FF.data.success ? AF(FF.data.decodedData) : uF({
                    message: FF.data.rb
                  }), hF())
                };
              SF.addEventListener("error", bW), SF.addEventListener("message", dF), SF.postMessage({
                action: "setDefaultDecoderOptions",
                options: eF.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const PF = new Uint8Array(FF.byteLength);
              PF.set(new Uint8Array(FF.buffer, FF.byteOffset, FF.byteLength)), SF.postMessage({
                action: "decode",
                data: PF,
                caps: CF,
                options: WF
              }, [PF.buffer])
            }))
          }))
        }
        if (eF._DecoderModulePromise) {
          const CF = await eF._DecoderModulePromise;
          return eF.DefaultDecoderOptions.isDirty && (eF._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = eF.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((AF, uF) => {
            CF.decode(FF, SF, WF).then((FF => {
              AF(FF)
            })).catch((FF => {
              uF({
                message: FF
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(FF, WF, SF) {
        if ((FF.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, WF), SF && (SF.transcodedFormat = FF.transcodedFormat, SF.isInGammaSpace = FF.isInGammaSpace, SF.hasAlpha = FF.hasAlpha, SF.transcoderName = FF.transcoderName);
        let CF = !0;
        switch (FF.transcodedFormat) {
          case 32856:
            WF.type = 0, WF.format = 5;
            break;
          case 33321:
            WF.type = 0, WF.format = 6;
            break;
          case 33323:
            WF.type = 0, WF.format = 7;
            break;
          default:
            WF.format = FF.transcodedFormat, CF = !1
        }
        if (WF._gammaSpace = FF.isInGammaSpace, WF.generateMipMaps = FF.mipmaps.length > 1, WF.width = FF.mipmaps[0].width, WF.height = FF.mipmaps[0].height, FF.errors) throw new Error("KTX2 container - could not transcode the data. " + FF.errors);
        for (let AF = 0; AF < FF.mipmaps.length; ++AF) {
          const SF = FF.mipmaps[AF];
          if (!SF || !SF.data) throw new Error("KTX2 container - could not transcode one of the image");
          CF ? (WF.width = SF.width, WF.height = SF.height, this._engine._uploadDataToTextureDirectly(WF, SF.data, 0, AF, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(WF, FF.transcodedFormat, SF.width, SF.height, SF.data, 0, AF)
        }
        WF._extension = ".ktx2", WF.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(FF) {
        if (FF.byteLength >= 12) {
          const WF = new Uint8Array(FF.buffer, FF.byteOffset, 12);
          if (171 === WF[0] && 75 === WF[1] && 84 === WF[2] && 88 === WF[3] && 32 === WF[4] && 50 === WF[5] && 48 === WF[6] && 187 === WF[7] && 13 === WF[8] && 10 === WF[9] && 26 === WF[10] && 10 === WF[11]) return !0
        }
        return !1
      }
    }

    function EF(FF) {
      switch (FF) {
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
    eF.URLConfig = {
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
    }, eF.DefaultNumWorkers = eF.GetDefaultNumWorkers(), eF.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(FF) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== FF && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = FF, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(FF) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== FF && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = FF, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(FF) {
        this._forceRGBA !== FF && (this._forceRGBA = FF, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(FF) {
        this._forceR8 !== FF && (this._forceR8 = FF, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(FF) {
        this._forceRG8 !== FF && (this._forceRG8 = FF, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(FF) {
        this._bypassTranscoders !== FF && (this._bypassTranscoders = FF, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const FF = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (FF.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (FF.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (FF.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (FF.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (FF.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (FF.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [hF.BC1_RGB, hF.BC3_RGBA],
            yes: {
              transcodeFormat: hF.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = FF, FF
      }
    };
    class QF {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(FF, WF, SF, CF) {
        if (Array.isArray(FF)) return;
        WF._invertVScale = !WF.invertY;
        const uF = WF.sC(),
          hF = new AF(FF, 6),
          bW = EF(hF.glInternalFormat);
        null !== bW ? (WF.format = bW, WF._useSRGBBuffer = uF._getUseSRGBBuffer(!0, !WF.generateMipMaps), WF._gammaSpace = !0) : WF.format = hF.glInternalFormat;
        const dF = hF.numberOfMipmapLevels > 1 && WF.generateMipMaps;
        uF._unpackFlipY(!0), hF.uploadLevels(WF, WF.generateMipMaps), WF.width = hF.pixelWidth, WF.height = hF.pixelHeight, uF._setCubeMapTextureParams(WF, dF, hF.numberOfMipmapLevels - 1), WF.isReady = !0, WF.onLoadedObservable.notifyObservers(WF), WF.onLoadedObservable.clear(), CF && CF()
      }
      loadData(FF, WF, SF, uF) {
        if (AF.IsValid(FF)) {
          WF._invertVScale = !WF.invertY;
          const CF = new AF(FF, 1),
            uF = EF(CF.glInternalFormat);
          null !== uF ? (WF.format = uF, WF._useSRGBBuffer = WF.sC()._getUseSRGBBuffer(!0, !WF.generateMipMaps), WF._gammaSpace = !0) : WF.format = CF.glInternalFormat, SF(CF.pixelWidth, CF.pixelHeight, WF.generateMipMaps, !0, (() => {
            CF.uploadLevels(WF, WF.generateMipMaps)
          }), CF.isInvalid)
        } else if (eF.IsValid(FF)) {
          new eF(WF.sC())._uploadAsync(FF, WF, uF).then((() => {
            SF(WF.width, WF.height, WF.generateMipMaps, !0, (() => {}), !1)
          }), (FF => {
            CF.b.Warn(`Failed to load KTX2 texture data: ${FF.message}`), SF(0, 0, !1, !1, (() => {}), !0)
          }))
        } else CF.b.Error("texture missing KTX identifier"), SF(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  39690: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF
    });
    class CF {
      constructor(FF) {
        this._pendingActions = new Array, this._workerInfos = FF.map((FF => ({
          workerPromise: Promise.resolve(FF),
          idle: !0
        })))
      }
      dispose() {
        for (const FF of this._workerInfos) FF.workerPromise.then((FF => {
          FF.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(FF) {
        this._executeOnIdleWorker(FF) || this._pendingActions.push(FF)
      }
      _executeOnIdleWorker(FF) {
        for (const WF of this._workerInfos)
          if (WF.idle) return this._execute(WF, FF), !0;
        return !1
      }
      _execute(FF, WF) {
        FF.idle = !1, FF.workerPromise.then((SF => {
          WF(SF, (() => {
            const WF = this._pendingActions.shift();
            WF ? this._execute(FF, WF) : FF.idle = !0
          }))
        }))
      }
    }
    class AF extends CF {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AF.DefaultOptions;
        super([]), this._maxWorkers = FF, this._createWorkerAsync = WF, this._options = SF
      }
      push(FF) {
        if (!this._executeOnIdleWorker(FF))
          if (this._workerInfos.length < this._maxWorkers) {
            const WF = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(WF), this._execute(WF, FF)
          } else this._pendingActions.push(FF)
      }
      _execute(FF, WF) {
        FF.timeoutId && (clearTimeout(FF.timeoutId), delete FF.timeoutId), super._execute(FF, ((SF, CF) => {
          WF(SF, (() => {
            CF(), FF.idle && (FF.timeoutId = setTimeout((() => {
              FF.workerPromise.then((FF => {
                FF.terminate()
              }));
              const WF = this._workerInfos.indexOf(FF); - 1 !== WF && this._workerInfos.splice(WF, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    AF.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);