export const id = 304;
export const ids = [304];
export const modules = {
  41253: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      _KTXTextureLoader: () => xQ
    });
    var LQ = wQ(38203);
    class qQ {
      constructor(QQ, FQ) {
        if (this.data = QQ, this.isInvalid = !1, !qQ.IsValid(QQ)) return this.isInvalid = !0, void LQ.c.Error("texture missing KTX identifier");
        const wQ = Uint32Array.BYTES_PER_ELEMENT,
          oQ = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * wQ),
          DQ = 67305985 === oQ.getUint32(0, !0);
        return this.glType = oQ.getUint32(1 * wQ, DQ), this.glTypeSize = oQ.getUint32(2 * wQ, DQ), this.glFormat = oQ.getUint32(3 * wQ, DQ), this.glInternalFormat = oQ.getUint32(4 * wQ, DQ), this.glBaseInternalFormat = oQ.getUint32(5 * wQ, DQ), this.pixelWidth = oQ.getUint32(6 * wQ, DQ), this.pixelHeight = oQ.getUint32(7 * wQ, DQ), this.pixelDepth = oQ.getUint32(8 * wQ, DQ), this.numberOfArrayElements = oQ.getUint32(9 * wQ, DQ), this.numberOfFaces = oQ.getUint32(10 * wQ, DQ), this.numberOfMipmapLevels = oQ.getUint32(11 * wQ, DQ), this.bytesOfKeyValueData = oQ.getUint32(12 * wQ, DQ), 0 !== this.glType ? (LQ.c.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (LQ.c.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (LQ.c.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== FQ ? (LQ.c.Error("number of faces expected" + FQ + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = qQ.COMPRESSED_2D))
      }
      uploadLevels(QQ, FQ) {
        switch (this.loadType) {
          case qQ.COMPRESSED_2D:
            this._upload2DCompressedLevels(QQ, FQ);
          case qQ.TEX_2D:
          case qQ.COMPRESSED_3D:
          case qQ.TEX_3D:
        }
      }
      _upload2DCompressedLevels(QQ, FQ) {
        let wQ = qQ.HEADER_LEN + this.bytesOfKeyValueData,
          LQ = this.pixelWidth,
          oQ = this.pixelHeight;
        const DQ = FQ ? this.numberOfMipmapLevels : 1;
        for (let qQ = 0; qQ < DQ; qQ++) {
          const FQ = new Int32Array(this.data.buffer, this.data.byteOffset + wQ, 1)[0];
          wQ += 4;
          for (let DQ = 0; DQ < this.numberOfFaces; DQ++) {
            const kQ = new Uint8Array(this.data.buffer, this.data.byteOffset + wQ, FQ);
            QQ.Wx()._uploadCompressedDataToTextureDirectly(QQ, QQ.format, LQ, oQ, kQ, DQ, qQ), wQ += FQ, wQ += 3 - (FQ + 3) % 4
          }
          LQ = Math.max(1, .5 * LQ), oQ = Math.max(1, .5 * oQ)
        }
      }
      static IsValid(QQ) {
        if (QQ.byteLength >= 12) {
          const FQ = new Uint8Array(QQ.buffer, QQ.byteOffset, 12);
          if (171 === FQ[0] && 75 === FQ[1] && 84 === FQ[2] && 88 === FQ[3] && 32 === FQ[4] && 49 === FQ[5] && 49 === FQ[6] && 187 === FQ[7] && 13 === FQ[8] && 10 === FQ[9] && 26 === FQ[10] && 10 === FQ[11]) return !0
        }
        return !1
      }
    }
    qQ.HEADER_LEN = 64, qQ.COMPRESSED_2D = 0, qQ.COMPRESSED_3D = 1, qQ.TEX_2D = 2, qQ.TEX_3D = 3;
    var oQ, DQ, kQ, vQ = wQ(41257),
      mQ = wQ(39505);

    function uQ(QQ, FQ) {
      const wQ = FQ?.jsDecoderModule || KTX2DECODER;
      QQ && (QQ.wasmBaseUrl && (wQ.Transcoder.WasmBaseUrl = QQ.wasmBaseUrl), QQ.wasmUASTCToASTC && (wQ.LiteTranscoder_UASTC_ASTC.WasmModuleURL = QQ.wasmUASTCToASTC), QQ.wasmUASTCToBC7 && (wQ.LiteTranscoder_UASTC_BC7.WasmModuleURL = QQ.wasmUASTCToBC7), QQ.wasmUASTCToRGBA_UNORM && (wQ.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = QQ.wasmUASTCToRGBA_UNORM), QQ.wasmUASTCToRGBA_SRGB && (wQ.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = QQ.wasmUASTCToRGBA_SRGB), QQ.wasmUASTCToR8_UNORM && (wQ.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = QQ.wasmUASTCToR8_UNORM), QQ.wasmUASTCToRG8_UNORM && (wQ.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = QQ.wasmUASTCToRG8_UNORM), QQ.jsMSCTranscoder && (wQ.MSCTranscoder.JSModuleURL = QQ.jsMSCTranscoder), QQ.wasmMSCTranscoder && (wQ.MSCTranscoder.WasmModuleURL = QQ.wasmMSCTranscoder), QQ.wasmZSTDDecoder && (wQ.ZSTDDecoder.WasmModuleURL = QQ.wasmZSTDDecoder)), FQ && (FQ.wasmUASTCToASTC && (wQ.LiteTranscoder_UASTC_ASTC.WasmBinary = FQ.wasmUASTCToASTC), FQ.wasmUASTCToBC7 && (wQ.LiteTranscoder_UASTC_BC7.WasmBinary = FQ.wasmUASTCToBC7), FQ.wasmUASTCToRGBA_UNORM && (wQ.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = FQ.wasmUASTCToRGBA_UNORM), FQ.wasmUASTCToRGBA_SRGB && (wQ.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = FQ.wasmUASTCToRGBA_SRGB), FQ.wasmUASTCToR8_UNORM && (wQ.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = FQ.wasmUASTCToR8_UNORM), FQ.wasmUASTCToRG8_UNORM && (wQ.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = FQ.wasmUASTCToRG8_UNORM), FQ.jsMSCTranscoder && (wQ.MSCTranscoder.JSModule = FQ.jsMSCTranscoder), FQ.wasmMSCTranscoder && (wQ.MSCTranscoder.WasmBinary = FQ.wasmMSCTranscoder), FQ.wasmZSTDDecoder && (wQ.ZSTDDecoder.WasmBinary = FQ.wasmZSTDDecoder))
    }

    function HQ(QQ) {
      let FQ;
      "undefined" === typeof QQ && "undefined" !== typeof KTX2DECODER && (QQ = KTX2DECODER), onmessage = wQ => {
        if (wQ.data) switch (wQ.data.action) {
          case "init": {
            const LQ = wQ.data.urls;
            LQ && (LQ.jsDecoderModule && "undefined" === typeof QQ && (importScripts(LQ.jsDecoderModule), QQ = KTX2DECODER), uQ(LQ)), wQ.data.wasmBinaries && uQ(void 0, {
              ...wQ.data.wasmBinaries,
              jsDecoderModule: QQ
            }), FQ = new QQ.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            QQ.KTX2Decoder.DefaultDecoderOptions = wQ.data.options;
            break;
          case "decode":
            FQ.decode(wQ.data.data, wQ.data.caps, wQ.data.options).then((QQ => {
              const FQ = [];
              for (let wQ = 0; wQ < QQ.mipmaps.length; ++wQ) {
                const LQ = QQ.mipmaps[wQ];
                LQ && LQ.data && FQ.push(LQ.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: QQ
              }, FQ)
            })).catch((QQ => {
              postMessage({
                action: "decoded",
                success: !1,
                Om: QQ
              })
            }))
        }
      }
    }! function(QQ) {
      QQ[QQ.ETC1S = 0] = "ETC1S", QQ[QQ.UASTC4x4 = 1] = "UASTC4x4", QQ[QQ.RGBA32 = 2] = "RGBA32"
    }(oQ || (oQ = {})),
    function(QQ) {
      QQ[QQ.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", QQ[QQ.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", QQ[QQ.BC7_RGBA = 1] = "BC7_RGBA", QQ[QQ.BC3_RGBA = 2] = "BC3_RGBA", QQ[QQ.BC1_RGB = 3] = "BC1_RGB", QQ[QQ.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", QQ[QQ.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", QQ[QQ.ETC2_RGBA = 6] = "ETC2_RGBA", QQ[QQ.ETC1_RGB = 7] = "ETC1_RGB", QQ[QQ.RGBA32 = 8] = "RGBA32", QQ[QQ.R8 = 9] = "R8", QQ[QQ.RG8 = 10] = "RG8"
    }(DQ || (DQ = {})),
    function(QQ) {
      QQ[QQ.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", QQ[QQ.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", QQ[QQ.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", QQ[QQ.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", QQ[QQ.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", QQ[QQ.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", QQ[QQ.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", QQ[QQ.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", QQ[QQ.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", QQ[QQ.RGBA8Format = 32856] = "RGBA8Format", QQ[QQ.R8Format = 33321] = "R8Format", QQ[QQ.RG8Format = 33323] = "RG8Format"
    }(kQ || (kQ = {}));
    class bQ {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(QQ) {
        if (bQ._WorkerPoolPromise || bQ._DecoderModulePromise) return;
        const FQ = {
          wasmBaseUrl: mQ.g.ScriptBaseUrl,
          jsDecoderModule: mQ.g.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: mQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: mQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: mQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: mQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: mQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: mQ.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: mQ.g.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: mQ.g.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: mQ.g.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        QQ && "function" === typeof Worker && "undefined" !== typeof URL ? bQ._WorkerPoolPromise = new Promise((wQ => {
          const LQ = `${uQ}(${HQ})()`,
            qQ = URL.createObjectURL(new Blob([LQ], {
              type: "application/javascript"
            }));
          wQ(new vQ.c(QQ, (async () => await async function(QQ, FQ, wQ) {
            return await new Promise(((LQ, qQ) => {
              const oQ = FQ => {
                  QQ.removeEventListener("error", oQ), QQ.removeEventListener("message", DQ), qQ(FQ)
                },
                DQ = FQ => {
                  "init" === FQ.data.action && (QQ.removeEventListener("error", oQ), QQ.removeEventListener("message", DQ), LQ(QQ))
                };
              QQ.addEventListener("error", oQ), QQ.addEventListener("message", DQ), QQ.postMessage({
                action: "init",
                urls: wQ,
                wasmBinaries: FQ
              })
            }))
          }(new Worker(qQ), void 0, FQ))))
        })) : "undefined" === typeof bQ._KTX2DecoderModule ? bQ._DecoderModulePromise = mQ.g.LoadBabylonScriptAsync(FQ.jsDecoderModule).then((() => (bQ._KTX2DecoderModule = KTX2DECODER, bQ._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, bQ._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, uQ(FQ, bQ._KTX2DecoderModule), new bQ._KTX2DecoderModule.KTX2Decoder))) : (bQ._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, bQ._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, bQ._DecoderModulePromise = Promise.resolve(new bQ._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bQ.DefaultNumWorkers;
        this._engine = QQ;
        const wQ = "object" === typeof FQ && FQ.workerPool || bQ.WorkerPool;
        if (wQ) bQ._WorkerPoolPromise = Promise.resolve(wQ);
        else {
          "object" === typeof FQ ? bQ._KTX2DecoderModule = FQ?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (bQ._KTX2DecoderModule = KTX2DECODER);
          const QQ = "number" === typeof FQ ? FQ : FQ.numWorkers ?? bQ.DefaultNumWorkers;
          bQ._Initialize(QQ)
        }
      }
      async _uploadAsync(QQ, FQ, wQ) {
        const LQ = await this._decodeAsync(QQ, wQ);
        this._createTexture(LQ, FQ, wQ)
      }
      async _decodeAsync(QQ, FQ) {
        const wQ = this._engine.getCaps(),
          LQ = {
            astc: !!wQ.astc,
            bptc: !!wQ.bptc,
            s3tc: !!wQ.s3tc,
            pvrtc: !!wQ.pvrtc,
            etc2: !!wQ.etc2,
            etc1: !!wQ.etc1
          };
        if (bQ._WorkerPoolPromise) {
          const wQ = await bQ._WorkerPoolPromise;
          return await new Promise(((qQ, oQ) => {
            wQ.push(((wQ, DQ) => {
              const kQ = QQ => {
                  wQ.removeEventListener("error", kQ), wQ.removeEventListener("message", vQ), oQ(QQ), DQ()
                },
                vQ = QQ => {
                  "decoded" === QQ.data.action && (wQ.removeEventListener("error", kQ), wQ.removeEventListener("message", vQ), QQ.data.success ? qQ(QQ.data.decodedData) : oQ({
                    message: QQ.data.Om
                  }), DQ())
                };
              wQ.addEventListener("error", kQ), wQ.addEventListener("message", vQ), wQ.postMessage({
                action: "setDefaultDecoderOptions",
                options: bQ.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const mQ = new Uint8Array(QQ.byteLength);
              mQ.set(new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength)), wQ.postMessage({
                action: "decode",
                data: mQ,
                caps: LQ,
                options: FQ
              }, [mQ.buffer])
            }))
          }))
        }
        if (bQ._DecoderModulePromise) {
          const LQ = await bQ._DecoderModulePromise;
          return bQ.DefaultDecoderOptions.isDirty && (bQ._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = bQ.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((qQ, oQ) => {
            LQ.decode(QQ, wQ, FQ).then((QQ => {
              qQ(QQ)
            })).catch((QQ => {
              oQ({
                message: QQ
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(QQ, FQ, wQ) {
        if ((QQ.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, FQ), wQ && (wQ.transcodedFormat = QQ.transcodedFormat, wQ.isInGammaSpace = QQ.isInGammaSpace, wQ.hasAlpha = QQ.hasAlpha, wQ.transcoderName = QQ.transcoderName);
        let LQ = !0;
        switch (QQ.transcodedFormat) {
          case 32856:
            FQ.type = 0, FQ.format = 5;
            break;
          case 33321:
            FQ.type = 0, FQ.format = 6;
            break;
          case 33323:
            FQ.type = 0, FQ.format = 7;
            break;
          default:
            FQ.format = QQ.transcodedFormat, LQ = !1
        }
        if (FQ._gammaSpace = QQ.isInGammaSpace, FQ.generateMipMaps = QQ.mipmaps.length > 1, FQ.width = QQ.mipmaps[0].width, FQ.height = QQ.mipmaps[0].height, QQ.errors) throw new Error("KTX2 container - could not transcode the data. " + QQ.errors);
        for (let qQ = 0; qQ < QQ.mipmaps.length; ++qQ) {
          const wQ = QQ.mipmaps[qQ];
          if (!wQ || !wQ.data) throw new Error("KTX2 container - could not transcode one of the image");
          LQ ? (FQ.width = wQ.width, FQ.height = wQ.height, this._engine._uploadDataToTextureDirectly(FQ, wQ.data, 0, qQ, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(FQ, QQ.transcodedFormat, wQ.width, wQ.height, wQ.data, 0, qQ)
        }
        FQ._extension = ".ktx2", FQ.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(QQ) {
        if (QQ.byteLength >= 12) {
          const FQ = new Uint8Array(QQ.buffer, QQ.byteOffset, 12);
          if (171 === FQ[0] && 75 === FQ[1] && 84 === FQ[2] && 88 === FQ[3] && 32 === FQ[4] && 50 === FQ[5] && 48 === FQ[6] && 187 === FQ[7] && 13 === FQ[8] && 10 === FQ[9] && 26 === FQ[10] && 10 === FQ[11]) return !0
        }
        return !1
      }
    }

    function YQ(QQ) {
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
    bQ.URLConfig = {
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
    }, bQ.DefaultNumWorkers = bQ.GetDefaultNumWorkers(), bQ.DefaultDecoderOptions = new class {
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
            transcodeFormat: [DQ.BC1_RGB, DQ.BC3_RGBA],
            yes: {
              transcodeFormat: DQ.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = QQ, QQ
      }
    };
    class xQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(QQ, FQ, wQ, LQ) {
        if (Array.isArray(QQ)) return;
        FQ._invertVScale = !FQ.invertY;
        const oQ = FQ.Wx(),
          DQ = new qQ(QQ, 6),
          kQ = YQ(DQ.glInternalFormat);
        null !== kQ ? (FQ.format = kQ, FQ._useSRGBBuffer = oQ._getUseSRGBBuffer(!0, !FQ.generateMipMaps), FQ._gammaSpace = !0) : FQ.format = DQ.glInternalFormat;
        const vQ = DQ.numberOfMipmapLevels > 1 && FQ.generateMipMaps;
        oQ._unpackFlipY(!0), DQ.uploadLevels(FQ, FQ.generateMipMaps), FQ.width = DQ.pixelWidth, FQ.height = DQ.pixelHeight, oQ._setCubeMapTextureParams(FQ, vQ, DQ.numberOfMipmapLevels - 1), FQ.isReady = !0, FQ.onLoadedObservable.notifyObservers(FQ), FQ.onLoadedObservable.clear(), LQ && LQ()
      }
      loadData(QQ, FQ, wQ, oQ) {
        if (qQ.IsValid(QQ)) {
          FQ._invertVScale = !FQ.invertY;
          const LQ = new qQ(QQ, 1),
            oQ = YQ(LQ.glInternalFormat);
          null !== oQ ? (FQ.format = oQ, FQ._useSRGBBuffer = FQ.Wx()._getUseSRGBBuffer(!0, !FQ.generateMipMaps), FQ._gammaSpace = !0) : FQ.format = LQ.glInternalFormat, wQ(LQ.pixelWidth, LQ.pixelHeight, FQ.generateMipMaps, !0, (() => {
            LQ.uploadLevels(FQ, FQ.generateMipMaps)
          }), LQ.isInvalid)
        } else if (bQ.IsValid(QQ)) {
          new bQ(FQ.Wx())._uploadAsync(QQ, FQ, oQ).then((() => {
            wQ(FQ.width, FQ.height, FQ.generateMipMaps, !0, (() => {}), !1)
          }), (QQ => {
            LQ.c.Warn(`Failed to load KTX2 texture data: ${QQ.message}`), wQ(0, 0, !1, !1, (() => {}), !0)
          }))
        } else LQ.c.Error("texture missing KTX identifier"), wQ(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41257: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    class LQ {
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
        for (const FQ of this._workerInfos)
          if (FQ.idle) return this._execute(FQ, QQ), !0;
        return !1
      }
      _execute(QQ, FQ) {
        QQ.idle = !1, QQ.workerPromise.then((wQ => {
          FQ(wQ, (() => {
            const FQ = this._pendingActions.shift();
            FQ ? this._execute(QQ, FQ) : QQ.idle = !0
          }))
        }))
      }
    }
    class qQ extends LQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.DefaultOptions;
        super([]), this._maxWorkers = QQ, this._createWorkerAsync = FQ, this._options = wQ
      }
      push(QQ) {
        if (!this._executeOnIdleWorker(QQ))
          if (this._workerInfos.length < this._maxWorkers) {
            const FQ = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(FQ), this._execute(FQ, QQ)
          } else this._pendingActions.push(QQ)
      }
      _execute(QQ, FQ) {
        QQ.timeoutId && (clearTimeout(QQ.timeoutId), delete QQ.timeoutId), super._execute(QQ, ((wQ, LQ) => {
          FQ(wQ, (() => {
            LQ(), QQ.idle && (QQ.timeoutId = setTimeout((() => {
              QQ.workerPromise.then((QQ => {
                QQ.terminate()
              }));
              const FQ = this._workerInfos.indexOf(QQ); - 1 !== FQ && this._workerInfos.splice(FQ, 1)
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