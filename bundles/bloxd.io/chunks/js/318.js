export const id = 318;
export const ids = [318];
export const modules = {
  41989: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      _KTXTextureLoader: () => BT
    });
    var WT = mT(38800);
    class zT {
      constructor(TT, UT) {
        if (this.data = TT, this.isInvalid = !1, !zT.IsValid(TT)) return this.isInvalid = !0, void WT.b.Error("texture missing KTX identifier");
        const mT = Uint32Array.BYTES_PER_ELEMENT,
          MT = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * mT),
          gT = 67305985 === MT.getUint32(0, !0);
        return this.glType = MT.getUint32(1 * mT, gT), this.glTypeSize = MT.getUint32(2 * mT, gT), this.glFormat = MT.getUint32(3 * mT, gT), this.glInternalFormat = MT.getUint32(4 * mT, gT), this.glBaseInternalFormat = MT.getUint32(5 * mT, gT), this.pixelWidth = MT.getUint32(6 * mT, gT), this.pixelHeight = MT.getUint32(7 * mT, gT), this.pixelDepth = MT.getUint32(8 * mT, gT), this.numberOfArrayElements = MT.getUint32(9 * mT, gT), this.numberOfFaces = MT.getUint32(10 * mT, gT), this.numberOfMipmapLevels = MT.getUint32(11 * mT, gT), this.bytesOfKeyValueData = MT.getUint32(12 * mT, gT), 0 !== this.glType ? (WT.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (WT.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (WT.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== UT ? (WT.b.Error("number of faces expected" + UT + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = zT.COMPRESSED_2D))
      }
      uploadLevels(TT, UT) {
        switch (this.loadType) {
          case zT.COMPRESSED_2D:
            this._upload2DCompressedLevels(TT, UT);
          case zT.TEX_2D:
          case zT.COMPRESSED_3D:
          case zT.TEX_3D:
        }
      }
      _upload2DCompressedLevels(TT, UT) {
        let mT = zT.HEADER_LEN + this.bytesOfKeyValueData,
          WT = this.pixelWidth,
          MT = this.pixelHeight;
        const gT = UT ? this.numberOfMipmapLevels : 1;
        for (let zT = 0; zT < gT; zT++) {
          const UT = new Int32Array(this.data.buffer, this.data.byteOffset + mT, 1)[0];
          mT += 4;
          for (let gT = 0; gT < this.numberOfFaces; gT++) {
            const nT = new Uint8Array(this.data.buffer, this.data.byteOffset + mT, UT);
            TT.eB()._uploadCompressedDataToTextureDirectly(TT, TT.format, WT, MT, nT, gT, zT), mT += UT, mT += 3 - (UT + 3) % 4
          }
          WT = Math.max(1, .5 * WT), MT = Math.max(1, .5 * MT)
        }
      }
      static IsValid(TT) {
        if (TT.byteLength >= 12) {
          const UT = new Uint8Array(TT.buffer, TT.byteOffset, 12);
          if (171 === UT[0] && 75 === UT[1] && 84 === UT[2] && 88 === UT[3] && 32 === UT[4] && 49 === UT[5] && 49 === UT[6] && 187 === UT[7] && 13 === UT[8] && 10 === UT[9] && 26 === UT[10] && 10 === UT[11]) return !0
        }
        return !1
      }
    }
    zT.HEADER_LEN = 64, zT.COMPRESSED_2D = 0, zT.COMPRESSED_3D = 1, zT.TEX_2D = 2, zT.TEX_3D = 3;
    var MT, gT, nT, HT = mT(41995),
      kT = mT(40201);

    function jT(TT, UT) {
      const mT = UT?.jsDecoderModule || KTX2DECODER;
      TT && (TT.wasmBaseUrl && (mT.Transcoder.WasmBaseUrl = TT.wasmBaseUrl), TT.wasmUASTCToASTC && (mT.LiteTranscoder_UASTC_ASTC.WasmModuleURL = TT.wasmUASTCToASTC), TT.wasmUASTCToBC7 && (mT.LiteTranscoder_UASTC_BC7.WasmModuleURL = TT.wasmUASTCToBC7), TT.wasmUASTCToRGBA_UNORM && (mT.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = TT.wasmUASTCToRGBA_UNORM), TT.wasmUASTCToRGBA_SRGB && (mT.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = TT.wasmUASTCToRGBA_SRGB), TT.wasmUASTCToR8_UNORM && (mT.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = TT.wasmUASTCToR8_UNORM), TT.wasmUASTCToRG8_UNORM && (mT.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = TT.wasmUASTCToRG8_UNORM), TT.jsMSCTranscoder && (mT.MSCTranscoder.JSModuleURL = TT.jsMSCTranscoder), TT.wasmMSCTranscoder && (mT.MSCTranscoder.WasmModuleURL = TT.wasmMSCTranscoder), TT.wasmZSTDDecoder && (mT.ZSTDDecoder.WasmModuleURL = TT.wasmZSTDDecoder)), UT && (UT.wasmUASTCToASTC && (mT.LiteTranscoder_UASTC_ASTC.WasmBinary = UT.wasmUASTCToASTC), UT.wasmUASTCToBC7 && (mT.LiteTranscoder_UASTC_BC7.WasmBinary = UT.wasmUASTCToBC7), UT.wasmUASTCToRGBA_UNORM && (mT.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = UT.wasmUASTCToRGBA_UNORM), UT.wasmUASTCToRGBA_SRGB && (mT.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = UT.wasmUASTCToRGBA_SRGB), UT.wasmUASTCToR8_UNORM && (mT.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = UT.wasmUASTCToR8_UNORM), UT.wasmUASTCToRG8_UNORM && (mT.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = UT.wasmUASTCToRG8_UNORM), UT.jsMSCTranscoder && (mT.MSCTranscoder.JSModule = UT.jsMSCTranscoder), UT.wasmMSCTranscoder && (mT.MSCTranscoder.WasmBinary = UT.wasmMSCTranscoder), UT.wasmZSTDDecoder && (mT.ZSTDDecoder.WasmBinary = UT.wasmZSTDDecoder))
    }

    function lT(TT) {
      let UT;
      "undefined" === typeof TT && "undefined" !== typeof KTX2DECODER && (TT = KTX2DECODER), onmessage = mT => {
        if (mT.data) switch (mT.data.action) {
          case "init": {
            const WT = mT.data.urls;
            WT && (WT.jsDecoderModule && "undefined" === typeof TT && (importScripts(WT.jsDecoderModule), TT = KTX2DECODER), jT(WT)), mT.data.wasmBinaries && jT(void 0, {
              ...mT.data.wasmBinaries,
              jsDecoderModule: TT
            }), UT = new TT.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            TT.KTX2Decoder.DefaultDecoderOptions = mT.data.options;
            break;
          case "decode":
            UT.decode(mT.data.data, mT.data.caps, mT.data.options).then((TT => {
              const UT = [];
              for (let mT = 0; mT < TT.mipmaps.length; ++mT) {
                const WT = TT.mipmaps[mT];
                WT && WT.data && UT.push(WT.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: TT
              }, UT)
            })).catch((TT => {
              postMessage({
                action: "decoded",
                success: !1,
                Xj: TT
              })
            }))
        }
      }
    }! function(TT) {
      TT[TT.ETC1S = 0] = "ETC1S", TT[TT.UASTC4x4 = 1] = "UASTC4x4", TT[TT.RGBA32 = 2] = "RGBA32"
    }(MT || (MT = {})),
    function(TT) {
      TT[TT.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", TT[TT.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", TT[TT.BC7_RGBA = 1] = "BC7_RGBA", TT[TT.BC3_RGBA = 2] = "BC3_RGBA", TT[TT.BC1_RGB = 3] = "BC1_RGB", TT[TT.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", TT[TT.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", TT[TT.ETC2_RGBA = 6] = "ETC2_RGBA", TT[TT.ETC1_RGB = 7] = "ETC1_RGB", TT[TT.RGBA32 = 8] = "RGBA32", TT[TT.R8 = 9] = "R8", TT[TT.RG8 = 10] = "RG8"
    }(gT || (gT = {})),
    function(TT) {
      TT[TT.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", TT[TT.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", TT[TT.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", TT[TT.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", TT[TT.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", TT[TT.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", TT[TT.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", TT[TT.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", TT[TT.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", TT[TT.RGBA8Format = 32856] = "RGBA8Format", TT[TT.R8Format = 33321] = "R8Format", TT[TT.RG8Format = 33323] = "RG8Format"
    }(nT || (nT = {}));
    class LT {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(TT) {
        if (LT._WorkerPoolPromise || LT._DecoderModulePromise) return;
        const UT = {
          wasmBaseUrl: kT.j.ScriptBaseUrl,
          jsDecoderModule: kT.j.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: kT.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: kT.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: kT.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: kT.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: kT.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: kT.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: kT.j.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: kT.j.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: kT.j.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        TT && "function" === typeof Worker && "undefined" !== typeof URL ? LT._WorkerPoolPromise = new Promise((mT => {
          const WT = `${jT}(${lT})()`,
            zT = URL.createObjectURL(new Blob([WT], {
              type: "application/javascript"
            }));
          mT(new HT.b(TT, (async () => await async function(TT, UT, mT) {
            return await new Promise(((WT, zT) => {
              const MT = UT => {
                  TT.removeEventListener("error", MT), TT.removeEventListener("message", gT), zT(UT)
                },
                gT = UT => {
                  "init" === UT.data.action && (TT.removeEventListener("error", MT), TT.removeEventListener("message", gT), WT(TT))
                };
              TT.addEventListener("error", MT), TT.addEventListener("message", gT), TT.postMessage({
                action: "init",
                urls: mT,
                wasmBinaries: UT
              })
            }))
          }(new Worker(zT), void 0, UT))))
        })) : "undefined" === typeof LT._KTX2DecoderModule ? LT._DecoderModulePromise = kT.j.LoadBabylonScriptAsync(UT.jsDecoderModule).then((() => (LT._KTX2DecoderModule = KTX2DECODER, LT._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, LT._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, jT(UT, LT._KTX2DecoderModule), new LT._KTX2DecoderModule.KTX2Decoder))) : (LT._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, LT._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, LT._DecoderModulePromise = Promise.resolve(new LT._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LT.DefaultNumWorkers;
        this._engine = TT;
        const mT = "object" === typeof UT && UT.workerPool || LT.WorkerPool;
        if (mT) LT._WorkerPoolPromise = Promise.resolve(mT);
        else {
          "object" === typeof UT ? LT._KTX2DecoderModule = UT?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (LT._KTX2DecoderModule = KTX2DECODER);
          const TT = "number" === typeof UT ? UT : UT.numWorkers ?? LT.DefaultNumWorkers;
          LT._Initialize(TT)
        }
      }
      async _uploadAsync(TT, UT, mT) {
        const WT = await this._decodeAsync(TT, mT);
        this._createTexture(WT, UT, mT)
      }
      async _decodeAsync(TT, UT) {
        const mT = this._engine.getCaps(),
          WT = {
            astc: !!mT.astc,
            bptc: !!mT.bptc,
            s3tc: !!mT.s3tc,
            pvrtc: !!mT.pvrtc,
            etc2: !!mT.etc2,
            etc1: !!mT.etc1
          };
        if (LT._WorkerPoolPromise) {
          const mT = await LT._WorkerPoolPromise;
          return await new Promise(((zT, MT) => {
            mT.push(((mT, gT) => {
              const nT = TT => {
                  mT.removeEventListener("error", nT), mT.removeEventListener("message", HT), MT(TT), gT()
                },
                HT = TT => {
                  "decoded" === TT.data.action && (mT.removeEventListener("error", nT), mT.removeEventListener("message", HT), TT.data.success ? zT(TT.data.decodedData) : MT({
                    message: TT.data.Xj
                  }), gT())
                };
              mT.addEventListener("error", nT), mT.addEventListener("message", HT), mT.postMessage({
                action: "setDefaultDecoderOptions",
                options: LT.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const kT = new Uint8Array(TT.byteLength);
              kT.set(new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength)), mT.postMessage({
                action: "decode",
                data: kT,
                caps: WT,
                options: UT
              }, [kT.buffer])
            }))
          }))
        }
        if (LT._DecoderModulePromise) {
          const WT = await LT._DecoderModulePromise;
          return LT.DefaultDecoderOptions.isDirty && (LT._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = LT.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((zT, MT) => {
            WT.decode(TT, mT, UT).then((TT => {
              zT(TT)
            })).catch((TT => {
              MT({
                message: TT
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(TT, UT, mT) {
        if ((TT.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, UT), mT && (mT.transcodedFormat = TT.transcodedFormat, mT.isInGammaSpace = TT.isInGammaSpace, mT.hasAlpha = TT.hasAlpha, mT.transcoderName = TT.transcoderName);
        let WT = !0;
        switch (TT.transcodedFormat) {
          case 32856:
            UT.type = 0, UT.format = 5;
            break;
          case 33321:
            UT.type = 0, UT.format = 6;
            break;
          case 33323:
            UT.type = 0, UT.format = 7;
            break;
          default:
            UT.format = TT.transcodedFormat, WT = !1
        }
        if (UT._gammaSpace = TT.isInGammaSpace, UT.generateMipMaps = TT.mipmaps.length > 1, UT.width = TT.mipmaps[0].width, UT.height = TT.mipmaps[0].height, TT.errors) throw new Error("KTX2 container - could not transcode the data. " + TT.errors);
        for (let zT = 0; zT < TT.mipmaps.length; ++zT) {
          const mT = TT.mipmaps[zT];
          if (!mT || !mT.data) throw new Error("KTX2 container - could not transcode one of the image");
          WT ? (UT.width = mT.width, UT.height = mT.height, this._engine._uploadDataToTextureDirectly(UT, mT.data, 0, zT, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(UT, TT.transcodedFormat, mT.width, mT.height, mT.data, 0, zT)
        }
        UT._extension = ".ktx2", UT.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(TT) {
        if (TT.byteLength >= 12) {
          const UT = new Uint8Array(TT.buffer, TT.byteOffset, 12);
          if (171 === UT[0] && 75 === UT[1] && 84 === UT[2] && 88 === UT[3] && 32 === UT[4] && 50 === UT[5] && 48 === UT[6] && 187 === UT[7] && 13 === UT[8] && 10 === UT[9] && 26 === UT[10] && 10 === UT[11]) return !0
        }
        return !1
      }
    }

    function pT(TT) {
      switch (TT) {
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
    LT.URLConfig = {
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
    }, LT.DefaultNumWorkers = LT.GetDefaultNumWorkers(), LT.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(TT) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== TT && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = TT, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(TT) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== TT && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = TT, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(TT) {
        this._forceRGBA !== TT && (this._forceRGBA = TT, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(TT) {
        this._forceR8 !== TT && (this._forceR8 = TT, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(TT) {
        this._forceRG8 !== TT && (this._forceRG8 = TT, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(TT) {
        this._bypassTranscoders !== TT && (this._bypassTranscoders = TT, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const TT = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (TT.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (TT.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (TT.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (TT.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (TT.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (TT.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [gT.BC1_RGB, gT.BC3_RGBA],
            yes: {
              transcodeFormat: gT.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = TT, TT
      }
    };
    class BT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, UT, mT, WT) {
        if (Array.isArray(TT)) return;
        UT._invertVScale = !UT.invertY;
        const MT = UT.eB(),
          gT = new zT(TT, 6),
          nT = pT(gT.glInternalFormat);
        null !== nT ? (UT.format = nT, UT._useSRGBBuffer = MT._getUseSRGBBuffer(!0, !UT.generateMipMaps), UT._gammaSpace = !0) : UT.format = gT.glInternalFormat;
        const HT = gT.numberOfMipmapLevels > 1 && UT.generateMipMaps;
        MT._unpackFlipY(!0), gT.uploadLevels(UT, UT.generateMipMaps), UT.width = gT.pixelWidth, UT.height = gT.pixelHeight, MT._setCubeMapTextureParams(UT, HT, gT.numberOfMipmapLevels - 1), UT.isReady = !0, UT.onLoadedObservable.notifyObservers(UT), UT.onLoadedObservable.clear(), WT && WT()
      }
      loadData(TT, UT, mT, MT) {
        if (zT.IsValid(TT)) {
          UT._invertVScale = !UT.invertY;
          const WT = new zT(TT, 1),
            MT = pT(WT.glInternalFormat);
          null !== MT ? (UT.format = MT, UT._useSRGBBuffer = UT.eB()._getUseSRGBBuffer(!0, !UT.generateMipMaps), UT._gammaSpace = !0) : UT.format = WT.glInternalFormat, mT(WT.pixelWidth, WT.pixelHeight, UT.generateMipMaps, !0, (() => {
            WT.uploadLevels(UT, UT.generateMipMaps)
          }), WT.isInvalid)
        } else if (LT.IsValid(TT)) {
          new LT(UT.eB())._uploadAsync(TT, UT, MT).then((() => {
            mT(UT.width, UT.height, UT.generateMipMaps, !0, (() => {}), !1)
          }), (TT => {
            WT.b.Warn(`Failed to load KTX2 texture data: ${TT.message}`), mT(0, 0, !1, !1, (() => {}), !0)
          }))
        } else WT.b.Error("texture missing KTX identifier"), mT(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  41995: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    class WT {
      constructor(TT) {
        this._pendingActions = new Array, this._workerInfos = TT.map((TT => ({
          workerPromise: Promise.resolve(TT),
          idle: !0
        })))
      }
      dispose() {
        for (const TT of this._workerInfos) TT.workerPromise.then((TT => {
          TT.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(TT) {
        this._executeOnIdleWorker(TT) || this._pendingActions.push(TT)
      }
      _executeOnIdleWorker(TT) {
        for (const UT of this._workerInfos)
          if (UT.idle) return this._execute(UT, TT), !0;
        return !1
      }
      _execute(TT, UT) {
        TT.idle = !1, TT.workerPromise.then((mT => {
          UT(mT, (() => {
            const UT = this._pendingActions.shift();
            UT ? this._execute(TT, UT) : TT.idle = !0
          }))
        }))
      }
    }
    class zT extends WT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.DefaultOptions;
        super([]), this._maxWorkers = TT, this._createWorkerAsync = UT, this._options = mT
      }
      push(TT) {
        if (!this._executeOnIdleWorker(TT))
          if (this._workerInfos.length < this._maxWorkers) {
            const UT = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(UT), this._execute(UT, TT)
          } else this._pendingActions.push(TT)
      }
      _execute(TT, UT) {
        TT.timeoutId && (clearTimeout(TT.timeoutId), delete TT.timeoutId), super._execute(TT, ((mT, WT) => {
          UT(mT, (() => {
            WT(), TT.idle && (TT.timeoutId = setTimeout((() => {
              TT.workerPromise.then((TT => {
                TT.terminate()
              }));
              const UT = this._workerInfos.indexOf(TT); - 1 !== UT && this._workerInfos.splice(UT, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    zT.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);