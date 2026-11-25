export const id = 65;
export const ids = [65];
export const modules = {
  61702: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/bloxd_wasm_recorder_bg.d449b0396a3142802325.wasm"
  },
  61697: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      BloxdRecorderWasmError: () => Vu,
      RECORDER_MODULE_ID: () => Ku,
      loadRecorderModule: () => iu,
      markRecorderTrapped: () => Su,
      prefetchRecorderModule: () => Wu,
      recorderMemoryBytes: () => Fu,
      unloadRecorderModule: () => Iu
    });
    var su = {};
    ju.r(su), ju.d(su, {
      uZu: () => Uu,
      LXu: () => ku,
      jb: () => Zu,
      default: () => ou,
      initSync: () => Pu,
      sb: () => Xu,
      zUu: () => lu,
      tUu: () => qu
    });
    class Uu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Cu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        Ju.cemW(uu, 0)
      }
      busy() {
        return 0 !== Ju.k2Dw(this.__wbg_ptr)
      }
      command(uu, Eu) {
        return 0 !== Ju.xXPr(this.__wbg_ptr, uu, Eu)
      }
      xUu(uu) {
        return Ju.XlUw(this.__wbg_ptr, uu) >>> 0
      }
      LUu() {
        Ju.zH7d(this.__wbg_ptr)
      }
      BUu() {
        return Ju.sPip(this.__wbg_ptr) >>> 0
      }
      FUu() {
        return Ju.EOfP(this.__wbg_ptr)
      }
      AUu() {
        return Ju.Zi54(this.__wbg_ptr) >>> 0
      }
      nUu() {
        return Ju.yu0p(this.__wbg_ptr) >>> 0
      }
      feed(uu) {
        return Ju.n3bY(this.__wbg_ptr, uu) >>> 0
      }
      constructor() {
        const uu = Ju.tTCY();
        return this.__wbg_ptr = uu, Cu.register(this, this.__wbg_ptr, this), this
      }
      HUu() {
        return Ju.ckwD(this.__wbg_ptr) >>> 0
      }
      tXu() {
        return Ju.rJ93(this.__wbg_ptr) >>> 0
      }
      IUu(uu, Eu, ju) {
        return 0 !== Ju.LC9G(this.__wbg_ptr, uu, Eu, ju)
      }
      stage(uu) {
        return Ju.f840(this.__wbg_ptr, uu) >>> 0
      }
      step() {
        return Ju.DvZR(this.__wbg_ptr) >>> 0
      }
    }

    function Zu(uu, Eu) {
      const ju = function(uu, Eu, ju) {
          if (void 0 === ju) {
            const ju = Gu.encode(uu),
              su = Eu(ju.length, 1) >>> 0;
            return Ou().subarray(su, su + ju.length).set(ju), du = ju.length, su
          }
          let su = uu.length,
            Uu = Eu(su, 1) >>> 0;
          const Zu = Ou();
          let Xu = 0;
          for (; Xu < su; Xu++) {
            const Eu = uu.charCodeAt(Xu);
            if (Eu > 127) break;
            Zu[Uu + Xu] = Eu
          }
          if (Xu !== su) {
            0 !== Xu && (uu = uu.slice(Xu)), Uu = ju(Uu, su, su = Xu + 3 * uu.length, 1) >>> 0;
            const Eu = Ou().subarray(Uu + Xu, Uu + su);
            Xu += Gu.encodeInto(uu, Eu).written, Uu = ju(Uu, su, Xu, 1) >>> 0
          }
          return du = Xu, Uu
        }(uu, Ju.l8VA, Ju.Dw5u),
        su = du,
        Uu = Ju.Pe0C(ju, su, Eu);
      if (Uu[1]) throw Du(Uu[0])
    }

    function Xu() {
      Ju.b0yo()
    }

    function lu() {
      return Ju.U7Ra() >>> 0
    }

    function qu() {
      return Du(Ju.ukZf())
    }

    function fu() {
      return {
        __proto__: null,
        iquo: {
          __proto__: null,
          l3t1: function(uu, Eu) {
            return bu(Error(cu(uu, Eu)))
          },
          pI6X: function() {
            return bu(Ju.memory)
          },
          mnCn: function(uu, Eu) {
            throw new Error(cu(uu, Eu))
          },
          vH92: function(uu, Eu) {
            console.error(cu(uu, Eu))
          },
          SuVn: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Uu.prototype[Symbol.dispose] = Uu.prototype.free);
    const Cu = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((uu => Ju?.__wbg_recordermodule_free(uu, 1)));

    function bu(uu) {
      hu === Yu.length && Yu.push(Yu.length + 1);
      const Eu = hu;
      return hu = Yu[Eu], Yu[Eu] = uu, Eu
    }

    function cu(uu, Eu) {
      return function(uu, Eu) {
        eu += Eu, eu >= Mu && (gu = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), gu.decode(), eu = Eu);
        return gu.decode(Ou().subarray(uu, uu + Eu))
      }(uu >>> 0, Eu)
    }
    let Nu = null;

    function Ou() {
      return null !== Nu && 0 !== Nu.byteLength || (Nu = new Uint8Array(Ju.memory.buffer)), Nu
    }
    let Yu = new Array(1024).fill(void 0);
    Yu.push(void 0, null, !0, !1);
    let hu = Yu.length;

    function Du(uu) {
      const Eu = function(uu) {
        return Yu[uu]
      }(uu);
      return function(uu) {
        uu < 1028 || (Yu[uu] = hu, hu = uu)
      }(uu), Eu
    }
    let gu = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    gu.decode();
    const Mu = 2146435072;
    let eu = 0;
    const Gu = new TextEncoder;
    "encodeInto" in Gu || (Gu.encodeInto = function(uu, Eu) {
      const ju = Gu.encode(uu);
      return Eu.set(ju), {
        read: uu.length,
        written: ju.length
      }
    });
    let pu, wu, Ju, du = 0;

    function au(uu, Eu) {
      return wu = uu, Ju = uu.exports, pu = Eu, Nu = null, Ju.ideU(), Ju
    }

    function Pu(uu) {
      if (void 0 !== Ju) return Ju;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module: uu
      } = uu) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Eu = fu();
      uu instanceof WebAssembly.Module || (uu = new WebAssembly.Module(uu));
      return au(new WebAssembly.Instance(uu, Eu), uu)
    }
    async function ou(uu) {
      if (void 0 !== Ju) return Ju;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module_or_path: uu
      } = uu) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Eu = fu();
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
      return au(ju, su)
    }

    function ku() {
      Ju = void 0, wu = void 0, Nu = null, Yu = new Array(1024).fill(void 0), Yu.push(void 0, null, !0, !1), hu = Yu.length
    }
    var mu = ju(3020),
      vu = ju(6818);
    const Ku = 2;
    class Vu extends Error {
      stage;
      constructor(uu, Eu) {
        super((0, mu.F)(uu, Eu), {
          cause: Eu
        }), this.name = "BloxdRecorderWasmError", this.stage = uu
      }
    }
    let ru = null;
    const Qu = function(uu) {
      let Eu = null,
        ju = null,
        su = null,
        Uu = null;
      const Zu = async () => {
        let ju = null;
        try {
          return ju = Eu ??= (0, mu.I)(uu.url(), (0, vu.b)(uu.name)), await ju
        } catch (su) {
          throw Eu === ju && (Eu = null), uu.error((0, mu.L)(su), su)
        }
      };
      return {
        load: () => {
          if (Uu) return Promise.reject(Uu);
          if (ju) return ju;
          const Eu = (async () => {
            const Eu = await Zu();
            try {
              await uu.init(Eu)
            } catch (ju) {
              throw uu.error("instantiate", ju)
            }
            return uu.bindings
          })();
          ju = Eu, su = Eu;
          const Xu = () => {
            su === Eu && (su = null)
          };
          return Eu.then(Xu, (() => {
            Xu(), ju === Eu && (ju = null)
          })), Eu
        },
        prefetch: async () => {
          Uu || ju || await Zu()
        },
        markTrapped: Eu => (Uu ??= uu.error("call", Eu), Uu),
        unload: () => {
          Uu || !uu.reset || su || (uu.reset(), ju = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new ju.U(ju(61702)),
      init: async uu => {
        await ou({
          module_or_path: uu
        }), ru = qu()
      },
      bindings: su,
      error: (uu, Eu) => new Vu(uu, Eu),
      reset: () => {
        ku(), ru = null
      }
    });

    function iu() {
      return Qu.load()
    }

    function Wu() {
      return Qu.prefetch()
    }

    function Su(uu) {
      return Qu.markTrapped(uu)
    }

    function Iu() {
      Qu.unload()
    }

    function Fu() {
      return ru?.buffer.byteLength ?? 0
    }
  },
  6818: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(3020);
    const Uu = {
      bloxd_wasm: () => "2517ea48b70adb2315dde407aac9f7771c8f8fed4679df16a67d4f64e16c0ca4",
      bloxd_wasm_client: () => "8e3f5c7e0ae9778e8a2bd555c9edea34e1d676dc84c47647f9c7991c78833b4b",
      bloxd_wasm_workers: () => "d314ffb1d191d7f6e9dac1c5f780237cb88fc08431e4e713d1c31afadf5b76c9",
      bloxd_wasm_models: () => "42b4348bfb4c39f2510c78f8a28323e13b143f72ae8226764cf2206b470c6fb3",
      bloxd_wasm_webgpu: () => "c94f0ae845af7c64763dcb834061b20260ad6971d870317f9bca33a9ff0b5ef7",
      bloxd_wasm_webgl: () => "38da11f9eab49b5d8f0185157a6a5ad6178e22840ff20a445e1f5249ac36cd91",
      bloxd_wasm_webgl1: () => "ab1532b525d3a2188fd7631f21987906e6be9fdd62b14c0c03f54625410b4948",
      bloxd_wasm_replay: () => "1c1690d0d143f51a770a1ac88fb427efc12cb7c4ca9f74446ee285cbe1e29b0f",
      bloxd_wasm_recorder: () => "97298cfd514093207f0c3863193df40fc2a4be3f5101bb93ee5a1dc7efa69233",
      bloxd_wasm_anim: () => "b0759d22815334552b8854b47c63eec9a03952d38dd1a922a5af613c34fa435b",
      bloxd_wasm_textures: () => "4f2ee2890c6dcabbc98355370ba732664c4dbb0f4dd616c0ecd33a7f045a54d2",
      bloxd_wasm_shader_pack: () => "920f59d8c3d7cd8bfe52d0c86bce310b93a17cac0f77c75edad8ee229808259a"
    };
    var Zu = ju(4874);

    function Xu(uu) {
      const Eu = Object.prototype.hasOwnProperty.call(Uu, uu) ? Uu[uu]() : void 0;
      if (void 0 !== Eu) return {
        sha256: Eu,
        onMismatch: Zu.B
      };
      throw new su.j(`${uu} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);