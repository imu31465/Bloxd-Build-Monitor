export const id = 5;
export const ids = [5];
export const modules = {
  42662: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/bloxd_wasm_anim_bg.657167461c9fa04b7c6b.wasm"
  },
  42653: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      BloxdAnimWasmError: () => Rk,
      compileAnimationPackInWasm: () => ck
    });
    var Xk = {};

    function Tk(kk, Fk, Ik, Xk, Tk, ik) {
      const yk = xk(kk, Ek.wmCG),
        lk = Ok,
        ak = xk(Fk, Ek.wmCG),
        qk = Ok,
        Lk = xk(Ik, Ek.wmCG),
        tk = Ok,
        Zk = xk(Xk, Ek.wmCG),
        ek = Ok,
        wk = xk(Tk, Ek.wmCG),
        Hk = Ok;
      var Pk = Jk(ik) ? 0 : function(kk, Fk) {
          const Ik = Fk(1 * kk.length, 1) >>> 0;
          return jk().set(kk, Ik / 1), Ok = kk.length, Ik
        }(ik, Ek.wmCG),
        Qk = Ok;
      const sk = Ek.W2L2(yk, lk, ak, qk, Lk, tk, Zk, ek, wk, Hk, Pk, Qk);
      if (sk[3]) throw Kk(sk[2]);
      var Vk, zk, Sk = (Vk = sk[0], zk = sk[1], Vk >>>= 0, jk().subarray(Vk / 1, Vk / 1 + zk)).slice();
      return Ek.KMFJ(sk[0], 1 * sk[1], 1), Sk
    }

    function ik(kk, Fk) {
      const Ik = Pk(kk, Ek.wmCG, Ek.To7b),
        Xk = Ok,
        Tk = Ek.S5cX(Ik, Xk, Fk);
      if (Tk[1]) throw Kk(Tk[0])
    }

    function yk() {
      Ek.s3eN()
    }

    function lk() {
      return {
        __proto__: null,
        Cz2w: {
          __proto__: null,
          DV5d: function(kk, Fk) {
            return ak(Error(tk(kk, Fk)))
          },
          VJho: function(kk, Fk) {
            const Ik = ek(Fk),
              Xk = "string" === typeof Ik ? Ik : void 0;
            var Tk = Jk(Xk) ? 0 : Pk(Xk, Ek.wmCG, Ek.To7b),
              ik = Ok;
            Lk().setInt32(kk + 4, ik, !0), Lk().setInt32(kk + 0, Tk, !0)
          },
          LZ7M: function(kk, Fk) {
            throw new Error(tk(kk, Fk))
          },
          ZMcJ: function(kk, Fk) {
            console.error(tk(kk, Fk))
          },
          kcXe: function(kk) {
            Kk(kk)
          }
        }
      }
    }

    function ak(kk) {
      Hk === wk.length && wk.push(wk.length + 1);
      const Fk = Hk;
      return Hk = wk[Fk], wk[Fk] = kk, Fk
    }
    Ik.r(Xk), Ik.d(Xk, {
      pyk: () => Tk,
      yt: () => ik,
      default: () => pk,
      initSync: () => Gk,
      lt: () => yk
    });
    let qk = null;

    function Lk() {
      return null !== qk && qk.buffer === Ek.memory.buffer || (qk = new DataView(Ek.memory.buffer)), qk
    }

    function tk(kk, Fk) {
      return function(kk, Fk) {
        Vk += Fk, Vk >= sk && (Qk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Qk.decode(), Vk = Fk);
        return Qk.decode(jk().subarray(kk, kk + Fk))
      }(kk >>> 0, Fk)
    }
    let Zk = null;

    function jk() {
      return null !== Zk && 0 !== Zk.byteLength || (Zk = new Uint8Array(Ek.memory.buffer)), Zk
    }

    function ek(kk) {
      return wk[kk]
    }
    let wk = new Array(1024).fill(void 0);
    wk.push(void 0, null, !0, !1);
    let Hk = wk.length;

    function Jk(kk) {
      return void 0 === kk || null === kk
    }

    function xk(kk, Fk) {
      const Ik = Fk(4 * kk.length, 4) >>> 0,
        Xk = Lk();
      for (let Tk = 0; Tk < kk.length; Tk++) Xk.setUint32(Ik + 4 * Tk, ak(kk[Tk]), !0);
      return Ok = kk.length, Ik
    }

    function Pk(kk, Fk, Ik) {
      if (void 0 === Ik) {
        const Ik = zk.encode(kk),
          Xk = Fk(Ik.length, 1) >>> 0;
        return jk().subarray(Xk, Xk + Ik.length).set(Ik), Ok = Ik.length, Xk
      }
      let Xk = kk.length,
        Tk = Fk(Xk, 1) >>> 0;
      const ik = jk();
      let yk = 0;
      for (; yk < Xk; yk++) {
        const Fk = kk.charCodeAt(yk);
        if (Fk > 127) break;
        ik[Tk + yk] = Fk
      }
      if (yk !== Xk) {
        0 !== yk && (kk = kk.slice(yk)), Tk = Ik(Tk, Xk, Xk = yk + 3 * kk.length, 1) >>> 0;
        const Fk = jk().subarray(Tk + yk, Tk + Xk);
        yk += zk.encodeInto(kk, Fk).written, Tk = Ik(Tk, Xk, yk, 1) >>> 0
      }
      return Ok = yk, Tk
    }

    function Kk(kk) {
      const Fk = ek(kk);
      return function(kk) {
        kk < 1028 || (wk[kk] = Hk, Hk = kk)
      }(kk), Fk
    }
    let Qk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Qk.decode();
    const sk = 2146435072;
    let Vk = 0;
    const zk = new TextEncoder;
    "encodeInto" in zk || (zk.encodeInto = function(kk, Fk) {
      const Ik = zk.encode(kk);
      return Fk.set(Ik), {
        read: kk.length,
        written: Ik.length
      }
    });
    let Sk, vk, Ek, Ok = 0;

    function nk(kk, Fk) {
      return vk = kk, Ek = kk.exports, Sk = Fk, qk = null, Zk = null, Ek.euF5(), Ek
    }

    function Gk(kk) {
      if (void 0 !== Ek) return Ek;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Fk = lk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return nk(new WebAssembly.Instance(kk, Fk), kk)
    }
    async function pk(kk) {
      if (void 0 !== Ek) return Ek;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Fk = lk();
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
      return nk(Ik, Xk)
    }
    var uk = Ik(2803),
      bk = Ik(6599);
    class Rk extends Error {
      stage;
      constructor(kk, Fk) {
        super((0, uk.C)(kk, Fk), {
          cause: Fk
        }), this.name = "BloxdAnimWasmError", this.stage = kk
      }
    }
    let Uk = null,
      Ck = null;

    function Nk() {
      if (Ck) throw Ck
    }
    async function ck(kk, Fk, Tk) {
      Nk();
      const ik = await (Uk ??= (async () => {
        let kk;
        try {
          kk = await (0, uk.G)(new Ik.U(Ik(42662)), (0, bk.c)("bloxd_wasm_anim"))
        } catch (Fk) {
          throw new Rk((0, uk.M)(Fk), Fk)
        }
        try {
          await pk({
            module_or_path: kk
          })
        } catch (Fk) {
          throw new Rk("instantiate", Fk)
        }
        return Xk
      })(), Uk.catch((() => {
        Uk = null
      })), Uk);
      Nk();
      try {
        return ik.pyk(Object.entries(kk).flat(), [...Fk.mobTypes], [...Fk.vehicleTypes], [...Fk.mobAiStates], [...Fk.playerPoses], "builtIns" in Tk ? Tk.builtIns : void 0)
      } catch (yk) {
        const kk = new Rk("call", yk);
        throw yk instanceof WebAssembly.RuntimeError && (Ck = kk), kk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);