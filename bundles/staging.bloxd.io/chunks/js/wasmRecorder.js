export const id = 65;
export const ids = [65];
export const modules = {
  61707: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/bloxd_wasm_recorder_bg.7e72e45953184583c379.wasm"
  },
  61703: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      BloxdRecorderWasmError: () => Lt,
      RECORDER_MODULE_ID: () => Zt,
      loadRecorderModule: () => Gt,
      markRecorderTrapped: () => ot,
      prefetchRecorderModule: () => zt,
      recorderMemoryBytes: () => Ut,
      unloadRecorderModule: () => rt
    });
    var Ot = {};
    Vt.r(Ot), Vt.d(Ot, {
      JDt: () => qt,
      Mdt: () => Rt,
      mQ: () => Dt,
      default: () => ct,
      initSync: () => St,
      dQ: () => mt,
      MDt: () => dt,
      lDt: () => jt
    });
    class qt {
      __destroy_into_raw() {
        const tt = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Xt.unregister(this), tt
      }
      free() {
        const tt = this.__destroy_into_raw();
        ht.IUst(tt, 0)
      }
      busy() {
        return 0 !== ht.E1Ls(this.__wbg_ptr)
      }
      command(tt, et) {
        return 0 !== ht.Guh9(this.__wbg_ptr, tt, et)
      }
      EDt(tt) {
        return ht.cS97(this.__wbg_ptr, tt) >>> 0
      }
      QDt() {
        ht.wZhu(this.__wbg_ptr)
      }
      XDt() {
        return ht.NXNX(this.__wbg_ptr) >>> 0
      }
      HDt() {
        return ht.Suka(this.__wbg_ptr)
      }
      yDt() {
        return ht.hVaP(this.__wbg_ptr) >>> 0
      }
      NDt() {
        return ht.oGbH(this.__wbg_ptr) >>> 0
      }
      feed(tt) {
        return ht.sadL(this.__wbg_ptr, tt) >>> 0
      }
      constructor() {
        const tt = ht.b45H();
        return this.__wbg_ptr = tt, Xt.register(this, this.__wbg_ptr, this), this
      }
      wDt() {
        return ht.hQB8(this.__wbg_ptr) >>> 0
      }
      Jdt() {
        return ht.bACv(this.__wbg_ptr) >>> 0
      }
      jDt(tt, et, Vt) {
        return 0 !== ht.rhtg(this.__wbg_ptr, tt, et, Vt)
      }
      stage(tt) {
        return ht.xPy2(this.__wbg_ptr, tt) >>> 0
      }
      step() {
        return ht.sUxq(this.__wbg_ptr) >>> 0
      }
    }

    function Dt(tt, et) {
      const Vt = function(tt, et, Vt) {
          if (void 0 === Vt) {
            const Vt = Ct.encode(tt),
              Ot = et(Vt.length, 1) >>> 0;
            return ft().subarray(Ot, Ot + Vt.length).set(Vt), vt = Vt.length, Ot
          }
          let Ot = tt.length,
            qt = et(Ot, 1) >>> 0;
          const Dt = ft();
          let mt = 0;
          for (; mt < Ot; mt++) {
            const et = tt.charCodeAt(mt);
            if (et > 127) break;
            Dt[qt + mt] = et
          }
          if (mt !== Ot) {
            0 !== mt && (tt = tt.slice(mt)), qt = Vt(qt, Ot, Ot = mt + 3 * tt.length, 1) >>> 0;
            const et = ft().subarray(qt + mt, qt + Ot);
            mt += Ct.encodeInto(tt, et).written, qt = Vt(qt, Ot, mt, 1) >>> 0
          }
          return vt = mt, qt
        }(tt, ht.ANrD, ht.dFrd),
        Ot = vt,
        qt = ht.J4eH(Vt, Ot, et);
      if (qt[1]) throw Nt(qt[0])
    }

    function mt() {
      ht.qkWV()
    }

    function dt() {
      return ht.ryNf() >>> 0
    }

    function jt() {
      return Nt(ht.Oqs3())
    }

    function Ht() {
      return {
        __proto__: null,
        VcXL: {
          __proto__: null,
          wtqY: function(tt, et) {
            return Qt(Error(lt(tt, et)))
          },
          JZvo: function() {
            return Qt(ht.memory)
          },
          wz0O: function(tt, et) {
            throw new Error(lt(tt, et))
          },
          CQzC: function(tt, et) {
            console.error(lt(tt, et))
          },
          FrFB: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (qt.prototype[Symbol.dispose] = qt.prototype.free);
    const Xt = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((tt => ht?.__wbg_recordermodule_free(tt, 1)));

    function Qt(tt) {
      yt === wt.length && wt.push(wt.length + 1);
      const et = yt;
      return yt = wt[et], wt[et] = tt, et
    }

    function lt(tt, et) {
      return function(tt, et) {
        Jt += et, Jt >= bt && (Mt = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Mt.decode(), Jt = et);
        return Mt.decode(ft().subarray(tt, tt + et))
      }(tt >>> 0, et)
    }
    let Et = null;

    function ft() {
      return null !== Et && 0 !== Et.byteLength || (Et = new Uint8Array(ht.memory.buffer)), Et
    }
    let wt = new Array(1024).fill(void 0);
    wt.push(void 0, null, !0, !1);
    let yt = wt.length;

    function Nt(tt) {
      const et = function(tt) {
        return wt[tt]
      }(tt);
      return function(tt) {
        tt < 1028 || (wt[tt] = yt, yt = tt)
      }(tt), et
    }
    let Mt = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Mt.decode();
    const bt = 2146435072;
    let Jt = 0;
    const Ct = new TextEncoder;
    "encodeInto" in Ct || (Ct.encodeInto = function(tt, et) {
      const Vt = Ct.encode(tt);
      return et.set(Vt), {
        read: tt.length,
        written: Vt.length
      }
    });
    let ut, Kt, ht, vt = 0;

    function Wt(tt, et) {
      return Kt = tt, ht = tt.exports, ut = et, Et = null, ht.OvyT(), ht
    }

    function St(tt) {
      if (void 0 !== ht) return ht;
      void 0 !== tt && (Object.getPrototypeOf(tt) === Object.prototype ? ({
        module: tt
      } = tt) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const et = Ht();
      tt instanceof WebAssembly.Module || (tt = new WebAssembly.Module(tt));
      return Wt(new WebAssembly.Instance(tt, et), tt)
    }
    async function ct(tt) {
      if (void 0 !== ht) return ht;
      void 0 !== tt && (Object.getPrototypeOf(tt) === Object.prototype ? ({
        module_or_path: tt
      } = tt) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const et = Ht();
      ("string" === typeof tt || "function" === typeof Request && tt instanceof Request || "function" === typeof URL && tt instanceof URL) && (tt = fetch(tt));
      const {
        instance: Vt,
        module: Ot
      } = await async function(tt, et) {
        if ("function" === typeof Response && tt instanceof Response) {
          if (!tt.ok) throw new Error(`failed to fetch Wasm: ${tt.status} ${tt.statusText} fetching '${tt.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(tt, et)
          } catch (Vt) {
            if (! function(tt) {
                switch (tt) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(tt.type) || "application/wasm" === tt.headers.get("Content-Type")) throw Vt;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Vt)
          }
          const Ot = await tt.arrayBuffer();
          return await WebAssembly.instantiate(Ot, et)
        } {
          const Vt = await WebAssembly.instantiate(tt, et);
          return Vt instanceof WebAssembly.Instance ? {
            instance: Vt,
            module: tt
          } : Vt
        }
      }(await tt, et);
      return Wt(Vt, Ot)
    }

    function Rt() {
      ht = void 0, Kt = void 0, Et = null, wt = new Array(1024).fill(void 0), wt.push(void 0, null, !0, !1), yt = wt.length
    }
    var It = Vt(2965),
      Pt = Vt(6820);
    const Zt = 2;
    class Lt extends Error {
      stage;
      constructor(tt, et) {
        super((0, It.F)(tt, et), {
          cause: et
        }), this.name = "BloxdRecorderWasmError", this.stage = tt
      }
    }
    let Ft = null;
    const kt = function(tt) {
      let et = null,
        Vt = null,
        Ot = null,
        qt = null;
      const Dt = async () => {
        let Vt = null;
        try {
          return Vt = et ??= (0, It.G)(tt.url(), (0, Pt.c)(tt.name)), await Vt
        } catch (Ot) {
          throw et === Vt && (et = null), tt.error((0, It.J)(Ot), Ot)
        }
      };
      return {
        load: () => {
          if (qt) return Promise.reject(qt);
          if (Vt) return Vt;
          const et = (async () => {
            const et = await Dt();
            try {
              await tt.init(et)
            } catch (Vt) {
              throw tt.error("instantiate", Vt)
            }
            return tt.bindings
          })();
          Vt = et, Ot = et;
          const mt = () => {
            Ot === et && (Ot = null)
          };
          return et.then(mt, (() => {
            mt(), Vt === et && (Vt = null)
          })), et
        },
        prefetch: async () => {
          qt || Vt || await Dt()
        },
        markTrapped: et => (qt ??= tt.error("call", et), qt),
        unload: () => {
          qt || !tt.reset || Ot || (tt.reset(), Vt = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new Vt.U(Vt(61707)),
      init: async tt => {
        await ct({
          module_or_path: tt
        }), Ft = jt()
      },
      bindings: Ot,
      error: (tt, et) => new Lt(tt, et),
      reset: () => {
        Rt(), Ft = null
      }
    });

    function Gt() {
      return kt.load()
    }

    function zt() {
      return kt.prefetch()
    }

    function ot(tt) {
      return kt.markTrapped(tt)
    }

    function rt() {
      kt.unload()
    }

    function Ut() {
      return Ft?.buffer.byteLength ?? 0
    }
  },
  6820: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(2965);
    const qt = {
      bloxd_wasm: () => "79e619b054ae905a5b8f4bf459846802c4d04f9c338bac0e93fb2e786ccb47d7",
      bloxd_wasm_client: () => "3e9d9c92e80b558e2418153f6d2a1a0bf080851fa9da2f3eac7b5d131fa1208b",
      bloxd_wasm_workers: () => "d6180b50b2f3a41f4cc9ec709c702b403d5c3c14c69a32a117a286fccc1c4cae",
      bloxd_wasm_models: () => "b0007ea7fdbd7aac2fc56ace41940bb9419c473b2c4e22ae586bd9617e961e50",
      bloxd_wasm_webgpu: () => "38c1dcbfb4bbcbb44a23823fffa818ded30864cfa8888b894791e58c09e2b45b",
      bloxd_wasm_webgl: () => "8bc9810de446335f886bb8ec7aec0faad1cf86d215d2899bc364d09bd9e8c969",
      bloxd_wasm_webgl1: () => "67ad9c6dce37796a8d5cd66908a5f05307a9f76718f363441e62f7df779cec5f",
      bloxd_wasm_replay: () => "d4cc807eadefc7c5a5335e66f0d7d03918d890434d43b5338a42fea1e7c35a35",
      bloxd_wasm_recorder: () => "cc2e46ae4efc8d6af5a399e7423d94f6da0332d05b530d991d7a4ca5439ac99d",
      bloxd_wasm_anim: () => "47a23fc87ecc8906f1edafe7d9d71bf5aac49598c5aefc455978f2bcc55551ff",
      bloxd_wasm_textures: () => "4becc450031cb7888091452fd459d969999d55161fb0d00265048d3df8dc21dd",
      bloxd_wasm_shader_pack: () => "9e65c9a3b97efeac864ceaa9c5b11bf65594610d8ff8caa0e62e9a1c70e7968d"
    };
    var Dt = Vt(4851);

    function mt(tt) {
      const et = Object.prototype.hasOwnProperty.call(qt, tt) ? qt[tt]() : void 0;
      if (void 0 !== et) return {
        sha256: et,
        onMismatch: Dt.y
      };
      throw new Ot.g(`${tt} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);