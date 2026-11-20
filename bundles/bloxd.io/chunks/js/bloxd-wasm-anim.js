export const id = 5;
export const ids = [5];
export const modules = {
  42845: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/bloxd_wasm_anim_bg.aca2f29468801bc01f69.wasm"
  },
  42841: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      BloxdAnimWasmError: () => lu,
      compileAnimationPackInWasm: () => zu
    });
    var Eu = {};

    function Ku(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = ju(uu, Mu.sWcq),
        Ju = Iu,
        Nu = ju(Ru, Mu.sWcq),
        Xu = Iu,
        Vu = ju(yu, Mu.sWcq),
        ru = Iu,
        Bu = ju(Eu, Mu.sWcq),
        Su = Iu,
        pu = ju(Ku, Mu.sWcq),
        Tu = Iu;
      var Hu = Wu(Qu) ? 0 : function(uu, Ru) {
          const yu = Ru(1 * uu.length, 1) >>> 0;
          return xu().set(uu, yu / 1), Iu = uu.length, yu
        }(Qu, Mu.sWcq),
        bu = Iu;
      const Cu = Mu.d4Bt(mu, Ju, Nu, Xu, Vu, ru, Bu, Su, pu, Tu, Hu, bu);
      if (Cu[3]) throw du(Cu[2]);
      var ku, eu, Au = (ku = Cu[0], eu = Cu[1], ku >>>= 0, xu().subarray(ku / 1, ku / 1 + eu)).slice();
      return Mu.fuSY(Cu[0], 1 * Cu[1], 1), Au
    }

    function Qu(uu, Ru) {
      const yu = Hu(uu, Mu.sWcq, Mu.xET9),
        Eu = Iu,
        Ku = Mu.zNQi(yu, Eu, Ru);
      if (Ku[1]) throw du(Ku[0])
    }

    function mu() {
      Mu.BzIO()
    }

    function Ju() {
      return {
        __proto__: null,
        FqUv: {
          __proto__: null,
          qKLH: function(uu, Ru) {
            return Nu(Error(ru(uu, Ru)))
          },
          aN9V: function(uu, Ru) {
            const yu = Su(Ru),
              Eu = "string" === typeof yu ? yu : void 0;
            var Ku = Wu(Eu) ? 0 : Hu(Eu, Mu.sWcq, Mu.xET9),
              Qu = Iu;
            Vu().setInt32(uu + 4, Qu, !0), Vu().setInt32(uu + 0, Ku, !0)
          },
          PQpS: function(uu, Ru) {
            throw new Error(ru(uu, Ru))
          },
          vCZq: function(uu, Ru) {
            console.error(ru(uu, Ru))
          },
          MsCN: function(uu) {
            du(uu)
          }
        }
      }
    }

    function Nu(uu) {
      Tu === pu.length && pu.push(pu.length + 1);
      const Ru = Tu;
      return Tu = pu[Ru], pu[Ru] = uu, Ru
    }
    yu.r(Eu), yu.d(Eu, {
      qmu: () => Ku,
      PV: () => Qu,
      default: () => nu,
      initSync: () => Uu,
      iV: () => mu
    });
    let Xu = null;

    function Vu() {
      return (null === Xu || !0 === Xu.buffer.detached || void 0 === Xu.buffer.detached && Xu.buffer !== Mu.memory.buffer) && (Xu = new DataView(Mu.memory.buffer)), Xu
    }

    function ru(uu, Ru) {
      return function(uu, Ru) {
        ku += Ru, ku >= Cu && (bu = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), bu.decode(), ku = Ru);
        return bu.decode(xu().subarray(uu, uu + Ru))
      }(uu >>> 0, Ru)
    }
    let Bu = null;

    function xu() {
      return null !== Bu && 0 !== Bu.byteLength || (Bu = new Uint8Array(Mu.memory.buffer)), Bu
    }

    function Su(uu) {
      return pu[uu]
    }
    let pu = new Array(1024).fill(void 0);
    pu.push(void 0, null, !0, !1);
    let Tu = pu.length;

    function Wu(uu) {
      return void 0 === uu || null === uu
    }

    function ju(uu, Ru) {
      const yu = Ru(4 * uu.length, 4) >>> 0,
        Eu = Vu();
      for (let Ku = 0; Ku < uu.length; Ku++) Eu.setUint32(yu + 4 * Ku, Nu(uu[Ku]), !0);
      return Iu = uu.length, yu
    }

    function Hu(uu, Ru, yu) {
      if (void 0 === yu) {
        const yu = eu.encode(uu),
          Eu = Ru(yu.length, 1) >>> 0;
        return xu().subarray(Eu, Eu + yu.length).set(yu), Iu = yu.length, Eu
      }
      let Eu = uu.length,
        Ku = Ru(Eu, 1) >>> 0;
      const Qu = xu();
      let mu = 0;
      for (; mu < Eu; mu++) {
        const Ru = uu.charCodeAt(mu);
        if (Ru > 127) break;
        Qu[Ku + mu] = Ru
      }
      if (mu !== Eu) {
        0 !== mu && (uu = uu.slice(mu)), Ku = yu(Ku, Eu, Eu = mu + 3 * uu.length, 1) >>> 0;
        const Ru = xu().subarray(Ku + mu, Ku + Eu);
        mu += eu.encodeInto(uu, Ru).written, Ku = yu(Ku, Eu, mu, 1) >>> 0
      }
      return Iu = mu, Ku
    }

    function du(uu) {
      const Ru = Su(uu);
      return function(uu) {
        uu < 1028 || (pu[uu] = Tu, Tu = uu)
      }(uu), Ru
    }
    let bu = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    bu.decode();
    const Cu = 2146435072;
    let ku = 0;
    const eu = new TextEncoder;
    "encodeInto" in eu || (eu.encodeInto = function(uu, Ru) {
      const yu = eu.encode(uu);
      return Ru.set(yu), {
        read: uu.length,
        written: yu.length
      }
    });
    let Au, Du, Mu, Iu = 0;

    function Gu(uu, Ru) {
      return Du = uu, Mu = uu.exports, Au = Ru, Xu = null, Bu = null, Mu.RzFw(), Mu
    }

    function Uu(uu) {
      if (void 0 !== Mu) return Mu;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module: uu
      } = uu) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Ru = Ju();
      uu instanceof WebAssembly.Module || (uu = new WebAssembly.Module(uu));
      return Gu(new WebAssembly.Instance(uu, Ru), uu)
    }
    async function nu(uu) {
      if (void 0 !== Mu) return Mu;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module_or_path: uu
      } = uu) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Ru = Ju();
      ("string" === typeof uu || "function" === typeof Request && uu instanceof Request || "function" === typeof URL && uu instanceof URL) && (uu = fetch(uu));
      const {
        instance: yu,
        module: Eu
      } = await async function(uu, Ru) {
        if ("function" === typeof Response && uu instanceof Response) {
          if (!uu.ok) throw new Error(`failed to fetch Wasm: ${uu.status} ${uu.statusText} fetching '${uu.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(uu, Ru)
          } catch (yu) {
            if (! function(uu) {
                switch (uu) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(uu.type) || "application/wasm" === uu.headers.get("Content-Type")) throw yu;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", yu)
          }
          const Eu = await uu.arrayBuffer();
          return await WebAssembly.instantiate(Eu, Ru)
        } {
          const yu = await WebAssembly.instantiate(uu, Ru);
          return yu instanceof WebAssembly.Instance ? {
            instance: yu,
            module: uu
          } : yu
        }
      }(await uu, Ru);
      return Gu(yu, Eu)
    }
    var su = yu(3514),
      tu = yu(6401);
    class lu extends Error {
      stage;
      constructor(uu, Ru) {
        super((0, su.z)(uu, Ru), {
          cause: Ru
        }), this.name = "BloxdAnimWasmError", this.stage = uu
      }
    }
    let gu = null,
      cu = null;

    function Lu() {
      if (cu) throw cu
    }
    async function zu(uu, Ru, Ku) {
      Lu();
      const Qu = await (gu ??= (async () => {
        let uu;
        try {
          uu = await (0, su.D)(new yu.U(yu(42845)), (0, tu.d)("bloxd_wasm_anim"))
        } catch (Ru) {
          throw new lu((0, su.I)(Ru), Ru)
        }
        try {
          await nu({
            module_or_path: uu
          })
        } catch (Ru) {
          throw new lu("instantiate", Ru)
        }
        return Eu
      })(), gu.catch((() => {
        gu = null
      })), gu);
      Lu();
      try {
        return Qu.qmu(Object.entries(uu).flat(), [...Ru.mobTypes], [...Ru.vehicleTypes], [...Ru.mobAiStates], [...Ru.playerPoses], "builtIns" in Ku ? Ku.builtIns : void 0)
      } catch (mu) {
        const uu = new lu("call", mu);
        throw mu instanceof WebAssembly.RuntimeError && (cu = uu), uu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);