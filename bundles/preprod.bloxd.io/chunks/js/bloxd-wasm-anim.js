export const id = 5;
export const ids = [5];
export const modules = {
  42941: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/bloxd_wasm_anim_bg.ab5b80b8d68f5e91c45a.wasm"
  },
  42935: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      BloxdAnimWasmError: () => Bp,
      compileAnimationPackInWasm: () => bp
    });
    var Op = {};

    function op(pp, ip, cp, Op, op, Ip) {
      const Sp = tp(pp, Mp.fgSa),
        xp = Cp,
        Lp = tp(ip, Mp.fgSa),
        Yp = Cp,
        Dp = tp(cp, Mp.fgSa),
        Ap = Cp,
        Pp = tp(Op, Mp.fgSa),
        yp = Cp,
        Up = tp(op, Mp.fgSa),
        wp = Cp;
      var Hp = vp(Ip) ? 0 : function(pp, ip) {
          const cp = ip(1 * pp.length, 1) >>> 0;
          return Wp().set(pp, cp / 1), Cp = pp.length, cp
        }(Ip, Mp.fgSa),
        ep = Cp;
      const jp = Mp.xO7R(Sp, xp, Lp, Yp, Dp, Ap, Pp, yp, Up, wp, Hp, ep);
      if (jp[3]) throw dp(jp[2]);
      var kp, mp, Rp = (kp = jp[0], mp = jp[1], kp >>>= 0, Wp().subarray(kp / 1, kp / 1 + mp)).slice();
      return Mp.PZPw(jp[0], 1 * jp[1], 1), Rp
    }

    function Ip(pp, ip) {
      const cp = Hp(pp, Mp.fgSa, Mp.hVwD),
        Op = Cp,
        op = Mp.zeZa(cp, Op, ip);
      if (op[1]) throw dp(op[0])
    }

    function Sp() {
      Mp.V64H()
    }

    function xp() {
      return {
        __proto__: null,
        VfU7: {
          __proto__: null,
          spUr: function(pp, ip) {
            return Lp(Error(Ap(pp, ip)))
          },
          bBjB: function(pp, ip) {
            const cp = yp(ip),
              Op = "string" === typeof cp ? cp : void 0;
            var op = vp(Op) ? 0 : Hp(Op, Mp.fgSa, Mp.hVwD),
              Ip = Cp;
            Dp().setInt32(pp + 4, Ip, !0), Dp().setInt32(pp + 0, op, !0)
          },
          geTR: function(pp, ip) {
            throw new Error(Ap(pp, ip))
          },
          zT7c: function(pp, ip) {
            console.error(Ap(pp, ip))
          },
          bQdA: function(pp) {
            dp(pp)
          }
        }
      }
    }

    function Lp(pp) {
      wp === Up.length && Up.push(Up.length + 1);
      const ip = wp;
      return wp = Up[ip], Up[ip] = pp, ip
    }
    cp.r(Op), cp.d(Op, {
      Hxp: () => op,
      dA: () => Ip,
      default: () => lp,
      initSync: () => Xp,
      eA: () => Sp
    });
    let Yp = null;

    function Dp() {
      return null !== Yp && Yp.buffer === Mp.memory.buffer || (Yp = new DataView(Mp.memory.buffer)), Yp
    }

    function Ap(pp, ip) {
      return function(pp, ip) {
        kp += ip, kp >= jp && (ep = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), ep.decode(), kp = ip);
        return ep.decode(Wp().subarray(pp, pp + ip))
      }(pp >>> 0, ip)
    }
    let Pp = null;

    function Wp() {
      return null !== Pp && 0 !== Pp.byteLength || (Pp = new Uint8Array(Mp.memory.buffer)), Pp
    }

    function yp(pp) {
      return Up[pp]
    }
    let Up = new Array(1024).fill(void 0);
    Up.push(void 0, null, !0, !1);
    let wp = Up.length;

    function vp(pp) {
      return void 0 === pp || null === pp
    }

    function tp(pp, ip) {
      const cp = ip(4 * pp.length, 4) >>> 0,
        Op = Dp();
      for (let op = 0; op < pp.length; op++) Op.setUint32(cp + 4 * op, Lp(pp[op]), !0);
      return Cp = pp.length, cp
    }

    function Hp(pp, ip, cp) {
      if (void 0 === cp) {
        const cp = mp.encode(pp),
          Op = ip(cp.length, 1) >>> 0;
        return Wp().subarray(Op, Op + cp.length).set(cp), Cp = cp.length, Op
      }
      let Op = pp.length,
        op = ip(Op, 1) >>> 0;
      const Ip = Wp();
      let Sp = 0;
      for (; Sp < Op; Sp++) {
        const ip = pp.charCodeAt(Sp);
        if (ip > 127) break;
        Ip[op + Sp] = ip
      }
      if (Sp !== Op) {
        0 !== Sp && (pp = pp.slice(Sp)), op = cp(op, Op, Op = Sp + 3 * pp.length, 1) >>> 0;
        const ip = Wp().subarray(op + Sp, op + Op);
        Sp += mp.encodeInto(pp, ip).written, op = cp(op, Op, Sp, 1) >>> 0
      }
      return Cp = Sp, op
    }

    function dp(pp) {
      const ip = yp(pp);
      return function(pp) {
        pp < 1028 || (Up[pp] = wp, wp = pp)
      }(pp), ip
    }
    let ep = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    ep.decode();
    const jp = 2146435072;
    let kp = 0;
    const mp = new TextEncoder;
    "encodeInto" in mp || (mp.encodeInto = function(pp, ip) {
      const cp = mp.encode(pp);
      return ip.set(cp), {
        read: pp.length,
        written: cp.length
      }
    });
    let Rp, qp, Mp, Cp = 0;

    function Ep(pp, ip) {
      return qp = pp, Mp = pp.exports, Rp = ip, Yp = null, Pp = null, Mp.jq1x(), Mp
    }

    function Xp(pp) {
      if (void 0 !== Mp) return Mp;
      void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
        module: pp
      } = pp) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ip = xp();
      pp instanceof WebAssembly.Module || (pp = new WebAssembly.Module(pp));
      return Ep(new WebAssembly.Instance(pp, ip), pp)
    }
    async function lp(pp) {
      if (void 0 !== Mp) return Mp;
      void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
        module_or_path: pp
      } = pp) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ip = xp();
      ("string" === typeof pp || "function" === typeof Request && pp instanceof Request || "function" === typeof URL && pp instanceof URL) && (pp = fetch(pp));
      const {
        instance: cp,
        module: Op
      } = await async function(pp, ip) {
        if ("function" === typeof Response && pp instanceof Response) {
          if (!pp.ok) throw new Error(`failed to fetch Wasm: ${pp.status} ${pp.statusText} fetching '${pp.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(pp, ip)
          } catch (cp) {
            if (! function(pp) {
                switch (pp) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(pp.type) || "application/wasm" === pp.headers.get("Content-Type")) throw cp;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", cp)
          }
          const Op = await pp.arrayBuffer();
          return await WebAssembly.instantiate(Op, ip)
        } {
          const cp = await WebAssembly.instantiate(pp, ip);
          return cp instanceof WebAssembly.Instance ? {
            instance: cp,
            module: pp
          } : cp
        }
      }(await pp, ip);
      return Ep(cp, Op)
    }
    var Qp = cp(2970),
      Jp = cp(6762);
    class Bp extends Error {
      stage;
      constructor(pp, ip) {
        super((0, Qp.B)(pp, ip), {
          cause: ip
        }), this.name = "BloxdAnimWasmError", this.stage = pp
      }
    }
    let Np = null,
      Tp = null;

    function fp() {
      if (Tp) throw Tp
    }
    async function bp(pp, ip, op) {
      fp();
      const Ip = await (Np ??= (async () => {
        let pp;
        try {
          pp = await (0, Qp.C)(new cp.U(cp(42941)), (0, Jp.e)("bloxd_wasm_anim"))
        } catch (ip) {
          throw new Bp((0, Qp.J)(ip), ip)
        }
        try {
          await lp({
            module_or_path: pp
          })
        } catch (ip) {
          throw new Bp("instantiate", ip)
        }
        return Op
      })(), Np.catch((() => {
        Np = null
      })), Np);
      fp();
      try {
        return Ip.Hxp(Object.entries(pp).flat(), [...ip.mobTypes], [...ip.vehicleTypes], [...ip.mobAiStates], [...ip.playerPoses], "builtIns" in op ? op.builtIns : void 0)
      } catch (Sp) {
        const pp = new Bp("call", Sp);
        throw Sp instanceof WebAssembly.RuntimeError && (Tp = pp), pp
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);