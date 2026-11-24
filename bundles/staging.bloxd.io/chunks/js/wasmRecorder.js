export const id = 65;
export const ids = [65];
export const modules = {
  61626: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/bloxd_wasm_recorder_bg.63be3fb8006314cf30ad.wasm"
  },
  61617: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      BloxdRecorderWasmError: () => VB,
      RECORDER_MODULE_ID: () => YB,
      loadRecorderModule: () => ZB,
      markRecorderTrapped: () => TB,
      prefetchRecorderModule: () => AB,
      recorderMemoryBytes: () => WB,
      unloadRecorderModule: () => PB
    });
    var QB = {};
    zB.r(QB), zB.d(QB, {
      WnB: () => nB,
      VIB: () => HB,
      np: () => dB,
      default: () => oB,
      initSync: () => fB,
      dp: () => IB,
      TnB: () => NB,
      FnB: () => uB
    });
    class nB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, aB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        EB.zjzI(BB, 0)
      }
      busy() {
        return 0 !== EB.VdRG(this.__wbg_ptr)
      }
      command(BB, jB) {
        return 0 !== EB.qE4x(this.__wbg_ptr, BB, jB)
      }
      YnB(BB) {
        return EB.fUV3(this.__wbg_ptr, BB) >>> 0
      }
      DnB() {
        EB.YYot(this.__wbg_ptr)
      }
      HnB() {
        return EB.cRgN(this.__wbg_ptr) >>> 0
      }
      onB() {
        return EB.iqRb(this.__wbg_ptr)
      }
      XnB() {
        return EB.uL42(this.__wbg_ptr) >>> 0
      }
      ZnB() {
        return EB.DO8Q(this.__wbg_ptr) >>> 0
      }
      feed(BB) {
        return EB.KUbz(this.__wbg_ptr, BB) >>> 0
      }
      constructor() {
        const BB = EB.ehVN();
        return this.__wbg_ptr = BB, aB.register(this, this.__wbg_ptr, this), this
      }
      hnB() {
        return EB.HR6m(this.__wbg_ptr) >>> 0
      }
      hIB() {
        return EB.DaV6(this.__wbg_ptr) >>> 0
      }
      fnB(BB, jB, zB) {
        return 0 !== EB.IfkL(this.__wbg_ptr, BB, jB, zB)
      }
      stage(BB) {
        return EB.x54l(this.__wbg_ptr, BB) >>> 0
      }
      step() {
        return EB.J8B5(this.__wbg_ptr) >>> 0
      }
    }

    function dB(BB, jB) {
      const zB = function(BB, jB, zB) {
          if (void 0 === zB) {
            const zB = tB.encode(BB),
              QB = jB(zB.length, 1) >>> 0;
            return JB().subarray(QB, QB + zB.length).set(zB), iB = zB.length, QB
          }
          let QB = BB.length,
            nB = jB(QB, 1) >>> 0;
          const dB = JB();
          let IB = 0;
          for (; IB < QB; IB++) {
            const jB = BB.charCodeAt(IB);
            if (jB > 127) break;
            dB[nB + IB] = jB
          }
          if (IB !== QB) {
            0 !== IB && (BB = BB.slice(IB)), nB = zB(nB, QB, QB = IB + 3 * BB.length, 1) >>> 0;
            const jB = JB().subarray(nB + IB, nB + QB);
            IB += tB.encodeInto(BB, jB).written, nB = zB(nB, QB, IB, 1) >>> 0
          }
          return iB = IB, nB
        }(BB, EB.bOGr, EB.eM62),
        QB = iB,
        nB = EB.LSzG(zB, QB, jB);
      if (nB[1]) throw kB(nB[0])
    }

    function IB() {
      EB.ylz0()
    }

    function NB() {
      return EB.jVHG() >>> 0
    }

    function uB() {
      return kB(EB.VTvV())
    }

    function UB() {
      return {
        __proto__: null,
        uCaT: {
          __proto__: null,
          aA6t: function(BB, jB) {
            return pB(Error(rB(BB, jB)))
          },
          TjUh: function() {
            return pB(EB.memory)
          },
          upjs: function(BB, jB) {
            throw new Error(rB(BB, jB))
          },
          aVjV: function(BB, jB) {
            console.error(rB(BB, jB))
          },
          pnkC: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (nB.prototype[Symbol.dispose] = nB.prototype.free);
    const aB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => EB?.__wbg_recordermodule_free(BB, 1)));

    function pB(BB) {
      yB === mB.length && mB.push(mB.length + 1);
      const jB = yB;
      return yB = mB[jB], mB[jB] = BB, jB
    }

    function rB(BB, jB) {
      return function(BB, jB) {
        gB += jB, gB >= LB && (GB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), GB.decode(), gB = jB);
        return GB.decode(JB().subarray(BB, BB + jB))
      }(BB >>> 0, jB)
    }
    let sB = null;

    function JB() {
      return null !== sB && 0 !== sB.byteLength || (sB = new Uint8Array(EB.memory.buffer)), sB
    }
    let mB = new Array(1024).fill(void 0);
    mB.push(void 0, null, !0, !1);
    let yB = mB.length;

    function kB(BB) {
      const jB = function(BB) {
        return mB[BB]
      }(BB);
      return function(BB) {
        BB < 1028 || (mB[BB] = yB, yB = BB)
      }(BB), jB
    }
    let GB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    GB.decode();
    const LB = 2146435072;
    let gB = 0;
    const tB = new TextEncoder;
    "encodeInto" in tB || (tB.encodeInto = function(BB, jB) {
      const zB = tB.encode(BB);
      return jB.set(zB), {
        read: BB.length,
        written: zB.length
      }
    });
    let SB, MB, EB, iB = 0;

    function qB(BB, jB) {
      return MB = BB, EB = BB.exports, SB = jB, sB = null, EB.RmoZ(), EB
    }

    function fB(BB) {
      if (void 0 !== EB) return EB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const jB = UB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return qB(new WebAssembly.Instance(BB, jB), BB)
    }
    async function oB(BB) {
      if (void 0 !== EB) return EB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const jB = UB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: zB,
        module: QB
      } = await async function(BB, jB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, jB)
          } catch (zB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw zB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", zB)
          }
          const QB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(QB, jB)
        } {
          const zB = await WebAssembly.instantiate(BB, jB);
          return zB instanceof WebAssembly.Instance ? {
            instance: zB,
            module: BB
          } : zB
        }
      }(await BB, jB);
      return qB(zB, QB)
    }

    function HB() {
      EB = void 0, MB = void 0, sB = null, mB = new Array(1024).fill(void 0), mB.push(void 0, null, !0, !1), yB = mB.length
    }
    var DB = zB(2974),
      FB = zB(6578);
    const YB = 2;
    class VB extends Error {
      stage;
      constructor(BB, jB) {
        super((0, DB.F)(BB, jB), {
          cause: jB
        }), this.name = "BloxdRecorderWasmError", this.stage = BB
      }
    }
    let hB = null;
    const XB = function(BB) {
      let jB = null,
        zB = null,
        QB = null,
        nB = null;
      const dB = async () => {
        let zB = null;
        try {
          return zB = jB ??= (0, DB.I)(BB.url(), (0, FB.b)(BB.name)), await zB
        } catch (QB) {
          throw jB === zB && (jB = null), BB.error((0, DB.M)(QB), QB)
        }
      };
      return {
        load: () => {
          if (nB) return Promise.reject(nB);
          if (zB) return zB;
          const jB = (async () => {
            const jB = await dB();
            try {
              await BB.init(jB)
            } catch (zB) {
              throw BB.error("instantiate", zB)
            }
            return BB.bindings
          })();
          zB = jB, QB = jB;
          const IB = () => {
            QB === jB && (QB = null)
          };
          return jB.then(IB, (() => {
            IB(), zB === jB && (zB = null)
          })), jB
        },
        prefetch: async () => {
          nB || zB || await dB()
        },
        markTrapped: jB => (nB ??= BB.error("call", jB), nB),
        unload: () => {
          nB || !BB.reset || QB || (BB.reset(), zB = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new zB.U(zB(61626)),
      init: async BB => {
        await oB({
          module_or_path: BB
        }), hB = uB()
      },
      bindings: QB,
      error: (BB, jB) => new VB(BB, jB),
      reset: () => {
        HB(), hB = null
      }
    });

    function ZB() {
      return XB.load()
    }

    function AB() {
      return XB.prefetch()
    }

    function TB(BB) {
      return XB.markTrapped(BB)
    }

    function PB() {
      XB.unload()
    }

    function WB() {
      return hB?.buffer.byteLength ?? 0
    }
  },
  6578: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(2974);
    const nB = {
      bloxd_wasm: () => "7b09e9f186f5fba9951cb6b712084b2a283fca06a42be21f6449860d6e7dc573",
      bloxd_wasm_client: () => "c15f866f14080480fea14857b9de7e539e335dce452b3ac1f19f0e3e937c9012",
      bloxd_wasm_workers: () => "00de63c66aff71381fa14ebd2820bcc01d1f74d973a6e00204eb827cb328e85b",
      bloxd_wasm_models: () => "32d703ec0b794e85682ae80d087c7f2eff99230a39b9a0cb5be5c019534d7923",
      bloxd_wasm_webgpu: () => "1d41e428ff1a8bf8ab5a5da0e8d9f622575ba5f347bc8d40eb30b5fceef8b724",
      bloxd_wasm_webgl: () => "312dff8c1bb47e85d35f931d8977e1ee5f52f92a42fa20f9d0123d9376d1a917",
      bloxd_wasm_webgl1: () => "4855e300e3e615d0266ab5ac62961960b1300dfb8770375a7b598d1264a1830f",
      bloxd_wasm_replay: () => "5423fc1dc63ea74c6d9a1fac1b68ef8b53800a6e323e74b70ac272cca42c91f0",
      bloxd_wasm_recorder: () => "70b2547fb7560662bf26d9ee964aae4306b95745e4a8f6ad1533e65a931bfcbd",
      bloxd_wasm_anim: () => "a442a15413a6d8e2fce5f258c2ba4985529d8bf26cece64b09dc4584f043ade6",
      bloxd_wasm_textures: () => "e405dd767a5408e017f07c07979684ef0a0b2226e22378a714bcaf40408edfe9",
      bloxd_wasm_shader_pack: () => "98655291aac1601e5d21cb4017dab03da1e258471aa722674ba91fc68305d170"
    };
    var dB = zB(4782);

    function IB(BB) {
      const jB = Object.prototype.hasOwnProperty.call(nB, BB) ? nB[BB]() : void 0;
      if (void 0 !== jB) return {
        sha256: jB,
        onMismatch: dB.t
      };
      throw new QB.h(`${BB} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);