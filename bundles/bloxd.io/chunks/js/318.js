export const id = 318;
export const ids = [318];
export const modules = {
  41929: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      _KTXTextureLoader: () => JB
    });
    var QB = zB(38783);
    class nB {
      constructor(BB, jB) {
        if (this.data = BB, this.isInvalid = !1, !nB.IsValid(BB)) return this.isInvalid = !0, void QB.c.Error("texture missing KTX identifier");
        const zB = Uint32Array.BYTES_PER_ELEMENT,
          dB = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * zB),
          IB = 67305985 === dB.getUint32(0, !0);
        return this.glType = dB.getUint32(1 * zB, IB), this.glTypeSize = dB.getUint32(2 * zB, IB), this.glFormat = dB.getUint32(3 * zB, IB), this.glInternalFormat = dB.getUint32(4 * zB, IB), this.glBaseInternalFormat = dB.getUint32(5 * zB, IB), this.pixelWidth = dB.getUint32(6 * zB, IB), this.pixelHeight = dB.getUint32(7 * zB, IB), this.pixelDepth = dB.getUint32(8 * zB, IB), this.numberOfArrayElements = dB.getUint32(9 * zB, IB), this.numberOfFaces = dB.getUint32(10 * zB, IB), this.numberOfMipmapLevels = dB.getUint32(11 * zB, IB), this.bytesOfKeyValueData = dB.getUint32(12 * zB, IB), 0 !== this.glType ? (QB.c.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (QB.c.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (QB.c.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== jB ? (QB.c.Error("number of faces expected" + jB + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = nB.COMPRESSED_2D))
      }
      uploadLevels(BB, jB) {
        switch (this.loadType) {
          case nB.COMPRESSED_2D:
            this._upload2DCompressedLevels(BB, jB);
          case nB.TEX_2D:
          case nB.COMPRESSED_3D:
          case nB.TEX_3D:
        }
      }
      _upload2DCompressedLevels(BB, jB) {
        let zB = nB.HEADER_LEN + this.bytesOfKeyValueData,
          QB = this.pixelWidth,
          dB = this.pixelHeight;
        const IB = jB ? this.numberOfMipmapLevels : 1;
        for (let nB = 0; nB < IB; nB++) {
          const jB = new Int32Array(this.data.buffer, this.data.byteOffset + zB, 1)[0];
          zB += 4;
          for (let IB = 0; IB < this.numberOfFaces; IB++) {
            const NB = new Uint8Array(this.data.buffer, this.data.byteOffset + zB, jB);
            BB.wJ()._uploadCompressedDataToTextureDirectly(BB, BB.format, QB, dB, NB, IB, nB), zB += jB, zB += 3 - (jB + 3) % 4
          }
          QB = Math.max(1, .5 * QB), dB = Math.max(1, .5 * dB)
        }
      }
      static IsValid(BB) {
        if (BB.byteLength >= 12) {
          const jB = new Uint8Array(BB.buffer, BB.byteOffset, 12);
          if (171 === jB[0] && 75 === jB[1] && 84 === jB[2] && 88 === jB[3] && 32 === jB[4] && 49 === jB[5] && 49 === jB[6] && 187 === jB[7] && 13 === jB[8] && 10 === jB[9] && 26 === jB[10] && 10 === jB[11]) return !0
        }
        return !1
      }
    }
    nB.HEADER_LEN = 64, nB.COMPRESSED_2D = 0, nB.COMPRESSED_3D = 1, nB.TEX_2D = 2, nB.TEX_3D = 3;
    var dB, IB, NB, uB = zB(41934),
      UB = zB(40164);

    function aB(BB, jB) {
      const zB = jB?.jsDecoderModule || KTX2DECODER;
      BB && (BB.wasmBaseUrl && (zB.Transcoder.WasmBaseUrl = BB.wasmBaseUrl), BB.wasmUASTCToASTC && (zB.LiteTranscoder_UASTC_ASTC.WasmModuleURL = BB.wasmUASTCToASTC), BB.wasmUASTCToBC7 && (zB.LiteTranscoder_UASTC_BC7.WasmModuleURL = BB.wasmUASTCToBC7), BB.wasmUASTCToRGBA_UNORM && (zB.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = BB.wasmUASTCToRGBA_UNORM), BB.wasmUASTCToRGBA_SRGB && (zB.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = BB.wasmUASTCToRGBA_SRGB), BB.wasmUASTCToR8_UNORM && (zB.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = BB.wasmUASTCToR8_UNORM), BB.wasmUASTCToRG8_UNORM && (zB.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = BB.wasmUASTCToRG8_UNORM), BB.jsMSCTranscoder && (zB.MSCTranscoder.JSModuleURL = BB.jsMSCTranscoder), BB.wasmMSCTranscoder && (zB.MSCTranscoder.WasmModuleURL = BB.wasmMSCTranscoder), BB.wasmZSTDDecoder && (zB.ZSTDDecoder.WasmModuleURL = BB.wasmZSTDDecoder)), jB && (jB.wasmUASTCToASTC && (zB.LiteTranscoder_UASTC_ASTC.WasmBinary = jB.wasmUASTCToASTC), jB.wasmUASTCToBC7 && (zB.LiteTranscoder_UASTC_BC7.WasmBinary = jB.wasmUASTCToBC7), jB.wasmUASTCToRGBA_UNORM && (zB.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = jB.wasmUASTCToRGBA_UNORM), jB.wasmUASTCToRGBA_SRGB && (zB.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = jB.wasmUASTCToRGBA_SRGB), jB.wasmUASTCToR8_UNORM && (zB.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = jB.wasmUASTCToR8_UNORM), jB.wasmUASTCToRG8_UNORM && (zB.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = jB.wasmUASTCToRG8_UNORM), jB.jsMSCTranscoder && (zB.MSCTranscoder.JSModule = jB.jsMSCTranscoder), jB.wasmMSCTranscoder && (zB.MSCTranscoder.WasmBinary = jB.wasmMSCTranscoder), jB.wasmZSTDDecoder && (zB.ZSTDDecoder.WasmBinary = jB.wasmZSTDDecoder))
    }

    function pB(BB) {
      let jB;
      "undefined" === typeof BB && "undefined" !== typeof KTX2DECODER && (BB = KTX2DECODER), onmessage = zB => {
        if (zB.data) switch (zB.data.action) {
          case "init": {
            const QB = zB.data.urls;
            QB && (QB.jsDecoderModule && "undefined" === typeof BB && (importScripts(QB.jsDecoderModule), BB = KTX2DECODER), aB(QB)), zB.data.wasmBinaries && aB(void 0, {
              ...zB.data.wasmBinaries,
              jsDecoderModule: BB
            }), jB = new BB.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            BB.KTX2Decoder.DefaultDecoderOptions = zB.data.options;
            break;
          case "decode":
            jB.decode(zB.data.data, zB.data.caps, zB.data.options).then((BB => {
              const jB = [];
              for (let zB = 0; zB < BB.mipmaps.length; ++zB) {
                const QB = BB.mipmaps[zB];
                QB && QB.data && jB.push(QB.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: BB
              }, jB)
            })).catch((BB => {
              postMessage({
                action: "decoded",
                success: !1,
                ha: BB
              })
            }))
        }
      }
    }! function(BB) {
      BB[BB.ETC1S = 0] = "ETC1S", BB[BB.UASTC4x4 = 1] = "UASTC4x4", BB[BB.RGBA32 = 2] = "RGBA32"
    }(dB || (dB = {})),
    function(BB) {
      BB[BB.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", BB[BB.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", BB[BB.BC7_RGBA = 1] = "BC7_RGBA", BB[BB.BC3_RGBA = 2] = "BC3_RGBA", BB[BB.BC1_RGB = 3] = "BC1_RGB", BB[BB.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", BB[BB.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", BB[BB.ETC2_RGBA = 6] = "ETC2_RGBA", BB[BB.ETC1_RGB = 7] = "ETC1_RGB", BB[BB.RGBA32 = 8] = "RGBA32", BB[BB.R8 = 9] = "R8", BB[BB.RG8 = 10] = "RG8"
    }(IB || (IB = {})),
    function(BB) {
      BB[BB.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", BB[BB.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", BB[BB.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", BB[BB.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", BB[BB.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", BB[BB.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", BB[BB.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", BB[BB.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", BB[BB.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", BB[BB.RGBA8Format = 32856] = "RGBA8Format", BB[BB.R8Format = 33321] = "R8Format", BB[BB.RG8Format = 33323] = "RG8Format"
    }(NB || (NB = {}));
    class rB {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(BB) {
        if (rB._WorkerPoolPromise || rB._DecoderModulePromise) return;
        const jB = {
          wasmBaseUrl: UB.i.ScriptBaseUrl,
          jsDecoderModule: UB.i.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: UB.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: UB.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: UB.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: UB.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: UB.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: UB.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: UB.i.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: UB.i.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: UB.i.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        BB && "function" === typeof Worker && "undefined" !== typeof URL ? rB._WorkerPoolPromise = new Promise((zB => {
          const QB = `${aB}(${pB})()`,
            nB = URL.createObjectURL(new Blob([QB], {
              type: "application/javascript"
            }));
          zB(new uB.c(BB, (async () => await async function(BB, jB, zB) {
            return await new Promise(((QB, nB) => {
              const dB = jB => {
                  BB.removeEventListener("error", dB), BB.removeEventListener("message", IB), nB(jB)
                },
                IB = jB => {
                  "init" === jB.data.action && (BB.removeEventListener("error", dB), BB.removeEventListener("message", IB), QB(BB))
                };
              BB.addEventListener("error", dB), BB.addEventListener("message", IB), BB.postMessage({
                action: "init",
                urls: zB,
                wasmBinaries: jB
              })
            }))
          }(new Worker(nB), void 0, jB))))
        })) : "undefined" === typeof rB._KTX2DecoderModule ? rB._DecoderModulePromise = UB.i.LoadBabylonScriptAsync(jB.jsDecoderModule).then((() => (rB._KTX2DecoderModule = KTX2DECODER, rB._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, rB._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, aB(jB, rB._KTX2DecoderModule), new rB._KTX2DecoderModule.KTX2Decoder))) : (rB._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, rB._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, rB._DecoderModulePromise = Promise.resolve(new rB._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rB.DefaultNumWorkers;
        this._engine = BB;
        const zB = "object" === typeof jB && jB.workerPool || rB.WorkerPool;
        if (zB) rB._WorkerPoolPromise = Promise.resolve(zB);
        else {
          "object" === typeof jB ? rB._KTX2DecoderModule = jB?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (rB._KTX2DecoderModule = KTX2DECODER);
          const BB = "number" === typeof jB ? jB : jB.numWorkers ?? rB.DefaultNumWorkers;
          rB._Initialize(BB)
        }
      }
      async _uploadAsync(BB, jB, zB) {
        const QB = await this._decodeAsync(BB, zB);
        this._createTexture(QB, jB, zB)
      }
      async _decodeAsync(BB, jB) {
        const zB = this._engine.getCaps(),
          QB = {
            astc: !!zB.astc,
            bptc: !!zB.bptc,
            s3tc: !!zB.s3tc,
            pvrtc: !!zB.pvrtc,
            etc2: !!zB.etc2,
            etc1: !!zB.etc1
          };
        if (rB._WorkerPoolPromise) {
          const zB = await rB._WorkerPoolPromise;
          return await new Promise(((nB, dB) => {
            zB.push(((zB, IB) => {
              const NB = BB => {
                  zB.removeEventListener("error", NB), zB.removeEventListener("message", uB), dB(BB), IB()
                },
                uB = BB => {
                  "decoded" === BB.data.action && (zB.removeEventListener("error", NB), zB.removeEventListener("message", uB), BB.data.success ? nB(BB.data.decodedData) : dB({
                    message: BB.data.ha
                  }), IB())
                };
              zB.addEventListener("error", NB), zB.addEventListener("message", uB), zB.postMessage({
                action: "setDefaultDecoderOptions",
                options: rB.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const UB = new Uint8Array(BB.byteLength);
              UB.set(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength)), zB.postMessage({
                action: "decode",
                data: UB,
                caps: QB,
                options: jB
              }, [UB.buffer])
            }))
          }))
        }
        if (rB._DecoderModulePromise) {
          const QB = await rB._DecoderModulePromise;
          return rB.DefaultDecoderOptions.isDirty && (rB._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = rB.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((nB, dB) => {
            QB.decode(BB, zB, jB).then((BB => {
              nB(BB)
            })).catch((BB => {
              dB({
                message: BB
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(BB, jB, zB) {
        if ((BB.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, jB), zB && (zB.transcodedFormat = BB.transcodedFormat, zB.isInGammaSpace = BB.isInGammaSpace, zB.hasAlpha = BB.hasAlpha, zB.transcoderName = BB.transcoderName);
        let QB = !0;
        switch (BB.transcodedFormat) {
          case 32856:
            jB.type = 0, jB.format = 5;
            break;
          case 33321:
            jB.type = 0, jB.format = 6;
            break;
          case 33323:
            jB.type = 0, jB.format = 7;
            break;
          default:
            jB.format = BB.transcodedFormat, QB = !1
        }
        if (jB._gammaSpace = BB.isInGammaSpace, jB.generateMipMaps = BB.mipmaps.length > 1, jB.width = BB.mipmaps[0].width, jB.height = BB.mipmaps[0].height, BB.errors) throw new Error("KTX2 container - could not transcode the data. " + BB.errors);
        for (let nB = 0; nB < BB.mipmaps.length; ++nB) {
          const zB = BB.mipmaps[nB];
          if (!zB || !zB.data) throw new Error("KTX2 container - could not transcode one of the image");
          QB ? (jB.width = zB.width, jB.height = zB.height, this._engine._uploadDataToTextureDirectly(jB, zB.data, 0, nB, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(jB, BB.transcodedFormat, zB.width, zB.height, zB.data, 0, nB)
        }
        jB._extension = ".ktx2", jB.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(BB) {
        if (BB.byteLength >= 12) {
          const jB = new Uint8Array(BB.buffer, BB.byteOffset, 12);
          if (171 === jB[0] && 75 === jB[1] && 84 === jB[2] && 88 === jB[3] && 32 === jB[4] && 50 === jB[5] && 48 === jB[6] && 187 === jB[7] && 13 === jB[8] && 10 === jB[9] && 26 === jB[10] && 10 === jB[11]) return !0
        }
        return !1
      }
    }

    function sB(BB) {
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
    rB.URLConfig = {
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
    }, rB.DefaultNumWorkers = rB.GetDefaultNumWorkers(), rB.DefaultDecoderOptions = new class {
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
            transcodeFormat: [IB.BC1_RGB, IB.BC3_RGBA],
            yes: {
              transcodeFormat: IB.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = BB, BB
      }
    };
    class JB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, jB, zB, QB) {
        if (Array.isArray(BB)) return;
        jB._invertVScale = !jB.invertY;
        const dB = jB.wJ(),
          IB = new nB(BB, 6),
          NB = sB(IB.glInternalFormat);
        null !== NB ? (jB.format = NB, jB._useSRGBBuffer = dB._getUseSRGBBuffer(!0, !jB.generateMipMaps), jB._gammaSpace = !0) : jB.format = IB.glInternalFormat;
        const uB = IB.numberOfMipmapLevels > 1 && jB.generateMipMaps;
        dB._unpackFlipY(!0), IB.uploadLevels(jB, jB.generateMipMaps), jB.width = IB.pixelWidth, jB.height = IB.pixelHeight, dB._setCubeMapTextureParams(jB, uB, IB.numberOfMipmapLevels - 1), jB.isReady = !0, jB.onLoadedObservable.notifyObservers(jB), jB.onLoadedObservable.clear(), QB && QB()
      }
      loadData(BB, jB, zB, dB) {
        if (nB.IsValid(BB)) {
          jB._invertVScale = !jB.invertY;
          const QB = new nB(BB, 1),
            dB = sB(QB.glInternalFormat);
          null !== dB ? (jB.format = dB, jB._useSRGBBuffer = jB.wJ()._getUseSRGBBuffer(!0, !jB.generateMipMaps), jB._gammaSpace = !0) : jB.format = QB.glInternalFormat, zB(QB.pixelWidth, QB.pixelHeight, jB.generateMipMaps, !0, (() => {
            QB.uploadLevels(jB, jB.generateMipMaps)
          }), QB.isInvalid)
        } else if (rB.IsValid(BB)) {
          new rB(jB.wJ())._uploadAsync(BB, jB, dB).then((() => {
            zB(jB.width, jB.height, jB.generateMipMaps, !0, (() => {}), !1)
          }), (BB => {
            QB.c.Warn(`Failed to load KTX2 texture data: ${BB.message}`), zB(0, 0, !1, !1, (() => {}), !0)
          }))
        } else QB.c.Error("texture missing KTX identifier"), zB(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41934: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    class QB {
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
        for (const jB of this._workerInfos)
          if (jB.idle) return this._execute(jB, BB), !0;
        return !1
      }
      _execute(BB, jB) {
        BB.idle = !1, BB.workerPromise.then((zB => {
          jB(zB, (() => {
            const jB = this._pendingActions.shift();
            jB ? this._execute(BB, jB) : BB.idle = !0
          }))
        }))
      }
    }
    class nB extends QB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nB.DefaultOptions;
        super([]), this._maxWorkers = BB, this._createWorkerAsync = jB, this._options = zB
      }
      push(BB) {
        if (!this._executeOnIdleWorker(BB))
          if (this._workerInfos.length < this._maxWorkers) {
            const jB = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(jB), this._execute(jB, BB)
          } else this._pendingActions.push(BB)
      }
      _execute(BB, jB) {
        BB.timeoutId && (clearTimeout(BB.timeoutId), delete BB.timeoutId), super._execute(BB, ((zB, QB) => {
          jB(zB, (() => {
            QB(), BB.idle && (BB.timeoutId = setTimeout((() => {
              BB.workerPromise.then((BB => {
                BB.terminate()
              }));
              const jB = this._workerInfos.indexOf(BB); - 1 !== jB && this._workerInfos.splice(jB, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    nB.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);