export const id = 304;
export const ids = [304];
export const modules = {
  41804: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      _KTXTextureLoader: () => Ld
    });
    var pd = kd(38812);
    class Nd {
      constructor(dd, Jd) {
        if (this.data = dd, this.isInvalid = !1, !Nd.IsValid(dd)) return this.isInvalid = !0, void pd.c.Error("texture missing KTX identifier");
        const kd = Uint32Array.BYTES_PER_ELEMENT,
          Wd = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * kd),
          Pd = 67305985 === Wd.getUint32(0, !0);
        return this.glType = Wd.getUint32(1 * kd, Pd), this.glTypeSize = Wd.getUint32(2 * kd, Pd), this.glFormat = Wd.getUint32(3 * kd, Pd), this.glInternalFormat = Wd.getUint32(4 * kd, Pd), this.glBaseInternalFormat = Wd.getUint32(5 * kd, Pd), this.pixelWidth = Wd.getUint32(6 * kd, Pd), this.pixelHeight = Wd.getUint32(7 * kd, Pd), this.pixelDepth = Wd.getUint32(8 * kd, Pd), this.numberOfArrayElements = Wd.getUint32(9 * kd, Pd), this.numberOfFaces = Wd.getUint32(10 * kd, Pd), this.numberOfMipmapLevels = Wd.getUint32(11 * kd, Pd), this.bytesOfKeyValueData = Wd.getUint32(12 * kd, Pd), 0 !== this.glType ? (pd.c.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (pd.c.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (pd.c.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== Jd ? (pd.c.Error("number of faces expected" + Jd + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Nd.COMPRESSED_2D))
      }
      uploadLevels(dd, Jd) {
        switch (this.loadType) {
          case Nd.COMPRESSED_2D:
            this._upload2DCompressedLevels(dd, Jd);
          case Nd.TEX_2D:
          case Nd.COMPRESSED_3D:
          case Nd.TEX_3D:
        }
      }
      _upload2DCompressedLevels(dd, Jd) {
        let kd = Nd.HEADER_LEN + this.bytesOfKeyValueData,
          pd = this.pixelWidth,
          Wd = this.pixelHeight;
        const Pd = Jd ? this.numberOfMipmapLevels : 1;
        for (let Nd = 0; Nd < Pd; Nd++) {
          const Jd = new Int32Array(this.data.buffer, this.data.byteOffset + kd, 1)[0];
          kd += 4;
          for (let Pd = 0; Pd < this.numberOfFaces; Pd++) {
            const Zd = new Uint8Array(this.data.buffer, this.data.byteOffset + kd, Jd);
            dd.eL()._uploadCompressedDataToTextureDirectly(dd, dd.format, pd, Wd, Zd, Pd, Nd), kd += Jd, kd += 3 - (Jd + 3) % 4
          }
          pd = Math.max(1, .5 * pd), Wd = Math.max(1, .5 * Wd)
        }
      }
      static IsValid(dd) {
        if (dd.byteLength >= 12) {
          const Jd = new Uint8Array(dd.buffer, dd.byteOffset, 12);
          if (171 === Jd[0] && 75 === Jd[1] && 84 === Jd[2] && 88 === Jd[3] && 32 === Jd[4] && 49 === Jd[5] && 49 === Jd[6] && 187 === Jd[7] && 13 === Jd[8] && 10 === Jd[9] && 26 === Jd[10] && 10 === Jd[11]) return !0
        }
        return !1
      }
    }
    Nd.HEADER_LEN = 64, Nd.COMPRESSED_2D = 0, Nd.COMPRESSED_3D = 1, Nd.TEX_2D = 2, Nd.TEX_3D = 3;
    var Wd, Pd, Zd, gd = kd(41811),
      Cd = kd(40066);

    function Kd(dd, Jd) {
      const kd = Jd?.jsDecoderModule || KTX2DECODER;
      dd && (dd.wasmBaseUrl && (kd.Transcoder.WasmBaseUrl = dd.wasmBaseUrl), dd.wasmUASTCToASTC && (kd.LiteTranscoder_UASTC_ASTC.WasmModuleURL = dd.wasmUASTCToASTC), dd.wasmUASTCToBC7 && (kd.LiteTranscoder_UASTC_BC7.WasmModuleURL = dd.wasmUASTCToBC7), dd.wasmUASTCToRGBA_UNORM && (kd.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = dd.wasmUASTCToRGBA_UNORM), dd.wasmUASTCToRGBA_SRGB && (kd.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = dd.wasmUASTCToRGBA_SRGB), dd.wasmUASTCToR8_UNORM && (kd.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = dd.wasmUASTCToR8_UNORM), dd.wasmUASTCToRG8_UNORM && (kd.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = dd.wasmUASTCToRG8_UNORM), dd.jsMSCTranscoder && (kd.MSCTranscoder.JSModuleURL = dd.jsMSCTranscoder), dd.wasmMSCTranscoder && (kd.MSCTranscoder.WasmModuleURL = dd.wasmMSCTranscoder), dd.wasmZSTDDecoder && (kd.ZSTDDecoder.WasmModuleURL = dd.wasmZSTDDecoder)), Jd && (Jd.wasmUASTCToASTC && (kd.LiteTranscoder_UASTC_ASTC.WasmBinary = Jd.wasmUASTCToASTC), Jd.wasmUASTCToBC7 && (kd.LiteTranscoder_UASTC_BC7.WasmBinary = Jd.wasmUASTCToBC7), Jd.wasmUASTCToRGBA_UNORM && (kd.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = Jd.wasmUASTCToRGBA_UNORM), Jd.wasmUASTCToRGBA_SRGB && (kd.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = Jd.wasmUASTCToRGBA_SRGB), Jd.wasmUASTCToR8_UNORM && (kd.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = Jd.wasmUASTCToR8_UNORM), Jd.wasmUASTCToRG8_UNORM && (kd.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = Jd.wasmUASTCToRG8_UNORM), Jd.jsMSCTranscoder && (kd.MSCTranscoder.JSModule = Jd.jsMSCTranscoder), Jd.wasmMSCTranscoder && (kd.MSCTranscoder.WasmBinary = Jd.wasmMSCTranscoder), Jd.wasmZSTDDecoder && (kd.ZSTDDecoder.WasmBinary = Jd.wasmZSTDDecoder))
    }

    function od(dd) {
      let Jd;
      "undefined" === typeof dd && "undefined" !== typeof KTX2DECODER && (dd = KTX2DECODER), onmessage = kd => {
        if (kd.data) switch (kd.data.action) {
          case "init": {
            const pd = kd.data.urls;
            pd && (pd.jsDecoderModule && "undefined" === typeof dd && (importScripts(pd.jsDecoderModule), dd = KTX2DECODER), Kd(pd)), kd.data.wasmBinaries && Kd(void 0, {
              ...kd.data.wasmBinaries,
              jsDecoderModule: dd
            }), Jd = new dd.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            dd.KTX2Decoder.DefaultDecoderOptions = kd.data.options;
            break;
          case "decode":
            Jd.decode(kd.data.data, kd.data.caps, kd.data.options).then((dd => {
              const Jd = [];
              for (let kd = 0; kd < dd.mipmaps.length; ++kd) {
                const pd = dd.mipmaps[kd];
                pd && pd.data && Jd.push(pd.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: dd
              }, Jd)
            })).catch((dd => {
              postMessage({
                action: "decoded",
                success: !1,
                IC: dd
              })
            }))
        }
      }
    }! function(dd) {
      dd[dd.ETC1S = 0] = "ETC1S", dd[dd.UASTC4x4 = 1] = "UASTC4x4", dd[dd.RGBA32 = 2] = "RGBA32"
    }(Wd || (Wd = {})),
    function(dd) {
      dd[dd.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", dd[dd.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", dd[dd.BC7_RGBA = 1] = "BC7_RGBA", dd[dd.BC3_RGBA = 2] = "BC3_RGBA", dd[dd.BC1_RGB = 3] = "BC1_RGB", dd[dd.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", dd[dd.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", dd[dd.ETC2_RGBA = 6] = "ETC2_RGBA", dd[dd.ETC1_RGB = 7] = "ETC1_RGB", dd[dd.RGBA32 = 8] = "RGBA32", dd[dd.R8 = 9] = "R8", dd[dd.RG8 = 10] = "RG8"
    }(Pd || (Pd = {})),
    function(dd) {
      dd[dd.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", dd[dd.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", dd[dd.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", dd[dd.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", dd[dd.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", dd[dd.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", dd[dd.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", dd[dd.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", dd[dd.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", dd[dd.RGBA8Format = 32856] = "RGBA8Format", dd[dd.R8Format = 33321] = "R8Format", dd[dd.RG8Format = 33323] = "RG8Format"
    }(Zd || (Zd = {}));
    class ld {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(dd) {
        if (ld._WorkerPoolPromise || ld._DecoderModulePromise) return;
        const Jd = {
          wasmBaseUrl: Cd.h.ScriptBaseUrl,
          jsDecoderModule: Cd.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Cd.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Cd.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Cd.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Cd.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Cd.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Cd.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Cd.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Cd.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Cd.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        dd && "function" === typeof Worker && "undefined" !== typeof URL ? ld._WorkerPoolPromise = new Promise((kd => {
          const pd = `${Kd}(${od})()`,
            Nd = URL.createObjectURL(new Blob([pd], {
              type: "application/javascript"
            }));
          kd(new gd.e(dd, (async () => await async function(dd, Jd, kd) {
            return await new Promise(((pd, Nd) => {
              const Wd = Jd => {
                  dd.removeEventListener("error", Wd), dd.removeEventListener("message", Pd), Nd(Jd)
                },
                Pd = Jd => {
                  "init" === Jd.data.action && (dd.removeEventListener("error", Wd), dd.removeEventListener("message", Pd), pd(dd))
                };
              dd.addEventListener("error", Wd), dd.addEventListener("message", Pd), dd.postMessage({
                action: "init",
                urls: kd,
                wasmBinaries: Jd
              })
            }))
          }(new Worker(Nd), void 0, Jd))))
        })) : "undefined" === typeof ld._KTX2DecoderModule ? ld._DecoderModulePromise = Cd.h.LoadBabylonScriptAsync(Jd.jsDecoderModule).then((() => (ld._KTX2DecoderModule = KTX2DECODER, ld._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, ld._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Kd(Jd, ld._KTX2DecoderModule), new ld._KTX2DecoderModule.KTX2Decoder))) : (ld._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, ld._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, ld._DecoderModulePromise = Promise.resolve(new ld._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ld.DefaultNumWorkers;
        this._engine = dd;
        const kd = "object" === typeof Jd && Jd.workerPool || ld.WorkerPool;
        if (kd) ld._WorkerPoolPromise = Promise.resolve(kd);
        else {
          "object" === typeof Jd ? ld._KTX2DecoderModule = Jd?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (ld._KTX2DecoderModule = KTX2DECODER);
          const dd = "number" === typeof Jd ? Jd : Jd.numWorkers ?? ld.DefaultNumWorkers;
          ld._Initialize(dd)
        }
      }
      async _uploadAsync(dd, Jd, kd) {
        const pd = await this._decodeAsync(dd, kd);
        this._createTexture(pd, Jd, kd)
      }
      async _decodeAsync(dd, Jd) {
        const kd = this._engine.getCaps(),
          pd = {
            astc: !!kd.astc,
            bptc: !!kd.bptc,
            s3tc: !!kd.s3tc,
            pvrtc: !!kd.pvrtc,
            etc2: !!kd.etc2,
            etc1: !!kd.etc1
          };
        if (ld._WorkerPoolPromise) {
          const kd = await ld._WorkerPoolPromise;
          return await new Promise(((Nd, Wd) => {
            kd.push(((kd, Pd) => {
              const Zd = dd => {
                  kd.removeEventListener("error", Zd), kd.removeEventListener("message", gd), Wd(dd), Pd()
                },
                gd = dd => {
                  "decoded" === dd.data.action && (kd.removeEventListener("error", Zd), kd.removeEventListener("message", gd), dd.data.success ? Nd(dd.data.decodedData) : Wd({
                    message: dd.data.IC
                  }), Pd())
                };
              kd.addEventListener("error", Zd), kd.addEventListener("message", gd), kd.postMessage({
                action: "setDefaultDecoderOptions",
                options: ld.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Cd = new Uint8Array(dd.byteLength);
              Cd.set(new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength)), kd.postMessage({
                action: "decode",
                data: Cd,
                caps: pd,
                options: Jd
              }, [Cd.buffer])
            }))
          }))
        }
        if (ld._DecoderModulePromise) {
          const pd = await ld._DecoderModulePromise;
          return ld.DefaultDecoderOptions.isDirty && (ld._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = ld.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Nd, Wd) => {
            pd.decode(dd, kd, Jd).then((dd => {
              Nd(dd)
            })).catch((dd => {
              Wd({
                message: dd
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(dd, Jd, kd) {
        if ((dd.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, Jd), kd && (kd.transcodedFormat = dd.transcodedFormat, kd.isInGammaSpace = dd.isInGammaSpace, kd.hasAlpha = dd.hasAlpha, kd.transcoderName = dd.transcoderName);
        let pd = !0;
        switch (dd.transcodedFormat) {
          case 32856:
            Jd.type = 0, Jd.format = 5;
            break;
          case 33321:
            Jd.type = 0, Jd.format = 6;
            break;
          case 33323:
            Jd.type = 0, Jd.format = 7;
            break;
          default:
            Jd.format = dd.transcodedFormat, pd = !1
        }
        if (Jd._gammaSpace = dd.isInGammaSpace, Jd.generateMipMaps = dd.mipmaps.length > 1, Jd.width = dd.mipmaps[0].width, Jd.height = dd.mipmaps[0].height, dd.errors) throw new Error("KTX2 container - could not transcode the data. " + dd.errors);
        for (let Nd = 0; Nd < dd.mipmaps.length; ++Nd) {
          const kd = dd.mipmaps[Nd];
          if (!kd || !kd.data) throw new Error("KTX2 container - could not transcode one of the image");
          pd ? (Jd.width = kd.width, Jd.height = kd.height, this._engine._uploadDataToTextureDirectly(Jd, kd.data, 0, Nd, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(Jd, dd.transcodedFormat, kd.width, kd.height, kd.data, 0, Nd)
        }
        Jd._extension = ".ktx2", Jd.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(dd) {
        if (dd.byteLength >= 12) {
          const Jd = new Uint8Array(dd.buffer, dd.byteOffset, 12);
          if (171 === Jd[0] && 75 === Jd[1] && 84 === Jd[2] && 88 === Jd[3] && 32 === Jd[4] && 50 === Jd[5] && 48 === Jd[6] && 187 === Jd[7] && 13 === Jd[8] && 10 === Jd[9] && 26 === Jd[10] && 10 === Jd[11]) return !0
        }
        return !1
      }
    }

    function Qd(dd) {
      switch (dd) {
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
    ld.URLConfig = {
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
    }, ld.DefaultNumWorkers = ld.GetDefaultNumWorkers(), ld.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(dd) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== dd && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = dd, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(dd) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== dd && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = dd, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(dd) {
        this._forceRGBA !== dd && (this._forceRGBA = dd, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(dd) {
        this._forceR8 !== dd && (this._forceR8 = dd, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(dd) {
        this._forceRG8 !== dd && (this._forceRG8 = dd, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(dd) {
        this._bypassTranscoders !== dd && (this._bypassTranscoders = dd, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const dd = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (dd.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (dd.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (dd.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (dd.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (dd.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (dd.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [Pd.BC1_RGB, Pd.BC3_RGBA],
            yes: {
              transcodeFormat: Pd.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = dd, dd
      }
    };
    class Ld {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(dd, Jd, kd, pd) {
        if (Array.isArray(dd)) return;
        Jd._invertVScale = !Jd.invertY;
        const Wd = Jd.eL(),
          Pd = new Nd(dd, 6),
          Zd = Qd(Pd.glInternalFormat);
        null !== Zd ? (Jd.format = Zd, Jd._useSRGBBuffer = Wd._getUseSRGBBuffer(!0, !Jd.generateMipMaps), Jd._gammaSpace = !0) : Jd.format = Pd.glInternalFormat;
        const gd = Pd.numberOfMipmapLevels > 1 && Jd.generateMipMaps;
        Wd._unpackFlipY(!0), Pd.uploadLevels(Jd, Jd.generateMipMaps), Jd.width = Pd.pixelWidth, Jd.height = Pd.pixelHeight, Wd._setCubeMapTextureParams(Jd, gd, Pd.numberOfMipmapLevels - 1), Jd.isReady = !0, Jd.onLoadedObservable.notifyObservers(Jd), Jd.onLoadedObservable.clear(), pd && pd()
      }
      loadData(dd, Jd, kd, Wd) {
        if (Nd.IsValid(dd)) {
          Jd._invertVScale = !Jd.invertY;
          const pd = new Nd(dd, 1),
            Wd = Qd(pd.glInternalFormat);
          null !== Wd ? (Jd.format = Wd, Jd._useSRGBBuffer = Jd.eL()._getUseSRGBBuffer(!0, !Jd.generateMipMaps), Jd._gammaSpace = !0) : Jd.format = pd.glInternalFormat, kd(pd.pixelWidth, pd.pixelHeight, Jd.generateMipMaps, !0, (() => {
            pd.uploadLevels(Jd, Jd.generateMipMaps)
          }), pd.isInvalid)
        } else if (ld.IsValid(dd)) {
          new ld(Jd.eL())._uploadAsync(dd, Jd, Wd).then((() => {
            kd(Jd.width, Jd.height, Jd.generateMipMaps, !0, (() => {}), !1)
          }), (dd => {
            pd.c.Warn(`Failed to load KTX2 texture data: ${dd.message}`), kd(0, 0, !1, !1, (() => {}), !0)
          }))
        } else pd.c.Error("texture missing KTX identifier"), kd(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41811: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    class pd {
      constructor(dd) {
        this._pendingActions = new Array, this._workerInfos = dd.map((dd => ({
          workerPromise: Promise.resolve(dd),
          idle: !0
        })))
      }
      dispose() {
        for (const dd of this._workerInfos) dd.workerPromise.then((dd => {
          dd.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(dd) {
        this._executeOnIdleWorker(dd) || this._pendingActions.push(dd)
      }
      _executeOnIdleWorker(dd) {
        for (const Jd of this._workerInfos)
          if (Jd.idle) return this._execute(Jd, dd), !0;
        return !1
      }
      _execute(dd, Jd) {
        dd.idle = !1, dd.workerPromise.then((kd => {
          Jd(kd, (() => {
            const Jd = this._pendingActions.shift();
            Jd ? this._execute(dd, Jd) : dd.idle = !0
          }))
        }))
      }
    }
    class Nd extends pd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nd.DefaultOptions;
        super([]), this._maxWorkers = dd, this._createWorkerAsync = Jd, this._options = kd
      }
      push(dd) {
        if (!this._executeOnIdleWorker(dd))
          if (this._workerInfos.length < this._maxWorkers) {
            const Jd = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Jd), this._execute(Jd, dd)
          } else this._pendingActions.push(dd)
      }
      _execute(dd, Jd) {
        dd.timeoutId && (clearTimeout(dd.timeoutId), delete dd.timeoutId), super._execute(dd, ((kd, pd) => {
          Jd(kd, (() => {
            pd(), dd.idle && (dd.timeoutId = setTimeout((() => {
              dd.workerPromise.then((dd => {
                dd.terminate()
              }));
              const Jd = this._workerInfos.indexOf(dd); - 1 !== Jd && this._workerInfos.splice(Jd, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Nd.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);