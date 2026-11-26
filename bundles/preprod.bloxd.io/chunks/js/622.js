export const id = 622;
export const ids = [622];
export const modules = {
  45312: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      _KTXTextureLoader: () => uH
    });
    var AH = LH(39595);
    class rH {
      constructor(HH, BH) {
        if (this.data = HH, this.isInvalid = !1, !rH.IsValid(HH)) return this.isInvalid = !0, void AH.e.Error("texture missing KTX identifier");
        const LH = Uint32Array.BYTES_PER_ELEMENT,
          SH = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * LH),
          hH = 67305985 === SH.getUint32(0, !0);
        return this.glType = SH.getUint32(1 * LH, hH), this.glTypeSize = SH.getUint32(2 * LH, hH), this.glFormat = SH.getUint32(3 * LH, hH), this.glInternalFormat = SH.getUint32(4 * LH, hH), this.glBaseInternalFormat = SH.getUint32(5 * LH, hH), this.pixelWidth = SH.getUint32(6 * LH, hH), this.pixelHeight = SH.getUint32(7 * LH, hH), this.pixelDepth = SH.getUint32(8 * LH, hH), this.numberOfArrayElements = SH.getUint32(9 * LH, hH), this.numberOfFaces = SH.getUint32(10 * LH, hH), this.numberOfMipmapLevels = SH.getUint32(11 * LH, hH), this.bytesOfKeyValueData = SH.getUint32(12 * LH, hH), 0 !== this.glType ? (AH.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (AH.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (AH.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== BH ? (AH.e.Error("number of faces expected" + BH + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = rH.COMPRESSED_2D))
      }
      uploadLevels(HH, BH) {
        switch (this.loadType) {
          case rH.COMPRESSED_2D:
            this._upload2DCompressedLevels(HH, BH);
          case rH.TEX_2D:
          case rH.COMPRESSED_3D:
          case rH.TEX_3D:
        }
      }
      _upload2DCompressedLevels(HH, BH) {
        let LH = rH.HEADER_LEN + this.bytesOfKeyValueData,
          AH = this.pixelWidth,
          SH = this.pixelHeight;
        const hH = BH ? this.numberOfMipmapLevels : 1;
        for (let rH = 0; rH < hH; rH++) {
          const BH = new Int32Array(this.data.buffer, this.data.byteOffset + LH, 1)[0];
          LH += 4;
          for (let hH = 0; hH < this.numberOfFaces; hH++) {
            const tH = new Uint8Array(this.data.buffer, this.data.byteOffset + LH, BH);
            HH.Iu()._uploadCompressedDataToTextureDirectly(HH, HH.format, AH, SH, tH, hH, rH), LH += BH, LH += 3 - (BH + 3) % 4
          }
          AH = Math.max(1, .5 * AH), SH = Math.max(1, .5 * SH)
        }
      }
      static IsValid(HH) {
        if (HH.byteLength >= 12) {
          const BH = new Uint8Array(HH.buffer, HH.byteOffset, 12);
          if (171 === BH[0] && 75 === BH[1] && 84 === BH[2] && 88 === BH[3] && 32 === BH[4] && 49 === BH[5] && 49 === BH[6] && 187 === BH[7] && 13 === BH[8] && 10 === BH[9] && 26 === BH[10] && 10 === BH[11]) return !0
        }
        return !1
      }
    }
    rH.HEADER_LEN = 64, rH.COMPRESSED_2D = 0, rH.COMPRESSED_3D = 1, rH.TEX_2D = 2, rH.TEX_3D = 3;
    var SH, hH, tH, zH = LH(45318),
      CH = LH(41387);

    function EH(HH, BH) {
      const LH = BH?.jsDecoderModule || KTX2DECODER;
      HH && (HH.wasmBaseUrl && (LH.Transcoder.WasmBaseUrl = HH.wasmBaseUrl), HH.wasmUASTCToASTC && (LH.LiteTranscoder_UASTC_ASTC.WasmModuleURL = HH.wasmUASTCToASTC), HH.wasmUASTCToBC7 && (LH.LiteTranscoder_UASTC_BC7.WasmModuleURL = HH.wasmUASTCToBC7), HH.wasmUASTCToRGBA_UNORM && (LH.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = HH.wasmUASTCToRGBA_UNORM), HH.wasmUASTCToRGBA_SRGB && (LH.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = HH.wasmUASTCToRGBA_SRGB), HH.wasmUASTCToR8_UNORM && (LH.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = HH.wasmUASTCToR8_UNORM), HH.wasmUASTCToRG8_UNORM && (LH.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = HH.wasmUASTCToRG8_UNORM), HH.jsMSCTranscoder && (LH.MSCTranscoder.JSModuleURL = HH.jsMSCTranscoder), HH.wasmMSCTranscoder && (LH.MSCTranscoder.WasmModuleURL = HH.wasmMSCTranscoder), HH.wasmZSTDDecoder && (LH.ZSTDDecoder.WasmModuleURL = HH.wasmZSTDDecoder)), BH && (BH.wasmUASTCToASTC && (LH.LiteTranscoder_UASTC_ASTC.WasmBinary = BH.wasmUASTCToASTC), BH.wasmUASTCToBC7 && (LH.LiteTranscoder_UASTC_BC7.WasmBinary = BH.wasmUASTCToBC7), BH.wasmUASTCToRGBA_UNORM && (LH.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = BH.wasmUASTCToRGBA_UNORM), BH.wasmUASTCToRGBA_SRGB && (LH.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = BH.wasmUASTCToRGBA_SRGB), BH.wasmUASTCToR8_UNORM && (LH.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = BH.wasmUASTCToR8_UNORM), BH.wasmUASTCToRG8_UNORM && (LH.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = BH.wasmUASTCToRG8_UNORM), BH.jsMSCTranscoder && (LH.MSCTranscoder.JSModule = BH.jsMSCTranscoder), BH.wasmMSCTranscoder && (LH.MSCTranscoder.WasmBinary = BH.wasmMSCTranscoder), BH.wasmZSTDDecoder && (LH.ZSTDDecoder.WasmBinary = BH.wasmZSTDDecoder))
    }

    function XH(HH) {
      let BH;
      "undefined" === typeof HH && "undefined" !== typeof KTX2DECODER && (HH = KTX2DECODER), onmessage = LH => {
        if (LH.data) switch (LH.data.action) {
          case "init": {
            const AH = LH.data.urls;
            AH && (AH.jsDecoderModule && "undefined" === typeof HH && (importScripts(AH.jsDecoderModule), HH = KTX2DECODER), EH(AH)), LH.data.wasmBinaries && EH(void 0, {
              ...LH.data.wasmBinaries,
              jsDecoderModule: HH
            }), BH = new HH.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            HH.KTX2Decoder.DefaultDecoderOptions = LH.data.options;
            break;
          case "decode":
            BH.decode(LH.data.data, LH.data.caps, LH.data.options).then((HH => {
              const BH = [];
              for (let LH = 0; LH < HH.mipmaps.length; ++LH) {
                const AH = HH.mipmaps[LH];
                AH && AH.data && BH.push(AH.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: HH
              }, BH)
            })).catch((HH => {
              postMessage({
                action: "decoded",
                success: !1,
                kt: HH
              })
            }))
        }
      }
    }! function(HH) {
      HH[HH.ETC1S = 0] = "ETC1S", HH[HH.UASTC4x4 = 1] = "UASTC4x4", HH[HH.RGBA32 = 2] = "RGBA32"
    }(SH || (SH = {})),
    function(HH) {
      HH[HH.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", HH[HH.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", HH[HH.BC7_RGBA = 1] = "BC7_RGBA", HH[HH.BC3_RGBA = 2] = "BC3_RGBA", HH[HH.BC1_RGB = 3] = "BC1_RGB", HH[HH.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", HH[HH.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", HH[HH.ETC2_RGBA = 6] = "ETC2_RGBA", HH[HH.ETC1_RGB = 7] = "ETC1_RGB", HH[HH.RGBA32 = 8] = "RGBA32", HH[HH.R8 = 9] = "R8", HH[HH.RG8 = 10] = "RG8"
    }(hH || (hH = {})),
    function(HH) {
      HH[HH.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", HH[HH.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", HH[HH.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", HH[HH.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", HH[HH.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", HH[HH.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", HH[HH.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", HH[HH.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", HH[HH.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", HH[HH.RGBA8Format = 32856] = "RGBA8Format", HH[HH.R8Format = 33321] = "R8Format", HH[HH.RG8Format = 33323] = "RG8Format"
    }(tH || (tH = {}));
    class GH {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(HH) {
        if (GH._WorkerPoolPromise || GH._DecoderModulePromise) return;
        const BH = {
          wasmBaseUrl: CH.i.ScriptBaseUrl,
          jsDecoderModule: CH.i.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: CH.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: CH.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: CH.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: CH.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: CH.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: CH.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: CH.i.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: CH.i.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: CH.i.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        HH && "function" === typeof Worker && "undefined" !== typeof URL ? GH._WorkerPoolPromise = new Promise((LH => {
          const AH = `${EH}(${XH})()`,
            rH = URL.createObjectURL(new Blob([AH], {
              type: "application/javascript"
            }));
          LH(new zH.c(HH, (async () => await async function(HH, BH, LH) {
            return await new Promise(((AH, rH) => {
              const SH = BH => {
                  HH.removeEventListener("error", SH), HH.removeEventListener("message", hH), rH(BH)
                },
                hH = BH => {
                  "init" === BH.data.action && (HH.removeEventListener("error", SH), HH.removeEventListener("message", hH), AH(HH))
                };
              HH.addEventListener("error", SH), HH.addEventListener("message", hH), HH.postMessage({
                action: "init",
                urls: LH,
                wasmBinaries: BH
              })
            }))
          }(new Worker(rH), void 0, BH))))
        })) : "undefined" === typeof GH._KTX2DecoderModule ? GH._DecoderModulePromise = CH.i.LoadBabylonScriptAsync(BH.jsDecoderModule).then((() => (GH._KTX2DecoderModule = KTX2DECODER, GH._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, GH._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, EH(BH, GH._KTX2DecoderModule), new GH._KTX2DecoderModule.KTX2Decoder))) : (GH._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, GH._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, GH._DecoderModulePromise = Promise.resolve(new GH._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GH.DefaultNumWorkers;
        this._engine = HH;
        const LH = "object" === typeof BH && BH.workerPool || GH.WorkerPool;
        if (LH) GH._WorkerPoolPromise = Promise.resolve(LH);
        else {
          "object" === typeof BH ? GH._KTX2DecoderModule = BH?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (GH._KTX2DecoderModule = KTX2DECODER);
          const HH = "number" === typeof BH ? BH : BH.numWorkers ?? GH.DefaultNumWorkers;
          GH._Initialize(HH)
        }
      }
      async _uploadAsync(HH, BH, LH) {
        const AH = await this._decodeAsync(HH, LH);
        this._createTexture(AH, BH, LH)
      }
      async _decodeAsync(HH, BH) {
        const LH = this._engine.getCaps(),
          AH = {
            astc: !!LH.astc,
            bptc: !!LH.bptc,
            s3tc: !!LH.s3tc,
            pvrtc: !!LH.pvrtc,
            etc2: !!LH.etc2,
            etc1: !!LH.etc1
          };
        if (GH._WorkerPoolPromise) {
          const LH = await GH._WorkerPoolPromise;
          return await new Promise(((rH, SH) => {
            LH.push(((LH, hH) => {
              const tH = HH => {
                  LH.removeEventListener("error", tH), LH.removeEventListener("message", zH), SH(HH), hH()
                },
                zH = HH => {
                  "decoded" === HH.data.action && (LH.removeEventListener("error", tH), LH.removeEventListener("message", zH), HH.data.success ? rH(HH.data.decodedData) : SH({
                    message: HH.data.kt
                  }), hH())
                };
              LH.addEventListener("error", tH), LH.addEventListener("message", zH), LH.postMessage({
                action: "setDefaultDecoderOptions",
                options: GH.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const CH = new Uint8Array(HH.byteLength);
              CH.set(new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength)), LH.postMessage({
                action: "decode",
                data: CH,
                caps: AH,
                options: BH
              }, [CH.buffer])
            }))
          }))
        }
        if (GH._DecoderModulePromise) {
          const AH = await GH._DecoderModulePromise;
          return GH.DefaultDecoderOptions.isDirty && (GH._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = GH.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((rH, SH) => {
            AH.decode(HH, LH, BH).then((HH => {
              rH(HH)
            })).catch((HH => {
              SH({
                message: HH
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(HH, BH, LH) {
        if ((HH.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, BH), LH && (LH.transcodedFormat = HH.transcodedFormat, LH.isInGammaSpace = HH.isInGammaSpace, LH.hasAlpha = HH.hasAlpha, LH.transcoderName = HH.transcoderName);
        let AH = !0;
        switch (HH.transcodedFormat) {
          case 32856:
            BH.type = 0, BH.format = 5;
            break;
          case 33321:
            BH.type = 0, BH.format = 6;
            break;
          case 33323:
            BH.type = 0, BH.format = 7;
            break;
          default:
            BH.format = HH.transcodedFormat, AH = !1
        }
        if (BH._gammaSpace = HH.isInGammaSpace, BH.generateMipMaps = HH.mipmaps.length > 1, BH.width = HH.mipmaps[0].width, BH.height = HH.mipmaps[0].height, HH.errors) throw new Error("KTX2 container - could not transcode the data. " + HH.errors);
        for (let rH = 0; rH < HH.mipmaps.length; ++rH) {
          const LH = HH.mipmaps[rH];
          if (!LH || !LH.data) throw new Error("KTX2 container - could not transcode one of the image");
          AH ? (BH.width = LH.width, BH.height = LH.height, this._engine._uploadDataToTextureDirectly(BH, LH.data, 0, rH, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(BH, HH.transcodedFormat, LH.width, LH.height, LH.data, 0, rH)
        }
        BH._extension = ".ktx2", BH.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(HH) {
        if (HH.byteLength >= 12) {
          const BH = new Uint8Array(HH.buffer, HH.byteOffset, 12);
          if (171 === BH[0] && 75 === BH[1] && 84 === BH[2] && 88 === BH[3] && 32 === BH[4] && 50 === BH[5] && 48 === BH[6] && 187 === BH[7] && 13 === BH[8] && 10 === BH[9] && 26 === BH[10] && 10 === BH[11]) return !0
        }
        return !1
      }
    }

    function YH(HH) {
      switch (HH) {
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
    GH.URLConfig = {
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
    }, GH.DefaultNumWorkers = GH.GetDefaultNumWorkers(), GH.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(HH) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== HH && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = HH, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(HH) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== HH && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = HH, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(HH) {
        this._forceRGBA !== HH && (this._forceRGBA = HH, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(HH) {
        this._forceR8 !== HH && (this._forceR8 = HH, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(HH) {
        this._forceRG8 !== HH && (this._forceRG8 = HH, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(HH) {
        this._bypassTranscoders !== HH && (this._bypassTranscoders = HH, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const HH = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (HH.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (HH.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (HH.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (HH.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (HH.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (HH.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [hH.BC1_RGB, hH.BC3_RGBA],
            yes: {
              transcodeFormat: hH.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = HH, HH
      }
    };
    class uH {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(HH, BH, LH, AH) {
        if (Array.isArray(HH)) return;
        BH._invertVScale = !BH.invertY;
        const SH = BH.Iu(),
          hH = new rH(HH, 6),
          tH = YH(hH.glInternalFormat);
        null !== tH ? (BH.format = tH, BH._useSRGBBuffer = SH._getUseSRGBBuffer(!0, !BH.generateMipMaps), BH._gammaSpace = !0) : BH.format = hH.glInternalFormat;
        const zH = hH.numberOfMipmapLevels > 1 && BH.generateMipMaps;
        SH._unpackFlipY(!0), hH.uploadLevels(BH, BH.generateMipMaps), BH.width = hH.pixelWidth, BH.height = hH.pixelHeight, SH._setCubeMapTextureParams(BH, zH, hH.numberOfMipmapLevels - 1), BH.isReady = !0, BH.onLoadedObservable.notifyObservers(BH), BH.onLoadedObservable.clear(), AH && AH()
      }
      loadData(HH, BH, LH, SH) {
        if (rH.IsValid(HH)) {
          BH._invertVScale = !BH.invertY;
          const AH = new rH(HH, 1),
            SH = YH(AH.glInternalFormat);
          null !== SH ? (BH.format = SH, BH._useSRGBBuffer = BH.Iu()._getUseSRGBBuffer(!0, !BH.generateMipMaps), BH._gammaSpace = !0) : BH.format = AH.glInternalFormat, LH(AH.pixelWidth, AH.pixelHeight, BH.generateMipMaps, !0, (() => {
            AH.uploadLevels(BH, BH.generateMipMaps)
          }), AH.isInvalid)
        } else if (GH.IsValid(HH)) {
          new GH(BH.Iu())._uploadAsync(HH, BH, SH).then((() => {
            LH(BH.width, BH.height, BH.generateMipMaps, !0, (() => {}), !1)
          }), (HH => {
            AH.e.Warn(`Failed to load KTX2 texture data: ${HH.message}`), LH(0, 0, !1, !1, (() => {}), !0)
          }))
        } else AH.e.Error("texture missing KTX identifier"), LH(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  45318: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    class AH {
      constructor(HH) {
        this._pendingActions = new Array, this._workerInfos = HH.map((HH => ({
          workerPromise: Promise.resolve(HH),
          idle: !0
        })))
      }
      dispose() {
        for (const HH of this._workerInfos) HH.workerPromise.then((HH => {
          HH.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(HH) {
        this._executeOnIdleWorker(HH) || this._pendingActions.push(HH)
      }
      _executeOnIdleWorker(HH) {
        for (const BH of this._workerInfos)
          if (BH.idle) return this._execute(BH, HH), !0;
        return !1
      }
      _execute(HH, BH) {
        HH.idle = !1, HH.workerPromise.then((LH => {
          BH(LH, (() => {
            const BH = this._pendingActions.shift();
            BH ? this._execute(HH, BH) : HH.idle = !0
          }))
        }))
      }
    }
    class rH extends AH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rH.DefaultOptions;
        super([]), this._maxWorkers = HH, this._createWorkerAsync = BH, this._options = LH
      }
      push(HH) {
        if (!this._executeOnIdleWorker(HH))
          if (this._workerInfos.length < this._maxWorkers) {
            const BH = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(BH), this._execute(BH, HH)
          } else this._pendingActions.push(HH)
      }
      _execute(HH, BH) {
        HH.timeoutId && (clearTimeout(HH.timeoutId), delete HH.timeoutId), super._execute(HH, ((LH, AH) => {
          BH(LH, (() => {
            AH(), HH.idle && (HH.timeoutId = setTimeout((() => {
              HH.workerPromise.then((HH => {
                HH.terminate()
              }));
              const BH = this._workerInfos.indexOf(HH); - 1 !== BH && this._workerInfos.splice(BH, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    rH.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);