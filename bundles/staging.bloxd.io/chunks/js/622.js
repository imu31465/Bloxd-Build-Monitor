export const id = 622;
export const ids = [622];
export const modules = {
  44734: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      _KTXTextureLoader: () => kV
    });
    var JV = xV(39870);
    class YV {
      constructor(VV, eV) {
        if (this.data = VV, this.isInvalid = !1, !YV.IsValid(VV)) return this.isInvalid = !0, void JV.b.Error("texture missing KTX identifier");
        const xV = Uint32Array.BYTES_PER_ELEMENT,
          UV = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * xV),
          yV = 67305985 === UV.getUint32(0, !0);
        return this.glType = UV.getUint32(1 * xV, yV), this.glTypeSize = UV.getUint32(2 * xV, yV), this.glFormat = UV.getUint32(3 * xV, yV), this.glInternalFormat = UV.getUint32(4 * xV, yV), this.glBaseInternalFormat = UV.getUint32(5 * xV, yV), this.pixelWidth = UV.getUint32(6 * xV, yV), this.pixelHeight = UV.getUint32(7 * xV, yV), this.pixelDepth = UV.getUint32(8 * xV, yV), this.numberOfArrayElements = UV.getUint32(9 * xV, yV), this.numberOfFaces = UV.getUint32(10 * xV, yV), this.numberOfMipmapLevels = UV.getUint32(11 * xV, yV), this.bytesOfKeyValueData = UV.getUint32(12 * xV, yV), 0 !== this.glType ? (JV.b.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (JV.b.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (JV.b.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== eV ? (JV.b.Error("number of faces expected" + eV + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = YV.COMPRESSED_2D))
      }
      uploadLevels(VV, eV) {
        switch (this.loadType) {
          case YV.COMPRESSED_2D:
            this._upload2DCompressedLevels(VV, eV);
          case YV.TEX_2D:
          case YV.COMPRESSED_3D:
          case YV.TEX_3D:
        }
      }
      _upload2DCompressedLevels(VV, eV) {
        let xV = YV.HEADER_LEN + this.bytesOfKeyValueData,
          JV = this.pixelWidth,
          UV = this.pixelHeight;
        const yV = eV ? this.numberOfMipmapLevels : 1;
        for (let YV = 0; YV < yV; YV++) {
          const eV = new Int32Array(this.data.buffer, this.data.byteOffset + xV, 1)[0];
          xV += 4;
          for (let yV = 0; yV < this.numberOfFaces; yV++) {
            const pV = new Uint8Array(this.data.buffer, this.data.byteOffset + xV, eV);
            VV.sk()._uploadCompressedDataToTextureDirectly(VV, VV.format, JV, UV, pV, yV, YV), xV += eV, xV += 3 - (eV + 3) % 4
          }
          JV = Math.max(1, .5 * JV), UV = Math.max(1, .5 * UV)
        }
      }
      static IsValid(VV) {
        if (VV.byteLength >= 12) {
          const eV = new Uint8Array(VV.buffer, VV.byteOffset, 12);
          if (171 === eV[0] && 75 === eV[1] && 84 === eV[2] && 88 === eV[3] && 32 === eV[4] && 49 === eV[5] && 49 === eV[6] && 187 === eV[7] && 13 === eV[8] && 10 === eV[9] && 26 === eV[10] && 10 === eV[11]) return !0
        }
        return !1
      }
    }
    YV.HEADER_LEN = 64, YV.COMPRESSED_2D = 0, YV.COMPRESSED_3D = 1, YV.TEX_2D = 2, YV.TEX_3D = 3;
    var UV, yV, pV, QV = xV(44740),
      nV = xV(41341);

    function wV(VV, eV) {
      const xV = eV?.jsDecoderModule || KTX2DECODER;
      VV && (VV.wasmBaseUrl && (xV.Transcoder.WasmBaseUrl = VV.wasmBaseUrl), VV.wasmUASTCToASTC && (xV.LiteTranscoder_UASTC_ASTC.WasmModuleURL = VV.wasmUASTCToASTC), VV.wasmUASTCToBC7 && (xV.LiteTranscoder_UASTC_BC7.WasmModuleURL = VV.wasmUASTCToBC7), VV.wasmUASTCToRGBA_UNORM && (xV.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = VV.wasmUASTCToRGBA_UNORM), VV.wasmUASTCToRGBA_SRGB && (xV.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = VV.wasmUASTCToRGBA_SRGB), VV.wasmUASTCToR8_UNORM && (xV.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = VV.wasmUASTCToR8_UNORM), VV.wasmUASTCToRG8_UNORM && (xV.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = VV.wasmUASTCToRG8_UNORM), VV.jsMSCTranscoder && (xV.MSCTranscoder.JSModuleURL = VV.jsMSCTranscoder), VV.wasmMSCTranscoder && (xV.MSCTranscoder.WasmModuleURL = VV.wasmMSCTranscoder), VV.wasmZSTDDecoder && (xV.ZSTDDecoder.WasmModuleURL = VV.wasmZSTDDecoder)), eV && (eV.wasmUASTCToASTC && (xV.LiteTranscoder_UASTC_ASTC.WasmBinary = eV.wasmUASTCToASTC), eV.wasmUASTCToBC7 && (xV.LiteTranscoder_UASTC_BC7.WasmBinary = eV.wasmUASTCToBC7), eV.wasmUASTCToRGBA_UNORM && (xV.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = eV.wasmUASTCToRGBA_UNORM), eV.wasmUASTCToRGBA_SRGB && (xV.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = eV.wasmUASTCToRGBA_SRGB), eV.wasmUASTCToR8_UNORM && (xV.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = eV.wasmUASTCToR8_UNORM), eV.wasmUASTCToRG8_UNORM && (xV.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = eV.wasmUASTCToRG8_UNORM), eV.jsMSCTranscoder && (xV.MSCTranscoder.JSModule = eV.jsMSCTranscoder), eV.wasmMSCTranscoder && (xV.MSCTranscoder.WasmBinary = eV.wasmMSCTranscoder), eV.wasmZSTDDecoder && (xV.ZSTDDecoder.WasmBinary = eV.wasmZSTDDecoder))
    }

    function ZV(VV) {
      let eV;
      "undefined" === typeof VV && "undefined" !== typeof KTX2DECODER && (VV = KTX2DECODER), onmessage = xV => {
        if (xV.data) switch (xV.data.action) {
          case "init": {
            const JV = xV.data.urls;
            JV && (JV.jsDecoderModule && "undefined" === typeof VV && (importScripts(JV.jsDecoderModule), VV = KTX2DECODER), wV(JV)), xV.data.wasmBinaries && wV(void 0, {
              ...xV.data.wasmBinaries,
              jsDecoderModule: VV
            }), eV = new VV.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            VV.KTX2Decoder.DefaultDecoderOptions = xV.data.options;
            break;
          case "decode":
            eV.decode(xV.data.data, xV.data.caps, xV.data.options).then((VV => {
              const eV = [];
              for (let xV = 0; xV < VV.mipmaps.length; ++xV) {
                const JV = VV.mipmaps[xV];
                JV && JV.data && eV.push(JV.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: VV
              }, eV)
            })).catch((VV => {
              postMessage({
                action: "decoded",
                success: !1,
                yZ: VV
              })
            }))
        }
      }
    }! function(VV) {
      VV[VV.ETC1S = 0] = "ETC1S", VV[VV.UASTC4x4 = 1] = "UASTC4x4", VV[VV.RGBA32 = 2] = "RGBA32"
    }(UV || (UV = {})),
    function(VV) {
      VV[VV.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", VV[VV.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", VV[VV.BC7_RGBA = 1] = "BC7_RGBA", VV[VV.BC3_RGBA = 2] = "BC3_RGBA", VV[VV.BC1_RGB = 3] = "BC1_RGB", VV[VV.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", VV[VV.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", VV[VV.ETC2_RGBA = 6] = "ETC2_RGBA", VV[VV.ETC1_RGB = 7] = "ETC1_RGB", VV[VV.RGBA32 = 8] = "RGBA32", VV[VV.R8 = 9] = "R8", VV[VV.RG8 = 10] = "RG8"
    }(yV || (yV = {})),
    function(VV) {
      VV[VV.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", VV[VV.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", VV[VV.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", VV[VV.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", VV[VV.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", VV[VV.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", VV[VV.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", VV[VV.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", VV[VV.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", VV[VV.RGBA8Format = 32856] = "RGBA8Format", VV[VV.R8Format = 33321] = "R8Format", VV[VV.RG8Format = 33323] = "RG8Format"
    }(pV || (pV = {}));
    class vV {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(VV) {
        if (vV._WorkerPoolPromise || vV._DecoderModulePromise) return;
        const eV = {
          wasmBaseUrl: nV.j.ScriptBaseUrl,
          jsDecoderModule: nV.j.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: nV.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: nV.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: nV.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: nV.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: nV.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: nV.j.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: nV.j.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: nV.j.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: nV.j.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        VV && "function" === typeof Worker && "undefined" !== typeof URL ? vV._WorkerPoolPromise = new Promise((xV => {
          const JV = `${wV}(${ZV})()`,
            YV = URL.createObjectURL(new Blob([JV], {
              type: "application/javascript"
            }));
          xV(new QV.c(VV, (async () => await async function(VV, eV, xV) {
            return await new Promise(((JV, YV) => {
              const UV = eV => {
                  VV.removeEventListener("error", UV), VV.removeEventListener("message", yV), YV(eV)
                },
                yV = eV => {
                  "init" === eV.data.action && (VV.removeEventListener("error", UV), VV.removeEventListener("message", yV), JV(VV))
                };
              VV.addEventListener("error", UV), VV.addEventListener("message", yV), VV.postMessage({
                action: "init",
                urls: xV,
                wasmBinaries: eV
              })
            }))
          }(new Worker(YV), void 0, eV))))
        })) : "undefined" === typeof vV._KTX2DecoderModule ? vV._DecoderModulePromise = nV.j.LoadBabylonScriptAsync(eV.jsDecoderModule).then((() => (vV._KTX2DecoderModule = KTX2DECODER, vV._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, vV._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, wV(eV, vV._KTX2DecoderModule), new vV._KTX2DecoderModule.KTX2Decoder))) : (vV._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, vV._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, vV._DecoderModulePromise = Promise.resolve(new vV._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vV.DefaultNumWorkers;
        this._engine = VV;
        const xV = "object" === typeof eV && eV.workerPool || vV.WorkerPool;
        if (xV) vV._WorkerPoolPromise = Promise.resolve(xV);
        else {
          "object" === typeof eV ? vV._KTX2DecoderModule = eV?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (vV._KTX2DecoderModule = KTX2DECODER);
          const VV = "number" === typeof eV ? eV : eV.numWorkers ?? vV.DefaultNumWorkers;
          vV._Initialize(VV)
        }
      }
      async _uploadAsync(VV, eV, xV) {
        const JV = await this._decodeAsync(VV, xV);
        this._createTexture(JV, eV, xV)
      }
      async _decodeAsync(VV, eV) {
        const xV = this._engine.getCaps(),
          JV = {
            astc: !!xV.astc,
            bptc: !!xV.bptc,
            s3tc: !!xV.s3tc,
            pvrtc: !!xV.pvrtc,
            etc2: !!xV.etc2,
            etc1: !!xV.etc1
          };
        if (vV._WorkerPoolPromise) {
          const xV = await vV._WorkerPoolPromise;
          return await new Promise(((YV, UV) => {
            xV.push(((xV, yV) => {
              const pV = VV => {
                  xV.removeEventListener("error", pV), xV.removeEventListener("message", QV), UV(VV), yV()
                },
                QV = VV => {
                  "decoded" === VV.data.action && (xV.removeEventListener("error", pV), xV.removeEventListener("message", QV), VV.data.success ? YV(VV.data.decodedData) : UV({
                    message: VV.data.yZ
                  }), yV())
                };
              xV.addEventListener("error", pV), xV.addEventListener("message", QV), xV.postMessage({
                action: "setDefaultDecoderOptions",
                options: vV.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const nV = new Uint8Array(VV.byteLength);
              nV.set(new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength)), xV.postMessage({
                action: "decode",
                data: nV,
                caps: JV,
                options: eV
              }, [nV.buffer])
            }))
          }))
        }
        if (vV._DecoderModulePromise) {
          const JV = await vV._DecoderModulePromise;
          return vV.DefaultDecoderOptions.isDirty && (vV._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = vV.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((YV, UV) => {
            JV.decode(VV, xV, eV).then((VV => {
              YV(VV)
            })).catch((VV => {
              UV({
                message: VV
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(VV, eV, xV) {
        if ((VV.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, eV), xV && (xV.transcodedFormat = VV.transcodedFormat, xV.isInGammaSpace = VV.isInGammaSpace, xV.hasAlpha = VV.hasAlpha, xV.transcoderName = VV.transcoderName);
        let JV = !0;
        switch (VV.transcodedFormat) {
          case 32856:
            eV.type = 0, eV.format = 5;
            break;
          case 33321:
            eV.type = 0, eV.format = 6;
            break;
          case 33323:
            eV.type = 0, eV.format = 7;
            break;
          default:
            eV.format = VV.transcodedFormat, JV = !1
        }
        if (eV._gammaSpace = VV.isInGammaSpace, eV.generateMipMaps = VV.mipmaps.length > 1, eV.width = VV.mipmaps[0].width, eV.height = VV.mipmaps[0].height, VV.errors) throw new Error("KTX2 container - could not transcode the data. " + VV.errors);
        for (let YV = 0; YV < VV.mipmaps.length; ++YV) {
          const xV = VV.mipmaps[YV];
          if (!xV || !xV.data) throw new Error("KTX2 container - could not transcode one of the image");
          JV ? (eV.width = xV.width, eV.height = xV.height, this._engine._uploadDataToTextureDirectly(eV, xV.data, 0, YV, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(eV, VV.transcodedFormat, xV.width, xV.height, xV.data, 0, YV)
        }
        eV._extension = ".ktx2", eV.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(VV) {
        if (VV.byteLength >= 12) {
          const eV = new Uint8Array(VV.buffer, VV.byteOffset, 12);
          if (171 === eV[0] && 75 === eV[1] && 84 === eV[2] && 88 === eV[3] && 32 === eV[4] && 50 === eV[5] && 48 === eV[6] && 187 === eV[7] && 13 === eV[8] && 10 === eV[9] && 26 === eV[10] && 10 === eV[11]) return !0
        }
        return !1
      }
    }

    function rV(VV) {
      switch (VV) {
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
    vV.URLConfig = {
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
    }, vV.DefaultNumWorkers = vV.GetDefaultNumWorkers(), vV.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(VV) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== VV && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = VV, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(VV) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== VV && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = VV, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(VV) {
        this._forceRGBA !== VV && (this._forceRGBA = VV, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(VV) {
        this._forceR8 !== VV && (this._forceR8 = VV, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(VV) {
        this._forceRG8 !== VV && (this._forceRG8 = VV, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(VV) {
        this._bypassTranscoders !== VV && (this._bypassTranscoders = VV, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const VV = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (VV.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (VV.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (VV.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (VV.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (VV.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (VV.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [yV.BC1_RGB, yV.BC3_RGBA],
            yes: {
              transcodeFormat: yV.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = VV, VV
      }
    };
    class kV {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(VV, eV, xV, JV) {
        if (Array.isArray(VV)) return;
        eV._invertVScale = !eV.invertY;
        const UV = eV.sk(),
          yV = new YV(VV, 6),
          pV = rV(yV.glInternalFormat);
        null !== pV ? (eV.format = pV, eV._useSRGBBuffer = UV._getUseSRGBBuffer(!0, !eV.generateMipMaps), eV._gammaSpace = !0) : eV.format = yV.glInternalFormat;
        const QV = yV.numberOfMipmapLevels > 1 && eV.generateMipMaps;
        UV._unpackFlipY(!0), yV.uploadLevels(eV, eV.generateMipMaps), eV.width = yV.pixelWidth, eV.height = yV.pixelHeight, UV._setCubeMapTextureParams(eV, QV, yV.numberOfMipmapLevels - 1), eV.isReady = !0, eV.onLoadedObservable.notifyObservers(eV), eV.onLoadedObservable.clear(), JV && JV()
      }
      loadData(VV, eV, xV, UV) {
        if (YV.IsValid(VV)) {
          eV._invertVScale = !eV.invertY;
          const JV = new YV(VV, 1),
            UV = rV(JV.glInternalFormat);
          null !== UV ? (eV.format = UV, eV._useSRGBBuffer = eV.sk()._getUseSRGBBuffer(!0, !eV.generateMipMaps), eV._gammaSpace = !0) : eV.format = JV.glInternalFormat, xV(JV.pixelWidth, JV.pixelHeight, eV.generateMipMaps, !0, (() => {
            JV.uploadLevels(eV, eV.generateMipMaps)
          }), JV.isInvalid)
        } else if (vV.IsValid(VV)) {
          new vV(eV.sk())._uploadAsync(VV, eV, UV).then((() => {
            xV(eV.width, eV.height, eV.generateMipMaps, !0, (() => {}), !1)
          }), (VV => {
            JV.b.Warn(`Failed to load KTX2 texture data: ${VV.message}`), xV(0, 0, !1, !1, (() => {}), !0)
          }))
        } else JV.b.Error("texture missing KTX identifier"), xV(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  44740: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV
    });
    class JV {
      constructor(VV) {
        this._pendingActions = new Array, this._workerInfos = VV.map((VV => ({
          workerPromise: Promise.resolve(VV),
          idle: !0
        })))
      }
      dispose() {
        for (const VV of this._workerInfos) VV.workerPromise.then((VV => {
          VV.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(VV) {
        this._executeOnIdleWorker(VV) || this._pendingActions.push(VV)
      }
      _executeOnIdleWorker(VV) {
        for (const eV of this._workerInfos)
          if (eV.idle) return this._execute(eV, VV), !0;
        return !1
      }
      _execute(VV, eV) {
        VV.idle = !1, VV.workerPromise.then((xV => {
          eV(xV, (() => {
            const eV = this._pendingActions.shift();
            eV ? this._execute(VV, eV) : VV.idle = !0
          }))
        }))
      }
    }
    class YV extends JV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YV.DefaultOptions;
        super([]), this._maxWorkers = VV, this._createWorkerAsync = eV, this._options = xV
      }
      push(VV) {
        if (!this._executeOnIdleWorker(VV))
          if (this._workerInfos.length < this._maxWorkers) {
            const eV = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(eV), this._execute(eV, VV)
          } else this._pendingActions.push(VV)
      }
      _execute(VV, eV) {
        VV.timeoutId && (clearTimeout(VV.timeoutId), delete VV.timeoutId), super._execute(VV, ((xV, JV) => {
          eV(xV, (() => {
            JV(), VV.idle && (VV.timeoutId = setTimeout((() => {
              VV.workerPromise.then((VV => {
                VV.terminate()
              }));
              const eV = this._workerInfos.indexOf(VV); - 1 !== eV && this._workerInfos.splice(eV, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    YV.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);