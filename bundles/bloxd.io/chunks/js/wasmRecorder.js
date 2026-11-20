export const id = 61;
export const ids = [61];
export const modules = {
  61342: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/bloxd_wasm_recorder_bg.862a5071870344d064f3.wasm"
  },
  61339: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      BloxdRecorderWasmError: () => tu,
      RECORDER_MODULE_ID: () => su,
      loadRecorderModule: () => cu,
      markRecorderTrapped: () => zu,
      prefetchRecorderModule: () => Lu,
      recorderMemoryBytes: () => wu,
      unloadRecorderModule: () => Fu
    });
    var Eu = {};
    yu.r(Eu), yu.d(Eu, {
      VQu: () => Ku,
      fmu: () => Gu,
      PV: () => Qu,
      default: () => Iu,
      initSync: () => Mu,
      iV: () => mu,
      NQu: () => Ju,
      RQu: () => Nu
    });
    class Ku {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Vu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        eu.PJCd(uu, 0)
      }
      busy() {
        return 0 !== eu.ERDh(this.__wbg_ptr)
      }
      command(uu, Ru) {
        return 0 !== eu.mTMk(this.__wbg_ptr, uu, Ru)
      }
      yQu(uu) {
        return eu.zQrw(this.__wbg_ptr, uu) >>> 0
      }
      uQu() {
        eu.vStV(this.__wbg_ptr)
      }
      fKu() {
        return eu.OGi2(this.__wbg_ptr) >>> 0
      }
      aKu() {
        return eu.Yr7m(this.__wbg_ptr)
      }
      QQu() {
        return eu.T42V(this.__wbg_ptr) >>> 0
      }
      mQu() {
        return eu.J9no(this.__wbg_ptr) >>> 0
      }
      feed(uu) {
        return eu.xAfi(this.__wbg_ptr, uu) >>> 0
      }
      constructor() {
        const uu = eu.prpv();
        return this.__wbg_ptr = uu, Vu.register(this, this.__wbg_ptr, this), this
      }
      KQu() {
        return eu.n27c(this.__wbg_ptr) >>> 0
      }
      uJu() {
        return eu.sjGy(this.__wbg_ptr) >>> 0
      }
      vKu(uu, Ru, yu) {
        return 0 !== eu.whnp(this.__wbg_ptr, uu, Ru, yu)
      }
      stage(uu) {
        return eu.jc3J(this.__wbg_ptr, uu) >>> 0
      }
      step() {
        return eu.rwp2(this.__wbg_ptr) >>> 0
      }
    }

    function Qu(uu, Ru) {
      const yu = function(uu, Ru, yu) {
          if (void 0 === yu) {
            const yu = bu.encode(uu),
              Eu = Ru(yu.length, 1) >>> 0;
            return Su().subarray(Eu, Eu + yu.length).set(yu), Au = yu.length, Eu
          }
          let Eu = uu.length,
            Ku = Ru(Eu, 1) >>> 0;
          const Qu = Su();
          let mu = 0;
          for (; mu < Eu; mu++) {
            const Ru = uu.charCodeAt(mu);
            if (Ru > 127) break;
            Qu[Ku + mu] = Ru
          }
          if (mu !== Eu) {
            0 !== mu && (uu = uu.slice(mu)), Ku = yu(Ku, Eu, Eu = mu + 3 * uu.length, 1) >>> 0;
            const Ru = Su().subarray(Ku + mu, Ku + Eu);
            mu += bu.encodeInto(uu, Ru).written, Ku = yu(Ku, Eu, mu, 1) >>> 0
          }
          return Au = mu, Ku
        }(uu, eu.yYMa, eu.lc7F),
        Eu = Au,
        Ku = eu.HJYN(yu, Eu, Ru);
      if (Ku[1]) throw Wu(Ku[0])
    }

    function mu() {
      eu.v7lG()
    }

    function Ju() {
      return eu.CPAc() >>> 0
    }

    function Nu() {
      return Wu(eu.ADW9())
    }

    function Xu() {
      return {
        __proto__: null,
        Vhh7: {
          __proto__: null,
          upB6: function(uu, Ru) {
            return ru(Error(Bu(uu, Ru)))
          },
          Uxon: function() {
            return ru(eu.memory)
          },
          xeLU: function(uu, Ru) {
            throw new Error(Bu(uu, Ru))
          },
          S2tC: function(uu, Ru) {
            console.error(Bu(uu, Ru))
          },
          xhz1: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Ku.prototype[Symbol.dispose] = Ku.prototype.free);
    const Vu = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((uu => eu?.__wbg_recordermodule_free(uu, 1)));

    function ru(uu) {
      Tu === pu.length && pu.push(pu.length + 1);
      const Ru = Tu;
      return Tu = pu[Ru], pu[Ru] = uu, Ru
    }

    function Bu(uu, Ru) {
      return function(uu, Ru) {
        du += Ru, du >= Hu && (ju = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), ju.decode(), du = Ru);
        return ju.decode(Su().subarray(uu, uu + Ru))
      }(uu >>> 0, Ru)
    }
    let xu = null;

    function Su() {
      return null !== xu && 0 !== xu.byteLength || (xu = new Uint8Array(eu.memory.buffer)), xu
    }
    let pu = new Array(1024).fill(void 0);
    pu.push(void 0, null, !0, !1);
    let Tu = pu.length;

    function Wu(uu) {
      const Ru = function(uu) {
        return pu[uu]
      }(uu);
      return function(uu) {
        uu < 1028 || (pu[uu] = Tu, Tu = uu)
      }(uu), Ru
    }
    let ju = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    ju.decode();
    const Hu = 2146435072;
    let du = 0;
    const bu = new TextEncoder;
    "encodeInto" in bu || (bu.encodeInto = function(uu, Ru) {
      const yu = bu.encode(uu);
      return Ru.set(yu), {
        read: uu.length,
        written: yu.length
      }
    });
    let Cu, ku, eu, Au = 0;

    function Du(uu, Ru) {
      return ku = uu, eu = uu.exports, Cu = Ru, xu = null, eu.uUZr(), eu
    }

    function Mu(uu) {
      if (void 0 !== eu) return eu;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module: uu
      } = uu) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Ru = Xu();
      uu instanceof WebAssembly.Module || (uu = new WebAssembly.Module(uu));
      return Du(new WebAssembly.Instance(uu, Ru), uu)
    }
    async function Iu(uu) {
      if (void 0 !== eu) return eu;
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
      return Du(yu, Eu)
    }

    function Gu() {
      eu = void 0, ku = void 0, xu = null, pu = new Array(1024).fill(void 0), pu.push(void 0, null, !0, !1), Tu = pu.length
    }
    var Uu = yu(3514),
      nu = yu(6401);
    const su = 2;
    class tu extends Error {
      stage;
      constructor(uu, Ru) {
        super((0, Uu.z)(uu, Ru), {
          cause: Ru
        }), this.name = "BloxdRecorderWasmError", this.stage = uu
      }
    }
    let lu = null;
    const gu = function(uu) {
      let Ru = null,
        yu = null,
        Eu = null,
        Ku = null;
      const Qu = async () => {
        let yu = null;
        try {
          return yu = Ru ??= (0, Uu.D)(uu.url(), (0, nu.d)(uu.name)), await yu
        } catch (Eu) {
          throw Ru === yu && (Ru = null), uu.error((0, Uu.I)(Eu), Eu)
        }
      };
      return {
        load: () => {
          if (Ku) return Promise.reject(Ku);
          if (yu) return yu;
          const Ru = (async () => {
            const Ru = await Qu();
            try {
              await uu.init(Ru)
            } catch (yu) {
              throw uu.error("instantiate", yu)
            }
            return uu.bindings
          })();
          yu = Ru, Eu = Ru;
          const mu = () => {
            Eu === Ru && (Eu = null)
          };
          return Ru.then(mu, (() => {
            mu(), yu === Ru && (yu = null)
          })), Ru
        },
        prefetch: async () => {
          Ku || yu || await Qu()
        },
        markTrapped: Ru => (Ku ??= uu.error("call", Ru), Ku),
        unload: () => {
          Ku || !uu.reset || Eu || (uu.reset(), yu = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new yu.U(yu(61342)),
      init: async uu => {
        await Iu({
          module_or_path: uu
        }), lu = Nu()
      },
      bindings: Eu,
      error: (uu, Ru) => new tu(uu, Ru),
      reset: () => {
        Gu(), lu = null
      }
    });

    function cu() {
      return gu.load()
    }

    function Lu() {
      return gu.prefetch()
    }

    function zu(uu) {
      return gu.markTrapped(uu)
    }

    function Fu() {
      gu.unload()
    }

    function wu() {
      return lu?.buffer.byteLength ?? 0
    }
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
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);