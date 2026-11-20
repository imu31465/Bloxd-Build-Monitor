export const id = 303;
export const ids = [303];
export const modules = {
  40943: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      _KTXTextureLoader: () => jb
    });
    var Ab = Ub(37989);
    class Mb {
      constructor(bb, ab) {
        if (this.data = bb, this.isInvalid = !1, !Mb.IsValid(bb)) return this.isInvalid = !0, void Ab.e.Error("texture missing KTX identifier");
        const Ub = Uint32Array.BYTES_PER_ELEMENT,
          Tb = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * Ub),
          Eb = 67305985 === Tb.getUint32(0, !0);
        return this.glType = Tb.getUint32(1 * Ub, Eb), this.glTypeSize = Tb.getUint32(2 * Ub, Eb), this.glFormat = Tb.getUint32(3 * Ub, Eb), this.glInternalFormat = Tb.getUint32(4 * Ub, Eb), this.glBaseInternalFormat = Tb.getUint32(5 * Ub, Eb), this.pixelWidth = Tb.getUint32(6 * Ub, Eb), this.pixelHeight = Tb.getUint32(7 * Ub, Eb), this.pixelDepth = Tb.getUint32(8 * Ub, Eb), this.numberOfArrayElements = Tb.getUint32(9 * Ub, Eb), this.numberOfFaces = Tb.getUint32(10 * Ub, Eb), this.numberOfMipmapLevels = Tb.getUint32(11 * Ub, Eb), this.bytesOfKeyValueData = Tb.getUint32(12 * Ub, Eb), 0 !== this.glType ? (Ab.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Ab.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Ab.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== ab ? (Ab.e.Error("number of faces expected" + ab + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Mb.COMPRESSED_2D))
      }
      uploadLevels(bb, ab) {
        switch (this.loadType) {
          case Mb.COMPRESSED_2D:
            this._upload2DCompressedLevels(bb, ab);
          case Mb.TEX_2D:
          case Mb.COMPRESSED_3D:
          case Mb.TEX_3D:
        }
      }
      _upload2DCompressedLevels(bb, ab) {
        let Ub = Mb.HEADER_LEN + this.bytesOfKeyValueData,
          Ab = this.pixelWidth,
          Tb = this.pixelHeight;
        const Eb = ab ? this.numberOfMipmapLevels : 1;
        for (let Mb = 0; Mb < Eb; Mb++) {
          const ab = new Int32Array(this.data.buffer, this.data.byteOffset + Ub, 1)[0];
          Ub += 4;
          for (let Eb = 0; Eb < this.numberOfFaces; Eb++) {
            const Yb = new Uint8Array(this.data.buffer, this.data.byteOffset + Ub, ab);
            bb.vj()._uploadCompressedDataToTextureDirectly(bb, bb.format, Ab, Tb, Yb, Eb, Mb), Ub += ab, Ub += 3 - (ab + 3) % 4
          }
          Ab = Math.max(1, .5 * Ab), Tb = Math.max(1, .5 * Tb)
        }
      }
      static IsValid(bb) {
        if (bb.byteLength >= 12) {
          const ab = new Uint8Array(bb.buffer, bb.byteOffset, 12);
          if (171 === ab[0] && 75 === ab[1] && 84 === ab[2] && 88 === ab[3] && 32 === ab[4] && 49 === ab[5] && 49 === ab[6] && 187 === ab[7] && 13 === ab[8] && 10 === ab[9] && 26 === ab[10] && 10 === ab[11]) return !0
        }
        return !1
      }
    }
    Mb.HEADER_LEN = 64, Mb.COMPRESSED_2D = 0, Mb.COMPRESSED_3D = 1, Mb.TEX_2D = 2, Mb.TEX_3D = 3;
    var Tb, Eb, Yb, Bb = Ub(40948),
      eb = Ub(39195);

    function vb(bb, ab) {
      const Ub = ab?.jsDecoderModule || KTX2DECODER;
      bb && (bb.wasmBaseUrl && (Ub.Transcoder.WasmBaseUrl = bb.wasmBaseUrl), bb.wasmUASTCToASTC && (Ub.LiteTranscoder_UASTC_ASTC.WasmModuleURL = bb.wasmUASTCToASTC), bb.wasmUASTCToBC7 && (Ub.LiteTranscoder_UASTC_BC7.WasmModuleURL = bb.wasmUASTCToBC7), bb.wasmUASTCToRGBA_UNORM && (Ub.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = bb.wasmUASTCToRGBA_UNORM), bb.wasmUASTCToRGBA_SRGB && (Ub.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = bb.wasmUASTCToRGBA_SRGB), bb.wasmUASTCToR8_UNORM && (Ub.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = bb.wasmUASTCToR8_UNORM), bb.wasmUASTCToRG8_UNORM && (Ub.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = bb.wasmUASTCToRG8_UNORM), bb.jsMSCTranscoder && (Ub.MSCTranscoder.JSModuleURL = bb.jsMSCTranscoder), bb.wasmMSCTranscoder && (Ub.MSCTranscoder.WasmModuleURL = bb.wasmMSCTranscoder), bb.wasmZSTDDecoder && (Ub.ZSTDDecoder.WasmModuleURL = bb.wasmZSTDDecoder)), ab && (ab.wasmUASTCToASTC && (Ub.LiteTranscoder_UASTC_ASTC.WasmBinary = ab.wasmUASTCToASTC), ab.wasmUASTCToBC7 && (Ub.LiteTranscoder_UASTC_BC7.WasmBinary = ab.wasmUASTCToBC7), ab.wasmUASTCToRGBA_UNORM && (Ub.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = ab.wasmUASTCToRGBA_UNORM), ab.wasmUASTCToRGBA_SRGB && (Ub.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = ab.wasmUASTCToRGBA_SRGB), ab.wasmUASTCToR8_UNORM && (Ub.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = ab.wasmUASTCToR8_UNORM), ab.wasmUASTCToRG8_UNORM && (Ub.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = ab.wasmUASTCToRG8_UNORM), ab.jsMSCTranscoder && (Ub.MSCTranscoder.JSModule = ab.jsMSCTranscoder), ab.wasmMSCTranscoder && (Ub.MSCTranscoder.WasmBinary = ab.wasmMSCTranscoder), ab.wasmZSTDDecoder && (Ub.ZSTDDecoder.WasmBinary = ab.wasmZSTDDecoder))
    }

    function Lb(bb) {
      let ab;
      "undefined" === typeof bb && "undefined" !== typeof KTX2DECODER && (bb = KTX2DECODER), onmessage = Ub => {
        if (Ub.data) switch (Ub.data.action) {
          case "init": {
            const Ab = Ub.data.urls;
            Ab && (Ab.jsDecoderModule && "undefined" === typeof bb && (importScripts(Ab.jsDecoderModule), bb = KTX2DECODER), vb(Ab)), Ub.data.wasmBinaries && vb(void 0, {
              ...Ub.data.wasmBinaries,
              jsDecoderModule: bb
            }), ab = new bb.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            bb.KTX2Decoder.DefaultDecoderOptions = Ub.data.options;
            break;
          case "decode":
            ab.decode(Ub.data.data, Ub.data.caps, Ub.data.options).then((bb => {
              const ab = [];
              for (let Ub = 0; Ub < bb.mipmaps.length; ++Ub) {
                const Ab = bb.mipmaps[Ub];
                Ab && Ab.data && ab.push(Ab.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: bb
              }, ab)
            })).catch((bb => {
              postMessage({
                action: "decoded",
                success: !1,
                fE: bb
              })
            }))
        }
      }
    }! function(bb) {
      bb[bb.ETC1S = 0] = "ETC1S", bb[bb.UASTC4x4 = 1] = "UASTC4x4", bb[bb.RGBA32 = 2] = "RGBA32"
    }(Tb || (Tb = {})),
    function(bb) {
      bb[bb.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", bb[bb.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", bb[bb.BC7_RGBA = 1] = "BC7_RGBA", bb[bb.BC3_RGBA = 2] = "BC3_RGBA", bb[bb.BC1_RGB = 3] = "BC1_RGB", bb[bb.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", bb[bb.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", bb[bb.ETC2_RGBA = 6] = "ETC2_RGBA", bb[bb.ETC1_RGB = 7] = "ETC1_RGB", bb[bb.RGBA32 = 8] = "RGBA32", bb[bb.R8 = 9] = "R8", bb[bb.RG8 = 10] = "RG8"
    }(Eb || (Eb = {})),
    function(bb) {
      bb[bb.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", bb[bb.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", bb[bb.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", bb[bb.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", bb[bb.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", bb[bb.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", bb[bb.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", bb[bb.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", bb[bb.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", bb[bb.RGBA8Format = 32856] = "RGBA8Format", bb[bb.R8Format = 33321] = "R8Format", bb[bb.RG8Format = 33323] = "RG8Format"
    }(Yb || (Yb = {}));
    class Pb {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(bb) {
        if (Pb._WorkerPoolPromise || Pb._DecoderModulePromise) return;
        const ab = {
          wasmBaseUrl: eb.h.ScriptBaseUrl,
          jsDecoderModule: eb.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: eb.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: eb.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: eb.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: eb.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: eb.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: eb.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: eb.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: eb.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: eb.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        bb && "function" === typeof Worker && "undefined" !== typeof URL ? Pb._WorkerPoolPromise = new Promise((Ub => {
          const Ab = `${vb}(${Lb})()`,
            Mb = URL.createObjectURL(new Blob([Ab], {
              type: "application/javascript"
            }));
          Ub(new Bb.c(bb, (async () => await async function(bb, ab, Ub) {
            return await new Promise(((Ab, Mb) => {
              const Tb = ab => {
                  bb.removeEventListener("error", Tb), bb.removeEventListener("message", Eb), Mb(ab)
                },
                Eb = ab => {
                  "init" === ab.data.action && (bb.removeEventListener("error", Tb), bb.removeEventListener("message", Eb), Ab(bb))
                };
              bb.addEventListener("error", Tb), bb.addEventListener("message", Eb), bb.postMessage({
                action: "init",
                urls: Ub,
                wasmBinaries: ab
              })
            }))
          }(new Worker(Mb), void 0, ab))))
        })) : "undefined" === typeof Pb._KTX2DecoderModule ? Pb._DecoderModulePromise = eb.h.LoadBabylonScriptAsync(ab.jsDecoderModule).then((() => (Pb._KTX2DecoderModule = KTX2DECODER, Pb._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Pb._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, vb(ab, Pb._KTX2DecoderModule), new Pb._KTX2DecoderModule.KTX2Decoder))) : (Pb._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Pb._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Pb._DecoderModulePromise = Promise.resolve(new Pb._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pb.DefaultNumWorkers;
        this._engine = bb;
        const Ub = "object" === typeof ab && ab.workerPool || Pb.WorkerPool;
        if (Ub) Pb._WorkerPoolPromise = Promise.resolve(Ub);
        else {
          "object" === typeof ab ? Pb._KTX2DecoderModule = ab?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Pb._KTX2DecoderModule = KTX2DECODER);
          const bb = "number" === typeof ab ? ab : ab.numWorkers ?? Pb.DefaultNumWorkers;
          Pb._Initialize(bb)
        }
      }
      async _uploadAsync(bb, ab, Ub) {
        const Ab = await this._decodeAsync(bb, Ub);
        this._createTexture(Ab, ab, Ub)
      }
      async _decodeAsync(bb, ab) {
        const Ub = this._engine.getCaps(),
          Ab = {
            astc: !!Ub.astc,
            bptc: !!Ub.bptc,
            s3tc: !!Ub.s3tc,
            pvrtc: !!Ub.pvrtc,
            etc2: !!Ub.etc2,
            etc1: !!Ub.etc1
          };
        if (Pb._WorkerPoolPromise) {
          const Ub = await Pb._WorkerPoolPromise;
          return await new Promise(((Mb, Tb) => {
            Ub.push(((Ub, Eb) => {
              const Yb = bb => {
                  Ub.removeEventListener("error", Yb), Ub.removeEventListener("message", Bb), Tb(bb), Eb()
                },
                Bb = bb => {
                  "decoded" === bb.data.action && (Ub.removeEventListener("error", Yb), Ub.removeEventListener("message", Bb), bb.data.success ? Mb(bb.data.decodedData) : Tb({
                    message: bb.data.fE
                  }), Eb())
                };
              Ub.addEventListener("error", Yb), Ub.addEventListener("message", Bb), Ub.postMessage({
                action: "setDefaultDecoderOptions",
                options: Pb.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const eb = new Uint8Array(bb.byteLength);
              eb.set(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength)), Ub.postMessage({
                action: "decode",
                data: eb,
                caps: Ab,
                options: ab
              }, [eb.buffer])
            }))
          }))
        }
        if (Pb._DecoderModulePromise) {
          const Ab = await Pb._DecoderModulePromise;
          return Pb.DefaultDecoderOptions.isDirty && (Pb._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Pb.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Mb, Tb) => {
            Ab.decode(bb, Ub, ab).then((bb => {
              Mb(bb)
            })).catch((bb => {
              Tb({
                message: bb
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(bb, ab, Ub) {
        if ((bb.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, ab), Ub && (Ub.transcodedFormat = bb.transcodedFormat, Ub.isInGammaSpace = bb.isInGammaSpace, Ub.hasAlpha = bb.hasAlpha, Ub.transcoderName = bb.transcoderName);
        let Ab = !0;
        switch (bb.transcodedFormat) {
          case 32856:
            ab.type = 0, ab.format = 5;
            break;
          case 33321:
            ab.type = 0, ab.format = 6;
            break;
          case 33323:
            ab.type = 0, ab.format = 7;
            break;
          default:
            ab.format = bb.transcodedFormat, Ab = !1
        }
        if (ab._gammaSpace = bb.isInGammaSpace, ab.generateMipMaps = bb.mipmaps.length > 1, ab.width = bb.mipmaps[0].width, ab.height = bb.mipmaps[0].height, bb.errors) throw new Error("KTX2 container - could not transcode the data. " + bb.errors);
        for (let Mb = 0; Mb < bb.mipmaps.length; ++Mb) {
          const Ub = bb.mipmaps[Mb];
          if (!Ub || !Ub.data) throw new Error("KTX2 container - could not transcode one of the image");
          Ab ? (ab.width = Ub.width, ab.height = Ub.height, this._engine._uploadDataToTextureDirectly(ab, Ub.data, 0, Mb, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(ab, bb.transcodedFormat, Ub.width, Ub.height, Ub.data, 0, Mb)
        }
        ab._extension = ".ktx2", ab.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(bb) {
        if (bb.byteLength >= 12) {
          const ab = new Uint8Array(bb.buffer, bb.byteOffset, 12);
          if (171 === ab[0] && 75 === ab[1] && 84 === ab[2] && 88 === ab[3] && 32 === ab[4] && 50 === ab[5] && 48 === ab[6] && 187 === ab[7] && 13 === ab[8] && 10 === ab[9] && 26 === ab[10] && 10 === ab[11]) return !0
        }
        return !1
      }
    }

    function Xb(bb) {
      switch (bb) {
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
    Pb.URLConfig = {
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
    }, Pb.DefaultNumWorkers = Pb.GetDefaultNumWorkers(), Pb.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(bb) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== bb && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = bb, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(bb) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== bb && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = bb, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(bb) {
        this._forceRGBA !== bb && (this._forceRGBA = bb, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(bb) {
        this._forceR8 !== bb && (this._forceR8 = bb, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(bb) {
        this._forceRG8 !== bb && (this._forceRG8 = bb, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(bb) {
        this._bypassTranscoders !== bb && (this._bypassTranscoders = bb, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const bb = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (bb.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (bb.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (bb.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (bb.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (bb.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (bb.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [Eb.BC1_RGB, Eb.BC3_RGBA],
            yes: {
              transcodeFormat: Eb.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = bb, bb
      }
    };
    class jb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, ab, Ub, Ab) {
        if (Array.isArray(bb)) return;
        ab._invertVScale = !ab.invertY;
        const Tb = ab.vj(),
          Eb = new Mb(bb, 6),
          Yb = Xb(Eb.glInternalFormat);
        null !== Yb ? (ab.format = Yb, ab._useSRGBBuffer = Tb._getUseSRGBBuffer(!0, !ab.generateMipMaps), ab._gammaSpace = !0) : ab.format = Eb.glInternalFormat;
        const Bb = Eb.numberOfMipmapLevels > 1 && ab.generateMipMaps;
        Tb._unpackFlipY(!0), Eb.uploadLevels(ab, ab.generateMipMaps), ab.width = Eb.pixelWidth, ab.height = Eb.pixelHeight, Tb._setCubeMapTextureParams(ab, Bb, Eb.numberOfMipmapLevels - 1), ab.isReady = !0, ab.onLoadedObservable.notifyObservers(ab), ab.onLoadedObservable.clear(), Ab && Ab()
      }
      loadData(bb, ab, Ub, Tb) {
        if (Mb.IsValid(bb)) {
          ab._invertVScale = !ab.invertY;
          const Ab = new Mb(bb, 1),
            Tb = Xb(Ab.glInternalFormat);
          null !== Tb ? (ab.format = Tb, ab._useSRGBBuffer = ab.vj()._getUseSRGBBuffer(!0, !ab.generateMipMaps), ab._gammaSpace = !0) : ab.format = Ab.glInternalFormat, Ub(Ab.pixelWidth, Ab.pixelHeight, ab.generateMipMaps, !0, (() => {
            Ab.uploadLevels(ab, ab.generateMipMaps)
          }), Ab.isInvalid)
        } else if (Pb.IsValid(bb)) {
          new Pb(ab.vj())._uploadAsync(bb, ab, Tb).then((() => {
            Ub(ab.width, ab.height, ab.generateMipMaps, !0, (() => {}), !1)
          }), (bb => {
            Ab.e.Warn(`Failed to load KTX2 texture data: ${bb.message}`), Ub(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Ab.e.Error("texture missing KTX identifier"), Ub(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  40948: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb
    });
    class Ab {
      constructor(bb) {
        this._pendingActions = new Array, this._workerInfos = bb.map((bb => ({
          workerPromise: Promise.resolve(bb),
          idle: !0
        })))
      }
      dispose() {
        for (const bb of this._workerInfos) bb.workerPromise.then((bb => {
          bb.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(bb) {
        this._executeOnIdleWorker(bb) || this._pendingActions.push(bb)
      }
      _executeOnIdleWorker(bb) {
        for (const ab of this._workerInfos)
          if (ab.idle) return this._execute(ab, bb), !0;
        return !1
      }
      _execute(bb, ab) {
        bb.idle = !1, bb.workerPromise.then((Ub => {
          ab(Ub, (() => {
            const ab = this._pendingActions.shift();
            ab ? this._execute(bb, ab) : bb.idle = !0
          }))
        }))
      }
    }
    class Mb extends Ab {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mb.DefaultOptions;
        super([]), this._maxWorkers = bb, this._createWorkerAsync = ab, this._options = Ub
      }
      push(bb) {
        if (!this._executeOnIdleWorker(bb))
          if (this._workerInfos.length < this._maxWorkers) {
            const ab = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(ab), this._execute(ab, bb)
          } else this._pendingActions.push(bb)
      }
      _execute(bb, ab) {
        bb.timeoutId && (clearTimeout(bb.timeoutId), delete bb.timeoutId), super._execute(bb, ((Ub, Ab) => {
          ab(Ub, (() => {
            Ab(), bb.idle && (bb.timeoutId = setTimeout((() => {
              bb.workerPromise.then((bb => {
                bb.terminate()
              }));
              const ab = this._workerInfos.indexOf(bb); - 1 !== ab && this._workerInfos.splice(ab, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Mb.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);