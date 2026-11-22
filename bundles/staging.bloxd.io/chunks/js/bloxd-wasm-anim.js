export const id = 5;
export const ids = [5];
export const modules = {
  42251: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/bloxd_wasm_anim_bg.4e47a99c7cac3dfa1888.wasm"
  },
  42243: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      BloxdAnimWasmError: () => vk,
      compileAnimationPackInWasm: () => Wk
    });
    var Dk = {};

    function fk(kk, ek, ik, Dk, fk, Sk) {
      const bk = pk(kk, Vk.zrIV),
        rk = Fk,
        Pk = pk(ek, Vk.zrIV),
        mk = Fk,
        Mk = pk(ik, Vk.zrIV),
        Kk = Fk,
        xk = pk(Dk, Vk.zrIV),
        Uk = Fk,
        Hk = pk(fk, Vk.zrIV),
        wk = Fk;
      var yk = lk(Sk) ? 0 : function(kk, ek) {
          const ik = ek(1 * kk.length, 1) >>> 0;
          return nk().set(kk, ik / 1), Fk = kk.length, ik
        }(Sk, Vk.zrIV),
        Lk = Fk;
      const Ck = Vk.RETL(bk, rk, Pk, mk, Mk, Kk, xk, Uk, Hk, wk, yk, Lk);
      if (Ck[3]) throw Yk(Ck[2]);
      var Ak, jk, sk = (Ak = Ck[0], jk = Ck[1], Ak >>>= 0, nk().subarray(Ak / 1, Ak / 1 + jk)).slice();
      return Vk.zOTC(Ck[0], 1 * Ck[1], 1), sk
    }

    function Sk(kk, ek) {
      const ik = yk(kk, Vk.zrIV, Vk.ZDRP),
        Dk = Fk,
        fk = Vk.qqEr(ik, Dk, ek);
      if (fk[1]) throw Yk(fk[0])
    }

    function bk() {
      Vk.k3IQ()
    }

    function rk() {
      return {
        __proto__: null,
        hNsj: {
          __proto__: null,
          mEh8: function(kk, ek) {
            return Pk(Error(Kk(kk, ek)))
          },
          nAKl: function(kk, ek) {
            const ik = Uk(ek),
              Dk = "string" === typeof ik ? ik : void 0;
            var fk = lk(Dk) ? 0 : yk(Dk, Vk.zrIV, Vk.ZDRP),
              Sk = Fk;
            Mk().setInt32(kk + 4, Sk, !0), Mk().setInt32(kk + 0, fk, !0)
          },
          ojEF: function(kk, ek) {
            throw new Error(Kk(kk, ek))
          },
          Tf7f: function(kk, ek) {
            console.error(Kk(kk, ek))
          },
          CLAY: function(kk) {
            Yk(kk)
          }
        }
      }
    }

    function Pk(kk) {
      wk === Hk.length && Hk.push(Hk.length + 1);
      const ek = wk;
      return wk = Hk[ek], Hk[ek] = kk, ek
    }
    ik.r(Dk), ik.d(Dk, {
      xbk: () => fk,
      lK: () => Sk,
      default: () => Ik,
      initSync: () => qk,
      pK: () => bk
    });
    let mk = null;

    function Mk() {
      return (null === mk || !0 === mk.buffer.detached || void 0 === mk.buffer.detached && mk.buffer !== Vk.memory.buffer) && (mk = new DataView(Vk.memory.buffer)), mk
    }

    function Kk(kk, ek) {
      return function(kk, ek) {
        Ak += ek, Ak >= Ck && (Lk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Lk.decode(), Ak = ek);
        return Lk.decode(nk().subarray(kk, kk + ek))
      }(kk >>> 0, ek)
    }
    let xk = null;

    function nk() {
      return null !== xk && 0 !== xk.byteLength || (xk = new Uint8Array(Vk.memory.buffer)), xk
    }

    function Uk(kk) {
      return Hk[kk]
    }
    let Hk = new Array(1024).fill(void 0);
    Hk.push(void 0, null, !0, !1);
    let wk = Hk.length;

    function lk(kk) {
      return void 0 === kk || null === kk
    }

    function pk(kk, ek) {
      const ik = ek(4 * kk.length, 4) >>> 0,
        Dk = Mk();
      for (let fk = 0; fk < kk.length; fk++) Dk.setUint32(ik + 4 * fk, Pk(kk[fk]), !0);
      return Fk = kk.length, ik
    }

    function yk(kk, ek, ik) {
      if (void 0 === ik) {
        const ik = jk.encode(kk),
          Dk = ek(ik.length, 1) >>> 0;
        return nk().subarray(Dk, Dk + ik.length).set(ik), Fk = ik.length, Dk
      }
      let Dk = kk.length,
        fk = ek(Dk, 1) >>> 0;
      const Sk = nk();
      let bk = 0;
      for (; bk < Dk; bk++) {
        const ek = kk.charCodeAt(bk);
        if (ek > 127) break;
        Sk[fk + bk] = ek
      }
      if (bk !== Dk) {
        0 !== bk && (kk = kk.slice(bk)), fk = ik(fk, Dk, Dk = bk + 3 * kk.length, 1) >>> 0;
        const ek = nk().subarray(fk + bk, fk + Dk);
        bk += jk.encodeInto(kk, ek).written, fk = ik(fk, Dk, bk, 1) >>> 0
      }
      return Fk = bk, fk
    }

    function Yk(kk) {
      const ek = Uk(kk);
      return function(kk) {
        kk < 1028 || (Hk[kk] = wk, wk = kk)
      }(kk), ek
    }
    let Lk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Lk.decode();
    const Ck = 2146435072;
    let Ak = 0;
    const jk = new TextEncoder;
    "encodeInto" in jk || (jk.encodeInto = function(kk, ek) {
      const ik = jk.encode(kk);
      return ek.set(ik), {
        read: kk.length,
        written: ik.length
      }
    });
    let sk, dk, Vk, Fk = 0;

    function uk(kk, ek) {
      return dk = kk, Vk = kk.exports, sk = ek, mk = null, xk = null, Vk.eHES(), Vk
    }

    function qk(kk) {
      if (void 0 !== Vk) return Vk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ek = rk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return uk(new WebAssembly.Instance(kk, ek), kk)
    }
    async function Ik(kk) {
      if (void 0 !== Vk) return Vk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ek = rk();
      ("string" === typeof kk || "function" === typeof Request && kk instanceof Request || "function" === typeof URL && kk instanceof URL) && (kk = fetch(kk));
      const {
        instance: ik,
        module: Dk
      } = await async function(kk, ek) {
        if ("function" === typeof Response && kk instanceof Response) {
          if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(kk, ek)
          } catch (ik) {
            if (! function(kk) {
                switch (kk) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(kk.type) || "application/wasm" === kk.headers.get("Content-Type")) throw ik;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ik)
          }
          const Dk = await kk.arrayBuffer();
          return await WebAssembly.instantiate(Dk, ek)
        } {
          const ik = await WebAssembly.instantiate(kk, ek);
          return ik instanceof WebAssembly.Instance ? {
            instance: ik,
            module: kk
          } : ik
        }
      }(await kk, ek);
      return uk(ik, Dk)
    }
    var zk = ik(2823),
      Qk = ik(6459);
    class vk extends Error {
      stage;
      constructor(kk, ek) {
        super((0, zk.E)(kk, ek), {
          cause: ek
        }), this.name = "BloxdAnimWasmError", this.stage = kk
      }
    }
    let Ek = null,
      hk = null;

    function ak() {
      if (hk) throw hk
    }
    async function Wk(kk, ek, fk) {
      ak();
      const Sk = await (Ek ??= (async () => {
        let kk;
        try {
          kk = await (0, zk.I)(new ik.U(ik(42251)), (0, Qk.d)("bloxd_wasm_anim"))
        } catch (ek) {
          throw new vk((0, zk.N)(ek), ek)
        }
        try {
          await Ik({
            module_or_path: kk
          })
        } catch (ek) {
          throw new vk("instantiate", ek)
        }
        return Dk
      })(), Ek.catch((() => {
        Ek = null
      })), Ek);
      ak();
      try {
        return Sk.xbk(Object.entries(kk).flat(), [...ek.mobTypes], [...ek.vehicleTypes], [...ek.mobAiStates], [...ek.playerPoses], "builtIns" in fk ? fk.builtIns : void 0)
      } catch (bk) {
        const kk = new vk("call", bk);
        throw bk instanceof WebAssembly.RuntimeError && (hk = kk), kk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);