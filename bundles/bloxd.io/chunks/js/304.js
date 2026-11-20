export const id = 304;
export const ids = [304];
export const modules = {
  41289: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      _KTXTextureLoader: () => Xb
    });
    var Bb = hb(38302);
    class Ob {
      constructor(bb, ub) {
        if (this.data = bb, this.isInvalid = !1, !Ob.IsValid(bb)) return this.isInvalid = !0, void Bb.b.Error("texture missing KTX identifier");
        const hb = Uint32Array.BYTES_PER_ELEMENT,
          Gb = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * hb),
          Ub = 67305985 === Gb.getUint32(0, !0);
        return this.glType = Gb.getUint32(1 * hb, Ub), this.glTypeSize = Gb.getUint32(2 * hb, Ub), this.glFormat = Gb.getUint32(3 * hb, Ub), this.glInternalFormat = Gb.getUint32(4 * hb, Ub), this.glBaseInternalFormat = Gb.getUint32(5 * hb, Ub), this.pixelWidth = Gb.getUint32(6 * hb, Ub), this.pixelHeight = Gb.getUint32(7 * hb, Ub), this.pixelDepth = Gb.getUint32(8 * hb, Ub), this.numberOfArrayElements = Gb.getUint32(9 * hb, Ub), this.numberOfFaces = Gb.getUint32(10 * hb, Ub), this.numberOfMipmapLevels = Gb.getUint32(11 * hb, Ub), this.bytesOfKeyValueData = Gb.getUint32(12 * hb, Ub), 0 !== this.glType ? (Bb.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Bb.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Bb.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== ub ? (Bb.b.Error("number of faces expected" + ub + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Ob.COMPRESSED_2D))
      }
      uploadLevels(bb, ub) {
        switch (this.loadType) {
          case Ob.COMPRESSED_2D:
            this._upload2DCompressedLevels(bb, ub);
          case Ob.TEX_2D:
          case Ob.COMPRESSED_3D:
          case Ob.TEX_3D:
        }
      }
      _upload2DCompressedLevels(bb, ub) {
        let hb = Ob.HEADER_LEN + this.bytesOfKeyValueData,
          Bb = this.pixelWidth,
          Gb = this.pixelHeight;
        const Ub = ub ? this.numberOfMipmapLevels : 1;
        for (let Ob = 0; Ob < Ub; Ob++) {
          const ub = new Int32Array(this.data.buffer, this.data.byteOffset + hb, 1)[0];
          hb += 4;
          for (let Ub = 0; Ub < this.numberOfFaces; Ub++) {
            const Lb = new Uint8Array(this.data.buffer, this.data.byteOffset + hb, ub);
            bb.UX()._uploadCompressedDataToTextureDirectly(bb, bb.format, Bb, Gb, Lb, Ub, Ob), hb += ub, hb += 3 - (ub + 3) % 4
          }
          Bb = Math.max(1, .5 * Bb), Gb = Math.max(1, .5 * Gb)
        }
      }
      static IsValid(bb) {
        if (bb.byteLength >= 12) {
          const ub = new Uint8Array(bb.buffer, bb.byteOffset, 12);
          if (171 === ub[0] && 75 === ub[1] && 84 === ub[2] && 88 === ub[3] && 32 === ub[4] && 49 === ub[5] && 49 === ub[6] && 187 === ub[7] && 13 === ub[8] && 10 === ub[9] && 26 === ub[10] && 10 === ub[11]) return !0
        }
        return !1
      }
    }
    Ob.HEADER_LEN = 64, Ob.COMPRESSED_2D = 0, Ob.COMPRESSED_3D = 1, Ob.TEX_2D = 2, Ob.TEX_3D = 3;
    var Gb, Ub, Lb, Yb = hb(41291),
      Sb = hb(39559);

    function ab(bb, ub) {
      const hb = ub?.jsDecoderModule || KTX2DECODER;
      bb && (bb.wasmBaseUrl && (hb.Transcoder.WasmBaseUrl = bb.wasmBaseUrl), bb.wasmUASTCToASTC && (hb.LiteTranscoder_UASTC_ASTC.WasmModuleURL = bb.wasmUASTCToASTC), bb.wasmUASTCToBC7 && (hb.LiteTranscoder_UASTC_BC7.WasmModuleURL = bb.wasmUASTCToBC7), bb.wasmUASTCToRGBA_UNORM && (hb.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = bb.wasmUASTCToRGBA_UNORM), bb.wasmUASTCToRGBA_SRGB && (hb.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = bb.wasmUASTCToRGBA_SRGB), bb.wasmUASTCToR8_UNORM && (hb.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = bb.wasmUASTCToR8_UNORM), bb.wasmUASTCToRG8_UNORM && (hb.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = bb.wasmUASTCToRG8_UNORM), bb.jsMSCTranscoder && (hb.MSCTranscoder.JSModuleURL = bb.jsMSCTranscoder), bb.wasmMSCTranscoder && (hb.MSCTranscoder.WasmModuleURL = bb.wasmMSCTranscoder), bb.wasmZSTDDecoder && (hb.ZSTDDecoder.WasmModuleURL = bb.wasmZSTDDecoder)), ub && (ub.wasmUASTCToASTC && (hb.LiteTranscoder_UASTC_ASTC.WasmBinary = ub.wasmUASTCToASTC), ub.wasmUASTCToBC7 && (hb.LiteTranscoder_UASTC_BC7.WasmBinary = ub.wasmUASTCToBC7), ub.wasmUASTCToRGBA_UNORM && (hb.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = ub.wasmUASTCToRGBA_UNORM), ub.wasmUASTCToRGBA_SRGB && (hb.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = ub.wasmUASTCToRGBA_SRGB), ub.wasmUASTCToR8_UNORM && (hb.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = ub.wasmUASTCToR8_UNORM), ub.wasmUASTCToRG8_UNORM && (hb.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = ub.wasmUASTCToRG8_UNORM), ub.jsMSCTranscoder && (hb.MSCTranscoder.JSModule = ub.jsMSCTranscoder), ub.wasmMSCTranscoder && (hb.MSCTranscoder.WasmBinary = ub.wasmMSCTranscoder), ub.wasmZSTDDecoder && (hb.ZSTDDecoder.WasmBinary = ub.wasmZSTDDecoder))
    }

    function Hb(bb) {
      let ub;
      "undefined" === typeof bb && "undefined" !== typeof KTX2DECODER && (bb = KTX2DECODER), onmessage = hb => {
        if (hb.data) switch (hb.data.action) {
          case "init": {
            const Bb = hb.data.urls;
            Bb && (Bb.jsDecoderModule && "undefined" === typeof bb && (importScripts(Bb.jsDecoderModule), bb = KTX2DECODER), ab(Bb)), hb.data.wasmBinaries && ab(void 0, {
              ...hb.data.wasmBinaries,
              jsDecoderModule: bb
            }), ub = new bb.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            bb.KTX2Decoder.DefaultDecoderOptions = hb.data.options;
            break;
          case "decode":
            ub.decode(hb.data.data, hb.data.caps, hb.data.options).then((bb => {
              const ub = [];
              for (let hb = 0; hb < bb.mipmaps.length; ++hb) {
                const Bb = bb.mipmaps[hb];
                Bb && Bb.data && ub.push(Bb.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: bb
              }, ub)
            })).catch((bb => {
              postMessage({
                action: "decoded",
                success: !1,
                XS: bb
              })
            }))
        }
      }
    }! function(bb) {
      bb[bb.ETC1S = 0] = "ETC1S", bb[bb.UASTC4x4 = 1] = "UASTC4x4", bb[bb.RGBA32 = 2] = "RGBA32"
    }(Gb || (Gb = {})),
    function(bb) {
      bb[bb.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", bb[bb.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", bb[bb.BC7_RGBA = 1] = "BC7_RGBA", bb[bb.BC3_RGBA = 2] = "BC3_RGBA", bb[bb.BC1_RGB = 3] = "BC1_RGB", bb[bb.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", bb[bb.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", bb[bb.ETC2_RGBA = 6] = "ETC2_RGBA", bb[bb.ETC1_RGB = 7] = "ETC1_RGB", bb[bb.RGBA32 = 8] = "RGBA32", bb[bb.R8 = 9] = "R8", bb[bb.RG8 = 10] = "RG8"
    }(Ub || (Ub = {})),
    function(bb) {
      bb[bb.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", bb[bb.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", bb[bb.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", bb[bb.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", bb[bb.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", bb[bb.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", bb[bb.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", bb[bb.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", bb[bb.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", bb[bb.RGBA8Format = 32856] = "RGBA8Format", bb[bb.R8Format = 33321] = "R8Format", bb[bb.RG8Format = 33323] = "RG8Format"
    }(Lb || (Lb = {}));
    class wb {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(bb) {
        if (wb._WorkerPoolPromise || wb._DecoderModulePromise) return;
        const ub = {
          wasmBaseUrl: Sb.k.ScriptBaseUrl,
          jsDecoderModule: Sb.k.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Sb.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Sb.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Sb.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Sb.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Sb.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Sb.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Sb.k.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Sb.k.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Sb.k.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        bb && "function" === typeof Worker && "undefined" !== typeof URL ? wb._WorkerPoolPromise = new Promise((hb => {
          const Bb = `${ab}(${Hb})()`,
            Ob = URL.createObjectURL(new Blob([Bb], {
              type: "application/javascript"
            }));
          hb(new Yb.e(bb, (async () => await async function(bb, ub, hb) {
            return await new Promise(((Bb, Ob) => {
              const Gb = ub => {
                  bb.removeEventListener("error", Gb), bb.removeEventListener("message", Ub), Ob(ub)
                },
                Ub = ub => {
                  "init" === ub.data.action && (bb.removeEventListener("error", Gb), bb.removeEventListener("message", Ub), Bb(bb))
                };
              bb.addEventListener("error", Gb), bb.addEventListener("message", Ub), bb.postMessage({
                action: "init",
                urls: hb,
                wasmBinaries: ub
              })
            }))
          }(new Worker(Ob), void 0, ub))))
        })) : "undefined" === typeof wb._KTX2DecoderModule ? wb._DecoderModulePromise = Sb.k.LoadBabylonScriptAsync(ub.jsDecoderModule).then((() => (wb._KTX2DecoderModule = KTX2DECODER, wb._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, wb._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, ab(ub, wb._KTX2DecoderModule), new wb._KTX2DecoderModule.KTX2Decoder))) : (wb._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, wb._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, wb._DecoderModulePromise = Promise.resolve(new wb._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wb.DefaultNumWorkers;
        this._engine = bb;
        const hb = "object" === typeof ub && ub.workerPool || wb.WorkerPool;
        if (hb) wb._WorkerPoolPromise = Promise.resolve(hb);
        else {
          "object" === typeof ub ? wb._KTX2DecoderModule = ub?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (wb._KTX2DecoderModule = KTX2DECODER);
          const bb = "number" === typeof ub ? ub : ub.numWorkers ?? wb.DefaultNumWorkers;
          wb._Initialize(bb)
        }
      }
      async _uploadAsync(bb, ub, hb) {
        const Bb = await this._decodeAsync(bb, hb);
        this._createTexture(Bb, ub, hb)
      }
      async _decodeAsync(bb, ub) {
        const hb = this._engine.getCaps(),
          Bb = {
            astc: !!hb.astc,
            bptc: !!hb.bptc,
            s3tc: !!hb.s3tc,
            pvrtc: !!hb.pvrtc,
            etc2: !!hb.etc2,
            etc1: !!hb.etc1
          };
        if (wb._WorkerPoolPromise) {
          const hb = await wb._WorkerPoolPromise;
          return await new Promise(((Ob, Gb) => {
            hb.push(((hb, Ub) => {
              const Lb = bb => {
                  hb.removeEventListener("error", Lb), hb.removeEventListener("message", Yb), Gb(bb), Ub()
                },
                Yb = bb => {
                  "decoded" === bb.data.action && (hb.removeEventListener("error", Lb), hb.removeEventListener("message", Yb), bb.data.success ? Ob(bb.data.decodedData) : Gb({
                    message: bb.data.XS
                  }), Ub())
                };
              hb.addEventListener("error", Lb), hb.addEventListener("message", Yb), hb.postMessage({
                action: "setDefaultDecoderOptions",
                options: wb.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Sb = new Uint8Array(bb.byteLength);
              Sb.set(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength)), hb.postMessage({
                action: "decode",
                data: Sb,
                caps: Bb,
                options: ub
              }, [Sb.buffer])
            }))
          }))
        }
        if (wb._DecoderModulePromise) {
          const Bb = await wb._DecoderModulePromise;
          return wb.DefaultDecoderOptions.isDirty && (wb._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = wb.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Ob, Gb) => {
            Bb.decode(bb, hb, ub).then((bb => {
              Ob(bb)
            })).catch((bb => {
              Gb({
                message: bb
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(bb, ub, hb) {
        if ((bb.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, ub), hb && (hb.transcodedFormat = bb.transcodedFormat, hb.isInGammaSpace = bb.isInGammaSpace, hb.hasAlpha = bb.hasAlpha, hb.transcoderName = bb.transcoderName);
        let Bb = !0;
        switch (bb.transcodedFormat) {
          case 32856:
            ub.type = 0, ub.format = 5;
            break;
          case 33321:
            ub.type = 0, ub.format = 6;
            break;
          case 33323:
            ub.type = 0, ub.format = 7;
            break;
          default:
            ub.format = bb.transcodedFormat, Bb = !1
        }
        if (ub._gammaSpace = bb.isInGammaSpace, ub.generateMipMaps = bb.mipmaps.length > 1, ub.width = bb.mipmaps[0].width, ub.height = bb.mipmaps[0].height, bb.errors) throw new Error("KTX2 container - could not transcode the data. " + bb.errors);
        for (let Ob = 0; Ob < bb.mipmaps.length; ++Ob) {
          const hb = bb.mipmaps[Ob];
          if (!hb || !hb.data) throw new Error("KTX2 container - could not transcode one of the image");
          Bb ? (ub.width = hb.width, ub.height = hb.height, this._engine._uploadDataToTextureDirectly(ub, hb.data, 0, Ob, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(ub, bb.transcodedFormat, hb.width, hb.height, hb.data, 0, Ob)
        }
        ub._extension = ".ktx2", ub.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(bb) {
        if (bb.byteLength >= 12) {
          const ub = new Uint8Array(bb.buffer, bb.byteOffset, 12);
          if (171 === ub[0] && 75 === ub[1] && 84 === ub[2] && 88 === ub[3] && 32 === ub[4] && 50 === ub[5] && 48 === ub[6] && 187 === ub[7] && 13 === ub[8] && 10 === ub[9] && 26 === ub[10] && 10 === ub[11]) return !0
        }
        return !1
      }
    }

    function Zb(bb) {
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
    wb.URLConfig = {
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
    }, wb.DefaultNumWorkers = wb.GetDefaultNumWorkers(), wb.DefaultDecoderOptions = new class {
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
            transcodeFormat: [Ub.BC1_RGB, Ub.BC3_RGBA],
            yes: {
              transcodeFormat: Ub.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = bb, bb
      }
    };
    class Xb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, ub, hb, Bb) {
        if (Array.isArray(bb)) return;
        ub._invertVScale = !ub.invertY;
        const Gb = ub.UX(),
          Ub = new Ob(bb, 6),
          Lb = Zb(Ub.glInternalFormat);
        null !== Lb ? (ub.format = Lb, ub._useSRGBBuffer = Gb._getUseSRGBBuffer(!0, !ub.generateMipMaps), ub._gammaSpace = !0) : ub.format = Ub.glInternalFormat;
        const Yb = Ub.numberOfMipmapLevels > 1 && ub.generateMipMaps;
        Gb._unpackFlipY(!0), Ub.uploadLevels(ub, ub.generateMipMaps), ub.width = Ub.pixelWidth, ub.height = Ub.pixelHeight, Gb._setCubeMapTextureParams(ub, Yb, Ub.numberOfMipmapLevels - 1), ub.isReady = !0, ub.onLoadedObservable.notifyObservers(ub), ub.onLoadedObservable.clear(), Bb && Bb()
      }
      loadData(bb, ub, hb, Gb) {
        if (Ob.IsValid(bb)) {
          ub._invertVScale = !ub.invertY;
          const Bb = new Ob(bb, 1),
            Gb = Zb(Bb.glInternalFormat);
          null !== Gb ? (ub.format = Gb, ub._useSRGBBuffer = ub.UX()._getUseSRGBBuffer(!0, !ub.generateMipMaps), ub._gammaSpace = !0) : ub.format = Bb.glInternalFormat, hb(Bb.pixelWidth, Bb.pixelHeight, ub.generateMipMaps, !0, (() => {
            Bb.uploadLevels(ub, ub.generateMipMaps)
          }), Bb.isInvalid)
        } else if (wb.IsValid(bb)) {
          new wb(ub.UX())._uploadAsync(bb, ub, Gb).then((() => {
            hb(ub.width, ub.height, ub.generateMipMaps, !0, (() => {}), !1)
          }), (bb => {
            Bb.b.Warn(`Failed to load KTX2 texture data: ${bb.message}`), hb(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Bb.b.Error("texture missing KTX identifier"), hb(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41291: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob
    });
    class Bb {
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
        for (const ub of this._workerInfos)
          if (ub.idle) return this._execute(ub, bb), !0;
        return !1
      }
      _execute(bb, ub) {
        bb.idle = !1, bb.workerPromise.then((hb => {
          ub(hb, (() => {
            const ub = this._pendingActions.shift();
            ub ? this._execute(bb, ub) : bb.idle = !0
          }))
        }))
      }
    }
    class Ob extends Bb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ob.DefaultOptions;
        super([]), this._maxWorkers = bb, this._createWorkerAsync = ub, this._options = hb
      }
      push(bb) {
        if (!this._executeOnIdleWorker(bb))
          if (this._workerInfos.length < this._maxWorkers) {
            const ub = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(ub), this._execute(ub, bb)
          } else this._pendingActions.push(bb)
      }
      _execute(bb, ub) {
        bb.timeoutId && (clearTimeout(bb.timeoutId), delete bb.timeoutId), super._execute(bb, ((hb, Bb) => {
          ub(hb, (() => {
            Bb(), bb.idle && (bb.timeoutId = setTimeout((() => {
              bb.workerPromise.then((bb => {
                bb.terminate()
              }));
              const ub = this._workerInfos.indexOf(bb); - 1 !== ub && this._workerInfos.splice(ub, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Ob.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);