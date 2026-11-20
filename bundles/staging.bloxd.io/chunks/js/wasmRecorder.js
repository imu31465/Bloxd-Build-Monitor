export const id = 62;
export const ids = [62];
export const modules = {
  60900: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/bloxd_wasm_recorder_bg.b90266f0536ba7d11039.wasm"
  },
  60894: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      BloxdRecorderWasmError: () => tv,
      RECORDER_MODULE_ID: () => xv,
      loadRecorderModule: () => Qv,
      markRecorderTrapped: () => Av,
      prefetchRecorderModule: () => Zv,
      recorderMemoryBytes: () => Hv,
      unloadRecorderModule: () => Lv
    });
    var hv = {};
    Pv.r(hv), Pv.d(hv, {
      ohv: () => Sv,
      yev: () => Vv,
      PT: () => ev,
      default: () => Kv,
      initSync: () => Dv,
      hT: () => gv,
      Jhv: () => pv,
      Zhv: () => dv
    });
    class Sv {
      __destroy_into_raw() {
        const vv = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lv.unregister(this), vv
      }
      free() {
        const vv = this.__destroy_into_raw();
        Yv.STJ1(vv, 0)
      }
      busy() {
        return 0 !== Yv.kMfT(this.__wbg_ptr)
      }
      command(vv, zv) {
        return 0 !== Yv.AHrn(this.__wbg_ptr, vv, zv)
      }
      Ahv(vv) {
        return Yv.sbUk(this.__wbg_ptr, vv) >>> 0
      }
      Qhv() {
        Yv.ZIGN(this.__wbg_ptr)
      }
      Ihv() {
        return Yv.x0s0(this.__wbg_ptr) >>> 0
      }
      qhv() {
        return Yv.gR0n(this.__wbg_ptr)
      }
      Mhv() {
        return Yv.G4UW(this.__wbg_ptr) >>> 0
      }
      yhv() {
        return Yv.KPi6(this.__wbg_ptr) >>> 0
      }
      feed(vv) {
        return Yv.jsOq(this.__wbg_ptr, vv) >>> 0
      }
      constructor() {
        const vv = Yv.Cbp7();
        return this.__wbg_ptr = vv, lv.register(this, this.__wbg_ptr, this), this
      }
      Hhv() {
        return Yv.qtC9(this.__wbg_ptr) >>> 0
      }
      Bev() {
        return Yv.NlI9(this.__wbg_ptr) >>> 0
      }
      thv(vv, zv, Pv) {
        return 0 !== Yv.J8CB(this.__wbg_ptr, vv, zv, Pv)
      }
      stage(vv) {
        return Yv.svs9(this.__wbg_ptr, vv) >>> 0
      }
      step() {
        return Yv.gUZF(this.__wbg_ptr) >>> 0
      }
    }

    function ev(vv, zv) {
      const Pv = function(vv, zv, Pv) {
          if (void 0 === Pv) {
            const Pv = jv.encode(vv),
              hv = zv(Pv.length, 1) >>> 0;
            return av().subarray(hv, hv + Pv.length).set(Pv), nv = Pv.length, hv
          }
          let hv = vv.length,
            Sv = zv(hv, 1) >>> 0;
          const ev = av();
          let gv = 0;
          for (; gv < hv; gv++) {
            const zv = vv.charCodeAt(gv);
            if (zv > 127) break;
            ev[Sv + gv] = zv
          }
          if (gv !== hv) {
            0 !== gv && (vv = vv.slice(gv)), Sv = Pv(Sv, hv, hv = gv + 3 * vv.length, 1) >>> 0;
            const zv = av().subarray(Sv + gv, Sv + hv);
            gv += jv.encodeInto(vv, zv).written, Sv = Pv(Sv, hv, gv, 1) >>> 0
          }
          return nv = gv, Sv
        }(vv, Yv.KjBH, Yv.Dvmw),
        hv = nv,
        Sv = Yv.KBUF(Pv, hv, zv);
      if (Sv[1]) throw iv(Sv[0])
    }

    function gv() {
      Yv.PscT()
    }

    function pv() {
      return Yv.ULki() >>> 0
    }

    function dv() {
      return iv(Yv.RcKy())
    }

    function Nv() {
      return {
        __proto__: null,
        odeF: {
          __proto__: null,
          g5PX: function(vv, zv) {
            return Tv(Error(Wv(vv, zv)))
          },
          PtDu: function() {
            return Tv(Yv.memory)
          },
          m4MG: function(vv, zv) {
            throw new Error(Wv(vv, zv))
          },
          b3VD: function(vv, zv) {
            console.error(Wv(vv, zv))
          },
          EkaW: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Sv.prototype[Symbol.dispose] = Sv.prototype.free);
    const lv = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((vv => Yv?.__wbg_recordermodule_free(vv, 1)));

    function Tv(vv) {
      Cv === sv.length && sv.push(sv.length + 1);
      const zv = Cv;
      return Cv = sv[zv], sv[zv] = vv, zv
    }

    function Wv(vv, zv) {
      return function(vv, zv) {
        mv += zv, mv >= Gv && (cv = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), cv.decode(), mv = zv);
        return cv.decode(av().subarray(vv, vv + zv))
      }(vv >>> 0, zv)
    }
    let wv = null;

    function av() {
      return null !== wv && 0 !== wv.byteLength || (wv = new Uint8Array(Yv.memory.buffer)), wv
    }
    let sv = new Array(1024).fill(void 0);
    sv.push(void 0, null, !0, !1);
    let Cv = sv.length;

    function iv(vv) {
      const zv = function(vv) {
        return sv[vv]
      }(vv);
      return function(vv) {
        vv < 1028 || (sv[vv] = Cv, Cv = vv)
      }(vv), zv
    }
    let cv = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    cv.decode();
    const Gv = 2146435072;
    let mv = 0;
    const jv = new TextEncoder;
    "encodeInto" in jv || (jv.encodeInto = function(vv, zv) {
      const Pv = jv.encode(vv);
      return zv.set(Pv), {
        read: vv.length,
        written: Pv.length
      }
    });
    let fv, Fv, Yv, nv = 0;

    function Ov(vv, zv) {
      return Fv = vv, Yv = vv.exports, fv = zv, wv = null, Yv.ULuZ(), Yv
    }

    function Dv(vv) {
      if (void 0 !== Yv) return Yv;
      void 0 !== vv && (Object.getPrototypeOf(vv) === Object.prototype ? ({
        module: vv
      } = vv) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zv = Nv();
      vv instanceof WebAssembly.Module || (vv = new WebAssembly.Module(vv));
      return Ov(new WebAssembly.Instance(vv, zv), vv)
    }
    async function Kv(vv) {
      if (void 0 !== Yv) return Yv;
      void 0 !== vv && (Object.getPrototypeOf(vv) === Object.prototype ? ({
        module_or_path: vv
      } = vv) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zv = Nv();
      ("string" === typeof vv || "function" === typeof Request && vv instanceof Request || "function" === typeof URL && vv instanceof URL) && (vv = fetch(vv));
      const {
        instance: Pv,
        module: hv
      } = await async function(vv, zv) {
        if ("function" === typeof Response && vv instanceof Response) {
          if (!vv.ok) throw new Error(`failed to fetch Wasm: ${vv.status} ${vv.statusText} fetching '${vv.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(vv, zv)
          } catch (Pv) {
            if (! function(vv) {
                switch (vv) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(vv.type) || "application/wasm" === vv.headers.get("Content-Type")) throw Pv;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Pv)
          }
          const hv = await vv.arrayBuffer();
          return await WebAssembly.instantiate(hv, zv)
        } {
          const Pv = await WebAssembly.instantiate(vv, zv);
          return Pv instanceof WebAssembly.Instance ? {
            instance: Pv,
            module: vv
          } : Pv
        }
      }(await vv, zv);
      return Ov(Pv, hv)
    }

    function Vv() {
      Yv = void 0, Fv = void 0, wv = null, sv = new Array(1024).fill(void 0), sv.push(void 0, null, !0, !1), Cv = sv.length
    }
    var Uv = Pv(3473),
      Rv = Pv(6343);
    const xv = 2;
    class tv extends Error {
      stage;
      constructor(vv, zv) {
        super((0, Uv.D)(vv, zv), {
          cause: zv
        }), this.name = "BloxdRecorderWasmError", this.stage = vv
      }
    }
    let qv = null;
    const Iv = function(vv) {
      let zv = null,
        Pv = null,
        hv = null,
        Sv = null;
      const ev = async () => {
        let Pv = null;
        try {
          return Pv = zv ??= (0, Uv.F)(vv.url(), (0, Rv.c)(vv.name)), await Pv
        } catch (hv) {
          throw zv === Pv && (zv = null), vv.error((0, Uv.M)(hv), hv)
        }
      };
      return {
        load: () => {
          if (Sv) return Promise.reject(Sv);
          if (Pv) return Pv;
          const zv = (async () => {
            const zv = await ev();
            try {
              await vv.init(zv)
            } catch (Pv) {
              throw vv.error("instantiate", Pv)
            }
            return vv.bindings
          })();
          Pv = zv, hv = zv;
          const gv = () => {
            hv === zv && (hv = null)
          };
          return zv.then(gv, (() => {
            gv(), Pv === zv && (Pv = null)
          })), zv
        },
        prefetch: async () => {
          Sv || Pv || await ev()
        },
        markTrapped: zv => (Sv ??= vv.error("call", zv), Sv),
        unload: () => {
          Sv || !vv.reset || hv || (vv.reset(), Pv = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new Pv.U(Pv(60900)),
      init: async vv => {
        await Kv({
          module_or_path: vv
        }), qv = dv()
      },
      bindings: hv,
      error: (vv, zv) => new tv(vv, zv),
      reset: () => {
        Vv(), qv = null
      }
    });

    function Qv() {
      return Iv.load()
    }

    function Zv() {
      return Iv.prefetch()
    }

    function Av(vv) {
      return Iv.markTrapped(vv)
    }

    function Lv() {
      Iv.unload()
    }

    function Hv() {
      return qv?.buffer.byteLength ?? 0
    }
  },
  6343: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(3473);
    const Sv = {
      bloxd_wasm: () => "242cfb746367816b85c0d450194bdff4c53a9ad8bf401630f6949cb63852d1be",
      bloxd_wasm_client: () => "d02ab3ff378e3cabdd07cd9c554ec471bb49ecb41d1bcfc8f9f48d000f552813",
      bloxd_wasm_workers: () => "8664088122d5b673ff7a8e8f0b71864091addbd11a22fd8877301ef2e1d7d7c6",
      bloxd_wasm_models: () => "0ce508e0c3797e4d2237f5b419263b9df4627372af441dcaec1b4b4938917dcb",
      bloxd_wasm_webgpu: () => "d02362ea4b01ac0b3094c90bd530e9d9541fd4d02dbb0cf37e62ce03b504586a",
      bloxd_wasm_webgl: () => "5587f4c12aefda662a798fa76f5ef5f0d26531308da330b663163a4a6a353686",
      bloxd_wasm_webgl1: () => "330ca93132b966b9f2d177baefcf1ec86106db4d42b6875043c867a4fbf8f714",
      bloxd_wasm_replay: () => "970290489bfdef049310fc4e3d6c024c9afee7381deeccf9925d9d2bf1ad0949",
      bloxd_wasm_recorder: () => "2118a197767ebdac164a9fab410a0150f76cd900eb0e711f4a60fc6e38ae5205",
      bloxd_wasm_anim: () => "fb2fc3b43abfd08ad961098c6784b1c03d7af35338bbd752b5df3af261972615",
      bloxd_wasm_textures: () => "ac6c8ff1da71e10b1ed9866e9a4eb70d166a36bb2f0e1c05cef1de7d9d6b6043",
      bloxd_wasm_shader_pack: () => "d571fee4d34b97756c8d2b36706fa9baf34990285d56aea5ea806d4682070476"
    };
    var ev = Pv(4451);

    function gv(vv) {
      const zv = Object.prototype.hasOwnProperty.call(Sv, vv) ? Sv[vv]() : void 0;
      if (void 0 !== zv) return {
        sha256: zv,
        onMismatch: ev.y
      };
      throw new hv.h(`${vv} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);