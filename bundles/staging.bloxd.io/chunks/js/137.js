export const id = 137;
export const ids = [137];
export const modules = {
  38345: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Pk,
      g: () => Kk,
      i: () => Hk,
      j: () => Mk,
      l: () => mk,
      p: () => nk
    });
    var Dk = ik(293),
      fk = ik(1684);
    const Sk = "A valid external Instance reference no longer exists.",
      bk = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      rk = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const Pk = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function mk(kk, ek) {
      return kk ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(kk) {
        var ek;
        const ik = null !== (ek = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(kk)) && void 0 !== ek ? ek : /failed with ([A-Z][A-Z0-9_]+)/.exec(kk);
        return ik ? ik[1] : kk.includes(Sk) ? "gpu_process_lost" : "other"
      }(ek)
    }

    function Mk(kk) {
      return `${(null===kk||void 0===kk?void 0:kk.vendor)||"unknown vendor"} ${(null===kk||void 0===kk?void 0:kk.architecture)||"unknown architecture"}`
    }

    function Kk(kk) {
      return wk(kk)[1]
    }

    function xk(kk) {
      return wk(kk)[2]
    }

    function nk(kk, ek, ik) {
      const fk = (0, Dk.d)(),
        Sk = null !== fk && fk >= ek,
        bk = document.hidden ? "hidden" : Sk ? "shown" : "visible",
        rk = Sk ? ik - fk : null;
      return {
        page: null === rk ? bk : `${bk}${Kk(rk)}`,
        code: `${kk}_${null===rk?bk:`${bk}_${xk(rk)}`}_${Uk(ik)}`
      }
    }

    function Uk(kk) {
      if ((0, fk.c)()) return "ad_open";
      const ek = (0, fk.b)();
      return null === ek ? "ad_none" : `ad_${xk(kk-ek.endedAt)}_${ek.pageHid?"h":"v"}`
    }

    function Hk(kk) {
      return lk(rk, kk)[1]
    }

    function wk(kk) {
      return lk(bk, kk)
    }

    function lk(kk, ek) {
      var ik;
      return null !== (ik = kk.find((kk => {
        let [ik] = kk;
        return ek < ik
      }))) && void 0 !== ik ? ik : kk[kk.length - 1]
    }
  },
  40221: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      g: () => Mk,
      h: () => bk,
      k: () => fk,
      m: () => rk,
      n: () => mk
    });
    class Dk extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function fk(kk) {
      return kk instanceof RangeError && /call stack/i.test(kk.message) || kk instanceof Error && "InternalError" === kk.name && /recursion/i.test(kk.message)
    }
    const Sk = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function bk(kk) {
      var ek;
      return kk instanceof WebAssembly.RuntimeError || kk instanceof Dk || fk(kk) && Sk.test(null !== (ek = kk.stack) && void 0 !== ek ? ek : "")
    }

    function rk(kk, ek) {
      if (bk(kk)) throw kk;
      console.error(ek, kk)
    }

    function Pk(kk, ek, ik, fk, Sk) {
      if (ek % fk !== 0 || ek + ik > kk.byteLength) throw new Dk(`${Sk}: ${ik} bytes at ${ek}, ${fk}-aligned, outside ${kk.byteLength} bytes of memory`)
    }

    function mk(kk, ek, ik, Dk, fk) {
      return 0 === ik ? null : (Pk(ek, ik, Dk * kk.BYTES_PER_ELEMENT, kk.BYTES_PER_ELEMENT, fk), new kk(ek, ik, Dk))
    }

    function Mk(kk, ek, ik, Dk, fk) {
      return 0 === ek ? null : (Pk(kk, ek, ik, Dk, fk), new DataView(kk, ek, ik))
    }
  },
  40297: (kk, ek, ik) => {
    ik.d(ek, {
      B: () => Bk,
      D: () => tk,
      E: () => Tk,
      I: () => De,
      L: () => ck,
      N: () => Xk,
      Q: () => Zk,
      T: () => Gk,
      U: () => Se,
      W: () => Jk,
      _: () => Fk,
      d: () => fe,
      g: () => me,
      k: () => Rk,
      l: () => ie,
      m: () => gk,
      p: () => ee,
      r: () => ke,
      u: () => Pe,
      y: () => Wk
    });
    var Dk = ik(302),
      fk = ik(259),
      Sk = ik(267),
      bk = ik(22),
      rk = ik(2752),
      Pk = ik(646),
      mk = ik(4453),
      Mk = ik(2723),
      Kk = ik(3419),
      xk = ik(99),
      nk = ik(293),
      Uk = ik(38),
      Hk = ik(280),
      wk = ik(115),
      lk = ik(607),
      pk = ik(129),
      yk = ik(121),
      Yk = ik(4741),
      Lk = ik(40300),
      Ck = ik(1756),
      Ak = ik(40305),
      jk = ik(40311);
    const sk = "bloxd-webgpuOffAfterLoss",
      dk = "context:webgl",
      Vk = "probe:threw";

    function Fk(kk) {
      let ek;
      try {
        ek = kk.getContext("webgl", {
          powerPreference: pk.e
        })
      } catch {
        ek = null
      }
      if (null === ek) return null;
      let ik = null;
      try {
        const kk = ek.getParameter(ek.MAX_TEXTURE_SIZE);
        ik = "number" === typeof kk && kk > 0 ? kk : null
      } catch {
        ik = null
      }
      try {
        var Dk;
        null === (Dk = ek.getExtension("WEBGL_lose_context")) || void 0 === Dk || Dk.loseContext()
      } catch {}
      return ik
    }
    const uk = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      qk = "mali_valhall",
      Ik = new Set(["nvidia_pre_turing"]);

    function zk(kk) {
      return function(kk) {
        try {
          return kk()
        } catch {
          return null
        }
      }((() => {
        var ek, ik, Dk, bk;
        const rk = null !== (ek = null === (ik = kk.info) || void 0 === ik ? void 0 : ik.vendor) && void 0 !== ek ? ek : "";
        return "windows" === (0, xk.getOperatingSystem)() && "" !== rk && "intel" !== (0, xk.normaliseGpuVendor)(rk) ? null : ((0, xk.seedGpuVendor)(rk), Pk = (0, fk.g)(), mk = (0, Sk.f)(rk, null !== (Dk = null === (bk = kk.info) || void 0 === bk ? void 0 : bk.architecture) && void 0 !== Dk ? Dk : ""), uk.has(Pk) ? "android_arm" === Pk && mk === qk ? "webgpu_default" : "webgl_default" : null);
        var Pk, mk
      }))
    }

    function Qk() {
      var kk;
      return {
        gpu: null !== (kk = navigator.gpu) && void 0 !== kk ? kk : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(kk) {
          let ek, ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lk.c;
          try {
            ek = kk.getContext("webgl")
          } catch {
            ek = null
          }
          if (null === ek) return [dk];
          const Dk = [];
          try {
            for (const fk of ik.extensions) null === ek.getExtension(fk) && Dk.push(fk);
            for (const [fk, Sk] of Object.entries(ik.limits)) {
              const kk = ek[fk],
                ik = "number" === typeof kk ? ek.getParameter(kk) : null;
              ("number" !== typeof ik || ik < Sk) && Dk.push(`limit:${fk}`)
            }
            const kk = ek.getShaderPrecisionFormat(ek.VERTEX_SHADER, ek.HIGH_FLOAT);
            (null === kk || kk.precision < ik.vertexHighFloatBits) && Dk.push("precision:vertex_high_float")
          } catch {
            Dk.push(Vk)
          }
          try {
            var fk;
            null === (fk = ek.getExtension("WEBGL_lose_context")) || void 0 === fk || fk.loseContext()
          } catch {}
          return Dk
        }(document.createElement("canvas")),
        offAfterLoss: kk => vk((() => kk ? (0, Hk.F)() : bk.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: kk => vk((() => (0, wk.e)(kk))),
        intelGen9: kk => vk((() => (0, wk.o)(kk))),
        storeIntelGen9Verdict: kk => {
          Uk.f.setItem(wk.D, kk)
        },
        gpuClassWebGlArm: zk,
        storeGpuClassVerdict: kk => {
          Uk.f.setItem(wk.C, kk)
        },
        gpuClassOnWebGl: kk => (0, lk.e)(kk),
        wasmArmOnWebGl: jk.m,
        storeWasmArmVerdict: kk => {
          Uk.f.setItem(wk.N, kk)
        },
        override: () => function() {
          if ((0, rk.s)("render") && "webgl1" === (0, rk.p)("renderer")) return "webgl1";
          const kk = [() => new URLSearchParams(window.location.search).get(Mk.e), () => Uk.f.getItem(Mk.h), () => {
            const kk = localStorage.getItem(sk);
            return null !== kk && localStorage.removeItem(sk), "1" === kk ? "webgl2" : null
          }];
          for (const ek of kk) {
            let kk = null;
            try {
              kk = Ek(ek())
            } catch {}
            if (null !== kk) return kk
          }
          return null
        }(),
        claimed: () => Ek((0, Pk.k)()),
        webGpuSetting: () => {
          const kk = Uk.f.getItem(Dk.jc);
          return "boolean" === typeof kk ? kk : null
        },
        heldBack: () => lk.h,
        storeHoldbackSpared: kk => {
          Uk.f.setItem(wk.A, kk)
        },
        intelGen9OnWebGl: () => lk.j,
        AU: () => vk((() => (0, Kk.h)(xk.featureFlags.settings.canUseShaderPacks))),
        windows: () => vk((() => "windows" === (0, xk.getOperatingSystem)()))
      }
    }

    function vk(kk) {
      try {
        return kk()
      } catch {
        return !1
      }
    }

    function Ek(kk) {
      return "lite" === kk ? "webgpu" : "webgl2" === kk || "babylon" === kk ? "webgl" : null
    }
    async function hk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qk();
      const ek = await async function(kk) {
        const ek = function(kk) {
            const ek = kk.override(),
              ik = kk.webGpuSetting(),
              Dk = null === ek && !0 !== ik && kk.AU(),
              fk = null !== ek || null !== ik || Dk ? null : kk.claimed(),
              Sk = null !== ek ? "override" : !0 === ik ? "setting" : Dk ? "pack" : !1 === ik ? "setting" : null !== fk ? "claim" : "default",
              bk = function(kk) {
                return "override" === kk || "setting" === kk
              }(Sk);
            if ("webgl" === ek || "webgl1" === ek || "webgl" === fk || "setting" === Sk && !1 === ik) return {
              source: Sk,
              asked: bk,
              refused: "not_requested"
            };
            if (!kk.gpu) return {
              source: Sk,
              asked: bk,
              refused: "no_webgpu_api"
            };
            const rk = "default" === Sk && kk.heldBack();
            if (rk && !kk.windows()) return {
              source: Sk,
              asked: bk,
              refused: "webgl_holdback"
            };
            if (!bk && kk.offAfterLoss("pack" === Sk)) return {
              source: Sk,
              asked: bk,
              refused: rk ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: Sk,
              asked: bk,
              heldBack: rk,
              gpu: kk.gpu
            }
          }(kk),
          {
            source: ik
          } = ek,
          Dk = !ek.asked,
          fk = "gpu" in ek && ek.heldBack,
          bk = function(kk) {
            return fk && "none" !== kk ? {
              reason: "webgl_holdback",
              adapter: null,
              source: ik
            } : {
              reason: kk,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: ik
            }
          };
        if (!("gpu" in ek)) return bk(ek.refused);
        let rk;
        try {
          rk = await (0, Ck.l)((0, yk.j)(ek.gpu, {
            compatibility: ek.asked
          }), be, `requestAdapter didn't settle in ${be/1e3} s`)
        } catch {
          return bk("adapter_error")
        }
        if ("string" === typeof rk) return bk(rk);
        const Pk = (0, yk.b)(rk);
        if ((0, yk.e)(rk)) return bk("software_adapter", Pk);
        const mk = kk.windows() && function(kk) {
          return Ik.has((0, Sk.f)(kk.vendor, kk.architecture))
        }(Pk);
        if (kk.storeHoldbackSpared(mk), fk && !mk) return bk("webgl_holdback");
        const Mk = kk.intelGen9(rk);
        kk.storeIntelGen9Verdict(Mk);
        const Kk = Mk ? null : kk.gpuClassWebGlArm(rk);
        kk.storeGpuClassVerdict(null !== Kk && void 0 !== Kk && Kk);
        const xk = kk.wasmArmOnWebGl(Pk);
        if (kk.storeWasmArmVerdict(xk), Dk && kk.oldIntelDriver(rk)) return bk("old_intel_driver", Pk);
        if ("default" === ik && Mk && kk.intelGen9OnWebGl()) return bk("intel_gen9", Pk);
        if ("default" === ik && null !== Kk && kk.gpuClassOnWebGl(Kk)) return bk("gpu_class_webgl", Pk);
        if ("default" === ik && xk) return bk("gpu_wasm_arm", Pk);
        return bk("none", Pk)
      }(kk);
      if ("none" === ek.reason) return {
        backend: "webgpu",
        ...ek
      };
      if ("webgl1" !== kk.override() && kk.webgl2()) return {
        backend: "webgl",
        ...ek
      };
      const ik = kk.webgl1();
      return 0 === ik.length ? {
        backend: "webgl1",
        ...ek
      } : {
        missing: ik
      }
    }
    let ak = !1;
    async function Wk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qk();
      if (null === kk) return null;
      const ik = await hk(ek);
      return ak = !("missing" in ik) && "webgpu" === ik.backend && "claim" === ik.source, "missing" in ik ? ik : {
        ...ik,
        load: kk[ik.backend]
      }
    }
    async function tk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qk().gpu,
        Dk = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== kk.backend) return !1;
      const fk = Ok(kk, ek, "indirectDraws", "off", "on");
      if (null !== fk) return fk;
      if (null !== kk.adapter && (0, wk.p)(kk.adapter, Dk)) return !0;
      if (null === ik) return !1;
      try {
        var Sk;
        const kk = await (0, Ck.l)(ik.requestAdapter({
          powerPreference: "low-power"
        }).then((async kk => (null !== kk && await (0, yk.d)(kk), kk))), be, `the low-power requestAdapter didn't settle in ${be/1e3} s`);
        return (0, wk.p)(null !== (Sk = null === kk || void 0 === kk ? void 0 : kk.info) && void 0 !== Sk ? Sk : {}, Dk)
      } catch (bk) {
        return bk instanceof Ck.d
      }
    }

    function Xk(kk, ek, ik) {
      if ("webgpu" !== kk.backend) return !1;
      const Dk = Ok(kk, ek, "terrainFetch", "texture", "storage");
      return null !== Dk ? Dk : null !== kk.adapter && (0, wk.h)(kk.adapter, ik)
    }

    function Bk(kk, ek) {
      if ("webgpu" !== kk.backend) return !1;
      const ik = Ok(kk, ek, "skyOrder", "early", "last");
      return null !== ik ? ik : null !== kk.adapter && (0, Sk.f)(kk.adapter.vendor, kk.adapter.architecture) === qk
    }

    function ck(kk, ek, ik) {
      if ("webgpu" !== kk.backend) return !1;
      const Dk = Ok(kk, ek, "sceneDepth", "off", "on");
      return null !== Dk ? Dk : null !== kk.adapter && (0, wk.k)(kk.adapter, ik)
    }

    function Tk(kk, ek) {
      return "webgl" === kk.backend ? Ok(kk, ek, "instancedTerrain", "1", "0") : null
    }

    function Zk(kk) {
      return "webgpu" !== kk.backend || null === kk.adapter || !(0, Hk.I)(kk.adapter)
    }

    function Ok(kk, ek, ik, Dk, fk) {
      const Sk = new URLSearchParams(ek).get(ik),
        bk = null !== Sk && void 0 !== Sk ? Sk : (0, Pk.f)(ik);
      return bk !== Dk && bk !== fk ? null : (ak ||= null === Sk && "webgpu" === kk.backend, bk === Dk)
    }

    function gk(kk) {
      return null !== kk && "missing" in kk
    }

    function Gk(kk) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Jk()) ? function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk.b;
        try {
          const ik = "start_failed" === kk || "pipeline_failed" === kk,
            Dk = ek.turnOffWebGpuAfterDeviceLoss(ik ? "visible" : (0, Hk.l)((0, nk.f)()), ik);
          return !ak || Dk && !ek.isWebGpuOffAfterLoss() || (0, Pk.u)("webgpuLoss"), ek.isWebGpuOffAfterLoss() && "webgpu" === Ek(Uk.f.getItem(Mk.h)) && Uk.f.removeItem(Mk.h), (0, rk.s)("webgpuloss") && (0, mk.b)((ek => {
            ek.noteWebGpuLoss("wasm", Dk ? kk : `${kk}, which storage didn't keep`, null)
          })), Dk
        } catch {
          return !1
        }
      }(kk) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Nk = "framePacing";

    function Rk(kk) {
      const ek = new URLSearchParams(kk).get(Nk);
      return null !== ek && /^\d{1,9}$/.test(ek) ? Number(ek) : void 0
    }

    function Jk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === Ek(new URLSearchParams(kk).get(Mk.e))
      } catch {
        return !1
      }
    }

    function ke(kk) {
      return !!ee(kk) || kk instanceof Error && !(kk instanceof WebAssembly.RuntimeError) && kk.message.startsWith(`${Yk.p.RenderSurfaceUnusable}:`)
    }

    function ee(kk) {
      const {
        name: ek,
        message: ik
      } = null !== kk && void 0 !== kk ? kk : {};
      return "InvalidStateError" === ek && "string" === typeof ik && ik.startsWith("GPUDevice.")
    }

    function ie(kk) {
      const ek = kk;
      return "function" === typeof ek.Iik && "function" === typeof ek.zik ? ek : null
    }

    function De(kk) {
      return "function" === typeof kk.Jw ? kk : null
    }
    const fe = "openRenderer";

    function Se(kk) {
      const ek = null === kk || void 0 === kk ? void 0 : kk.Nfk();
      return void 0 === ek ? void 0 : new Error(ek)
    }
    const be = 5e3,
      re = 15e3;

    function Pe(kk, ek, ik, Dk, fk, Sk) {
      return (0, Ck.l)(function(kk, ek, ik, Dk, fk, Sk) {
        return (0, Ak.g)(kk, ek, (() => kk.Jw(ik, Dk, fk, Sk.indirectHangs, Sk.storagePullBreaks, Sk.splitPassBreaks, Sk.earlySky, Sk.instancedTerrain, Sk.framesAhead, Sk.webGpuRestores)))
      }(kk, ek, ik, Dk, fk, Sk), re, `${Yk.p.RenderSurfaceUnusable}: the renderer didn't open in ${re/1e3} s`, Me)
    }
    async function me(kk, ek, ik, Dk, fk, Sk) {
      if ("function" !== typeof kk.hSk) throw new Error("this core has no set_renderer");
      const bk = await Pe(ek, fe, ik, fk, Dk, Sk);
      try {
        kk.hSk(bk)
      } catch (rk) {
        throw Me(bk), rk
      }
    }

    function Me(kk) {
      try {
        kk.free()
      } catch {}
    }
  },
  40407: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    const Dk = {
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
  40335: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Uk,
      c: () => Hk,
      g: () => xk,
      h: () => Kk
    });
    const Dk = 2e3,
      fk = "unavailable";
    let Sk = () => Promise.resolve().then((() => ik(2872))),
      bk = null,
      rk = null,
      Pk = mk();

    function mk() {
      let kk = () => {};
      return {
        promise: new Promise((ek => {
          kk = () => {
            ek(null)
          }
        })),
        resolve: kk
      }
    }

    function Mk() {
      if (null === bk) {
        const kk = Sk();
        bk = kk, kk.then((ek => {
          bk === kk && (rk = ek)
        }), (() => {
          bk === kk && (bk = null)
        }))
      }
      return bk
    }

    function Kk() {
      Mk().catch((() => {}))
    }

    function xk() {
      Pk.resolve()
    }

    function nk(kk, ek, ik, Dk) {
      if (null === kk) return {
        errorKind: ek,
        fingerprint: fk,
        dedupe: `${ek}|${Dk}`
      };
      const {
        fingerprint: Sk
      } = kk.clientErrorKey(ek, ik, Dk);
      return {
        errorKind: ek,
        fingerprint: Sk,
        dedupe: Sk
      }
    }

    function Uk(kk, ek, ik, Dk) {
      return null === rk ? Dk ? (Kk(), nk(null, kk, ek, ik)) : null : nk(rk, kk, ek, ik)
    }
    async function Hk(kk, ek, ik) {
      let fk;
      const Sk = new Promise((kk => {
        fk = setTimeout((() => {
          kk(null)
        }), Dk)
      }));
      try {
        return nk(await Promise.race([Mk(), Sk, Pk.promise]), kk, ek, ik)
      } catch {
        return nk(null, kk, ek, ik)
      } finally {
        clearTimeout(fk)
      }
    }
  },
  40326: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      BUILT_IN_ANIMATIONS_SITE: () => Ok,
      CORE_ERRORS_SITE: () => Ek,
      EVENT_OVERFLOW_SITE: () => Zk,
      FIRST_VIEW_SITE: () => Nk,
      JOIN_SITE: () => ak,
      LEAVE_SITE: () => Wk,
      MAIN_THREAD_SITE: () => Rk,
      MODEL_FEED_SITE: () => tk,
      MODEL_POOL_SITE: () => Xk,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => ie,
      NON_FATAL_REPORTS_PER_SESSION: () => Ye,
      PREVIEW_ANIMATIONS_SITE: () => Tk,
      RENDER_RELOAD_SITE: () => ck,
      REQUEST_DEVICE_SITE: () => Jk,
      TEXTURE_NAMES_SITE: () => Bk,
      TEXTURE_PACK_FEED_SITE: () => gk,
      TEXTURE_PACK_SWAP_SITE: () => Gk,
      TurnstilePageError: () => ii,
      WASM_LOAD_SITE: () => hk,
      countRenderLost: () => zi,
      crashError: () => de,
      crashReportsSettled: () => ve,
      flushCrashReports: () => ze,
      joinFailureCode: () => Di,
      lokiTransport: () => Se,
      modelFailureCode: () => Mi,
      readTrap: () => Xe,
      renderLoss: () => Ii,
      renderReloadMessage: () => ui,
      reportCoreErrors: () => ae,
      reportCountedLoadFallback: () => ki,
      reportCrash: () => Ve,
      reportDataLoadFailure: () => Wi,
      reportDisconnect: () => Pi,
      reportDracoDecoderFailure: () => Ui,
      reportDroppedRequiredLimits: () => Re,
      reportEventOverflow: () => yi,
      reportFirstViewNoTerrain: () => ji,
      reportGpuFallback: () => Ne,
      reportGpuWasmPopulation: () => Je,
      reportLightFault: () => Li,
      reportMainStall: () => si,
      reportMemoryShed: () => Ai,
      reportModelFailure: () => Ki,
      reportModelPoolFailure: () => xi,
      reportModelsModuleRetry: () => ni,
      reportPageJoinFailure: () => Si,
      reportReconnectGaveUp: () => mi,
      reportRenderReload: () => vi,
      reportReplayFault: () => Vi,
      reportStaleBuildReload: () => Xi,
      reportStoppedCore: () => oe,
      reportTerrainTextureFailure: () => Ei,
      reportTexturePackFeedLoadFailure: () => wi,
      reportTexturePackKeptOut: () => li,
      reportUnstreamedCoreLoad: () => ei,
      reportUnsupportedFallback: () => ge,
      reportUnusedSeat: () => ri,
      reportWorkerLost: () => Yi,
      reportWorkerStartTimeout: () => di,
      reportWorldgenGaveUp: () => Ci,
      reportWorldgenLoadFailure: () => Hi,
      resetCrashReports: () => Ee,
      setCrashAdPreload: () => Ue,
      setCrashBackend: () => ne,
      setCrashScreen: () => Me,
      setCrashTransport: () => Pe,
      showCrash: () => Te,
      showJoinFailure: () => fi,
      showUnsupported: () => Oe,
      unknownSkyWords: () => he
    });
    var Dk = ik(1046),
      fk = ik(267),
      Sk = ik(2881),
      bk = ik(4279),
      rk = ik(40335),
      Pk = ik(4735),
      mk = ik(40337),
      Mk = ik(2910),
      Kk = ik(38345),
      xk = ik(131),
      nk = ik(670),
      Uk = ik(129),
      Hk = ik(2917),
      wk = ik(36011),
      lk = ik(1756),
      pk = ik(40350),
      yk = ik(40165),
      Yk = ik(40266),
      Lk = ik(40271),
      Ck = ik(38695),
      Ak = ik(2821),
      jk = ik(2823),
      sk = ik(40371),
      dk = ik(40388),
      Vk = ik(40397),
      Fk = ik(36442),
      uk = ik(3194),
      qk = ik(35836),
      Ik = ik(40305),
      zk = ik(35843),
      Qk = ik(40415);
    const vk = "[bloxd-wasm-client]",
      Ek = "coreErrors",
      hk = "wasmLoad",
      ak = "join",
      Wk = "leave",
      tk = "modelFeed",
      Xk = "modelWorkerPool",
      Bk = "textureNames",
      ck = "renderReload",
      Tk = "previewAnimations",
      Zk = "eventOverflow",
      Ok = "builtInAnimations",
      gk = "texturePackFeed",
      Gk = "texturePackSwap",
      Nk = "firstView",
      Rk = "mainThread",
      Jk = "requestDevice",
      ke = 300,
      ee = 64,
      ie = 8;
    let De = 0;
    const fe = new Set,
      Se = (kk, ek) => {
        const ik = He[kk.kind],
          Dk = {
            backend: Ke,
            adPreload: xe
          };
        if (null === ik) return void be(kk, ek, Dk, null);
        const fk = (0, rk.b)(ik, kk.message, kk.code, kk.fatal);
        null === fk ? Ie("Loki", (async () => {
          be(kk, ek, Dk, await (0, rk.c)(ik, kk.message, kk.code))
        })) : be(kk, ek, Dk, fk)
      };

    function be(kk, ek, ik, fk) {
      let {
        backend: bk,
        adPreload: rk
      } = ik;
      const {
        kind: Pk,
        code: mk,
        site: Mk,
        fatal: Kk,
        details: xk
      } = kk;
      if (!Kk)
        if (null === fk || (0, Sk.d)(fk.errorKind) || fe.has(fk.dedupe)) {
          if (De >= ie) return;
          De++
        } else fe.add(fk.dedupe);
      const nk = {
        ...xk,
        kind: Pk,
        code: mk,
        site: Mk,
        fatal: String(Kk),
        backend: bk
      };
      rk && (nk.adPreload = "true"), null !== fk && (nk.errorKind = fk.errorKind, nk.fingerprint = fk.fingerprint), ek instanceof Error && "string" === typeof ek.stack && (nk.causeStack = ek.stack.slice(0, 2e3)), (0, Dk.cH)(de(kk, ek), nk)
    }
    let re = Se;

    function Pe(kk) {
      const ek = re;
      return re = kk, ek
    }
    let me = () => {};

    function Me(kk) {
      const ek = me;
      return me = kk, ek
    }
    let Ke = "unpicked",
      xe = !1;

    function ne(kk) {
      Ke = kk
    }

    function Ue(kk) {
      xe = kk
    }
    const He = {
        crash: "wasm_load",
        unsupported: "wasm_load",
        model: "wasm_load",
        join: "matchmake_failed",
        pageJoin: null,
        unsupportedFallback: "wasm_load",
        gpuFallback: null,
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
      we = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        gpuFallback: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      le = new Set(["unstreamedLoad"]),
      pe = new Set(["linkCensus", "linksReadAfterView"]);
    let ye = !1;
    const Ye = 20,
      Le = new Map;
    let Ce = 0,
      Ae = 0;
    const je = new Set,
      se = new Set;

    function de(kk, ek) {
      const ik = Object.assign(new Error(`${kk.code}: ${kk.message}`), {
        name: "WasmClientCrash",
        cause: null !== ek && void 0 !== ek ? ek : void 0
      });
      return ek instanceof Error && ek.stack && (ik.stack = ek.stack), ik
    }

    function Ve(kk) {
      var ek, Dk;
      const {
        kind: fk,
        code: Sk,
        site: bk,
        fatal: rk,
        message: Pk,
        error: mk
      } = kk, Mk = !1 !== kk.toTransport && !le.has(fk), Kk = !rk && Mk && !pe.has(fk), xk = {
        kind: fk,
        code: Sk,
        site: bk,
        fatal: rk,
        message: Pk,
        details: null !== (ek = kk.details) && void 0 !== ek ? ek : {}
      }, nk = `${Sk}@${bk}${void 0===kk.instance?"":`#${kk.instance}`}${rk?"!":""}`, Uk = (null !== (Dk = Le.get(nk)) && void 0 !== Dk ? Dk : 0) + 1;
      if (Le.set(nk, Uk), void 0 !== kk.countAs && 1 === Uk && ue(kk.countAs), Uk > 1 ? 0 === (Uk & Uk - 1) && qe((() => {
          console.warn(`${vk} ${Sk} at ${bk} reported ${Uk} times`)
        })) : Kk && Ce >= Ye ? qe((() => {
          console.warn(`${vk} ${fk} ${Sk} at ${bk}: ${Pk} (not sent: the session's ${Ye} went)`, xk.details, null !== mk && void 0 !== mk ? mk : "")
        })) : (Kk && Ce++, function(kk, ek, Dk, fk) {
          var Sk, bk;
          const {
            kind: rk,
            code: Pk,
            site: mk,
            fatal: Mk,
            message: Kk,
            details: xk
          } = kk;
          qe((() => {
            (Mk ? console.error : console.warn)(`${vk} ${rk} ${Pk} at ${mk}: ${Kk}`, xk, null !== ek && void 0 !== ek ? ek : "")
          }));
          const nk = we[rk],
            Uk = null !== (Sk = null !== (bk = He[rk]) && void 0 !== bk ? bk : nk) && void 0 !== Sk ? Sk : null;
          fk || null === Uk || Fe((async () => {
            const {
              reportCappedWasmFailure: kk,
              reportUncappedWasmFailure: ek,
              reportWasmFailure: Dk
            } = await ik.e(212).then((() => ik(35829)));
            (pe.has(rk) ? ek : void 0 === nk ? Dk : kk)(Uk, Kk, Pk)
          }));
          Dk && qe((() => {
            re(kk, ek)
          }))
        }(xk, mk, Mk, void 0 !== kk.countAs)), rk) {
        var Hk;
        const ek = null !== (Hk = kk.screen) && void 0 !== Hk ? Hk : {
          text: (0, Fk.g)(xk, !0),
          reload: !0
        };
        qe((() => {
          me(ek)
        }))
      }
      return xk
    }

    function Fe(kk) {
      Ie("counts", (async () => {
        const {
          peekVisitSessionId: ek
        } = await Promise.resolve().then((() => ik(630)));
        null !== ek() && (await kk(), ye = !0)
      }))
    }

    function ue(kk) {
      je.has(kk.errorKind) || (je.add(kk.errorKind), Fe((async () => {
        const {
          reportClientError: ek
        } = await Promise.resolve().then((() => ik(2866)));
        ek(kk.errorKind, kk.error, kk.code, !0, void 0, kk.fields)
      })))
    }

    function qe(kk) {
      try {
        kk()
      } catch (ek) {
        try {
          console.warn(`${vk} could not send a report`, ek)
        } catch {}
      }
    }

    function Ie(kk, ek) {
      try {
        const ik = ek().catch((ek => {
          console.warn(`${vk} could not send the report to ${kk}`, ek)
        })).finally((() => {
          se.delete(ik)
        }));
        se.add(ik)
      } catch (ik) {
        console.warn(`${vk} could not send the report to ${kk}`, ik)
      }
    }
    async function ze(kk) {
      let ek;
      (0, rk.g)();
      const ik = new Promise((ik => {
        ek = setTimeout(ik, kk)
      }));
      await Promise.race([Qe(), ik]), clearTimeout(ek)
    }
    async function Qe() {
      if (await Promise.allSettled([...se]), ye) try {
        const {
          flushClientAnalyticsEvents: kk
        } = await Promise.resolve().then((() => ik(1452)));
        await kk()
      } catch (kk) {
        console.warn(`${vk} could not send the counts`, kk)
      }
    }
    async function ve() {
      for (; se.size > 0;) await Promise.allSettled([...se])
    }

    function Ee() {
      Le.clear(), Ce = 0, ye = !1, De = 0, fe.clear(), Ae = 0, je.clear(), (0, mk.p)()
    }

    function he(kk) {
      const ek = "object" === typeof kk && null !== kk ? kk.type : kk;
      return "string" !== typeof ek ? "sky not named" : `sky ${JSON.stringify(Array.from(ek).slice(0,ee).join(""))}`
    }

    function ae(kk, ek, ik, Dk) {
      Ae += ek;
      for (const {
          code: rk,
          detail: Mk
        }
        of kk) {
        var fk, Sk, bk;
        const kk = (0, Pk.le)(rk),
          ek = (0, mk.e)(rk, Mk),
          Kk = null === Dk || void 0 === Dk ? void 0 : Dk(rk, Mk),
          xk = void 0 !== (null === ek || void 0 === ek ? void 0 : ek.gpuDetails),
          nk = xk ? null === (fk = (0, Uk.p)()) || void 0 === fk ? void 0 : fk.renderer : void 0,
          Hk = xk ? ` ${(0,mk.j)()}` : "",
          wk = Array.from([nk && `gpu ${(0,mk.s)(nk)}`, Kk].filter(Boolean).join("; ")).slice(0, ke).join(""),
          lk = `core error ${kk}${null!==(Sk=null===ek||void 0===ek?void 0:ek.words)&&void 0!==Sk?Sk:""}${Hk}${wk?`: ${wk}`:""}`,
          pk = {
            errorCode: String(rk),
            detail: String(Mk),
            droppedBefore: String(Ae),
            wasmBuild: ik.wasm,
            clientVersion: ik.client,
            ...null === ek || void 0 === ek ? void 0 : ek.gpuDetails
          };
        null !== ek && (0, mk.o)(ek) ? qe((() => {
          console.warn(`${vk} coreError CORE-${kk}: ${lk} (not sent: the session's render warnings of its kind went)`, pk)
        })) : Ve({
          kind: te(rk, Mk),
          code: `CORE-${kk}`,
          site: Ek,
          fatal: !1,
          message: lk,
          details: pk,
          instance: null !== (bk = null === ek || void 0 === ek ? void 0 : ek.instance) && void 0 !== bk ? bk : We(rk, Mk)
        })
      }
    }

    function We(kk, ek) {
      return kk === Pk.P.RenderDeviceLost && 0 !== (ek & Pk.Z.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function te(kk, ek) {
      return kk === Pk.P.JobsHeapGaveUp ? "meshHeap" : (0, mk.g)(kk, ek) ? "linksReadAfterView" : (0, mk.f)(kk, ek) ? "linkCensus" : "coreError"
    }

    function Xe(kk) {
      return (0, qk.h)(kk instanceof Ik.d ? kk.trap : kk, Ak.J, Ak.gb)
    }
    const Be = "declined=js";

    function ce(kk) {
      return kk ? {
        labels: [Be],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function Te(kk, ek, ik) {
      return Ze(kk, ek, ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function oe(kk, ek, ik) {
      return Ze(kk, ek, ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Ze(kk, ek, ik, Dk, fk) {
      let {
        memoryDetails: Sk = {},
        declined: bk = !1
      } = Dk;
      const {
        code: rk,
        details: Pk,
        message: mk
      } = (0, pk.D)(kk, ek), Mk = [];
      Object.assign(Pk, (0, zk.f)(kk.error)), null !== ik && (Pk.trapKind = ik.kind, null !== ik.panic && (Pk.panic = (0, qk.g)(ik.panic)), ik.refusedBytes > 0 && (Pk.refusedAllocation = String(ik.refusedBytes)), Mk.push((0, qk.l)(ik.kind, ik.refusedBytes)));
      const Kk = ce(bk);
      return Ve({
        kind: "crash",
        code: rk,
        site: kk.site,
        fatal: fk,
        message: [...Mk, ...Kk.labels, mk].join("; "),
        details: {
          ...Pk,
          ...Kk.details,
          ...Sk
        },
        error: kk.error
      })
    }

    function Oe(kk, ek, ik) {
      return Ve({
        kind: "unsupported",
        code: ek,
        site: hk,
        fatal: !0,
        message: ik,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: kk,
          status: ek
        },
        screen: {
          text: (0, Fk.t)(kk),
          reload: "download" === kk
        }
      })
    }

    function ge(kk, ek, ik) {
      return Ve({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === ek ? "blocked_after_loss" : "unsupported_js_fallback",
        site: hk,
        fatal: !1,
        message: ik,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: kk,
          status: "unsupported",
          decline: ek,
          fallback: "js"
        }
      })
    }
    const Ge = "misdrawn_gpu_js_fallback";

    function Ne(kk, ek) {
      return Ve({
        kind: "gpuFallback",
        code: Ge,
        site: hk,
        fatal: !1,
        message: `the renderer plays ${kk} on ${ek} worse than the JS client`,
        details: {
          gpuFamily: kk,
          backend: ek,
          fallback: "js"
        }
      })
    }

    function Re(kk) {
      return Ve({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: Jk,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: kk.join(",")
        }
      })
    }

    function Je(kk) {
      Ie("counts", (async () => {
        await (0, nk.e)(kk), ye = !0
      }))
    }

    function ki(kk, ek, ik, Dk) {
      const fk = ce(Dk);
      return Ve({
        kind: "unsupported",
        code: ek,
        site: hk,
        fatal: !1,
        message: [...fk.labels, ik].join("; "),
        details: {
          cause: kk,
          status: ek,
          fallback: "js",
          ...fk.details
        }
      })
    }

    function ei() {
      const {
        code: kk,
        message: ek
      } = uk.d;
      return Ve({
        kind: "unstreamedLoad",
        code: kk,
        site: hk,
        fatal: !1,
        message: ek
      })
    }
    class ii extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Di(kk) {
      return kk instanceof Yk.k ? 0 === kk.code ? "JOIN-matchmake" : `JOIN-${kk.code}` : kk instanceof Yk.d ? 0 === kk.code ? `JOIN-${kk.stage}` : `JOIN-${kk.stage}-${kk.code}` : kk instanceof yk.e ? "JOIN-gameCode" : kk instanceof ii ? "JOIN-turnstilePage" : kk instanceof Yk.v ? "JOIN-trafficCheck" : kk instanceof wk.e ? "JOIN-timeout" : "JOIN-network"
    }

    function fi(kk, ek) {
      const ik = (0, zk.j)(kk),
        Dk = {
          wasmBuild: ek.wasm,
          clientVersion: ek.client
        },
        fk = kk instanceof ii ? {
          text: (0, Fk.l)(),
          reload: !1
        } : void 0,
        Sk = (0, Lk.e)(kk),
        bk = "expected" !== Sk;
      return Ve({
        kind: "join",
        code: Di(kk),
        site: ak,
        fatal: !0,
        message: ik,
        details: Dk,
        error: kk,
        screen: fk,
        toTransport: bk,
        instance: Sk
      })
    }

    function Si(kk, ek, ik) {
      var Dk;
      const fk = (0, Lk.e)(kk),
        Sk = {
          cause: (kk instanceof Yk.d || kk instanceof Yk.k) && null !== (Dk = kk.serverText) && void 0 !== Dk ? Dk : "",
          sinceJoinStart: (0, Hk.e)(ik.sinceJoinStartMs),
          game: ik.game,
          ...(0, Hk.j)(),
          wasmBuild: ek.wasm,
          clientVersion: ek.client
        };
      return Ve({
        kind: "pageJoin",
        code: Di(kk),
        site: ak,
        fatal: !1,
        message: (0, zk.j)(kk),
        details: Sk,
        error: kk,
        toTransport: "unrecognised" === fk,
        instance: fk
      })
    }
    const bi = {
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

    function ri(kk, ek) {
      let {
        unused: ik,
        answered: Dk,
        heldMs: fk
      } = kk;
      const {
        code: Sk,
        message: bk
      } = bi[ik], rk = {
        unused: ik,
        answered: String(Dk),
        heldMs: String(fk),
        wasmBuild: ek.wasm,
        clientVersion: ek.client
      };
      return Ve({
        kind: "seat",
        code: Sk,
        site: ak,
        fatal: !1,
        message: bk,
        details: rk
      })
    }

    function Pi(kk, ek, ik) {
      var Dk;
      let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Dk = kk.name) && void 0 !== Dk ? Dk : String(kk.code);
      const Sk = {
          closeCode: String(kk.code),
          recognised: String(null !== kk.name),
          closeReason: ik.closeReason,
          sinceJoined: (0, Hk.e)(ik.sinceJoinedMs),
          game: ik.game,
          ...(0, Hk.j)(),
          wasmBuild: ek.wasm,
          clientVersion: ek.client
        },
        bk = null === kk.name && !(0, Hk.g)(kk.code);
      return Ve({
        kind: "disconnect",
        code: fk,
        site: Wk,
        fatal: !1,
        message: "Left room",
        details: Sk,
        toTransport: bk
      })
    }

    function mi(kk, ek) {
      const ik = {
        ...(0, Mk.j)(kk),
        wasmBuild: ek.wasm,
        clientVersion: ek.client
      };
      return Ve({
        kind: "disconnect",
        code: `reconnect-${kk.reason}`,
        site: ak,
        fatal: !1,
        message: "Reconnect failed",
        details: ik
      })
    }

    function Mi(kk) {
      return kk.error instanceof jk.i ? `MODEL-${kk.error.status}` : kk.error instanceof sk.l ? "MODEL-ring" : "MODEL-network"
    }

    function Ki(kk, ek) {
      const ik = Mi(kk),
        Dk = `model file ${kk.file} ${kk.startup?"(startup) ":""}could not load`,
        fk = {
          file: String(kk.file),
          url: kk.url,
          wasmBuild: ek.wasm,
          clientVersion: ek.client
        };
      return Ve({
        kind: kk.startup ? "model" : "modelLate",
        code: ik,
        site: tk,
        fatal: kk.startup,
        message: Dk,
        details: fk,
        error: kk.error
      })
    }

    function xi(kk, ek) {
      const ik = {
        wasmBuild: ek.wasm,
        clientVersion: ek.client
      };
      return Ve({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: Xk,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: ik,
        error: kk
      })
    }

    function ni(kk, ek, ik) {
      const Dk = {
        delayMs: String(ek),
        wasmBuild: ik.wasm,
        clientVersion: ik.client
      };
      kk instanceof jk.i && (Dk.status = String(kk.status));
      return Ve({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: Xk,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Dk,
        error: kk
      })
    }

    function Ui(kk, ek) {
      const ik = {
        wasmBuild: ek.wasm,
        clientVersion: ek.client
      };
      return Ve({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: Xk,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: ik,
        error: kk
      })
    }

    function Hi(kk, ek) {
      const ik = {
        wasmBuild: ek.wasm,
        clientVersion: ek.client
      };
      return Ve({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: pk.x,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: ik,
        error: kk
      })
    }

    function wi(kk, ek) {
      const ik = {
        wasmBuild: ek.wasm,
        clientVersion: ek.client
      };
      return Ve({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: gk,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: ik,
        error: kk
      })
    }

    function li(kk, ek, ik, Dk) {
      const fk = {
        wasmBuild: Dk.wasm,
        clientVersion: Dk.client
      };
      return Ve({
        kind: "texturePackKeptOut",
        code: (0, bk.g)("wasm", kk, ek),
        site: Gk,
        fatal: !1,
        message: ek.detail,
        details: fk,
        error: ik
      })
    }

    function yi(kk, ek) {
      const {
        frames: ik,
        acks: Dk,
        mask: fk,
        outcome: Sk
      } = kk, bk = {
        frames: String(ik),
        acks: String(Dk),
        mask: String(fk),
        outcome: null !== Sk && void 0 !== Sk ? Sk : "resynced",
        wasmBuild: ek.wasm,
        clientVersion: ek.client
      };
      return Ve({
        kind: "recovered",
        code: "rejoined" === Sk ? "CORE-eventOverflowRejoin" : "failed" === Sk ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: Zk,
        fatal: !1,
        message: `the event buffer refused records in ${ik} frames`,
        details: bk
      })
    }

    function Yi(kk, ek, ik) {
      return Ve({
        kind: "recovered",
        code: "CORE-workerLost",
        site: kk,
        fatal: !1,
        message: `a ${kk} worker was lost`,
        details: {
          reason: ek,
          wasmBuild: ik.wasm,
          clientVersion: ik.client
        }
      })
    }

    function Li(kk, ek, ik) {
      const Dk = {
        wasmBuild: ik.wasm,
        clientVersion: ik.client
      };
      return Ve({
        kind: "recovered",
        code: kk,
        site: pk.n,
        fatal: !1,
        message: ek,
        details: Dk
      })
    }

    function Ci(kk, ek) {
      const ik = {
        lastReason: kk,
        wasmBuild: ek.wasm,
        clientVersion: ek.client
      };
      return Ve({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: pk.x,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: ik
      })
    }

    function Ai(kk, ek, ik) {
      return Ve({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: pk.k,
        fatal: !1,
        message: (0, Ck.k)(kk) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: kk,
          ...ek,
          wasmBuild: ik.wasm,
          clientVersion: ik.client
        }
      })
    }

    function ji(kk, ek, ik, Dk) {
      var fk, Sk;
      const bk = (0, mk.k)(),
        rk = {
          game: kk,
          cause: ek,
          census: null === ik ? "none" : JSON.stringify(ik),
          gpu: null !== (fk = null === (Sk = (0, Uk.p)()) || void 0 === Sk ? void 0 : Sk.renderer) && void 0 !== fk ? fk : "",
          renderWarned: String(bk),
          browser: (0, mk.j)(),
          wasmBuild: Dk.wasm,
          clientVersion: Dk.client
        },
        Pk = `first view drew no whole terrain in ${dk.c/1e3} s, ${ek}${bk?", render warned":""}`;
      return Ve({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: Nk,
        fatal: !1,
        message: Pk,
        details: rk
      })
    }

    function si(kk, ek, ik, Dk) {
      var Sk, bk, rk;
      const Pk = null !== (Sk = (0, fk.j)(null !== (bk = null === (rk = (0, Uk.k)()) || void 0 === rk ? void 0 : rk.renderer) && void 0 !== bk ? bk : null, (0, Uk.g)())) && void 0 !== Sk ? Sk : "unknown",
        Mk = null === ek ? "untimed" : `${Math.round(ek)} ms`,
        Kk = `frames stalled, ${ik}, gpu ${(0,mk.s)(Pk)}, blocking ${Mk}, drawn ${Math.round(kk)} ms apart`,
        xk = {
          gpuModel: Pk,
          wasmBuild: Dk.wasm,
          clientVersion: Dk.client
        };
      return Ve({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: Rk,
        fatal: !1,
        message: Kk,
        details: xk
      })
    }

    function di(kk, ek, ik) {
      return Ve({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: kk,
        fatal: !1,
        message: `a ${kk} worker did not start`,
        details: {
          waitedMs: String(Math.round(ek)),
          wasmBuild: ik.wasm,
          clientVersion: ik.client
        }
      })
    }

    function Vi(kk, ek, ik) {
      return Ve({
        kind: "recovered",
        code: "CORE-replayFault",
        site: kk,
        fatal: !1,
        message: `the replay's ${kk} failed`,
        details: {
          wasmBuild: ik.wasm,
          clientVersion: ik.client
        },
        error: ek
      })
    }
    const Fi = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function ui(kk, ek, ik) {
      const Dk = "lost" === ek && void 0 !== ik ? ` (${ik})` : "";
      return `the ${kk} ${Fi[ek]}${Dk}`
    }
    const qi = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function Ii(kk, ek, ik, Dk) {
      var fk;
      let {
        restoreLost: Sk = !1,
        adapterRemembered: bk = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, rk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const Pk = null === ik || void 0 === ik ? void 0 : ik.message,
        mk = "pipeline_failed" === ek ? ek : ik instanceof lk.d ? "timeout" : (0, Kk.l)("frames_refused" === ek, "string" === typeof Pk ? Pk : ""),
        Mk = null === Dk.boundAtMs ? "unbound" : `up${(0,Kk.g)(rk-Dk.boundAtMs)}`,
        xk = null === Dk.adapter ? "no adapter" : (0, Kk.j)(Dk.adapter),
        nk = `${!0===Dk.indirectHangs?" ih":""}${!0===Dk.restoresSkipped?" nr":""}${Sk?" rl":""}${bk?" ar":""}`,
        Uk = `${mk} ${(0,lk.h)()?"hidden":"visible"} ${Mk}${nk} ${xk}`;
      if ("webgpu" !== kk || "lost" !== ek && "frames_refused" !== ek) return {
        detail: Uk,
        count: void 0
      };
      return {
        detail: Uk,
        count: {
          errorKind: "render_lost",
          error: new Error(Uk),
          code: (0, Kk.p)(mk, null !== (fk = Dk.boundAtMs) && void 0 !== fk ? fk : rk, rk).code,
          fields: {
            renderBackend: Qk.e.webgpu
          }
        }
      }
    }

    function zi(kk, ek, ik) {
      const {
        count: Dk
      } = Ii("webgpu", kk, ek, ik);
      void 0 !== Dk && ue(Dk)
    }
    const Qi = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function vi(kk, ek, Dk) {
      var Sk, bk, rk, Pk, Mk;
      let {
        cause: nk = "lost",
        restoreLost: Uk = !1,
        adapterRemembered: Hk = !1,
        error: wk,
        context: lk = qi,
        session: pk = Qi
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        detail: yk,
        count: Yk
      } = Ii(kk, nk, wk, lk, {
        restoreLost: Uk,
        adapterRemembered: Hk
      }), Lk = {
        losses: String(ek),
        cause: nk,
        detail: yk,
        vendor: null !== (Sk = null === (bk = lk.adapter) || void 0 === bk ? void 0 : bk.vendor) && void 0 !== Sk ? Sk : "",
        architecture: null !== (rk = null === (Pk = lk.adapter) || void 0 === Pk ? void 0 : Pk.architecture) && void 0 !== rk ? rk : "",
        indirectHangs: String(lk.indirectHangs),
        restoresSkipped: String(lk.restoresSkipped),
        restoreLost: String(Uk),
        adapterRemembered: String(Hk),
        samples: String(pk.samples),
        sunShadows: String(pk.sunShadows),
        renderDistance: String(pk.renderDistance),
        gpuFamily: null !== (Mk = (0, fk.c)()) && void 0 !== Mk ? Mk : "",
        browser: (0, mk.j)(),
        siteUsed: xk.t,
        wasmBuild: Dk.wasm,
        clientVersion: Dk.client
      }, Ck = ui(kk, nk), Ak = Ve({
        kind: "recovered",
        code: "CORE-renderLost",
        site: ck,
        fatal: !1,
        message: Ck,
        details: Lk,
        error: wk,
        countAs: Yk
      });
      return Ie("ga", (async () => {
        const {
          logError: ek
        } = await Promise.resolve().then((() => ik(2849))), Dk = `${Kk.c["webgpu"===kk?"WebGPU":"WebGL2"]}\n Error: ${yk}`;
        ek("warning", Dk), ek("error", Dk)
      })), Ak
    }

    function Ei(kk, ek) {
      var ik, Dk;
      const fk = null === kk.name ? "TEXTURE-sources" : null === kk.url ? "TEXTURE-nourl" : kk.error instanceof Vk.c ? `TEXTURE-${kk.error.status}` : "TEXTURE-network",
        Sk = null === kk.name ? "terrain textures could not load" : `terrain texture ${kk.name} could not load`,
        bk = {
          texture: null !== (ik = kk.name) && void 0 !== ik ? ik : "",
          url: null !== (Dk = kk.url) && void 0 !== Dk ? Dk : "",
          wasmBuild: ek.wasm,
          clientVersion: ek.client
        };
      return Ve({
        kind: "terrainTexture",
        code: fk,
        site: pk.w,
        fatal: !1,
        message: Sk,
        details: bk,
        error: kk.error
      })
    }
    const ai = {
      previewAnimations: {
        site: Tk,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: Ok,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Wi(kk, ek, ik, Dk) {
      const {
        site: fk,
        prefix: Sk,
        name: bk
      } = ai[kk], {
        stage: rk,
        error: Pk
      } = ik;
      return Ve({
        kind: kk,
        code: "decode" === rk ? null === Pk ? `${Sk}-decode` : `${Sk}-trap` : Pk instanceof jk.i ? `${Sk}-${Pk.status}` : `${Sk}-network`,
        site: fk,
        fatal: !1,
        message: "decode" === rk ? `${bk} did not decode` : `${bk} could not load`,
        details: {
          url: ek,
          wasmBuild: Dk.wasm,
          clientVersion: Dk.client
        },
        error: Pk
      })
    }
    const ti = "staleBuild";

    function Xi(kk, ek, ik) {
      const Dk = {
          failedSite: kk.site,
          url: kk.url,
          from: kk.from,
          sameBuild: String(kk.from === ek),
          reloadMs: String(Math.max(0, Date.now() - kk.at)),
          wasmBuild: ik.wasm,
          clientVersion: ik.client
        },
        fk = `reloaded into a newer build after ${kk.site} failed to load: ${kk.error}`;
      return Ve({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: ti,
        fatal: !1,
        message: fk,
        details: Dk
      })
    }
  },
  40388: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk,
      c: () => fk,
      g: () => bk
    });
    var Dk = ik(4741);
    const fk = 3e4;
    class Sk {
      constructor(kk) {
        this.CU = kk, this.waitedMs = 0, this.lastMs = null
      }
      frame(kk, ek) {
        if (ek) return !0;
        const ik = null === this.lastMs ? 0 : kk - this.lastMs;
        return this.lastMs = kk, ik <= 900 && (this.waitedMs += ik), !(this.waitedMs < fk) && (this.CU(), !0)
      }
    }

    function bk(kk, ek) {
      return 0 === (kk & Dk._.ChunkRequested) ? "no_chunk_request" : 0 === (kk & Dk._.ChunkStored) ? "chunk_not_stored" : 0 === (kk & Dk._.MeshLanded) ? "not_meshed" : null === ek ? "no_frame_drawn" : 0 === ek.terrainParts ? "no_terrain_parts" : ek.terrainCompiling > 0 ? "terrain_compiling" : ek.terrainOpaque + ek.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40165: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk,
      f: () => lk,
      g: () => Hk,
      h: () => wk,
      j: () => xk,
      m: () => nk,
      q: () => Mk,
      u: () => Kk,
      w: () => Uk
    });
    class Dk extends Error {
      constructor(kk) {
        super(`the join's code did not load: ${kk instanceof Error?kk.message:String(kk)}`, {
          cause: kk
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === kk || void 0 === kk ? void 0 : kk.request
      }
    }
    let fk = null,
      Sk = null,
      bk = null;
    const rk = [];
    let Pk = null;

    function mk(kk, ek) {
      try {
        kk(ek)
      } catch (ik) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ik)
      }
    }

    function Mk() {
      return Pk
    }

    function Kk(kk) {
      rk.push(kk), null !== Pk && mk(kk, Pk)
    }

    function xk(kk) {
      return fk ??= Promise.all([ik.e(72), ik.e(96), ik.e(219), ik.e(77), ik.e(220), ik.e(200), ik.e(95), ik.e(238), ik.e(265), ik.e(198), ik.e(267), ik.e(191), ik.e(197), ik.e(193), ik.e(141), ik.e(87), ik.e(121), ik.e(243), ik.e(56)]).then((() => ik(42177))).then((ek => {
        ek.loadAudio(kk), Pk = ek;
        for (const kk of rk) mk(kk, ek);
        return ek
      })).catch((kk => {
        throw fk = null, kk
      })), fk
    }
    async function nk(kk, ek) {
      try {
        const ik = await xk(kk);
        await ik.loadClientGame(ek)
      } catch (ik) {
        throw new Dk(ik)
      }
    }

    function Uk(kk, ek) {
      Sk = {
        running: kk,
        shell: ek
      }
    }

    function Hk() {
      return bk
    }
    async function wk(kk) {
      const ek = Sk;
      if ((null === ek || void 0 === ek ? void 0 : ek.running) !== kk) throw new Error("the core's session has ended");
      const ik = await xk(ek.shell.audio).catch((kk => {
        throw new Dk(kk)
      }));
      if (null !== bk) return bk;
      if (Sk !== ek || kk.isStopped) throw new Error("the core stopped while the game code loaded");
      if (bk = ik.startGameHost(kk, ek.shell), null === bk) throw new Error("the core's shared tables didn't read, so the game can't start");
      return bk
    }

    function lk() {
      null !== bk && (null !== Pk ? Pk.endGameHost(bk) : bk.closeGame()), bk = null, Sk = null
    }
  },
  40300: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    const Dk = {
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
  40266: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => mk,
      e: () => Sk,
      f: () => bk,
      h: () => fk,
      k: () => nk,
      o: () => Mk,
      s: () => Pk,
      u: () => xk,
      v: () => Kk,
      x: () => rk
    });
    var Dk = ik(1764);
    const fk = new Uint8Array([12]),
      Sk = 2e3,
      bk = 257;

    function rk(kk) {
      const ek = new Uint8Array(4);
      return new DataView(ek.buffer).setUint32(0, kk, !0), ek
    }
    class Pk extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class mk extends Error {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(kk), this.stage = ek, this.code = ik, this.serverText = Dk, this.socketOpened = fk, this.name = "JoinError"
      }
    }
    class Mk extends Error {
      constructor(kk) {
        super(kk), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Kk extends Error {
      constructor(kk) {
        super((0, Dk.c)(kk), {
          cause: kk
        }), this.name = "TrafficCheckError"
      }
    }
    class xk extends Error {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(kk, {
          cause: ik
        }), this.networkLost = ek, this.httpStatus = Dk, this.name = "SeatRequestError"
      }
    }
    class nk extends Error {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(kk), this.code = ek, this.serverText = ik, this.name = "MatchmakeError"
      }
    }
  },
  40271: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => nk,
      e: () => xk,
      g: () => Uk
    });
    var Dk = ik(2567),
      fk = ik(2917),
      Sk = ik(38644),
      bk = ik(36011),
      rk = ik(38647),
      Pk = ik(40266),
      mk = ik(40274);
    const Mk = "seat reservation expired.",
      Kk = "early_leave";

    function xk(kk) {
      if (kk instanceof bk.e) return "expected";
      if (kk instanceof Pk.u) return kk.networkLost ? "expected" : "unrecognised";
      if (kk instanceof Pk.d) {
        if ("closed" === kk.stage && (0 === kk.code || (0, fk.g)(kk.code))) return "expected";
        if ("roomError" === kk.stage && (kk.serverText === Mk || kk.serverText === Kk)) return "expected"
      }
      return kk instanceof Pk.d || kk instanceof Pk.k ? null === (0, rk.n)(kk.code).name ? "unrecognised" : "known" : (0, Dk.h)(kk) ? "expected" : kk instanceof Pk.v || kk instanceof mk.d ? "known" : "unrecognised"
    }

    function nk(kk) {
      return kk instanceof bk.e ? "timedOut" : "expected" !== xk(kk) || (0, Dk.h)(kk) || kk instanceof Pk.d && 1001 === kk.code ? void 0 : "failed"
    }

    function Uk(kk) {
      return kk instanceof Pk.d && "attach" !== kk.stage ? (0, Sk.c)(kk, "closed" !== kk.stage || kk.socketOpened ? "socket" : "socket_unopened") : kk instanceof Pk.u ? {
        at: "seat_lost",
        code: kk.httpStatus
      } : kk instanceof Pk.k || kk instanceof bk.e ? (0, Sk.c)(kk, kk instanceof bk.e ? kk.leg : "seat") : void 0
    }
  },
  40311: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Pk,
      i: () => rk,
      m: () => mk
    });
    var Dk = ik(663),
      fk = ik(670);

    function Sk(kk, ek) {
      const ik = null === ek ? void 0 : Dk.e.get(ek);
      return "all" === ik || "webgl" === ik && "webgpu" !== kk.backend ? ek : null
    }

    function bk(kk) {
      return "software_adapter" === kk.reason ? null : kk.adapter
    }

    function rk(kk) {
      const ek = (0, Dk.v)();
      return null === ek ? null : (0, Dk.h)(bk(kk), ek, Dk.l)
    }

    function Pk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fk.n;
      const Dk = Sk(kk, ek);
      return null !== Dk && "webgl" === kk.backend && ik(Dk) ? null : Dk
    }

    function mk(kk) {
      const ek = (0, Dk.v)();
      return null !== ek && (0, Dk.y)((0, Dk.h)(kk, ek, Dk.r))
    }
  },
  38695: (kk, ek, ik) => {
    ik.d(ek, {
      C: () => sk,
      e: () => dk,
      h: () => Lk,
      k: () => Kk,
      o: () => Ck,
      s: () => lk,
      w: () => jk
    });
    var Dk = ik(35841),
      fk = ik(36004);
    const Sk = 64 * Dk.e,
      bk = 40 * Dk.h,
      rk = 36 * Dk.h,
      Pk = 20 * Dk.h,
      mk = 2 * Dk.h,
      Mk = 5 * Dk.h;

    function Kk(kk) {
      return "footprint" !== kk
    }
    const xk = 2 * Dk.h,
      nk = 4 * Dk.h,
      Uk = 35 * Dk.h + xk + nk,
      Hk = 6.5 * Dk.h,
      wk = 132.5 * Dk.e;

    function lk(kk) {
      const ek = Hk + (0, fk.o)(kk) + kk * wk;
      return Math.ceil((2 * Uk + ek) / Sk) * Sk
    }
    const pk = lk(fk.d),
      yk = (Dk.h, Dk.h, Dk.h, {
        targetBytes: bk,
        leastBytes: Pk
      }),
      Yk = {
        targetBytes: rk,
        leastBytes: Pk
      };

    function Lk(kk) {
      return {
        targetBytes: kk,
        leastBytes: 0
      }
    }

    function Ck(kk) {
      return kk >= fk.d ? yk : Yk
    }
    const Ak = 2 * Sk;

    function jk(kk, ek, ik) {
      return kk + ek + Ak > (null !== ik && void 0 !== ik ? ik : pk)
    }
    const sk = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? kk => {
        requestIdleCallback(kk)
      } : null
    };
    class dk {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sk;
        this.memory = kk, this.readPeakStoredChunks = ek, this.onError = ik, this.clock = Dk, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(kk, ek, ik) {
        this.shedding = {
          shed: kk,
          CU: ek,
          readDistanceInUse: ik
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(kk) {
        this.footprint = kk
      }
      setCeiling(kk) {
        this.ceilingBytes = kk, this.call((() => {
          this.memory.setCeiling(kk)
        }), void 0)
      }
      ceilingMayRefuse(kk) {
        return jk(this.memory.memoryBytes(), kk, this.ceilingBytes)
      }
      reserveAtJoin(kk) {
        let {
          targetBytes: ek,
          leastBytes: ik
        } = kk;
        const Dk = this.memory.memoryBytes(),
          fk = Dk + ik,
          Sk = Math.max(ek + (this.ballastOn() ? Mk : 0), fk),
          bk = this.call((() => this.memory.reserveUpFront(Sk) ? "target" : Sk > fk && this.memory.reserveUpFront(fk) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== bk) {
          const kk = "least" === bk ? `took ${fk} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Sk} bytes was refused at ${Dk} bytes; ${kk}`)
        }
        return this.joinReserveTaken = bk, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== bk && this.shedFor("joinReserve"), "none" !== bk
      }
      afterFrame() {
        if (this.stopped) return;
        const kk = this.clock.now(),
          ek = null !== this.stepsHeldUntil && kk >= this.stepsHeldUntil;
        if (ek && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && kk >= this.ballastCheckAt && (this.takeBallast(kk), this.stopped)) return;
        const ik = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Dk = ek && "now" === ik ? "none" : ik,
          {
            requestIdle: fk
          } = this.clock;
        "now" === Dk || null !== this.pendingSince && kk - this.pendingSince >= 500 ? this.step() : "idle" === Dk && null === this.pendingSince && (null === fk ? this.step() : (this.pendingSince = kk, fk((() => {
          null !== this.pendingSince && this.step()
        })))), kk - this.statsAt >= 1e3 && (this.statsAt = kk, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var kk, ek;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (ek = this.shedding.readDistanceInUse()) && void 0 !== ek ? ek : this.distanceInUse);
          null === (kk = this.footprint) || void 0 === kk || kk.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(kk, ek) {
        this.noteWorker(`Mesh${kk}`, ek)
      }
      meshWorkerGone(kk) {
        this.workerGone(`Mesh${kk}`)
      }
      noteWorldgen(kk) {
        this.noteWorker("Worldgen", kk)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(kk, ek) {
        const ik = this.workers.get(kk);
        null !== ik && void 0 !== ik && ik.gone && (this.replacedRefusals.reserves += ik.stats.reservesRefused, this.replacedRefusals.allocations += ik.stats.allocationsRefused), this.workers.set(kk, {
          stats: ek,
          gone: !1
        })
      }
      workerGone(kk) {
        const ek = this.workers.get(kk);
        ek && (ek.gone = !0)
      }
      details() {
        var kk, ek;
        const ik = {
          wasmMemoryNow: `${(0,Dk.l)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (ik.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (ik.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const fk = this.main;
        if (fk) {
          ik.wasmMemoryMain = Vk(fk);
          const kk = Math.max(0, fk.peakLiveBytes - this.ballastPeakBytes),
            ek = 0 === this.peakStoredChunks ? "-" : (kk / this.peakStoredChunks / Dk.e).toFixed(1);
          ik.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${ek} KiB`
        }
        for (const [Dk, {
            stats: bk,
            gone: rk
          }] of this.workers) ik[`wasmMemory${Dk}`] = Vk(bk) + (rk ? " (gone)" : "");
        const Sk = null !== (kk = null === (ek = this.footprint) || void 0 === ek ? void 0 : ek.describe()) && void 0 !== kk ? kk : null;
        return null !== Sk && (ik.wasmMemoryFootprint = Sk), ik
      }
      pageKillSnapshot() {
        var kk, ek, ik, fk, Sk;
        let bk = (null !== (kk = null === (ek = this.main) || void 0 === ek ? void 0 : ek.reservesRefused) && void 0 !== kk ? kk : 0) + this.replacedRefusals.reserves,
          rk = (null !== (ik = null === (fk = this.main) || void 0 === fk ? void 0 : fk.allocationsRefused) && void 0 !== ik ? ik : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Dk
          }
          of this.workers.values()) bk += Dk.reservesRefused, rk += Dk.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Dk.l)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Dk.l)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: bk,
          refusedAllocations: rk,
          sheds: this.sheds,
          ...null === (Sk = this.footprint) || void 0 === Sk ? void 0 : Sk.snapshot()
        }
      }
      workersMemoryBytes() {
        let kk = 0;
        for (const {
            stats: ek,
            gone: ik
          }
          of this.workers.values()) kk += ik ? 0 : ek.memoryBytes;
        return kk
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(mk)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(kk) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = kk + 1e3;
        const ek = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, ek)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(kk) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${kk}: frames grow on demand from here`)
      }
      shedFor(kk) {
        const {
          shedding: ek
        } = this;
        if (null === ek) return;
        this.pendingSince = null;
        const ik = this.call((() => ek.shed(kk)), null);
        this.stopped || (null !== ik ? (this.sheds++, this.shedCap = ik, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), ek.CU(kk, this.sheds, this.details())) : Kk(kk) && this.stopSteps("nothing is left to shed"))
      }
      call(kk, ek) {
        if (this.stopped) return ek;
        try {
          return kk()
        } catch (ik) {
          return this.stop(), this.onError(ik), ek
        }
      }
    }

    function Vk(kk) {
      const ek = (kk, ek) => `${kk}/${(0,Dk.l)(ek)}`;
      return `memory ${(0,Dk.l)(kk.memoryBytes)} live ${(0,Dk.l)(kk.liveBytes)} peak ${(0,Dk.l)(kk.peakLiveBytes)} unused ${(0,Dk.l)(kk.unusedBytes)} ceiling ${(0,Dk.l)(kk.ceilingBytes)} MiB; grows upFront ${ek(kk.grows.upFront,kk.grownBytes.upFront)} ahead ${ek(kk.grows.ahead,kk.grownBytes.ahead)} inFrame ${ek(kk.grows.onDemandInFrame,kk.grownBytes.onDemandInFrame)} other ${ek(kk.grows.onDemand,kk.grownBytes.onDemand)}; refused reserves ${kk.reservesRefused} allocations ${kk.allocationsRefused}`
    }
  },
  40371: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Pk,
      d: () => mk,
      h: () => nk,
      l: () => Kk
    });
    var Dk = ik(2823),
      fk = ik(4735),
      Sk = ik(40378),
      bk = ik(40380),
      rk = ik(35843);
    const Pk = 395,
      mk = 2147483648,
      Mk = new Uint8Array(0);
    class Kk extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class xk extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class nk {
      constructor(kk, ek, ik) {
        var Dk, fk, bk, rk;
        let Pk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = kk, this.build = ek, this.onFailure = ik, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.fU = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Dk = Pk.fetchFile) && void 0 !== Dk ? Dk : kk => (0, Sk.j)(kk), this.onWritten = null !== (fk = Pk.onWritten) && void 0 !== fk ? fk : null, this.onTaken = null !== (bk = Pk.onTaken) && void 0 !== bk ? bk : null, this.onPackFileFailed = null !== (rk = Pk.onPackFileFailed) && void 0 !== rk ? rk : null, this.startupLeft = new Set(kk.startup);
        for (const Sk of kk.startup) this.request(Sk)
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
      drawnUrl(kk) {
        return this.drawn.get(kk)
      }
      request(kk) {
        const ek = this.pending.get(kk);
        if (!0 === (null === ek || void 0 === ek ? void 0 : ek.ask)) return;
        const ik = this.tn(kk, !0);
        ik.recheck = void 0 !== ek;
        const Dk = this.drawn.get(kk);
        if (void 0 !== Dk) return ik.XM = !0, ik.recheck = !0, void this.fetch(kk, ik, Dk);
        this.fetchWanted(kk, ik)
      }
      async refresh() {
        const kk = ++this.refreshes,
          ek = new Set;
        for (const bk of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const kk of bk) 0 === (kk & Sk.g) && ek.add(kk);
        const ik = [...ek];
        let Dk;
        try {
          Dk = await Promise.all(ik.map((kk => this.wanted(kk))))
        } catch {
          return null
        }
        if (kk !== this.refreshes) return null;
        const fk = {
          resent: 0,
          refetched: 0,
          delivered: ik.filter((kk => this.drawn.has(kk))).length
        };
        return ik.forEach(((kk, ek) => {
          const {
            url: ik,
            inPlaceOf: Sk
          } = Dk[ek], bk = this.pending.get(kk);
          if (void 0 !== bk) {
            if (bk.XM || void 0 === bk.url) return void(bk.recheck = !0);
            if (bk.url === ik) return;
            fk.refetched++;
            const ek = this.tn(kk, bk.ask);
            return ek.recheck = bk.recheck, void this.fetch(kk, ek, ik, Sk)
          }
          const rk = this.written.get(kk);
          void 0 === rk ? this.drawn.get(kk) !== (null !== ik && void 0 !== ik ? ik : void 0) && (fk.resent++, this.fetch(kk, this.tn(kk, !1), ik, Sk)) : rk.url !== (null !== ik && void 0 !== ik ? ik : "") && (rk.attempt.recheck = !0)
        })), fk
      }
      taken(kk, ek) {
        const ik = new Set,
          Dk = new Set;
        for (const fk of Array.from(ek)) 0 === (fk & mk) ? ik.add(fk) : Dk.add((fk & ~mk) >>> 0);
        for (const [fk, Sk] of this.written) Sk.seq > kk || (this.written.delete(fk), ik.has(Sk.seq) ? this.refusedFile(fk, Sk) : this.takenFile(fk, Sk, !Sk.empty && !Dk.has(Sk.seq)))
      }
      takenFile(kk, ek, ik) {
        const {
          attempt: Dk
        } = ek;
        if (ik) {
          var fk;
          this.drawn.set(kk, ek.url), this.undrawn.delete(kk), void 0 !== Dk.inPlaceOf ? this.refusedPack.set(kk, Dk.inPlaceOf) : Dk.XM || this.refusedPack.delete(kk), null === (fk = this.onTaken) || void 0 === fk || fk.call(this, kk, !0);
          const ik = this.pending.get(kk);
          if (!0 === (null === ik || void 0 === ik ? void 0 : ik.XM) && ik.url !== ek.url) {
            const ik = this.tn(kk, !0);
            ik.XM = !0, ik.recheck = !0, this.fetch(kk, ik, ek.url)
          }
        } else {
          var Sk;
          this.drawn.has(kk) || this.undrawn.add(kk), null === (Sk = this.onTaken) || void 0 === Sk || Sk.call(this, kk, !1)
        }
        Dk.recheck && this.resendIfChanged(kk)
      }
      refusedFile(kk, ek) {
        var ik, Dk;
        if (null === (ik = this.onTaken) || void 0 === ik || ik.call(this, kk, !1), this.refusedPack.set(kk, ek.url), this.pending.has(kk)) return void(null === (Dk = this.onPackFileFailed) || void 0 === Dk || Dk.call(this, kk, Uk(ek.url)));
        const fk = this.tn(kk, ek.attempt.ask);
        fk.recheck = ek.attempt.recheck, this.afterRefusal(kk, fk, ek.url)
      }
      async afterRefusal(kk, ek, ik) {
        var Dk;
        let fk;
        try {
          fk = await this.wanted(kk)
        } catch (Sk) {
          return void(this.pending.get(kk) === ek && this.giveUp(kk, ek, ik, Sk))
        }
        this.pending.get(kk) === ek && (fk.inPlaceOf !== ik ? ek.ask || (null !== (Dk = fk.url) && void 0 !== Dk ? Dk : void 0) !== this.drawn.get(kk) ? this.fetch(kk, ek, fk.url, fk.inPlaceOf) : this.pending.delete(kk) : this.fallBack(kk, ek, ik, Uk(ik)))
      }
      tn(kk, ek) {
        const ik = {
          url: void 0,
          ask: ek,
          XM: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(kk, ik);
        for (let Dk = this.ready.length - 1; Dk >= 0; Dk--) this.ready[Dk].file === kk && this.ready.splice(Dk, 1);
        return ik
      }
      async wanted(kk) {
        const ek = await this.files.url(kk);
        return null !== ek && this.refusedPack.get(kk) === ek ? {
          url: await this.files.shippedUrl(kk),
          inPlaceOf: ek
        } : {
          url: ek,
          inPlaceOf: void 0
        }
      }
      fetchWanted(kk, ek) {
        const ik = this.files.url(kk);
        ik instanceof Promise ? ik.then((ik => {
          this.fetchFound(kk, ek, ik)
        }), (ik => {
          this.pending.get(kk) === ek && this.giveUp(kk, ek, "", ik)
        })) : this.fetchFound(kk, ek, ik)
      }
      fetchFound(kk, ek, ik) {
        null !== ik && this.refusedPack.get(kk) === ik ? Promise.resolve(this.files.shippedUrl(kk)).then((Dk => {
          this.fetch(kk, ek, Dk, ik)
        }), (Dk => {
          this.pending.get(kk) === ek && this.giveUp(kk, ek, ik, Dk)
        })) : this.fetch(kk, ek, ik)
      }
      fetch(kk, ek, ik, Dk) {
        this.pending.get(kk) === ek && (ek.url = ik, ek.inPlaceOf = Dk, null !== ik ? this.load(kk, ek, ik) : this.buildFile(kk, ek, "", Mk))
      }
      load(kk, ek, ik) {
        const Dk = this.fU.get(kk);
        (null === Dk || void 0 === Dk ? void 0 : Dk.url) !== ik ? this.fetchFile(ik).then((Dk => {
          var fk, Sk;
          this.pending.get(kk) === ek && (this.keptTotal += Dk.byteLength - (null !== (fk = null === (Sk = this.fU.get(kk)) || void 0 === Sk ? void 0 : Sk.glb.byteLength) && void 0 !== fk ? fk : 0), this.fU.set(kk, {
            url: ik,
            glb: Dk
          }), this.buildFile(kk, ek, ik, Dk))
        }), (Dk => {
          this.pending.get(kk) === ek && this.fallBack(kk, ek, ik, Dk)
        })) : this.buildFile(kk, ek, ik, Dk.glb)
      }
      buildFile(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bk = Dk.byteLength > 0 && (0, Sk.l)(ik) ? (kk | Sk.e) >>> 0 : kk;
        this.queueRecord(kk, ek, ik, Dk, this.build(bk, Dk), fk)
      }
      queueRecord(kk, ek, ik, Dk, Sk, rk) {
        Sk.then((Sk => {
          if (this.pending.get(kk) !== ek) return;
          if (fk.z + (0, fk.Ie)(Sk.byteLength) > fk.Wc) return void this.ringRefused(kk, ek, ik, new Kk(`${Hk(ik)}'s record is ${Sk.byteLength-bk.b} bytes, past the cmd ring's ${fk.Wc}`), rk);
          const Pk = {
            file: kk,
            url: ik,
            payload: Sk,
            glb: Dk,
            attempt: ek
          };
          rk ? this.ready.unshift(Pk) : this.ready.push(Pk)
        }))
      }
      async fallBack(kk, ek, ik, Dk) {
        var fk;
        let Sk = null,
          bk = Dk;
        try {
          Sk = await this.files.shippedUrl(kk)
        } catch (rk) {
          bk = rk
        }
        this.pending.get(kk) === ek && (null !== Sk && Sk !== ik ? (null === (fk = this.onPackFileFailed) || void 0 === fk || fk.call(this, kk, Dk), ek.ask || this.drawn.get(kk) !== Sk ? (ek.url = Sk, ek.inPlaceOf = ik, this.load(kk, ek, Sk)) : this.pending.delete(kk)) : this.giveUp(kk, ek, ik, bk))
      }
      ringRefused(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Sk.l)(ik) ? this.fallBack(kk, ek, ik, Dk): this.giveUp(kk, ek, ik, Dk, fk)
      }
      giveUp(kk, ek, ik, fk) {
        let Sk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: kk,
          url: Hk(ik),
          error: fk,
          startup: this.startupLeft.has(kk)
        }), ek.ask || !this.drawn.has(kk) ? (0, Dk.X)(fk) ? this.queueRecord(kk, ek, ik, Mk, Promise.resolve((0, bk.m)(kk, (0, rk.j)(fk))), Sk) : this.buildFile(kk, ek, ik, Mk, Sk) : this.pending.delete(kk)
      }
      async resendIfChanged(kk) {
        var ek;
        if (0 !== (kk & Sk.g)) return;
        let ik;
        try {
          ik = await this.wanted(kk)
        } catch {
          return
        }(null !== (ek = ik.url) && void 0 !== ek ? ek : void 0) === this.drawn.get(kk) || this.pending.has(kk) || this.written.has(kk) || this.fetch(kk, this.tn(kk, !1), ik.url, ik.inPlaceOf)
      }
      drain(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === kk) return;
        let ik = 0,
          Dk = 0;
        for (; Dk < this.ready.length && ik < 262144;) {
          const rk = this.ready[Dk];
          if (this.written.has(rk.file)) {
            Dk++;
            continue
          }
          const Mk = this.nextSeq;
          new DataView(rk.payload.buffer, rk.payload.byteOffset, rk.payload.byteLength).setUint32(bk.e, Mk, !0);
          const xk = rk.attempt.XM && rk.glb.byteLength > 0 && this.drawn.get(rk.file) === rk.url;
          if (kk(Pk, xk ? 1 : 0, rk.payload)) {
            if (this.nextSeq = Mk >= mk - 1 ? 1 : Mk + 1, this.ready.splice(Dk, 1), ik += rk.payload.byteLength, this.pending.delete(rk.file), this.startupLeft.delete(rk.file), this.written.set(rk.file, {
                seq: Mk,
                url: rk.url,
                empty: 0 === rk.glb.byteLength,
                attempt: rk.attempt
              }), rk.glb.byteLength > 0) try {
              var fk;
              null === (fk = this.onWritten) || void 0 === fk || fk.call(this, rk.file, rk.glb)
            } catch (Sk) {
              console.warn("ModelFeed: reading the file's images failed", Sk)
            }
          } else {
            if (null === ek || 0 === rk.glb.byteLength || ek(rk.payload.byteLength)) return;
            this.ready.splice(Dk, 1);
            const kk = new Kk(`${Hk(rk.url)}'s record is ${rk.payload.byteLength-bk.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(rk.file, rk.attempt, rk.url, kk, !0)
          }
        }
      }
    }

    function Uk(kk) {
      return new xk(`presentation refused ${Hk(kk)}`)
    }

    function Hk(kk) {
      return kk.startsWith("data:") ? `${kk.slice(0,Math.min(Math.max(kk.indexOf(","),5),64))},...` : kk
    }
  },
  40378: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk,
      g: () => Sk,
      j: () => Mk,
      l: () => rk,
      n: () => mk,
      o: () => Pk
    });
    var Dk = ik(2823),
      fk = ik(3177);
    const Sk = 2147483648,
      bk = 1073741824;

    function rk(kk) {
      return kk.startsWith("data:")
    }

    function Pk(kk) {
      let {
        onTableFailed: ek,
        packUrl: ik
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Dk = mk();
      Dk.catch((kk => {
        null === ek || void 0 === ek || ek(kk)
      }));
      const fk = async ek => (await Dk).fileUrl((ek & ~Sk) >>> 0, kk);
      return {
        startup: [],
        url: async kk => {
          if (ik && 0 === (kk & Sk)) {
            const ek = await Dk,
              fk = ek.filePackName(kk),
              Sk = null === fk || "lifeform" === ek.fileSource(kk) ? null : ik(fk);
            if (null !== Sk) return Sk
          }
          return fk(kk)
        },
        shippedUrl: fk
      }
    }

    function mk() {
      return ik.e(41).then((() => ik(42255)))
    }
    async function Mk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return kk.startsWith("data:") ? (0, fk.b)(kk.slice(kk.indexOf(",") + 1), ek) : (0, Dk.M)(kk, {
        spare: ek
      })
    }
  },
  40380: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => mk,
      e: () => Mk,
      h: () => nk,
      l: () => wk,
      m: () => Uk,
      o: () => xk,
      r: () => Hk
    });
    const Dk = 826427981,
      fk = 1,
      Sk = 2,
      bk = 44,
      rk = 46,
      Pk = 58,
      mk = 8,
      Mk = 4;

    function Kk(kk, ek, ik) {
      const fk = (new TextEncoder).encode(ik),
        Sk = mk + 4 * (ek.length + 2),
        bk = new Uint8Array(Sk + (fk.byteLength + 3 & -4)),
        rk = new DataView(bk.buffer);
      return rk.setUint32(0, kk, !0), rk.setUint32(mk, Dk, !0), ek.forEach(((kk, ek) => {
        rk.setUint32(mk + 4 * (ek + 1), kk, !0)
      })), rk.setUint32(Sk - 4, fk.byteLength, !0), bk.set(fk, Sk), bk
    }

    function xk(kk, ek) {
      return Kk(kk, [Sk], ek)
    }

    function nk(kk, ek) {
      return Kk(kk, [fk, rk], ek)
    }

    function Uk(kk, ek) {
      return Kk(kk, [fk, Pk], ek)
    }

    function Hk(kk, ek) {
      return Kk(kk, [fk, bk], ek)
    }

    function wk(kk) {
      const ek = mk;
      if (kk.byteLength < ek + 12) return !1;
      const ik = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      return ik.getUint32(ek, !0) === Dk && ik.getUint32(ek + 4, !0) === fk && ik.getUint32(ek + 8, !0) === bk
    }
  },
  40305: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk,
      g: () => Mk,
      h: () => bk,
      j: () => Pk
    });
    var Dk = ik(35843);
    class fk extends Error {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${kk}: the module trapped${ik?" in an earlier call":""}: ${String(ek)}`, {
          cause: ek
        }), this.site = kk, this.trap = ek, this.earlier = ik, this.name = "ModuleTrapError", ek instanceof Error && void 0 !== ek.stack && (this.stack = `${this.name}: ${this.message}\n${ek.stack}`)
      }
    }
    const Sk = new WeakMap;

    function bk(kk) {
      return Sk.has(kk)
    }

    function rk(kk, ek) {
      Sk.has(kk) || Sk.set(kk, ek)
    }

    function Pk(kk, ek) {
      return !!(0, Dk.i)(ek) && (rk(kk, ek), !0)
    }
    const mk = [
      ["error", kk => kk.error],
      ["unhandledrejection", kk => kk.reason]
    ];

    function Mk(kk, ek, ik) {
      let bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Sk.has(kk) ? Promise.reject(new fk(ek, Sk.get(kk), !0)) : new Promise(((Sk, Pk) => {
        const Mk = ik => {
            rk(kk, ik), nk(), Pk(new fk(ek, ik))
          },
          Kk = kk => {
            kk instanceof WebAssembly.RuntimeError ? Mk(kk) : (nk(), Pk(kk))
          },
          xk = mk.map((kk => {
            let [ek, ik] = kk;
            return [ek, kk => {
              const ek = ik(kk);
              (0, Dk.i)(ek) && Mk(ek)
            }]
          })),
          nk = () => {
            for (const [kk, ek] of xk) null === bk || void 0 === bk || bk.removeEventListener(kk, ek)
          };
        for (const [kk, ek] of xk) null === bk || void 0 === bk || bk.addEventListener(kk, ek);
        let Uk;
        try {
          Uk = ik()
        } catch (Hk) {
          return void Kk(Hk)
        }
        Uk.then((kk => {
          nk(), Sk(kk)
        }), Kk)
      }))
    }
  },
  40294: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => Wk,
      E: () => ak,
      H: () => qk,
      L: () => Ck,
      N: () => Fk,
      Q: () => tk,
      U: () => uk,
      V: () => zk,
      Z: () => Vk,
      b: () => Lk,
      f: () => pk,
      i: () => Qk,
      l: () => Ik,
      p: () => lk,
      t: () => Yk,
      u: () => Hk,
      v: () => jk,
      x: () => dk
    });
    var Dk = ik(197),
      fk = ik(22),
      Sk = ik(293),
      bk = ik(38),
      rk = ik(40297),
      Pk = ik(40319),
      mk = (ik(40358), ik(40415)),
      Mk = ik(40343);
    const Kk = "wasmJoinBuild";
    let xk = null,
      nk = null,
      Uk = null;

    function Hk(kk) {
      Uk = kk
    }
    let wk = !1;

    function lk() {
      wk = !0
    }

    function pk() {
      return wk
    }
    let yk = !1;

    function Yk() {
      yk = !0
    }

    function Lk() {
      return yk
    }

    function Ck() {
      return Uk
    }
    let Ak = null;

    function jk(kk) {
      Ak = kk, (0, Sk.c)(kk)
    }
    const sk = "wasmClientRenderLost";

    function dk() {
      bk.g.setItem(sk, !0)
    }

    function Vk() {
      return !0 === bk.g.getItem(sk)
    }

    function Fk() {
      return Ak
    }

    function uk() {
      return null === xk && (bk.f.removeItem("wasmLastPick"), bk.f.removeItem("wasmGuessVerdict"), (0, Sk.h)(), xk = (0, rk.y)(Pk.c).then((kk => (null === kk || (0, rk.m)(kk) || (nk = mk.e[kk.backend], fk.b.followGameGpu("webgpu" === kk.backend ? kk.adapter : null), "webgpu" === kk.backend && (0, Mk.h)()), kk)))), xk
    }

    function qk() {
      return nk
    }

    function Ik(kk) {
      return kk ? kk.load() : Promise.resolve().then((function() {
        var kk = new Error("Cannot find module '@bloxd/wasm/client'");
        throw kk.code = "MODULE_NOT_FOUND", kk
      })).then((kk => kk.bloxdWasmClient))
    }

    function zk(kk) {
      bk.f.setItem(Kk, kk)
    }
    async function Qk() {
      if (null === Pk.c) return Ik(null);
      const kk = bk.f.getItem(Kk);
      let ek = "none" === kk ? null : "webgl";
      return null !== kk && "none" !== kk && ("string" === typeof kk && void 0 !== (0, Dk.c)(Pk.c, kk) ? ek = kk : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(kk)}, is none of this client's: guessing WebGL2's`)), null === ek ? null : Pk.c[ek]()
    }
    let vk = null,
      Ek = null,
      hk = null;

    function ak() {
      return vk ??= uk().then((async kk => {
        const ek = null !== kk && !(0, rk.m)(kk),
          ik = {
            indirectHangs: ek && await (0, rk.D)(kk, window.location.search),
            storagePullBreaks: ek && (0, rk.N)(kk, window.location.search),
            splitPassBreaks: ek && (0, rk.L)(kk, window.location.search),
            earlySky: ek && (0, rk.B)(kk, window.location.search),
            instancedTerrain: ek ? (0, rk.E)(kk, window.location.search) : null,
            framesAhead: (0, rk.k)(window.location.search),
            webGpuRestores: !ek || (0, rk.Q)(kk)
          };
        return Ek = ik.indirectHangs, hk = !ik.webGpuRestores, ik
      })), vk
    }

    function Wk() {
      return Ek
    }

    function tk() {
      return hk
    }
  },
  40337: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Ak,
      f: () => pk,
      g: () => lk,
      j: () => Ck,
      k: () => Vk,
      o: () => dk,
      p: () => Fk,
      s: () => Yk
    });
    var Dk = ik(4741),
      fk = ik(40343);
    const Sk = 1,
      bk = 18,
      rk = 19,
      Pk = 20,
      mk = {
        [Sk]: "link",
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
        [bk]: "retry linked",
        [rk]: "fallback linked",
        [Pk]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function Mk(kk, ek, ik) {
      return kk === bk ? "program retry" : kk === Sk ? "program link" : kk === rk || kk === Pk ? `program ${ek} ${ik}` : "program"
    }
    const Kk = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      xk = {
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
      nk = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Uk = {
        11: "none read after view",
        12: "some read after view"
      },
      Hk = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...Uk
      },
      wk = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function lk(kk, ek) {
      return kk === Dk.p.RenderSerialLinks && void 0 !== Uk[ek]
    }

    function pk(kk, ek) {
      return kk === Dk.p.RenderSerialLinks && void 0 !== wk[15 & ek]
    }
    const yk = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function Yk(kk) {
      return String(kk).replace(/\d/g, (kk => String.fromCharCode(97 + Number(kk))))
    }

    function Lk(kk, ek) {
      var ik;
      return null !== (ik = kk[ek]) && void 0 !== ik ? ik : Yk(ek)
    }

    function Ck() {
      return Yk((0, fk.e)())
    }

    function Ak(kk, ek) {
      switch (kk) {
        case Dk.p.RenderSceneRowNotDrawn:
          return {
            words: ` ${Lk(xk,ek)}`, instance: String(ek), group: String(kk)
          };
        case Dk.p.RenderChunkMeshNotDrawn: {
          const ik = 0 === (128 & ek) ? "" : " shortage",
            Dk = ek >>> 8;
          return {
            words: ` ${Lk(nk,127&ek)}${ik}${0===Dk?"":` kind ${Yk(Dk)}`}`,
            instance: String(ek),
            group: String(kk)
          }
        }
        case Dk.p.RenderInternal: {
          const ik = Lk(Kk, 255 & ek),
            Dk = ek >>> 8 & 255;
          if (0 === Dk) return {
            words: ` ${ik}`,
            instance: String(ek),
            group: String(kk)
          };
          const fk = Lk(mk, Dk),
            Sk = ek >>> 16;
          return {
            words: ` ${ik} ${fk} program ${Yk(Sk)}`,
            instance: `${ik} ${fk} ${Sk}`,
            group: Mk(Dk, fk, ik),
            gpuDetails: {
              programFailure: fk,
              program: String(Sk)
            }
          }
        }
        case Dk.p.RenderSerialLinks: {
          if (pk(kk, ek)) {
            const kk = function(kk) {
              const ek = (ek, ik) => Yk(kk >>> ek & (1 << ik) - 1),
                ik = kk >>> 30 & 1 ? " restored" : "";
              return `link census ${wk[15&kk]} linked ${ek(22,8)} failed ${ek(4,6)} retried ${ek(10,6)} fallback ${ek(16,6)}${ik}`
            }(ek);
            return {
              words: ` ${kk}`,
              instance: String(15 & ek),
              group: "link census",
              gpuDetails: {
                linkCensus: kk
              }
            }
          }
          const ik = Lk(Hk, ek);
          return {
            words: ` ${ik}`,
            instance: String(ek),
            group: String(kk),
            gpuDetails: {
              serialLinks: ik
            }
          }
        }
        case Dk.p.RenderGlErrorAfterRestore: {
          const ik = Lk(yk, 65535 & ek),
            Dk = ek >>> 16,
            fk = 65535 !== Dk;
          return {
            words: ` ${ik}${fk?` program ${Yk(Dk)}`:""}`,
            instance: String(ek),
            group: String(kk),
            gpuDetails: fk ? {
              glError: ik,
              program: String(Dk)
            } : {
              glError: ik
            }
          }
        }
        default:
          return null
      }
    }
    const jk = 2,
      sk = new Map;

    function dk(kk) {
      let {
        group: ek,
        instance: ik
      } = kk, Dk = sk.get(ek);
      return void 0 === Dk && (Dk = [], sk.set(ek, Dk)), !Dk.includes(ik) && (Dk.length >= jk || (Dk.push(ik), !1))
    }

    function Vk() {
      return sk.size > 0
    }

    function Fk() {
      sk.clear()
    }
  },
  40319: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      c: () => Sk
    });
    var Dk = ik(40326);
    const fk = new WeakSet;
    const Sk = {
        webgpu: async () => (function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === kk || fk.has(kk.prototype)) return;
          fk.add(kk.prototype);
          const ek = kk.prototype.requestDevice;
          kk.prototype.requestDevice = function(kk) {
            var ik;
            const fk = null !== (ik = null === kk || void 0 === kk ? void 0 : kk.requiredLimits) && void 0 !== ik ? ik : {},
              Sk = Object.keys(fk).filter((kk => !(kk in this.limits)));
            if (0 === Sk.length) return ek.call(this, kk);
            const bk = Object.fromEntries(Object.entries(fk).filter((kk => {
              let [ek] = kk;
              return ek in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${Sk.join(", ")}`), (0, Dk.reportDroppedRequiredLimits)(Sk), ek.call(this, {
              ...kk,
              requiredLimits: bk
            })
          }
        }(), (await ik.e(8).then((() => ik(42207)))).bloxdWasmWebgpu),
        webgl: async () => (await ik.e(6).then((() => ik(42223)))).bloxdWasmWebgl,
        webgl1: async () => (await ik.e(7).then((() => ik(42234)))).bloxdWasmWebgl1
      },
      bk = async () => (await ik.e(5).then((() => ik(42243)))).compileAnimationPackInWasm
  },
  40274: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => lk,
      h: () => wk,
      l: () => Lk
    });
    var Dk = ik(6484),
      fk = ik(26),
      Sk = ik(4264),
      bk = ik(4741),
      rk = ik(6479),
      Pk = ik(40283);

    function mk(kk, ek) {
      const ik = (0, rk.c)(ek.variants);
      return kk.setShaderPack(ik.variantFlags, ik.hooks, ik.moduleCodes, (0, Pk.y)(ek.layers), Pk.j[ek.kr], ek.keepCircleShadows)
    }
    const Mk = 0,
      Kk = 1,
      xk = 2,
      nk = "shaderPack:failedToCompile",
      Uk = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      Hk = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function wk(kk, ek) {
      var ik;
      const Dk = null !== (ik = null === kk || void 0 === kk ? void 0 : kk.reason) && void 0 !== ik ? ik : "none";
      return Uk.has(Dk) ? {
        messageKey: ek ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Dk && "override" === (null === kk || void 0 === kk ? void 0 : kk.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Hk.has(Dk) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class lk extends Error {
      constructor(kk) {
        super(`the shader pack can't run in this game: ${kk}`), this.messageKey = kk, this.name = "ShaderPackJoinError"
      }
    }
    const pk = "strict";
    class yk {
      constructor(kk) {
        this.deps = kk, this.pagePack = void 0, this.loaded = null, this.kr = pk, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = kk.load().catch((ek => (kk.warn("the shader pack could not load: the game draws without it", ek), {
          status: "none"
        }))).then((kk => (this.loaded = kk, "active" === kk.status && (this.handOverToPreviews(kk), null !== kk.harnessPolicy && (this.kr = kk.harnessPolicy, this.handOver())), kk)))
      }
      async join(kk) {
        this.leave();
        const ek = this.game,
          [ik, fk] = await Promise.all([this.pagePack, this.policyOf(kk)]);
        if (ek !== this.game || "none" === ik.status) return null;
        const Sk = "active" === ik.status ? ik.pack.variants : ik.variants,
          bk = (0, Dk.j)(Sk, fk);
        if (bk && "active" === ik.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (bk) {
          const kk = this.cantRun(ik, fk);
          if (null !== kk) return kk
        } else if ("blocked" === ik.status || null === this.deps.core) return null;
        return this.kr = fk, this.handOver(), bk && this.refused ? nk : (this.joined = !0, this.offInThisGame = !bk, null)
      }
      async replay(kk) {
        const ek = await this.join(kk);
        null === ek ? this.playable() : this.deps.failInGame(ek)
      }
      cantRun(kk, ek) {
        const {
          core: ik,
          noWebGpu: Dk
        } = this.deps;
        if ("blocked" === kk.status) {
          return "shaderPack:failedUnchecked" === kk.messageKey && null === ik && Dk.noAdapter ? Dk.messageKey : kk.messageKey
        }
        return this.refused || this.failedPolicies.has(ek) ? nk : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var kk;
        return this.runsInJoinedGame() && "active" === (null === (kk = this.loaded) || void 0 === kk ? void 0 : kk.status) ? function(kk, ek) {
          const ik = kk.filter((kk => (0, Dk.j)([kk], ek))),
            fk = kk => ik.some((ek => ek[kk]));
          return {
            sceneDepth: fk("sceneDepth"),
            sunShadow: fk("sunShadow"),
            airShadow: fk("airShadow")
          }
        }(this.loaded.pack.variants, this.kr) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(nk) : (null !== this.couldntRun ? this.notify(Sk.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.kr) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(kk) {
        for (const {
            code: ek,
            detail: ik
          }
          of kk)
          if (ek === bk.p.RenderShaderPackNotRun) switch (255 & ik) {
            case Mk:
              this.refused = !0, this.failed();
              break;
            case Kk:
              this.failedPolicies.add(this.kr), this.failed();
              break;
            case xk:
              this.failedModelPolicies.add(this.kr), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(nk) : this.failedWhileJoining = !0)
      }
      fail(kk) {
        this.leave(), this.deps.failInGame(kk)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(kk, ek) {
        const ik = this.game;
        this.deps.notify(kk, (() => ik === this.game && this.joined), ek)
      }
      handOver() {
        var kk;
        const {
          core: ek
        } = this.deps;
        null !== ek && "active" === (null === (kk = this.loaded) || void 0 === kk ? void 0 : kk.status) && (mk(ek, {
          ...this.loaded.pack,
          kr: this.kr
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(kk) {
        let {
          pack: ek,
          harnessPolicy: ik
        } = kk;
        const {
          previews: Dk
        } = this.deps;
        null !== Dk && mk(Dk, {
          ...ek,
          kr: null !== ik && void 0 !== ik ? ik : pk
        })
      }
      policyOf(kk) {
        return this.deps.policyOf(kk).catch((kk => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", kk), pk)))
      }
    }
    const Yk = "wasmShaderPackNotice";

    function Lk(kk, ek, ik, Dk) {
      return fk.j.subscribe(Yk, (kk => {
        let {
          translationKey: ek,
          stillCurrent: ik,
          reasonKey: Dk
        } = kk;
        ik() && fk.j.tm("chat", (0, Sk.e)(ek, Dk))
      })), new yk({
        load: Ck,
        policyOf: Ak,
        core: kk,
        previews: ek,
        noWebGpu: ik,
        notify: (kk, ek, ik) => {
          const Dk = {
            translationKey: kk,
            stillCurrent: ek,
            reasonKey: ik
          };
          fk.j.tm(Yk, Dk, !0)
        },
        failInGame: kk => {
          fk.j.tm(Sk.d, kk)
        },
        warn: Dk
      })
    }
    async function Ck() {
      const [{
        shaderPackPage: kk,
        harnessShaderPackMode: ek
      }, {
        shaderPackTextures: Dk
      }] = await Promise.all([ik.e(115).then((() => ik(38787))), ik.e(116).then((() => ik(6477)))]), fk = await kk.load();
      return "active" !== fk.status ? fk : {
        status: "active",
        pack: {
          variants: fk.pack.variants,
          layers: Dk().layers,
          keepCircleShadows: fk.pack.keepCircleShadows
        },
        harnessPolicy: ek()
      }
    }
    async function Ak(kk) {
      var ek;
      const [{
        shaderPackPage: Dk,
        harnessShaderPackMode: fk
      }, {
        getShaderPackPolicy: Sk
      }] = await Promise.all([ik.e(115).then((() => ik(38787))), ik.e(91).then((() => ik(40842)))]);
      return await Dk.load(), null !== (ek = fk()) && void 0 !== ek ? ek : Sk(kk)
    }
  },
  40397: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      g: () => wk,
      j: () => Pk,
      l: () => mk,
      o: () => Mk,
      q: () => xk
    });
    var Dk = ik(40400),
      fk = ik(40407);
    const Sk = "atlas:",
      bk = 3e4;
    class rk extends Error {
      constructor(kk, ek) {
        super(`fetching ${kk} answered HTTP ${ek}`), this.url = kk, this.status = ek, this.name = "TerrainTextureFetchError"
      }
    }

    function Pk(kk) {
      if (!kk.startsWith(Sk)) return null;
      const ek = Number(kk.slice(Sk.length));
      return Number.isInteger(ek) && ek >= 0 ? ek : null
    }
    async function mk() {
      const kk = await ik.e(206).then((() => ik(33856)));
      return {
        atlasSheets: kk.blockAtlasUrls,
        texture: ek => {
          var ik, Dk, Sk;
          return null !== (ik = null !== (Dk = null !== (Sk = kk.animatedBlockTextures[ek]) && void 0 !== Sk ? Sk : kk.rotatedBlockTextures[ek]) && void 0 !== Dk ? Dk : fk.c[ek]) && void 0 !== ik ? ik : null
        }
      }
    }
    async function Mk(kk) {
      const ek = new AbortController,
        ik = setTimeout((() => {
          ek.abort(new DOMException(`${kk} took over ${bk} ms`, "TimeoutError"))
        }), bk);
      let Dk;
      try {
        const ik = await fetch(kk, {
          signal: ek.signal
        });
        if (!ik.ok) throw new rk(kk, ik.status);
        Dk = await ik.blob()
      } finally {
        clearTimeout(ik)
      }
      const fk = await createImageBitmap(Dk, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return xk(fk)
      } finally {
        fk.close()
      }
    }
    const Kk = 8192;

    function xk(kk) {
      const {
        width: ek,
        height: ik
      } = kk, fk = Math.max(1, Math.min(ik, Kk)), Sk = (0, Dk.f)(ek, fk, {
        willReadFrequently: !0
      });
      if (!Sk) throw new Error("no 2D context to read the texture back");
      Sk.globalCompositeOperation = "copy";
      const bk = new Uint8Array(ek * ik * 4);
      for (let Dk = 0; Dk < ik; Dk += fk) {
        const rk = Math.min(fk, ik - Dk);
        Sk.drawImage(kk, 0, Dk, ek, rk, 0, 0, ek, rk), bk.set(Sk.getImageData(0, 0, ek, rk).data, Dk * ek * 4)
      }
      return {
        width: ek,
        height: ik,
        pixels: bk
      }
    }
    async function nk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mk;
      const Dk = [],
        fk = await Promise.all(kk.map((async kk => {
          var fk, bk;
          const rk = null !== (fk = null === (bk = ek.decoded) || void 0 === bk ? void 0 : bk.call(ek, kk)) && void 0 !== fk ? fk : null,
            mk = null === rk ? function(kk, ek) {
              if (kk.startsWith(Sk)) {
                var ik;
                const Dk = Pk(kk);
                return null === Dk ? null : null !== (ik = ek.atlasSheets[Dk]) && void 0 !== ik ? ik : null
              }
              return ek.texture(kk)
            }(kk, ek) : null,
            Mk = null !== rk && void 0 !== rk ? rk : null === mk ? null : ik(mk);
          if (null === Mk) return Dk.push({
            name: kk,
            url: mk,
            error: new Error(`no URL for terrain texture ${kk}`)
          }), null;
          try {
            const ek = await Mk;
            if (ek.pixels.byteLength !== ek.width * ek.height * 4) throw new Error(`decoded ${ek.pixels.byteLength} bytes for ${ek.width}x${ek.height} texels`);
            return {
              name: kk,
              texture: ek
            }
          } catch (Kk) {
            return Dk.push({
              name: kk,
              url: mk,
              error: Kk
            }), null
          }
        }))),
        bk = fk.filter((kk => null !== kk)),
        rk = new Uint32Array(2 * bk.length);
      bk.forEach(((kk, ek) => {
        let {
          texture: ik
        } = kk;
        rk[2 * ek] = ik.width, rk[2 * ek + 1] = ik.height
      }));
      return {
        handOver: {
          names: bk.map((kk => {
            let {
              name: ek
            } = kk;
            return ek
          })),
          textures: bk.map((kk => {
            let {
              texture: ek
            } = kk;
            return ek.pixels
          })),
          sizes: rk
        },
        failures: Dk
      }
    }
    const Uk = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Hk() {}
    class wk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uk,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = kk, this.retryMs = ek, this.keepBelow = ik, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mk,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Dk = ++this.started,
          fk = {
            decode: ik.decode,
            wholeAtlas: ik.wholeAtlas
          };
        return this.loadAndHandOver(ek, fk, kk, (() => {
          var kk;
          return Dk < this.landed || !1 === (null === (kk = ik.wanted) || void 0 === kk ? void 0 : kk.call(ik))
        }), {
          onTaken: (kk, ik) => {
            this.landed = Dk, this.current = {
              mine: Dk,
              sources: ek,
              load: fk,
              fU: kk,
              failed: ik
            }
          }
        })
      }
      restore(kk) {
        var ek;
        const ik = this.current;
        if (null === ik) return Promise.resolve(null);
        if ((null === (ek = this.restoring) || void 0 === ek ? void 0 : ek.mine) === ik.mine) return this.restoring.done;
        const Dk = {
          mine: ik.mine,
          done: this.restoreLanded(ik, kk).finally((() => {
            this.restoring === Dk && (this.restoring = null)
          }))
        };
        return this.restoring = Dk, Dk.done
      }
      async restoreLanded(kk, ek) {
        const ik = () => this.landed !== kk.mine,
          {
            fU: Dk
          } = kk;
        if (null !== Dk) return this.stopped() ? null : this.core.setTerrainTextures(Dk.names, Dk.textures, Dk.sizes);
        let fk = ek;
        for (let Sk = 0;; Sk++) {
          const ek = this.retryMs.at(Sk),
            Dk = {
              allOrNothingExcept: void 0 === ek ? void 0 : kk.failed
            },
            bk = await this.loadAndHandOver(kk.sources, kk.load, fk, ik, Dk);
          if (!1 !== bk || void 0 === ek || this.stopped()) return bk;
          if (fk = Hk, await new Promise((kk => {
              setTimeout(kk, ek)
            })), ik()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Sk = this.core.terrainTextureNames();
        var bk;
        if (0 === Sk.length) return null === (bk = fk.onTaken) || void 0 === bk || bk.call(fk, null, new Set), !0;
        let rk, mk;
        try {
          rk = await kk(), mk = await nk(Sk, rk, ek.decode)
        } catch (wk) {
          return Dk() ? null : (ik({
            name: null,
            url: null,
            error: wk
          }), !1)
        }
        if (Dk() || this.stopped()) return null;
        for (const Pk of mk.failures) ik(Pk);
        const Mk = fk.allOrNothingExcept;
        if (void 0 !== Mk && mk.failures.some((kk => {
            let {
              name: ek
            } = kk;
            return null === ek || !Mk.has(ek)
          })) || !0 === ek.wholeAtlas && mk.failures.some((kk => {
            let {
              name: ek
            } = kk;
            return null === ek || null !== Pk(ek)
          }))) return !1;
        const {
          handOver: Kk
        } = mk, xk = function(kk) {
          return kk.textures.reduce(((kk, ek) => kk + ek.byteLength), 0)
        }(Kk) < this.keepBelow, Uk = this.core.setTerrainTextures(Kk.names, Kk.textures, Kk.sizes, xk ? void 0 : () => {
          !async function(kk, ek) {
            await ek;
            for (const {
                buffer: Dk
              }
              of kk) {
              const kk = Dk;
              var ik;
              if (!kk.detached) null === (ik = kk.transfer) || void 0 === ik || ik.call(kk, 0)
            }
          }(Kk.textures, rk.heldUntil)
        });
        if (Uk) {
          var Hk;
          const kk = new Set(mk.failures.flatMap((kk => {
            let {
              name: ek
            } = kk;
            return null === ek ? [] : [ek]
          })));
          null === (Hk = fk.onTaken) || void 0 === Hk || Hk.call(fk, xk ? Kk : null, kk)
        }
        return Uk
      }
    }
  },
  36442: (kk, ek, ik) => {
    function Dk(kk) {
      return "fetch" === kk || "timeout" === kk || "integrity" === kk ? "download" : "browser"
    }
    ik.d(ek, {
      d: () => fk,
      g: () => bk,
      j: () => Pk,
      l: () => rk,
      p: () => Dk,
      t: () => Sk
    });
    const fk = "https://discord.gg/playbloxd";

    function Sk(kk) {
      return "download" === kk ? {
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

    function bk(kk, ek) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: ek ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: kk.code
        },
        discordLink: ek,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function rk() {
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

    function Pk(kk, ek, ik) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: ik ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: kk.reason
        },
        discordLink: null === kk.name,
        confirm: ek ? "general:reconnect" : kk.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  40343: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk,
      h: () => Pk
    });
    var Dk = ik(99);
    const fk = "webgpuPipeline";

    function Sk(kk) {
      return kk.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let bk = null;

    function rk() {
      if (null === bk) try {
        kk = (0, Dk.getBrowserName)(), ek = (0, Dk.getBrowserVersion)(), ik = (0, Dk.getOperatingSystem)(), fk = (0, Dk.getOperatingSystemVersion)(), bk = `${kk.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===ek?"unknown":Sk(ek)}-${ik}${void 0===fk?"":`_${Sk(fk)}`}`
      } catch (rk) {
        console.warn("The user agent couldn't be read for its browser code", rk), bk = "unknown"
      }
      var kk, ek, ik, fk;
      return bk
    }

    function Pk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const ek = `WGPU-${rk()}`,
        Dk = (kk, Dk) => {
          const {
            reason: Sk,
            message: bk
          } = Dk, rk = {
            pipeline: null !== kk && void 0 !== kk ? kk : "",
            reason: String(Sk),
            browserMessage: String(bk)
          };
          Promise.resolve().then((() => ik(40326))).then((kk => {
            let {
              reportCrash: ik
            } = kk;
            ik({
              kind: "coreError",
              code: ek,
              site: fk,
              fatal: !1,
              message: `${rk.pipeline} ${rk.reason}: ${rk.browserMessage}`,
              details: rk,
              error: Dk
            })
          })).catch((kk => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", kk)
          }))
        },
        Sk = kk.createRenderPipelineAsync;
      kk.createRenderPipelineAsync = function(kk) {
        return Sk.call(this, kk).catch((ek => {
          throw Dk(kk.label, ek), ek
        }))
      };
      const bk = kk.createComputePipelineAsync;
      kk.createComputePipelineAsync = function(kk) {
        return bk.call(this, kk).catch((ek => {
          throw Dk(kk.label, ek), ek
        }))
      }
    }
  },
  40462: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/bloxd_wasm_models_bg.ad5c4b222edc3dc33e95.wasm"
  },
  40455: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/bloxd_wasm_workers_bg.a96ac8bbff87141ebda5.wasm"
  },
  40452: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      h: () => Dk
    });
    const Dk = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new ik.U(ik(40455))
      }
    };
    const fk = {
      name: "bloxd_wasm_models",
      url: function() {
        return new ik.U(ik(40462))
      }
    }
  },
  6479: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Yk,
      g: () => Lk,
      j: () => pk,
      n: () => lk
    });
    var Dk = ik(6484);
    const fk = 6,
      Sk = 3,
      bk = 1,
      rk = 2,
      Pk = 4,
      mk = 8,
      Mk = 16,
      Kk = 32,
      xk = 64,
      nk = 128,
      Uk = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Hk(kk) {
      if (!kk) return 0;
      const ek = Uk.indexOf(kk);
      if (ek <= 0) throw new Error(`"${kk}" is not a shader pack hook function`);
      return ek
    }

    function wk(kk) {
      if (0 === kk) return null;
      const ek = Uk[kk];
      if (void 0 === ek) throw new Error(`${kk} is not a shader pack hook function id`);
      return ek
    }

    function lk(kk) {
      const ek = Dk.c.length;
      return {
        strict: kk >= ek,
        program: Dk.c[kk % ek]
      }
    }

    function pk(kk) {
      return Number(kk.strict) * Dk.c.length + Dk.c.indexOf(kk.program)
    }

    function yk(kk) {
      return "" === kk ? [] : kk.split(" ")
    }

    function Yk(kk) {
      const ek = {
        variantFlags: new Uint8Array(fk),
        hooks: new Uint8Array(fk * Sk),
        moduleCodes: Array(fk).fill(""),
        reads: Array(2 * fk).fill("")
      };
      for (const ik of kk) {
        const kk = pk(ik.key),
          Dk = (kk, ek) => null === ik.hooks.surface || ik.reads.fragment.includes(kk) ? 0 : ek;
        ek.variantFlags[kk] = (ik.sceneDepth ? bk : 0) | (ik.movesVertices ? rk : 0) | (ik.sunShadow ? Pk : 0) | (ik.airShadow ? mk : 0) | (ik.discards ? Mk : 0) | Dk("localPosition", Kk) | Dk("enchantSpeed", xk) | Dk("enchantTier", nk), ek.hooks[kk * Sk] = Hk(ik.hooks.vertex), ek.hooks[kk * Sk + 1] = Hk(ik.hooks.surface), ek.hooks[kk * Sk + 2] = Hk(ik.hooks.light), ek.moduleCodes[kk] = ik.moduleCode, ek.reads[2 * kk] = ik.reads.vertex.join(" "), ek.reads[2 * kk + 1] = ik.reads.fragment.join(" ")
      }
      return ek
    }

    function Lk(kk) {
      const {
        hooks: ek,
        moduleCodes: ik,
        reads: Dk
      } = kk;
      return Array.from(kk.variantFlags, ((kk, fk) => {
        const Kk = fk * Sk;
        return {
          key: lk(fk),
          hooks: {
            vertex: wk(ek[Kk]),
            surface: wk(ek[Kk + 1]),
            light: wk(ek[Kk + 2])
          },
          moduleCode: ik[fk],
          sceneDepth: 0 !== (kk & bk),
          sunShadow: 0 !== (kk & Pk),
          airShadow: 0 !== (kk & mk),
          movesVertices: 0 !== (kk & rk),
          discards: 0 !== (kk & Mk),
          reads: {
            vertex: yk(Dk[2 * fk]),
            fragment: yk(Dk[2 * fk + 1])
          }
        }
      }))
    }
  },
  40283: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => nk,
      C: () => Uk,
      e: () => fk,
      g: () => Dk,
      h: () => xk,
      i: () => Mk,
      j: () => wk,
      n: () => Sk,
      o: () => rk,
      s: () => Pk,
      w: () => bk,
      y: () => Hk
    });
    const Dk = 3,
      fk = 0,
      Sk = 1,
      bk = 2,
      rk = {
        uniform: 3,
        gx: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Pk = 10,
      mk = "BloxdPackInputs",
      Mk = "bloxdPackInputs",
      Kk = [{
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
      xk = 80;

    function nk() {
      const kk = Kk.map((kk => {
        let {
          name: ek,
          type: ik
        } = kk;
        return `    ${ek}: ${ik},\n`
      })).join("");
      return `struct ${mk} {\n${kk}}\n@group(${Dk}) @binding(${fk}) var<uniform> ${Mk}: ${mk};\n`
    }

    function Uk(kk, ek) {
      const ik = new DataView(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, xk),
        [Dk, fk, Sk, bk, rk, Pk] = Kk;
      ik.setFloat32(Dk.offset, ek.seconds, !0), ik.setUint32(fk.offset, ek.lit ? 1 : 0, !0);
      for (let mk = 0; mk < 3; mk++) ik.setInt32(Sk.offset + 4 * mk, ek.renderOffset[mk], !0), ik.setFloat32(bk.offset + 4 * mk, ek.Z5[mk], !0), ik.setFloat32(rk.offset + 4 * mk, ek.eyePosition[mk], !0), ik.setFloat32(Pk.offset + 4 * mk, ek.shadowDirection[mk], !0)
    }

    function Hk(kk) {
      const ek = new Uint32Array(Math.max(1, kk.length));
      return kk.forEach(((kk, ik) => {
        let {
          id: Dk,
          rotation: fk
        } = kk;
        ek[ik] = 65535 & Dk | (3 & fk) << 16
      })), ek
    }
    const wk = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6484: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      f: () => bk,
      j: () => rk,
      k: () => fk,
      m: () => Sk
    });
    const Dk = ["terrain", "liquid", "model"];

    function fk() {
      const kk = [];
      for (const ek of [!1, !0])
        for (const ik of Dk) kk.push({
          strict: ek,
          program: ik
        });
      return kk
    }

    function Sk(kk) {
      return `${kk.strict?"strict":"allow"}.${kk.program}`
    }

    function bk(kk) {
      return !kk.hooks.vertex && !kk.hooks.surface && !kk.hooks.light
    }

    function rk(kk, ek) {
      return "off" !== ek && (null === kk || kk.some((kk => kk.key.strict === ("strict" === ek) && !bk(kk))))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);