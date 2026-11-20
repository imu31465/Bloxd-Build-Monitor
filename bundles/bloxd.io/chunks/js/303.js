export const id = 303;
export const ids = [303];
export const modules = {
  41423: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      _KTXTextureLoader: () => Su
    });
    var Eu = yu(38448);
    class Ku {
      constructor(uu, Ru) {
        if (this.data = uu, this.isInvalid = !1, !Ku.IsValid(uu)) return this.isInvalid = !0, void Eu.e.Error("texture missing KTX identifier");
        const yu = Uint32Array.BYTES_PER_ELEMENT,
          Qu = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * yu),
          mu = 67305985 === Qu.getUint32(0, !0);
        return this.glType = Qu.getUint32(1 * yu, mu), this.glTypeSize = Qu.getUint32(2 * yu, mu), this.glFormat = Qu.getUint32(3 * yu, mu), this.glInternalFormat = Qu.getUint32(4 * yu, mu), this.glBaseInternalFormat = Qu.getUint32(5 * yu, mu), this.pixelWidth = Qu.getUint32(6 * yu, mu), this.pixelHeight = Qu.getUint32(7 * yu, mu), this.pixelDepth = Qu.getUint32(8 * yu, mu), this.numberOfArrayElements = Qu.getUint32(9 * yu, mu), this.numberOfFaces = Qu.getUint32(10 * yu, mu), this.numberOfMipmapLevels = Qu.getUint32(11 * yu, mu), this.bytesOfKeyValueData = Qu.getUint32(12 * yu, mu), 0 !== this.glType ? (Eu.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Eu.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Eu.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== Ru ? (Eu.e.Error("number of faces expected" + Ru + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Ku.COMPRESSED_2D))
      }
      uploadLevels(uu, Ru) {
        switch (this.loadType) {
          case Ku.COMPRESSED_2D:
            this._upload2DCompressedLevels(uu, Ru);
          case Ku.TEX_2D:
          case Ku.COMPRESSED_3D:
          case Ku.TEX_3D:
        }
      }
      _upload2DCompressedLevels(uu, Ru) {
        let yu = Ku.HEADER_LEN + this.bytesOfKeyValueData,
          Eu = this.pixelWidth,
          Qu = this.pixelHeight;
        const mu = Ru ? this.numberOfMipmapLevels : 1;
        for (let Ku = 0; Ku < mu; Ku++) {
          const Ru = new Int32Array(this.data.buffer, this.data.byteOffset + yu, 1)[0];
          yu += 4;
          for (let mu = 0; mu < this.numberOfFaces; mu++) {
            const Ju = new Uint8Array(this.data.buffer, this.data.byteOffset + yu, Ru);
            uu.eS()._uploadCompressedDataToTextureDirectly(uu, uu.format, Eu, Qu, Ju, mu, Ku), yu += Ru, yu += 3 - (Ru + 3) % 4
          }
          Eu = Math.max(1, .5 * Eu), Qu = Math.max(1, .5 * Qu)
        }
      }
      static IsValid(uu) {
        if (uu.byteLength >= 12) {
          const Ru = new Uint8Array(uu.buffer, uu.byteOffset, 12);
          if (171 === Ru[0] && 75 === Ru[1] && 84 === Ru[2] && 88 === Ru[3] && 32 === Ru[4] && 49 === Ru[5] && 49 === Ru[6] && 187 === Ru[7] && 13 === Ru[8] && 10 === Ru[9] && 26 === Ru[10] && 10 === Ru[11]) return !0
        }
        return !1
      }
    }
    Ku.HEADER_LEN = 64, Ku.COMPRESSED_2D = 0, Ku.COMPRESSED_3D = 1, Ku.TEX_2D = 2, Ku.TEX_3D = 3;
    var Qu, mu, Ju, Nu = yu(41432),
      Xu = yu(39655);

    function Vu(uu, Ru) {
      const yu = Ru?.jsDecoderModule || KTX2DECODER;
      uu && (uu.wasmBaseUrl && (yu.Transcoder.WasmBaseUrl = uu.wasmBaseUrl), uu.wasmUASTCToASTC && (yu.LiteTranscoder_UASTC_ASTC.WasmModuleURL = uu.wasmUASTCToASTC), uu.wasmUASTCToBC7 && (yu.LiteTranscoder_UASTC_BC7.WasmModuleURL = uu.wasmUASTCToBC7), uu.wasmUASTCToRGBA_UNORM && (yu.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = uu.wasmUASTCToRGBA_UNORM), uu.wasmUASTCToRGBA_SRGB && (yu.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = uu.wasmUASTCToRGBA_SRGB), uu.wasmUASTCToR8_UNORM && (yu.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = uu.wasmUASTCToR8_UNORM), uu.wasmUASTCToRG8_UNORM && (yu.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = uu.wasmUASTCToRG8_UNORM), uu.jsMSCTranscoder && (yu.MSCTranscoder.JSModuleURL = uu.jsMSCTranscoder), uu.wasmMSCTranscoder && (yu.MSCTranscoder.WasmModuleURL = uu.wasmMSCTranscoder), uu.wasmZSTDDecoder && (yu.ZSTDDecoder.WasmModuleURL = uu.wasmZSTDDecoder)), Ru && (Ru.wasmUASTCToASTC && (yu.LiteTranscoder_UASTC_ASTC.WasmBinary = Ru.wasmUASTCToASTC), Ru.wasmUASTCToBC7 && (yu.LiteTranscoder_UASTC_BC7.WasmBinary = Ru.wasmUASTCToBC7), Ru.wasmUASTCToRGBA_UNORM && (yu.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = Ru.wasmUASTCToRGBA_UNORM), Ru.wasmUASTCToRGBA_SRGB && (yu.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = Ru.wasmUASTCToRGBA_SRGB), Ru.wasmUASTCToR8_UNORM && (yu.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = Ru.wasmUASTCToR8_UNORM), Ru.wasmUASTCToRG8_UNORM && (yu.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = Ru.wasmUASTCToRG8_UNORM), Ru.jsMSCTranscoder && (yu.MSCTranscoder.JSModule = Ru.jsMSCTranscoder), Ru.wasmMSCTranscoder && (yu.MSCTranscoder.WasmBinary = Ru.wasmMSCTranscoder), Ru.wasmZSTDDecoder && (yu.ZSTDDecoder.WasmBinary = Ru.wasmZSTDDecoder))
    }

    function ru(uu) {
      let Ru;
      "undefined" === typeof uu && "undefined" !== typeof KTX2DECODER && (uu = KTX2DECODER), onmessage = yu => {
        if (yu.data) switch (yu.data.action) {
          case "init": {
            const Eu = yu.data.urls;
            Eu && (Eu.jsDecoderModule && "undefined" === typeof uu && (importScripts(Eu.jsDecoderModule), uu = KTX2DECODER), Vu(Eu)), yu.data.wasmBinaries && Vu(void 0, {
              ...yu.data.wasmBinaries,
              jsDecoderModule: uu
            }), Ru = new uu.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            uu.KTX2Decoder.DefaultDecoderOptions = yu.data.options;
            break;
          case "decode":
            Ru.decode(yu.data.data, yu.data.caps, yu.data.options).then((uu => {
              const Ru = [];
              for (let yu = 0; yu < uu.mipmaps.length; ++yu) {
                const Eu = uu.mipmaps[yu];
                Eu && Eu.data && Ru.push(Eu.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: uu
              }, Ru)
            })).catch((uu => {
              postMessage({
                action: "decoded",
                success: !1,
                Dm: uu
              })
            }))
        }
      }
    }! function(uu) {
      uu[uu.ETC1S = 0] = "ETC1S", uu[uu.UASTC4x4 = 1] = "UASTC4x4", uu[uu.RGBA32 = 2] = "RGBA32"
    }(Qu || (Qu = {})),
    function(uu) {
      uu[uu.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", uu[uu.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", uu[uu.BC7_RGBA = 1] = "BC7_RGBA", uu[uu.BC3_RGBA = 2] = "BC3_RGBA", uu[uu.BC1_RGB = 3] = "BC1_RGB", uu[uu.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", uu[uu.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", uu[uu.ETC2_RGBA = 6] = "ETC2_RGBA", uu[uu.ETC1_RGB = 7] = "ETC1_RGB", uu[uu.RGBA32 = 8] = "RGBA32", uu[uu.R8 = 9] = "R8", uu[uu.RG8 = 10] = "RG8"
    }(mu || (mu = {})),
    function(uu) {
      uu[uu.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", uu[uu.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", uu[uu.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", uu[uu.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", uu[uu.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", uu[uu.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", uu[uu.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", uu[uu.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", uu[uu.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", uu[uu.RGBA8Format = 32856] = "RGBA8Format", uu[uu.R8Format = 33321] = "R8Format", uu[uu.RG8Format = 33323] = "RG8Format"
    }(Ju || (Ju = {}));
    class Bu {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(uu) {
        if (Bu._WorkerPoolPromise || Bu._DecoderModulePromise) return;
        const Ru = {
          wasmBaseUrl: Xu.i.ScriptBaseUrl,
          jsDecoderModule: Xu.i.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Xu.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Xu.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Xu.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Xu.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Xu.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Xu.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Xu.i.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Xu.i.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Xu.i.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        uu && "function" === typeof Worker && "undefined" !== typeof URL ? Bu._WorkerPoolPromise = new Promise((yu => {
          const Eu = `${Vu}(${ru})()`,
            Ku = URL.createObjectURL(new Blob([Eu], {
              type: "application/javascript"
            }));
          yu(new Nu.d(uu, (async () => await async function(uu, Ru, yu) {
            return await new Promise(((Eu, Ku) => {
              const Qu = Ru => {
                  uu.removeEventListener("error", Qu), uu.removeEventListener("message", mu), Ku(Ru)
                },
                mu = Ru => {
                  "init" === Ru.data.action && (uu.removeEventListener("error", Qu), uu.removeEventListener("message", mu), Eu(uu))
                };
              uu.addEventListener("error", Qu), uu.addEventListener("message", mu), uu.postMessage({
                action: "init",
                urls: yu,
                wasmBinaries: Ru
              })
            }))
          }(new Worker(Ku), void 0, Ru))))
        })) : "undefined" === typeof Bu._KTX2DecoderModule ? Bu._DecoderModulePromise = Xu.i.LoadBabylonScriptAsync(Ru.jsDecoderModule).then((() => (Bu._KTX2DecoderModule = KTX2DECODER, Bu._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Bu._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Vu(Ru, Bu._KTX2DecoderModule), new Bu._KTX2DecoderModule.KTX2Decoder))) : (Bu._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Bu._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Bu._DecoderModulePromise = Promise.resolve(new Bu._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bu.DefaultNumWorkers;
        this._engine = uu;
        const yu = "object" === typeof Ru && Ru.workerPool || Bu.WorkerPool;
        if (yu) Bu._WorkerPoolPromise = Promise.resolve(yu);
        else {
          "object" === typeof Ru ? Bu._KTX2DecoderModule = Ru?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Bu._KTX2DecoderModule = KTX2DECODER);
          const uu = "number" === typeof Ru ? Ru : Ru.numWorkers ?? Bu.DefaultNumWorkers;
          Bu._Initialize(uu)
        }
      }
      async _uploadAsync(uu, Ru, yu) {
        const Eu = await this._decodeAsync(uu, yu);
        this._createTexture(Eu, Ru, yu)
      }
      async _decodeAsync(uu, Ru) {
        const yu = this._engine.getCaps(),
          Eu = {
            astc: !!yu.astc,
            bptc: !!yu.bptc,
            s3tc: !!yu.s3tc,
            pvrtc: !!yu.pvrtc,
            etc2: !!yu.etc2,
            etc1: !!yu.etc1
          };
        if (Bu._WorkerPoolPromise) {
          const yu = await Bu._WorkerPoolPromise;
          return await new Promise(((Ku, Qu) => {
            yu.push(((yu, mu) => {
              const Ju = uu => {
                  yu.removeEventListener("error", Ju), yu.removeEventListener("message", Nu), Qu(uu), mu()
                },
                Nu = uu => {
                  "decoded" === uu.data.action && (yu.removeEventListener("error", Ju), yu.removeEventListener("message", Nu), uu.data.success ? Ku(uu.data.decodedData) : Qu({
                    message: uu.data.Dm
                  }), mu())
                };
              yu.addEventListener("error", Ju), yu.addEventListener("message", Nu), yu.postMessage({
                action: "setDefaultDecoderOptions",
                options: Bu.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Xu = new Uint8Array(uu.byteLength);
              Xu.set(new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength)), yu.postMessage({
                action: "decode",
                data: Xu,
                caps: Eu,
                options: Ru
              }, [Xu.buffer])
            }))
          }))
        }
        if (Bu._DecoderModulePromise) {
          const Eu = await Bu._DecoderModulePromise;
          return Bu.DefaultDecoderOptions.isDirty && (Bu._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Bu.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Ku, Qu) => {
            Eu.decode(uu, yu, Ru).then((uu => {
              Ku(uu)
            })).catch((uu => {
              Qu({
                message: uu
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(uu, Ru, yu) {
        if ((uu.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, Ru), yu && (yu.transcodedFormat = uu.transcodedFormat, yu.isInGammaSpace = uu.isInGammaSpace, yu.hasAlpha = uu.hasAlpha, yu.transcoderName = uu.transcoderName);
        let Eu = !0;
        switch (uu.transcodedFormat) {
          case 32856:
            Ru.type = 0, Ru.format = 5;
            break;
          case 33321:
            Ru.type = 0, Ru.format = 6;
            break;
          case 33323:
            Ru.type = 0, Ru.format = 7;
            break;
          default:
            Ru.format = uu.transcodedFormat, Eu = !1
        }
        if (Ru._gammaSpace = uu.isInGammaSpace, Ru.generateMipMaps = uu.mipmaps.length > 1, Ru.width = uu.mipmaps[0].width, Ru.height = uu.mipmaps[0].height, uu.errors) throw new Error("KTX2 container - could not transcode the data. " + uu.errors);
        for (let Ku = 0; Ku < uu.mipmaps.length; ++Ku) {
          const yu = uu.mipmaps[Ku];
          if (!yu || !yu.data) throw new Error("KTX2 container - could not transcode one of the image");
          Eu ? (Ru.width = yu.width, Ru.height = yu.height, this._engine._uploadDataToTextureDirectly(Ru, yu.data, 0, Ku, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(Ru, uu.transcodedFormat, yu.width, yu.height, yu.data, 0, Ku)
        }
        Ru._extension = ".ktx2", Ru.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(uu) {
        if (uu.byteLength >= 12) {
          const Ru = new Uint8Array(uu.buffer, uu.byteOffset, 12);
          if (171 === Ru[0] && 75 === Ru[1] && 84 === Ru[2] && 88 === Ru[3] && 32 === Ru[4] && 50 === Ru[5] && 48 === Ru[6] && 187 === Ru[7] && 13 === Ru[8] && 10 === Ru[9] && 26 === Ru[10] && 10 === Ru[11]) return !0
        }
        return !1
      }
    }

    function xu(uu) {
      switch (uu) {
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
    Bu.URLConfig = {
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
    }, Bu.DefaultNumWorkers = Bu.GetDefaultNumWorkers(), Bu.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(uu) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== uu && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = uu, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(uu) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== uu && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = uu, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(uu) {
        this._forceRGBA !== uu && (this._forceRGBA = uu, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(uu) {
        this._forceR8 !== uu && (this._forceR8 = uu, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(uu) {
        this._forceRG8 !== uu && (this._forceRG8 = uu, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(uu) {
        this._bypassTranscoders !== uu && (this._bypassTranscoders = uu, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const uu = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (uu.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (uu.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (uu.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (uu.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (uu.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (uu.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [mu.BC1_RGB, mu.BC3_RGBA],
            yes: {
              transcodeFormat: mu.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = uu, uu
      }
    };
    class Su {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(uu, Ru, yu, Eu) {
        if (Array.isArray(uu)) return;
        Ru._invertVScale = !Ru.invertY;
        const Qu = Ru.eS(),
          mu = new Ku(uu, 6),
          Ju = xu(mu.glInternalFormat);
        null !== Ju ? (Ru.format = Ju, Ru._useSRGBBuffer = Qu._getUseSRGBBuffer(!0, !Ru.generateMipMaps), Ru._gammaSpace = !0) : Ru.format = mu.glInternalFormat;
        const Nu = mu.numberOfMipmapLevels > 1 && Ru.generateMipMaps;
        Qu._unpackFlipY(!0), mu.uploadLevels(Ru, Ru.generateMipMaps), Ru.width = mu.pixelWidth, Ru.height = mu.pixelHeight, Qu._setCubeMapTextureParams(Ru, Nu, mu.numberOfMipmapLevels - 1), Ru.isReady = !0, Ru.onLoadedObservable.notifyObservers(Ru), Ru.onLoadedObservable.clear(), Eu && Eu()
      }
      loadData(uu, Ru, yu, Qu) {
        if (Ku.IsValid(uu)) {
          Ru._invertVScale = !Ru.invertY;
          const Eu = new Ku(uu, 1),
            Qu = xu(Eu.glInternalFormat);
          null !== Qu ? (Ru.format = Qu, Ru._useSRGBBuffer = Ru.eS()._getUseSRGBBuffer(!0, !Ru.generateMipMaps), Ru._gammaSpace = !0) : Ru.format = Eu.glInternalFormat, yu(Eu.pixelWidth, Eu.pixelHeight, Ru.generateMipMaps, !0, (() => {
            Eu.uploadLevels(Ru, Ru.generateMipMaps)
          }), Eu.isInvalid)
        } else if (Bu.IsValid(uu)) {
          new Bu(Ru.eS())._uploadAsync(uu, Ru, Qu).then((() => {
            yu(Ru.width, Ru.height, Ru.generateMipMaps, !0, (() => {}), !1)
          }), (uu => {
            Eu.e.Warn(`Failed to load KTX2 texture data: ${uu.message}`), yu(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Eu.e.Error("texture missing KTX identifier"), yu(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41432: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    class Eu {
      constructor(uu) {
        this._pendingActions = new Array, this._workerInfos = uu.map((uu => ({
          workerPromise: Promise.resolve(uu),
          idle: !0
        })))
      }
      dispose() {
        for (const uu of this._workerInfos) uu.workerPromise.then((uu => {
          uu.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(uu) {
        this._executeOnIdleWorker(uu) || this._pendingActions.push(uu)
      }
      _executeOnIdleWorker(uu) {
        for (const Ru of this._workerInfos)
          if (Ru.idle) return this._execute(Ru, uu), !0;
        return !1
      }
      _execute(uu, Ru) {
        uu.idle = !1, uu.workerPromise.then((yu => {
          Ru(yu, (() => {
            const Ru = this._pendingActions.shift();
            Ru ? this._execute(uu, Ru) : uu.idle = !0
          }))
        }))
      }
    }
    class Ku extends Eu {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ku.DefaultOptions;
        super([]), this._maxWorkers = uu, this._createWorkerAsync = Ru, this._options = yu
      }
      push(uu) {
        if (!this._executeOnIdleWorker(uu))
          if (this._workerInfos.length < this._maxWorkers) {
            const Ru = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Ru), this._execute(Ru, uu)
          } else this._pendingActions.push(uu)
      }
      _execute(uu, Ru) {
        uu.timeoutId && (clearTimeout(uu.timeoutId), delete uu.timeoutId), super._execute(uu, ((yu, Eu) => {
          Ru(yu, (() => {
            Eu(), uu.idle && (uu.timeoutId = setTimeout((() => {
              uu.workerPromise.then((uu => {
                uu.terminate()
              }));
              const Ru = this._workerInfos.indexOf(uu); - 1 !== Ru && this._workerInfos.splice(Ru, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Ku.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);