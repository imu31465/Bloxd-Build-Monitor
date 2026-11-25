export const id = 66;
export const ids = [66];
export const modules = {
  61711: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/bloxd_wasm_replay_bg.6603ed5d2c9561b0784b.wasm"
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
  },
  61705: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      BloxdReplayWasmError: () => Vu,
      loadReplayModule: () => Fu,
      markReplayTrapped: () => tu,
      replayMemoryBytes: () => Lu,
      unloadReplayModule: () => Bu
    });
    var su = {};
    ju.r(su), ju.d(su, {
      jZu: () => Uu,
      LXu: () => mu,
      jb: () => Zu,
      default: () => ku,
      initSync: () => ou,
      sb: () => Xu,
      zUu: () => lu,
      sZu: () => qu
    });
    class Uu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Cu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        du.BmM2(uu, 0)
      }
      lZu(uu, Eu, ju, su, Uu, Zu) {
        du.b4BP(this.__wbg_ptr, uu, Eu, ju, su, Uu, Zu)
      }
      close() {
        du.TkiI(this.__wbg_ptr)
      }
      crop(uu, Eu) {
        du.E0Dj(this.__wbg_ptr, uu, Eu)
      }
      CZu(uu, Eu) {
        du.ydu1(this.__wbg_ptr, uu, Eu)
      }
      cZu() {
        return du.VsRT(this.__wbg_ptr) >>> 0
      }
      bZu() {
        return du.ToOr(this.__wbg_ptr) >>> 0
      }
      NZu() {
        return du.eOsY(this.__wbg_ptr) >>> 0
      }
      OZu() {
        return du.TJA4(this.__wbg_ptr) >>> 0
      }
      fZu(uu, Eu) {
        du.IYuV(this.__wbg_ptr, uu, Eu)
      }
      constructor() {
        const uu = du.rGba();
        return this.__wbg_ptr = uu, Cu.register(this, this.__wbg_ptr, this), this
      }
      open() {
        du.SgNx(this.__wbg_ptr)
      }
      HUu() {
        return du.EQtk(this.__wbg_ptr) >>> 0
      }
      pause() {
        du.NEqf(this.__wbg_ptr)
      }
      play() {
        du.C54F(this.__wbg_ptr)
      }
      save() {
        return du.CSt2(this.__wbg_ptr) >>> 0
      }
      YZu() {
        du.xizi(this.__wbg_ptr)
      }
      seek(uu, Eu) {
        du.jS0Z(this.__wbg_ptr, uu, Eu)
      }
      DZu(uu) {
        du.jO0F(this.__wbg_ptr, uu)
      }
      qZu(uu, Eu) {
        const ju = function(uu, Eu) {
            const ju = Eu(8 * uu.length, 8) >>> 0;
            return function() {
              null !== cu && 0 !== cu.byteLength || (cu = new Float64Array(du.memory.buffer));
              return cu
            }().set(uu, ju / 8), au = uu.length, ju
          }(Eu, du.gFXs),
          su = au;
        du.PtEc(this.__wbg_ptr, uu, ju, su)
      }
      XZu(uu, Eu) {
        du.kYrL(this.__wbg_ptr, uu, Eu)
      }
      hZu(uu) {
        du.eq5e(this.__wbg_ptr, uu)
      }
      stage(uu) {
        return du.B82d(this.__wbg_ptr, uu) >>> 0
      }
      step(uu, Eu) {
        return du.RJVX(this.__wbg_ptr, uu, Eu) >>> 0
      }
    }

    function Zu(uu, Eu) {
      const ju = function(uu, Eu, ju) {
          if (void 0 === ju) {
            const ju = pu.encode(uu),
              su = Eu(ju.length, 1) >>> 0;
            return Yu().subarray(su, su + ju.length).set(ju), au = ju.length, su
          }
          let su = uu.length,
            Uu = Eu(su, 1) >>> 0;
          const Zu = Yu();
          let Xu = 0;
          for (; Xu < su; Xu++) {
            const Eu = uu.charCodeAt(Xu);
            if (Eu > 127) break;
            Zu[Uu + Xu] = Eu
          }
          if (Xu !== su) {
            0 !== Xu && (uu = uu.slice(Xu)), Uu = ju(Uu, su, su = Xu + 3 * uu.length, 1) >>> 0;
            const Eu = Yu().subarray(Uu + Xu, Uu + su);
            Xu += pu.encodeInto(uu, Eu).written, Uu = ju(Uu, su, Xu, 1) >>> 0
          }
          return au = Xu, Uu
        }(uu, du.gFXs, du.E7rA),
        su = au,
        Uu = du.QFdx(ju, su, Eu);
      if (Uu[1]) throw gu(Uu[0])
    }

    function Xu() {
      du.R4Bu()
    }

    function lu() {
      return du.Aqqz() >>> 0
    }

    function qu() {
      return gu(du.fjSs())
    }

    function fu() {
      return {
        __proto__: null,
        LDbZ: {
          __proto__: null,
          nzLu: function(uu, Eu) {
            return bu(Error(Nu(uu, Eu)))
          },
          Xyqb: function() {
            return bu(du.memory)
          },
          t2Hm: function(uu, Eu) {
            throw new Error(Nu(uu, Eu))
          },
          aqXu: function(uu, Eu) {
            console.error(Nu(uu, Eu))
          },
          vJO5: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Uu.prototype[Symbol.dispose] = Uu.prototype.free);
    const Cu = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((uu => du?.__wbg_replaymodule_free(uu, 1)));

    function bu(uu) {
      Du === hu.length && hu.push(hu.length + 1);
      const Eu = Du;
      return Du = hu[Eu], hu[Eu] = uu, Eu
    }
    let cu = null;

    function Nu(uu, Eu) {
      return function(uu, Eu) {
        Gu += Eu, Gu >= eu && (Mu = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Mu.decode(), Gu = Eu);
        return Mu.decode(Yu().subarray(uu, uu + Eu))
      }(uu >>> 0, Eu)
    }
    let Ou = null;

    function Yu() {
      return null !== Ou && 0 !== Ou.byteLength || (Ou = new Uint8Array(du.memory.buffer)), Ou
    }
    let hu = new Array(1024).fill(void 0);
    hu.push(void 0, null, !0, !1);
    let Du = hu.length;

    function gu(uu) {
      const Eu = function(uu) {
        return hu[uu]
      }(uu);
      return function(uu) {
        uu < 1028 || (hu[uu] = Du, Du = uu)
      }(uu), Eu
    }
    let Mu = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Mu.decode();
    const eu = 2146435072;
    let Gu = 0;
    const pu = new TextEncoder;
    "encodeInto" in pu || (pu.encodeInto = function(uu, Eu) {
      const ju = pu.encode(uu);
      return Eu.set(ju), {
        read: uu.length,
        written: ju.length
      }
    });
    let wu, Ju, du, au = 0;

    function Pu(uu, Eu) {
      return Ju = uu, du = uu.exports, wu = Eu, cu = null, Ou = null, du.Yp02(), du
    }

    function ou(uu) {
      if (void 0 !== du) return du;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module: uu
      } = uu) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Eu = fu();
      uu instanceof WebAssembly.Module || (uu = new WebAssembly.Module(uu));
      return Pu(new WebAssembly.Instance(uu, Eu), uu)
    }
    async function ku(uu) {
      if (void 0 !== du) return du;
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
      return Pu(ju, su)
    }

    function mu() {
      du = void 0, Ju = void 0, cu = null, Ou = null, hu = new Array(1024).fill(void 0), hu.push(void 0, null, !0, !1), Du = hu.length
    }
    var vu = ju(3020),
      Ku = ju(6818);
    class Vu extends Error {
      stage;
      constructor(uu, Eu) {
        super((0, vu.F)(uu, Eu), {
          cause: Eu
        }), this.name = "BloxdReplayWasmError", this.stage = uu
      }
    }
    let ru = null,
      Qu = null,
      iu = Promise.resolve(),
      Wu = 0,
      Su = null,
      Iu = null;

    function Fu() {
      if (Iu) return Promise.reject(Iu);
      if (Qu) return Qu;
      const uu = Wu,
        Eu = iu,
        Uu = (async () => {
          let Uu;
          await Eu, ru ??= (0, vu.I)(new ju.U(ju(61711)), (0, Ku.b)("bloxd_wasm_replay"));
          try {
            Uu = await ru
          } catch (Zu) {
            throw ru = null, new Vu((0, vu.L)(Zu), Zu)
          }
          if (uu !== Wu) throw new Vu("instantiate", new Error("unloaded while loading"));
          try {
            await ku({
              module_or_path: Uu
            })
          } catch (Zu) {
            throw mu(), new Vu("instantiate", Zu)
          }
          if (uu !== Wu) throw mu(), new Vu("instantiate", new Error("unloaded while loading"));
          return Su = qu(), su
        })();
      return Qu = Uu, iu = Uu.catch((() => {})), Uu.catch((() => {
        Qu === Uu && (Qu = null)
      })), Uu
    }

    function Bu() {
      Iu || xu()
    }

    function Lu() {
      return Su?.buffer.byteLength ?? 0
    }

    function tu(uu) {
      return Iu || (Iu = new Vu("call", uu), xu()), Iu
    }

    function xu() {
      Wu++, mu(), Qu = null, Su = null
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);