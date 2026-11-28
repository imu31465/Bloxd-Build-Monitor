export const id = 5;
export const ids = [5];
export const modules = {
  55058: (dd, Od, md) => {
    dd.exports = md.p + "static/media/bloxd_wasm_anim_bg.74aabad87fc497287211.wasm"
  },
  55056: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      BloxdAnimWasmError: () => Gd,
      compileAnimationPackInWasm: () => zd
    });
    var Wd = {};

    function Fd(dd, Od, md, Wd, Fd, Rd) {
      const Xd = Td(dd, Bd.S8AR),
        Kd = Sd,
        hd = Td(Od, Bd.S8AR),
        vd = Sd,
        Qd = Td(md, Bd.S8AR),
        td = Sd,
        od = Td(Wd, Bd.S8AR),
        qd = Sd,
        Hd = Td(Fd, Bd.S8AR),
        yd = Sd;
      var pd = bd(Rd) ? 0 : function(dd, Od) {
          const md = Od(1 * dd.length, 1) >>> 0;
          return Nd().set(dd, md / 1), Sd = dd.length, md
        }(Rd, Bd.S8AR),
        gd = Sd;
      const wd = Bd.AZ5Q(Xd, Kd, hd, vd, Qd, td, od, qd, Hd, yd, pd, gd);
      if (wd[3]) throw Yd(wd[2]);
      var Ed, Jd, Ud = (Ed = wd[0], Jd = wd[1], Ed >>>= 0, Nd().subarray(Ed / 1, Ed / 1 + Jd)).slice();
      return Bd.lEKU(wd[0], 1 * wd[1], 1), Ud
    }

    function Rd(dd, Od) {
      const md = pd(dd, Bd.S8AR, Bd.Zi2p),
        Wd = Sd,
        Fd = Bd.Uyli(md, Wd, Od);
      if (Fd[1]) throw Yd(Fd[0])
    }

    function Xd() {
      Bd.XNDm()
    }

    function Kd() {
      return {
        __proto__: null,
        MgMi: {
          __proto__: null,
          d6Gx: function(dd, Od) {
            return hd(Error(td(dd, Od)))
          },
          FWRp: function(dd, Od) {
            const md = qd(Od),
              Wd = "string" === typeof md ? md : void 0;
            var Fd = bd(Wd) ? 0 : pd(Wd, Bd.S8AR, Bd.Zi2p),
              Rd = Sd;
            Qd().setInt32(dd + 4, Rd, !0), Qd().setInt32(dd + 0, Fd, !0)
          },
          IeCQ: function(dd, Od) {
            throw new Error(td(dd, Od))
          },
          Gl8X: function(dd, Od) {
            console.error(td(dd, Od))
          },
          pz15: function(dd) {
            Yd(dd)
          }
        }
      }
    }

    function hd(dd) {
      yd === Hd.length && Hd.push(Hd.length + 1);
      const Od = yd;
      return yd = Hd[Od], Hd[Od] = dd, Od
    }
    md.r(Wd), md.d(Wd, {
      Khd: () => Fd,
      ut: () => Rd,
      default: () => Vd,
      initSync: () => ud,
      Vt: () => Xd
    });
    let vd = null;

    function Qd() {
      return null !== vd && vd.buffer === Bd.memory.buffer || (vd = new DataView(Bd.memory.buffer)), vd
    }

    function td(dd, Od) {
      return function(dd, Od) {
        Ed += Od, Ed >= wd && (gd = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), gd.decode(), Ed = Od);
        return gd.decode(Nd().subarray(dd, dd + Od))
      }(dd >>> 0, Od)
    }
    let od = null;

    function Nd() {
      return null !== od && 0 !== od.byteLength || (od = new Uint8Array(Bd.memory.buffer)), od
    }

    function qd(dd) {
      return Hd[dd]
    }
    let Hd = new Array(1024).fill(void 0);
    Hd.push(void 0, null, !0, !1);
    let yd = Hd.length;

    function bd(dd) {
      return void 0 === dd || null === dd
    }

    function Td(dd, Od) {
      const md = Od(4 * dd.length, 4) >>> 0,
        Wd = Qd();
      for (let Fd = 0; Fd < dd.length; Fd++) Wd.setUint32(md + 4 * Fd, hd(dd[Fd]), !0);
      return Sd = dd.length, md
    }

    function pd(dd, Od, md) {
      if (void 0 === md) {
        const md = Jd.encode(dd),
          Wd = Od(md.length, 1) >>> 0;
        return Nd().subarray(Wd, Wd + md.length).set(md), Sd = md.length, Wd
      }
      let Wd = dd.length,
        Fd = Od(Wd, 1) >>> 0;
      const Rd = Nd();
      let Xd = 0;
      for (; Xd < Wd; Xd++) {
        const Od = dd.charCodeAt(Xd);
        if (Od > 127) break;
        Rd[Fd + Xd] = Od
      }
      if (Xd !== Wd) {
        0 !== Xd && (dd = dd.slice(Xd)), Fd = md(Fd, Wd, Wd = Xd + 3 * dd.length, 1) >>> 0;
        const Od = Nd().subarray(Fd + Xd, Fd + Wd);
        Xd += Jd.encodeInto(dd, Od).written, Fd = md(Fd, Wd, Xd, 1) >>> 0
      }
      return Sd = Xd, Fd
    }

    function Yd(dd) {
      const Od = qd(dd);
      return function(dd) {
        dd < 1028 || (Hd[dd] = yd, yd = dd)
      }(dd), Od
    }
    let gd = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    gd.decode();
    const wd = 2146435072;
    let Ed = 0;
    const Jd = new TextEncoder;
    "encodeInto" in Jd || (Jd.encodeInto = function(dd, Od) {
      const md = Jd.encode(dd);
      return Od.set(md), {
        read: dd.length,
        written: md.length
      }
    });
    let Ud, xd, Bd, Sd = 0;

    function sd(dd, Od) {
      return xd = dd, Bd = dd.exports, Ud = Od, vd = null, od = null, Bd.XYC1(), Bd
    }

    function ud(dd) {
      if (void 0 !== Bd) return Bd;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module: dd
      } = dd) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Od = Kd();
      dd instanceof WebAssembly.Module || (dd = new WebAssembly.Module(dd));
      return sd(new WebAssembly.Instance(dd, Od), dd)
    }
    async function Vd(dd) {
      if (void 0 !== Bd) return Bd;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module_or_path: dd
      } = dd) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Od = Kd();
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
      return sd(md, Wd)
    }
    var Ad = md(2425),
      rd = md(7573);
    class Gd extends Error {
      stage;
      constructor(dd, Od) {
        super((0, Ad.C)(dd, Od), {
          cause: Od
        }), this.name = "BloxdAnimWasmError", this.stage = dd
      }
    }
    let nd = null,
      Ld = null;

    function Pd() {
      if (Ld) throw Ld
    }
    async function zd(dd, Od, Fd) {
      Pd();
      const Rd = await (nd ??= (async () => {
        let dd;
        try {
          dd = await (0, Ad.F)(new md.U(md(55058)), (0, rd.b)("bloxd_wasm_anim"))
        } catch (Od) {
          throw new Gd((0, Ad.L)(Od), Od)
        }
        try {
          await Vd({
            module_or_path: dd
          })
        } catch (Od) {
          throw new Gd("instantiate", Od)
        }
        return Wd
      })(), nd.catch((() => {
        nd = null
      })), nd);
      Pd();
      try {
        return Rd.Khd(Object.entries(dd).flat(), [...Od.mobTypes], [...Od.vehicleTypes], [...Od.mobAiStates], [...Od.playerPoses], "builtIns" in Fd ? Fd.builtIns : void 0)
      } catch (Xd) {
        const dd = new Gd("call", Xd);
        throw Xd instanceof WebAssembly.RuntimeError && (Ld = dd), dd
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);