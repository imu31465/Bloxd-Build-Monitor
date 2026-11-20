export const id = 5;
export const ids = [5];
export const modules = {
  42729: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/bloxd_wasm_anim_bg.73ddacf8fd4ab5ccec6d.wasm"
  },
  42726: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      BloxdAnimWasmError: () => Tk,
      compileAnimationPackInWasm: () => Pk
    });
    var Rk = {};

    function tk(kk, Fk, Bk, Rk, tk, ak) {
      const Xk = Wk(kk, Hk.T42u),
        bk = uk,
        wk = Wk(Fk, Hk.T42u),
        dk = uk,
        sk = Wk(Bk, Hk.T42u),
        Vk = uk,
        Jk = Wk(Rk, Hk.T42u),
        ek = uk,
        yk = Wk(tk, Hk.T42u),
        fk = uk;
      var vk = mk(ak) ? 0 : function(kk, Fk) {
          const Bk = Fk(1 * kk.length, 1) >>> 0;
          return Ak().set(kk, Bk / 1), uk = kk.length, Bk
        }(ak, Hk.T42u),
        Yk = uk;
      const Lk = Hk.LsE6(Xk, bk, wk, dk, sk, Vk, Jk, ek, yk, fk, vk, Yk);
      if (Lk[3]) throw ik(Lk[2]);
      var Ok, Ek, Sk = (Ok = Lk[0], Ek = Lk[1], Ok >>>= 0, Ak().subarray(Ok / 1, Ok / 1 + Ek)).slice();
      return Hk.UZD6(Lk[0], 1 * Lk[1], 1), Sk
    }

    function ak(kk, Fk) {
      const Bk = vk(kk, Hk.T42u, Hk.dRWq),
        Rk = uk,
        tk = Hk.vY2W(Bk, Rk, Fk);
      if (tk[1]) throw ik(tk[0])
    }

    function Xk() {
      Hk.XxpT()
    }

    function bk() {
      return {
        __proto__: null,
        AaoM: {
          __proto__: null,
          Qlay: function(kk, Fk) {
            return wk(Error(Vk(kk, Fk)))
          },
          DWvZ: function(kk, Fk) {
            const Bk = ek(Fk),
              Rk = "string" === typeof Bk ? Bk : void 0;
            var tk = mk(Rk) ? 0 : vk(Rk, Hk.T42u, Hk.dRWq),
              ak = uk;
            sk().setInt32(kk + 4, ak, !0), sk().setInt32(kk + 0, tk, !0)
          },
          BXas: function(kk, Fk) {
            throw new Error(Vk(kk, Fk))
          },
          AaMu: function(kk, Fk) {
            console.error(Vk(kk, Fk))
          },
          lxlJ: function(kk) {
            ik(kk)
          }
        }
      }
    }

    function wk(kk) {
      fk === yk.length && yk.push(yk.length + 1);
      const Fk = fk;
      return fk = yk[Fk], yk[Fk] = kk, Fk
    }
    Bk.r(Rk), Bk.d(Rk, {
      iXk: () => tk,
      HV: () => ak,
      default: () => Uk,
      initSync: () => gk,
      uV: () => Xk
    });
    let dk = null;

    function sk() {
      return (null === dk || !0 === dk.buffer.detached || void 0 === dk.buffer.detached && dk.buffer !== Hk.memory.buffer) && (dk = new DataView(Hk.memory.buffer)), dk
    }

    function Vk(kk, Fk) {
      return function(kk, Fk) {
        Ok += Fk, Ok >= Lk && (Yk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Yk.decode(), Ok = Fk);
        return Yk.decode(Ak().subarray(kk, kk + Fk))
      }(kk >>> 0, Fk)
    }
    let Jk = null;

    function Ak() {
      return null !== Jk && 0 !== Jk.byteLength || (Jk = new Uint8Array(Hk.memory.buffer)), Jk
    }

    function ek(kk) {
      return yk[kk]
    }
    let yk = new Array(1024).fill(void 0);
    yk.push(void 0, null, !0, !1);
    let fk = yk.length;

    function mk(kk) {
      return void 0 === kk || null === kk
    }

    function Wk(kk, Fk) {
      const Bk = Fk(4 * kk.length, 4) >>> 0,
        Rk = sk();
      for (let tk = 0; tk < kk.length; tk++) Rk.setUint32(Bk + 4 * tk, wk(kk[tk]), !0);
      return uk = kk.length, Bk
    }

    function vk(kk, Fk, Bk) {
      if (void 0 === Bk) {
        const Bk = Ek.encode(kk),
          Rk = Fk(Bk.length, 1) >>> 0;
        return Ak().subarray(Rk, Rk + Bk.length).set(Bk), uk = Bk.length, Rk
      }
      let Rk = kk.length,
        tk = Fk(Rk, 1) >>> 0;
      const ak = Ak();
      let Xk = 0;
      for (; Xk < Rk; Xk++) {
        const Fk = kk.charCodeAt(Xk);
        if (Fk > 127) break;
        ak[tk + Xk] = Fk
      }
      if (Xk !== Rk) {
        0 !== Xk && (kk = kk.slice(Xk)), tk = Bk(tk, Rk, Rk = Xk + 3 * kk.length, 1) >>> 0;
        const Fk = Ak().subarray(tk + Xk, tk + Rk);
        Xk += Ek.encodeInto(kk, Fk).written, tk = Bk(tk, Rk, Xk, 1) >>> 0
      }
      return uk = Xk, tk
    }

    function ik(kk) {
      const Fk = ek(kk);
      return function(kk) {
        kk < 1028 || (yk[kk] = fk, fk = kk)
      }(kk), Fk
    }
    let Yk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Yk.decode();
    const Lk = 2146435072;
    let Ok = 0;
    const Ek = new TextEncoder;
    "encodeInto" in Ek || (Ek.encodeInto = function(kk, Fk) {
      const Bk = Ek.encode(kk);
      return Fk.set(Bk), {
        read: kk.length,
        written: Bk.length
      }
    });
    let Sk, Nk, Hk, uk = 0;

    function Mk(kk, Fk) {
      return Nk = kk, Hk = kk.exports, Sk = Fk, dk = null, Jk = null, Hk.X6Mu(), Hk
    }

    function gk(kk) {
      if (void 0 !== Hk) return Hk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Fk = bk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return Mk(new WebAssembly.Instance(kk, Fk), kk)
    }
    async function Uk(kk) {
      if (void 0 !== Hk) return Hk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Fk = bk();
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
      return Mk(Bk, Rk)
    }
    var ck = Bk(3506),
      Gk = Bk(6325);
    class Tk extends Error {
      stage;
      constructor(kk, Fk) {
        super((0, ck.F)(kk, Fk), {
          cause: Fk
        }), this.name = "BloxdAnimWasmError", this.stage = kk
      }
    }
    let rk = null,
      Dk = null;

    function zk() {
      if (Dk) throw Dk
    }
    async function Pk(kk, Fk, tk) {
      zk();
      const ak = await (rk ??= (async () => {
        let kk;
        try {
          kk = await (0, ck.J)(new Bk.U(Bk(42729)), (0, Gk.d)("bloxd_wasm_anim"))
        } catch (Fk) {
          throw new Tk((0, ck.P)(Fk), Fk)
        }
        try {
          await Uk({
            module_or_path: kk
          })
        } catch (Fk) {
          throw new Tk("instantiate", Fk)
        }
        return Rk
      })(), rk.catch((() => {
        rk = null
      })), rk);
      zk();
      try {
        return ak.iXk(Object.entries(kk).flat(), [...Fk.mobTypes], [...Fk.vehicleTypes], [...Fk.mobAiStates], [...Fk.playerPoses], "builtIns" in tk ? tk.builtIns : void 0)
      } catch (Xk) {
        const kk = new Tk("call", Xk);
        throw Xk instanceof WebAssembly.RuntimeError && (Dk = kk), kk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);