export const id = 318;
export const ids = [318];
export const modules = {
  41874: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      _KTXTextureLoader: () => NB
    });
    var TB = ZB(38718);
    class JB {
      constructor(BB, IB) {
        if (this.data = BB, this.isInvalid = !1, !JB.IsValid(BB)) return this.isInvalid = !0, void TB.d.Error("texture missing KTX identifier");
        const ZB = Uint32Array.BYTES_PER_ELEMENT,
          oB = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ZB),
          GB = 67305985 === oB.getUint32(0, !0);
        return this.glType = oB.getUint32(1 * ZB, GB), this.glTypeSize = oB.getUint32(2 * ZB, GB), this.glFormat = oB.getUint32(3 * ZB, GB), this.glInternalFormat = oB.getUint32(4 * ZB, GB), this.glBaseInternalFormat = oB.getUint32(5 * ZB, GB), this.pixelWidth = oB.getUint32(6 * ZB, GB), this.pixelHeight = oB.getUint32(7 * ZB, GB), this.pixelDepth = oB.getUint32(8 * ZB, GB), this.numberOfArrayElements = oB.getUint32(9 * ZB, GB), this.numberOfFaces = oB.getUint32(10 * ZB, GB), this.numberOfMipmapLevels = oB.getUint32(11 * ZB, GB), this.bytesOfKeyValueData = oB.getUint32(12 * ZB, GB), 0 !== this.glType ? (TB.d.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (TB.d.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (TB.d.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== IB ? (TB.d.Error("number of faces expected" + IB + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = JB.COMPRESSED_2D))
      }
      uploadLevels(BB, IB) {
        switch (this.loadType) {
          case JB.COMPRESSED_2D:
            this._upload2DCompressedLevels(BB, IB);
          case JB.TEX_2D:
          case JB.COMPRESSED_3D:
          case JB.TEX_3D:
        }
      }
      _upload2DCompressedLevels(BB, IB) {
        let ZB = JB.HEADER_LEN + this.bytesOfKeyValueData,
          TB = this.pixelWidth,
          oB = this.pixelHeight;
        const GB = IB ? this.numberOfMipmapLevels : 1;
        for (let JB = 0; JB < GB; JB++) {
          const IB = new Int32Array(this.data.buffer, this.data.byteOffset + ZB, 1)[0];
          ZB += 4;
          for (let GB = 0; GB < this.numberOfFaces; GB++) {
            const vB = new Uint8Array(this.data.buffer, this.data.byteOffset + ZB, IB);
            BB.PN()._uploadCompressedDataToTextureDirectly(BB, BB.format, TB, oB, vB, GB, JB), ZB += IB, ZB += 3 - (IB + 3) % 4
          }
          TB = Math.max(1, .5 * TB), oB = Math.max(1, .5 * oB)
        }
      }
      static IsValid(BB) {
        if (BB.byteLength >= 12) {
          const IB = new Uint8Array(BB.buffer, BB.byteOffset, 12);
          if (171 === IB[0] && 75 === IB[1] && 84 === IB[2] && 88 === IB[3] && 32 === IB[4] && 49 === IB[5] && 49 === IB[6] && 187 === IB[7] && 13 === IB[8] && 10 === IB[9] && 26 === IB[10] && 10 === IB[11]) return !0
        }
        return !1
      }
    }
    JB.HEADER_LEN = 64, JB.COMPRESSED_2D = 0, JB.COMPRESSED_3D = 1, JB.TEX_2D = 2, JB.TEX_3D = 3;
    var oB, GB, vB, kB = ZB(41881),
      cB = ZB(40152);

    function nB(BB, IB) {
      const ZB = IB?.jsDecoderModule || KTX2DECODER;
      BB && (BB.wasmBaseUrl && (ZB.Transcoder.WasmBaseUrl = BB.wasmBaseUrl), BB.wasmUASTCToASTC && (ZB.LiteTranscoder_UASTC_ASTC.WasmModuleURL = BB.wasmUASTCToASTC), BB.wasmUASTCToBC7 && (ZB.LiteTranscoder_UASTC_BC7.WasmModuleURL = BB.wasmUASTCToBC7), BB.wasmUASTCToRGBA_UNORM && (ZB.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = BB.wasmUASTCToRGBA_UNORM), BB.wasmUASTCToRGBA_SRGB && (ZB.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = BB.wasmUASTCToRGBA_SRGB), BB.wasmUASTCToR8_UNORM && (ZB.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = BB.wasmUASTCToR8_UNORM), BB.wasmUASTCToRG8_UNORM && (ZB.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = BB.wasmUASTCToRG8_UNORM), BB.jsMSCTranscoder && (ZB.MSCTranscoder.JSModuleURL = BB.jsMSCTranscoder), BB.wasmMSCTranscoder && (ZB.MSCTranscoder.WasmModuleURL = BB.wasmMSCTranscoder), BB.wasmZSTDDecoder && (ZB.ZSTDDecoder.WasmModuleURL = BB.wasmZSTDDecoder)), IB && (IB.wasmUASTCToASTC && (ZB.LiteTranscoder_UASTC_ASTC.WasmBinary = IB.wasmUASTCToASTC), IB.wasmUASTCToBC7 && (ZB.LiteTranscoder_UASTC_BC7.WasmBinary = IB.wasmUASTCToBC7), IB.wasmUASTCToRGBA_UNORM && (ZB.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = IB.wasmUASTCToRGBA_UNORM), IB.wasmUASTCToRGBA_SRGB && (ZB.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = IB.wasmUASTCToRGBA_SRGB), IB.wasmUASTCToR8_UNORM && (ZB.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = IB.wasmUASTCToR8_UNORM), IB.wasmUASTCToRG8_UNORM && (ZB.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = IB.wasmUASTCToRG8_UNORM), IB.jsMSCTranscoder && (ZB.MSCTranscoder.JSModule = IB.jsMSCTranscoder), IB.wasmMSCTranscoder && (ZB.MSCTranscoder.WasmBinary = IB.wasmMSCTranscoder), IB.wasmZSTDDecoder && (ZB.ZSTDDecoder.WasmBinary = IB.wasmZSTDDecoder))
    }

    function hB(BB) {
      let IB;
      "undefined" === typeof BB && "undefined" !== typeof KTX2DECODER && (BB = KTX2DECODER), onmessage = ZB => {
        if (ZB.data) switch (ZB.data.action) {
          case "init": {
            const TB = ZB.data.urls;
            TB && (TB.jsDecoderModule && "undefined" === typeof BB && (importScripts(TB.jsDecoderModule), BB = KTX2DECODER), nB(TB)), ZB.data.wasmBinaries && nB(void 0, {
              ...ZB.data.wasmBinaries,
              jsDecoderModule: BB
            }), IB = new BB.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            BB.KTX2Decoder.DefaultDecoderOptions = ZB.data.options;
            break;
          case "decode":
            IB.decode(ZB.data.data, ZB.data.caps, ZB.data.options).then((BB => {
              const IB = [];
              for (let ZB = 0; ZB < BB.mipmaps.length; ++ZB) {
                const TB = BB.mipmaps[ZB];
                TB && TB.data && IB.push(TB.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: BB
              }, IB)
            })).catch((BB => {
              postMessage({
                action: "decoded",
                success: !1,
                Xn: BB
              })
            }))
        }
      }
    }! function(BB) {
      BB[BB.ETC1S = 0] = "ETC1S", BB[BB.UASTC4x4 = 1] = "UASTC4x4", BB[BB.RGBA32 = 2] = "RGBA32"
    }(oB || (oB = {})),
    function(BB) {
      BB[BB.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", BB[BB.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", BB[BB.BC7_RGBA = 1] = "BC7_RGBA", BB[BB.BC3_RGBA = 2] = "BC3_RGBA", BB[BB.BC1_RGB = 3] = "BC1_RGB", BB[BB.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", BB[BB.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", BB[BB.ETC2_RGBA = 6] = "ETC2_RGBA", BB[BB.ETC1_RGB = 7] = "ETC1_RGB", BB[BB.RGBA32 = 8] = "RGBA32", BB[BB.R8 = 9] = "R8", BB[BB.RG8 = 10] = "RG8"
    }(GB || (GB = {})),
    function(BB) {
      BB[BB.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", BB[BB.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", BB[BB.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", BB[BB.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", BB[BB.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", BB[BB.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", BB[BB.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", BB[BB.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", BB[BB.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", BB[BB.RGBA8Format = 32856] = "RGBA8Format", BB[BB.R8Format = 33321] = "R8Format", BB[BB.RG8Format = 33323] = "RG8Format"
    }(vB || (vB = {}));
    class zB {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(BB) {
        if (zB._WorkerPoolPromise || zB._DecoderModulePromise) return;
        const IB = {
          wasmBaseUrl: cB.j.ScriptBaseUrl,
          jsDecoderModule: cB.j.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: cB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: cB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: cB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: cB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: cB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: cB.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: cB.j.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: cB.j.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: cB.j.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        BB && "function" === typeof Worker && "undefined" !== typeof URL ? zB._WorkerPoolPromise = new Promise((ZB => {
          const TB = `${nB}(${hB})()`,
            JB = URL.createObjectURL(new Blob([TB], {
              type: "application/javascript"
            }));
          ZB(new kB.b(BB, (async () => await async function(BB, IB, ZB) {
            return await new Promise(((TB, JB) => {
              const oB = IB => {
                  BB.removeEventListener("error", oB), BB.removeEventListener("message", GB), JB(IB)
                },
                GB = IB => {
                  "init" === IB.data.action && (BB.removeEventListener("error", oB), BB.removeEventListener("message", GB), TB(BB))
                };
              BB.addEventListener("error", oB), BB.addEventListener("message", GB), BB.postMessage({
                action: "init",
                urls: ZB,
                wasmBinaries: IB
              })
            }))
          }(new Worker(JB), void 0, IB))))
        })) : "undefined" === typeof zB._KTX2DecoderModule ? zB._DecoderModulePromise = cB.j.LoadBabylonScriptAsync(IB.jsDecoderModule).then((() => (zB._KTX2DecoderModule = KTX2DECODER, zB._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, zB._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, nB(IB, zB._KTX2DecoderModule), new zB._KTX2DecoderModule.KTX2Decoder))) : (zB._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, zB._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, zB._DecoderModulePromise = Promise.resolve(new zB._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zB.DefaultNumWorkers;
        this._engine = BB;
        const ZB = "object" === typeof IB && IB.workerPool || zB.WorkerPool;
        if (ZB) zB._WorkerPoolPromise = Promise.resolve(ZB);
        else {
          "object" === typeof IB ? zB._KTX2DecoderModule = IB?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (zB._KTX2DecoderModule = KTX2DECODER);
          const BB = "number" === typeof IB ? IB : IB.numWorkers ?? zB.DefaultNumWorkers;
          zB._Initialize(BB)
        }
      }
      async _uploadAsync(BB, IB, ZB) {
        const TB = await this._decodeAsync(BB, ZB);
        this._createTexture(TB, IB, ZB)
      }
      async _decodeAsync(BB, IB) {
        const ZB = this._engine.getCaps(),
          TB = {
            astc: !!ZB.astc,
            bptc: !!ZB.bptc,
            s3tc: !!ZB.s3tc,
            pvrtc: !!ZB.pvrtc,
            etc2: !!ZB.etc2,
            etc1: !!ZB.etc1
          };
        if (zB._WorkerPoolPromise) {
          const ZB = await zB._WorkerPoolPromise;
          return await new Promise(((JB, oB) => {
            ZB.push(((ZB, GB) => {
              const vB = BB => {
                  ZB.removeEventListener("error", vB), ZB.removeEventListener("message", kB), oB(BB), GB()
                },
                kB = BB => {
                  "decoded" === BB.data.action && (ZB.removeEventListener("error", vB), ZB.removeEventListener("message", kB), BB.data.success ? JB(BB.data.decodedData) : oB({
                    message: BB.data.Xn
                  }), GB())
                };
              ZB.addEventListener("error", vB), ZB.addEventListener("message", kB), ZB.postMessage({
                action: "setDefaultDecoderOptions",
                options: zB.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const cB = new Uint8Array(BB.byteLength);
              cB.set(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength)), ZB.postMessage({
                action: "decode",
                data: cB,
                caps: TB,
                options: IB
              }, [cB.buffer])
            }))
          }))
        }
        if (zB._DecoderModulePromise) {
          const TB = await zB._DecoderModulePromise;
          return zB.DefaultDecoderOptions.isDirty && (zB._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = zB.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((JB, oB) => {
            TB.decode(BB, ZB, IB).then((BB => {
              JB(BB)
            })).catch((BB => {
              oB({
                message: BB
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(BB, IB, ZB) {
        if ((BB.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, IB), ZB && (ZB.transcodedFormat = BB.transcodedFormat, ZB.isInGammaSpace = BB.isInGammaSpace, ZB.hasAlpha = BB.hasAlpha, ZB.transcoderName = BB.transcoderName);
        let TB = !0;
        switch (BB.transcodedFormat) {
          case 32856:
            IB.type = 0, IB.format = 5;
            break;
          case 33321:
            IB.type = 0, IB.format = 6;
            break;
          case 33323:
            IB.type = 0, IB.format = 7;
            break;
          default:
            IB.format = BB.transcodedFormat, TB = !1
        }
        if (IB._gammaSpace = BB.isInGammaSpace, IB.generateMipMaps = BB.mipmaps.length > 1, IB.width = BB.mipmaps[0].width, IB.height = BB.mipmaps[0].height, BB.errors) throw new Error("KTX2 container - could not transcode the data. " + BB.errors);
        for (let JB = 0; JB < BB.mipmaps.length; ++JB) {
          const ZB = BB.mipmaps[JB];
          if (!ZB || !ZB.data) throw new Error("KTX2 container - could not transcode one of the image");
          TB ? (IB.width = ZB.width, IB.height = ZB.height, this._engine._uploadDataToTextureDirectly(IB, ZB.data, 0, JB, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(IB, BB.transcodedFormat, ZB.width, ZB.height, ZB.data, 0, JB)
        }
        IB._extension = ".ktx2", IB.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(BB) {
        if (BB.byteLength >= 12) {
          const IB = new Uint8Array(BB.buffer, BB.byteOffset, 12);
          if (171 === IB[0] && 75 === IB[1] && 84 === IB[2] && 88 === IB[3] && 32 === IB[4] && 50 === IB[5] && 48 === IB[6] && 187 === IB[7] && 13 === IB[8] && 10 === IB[9] && 26 === IB[10] && 10 === IB[11]) return !0
        }
        return !1
      }
    }

    function FB(BB) {
      switch (BB) {
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
    zB.URLConfig = {
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
    }, zB.DefaultNumWorkers = zB.GetDefaultNumWorkers(), zB.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(BB) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== BB && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = BB, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(BB) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== BB && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = BB, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(BB) {
        this._forceRGBA !== BB && (this._forceRGBA = BB, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(BB) {
        this._forceR8 !== BB && (this._forceR8 = BB, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(BB) {
        this._forceRG8 !== BB && (this._forceRG8 = BB, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(BB) {
        this._bypassTranscoders !== BB && (this._bypassTranscoders = BB, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const BB = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (BB.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (BB.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (BB.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (BB.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (BB.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (BB.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [GB.BC1_RGB, GB.BC3_RGBA],
            yes: {
              transcodeFormat: GB.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = BB, BB
      }
    };
    class NB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, IB, ZB, TB) {
        if (Array.isArray(BB)) return;
        IB._invertVScale = !IB.invertY;
        const oB = IB.PN(),
          GB = new JB(BB, 6),
          vB = FB(GB.glInternalFormat);
        null !== vB ? (IB.format = vB, IB._useSRGBBuffer = oB._getUseSRGBBuffer(!0, !IB.generateMipMaps), IB._gammaSpace = !0) : IB.format = GB.glInternalFormat;
        const kB = GB.numberOfMipmapLevels > 1 && IB.generateMipMaps;
        oB._unpackFlipY(!0), GB.uploadLevels(IB, IB.generateMipMaps), IB.width = GB.pixelWidth, IB.height = GB.pixelHeight, oB._setCubeMapTextureParams(IB, kB, GB.numberOfMipmapLevels - 1), IB.isReady = !0, IB.onLoadedObservable.notifyObservers(IB), IB.onLoadedObservable.clear(), TB && TB()
      }
      loadData(BB, IB, ZB, oB) {
        if (JB.IsValid(BB)) {
          IB._invertVScale = !IB.invertY;
          const TB = new JB(BB, 1),
            oB = FB(TB.glInternalFormat);
          null !== oB ? (IB.format = oB, IB._useSRGBBuffer = IB.PN()._getUseSRGBBuffer(!0, !IB.generateMipMaps), IB._gammaSpace = !0) : IB.format = TB.glInternalFormat, ZB(TB.pixelWidth, TB.pixelHeight, IB.generateMipMaps, !0, (() => {
            TB.uploadLevels(IB, IB.generateMipMaps)
          }), TB.isInvalid)
        } else if (zB.IsValid(BB)) {
          new zB(IB.PN())._uploadAsync(BB, IB, oB).then((() => {
            ZB(IB.width, IB.height, IB.generateMipMaps, !0, (() => {}), !1)
          }), (BB => {
            TB.d.Warn(`Failed to load KTX2 texture data: ${BB.message}`), ZB(0, 0, !1, !1, (() => {}), !0)
          }))
        } else TB.d.Error("texture missing KTX identifier"), ZB(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41881: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB
    });
    class TB {
      constructor(BB) {
        this._pendingActions = new Array, this._workerInfos = BB.map((BB => ({
          workerPromise: Promise.resolve(BB),
          idle: !0
        })))
      }
      dispose() {
        for (const BB of this._workerInfos) BB.workerPromise.then((BB => {
          BB.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(BB) {
        this._executeOnIdleWorker(BB) || this._pendingActions.push(BB)
      }
      _executeOnIdleWorker(BB) {
        for (const IB of this._workerInfos)
          if (IB.idle) return this._execute(IB, BB), !0;
        return !1
      }
      _execute(BB, IB) {
        BB.idle = !1, BB.workerPromise.then((ZB => {
          IB(ZB, (() => {
            const IB = this._pendingActions.shift();
            IB ? this._execute(BB, IB) : BB.idle = !0
          }))
        }))
      }
    }
    class JB extends TB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JB.DefaultOptions;
        super([]), this._maxWorkers = BB, this._createWorkerAsync = IB, this._options = ZB
      }
      push(BB) {
        if (!this._executeOnIdleWorker(BB))
          if (this._workerInfos.length < this._maxWorkers) {
            const IB = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(IB), this._execute(IB, BB)
          } else this._pendingActions.push(BB)
      }
      _execute(BB, IB) {
        BB.timeoutId && (clearTimeout(BB.timeoutId), delete BB.timeoutId), super._execute(BB, ((ZB, TB) => {
          IB(ZB, (() => {
            TB(), BB.idle && (BB.timeoutId = setTimeout((() => {
              BB.workerPromise.then((BB => {
                BB.terminate()
              }));
              const IB = this._workerInfos.indexOf(BB); - 1 !== IB && this._workerInfos.splice(IB, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    JB.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);