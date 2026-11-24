export const id = 65;
export const ids = [65];
export const modules = {
  61576: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/bloxd_wasm_recorder_bg.a17fd283244fec08ee33.wasm"
  },
  61572: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      BloxdRecorderWasmError: () => Jp,
      RECORDER_MODULE_ID: () => Qp,
      loadRecorderModule: () => Tp,
      markRecorderTrapped: () => bp,
      prefetchRecorderModule: () => fp,
      recorderMemoryBytes: () => ap,
      unloadRecorderModule: () => hp
    });
    var Op = {};
    cp.r(Op), cp.d(Op, {
      lIp: () => op,
      kxp: () => Ep,
      dA: () => Ip,
      default: () => Cp,
      initSync: () => Mp,
      eA: () => Sp,
      EIp: () => xp,
      jIp: () => Lp
    });
    class op {
      __destroy_into_raw() {
        const pp = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Dp.unregister(this), pp
      }
      free() {
        const pp = this.__destroy_into_raw();
        mp.AZgg(pp, 0)
      }
      busy() {
        return 0 !== mp.z75w(this.__wbg_ptr)
      }
      command(pp, ip) {
        return 0 !== mp.wGU5(this.__wbg_ptr, pp, ip)
      }
      kIp(pp) {
        return mp.By1P(this.__wbg_ptr, pp) >>> 0
      }
      uIp() {
        mp.XG0B(this.__wbg_ptr)
      }
      eIp() {
        return mp.qedR(this.__wbg_ptr) >>> 0
      }
      dIp() {
        return mp.QAgo(this.__wbg_ptr)
      }
      qIp() {
        return mp.kzJQ(this.__wbg_ptr) >>> 0
      }
      MIp() {
        return mp.iwQo(this.__wbg_ptr) >>> 0
      }
      feed(pp) {
        return mp.nj9i(this.__wbg_ptr, pp) >>> 0
      }
      constructor() {
        const pp = mp.yf38();
        return this.__wbg_ptr = pp, Dp.register(this, this.__wbg_ptr, this), this
      }
      RIp() {
        return mp.l8rH(this.__wbg_ptr) >>> 0
      }
      mxp() {
        return mp.WF0y(this.__wbg_ptr) >>> 0
      }
      HIp(pp, ip, cp) {
        return 0 !== mp.M1ov(this.__wbg_ptr, pp, ip, cp)
      }
      stage(pp) {
        return mp.AWM1(this.__wbg_ptr, pp) >>> 0
      }
      step() {
        return mp.yxRE(this.__wbg_ptr) >>> 0
      }
    }

    function Ip(pp, ip) {
      const cp = function(pp, ip, cp) {
          if (void 0 === cp) {
            const cp = ep.encode(pp),
              Op = ip(cp.length, 1) >>> 0;
            return yp().subarray(Op, Op + cp.length).set(cp), Rp = cp.length, Op
          }
          let Op = pp.length,
            op = ip(Op, 1) >>> 0;
          const Ip = yp();
          let Sp = 0;
          for (; Sp < Op; Sp++) {
            const ip = pp.charCodeAt(Sp);
            if (ip > 127) break;
            Ip[op + Sp] = ip
          }
          if (Sp !== Op) {
            0 !== Sp && (pp = pp.slice(Sp)), op = cp(op, Op, Op = Sp + 3 * pp.length, 1) >>> 0;
            const ip = yp().subarray(op + Sp, op + Op);
            Sp += ep.encodeInto(pp, ip).written, op = cp(op, Op, Sp, 1) >>> 0
          }
          return Rp = Sp, op
        }(pp, mp.pARf, mp.KBSS),
        Op = Rp,
        op = mp.Zzvn(cp, Op, ip);
      if (op[1]) throw vp(op[0])
    }

    function Sp() {
      mp.P1jE()
    }

    function xp() {
      return mp.P2m9() >>> 0
    }

    function Lp() {
      return vp(mp.nG0g())
    }

    function Yp() {
      return {
        __proto__: null,
        oySu: {
          __proto__: null,
          YYw2: function(pp, ip) {
            return Ap(Error(Pp(pp, ip)))
          },
          isAq: function() {
            return Ap(mp.memory)
          },
          j52B: function(pp, ip) {
            throw new Error(Pp(pp, ip))
          },
          JGLJ: function(pp, ip) {
            console.error(Pp(pp, ip))
          },
          AWS0: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (op.prototype[Symbol.dispose] = op.prototype.free);
    const Dp = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((pp => mp?.__wbg_recordermodule_free(pp, 1)));

    function Ap(pp) {
      wp === Up.length && Up.push(Up.length + 1);
      const ip = wp;
      return wp = Up[ip], Up[ip] = pp, ip
    }

    function Pp(pp, ip) {
      return function(pp, ip) {
        dp += ip, dp >= Hp && (tp = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), tp.decode(), dp = ip);
        return tp.decode(yp().subarray(pp, pp + ip))
      }(pp >>> 0, ip)
    }
    let Wp = null;

    function yp() {
      return null !== Wp && 0 !== Wp.byteLength || (Wp = new Uint8Array(mp.memory.buffer)), Wp
    }
    let Up = new Array(1024).fill(void 0);
    Up.push(void 0, null, !0, !1);
    let wp = Up.length;

    function vp(pp) {
      const ip = function(pp) {
        return Up[pp]
      }(pp);
      return function(pp) {
        pp < 1028 || (Up[pp] = wp, wp = pp)
      }(pp), ip
    }
    let tp = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    tp.decode();
    const Hp = 2146435072;
    let dp = 0;
    const ep = new TextEncoder;
    "encodeInto" in ep || (ep.encodeInto = function(pp, ip) {
      const cp = ep.encode(pp);
      return ip.set(cp), {
        read: pp.length,
        written: cp.length
      }
    });
    let jp, kp, mp, Rp = 0;

    function qp(pp, ip) {
      return kp = pp, mp = pp.exports, jp = ip, Wp = null, mp.SiTI(), mp
    }

    function Mp(pp) {
      if (void 0 !== mp) return mp;
      void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
        module: pp
      } = pp) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ip = Yp();
      pp instanceof WebAssembly.Module || (pp = new WebAssembly.Module(pp));
      return qp(new WebAssembly.Instance(pp, ip), pp)
    }
    async function Cp(pp) {
      if (void 0 !== mp) return mp;
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
      return qp(cp, Op)
    }

    function Ep() {
      mp = void 0, kp = void 0, Wp = null, Up = new Array(1024).fill(void 0), Up.push(void 0, null, !0, !1), wp = Up.length
    }
    var Xp = cp(2970),
      lp = cp(6762);
    const Qp = 2;
    class Jp extends Error {
      stage;
      constructor(pp, ip) {
        super((0, Xp.B)(pp, ip), {
          cause: ip
        }), this.name = "BloxdRecorderWasmError", this.stage = pp
      }
    }
    let Bp = null;
    const Np = function(pp) {
      let ip = null,
        cp = null,
        Op = null,
        op = null;
      const Ip = async () => {
        let cp = null;
        try {
          return cp = ip ??= (0, Xp.C)(pp.url(), (0, lp.e)(pp.name)), await cp
        } catch (Op) {
          throw ip === cp && (ip = null), pp.error((0, Xp.J)(Op), Op)
        }
      };
      return {
        load: () => {
          if (op) return Promise.reject(op);
          if (cp) return cp;
          const ip = (async () => {
            const ip = await Ip();
            try {
              await pp.init(ip)
            } catch (cp) {
              throw pp.error("instantiate", cp)
            }
            return pp.bindings
          })();
          cp = ip, Op = ip;
          const Sp = () => {
            Op === ip && (Op = null)
          };
          return ip.then(Sp, (() => {
            Sp(), cp === ip && (cp = null)
          })), ip
        },
        prefetch: async () => {
          op || cp || await Ip()
        },
        markTrapped: ip => (op ??= pp.error("call", ip), op),
        unload: () => {
          op || !pp.reset || Op || (pp.reset(), cp = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new cp.U(cp(61576)),
      init: async pp => {
        await Cp({
          module_or_path: pp
        }), Bp = Lp()
      },
      bindings: Op,
      error: (pp, ip) => new Jp(pp, ip),
      reset: () => {
        Ep(), Bp = null
      }
    });

    function Tp() {
      return Np.load()
    }

    function fp() {
      return Np.prefetch()
    }

    function bp(pp) {
      return Np.markTrapped(pp)
    }

    function hp() {
      Np.unload()
    }

    function ap() {
      return Bp?.buffer.byteLength ?? 0
    }
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
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);