export const id = 64;
export const ids = [64];
export const modules = {
  61462: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/bloxd_wasm_recorder_bg.118ede992f99db643cd2.wasm"
  },
  61456: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      BloxdRecorderWasmError: () => bk,
      RECORDER_MODULE_ID: () => uk,
      loadRecorderModule: () => Ck,
      markRecorderTrapped: () => ck,
      prefetchRecorderModule: () => Nk,
      recorderMemoryBytes: () => fk,
      unloadRecorderModule: () => Wk
    });
    var Xk = {};
    Ik.r(Xk), Ik.d(Xk, {
      BTk: () => Tk,
      Uyk: () => nk,
      yt: () => ik,
      default: () => Ok,
      initSync: () => Ek,
      lt: () => yk,
      WTk: () => lk,
      uTk: () => ak
    });
    class Tk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Lk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        zk.fgsy(kk, 0)
      }
      busy() {
        return 0 !== zk.qQ4m(this.__wbg_ptr)
      }
      command(kk, Fk) {
        return 0 !== zk.U0fg(this.__wbg_ptr, kk, Fk)
      }
      bTk(kk) {
        return zk.NI5y(this.__wbg_ptr, kk) >>> 0
      }
      pTk() {
        zk.deJz(this.__wbg_ptr)
      }
      GTk() {
        return zk.hS4Q(this.__wbg_ptr) >>> 0
      }
      nTk() {
        return zk.KEUx(this.__wbg_ptr)
      }
      CTk() {
        return zk.ZqSH(this.__wbg_ptr) >>> 0
      }
      NTk() {
        return zk.CpX0(this.__wbg_ptr) >>> 0
      }
      feed(kk) {
        return zk.qUAt(this.__wbg_ptr, kk) >>> 0
      }
      constructor() {
        const kk = zk.YJ0r();
        return this.__wbg_ptr = kk, Lk.register(this, this.__wbg_ptr, this), this
      }
      UTk() {
        return zk.Qk1Y(this.__wbg_ptr) >>> 0
      }
      Cyk() {
        return zk.VdKM(this.__wbg_ptr) >>> 0
      }
      OTk(kk, Fk, Ik) {
        return 0 !== zk.h8cV(this.__wbg_ptr, kk, Fk, Ik)
      }
      stage(kk) {
        return zk.vB1F(this.__wbg_ptr, kk) >>> 0
      }
      step() {
        return zk.YVQB(this.__wbg_ptr) >>> 0
      }
    }

    function ik(kk, Fk) {
      const Ik = function(kk, Fk, Ik) {
          if (void 0 === Ik) {
            const Ik = Qk.encode(kk),
              Xk = Fk(Ik.length, 1) >>> 0;
            return ek().subarray(Xk, Xk + Ik.length).set(Ik), Sk = Ik.length, Xk
          }
          let Xk = kk.length,
            Tk = Fk(Xk, 1) >>> 0;
          const ik = ek();
          let yk = 0;
          for (; yk < Xk; yk++) {
            const Fk = kk.charCodeAt(yk);
            if (Fk > 127) break;
            ik[Tk + yk] = Fk
          }
          if (yk !== Xk) {
            0 !== yk && (kk = kk.slice(yk)), Tk = Ik(Tk, Xk, Xk = yk + 3 * kk.length, 1) >>> 0;
            const Fk = ek().subarray(Tk + yk, Tk + Xk);
            yk += Qk.encodeInto(kk, Fk).written, Tk = Ik(Tk, Xk, yk, 1) >>> 0
          }
          return Sk = yk, Tk
        }(kk, zk.EOOZ, zk.jFoY),
        Xk = Sk,
        Tk = zk.kHfM(Ik, Xk, Fk);
      if (Tk[1]) throw Jk(Tk[0])
    }

    function yk() {
      zk.BY5A()
    }

    function lk() {
      return zk.PzaC() >>> 0
    }

    function ak() {
      return Jk(zk.KsAP())
    }

    function qk() {
      return {
        __proto__: null,
        g1Rq: {
          __proto__: null,
          YWRk: function(kk, Fk) {
            return tk(Error(Zk(kk, Fk)))
          },
          oQc0: function() {
            return tk(zk.memory)
          },
          CC7N: function(kk, Fk) {
            throw new Error(Zk(kk, Fk))
          },
          OeOt: function(kk, Fk) {
            console.error(Zk(kk, Fk))
          },
          wkYC: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Tk.prototype[Symbol.dispose] = Tk.prototype.free);
    const Lk = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((kk => zk?.__wbg_recordermodule_free(kk, 1)));

    function tk(kk) {
      Hk === wk.length && wk.push(wk.length + 1);
      const Fk = Hk;
      return Hk = wk[Fk], wk[Fk] = kk, Fk
    }

    function Zk(kk, Fk) {
      return function(kk, Fk) {
        Kk += Fk, Kk >= Pk && (xk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), xk.decode(), Kk = Fk);
        return xk.decode(ek().subarray(kk, kk + Fk))
      }(kk >>> 0, Fk)
    }
    let jk = null;

    function ek() {
      return null !== jk && 0 !== jk.byteLength || (jk = new Uint8Array(zk.memory.buffer)), jk
    }
    let wk = new Array(1024).fill(void 0);
    wk.push(void 0, null, !0, !1);
    let Hk = wk.length;

    function Jk(kk) {
      const Fk = function(kk) {
        return wk[kk]
      }(kk);
      return function(kk) {
        kk < 1028 || (wk[kk] = Hk, Hk = kk)
      }(kk), Fk
    }
    let xk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    xk.decode();
    const Pk = 2146435072;
    let Kk = 0;
    const Qk = new TextEncoder;
    "encodeInto" in Qk || (Qk.encodeInto = function(kk, Fk) {
      const Ik = Qk.encode(kk);
      return Fk.set(Ik), {
        read: kk.length,
        written: Ik.length
      }
    });
    let sk, Vk, zk, Sk = 0;

    function vk(kk, Fk) {
      return Vk = kk, zk = kk.exports, sk = Fk, jk = null, zk.jWvk(), zk
    }

    function Ek(kk) {
      if (void 0 !== zk) return zk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Fk = qk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return vk(new WebAssembly.Instance(kk, Fk), kk)
    }
    async function Ok(kk) {
      if (void 0 !== zk) return zk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Fk = qk();
      ("string" === typeof kk || "function" === typeof Request && kk instanceof Request || "function" === typeof URL && kk instanceof URL) && (kk = fetch(kk));
      const {
        instance: Ik,
        module: Xk
      } = await async function(kk, Fk) {
        if ("function" === typeof Response && kk instanceof Response) {
          if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(kk, Fk)
          } catch (Ik) {
            if (! function(kk) {
                switch (kk) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(kk.type) || "application/wasm" === kk.headers.get("Content-Type")) throw Ik;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Ik)
          }
          const Xk = await kk.arrayBuffer();
          return await WebAssembly.instantiate(Xk, Fk)
        } {
          const Ik = await WebAssembly.instantiate(kk, Fk);
          return Ik instanceof WebAssembly.Instance ? {
            instance: Ik,
            module: kk
          } : Ik
        }
      }(await kk, Fk);
      return vk(Ik, Xk)
    }

    function nk() {
      zk = void 0, Vk = void 0, jk = null, wk = new Array(1024).fill(void 0), wk.push(void 0, null, !0, !1), Hk = wk.length
    }
    var Gk = Ik(2803),
      pk = Ik(6599);
    const uk = 2;
    class bk extends Error {
      stage;
      constructor(kk, Fk) {
        super((0, Gk.C)(kk, Fk), {
          cause: Fk
        }), this.name = "BloxdRecorderWasmError", this.stage = kk
      }
    }
    let Rk = null;
    const Uk = function(kk) {
      let Fk = null,
        Ik = null,
        Xk = null,
        Tk = null;
      const ik = async () => {
        let Ik = null;
        try {
          return Ik = Fk ??= (0, Gk.G)(kk.url(), (0, pk.c)(kk.name)), await Ik
        } catch (Xk) {
          throw Fk === Ik && (Fk = null), kk.error((0, Gk.M)(Xk), Xk)
        }
      };
      return {
        load: () => {
          if (Tk) return Promise.reject(Tk);
          if (Ik) return Ik;
          const Fk = (async () => {
            const Fk = await ik();
            try {
              await kk.init(Fk)
            } catch (Ik) {
              throw kk.error("instantiate", Ik)
            }
            return kk.bindings
          })();
          Ik = Fk, Xk = Fk;
          const yk = () => {
            Xk === Fk && (Xk = null)
          };
          return Fk.then(yk, (() => {
            yk(), Ik === Fk && (Ik = null)
          })), Fk
        },
        prefetch: async () => {
          Tk || Ik || await ik()
        },
        markTrapped: Fk => (Tk ??= kk.error("call", Fk), Tk),
        unload: () => {
          Tk || !kk.reset || Xk || (kk.reset(), Ik = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new Ik.U(Ik(61462)),
      init: async kk => {
        await Ok({
          module_or_path: kk
        }), Rk = ak()
      },
      bindings: Xk,
      error: (kk, Fk) => new bk(kk, Fk),
      reset: () => {
        nk(), Rk = null
      }
    });

    function Ck() {
      return Uk.load()
    }

    function Nk() {
      return Uk.prefetch()
    }

    function ck(kk) {
      return Uk.markTrapped(kk)
    }

    function Wk() {
      Uk.unload()
    }

    function fk() {
      return Rk?.buffer.byteLength ?? 0
    }
  },
  6599: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(2803);
    const Tk = {
      bloxd_wasm: () => "e2f9e22926b42992a62e6da973b3cd1227290abc3e4b086f16ef7a6e7451e01c",
      bloxd_wasm_client: () => "197b3a58630dd256c73f6be56077b03aba52688d49b256cfcb5b4297a602be6f",
      bloxd_wasm_workers: () => "c531aa2c5eb2277940017568a817b82729d5bd8e37ed09fdb9542eeedecfabb2",
      bloxd_wasm_models: () => "82813a7dd849808b1d07d41cb80b2035277c675f83cdbe5540a809aa86e18dae",
      bloxd_wasm_webgpu: () => "2066e38e37e17624dae8b4b9c559f5daf047cb3ceb4eb8056d5135d5b3d9eb24",
      bloxd_wasm_webgl: () => "3d1d580992195f6369c2533ce100ae6e8452da7398faf88e49b339f937ec6192",
      bloxd_wasm_webgl1: () => "8032d9766cccf3c8343274c4d612b6bb3252bd4e5129a88b0ce812c44371db80",
      bloxd_wasm_replay: () => "8d3f5aa602437d8a622249e4b26ef375d3132f03479495456878d8869447f290",
      bloxd_wasm_recorder: () => "4e4293beaac6f6862394c42133a435a6ade3bf181e4ae4bc1a5a3c0c8e0c9dd2",
      bloxd_wasm_anim: () => "125adb66f5cee367958854d2a9364d34f8d55bf2c7b62e20f2a9dcc7b9af5035",
      bloxd_wasm_textures: () => "b45159af64c2cb22c8ac7c32ed16b3591e0026feb57c6ebfb95e710677904764",
      bloxd_wasm_shader_pack: () => "b4044fc49c30628f5ddaad152e8054fb78f46958556f35beebe36f24a022d42c"
    };
    var ik = Ik(4692);

    function yk(kk) {
      const Fk = Object.prototype.hasOwnProperty.call(Tk, kk) ? Tk[kk]() : void 0;
      if (void 0 !== Fk) return {
        sha256: Fk,
        onMismatch: ik.C
      };
      throw new Xk.g(`${kk} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);