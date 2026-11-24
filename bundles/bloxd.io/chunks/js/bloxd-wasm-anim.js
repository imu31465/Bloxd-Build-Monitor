export const id = 5;
export const ids = [5];
export const modules = {
  42897: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/bloxd_wasm_anim_bg.032c073578fc29078ee2.wasm"
  },
  42890: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      BloxdAnimWasmError: () => Ft,
      compileAnimationPackInWasm: () => ot
    });
    var Ot = {};

    function qt(tt, et, Vt, Ot, qt, Dt) {
      const mt = Mt(tt, St.H3GJ),
        dt = ct,
        jt = Mt(et, St.H3GJ),
        Ht = ct,
        Xt = Mt(Vt, St.H3GJ),
        Qt = ct,
        lt = Mt(Ot, St.H3GJ),
        ft = ct,
        wt = Mt(qt, St.H3GJ),
        yt = ct;
      var bt = Nt(Dt) ? 0 : function(tt, et) {
          const Vt = et(1 * tt.length, 1) >>> 0;
          return Et().set(tt, Vt / 1), ct = tt.length, Vt
        }(Dt, St.H3GJ),
        Ct = ct;
      const ut = St.Nhfa(mt, dt, jt, Ht, Xt, Qt, lt, ft, wt, yt, bt, Ct);
      if (ut[3]) throw Jt(ut[2]);
      var Kt, ht, vt = (Kt = ut[0], ht = ut[1], Kt >>>= 0, Et().subarray(Kt / 1, Kt / 1 + ht)).slice();
      return St.M1VR(ut[0], 1 * ut[1], 1), vt
    }

    function Dt(tt, et) {
      const Vt = bt(tt, St.H3GJ, St.XhUa),
        Ot = ct,
        qt = St.hH2Y(Vt, Ot, et);
      if (qt[1]) throw Jt(qt[0])
    }

    function mt() {
      St.P55S()
    }

    function dt() {
      return {
        __proto__: null,
        c5te: {
          __proto__: null,
          xOnj: function(tt, et) {
            return jt(Error(Qt(tt, et)))
          },
          D3Nw: function(tt, et) {
            const Vt = ft(et),
              Ot = "string" === typeof Vt ? Vt : void 0;
            var qt = Nt(Ot) ? 0 : bt(Ot, St.H3GJ, St.XhUa),
              Dt = ct;
            Xt().setInt32(tt + 4, Dt, !0), Xt().setInt32(tt + 0, qt, !0)
          },
          aFf3: function(tt, et) {
            throw new Error(Qt(tt, et))
          },
          WVI3: function(tt, et) {
            console.error(Qt(tt, et))
          },
          uavJ: function(tt) {
            Jt(tt)
          }
        }
      }
    }

    function jt(tt) {
      yt === wt.length && wt.push(wt.length + 1);
      const et = yt;
      return yt = wt[et], wt[et] = tt, et
    }
    Vt.r(Ot), Vt.d(Ot, {
      wdt: () => qt,
      mQ: () => Dt,
      default: () => Pt,
      initSync: () => It,
      dQ: () => mt
    });
    let Ht = null;

    function Xt() {
      return null !== Ht && Ht.buffer === St.memory.buffer || (Ht = new DataView(St.memory.buffer)), Ht
    }

    function Qt(tt, et) {
      return function(tt, et) {
        Kt += et, Kt >= ut && (Ct = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Ct.decode(), Kt = et);
        return Ct.decode(Et().subarray(tt, tt + et))
      }(tt >>> 0, et)
    }
    let lt = null;

    function Et() {
      return null !== lt && 0 !== lt.byteLength || (lt = new Uint8Array(St.memory.buffer)), lt
    }

    function ft(tt) {
      return wt[tt]
    }
    let wt = new Array(1024).fill(void 0);
    wt.push(void 0, null, !0, !1);
    let yt = wt.length;

    function Nt(tt) {
      return void 0 === tt || null === tt
    }

    function Mt(tt, et) {
      const Vt = et(4 * tt.length, 4) >>> 0,
        Ot = Xt();
      for (let qt = 0; qt < tt.length; qt++) Ot.setUint32(Vt + 4 * qt, jt(tt[qt]), !0);
      return ct = tt.length, Vt
    }

    function bt(tt, et, Vt) {
      if (void 0 === Vt) {
        const Vt = ht.encode(tt),
          Ot = et(Vt.length, 1) >>> 0;
        return Et().subarray(Ot, Ot + Vt.length).set(Vt), ct = Vt.length, Ot
      }
      let Ot = tt.length,
        qt = et(Ot, 1) >>> 0;
      const Dt = Et();
      let mt = 0;
      for (; mt < Ot; mt++) {
        const et = tt.charCodeAt(mt);
        if (et > 127) break;
        Dt[qt + mt] = et
      }
      if (mt !== Ot) {
        0 !== mt && (tt = tt.slice(mt)), qt = Vt(qt, Ot, Ot = mt + 3 * tt.length, 1) >>> 0;
        const et = Et().subarray(qt + mt, qt + Ot);
        mt += ht.encodeInto(tt, et).written, qt = Vt(qt, Ot, mt, 1) >>> 0
      }
      return ct = mt, qt
    }

    function Jt(tt) {
      const et = ft(tt);
      return function(tt) {
        tt < 1028 || (wt[tt] = yt, yt = tt)
      }(tt), et
    }
    let Ct = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Ct.decode();
    const ut = 2146435072;
    let Kt = 0;
    const ht = new TextEncoder;
    "encodeInto" in ht || (ht.encodeInto = function(tt, et) {
      const Vt = ht.encode(tt);
      return et.set(Vt), {
        read: tt.length,
        written: Vt.length
      }
    });
    let vt, Wt, St, ct = 0;

    function Rt(tt, et) {
      return Wt = tt, St = tt.exports, vt = et, Ht = null, lt = null, St.PnDx(), St
    }

    function It(tt) {
      if (void 0 !== St) return St;
      void 0 !== tt && (Object.getPrototypeOf(tt) === Object.prototype ? ({
        module: tt
      } = tt) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const et = dt();
      tt instanceof WebAssembly.Module || (tt = new WebAssembly.Module(tt));
      return Rt(new WebAssembly.Instance(tt, et), tt)
    }
    async function Pt(tt) {
      if (void 0 !== St) return St;
      void 0 !== tt && (Object.getPrototypeOf(tt) === Object.prototype ? ({
        module_or_path: tt
      } = tt) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const et = dt();
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
      return Rt(Vt, Ot)
    }
    var Zt = Vt(2965),
      Lt = Vt(6820);
    class Ft extends Error {
      stage;
      constructor(tt, et) {
        super((0, Zt.F)(tt, et), {
          cause: et
        }), this.name = "BloxdAnimWasmError", this.stage = tt
      }
    }
    let kt = null,
      Gt = null;

    function zt() {
      if (Gt) throw Gt
    }
    async function ot(tt, et, qt) {
      zt();
      const Dt = await (kt ??= (async () => {
        let tt;
        try {
          tt = await (0, Zt.G)(new Vt.U(Vt(42897)), (0, Lt.c)("bloxd_wasm_anim"))
        } catch (et) {
          throw new Ft((0, Zt.J)(et), et)
        }
        try {
          await Pt({
            module_or_path: tt
          })
        } catch (et) {
          throw new Ft("instantiate", et)
        }
        return Ot
      })(), kt.catch((() => {
        kt = null
      })), kt);
      zt();
      try {
        return Dt.wdt(Object.entries(tt).flat(), [...et.mobTypes], [...et.vehicleTypes], [...et.mobAiStates], [...et.playerPoses], "builtIns" in qt ? qt.builtIns : void 0)
      } catch (mt) {
        const tt = new Ft("call", mt);
        throw mt instanceof WebAssembly.RuntimeError && (Gt = tt), tt
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);