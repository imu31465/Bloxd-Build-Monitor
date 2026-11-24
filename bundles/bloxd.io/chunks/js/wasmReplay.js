export const id = 65;
export const ids = [65];
export const modules = {
  61472: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/bloxd_wasm_replay_bg.7255a4c142c3e369df97.wasm"
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
  },
  61470: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      BloxdReplayWasmError: () => bk,
      loadReplayModule: () => fk,
      markReplayTrapped: () => Yk,
      replayMemoryBytes: () => dk,
      unloadReplayModule: () => Bk
    });
    var Xk = {};
    Ik.r(Xk), Ik.d(Xk, {
      YTk: () => Tk,
      Uyk: () => Gk,
      yt: () => ik,
      default: () => nk,
      initSync: () => Ok,
      lt: () => yk,
      WTk: () => lk,
      ATk: () => ak
    });
    class Tk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Lk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Sk.THIR(kk, 0)
      }
      rTk(kk, Fk, Ik, Xk, Tk, ik) {
        Sk.M4zK(this.__wbg_ptr, kk, Fk, Ik, Xk, Tk, ik)
      }
      close() {
        Sk.HyE3(this.__wbg_ptr)
      }
      crop(kk, Fk) {
        Sk.jl3F(this.__wbg_ptr, kk, Fk)
      }
      kik(kk, Fk) {
        Sk.OvR7(this.__wbg_ptr, kk, Fk)
      }
      Iik() {
        return Sk.Tvqz(this.__wbg_ptr) >>> 0
      }
      Fik() {
        return Sk.xXah(this.__wbg_ptr) >>> 0
      }
      Xik() {
        return Sk.bi1S(this.__wbg_ptr) >>> 0
      }
      Tik() {
        return Sk.CMuh(this.__wbg_ptr) >>> 0
      }
      MTk(kk, Fk) {
        Sk.J9QE(this.__wbg_ptr, kk, Fk)
      }
      constructor() {
        const kk = Sk.juNI();
        return this.__wbg_ptr = kk, Lk.register(this, this.__wbg_ptr, this), this
      }
      open() {
        Sk.Iupi(this.__wbg_ptr)
      }
      UTk() {
        return Sk.rvTy(this.__wbg_ptr) >>> 0
      }
      pause() {
        Sk.QVRX(this.__wbg_ptr)
      }
      play() {
        Sk.PMcF(this.__wbg_ptr)
      }
      save() {
        return Sk.XeNk(this.__wbg_ptr) >>> 0
      }
      iik() {
        Sk.sjOk(this.__wbg_ptr)
      }
      seek(kk, Fk) {
        Sk.IpU7(this.__wbg_ptr, kk, Fk)
      }
      lik(kk) {
        Sk.KfVQ(this.__wbg_ptr, kk)
      }
      DTk(kk, Fk) {
        const Ik = function(kk, Fk) {
            const Ik = Fk(8 * kk.length, 8) >>> 0;
            return function() {
              null !== Zk && 0 !== Zk.byteLength || (Zk = new Float64Array(Sk.memory.buffer));
              return Zk
            }().set(kk, Ik / 8), vk = kk.length, Ik
          }(Fk, Sk.MuxV),
          Xk = vk;
        Sk.vZwq(this.__wbg_ptr, kk, Ik, Xk)
      }
      hTk(kk, Fk) {
        Sk.Z4UZ(this.__wbg_ptr, kk, Fk)
      }
      yik(kk) {
        Sk.K0wz(this.__wbg_ptr, kk)
      }
      stage(kk) {
        return Sk.rBW8(this.__wbg_ptr, kk) >>> 0
      }
      step(kk, Fk) {
        return Sk.a1A5(this.__wbg_ptr, kk, Fk) >>> 0
      }
    }

    function ik(kk, Fk) {
      const Ik = function(kk, Fk, Ik) {
          if (void 0 === Ik) {
            const Ik = sk.encode(kk),
              Xk = Fk(Ik.length, 1) >>> 0;
            return wk().subarray(Xk, Xk + Ik.length).set(Ik), vk = Ik.length, Xk
          }
          let Xk = kk.length,
            Tk = Fk(Xk, 1) >>> 0;
          const ik = wk();
          let yk = 0;
          for (; yk < Xk; yk++) {
            const Fk = kk.charCodeAt(yk);
            if (Fk > 127) break;
            ik[Tk + yk] = Fk
          }
          if (yk !== Xk) {
            0 !== yk && (kk = kk.slice(yk)), Tk = Ik(Tk, Xk, Xk = yk + 3 * kk.length, 1) >>> 0;
            const Fk = wk().subarray(Tk + yk, Tk + Xk);
            yk += sk.encodeInto(kk, Fk).written, Tk = Ik(Tk, Xk, yk, 1) >>> 0
          }
          return vk = yk, Tk
        }(kk, Sk.MuxV, Sk.i4te),
        Xk = vk,
        Tk = Sk.lDrG(Ik, Xk, Fk);
      if (Tk[1]) throw xk(Tk[0])
    }

    function yk() {
      Sk.gUsI()
    }

    function lk() {
      return Sk.XRbf() >>> 0
    }

    function ak() {
      return xk(Sk.Qbhy())
    }

    function qk() {
      return {
        __proto__: null,
        bBny: {
          __proto__: null,
          nLog: function(kk, Fk) {
            return tk(Error(jk(kk, Fk)))
          },
          Rujh: function() {
            return tk(Sk.memory)
          },
          Itzd: function(kk, Fk) {
            throw new Error(jk(kk, Fk))
          },
          uqtI: function(kk, Fk) {
            console.error(jk(kk, Fk))
          },
          YLbG: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Tk.prototype[Symbol.dispose] = Tk.prototype.free);
    const Lk = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((kk => Sk?.__wbg_replaymodule_free(kk, 1)));

    function tk(kk) {
      Jk === Hk.length && Hk.push(Hk.length + 1);
      const Fk = Jk;
      return Jk = Hk[Fk], Hk[Fk] = kk, Fk
    }
    let Zk = null;

    function jk(kk, Fk) {
      return function(kk, Fk) {
        Qk += Fk, Qk >= Kk && (Pk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Pk.decode(), Qk = Fk);
        return Pk.decode(wk().subarray(kk, kk + Fk))
      }(kk >>> 0, Fk)
    }
    let ek = null;

    function wk() {
      return null !== ek && 0 !== ek.byteLength || (ek = new Uint8Array(Sk.memory.buffer)), ek
    }
    let Hk = new Array(1024).fill(void 0);
    Hk.push(void 0, null, !0, !1);
    let Jk = Hk.length;

    function xk(kk) {
      const Fk = function(kk) {
        return Hk[kk]
      }(kk);
      return function(kk) {
        kk < 1028 || (Hk[kk] = Jk, Jk = kk)
      }(kk), Fk
    }
    let Pk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Pk.decode();
    const Kk = 2146435072;
    let Qk = 0;
    const sk = new TextEncoder;
    "encodeInto" in sk || (sk.encodeInto = function(kk, Fk) {
      const Ik = sk.encode(kk);
      return Fk.set(Ik), {
        read: kk.length,
        written: Ik.length
      }
    });
    let Vk, zk, Sk, vk = 0;

    function Ek(kk, Fk) {
      return zk = kk, Sk = kk.exports, Vk = Fk, Zk = null, ek = null, Sk.YTrt(), Sk
    }

    function Ok(kk) {
      if (void 0 !== Sk) return Sk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Fk = qk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return Ek(new WebAssembly.Instance(kk, Fk), kk)
    }
    async function nk(kk) {
      if (void 0 !== Sk) return Sk;
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
      return Ek(Ik, Xk)
    }

    function Gk() {
      Sk = void 0, zk = void 0, Zk = null, ek = null, Hk = new Array(1024).fill(void 0), Hk.push(void 0, null, !0, !1), Jk = Hk.length
    }
    var pk = Ik(2803),
      uk = Ik(6599);
    class bk extends Error {
      stage;
      constructor(kk, Fk) {
        super((0, pk.C)(kk, Fk), {
          cause: Fk
        }), this.name = "BloxdReplayWasmError", this.stage = kk
      }
    }
    let Rk = null,
      Uk = null,
      Ck = Promise.resolve(),
      Nk = 0,
      ck = null,
      Wk = null;

    function fk() {
      if (Wk) return Promise.reject(Wk);
      if (Uk) return Uk;
      const kk = Nk,
        Fk = Ck,
        Tk = (async () => {
          let Tk;
          await Fk, Rk ??= (0, pk.G)(new Ik.U(Ik(61472)), (0, uk.c)("bloxd_wasm_replay"));
          try {
            Tk = await Rk
          } catch (ik) {
            throw Rk = null, new bk((0, pk.M)(ik), ik)
          }
          if (kk !== Nk) throw new bk("instantiate", new Error("unloaded while loading"));
          try {
            await nk({
              module_or_path: Tk
            })
          } catch (ik) {
            throw Gk(), new bk("instantiate", ik)
          }
          if (kk !== Nk) throw Gk(), new bk("instantiate", new Error("unloaded while loading"));
          return ck = ak(), Xk
        })();
      return Uk = Tk, Ck = Tk.catch((() => {})), Tk.catch((() => {
        Uk === Tk && (Uk = null)
      })), Tk
    }

    function Bk() {
      Wk || Ak()
    }

    function dk() {
      return ck?.buffer.byteLength ?? 0
    }

    function Yk(kk) {
      return Wk || (Wk = new bk("call", kk), Ak()), Wk
    }

    function Ak() {
      Nk++, Gk(), Uk = null, ck = null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);