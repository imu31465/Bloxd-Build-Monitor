export const id = 5;
export const ids = [5];
export const modules = {
  42688: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/bloxd_wasm_anim_bg.c22fda982f3d0ea7fdf0.wasm"
  },
  42683: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      BloxdAnimWasmError: () => Pm,
      compileAnimationPackInWasm: () => rm
    });
    var hm = {};

    function Am(mm, Tm, fm, hm, Am, am) {
      const xm = Vm(mm, km.o3qu),
        wm = bm,
        Dm = Vm(Tm, km.o3qu),
        im = bm,
        Rm = Vm(fm, km.o3qu),
        pm = bm,
        Em = Vm(hm, km.o3qu),
        Om = bm,
        Ym = Vm(Am, km.o3qu),
        qm = bm;
      var Im = jm(am) ? 0 : function(mm, Tm) {
          const fm = Tm(1 * mm.length, 1) >>> 0;
          return om().set(mm, fm / 1), bm = mm.length, fm
        }(am, km.o3qu),
        Qm = bm;
      const nm = km.LsxH(xm, wm, Dm, im, Rm, pm, Em, Om, Ym, qm, Im, Qm);
      if (nm[3]) throw Km(nm[2]);
      var Jm, cm, zm = (Jm = nm[0], cm = nm[1], Jm >>>= 0, om().subarray(Jm / 1, Jm / 1 + cm)).slice();
      return km.Vv2C(nm[0], 1 * nm[1], 1), zm
    }

    function am(mm, Tm) {
      const fm = Im(mm, km.o3qu, km.GYkl),
        hm = bm,
        Am = km.sxKc(fm, hm, Tm);
      if (Am[1]) throw Km(Am[0])
    }

    function xm() {
      km.GJzE()
    }

    function wm() {
      return {
        __proto__: null,
        w3FG: {
          __proto__: null,
          skOo: function(mm, Tm) {
            return Dm(Error(pm(mm, Tm)))
          },
          q9qt: function(mm, Tm) {
            const fm = Om(Tm),
              hm = "string" === typeof fm ? fm : void 0;
            var Am = jm(hm) ? 0 : Im(hm, km.o3qu, km.GYkl),
              am = bm;
            Rm().setInt32(mm + 4, am, !0), Rm().setInt32(mm + 0, Am, !0)
          },
          vFqX: function(mm, Tm) {
            throw new Error(pm(mm, Tm))
          },
          eUtd: function(mm, Tm) {
            console.error(pm(mm, Tm))
          },
          nEhu: function(mm) {
            Km(mm)
          }
        }
      }
    }

    function Dm(mm) {
      qm === Ym.length && Ym.push(Ym.length + 1);
      const Tm = qm;
      return qm = Ym[Tm], Ym[Tm] = mm, Tm
    }
    fm.r(hm), fm.d(hm, {
      rxm: () => Am,
      Vp: () => am,
      default: () => Nm,
      initSync: () => em,
      Ip: () => xm
    });
    let im = null;

    function Rm() {
      return null !== im && im.buffer === km.memory.buffer || (im = new DataView(km.memory.buffer)), im
    }

    function pm(mm, Tm) {
      return function(mm, Tm) {
        Jm += Tm, Jm >= nm && (Qm = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Qm.decode(), Jm = Tm);
        return Qm.decode(om().subarray(mm, mm + Tm))
      }(mm >>> 0, Tm)
    }
    let Em = null;

    function om() {
      return null !== Em && 0 !== Em.byteLength || (Em = new Uint8Array(km.memory.buffer)), Em
    }

    function Om(mm) {
      return Ym[mm]
    }
    let Ym = new Array(1024).fill(void 0);
    Ym.push(void 0, null, !0, !1);
    let qm = Ym.length;

    function jm(mm) {
      return void 0 === mm || null === mm
    }

    function Vm(mm, Tm) {
      const fm = Tm(4 * mm.length, 4) >>> 0,
        hm = Rm();
      for (let Am = 0; Am < mm.length; Am++) hm.setUint32(fm + 4 * Am, Dm(mm[Am]), !0);
      return bm = mm.length, fm
    }

    function Im(mm, Tm, fm) {
      if (void 0 === fm) {
        const fm = cm.encode(mm),
          hm = Tm(fm.length, 1) >>> 0;
        return om().subarray(hm, hm + fm.length).set(fm), bm = fm.length, hm
      }
      let hm = mm.length,
        Am = Tm(hm, 1) >>> 0;
      const am = om();
      let xm = 0;
      for (; xm < hm; xm++) {
        const Tm = mm.charCodeAt(xm);
        if (Tm > 127) break;
        am[Am + xm] = Tm
      }
      if (xm !== hm) {
        0 !== xm && (mm = mm.slice(xm)), Am = fm(Am, hm, hm = xm + 3 * mm.length, 1) >>> 0;
        const Tm = om().subarray(Am + xm, Am + hm);
        xm += cm.encodeInto(mm, Tm).written, Am = fm(Am, hm, xm, 1) >>> 0
      }
      return bm = xm, Am
    }

    function Km(mm) {
      const Tm = Om(mm);
      return function(mm) {
        mm < 1028 || (Ym[mm] = qm, qm = mm)
      }(mm), Tm
    }
    let Qm = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Qm.decode();
    const nm = 2146435072;
    let Jm = 0;
    const cm = new TextEncoder;
    "encodeInto" in cm || (cm.encodeInto = function(mm, Tm) {
      const fm = cm.encode(mm);
      return Tm.set(fm), {
        read: mm.length,
        written: fm.length
      }
    });
    let zm, Zm, km, bm = 0;

    function Sm(mm, Tm) {
      return Zm = mm, km = mm.exports, zm = Tm, im = null, Em = null, km.O94G(), km
    }

    function em(mm) {
      if (void 0 !== km) return km;
      void 0 !== mm && (Object.getPrototypeOf(mm) === Object.prototype ? ({
        module: mm
      } = mm) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Tm = wm();
      mm instanceof WebAssembly.Module || (mm = new WebAssembly.Module(mm));
      return Sm(new WebAssembly.Instance(mm, Tm), mm)
    }
    async function Nm(mm) {
      if (void 0 !== km) return km;
      void 0 !== mm && (Object.getPrototypeOf(mm) === Object.prototype ? ({
        module_or_path: mm
      } = mm) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Tm = wm();
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
      return Sm(fm, hm)
    }
    var Gm = fm(2876),
      Xm = fm(6571);
    class Pm extends Error {
      stage;
      constructor(mm, Tm) {
        super((0, Gm.C)(mm, Tm), {
          cause: Tm
        }), this.name = "BloxdAnimWasmError", this.stage = mm
      }
    }
    let Hm = null,
      ym = null;

    function Cm() {
      if (ym) throw ym
    }
    async function rm(mm, Tm, Am) {
      Cm();
      const am = await (Hm ??= (async () => {
        let mm;
        try {
          mm = await (0, Gm.G)(new fm.U(fm(42688)), (0, Xm.c)("bloxd_wasm_anim"))
        } catch (Tm) {
          throw new Pm((0, Gm.M)(Tm), Tm)
        }
        try {
          await Nm({
            module_or_path: mm
          })
        } catch (Tm) {
          throw new Pm("instantiate", Tm)
        }
        return hm
      })(), Hm.catch((() => {
        Hm = null
      })), Hm);
      Cm();
      try {
        return am.rxm(Object.entries(mm).flat(), [...Tm.mobTypes], [...Tm.vehicleTypes], [...Tm.mobAiStates], [...Tm.playerPoses], "builtIns" in Am ? Am.builtIns : void 0)
      } catch (xm) {
        const mm = new Pm("call", xm);
        throw xm instanceof WebAssembly.RuntimeError && (ym = mm), mm
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);