export const id = 77;
export const ids = [77];
export const modules = {
  64966: (dd, Od, md) => {
    dd.exports = md.p + "static/media/bloxd_wasm_recorder_bg.57800feae4e04a63a6b7.wasm"
  },
  64962: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      BloxdRecorderWasmError: () => rd,
      RECORDER_MODULE_ID: () => Ad,
      loadRecorderModule: () => Ld,
      markRecorderTrapped: () => zd,
      prefetchRecorderModule: () => Pd,
      recorderMemoryBytes: () => jd,
      unloadRecorderModule: () => cd
    });
    var Wd = {};
    md.r(Wd), md.d(Wd, {
      PXd: () => Fd,
      thd: () => sd,
      ut: () => Rd,
      default: () => Sd,
      initSync: () => Bd,
      Vt: () => Xd,
      nXd: () => Kd,
      sXd: () => hd
    });
    class Fd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Qd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        Jd.tIhL(dd, 0)
      }
      busy() {
        return 0 !== Jd.sva4(this.__wbg_ptr)
      }
      command(dd, Od) {
        return 0 !== Jd.BAx9(this.__wbg_ptr, dd, Od)
      }
      uXd(dd) {
        return Jd.pyoB(this.__wbg_ptr, dd) >>> 0
      }
      SXd() {
        Jd.atIh(this.__wbg_ptr)
      }
      BXd() {
        return Jd.Ltrf(this.__wbg_ptr) >>> 0
      }
      xXd() {
        return Jd.ligO(this.__wbg_ptr)
      }
      AXd() {
        return Jd.dqYE(this.__wbg_ptr) >>> 0
      }
      rXd() {
        return Jd.TkaQ(this.__wbg_ptr) >>> 0
      }
      feed(dd) {
        return Jd.QfZu(this.__wbg_ptr, dd) >>> 0
      }
      constructor() {
        const dd = Jd.swyT();
        return this.__wbg_ptr = dd, Qd.register(this, this.__wbg_ptr, this), this
      }
      iXd() {
        return Jd.MnWT(this.__wbg_ptr) >>> 0
      }
      ohd() {
        return Jd.j4Q9(this.__wbg_ptr) >>> 0
      }
      UXd(dd, Od, md) {
        return 0 !== Jd.OQD0(this.__wbg_ptr, dd, Od, md)
      }
      stage(dd) {
        return Jd.nlrL(this.__wbg_ptr, dd) >>> 0
      }
      step() {
        return Jd.OpB2(this.__wbg_ptr) >>> 0
      }
    }

    function Rd(dd, Od) {
      const md = function(dd, Od, md) {
          if (void 0 === md) {
            const md = gd.encode(dd),
              Wd = Od(md.length, 1) >>> 0;
            return qd().subarray(Wd, Wd + md.length).set(md), Ud = md.length, Wd
          }
          let Wd = dd.length,
            Fd = Od(Wd, 1) >>> 0;
          const Rd = qd();
          let Xd = 0;
          for (; Xd < Wd; Xd++) {
            const Od = dd.charCodeAt(Xd);
            if (Od > 127) break;
            Rd[Fd + Xd] = Od
          }
          if (Xd !== Wd) {
            0 !== Xd && (dd = dd.slice(Xd)), Fd = md(Fd, Wd, Wd = Xd + 3 * dd.length, 1) >>> 0;
            const Od = qd().subarray(Fd + Xd, Fd + Wd);
            Xd += gd.encodeInto(dd, Od).written, Fd = md(Fd, Wd, Xd, 1) >>> 0
          }
          return Ud = Xd, Fd
        }(dd, Jd.OY5q, Jd.h7Dx),
        Wd = Ud,
        Fd = Jd.GG6L(md, Wd, Od);
      if (Fd[1]) throw bd(Fd[0])
    }

    function Xd() {
      Jd.t0bL()
    }

    function Kd() {
      return Jd.Re9A() >>> 0
    }

    function hd() {
      return bd(Jd.yptR())
    }

    function vd() {
      return {
        __proto__: null,
        tMWP: {
          __proto__: null,
          sP2y: function(dd, Od) {
            return td(Error(od(dd, Od)))
          },
          mwY5: function() {
            return td(Jd.memory)
          },
          Y9GI: function(dd, Od) {
            throw new Error(od(dd, Od))
          },
          n1tJ: function(dd, Od) {
            console.error(od(dd, Od))
          },
          jJ6M: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Fd.prototype[Symbol.dispose] = Fd.prototype.free);
    const Qd = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((dd => Jd?.__wbg_recordermodule_free(dd, 1)));

    function td(dd) {
      yd === Hd.length && Hd.push(Hd.length + 1);
      const Od = yd;
      return yd = Hd[Od], Hd[Od] = dd, Od
    }

    function od(dd, Od) {
      return function(dd, Od) {
        Yd += Od, Yd >= pd && (Td = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Td.decode(), Yd = Od);
        return Td.decode(qd().subarray(dd, dd + Od))
      }(dd >>> 0, Od)
    }
    let Nd = null;

    function qd() {
      return null !== Nd && 0 !== Nd.byteLength || (Nd = new Uint8Array(Jd.memory.buffer)), Nd
    }
    let Hd = new Array(1024).fill(void 0);
    Hd.push(void 0, null, !0, !1);
    let yd = Hd.length;

    function bd(dd) {
      const Od = function(dd) {
        return Hd[dd]
      }(dd);
      return function(dd) {
        dd < 1028 || (Hd[dd] = yd, yd = dd)
      }(dd), Od
    }
    let Td = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Td.decode();
    const pd = 2146435072;
    let Yd = 0;
    const gd = new TextEncoder;
    "encodeInto" in gd || (gd.encodeInto = function(dd, Od) {
      const md = gd.encode(dd);
      return Od.set(md), {
        read: dd.length,
        written: md.length
      }
    });
    let wd, Ed, Jd, Ud = 0;

    function xd(dd, Od) {
      return Ed = dd, Jd = dd.exports, wd = Od, Nd = null, Jd.gvuS(), Jd
    }

    function Bd(dd) {
      if (void 0 !== Jd) return Jd;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module: dd
      } = dd) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Od = vd();
      dd instanceof WebAssembly.Module || (dd = new WebAssembly.Module(dd));
      return xd(new WebAssembly.Instance(dd, Od), dd)
    }
    async function Sd(dd) {
      if (void 0 !== Jd) return Jd;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module_or_path: dd
      } = dd) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Od = vd();
      ("string" === typeof dd || "function" === typeof Request && dd instanceof Request || "function" === typeof URL && dd instanceof URL) && (dd = fetch(dd));
      const {
        instance: md,
        module: Wd
      } = await async function(dd, Od) {
        if ("function" === typeof Response && dd instanceof Response) {
          if (!dd.ok) throw new Error(`failed to fetch Wasm: ${dd.status} ${dd.statusText} fetching '${dd.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(dd, Od)
          } catch (md) {
            if (! function(dd) {
                switch (dd) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(dd.type) || "application/wasm" === dd.headers.get("Content-Type")) throw md;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", md)
          }
          const Wd = await dd.arrayBuffer();
          return await WebAssembly.instantiate(Wd, Od)
        } {
          const md = await WebAssembly.instantiate(dd, Od);
          return md instanceof WebAssembly.Instance ? {
            instance: md,
            module: dd
          } : md
        }
      }(await dd, Od);
      return xd(md, Wd)
    }

    function sd() {
      Jd = void 0, Ed = void 0, Nd = null, Hd = new Array(1024).fill(void 0), Hd.push(void 0, null, !0, !1), yd = Hd.length
    }
    var ud = md(2425),
      Vd = md(7573);
    const Ad = 2;
    class rd extends Error {
      stage;
      constructor(dd, Od) {
        super((0, ud.C)(dd, Od), {
          cause: Od
        }), this.name = "BloxdRecorderWasmError", this.stage = dd
      }
    }
    let Gd = null;
    const nd = function(dd) {
      let Od = null,
        md = null,
        Wd = null,
        Fd = null;
      const Rd = async () => {
        let md = null;
        try {
          return md = Od ??= (0, ud.F)(dd.url(), (0, Vd.b)(dd.name)), await md
        } catch (Wd) {
          throw Od === md && (Od = null), dd.error((0, ud.L)(Wd), Wd)
        }
      };
      return {
        load: () => {
          if (Fd) return Promise.reject(Fd);
          if (md) return md;
          const Od = (async () => {
            const Od = await Rd();
            try {
              await dd.init(Od)
            } catch (md) {
              throw dd.error("instantiate", md)
            }
            return dd.bindings
          })();
          md = Od, Wd = Od;
          const Xd = () => {
            Wd === Od && (Wd = null)
          };
          return Od.then(Xd, (() => {
            Xd(), md === Od && (md = null)
          })), Od
        },
        prefetch: async () => {
          Fd || md || await Rd()
        },
        markTrapped: Od => (Fd ??= dd.error("call", Od), Fd),
        unload: () => {
          Fd || !dd.reset || Wd || (dd.reset(), md = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new md.U(md(64966)),
      init: async dd => {
        await Sd({
          module_or_path: dd
        }), Gd = hd()
      },
      bindings: Wd,
      error: (dd, Od) => new rd(dd, Od),
      reset: () => {
        sd(), Gd = null
      }
    });

    function Ld() {
      return nd.load()
    }

    function Pd() {
      return nd.prefetch()
    }

    function zd(dd) {
      return nd.markTrapped(dd)
    }

    function cd() {
      nd.unload()
    }

    function jd() {
      return Gd?.buffer.byteLength ?? 0
    }
  },
  7573: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(2425);
    const Fd = {
      bloxd_wasm: () => "39543e4ba6a42e25a6e9bcb2e34f530578c4ebc01c5184958515a8ca76d6b0a5",
      bloxd_wasm_client: () => "b20a5dcdeba23853bd4aefb57c26d920dc0384ea18796517bc3a29925c6ad1c2",
      bloxd_wasm_workers: () => "fffff5148e36b0bbe9b1ac57b88354ed0a2be82b12546b685c54f8d890ba1c25",
      bloxd_wasm_models: () => "fea8372a66374bbfe5d995df968eb0d6e1d729788522378129be977ab279b0f5",
      bloxd_wasm_webgpu: () => "d81a74bd0196aa7197896faff29d91d6cd561d3ccf553f86e40533cf05f94d54",
      bloxd_wasm_webgl: () => "c6b230e8190fad497320f1c2b3194c840fc84e84d2930037ce26bc2f7ffa73df",
      bloxd_wasm_webgl1: () => "53a0d02bf121cebe98d2e57ee9aff001fef877975331d07c3144e6a509444da7",
      bloxd_wasm_replay: () => "6fdc64e1f63d992be19559282023d659e1e193da38e2253f4b228bb2cf163a79",
      bloxd_wasm_recorder: () => "6c20921e31a8867aca13baae406b57fd8365b0ce30ef2ea114524fe3b407a11b",
      bloxd_wasm_anim: () => "40ced071a7948ecc9a2ebcc6399db3dd2db0b6c806b64d60ae581d410556b61e",
      bloxd_wasm_textures: () => "7d3511b9add4c1e220dc305c472d29d9de6a5e5dc0d699b160381f10cb169ea5",
      bloxd_wasm_shader_pack: () => "c6afc4ff72171aa4edf7f5ee6a093af43505cb0aad9dabc79f64bdf94eadada3"
    };
    var Rd = md(5426);

    function Xd(dd) {
      const Od = Object.prototype.hasOwnProperty.call(Fd, dd) ? Fd[dd]() : void 0;
      if (void 0 !== Od) return {
        sha256: Od,
        onMismatch: Rd.v
      };
      throw new Wd.h(`${dd} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);