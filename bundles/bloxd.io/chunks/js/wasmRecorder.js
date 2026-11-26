export const id = 76;
export const ids = [76];
export const modules = {
  64060: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bloxd_wasm_recorder_bg.a44eb04a0dc2f5189767.wasm"
  },
  64058: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      BloxdRecorderWasmError: () => iB,
      RECORDER_MODULE_ID: () => FB,
      loadRecorderModule: () => rB,
      markRecorderTrapped: () => wB,
      prefetchRecorderModule: () => XB,
      recorderMemoryBytes: () => cB,
      unloadRecorderModule: () => EB
    });
    var YB = {};
    GB.r(YB), GB.d(YB, {
      PoB: () => DB,
      oyB: () => uB,
      sy: () => QB,
      default: () => KB,
      initSync: () => dB,
      VP: () => oB,
      JoB: () => jB,
      GoB: () => yB
    });
    class DB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, MB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        UB.hOsm(BB, 0)
      }
      busy() {
        return 0 !== UB.icTy(this.__wbg_ptr)
      }
      command(BB, OB) {
        return 0 !== UB.YslN(this.__wbg_ptr, BB, OB)
      }
      YoB(BB) {
        return UB.cb8x(this.__wbg_ptr, BB) >>> 0
      }
      OoB() {
        UB.Of2N(this.__wbg_ptr)
      }
      BoB() {
        return UB.w6lz(this.__wbg_ptr) >>> 0
      }
      tQB() {
        return UB.mjNZ(this.__wbg_ptr)
      }
      ooB() {
        return UB.BOWk(this.__wbg_ptr) >>> 0
      }
      joB() {
        return UB.A4hq(this.__wbg_ptr) >>> 0
      }
      feed(BB) {
        return UB.inqv(this.__wbg_ptr, BB) >>> 0
      }
      constructor() {
        const BB = UB.AUf6();
        return this.__wbg_ptr = BB, MB.register(this, this.__wbg_ptr, this), this
      }
      QoB() {
        return UB.FcBX(this.__wbg_ptr) >>> 0
      }
      jyB() {
        return UB.rUXw(this.__wbg_ptr) >>> 0
      }
      xQB(BB, OB, GB) {
        return 0 !== UB.nEAZ(this.__wbg_ptr, BB, OB, GB)
      }
      stage(BB) {
        return UB.sEPk(this.__wbg_ptr, BB) >>> 0
      }
      step() {
        return UB.ocZU(this.__wbg_ptr) >>> 0
      }
    }

    function QB(BB, OB) {
      const GB = function(BB, OB, GB) {
          if (void 0 === GB) {
            const GB = VB.encode(BB),
              YB = OB(GB.length, 1) >>> 0;
            return pB().subarray(YB, YB + GB.length).set(GB), fB = GB.length, YB
          }
          let YB = BB.length,
            DB = OB(YB, 1) >>> 0;
          const QB = pB();
          let oB = 0;
          for (; oB < YB; oB++) {
            const OB = BB.charCodeAt(oB);
            if (OB > 127) break;
            QB[DB + oB] = OB
          }
          if (oB !== YB) {
            0 !== oB && (BB = BB.slice(oB)), DB = GB(DB, YB, YB = oB + 3 * BB.length, 1) >>> 0;
            const OB = pB().subarray(DB + oB, DB + YB);
            oB += VB.encodeInto(BB, OB).written, DB = GB(DB, YB, oB, 1) >>> 0
          }
          return fB = oB, DB
        }(BB, UB.sM3B, UB.NAND),
        YB = fB,
        DB = UB.wIDs(GB, YB, OB);
      if (DB[1]) throw NB(DB[0])
    }

    function oB() {
      UB.M1vZ()
    }

    function jB() {
      return UB.t9IS() >>> 0
    }

    function yB() {
      return NB(UB.f78i())
    }

    function JB() {
      return {
        __proto__: null,
        AOBA: {
          __proto__: null,
          o4TJ: function(BB, OB) {
            return PB(Error(zB(BB, OB)))
          },
          tlt6: function() {
            return PB(UB.memory)
          },
          zFII: function(BB, OB) {
            throw new Error(zB(BB, OB))
          },
          sDRc: function(BB, OB) {
            console.error(zB(BB, OB))
          },
          mTyt: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (DB.prototype[Symbol.dispose] = DB.prototype.free);
    const MB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => UB?.__wbg_recordermodule_free(BB, 1)));

    function PB(BB) {
      ZB === qB.length && qB.push(qB.length + 1);
      const OB = ZB;
      return ZB = qB[OB], qB[OB] = BB, OB
    }

    function zB(BB, OB) {
      return function(BB, OB) {
        AB += OB, AB >= WB && (RB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), RB.decode(), AB = OB);
        return RB.decode(pB().subarray(BB, BB + OB))
      }(BB >>> 0, OB)
    }
    let lB = null;

    function pB() {
      return null !== lB && 0 !== lB.byteLength || (lB = new Uint8Array(UB.memory.buffer)), lB
    }
    let qB = new Array(1024).fill(void 0);
    qB.push(void 0, null, !0, !1);
    let ZB = qB.length;

    function NB(BB) {
      const OB = function(BB) {
        return qB[BB]
      }(BB);
      return function(BB) {
        BB < 1028 || (qB[BB] = ZB, ZB = BB)
      }(BB), OB
    }
    let RB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    RB.decode();
    const WB = 2146435072;
    let AB = 0;
    const VB = new TextEncoder;
    "encodeInto" in VB || (VB.encodeInto = function(BB, OB) {
      const GB = VB.encode(BB);
      return OB.set(GB), {
        read: BB.length,
        written: GB.length
      }
    });
    let SB, nB, UB, fB = 0;

    function kB(BB, OB) {
      return nB = BB, UB = BB.exports, SB = OB, lB = null, UB.cSXA(), UB
    }

    function dB(BB) {
      if (void 0 !== UB) return UB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const OB = JB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return kB(new WebAssembly.Instance(BB, OB), BB)
    }
    async function KB(BB) {
      if (void 0 !== UB) return UB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const OB = JB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: GB,
        module: YB
      } = await async function(BB, OB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, OB)
          } catch (GB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw GB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", GB)
          }
          const YB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(YB, OB)
        } {
          const GB = await WebAssembly.instantiate(BB, OB);
          return GB instanceof WebAssembly.Instance ? {
            instance: GB,
            module: BB
          } : GB
        }
      }(await BB, OB);
      return kB(GB, YB)
    }

    function uB() {
      UB = void 0, nB = void 0, lB = null, qB = new Array(1024).fill(void 0), qB.push(void 0, null, !0, !1), ZB = qB.length
    }
    var mB = GB(3210),
      IB = GB(7161);
    const FB = 2;
    class iB extends Error {
      stage;
      constructor(BB, OB) {
        super((0, mB.C)(BB, OB), {
          cause: OB
        }), this.name = "BloxdRecorderWasmError", this.stage = BB
      }
    }
    let LB = null;
    const gB = function(BB) {
      let OB = null,
        GB = null,
        YB = null,
        DB = null;
      const QB = async () => {
        let GB = null;
        try {
          return GB = OB ??= (0, mB.G)(BB.url(), (0, IB.d)(BB.name)), await GB
        } catch (YB) {
          throw OB === GB && (OB = null), BB.error((0, mB.M)(YB), YB)
        }
      };
      return {
        load: () => {
          if (DB) return Promise.reject(DB);
          if (GB) return GB;
          const OB = (async () => {
            const OB = await QB();
            try {
              await BB.init(OB)
            } catch (GB) {
              throw BB.error("instantiate", GB)
            }
            return BB.bindings
          })();
          GB = OB, YB = OB;
          const oB = () => {
            YB === OB && (YB = null)
          };
          return OB.then(oB, (() => {
            oB(), GB === OB && (GB = null)
          })), OB
        },
        prefetch: async () => {
          DB || GB || await QB()
        },
        markTrapped: OB => (DB ??= BB.error("call", OB), DB),
        unload: () => {
          DB || !BB.reset || YB || (BB.reset(), GB = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new GB.U(GB(64060)),
      init: async BB => {
        await KB({
          module_or_path: BB
        }), LB = yB()
      },
      bindings: YB,
      error: (BB, OB) => new iB(BB, OB),
      reset: () => {
        uB(), LB = null
      }
    });

    function rB() {
      return gB.load()
    }

    function XB() {
      return gB.prefetch()
    }

    function wB(BB) {
      return gB.markTrapped(BB)
    }

    function EB() {
      gB.unload()
    }

    function cB() {
      return LB?.buffer.byteLength ?? 0
    }
  },
  7161: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(3210);
    const DB = {
      bloxd_wasm: () => "bbd4532b4204ac6b037d21981a0077e27c49bf77bad5ade13596319f1c6101a5",
      bloxd_wasm_client: () => "8365f73c3472844058a4a0f574b2102c245aef505acbb602a81be3847509c8fa",
      bloxd_wasm_workers: () => "8409ee2ec92a1f5bf3cf7df6088eeb4c89a7f9ab0b6c537ab5e6bee5e1c85a52",
      bloxd_wasm_models: () => "4297705d02ef7091b212436b1b1d90f181427336ab1bf97d3c1a2eebcb00ef44",
      bloxd_wasm_webgpu: () => "feb1e82520617426b733fd3101371d0a4d1be5eea8eb5f7115ad8b481c5ecc2a",
      bloxd_wasm_webgl: () => "ccc8a64ee7a944567fefa835e06af6da6175cc2ce9d8d4fb5fc2acb63861821b",
      bloxd_wasm_webgl1: () => "ef3b6328394821ae9f35e9d6eb203b2d9872f6911c2948b8b5bd2bd784af58be",
      bloxd_wasm_replay: () => "e6bfd69259d4961ba1c2eff287fb0493dd998b3af1045ea9988589f9c1c784a6",
      bloxd_wasm_recorder: () => "61e54a37d20be582fb8a73e1f48e79e660cbedc06e1fc696d3d52ad467693eb7",
      bloxd_wasm_anim: () => "412a9ead222a90865e84867e83bc25acfd52a0e1c584c793e1f272639ce5dc2c",
      bloxd_wasm_textures: () => "43d7ae101efe7b39af19b5e650a2896a40d167bca827906978d39975a015e416",
      bloxd_wasm_shader_pack: () => "072b43f08a8ed6ea1336897ed9d7881ce755636d8b8a8f34eaa208a897665b42"
    };
    var QB = GB(5165);

    function oB(BB) {
      const OB = Object.prototype.hasOwnProperty.call(DB, BB) ? DB[BB]() : void 0;
      if (void 0 !== OB) return {
        sha256: OB,
        onMismatch: QB.s
      };
      throw new YB.g(`${BB} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);