export const id = 303;
export const ids = [303];
export const modules = {
  41253: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      _KTXTextureLoader: () => mb
    });
    var kb = sb(38284);
    class Wb {
      constructor(bb, cb) {
        if (this.data = bb, this.isInvalid = !1, !Wb.IsValid(bb)) return this.isInvalid = !0, void kb.c.Error("texture missing KTX identifier");
        const sb = Uint32Array.BYTES_PER_ELEMENT,
          ab = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * sb),
          Tb = 67305985 === ab.getUint32(0, !0);
        return this.glType = ab.getUint32(1 * sb, Tb), this.glTypeSize = ab.getUint32(2 * sb, Tb), this.glFormat = ab.getUint32(3 * sb, Tb), this.glInternalFormat = ab.getUint32(4 * sb, Tb), this.glBaseInternalFormat = ab.getUint32(5 * sb, Tb), this.pixelWidth = ab.getUint32(6 * sb, Tb), this.pixelHeight = ab.getUint32(7 * sb, Tb), this.pixelDepth = ab.getUint32(8 * sb, Tb), this.numberOfArrayElements = ab.getUint32(9 * sb, Tb), this.numberOfFaces = ab.getUint32(10 * sb, Tb), this.numberOfMipmapLevels = ab.getUint32(11 * sb, Tb), this.bytesOfKeyValueData = ab.getUint32(12 * sb, Tb), 0 !== this.glType ? (kb.c.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (kb.c.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (kb.c.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== cb ? (kb.c.Error("number of faces expected" + cb + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Wb.COMPRESSED_2D))
      }
      uploadLevels(bb, cb) {
        switch (this.loadType) {
          case Wb.COMPRESSED_2D:
            this._upload2DCompressedLevels(bb, cb);
          case Wb.TEX_2D:
          case Wb.COMPRESSED_3D:
          case Wb.TEX_3D:
        }
      }
      _upload2DCompressedLevels(bb, cb) {
        let sb = Wb.HEADER_LEN + this.bytesOfKeyValueData,
          kb = this.pixelWidth,
          ab = this.pixelHeight;
        const Tb = cb ? this.numberOfMipmapLevels : 1;
        for (let Wb = 0; Wb < Tb; Wb++) {
          const cb = new Int32Array(this.data.buffer, this.data.byteOffset + sb, 1)[0];
          sb += 4;
          for (let Tb = 0; Tb < this.numberOfFaces; Tb++) {
            const Ub = new Uint8Array(this.data.buffer, this.data.byteOffset + sb, cb);
            bb.Sm()._uploadCompressedDataToTextureDirectly(bb, bb.format, kb, ab, Ub, Tb, Wb), sb += cb, sb += 3 - (cb + 3) % 4
          }
          kb = Math.max(1, .5 * kb), ab = Math.max(1, .5 * ab)
        }
      }
      static IsValid(bb) {
        if (bb.byteLength >= 12) {
          const cb = new Uint8Array(bb.buffer, bb.byteOffset, 12);
          if (171 === cb[0] && 75 === cb[1] && 84 === cb[2] && 88 === cb[3] && 32 === cb[4] && 49 === cb[5] && 49 === cb[6] && 187 === cb[7] && 13 === cb[8] && 10 === cb[9] && 26 === cb[10] && 10 === cb[11]) return !0
        }
        return !1
      }
    }
    Wb.HEADER_LEN = 64, Wb.COMPRESSED_2D = 0, Wb.COMPRESSED_3D = 1, Wb.TEX_2D = 2, Wb.TEX_3D = 3;
    var ab, Tb, Ub, Ib = sb(41258),
      Hb = sb(39531);

    function fb(bb, cb) {
      const sb = cb?.jsDecoderModule || KTX2DECODER;
      bb && (bb.wasmBaseUrl && (sb.Transcoder.WasmBaseUrl = bb.wasmBaseUrl), bb.wasmUASTCToASTC && (sb.LiteTranscoder_UASTC_ASTC.WasmModuleURL = bb.wasmUASTCToASTC), bb.wasmUASTCToBC7 && (sb.LiteTranscoder_UASTC_BC7.WasmModuleURL = bb.wasmUASTCToBC7), bb.wasmUASTCToRGBA_UNORM && (sb.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = bb.wasmUASTCToRGBA_UNORM), bb.wasmUASTCToRGBA_SRGB && (sb.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = bb.wasmUASTCToRGBA_SRGB), bb.wasmUASTCToR8_UNORM && (sb.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = bb.wasmUASTCToR8_UNORM), bb.wasmUASTCToRG8_UNORM && (sb.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = bb.wasmUASTCToRG8_UNORM), bb.jsMSCTranscoder && (sb.MSCTranscoder.JSModuleURL = bb.jsMSCTranscoder), bb.wasmMSCTranscoder && (sb.MSCTranscoder.WasmModuleURL = bb.wasmMSCTranscoder), bb.wasmZSTDDecoder && (sb.ZSTDDecoder.WasmModuleURL = bb.wasmZSTDDecoder)), cb && (cb.wasmUASTCToASTC && (sb.LiteTranscoder_UASTC_ASTC.WasmBinary = cb.wasmUASTCToASTC), cb.wasmUASTCToBC7 && (sb.LiteTranscoder_UASTC_BC7.WasmBinary = cb.wasmUASTCToBC7), cb.wasmUASTCToRGBA_UNORM && (sb.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = cb.wasmUASTCToRGBA_UNORM), cb.wasmUASTCToRGBA_SRGB && (sb.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = cb.wasmUASTCToRGBA_SRGB), cb.wasmUASTCToR8_UNORM && (sb.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = cb.wasmUASTCToR8_UNORM), cb.wasmUASTCToRG8_UNORM && (sb.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = cb.wasmUASTCToRG8_UNORM), cb.jsMSCTranscoder && (sb.MSCTranscoder.JSModule = cb.jsMSCTranscoder), cb.wasmMSCTranscoder && (sb.MSCTranscoder.WasmBinary = cb.wasmMSCTranscoder), cb.wasmZSTDDecoder && (sb.ZSTDDecoder.WasmBinary = cb.wasmZSTDDecoder))
    }

    function Mb(bb) {
      let cb;
      "undefined" === typeof bb && "undefined" !== typeof KTX2DECODER && (bb = KTX2DECODER), onmessage = sb => {
        if (sb.data) switch (sb.data.action) {
          case "init": {
            const kb = sb.data.urls;
            kb && (kb.jsDecoderModule && "undefined" === typeof bb && (importScripts(kb.jsDecoderModule), bb = KTX2DECODER), fb(kb)), sb.data.wasmBinaries && fb(void 0, {
              ...sb.data.wasmBinaries,
              jsDecoderModule: bb
            }), cb = new bb.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            bb.KTX2Decoder.DefaultDecoderOptions = sb.data.options;
            break;
          case "decode":
            cb.decode(sb.data.data, sb.data.caps, sb.data.options).then((bb => {
              const cb = [];
              for (let sb = 0; sb < bb.mipmaps.length; ++sb) {
                const kb = bb.mipmaps[sb];
                kb && kb.data && cb.push(kb.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: bb
              }, cb)
            })).catch((bb => {
              postMessage({
                action: "decoded",
                success: !1,
                jT: bb
              })
            }))
        }
      }
    }! function(bb) {
      bb[bb.ETC1S = 0] = "ETC1S", bb[bb.UASTC4x4 = 1] = "UASTC4x4", bb[bb.RGBA32 = 2] = "RGBA32"
    }(ab || (ab = {})),
    function(bb) {
      bb[bb.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", bb[bb.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", bb[bb.BC7_RGBA = 1] = "BC7_RGBA", bb[bb.BC3_RGBA = 2] = "BC3_RGBA", bb[bb.BC1_RGB = 3] = "BC1_RGB", bb[bb.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", bb[bb.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", bb[bb.ETC2_RGBA = 6] = "ETC2_RGBA", bb[bb.ETC1_RGB = 7] = "ETC1_RGB", bb[bb.RGBA32 = 8] = "RGBA32", bb[bb.R8 = 9] = "R8", bb[bb.RG8 = 10] = "RG8"
    }(Tb || (Tb = {})),
    function(bb) {
      bb[bb.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", bb[bb.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", bb[bb.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", bb[bb.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", bb[bb.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", bb[bb.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", bb[bb.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", bb[bb.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", bb[bb.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", bb[bb.RGBA8Format = 32856] = "RGBA8Format", bb[bb.R8Format = 33321] = "R8Format", bb[bb.RG8Format = 33323] = "RG8Format"
    }(Ub || (Ub = {}));
    class Xb {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(bb) {
        if (Xb._WorkerPoolPromise || Xb._DecoderModulePromise) return;
        const cb = {
          wasmBaseUrl: Hb.g.ScriptBaseUrl,
          jsDecoderModule: Hb.g.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Hb.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Hb.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Hb.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Hb.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Hb.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Hb.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Hb.g.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Hb.g.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Hb.g.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        bb && "function" === typeof Worker && "undefined" !== typeof URL ? Xb._WorkerPoolPromise = new Promise((sb => {
          const kb = `${fb}(${Mb})()`,
            Wb = URL.createObjectURL(new Blob([kb], {
              type: "application/javascript"
            }));
          sb(new Ib.c(bb, (async () => await async function(bb, cb, sb) {
            return await new Promise(((kb, Wb) => {
              const ab = cb => {
                  bb.removeEventListener("error", ab), bb.removeEventListener("message", Tb), Wb(cb)
                },
                Tb = cb => {
                  "init" === cb.data.action && (bb.removeEventListener("error", ab), bb.removeEventListener("message", Tb), kb(bb))
                };
              bb.addEventListener("error", ab), bb.addEventListener("message", Tb), bb.postMessage({
                action: "init",
                urls: sb,
                wasmBinaries: cb
              })
            }))
          }(new Worker(Wb), void 0, cb))))
        })) : "undefined" === typeof Xb._KTX2DecoderModule ? Xb._DecoderModulePromise = Hb.g.LoadBabylonScriptAsync(cb.jsDecoderModule).then((() => (Xb._KTX2DecoderModule = KTX2DECODER, Xb._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Xb._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, fb(cb, Xb._KTX2DecoderModule), new Xb._KTX2DecoderModule.KTX2Decoder))) : (Xb._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Xb._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Xb._DecoderModulePromise = Promise.resolve(new Xb._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xb.DefaultNumWorkers;
        this._engine = bb;
        const sb = "object" === typeof cb && cb.workerPool || Xb.WorkerPool;
        if (sb) Xb._WorkerPoolPromise = Promise.resolve(sb);
        else {
          "object" === typeof cb ? Xb._KTX2DecoderModule = cb?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Xb._KTX2DecoderModule = KTX2DECODER);
          const bb = "number" === typeof cb ? cb : cb.numWorkers ?? Xb.DefaultNumWorkers;
          Xb._Initialize(bb)
        }
      }
      async _uploadAsync(bb, cb, sb) {
        const kb = await this._decodeAsync(bb, sb);
        this._createTexture(kb, cb, sb)
      }
      async _decodeAsync(bb, cb) {
        const sb = this._engine.getCaps(),
          kb = {
            astc: !!sb.astc,
            bptc: !!sb.bptc,
            s3tc: !!sb.s3tc,
            pvrtc: !!sb.pvrtc,
            etc2: !!sb.etc2,
            etc1: !!sb.etc1
          };
        if (Xb._WorkerPoolPromise) {
          const sb = await Xb._WorkerPoolPromise;
          return await new Promise(((Wb, ab) => {
            sb.push(((sb, Tb) => {
              const Ub = bb => {
                  sb.removeEventListener("error", Ub), sb.removeEventListener("message", Ib), ab(bb), Tb()
                },
                Ib = bb => {
                  "decoded" === bb.data.action && (sb.removeEventListener("error", Ub), sb.removeEventListener("message", Ib), bb.data.success ? Wb(bb.data.decodedData) : ab({
                    message: bb.data.jT
                  }), Tb())
                };
              sb.addEventListener("error", Ub), sb.addEventListener("message", Ib), sb.postMessage({
                action: "setDefaultDecoderOptions",
                options: Xb.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Hb = new Uint8Array(bb.byteLength);
              Hb.set(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength)), sb.postMessage({
                action: "decode",
                data: Hb,
                caps: kb,
                options: cb
              }, [Hb.buffer])
            }))
          }))
        }
        if (Xb._DecoderModulePromise) {
          const kb = await Xb._DecoderModulePromise;
          return Xb.DefaultDecoderOptions.isDirty && (Xb._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Xb.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Wb, ab) => {
            kb.decode(bb, sb, cb).then((bb => {
              Wb(bb)
            })).catch((bb => {
              ab({
                message: bb
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(bb, cb, sb) {
        if ((bb.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, cb), sb && (sb.transcodedFormat = bb.transcodedFormat, sb.isInGammaSpace = bb.isInGammaSpace, sb.hasAlpha = bb.hasAlpha, sb.transcoderName = bb.transcoderName);
        let kb = !0;
        switch (bb.transcodedFormat) {
          case 32856:
            cb.type = 0, cb.format = 5;
            break;
          case 33321:
            cb.type = 0, cb.format = 6;
            break;
          case 33323:
            cb.type = 0, cb.format = 7;
            break;
          default:
            cb.format = bb.transcodedFormat, kb = !1
        }
        if (cb._gammaSpace = bb.isInGammaSpace, cb.generateMipMaps = bb.mipmaps.length > 1, cb.width = bb.mipmaps[0].width, cb.height = bb.mipmaps[0].height, bb.errors) throw new Error("KTX2 container - could not transcode the data. " + bb.errors);
        for (let Wb = 0; Wb < bb.mipmaps.length; ++Wb) {
          const sb = bb.mipmaps[Wb];
          if (!sb || !sb.data) throw new Error("KTX2 container - could not transcode one of the image");
          kb ? (cb.width = sb.width, cb.height = sb.height, this._engine._uploadDataToTextureDirectly(cb, sb.data, 0, Wb, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(cb, bb.transcodedFormat, sb.width, sb.height, sb.data, 0, Wb)
        }
        cb._extension = ".ktx2", cb.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(bb) {
        if (bb.byteLength >= 12) {
          const cb = new Uint8Array(bb.buffer, bb.byteOffset, 12);
          if (171 === cb[0] && 75 === cb[1] && 84 === cb[2] && 88 === cb[3] && 32 === cb[4] && 50 === cb[5] && 48 === cb[6] && 187 === cb[7] && 13 === cb[8] && 10 === cb[9] && 26 === cb[10] && 10 === cb[11]) return !0
        }
        return !1
      }
    }

    function nb(bb) {
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
    Xb.URLConfig = {
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
    }, Xb.DefaultNumWorkers = Xb.GetDefaultNumWorkers(), Xb.DefaultDecoderOptions = new class {
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
            transcodeFormat: [Tb.BC1_RGB, Tb.BC3_RGBA],
            yes: {
              transcodeFormat: Tb.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = bb, bb
      }
    };
    class mb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, cb, sb, kb) {
        if (Array.isArray(bb)) return;
        cb._invertVScale = !cb.invertY;
        const ab = cb.Sm(),
          Tb = new Wb(bb, 6),
          Ub = nb(Tb.glInternalFormat);
        null !== Ub ? (cb.format = Ub, cb._useSRGBBuffer = ab._getUseSRGBBuffer(!0, !cb.generateMipMaps), cb._gammaSpace = !0) : cb.format = Tb.glInternalFormat;
        const Ib = Tb.numberOfMipmapLevels > 1 && cb.generateMipMaps;
        ab._unpackFlipY(!0), Tb.uploadLevels(cb, cb.generateMipMaps), cb.width = Tb.pixelWidth, cb.height = Tb.pixelHeight, ab._setCubeMapTextureParams(cb, Ib, Tb.numberOfMipmapLevels - 1), cb.isReady = !0, cb.onLoadedObservable.notifyObservers(cb), cb.onLoadedObservable.clear(), kb && kb()
      }
      loadData(bb, cb, sb, ab) {
        if (Wb.IsValid(bb)) {
          cb._invertVScale = !cb.invertY;
          const kb = new Wb(bb, 1),
            ab = nb(kb.glInternalFormat);
          null !== ab ? (cb.format = ab, cb._useSRGBBuffer = cb.Sm()._getUseSRGBBuffer(!0, !cb.generateMipMaps), cb._gammaSpace = !0) : cb.format = kb.glInternalFormat, sb(kb.pixelWidth, kb.pixelHeight, cb.generateMipMaps, !0, (() => {
            kb.uploadLevels(cb, cb.generateMipMaps)
          }), kb.isInvalid)
        } else if (Xb.IsValid(bb)) {
          new Xb(cb.Sm())._uploadAsync(bb, cb, ab).then((() => {
            sb(cb.width, cb.height, cb.generateMipMaps, !0, (() => {}), !1)
          }), (bb => {
            kb.c.Warn(`Failed to load KTX2 texture data: ${bb.message}`), sb(0, 0, !1, !1, (() => {}), !0)
          }))
        } else kb.c.Error("texture missing KTX identifier"), sb(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41258: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    class kb {
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
        for (const cb of this._workerInfos)
          if (cb.idle) return this._execute(cb, bb), !0;
        return !1
      }
      _execute(bb, cb) {
        bb.idle = !1, bb.workerPromise.then((sb => {
          cb(sb, (() => {
            const cb = this._pendingActions.shift();
            cb ? this._execute(bb, cb) : bb.idle = !0
          }))
        }))
      }
    }
    class Wb extends kb {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wb.DefaultOptions;
        super([]), this._maxWorkers = bb, this._createWorkerAsync = cb, this._options = sb
      }
      push(bb) {
        if (!this._executeOnIdleWorker(bb))
          if (this._workerInfos.length < this._maxWorkers) {
            const cb = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(cb), this._execute(cb, bb)
          } else this._pendingActions.push(bb)
      }
      _execute(bb, cb) {
        bb.timeoutId && (clearTimeout(bb.timeoutId), delete bb.timeoutId), super._execute(bb, ((sb, kb) => {
          cb(sb, (() => {
            kb(), bb.idle && (bb.timeoutId = setTimeout((() => {
              bb.workerPromise.then((bb => {
                bb.terminate()
              }));
              const cb = this._workerInfos.indexOf(bb); - 1 !== cb && this._workerInfos.splice(cb, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Wb.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);