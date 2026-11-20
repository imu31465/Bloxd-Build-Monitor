export const id = 303;
export const ids = [303];
export const modules = {
  40957: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      _KTXTextureLoader: () => wz
    });
    var Fz = sz(38097);
    class Wz {
      constructor(zz, tz) {
        if (this.data = zz, this.isInvalid = !1, !Wz.IsValid(zz)) return this.isInvalid = !0, void Fz.e.Error("texture missing KTX identifier");
        const sz = Uint32Array.BYTES_PER_ELEMENT,
          Xz = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * sz),
          Oz = 67305985 === Xz.getUint32(0, !0);
        return this.glType = Xz.getUint32(1 * sz, Oz), this.glTypeSize = Xz.getUint32(2 * sz, Oz), this.glFormat = Xz.getUint32(3 * sz, Oz), this.glInternalFormat = Xz.getUint32(4 * sz, Oz), this.glBaseInternalFormat = Xz.getUint32(5 * sz, Oz), this.pixelWidth = Xz.getUint32(6 * sz, Oz), this.pixelHeight = Xz.getUint32(7 * sz, Oz), this.pixelDepth = Xz.getUint32(8 * sz, Oz), this.numberOfArrayElements = Xz.getUint32(9 * sz, Oz), this.numberOfFaces = Xz.getUint32(10 * sz, Oz), this.numberOfMipmapLevels = Xz.getUint32(11 * sz, Oz), this.bytesOfKeyValueData = Xz.getUint32(12 * sz, Oz), 0 !== this.glType ? (Fz.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Fz.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Fz.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== tz ? (Fz.e.Error("number of faces expected" + tz + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Wz.COMPRESSED_2D))
      }
      uploadLevels(zz, tz) {
        switch (this.loadType) {
          case Wz.COMPRESSED_2D:
            this._upload2DCompressedLevels(zz, tz);
          case Wz.TEX_2D:
          case Wz.COMPRESSED_3D:
          case Wz.TEX_3D:
        }
      }
      _upload2DCompressedLevels(zz, tz) {
        let sz = Wz.HEADER_LEN + this.bytesOfKeyValueData,
          Fz = this.pixelWidth,
          Xz = this.pixelHeight;
        const Oz = tz ? this.numberOfMipmapLevels : 1;
        for (let Wz = 0; Wz < Oz; Wz++) {
          const tz = new Int32Array(this.data.buffer, this.data.byteOffset + sz, 1)[0];
          sz += 4;
          for (let Oz = 0; Oz < this.numberOfFaces; Oz++) {
            const oz = new Uint8Array(this.data.buffer, this.data.byteOffset + sz, tz);
            zz.FD()._uploadCompressedDataToTextureDirectly(zz, zz.format, Fz, Xz, oz, Oz, Wz), sz += tz, sz += 3 - (tz + 3) % 4
          }
          Fz = Math.max(1, .5 * Fz), Xz = Math.max(1, .5 * Xz)
        }
      }
      static IsValid(zz) {
        if (zz.byteLength >= 12) {
          const tz = new Uint8Array(zz.buffer, zz.byteOffset, 12);
          if (171 === tz[0] && 75 === tz[1] && 84 === tz[2] && 88 === tz[3] && 32 === tz[4] && 49 === tz[5] && 49 === tz[6] && 187 === tz[7] && 13 === tz[8] && 10 === tz[9] && 26 === tz[10] && 10 === tz[11]) return !0
        }
        return !1
      }
    }
    Wz.HEADER_LEN = 64, Wz.COMPRESSED_2D = 0, Wz.COMPRESSED_3D = 1, Wz.TEX_2D = 2, Wz.TEX_3D = 3;
    var Xz, Oz, oz, vz = sz(40962),
      Uz = sz(39264);

    function Kz(zz, tz) {
      const sz = tz?.jsDecoderModule || KTX2DECODER;
      zz && (zz.wasmBaseUrl && (sz.Transcoder.WasmBaseUrl = zz.wasmBaseUrl), zz.wasmUASTCToASTC && (sz.LiteTranscoder_UASTC_ASTC.WasmModuleURL = zz.wasmUASTCToASTC), zz.wasmUASTCToBC7 && (sz.LiteTranscoder_UASTC_BC7.WasmModuleURL = zz.wasmUASTCToBC7), zz.wasmUASTCToRGBA_UNORM && (sz.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = zz.wasmUASTCToRGBA_UNORM), zz.wasmUASTCToRGBA_SRGB && (sz.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = zz.wasmUASTCToRGBA_SRGB), zz.wasmUASTCToR8_UNORM && (sz.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = zz.wasmUASTCToR8_UNORM), zz.wasmUASTCToRG8_UNORM && (sz.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = zz.wasmUASTCToRG8_UNORM), zz.jsMSCTranscoder && (sz.MSCTranscoder.JSModuleURL = zz.jsMSCTranscoder), zz.wasmMSCTranscoder && (sz.MSCTranscoder.WasmModuleURL = zz.wasmMSCTranscoder), zz.wasmZSTDDecoder && (sz.ZSTDDecoder.WasmModuleURL = zz.wasmZSTDDecoder)), tz && (tz.wasmUASTCToASTC && (sz.LiteTranscoder_UASTC_ASTC.WasmBinary = tz.wasmUASTCToASTC), tz.wasmUASTCToBC7 && (sz.LiteTranscoder_UASTC_BC7.WasmBinary = tz.wasmUASTCToBC7), tz.wasmUASTCToRGBA_UNORM && (sz.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = tz.wasmUASTCToRGBA_UNORM), tz.wasmUASTCToRGBA_SRGB && (sz.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = tz.wasmUASTCToRGBA_SRGB), tz.wasmUASTCToR8_UNORM && (sz.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = tz.wasmUASTCToR8_UNORM), tz.wasmUASTCToRG8_UNORM && (sz.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = tz.wasmUASTCToRG8_UNORM), tz.jsMSCTranscoder && (sz.MSCTranscoder.JSModule = tz.jsMSCTranscoder), tz.wasmMSCTranscoder && (sz.MSCTranscoder.WasmBinary = tz.wasmMSCTranscoder), tz.wasmZSTDDecoder && (sz.ZSTDDecoder.WasmBinary = tz.wasmZSTDDecoder))
    }

    function uz(zz) {
      let tz;
      "undefined" === typeof zz && "undefined" !== typeof KTX2DECODER && (zz = KTX2DECODER), onmessage = sz => {
        if (sz.data) switch (sz.data.action) {
          case "init": {
            const Fz = sz.data.urls;
            Fz && (Fz.jsDecoderModule && "undefined" === typeof zz && (importScripts(Fz.jsDecoderModule), zz = KTX2DECODER), Kz(Fz)), sz.data.wasmBinaries && Kz(void 0, {
              ...sz.data.wasmBinaries,
              jsDecoderModule: zz
            }), tz = new zz.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            zz.KTX2Decoder.DefaultDecoderOptions = sz.data.options;
            break;
          case "decode":
            tz.decode(sz.data.data, sz.data.caps, sz.data.options).then((zz => {
              const tz = [];
              for (let sz = 0; sz < zz.mipmaps.length; ++sz) {
                const Fz = zz.mipmaps[sz];
                Fz && Fz.data && tz.push(Fz.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: zz
              }, tz)
            })).catch((zz => {
              postMessage({
                action: "decoded",
                success: !1,
                RO: zz
              })
            }))
        }
      }
    }! function(zz) {
      zz[zz.ETC1S = 0] = "ETC1S", zz[zz.UASTC4x4 = 1] = "UASTC4x4", zz[zz.RGBA32 = 2] = "RGBA32"
    }(Xz || (Xz = {})),
    function(zz) {
      zz[zz.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", zz[zz.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", zz[zz.BC7_RGBA = 1] = "BC7_RGBA", zz[zz.BC3_RGBA = 2] = "BC3_RGBA", zz[zz.BC1_RGB = 3] = "BC1_RGB", zz[zz.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", zz[zz.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", zz[zz.ETC2_RGBA = 6] = "ETC2_RGBA", zz[zz.ETC1_RGB = 7] = "ETC1_RGB", zz[zz.RGBA32 = 8] = "RGBA32", zz[zz.R8 = 9] = "R8", zz[zz.RG8 = 10] = "RG8"
    }(Oz || (Oz = {})),
    function(zz) {
      zz[zz.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", zz[zz.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", zz[zz.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", zz[zz.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", zz[zz.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", zz[zz.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", zz[zz.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", zz[zz.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", zz[zz.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", zz[zz.RGBA8Format = 32856] = "RGBA8Format", zz[zz.R8Format = 33321] = "R8Format", zz[zz.RG8Format = 33323] = "RG8Format"
    }(oz || (oz = {}));
    class Nz {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(zz) {
        if (Nz._WorkerPoolPromise || Nz._DecoderModulePromise) return;
        const tz = {
          wasmBaseUrl: Uz.j.ScriptBaseUrl,
          jsDecoderModule: Uz.j.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Uz.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Uz.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Uz.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Uz.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Uz.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Uz.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Uz.j.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Uz.j.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Uz.j.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        zz && "function" === typeof Worker && "undefined" !== typeof URL ? Nz._WorkerPoolPromise = new Promise((sz => {
          const Fz = `${Kz}(${uz})()`,
            Wz = URL.createObjectURL(new Blob([Fz], {
              type: "application/javascript"
            }));
          sz(new vz.b(zz, (async () => await async function(zz, tz, sz) {
            return await new Promise(((Fz, Wz) => {
              const Xz = tz => {
                  zz.removeEventListener("error", Xz), zz.removeEventListener("message", Oz), Wz(tz)
                },
                Oz = tz => {
                  "init" === tz.data.action && (zz.removeEventListener("error", Xz), zz.removeEventListener("message", Oz), Fz(zz))
                };
              zz.addEventListener("error", Xz), zz.addEventListener("message", Oz), zz.postMessage({
                action: "init",
                urls: sz,
                wasmBinaries: tz
              })
            }))
          }(new Worker(Wz), void 0, tz))))
        })) : "undefined" === typeof Nz._KTX2DecoderModule ? Nz._DecoderModulePromise = Uz.j.LoadBabylonScriptAsync(tz.jsDecoderModule).then((() => (Nz._KTX2DecoderModule = KTX2DECODER, Nz._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Nz._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Kz(tz, Nz._KTX2DecoderModule), new Nz._KTX2DecoderModule.KTX2Decoder))) : (Nz._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Nz._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Nz._DecoderModulePromise = Promise.resolve(new Nz._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nz.DefaultNumWorkers;
        this._engine = zz;
        const sz = "object" === typeof tz && tz.workerPool || Nz.WorkerPool;
        if (sz) Nz._WorkerPoolPromise = Promise.resolve(sz);
        else {
          "object" === typeof tz ? Nz._KTX2DecoderModule = tz?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Nz._KTX2DecoderModule = KTX2DECODER);
          const zz = "number" === typeof tz ? tz : tz.numWorkers ?? Nz.DefaultNumWorkers;
          Nz._Initialize(zz)
        }
      }
      async _uploadAsync(zz, tz, sz) {
        const Fz = await this._decodeAsync(zz, sz);
        this._createTexture(Fz, tz, sz)
      }
      async _decodeAsync(zz, tz) {
        const sz = this._engine.getCaps(),
          Fz = {
            astc: !!sz.astc,
            bptc: !!sz.bptc,
            s3tc: !!sz.s3tc,
            pvrtc: !!sz.pvrtc,
            etc2: !!sz.etc2,
            etc1: !!sz.etc1
          };
        if (Nz._WorkerPoolPromise) {
          const sz = await Nz._WorkerPoolPromise;
          return await new Promise(((Wz, Xz) => {
            sz.push(((sz, Oz) => {
              const oz = zz => {
                  sz.removeEventListener("error", oz), sz.removeEventListener("message", vz), Xz(zz), Oz()
                },
                vz = zz => {
                  "decoded" === zz.data.action && (sz.removeEventListener("error", oz), sz.removeEventListener("message", vz), zz.data.success ? Wz(zz.data.decodedData) : Xz({
                    message: zz.data.RO
                  }), Oz())
                };
              sz.addEventListener("error", oz), sz.addEventListener("message", vz), sz.postMessage({
                action: "setDefaultDecoderOptions",
                options: Nz.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Uz = new Uint8Array(zz.byteLength);
              Uz.set(new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength)), sz.postMessage({
                action: "decode",
                data: Uz,
                caps: Fz,
                options: tz
              }, [Uz.buffer])
            }))
          }))
        }
        if (Nz._DecoderModulePromise) {
          const Fz = await Nz._DecoderModulePromise;
          return Nz.DefaultDecoderOptions.isDirty && (Nz._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Nz.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Wz, Xz) => {
            Fz.decode(zz, sz, tz).then((zz => {
              Wz(zz)
            })).catch((zz => {
              Xz({
                message: zz
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(zz, tz, sz) {
        if ((zz.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, tz), sz && (sz.transcodedFormat = zz.transcodedFormat, sz.isInGammaSpace = zz.isInGammaSpace, sz.hasAlpha = zz.hasAlpha, sz.transcoderName = zz.transcoderName);
        let Fz = !0;
        switch (zz.transcodedFormat) {
          case 32856:
            tz.type = 0, tz.format = 5;
            break;
          case 33321:
            tz.type = 0, tz.format = 6;
            break;
          case 33323:
            tz.type = 0, tz.format = 7;
            break;
          default:
            tz.format = zz.transcodedFormat, Fz = !1
        }
        if (tz._gammaSpace = zz.isInGammaSpace, tz.generateMipMaps = zz.mipmaps.length > 1, tz.width = zz.mipmaps[0].width, tz.height = zz.mipmaps[0].height, zz.errors) throw new Error("KTX2 container - could not transcode the data. " + zz.errors);
        for (let Wz = 0; Wz < zz.mipmaps.length; ++Wz) {
          const sz = zz.mipmaps[Wz];
          if (!sz || !sz.data) throw new Error("KTX2 container - could not transcode one of the image");
          Fz ? (tz.width = sz.width, tz.height = sz.height, this._engine._uploadDataToTextureDirectly(tz, sz.data, 0, Wz, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(tz, zz.transcodedFormat, sz.width, sz.height, sz.data, 0, Wz)
        }
        tz._extension = ".ktx2", tz.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(zz) {
        if (zz.byteLength >= 12) {
          const tz = new Uint8Array(zz.buffer, zz.byteOffset, 12);
          if (171 === tz[0] && 75 === tz[1] && 84 === tz[2] && 88 === tz[3] && 32 === tz[4] && 50 === tz[5] && 48 === tz[6] && 187 === tz[7] && 13 === tz[8] && 10 === tz[9] && 26 === tz[10] && 10 === tz[11]) return !0
        }
        return !1
      }
    }

    function bz(zz) {
      switch (zz) {
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
    Nz.URLConfig = {
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
    }, Nz.DefaultNumWorkers = Nz.GetDefaultNumWorkers(), Nz.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(zz) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== zz && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = zz, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(zz) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== zz && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = zz, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(zz) {
        this._forceRGBA !== zz && (this._forceRGBA = zz, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(zz) {
        this._forceR8 !== zz && (this._forceR8 = zz, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(zz) {
        this._forceRG8 !== zz && (this._forceRG8 = zz, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(zz) {
        this._bypassTranscoders !== zz && (this._bypassTranscoders = zz, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const zz = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (zz.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (zz.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (zz.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (zz.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (zz.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (zz.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [Oz.BC1_RGB, Oz.BC3_RGBA],
            yes: {
              transcodeFormat: Oz.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = zz, zz
      }
    };
    class wz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(zz, tz, sz, Fz) {
        if (Array.isArray(zz)) return;
        tz._invertVScale = !tz.invertY;
        const Xz = tz.FD(),
          Oz = new Wz(zz, 6),
          oz = bz(Oz.glInternalFormat);
        null !== oz ? (tz.format = oz, tz._useSRGBBuffer = Xz._getUseSRGBBuffer(!0, !tz.generateMipMaps), tz._gammaSpace = !0) : tz.format = Oz.glInternalFormat;
        const vz = Oz.numberOfMipmapLevels > 1 && tz.generateMipMaps;
        Xz._unpackFlipY(!0), Oz.uploadLevels(tz, tz.generateMipMaps), tz.width = Oz.pixelWidth, tz.height = Oz.pixelHeight, Xz._setCubeMapTextureParams(tz, vz, Oz.numberOfMipmapLevels - 1), tz.isReady = !0, tz.onLoadedObservable.notifyObservers(tz), tz.onLoadedObservable.clear(), Fz && Fz()
      }
      loadData(zz, tz, sz, Xz) {
        if (Wz.IsValid(zz)) {
          tz._invertVScale = !tz.invertY;
          const Fz = new Wz(zz, 1),
            Xz = bz(Fz.glInternalFormat);
          null !== Xz ? (tz.format = Xz, tz._useSRGBBuffer = tz.FD()._getUseSRGBBuffer(!0, !tz.generateMipMaps), tz._gammaSpace = !0) : tz.format = Fz.glInternalFormat, sz(Fz.pixelWidth, Fz.pixelHeight, tz.generateMipMaps, !0, (() => {
            Fz.uploadLevels(tz, tz.generateMipMaps)
          }), Fz.isInvalid)
        } else if (Nz.IsValid(zz)) {
          new Nz(tz.FD())._uploadAsync(zz, tz, Xz).then((() => {
            sz(tz.width, tz.height, tz.generateMipMaps, !0, (() => {}), !1)
          }), (zz => {
            Fz.e.Warn(`Failed to load KTX2 texture data: ${zz.message}`), sz(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Fz.e.Error("texture missing KTX identifier"), sz(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  40962: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz
    });
    class Fz {
      constructor(zz) {
        this._pendingActions = new Array, this._workerInfos = zz.map((zz => ({
          workerPromise: Promise.resolve(zz),
          idle: !0
        })))
      }
      dispose() {
        for (const zz of this._workerInfos) zz.workerPromise.then((zz => {
          zz.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(zz) {
        this._executeOnIdleWorker(zz) || this._pendingActions.push(zz)
      }
      _executeOnIdleWorker(zz) {
        for (const tz of this._workerInfos)
          if (tz.idle) return this._execute(tz, zz), !0;
        return !1
      }
      _execute(zz, tz) {
        zz.idle = !1, zz.workerPromise.then((sz => {
          tz(sz, (() => {
            const tz = this._pendingActions.shift();
            tz ? this._execute(zz, tz) : zz.idle = !0
          }))
        }))
      }
    }
    class Wz extends Fz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wz.DefaultOptions;
        super([]), this._maxWorkers = zz, this._createWorkerAsync = tz, this._options = sz
      }
      push(zz) {
        if (!this._executeOnIdleWorker(zz))
          if (this._workerInfos.length < this._maxWorkers) {
            const tz = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(tz), this._execute(tz, zz)
          } else this._pendingActions.push(zz)
      }
      _execute(zz, tz) {
        zz.timeoutId && (clearTimeout(zz.timeoutId), delete zz.timeoutId), super._execute(zz, ((sz, Fz) => {
          tz(sz, (() => {
            Fz(), zz.idle && (zz.timeoutId = setTimeout((() => {
              zz.workerPromise.then((zz => {
                zz.terminate()
              }));
              const tz = this._workerInfos.indexOf(zz); - 1 !== tz && this._workerInfos.splice(tz, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Wz.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);