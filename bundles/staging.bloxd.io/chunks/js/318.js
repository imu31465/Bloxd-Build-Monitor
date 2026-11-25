export const id = 318;
export const ids = [318];
export const modules = {
  42121: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      _KTXTextureLoader: () => Ou
    });
    var su = ju(39032);
    class Uu {
      constructor(uu, Eu) {
        if (this.data = uu, this.isInvalid = !1, !Uu.IsValid(uu)) return this.isInvalid = !0, void su.b.Error("texture missing KTX identifier");
        const ju = Uint32Array.BYTES_PER_ELEMENT,
          Zu = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ju),
          Xu = 67305985 === Zu.getUint32(0, !0);
        return this.glType = Zu.getUint32(1 * ju, Xu), this.glTypeSize = Zu.getUint32(2 * ju, Xu), this.glFormat = Zu.getUint32(3 * ju, Xu), this.glInternalFormat = Zu.getUint32(4 * ju, Xu), this.glBaseInternalFormat = Zu.getUint32(5 * ju, Xu), this.pixelWidth = Zu.getUint32(6 * ju, Xu), this.pixelHeight = Zu.getUint32(7 * ju, Xu), this.pixelDepth = Zu.getUint32(8 * ju, Xu), this.numberOfArrayElements = Zu.getUint32(9 * ju, Xu), this.numberOfFaces = Zu.getUint32(10 * ju, Xu), this.numberOfMipmapLevels = Zu.getUint32(11 * ju, Xu), this.bytesOfKeyValueData = Zu.getUint32(12 * ju, Xu), 0 !== this.glType ? (su.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (su.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (su.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== Eu ? (su.b.Error("number of faces expected" + Eu + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Uu.COMPRESSED_2D))
      }
      uploadLevels(uu, Eu) {
        switch (this.loadType) {
          case Uu.COMPRESSED_2D:
            this._upload2DCompressedLevels(uu, Eu);
          case Uu.TEX_2D:
          case Uu.COMPRESSED_3D:
          case Uu.TEX_3D:
        }
      }
      _upload2DCompressedLevels(uu, Eu) {
        let ju = Uu.HEADER_LEN + this.bytesOfKeyValueData,
          su = this.pixelWidth,
          Zu = this.pixelHeight;
        const Xu = Eu ? this.numberOfMipmapLevels : 1;
        for (let Uu = 0; Uu < Xu; Uu++) {
          const Eu = new Int32Array(this.data.buffer, this.data.byteOffset + ju, 1)[0];
          ju += 4;
          for (let Xu = 0; Xu < this.numberOfFaces; Xu++) {
            const lu = new Uint8Array(this.data.buffer, this.data.byteOffset + ju, Eu);
            uu.wO()._uploadCompressedDataToTextureDirectly(uu, uu.format, su, Zu, lu, Xu, Uu), ju += Eu, ju += 3 - (Eu + 3) % 4
          }
          su = Math.max(1, .5 * su), Zu = Math.max(1, .5 * Zu)
        }
      }
      static IsValid(uu) {
        if (uu.byteLength >= 12) {
          const Eu = new Uint8Array(uu.buffer, uu.byteOffset, 12);
          if (171 === Eu[0] && 75 === Eu[1] && 84 === Eu[2] && 88 === Eu[3] && 32 === Eu[4] && 49 === Eu[5] && 49 === Eu[6] && 187 === Eu[7] && 13 === Eu[8] && 10 === Eu[9] && 26 === Eu[10] && 10 === Eu[11]) return !0
        }
        return !1
      }
    }
    Uu.HEADER_LEN = 64, Uu.COMPRESSED_2D = 0, Uu.COMPRESSED_3D = 1, Uu.TEX_2D = 2, Uu.TEX_3D = 3;
    var Zu, Xu, lu, qu = ju(42129),
      fu = ju(40356);

    function Cu(uu, Eu) {
      const ju = Eu?.jsDecoderModule || KTX2DECODER;
      uu && (uu.wasmBaseUrl && (ju.Transcoder.WasmBaseUrl = uu.wasmBaseUrl), uu.wasmUASTCToASTC && (ju.LiteTranscoder_UASTC_ASTC.WasmModuleURL = uu.wasmUASTCToASTC), uu.wasmUASTCToBC7 && (ju.LiteTranscoder_UASTC_BC7.WasmModuleURL = uu.wasmUASTCToBC7), uu.wasmUASTCToRGBA_UNORM && (ju.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = uu.wasmUASTCToRGBA_UNORM), uu.wasmUASTCToRGBA_SRGB && (ju.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = uu.wasmUASTCToRGBA_SRGB), uu.wasmUASTCToR8_UNORM && (ju.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = uu.wasmUASTCToR8_UNORM), uu.wasmUASTCToRG8_UNORM && (ju.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = uu.wasmUASTCToRG8_UNORM), uu.jsMSCTranscoder && (ju.MSCTranscoder.JSModuleURL = uu.jsMSCTranscoder), uu.wasmMSCTranscoder && (ju.MSCTranscoder.WasmModuleURL = uu.wasmMSCTranscoder), uu.wasmZSTDDecoder && (ju.ZSTDDecoder.WasmModuleURL = uu.wasmZSTDDecoder)), Eu && (Eu.wasmUASTCToASTC && (ju.LiteTranscoder_UASTC_ASTC.WasmBinary = Eu.wasmUASTCToASTC), Eu.wasmUASTCToBC7 && (ju.LiteTranscoder_UASTC_BC7.WasmBinary = Eu.wasmUASTCToBC7), Eu.wasmUASTCToRGBA_UNORM && (ju.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = Eu.wasmUASTCToRGBA_UNORM), Eu.wasmUASTCToRGBA_SRGB && (ju.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = Eu.wasmUASTCToRGBA_SRGB), Eu.wasmUASTCToR8_UNORM && (ju.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = Eu.wasmUASTCToR8_UNORM), Eu.wasmUASTCToRG8_UNORM && (ju.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = Eu.wasmUASTCToRG8_UNORM), Eu.jsMSCTranscoder && (ju.MSCTranscoder.JSModule = Eu.jsMSCTranscoder), Eu.wasmMSCTranscoder && (ju.MSCTranscoder.WasmBinary = Eu.wasmMSCTranscoder), Eu.wasmZSTDDecoder && (ju.ZSTDDecoder.WasmBinary = Eu.wasmZSTDDecoder))
    }

    function bu(uu) {
      let Eu;
      "undefined" === typeof uu && "undefined" !== typeof KTX2DECODER && (uu = KTX2DECODER), onmessage = ju => {
        if (ju.data) switch (ju.data.action) {
          case "init": {
            const su = ju.data.urls;
            su && (su.jsDecoderModule && "undefined" === typeof uu && (importScripts(su.jsDecoderModule), uu = KTX2DECODER), Cu(su)), ju.data.wasmBinaries && Cu(void 0, {
              ...ju.data.wasmBinaries,
              jsDecoderModule: uu
            }), Eu = new uu.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            uu.KTX2Decoder.DefaultDecoderOptions = ju.data.options;
            break;
          case "decode":
            Eu.decode(ju.data.data, ju.data.caps, ju.data.options).then((uu => {
              const Eu = [];
              for (let ju = 0; ju < uu.mipmaps.length; ++ju) {
                const su = uu.mipmaps[ju];
                su && su.data && Eu.push(su.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: uu
              }, Eu)
            })).catch((uu => {
              postMessage({
                action: "decoded",
                success: !1,
                VC: uu
              })
            }))
        }
      }
    }! function(uu) {
      uu[uu.ETC1S = 0] = "ETC1S", uu[uu.UASTC4x4 = 1] = "UASTC4x4", uu[uu.RGBA32 = 2] = "RGBA32"
    }(Zu || (Zu = {})),
    function(uu) {
      uu[uu.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", uu[uu.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", uu[uu.BC7_RGBA = 1] = "BC7_RGBA", uu[uu.BC3_RGBA = 2] = "BC3_RGBA", uu[uu.BC1_RGB = 3] = "BC1_RGB", uu[uu.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", uu[uu.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", uu[uu.ETC2_RGBA = 6] = "ETC2_RGBA", uu[uu.ETC1_RGB = 7] = "ETC1_RGB", uu[uu.RGBA32 = 8] = "RGBA32", uu[uu.R8 = 9] = "R8", uu[uu.RG8 = 10] = "RG8"
    }(Xu || (Xu = {})),
    function(uu) {
      uu[uu.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", uu[uu.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", uu[uu.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", uu[uu.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", uu[uu.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", uu[uu.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", uu[uu.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", uu[uu.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", uu[uu.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", uu[uu.RGBA8Format = 32856] = "RGBA8Format", uu[uu.R8Format = 33321] = "R8Format", uu[uu.RG8Format = 33323] = "RG8Format"
    }(lu || (lu = {}));
    class cu {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(uu) {
        if (cu._WorkerPoolPromise || cu._DecoderModulePromise) return;
        const Eu = {
          wasmBaseUrl: fu.h.ScriptBaseUrl,
          jsDecoderModule: fu.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: fu.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: fu.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: fu.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: fu.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: fu.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: fu.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: fu.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: fu.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: fu.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        uu && "function" === typeof Worker && "undefined" !== typeof URL ? cu._WorkerPoolPromise = new Promise((ju => {
          const su = `${Cu}(${bu})()`,
            Uu = URL.createObjectURL(new Blob([su], {
              type: "application/javascript"
            }));
          ju(new qu.b(uu, (async () => await async function(uu, Eu, ju) {
            return await new Promise(((su, Uu) => {
              const Zu = Eu => {
                  uu.removeEventListener("error", Zu), uu.removeEventListener("message", Xu), Uu(Eu)
                },
                Xu = Eu => {
                  "init" === Eu.data.action && (uu.removeEventListener("error", Zu), uu.removeEventListener("message", Xu), su(uu))
                };
              uu.addEventListener("error", Zu), uu.addEventListener("message", Xu), uu.postMessage({
                action: "init",
                urls: ju,
                wasmBinaries: Eu
              })
            }))
          }(new Worker(Uu), void 0, Eu))))
        })) : "undefined" === typeof cu._KTX2DecoderModule ? cu._DecoderModulePromise = fu.h.LoadBabylonScriptAsync(Eu.jsDecoderModule).then((() => (cu._KTX2DecoderModule = KTX2DECODER, cu._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, cu._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Cu(Eu, cu._KTX2DecoderModule), new cu._KTX2DecoderModule.KTX2Decoder))) : (cu._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, cu._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, cu._DecoderModulePromise = Promise.resolve(new cu._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cu.DefaultNumWorkers;
        this._engine = uu;
        const ju = "object" === typeof Eu && Eu.workerPool || cu.WorkerPool;
        if (ju) cu._WorkerPoolPromise = Promise.resolve(ju);
        else {
          "object" === typeof Eu ? cu._KTX2DecoderModule = Eu?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (cu._KTX2DecoderModule = KTX2DECODER);
          const uu = "number" === typeof Eu ? Eu : Eu.numWorkers ?? cu.DefaultNumWorkers;
          cu._Initialize(uu)
        }
      }
      async _uploadAsync(uu, Eu, ju) {
        const su = await this._decodeAsync(uu, ju);
        this._createTexture(su, Eu, ju)
      }
      async _decodeAsync(uu, Eu) {
        const ju = this._engine.getCaps(),
          su = {
            astc: !!ju.astc,
            bptc: !!ju.bptc,
            s3tc: !!ju.s3tc,
            pvrtc: !!ju.pvrtc,
            etc2: !!ju.etc2,
            etc1: !!ju.etc1
          };
        if (cu._WorkerPoolPromise) {
          const ju = await cu._WorkerPoolPromise;
          return await new Promise(((Uu, Zu) => {
            ju.push(((ju, Xu) => {
              const lu = uu => {
                  ju.removeEventListener("error", lu), ju.removeEventListener("message", qu), Zu(uu), Xu()
                },
                qu = uu => {
                  "decoded" === uu.data.action && (ju.removeEventListener("error", lu), ju.removeEventListener("message", qu), uu.data.success ? Uu(uu.data.decodedData) : Zu({
                    message: uu.data.VC
                  }), Xu())
                };
              ju.addEventListener("error", lu), ju.addEventListener("message", qu), ju.postMessage({
                action: "setDefaultDecoderOptions",
                options: cu.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const fu = new Uint8Array(uu.byteLength);
              fu.set(new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength)), ju.postMessage({
                action: "decode",
                data: fu,
                caps: su,
                options: Eu
              }, [fu.buffer])
            }))
          }))
        }
        if (cu._DecoderModulePromise) {
          const su = await cu._DecoderModulePromise;
          return cu.DefaultDecoderOptions.isDirty && (cu._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = cu.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Uu, Zu) => {
            su.decode(uu, ju, Eu).then((uu => {
              Uu(uu)
            })).catch((uu => {
              Zu({
                message: uu
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(uu, Eu, ju) {
        if ((uu.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, Eu), ju && (ju.transcodedFormat = uu.transcodedFormat, ju.isInGammaSpace = uu.isInGammaSpace, ju.hasAlpha = uu.hasAlpha, ju.transcoderName = uu.transcoderName);
        let su = !0;
        switch (uu.transcodedFormat) {
          case 32856:
            Eu.type = 0, Eu.format = 5;
            break;
          case 33321:
            Eu.type = 0, Eu.format = 6;
            break;
          case 33323:
            Eu.type = 0, Eu.format = 7;
            break;
          default:
            Eu.format = uu.transcodedFormat, su = !1
        }
        if (Eu._gammaSpace = uu.isInGammaSpace, Eu.generateMipMaps = uu.mipmaps.length > 1, Eu.width = uu.mipmaps[0].width, Eu.height = uu.mipmaps[0].height, uu.errors) throw new Error("KTX2 container - could not transcode the data. " + uu.errors);
        for (let Uu = 0; Uu < uu.mipmaps.length; ++Uu) {
          const ju = uu.mipmaps[Uu];
          if (!ju || !ju.data) throw new Error("KTX2 container - could not transcode one of the image");
          su ? (Eu.width = ju.width, Eu.height = ju.height, this._engine._uploadDataToTextureDirectly(Eu, ju.data, 0, Uu, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(Eu, uu.transcodedFormat, ju.width, ju.height, ju.data, 0, Uu)
        }
        Eu._extension = ".ktx2", Eu.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(uu) {
        if (uu.byteLength >= 12) {
          const Eu = new Uint8Array(uu.buffer, uu.byteOffset, 12);
          if (171 === Eu[0] && 75 === Eu[1] && 84 === Eu[2] && 88 === Eu[3] && 32 === Eu[4] && 50 === Eu[5] && 48 === Eu[6] && 187 === Eu[7] && 13 === Eu[8] && 10 === Eu[9] && 26 === Eu[10] && 10 === Eu[11]) return !0
        }
        return !1
      }
    }

    function Nu(uu) {
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
    cu.URLConfig = {
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
    }, cu.DefaultNumWorkers = cu.GetDefaultNumWorkers(), cu.DefaultDecoderOptions = new class {
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
            transcodeFormat: [Xu.BC1_RGB, Xu.BC3_RGBA],
            yes: {
              transcodeFormat: Xu.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = uu, uu
      }
    };
    class Ou {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(uu, Eu, ju, su) {
        if (Array.isArray(uu)) return;
        Eu._invertVScale = !Eu.invertY;
        const Zu = Eu.wO(),
          Xu = new Uu(uu, 6),
          lu = Nu(Xu.glInternalFormat);
        null !== lu ? (Eu.format = lu, Eu._useSRGBBuffer = Zu._getUseSRGBBuffer(!0, !Eu.generateMipMaps), Eu._gammaSpace = !0) : Eu.format = Xu.glInternalFormat;
        const qu = Xu.numberOfMipmapLevels > 1 && Eu.generateMipMaps;
        Zu._unpackFlipY(!0), Xu.uploadLevels(Eu, Eu.generateMipMaps), Eu.width = Xu.pixelWidth, Eu.height = Xu.pixelHeight, Zu._setCubeMapTextureParams(Eu, qu, Xu.numberOfMipmapLevels - 1), Eu.isReady = !0, Eu.onLoadedObservable.notifyObservers(Eu), Eu.onLoadedObservable.clear(), su && su()
      }
      loadData(uu, Eu, ju, Zu) {
        if (Uu.IsValid(uu)) {
          Eu._invertVScale = !Eu.invertY;
          const su = new Uu(uu, 1),
            Zu = Nu(su.glInternalFormat);
          null !== Zu ? (Eu.format = Zu, Eu._useSRGBBuffer = Eu.wO()._getUseSRGBBuffer(!0, !Eu.generateMipMaps), Eu._gammaSpace = !0) : Eu.format = su.glInternalFormat, ju(su.pixelWidth, su.pixelHeight, Eu.generateMipMaps, !0, (() => {
            su.uploadLevels(Eu, Eu.generateMipMaps)
          }), su.isInvalid)
        } else if (cu.IsValid(uu)) {
          new cu(Eu.wO())._uploadAsync(uu, Eu, Zu).then((() => {
            ju(Eu.width, Eu.height, Eu.generateMipMaps, !0, (() => {}), !1)
          }), (uu => {
            su.b.Warn(`Failed to load KTX2 texture data: ${uu.message}`), ju(0, 0, !1, !1, (() => {}), !0)
          }))
        } else su.b.Error("texture missing KTX identifier"), ju(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  42129: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    class su {
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
        for (const Eu of this._workerInfos)
          if (Eu.idle) return this._execute(Eu, uu), !0;
        return !1
      }
      _execute(uu, Eu) {
        uu.idle = !1, uu.workerPromise.then((ju => {
          Eu(ju, (() => {
            const Eu = this._pendingActions.shift();
            Eu ? this._execute(uu, Eu) : uu.idle = !0
          }))
        }))
      }
    }
    class Uu extends su {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uu.DefaultOptions;
        super([]), this._maxWorkers = uu, this._createWorkerAsync = Eu, this._options = ju
      }
      push(uu) {
        if (!this._executeOnIdleWorker(uu))
          if (this._workerInfos.length < this._maxWorkers) {
            const Eu = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Eu), this._execute(Eu, uu)
          } else this._pendingActions.push(uu)
      }
      _execute(uu, Eu) {
        uu.timeoutId && (clearTimeout(uu.timeoutId), delete uu.timeoutId), super._execute(uu, ((ju, su) => {
          Eu(ju, (() => {
            su(), uu.idle && (uu.timeoutId = setTimeout((() => {
              uu.workerPromise.then((uu => {
                uu.terminate()
              }));
              const Eu = this._workerInfos.indexOf(uu); - 1 !== Eu && this._workerInfos.splice(Eu, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Uu.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);