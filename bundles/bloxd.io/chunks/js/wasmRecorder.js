export const id = 61;
export const ids = [61];
export const modules = {
  61234: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/bloxd_wasm_recorder_bg.db59ada9f65d1d2e879b.wasm"
  },
  61228: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      BloxdRecorderWasmError: () => Gk,
      RECORDER_MODULE_ID: () => ck,
      loadRecorderModule: () => Dk,
      markRecorderTrapped: () => Pk,
      prefetchRecorderModule: () => zk,
      recorderMemoryBytes: () => qk,
      unloadRecorderModule: () => hk
    });
    var Rk = {};
    Bk.r(Rk), Bk.d(Rk, {
      Stk: () => tk,
      OXk: () => Mk,
      HV: () => ak,
      default: () => uk,
      initSync: () => Hk,
      uV: () => Xk,
      Otk: () => bk,
      mtk: () => wk
    });
    class tk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, sk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Ek.eQ2G(kk, 0)
      }
      busy() {
        return 0 !== Ek.bJt6(this.__wbg_ptr)
      }
      command(kk, Fk) {
        return 0 !== Ek.WGJ1(this.__wbg_ptr, kk, Fk)
      }
      Wtk(kk) {
        return Ek.W5bz(this.__wbg_ptr, kk) >>> 0
      }
      ftk() {
        Ek.BJgN(this.__wbg_ptr)
      }
      ytk() {
        return Ek.V3pm(this.__wbg_ptr) >>> 0
      }
      etk() {
        return Ek.jkof(this.__wbg_ptr)
      }
      Ytk() {
        return Ek.faD3(this.__wbg_ptr) >>> 0
      }
      otk() {
        return Ek.QX09(this.__wbg_ptr) >>> 0
      }
      feed(kk) {
        return Ek.kat7(this.__wbg_ptr, kk) >>> 0
      }
      constructor() {
        const kk = Ek.bgfb();
        return this.__wbg_ptr = kk, sk.register(this, this.__wbg_ptr, this), this
      }
      itk() {
        return Ek.sHSp(this.__wbg_ptr) >>> 0
      }
      EXk() {
        return Ek.B9Bp(this.__wbg_ptr) >>> 0
      }
      Atk(kk, Fk, Bk) {
        return 0 !== Ek.ZC8B(this.__wbg_ptr, kk, Fk, Bk)
      }
      stage(kk) {
        return Ek.PQLA(this.__wbg_ptr, kk) >>> 0
      }
      step() {
        return Ek.wqp0(this.__wbg_ptr) >>> 0
      }
    }

    function ak(kk, Fk) {
      const Bk = function(kk, Fk, Bk) {
          if (void 0 === Bk) {
            const Bk = Yk.encode(kk),
              Rk = Fk(Bk.length, 1) >>> 0;
            return ek().subarray(Rk, Rk + Bk.length).set(Bk), Sk = Bk.length, Rk
          }
          let Rk = kk.length,
            tk = Fk(Rk, 1) >>> 0;
          const ak = ek();
          let Xk = 0;
          for (; Xk < Rk; Xk++) {
            const Fk = kk.charCodeAt(Xk);
            if (Fk > 127) break;
            ak[tk + Xk] = Fk
          }
          if (Xk !== Rk) {
            0 !== Xk && (kk = kk.slice(Xk)), tk = Bk(tk, Rk, Rk = Xk + 3 * kk.length, 1) >>> 0;
            const Fk = ek().subarray(tk + Xk, tk + Rk);
            Xk += Yk.encodeInto(kk, Fk).written, tk = Bk(tk, Rk, Xk, 1) >>> 0
          }
          return Sk = Xk, tk
        }(kk, Ek.jZpB, Ek.djkQ),
        Rk = Sk,
        tk = Ek.PHRq(Bk, Rk, Fk);
      if (tk[1]) throw mk(tk[0])
    }

    function Xk() {
      Ek.Hr2A()
    }

    function bk() {
      return Ek.yXJn() >>> 0
    }

    function wk() {
      return mk(Ek.WncK())
    }

    function dk() {
      return {
        __proto__: null,
        kMkF: {
          __proto__: null,
          QhAj: function(kk, Fk) {
            return Vk(Error(Jk(kk, Fk)))
          },
          VkRk: function() {
            return Vk(Ek.memory)
          },
          DNg0: function(kk, Fk) {
            throw new Error(Jk(kk, Fk))
          },
          iygd: function(kk, Fk) {
            console.error(Jk(kk, Fk))
          },
          QFDV: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (tk.prototype[Symbol.dispose] = tk.prototype.free);
    const sk = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((kk => Ek?.__wbg_recordermodule_free(kk, 1)));

    function Vk(kk) {
      fk === yk.length && yk.push(yk.length + 1);
      const Fk = fk;
      return fk = yk[Fk], yk[Fk] = kk, Fk
    }

    function Jk(kk, Fk) {
      return function(kk, Fk) {
        ik += Fk, ik >= vk && (Wk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Wk.decode(), ik = Fk);
        return Wk.decode(ek().subarray(kk, kk + Fk))
      }(kk >>> 0, Fk)
    }
    let Ak = null;

    function ek() {
      return null !== Ak && 0 !== Ak.byteLength || (Ak = new Uint8Array(Ek.memory.buffer)), Ak
    }
    let yk = new Array(1024).fill(void 0);
    yk.push(void 0, null, !0, !1);
    let fk = yk.length;

    function mk(kk) {
      const Fk = function(kk) {
        return yk[kk]
      }(kk);
      return function(kk) {
        kk < 1028 || (yk[kk] = fk, fk = kk)
      }(kk), Fk
    }
    let Wk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Wk.decode();
    const vk = 2146435072;
    let ik = 0;
    const Yk = new TextEncoder;
    "encodeInto" in Yk || (Yk.encodeInto = function(kk, Fk) {
      const Bk = Yk.encode(kk);
      return Fk.set(Bk), {
        read: kk.length,
        written: Bk.length
      }
    });
    let Lk, Ok, Ek, Sk = 0;

    function Nk(kk, Fk) {
      return Ok = kk, Ek = kk.exports, Lk = Fk, Ak = null, Ek.LuC5(), Ek
    }

    function Hk(kk) {
      if (void 0 !== Ek) return Ek;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Fk = dk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return Nk(new WebAssembly.Instance(kk, Fk), kk)
    }
    async function uk(kk) {
      if (void 0 !== Ek) return Ek;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Fk = dk();
      ("string" === typeof kk || "function" === typeof Request && kk instanceof Request || "function" === typeof URL && kk instanceof URL) && (kk = fetch(kk));
      const {
        instance: Bk,
        module: Rk
      } = await async function(kk, Fk) {
        if ("function" === typeof Response && kk instanceof Response) {
          if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(kk, Fk)
          } catch (Bk) {
            if (! function(kk) {
                switch (kk) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(kk.type) || "application/wasm" === kk.headers.get("Content-Type")) throw Bk;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Bk)
          }
          const Rk = await kk.arrayBuffer();
          return await WebAssembly.instantiate(Rk, Fk)
        } {
          const Bk = await WebAssembly.instantiate(kk, Fk);
          return Bk instanceof WebAssembly.Instance ? {
            instance: Bk,
            module: kk
          } : Bk
        }
      }(await kk, Fk);
      return Nk(Bk, Rk)
    }

    function Mk() {
      Ek = void 0, Ok = void 0, Ak = null, yk = new Array(1024).fill(void 0), yk.push(void 0, null, !0, !1), fk = yk.length
    }
    var gk = Bk(3506),
      Uk = Bk(6325);
    const ck = 2;
    class Gk extends Error {
      stage;
      constructor(kk, Fk) {
        super((0, gk.F)(kk, Fk), {
          cause: Fk
        }), this.name = "BloxdRecorderWasmError", this.stage = kk
      }
    }
    let Tk = null;
    const rk = function(kk) {
      let Fk = null,
        Bk = null,
        Rk = null,
        tk = null;
      const ak = async () => {
        let Bk = null;
        try {
          return Bk = Fk ??= (0, gk.J)(kk.url(), (0, Uk.d)(kk.name)), await Bk
        } catch (Rk) {
          throw Fk === Bk && (Fk = null), kk.error((0, gk.P)(Rk), Rk)
        }
      };
      return {
        load: () => {
          if (tk) return Promise.reject(tk);
          if (Bk) return Bk;
          const Fk = (async () => {
            const Fk = await ak();
            try {
              await kk.init(Fk)
            } catch (Bk) {
              throw kk.error("instantiate", Bk)
            }
            return kk.bindings
          })();
          Bk = Fk, Rk = Fk;
          const Xk = () => {
            Rk === Fk && (Rk = null)
          };
          return Fk.then(Xk, (() => {
            Xk(), Bk === Fk && (Bk = null)
          })), Fk
        },
        prefetch: async () => {
          tk || Bk || await ak()
        },
        markTrapped: Fk => (tk ??= kk.error("call", Fk), tk),
        unload: () => {
          tk || !kk.reset || Rk || (kk.reset(), Bk = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new Bk.U(Bk(61234)),
      init: async kk => {
        await uk({
          module_or_path: kk
        }), Tk = wk()
      },
      bindings: Rk,
      error: (kk, Fk) => new Gk(kk, Fk),
      reset: () => {
        Mk(), Tk = null
      }
    });

    function Dk() {
      return rk.load()
    }

    function zk() {
      return rk.prefetch()
    }

    function Pk(kk) {
      return rk.markTrapped(kk)
    }

    function hk() {
      rk.unload()
    }

    function qk() {
      return Tk?.buffer.byteLength ?? 0
    }
  },
  6325: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(3506);
    const tk = {
      bloxd_wasm: () => "0a084eabef9950ab2a7e71c5d9de42289fbfae2d87a10d8ea83b0d640034d04e",
      bloxd_wasm_client: () => "670064b0efa28d20ee2652f560d980392b14b8f575d78dbc148a398783212dd9",
      bloxd_wasm_workers: () => "e54ffb745a3a64b4eff08d3acff88bafa819b4a1d24982975989975b8c465d7c",
      bloxd_wasm_models: () => "3510593bc144c34047bb046244d4f79681313b64dc4db62f262e4940cf2ac935",
      bloxd_wasm_webgpu: () => "7227c7fb095ae833899f1bc6083c6fd008f81638c2024bb597f02a7221b8b9f3",
      bloxd_wasm_webgl: () => "5973cccff624afdd2d9ac129d6f0410128c5eb760d9c1d374fcacade730af5c8",
      bloxd_wasm_webgl1: () => "2ea465bc1bd601e27e7b5fa0838d1029260ab0f8117b76b80379a1022f1bc97f",
      bloxd_wasm_replay: () => "5250a6be4ccaa643dd55bed731d226b43b001447adaac84ccb3f3d6e643166e0",
      bloxd_wasm_recorder: () => "c25abb16c2b998f3635848bcd240bb48a3dcf3a54feacc8db2b427a87519c394",
      bloxd_wasm_anim: () => "f47375bb802972bde149d1e0bb1d06c729d525fa6881c46c5ac4757224208b36",
      bloxd_wasm_textures: () => "a81b39f82de7af92548359d4ee9d763c26ee7b3342018c2571590a49dd51e093",
      bloxd_wasm_shader_pack: () => "b47f8831d78bff4de588686f88a8db44a0115f8cadda219f585be50545eff9c2"
    };
    var ak = Bk(4425);

    function Xk(kk) {
      const Fk = Object.prototype.hasOwnProperty.call(tk, kk) ? tk[kk]() : void 0;
      if (void 0 !== Fk) return {
        sha256: Fk,
        onMismatch: ak.v
      };
      throw new Rk.k(`${kk} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);