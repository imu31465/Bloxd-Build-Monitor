export const id = 619;
export const ids = [619];
export const modules = {
  44539: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      _KTXTextureLoader: () => pU
    });
    var cU = zU(39493);
    class yU {
      constructor(UU, XU) {
        if (this.data = UU, this.isInvalid = !1, !yU.IsValid(UU)) return this.isInvalid = !0, void cU.b.Error("texture missing KTX identifier");
        const zU = Uint32Array.BYTES_PER_ELEMENT,
          QU = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * zU),
          AU = 67305985 === QU.getUint32(0, !0);
        return this.glType = QU.getUint32(1 * zU, AU), this.glTypeSize = QU.getUint32(2 * zU, AU), this.glFormat = QU.getUint32(3 * zU, AU), this.glInternalFormat = QU.getUint32(4 * zU, AU), this.glBaseInternalFormat = QU.getUint32(5 * zU, AU), this.pixelWidth = QU.getUint32(6 * zU, AU), this.pixelHeight = QU.getUint32(7 * zU, AU), this.pixelDepth = QU.getUint32(8 * zU, AU), this.numberOfArrayElements = QU.getUint32(9 * zU, AU), this.numberOfFaces = QU.getUint32(10 * zU, AU), this.numberOfMipmapLevels = QU.getUint32(11 * zU, AU), this.bytesOfKeyValueData = QU.getUint32(12 * zU, AU), 0 !== this.glType ? (cU.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (cU.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (cU.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== XU ? (cU.b.Error("number of faces expected" + XU + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = yU.COMPRESSED_2D))
      }
      uploadLevels(UU, XU) {
        switch (this.loadType) {
          case yU.COMPRESSED_2D:
            this._upload2DCompressedLevels(UU, XU);
          case yU.TEX_2D:
          case yU.COMPRESSED_3D:
          case yU.TEX_3D:
        }
      }
      _upload2DCompressedLevels(UU, XU) {
        let zU = yU.HEADER_LEN + this.bytesOfKeyValueData,
          cU = this.pixelWidth,
          QU = this.pixelHeight;
        const AU = XU ? this.numberOfMipmapLevels : 1;
        for (let yU = 0; yU < AU; yU++) {
          const XU = new Int32Array(this.data.buffer, this.data.byteOffset + zU, 1)[0];
          zU += 4;
          for (let AU = 0; AU < this.numberOfFaces; AU++) {
            const FU = new Uint8Array(this.data.buffer, this.data.byteOffset + zU, XU);
            UU.qp()._uploadCompressedDataToTextureDirectly(UU, UU.format, cU, QU, FU, AU, yU), zU += XU, zU += 3 - (XU + 3) % 4
          }
          cU = Math.max(1, .5 * cU), QU = Math.max(1, .5 * QU)
        }
      }
      static IsValid(UU) {
        if (UU.byteLength >= 12) {
          const XU = new Uint8Array(UU.buffer, UU.byteOffset, 12);
          if (171 === XU[0] && 75 === XU[1] && 84 === XU[2] && 88 === XU[3] && 32 === XU[4] && 49 === XU[5] && 49 === XU[6] && 187 === XU[7] && 13 === XU[8] && 10 === XU[9] && 26 === XU[10] && 10 === XU[11]) return !0
        }
        return !1
      }
    }
    yU.HEADER_LEN = 64, yU.COMPRESSED_2D = 0, yU.COMPRESSED_3D = 1, yU.TEX_2D = 2, yU.TEX_3D = 3;
    var QU, AU, FU, oU = zU(44544),
      DU = zU(41205);

    function EU(UU, XU) {
      const zU = XU?.jsDecoderModule || KTX2DECODER;
      UU && (UU.wasmBaseUrl && (zU.Transcoder.WasmBaseUrl = UU.wasmBaseUrl), UU.wasmUASTCToASTC && (zU.LiteTranscoder_UASTC_ASTC.WasmModuleURL = UU.wasmUASTCToASTC), UU.wasmUASTCToBC7 && (zU.LiteTranscoder_UASTC_BC7.WasmModuleURL = UU.wasmUASTCToBC7), UU.wasmUASTCToRGBA_UNORM && (zU.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = UU.wasmUASTCToRGBA_UNORM), UU.wasmUASTCToRGBA_SRGB && (zU.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = UU.wasmUASTCToRGBA_SRGB), UU.wasmUASTCToR8_UNORM && (zU.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = UU.wasmUASTCToR8_UNORM), UU.wasmUASTCToRG8_UNORM && (zU.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = UU.wasmUASTCToRG8_UNORM), UU.jsMSCTranscoder && (zU.MSCTranscoder.JSModuleURL = UU.jsMSCTranscoder), UU.wasmMSCTranscoder && (zU.MSCTranscoder.WasmModuleURL = UU.wasmMSCTranscoder), UU.wasmZSTDDecoder && (zU.ZSTDDecoder.WasmModuleURL = UU.wasmZSTDDecoder)), XU && (XU.wasmUASTCToASTC && (zU.LiteTranscoder_UASTC_ASTC.WasmBinary = XU.wasmUASTCToASTC), XU.wasmUASTCToBC7 && (zU.LiteTranscoder_UASTC_BC7.WasmBinary = XU.wasmUASTCToBC7), XU.wasmUASTCToRGBA_UNORM && (zU.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = XU.wasmUASTCToRGBA_UNORM), XU.wasmUASTCToRGBA_SRGB && (zU.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = XU.wasmUASTCToRGBA_SRGB), XU.wasmUASTCToR8_UNORM && (zU.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = XU.wasmUASTCToR8_UNORM), XU.wasmUASTCToRG8_UNORM && (zU.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = XU.wasmUASTCToRG8_UNORM), XU.jsMSCTranscoder && (zU.MSCTranscoder.JSModule = XU.jsMSCTranscoder), XU.wasmMSCTranscoder && (zU.MSCTranscoder.WasmBinary = XU.wasmMSCTranscoder), XU.wasmZSTDDecoder && (zU.ZSTDDecoder.WasmBinary = XU.wasmZSTDDecoder))
    }

    function YU(UU) {
      let XU;
      "undefined" === typeof UU && "undefined" !== typeof KTX2DECODER && (UU = KTX2DECODER), onmessage = zU => {
        if (zU.data) switch (zU.data.action) {
          case "init": {
            const cU = zU.data.urls;
            cU && (cU.jsDecoderModule && "undefined" === typeof UU && (importScripts(cU.jsDecoderModule), UU = KTX2DECODER), EU(cU)), zU.data.wasmBinaries && EU(void 0, {
              ...zU.data.wasmBinaries,
              jsDecoderModule: UU
            }), XU = new UU.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            UU.KTX2Decoder.DefaultDecoderOptions = zU.data.options;
            break;
          case "decode":
            XU.decode(zU.data.data, zU.data.caps, zU.data.options).then((UU => {
              const XU = [];
              for (let zU = 0; zU < UU.mipmaps.length; ++zU) {
                const cU = UU.mipmaps[zU];
                cU && cU.data && XU.push(cU.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: UU
              }, XU)
            })).catch((UU => {
              postMessage({
                action: "decoded",
                success: !1,
                TE: UU
              })
            }))
        }
      }
    }! function(UU) {
      UU[UU.ETC1S = 0] = "ETC1S", UU[UU.UASTC4x4 = 1] = "UASTC4x4", UU[UU.RGBA32 = 2] = "RGBA32"
    }(QU || (QU = {})),
    function(UU) {
      UU[UU.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", UU[UU.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", UU[UU.BC7_RGBA = 1] = "BC7_RGBA", UU[UU.BC3_RGBA = 2] = "BC3_RGBA", UU[UU.BC1_RGB = 3] = "BC1_RGB", UU[UU.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", UU[UU.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", UU[UU.ETC2_RGBA = 6] = "ETC2_RGBA", UU[UU.ETC1_RGB = 7] = "ETC1_RGB", UU[UU.RGBA32 = 8] = "RGBA32", UU[UU.R8 = 9] = "R8", UU[UU.RG8 = 10] = "RG8"
    }(AU || (AU = {})),
    function(UU) {
      UU[UU.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", UU[UU.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", UU[UU.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", UU[UU.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", UU[UU.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", UU[UU.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", UU[UU.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", UU[UU.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", UU[UU.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", UU[UU.RGBA8Format = 32856] = "RGBA8Format", UU[UU.R8Format = 33321] = "R8Format", UU[UU.RG8Format = 33323] = "RG8Format"
    }(FU || (FU = {}));
    class NU {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(UU) {
        if (NU._WorkerPoolPromise || NU._DecoderModulePromise) return;
        const XU = {
          wasmBaseUrl: DU.j.ScriptBaseUrl,
          jsDecoderModule: DU.j.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: DU.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: DU.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: DU.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: DU.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: DU.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: DU.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: DU.j.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: DU.j.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: DU.j.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        UU && "function" === typeof Worker && "undefined" !== typeof URL ? NU._WorkerPoolPromise = new Promise((zU => {
          const cU = `${EU}(${YU})()`,
            yU = URL.createObjectURL(new Blob([cU], {
              type: "application/javascript"
            }));
          zU(new oU.b(UU, (async () => await async function(UU, XU, zU) {
            return await new Promise(((cU, yU) => {
              const QU = XU => {
                  UU.removeEventListener("error", QU), UU.removeEventListener("message", AU), yU(XU)
                },
                AU = XU => {
                  "init" === XU.data.action && (UU.removeEventListener("error", QU), UU.removeEventListener("message", AU), cU(UU))
                };
              UU.addEventListener("error", QU), UU.addEventListener("message", AU), UU.postMessage({
                action: "init",
                urls: zU,
                wasmBinaries: XU
              })
            }))
          }(new Worker(yU), void 0, XU))))
        })) : "undefined" === typeof NU._KTX2DecoderModule ? NU._DecoderModulePromise = DU.j.LoadBabylonScriptAsync(XU.jsDecoderModule).then((() => (NU._KTX2DecoderModule = KTX2DECODER, NU._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, NU._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, EU(XU, NU._KTX2DecoderModule), new NU._KTX2DecoderModule.KTX2Decoder))) : (NU._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, NU._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, NU._DecoderModulePromise = Promise.resolve(new NU._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NU.DefaultNumWorkers;
        this._engine = UU;
        const zU = "object" === typeof XU && XU.workerPool || NU.WorkerPool;
        if (zU) NU._WorkerPoolPromise = Promise.resolve(zU);
        else {
          "object" === typeof XU ? NU._KTX2DecoderModule = XU?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (NU._KTX2DecoderModule = KTX2DECODER);
          const UU = "number" === typeof XU ? XU : XU.numWorkers ?? NU.DefaultNumWorkers;
          NU._Initialize(UU)
        }
      }
      async _uploadAsync(UU, XU, zU) {
        const cU = await this._decodeAsync(UU, zU);
        this._createTexture(cU, XU, zU)
      }
      async _decodeAsync(UU, XU) {
        const zU = this._engine.getCaps(),
          cU = {
            astc: !!zU.astc,
            bptc: !!zU.bptc,
            s3tc: !!zU.s3tc,
            pvrtc: !!zU.pvrtc,
            etc2: !!zU.etc2,
            etc1: !!zU.etc1
          };
        if (NU._WorkerPoolPromise) {
          const zU = await NU._WorkerPoolPromise;
          return await new Promise(((yU, QU) => {
            zU.push(((zU, AU) => {
              const FU = UU => {
                  zU.removeEventListener("error", FU), zU.removeEventListener("message", oU), QU(UU), AU()
                },
                oU = UU => {
                  "decoded" === UU.data.action && (zU.removeEventListener("error", FU), zU.removeEventListener("message", oU), UU.data.success ? yU(UU.data.decodedData) : QU({
                    message: UU.data.TE
                  }), AU())
                };
              zU.addEventListener("error", FU), zU.addEventListener("message", oU), zU.postMessage({
                action: "setDefaultDecoderOptions",
                options: NU.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const DU = new Uint8Array(UU.byteLength);
              DU.set(new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength)), zU.postMessage({
                action: "decode",
                data: DU,
                caps: cU,
                options: XU
              }, [DU.buffer])
            }))
          }))
        }
        if (NU._DecoderModulePromise) {
          const cU = await NU._DecoderModulePromise;
          return NU.DefaultDecoderOptions.isDirty && (NU._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = NU.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((yU, QU) => {
            cU.decode(UU, zU, XU).then((UU => {
              yU(UU)
            })).catch((UU => {
              QU({
                message: UU
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(UU, XU, zU) {
        if ((UU.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, XU), zU && (zU.transcodedFormat = UU.transcodedFormat, zU.isInGammaSpace = UU.isInGammaSpace, zU.hasAlpha = UU.hasAlpha, zU.transcoderName = UU.transcoderName);
        let cU = !0;
        switch (UU.transcodedFormat) {
          case 32856:
            XU.type = 0, XU.format = 5;
            break;
          case 33321:
            XU.type = 0, XU.format = 6;
            break;
          case 33323:
            XU.type = 0, XU.format = 7;
            break;
          default:
            XU.format = UU.transcodedFormat, cU = !1
        }
        if (XU._gammaSpace = UU.isInGammaSpace, XU.generateMipMaps = UU.mipmaps.length > 1, XU.width = UU.mipmaps[0].width, XU.height = UU.mipmaps[0].height, UU.errors) throw new Error("KTX2 container - could not transcode the data. " + UU.errors);
        for (let yU = 0; yU < UU.mipmaps.length; ++yU) {
          const zU = UU.mipmaps[yU];
          if (!zU || !zU.data) throw new Error("KTX2 container - could not transcode one of the image");
          cU ? (XU.width = zU.width, XU.height = zU.height, this._engine._uploadDataToTextureDirectly(XU, zU.data, 0, yU, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(XU, UU.transcodedFormat, zU.width, zU.height, zU.data, 0, yU)
        }
        XU._extension = ".ktx2", XU.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(UU) {
        if (UU.byteLength >= 12) {
          const XU = new Uint8Array(UU.buffer, UU.byteOffset, 12);
          if (171 === XU[0] && 75 === XU[1] && 84 === XU[2] && 88 === XU[3] && 32 === XU[4] && 50 === XU[5] && 48 === XU[6] && 187 === XU[7] && 13 === XU[8] && 10 === XU[9] && 26 === XU[10] && 10 === XU[11]) return !0
        }
        return !1
      }
    }

    function IU(UU) {
      switch (UU) {
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
    NU.URLConfig = {
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
    }, NU.DefaultNumWorkers = NU.GetDefaultNumWorkers(), NU.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(UU) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== UU && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = UU, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(UU) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== UU && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = UU, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(UU) {
        this._forceRGBA !== UU && (this._forceRGBA = UU, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(UU) {
        this._forceR8 !== UU && (this._forceR8 = UU, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(UU) {
        this._forceRG8 !== UU && (this._forceRG8 = UU, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(UU) {
        this._bypassTranscoders !== UU && (this._bypassTranscoders = UU, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const UU = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (UU.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (UU.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (UU.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (UU.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (UU.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (UU.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [AU.BC1_RGB, AU.BC3_RGBA],
            yes: {
              transcodeFormat: AU.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = UU, UU
      }
    };
    class pU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(UU, XU, zU, cU) {
        if (Array.isArray(UU)) return;
        XU._invertVScale = !XU.invertY;
        const QU = XU.qp(),
          AU = new yU(UU, 6),
          FU = IU(AU.glInternalFormat);
        null !== FU ? (XU.format = FU, XU._useSRGBBuffer = QU._getUseSRGBBuffer(!0, !XU.generateMipMaps), XU._gammaSpace = !0) : XU.format = AU.glInternalFormat;
        const oU = AU.numberOfMipmapLevels > 1 && XU.generateMipMaps;
        QU._unpackFlipY(!0), AU.uploadLevels(XU, XU.generateMipMaps), XU.width = AU.pixelWidth, XU.height = AU.pixelHeight, QU._setCubeMapTextureParams(XU, oU, AU.numberOfMipmapLevels - 1), XU.isReady = !0, XU.onLoadedObservable.notifyObservers(XU), XU.onLoadedObservable.clear(), cU && cU()
      }
      loadData(UU, XU, zU, QU) {
        if (yU.IsValid(UU)) {
          XU._invertVScale = !XU.invertY;
          const cU = new yU(UU, 1),
            QU = IU(cU.glInternalFormat);
          null !== QU ? (XU.format = QU, XU._useSRGBBuffer = XU.qp()._getUseSRGBBuffer(!0, !XU.generateMipMaps), XU._gammaSpace = !0) : XU.format = cU.glInternalFormat, zU(cU.pixelWidth, cU.pixelHeight, XU.generateMipMaps, !0, (() => {
            cU.uploadLevels(XU, XU.generateMipMaps)
          }), cU.isInvalid)
        } else if (NU.IsValid(UU)) {
          new NU(XU.qp())._uploadAsync(UU, XU, QU).then((() => {
            zU(XU.width, XU.height, XU.generateMipMaps, !0, (() => {}), !1)
          }), (UU => {
            cU.b.Warn(`Failed to load KTX2 texture data: ${UU.message}`), zU(0, 0, !1, !1, (() => {}), !0)
          }))
        } else cU.b.Error("texture missing KTX identifier"), zU(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  44544: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    class cU {
      constructor(UU) {
        this._pendingActions = new Array, this._workerInfos = UU.map((UU => ({
          workerPromise: Promise.resolve(UU),
          idle: !0
        })))
      }
      dispose() {
        for (const UU of this._workerInfos) UU.workerPromise.then((UU => {
          UU.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(UU) {
        this._executeOnIdleWorker(UU) || this._pendingActions.push(UU)
      }
      _executeOnIdleWorker(UU) {
        for (const XU of this._workerInfos)
          if (XU.idle) return this._execute(XU, UU), !0;
        return !1
      }
      _execute(UU, XU) {
        UU.idle = !1, UU.workerPromise.then((zU => {
          XU(zU, (() => {
            const XU = this._pendingActions.shift();
            XU ? this._execute(UU, XU) : UU.idle = !0
          }))
        }))
      }
    }
    class yU extends cU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yU.DefaultOptions;
        super([]), this._maxWorkers = UU, this._createWorkerAsync = XU, this._options = zU
      }
      push(UU) {
        if (!this._executeOnIdleWorker(UU))
          if (this._workerInfos.length < this._maxWorkers) {
            const XU = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(XU), this._execute(XU, UU)
          } else this._pendingActions.push(UU)
      }
      _execute(UU, XU) {
        UU.timeoutId && (clearTimeout(UU.timeoutId), delete UU.timeoutId), super._execute(UU, ((zU, cU) => {
          XU(zU, (() => {
            cU(), UU.idle && (UU.timeoutId = setTimeout((() => {
              UU.workerPromise.then((UU => {
                UU.terminate()
              }));
              const XU = this._workerInfos.indexOf(UU); - 1 !== XU && this._workerInfos.splice(XU, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    yU.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);