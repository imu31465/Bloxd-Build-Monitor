export const id = 318;
export const ids = [318];
export const modules = {
  42119: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      _KTXTextureLoader: () => yp
    });
    var Op = cp(38905);
    class op {
      constructor(pp, ip) {
        if (this.data = pp, this.isInvalid = !1, !op.IsValid(pp)) return this.isInvalid = !0, void Op.e.Error("texture missing KTX identifier");
        const cp = Uint32Array.BYTES_PER_ELEMENT,
          Ip = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * cp),
          Sp = 67305985 === Ip.getUint32(0, !0);
        return this.glType = Ip.getUint32(1 * cp, Sp), this.glTypeSize = Ip.getUint32(2 * cp, Sp), this.glFormat = Ip.getUint32(3 * cp, Sp), this.glInternalFormat = Ip.getUint32(4 * cp, Sp), this.glBaseInternalFormat = Ip.getUint32(5 * cp, Sp), this.pixelWidth = Ip.getUint32(6 * cp, Sp), this.pixelHeight = Ip.getUint32(7 * cp, Sp), this.pixelDepth = Ip.getUint32(8 * cp, Sp), this.numberOfArrayElements = Ip.getUint32(9 * cp, Sp), this.numberOfFaces = Ip.getUint32(10 * cp, Sp), this.numberOfMipmapLevels = Ip.getUint32(11 * cp, Sp), this.bytesOfKeyValueData = Ip.getUint32(12 * cp, Sp), 0 !== this.glType ? (Op.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Op.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Op.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== ip ? (Op.e.Error("number of faces expected" + ip + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = op.COMPRESSED_2D))
      }
      uploadLevels(pp, ip) {
        switch (this.loadType) {
          case op.COMPRESSED_2D:
            this._upload2DCompressedLevels(pp, ip);
          case op.TEX_2D:
          case op.COMPRESSED_3D:
          case op.TEX_3D:
        }
      }
      _upload2DCompressedLevels(pp, ip) {
        let cp = op.HEADER_LEN + this.bytesOfKeyValueData,
          Op = this.pixelWidth,
          Ip = this.pixelHeight;
        const Sp = ip ? this.numberOfMipmapLevels : 1;
        for (let op = 0; op < Sp; op++) {
          const ip = new Int32Array(this.data.buffer, this.data.byteOffset + cp, 1)[0];
          cp += 4;
          for (let Sp = 0; Sp < this.numberOfFaces; Sp++) {
            const xp = new Uint8Array(this.data.buffer, this.data.byteOffset + cp, ip);
            pp.gy()._uploadCompressedDataToTextureDirectly(pp, pp.format, Op, Ip, xp, Sp, op), cp += ip, cp += 3 - (ip + 3) % 4
          }
          Op = Math.max(1, .5 * Op), Ip = Math.max(1, .5 * Ip)
        }
      }
      static IsValid(pp) {
        if (pp.byteLength >= 12) {
          const ip = new Uint8Array(pp.buffer, pp.byteOffset, 12);
          if (171 === ip[0] && 75 === ip[1] && 84 === ip[2] && 88 === ip[3] && 32 === ip[4] && 49 === ip[5] && 49 === ip[6] && 187 === ip[7] && 13 === ip[8] && 10 === ip[9] && 26 === ip[10] && 10 === ip[11]) return !0
        }
        return !1
      }
    }
    op.HEADER_LEN = 64, op.COMPRESSED_2D = 0, op.COMPRESSED_3D = 1, op.TEX_2D = 2, op.TEX_3D = 3;
    var Ip, Sp, xp, Lp = cp(42123),
      Yp = cp(40304);

    function Dp(pp, ip) {
      const cp = ip?.jsDecoderModule || KTX2DECODER;
      pp && (pp.wasmBaseUrl && (cp.Transcoder.WasmBaseUrl = pp.wasmBaseUrl), pp.wasmUASTCToASTC && (cp.LiteTranscoder_UASTC_ASTC.WasmModuleURL = pp.wasmUASTCToASTC), pp.wasmUASTCToBC7 && (cp.LiteTranscoder_UASTC_BC7.WasmModuleURL = pp.wasmUASTCToBC7), pp.wasmUASTCToRGBA_UNORM && (cp.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = pp.wasmUASTCToRGBA_UNORM), pp.wasmUASTCToRGBA_SRGB && (cp.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = pp.wasmUASTCToRGBA_SRGB), pp.wasmUASTCToR8_UNORM && (cp.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = pp.wasmUASTCToR8_UNORM), pp.wasmUASTCToRG8_UNORM && (cp.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = pp.wasmUASTCToRG8_UNORM), pp.jsMSCTranscoder && (cp.MSCTranscoder.JSModuleURL = pp.jsMSCTranscoder), pp.wasmMSCTranscoder && (cp.MSCTranscoder.WasmModuleURL = pp.wasmMSCTranscoder), pp.wasmZSTDDecoder && (cp.ZSTDDecoder.WasmModuleURL = pp.wasmZSTDDecoder)), ip && (ip.wasmUASTCToASTC && (cp.LiteTranscoder_UASTC_ASTC.WasmBinary = ip.wasmUASTCToASTC), ip.wasmUASTCToBC7 && (cp.LiteTranscoder_UASTC_BC7.WasmBinary = ip.wasmUASTCToBC7), ip.wasmUASTCToRGBA_UNORM && (cp.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = ip.wasmUASTCToRGBA_UNORM), ip.wasmUASTCToRGBA_SRGB && (cp.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = ip.wasmUASTCToRGBA_SRGB), ip.wasmUASTCToR8_UNORM && (cp.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = ip.wasmUASTCToR8_UNORM), ip.wasmUASTCToRG8_UNORM && (cp.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = ip.wasmUASTCToRG8_UNORM), ip.jsMSCTranscoder && (cp.MSCTranscoder.JSModule = ip.jsMSCTranscoder), ip.wasmMSCTranscoder && (cp.MSCTranscoder.WasmBinary = ip.wasmMSCTranscoder), ip.wasmZSTDDecoder && (cp.ZSTDDecoder.WasmBinary = ip.wasmZSTDDecoder))
    }

    function Ap(pp) {
      let ip;
      "undefined" === typeof pp && "undefined" !== typeof KTX2DECODER && (pp = KTX2DECODER), onmessage = cp => {
        if (cp.data) switch (cp.data.action) {
          case "init": {
            const Op = cp.data.urls;
            Op && (Op.jsDecoderModule && "undefined" === typeof pp && (importScripts(Op.jsDecoderModule), pp = KTX2DECODER), Dp(Op)), cp.data.wasmBinaries && Dp(void 0, {
              ...cp.data.wasmBinaries,
              jsDecoderModule: pp
            }), ip = new pp.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            pp.KTX2Decoder.DefaultDecoderOptions = cp.data.options;
            break;
          case "decode":
            ip.decode(cp.data.data, cp.data.caps, cp.data.options).then((pp => {
              const ip = [];
              for (let cp = 0; cp < pp.mipmaps.length; ++cp) {
                const Op = pp.mipmaps[cp];
                Op && Op.data && ip.push(Op.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: pp
              }, ip)
            })).catch((pp => {
              postMessage({
                action: "decoded",
                success: !1,
                VD: pp
              })
            }))
        }
      }
    }! function(pp) {
      pp[pp.ETC1S = 0] = "ETC1S", pp[pp.UASTC4x4 = 1] = "UASTC4x4", pp[pp.RGBA32 = 2] = "RGBA32"
    }(Ip || (Ip = {})),
    function(pp) {
      pp[pp.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", pp[pp.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", pp[pp.BC7_RGBA = 1] = "BC7_RGBA", pp[pp.BC3_RGBA = 2] = "BC3_RGBA", pp[pp.BC1_RGB = 3] = "BC1_RGB", pp[pp.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", pp[pp.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", pp[pp.ETC2_RGBA = 6] = "ETC2_RGBA", pp[pp.ETC1_RGB = 7] = "ETC1_RGB", pp[pp.RGBA32 = 8] = "RGBA32", pp[pp.R8 = 9] = "R8", pp[pp.RG8 = 10] = "RG8"
    }(Sp || (Sp = {})),
    function(pp) {
      pp[pp.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", pp[pp.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", pp[pp.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", pp[pp.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", pp[pp.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", pp[pp.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", pp[pp.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", pp[pp.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", pp[pp.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", pp[pp.RGBA8Format = 32856] = "RGBA8Format", pp[pp.R8Format = 33321] = "R8Format", pp[pp.RG8Format = 33323] = "RG8Format"
    }(xp || (xp = {}));
    class Pp {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(pp) {
        if (Pp._WorkerPoolPromise || Pp._DecoderModulePromise) return;
        const ip = {
          wasmBaseUrl: Yp.i.ScriptBaseUrl,
          jsDecoderModule: Yp.i.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Yp.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Yp.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Yp.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Yp.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Yp.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Yp.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Yp.i.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Yp.i.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Yp.i.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        pp && "function" === typeof Worker && "undefined" !== typeof URL ? Pp._WorkerPoolPromise = new Promise((cp => {
          const Op = `${Dp}(${Ap})()`,
            op = URL.createObjectURL(new Blob([Op], {
              type: "application/javascript"
            }));
          cp(new Lp.e(pp, (async () => await async function(pp, ip, cp) {
            return await new Promise(((Op, op) => {
              const Ip = ip => {
                  pp.removeEventListener("error", Ip), pp.removeEventListener("message", Sp), op(ip)
                },
                Sp = ip => {
                  "init" === ip.data.action && (pp.removeEventListener("error", Ip), pp.removeEventListener("message", Sp), Op(pp))
                };
              pp.addEventListener("error", Ip), pp.addEventListener("message", Sp), pp.postMessage({
                action: "init",
                urls: cp,
                wasmBinaries: ip
              })
            }))
          }(new Worker(op), void 0, ip))))
        })) : "undefined" === typeof Pp._KTX2DecoderModule ? Pp._DecoderModulePromise = Yp.i.LoadBabylonScriptAsync(ip.jsDecoderModule).then((() => (Pp._KTX2DecoderModule = KTX2DECODER, Pp._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Pp._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Dp(ip, Pp._KTX2DecoderModule), new Pp._KTX2DecoderModule.KTX2Decoder))) : (Pp._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Pp._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Pp._DecoderModulePromise = Promise.resolve(new Pp._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pp.DefaultNumWorkers;
        this._engine = pp;
        const cp = "object" === typeof ip && ip.workerPool || Pp.WorkerPool;
        if (cp) Pp._WorkerPoolPromise = Promise.resolve(cp);
        else {
          "object" === typeof ip ? Pp._KTX2DecoderModule = ip?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Pp._KTX2DecoderModule = KTX2DECODER);
          const pp = "number" === typeof ip ? ip : ip.numWorkers ?? Pp.DefaultNumWorkers;
          Pp._Initialize(pp)
        }
      }
      async _uploadAsync(pp, ip, cp) {
        const Op = await this._decodeAsync(pp, cp);
        this._createTexture(Op, ip, cp)
      }
      async _decodeAsync(pp, ip) {
        const cp = this._engine.getCaps(),
          Op = {
            astc: !!cp.astc,
            bptc: !!cp.bptc,
            s3tc: !!cp.s3tc,
            pvrtc: !!cp.pvrtc,
            etc2: !!cp.etc2,
            etc1: !!cp.etc1
          };
        if (Pp._WorkerPoolPromise) {
          const cp = await Pp._WorkerPoolPromise;
          return await new Promise(((op, Ip) => {
            cp.push(((cp, Sp) => {
              const xp = pp => {
                  cp.removeEventListener("error", xp), cp.removeEventListener("message", Lp), Ip(pp), Sp()
                },
                Lp = pp => {
                  "decoded" === pp.data.action && (cp.removeEventListener("error", xp), cp.removeEventListener("message", Lp), pp.data.success ? op(pp.data.decodedData) : Ip({
                    message: pp.data.VD
                  }), Sp())
                };
              cp.addEventListener("error", xp), cp.addEventListener("message", Lp), cp.postMessage({
                action: "setDefaultDecoderOptions",
                options: Pp.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Yp = new Uint8Array(pp.byteLength);
              Yp.set(new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength)), cp.postMessage({
                action: "decode",
                data: Yp,
                caps: Op,
                options: ip
              }, [Yp.buffer])
            }))
          }))
        }
        if (Pp._DecoderModulePromise) {
          const Op = await Pp._DecoderModulePromise;
          return Pp.DefaultDecoderOptions.isDirty && (Pp._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Pp.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((op, Ip) => {
            Op.decode(pp, cp, ip).then((pp => {
              op(pp)
            })).catch((pp => {
              Ip({
                message: pp
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(pp, ip, cp) {
        if ((pp.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, ip), cp && (cp.transcodedFormat = pp.transcodedFormat, cp.isInGammaSpace = pp.isInGammaSpace, cp.hasAlpha = pp.hasAlpha, cp.transcoderName = pp.transcoderName);
        let Op = !0;
        switch (pp.transcodedFormat) {
          case 32856:
            ip.type = 0, ip.format = 5;
            break;
          case 33321:
            ip.type = 0, ip.format = 6;
            break;
          case 33323:
            ip.type = 0, ip.format = 7;
            break;
          default:
            ip.format = pp.transcodedFormat, Op = !1
        }
        if (ip._gammaSpace = pp.isInGammaSpace, ip.generateMipMaps = pp.mipmaps.length > 1, ip.width = pp.mipmaps[0].width, ip.height = pp.mipmaps[0].height, pp.errors) throw new Error("KTX2 container - could not transcode the data. " + pp.errors);
        for (let op = 0; op < pp.mipmaps.length; ++op) {
          const cp = pp.mipmaps[op];
          if (!cp || !cp.data) throw new Error("KTX2 container - could not transcode one of the image");
          Op ? (ip.width = cp.width, ip.height = cp.height, this._engine._uploadDataToTextureDirectly(ip, cp.data, 0, op, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(ip, pp.transcodedFormat, cp.width, cp.height, cp.data, 0, op)
        }
        ip._extension = ".ktx2", ip.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(pp) {
        if (pp.byteLength >= 12) {
          const ip = new Uint8Array(pp.buffer, pp.byteOffset, 12);
          if (171 === ip[0] && 75 === ip[1] && 84 === ip[2] && 88 === ip[3] && 32 === ip[4] && 50 === ip[5] && 48 === ip[6] && 187 === ip[7] && 13 === ip[8] && 10 === ip[9] && 26 === ip[10] && 10 === ip[11]) return !0
        }
        return !1
      }
    }

    function Wp(pp) {
      switch (pp) {
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
    Pp.URLConfig = {
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
    }, Pp.DefaultNumWorkers = Pp.GetDefaultNumWorkers(), Pp.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(pp) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== pp && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = pp, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(pp) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== pp && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = pp, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(pp) {
        this._forceRGBA !== pp && (this._forceRGBA = pp, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(pp) {
        this._forceR8 !== pp && (this._forceR8 = pp, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(pp) {
        this._forceRG8 !== pp && (this._forceRG8 = pp, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(pp) {
        this._bypassTranscoders !== pp && (this._bypassTranscoders = pp, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const pp = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (pp.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (pp.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (pp.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (pp.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (pp.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (pp.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [Sp.BC1_RGB, Sp.BC3_RGBA],
            yes: {
              transcodeFormat: Sp.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = pp, pp
      }
    };
    class yp {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(pp, ip, cp, Op) {
        if (Array.isArray(pp)) return;
        ip._invertVScale = !ip.invertY;
        const Ip = ip.gy(),
          Sp = new op(pp, 6),
          xp = Wp(Sp.glInternalFormat);
        null !== xp ? (ip.format = xp, ip._useSRGBBuffer = Ip._getUseSRGBBuffer(!0, !ip.generateMipMaps), ip._gammaSpace = !0) : ip.format = Sp.glInternalFormat;
        const Lp = Sp.numberOfMipmapLevels > 1 && ip.generateMipMaps;
        Ip._unpackFlipY(!0), Sp.uploadLevels(ip, ip.generateMipMaps), ip.width = Sp.pixelWidth, ip.height = Sp.pixelHeight, Ip._setCubeMapTextureParams(ip, Lp, Sp.numberOfMipmapLevels - 1), ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), Op && Op()
      }
      loadData(pp, ip, cp, Ip) {
        if (op.IsValid(pp)) {
          ip._invertVScale = !ip.invertY;
          const Op = new op(pp, 1),
            Ip = Wp(Op.glInternalFormat);
          null !== Ip ? (ip.format = Ip, ip._useSRGBBuffer = ip.gy()._getUseSRGBBuffer(!0, !ip.generateMipMaps), ip._gammaSpace = !0) : ip.format = Op.glInternalFormat, cp(Op.pixelWidth, Op.pixelHeight, ip.generateMipMaps, !0, (() => {
            Op.uploadLevels(ip, ip.generateMipMaps)
          }), Op.isInvalid)
        } else if (Pp.IsValid(pp)) {
          new Pp(ip.gy())._uploadAsync(pp, ip, Ip).then((() => {
            cp(ip.width, ip.height, ip.generateMipMaps, !0, (() => {}), !1)
          }), (pp => {
            Op.e.Warn(`Failed to load KTX2 texture data: ${pp.message}`), cp(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Op.e.Error("texture missing KTX identifier"), cp(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  42123: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    class Op {
      constructor(pp) {
        this._pendingActions = new Array, this._workerInfos = pp.map((pp => ({
          workerPromise: Promise.resolve(pp),
          idle: !0
        })))
      }
      dispose() {
        for (const pp of this._workerInfos) pp.workerPromise.then((pp => {
          pp.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(pp) {
        this._executeOnIdleWorker(pp) || this._pendingActions.push(pp)
      }
      _executeOnIdleWorker(pp) {
        for (const ip of this._workerInfos)
          if (ip.idle) return this._execute(ip, pp), !0;
        return !1
      }
      _execute(pp, ip) {
        pp.idle = !1, pp.workerPromise.then((cp => {
          ip(cp, (() => {
            const ip = this._pendingActions.shift();
            ip ? this._execute(pp, ip) : pp.idle = !0
          }))
        }))
      }
    }
    class op extends Op {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op.DefaultOptions;
        super([]), this._maxWorkers = pp, this._createWorkerAsync = ip, this._options = cp
      }
      push(pp) {
        if (!this._executeOnIdleWorker(pp))
          if (this._workerInfos.length < this._maxWorkers) {
            const ip = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(ip), this._execute(ip, pp)
          } else this._pendingActions.push(pp)
      }
      _execute(pp, ip) {
        pp.timeoutId && (clearTimeout(pp.timeoutId), delete pp.timeoutId), super._execute(pp, ((cp, Op) => {
          ip(cp, (() => {
            Op(), pp.idle && (pp.timeoutId = setTimeout((() => {
              pp.workerPromise.then((pp => {
                pp.terminate()
              }));
              const ip = this._workerInfos.indexOf(pp); - 1 !== ip && this._workerInfos.splice(ip, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    op.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);