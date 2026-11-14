export const id = 288;
export const ids = [288];
export const modules = {
  39785: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      _KTXTextureLoader: () => mB
    });
    var Vc = nc(37191);
    class Ic {
      constructor(cB, Bc) {
        if (this.data = cB, this.isInvalid = !1, !Ic.IsValid(cB)) return this.isInvalid = !0, void Vc.c.Error("texture missing KTX identifier");
        const nc = Uint32Array.BYTES_PER_ELEMENT,
          rB = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * nc),
          uc = 67305985 === rB.getUint32(0, !0);
        return this.glType = rB.getUint32(1 * nc, uc), this.glTypeSize = rB.getUint32(2 * nc, uc), this.glFormat = rB.getUint32(3 * nc, uc), this.glInternalFormat = rB.getUint32(4 * nc, uc), this.glBaseInternalFormat = rB.getUint32(5 * nc, uc), this.pixelWidth = rB.getUint32(6 * nc, uc), this.pixelHeight = rB.getUint32(7 * nc, uc), this.pixelDepth = rB.getUint32(8 * nc, uc), this.numberOfArrayElements = rB.getUint32(9 * nc, uc), this.numberOfFaces = rB.getUint32(10 * nc, uc), this.numberOfMipmapLevels = rB.getUint32(11 * nc, uc), this.bytesOfKeyValueData = rB.getUint32(12 * nc, uc), 0 !== this.glType ? (Vc.c.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (Vc.c.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (Vc.c.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== Bc ? (Vc.c.Error("number of faces expected" + Bc + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = Ic.COMPRESSED_2D))
      }
      uploadLevels(cB, Bc) {
        switch (this.loadType) {
          case Ic.COMPRESSED_2D:
            this._upload2DCompressedLevels(cB, Bc);
          case Ic.TEX_2D:
          case Ic.COMPRESSED_3D:
          case Ic.TEX_3D:
        }
      }
      _upload2DCompressedLevels(cB, Bc) {
        let nc = Ic.HEADER_LEN + this.bytesOfKeyValueData,
          Vc = this.pixelWidth,
          rB = this.pixelHeight;
        const uc = Bc ? this.numberOfMipmapLevels : 1;
        for (let Ic = 0; Ic < uc; Ic++) {
          const Bc = new Int32Array(this.data.buffer, this.data.byteOffset + nc, 1)[0];
          nc += 4;
          for (let uc = 0; uc < this.numberOfFaces; uc++) {
            const sc = new Uint8Array(this.data.buffer, this.data.byteOffset + nc, Bc);
            cB.RV()._uploadCompressedDataToTextureDirectly(cB, cB.format, Vc, rB, sc, uc, Ic), nc += Bc, nc += 3 - (Bc + 3) % 4
          }
          Vc = Math.max(1, .5 * Vc), rB = Math.max(1, .5 * rB)
        }
      }
      static IsValid(cB) {
        if (cB.byteLength >= 12) {
          const Bc = new Uint8Array(cB.buffer, cB.byteOffset, 12);
          if (171 === Bc[0] && 75 === Bc[1] && 84 === Bc[2] && 88 === Bc[3] && 32 === Bc[4] && 49 === Bc[5] && 49 === Bc[6] && 187 === Bc[7] && 13 === Bc[8] && 10 === Bc[9] && 26 === Bc[10] && 10 === Bc[11]) return !0
        }
        return !1
      }
    }
    Ic.HEADER_LEN = 64, Ic.COMPRESSED_2D = 0, Ic.COMPRESSED_3D = 1, Ic.TEX_2D = 2, Ic.TEX_3D = 3;
    var rB, uc, sc, Mc = nc(39789),
      Pc = nc(38146);

    function qB(cB, Bc) {
      const nc = Bc?.jsDecoderModule || KTX2DECODER;
      cB && (cB.wasmBaseUrl && (nc.Transcoder.WasmBaseUrl = cB.wasmBaseUrl), cB.wasmUASTCToASTC && (nc.LiteTranscoder_UASTC_ASTC.WasmModuleURL = cB.wasmUASTCToASTC), cB.wasmUASTCToBC7 && (nc.LiteTranscoder_UASTC_BC7.WasmModuleURL = cB.wasmUASTCToBC7), cB.wasmUASTCToRGBA_UNORM && (nc.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = cB.wasmUASTCToRGBA_UNORM), cB.wasmUASTCToRGBA_SRGB && (nc.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = cB.wasmUASTCToRGBA_SRGB), cB.wasmUASTCToR8_UNORM && (nc.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = cB.wasmUASTCToR8_UNORM), cB.wasmUASTCToRG8_UNORM && (nc.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = cB.wasmUASTCToRG8_UNORM), cB.jsMSCTranscoder && (nc.MSCTranscoder.JSModuleURL = cB.jsMSCTranscoder), cB.wasmMSCTranscoder && (nc.MSCTranscoder.WasmModuleURL = cB.wasmMSCTranscoder), cB.wasmZSTDDecoder && (nc.ZSTDDecoder.WasmModuleURL = cB.wasmZSTDDecoder)), Bc && (Bc.wasmUASTCToASTC && (nc.LiteTranscoder_UASTC_ASTC.WasmBinary = Bc.wasmUASTCToASTC), Bc.wasmUASTCToBC7 && (nc.LiteTranscoder_UASTC_BC7.WasmBinary = Bc.wasmUASTCToBC7), Bc.wasmUASTCToRGBA_UNORM && (nc.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = Bc.wasmUASTCToRGBA_UNORM), Bc.wasmUASTCToRGBA_SRGB && (nc.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = Bc.wasmUASTCToRGBA_SRGB), Bc.wasmUASTCToR8_UNORM && (nc.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = Bc.wasmUASTCToR8_UNORM), Bc.wasmUASTCToRG8_UNORM && (nc.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = Bc.wasmUASTCToRG8_UNORM), Bc.jsMSCTranscoder && (nc.MSCTranscoder.JSModule = Bc.jsMSCTranscoder), Bc.wasmMSCTranscoder && (nc.MSCTranscoder.WasmBinary = Bc.wasmMSCTranscoder), Bc.wasmZSTDDecoder && (nc.ZSTDDecoder.WasmBinary = Bc.wasmZSTDDecoder))
    }

    function Oc(cB) {
      let Bc;
      "undefined" === typeof cB && "undefined" !== typeof KTX2DECODER && (cB = KTX2DECODER), onmessage = nc => {
        if (nc.data) switch (nc.data.action) {
          case "init": {
            const Vc = nc.data.urls;
            Vc && (Vc.jsDecoderModule && "undefined" === typeof cB && (importScripts(Vc.jsDecoderModule), cB = KTX2DECODER), qB(Vc)), nc.data.wasmBinaries && qB(void 0, {
              ...nc.data.wasmBinaries,
              jsDecoderModule: cB
            }), Bc = new cB.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            cB.KTX2Decoder.DefaultDecoderOptions = nc.data.options;
            break;
          case "decode":
            Bc.decode(nc.data.data, nc.data.caps, nc.data.options).then((cB => {
              const Bc = [];
              for (let nc = 0; nc < cB.mipmaps.length; ++nc) {
                const Vc = cB.mipmaps[nc];
                Vc && Vc.data && Bc.push(Vc.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: cB
              }, Bc)
            })).catch((cB => {
              postMessage({
                action: "decoded",
                success: !1,
                Uu: cB
              })
            }))
        }
      }
    }! function(cB) {
      cB[cB.ETC1S = 0] = "ETC1S", cB[cB.UASTC4x4 = 1] = "UASTC4x4", cB[cB.RGBA32 = 2] = "RGBA32"
    }(rB || (rB = {})),
    function(cB) {
      cB[cB.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", cB[cB.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", cB[cB.BC7_RGBA = 1] = "BC7_RGBA", cB[cB.BC3_RGBA = 2] = "BC3_RGBA", cB[cB.BC1_RGB = 3] = "BC1_RGB", cB[cB.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", cB[cB.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", cB[cB.ETC2_RGBA = 6] = "ETC2_RGBA", cB[cB.ETC1_RGB = 7] = "ETC1_RGB", cB[cB.RGBA32 = 8] = "RGBA32", cB[cB.R8 = 9] = "R8", cB[cB.RG8 = 10] = "RG8"
    }(uc || (uc = {})),
    function(cB) {
      cB[cB.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", cB[cB.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", cB[cB.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", cB[cB.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", cB[cB.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", cB[cB.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", cB[cB.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", cB[cB.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", cB[cB.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", cB[cB.RGBA8Format = 32856] = "RGBA8Format", cB[cB.R8Format = 33321] = "R8Format", cB[cB.RG8Format = 33323] = "RG8Format"
    }(sc || (sc = {}));
    class Tc {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(cB) {
        if (Tc._WorkerPoolPromise || Tc._DecoderModulePromise) return;
        const Bc = {
          wasmBaseUrl: Pc.g.ScriptBaseUrl,
          jsDecoderModule: Pc.g.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Pc.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Pc.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Pc.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Pc.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Pc.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Pc.g.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Pc.g.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Pc.g.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Pc.g.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        cB && "function" === typeof Worker && "undefined" !== typeof URL ? Tc._WorkerPoolPromise = new Promise((nc => {
          const Vc = `${qB}(${Oc})()`,
            Ic = URL.createObjectURL(new Blob([Vc], {
              type: "application/javascript"
            }));
          nc(new Mc.c(cB, (async () => await async function(cB, Bc, nc) {
            return await new Promise(((Vc, Ic) => {
              const rB = Bc => {
                  cB.removeEventListener("error", rB), cB.removeEventListener("message", uc), Ic(Bc)
                },
                uc = Bc => {
                  "init" === Bc.data.action && (cB.removeEventListener("error", rB), cB.removeEventListener("message", uc), Vc(cB))
                };
              cB.addEventListener("error", rB), cB.addEventListener("message", uc), cB.postMessage({
                action: "init",
                urls: nc,
                wasmBinaries: Bc
              })
            }))
          }(new Worker(Ic), void 0, Bc))))
        })) : "undefined" === typeof Tc._KTX2DecoderModule ? Tc._DecoderModulePromise = Pc.g.LoadBabylonScriptAsync(Bc.jsDecoderModule).then((() => (Tc._KTX2DecoderModule = KTX2DECODER, Tc._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Tc._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, qB(Bc, Tc._KTX2DecoderModule), new Tc._KTX2DecoderModule.KTX2Decoder))) : (Tc._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, Tc._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, Tc._DecoderModulePromise = Promise.resolve(new Tc._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tc.DefaultNumWorkers;
        this._engine = cB;
        const nc = "object" === typeof Bc && Bc.workerPool || Tc.WorkerPool;
        if (nc) Tc._WorkerPoolPromise = Promise.resolve(nc);
        else {
          "object" === typeof Bc ? Tc._KTX2DecoderModule = Bc?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (Tc._KTX2DecoderModule = KTX2DECODER);
          const cB = "number" === typeof Bc ? Bc : Bc.numWorkers ?? Tc.DefaultNumWorkers;
          Tc._Initialize(cB)
        }
      }
      async _uploadAsync(cB, Bc, nc) {
        const Vc = await this._decodeAsync(cB, nc);
        this._createTexture(Vc, Bc, nc)
      }
      async _decodeAsync(cB, Bc) {
        const nc = this._engine.getCaps(),
          Vc = {
            astc: !!nc.astc,
            bptc: !!nc.bptc,
            s3tc: !!nc.s3tc,
            pvrtc: !!nc.pvrtc,
            etc2: !!nc.etc2,
            etc1: !!nc.etc1
          };
        if (Tc._WorkerPoolPromise) {
          const nc = await Tc._WorkerPoolPromise;
          return await new Promise(((Ic, rB) => {
            nc.push(((nc, uc) => {
              const sc = cB => {
                  nc.removeEventListener("error", sc), nc.removeEventListener("message", Mc), rB(cB), uc()
                },
                Mc = cB => {
                  "decoded" === cB.data.action && (nc.removeEventListener("error", sc), nc.removeEventListener("message", Mc), cB.data.success ? Ic(cB.data.decodedData) : rB({
                    message: cB.data.Uu
                  }), uc())
                };
              nc.addEventListener("error", sc), nc.addEventListener("message", Mc), nc.postMessage({
                action: "setDefaultDecoderOptions",
                options: Tc.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Pc = new Uint8Array(cB.byteLength);
              Pc.set(new Uint8Array(cB.buffer, cB.byteOffset, cB.byteLength)), nc.postMessage({
                action: "decode",
                data: Pc,
                caps: Vc,
                options: Bc
              }, [Pc.buffer])
            }))
          }))
        }
        if (Tc._DecoderModulePromise) {
          const Vc = await Tc._DecoderModulePromise;
          return Tc.DefaultDecoderOptions.isDirty && (Tc._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = Tc.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((Ic, rB) => {
            Vc.decode(cB, nc, Bc).then((cB => {
              Ic(cB)
            })).catch((cB => {
              rB({
                message: cB
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(cB, Bc, nc) {
        if ((cB.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, Bc), nc && (nc.transcodedFormat = cB.transcodedFormat, nc.isInGammaSpace = cB.isInGammaSpace, nc.hasAlpha = cB.hasAlpha, nc.transcoderName = cB.transcoderName);
        let Vc = !0;
        switch (cB.transcodedFormat) {
          case 32856:
            Bc.type = 0, Bc.format = 5;
            break;
          case 33321:
            Bc.type = 0, Bc.format = 6;
            break;
          case 33323:
            Bc.type = 0, Bc.format = 7;
            break;
          default:
            Bc.format = cB.transcodedFormat, Vc = !1
        }
        if (Bc._gammaSpace = cB.isInGammaSpace, Bc.generateMipMaps = cB.mipmaps.length > 1, Bc.width = cB.mipmaps[0].width, Bc.height = cB.mipmaps[0].height, cB.errors) throw new Error("KTX2 container - could not transcode the data. " + cB.errors);
        for (let Ic = 0; Ic < cB.mipmaps.length; ++Ic) {
          const nc = cB.mipmaps[Ic];
          if (!nc || !nc.data) throw new Error("KTX2 container - could not transcode one of the image");
          Vc ? (Bc.width = nc.width, Bc.height = nc.height, this._engine._uploadDataToTextureDirectly(Bc, nc.data, 0, Ic, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(Bc, cB.transcodedFormat, nc.width, nc.height, nc.data, 0, Ic)
        }
        Bc._extension = ".ktx2", Bc.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(cB) {
        if (cB.byteLength >= 12) {
          const Bc = new Uint8Array(cB.buffer, cB.byteOffset, 12);
          if (171 === Bc[0] && 75 === Bc[1] && 84 === Bc[2] && 88 === Bc[3] && 32 === Bc[4] && 50 === Bc[5] && 48 === Bc[6] && 187 === Bc[7] && 13 === Bc[8] && 10 === Bc[9] && 26 === Bc[10] && 10 === Bc[11]) return !0
        }
        return !1
      }
    }

    function fc(cB) {
      switch (cB) {
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
    Tc.URLConfig = {
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
    }, Tc.DefaultNumWorkers = Tc.GetDefaultNumWorkers(), Tc.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(cB) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== cB && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = cB, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(cB) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== cB && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = cB, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(cB) {
        this._forceRGBA !== cB && (this._forceRGBA = cB, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(cB) {
        this._forceR8 !== cB && (this._forceR8 = cB, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(cB) {
        this._forceRG8 !== cB && (this._forceRG8 = cB, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(cB) {
        this._bypassTranscoders !== cB && (this._bypassTranscoders = cB, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const cB = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (cB.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (cB.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (cB.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (cB.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (cB.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (cB.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [uc.BC1_RGB, uc.BC3_RGBA],
            yes: {
              transcodeFormat: uc.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = cB, cB
      }
    };
    class mB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(cB, Bc, nc, Vc) {
        if (Array.isArray(cB)) return;
        Bc._invertVScale = !Bc.invertY;
        const rB = Bc.RV(),
          uc = new Ic(cB, 6),
          sc = fc(uc.glInternalFormat);
        null !== sc ? (Bc.format = sc, Bc._useSRGBBuffer = rB._getUseSRGBBuffer(!0, !Bc.generateMipMaps), Bc._gammaSpace = !0) : Bc.format = uc.glInternalFormat;
        const Mc = uc.numberOfMipmapLevels > 1 && Bc.generateMipMaps;
        rB._unpackFlipY(!0), uc.uploadLevels(Bc, Bc.generateMipMaps), Bc.width = uc.pixelWidth, Bc.height = uc.pixelHeight, rB._setCubeMapTextureParams(Bc, Mc, uc.numberOfMipmapLevels - 1), Bc.isReady = !0, Bc.onLoadedObservable.notifyObservers(Bc), Bc.onLoadedObservable.clear(), Vc && Vc()
      }
      loadData(cB, Bc, nc, rB) {
        if (Ic.IsValid(cB)) {
          Bc._invertVScale = !Bc.invertY;
          const Vc = new Ic(cB, 1),
            rB = fc(Vc.glInternalFormat);
          null !== rB ? (Bc.format = rB, Bc._useSRGBBuffer = Bc.RV()._getUseSRGBBuffer(!0, !Bc.generateMipMaps), Bc._gammaSpace = !0) : Bc.format = Vc.glInternalFormat, nc(Vc.pixelWidth, Vc.pixelHeight, Bc.generateMipMaps, !0, (() => {
            Vc.uploadLevels(Bc, Bc.generateMipMaps)
          }), Vc.isInvalid)
        } else if (Tc.IsValid(cB)) {
          new Tc(Bc.RV())._uploadAsync(cB, Bc, rB).then((() => {
            nc(Bc.width, Bc.height, Bc.generateMipMaps, !0, (() => {}), !1)
          }), (cB => {
            Vc.c.Warn(`Failed to load KTX2 texture data: ${cB.message}`), nc(0, 0, !1, !1, (() => {}), !0)
          }))
        } else Vc.c.Error("texture missing KTX identifier"), nc(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  39789: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    class Vc {
      constructor(cB) {
        this._pendingActions = new Array, this._workerInfos = cB.map((cB => ({
          workerPromise: Promise.resolve(cB),
          idle: !0
        })))
      }
      dispose() {
        for (const cB of this._workerInfos) cB.workerPromise.then((cB => {
          cB.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(cB) {
        this._executeOnIdleWorker(cB) || this._pendingActions.push(cB)
      }
      _executeOnIdleWorker(cB) {
        for (const Bc of this._workerInfos)
          if (Bc.idle) return this._execute(Bc, cB), !0;
        return !1
      }
      _execute(cB, Bc) {
        cB.idle = !1, cB.workerPromise.then((nc => {
          Bc(nc, (() => {
            const Bc = this._pendingActions.shift();
            Bc ? this._execute(cB, Bc) : cB.idle = !0
          }))
        }))
      }
    }
    class Ic extends Vc {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ic.DefaultOptions;
        super([]), this._maxWorkers = cB, this._createWorkerAsync = Bc, this._options = nc
      }
      push(cB) {
        if (!this._executeOnIdleWorker(cB))
          if (this._workerInfos.length < this._maxWorkers) {
            const Bc = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Bc), this._execute(Bc, cB)
          } else this._pendingActions.push(cB)
      }
      _execute(cB, Bc) {
        cB.timeoutId && (clearTimeout(cB.timeoutId), delete cB.timeoutId), super._execute(cB, ((nc, Vc) => {
          Bc(nc, (() => {
            Vc(), cB.idle && (cB.timeoutId = setTimeout((() => {
              cB.workerPromise.then((cB => {
                cB.terminate()
              }));
              const Bc = this._workerInfos.indexOf(cB); - 1 !== Bc && this._workerInfos.splice(Bc, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Ic.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);