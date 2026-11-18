export const id = 293;
export const ids = [293];
export const modules = {
  40543: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      _KTXTextureLoader: () => DB
    });
    var VB = dB(37651);
    class yB {
      constructor(BB, TB) {
        if (this.data = BB, this.isInvalid = !1, !yB.IsValid(BB)) return this.isInvalid = !0, void VB.b.Error("texture missing KTX identifier");
        const dB = Uint32Array.BYTES_PER_ELEMENT,
          pB = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * dB),
          lB = 67305985 === pB.getUint32(0, !0);
        return this.glType = pB.getUint32(1 * dB, lB), this.glTypeSize = pB.getUint32(2 * dB, lB), this.glFormat = pB.getUint32(3 * dB, lB), this.glInternalFormat = pB.getUint32(4 * dB, lB), this.glBaseInternalFormat = pB.getUint32(5 * dB, lB), this.pixelWidth = pB.getUint32(6 * dB, lB), this.pixelHeight = pB.getUint32(7 * dB, lB), this.pixelDepth = pB.getUint32(8 * dB, lB), this.numberOfArrayElements = pB.getUint32(9 * dB, lB), this.numberOfFaces = pB.getUint32(10 * dB, lB), this.numberOfMipmapLevels = pB.getUint32(11 * dB, lB), this.bytesOfKeyValueData = pB.getUint32(12 * dB, lB), 0 !== this.glType ? (VB.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (VB.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (VB.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== TB ? (VB.b.Error("number of faces expected" + TB + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = yB.COMPRESSED_2D))
      }
      uploadLevels(BB, TB) {
        switch (this.loadType) {
          case yB.COMPRESSED_2D:
            this._upload2DCompressedLevels(BB, TB);
          case yB.TEX_2D:
          case yB.COMPRESSED_3D:
          case yB.TEX_3D:
        }
      }
      _upload2DCompressedLevels(BB, TB) {
        let dB = yB.HEADER_LEN + this.bytesOfKeyValueData,
          VB = this.pixelWidth,
          pB = this.pixelHeight;
        const lB = TB ? this.numberOfMipmapLevels : 1;
        for (let yB = 0; yB < lB; yB++) {
          const TB = new Int32Array(this.data.buffer, this.data.byteOffset + dB, 1)[0];
          dB += 4;
          for (let lB = 0; lB < this.numberOfFaces; lB++) {
            const JB = new Uint8Array(this.data.buffer, this.data.byteOffset + dB, TB);
            BB.PD()._uploadCompressedDataToTextureDirectly(BB, BB.format, VB, pB, JB, lB, yB), dB += TB, dB += 3 - (TB + 3) % 4
          }
          VB = Math.max(1, .5 * VB), pB = Math.max(1, .5 * pB)
        }
      }
      static IsValid(BB) {
        if (BB.byteLength >= 12) {
          const TB = new Uint8Array(BB.buffer, BB.byteOffset, 12);
          if (171 === TB[0] && 75 === TB[1] && 84 === TB[2] && 88 === TB[3] && 32 === TB[4] && 49 === TB[5] && 49 === TB[6] && 187 === TB[7] && 13 === TB[8] && 10 === TB[9] && 26 === TB[10] && 10 === TB[11]) return !0
        }
        return !1
      }
    }
    yB.HEADER_LEN = 64, yB.COMPRESSED_2D = 0, yB.COMPRESSED_3D = 1, yB.TEX_2D = 2, yB.TEX_3D = 3;
    var pB, lB, JB, YB = dB(40546),
      gB = dB(38848);

    function oB(BB, TB) {
      const dB = TB?.jsDecoderModule || KTX2DECODER;
      BB && (BB.wasmBaseUrl && (dB.Transcoder.WasmBaseUrl = BB.wasmBaseUrl), BB.wasmUASTCToASTC && (dB.LiteTranscoder_UASTC_ASTC.WasmModuleURL = BB.wasmUASTCToASTC), BB.wasmUASTCToBC7 && (dB.LiteTranscoder_UASTC_BC7.WasmModuleURL = BB.wasmUASTCToBC7), BB.wasmUASTCToRGBA_UNORM && (dB.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = BB.wasmUASTCToRGBA_UNORM), BB.wasmUASTCToRGBA_SRGB && (dB.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = BB.wasmUASTCToRGBA_SRGB), BB.wasmUASTCToR8_UNORM && (dB.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = BB.wasmUASTCToR8_UNORM), BB.wasmUASTCToRG8_UNORM && (dB.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = BB.wasmUASTCToRG8_UNORM), BB.jsMSCTranscoder && (dB.MSCTranscoder.JSModuleURL = BB.jsMSCTranscoder), BB.wasmMSCTranscoder && (dB.MSCTranscoder.WasmModuleURL = BB.wasmMSCTranscoder), BB.wasmZSTDDecoder && (dB.ZSTDDecoder.WasmModuleURL = BB.wasmZSTDDecoder)), TB && (TB.wasmUASTCToASTC && (dB.LiteTranscoder_UASTC_ASTC.WasmBinary = TB.wasmUASTCToASTC), TB.wasmUASTCToBC7 && (dB.LiteTranscoder_UASTC_BC7.WasmBinary = TB.wasmUASTCToBC7), TB.wasmUASTCToRGBA_UNORM && (dB.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = TB.wasmUASTCToRGBA_UNORM), TB.wasmUASTCToRGBA_SRGB && (dB.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = TB.wasmUASTCToRGBA_SRGB), TB.wasmUASTCToR8_UNORM && (dB.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = TB.wasmUASTCToR8_UNORM), TB.wasmUASTCToRG8_UNORM && (dB.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = TB.wasmUASTCToRG8_UNORM), TB.jsMSCTranscoder && (dB.MSCTranscoder.JSModule = TB.jsMSCTranscoder), TB.wasmMSCTranscoder && (dB.MSCTranscoder.WasmBinary = TB.wasmMSCTranscoder), TB.wasmZSTDDecoder && (dB.ZSTDDecoder.WasmBinary = TB.wasmZSTDDecoder))
    }

    function kB(BB) {
      let TB;
      "undefined" === typeof BB && "undefined" !== typeof KTX2DECODER && (BB = KTX2DECODER), onmessage = dB => {
        if (dB.data) switch (dB.data.action) {
          case "init": {
            const VB = dB.data.urls;
            VB && (VB.jsDecoderModule && "undefined" === typeof BB && (importScripts(VB.jsDecoderModule), BB = KTX2DECODER), oB(VB)), dB.data.wasmBinaries && oB(void 0, {
              ...dB.data.wasmBinaries,
              jsDecoderModule: BB
            }), TB = new BB.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            BB.KTX2Decoder.DefaultDecoderOptions = dB.data.options;
            break;
          case "decode":
            TB.decode(dB.data.data, dB.data.caps, dB.data.options).then((BB => {
              const TB = [];
              for (let dB = 0; dB < BB.mipmaps.length; ++dB) {
                const VB = BB.mipmaps[dB];
                VB && VB.data && TB.push(VB.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: BB
              }, TB)
            })).catch((BB => {
              postMessage({
                action: "decoded",
                success: !1,
                Jo: BB
              })
            }))
        }
      }
    }! function(BB) {
      BB[BB.ETC1S = 0] = "ETC1S", BB[BB.UASTC4x4 = 1] = "UASTC4x4", BB[BB.RGBA32 = 2] = "RGBA32"
    }(pB || (pB = {})),
    function(BB) {
      BB[BB.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", BB[BB.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", BB[BB.BC7_RGBA = 1] = "BC7_RGBA", BB[BB.BC3_RGBA = 2] = "BC3_RGBA", BB[BB.BC1_RGB = 3] = "BC1_RGB", BB[BB.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", BB[BB.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", BB[BB.ETC2_RGBA = 6] = "ETC2_RGBA", BB[BB.ETC1_RGB = 7] = "ETC1_RGB", BB[BB.RGBA32 = 8] = "RGBA32", BB[BB.R8 = 9] = "R8", BB[BB.RG8 = 10] = "RG8"
    }(lB || (lB = {})),
    function(BB) {
      BB[BB.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", BB[BB.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", BB[BB.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", BB[BB.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", BB[BB.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", BB[BB.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", BB[BB.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", BB[BB.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", BB[BB.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", BB[BB.RGBA8Format = 32856] = "RGBA8Format", BB[BB.R8Format = 33321] = "R8Format", BB[BB.RG8Format = 33323] = "RG8Format"
    }(JB || (JB = {}));
    class LB {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(BB) {
        if (LB._WorkerPoolPromise || LB._DecoderModulePromise) return;
        const TB = {
          wasmBaseUrl: gB.h.ScriptBaseUrl,
          jsDecoderModule: gB.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: gB.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: gB.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: gB.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: gB.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: gB.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: gB.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: gB.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: gB.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: gB.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        BB && "function" === typeof Worker && "undefined" !== typeof URL ? LB._WorkerPoolPromise = new Promise((dB => {
          const VB = `${oB}(${kB})()`,
            yB = URL.createObjectURL(new Blob([VB], {
              type: "application/javascript"
            }));
          dB(new YB.c(BB, (async () => await async function(BB, TB, dB) {
            return await new Promise(((VB, yB) => {
              const pB = TB => {
                  BB.removeEventListener("error", pB), BB.removeEventListener("message", lB), yB(TB)
                },
                lB = TB => {
                  "init" === TB.data.action && (BB.removeEventListener("error", pB), BB.removeEventListener("message", lB), VB(BB))
                };
              BB.addEventListener("error", pB), BB.addEventListener("message", lB), BB.postMessage({
                action: "init",
                urls: dB,
                wasmBinaries: TB
              })
            }))
          }(new Worker(yB), void 0, TB))))
        })) : "undefined" === typeof LB._KTX2DecoderModule ? LB._DecoderModulePromise = gB.h.LoadBabylonScriptAsync(TB.jsDecoderModule).then((() => (LB._KTX2DecoderModule = KTX2DECODER, LB._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, LB._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, oB(TB, LB._KTX2DecoderModule), new LB._KTX2DecoderModule.KTX2Decoder))) : (LB._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, LB._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, LB._DecoderModulePromise = Promise.resolve(new LB._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LB.DefaultNumWorkers;
        this._engine = BB;
        const dB = "object" === typeof TB && TB.workerPool || LB.WorkerPool;
        if (dB) LB._WorkerPoolPromise = Promise.resolve(dB);
        else {
          "object" === typeof TB ? LB._KTX2DecoderModule = TB?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (LB._KTX2DecoderModule = KTX2DECODER);
          const BB = "number" === typeof TB ? TB : TB.numWorkers ?? LB.DefaultNumWorkers;
          LB._Initialize(BB)
        }
      }
      async _uploadAsync(BB, TB, dB) {
        const VB = await this._decodeAsync(BB, dB);
        this._createTexture(VB, TB, dB)
      }
      async _decodeAsync(BB, TB) {
        const dB = this._engine.getCaps(),
          VB = {
            astc: !!dB.astc,
            bptc: !!dB.bptc,
            s3tc: !!dB.s3tc,
            pvrtc: !!dB.pvrtc,
            etc2: !!dB.etc2,
            etc1: !!dB.etc1
          };
        if (LB._WorkerPoolPromise) {
          const dB = await LB._WorkerPoolPromise;
          return await new Promise(((yB, pB) => {
            dB.push(((dB, lB) => {
              const JB = BB => {
                  dB.removeEventListener("error", JB), dB.removeEventListener("message", YB), pB(BB), lB()
                },
                YB = BB => {
                  "decoded" === BB.data.action && (dB.removeEventListener("error", JB), dB.removeEventListener("message", YB), BB.data.success ? yB(BB.data.decodedData) : pB({
                    message: BB.data.Jo
                  }), lB())
                };
              dB.addEventListener("error", JB), dB.addEventListener("message", YB), dB.postMessage({
                action: "setDefaultDecoderOptions",
                options: LB.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const gB = new Uint8Array(BB.byteLength);
              gB.set(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength)), dB.postMessage({
                action: "decode",
                data: gB,
                caps: VB,
                options: TB
              }, [gB.buffer])
            }))
          }))
        }
        if (LB._DecoderModulePromise) {
          const VB = await LB._DecoderModulePromise;
          return LB.DefaultDecoderOptions.isDirty && (LB._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = LB.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((yB, pB) => {
            VB.decode(BB, dB, TB).then((BB => {
              yB(BB)
            })).catch((BB => {
              pB({
                message: BB
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(BB, TB, dB) {
        if ((BB.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, TB), dB && (dB.transcodedFormat = BB.transcodedFormat, dB.isInGammaSpace = BB.isInGammaSpace, dB.hasAlpha = BB.hasAlpha, dB.transcoderName = BB.transcoderName);
        let VB = !0;
        switch (BB.transcodedFormat) {
          case 32856:
            TB.type = 0, TB.format = 5;
            break;
          case 33321:
            TB.type = 0, TB.format = 6;
            break;
          case 33323:
            TB.type = 0, TB.format = 7;
            break;
          default:
            TB.format = BB.transcodedFormat, VB = !1
        }
        if (TB._gammaSpace = BB.isInGammaSpace, TB.generateMipMaps = BB.mipmaps.length > 1, TB.width = BB.mipmaps[0].width, TB.height = BB.mipmaps[0].height, BB.errors) throw new Error("KTX2 container - could not transcode the data. " + BB.errors);
        for (let yB = 0; yB < BB.mipmaps.length; ++yB) {
          const dB = BB.mipmaps[yB];
          if (!dB || !dB.data) throw new Error("KTX2 container - could not transcode one of the image");
          VB ? (TB.width = dB.width, TB.height = dB.height, this._engine._uploadDataToTextureDirectly(TB, dB.data, 0, yB, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(TB, BB.transcodedFormat, dB.width, dB.height, dB.data, 0, yB)
        }
        TB._extension = ".ktx2", TB.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(BB) {
        if (BB.byteLength >= 12) {
          const TB = new Uint8Array(BB.buffer, BB.byteOffset, 12);
          if (171 === TB[0] && 75 === TB[1] && 84 === TB[2] && 88 === TB[3] && 32 === TB[4] && 50 === TB[5] && 48 === TB[6] && 187 === TB[7] && 13 === TB[8] && 10 === TB[9] && 26 === TB[10] && 10 === TB[11]) return !0
        }
        return !1
      }
    }

    function OB(BB) {
      switch (BB) {
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
    LB.URLConfig = {
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
    }, LB.DefaultNumWorkers = LB.GetDefaultNumWorkers(), LB.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(BB) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== BB && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = BB, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(BB) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== BB && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = BB, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(BB) {
        this._forceRGBA !== BB && (this._forceRGBA = BB, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(BB) {
        this._forceR8 !== BB && (this._forceR8 = BB, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(BB) {
        this._forceRG8 !== BB && (this._forceRG8 = BB, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(BB) {
        this._bypassTranscoders !== BB && (this._bypassTranscoders = BB, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const BB = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (BB.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (BB.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (BB.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (BB.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (BB.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (BB.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [lB.BC1_RGB, lB.BC3_RGBA],
            yes: {
              transcodeFormat: lB.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = BB, BB
      }
    };
    class DB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, TB, dB, VB) {
        if (Array.isArray(BB)) return;
        TB._invertVScale = !TB.invertY;
        const pB = TB.PD(),
          lB = new yB(BB, 6),
          JB = OB(lB.glInternalFormat);
        null !== JB ? (TB.format = JB, TB._useSRGBBuffer = pB._getUseSRGBBuffer(!0, !TB.generateMipMaps), TB._gammaSpace = !0) : TB.format = lB.glInternalFormat;
        const YB = lB.numberOfMipmapLevels > 1 && TB.generateMipMaps;
        pB._unpackFlipY(!0), lB.uploadLevels(TB, TB.generateMipMaps), TB.width = lB.pixelWidth, TB.height = lB.pixelHeight, pB._setCubeMapTextureParams(TB, YB, lB.numberOfMipmapLevels - 1), TB.isReady = !0, TB.onLoadedObservable.notifyObservers(TB), TB.onLoadedObservable.clear(), VB && VB()
      }
      loadData(BB, TB, dB, pB) {
        if (yB.IsValid(BB)) {
          TB._invertVScale = !TB.invertY;
          const VB = new yB(BB, 1),
            pB = OB(VB.glInternalFormat);
          null !== pB ? (TB.format = pB, TB._useSRGBBuffer = TB.PD()._getUseSRGBBuffer(!0, !TB.generateMipMaps), TB._gammaSpace = !0) : TB.format = VB.glInternalFormat, dB(VB.pixelWidth, VB.pixelHeight, TB.generateMipMaps, !0, (() => {
            VB.uploadLevels(TB, TB.generateMipMaps)
          }), VB.isInvalid)
        } else if (LB.IsValid(BB)) {
          new LB(TB.PD())._uploadAsync(BB, TB, pB).then((() => {
            dB(TB.width, TB.height, TB.generateMipMaps, !0, (() => {}), !1)
          }), (BB => {
            VB.b.Warn(`Failed to load KTX2 texture data: ${BB.message}`), dB(0, 0, !1, !1, (() => {}), !0)
          }))
        } else VB.b.Error("texture missing KTX identifier"), dB(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  40546: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    class VB {
      constructor(BB) {
        this._pendingActions = new Array, this._workerInfos = BB.map((BB => ({
          workerPromise: Promise.resolve(BB),
          idle: !0
        })))
      }
      dispose() {
        for (const BB of this._workerInfos) BB.workerPromise.then((BB => {
          BB.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(BB) {
        this._executeOnIdleWorker(BB) || this._pendingActions.push(BB)
      }
      _executeOnIdleWorker(BB) {
        for (const TB of this._workerInfos)
          if (TB.idle) return this._execute(TB, BB), !0;
        return !1
      }
      _execute(BB, TB) {
        BB.idle = !1, BB.workerPromise.then((dB => {
          TB(dB, (() => {
            const TB = this._pendingActions.shift();
            TB ? this._execute(BB, TB) : BB.idle = !0
          }))
        }))
      }
    }
    class yB extends VB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yB.DefaultOptions;
        super([]), this._maxWorkers = BB, this._createWorkerAsync = TB, this._options = dB
      }
      push(BB) {
        if (!this._executeOnIdleWorker(BB))
          if (this._workerInfos.length < this._maxWorkers) {
            const TB = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(TB), this._execute(TB, BB)
          } else this._pendingActions.push(BB)
      }
      _execute(BB, TB) {
        BB.timeoutId && (clearTimeout(BB.timeoutId), delete BB.timeoutId), super._execute(BB, ((dB, VB) => {
          TB(dB, (() => {
            VB(), BB.idle && (BB.timeoutId = setTimeout((() => {
              BB.workerPromise.then((BB => {
                BB.terminate()
              }));
              const TB = this._workerInfos.indexOf(BB); - 1 !== TB && this._workerInfos.splice(TB, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    yB.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);