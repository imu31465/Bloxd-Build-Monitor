export const id = 632;
export const ids = [632];
export const modules = {
  54376: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      _KTXTextureLoader: () => Ur
    });
    var Zr = Qr(40246);
    class Wr {
      constructor(rr, Sr) {
        if (this.data = rr, this.isInvalid = !1, !Wr.IsValid(rr)) return this.isInvalid = !0, void Zr.c.Error("texture missing KTX identifier");
        const Qr = Uint32Array.BYTES_PER_ELEMENT,
          ar = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * Qr),
          jr = 67305985 === ar.getUint32(0, !0);
        return this.glType = ar.getUint32(1 * Qr, jr), this.glTypeSize = ar.getUint32(2 * Qr, jr), this.glFormat = ar.getUint32(3 * Qr, jr), this.glInternalFormat = ar.getUint32(4 * Qr, jr), this.glBaseInternalFormat = ar.getUint32(5 * Qr, jr), this.pixelWidth = ar.getUint32(6 * Qr, jr), this.pixelHeight = ar.getUint32(7 * Qr, jr), this.pixelDepth = ar.getUint32(8 * Qr, jr), this.numberOfArrayElements = ar.getUint32(9 * Qr, jr), this.numberOfFaces = ar.getUint32(10 * Qr, jr), this.numberOfMipmapLevels = ar.getUint32(11 * Qr, jr), this.bytesOfKeyValueData = ar.getUint32(12 * Qr, jr), 0 !== this.glType ? (Zr.c.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Zr.c.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Zr.c.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== Sr ? (Zr.c.Error("number of faces expected" + Sr + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Wr.COMPRESSED_2D))
      }
      uploadLevels(rr, Sr) {
        switch (this.loadType) {
          case Wr.COMPRESSED_2D:
            this._upload2DCompressedLevels(rr, Sr);
          case Wr.TEX_2D:
          case Wr.COMPRESSED_3D:
          case Wr.TEX_3D:
        }
      }
      _upload2DCompressedLevels(rr, Sr) {
        let Qr = Wr.HEADER_LEN + this.bytesOfKeyValueData,
          Zr = this.pixelWidth,
          ar = this.pixelHeight;
        const jr = Sr ? this.numberOfMipmapLevels : 1;
        for (let Wr = 0; Wr < jr; Wr++) {
          const Sr = new Int32Array(this.data.buffer, this.data.byteOffset + Qr, 1)[0];
          Qr += 4;
          for (let jr = 0; jr < this.numberOfFaces; jr++) {
            const Ir = new Uint8Array(this.data.buffer, this.data.byteOffset + Qr, Sr);
            rr.MU()._uploadCompressedDataToTextureDirectly(rr, rr.format, Zr, ar, Ir, jr, Wr), Qr += Sr, Qr += 3 - (Sr + 3) % 4
          }
          Zr = Math.max(1, .5 * Zr), ar = Math.max(1, .5 * ar)
        }
      }
      static IsValid(rr) {
        if (rr.byteLength >= 12) {
          const Sr = new Uint8Array(rr.buffer, rr.byteOffset, 12);
          if (171 === Sr[0] && 75 === Sr[1] && 84 === Sr[2] && 88 === Sr[3] && 32 === Sr[4] && 49 === Sr[5] && 49 === Sr[6] && 187 === Sr[7] && 13 === Sr[8] && 10 === Sr[9] && 26 === Sr[10] && 10 === Sr[11]) return !0
        }
        return !1
      }
    }
    Wr.HEADER_LEN = 64, Wr.COMPRESSED_2D = 0, Wr.COMPRESSED_3D = 1, Wr.TEX_2D = 2, Wr.TEX_3D = 3;
    var ar, jr, Ir, fr = Qr(54381),
      Er = Qr(41950);

    function pr(rr, Sr) {
      const Qr = Sr?.jsDecoderModule || KTX2DECODER;
      rr && (rr.wasmBaseUrl && (Qr.Transcoder.WasmBaseUrl = rr.wasmBaseUrl), rr.wasmUASTCToASTC && (Qr.LiteTranscoder_UASTC_ASTC.WasmModuleURL = rr.wasmUASTCToASTC), rr.wasmUASTCToBC7 && (Qr.LiteTranscoder_UASTC_BC7.WasmModuleURL = rr.wasmUASTCToBC7), rr.wasmUASTCToRGBA_UNORM && (Qr.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = rr.wasmUASTCToRGBA_UNORM), rr.wasmUASTCToRGBA_SRGB && (Qr.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = rr.wasmUASTCToRGBA_SRGB), rr.wasmUASTCToR8_UNORM && (Qr.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = rr.wasmUASTCToR8_UNORM), rr.wasmUASTCToRG8_UNORM && (Qr.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = rr.wasmUASTCToRG8_UNORM), rr.jsMSCTranscoder && (Qr.MSCTranscoder.JSModuleURL = rr.jsMSCTranscoder), rr.wasmMSCTranscoder && (Qr.MSCTranscoder.WasmModuleURL = rr.wasmMSCTranscoder), rr.wasmZSTDDecoder && (Qr.ZSTDDecoder.WasmModuleURL = rr.wasmZSTDDecoder)), Sr && (Sr.wasmUASTCToASTC && (Qr.LiteTranscoder_UASTC_ASTC.WasmBinary = Sr.wasmUASTCToASTC), Sr.wasmUASTCToBC7 && (Qr.LiteTranscoder_UASTC_BC7.WasmBinary = Sr.wasmUASTCToBC7), Sr.wasmUASTCToRGBA_UNORM && (Qr.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = Sr.wasmUASTCToRGBA_UNORM), Sr.wasmUASTCToRGBA_SRGB && (Qr.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = Sr.wasmUASTCToRGBA_SRGB), Sr.wasmUASTCToR8_UNORM && (Qr.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = Sr.wasmUASTCToR8_UNORM), Sr.wasmUASTCToRG8_UNORM && (Qr.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = Sr.wasmUASTCToRG8_UNORM), Sr.jsMSCTranscoder && (Qr.MSCTranscoder.JSModule = Sr.jsMSCTranscoder), Sr.wasmMSCTranscoder && (Qr.MSCTranscoder.WasmBinary = Sr.wasmMSCTranscoder), Sr.wasmZSTDDecoder && (Qr.ZSTDDecoder.WasmBinary = Sr.wasmZSTDDecoder))
    }

    function xr(rr) {
      let Sr;
      "undefined" === typeof rr && "undefined" !== typeof KTX2DECODER && (rr = KTX2DECODER), onmessage = Qr => {
        if (Qr.data) switch (Qr.data.action) {
          case "init": {
            const Zr = Qr.data.urls;
            Zr && (Zr.jsDecoderModule && "undefined" === typeof rr && (importScripts(Zr.jsDecoderModule), rr = KTX2DECODER), pr(Zr)), Qr.data.wasmBinaries && pr(void 0, {
              ...Qr.data.wasmBinaries,
              jsDecoderModule: rr
            }), Sr = new rr.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            rr.KTX2Decoder.DefaultDecoderOptions = Qr.data.options;
            break;
          case "decode":
            Sr.decode(Qr.data.data, Qr.data.caps, Qr.data.options).then((rr => {
              const Sr = [];
              for (let Qr = 0; Qr < rr.mipmaps.length; ++Qr) {
                const Zr = rr.mipmaps[Qr];
                Zr && Zr.data && Sr.push(Zr.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: rr
              }, Sr)
            })).catch((rr => {
              postMessage({
                action: "decoded",
                success: !1,
                xj: rr
              })
            }))
        }
      }
    }! function(rr) {
      rr[rr.ETC1S = 0] = "ETC1S", rr[rr.UASTC4x4 = 1] = "UASTC4x4", rr[rr.RGBA32 = 2] = "RGBA32"
    }(ar || (ar = {})),
    function(rr) {
      rr[rr.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", rr[rr.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", rr[rr.BC7_RGBA = 1] = "BC7_RGBA", rr[rr.BC3_RGBA = 2] = "BC3_RGBA", rr[rr.BC1_RGB = 3] = "BC1_RGB", rr[rr.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", rr[rr.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", rr[rr.ETC2_RGBA = 6] = "ETC2_RGBA", rr[rr.ETC1_RGB = 7] = "ETC1_RGB", rr[rr.RGBA32 = 8] = "RGBA32", rr[rr.R8 = 9] = "R8", rr[rr.RG8 = 10] = "RG8"
    }(jr || (jr = {})),
    function(rr) {
      rr[rr.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", rr[rr.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", rr[rr.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", rr[rr.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", rr[rr.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", rr[rr.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", rr[rr.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", rr[rr.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", rr[rr.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", rr[rr.RGBA8Format = 32856] = "RGBA8Format", rr[rr.R8Format = 33321] = "R8Format", rr[rr.RG8Format = 33323] = "RG8Format"
    }(Ir || (Ir = {}));
    class mr {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(rr) {
        if (mr._WorkerPoolPromise || mr._DecoderModulePromise) return;
        const Sr = {
          wasmBaseUrl: Er.h.ScriptBaseUrl,
          jsDecoderModule: Er.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Er.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Er.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Er.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Er.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Er.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Er.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Er.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Er.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Er.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        rr && "function" === typeof Worker && "undefined" !== typeof URL ? mr._WorkerPoolPromise = new Promise((Qr => {
          const Zr = `${pr}(${xr})()`,
            Wr = URL.createObjectURL(new Blob([Zr], {
              type: "application/javascript"
            }));
          Qr(new fr.c(rr, (async () => await async function(rr, Sr, Qr) {
            return await new Promise(((Zr, Wr) => {
              const ar = Sr => {
                  rr.removeEventListener("error", ar), rr.removeEventListener("message", jr), Wr(Sr)
                },
                jr = Sr => {
                  "init" === Sr.data.action && (rr.removeEventListener("error", ar), rr.removeEventListener("message", jr), Zr(rr))
                };
              rr.addEventListener("error", ar), rr.addEventListener("message", jr), rr.postMessage({
                action: "init",
                urls: Qr,
                wasmBinaries: Sr
              })
            }))
          }(new Worker(Wr), void 0, Sr))))
        })) : "undefined" === typeof mr._KTX2DecoderModule ? mr._DecoderModulePromise = Er.h.LoadBabylonScriptAsync(Sr.jsDecoderModule).then((() => (mr._KTX2DecoderModule = KTX2DECODER, mr._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, mr._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, pr(Sr, mr._KTX2DecoderModule), new mr._KTX2DecoderModule.KTX2Decoder))) : (mr._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, mr._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, mr._DecoderModulePromise = Promise.resolve(new mr._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mr.DefaultNumWorkers;
        this._engine = rr;
        const Qr = "object" === typeof Sr && Sr.workerPool || mr.WorkerPool;
        if (Qr) mr._WorkerPoolPromise = Promise.resolve(Qr);
        else {
          "object" === typeof Sr ? mr._KTX2DecoderModule = Sr?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (mr._KTX2DecoderModule = KTX2DECODER);
          const rr = "number" === typeof Sr ? Sr : Sr.numWorkers ?? mr.DefaultNumWorkers;
          mr._Initialize(rr)
        }
      }
      async _uploadAsync(rr, Sr, Qr) {
        const Zr = await this._decodeAsync(rr, Qr);
        this._createTexture(Zr, Sr, Qr)
      }
      async _decodeAsync(rr, Sr) {
        const Qr = this._engine.getCaps(),
          Zr = {
            astc: !!Qr.astc,
            bptc: !!Qr.bptc,
            s3tc: !!Qr.s3tc,
            pvrtc: !!Qr.pvrtc,
            etc2: !!Qr.etc2,
            etc1: !!Qr.etc1
          };
        if (mr._WorkerPoolPromise) {
          const Qr = await mr._WorkerPoolPromise;
          return await new Promise(((Wr, ar) => {
            Qr.push(((Qr, jr) => {
              const Ir = rr => {
                  Qr.removeEventListener("error", Ir), Qr.removeEventListener("message", fr), ar(rr), jr()
                },
                fr = rr => {
                  "decoded" === rr.data.action && (Qr.removeEventListener("error", Ir), Qr.removeEventListener("message", fr), rr.data.success ? Wr(rr.data.decodedData) : ar({
                    message: rr.data.xj
                  }), jr())
                };
              Qr.addEventListener("error", Ir), Qr.addEventListener("message", fr), Qr.postMessage({
                action: "setDefaultDecoderOptions",
                options: mr.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Er = new Uint8Array(rr.byteLength);
              Er.set(new Uint8Array(rr.buffer, rr.byteOffset, rr.byteLength)), Qr.postMessage({
                action: "decode",
                data: Er,
                caps: Zr,
                options: Sr
              }, [Er.buffer])
            }))
          }))
        }
        if (mr._DecoderModulePromise) {
          const Zr = await mr._DecoderModulePromise;
          return mr.DefaultDecoderOptions.isDirty && (mr._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = mr.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Wr, ar) => {
            Zr.decode(rr, Qr, Sr).then((rr => {
              Wr(rr)
            })).catch((rr => {
              ar({
                message: rr
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(rr, Sr, Qr) {
        if ((rr.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, Sr), Qr && (Qr.transcodedFormat = rr.transcodedFormat, Qr.isInGammaSpace = rr.isInGammaSpace, Qr.hasAlpha = rr.hasAlpha, Qr.transcoderName = rr.transcoderName);
        let Zr = !0;
        switch (rr.transcodedFormat) {
          case 32856:
            Sr.type = 0, Sr.format = 5;
            break;
          case 33321:
            Sr.type = 0, Sr.format = 6;
            break;
          case 33323:
            Sr.type = 0, Sr.format = 7;
            break;
          default:
            Sr.format = rr.transcodedFormat, Zr = !1
        }
        if (Sr._gammaSpace = rr.isInGammaSpace, Sr.generateMipMaps = rr.mipmaps.length > 1, Sr.width = rr.mipmaps[0].width, Sr.height = rr.mipmaps[0].height, rr.errors) throw new Error("KTX2 container - could not transcode the data. " + rr.errors);
        for (let Wr = 0; Wr < rr.mipmaps.length; ++Wr) {
          const Qr = rr.mipmaps[Wr];
          if (!Qr || !Qr.data) throw new Error("KTX2 container - could not transcode one of the image");
          Zr ? (Sr.width = Qr.width, Sr.height = Qr.height, this._engine._uploadDataToTextureDirectly(Sr, Qr.data, 0, Wr, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(Sr, rr.transcodedFormat, Qr.width, Qr.height, Qr.data, 0, Wr)
        }
        Sr._extension = ".ktx2", Sr.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(rr) {
        if (rr.byteLength >= 12) {
          const Sr = new Uint8Array(rr.buffer, rr.byteOffset, 12);
          if (171 === Sr[0] && 75 === Sr[1] && 84 === Sr[2] && 88 === Sr[3] && 32 === Sr[4] && 50 === Sr[5] && 48 === Sr[6] && 187 === Sr[7] && 13 === Sr[8] && 10 === Sr[9] && 26 === Sr[10] && 10 === Sr[11]) return !0
        }
        return !1
      }
    }

    function Nr(rr) {
      switch (rr) {
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
    mr.URLConfig = {
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
    }, mr.DefaultNumWorkers = mr.GetDefaultNumWorkers(), mr.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(rr) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== rr && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = rr, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(rr) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== rr && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = rr, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(rr) {
        this._forceRGBA !== rr && (this._forceRGBA = rr, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(rr) {
        this._forceR8 !== rr && (this._forceR8 = rr, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(rr) {
        this._forceRG8 !== rr && (this._forceRG8 = rr, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(rr) {
        this._bypassTranscoders !== rr && (this._bypassTranscoders = rr, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const rr = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (rr.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (rr.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (rr.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (rr.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (rr.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (rr.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [jr.BC1_RGB, jr.BC3_RGBA],
            yes: {
              transcodeFormat: jr.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = rr, rr
      }
    };
    class Ur {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(rr, Sr, Qr, Zr) {
        if (Array.isArray(rr)) return;
        Sr._invertVScale = !Sr.invertY;
        const ar = Sr.MU(),
          jr = new Wr(rr, 6),
          Ir = Nr(jr.glInternalFormat);
        null !== Ir ? (Sr.format = Ir, Sr._useSRGBBuffer = ar._getUseSRGBBuffer(!0, !Sr.generateMipMaps), Sr._gammaSpace = !0) : Sr.format = jr.glInternalFormat;
        const fr = jr.numberOfMipmapLevels > 1 && Sr.generateMipMaps;
        ar._unpackFlipY(!0), jr.uploadLevels(Sr, Sr.generateMipMaps), Sr.width = jr.pixelWidth, Sr.height = jr.pixelHeight, ar._setCubeMapTextureParams(Sr, fr, jr.numberOfMipmapLevels - 1), Sr.isReady = !0, Sr.onLoadedObservable.notifyObservers(Sr), Sr.onLoadedObservable.clear(), Zr && Zr()
      }
      loadData(rr, Sr, Qr, ar) {
        if (Wr.IsValid(rr)) {
          Sr._invertVScale = !Sr.invertY;
          const Zr = new Wr(rr, 1),
            ar = Nr(Zr.glInternalFormat);
          null !== ar ? (Sr.format = ar, Sr._useSRGBBuffer = Sr.MU()._getUseSRGBBuffer(!0, !Sr.generateMipMaps), Sr._gammaSpace = !0) : Sr.format = Zr.glInternalFormat, Qr(Zr.pixelWidth, Zr.pixelHeight, Sr.generateMipMaps, !0, (() => {
            Zr.uploadLevels(Sr, Sr.generateMipMaps)
          }), Zr.isInvalid)
        } else if (mr.IsValid(rr)) {
          new mr(Sr.MU())._uploadAsync(rr, Sr, ar).then((() => {
            Qr(Sr.width, Sr.height, Sr.generateMipMaps, !0, (() => {}), !1)
          }), (rr => {
            Zr.c.Warn(`Failed to load KTX2 texture data: ${rr.message}`), Qr(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Zr.c.Error("texture missing KTX identifier"), Qr(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  54381: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr
    });
    class Zr {
      constructor(rr) {
        this._pendingActions = new Array, this._workerInfos = rr.map((rr => ({
          workerPromise: Promise.resolve(rr),
          idle: !0
        })))
      }
      dispose() {
        for (const rr of this._workerInfos) rr.workerPromise.then((rr => {
          rr.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(rr) {
        this._executeOnIdleWorker(rr) || this._pendingActions.push(rr)
      }
      _executeOnIdleWorker(rr) {
        for (const Sr of this._workerInfos)
          if (Sr.idle) return this._execute(Sr, rr), !0;
        return !1
      }
      _execute(rr, Sr) {
        rr.idle = !1, rr.workerPromise.then((Qr => {
          Sr(Qr, (() => {
            const Sr = this._pendingActions.shift();
            Sr ? this._execute(rr, Sr) : rr.idle = !0
          }))
        }))
      }
    }
    class Wr extends Zr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr.DefaultOptions;
        super([]), this._maxWorkers = rr, this._createWorkerAsync = Sr, this._options = Qr
      }
      push(rr) {
        if (!this._executeOnIdleWorker(rr))
          if (this._workerInfos.length < this._maxWorkers) {
            const Sr = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Sr), this._execute(Sr, rr)
          } else this._pendingActions.push(rr)
      }
      _execute(rr, Sr) {
        rr.timeoutId && (clearTimeout(rr.timeoutId), delete rr.timeoutId), super._execute(rr, ((Qr, Zr) => {
          Sr(Qr, (() => {
            Zr(), rr.idle && (rr.timeoutId = setTimeout((() => {
              rr.workerPromise.then((rr => {
                rr.terminate()
              }));
              const Sr = this._workerInfos.indexOf(rr); - 1 !== Sr && this._workerInfos.splice(Sr, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Wr.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);