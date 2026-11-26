export const id = 76;
export const ids = [76];
export const modules = {
  64138: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/bloxd_wasm_recorder_bg.cd8fa5988183e8ce58a9.wasm"
  },
  64133: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      BloxdRecorderWasmError: () => rU,
      RECORDER_MODULE_ID: () => SU,
      loadRecorderModule: () => iU,
      markRecorderTrapped: () => MU,
      prefetchRecorderModule: () => HU,
      recorderMemoryBytes: () => VU,
      unloadRecorderModule: () => vU
    });
    var cU = {};
    zU.r(cU), zU.d(cU, {
      vQU: () => yU,
      rFU: () => wU,
      FD: () => QU,
      default: () => CU,
      initSync: () => eU,
      HD: () => AU,
      HQU: () => FU,
      qQU: () => oU
    });
    class yU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, EU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        WU.JKT9(UU, 0)
      }
      busy() {
        return 0 !== WU.C4t7(this.__wbg_ptr)
      }
      command(UU, XU) {
        return 0 !== WU.T9L2(this.__wbg_ptr, UU, XU)
      }
      OQU(UU) {
        return WU.A38i(this.__wbg_ptr, UU) >>> 0
      }
      wQU() {
        WU.hmpu(this.__wbg_ptr)
      }
      CQU() {
        return WU.JA8x(this.__wbg_ptr) >>> 0
      }
      eQU() {
        return WU.XUQq(this.__wbg_ptr)
      }
      uQU() {
        return WU.O8vq(this.__wbg_ptr) >>> 0
      }
      fQU() {
        return WU.huoz(this.__wbg_ptr) >>> 0
      }
      feed(UU) {
        return WU.Wlrt(this.__wbg_ptr, UU) >>> 0
      }
      constructor() {
        const UU = WU.GwFL();
        return this.__wbg_ptr = UU, EU.register(this, this.__wbg_ptr, this), this
      }
      rQU() {
        return WU.SkAD(this.__wbg_ptr) >>> 0
      }
      uFU() {
        return WU.xipr(this.__wbg_ptr) >>> 0
      }
      LQU(UU, XU, zU) {
        return 0 !== WU.kFaa(this.__wbg_ptr, UU, XU, zU)
      }
      stage(UU) {
        return WU.BGXA(this.__wbg_ptr, UU) >>> 0
      }
      step() {
        return WU.IeU2(this.__wbg_ptr) >>> 0
      }
    }

    function QU(UU, XU) {
      const zU = function(UU, XU, zU) {
          if (void 0 === zU) {
            const zU = ZU.encode(UU),
              cU = XU(zU.length, 1) >>> 0;
            return pU().subarray(cU, cU + zU.length).set(zU), dU = zU.length, cU
          }
          let cU = UU.length,
            yU = XU(cU, 1) >>> 0;
          const QU = pU();
          let AU = 0;
          for (; AU < cU; AU++) {
            const XU = UU.charCodeAt(AU);
            if (XU > 127) break;
            QU[yU + AU] = XU
          }
          if (AU !== cU) {
            0 !== AU && (UU = UU.slice(AU)), yU = zU(yU, cU, cU = AU + 3 * UU.length, 1) >>> 0;
            const XU = pU().subarray(yU + AU, yU + cU);
            AU += ZU.encodeInto(UU, XU).written, yU = zU(yU, cU, AU, 1) >>> 0
          }
          return dU = AU, yU
        }(UU, WU.K7Rw, WU.pnB8),
        cU = dU,
        yU = WU.aJEj(zU, cU, XU);
      if (yU[1]) throw gU(yU[0])
    }

    function AU() {
      WU.d8bY()
    }

    function FU() {
      return WU.Ra2W() >>> 0
    }

    function oU() {
      return gU(WU.lRge())
    }

    function DU() {
      return {
        __proto__: null,
        ONpb: {
          __proto__: null,
          Zb8P: function(UU, XU) {
            return YU(Error(NU(UU, XU)))
          },
          HwVV: function() {
            return YU(WU.memory)
          },
          ekYQ: function(UU, XU) {
            throw new Error(NU(UU, XU))
          },
          FRKG: function(UU, XU) {
            console.error(NU(UU, XU))
          },
          uReD: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (yU.prototype[Symbol.dispose] = yU.prototype.free);
    const EU = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((UU => WU?.__wbg_recordermodule_free(UU, 1)));

    function YU(UU) {
      tU === aU.length && aU.push(aU.length + 1);
      const XU = tU;
      return tU = aU[XU], aU[XU] = UU, XU
    }

    function NU(UU, XU) {
      return function(UU, XU) {
        BU += XU, BU >= GU && (kU = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), kU.decode(), BU = XU);
        return kU.decode(pU().subarray(UU, UU + XU))
      }(UU >>> 0, XU)
    }
    let IU = null;

    function pU() {
      return null !== IU && 0 !== IU.byteLength || (IU = new Uint8Array(WU.memory.buffer)), IU
    }
    let aU = new Array(1024).fill(void 0);
    aU.push(void 0, null, !0, !1);
    let tU = aU.length;

    function gU(UU) {
      const XU = function(UU) {
        return aU[UU]
      }(UU);
      return function(UU) {
        UU < 1028 || (aU[UU] = tU, tU = UU)
      }(UU), XU
    }
    let kU = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    kU.decode();
    const GU = 2146435072;
    let BU = 0;
    const ZU = new TextEncoder;
    "encodeInto" in ZU || (ZU.encodeInto = function(UU, XU) {
      const zU = ZU.encode(UU);
      return XU.set(zU), {
        read: UU.length,
        written: zU.length
      }
    });
    let RU, PU, WU, dU = 0;

    function LU(UU, XU) {
      return PU = UU, WU = UU.exports, RU = XU, IU = null, WU.LPpf(), WU
    }

    function eU(UU) {
      if (void 0 !== WU) return WU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module: UU
      } = UU) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const XU = DU();
      UU instanceof WebAssembly.Module || (UU = new WebAssembly.Module(UU));
      return LU(new WebAssembly.Instance(UU, XU), UU)
    }
    async function CU(UU) {
      if (void 0 !== WU) return WU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module_or_path: UU
      } = UU) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const XU = DU();
      ("string" === typeof UU || "function" === typeof Request && UU instanceof Request || "function" === typeof URL && UU instanceof URL) && (UU = fetch(UU));
      const {
        instance: zU,
        module: cU
      } = await async function(UU, XU) {
        if ("function" === typeof Response && UU instanceof Response) {
          if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(UU, XU)
          } catch (zU) {
            if (! function(UU) {
                switch (UU) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(UU.type) || "application/wasm" === UU.headers.get("Content-Type")) throw zU;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", zU)
          }
          const cU = await UU.arrayBuffer();
          return await WebAssembly.instantiate(cU, XU)
        } {
          const zU = await WebAssembly.instantiate(UU, XU);
          return zU instanceof WebAssembly.Instance ? {
            instance: zU,
            module: UU
          } : zU
        }
      }(await UU, XU);
      return LU(zU, cU)
    }

    function wU() {
      WU = void 0, PU = void 0, IU = null, aU = new Array(1024).fill(void 0), aU.push(void 0, null, !0, !1), tU = aU.length
    }
    var qU = zU(3176),
      OU = zU(7213);
    const SU = 2;
    class rU extends Error {
      stage;
      constructor(UU, XU) {
        super((0, qU.J)(UU, XU), {
          cause: XU
        }), this.name = "BloxdRecorderWasmError", this.stage = UU
      }
    }
    let uU = null;
    const fU = function(UU) {
      let XU = null,
        zU = null,
        cU = null,
        yU = null;
      const QU = async () => {
        let zU = null;
        try {
          return zU = XU ??= (0, qU.M)(UU.url(), (0, OU.e)(UU.name)), await zU
        } catch (cU) {
          throw XU === zU && (XU = null), UU.error((0, qU.T)(cU), cU)
        }
      };
      return {
        load: () => {
          if (yU) return Promise.reject(yU);
          if (zU) return zU;
          const XU = (async () => {
            const XU = await QU();
            try {
              await UU.init(XU)
            } catch (zU) {
              throw UU.error("instantiate", zU)
            }
            return UU.bindings
          })();
          zU = XU, cU = XU;
          const AU = () => {
            cU === XU && (cU = null)
          };
          return XU.then(AU, (() => {
            AU(), zU === XU && (zU = null)
          })), XU
        },
        prefetch: async () => {
          yU || zU || await QU()
        },
        markTrapped: XU => (yU ??= UU.error("call", XU), yU),
        unload: () => {
          yU || !UU.reset || cU || (UU.reset(), zU = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new zU.U(zU(64138)),
      init: async UU => {
        await CU({
          module_or_path: UU
        }), uU = oU()
      },
      bindings: cU,
      error: (UU, XU) => new rU(UU, XU),
      reset: () => {
        wU(), uU = null
      }
    });

    function iU() {
      return fU.load()
    }

    function HU() {
      return fU.prefetch()
    }

    function MU(UU) {
      return fU.markTrapped(UU)
    }

    function vU() {
      fU.unload()
    }

    function VU() {
      return uU?.buffer.byteLength ?? 0
    }
  },
  7213: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(3176);
    const yU = {
      bloxd_wasm: () => "7f53022eec2cb692d1cd79c2eeeb6f8a7607270973e0f6e0c72df23cc86c2b9f",
      bloxd_wasm_client: () => "57b44b4e08ce6b959c851fa76e413083d1b9237ff788a96d3931877841e31e3b",
      bloxd_wasm_workers: () => "e095c7f514df56db3ce2e1ace2484bbfab4bed79f4fe2840e3f351e25bef8126",
      bloxd_wasm_models: () => "d264f0be9eaf7df40aab32e155f7170e6a2029f73e36b3aa879f2b238d2f98c1",
      bloxd_wasm_webgpu: () => "45fb92410826d4556fb1610a55c96252dff22810c6b27376d120613e28fb722d",
      bloxd_wasm_webgl: () => "b3808b20b91fd2d43a5bb7c9219998b24db293acd36599f3cfc217aa2f03b9ee",
      bloxd_wasm_webgl1: () => "955dabc5322d1e4788a42fc358c9d0d686dca5eaafd1809064b6bbdc73e56b76",
      bloxd_wasm_replay: () => "13f05b235e8455220553f84808d39e41289fbb259c59a2477b25fa31ba963b54",
      bloxd_wasm_recorder: () => "a55faba2add92e1697c15223e522d87ba7631a7aaeb806e24cd4da91de455075",
      bloxd_wasm_anim: () => "9fd10823eecbab78e8d130701ec44bc31691f897e4963312a2cef80080a0b854",
      bloxd_wasm_textures: () => "659ffb2c9bc8159fee909f52c433ec6a1a8921210ad3488ef78dfd6ff1c90774",
      bloxd_wasm_shader_pack: () => "adccd38b5fea7520e10f50666ef79fc0704d8a73746e668ac8e591ff0037f1dc"
    };
    var QU = zU(5179);

    function AU(UU) {
      const XU = Object.prototype.hasOwnProperty.call(yU, UU) ? yU[UU]() : void 0;
      if (void 0 !== XU) return {
        sha256: XU,
        onMismatch: QU.v
      };
      throw new cU.i(`${UU} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);