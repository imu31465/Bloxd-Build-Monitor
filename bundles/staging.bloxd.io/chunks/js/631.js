export const id = 631;
export const ids = [631];
export const modules = {
  54022: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      _KTXTextureLoader: () => AW
    });
    var mW = OW(39911);
    class EW {
      constructor(WW, iW) {
        if (this.data = WW, this.isInvalid = !1, !EW.IsValid(WW)) return this.isInvalid = !0, void mW.b.Error("texture missing KTX identifier");
        const OW = Uint32Array.BYTES_PER_ELEMENT,
          NW = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * OW),
          PW = 67305985 === NW.getUint32(0, !0);
        return this.glType = NW.getUint32(1 * OW, PW), this.glTypeSize = NW.getUint32(2 * OW, PW), this.glFormat = NW.getUint32(3 * OW, PW), this.glInternalFormat = NW.getUint32(4 * OW, PW), this.glBaseInternalFormat = NW.getUint32(5 * OW, PW), this.pixelWidth = NW.getUint32(6 * OW, PW), this.pixelHeight = NW.getUint32(7 * OW, PW), this.pixelDepth = NW.getUint32(8 * OW, PW), this.numberOfArrayElements = NW.getUint32(9 * OW, PW), this.numberOfFaces = NW.getUint32(10 * OW, PW), this.numberOfMipmapLevels = NW.getUint32(11 * OW, PW), this.bytesOfKeyValueData = NW.getUint32(12 * OW, PW), 0 !== this.glType ? (mW.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (mW.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (mW.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== iW ? (mW.b.Error("number of faces expected" + iW + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = EW.COMPRESSED_2D))
      }
      uploadLevels(WW, iW) {
        switch (this.loadType) {
          case EW.COMPRESSED_2D:
            this._upload2DCompressedLevels(WW, iW);
          case EW.TEX_2D:
          case EW.COMPRESSED_3D:
          case EW.TEX_3D:
        }
      }
      _upload2DCompressedLevels(WW, iW) {
        let OW = EW.HEADER_LEN + this.bytesOfKeyValueData,
          mW = this.pixelWidth,
          NW = this.pixelHeight;
        const PW = iW ? this.numberOfMipmapLevels : 1;
        for (let EW = 0; EW < PW; EW++) {
          const iW = new Int32Array(this.data.buffer, this.data.byteOffset + OW, 1)[0];
          OW += 4;
          for (let PW = 0; PW < this.numberOfFaces; PW++) {
            const LW = new Uint8Array(this.data.buffer, this.data.byteOffset + OW, iW);
            WW.VA()._uploadCompressedDataToTextureDirectly(WW, WW.format, mW, NW, LW, PW, EW), OW += iW, OW += 3 - (iW + 3) % 4
          }
          mW = Math.max(1, .5 * mW), NW = Math.max(1, .5 * NW)
        }
      }
      static IsValid(WW) {
        if (WW.byteLength >= 12) {
          const iW = new Uint8Array(WW.buffer, WW.byteOffset, 12);
          if (171 === iW[0] && 75 === iW[1] && 84 === iW[2] && 88 === iW[3] && 32 === iW[4] && 49 === iW[5] && 49 === iW[6] && 187 === iW[7] && 13 === iW[8] && 10 === iW[9] && 26 === iW[10] && 10 === iW[11]) return !0
        }
        return !1
      }
    }
    EW.HEADER_LEN = 64, EW.COMPRESSED_2D = 0, EW.COMPRESSED_3D = 1, EW.TEX_2D = 2, EW.TEX_3D = 3;
    var NW, PW, LW, cW = OW(54026),
      wW = OW(41620);

    function tW(WW, iW) {
      const OW = iW?.jsDecoderModule || KTX2DECODER;
      WW && (WW.wasmBaseUrl && (OW.Transcoder.WasmBaseUrl = WW.wasmBaseUrl), WW.wasmUASTCToASTC && (OW.LiteTranscoder_UASTC_ASTC.WasmModuleURL = WW.wasmUASTCToASTC), WW.wasmUASTCToBC7 && (OW.LiteTranscoder_UASTC_BC7.WasmModuleURL = WW.wasmUASTCToBC7), WW.wasmUASTCToRGBA_UNORM && (OW.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = WW.wasmUASTCToRGBA_UNORM), WW.wasmUASTCToRGBA_SRGB && (OW.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = WW.wasmUASTCToRGBA_SRGB), WW.wasmUASTCToR8_UNORM && (OW.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = WW.wasmUASTCToR8_UNORM), WW.wasmUASTCToRG8_UNORM && (OW.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = WW.wasmUASTCToRG8_UNORM), WW.jsMSCTranscoder && (OW.MSCTranscoder.JSModuleURL = WW.jsMSCTranscoder), WW.wasmMSCTranscoder && (OW.MSCTranscoder.WasmModuleURL = WW.wasmMSCTranscoder), WW.wasmZSTDDecoder && (OW.ZSTDDecoder.WasmModuleURL = WW.wasmZSTDDecoder)), iW && (iW.wasmUASTCToASTC && (OW.LiteTranscoder_UASTC_ASTC.WasmBinary = iW.wasmUASTCToASTC), iW.wasmUASTCToBC7 && (OW.LiteTranscoder_UASTC_BC7.WasmBinary = iW.wasmUASTCToBC7), iW.wasmUASTCToRGBA_UNORM && (OW.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = iW.wasmUASTCToRGBA_UNORM), iW.wasmUASTCToRGBA_SRGB && (OW.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = iW.wasmUASTCToRGBA_SRGB), iW.wasmUASTCToR8_UNORM && (OW.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = iW.wasmUASTCToR8_UNORM), iW.wasmUASTCToRG8_UNORM && (OW.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = iW.wasmUASTCToRG8_UNORM), iW.jsMSCTranscoder && (OW.MSCTranscoder.JSModule = iW.jsMSCTranscoder), iW.wasmMSCTranscoder && (OW.MSCTranscoder.WasmBinary = iW.wasmMSCTranscoder), iW.wasmZSTDDecoder && (OW.ZSTDDecoder.WasmBinary = iW.wasmZSTDDecoder))
    }

    function ZW(WW) {
      let iW;
      "undefined" === typeof WW && "undefined" !== typeof KTX2DECODER && (WW = KTX2DECODER), onmessage = OW => {
        if (OW.data) switch (OW.data.action) {
          case "init": {
            const mW = OW.data.urls;
            mW && (mW.jsDecoderModule && "undefined" === typeof WW && (importScripts(mW.jsDecoderModule), WW = KTX2DECODER), tW(mW)), OW.data.wasmBinaries && tW(void 0, {
              ...OW.data.wasmBinaries,
              jsDecoderModule: WW
            }), iW = new WW.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            WW.KTX2Decoder.DefaultDecoderOptions = OW.data.options;
            break;
          case "decode":
            iW.decode(OW.data.data, OW.data.caps, OW.data.options).then((WW => {
              const iW = [];
              for (let OW = 0; OW < WW.mipmaps.length; ++OW) {
                const mW = WW.mipmaps[OW];
                mW && mW.data && iW.push(mW.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: WW
              }, iW)
            })).catch((WW => {
              postMessage({
                action: "decoded",
                success: !1,
                tP: WW
              })
            }))
        }
      }
    }! function(WW) {
      WW[WW.ETC1S = 0] = "ETC1S", WW[WW.UASTC4x4 = 1] = "UASTC4x4", WW[WW.RGBA32 = 2] = "RGBA32"
    }(NW || (NW = {})),
    function(WW) {
      WW[WW.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", WW[WW.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", WW[WW.BC7_RGBA = 1] = "BC7_RGBA", WW[WW.BC3_RGBA = 2] = "BC3_RGBA", WW[WW.BC1_RGB = 3] = "BC1_RGB", WW[WW.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", WW[WW.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", WW[WW.ETC2_RGBA = 6] = "ETC2_RGBA", WW[WW.ETC1_RGB = 7] = "ETC1_RGB", WW[WW.RGBA32 = 8] = "RGBA32", WW[WW.R8 = 9] = "R8", WW[WW.RG8 = 10] = "RG8"
    }(PW || (PW = {})),
    function(WW) {
      WW[WW.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", WW[WW.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", WW[WW.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", WW[WW.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", WW[WW.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", WW[WW.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", WW[WW.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", WW[WW.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", WW[WW.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", WW[WW.RGBA8Format = 32856] = "RGBA8Format", WW[WW.R8Format = 33321] = "R8Format", WW[WW.RG8Format = 33323] = "RG8Format"
    }(LW || (LW = {}));
    class xW {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(WW) {
        if (xW._WorkerPoolPromise || xW._DecoderModulePromise) return;
        const iW = {
          wasmBaseUrl: wW.f.ScriptBaseUrl,
          jsDecoderModule: wW.f.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: wW.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: wW.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: wW.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: wW.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: wW.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: wW.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: wW.f.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: wW.f.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: wW.f.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        WW && "function" === typeof Worker && "undefined" !== typeof URL ? xW._WorkerPoolPromise = new Promise((OW => {
          const mW = `${tW}(${ZW})()`,
            EW = URL.createObjectURL(new Blob([mW], {
              type: "application/javascript"
            }));
          OW(new cW.d(WW, (async () => await async function(WW, iW, OW) {
            return await new Promise(((mW, EW) => {
              const NW = iW => {
                  WW.removeEventListener("error", NW), WW.removeEventListener("message", PW), EW(iW)
                },
                PW = iW => {
                  "init" === iW.data.action && (WW.removeEventListener("error", NW), WW.removeEventListener("message", PW), mW(WW))
                };
              WW.addEventListener("error", NW), WW.addEventListener("message", PW), WW.postMessage({
                action: "init",
                urls: OW,
                wasmBinaries: iW
              })
            }))
          }(new Worker(EW), void 0, iW))))
        })) : "undefined" === typeof xW._KTX2DecoderModule ? xW._DecoderModulePromise = wW.f.LoadBabylonScriptAsync(iW.jsDecoderModule).then((() => (xW._KTX2DecoderModule = KTX2DECODER, xW._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, xW._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, tW(iW, xW._KTX2DecoderModule), new xW._KTX2DecoderModule.KTX2Decoder))) : (xW._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, xW._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, xW._DecoderModulePromise = Promise.resolve(new xW._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xW.DefaultNumWorkers;
        this._engine = WW;
        const OW = "object" === typeof iW && iW.workerPool || xW.WorkerPool;
        if (OW) xW._WorkerPoolPromise = Promise.resolve(OW);
        else {
          "object" === typeof iW ? xW._KTX2DecoderModule = iW?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (xW._KTX2DecoderModule = KTX2DECODER);
          const WW = "number" === typeof iW ? iW : iW.numWorkers ?? xW.DefaultNumWorkers;
          xW._Initialize(WW)
        }
      }
      async _uploadAsync(WW, iW, OW) {
        const mW = await this._decodeAsync(WW, OW);
        this._createTexture(mW, iW, OW)
      }
      async _decodeAsync(WW, iW) {
        const OW = this._engine.getCaps(),
          mW = {
            astc: !!OW.astc,
            bptc: !!OW.bptc,
            s3tc: !!OW.s3tc,
            pvrtc: !!OW.pvrtc,
            etc2: !!OW.etc2,
            etc1: !!OW.etc1
          };
        if (xW._WorkerPoolPromise) {
          const OW = await xW._WorkerPoolPromise;
          return await new Promise(((EW, NW) => {
            OW.push(((OW, PW) => {
              const LW = WW => {
                  OW.removeEventListener("error", LW), OW.removeEventListener("message", cW), NW(WW), PW()
                },
                cW = WW => {
                  "decoded" === WW.data.action && (OW.removeEventListener("error", LW), OW.removeEventListener("message", cW), WW.data.success ? EW(WW.data.decodedData) : NW({
                    message: WW.data.tP
                  }), PW())
                };
              OW.addEventListener("error", LW), OW.addEventListener("message", cW), OW.postMessage({
                action: "setDefaultDecoderOptions",
                options: xW.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const wW = new Uint8Array(WW.byteLength);
              wW.set(new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength)), OW.postMessage({
                action: "decode",
                data: wW,
                caps: mW,
                options: iW
              }, [wW.buffer])
            }))
          }))
        }
        if (xW._DecoderModulePromise) {
          const mW = await xW._DecoderModulePromise;
          return xW.DefaultDecoderOptions.isDirty && (xW._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = xW.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((EW, NW) => {
            mW.decode(WW, OW, iW).then((WW => {
              EW(WW)
            })).catch((WW => {
              NW({
                message: WW
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(WW, iW, OW) {
        if ((WW.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, iW), OW && (OW.transcodedFormat = WW.transcodedFormat, OW.isInGammaSpace = WW.isInGammaSpace, OW.hasAlpha = WW.hasAlpha, OW.transcoderName = WW.transcoderName);
        let mW = !0;
        switch (WW.transcodedFormat) {
          case 32856:
            iW.type = 0, iW.format = 5;
            break;
          case 33321:
            iW.type = 0, iW.format = 6;
            break;
          case 33323:
            iW.type = 0, iW.format = 7;
            break;
          default:
            iW.format = WW.transcodedFormat, mW = !1
        }
        if (iW._gammaSpace = WW.isInGammaSpace, iW.generateMipMaps = WW.mipmaps.length > 1, iW.width = WW.mipmaps[0].width, iW.height = WW.mipmaps[0].height, WW.errors) throw new Error("KTX2 container - could not transcode the data. " + WW.errors);
        for (let EW = 0; EW < WW.mipmaps.length; ++EW) {
          const OW = WW.mipmaps[EW];
          if (!OW || !OW.data) throw new Error("KTX2 container - could not transcode one of the image");
          mW ? (iW.width = OW.width, iW.height = OW.height, this._engine._uploadDataToTextureDirectly(iW, OW.data, 0, EW, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(iW, WW.transcodedFormat, OW.width, OW.height, OW.data, 0, EW)
        }
        iW._extension = ".ktx2", iW.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(WW) {
        if (WW.byteLength >= 12) {
          const iW = new Uint8Array(WW.buffer, WW.byteOffset, 12);
          if (171 === iW[0] && 75 === iW[1] && 84 === iW[2] && 88 === iW[3] && 32 === iW[4] && 50 === iW[5] && 48 === iW[6] && 187 === iW[7] && 13 === iW[8] && 10 === iW[9] && 26 === iW[10] && 10 === iW[11]) return !0
        }
        return !1
      }
    }

    function lW(WW) {
      switch (WW) {
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
    xW.URLConfig = {
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
    }, xW.DefaultNumWorkers = xW.GetDefaultNumWorkers(), xW.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(WW) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== WW && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = WW, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(WW) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== WW && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = WW, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(WW) {
        this._forceRGBA !== WW && (this._forceRGBA = WW, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(WW) {
        this._forceR8 !== WW && (this._forceR8 = WW, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(WW) {
        this._forceRG8 !== WW && (this._forceRG8 = WW, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(WW) {
        this._bypassTranscoders !== WW && (this._bypassTranscoders = WW, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const WW = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (WW.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (WW.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (WW.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (WW.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (WW.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (WW.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [PW.BC1_RGB, PW.BC3_RGBA],
            yes: {
              transcodeFormat: PW.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = WW, WW
      }
    };
    class AW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(WW, iW, OW, mW) {
        if (Array.isArray(WW)) return;
        iW._invertVScale = !iW.invertY;
        const NW = iW.VA(),
          PW = new EW(WW, 6),
          LW = lW(PW.glInternalFormat);
        null !== LW ? (iW.format = LW, iW._useSRGBBuffer = NW._getUseSRGBBuffer(!0, !iW.generateMipMaps), iW._gammaSpace = !0) : iW.format = PW.glInternalFormat;
        const cW = PW.numberOfMipmapLevels > 1 && iW.generateMipMaps;
        NW._unpackFlipY(!0), PW.uploadLevels(iW, iW.generateMipMaps), iW.width = PW.pixelWidth, iW.height = PW.pixelHeight, NW._setCubeMapTextureParams(iW, cW, PW.numberOfMipmapLevels - 1), iW.isReady = !0, iW.onLoadedObservable.notifyObservers(iW), iW.onLoadedObservable.clear(), mW && mW()
      }
      loadData(WW, iW, OW, NW) {
        if (EW.IsValid(WW)) {
          iW._invertVScale = !iW.invertY;
          const mW = new EW(WW, 1),
            NW = lW(mW.glInternalFormat);
          null !== NW ? (iW.format = NW, iW._useSRGBBuffer = iW.VA()._getUseSRGBBuffer(!0, !iW.generateMipMaps), iW._gammaSpace = !0) : iW.format = mW.glInternalFormat, OW(mW.pixelWidth, mW.pixelHeight, iW.generateMipMaps, !0, (() => {
            mW.uploadLevels(iW, iW.generateMipMaps)
          }), mW.isInvalid)
        } else if (xW.IsValid(WW)) {
          new xW(iW.VA())._uploadAsync(WW, iW, NW).then((() => {
            OW(iW.width, iW.height, iW.generateMipMaps, !0, (() => {}), !1)
          }), (WW => {
            mW.b.Warn(`Failed to load KTX2 texture data: ${WW.message}`), OW(0, 0, !1, !1, (() => {}), !0)
          }))
        } else mW.b.Error("texture missing KTX identifier"), OW(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  54026: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    class mW {
      constructor(WW) {
        this._pendingActions = new Array, this._workerInfos = WW.map((WW => ({
          workerPromise: Promise.resolve(WW),
          idle: !0
        })))
      }
      dispose() {
        for (const WW of this._workerInfos) WW.workerPromise.then((WW => {
          WW.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(WW) {
        this._executeOnIdleWorker(WW) || this._pendingActions.push(WW)
      }
      _executeOnIdleWorker(WW) {
        for (const iW of this._workerInfos)
          if (iW.idle) return this._execute(iW, WW), !0;
        return !1
      }
      _execute(WW, iW) {
        WW.idle = !1, WW.workerPromise.then((OW => {
          iW(OW, (() => {
            const iW = this._pendingActions.shift();
            iW ? this._execute(WW, iW) : WW.idle = !0
          }))
        }))
      }
    }
    class EW extends mW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EW.DefaultOptions;
        super([]), this._maxWorkers = WW, this._createWorkerAsync = iW, this._options = OW
      }
      push(WW) {
        if (!this._executeOnIdleWorker(WW))
          if (this._workerInfos.length < this._maxWorkers) {
            const iW = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(iW), this._execute(iW, WW)
          } else this._pendingActions.push(WW)
      }
      _execute(WW, iW) {
        WW.timeoutId && (clearTimeout(WW.timeoutId), delete WW.timeoutId), super._execute(WW, ((OW, mW) => {
          iW(OW, (() => {
            mW(), WW.idle && (WW.timeoutId = setTimeout((() => {
              WW.workerPromise.then((WW => {
                WW.terminate()
              }));
              const iW = this._workerInfos.indexOf(WW); - 1 !== iW && this._workerInfos.splice(iW, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    EW.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);