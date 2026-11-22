export const id = 312;
export const ids = [312];
export const modules = {
  41428: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      _KTXTextureLoader: () => Uk
    });
    var Dk = ik(38272);
    class fk {
      constructor(kk, ek) {
        if (this.data = kk, this.isInvalid = !1, !fk.IsValid(kk)) return this.isInvalid = !0, void Dk.b.Error("texture missing KTX identifier");
        const ik = Uint32Array.BYTES_PER_ELEMENT,
          Sk = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ik),
          bk = 67305985 === Sk.getUint32(0, !0);
        return this.glType = Sk.getUint32(1 * ik, bk), this.glTypeSize = Sk.getUint32(2 * ik, bk), this.glFormat = Sk.getUint32(3 * ik, bk), this.glInternalFormat = Sk.getUint32(4 * ik, bk), this.glBaseInternalFormat = Sk.getUint32(5 * ik, bk), this.pixelWidth = Sk.getUint32(6 * ik, bk), this.pixelHeight = Sk.getUint32(7 * ik, bk), this.pixelDepth = Sk.getUint32(8 * ik, bk), this.numberOfArrayElements = Sk.getUint32(9 * ik, bk), this.numberOfFaces = Sk.getUint32(10 * ik, bk), this.numberOfMipmapLevels = Sk.getUint32(11 * ik, bk), this.bytesOfKeyValueData = Sk.getUint32(12 * ik, bk), 0 !== this.glType ? (Dk.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Dk.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Dk.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== ek ? (Dk.b.Error("number of faces expected" + ek + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = fk.COMPRESSED_2D))
      }
      uploadLevels(kk, ek) {
        switch (this.loadType) {
          case fk.COMPRESSED_2D:
            this._upload2DCompressedLevels(kk, ek);
          case fk.TEX_2D:
          case fk.COMPRESSED_3D:
          case fk.TEX_3D:
        }
      }
      _upload2DCompressedLevels(kk, ek) {
        let ik = fk.HEADER_LEN + this.bytesOfKeyValueData,
          Dk = this.pixelWidth,
          Sk = this.pixelHeight;
        const bk = ek ? this.numberOfMipmapLevels : 1;
        for (let fk = 0; fk < bk; fk++) {
          const ek = new Int32Array(this.data.buffer, this.data.byteOffset + ik, 1)[0];
          ik += 4;
          for (let bk = 0; bk < this.numberOfFaces; bk++) {
            const rk = new Uint8Array(this.data.buffer, this.data.byteOffset + ik, ek);
            kk.JU()._uploadCompressedDataToTextureDirectly(kk, kk.format, Dk, Sk, rk, bk, fk), ik += ek, ik += 3 - (ek + 3) % 4
          }
          Dk = Math.max(1, .5 * Dk), Sk = Math.max(1, .5 * Sk)
        }
      }
      static IsValid(kk) {
        if (kk.byteLength >= 12) {
          const ek = new Uint8Array(kk.buffer, kk.byteOffset, 12);
          if (171 === ek[0] && 75 === ek[1] && 84 === ek[2] && 88 === ek[3] && 32 === ek[4] && 49 === ek[5] && 49 === ek[6] && 187 === ek[7] && 13 === ek[8] && 10 === ek[9] && 26 === ek[10] && 10 === ek[11]) return !0
        }
        return !1
      }
    }
    fk.HEADER_LEN = 64, fk.COMPRESSED_2D = 0, fk.COMPRESSED_3D = 1, fk.TEX_2D = 2, fk.TEX_3D = 3;
    var Sk, bk, rk, Pk = ik(41430),
      mk = ik(39662);

    function Mk(kk, ek) {
      const ik = ek?.jsDecoderModule || KTX2DECODER;
      kk && (kk.wasmBaseUrl && (ik.Transcoder.WasmBaseUrl = kk.wasmBaseUrl), kk.wasmUASTCToASTC && (ik.LiteTranscoder_UASTC_ASTC.WasmModuleURL = kk.wasmUASTCToASTC), kk.wasmUASTCToBC7 && (ik.LiteTranscoder_UASTC_BC7.WasmModuleURL = kk.wasmUASTCToBC7), kk.wasmUASTCToRGBA_UNORM && (ik.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = kk.wasmUASTCToRGBA_UNORM), kk.wasmUASTCToRGBA_SRGB && (ik.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = kk.wasmUASTCToRGBA_SRGB), kk.wasmUASTCToR8_UNORM && (ik.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = kk.wasmUASTCToR8_UNORM), kk.wasmUASTCToRG8_UNORM && (ik.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = kk.wasmUASTCToRG8_UNORM), kk.jsMSCTranscoder && (ik.MSCTranscoder.JSModuleURL = kk.jsMSCTranscoder), kk.wasmMSCTranscoder && (ik.MSCTranscoder.WasmModuleURL = kk.wasmMSCTranscoder), kk.wasmZSTDDecoder && (ik.ZSTDDecoder.WasmModuleURL = kk.wasmZSTDDecoder)), ek && (ek.wasmUASTCToASTC && (ik.LiteTranscoder_UASTC_ASTC.WasmBinary = ek.wasmUASTCToASTC), ek.wasmUASTCToBC7 && (ik.LiteTranscoder_UASTC_BC7.WasmBinary = ek.wasmUASTCToBC7), ek.wasmUASTCToRGBA_UNORM && (ik.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = ek.wasmUASTCToRGBA_UNORM), ek.wasmUASTCToRGBA_SRGB && (ik.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = ek.wasmUASTCToRGBA_SRGB), ek.wasmUASTCToR8_UNORM && (ik.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = ek.wasmUASTCToR8_UNORM), ek.wasmUASTCToRG8_UNORM && (ik.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = ek.wasmUASTCToRG8_UNORM), ek.jsMSCTranscoder && (ik.MSCTranscoder.JSModule = ek.jsMSCTranscoder), ek.wasmMSCTranscoder && (ik.MSCTranscoder.WasmBinary = ek.wasmMSCTranscoder), ek.wasmZSTDDecoder && (ik.ZSTDDecoder.WasmBinary = ek.wasmZSTDDecoder))
    }

    function Kk(kk) {
      let ek;
      "undefined" === typeof kk && "undefined" !== typeof KTX2DECODER && (kk = KTX2DECODER), onmessage = ik => {
        if (ik.data) switch (ik.data.action) {
          case "init": {
            const Dk = ik.data.urls;
            Dk && (Dk.jsDecoderModule && "undefined" === typeof kk && (importScripts(Dk.jsDecoderModule), kk = KTX2DECODER), Mk(Dk)), ik.data.wasmBinaries && Mk(void 0, {
              ...ik.data.wasmBinaries,
              jsDecoderModule: kk
            }), ek = new kk.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            kk.KTX2Decoder.DefaultDecoderOptions = ik.data.options;
            break;
          case "decode":
            ek.decode(ik.data.data, ik.data.caps, ik.data.options).then((kk => {
              const ek = [];
              for (let ik = 0; ik < kk.mipmaps.length; ++ik) {
                const Dk = kk.mipmaps[ik];
                Dk && Dk.data && ek.push(Dk.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: kk
              }, ek)
            })).catch((kk => {
              postMessage({
                action: "decoded",
                success: !1,
                hM: kk
              })
            }))
        }
      }
    }! function(kk) {
      kk[kk.ETC1S = 0] = "ETC1S", kk[kk.UASTC4x4 = 1] = "UASTC4x4", kk[kk.RGBA32 = 2] = "RGBA32"
    }(Sk || (Sk = {})),
    function(kk) {
      kk[kk.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", kk[kk.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", kk[kk.BC7_RGBA = 1] = "BC7_RGBA", kk[kk.BC3_RGBA = 2] = "BC3_RGBA", kk[kk.BC1_RGB = 3] = "BC1_RGB", kk[kk.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", kk[kk.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", kk[kk.ETC2_RGBA = 6] = "ETC2_RGBA", kk[kk.ETC1_RGB = 7] = "ETC1_RGB", kk[kk.RGBA32 = 8] = "RGBA32", kk[kk.R8 = 9] = "R8", kk[kk.RG8 = 10] = "RG8"
    }(bk || (bk = {})),
    function(kk) {
      kk[kk.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", kk[kk.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", kk[kk.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", kk[kk.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", kk[kk.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", kk[kk.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", kk[kk.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", kk[kk.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", kk[kk.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", kk[kk.RGBA8Format = 32856] = "RGBA8Format", kk[kk.R8Format = 33321] = "R8Format", kk[kk.RG8Format = 33323] = "RG8Format"
    }(rk || (rk = {}));
    class xk {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(kk) {
        if (xk._WorkerPoolPromise || xk._DecoderModulePromise) return;
        const ek = {
          wasmBaseUrl: mk.i.ScriptBaseUrl,
          jsDecoderModule: mk.i.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: mk.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: mk.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: mk.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: mk.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: mk.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: mk.i.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: mk.i.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: mk.i.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: mk.i.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        kk && "function" === typeof Worker && "undefined" !== typeof URL ? xk._WorkerPoolPromise = new Promise((ik => {
          const Dk = `${Mk}(${Kk})()`,
            fk = URL.createObjectURL(new Blob([Dk], {
              type: "application/javascript"
            }));
          ik(new Pk.c(kk, (async () => await async function(kk, ek, ik) {
            return await new Promise(((Dk, fk) => {
              const Sk = ek => {
                  kk.removeEventListener("error", Sk), kk.removeEventListener("message", bk), fk(ek)
                },
                bk = ek => {
                  "init" === ek.data.action && (kk.removeEventListener("error", Sk), kk.removeEventListener("message", bk), Dk(kk))
                };
              kk.addEventListener("error", Sk), kk.addEventListener("message", bk), kk.postMessage({
                action: "init",
                urls: ik,
                wasmBinaries: ek
              })
            }))
          }(new Worker(fk), void 0, ek))))
        })) : "undefined" === typeof xk._KTX2DecoderModule ? xk._DecoderModulePromise = mk.i.LoadBabylonScriptAsync(ek.jsDecoderModule).then((() => (xk._KTX2DecoderModule = KTX2DECODER, xk._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, xk._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Mk(ek, xk._KTX2DecoderModule), new xk._KTX2DecoderModule.KTX2Decoder))) : (xk._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, xk._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, xk._DecoderModulePromise = Promise.resolve(new xk._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xk.DefaultNumWorkers;
        this._engine = kk;
        const ik = "object" === typeof ek && ek.workerPool || xk.WorkerPool;
        if (ik) xk._WorkerPoolPromise = Promise.resolve(ik);
        else {
          "object" === typeof ek ? xk._KTX2DecoderModule = ek?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (xk._KTX2DecoderModule = KTX2DECODER);
          const kk = "number" === typeof ek ? ek : ek.numWorkers ?? xk.DefaultNumWorkers;
          xk._Initialize(kk)
        }
      }
      async _uploadAsync(kk, ek, ik) {
        const Dk = await this._decodeAsync(kk, ik);
        this._createTexture(Dk, ek, ik)
      }
      async _decodeAsync(kk, ek) {
        const ik = this._engine.getCaps(),
          Dk = {
            astc: !!ik.astc,
            bptc: !!ik.bptc,
            s3tc: !!ik.s3tc,
            pvrtc: !!ik.pvrtc,
            etc2: !!ik.etc2,
            etc1: !!ik.etc1
          };
        if (xk._WorkerPoolPromise) {
          const ik = await xk._WorkerPoolPromise;
          return await new Promise(((fk, Sk) => {
            ik.push(((ik, bk) => {
              const rk = kk => {
                  ik.removeEventListener("error", rk), ik.removeEventListener("message", Pk), Sk(kk), bk()
                },
                Pk = kk => {
                  "decoded" === kk.data.action && (ik.removeEventListener("error", rk), ik.removeEventListener("message", Pk), kk.data.success ? fk(kk.data.decodedData) : Sk({
                    message: kk.data.hM
                  }), bk())
                };
              ik.addEventListener("error", rk), ik.addEventListener("message", Pk), ik.postMessage({
                action: "setDefaultDecoderOptions",
                options: xk.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const mk = new Uint8Array(kk.byteLength);
              mk.set(new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength)), ik.postMessage({
                action: "decode",
                data: mk,
                caps: Dk,
                options: ek
              }, [mk.buffer])
            }))
          }))
        }
        if (xk._DecoderModulePromise) {
          const Dk = await xk._DecoderModulePromise;
          return xk.DefaultDecoderOptions.isDirty && (xk._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = xk.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((fk, Sk) => {
            Dk.decode(kk, ik, ek).then((kk => {
              fk(kk)
            })).catch((kk => {
              Sk({
                message: kk
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(kk, ek, ik) {
        if ((kk.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, ek), ik && (ik.transcodedFormat = kk.transcodedFormat, ik.isInGammaSpace = kk.isInGammaSpace, ik.hasAlpha = kk.hasAlpha, ik.transcoderName = kk.transcoderName);
        let Dk = !0;
        switch (kk.transcodedFormat) {
          case 32856:
            ek.type = 0, ek.format = 5;
            break;
          case 33321:
            ek.type = 0, ek.format = 6;
            break;
          case 33323:
            ek.type = 0, ek.format = 7;
            break;
          default:
            ek.format = kk.transcodedFormat, Dk = !1
        }
        if (ek._gammaSpace = kk.isInGammaSpace, ek.generateMipMaps = kk.mipmaps.length > 1, ek.width = kk.mipmaps[0].width, ek.height = kk.mipmaps[0].height, kk.errors) throw new Error("KTX2 container - could not transcode the data. " + kk.errors);
        for (let fk = 0; fk < kk.mipmaps.length; ++fk) {
          const ik = kk.mipmaps[fk];
          if (!ik || !ik.data) throw new Error("KTX2 container - could not transcode one of the image");
          Dk ? (ek.width = ik.width, ek.height = ik.height, this._engine._uploadDataToTextureDirectly(ek, ik.data, 0, fk, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(ek, kk.transcodedFormat, ik.width, ik.height, ik.data, 0, fk)
        }
        ek._extension = ".ktx2", ek.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(kk) {
        if (kk.byteLength >= 12) {
          const ek = new Uint8Array(kk.buffer, kk.byteOffset, 12);
          if (171 === ek[0] && 75 === ek[1] && 84 === ek[2] && 88 === ek[3] && 32 === ek[4] && 50 === ek[5] && 48 === ek[6] && 187 === ek[7] && 13 === ek[8] && 10 === ek[9] && 26 === ek[10] && 10 === ek[11]) return !0
        }
        return !1
      }
    }

    function nk(kk) {
      switch (kk) {
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
    xk.URLConfig = {
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
    }, xk.DefaultNumWorkers = xk.GetDefaultNumWorkers(), xk.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(kk) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== kk && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = kk, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(kk) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== kk && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = kk, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(kk) {
        this._forceRGBA !== kk && (this._forceRGBA = kk, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(kk) {
        this._forceR8 !== kk && (this._forceR8 = kk, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(kk) {
        this._forceRG8 !== kk && (this._forceRG8 = kk, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(kk) {
        this._bypassTranscoders !== kk && (this._bypassTranscoders = kk, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const kk = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (kk.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (kk.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (kk.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (kk.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (kk.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (kk.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [bk.BC1_RGB, bk.BC3_RGBA],
            yes: {
              transcodeFormat: bk.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = kk, kk
      }
    };
    class Uk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(kk, ek, ik, Dk) {
        if (Array.isArray(kk)) return;
        ek._invertVScale = !ek.invertY;
        const Sk = ek.JU(),
          bk = new fk(kk, 6),
          rk = nk(bk.glInternalFormat);
        null !== rk ? (ek.format = rk, ek._useSRGBBuffer = Sk._getUseSRGBBuffer(!0, !ek.generateMipMaps), ek._gammaSpace = !0) : ek.format = bk.glInternalFormat;
        const Pk = bk.numberOfMipmapLevels > 1 && ek.generateMipMaps;
        Sk._unpackFlipY(!0), bk.uploadLevels(ek, ek.generateMipMaps), ek.width = bk.pixelWidth, ek.height = bk.pixelHeight, Sk._setCubeMapTextureParams(ek, Pk, bk.numberOfMipmapLevels - 1), ek.isReady = !0, ek.onLoadedObservable.notifyObservers(ek), ek.onLoadedObservable.clear(), Dk && Dk()
      }
      loadData(kk, ek, ik, Sk) {
        if (fk.IsValid(kk)) {
          ek._invertVScale = !ek.invertY;
          const Dk = new fk(kk, 1),
            Sk = nk(Dk.glInternalFormat);
          null !== Sk ? (ek.format = Sk, ek._useSRGBBuffer = ek.JU()._getUseSRGBBuffer(!0, !ek.generateMipMaps), ek._gammaSpace = !0) : ek.format = Dk.glInternalFormat, ik(Dk.pixelWidth, Dk.pixelHeight, ek.generateMipMaps, !0, (() => {
            Dk.uploadLevels(ek, ek.generateMipMaps)
          }), Dk.isInvalid)
        } else if (xk.IsValid(kk)) {
          new xk(ek.JU())._uploadAsync(kk, ek, Sk).then((() => {
            ik(ek.width, ek.height, ek.generateMipMaps, !0, (() => {}), !1)
          }), (kk => {
            Dk.b.Warn(`Failed to load KTX2 texture data: ${kk.message}`), ik(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Dk.b.Error("texture missing KTX identifier"), ik(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41430: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    class Dk {
      constructor(kk) {
        this._pendingActions = new Array, this._workerInfos = kk.map((kk => ({
          workerPromise: Promise.resolve(kk),
          idle: !0
        })))
      }
      dispose() {
        for (const kk of this._workerInfos) kk.workerPromise.then((kk => {
          kk.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(kk) {
        this._executeOnIdleWorker(kk) || this._pendingActions.push(kk)
      }
      _executeOnIdleWorker(kk) {
        for (const ek of this._workerInfos)
          if (ek.idle) return this._execute(ek, kk), !0;
        return !1
      }
      _execute(kk, ek) {
        kk.idle = !1, kk.workerPromise.then((ik => {
          ek(ik, (() => {
            const ek = this._pendingActions.shift();
            ek ? this._execute(kk, ek) : kk.idle = !0
          }))
        }))
      }
    }
    class fk extends Dk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fk.DefaultOptions;
        super([]), this._maxWorkers = kk, this._createWorkerAsync = ek, this._options = ik
      }
      push(kk) {
        if (!this._executeOnIdleWorker(kk))
          if (this._workerInfos.length < this._maxWorkers) {
            const ek = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(ek), this._execute(ek, kk)
          } else this._pendingActions.push(kk)
      }
      _execute(kk, ek) {
        kk.timeoutId && (clearTimeout(kk.timeoutId), delete kk.timeoutId), super._execute(kk, ((ik, Dk) => {
          ek(ik, (() => {
            Dk(), kk.idle && (kk.timeoutId = setTimeout((() => {
              kk.workerPromise.then((kk => {
                kk.terminate()
              }));
              const ek = this._workerInfos.indexOf(kk); - 1 !== ek && this._workerInfos.splice(ek, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    fk.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);