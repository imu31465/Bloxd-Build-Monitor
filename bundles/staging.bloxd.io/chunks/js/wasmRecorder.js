export const id = 64;
export const ids = [64];
export const modules = {
  60868: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/bloxd_wasm_recorder_bg.df2cd44fd63c75637f32.wasm"
  },
  60865: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      BloxdRecorderWasmError: () => Qk,
      RECORDER_MODULE_ID: () => zk,
      loadRecorderModule: () => hk,
      markRecorderTrapped: () => Wk,
      prefetchRecorderModule: () => ak,
      recorderMemoryBytes: () => Xk,
      unloadRecorderModule: () => tk
    });
    var Dk = {};
    ik.r(Dk), ik.d(Dk, {
      dfk: () => fk,
      wbk: () => uk,
      lK: () => Sk,
      default: () => Fk,
      initSync: () => Vk,
      pK: () => bk,
      jfk: () => rk,
      lfk: () => Pk
    });
    class fk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Mk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        jk.tesr(kk, 0)
      }
      busy() {
        return 0 !== jk.J1pZ(this.__wbg_ptr)
      }
      command(kk, ek) {
        return 0 !== jk.F6m0(this.__wbg_ptr, kk, ek)
      }
      pfk(kk) {
        return jk.C0bv(this.__wbg_ptr, kk) >>> 0
      }
      wfk() {
        jk.w1lh(this.__wbg_ptr)
      }
      Hfk() {
        return jk.nUQB(this.__wbg_ptr) >>> 0
      }
      Ufk() {
        return jk.ue4V(this.__wbg_ptr)
      }
      Lfk() {
        return jk.pLQt(this.__wbg_ptr) >>> 0
      }
      Cfk() {
        return jk.atLW(this.__wbg_ptr) >>> 0
      }
      feed(kk) {
        return jk.VF3W(this.__wbg_ptr, kk) >>> 0
      }
      constructor() {
        const kk = jk.RLab();
        return this.__wbg_ptr = kk, Mk.register(this, this.__wbg_ptr, this), this
      }
      Yfk() {
        return jk.qys7(this.__wbg_ptr) >>> 0
      }
      lbk() {
        return jk.WPFY(this.__wbg_ptr) >>> 0
      }
      nfk(kk, ek, ik) {
        return 0 !== jk.fpXn(this.__wbg_ptr, kk, ek, ik)
      }
      stage(kk) {
        return jk.NGMY(this.__wbg_ptr, kk) >>> 0
      }
      step() {
        return jk.acjW(this.__wbg_ptr) >>> 0
      }
    }

    function Sk(kk, ek) {
      const ik = function(kk, ek, ik) {
          if (void 0 === ik) {
            const ik = Lk.encode(kk),
              Dk = ek(ik.length, 1) >>> 0;
            return Uk().subarray(Dk, Dk + ik.length).set(ik), sk = ik.length, Dk
          }
          let Dk = kk.length,
            fk = ek(Dk, 1) >>> 0;
          const Sk = Uk();
          let bk = 0;
          for (; bk < Dk; bk++) {
            const ek = kk.charCodeAt(bk);
            if (ek > 127) break;
            Sk[fk + bk] = ek
          }
          if (bk !== Dk) {
            0 !== bk && (kk = kk.slice(bk)), fk = ik(fk, Dk, Dk = bk + 3 * kk.length, 1) >>> 0;
            const ek = Uk().subarray(fk + bk, fk + Dk);
            bk += Lk.encodeInto(kk, ek).written, fk = ik(fk, Dk, bk, 1) >>> 0
          }
          return sk = bk, fk
        }(kk, jk.GN6B, jk.Nf13),
        Dk = sk,
        fk = jk.k37z(ik, Dk, ek);
      if (fk[1]) throw lk(fk[0])
    }

    function bk() {
      jk.cqUP()
    }

    function rk() {
      return jk.js1E() >>> 0
    }

    function Pk() {
      return lk(jk.aQTd())
    }

    function mk() {
      return {
        __proto__: null,
        bBBc: {
          __proto__: null,
          oLtr: function(kk, ek) {
            return Kk(Error(xk(kk, ek)))
          },
          fQan: function() {
            return Kk(jk.memory)
          },
          FySm: function(kk, ek) {
            throw new Error(xk(kk, ek))
          },
          k4o9: function(kk, ek) {
            console.error(xk(kk, ek))
          },
          DYrC: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (fk.prototype[Symbol.dispose] = fk.prototype.free);
    const Mk = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((kk => jk?.__wbg_recordermodule_free(kk, 1)));

    function Kk(kk) {
      wk === Hk.length && Hk.push(Hk.length + 1);
      const ek = wk;
      return wk = Hk[ek], Hk[ek] = kk, ek
    }

    function xk(kk, ek) {
      return function(kk, ek) {
        Yk += ek, Yk >= yk && (pk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), pk.decode(), Yk = ek);
        return pk.decode(Uk().subarray(kk, kk + ek))
      }(kk >>> 0, ek)
    }
    let nk = null;

    function Uk() {
      return null !== nk && 0 !== nk.byteLength || (nk = new Uint8Array(jk.memory.buffer)), nk
    }
    let Hk = new Array(1024).fill(void 0);
    Hk.push(void 0, null, !0, !1);
    let wk = Hk.length;

    function lk(kk) {
      const ek = function(kk) {
        return Hk[kk]
      }(kk);
      return function(kk) {
        kk < 1028 || (Hk[kk] = wk, wk = kk)
      }(kk), ek
    }
    let pk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    pk.decode();
    const yk = 2146435072;
    let Yk = 0;
    const Lk = new TextEncoder;
    "encodeInto" in Lk || (Lk.encodeInto = function(kk, ek) {
      const ik = Lk.encode(kk);
      return ek.set(ik), {
        read: kk.length,
        written: ik.length
      }
    });
    let Ck, Ak, jk, sk = 0;

    function dk(kk, ek) {
      return Ak = kk, jk = kk.exports, Ck = ek, nk = null, jk.KRMU(), jk
    }

    function Vk(kk) {
      if (void 0 !== jk) return jk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ek = mk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return dk(new WebAssembly.Instance(kk, ek), kk)
    }
    async function Fk(kk) {
      if (void 0 !== jk) return jk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ek = mk();
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
      return dk(ik, Dk)
    }

    function uk() {
      jk = void 0, Ak = void 0, nk = null, Hk = new Array(1024).fill(void 0), Hk.push(void 0, null, !0, !1), wk = Hk.length
    }
    var qk = ik(2823),
      Ik = ik(6459);
    const zk = 2;
    class Qk extends Error {
      stage;
      constructor(kk, ek) {
        super((0, qk.E)(kk, ek), {
          cause: ek
        }), this.name = "BloxdRecorderWasmError", this.stage = kk
      }
    }
    let vk = null;
    const Ek = function(kk) {
      let ek = null,
        ik = null,
        Dk = null,
        fk = null;
      const Sk = async () => {
        let ik = null;
        try {
          return ik = ek ??= (0, qk.I)(kk.url(), (0, Ik.d)(kk.name)), await ik
        } catch (Dk) {
          throw ek === ik && (ek = null), kk.error((0, qk.N)(Dk), Dk)
        }
      };
      return {
        load: () => {
          if (fk) return Promise.reject(fk);
          if (ik) return ik;
          const ek = (async () => {
            const ek = await Sk();
            try {
              await kk.init(ek)
            } catch (ik) {
              throw kk.error("instantiate", ik)
            }
            return kk.bindings
          })();
          ik = ek, Dk = ek;
          const bk = () => {
            Dk === ek && (Dk = null)
          };
          return ek.then(bk, (() => {
            bk(), ik === ek && (ik = null)
          })), ek
        },
        prefetch: async () => {
          fk || ik || await Sk()
        },
        markTrapped: ek => (fk ??= kk.error("call", ek), fk),
        unload: () => {
          fk || !kk.reset || Dk || (kk.reset(), ik = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new ik.U(ik(60868)),
      init: async kk => {
        await Fk({
          module_or_path: kk
        }), vk = Pk()
      },
      bindings: Dk,
      error: (kk, ek) => new Qk(kk, ek),
      reset: () => {
        uk(), vk = null
      }
    });

    function hk() {
      return Ek.load()
    }

    function ak() {
      return Ek.prefetch()
    }

    function Wk(kk) {
      return Ek.markTrapped(kk)
    }

    function tk() {
      Ek.unload()
    }

    function Xk() {
      return vk?.buffer.byteLength ?? 0
    }
  },
  6459: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(2823);
    const fk = {
      bloxd_wasm: () => "295c5cd2cc27f19595e8622c000a7c41e60e485a07dbba504442890cbd24a8aa",
      bloxd_wasm_client: () => "416b91d2a16ae728bbeca95bbffddabc8a3a7b4a34aa66d1fe6f3b3eaf78245d",
      bloxd_wasm_workers: () => "1d7067ca0a5537d6f71a4946b88fe0f1c972f70665e18d64e4adb5d5285f18e2",
      bloxd_wasm_models: () => "867866320707b9f1ca78d6925955f07814ec1ca44420a0c7cde5311c04365e33",
      bloxd_wasm_webgpu: () => "9867480be13b90b64fe4abafb562dec31eaac1bd6f0fcc19b9bb76500d4fdc10",
      bloxd_wasm_webgl: () => "9f4c0bbaef65b13dad73d1ed314d3c8b192b18cfc30179c3542f3ca03efb48fd",
      bloxd_wasm_webgl1: () => "014507591fe08d6df7d489a19d8df0b9f54e5fadda2418f355e9f2ae9280bb00",
      bloxd_wasm_replay: () => "03359aae307812a1ddfe49365a61deb594b3a7b4fb670fa4cb1f3ee68976c741",
      bloxd_wasm_recorder: () => "0b07d8728842a235c0e7a2c268ef34837026080bff9775bbc59cb6b2df75da11",
      bloxd_wasm_anim: () => "39f782ac95bb53f159aa901360aa630676baa5e6c493e3edb2871e65cc6a978c",
      bloxd_wasm_textures: () => "ef551c40e5bb3fca12998cd42e0e4317f1aad8584357c16a578ec219fc254bcb",
      bloxd_wasm_shader_pack: () => "9f488776af56b7975c23b43dfcad2bdc3764d5025ab085512a39009b8882a5ef"
    };
    var Sk = ik(4629);

    function bk(kk) {
      const ek = Object.prototype.hasOwnProperty.call(fk, kk) ? fk[kk]() : void 0;
      if (void 0 !== ek) return {
        sha256: ek,
        onMismatch: Sk.s
      };
      throw new Dk.l(`${kk} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);