export const id = 136;
export const ids = [136];
export const modules = {
  6758: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      loadPageShaderPackCompiler: () => yi
    });
    var Op = {};
    cp.r(Op), cp.d(Op, {
      Gop: () => op,
      ipp: () => Ip,
      default: () => gp,
      rop: () => Sp,
      Zop: () => xp,
      initSync: () => Fp,
      eA: () => Lp,
      eOp: () => Yp,
      zop: () => Dp,
      sop: () => Ap,
      Ql: () => Pp,
      Kop: () => Wp,
      Rl: () => yp,
      Vop: () => Up
    });
    class op {
      static __wrap(pp) {
        const ip = Object.create(op.prototype);
        return ip.__wbg_ptr = pp, vp.register(ip, ip.__wbg_ptr, ip), ip
      }
      __destroy_into_raw() {
        const pp = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vp.unregister(this), pp
      }
      free() {
        const pp = this.__destroy_into_raw();
        hp.wrFy(pp, 0)
      }
      get pIp() {
        let pp, ip;
        try {
          const cp = hp.WCyz(this.__wbg_ptr);
          return pp = cp[0], ip = cp[1], kp(cp[0], cp[1])
        } finally {
          hp.iSgp(pp, ip, 1)
        }
      }
      get features() {
        const pp = hp.AOO5(this.__wbg_ptr);
        var ip = Hp(pp[0], pp[1]);
        return hp.iSgp(pp[0], 4 * pp[1], 4), ip
      }
      get hooks() {
        const pp = hp.ktzV(this.__wbg_ptr);
        var ip = dp(pp[0], pp[1]).slice();
        return hp.iSgp(pp[0], 1 * pp[1], 1), ip
      }
      mapValidationMessage(pp, ip, cp, Op, op) {
        let Ip, Sp;
        try {
          const Yp = hp.q0m7(this.__wbg_ptr, pp, ip, cp, tp(Op), tp(op));
          var xp = Yp[0],
            Lp = Yp[1];
          if (Yp[3]) throw xp = 0, Lp = 0, Qp(Yp[2]);
          return Ip = xp, Sp = Lp, kp(xp, Lp)
        } finally {
          hp.iSgp(Ip, Sp, 1)
        }
      }
      get moduleCodes() {
        const pp = hp.VyvH(this.__wbg_ptr);
        var ip = Hp(pp[0], pp[1]);
        return hp.iSgp(pp[0], 4 * pp[1], 4), ip
      }
      get iIp() {
        let pp, ip;
        try {
          const cp = hp.PA2t(this.__wbg_ptr);
          return pp = cp[0], ip = cp[1], kp(cp[0], cp[1])
        } finally {
          hp.iSgp(pp, ip, 1)
        }
      }
      get reads() {
        const pp = hp.BokA(this.__wbg_ptr);
        var ip = Hp(pp[0], pp[1]);
        return hp.iSgp(pp[0], 4 * pp[1], 4), ip
      }
      get validationModuleCodes() {
        const pp = hp.SfgI(this.__wbg_ptr);
        var ip = Hp(pp[0], pp[1]);
        return hp.iSgp(pp[0], 4 * pp[1], 4), ip
      }
      get validationModuleKeys() {
        const pp = hp.TJuC(this.__wbg_ptr);
        var ip = dp(pp[0], pp[1]).slice();
        return hp.iSgp(pp[0], 1 * pp[1], 1), ip
      }
      get variantFlags() {
        const pp = hp.fDaz(this.__wbg_ptr);
        var ip = dp(pp[0], pp[1]).slice();
        return hp.iSgp(pp[0], 1 * pp[1], 1), ip
      }
    }

    function Ip(pp, ip, cp, Op, Ip, Sp, xp) {
      const Lp = lp(pp, hp.tVei),
        Yp = ap,
        Dp = lp(ip, hp.tVei),
        Ap = ap,
        Pp = lp(cp, hp.tVei),
        Wp = ap,
        yp = Xp(Op, hp.tVei),
        Up = ap,
        wp = lp(Ip, hp.tVei),
        vp = ap,
        tp = lp(Sp, hp.tVei),
        Hp = ap,
        dp = lp(xp, hp.tVei),
        ep = ap,
        jp = hp.VDbR(Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep);
      if (jp[2]) throw Qp(jp[1]);
      return op.__wrap(jp[0])
    }

    function Sp() {
      const pp = hp.LhoZ();
      var ip = Hp(pp[0], pp[1]);
      return hp.iSgp(pp[0], 4 * pp[1], 4), ip
    }

    function xp() {
      const pp = hp.M5N3();
      var ip = Hp(pp[0], pp[1]);
      return hp.iSgp(pp[0], 4 * pp[1], 4), ip
    }

    function Lp() {
      hp.YA50()
    }

    function Yp(pp, ip, cp, Op, op) {
      let Ip, Sp;
      try {
        const Yp = lp(pp, hp.tVei),
          Dp = ap,
          Ap = Xp(ip, hp.tVei),
          Pp = ap,
          Wp = lp(cp, hp.tVei),
          yp = ap,
          Up = Xp(Op, hp.tVei),
          wp = ap,
          vp = function(pp, ip) {
            const cp = ip(1 * pp.length, 1) >>> 0;
            return qp().set(pp, cp / 1), ap = pp.length, cp
          }(op, hp.tVei),
          tp = ap,
          Hp = hp.Mz4m(Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp);
        var xp = Hp[0],
          Lp = Hp[1];
        if (Hp[3]) throw xp = 0, Lp = 0, Qp(Hp[2]);
        return Ip = xp, Sp = Lp, kp(xp, Lp)
      } finally {
        hp.iSgp(Ip, Sp, 1)
      }
    }

    function Dp() {
      let pp, ip;
      try {
        const cp = hp.xMyI();
        return pp = cp[0], ip = cp[1], kp(cp[0], cp[1])
      } finally {
        hp.iSgp(pp, ip, 1)
      }
    }

    function Ap(pp) {
      let ip, cp;
      try {
        const Ip = hp.VoH8(pp);
        var Op = Ip[0],
          op = Ip[1];
        if (Ip[3]) throw Op = 0, op = 0, Qp(Ip[2]);
        return ip = Op, cp = op, kp(Op, op)
      } finally {
        hp.iSgp(ip, cp, 1)
      }
    }

    function Pp() {
      return hp.Wdv1() >>> 0
    }

    function Wp() {
      let pp, ip;
      try {
        const cp = hp.uV5E();
        return pp = cp[0], ip = cp[1], kp(cp[0], cp[1])
      } finally {
        hp.iSgp(pp, ip, 1)
      }
    }

    function yp(pp, ip) {
      let cp, Op;
      try {
        const Sp = lp(pp, hp.tVei),
          xp = ap,
          Lp = Xp(ip, hp.tVei),
          Yp = ap,
          Dp = hp.ibSV(Sp, xp, Lp, Yp);
        var op = Dp[0],
          Ip = Dp[1];
        if (Dp[3]) throw op = 0, Ip = 0, Qp(Dp[2]);
        return cp = op, Op = Ip, kp(op, Ip)
      } finally {
        hp.iSgp(cp, Op, 1)
      }
    }

    function Up(pp) {
      let ip, cp;
      try {
        const Ip = hp.hlBq(tp(pp));
        var Op = Ip[0],
          op = Ip[1];
        if (Ip[3]) throw Op = 0, op = 0, Qp(Ip[2]);
        return ip = Op, cp = op, kp(Op, op)
      } finally {
        hp.iSgp(ip, cp, 1)
      }
    }

    function wp() {
      return {
        __proto__: null,
        I55b: {
          __proto__: null,
          zRQP: function(pp, ip) {
            return tp(Error(kp(pp, ip)))
          },
          cbpg: function(pp) {
            return null === Mp(pp)
          },
          kLY8: function(pp) {
            return "string" === typeof Mp(pp)
          },
          gK6A: function(pp, ip) {
            const cp = Mp(ip),
              Op = "string" === typeof cp ? cp : void 0;
            var op, Ip = void 0 === (op = Op) || null === op ? 0 : function(pp, ip, cp) {
                if (void 0 === cp) {
                  const cp = Tp.encode(pp),
                    Op = ip(cp.length, 1) >>> 0;
                  return qp().subarray(Op, Op + cp.length).set(cp), ap = cp.length, Op
                }
                let Op = pp.length,
                  op = ip(Op, 1) >>> 0;
                const Ip = qp();
                let Sp = 0;
                for (; Sp < Op; Sp++) {
                  const ip = pp.charCodeAt(Sp);
                  if (ip > 127) break;
                  Ip[op + Sp] = ip
                }
                if (Sp !== Op) {
                  0 !== Sp && (pp = pp.slice(Sp)), op = cp(op, Op, Op = Sp + 3 * pp.length, 1) >>> 0;
                  const ip = qp().subarray(op + Sp, op + Op);
                  Sp += Tp.encodeInto(pp, ip).written, op = cp(op, Op, Sp, 1) >>> 0
                }
                return ap = Sp, op
              }(Op, hp.tVei, hp.xjAB),
              Sp = ap;
            jp().setInt32(pp + 4, Sp, !0), jp().setInt32(pp + 0, Ip, !0)
          },
          nmQu: function(pp, ip) {
            throw new Error(kp(pp, ip))
          },
          IAYp: function(pp, ip) {
            return Mp(pp).charCodeAt(ip >>> 0)
          },
          FHAs: function(pp, ip) {
            console.error(kp(pp, ip))
          },
          RWu7: function(pp) {
            return Mp(pp).length
          },
          mnPt: function(pp, ip) {
            return tp(kp(pp, ip))
          },
          M6FT: function(pp) {
            Qp(pp)
          }
        }
      }
    }
    Symbol.dispose && (op.prototype[Symbol.dispose] = op.prototype.free);
    const vp = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((pp => hp.wrFy(pp, 1)));

    function tp(pp) {
      Ep === Cp.length && Cp.push(Cp.length + 1);
      const ip = Ep;
      return Ep = Cp[ip], Cp[ip] = pp, ip
    }

    function Hp(pp, ip) {
      pp >>>= 0;
      const cp = jp(),
        Op = [];
      for (let op = pp; op < pp + 4 * ip; op += 4) Op.push(Qp(cp.getUint32(op, !0)));
      return Op
    }

    function dp(pp, ip) {
      return pp >>>= 0, qp().subarray(pp / 1, pp / 1 + ip)
    }
    let ep = null;

    function jp() {
      return null !== ep && ep.buffer === hp.memory.buffer || (ep = new DataView(hp.memory.buffer)), ep
    }

    function kp(pp, ip) {
      return function(pp, ip) {
        Np += ip, Np >= Bp && (Jp = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Jp.decode(), Np = ip);
        return Jp.decode(qp().subarray(pp, pp + ip))
      }(pp >>> 0, ip)
    }
    let mp = null;
    let Rp = null;

    function qp() {
      return null !== Rp && 0 !== Rp.byteLength || (Rp = new Uint8Array(hp.memory.buffer)), Rp
    }

    function Mp(pp) {
      return Cp[pp]
    }
    let Cp = new Array(1024).fill(void 0);
    Cp.push(void 0, null, !0, !1);
    let Ep = Cp.length;

    function Xp(pp, ip) {
      const cp = ip(4 * pp.length, 4) >>> 0;
      return (null !== mp && 0 !== mp.byteLength || (mp = new Uint32Array(hp.memory.buffer)), mp).set(pp, cp / 4), ap = pp.length, cp
    }

    function lp(pp, ip) {
      const cp = ip(4 * pp.length, 4) >>> 0,
        Op = jp();
      for (let op = 0; op < pp.length; op++) Op.setUint32(cp + 4 * op, tp(pp[op]), !0);
      return ap = pp.length, cp
    }

    function Qp(pp) {
      const ip = Mp(pp);
      return function(pp) {
        pp < 1028 || (Cp[pp] = Ep, Ep = pp)
      }(pp), ip
    }
    let Jp = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Jp.decode();
    const Bp = 2146435072;
    let Np = 0;
    const Tp = new TextEncoder;
    "encodeInto" in Tp || (Tp.encodeInto = function(pp, ip) {
      const cp = Tp.encode(pp);
      return ip.set(cp), {
        read: pp.length,
        written: cp.length
      }
    });
    let fp, bp, hp, ap = 0;

    function np(pp, ip) {
      return bp = pp, hp = pp.exports, fp = ip, ep = null, mp = null, Rp = null, hp.MKfo(), hp
    }

    function Fp(pp) {
      if (void 0 !== hp) return hp;
      void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
        module: pp
      } = pp) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ip = wp();
      pp instanceof WebAssembly.Module || (pp = new WebAssembly.Module(pp));
      return np(new WebAssembly.Instance(pp, ip), pp)
    }
    async function gp(pp) {
      if (void 0 !== hp) return hp;
      void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
        module_or_path: pp
      } = pp) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ip = wp();
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
      return np(cp, Op)
    }
    var Gp = cp(2970),
      rp = cp(6762);
    class Zp extends Error {
      stage;
      constructor(pp, ip) {
        super((0, Gp.B)(pp, ip), {
          cause: ip
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = pp
      }
    }
    let zp = null,
      sp = null;

    function Kp() {
      return zp ? Promise.resolve(zp) : (sp || (sp = async function() {
        let pp;
        try {
          pp = await (0, Gp.C)(new cp.U(cp(6770)), (0, rp.e)("bloxd_wasm_shader_pack"))
        } catch (ip) {
          throw new Zp((0, Gp.J)(ip), ip)
        }
        try {
          await gp({
            module_or_path: pp
          })
        } catch (ip) {
          throw new Zp("instantiate", ip)
        }
        return zp = Op, zp
      }(), sp.then(void 0, (() => {
        sp = null
      }))), sp)
    }
    var Vp = cp(6780);

    function ii(pp) {
      let [ip, cp, Op, op] = pp;
      const Ip = {
        file: ip,
        line: cp,
        message: Op
      };
      return op && (Ip.variants = op.map(Vp.m)), Ip
    }

    function ci(pp) {
      return JSON.parse(pp).map(ii)
    }

    function Oi(pp, ip) {
      if (!Number.isInteger(pp) || pp < 0 || pp > 4294967295) throw new Error(`${ip} ${pp} is not a whole number from 0 to 4294967295`);
      return pp
    }

    function oi(pp) {
      return [pp.named.map((pp => pp.name)), Uint32Array.from(pp.named, (pp => Oi(pp.id, "Texture ID")))]
    }
    const Ii = new WeakMap;
    const Si = new WeakMap,
      xi = new WeakSet;

    function Li(pp, ip) {
      if (xi.has(pp)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return ip()
      } catch (cp) {
        throw cp instanceof WebAssembly.RuntimeError && xi.add(pp), cp
      }
    }

    function Yi(pp) {
      let ip = Si.get(pp);
      if (!ip) {
        let cp, Op;
        ip = {
          ipp: (ip, cp) => Li(pp, (() => function(pp, ip, cp) {
            const Op = pp.ipp(ip.map((pp => pp.path)), ip.map((pp => pp.source)), ...oi(cp), cp.aliases.map((pp => pp.name)), cp.aliases.map((pp => pp.texture)), cp.aliases.map((pp => pp.kind)));
            let op = !1;
            try {
              const pp = Op.validationModuleCodes,
                ip = Array.from(Op.validationModuleKeys, ((ip, cp) => ({
                  key: (0, Vp.m)(ip),
                  code: pp[cp]
                }))),
                cp = {
                  errors: ci(Op.pIp),
                  offInStrict: ci(Op.iIp),
                  variants: (0, Vp.g)(Op),
                  validationModules: ip,
                  features: Op.features
                };
              return ip.forEach(((pp, ip) => {
                Ii.set(pp, {
                  pack: Op,
                  index: ip
                })
              })), op = ip.length > 0, cp
            } finally {
              op || Op.free()
            }
          }(pp, ip, cp))),
          mapValidationMessage: (ip, cp) => {
            const Op = Ii.get(ip);
            if (!Op) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return ii(JSON.parse(Li(pp, (() => Op.pack.mapValidationMessage(Op.index, cp.lineNum, cp.linePos, cp.message, cp.type)))))
          },
          eOp: ip => Li(pp, (() => function(pp, ip) {
            const cp = new Int32Array(ip.length),
              Op = [];
            return ip.forEach(((pp, ip) => {
              cp[ip] = pp.variants ? pp.variants.length : -1;
              for (const cp of pp.variants ?? []) Op.push((0, Vp.i)(cp))
            })), ci(pp.eOp(ip.map((pp => pp.file)), Uint32Array.from(ip, (pp => Oi(pp.line, "Diagnostic line"))), ip.map((pp => pp.message)), cp, Uint8Array.from(Op)))
          }(pp, ip))),
          Rl: ip => Li(pp, (() => pp.Rl(...oi(ip)))),
          get SHADER_PACK_HEADER_VERSION() {
            return cp ??= Li(pp, (() => pp.Kop())), cp
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Op ??= Li(pp, (() => {
              const ip = pp.Zop();
              return pp.rop().map(((pp, cp) => ({
                path: pp,
                source: ip[cp]
              })))
            })), Op
          },
          Vop: ip => Li(pp, (() => pp.Vop(ip))),
          resolveHeader: ip => Li(pp, (() => pp.sop((0, Vp.i)(ip)))),
          zop: () => Li(pp, (() => pp.zop()))
        }, Si.set(pp, ip)
      }
      return ip
    }
    var Di = cp(3322),
      Ai = cp(6772);
    const Pi = "bloxdShaderPackWasmFailureReported";
    let Wi = null;

    function yi() {
      return Wi ??= async function() {
        if ("undefined" === typeof WebAssembly) return Ui("unsupported", "This browser has no WebAssembly"), null;
        const pp = (0, Ai.loadShaderPackTextures)().then((() => !0), (pp => (console.error("Could not load the shader pack textures, so shader packs can't run", pp), !1)));
        try {
          const ip = await async function() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kp;
            return Yi(await pp())
          }();
          return await pp ? ip : null
        } catch (ip) {
          const pp = ip instanceof Error ? ip.message : String(ip);
          return Ui(Di.d[ip instanceof Zp ? ip.stage : "instantiate"], pp), null
        }
      }(), Wi
    }

    function Ui(pp, ip) {
      (0, Di.j)(Pi, `Shader pack wasm ${pp}, so shader packs can't run: ${ip}`, ip, `shader_pack_${pp}`)
    }
  },
  6770: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/bloxd_wasm_shader_pack_bg.2232ef6cb61f10878c8f.wasm"
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
  6780: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => dp,
      g: () => ep,
      i: () => tp,
      m: () => vp
    });
    var Op = cp(6788);
    const op = 6,
      Ip = 3,
      Sp = 1,
      xp = 2,
      Lp = 4,
      Yp = 8,
      Dp = 16,
      Ap = 32,
      Pp = 64,
      Wp = 128,
      yp = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Up(pp) {
      if (!pp) return 0;
      const ip = yp.indexOf(pp);
      if (ip <= 0) throw new Error(`"${pp}" is not a shader pack hook function`);
      return ip
    }

    function wp(pp) {
      if (0 === pp) return null;
      const ip = yp[pp];
      if (void 0 === ip) throw new Error(`${pp} is not a shader pack hook function id`);
      return ip
    }

    function vp(pp) {
      const ip = Op.d.length;
      return {
        strict: pp >= ip,
        program: Op.d[pp % ip]
      }
    }

    function tp(pp) {
      return Number(pp.strict) * Op.d.length + Op.d.indexOf(pp.program)
    }

    function Hp(pp) {
      return "" === pp ? [] : pp.split(" ")
    }

    function dp(pp) {
      const ip = {
        variantFlags: new Uint8Array(op),
        hooks: new Uint8Array(op * Ip),
        moduleCodes: Array(op).fill(""),
        reads: Array(2 * op).fill("")
      };
      for (const cp of pp) {
        const pp = tp(cp.key),
          Op = (pp, ip) => null === cp.hooks.surface || cp.reads.fragment.includes(pp) ? 0 : ip;
        ip.variantFlags[pp] = (cp.sceneDepth ? Sp : 0) | (cp.movesVertices ? xp : 0) | (cp.sunShadow ? Lp : 0) | (cp.airShadow ? Yp : 0) | (cp.discards ? Dp : 0) | Op("localPosition", Ap) | Op("enchantSpeed", Pp) | Op("enchantTier", Wp), ip.hooks[pp * Ip] = Up(cp.hooks.vertex), ip.hooks[pp * Ip + 1] = Up(cp.hooks.surface), ip.hooks[pp * Ip + 2] = Up(cp.hooks.light), ip.moduleCodes[pp] = cp.moduleCode, ip.reads[2 * pp] = cp.reads.vertex.join(" "), ip.reads[2 * pp + 1] = cp.reads.fragment.join(" ")
      }
      return ip
    }

    function ep(pp) {
      const {
        hooks: ip,
        moduleCodes: cp,
        reads: Op
      } = pp;
      return Array.from(pp.variantFlags, ((pp, op) => {
        const Ap = op * Ip;
        return {
          key: vp(op),
          hooks: {
            vertex: wp(ip[Ap]),
            surface: wp(ip[Ap + 1]),
            light: wp(ip[Ap + 2])
          },
          moduleCode: cp[op],
          sceneDepth: 0 !== (pp & Sp),
          sunShadow: 0 !== (pp & Lp),
          airShadow: 0 !== (pp & Yp),
          movesVertices: 0 !== (pp & xp),
          discards: 0 !== (pp & Dp),
          reads: {
            vertex: Hp(Op[2 * op]),
            fragment: Hp(Op[2 * op + 1])
          }
        }
      }))
    }
  },
  6788: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op,
      e: () => Sp,
      f: () => xp,
      h: () => op,
      i: () => Ip
    });
    const Op = ["terrain", "liquid", "model"];

    function op() {
      const pp = [];
      for (const ip of [!1, !0])
        for (const cp of Op) pp.push({
          strict: ip,
          program: cp
        });
      return pp
    }

    function Ip(pp) {
      return `${pp.strict?"strict":"allow"}.${pp.program}`
    }

    function Sp(pp) {
      return !pp.hooks.vertex && !pp.hooks.surface && !pp.hooks.light
    }

    function xp(pp, ip) {
      return "off" !== ip && (null === pp || pp.some((pp => pp.key.strict === ("strict" === ip) && !Sp(pp))))
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);