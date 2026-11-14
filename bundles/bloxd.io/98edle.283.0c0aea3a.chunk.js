export const id = 283;
export const ids = [283];
export const modules = {
  39303: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      _KTXTextureLoader: () => gR
    });
    var wW = MW(36721);
    class CW {
      constructor(WW, RW) {
        if (this.data = WW, this.isInvalid = !1, !CW.IsValid(WW)) return this.isInvalid = !0, void wW.b.Error("texture missing KTX identifier");
        const MW = Uint32Array.BYTES_PER_ELEMENT,
          zR = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * MW),
          AW = 67305985 === zR.getUint32(0, !0);
        return this.glType = zR.getUint32(1 * MW, AW), this.glTypeSize = zR.getUint32(2 * MW, AW), this.glFormat = zR.getUint32(3 * MW, AW), this.glInternalFormat = zR.getUint32(4 * MW, AW), this.glBaseInternalFormat = zR.getUint32(5 * MW, AW), this.pixelWidth = zR.getUint32(6 * MW, AW), this.pixelHeight = zR.getUint32(7 * MW, AW), this.pixelDepth = zR.getUint32(8 * MW, AW), this.numberOfArrayElements = zR.getUint32(9 * MW, AW), this.numberOfFaces = zR.getUint32(10 * MW, AW), this.numberOfMipmapLevels = zR.getUint32(11 * MW, AW), this.bytesOfKeyValueData = zR.getUint32(12 * MW, AW), 0 !== this.glType ? (wW.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (wW.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (wW.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== RW ? (wW.b.Error("number of faces expected" + RW + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = CW.COMPRESSED_2D))
      }
      uploadLevels(WW, RW) {
        switch (this.loadType) {
          case CW.COMPRESSED_2D:
            this._upload2DCompressedLevels(WW, RW);
          case CW.TEX_2D:
          case CW.COMPRESSED_3D:
          case CW.TEX_3D:
        }
      }
      _upload2DCompressedLevels(WW, RW) {
        let MW = CW.HEADER_LEN + this.bytesOfKeyValueData,
          wW = this.pixelWidth,
          zR = this.pixelHeight;
        const AW = RW ? this.numberOfMipmapLevels : 1;
        for (let CW = 0; CW < AW; CW++) {
          const RW = new Int32Array(this.data.buffer, this.data.byteOffset + MW, 1)[0];
          MW += 4;
          for (let AW = 0; AW < this.numberOfFaces; AW++) {
            const bR = new Uint8Array(this.data.buffer, this.data.byteOffset + MW, RW);
            WW.mC()._uploadCompressedDataToTextureDirectly(WW, WW.format, wW, zR, bR, AW, CW), MW += RW, MW += 3 - (RW + 3) % 4
          }
          wW = Math.max(1, .5 * wW), zR = Math.max(1, .5 * zR)
        }
      }
      static IsValid(WW) {
        if (WW.byteLength >= 12) {
          const RW = new Uint8Array(WW.buffer, WW.byteOffset, 12);
          if (171 === RW[0] && 75 === RW[1] && 84 === RW[2] && 88 === RW[3] && 32 === RW[4] && 49 === RW[5] && 49 === RW[6] && 187 === RW[7] && 13 === RW[8] && 10 === RW[9] && 26 === RW[10] && 10 === RW[11]) return !0
        }
        return !1
      }
    }
    CW.HEADER_LEN = 64, CW.COMPRESSED_2D = 0, CW.COMPRESSED_3D = 1, CW.TEX_2D = 2, CW.TEX_3D = 3;
    var zR, AW, bR, yR = MW(39306),
      NW = MW(37685);

    function eW(WW, RW) {
      const MW = RW?.jsDecoderModule || KTX2DECODER;
      WW && (WW.wasmBaseUrl && (MW.Transcoder.WasmBaseUrl = WW.wasmBaseUrl), WW.wasmUASTCToASTC && (MW.LiteTranscoder_UASTC_ASTC.WasmModuleURL = WW.wasmUASTCToASTC), WW.wasmUASTCToBC7 && (MW.LiteTranscoder_UASTC_BC7.WasmModuleURL = WW.wasmUASTCToBC7), WW.wasmUASTCToRGBA_UNORM && (MW.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = WW.wasmUASTCToRGBA_UNORM), WW.wasmUASTCToRGBA_SRGB && (MW.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = WW.wasmUASTCToRGBA_SRGB), WW.wasmUASTCToR8_UNORM && (MW.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = WW.wasmUASTCToR8_UNORM), WW.wasmUASTCToRG8_UNORM && (MW.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = WW.wasmUASTCToRG8_UNORM), WW.jsMSCTranscoder && (MW.MSCTranscoder.JSModuleURL = WW.jsMSCTranscoder), WW.wasmMSCTranscoder && (MW.MSCTranscoder.WasmModuleURL = WW.wasmMSCTranscoder), WW.wasmZSTDDecoder && (MW.ZSTDDecoder.WasmModuleURL = WW.wasmZSTDDecoder)), RW && (RW.wasmUASTCToASTC && (MW.LiteTranscoder_UASTC_ASTC.WasmBinary = RW.wasmUASTCToASTC), RW.wasmUASTCToBC7 && (MW.LiteTranscoder_UASTC_BC7.WasmBinary = RW.wasmUASTCToBC7), RW.wasmUASTCToRGBA_UNORM && (MW.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = RW.wasmUASTCToRGBA_UNORM), RW.wasmUASTCToRGBA_SRGB && (MW.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = RW.wasmUASTCToRGBA_SRGB), RW.wasmUASTCToR8_UNORM && (MW.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = RW.wasmUASTCToR8_UNORM), RW.wasmUASTCToRG8_UNORM && (MW.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = RW.wasmUASTCToRG8_UNORM), RW.jsMSCTranscoder && (MW.MSCTranscoder.JSModule = RW.jsMSCTranscoder), RW.wasmMSCTranscoder && (MW.MSCTranscoder.WasmBinary = RW.wasmMSCTranscoder), RW.wasmZSTDDecoder && (MW.ZSTDDecoder.WasmBinary = RW.wasmZSTDDecoder))
    }

    function BW(WW) {
      let RW;
      "undefined" === typeof WW && "undefined" !== typeof KTX2DECODER && (WW = KTX2DECODER), onmessage = MW => {
        if (MW.data) switch (MW.data.action) {
          case "init": {
            const wW = MW.data.urls;
            wW && (wW.jsDecoderModule && "undefined" === typeof WW && (importScripts(wW.jsDecoderModule), WW = KTX2DECODER), eW(wW)), MW.data.wasmBinaries && eW(void 0, {
              ...MW.data.wasmBinaries,
              jsDecoderModule: WW
            }), RW = new WW.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            WW.KTX2Decoder.DefaultDecoderOptions = MW.data.options;
            break;
          case "decode":
            RW.decode(MW.data.data, MW.data.caps, MW.data.options).then((WW => {
              const RW = [];
              for (let MW = 0; MW < WW.mipmaps.length; ++MW) {
                const wW = WW.mipmaps[MW];
                wW && wW.data && RW.push(wW.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: WW
              }, RW)
            })).catch((WW => {
              postMessage({
                action: "decoded",
                success: !1,
                PA: WW
              })
            }))
        }
      }
    }! function(WW) {
      WW[WW.ETC1S = 0] = "ETC1S", WW[WW.UASTC4x4 = 1] = "UASTC4x4", WW[WW.RGBA32 = 2] = "RGBA32"
    }(zR || (zR = {})),
    function(WW) {
      WW[WW.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", WW[WW.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", WW[WW.BC7_RGBA = 1] = "BC7_RGBA", WW[WW.BC3_RGBA = 2] = "BC3_RGBA", WW[WW.BC1_RGB = 3] = "BC1_RGB", WW[WW.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", WW[WW.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", WW[WW.ETC2_RGBA = 6] = "ETC2_RGBA", WW[WW.ETC1_RGB = 7] = "ETC1_RGB", WW[WW.RGBA32 = 8] = "RGBA32", WW[WW.R8 = 9] = "R8", WW[WW.RG8 = 10] = "RG8"
    }(AW || (AW = {})),
    function(WW) {
      WW[WW.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", WW[WW.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", WW[WW.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", WW[WW.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", WW[WW.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", WW[WW.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", WW[WW.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", WW[WW.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", WW[WW.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", WW[WW.RGBA8Format = 32856] = "RGBA8Format", WW[WW.R8Format = 33321] = "R8Format", WW[WW.RG8Format = 33323] = "RG8Format"
    }(bR || (bR = {}));
    class tR {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(WW) {
        if (tR._WorkerPoolPromise || tR._DecoderModulePromise) return;
        const RW = {
          wasmBaseUrl: NW.j.ScriptBaseUrl,
          jsDecoderModule: NW.j.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: NW.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: NW.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: NW.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: NW.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: NW.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: NW.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: NW.j.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: NW.j.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: NW.j.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        WW && "function" === typeof Worker && "undefined" !== typeof URL ? tR._WorkerPoolPromise = new Promise((MW => {
          const wW = `${eW}(${BW})()`,
            CW = URL.createObjectURL(new Blob([wW], {
              type: "application/javascript"
            }));
          MW(new yR.b(WW, (async () => await async function(WW, RW, MW) {
            return await new Promise(((wW, CW) => {
              const zR = RW => {
                  WW.removeEventListener("error", zR), WW.removeEventListener("message", AW), CW(RW)
                },
                AW = RW => {
                  "init" === RW.data.action && (WW.removeEventListener("error", zR), WW.removeEventListener("message", AW), wW(WW))
                };
              WW.addEventListener("error", zR), WW.addEventListener("message", AW), WW.postMessage({
                action: "init",
                urls: MW,
                wasmBinaries: RW
              })
            }))
          }(new Worker(CW), void 0, RW))))
        })) : "undefined" === typeof tR._KTX2DecoderModule ? tR._DecoderModulePromise = NW.j.LoadBabylonScriptAsync(RW.jsDecoderModule).then((() => (tR._KTX2DecoderModule = KTX2DECODER, tR._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, tR._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, eW(RW, tR._KTX2DecoderModule), new tR._KTX2DecoderModule.KTX2Decoder))) : (tR._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, tR._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, tR._DecoderModulePromise = Promise.resolve(new tR._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR.DefaultNumWorkers;
        this._engine = WW;
        const MW = "object" === typeof RW && RW.workerPool || tR.WorkerPool;
        if (MW) tR._WorkerPoolPromise = Promise.resolve(MW);
        else {
          "object" === typeof RW ? tR._KTX2DecoderModule = RW?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (tR._KTX2DecoderModule = KTX2DECODER);
          const WW = "number" === typeof RW ? RW : RW.numWorkers ?? tR.DefaultNumWorkers;
          tR._Initialize(WW)
        }
      }
      async _uploadAsync(WW, RW, MW) {
        const wW = await this._decodeAsync(WW, MW);
        this._createTexture(wW, RW, MW)
      }
      async _decodeAsync(WW, RW) {
        const MW = this._engine.getCaps(),
          wW = {
            astc: !!MW.astc,
            bptc: !!MW.bptc,
            s3tc: !!MW.s3tc,
            pvrtc: !!MW.pvrtc,
            etc2: !!MW.etc2,
            etc1: !!MW.etc1
          };
        if (tR._WorkerPoolPromise) {
          const MW = await tR._WorkerPoolPromise;
          return await new Promise(((CW, zR) => {
            MW.push(((MW, AW) => {
              const bR = WW => {
                  MW.removeEventListener("error", bR), MW.removeEventListener("message", yR), zR(WW), AW()
                },
                yR = WW => {
                  "decoded" === WW.data.action && (MW.removeEventListener("error", bR), MW.removeEventListener("message", yR), WW.data.success ? CW(WW.data.decodedData) : zR({
                    message: WW.data.PA
                  }), AW())
                };
              MW.addEventListener("error", bR), MW.addEventListener("message", yR), MW.postMessage({
                action: "setDefaultDecoderOptions",
                options: tR.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const NW = new Uint8Array(WW.byteLength);
              NW.set(new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength)), MW.postMessage({
                action: "decode",
                data: NW,
                caps: wW,
                options: RW
              }, [NW.buffer])
            }))
          }))
        }
        if (tR._DecoderModulePromise) {
          const wW = await tR._DecoderModulePromise;
          return tR.DefaultDecoderOptions.isDirty && (tR._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = tR.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((CW, zR) => {
            wW.decode(WW, MW, RW).then((WW => {
              CW(WW)
            })).catch((WW => {
              zR({
                message: WW
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(WW, RW, MW) {
        if ((WW.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, RW), MW && (MW.transcodedFormat = WW.transcodedFormat, MW.isInGammaSpace = WW.isInGammaSpace, MW.hasAlpha = WW.hasAlpha, MW.transcoderName = WW.transcoderName);
        let wW = !0;
        switch (WW.transcodedFormat) {
          case 32856:
            RW.type = 0, RW.format = 5;
            break;
          case 33321:
            RW.type = 0, RW.format = 6;
            break;
          case 33323:
            RW.type = 0, RW.format = 7;
            break;
          default:
            RW.format = WW.transcodedFormat, wW = !1
        }
        if (RW._gammaSpace = WW.isInGammaSpace, RW.generateMipMaps = WW.mipmaps.length > 1, RW.width = WW.mipmaps[0].width, RW.height = WW.mipmaps[0].height, WW.errors) throw new Error("KTX2 container - could not transcode the data. " + WW.errors);
        for (let CW = 0; CW < WW.mipmaps.length; ++CW) {
          const MW = WW.mipmaps[CW];
          if (!MW || !MW.data) throw new Error("KTX2 container - could not transcode one of the image");
          wW ? (RW.width = MW.width, RW.height = MW.height, this._engine._uploadDataToTextureDirectly(RW, MW.data, 0, CW, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(RW, WW.transcodedFormat, MW.width, MW.height, MW.data, 0, CW)
        }
        RW._extension = ".ktx2", RW.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(WW) {
        if (WW.byteLength >= 12) {
          const RW = new Uint8Array(WW.buffer, WW.byteOffset, 12);
          if (171 === RW[0] && 75 === RW[1] && 84 === RW[2] && 88 === RW[3] && 32 === RW[4] && 50 === RW[5] && 48 === RW[6] && 187 === RW[7] && 13 === RW[8] && 10 === RW[9] && 26 === RW[10] && 10 === RW[11]) return !0
        }
        return !1
      }
    }

    function TW(WW) {
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
    tR.URLConfig = {
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
    }, tR.DefaultNumWorkers = tR.GetDefaultNumWorkers(), tR.DefaultDecoderOptions = new class {
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
            transcodeFormat: [AW.BC1_RGB, AW.BC3_RGBA],
            yes: {
              transcodeFormat: AW.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = WW, WW
      }
    };
    class gR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(WW, RW, MW, wW) {
        if (Array.isArray(WW)) return;
        RW._invertVScale = !RW.invertY;
        const zR = RW.mC(),
          AW = new CW(WW, 6),
          bR = TW(AW.glInternalFormat);
        null !== bR ? (RW.format = bR, RW._useSRGBBuffer = zR._getUseSRGBBuffer(!0, !RW.generateMipMaps), RW._gammaSpace = !0) : RW.format = AW.glInternalFormat;
        const yR = AW.numberOfMipmapLevels > 1 && RW.generateMipMaps;
        zR._unpackFlipY(!0), AW.uploadLevels(RW, RW.generateMipMaps), RW.width = AW.pixelWidth, RW.height = AW.pixelHeight, zR._setCubeMapTextureParams(RW, yR, AW.numberOfMipmapLevels - 1), RW.isReady = !0, RW.onLoadedObservable.notifyObservers(RW), RW.onLoadedObservable.clear(), wW && wW()
      }
      loadData(WW, RW, MW, zR) {
        if (CW.IsValid(WW)) {
          RW._invertVScale = !RW.invertY;
          const wW = new CW(WW, 1),
            zR = TW(wW.glInternalFormat);
          null !== zR ? (RW.format = zR, RW._useSRGBBuffer = RW.mC()._getUseSRGBBuffer(!0, !RW.generateMipMaps), RW._gammaSpace = !0) : RW.format = wW.glInternalFormat, MW(wW.pixelWidth, wW.pixelHeight, RW.generateMipMaps, !0, (() => {
            wW.uploadLevels(RW, RW.generateMipMaps)
          }), wW.isInvalid)
        } else if (tR.IsValid(WW)) {
          new tR(RW.mC())._uploadAsync(WW, RW, zR).then((() => {
            MW(RW.width, RW.height, RW.generateMipMaps, !0, (() => {}), !1)
          }), (WW => {
            wW.b.Warn(`Failed to load KTX2 texture data: ${WW.message}`), MW(0, 0, !1, !1, (() => {}), !0)
          }))
        } else wW.b.Error("texture missing KTX identifier"), MW(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  39306: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW
    });
    class wW {
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
        for (const RW of this._workerInfos)
          if (RW.idle) return this._execute(RW, WW), !0;
        return !1
      }
      _execute(WW, RW) {
        WW.idle = !1, WW.workerPromise.then((MW => {
          RW(MW, (() => {
            const RW = this._pendingActions.shift();
            RW ? this._execute(WW, RW) : WW.idle = !0
          }))
        }))
      }
    }
    class CW extends wW {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CW.DefaultOptions;
        super([]), this._maxWorkers = WW, this._createWorkerAsync = RW, this._options = MW
      }
      push(WW) {
        if (!this._executeOnIdleWorker(WW))
          if (this._workerInfos.length < this._maxWorkers) {
            const RW = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(RW), this._execute(RW, WW)
          } else this._pendingActions.push(WW)
      }
      _execute(WW, RW) {
        WW.timeoutId && (clearTimeout(WW.timeoutId), delete WW.timeoutId), super._execute(WW, ((MW, wW) => {
          RW(MW, (() => {
            wW(), WW.idle && (WW.timeoutId = setTimeout((() => {
              WW.workerPromise.then((WW => {
                WW.terminate()
              }));
              const RW = this._workerInfos.indexOf(WW); - 1 !== RW && this._workerInfos.splice(RW, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    CW.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);