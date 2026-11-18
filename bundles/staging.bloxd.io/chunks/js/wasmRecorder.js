export const id = 57;
export const ids = [57];
export const modules = {
  60032: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/bloxd_wasm_recorder_bg.3277be34cf1e26a28c96.wasm"
  },
  60027: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      BloxdRecorderWasmError: () => cB,
      RECORDER_MODULE_ID: () => IB,
      loadRecorderModule: () => QB,
      markRecorderTrapped: () => aB,
      prefetchRecorderModule: () => RB,
      recorderMemoryBytes: () => XB,
      unloadRecorderModule: () => ZB
    });
    var VB = {};
    dB.r(VB), dB.d(VB, {
      kpB: () => yB,
      VJB: () => FB,
      Ok: () => pB,
      default: () => UB,
      initSync: () => wB,
      Dk: () => lB,
      gpB: () => JB,
      TpB: () => YB
    });
    class yB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, oB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        sB.cNGI(BB, 0)
      }
      busy() {
        return 0 !== sB.FigM(this.__wbg_ptr)
      }
      command(BB, TB) {
        return 0 !== sB.ImpD(this.__wbg_ptr, BB, TB)
      }
      dpB(BB) {
        return sB.lA2I(this.__wbg_ptr, BB) >>> 0
      }
      BpB() {
        sB.CpGW(this.__wbg_ptr)
      }
      eyB() {
        return sB.sQTr(this.__wbg_ptr) >>> 0
      }
      nyB() {
        return sB.RDCO(this.__wbg_ptr)
      }
      lpB() {
        return sB.HurU(this.__wbg_ptr) >>> 0
      }
      JpB() {
        return sB.b5GW(this.__wbg_ptr) >>> 0
      }
      feed(BB) {
        return sB.fJd7(this.__wbg_ptr, BB) >>> 0
      }
      constructor() {
        const BB = sB.yRZ3();
        return this.__wbg_ptr = BB, oB.register(this, this.__wbg_ptr, this), this
      }
      ppB() {
        return sB.GVN2(this.__wbg_ptr) >>> 0
      }
      yJB() {
        return sB.BYpt(this.__wbg_ptr) >>> 0
      }
      byB(BB, TB, dB) {
        return 0 !== sB.GF3j(this.__wbg_ptr, BB, TB, dB)
      }
      stage(BB) {
        return sB.ljpv(this.__wbg_ptr, BB) >>> 0
      }
      step() {
        return sB.KRJu(this.__wbg_ptr) >>> 0
      }
    }

    function pB(BB, TB) {
      const dB = function(BB, TB, dB) {
          if (void 0 === dB) {
            const dB = NB.encode(BB),
              VB = TB(dB.length, 1) >>> 0;
            return DB().subarray(VB, VB + dB.length).set(dB), MB = dB.length, VB
          }
          let VB = BB.length,
            yB = TB(VB, 1) >>> 0;
          const pB = DB();
          let lB = 0;
          for (; lB < VB; lB++) {
            const TB = BB.charCodeAt(lB);
            if (TB > 127) break;
            pB[yB + lB] = TB
          }
          if (lB !== VB) {
            0 !== lB && (BB = BB.slice(lB)), yB = dB(yB, VB, VB = lB + 3 * BB.length, 1) >>> 0;
            const TB = DB().subarray(yB + lB, yB + VB);
            lB += NB.encodeInto(BB, TB).written, yB = dB(yB, VB, lB, 1) >>> 0
          }
          return MB = lB, yB
        }(BB, sB.WnJv, sB.HSTo),
        VB = MB,
        yB = sB.CVB6(dB, VB, TB);
      if (yB[1]) throw EB(yB[0])
    }

    function lB() {
      sB.Yc5N()
    }

    function JB() {
      return sB.cm24() >>> 0
    }

    function YB() {
      return EB(sB.lyIb())
    }

    function gB() {
      return {
        __proto__: null,
        pSBU: {
          __proto__: null,
          Vnso: function(BB, TB) {
            return kB(Error(LB(BB, TB)))
          },
          tVAM: function() {
            return kB(sB.memory)
          },
          onEc: function(BB, TB) {
            throw new Error(LB(BB, TB))
          },
          wgUx: function(BB, TB) {
            console.error(LB(BB, TB))
          },
          gckY: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (yB.prototype[Symbol.dispose] = yB.prototype.free);
    const oB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => sB?.__wbg_recordermodule_free(BB, 1)));

    function kB(BB) {
      HB === uB.length && uB.push(uB.length + 1);
      const TB = HB;
      return HB = uB[TB], uB[TB] = BB, TB
    }

    function LB(BB, TB) {
      return function(BB, TB) {
        iB += TB, iB >= mB && (vB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), vB.decode(), iB = TB);
        return vB.decode(DB().subarray(BB, BB + TB))
      }(BB >>> 0, TB)
    }
    let OB = null;

    function DB() {
      return null !== OB && 0 !== OB.byteLength || (OB = new Uint8Array(sB.memory.buffer)), OB
    }
    let uB = new Array(1024).fill(void 0);
    uB.push(void 0, null, !0, !1);
    let HB = uB.length;

    function EB(BB) {
      const TB = function(BB) {
        return uB[BB]
      }(BB);
      return function(BB) {
        BB < 1028 || (uB[BB] = HB, HB = BB)
      }(BB), TB
    }
    let vB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    vB.decode();
    const mB = 2146435072;
    let iB = 0;
    const NB = new TextEncoder;
    "encodeInto" in NB || (NB.encodeInto = function(BB, TB) {
      const dB = NB.encode(BB);
      return TB.set(dB), {
        read: BB.length,
        written: dB.length
      }
    });
    let tB, fB, sB, MB = 0;

    function zB(BB, TB) {
      return fB = BB, sB = BB.exports, tB = TB, OB = null, sB.HNx5(), sB
    }

    function wB(BB) {
      if (void 0 !== sB) return sB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const TB = gB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return zB(new WebAssembly.Instance(BB, TB), BB)
    }
    async function UB(BB) {
      if (void 0 !== sB) return sB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const TB = gB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: dB,
        module: VB
      } = await async function(BB, TB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, TB)
          } catch (dB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw dB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", dB)
          }
          const VB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(VB, TB)
        } {
          const dB = await WebAssembly.instantiate(BB, TB);
          return dB instanceof WebAssembly.Instance ? {
            instance: dB,
            module: BB
          } : dB
        }
      }(await BB, TB);
      return zB(dB, VB)
    }

    function FB() {
      sB = void 0, fB = void 0, OB = null, uB = new Array(1024).fill(void 0), uB.push(void 0, null, !0, !1), HB = uB.length
    }
    var KB = dB(3216),
      rB = dB(5953);
    const IB = 2;
    class cB extends Error {
      stage;
      constructor(BB, TB) {
        super((0, KB.E)(BB, TB), {
          cause: TB
        }), this.name = "BloxdRecorderWasmError", this.stage = BB
      }
    }
    let SB = null;
    const PB = function(BB) {
      let TB = null,
        dB = null,
        VB = null,
        yB = null;
      const pB = async () => {
        let dB = null;
        try {
          return dB = TB ??= (0, KB.G)(BB.url(), (0, rB.c)(BB.name)), await dB
        } catch (VB) {
          throw TB === dB && (TB = null), BB.error((0, KB.M)(VB), VB)
        }
      };
      return {
        load: () => {
          if (yB) return Promise.reject(yB);
          if (dB) return dB;
          const TB = (async () => {
            const TB = await pB();
            try {
              await BB.init(TB)
            } catch (dB) {
              throw BB.error("instantiate", dB)
            }
            return BB.JD
          })();
          dB = TB, VB = TB;
          const lB = () => {
            VB === TB && (VB = null)
          };
          return TB.then(lB, (() => {
            lB(), dB === TB && (dB = null)
          })), TB
        },
        prefetch: async () => {
          yB || dB || await pB()
        },
        markTrapped: TB => (yB ??= BB.error("call", TB), yB),
        unload: () => {
          yB || !BB.reset || VB || (BB.reset(), dB = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new dB.U(dB(60032)),
      init: async BB => {
        await UB({
          module_or_path: BB
        }), SB = YB()
      },
      JD: VB,
      error: (BB, TB) => new cB(BB, TB),
      reset: () => {
        FB(), SB = null
      }
    });

    function QB() {
      return PB.load()
    }

    function RB() {
      return PB.prefetch()
    }

    function aB(BB) {
      return PB.markTrapped(BB)
    }

    function ZB() {
      PB.unload()
    }

    function XB() {
      return SB?.buffer.byteLength ?? 0
    }
  },
  5953: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(3216);
    const yB = {
      bloxd_wasm: () => "6a2efd5680223ac4664cc3045620a185da94b2f4e06849c44e38e480fc80e38a",
      bloxd_wasm_client: () => "607784131ab158c610f964eeccd0a0852f74d8ce3d4f4aee969d2f319a80e3b6",
      bloxd_wasm_workers: () => "d5276c08ec0e736252a42b7c12c1091036eec7cc17105f167a56c574e34a0505",
      bloxd_wasm_models: () => "92f9285c30a7dd1629d525045b29e9aca6c3d567d620b4834fec4760fd172ddc",
      bloxd_wasm_webgpu: () => "ed656d46a24419edcd62f7bc46fd9a190039bf0f388edff699daa513cf32f6d2",
      bloxd_wasm_webgl: () => "52116128612eeabf26c6510c105a72c4a8c70bb8b756449209899fb860a93f15",
      bloxd_wasm_webgl1: () => "3697a90b61a47ddbbdceb28b1c9caaf73e71aabf414852b8293dc48cb3f6a6a8",
      bloxd_wasm_replay: () => "5464460b78e15b4bb176525399accbb59f863e7383feb54312b177c696166e48",
      bloxd_wasm_recorder: () => "e1fdcb56336c3bc38215a981e4378ac3821b8912419bc7fd948eb1da353324ba",
      bloxd_wasm_anim: () => "74e56eee078a428190364a7d35938aac7810b6b32140848c6b994c19e70e3042",
      bloxd_wasm_textures: () => "4b25ea5144f7ce6b7af54af6beda3d49671ed61aae27771d204b13971136dce5",
      bloxd_wasm_shader_pack: () => "4746bfad07ac1f13f98ece970e8e224d9432f9561a8a4390c6f598c4e17052f5"
    };
    var pB = dB(5959);

    function lB(BB) {
      const TB = Object.prototype.hasOwnProperty.call(yB, BB) ? yB[BB]() : void 0;
      if (void 0 !== TB) return {
        sha256: TB,
        onMismatch: pB.w
      };
      throw new VB.j(`${BB} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);