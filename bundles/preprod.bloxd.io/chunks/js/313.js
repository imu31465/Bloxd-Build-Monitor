export const id = 313;
export const ids = [313];
export const modules = {
  41665: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      _KTXTextureLoader: () => gC
    });
    var QC = ZC(38507);
    class wC {
      constructor(CC, zC) {
        if (this.data = CC, this.isInvalid = !1, !wC.IsValid(CC)) return this.isInvalid = !0, void QC.c.Error("texture missing KTX identifier");
        const ZC = Uint32Array.BYTES_PER_ELEMENT,
          bC = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ZC),
          nC = 67305985 === bC.getUint32(0, !0);
        return this.glType = bC.getUint32(1 * ZC, nC), this.glTypeSize = bC.getUint32(2 * ZC, nC), this.glFormat = bC.getUint32(3 * ZC, nC), this.glInternalFormat = bC.getUint32(4 * ZC, nC), this.glBaseInternalFormat = bC.getUint32(5 * ZC, nC), this.pixelWidth = bC.getUint32(6 * ZC, nC), this.pixelHeight = bC.getUint32(7 * ZC, nC), this.pixelDepth = bC.getUint32(8 * ZC, nC), this.numberOfArrayElements = bC.getUint32(9 * ZC, nC), this.numberOfFaces = bC.getUint32(10 * ZC, nC), this.numberOfMipmapLevels = bC.getUint32(11 * ZC, nC), this.bytesOfKeyValueData = bC.getUint32(12 * ZC, nC), 0 !== this.glType ? (QC.c.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (QC.c.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (QC.c.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== zC ? (QC.c.Error("number of faces expected" + zC + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = wC.COMPRESSED_2D))
      }
      uploadLevels(CC, zC) {
        switch (this.loadType) {
          case wC.COMPRESSED_2D:
            this._upload2DCompressedLevels(CC, zC);
          case wC.TEX_2D:
          case wC.COMPRESSED_3D:
          case wC.TEX_3D:
        }
      }
      _upload2DCompressedLevels(CC, zC) {
        let ZC = wC.HEADER_LEN + this.bytesOfKeyValueData,
          QC = this.pixelWidth,
          bC = this.pixelHeight;
        const nC = zC ? this.numberOfMipmapLevels : 1;
        for (let wC = 0; wC < nC; wC++) {
          const zC = new Int32Array(this.data.buffer, this.data.byteOffset + ZC, 1)[0];
          ZC += 4;
          for (let nC = 0; nC < this.numberOfFaces; nC++) {
            const fC = new Uint8Array(this.data.buffer, this.data.byteOffset + ZC, zC);
            CC.mg()._uploadCompressedDataToTextureDirectly(CC, CC.format, QC, bC, fC, nC, wC), ZC += zC, ZC += 3 - (zC + 3) % 4
          }
          QC = Math.max(1, .5 * QC), bC = Math.max(1, .5 * bC)
        }
      }
      static IsValid(CC) {
        if (CC.byteLength >= 12) {
          const zC = new Uint8Array(CC.buffer, CC.byteOffset, 12);
          if (171 === zC[0] && 75 === zC[1] && 84 === zC[2] && 88 === zC[3] && 32 === zC[4] && 49 === zC[5] && 49 === zC[6] && 187 === zC[7] && 13 === zC[8] && 10 === zC[9] && 26 === zC[10] && 10 === zC[11]) return !0
        }
        return !1
      }
    }
    wC.HEADER_LEN = 64, wC.COMPRESSED_2D = 0, wC.COMPRESSED_3D = 1, wC.TEX_2D = 2, wC.TEX_3D = 3;
    var bC, nC, fC, oC = ZC(41672),
      qC = ZC(39913);

    function FC(CC, zC) {
      const ZC = zC?.jsDecoderModule || KTX2DECODER;
      CC && (CC.wasmBaseUrl && (ZC.Transcoder.WasmBaseUrl = CC.wasmBaseUrl), CC.wasmUASTCToASTC && (ZC.LiteTranscoder_UASTC_ASTC.WasmModuleURL = CC.wasmUASTCToASTC), CC.wasmUASTCToBC7 && (ZC.LiteTranscoder_UASTC_BC7.WasmModuleURL = CC.wasmUASTCToBC7), CC.wasmUASTCToRGBA_UNORM && (ZC.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = CC.wasmUASTCToRGBA_UNORM), CC.wasmUASTCToRGBA_SRGB && (ZC.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = CC.wasmUASTCToRGBA_SRGB), CC.wasmUASTCToR8_UNORM && (ZC.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = CC.wasmUASTCToR8_UNORM), CC.wasmUASTCToRG8_UNORM && (ZC.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = CC.wasmUASTCToRG8_UNORM), CC.jsMSCTranscoder && (ZC.MSCTranscoder.JSModuleURL = CC.jsMSCTranscoder), CC.wasmMSCTranscoder && (ZC.MSCTranscoder.WasmModuleURL = CC.wasmMSCTranscoder), CC.wasmZSTDDecoder && (ZC.ZSTDDecoder.WasmModuleURL = CC.wasmZSTDDecoder)), zC && (zC.wasmUASTCToASTC && (ZC.LiteTranscoder_UASTC_ASTC.WasmBinary = zC.wasmUASTCToASTC), zC.wasmUASTCToBC7 && (ZC.LiteTranscoder_UASTC_BC7.WasmBinary = zC.wasmUASTCToBC7), zC.wasmUASTCToRGBA_UNORM && (ZC.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = zC.wasmUASTCToRGBA_UNORM), zC.wasmUASTCToRGBA_SRGB && (ZC.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = zC.wasmUASTCToRGBA_SRGB), zC.wasmUASTCToR8_UNORM && (ZC.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = zC.wasmUASTCToR8_UNORM), zC.wasmUASTCToRG8_UNORM && (ZC.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = zC.wasmUASTCToRG8_UNORM), zC.jsMSCTranscoder && (ZC.MSCTranscoder.JSModule = zC.jsMSCTranscoder), zC.wasmMSCTranscoder && (ZC.MSCTranscoder.WasmBinary = zC.wasmMSCTranscoder), zC.wasmZSTDDecoder && (ZC.ZSTDDecoder.WasmBinary = zC.wasmZSTDDecoder))
    }

    function WC(CC) {
      let zC;
      "undefined" === typeof CC && "undefined" !== typeof KTX2DECODER && (CC = KTX2DECODER), onmessage = ZC => {
        if (ZC.data) switch (ZC.data.action) {
          case "init": {
            const QC = ZC.data.urls;
            QC && (QC.jsDecoderModule && "undefined" === typeof CC && (importScripts(QC.jsDecoderModule), CC = KTX2DECODER), FC(QC)), ZC.data.wasmBinaries && FC(void 0, {
              ...ZC.data.wasmBinaries,
              jsDecoderModule: CC
            }), zC = new CC.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            CC.KTX2Decoder.DefaultDecoderOptions = ZC.data.options;
            break;
          case "decode":
            zC.decode(ZC.data.data, ZC.data.caps, ZC.data.options).then((CC => {
              const zC = [];
              for (let ZC = 0; ZC < CC.mipmaps.length; ++ZC) {
                const QC = CC.mipmaps[ZC];
                QC && QC.data && zC.push(QC.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: CC
              }, zC)
            })).catch((CC => {
              postMessage({
                action: "decoded",
                success: !1,
                cq: CC
              })
            }))
        }
      }
    }! function(CC) {
      CC[CC.ETC1S = 0] = "ETC1S", CC[CC.UASTC4x4 = 1] = "UASTC4x4", CC[CC.RGBA32 = 2] = "RGBA32"
    }(bC || (bC = {})),
    function(CC) {
      CC[CC.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", CC[CC.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", CC[CC.BC7_RGBA = 1] = "BC7_RGBA", CC[CC.BC3_RGBA = 2] = "BC3_RGBA", CC[CC.BC1_RGB = 3] = "BC1_RGB", CC[CC.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", CC[CC.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", CC[CC.ETC2_RGBA = 6] = "ETC2_RGBA", CC[CC.ETC1_RGB = 7] = "ETC1_RGB", CC[CC.RGBA32 = 8] = "RGBA32", CC[CC.R8 = 9] = "R8", CC[CC.RG8 = 10] = "RG8"
    }(nC || (nC = {})),
    function(CC) {
      CC[CC.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", CC[CC.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", CC[CC.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", CC[CC.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", CC[CC.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", CC[CC.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", CC[CC.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", CC[CC.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", CC[CC.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", CC[CC.RGBA8Format = 32856] = "RGBA8Format", CC[CC.R8Format = 33321] = "R8Format", CC[CC.RG8Format = 33323] = "RG8Format"
    }(fC || (fC = {}));
    class NC {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(CC) {
        if (NC._WorkerPoolPromise || NC._DecoderModulePromise) return;
        const zC = {
          wasmBaseUrl: qC.g.ScriptBaseUrl,
          jsDecoderModule: qC.g.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: qC.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: qC.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: qC.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: qC.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: qC.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: qC.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: qC.g.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: qC.g.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: qC.g.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        CC && "function" === typeof Worker && "undefined" !== typeof URL ? NC._WorkerPoolPromise = new Promise((ZC => {
          const QC = `${FC}(${WC})()`,
            wC = URL.createObjectURL(new Blob([QC], {
              type: "application/javascript"
            }));
          ZC(new oC.e(CC, (async () => await async function(CC, zC, ZC) {
            return await new Promise(((QC, wC) => {
              const bC = zC => {
                  CC.removeEventListener("error", bC), CC.removeEventListener("message", nC), wC(zC)
                },
                nC = zC => {
                  "init" === zC.data.action && (CC.removeEventListener("error", bC), CC.removeEventListener("message", nC), QC(CC))
                };
              CC.addEventListener("error", bC), CC.addEventListener("message", nC), CC.postMessage({
                action: "init",
                urls: ZC,
                wasmBinaries: zC
              })
            }))
          }(new Worker(wC), void 0, zC))))
        })) : "undefined" === typeof NC._KTX2DecoderModule ? NC._DecoderModulePromise = qC.g.LoadBabylonScriptAsync(zC.jsDecoderModule).then((() => (NC._KTX2DecoderModule = KTX2DECODER, NC._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, NC._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, FC(zC, NC._KTX2DecoderModule), new NC._KTX2DecoderModule.KTX2Decoder))) : (NC._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, NC._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, NC._DecoderModulePromise = Promise.resolve(new NC._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NC.DefaultNumWorkers;
        this._engine = CC;
        const ZC = "object" === typeof zC && zC.workerPool || NC.WorkerPool;
        if (ZC) NC._WorkerPoolPromise = Promise.resolve(ZC);
        else {
          "object" === typeof zC ? NC._KTX2DecoderModule = zC?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (NC._KTX2DecoderModule = KTX2DECODER);
          const CC = "number" === typeof zC ? zC : zC.numWorkers ?? NC.DefaultNumWorkers;
          NC._Initialize(CC)
        }
      }
      async _uploadAsync(CC, zC, ZC) {
        const QC = await this._decodeAsync(CC, ZC);
        this._createTexture(QC, zC, ZC)
      }
      async _decodeAsync(CC, zC) {
        const ZC = this._engine.getCaps(),
          QC = {
            astc: !!ZC.astc,
            bptc: !!ZC.bptc,
            s3tc: !!ZC.s3tc,
            pvrtc: !!ZC.pvrtc,
            etc2: !!ZC.etc2,
            etc1: !!ZC.etc1
          };
        if (NC._WorkerPoolPromise) {
          const ZC = await NC._WorkerPoolPromise;
          return await new Promise(((wC, bC) => {
            ZC.push(((ZC, nC) => {
              const fC = CC => {
                  ZC.removeEventListener("error", fC), ZC.removeEventListener("message", oC), bC(CC), nC()
                },
                oC = CC => {
                  "decoded" === CC.data.action && (ZC.removeEventListener("error", fC), ZC.removeEventListener("message", oC), CC.data.success ? wC(CC.data.decodedData) : bC({
                    message: CC.data.cq
                  }), nC())
                };
              ZC.addEventListener("error", fC), ZC.addEventListener("message", oC), ZC.postMessage({
                action: "setDefaultDecoderOptions",
                options: NC.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const qC = new Uint8Array(CC.byteLength);
              qC.set(new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength)), ZC.postMessage({
                action: "decode",
                data: qC,
                caps: QC,
                options: zC
              }, [qC.buffer])
            }))
          }))
        }
        if (NC._DecoderModulePromise) {
          const QC = await NC._DecoderModulePromise;
          return NC.DefaultDecoderOptions.isDirty && (NC._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = NC.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((wC, bC) => {
            QC.decode(CC, ZC, zC).then((CC => {
              wC(CC)
            })).catch((CC => {
              bC({
                message: CC
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(CC, zC, ZC) {
        if ((CC.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, zC), ZC && (ZC.transcodedFormat = CC.transcodedFormat, ZC.isInGammaSpace = CC.isInGammaSpace, ZC.hasAlpha = CC.hasAlpha, ZC.transcoderName = CC.transcoderName);
        let QC = !0;
        switch (CC.transcodedFormat) {
          case 32856:
            zC.type = 0, zC.format = 5;
            break;
          case 33321:
            zC.type = 0, zC.format = 6;
            break;
          case 33323:
            zC.type = 0, zC.format = 7;
            break;
          default:
            zC.format = CC.transcodedFormat, QC = !1
        }
        if (zC._gammaSpace = CC.isInGammaSpace, zC.generateMipMaps = CC.mipmaps.length > 1, zC.width = CC.mipmaps[0].width, zC.height = CC.mipmaps[0].height, CC.errors) throw new Error("KTX2 container - could not transcode the data. " + CC.errors);
        for (let wC = 0; wC < CC.mipmaps.length; ++wC) {
          const ZC = CC.mipmaps[wC];
          if (!ZC || !ZC.data) throw new Error("KTX2 container - could not transcode one of the image");
          QC ? (zC.width = ZC.width, zC.height = ZC.height, this._engine._uploadDataToTextureDirectly(zC, ZC.data, 0, wC, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(zC, CC.transcodedFormat, ZC.width, ZC.height, ZC.data, 0, wC)
        }
        zC._extension = ".ktx2", zC.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(CC) {
        if (CC.byteLength >= 12) {
          const zC = new Uint8Array(CC.buffer, CC.byteOffset, 12);
          if (171 === zC[0] && 75 === zC[1] && 84 === zC[2] && 88 === zC[3] && 32 === zC[4] && 50 === zC[5] && 48 === zC[6] && 187 === zC[7] && 13 === zC[8] && 10 === zC[9] && 26 === zC[10] && 10 === zC[11]) return !0
        }
        return !1
      }
    }

    function MC(CC) {
      switch (CC) {
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
    NC.URLConfig = {
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
    }, NC.DefaultNumWorkers = NC.GetDefaultNumWorkers(), NC.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(CC) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== CC && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = CC, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(CC) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== CC && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = CC, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(CC) {
        this._forceRGBA !== CC && (this._forceRGBA = CC, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(CC) {
        this._forceR8 !== CC && (this._forceR8 = CC, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(CC) {
        this._forceRG8 !== CC && (this._forceRG8 = CC, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(CC) {
        this._bypassTranscoders !== CC && (this._bypassTranscoders = CC, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const CC = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (CC.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (CC.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (CC.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (CC.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (CC.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (CC.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [nC.BC1_RGB, nC.BC3_RGBA],
            yes: {
              transcodeFormat: nC.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = CC, CC
      }
    };
    class gC {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(CC, zC, ZC, QC) {
        if (Array.isArray(CC)) return;
        zC._invertVScale = !zC.invertY;
        const bC = zC.mg(),
          nC = new wC(CC, 6),
          fC = MC(nC.glInternalFormat);
        null !== fC ? (zC.format = fC, zC._useSRGBBuffer = bC._getUseSRGBBuffer(!0, !zC.generateMipMaps), zC._gammaSpace = !0) : zC.format = nC.glInternalFormat;
        const oC = nC.numberOfMipmapLevels > 1 && zC.generateMipMaps;
        bC._unpackFlipY(!0), nC.uploadLevels(zC, zC.generateMipMaps), zC.width = nC.pixelWidth, zC.height = nC.pixelHeight, bC._setCubeMapTextureParams(zC, oC, nC.numberOfMipmapLevels - 1), zC.isReady = !0, zC.onLoadedObservable.notifyObservers(zC), zC.onLoadedObservable.clear(), QC && QC()
      }
      loadData(CC, zC, ZC, bC) {
        if (wC.IsValid(CC)) {
          zC._invertVScale = !zC.invertY;
          const QC = new wC(CC, 1),
            bC = MC(QC.glInternalFormat);
          null !== bC ? (zC.format = bC, zC._useSRGBBuffer = zC.mg()._getUseSRGBBuffer(!0, !zC.generateMipMaps), zC._gammaSpace = !0) : zC.format = QC.glInternalFormat, ZC(QC.pixelWidth, QC.pixelHeight, zC.generateMipMaps, !0, (() => {
            QC.uploadLevels(zC, zC.generateMipMaps)
          }), QC.isInvalid)
        } else if (NC.IsValid(CC)) {
          new NC(zC.mg())._uploadAsync(CC, zC, bC).then((() => {
            ZC(zC.width, zC.height, zC.generateMipMaps, !0, (() => {}), !1)
          }), (CC => {
            QC.c.Warn(`Failed to load KTX2 texture data: ${CC.message}`), ZC(0, 0, !1, !1, (() => {}), !0)
          }))
        } else QC.c.Error("texture missing KTX identifier"), ZC(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41672: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC
    });
    class QC {
      constructor(CC) {
        this._pendingActions = new Array, this._workerInfos = CC.map((CC => ({
          workerPromise: Promise.resolve(CC),
          idle: !0
        })))
      }
      dispose() {
        for (const CC of this._workerInfos) CC.workerPromise.then((CC => {
          CC.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(CC) {
        this._executeOnIdleWorker(CC) || this._pendingActions.push(CC)
      }
      _executeOnIdleWorker(CC) {
        for (const zC of this._workerInfos)
          if (zC.idle) return this._execute(zC, CC), !0;
        return !1
      }
      _execute(CC, zC) {
        CC.idle = !1, CC.workerPromise.then((ZC => {
          zC(ZC, (() => {
            const zC = this._pendingActions.shift();
            zC ? this._execute(CC, zC) : CC.idle = !0
          }))
        }))
      }
    }
    class wC extends QC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wC.DefaultOptions;
        super([]), this._maxWorkers = CC, this._createWorkerAsync = zC, this._options = ZC
      }
      push(CC) {
        if (!this._executeOnIdleWorker(CC))
          if (this._workerInfos.length < this._maxWorkers) {
            const zC = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(zC), this._execute(zC, CC)
          } else this._pendingActions.push(CC)
      }
      _execute(CC, zC) {
        CC.timeoutId && (clearTimeout(CC.timeoutId), delete CC.timeoutId), super._execute(CC, ((ZC, QC) => {
          zC(ZC, (() => {
            QC(), CC.idle && (CC.timeoutId = setTimeout((() => {
              CC.workerPromise.then((CC => {
                CC.terminate()
              }));
              const zC = this._workerInfos.indexOf(CC); - 1 !== zC && this._workerInfos.splice(zC, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    wC.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);