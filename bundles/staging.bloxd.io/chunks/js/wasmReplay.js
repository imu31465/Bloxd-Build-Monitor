export const id = 62;
export const ids = [62];
export const modules = {
  61357: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/bloxd_wasm_replay_bg.e3b545e3fd784bbbfbe5.wasm"
  },
  6401: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu
    });
    var Eu = yu(3514);
    const Ku = {
      bloxd_wasm: () => "3ed1a084322ad3cb30f47a8b06ce739897d64e664873e8362bad69a4e0fce36c",
      bloxd_wasm_client: () => "a9917e573bede14f22b22d14f5e644f2e71fcc9a6e34c58bf3e57cb4d3b8dd2b",
      bloxd_wasm_workers: () => "ecdb0c80693ae8280b8bb13b956bc3d05f85f48abcbff37b3a125c9c9aeb9848",
      bloxd_wasm_models: () => "8616b4260206fb1a456630cc184280886bca0201d0f8f84810c3b788ec25c1df",
      bloxd_wasm_webgpu: () => "e1a74926aaf9a1691f5a3d8a06cc60f732a0a528f8f9aac762b2a2303d0da591",
      bloxd_wasm_webgl: () => "ecba4faf3200e609973474a28d49b8ef73a4138f5f8c0d78ca0483605b24a0a2",
      bloxd_wasm_webgl1: () => "abdfe5d3d9983581a3b06cba824de0a31dd1a1adb24080f819fc74a713dfff02",
      bloxd_wasm_replay: () => "5f179054ce214c3ba0c750b1416df152f42691008bf442f02c9d21149669f166",
      bloxd_wasm_recorder: () => "f2da278d1126f2da5d1768d8feca01c3d5ad046842ca42386086ad694791f414",
      bloxd_wasm_anim: () => "f3d3949e0ee8ede817bb5a787d7fe6321fd96ba9985c07ea9ebdff2066b61798",
      bloxd_wasm_textures: () => "1cc3b5ae23772c6447fc1490ff3e9e59019a9128a46b8927b277f7cf41150b52",
      bloxd_wasm_shader_pack: () => "2dacc1cc4dca547291848db95b089e90361aa09148df7a071edd232a8671549d"
    };
    var Qu = yu(4470);

    function mu(uu) {
      const Ru = Object.prototype.hasOwnProperty.call(Ku, uu) ? Ku[uu]() : void 0;
      if (void 0 !== Ru) return {
        sha256: Ru,
        onMismatch: Qu.A
      };
      throw new Eu.g(`${uu} has no release digest, so this build refuses it`)
    }
  },
  61351: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      BloxdReplayWasmError: () => tu,
      loadReplayModule: () => wu,
      markReplayTrapped: () => Pu,
      replayMemoryBytes: () => hu,
      unloadReplayModule: () => Zu
    });
    var Eu = {};
    yu.r(Eu), yu.d(Eu, {
      BQu: () => Ku,
      fmu: () => Uu,
      PV: () => Qu,
      default: () => Gu,
      initSync: () => Iu,
      iV: () => mu,
      NQu: () => Ju,
      xQu: () => Nu
    });
    class Ku {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Vu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        Au.wCyn(uu, 0)
      }
      WQu(uu, Ru, yu, Eu, Ku, Qu) {
        Au.rFWm(this.__wbg_ptr, uu, Ru, yu, Eu, Ku, Qu)
      }
      close() {
        Au.rspv(this.__wbg_ptr)
      }
      crop(uu, Ru) {
        Au.uE8n(this.__wbg_ptr, uu, Ru)
      }
      dQu(uu, Ru) {
        Au.ljAh(this.__wbg_ptr, uu, Ru)
      }
      CQu() {
        return Au.rZa0(this.__wbg_ptr) >>> 0
      }
      bQu() {
        return Au.nKiH(this.__wbg_ptr) >>> 0
      }
      kQu() {
        return Au.pgFV(this.__wbg_ptr) >>> 0
      }
      eQu() {
        return Au.HzhK(this.__wbg_ptr) >>> 0
      }
      HQu(uu, Ru) {
        Au.cOLE(this.__wbg_ptr, uu, Ru)
      }
      constructor() {
        const uu = Au.ZsbU();
        return this.__wbg_ptr = uu, Vu.register(this, this.__wbg_ptr, this), this
      }
      open() {
        Au.IPVE(this.__wbg_ptr)
      }
      KQu() {
        return Au.XyRh(this.__wbg_ptr) >>> 0
      }
      pause() {
        Au.Iy67(this.__wbg_ptr)
      }
      play() {
        Au.FDJm(this.__wbg_ptr)
      }
      save() {
        return Au.D6B1(this.__wbg_ptr) >>> 0
      }
      AQu() {
        Au.LInT(this.__wbg_ptr)
      }
      seek(uu, Ru) {
        Au.ewri(this.__wbg_ptr, uu, Ru)
      }
      MQu(uu) {
        Au.vIB9(this.__wbg_ptr, uu)
      }
      jQu(uu, Ru) {
        const yu = function(uu, Ru) {
            const yu = Ru(8 * uu.length, 8) >>> 0;
            return function() {
              null !== Bu && 0 !== Bu.byteLength || (Bu = new Float64Array(Au.memory.buffer));
              return Bu
            }().set(uu, yu / 8), Du = uu.length, yu
          }(Ru, Au.FTbn),
          Eu = Du;
        Au.nIrU(this.__wbg_ptr, uu, yu, Eu)
      }
      TQu(uu, Ru) {
        Au.OkBL(this.__wbg_ptr, uu, Ru)
      }
      DQu(uu) {
        Au.Hj24(this.__wbg_ptr, uu)
      }
      stage(uu) {
        return Au.a9at(this.__wbg_ptr, uu) >>> 0
      }
      step(uu, Ru) {
        return Au.PpOb(this.__wbg_ptr, uu, Ru) >>> 0
      }
    }

    function Qu(uu, Ru) {
      const yu = function(uu, Ru, yu) {
          if (void 0 === yu) {
            const yu = Cu.encode(uu),
              Eu = Ru(yu.length, 1) >>> 0;
            return pu().subarray(Eu, Eu + yu.length).set(yu), Du = yu.length, Eu
          }
          let Eu = uu.length,
            Ku = Ru(Eu, 1) >>> 0;
          const Qu = pu();
          let mu = 0;
          for (; mu < Eu; mu++) {
            const Ru = uu.charCodeAt(mu);
            if (Ru > 127) break;
            Qu[Ku + mu] = Ru
          }
          if (mu !== Eu) {
            0 !== mu && (uu = uu.slice(mu)), Ku = yu(Ku, Eu, Eu = mu + 3 * uu.length, 1) >>> 0;
            const Ru = pu().subarray(Ku + mu, Ku + Eu);
            mu += Cu.encodeInto(uu, Ru).written, Ku = yu(Ku, Eu, mu, 1) >>> 0
          }
          return Du = mu, Ku
        }(uu, Au.FTbn, Au.o0oE),
        Eu = Du,
        Ku = Au.YtW0(yu, Eu, Ru);
      if (Ku[1]) throw ju(Ku[0])
    }

    function mu() {
      Au.uVZt()
    }

    function Ju() {
      return Au.TEPT() >>> 0
    }

    function Nu() {
      return ju(Au.aa1X())
    }

    function Xu() {
      return {
        __proto__: null,
        Xrqz: {
          __proto__: null,
          yP0t: function(uu, Ru) {
            return ru(Error(xu(uu, Ru)))
          },
          gS9O: function() {
            return ru(Au.memory)
          },
          zs7a: function(uu, Ru) {
            throw new Error(xu(uu, Ru))
          },
          zSJP: function(uu, Ru) {
            console.error(xu(uu, Ru))
          },
          DzUV: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Ku.prototype[Symbol.dispose] = Ku.prototype.free);
    const Vu = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((uu => Au?.__wbg_replaymodule_free(uu, 1)));

    function ru(uu) {
      Wu === Tu.length && Tu.push(Tu.length + 1);
      const Ru = Wu;
      return Wu = Tu[Ru], Tu[Ru] = uu, Ru
    }
    let Bu = null;

    function xu(uu, Ru) {
      return function(uu, Ru) {
        bu += Ru, bu >= du && (Hu = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Hu.decode(), bu = Ru);
        return Hu.decode(pu().subarray(uu, uu + Ru))
      }(uu >>> 0, Ru)
    }
    let Su = null;

    function pu() {
      return null !== Su && 0 !== Su.byteLength || (Su = new Uint8Array(Au.memory.buffer)), Su
    }
    let Tu = new Array(1024).fill(void 0);
    Tu.push(void 0, null, !0, !1);
    let Wu = Tu.length;

    function ju(uu) {
      const Ru = function(uu) {
        return Tu[uu]
      }(uu);
      return function(uu) {
        uu < 1028 || (Tu[uu] = Wu, Wu = uu)
      }(uu), Ru
    }
    let Hu = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Hu.decode();
    const du = 2146435072;
    let bu = 0;
    const Cu = new TextEncoder;
    "encodeInto" in Cu || (Cu.encodeInto = function(uu, Ru) {
      const yu = Cu.encode(uu);
      return Ru.set(yu), {
        read: uu.length,
        written: yu.length
      }
    });
    let ku, eu, Au, Du = 0;

    function Mu(uu, Ru) {
      return eu = uu, Au = uu.exports, ku = Ru, Bu = null, Su = null, Au.g9QP(), Au
    }

    function Iu(uu) {
      if (void 0 !== Au) return Au;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module: uu
      } = uu) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Ru = Xu();
      uu instanceof WebAssembly.Module || (uu = new WebAssembly.Module(uu));
      return Mu(new WebAssembly.Instance(uu, Ru), uu)
    }
    async function Gu(uu) {
      if (void 0 !== Au) return Au;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module_or_path: uu
      } = uu) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Ru = Xu();
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
      return Mu(yu, Eu)
    }

    function Uu() {
      Au = void 0, eu = void 0, Bu = null, Su = null, Tu = new Array(1024).fill(void 0), Tu.push(void 0, null, !0, !1), Wu = Tu.length
    }
    var nu = yu(3514),
      su = yu(6401);
    class tu extends Error {
      stage;
      constructor(uu, Ru) {
        super((0, nu.z)(uu, Ru), {
          cause: Ru
        }), this.name = "BloxdReplayWasmError", this.stage = uu
      }
    }
    let lu = null,
      gu = null,
      cu = Promise.resolve(),
      Lu = 0,
      zu = null,
      Fu = null;

    function wu() {
      if (Fu) return Promise.reject(Fu);
      if (gu) return gu;
      const uu = Lu,
        Ru = cu,
        Ku = (async () => {
          let Ku;
          await Ru, lu ??= (0, nu.D)(new yu.U(yu(61357)), (0, su.d)("bloxd_wasm_replay"));
          try {
            Ku = await lu
          } catch (Qu) {
            throw lu = null, new tu((0, nu.I)(Qu), Qu)
          }
          if (uu !== Lu) throw new tu("instantiate", new Error("unloaded while loading"));
          try {
            await Gu({
              module_or_path: Ku
            })
          } catch (Qu) {
            throw Uu(), new tu("instantiate", Qu)
          }
          if (uu !== Lu) throw Uu(), new tu("instantiate", new Error("unloaded while loading"));
          return zu = Nu(), Eu
        })();
      return gu = Ku, cu = Ku.catch((() => {})), Ku.catch((() => {
        gu === Ku && (gu = null)
      })), Ku
    }

    function Zu() {
      Fu || iu()
    }

    function hu() {
      return zu?.buffer.byteLength ?? 0
    }

    function Pu(uu) {
      return Fu || (Fu = new tu("call", uu), iu()), Fu
    }

    function iu() {
      Lu++, Uu(), gu = null, zu = null
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);