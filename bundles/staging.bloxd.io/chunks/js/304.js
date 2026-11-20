export const id = 304;
export const ids = [304];
export const modules = {
  41401: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      _KTXTextureLoader: () => vT
    });
    var lT = cT(38512);
    class MT {
      constructor(TT, kT) {
        if (this.data = TT, this.isInvalid = !1, !MT.IsValid(TT)) return this.isInvalid = !0, void lT.e.Error("texture missing KTX identifier");
        const cT = Uint32Array.BYTES_PER_ELEMENT,
          KT = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * cT),
          OT = 67305985 === KT.getUint32(0, !0);
        return this.glType = KT.getUint32(1 * cT, OT), this.glTypeSize = KT.getUint32(2 * cT, OT), this.glFormat = KT.getUint32(3 * cT, OT), this.glInternalFormat = KT.getUint32(4 * cT, OT), this.glBaseInternalFormat = KT.getUint32(5 * cT, OT), this.pixelWidth = KT.getUint32(6 * cT, OT), this.pixelHeight = KT.getUint32(7 * cT, OT), this.pixelDepth = KT.getUint32(8 * cT, OT), this.numberOfArrayElements = KT.getUint32(9 * cT, OT), this.numberOfFaces = KT.getUint32(10 * cT, OT), this.numberOfMipmapLevels = KT.getUint32(11 * cT, OT), this.bytesOfKeyValueData = KT.getUint32(12 * cT, OT), 0 !== this.glType ? (lT.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (lT.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (lT.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== kT ? (lT.e.Error("number of faces expected" + kT + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = MT.COMPRESSED_2D))
      }
      uploadLevels(TT, kT) {
        switch (this.loadType) {
          case MT.COMPRESSED_2D:
            this._upload2DCompressedLevels(TT, kT);
          case MT.TEX_2D:
          case MT.COMPRESSED_3D:
          case MT.TEX_3D:
        }
      }
      _upload2DCompressedLevels(TT, kT) {
        let cT = MT.HEADER_LEN + this.bytesOfKeyValueData,
          lT = this.pixelWidth,
          KT = this.pixelHeight;
        const OT = kT ? this.numberOfMipmapLevels : 1;
        for (let MT = 0; MT < OT; MT++) {
          const kT = new Int32Array(this.data.buffer, this.data.byteOffset + cT, 1)[0];
          cT += 4;
          for (let OT = 0; OT < this.numberOfFaces; OT++) {
            const yT = new Uint8Array(this.data.buffer, this.data.byteOffset + cT, kT);
            TT.Dv()._uploadCompressedDataToTextureDirectly(TT, TT.format, lT, KT, yT, OT, MT), cT += kT, cT += 3 - (kT + 3) % 4
          }
          lT = Math.max(1, .5 * lT), KT = Math.max(1, .5 * KT)
        }
      }
      static IsValid(TT) {
        if (TT.byteLength >= 12) {
          const kT = new Uint8Array(TT.buffer, TT.byteOffset, 12);
          if (171 === kT[0] && 75 === kT[1] && 84 === kT[2] && 88 === kT[3] && 32 === kT[4] && 49 === kT[5] && 49 === kT[6] && 187 === kT[7] && 13 === kT[8] && 10 === kT[9] && 26 === kT[10] && 10 === kT[11]) return !0
        }
        return !1
      }
    }
    MT.HEADER_LEN = 64, MT.COMPRESSED_2D = 0, MT.COMPRESSED_3D = 1, MT.TEX_2D = 2, MT.TEX_3D = 3;
    var KT, OT, yT, fT = cT(41405),
      xT = cT(39727);

    function IT(TT, kT) {
      const cT = kT?.jsDecoderModule || KTX2DECODER;
      TT && (TT.wasmBaseUrl && (cT.Transcoder.WasmBaseUrl = TT.wasmBaseUrl), TT.wasmUASTCToASTC && (cT.LiteTranscoder_UASTC_ASTC.WasmModuleURL = TT.wasmUASTCToASTC), TT.wasmUASTCToBC7 && (cT.LiteTranscoder_UASTC_BC7.WasmModuleURL = TT.wasmUASTCToBC7), TT.wasmUASTCToRGBA_UNORM && (cT.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = TT.wasmUASTCToRGBA_UNORM), TT.wasmUASTCToRGBA_SRGB && (cT.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = TT.wasmUASTCToRGBA_SRGB), TT.wasmUASTCToR8_UNORM && (cT.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = TT.wasmUASTCToR8_UNORM), TT.wasmUASTCToRG8_UNORM && (cT.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = TT.wasmUASTCToRG8_UNORM), TT.jsMSCTranscoder && (cT.MSCTranscoder.JSModuleURL = TT.jsMSCTranscoder), TT.wasmMSCTranscoder && (cT.MSCTranscoder.WasmModuleURL = TT.wasmMSCTranscoder), TT.wasmZSTDDecoder && (cT.ZSTDDecoder.WasmModuleURL = TT.wasmZSTDDecoder)), kT && (kT.wasmUASTCToASTC && (cT.LiteTranscoder_UASTC_ASTC.WasmBinary = kT.wasmUASTCToASTC), kT.wasmUASTCToBC7 && (cT.LiteTranscoder_UASTC_BC7.WasmBinary = kT.wasmUASTCToBC7), kT.wasmUASTCToRGBA_UNORM && (cT.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = kT.wasmUASTCToRGBA_UNORM), kT.wasmUASTCToRGBA_SRGB && (cT.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = kT.wasmUASTCToRGBA_SRGB), kT.wasmUASTCToR8_UNORM && (cT.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = kT.wasmUASTCToR8_UNORM), kT.wasmUASTCToRG8_UNORM && (cT.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = kT.wasmUASTCToRG8_UNORM), kT.jsMSCTranscoder && (cT.MSCTranscoder.JSModule = kT.jsMSCTranscoder), kT.wasmMSCTranscoder && (cT.MSCTranscoder.WasmBinary = kT.wasmMSCTranscoder), kT.wasmZSTDDecoder && (cT.ZSTDDecoder.WasmBinary = kT.wasmZSTDDecoder))
    }

    function AT(TT) {
      let kT;
      "undefined" === typeof TT && "undefined" !== typeof KTX2DECODER && (TT = KTX2DECODER), onmessage = cT => {
        if (cT.data) switch (cT.data.action) {
          case "init": {
            const lT = cT.data.urls;
            lT && (lT.jsDecoderModule && "undefined" === typeof TT && (importScripts(lT.jsDecoderModule), TT = KTX2DECODER), IT(lT)), cT.data.wasmBinaries && IT(void 0, {
              ...cT.data.wasmBinaries,
              jsDecoderModule: TT
            }), kT = new TT.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            TT.KTX2Decoder.DefaultDecoderOptions = cT.data.options;
            break;
          case "decode":
            kT.decode(cT.data.data, cT.data.caps, cT.data.options).then((TT => {
              const kT = [];
              for (let cT = 0; cT < TT.mipmaps.length; ++cT) {
                const lT = TT.mipmaps[cT];
                lT && lT.data && kT.push(lT.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: TT
              }, kT)
            })).catch((TT => {
              postMessage({
                action: "decoded",
                success: !1,
                vI: TT
              })
            }))
        }
      }
    }! function(TT) {
      TT[TT.ETC1S = 0] = "ETC1S", TT[TT.UASTC4x4 = 1] = "UASTC4x4", TT[TT.RGBA32 = 2] = "RGBA32"
    }(KT || (KT = {})),
    function(TT) {
      TT[TT.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", TT[TT.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", TT[TT.BC7_RGBA = 1] = "BC7_RGBA", TT[TT.BC3_RGBA = 2] = "BC3_RGBA", TT[TT.BC1_RGB = 3] = "BC1_RGB", TT[TT.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", TT[TT.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", TT[TT.ETC2_RGBA = 6] = "ETC2_RGBA", TT[TT.ETC1_RGB = 7] = "ETC1_RGB", TT[TT.RGBA32 = 8] = "RGBA32", TT[TT.R8 = 9] = "R8", TT[TT.RG8 = 10] = "RG8"
    }(OT || (OT = {})),
    function(TT) {
      TT[TT.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", TT[TT.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", TT[TT.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", TT[TT.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", TT[TT.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", TT[TT.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", TT[TT.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", TT[TT.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", TT[TT.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", TT[TT.RGBA8Format = 32856] = "RGBA8Format", TT[TT.R8Format = 33321] = "R8Format", TT[TT.RG8Format = 33323] = "RG8Format"
    }(yT || (yT = {}));
    class CT {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(TT) {
        if (CT._WorkerPoolPromise || CT._DecoderModulePromise) return;
        const kT = {
          wasmBaseUrl: xT.h.ScriptBaseUrl,
          jsDecoderModule: xT.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: xT.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: xT.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: xT.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: xT.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: xT.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: xT.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: xT.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: xT.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: xT.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        TT && "function" === typeof Worker && "undefined" !== typeof URL ? CT._WorkerPoolPromise = new Promise((cT => {
          const lT = `${IT}(${AT})()`,
            MT = URL.createObjectURL(new Blob([lT], {
              type: "application/javascript"
            }));
          cT(new fT.d(TT, (async () => await async function(TT, kT, cT) {
            return await new Promise(((lT, MT) => {
              const KT = kT => {
                  TT.removeEventListener("error", KT), TT.removeEventListener("message", OT), MT(kT)
                },
                OT = kT => {
                  "init" === kT.data.action && (TT.removeEventListener("error", KT), TT.removeEventListener("message", OT), lT(TT))
                };
              TT.addEventListener("error", KT), TT.addEventListener("message", OT), TT.postMessage({
                action: "init",
                urls: cT,
                wasmBinaries: kT
              })
            }))
          }(new Worker(MT), void 0, kT))))
        })) : "undefined" === typeof CT._KTX2DecoderModule ? CT._DecoderModulePromise = xT.h.LoadBabylonScriptAsync(kT.jsDecoderModule).then((() => (CT._KTX2DecoderModule = KTX2DECODER, CT._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, CT._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, IT(kT, CT._KTX2DecoderModule), new CT._KTX2DecoderModule.KTX2Decoder))) : (CT._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, CT._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, CT._DecoderModulePromise = Promise.resolve(new CT._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CT.DefaultNumWorkers;
        this._engine = TT;
        const cT = "object" === typeof kT && kT.workerPool || CT.WorkerPool;
        if (cT) CT._WorkerPoolPromise = Promise.resolve(cT);
        else {
          "object" === typeof kT ? CT._KTX2DecoderModule = kT?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (CT._KTX2DecoderModule = KTX2DECODER);
          const TT = "number" === typeof kT ? kT : kT.numWorkers ?? CT.DefaultNumWorkers;
          CT._Initialize(TT)
        }
      }
      async _uploadAsync(TT, kT, cT) {
        const lT = await this._decodeAsync(TT, cT);
        this._createTexture(lT, kT, cT)
      }
      async _decodeAsync(TT, kT) {
        const cT = this._engine.getCaps(),
          lT = {
            astc: !!cT.astc,
            bptc: !!cT.bptc,
            s3tc: !!cT.s3tc,
            pvrtc: !!cT.pvrtc,
            etc2: !!cT.etc2,
            etc1: !!cT.etc1
          };
        if (CT._WorkerPoolPromise) {
          const cT = await CT._WorkerPoolPromise;
          return await new Promise(((MT, KT) => {
            cT.push(((cT, OT) => {
              const yT = TT => {
                  cT.removeEventListener("error", yT), cT.removeEventListener("message", fT), KT(TT), OT()
                },
                fT = TT => {
                  "decoded" === TT.data.action && (cT.removeEventListener("error", yT), cT.removeEventListener("message", fT), TT.data.success ? MT(TT.data.decodedData) : KT({
                    message: TT.data.vI
                  }), OT())
                };
              cT.addEventListener("error", yT), cT.addEventListener("message", fT), cT.postMessage({
                action: "setDefaultDecoderOptions",
                options: CT.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const xT = new Uint8Array(TT.byteLength);
              xT.set(new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength)), cT.postMessage({
                action: "decode",
                data: xT,
                caps: lT,
                options: kT
              }, [xT.buffer])
            }))
          }))
        }
        if (CT._DecoderModulePromise) {
          const lT = await CT._DecoderModulePromise;
          return CT.DefaultDecoderOptions.isDirty && (CT._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = CT.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((MT, KT) => {
            lT.decode(TT, cT, kT).then((TT => {
              MT(TT)
            })).catch((TT => {
              KT({
                message: TT
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(TT, kT, cT) {
        if ((TT.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, kT), cT && (cT.transcodedFormat = TT.transcodedFormat, cT.isInGammaSpace = TT.isInGammaSpace, cT.hasAlpha = TT.hasAlpha, cT.transcoderName = TT.transcoderName);
        let lT = !0;
        switch (TT.transcodedFormat) {
          case 32856:
            kT.type = 0, kT.format = 5;
            break;
          case 33321:
            kT.type = 0, kT.format = 6;
            break;
          case 33323:
            kT.type = 0, kT.format = 7;
            break;
          default:
            kT.format = TT.transcodedFormat, lT = !1
        }
        if (kT._gammaSpace = TT.isInGammaSpace, kT.generateMipMaps = TT.mipmaps.length > 1, kT.width = TT.mipmaps[0].width, kT.height = TT.mipmaps[0].height, TT.errors) throw new Error("KTX2 container - could not transcode the data. " + TT.errors);
        for (let MT = 0; MT < TT.mipmaps.length; ++MT) {
          const cT = TT.mipmaps[MT];
          if (!cT || !cT.data) throw new Error("KTX2 container - could not transcode one of the image");
          lT ? (kT.width = cT.width, kT.height = cT.height, this._engine._uploadDataToTextureDirectly(kT, cT.data, 0, MT, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(kT, TT.transcodedFormat, cT.width, cT.height, cT.data, 0, MT)
        }
        kT._extension = ".ktx2", kT.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(TT) {
        if (TT.byteLength >= 12) {
          const kT = new Uint8Array(TT.buffer, TT.byteOffset, 12);
          if (171 === kT[0] && 75 === kT[1] && 84 === kT[2] && 88 === kT[3] && 32 === kT[4] && 50 === kT[5] && 48 === kT[6] && 187 === kT[7] && 13 === kT[8] && 10 === kT[9] && 26 === kT[10] && 10 === kT[11]) return !0
        }
        return !1
      }
    }

    function jT(TT) {
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
    CT.URLConfig = {
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
    }, CT.DefaultNumWorkers = CT.GetDefaultNumWorkers(), CT.DefaultDecoderOptions = new class {
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
            transcodeFormat: [OT.BC1_RGB, OT.BC3_RGBA],
            yes: {
              transcodeFormat: OT.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = TT, TT
      }
    };
    class vT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, kT, cT, lT) {
        if (Array.isArray(TT)) return;
        kT._invertVScale = !kT.invertY;
        const KT = kT.Dv(),
          OT = new MT(TT, 6),
          yT = jT(OT.glInternalFormat);
        null !== yT ? (kT.format = yT, kT._useSRGBBuffer = KT._getUseSRGBBuffer(!0, !kT.generateMipMaps), kT._gammaSpace = !0) : kT.format = OT.glInternalFormat;
        const fT = OT.numberOfMipmapLevels > 1 && kT.generateMipMaps;
        KT._unpackFlipY(!0), OT.uploadLevels(kT, kT.generateMipMaps), kT.width = OT.pixelWidth, kT.height = OT.pixelHeight, KT._setCubeMapTextureParams(kT, fT, OT.numberOfMipmapLevels - 1), kT.isReady = !0, kT.onLoadedObservable.notifyObservers(kT), kT.onLoadedObservable.clear(), lT && lT()
      }
      loadData(TT, kT, cT, KT) {
        if (MT.IsValid(TT)) {
          kT._invertVScale = !kT.invertY;
          const lT = new MT(TT, 1),
            KT = jT(lT.glInternalFormat);
          null !== KT ? (kT.format = KT, kT._useSRGBBuffer = kT.Dv()._getUseSRGBBuffer(!0, !kT.generateMipMaps), kT._gammaSpace = !0) : kT.format = lT.glInternalFormat, cT(lT.pixelWidth, lT.pixelHeight, kT.generateMipMaps, !0, (() => {
            lT.uploadLevels(kT, kT.generateMipMaps)
          }), lT.isInvalid)
        } else if (CT.IsValid(TT)) {
          new CT(kT.Dv())._uploadAsync(TT, kT, KT).then((() => {
            cT(kT.width, kT.height, kT.generateMipMaps, !0, (() => {}), !1)
          }), (TT => {
            lT.e.Warn(`Failed to load KTX2 texture data: ${TT.message}`), cT(0, 0, !1, !1, (() => {}), !0)
          }))
        } else lT.e.Error("texture missing KTX identifier"), cT(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41405: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT
    });
    class lT {
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
        for (const kT of this._workerInfos)
          if (kT.idle) return this._execute(kT, TT), !0;
        return !1
      }
      _execute(TT, kT) {
        TT.idle = !1, TT.workerPromise.then((cT => {
          kT(cT, (() => {
            const kT = this._pendingActions.shift();
            kT ? this._execute(TT, kT) : TT.idle = !0
          }))
        }))
      }
    }
    class MT extends lT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MT.DefaultOptions;
        super([]), this._maxWorkers = TT, this._createWorkerAsync = kT, this._options = cT
      }
      push(TT) {
        if (!this._executeOnIdleWorker(TT))
          if (this._workerInfos.length < this._maxWorkers) {
            const kT = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(kT), this._execute(kT, TT)
          } else this._pendingActions.push(TT)
      }
      _execute(TT, kT) {
        TT.timeoutId && (clearTimeout(TT.timeoutId), delete TT.timeoutId), super._execute(TT, ((cT, lT) => {
          kT(cT, (() => {
            lT(), TT.idle && (TT.timeoutId = setTimeout((() => {
              TT.workerPromise.then((TT => {
                TT.terminate()
              }));
              const kT = this._workerInfos.indexOf(TT); - 1 !== kT && this._workerInfos.splice(kT, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    MT.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);