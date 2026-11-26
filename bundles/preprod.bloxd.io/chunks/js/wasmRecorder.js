export const id = 76;
export const ids = [76];
export const modules = {
  64327: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/bloxd_wasm_recorder_bg.dbb35e7bf5f31337cf1e.wasm"
  },
  64318: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      BloxdRecorderWasmError: () => cH,
      RECORDER_MODULE_ID: () => KH,
      loadRecorderModule: () => gH,
      markRecorderTrapped: () => RH,
      prefetchRecorderModule: () => NH,
      recorderMemoryBytes: () => nH,
      unloadRecorderModule: () => jH
    });
    var AH = {};
    LH.r(AH), LH.d(AH, {
      LhH: () => rH,
      atH: () => IH,
      qt: () => SH,
      default: () => oH,
      initSync: () => mH,
      LC: () => hH,
      HhH: () => tH,
      dSH: () => zH
    });
    class rH {
      __destroy_into_raw() {
        const HH = this.__wbg_ptr;
        return this.__wbg_ptr = 0, EH.unregister(this), HH
      }
      free() {
        const HH = this.__destroy_into_raw();
        OH.c2Ms(HH, 0)
      }
      busy() {
        return 0 !== OH.bYya(this.__wbg_ptr)
      }
      command(HH, BH) {
        return 0 !== OH.h98y(this.__wbg_ptr, HH, BH)
      }
      aSH(HH) {
        return OH.Z2ml(this.__wbg_ptr, HH) >>> 0
      }
      ZSH() {
        OH.HDYU(this.__wbg_ptr)
      }
      wSH() {
        return OH.ySYv(this.__wbg_ptr) >>> 0
      }
      DSH() {
        return OH.aPqh(this.__wbg_ptr)
      }
      iSH() {
        return OH.YsqT(this.__wbg_ptr) >>> 0
      }
      pSH() {
        return OH.SLEh(this.__wbg_ptr) >>> 0
      }
      feed(HH) {
        return OH.wVGA(this.__wbg_ptr, HH) >>> 0
      }
      constructor() {
        const HH = OH.mzll();
        return this.__wbg_ptr = HH, EH.register(this, this.__wbg_ptr, this), this
      }
      JSH() {
        return OH.NZuf(this.__wbg_ptr) >>> 0
      }
      stH() {
        return OH.VZ1e(this.__wbg_ptr) >>> 0
      }
      FSH(HH, BH, LH) {
        return 0 !== OH.gFW7(this.__wbg_ptr, HH, BH, LH)
      }
      stage(HH) {
        return OH.cRBk(this.__wbg_ptr, HH) >>> 0
      }
      step() {
        return OH.dzcL(this.__wbg_ptr) >>> 0
      }
    }

    function SH(HH, BH) {
      const LH = function(HH, BH, LH) {
          if (void 0 === LH) {
            const LH = TH.encode(HH),
              AH = BH(LH.length, 1) >>> 0;
            return uH().subarray(AH, AH + LH.length).set(LH), bH = LH.length, AH
          }
          let AH = HH.length,
            rH = BH(AH, 1) >>> 0;
          const SH = uH();
          let hH = 0;
          for (; hH < AH; hH++) {
            const BH = HH.charCodeAt(hH);
            if (BH > 127) break;
            SH[rH + hH] = BH
          }
          if (hH !== AH) {
            0 !== hH && (HH = HH.slice(hH)), rH = LH(rH, AH, AH = hH + 3 * HH.length, 1) >>> 0;
            const BH = uH().subarray(rH + hH, rH + AH);
            hH += TH.encodeInto(HH, BH).written, rH = LH(rH, AH, hH, 1) >>> 0
          }
          return bH = hH, rH
        }(HH, OH.kdNY, OH.Zu8L),
        AH = bH,
        rH = OH.znLS(LH, AH, BH);
      if (rH[1]) throw MH(rH[0])
    }

    function hH() {
      OH.HG3d()
    }

    function tH() {
      return OH.xuTO() >>> 0
    }

    function zH() {
      return MH(OH.mxOK())
    }

    function CH() {
      return {
        __proto__: null,
        ZepO: {
          __proto__: null,
          cgmI: function(HH, BH) {
            return XH(Error(GH(HH, BH)))
          },
          Jy7Q: function() {
            return XH(OH.memory)
          },
          oNSJ: function(HH, BH) {
            throw new Error(GH(HH, BH))
          },
          lAFc: function(HH, BH) {
            console.error(GH(HH, BH))
          },
          fel6: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (rH.prototype[Symbol.dispose] = rH.prototype.free);
    const EH = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((HH => OH?.__wbg_recordermodule_free(HH, 1)));

    function XH(HH) {
      WH === QH.length && QH.push(QH.length + 1);
      const BH = WH;
      return WH = QH[BH], QH[BH] = HH, BH
    }

    function GH(HH, BH) {
      return function(HH, BH) {
        PH += BH, PH >= vH && (xH = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), xH.decode(), PH = BH);
        return xH.decode(uH().subarray(HH, HH + BH))
      }(HH >>> 0, BH)
    }
    let YH = null;

    function uH() {
      return null !== YH && 0 !== YH.byteLength || (YH = new Uint8Array(OH.memory.buffer)), YH
    }
    let QH = new Array(1024).fill(void 0);
    QH.push(void 0, null, !0, !1);
    let WH = QH.length;

    function MH(HH) {
      const BH = function(HH) {
        return QH[HH]
      }(HH);
      return function(HH) {
        HH < 1028 || (QH[HH] = WH, WH = HH)
      }(HH), BH
    }
    let xH = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    xH.decode();
    const vH = 2146435072;
    let PH = 0;
    const TH = new TextEncoder;
    "encodeInto" in TH || (TH.encodeInto = function(HH, BH) {
      const LH = TH.encode(HH);
      return BH.set(LH), {
        read: HH.length,
        written: LH.length
      }
    });
    let UH, VH, OH, bH = 0;

    function kH(HH, BH) {
      return VH = HH, OH = HH.exports, UH = BH, YH = null, OH.YIU7(), OH
    }

    function mH(HH) {
      if (void 0 !== OH) return OH;
      void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
        module: HH
      } = HH) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const BH = CH();
      HH instanceof WebAssembly.Module || (HH = new WebAssembly.Module(HH));
      return kH(new WebAssembly.Instance(HH, BH), HH)
    }
    async function oH(HH) {
      if (void 0 !== OH) return OH;
      void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
        module_or_path: HH
      } = HH) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const BH = CH();
      ("string" === typeof HH || "function" === typeof Request && HH instanceof Request || "function" === typeof URL && HH instanceof URL) && (HH = fetch(HH));
      const {
        instance: LH,
        module: AH
      } = await async function(HH, BH) {
        if ("function" === typeof Response && HH instanceof Response) {
          if (!HH.ok) throw new Error(`failed to fetch Wasm: ${HH.status} ${HH.statusText} fetching '${HH.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(HH, BH)
          } catch (LH) {
            if (! function(HH) {
                switch (HH) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(HH.type) || "application/wasm" === HH.headers.get("Content-Type")) throw LH;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", LH)
          }
          const AH = await HH.arrayBuffer();
          return await WebAssembly.instantiate(AH, BH)
        } {
          const LH = await WebAssembly.instantiate(HH, BH);
          return LH instanceof WebAssembly.Instance ? {
            instance: LH,
            module: HH
          } : LH
        }
      }(await HH, BH);
      return kH(LH, AH)
    }

    function IH() {
      OH = void 0, VH = void 0, YH = null, QH = new Array(1024).fill(void 0), QH.push(void 0, null, !0, !1), WH = QH.length
    }
    var fH = LH(3171),
      lH = LH(7172);
    const KH = 2;
    class cH extends Error {
      stage;
      constructor(HH, BH) {
        super((0, fH.F)(HH, BH), {
          cause: BH
        }), this.name = "BloxdRecorderWasmError", this.stage = HH
      }
    }
    let eH = null;
    const qH = function(HH) {
      let BH = null,
        LH = null,
        AH = null,
        rH = null;
      const SH = async () => {
        let LH = null;
        try {
          return LH = BH ??= (0, fH.J)(HH.url(), (0, lH.c)(HH.name)), await LH
        } catch (AH) {
          throw BH === LH && (BH = null), HH.error((0, fH.O)(AH), AH)
        }
      };
      return {
        load: () => {
          if (rH) return Promise.reject(rH);
          if (LH) return LH;
          const BH = (async () => {
            const BH = await SH();
            try {
              await HH.init(BH)
            } catch (LH) {
              throw HH.error("instantiate", LH)
            }
            return HH.bindings
          })();
          LH = BH, AH = BH;
          const hH = () => {
            AH === BH && (AH = null)
          };
          return BH.then(hH, (() => {
            hH(), LH === BH && (LH = null)
          })), BH
        },
        prefetch: async () => {
          rH || LH || await SH()
        },
        markTrapped: BH => (rH ??= HH.error("call", BH), rH),
        unload: () => {
          rH || !HH.reset || AH || (HH.reset(), LH = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new LH.U(LH(64327)),
      init: async HH => {
        await oH({
          module_or_path: HH
        }), eH = zH()
      },
      bindings: AH,
      error: (HH, BH) => new cH(HH, BH),
      reset: () => {
        IH(), eH = null
      }
    });

    function gH() {
      return qH.load()
    }

    function NH() {
      return qH.prefetch()
    }

    function RH(HH) {
      return qH.markTrapped(HH)
    }

    function jH() {
      qH.unload()
    }

    function nH() {
      return eH?.buffer.byteLength ?? 0
    }
  },
  7172: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(3171);
    const rH = {
      bloxd_wasm: () => "1a9ca3a508835437adb51fd7003f50a214824ce5852e2706a91af532afe51adc",
      bloxd_wasm_client: () => "9f302fa35bb62365f9d32f95a5401b1d28709799cd2ce60e443d8f43994a3e3d",
      bloxd_wasm_workers: () => "fea049daed4444b474b0db1a8bf4826a6e48ef50100b13d23f4bea2aa2ef7dbb",
      bloxd_wasm_models: () => "dafa53585131db414c9c059dee3ad89ee833dbd1a487c182d99120934368408f",
      bloxd_wasm_webgpu: () => "f7305e0c5434bf6438e555b6ebd02438a4b33e9ec1a95ef795555746fdd24844",
      bloxd_wasm_webgl: () => "ee0b380f26fef18564acf325d228b72d1e1361881cb2e2f9686c33d7b9b28c2e",
      bloxd_wasm_webgl1: () => "0cfbcf815fae6493c502153cc3696123db8dd68ba708a3ebe5ed4c9bdf52dd9d",
      bloxd_wasm_replay: () => "00749a68df89480806d66c2caa0106222009fc9d980e99c298088093c5266723",
      bloxd_wasm_recorder: () => "fff4e7dd116ddac14614d11c6efe68b0beab86dd32f03cf09d2d291dd715dbc1",
      bloxd_wasm_anim: () => "e06ab9bfc1a83b6498470d65996c60a55117dc9e341e17cb44260cad0fe8d434",
      bloxd_wasm_textures: () => "bea12b411e2841e721547a8f34b2e2c8d67c134acf1aabfafa9f47d2dce32aca",
      bloxd_wasm_shader_pack: () => "153845fdc736fc7d3f35302c98089348c2e3d0550da1ed6cc5e35905a2a723c3"
    };
    var SH = LH(5143);

    function hH(HH) {
      const BH = Object.prototype.hasOwnProperty.call(rH, HH) ? rH[HH]() : void 0;
      if (void 0 !== BH) return {
        sha256: BH,
        onMismatch: SH.v
      };
      throw new AH.j(`${HH} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);