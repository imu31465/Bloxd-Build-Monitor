export const id = 291;
export const ids = [291];
export const modules = {
  40328: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      _KTXTextureLoader: () => sy
    });
    var Uy = Wy(37350);
    class hy {
      constructor(yb, bb) {
        if (this.data = yb, this.isInvalid = !1, !hy.IsValid(yb)) return this.isInvalid = !0, void Uy.b.Error("texture missing KTX identifier");
        const Wy = Uint32Array.BYTES_PER_ELEMENT,
          fy = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * Wy),
          Zy = 67305985 === fy.getUint32(0, !0);
        return this.glType = fy.getUint32(1 * Wy, Zy), this.glTypeSize = fy.getUint32(2 * Wy, Zy), this.glFormat = fy.getUint32(3 * Wy, Zy), this.glInternalFormat = fy.getUint32(4 * Wy, Zy), this.glBaseInternalFormat = fy.getUint32(5 * Wy, Zy), this.pixelWidth = fy.getUint32(6 * Wy, Zy), this.pixelHeight = fy.getUint32(7 * Wy, Zy), this.pixelDepth = fy.getUint32(8 * Wy, Zy), this.numberOfArrayElements = fy.getUint32(9 * Wy, Zy), this.numberOfFaces = fy.getUint32(10 * Wy, Zy), this.numberOfMipmapLevels = fy.getUint32(11 * Wy, Zy), this.bytesOfKeyValueData = fy.getUint32(12 * Wy, Zy), 0 !== this.glType ? (Uy.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Uy.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Uy.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== bb ? (Uy.b.Error("number of faces expected" + bb + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = hy.COMPRESSED_2D))
      }
      uploadLevels(yb, bb) {
        switch (this.loadType) {
          case hy.COMPRESSED_2D:
            this._upload2DCompressedLevels(yb, bb);
          case hy.TEX_2D:
          case hy.COMPRESSED_3D:
          case hy.TEX_3D:
        }
      }
      _upload2DCompressedLevels(yb, bb) {
        let Wy = hy.HEADER_LEN + this.bytesOfKeyValueData,
          Uy = this.pixelWidth,
          fy = this.pixelHeight;
        const Zy = bb ? this.numberOfMipmapLevels : 1;
        for (let hy = 0; hy < Zy; hy++) {
          const bb = new Int32Array(this.data.buffer, this.data.byteOffset + Wy, 1)[0];
          Wy += 4;
          for (let Zy = 0; Zy < this.numberOfFaces; Zy++) {
            const cb = new Uint8Array(this.data.buffer, this.data.byteOffset + Wy, bb);
            yb.xh()._uploadCompressedDataToTextureDirectly(yb, yb.format, Uy, fy, cb, Zy, hy), Wy += bb, Wy += 3 - (bb + 3) % 4
          }
          Uy = Math.max(1, .5 * Uy), fy = Math.max(1, .5 * fy)
        }
      }
      static IsValid(yb) {
        if (yb.byteLength >= 12) {
          const bb = new Uint8Array(yb.buffer, yb.byteOffset, 12);
          if (171 === bb[0] && 75 === bb[1] && 84 === bb[2] && 88 === bb[3] && 32 === bb[4] && 49 === bb[5] && 49 === bb[6] && 187 === bb[7] && 13 === bb[8] && 10 === bb[9] && 26 === bb[10] && 10 === bb[11]) return !0
        }
        return !1
      }
    }
    hy.HEADER_LEN = 64, hy.COMPRESSED_2D = 0, hy.COMPRESSED_3D = 1, hy.TEX_2D = 2, hy.TEX_3D = 3;
    var fy, Zy, cb, Py = Wy(40335),
      oy = Wy(38576);

    function By(yb, bb) {
      const Wy = bb?.jsDecoderModule || KTX2DECODER;
      yb && (yb.wasmBaseUrl && (Wy.Transcoder.WasmBaseUrl = yb.wasmBaseUrl), yb.wasmUASTCToASTC && (Wy.LiteTranscoder_UASTC_ASTC.WasmModuleURL = yb.wasmUASTCToASTC), yb.wasmUASTCToBC7 && (Wy.LiteTranscoder_UASTC_BC7.WasmModuleURL = yb.wasmUASTCToBC7), yb.wasmUASTCToRGBA_UNORM && (Wy.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = yb.wasmUASTCToRGBA_UNORM), yb.wasmUASTCToRGBA_SRGB && (Wy.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = yb.wasmUASTCToRGBA_SRGB), yb.wasmUASTCToR8_UNORM && (Wy.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = yb.wasmUASTCToR8_UNORM), yb.wasmUASTCToRG8_UNORM && (Wy.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = yb.wasmUASTCToRG8_UNORM), yb.jsMSCTranscoder && (Wy.MSCTranscoder.JSModuleURL = yb.jsMSCTranscoder), yb.wasmMSCTranscoder && (Wy.MSCTranscoder.WasmModuleURL = yb.wasmMSCTranscoder), yb.wasmZSTDDecoder && (Wy.ZSTDDecoder.WasmModuleURL = yb.wasmZSTDDecoder)), bb && (bb.wasmUASTCToASTC && (Wy.LiteTranscoder_UASTC_ASTC.WasmBinary = bb.wasmUASTCToASTC), bb.wasmUASTCToBC7 && (Wy.LiteTranscoder_UASTC_BC7.WasmBinary = bb.wasmUASTCToBC7), bb.wasmUASTCToRGBA_UNORM && (Wy.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = bb.wasmUASTCToRGBA_UNORM), bb.wasmUASTCToRGBA_SRGB && (Wy.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = bb.wasmUASTCToRGBA_SRGB), bb.wasmUASTCToR8_UNORM && (Wy.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = bb.wasmUASTCToR8_UNORM), bb.wasmUASTCToRG8_UNORM && (Wy.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = bb.wasmUASTCToRG8_UNORM), bb.jsMSCTranscoder && (Wy.MSCTranscoder.JSModule = bb.jsMSCTranscoder), bb.wasmMSCTranscoder && (Wy.MSCTranscoder.WasmBinary = bb.wasmMSCTranscoder), bb.wasmZSTDDecoder && (Wy.ZSTDDecoder.WasmBinary = bb.wasmZSTDDecoder))
    }

    function Ky(yb) {
      let bb;
      "undefined" === typeof yb && "undefined" !== typeof KTX2DECODER && (yb = KTX2DECODER), onmessage = Wy => {
        if (Wy.data) switch (Wy.data.action) {
          case "init": {
            const Uy = Wy.data.urls;
            Uy && (Uy.jsDecoderModule && "undefined" === typeof yb && (importScripts(Uy.jsDecoderModule), yb = KTX2DECODER), By(Uy)), Wy.data.wasmBinaries && By(void 0, {
              ...Wy.data.wasmBinaries,
              jsDecoderModule: yb
            }), bb = new yb.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            yb.KTX2Decoder.DefaultDecoderOptions = Wy.data.options;
            break;
          case "decode":
            bb.decode(Wy.data.data, Wy.data.caps, Wy.data.options).then((yb => {
              const bb = [];
              for (let Wy = 0; Wy < yb.mipmaps.length; ++Wy) {
                const Uy = yb.mipmaps[Wy];
                Uy && Uy.data && bb.push(Uy.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: yb
              }, bb)
            })).catch((yb => {
              postMessage({
                action: "decoded",
                success: !1,
                vc: yb
              })
            }))
        }
      }
    }! function(yb) {
      yb[yb.ETC1S = 0] = "ETC1S", yb[yb.UASTC4x4 = 1] = "UASTC4x4", yb[yb.RGBA32 = 2] = "RGBA32"
    }(fy || (fy = {})),
    function(yb) {
      yb[yb.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", yb[yb.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", yb[yb.BC7_RGBA = 1] = "BC7_RGBA", yb[yb.BC3_RGBA = 2] = "BC3_RGBA", yb[yb.BC1_RGB = 3] = "BC1_RGB", yb[yb.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", yb[yb.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", yb[yb.ETC2_RGBA = 6] = "ETC2_RGBA", yb[yb.ETC1_RGB = 7] = "ETC1_RGB", yb[yb.RGBA32 = 8] = "RGBA32", yb[yb.R8 = 9] = "R8", yb[yb.RG8 = 10] = "RG8"
    }(Zy || (Zy = {})),
    function(yb) {
      yb[yb.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", yb[yb.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", yb[yb.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", yb[yb.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", yb[yb.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", yb[yb.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", yb[yb.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", yb[yb.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", yb[yb.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", yb[yb.RGBA8Format = 32856] = "RGBA8Format", yb[yb.R8Format = 33321] = "R8Format", yb[yb.RG8Format = 33323] = "RG8Format"
    }(cb || (cb = {}));
    class ey {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(yb) {
        if (ey._WorkerPoolPromise || ey._DecoderModulePromise) return;
        const bb = {
          wasmBaseUrl: oy.k.ScriptBaseUrl,
          jsDecoderModule: oy.k.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: oy.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: oy.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: oy.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: oy.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: oy.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: oy.k.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: oy.k.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: oy.k.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: oy.k.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        yb && "function" === typeof Worker && "undefined" !== typeof URL ? ey._WorkerPoolPromise = new Promise((Wy => {
          const Uy = `${By}(${Ky})()`,
            hy = URL.createObjectURL(new Blob([Uy], {
              type: "application/javascript"
            }));
          Wy(new Py.c(yb, (async () => await async function(yb, bb, Wy) {
            return await new Promise(((Uy, hy) => {
              const fy = bb => {
                  yb.removeEventListener("error", fy), yb.removeEventListener("message", Zy), hy(bb)
                },
                Zy = bb => {
                  "init" === bb.data.action && (yb.removeEventListener("error", fy), yb.removeEventListener("message", Zy), Uy(yb))
                };
              yb.addEventListener("error", fy), yb.addEventListener("message", Zy), yb.postMessage({
                action: "init",
                urls: Wy,
                wasmBinaries: bb
              })
            }))
          }(new Worker(hy), void 0, bb))))
        })) : "undefined" === typeof ey._KTX2DecoderModule ? ey._DecoderModulePromise = oy.k.LoadBabylonScriptAsync(bb.jsDecoderModule).then((() => (ey._KTX2DecoderModule = KTX2DECODER, ey._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, ey._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, By(bb, ey._KTX2DecoderModule), new ey._KTX2DecoderModule.KTX2Decoder))) : (ey._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, ey._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, ey._DecoderModulePromise = Promise.resolve(new ey._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey.DefaultNumWorkers;
        this._engine = yb;
        const Wy = "object" === typeof bb && bb.workerPool || ey.WorkerPool;
        if (Wy) ey._WorkerPoolPromise = Promise.resolve(Wy);
        else {
          "object" === typeof bb ? ey._KTX2DecoderModule = bb?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (ey._KTX2DecoderModule = KTX2DECODER);
          const yb = "number" === typeof bb ? bb : bb.numWorkers ?? ey.DefaultNumWorkers;
          ey._Initialize(yb)
        }
      }
      async _uploadAsync(yb, bb, Wy) {
        const Uy = await this._decodeAsync(yb, Wy);
        this._createTexture(Uy, bb, Wy)
      }
      async _decodeAsync(yb, bb) {
        const Wy = this._engine.getCaps(),
          Uy = {
            astc: !!Wy.astc,
            bptc: !!Wy.bptc,
            s3tc: !!Wy.s3tc,
            pvrtc: !!Wy.pvrtc,
            etc2: !!Wy.etc2,
            etc1: !!Wy.etc1
          };
        if (ey._WorkerPoolPromise) {
          const Wy = await ey._WorkerPoolPromise;
          return await new Promise(((hy, fy) => {
            Wy.push(((Wy, Zy) => {
              const cb = yb => {
                  Wy.removeEventListener("error", cb), Wy.removeEventListener("message", Py), fy(yb), Zy()
                },
                Py = yb => {
                  "decoded" === yb.data.action && (Wy.removeEventListener("error", cb), Wy.removeEventListener("message", Py), yb.data.success ? hy(yb.data.decodedData) : fy({
                    message: yb.data.vc
                  }), Zy())
                };
              Wy.addEventListener("error", cb), Wy.addEventListener("message", Py), Wy.postMessage({
                action: "setDefaultDecoderOptions",
                options: ey.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const oy = new Uint8Array(yb.byteLength);
              oy.set(new Uint8Array(yb.buffer, yb.byteOffset, yb.byteLength)), Wy.postMessage({
                action: "decode",
                data: oy,
                caps: Uy,
                options: bb
              }, [oy.buffer])
            }))
          }))
        }
        if (ey._DecoderModulePromise) {
          const Uy = await ey._DecoderModulePromise;
          return ey.DefaultDecoderOptions.isDirty && (ey._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = ey.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((hy, fy) => {
            Uy.decode(yb, Wy, bb).then((yb => {
              hy(yb)
            })).catch((yb => {
              fy({
                message: yb
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(yb, bb, Wy) {
        if ((yb.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, bb), Wy && (Wy.transcodedFormat = yb.transcodedFormat, Wy.isInGammaSpace = yb.isInGammaSpace, Wy.hasAlpha = yb.hasAlpha, Wy.transcoderName = yb.transcoderName);
        let Uy = !0;
        switch (yb.transcodedFormat) {
          case 32856:
            bb.type = 0, bb.format = 5;
            break;
          case 33321:
            bb.type = 0, bb.format = 6;
            break;
          case 33323:
            bb.type = 0, bb.format = 7;
            break;
          default:
            bb.format = yb.transcodedFormat, Uy = !1
        }
        if (bb._gammaSpace = yb.isInGammaSpace, bb.generateMipMaps = yb.mipmaps.length > 1, bb.width = yb.mipmaps[0].width, bb.height = yb.mipmaps[0].height, yb.errors) throw new Error("KTX2 container - could not transcode the data. " + yb.errors);
        for (let hy = 0; hy < yb.mipmaps.length; ++hy) {
          const Wy = yb.mipmaps[hy];
          if (!Wy || !Wy.data) throw new Error("KTX2 container - could not transcode one of the image");
          Uy ? (bb.width = Wy.width, bb.height = Wy.height, this._engine._uploadDataToTextureDirectly(bb, Wy.data, 0, hy, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(bb, yb.transcodedFormat, Wy.width, Wy.height, Wy.data, 0, hy)
        }
        bb._extension = ".ktx2", bb.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(yb) {
        if (yb.byteLength >= 12) {
          const bb = new Uint8Array(yb.buffer, yb.byteOffset, 12);
          if (171 === bb[0] && 75 === bb[1] && 84 === bb[2] && 88 === bb[3] && 32 === bb[4] && 50 === bb[5] && 48 === bb[6] && 187 === bb[7] && 13 === bb[8] && 10 === bb[9] && 26 === bb[10] && 10 === bb[11]) return !0
        }
        return !1
      }
    }

    function qb(yb) {
      switch (yb) {
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
    ey.URLConfig = {
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
    }, ey.DefaultNumWorkers = ey.GetDefaultNumWorkers(), ey.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(yb) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== yb && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = yb, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(yb) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== yb && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = yb, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(yb) {
        this._forceRGBA !== yb && (this._forceRGBA = yb, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(yb) {
        this._forceR8 !== yb && (this._forceR8 = yb, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(yb) {
        this._forceRG8 !== yb && (this._forceRG8 = yb, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(yb) {
        this._bypassTranscoders !== yb && (this._bypassTranscoders = yb, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const yb = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (yb.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (yb.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (yb.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (yb.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (yb.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (yb.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [Zy.BC1_RGB, Zy.BC3_RGBA],
            yes: {
              transcodeFormat: Zy.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = yb, yb
      }
    };
    class sy {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(yb, bb, Wy, Uy) {
        if (Array.isArray(yb)) return;
        bb._invertVScale = !bb.invertY;
        const fy = bb.xh(),
          Zy = new hy(yb, 6),
          cb = qb(Zy.glInternalFormat);
        null !== cb ? (bb.format = cb, bb._useSRGBBuffer = fy._getUseSRGBBuffer(!0, !bb.generateMipMaps), bb._gammaSpace = !0) : bb.format = Zy.glInternalFormat;
        const Py = Zy.numberOfMipmapLevels > 1 && bb.generateMipMaps;
        fy._unpackFlipY(!0), Zy.uploadLevels(bb, bb.generateMipMaps), bb.width = Zy.pixelWidth, bb.height = Zy.pixelHeight, fy._setCubeMapTextureParams(bb, Py, Zy.numberOfMipmapLevels - 1), bb.isReady = !0, bb.onLoadedObservable.notifyObservers(bb), bb.onLoadedObservable.clear(), Uy && Uy()
      }
      loadData(yb, bb, Wy, fy) {
        if (hy.IsValid(yb)) {
          bb._invertVScale = !bb.invertY;
          const Uy = new hy(yb, 1),
            fy = qb(Uy.glInternalFormat);
          null !== fy ? (bb.format = fy, bb._useSRGBBuffer = bb.xh()._getUseSRGBBuffer(!0, !bb.generateMipMaps), bb._gammaSpace = !0) : bb.format = Uy.glInternalFormat, Wy(Uy.pixelWidth, Uy.pixelHeight, bb.generateMipMaps, !0, (() => {
            Uy.uploadLevels(bb, bb.generateMipMaps)
          }), Uy.isInvalid)
        } else if (ey.IsValid(yb)) {
          new ey(bb.xh())._uploadAsync(yb, bb, fy).then((() => {
            Wy(bb.width, bb.height, bb.generateMipMaps, !0, (() => {}), !1)
          }), (yb => {
            Uy.b.Warn(`Failed to load KTX2 texture data: ${yb.message}`), Wy(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Uy.b.Error("texture missing KTX identifier"), Wy(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  40335: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    class Uy {
      constructor(yb) {
        this._pendingActions = new Array, this._workerInfos = yb.map((yb => ({
          workerPromise: Promise.resolve(yb),
          idle: !0
        })))
      }
      dispose() {
        for (const yb of this._workerInfos) yb.workerPromise.then((yb => {
          yb.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(yb) {
        this._executeOnIdleWorker(yb) || this._pendingActions.push(yb)
      }
      _executeOnIdleWorker(yb) {
        for (const bb of this._workerInfos)
          if (bb.idle) return this._execute(bb, yb), !0;
        return !1
      }
      _execute(yb, bb) {
        yb.idle = !1, yb.workerPromise.then((Wy => {
          bb(Wy, (() => {
            const bb = this._pendingActions.shift();
            bb ? this._execute(yb, bb) : yb.idle = !0
          }))
        }))
      }
    }
    class hy extends Uy {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hy.DefaultOptions;
        super([]), this._maxWorkers = yb, this._createWorkerAsync = bb, this._options = Wy
      }
      push(yb) {
        if (!this._executeOnIdleWorker(yb))
          if (this._workerInfos.length < this._maxWorkers) {
            const bb = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(bb), this._execute(bb, yb)
          } else this._pendingActions.push(yb)
      }
      _execute(yb, bb) {
        yb.timeoutId && (clearTimeout(yb.timeoutId), delete yb.timeoutId), super._execute(yb, ((Wy, Uy) => {
          bb(Wy, (() => {
            Uy(), yb.idle && (yb.timeoutId = setTimeout((() => {
              yb.workerPromise.then((yb => {
                yb.terminate()
              }));
              const bb = this._workerInfos.indexOf(yb); - 1 !== bb && this._workerInfos.splice(bb, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    hy.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);