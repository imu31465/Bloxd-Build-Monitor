export const id = 5;
export const ids = [5];
export const modules = {
  43184: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/bloxd_wasm_anim_bg.0ec0e432d8919e6e40e6.wasm"
  },
  43180: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      BloxdAnimWasmError: () => fd,
      compileAnimationPackInWasm: () => Dd
    });
    var pd = {};

    function Nd(dd, Jd, kd, pd, Nd, Wd) {
      const Pd = Id(dd, Fd.tFE6),
        Zd = Yd,
        gd = Id(Jd, Fd.tFE6),
        Cd = Yd,
        Kd = Id(kd, Fd.tFE6),
        od = Yd,
        ld = Id(pd, Fd.tFE6),
        Ld = Yd,
        Od = Id(Nd, Fd.tFE6),
        ed = Yd;
      var Gd = Rd(Wd) ? 0 : function(dd, Jd) {
          const kd = Jd(1 * dd.length, 1) >>> 0;
          return Qd().set(dd, kd / 1), Yd = dd.length, kd
        }(Wd, Fd.tFE6),
        xd = Yd;
      const qd = Fd.prAO(Pd, Zd, gd, Cd, Kd, od, ld, Ld, Od, ed, Gd, xd);
      if (qd[3]) throw vd(qd[2]);
      var Bd, sd, ad = (Bd = qd[0], sd = qd[1], Bd >>>= 0, Qd().subarray(Bd / 1, Bd / 1 + sd)).slice();
      return Fd.qneU(qd[0], 1 * qd[1], 1), ad
    }

    function Wd(dd, Jd) {
      const kd = Gd(dd, Fd.tFE6, Fd.UOGR),
        pd = Yd,
        Nd = Fd.Bn7y(kd, pd, Jd);
      if (Nd[1]) throw vd(Nd[0])
    }

    function Pd() {
      Fd.QcG0()
    }

    function Zd() {
      return {
        __proto__: null,
        rVUz: {
          __proto__: null,
          tWtm: function(dd, Jd) {
            return gd(Error(od(dd, Jd)))
          },
          l3ox: function(dd, Jd) {
            const kd = Ld(Jd),
              pd = "string" === typeof kd ? kd : void 0;
            var Nd = Rd(pd) ? 0 : Gd(pd, Fd.tFE6, Fd.UOGR),
              Wd = Yd;
            Kd().setInt32(dd + 4, Wd, !0), Kd().setInt32(dd + 0, Nd, !0)
          },
          KKX1: function(dd, Jd) {
            throw new Error(od(dd, Jd))
          },
          rSst: function(dd, Jd) {
            console.error(od(dd, Jd))
          },
          mgbE: function(dd) {
            vd(dd)
          }
        }
      }
    }

    function gd(dd) {
      ed === Od.length && Od.push(Od.length + 1);
      const Jd = ed;
      return ed = Od[Jd], Od[Jd] = dd, Jd
    }
    kd.r(pd), kd.d(pd, {
      uPd: () => Nd,
      hK: () => Wd,
      default: () => Sd,
      initSync: () => bd,
      rK: () => Pd
    });
    let Cd = null;

    function Kd() {
      return (null === Cd || !0 === Cd.buffer.detached || void 0 === Cd.buffer.detached && Cd.buffer !== Fd.memory.buffer) && (Cd = new DataView(Fd.memory.buffer)), Cd
    }

    function od(dd, Jd) {
      return function(dd, Jd) {
        Bd += Jd, Bd >= qd && (xd = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), xd.decode(), Bd = Jd);
        return xd.decode(Qd().subarray(dd, dd + Jd))
      }(dd >>> 0, Jd)
    }
    let ld = null;

    function Qd() {
      return null !== ld && 0 !== ld.byteLength || (ld = new Uint8Array(Fd.memory.buffer)), ld
    }

    function Ld(dd) {
      return Od[dd]
    }
    let Od = new Array(1024).fill(void 0);
    Od.push(void 0, null, !0, !1);
    let ed = Od.length;

    function Rd(dd) {
      return void 0 === dd || null === dd
    }

    function Id(dd, Jd) {
      const kd = Jd(4 * dd.length, 4) >>> 0,
        pd = Kd();
      for (let Nd = 0; Nd < dd.length; Nd++) pd.setUint32(kd + 4 * Nd, gd(dd[Nd]), !0);
      return Yd = dd.length, kd
    }

    function Gd(dd, Jd, kd) {
      if (void 0 === kd) {
        const kd = sd.encode(dd),
          pd = Jd(kd.length, 1) >>> 0;
        return Qd().subarray(pd, pd + kd.length).set(kd), Yd = kd.length, pd
      }
      let pd = dd.length,
        Nd = Jd(pd, 1) >>> 0;
      const Wd = Qd();
      let Pd = 0;
      for (; Pd < pd; Pd++) {
        const Jd = dd.charCodeAt(Pd);
        if (Jd > 127) break;
        Wd[Nd + Pd] = Jd
      }
      if (Pd !== pd) {
        0 !== Pd && (dd = dd.slice(Pd)), Nd = kd(Nd, pd, pd = Pd + 3 * dd.length, 1) >>> 0;
        const Jd = Qd().subarray(Nd + Pd, Nd + pd);
        Pd += sd.encodeInto(dd, Jd).written, Nd = kd(Nd, pd, Pd, 1) >>> 0
      }
      return Yd = Pd, Nd
    }

    function vd(dd) {
      const Jd = Ld(dd);
      return function(dd) {
        dd < 1028 || (Od[dd] = ed, ed = dd)
      }(dd), Jd
    }
    let xd = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    xd.decode();
    const qd = 2146435072;
    let Bd = 0;
    const sd = new TextEncoder;
    "encodeInto" in sd || (sd.encodeInto = function(dd, Jd) {
      const kd = sd.encode(dd);
      return Jd.set(kd), {
        read: dd.length,
        written: kd.length
      }
    });
    let ad, Md, Fd, Yd = 0;

    function md(dd, Jd) {
      return Md = dd, Fd = dd.exports, ad = Jd, Cd = null, ld = null, Fd.rkob(), Fd
    }

    function bd(dd) {
      if (void 0 !== Fd) return Fd;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module: dd
      } = dd) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Jd = Zd();
      dd instanceof WebAssembly.Module || (dd = new WebAssembly.Module(dd));
      return md(new WebAssembly.Instance(dd, Jd), dd)
    }
    async function Sd(dd) {
      if (void 0 !== Fd) return Fd;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module_or_path: dd
      } = dd) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Jd = Zd();
      ("string" === typeof dd || "function" === typeof Request && dd instanceof Request || "function" === typeof URL && dd instanceof URL) && (dd = fetch(dd));
      const {
        instance: kd,
        module: pd
      } = await async function(dd, Jd) {
        if ("function" === typeof Response && dd instanceof Response) {
          if (!dd.ok) throw new Error(`failed to fetch Wasm: ${dd.status} ${dd.statusText} fetching '${dd.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(dd, Jd)
          } catch (kd) {
            if (! function(dd) {
                switch (dd) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(dd.type) || "application/wasm" === dd.headers.get("Content-Type")) throw kd;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", kd)
          }
          const pd = await dd.arrayBuffer();
          return await WebAssembly.instantiate(pd, Jd)
        } {
          const kd = await WebAssembly.instantiate(dd, Jd);
          return kd instanceof WebAssembly.Instance ? {
            instance: kd,
            module: dd
          } : kd
        }
      }(await dd, Jd);
      return md(kd, pd)
    }
    var jd = kd(2770),
      Xd = kd(6483);
    class fd extends Error {
      stage;
      constructor(dd, Jd) {
        super((0, jd.A)(dd, Jd), {
          cause: Jd
        }), this.name = "BloxdAnimWasmError", this.stage = dd
      }
    }
    let nd = null,
      Ud = null;

    function yd() {
      if (Ud) throw Ud
    }
    async function Dd(dd, Jd, Nd) {
      yd();
      const Wd = await (nd ??= (async () => {
        let dd;
        try {
          dd = await (0, jd.B)(new kd.U(kd(43184)), (0, Xd.e)("bloxd_wasm_anim"))
        } catch (Jd) {
          throw new fd((0, jd.G)(Jd), Jd)
        }
        try {
          await Sd({
            module_or_path: dd
          })
        } catch (Jd) {
          throw new fd("instantiate", Jd)
        }
        return pd
      })(), nd.catch((() => {
        nd = null
      })), nd);
      yd();
      try {
        return Wd.uPd(Object.entries(dd).flat(), [...Jd.mobTypes], [...Jd.vehicleTypes], [...Jd.mobAiStates], [...Jd.playerPoses], "builtIns" in Nd ? Nd.builtIns : void 0)
      } catch (Pd) {
        const dd = new fd("call", Pd);
        throw Pd instanceof WebAssembly.RuntimeError && (Ud = dd), dd
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);