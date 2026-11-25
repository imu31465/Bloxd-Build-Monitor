export const id = 65;
export const ids = [65];
export const modules = {
  61498: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/bloxd_wasm_recorder_bg.9be0e4f456ba305493ee.wasm"
  },
  61495: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      BloxdRecorderWasmError: () => PB,
      RECORDER_MODULE_ID: () => jB,
      loadRecorderModule: () => mB,
      markRecorderTrapped: () => LB,
      prefetchRecorderModule: () => XB,
      recorderMemoryBytes: () => uB,
      unloadRecorderModule: () => eB
    });
    var TB = {};
    ZB.r(TB), ZB.d(TB, {
      NoB: () => JB,
      cvB: () => aB,
      hh: () => oB,
      default: () => pB,
      initSync: () => iB,
      zh: () => GB,
      zoB: () => vB,
      ooB: () => kB
    });
    class JB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, nB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        wB.L5HD(BB, 0)
      }
      busy() {
        return 0 !== wB.M782(this.__wbg_ptr)
      }
      command(BB, IB) {
        return 0 !== wB.PsDP(this.__wbg_ptr, BB, IB)
      }
      GoB(BB) {
        return wB.gCef(this.__wbg_ptr, BB) >>> 0
      }
      JoB() {
        wB.Hybw(this.__wbg_ptr)
      }
      ToB() {
        return wB.bitP(this.__wbg_ptr) >>> 0
      }
      ZoB() {
        return wB.B5Pg(this.__wbg_ptr)
      }
      coB() {
        return wB.jmDR(this.__wbg_ptr) >>> 0
      }
      noB() {
        return wB.nz84(this.__wbg_ptr) >>> 0
      }
      feed(BB) {
        return wB.vRCe(this.__wbg_ptr, BB) >>> 0
      }
      constructor() {
        const BB = wB.xFoM();
        return this.__wbg_ptr = BB, nB.register(this, this.__wbg_ptr, this), this
      }
      koB() {
        return wB.qz7w(this.__wbg_ptr) >>> 0
      }
      nvB() {
        return wB.Wqkc(this.__wbg_ptr) >>> 0
      }
      IoB(BB, IB, ZB) {
        return 0 !== wB.jRm4(this.__wbg_ptr, BB, IB, ZB)
      }
      stage(BB) {
        return wB.h0FS(this.__wbg_ptr, BB) >>> 0
      }
      step() {
        return wB.IBzI(this.__wbg_ptr) >>> 0
      }
    }

    function oB(BB, IB) {
      const ZB = function(BB, IB, ZB) {
          if (void 0 === ZB) {
            const ZB = CB.encode(BB),
              TB = IB(ZB.length, 1) >>> 0;
            return NB().subarray(TB, TB + ZB.length).set(ZB), OB = ZB.length, TB
          }
          let TB = BB.length,
            JB = IB(TB, 1) >>> 0;
          const oB = NB();
          let GB = 0;
          for (; GB < TB; GB++) {
            const IB = BB.charCodeAt(GB);
            if (IB > 127) break;
            oB[JB + GB] = IB
          }
          if (GB !== TB) {
            0 !== GB && (BB = BB.slice(GB)), JB = ZB(JB, TB, TB = GB + 3 * BB.length, 1) >>> 0;
            const IB = NB().subarray(JB + GB, JB + TB);
            GB += CB.encodeInto(BB, IB).written, JB = ZB(JB, TB, GB, 1) >>> 0
          }
          return OB = GB, JB
        }(BB, wB.Qjz5, wB.yRIe),
        TB = OB,
        JB = wB.Wt6O(ZB, TB, IB);
      if (JB[1]) throw yB(JB[0])
    }

    function GB() {
      wB.KG0D()
    }

    function vB() {
      return wB.H2WP() >>> 0
    }

    function kB() {
      return yB(wB.ZRW4())
    }

    function cB() {
      return {
        __proto__: null,
        lyRJ: {
          __proto__: null,
          Igfm: function(BB, IB) {
            return hB(Error(zB(BB, IB)))
          },
          S3BY: function() {
            return hB(wB.memory)
          },
          InhZ: function(BB, IB) {
            throw new Error(zB(BB, IB))
          },
          sxMY: function(BB, IB) {
            console.error(zB(BB, IB))
          },
          DkYT: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (JB.prototype[Symbol.dispose] = JB.prototype.free);
    const nB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => wB?.__wbg_recordermodule_free(BB, 1)));

    function hB(BB) {
      qB === gB.length && gB.push(gB.length + 1);
      const IB = qB;
      return qB = gB[IB], gB[IB] = BB, IB
    }

    function zB(BB, IB) {
      return function(BB, IB) {
        dB += IB, dB >= WB && (UB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), UB.decode(), dB = IB);
        return UB.decode(NB().subarray(BB, BB + IB))
      }(BB >>> 0, IB)
    }
    let FB = null;

    function NB() {
      return null !== FB && 0 !== FB.byteLength || (FB = new Uint8Array(wB.memory.buffer)), FB
    }
    let gB = new Array(1024).fill(void 0);
    gB.push(void 0, null, !0, !1);
    let qB = gB.length;

    function yB(BB) {
      const IB = function(BB) {
        return gB[BB]
      }(BB);
      return function(BB) {
        BB < 1028 || (gB[BB] = qB, qB = BB)
      }(BB), IB
    }
    let UB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    UB.decode();
    const WB = 2146435072;
    let dB = 0;
    const CB = new TextEncoder;
    "encodeInto" in CB || (CB.encodeInto = function(BB, IB) {
      const ZB = CB.encode(BB);
      return IB.set(ZB), {
        read: BB.length,
        written: ZB.length
      }
    });
    let QB, sB, wB, OB = 0;

    function YB(BB, IB) {
      return sB = BB, wB = BB.exports, QB = IB, FB = null, wB.XesA(), wB
    }

    function iB(BB) {
      if (void 0 !== wB) return wB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const IB = cB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return YB(new WebAssembly.Instance(BB, IB), BB)
    }
    async function pB(BB) {
      if (void 0 !== wB) return wB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const IB = cB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: ZB,
        module: TB
      } = await async function(BB, IB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, IB)
          } catch (ZB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw ZB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZB)
          }
          const TB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(TB, IB)
        } {
          const ZB = await WebAssembly.instantiate(BB, IB);
          return ZB instanceof WebAssembly.Instance ? {
            instance: ZB,
            module: BB
          } : ZB
        }
      }(await BB, IB);
      return YB(ZB, TB)
    }

    function aB() {
      wB = void 0, sB = void 0, FB = null, gB = new Array(1024).fill(void 0), gB.push(void 0, null, !0, !1), qB = gB.length
    }
    var HB = ZB(3043),
      MB = ZB(6771);
    const jB = 2;
    class PB extends Error {
      stage;
      constructor(BB, IB) {
        super((0, HB.G)(BB, IB), {
          cause: IB
        }), this.name = "BloxdRecorderWasmError", this.stage = BB
      }
    }
    let RB = null;
    const rB = function(BB) {
      let IB = null,
        ZB = null,
        TB = null,
        JB = null;
      const oB = async () => {
        let ZB = null;
        try {
          return ZB = IB ??= (0, HB.J)(BB.url(), (0, MB.e)(BB.name)), await ZB
        } catch (TB) {
          throw IB === ZB && (IB = null), BB.error((0, HB.N)(TB), TB)
        }
      };
      return {
        load: () => {
          if (JB) return Promise.reject(JB);
          if (ZB) return ZB;
          const IB = (async () => {
            const IB = await oB();
            try {
              await BB.init(IB)
            } catch (ZB) {
              throw BB.error("instantiate", ZB)
            }
            return BB.bindings
          })();
          ZB = IB, TB = IB;
          const GB = () => {
            TB === IB && (TB = null)
          };
          return IB.then(GB, (() => {
            GB(), ZB === IB && (ZB = null)
          })), IB
        },
        prefetch: async () => {
          JB || ZB || await oB()
        },
        markTrapped: IB => (JB ??= BB.error("call", IB), JB),
        unload: () => {
          JB || !BB.reset || TB || (BB.reset(), ZB = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new ZB.U(ZB(61498)),
      init: async BB => {
        await pB({
          module_or_path: BB
        }), RB = kB()
      },
      bindings: TB,
      error: (BB, IB) => new PB(BB, IB),
      reset: () => {
        aB(), RB = null
      }
    });

    function mB() {
      return rB.load()
    }

    function XB() {
      return rB.prefetch()
    }

    function LB(BB) {
      return rB.markTrapped(BB)
    }

    function eB() {
      rB.unload()
    }

    function uB() {
      return RB?.buffer.byteLength ?? 0
    }
  },
  6771: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(3043);
    const JB = {
      bloxd_wasm: () => "3929318ab85efbe7fbf015b7202f97f9213e396225d80b3db1d6eea98607e192",
      bloxd_wasm_client: () => "de8797e7a2073a4b84142d0cdd231107132c281529510d44e15de2b324a3a30f",
      bloxd_wasm_workers: () => "e392be22de1540260052c3350081c85739d1c5bc24a5222edf6de5771f9d53cc",
      bloxd_wasm_models: () => "18f455c31b6430161028848ff988084c6b16d32d8fa12d4af984837abfc3144f",
      bloxd_wasm_webgpu: () => "5526ae404536156accd26af71c2bbbeb37703fbb83da322278378d23a1e1d759",
      bloxd_wasm_webgl: () => "cbc2e38eabd8d787bc137c7584b67ac7d90d219065d8b2cfc013c2b7b96e44bf",
      bloxd_wasm_webgl1: () => "729c4755d993e2a2b24848672562e1cfcebc5f2cf7acaf33d9fc9440993d6ec7",
      bloxd_wasm_replay: () => "42d3e76b4bdf858378fb0fb477290e11c66f2e51aa3947bbbd34ee4a53e1e6c0",
      bloxd_wasm_recorder: () => "d9158108e4a445accd8d7aa1bf531832e077768eae0055f5cadb78f130f5884f",
      bloxd_wasm_anim: () => "1aac61a86d6f89bb60de30b43c299b746d630e8811ba65a52be7c2f8e04ccd3d",
      bloxd_wasm_textures: () => "24c39accf0c81e5ab4e85e999b876eef419c50c2e0b92783b293de227d550aeb",
      bloxd_wasm_shader_pack: () => "6ef135dd10de9c09f7158eff62c3ec8671e1706d2e1ff29eeda717db01789bd3"
    };
    var oB = ZB(4874);

    function GB(BB) {
      const IB = Object.prototype.hasOwnProperty.call(JB, BB) ? JB[BB]() : void 0;
      if (void 0 !== IB) return {
        sha256: IB,
        onMismatch: oB.D
      };
      throw new TB.g(`${BB} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);