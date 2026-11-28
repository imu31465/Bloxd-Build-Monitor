export const id = 632;
export const ids = [632];
export const modules = {
  54075: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      _KTXTextureLoader: () => Cb
    });
    var eb = Mb(39971);
    class Hb {
      constructor(bb, wb) {
        if (this.data = bb, this.isInvalid = !1, !Hb.IsValid(bb)) return this.isInvalid = !0, void eb.b.Error("texture missing KTX identifier");
        const Mb = Uint32Array.BYTES_PER_ELEMENT,
          pb = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * Mb),
          Vb = 67305985 === pb.getUint32(0, !0);
        return this.glType = pb.getUint32(1 * Mb, Vb), this.glTypeSize = pb.getUint32(2 * Mb, Vb), this.glFormat = pb.getUint32(3 * Mb, Vb), this.glInternalFormat = pb.getUint32(4 * Mb, Vb), this.glBaseInternalFormat = pb.getUint32(5 * Mb, Vb), this.pixelWidth = pb.getUint32(6 * Mb, Vb), this.pixelHeight = pb.getUint32(7 * Mb, Vb), this.pixelDepth = pb.getUint32(8 * Mb, Vb), this.numberOfArrayElements = pb.getUint32(9 * Mb, Vb), this.numberOfFaces = pb.getUint32(10 * Mb, Vb), this.numberOfMipmapLevels = pb.getUint32(11 * Mb, Vb), this.bytesOfKeyValueData = pb.getUint32(12 * Mb, Vb), 0 !== this.glType ? (eb.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (eb.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (eb.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== wb ? (eb.b.Error("number of faces expected" + wb + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Hb.COMPRESSED_2D))
      }
      uploadLevels(bb, wb) {
        switch (this.loadType) {
          case Hb.COMPRESSED_2D:
            this._upload2DCompressedLevels(bb, wb);
          case Hb.TEX_2D:
          case Hb.COMPRESSED_3D:
          case Hb.TEX_3D:
        }
      }
      _upload2DCompressedLevels(bb, wb) {
        let Mb = Hb.HEADER_LEN + this.bytesOfKeyValueData,
          eb = this.pixelWidth,
          pb = this.pixelHeight;
        const Vb = wb ? this.numberOfMipmapLevels : 1;
        for (let Hb = 0; Hb < Vb; Hb++) {
          const wb = new Int32Array(this.data.buffer, this.data.byteOffset + Mb, 1)[0];
          Mb += 4;
          for (let Vb = 0; Vb < this.numberOfFaces; Vb++) {
            const gb = new Uint8Array(this.data.buffer, this.data.byteOffset + Mb, wb);
            bb.DC()._uploadCompressedDataToTextureDirectly(bb, bb.format, eb, pb, gb, Vb, Hb), Mb += wb, Mb += 3 - (wb + 3) % 4
          }
          eb = Math.max(1, .5 * eb), pb = Math.max(1, .5 * pb)
        }
      }
      static IsValid(bb) {
        if (bb.byteLength >= 12) {
          const wb = new Uint8Array(bb.buffer, bb.byteOffset, 12);
          if (171 === wb[0] && 75 === wb[1] && 84 === wb[2] && 88 === wb[3] && 32 === wb[4] && 49 === wb[5] && 49 === wb[6] && 187 === wb[7] && 13 === wb[8] && 10 === wb[9] && 26 === wb[10] && 10 === wb[11]) return !0
        }
        return !1
      }
    }
    Hb.HEADER_LEN = 64, Hb.COMPRESSED_2D = 0, Hb.COMPRESSED_3D = 1, Hb.TEX_2D = 2, Hb.TEX_3D = 3;
    var pb, Vb, gb, lb = Mb(54084),
      Lb = Mb(41771);

    function Ib(bb, wb) {
      const Mb = wb?.jsDecoderModule || KTX2DECODER;
      bb && (bb.wasmBaseUrl && (Mb.Transcoder.WasmBaseUrl = bb.wasmBaseUrl), bb.wasmUASTCToASTC && (Mb.LiteTranscoder_UASTC_ASTC.WasmModuleURL = bb.wasmUASTCToASTC), bb.wasmUASTCToBC7 && (Mb.LiteTranscoder_UASTC_BC7.WasmModuleURL = bb.wasmUASTCToBC7), bb.wasmUASTCToRGBA_UNORM && (Mb.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = bb.wasmUASTCToRGBA_UNORM), bb.wasmUASTCToRGBA_SRGB && (Mb.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = bb.wasmUASTCToRGBA_SRGB), bb.wasmUASTCToR8_UNORM && (Mb.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = bb.wasmUASTCToR8_UNORM), bb.wasmUASTCToRG8_UNORM && (Mb.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = bb.wasmUASTCToRG8_UNORM), bb.jsMSCTranscoder && (Mb.MSCTranscoder.JSModuleURL = bb.jsMSCTranscoder), bb.wasmMSCTranscoder && (Mb.MSCTranscoder.WasmModuleURL = bb.wasmMSCTranscoder), bb.wasmZSTDDecoder && (Mb.ZSTDDecoder.WasmModuleURL = bb.wasmZSTDDecoder)), wb && (wb.wasmUASTCToASTC && (Mb.LiteTranscoder_UASTC_ASTC.WasmBinary = wb.wasmUASTCToASTC), wb.wasmUASTCToBC7 && (Mb.LiteTranscoder_UASTC_BC7.WasmBinary = wb.wasmUASTCToBC7), wb.wasmUASTCToRGBA_UNORM && (Mb.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = wb.wasmUASTCToRGBA_UNORM), wb.wasmUASTCToRGBA_SRGB && (Mb.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = wb.wasmUASTCToRGBA_SRGB), wb.wasmUASTCToR8_UNORM && (Mb.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = wb.wasmUASTCToR8_UNORM), wb.wasmUASTCToRG8_UNORM && (Mb.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = wb.wasmUASTCToRG8_UNORM), wb.jsMSCTranscoder && (Mb.MSCTranscoder.JSModule = wb.jsMSCTranscoder), wb.wasmMSCTranscoder && (Mb.MSCTranscoder.WasmBinary = wb.wasmMSCTranscoder), wb.wasmZSTDDecoder && (Mb.ZSTDDecoder.WasmBinary = wb.wasmZSTDDecoder))
    }

    function Ob(bb) {
      let wb;
      "undefined" === typeof bb && "undefined" !== typeof KTX2DECODER && (bb = KTX2DECODER), onmessage = Mb => {
        if (Mb.data) switch (Mb.data.action) {
          case "init": {
            const eb = Mb.data.urls;
            eb && (eb.jsDecoderModule && "undefined" === typeof bb && (importScripts(eb.jsDecoderModule), bb = KTX2DECODER), Ib(eb)), Mb.data.wasmBinaries && Ib(void 0, {
              ...Mb.data.wasmBinaries,
              jsDecoderModule: bb
            }), wb = new bb.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            bb.KTX2Decoder.DefaultDecoderOptions = Mb.data.options;
            break;
          case "decode":
            wb.decode(Mb.data.data, Mb.data.caps, Mb.data.options).then((bb => {
              const wb = [];
              for (let Mb = 0; Mb < bb.mipmaps.length; ++Mb) {
                const eb = bb.mipmaps[Mb];
                eb && eb.data && wb.push(eb.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: bb
              }, wb)
            })).catch((bb => {
              postMessage({
                action: "decoded",
                success: !1,
                tV: bb
              })
            }))
        }
      }
    }! function(bb) {
      bb[bb.ETC1S = 0] = "ETC1S", bb[bb.UASTC4x4 = 1] = "UASTC4x4", bb[bb.RGBA32 = 2] = "RGBA32"
    }(pb || (pb = {})),
    function(bb) {
      bb[bb.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", bb[bb.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", bb[bb.BC7_RGBA = 1] = "BC7_RGBA", bb[bb.BC3_RGBA = 2] = "BC3_RGBA", bb[bb.BC1_RGB = 3] = "BC1_RGB", bb[bb.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", bb[bb.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", bb[bb.ETC2_RGBA = 6] = "ETC2_RGBA", bb[bb.ETC1_RGB = 7] = "ETC1_RGB", bb[bb.RGBA32 = 8] = "RGBA32", bb[bb.R8 = 9] = "R8", bb[bb.RG8 = 10] = "RG8"
    }(Vb || (Vb = {})),
    function(bb) {
      bb[bb.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", bb[bb.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", bb[bb.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", bb[bb.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", bb[bb.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", bb[bb.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", bb[bb.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", bb[bb.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", bb[bb.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", bb[bb.RGBA8Format = 32856] = "RGBA8Format", bb[bb.R8Format = 33321] = "R8Format", bb[bb.RG8Format = 33323] = "RG8Format"
    }(gb || (gb = {}));
    class Ub {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(bb) {
        if (Ub._WorkerPoolPromise || Ub._DecoderModulePromise) return;
        const wb = {
          wasmBaseUrl: Lb.e.ScriptBaseUrl,
          jsDecoderModule: Lb.e.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Lb.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Lb.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Lb.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Lb.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Lb.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Lb.e.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Lb.e.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Lb.e.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Lb.e.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        bb && "function" === typeof Worker && "undefined" !== typeof URL ? Ub._WorkerPoolPromise = new Promise((Mb => {
          const eb = `${Ib}(${Ob})()`,
            Hb = URL.createObjectURL(new Blob([eb], {
              type: "application/javascript"
            }));
          Mb(new lb.c(bb, (async () => await async function(bb, wb, Mb) {
            return await new Promise(((eb, Hb) => {
              const pb = wb => {
                  bb.removeEventListener("error", pb), bb.removeEventListener("message", Vb), Hb(wb)
                },
                Vb = wb => {
                  "init" === wb.data.action && (bb.removeEventListener("error", pb), bb.removeEventListener("message", Vb), eb(bb))
                };
              bb.addEventListener("error", pb), bb.addEventListener("message", Vb), bb.postMessage({
                action: "init",
                urls: Mb,
                wasmBinaries: wb
              })
            }))
          }(new Worker(Hb), void 0, wb))))
        })) : "undefined" === typeof Ub._KTX2DecoderModule ? Ub._DecoderModulePromise = Lb.e.LoadBabylonScriptAsync(wb.jsDecoderModule).then((() => (Ub._KTX2DecoderModule = KTX2DECODER, Ub._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Ub._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Ib(wb, Ub._KTX2DecoderModule), new Ub._KTX2DecoderModule.KTX2Decoder))) : (Ub._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Ub._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Ub._DecoderModulePromise = Promise.resolve(new Ub._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ub.DefaultNumWorkers;
        this._engine = bb;
        const Mb = "object" === typeof wb && wb.workerPool || Ub.WorkerPool;
        if (Mb) Ub._WorkerPoolPromise = Promise.resolve(Mb);
        else {
          "object" === typeof wb ? Ub._KTX2DecoderModule = wb?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Ub._KTX2DecoderModule = KTX2DECODER);
          const bb = "number" === typeof wb ? wb : wb.numWorkers ?? Ub.DefaultNumWorkers;
          Ub._Initialize(bb)
        }
      }
      async _uploadAsync(bb, wb, Mb) {
        const eb = await this._decodeAsync(bb, Mb);
        this._createTexture(eb, wb, Mb)
      }
      async _decodeAsync(bb, wb) {
        const Mb = this._engine.getCaps(),
          eb = {
            astc: !!Mb.astc,
            bptc: !!Mb.bptc,
            s3tc: !!Mb.s3tc,
            pvrtc: !!Mb.pvrtc,
            etc2: !!Mb.etc2,
            etc1: !!Mb.etc1
          };
        if (Ub._WorkerPoolPromise) {
          const Mb = await Ub._WorkerPoolPromise;
          return await new Promise(((Hb, pb) => {
            Mb.push(((Mb, Vb) => {
              const gb = bb => {
                  Mb.removeEventListener("error", gb), Mb.removeEventListener("message", lb), pb(bb), Vb()
                },
                lb = bb => {
                  "decoded" === bb.data.action && (Mb.removeEventListener("error", gb), Mb.removeEventListener("message", lb), bb.data.success ? Hb(bb.data.decodedData) : pb({
                    message: bb.data.tV
                  }), Vb())
                };
              Mb.addEventListener("error", gb), Mb.addEventListener("message", lb), Mb.postMessage({
                action: "setDefaultDecoderOptions",
                options: Ub.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Lb = new Uint8Array(bb.byteLength);
              Lb.set(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength)), Mb.postMessage({
                action: "decode",
                data: Lb,
                caps: eb,
                options: wb
              }, [Lb.buffer])
            }))
          }))
        }
        if (Ub._DecoderModulePromise) {
          const eb = await Ub._DecoderModulePromise;
          return Ub.DefaultDecoderOptions.isDirty && (Ub._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Ub.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Hb, pb) => {
            eb.decode(bb, Mb, wb).then((bb => {
              Hb(bb)
            })).catch((bb => {
              pb({
                message: bb
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(bb, wb, Mb) {
        if ((bb.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, wb), Mb && (Mb.transcodedFormat = bb.transcodedFormat, Mb.isInGammaSpace = bb.isInGammaSpace, Mb.hasAlpha = bb.hasAlpha, Mb.transcoderName = bb.transcoderName);
        let eb = !0;
        switch (bb.transcodedFormat) {
          case 32856:
            wb.type = 0, wb.format = 5;
            break;
          case 33321:
            wb.type = 0, wb.format = 6;
            break;
          case 33323:
            wb.type = 0, wb.format = 7;
            break;
          default:
            wb.format = bb.transcodedFormat, eb = !1
        }
        if (wb._gammaSpace = bb.isInGammaSpace, wb.generateMipMaps = bb.mipmaps.length > 1, wb.width = bb.mipmaps[0].width, wb.height = bb.mipmaps[0].height, bb.errors) throw new Error("KTX2 container - could not transcode the data. " + bb.errors);
        for (let Hb = 0; Hb < bb.mipmaps.length; ++Hb) {
          const Mb = bb.mipmaps[Hb];
          if (!Mb || !Mb.data) throw new Error("KTX2 container - could not transcode one of the image");
          eb ? (wb.width = Mb.width, wb.height = Mb.height, this._engine._uploadDataToTextureDirectly(wb, Mb.data, 0, Hb, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(wb, bb.transcodedFormat, Mb.width, Mb.height, Mb.data, 0, Hb)
        }
        wb._extension = ".ktx2", wb.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(bb) {
        if (bb.byteLength >= 12) {
          const wb = new Uint8Array(bb.buffer, bb.byteOffset, 12);
          if (171 === wb[0] && 75 === wb[1] && 84 === wb[2] && 88 === wb[3] && 32 === wb[4] && 50 === wb[5] && 48 === wb[6] && 187 === wb[7] && 13 === wb[8] && 10 === wb[9] && 26 === wb[10] && 10 === wb[11]) return !0
        }
        return !1
      }
    }

    function tb(bb) {
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
    Ub.URLConfig = {
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
    }, Ub.DefaultNumWorkers = Ub.GetDefaultNumWorkers(), Ub.DefaultDecoderOptions = new class {
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
            transcodeFormat: [Vb.BC1_RGB, Vb.BC3_RGBA],
            yes: {
              transcodeFormat: Vb.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = bb, bb
      }
    };
    class Cb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, wb, Mb, eb) {
        if (Array.isArray(bb)) return;
        wb._invertVScale = !wb.invertY;
        const pb = wb.DC(),
          Vb = new Hb(bb, 6),
          gb = tb(Vb.glInternalFormat);
        null !== gb ? (wb.format = gb, wb._useSRGBBuffer = pb._getUseSRGBBuffer(!0, !wb.generateMipMaps), wb._gammaSpace = !0) : wb.format = Vb.glInternalFormat;
        const lb = Vb.numberOfMipmapLevels > 1 && wb.generateMipMaps;
        pb._unpackFlipY(!0), Vb.uploadLevels(wb, wb.generateMipMaps), wb.width = Vb.pixelWidth, wb.height = Vb.pixelHeight, pb._setCubeMapTextureParams(wb, lb, Vb.numberOfMipmapLevels - 1), wb.isReady = !0, wb.onLoadedObservable.notifyObservers(wb), wb.onLoadedObservable.clear(), eb && eb()
      }
      loadData(bb, wb, Mb, pb) {
        if (Hb.IsValid(bb)) {
          wb._invertVScale = !wb.invertY;
          const eb = new Hb(bb, 1),
            pb = tb(eb.glInternalFormat);
          null !== pb ? (wb.format = pb, wb._useSRGBBuffer = wb.DC()._getUseSRGBBuffer(!0, !wb.generateMipMaps), wb._gammaSpace = !0) : wb.format = eb.glInternalFormat, Mb(eb.pixelWidth, eb.pixelHeight, wb.generateMipMaps, !0, (() => {
            eb.uploadLevels(wb, wb.generateMipMaps)
          }), eb.isInvalid)
        } else if (Ub.IsValid(bb)) {
          new Ub(wb.DC())._uploadAsync(bb, wb, pb).then((() => {
            Mb(wb.width, wb.height, wb.generateMipMaps, !0, (() => {}), !1)
          }), (bb => {
            eb.b.Warn(`Failed to load KTX2 texture data: ${bb.message}`), Mb(0, 0, !1, !1, (() => {}), !0)
          }))
        } else eb.b.Error("texture missing KTX identifier"), Mb(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  54084: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    class eb {
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
        for (const wb of this._workerInfos)
          if (wb.idle) return this._execute(wb, bb), !0;
        return !1
      }
      _execute(bb, wb) {
        bb.idle = !1, bb.workerPromise.then((Mb => {
          wb(Mb, (() => {
            const wb = this._pendingActions.shift();
            wb ? this._execute(bb, wb) : bb.idle = !0
          }))
        }))
      }
    }
    class Hb extends eb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hb.DefaultOptions;
        super([]), this._maxWorkers = bb, this._createWorkerAsync = wb, this._options = Mb
      }
      push(bb) {
        if (!this._executeOnIdleWorker(bb))
          if (this._workerInfos.length < this._maxWorkers) {
            const wb = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(wb), this._execute(wb, bb)
          } else this._pendingActions.push(bb)
      }
      _execute(bb, wb) {
        bb.timeoutId && (clearTimeout(bb.timeoutId), delete bb.timeoutId), super._execute(bb, ((Mb, eb) => {
          wb(Mb, (() => {
            eb(), bb.idle && (bb.timeoutId = setTimeout((() => {
              bb.workerPromise.then((bb => {
                bb.terminate()
              }));
              const wb = this._workerInfos.indexOf(bb); - 1 !== wb && this._workerInfos.splice(wb, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Hb.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);