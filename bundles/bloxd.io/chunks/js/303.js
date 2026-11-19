export const id = 303;
export const ids = [303];
export const modules = {
  41050: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      _KTXTextureLoader: () => Zz
    });
    var Ez = bz(38060);
    class nz {
      constructor(zz, uz) {
        if (this.data = zz, this.isInvalid = !1, !nz.IsValid(zz)) return this.isInvalid = !0, void Ez.e.Error("texture missing KTX identifier");
        const bz = Uint32Array.BYTES_PER_ELEMENT,
          iz = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * bz),
          lz = 67305985 === iz.getUint32(0, !0);
        return this.glType = iz.getUint32(1 * bz, lz), this.glTypeSize = iz.getUint32(2 * bz, lz), this.glFormat = iz.getUint32(3 * bz, lz), this.glInternalFormat = iz.getUint32(4 * bz, lz), this.glBaseInternalFormat = iz.getUint32(5 * bz, lz), this.pixelWidth = iz.getUint32(6 * bz, lz), this.pixelHeight = iz.getUint32(7 * bz, lz), this.pixelDepth = iz.getUint32(8 * bz, lz), this.numberOfArrayElements = iz.getUint32(9 * bz, lz), this.numberOfFaces = iz.getUint32(10 * bz, lz), this.numberOfMipmapLevels = iz.getUint32(11 * bz, lz), this.bytesOfKeyValueData = iz.getUint32(12 * bz, lz), 0 !== this.glType ? (Ez.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Ez.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Ez.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== uz ? (Ez.e.Error("number of faces expected" + uz + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = nz.COMPRESSED_2D))
      }
      uploadLevels(zz, uz) {
        switch (this.loadType) {
          case nz.COMPRESSED_2D:
            this._upload2DCompressedLevels(zz, uz);
          case nz.TEX_2D:
          case nz.COMPRESSED_3D:
          case nz.TEX_3D:
        }
      }
      _upload2DCompressedLevels(zz, uz) {
        let bz = nz.HEADER_LEN + this.bytesOfKeyValueData,
          Ez = this.pixelWidth,
          iz = this.pixelHeight;
        const lz = uz ? this.numberOfMipmapLevels : 1;
        for (let nz = 0; nz < lz; nz++) {
          const uz = new Int32Array(this.data.buffer, this.data.byteOffset + bz, 1)[0];
          bz += 4;
          for (let lz = 0; lz < this.numberOfFaces; lz++) {
            const Mz = new Uint8Array(this.data.buffer, this.data.byteOffset + bz, uz);
            zz.uR()._uploadCompressedDataToTextureDirectly(zz, zz.format, Ez, iz, Mz, lz, nz), bz += uz, bz += 3 - (uz + 3) % 4
          }
          Ez = Math.max(1, .5 * Ez), iz = Math.max(1, .5 * iz)
        }
      }
      static IsValid(zz) {
        if (zz.byteLength >= 12) {
          const uz = new Uint8Array(zz.buffer, zz.byteOffset, 12);
          if (171 === uz[0] && 75 === uz[1] && 84 === uz[2] && 88 === uz[3] && 32 === uz[4] && 49 === uz[5] && 49 === uz[6] && 187 === uz[7] && 13 === uz[8] && 10 === uz[9] && 26 === uz[10] && 10 === uz[11]) return !0
        }
        return !1
      }
    }
    nz.HEADER_LEN = 64, nz.COMPRESSED_2D = 0, nz.COMPRESSED_3D = 1, nz.TEX_2D = 2, nz.TEX_3D = 3;
    var iz, lz, Mz, tz = bz(41057),
      Hz = bz(39258);

    function Oz(zz, uz) {
      const bz = uz?.jsDecoderModule || KTX2DECODER;
      zz && (zz.wasmBaseUrl && (bz.Transcoder.WasmBaseUrl = zz.wasmBaseUrl), zz.wasmUASTCToASTC && (bz.LiteTranscoder_UASTC_ASTC.WasmModuleURL = zz.wasmUASTCToASTC), zz.wasmUASTCToBC7 && (bz.LiteTranscoder_UASTC_BC7.WasmModuleURL = zz.wasmUASTCToBC7), zz.wasmUASTCToRGBA_UNORM && (bz.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = zz.wasmUASTCToRGBA_UNORM), zz.wasmUASTCToRGBA_SRGB && (bz.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = zz.wasmUASTCToRGBA_SRGB), zz.wasmUASTCToR8_UNORM && (bz.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = zz.wasmUASTCToR8_UNORM), zz.wasmUASTCToRG8_UNORM && (bz.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = zz.wasmUASTCToRG8_UNORM), zz.jsMSCTranscoder && (bz.MSCTranscoder.JSModuleURL = zz.jsMSCTranscoder), zz.wasmMSCTranscoder && (bz.MSCTranscoder.WasmModuleURL = zz.wasmMSCTranscoder), zz.wasmZSTDDecoder && (bz.ZSTDDecoder.WasmModuleURL = zz.wasmZSTDDecoder)), uz && (uz.wasmUASTCToASTC && (bz.LiteTranscoder_UASTC_ASTC.WasmBinary = uz.wasmUASTCToASTC), uz.wasmUASTCToBC7 && (bz.LiteTranscoder_UASTC_BC7.WasmBinary = uz.wasmUASTCToBC7), uz.wasmUASTCToRGBA_UNORM && (bz.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = uz.wasmUASTCToRGBA_UNORM), uz.wasmUASTCToRGBA_SRGB && (bz.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = uz.wasmUASTCToRGBA_SRGB), uz.wasmUASTCToR8_UNORM && (bz.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = uz.wasmUASTCToR8_UNORM), uz.wasmUASTCToRG8_UNORM && (bz.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = uz.wasmUASTCToRG8_UNORM), uz.jsMSCTranscoder && (bz.MSCTranscoder.JSModule = uz.jsMSCTranscoder), uz.wasmMSCTranscoder && (bz.MSCTranscoder.WasmBinary = uz.wasmMSCTranscoder), uz.wasmZSTDDecoder && (bz.ZSTDDecoder.WasmBinary = uz.wasmZSTDDecoder))
    }

    function pz(zz) {
      let uz;
      "undefined" === typeof zz && "undefined" !== typeof KTX2DECODER && (zz = KTX2DECODER), onmessage = bz => {
        if (bz.data) switch (bz.data.action) {
          case "init": {
            const Ez = bz.data.urls;
            Ez && (Ez.jsDecoderModule && "undefined" === typeof zz && (importScripts(Ez.jsDecoderModule), zz = KTX2DECODER), Oz(Ez)), bz.data.wasmBinaries && Oz(void 0, {
              ...bz.data.wasmBinaries,
              jsDecoderModule: zz
            }), uz = new zz.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            zz.KTX2Decoder.DefaultDecoderOptions = bz.data.options;
            break;
          case "decode":
            uz.decode(bz.data.data, bz.data.caps, bz.data.options).then((zz => {
              const uz = [];
              for (let bz = 0; bz < zz.mipmaps.length; ++bz) {
                const Ez = zz.mipmaps[bz];
                Ez && Ez.data && uz.push(Ez.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: zz
              }, uz)
            })).catch((zz => {
              postMessage({
                action: "decoded",
                success: !1,
                zM: zz
              })
            }))
        }
      }
    }! function(zz) {
      zz[zz.ETC1S = 0] = "ETC1S", zz[zz.UASTC4x4 = 1] = "UASTC4x4", zz[zz.RGBA32 = 2] = "RGBA32"
    }(iz || (iz = {})),
    function(zz) {
      zz[zz.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", zz[zz.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", zz[zz.BC7_RGBA = 1] = "BC7_RGBA", zz[zz.BC3_RGBA = 2] = "BC3_RGBA", zz[zz.BC1_RGB = 3] = "BC1_RGB", zz[zz.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", zz[zz.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", zz[zz.ETC2_RGBA = 6] = "ETC2_RGBA", zz[zz.ETC1_RGB = 7] = "ETC1_RGB", zz[zz.RGBA32 = 8] = "RGBA32", zz[zz.R8 = 9] = "R8", zz[zz.RG8 = 10] = "RG8"
    }(lz || (lz = {})),
    function(zz) {
      zz[zz.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", zz[zz.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", zz[zz.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", zz[zz.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", zz[zz.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", zz[zz.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", zz[zz.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", zz[zz.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", zz[zz.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", zz[zz.RGBA8Format = 32856] = "RGBA8Format", zz[zz.R8Format = 33321] = "R8Format", zz[zz.RG8Format = 33323] = "RG8Format"
    }(Mz || (Mz = {}));
    class dz {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(zz) {
        if (dz._WorkerPoolPromise || dz._DecoderModulePromise) return;
        const uz = {
          wasmBaseUrl: Hz.h.ScriptBaseUrl,
          jsDecoderModule: Hz.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Hz.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Hz.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Hz.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Hz.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Hz.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Hz.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Hz.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Hz.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Hz.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        zz && "function" === typeof Worker && "undefined" !== typeof URL ? dz._WorkerPoolPromise = new Promise((bz => {
          const Ez = `${Oz}(${pz})()`,
            nz = URL.createObjectURL(new Blob([Ez], {
              type: "application/javascript"
            }));
          bz(new tz.d(zz, (async () => await async function(zz, uz, bz) {
            return await new Promise(((Ez, nz) => {
              const iz = uz => {
                  zz.removeEventListener("error", iz), zz.removeEventListener("message", lz), nz(uz)
                },
                lz = uz => {
                  "init" === uz.data.action && (zz.removeEventListener("error", iz), zz.removeEventListener("message", lz), Ez(zz))
                };
              zz.addEventListener("error", iz), zz.addEventListener("message", lz), zz.postMessage({
                action: "init",
                urls: bz,
                wasmBinaries: uz
              })
            }))
          }(new Worker(nz), void 0, uz))))
        })) : "undefined" === typeof dz._KTX2DecoderModule ? dz._DecoderModulePromise = Hz.h.LoadBabylonScriptAsync(uz.jsDecoderModule).then((() => (dz._KTX2DecoderModule = KTX2DECODER, dz._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, dz._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Oz(uz, dz._KTX2DecoderModule), new dz._KTX2DecoderModule.KTX2Decoder))) : (dz._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, dz._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, dz._DecoderModulePromise = Promise.resolve(new dz._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dz.DefaultNumWorkers;
        this._engine = zz;
        const bz = "object" === typeof uz && uz.workerPool || dz.WorkerPool;
        if (bz) dz._WorkerPoolPromise = Promise.resolve(bz);
        else {
          "object" === typeof uz ? dz._KTX2DecoderModule = uz?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (dz._KTX2DecoderModule = KTX2DECODER);
          const zz = "number" === typeof uz ? uz : uz.numWorkers ?? dz.DefaultNumWorkers;
          dz._Initialize(zz)
        }
      }
      async _uploadAsync(zz, uz, bz) {
        const Ez = await this._decodeAsync(zz, bz);
        this._createTexture(Ez, uz, bz)
      }
      async _decodeAsync(zz, uz) {
        const bz = this._engine.getCaps(),
          Ez = {
            astc: !!bz.astc,
            bptc: !!bz.bptc,
            s3tc: !!bz.s3tc,
            pvrtc: !!bz.pvrtc,
            etc2: !!bz.etc2,
            etc1: !!bz.etc1
          };
        if (dz._WorkerPoolPromise) {
          const bz = await dz._WorkerPoolPromise;
          return await new Promise(((nz, iz) => {
            bz.push(((bz, lz) => {
              const Mz = zz => {
                  bz.removeEventListener("error", Mz), bz.removeEventListener("message", tz), iz(zz), lz()
                },
                tz = zz => {
                  "decoded" === zz.data.action && (bz.removeEventListener("error", Mz), bz.removeEventListener("message", tz), zz.data.success ? nz(zz.data.decodedData) : iz({
                    message: zz.data.zM
                  }), lz())
                };
              bz.addEventListener("error", Mz), bz.addEventListener("message", tz), bz.postMessage({
                action: "setDefaultDecoderOptions",
                options: dz.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Hz = new Uint8Array(zz.byteLength);
              Hz.set(new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength)), bz.postMessage({
                action: "decode",
                data: Hz,
                caps: Ez,
                options: uz
              }, [Hz.buffer])
            }))
          }))
        }
        if (dz._DecoderModulePromise) {
          const Ez = await dz._DecoderModulePromise;
          return dz.DefaultDecoderOptions.isDirty && (dz._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = dz.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((nz, iz) => {
            Ez.decode(zz, bz, uz).then((zz => {
              nz(zz)
            })).catch((zz => {
              iz({
                message: zz
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(zz, uz, bz) {
        if ((zz.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, uz), bz && (bz.transcodedFormat = zz.transcodedFormat, bz.isInGammaSpace = zz.isInGammaSpace, bz.hasAlpha = zz.hasAlpha, bz.transcoderName = zz.transcoderName);
        let Ez = !0;
        switch (zz.transcodedFormat) {
          case 32856:
            uz.type = 0, uz.format = 5;
            break;
          case 33321:
            uz.type = 0, uz.format = 6;
            break;
          case 33323:
            uz.type = 0, uz.format = 7;
            break;
          default:
            uz.format = zz.transcodedFormat, Ez = !1
        }
        if (uz._gammaSpace = zz.isInGammaSpace, uz.generateMipMaps = zz.mipmaps.length > 1, uz.width = zz.mipmaps[0].width, uz.height = zz.mipmaps[0].height, zz.errors) throw new Error("KTX2 container - could not transcode the data. " + zz.errors);
        for (let nz = 0; nz < zz.mipmaps.length; ++nz) {
          const bz = zz.mipmaps[nz];
          if (!bz || !bz.data) throw new Error("KTX2 container - could not transcode one of the image");
          Ez ? (uz.width = bz.width, uz.height = bz.height, this._engine._uploadDataToTextureDirectly(uz, bz.data, 0, nz, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(uz, zz.transcodedFormat, bz.width, bz.height, bz.data, 0, nz)
        }
        uz._extension = ".ktx2", uz.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(zz) {
        if (zz.byteLength >= 12) {
          const uz = new Uint8Array(zz.buffer, zz.byteOffset, 12);
          if (171 === uz[0] && 75 === uz[1] && 84 === uz[2] && 88 === uz[3] && 32 === uz[4] && 50 === uz[5] && 48 === uz[6] && 187 === uz[7] && 13 === uz[8] && 10 === uz[9] && 26 === uz[10] && 10 === uz[11]) return !0
        }
        return !1
      }
    }

    function Fz(zz) {
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
    dz.URLConfig = {
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
    }, dz.DefaultNumWorkers = dz.GetDefaultNumWorkers(), dz.DefaultDecoderOptions = new class {
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
            transcodeFormat: [lz.BC1_RGB, lz.BC3_RGBA],
            yes: {
              transcodeFormat: lz.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = zz, zz
      }
    };
    class Zz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(zz, uz, bz, Ez) {
        if (Array.isArray(zz)) return;
        uz._invertVScale = !uz.invertY;
        const iz = uz.uR(),
          lz = new nz(zz, 6),
          Mz = Fz(lz.glInternalFormat);
        null !== Mz ? (uz.format = Mz, uz._useSRGBBuffer = iz._getUseSRGBBuffer(!0, !uz.generateMipMaps), uz._gammaSpace = !0) : uz.format = lz.glInternalFormat;
        const tz = lz.numberOfMipmapLevels > 1 && uz.generateMipMaps;
        iz._unpackFlipY(!0), lz.uploadLevels(uz, uz.generateMipMaps), uz.width = lz.pixelWidth, uz.height = lz.pixelHeight, iz._setCubeMapTextureParams(uz, tz, lz.numberOfMipmapLevels - 1), uz.isReady = !0, uz.onLoadedObservable.notifyObservers(uz), uz.onLoadedObservable.clear(), Ez && Ez()
      }
      loadData(zz, uz, bz, iz) {
        if (nz.IsValid(zz)) {
          uz._invertVScale = !uz.invertY;
          const Ez = new nz(zz, 1),
            iz = Fz(Ez.glInternalFormat);
          null !== iz ? (uz.format = iz, uz._useSRGBBuffer = uz.uR()._getUseSRGBBuffer(!0, !uz.generateMipMaps), uz._gammaSpace = !0) : uz.format = Ez.glInternalFormat, bz(Ez.pixelWidth, Ez.pixelHeight, uz.generateMipMaps, !0, (() => {
            Ez.uploadLevels(uz, uz.generateMipMaps)
          }), Ez.isInvalid)
        } else if (dz.IsValid(zz)) {
          new dz(uz.uR())._uploadAsync(zz, uz, iz).then((() => {
            bz(uz.width, uz.height, uz.generateMipMaps, !0, (() => {}), !1)
          }), (zz => {
            Ez.e.Warn(`Failed to load KTX2 texture data: ${zz.message}`), bz(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Ez.e.Error("texture missing KTX identifier"), bz(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41057: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz
    });
    class Ez {
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
        for (const uz of this._workerInfos)
          if (uz.idle) return this._execute(uz, zz), !0;
        return !1
      }
      _execute(zz, uz) {
        zz.idle = !1, zz.workerPromise.then((bz => {
          uz(bz, (() => {
            const uz = this._pendingActions.shift();
            uz ? this._execute(zz, uz) : zz.idle = !0
          }))
        }))
      }
    }
    class nz extends Ez {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nz.DefaultOptions;
        super([]), this._maxWorkers = zz, this._createWorkerAsync = uz, this._options = bz
      }
      push(zz) {
        if (!this._executeOnIdleWorker(zz))
          if (this._workerInfos.length < this._maxWorkers) {
            const uz = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(uz), this._execute(uz, zz)
          } else this._pendingActions.push(zz)
      }
      _execute(zz, uz) {
        zz.timeoutId && (clearTimeout(zz.timeoutId), delete zz.timeoutId), super._execute(zz, ((bz, Ez) => {
          uz(bz, (() => {
            Ez(), zz.idle && (zz.timeoutId = setTimeout((() => {
              zz.workerPromise.then((zz => {
                zz.terminate()
              }));
              const uz = this._workerInfos.indexOf(zz); - 1 !== uz && this._workerInfos.splice(uz, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    nz.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);