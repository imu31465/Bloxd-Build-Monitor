export const id = 313;
export const ids = [313];
export const modules = {
  41881: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      _KTXTextureLoader: () => KS
    });
    var tS = gS(38687);
    class bS {
      constructor(SS, HS) {
        if (this.data = SS, this.isInvalid = !1, !bS.IsValid(SS)) return this.isInvalid = !0, void tS.b.Error("texture missing KTX identifier");
        const gS = Uint32Array.BYTES_PER_ELEMENT,
          XS = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * gS),
          xS = 67305985 === XS.getUint32(0, !0);
        return this.glType = XS.getUint32(1 * gS, xS), this.glTypeSize = XS.getUint32(2 * gS, xS), this.glFormat = XS.getUint32(3 * gS, xS), this.glInternalFormat = XS.getUint32(4 * gS, xS), this.glBaseInternalFormat = XS.getUint32(5 * gS, xS), this.pixelWidth = XS.getUint32(6 * gS, xS), this.pixelHeight = XS.getUint32(7 * gS, xS), this.pixelDepth = XS.getUint32(8 * gS, xS), this.numberOfArrayElements = XS.getUint32(9 * gS, xS), this.numberOfFaces = XS.getUint32(10 * gS, xS), this.numberOfMipmapLevels = XS.getUint32(11 * gS, xS), this.bytesOfKeyValueData = XS.getUint32(12 * gS, xS), 0 !== this.glType ? (tS.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (tS.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (tS.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== HS ? (tS.b.Error("number of faces expected" + HS + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = bS.COMPRESSED_2D))
      }
      uploadLevels(SS, HS) {
        switch (this.loadType) {
          case bS.COMPRESSED_2D:
            this._upload2DCompressedLevels(SS, HS);
          case bS.TEX_2D:
          case bS.COMPRESSED_3D:
          case bS.TEX_3D:
        }
      }
      _upload2DCompressedLevels(SS, HS) {
        let gS = bS.HEADER_LEN + this.bytesOfKeyValueData,
          tS = this.pixelWidth,
          XS = this.pixelHeight;
        const xS = HS ? this.numberOfMipmapLevels : 1;
        for (let bS = 0; bS < xS; bS++) {
          const HS = new Int32Array(this.data.buffer, this.data.byteOffset + gS, 1)[0];
          gS += 4;
          for (let xS = 0; xS < this.numberOfFaces; xS++) {
            const NS = new Uint8Array(this.data.buffer, this.data.byteOffset + gS, HS);
            SS.AK()._uploadCompressedDataToTextureDirectly(SS, SS.format, tS, XS, NS, xS, bS), gS += HS, gS += 3 - (HS + 3) % 4
          }
          tS = Math.max(1, .5 * tS), XS = Math.max(1, .5 * XS)
        }
      }
      static IsValid(SS) {
        if (SS.byteLength >= 12) {
          const HS = new Uint8Array(SS.buffer, SS.byteOffset, 12);
          if (171 === HS[0] && 75 === HS[1] && 84 === HS[2] && 88 === HS[3] && 32 === HS[4] && 49 === HS[5] && 49 === HS[6] && 187 === HS[7] && 13 === HS[8] && 10 === HS[9] && 26 === HS[10] && 10 === HS[11]) return !0
        }
        return !1
      }
    }
    bS.HEADER_LEN = 64, bS.COMPRESSED_2D = 0, bS.COMPRESSED_3D = 1, bS.TEX_2D = 2, bS.TEX_3D = 3;
    var XS, xS, NS, qS = gS(41887),
      uS = gS(40133);

    function IS(SS, HS) {
      const gS = HS?.jsDecoderModule || KTX2DECODER;
      SS && (SS.wasmBaseUrl && (gS.Transcoder.WasmBaseUrl = SS.wasmBaseUrl), SS.wasmUASTCToASTC && (gS.LiteTranscoder_UASTC_ASTC.WasmModuleURL = SS.wasmUASTCToASTC), SS.wasmUASTCToBC7 && (gS.LiteTranscoder_UASTC_BC7.WasmModuleURL = SS.wasmUASTCToBC7), SS.wasmUASTCToRGBA_UNORM && (gS.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = SS.wasmUASTCToRGBA_UNORM), SS.wasmUASTCToRGBA_SRGB && (gS.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = SS.wasmUASTCToRGBA_SRGB), SS.wasmUASTCToR8_UNORM && (gS.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = SS.wasmUASTCToR8_UNORM), SS.wasmUASTCToRG8_UNORM && (gS.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = SS.wasmUASTCToRG8_UNORM), SS.jsMSCTranscoder && (gS.MSCTranscoder.JSModuleURL = SS.jsMSCTranscoder), SS.wasmMSCTranscoder && (gS.MSCTranscoder.WasmModuleURL = SS.wasmMSCTranscoder), SS.wasmZSTDDecoder && (gS.ZSTDDecoder.WasmModuleURL = SS.wasmZSTDDecoder)), HS && (HS.wasmUASTCToASTC && (gS.LiteTranscoder_UASTC_ASTC.WasmBinary = HS.wasmUASTCToASTC), HS.wasmUASTCToBC7 && (gS.LiteTranscoder_UASTC_BC7.WasmBinary = HS.wasmUASTCToBC7), HS.wasmUASTCToRGBA_UNORM && (gS.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = HS.wasmUASTCToRGBA_UNORM), HS.wasmUASTCToRGBA_SRGB && (gS.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = HS.wasmUASTCToRGBA_SRGB), HS.wasmUASTCToR8_UNORM && (gS.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = HS.wasmUASTCToR8_UNORM), HS.wasmUASTCToRG8_UNORM && (gS.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = HS.wasmUASTCToRG8_UNORM), HS.jsMSCTranscoder && (gS.MSCTranscoder.JSModule = HS.jsMSCTranscoder), HS.wasmMSCTranscoder && (gS.MSCTranscoder.WasmBinary = HS.wasmMSCTranscoder), HS.wasmZSTDDecoder && (gS.ZSTDDecoder.WasmBinary = HS.wasmZSTDDecoder))
    }

    function fS(SS) {
      let HS;
      "undefined" === typeof SS && "undefined" !== typeof KTX2DECODER && (SS = KTX2DECODER), onmessage = gS => {
        if (gS.data) switch (gS.data.action) {
          case "init": {
            const tS = gS.data.urls;
            tS && (tS.jsDecoderModule && "undefined" === typeof SS && (importScripts(tS.jsDecoderModule), SS = KTX2DECODER), IS(tS)), gS.data.wasmBinaries && IS(void 0, {
              ...gS.data.wasmBinaries,
              jsDecoderModule: SS
            }), HS = new SS.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            SS.KTX2Decoder.DefaultDecoderOptions = gS.data.options;
            break;
          case "decode":
            HS.decode(gS.data.data, gS.data.caps, gS.data.options).then((SS => {
              const HS = [];
              for (let gS = 0; gS < SS.mipmaps.length; ++gS) {
                const tS = SS.mipmaps[gS];
                tS && tS.data && HS.push(tS.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: SS
              }, HS)
            })).catch((SS => {
              postMessage({
                action: "decoded",
                success: !1,
                Ju: SS
              })
            }))
        }
      }
    }! function(SS) {
      SS[SS.ETC1S = 0] = "ETC1S", SS[SS.UASTC4x4 = 1] = "UASTC4x4", SS[SS.RGBA32 = 2] = "RGBA32"
    }(XS || (XS = {})),
    function(SS) {
      SS[SS.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", SS[SS.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", SS[SS.BC7_RGBA = 1] = "BC7_RGBA", SS[SS.BC3_RGBA = 2] = "BC3_RGBA", SS[SS.BC1_RGB = 3] = "BC1_RGB", SS[SS.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", SS[SS.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", SS[SS.ETC2_RGBA = 6] = "ETC2_RGBA", SS[SS.ETC1_RGB = 7] = "ETC1_RGB", SS[SS.RGBA32 = 8] = "RGBA32", SS[SS.R8 = 9] = "R8", SS[SS.RG8 = 10] = "RG8"
    }(xS || (xS = {})),
    function(SS) {
      SS[SS.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", SS[SS.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", SS[SS.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", SS[SS.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", SS[SS.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", SS[SS.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", SS[SS.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", SS[SS.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", SS[SS.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", SS[SS.RGBA8Format = 32856] = "RGBA8Format", SS[SS.R8Format = 33321] = "R8Format", SS[SS.RG8Format = 33323] = "RG8Format"
    }(NS || (NS = {}));
    class kS {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(SS) {
        if (kS._WorkerPoolPromise || kS._DecoderModulePromise) return;
        const HS = {
          wasmBaseUrl: uS.k.ScriptBaseUrl,
          jsDecoderModule: uS.k.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: uS.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: uS.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: uS.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: uS.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: uS.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: uS.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: uS.k.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: uS.k.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: uS.k.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        SS && "function" === typeof Worker && "undefined" !== typeof URL ? kS._WorkerPoolPromise = new Promise((gS => {
          const tS = `${IS}(${fS})()`,
            bS = URL.createObjectURL(new Blob([tS], {
              type: "application/javascript"
            }));
          gS(new qS.e(SS, (async () => await async function(SS, HS, gS) {
            return await new Promise(((tS, bS) => {
              const XS = HS => {
                  SS.removeEventListener("error", XS), SS.removeEventListener("message", xS), bS(HS)
                },
                xS = HS => {
                  "init" === HS.data.action && (SS.removeEventListener("error", XS), SS.removeEventListener("message", xS), tS(SS))
                };
              SS.addEventListener("error", XS), SS.addEventListener("message", xS), SS.postMessage({
                action: "init",
                urls: gS,
                wasmBinaries: HS
              })
            }))
          }(new Worker(bS), void 0, HS))))
        })) : "undefined" === typeof kS._KTX2DecoderModule ? kS._DecoderModulePromise = uS.k.LoadBabylonScriptAsync(HS.jsDecoderModule).then((() => (kS._KTX2DecoderModule = KTX2DECODER, kS._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, kS._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, IS(HS, kS._KTX2DecoderModule), new kS._KTX2DecoderModule.KTX2Decoder))) : (kS._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, kS._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, kS._DecoderModulePromise = Promise.resolve(new kS._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kS.DefaultNumWorkers;
        this._engine = SS;
        const gS = "object" === typeof HS && HS.workerPool || kS.WorkerPool;
        if (gS) kS._WorkerPoolPromise = Promise.resolve(gS);
        else {
          "object" === typeof HS ? kS._KTX2DecoderModule = HS?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (kS._KTX2DecoderModule = KTX2DECODER);
          const SS = "number" === typeof HS ? HS : HS.numWorkers ?? kS.DefaultNumWorkers;
          kS._Initialize(SS)
        }
      }
      async _uploadAsync(SS, HS, gS) {
        const tS = await this._decodeAsync(SS, gS);
        this._createTexture(tS, HS, gS)
      }
      async _decodeAsync(SS, HS) {
        const gS = this._engine.getCaps(),
          tS = {
            astc: !!gS.astc,
            bptc: !!gS.bptc,
            s3tc: !!gS.s3tc,
            pvrtc: !!gS.pvrtc,
            etc2: !!gS.etc2,
            etc1: !!gS.etc1
          };
        if (kS._WorkerPoolPromise) {
          const gS = await kS._WorkerPoolPromise;
          return await new Promise(((bS, XS) => {
            gS.push(((gS, xS) => {
              const NS = SS => {
                  gS.removeEventListener("error", NS), gS.removeEventListener("message", qS), XS(SS), xS()
                },
                qS = SS => {
                  "decoded" === SS.data.action && (gS.removeEventListener("error", NS), gS.removeEventListener("message", qS), SS.data.success ? bS(SS.data.decodedData) : XS({
                    message: SS.data.Ju
                  }), xS())
                };
              gS.addEventListener("error", NS), gS.addEventListener("message", qS), gS.postMessage({
                action: "setDefaultDecoderOptions",
                options: kS.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const uS = new Uint8Array(SS.byteLength);
              uS.set(new Uint8Array(SS.buffer, SS.byteOffset, SS.byteLength)), gS.postMessage({
                action: "decode",
                data: uS,
                caps: tS,
                options: HS
              }, [uS.buffer])
            }))
          }))
        }
        if (kS._DecoderModulePromise) {
          const tS = await kS._DecoderModulePromise;
          return kS.DefaultDecoderOptions.isDirty && (kS._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = kS.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((bS, XS) => {
            tS.decode(SS, gS, HS).then((SS => {
              bS(SS)
            })).catch((SS => {
              XS({
                message: SS
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(SS, HS, gS) {
        if ((SS.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, HS), gS && (gS.transcodedFormat = SS.transcodedFormat, gS.isInGammaSpace = SS.isInGammaSpace, gS.hasAlpha = SS.hasAlpha, gS.transcoderName = SS.transcoderName);
        let tS = !0;
        switch (SS.transcodedFormat) {
          case 32856:
            HS.type = 0, HS.format = 5;
            break;
          case 33321:
            HS.type = 0, HS.format = 6;
            break;
          case 33323:
            HS.type = 0, HS.format = 7;
            break;
          default:
            HS.format = SS.transcodedFormat, tS = !1
        }
        if (HS._gammaSpace = SS.isInGammaSpace, HS.generateMipMaps = SS.mipmaps.length > 1, HS.width = SS.mipmaps[0].width, HS.height = SS.mipmaps[0].height, SS.errors) throw new Error("KTX2 container - could not transcode the data. " + SS.errors);
        for (let bS = 0; bS < SS.mipmaps.length; ++bS) {
          const gS = SS.mipmaps[bS];
          if (!gS || !gS.data) throw new Error("KTX2 container - could not transcode one of the image");
          tS ? (HS.width = gS.width, HS.height = gS.height, this._engine._uploadDataToTextureDirectly(HS, gS.data, 0, bS, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(HS, SS.transcodedFormat, gS.width, gS.height, gS.data, 0, bS)
        }
        HS._extension = ".ktx2", HS.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(SS) {
        if (SS.byteLength >= 12) {
          const HS = new Uint8Array(SS.buffer, SS.byteOffset, 12);
          if (171 === HS[0] && 75 === HS[1] && 84 === HS[2] && 88 === HS[3] && 32 === HS[4] && 50 === HS[5] && 48 === HS[6] && 187 === HS[7] && 13 === HS[8] && 10 === HS[9] && 26 === HS[10] && 10 === HS[11]) return !0
        }
        return !1
      }
    }

    function aS(SS) {
      switch (SS) {
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
    kS.URLConfig = {
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
    }, kS.DefaultNumWorkers = kS.GetDefaultNumWorkers(), kS.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(SS) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== SS && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = SS, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(SS) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== SS && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = SS, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(SS) {
        this._forceRGBA !== SS && (this._forceRGBA = SS, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(SS) {
        this._forceR8 !== SS && (this._forceR8 = SS, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(SS) {
        this._forceRG8 !== SS && (this._forceRG8 = SS, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(SS) {
        this._bypassTranscoders !== SS && (this._bypassTranscoders = SS, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const SS = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (SS.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (SS.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (SS.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (SS.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (SS.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (SS.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [xS.BC1_RGB, xS.BC3_RGBA],
            yes: {
              transcodeFormat: xS.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = SS, SS
      }
    };
    class KS {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(SS, HS, gS, tS) {
        if (Array.isArray(SS)) return;
        HS._invertVScale = !HS.invertY;
        const XS = HS.AK(),
          xS = new bS(SS, 6),
          NS = aS(xS.glInternalFormat);
        null !== NS ? (HS.format = NS, HS._useSRGBBuffer = XS._getUseSRGBBuffer(!0, !HS.generateMipMaps), HS._gammaSpace = !0) : HS.format = xS.glInternalFormat;
        const qS = xS.numberOfMipmapLevels > 1 && HS.generateMipMaps;
        XS._unpackFlipY(!0), xS.uploadLevels(HS, HS.generateMipMaps), HS.width = xS.pixelWidth, HS.height = xS.pixelHeight, XS._setCubeMapTextureParams(HS, qS, xS.numberOfMipmapLevels - 1), HS.isReady = !0, HS.onLoadedObservable.notifyObservers(HS), HS.onLoadedObservable.clear(), tS && tS()
      }
      loadData(SS, HS, gS, XS) {
        if (bS.IsValid(SS)) {
          HS._invertVScale = !HS.invertY;
          const tS = new bS(SS, 1),
            XS = aS(tS.glInternalFormat);
          null !== XS ? (HS.format = XS, HS._useSRGBBuffer = HS.AK()._getUseSRGBBuffer(!0, !HS.generateMipMaps), HS._gammaSpace = !0) : HS.format = tS.glInternalFormat, gS(tS.pixelWidth, tS.pixelHeight, HS.generateMipMaps, !0, (() => {
            tS.uploadLevels(HS, HS.generateMipMaps)
          }), tS.isInvalid)
        } else if (kS.IsValid(SS)) {
          new kS(HS.AK())._uploadAsync(SS, HS, XS).then((() => {
            gS(HS.width, HS.height, HS.generateMipMaps, !0, (() => {}), !1)
          }), (SS => {
            tS.b.Warn(`Failed to load KTX2 texture data: ${SS.message}`), gS(0, 0, !1, !1, (() => {}), !0)
          }))
        } else tS.b.Error("texture missing KTX identifier"), gS(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41887: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    class tS {
      constructor(SS) {
        this._pendingActions = new Array, this._workerInfos = SS.map((SS => ({
          workerPromise: Promise.resolve(SS),
          idle: !0
        })))
      }
      dispose() {
        for (const SS of this._workerInfos) SS.workerPromise.then((SS => {
          SS.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(SS) {
        this._executeOnIdleWorker(SS) || this._pendingActions.push(SS)
      }
      _executeOnIdleWorker(SS) {
        for (const HS of this._workerInfos)
          if (HS.idle) return this._execute(HS, SS), !0;
        return !1
      }
      _execute(SS, HS) {
        SS.idle = !1, SS.workerPromise.then((gS => {
          HS(gS, (() => {
            const HS = this._pendingActions.shift();
            HS ? this._execute(SS, HS) : SS.idle = !0
          }))
        }))
      }
    }
    class bS extends tS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bS.DefaultOptions;
        super([]), this._maxWorkers = SS, this._createWorkerAsync = HS, this._options = gS
      }
      push(SS) {
        if (!this._executeOnIdleWorker(SS))
          if (this._workerInfos.length < this._maxWorkers) {
            const HS = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(HS), this._execute(HS, SS)
          } else this._pendingActions.push(SS)
      }
      _execute(SS, HS) {
        SS.timeoutId && (clearTimeout(SS.timeoutId), delete SS.timeoutId), super._execute(SS, ((gS, tS) => {
          HS(gS, (() => {
            tS(), SS.idle && (SS.timeoutId = setTimeout((() => {
              SS.workerPromise.then((SS => {
                SS.terminate()
              }));
              const HS = this._workerInfos.indexOf(SS); - 1 !== HS && this._workerInfos.splice(HS, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    bS.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);