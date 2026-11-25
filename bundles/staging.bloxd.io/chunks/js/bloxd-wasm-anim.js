export const id = 5;
export const ids = [5];
export const modules = {
  42918: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/bloxd_wasm_anim_bg.f947c22ef067e991ee5e.wasm"
  },
  42912: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      BloxdAnimWasmError: () => ru,
      compileAnimationPackInWasm: () => Su
    });
    var su = {};

    function Uu(uu, Eu, ju, su, Uu, Zu) {
      const Xu = gu(uu, Pu.WdXm),
        lu = ou,
        qu = gu(Eu, Pu.WdXm),
        fu = ou,
        Cu = gu(ju, Pu.WdXm),
        bu = ou,
        cu = gu(su, Pu.WdXm),
        Ou = ou,
        Yu = gu(Uu, Pu.WdXm),
        hu = ou;
      var Mu = Du(Zu) ? 0 : function(uu, Eu) {
          const ju = Eu(1 * uu.length, 1) >>> 0;
          return Nu().set(uu, ju / 1), ou = uu.length, ju
        }(Zu, Pu.WdXm),
        Gu = ou;
      const pu = Pu.uQhP(Xu, lu, qu, fu, Cu, bu, cu, Ou, Yu, hu, Mu, Gu);
      if (pu[3]) throw eu(pu[2]);
      var wu, Ju, du = (wu = pu[0], Ju = pu[1], wu >>>= 0, Nu().subarray(wu / 1, wu / 1 + Ju)).slice();
      return Pu.zgPY(pu[0], 1 * pu[1], 1), du
    }

    function Zu(uu, Eu) {
      const ju = Mu(uu, Pu.WdXm, Pu.EECR),
        su = ou,
        Uu = Pu.dI49(ju, su, Eu);
      if (Uu[1]) throw eu(Uu[0])
    }

    function Xu() {
      Pu.hkhq()
    }

    function lu() {
      return {
        __proto__: null,
        Nmrj: {
          __proto__: null,
          fIEe: function(uu, Eu) {
            return qu(Error(bu(uu, Eu)))
          },
          VTqC: function(uu, Eu) {
            const ju = Ou(Eu),
              su = "string" === typeof ju ? ju : void 0;
            var Uu = Du(su) ? 0 : Mu(su, Pu.WdXm, Pu.EECR),
              Zu = ou;
            Cu().setInt32(uu + 4, Zu, !0), Cu().setInt32(uu + 0, Uu, !0)
          },
          YYHf: function(uu, Eu) {
            throw new Error(bu(uu, Eu))
          },
          hGGF: function(uu, Eu) {
            console.error(bu(uu, Eu))
          },
          x8Gb: function(uu) {
            eu(uu)
          }
        }
      }
    }

    function qu(uu) {
      hu === Yu.length && Yu.push(Yu.length + 1);
      const Eu = hu;
      return hu = Yu[Eu], Yu[Eu] = uu, Eu
    }
    ju.r(su), ju.d(su, {
      SXu: () => Uu,
      jb: () => Zu,
      default: () => vu,
      initSync: () => mu,
      sb: () => Xu
    });
    let fu = null;

    function Cu() {
      return null !== fu && fu.buffer === Pu.memory.buffer || (fu = new DataView(Pu.memory.buffer)), fu
    }

    function bu(uu, Eu) {
      return function(uu, Eu) {
        wu += Eu, wu >= pu && (Gu = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Gu.decode(), wu = Eu);
        return Gu.decode(Nu().subarray(uu, uu + Eu))
      }(uu >>> 0, Eu)
    }
    let cu = null;

    function Nu() {
      return null !== cu && 0 !== cu.byteLength || (cu = new Uint8Array(Pu.memory.buffer)), cu
    }

    function Ou(uu) {
      return Yu[uu]
    }
    let Yu = new Array(1024).fill(void 0);
    Yu.push(void 0, null, !0, !1);
    let hu = Yu.length;

    function Du(uu) {
      return void 0 === uu || null === uu
    }

    function gu(uu, Eu) {
      const ju = Eu(4 * uu.length, 4) >>> 0,
        su = Cu();
      for (let Uu = 0; Uu < uu.length; Uu++) su.setUint32(ju + 4 * Uu, qu(uu[Uu]), !0);
      return ou = uu.length, ju
    }

    function Mu(uu, Eu, ju) {
      if (void 0 === ju) {
        const ju = Ju.encode(uu),
          su = Eu(ju.length, 1) >>> 0;
        return Nu().subarray(su, su + ju.length).set(ju), ou = ju.length, su
      }
      let su = uu.length,
        Uu = Eu(su, 1) >>> 0;
      const Zu = Nu();
      let Xu = 0;
      for (; Xu < su; Xu++) {
        const Eu = uu.charCodeAt(Xu);
        if (Eu > 127) break;
        Zu[Uu + Xu] = Eu
      }
      if (Xu !== su) {
        0 !== Xu && (uu = uu.slice(Xu)), Uu = ju(Uu, su, su = Xu + 3 * uu.length, 1) >>> 0;
        const Eu = Nu().subarray(Uu + Xu, Uu + su);
        Xu += Ju.encodeInto(uu, Eu).written, Uu = ju(Uu, su, Xu, 1) >>> 0
      }
      return ou = Xu, Uu
    }

    function eu(uu) {
      const Eu = Ou(uu);
      return function(uu) {
        uu < 1028 || (Yu[uu] = hu, hu = uu)
      }(uu), Eu
    }
    let Gu = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Gu.decode();
    const pu = 2146435072;
    let wu = 0;
    const Ju = new TextEncoder;
    "encodeInto" in Ju || (Ju.encodeInto = function(uu, Eu) {
      const ju = Ju.encode(uu);
      return Eu.set(ju), {
        read: uu.length,
        written: ju.length
      }
    });
    let du, au, Pu, ou = 0;

    function ku(uu, Eu) {
      return au = uu, Pu = uu.exports, du = Eu, fu = null, cu = null, Pu.nwig(), Pu
    }

    function mu(uu) {
      if (void 0 !== Pu) return Pu;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module: uu
      } = uu) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Eu = lu();
      uu instanceof WebAssembly.Module || (uu = new WebAssembly.Module(uu));
      return ku(new WebAssembly.Instance(uu, Eu), uu)
    }
    async function vu(uu) {
      if (void 0 !== Pu) return Pu;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module_or_path: uu
      } = uu) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Eu = lu();
      ("string" === typeof uu || "function" === typeof Request && uu instanceof Request || "function" === typeof URL && uu instanceof URL) && (uu = fetch(uu));
      const {
        instance: ju,
        module: su
      } = await async function(uu, Eu) {
        if ("function" === typeof Response && uu instanceof Response) {
          if (!uu.ok) throw new Error(`failed to fetch Wasm: ${uu.status} ${uu.statusText} fetching '${uu.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(uu, Eu)
          } catch (ju) {
            if (! function(uu) {
                switch (uu) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(uu.type) || "application/wasm" === uu.headers.get("Content-Type")) throw ju;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ju)
          }
          const su = await uu.arrayBuffer();
          return await WebAssembly.instantiate(su, Eu)
        } {
          const ju = await WebAssembly.instantiate(uu, Eu);
          return ju instanceof WebAssembly.Instance ? {
            instance: ju,
            module: uu
          } : ju
        }
      }(await uu, Eu);
      return ku(ju, su)
    }
    var Ku = ju(3020),
      Vu = ju(6818);
    class ru extends Error {
      stage;
      constructor(uu, Eu) {
        super((0, Ku.F)(uu, Eu), {
          cause: Eu
        }), this.name = "BloxdAnimWasmError", this.stage = uu
      }
    }
    let Qu = null,
      iu = null;

    function Wu() {
      if (iu) throw iu
    }
    async function Su(uu, Eu, Uu) {
      Wu();
      const Zu = await (Qu ??= (async () => {
        let uu;
        try {
          uu = await (0, Ku.I)(new ju.U(ju(42918)), (0, Vu.b)("bloxd_wasm_anim"))
        } catch (Eu) {
          throw new ru((0, Ku.L)(Eu), Eu)
        }
        try {
          await vu({
            module_or_path: uu
          })
        } catch (Eu) {
          throw new ru("instantiate", Eu)
        }
        return su
      })(), Qu.catch((() => {
        Qu = null
      })), Qu);
      Wu();
      try {
        return Zu.SXu(Object.entries(uu).flat(), [...Eu.mobTypes], [...Eu.vehicleTypes], [...Eu.mobAiStates], [...Eu.playerPoses], "builtIns" in Uu ? Uu.builtIns : void 0)
      } catch (Xu) {
        const uu = new ru("call", Xu);
        throw Xu instanceof WebAssembly.RuntimeError && (iu = uu), uu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);