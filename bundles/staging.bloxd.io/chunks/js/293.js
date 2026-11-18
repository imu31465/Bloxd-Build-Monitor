export const id = 293;
export const ids = [293];
export const modules = {
  40551: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      _KTXTextureLoader: () => nJ
    });
    var FJ = ZJ(37660);
    class UJ {
      constructor(JJ, cJ) {
        if (this.data = JJ, this.isInvalid = !1, !UJ.IsValid(JJ)) return this.isInvalid = !0, void FJ.c.Error("texture missing KTX identifier");
        const ZJ = Uint32Array.BYTES_PER_ELEMENT,
          eJ = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ZJ),
          XJ = 67305985 === eJ.getUint32(0, !0);
        return this.glType = eJ.getUint32(1 * ZJ, XJ), this.glTypeSize = eJ.getUint32(2 * ZJ, XJ), this.glFormat = eJ.getUint32(3 * ZJ, XJ), this.glInternalFormat = eJ.getUint32(4 * ZJ, XJ), this.glBaseInternalFormat = eJ.getUint32(5 * ZJ, XJ), this.pixelWidth = eJ.getUint32(6 * ZJ, XJ), this.pixelHeight = eJ.getUint32(7 * ZJ, XJ), this.pixelDepth = eJ.getUint32(8 * ZJ, XJ), this.numberOfArrayElements = eJ.getUint32(9 * ZJ, XJ), this.numberOfFaces = eJ.getUint32(10 * ZJ, XJ), this.numberOfMipmapLevels = eJ.getUint32(11 * ZJ, XJ), this.bytesOfKeyValueData = eJ.getUint32(12 * ZJ, XJ), 0 !== this.glType ? (FJ.c.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (FJ.c.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (FJ.c.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== cJ ? (FJ.c.Error("number of faces expected" + cJ + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = UJ.COMPRESSED_2D))
      }
      uploadLevels(JJ, cJ) {
        switch (this.loadType) {
          case UJ.COMPRESSED_2D:
            this._upload2DCompressedLevels(JJ, cJ);
          case UJ.TEX_2D:
          case UJ.COMPRESSED_3D:
          case UJ.TEX_3D:
        }
      }
      _upload2DCompressedLevels(JJ, cJ) {
        let ZJ = UJ.HEADER_LEN + this.bytesOfKeyValueData,
          FJ = this.pixelWidth,
          eJ = this.pixelHeight;
        const XJ = cJ ? this.numberOfMipmapLevels : 1;
        for (let UJ = 0; UJ < XJ; UJ++) {
          const cJ = new Int32Array(this.data.buffer, this.data.byteOffset + ZJ, 1)[0];
          ZJ += 4;
          for (let XJ = 0; XJ < this.numberOfFaces; XJ++) {
            const AJ = new Uint8Array(this.data.buffer, this.data.byteOffset + ZJ, cJ);
            JJ.gn()._uploadCompressedDataToTextureDirectly(JJ, JJ.format, FJ, eJ, AJ, XJ, UJ), ZJ += cJ, ZJ += 3 - (cJ + 3) % 4
          }
          FJ = Math.max(1, .5 * FJ), eJ = Math.max(1, .5 * eJ)
        }
      }
      static IsValid(JJ) {
        if (JJ.byteLength >= 12) {
          const cJ = new Uint8Array(JJ.buffer, JJ.byteOffset, 12);
          if (171 === cJ[0] && 75 === cJ[1] && 84 === cJ[2] && 88 === cJ[3] && 32 === cJ[4] && 49 === cJ[5] && 49 === cJ[6] && 187 === cJ[7] && 13 === cJ[8] && 10 === cJ[9] && 26 === cJ[10] && 10 === cJ[11]) return !0
        }
        return !1
      }
    }
    UJ.HEADER_LEN = 64, UJ.COMPRESSED_2D = 0, UJ.COMPRESSED_3D = 1, UJ.TEX_2D = 2, UJ.TEX_3D = 3;
    var eJ, XJ, AJ, qJ = ZJ(40556),
      jJ = ZJ(38879);

    function YJ(JJ, cJ) {
      const ZJ = cJ?.jsDecoderModule || KTX2DECODER;
      JJ && (JJ.wasmBaseUrl && (ZJ.Transcoder.WasmBaseUrl = JJ.wasmBaseUrl), JJ.wasmUASTCToASTC && (ZJ.LiteTranscoder_UASTC_ASTC.WasmModuleURL = JJ.wasmUASTCToASTC), JJ.wasmUASTCToBC7 && (ZJ.LiteTranscoder_UASTC_BC7.WasmModuleURL = JJ.wasmUASTCToBC7), JJ.wasmUASTCToRGBA_UNORM && (ZJ.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = JJ.wasmUASTCToRGBA_UNORM), JJ.wasmUASTCToRGBA_SRGB && (ZJ.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = JJ.wasmUASTCToRGBA_SRGB), JJ.wasmUASTCToR8_UNORM && (ZJ.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = JJ.wasmUASTCToR8_UNORM), JJ.wasmUASTCToRG8_UNORM && (ZJ.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = JJ.wasmUASTCToRG8_UNORM), JJ.jsMSCTranscoder && (ZJ.MSCTranscoder.JSModuleURL = JJ.jsMSCTranscoder), JJ.wasmMSCTranscoder && (ZJ.MSCTranscoder.WasmModuleURL = JJ.wasmMSCTranscoder), JJ.wasmZSTDDecoder && (ZJ.ZSTDDecoder.WasmModuleURL = JJ.wasmZSTDDecoder)), cJ && (cJ.wasmUASTCToASTC && (ZJ.LiteTranscoder_UASTC_ASTC.WasmBinary = cJ.wasmUASTCToASTC), cJ.wasmUASTCToBC7 && (ZJ.LiteTranscoder_UASTC_BC7.WasmBinary = cJ.wasmUASTCToBC7), cJ.wasmUASTCToRGBA_UNORM && (ZJ.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = cJ.wasmUASTCToRGBA_UNORM), cJ.wasmUASTCToRGBA_SRGB && (ZJ.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = cJ.wasmUASTCToRGBA_SRGB), cJ.wasmUASTCToR8_UNORM && (ZJ.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = cJ.wasmUASTCToR8_UNORM), cJ.wasmUASTCToRG8_UNORM && (ZJ.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = cJ.wasmUASTCToRG8_UNORM), cJ.jsMSCTranscoder && (ZJ.MSCTranscoder.JSModule = cJ.jsMSCTranscoder), cJ.wasmMSCTranscoder && (ZJ.MSCTranscoder.WasmBinary = cJ.wasmMSCTranscoder), cJ.wasmZSTDDecoder && (ZJ.ZSTDDecoder.WasmBinary = cJ.wasmZSTDDecoder))
    }

    function hJ(JJ) {
      let cJ;
      "undefined" === typeof JJ && "undefined" !== typeof KTX2DECODER && (JJ = KTX2DECODER), onmessage = ZJ => {
        if (ZJ.data) switch (ZJ.data.action) {
          case "init": {
            const FJ = ZJ.data.urls;
            FJ && (FJ.jsDecoderModule && "undefined" === typeof JJ && (importScripts(FJ.jsDecoderModule), JJ = KTX2DECODER), YJ(FJ)), ZJ.data.wasmBinaries && YJ(void 0, {
              ...ZJ.data.wasmBinaries,
              jsDecoderModule: JJ
            }), cJ = new JJ.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            JJ.KTX2Decoder.DefaultDecoderOptions = ZJ.data.options;
            break;
          case "decode":
            cJ.decode(ZJ.data.data, ZJ.data.caps, ZJ.data.options).then((JJ => {
              const cJ = [];
              for (let ZJ = 0; ZJ < JJ.mipmaps.length; ++ZJ) {
                const FJ = JJ.mipmaps[ZJ];
                FJ && FJ.data && cJ.push(FJ.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: JJ
              }, cJ)
            })).catch((JJ => {
              postMessage({
                action: "decoded",
                success: !1,
                JY: JJ
              })
            }))
        }
      }
    }! function(JJ) {
      JJ[JJ.ETC1S = 0] = "ETC1S", JJ[JJ.UASTC4x4 = 1] = "UASTC4x4", JJ[JJ.RGBA32 = 2] = "RGBA32"
    }(eJ || (eJ = {})),
    function(JJ) {
      JJ[JJ.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", JJ[JJ.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", JJ[JJ.BC7_RGBA = 1] = "BC7_RGBA", JJ[JJ.BC3_RGBA = 2] = "BC3_RGBA", JJ[JJ.BC1_RGB = 3] = "BC1_RGB", JJ[JJ.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", JJ[JJ.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", JJ[JJ.ETC2_RGBA = 6] = "ETC2_RGBA", JJ[JJ.ETC1_RGB = 7] = "ETC1_RGB", JJ[JJ.RGBA32 = 8] = "RGBA32", JJ[JJ.R8 = 9] = "R8", JJ[JJ.RG8 = 10] = "RG8"
    }(XJ || (XJ = {})),
    function(JJ) {
      JJ[JJ.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", JJ[JJ.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", JJ[JJ.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", JJ[JJ.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", JJ[JJ.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", JJ[JJ.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", JJ[JJ.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", JJ[JJ.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", JJ[JJ.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", JJ[JJ.RGBA8Format = 32856] = "RGBA8Format", JJ[JJ.R8Format = 33321] = "R8Format", JJ[JJ.RG8Format = 33323] = "RG8Format"
    }(AJ || (AJ = {}));
    class DJ {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(JJ) {
        if (DJ._WorkerPoolPromise || DJ._DecoderModulePromise) return;
        const cJ = {
          wasmBaseUrl: jJ.j.ScriptBaseUrl,
          jsDecoderModule: jJ.j.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: jJ.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: jJ.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: jJ.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: jJ.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: jJ.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: jJ.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: jJ.j.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: jJ.j.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: jJ.j.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        JJ && "function" === typeof Worker && "undefined" !== typeof URL ? DJ._WorkerPoolPromise = new Promise((ZJ => {
          const FJ = `${YJ}(${hJ})()`,
            UJ = URL.createObjectURL(new Blob([FJ], {
              type: "application/javascript"
            }));
          ZJ(new qJ.b(JJ, (async () => await async function(JJ, cJ, ZJ) {
            return await new Promise(((FJ, UJ) => {
              const eJ = cJ => {
                  JJ.removeEventListener("error", eJ), JJ.removeEventListener("message", XJ), UJ(cJ)
                },
                XJ = cJ => {
                  "init" === cJ.data.action && (JJ.removeEventListener("error", eJ), JJ.removeEventListener("message", XJ), FJ(JJ))
                };
              JJ.addEventListener("error", eJ), JJ.addEventListener("message", XJ), JJ.postMessage({
                action: "init",
                urls: ZJ,
                wasmBinaries: cJ
              })
            }))
          }(new Worker(UJ), void 0, cJ))))
        })) : "undefined" === typeof DJ._KTX2DecoderModule ? DJ._DecoderModulePromise = jJ.j.LoadBabylonScriptAsync(cJ.jsDecoderModule).then((() => (DJ._KTX2DecoderModule = KTX2DECODER, DJ._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, DJ._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, YJ(cJ, DJ._KTX2DecoderModule), new DJ._KTX2DecoderModule.KTX2Decoder))) : (DJ._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, DJ._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, DJ._DecoderModulePromise = Promise.resolve(new DJ._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DJ.DefaultNumWorkers;
        this._engine = JJ;
        const ZJ = "object" === typeof cJ && cJ.workerPool || DJ.WorkerPool;
        if (ZJ) DJ._WorkerPoolPromise = Promise.resolve(ZJ);
        else {
          "object" === typeof cJ ? DJ._KTX2DecoderModule = cJ?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (DJ._KTX2DecoderModule = KTX2DECODER);
          const JJ = "number" === typeof cJ ? cJ : cJ.numWorkers ?? DJ.DefaultNumWorkers;
          DJ._Initialize(JJ)
        }
      }
      async _uploadAsync(JJ, cJ, ZJ) {
        const FJ = await this._decodeAsync(JJ, ZJ);
        this._createTexture(FJ, cJ, ZJ)
      }
      async _decodeAsync(JJ, cJ) {
        const ZJ = this._engine.getCaps(),
          FJ = {
            astc: !!ZJ.astc,
            bptc: !!ZJ.bptc,
            s3tc: !!ZJ.s3tc,
            pvrtc: !!ZJ.pvrtc,
            etc2: !!ZJ.etc2,
            etc1: !!ZJ.etc1
          };
        if (DJ._WorkerPoolPromise) {
          const ZJ = await DJ._WorkerPoolPromise;
          return await new Promise(((UJ, eJ) => {
            ZJ.push(((ZJ, XJ) => {
              const AJ = JJ => {
                  ZJ.removeEventListener("error", AJ), ZJ.removeEventListener("message", qJ), eJ(JJ), XJ()
                },
                qJ = JJ => {
                  "decoded" === JJ.data.action && (ZJ.removeEventListener("error", AJ), ZJ.removeEventListener("message", qJ), JJ.data.success ? UJ(JJ.data.decodedData) : eJ({
                    message: JJ.data.JY
                  }), XJ())
                };
              ZJ.addEventListener("error", AJ), ZJ.addEventListener("message", qJ), ZJ.postMessage({
                action: "setDefaultDecoderOptions",
                options: DJ.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const jJ = new Uint8Array(JJ.byteLength);
              jJ.set(new Uint8Array(JJ.buffer, JJ.byteOffset, JJ.byteLength)), ZJ.postMessage({
                action: "decode",
                data: jJ,
                caps: FJ,
                options: cJ
              }, [jJ.buffer])
            }))
          }))
        }
        if (DJ._DecoderModulePromise) {
          const FJ = await DJ._DecoderModulePromise;
          return DJ.DefaultDecoderOptions.isDirty && (DJ._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = DJ.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((UJ, eJ) => {
            FJ.decode(JJ, ZJ, cJ).then((JJ => {
              UJ(JJ)
            })).catch((JJ => {
              eJ({
                message: JJ
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(JJ, cJ, ZJ) {
        if ((JJ.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, cJ), ZJ && (ZJ.transcodedFormat = JJ.transcodedFormat, ZJ.isInGammaSpace = JJ.isInGammaSpace, ZJ.hasAlpha = JJ.hasAlpha, ZJ.transcoderName = JJ.transcoderName);
        let FJ = !0;
        switch (JJ.transcodedFormat) {
          case 32856:
            cJ.type = 0, cJ.format = 5;
            break;
          case 33321:
            cJ.type = 0, cJ.format = 6;
            break;
          case 33323:
            cJ.type = 0, cJ.format = 7;
            break;
          default:
            cJ.format = JJ.transcodedFormat, FJ = !1
        }
        if (cJ._gammaSpace = JJ.isInGammaSpace, cJ.generateMipMaps = JJ.mipmaps.length > 1, cJ.width = JJ.mipmaps[0].width, cJ.height = JJ.mipmaps[0].height, JJ.errors) throw new Error("KTX2 container - could not transcode the data. " + JJ.errors);
        for (let UJ = 0; UJ < JJ.mipmaps.length; ++UJ) {
          const ZJ = JJ.mipmaps[UJ];
          if (!ZJ || !ZJ.data) throw new Error("KTX2 container - could not transcode one of the image");
          FJ ? (cJ.width = ZJ.width, cJ.height = ZJ.height, this._engine._uploadDataToTextureDirectly(cJ, ZJ.data, 0, UJ, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(cJ, JJ.transcodedFormat, ZJ.width, ZJ.height, ZJ.data, 0, UJ)
        }
        cJ._extension = ".ktx2", cJ.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(JJ) {
        if (JJ.byteLength >= 12) {
          const cJ = new Uint8Array(JJ.buffer, JJ.byteOffset, 12);
          if (171 === cJ[0] && 75 === cJ[1] && 84 === cJ[2] && 88 === cJ[3] && 32 === cJ[4] && 50 === cJ[5] && 48 === cJ[6] && 187 === cJ[7] && 13 === cJ[8] && 10 === cJ[9] && 26 === cJ[10] && 10 === cJ[11]) return !0
        }
        return !1
      }
    }

    function sJ(JJ) {
      switch (JJ) {
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
    DJ.URLConfig = {
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
    }, DJ.DefaultNumWorkers = DJ.GetDefaultNumWorkers(), DJ.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(JJ) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== JJ && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = JJ, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(JJ) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== JJ && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = JJ, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(JJ) {
        this._forceRGBA !== JJ && (this._forceRGBA = JJ, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(JJ) {
        this._forceR8 !== JJ && (this._forceR8 = JJ, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(JJ) {
        this._forceRG8 !== JJ && (this._forceRG8 = JJ, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(JJ) {
        this._bypassTranscoders !== JJ && (this._bypassTranscoders = JJ, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const JJ = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (JJ.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (JJ.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (JJ.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (JJ.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (JJ.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (JJ.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [XJ.BC1_RGB, XJ.BC3_RGBA],
            yes: {
              transcodeFormat: XJ.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = JJ, JJ
      }
    };
    class nJ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(JJ, cJ, ZJ, FJ) {
        if (Array.isArray(JJ)) return;
        cJ._invertVScale = !cJ.invertY;
        const eJ = cJ.gn(),
          XJ = new UJ(JJ, 6),
          AJ = sJ(XJ.glInternalFormat);
        null !== AJ ? (cJ.format = AJ, cJ._useSRGBBuffer = eJ._getUseSRGBBuffer(!0, !cJ.generateMipMaps), cJ._gammaSpace = !0) : cJ.format = XJ.glInternalFormat;
        const qJ = XJ.numberOfMipmapLevels > 1 && cJ.generateMipMaps;
        eJ._unpackFlipY(!0), XJ.uploadLevels(cJ, cJ.generateMipMaps), cJ.width = XJ.pixelWidth, cJ.height = XJ.pixelHeight, eJ._setCubeMapTextureParams(cJ, qJ, XJ.numberOfMipmapLevels - 1), cJ.isReady = !0, cJ.onLoadedObservable.notifyObservers(cJ), cJ.onLoadedObservable.clear(), FJ && FJ()
      }
      loadData(JJ, cJ, ZJ, eJ) {
        if (UJ.IsValid(JJ)) {
          cJ._invertVScale = !cJ.invertY;
          const FJ = new UJ(JJ, 1),
            eJ = sJ(FJ.glInternalFormat);
          null !== eJ ? (cJ.format = eJ, cJ._useSRGBBuffer = cJ.gn()._getUseSRGBBuffer(!0, !cJ.generateMipMaps), cJ._gammaSpace = !0) : cJ.format = FJ.glInternalFormat, ZJ(FJ.pixelWidth, FJ.pixelHeight, cJ.generateMipMaps, !0, (() => {
            FJ.uploadLevels(cJ, cJ.generateMipMaps)
          }), FJ.isInvalid)
        } else if (DJ.IsValid(JJ)) {
          new DJ(cJ.gn())._uploadAsync(JJ, cJ, eJ).then((() => {
            ZJ(cJ.width, cJ.height, cJ.generateMipMaps, !0, (() => {}), !1)
          }), (JJ => {
            FJ.c.Warn(`Failed to load KTX2 texture data: ${JJ.message}`), ZJ(0, 0, !1, !1, (() => {}), !0)
          }))
        } else FJ.c.Error("texture missing KTX identifier"), ZJ(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  40556: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    class FJ {
      constructor(JJ) {
        this._pendingActions = new Array, this._workerInfos = JJ.map((JJ => ({
          workerPromise: Promise.resolve(JJ),
          idle: !0
        })))
      }
      dispose() {
        for (const JJ of this._workerInfos) JJ.workerPromise.then((JJ => {
          JJ.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(JJ) {
        this._executeOnIdleWorker(JJ) || this._pendingActions.push(JJ)
      }
      _executeOnIdleWorker(JJ) {
        for (const cJ of this._workerInfos)
          if (cJ.idle) return this._execute(cJ, JJ), !0;
        return !1
      }
      _execute(JJ, cJ) {
        JJ.idle = !1, JJ.workerPromise.then((ZJ => {
          cJ(ZJ, (() => {
            const cJ = this._pendingActions.shift();
            cJ ? this._execute(JJ, cJ) : JJ.idle = !0
          }))
        }))
      }
    }
    class UJ extends FJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UJ.DefaultOptions;
        super([]), this._maxWorkers = JJ, this._createWorkerAsync = cJ, this._options = ZJ
      }
      push(JJ) {
        if (!this._executeOnIdleWorker(JJ))
          if (this._workerInfos.length < this._maxWorkers) {
            const cJ = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(cJ), this._execute(cJ, JJ)
          } else this._pendingActions.push(JJ)
      }
      _execute(JJ, cJ) {
        JJ.timeoutId && (clearTimeout(JJ.timeoutId), delete JJ.timeoutId), super._execute(JJ, ((ZJ, FJ) => {
          cJ(ZJ, (() => {
            FJ(), JJ.idle && (JJ.timeoutId = setTimeout((() => {
              JJ.workerPromise.then((JJ => {
                JJ.terminate()
              }));
              const cJ = this._workerInfos.indexOf(JJ); - 1 !== cJ && this._workerInfos.splice(cJ, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    UJ.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);