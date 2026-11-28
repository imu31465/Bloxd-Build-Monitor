export const id = 78;
export const ids = [78];
export const modules = {
  64977: (dd, Od, md) => {
    dd.exports = md.p + "static/media/bloxd_wasm_replay_bg.e6b557b47050c2d44569.wasm"
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
  },
  64969: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      BloxdReplayWasmError: () => rd,
      loadReplayModule: () => jd,
      markReplayTrapped: () => Id,
      replayMemoryBytes: () => ed,
      unloadReplayModule: () => Dd
    });
    var Wd = {};
    md.r(Wd), md.d(Wd, {
      cXd: () => Fd,
      thd: () => ud,
      ut: () => Rd,
      default: () => sd,
      initSync: () => Sd,
      Vt: () => Xd,
      nXd: () => Kd,
      jXd: () => hd
    });
    class Fd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Qd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        Ud.xlWn(dd, 0)
      }
      lXd(dd, Od, md, Wd, Fd, Rd) {
        Ud.RFQ3(this.__wbg_ptr, dd, Od, md, Wd, Fd, Rd)
      }
      close() {
        Ud.OXZj(this.__wbg_ptr)
      }
      crop(dd, Od) {
        Ud.gvES(this.__wbg_ptr, dd, Od)
      }
      fXd(dd, Od) {
        Ud.wXV8(this.__wbg_ptr, dd, Od)
      }
      dKd() {
        return Ud.ps8v(this.__wbg_ptr) >>> 0
      }
      MXd() {
        return Ud.PXzK(this.__wbg_ptr) >>> 0
      }
      OKd() {
        return Ud.r9cK(this.__wbg_ptr) >>> 0
      }
      mKd() {
        return Ud.UBA2(this.__wbg_ptr) >>> 0
      }
      ZXd(dd, Od) {
        Ud.jyIv(this.__wbg_ptr, dd, Od)
      }
      constructor() {
        const dd = Ud.ZVcY();
        return this.__wbg_ptr = dd, Qd.register(this, this.__wbg_ptr, this), this
      }
      open() {
        Ud.NMud(this.__wbg_ptr)
      }
      iXd() {
        return Ud.MMMW(this.__wbg_ptr) >>> 0
      }
      pause() {
        Ud.sisW(this.__wbg_ptr)
      }
      play() {
        Ud.WUPd(this.__wbg_ptr)
      }
      save() {
        return Ud.jQ6n(this.__wbg_ptr) >>> 0
      }
      WKd() {
        Ud.l1s4(this.__wbg_ptr)
      }
      seek(dd, Od) {
        Ud.WWEA(this.__wbg_ptr, dd, Od)
      }
      RKd(dd) {
        Ud.Zpve(this.__wbg_ptr, dd)
      }
      CXd(dd, Od) {
        const md = function(dd, Od) {
            const md = Od(8 * dd.length, 8) >>> 0;
            return function() {
              null !== od && 0 !== od.byteLength || (od = new Float64Array(Ud.memory.buffer));
              return od
            }().set(dd, md / 8), xd = dd.length, md
          }(Od, Ud.Z2SQ),
          Wd = xd;
        Ud.lprA(this.__wbg_ptr, dd, md, Wd)
      }
      IXd(dd, Od) {
        Ud.S0TE(this.__wbg_ptr, dd, Od)
      }
      FKd(dd) {
        Ud.JZ6k(this.__wbg_ptr, dd)
      }
      stage(dd) {
        return Ud.G0bt(this.__wbg_ptr, dd) >>> 0
      }
      step(dd, Od) {
        return Ud.QGH3(this.__wbg_ptr, dd, Od) >>> 0
      }
    }

    function Rd(dd, Od) {
      const md = function(dd, Od, md) {
          if (void 0 === md) {
            const md = wd.encode(dd),
              Wd = Od(md.length, 1) >>> 0;
            return Hd().subarray(Wd, Wd + md.length).set(md), xd = md.length, Wd
          }
          let Wd = dd.length,
            Fd = Od(Wd, 1) >>> 0;
          const Rd = Hd();
          let Xd = 0;
          for (; Xd < Wd; Xd++) {
            const Od = dd.charCodeAt(Xd);
            if (Od > 127) break;
            Rd[Fd + Xd] = Od
          }
          if (Xd !== Wd) {
            0 !== Xd && (dd = dd.slice(Xd)), Fd = md(Fd, Wd, Wd = Xd + 3 * dd.length, 1) >>> 0;
            const Od = Hd().subarray(Fd + Xd, Fd + Wd);
            Xd += wd.encodeInto(dd, Od).written, Fd = md(Fd, Wd, Xd, 1) >>> 0
          }
          return xd = Xd, Fd
        }(dd, Ud.Z2SQ, Ud.sItz),
        Wd = xd,
        Fd = Ud.lMno(md, Wd, Od);
      if (Fd[1]) throw Td(Fd[0])
    }

    function Xd() {
      Ud.n9bn()
    }

    function Kd() {
      return Ud.OtJs() >>> 0
    }

    function hd() {
      return Td(Ud.fwU7())
    }

    function vd() {
      return {
        __proto__: null,
        AUuf: {
          __proto__: null,
          QyX1: function(dd, Od) {
            return td(Error(Nd(dd, Od)))
          },
          Qv3z: function() {
            return td(Ud.memory)
          },
          js3b: function(dd, Od) {
            throw new Error(Nd(dd, Od))
          },
          Ykd0: function(dd, Od) {
            console.error(Nd(dd, Od))
          },
          bXg9: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Fd.prototype[Symbol.dispose] = Fd.prototype.free);
    const Qd = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((dd => Ud?.__wbg_replaymodule_free(dd, 1)));

    function td(dd) {
      bd === yd.length && yd.push(yd.length + 1);
      const Od = bd;
      return bd = yd[Od], yd[Od] = dd, Od
    }
    let od = null;

    function Nd(dd, Od) {
      return function(dd, Od) {
        gd += Od, gd >= Yd && (pd = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), pd.decode(), gd = Od);
        return pd.decode(Hd().subarray(dd, dd + Od))
      }(dd >>> 0, Od)
    }
    let qd = null;

    function Hd() {
      return null !== qd && 0 !== qd.byteLength || (qd = new Uint8Array(Ud.memory.buffer)), qd
    }
    let yd = new Array(1024).fill(void 0);
    yd.push(void 0, null, !0, !1);
    let bd = yd.length;

    function Td(dd) {
      const Od = function(dd) {
        return yd[dd]
      }(dd);
      return function(dd) {
        dd < 1028 || (yd[dd] = bd, bd = dd)
      }(dd), Od
    }
    let pd = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    pd.decode();
    const Yd = 2146435072;
    let gd = 0;
    const wd = new TextEncoder;
    "encodeInto" in wd || (wd.encodeInto = function(dd, Od) {
      const md = wd.encode(dd);
      return Od.set(md), {
        read: dd.length,
        written: md.length
      }
    });
    let Ed, Jd, Ud, xd = 0;

    function Bd(dd, Od) {
      return Jd = dd, Ud = dd.exports, Ed = Od, od = null, qd = null, Ud.su3M(), Ud
    }

    function Sd(dd) {
      if (void 0 !== Ud) return Ud;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module: dd
      } = dd) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Od = vd();
      dd instanceof WebAssembly.Module || (dd = new WebAssembly.Module(dd));
      return Bd(new WebAssembly.Instance(dd, Od), dd)
    }
    async function sd(dd) {
      if (void 0 !== Ud) return Ud;
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
      return Bd(md, Wd)
    }

    function ud() {
      Ud = void 0, Jd = void 0, od = null, qd = null, yd = new Array(1024).fill(void 0), yd.push(void 0, null, !0, !1), bd = yd.length
    }
    var Vd = md(2425),
      Ad = md(7573);
    class rd extends Error {
      stage;
      constructor(dd, Od) {
        super((0, Vd.C)(dd, Od), {
          cause: Od
        }), this.name = "BloxdReplayWasmError", this.stage = dd
      }
    }
    let Gd = null,
      nd = null,
      Ld = Promise.resolve(),
      Pd = 0,
      zd = null,
      cd = null;

    function jd() {
      if (cd) return Promise.reject(cd);
      if (nd) return nd;
      const dd = Pd,
        Od = Ld,
        Fd = (async () => {
          let Fd;
          await Od, Gd ??= (0, Vd.F)(new md.U(md(64977)), (0, Ad.b)("bloxd_wasm_replay"));
          try {
            Fd = await Gd
          } catch (Rd) {
            throw Gd = null, new rd((0, Vd.L)(Rd), Rd)
          }
          if (dd !== Pd) throw new rd("instantiate", new Error("unloaded while loading"));
          try {
            await sd({
              module_or_path: Fd
            })
          } catch (Rd) {
            throw ud(), new rd("instantiate", Rd)
          }
          if (dd !== Pd) throw ud(), new rd("instantiate", new Error("unloaded while loading"));
          return zd = hd(), Wd
        })();
      return nd = Fd, Ld = Fd.catch((() => {})), Fd.catch((() => {
        nd === Fd && (nd = null)
      })), Fd
    }

    function Dd() {
      cd || ld()
    }

    function ed() {
      return zd?.buffer.byteLength ?? 0
    }

    function Id(dd) {
      return cd || (cd = new rd("call", dd), ld()), cd
    }

    function ld() {
      Pd++, ud(), nd = null, zd = null
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);