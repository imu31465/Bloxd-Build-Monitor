export const id = 140;
export const ids = [140];
export const modules = {
  38993: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp,
      h: () => Pp,
      l: () => Wp,
      p: () => wp,
      q: () => Ap,
      t: () => Dp,
      x: () => Sp,
      y: () => yp
    });
    var Op = cp(316),
      op = cp(1749);
    const Ip = "A valid external Instance reference no longer exists.";

    function Sp(pp) {
      return pp.includes(Ip)
    }
    const xp = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      Lp = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const Yp = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function Dp(pp, ip) {
      return pp ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(pp) {
        var ip;
        const cp = null !== (ip = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(pp)) && void 0 !== ip ? ip : /failed with ([A-Z][A-Z0-9_]+)/.exec(pp);
        return cp ? cp[1] : Sp(pp) ? "gpu_process_lost" : "other"
      }(ip)
    }

    function Ap(pp) {
      return `${(null===pp||void 0===pp?void 0:pp.vendor)||"unknown vendor"} ${(null===pp||void 0===pp?void 0:pp.architecture)||"unknown architecture"}`
    }

    function Pp(pp) {
      return vp(pp)[1]
    }

    function Wp(pp) {
      return vp(pp)[2]
    }

    function yp(pp, ip, cp) {
      const op = (0, Op.i)(),
        Ip = null !== op && op >= ip,
        Sp = document.hidden ? "hidden" : Ip ? "shown" : "visible",
        xp = Ip ? cp - op : null;
      return {
        page: null === xp ? Sp : `${Sp}${Pp(xp)}`,
        code: `${pp}_${null===xp?Sp:`${Sp}_${Wp(xp)}`}_${Up(cp)}`
      }
    }

    function Up(pp) {
      if ((0, op.d)()) return "ad_open";
      const ip = (0, op.c)();
      return null === ip ? "ad_none" : `ad_${Wp(pp-ip.endedAt)}_${ip.pageHid?"h":"v"}`
    }

    function wp(pp) {
      return tp(Lp, pp)[1]
    }

    function vp(pp) {
      return tp(xp, pp)
    }

    function tp(pp, ip) {
      var cp;
      return null !== (cp = pp.find((pp => {
        let [cp] = pp;
        return ip < cp
      }))) && void 0 !== cp ? cp : pp[pp.length - 1]
    }
  },
  40842: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      d: () => Dp,
      f: () => Sp,
      g: () => op,
      i: () => xp,
      l: () => Yp
    });
    class Op extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function op(pp) {
      return pp instanceof RangeError && /call stack/i.test(pp.message) || pp instanceof Error && "InternalError" === pp.name && /recursion/i.test(pp.message)
    }
    const Ip = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Sp(pp) {
      var ip;
      return pp instanceof WebAssembly.RuntimeError || pp instanceof Op || op(pp) && Ip.test(null !== (ip = pp.stack) && void 0 !== ip ? ip : "")
    }

    function xp(pp, ip) {
      if (Sp(pp)) throw pp;
      console.error(ip, pp)
    }

    function Lp(pp, ip, cp, op, Ip) {
      if (ip % op !== 0 || ip + cp > pp.byteLength) throw new Op(`${Ip}: ${cp} bytes at ${ip}, ${op}-aligned, outside ${pp.byteLength} bytes of memory`)
    }

    function Yp(pp, ip, cp, Op, op) {
      return 0 === cp ? null : (Lp(ip, cp, Op * pp.BYTES_PER_ELEMENT, pp.BYTES_PER_ELEMENT, op), new pp(ip, cp, Op))
    }

    function Dp(pp, ip, cp, Op, op) {
      return 0 === ip ? null : (Lp(pp, ip, cp, Op, op), new DataView(pp, ip, cp))
    }
  },
  40911: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => wi,
      E: () => gp,
      F: () => rp,
      J: () => hp,
      N: () => Kp,
      Q: () => sp,
      T: () => Zp,
      V: () => ii,
      Y: () => Pi,
      _: () => Vp,
      ab: () => zp,
      e: () => Mp,
      eb: () => ci,
      gb: () => Ii,
      i: () => Wi,
      j: () => vi,
      k: () => xi,
      kb: () => Li,
      mb: () => Ep,
      o: () => Ai,
      s: () => oi,
      w: () => Di,
      z: () => Yi
    });
    var Op = cp(322),
      op = cp(257),
      Ip = cp(259),
      Sp = cp(25),
      xp = cp(2908),
      Lp = cp(681),
      Yp = cp(4602),
      Dp = cp(2865),
      Ap = cp(3564),
      Pp = cp(104),
      Wp = cp(316),
      yp = cp(44),
      Up = cp(314),
      wp = cp(118),
      vp = cp(652),
      tp = cp(129),
      Hp = cp(120),
      dp = cp(4911),
      ep = cp(40920),
      jp = cp(1819),
      kp = cp(40923),
      mp = cp(34379),
      Rp = cp(40930);
    const qp = "bloxd-webgpuOffAfterLoss",
      Mp = "context:webgl",
      Cp = "probe:threw";

    function Ep(pp) {
      let ip;
      try {
        ip = pp.getContext("webgl", {
          powerPreference: tp.c
        })
      } catch {
        ip = null
      }
      if (null === ip) return null;
      let cp = null;
      try {
        const pp = ip.getParameter(ip.MAX_TEXTURE_SIZE);
        cp = "number" === typeof pp && pp > 0 ? pp : null
      } catch {
        cp = null
      }
      try {
        var Op;
        null === (Op = ip.getExtension("WEBGL_lose_context")) || void 0 === Op || Op.loseContext()
      } catch {}
      return cp
    }
    const Xp = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      lp = "mali_valhall",
      Qp = new Set(["nvidia_pre_turing"]),
      Jp = new Set(["intel_gen7_8"]);

    function Bp(pp) {
      return function(pp) {
        try {
          return pp()
        } catch {
          return null
        }
      }((() => {
        var ip, cp, Op, Sp;
        const xp = null !== (ip = null === (cp = pp.info) || void 0 === cp ? void 0 : cp.vendor) && void 0 !== ip ? ip : "";
        return "windows" === (0, Pp.getOperatingSystem)() && "" !== xp && "intel" !== (0, Pp.normaliseGpuVendor)(xp) ? null : ((0, Pp.seedGpuVendor)(xp), Lp = (0, op.i)(), Yp = (0, Ip.f)(xp, null !== (Op = null === (Sp = pp.info) || void 0 === Sp ? void 0 : Sp.architecture) && void 0 !== Op ? Op : ""), Xp.has(Lp) ? "android_arm" === Lp && Yp === lp ? "webgpu_default" : "webgl_default" : null);
        var Lp, Yp
      }))
    }

    function Np() {
      var pp;
      return {
        gpu: null !== (pp = navigator.gpu) && void 0 !== pp ? pp : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(pp) {
          let ip, cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.d;
          try {
            ip = pp.getContext("webgl")
          } catch {
            ip = null
          }
          if (null === ip) return [Mp];
          const Op = [];
          try {
            for (const op of cp.extensions) null === ip.getExtension(op) && Op.push(op);
            for (const [op, Ip] of Object.entries(cp.limits)) {
              const pp = ip[op],
                cp = "number" === typeof pp ? ip.getParameter(pp) : null;
              ("number" !== typeof cp || cp < Ip) && Op.push(`limit:${op}`)
            }
            const pp = ip.getShaderPrecisionFormat(ip.VERTEX_SHADER, ip.HIGH_FLOAT);
            (null === pp || pp.precision < cp.vertexHighFloatBits) && Op.push("precision:vertex_high_float")
          } catch {
            Op.push(Cp)
          }
          try {
            var op;
            null === (op = ip.getExtension("WEBGL_lose_context")) || void 0 === op || op.loseContext()
          } catch {}
          return Op
        }(document.createElement("canvas")),
        offAfterLoss: pp => fp((() => pp ? (0, Up.E)() : Sp.c.isWebGpuOffAfterLoss())),
        oldIntelDriver: pp => fp((() => (0, wp.g)(pp))),
        intelGen9: pp => fp((() => (0, wp.o)(pp))),
        storeIntelGen9Verdict: pp => {
          yp.h.setItem(wp.A, pp)
        },
        gpuClassWebGlArm: Bp,
        storeGpuClassVerdict: pp => {
          yp.h.setItem(wp.z, pp)
        },
        gpuClassOnWebGl: pp => (0, vp.c)(pp),
        webGlDefaultFamily: pp => Jp.has((0, Ip.f)(pp.vendor, pp.architecture)),
        storeWebGlDefaultFamilyVerdict: pp => {
          yp.h.setItem(wp.I, pp)
        },
        override: () => Tp(),
        claimed: () => bp((0, Lp.j)()),
        webGpuSetting: () => {
          const pp = yp.h.getItem(Op.tc);
          return "boolean" === typeof pp ? pp : null
        },
        heldBack: () => vp.e,
        storeHoldbackSpared: pp => {
          yp.h.setItem(wp.x, pp)
        },
        intelGen9OnWebGl: () => vp.g,
        Dy: () => fp((() => (0, Ap.e)(Pp.featureFlags.settings.canUseShaderPacks))),
        windows: () => fp((() => "windows" === (0, Pp.getOperatingSystem)())),
        defaultCompatibility: mp.b
      }
    }

    function Tp() {
      let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, xp.r)("render") && "webgl1" === (0, xp.o)("renderer")) return "webgl1";
      const ip = [() => new URLSearchParams(window.location.search).get(Dp.c), () => yp.h.getItem(Dp.g), () => {
        const ip = localStorage.getItem(qp);
        return null !== ip && pp && localStorage.removeItem(qp), "1" === ip ? "webgl2" : null
      }];
      for (const cp of ip) {
        let pp = null;
        try {
          pp = bp(cp())
        } catch {}
        if (null !== pp) return pp
      }
      return null
    }

    function fp(pp) {
      try {
        return pp()
      } catch {
        return !1
      }
    }

    function bp(pp) {
      return "lite" === pp ? "webgpu" : "webgl2" === pp || "babylon" === pp ? "webgl" : null
    }

    function hp(pp) {
      return "none" === pp || "compatibility_mode" === pp
    }
    async function ap() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Np();
      const ip = await async function(pp) {
        const ip = Fp(pp),
          {
            source: cp
          } = ip,
          Op = !ip.asked,
          op = "gpu" in ip && ip.heldBack,
          Sp = function(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return op && !hp(pp) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: cp
            } : {
              reason: pp,
              adapter: ip,
              source: cp
            }
          };
        if (!("gpu" in ip)) return Sp(ip.refused);
        let xp;
        try {
          xp = await (0, jp.k)((0, Hp.o)(ip.gpu, {
            compatibility: np(pp, ip)
          }), yi, `requestAdapter didn't settle in ${yi/1e3} s`)
        } catch {
          return Sp("adapter_error")
        }
        if ("string" === typeof xp) return Sp(xp);
        const {
          adapter: Lp,
          compatibility: Yp
        } = xp, Dp = (0, Hp.c)(Lp);
        if ((0, Hp.j)(Lp)) return Sp("software_adapter", Dp);
        const Ap = pp.windows() && function(pp) {
          return Qp.has((0, Ip.f)(pp.vendor, pp.architecture))
        }(Dp);
        if (pp.storeHoldbackSpared(Ap), op && !Ap) return Sp("webgl_holdback");
        const Pp = pp.intelGen9(Lp);
        pp.storeIntelGen9Verdict(Pp);
        const Wp = Pp ? null : pp.gpuClassWebGlArm(Lp);
        pp.storeGpuClassVerdict(null !== Wp && void 0 !== Wp && Wp);
        const yp = pp.webGlDefaultFamily(Dp);
        if (pp.storeWebGlDefaultFamilyVerdict(yp), Op && pp.oldIntelDriver(Lp)) return Sp("old_intel_driver", Dp);
        if ("default" === cp && Pp && pp.intelGen9OnWebGl()) return Sp("intel_gen9", Dp);
        if ("default" === cp && null !== Wp && pp.gpuClassOnWebGl(Wp)) return Sp("gpu_class_webgl", Dp);
        if ("default" === cp && yp) return Sp("gpu_wasm_arm", Dp);
        return Sp(Yp ? "compatibility_mode" : "none", Dp)
      }(pp);
      if (hp(ip.reason)) return {
        backend: "webgpu",
        ...ip
      };
      if ("webgl1" !== pp.override() && pp.webgl2()) return {
        backend: "webgl",
        ...ip
      };
      const cp = pp.webgl1();
      return 0 === cp.length ? {
        backend: "webgl1",
        ...ip
      } : {
        missing: cp
      }
    }

    function np(pp, ip) {
      let {
        source: cp,
        asked: Op
      } = ip;
      return Op || "default" === cp ? (0, mp.h)(Op, pp.defaultCompatibility) : void 0
    }

    function Fp(pp) {
      const ip = pp.override(),
        cp = pp.webGpuSetting(),
        Op = null === ip && !0 !== cp && pp.Dy(),
        op = null !== ip || null !== cp || Op ? null : pp.claimed(),
        Ip = null !== ip ? "override" : !0 === cp ? "setting" : Op ? "pack" : !1 === cp ? "setting" : null !== op ? "claim" : "default",
        Sp = function(pp) {
          return "override" === pp || "setting" === pp
        }(Ip);
      if ("webgl" === ip || "webgl1" === ip || "webgl" === op || "setting" === Ip && !1 === cp) return {
        source: Ip,
        asked: Sp,
        refused: "not_requested"
      };
      if (!pp.gpu) return {
        source: Ip,
        asked: Sp,
        refused: "no_webgpu_api"
      };
      const xp = "default" === Ip && pp.heldBack();
      return xp && !pp.windows() ? {
        source: Ip,
        asked: Sp,
        refused: "webgl_holdback"
      } : !Sp && pp.offAfterLoss("pack" === Ip) ? {
        source: Ip,
        asked: Sp,
        refused: xp ? "webgl_holdback" : "off_after_loss"
      } : {
        source: Ip,
        asked: Sp,
        heldBack: xp,
        gpu: pp.gpu
      }
    }

    function gp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...Np(),
          override: () => Tp(!1)
        },
        ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pp.isWebKit;
      try {
        if (!ip()) return !1;
        const cp = Fp(pp);
        return "gpu" in cp && !cp.heldBack
      } catch (cp) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", cp), !1
      }
    }
    let Gp = !1;
    async function rp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Np();
      if (null === pp) return null;
      const cp = await ap(ip);
      return Gp = !("missing" in cp) && "webgpu" === cp.backend && "claim" === cp.source, "missing" in cp ? cp : {
        ...cp,
        load: pp[cp.backend]
      }
    }
    async function Zp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Np().gpu,
        Op = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== pp.backend) return !1;
      const op = Oi(pp, ip, "indirectDraws", "off", "on");
      if (null !== op) return op;
      if (null !== pp.adapter && (0, wp.q)(pp.adapter, Op)) return !0;
      if (null === cp) return !1;
      try {
        var Ip;
        const pp = await (0, jp.k)(cp.requestAdapter({
          powerPreference: "low-power"
        }).then((async pp => (null !== pp && await (0, Hp.g)(pp), pp))), yi, `the low-power requestAdapter didn't settle in ${yi/1e3} s`);
        return (0, wp.q)(null !== (Ip = null === pp || void 0 === pp ? void 0 : pp.info) && void 0 !== Ip ? Ip : {}, Op)
      } catch (Sp) {
        return Sp instanceof jp.h
      }
    }

    function zp(pp, ip, cp) {
      if ("webgpu" !== pp.backend) return !1;
      const Op = Oi(pp, ip, "terrainFetch", "texture", "storage");
      return null !== Op ? Op : null !== pp.adapter && (0, wp.k)(pp.adapter, cp)
    }

    function sp(pp, ip) {
      if ("webgpu" !== pp.backend) return !1;
      const cp = Oi(pp, ip, "skyOrder", "early", "last");
      return null !== cp ? cp : null !== pp.adapter && (0, Ip.f)(pp.adapter.vendor, pp.adapter.architecture) === lp
    }

    function Kp(pp, ip) {
      if ("webgpu" !== pp.backend) return !1;
      const cp = Oi(pp, ip, "uploadCopies", "off", "on");
      return null !== cp ? cp : null !== pp.adapter && "powervr_rogue" === (0, Ip.f)(pp.adapter.vendor, pp.adapter.architecture)
    }

    function Vp(pp, ip, cp) {
      if ("webgpu" !== pp.backend) return !1;
      const Op = Oi(pp, ip, "sceneDepth", "off", "on");
      return null !== Op ? Op : null !== pp.adapter && (0, wp.n)(pp.adapter, cp)
    }

    function ii(pp, ip) {
      return "webgl" === pp.backend ? Oi(pp, ip, "instancedTerrain", "1", "0") : null
    }

    function ci(pp, ip) {
      return "webgpu" !== pp.backend || ip && (null === pp.adapter || !(0, Up.H)(pp.adapter))
    }

    function Oi(pp, ip, cp, Op, op) {
      const Ip = new URLSearchParams(ip).get(cp),
        Sp = null !== Ip && void 0 !== Ip ? Ip : (0, Lp.f)(cp);
      return Sp !== Op && Sp !== op ? null : (Gp ||= null === Ip && "webgpu" === pp.backend, Sp === Op)
    }

    function oi(pp) {
      return null !== pp && "missing" in pp
    }

    function Ii(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Li(),
        cp = arguments.length > 2 ? arguments[2] : void 0;
      return ip ? function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp.c,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const Op = "start_failed" === pp || "pipeline_failed" === pp,
            op = (0, Rp.l)(pp, cp),
            Ip = ip.turnOffWebGpuAfterDeviceLoss(Op ? "visible" : (0, Up.i)((0, Wp.j)()), Op, op);
          return Gp && (0, Lp.q)("webgpuLoss"), ip.isWebGpuOffAfterLoss() && "webgpu" === bp(yp.h.getItem(Dp.g)) && yp.h.removeItem(Dp.g), (0, xp.r)("webgpuloss") && (0, Yp.d)((ip => {
            var cp;
            ip.noteWebGpuLoss("wasm", Ip ? pp : `${pp}, which storage didn't keep`, null !== (cp = op.message) && void 0 !== cp ? cp : null)
          })), Ip
        } catch {
          return !1
        }
      }(pp, Sp.c, cp) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Si = "framePacing";

    function xi(pp) {
      const ip = new URLSearchParams(pp).get(Si);
      return null !== ip && /^\d{1,9}$/.test(ip) ? Number(ip) : void 0
    }

    function Li() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === bp(new URLSearchParams(pp).get(Dp.c))
      } catch {
        return !1
      }
    }

    function Yi(pp) {
      return !!Di(pp) || pp instanceof Error && !(pp instanceof WebAssembly.RuntimeError) && pp.message.startsWith(`${dp.k.RenderSurfaceUnusable}:`)
    }

    function Di(pp) {
      const {
        name: ip,
        message: cp
      } = null !== pp && void 0 !== pp ? pp : {};
      return "InvalidStateError" === ip && "string" === typeof cp && cp.startsWith("GPUDevice.")
    }

    function Ai(pp) {
      const ip = pp;
      return "function" === typeof ip.kOp && "function" === typeof ip.mOp ? ip : null
    }

    function Pi(pp) {
      return "function" === typeof pp.sw ? pp : null
    }
    const Wi = "openRenderer";
    const yi = 5e3,
      Ui = 15e3;

    function wi(pp, ip, cp, Op, op, Ip) {
      return (0, jp.k)(function(pp, ip, cp, Op, op, Ip) {
        return (0, kp.e)(pp, ip, (() => pp.sw(cp, Op, op, Ip.indirectHangs, Ip.storagePullBreaks, Ip.splitPassBreaks, Ip.earlySky, Ip.instancedTerrain, Ip.cellLight, Ip.framesAhead, Ip.webGpuRestores, Ip.bufferCopiesCrash)))
      }(pp, ip, cp, Op, op, Ip), Ui, `${dp.k.RenderSurfaceUnusable}: the renderer didn't open in ${Ui/1e3} s`, ti)
    }
    async function vi(pp, ip, cp, Op, op, Ip) {
      if ("function" !== typeof pp.FSp) throw new Error("this core has no set_renderer");
      const Sp = await wi(ip, Wi, cp, op, Op, Ip);
      try {
        pp.FSp(Sp)
      } catch (xp) {
        throw ti(Sp), xp
      }
    }

    function ti(pp) {
      try {
        pp.free()
      } catch {}
    }
  },
  41016: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    const Op = {
      destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
      destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
      destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
      destroy_stage_3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAASUlEQVQYlW2PwQ3AMAjEfFXXYv+x3A+pSNqT+IBPMlEDkEQ6awdwMaJGzYTfVJUL4GydUFW5AbM5j2o+DrMEcE+g5dKzf/FrDjw47TfQdOS/BAAAAABJRU5ErkJggg==",
      destroy_stage_4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATklEQVQYlYWPsRHDQAzDQF/W4u8/lZEmn5PtwuwkETwqagCSyE97B3AwpEbNNH8A1lpn2wvwN824tqpp6yN2G+dRzaPDhLgPm56peXvzC7EqSTSAXQcxAAAAAElFTkSuQmCC",
      destroy_stage_5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATElEQVQYlW2PwREAMQgCIX1p/1Xd3idmNBN/iotowJJkG+2q2WkARwRD2LUkKTO/m44I7mWVyxDrxIsEvCqg7ZOhAyNx0d3Vrzc7+AM+lEvjLYgPSwAAAABJRU5ErkJggg==",
      destroy_stage_6: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAT0lEQVQYlW2PyQ2AQAwDx9tXtv+qGD4ERQt+RY7lI2oAksiD5gBWH1WlGjUtTuIC2HtfHHi5qvJ0mRxt27nzqWZ1VhJnuU/Js8u77m/mFNyVEDqzHRw/iwAAAABJRU5ErkJggg==",
      destroy_stage_7: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJklEQVQYlWNgQAK2trb/GXABXJIsuCThYsiSMDZBq7AqoEw3Pp0AAAYX+aJ4oVQAAAAASUVORK5CYII=",
      destroy_stage_8: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUUlEQVQYlV2PwQ3AMAwCoepazvDJXr1+apWEl40BYQHWh6pCAcACDLiq6DlFtySNMZ4kt6RcOiW5LdI2eZxzXmpBurPLVqjda60/Ob84uwB+AVXlTrnZ3+XVAAAAAElFTkSuQmCC",
      destroy_stage_9: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUElEQVQYlW2OyQ3AMAgEhyhtQfF2X9m8IKvIvBDMHkgKSQGQmcJGUtBAZsr3hm6Aqnr4zUBOt4vfJh8gIuTPtdZFK1ztXUbtcXvvz/nU3F1eyBpW2eqlL9QAAAAASUVORK5CYII="
    }
  },
  40949: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => yp,
      e: () => Up,
      g: () => Pp,
      i: () => Ap
    });
    const Op = 2e3,
      op = "unavailable";
    let Ip = () => Promise.resolve().then((() => cp(3031))),
      Sp = null,
      xp = null,
      Lp = Yp();

    function Yp() {
      let pp = () => {};
      return {
        promise: new Promise((ip => {
          pp = () => {
            ip(null)
          }
        })),
        resolve: pp
      }
    }

    function Dp() {
      if (null === Sp) {
        const pp = Ip();
        Sp = pp, pp.then((ip => {
          Sp === pp && (xp = ip)
        }), (() => {
          Sp === pp && (Sp = null)
        }))
      }
      return Sp
    }

    function Ap() {
      Dp().catch((() => {}))
    }

    function Pp() {
      Lp.resolve()
    }

    function Wp(pp, ip, cp, Op) {
      if (null === pp) return {
        errorKind: ip,
        fingerprint: op,
        dedupe: `${ip}|${Op}`
      };
      const {
        fingerprint: Ip
      } = pp.clientErrorKey(ip, cp, Op);
      return {
        errorKind: ip,
        fingerprint: Ip,
        dedupe: Ip
      }
    }

    function yp(pp, ip, cp, Op) {
      return null === xp ? Op ? (Ap(), Wp(null, pp, ip, cp)) : null : Wp(xp, pp, ip, cp)
    }
    async function Up(pp, ip, cp) {
      let op;
      const Ip = new Promise((pp => {
        op = setTimeout((() => {
          pp(null)
        }), Op)
      }));
      try {
        return Wp(await Promise.race([Dp(), Ip, Lp.promise]), pp, ip, cp)
      } catch {
        return Wp(null, pp, ip, cp)
      } finally {
        clearTimeout(op)
      }
    }
  },
  40945: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      BUILT_IN_ANIMATIONS_SITE: () => zp,
      CORE_ERRORS_SITE: () => fp,
      EVENT_OVERFLOW_SITE: () => Zp,
      FIRST_VIEW_SITE: () => Vp,
      JOIN_SITE: () => hp,
      LEAVE_SITE: () => ap,
      MAIN_THREAD_SITE: () => ii,
      MODEL_FEED_SITE: () => np,
      MODEL_POOL_SITE: () => Fp,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Ii,
      NON_FATAL_REPORTS_PER_SESSION: () => ji,
      PREVIEW_ANIMATIONS_SITE: () => rp,
      RENDER_RELOAD_SITE: () => Gp,
      REQUEST_DEVICE_SITE: () => ci,
      TEXTURE_NAMES_SITE: () => gp,
      TEXTURE_PACK_FEED_SITE: () => sp,
      TEXTURE_PACK_SWAP_SITE: () => Kp,
      TurnstilePageError: () => xc,
      WASM_LOAD_SITE: () => bp,
      countRenderLost: () => bc,
      crashError: () => Ci,
      crashReportsSettled: () => Ti,
      deviceLossWords: () => Bc,
      flushCrashReports: () => Bi,
      joinFailureCode: () => Lc,
      lokiTransport: () => Li,
      modelFailureCode: () => Uc,
      readTrap: () => Gi,
      renderLoss: () => fc,
      renderReloadMessage: () => Nc,
      reportCoreErrors: () => ai,
      reportCountedLoadFallback: () => Ic,
      reportCrash: () => Ei,
      reportDataLoadFailure: () => Gc,
      reportDisconnect: () => Wc,
      reportDracoDecoderFailure: () => Hc,
      reportDroppedRequiredLimits: () => Oc,
      reportEventOverflow: () => jc,
      reportFirstViewNoTerrain: () => Mc,
      reportLightFault: () => mc,
      reportMainStall: () => Cc,
      reportMemoryShed: () => qc,
      reportModelFailure: () => wc,
      reportModelPoolFailure: () => vc,
      reportModelsModuleRetry: () => tc,
      reportNoBackendRetry: () => cc,
      reportPageJoinFailure: () => Dc,
      reportReconnectGaveUp: () => yc,
      reportRenderReload: () => nc,
      reportReplayFault: () => Xc,
      reportStaleBuildReload: () => Zc,
      reportStoppedCore: () => si,
      reportTerrainTextureFailure: () => Fc,
      reportTexturePackFeedLoadFailure: () => ec,
      reportTexturePackKeptOut: () => uc,
      reportUnstreamedCoreLoad: () => Sc,
      reportUnsupportedFallback: () => ic,
      reportUnusedSeat: () => Pc,
      reportWorkerLost: () => kc,
      reportWorkerStartTimeout: () => Ec,
      reportWorldgenGaveUp: () => Rc,
      reportWorldgenLoadFailure: () => dc,
      resetCrashReports: () => fi,
      setCrashAdPreload: () => vi,
      setCrashBackend: () => wi,
      setCrashScreen: () => Wi,
      setCrashTransport: () => Ai,
      showCrash: () => zi,
      showJoinFailure: () => Yc,
      showUnsupported: () => Vi,
      unknownSkyWords: () => bi
    });
    var Op = cp(1014),
      op = cp(1356),
      Ip = cp(1349),
      Sp = cp(1080),
      xp = cp(259),
      Lp = cp(3035),
      Yp = cp(4398),
      Dp = cp(40949),
      Ap = cp(4903),
      Pp = cp(40954),
      Wp = cp(3071),
      yp = cp(38993),
      Up = cp(131),
      wp = cp(129),
      vp = cp(3074),
      tp = cp(36689),
      Hp = cp(1819),
      dp = cp(40967),
      ep = cp(40783),
      jp = cp(40882),
      kp = cp(40884),
      mp = cp(36686),
      Rp = cp(2963),
      qp = cp(2970),
      Mp = cp(40988),
      Cp = cp(41005),
      Ep = cp(41008),
      Xp = cp(37044),
      lp = cp(3330),
      Qp = cp(36472),
      Jp = cp(40923),
      Bp = cp(36484),
      Np = cp(41025);
    const Tp = "[bloxd-wasm-client]",
      fp = "coreErrors",
      bp = "wasmLoad",
      hp = "join",
      ap = "leave",
      np = "modelFeed",
      Fp = "modelWorkerPool",
      gp = "textureNames",
      Gp = "renderReload",
      rp = "previewAnimations",
      Zp = "eventOverflow",
      zp = "builtInAnimations",
      sp = "texturePackFeed",
      Kp = "texturePackSwap",
      Vp = "firstView",
      ii = "mainThread",
      ci = "requestDevice",
      Oi = 300,
      oi = 64,
      Ii = 8;
    let Si = 0;
    const xi = new Set,
      Li = (pp, ip) => {
        const cp = ti[pp.kind],
          Op = {
            backend: yi,
            adPreload: Ui
          };
        if (null === cp) return void Yi(pp, ip, Op, null);
        const op = (0, Dp.d)(cp, pp.message, pp.code, pp.fatal);
        null === op ? Ji("Loki", (async () => {
          Yi(pp, ip, Op, await (0, Dp.e)(cp, pp.message, pp.code))
        })) : Yi(pp, ip, Op, op)
      };

    function Yi(pp, ip, cp, Op) {
      let {
        backend: op,
        adPreload: Ip
      } = cp;
      const {
        kind: xp,
        code: Yp,
        site: Dp,
        fatal: Ap,
        details: Pp
      } = pp;
      if (!Ap)
        if (null === Op || (0, Lp.e)(Op.errorKind) || xi.has(Op.dedupe)) {
          if (Si >= Ii) return;
          Si++
        } else xi.add(Op.dedupe);
      const Wp = {
        ...Pp,
        kind: xp,
        code: Yp,
        site: Dp,
        fatal: String(Ap),
        backend: op
      };
      Ip && (Wp.adPreload = "true"), null !== Op && (Wp.errorKind = Op.errorKind, Wp.fingerprint = Op.fingerprint), ip instanceof Error && "string" === typeof ip.stack && (Wp.causeStack = ip.stack.slice(0, 2e3)), (0, Sp.NU)(Ci(pp, ip), Wp)
    }
    let Di = Li;

    function Ai(pp) {
      const ip = Di;
      return Di = pp, ip
    }
    let Pi = () => {};

    function Wi(pp) {
      const ip = Pi;
      return Pi = pp, ip
    }
    let yi = "unpicked",
      Ui = !1;

    function wi(pp) {
      yi = pp
    }

    function vi(pp) {
      Ui = pp
    }
    const ti = {
        crash: "wasm_load",
        unsupported: "wasm_load",
        model: "wasm_load",
        join: "matchmake_failed",
        pageJoin: null,
        unsupportedFallback: "wasm_load",
        coreError: null,
        meshHeap: null,
        recovered: null,
        unstreamedLoad: null,
        modelLate: null,
        worldgenLoad: null,
        texturePackLoad: null,
        texturePackKeptOut: null,
        terrainTexture: null,
        previewAnimations: null,
        builtInAnimations: null,
        seat: null,
        noTerrain: null,
        mainStall: null,
        staleBuild: "wasm_load",
        disconnect: "disconnect",
        linkCensus: "wasm_load",
        linksReadAfterView: "wasm_load"
      },
      Hi = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      di = new Set(["unstreamedLoad"]),
      ei = new Set(["linkCensus", "linksReadAfterView"]);
    let ui = !1;
    const ji = 20,
      ki = new Map;
    let mi = 0,
      Ri = 0;
    const qi = new Set,
      Mi = new Set;

    function Ci(pp, ip) {
      const cp = Object.assign(new Error(`${pp.code}: ${pp.message}`), {
        name: "WasmClientCrash",
        cause: null !== ip && void 0 !== ip ? ip : void 0
      });
      return ip instanceof Error && ip.stack && (cp.stack = ip.stack), cp
    }

    function Ei(pp) {
      var ip, Op;
      const {
        kind: op,
        code: Ip,
        site: Sp,
        fatal: xp,
        message: Lp,
        error: Yp
      } = pp, Dp = !1 !== pp.toTransport && !di.has(op), Ap = !xp && Dp && !ei.has(op), Pp = {
        kind: op,
        code: Ip,
        site: Sp,
        fatal: xp,
        message: Lp,
        details: null !== (ip = pp.details) && void 0 !== ip ? ip : {}
      }, Wp = `${Ip}@${Sp}${void 0===pp.instance?"":`#${pp.instance}`}${xp?"!":""}`, yp = (null !== (Op = ki.get(Wp)) && void 0 !== Op ? Op : 0) + 1;
      if (ki.set(Wp, yp), void 0 !== pp.countAs && 1 === yp && li(pp.countAs), yp > 1 ? 0 === (yp & yp - 1) && Qi((() => {
          console.warn(`${Tp} ${Ip} at ${Sp} reported ${yp} times`)
        })) : Ap && mi >= ji ? Qi((() => {
          console.warn(`${Tp} ${op} ${Ip} at ${Sp}: ${Lp} (not sent: the session's ${ji} went)`, Pp.details, null !== Yp && void 0 !== Yp ? Yp : "")
        })) : (Ap && mi++, function(pp, ip, Op, op) {
          var Ip, Sp;
          const {
            kind: xp,
            code: Lp,
            site: Yp,
            fatal: Dp,
            message: Ap,
            details: Pp
          } = pp;
          Qi((() => {
            (Dp ? console.error : console.warn)(`${Tp} ${xp} ${Lp} at ${Yp}: ${Ap}`, Pp, null !== ip && void 0 !== ip ? ip : "")
          }));
          const Wp = Hi[xp],
            yp = null !== (Ip = null !== (Sp = ti[xp]) && void 0 !== Sp ? Sp : Wp) && void 0 !== Ip ? Ip : null;
          op || null === yp || Xi((async () => {
            const {
              reportCappedWasmFailure: pp,
              reportUncappedWasmFailure: ip,
              reportWasmFailure: Op
            } = await cp.e(213).then((() => cp(36469)));
            (ei.has(xp) ? ip : void 0 === Wp ? Op : pp)(yp, Ap, Lp)
          }));
          Op && Qi((() => {
            Di(pp, ip)
          }))
        }(Pp, Yp, Dp, void 0 !== pp.countAs)), xp) {
        var Up;
        const ip = null !== (Up = pp.screen) && void 0 !== Up ? Up : {
          text: (0, Xp.h)(Pp, !0),
          reload: !0
        };
        Qi((() => {
          Pi(ip)
        }))
      }
      return Pp
    }

    function Xi(pp) {
      Ji("counts", (async () => {
        const {
          peekVisitSessionId: ip
        } = await Promise.resolve().then((() => cp(670)));
        null !== ip() && (await pp(), ui = !0)
      }))
    }

    function li(pp) {
      qi.has(pp.errorKind) || (qi.add(pp.errorKind), Xi((async () => {
        const {
          reportClientError: ip
        } = await Promise.resolve().then((() => cp(3025)));
        ip(pp.errorKind, pp.error, pp.code, !0, void 0, pp.fields)
      })))
    }

    function Qi(pp) {
      try {
        pp()
      } catch (ip) {
        try {
          console.warn(`${Tp} could not send a report`, ip)
        } catch {}
      }
    }

    function Ji(pp, ip) {
      try {
        const cp = ip().catch((ip => {
          console.warn(`${Tp} could not send the report to ${pp}`, ip)
        })).finally((() => {
          Mi.delete(cp)
        }));
        Mi.add(cp)
      } catch (cp) {
        console.warn(`${Tp} could not send the report to ${pp}`, cp)
      }
    }
    async function Bi(pp) {
      let ip;
      (0, Dp.g)();
      const cp = new Promise((cp => {
        ip = setTimeout(cp, pp)
      }));
      await Promise.race([Ni(), cp]), clearTimeout(ip)
    }
    async function Ni() {
      if (await Promise.allSettled([...Mi]), ui) try {
        const {
          flushClientAnalyticsEvents: pp
        } = await Promise.resolve().then((() => cp(1518)));
        await pp()
      } catch (pp) {
        console.warn(`${Tp} could not send the counts`, pp)
      }
    }
    async function Ti() {
      for (; Mi.size > 0;) await Promise.allSettled([...Mi])
    }

    function fi() {
      ki.clear(), mi = 0, ui = !1, Si = 0, xi.clear(), Ri = 0, qi.clear(), (0, Pp.t)()
    }

    function bi(pp) {
      const ip = "object" === typeof pp && null !== pp ? pp.type : pp;
      return "string" !== typeof ip ? "sky not named" : `sky ${JSON.stringify(Array.from(ip).slice(0,oi).join(""))}`
    }

    function ai(pp, ip, cp, Op) {
      Ri += ip;
      for (const {
          code: xp,
          detail: Lp
        }
        of pp) {
        var op, Ip, Sp;
        const pp = (0, Ap._d)(xp),
          ip = (0, Pp.c)(xp, Lp),
          Yp = null === Op || void 0 === Op ? void 0 : Op(xp, Lp),
          Dp = void 0 !== (null === ip || void 0 === ip ? void 0 : ip.gpuDetails),
          Wp = Dp ? null === (op = (0, wp.r)()) || void 0 === op ? void 0 : op.renderer : void 0,
          yp = Dp ? ` ${(0,Pp.k)()}` : "",
          Up = Array.from([Wp && `gpu ${(0,Pp.v)(Wp)}`, Yp].filter(Boolean).join("; ")).slice(0, Oi).join(""),
          vp = `core error ${pp}${null!==(Ip=null===ip||void 0===ip?void 0:ip.words)&&void 0!==Ip?Ip:""}${yp}${Up?`: ${Up}`:""}`,
          tp = {
            errorCode: String(xp),
            detail: String(Lp),
            droppedBefore: String(Ri),
            wasmBuild: cp.wasm,
            clientVersion: cp.client,
            ...null === ip || void 0 === ip ? void 0 : ip.gpuDetails
          };
        null !== ip && (0, Pp.p)(ip) ? Qi((() => {
          console.warn(`${Tp} coreError CORE-${pp}: ${vp} (not sent: the session's render warnings of its kind went)`, tp)
        })) : ni(xp) ? Qi((() => {
          console.warn(`${Tp} coreError CORE-${pp}: ${vp} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, tp)
        })) : Ei({
          kind: gi(xp, Lp),
          code: `CORE-${pp}`,
          site: fp,
          fatal: !1,
          message: vp,
          details: tp,
          instance: null !== (Sp = null === ip || void 0 === ip ? void 0 : ip.instance) && void 0 !== Sp ? Sp : Fi(xp, Lp)
        })
      }
    }

    function ni(pp) {
      if (pp !== Ap.M.AudioUnknownSound && pp !== Ap.M.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: ip,
        lobbyName: cp
      } = (0, Ip.d)();
      return null !== ip && (!!(0, Op.j)(ip) || pp === Ap.M.AudioUnknownSound && (0, op.k)(ip, cp))
    }

    function Fi(pp, ip) {
      return pp === Ap.M.RenderDeviceLost && 0 !== (ip & Ap.U.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function gi(pp, ip) {
      return pp === Ap.M.JobsHeapGaveUp ? "meshHeap" : (0, Pp.g)(pp, ip) ? "linksReadAfterView" : (0, Pp.d)(pp, ip) ? "linkCensus" : "coreError"
    }

    function Gi(pp) {
      return (0, Qp.n)(pp instanceof Jp.b ? pp.trap : pp, Rp.L, Rp.ib)
    }
    const ri = "declined=js";

    function Zi(pp) {
      return pp ? {
        labels: [ri],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function zi(pp, ip, cp) {
      return Ki(pp, ip, cp, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function si(pp, ip, cp) {
      return Ki(pp, ip, cp, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Ki(pp, ip, cp, Op, op) {
      let {
        memoryDetails: Ip = {},
        declined: Sp = !1
      } = Op;
      const {
        code: xp,
        details: Lp,
        message: Yp
      } = (0, dp.F)(pp, ip), Dp = [];
      Object.assign(Lp, (0, Bp.d)(pp.error)), null !== cp && (Lp.trapKind = cp.kind, null !== cp.panic && (Lp.panic = (0, Qp.j)(cp.panic)), cp.refusedBytes > 0 && (Lp.refusedAllocation = String(cp.refusedBytes)), Dp.push((0, Qp.q)(cp.kind, cp.refusedBytes)));
      const Ap = Zi(Sp);
      return Ei({
        kind: "crash",
        code: xp,
        site: pp.site,
        fatal: op,
        message: [...Dp, ...Ap.labels, Yp].join("; "),
        details: {
          ...Lp,
          ...Ap.details,
          ...Ip
        },
        error: pp.error
      })
    }

    function Vi(pp, ip, cp) {
      return Ei({
        kind: "unsupported",
        code: ip,
        site: bp,
        fatal: !0,
        message: cp,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: pp,
          status: ip
        },
        screen: {
          text: (0, Xp.p)(pp),
          reload: "download" === pp
        }
      })
    }
    const pc = {
      unsupported: "unsupported_js_fallback",
      blockedAfterLoss: "blocked_after_loss",
      noContext: "no_context_js_fallback"
    };

    function ic(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return Ei({
        kind: "unsupportedFallback",
        code: pc[ip],
        site: bp,
        fatal: !1,
        message: cp,
        details: {
          ...Op,
          cause: pp,
          status: "unsupported",
          decline: ip,
          fallback: "js"
        }
      })
    }

    function cc(pp, ip, cp) {
      return Ei({
        kind: "recovered",
        code: "reprobed" === pp ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: bp,
        fatal: !1,
        message: cp,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: ip,
          step: pp
        }
      })
    }

    function Oc(pp) {
      return Ei({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: ci,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: pp.join(",")
        }
      })
    }
    const oc = "reload=wasm";

    function Ic(pp, ip, cp, Op) {
      const op = Zi("declined" === Op),
        Ip = "wasmReload" === Op ? [oc] : op.labels;
      return Ei({
        kind: "unsupported",
        code: ip,
        site: bp,
        fatal: !1,
        message: [...Ip, cp].join("; "),
        details: {
          cause: pp,
          status: ip,
          fallback: "wasmReload" === Op ? "wasmReload" : "js",
          ...op.details
        }
      })
    }

    function Sc() {
      const {
        code: pp,
        message: ip
      } = lp.b;
      return Ei({
        kind: "unstreamedLoad",
        code: pp,
        site: bp,
        fatal: !1,
        message: ip
      })
    }
    class xc extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Lc(pp) {
      return pp instanceof jp.r ? 0 === pp.code ? "JOIN-matchmake" : `JOIN-${pp.code}` : pp instanceof jp.d ? 0 === pp.code ? `JOIN-${pp.stage}` : `JOIN-${pp.stage}-${pp.code}` : pp instanceof ep.e ? "JOIN-gameCode" : pp instanceof xc ? "JOIN-turnstilePage" : pp instanceof jp.D ? "JOIN-trafficCheck" : pp instanceof tp.f ? "JOIN-timeout" : "JOIN-network"
    }

    function Yc(pp, ip) {
      const cp = (0, Bp.h)(pp),
        Op = {
          wasmBuild: ip.wasm,
          clientVersion: ip.client
        },
        op = pp instanceof xc ? {
          text: (0, Xp.j)(),
          reload: !1
        } : void 0,
        Ip = (0, kp.g)(pp),
        Sp = "expected" !== Ip;
      return Ei({
        kind: "join",
        code: Lc(pp),
        site: hp,
        fatal: !0,
        message: cp,
        details: Op,
        error: pp,
        screen: op,
        toTransport: Sp,
        instance: Ip
      })
    }

    function Dc(pp, ip, cp) {
      var Op;
      const op = (0, kp.g)(pp),
        Ip = {
          cause: (pp instanceof jp.d || pp instanceof jp.r) && null !== (Op = pp.serverText) && void 0 !== Op ? Op : "",
          sinceJoinStart: (0, vp.d)(cp.sinceJoinStartMs),
          game: cp.game,
          ...(0, vp.l)(),
          wasmBuild: ip.wasm,
          clientVersion: ip.client
        };
      return Ei({
        kind: "pageJoin",
        code: Lc(pp),
        site: hp,
        fatal: !1,
        message: (0, Bp.h)(pp),
        details: Ip,
        error: pp,
        toTransport: "unrecognised" === op,
        instance: op
      })
    }
    const Ac = {
      renewed: {
        code: "CORE-seatRenewed",
        message: "the early seat outlasted the room's hold, so the join reserved another"
      },
      lost: {
        code: "CORE-seatAbandoned",
        message: "the early seat's request failed before the join, so the join reserved another"
      },
      rematched: {
        code: "CORE-seatAbandoned",
        message: "the early seat was for a place matchmaking replaced"
      },
      abandoned: {
        code: "CORE-seatAbandoned",
        message: "the early seat was abandoned by a leave or a failed boot or join"
      }
    };

    function Pc(pp, ip) {
      let {
        unused: cp,
        answered: Op,
        heldMs: op
      } = pp;
      const {
        code: Ip,
        message: Sp
      } = Ac[cp], xp = {
        unused: cp,
        answered: String(Op),
        heldMs: String(op),
        wasmBuild: ip.wasm,
        clientVersion: ip.client
      };
      return Ei({
        kind: "seat",
        code: Ip,
        site: hp,
        fatal: !1,
        message: Sp,
        details: xp
      })
    }

    function Wc(pp, ip, cp) {
      var Op;
      let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Op = pp.name) && void 0 !== Op ? Op : String(pp.code);
      const Ip = {
          closeCode: String(pp.code),
          recognised: String(null !== pp.name),
          closeReason: cp.closeReason,
          sinceJoined: (0, vp.d)(cp.sinceJoinedMs),
          game: cp.game,
          ...(0, vp.l)(),
          wasmBuild: ip.wasm,
          clientVersion: ip.client
        },
        Sp = null === pp.name && !(0, vp.g)(pp.code);
      return Ei({
        kind: "disconnect",
        code: op,
        site: ap,
        fatal: !1,
        message: "Left room",
        details: Ip,
        toTransport: Sp
      })
    }

    function yc(pp, ip) {
      const cp = {
        ...(0, Wp.l)(pp),
        wasmBuild: ip.wasm,
        clientVersion: ip.client
      };
      return Ei({
        kind: "disconnect",
        code: `reconnect-${pp.reason}`,
        site: hp,
        fatal: !1,
        message: "Reconnect failed",
        details: cp
      })
    }

    function Uc(pp) {
      return pp.error instanceof qp.d ? `MODEL-${pp.error.status}` : pp.error instanceof Mp.h ? "MODEL-ring" : "MODEL-network"
    }

    function wc(pp, ip) {
      const cp = Uc(pp),
        Op = `model file ${pp.file} ${pp.startup?"(startup) ":""}could not load`,
        op = {
          file: String(pp.file),
          url: pp.url,
          wasmBuild: ip.wasm,
          clientVersion: ip.client
        };
      return Ei({
        kind: pp.startup ? "model" : "modelLate",
        code: cp,
        site: np,
        fatal: pp.startup,
        message: Op,
        details: op,
        error: pp.error
      })
    }

    function vc(pp, ip) {
      const cp = {
        wasmBuild: ip.wasm,
        clientVersion: ip.client
      };
      return Ei({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: Fp,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: cp,
        error: pp
      })
    }

    function tc(pp, ip, cp) {
      const Op = {
        delayMs: String(ip),
        wasmBuild: cp.wasm,
        clientVersion: cp.client
      };
      pp instanceof qp.d && (Op.status = String(pp.status));
      return Ei({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: Fp,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Op,
        error: pp
      })
    }

    function Hc(pp, ip) {
      const cp = {
        wasmBuild: ip.wasm,
        clientVersion: ip.client
      };
      return Ei({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: Fp,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: cp,
        error: pp
      })
    }

    function dc(pp, ip) {
      const cp = {
        wasmBuild: ip.wasm,
        clientVersion: ip.client
      };
      return Ei({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: dp.A,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: cp,
        error: pp
      })
    }

    function ec(pp, ip) {
      const cp = {
        wasmBuild: ip.wasm,
        clientVersion: ip.client
      };
      return Ei({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: sp,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: cp,
        error: pp
      })
    }

    function uc(pp, ip, cp, Op) {
      const op = {
        wasmBuild: Op.wasm,
        clientVersion: Op.client
      };
      return Ei({
        kind: "texturePackKeptOut",
        code: (0, Yp.f)("wasm", pp, ip),
        site: Kp,
        fatal: !1,
        message: ip.detail,
        details: op,
        error: cp
      })
    }

    function jc(pp, ip) {
      const {
        frames: cp,
        acks: Op,
        mask: op,
        outcome: Ip
      } = pp, Sp = {
        frames: String(cp),
        acks: String(Op),
        mask: String(op),
        outcome: null !== Ip && void 0 !== Ip ? Ip : "resynced",
        wasmBuild: ip.wasm,
        clientVersion: ip.client
      };
      return Ei({
        kind: "recovered",
        code: "rejoined" === Ip ? "CORE-eventOverflowRejoin" : "failed" === Ip ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: Zp,
        fatal: !1,
        message: `the event buffer refused records in ${cp} frames`,
        details: Sp
      })
    }

    function kc(pp, ip, cp) {
      return Ei({
        kind: "recovered",
        code: "CORE-workerLost",
        site: pp,
        fatal: !1,
        message: `a ${pp} worker was lost`,
        details: {
          reason: ip,
          wasmBuild: cp.wasm,
          clientVersion: cp.client
        }
      })
    }

    function mc(pp, ip, cp) {
      const Op = {
        wasmBuild: cp.wasm,
        clientVersion: cp.client
      };
      return Ei({
        kind: "recovered",
        code: pp,
        site: dp.l,
        fatal: !1,
        message: ip,
        details: Op
      })
    }

    function Rc(pp, ip) {
      const cp = {
        lastReason: pp,
        wasmBuild: ip.wasm,
        clientVersion: ip.client
      };
      return Ei({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: dp.A,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: cp
      })
    }

    function qc(pp, ip, cp) {
      return Ei({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: dp.k,
        fatal: !1,
        message: (0, mp.k)(pp) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: pp,
          ...ip,
          wasmBuild: cp.wasm,
          clientVersion: cp.client
        }
      })
    }

    function Mc(pp, ip, cp, Op) {
      var op, Ip;
      const Sp = (0, Pp.n)(),
        xp = {
          game: pp,
          cause: ip,
          census: null === cp ? "none" : JSON.stringify(cp),
          gpu: null !== (op = null === (Ip = (0, wp.r)()) || void 0 === Ip ? void 0 : Ip.renderer) && void 0 !== op ? op : "",
          renderWarned: String(Sp),
          browser: (0, Pp.k)(),
          wasmBuild: Op.wasm,
          clientVersion: Op.client
        },
        Lp = `first view drew no whole terrain in ${Cp.h/1e3} s, ${ip}${Sp?", render warned":""}`;
      return Ei({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: Vp,
        fatal: !1,
        message: Lp,
        details: xp
      })
    }

    function Cc(pp, ip, cp, Op) {
      var op, Ip, Sp;
      const Lp = null !== (op = (0, xp.i)(null !== (Ip = null === (Sp = (0, wp.j)()) || void 0 === Sp ? void 0 : Sp.renderer) && void 0 !== Ip ? Ip : null, (0, wp.i)())) && void 0 !== op ? op : "unknown",
        Yp = null === ip ? "untimed" : `${Math.round(ip)} ms`,
        Dp = `frames stalled, ${cp}, gpu ${(0,Pp.v)(Lp)}, blocking ${Yp}, drawn ${Math.round(pp)} ms apart`,
        Ap = {
          gpuModel: Lp,
          wasmBuild: Op.wasm,
          clientVersion: Op.client
        };
      return Ei({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: ii,
        fatal: !1,
        message: Dp,
        details: Ap
      })
    }

    function Ec(pp, ip, cp) {
      return Ei({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: pp,
        fatal: !1,
        message: `a ${pp} worker did not start`,
        details: {
          waitedMs: String(Math.round(ip)),
          wasmBuild: cp.wasm,
          clientVersion: cp.client
        }
      })
    }

    function Xc(pp, ip, cp) {
      return Ei({
        kind: "recovered",
        code: "CORE-replayFault",
        site: pp,
        fatal: !1,
        message: `the replay's ${pp} failed`,
        details: {
          wasmBuild: cp.wasm,
          clientVersion: cp.client
        },
        error: ip
      })
    }
    const lc = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function Qc(pp) {
      if (0 === pp) return "none";
      const ip = [60, 600, 3600].find((ip => pp < ip));
      return void 0 === ip ? "ge3600" : `lt${ip}`
    }

    function Jc(pp, ip) {
      return null === pp ? "unbound" : (0, yp.l)(ip - pp)
    }

    function Bc(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (pp & Ap.U.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (pp & Ap.U.LINKS_RUNNING) ? "links running" : "", `frames ${(0,Pp.v)(Qc(pp&Ap.U.FRAMES))}`, `up ${(0,Pp.v)(Jc(ip,cp))}`].filter(Boolean).join(", ")
    }

    function Nc(pp, ip, cp) {
      const Op = "lost" === ip && void 0 !== cp ? ` (${cp})` : "";
      return `the ${pp} ${lc[ip]}${Op}`
    }
    const Tc = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function fc(pp, ip, cp, Op) {
      var op;
      let {
        restoreLost: Ip = !1,
        adapterRemembered: Sp = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, xp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const Lp = null === cp || void 0 === cp ? void 0 : cp.message,
        Yp = "pipeline_failed" === ip ? ip : cp instanceof Hp.h ? "timeout" : (0, yp.t)("frames_refused" === ip, "string" === typeof Lp ? Lp : ""),
        Dp = null === Op.boundAtMs ? "unbound" : `up${(0,yp.h)(xp-Op.boundAtMs)}`,
        Ap = null === Op.adapter ? "no adapter" : (0, yp.q)(Op.adapter),
        Pp = `${!0===Op.indirectHangs?" ih":""}${!0===Op.restoresSkipped?" nr":""}${Ip?" rl":""}${Sp?" ar":""}`,
        Wp = `${Yp} ${(0,Hp.j)()?"hidden":"visible"} ${Dp}${Pp} ${Ap}`;
      if ("webgpu" !== pp || "lost" !== ip && "frames_refused" !== ip) return {
        detail: Wp,
        count: void 0
      };
      return {
        detail: Wp,
        count: {
          errorKind: "render_lost",
          error: new Error(Wp),
          code: (0, yp.y)(Yp, null !== (op = Op.boundAtMs) && void 0 !== op ? op : xp, xp).code,
          fields: {
            renderBackend: Np.b.webgpu
          }
        }
      }
    }

    function bc(pp, ip, cp) {
      const {
        count: Op
      } = fc("webgpu", pp, ip, cp);
      void 0 !== Op && li(Op)
    }
    const hc = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function ac(pp) {
      var ip;
      return null !== (ip = pp instanceof Error ? pp.reason : void 0) && void 0 !== ip ? ip : ""
    }

    function nc(pp, ip, Op) {
      var op, Ip, Sp, Lp, Yp;
      let {
        from: Dp,
        cause: Ap = "lost",
        restoreLost: Wp = !1,
        adapterRemembered: wp = !1,
        error: vp,
        context: tp = Tc,
        session: Hp = hc
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, dp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: ep,
        count: jp
      } = fc(pp, Ap, vp, tp, {
        restoreLost: Wp,
        adapterRemembered: wp
      }, dp), kp = {
        reloadFrom: null !== Dp && void 0 !== Dp ? Dp : "",
        losses: String(ip),
        cause: Ap,
        detail: ep,
        vendor: null !== (op = null === (Ip = tp.adapter) || void 0 === Ip ? void 0 : Ip.vendor) && void 0 !== op ? op : "",
        architecture: null !== (Sp = null === (Lp = tp.adapter) || void 0 === Lp ? void 0 : Lp.architecture) && void 0 !== Sp ? Sp : "",
        indirectHangs: String(tp.indirectHangs),
        restoresSkipped: String(tp.restoresSkipped),
        restoreLost: String(Wp),
        adapterRemembered: String(wp),
        lossReason: ac(vp),
        samples: String(Hp.samples),
        sunShadows: String(Hp.sunShadows),
        renderDistance: String(Hp.renderDistance),
        gpuFamily: null !== (Yp = (0, xp.c)()) && void 0 !== Yp ? Yp : "",
        browser: (0, Pp.k)(),
        siteUsed: Up.siteUsed,
        wasmBuild: Op.wasm,
        clientVersion: Op.client
      }, mp = "webgpu" !== pp && void 0 !== Dp ? function(pp, ip, cp, Op) {
        return `: ${pp}, ${ip?"restore lost":"not restored"}, up ${(0,Pp.v)(Jc(cp,Op))}`
      }(Dp, Wp, tp.boundAtMs, dp) : "", Rp = `${Nc(pp,Ap)}${mp}`, qp = Ei({
        kind: "recovered",
        code: "CORE-renderLost",
        site: Gp,
        fatal: !1,
        message: Rp,
        details: kp,
        error: vp,
        countAs: jp
      });
      return Ji("ga", (async () => {
        const {
          logError: ip
        } = await Promise.resolve().then((() => cp(3003))), Op = `${yp.e["webgpu"===pp?"WebGPU":"WebGL2"]}\n Error: ${ep}`;
        ip("warning", Op), ip("error", Op)
      })), qp
    }

    function Fc(pp, ip) {
      var cp, Op;
      const op = null === pp.name ? "TEXTURE-sources" : null === pp.url ? "TEXTURE-nourl" : pp.error instanceof Ep.d ? `TEXTURE-${pp.error.status}` : "TEXTURE-network",
        Ip = null === pp.name ? "terrain textures could not load" : `terrain texture ${pp.name} could not load`,
        Sp = {
          texture: null !== (cp = pp.name) && void 0 !== cp ? cp : "",
          url: null !== (Op = pp.url) && void 0 !== Op ? Op : "",
          wasmBuild: ip.wasm,
          clientVersion: ip.client
        };
      return Ei({
        kind: "terrainTexture",
        code: op,
        site: dp.y,
        fatal: !1,
        message: Ip,
        details: Sp,
        error: pp.error
      })
    }
    const gc = {
      previewAnimations: {
        site: rp,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: zp,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Gc(pp, ip, cp, Op) {
      const {
        site: op,
        prefix: Ip,
        name: Sp
      } = gc[pp], {
        stage: xp,
        error: Lp
      } = cp;
      return Ei({
        kind: pp,
        code: "decode" === xp ? null === Lp ? `${Ip}-decode` : `${Ip}-trap` : Lp instanceof qp.d ? `${Ip}-${Lp.status}` : `${Ip}-network`,
        site: op,
        fatal: !1,
        message: "decode" === xp ? `${Sp} did not decode` : `${Sp} could not load`,
        details: {
          url: ip,
          wasmBuild: Op.wasm,
          clientVersion: Op.client
        },
        error: Lp
      })
    }
    const rc = "staleBuild";

    function Zc(pp, ip, cp) {
      const Op = {
          failedSite: pp.site,
          url: pp.url,
          from: pp.from,
          sameBuild: String(pp.from === ip),
          reloadMs: String(Math.max(0, Date.now() - pp.at)),
          wasmBuild: cp.wasm,
          clientVersion: cp.client
        },
        op = `reloaded into a newer build after ${pp.site} failed to load: ${pp.error}`;
      return Ei({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: rc,
        fatal: !1,
        message: op,
        details: Op
      })
    }
  },
  41005: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip,
      h: () => op,
      i: () => Sp
    });
    var Op = cp(4911);
    const op = 3e4;
    class Ip {
      constructor(pp) {
        this.Yy = pp, this.waitedMs = 0, this.lastMs = null
      }
      frame(pp, ip) {
        if (ip) return !0;
        const cp = null === this.lastMs ? 0 : pp - this.lastMs;
        return this.lastMs = pp, cp <= 900 && (this.waitedMs += cp), !(this.waitedMs < op) && (this.Yy(), !0)
      }
    }

    function Sp(pp, ip) {
      return 0 === (pp & Op.L.ChunkRequested) ? "no_chunk_request" : 0 === (pp & Op.L.ChunkStored) ? "chunk_not_stored" : 0 === (pp & Op.L.MeshLanded) ? "not_meshed" : null === ip ? "no_frame_drawn" : 0 === ip.terrainParts ? "no_terrain_parts" : ip.terrainCompiling > 0 ? "terrain_compiling" : ip.terrainOpaque + ip.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40783: (pp, ip, cp) => {
    cp.d(ip, {
      C: () => yp,
      e: () => Op,
      i: () => vp,
      k: () => Up,
      n: () => wp,
      o: () => Pp,
      q: () => Wp,
      u: () => Dp,
      y: () => Ap
    });
    class Op extends Error {
      constructor(pp) {
        super(`the join's code did not load: ${pp instanceof Error?pp.message:String(pp)}`, {
          cause: pp
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === pp || void 0 === pp ? void 0 : pp.request
      }
    }
    let op = null,
      Ip = null,
      Sp = null;
    const xp = [];
    let Lp = null;

    function Yp(pp, ip) {
      try {
        pp(ip)
      } catch (cp) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", cp)
      }
    }

    function Dp() {
      return Lp
    }

    function Ap(pp) {
      xp.push(pp), null !== Lp && Yp(pp, Lp)
    }

    function Pp(pp) {
      return op ??= Promise.all([cp.e(73), cp.e(98), cp.e(226), cp.e(78), cp.e(227), cp.e(201), cp.e(97), cp.e(246), cp.e(273), cp.e(199), cp.e(214), cp.e(191), cp.e(198), cp.e(193), cp.e(144), cp.e(88), cp.e(122), cp.e(252), cp.e(57)]).then((() => cp(42870))).then((ip => {
        ip.loadAudio(pp), Lp = ip;
        for (const pp of xp) Yp(pp, ip);
        return ip
      })).catch((pp => {
        throw op = null, pp
      })), op
    }
    async function Wp(pp, ip) {
      try {
        const cp = await Pp(pp);
        await cp.loadClientGame(ip)
      } catch (cp) {
        throw new Op(cp)
      }
    }

    function yp(pp, ip) {
      Ip = {
        running: pp,
        shell: ip
      }
    }

    function Up() {
      return Sp
    }
    async function wp(pp) {
      const ip = Ip;
      if ((null === ip || void 0 === ip ? void 0 : ip.running) !== pp) throw new Error("the core's session has ended");
      const cp = await Pp(ip.shell.audio).catch((pp => {
        throw new Op(pp)
      }));
      if (null !== Sp) return Sp;
      if (Ip !== ip || pp.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Sp = cp.startGameHost(pp, ip.shell), null === Sp) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Sp
    }

    function vp() {
      null !== Sp && (null !== Lp ? Lp.endGameHost(Sp) : Sp.closeGame()), Sp = null, Ip = null
    }
  },
  40920: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    const Op = {
      extensions: ["ANGLE_instanced_arrays", "OES_vertex_array_object", "OES_element_index_uint", "OES_standard_derivatives"],
      limits: {
        MAX_VERTEX_ATTRIBS: 16,
        MAX_TEXTURE_SIZE: 2048,
        MAX_TEXTURE_IMAGE_UNITS: 8,
        MAX_VARYING_VECTORS: 8,
        MAX_VERTEX_UNIFORM_VECTORS: 128,
        MAX_FRAGMENT_UNIFORM_VECTORS: 34
      },
      vertexHighFloatBits: 23
    }
  },
  40882: (pp, ip, cp) => {
    cp.d(ip, {
      D: () => Ap,
      F: () => xp,
      d: () => Yp,
      h: () => Ip,
      l: () => Sp,
      p: () => op,
      r: () => Wp,
      t: () => Dp,
      w: () => Lp,
      z: () => Pp
    });
    var Op = cp(1823);
    const op = new Uint8Array([12]),
      Ip = 2e3,
      Sp = 257;

    function xp(pp) {
      const ip = new Uint8Array(4);
      return new DataView(ip.buffer).setUint32(0, pp, !0), ip
    }
    class Lp extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Yp extends Error {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(pp), this.stage = ip, this.code = cp, this.serverText = Op, this.socketOpened = op, this.name = "JoinError"
      }
    }
    class Dp extends Error {
      constructor(pp) {
        super(pp), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Ap extends Error {
      constructor(pp) {
        super((0, Op.i)(pp), {
          cause: pp
        }), this.name = "TrafficCheckError"
      }
    }
    class Pp extends Error {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(pp, {
          cause: cp
        }), this.networkLost = ip, this.httpStatus = Op, this.name = "SeatRequestError"
      }
    }
    class Wp extends Error {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(pp), this.code = ip, this.serverText = cp, this.name = "MatchmakeError"
      }
    }
  },
  40884: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Wp,
      g: () => Pp,
      j: () => yp
    });
    var Op = cp(2695),
      op = cp(3074),
      Ip = cp(39241),
      Sp = cp(36689),
      xp = cp(39244),
      Lp = cp(40882),
      Yp = cp(40889);
    const Dp = "seat reservation expired.",
      Ap = "early_leave";

    function Pp(pp) {
      if (pp instanceof Sp.f) return "expected";
      if (pp instanceof Lp.z) return pp.networkLost ? "expected" : "unrecognised";
      if (pp instanceof Lp.d) {
        if ("closed" === pp.stage && (0 === pp.code || (0, op.g)(pp.code))) return "expected";
        if ("roomError" === pp.stage && (pp.serverText === Dp || pp.serverText === Ap)) return "expected"
      }
      return pp instanceof Lp.d || pp instanceof Lp.r ? null === (0, xp.h)(pp.code).name ? "unrecognised" : "known" : (0, Op.g)(pp) ? "expected" : pp instanceof Lp.D || pp instanceof Yp.e ? "known" : "unrecognised"
    }

    function Wp(pp) {
      return pp instanceof Sp.f ? "timedOut" : "expected" !== Pp(pp) || (0, Op.g)(pp) || pp instanceof Lp.d && 1001 === pp.code ? void 0 : "failed"
    }

    function yp(pp) {
      return pp instanceof Lp.d && "attach" !== pp.stage ? (0, Ip.c)(pp, "closed" !== pp.stage || pp.socketOpened ? "socket" : "socket_unopened") : pp instanceof Lp.z ? {
        at: "seat_lost",
        code: pp.httpStatus
      } : pp instanceof Lp.r || pp instanceof Sp.f ? (0, Ip.c)(pp, pp instanceof Sp.f ? pp.leg : "seat") : void 0
    }
  },
  40988: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp,
      e: () => Yp,
      f: () => Wp,
      h: () => Ap
    });
    var Op = cp(2970),
      op = cp(4903),
      Ip = cp(40997),
      Sp = cp(41001),
      xp = cp(36484);
    const Lp = 395,
      Yp = 2147483648,
      Dp = new Uint8Array(0);
    class Ap extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class Pp extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Wp {
      constructor(pp, ip, cp) {
        var Op, op, Sp, xp;
        let Lp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = pp, this.build = ip, this.onFailure = cp, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.aW = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Op = Lp.fetchFile) && void 0 !== Op ? Op : pp => (0, Ip.j)(pp), this.onWritten = null !== (op = Lp.onWritten) && void 0 !== op ? op : null, this.onTaken = null !== (Sp = Lp.onTaken) && void 0 !== Sp ? Sp : null, this.onPackFileFailed = null !== (xp = Lp.onPackFileFailed) && void 0 !== xp ? xp : null, this.startupLeft = new Set(pp.startup);
        for (const Ip of pp.startup) this.request(Ip)
      }
      get startupDone() {
        return 0 === this.startupLeft.size
      }
      get waiting() {
        return this.ready.length
      }
      get asking() {
        return this.pending.size
      }
      get inFlight() {
        return this.pending.size - this.ready.length
      }
      get unanswered() {
        return this.written.size
      }
      get keptBytes() {
        return this.keptTotal
      }
      drawnUrl(pp) {
        return this.drawn.get(pp)
      }
      request(pp) {
        const ip = this.pending.get(pp);
        if (!0 === (null === ip || void 0 === ip ? void 0 : ip.ask)) return;
        const cp = this.mW(pp, !0);
        cp.recheck = void 0 !== ip;
        const Op = this.drawn.get(pp);
        if (void 0 !== Op) return cp.sx = !0, cp.recheck = !0, void this.fetch(pp, cp, Op);
        this.fetchWanted(pp, cp)
      }
      async refresh() {
        const pp = ++this.refreshes,
          ip = new Set;
        for (const Sp of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const pp of Sp) 0 === (pp & Ip.g) && ip.add(pp);
        const cp = [...ip];
        let Op;
        try {
          Op = await Promise.all(cp.map((pp => this.wanted(pp))))
        } catch {
          return null
        }
        if (pp !== this.refreshes) return null;
        const op = {
          resent: 0,
          refetched: 0,
          delivered: cp.filter((pp => this.drawn.has(pp))).length
        };
        return cp.forEach(((pp, ip) => {
          const {
            url: cp,
            inPlaceOf: Ip
          } = Op[ip], Sp = this.pending.get(pp);
          if (void 0 !== Sp) {
            if (Sp.sx || void 0 === Sp.url) return void(Sp.recheck = !0);
            if (Sp.url === cp) return;
            op.refetched++;
            const ip = this.mW(pp, Sp.ask);
            return ip.recheck = Sp.recheck, void this.fetch(pp, ip, cp, Ip)
          }
          const xp = this.written.get(pp);
          void 0 === xp ? this.drawn.get(pp) !== (null !== cp && void 0 !== cp ? cp : void 0) && (op.resent++, this.fetch(pp, this.mW(pp, !1), cp, Ip)) : xp.url !== (null !== cp && void 0 !== cp ? cp : "") && (xp.attempt.recheck = !0)
        })), op
      }
      taken(pp, ip) {
        const cp = new Set,
          Op = new Set;
        for (const op of Array.from(ip)) 0 === (op & Yp) ? cp.add(op) : Op.add((op & ~Yp) >>> 0);
        for (const [op, Ip] of this.written) Ip.seq > pp || (this.written.delete(op), cp.has(Ip.seq) ? this.refusedFile(op, Ip) : this.takenFile(op, Ip, !Ip.empty && !Op.has(Ip.seq)))
      }
      takenFile(pp, ip, cp) {
        const {
          attempt: Op
        } = ip;
        if (cp) {
          var op;
          this.drawn.set(pp, ip.url), this.undrawn.delete(pp), void 0 !== Op.inPlaceOf ? this.refusedPack.set(pp, Op.inPlaceOf) : Op.sx || this.refusedPack.delete(pp), null === (op = this.onTaken) || void 0 === op || op.call(this, pp, !0);
          const cp = this.pending.get(pp);
          if (!0 === (null === cp || void 0 === cp ? void 0 : cp.sx) && cp.url !== ip.url) {
            const cp = this.mW(pp, !0);
            cp.sx = !0, cp.recheck = !0, this.fetch(pp, cp, ip.url)
          }
        } else {
          var Ip;
          this.drawn.has(pp) || this.undrawn.add(pp), null === (Ip = this.onTaken) || void 0 === Ip || Ip.call(this, pp, !1)
        }
        Op.recheck && this.resendIfChanged(pp)
      }
      refusedFile(pp, ip) {
        var cp, Op;
        if (null === (cp = this.onTaken) || void 0 === cp || cp.call(this, pp, !1), this.refusedPack.set(pp, ip.url), this.pending.has(pp)) return void(null === (Op = this.onPackFileFailed) || void 0 === Op || Op.call(this, pp, yp(ip.url)));
        const op = this.mW(pp, ip.attempt.ask);
        op.recheck = ip.attempt.recheck, this.afterRefusal(pp, op, ip.url)
      }
      async afterRefusal(pp, ip, cp) {
        var Op;
        let op;
        try {
          op = await this.wanted(pp)
        } catch (Ip) {
          return void(this.pending.get(pp) === ip && this.giveUp(pp, ip, cp, Ip))
        }
        this.pending.get(pp) === ip && (op.inPlaceOf !== cp ? ip.ask || (null !== (Op = op.url) && void 0 !== Op ? Op : void 0) !== this.drawn.get(pp) ? this.fetch(pp, ip, op.url, op.inPlaceOf) : this.pending.delete(pp) : this.fallBack(pp, ip, cp, yp(cp)))
      }
      mW(pp, ip) {
        const cp = {
          url: void 0,
          ask: ip,
          sx: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(pp, cp);
        for (let Op = this.ready.length - 1; Op >= 0; Op--) this.ready[Op].file === pp && this.ready.splice(Op, 1);
        return cp
      }
      async wanted(pp) {
        const ip = await this.files.url(pp);
        return null !== ip && this.refusedPack.get(pp) === ip ? {
          url: await this.files.shippedUrl(pp),
          inPlaceOf: ip
        } : {
          url: ip,
          inPlaceOf: void 0
        }
      }
      fetchWanted(pp, ip) {
        const cp = this.files.url(pp);
        cp instanceof Promise ? cp.then((cp => {
          this.fetchFound(pp, ip, cp)
        }), (cp => {
          this.pending.get(pp) === ip && this.giveUp(pp, ip, "", cp)
        })) : this.fetchFound(pp, ip, cp)
      }
      fetchFound(pp, ip, cp) {
        null !== cp && this.refusedPack.get(pp) === cp ? Promise.resolve(this.files.shippedUrl(pp)).then((Op => {
          this.fetch(pp, ip, Op, cp)
        }), (Op => {
          this.pending.get(pp) === ip && this.giveUp(pp, ip, cp, Op)
        })) : this.fetch(pp, ip, cp)
      }
      fetch(pp, ip, cp, Op) {
        this.pending.get(pp) === ip && (ip.url = cp, ip.inPlaceOf = Op, null !== cp ? this.load(pp, ip, cp) : this.buildFile(pp, ip, "", Dp))
      }
      load(pp, ip, cp) {
        const Op = this.aW.get(pp);
        (null === Op || void 0 === Op ? void 0 : Op.url) !== cp ? this.fetchFile(cp).then((Op => {
          var op, Ip;
          this.pending.get(pp) === ip && (this.keptTotal += Op.byteLength - (null !== (op = null === (Ip = this.aW.get(pp)) || void 0 === Ip ? void 0 : Ip.glb.byteLength) && void 0 !== op ? op : 0), this.aW.set(pp, {
            url: cp,
            glb: Op
          }), this.buildFile(pp, ip, cp, Op))
        }), (Op => {
          this.pending.get(pp) === ip && this.fallBack(pp, ip, cp, Op)
        })) : this.buildFile(pp, ip, cp, Op.glb)
      }
      buildFile(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Sp = Op.byteLength > 0 && (0, Ip.l)(cp) ? (pp | Ip.e) >>> 0 : pp;
        this.queueRecord(pp, ip, cp, Op, this.build(Sp, Op), op)
      }
      queueRecord(pp, ip, cp, Op, Ip, xp) {
        Ip.then((Ip => {
          if (this.pending.get(pp) !== ip) return;
          if (op.u + (0, op.ue)(Ip.byteLength) > op.Gc) return void this.ringRefused(pp, ip, cp, new Ap(`${Up(cp)}'s record is ${Ip.byteLength-Sp.d} bytes, past the cmd ring's ${op.Gc}`), xp);
          const Lp = {
            file: pp,
            url: cp,
            payload: Ip,
            glb: Op,
            attempt: ip
          };
          xp ? this.ready.unshift(Lp) : this.ready.push(Lp)
        }))
      }
      async fallBack(pp, ip, cp, Op) {
        var op;
        let Ip = null,
          Sp = Op;
        try {
          Ip = await this.files.shippedUrl(pp)
        } catch (xp) {
          Sp = xp
        }
        this.pending.get(pp) === ip && (null !== Ip && Ip !== cp ? (null === (op = this.onPackFileFailed) || void 0 === op || op.call(this, pp, Op), ip.ask || this.drawn.get(pp) !== Ip ? (ip.url = Ip, ip.inPlaceOf = cp, this.load(pp, ip, Ip)) : this.pending.delete(pp)) : this.giveUp(pp, ip, cp, Sp))
      }
      ringRefused(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Ip.l)(cp) ? this.fallBack(pp, ip, cp, Op): this.giveUp(pp, ip, cp, Op, op)
      }
      giveUp(pp, ip, cp, op) {
        let Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: pp,
          url: Up(cp),
          error: op,
          startup: this.startupLeft.has(pp)
        }), ip.ask || !this.drawn.has(pp) ? (0, Op.P)(op) ? this.queueRecord(pp, ip, cp, Dp, Promise.resolve((0, Sp.l)(pp, (0, xp.h)(op))), Ip) : this.buildFile(pp, ip, cp, Dp, Ip) : this.pending.delete(pp)
      }
      async resendIfChanged(pp) {
        var ip;
        if (0 !== (pp & Ip.g)) return;
        let cp;
        try {
          cp = await this.wanted(pp)
        } catch {
          return
        }(null !== (ip = cp.url) && void 0 !== ip ? ip : void 0) === this.drawn.get(pp) || this.pending.has(pp) || this.written.has(pp) || this.fetch(pp, this.mW(pp, !1), cp.url, cp.inPlaceOf)
      }
      drain(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === pp) return;
        let cp = 0,
          Op = 0;
        for (; Op < this.ready.length && cp < 262144;) {
          const xp = this.ready[Op];
          if (this.written.has(xp.file)) {
            Op++;
            continue
          }
          const Dp = this.nextSeq;
          new DataView(xp.payload.buffer, xp.payload.byteOffset, xp.payload.byteLength).setUint32(Sp.g, Dp, !0);
          const Pp = xp.attempt.sx && xp.glb.byteLength > 0 && this.drawn.get(xp.file) === xp.url;
          if (pp(Lp, Pp ? 1 : 0, xp.payload)) {
            if (this.nextSeq = Dp >= Yp - 1 ? 1 : Dp + 1, this.ready.splice(Op, 1), cp += xp.payload.byteLength, this.pending.delete(xp.file), this.startupLeft.delete(xp.file), this.written.set(xp.file, {
                seq: Dp,
                url: xp.url,
                empty: 0 === xp.glb.byteLength,
                attempt: xp.attempt
              }), xp.glb.byteLength > 0) try {
              var op;
              null === (op = this.onWritten) || void 0 === op || op.call(this, xp.file, xp.glb)
            } catch (Ip) {
              console.warn("ModelFeed: reading the file's images failed", Ip)
            }
          } else {
            if (null === ip || 0 === xp.glb.byteLength || ip(xp.payload.byteLength)) return;
            this.ready.splice(Op, 1);
            const pp = new Ap(`${Up(xp.url)}'s record is ${xp.payload.byteLength-Sp.d} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(xp.file, xp.attempt, xp.url, pp, !0)
          }
        }
      }
    }

    function yp(pp) {
      return new Pp(`presentation refused ${Up(pp)}`)
    }

    function Up(pp) {
      return pp.startsWith("data:") ? `${pp.slice(0,Math.min(Math.max(pp.indexOf(","),5),64))},...` : pp
    }
  },
  40997: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      g: () => Ip,
      j: () => Dp,
      l: () => xp,
      o: () => Yp,
      r: () => Lp
    });
    var Op = cp(2970),
      op = cp(3309);
    const Ip = 2147483648,
      Sp = 1073741824;

    function xp(pp) {
      return pp.startsWith("data:")
    }

    function Lp(pp) {
      let {
        onTableFailed: ip,
        packUrl: cp
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Op = Yp();
      Op.catch((pp => {
        null === ip || void 0 === ip || ip(pp)
      }));
      const op = async ip => (await Op).fileUrl((ip & ~Ip) >>> 0, pp);
      return {
        startup: [],
        url: async pp => {
          if (cp && 0 === (pp & Ip)) {
            const ip = await Op,
              op = ip.filePackName(pp),
              Ip = null === op || "lifeform" === ip.fileSource(pp) ? null : cp(op);
            if (null !== Ip) return Ip
          }
          return op(pp)
        },
        shippedUrl: op
      }
    }

    function Yp() {
      return cp.e(42).then((() => cp(42949)))
    }
    async function Dp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return pp.startsWith("data:") ? (0, op.d)(pp.slice(pp.indexOf(",") + 1), ip) : (0, Op.F)(pp, {
        spare: ip
      })
    }
  },
  41001: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp,
      g: () => Dp,
      i: () => Wp,
      j: () => wp,
      l: () => yp,
      o: () => Pp,
      q: () => Up
    });
    const Op = 826427981,
      op = 1,
      Ip = 2,
      Sp = 44,
      xp = 46,
      Lp = 58,
      Yp = 8,
      Dp = 4;

    function Ap(pp, ip, cp) {
      const op = (new TextEncoder).encode(cp),
        Ip = Yp + 4 * (ip.length + 2),
        Sp = new Uint8Array(Ip + (op.byteLength + 3 & -4)),
        xp = new DataView(Sp.buffer);
      return xp.setUint32(0, pp, !0), xp.setUint32(Yp, Op, !0), ip.forEach(((pp, ip) => {
        xp.setUint32(Yp + 4 * (ip + 1), pp, !0)
      })), xp.setUint32(Ip - 4, op.byteLength, !0), Sp.set(op, Ip), Sp
    }

    function Pp(pp, ip) {
      return Ap(pp, [Ip], ip)
    }

    function Wp(pp, ip) {
      return Ap(pp, [op, xp], ip)
    }

    function yp(pp, ip) {
      return Ap(pp, [op, Lp], ip)
    }

    function Up(pp, ip) {
      return Ap(pp, [op, Sp], ip)
    }

    function wp(pp) {
      const ip = Yp;
      if (pp.byteLength < ip + 12) return !1;
      const cp = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
      return cp.getUint32(ip, !0) === Op && cp.getUint32(ip + 4, !0) === op && cp.getUint32(ip + 8, !0) === Sp
    }
  },
  40923: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      e: () => Dp,
      g: () => Sp,
      h: () => Lp
    });
    var Op = cp(36484);
    class op extends Error {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${pp}: the module trapped${cp?" in an earlier call":""}: ${String(ip)}`, {
          cause: ip
        }), this.site = pp, this.trap = ip, this.earlier = cp, this.name = "ModuleTrapError", ip instanceof Error && void 0 !== ip.stack && (this.stack = `${this.name}: ${this.message}\n${ip.stack}`)
      }
    }
    const Ip = new WeakMap;

    function Sp(pp) {
      return Ip.has(pp)
    }

    function xp(pp, ip) {
      Ip.has(pp) || Ip.set(pp, ip)
    }

    function Lp(pp, ip) {
      return !!(0, Op.e)(ip) && (xp(pp, ip), !0)
    }
    const Yp = [
      ["error", pp => pp.error],
      ["unhandledrejection", pp => pp.reason]
    ];

    function Dp(pp, ip, cp) {
      let Sp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Ip.has(pp) ? Promise.reject(new op(ip, Ip.get(pp), !0)) : new Promise(((Ip, Lp) => {
        const Dp = cp => {
            xp(pp, cp), Wp(), Lp(new op(ip, cp))
          },
          Ap = pp => {
            pp instanceof WebAssembly.RuntimeError ? Dp(pp) : (Wp(), Lp(pp))
          },
          Pp = Yp.map((pp => {
            let [ip, cp] = pp;
            return [ip, pp => {
              const ip = cp(pp);
              (0, Op.e)(ip) && Dp(ip)
            }]
          })),
          Wp = () => {
            for (const [pp, ip] of Pp) null === Sp || void 0 === Sp || Sp.removeEventListener(pp, ip)
          };
        for (const [pp, ip] of Pp) null === Sp || void 0 === Sp || Sp.addEventListener(pp, ip);
        let yp;
        try {
          yp = cp()
        } catch (Up) {
          return void Ap(Up)
        }
        yp.then((pp => {
          Wp(), Ip(pp)
        }), Ap)
      }))
    }
  },
  40902: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => hp,
      C: () => Qp,
      G: () => mp,
      J: () => Xp,
      K: () => np,
      L: () => lp,
      N: () => Bp,
      O: () => Ep,
      Q: () => Fp,
      b: () => kp,
      e: () => dp,
      f: () => Np,
      i: () => Jp,
      j: () => Hp,
      l: () => jp,
      m: () => vp,
      q: () => qp,
      u: () => Cp,
      x: () => ap
    });
    var Op = cp(209),
      op = cp(25),
      Ip = cp(3657),
      Sp = cp(316),
      xp = cp(44),
      Lp = cp(40911),
      Yp = cp(36679),
      Dp = cp(40938),
      Ap = (cp(40976), cp(41025)),
      Pp = cp(40962);
    const Wp = "wasmJoinBuild";
    let yp = null,
      Up = null,
      wp = null;

    function vp(pp) {
      wp = pp
    }
    let tp = !1;

    function Hp() {
      tp = !0
    }

    function dp() {
      return tp
    }
    let ep = !1;

    function jp() {
      ep = !0
    }

    function kp() {
      return ep
    }

    function mp() {
      return wp
    }
    let Rp = null;

    function qp(pp) {
      Rp = pp, (0, Sp.e)(pp)
    }
    const Mp = "wasmClientRenderLost";

    function Cp() {
      xp.l.setItem(Mp, !0)
    }

    function Ep() {
      return !0 === xp.l.getItem(Mp)
    }

    function Xp() {
      return Rp
    }

    function lp() {
      if (null === yp) {
        xp.h.removeItem("wasmLastPick"), xp.h.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, Sp.k)(), yp = (0, Lp.F)(Dp.f).then((pp => (null === pp || (0, Lp.s)(pp) || (Up = Ap.b[pp.backend], op.c.followGameGpu("webgpu" === pp.backend ? pp.adapter : null), "webgpu" === pp.backend && (0, Pp.g)()), pp)))
      }
      return yp
    }

    function Qp() {
      return Up
    }

    function Jp(pp) {
      return pp ? pp.load() : Promise.resolve().then((function() {
        var pp = new Error("Cannot find module '@bloxd/wasm/client'");
        throw pp.code = "MODULE_NOT_FOUND", pp
      })).then((pp => pp.bloxdWasmClient))
    }

    function Bp(pp) {
      xp.h.setItem(Wp, pp)
    }
    async function Np() {
      if (null === Dp.f) return Jp(null);
      const pp = xp.h.getItem(Wp);
      let ip;
      return null === pp ? ip = void 0 !== (0, Op.e)(Dp.f, "webgpu") && (0, Lp.E)() ? "webgpu" : "webgl" : "none" === pp ? ip = null : "string" === typeof pp && void 0 !== (0, Op.e)(Dp.f, pp) ? ip = pp : (console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(pp)}, is none of this client's: guessing WebGL2's`), ip = "webgl"), null === ip ? null : Dp.f[ip]()
    }
    let Tp = null,
      fp = null,
      bp = null;

    function hp() {
      return Tp ??= lp().then((async pp => {
        const ip = null !== pp && !(0, Lp.s)(pp),
          cp = {
            indirectHangs: ip && await (0, Lp.T)(pp, window.location.search),
            storagePullBreaks: ip && (0, Lp.ab)(pp, window.location.search),
            splitPassBreaks: ip && (0, Lp._)(pp, window.location.search),
            earlySky: ip && (0, Lp.Q)(pp, window.location.search),
            instancedTerrain: ip ? (0, Lp.V)(pp, window.location.search) : null,
            cellLight: ip && await (0, Ip.j)("cellLight"),
            framesAhead: (0, Lp.k)(window.location.search),
            webGpuRestores: !ip || (0, Lp.eb)(pp, (0, Yp.c)()),
            bufferCopiesCrash: ip && (0, Lp.N)(pp, window.location.search)
          };
        return fp = cp.indirectHangs, bp = !cp.webGpuRestores, cp
      })), Tp
    }

    function ap() {
      return fp
    }

    function np() {
      return bp
    }
    async function Fp() {
      const pp = null === yp ? null : await yp;
      return null !== pp && (0, Lp.s)(pp) && (yp = null, Tp = null, fp = null, bp = null), lp()
    }
  },
  41185: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp
    });
    var Op = cp(36519),
      op = cp(41058),
      Ip = cp(36679);

    function Sp(pp, ip) {
      return (0, Op.k)(pp, op.g, {
        ...ip,
        memoryMaximumBytes: (0, Ip.p)()
      })
    }
  },
  40930: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp,
      h: () => xp,
      l: () => Dp,
      o: () => Sp
    });
    var Op = cp(335),
      op = cp(650);
    let Ip;

    function Sp(pp) {
      var ip;
      const cp = Ip;
      return Ip = void 0, null !== (ip = Lp(pp)) && void 0 !== ip ? ip : cp
    }

    function xp(pp) {
      try {
        const ip = Lp(pp);
        void 0 !== ip && (Ip = ip, (0, op.e)((0, Op.l)(ip.reason, ip.message)))
      } catch (ip) {
        console.warn("Couldn't keep the WebGPU loss's cause", ip)
      }
    }

    function Lp(pp) {
      var ip;
      const cp = null === pp || void 0 === pp || null === (ip = pp.OSp) || void 0 === ip ? void 0 : ip.call(pp),
        Op = null === pp || void 0 === pp ? void 0 : pp.cSp();
      if (void 0 === Op) return;
      const op = new Error(Op);
      return void 0 !== cp && (op.reason = cp), op
    }

    function Yp(pp) {
      return pp instanceof Error ? pp : void 0
    }

    function Dp(pp, ip) {
      return "lost" !== pp && "frames_refused" !== pp ? {} : (0, Op.l)("frames_refused" === pp ? pp : null === ip || void 0 === ip ? void 0 : ip.reason, null === ip || void 0 === ip ? void 0 : ip.message)
    }
  },
  40954: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => mp,
      d: () => Hp,
      g: () => tp,
      k: () => kp,
      n: () => Cp,
      p: () => Mp,
      t: () => Ep,
      v: () => ep
    });
    var Op = cp(4911),
      op = cp(40962);
    const Ip = 1,
      Sp = 18,
      xp = 19,
      Lp = 20,
      Yp = 21,
      Dp = {
        [Ip]: "link",
        2: "draw",
        3: "draw base vertex",
        4: "draw no index buffer",
        7: "draw missing block",
        8: "draw small binding",
        9: "draw missing texture",
        10: "draw no texture storage",
        11: "draw missing sampler",
        12: "draw missing vertex buffer",
        13: "draw short constant",
        15: "draw no zero buffer",
        16: "draw feedback loop",
        [Sp]: "retry linked",
        [xp]: "fallback linked",
        [Lp]: "fallback failed",
        [Yp]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function Ap(pp, ip, cp) {
      return pp === Sp ? "program retry" : pp === Ip ? "program link" : pp === Yp ? "program link stall" : pp === xp || pp === Lp ? `program ${ip} ${cp}` : "program"
    }
    const Pp = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      Wp = {
        0: "transform",
        1: "object",
        2: "instance batch",
        3: "material",
        4: "terrain part",
        5: "particle system",
        6: "geometry",
        7: "texture",
        9: "shader pack",
        10: "text plane",
        11: "object chunk"
      },
      yp = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Up = {
        11: "none read after view",
        12: "some read after view"
      },
      wp = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...Up
      },
      vp = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function tp(pp, ip) {
      return pp === Op.k.RenderSerialLinks && void 0 !== Up[ip]
    }

    function Hp(pp, ip) {
      return pp === Op.k.RenderSerialLinks && void 0 !== vp[15 & ip]
    }
    const dp = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function ep(pp) {
      return String(pp).replace(/\d/g, (pp => String.fromCharCode(97 + Number(pp))))
    }

    function jp(pp, ip) {
      var cp;
      return null !== (cp = pp[ip]) && void 0 !== cp ? cp : ep(ip)
    }

    function kp() {
      return ep((0, op.e)())
    }

    function mp(pp, ip) {
      switch (pp) {
        case Op.k.RenderSceneRowNotDrawn:
          return {
            words: ` ${jp(Wp,ip)}`, instance: String(ip), group: String(pp)
          };
        case Op.k.RenderChunkMeshNotDrawn: {
          const cp = 0 === (128 & ip) ? "" : " shortage",
            Op = ip >>> 8;
          return {
            words: ` ${jp(yp,127&ip)}${cp}${0===Op?"":` kind ${ep(Op)}`}`,
            instance: String(ip),
            group: String(pp)
          }
        }
        case Op.k.RenderInternal: {
          const cp = jp(Pp, 255 & ip),
            Op = ip >>> 8 & 255;
          if (0 === Op) return {
            words: ` ${cp}`,
            instance: String(ip),
            group: String(pp)
          };
          const op = jp(Dp, Op),
            Ip = ip >>> 16;
          return {
            words: ` ${cp} ${op} program ${ep(Ip)}`,
            instance: `${cp} ${op} ${Ip}`,
            group: Ap(Op, op, cp),
            gpuDetails: {
              programFailure: op,
              program: String(Ip)
            }
          }
        }
        case Op.k.RenderSerialLinks: {
          if (Hp(pp, ip)) {
            const pp = function(pp) {
              const ip = (ip, cp) => ep(pp >>> ip & (1 << cp) - 1),
                cp = pp >>> 30 & 1 ? " restored" : "";
              return `link census ${vp[15&pp]} linked ${ip(22,8)} failed ${ip(4,6)} retried ${ip(10,6)} fallback ${ip(16,6)}${cp}`
            }(ip);
            return {
              words: ` ${pp}`,
              instance: String(15 & ip),
              group: "link census",
              gpuDetails: {
                linkCensus: pp
              }
            }
          }
          const cp = jp(wp, ip);
          return {
            words: ` ${cp}`,
            instance: String(ip),
            group: String(pp),
            gpuDetails: {
              serialLinks: cp
            }
          }
        }
        case Op.k.RenderGlErrorAfterRestore: {
          const cp = jp(dp, 65535 & ip),
            Op = ip >>> 16,
            op = 65535 !== Op;
          return {
            words: ` ${cp}${op?` program ${ep(Op)}`:""}`,
            instance: String(ip),
            group: String(pp),
            gpuDetails: op ? {
              glError: cp,
              program: String(Op)
            } : {
              glError: cp
            }
          }
        }
        default:
          return null
      }
    }
    const Rp = 2,
      qp = new Map;

    function Mp(pp) {
      let {
        group: ip,
        instance: cp
      } = pp, Op = qp.get(ip);
      return void 0 === Op && (Op = [], qp.set(ip, Op)), !Op.includes(cp) && (Op.length >= Rp || (Op.push(cp), !1))
    }

    function Cp() {
      return qp.size > 0
    }

    function Ep() {
      qp.clear()
    }
  },
  40938: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      f: () => Ip
    });
    var Op = cp(40945);
    const op = new WeakSet;
    const Ip = {
        webgpu: async () => (function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === pp || op.has(pp.prototype)) return;
          op.add(pp.prototype);
          const ip = pp.prototype.requestDevice;
          pp.prototype.requestDevice = function(pp) {
            var cp;
            const op = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.requiredLimits) && void 0 !== cp ? cp : {},
              Ip = Object.keys(op).filter((pp => !(pp in this.limits)));
            if (0 === Ip.length) return ip.call(this, pp);
            const Sp = Object.fromEntries(Object.entries(op).filter((pp => {
              let [ip] = pp;
              return ip in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${Ip.join(", ")}`), (0, Op.reportDroppedRequiredLimits)(Ip), ip.call(this, {
              ...pp,
              requiredLimits: Sp
            })
          }
        }(), (await cp.e(8).then((() => cp(42898)))).bloxdWasmWebgpu),
        webgl: async () => (await cp.e(6).then((() => cp(42908)))).bloxdWasmWebgl,
        webgl1: async () => (await cp.e(7).then((() => cp(42923)))).bloxdWasmWebgl1
      },
      Sp = async () => (await cp.e(5).then((() => cp(42935)))).compileAnimationPackInWasm
  },
  40889: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => vp,
      g: () => wp,
      k: () => ep
    });
    var Op = cp(6788),
      op = cp(34),
      Ip = cp(4385),
      Sp = cp(4911),
      xp = cp(6780),
      Lp = cp(40892);

    function Yp(pp, ip) {
      const cp = (0, xp.c)(ip.variants);
      return pp.setShaderPack(cp.variantFlags, cp.hooks, cp.moduleCodes, (0, Lp.A)(ip.layers), Lp.m[ip.Cx], ip.keepCircleShadows)
    }
    const Dp = 0,
      Ap = 1,
      Pp = 2,
      Wp = "shaderPack:failedToCompile",
      yp = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      Up = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function wp(pp, ip) {
      var cp;
      const Op = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.reason) && void 0 !== cp ? cp : "none";
      return yp.has(Op) ? {
        messageKey: ip ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Op && "override" === (null === pp || void 0 === pp ? void 0 : pp.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Up.has(Op) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class vp extends Error {
      constructor(pp) {
        super(`the shader pack can't run in this game: ${pp}`), this.messageKey = pp, this.name = "ShaderPackJoinError"
      }
    }
    const tp = "strict";
    class Hp {
      constructor(pp) {
        this.deps = pp, this.pagePack = void 0, this.loaded = null, this.Cx = tp, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = pp.load().catch((ip => (pp.warn("the shader pack could not load: the game draws without it", ip), {
          status: "none"
        }))).then((pp => (this.loaded = pp, "active" === pp.status && (this.handOverToPreviews(pp), null !== pp.harnessPolicy && (this.Cx = pp.harnessPolicy, this.handOver())), pp)))
      }
      async join(pp) {
        this.leave();
        const ip = this.game,
          [cp, op] = await Promise.all([this.pagePack, this.policyOf(pp)]);
        if (ip !== this.game || "none" === cp.status) return null;
        const Ip = "active" === cp.status ? cp.pack.variants : cp.variants,
          Sp = (0, Op.f)(Ip, op);
        if (Sp && "active" === cp.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Sp) {
          const pp = this.cantRun(cp, op);
          if (null !== pp) return pp
        } else if ("blocked" === cp.status || null === this.deps.core) return null;
        return this.Cx = op, this.handOver(), Sp && this.refused ? Wp : (this.joined = !0, this.offInThisGame = !Sp, null)
      }
      async replay(pp) {
        const ip = await this.join(pp);
        null === ip ? this.playable() : this.deps.failInGame(ip)
      }
      cantRun(pp, ip) {
        const {
          core: cp,
          noWebGpu: Op
        } = this.deps;
        if ("blocked" === pp.status) {
          return "shaderPack:failedUnchecked" === pp.messageKey && null === cp && Op.noAdapter ? Op.messageKey : pp.messageKey
        }
        return this.refused || this.failedPolicies.has(ip) ? Wp : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var pp;
        return this.runsInJoinedGame() && "active" === (null === (pp = this.loaded) || void 0 === pp ? void 0 : pp.status) ? function(pp, ip) {
          const cp = pp.filter((pp => (0, Op.f)([pp], ip))),
            op = pp => cp.some((ip => ip[pp]));
          return {
            sceneDepth: op("sceneDepth"),
            sunShadow: op("sunShadow"),
            airShadow: op("airShadow")
          }
        }(this.loaded.pack.variants, this.Cx) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Wp) : (null !== this.couldntRun ? this.notify(Ip.c, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Cx) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(pp) {
        for (const {
            code: ip,
            detail: cp
          }
          of pp)
          if (ip === Sp.k.RenderShaderPackNotRun) switch (255 & cp) {
            case Dp:
              this.refused = !0, this.failed();
              break;
            case Ap:
              this.failedPolicies.add(this.Cx), this.failed();
              break;
            case Pp:
              this.failedModelPolicies.add(this.Cx), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Wp) : this.failedWhileJoining = !0)
      }
      fail(pp) {
        this.leave(), this.deps.failInGame(pp)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(pp, ip) {
        const cp = this.game;
        this.deps.notify(pp, (() => cp === this.game && this.joined), ip)
      }
      handOver() {
        var pp;
        const {
          core: ip
        } = this.deps;
        null !== ip && "active" === (null === (pp = this.loaded) || void 0 === pp ? void 0 : pp.status) && (Yp(ip, {
          ...this.loaded.pack,
          Cx: this.Cx
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(pp) {
        let {
          pack: ip,
          harnessPolicy: cp
        } = pp;
        const {
          previews: Op
        } = this.deps;
        null !== Op && Yp(Op, {
          ...ip,
          Cx: null !== cp && void 0 !== cp ? cp : tp
        })
      }
      policyOf(pp) {
        return this.deps.policyOf(pp).catch((pp => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", pp), tp)))
      }
    }
    const dp = "wasmShaderPackNotice";

    function ep(pp, ip, cp, Op) {
      return op.m.subscribe(dp, (pp => {
        let {
          translationKey: ip,
          stillCurrent: cp,
          reasonKey: Op
        } = pp;
        cp() && op.m.GA("chat", (0, Ip.j)(ip, Op))
      })), new Hp({
        load: jp,
        policyOf: kp,
        core: pp,
        previews: ip,
        noWebGpu: cp,
        notify: (pp, ip, cp) => {
          const Op = {
            translationKey: pp,
            stillCurrent: ip,
            reasonKey: cp
          };
          op.m.GA(dp, Op, !0)
        },
        failInGame: pp => {
          op.m.GA(Ip.g, pp)
        },
        warn: Op
      })
    }
    async function jp() {
      const [{
        shaderPackPage: pp,
        harnessShaderPackMode: ip
      }, {
        shaderPackTextures: Op
      }] = await Promise.all([cp.e(117).then((() => cp(39396))), cp.e(118).then((() => cp(6772)))]), op = await pp.load();
      return "active" !== op.status ? op : {
        status: "active",
        pack: {
          variants: op.pack.variants,
          layers: Op().layers,
          keepCircleShadows: op.pack.keepCircleShadows
        },
        harnessPolicy: ip()
      }
    }
    async function kp(pp) {
      var ip;
      const [{
        shaderPackPage: Op,
        harnessShaderPackMode: op
      }, {
        getShaderPackPolicy: Ip
      }] = await Promise.all([cp.e(117).then((() => cp(39396))), cp.e(93).then((() => cp(41507)))]);
      return await Op.load(), null !== (ip = op()) && void 0 !== ip ? ip : Ip(pp)
    }
  },
  41008: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp,
      f: () => wp,
      h: () => Lp,
      i: () => Yp,
      j: () => Dp,
      n: () => Pp
    });
    var Op = cp(41014),
      op = cp(41016);
    const Ip = "atlas:",
      Sp = 3e4;
    class xp extends Error {
      constructor(pp, ip) {
        super(`fetching ${pp} answered HTTP ${ip}`), this.url = pp, this.status = ip, this.name = "TerrainTextureFetchError"
      }
    }

    function Lp(pp) {
      if (!pp.startsWith(Ip)) return null;
      const ip = Number(pp.slice(Ip.length));
      return Number.isInteger(ip) && ip >= 0 ? ip : null
    }
    async function Yp() {
      const pp = await cp.e(207).then((() => cp(34510)));
      return {
        atlasSheets: pp.blockAtlasUrls,
        texture: ip => {
          var cp, Op, Ip;
          return null !== (cp = null !== (Op = null !== (Ip = pp.animatedBlockTextures[ip]) && void 0 !== Ip ? Ip : pp.rotatedBlockTextures[ip]) && void 0 !== Op ? Op : op.c[ip]) && void 0 !== cp ? cp : null
        }
      }
    }
    async function Dp(pp) {
      const ip = new AbortController,
        cp = setTimeout((() => {
          ip.abort(new DOMException(`${pp} took over ${Sp} ms`, "TimeoutError"))
        }), Sp);
      let Op;
      try {
        const cp = await fetch(pp, {
          signal: ip.signal
        });
        if (!cp.ok) throw new xp(pp, cp.status);
        Op = await cp.blob()
      } finally {
        clearTimeout(cp)
      }
      const op = await createImageBitmap(Op, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Pp(op)
      } finally {
        op.close()
      }
    }
    const Ap = 8192;

    function Pp(pp) {
      const {
        width: ip,
        height: cp
      } = pp, op = Math.max(1, Math.min(cp, Ap)), Ip = (0, Op.e)(ip, op, {
        willReadFrequently: !0
      });
      if (!Ip) throw new Error("no 2D context to read the texture back");
      Ip.globalCompositeOperation = "copy";
      const Sp = new Uint8Array(ip * cp * 4);
      for (let Op = 0; Op < cp; Op += op) {
        const xp = Math.min(op, cp - Op);
        Ip.drawImage(pp, 0, Op, ip, xp, 0, 0, ip, xp), Sp.set(Ip.getImageData(0, 0, ip, xp).data, Op * ip * 4)
      }
      return {
        width: ip,
        height: cp,
        pixels: Sp
      }
    }
    async function Wp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Dp;
      const Op = [],
        op = await Promise.all(pp.map((async pp => {
          var op, Sp;
          const xp = null !== (op = null === (Sp = ip.decoded) || void 0 === Sp ? void 0 : Sp.call(ip, pp)) && void 0 !== op ? op : null,
            Yp = null === xp ? function(pp, ip) {
              if (pp.startsWith(Ip)) {
                var cp;
                const Op = Lp(pp);
                return null === Op ? null : null !== (cp = ip.atlasSheets[Op]) && void 0 !== cp ? cp : null
              }
              return ip.texture(pp)
            }(pp, ip) : null,
            Dp = null !== xp && void 0 !== xp ? xp : null === Yp ? null : cp(Yp);
          if (null === Dp) return Op.push({
            name: pp,
            url: Yp,
            error: new Error(`no URL for terrain texture ${pp}`)
          }), null;
          try {
            const ip = await Dp;
            if (ip.pixels.byteLength !== ip.width * ip.height * 4) throw new Error(`decoded ${ip.pixels.byteLength} bytes for ${ip.width}x${ip.height} texels`);
            return {
              name: pp,
              texture: ip
            }
          } catch (Ap) {
            return Op.push({
              name: pp,
              url: Yp,
              error: Ap
            }), null
          }
        }))),
        Sp = op.filter((pp => null !== pp)),
        xp = new Uint32Array(2 * Sp.length);
      Sp.forEach(((pp, ip) => {
        let {
          texture: cp
        } = pp;
        xp[2 * ip] = cp.width, xp[2 * ip + 1] = cp.height
      }));
      return {
        handOver: {
          names: Sp.map((pp => {
            let {
              name: ip
            } = pp;
            return ip
          })),
          textures: Sp.map((pp => {
            let {
              texture: ip
            } = pp;
            return ip.pixels
          })),
          sizes: xp
        },
        failures: Op
      }
    }
    const yp = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Up() {}
    class wp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yp,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = pp, this.retryMs = ip, this.keepBelow = cp, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yp,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Op = ++this.started,
          op = {
            decode: cp.decode,
            wholeAtlas: cp.wholeAtlas
          };
        return this.loadAndHandOver(ip, op, pp, (() => {
          var pp;
          return Op < this.landed || !1 === (null === (pp = cp.wanted) || void 0 === pp ? void 0 : pp.call(cp))
        }), {
          onTaken: (pp, cp) => {
            this.landed = Op, this.current = {
              mine: Op,
              sources: ip,
              load: op,
              aW: pp,
              failed: cp
            }
          }
        })
      }
      restore(pp) {
        var ip;
        const cp = this.current;
        if (null === cp) return Promise.resolve(null);
        if ((null === (ip = this.restoring) || void 0 === ip ? void 0 : ip.mine) === cp.mine) return this.restoring.done;
        const Op = {
          mine: cp.mine,
          done: this.restoreLanded(cp, pp).finally((() => {
            this.restoring === Op && (this.restoring = null)
          }))
        };
        return this.restoring = Op, Op.done
      }
      async restoreLanded(pp, ip) {
        const cp = () => this.landed !== pp.mine,
          {
            aW: Op
          } = pp;
        if (null !== Op) return this.stopped() ? null : this.core.setTerrainTextures(Op.names, Op.textures, Op.sizes);
        let op = ip;
        for (let Ip = 0;; Ip++) {
          const ip = this.retryMs.at(Ip),
            Op = {
              allOrNothingExcept: void 0 === ip ? void 0 : pp.failed
            },
            Sp = await this.loadAndHandOver(pp.sources, pp.load, op, cp, Op);
          if (!1 !== Sp || void 0 === ip || this.stopped()) return Sp;
          if (op = Up, await new Promise((pp => {
              setTimeout(pp, ip)
            })), cp()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Ip = this.core.terrainTextureNames();
        var Sp;
        if (0 === Ip.length) return null === (Sp = op.onTaken) || void 0 === Sp || Sp.call(op, null, new Set), !0;
        let xp, Yp;
        try {
          xp = await pp(), Yp = await Wp(Ip, xp, ip.decode)
        } catch (wp) {
          return Op() ? null : (cp({
            name: null,
            url: null,
            error: wp
          }), !1)
        }
        if (Op() || this.stopped()) return null;
        for (const Lp of Yp.failures) cp(Lp);
        const Dp = op.allOrNothingExcept;
        if (void 0 !== Dp && Yp.failures.some((pp => {
            let {
              name: ip
            } = pp;
            return null === ip || !Dp.has(ip)
          })) || !0 === ip.wholeAtlas && Yp.failures.some((pp => {
            let {
              name: ip
            } = pp;
            return null === ip || null !== Lp(ip)
          }))) return !1;
        const {
          handOver: Ap
        } = Yp, Pp = function(pp) {
          return pp.textures.reduce(((pp, ip) => pp + ip.byteLength), 0)
        }(Ap) < this.keepBelow, yp = this.core.setTerrainTextures(Ap.names, Ap.textures, Ap.sizes, Pp ? void 0 : () => {
          !async function(pp, ip) {
            await ip;
            for (const {
                buffer: Op
              }
              of pp) {
              const pp = Op;
              var cp;
              if (!pp.detached) null === (cp = pp.transfer) || void 0 === cp || cp.call(pp, 0)
            }
          }(Ap.textures, xp.heldUntil)
        });
        if (yp) {
          var Up;
          const pp = new Set(Yp.failures.flatMap((pp => {
            let {
              name: ip
            } = pp;
            return null === ip ? [] : [ip]
          })));
          null === (Up = op.onTaken) || void 0 === Up || Up.call(op, Pp ? Ap : null, pp)
        }
        return yp
      }
    }
  },
  37044: (pp, ip, cp) => {
    function Op(pp) {
      return "fetch" === pp || "timeout" === pp || "integrity" === pp ? "download" : "browser"
    }
    cp.d(ip, {
      d: () => op,
      h: () => Sp,
      i: () => Lp,
      j: () => xp,
      n: () => Op,
      p: () => Ip
    });
    const op = "https://discord.gg/playbloxd";

    function Ip(pp) {
      return "download" === pp ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: "wasmScreens:unsupportedTitle",
        help: "wasmScreens:unsupportedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Sp(pp, ip) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: ip ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: pp.code
        },
        discordLink: ip,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function xp() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Lp(pp, ip, cp) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: cp ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: pp.reason
        },
        discordLink: null === pp.name,
        confirm: ip ? "general:reconnect" : pp.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  34379: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Yp,
      e: () => Ap,
      h: () => Dp
    });
    var Op = cp(259),
      op = cp(104),
      Ip = cp(129),
      Sp = cp(120),
      xp = cp(652);
    const Lp = new Set(["mali_bifrost"]);

    function Yp() {
      if ("android" !== (0, op.pageOperatingSystem)() || xp.e || (0, xp.c)("webgl_default")) return;
      const pp = (0, Ip.j)(),
        ip = null === pp ? (0, Op.n)() : (0, Op.h)(pp.vendor, pp.renderer);
      return null !== ip && Lp.has(ip) ? pp => (0, Op.k)((0, Sp.c)(pp).vendor, ip) : void 0
    }

    function Dp(pp, ip) {
      return pp ? () => !0 : ip()
    }
    async function Ap(pp) {
      try {
        const ip = Dp(pp, Yp),
          cp = navigator.gpu;
        if (void 0 === ip || void 0 === cp) return !1;
        const Op = await (0, Sp.o)(cp, {
          seed: !1,
          compatibility: ip
        });
        return "string" !== typeof Op && Op.compatibility && !(0, Sp.j)(Op.adapter)
      } catch (ip) {
        return console.error("WebGPU compatibility-mode adapter request failed.", ip), !1
      }
    }
  },
  40962: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Lp,
      g: () => Yp
    });
    var Op = cp(104),
      op = cp(38993);
    const Ip = "webgpuPipeline";

    function Sp(pp) {
      return pp.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let xp = null;

    function Lp() {
      if (null === xp) try {
        pp = (0, Op.getBrowserName)(), ip = (0, Op.getBrowserVersion)(), cp = (0, Op.getOperatingSystem)(), op = (0, Op.getOperatingSystemVersion)(), xp = `${pp.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===ip?"unknown":Sp(ip)}-${cp}${void 0===op?"":`_${Sp(op)}`}`
      } catch (Ip) {
        console.warn("The user agent couldn't be read for its browser code", Ip), xp = "unknown"
      }
      var pp, ip, cp, op;
      return xp
    }

    function Yp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const ip = `WGPU-${Lp()}`,
        Op = (pp, Op) => {
          const {
            reason: Sp,
            message: xp
          } = Op;
          if ((0, op.x)(String(xp))) return;
          const Lp = {
            pipeline: null !== pp && void 0 !== pp ? pp : "",
            reason: String(Sp),
            browserMessage: String(xp)
          };
          Promise.resolve().then((() => cp(40945))).then((pp => {
            let {
              reportCrash: cp
            } = pp;
            cp({
              kind: "coreError",
              code: ip,
              site: Ip,
              fatal: !1,
              message: `${Lp.pipeline} ${Lp.reason}: ${Lp.browserMessage}`,
              details: Lp,
              error: Op
            })
          })).catch((pp => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", pp)
          }))
        },
        Sp = pp.createRenderPipelineAsync;
      pp.createRenderPipelineAsync = function(pp) {
        return Sp.call(this, pp).catch((ip => {
          throw Op(pp.label, ip), ip
        }))
      };
      const xp = pp.createComputePipelineAsync;
      pp.createComputePipelineAsync = function(pp) {
        return xp.call(this, pp).catch((ip => {
          throw Op(pp.label, ip), ip
        }))
      }
    }
  },
  41071: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/bloxd_wasm_models_bg.6dc451a3cfd872ff659f.wasm"
  },
  41062: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/bloxd_wasm_workers_bg.7e123a4b9837a1d8c1e9.wasm"
  },
  41058: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      g: () => Op
    });
    const Op = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new cp.U(cp(41062))
      }
    };
    const op = {
      name: "bloxd_wasm_models",
      url: function() {
        return new cp.U(cp(41071))
      }
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
  40892: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Up,
      C: () => Wp,
      E: () => yp,
      c: () => op,
      g: () => Op,
      h: () => Pp,
      l: () => Dp,
      m: () => wp,
      o: () => Ip,
      r: () => xp,
      t: () => Lp,
      x: () => Sp
    });
    const Op = 3,
      op = 0,
      Ip = 1,
      Sp = 2,
      xp = {
        uniform: 3,
        hP: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Lp = 10,
      Yp = "BloxdPackInputs",
      Dp = "bloxdPackInputs",
      Ap = [{
        name: "seconds",
        type: "f32",
        offset: 0
      }, {
        name: "lit",
        type: "u32",
        offset: 4
      }, {
        name: "renderOffset",
        type: "vec3i",
        offset: 16
      }, {
        name: "sunDirection",
        type: "vec3f",
        offset: 32
      }, {
        name: "eyePosition",
        type: "vec3f",
        offset: 48
      }, {
        name: "shadowDirection",
        type: "vec3f",
        offset: 64
      }],
      Pp = 80;

    function Wp() {
      const pp = Ap.map((pp => {
        let {
          name: ip,
          type: cp
        } = pp;
        return `    ${ip}: ${cp},\n`
      })).join("");
      return `struct ${Yp} {\n${pp}}\n@group(${Op}) @binding(${op}) var<uniform> ${Dp}: ${Yp};\n`
    }

    function yp(pp, ip) {
      const cp = new DataView(pp, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Pp),
        [Op, op, Ip, Sp, xp, Lp] = Ap;
      cp.setFloat32(Op.offset, ip.seconds, !0), cp.setUint32(op.offset, ip.lit ? 1 : 0, !0);
      for (let Yp = 0; Yp < 3; Yp++) cp.setInt32(Ip.offset + 4 * Yp, ip.renderOffset[Yp], !0), cp.setFloat32(Sp.offset + 4 * Yp, ip.opp[Yp], !0), cp.setFloat32(xp.offset + 4 * Yp, ip.eyePosition[Yp], !0), cp.setFloat32(Lp.offset + 4 * Yp, ip.shadowDirection[Yp], !0)
    }

    function Up(pp) {
      const ip = new Uint32Array(Math.max(1, pp.length));
      return pp.forEach(((pp, cp) => {
        let {
          id: Op,
          rotation: op
        } = pp;
        ip[cp] = 65535 & Op | (3 & op) << 16
      })), ip
    }
    const wp = {
      off: 0,
      strict: 1,
      allow: 2
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