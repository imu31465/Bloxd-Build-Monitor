export const id = 303;
export const ids = [303];
export const modules = {
  40907: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      _KTXTextureLoader: () => yY
    });
    var FY = DY(38040);
    class AY {
      constructor(YY, rY) {
        if (this.data = YY, this.isInvalid = !1, !AY.IsValid(YY)) return this.isInvalid = !0, void FY.d.Error("texture missing KTX identifier");
        const DY = Uint32Array.BYTES_PER_ELEMENT,
          IY = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * DY),
          RY = 67305985 === IY.getUint32(0, !0);
        return this.glType = IY.getUint32(1 * DY, RY), this.glTypeSize = IY.getUint32(2 * DY, RY), this.glFormat = IY.getUint32(3 * DY, RY), this.glInternalFormat = IY.getUint32(4 * DY, RY), this.glBaseInternalFormat = IY.getUint32(5 * DY, RY), this.pixelWidth = IY.getUint32(6 * DY, RY), this.pixelHeight = IY.getUint32(7 * DY, RY), this.pixelDepth = IY.getUint32(8 * DY, RY), this.numberOfArrayElements = IY.getUint32(9 * DY, RY), this.numberOfFaces = IY.getUint32(10 * DY, RY), this.numberOfMipmapLevels = IY.getUint32(11 * DY, RY), this.bytesOfKeyValueData = IY.getUint32(12 * DY, RY), 0 !== this.glType ? (FY.d.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (FY.d.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (FY.d.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== rY ? (FY.d.Error("number of faces expected" + rY + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = AY.COMPRESSED_2D))
      }
      uploadLevels(YY, rY) {
        switch (this.loadType) {
          case AY.COMPRESSED_2D:
            this._upload2DCompressedLevels(YY, rY);
          case AY.TEX_2D:
          case AY.COMPRESSED_3D:
          case AY.TEX_3D:
        }
      }
      _upload2DCompressedLevels(YY, rY) {
        let DY = AY.HEADER_LEN + this.bytesOfKeyValueData,
          FY = this.pixelWidth,
          IY = this.pixelHeight;
        const RY = rY ? this.numberOfMipmapLevels : 1;
        for (let AY = 0; AY < RY; AY++) {
          const rY = new Int32Array(this.data.buffer, this.data.byteOffset + DY, 1)[0];
          DY += 4;
          for (let RY = 0; RY < this.numberOfFaces; RY++) {
            const OY = new Uint8Array(this.data.buffer, this.data.byteOffset + DY, rY);
            YY.ky()._uploadCompressedDataToTextureDirectly(YY, YY.format, FY, IY, OY, RY, AY), DY += rY, DY += 3 - (rY + 3) % 4
          }
          FY = Math.max(1, .5 * FY), IY = Math.max(1, .5 * IY)
        }
      }
      static IsValid(YY) {
        if (YY.byteLength >= 12) {
          const rY = new Uint8Array(YY.buffer, YY.byteOffset, 12);
          if (171 === rY[0] && 75 === rY[1] && 84 === rY[2] && 88 === rY[3] && 32 === rY[4] && 49 === rY[5] && 49 === rY[6] && 187 === rY[7] && 13 === rY[8] && 10 === rY[9] && 26 === rY[10] && 10 === rY[11]) return !0
        }
        return !1
      }
    }
    AY.HEADER_LEN = 64, AY.COMPRESSED_2D = 0, AY.COMPRESSED_3D = 1, AY.TEX_2D = 2, AY.TEX_3D = 3;
    var IY, RY, OY, gY = DY(40912),
      aY = DY(39219);

    function vY(YY, rY) {
      const DY = rY?.jsDecoderModule || KTX2DECODER;
      YY && (YY.wasmBaseUrl && (DY.Transcoder.WasmBaseUrl = YY.wasmBaseUrl), YY.wasmUASTCToASTC && (DY.LiteTranscoder_UASTC_ASTC.WasmModuleURL = YY.wasmUASTCToASTC), YY.wasmUASTCToBC7 && (DY.LiteTranscoder_UASTC_BC7.WasmModuleURL = YY.wasmUASTCToBC7), YY.wasmUASTCToRGBA_UNORM && (DY.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = YY.wasmUASTCToRGBA_UNORM), YY.wasmUASTCToRGBA_SRGB && (DY.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = YY.wasmUASTCToRGBA_SRGB), YY.wasmUASTCToR8_UNORM && (DY.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = YY.wasmUASTCToR8_UNORM), YY.wasmUASTCToRG8_UNORM && (DY.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = YY.wasmUASTCToRG8_UNORM), YY.jsMSCTranscoder && (DY.MSCTranscoder.JSModuleURL = YY.jsMSCTranscoder), YY.wasmMSCTranscoder && (DY.MSCTranscoder.WasmModuleURL = YY.wasmMSCTranscoder), YY.wasmZSTDDecoder && (DY.ZSTDDecoder.WasmModuleURL = YY.wasmZSTDDecoder)), rY && (rY.wasmUASTCToASTC && (DY.LiteTranscoder_UASTC_ASTC.WasmBinary = rY.wasmUASTCToASTC), rY.wasmUASTCToBC7 && (DY.LiteTranscoder_UASTC_BC7.WasmBinary = rY.wasmUASTCToBC7), rY.wasmUASTCToRGBA_UNORM && (DY.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = rY.wasmUASTCToRGBA_UNORM), rY.wasmUASTCToRGBA_SRGB && (DY.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = rY.wasmUASTCToRGBA_SRGB), rY.wasmUASTCToR8_UNORM && (DY.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = rY.wasmUASTCToR8_UNORM), rY.wasmUASTCToRG8_UNORM && (DY.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = rY.wasmUASTCToRG8_UNORM), rY.jsMSCTranscoder && (DY.MSCTranscoder.JSModule = rY.jsMSCTranscoder), rY.wasmMSCTranscoder && (DY.MSCTranscoder.WasmBinary = rY.wasmMSCTranscoder), rY.wasmZSTDDecoder && (DY.ZSTDDecoder.WasmBinary = rY.wasmZSTDDecoder))
    }

    function uY(YY) {
      let rY;
      "undefined" === typeof YY && "undefined" !== typeof KTX2DECODER && (YY = KTX2DECODER), onmessage = DY => {
        if (DY.data) switch (DY.data.action) {
          case "init": {
            const FY = DY.data.urls;
            FY && (FY.jsDecoderModule && "undefined" === typeof YY && (importScripts(FY.jsDecoderModule), YY = KTX2DECODER), vY(FY)), DY.data.wasmBinaries && vY(void 0, {
              ...DY.data.wasmBinaries,
              jsDecoderModule: YY
            }), rY = new YY.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            YY.KTX2Decoder.DefaultDecoderOptions = DY.data.options;
            break;
          case "decode":
            rY.decode(DY.data.data, DY.data.caps, DY.data.options).then((YY => {
              const rY = [];
              for (let DY = 0; DY < YY.mipmaps.length; ++DY) {
                const FY = YY.mipmaps[DY];
                FY && FY.data && rY.push(FY.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: YY
              }, rY)
            })).catch((YY => {
              postMessage({
                action: "decoded",
                success: !1,
                vv: YY
              })
            }))
        }
      }
    }! function(YY) {
      YY[YY.ETC1S = 0] = "ETC1S", YY[YY.UASTC4x4 = 1] = "UASTC4x4", YY[YY.RGBA32 = 2] = "RGBA32"
    }(IY || (IY = {})),
    function(YY) {
      YY[YY.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", YY[YY.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", YY[YY.BC7_RGBA = 1] = "BC7_RGBA", YY[YY.BC3_RGBA = 2] = "BC3_RGBA", YY[YY.BC1_RGB = 3] = "BC1_RGB", YY[YY.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", YY[YY.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", YY[YY.ETC2_RGBA = 6] = "ETC2_RGBA", YY[YY.ETC1_RGB = 7] = "ETC1_RGB", YY[YY.RGBA32 = 8] = "RGBA32", YY[YY.R8 = 9] = "R8", YY[YY.RG8 = 10] = "RG8"
    }(RY || (RY = {})),
    function(YY) {
      YY[YY.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", YY[YY.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", YY[YY.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", YY[YY.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", YY[YY.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", YY[YY.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", YY[YY.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", YY[YY.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", YY[YY.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", YY[YY.RGBA8Format = 32856] = "RGBA8Format", YY[YY.R8Format = 33321] = "R8Format", YY[YY.RG8Format = 33323] = "RG8Format"
    }(OY || (OY = {}));
    class sY {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(YY) {
        if (sY._WorkerPoolPromise || sY._DecoderModulePromise) return;
        const rY = {
          wasmBaseUrl: aY.i.ScriptBaseUrl,
          jsDecoderModule: aY.i.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: aY.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: aY.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: aY.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: aY.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: aY.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: aY.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: aY.i.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: aY.i.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: aY.i.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        YY && "function" === typeof Worker && "undefined" !== typeof URL ? sY._WorkerPoolPromise = new Promise((DY => {
          const FY = `${vY}(${uY})()`,
            AY = URL.createObjectURL(new Blob([FY], {
              type: "application/javascript"
            }));
          DY(new gY.d(YY, (async () => await async function(YY, rY, DY) {
            return await new Promise(((FY, AY) => {
              const IY = rY => {
                  YY.removeEventListener("error", IY), YY.removeEventListener("message", RY), AY(rY)
                },
                RY = rY => {
                  "init" === rY.data.action && (YY.removeEventListener("error", IY), YY.removeEventListener("message", RY), FY(YY))
                };
              YY.addEventListener("error", IY), YY.addEventListener("message", RY), YY.postMessage({
                action: "init",
                urls: DY,
                wasmBinaries: rY
              })
            }))
          }(new Worker(AY), void 0, rY))))
        })) : "undefined" === typeof sY._KTX2DecoderModule ? sY._DecoderModulePromise = aY.i.LoadBabylonScriptAsync(rY.jsDecoderModule).then((() => (sY._KTX2DecoderModule = KTX2DECODER, sY._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, sY._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, vY(rY, sY._KTX2DecoderModule), new sY._KTX2DecoderModule.KTX2Decoder))) : (sY._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, sY._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, sY._DecoderModulePromise = Promise.resolve(new sY._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sY.DefaultNumWorkers;
        this._engine = YY;
        const DY = "object" === typeof rY && rY.workerPool || sY.WorkerPool;
        if (DY) sY._WorkerPoolPromise = Promise.resolve(DY);
        else {
          "object" === typeof rY ? sY._KTX2DecoderModule = rY?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (sY._KTX2DecoderModule = KTX2DECODER);
          const YY = "number" === typeof rY ? rY : rY.numWorkers ?? sY.DefaultNumWorkers;
          sY._Initialize(YY)
        }
      }
      async _uploadAsync(YY, rY, DY) {
        const FY = await this._decodeAsync(YY, DY);
        this._createTexture(FY, rY, DY)
      }
      async _decodeAsync(YY, rY) {
        const DY = this._engine.getCaps(),
          FY = {
            astc: !!DY.astc,
            bptc: !!DY.bptc,
            s3tc: !!DY.s3tc,
            pvrtc: !!DY.pvrtc,
            etc2: !!DY.etc2,
            etc1: !!DY.etc1
          };
        if (sY._WorkerPoolPromise) {
          const DY = await sY._WorkerPoolPromise;
          return await new Promise(((AY, IY) => {
            DY.push(((DY, RY) => {
              const OY = YY => {
                  DY.removeEventListener("error", OY), DY.removeEventListener("message", gY), IY(YY), RY()
                },
                gY = YY => {
                  "decoded" === YY.data.action && (DY.removeEventListener("error", OY), DY.removeEventListener("message", gY), YY.data.success ? AY(YY.data.decodedData) : IY({
                    message: YY.data.vv
                  }), RY())
                };
              DY.addEventListener("error", OY), DY.addEventListener("message", gY), DY.postMessage({
                action: "setDefaultDecoderOptions",
                options: sY.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const aY = new Uint8Array(YY.byteLength);
              aY.set(new Uint8Array(YY.buffer, YY.byteOffset, YY.byteLength)), DY.postMessage({
                action: "decode",
                data: aY,
                caps: FY,
                options: rY
              }, [aY.buffer])
            }))
          }))
        }
        if (sY._DecoderModulePromise) {
          const FY = await sY._DecoderModulePromise;
          return sY.DefaultDecoderOptions.isDirty && (sY._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = sY.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((AY, IY) => {
            FY.decode(YY, DY, rY).then((YY => {
              AY(YY)
            })).catch((YY => {
              IY({
                message: YY
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(YY, rY, DY) {
        if ((YY.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, rY), DY && (DY.transcodedFormat = YY.transcodedFormat, DY.isInGammaSpace = YY.isInGammaSpace, DY.hasAlpha = YY.hasAlpha, DY.transcoderName = YY.transcoderName);
        let FY = !0;
        switch (YY.transcodedFormat) {
          case 32856:
            rY.type = 0, rY.format = 5;
            break;
          case 33321:
            rY.type = 0, rY.format = 6;
            break;
          case 33323:
            rY.type = 0, rY.format = 7;
            break;
          default:
            rY.format = YY.transcodedFormat, FY = !1
        }
        if (rY._gammaSpace = YY.isInGammaSpace, rY.generateMipMaps = YY.mipmaps.length > 1, rY.width = YY.mipmaps[0].width, rY.height = YY.mipmaps[0].height, YY.errors) throw new Error("KTX2 container - could not transcode the data. " + YY.errors);
        for (let AY = 0; AY < YY.mipmaps.length; ++AY) {
          const DY = YY.mipmaps[AY];
          if (!DY || !DY.data) throw new Error("KTX2 container - could not transcode one of the image");
          FY ? (rY.width = DY.width, rY.height = DY.height, this._engine._uploadDataToTextureDirectly(rY, DY.data, 0, AY, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(rY, YY.transcodedFormat, DY.width, DY.height, DY.data, 0, AY)
        }
        rY._extension = ".ktx2", rY.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(YY) {
        if (YY.byteLength >= 12) {
          const rY = new Uint8Array(YY.buffer, YY.byteOffset, 12);
          if (171 === rY[0] && 75 === rY[1] && 84 === rY[2] && 88 === rY[3] && 32 === rY[4] && 50 === rY[5] && 48 === rY[6] && 187 === rY[7] && 13 === rY[8] && 10 === rY[9] && 26 === rY[10] && 10 === rY[11]) return !0
        }
        return !1
      }
    }

    function iY(YY) {
      switch (YY) {
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
    sY.URLConfig = {
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
    }, sY.DefaultNumWorkers = sY.GetDefaultNumWorkers(), sY.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(YY) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== YY && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = YY, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(YY) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== YY && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = YY, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(YY) {
        this._forceRGBA !== YY && (this._forceRGBA = YY, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(YY) {
        this._forceR8 !== YY && (this._forceR8 = YY, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(YY) {
        this._forceRG8 !== YY && (this._forceRG8 = YY, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(YY) {
        this._bypassTranscoders !== YY && (this._bypassTranscoders = YY, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const YY = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (YY.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (YY.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (YY.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (YY.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (YY.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (YY.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [RY.BC1_RGB, RY.BC3_RGBA],
            yes: {
              transcodeFormat: RY.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = YY, YY
      }
    };
    class yY {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(YY, rY, DY, FY) {
        if (Array.isArray(YY)) return;
        rY._invertVScale = !rY.invertY;
        const IY = rY.ky(),
          RY = new AY(YY, 6),
          OY = iY(RY.glInternalFormat);
        null !== OY ? (rY.format = OY, rY._useSRGBBuffer = IY._getUseSRGBBuffer(!0, !rY.generateMipMaps), rY._gammaSpace = !0) : rY.format = RY.glInternalFormat;
        const gY = RY.numberOfMipmapLevels > 1 && rY.generateMipMaps;
        IY._unpackFlipY(!0), RY.uploadLevels(rY, rY.generateMipMaps), rY.width = RY.pixelWidth, rY.height = RY.pixelHeight, IY._setCubeMapTextureParams(rY, gY, RY.numberOfMipmapLevels - 1), rY.isReady = !0, rY.onLoadedObservable.notifyObservers(rY), rY.onLoadedObservable.clear(), FY && FY()
      }
      loadData(YY, rY, DY, IY) {
        if (AY.IsValid(YY)) {
          rY._invertVScale = !rY.invertY;
          const FY = new AY(YY, 1),
            IY = iY(FY.glInternalFormat);
          null !== IY ? (rY.format = IY, rY._useSRGBBuffer = rY.ky()._getUseSRGBBuffer(!0, !rY.generateMipMaps), rY._gammaSpace = !0) : rY.format = FY.glInternalFormat, DY(FY.pixelWidth, FY.pixelHeight, rY.generateMipMaps, !0, (() => {
            FY.uploadLevels(rY, rY.generateMipMaps)
          }), FY.isInvalid)
        } else if (sY.IsValid(YY)) {
          new sY(rY.ky())._uploadAsync(YY, rY, IY).then((() => {
            DY(rY.width, rY.height, rY.generateMipMaps, !0, (() => {}), !1)
          }), (YY => {
            FY.d.Warn(`Failed to load KTX2 texture data: ${YY.message}`), DY(0, 0, !1, !1, (() => {}), !0)
          }))
        } else FY.d.Error("texture missing KTX identifier"), DY(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  40912: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    class FY {
      constructor(YY) {
        this._pendingActions = new Array, this._workerInfos = YY.map((YY => ({
          workerPromise: Promise.resolve(YY),
          idle: !0
        })))
      }
      dispose() {
        for (const YY of this._workerInfos) YY.workerPromise.then((YY => {
          YY.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(YY) {
        this._executeOnIdleWorker(YY) || this._pendingActions.push(YY)
      }
      _executeOnIdleWorker(YY) {
        for (const rY of this._workerInfos)
          if (rY.idle) return this._execute(rY, YY), !0;
        return !1
      }
      _execute(YY, rY) {
        YY.idle = !1, YY.workerPromise.then((DY => {
          rY(DY, (() => {
            const rY = this._pendingActions.shift();
            rY ? this._execute(YY, rY) : YY.idle = !0
          }))
        }))
      }
    }
    class AY extends FY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AY.DefaultOptions;
        super([]), this._maxWorkers = YY, this._createWorkerAsync = rY, this._options = DY
      }
      push(YY) {
        if (!this._executeOnIdleWorker(YY))
          if (this._workerInfos.length < this._maxWorkers) {
            const rY = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(rY), this._execute(rY, YY)
          } else this._pendingActions.push(YY)
      }
      _execute(YY, rY) {
        YY.timeoutId && (clearTimeout(YY.timeoutId), delete YY.timeoutId), super._execute(YY, ((DY, FY) => {
          rY(DY, (() => {
            FY(), YY.idle && (YY.timeoutId = setTimeout((() => {
              YY.workerPromise.then((YY => {
                YY.terminate()
              }));
              const rY = this._workerInfos.indexOf(YY); - 1 !== rY && this._workerInfos.splice(rY, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    AY.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);