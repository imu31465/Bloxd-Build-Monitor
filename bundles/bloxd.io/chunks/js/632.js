export const id = 632;
export const ids = [632];
export const modules = {
  54263: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      _KTXTextureLoader: () => qd
    });
    var Wd = md(40262);
    class Fd {
      constructor(dd, Od) {
        if (this.data = dd, this.isInvalid = !1, !Fd.IsValid(dd)) return this.isInvalid = !0, void Wd.c.Error("texture missing KTX identifier");
        const md = Uint32Array.BYTES_PER_ELEMENT,
          Rd = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * md),
          Xd = 67305985 === Rd.getUint32(0, !0);
        return this.glType = Rd.getUint32(1 * md, Xd), this.glTypeSize = Rd.getUint32(2 * md, Xd), this.glFormat = Rd.getUint32(3 * md, Xd), this.glInternalFormat = Rd.getUint32(4 * md, Xd), this.glBaseInternalFormat = Rd.getUint32(5 * md, Xd), this.pixelWidth = Rd.getUint32(6 * md, Xd), this.pixelHeight = Rd.getUint32(7 * md, Xd), this.pixelDepth = Rd.getUint32(8 * md, Xd), this.numberOfArrayElements = Rd.getUint32(9 * md, Xd), this.numberOfFaces = Rd.getUint32(10 * md, Xd), this.numberOfMipmapLevels = Rd.getUint32(11 * md, Xd), this.bytesOfKeyValueData = Rd.getUint32(12 * md, Xd), 0 !== this.glType ? (Wd.c.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Wd.c.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Wd.c.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== Od ? (Wd.c.Error("number of faces expected" + Od + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Fd.COMPRESSED_2D))
      }
      uploadLevels(dd, Od) {
        switch (this.loadType) {
          case Fd.COMPRESSED_2D:
            this._upload2DCompressedLevels(dd, Od);
          case Fd.TEX_2D:
          case Fd.COMPRESSED_3D:
          case Fd.TEX_3D:
        }
      }
      _upload2DCompressedLevels(dd, Od) {
        let md = Fd.HEADER_LEN + this.bytesOfKeyValueData,
          Wd = this.pixelWidth,
          Rd = this.pixelHeight;
        const Xd = Od ? this.numberOfMipmapLevels : 1;
        for (let Fd = 0; Fd < Xd; Fd++) {
          const Od = new Int32Array(this.data.buffer, this.data.byteOffset + md, 1)[0];
          md += 4;
          for (let Xd = 0; Xd < this.numberOfFaces; Xd++) {
            const Kd = new Uint8Array(this.data.buffer, this.data.byteOffset + md, Od);
            dd.Iq()._uploadCompressedDataToTextureDirectly(dd, dd.format, Wd, Rd, Kd, Xd, Fd), md += Od, md += 3 - (Od + 3) % 4
          }
          Wd = Math.max(1, .5 * Wd), Rd = Math.max(1, .5 * Rd)
        }
      }
      static IsValid(dd) {
        if (dd.byteLength >= 12) {
          const Od = new Uint8Array(dd.buffer, dd.byteOffset, 12);
          if (171 === Od[0] && 75 === Od[1] && 84 === Od[2] && 88 === Od[3] && 32 === Od[4] && 49 === Od[5] && 49 === Od[6] && 187 === Od[7] && 13 === Od[8] && 10 === Od[9] && 26 === Od[10] && 10 === Od[11]) return !0
        }
        return !1
      }
    }
    Fd.HEADER_LEN = 64, Fd.COMPRESSED_2D = 0, Fd.COMPRESSED_3D = 1, Fd.TEX_2D = 2, Fd.TEX_3D = 3;
    var Rd, Xd, Kd, hd = md(54270),
      vd = md(42029);

    function Qd(dd, Od) {
      const md = Od?.jsDecoderModule || KTX2DECODER;
      dd && (dd.wasmBaseUrl && (md.Transcoder.WasmBaseUrl = dd.wasmBaseUrl), dd.wasmUASTCToASTC && (md.LiteTranscoder_UASTC_ASTC.WasmModuleURL = dd.wasmUASTCToASTC), dd.wasmUASTCToBC7 && (md.LiteTranscoder_UASTC_BC7.WasmModuleURL = dd.wasmUASTCToBC7), dd.wasmUASTCToRGBA_UNORM && (md.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = dd.wasmUASTCToRGBA_UNORM), dd.wasmUASTCToRGBA_SRGB && (md.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = dd.wasmUASTCToRGBA_SRGB), dd.wasmUASTCToR8_UNORM && (md.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = dd.wasmUASTCToR8_UNORM), dd.wasmUASTCToRG8_UNORM && (md.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = dd.wasmUASTCToRG8_UNORM), dd.jsMSCTranscoder && (md.MSCTranscoder.JSModuleURL = dd.jsMSCTranscoder), dd.wasmMSCTranscoder && (md.MSCTranscoder.WasmModuleURL = dd.wasmMSCTranscoder), dd.wasmZSTDDecoder && (md.ZSTDDecoder.WasmModuleURL = dd.wasmZSTDDecoder)), Od && (Od.wasmUASTCToASTC && (md.LiteTranscoder_UASTC_ASTC.WasmBinary = Od.wasmUASTCToASTC), Od.wasmUASTCToBC7 && (md.LiteTranscoder_UASTC_BC7.WasmBinary = Od.wasmUASTCToBC7), Od.wasmUASTCToRGBA_UNORM && (md.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = Od.wasmUASTCToRGBA_UNORM), Od.wasmUASTCToRGBA_SRGB && (md.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = Od.wasmUASTCToRGBA_SRGB), Od.wasmUASTCToR8_UNORM && (md.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = Od.wasmUASTCToR8_UNORM), Od.wasmUASTCToRG8_UNORM && (md.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = Od.wasmUASTCToRG8_UNORM), Od.jsMSCTranscoder && (md.MSCTranscoder.JSModule = Od.jsMSCTranscoder), Od.wasmMSCTranscoder && (md.MSCTranscoder.WasmBinary = Od.wasmMSCTranscoder), Od.wasmZSTDDecoder && (md.ZSTDDecoder.WasmBinary = Od.wasmZSTDDecoder))
    }

    function td(dd) {
      let Od;
      "undefined" === typeof dd && "undefined" !== typeof KTX2DECODER && (dd = KTX2DECODER), onmessage = md => {
        if (md.data) switch (md.data.action) {
          case "init": {
            const Wd = md.data.urls;
            Wd && (Wd.jsDecoderModule && "undefined" === typeof dd && (importScripts(Wd.jsDecoderModule), dd = KTX2DECODER), Qd(Wd)), md.data.wasmBinaries && Qd(void 0, {
              ...md.data.wasmBinaries,
              jsDecoderModule: dd
            }), Od = new dd.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            dd.KTX2Decoder.DefaultDecoderOptions = md.data.options;
            break;
          case "decode":
            Od.decode(md.data.data, md.data.caps, md.data.options).then((dd => {
              const Od = [];
              for (let md = 0; md < dd.mipmaps.length; ++md) {
                const Wd = dd.mipmaps[md];
                Wd && Wd.data && Od.push(Wd.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: dd
              }, Od)
            })).catch((dd => {
              postMessage({
                action: "decoded",
                success: !1,
                tX: dd
              })
            }))
        }
      }
    }! function(dd) {
      dd[dd.ETC1S = 0] = "ETC1S", dd[dd.UASTC4x4 = 1] = "UASTC4x4", dd[dd.RGBA32 = 2] = "RGBA32"
    }(Rd || (Rd = {})),
    function(dd) {
      dd[dd.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", dd[dd.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", dd[dd.BC7_RGBA = 1] = "BC7_RGBA", dd[dd.BC3_RGBA = 2] = "BC3_RGBA", dd[dd.BC1_RGB = 3] = "BC1_RGB", dd[dd.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", dd[dd.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", dd[dd.ETC2_RGBA = 6] = "ETC2_RGBA", dd[dd.ETC1_RGB = 7] = "ETC1_RGB", dd[dd.RGBA32 = 8] = "RGBA32", dd[dd.R8 = 9] = "R8", dd[dd.RG8 = 10] = "RG8"
    }(Xd || (Xd = {})),
    function(dd) {
      dd[dd.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", dd[dd.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", dd[dd.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", dd[dd.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", dd[dd.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", dd[dd.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", dd[dd.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", dd[dd.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", dd[dd.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", dd[dd.RGBA8Format = 32856] = "RGBA8Format", dd[dd.R8Format = 33321] = "R8Format", dd[dd.RG8Format = 33323] = "RG8Format"
    }(Kd || (Kd = {}));
    class od {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(dd) {
        if (od._WorkerPoolPromise || od._DecoderModulePromise) return;
        const Od = {
          wasmBaseUrl: vd.g.ScriptBaseUrl,
          jsDecoderModule: vd.g.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: vd.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: vd.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: vd.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: vd.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: vd.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: vd.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: vd.g.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: vd.g.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: vd.g.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        dd && "function" === typeof Worker && "undefined" !== typeof URL ? od._WorkerPoolPromise = new Promise((md => {
          const Wd = `${Qd}(${td})()`,
            Fd = URL.createObjectURL(new Blob([Wd], {
              type: "application/javascript"
            }));
          md(new hd.c(dd, (async () => await async function(dd, Od, md) {
            return await new Promise(((Wd, Fd) => {
              const Rd = Od => {
                  dd.removeEventListener("error", Rd), dd.removeEventListener("message", Xd), Fd(Od)
                },
                Xd = Od => {
                  "init" === Od.data.action && (dd.removeEventListener("error", Rd), dd.removeEventListener("message", Xd), Wd(dd))
                };
              dd.addEventListener("error", Rd), dd.addEventListener("message", Xd), dd.postMessage({
                action: "init",
                urls: md,
                wasmBinaries: Od
              })
            }))
          }(new Worker(Fd), void 0, Od))))
        })) : "undefined" === typeof od._KTX2DecoderModule ? od._DecoderModulePromise = vd.g.LoadBabylonScriptAsync(Od.jsDecoderModule).then((() => (od._KTX2DecoderModule = KTX2DECODER, od._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, od._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Qd(Od, od._KTX2DecoderModule), new od._KTX2DecoderModule.KTX2Decoder))) : (od._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, od._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, od._DecoderModulePromise = Promise.resolve(new od._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : od.DefaultNumWorkers;
        this._engine = dd;
        const md = "object" === typeof Od && Od.workerPool || od.WorkerPool;
        if (md) od._WorkerPoolPromise = Promise.resolve(md);
        else {
          "object" === typeof Od ? od._KTX2DecoderModule = Od?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (od._KTX2DecoderModule = KTX2DECODER);
          const dd = "number" === typeof Od ? Od : Od.numWorkers ?? od.DefaultNumWorkers;
          od._Initialize(dd)
        }
      }
      async _uploadAsync(dd, Od, md) {
        const Wd = await this._decodeAsync(dd, md);
        this._createTexture(Wd, Od, md)
      }
      async _decodeAsync(dd, Od) {
        const md = this._engine.getCaps(),
          Wd = {
            astc: !!md.astc,
            bptc: !!md.bptc,
            s3tc: !!md.s3tc,
            pvrtc: !!md.pvrtc,
            etc2: !!md.etc2,
            etc1: !!md.etc1
          };
        if (od._WorkerPoolPromise) {
          const md = await od._WorkerPoolPromise;
          return await new Promise(((Fd, Rd) => {
            md.push(((md, Xd) => {
              const Kd = dd => {
                  md.removeEventListener("error", Kd), md.removeEventListener("message", hd), Rd(dd), Xd()
                },
                hd = dd => {
                  "decoded" === dd.data.action && (md.removeEventListener("error", Kd), md.removeEventListener("message", hd), dd.data.success ? Fd(dd.data.decodedData) : Rd({
                    message: dd.data.tX
                  }), Xd())
                };
              md.addEventListener("error", Kd), md.addEventListener("message", hd), md.postMessage({
                action: "setDefaultDecoderOptions",
                options: od.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const vd = new Uint8Array(dd.byteLength);
              vd.set(new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength)), md.postMessage({
                action: "decode",
                data: vd,
                caps: Wd,
                options: Od
              }, [vd.buffer])
            }))
          }))
        }
        if (od._DecoderModulePromise) {
          const Wd = await od._DecoderModulePromise;
          return od.DefaultDecoderOptions.isDirty && (od._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = od.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Fd, Rd) => {
            Wd.decode(dd, md, Od).then((dd => {
              Fd(dd)
            })).catch((dd => {
              Rd({
                message: dd
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(dd, Od, md) {
        if ((dd.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, Od), md && (md.transcodedFormat = dd.transcodedFormat, md.isInGammaSpace = dd.isInGammaSpace, md.hasAlpha = dd.hasAlpha, md.transcoderName = dd.transcoderName);
        let Wd = !0;
        switch (dd.transcodedFormat) {
          case 32856:
            Od.type = 0, Od.format = 5;
            break;
          case 33321:
            Od.type = 0, Od.format = 6;
            break;
          case 33323:
            Od.type = 0, Od.format = 7;
            break;
          default:
            Od.format = dd.transcodedFormat, Wd = !1
        }
        if (Od._gammaSpace = dd.isInGammaSpace, Od.generateMipMaps = dd.mipmaps.length > 1, Od.width = dd.mipmaps[0].width, Od.height = dd.mipmaps[0].height, dd.errors) throw new Error("KTX2 container - could not transcode the data. " + dd.errors);
        for (let Fd = 0; Fd < dd.mipmaps.length; ++Fd) {
          const md = dd.mipmaps[Fd];
          if (!md || !md.data) throw new Error("KTX2 container - could not transcode one of the image");
          Wd ? (Od.width = md.width, Od.height = md.height, this._engine._uploadDataToTextureDirectly(Od, md.data, 0, Fd, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(Od, dd.transcodedFormat, md.width, md.height, md.data, 0, Fd)
        }
        Od._extension = ".ktx2", Od.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(dd) {
        if (dd.byteLength >= 12) {
          const Od = new Uint8Array(dd.buffer, dd.byteOffset, 12);
          if (171 === Od[0] && 75 === Od[1] && 84 === Od[2] && 88 === Od[3] && 32 === Od[4] && 50 === Od[5] && 48 === Od[6] && 187 === Od[7] && 13 === Od[8] && 10 === Od[9] && 26 === Od[10] && 10 === Od[11]) return !0
        }
        return !1
      }
    }

    function Nd(dd) {
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
    od.URLConfig = {
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
    }, od.DefaultNumWorkers = od.GetDefaultNumWorkers(), od.DefaultDecoderOptions = new class {
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
            transcodeFormat: [Xd.BC1_RGB, Xd.BC3_RGBA],
            yes: {
              transcodeFormat: Xd.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = dd, dd
      }
    };
    class qd {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(dd, Od, md, Wd) {
        if (Array.isArray(dd)) return;
        Od._invertVScale = !Od.invertY;
        const Rd = Od.Iq(),
          Xd = new Fd(dd, 6),
          Kd = Nd(Xd.glInternalFormat);
        null !== Kd ? (Od.format = Kd, Od._useSRGBBuffer = Rd._getUseSRGBBuffer(!0, !Od.generateMipMaps), Od._gammaSpace = !0) : Od.format = Xd.glInternalFormat;
        const hd = Xd.numberOfMipmapLevels > 1 && Od.generateMipMaps;
        Rd._unpackFlipY(!0), Xd.uploadLevels(Od, Od.generateMipMaps), Od.width = Xd.pixelWidth, Od.height = Xd.pixelHeight, Rd._setCubeMapTextureParams(Od, hd, Xd.numberOfMipmapLevels - 1), Od.isReady = !0, Od.onLoadedObservable.notifyObservers(Od), Od.onLoadedObservable.clear(), Wd && Wd()
      }
      loadData(dd, Od, md, Rd) {
        if (Fd.IsValid(dd)) {
          Od._invertVScale = !Od.invertY;
          const Wd = new Fd(dd, 1),
            Rd = Nd(Wd.glInternalFormat);
          null !== Rd ? (Od.format = Rd, Od._useSRGBBuffer = Od.Iq()._getUseSRGBBuffer(!0, !Od.generateMipMaps), Od._gammaSpace = !0) : Od.format = Wd.glInternalFormat, md(Wd.pixelWidth, Wd.pixelHeight, Od.generateMipMaps, !0, (() => {
            Wd.uploadLevels(Od, Od.generateMipMaps)
          }), Wd.isInvalid)
        } else if (od.IsValid(dd)) {
          new od(Od.Iq())._uploadAsync(dd, Od, Rd).then((() => {
            md(Od.width, Od.height, Od.generateMipMaps, !0, (() => {}), !1)
          }), (dd => {
            Wd.c.Warn(`Failed to load KTX2 texture data: ${dd.message}`), md(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Wd.c.Error("texture missing KTX identifier"), md(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  54270: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd
    });
    class Wd {
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
        for (const Od of this._workerInfos)
          if (Od.idle) return this._execute(Od, dd), !0;
        return !1
      }
      _execute(dd, Od) {
        dd.idle = !1, dd.workerPromise.then((md => {
          Od(md, (() => {
            const Od = this._pendingActions.shift();
            Od ? this._execute(dd, Od) : dd.idle = !0
          }))
        }))
      }
    }
    class Fd extends Wd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fd.DefaultOptions;
        super([]), this._maxWorkers = dd, this._createWorkerAsync = Od, this._options = md
      }
      push(dd) {
        if (!this._executeOnIdleWorker(dd))
          if (this._workerInfos.length < this._maxWorkers) {
            const Od = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Od), this._execute(Od, dd)
          } else this._pendingActions.push(dd)
      }
      _execute(dd, Od) {
        dd.timeoutId && (clearTimeout(dd.timeoutId), delete dd.timeoutId), super._execute(dd, ((md, Wd) => {
          Od(md, (() => {
            Wd(), dd.idle && (dd.timeoutId = setTimeout((() => {
              dd.workerPromise.then((dd => {
                dd.terminate()
              }));
              const Od = this._workerInfos.indexOf(dd); - 1 !== Od && this._workerInfos.splice(Od, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Fd.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);