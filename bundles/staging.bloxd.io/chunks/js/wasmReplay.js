export const id = 66;
export const ids = [66];
export const modules = {
  61722: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/bloxd_wasm_replay_bg.e17db80e852dab1d7a3c.wasm"
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
  },
  61715: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      BloxdReplayWasmError: () => Lt,
      loadReplayModule: () => Ut,
      markReplayTrapped: () => Yt,
      replayMemoryBytes: () => it,
      unloadReplayModule: () => At
    });
    var Ot = {};
    Vt.r(Ot), Vt.d(Ot, {
      uDt: () => qt,
      Mdt: () => It,
      mQ: () => Dt,
      default: () => Rt,
      initSync: () => ct,
      dQ: () => mt,
      MDt: () => dt,
      KDt: () => jt
    });
    class qt {
      __destroy_into_raw() {
        const tt = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Xt.unregister(this), tt
      }
      free() {
        const tt = this.__destroy_into_raw();
        vt.WOJt(tt, 0)
      }
      SDt(tt, et, Vt, Ot, qt, Dt) {
        vt.uJmz(this.__wbg_ptr, tt, et, Vt, Ot, qt, Dt)
      }
      close() {
        vt.S5V6(this.__wbg_ptr)
      }
      crop(tt, et) {
        vt.gQXF(this.__wbg_ptr, tt, et)
      }
      IDt(tt, et) {
        vt.pknc(this.__wbg_ptr, tt, et)
      }
      ZDt() {
        return vt.iB01(this.__wbg_ptr) >>> 0
      }
      PDt() {
        return vt.C6IF(this.__wbg_ptr) >>> 0
      }
      LDt() {
        return vt.iIia(this.__wbg_ptr) >>> 0
      }
      FDt() {
        return vt.zIrQ(this.__wbg_ptr) >>> 0
      }
      RDt(tt, et) {
        vt.znWx(this.__wbg_ptr, tt, et)
      }
      constructor() {
        const tt = vt.SFcH();
        return this.__wbg_ptr = tt, Xt.register(this, this.__wbg_ptr, this), this
      }
      open() {
        vt.kixs(this.__wbg_ptr)
      }
      wDt() {
        return vt.uGvQ(this.__wbg_ptr) >>> 0
      }
      pause() {
        vt.xaVu(this.__wbg_ptr)
      }
      play() {
        vt.ZeBO(this.__wbg_ptr)
      }
      save() {
        return vt.Vjh6(this.__wbg_ptr) >>> 0
      }
      GDt() {
        vt.oG95(this.__wbg_ptr)
      }
      seek(tt, et) {
        vt.Ylb6(this.__wbg_ptr, tt, et)
      }
      oDt(tt) {
        vt.wYpT(this.__wbg_ptr, tt)
      }
      cDt(tt, et) {
        const Vt = function(tt, et) {
            const Vt = et(8 * tt.length, 8) >>> 0;
            return function() {
              null !== lt && 0 !== lt.byteLength || (lt = new Float64Array(vt.memory.buffer));
              return lt
            }().set(tt, Vt / 8), Wt = tt.length, Vt
          }(et, vt.yhl3),
          Ot = Wt;
        vt.UWQY(this.__wbg_ptr, tt, Vt, Ot)
      }
      WDt(tt, et) {
        vt.FgsE(this.__wbg_ptr, tt, et)
      }
      zDt(tt) {
        vt.rn5E(this.__wbg_ptr, tt)
      }
      stage(tt) {
        return vt.ChXw(this.__wbg_ptr, tt) >>> 0
      }
      step(tt, et) {
        return vt.mpEh(this.__wbg_ptr, tt, et) >>> 0
      }
    }

    function Dt(tt, et) {
      const Vt = function(tt, et, Vt) {
          if (void 0 === Vt) {
            const Vt = ut.encode(tt),
              Ot = et(Vt.length, 1) >>> 0;
            return wt().subarray(Ot, Ot + Vt.length).set(Vt), Wt = Vt.length, Ot
          }
          let Ot = tt.length,
            qt = et(Ot, 1) >>> 0;
          const Dt = wt();
          let mt = 0;
          for (; mt < Ot; mt++) {
            const et = tt.charCodeAt(mt);
            if (et > 127) break;
            Dt[qt + mt] = et
          }
          if (mt !== Ot) {
            0 !== mt && (tt = tt.slice(mt)), qt = Vt(qt, Ot, Ot = mt + 3 * tt.length, 1) >>> 0;
            const et = wt().subarray(qt + mt, qt + Ot);
            mt += ut.encodeInto(tt, et).written, qt = Vt(qt, Ot, mt, 1) >>> 0
          }
          return Wt = mt, qt
        }(tt, vt.yhl3, vt.Cp5I),
        Ot = Wt,
        qt = vt.W9vv(Vt, Ot, et);
      if (qt[1]) throw Mt(qt[0])
    }

    function mt() {
      vt.Z3IJ()
    }

    function dt() {
      return vt.GU1b() >>> 0
    }

    function jt() {
      return Mt(vt.YmDG())
    }

    function Ht() {
      return {
        __proto__: null,
        rlvK: {
          __proto__: null,
          bmhX: function(tt, et) {
            return Qt(Error(Et(tt, et)))
          },
          idJx: function() {
            return Qt(vt.memory)
          },
          RZyb: function(tt, et) {
            throw new Error(Et(tt, et))
          },
          eqXC: function(tt, et) {
            console.error(Et(tt, et))
          },
          ZEKc: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (qt.prototype[Symbol.dispose] = qt.prototype.free);
    const Xt = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((tt => vt?.__wbg_replaymodule_free(tt, 1)));

    function Qt(tt) {
      Nt === yt.length && yt.push(yt.length + 1);
      const et = Nt;
      return Nt = yt[et], yt[et] = tt, et
    }
    let lt = null;

    function Et(tt, et) {
      return function(tt, et) {
        Ct += et, Ct >= Jt && (bt = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), bt.decode(), Ct = et);
        return bt.decode(wt().subarray(tt, tt + et))
      }(tt >>> 0, et)
    }
    let ft = null;

    function wt() {
      return null !== ft && 0 !== ft.byteLength || (ft = new Uint8Array(vt.memory.buffer)), ft
    }
    let yt = new Array(1024).fill(void 0);
    yt.push(void 0, null, !0, !1);
    let Nt = yt.length;

    function Mt(tt) {
      const et = function(tt) {
        return yt[tt]
      }(tt);
      return function(tt) {
        tt < 1028 || (yt[tt] = Nt, Nt = tt)
      }(tt), et
    }
    let bt = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    bt.decode();
    const Jt = 2146435072;
    let Ct = 0;
    const ut = new TextEncoder;
    "encodeInto" in ut || (ut.encodeInto = function(tt, et) {
      const Vt = ut.encode(tt);
      return et.set(Vt), {
        read: tt.length,
        written: Vt.length
      }
    });
    let Kt, ht, vt, Wt = 0;

    function St(tt, et) {
      return ht = tt, vt = tt.exports, Kt = et, lt = null, ft = null, vt.UPNu(), vt
    }

    function ct(tt) {
      if (void 0 !== vt) return vt;
      void 0 !== tt && (Object.getPrototypeOf(tt) === Object.prototype ? ({
        module: tt
      } = tt) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const et = Ht();
      tt instanceof WebAssembly.Module || (tt = new WebAssembly.Module(tt));
      return St(new WebAssembly.Instance(tt, et), tt)
    }
    async function Rt(tt) {
      if (void 0 !== vt) return vt;
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
      return St(Vt, Ot)
    }

    function It() {
      vt = void 0, ht = void 0, lt = null, ft = null, yt = new Array(1024).fill(void 0), yt.push(void 0, null, !0, !1), Nt = yt.length
    }
    var Pt = Vt(2965),
      Zt = Vt(6820);
    class Lt extends Error {
      stage;
      constructor(tt, et) {
        super((0, Pt.F)(tt, et), {
          cause: et
        }), this.name = "BloxdReplayWasmError", this.stage = tt
      }
    }
    let Ft = null,
      kt = null,
      Gt = Promise.resolve(),
      zt = 0,
      ot = null,
      rt = null;

    function Ut() {
      if (rt) return Promise.reject(rt);
      if (kt) return kt;
      const tt = zt,
        et = Gt,
        qt = (async () => {
          let qt;
          await et, Ft ??= (0, Pt.G)(new Vt.U(Vt(61722)), (0, Zt.c)("bloxd_wasm_replay"));
          try {
            qt = await Ft
          } catch (Dt) {
            throw Ft = null, new Lt((0, Pt.J)(Dt), Dt)
          }
          if (tt !== zt) throw new Lt("instantiate", new Error("unloaded while loading"));
          try {
            await Rt({
              module_or_path: qt
            })
          } catch (Dt) {
            throw It(), new Lt("instantiate", Dt)
          }
          if (tt !== zt) throw It(), new Lt("instantiate", new Error("unloaded while loading"));
          return ot = jt(), Ot
        })();
      return kt = qt, Gt = qt.catch((() => {})), qt.catch((() => {
        kt === qt && (kt = null)
      })), qt
    }

    function At() {
      rt || Bt()
    }

    function it() {
      return ot?.buffer.byteLength ?? 0
    }

    function Yt(tt) {
      return rt || (rt = new Lt("call", tt), Bt()), rt
    }

    function Bt() {
      zt++, It(), kt = null, ot = null
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);