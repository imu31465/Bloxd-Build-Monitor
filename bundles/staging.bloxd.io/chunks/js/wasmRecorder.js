export const id = 77;
export const ids = [77];
export const modules = {
  64608: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bloxd_wasm_recorder_bg.788d36c063f4a2e0f1bf.wasm"
  },
  64604: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      BloxdRecorderWasmError: () => eW,
      RECORDER_MODULE_ID: () => dW,
      loadRecorderModule: () => DW,
      markRecorderTrapped: () => pW,
      prefetchRecorderModule: () => VW,
      recorderMemoryBytes: () => CW,
      unloadRecorderModule: () => fW
    });
    var mW = {};
    OW.r(mW), OW.d(mW, {
      qNW: () => EW,
      ULW: () => nW,
      sw: () => NW,
      default: () => HW,
      initSync: () => hW,
      qt: () => PW,
      XNW: () => LW,
      vNW: () => cW
    });
    class EW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, tW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        yW.i7Qy(WW, 0)
      }
      busy() {
        return 0 !== yW.SAq4(this.__wbg_ptr)
      }
      command(WW, iW) {
        return 0 !== yW.uxzH(this.__wbg_ptr, WW, iW)
      }
      gNW(WW) {
        return yW.HCCN(this.__wbg_ptr, WW) >>> 0
      }
      eNW() {
        yW.DWhD(this.__wbg_ptr)
      }
      dNW() {
        return yW.vHXD(this.__wbg_ptr) >>> 0
      }
      oNW() {
        return yW.xVVr(this.__wbg_ptr)
      }
      pNW() {
        return yW.xiXn(this.__wbg_ptr) >>> 0
      }
      fNW() {
        return yW.oMtD(this.__wbg_ptr) >>> 0
      }
      feed(WW) {
        return yW.wdyh(this.__wbg_ptr, WW) >>> 0
      }
      constructor() {
        const WW = yW.o8P3();
        return this.__wbg_ptr = WW, tW.register(this, this.__wbg_ptr, this), this
      }
      VNW() {
        return yW.RJLn(this.__wbg_ptr) >>> 0
      }
      kLW() {
        return yW.WxFx(this.__wbg_ptr) >>> 0
      }
      uNW(WW, iW, OW) {
        return 0 !== yW.I9Os(this.__wbg_ptr, WW, iW, OW)
      }
      stage(WW) {
        return yW.HDs9(this.__wbg_ptr, WW) >>> 0
      }
      step() {
        return yW.Ljd3(this.__wbg_ptr) >>> 0
      }
    }

    function NW(WW, iW) {
      const OW = function(WW, iW, OW) {
          if (void 0 === OW) {
            const OW = KW.encode(WW),
              mW = iW(OW.length, 1) >>> 0;
            return AW().subarray(mW, mW + OW.length).set(OW), TW = OW.length, mW
          }
          let mW = WW.length,
            EW = iW(mW, 1) >>> 0;
          const NW = AW();
          let PW = 0;
          for (; PW < mW; PW++) {
            const iW = WW.charCodeAt(PW);
            if (iW > 127) break;
            NW[EW + PW] = iW
          }
          if (PW !== mW) {
            0 !== PW && (WW = WW.slice(PW)), EW = OW(EW, mW, mW = PW + 3 * WW.length, 1) >>> 0;
            const iW = AW().subarray(EW + PW, EW + mW);
            PW += KW.encodeInto(WW, iW).written, EW = OW(EW, mW, PW, 1) >>> 0
          }
          return TW = PW, EW
        }(WW, yW.Ow0e, yW.ykdI),
        mW = TW,
        EW = yW.I8BX(OW, mW, iW);
      if (EW[1]) throw UW(EW[0])
    }

    function PW() {
      yW.PjIl()
    }

    function LW() {
      return yW.XtSw() >>> 0
    }

    function cW() {
      return UW(yW.hbyo())
    }

    function wW() {
      return {
        __proto__: null,
        Ii6k: {
          __proto__: null,
          mohC: function(WW, iW) {
            return ZW(Error(xW(WW, iW)))
          },
          wxt1: function() {
            return ZW(yW.memory)
          },
          OWIB: function(WW, iW) {
            throw new Error(xW(WW, iW))
          },
          h4hS: function(WW, iW) {
            console.error(xW(WW, iW))
          },
          A2q5: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (EW.prototype[Symbol.dispose] = EW.prototype.free);
    const tW = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((WW => yW?.__wbg_recordermodule_free(WW, 1)));

    function ZW(WW) {
      jW === bW.length && bW.push(bW.length + 1);
      const iW = jW;
      return jW = bW[iW], bW[iW] = WW, iW
    }

    function xW(WW, iW) {
      return function(WW, iW) {
        MW += iW, MW >= sW && (kW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), kW.decode(), MW = iW);
        return kW.decode(AW().subarray(WW, WW + iW))
      }(WW >>> 0, iW)
    }
    let lW = null;

    function AW() {
      return null !== lW && 0 !== lW.byteLength || (lW = new Uint8Array(yW.memory.buffer)), lW
    }
    let bW = new Array(1024).fill(void 0);
    bW.push(void 0, null, !0, !1);
    let jW = bW.length;

    function UW(WW) {
      const iW = function(WW) {
        return bW[WW]
      }(WW);
      return function(WW) {
        WW < 1028 || (bW[WW] = jW, jW = WW)
      }(WW), iW
    }
    let kW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    kW.decode();
    const sW = 2146435072;
    let MW = 0;
    const KW = new TextEncoder;
    "encodeInto" in KW || (KW.encodeInto = function(WW, iW) {
      const OW = KW.encode(WW);
      return iW.set(OW), {
        read: WW.length,
        written: OW.length
      }
    });
    let SW, YW, yW, TW = 0;

    function JW(WW, iW) {
      return YW = WW, yW = WW.exports, SW = iW, lW = null, yW.VOkx(), yW
    }

    function hW(WW) {
      if (void 0 !== yW) return yW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module: WW
      } = WW) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const iW = wW();
      WW instanceof WebAssembly.Module || (WW = new WebAssembly.Module(WW));
      return JW(new WebAssembly.Instance(WW, iW), WW)
    }
    async function HW(WW) {
      if (void 0 !== yW) return yW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module_or_path: WW
      } = WW) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const iW = wW();
      ("string" === typeof WW || "function" === typeof Request && WW instanceof Request || "function" === typeof URL && WW instanceof URL) && (WW = fetch(WW));
      const {
        instance: OW,
        module: mW
      } = await async function(WW, iW) {
        if ("function" === typeof Response && WW instanceof Response) {
          if (!WW.ok) throw new Error(`failed to fetch Wasm: ${WW.status} ${WW.statusText} fetching '${WW.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(WW, iW)
          } catch (OW) {
            if (! function(WW) {
                switch (WW) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(WW.type) || "application/wasm" === WW.headers.get("Content-Type")) throw OW;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", OW)
          }
          const mW = await WW.arrayBuffer();
          return await WebAssembly.instantiate(mW, iW)
        } {
          const OW = await WebAssembly.instantiate(WW, iW);
          return OW instanceof WebAssembly.Instance ? {
            instance: OW,
            module: WW
          } : OW
        }
      }(await WW, iW);
      return JW(OW, mW)
    }

    function nW() {
      yW = void 0, YW = void 0, lW = null, bW = new Array(1024).fill(void 0), bW.push(void 0, null, !0, !1), jW = bW.length
    }
    var uW = OW(2388),
      oW = OW(7625);
    const dW = 2;
    class eW extends Error {
      stage;
      constructor(WW, iW) {
        super((0, uW.A)(WW, iW), {
          cause: iW
        }), this.name = "BloxdRecorderWasmError", this.stage = WW
      }
    }
    let vW = null;
    const gW = function(WW) {
      let iW = null,
        OW = null,
        mW = null,
        EW = null;
      const NW = async () => {
        let OW = null;
        try {
          return OW = iW ??= (0, uW.B)(WW.url(), (0, oW.c)(WW.name)), await OW
        } catch (mW) {
          throw iW === OW && (iW = null), WW.error((0, uW.E)(mW), mW)
        }
      };
      return {
        load: () => {
          if (EW) return Promise.reject(EW);
          if (OW) return OW;
          const iW = (async () => {
            const iW = await NW();
            try {
              await WW.init(iW)
            } catch (OW) {
              throw WW.error("instantiate", OW)
            }
            return WW.bindings
          })();
          OW = iW, mW = iW;
          const PW = () => {
            mW === iW && (mW = null)
          };
          return iW.then(PW, (() => {
            PW(), OW === iW && (OW = null)
          })), iW
        },
        prefetch: async () => {
          EW || OW || await NW()
        },
        markTrapped: iW => (EW ??= WW.error("call", iW), EW),
        unload: () => {
          EW || !WW.reset || mW || (WW.reset(), OW = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new OW.U(OW(64608)),
      init: async WW => {
        await HW({
          module_or_path: WW
        }), vW = cW()
      },
      bindings: mW,
      error: (WW, iW) => new eW(WW, iW),
      reset: () => {
        nW(), vW = null
      }
    });

    function DW() {
      return gW.load()
    }

    function VW() {
      return gW.prefetch()
    }

    function pW(WW) {
      return gW.markTrapped(WW)
    }

    function fW() {
      gW.unload()
    }

    function CW() {
      return vW?.buffer.byteLength ?? 0
    }
  },
  7625: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(2388);
    const EW = {
      bloxd_wasm: () => "102e63c69ba1846a7ef3e4f3119d9407d849792a77d386b77d132cbd19000baf",
      bloxd_wasm_client: () => "828553d657b63b8b78489e1c312c1521bbff4059679c6442f668bd5b77b44d26",
      bloxd_wasm_workers: () => "c3e0f9c9d3450b1b58eeeabddc49241fbc8ffeffe05a0e2cd8e7c4d8847442a4",
      bloxd_wasm_models: () => "77704cdcef014d8f1aa72c519a652297b25e80d6cafc34478014bd291b97f37e",
      bloxd_wasm_webgpu: () => "603e3bc645f5c3d0c95d7f24327b193ab3d090814bbdb68c6ad2438495025f9d",
      bloxd_wasm_webgl: () => "8157beb90345cb7dcaa6d28e4816f7951234731f38d297579b1de22172034862",
      bloxd_wasm_webgl1: () => "ac00e7c2f783046413779c397bcab25db7aaf3ceb5743e39ab05f2fc699b197b",
      bloxd_wasm_replay: () => "a585d75239773f442a258771a295653a54d6e99e4b872f0a2a4512a7fceaca4a",
      bloxd_wasm_recorder: () => "1c3da6ac9b656d482455def4919768325136d09e94b6b18afdb7ecc55287a265",
      bloxd_wasm_anim: () => "95aba8d7de72cdcce081f679def0f8248e845944fba77b065315103503401e53",
      bloxd_wasm_textures: () => "378f24688349d1dc6f860f72e8fafaf79ead5d9fccc14eb96ca959801b415d82",
      bloxd_wasm_shader_pack: () => "fa64ff9ddba4399ee91af4ff8bb1c0cc63df7e9ee2ebb4a275be7918ce6cdefd"
    };
    var NW = OW(5427);

    function PW(WW) {
      const iW = Object.prototype.hasOwnProperty.call(EW, WW) ? EW[WW]() : void 0;
      if (void 0 !== iW) return {
        sha256: iW,
        onMismatch: NW.y
      };
      throw new mW.k(`${WW} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);