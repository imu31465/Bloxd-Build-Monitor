export const id = 313;
export const ids = [313];
export const modules = {
  41758: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      _KTXTextureLoader: () => ID
    });
    var pD = wD(38662);
    class sD {
      constructor(DD, zD) {
        if (this.data = DD, this.isInvalid = !1, !sD.IsValid(DD)) return this.isInvalid = !0, void pD.d.Error("texture missing KTX identifier");
        const wD = Uint32Array.BYTES_PER_ELEMENT,
          KD = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * wD),
          rD = 67305985 === KD.getUint32(0, !0);
        return this.glType = KD.getUint32(1 * wD, rD), this.glTypeSize = KD.getUint32(2 * wD, rD), this.glFormat = KD.getUint32(3 * wD, rD), this.glInternalFormat = KD.getUint32(4 * wD, rD), this.glBaseInternalFormat = KD.getUint32(5 * wD, rD), this.pixelWidth = KD.getUint32(6 * wD, rD), this.pixelHeight = KD.getUint32(7 * wD, rD), this.pixelDepth = KD.getUint32(8 * wD, rD), this.numberOfArrayElements = KD.getUint32(9 * wD, rD), this.numberOfFaces = KD.getUint32(10 * wD, rD), this.numberOfMipmapLevels = KD.getUint32(11 * wD, rD), this.bytesOfKeyValueData = KD.getUint32(12 * wD, rD), 0 !== this.glType ? (pD.d.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (pD.d.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (pD.d.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== zD ? (pD.d.Error("number of faces expected" + zD + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = sD.COMPRESSED_2D))
      }
      uploadLevels(DD, zD) {
        switch (this.loadType) {
          case sD.COMPRESSED_2D:
            this._upload2DCompressedLevels(DD, zD);
          case sD.TEX_2D:
          case sD.COMPRESSED_3D:
          case sD.TEX_3D:
        }
      }
      _upload2DCompressedLevels(DD, zD) {
        let wD = sD.HEADER_LEN + this.bytesOfKeyValueData,
          pD = this.pixelWidth,
          KD = this.pixelHeight;
        const rD = zD ? this.numberOfMipmapLevels : 1;
        for (let sD = 0; sD < rD; sD++) {
          const zD = new Int32Array(this.data.buffer, this.data.byteOffset + wD, 1)[0];
          wD += 4;
          for (let rD = 0; rD < this.numberOfFaces; rD++) {
            const LD = new Uint8Array(this.data.buffer, this.data.byteOffset + wD, zD);
            DD.iI()._uploadCompressedDataToTextureDirectly(DD, DD.format, pD, KD, LD, rD, sD), wD += zD, wD += 3 - (zD + 3) % 4
          }
          pD = Math.max(1, .5 * pD), KD = Math.max(1, .5 * KD)
        }
      }
      static IsValid(DD) {
        if (DD.byteLength >= 12) {
          const zD = new Uint8Array(DD.buffer, DD.byteOffset, 12);
          if (171 === zD[0] && 75 === zD[1] && 84 === zD[2] && 88 === zD[3] && 32 === zD[4] && 49 === zD[5] && 49 === zD[6] && 187 === zD[7] && 13 === zD[8] && 10 === zD[9] && 26 === zD[10] && 10 === zD[11]) return !0
        }
        return !1
      }
    }
    sD.HEADER_LEN = 64, sD.COMPRESSED_2D = 0, sD.COMPRESSED_3D = 1, sD.TEX_2D = 2, sD.TEX_3D = 3;
    var KD, rD, LD, cD = wD(41766),
      gD = wD(40027);

    function RD(DD, zD) {
      const wD = zD?.jsDecoderModule || KTX2DECODER;
      DD && (DD.wasmBaseUrl && (wD.Transcoder.WasmBaseUrl = DD.wasmBaseUrl), DD.wasmUASTCToASTC && (wD.LiteTranscoder_UASTC_ASTC.WasmModuleURL = DD.wasmUASTCToASTC), DD.wasmUASTCToBC7 && (wD.LiteTranscoder_UASTC_BC7.WasmModuleURL = DD.wasmUASTCToBC7), DD.wasmUASTCToRGBA_UNORM && (wD.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = DD.wasmUASTCToRGBA_UNORM), DD.wasmUASTCToRGBA_SRGB && (wD.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = DD.wasmUASTCToRGBA_SRGB), DD.wasmUASTCToR8_UNORM && (wD.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = DD.wasmUASTCToR8_UNORM), DD.wasmUASTCToRG8_UNORM && (wD.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = DD.wasmUASTCToRG8_UNORM), DD.jsMSCTranscoder && (wD.MSCTranscoder.JSModuleURL = DD.jsMSCTranscoder), DD.wasmMSCTranscoder && (wD.MSCTranscoder.WasmModuleURL = DD.wasmMSCTranscoder), DD.wasmZSTDDecoder && (wD.ZSTDDecoder.WasmModuleURL = DD.wasmZSTDDecoder)), zD && (zD.wasmUASTCToASTC && (wD.LiteTranscoder_UASTC_ASTC.WasmBinary = zD.wasmUASTCToASTC), zD.wasmUASTCToBC7 && (wD.LiteTranscoder_UASTC_BC7.WasmBinary = zD.wasmUASTCToBC7), zD.wasmUASTCToRGBA_UNORM && (wD.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = zD.wasmUASTCToRGBA_UNORM), zD.wasmUASTCToRGBA_SRGB && (wD.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = zD.wasmUASTCToRGBA_SRGB), zD.wasmUASTCToR8_UNORM && (wD.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = zD.wasmUASTCToR8_UNORM), zD.wasmUASTCToRG8_UNORM && (wD.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = zD.wasmUASTCToRG8_UNORM), zD.jsMSCTranscoder && (wD.MSCTranscoder.JSModule = zD.jsMSCTranscoder), zD.wasmMSCTranscoder && (wD.MSCTranscoder.WasmBinary = zD.wasmMSCTranscoder), zD.wasmZSTDDecoder && (wD.ZSTDDecoder.WasmBinary = zD.wasmZSTDDecoder))
    }

    function AD(DD) {
      let zD;
      "undefined" === typeof DD && "undefined" !== typeof KTX2DECODER && (DD = KTX2DECODER), onmessage = wD => {
        if (wD.data) switch (wD.data.action) {
          case "init": {
            const pD = wD.data.urls;
            pD && (pD.jsDecoderModule && "undefined" === typeof DD && (importScripts(pD.jsDecoderModule), DD = KTX2DECODER), RD(pD)), wD.data.wasmBinaries && RD(void 0, {
              ...wD.data.wasmBinaries,
              jsDecoderModule: DD
            }), zD = new DD.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            DD.KTX2Decoder.DefaultDecoderOptions = wD.data.options;
            break;
          case "decode":
            zD.decode(wD.data.data, wD.data.caps, wD.data.options).then((DD => {
              const zD = [];
              for (let wD = 0; wD < DD.mipmaps.length; ++wD) {
                const pD = DD.mipmaps[wD];
                pD && pD.data && zD.push(pD.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: DD
              }, zD)
            })).catch((DD => {
              postMessage({
                action: "decoded",
                success: !1,
                lg: DD
              })
            }))
        }
      }
    }! function(DD) {
      DD[DD.ETC1S = 0] = "ETC1S", DD[DD.UASTC4x4 = 1] = "UASTC4x4", DD[DD.RGBA32 = 2] = "RGBA32"
    }(KD || (KD = {})),
    function(DD) {
      DD[DD.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", DD[DD.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", DD[DD.BC7_RGBA = 1] = "BC7_RGBA", DD[DD.BC3_RGBA = 2] = "BC3_RGBA", DD[DD.BC1_RGB = 3] = "BC1_RGB", DD[DD.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", DD[DD.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", DD[DD.ETC2_RGBA = 6] = "ETC2_RGBA", DD[DD.ETC1_RGB = 7] = "ETC1_RGB", DD[DD.RGBA32 = 8] = "RGBA32", DD[DD.R8 = 9] = "R8", DD[DD.RG8 = 10] = "RG8"
    }(rD || (rD = {})),
    function(DD) {
      DD[DD.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", DD[DD.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", DD[DD.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", DD[DD.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", DD[DD.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", DD[DD.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", DD[DD.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", DD[DD.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", DD[DD.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", DD[DD.RGBA8Format = 32856] = "RGBA8Format", DD[DD.R8Format = 33321] = "R8Format", DD[DD.RG8Format = 33323] = "RG8Format"
    }(LD || (LD = {}));
    class UD {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(DD) {
        if (UD._WorkerPoolPromise || UD._DecoderModulePromise) return;
        const zD = {
          wasmBaseUrl: gD.h.ScriptBaseUrl,
          jsDecoderModule: gD.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: gD.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: gD.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: gD.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: gD.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: gD.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: gD.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: gD.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: gD.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: gD.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        DD && "function" === typeof Worker && "undefined" !== typeof URL ? UD._WorkerPoolPromise = new Promise((wD => {
          const pD = `${RD}(${AD})()`,
            sD = URL.createObjectURL(new Blob([pD], {
              type: "application/javascript"
            }));
          wD(new cD.d(DD, (async () => await async function(DD, zD, wD) {
            return await new Promise(((pD, sD) => {
              const KD = zD => {
                  DD.removeEventListener("error", KD), DD.removeEventListener("message", rD), sD(zD)
                },
                rD = zD => {
                  "init" === zD.data.action && (DD.removeEventListener("error", KD), DD.removeEventListener("message", rD), pD(DD))
                };
              DD.addEventListener("error", KD), DD.addEventListener("message", rD), DD.postMessage({
                action: "init",
                urls: wD,
                wasmBinaries: zD
              })
            }))
          }(new Worker(sD), void 0, zD))))
        })) : "undefined" === typeof UD._KTX2DecoderModule ? UD._DecoderModulePromise = gD.h.LoadBabylonScriptAsync(zD.jsDecoderModule).then((() => (UD._KTX2DecoderModule = KTX2DECODER, UD._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, UD._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, RD(zD, UD._KTX2DecoderModule), new UD._KTX2DecoderModule.KTX2Decoder))) : (UD._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, UD._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, UD._DecoderModulePromise = Promise.resolve(new UD._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UD.DefaultNumWorkers;
        this._engine = DD;
        const wD = "object" === typeof zD && zD.workerPool || UD.WorkerPool;
        if (wD) UD._WorkerPoolPromise = Promise.resolve(wD);
        else {
          "object" === typeof zD ? UD._KTX2DecoderModule = zD?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (UD._KTX2DecoderModule = KTX2DECODER);
          const DD = "number" === typeof zD ? zD : zD.numWorkers ?? UD.DefaultNumWorkers;
          UD._Initialize(DD)
        }
      }
      async _uploadAsync(DD, zD, wD) {
        const pD = await this._decodeAsync(DD, wD);
        this._createTexture(pD, zD, wD)
      }
      async _decodeAsync(DD, zD) {
        const wD = this._engine.getCaps(),
          pD = {
            astc: !!wD.astc,
            bptc: !!wD.bptc,
            s3tc: !!wD.s3tc,
            pvrtc: !!wD.pvrtc,
            etc2: !!wD.etc2,
            etc1: !!wD.etc1
          };
        if (UD._WorkerPoolPromise) {
          const wD = await UD._WorkerPoolPromise;
          return await new Promise(((sD, KD) => {
            wD.push(((wD, rD) => {
              const LD = DD => {
                  wD.removeEventListener("error", LD), wD.removeEventListener("message", cD), KD(DD), rD()
                },
                cD = DD => {
                  "decoded" === DD.data.action && (wD.removeEventListener("error", LD), wD.removeEventListener("message", cD), DD.data.success ? sD(DD.data.decodedData) : KD({
                    message: DD.data.lg
                  }), rD())
                };
              wD.addEventListener("error", LD), wD.addEventListener("message", cD), wD.postMessage({
                action: "setDefaultDecoderOptions",
                options: UD.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const gD = new Uint8Array(DD.byteLength);
              gD.set(new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength)), wD.postMessage({
                action: "decode",
                data: gD,
                caps: pD,
                options: zD
              }, [gD.buffer])
            }))
          }))
        }
        if (UD._DecoderModulePromise) {
          const pD = await UD._DecoderModulePromise;
          return UD.DefaultDecoderOptions.isDirty && (UD._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = UD.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((sD, KD) => {
            pD.decode(DD, wD, zD).then((DD => {
              sD(DD)
            })).catch((DD => {
              KD({
                message: DD
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(DD, zD, wD) {
        if ((DD.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, zD), wD && (wD.transcodedFormat = DD.transcodedFormat, wD.isInGammaSpace = DD.isInGammaSpace, wD.hasAlpha = DD.hasAlpha, wD.transcoderName = DD.transcoderName);
        let pD = !0;
        switch (DD.transcodedFormat) {
          case 32856:
            zD.type = 0, zD.format = 5;
            break;
          case 33321:
            zD.type = 0, zD.format = 6;
            break;
          case 33323:
            zD.type = 0, zD.format = 7;
            break;
          default:
            zD.format = DD.transcodedFormat, pD = !1
        }
        if (zD._gammaSpace = DD.isInGammaSpace, zD.generateMipMaps = DD.mipmaps.length > 1, zD.width = DD.mipmaps[0].width, zD.height = DD.mipmaps[0].height, DD.errors) throw new Error("KTX2 container - could not transcode the data. " + DD.errors);
        for (let sD = 0; sD < DD.mipmaps.length; ++sD) {
          const wD = DD.mipmaps[sD];
          if (!wD || !wD.data) throw new Error("KTX2 container - could not transcode one of the image");
          pD ? (zD.width = wD.width, zD.height = wD.height, this._engine._uploadDataToTextureDirectly(zD, wD.data, 0, sD, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(zD, DD.transcodedFormat, wD.width, wD.height, wD.data, 0, sD)
        }
        zD._extension = ".ktx2", zD.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(DD) {
        if (DD.byteLength >= 12) {
          const zD = new Uint8Array(DD.buffer, DD.byteOffset, 12);
          if (171 === zD[0] && 75 === zD[1] && 84 === zD[2] && 88 === zD[3] && 32 === zD[4] && 50 === zD[5] && 48 === zD[6] && 187 === zD[7] && 13 === zD[8] && 10 === zD[9] && 26 === zD[10] && 10 === zD[11]) return !0
        }
        return !1
      }
    }

    function fD(DD) {
      switch (DD) {
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
    UD.URLConfig = {
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
    }, UD.DefaultNumWorkers = UD.GetDefaultNumWorkers(), UD.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(DD) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== DD && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = DD, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(DD) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== DD && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = DD, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(DD) {
        this._forceRGBA !== DD && (this._forceRGBA = DD, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(DD) {
        this._forceR8 !== DD && (this._forceR8 = DD, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(DD) {
        this._forceRG8 !== DD && (this._forceRG8 = DD, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(DD) {
        this._bypassTranscoders !== DD && (this._bypassTranscoders = DD, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const DD = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (DD.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (DD.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (DD.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (DD.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (DD.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (DD.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [rD.BC1_RGB, rD.BC3_RGBA],
            yes: {
              transcodeFormat: rD.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = DD, DD
      }
    };
    class ID {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(DD, zD, wD, pD) {
        if (Array.isArray(DD)) return;
        zD._invertVScale = !zD.invertY;
        const KD = zD.iI(),
          rD = new sD(DD, 6),
          LD = fD(rD.glInternalFormat);
        null !== LD ? (zD.format = LD, zD._useSRGBBuffer = KD._getUseSRGBBuffer(!0, !zD.generateMipMaps), zD._gammaSpace = !0) : zD.format = rD.glInternalFormat;
        const cD = rD.numberOfMipmapLevels > 1 && zD.generateMipMaps;
        KD._unpackFlipY(!0), rD.uploadLevels(zD, zD.generateMipMaps), zD.width = rD.pixelWidth, zD.height = rD.pixelHeight, KD._setCubeMapTextureParams(zD, cD, rD.numberOfMipmapLevels - 1), zD.isReady = !0, zD.onLoadedObservable.notifyObservers(zD), zD.onLoadedObservable.clear(), pD && pD()
      }
      loadData(DD, zD, wD, KD) {
        if (sD.IsValid(DD)) {
          zD._invertVScale = !zD.invertY;
          const pD = new sD(DD, 1),
            KD = fD(pD.glInternalFormat);
          null !== KD ? (zD.format = KD, zD._useSRGBBuffer = zD.iI()._getUseSRGBBuffer(!0, !zD.generateMipMaps), zD._gammaSpace = !0) : zD.format = pD.glInternalFormat, wD(pD.pixelWidth, pD.pixelHeight, zD.generateMipMaps, !0, (() => {
            pD.uploadLevels(zD, zD.generateMipMaps)
          }), pD.isInvalid)
        } else if (UD.IsValid(DD)) {
          new UD(zD.iI())._uploadAsync(DD, zD, KD).then((() => {
            wD(zD.width, zD.height, zD.generateMipMaps, !0, (() => {}), !1)
          }), (DD => {
            pD.d.Warn(`Failed to load KTX2 texture data: ${DD.message}`), wD(0, 0, !1, !1, (() => {}), !0)
          }))
        } else pD.d.Error("texture missing KTX identifier"), wD(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41766: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD
    });
    class pD {
      constructor(DD) {
        this._pendingActions = new Array, this._workerInfos = DD.map((DD => ({
          workerPromise: Promise.resolve(DD),
          idle: !0
        })))
      }
      dispose() {
        for (const DD of this._workerInfos) DD.workerPromise.then((DD => {
          DD.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(DD) {
        this._executeOnIdleWorker(DD) || this._pendingActions.push(DD)
      }
      _executeOnIdleWorker(DD) {
        for (const zD of this._workerInfos)
          if (zD.idle) return this._execute(zD, DD), !0;
        return !1
      }
      _execute(DD, zD) {
        DD.idle = !1, DD.workerPromise.then((wD => {
          zD(wD, (() => {
            const zD = this._pendingActions.shift();
            zD ? this._execute(DD, zD) : DD.idle = !0
          }))
        }))
      }
    }
    class sD extends pD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sD.DefaultOptions;
        super([]), this._maxWorkers = DD, this._createWorkerAsync = zD, this._options = wD
      }
      push(DD) {
        if (!this._executeOnIdleWorker(DD))
          if (this._workerInfos.length < this._maxWorkers) {
            const zD = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(zD), this._execute(zD, DD)
          } else this._pendingActions.push(DD)
      }
      _execute(DD, zD) {
        DD.timeoutId && (clearTimeout(DD.timeoutId), delete DD.timeoutId), super._execute(DD, ((wD, pD) => {
          zD(wD, (() => {
            pD(), DD.idle && (DD.timeoutId = setTimeout((() => {
              DD.workerPromise.then((DD => {
                DD.terminate()
              }));
              const zD = this._workerInfos.indexOf(DD); - 1 !== zD && this._workerInfos.splice(zD, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    sD.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);