export const id = 303;
export const ids = [303];
export const modules = {
  40959: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      _KTXTextureLoader: () => tD
    });
    var ID = cD(38048);
    class pD {
      constructor(DD, CD) {
        if (this.data = DD, this.isInvalid = !1, !pD.IsValid(DD)) return this.isInvalid = !0, void ID.e.Error("texture missing KTX identifier");
        const cD = Uint32Array.BYTES_PER_ELEMENT,
          iD = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * cD),
          fD = 67305985 === iD.getUint32(0, !0);
        return this.glType = iD.getUint32(1 * cD, fD), this.glTypeSize = iD.getUint32(2 * cD, fD), this.glFormat = iD.getUint32(3 * cD, fD), this.glInternalFormat = iD.getUint32(4 * cD, fD), this.glBaseInternalFormat = iD.getUint32(5 * cD, fD), this.pixelWidth = iD.getUint32(6 * cD, fD), this.pixelHeight = iD.getUint32(7 * cD, fD), this.pixelDepth = iD.getUint32(8 * cD, fD), this.numberOfArrayElements = iD.getUint32(9 * cD, fD), this.numberOfFaces = iD.getUint32(10 * cD, fD), this.numberOfMipmapLevels = iD.getUint32(11 * cD, fD), this.bytesOfKeyValueData = iD.getUint32(12 * cD, fD), 0 !== this.glType ? (ID.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (ID.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (ID.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== CD ? (ID.e.Error("number of faces expected" + CD + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = pD.COMPRESSED_2D))
      }
      uploadLevels(DD, CD) {
        switch (this.loadType) {
          case pD.COMPRESSED_2D:
            this._upload2DCompressedLevels(DD, CD);
          case pD.TEX_2D:
          case pD.COMPRESSED_3D:
          case pD.TEX_3D:
        }
      }
      _upload2DCompressedLevels(DD, CD) {
        let cD = pD.HEADER_LEN + this.bytesOfKeyValueData,
          ID = this.pixelWidth,
          iD = this.pixelHeight;
        const fD = CD ? this.numberOfMipmapLevels : 1;
        for (let pD = 0; pD < fD; pD++) {
          const CD = new Int32Array(this.data.buffer, this.data.byteOffset + cD, 1)[0];
          cD += 4;
          for (let fD = 0; fD < this.numberOfFaces; fD++) {
            const bD = new Uint8Array(this.data.buffer, this.data.byteOffset + cD, CD);
            DD.DZ()._uploadCompressedDataToTextureDirectly(DD, DD.format, ID, iD, bD, fD, pD), cD += CD, cD += 3 - (CD + 3) % 4
          }
          ID = Math.max(1, .5 * ID), iD = Math.max(1, .5 * iD)
        }
      }
      static IsValid(DD) {
        if (DD.byteLength >= 12) {
          const CD = new Uint8Array(DD.buffer, DD.byteOffset, 12);
          if (171 === CD[0] && 75 === CD[1] && 84 === CD[2] && 88 === CD[3] && 32 === CD[4] && 49 === CD[5] && 49 === CD[6] && 187 === CD[7] && 13 === CD[8] && 10 === CD[9] && 26 === CD[10] && 10 === CD[11]) return !0
        }
        return !1
      }
    }
    pD.HEADER_LEN = 64, pD.COMPRESSED_2D = 0, pD.COMPRESSED_3D = 1, pD.TEX_2D = 2, pD.TEX_3D = 3;
    var iD, fD, bD, QD = cD(40963),
      wD = cD(39245);

    function SD(DD, CD) {
      const cD = CD?.jsDecoderModule || KTX2DECODER;
      DD && (DD.wasmBaseUrl && (cD.Transcoder.WasmBaseUrl = DD.wasmBaseUrl), DD.wasmUASTCToASTC && (cD.LiteTranscoder_UASTC_ASTC.WasmModuleURL = DD.wasmUASTCToASTC), DD.wasmUASTCToBC7 && (cD.LiteTranscoder_UASTC_BC7.WasmModuleURL = DD.wasmUASTCToBC7), DD.wasmUASTCToRGBA_UNORM && (cD.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = DD.wasmUASTCToRGBA_UNORM), DD.wasmUASTCToRGBA_SRGB && (cD.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = DD.wasmUASTCToRGBA_SRGB), DD.wasmUASTCToR8_UNORM && (cD.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = DD.wasmUASTCToR8_UNORM), DD.wasmUASTCToRG8_UNORM && (cD.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = DD.wasmUASTCToRG8_UNORM), DD.jsMSCTranscoder && (cD.MSCTranscoder.JSModuleURL = DD.jsMSCTranscoder), DD.wasmMSCTranscoder && (cD.MSCTranscoder.WasmModuleURL = DD.wasmMSCTranscoder), DD.wasmZSTDDecoder && (cD.ZSTDDecoder.WasmModuleURL = DD.wasmZSTDDecoder)), CD && (CD.wasmUASTCToASTC && (cD.LiteTranscoder_UASTC_ASTC.WasmBinary = CD.wasmUASTCToASTC), CD.wasmUASTCToBC7 && (cD.LiteTranscoder_UASTC_BC7.WasmBinary = CD.wasmUASTCToBC7), CD.wasmUASTCToRGBA_UNORM && (cD.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = CD.wasmUASTCToRGBA_UNORM), CD.wasmUASTCToRGBA_SRGB && (cD.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = CD.wasmUASTCToRGBA_SRGB), CD.wasmUASTCToR8_UNORM && (cD.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = CD.wasmUASTCToR8_UNORM), CD.wasmUASTCToRG8_UNORM && (cD.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = CD.wasmUASTCToRG8_UNORM), CD.jsMSCTranscoder && (cD.MSCTranscoder.JSModule = CD.jsMSCTranscoder), CD.wasmMSCTranscoder && (cD.MSCTranscoder.WasmBinary = CD.wasmMSCTranscoder), CD.wasmZSTDDecoder && (cD.ZSTDDecoder.WasmBinary = CD.wasmZSTDDecoder))
    }

    function BD(DD) {
      let CD;
      "undefined" === typeof DD && "undefined" !== typeof KTX2DECODER && (DD = KTX2DECODER), onmessage = cD => {
        if (cD.data) switch (cD.data.action) {
          case "init": {
            const ID = cD.data.urls;
            ID && (ID.jsDecoderModule && "undefined" === typeof DD && (importScripts(ID.jsDecoderModule), DD = KTX2DECODER), SD(ID)), cD.data.wasmBinaries && SD(void 0, {
              ...cD.data.wasmBinaries,
              jsDecoderModule: DD
            }), CD = new DD.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            DD.KTX2Decoder.DefaultDecoderOptions = cD.data.options;
            break;
          case "decode":
            CD.decode(cD.data.data, cD.data.caps, cD.data.options).then((DD => {
              const CD = [];
              for (let cD = 0; cD < DD.mipmaps.length; ++cD) {
                const ID = DD.mipmaps[cD];
                ID && ID.data && CD.push(ID.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: DD
              }, CD)
            })).catch((DD => {
              postMessage({
                action: "decoded",
                success: !1,
                Rf: DD
              })
            }))
        }
      }
    }! function(DD) {
      DD[DD.ETC1S = 0] = "ETC1S", DD[DD.UASTC4x4 = 1] = "UASTC4x4", DD[DD.RGBA32 = 2] = "RGBA32"
    }(iD || (iD = {})),
    function(DD) {
      DD[DD.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", DD[DD.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", DD[DD.BC7_RGBA = 1] = "BC7_RGBA", DD[DD.BC3_RGBA = 2] = "BC3_RGBA", DD[DD.BC1_RGB = 3] = "BC1_RGB", DD[DD.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", DD[DD.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", DD[DD.ETC2_RGBA = 6] = "ETC2_RGBA", DD[DD.ETC1_RGB = 7] = "ETC1_RGB", DD[DD.RGBA32 = 8] = "RGBA32", DD[DD.R8 = 9] = "R8", DD[DD.RG8 = 10] = "RG8"
    }(fD || (fD = {})),
    function(DD) {
      DD[DD.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", DD[DD.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", DD[DD.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", DD[DD.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", DD[DD.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", DD[DD.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", DD[DD.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", DD[DD.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", DD[DD.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", DD[DD.RGBA8Format = 32856] = "RGBA8Format", DD[DD.R8Format = 33321] = "R8Format", DD[DD.RG8Format = 33323] = "RG8Format"
    }(bD || (bD = {}));
    class yD {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(DD) {
        if (yD._WorkerPoolPromise || yD._DecoderModulePromise) return;
        const CD = {
          wasmBaseUrl: wD.g.ScriptBaseUrl,
          jsDecoderModule: wD.g.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: wD.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: wD.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: wD.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: wD.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: wD.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: wD.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: wD.g.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: wD.g.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: wD.g.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        DD && "function" === typeof Worker && "undefined" !== typeof URL ? yD._WorkerPoolPromise = new Promise((cD => {
          const ID = `${SD}(${BD})()`,
            pD = URL.createObjectURL(new Blob([ID], {
              type: "application/javascript"
            }));
          cD(new QD.b(DD, (async () => await async function(DD, CD, cD) {
            return await new Promise(((ID, pD) => {
              const iD = CD => {
                  DD.removeEventListener("error", iD), DD.removeEventListener("message", fD), pD(CD)
                },
                fD = CD => {
                  "init" === CD.data.action && (DD.removeEventListener("error", iD), DD.removeEventListener("message", fD), ID(DD))
                };
              DD.addEventListener("error", iD), DD.addEventListener("message", fD), DD.postMessage({
                action: "init",
                urls: cD,
                wasmBinaries: CD
              })
            }))
          }(new Worker(pD), void 0, CD))))
        })) : "undefined" === typeof yD._KTX2DecoderModule ? yD._DecoderModulePromise = wD.g.LoadBabylonScriptAsync(CD.jsDecoderModule).then((() => (yD._KTX2DecoderModule = KTX2DECODER, yD._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, yD._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, SD(CD, yD._KTX2DecoderModule), new yD._KTX2DecoderModule.KTX2Decoder))) : (yD._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, yD._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, yD._DecoderModulePromise = Promise.resolve(new yD._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yD.DefaultNumWorkers;
        this._engine = DD;
        const cD = "object" === typeof CD && CD.workerPool || yD.WorkerPool;
        if (cD) yD._WorkerPoolPromise = Promise.resolve(cD);
        else {
          "object" === typeof CD ? yD._KTX2DecoderModule = CD?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (yD._KTX2DecoderModule = KTX2DECODER);
          const DD = "number" === typeof CD ? CD : CD.numWorkers ?? yD.DefaultNumWorkers;
          yD._Initialize(DD)
        }
      }
      async _uploadAsync(DD, CD, cD) {
        const ID = await this._decodeAsync(DD, cD);
        this._createTexture(ID, CD, cD)
      }
      async _decodeAsync(DD, CD) {
        const cD = this._engine.getCaps(),
          ID = {
            astc: !!cD.astc,
            bptc: !!cD.bptc,
            s3tc: !!cD.s3tc,
            pvrtc: !!cD.pvrtc,
            etc2: !!cD.etc2,
            etc1: !!cD.etc1
          };
        if (yD._WorkerPoolPromise) {
          const cD = await yD._WorkerPoolPromise;
          return await new Promise(((pD, iD) => {
            cD.push(((cD, fD) => {
              const bD = DD => {
                  cD.removeEventListener("error", bD), cD.removeEventListener("message", QD), iD(DD), fD()
                },
                QD = DD => {
                  "decoded" === DD.data.action && (cD.removeEventListener("error", bD), cD.removeEventListener("message", QD), DD.data.success ? pD(DD.data.decodedData) : iD({
                    message: DD.data.Rf
                  }), fD())
                };
              cD.addEventListener("error", bD), cD.addEventListener("message", QD), cD.postMessage({
                action: "setDefaultDecoderOptions",
                options: yD.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const wD = new Uint8Array(DD.byteLength);
              wD.set(new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength)), cD.postMessage({
                action: "decode",
                data: wD,
                caps: ID,
                options: CD
              }, [wD.buffer])
            }))
          }))
        }
        if (yD._DecoderModulePromise) {
          const ID = await yD._DecoderModulePromise;
          return yD.DefaultDecoderOptions.isDirty && (yD._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = yD.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((pD, iD) => {
            ID.decode(DD, cD, CD).then((DD => {
              pD(DD)
            })).catch((DD => {
              iD({
                message: DD
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(DD, CD, cD) {
        if ((DD.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, CD), cD && (cD.transcodedFormat = DD.transcodedFormat, cD.isInGammaSpace = DD.isInGammaSpace, cD.hasAlpha = DD.hasAlpha, cD.transcoderName = DD.transcoderName);
        let ID = !0;
        switch (DD.transcodedFormat) {
          case 32856:
            CD.type = 0, CD.format = 5;
            break;
          case 33321:
            CD.type = 0, CD.format = 6;
            break;
          case 33323:
            CD.type = 0, CD.format = 7;
            break;
          default:
            CD.format = DD.transcodedFormat, ID = !1
        }
        if (CD._gammaSpace = DD.isInGammaSpace, CD.generateMipMaps = DD.mipmaps.length > 1, CD.width = DD.mipmaps[0].width, CD.height = DD.mipmaps[0].height, DD.errors) throw new Error("KTX2 container - could not transcode the data. " + DD.errors);
        for (let pD = 0; pD < DD.mipmaps.length; ++pD) {
          const cD = DD.mipmaps[pD];
          if (!cD || !cD.data) throw new Error("KTX2 container - could not transcode one of the image");
          ID ? (CD.width = cD.width, CD.height = cD.height, this._engine._uploadDataToTextureDirectly(CD, cD.data, 0, pD, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(CD, DD.transcodedFormat, cD.width, cD.height, cD.data, 0, pD)
        }
        CD._extension = ".ktx2", CD.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(DD) {
        if (DD.byteLength >= 12) {
          const CD = new Uint8Array(DD.buffer, DD.byteOffset, 12);
          if (171 === CD[0] && 75 === CD[1] && 84 === CD[2] && 88 === CD[3] && 32 === CD[4] && 50 === CD[5] && 48 === CD[6] && 187 === CD[7] && 13 === CD[8] && 10 === CD[9] && 26 === CD[10] && 10 === CD[11]) return !0
        }
        return !1
      }
    }

    function MD(DD) {
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
    yD.URLConfig = {
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
    }, yD.DefaultNumWorkers = yD.GetDefaultNumWorkers(), yD.DefaultDecoderOptions = new class {
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
            transcodeFormat: [fD.BC1_RGB, fD.BC3_RGBA],
            yes: {
              transcodeFormat: fD.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = DD, DD
      }
    };
    class tD {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(DD, CD, cD, ID) {
        if (Array.isArray(DD)) return;
        CD._invertVScale = !CD.invertY;
        const iD = CD.DZ(),
          fD = new pD(DD, 6),
          bD = MD(fD.glInternalFormat);
        null !== bD ? (CD.format = bD, CD._useSRGBBuffer = iD._getUseSRGBBuffer(!0, !CD.generateMipMaps), CD._gammaSpace = !0) : CD.format = fD.glInternalFormat;
        const QD = fD.numberOfMipmapLevels > 1 && CD.generateMipMaps;
        iD._unpackFlipY(!0), fD.uploadLevels(CD, CD.generateMipMaps), CD.width = fD.pixelWidth, CD.height = fD.pixelHeight, iD._setCubeMapTextureParams(CD, QD, fD.numberOfMipmapLevels - 1), CD.isReady = !0, CD.onLoadedObservable.notifyObservers(CD), CD.onLoadedObservable.clear(), ID && ID()
      }
      loadData(DD, CD, cD, iD) {
        if (pD.IsValid(DD)) {
          CD._invertVScale = !CD.invertY;
          const ID = new pD(DD, 1),
            iD = MD(ID.glInternalFormat);
          null !== iD ? (CD.format = iD, CD._useSRGBBuffer = CD.DZ()._getUseSRGBBuffer(!0, !CD.generateMipMaps), CD._gammaSpace = !0) : CD.format = ID.glInternalFormat, cD(ID.pixelWidth, ID.pixelHeight, CD.generateMipMaps, !0, (() => {
            ID.uploadLevels(CD, CD.generateMipMaps)
          }), ID.isInvalid)
        } else if (yD.IsValid(DD)) {
          new yD(CD.DZ())._uploadAsync(DD, CD, iD).then((() => {
            cD(CD.width, CD.height, CD.generateMipMaps, !0, (() => {}), !1)
          }), (DD => {
            ID.e.Warn(`Failed to load KTX2 texture data: ${DD.message}`), cD(0, 0, !1, !1, (() => {}), !0)
          }))
        } else ID.e.Error("texture missing KTX identifier"), cD(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  40963: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD
    });
    class ID {
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
        for (const CD of this._workerInfos)
          if (CD.idle) return this._execute(CD, DD), !0;
        return !1
      }
      _execute(DD, CD) {
        DD.idle = !1, DD.workerPromise.then((cD => {
          CD(cD, (() => {
            const CD = this._pendingActions.shift();
            CD ? this._execute(DD, CD) : DD.idle = !0
          }))
        }))
      }
    }
    class pD extends ID {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pD.DefaultOptions;
        super([]), this._maxWorkers = DD, this._createWorkerAsync = CD, this._options = cD
      }
      push(DD) {
        if (!this._executeOnIdleWorker(DD))
          if (this._workerInfos.length < this._maxWorkers) {
            const CD = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(CD), this._execute(CD, DD)
          } else this._pendingActions.push(DD)
      }
      _execute(DD, CD) {
        DD.timeoutId && (clearTimeout(DD.timeoutId), delete DD.timeoutId), super._execute(DD, ((cD, ID) => {
          CD(cD, (() => {
            ID(), DD.idle && (DD.timeoutId = setTimeout((() => {
              DD.workerPromise.then((DD => {
                DD.terminate()
              }));
              const CD = this._workerInfos.indexOf(DD); - 1 !== CD && this._workerInfos.splice(CD, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    pD.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);