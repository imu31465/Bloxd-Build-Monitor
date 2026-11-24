export const id = 313;
export const ids = [313];
export const modules = {
  41864: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      _KTXTextureLoader: () => Om
    });
    var hm = fm(38766);
    class Am {
      constructor(mm, Tm) {
        if (this.data = mm, this.isInvalid = !1, !Am.IsValid(mm)) return this.isInvalid = !0, void hm.b.Error("texture missing KTX identifier");
        const fm = Uint32Array.BYTES_PER_ELEMENT,
          am = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * fm),
          xm = 67305985 === am.getUint32(0, !0);
        return this.glType = am.getUint32(1 * fm, xm), this.glTypeSize = am.getUint32(2 * fm, xm), this.glFormat = am.getUint32(3 * fm, xm), this.glInternalFormat = am.getUint32(4 * fm, xm), this.glBaseInternalFormat = am.getUint32(5 * fm, xm), this.pixelWidth = am.getUint32(6 * fm, xm), this.pixelHeight = am.getUint32(7 * fm, xm), this.pixelDepth = am.getUint32(8 * fm, xm), this.numberOfArrayElements = am.getUint32(9 * fm, xm), this.numberOfFaces = am.getUint32(10 * fm, xm), this.numberOfMipmapLevels = am.getUint32(11 * fm, xm), this.bytesOfKeyValueData = am.getUint32(12 * fm, xm), 0 !== this.glType ? (hm.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (hm.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (hm.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== Tm ? (hm.b.Error("number of faces expected" + Tm + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Am.COMPRESSED_2D))
      }
      uploadLevels(mm, Tm) {
        switch (this.loadType) {
          case Am.COMPRESSED_2D:
            this._upload2DCompressedLevels(mm, Tm);
          case Am.TEX_2D:
          case Am.COMPRESSED_3D:
          case Am.TEX_3D:
        }
      }
      _upload2DCompressedLevels(mm, Tm) {
        let fm = Am.HEADER_LEN + this.bytesOfKeyValueData,
          hm = this.pixelWidth,
          am = this.pixelHeight;
        const xm = Tm ? this.numberOfMipmapLevels : 1;
        for (let Am = 0; Am < xm; Am++) {
          const Tm = new Int32Array(this.data.buffer, this.data.byteOffset + fm, 1)[0];
          fm += 4;
          for (let xm = 0; xm < this.numberOfFaces; xm++) {
            const wm = new Uint8Array(this.data.buffer, this.data.byteOffset + fm, Tm);
            mm.dO()._uploadCompressedDataToTextureDirectly(mm, mm.format, hm, am, wm, xm, Am), fm += Tm, fm += 3 - (Tm + 3) % 4
          }
          hm = Math.max(1, .5 * hm), am = Math.max(1, .5 * am)
        }
      }
      static IsValid(mm) {
        if (mm.byteLength >= 12) {
          const Tm = new Uint8Array(mm.buffer, mm.byteOffset, 12);
          if (171 === Tm[0] && 75 === Tm[1] && 84 === Tm[2] && 88 === Tm[3] && 32 === Tm[4] && 49 === Tm[5] && 49 === Tm[6] && 187 === Tm[7] && 13 === Tm[8] && 10 === Tm[9] && 26 === Tm[10] && 10 === Tm[11]) return !0
        }
        return !1
      }
    }
    Am.HEADER_LEN = 64, Am.COMPRESSED_2D = 0, Am.COMPRESSED_3D = 1, Am.TEX_2D = 2, Am.TEX_3D = 3;
    var am, xm, wm, Dm = fm(41871),
      im = fm(40203);

    function Rm(mm, Tm) {
      const fm = Tm?.jsDecoderModule || KTX2DECODER;
      mm && (mm.wasmBaseUrl && (fm.Transcoder.WasmBaseUrl = mm.wasmBaseUrl), mm.wasmUASTCToASTC && (fm.LiteTranscoder_UASTC_ASTC.WasmModuleURL = mm.wasmUASTCToASTC), mm.wasmUASTCToBC7 && (fm.LiteTranscoder_UASTC_BC7.WasmModuleURL = mm.wasmUASTCToBC7), mm.wasmUASTCToRGBA_UNORM && (fm.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = mm.wasmUASTCToRGBA_UNORM), mm.wasmUASTCToRGBA_SRGB && (fm.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = mm.wasmUASTCToRGBA_SRGB), mm.wasmUASTCToR8_UNORM && (fm.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = mm.wasmUASTCToR8_UNORM), mm.wasmUASTCToRG8_UNORM && (fm.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = mm.wasmUASTCToRG8_UNORM), mm.jsMSCTranscoder && (fm.MSCTranscoder.JSModuleURL = mm.jsMSCTranscoder), mm.wasmMSCTranscoder && (fm.MSCTranscoder.WasmModuleURL = mm.wasmMSCTranscoder), mm.wasmZSTDDecoder && (fm.ZSTDDecoder.WasmModuleURL = mm.wasmZSTDDecoder)), Tm && (Tm.wasmUASTCToASTC && (fm.LiteTranscoder_UASTC_ASTC.WasmBinary = Tm.wasmUASTCToASTC), Tm.wasmUASTCToBC7 && (fm.LiteTranscoder_UASTC_BC7.WasmBinary = Tm.wasmUASTCToBC7), Tm.wasmUASTCToRGBA_UNORM && (fm.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = Tm.wasmUASTCToRGBA_UNORM), Tm.wasmUASTCToRGBA_SRGB && (fm.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = Tm.wasmUASTCToRGBA_SRGB), Tm.wasmUASTCToR8_UNORM && (fm.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = Tm.wasmUASTCToR8_UNORM), Tm.wasmUASTCToRG8_UNORM && (fm.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = Tm.wasmUASTCToRG8_UNORM), Tm.jsMSCTranscoder && (fm.MSCTranscoder.JSModule = Tm.jsMSCTranscoder), Tm.wasmMSCTranscoder && (fm.MSCTranscoder.WasmBinary = Tm.wasmMSCTranscoder), Tm.wasmZSTDDecoder && (fm.ZSTDDecoder.WasmBinary = Tm.wasmZSTDDecoder))
    }

    function pm(mm) {
      let Tm;
      "undefined" === typeof mm && "undefined" !== typeof KTX2DECODER && (mm = KTX2DECODER), onmessage = fm => {
        if (fm.data) switch (fm.data.action) {
          case "init": {
            const hm = fm.data.urls;
            hm && (hm.jsDecoderModule && "undefined" === typeof mm && (importScripts(hm.jsDecoderModule), mm = KTX2DECODER), Rm(hm)), fm.data.wasmBinaries && Rm(void 0, {
              ...fm.data.wasmBinaries,
              jsDecoderModule: mm
            }), Tm = new mm.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            mm.KTX2Decoder.DefaultDecoderOptions = fm.data.options;
            break;
          case "decode":
            Tm.decode(fm.data.data, fm.data.caps, fm.data.options).then((mm => {
              const Tm = [];
              for (let fm = 0; fm < mm.mipmaps.length; ++fm) {
                const hm = mm.mipmaps[fm];
                hm && hm.data && Tm.push(hm.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: mm
              }, Tm)
            })).catch((mm => {
              postMessage({
                action: "decoded",
                success: !1,
                Hi: mm
              })
            }))
        }
      }
    }! function(mm) {
      mm[mm.ETC1S = 0] = "ETC1S", mm[mm.UASTC4x4 = 1] = "UASTC4x4", mm[mm.RGBA32 = 2] = "RGBA32"
    }(am || (am = {})),
    function(mm) {
      mm[mm.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", mm[mm.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", mm[mm.BC7_RGBA = 1] = "BC7_RGBA", mm[mm.BC3_RGBA = 2] = "BC3_RGBA", mm[mm.BC1_RGB = 3] = "BC1_RGB", mm[mm.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", mm[mm.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", mm[mm.ETC2_RGBA = 6] = "ETC2_RGBA", mm[mm.ETC1_RGB = 7] = "ETC1_RGB", mm[mm.RGBA32 = 8] = "RGBA32", mm[mm.R8 = 9] = "R8", mm[mm.RG8 = 10] = "RG8"
    }(xm || (xm = {})),
    function(mm) {
      mm[mm.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", mm[mm.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", mm[mm.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", mm[mm.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", mm[mm.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", mm[mm.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", mm[mm.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", mm[mm.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", mm[mm.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", mm[mm.RGBA8Format = 32856] = "RGBA8Format", mm[mm.R8Format = 33321] = "R8Format", mm[mm.RG8Format = 33323] = "RG8Format"
    }(wm || (wm = {}));
    class Em {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(mm) {
        if (Em._WorkerPoolPromise || Em._DecoderModulePromise) return;
        const Tm = {
          wasmBaseUrl: im.h.ScriptBaseUrl,
          jsDecoderModule: im.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: im.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: im.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: im.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: im.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: im.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: im.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: im.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: im.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: im.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        mm && "function" === typeof Worker && "undefined" !== typeof URL ? Em._WorkerPoolPromise = new Promise((fm => {
          const hm = `${Rm}(${pm})()`,
            Am = URL.createObjectURL(new Blob([hm], {
              type: "application/javascript"
            }));
          fm(new Dm.c(mm, (async () => await async function(mm, Tm, fm) {
            return await new Promise(((hm, Am) => {
              const am = Tm => {
                  mm.removeEventListener("error", am), mm.removeEventListener("message", xm), Am(Tm)
                },
                xm = Tm => {
                  "init" === Tm.data.action && (mm.removeEventListener("error", am), mm.removeEventListener("message", xm), hm(mm))
                };
              mm.addEventListener("error", am), mm.addEventListener("message", xm), mm.postMessage({
                action: "init",
                urls: fm,
                wasmBinaries: Tm
              })
            }))
          }(new Worker(Am), void 0, Tm))))
        })) : "undefined" === typeof Em._KTX2DecoderModule ? Em._DecoderModulePromise = im.h.LoadBabylonScriptAsync(Tm.jsDecoderModule).then((() => (Em._KTX2DecoderModule = KTX2DECODER, Em._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Em._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Rm(Tm, Em._KTX2DecoderModule), new Em._KTX2DecoderModule.KTX2Decoder))) : (Em._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Em._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Em._DecoderModulePromise = Promise.resolve(new Em._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Em.DefaultNumWorkers;
        this._engine = mm;
        const fm = "object" === typeof Tm && Tm.workerPool || Em.WorkerPool;
        if (fm) Em._WorkerPoolPromise = Promise.resolve(fm);
        else {
          "object" === typeof Tm ? Em._KTX2DecoderModule = Tm?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Em._KTX2DecoderModule = KTX2DECODER);
          const mm = "number" === typeof Tm ? Tm : Tm.numWorkers ?? Em.DefaultNumWorkers;
          Em._Initialize(mm)
        }
      }
      async _uploadAsync(mm, Tm, fm) {
        const hm = await this._decodeAsync(mm, fm);
        this._createTexture(hm, Tm, fm)
      }
      async _decodeAsync(mm, Tm) {
        const fm = this._engine.getCaps(),
          hm = {
            astc: !!fm.astc,
            bptc: !!fm.bptc,
            s3tc: !!fm.s3tc,
            pvrtc: !!fm.pvrtc,
            etc2: !!fm.etc2,
            etc1: !!fm.etc1
          };
        if (Em._WorkerPoolPromise) {
          const fm = await Em._WorkerPoolPromise;
          return await new Promise(((Am, am) => {
            fm.push(((fm, xm) => {
              const wm = mm => {
                  fm.removeEventListener("error", wm), fm.removeEventListener("message", Dm), am(mm), xm()
                },
                Dm = mm => {
                  "decoded" === mm.data.action && (fm.removeEventListener("error", wm), fm.removeEventListener("message", Dm), mm.data.success ? Am(mm.data.decodedData) : am({
                    message: mm.data.Hi
                  }), xm())
                };
              fm.addEventListener("error", wm), fm.addEventListener("message", Dm), fm.postMessage({
                action: "setDefaultDecoderOptions",
                options: Em.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const im = new Uint8Array(mm.byteLength);
              im.set(new Uint8Array(mm.buffer, mm.byteOffset, mm.byteLength)), fm.postMessage({
                action: "decode",
                data: im,
                caps: hm,
                options: Tm
              }, [im.buffer])
            }))
          }))
        }
        if (Em._DecoderModulePromise) {
          const hm = await Em._DecoderModulePromise;
          return Em.DefaultDecoderOptions.isDirty && (Em._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Em.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Am, am) => {
            hm.decode(mm, fm, Tm).then((mm => {
              Am(mm)
            })).catch((mm => {
              am({
                message: mm
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(mm, Tm, fm) {
        if ((mm.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, Tm), fm && (fm.transcodedFormat = mm.transcodedFormat, fm.isInGammaSpace = mm.isInGammaSpace, fm.hasAlpha = mm.hasAlpha, fm.transcoderName = mm.transcoderName);
        let hm = !0;
        switch (mm.transcodedFormat) {
          case 32856:
            Tm.type = 0, Tm.format = 5;
            break;
          case 33321:
            Tm.type = 0, Tm.format = 6;
            break;
          case 33323:
            Tm.type = 0, Tm.format = 7;
            break;
          default:
            Tm.format = mm.transcodedFormat, hm = !1
        }
        if (Tm._gammaSpace = mm.isInGammaSpace, Tm.generateMipMaps = mm.mipmaps.length > 1, Tm.width = mm.mipmaps[0].width, Tm.height = mm.mipmaps[0].height, mm.errors) throw new Error("KTX2 container - could not transcode the data. " + mm.errors);
        for (let Am = 0; Am < mm.mipmaps.length; ++Am) {
          const fm = mm.mipmaps[Am];
          if (!fm || !fm.data) throw new Error("KTX2 container - could not transcode one of the image");
          hm ? (Tm.width = fm.width, Tm.height = fm.height, this._engine._uploadDataToTextureDirectly(Tm, fm.data, 0, Am, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(Tm, mm.transcodedFormat, fm.width, fm.height, fm.data, 0, Am)
        }
        Tm._extension = ".ktx2", Tm.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(mm) {
        if (mm.byteLength >= 12) {
          const Tm = new Uint8Array(mm.buffer, mm.byteOffset, 12);
          if (171 === Tm[0] && 75 === Tm[1] && 84 === Tm[2] && 88 === Tm[3] && 32 === Tm[4] && 50 === Tm[5] && 48 === Tm[6] && 187 === Tm[7] && 13 === Tm[8] && 10 === Tm[9] && 26 === Tm[10] && 10 === Tm[11]) return !0
        }
        return !1
      }
    }

    function om(mm) {
      switch (mm) {
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
    Em.URLConfig = {
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
    }, Em.DefaultNumWorkers = Em.GetDefaultNumWorkers(), Em.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(mm) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== mm && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = mm, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(mm) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== mm && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = mm, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(mm) {
        this._forceRGBA !== mm && (this._forceRGBA = mm, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(mm) {
        this._forceR8 !== mm && (this._forceR8 = mm, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(mm) {
        this._forceRG8 !== mm && (this._forceRG8 = mm, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(mm) {
        this._bypassTranscoders !== mm && (this._bypassTranscoders = mm, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const mm = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (mm.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (mm.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (mm.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (mm.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (mm.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (mm.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [xm.BC1_RGB, xm.BC3_RGBA],
            yes: {
              transcodeFormat: xm.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = mm, mm
      }
    };
    class Om {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(mm, Tm, fm, hm) {
        if (Array.isArray(mm)) return;
        Tm._invertVScale = !Tm.invertY;
        const am = Tm.dO(),
          xm = new Am(mm, 6),
          wm = om(xm.glInternalFormat);
        null !== wm ? (Tm.format = wm, Tm._useSRGBBuffer = am._getUseSRGBBuffer(!0, !Tm.generateMipMaps), Tm._gammaSpace = !0) : Tm.format = xm.glInternalFormat;
        const Dm = xm.numberOfMipmapLevels > 1 && Tm.generateMipMaps;
        am._unpackFlipY(!0), xm.uploadLevels(Tm, Tm.generateMipMaps), Tm.width = xm.pixelWidth, Tm.height = xm.pixelHeight, am._setCubeMapTextureParams(Tm, Dm, xm.numberOfMipmapLevels - 1), Tm.isReady = !0, Tm.onLoadedObservable.notifyObservers(Tm), Tm.onLoadedObservable.clear(), hm && hm()
      }
      loadData(mm, Tm, fm, am) {
        if (Am.IsValid(mm)) {
          Tm._invertVScale = !Tm.invertY;
          const hm = new Am(mm, 1),
            am = om(hm.glInternalFormat);
          null !== am ? (Tm.format = am, Tm._useSRGBBuffer = Tm.dO()._getUseSRGBBuffer(!0, !Tm.generateMipMaps), Tm._gammaSpace = !0) : Tm.format = hm.glInternalFormat, fm(hm.pixelWidth, hm.pixelHeight, Tm.generateMipMaps, !0, (() => {
            hm.uploadLevels(Tm, Tm.generateMipMaps)
          }), hm.isInvalid)
        } else if (Em.IsValid(mm)) {
          new Em(Tm.dO())._uploadAsync(mm, Tm, am).then((() => {
            fm(Tm.width, Tm.height, Tm.generateMipMaps, !0, (() => {}), !1)
          }), (mm => {
            hm.b.Warn(`Failed to load KTX2 texture data: ${mm.message}`), fm(0, 0, !1, !1, (() => {}), !0)
          }))
        } else hm.b.Error("texture missing KTX identifier"), fm(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41871: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    class hm {
      constructor(mm) {
        this._pendingActions = new Array, this._workerInfos = mm.map((mm => ({
          workerPromise: Promise.resolve(mm),
          idle: !0
        })))
      }
      dispose() {
        for (const mm of this._workerInfos) mm.workerPromise.then((mm => {
          mm.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(mm) {
        this._executeOnIdleWorker(mm) || this._pendingActions.push(mm)
      }
      _executeOnIdleWorker(mm) {
        for (const Tm of this._workerInfos)
          if (Tm.idle) return this._execute(Tm, mm), !0;
        return !1
      }
      _execute(mm, Tm) {
        mm.idle = !1, mm.workerPromise.then((fm => {
          Tm(fm, (() => {
            const Tm = this._pendingActions.shift();
            Tm ? this._execute(mm, Tm) : mm.idle = !0
          }))
        }))
      }
    }
    class Am extends hm {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Am.DefaultOptions;
        super([]), this._maxWorkers = mm, this._createWorkerAsync = Tm, this._options = fm
      }
      push(mm) {
        if (!this._executeOnIdleWorker(mm))
          if (this._workerInfos.length < this._maxWorkers) {
            const Tm = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Tm), this._execute(Tm, mm)
          } else this._pendingActions.push(mm)
      }
      _execute(mm, Tm) {
        mm.timeoutId && (clearTimeout(mm.timeoutId), delete mm.timeoutId), super._execute(mm, ((fm, hm) => {
          Tm(fm, (() => {
            hm(), mm.idle && (mm.timeoutId = setTimeout((() => {
              mm.workerPromise.then((mm => {
                mm.terminate()
              }));
              const Tm = this._workerInfos.indexOf(mm); - 1 !== Tm && this._workerInfos.splice(Tm, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Am.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);