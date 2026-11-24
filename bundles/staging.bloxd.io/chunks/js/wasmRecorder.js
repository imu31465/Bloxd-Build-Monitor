export const id = 64;
export const ids = [64];
export const modules = {
  61549: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/bloxd_wasm_recorder_bg.d9e360ffe2f8a1dcb25f.wasm"
  },
  61543: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      BloxdRecorderWasmError: () => Xm,
      RECORDER_MODULE_ID: () => Gm,
      loadRecorderModule: () => ym,
      markRecorderTrapped: () => rm,
      prefetchRecorderModule: () => Cm,
      recorderMemoryBytes: () => lm,
      unloadRecorderModule: () => sm
    });
    var hm = {};
    fm.r(hm), fm.d(hm, {
      LAm: () => Am,
      uxm: () => Sm,
      Vp: () => am,
      default: () => bm,
      initSync: () => km,
      Ip: () => xm,
      uAm: () => wm,
      HAm: () => Dm
    });
    class Am {
      __destroy_into_raw() {
        const mm = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Rm.unregister(this), mm
      }
      free() {
        const mm = this.__destroy_into_raw();
        cm.HAtN(mm, 0)
      }
      busy() {
        return 0 !== cm.zfz0(this.__wbg_ptr)
      }
      command(mm, Tm) {
        return 0 !== cm.Y4Zq(this.__wbg_ptr, mm, Tm)
      }
      yAm(mm) {
        return cm.SBHY(this.__wbg_ptr, mm) >>> 0
      }
      PAm() {
        cm.cnyo(this.__wbg_ptr)
      }
      XAm() {
        return cm.gMin(this.__wbg_ptr) >>> 0
      }
      GAm() {
        return cm.QcDV(this.__wbg_ptr)
      }
      sAm() {
        return cm.IJee(this.__wbg_ptr) >>> 0
      }
      lAm() {
        return cm.arOn(this.__wbg_ptr) >>> 0
      }
      feed(mm) {
        return cm.oL9n(this.__wbg_ptr, mm) >>> 0
      }
      constructor() {
        const mm = cm.NYmp();
        return this.__wbg_ptr = mm, Rm.register(this, this.__wbg_ptr, this), this
      }
      rAm() {
        return cm.ZUrT(this.__wbg_ptr) >>> 0
      }
      Bxm() {
        return cm.xhuN(this.__wbg_ptr) >>> 0
      }
      NAm(mm, Tm, fm) {
        return 0 !== cm.ArRl(this.__wbg_ptr, mm, Tm, fm)
      }
      stage(mm) {
        return cm.jhom(this.__wbg_ptr, mm) >>> 0
      }
      step() {
        return cm.DVkm(this.__wbg_ptr) >>> 0
      }
    }

    function am(mm, Tm) {
      const fm = function(mm, Tm, fm) {
          if (void 0 === fm) {
            const fm = Qm.encode(mm),
              hm = Tm(fm.length, 1) >>> 0;
            return Om().subarray(hm, hm + fm.length).set(fm), zm = fm.length, hm
          }
          let hm = mm.length,
            Am = Tm(hm, 1) >>> 0;
          const am = Om();
          let xm = 0;
          for (; xm < hm; xm++) {
            const Tm = mm.charCodeAt(xm);
            if (Tm > 127) break;
            am[Am + xm] = Tm
          }
          if (xm !== hm) {
            0 !== xm && (mm = mm.slice(xm)), Am = fm(Am, hm, hm = xm + 3 * mm.length, 1) >>> 0;
            const Tm = Om().subarray(Am + xm, Am + hm);
            xm += Qm.encodeInto(mm, Tm).written, Am = fm(Am, hm, xm, 1) >>> 0
          }
          return zm = xm, Am
        }(mm, cm.m9oT, cm.xZ81),
        hm = zm,
        Am = cm.a44f(fm, hm, Tm);
      if (Am[1]) throw jm(Am[0])
    }

    function xm() {
      cm.sUDP()
    }

    function wm() {
      return cm.R9Ja() >>> 0
    }

    function Dm() {
      return jm(cm.wh6d())
    }

    function im() {
      return {
        __proto__: null,
        bjwC: {
          __proto__: null,
          lWgF: function(mm, Tm) {
            return pm(Error(Em(mm, Tm)))
          },
          wz45: function() {
            return pm(cm.memory)
          },
          ww13: function(mm, Tm) {
            throw new Error(Em(mm, Tm))
          },
          WrOw: function(mm, Tm) {
            console.error(Em(mm, Tm))
          },
          ts7M: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Am.prototype[Symbol.dispose] = Am.prototype.free);
    const Rm = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((mm => cm?.__wbg_recordermodule_free(mm, 1)));

    function pm(mm) {
      qm === Ym.length && Ym.push(Ym.length + 1);
      const Tm = qm;
      return qm = Ym[Tm], Ym[Tm] = mm, Tm
    }

    function Em(mm, Tm) {
      return function(mm, Tm) {
        Km += Tm, Km >= Im && (Vm = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Vm.decode(), Km = Tm);
        return Vm.decode(Om().subarray(mm, mm + Tm))
      }(mm >>> 0, Tm)
    }
    let om = null;

    function Om() {
      return null !== om && 0 !== om.byteLength || (om = new Uint8Array(cm.memory.buffer)), om
    }
    let Ym = new Array(1024).fill(void 0);
    Ym.push(void 0, null, !0, !1);
    let qm = Ym.length;

    function jm(mm) {
      const Tm = function(mm) {
        return Ym[mm]
      }(mm);
      return function(mm) {
        mm < 1028 || (Ym[mm] = qm, qm = mm)
      }(mm), Tm
    }
    let Vm = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Vm.decode();
    const Im = 2146435072;
    let Km = 0;
    const Qm = new TextEncoder;
    "encodeInto" in Qm || (Qm.encodeInto = function(mm, Tm) {
      const fm = Qm.encode(mm);
      return Tm.set(fm), {
        read: mm.length,
        written: fm.length
      }
    });
    let nm, Jm, cm, zm = 0;

    function Zm(mm, Tm) {
      return Jm = mm, cm = mm.exports, nm = Tm, om = null, cm.UQE6(), cm
    }

    function km(mm) {
      if (void 0 !== cm) return cm;
      void 0 !== mm && (Object.getPrototypeOf(mm) === Object.prototype ? ({
        module: mm
      } = mm) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Tm = im();
      mm instanceof WebAssembly.Module || (mm = new WebAssembly.Module(mm));
      return Zm(new WebAssembly.Instance(mm, Tm), mm)
    }
    async function bm(mm) {
      if (void 0 !== cm) return cm;
      void 0 !== mm && (Object.getPrototypeOf(mm) === Object.prototype ? ({
        module_or_path: mm
      } = mm) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Tm = im();
      ("string" === typeof mm || "function" === typeof Request && mm instanceof Request || "function" === typeof URL && mm instanceof URL) && (mm = fetch(mm));
      const {
        instance: fm,
        module: hm
      } = await async function(mm, Tm) {
        if ("function" === typeof Response && mm instanceof Response) {
          if (!mm.ok) throw new Error(`failed to fetch Wasm: ${mm.status} ${mm.statusText} fetching '${mm.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(mm, Tm)
          } catch (fm) {
            if (! function(mm) {
                switch (mm) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(mm.type) || "application/wasm" === mm.headers.get("Content-Type")) throw fm;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", fm)
          }
          const hm = await mm.arrayBuffer();
          return await WebAssembly.instantiate(hm, Tm)
        } {
          const fm = await WebAssembly.instantiate(mm, Tm);
          return fm instanceof WebAssembly.Instance ? {
            instance: fm,
            module: mm
          } : fm
        }
      }(await mm, Tm);
      return Zm(fm, hm)
    }

    function Sm() {
      cm = void 0, Jm = void 0, om = null, Ym = new Array(1024).fill(void 0), Ym.push(void 0, null, !0, !1), qm = Ym.length
    }
    var em = fm(2876),
      Nm = fm(6571);
    const Gm = 2;
    class Xm extends Error {
      stage;
      constructor(mm, Tm) {
        super((0, em.C)(mm, Tm), {
          cause: Tm
        }), this.name = "BloxdRecorderWasmError", this.stage = mm
      }
    }
    let Pm = null;
    const Hm = function(mm) {
      let Tm = null,
        fm = null,
        hm = null,
        Am = null;
      const am = async () => {
        let fm = null;
        try {
          return fm = Tm ??= (0, em.G)(mm.url(), (0, Nm.c)(mm.name)), await fm
        } catch (hm) {
          throw Tm === fm && (Tm = null), mm.error((0, em.M)(hm), hm)
        }
      };
      return {
        load: () => {
          if (Am) return Promise.reject(Am);
          if (fm) return fm;
          const Tm = (async () => {
            const Tm = await am();
            try {
              await mm.init(Tm)
            } catch (fm) {
              throw mm.error("instantiate", fm)
            }
            return mm.bindings
          })();
          fm = Tm, hm = Tm;
          const xm = () => {
            hm === Tm && (hm = null)
          };
          return Tm.then(xm, (() => {
            xm(), fm === Tm && (fm = null)
          })), Tm
        },
        prefetch: async () => {
          Am || fm || await am()
        },
        markTrapped: Tm => (Am ??= mm.error("call", Tm), Am),
        unload: () => {
          Am || !mm.reset || hm || (mm.reset(), fm = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new fm.U(fm(61549)),
      init: async mm => {
        await bm({
          module_or_path: mm
        }), Pm = Dm()
      },
      bindings: hm,
      error: (mm, Tm) => new Xm(mm, Tm),
      reset: () => {
        Sm(), Pm = null
      }
    });

    function ym() {
      return Hm.load()
    }

    function Cm() {
      return Hm.prefetch()
    }

    function rm(mm) {
      return Hm.markTrapped(mm)
    }

    function sm() {
      Hm.unload()
    }

    function lm() {
      return Pm?.buffer.byteLength ?? 0
    }
  },
  6571: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(2876);
    const Am = {
      bloxd_wasm: () => "613a21bc0b0d6795610be638608f6f896b7ac6493e7e1f81f22f78c10c130b20",
      bloxd_wasm_client: () => "f500bfdaa7b954839685358849e4855ad2aa63607292f3b2cdd2ad1665214c7a",
      bloxd_wasm_workers: () => "7dd9b485307e91e305e2fb397554b566560181e06f5a5b081a6f1c61898558ff",
      bloxd_wasm_models: () => "9693b1d78529633a0838c883241b819b5bd68812b4c6423ce62c95631b8c3415",
      bloxd_wasm_webgpu: () => "de2f06fb711bba52682b2f003e06cf94cb10abdd72e4193fc794f84415757080",
      bloxd_wasm_webgl: () => "7e9ad7e1a934a29dd92aaf8ef4a10e072c55d9316e0d80238bf66fd7535f3ddf",
      bloxd_wasm_webgl1: () => "700b62082439f7ae7c202d3ac83cf13cabe29e7e952f1a87e7cd44b1133e3b9f",
      bloxd_wasm_replay: () => "5341c2187f01707d5afbab140cf74533d8b2076e23e63e9a772320066cfa1513",
      bloxd_wasm_recorder: () => "c80280c22c0f6493e551f45d0599c93183458a244f322d6edf6273a3ebf0b864",
      bloxd_wasm_anim: () => "44db7f8e6b21308f32edc10720aadbb617cfd625a2a950f110c26990904d5bc8",
      bloxd_wasm_textures: () => "273e6f1c6bf63d7b0982fe740c5c8b042be9257ae55fae593545099e99bf76a8",
      bloxd_wasm_shader_pack: () => "2cca231ad5b1288911ab113a53e7191b13627c0fdb4147c6e779bb6b366f71af"
    };
    var am = fm(4632);

    function xm(mm) {
      const Tm = Object.prototype.hasOwnProperty.call(Am, mm) ? Am[mm]() : void 0;
      if (void 0 !== Tm) return {
        sha256: Tm,
        onMismatch: am.x
      };
      throw new hm.j(`${mm} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);