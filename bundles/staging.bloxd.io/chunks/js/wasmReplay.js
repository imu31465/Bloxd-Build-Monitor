export const id = 65;
export const ids = [65];
export const modules = {
  61567: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/bloxd_wasm_replay_bg.c0b2c7cff4c4b8e110c0.wasm"
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
  },
  61558: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      BloxdReplayWasmError: () => Xm,
      loadReplayModule: () => lm,
      markReplayTrapped: () => Bm,
      replayMemoryBytes: () => um,
      unloadReplayModule: () => Mm
    });
    var hm = {};
    fm.r(hm), fm.d(hm, {
      tAm: () => Am,
      uxm: () => em,
      Vp: () => am,
      default: () => Sm,
      initSync: () => bm,
      Ip: () => xm,
      uAm: () => wm,
      UAm: () => Dm
    });
    class Am {
      __destroy_into_raw() {
        const mm = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Rm.unregister(this), mm
      }
      free() {
        const mm = this.__destroy_into_raw();
        zm.NIdU(mm, 0)
      }
      FAm(mm, Tm, fm, hm, Am, am) {
        zm.sw7i(this.__wbg_ptr, mm, Tm, fm, hm, Am, am)
      }
      close() {
        zm.xX30(this.__wbg_ptr)
      }
      crop(mm, Tm) {
        zm.oWsX(this.__wbg_ptr, mm, Tm)
      }
      fam(mm, Tm) {
        zm.Huad(this.__wbg_ptr, mm, Tm)
      }
      Aam() {
        return zm.QOJx(this.__wbg_ptr) >>> 0
      }
      ham() {
        return zm.lk0I(this.__wbg_ptr) >>> 0
      }
      aam() {
        return zm.VKTB(this.__wbg_ptr) >>> 0
      }
      xam() {
        return zm.tchx(this.__wbg_ptr) >>> 0
      }
      Tam(mm, Tm) {
        zm.buql(this.__wbg_ptr, mm, Tm)
      }
      constructor() {
        const mm = zm.sSyk();
        return this.__wbg_ptr = mm, Rm.register(this, this.__wbg_ptr, this), this
      }
      open() {
        zm.Bma7(this.__wbg_ptr)
      }
      rAm() {
        return zm.zFHf(this.__wbg_ptr) >>> 0
      }
      pause() {
        zm.BQcC(this.__wbg_ptr)
      }
      play() {
        zm.ph6F(this.__wbg_ptr)
      }
      save() {
        return zm.DZEr(this.__wbg_ptr) >>> 0
      }
      wam() {
        zm.rgbm(this.__wbg_ptr)
      }
      seek(mm, Tm) {
        zm.KnBA(this.__wbg_ptr, mm, Tm)
      }
      iam(mm) {
        zm.A1z6(this.__wbg_ptr, mm)
      }
      mam(mm, Tm) {
        const fm = function(mm, Tm) {
            const fm = Tm(8 * mm.length, 8) >>> 0;
            return function() {
              null !== Em && 0 !== Em.byteLength || (Em = new Float64Array(zm.memory.buffer));
              return Em
            }().set(mm, fm / 8), Zm = mm.length, fm
          }(Tm, zm.EXAP),
          hm = Zm;
        zm.tiIi(this.__wbg_ptr, mm, fm, hm)
      }
      WAm(mm, Tm) {
        zm.S3M0(this.__wbg_ptr, mm, Tm)
      }
      Dam(mm) {
        zm.Hul8(this.__wbg_ptr, mm)
      }
      stage(mm) {
        return zm.LwLW(this.__wbg_ptr, mm) >>> 0
      }
      step(mm, Tm) {
        return zm.Pp6J(this.__wbg_ptr, mm, Tm) >>> 0
      }
    }

    function am(mm, Tm) {
      const fm = function(mm, Tm, fm) {
          if (void 0 === fm) {
            const fm = nm.encode(mm),
              hm = Tm(fm.length, 1) >>> 0;
            return Ym().subarray(hm, hm + fm.length).set(fm), Zm = fm.length, hm
          }
          let hm = mm.length,
            Am = Tm(hm, 1) >>> 0;
          const am = Ym();
          let xm = 0;
          for (; xm < hm; xm++) {
            const Tm = mm.charCodeAt(xm);
            if (Tm > 127) break;
            am[Am + xm] = Tm
          }
          if (xm !== hm) {
            0 !== xm && (mm = mm.slice(xm)), Am = fm(Am, hm, hm = xm + 3 * mm.length, 1) >>> 0;
            const Tm = Ym().subarray(Am + xm, Am + hm);
            xm += nm.encodeInto(mm, Tm).written, Am = fm(Am, hm, xm, 1) >>> 0
          }
          return Zm = xm, Am
        }(mm, zm.EXAP, zm.htnH),
        hm = Zm,
        Am = zm.xQvP(fm, hm, Tm);
      if (Am[1]) throw Vm(Am[0])
    }

    function xm() {
      zm.itNG()
    }

    function wm() {
      return zm.rxdL() >>> 0
    }

    function Dm() {
      return Vm(zm.Bm2U())
    }

    function im() {
      return {
        __proto__: null,
        sCda: {
          __proto__: null,
          sEBr: function(mm, Tm) {
            return pm(Error(om(mm, Tm)))
          },
          AYdd: function() {
            return pm(zm.memory)
          },
          Ajcf: function(mm, Tm) {
            throw new Error(om(mm, Tm))
          },
          UdY5: function(mm, Tm) {
            console.error(om(mm, Tm))
          },
          DuWO: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Am.prototype[Symbol.dispose] = Am.prototype.free);
    const Rm = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((mm => zm?.__wbg_replaymodule_free(mm, 1)));

    function pm(mm) {
      jm === qm.length && qm.push(qm.length + 1);
      const Tm = jm;
      return jm = qm[Tm], qm[Tm] = mm, Tm
    }
    let Em = null;

    function om(mm, Tm) {
      return function(mm, Tm) {
        Qm += Tm, Qm >= Km && (Im = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Im.decode(), Qm = Tm);
        return Im.decode(Ym().subarray(mm, mm + Tm))
      }(mm >>> 0, Tm)
    }
    let Om = null;

    function Ym() {
      return null !== Om && 0 !== Om.byteLength || (Om = new Uint8Array(zm.memory.buffer)), Om
    }
    let qm = new Array(1024).fill(void 0);
    qm.push(void 0, null, !0, !1);
    let jm = qm.length;

    function Vm(mm) {
      const Tm = function(mm) {
        return qm[mm]
      }(mm);
      return function(mm) {
        mm < 1028 || (qm[mm] = jm, jm = mm)
      }(mm), Tm
    }
    let Im = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Im.decode();
    const Km = 2146435072;
    let Qm = 0;
    const nm = new TextEncoder;
    "encodeInto" in nm || (nm.encodeInto = function(mm, Tm) {
      const fm = nm.encode(mm);
      return Tm.set(fm), {
        read: mm.length,
        written: fm.length
      }
    });
    let Jm, cm, zm, Zm = 0;

    function km(mm, Tm) {
      return cm = mm, zm = mm.exports, Jm = Tm, Em = null, Om = null, zm.lcM1(), zm
    }

    function bm(mm) {
      if (void 0 !== zm) return zm;
      void 0 !== mm && (Object.getPrototypeOf(mm) === Object.prototype ? ({
        module: mm
      } = mm) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Tm = im();
      mm instanceof WebAssembly.Module || (mm = new WebAssembly.Module(mm));
      return km(new WebAssembly.Instance(mm, Tm), mm)
    }
    async function Sm(mm) {
      if (void 0 !== zm) return zm;
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
      return km(fm, hm)
    }

    function em() {
      zm = void 0, cm = void 0, Em = null, Om = null, qm = new Array(1024).fill(void 0), qm.push(void 0, null, !0, !1), jm = qm.length
    }
    var Nm = fm(2876),
      Gm = fm(6571);
    class Xm extends Error {
      stage;
      constructor(mm, Tm) {
        super((0, Nm.C)(mm, Tm), {
          cause: Tm
        }), this.name = "BloxdReplayWasmError", this.stage = mm
      }
    }
    let Pm = null,
      Hm = null,
      ym = Promise.resolve(),
      Cm = 0,
      rm = null,
      sm = null;

    function lm() {
      if (sm) return Promise.reject(sm);
      if (Hm) return Hm;
      const mm = Cm,
        Tm = ym,
        Am = (async () => {
          let Am;
          await Tm, Pm ??= (0, Nm.G)(new fm.U(fm(61567)), (0, Gm.c)("bloxd_wasm_replay"));
          try {
            Am = await Pm
          } catch (am) {
            throw Pm = null, new Xm((0, Nm.M)(am), am)
          }
          if (mm !== Cm) throw new Xm("instantiate", new Error("unloaded while loading"));
          try {
            await Sm({
              module_or_path: Am
            })
          } catch (am) {
            throw em(), new Xm("instantiate", am)
          }
          if (mm !== Cm) throw em(), new Xm("instantiate", new Error("unloaded while loading"));
          return rm = Dm(), hm
        })();
      return Hm = Am, ym = Am.catch((() => {})), Am.catch((() => {
        Hm === Am && (Hm = null)
      })), Am
    }

    function Mm() {
      sm || Lm()
    }

    function um() {
      return rm?.buffer.byteLength ?? 0
    }

    function Bm(mm) {
      return sm || (sm = new Xm("call", mm), Lm()), sm
    }

    function Lm() {
      Cm++, em(), Hm = null, rm = null
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);