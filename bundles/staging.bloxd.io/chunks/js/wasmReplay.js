export const id = 66;
export const ids = [66];
export const modules = {
  61588: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/bloxd_wasm_replay_bg.953da97fb97beebebe51.wasm"
  },
  6762: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp
    });
    var Op = cp(2970);
    const op = {
      bloxd_wasm: () => "b2340e61a7d448277a389ebeac9c8ae332a7699b283661cfa159ae4f9b5e0b46",
      bloxd_wasm_client: () => "fc04a63668a4bc6b8108c23defb833287279306fc25451198e7e46db490160bc",
      bloxd_wasm_workers: () => "97593e648fa195611cb0537edc597de1fb35e0ff06c7ba452104e324f7e81a2a",
      bloxd_wasm_models: () => "2bf3307bf44a828cd7c420818a0ed5b061472ebe327b277c5eba216bf14f6d21",
      bloxd_wasm_webgpu: () => "bb0d39b71cbd62566055f119cdde94768780e27f37f323027d63e6b3a5a43b04",
      bloxd_wasm_webgl: () => "9b5a782f90a35f11a25813cfef777f781fa19f7f35be550f5ba3ccd789c15381",
      bloxd_wasm_webgl1: () => "53c64fa3997d454ee8786274e88a96df2e92e734612cf00e45f3b10812d8ed86",
      bloxd_wasm_replay: () => "6da56602c0cf1eac0fee1a30eb3409cd19788e1cf0bf82c91f41e9dc2ec26a17",
      bloxd_wasm_recorder: () => "f89c2afc61048a96a7ea68674c418202687a5df82028a7c7506a545f43cf8a00",
      bloxd_wasm_anim: () => "12c4beb6cacfbdea124da1b78d9d3bb64d476f26a1d82ae9031fb1eb6b45b89d",
      bloxd_wasm_textures: () => "8da34a927a2e21429dd7b220d476b1d909f2b62d3b85d0f3e892b23b3c44d36f",
      bloxd_wasm_shader_pack: () => "5e1ab13681c364aca3fb9e7bad689eb7302538f98091c87c0994a7538b0e884b"
    };
    var Ip = cp(4791);

    function Sp(pp) {
      const ip = Object.prototype.hasOwnProperty.call(op, pp) ? op[pp]() : void 0;
      if (void 0 !== ip) return {
        sha256: ip,
        onMismatch: Ip.v
      };
      throw new Op.g(`${pp} has no release digest, so this build refuses it`)
    }
  },
  61579: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      BloxdReplayWasmError: () => Jp,
      loadReplayModule: () => ap,
      markReplayTrapped: () => gp,
      replayMemoryBytes: () => Fp,
      unloadReplayModule: () => np
    });
    var Op = {};
    cp.r(Op), cp.d(Op, {
      JIp: () => op,
      kxp: () => Xp,
      dA: () => Ip,
      default: () => Ep,
      initSync: () => Cp,
      eA: () => Sp,
      EIp: () => xp,
      BIp: () => Lp
    });
    class op {
      __destroy_into_raw() {
        const pp = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Dp.unregister(this), pp
      }
      free() {
        const pp = this.__destroy_into_raw();
        Rp.rWdw(pp, 0)
      }
      bIp(pp, ip, cp, Op, op, Ip) {
        Rp.jFob(this.__wbg_ptr, pp, ip, cp, Op, op, Ip)
      }
      close() {
        Rp.PLeH(this.__wbg_ptr)
      }
      crop(pp, ip) {
        Rp.nzm2(this.__wbg_ptr, pp, ip)
      }
      nIp(pp, ip) {
        Rp.W8qI(this.__wbg_ptr, pp, ip)
      }
      gIp() {
        return Rp.LWx4(this.__wbg_ptr) >>> 0
      }
      FIp() {
        return Rp.HyIm(this.__wbg_ptr) >>> 0
      }
      GIp() {
        return Rp.Z5VL(this.__wbg_ptr) >>> 0
      }
      rIp() {
        return Rp.n9vO(this.__wbg_ptr) >>> 0
      }
      aIp(pp, ip) {
        Rp.M4CP(this.__wbg_ptr, pp, ip)
      }
      constructor() {
        const pp = Rp.B8Xg();
        return this.__wbg_ptr = pp, Dp.register(this, this.__wbg_ptr, this), this
      }
      open() {
        Rp.wCln(this.__wbg_ptr)
      }
      RIp() {
        return Rp.geHd(this.__wbg_ptr) >>> 0
      }
      pause() {
        Rp.zn7v(this.__wbg_ptr)
      }
      play() {
        Rp.IDTI(this.__wbg_ptr)
      }
      save() {
        return Rp.LrRe(this.__wbg_ptr) >>> 0
      }
      ZIp() {
        Rp.cep7(this.__wbg_ptr)
      }
      seek(pp, ip) {
        Rp.Pwlg(this.__wbg_ptr, pp, ip)
      }
      sIp(pp) {
        Rp.V0PN(this.__wbg_ptr, pp)
      }
      hIp(pp, ip) {
        const cp = function(pp, ip) {
            const cp = ip(8 * pp.length, 8) >>> 0;
            return function() {
              null !== Pp && 0 !== Pp.byteLength || (Pp = new Float64Array(Rp.memory.buffer));
              return Pp
            }().set(pp, cp / 8), qp = pp.length, cp
          }(ip, Rp.nkde),
          Op = qp;
        Rp.GcpZ(this.__wbg_ptr, pp, cp, Op)
      }
      fIp(pp, ip) {
        Rp.uKW6(this.__wbg_ptr, pp, ip)
      }
      zIp(pp) {
        Rp.ShPy(this.__wbg_ptr, pp)
      }
      stage(pp) {
        return Rp.tCSB(this.__wbg_ptr, pp) >>> 0
      }
      step(pp, ip) {
        return Rp.JWaX(this.__wbg_ptr, pp, ip) >>> 0
      }
    }

    function Ip(pp, ip) {
      const cp = function(pp, ip, cp) {
          if (void 0 === cp) {
            const cp = jp.encode(pp),
              Op = ip(cp.length, 1) >>> 0;
            return Up().subarray(Op, Op + cp.length).set(cp), qp = cp.length, Op
          }
          let Op = pp.length,
            op = ip(Op, 1) >>> 0;
          const Ip = Up();
          let Sp = 0;
          for (; Sp < Op; Sp++) {
            const ip = pp.charCodeAt(Sp);
            if (ip > 127) break;
            Ip[op + Sp] = ip
          }
          if (Sp !== Op) {
            0 !== Sp && (pp = pp.slice(Sp)), op = cp(op, Op, Op = Sp + 3 * pp.length, 1) >>> 0;
            const ip = Up().subarray(op + Sp, op + Op);
            Sp += jp.encodeInto(pp, ip).written, op = cp(op, Op, Sp, 1) >>> 0
          }
          return qp = Sp, op
        }(pp, Rp.nkde, Rp.ljWH),
        Op = qp,
        op = Rp.nYFq(cp, Op, ip);
      if (op[1]) throw tp(op[0])
    }

    function Sp() {
      Rp.wMGg()
    }

    function xp() {
      return Rp.ldeY() >>> 0
    }

    function Lp() {
      return tp(Rp.fVrc())
    }

    function Yp() {
      return {
        __proto__: null,
        Rj2u: {
          __proto__: null,
          Qy1X: function(pp, ip) {
            return Ap(Error(Wp(pp, ip)))
          },
          BM4s: function() {
            return Ap(Rp.memory)
          },
          vPjQ: function(pp, ip) {
            throw new Error(Wp(pp, ip))
          },
          GzdH: function(pp, ip) {
            console.error(Wp(pp, ip))
          },
          MWkm: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (op.prototype[Symbol.dispose] = op.prototype.free);
    const Dp = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((pp => Rp?.__wbg_replaymodule_free(pp, 1)));

    function Ap(pp) {
      vp === wp.length && wp.push(wp.length + 1);
      const ip = vp;
      return vp = wp[ip], wp[ip] = pp, ip
    }
    let Pp = null;

    function Wp(pp, ip) {
      return function(pp, ip) {
        ep += ip, ep >= dp && (Hp = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Hp.decode(), ep = ip);
        return Hp.decode(Up().subarray(pp, pp + ip))
      }(pp >>> 0, ip)
    }
    let yp = null;

    function Up() {
      return null !== yp && 0 !== yp.byteLength || (yp = new Uint8Array(Rp.memory.buffer)), yp
    }
    let wp = new Array(1024).fill(void 0);
    wp.push(void 0, null, !0, !1);
    let vp = wp.length;

    function tp(pp) {
      const ip = function(pp) {
        return wp[pp]
      }(pp);
      return function(pp) {
        pp < 1028 || (wp[pp] = vp, vp = pp)
      }(pp), ip
    }
    let Hp = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Hp.decode();
    const dp = 2146435072;
    let ep = 0;
    const jp = new TextEncoder;
    "encodeInto" in jp || (jp.encodeInto = function(pp, ip) {
      const cp = jp.encode(pp);
      return ip.set(cp), {
        read: pp.length,
        written: cp.length
      }
    });
    let kp, mp, Rp, qp = 0;

    function Mp(pp, ip) {
      return mp = pp, Rp = pp.exports, kp = ip, Pp = null, yp = null, Rp.eGkn(), Rp
    }

    function Cp(pp) {
      if (void 0 !== Rp) return Rp;
      void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
        module: pp
      } = pp) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ip = Yp();
      pp instanceof WebAssembly.Module || (pp = new WebAssembly.Module(pp));
      return Mp(new WebAssembly.Instance(pp, ip), pp)
    }
    async function Ep(pp) {
      if (void 0 !== Rp) return Rp;
      void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
        module_or_path: pp
      } = pp) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ip = Yp();
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
      return Mp(cp, Op)
    }

    function Xp() {
      Rp = void 0, mp = void 0, Pp = null, yp = null, wp = new Array(1024).fill(void 0), wp.push(void 0, null, !0, !1), vp = wp.length
    }
    var lp = cp(2970),
      Qp = cp(6762);
    class Jp extends Error {
      stage;
      constructor(pp, ip) {
        super((0, lp.B)(pp, ip), {
          cause: ip
        }), this.name = "BloxdReplayWasmError", this.stage = pp
      }
    }
    let Bp = null,
      Np = null,
      Tp = Promise.resolve(),
      fp = 0,
      bp = null,
      hp = null;

    function ap() {
      if (hp) return Promise.reject(hp);
      if (Np) return Np;
      const pp = fp,
        ip = Tp,
        op = (async () => {
          let op;
          await ip, Bp ??= (0, lp.C)(new cp.U(cp(61588)), (0, Qp.e)("bloxd_wasm_replay"));
          try {
            op = await Bp
          } catch (Ip) {
            throw Bp = null, new Jp((0, lp.J)(Ip), Ip)
          }
          if (pp !== fp) throw new Jp("instantiate", new Error("unloaded while loading"));
          try {
            await Ep({
              module_or_path: op
            })
          } catch (Ip) {
            throw Xp(), new Jp("instantiate", Ip)
          }
          if (pp !== fp) throw Xp(), new Jp("instantiate", new Error("unloaded while loading"));
          return bp = Lp(), Op
        })();
      return Np = op, Tp = op.catch((() => {})), op.catch((() => {
        Np === op && (Np = null)
      })), op
    }

    function np() {
      hp || Gp()
    }

    function Fp() {
      return bp?.buffer.byteLength ?? 0
    }

    function gp(pp) {
      return hp || (hp = new Jp("call", pp), Gp()), hp
    }

    function Gp() {
      fp++, Xp(), Np = null, bp = null
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);