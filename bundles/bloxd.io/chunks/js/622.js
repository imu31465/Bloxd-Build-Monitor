export const id = 622;
export const ids = [622];
export const modules = {
  44496: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      _KTXTextureLoader: () => hM
    });
    var OM = iM(39711);
    class SM {
      constructor(MM, rM) {
        if (this.data = MM, this.isInvalid = !1, !SM.IsValid(MM)) return this.isInvalid = !0, void OM.e.Error("texture missing KTX identifier");
        const iM = Uint32Array.BYTES_PER_ELEMENT,
          jM = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * iM),
          aM = 67305985 === jM.getUint32(0, !0);
        return this.glType = jM.getUint32(1 * iM, aM), this.glTypeSize = jM.getUint32(2 * iM, aM), this.glFormat = jM.getUint32(3 * iM, aM), this.glInternalFormat = jM.getUint32(4 * iM, aM), this.glBaseInternalFormat = jM.getUint32(5 * iM, aM), this.pixelWidth = jM.getUint32(6 * iM, aM), this.pixelHeight = jM.getUint32(7 * iM, aM), this.pixelDepth = jM.getUint32(8 * iM, aM), this.numberOfArrayElements = jM.getUint32(9 * iM, aM), this.numberOfFaces = jM.getUint32(10 * iM, aM), this.numberOfMipmapLevels = jM.getUint32(11 * iM, aM), this.bytesOfKeyValueData = jM.getUint32(12 * iM, aM), 0 !== this.glType ? (OM.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (OM.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (OM.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== rM ? (OM.e.Error("number of faces expected" + rM + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = SM.COMPRESSED_2D))
      }
      uploadLevels(MM, rM) {
        switch (this.loadType) {
          case SM.COMPRESSED_2D:
            this._upload2DCompressedLevels(MM, rM);
          case SM.TEX_2D:
          case SM.COMPRESSED_3D:
          case SM.TEX_3D:
        }
      }
      _upload2DCompressedLevels(MM, rM) {
        let iM = SM.HEADER_LEN + this.bytesOfKeyValueData,
          OM = this.pixelWidth,
          jM = this.pixelHeight;
        const aM = rM ? this.numberOfMipmapLevels : 1;
        for (let SM = 0; SM < aM; SM++) {
          const rM = new Int32Array(this.data.buffer, this.data.byteOffset + iM, 1)[0];
          iM += 4;
          for (let aM = 0; aM < this.numberOfFaces; aM++) {
            const PM = new Uint8Array(this.data.buffer, this.data.byteOffset + iM, rM);
            MM.ph()._uploadCompressedDataToTextureDirectly(MM, MM.format, OM, jM, PM, aM, SM), iM += rM, iM += 3 - (rM + 3) % 4
          }
          OM = Math.max(1, .5 * OM), jM = Math.max(1, .5 * jM)
        }
      }
      static IsValid(MM) {
        if (MM.byteLength >= 12) {
          const rM = new Uint8Array(MM.buffer, MM.byteOffset, 12);
          if (171 === rM[0] && 75 === rM[1] && 84 === rM[2] && 88 === rM[3] && 32 === rM[4] && 49 === rM[5] && 49 === rM[6] && 187 === rM[7] && 13 === rM[8] && 10 === rM[9] && 26 === rM[10] && 10 === rM[11]) return !0
        }
        return !1
      }
    }
    SM.HEADER_LEN = 64, SM.COMPRESSED_2D = 0, SM.COMPRESSED_3D = 1, SM.TEX_2D = 2, SM.TEX_3D = 3;
    var jM, aM, PM, nM = iM(44499),
      QM = iM(41205);

    function zM(MM, rM) {
      const iM = rM?.jsDecoderModule || KTX2DECODER;
      MM && (MM.wasmBaseUrl && (iM.Transcoder.WasmBaseUrl = MM.wasmBaseUrl), MM.wasmUASTCToASTC && (iM.LiteTranscoder_UASTC_ASTC.WasmModuleURL = MM.wasmUASTCToASTC), MM.wasmUASTCToBC7 && (iM.LiteTranscoder_UASTC_BC7.WasmModuleURL = MM.wasmUASTCToBC7), MM.wasmUASTCToRGBA_UNORM && (iM.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = MM.wasmUASTCToRGBA_UNORM), MM.wasmUASTCToRGBA_SRGB && (iM.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = MM.wasmUASTCToRGBA_SRGB), MM.wasmUASTCToR8_UNORM && (iM.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = MM.wasmUASTCToR8_UNORM), MM.wasmUASTCToRG8_UNORM && (iM.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = MM.wasmUASTCToRG8_UNORM), MM.jsMSCTranscoder && (iM.MSCTranscoder.JSModuleURL = MM.jsMSCTranscoder), MM.wasmMSCTranscoder && (iM.MSCTranscoder.WasmModuleURL = MM.wasmMSCTranscoder), MM.wasmZSTDDecoder && (iM.ZSTDDecoder.WasmModuleURL = MM.wasmZSTDDecoder)), rM && (rM.wasmUASTCToASTC && (iM.LiteTranscoder_UASTC_ASTC.WasmBinary = rM.wasmUASTCToASTC), rM.wasmUASTCToBC7 && (iM.LiteTranscoder_UASTC_BC7.WasmBinary = rM.wasmUASTCToBC7), rM.wasmUASTCToRGBA_UNORM && (iM.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = rM.wasmUASTCToRGBA_UNORM), rM.wasmUASTCToRGBA_SRGB && (iM.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = rM.wasmUASTCToRGBA_SRGB), rM.wasmUASTCToR8_UNORM && (iM.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = rM.wasmUASTCToR8_UNORM), rM.wasmUASTCToRG8_UNORM && (iM.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = rM.wasmUASTCToRG8_UNORM), rM.jsMSCTranscoder && (iM.MSCTranscoder.JSModule = rM.jsMSCTranscoder), rM.wasmMSCTranscoder && (iM.MSCTranscoder.WasmBinary = rM.wasmMSCTranscoder), rM.wasmZSTDDecoder && (iM.ZSTDDecoder.WasmBinary = rM.wasmZSTDDecoder))
    }

    function LM(MM) {
      let rM;
      "undefined" === typeof MM && "undefined" !== typeof KTX2DECODER && (MM = KTX2DECODER), onmessage = iM => {
        if (iM.data) switch (iM.data.action) {
          case "init": {
            const OM = iM.data.urls;
            OM && (OM.jsDecoderModule && "undefined" === typeof MM && (importScripts(OM.jsDecoderModule), MM = KTX2DECODER), zM(OM)), iM.data.wasmBinaries && zM(void 0, {
              ...iM.data.wasmBinaries,
              jsDecoderModule: MM
            }), rM = new MM.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            MM.KTX2Decoder.DefaultDecoderOptions = iM.data.options;
            break;
          case "decode":
            rM.decode(iM.data.data, iM.data.caps, iM.data.options).then((MM => {
              const rM = [];
              for (let iM = 0; iM < MM.mipmaps.length; ++iM) {
                const OM = MM.mipmaps[iM];
                OM && OM.data && rM.push(OM.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: MM
              }, rM)
            })).catch((MM => {
              postMessage({
                action: "decoded",
                success: !1,
                Kz: MM
              })
            }))
        }
      }
    }! function(MM) {
      MM[MM.ETC1S = 0] = "ETC1S", MM[MM.UASTC4x4 = 1] = "UASTC4x4", MM[MM.RGBA32 = 2] = "RGBA32"
    }(jM || (jM = {})),
    function(MM) {
      MM[MM.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", MM[MM.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", MM[MM.BC7_RGBA = 1] = "BC7_RGBA", MM[MM.BC3_RGBA = 2] = "BC3_RGBA", MM[MM.BC1_RGB = 3] = "BC1_RGB", MM[MM.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", MM[MM.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", MM[MM.ETC2_RGBA = 6] = "ETC2_RGBA", MM[MM.ETC1_RGB = 7] = "ETC1_RGB", MM[MM.RGBA32 = 8] = "RGBA32", MM[MM.R8 = 9] = "R8", MM[MM.RG8 = 10] = "RG8"
    }(aM || (aM = {})),
    function(MM) {
      MM[MM.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", MM[MM.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", MM[MM.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", MM[MM.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", MM[MM.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", MM[MM.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", MM[MM.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", MM[MM.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", MM[MM.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", MM[MM.RGBA8Format = 32856] = "RGBA8Format", MM[MM.R8Format = 33321] = "R8Format", MM[MM.RG8Format = 33323] = "RG8Format"
    }(PM || (PM = {}));
    class mM {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(MM) {
        if (mM._WorkerPoolPromise || mM._DecoderModulePromise) return;
        const rM = {
          wasmBaseUrl: QM.e.ScriptBaseUrl,
          jsDecoderModule: QM.e.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: QM.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: QM.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: QM.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: QM.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: QM.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: QM.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: QM.e.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: QM.e.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: QM.e.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        MM && "function" === typeof Worker && "undefined" !== typeof URL ? mM._WorkerPoolPromise = new Promise((iM => {
          const OM = `${zM}(${LM})()`,
            SM = URL.createObjectURL(new Blob([OM], {
              type: "application/javascript"
            }));
          iM(new nM.d(MM, (async () => await async function(MM, rM, iM) {
            return await new Promise(((OM, SM) => {
              const jM = rM => {
                  MM.removeEventListener("error", jM), MM.removeEventListener("message", aM), SM(rM)
                },
                aM = rM => {
                  "init" === rM.data.action && (MM.removeEventListener("error", jM), MM.removeEventListener("message", aM), OM(MM))
                };
              MM.addEventListener("error", jM), MM.addEventListener("message", aM), MM.postMessage({
                action: "init",
                urls: iM,
                wasmBinaries: rM
              })
            }))
          }(new Worker(SM), void 0, rM))))
        })) : "undefined" === typeof mM._KTX2DecoderModule ? mM._DecoderModulePromise = QM.e.LoadBabylonScriptAsync(rM.jsDecoderModule).then((() => (mM._KTX2DecoderModule = KTX2DECODER, mM._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, mM._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, zM(rM, mM._KTX2DecoderModule), new mM._KTX2DecoderModule.KTX2Decoder))) : (mM._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, mM._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, mM._DecoderModulePromise = Promise.resolve(new mM._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mM.DefaultNumWorkers;
        this._engine = MM;
        const iM = "object" === typeof rM && rM.workerPool || mM.WorkerPool;
        if (iM) mM._WorkerPoolPromise = Promise.resolve(iM);
        else {
          "object" === typeof rM ? mM._KTX2DecoderModule = rM?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (mM._KTX2DecoderModule = KTX2DECODER);
          const MM = "number" === typeof rM ? rM : rM.numWorkers ?? mM.DefaultNumWorkers;
          mM._Initialize(MM)
        }
      }
      async _uploadAsync(MM, rM, iM) {
        const OM = await this._decodeAsync(MM, iM);
        this._createTexture(OM, rM, iM)
      }
      async _decodeAsync(MM, rM) {
        const iM = this._engine.getCaps(),
          OM = {
            astc: !!iM.astc,
            bptc: !!iM.bptc,
            s3tc: !!iM.s3tc,
            pvrtc: !!iM.pvrtc,
            etc2: !!iM.etc2,
            etc1: !!iM.etc1
          };
        if (mM._WorkerPoolPromise) {
          const iM = await mM._WorkerPoolPromise;
          return await new Promise(((SM, jM) => {
            iM.push(((iM, aM) => {
              const PM = MM => {
                  iM.removeEventListener("error", PM), iM.removeEventListener("message", nM), jM(MM), aM()
                },
                nM = MM => {
                  "decoded" === MM.data.action && (iM.removeEventListener("error", PM), iM.removeEventListener("message", nM), MM.data.success ? SM(MM.data.decodedData) : jM({
                    message: MM.data.Kz
                  }), aM())
                };
              iM.addEventListener("error", PM), iM.addEventListener("message", nM), iM.postMessage({
                action: "setDefaultDecoderOptions",
                options: mM.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const QM = new Uint8Array(MM.byteLength);
              QM.set(new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength)), iM.postMessage({
                action: "decode",
                data: QM,
                caps: OM,
                options: rM
              }, [QM.buffer])
            }))
          }))
        }
        if (mM._DecoderModulePromise) {
          const OM = await mM._DecoderModulePromise;
          return mM.DefaultDecoderOptions.isDirty && (mM._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = mM.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((SM, jM) => {
            OM.decode(MM, iM, rM).then((MM => {
              SM(MM)
            })).catch((MM => {
              jM({
                message: MM
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(MM, rM, iM) {
        if ((MM.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, rM), iM && (iM.transcodedFormat = MM.transcodedFormat, iM.isInGammaSpace = MM.isInGammaSpace, iM.hasAlpha = MM.hasAlpha, iM.transcoderName = MM.transcoderName);
        let OM = !0;
        switch (MM.transcodedFormat) {
          case 32856:
            rM.type = 0, rM.format = 5;
            break;
          case 33321:
            rM.type = 0, rM.format = 6;
            break;
          case 33323:
            rM.type = 0, rM.format = 7;
            break;
          default:
            rM.format = MM.transcodedFormat, OM = !1
        }
        if (rM._gammaSpace = MM.isInGammaSpace, rM.generateMipMaps = MM.mipmaps.length > 1, rM.width = MM.mipmaps[0].width, rM.height = MM.mipmaps[0].height, MM.errors) throw new Error("KTX2 container - could not transcode the data. " + MM.errors);
        for (let SM = 0; SM < MM.mipmaps.length; ++SM) {
          const iM = MM.mipmaps[SM];
          if (!iM || !iM.data) throw new Error("KTX2 container - could not transcode one of the image");
          OM ? (rM.width = iM.width, rM.height = iM.height, this._engine._uploadDataToTextureDirectly(rM, iM.data, 0, SM, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(rM, MM.transcodedFormat, iM.width, iM.height, iM.data, 0, SM)
        }
        rM._extension = ".ktx2", rM.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(MM) {
        if (MM.byteLength >= 12) {
          const rM = new Uint8Array(MM.buffer, MM.byteOffset, 12);
          if (171 === rM[0] && 75 === rM[1] && 84 === rM[2] && 88 === rM[3] && 32 === rM[4] && 50 === rM[5] && 48 === rM[6] && 187 === rM[7] && 13 === rM[8] && 10 === rM[9] && 26 === rM[10] && 10 === rM[11]) return !0
        }
        return !1
      }
    }

    function HM(MM) {
      switch (MM) {
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
    mM.URLConfig = {
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
    }, mM.DefaultNumWorkers = mM.GetDefaultNumWorkers(), mM.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(MM) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== MM && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = MM, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(MM) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== MM && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = MM, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(MM) {
        this._forceRGBA !== MM && (this._forceRGBA = MM, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(MM) {
        this._forceR8 !== MM && (this._forceR8 = MM, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(MM) {
        this._forceRG8 !== MM && (this._forceRG8 = MM, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(MM) {
        this._bypassTranscoders !== MM && (this._bypassTranscoders = MM, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const MM = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (MM.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (MM.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (MM.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (MM.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (MM.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (MM.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [aM.BC1_RGB, aM.BC3_RGBA],
            yes: {
              transcodeFormat: aM.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = MM, MM
      }
    };
    class hM {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(MM, rM, iM, OM) {
        if (Array.isArray(MM)) return;
        rM._invertVScale = !rM.invertY;
        const jM = rM.ph(),
          aM = new SM(MM, 6),
          PM = HM(aM.glInternalFormat);
        null !== PM ? (rM.format = PM, rM._useSRGBBuffer = jM._getUseSRGBBuffer(!0, !rM.generateMipMaps), rM._gammaSpace = !0) : rM.format = aM.glInternalFormat;
        const nM = aM.numberOfMipmapLevels > 1 && rM.generateMipMaps;
        jM._unpackFlipY(!0), aM.uploadLevels(rM, rM.generateMipMaps), rM.width = aM.pixelWidth, rM.height = aM.pixelHeight, jM._setCubeMapTextureParams(rM, nM, aM.numberOfMipmapLevels - 1), rM.isReady = !0, rM.onLoadedObservable.notifyObservers(rM), rM.onLoadedObservable.clear(), OM && OM()
      }
      loadData(MM, rM, iM, jM) {
        if (SM.IsValid(MM)) {
          rM._invertVScale = !rM.invertY;
          const OM = new SM(MM, 1),
            jM = HM(OM.glInternalFormat);
          null !== jM ? (rM.format = jM, rM._useSRGBBuffer = rM.ph()._getUseSRGBBuffer(!0, !rM.generateMipMaps), rM._gammaSpace = !0) : rM.format = OM.glInternalFormat, iM(OM.pixelWidth, OM.pixelHeight, rM.generateMipMaps, !0, (() => {
            OM.uploadLevels(rM, rM.generateMipMaps)
          }), OM.isInvalid)
        } else if (mM.IsValid(MM)) {
          new mM(rM.ph())._uploadAsync(MM, rM, jM).then((() => {
            iM(rM.width, rM.height, rM.generateMipMaps, !0, (() => {}), !1)
          }), (MM => {
            OM.e.Warn(`Failed to load KTX2 texture data: ${MM.message}`), iM(0, 0, !1, !1, (() => {}), !0)
          }))
        } else OM.e.Error("texture missing KTX identifier"), iM(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  44499: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    class OM {
      constructor(MM) {
        this._pendingActions = new Array, this._workerInfos = MM.map((MM => ({
          workerPromise: Promise.resolve(MM),
          idle: !0
        })))
      }
      dispose() {
        for (const MM of this._workerInfos) MM.workerPromise.then((MM => {
          MM.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(MM) {
        this._executeOnIdleWorker(MM) || this._pendingActions.push(MM)
      }
      _executeOnIdleWorker(MM) {
        for (const rM of this._workerInfos)
          if (rM.idle) return this._execute(rM, MM), !0;
        return !1
      }
      _execute(MM, rM) {
        MM.idle = !1, MM.workerPromise.then((iM => {
          rM(iM, (() => {
            const rM = this._pendingActions.shift();
            rM ? this._execute(MM, rM) : MM.idle = !0
          }))
        }))
      }
    }
    class SM extends OM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SM.DefaultOptions;
        super([]), this._maxWorkers = MM, this._createWorkerAsync = rM, this._options = iM
      }
      push(MM) {
        if (!this._executeOnIdleWorker(MM))
          if (this._workerInfos.length < this._maxWorkers) {
            const rM = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(rM), this._execute(rM, MM)
          } else this._pendingActions.push(MM)
      }
      _execute(MM, rM) {
        MM.timeoutId && (clearTimeout(MM.timeoutId), delete MM.timeoutId), super._execute(MM, ((iM, OM) => {
          rM(iM, (() => {
            OM(), MM.idle && (MM.timeoutId = setTimeout((() => {
              MM.workerPromise.then((MM => {
                MM.terminate()
              }));
              const rM = this._workerInfos.indexOf(MM); - 1 !== rM && this._workerInfos.splice(rM, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    SM.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);