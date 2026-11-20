export const id = 304;
export const ids = [304];
export const modules = {
  41600: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      _KTXTextureLoader: () => aq
    });
    var Yq = gq(38653);
    class lq {
      constructor(qq, Eq) {
        if (this.data = qq, this.isInvalid = !1, !lq.IsValid(qq)) return this.isInvalid = !0, void Yq.b.Error("texture missing KTX identifier");
        const gq = Uint32Array.BYTES_PER_ELEMENT,
          Oq = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * gq),
          mq = 67305985 === Oq.getUint32(0, !0);
        return this.glType = Oq.getUint32(1 * gq, mq), this.glTypeSize = Oq.getUint32(2 * gq, mq), this.glFormat = Oq.getUint32(3 * gq, mq), this.glInternalFormat = Oq.getUint32(4 * gq, mq), this.glBaseInternalFormat = Oq.getUint32(5 * gq, mq), this.pixelWidth = Oq.getUint32(6 * gq, mq), this.pixelHeight = Oq.getUint32(7 * gq, mq), this.pixelDepth = Oq.getUint32(8 * gq, mq), this.numberOfArrayElements = Oq.getUint32(9 * gq, mq), this.numberOfFaces = Oq.getUint32(10 * gq, mq), this.numberOfMipmapLevels = Oq.getUint32(11 * gq, mq), this.bytesOfKeyValueData = Oq.getUint32(12 * gq, mq), 0 !== this.glType ? (Yq.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Yq.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Yq.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== Eq ? (Yq.b.Error("number of faces expected" + Eq + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = lq.COMPRESSED_2D))
      }
      uploadLevels(qq, Eq) {
        switch (this.loadType) {
          case lq.COMPRESSED_2D:
            this._upload2DCompressedLevels(qq, Eq);
          case lq.TEX_2D:
          case lq.COMPRESSED_3D:
          case lq.TEX_3D:
        }
      }
      _upload2DCompressedLevels(qq, Eq) {
        let gq = lq.HEADER_LEN + this.bytesOfKeyValueData,
          Yq = this.pixelWidth,
          Oq = this.pixelHeight;
        const mq = Eq ? this.numberOfMipmapLevels : 1;
        for (let lq = 0; lq < mq; lq++) {
          const Eq = new Int32Array(this.data.buffer, this.data.byteOffset + gq, 1)[0];
          gq += 4;
          for (let mq = 0; mq < this.numberOfFaces; mq++) {
            const xq = new Uint8Array(this.data.buffer, this.data.byteOffset + gq, Eq);
            qq.Ba()._uploadCompressedDataToTextureDirectly(qq, qq.format, Yq, Oq, xq, mq, lq), gq += Eq, gq += 3 - (Eq + 3) % 4
          }
          Yq = Math.max(1, .5 * Yq), Oq = Math.max(1, .5 * Oq)
        }
      }
      static IsValid(qq) {
        if (qq.byteLength >= 12) {
          const Eq = new Uint8Array(qq.buffer, qq.byteOffset, 12);
          if (171 === Eq[0] && 75 === Eq[1] && 84 === Eq[2] && 88 === Eq[3] && 32 === Eq[4] && 49 === Eq[5] && 49 === Eq[6] && 187 === Eq[7] && 13 === Eq[8] && 10 === Eq[9] && 26 === Eq[10] && 10 === Eq[11]) return !0
        }
        return !1
      }
    }
    lq.HEADER_LEN = 64, lq.COMPRESSED_2D = 0, lq.COMPRESSED_3D = 1, lq.TEX_2D = 2, lq.TEX_3D = 3;
    var Oq, mq, xq, Aq = gq(41607),
      cq = gq(39845);

    function uq(qq, Eq) {
      const gq = Eq?.jsDecoderModule || KTX2DECODER;
      qq && (qq.wasmBaseUrl && (gq.Transcoder.WasmBaseUrl = qq.wasmBaseUrl), qq.wasmUASTCToASTC && (gq.LiteTranscoder_UASTC_ASTC.WasmModuleURL = qq.wasmUASTCToASTC), qq.wasmUASTCToBC7 && (gq.LiteTranscoder_UASTC_BC7.WasmModuleURL = qq.wasmUASTCToBC7), qq.wasmUASTCToRGBA_UNORM && (gq.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = qq.wasmUASTCToRGBA_UNORM), qq.wasmUASTCToRGBA_SRGB && (gq.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = qq.wasmUASTCToRGBA_SRGB), qq.wasmUASTCToR8_UNORM && (gq.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = qq.wasmUASTCToR8_UNORM), qq.wasmUASTCToRG8_UNORM && (gq.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = qq.wasmUASTCToRG8_UNORM), qq.jsMSCTranscoder && (gq.MSCTranscoder.JSModuleURL = qq.jsMSCTranscoder), qq.wasmMSCTranscoder && (gq.MSCTranscoder.WasmModuleURL = qq.wasmMSCTranscoder), qq.wasmZSTDDecoder && (gq.ZSTDDecoder.WasmModuleURL = qq.wasmZSTDDecoder)), Eq && (Eq.wasmUASTCToASTC && (gq.LiteTranscoder_UASTC_ASTC.WasmBinary = Eq.wasmUASTCToASTC), Eq.wasmUASTCToBC7 && (gq.LiteTranscoder_UASTC_BC7.WasmBinary = Eq.wasmUASTCToBC7), Eq.wasmUASTCToRGBA_UNORM && (gq.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = Eq.wasmUASTCToRGBA_UNORM), Eq.wasmUASTCToRGBA_SRGB && (gq.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = Eq.wasmUASTCToRGBA_SRGB), Eq.wasmUASTCToR8_UNORM && (gq.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = Eq.wasmUASTCToR8_UNORM), Eq.wasmUASTCToRG8_UNORM && (gq.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = Eq.wasmUASTCToRG8_UNORM), Eq.jsMSCTranscoder && (gq.MSCTranscoder.JSModule = Eq.jsMSCTranscoder), Eq.wasmMSCTranscoder && (gq.MSCTranscoder.WasmBinary = Eq.wasmMSCTranscoder), Eq.wasmZSTDDecoder && (gq.ZSTDDecoder.WasmBinary = Eq.wasmZSTDDecoder))
    }

    function Bq(qq) {
      let Eq;
      "undefined" === typeof qq && "undefined" !== typeof KTX2DECODER && (qq = KTX2DECODER), onmessage = gq => {
        if (gq.data) switch (gq.data.action) {
          case "init": {
            const Yq = gq.data.urls;
            Yq && (Yq.jsDecoderModule && "undefined" === typeof qq && (importScripts(Yq.jsDecoderModule), qq = KTX2DECODER), uq(Yq)), gq.data.wasmBinaries && uq(void 0, {
              ...gq.data.wasmBinaries,
              jsDecoderModule: qq
            }), Eq = new qq.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            qq.KTX2Decoder.DefaultDecoderOptions = gq.data.options;
            break;
          case "decode":
            Eq.decode(gq.data.data, gq.data.caps, gq.data.options).then((qq => {
              const Eq = [];
              for (let gq = 0; gq < qq.mipmaps.length; ++gq) {
                const Yq = qq.mipmaps[gq];
                Yq && Yq.data && Eq.push(Yq.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: qq
              }, Eq)
            })).catch((qq => {
              postMessage({
                action: "decoded",
                success: !1,
                Hc: qq
              })
            }))
        }
      }
    }! function(qq) {
      qq[qq.ETC1S = 0] = "ETC1S", qq[qq.UASTC4x4 = 1] = "UASTC4x4", qq[qq.RGBA32 = 2] = "RGBA32"
    }(Oq || (Oq = {})),
    function(qq) {
      qq[qq.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", qq[qq.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", qq[qq.BC7_RGBA = 1] = "BC7_RGBA", qq[qq.BC3_RGBA = 2] = "BC3_RGBA", qq[qq.BC1_RGB = 3] = "BC1_RGB", qq[qq.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", qq[qq.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", qq[qq.ETC2_RGBA = 6] = "ETC2_RGBA", qq[qq.ETC1_RGB = 7] = "ETC1_RGB", qq[qq.RGBA32 = 8] = "RGBA32", qq[qq.R8 = 9] = "R8", qq[qq.RG8 = 10] = "RG8"
    }(mq || (mq = {})),
    function(qq) {
      qq[qq.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", qq[qq.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", qq[qq.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", qq[qq.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", qq[qq.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", qq[qq.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", qq[qq.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", qq[qq.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", qq[qq.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", qq[qq.RGBA8Format = 32856] = "RGBA8Format", qq[qq.R8Format = 33321] = "R8Format", qq[qq.RG8Format = 33323] = "RG8Format"
    }(xq || (xq = {}));
    class Wq {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(qq) {
        if (Wq._WorkerPoolPromise || Wq._DecoderModulePromise) return;
        const Eq = {
          wasmBaseUrl: cq.f.ScriptBaseUrl,
          jsDecoderModule: cq.f.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: cq.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: cq.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: cq.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: cq.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: cq.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: cq.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: cq.f.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: cq.f.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: cq.f.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        qq && "function" === typeof Worker && "undefined" !== typeof URL ? Wq._WorkerPoolPromise = new Promise((gq => {
          const Yq = `${uq}(${Bq})()`,
            lq = URL.createObjectURL(new Blob([Yq], {
              type: "application/javascript"
            }));
          gq(new Aq.b(qq, (async () => await async function(qq, Eq, gq) {
            return await new Promise(((Yq, lq) => {
              const Oq = Eq => {
                  qq.removeEventListener("error", Oq), qq.removeEventListener("message", mq), lq(Eq)
                },
                mq = Eq => {
                  "init" === Eq.data.action && (qq.removeEventListener("error", Oq), qq.removeEventListener("message", mq), Yq(qq))
                };
              qq.addEventListener("error", Oq), qq.addEventListener("message", mq), qq.postMessage({
                action: "init",
                urls: gq,
                wasmBinaries: Eq
              })
            }))
          }(new Worker(lq), void 0, Eq))))
        })) : "undefined" === typeof Wq._KTX2DecoderModule ? Wq._DecoderModulePromise = cq.f.LoadBabylonScriptAsync(Eq.jsDecoderModule).then((() => (Wq._KTX2DecoderModule = KTX2DECODER, Wq._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Wq._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, uq(Eq, Wq._KTX2DecoderModule), new Wq._KTX2DecoderModule.KTX2Decoder))) : (Wq._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Wq._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Wq._DecoderModulePromise = Promise.resolve(new Wq._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wq.DefaultNumWorkers;
        this._engine = qq;
        const gq = "object" === typeof Eq && Eq.workerPool || Wq.WorkerPool;
        if (gq) Wq._WorkerPoolPromise = Promise.resolve(gq);
        else {
          "object" === typeof Eq ? Wq._KTX2DecoderModule = Eq?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Wq._KTX2DecoderModule = KTX2DECODER);
          const qq = "number" === typeof Eq ? Eq : Eq.numWorkers ?? Wq.DefaultNumWorkers;
          Wq._Initialize(qq)
        }
      }
      async _uploadAsync(qq, Eq, gq) {
        const Yq = await this._decodeAsync(qq, gq);
        this._createTexture(Yq, Eq, gq)
      }
      async _decodeAsync(qq, Eq) {
        const gq = this._engine.getCaps(),
          Yq = {
            astc: !!gq.astc,
            bptc: !!gq.bptc,
            s3tc: !!gq.s3tc,
            pvrtc: !!gq.pvrtc,
            etc2: !!gq.etc2,
            etc1: !!gq.etc1
          };
        if (Wq._WorkerPoolPromise) {
          const gq = await Wq._WorkerPoolPromise;
          return await new Promise(((lq, Oq) => {
            gq.push(((gq, mq) => {
              const xq = qq => {
                  gq.removeEventListener("error", xq), gq.removeEventListener("message", Aq), Oq(qq), mq()
                },
                Aq = qq => {
                  "decoded" === qq.data.action && (gq.removeEventListener("error", xq), gq.removeEventListener("message", Aq), qq.data.success ? lq(qq.data.decodedData) : Oq({
                    message: qq.data.Hc
                  }), mq())
                };
              gq.addEventListener("error", xq), gq.addEventListener("message", Aq), gq.postMessage({
                action: "setDefaultDecoderOptions",
                options: Wq.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const cq = new Uint8Array(qq.byteLength);
              cq.set(new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength)), gq.postMessage({
                action: "decode",
                data: cq,
                caps: Yq,
                options: Eq
              }, [cq.buffer])
            }))
          }))
        }
        if (Wq._DecoderModulePromise) {
          const Yq = await Wq._DecoderModulePromise;
          return Wq.DefaultDecoderOptions.isDirty && (Wq._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Wq.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((lq, Oq) => {
            Yq.decode(qq, gq, Eq).then((qq => {
              lq(qq)
            })).catch((qq => {
              Oq({
                message: qq
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(qq, Eq, gq) {
        if ((qq.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, Eq), gq && (gq.transcodedFormat = qq.transcodedFormat, gq.isInGammaSpace = qq.isInGammaSpace, gq.hasAlpha = qq.hasAlpha, gq.transcoderName = qq.transcoderName);
        let Yq = !0;
        switch (qq.transcodedFormat) {
          case 32856:
            Eq.type = 0, Eq.format = 5;
            break;
          case 33321:
            Eq.type = 0, Eq.format = 6;
            break;
          case 33323:
            Eq.type = 0, Eq.format = 7;
            break;
          default:
            Eq.format = qq.transcodedFormat, Yq = !1
        }
        if (Eq._gammaSpace = qq.isInGammaSpace, Eq.generateMipMaps = qq.mipmaps.length > 1, Eq.width = qq.mipmaps[0].width, Eq.height = qq.mipmaps[0].height, qq.errors) throw new Error("KTX2 container - could not transcode the data. " + qq.errors);
        for (let lq = 0; lq < qq.mipmaps.length; ++lq) {
          const gq = qq.mipmaps[lq];
          if (!gq || !gq.data) throw new Error("KTX2 container - could not transcode one of the image");
          Yq ? (Eq.width = gq.width, Eq.height = gq.height, this._engine._uploadDataToTextureDirectly(Eq, gq.data, 0, lq, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(Eq, qq.transcodedFormat, gq.width, gq.height, gq.data, 0, lq)
        }
        Eq._extension = ".ktx2", Eq.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(qq) {
        if (qq.byteLength >= 12) {
          const Eq = new Uint8Array(qq.buffer, qq.byteOffset, 12);
          if (171 === Eq[0] && 75 === Eq[1] && 84 === Eq[2] && 88 === Eq[3] && 32 === Eq[4] && 50 === Eq[5] && 48 === Eq[6] && 187 === Eq[7] && 13 === Eq[8] && 10 === Eq[9] && 26 === Eq[10] && 10 === Eq[11]) return !0
        }
        return !1
      }
    }

    function Nq(qq) {
      switch (qq) {
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
    Wq.URLConfig = {
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
    }, Wq.DefaultNumWorkers = Wq.GetDefaultNumWorkers(), Wq.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(qq) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== qq && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = qq, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(qq) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== qq && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = qq, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(qq) {
        this._forceRGBA !== qq && (this._forceRGBA = qq, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(qq) {
        this._forceR8 !== qq && (this._forceR8 = qq, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(qq) {
        this._forceRG8 !== qq && (this._forceRG8 = qq, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(qq) {
        this._bypassTranscoders !== qq && (this._bypassTranscoders = qq, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const qq = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (qq.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (qq.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (qq.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (qq.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (qq.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (qq.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [mq.BC1_RGB, mq.BC3_RGBA],
            yes: {
              transcodeFormat: mq.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = qq, qq
      }
    };
    class aq {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(qq, Eq, gq, Yq) {
        if (Array.isArray(qq)) return;
        Eq._invertVScale = !Eq.invertY;
        const Oq = Eq.Ba(),
          mq = new lq(qq, 6),
          xq = Nq(mq.glInternalFormat);
        null !== xq ? (Eq.format = xq, Eq._useSRGBBuffer = Oq._getUseSRGBBuffer(!0, !Eq.generateMipMaps), Eq._gammaSpace = !0) : Eq.format = mq.glInternalFormat;
        const Aq = mq.numberOfMipmapLevels > 1 && Eq.generateMipMaps;
        Oq._unpackFlipY(!0), mq.uploadLevels(Eq, Eq.generateMipMaps), Eq.width = mq.pixelWidth, Eq.height = mq.pixelHeight, Oq._setCubeMapTextureParams(Eq, Aq, mq.numberOfMipmapLevels - 1), Eq.isReady = !0, Eq.onLoadedObservable.notifyObservers(Eq), Eq.onLoadedObservable.clear(), Yq && Yq()
      }
      loadData(qq, Eq, gq, Oq) {
        if (lq.IsValid(qq)) {
          Eq._invertVScale = !Eq.invertY;
          const Yq = new lq(qq, 1),
            Oq = Nq(Yq.glInternalFormat);
          null !== Oq ? (Eq.format = Oq, Eq._useSRGBBuffer = Eq.Ba()._getUseSRGBBuffer(!0, !Eq.generateMipMaps), Eq._gammaSpace = !0) : Eq.format = Yq.glInternalFormat, gq(Yq.pixelWidth, Yq.pixelHeight, Eq.generateMipMaps, !0, (() => {
            Yq.uploadLevels(Eq, Eq.generateMipMaps)
          }), Yq.isInvalid)
        } else if (Wq.IsValid(qq)) {
          new Wq(Eq.Ba())._uploadAsync(qq, Eq, Oq).then((() => {
            gq(Eq.width, Eq.height, Eq.generateMipMaps, !0, (() => {}), !1)
          }), (qq => {
            Yq.b.Warn(`Failed to load KTX2 texture data: ${qq.message}`), gq(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Yq.b.Error("texture missing KTX identifier"), gq(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41607: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    class Yq {
      constructor(qq) {
        this._pendingActions = new Array, this._workerInfos = qq.map((qq => ({
          workerPromise: Promise.resolve(qq),
          idle: !0
        })))
      }
      dispose() {
        for (const qq of this._workerInfos) qq.workerPromise.then((qq => {
          qq.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(qq) {
        this._executeOnIdleWorker(qq) || this._pendingActions.push(qq)
      }
      _executeOnIdleWorker(qq) {
        for (const Eq of this._workerInfos)
          if (Eq.idle) return this._execute(Eq, qq), !0;
        return !1
      }
      _execute(qq, Eq) {
        qq.idle = !1, qq.workerPromise.then((gq => {
          Eq(gq, (() => {
            const Eq = this._pendingActions.shift();
            Eq ? this._execute(qq, Eq) : qq.idle = !0
          }))
        }))
      }
    }
    class lq extends Yq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq.DefaultOptions;
        super([]), this._maxWorkers = qq, this._createWorkerAsync = Eq, this._options = gq
      }
      push(qq) {
        if (!this._executeOnIdleWorker(qq))
          if (this._workerInfos.length < this._maxWorkers) {
            const Eq = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Eq), this._execute(Eq, qq)
          } else this._pendingActions.push(qq)
      }
      _execute(qq, Eq) {
        qq.timeoutId && (clearTimeout(qq.timeoutId), delete qq.timeoutId), super._execute(qq, ((gq, Yq) => {
          Eq(gq, (() => {
            Yq(), qq.idle && (qq.timeoutId = setTimeout((() => {
              qq.workerPromise.then((qq => {
                qq.terminate()
              }));
              const Eq = this._workerInfos.indexOf(qq); - 1 !== Eq && this._workerInfos.splice(Eq, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    lq.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);