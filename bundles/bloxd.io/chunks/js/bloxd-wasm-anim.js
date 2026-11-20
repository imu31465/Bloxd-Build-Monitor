export const id = 5;
export const ids = [5];
export const modules = {
  42664: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/bloxd_wasm_anim_bg.4ec06ec55e8e3b53281f.wasm"
  },
  42660: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      BloxdAnimWasmError: () => qv,
      compileAnimationPackInWasm: () => Av
    });
    var hv = {};

    function Sv(vv, zv, Pv, hv, Sv, ev) {
      const gv = cv(vv, Dv.Neeg),
        pv = Kv,
        dv = cv(zv, Dv.Neeg),
        Nv = Kv,
        lv = cv(Pv, Dv.Neeg),
        Tv = Kv,
        Wv = cv(hv, Dv.Neeg),
        av = Kv,
        sv = cv(Sv, Dv.Neeg),
        Cv = Kv;
      var Gv = iv(ev) ? 0 : function(vv, zv) {
          const Pv = zv(1 * vv.length, 1) >>> 0;
          return wv().set(vv, Pv / 1), Kv = vv.length, Pv
        }(ev, Dv.Neeg),
        jv = Kv;
      const fv = Dv.HmnA(gv, pv, dv, Nv, lv, Tv, Wv, av, sv, Cv, Gv, jv);
      if (fv[3]) throw mv(fv[2]);
      var Fv, Yv, nv = (Fv = fv[0], Yv = fv[1], Fv >>>= 0, wv().subarray(Fv / 1, Fv / 1 + Yv)).slice();
      return Dv.US2j(fv[0], 1 * fv[1], 1), nv
    }

    function ev(vv, zv) {
      const Pv = Gv(vv, Dv.Neeg, Dv.eFfg),
        hv = Kv,
        Sv = Dv.RSgk(Pv, hv, zv);
      if (Sv[1]) throw mv(Sv[0])
    }

    function gv() {
      Dv.Zs2U()
    }

    function pv() {
      return {
        __proto__: null,
        V9LN: {
          __proto__: null,
          HHRV: function(vv, zv) {
            return dv(Error(Tv(vv, zv)))
          },
          rxE7: function(vv, zv) {
            const Pv = av(zv),
              hv = "string" === typeof Pv ? Pv : void 0;
            var Sv = iv(hv) ? 0 : Gv(hv, Dv.Neeg, Dv.eFfg),
              ev = Kv;
            lv().setInt32(vv + 4, ev, !0), lv().setInt32(vv + 0, Sv, !0)
          },
          wR67: function(vv, zv) {
            throw new Error(Tv(vv, zv))
          },
          nvIl: function(vv, zv) {
            console.error(Tv(vv, zv))
          },
          qGcZ: function(vv) {
            mv(vv)
          }
        }
      }
    }

    function dv(vv) {
      Cv === sv.length && sv.push(sv.length + 1);
      const zv = Cv;
      return Cv = sv[zv], sv[zv] = vv, zv
    }
    Pv.r(hv), Pv.d(hv, {
      Zev: () => Sv,
      PT: () => ev,
      default: () => Rv,
      initSync: () => Uv,
      hT: () => gv
    });
    let Nv = null;

    function lv() {
      return (null === Nv || !0 === Nv.buffer.detached || void 0 === Nv.buffer.detached && Nv.buffer !== Dv.memory.buffer) && (Nv = new DataView(Dv.memory.buffer)), Nv
    }

    function Tv(vv, zv) {
      return function(vv, zv) {
        Fv += zv, Fv >= fv && (jv = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), jv.decode(), Fv = zv);
        return jv.decode(wv().subarray(vv, vv + zv))
      }(vv >>> 0, zv)
    }
    let Wv = null;

    function wv() {
      return null !== Wv && 0 !== Wv.byteLength || (Wv = new Uint8Array(Dv.memory.buffer)), Wv
    }

    function av(vv) {
      return sv[vv]
    }
    let sv = new Array(1024).fill(void 0);
    sv.push(void 0, null, !0, !1);
    let Cv = sv.length;

    function iv(vv) {
      return void 0 === vv || null === vv
    }

    function cv(vv, zv) {
      const Pv = zv(4 * vv.length, 4) >>> 0,
        hv = lv();
      for (let Sv = 0; Sv < vv.length; Sv++) hv.setUint32(Pv + 4 * Sv, dv(vv[Sv]), !0);
      return Kv = vv.length, Pv
    }

    function Gv(vv, zv, Pv) {
      if (void 0 === Pv) {
        const Pv = Yv.encode(vv),
          hv = zv(Pv.length, 1) >>> 0;
        return wv().subarray(hv, hv + Pv.length).set(Pv), Kv = Pv.length, hv
      }
      let hv = vv.length,
        Sv = zv(hv, 1) >>> 0;
      const ev = wv();
      let gv = 0;
      for (; gv < hv; gv++) {
        const zv = vv.charCodeAt(gv);
        if (zv > 127) break;
        ev[Sv + gv] = zv
      }
      if (gv !== hv) {
        0 !== gv && (vv = vv.slice(gv)), Sv = Pv(Sv, hv, hv = gv + 3 * vv.length, 1) >>> 0;
        const zv = wv().subarray(Sv + gv, Sv + hv);
        gv += Yv.encodeInto(vv, zv).written, Sv = Pv(Sv, hv, gv, 1) >>> 0
      }
      return Kv = gv, Sv
    }

    function mv(vv) {
      const zv = av(vv);
      return function(vv) {
        vv < 1028 || (sv[vv] = Cv, Cv = vv)
      }(vv), zv
    }
    let jv = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    jv.decode();
    const fv = 2146435072;
    let Fv = 0;
    const Yv = new TextEncoder;
    "encodeInto" in Yv || (Yv.encodeInto = function(vv, zv) {
      const Pv = Yv.encode(vv);
      return zv.set(Pv), {
        read: vv.length,
        written: Pv.length
      }
    });
    let nv, Ov, Dv, Kv = 0;

    function Vv(vv, zv) {
      return Ov = vv, Dv = vv.exports, nv = zv, Nv = null, Wv = null, Dv.Dhbe(), Dv
    }

    function Uv(vv) {
      if (void 0 !== Dv) return Dv;
      void 0 !== vv && (Object.getPrototypeOf(vv) === Object.prototype ? ({
        module: vv
      } = vv) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zv = pv();
      vv instanceof WebAssembly.Module || (vv = new WebAssembly.Module(vv));
      return Vv(new WebAssembly.Instance(vv, zv), vv)
    }
    async function Rv(vv) {
      if (void 0 !== Dv) return Dv;
      void 0 !== vv && (Object.getPrototypeOf(vv) === Object.prototype ? ({
        module_or_path: vv
      } = vv) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zv = pv();
      ("string" === typeof vv || "function" === typeof Request && vv instanceof Request || "function" === typeof URL && vv instanceof URL) && (vv = fetch(vv));
      const {
        instance: Pv,
        module: hv
      } = await async function(vv, zv) {
        if ("function" === typeof Response && vv instanceof Response) {
          if (!vv.ok) throw new Error(`failed to fetch Wasm: ${vv.status} ${vv.statusText} fetching '${vv.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(vv, zv)
          } catch (Pv) {
            if (! function(vv) {
                switch (vv) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(vv.type) || "application/wasm" === vv.headers.get("Content-Type")) throw Pv;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Pv)
          }
          const hv = await vv.arrayBuffer();
          return await WebAssembly.instantiate(hv, zv)
        } {
          const Pv = await WebAssembly.instantiate(vv, zv);
          return Pv instanceof WebAssembly.Instance ? {
            instance: Pv,
            module: vv
          } : Pv
        }
      }(await vv, zv);
      return Vv(Pv, hv)
    }
    var xv = Pv(3473),
      tv = Pv(6343);
    class qv extends Error {
      stage;
      constructor(vv, zv) {
        super((0, xv.D)(vv, zv), {
          cause: zv
        }), this.name = "BloxdAnimWasmError", this.stage = vv
      }
    }
    let Iv = null,
      Qv = null;

    function Zv() {
      if (Qv) throw Qv
    }
    async function Av(vv, zv, Sv) {
      Zv();
      const ev = await (Iv ??= (async () => {
        let vv;
        try {
          vv = await (0, xv.F)(new Pv.U(Pv(42664)), (0, tv.c)("bloxd_wasm_anim"))
        } catch (zv) {
          throw new qv((0, xv.M)(zv), zv)
        }
        try {
          await Rv({
            module_or_path: vv
          })
        } catch (zv) {
          throw new qv("instantiate", zv)
        }
        return hv
      })(), Iv.catch((() => {
        Iv = null
      })), Iv);
      Zv();
      try {
        return ev.Zev(Object.entries(vv).flat(), [...zv.mobTypes], [...zv.vehicleTypes], [...zv.mobAiStates], [...zv.playerPoses], "builtIns" in Sv ? Sv.builtIns : void 0)
      } catch (gv) {
        const vv = new qv("call", gv);
        throw gv instanceof WebAssembly.RuntimeError && (Qv = vv), vv
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);