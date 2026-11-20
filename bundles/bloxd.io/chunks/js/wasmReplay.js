export const id = 62;
export const ids = [62];
export const modules = {
  61240: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/bloxd_wasm_replay_bg.5a19bf3e0480dc8ae6a6.wasm"
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
  },
  61237: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      BloxdReplayWasmError: () => Gk,
      loadReplayModule: () => qk,
      markReplayTrapped: () => pk,
      replayMemoryBytes: () => Zk,
      unloadReplayModule: () => Ck
    });
    var Rk = {};
    Bk.r(Rk), Bk.d(Rk, {
      Htk: () => tk,
      OXk: () => gk,
      HV: () => ak,
      default: () => Mk,
      initSync: () => uk,
      uV: () => Xk,
      Otk: () => bk,
      utk: () => wk
    });
    class tk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, sk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Sk.DLWK(kk, 0)
      }
      ctk(kk, Fk, Bk, Rk, tk, ak) {
        Sk.Q0Ib(this.__wbg_ptr, kk, Fk, Bk, Rk, tk, ak)
      }
      close() {
        Sk.Qj3p(this.__wbg_ptr)
      }
      crop(kk, Fk) {
        Sk.VZZg(this.__wbg_ptr, kk, Fk)
      }
      rtk(kk, Fk) {
        Sk.K21m(this.__wbg_ptr, kk, Fk)
      }
      ztk() {
        return Sk.eLlr(this.__wbg_ptr) >>> 0
      }
      Dtk() {
        return Sk.Lmj9(this.__wbg_ptr) >>> 0
      }
      Ptk() {
        return Sk.mUdW(this.__wbg_ptr) >>> 0
      }
      htk() {
        return Sk.DDPc(this.__wbg_ptr) >>> 0
      }
      Ttk(kk, Fk) {
        Sk.V4i3(this.__wbg_ptr, kk, Fk)
      }
      constructor() {
        const kk = Sk.Rd6Y();
        return this.__wbg_ptr = kk, sk.register(this, this.__wbg_ptr, this), this
      }
      open() {
        Sk.rWVP(this.__wbg_ptr)
      }
      itk() {
        return Sk.YqSM(this.__wbg_ptr) >>> 0
      }
      pause() {
        Sk.LUWG(this.__wbg_ptr)
      }
      play() {
        Sk.nJ2D(this.__wbg_ptr)
      }
      save() {
        return Sk.rFWr(this.__wbg_ptr) >>> 0
      }
      qtk() {
        Sk.hwy8(this.__wbg_ptr)
      }
      seek(kk, Fk) {
        Sk.RBF5(this.__wbg_ptr, kk, Fk)
      }
      Ztk(kk) {
        Sk.EstO(this.__wbg_ptr, kk)
      }
      Gtk(kk, Fk) {
        const Bk = function(kk, Fk) {
            const Bk = Fk(8 * kk.length, 8) >>> 0;
            return function() {
              null !== Jk && 0 !== Jk.byteLength || (Jk = new Float64Array(Sk.memory.buffer));
              return Jk
            }().set(kk, Bk / 8), Nk = kk.length, Bk
          }(Fk, Sk.aATR),
          Rk = Nk;
        Sk.XMqk(this.__wbg_ptr, kk, Bk, Rk)
      }
      Utk(kk, Fk) {
        Sk.R3yg(this.__wbg_ptr, kk, Fk)
      }
      Ctk(kk) {
        Sk.k1GN(this.__wbg_ptr, kk)
      }
      stage(kk) {
        return Sk.H9Dr(this.__wbg_ptr, kk) >>> 0
      }
      step(kk, Fk) {
        return Sk.inqW(this.__wbg_ptr, kk, Fk) >>> 0
      }
    }

    function ak(kk, Fk) {
      const Bk = function(kk, Fk, Bk) {
          if (void 0 === Bk) {
            const Bk = Lk.encode(kk),
              Rk = Fk(Bk.length, 1) >>> 0;
            return yk().subarray(Rk, Rk + Bk.length).set(Bk), Nk = Bk.length, Rk
          }
          let Rk = kk.length,
            tk = Fk(Rk, 1) >>> 0;
          const ak = yk();
          let Xk = 0;
          for (; Xk < Rk; Xk++) {
            const Fk = kk.charCodeAt(Xk);
            if (Fk > 127) break;
            ak[tk + Xk] = Fk
          }
          if (Xk !== Rk) {
            0 !== Xk && (kk = kk.slice(Xk)), tk = Bk(tk, Rk, Rk = Xk + 3 * kk.length, 1) >>> 0;
            const Fk = yk().subarray(tk + Xk, tk + Rk);
            Xk += Lk.encodeInto(kk, Fk).written, tk = Bk(tk, Rk, Xk, 1) >>> 0
          }
          return Nk = Xk, tk
        }(kk, Sk.aATR, Sk.QIGJ),
        Rk = Nk,
        tk = Sk.Rw9W(Bk, Rk, Fk);
      if (tk[1]) throw Wk(tk[0])
    }

    function Xk() {
      Sk.MrUH()
    }

    function bk() {
      return Sk.MlZv() >>> 0
    }

    function wk() {
      return Wk(Sk.OZC2())
    }

    function dk() {
      return {
        __proto__: null,
        fZJM: {
          __proto__: null,
          oo7d: function(kk, Fk) {
            return Vk(Error(Ak(kk, Fk)))
          },
          OufB: function() {
            return Vk(Sk.memory)
          },
          mGPD: function(kk, Fk) {
            throw new Error(Ak(kk, Fk))
          },
          l2WP: function(kk, Fk) {
            console.error(Ak(kk, Fk))
          },
          fqzt: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (tk.prototype[Symbol.dispose] = tk.prototype.free);
    const sk = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((kk => Sk?.__wbg_replaymodule_free(kk, 1)));

    function Vk(kk) {
      mk === fk.length && fk.push(fk.length + 1);
      const Fk = mk;
      return mk = fk[Fk], fk[Fk] = kk, Fk
    }
    let Jk = null;

    function Ak(kk, Fk) {
      return function(kk, Fk) {
        Yk += Fk, Yk >= ik && (vk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), vk.decode(), Yk = Fk);
        return vk.decode(yk().subarray(kk, kk + Fk))
      }(kk >>> 0, Fk)
    }
    let ek = null;

    function yk() {
      return null !== ek && 0 !== ek.byteLength || (ek = new Uint8Array(Sk.memory.buffer)), ek
    }
    let fk = new Array(1024).fill(void 0);
    fk.push(void 0, null, !0, !1);
    let mk = fk.length;

    function Wk(kk) {
      const Fk = function(kk) {
        return fk[kk]
      }(kk);
      return function(kk) {
        kk < 1028 || (fk[kk] = mk, mk = kk)
      }(kk), Fk
    }
    let vk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    vk.decode();
    const ik = 2146435072;
    let Yk = 0;
    const Lk = new TextEncoder;
    "encodeInto" in Lk || (Lk.encodeInto = function(kk, Fk) {
      const Bk = Lk.encode(kk);
      return Fk.set(Bk), {
        read: kk.length,
        written: Bk.length
      }
    });
    let Ok, Ek, Sk, Nk = 0;

    function Hk(kk, Fk) {
      return Ek = kk, Sk = kk.exports, Ok = Fk, Jk = null, ek = null, Sk.uwg8(), Sk
    }

    function uk(kk) {
      if (void 0 !== Sk) return Sk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Fk = dk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return Hk(new WebAssembly.Instance(kk, Fk), kk)
    }
    async function Mk(kk) {
      if (void 0 !== Sk) return Sk;
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
      return Hk(Bk, Rk)
    }

    function gk() {
      Sk = void 0, Ek = void 0, Jk = null, ek = null, fk = new Array(1024).fill(void 0), fk.push(void 0, null, !0, !1), mk = fk.length
    }
    var Uk = Bk(3506),
      ck = Bk(6325);
    class Gk extends Error {
      stage;
      constructor(kk, Fk) {
        super((0, Uk.F)(kk, Fk), {
          cause: Fk
        }), this.name = "BloxdReplayWasmError", this.stage = kk
      }
    }
    let Tk = null,
      rk = null,
      Dk = Promise.resolve(),
      zk = 0,
      Pk = null,
      hk = null;

    function qk() {
      if (hk) return Promise.reject(hk);
      if (rk) return rk;
      const kk = zk,
        Fk = Dk,
        tk = (async () => {
          let tk;
          await Fk, Tk ??= (0, Uk.J)(new Bk.U(Bk(61240)), (0, ck.d)("bloxd_wasm_replay"));
          try {
            tk = await Tk
          } catch (ak) {
            throw Tk = null, new Gk((0, Uk.P)(ak), ak)
          }
          if (kk !== zk) throw new Gk("instantiate", new Error("unloaded while loading"));
          try {
            await Mk({
              module_or_path: tk
            })
          } catch (ak) {
            throw gk(), new Gk("instantiate", ak)
          }
          if (kk !== zk) throw gk(), new Gk("instantiate", new Error("unloaded while loading"));
          return Pk = wk(), Rk
        })();
      return rk = tk, Dk = tk.catch((() => {})), tk.catch((() => {
        rk === tk && (rk = null)
      })), tk
    }

    function Ck() {
      hk || Kk()
    }

    function Zk() {
      return Pk?.buffer.byteLength ?? 0
    }

    function pk(kk) {
      return hk || (hk = new Gk("call", kk), Kk()), hk
    }

    function Kk() {
      zk++, gk(), rk = null, Pk = null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);