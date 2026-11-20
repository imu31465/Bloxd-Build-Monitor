export const id = 303;
export const ids = [303];
export const modules = {
  41194: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      _KTXTextureLoader: () => CU
    });
    var tU = gU(38236);
    class pU {
      constructor(UU, RU) {
        if (this.data = UU, this.isInvalid = !1, !pU.IsValid(UU)) return this.isInvalid = !0, void tU.e.Error("texture missing KTX identifier");
        const gU = Uint32Array.BYTES_PER_ELEMENT,
          EU = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * gU),
          PU = 67305985 === EU.getUint32(0, !0);
        return this.glType = EU.getUint32(1 * gU, PU), this.glTypeSize = EU.getUint32(2 * gU, PU), this.glFormat = EU.getUint32(3 * gU, PU), this.glInternalFormat = EU.getUint32(4 * gU, PU), this.glBaseInternalFormat = EU.getUint32(5 * gU, PU), this.pixelWidth = EU.getUint32(6 * gU, PU), this.pixelHeight = EU.getUint32(7 * gU, PU), this.pixelDepth = EU.getUint32(8 * gU, PU), this.numberOfArrayElements = EU.getUint32(9 * gU, PU), this.numberOfFaces = EU.getUint32(10 * gU, PU), this.numberOfMipmapLevels = EU.getUint32(11 * gU, PU), this.bytesOfKeyValueData = EU.getUint32(12 * gU, PU), 0 !== this.glType ? (tU.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (tU.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (tU.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== RU ? (tU.e.Error("number of faces expected" + RU + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = pU.COMPRESSED_2D))
      }
      uploadLevels(UU, RU) {
        switch (this.loadType) {
          case pU.COMPRESSED_2D:
            this._upload2DCompressedLevels(UU, RU);
          case pU.TEX_2D:
          case pU.COMPRESSED_3D:
          case pU.TEX_3D:
        }
      }
      _upload2DCompressedLevels(UU, RU) {
        let gU = pU.HEADER_LEN + this.bytesOfKeyValueData,
          tU = this.pixelWidth,
          EU = this.pixelHeight;
        const PU = RU ? this.numberOfMipmapLevels : 1;
        for (let pU = 0; pU < PU; pU++) {
          const RU = new Int32Array(this.data.buffer, this.data.byteOffset + gU, 1)[0];
          gU += 4;
          for (let PU = 0; PU < this.numberOfFaces; PU++) {
            const TU = new Uint8Array(this.data.buffer, this.data.byteOffset + gU, RU);
            UU.WC()._uploadCompressedDataToTextureDirectly(UU, UU.format, tU, EU, TU, PU, pU), gU += RU, gU += 3 - (RU + 3) % 4
          }
          tU = Math.max(1, .5 * tU), EU = Math.max(1, .5 * EU)
        }
      }
      static IsValid(UU) {
        if (UU.byteLength >= 12) {
          const RU = new Uint8Array(UU.buffer, UU.byteOffset, 12);
          if (171 === RU[0] && 75 === RU[1] && 84 === RU[2] && 88 === RU[3] && 32 === RU[4] && 49 === RU[5] && 49 === RU[6] && 187 === RU[7] && 13 === RU[8] && 10 === RU[9] && 26 === RU[10] && 10 === RU[11]) return !0
        }
        return !1
      }
    }
    pU.HEADER_LEN = 64, pU.COMPRESSED_2D = 0, pU.COMPRESSED_3D = 1, pU.TEX_2D = 2, pU.TEX_3D = 3;
    var EU, PU, TU, qU = gU(41199),
      KU = gU(39473);

    function cU(UU, RU) {
      const gU = RU?.jsDecoderModule || KTX2DECODER;
      UU && (UU.wasmBaseUrl && (gU.Transcoder.WasmBaseUrl = UU.wasmBaseUrl), UU.wasmUASTCToASTC && (gU.LiteTranscoder_UASTC_ASTC.WasmModuleURL = UU.wasmUASTCToASTC), UU.wasmUASTCToBC7 && (gU.LiteTranscoder_UASTC_BC7.WasmModuleURL = UU.wasmUASTCToBC7), UU.wasmUASTCToRGBA_UNORM && (gU.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = UU.wasmUASTCToRGBA_UNORM), UU.wasmUASTCToRGBA_SRGB && (gU.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = UU.wasmUASTCToRGBA_SRGB), UU.wasmUASTCToR8_UNORM && (gU.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = UU.wasmUASTCToR8_UNORM), UU.wasmUASTCToRG8_UNORM && (gU.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = UU.wasmUASTCToRG8_UNORM), UU.jsMSCTranscoder && (gU.MSCTranscoder.JSModuleURL = UU.jsMSCTranscoder), UU.wasmMSCTranscoder && (gU.MSCTranscoder.WasmModuleURL = UU.wasmMSCTranscoder), UU.wasmZSTDDecoder && (gU.ZSTDDecoder.WasmModuleURL = UU.wasmZSTDDecoder)), RU && (RU.wasmUASTCToASTC && (gU.LiteTranscoder_UASTC_ASTC.WasmBinary = RU.wasmUASTCToASTC), RU.wasmUASTCToBC7 && (gU.LiteTranscoder_UASTC_BC7.WasmBinary = RU.wasmUASTCToBC7), RU.wasmUASTCToRGBA_UNORM && (gU.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = RU.wasmUASTCToRGBA_UNORM), RU.wasmUASTCToRGBA_SRGB && (gU.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = RU.wasmUASTCToRGBA_SRGB), RU.wasmUASTCToR8_UNORM && (gU.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = RU.wasmUASTCToR8_UNORM), RU.wasmUASTCToRG8_UNORM && (gU.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = RU.wasmUASTCToRG8_UNORM), RU.jsMSCTranscoder && (gU.MSCTranscoder.JSModule = RU.jsMSCTranscoder), RU.wasmMSCTranscoder && (gU.MSCTranscoder.WasmBinary = RU.wasmMSCTranscoder), RU.wasmZSTDDecoder && (gU.ZSTDDecoder.WasmBinary = RU.wasmZSTDDecoder))
    }

    function GU(UU) {
      let RU;
      "undefined" === typeof UU && "undefined" !== typeof KTX2DECODER && (UU = KTX2DECODER), onmessage = gU => {
        if (gU.data) switch (gU.data.action) {
          case "init": {
            const tU = gU.data.urls;
            tU && (tU.jsDecoderModule && "undefined" === typeof UU && (importScripts(tU.jsDecoderModule), UU = KTX2DECODER), cU(tU)), gU.data.wasmBinaries && cU(void 0, {
              ...gU.data.wasmBinaries,
              jsDecoderModule: UU
            }), RU = new UU.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            UU.KTX2Decoder.DefaultDecoderOptions = gU.data.options;
            break;
          case "decode":
            RU.decode(gU.data.data, gU.data.caps, gU.data.options).then((UU => {
              const RU = [];
              for (let gU = 0; gU < UU.mipmaps.length; ++gU) {
                const tU = UU.mipmaps[gU];
                tU && tU.data && RU.push(tU.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: UU
              }, RU)
            })).catch((UU => {
              postMessage({
                action: "decoded",
                success: !1,
                aP: UU
              })
            }))
        }
      }
    }! function(UU) {
      UU[UU.ETC1S = 0] = "ETC1S", UU[UU.UASTC4x4 = 1] = "UASTC4x4", UU[UU.RGBA32 = 2] = "RGBA32"
    }(EU || (EU = {})),
    function(UU) {
      UU[UU.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", UU[UU.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", UU[UU.BC7_RGBA = 1] = "BC7_RGBA", UU[UU.BC3_RGBA = 2] = "BC3_RGBA", UU[UU.BC1_RGB = 3] = "BC1_RGB", UU[UU.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", UU[UU.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", UU[UU.ETC2_RGBA = 6] = "ETC2_RGBA", UU[UU.ETC1_RGB = 7] = "ETC1_RGB", UU[UU.RGBA32 = 8] = "RGBA32", UU[UU.R8 = 9] = "R8", UU[UU.RG8 = 10] = "RG8"
    }(PU || (PU = {})),
    function(UU) {
      UU[UU.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", UU[UU.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", UU[UU.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", UU[UU.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", UU[UU.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", UU[UU.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", UU[UU.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", UU[UU.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", UU[UU.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", UU[UU.RGBA8Format = 32856] = "RGBA8Format", UU[UU.R8Format = 33321] = "R8Format", UU[UU.RG8Format = 33323] = "RG8Format"
    }(TU || (TU = {}));
    class jU {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(UU) {
        if (jU._WorkerPoolPromise || jU._DecoderModulePromise) return;
        const RU = {
          wasmBaseUrl: KU.g.ScriptBaseUrl,
          jsDecoderModule: KU.g.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: KU.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: KU.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: KU.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: KU.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: KU.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: KU.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: KU.g.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: KU.g.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: KU.g.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        UU && "function" === typeof Worker && "undefined" !== typeof URL ? jU._WorkerPoolPromise = new Promise((gU => {
          const tU = `${cU}(${GU})()`,
            pU = URL.createObjectURL(new Blob([tU], {
              type: "application/javascript"
            }));
          gU(new qU.d(UU, (async () => await async function(UU, RU, gU) {
            return await new Promise(((tU, pU) => {
              const EU = RU => {
                  UU.removeEventListener("error", EU), UU.removeEventListener("message", PU), pU(RU)
                },
                PU = RU => {
                  "init" === RU.data.action && (UU.removeEventListener("error", EU), UU.removeEventListener("message", PU), tU(UU))
                };
              UU.addEventListener("error", EU), UU.addEventListener("message", PU), UU.postMessage({
                action: "init",
                urls: gU,
                wasmBinaries: RU
              })
            }))
          }(new Worker(pU), void 0, RU))))
        })) : "undefined" === typeof jU._KTX2DecoderModule ? jU._DecoderModulePromise = KU.g.LoadBabylonScriptAsync(RU.jsDecoderModule).then((() => (jU._KTX2DecoderModule = KTX2DECODER, jU._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, jU._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, cU(RU, jU._KTX2DecoderModule), new jU._KTX2DecoderModule.KTX2Decoder))) : (jU._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, jU._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, jU._DecoderModulePromise = Promise.resolve(new jU._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jU.DefaultNumWorkers;
        this._engine = UU;
        const gU = "object" === typeof RU && RU.workerPool || jU.WorkerPool;
        if (gU) jU._WorkerPoolPromise = Promise.resolve(gU);
        else {
          "object" === typeof RU ? jU._KTX2DecoderModule = RU?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (jU._KTX2DecoderModule = KTX2DECODER);
          const UU = "number" === typeof RU ? RU : RU.numWorkers ?? jU.DefaultNumWorkers;
          jU._Initialize(UU)
        }
      }
      async _uploadAsync(UU, RU, gU) {
        const tU = await this._decodeAsync(UU, gU);
        this._createTexture(tU, RU, gU)
      }
      async _decodeAsync(UU, RU) {
        const gU = this._engine.getCaps(),
          tU = {
            astc: !!gU.astc,
            bptc: !!gU.bptc,
            s3tc: !!gU.s3tc,
            pvrtc: !!gU.pvrtc,
            etc2: !!gU.etc2,
            etc1: !!gU.etc1
          };
        if (jU._WorkerPoolPromise) {
          const gU = await jU._WorkerPoolPromise;
          return await new Promise(((pU, EU) => {
            gU.push(((gU, PU) => {
              const TU = UU => {
                  gU.removeEventListener("error", TU), gU.removeEventListener("message", qU), EU(UU), PU()
                },
                qU = UU => {
                  "decoded" === UU.data.action && (gU.removeEventListener("error", TU), gU.removeEventListener("message", qU), UU.data.success ? pU(UU.data.decodedData) : EU({
                    message: UU.data.aP
                  }), PU())
                };
              gU.addEventListener("error", TU), gU.addEventListener("message", qU), gU.postMessage({
                action: "setDefaultDecoderOptions",
                options: jU.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const KU = new Uint8Array(UU.byteLength);
              KU.set(new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength)), gU.postMessage({
                action: "decode",
                data: KU,
                caps: tU,
                options: RU
              }, [KU.buffer])
            }))
          }))
        }
        if (jU._DecoderModulePromise) {
          const tU = await jU._DecoderModulePromise;
          return jU.DefaultDecoderOptions.isDirty && (jU._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = jU.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((pU, EU) => {
            tU.decode(UU, gU, RU).then((UU => {
              pU(UU)
            })).catch((UU => {
              EU({
                message: UU
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(UU, RU, gU) {
        if ((UU.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, RU), gU && (gU.transcodedFormat = UU.transcodedFormat, gU.isInGammaSpace = UU.isInGammaSpace, gU.hasAlpha = UU.hasAlpha, gU.transcoderName = UU.transcoderName);
        let tU = !0;
        switch (UU.transcodedFormat) {
          case 32856:
            RU.type = 0, RU.format = 5;
            break;
          case 33321:
            RU.type = 0, RU.format = 6;
            break;
          case 33323:
            RU.type = 0, RU.format = 7;
            break;
          default:
            RU.format = UU.transcodedFormat, tU = !1
        }
        if (RU._gammaSpace = UU.isInGammaSpace, RU.generateMipMaps = UU.mipmaps.length > 1, RU.width = UU.mipmaps[0].width, RU.height = UU.mipmaps[0].height, UU.errors) throw new Error("KTX2 container - could not transcode the data. " + UU.errors);
        for (let pU = 0; pU < UU.mipmaps.length; ++pU) {
          const gU = UU.mipmaps[pU];
          if (!gU || !gU.data) throw new Error("KTX2 container - could not transcode one of the image");
          tU ? (RU.width = gU.width, RU.height = gU.height, this._engine._uploadDataToTextureDirectly(RU, gU.data, 0, pU, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(RU, UU.transcodedFormat, gU.width, gU.height, gU.data, 0, pU)
        }
        RU._extension = ".ktx2", RU.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(UU) {
        if (UU.byteLength >= 12) {
          const RU = new Uint8Array(UU.buffer, UU.byteOffset, 12);
          if (171 === RU[0] && 75 === RU[1] && 84 === RU[2] && 88 === RU[3] && 32 === RU[4] && 50 === RU[5] && 48 === RU[6] && 187 === RU[7] && 13 === RU[8] && 10 === RU[9] && 26 === RU[10] && 10 === RU[11]) return !0
        }
        return !1
      }
    }

    function uU(UU) {
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
    jU.URLConfig = {
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
    }, jU.DefaultNumWorkers = jU.GetDefaultNumWorkers(), jU.DefaultDecoderOptions = new class {
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
            transcodeFormat: [PU.BC1_RGB, PU.BC3_RGBA],
            yes: {
              transcodeFormat: PU.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = UU, UU
      }
    };
    class CU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(UU, RU, gU, tU) {
        if (Array.isArray(UU)) return;
        RU._invertVScale = !RU.invertY;
        const EU = RU.WC(),
          PU = new pU(UU, 6),
          TU = uU(PU.glInternalFormat);
        null !== TU ? (RU.format = TU, RU._useSRGBBuffer = EU._getUseSRGBBuffer(!0, !RU.generateMipMaps), RU._gammaSpace = !0) : RU.format = PU.glInternalFormat;
        const qU = PU.numberOfMipmapLevels > 1 && RU.generateMipMaps;
        EU._unpackFlipY(!0), PU.uploadLevels(RU, RU.generateMipMaps), RU.width = PU.pixelWidth, RU.height = PU.pixelHeight, EU._setCubeMapTextureParams(RU, qU, PU.numberOfMipmapLevels - 1), RU.isReady = !0, RU.onLoadedObservable.notifyObservers(RU), RU.onLoadedObservable.clear(), tU && tU()
      }
      loadData(UU, RU, gU, EU) {
        if (pU.IsValid(UU)) {
          RU._invertVScale = !RU.invertY;
          const tU = new pU(UU, 1),
            EU = uU(tU.glInternalFormat);
          null !== EU ? (RU.format = EU, RU._useSRGBBuffer = RU.WC()._getUseSRGBBuffer(!0, !RU.generateMipMaps), RU._gammaSpace = !0) : RU.format = tU.glInternalFormat, gU(tU.pixelWidth, tU.pixelHeight, RU.generateMipMaps, !0, (() => {
            tU.uploadLevels(RU, RU.generateMipMaps)
          }), tU.isInvalid)
        } else if (jU.IsValid(UU)) {
          new jU(RU.WC())._uploadAsync(UU, RU, EU).then((() => {
            gU(RU.width, RU.height, RU.generateMipMaps, !0, (() => {}), !1)
          }), (UU => {
            tU.e.Warn(`Failed to load KTX2 texture data: ${UU.message}`), gU(0, 0, !1, !1, (() => {}), !0)
          }))
        } else tU.e.Error("texture missing KTX identifier"), gU(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41199: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU
    });
    class tU {
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
        for (const RU of this._workerInfos)
          if (RU.idle) return this._execute(RU, UU), !0;
        return !1
      }
      _execute(UU, RU) {
        UU.idle = !1, UU.workerPromise.then((gU => {
          RU(gU, (() => {
            const RU = this._pendingActions.shift();
            RU ? this._execute(UU, RU) : UU.idle = !0
          }))
        }))
      }
    }
    class pU extends tU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pU.DefaultOptions;
        super([]), this._maxWorkers = UU, this._createWorkerAsync = RU, this._options = gU
      }
      push(UU) {
        if (!this._executeOnIdleWorker(UU))
          if (this._workerInfos.length < this._maxWorkers) {
            const RU = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(RU), this._execute(RU, UU)
          } else this._pendingActions.push(UU)
      }
      _execute(UU, RU) {
        UU.timeoutId && (clearTimeout(UU.timeoutId), delete UU.timeoutId), super._execute(UU, ((gU, tU) => {
          RU(gU, (() => {
            tU(), UU.idle && (UU.timeoutId = setTimeout((() => {
              UU.workerPromise.then((UU => {
                UU.terminate()
              }));
              const RU = this._workerInfos.indexOf(UU); - 1 !== RU && this._workerInfos.splice(RU, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    pU.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);