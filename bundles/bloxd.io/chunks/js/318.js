export const id = 318;
export const ids = [318];
export const modules = {
  42302: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      _KTXTextureLoader: () => KG
    });
    var wG = ZG(39093);
    class SG {
      constructor(GG, bG) {
        if (this.data = GG, this.isInvalid = !1, !SG.IsValid(GG)) return this.isInvalid = !0, void wG.c.Error("texture missing KTX identifier");
        const ZG = Uint32Array.BYTES_PER_ELEMENT,
          LG = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ZG),
          yG = 67305985 === LG.getUint32(0, !0);
        return this.glType = LG.getUint32(1 * ZG, yG), this.glTypeSize = LG.getUint32(2 * ZG, yG), this.glFormat = LG.getUint32(3 * ZG, yG), this.glInternalFormat = LG.getUint32(4 * ZG, yG), this.glBaseInternalFormat = LG.getUint32(5 * ZG, yG), this.pixelWidth = LG.getUint32(6 * ZG, yG), this.pixelHeight = LG.getUint32(7 * ZG, yG), this.pixelDepth = LG.getUint32(8 * ZG, yG), this.numberOfArrayElements = LG.getUint32(9 * ZG, yG), this.numberOfFaces = LG.getUint32(10 * ZG, yG), this.numberOfMipmapLevels = LG.getUint32(11 * ZG, yG), this.bytesOfKeyValueData = LG.getUint32(12 * ZG, yG), 0 !== this.glType ? (wG.c.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (wG.c.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (wG.c.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== bG ? (wG.c.Error("number of faces expected" + bG + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = SG.COMPRESSED_2D))
      }
      uploadLevels(GG, bG) {
        switch (this.loadType) {
          case SG.COMPRESSED_2D:
            this._upload2DCompressedLevels(GG, bG);
          case SG.TEX_2D:
          case SG.COMPRESSED_3D:
          case SG.TEX_3D:
        }
      }
      _upload2DCompressedLevels(GG, bG) {
        let ZG = SG.HEADER_LEN + this.bytesOfKeyValueData,
          wG = this.pixelWidth,
          LG = this.pixelHeight;
        const yG = bG ? this.numberOfMipmapLevels : 1;
        for (let SG = 0; SG < yG; SG++) {
          const bG = new Int32Array(this.data.buffer, this.data.byteOffset + ZG, 1)[0];
          ZG += 4;
          for (let yG = 0; yG < this.numberOfFaces; yG++) {
            const kG = new Uint8Array(this.data.buffer, this.data.byteOffset + ZG, bG);
            GG.CK()._uploadCompressedDataToTextureDirectly(GG, GG.format, wG, LG, kG, yG, SG), ZG += bG, ZG += 3 - (bG + 3) % 4
          }
          wG = Math.max(1, .5 * wG), LG = Math.max(1, .5 * LG)
        }
      }
      static IsValid(GG) {
        if (GG.byteLength >= 12) {
          const bG = new Uint8Array(GG.buffer, GG.byteOffset, 12);
          if (171 === bG[0] && 75 === bG[1] && 84 === bG[2] && 88 === bG[3] && 32 === bG[4] && 49 === bG[5] && 49 === bG[6] && 187 === bG[7] && 13 === bG[8] && 10 === bG[9] && 26 === bG[10] && 10 === bG[11]) return !0
        }
        return !1
      }
    }
    SG.HEADER_LEN = 64, SG.COMPRESSED_2D = 0, SG.COMPRESSED_3D = 1, SG.TEX_2D = 2, SG.TEX_3D = 3;
    var LG, yG, kG, UG = ZG(42309),
      YG = ZG(40477);

    function VG(GG, bG) {
      const ZG = bG?.jsDecoderModule || KTX2DECODER;
      GG && (GG.wasmBaseUrl && (ZG.Transcoder.WasmBaseUrl = GG.wasmBaseUrl), GG.wasmUASTCToASTC && (ZG.LiteTranscoder_UASTC_ASTC.WasmModuleURL = GG.wasmUASTCToASTC), GG.wasmUASTCToBC7 && (ZG.LiteTranscoder_UASTC_BC7.WasmModuleURL = GG.wasmUASTCToBC7), GG.wasmUASTCToRGBA_UNORM && (ZG.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = GG.wasmUASTCToRGBA_UNORM), GG.wasmUASTCToRGBA_SRGB && (ZG.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = GG.wasmUASTCToRGBA_SRGB), GG.wasmUASTCToR8_UNORM && (ZG.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = GG.wasmUASTCToR8_UNORM), GG.wasmUASTCToRG8_UNORM && (ZG.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = GG.wasmUASTCToRG8_UNORM), GG.jsMSCTranscoder && (ZG.MSCTranscoder.JSModuleURL = GG.jsMSCTranscoder), GG.wasmMSCTranscoder && (ZG.MSCTranscoder.WasmModuleURL = GG.wasmMSCTranscoder), GG.wasmZSTDDecoder && (ZG.ZSTDDecoder.WasmModuleURL = GG.wasmZSTDDecoder)), bG && (bG.wasmUASTCToASTC && (ZG.LiteTranscoder_UASTC_ASTC.WasmBinary = bG.wasmUASTCToASTC), bG.wasmUASTCToBC7 && (ZG.LiteTranscoder_UASTC_BC7.WasmBinary = bG.wasmUASTCToBC7), bG.wasmUASTCToRGBA_UNORM && (ZG.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = bG.wasmUASTCToRGBA_UNORM), bG.wasmUASTCToRGBA_SRGB && (ZG.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = bG.wasmUASTCToRGBA_SRGB), bG.wasmUASTCToR8_UNORM && (ZG.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = bG.wasmUASTCToR8_UNORM), bG.wasmUASTCToRG8_UNORM && (ZG.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = bG.wasmUASTCToRG8_UNORM), bG.jsMSCTranscoder && (ZG.MSCTranscoder.JSModule = bG.jsMSCTranscoder), bG.wasmMSCTranscoder && (ZG.MSCTranscoder.WasmBinary = bG.wasmMSCTranscoder), bG.wasmZSTDDecoder && (ZG.ZSTDDecoder.WasmBinary = bG.wasmZSTDDecoder))
    }

    function pG(GG) {
      let bG;
      "undefined" === typeof GG && "undefined" !== typeof KTX2DECODER && (GG = KTX2DECODER), onmessage = ZG => {
        if (ZG.data) switch (ZG.data.action) {
          case "init": {
            const wG = ZG.data.urls;
            wG && (wG.jsDecoderModule && "undefined" === typeof GG && (importScripts(wG.jsDecoderModule), GG = KTX2DECODER), VG(wG)), ZG.data.wasmBinaries && VG(void 0, {
              ...ZG.data.wasmBinaries,
              jsDecoderModule: GG
            }), bG = new GG.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            GG.KTX2Decoder.DefaultDecoderOptions = ZG.data.options;
            break;
          case "decode":
            bG.decode(ZG.data.data, ZG.data.caps, ZG.data.options).then((GG => {
              const bG = [];
              for (let ZG = 0; ZG < GG.mipmaps.length; ++ZG) {
                const wG = GG.mipmaps[ZG];
                wG && wG.data && bG.push(wG.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: GG
              }, bG)
            })).catch((GG => {
              postMessage({
                action: "decoded",
                success: !1,
                vV: GG
              })
            }))
        }
      }
    }! function(GG) {
      GG[GG.ETC1S = 0] = "ETC1S", GG[GG.UASTC4x4 = 1] = "UASTC4x4", GG[GG.RGBA32 = 2] = "RGBA32"
    }(LG || (LG = {})),
    function(GG) {
      GG[GG.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", GG[GG.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", GG[GG.BC7_RGBA = 1] = "BC7_RGBA", GG[GG.BC3_RGBA = 2] = "BC3_RGBA", GG[GG.BC1_RGB = 3] = "BC1_RGB", GG[GG.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", GG[GG.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", GG[GG.ETC2_RGBA = 6] = "ETC2_RGBA", GG[GG.ETC1_RGB = 7] = "ETC1_RGB", GG[GG.RGBA32 = 8] = "RGBA32", GG[GG.R8 = 9] = "R8", GG[GG.RG8 = 10] = "RG8"
    }(yG || (yG = {})),
    function(GG) {
      GG[GG.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", GG[GG.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", GG[GG.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", GG[GG.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", GG[GG.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", GG[GG.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", GG[GG.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", GG[GG.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", GG[GG.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", GG[GG.RGBA8Format = 32856] = "RGBA8Format", GG[GG.R8Format = 33321] = "R8Format", GG[GG.RG8Format = 33323] = "RG8Format"
    }(kG || (kG = {}));
    class fG {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(GG) {
        if (fG._WorkerPoolPromise || fG._DecoderModulePromise) return;
        const bG = {
          wasmBaseUrl: YG.f.ScriptBaseUrl,
          jsDecoderModule: YG.f.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: YG.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: YG.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: YG.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: YG.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: YG.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: YG.f.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: YG.f.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: YG.f.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: YG.f.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        GG && "function" === typeof Worker && "undefined" !== typeof URL ? fG._WorkerPoolPromise = new Promise((ZG => {
          const wG = `${VG}(${pG})()`,
            SG = URL.createObjectURL(new Blob([wG], {
              type: "application/javascript"
            }));
          ZG(new UG.c(GG, (async () => await async function(GG, bG, ZG) {
            return await new Promise(((wG, SG) => {
              const LG = bG => {
                  GG.removeEventListener("error", LG), GG.removeEventListener("message", yG), SG(bG)
                },
                yG = bG => {
                  "init" === bG.data.action && (GG.removeEventListener("error", LG), GG.removeEventListener("message", yG), wG(GG))
                };
              GG.addEventListener("error", LG), GG.addEventListener("message", yG), GG.postMessage({
                action: "init",
                urls: ZG,
                wasmBinaries: bG
              })
            }))
          }(new Worker(SG), void 0, bG))))
        })) : "undefined" === typeof fG._KTX2DecoderModule ? fG._DecoderModulePromise = YG.f.LoadBabylonScriptAsync(bG.jsDecoderModule).then((() => (fG._KTX2DecoderModule = KTX2DECODER, fG._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, fG._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, VG(bG, fG._KTX2DecoderModule), new fG._KTX2DecoderModule.KTX2Decoder))) : (fG._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, fG._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, fG._DecoderModulePromise = Promise.resolve(new fG._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fG.DefaultNumWorkers;
        this._engine = GG;
        const ZG = "object" === typeof bG && bG.workerPool || fG.WorkerPool;
        if (ZG) fG._WorkerPoolPromise = Promise.resolve(ZG);
        else {
          "object" === typeof bG ? fG._KTX2DecoderModule = bG?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (fG._KTX2DecoderModule = KTX2DECODER);
          const GG = "number" === typeof bG ? bG : bG.numWorkers ?? fG.DefaultNumWorkers;
          fG._Initialize(GG)
        }
      }
      async _uploadAsync(GG, bG, ZG) {
        const wG = await this._decodeAsync(GG, ZG);
        this._createTexture(wG, bG, ZG)
      }
      async _decodeAsync(GG, bG) {
        const ZG = this._engine.getCaps(),
          wG = {
            astc: !!ZG.astc,
            bptc: !!ZG.bptc,
            s3tc: !!ZG.s3tc,
            pvrtc: !!ZG.pvrtc,
            etc2: !!ZG.etc2,
            etc1: !!ZG.etc1
          };
        if (fG._WorkerPoolPromise) {
          const ZG = await fG._WorkerPoolPromise;
          return await new Promise(((SG, LG) => {
            ZG.push(((ZG, yG) => {
              const kG = GG => {
                  ZG.removeEventListener("error", kG), ZG.removeEventListener("message", UG), LG(GG), yG()
                },
                UG = GG => {
                  "decoded" === GG.data.action && (ZG.removeEventListener("error", kG), ZG.removeEventListener("message", UG), GG.data.success ? SG(GG.data.decodedData) : LG({
                    message: GG.data.vV
                  }), yG())
                };
              ZG.addEventListener("error", kG), ZG.addEventListener("message", UG), ZG.postMessage({
                action: "setDefaultDecoderOptions",
                options: fG.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const YG = new Uint8Array(GG.byteLength);
              YG.set(new Uint8Array(GG.buffer, GG.byteOffset, GG.byteLength)), ZG.postMessage({
                action: "decode",
                data: YG,
                caps: wG,
                options: bG
              }, [YG.buffer])
            }))
          }))
        }
        if (fG._DecoderModulePromise) {
          const wG = await fG._DecoderModulePromise;
          return fG.DefaultDecoderOptions.isDirty && (fG._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = fG.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((SG, LG) => {
            wG.decode(GG, ZG, bG).then((GG => {
              SG(GG)
            })).catch((GG => {
              LG({
                message: GG
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(GG, bG, ZG) {
        if ((GG.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, bG), ZG && (ZG.transcodedFormat = GG.transcodedFormat, ZG.isInGammaSpace = GG.isInGammaSpace, ZG.hasAlpha = GG.hasAlpha, ZG.transcoderName = GG.transcoderName);
        let wG = !0;
        switch (GG.transcodedFormat) {
          case 32856:
            bG.type = 0, bG.format = 5;
            break;
          case 33321:
            bG.type = 0, bG.format = 6;
            break;
          case 33323:
            bG.type = 0, bG.format = 7;
            break;
          default:
            bG.format = GG.transcodedFormat, wG = !1
        }
        if (bG._gammaSpace = GG.isInGammaSpace, bG.generateMipMaps = GG.mipmaps.length > 1, bG.width = GG.mipmaps[0].width, bG.height = GG.mipmaps[0].height, GG.errors) throw new Error("KTX2 container - could not transcode the data. " + GG.errors);
        for (let SG = 0; SG < GG.mipmaps.length; ++SG) {
          const ZG = GG.mipmaps[SG];
          if (!ZG || !ZG.data) throw new Error("KTX2 container - could not transcode one of the image");
          wG ? (bG.width = ZG.width, bG.height = ZG.height, this._engine._uploadDataToTextureDirectly(bG, ZG.data, 0, SG, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(bG, GG.transcodedFormat, ZG.width, ZG.height, ZG.data, 0, SG)
        }
        bG._extension = ".ktx2", bG.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(GG) {
        if (GG.byteLength >= 12) {
          const bG = new Uint8Array(GG.buffer, GG.byteOffset, 12);
          if (171 === bG[0] && 75 === bG[1] && 84 === bG[2] && 88 === bG[3] && 32 === bG[4] && 50 === bG[5] && 48 === bG[6] && 187 === bG[7] && 13 === bG[8] && 10 === bG[9] && 26 === bG[10] && 10 === bG[11]) return !0
        }
        return !1
      }
    }

    function QG(GG) {
      switch (GG) {
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
    fG.URLConfig = {
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
    }, fG.DefaultNumWorkers = fG.GetDefaultNumWorkers(), fG.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(GG) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== GG && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = GG, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(GG) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== GG && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = GG, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(GG) {
        this._forceRGBA !== GG && (this._forceRGBA = GG, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(GG) {
        this._forceR8 !== GG && (this._forceR8 = GG, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(GG) {
        this._forceRG8 !== GG && (this._forceRG8 = GG, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(GG) {
        this._bypassTranscoders !== GG && (this._bypassTranscoders = GG, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const GG = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (GG.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (GG.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (GG.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (GG.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (GG.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (GG.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [yG.BC1_RGB, yG.BC3_RGBA],
            yes: {
              transcodeFormat: yG.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = GG, GG
      }
    };
    class KG {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(GG, bG, ZG, wG) {
        if (Array.isArray(GG)) return;
        bG._invertVScale = !bG.invertY;
        const LG = bG.CK(),
          yG = new SG(GG, 6),
          kG = QG(yG.glInternalFormat);
        null !== kG ? (bG.format = kG, bG._useSRGBBuffer = LG._getUseSRGBBuffer(!0, !bG.generateMipMaps), bG._gammaSpace = !0) : bG.format = yG.glInternalFormat;
        const UG = yG.numberOfMipmapLevels > 1 && bG.generateMipMaps;
        LG._unpackFlipY(!0), yG.uploadLevels(bG, bG.generateMipMaps), bG.width = yG.pixelWidth, bG.height = yG.pixelHeight, LG._setCubeMapTextureParams(bG, UG, yG.numberOfMipmapLevels - 1), bG.isReady = !0, bG.onLoadedObservable.notifyObservers(bG), bG.onLoadedObservable.clear(), wG && wG()
      }
      loadData(GG, bG, ZG, LG) {
        if (SG.IsValid(GG)) {
          bG._invertVScale = !bG.invertY;
          const wG = new SG(GG, 1),
            LG = QG(wG.glInternalFormat);
          null !== LG ? (bG.format = LG, bG._useSRGBBuffer = bG.CK()._getUseSRGBBuffer(!0, !bG.generateMipMaps), bG._gammaSpace = !0) : bG.format = wG.glInternalFormat, ZG(wG.pixelWidth, wG.pixelHeight, bG.generateMipMaps, !0, (() => {
            wG.uploadLevels(bG, bG.generateMipMaps)
          }), wG.isInvalid)
        } else if (fG.IsValid(GG)) {
          new fG(bG.CK())._uploadAsync(GG, bG, LG).then((() => {
            ZG(bG.width, bG.height, bG.generateMipMaps, !0, (() => {}), !1)
          }), (GG => {
            wG.c.Warn(`Failed to load KTX2 texture data: ${GG.message}`), ZG(0, 0, !1, !1, (() => {}), !0)
          }))
        } else wG.c.Error("texture missing KTX identifier"), ZG(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  42309: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    class wG {
      constructor(GG) {
        this._pendingActions = new Array, this._workerInfos = GG.map((GG => ({
          workerPromise: Promise.resolve(GG),
          idle: !0
        })))
      }
      dispose() {
        for (const GG of this._workerInfos) GG.workerPromise.then((GG => {
          GG.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(GG) {
        this._executeOnIdleWorker(GG) || this._pendingActions.push(GG)
      }
      _executeOnIdleWorker(GG) {
        for (const bG of this._workerInfos)
          if (bG.idle) return this._execute(bG, GG), !0;
        return !1
      }
      _execute(GG, bG) {
        GG.idle = !1, GG.workerPromise.then((ZG => {
          bG(ZG, (() => {
            const bG = this._pendingActions.shift();
            bG ? this._execute(GG, bG) : GG.idle = !0
          }))
        }))
      }
    }
    class SG extends wG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SG.DefaultOptions;
        super([]), this._maxWorkers = GG, this._createWorkerAsync = bG, this._options = ZG
      }
      push(GG) {
        if (!this._executeOnIdleWorker(GG))
          if (this._workerInfos.length < this._maxWorkers) {
            const bG = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(bG), this._execute(bG, GG)
          } else this._pendingActions.push(GG)
      }
      _execute(GG, bG) {
        GG.timeoutId && (clearTimeout(GG.timeoutId), delete GG.timeoutId), super._execute(GG, ((ZG, wG) => {
          bG(ZG, (() => {
            wG(), GG.idle && (GG.timeoutId = setTimeout((() => {
              GG.workerPromise.then((GG => {
                GG.terminate()
              }));
              const bG = this._workerInfos.indexOf(GG); - 1 !== bG && this._workerInfos.splice(bG, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    SG.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);