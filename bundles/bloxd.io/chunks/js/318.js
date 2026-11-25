export const id = 318;
export const ids = [318];
export const modules = {
  42106: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      _KTXTextureLoader: () => ft
    });
    var Ot = Vt(38899);
    class qt {
      constructor(tt, et) {
        if (this.data = tt, this.isInvalid = !1, !qt.IsValid(tt)) return this.isInvalid = !0, void Ot.d.Error("texture missing KTX identifier");
        const Vt = Uint32Array.BYTES_PER_ELEMENT,
          Dt = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * Vt),
          mt = 67305985 === Dt.getUint32(0, !0);
        return this.glType = Dt.getUint32(1 * Vt, mt), this.glTypeSize = Dt.getUint32(2 * Vt, mt), this.glFormat = Dt.getUint32(3 * Vt, mt), this.glInternalFormat = Dt.getUint32(4 * Vt, mt), this.glBaseInternalFormat = Dt.getUint32(5 * Vt, mt), this.pixelWidth = Dt.getUint32(6 * Vt, mt), this.pixelHeight = Dt.getUint32(7 * Vt, mt), this.pixelDepth = Dt.getUint32(8 * Vt, mt), this.numberOfArrayElements = Dt.getUint32(9 * Vt, mt), this.numberOfFaces = Dt.getUint32(10 * Vt, mt), this.numberOfMipmapLevels = Dt.getUint32(11 * Vt, mt), this.bytesOfKeyValueData = Dt.getUint32(12 * Vt, mt), 0 !== this.glType ? (Ot.d.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Ot.d.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Ot.d.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== et ? (Ot.d.Error("number of faces expected" + et + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = qt.COMPRESSED_2D))
      }
      uploadLevels(tt, et) {
        switch (this.loadType) {
          case qt.COMPRESSED_2D:
            this._upload2DCompressedLevels(tt, et);
          case qt.TEX_2D:
          case qt.COMPRESSED_3D:
          case qt.TEX_3D:
        }
      }
      _upload2DCompressedLevels(tt, et) {
        let Vt = qt.HEADER_LEN + this.bytesOfKeyValueData,
          Ot = this.pixelWidth,
          Dt = this.pixelHeight;
        const mt = et ? this.numberOfMipmapLevels : 1;
        for (let qt = 0; qt < mt; qt++) {
          const et = new Int32Array(this.data.buffer, this.data.byteOffset + Vt, 1)[0];
          Vt += 4;
          for (let mt = 0; mt < this.numberOfFaces; mt++) {
            const dt = new Uint8Array(this.data.buffer, this.data.byteOffset + Vt, et);
            tt.Jf()._uploadCompressedDataToTextureDirectly(tt, tt.format, Ot, Dt, dt, mt, qt), Vt += et, Vt += 3 - (et + 3) % 4
          }
          Ot = Math.max(1, .5 * Ot), Dt = Math.max(1, .5 * Dt)
        }
      }
      static IsValid(tt) {
        if (tt.byteLength >= 12) {
          const et = new Uint8Array(tt.buffer, tt.byteOffset, 12);
          if (171 === et[0] && 75 === et[1] && 84 === et[2] && 88 === et[3] && 32 === et[4] && 49 === et[5] && 49 === et[6] && 187 === et[7] && 13 === et[8] && 10 === et[9] && 26 === et[10] && 10 === et[11]) return !0
        }
        return !1
      }
    }
    qt.HEADER_LEN = 64, qt.COMPRESSED_2D = 0, qt.COMPRESSED_3D = 1, qt.TEX_2D = 2, qt.TEX_3D = 3;
    var Dt, mt, dt, jt = Vt(42108),
      Ht = Vt(40300);

    function Xt(tt, et) {
      const Vt = et?.jsDecoderModule || KTX2DECODER;
      tt && (tt.wasmBaseUrl && (Vt.Transcoder.WasmBaseUrl = tt.wasmBaseUrl), tt.wasmUASTCToASTC && (Vt.LiteTranscoder_UASTC_ASTC.WasmModuleURL = tt.wasmUASTCToASTC), tt.wasmUASTCToBC7 && (Vt.LiteTranscoder_UASTC_BC7.WasmModuleURL = tt.wasmUASTCToBC7), tt.wasmUASTCToRGBA_UNORM && (Vt.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = tt.wasmUASTCToRGBA_UNORM), tt.wasmUASTCToRGBA_SRGB && (Vt.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = tt.wasmUASTCToRGBA_SRGB), tt.wasmUASTCToR8_UNORM && (Vt.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = tt.wasmUASTCToR8_UNORM), tt.wasmUASTCToRG8_UNORM && (Vt.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = tt.wasmUASTCToRG8_UNORM), tt.jsMSCTranscoder && (Vt.MSCTranscoder.JSModuleURL = tt.jsMSCTranscoder), tt.wasmMSCTranscoder && (Vt.MSCTranscoder.WasmModuleURL = tt.wasmMSCTranscoder), tt.wasmZSTDDecoder && (Vt.ZSTDDecoder.WasmModuleURL = tt.wasmZSTDDecoder)), et && (et.wasmUASTCToASTC && (Vt.LiteTranscoder_UASTC_ASTC.WasmBinary = et.wasmUASTCToASTC), et.wasmUASTCToBC7 && (Vt.LiteTranscoder_UASTC_BC7.WasmBinary = et.wasmUASTCToBC7), et.wasmUASTCToRGBA_UNORM && (Vt.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = et.wasmUASTCToRGBA_UNORM), et.wasmUASTCToRGBA_SRGB && (Vt.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = et.wasmUASTCToRGBA_SRGB), et.wasmUASTCToR8_UNORM && (Vt.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = et.wasmUASTCToR8_UNORM), et.wasmUASTCToRG8_UNORM && (Vt.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = et.wasmUASTCToRG8_UNORM), et.jsMSCTranscoder && (Vt.MSCTranscoder.JSModule = et.jsMSCTranscoder), et.wasmMSCTranscoder && (Vt.MSCTranscoder.WasmBinary = et.wasmMSCTranscoder), et.wasmZSTDDecoder && (Vt.ZSTDDecoder.WasmBinary = et.wasmZSTDDecoder))
    }

    function Qt(tt) {
      let et;
      "undefined" === typeof tt && "undefined" !== typeof KTX2DECODER && (tt = KTX2DECODER), onmessage = Vt => {
        if (Vt.data) switch (Vt.data.action) {
          case "init": {
            const Ot = Vt.data.urls;
            Ot && (Ot.jsDecoderModule && "undefined" === typeof tt && (importScripts(Ot.jsDecoderModule), tt = KTX2DECODER), Xt(Ot)), Vt.data.wasmBinaries && Xt(void 0, {
              ...Vt.data.wasmBinaries,
              jsDecoderModule: tt
            }), et = new tt.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            tt.KTX2Decoder.DefaultDecoderOptions = Vt.data.options;
            break;
          case "decode":
            et.decode(Vt.data.data, Vt.data.caps, Vt.data.options).then((tt => {
              const et = [];
              for (let Vt = 0; Vt < tt.mipmaps.length; ++Vt) {
                const Ot = tt.mipmaps[Vt];
                Ot && Ot.data && et.push(Ot.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: tt
              }, et)
            })).catch((tt => {
              postMessage({
                action: "decoded",
                success: !1,
                kX: tt
              })
            }))
        }
      }
    }! function(tt) {
      tt[tt.ETC1S = 0] = "ETC1S", tt[tt.UASTC4x4 = 1] = "UASTC4x4", tt[tt.RGBA32 = 2] = "RGBA32"
    }(Dt || (Dt = {})),
    function(tt) {
      tt[tt.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", tt[tt.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", tt[tt.BC7_RGBA = 1] = "BC7_RGBA", tt[tt.BC3_RGBA = 2] = "BC3_RGBA", tt[tt.BC1_RGB = 3] = "BC1_RGB", tt[tt.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", tt[tt.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", tt[tt.ETC2_RGBA = 6] = "ETC2_RGBA", tt[tt.ETC1_RGB = 7] = "ETC1_RGB", tt[tt.RGBA32 = 8] = "RGBA32", tt[tt.R8 = 9] = "R8", tt[tt.RG8 = 10] = "RG8"
    }(mt || (mt = {})),
    function(tt) {
      tt[tt.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", tt[tt.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", tt[tt.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", tt[tt.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", tt[tt.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", tt[tt.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", tt[tt.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", tt[tt.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", tt[tt.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", tt[tt.RGBA8Format = 32856] = "RGBA8Format", tt[tt.R8Format = 33321] = "R8Format", tt[tt.RG8Format = 33323] = "RG8Format"
    }(dt || (dt = {}));
    class lt {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(tt) {
        if (lt._WorkerPoolPromise || lt._DecoderModulePromise) return;
        const et = {
          wasmBaseUrl: Ht.l.ScriptBaseUrl,
          jsDecoderModule: Ht.l.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Ht.l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Ht.l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Ht.l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Ht.l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Ht.l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Ht.l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Ht.l.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Ht.l.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Ht.l.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        tt && "function" === typeof Worker && "undefined" !== typeof URL ? lt._WorkerPoolPromise = new Promise((Vt => {
          const Ot = `${Xt}(${Qt})()`,
            qt = URL.createObjectURL(new Blob([Ot], {
              type: "application/javascript"
            }));
          Vt(new jt.c(tt, (async () => await async function(tt, et, Vt) {
            return await new Promise(((Ot, qt) => {
              const Dt = et => {
                  tt.removeEventListener("error", Dt), tt.removeEventListener("message", mt), qt(et)
                },
                mt = et => {
                  "init" === et.data.action && (tt.removeEventListener("error", Dt), tt.removeEventListener("message", mt), Ot(tt))
                };
              tt.addEventListener("error", Dt), tt.addEventListener("message", mt), tt.postMessage({
                action: "init",
                urls: Vt,
                wasmBinaries: et
              })
            }))
          }(new Worker(qt), void 0, et))))
        })) : "undefined" === typeof lt._KTX2DecoderModule ? lt._DecoderModulePromise = Ht.l.LoadBabylonScriptAsync(et.jsDecoderModule).then((() => (lt._KTX2DecoderModule = KTX2DECODER, lt._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, lt._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Xt(et, lt._KTX2DecoderModule), new lt._KTX2DecoderModule.KTX2Decoder))) : (lt._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, lt._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, lt._DecoderModulePromise = Promise.resolve(new lt._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lt.DefaultNumWorkers;
        this._engine = tt;
        const Vt = "object" === typeof et && et.workerPool || lt.WorkerPool;
        if (Vt) lt._WorkerPoolPromise = Promise.resolve(Vt);
        else {
          "object" === typeof et ? lt._KTX2DecoderModule = et?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (lt._KTX2DecoderModule = KTX2DECODER);
          const tt = "number" === typeof et ? et : et.numWorkers ?? lt.DefaultNumWorkers;
          lt._Initialize(tt)
        }
      }
      async _uploadAsync(tt, et, Vt) {
        const Ot = await this._decodeAsync(tt, Vt);
        this._createTexture(Ot, et, Vt)
      }
      async _decodeAsync(tt, et) {
        const Vt = this._engine.getCaps(),
          Ot = {
            astc: !!Vt.astc,
            bptc: !!Vt.bptc,
            s3tc: !!Vt.s3tc,
            pvrtc: !!Vt.pvrtc,
            etc2: !!Vt.etc2,
            etc1: !!Vt.etc1
          };
        if (lt._WorkerPoolPromise) {
          const Vt = await lt._WorkerPoolPromise;
          return await new Promise(((qt, Dt) => {
            Vt.push(((Vt, mt) => {
              const dt = tt => {
                  Vt.removeEventListener("error", dt), Vt.removeEventListener("message", jt), Dt(tt), mt()
                },
                jt = tt => {
                  "decoded" === tt.data.action && (Vt.removeEventListener("error", dt), Vt.removeEventListener("message", jt), tt.data.success ? qt(tt.data.decodedData) : Dt({
                    message: tt.data.kX
                  }), mt())
                };
              Vt.addEventListener("error", dt), Vt.addEventListener("message", jt), Vt.postMessage({
                action: "setDefaultDecoderOptions",
                options: lt.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Ht = new Uint8Array(tt.byteLength);
              Ht.set(new Uint8Array(tt.buffer, tt.byteOffset, tt.byteLength)), Vt.postMessage({
                action: "decode",
                data: Ht,
                caps: Ot,
                options: et
              }, [Ht.buffer])
            }))
          }))
        }
        if (lt._DecoderModulePromise) {
          const Ot = await lt._DecoderModulePromise;
          return lt.DefaultDecoderOptions.isDirty && (lt._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = lt.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((qt, Dt) => {
            Ot.decode(tt, Vt, et).then((tt => {
              qt(tt)
            })).catch((tt => {
              Dt({
                message: tt
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(tt, et, Vt) {
        if ((tt.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, et), Vt && (Vt.transcodedFormat = tt.transcodedFormat, Vt.isInGammaSpace = tt.isInGammaSpace, Vt.hasAlpha = tt.hasAlpha, Vt.transcoderName = tt.transcoderName);
        let Ot = !0;
        switch (tt.transcodedFormat) {
          case 32856:
            et.type = 0, et.format = 5;
            break;
          case 33321:
            et.type = 0, et.format = 6;
            break;
          case 33323:
            et.type = 0, et.format = 7;
            break;
          default:
            et.format = tt.transcodedFormat, Ot = !1
        }
        if (et._gammaSpace = tt.isInGammaSpace, et.generateMipMaps = tt.mipmaps.length > 1, et.width = tt.mipmaps[0].width, et.height = tt.mipmaps[0].height, tt.errors) throw new Error("KTX2 container - could not transcode the data. " + tt.errors);
        for (let qt = 0; qt < tt.mipmaps.length; ++qt) {
          const Vt = tt.mipmaps[qt];
          if (!Vt || !Vt.data) throw new Error("KTX2 container - could not transcode one of the image");
          Ot ? (et.width = Vt.width, et.height = Vt.height, this._engine._uploadDataToTextureDirectly(et, Vt.data, 0, qt, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(et, tt.transcodedFormat, Vt.width, Vt.height, Vt.data, 0, qt)
        }
        et._extension = ".ktx2", et.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(tt) {
        if (tt.byteLength >= 12) {
          const et = new Uint8Array(tt.buffer, tt.byteOffset, 12);
          if (171 === et[0] && 75 === et[1] && 84 === et[2] && 88 === et[3] && 32 === et[4] && 50 === et[5] && 48 === et[6] && 187 === et[7] && 13 === et[8] && 10 === et[9] && 26 === et[10] && 10 === et[11]) return !0
        }
        return !1
      }
    }

    function Et(tt) {
      switch (tt) {
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
    lt.URLConfig = {
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
    }, lt.DefaultNumWorkers = lt.GetDefaultNumWorkers(), lt.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(tt) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== tt && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = tt, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(tt) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== tt && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = tt, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(tt) {
        this._forceRGBA !== tt && (this._forceRGBA = tt, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(tt) {
        this._forceR8 !== tt && (this._forceR8 = tt, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(tt) {
        this._forceRG8 !== tt && (this._forceRG8 = tt, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(tt) {
        this._bypassTranscoders !== tt && (this._bypassTranscoders = tt, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const tt = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (tt.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (tt.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (tt.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (tt.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (tt.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (tt.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [mt.BC1_RGB, mt.BC3_RGBA],
            yes: {
              transcodeFormat: mt.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = tt, tt
      }
    };
    class ft {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(tt, et, Vt, Ot) {
        if (Array.isArray(tt)) return;
        et._invertVScale = !et.invertY;
        const Dt = et.Jf(),
          mt = new qt(tt, 6),
          dt = Et(mt.glInternalFormat);
        null !== dt ? (et.format = dt, et._useSRGBBuffer = Dt._getUseSRGBBuffer(!0, !et.generateMipMaps), et._gammaSpace = !0) : et.format = mt.glInternalFormat;
        const jt = mt.numberOfMipmapLevels > 1 && et.generateMipMaps;
        Dt._unpackFlipY(!0), mt.uploadLevels(et, et.generateMipMaps), et.width = mt.pixelWidth, et.height = mt.pixelHeight, Dt._setCubeMapTextureParams(et, jt, mt.numberOfMipmapLevels - 1), et.isReady = !0, et.onLoadedObservable.notifyObservers(et), et.onLoadedObservable.clear(), Ot && Ot()
      }
      loadData(tt, et, Vt, Dt) {
        if (qt.IsValid(tt)) {
          et._invertVScale = !et.invertY;
          const Ot = new qt(tt, 1),
            Dt = Et(Ot.glInternalFormat);
          null !== Dt ? (et.format = Dt, et._useSRGBBuffer = et.Jf()._getUseSRGBBuffer(!0, !et.generateMipMaps), et._gammaSpace = !0) : et.format = Ot.glInternalFormat, Vt(Ot.pixelWidth, Ot.pixelHeight, et.generateMipMaps, !0, (() => {
            Ot.uploadLevels(et, et.generateMipMaps)
          }), Ot.isInvalid)
        } else if (lt.IsValid(tt)) {
          new lt(et.Jf())._uploadAsync(tt, et, Dt).then((() => {
            Vt(et.width, et.height, et.generateMipMaps, !0, (() => {}), !1)
          }), (tt => {
            Ot.d.Warn(`Failed to load KTX2 texture data: ${tt.message}`), Vt(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Ot.d.Error("texture missing KTX identifier"), Vt(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  42108: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt
    });
    class Ot {
      constructor(tt) {
        this._pendingActions = new Array, this._workerInfos = tt.map((tt => ({
          workerPromise: Promise.resolve(tt),
          idle: !0
        })))
      }
      dispose() {
        for (const tt of this._workerInfos) tt.workerPromise.then((tt => {
          tt.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(tt) {
        this._executeOnIdleWorker(tt) || this._pendingActions.push(tt)
      }
      _executeOnIdleWorker(tt) {
        for (const et of this._workerInfos)
          if (et.idle) return this._execute(et, tt), !0;
        return !1
      }
      _execute(tt, et) {
        tt.idle = !1, tt.workerPromise.then((Vt => {
          et(Vt, (() => {
            const et = this._pendingActions.shift();
            et ? this._execute(tt, et) : tt.idle = !0
          }))
        }))
      }
    }
    class qt extends Ot {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qt.DefaultOptions;
        super([]), this._maxWorkers = tt, this._createWorkerAsync = et, this._options = Vt
      }
      push(tt) {
        if (!this._executeOnIdleWorker(tt))
          if (this._workerInfos.length < this._maxWorkers) {
            const et = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(et), this._execute(et, tt)
          } else this._pendingActions.push(tt)
      }
      _execute(tt, et) {
        tt.timeoutId && (clearTimeout(tt.timeoutId), delete tt.timeoutId), super._execute(tt, ((Vt, Ot) => {
          et(Vt, (() => {
            Ot(), tt.idle && (tt.timeoutId = setTimeout((() => {
              tt.workerPromise.then((tt => {
                tt.terminate()
              }));
              const et = this._workerInfos.indexOf(tt); - 1 !== et && this._workerInfos.splice(et, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    qt.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);