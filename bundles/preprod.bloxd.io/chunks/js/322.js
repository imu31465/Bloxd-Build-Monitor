export const id = 322;
export const ids = [322];
export const modules = {
  42092: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      _KTXTextureLoader: () => jQ
    });
    var wQ = XQ(38956);
    class qQ {
      constructor(QQ, WQ) {
        if (this.data = QQ, this.isInvalid = !1, !qQ.IsValid(QQ)) return this.isInvalid = !0, void wQ.b.Error("texture missing KTX identifier");
        const XQ = Uint32Array.BYTES_PER_ELEMENT,
          TQ = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * XQ),
          zQ = 67305985 === TQ.getUint32(0, !0);
        return this.glType = TQ.getUint32(1 * XQ, zQ), this.glTypeSize = TQ.getUint32(2 * XQ, zQ), this.glFormat = TQ.getUint32(3 * XQ, zQ), this.glInternalFormat = TQ.getUint32(4 * XQ, zQ), this.glBaseInternalFormat = TQ.getUint32(5 * XQ, zQ), this.pixelWidth = TQ.getUint32(6 * XQ, zQ), this.pixelHeight = TQ.getUint32(7 * XQ, zQ), this.pixelDepth = TQ.getUint32(8 * XQ, zQ), this.numberOfArrayElements = TQ.getUint32(9 * XQ, zQ), this.numberOfFaces = TQ.getUint32(10 * XQ, zQ), this.numberOfMipmapLevels = TQ.getUint32(11 * XQ, zQ), this.bytesOfKeyValueData = TQ.getUint32(12 * XQ, zQ), 0 !== this.glType ? (wQ.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (wQ.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (wQ.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== WQ ? (wQ.b.Error("number of faces expected" + WQ + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = qQ.COMPRESSED_2D))
      }
      uploadLevels(QQ, WQ) {
        switch (this.loadType) {
          case qQ.COMPRESSED_2D:
            this._upload2DCompressedLevels(QQ, WQ);
          case qQ.TEX_2D:
          case qQ.COMPRESSED_3D:
          case qQ.TEX_3D:
        }
      }
      _upload2DCompressedLevels(QQ, WQ) {
        let XQ = qQ.HEADER_LEN + this.bytesOfKeyValueData,
          wQ = this.pixelWidth,
          TQ = this.pixelHeight;
        const zQ = WQ ? this.numberOfMipmapLevels : 1;
        for (let qQ = 0; qQ < zQ; qQ++) {
          const WQ = new Int32Array(this.data.buffer, this.data.byteOffset + XQ, 1)[0];
          XQ += 4;
          for (let zQ = 0; zQ < this.numberOfFaces; zQ++) {
            const sQ = new Uint8Array(this.data.buffer, this.data.byteOffset + XQ, WQ);
            QQ.Uj()._uploadCompressedDataToTextureDirectly(QQ, QQ.format, wQ, TQ, sQ, zQ, qQ), XQ += WQ, XQ += 3 - (WQ + 3) % 4
          }
          wQ = Math.max(1, .5 * wQ), TQ = Math.max(1, .5 * TQ)
        }
      }
      static IsValid(QQ) {
        if (QQ.byteLength >= 12) {
          const WQ = new Uint8Array(QQ.buffer, QQ.byteOffset, 12);
          if (171 === WQ[0] && 75 === WQ[1] && 84 === WQ[2] && 88 === WQ[3] && 32 === WQ[4] && 49 === WQ[5] && 49 === WQ[6] && 187 === WQ[7] && 13 === WQ[8] && 10 === WQ[9] && 26 === WQ[10] && 10 === WQ[11]) return !0
        }
        return !1
      }
    }
    qQ.HEADER_LEN = 64, qQ.COMPRESSED_2D = 0, qQ.COMPRESSED_3D = 1, qQ.TEX_2D = 2, qQ.TEX_3D = 3;
    var TQ, zQ, sQ, FQ = XQ(42100),
      PQ = XQ(40357);

    function gQ(QQ, WQ) {
      const XQ = WQ?.jsDecoderModule || KTX2DECODER;
      QQ && (QQ.wasmBaseUrl && (XQ.Transcoder.WasmBaseUrl = QQ.wasmBaseUrl), QQ.wasmUASTCToASTC && (XQ.LiteTranscoder_UASTC_ASTC.WasmModuleURL = QQ.wasmUASTCToASTC), QQ.wasmUASTCToBC7 && (XQ.LiteTranscoder_UASTC_BC7.WasmModuleURL = QQ.wasmUASTCToBC7), QQ.wasmUASTCToRGBA_UNORM && (XQ.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = QQ.wasmUASTCToRGBA_UNORM), QQ.wasmUASTCToRGBA_SRGB && (XQ.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = QQ.wasmUASTCToRGBA_SRGB), QQ.wasmUASTCToR8_UNORM && (XQ.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = QQ.wasmUASTCToR8_UNORM), QQ.wasmUASTCToRG8_UNORM && (XQ.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = QQ.wasmUASTCToRG8_UNORM), QQ.jsMSCTranscoder && (XQ.MSCTranscoder.JSModuleURL = QQ.jsMSCTranscoder), QQ.wasmMSCTranscoder && (XQ.MSCTranscoder.WasmModuleURL = QQ.wasmMSCTranscoder), QQ.wasmZSTDDecoder && (XQ.ZSTDDecoder.WasmModuleURL = QQ.wasmZSTDDecoder)), WQ && (WQ.wasmUASTCToASTC && (XQ.LiteTranscoder_UASTC_ASTC.WasmBinary = WQ.wasmUASTCToASTC), WQ.wasmUASTCToBC7 && (XQ.LiteTranscoder_UASTC_BC7.WasmBinary = WQ.wasmUASTCToBC7), WQ.wasmUASTCToRGBA_UNORM && (XQ.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = WQ.wasmUASTCToRGBA_UNORM), WQ.wasmUASTCToRGBA_SRGB && (XQ.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = WQ.wasmUASTCToRGBA_SRGB), WQ.wasmUASTCToR8_UNORM && (XQ.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = WQ.wasmUASTCToR8_UNORM), WQ.wasmUASTCToRG8_UNORM && (XQ.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = WQ.wasmUASTCToRG8_UNORM), WQ.jsMSCTranscoder && (XQ.MSCTranscoder.JSModule = WQ.jsMSCTranscoder), WQ.wasmMSCTranscoder && (XQ.MSCTranscoder.WasmBinary = WQ.wasmMSCTranscoder), WQ.wasmZSTDDecoder && (XQ.ZSTDDecoder.WasmBinary = WQ.wasmZSTDDecoder))
    }

    function JQ(QQ) {
      let WQ;
      "undefined" === typeof QQ && "undefined" !== typeof KTX2DECODER && (QQ = KTX2DECODER), onmessage = XQ => {
        if (XQ.data) switch (XQ.data.action) {
          case "init": {
            const wQ = XQ.data.urls;
            wQ && (wQ.jsDecoderModule && "undefined" === typeof QQ && (importScripts(wQ.jsDecoderModule), QQ = KTX2DECODER), gQ(wQ)), XQ.data.wasmBinaries && gQ(void 0, {
              ...XQ.data.wasmBinaries,
              jsDecoderModule: QQ
            }), WQ = new QQ.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            QQ.KTX2Decoder.DefaultDecoderOptions = XQ.data.options;
            break;
          case "decode":
            WQ.decode(XQ.data.data, XQ.data.caps, XQ.data.options).then((QQ => {
              const WQ = [];
              for (let XQ = 0; XQ < QQ.mipmaps.length; ++XQ) {
                const wQ = QQ.mipmaps[XQ];
                wQ && wQ.data && WQ.push(wQ.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: QQ
              }, WQ)
            })).catch((QQ => {
              postMessage({
                action: "decoded",
                success: !1,
                cg: QQ
              })
            }))
        }
      }
    }! function(QQ) {
      QQ[QQ.ETC1S = 0] = "ETC1S", QQ[QQ.UASTC4x4 = 1] = "UASTC4x4", QQ[QQ.RGBA32 = 2] = "RGBA32"
    }(TQ || (TQ = {})),
    function(QQ) {
      QQ[QQ.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", QQ[QQ.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", QQ[QQ.BC7_RGBA = 1] = "BC7_RGBA", QQ[QQ.BC3_RGBA = 2] = "BC3_RGBA", QQ[QQ.BC1_RGB = 3] = "BC1_RGB", QQ[QQ.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", QQ[QQ.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", QQ[QQ.ETC2_RGBA = 6] = "ETC2_RGBA", QQ[QQ.ETC1_RGB = 7] = "ETC1_RGB", QQ[QQ.RGBA32 = 8] = "RGBA32", QQ[QQ.R8 = 9] = "R8", QQ[QQ.RG8 = 10] = "RG8"
    }(zQ || (zQ = {})),
    function(QQ) {
      QQ[QQ.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", QQ[QQ.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", QQ[QQ.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", QQ[QQ.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", QQ[QQ.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", QQ[QQ.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", QQ[QQ.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", QQ[QQ.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", QQ[QQ.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", QQ[QQ.RGBA8Format = 32856] = "RGBA8Format", QQ[QQ.R8Format = 33321] = "R8Format", QQ[QQ.RG8Format = 33323] = "RG8Format"
    }(sQ || (sQ = {}));
    class rQ {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(QQ) {
        if (rQ._WorkerPoolPromise || rQ._DecoderModulePromise) return;
        const WQ = {
          wasmBaseUrl: PQ.g.ScriptBaseUrl,
          jsDecoderModule: PQ.g.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: PQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: PQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: PQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: PQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: PQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: PQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: PQ.g.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: PQ.g.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: PQ.g.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        QQ && "function" === typeof Worker && "undefined" !== typeof URL ? rQ._WorkerPoolPromise = new Promise((XQ => {
          const wQ = `${gQ}(${JQ})()`,
            qQ = URL.createObjectURL(new Blob([wQ], {
              type: "application/javascript"
            }));
          XQ(new FQ.e(QQ, (async () => await async function(QQ, WQ, XQ) {
            return await new Promise(((wQ, qQ) => {
              const TQ = WQ => {
                  QQ.removeEventListener("error", TQ), QQ.removeEventListener("message", zQ), qQ(WQ)
                },
                zQ = WQ => {
                  "init" === WQ.data.action && (QQ.removeEventListener("error", TQ), QQ.removeEventListener("message", zQ), wQ(QQ))
                };
              QQ.addEventListener("error", TQ), QQ.addEventListener("message", zQ), QQ.postMessage({
                action: "init",
                urls: XQ,
                wasmBinaries: WQ
              })
            }))
          }(new Worker(qQ), void 0, WQ))))
        })) : "undefined" === typeof rQ._KTX2DecoderModule ? rQ._DecoderModulePromise = PQ.g.LoadBabylonScriptAsync(WQ.jsDecoderModule).then((() => (rQ._KTX2DecoderModule = KTX2DECODER, rQ._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, rQ._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, gQ(WQ, rQ._KTX2DecoderModule), new rQ._KTX2DecoderModule.KTX2Decoder))) : (rQ._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, rQ._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, rQ._DecoderModulePromise = Promise.resolve(new rQ._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rQ.DefaultNumWorkers;
        this._engine = QQ;
        const XQ = "object" === typeof WQ && WQ.workerPool || rQ.WorkerPool;
        if (XQ) rQ._WorkerPoolPromise = Promise.resolve(XQ);
        else {
          "object" === typeof WQ ? rQ._KTX2DecoderModule = WQ?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (rQ._KTX2DecoderModule = KTX2DECODER);
          const QQ = "number" === typeof WQ ? WQ : WQ.numWorkers ?? rQ.DefaultNumWorkers;
          rQ._Initialize(QQ)
        }
      }
      async _uploadAsync(QQ, WQ, XQ) {
        const wQ = await this._decodeAsync(QQ, XQ);
        this._createTexture(wQ, WQ, XQ)
      }
      async _decodeAsync(QQ, WQ) {
        const XQ = this._engine.getCaps(),
          wQ = {
            astc: !!XQ.astc,
            bptc: !!XQ.bptc,
            s3tc: !!XQ.s3tc,
            pvrtc: !!XQ.pvrtc,
            etc2: !!XQ.etc2,
            etc1: !!XQ.etc1
          };
        if (rQ._WorkerPoolPromise) {
          const XQ = await rQ._WorkerPoolPromise;
          return await new Promise(((qQ, TQ) => {
            XQ.push(((XQ, zQ) => {
              const sQ = QQ => {
                  XQ.removeEventListener("error", sQ), XQ.removeEventListener("message", FQ), TQ(QQ), zQ()
                },
                FQ = QQ => {
                  "decoded" === QQ.data.action && (XQ.removeEventListener("error", sQ), XQ.removeEventListener("message", FQ), QQ.data.success ? qQ(QQ.data.decodedData) : TQ({
                    message: QQ.data.cg
                  }), zQ())
                };
              XQ.addEventListener("error", sQ), XQ.addEventListener("message", FQ), XQ.postMessage({
                action: "setDefaultDecoderOptions",
                options: rQ.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const PQ = new Uint8Array(QQ.byteLength);
              PQ.set(new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength)), XQ.postMessage({
                action: "decode",
                data: PQ,
                caps: wQ,
                options: WQ
              }, [PQ.buffer])
            }))
          }))
        }
        if (rQ._DecoderModulePromise) {
          const wQ = await rQ._DecoderModulePromise;
          return rQ.DefaultDecoderOptions.isDirty && (rQ._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = rQ.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((qQ, TQ) => {
            wQ.decode(QQ, XQ, WQ).then((QQ => {
              qQ(QQ)
            })).catch((QQ => {
              TQ({
                message: QQ
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(QQ, WQ, XQ) {
        if ((QQ.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, WQ), XQ && (XQ.transcodedFormat = QQ.transcodedFormat, XQ.isInGammaSpace = QQ.isInGammaSpace, XQ.hasAlpha = QQ.hasAlpha, XQ.transcoderName = QQ.transcoderName);
        let wQ = !0;
        switch (QQ.transcodedFormat) {
          case 32856:
            WQ.type = 0, WQ.format = 5;
            break;
          case 33321:
            WQ.type = 0, WQ.format = 6;
            break;
          case 33323:
            WQ.type = 0, WQ.format = 7;
            break;
          default:
            WQ.format = QQ.transcodedFormat, wQ = !1
        }
        if (WQ._gammaSpace = QQ.isInGammaSpace, WQ.generateMipMaps = QQ.mipmaps.length > 1, WQ.width = QQ.mipmaps[0].width, WQ.height = QQ.mipmaps[0].height, QQ.errors) throw new Error("KTX2 container - could not transcode the data. " + QQ.errors);
        for (let qQ = 0; qQ < QQ.mipmaps.length; ++qQ) {
          const XQ = QQ.mipmaps[qQ];
          if (!XQ || !XQ.data) throw new Error("KTX2 container - could not transcode one of the image");
          wQ ? (WQ.width = XQ.width, WQ.height = XQ.height, this._engine._uploadDataToTextureDirectly(WQ, XQ.data, 0, qQ, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(WQ, QQ.transcodedFormat, XQ.width, XQ.height, XQ.data, 0, qQ)
        }
        WQ._extension = ".ktx2", WQ.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(QQ) {
        if (QQ.byteLength >= 12) {
          const WQ = new Uint8Array(QQ.buffer, QQ.byteOffset, 12);
          if (171 === WQ[0] && 75 === WQ[1] && 84 === WQ[2] && 88 === WQ[3] && 32 === WQ[4] && 50 === WQ[5] && 48 === WQ[6] && 187 === WQ[7] && 13 === WQ[8] && 10 === WQ[9] && 26 === WQ[10] && 10 === WQ[11]) return !0
        }
        return !1
      }
    }

    function IQ(QQ) {
      switch (QQ) {
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
    rQ.URLConfig = {
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
    }, rQ.DefaultNumWorkers = rQ.GetDefaultNumWorkers(), rQ.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(QQ) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== QQ && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = QQ, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(QQ) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== QQ && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = QQ, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(QQ) {
        this._forceRGBA !== QQ && (this._forceRGBA = QQ, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(QQ) {
        this._forceR8 !== QQ && (this._forceR8 = QQ, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(QQ) {
        this._forceRG8 !== QQ && (this._forceRG8 = QQ, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(QQ) {
        this._bypassTranscoders !== QQ && (this._bypassTranscoders = QQ, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const QQ = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (QQ.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (QQ.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (QQ.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (QQ.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (QQ.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (QQ.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [zQ.BC1_RGB, zQ.BC3_RGBA],
            yes: {
              transcodeFormat: zQ.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = QQ, QQ
      }
    };
    class jQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(QQ, WQ, XQ, wQ) {
        if (Array.isArray(QQ)) return;
        WQ._invertVScale = !WQ.invertY;
        const TQ = WQ.Uj(),
          zQ = new qQ(QQ, 6),
          sQ = IQ(zQ.glInternalFormat);
        null !== sQ ? (WQ.format = sQ, WQ._useSRGBBuffer = TQ._getUseSRGBBuffer(!0, !WQ.generateMipMaps), WQ._gammaSpace = !0) : WQ.format = zQ.glInternalFormat;
        const FQ = zQ.numberOfMipmapLevels > 1 && WQ.generateMipMaps;
        TQ._unpackFlipY(!0), zQ.uploadLevels(WQ, WQ.generateMipMaps), WQ.width = zQ.pixelWidth, WQ.height = zQ.pixelHeight, TQ._setCubeMapTextureParams(WQ, FQ, zQ.numberOfMipmapLevels - 1), WQ.isReady = !0, WQ.onLoadedObservable.notifyObservers(WQ), WQ.onLoadedObservable.clear(), wQ && wQ()
      }
      loadData(QQ, WQ, XQ, TQ) {
        if (qQ.IsValid(QQ)) {
          WQ._invertVScale = !WQ.invertY;
          const wQ = new qQ(QQ, 1),
            TQ = IQ(wQ.glInternalFormat);
          null !== TQ ? (WQ.format = TQ, WQ._useSRGBBuffer = WQ.Uj()._getUseSRGBBuffer(!0, !WQ.generateMipMaps), WQ._gammaSpace = !0) : WQ.format = wQ.glInternalFormat, XQ(wQ.pixelWidth, wQ.pixelHeight, WQ.generateMipMaps, !0, (() => {
            wQ.uploadLevels(WQ, WQ.generateMipMaps)
          }), wQ.isInvalid)
        } else if (rQ.IsValid(QQ)) {
          new rQ(WQ.Uj())._uploadAsync(QQ, WQ, TQ).then((() => {
            XQ(WQ.width, WQ.height, WQ.generateMipMaps, !0, (() => {}), !1)
          }), (QQ => {
            wQ.b.Warn(`Failed to load KTX2 texture data: ${QQ.message}`), XQ(0, 0, !1, !1, (() => {}), !0)
          }))
        } else wQ.b.Error("texture missing KTX identifier"), XQ(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  42100: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    class wQ {
      constructor(QQ) {
        this._pendingActions = new Array, this._workerInfos = QQ.map((QQ => ({
          workerPromise: Promise.resolve(QQ),
          idle: !0
        })))
      }
      dispose() {
        for (const QQ of this._workerInfos) QQ.workerPromise.then((QQ => {
          QQ.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(QQ) {
        this._executeOnIdleWorker(QQ) || this._pendingActions.push(QQ)
      }
      _executeOnIdleWorker(QQ) {
        for (const WQ of this._workerInfos)
          if (WQ.idle) return this._execute(WQ, QQ), !0;
        return !1
      }
      _execute(QQ, WQ) {
        QQ.idle = !1, QQ.workerPromise.then((XQ => {
          WQ(XQ, (() => {
            const WQ = this._pendingActions.shift();
            WQ ? this._execute(QQ, WQ) : QQ.idle = !0
          }))
        }))
      }
    }
    class qQ extends wQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.DefaultOptions;
        super([]), this._maxWorkers = QQ, this._createWorkerAsync = WQ, this._options = XQ
      }
      push(QQ) {
        if (!this._executeOnIdleWorker(QQ))
          if (this._workerInfos.length < this._maxWorkers) {
            const WQ = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(WQ), this._execute(WQ, QQ)
          } else this._pendingActions.push(QQ)
      }
      _execute(QQ, WQ) {
        QQ.timeoutId && (clearTimeout(QQ.timeoutId), delete QQ.timeoutId), super._execute(QQ, ((XQ, wQ) => {
          WQ(XQ, (() => {
            wQ(), QQ.idle && (QQ.timeoutId = setTimeout((() => {
              QQ.workerPromise.then((QQ => {
                QQ.terminate()
              }));
              const WQ = this._workerInfos.indexOf(QQ); - 1 !== WQ && this._workerInfos.splice(WQ, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    qQ.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);