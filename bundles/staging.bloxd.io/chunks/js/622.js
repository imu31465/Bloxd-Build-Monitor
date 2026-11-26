export const id = 622;
export const ids = [622];
export const modules = {
  44993: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      _KTXTextureLoader: () => pB
    });
    var YB = GB(39366);
    class DB {
      constructor(BB, OB) {
        if (this.data = BB, this.isInvalid = !1, !DB.IsValid(BB)) return this.isInvalid = !0, void YB.b.Error("texture missing KTX identifier");
        const GB = Uint32Array.BYTES_PER_ELEMENT,
          QB = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * GB),
          oB = 67305985 === QB.getUint32(0, !0);
        return this.glType = QB.getUint32(1 * GB, oB), this.glTypeSize = QB.getUint32(2 * GB, oB), this.glFormat = QB.getUint32(3 * GB, oB), this.glInternalFormat = QB.getUint32(4 * GB, oB), this.glBaseInternalFormat = QB.getUint32(5 * GB, oB), this.pixelWidth = QB.getUint32(6 * GB, oB), this.pixelHeight = QB.getUint32(7 * GB, oB), this.pixelDepth = QB.getUint32(8 * GB, oB), this.numberOfArrayElements = QB.getUint32(9 * GB, oB), this.numberOfFaces = QB.getUint32(10 * GB, oB), this.numberOfMipmapLevels = QB.getUint32(11 * GB, oB), this.bytesOfKeyValueData = QB.getUint32(12 * GB, oB), 0 !== this.glType ? (YB.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (YB.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (YB.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== OB ? (YB.b.Error("number of faces expected" + OB + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = DB.COMPRESSED_2D))
      }
      uploadLevels(BB, OB) {
        switch (this.loadType) {
          case DB.COMPRESSED_2D:
            this._upload2DCompressedLevels(BB, OB);
          case DB.TEX_2D:
          case DB.COMPRESSED_3D:
          case DB.TEX_3D:
        }
      }
      _upload2DCompressedLevels(BB, OB) {
        let GB = DB.HEADER_LEN + this.bytesOfKeyValueData,
          YB = this.pixelWidth,
          QB = this.pixelHeight;
        const oB = OB ? this.numberOfMipmapLevels : 1;
        for (let DB = 0; DB < oB; DB++) {
          const OB = new Int32Array(this.data.buffer, this.data.byteOffset + GB, 1)[0];
          GB += 4;
          for (let oB = 0; oB < this.numberOfFaces; oB++) {
            const jB = new Uint8Array(this.data.buffer, this.data.byteOffset + GB, OB);
            BB.Lp()._uploadCompressedDataToTextureDirectly(BB, BB.format, YB, QB, jB, oB, DB), GB += OB, GB += 3 - (OB + 3) % 4
          }
          YB = Math.max(1, .5 * YB), QB = Math.max(1, .5 * QB)
        }
      }
      static IsValid(BB) {
        if (BB.byteLength >= 12) {
          const OB = new Uint8Array(BB.buffer, BB.byteOffset, 12);
          if (171 === OB[0] && 75 === OB[1] && 84 === OB[2] && 88 === OB[3] && 32 === OB[4] && 49 === OB[5] && 49 === OB[6] && 187 === OB[7] && 13 === OB[8] && 10 === OB[9] && 26 === OB[10] && 10 === OB[11]) return !0
        }
        return !1
      }
    }
    DB.HEADER_LEN = 64, DB.COMPRESSED_2D = 0, DB.COMPRESSED_3D = 1, DB.TEX_2D = 2, DB.TEX_3D = 3;
    var QB, oB, jB, yB = GB(44999),
      JB = GB(41097);

    function MB(BB, OB) {
      const GB = OB?.jsDecoderModule || KTX2DECODER;
      BB && (BB.wasmBaseUrl && (GB.Transcoder.WasmBaseUrl = BB.wasmBaseUrl), BB.wasmUASTCToASTC && (GB.LiteTranscoder_UASTC_ASTC.WasmModuleURL = BB.wasmUASTCToASTC), BB.wasmUASTCToBC7 && (GB.LiteTranscoder_UASTC_BC7.WasmModuleURL = BB.wasmUASTCToBC7), BB.wasmUASTCToRGBA_UNORM && (GB.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = BB.wasmUASTCToRGBA_UNORM), BB.wasmUASTCToRGBA_SRGB && (GB.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = BB.wasmUASTCToRGBA_SRGB), BB.wasmUASTCToR8_UNORM && (GB.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = BB.wasmUASTCToR8_UNORM), BB.wasmUASTCToRG8_UNORM && (GB.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = BB.wasmUASTCToRG8_UNORM), BB.jsMSCTranscoder && (GB.MSCTranscoder.JSModuleURL = BB.jsMSCTranscoder), BB.wasmMSCTranscoder && (GB.MSCTranscoder.WasmModuleURL = BB.wasmMSCTranscoder), BB.wasmZSTDDecoder && (GB.ZSTDDecoder.WasmModuleURL = BB.wasmZSTDDecoder)), OB && (OB.wasmUASTCToASTC && (GB.LiteTranscoder_UASTC_ASTC.WasmBinary = OB.wasmUASTCToASTC), OB.wasmUASTCToBC7 && (GB.LiteTranscoder_UASTC_BC7.WasmBinary = OB.wasmUASTCToBC7), OB.wasmUASTCToRGBA_UNORM && (GB.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = OB.wasmUASTCToRGBA_UNORM), OB.wasmUASTCToRGBA_SRGB && (GB.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = OB.wasmUASTCToRGBA_SRGB), OB.wasmUASTCToR8_UNORM && (GB.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = OB.wasmUASTCToR8_UNORM), OB.wasmUASTCToRG8_UNORM && (GB.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = OB.wasmUASTCToRG8_UNORM), OB.jsMSCTranscoder && (GB.MSCTranscoder.JSModule = OB.jsMSCTranscoder), OB.wasmMSCTranscoder && (GB.MSCTranscoder.WasmBinary = OB.wasmMSCTranscoder), OB.wasmZSTDDecoder && (GB.ZSTDDecoder.WasmBinary = OB.wasmZSTDDecoder))
    }

    function PB(BB) {
      let OB;
      "undefined" === typeof BB && "undefined" !== typeof KTX2DECODER && (BB = KTX2DECODER), onmessage = GB => {
        if (GB.data) switch (GB.data.action) {
          case "init": {
            const YB = GB.data.urls;
            YB && (YB.jsDecoderModule && "undefined" === typeof BB && (importScripts(YB.jsDecoderModule), BB = KTX2DECODER), MB(YB)), GB.data.wasmBinaries && MB(void 0, {
              ...GB.data.wasmBinaries,
              jsDecoderModule: BB
            }), OB = new BB.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            BB.KTX2Decoder.DefaultDecoderOptions = GB.data.options;
            break;
          case "decode":
            OB.decode(GB.data.data, GB.data.caps, GB.data.options).then((BB => {
              const OB = [];
              for (let GB = 0; GB < BB.mipmaps.length; ++GB) {
                const YB = BB.mipmaps[GB];
                YB && YB.data && OB.push(YB.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: BB
              }, OB)
            })).catch((BB => {
              postMessage({
                action: "decoded",
                success: !1,
                ty: BB
              })
            }))
        }
      }
    }! function(BB) {
      BB[BB.ETC1S = 0] = "ETC1S", BB[BB.UASTC4x4 = 1] = "UASTC4x4", BB[BB.RGBA32 = 2] = "RGBA32"
    }(QB || (QB = {})),
    function(BB) {
      BB[BB.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", BB[BB.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", BB[BB.BC7_RGBA = 1] = "BC7_RGBA", BB[BB.BC3_RGBA = 2] = "BC3_RGBA", BB[BB.BC1_RGB = 3] = "BC1_RGB", BB[BB.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", BB[BB.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", BB[BB.ETC2_RGBA = 6] = "ETC2_RGBA", BB[BB.ETC1_RGB = 7] = "ETC1_RGB", BB[BB.RGBA32 = 8] = "RGBA32", BB[BB.R8 = 9] = "R8", BB[BB.RG8 = 10] = "RG8"
    }(oB || (oB = {})),
    function(BB) {
      BB[BB.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", BB[BB.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", BB[BB.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", BB[BB.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", BB[BB.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", BB[BB.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", BB[BB.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", BB[BB.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", BB[BB.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", BB[BB.RGBA8Format = 32856] = "RGBA8Format", BB[BB.R8Format = 33321] = "R8Format", BB[BB.RG8Format = 33323] = "RG8Format"
    }(jB || (jB = {}));
    class zB {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(BB) {
        if (zB._WorkerPoolPromise || zB._DecoderModulePromise) return;
        const OB = {
          wasmBaseUrl: JB.j.ScriptBaseUrl,
          jsDecoderModule: JB.j.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: JB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: JB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: JB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: JB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: JB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: JB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: JB.j.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: JB.j.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: JB.j.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        BB && "function" === typeof Worker && "undefined" !== typeof URL ? zB._WorkerPoolPromise = new Promise((GB => {
          const YB = `${MB}(${PB})()`,
            DB = URL.createObjectURL(new Blob([YB], {
              type: "application/javascript"
            }));
          GB(new yB.c(BB, (async () => await async function(BB, OB, GB) {
            return await new Promise(((YB, DB) => {
              const QB = OB => {
                  BB.removeEventListener("error", QB), BB.removeEventListener("message", oB), DB(OB)
                },
                oB = OB => {
                  "init" === OB.data.action && (BB.removeEventListener("error", QB), BB.removeEventListener("message", oB), YB(BB))
                };
              BB.addEventListener("error", QB), BB.addEventListener("message", oB), BB.postMessage({
                action: "init",
                urls: GB,
                wasmBinaries: OB
              })
            }))
          }(new Worker(DB), void 0, OB))))
        })) : "undefined" === typeof zB._KTX2DecoderModule ? zB._DecoderModulePromise = JB.j.LoadBabylonScriptAsync(OB.jsDecoderModule).then((() => (zB._KTX2DecoderModule = KTX2DECODER, zB._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, zB._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, MB(OB, zB._KTX2DecoderModule), new zB._KTX2DecoderModule.KTX2Decoder))) : (zB._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, zB._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, zB._DecoderModulePromise = Promise.resolve(new zB._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zB.DefaultNumWorkers;
        this._engine = BB;
        const GB = "object" === typeof OB && OB.workerPool || zB.WorkerPool;
        if (GB) zB._WorkerPoolPromise = Promise.resolve(GB);
        else {
          "object" === typeof OB ? zB._KTX2DecoderModule = OB?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (zB._KTX2DecoderModule = KTX2DECODER);
          const BB = "number" === typeof OB ? OB : OB.numWorkers ?? zB.DefaultNumWorkers;
          zB._Initialize(BB)
        }
      }
      async _uploadAsync(BB, OB, GB) {
        const YB = await this._decodeAsync(BB, GB);
        this._createTexture(YB, OB, GB)
      }
      async _decodeAsync(BB, OB) {
        const GB = this._engine.getCaps(),
          YB = {
            astc: !!GB.astc,
            bptc: !!GB.bptc,
            s3tc: !!GB.s3tc,
            pvrtc: !!GB.pvrtc,
            etc2: !!GB.etc2,
            etc1: !!GB.etc1
          };
        if (zB._WorkerPoolPromise) {
          const GB = await zB._WorkerPoolPromise;
          return await new Promise(((DB, QB) => {
            GB.push(((GB, oB) => {
              const jB = BB => {
                  GB.removeEventListener("error", jB), GB.removeEventListener("message", yB), QB(BB), oB()
                },
                yB = BB => {
                  "decoded" === BB.data.action && (GB.removeEventListener("error", jB), GB.removeEventListener("message", yB), BB.data.success ? DB(BB.data.decodedData) : QB({
                    message: BB.data.ty
                  }), oB())
                };
              GB.addEventListener("error", jB), GB.addEventListener("message", yB), GB.postMessage({
                action: "setDefaultDecoderOptions",
                options: zB.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const JB = new Uint8Array(BB.byteLength);
              JB.set(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength)), GB.postMessage({
                action: "decode",
                data: JB,
                caps: YB,
                options: OB
              }, [JB.buffer])
            }))
          }))
        }
        if (zB._DecoderModulePromise) {
          const YB = await zB._DecoderModulePromise;
          return zB.DefaultDecoderOptions.isDirty && (zB._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = zB.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((DB, QB) => {
            YB.decode(BB, GB, OB).then((BB => {
              DB(BB)
            })).catch((BB => {
              QB({
                message: BB
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(BB, OB, GB) {
        if ((BB.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, OB), GB && (GB.transcodedFormat = BB.transcodedFormat, GB.isInGammaSpace = BB.isInGammaSpace, GB.hasAlpha = BB.hasAlpha, GB.transcoderName = BB.transcoderName);
        let YB = !0;
        switch (BB.transcodedFormat) {
          case 32856:
            OB.type = 0, OB.format = 5;
            break;
          case 33321:
            OB.type = 0, OB.format = 6;
            break;
          case 33323:
            OB.type = 0, OB.format = 7;
            break;
          default:
            OB.format = BB.transcodedFormat, YB = !1
        }
        if (OB._gammaSpace = BB.isInGammaSpace, OB.generateMipMaps = BB.mipmaps.length > 1, OB.width = BB.mipmaps[0].width, OB.height = BB.mipmaps[0].height, BB.errors) throw new Error("KTX2 container - could not transcode the data. " + BB.errors);
        for (let DB = 0; DB < BB.mipmaps.length; ++DB) {
          const GB = BB.mipmaps[DB];
          if (!GB || !GB.data) throw new Error("KTX2 container - could not transcode one of the image");
          YB ? (OB.width = GB.width, OB.height = GB.height, this._engine._uploadDataToTextureDirectly(OB, GB.data, 0, DB, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(OB, BB.transcodedFormat, GB.width, GB.height, GB.data, 0, DB)
        }
        OB._extension = ".ktx2", OB.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(BB) {
        if (BB.byteLength >= 12) {
          const OB = new Uint8Array(BB.buffer, BB.byteOffset, 12);
          if (171 === OB[0] && 75 === OB[1] && 84 === OB[2] && 88 === OB[3] && 32 === OB[4] && 50 === OB[5] && 48 === OB[6] && 187 === OB[7] && 13 === OB[8] && 10 === OB[9] && 26 === OB[10] && 10 === OB[11]) return !0
        }
        return !1
      }
    }

    function lB(BB) {
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
    zB.URLConfig = {
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
    }, zB.DefaultNumWorkers = zB.GetDefaultNumWorkers(), zB.DefaultDecoderOptions = new class {
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
            transcodeFormat: [oB.BC1_RGB, oB.BC3_RGBA],
            yes: {
              transcodeFormat: oB.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = BB, BB
      }
    };
    class pB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, OB, GB, YB) {
        if (Array.isArray(BB)) return;
        OB._invertVScale = !OB.invertY;
        const QB = OB.Lp(),
          oB = new DB(BB, 6),
          jB = lB(oB.glInternalFormat);
        null !== jB ? (OB.format = jB, OB._useSRGBBuffer = QB._getUseSRGBBuffer(!0, !OB.generateMipMaps), OB._gammaSpace = !0) : OB.format = oB.glInternalFormat;
        const yB = oB.numberOfMipmapLevels > 1 && OB.generateMipMaps;
        QB._unpackFlipY(!0), oB.uploadLevels(OB, OB.generateMipMaps), OB.width = oB.pixelWidth, OB.height = oB.pixelHeight, QB._setCubeMapTextureParams(OB, yB, oB.numberOfMipmapLevels - 1), OB.isReady = !0, OB.onLoadedObservable.notifyObservers(OB), OB.onLoadedObservable.clear(), YB && YB()
      }
      loadData(BB, OB, GB, QB) {
        if (DB.IsValid(BB)) {
          OB._invertVScale = !OB.invertY;
          const YB = new DB(BB, 1),
            QB = lB(YB.glInternalFormat);
          null !== QB ? (OB.format = QB, OB._useSRGBBuffer = OB.Lp()._getUseSRGBBuffer(!0, !OB.generateMipMaps), OB._gammaSpace = !0) : OB.format = YB.glInternalFormat, GB(YB.pixelWidth, YB.pixelHeight, OB.generateMipMaps, !0, (() => {
            YB.uploadLevels(OB, OB.generateMipMaps)
          }), YB.isInvalid)
        } else if (zB.IsValid(BB)) {
          new zB(OB.Lp())._uploadAsync(BB, OB, QB).then((() => {
            GB(OB.width, OB.height, OB.generateMipMaps, !0, (() => {}), !1)
          }), (BB => {
            YB.b.Warn(`Failed to load KTX2 texture data: ${BB.message}`), GB(0, 0, !1, !1, (() => {}), !0)
          }))
        } else YB.b.Error("texture missing KTX identifier"), GB(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  44999: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    class YB {
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
        for (const OB of this._workerInfos)
          if (OB.idle) return this._execute(OB, BB), !0;
        return !1
      }
      _execute(BB, OB) {
        BB.idle = !1, BB.workerPromise.then((GB => {
          OB(GB, (() => {
            const OB = this._pendingActions.shift();
            OB ? this._execute(BB, OB) : BB.idle = !0
          }))
        }))
      }
    }
    class DB extends YB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB.DefaultOptions;
        super([]), this._maxWorkers = BB, this._createWorkerAsync = OB, this._options = GB
      }
      push(BB) {
        if (!this._executeOnIdleWorker(BB))
          if (this._workerInfos.length < this._maxWorkers) {
            const OB = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(OB), this._execute(OB, BB)
          } else this._pendingActions.push(BB)
      }
      _execute(BB, OB) {
        BB.timeoutId && (clearTimeout(BB.timeoutId), delete BB.timeoutId), super._execute(BB, ((GB, YB) => {
          OB(GB, (() => {
            YB(), BB.idle && (BB.timeoutId = setTimeout((() => {
              BB.workerPromise.then((BB => {
                BB.terminate()
              }));
              const OB = this._workerInfos.indexOf(BB); - 1 !== OB && this._workerInfos.splice(OB, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    DB.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);