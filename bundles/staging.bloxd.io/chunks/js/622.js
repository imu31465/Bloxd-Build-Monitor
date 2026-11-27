export const id = 622;
export const ids = [622];
export const modules = {
  45046: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      _KTXTextureLoader: () => fe
    });
    var ye = He(39467);
    class be {
      constructor(ee, ie) {
        if (this.data = ee, this.isInvalid = !1, !be.IsValid(ee)) return this.isInvalid = !0, void ye.e.Error("texture missing KTX identifier");
        const He = Uint32Array.BYTES_PER_ELEMENT,
          Me = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * He),
          Ke = 67305985 === Me.getUint32(0, !0);
        return this.glType = Me.getUint32(1 * He, Ke), this.glTypeSize = Me.getUint32(2 * He, Ke), this.glFormat = Me.getUint32(3 * He, Ke), this.glInternalFormat = Me.getUint32(4 * He, Ke), this.glBaseInternalFormat = Me.getUint32(5 * He, Ke), this.pixelWidth = Me.getUint32(6 * He, Ke), this.pixelHeight = Me.getUint32(7 * He, Ke), this.pixelDepth = Me.getUint32(8 * He, Ke), this.numberOfArrayElements = Me.getUint32(9 * He, Ke), this.numberOfFaces = Me.getUint32(10 * He, Ke), this.numberOfMipmapLevels = Me.getUint32(11 * He, Ke), this.bytesOfKeyValueData = Me.getUint32(12 * He, Ke), 0 !== this.glType ? (ye.e.Error("only compressed formats currently supported"), void(this.isInvalid = !0)) : (this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels), 0 === this.pixelHeight || 0 !== this.pixelDepth ? (ye.e.Error("only 2D textures currently supported"), void(this.isInvalid = !0)) : 0 !== this.numberOfArrayElements ? (ye.e.Error("texture arrays not currently supported"), void(this.isInvalid = !0)) : this.numberOfFaces !== ie ? (ye.e.Error("number of faces expected" + ie + ", but found " + this.numberOfFaces), void(this.isInvalid = !0)) : void(this.loadType = be.COMPRESSED_2D))
      }
      uploadLevels(ee, ie) {
        switch (this.loadType) {
          case be.COMPRESSED_2D:
            this._upload2DCompressedLevels(ee, ie);
          case be.TEX_2D:
          case be.COMPRESSED_3D:
          case be.TEX_3D:
        }
      }
      _upload2DCompressedLevels(ee, ie) {
        let He = be.HEADER_LEN + this.bytesOfKeyValueData,
          ye = this.pixelWidth,
          Me = this.pixelHeight;
        const Ke = ie ? this.numberOfMipmapLevels : 1;
        for (let be = 0; be < Ke; be++) {
          const ie = new Int32Array(this.data.buffer, this.data.byteOffset + He, 1)[0];
          He += 4;
          for (let Ke = 0; Ke < this.numberOfFaces; Ke++) {
            const Ue = new Uint8Array(this.data.buffer, this.data.byteOffset + He, ie);
            ee.Nf()._uploadCompressedDataToTextureDirectly(ee, ee.format, ye, Me, Ue, Ke, be), He += ie, He += 3 - (ie + 3) % 4
          }
          ye = Math.max(1, .5 * ye), Me = Math.max(1, .5 * Me)
        }
      }
      static IsValid(ee) {
        if (ee.byteLength >= 12) {
          const ie = new Uint8Array(ee.buffer, ee.byteOffset, 12);
          if (171 === ie[0] && 75 === ie[1] && 84 === ie[2] && 88 === ie[3] && 32 === ie[4] && 49 === ie[5] && 49 === ie[6] && 187 === ie[7] && 13 === ie[8] && 10 === ie[9] && 26 === ie[10] && 10 === ie[11]) return !0
        }
        return !1
      }
    }
    be.HEADER_LEN = 64, be.COMPRESSED_2D = 0, be.COMPRESSED_3D = 1, be.TEX_2D = 2, be.TEX_3D = 3;
    var Me, Ke, Ue, Fe = He(45055),
      Je = He(41203);

    function oe(ee, ie) {
      const He = ie?.jsDecoderModule || KTX2DECODER;
      ee && (ee.wasmBaseUrl && (He.Transcoder.WasmBaseUrl = ee.wasmBaseUrl), ee.wasmUASTCToASTC && (He.LiteTranscoder_UASTC_ASTC.WasmModuleURL = ee.wasmUASTCToASTC), ee.wasmUASTCToBC7 && (He.LiteTranscoder_UASTC_BC7.WasmModuleURL = ee.wasmUASTCToBC7), ee.wasmUASTCToRGBA_UNORM && (He.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL = ee.wasmUASTCToRGBA_UNORM), ee.wasmUASTCToRGBA_SRGB && (He.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL = ee.wasmUASTCToRGBA_SRGB), ee.wasmUASTCToR8_UNORM && (He.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL = ee.wasmUASTCToR8_UNORM), ee.wasmUASTCToRG8_UNORM && (He.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL = ee.wasmUASTCToRG8_UNORM), ee.jsMSCTranscoder && (He.MSCTranscoder.JSModuleURL = ee.jsMSCTranscoder), ee.wasmMSCTranscoder && (He.MSCTranscoder.WasmModuleURL = ee.wasmMSCTranscoder), ee.wasmZSTDDecoder && (He.ZSTDDecoder.WasmModuleURL = ee.wasmZSTDDecoder)), ie && (ie.wasmUASTCToASTC && (He.LiteTranscoder_UASTC_ASTC.WasmBinary = ie.wasmUASTCToASTC), ie.wasmUASTCToBC7 && (He.LiteTranscoder_UASTC_BC7.WasmBinary = ie.wasmUASTCToBC7), ie.wasmUASTCToRGBA_UNORM && (He.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary = ie.wasmUASTCToRGBA_UNORM), ie.wasmUASTCToRGBA_SRGB && (He.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary = ie.wasmUASTCToRGBA_SRGB), ie.wasmUASTCToR8_UNORM && (He.LiteTranscoder_UASTC_R8_UNORM.WasmBinary = ie.wasmUASTCToR8_UNORM), ie.wasmUASTCToRG8_UNORM && (He.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary = ie.wasmUASTCToRG8_UNORM), ie.jsMSCTranscoder && (He.MSCTranscoder.JSModule = ie.jsMSCTranscoder), ie.wasmMSCTranscoder && (He.MSCTranscoder.WasmBinary = ie.wasmMSCTranscoder), ie.wasmZSTDDecoder && (He.ZSTDDecoder.WasmBinary = ie.wasmZSTDDecoder))
    }

    function Re(ee) {
      let ie;
      "undefined" === typeof ee && "undefined" !== typeof KTX2DECODER && (ee = KTX2DECODER), onmessage = He => {
        if (He.data) switch (He.data.action) {
          case "init": {
            const ye = He.data.urls;
            ye && (ye.jsDecoderModule && "undefined" === typeof ee && (importScripts(ye.jsDecoderModule), ee = KTX2DECODER), oe(ye)), He.data.wasmBinaries && oe(void 0, {
              ...He.data.wasmBinaries,
              jsDecoderModule: ee
            }), ie = new ee.KTX2Decoder, postMessage({
              action: "init"
            });
            break
          }
          case "setDefaultDecoderOptions":
            ee.KTX2Decoder.DefaultDecoderOptions = He.data.options;
            break;
          case "decode":
            ie.decode(He.data.data, He.data.caps, He.data.options).then((ee => {
              const ie = [];
              for (let He = 0; He < ee.mipmaps.length; ++He) {
                const ye = ee.mipmaps[He];
                ye && ye.data && ie.push(ye.data.buffer)
              }
              postMessage({
                action: "decoded",
                success: !0,
                decodedData: ee
              }, ie)
            })).catch((ee => {
              postMessage({
                action: "decoded",
                success: !1,
                nF: ee
              })
            }))
        }
      }
    }! function(ee) {
      ee[ee.ETC1S = 0] = "ETC1S", ee[ee.UASTC4x4 = 1] = "UASTC4x4", ee[ee.RGBA32 = 2] = "RGBA32"
    }(Me || (Me = {})),
    function(ee) {
      ee[ee.ASTC_4X4_RGBA = 0] = "ASTC_4X4_RGBA", ee[ee.ASTC_4x4_RGBA = 0] = "ASTC_4x4_RGBA", ee[ee.BC7_RGBA = 1] = "BC7_RGBA", ee[ee.BC3_RGBA = 2] = "BC3_RGBA", ee[ee.BC1_RGB = 3] = "BC1_RGB", ee[ee.PVRTC1_4_RGBA = 4] = "PVRTC1_4_RGBA", ee[ee.PVRTC1_4_RGB = 5] = "PVRTC1_4_RGB", ee[ee.ETC2_RGBA = 6] = "ETC2_RGBA", ee[ee.ETC1_RGB = 7] = "ETC1_RGB", ee[ee.RGBA32 = 8] = "RGBA32", ee[ee.R8 = 9] = "R8", ee[ee.RG8 = 10] = "RG8"
    }(Ke || (Ke = {})),
    function(ee) {
      ee[ee.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", ee[ee.COMPRESSED_RGBA_ASTC_4X4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR", ee[ee.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", ee[ee.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", ee[ee.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", ee[ee.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", ee[ee.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", ee[ee.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", ee[ee.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", ee[ee.RGBA8Format = 32856] = "RGBA8Format", ee[ee.R8Format = 33321] = "R8Format", ee[ee.RG8Format = 33323] = "RG8Format"
    }(Ue || (Ue = {}));
    class ke {
      static GetDefaultNumWorkers() {
        return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1
      }
      static _Initialize(ee) {
        if (ke._WorkerPoolPromise || ke._DecoderModulePromise) return;
        const ie = {
          wasmBaseUrl: Je.h.ScriptBaseUrl,
          jsDecoderModule: Je.h.GetBabylonScriptURL(this.URLConfig.jsDecoderModule, !0),
          wasmUASTCToASTC: Je.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC, !0),
          wasmUASTCToBC7: Je.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7, !0),
          wasmUASTCToRGBA_UNORM: Je.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM, !0),
          wasmUASTCToRGBA_SRGB: Je.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB, !0),
          wasmUASTCToR8_UNORM: Je.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM, !0),
          wasmUASTCToRG8_UNORM: Je.h.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM, !0),
          jsMSCTranscoder: Je.h.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder, !0),
          wasmMSCTranscoder: Je.h.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder, !0),
          wasmZSTDDecoder: Je.h.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder, !0)
        };
        ee && "function" === typeof Worker && "undefined" !== typeof URL ? ke._WorkerPoolPromise = new Promise((He => {
          const ye = `${oe}(${Re})()`,
            be = URL.createObjectURL(new Blob([ye], {
              type: "application/javascript"
            }));
          He(new Fe.c(ee, (async () => await async function(ee, ie, He) {
            return await new Promise(((ye, be) => {
              const Me = ie => {
                  ee.removeEventListener("error", Me), ee.removeEventListener("message", Ke), be(ie)
                },
                Ke = ie => {
                  "init" === ie.data.action && (ee.removeEventListener("error", Me), ee.removeEventListener("message", Ke), ye(ee))
                };
              ee.addEventListener("error", Me), ee.addEventListener("message", Ke), ee.postMessage({
                action: "init",
                urls: He,
                wasmBinaries: ie
              })
            }))
          }(new Worker(be), void 0, ie))))
        })) : "undefined" === typeof ke._KTX2DecoderModule ? ke._DecoderModulePromise = Je.h.LoadBabylonScriptAsync(ie.jsDecoderModule).then((() => (ke._KTX2DecoderModule = KTX2DECODER, ke._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, ke._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, oe(ie, ke._KTX2DecoderModule), new ke._KTX2DecoderModule.KTX2Decoder))) : (ke._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread = !1, ke._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread = !0, ke._DecoderModulePromise = Promise.resolve(new ke._KTX2DecoderModule.KTX2Decoder))
      }
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ke.DefaultNumWorkers;
        this._engine = ee;
        const He = "object" === typeof ie && ie.workerPool || ke.WorkerPool;
        if (He) ke._WorkerPoolPromise = Promise.resolve(He);
        else {
          "object" === typeof ie ? ke._KTX2DecoderModule = ie?.binariesAndModulesContainer?.jsDecoderModule : "undefined" !== typeof KTX2DECODER && (ke._KTX2DecoderModule = KTX2DECODER);
          const ee = "number" === typeof ie ? ie : ie.numWorkers ?? ke.DefaultNumWorkers;
          ke._Initialize(ee)
        }
      }
      async _uploadAsync(ee, ie, He) {
        const ye = await this._decodeAsync(ee, He);
        this._createTexture(ye, ie, He)
      }
      async _decodeAsync(ee, ie) {
        const He = this._engine.getCaps(),
          ye = {
            astc: !!He.astc,
            bptc: !!He.bptc,
            s3tc: !!He.s3tc,
            pvrtc: !!He.pvrtc,
            etc2: !!He.etc2,
            etc1: !!He.etc1
          };
        if (ke._WorkerPoolPromise) {
          const He = await ke._WorkerPoolPromise;
          return await new Promise(((be, Me) => {
            He.push(((He, Ke) => {
              const Ue = ee => {
                  He.removeEventListener("error", Ue), He.removeEventListener("message", Fe), Me(ee), Ke()
                },
                Fe = ee => {
                  "decoded" === ee.data.action && (He.removeEventListener("error", Ue), He.removeEventListener("message", Fe), ee.data.success ? be(ee.data.decodedData) : Me({
                    message: ee.data.nF
                  }), Ke())
                };
              He.addEventListener("error", Ue), He.addEventListener("message", Fe), He.postMessage({
                action: "setDefaultDecoderOptions",
                options: ke.DefaultDecoderOptions._getKTX2DecoderOptions()
              });
              const Je = new Uint8Array(ee.byteLength);
              Je.set(new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength)), He.postMessage({
                action: "decode",
                data: Je,
                caps: ye,
                options: ie
              }, [Je.buffer])
            }))
          }))
        }
        if (ke._DecoderModulePromise) {
          const ye = await ke._DecoderModulePromise;
          return ke.DefaultDecoderOptions.isDirty && (ke._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = ke.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((be, Me) => {
            ye.decode(ee, He, ie).then((ee => {
              be(ee)
            })).catch((ee => {
              Me({
                message: ee
              })
            }))
          }))
        }
        throw new Error("KTX2 decoder module is not available")
      }
      _createTexture(ee, ie, He) {
        if ((ee.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
        this._engine._bindTextureDirectly(3553, ie), He && (He.transcodedFormat = ee.transcodedFormat, He.isInGammaSpace = ee.isInGammaSpace, He.hasAlpha = ee.hasAlpha, He.transcoderName = ee.transcoderName);
        let ye = !0;
        switch (ee.transcodedFormat) {
          case 32856:
            ie.type = 0, ie.format = 5;
            break;
          case 33321:
            ie.type = 0, ie.format = 6;
            break;
          case 33323:
            ie.type = 0, ie.format = 7;
            break;
          default:
            ie.format = ee.transcodedFormat, ye = !1
        }
        if (ie._gammaSpace = ee.isInGammaSpace, ie.generateMipMaps = ee.mipmaps.length > 1, ie.width = ee.mipmaps[0].width, ie.height = ee.mipmaps[0].height, ee.errors) throw new Error("KTX2 container - could not transcode the data. " + ee.errors);
        for (let be = 0; be < ee.mipmaps.length; ++be) {
          const He = ee.mipmaps[be];
          if (!He || !He.data) throw new Error("KTX2 container - could not transcode one of the image");
          ye ? (ie.width = He.width, ie.height = He.height, this._engine._uploadDataToTextureDirectly(ie, He.data, 0, be, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(ie, ee.transcodedFormat, He.width, He.height, He.data, 0, be)
        }
        ie._extension = ".ktx2", ie.isReady = !0, this._engine._bindTextureDirectly(3553, null)
      }
      static IsValid(ee) {
        if (ee.byteLength >= 12) {
          const ie = new Uint8Array(ee.buffer, ee.byteOffset, 12);
          if (171 === ie[0] && 75 === ie[1] && 84 === ie[2] && 88 === ie[3] && 32 === ie[4] && 50 === ie[5] && 48 === ie[6] && 187 === ie[7] && 13 === ie[8] && 10 === ie[9] && 26 === ie[10] && 10 === ie[11]) return !0
        }
        return !1
      }
    }

    function qe(ee) {
      switch (ee) {
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
    ke.URLConfig = {
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
    }, ke.DefaultNumWorkers = ke.GetDefaultNumWorkers(), ke.DefaultDecoderOptions = new class {
      constructor() {
        this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
      }
      get isDirty() {
        return this._isDirty
      }
      get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
        return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
      }
      set useRGBAIfASTCBC7NotAvailableWhenUASTC(ee) {
        this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== ee && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = ee, this._isDirty = !0)
      }
      get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
        return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
      }
      set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(ee) {
        this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== ee && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = ee, this._isDirty = !0)
      }
      get forceRGBA() {
        return this._forceRGBA
      }
      set forceRGBA(ee) {
        this._forceRGBA !== ee && (this._forceRGBA = ee, this._isDirty = !0)
      }
      get forceR8() {
        return this._forceR8
      }
      set forceR8(ee) {
        this._forceR8 !== ee && (this._forceR8 = ee, this._isDirty = !0)
      }
      get forceRG8() {
        return this._forceRG8
      }
      set forceRG8(ee) {
        this._forceRG8 !== ee && (this._forceRG8 = ee, this._isDirty = !0)
      }
      get bypassTranscoders() {
        return this._bypassTranscoders
      }
      set bypassTranscoders(ee) {
        this._bypassTranscoders !== ee && (this._bypassTranscoders = ee, this._isDirty = !0)
      }
      _getKTX2DecoderOptions() {
        if (!this._isDirty) return this._ktx2DecoderOptions;
        this._isDirty = !1;
        const ee = {};
        return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (ee.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (ee.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (ee.forceR8 = this._forceR8), void 0 !== this._forceRG8 && (ee.forceRG8 = this._forceRG8), void 0 !== this._bypassTranscoders && (ee.bypassTranscoders = this._bypassTranscoders), this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC && (ee.transcodeFormatDecisionTree = {
          UASTC: {
            transcodeFormat: [Ke.BC1_RGB, Ke.BC3_RGBA],
            yes: {
              transcodeFormat: Ke.RGBA32,
              engineFormat: 32856,
              roundToMultiple4: !1
            }
          }
        }), this._ktx2DecoderOptions = ee, ee
      }
    };
    class fe {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(ee, ie, He, ye) {
        if (Array.isArray(ee)) return;
        ie._invertVScale = !ie.invertY;
        const Me = ie.Nf(),
          Ke = new be(ee, 6),
          Ue = qe(Ke.glInternalFormat);
        null !== Ue ? (ie.format = Ue, ie._useSRGBBuffer = Me._getUseSRGBBuffer(!0, !ie.generateMipMaps), ie._gammaSpace = !0) : ie.format = Ke.glInternalFormat;
        const Fe = Ke.numberOfMipmapLevels > 1 && ie.generateMipMaps;
        Me._unpackFlipY(!0), Ke.uploadLevels(ie, ie.generateMipMaps), ie.width = Ke.pixelWidth, ie.height = Ke.pixelHeight, Me._setCubeMapTextureParams(ie, Fe, Ke.numberOfMipmapLevels - 1), ie.isReady = !0, ie.onLoadedObservable.notifyObservers(ie), ie.onLoadedObservable.clear(), ye && ye()
      }
      loadData(ee, ie, He, Me) {
        if (be.IsValid(ee)) {
          ie._invertVScale = !ie.invertY;
          const ye = new be(ee, 1),
            Me = qe(ye.glInternalFormat);
          null !== Me ? (ie.format = Me, ie._useSRGBBuffer = ie.Nf()._getUseSRGBBuffer(!0, !ie.generateMipMaps), ie._gammaSpace = !0) : ie.format = ye.glInternalFormat, He(ye.pixelWidth, ye.pixelHeight, ie.generateMipMaps, !0, (() => {
            ye.uploadLevels(ie, ie.generateMipMaps)
          }), ye.isInvalid)
        } else if (ke.IsValid(ee)) {
          new ke(ie.Nf())._uploadAsync(ee, ie, Me).then((() => {
            He(ie.width, ie.height, ie.generateMipMaps, !0, (() => {}), !1)
          }), (ee => {
            ye.e.Warn(`Failed to load KTX2 texture data: ${ee.message}`), He(0, 0, !1, !1, (() => {}), !0)
          }))
        } else ye.e.Error("texture missing KTX identifier"), He(0, 0, !1, !1, (() => {}), !0)
      }
    }
  },
  45055: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    class ye {
      constructor(ee) {
        this._pendingActions = new Array, this._workerInfos = ee.map((ee => ({
          workerPromise: Promise.resolve(ee),
          idle: !0
        })))
      }
      dispose() {
        for (const ee of this._workerInfos) ee.workerPromise.then((ee => {
          ee.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(ee) {
        this._executeOnIdleWorker(ee) || this._pendingActions.push(ee)
      }
      _executeOnIdleWorker(ee) {
        for (const ie of this._workerInfos)
          if (ie.idle) return this._execute(ie, ee), !0;
        return !1
      }
      _execute(ee, ie) {
        ee.idle = !1, ee.workerPromise.then((He => {
          ie(He, (() => {
            const ie = this._pendingActions.shift();
            ie ? this._execute(ee, ie) : ee.idle = !0
          }))
        }))
      }
    }
    class be extends ye {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : be.DefaultOptions;
        super([]), this._maxWorkers = ee, this._createWorkerAsync = ie, this._options = He
      }
      push(ee) {
        if (!this._executeOnIdleWorker(ee))
          if (this._workerInfos.length < this._maxWorkers) {
            const ie = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(ie), this._execute(ie, ee)
          } else this._pendingActions.push(ee)
      }
      _execute(ee, ie) {
        ee.timeoutId && (clearTimeout(ee.timeoutId), delete ee.timeoutId), super._execute(ee, ((He, ye) => {
          ie(He, (() => {
            ye(), ee.idle && (ee.timeoutId = setTimeout((() => {
              ee.workerPromise.then((ee => {
                ee.terminate()
              }));
              const ie = this._workerInfos.indexOf(ee); - 1 !== ie && this._workerInfos.splice(ie, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    be.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);