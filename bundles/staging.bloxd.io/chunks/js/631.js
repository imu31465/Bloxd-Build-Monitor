export const id = 631;
export const ids = [631];
export const modules = {
  53878: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      _KTXTextureLoader: () => eR
    });
    var yR = GR(39914);
    class tR {
      constructor(RR, JR) {
        if (this.data = RR, this.isInvalid = !1, !tR.IsValid(RR)) return this.isInvalid = !0, void yR.c.Error("texture missing KTX identifier");
        const GR = Uint32Array.BYTES_PER_ELEMENT,
          uR = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * GR),
          ZR = 67305985 === uR.getUint32(0, !0);
        return this.glType = uR.getUint32(1 * GR, ZR), this.glTypeSize = uR.getUint32(2 * GR, ZR), this.glFormat = uR.getUint32(3 * GR, ZR), this.glInternalFormat = uR.getUint32(4 * GR, ZR), this.glBaseInternalFormat = uR.getUint32(5 * GR, ZR), this.pixelWidth = uR.getUint32(6 * GR, ZR), this.pixelHeight = uR.getUint32(7 * GR, ZR), this.pixelDepth = uR.getUint32(8 * GR, ZR), this.numberOfArrayElements = uR.getUint32(9 * GR, ZR), this.numberOfFaces = uR.getUint32(10 * GR, ZR), this.numberOfMipmapLevels = uR.getUint32(11 * GR, ZR), this.bytesOfKeyValueData = uR.getUint32(12 * GR, ZR), 0 !== this.glType ? (yR.c.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (yR.c.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (yR.c.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== JR ? (yR.c.Error("number of faces expected" + JR + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = tR.COMPRESSED_2D))
      }
      uploadLevels(RR, JR) {
        switch (this.loadType) {
          case tR.COMPRESSED_2D:
            this._upload2DCompressedLevels(RR, JR);
          case tR.TEX_2D:
          case tR.COMPRESSED_3D:
          case tR.TEX_3D:
        }
      }
      _upload2DCompressedLevels(RR, JR) {
        let GR = tR.HEADER_LEN + this.bytesOfKeyValueData,
          yR = this.pixelWidth,
          uR = this.pixelHeight;
        const ZR = JR ? this.numberOfMipmapLevels : 1;
        for (let tR = 0; tR < ZR; tR++) {
          const JR = new Int32Array(this.data.buffer, this.data.byteOffset + GR, 1)[0];
          GR += 4;
          for (let ZR = 0; ZR < this.numberOfFaces; ZR++) {
            const qR = new Uint8Array(this.data.buffer, this.data.byteOffset + GR, JR);
            RR.ke()._uploadCompressedDataToTextureDirectly(RR, RR.format, yR, uR, qR, ZR, tR), GR += JR, GR += 3 - (JR + 3) % 4
          }
          yR = Math.max(1, .5 * yR), uR = Math.max(1, .5 * uR)
        }
      }
      static IsValid(RR) {
        if (RR.byteLength >= 12) {
          const JR = new Uint8Array(RR.buffer, RR.byteOffset, 12);
          if (171 === JR[0] && 75 === JR[1] && 84 === JR[2] && 88 === JR[3] && 32 === JR[4] && 49 === JR[5] && 49 === JR[6] && 187 === JR[7] && 13 === JR[8] && 10 === JR[9] && 26 === JR[10] && 10 === JR[11]) return !0
        }
        return !1
      }
    }
    tR.HEADER_LEN = 64, tR.COMPRESSED_2D = 0, tR.COMPRESSED_3D = 1, tR.TEX_2D = 2, tR.TEX_3D = 3;
    var uR, ZR, qR, iR = GR(53887),
      fR = GR(41616);

    function VR(RR, JR) {
      const GR = JR?.jsDecoderModule || KTX2DECODER;
      RR && (RR.wasmBaseUrl && (GR.Transcoder.WasmBaseUrl = RR.wasmBaseUrl), RR.wasmUASTCToASTC && (GR.LiteTranscoder_UASTC_ASTC.WasmModuleURL = RR.wasmUASTCToASTC), RR.wasmUASTCToBC7 && (GR.LiteTranscoder_UASTC_BC7.WasmModuleURL = RR.wasmUASTCToBC7), RR.wasmUASTCToRGBA_UNORM && (GR.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = RR.wasmUASTCToRGBA_UNORM), RR.wasmUASTCToRGBA_SRGB && (GR.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = RR.wasmUASTCToRGBA_SRGB), RR.wasmUASTCToR8_UNORM && (GR.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = RR.wasmUASTCToR8_UNORM), RR.wasmUASTCToRG8_UNORM && (GR.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = RR.wasmUASTCToRG8_UNORM), RR.jsMSCTranscoder && (GR.MSCTranscoder.JSModuleURL = RR.jsMSCTranscoder), RR.wasmMSCTranscoder && (GR.MSCTranscoder.WasmModuleURL = RR.wasmMSCTranscoder), RR.wasmZSTDDecoder && (GR.ZSTDDecoder.WasmModuleURL = RR.wasmZSTDDecoder)), JR && (JR.wasmUASTCToASTC && (GR.LiteTranscoder_UASTC_ASTC.WasmBinary = JR.wasmUASTCToASTC), JR.wasmUASTCToBC7 && (GR.LiteTranscoder_UASTC_BC7.WasmBinary = JR.wasmUASTCToBC7), JR.wasmUASTCToRGBA_UNORM && (GR.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = JR.wasmUASTCToRGBA_UNORM), JR.wasmUASTCToRGBA_SRGB && (GR.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = JR.wasmUASTCToRGBA_SRGB), JR.wasmUASTCToR8_UNORM && (GR.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = JR.wasmUASTCToR8_UNORM), JR.wasmUASTCToRG8_UNORM && (GR.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = JR.wasmUASTCToRG8_UNORM), JR.jsMSCTranscoder && (GR.MSCTranscoder.JSModule = JR.jsMSCTranscoder), JR.wasmMSCTranscoder && (GR.MSCTranscoder.WasmBinary = JR.wasmMSCTranscoder), JR.wasmZSTDDecoder && (GR.ZSTDDecoder.WasmBinary = JR.wasmZSTDDecoder))
    }

    function KR(RR) {
      let JR;
      "undefined" === typeof RR && "undefined" !== typeof KTX2DECODER && (RR = KTX2DECODER), onmessage = GR => {
        if (GR.data) switch (GR.data.action) {
          case "init": {
            const yR = GR.data.urls;
            yR && (yR.jsDecoderModule && "undefined" === typeof RR && (importScripts(yR.jsDecoderModule), RR = KTX2DECODER), VR(yR)), GR.data.wasmBinaries && VR(void 0, {
              ...GR.data.wasmBinaries,
              jsDecoderModule: RR
            }), JR = new RR.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            RR.KTX2Decoder.DefaultDecoderOptions = GR.data.options;
            break;
          case "decode":
            JR.decode(GR.data.data, GR.data.caps, GR.data.options).then((RR => {
              const JR = [];
              for (let GR = 0; GR < RR.mipmaps.length; ++GR) {
                const yR = RR.mipmaps[GR];
                yR && yR.data && JR.push(yR.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: RR
              }, JR)
            })).catch((RR => {
              postMessage({
                action: "decoded",
                success: !1,
                LZ: RR
              })
            }))
        }
      }
    }! function(RR) {
      RR[RR.ETC1S = 0] = "ETC1S", RR[RR.UASTC4x4 = 1] = "UASTC4x4", RR[RR.RGBA32 = 2] = "RGBA32"
    }(uR || (uR = {})),
    function(RR) {
      RR[RR.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", RR[RR.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", RR[RR.BC7_RGBA = 1] = "BC7_RGBA", RR[RR.BC3_RGBA = 2] = "BC3_RGBA", RR[RR.BC1_RGB = 3] = "BC1_RGB", RR[RR.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", RR[RR.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", RR[RR.ETC2_RGBA = 6] = "ETC2_RGBA", RR[RR.ETC1_RGB = 7] = "ETC1_RGB", RR[RR.RGBA32 = 8] = "RGBA32", RR[RR.R8 = 9] = "R8", RR[RR.RG8 = 10] = "RG8"
    }(ZR || (ZR = {})),
    function(RR) {
      RR[RR.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", RR[RR.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", RR[RR.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", RR[RR.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", RR[RR.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", RR[RR.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", RR[RR.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", RR[RR.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", RR[RR.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", RR[RR.RGBA8Format = 32856] = "RGBA8Format", RR[RR.R8Format = 33321] = "R8Format", RR[RR.RG8Format = 33323] = "RG8Format"
    }(qR || (qR = {}));
    class wR {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(RR) {
        if (wR._WorkerPoolPromise || wR._DecoderModulePromise) return;
        const JR = {
          wasmBaseUrl: fR.h.ScriptBaseUrl,
          jsDecoderModule: fR.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: fR.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: fR.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: fR.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: fR.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: fR.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: fR.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: fR.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: fR.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: fR.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        RR && "function" === typeof Worker && "undefined" !== typeof URL ? wR._WorkerPoolPromise = new Promise((GR => {
          const yR = `${VR}(${KR})()`,
            tR = URL.createObjectURL(new Blob([yR], {
              type: "application/javascript"
            }));
          GR(new iR.e(RR, (async () => await async function(RR, JR, GR) {
            return await new Promise(((yR, tR) => {
              const uR = JR => {
                  RR.removeEventListener("error", uR), RR.removeEventListener("message", ZR), tR(JR)
                },
                ZR = JR => {
                  "init" === JR.data.action && (RR.removeEventListener("error", uR), RR.removeEventListener("message", ZR), yR(RR))
                };
              RR.addEventListener("error", uR), RR.addEventListener("message", ZR), RR.postMessage({
                action: "init",
                urls: GR,
                wasmBinaries: JR
              })
            }))
          }(new Worker(tR), void 0, JR))))
        })) : "undefined" === typeof wR._KTX2DecoderModule ? wR._DecoderModulePromise = fR.h.LoadBabylonScriptAsync(JR.jsDecoderModule).then((() => (wR._KTX2DecoderModule = KTX2DECODER, wR._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, wR._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, VR(JR, wR._KTX2DecoderModule), new wR._KTX2DecoderModule.KTX2Decoder))) : (wR._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, wR._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, wR._DecoderModulePromise = Promise.resolve(new wR._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wR.DefaultNumWorkers;
        this._engine = RR;
        const GR = "object" === typeof JR && JR.workerPool || wR.WorkerPool;
        if (GR) wR._WorkerPoolPromise = Promise.resolve(GR);
        else {
          "object" === typeof JR ? wR._KTX2DecoderModule = JR?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (wR._KTX2DecoderModule = KTX2DECODER);
          const RR = "number" === typeof JR ? JR : JR.numWorkers ?? wR.DefaultNumWorkers;
          wR._Initialize(RR)
        }
      }
      async _uploadAsync(RR, JR, GR) {
        const yR = await this._decodeAsync(RR, GR);
        this._createTexture(yR, JR, GR)
      }
      async _decodeAsync(RR, JR) {
        const GR = this._engine.getCaps(),
          yR = {
            astc: !!GR.astc,
            bptc: !!GR.bptc,
            s3tc: !!GR.s3tc,
            pvrtc: !!GR.pvrtc,
            etc2: !!GR.etc2,
            etc1: !!GR.etc1
          };
        if (wR._WorkerPoolPromise) {
          const GR = await wR._WorkerPoolPromise;
          return await new Promise(((tR, uR) => {
            GR.push(((GR, ZR) => {
              const qR = RR => {
                  GR.removeEventListener("error", qR), GR.removeEventListener("message", iR), uR(RR), ZR()
                },
                iR = RR => {
                  "decoded" === RR.data.action && (GR.removeEventListener("error", qR), GR.removeEventListener("message", iR), RR.data.success ? tR(RR.data.decodedData) : uR({
                    message: RR.data.LZ
                  }), ZR())
                };
              GR.addEventListener("error", qR), GR.addEventListener("message", iR), GR.postMessage({
                action: "setDefaultDecoderOptions",
                options: wR.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const fR = new Uint8Array(RR.byteLength);
              fR.set(new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength)), GR.postMessage({
                action: "decode",
                data: fR,
                caps: yR,
                options: JR
              }, [fR.buffer])
            }))
          }))
        }
        if (wR._DecoderModulePromise) {
          const yR = await wR._DecoderModulePromise;
          return wR.DefaultDecoderOptions.isDirty && (wR._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = wR.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((tR, uR) => {
            yR.decode(RR, GR, JR).then((RR => {
              tR(RR)
            })).catch((RR => {
              uR({
                message: RR
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(RR, JR, GR) {
        if ((RR.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, JR), GR && (GR.transcodedFormat = RR.transcodedFormat, GR.isInGammaSpace = RR.isInGammaSpace, GR.hasAlpha = RR.hasAlpha, GR.transcoderName = RR.transcoderName);
        let yR = !0;
        switch (RR.transcodedFormat) {
          case 32856:
            JR.type = 0, JR.format = 5;
            break;
          case 33321:
            JR.type = 0, JR.format = 6;
            break;
          case 33323:
            JR.type = 0, JR.format = 7;
            break;
          default:
            JR.format = RR.transcodedFormat, yR = !1
        }
        if (JR._gammaSpace = RR.isInGammaSpace, JR.generateMipMaps = RR.mipmaps.length > 1, JR.width = RR.mipmaps[0].width, JR.height = RR.mipmaps[0].height, RR.errors) throw new Error("KTX2 container - could not transcode the data. " + RR.errors);
        for (let tR = 0; tR < RR.mipmaps.length; ++tR) {
          const GR = RR.mipmaps[tR];
          if (!GR || !GR.data) throw new Error("KTX2 container - could not transcode one of the image");
          yR ? (JR.width = GR.width, JR.height = GR.height, this._engine._uploadDataToTextureDirectly(JR, GR.data, 0, tR, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(JR, RR.transcodedFormat, GR.width, GR.height, GR.data, 0, tR)
        }
        JR._extension = ".ktx2", JR.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(RR) {
        if (RR.byteLength >= 12) {
          const JR = new Uint8Array(RR.buffer, RR.byteOffset, 12);
          if (171 === JR[0] && 75 === JR[1] && 84 === JR[2] && 88 === JR[3] && 32 === JR[4] && 50 === JR[5] && 48 === JR[6] && 187 === JR[7] && 13 === JR[8] && 10 === JR[9] && 26 === JR[10] && 10 === JR[11]) return !0
        }
        return !1
      }
    }

    function rR(RR) {
      switch (RR) {
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
    wR.URLConfig = {
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
    }, wR.DefaultNumWorkers = wR.GetDefaultNumWorkers(), wR.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(RR) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== RR && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = RR, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(RR) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== RR && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = RR, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(RR) {
        this._forceRGBA !== RR && (this._forceRGBA = RR, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(RR) {
        this._forceR8 !== RR && (this._forceR8 = RR, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(RR) {
        this._forceRG8 !== RR && (this._forceRG8 = RR, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(RR) {
        this._bypassTranscoders !== RR && (this._bypassTranscoders = RR, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const RR = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (RR.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (RR.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (RR.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (RR.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (RR.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (RR.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [ZR.BC1_RGB, ZR.BC3_RGBA],
            yes: {
              transcodeFormat: ZR.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = RR, RR
      }
    };
    class eR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(RR, JR, GR, yR) {
        if (Array.isArray(RR)) return;
        JR._invertVScale = !JR.invertY;
        const uR = JR.ke(),
          ZR = new tR(RR, 6),
          qR = rR(ZR.glInternalFormat);
        null !== qR ? (JR.format = qR, JR._useSRGBBuffer = uR._getUseSRGBBuffer(!0, !JR.generateMipMaps), JR._gammaSpace = !0) : JR.format = ZR.glInternalFormat;
        const iR = ZR.numberOfMipmapLevels > 1 && JR.generateMipMaps;
        uR._unpackFlipY(!0), ZR.uploadLevels(JR, JR.generateMipMaps), JR.width = ZR.pixelWidth, JR.height = ZR.pixelHeight, uR._setCubeMapTextureParams(JR, iR, ZR.numberOfMipmapLevels - 1), JR.isReady = !0, JR.onLoadedObservable.notifyObservers(JR), JR.onLoadedObservable.clear(), yR && yR()
      }
      loadData(RR, JR, GR, uR) {
        if (tR.IsValid(RR)) {
          JR._invertVScale = !JR.invertY;
          const yR = new tR(RR, 1),
            uR = rR(yR.glInternalFormat);
          null !== uR ? (JR.format = uR, JR._useSRGBBuffer = JR.ke()._getUseSRGBBuffer(!0, !JR.generateMipMaps), JR._gammaSpace = !0) : JR.format = yR.glInternalFormat, GR(yR.pixelWidth, yR.pixelHeight, JR.generateMipMaps, !0, (() => {
            yR.uploadLevels(JR, JR.generateMipMaps)
          }), yR.isInvalid)
        } else if (wR.IsValid(RR)) {
          new wR(JR.ke())._uploadAsync(RR, JR, uR).then((() => {
            GR(JR.width, JR.height, JR.generateMipMaps, !0, (() => {}), !1)
          }), (RR => {
            yR.c.Warn(`Failed to load KTX2 texture data: ${RR.message}`), GR(0, 0, !1, !1, (() => {}), !0)
          }))
        } else yR.c.Error("texture missing KTX identifier"), GR(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  53887: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    class yR {
      constructor(RR) {
        this._pendingActions = new Array, this._workerInfos = RR.map((RR => ({
          workerPromise: Promise.resolve(RR),
          idle: !0
        })))
      }
      dispose() {
        for (const RR of this._workerInfos) RR.workerPromise.then((RR => {
          RR.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(RR) {
        this._executeOnIdleWorker(RR) || this._pendingActions.push(RR)
      }
      _executeOnIdleWorker(RR) {
        for (const JR of this._workerInfos)
          if (JR.idle) return this._execute(JR, RR), !0;
        return !1
      }
      _execute(RR, JR) {
        RR.idle = !1, RR.workerPromise.then((GR => {
          JR(GR, (() => {
            const JR = this._pendingActions.shift();
            JR ? this._execute(RR, JR) : RR.idle = !0
          }))
        }))
      }
    }
    class tR extends yR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tR.DefaultOptions;
        super([]), this._maxWorkers = RR, this._createWorkerAsync = JR, this._options = GR
      }
      push(RR) {
        if (!this._executeOnIdleWorker(RR))
          if (this._workerInfos.length < this._maxWorkers) {
            const JR = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(JR), this._execute(JR, RR)
          } else this._pendingActions.push(RR)
      }
      _execute(RR, JR) {
        RR.timeoutId && (clearTimeout(RR.timeoutId), delete RR.timeoutId), super._execute(RR, ((GR, yR) => {
          JR(GR, (() => {
            yR(), RR.idle && (RR.timeoutId = setTimeout((() => {
              RR.workerPromise.then((RR => {
                RR.terminate()
              }));
              const JR = this._workerInfos.indexOf(RR); - 1 !== JR && this._workerInfos.splice(JR, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    tR.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);