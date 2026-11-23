export const id = 139;
export const ids = [139];
export const modules = {
  40641: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      e: () => Lk,
      f: () => yk,
      g: () => Tk,
      i: () => lk,
      l: () => qk
    });
    class Xk extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Tk(kk) {
      return kk instanceof RangeError && /call stack/i.test(kk.message) || kk instanceof Error && "InternalError" === kk.name && /recursion/i.test(kk.message)
    }
    const ik = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function yk(kk) {
      var Fk;
      return kk instanceof WebAssembly.RuntimeError || kk instanceof Xk || Tk(kk) && ik.test(null !== (Fk = kk.stack) && void 0 !== Fk ? Fk : "")
    }

    function lk(kk, Fk) {
      if (yk(kk)) throw kk;
      console.error(Fk, kk)
    }

    function ak(kk, Fk, Ik, Tk, ik) {
      if (Fk % Tk !== 0 || Fk + Ik > kk.byteLength) throw new Xk(`${ik}: ${Ik} bytes at ${Fk}, ${Tk}-aligned, outside ${kk.byteLength} bytes of memory`)
    }

    function qk(kk, Fk, Ik, Xk, Tk) {
      return 0 === Ik ? null : (ak(Fk, Ik, Xk * kk.BYTES_PER_ELEMENT, kk.BYTES_PER_ELEMENT, Tk), new kk(Fk, Ik, Xk))
    }

    function Lk(kk, Fk, Ik, Xk, Tk) {
      return 0 === Fk ? null : (ak(kk, Fk, Ik, Xk, Tk), new DataView(kk, Fk, Ik))
    }
  },
  40726: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      A: () => Ak,
      B: () => TF,
      D: () => Yk,
      F: () => fk,
      I: () => gk,
      M: () => rk,
      N: () => yF,
      P: () => kF,
      S: () => Ok,
      d: () => iF,
      e: () => LF,
      f: () => Mk,
      g: () => XF,
      h: () => hk,
      j: () => IF,
      l: () => FF,
      n: () => qF,
      o: () => ck,
      s: () => dk,
      v: () => Bk,
      y: () => Wk
    });
    var Xk = Ik(318),
      Tk = Ik(253),
      ik = Ik(260),
      yk = Ik(25),
      lk = Ik(2744),
      ak = Ik(684),
      qk = Ik(4504),
      Lk = Ik(2719),
      tk = Ik(3396),
      Zk = Ik(95),
      jk = Ik(314),
      ek = Ik(41),
      wk = Ik(309),
      Hk = Ik(113),
      Jk = Ik(641),
      xk = Ik(123),
      Pk = Ik(119),
      Kk = Ik(4799),
      Qk = Ik(40729),
      sk = Ik(1729),
      Vk = Ik(40738),
      zk = Ik(40745);
    const Sk = "bloxd-webgpuOffAfterLoss",
      vk = "context:webgl",
      Ek = "probe:threw";

    function Ok(kk) {
      let Fk;
      try {
        Fk = kk.getContext("webgl", {
          powerPreference: xk.c
        })
      } catch {
        Fk = null
      }
      if (null === Fk) return null;
      let Ik = null;
      try {
        const kk = Fk.getParameter(Fk.MAX_TEXTURE_SIZE);
        Ik = "number" === typeof kk && kk > 0 ? kk : null
      } catch {
        Ik = null
      }
      try {
        var Xk;
        null === (Xk = Fk.getExtension("WEBGL_lose_context")) || void 0 === Xk || Xk.loseContext()
      } catch {}
      return Ik
    }
    const nk = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      Gk = "mali_valhall",
      pk = new Set(["nvidia_pre_turing"]);

    function uk(kk) {
      return function(kk) {
        try {
          return kk()
        } catch {
          return null
        }
      }((() => {
        var Fk, Ik, Xk, yk;
        const lk = null !== (Fk = null === (Ik = kk.info) || void 0 === Ik ? void 0 : Ik.vendor) && void 0 !== Fk ? Fk : "";
        return "windows" === (0, Zk.getOperatingSystem)() && "" !== lk && "intel" !== (0, Zk.normaliseGpuVendor)(lk) ? null : ((0, Zk.seedGpuVendor)(lk), ak = (0, Tk.h)(), qk = (0, ik.h)(lk, null !== (Xk = null === (yk = kk.info) || void 0 === yk ? void 0 : yk.architecture) && void 0 !== Xk ? Xk : ""), nk.has(ak) ? "android_arm" === ak && qk === Gk ? "webgpu_default" : "webgl_default" : null);
        var ak, qk
      }))
    }

    function bk() {
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
          let Fk, Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qk.e;
          try {
            Fk = kk.getContext("webgl")
          } catch {
            Fk = null
          }
          if (null === Fk) return [vk];
          const Xk = [];
          try {
            for (const Tk of Ik.extensions) null === Fk.getExtension(Tk) && Xk.push(Tk);
            for (const [Tk, ik] of Object.entries(Ik.limits)) {
              const kk = Fk[Tk],
                Ik = "number" === typeof kk ? Fk.getParameter(kk) : null;
              ("number" !== typeof Ik || Ik < ik) && Xk.push(`limit:${Tk}`)
            }
            const kk = Fk.getShaderPrecisionFormat(Fk.VERTEX_SHADER, Fk.HIGH_FLOAT);
            (null === kk || kk.precision < Ik.vertexHighFloatBits) && Xk.push("precision:vertex_high_float")
          } catch {
            Xk.push(Ek)
          }
          try {
            var Tk;
            null === (Tk = Fk.getExtension("WEBGL_lose_context")) || void 0 === Tk || Tk.loseContext()
          } catch {}
          return Xk
        }(document.createElement("canvas")),
        offAfterLoss: kk => Rk((() => kk ? (0, wk.H)() : yk.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: kk => Rk((() => (0, Hk.h)(kk))),
        intelGen9: kk => Rk((() => (0, Hk.l)(kk))),
        storeIntelGen9Verdict: kk => {
          ek.j.setItem(Hk.I, kk)
        },
        gpuClassWebGlArm: uk,
        storeGpuClassVerdict: kk => {
          ek.j.setItem(Hk.E, kk)
        },
        gpuClassOnWebGl: kk => (0, Jk.b)(kk),
        wasmArmOnWebGl: zk.g,
        storeWasmArmVerdict: kk => {
          ek.j.setItem(Hk.T, kk)
        },
        override: () => function() {
          if ((0, lk.o)("render") && "webgl1" === (0, lk.k)("renderer")) return "webgl1";
          const kk = [() => new URLSearchParams(window.location.search).get(Lk.c), () => ek.j.getItem(Lk.e), () => {
            const kk = localStorage.getItem(Sk);
            return null !== kk && localStorage.removeItem(Sk), "1" === kk ? "webgl2" : null
          }];
          for (const Fk of kk) {
            let kk = null;
            try {
              kk = Uk(Fk())
            } catch {}
            if (null !== kk) return kk
          }
          return null
        }(),
        claimed: () => Uk((0, ak.q)()),
        webGpuSetting: () => {
          const kk = ek.j.getItem(Xk.tc);
          return "boolean" === typeof kk ? kk : null
        },
        heldBack: () => Jk.c,
        storeHoldbackSpared: kk => {
          ek.j.setItem(Hk.B, kk)
        },
        intelGen9OnWebGl: () => Jk.f,
        ke: () => Rk((() => (0, tk.h)(Zk.featureFlags.settings.canUseShaderPacks))),
        windows: () => Rk((() => "windows" === (0, Zk.getOperatingSystem)()))
      }
    }

    function Rk(kk) {
      try {
        return kk()
      } catch {
        return !1
      }
    }

    function Uk(kk) {
      return "lite" === kk ? "webgpu" : "webgl2" === kk || "babylon" === kk ? "webgl" : null
    }
    async function Ck() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk();
      const Fk = await async function(kk) {
        const Fk = function(kk) {
            const Fk = kk.override(),
              Ik = kk.webGpuSetting(),
              Xk = null === Fk && !0 !== Ik && kk.ke(),
              Tk = null !== Fk || null !== Ik || Xk ? null : kk.claimed(),
              ik = null !== Fk ? "override" : !0 === Ik ? "setting" : Xk ? "pack" : !1 === Ik ? "setting" : null !== Tk ? "claim" : "default",
              yk = function(kk) {
                return "override" === kk || "setting" === kk
              }(ik);
            if ("webgl" === Fk || "webgl1" === Fk || "webgl" === Tk || "setting" === ik && !1 === Ik) return {
              source: ik,
              asked: yk,
              refused: "not_requested"
            };
            if (!kk.gpu) return {
              source: ik,
              asked: yk,
              refused: "no_webgpu_api"
            };
            const lk = "default" === ik && kk.heldBack();
            if (lk && !kk.windows()) return {
              source: ik,
              asked: yk,
              refused: "webgl_holdback"
            };
            if (!yk && kk.offAfterLoss("pack" === ik)) return {
              source: ik,
              asked: yk,
              refused: lk ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: ik,
              asked: yk,
              heldBack: lk,
              gpu: kk.gpu
            }
          }(kk),
          {
            source: Ik
          } = Fk,
          Xk = !Fk.asked,
          Tk = "gpu" in Fk && Fk.heldBack,
          yk = function(kk) {
            return Tk && "none" !== kk ? {
              reason: "webgl_holdback",
              adapter: null,
              source: Ik
            } : {
              reason: kk,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: Ik
            }
          };
        if (!("gpu" in Fk)) return yk(Fk.refused);
        let lk;
        try {
          lk = await (0, sk.l)((0, Pk.p)(Fk.gpu, {
            compatibility: Fk.asked
          }), lF, `requestAdapter didn't settle in ${lF/1e3} s`)
        } catch {
          return yk("adapter_error")
        }
        if ("string" === typeof lk) return yk(lk);
        const ak = (0, Pk.c)(lk);
        if ((0, Pk.j)(lk)) return yk("software_adapter", ak);
        const qk = kk.windows() && function(kk) {
          return pk.has((0, ik.h)(kk.vendor, kk.architecture))
        }(ak);
        if (kk.storeHoldbackSpared(qk), Tk && !qk) return yk("webgl_holdback");
        const Lk = kk.intelGen9(lk);
        kk.storeIntelGen9Verdict(Lk);
        const tk = Lk ? null : kk.gpuClassWebGlArm(lk);
        kk.storeGpuClassVerdict(null !== tk && void 0 !== tk && tk);
        const Zk = kk.wasmArmOnWebGl(ak);
        if (kk.storeWasmArmVerdict(Zk), Xk && kk.oldIntelDriver(lk)) return yk("old_intel_driver", ak);
        if ("default" === Ik && Lk && kk.intelGen9OnWebGl()) return yk("intel_gen9", ak);
        if ("default" === Ik && null !== tk && kk.gpuClassOnWebGl(tk)) return yk("gpu_class_webgl", ak);
        if ("default" === Ik && Zk) return yk("gpu_wasm_arm", ak);
        return yk("none", ak)
      }(kk);
      if ("none" === Fk.reason) return {
        backend: "webgpu",
        ...Fk
      };
      if ("webgl1" !== kk.override() && kk.webgl2()) return {
        backend: "webgl",
        ...Fk
      };
      const Ik = kk.webgl1();
      return 0 === Ik.length ? {
        backend: "webgl1",
        ...Fk
      } : {
        missing: Ik
      }
    }
    let Nk = !1;
    async function ck(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk();
      if (null === kk) return null;
      const Ik = await Ck(Fk);
      return Nk = !("missing" in Ik) && "webgpu" === Ik.backend && "claim" === Ik.source, "missing" in Ik ? Ik : {
        ...Ik,
        load: kk[Ik.backend]
      }
    }
    async function Wk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bk().gpu,
        Xk = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== kk.backend) return !1;
      const Tk = mk(kk, Fk, "indirectDraws", "off", "on");
      if (null !== Tk) return Tk;
      if (null !== kk.adapter && (0, Hk.n)(kk.adapter, Xk)) return !0;
      if (null === Ik) return !1;
      try {
        var ik;
        const kk = await (0, sk.l)(Ik.requestAdapter({
          powerPreference: "low-power"
        }).then((async kk => (null !== kk && await (0, Pk.f)(kk), kk))), lF, `the low-power requestAdapter didn't settle in ${lF/1e3} s`);
        return (0, Hk.n)(null !== (ik = null === kk || void 0 === kk ? void 0 : kk.info) && void 0 !== ik ? ik : {}, Xk)
      } catch (yk) {
        return yk instanceof sk.f
      }
    }

    function fk(kk, Fk, Ik) {
      if ("webgpu" !== kk.backend) return !1;
      const Xk = mk(kk, Fk, "terrainFetch", "texture", "storage");
      return null !== Xk ? Xk : null !== kk.adapter && (0, Hk.i)(kk.adapter, Ik)
    }

    function Bk(kk, Fk) {
      if ("webgpu" !== kk.backend) return !1;
      const Ik = mk(kk, Fk, "skyOrder", "early", "last");
      return null !== Ik ? Ik : null !== kk.adapter && (0, ik.h)(kk.adapter.vendor, kk.adapter.architecture) === Gk
    }

    function dk(kk, Fk) {
      if ("webgpu" !== kk.backend) return !1;
      const Ik = mk(kk, Fk, "uploadCopies", "off", "on");
      return null !== Ik ? Ik : null !== kk.adapter && "powervr_rogue" === (0, ik.h)(kk.adapter.vendor, kk.adapter.architecture)
    }

    function Yk(kk, Fk, Ik) {
      if ("webgpu" !== kk.backend) return !1;
      const Xk = mk(kk, Fk, "sceneDepth", "off", "on");
      return null !== Xk ? Xk : null !== kk.adapter && (0, Hk.k)(kk.adapter, Ik)
    }

    function Ak(kk, Fk) {
      return "webgl" === kk.backend ? mk(kk, Fk, "instancedTerrain", "1", "0") : null
    }

    function gk(kk, Fk) {
      return "webgpu" !== kk.backend || Fk && (null === kk.adapter || !(0, wk.K)(kk.adapter))
    }

    function mk(kk, Fk, Ik, Xk, Tk) {
      const ik = new URLSearchParams(Fk).get(Ik),
        yk = null !== ik && void 0 !== ik ? ik : (0, ak.i)(Ik);
      return yk !== Xk && yk !== Tk ? null : (Nk ||= null === ik && "webgpu" === kk.backend, yk === Xk)
    }

    function hk(kk) {
      return null !== kk && "missing" in kk
    }

    function rk(kk) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !kF()) ? function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk.d;
        try {
          const Ik = "start_failed" === kk || "pipeline_failed" === kk,
            Xk = Fk.turnOffWebGpuAfterDeviceLoss(Ik ? "visible" : (0, wk.m)((0, jk.f)()), Ik);
          return Nk && (0, ak.v)("webgpuLoss"), Fk.isWebGpuOffAfterLoss() && "webgpu" === Uk(ek.j.getItem(Lk.e)) && ek.j.removeItem(Lk.e), (0, lk.o)("webgpuloss") && (0, qk.c)((Fk => {
            Fk.noteWebGpuLoss("wasm", Xk ? kk : `${kk}, which storage didn't keep`, null)
          })), Xk
        } catch {
          return !1
        }
      }(kk) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Dk = "framePacing";

    function Mk(kk) {
      const Fk = new URLSearchParams(kk).get(Dk);
      return null !== Fk && /^\d{1,9}$/.test(Fk) ? Number(Fk) : void 0
    }

    function kF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === Uk(new URLSearchParams(kk).get(Lk.c))
      } catch {
        return !1
      }
    }

    function FF(kk) {
      return !!IF(kk) || kk instanceof Error && !(kk instanceof WebAssembly.RuntimeError) && kk.message.startsWith(`${Kk.m.RenderSurfaceUnusable}:`)
    }

    function IF(kk) {
      const {
        name: Fk,
        message: Ik
      } = null !== kk && void 0 !== kk ? kk : {};
      return "InvalidStateError" === Fk && "string" === typeof Ik && Ik.startsWith("GPUDevice.")
    }

    function XF(kk) {
      const Fk = kk;
      return "function" === typeof Fk.gIk && "function" === typeof Fk.mIk ? Fk : null
    }

    function TF(kk) {
      return "function" === typeof kk.UH ? kk : null
    }
    const iF = "openRenderer";

    function yF(kk) {
      const Fk = null === kk || void 0 === kk ? void 0 : kk.jik();
      return void 0 === Fk ? void 0 : new Error(Fk)
    }
    const lF = 5e3,
      aF = 15e3;

    function qF(kk, Fk, Ik, Xk, Tk, ik) {
      return (0, sk.l)(function(kk, Fk, Ik, Xk, Tk, ik) {
        return (0, Vk.d)(kk, Fk, (() => kk.UH(Ik, Xk, Tk, ik.indirectHangs, ik.storagePullBreaks, ik.splitPassBreaks, ik.earlySky, ik.instancedTerrain, ik.cellLight, ik.framesAhead, ik.webGpuRestores, ik.bufferCopiesCrash)))
      }(kk, Fk, Ik, Xk, Tk, ik), aF, `${Kk.m.RenderSurfaceUnusable}: the renderer didn't open in ${aF/1e3} s`, tF)
    }
    async function LF(kk, Fk, Ik, Xk, Tk, ik) {
      if ("function" !== typeof kk.Iyk) throw new Error("this core has no set_renderer");
      const yk = await qF(Fk, iF, Ik, Tk, Xk, ik);
      try {
        kk.Iyk(yk)
      } catch (lk) {
        throw tF(yk), lk
      }
    }

    function tF(kk) {
      try {
        kk.free()
      } catch {}
    }
  },
  40827: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    const Xk = {
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
  40764: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ek,
      h: () => wk,
      j: () => Zk,
      m: () => tk
    });
    const Xk = 2e3,
      Tk = "unavailable";
    let ik = () => Promise.resolve().then((() => Ik(2856))),
      yk = null,
      lk = null,
      ak = qk();

    function qk() {
      let kk = () => {};
      return {
        promise: new Promise((Fk => {
          kk = () => {
            Fk(null)
          }
        })),
        resolve: kk
      }
    }

    function Lk() {
      if (null === yk) {
        const kk = ik();
        yk = kk, kk.then((Fk => {
          yk === kk && (lk = Fk)
        }), (() => {
          yk === kk && (yk = null)
        }))
      }
      return yk
    }

    function tk() {
      Lk().catch((() => {}))
    }

    function Zk() {
      ak.resolve()
    }

    function jk(kk, Fk, Ik, Xk) {
      if (null === kk) return {
        errorKind: Fk,
        fingerprint: Tk,
        dedupe: `${Fk}|${Xk}`
      };
      const {
        fingerprint: ik
      } = kk.clientErrorKey(Fk, Ik, Xk);
      return {
        errorKind: Fk,
        fingerprint: ik,
        dedupe: ik
      }
    }

    function ek(kk, Fk, Ik, Xk) {
      return null === lk ? Xk ? (tk(), jk(null, kk, Fk, Ik)) : null : jk(lk, kk, Fk, Ik)
    }
    async function wk(kk, Fk, Ik) {
      let Tk;
      const ik = new Promise((kk => {
        Tk = setTimeout((() => {
          kk(null)
        }), Xk)
      }));
      try {
        return jk(await Promise.race([Lk(), ik, ak.promise]), kk, Fk, Ik)
      } catch {
        return jk(null, kk, Fk, Ik)
      } finally {
        clearTimeout(Tk)
      }
    }
  },
  40757: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      BUILT_IN_ANIMATIONS_SITE: () => gk,
      CORE_ERRORS_SITE: () => Uk,
      EVENT_OVERFLOW_SITE: () => Ak,
      FIRST_VIEW_SITE: () => rk,
      JOIN_SITE: () => Nk,
      LEAVE_SITE: () => ck,
      MAIN_THREAD_SITE: () => Dk,
      MODEL_FEED_SITE: () => Wk,
      MODEL_POOL_SITE: () => fk,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => IF,
      NON_FATAL_REPORTS_PER_SESSION: () => KF,
      PREVIEW_ANIMATIONS_SITE: () => Yk,
      RENDER_RELOAD_SITE: () => dk,
      REQUEST_DEVICE_SITE: () => Mk,
      TEXTURE_NAMES_SITE: () => Bk,
      TEXTURE_PACK_FEED_SITE: () => mk,
      TEXTURE_PACK_SWAP_SITE: () => hk,
      TurnstilePageError: () => II,
      WASM_LOAD_SITE: () => Ck,
      countRenderLost: () => GI,
      crashError: () => oF,
      crashReportsSettled: () => bF,
      flushCrashReports: () => pF,
      joinFailureCode: () => XI,
      lokiTransport: () => iF,
      modelFailureCode: () => LI,
      readTrap: () => WF,
      renderLoss: () => nI,
      renderReloadMessage: () => EI,
      reportCoreErrors: () => CF,
      reportCountedLoadFallback: () => kI,
      reportCrash: () => vF,
      reportDataLoadFailure: () => UI,
      reportDisconnect: () => aI,
      reportDracoDecoderFailure: () => eI,
      reportDroppedRequiredLimits: () => DF,
      reportEventOverflow: () => xI,
      reportFirstViewNoTerrain: () => VI,
      reportGpuFallback: () => rF,
      reportGpuWasmPopulation: () => MF,
      reportLightFault: () => KI,
      reportMainStall: () => zI,
      reportMemoryShed: () => sI,
      reportModelFailure: () => tI,
      reportModelPoolFailure: () => ZI,
      reportModelsModuleRetry: () => jI,
      reportPageJoinFailure: () => iI,
      reportReconnectGaveUp: () => qI,
      reportRenderReload: () => uI,
      reportReplayFault: () => oI,
      reportStaleBuildReload: () => NI,
      reportStoppedCore: () => YF,
      reportTerrainTextureFailure: () => bI,
      reportTexturePackFeedLoadFailure: () => HI,
      reportTexturePackKeptOut: () => JI,
      reportUnstreamedCoreLoad: () => FI,
      reportUnsupportedFallback: () => mF,
      reportUnusedSeat: () => lI,
      reportWorkerLost: () => PI,
      reportWorkerStartTimeout: () => SI,
      reportWorldgenGaveUp: () => QI,
      reportWorldgenLoadFailure: () => wI,
      resetCrashReports: () => RF,
      setCrashAdPreload: () => eF,
      setCrashBackend: () => jF,
      setCrashScreen: () => LF,
      setCrashTransport: () => aF,
      showCrash: () => dF,
      showJoinFailure: () => TI,
      showUnsupported: () => gF,
      unknownSkyWords: () => UF
    });
    var Xk = Ik(1076),
      Tk = Ik(260),
      ik = Ik(2864),
      yk = Ik(4284),
      lk = Ik(40764),
      ak = Ik(4797),
      qk = Ik(40771),
      Lk = Ik(2889),
      tk = Ik(38762),
      Zk = Ik(129),
      jk = Ik(710),
      ek = Ik(123),
      wk = Ik(2898),
      Hk = Ik(36486),
      Jk = Ik(1729),
      xk = Ik(40776),
      Pk = Ik(40596),
      Kk = Ik(40689),
      Qk = Ik(40697),
      sk = Ik(36479),
      Vk = Ik(2801),
      zk = Ik(2803),
      Sk = Ik(40796),
      vk = Ik(40817),
      Ek = Ik(40819),
      Ok = Ik(36879),
      nk = Ik(3161),
      Gk = Ik(36236),
      pk = Ik(40738),
      uk = Ik(36249),
      bk = Ik(40834);
    const Rk = "[bloxd-wasm-client]",
      Uk = "coreErrors",
      Ck = "wasmLoad",
      Nk = "join",
      ck = "leave",
      Wk = "modelFeed",
      fk = "modelWorkerPool",
      Bk = "textureNames",
      dk = "renderReload",
      Yk = "previewAnimations",
      Ak = "eventOverflow",
      gk = "builtInAnimations",
      mk = "texturePackFeed",
      hk = "texturePackSwap",
      rk = "firstView",
      Dk = "mainThread",
      Mk = "requestDevice",
      kF = 300,
      FF = 64,
      IF = 8;
    let XF = 0;
    const TF = new Set,
      iF = (kk, Fk) => {
        const Ik = wF[kk.kind],
          Xk = {
            backend: tF,
            adPreload: ZF
          };
        if (null === Ik) return void yF(kk, Fk, Xk, null);
        const Tk = (0, lk.d)(Ik, kk.message, kk.code, kk.fatal);
        null === Tk ? GF("Loki", (async () => {
          yF(kk, Fk, Xk, await (0, lk.h)(Ik, kk.message, kk.code))
        })) : yF(kk, Fk, Xk, Tk)
      };

    function yF(kk, Fk, Ik, Tk) {
      let {
        backend: yk,
        adPreload: lk
      } = Ik;
      const {
        kind: ak,
        code: qk,
        site: Lk,
        fatal: tk,
        details: Zk
      } = kk;
      if (!tk)
        if (null === Tk || (0, ik.d)(Tk.errorKind) || TF.has(Tk.dedupe)) {
          if (XF >= IF) return;
          XF++
        } else TF.add(Tk.dedupe);
      const jk = {
        ...Zk,
        kind: ak,
        code: qk,
        site: Lk,
        fatal: String(tk),
        backend: yk
      };
      lk && (jk.adPreload = "true"), null !== Tk && (jk.errorKind = Tk.errorKind, jk.fingerprint = Tk.fingerprint), Fk instanceof Error && "string" === typeof Fk.stack && (jk.causeStack = Fk.stack.slice(0, 2e3)), (0, Xk.ow)(oF(kk, Fk), jk)
    }
    let lF = iF;

    function aF(kk) {
      const Fk = lF;
      return lF = kk, Fk
    }
    let qF = () => {};

    function LF(kk) {
      const Fk = qF;
      return qF = kk, Fk
    }
    let tF = "unpicked",
      ZF = !1;

    function jF(kk) {
      tF = kk
    }

    function eF(kk) {
      ZF = kk
    }
    const wF = {
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
      HF = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        gpuFallback: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      JF = new Set(["unstreamedLoad"]),
      xF = new Set(["linkCensus", "linksReadAfterView"]);
    let PF = !1;
    const KF = 20,
      QF = new Map;
    let sF = 0,
      VF = 0;
    const zF = new Set,
      SF = new Set;

    function oF(kk, Fk) {
      const Ik = Object.assign(new Error(`${kk.code}: ${kk.message}`), {
        name: "WasmClientCrash",
        cause: null !== Fk && void 0 !== Fk ? Fk : void 0
      });
      return Fk instanceof Error && Fk.stack && (Ik.stack = Fk.stack), Ik
    }

    function vF(kk) {
      var Fk, Xk;
      const {
        kind: Tk,
        code: ik,
        site: yk,
        fatal: lk,
        message: ak,
        error: qk
      } = kk, Lk = !1 !== kk.toTransport && !JF.has(Tk), tk = !lk && Lk && !xF.has(Tk), Zk = {
        kind: Tk,
        code: ik,
        site: yk,
        fatal: lk,
        message: ak,
        details: null !== (Fk = kk.details) && void 0 !== Fk ? Fk : {}
      }, jk = `${ik}@${yk}${void 0===kk.instance?"":`#${kk.instance}`}${lk?"!":""}`, ek = (null !== (Xk = QF.get(jk)) && void 0 !== Xk ? Xk : 0) + 1;
      if (QF.set(jk, ek), void 0 !== kk.countAs && 1 === ek && OF(kk.countAs), ek > 1 ? 0 === (ek & ek - 1) && nF((() => {
          console.warn(`${Rk} ${ik} at ${yk} reported ${ek} times`)
        })) : tk && sF >= KF ? nF((() => {
          console.warn(`${Rk} ${Tk} ${ik} at ${yk}: ${ak} (not sent: the session's ${KF} went)`, Zk.details, null !== qk && void 0 !== qk ? qk : "")
        })) : (tk && sF++, function(kk, Fk, Xk, Tk) {
          var ik, yk;
          const {
            kind: lk,
            code: ak,
            site: qk,
            fatal: Lk,
            message: tk,
            details: Zk
          } = kk;
          nF((() => {
            (Lk ? console.error : console.warn)(`${Rk} ${lk} ${ak} at ${qk}: ${tk}`, Zk, null !== Fk && void 0 !== Fk ? Fk : "")
          }));
          const jk = HF[lk],
            ek = null !== (ik = null !== (yk = wF[lk]) && void 0 !== yk ? yk : jk) && void 0 !== ik ? ik : null;
          Tk || null === ek || EF((async () => {
            const {
              reportCappedWasmFailure: kk,
              reportUncappedWasmFailure: Fk,
              reportWasmFailure: Xk
            } = await Ik.e(209).then((() => Ik(36230)));
            (xF.has(lk) ? Fk : void 0 === jk ? Xk : kk)(ek, tk, ak)
          }));
          Xk && nF((() => {
            lF(kk, Fk)
          }))
        }(Zk, qk, Lk, void 0 !== kk.countAs)), lk) {
        var wk;
        const Fk = null !== (wk = kk.screen) && void 0 !== wk ? wk : {
          text: (0, Ok.f)(Zk, !0),
          reload: !0
        };
        nF((() => {
          qF(Fk)
        }))
      }
      return Zk
    }

    function EF(kk) {
      GF("counts", (async () => {
        const {
          peekVisitSessionId: Fk
        } = await Promise.resolve().then((() => Ik(667)));
        null !== Fk() && (await kk(), PF = !0)
      }))
    }

    function OF(kk) {
      zF.has(kk.errorKind) || (zF.add(kk.errorKind), EF((async () => {
        const {
          reportClientError: Fk
        } = await Promise.resolve().then((() => Ik(2852)));
        Fk(kk.errorKind, kk.error, kk.code, !0, void 0, kk.fields)
      })))
    }

    function nF(kk) {
      try {
        kk()
      } catch (Fk) {
        try {
          console.warn(`${Rk} could not send a report`, Fk)
        } catch {}
      }
    }

    function GF(kk, Fk) {
      try {
        const Ik = Fk().catch((Fk => {
          console.warn(`${Rk} could not send the report to ${kk}`, Fk)
        })).finally((() => {
          SF.delete(Ik)
        }));
        SF.add(Ik)
      } catch (Ik) {
        console.warn(`${Rk} could not send the report to ${kk}`, Ik)
      }
    }
    async function pF(kk) {
      let Fk;
      (0, lk.j)();
      const Ik = new Promise((Ik => {
        Fk = setTimeout(Ik, kk)
      }));
      await Promise.race([uF(), Ik]), clearTimeout(Fk)
    }
    async function uF() {
      if (await Promise.allSettled([...SF]), PF) try {
        const {
          flushClientAnalyticsEvents: kk
        } = await Promise.resolve().then((() => Ik(1451)));
        await kk()
      } catch (kk) {
        console.warn(`${Rk} could not send the counts`, kk)
      }
    }
    async function bF() {
      for (; SF.size > 0;) await Promise.allSettled([...SF])
    }

    function RF() {
      QF.clear(), sF = 0, PF = !1, XF = 0, TF.clear(), VF = 0, zF.clear(), (0, qk.t)()
    }

    function UF(kk) {
      const Fk = "object" === typeof kk && null !== kk ? kk.type : kk;
      return "string" !== typeof Fk ? "sky not named" : `sky ${JSON.stringify(Array.from(Fk).slice(0,FF).join(""))}`
    }

    function CF(kk, Fk, Ik, Xk) {
      VF += Fk;
      for (const {
          code: lk,
          detail: Lk
        }
        of kk) {
        var Tk, ik, yk;
        const kk = (0, ak.ae)(lk),
          Fk = (0, qk.c)(lk, Lk),
          tk = null === Xk || void 0 === Xk ? void 0 : Xk(lk, Lk),
          Zk = void 0 !== (null === Fk || void 0 === Fk ? void 0 : Fk.gpuDetails),
          jk = Zk ? null === (Tk = (0, ek.p)()) || void 0 === Tk ? void 0 : Tk.renderer : void 0,
          wk = Zk ? ` ${(0,qk.m)()}` : "",
          Hk = Array.from([jk && `gpu ${(0,qk.u)(jk)}`, tk].filter(Boolean).join("; ")).slice(0, kF).join(""),
          Jk = `core error ${kk}${null!==(ik=null===Fk||void 0===Fk?void 0:Fk.words)&&void 0!==ik?ik:""}${wk}${Hk?`: ${Hk}`:""}`,
          xk = {
            errorCode: String(lk),
            detail: String(Lk),
            droppedBefore: String(VF),
            wasmBuild: Ik.wasm,
            clientVersion: Ik.client,
            ...null === Fk || void 0 === Fk ? void 0 : Fk.gpuDetails
          };
        null !== Fk && (0, qk.s)(Fk) ? nF((() => {
          console.warn(`${Rk} coreError CORE-${kk}: ${Jk} (not sent: the session's render warnings of its kind went)`, xk)
        })) : vF({
          kind: cF(lk, Lk),
          code: `CORE-${kk}`,
          site: Uk,
          fatal: !1,
          message: Jk,
          details: xk,
          instance: null !== (yk = null === Fk || void 0 === Fk ? void 0 : Fk.instance) && void 0 !== yk ? yk : NF(lk, Lk)
        })
      }
    }

    function NF(kk, Fk) {
      return kk === ak.N.RenderDeviceLost && 0 !== (Fk & ak.R.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function cF(kk, Fk) {
      return kk === ak.N.JobsHeapGaveUp ? "meshHeap" : (0, qk.i)(kk, Fk) ? "linksReadAfterView" : (0, qk.e)(kk, Fk) ? "linkCensus" : "coreError"
    }

    function WF(kk) {
      return (0, Gk.m)(kk instanceof pk.c ? kk.trap : kk, Vk.A, Vk.S)
    }
    const fF = "declined=js";

    function BF(kk) {
      return kk ? {
        labels: [fF],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function dF(kk, Fk, Ik) {
      return AF(kk, Fk, Ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function YF(kk, Fk, Ik) {
      return AF(kk, Fk, Ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function AF(kk, Fk, Ik, Xk, Tk) {
      let {
        memoryDetails: ik = {},
        declined: yk = !1
      } = Xk;
      const {
        code: lk,
        details: ak,
        message: qk
      } = (0, xk.E)(kk, Fk), Lk = [];
      Object.assign(ak, (0, uk.d)(kk.error)), null !== Ik && (ak.trapKind = Ik.kind, null !== Ik.panic && (ak.panic = (0, Gk.k)(Ik.panic)), Ik.refusedBytes > 0 && (ak.refusedAllocation = String(Ik.refusedBytes)), Lk.push((0, Gk.q)(Ik.kind, Ik.refusedBytes)));
      const tk = BF(yk);
      return vF({
        kind: "crash",
        code: lk,
        site: kk.site,
        fatal: Tk,
        message: [...Lk, ...tk.labels, qk].join("; "),
        details: {
          ...ak,
          ...tk.details,
          ...ik
        },
        error: kk.error
      })
    }

    function gF(kk, Fk, Ik) {
      return vF({
        kind: "unsupported",
        code: Fk,
        site: Ck,
        fatal: !0,
        message: Ik,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: kk,
          status: Fk
        },
        screen: {
          text: (0, Ok.p)(kk),
          reload: "download" === kk
        }
      })
    }

    function mF(kk, Fk, Ik) {
      return vF({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === Fk ? "blocked_after_loss" : "unsupported_js_fallback",
        site: Ck,
        fatal: !1,
        message: Ik,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: kk,
          status: "unsupported",
          decline: Fk,
          fallback: "js"
        }
      })
    }
    const hF = "misdrawn_gpu_js_fallback";

    function rF(kk, Fk) {
      return vF({
        kind: "gpuFallback",
        code: hF,
        site: Ck,
        fatal: !1,
        message: `the renderer plays ${kk} on ${Fk} worse than the JS client`,
        details: {
          gpuFamily: kk,
          backend: Fk,
          fallback: "js"
        }
      })
    }

    function DF(kk) {
      return vF({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: Mk,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: kk.join(",")
        }
      })
    }

    function MF(kk) {
      GF("counts", (async () => {
        await (0, jk.c)(kk), PF = !0
      }))
    }

    function kI(kk, Fk, Ik, Xk) {
      const Tk = BF(Xk);
      return vF({
        kind: "unsupported",
        code: Fk,
        site: Ck,
        fatal: !1,
        message: [...Tk.labels, Ik].join("; "),
        details: {
          cause: kk,
          status: Fk,
          fallback: "js",
          ...Tk.details
        }
      })
    }

    function FI() {
      const {
        code: kk,
        message: Fk
      } = nk.d;
      return vF({
        kind: "unstreamedLoad",
        code: kk,
        site: Ck,
        fatal: !1,
        message: Fk
      })
    }
    class II extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function XI(kk) {
      return kk instanceof Kk.j ? 0 === kk.code ? "JOIN-matchmake" : `JOIN-${kk.code}` : kk instanceof Kk.b ? 0 === kk.code ? `JOIN-${kk.stage}` : `JOIN-${kk.stage}-${kk.code}` : kk instanceof Pk.e ? "JOIN-gameCode" : kk instanceof II ? "JOIN-turnstilePage" : kk instanceof Kk.t ? "JOIN-trafficCheck" : kk instanceof Hk.f ? "JOIN-timeout" : "JOIN-network"
    }

    function TI(kk, Fk) {
      const Ik = (0, uk.j)(kk),
        Xk = {
          wasmBuild: Fk.wasm,
          clientVersion: Fk.client
        },
        Tk = kk instanceof II ? {
          text: (0, Ok.j)(),
          reload: !1
        } : void 0,
        ik = (0, Qk.e)(kk),
        yk = "expected" !== ik;
      return vF({
        kind: "join",
        code: XI(kk),
        site: Nk,
        fatal: !0,
        message: Ik,
        details: Xk,
        error: kk,
        screen: Tk,
        toTransport: yk,
        instance: ik
      })
    }

    function iI(kk, Fk, Ik) {
      var Xk;
      const Tk = (0, Qk.e)(kk),
        ik = {
          cause: (kk instanceof Kk.b || kk instanceof Kk.j) && null !== (Xk = kk.serverText) && void 0 !== Xk ? Xk : "",
          sinceJoinStart: (0, wk.d)(Ik.sinceJoinStartMs),
          game: Ik.game,
          ...(0, wk.j)(),
          wasmBuild: Fk.wasm,
          clientVersion: Fk.client
        };
      return vF({
        kind: "pageJoin",
        code: XI(kk),
        site: Nk,
        fatal: !1,
        message: (0, uk.j)(kk),
        details: ik,
        error: kk,
        toTransport: "unrecognised" === Tk,
        instance: Tk
      })
    }
    const yI = {
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

    function lI(kk, Fk) {
      let {
        unused: Ik,
        answered: Xk,
        heldMs: Tk
      } = kk;
      const {
        code: ik,
        message: yk
      } = yI[Ik], lk = {
        unused: Ik,
        answered: String(Xk),
        heldMs: String(Tk),
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return vF({
        kind: "seat",
        code: ik,
        site: Nk,
        fatal: !1,
        message: yk,
        details: lk
      })
    }

    function aI(kk, Fk, Ik) {
      var Xk;
      let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Xk = kk.name) && void 0 !== Xk ? Xk : String(kk.code);
      const ik = {
          closeCode: String(kk.code),
          recognised: String(null !== kk.name),
          closeReason: Ik.closeReason,
          sinceJoined: (0, wk.d)(Ik.sinceJoinedMs),
          game: Ik.game,
          ...(0, wk.j)(),
          wasmBuild: Fk.wasm,
          clientVersion: Fk.client
        },
        yk = null === kk.name && !(0, wk.f)(kk.code);
      return vF({
        kind: "disconnect",
        code: Tk,
        site: ck,
        fatal: !1,
        message: "Left room",
        details: ik,
        toTransport: yk
      })
    }

    function qI(kk, Fk) {
      const Ik = {
        ...(0, Lk.k)(kk),
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return vF({
        kind: "disconnect",
        code: `reconnect-${kk.reason}`,
        site: Nk,
        fatal: !1,
        message: "Reconnect failed",
        details: Ik
      })
    }

    function LI(kk) {
      return kk.error instanceof zk.f ? `MODEL-${kk.error.status}` : kk.error instanceof Sk.l ? "MODEL-ring" : "MODEL-network"
    }

    function tI(kk, Fk) {
      const Ik = LI(kk),
        Xk = `model file ${kk.file} ${kk.startup?"(startup) ":""}could not load`,
        Tk = {
          file: String(kk.file),
          url: kk.url,
          wasmBuild: Fk.wasm,
          clientVersion: Fk.client
        };
      return vF({
        kind: kk.startup ? "model" : "modelLate",
        code: Ik,
        site: Wk,
        fatal: kk.startup,
        message: Xk,
        details: Tk,
        error: kk.error
      })
    }

    function ZI(kk, Fk) {
      const Ik = {
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return vF({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: fk,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: Ik,
        error: kk
      })
    }

    function jI(kk, Fk, Ik) {
      const Xk = {
        delayMs: String(Fk),
        wasmBuild: Ik.wasm,
        clientVersion: Ik.client
      };
      kk instanceof zk.f && (Xk.status = String(kk.status));
      return vF({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: fk,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Xk,
        error: kk
      })
    }

    function eI(kk, Fk) {
      const Ik = {
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return vF({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: fk,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: Ik,
        error: kk
      })
    }

    function wI(kk, Fk) {
      const Ik = {
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return vF({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: xk.x,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: Ik,
        error: kk
      })
    }

    function HI(kk, Fk) {
      const Ik = {
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return vF({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: mk,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: Ik,
        error: kk
      })
    }

    function JI(kk, Fk, Ik, Xk) {
      const Tk = {
        wasmBuild: Xk.wasm,
        clientVersion: Xk.client
      };
      return vF({
        kind: "texturePackKeptOut",
        code: (0, yk.e)("wasm", kk, Fk),
        site: hk,
        fatal: !1,
        message: Fk.detail,
        details: Tk,
        error: Ik
      })
    }

    function xI(kk, Fk) {
      const {
        frames: Ik,
        acks: Xk,
        mask: Tk,
        outcome: ik
      } = kk, yk = {
        frames: String(Ik),
        acks: String(Xk),
        mask: String(Tk),
        outcome: null !== ik && void 0 !== ik ? ik : "resynced",
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return vF({
        kind: "recovered",
        code: "rejoined" === ik ? "CORE-eventOverflowRejoin" : "failed" === ik ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: Ak,
        fatal: !1,
        message: `the event buffer refused records in ${Ik} frames`,
        details: yk
      })
    }

    function PI(kk, Fk, Ik) {
      return vF({
        kind: "recovered",
        code: "CORE-workerLost",
        site: kk,
        fatal: !1,
        message: `a ${kk} worker was lost`,
        details: {
          reason: Fk,
          wasmBuild: Ik.wasm,
          clientVersion: Ik.client
        }
      })
    }

    function KI(kk, Fk, Ik) {
      const Xk = {
        wasmBuild: Ik.wasm,
        clientVersion: Ik.client
      };
      return vF({
        kind: "recovered",
        code: kk,
        site: xk.m,
        fatal: !1,
        message: Fk,
        details: Xk
      })
    }

    function QI(kk, Fk) {
      const Ik = {
        lastReason: kk,
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return vF({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: xk.x,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: Ik
      })
    }

    function sI(kk, Fk, Ik) {
      return vF({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: xk.l,
        fatal: !1,
        message: (0, sk.g)(kk) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: kk,
          ...Fk,
          wasmBuild: Ik.wasm,
          clientVersion: Ik.client
        }
      })
    }

    function VI(kk, Fk, Ik, Xk) {
      var Tk, ik;
      const yk = (0, qk.q)(),
        lk = {
          game: kk,
          cause: Fk,
          census: null === Ik ? "none" : JSON.stringify(Ik),
          gpu: null !== (Tk = null === (ik = (0, ek.p)()) || void 0 === ik ? void 0 : ik.renderer) && void 0 !== Tk ? Tk : "",
          renderWarned: String(yk),
          browser: (0, qk.m)(),
          wasmBuild: Xk.wasm,
          clientVersion: Xk.client
        },
        ak = `first view drew no whole terrain in ${vk.h/1e3} s, ${Fk}${yk?", render warned":""}`;
      return vF({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: rk,
        fatal: !1,
        message: ak,
        details: lk
      })
    }

    function zI(kk, Fk, Ik, Xk) {
      var ik, yk, lk;
      const ak = null !== (ik = (0, Tk.l)(null !== (yk = null === (lk = (0, ek.k)()) || void 0 === lk ? void 0 : lk.renderer) && void 0 !== yk ? yk : null, (0, ek.j)())) && void 0 !== ik ? ik : "unknown",
        Lk = null === Fk ? "untimed" : `${Math.round(Fk)} ms`,
        tk = `frames stalled, ${Ik}, gpu ${(0,qk.u)(ak)}, blocking ${Lk}, drawn ${Math.round(kk)} ms apart`,
        Zk = {
          gpuModel: ak,
          wasmBuild: Xk.wasm,
          clientVersion: Xk.client
        };
      return vF({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: Dk,
        fatal: !1,
        message: tk,
        details: Zk
      })
    }

    function SI(kk, Fk, Ik) {
      return vF({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: kk,
        fatal: !1,
        message: `a ${kk} worker did not start`,
        details: {
          waitedMs: String(Math.round(Fk)),
          wasmBuild: Ik.wasm,
          clientVersion: Ik.client
        }
      })
    }

    function oI(kk, Fk, Ik) {
      return vF({
        kind: "recovered",
        code: "CORE-replayFault",
        site: kk,
        fatal: !1,
        message: `the replay's ${kk} failed`,
        details: {
          wasmBuild: Ik.wasm,
          clientVersion: Ik.client
        },
        error: Fk
      })
    }
    const vI = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function EI(kk, Fk, Ik) {
      const Xk = "lost" === Fk && void 0 !== Ik ? ` (${Ik})` : "";
      return `the ${kk} ${vI[Fk]}${Xk}`
    }
    const OI = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function nI(kk, Fk, Ik, Xk) {
      var Tk;
      let {
        restoreLost: ik = !1,
        adapterRemembered: yk = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, lk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const ak = null === Ik || void 0 === Ik ? void 0 : Ik.message,
        qk = "pipeline_failed" === Fk ? Fk : Ik instanceof Jk.f ? "timeout" : (0, tk.l)("frames_refused" === Fk, "string" === typeof ak ? ak : ""),
        Lk = null === Xk.boundAtMs ? "unbound" : `up${(0,tk.g)(lk-Xk.boundAtMs)}`,
        Zk = null === Xk.adapter ? "no adapter" : (0, tk.k)(Xk.adapter),
        jk = `${!0===Xk.indirectHangs?" ih":""}${!0===Xk.restoresSkipped?" nr":""}${ik?" rl":""}${yk?" ar":""}`,
        ek = `${qk} ${(0,Jk.j)()?"hidden":"visible"} ${Lk}${jk} ${Zk}`;
      if ("webgpu" !== kk || "lost" !== Fk && "frames_refused" !== Fk) return {
        detail: ek,
        count: void 0
      };
      return {
        detail: ek,
        count: {
          errorKind: "render_lost",
          error: new Error(ek),
          code: (0, tk.o)(qk, null !== (Tk = Xk.boundAtMs) && void 0 !== Tk ? Tk : lk, lk).code,
          fields: {
            renderBackend: bk.e.webgpu
          }
        }
      }
    }

    function GI(kk, Fk, Ik) {
      const {
        count: Xk
      } = nI("webgpu", kk, Fk, Ik);
      void 0 !== Xk && OF(Xk)
    }
    const pI = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function uI(kk, Fk, Xk) {
      var ik, yk, lk, ak, Lk;
      let {
        cause: jk = "lost",
        restoreLost: ek = !1,
        adapterRemembered: wk = !1,
        error: Hk,
        context: Jk = OI,
        session: xk = pI
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        detail: Pk,
        count: Kk
      } = nI(kk, jk, Hk, Jk, {
        restoreLost: ek,
        adapterRemembered: wk
      }), Qk = {
        losses: String(Fk),
        cause: jk,
        detail: Pk,
        vendor: null !== (ik = null === (yk = Jk.adapter) || void 0 === yk ? void 0 : yk.vendor) && void 0 !== ik ? ik : "",
        architecture: null !== (lk = null === (ak = Jk.adapter) || void 0 === ak ? void 0 : ak.architecture) && void 0 !== lk ? lk : "",
        indirectHangs: String(Jk.indirectHangs),
        restoresSkipped: String(Jk.restoresSkipped),
        restoreLost: String(ek),
        adapterRemembered: String(wk),
        samples: String(xk.samples),
        sunShadows: String(xk.sunShadows),
        renderDistance: String(xk.renderDistance),
        gpuFamily: null !== (Lk = (0, Tk.d)()) && void 0 !== Lk ? Lk : "",
        browser: (0, qk.m)(),
        siteUsed: Zk.v,
        wasmBuild: Xk.wasm,
        clientVersion: Xk.client
      }, sk = EI(kk, jk), Vk = vF({
        kind: "recovered",
        code: "CORE-renderLost",
        site: dk,
        fatal: !1,
        message: sk,
        details: Qk,
        error: Hk,
        countAs: Kk
      });
      return GF("ga", (async () => {
        const {
          logError: Fk
        } = await Promise.resolve().then((() => Ik(2837))), Xk = `${tk.c["webgpu"===kk?"WebGPU":"WebGL2"]}\n Error: ${Pk}`;
        Fk("warning", Xk), Fk("error", Xk)
      })), Vk
    }

    function bI(kk, Fk) {
      var Ik, Xk;
      const Tk = null === kk.name ? "TEXTURE-sources" : null === kk.url ? "TEXTURE-nourl" : kk.error instanceof Ek.e ? `TEXTURE-${kk.error.status}` : "TEXTURE-network",
        ik = null === kk.name ? "terrain textures could not load" : `terrain texture ${kk.name} could not load`,
        yk = {
          texture: null !== (Ik = kk.name) && void 0 !== Ik ? Ik : "",
          url: null !== (Xk = kk.url) && void 0 !== Xk ? Xk : "",
          wasmBuild: Fk.wasm,
          clientVersion: Fk.client
        };
      return vF({
        kind: "terrainTexture",
        code: Tk,
        site: xk.v,
        fatal: !1,
        message: ik,
        details: yk,
        error: kk.error
      })
    }
    const RI = {
      previewAnimations: {
        site: Yk,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: gk,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function UI(kk, Fk, Ik, Xk) {
      const {
        site: Tk,
        prefix: ik,
        name: yk
      } = RI[kk], {
        stage: lk,
        error: ak
      } = Ik;
      return vF({
        kind: kk,
        code: "decode" === lk ? null === ak ? `${ik}-decode` : `${ik}-trap` : ak instanceof zk.f ? `${ik}-${ak.status}` : `${ik}-network`,
        site: Tk,
        fatal: !1,
        message: "decode" === lk ? `${yk} did not decode` : `${yk} could not load`,
        details: {
          url: Fk,
          wasmBuild: Xk.wasm,
          clientVersion: Xk.client
        },
        error: ak
      })
    }
    const CI = "staleBuild";

    function NI(kk, Fk, Ik) {
      const Xk = {
          failedSite: kk.site,
          url: kk.url,
          from: kk.from,
          sameBuild: String(kk.from === Fk),
          reloadMs: String(Math.max(0, Date.now() - kk.at)),
          wasmBuild: Ik.wasm,
          clientVersion: Ik.client
        },
        Tk = `reloaded into a newer build after ${kk.site} failed to load: ${kk.error}`;
      return vF({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: CI,
        fatal: !1,
        message: Tk,
        details: Xk
      })
    }
  },
  40817: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik,
      h: () => Tk,
      j: () => yk
    });
    var Xk = Ik(4799);
    const Tk = 3e4;
    class ik {
      constructor(kk) {
        this.Mj = kk, this.waitedMs = 0, this.lastMs = null
      }
      frame(kk, Fk) {
        if (Fk) return !0;
        const Ik = null === this.lastMs ? 0 : kk - this.lastMs;
        return this.lastMs = kk, Ik <= 900 && (this.waitedMs += Ik), !(this.waitedMs < Tk) && (this.Mj(), !0)
      }
    }

    function yk(kk, Fk) {
      return 0 === (kk & Xk.W.ChunkRequested) ? "no_chunk_request" : 0 === (kk & Xk.W.ChunkStored) ? "chunk_not_stored" : 0 === (kk & Xk.W.MeshLanded) ? "not_meshed" : null === Fk ? "no_frame_drawn" : 0 === Fk.terrainParts ? "no_terrain_parts" : Fk.terrainCompiling > 0 ? "terrain_compiling" : Fk.terrainOpaque + Fk.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40596: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      A: () => tk,
      C: () => ek,
      e: () => Xk,
      i: () => Jk,
      k: () => wk,
      n: () => Hk,
      r: () => Zk,
      u: () => jk,
      y: () => Lk
    });
    class Xk extends Error {
      constructor(kk) {
        super(`the join's code did not load: ${kk instanceof Error?kk.message:String(kk)}`, {
          cause: kk
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === kk || void 0 === kk ? void 0 : kk.request
      }
    }
    let Tk = null,
      ik = null,
      yk = null;
    const lk = [];
    let ak = null;

    function qk(kk, Fk) {
      try {
        kk(Fk)
      } catch (Ik) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Ik)
      }
    }

    function Lk() {
      return ak
    }

    function tk(kk) {
      lk.push(kk), null !== ak && qk(kk, ak)
    }

    function Zk(kk) {
      return Tk ??= Promise.all([Ik.e(72), Ik.e(96), Ik.e(221), Ik.e(77), Ik.e(222), Ik.e(198), Ik.e(95), Ik.e(240), Ik.e(269), Ik.e(197), Ik.e(210), Ik.e(189), Ik.e(196), Ik.e(191), Ik.e(142), Ik.e(87), Ik.e(121), Ik.e(247), Ik.e(56)]).then((() => Ik(42580))).then((Fk => {
        Fk.loadAudio(kk), ak = Fk;
        for (const kk of lk) qk(kk, Fk);
        return Fk
      })).catch((kk => {
        throw Tk = null, kk
      })), Tk
    }
    async function jk(kk, Fk) {
      try {
        const Ik = await Zk(kk);
        await Ik.loadClientGame(Fk)
      } catch (Ik) {
        throw new Xk(Ik)
      }
    }

    function ek(kk, Fk) {
      ik = {
        running: kk,
        shell: Fk
      }
    }

    function wk() {
      return yk
    }
    async function Hk(kk) {
      const Fk = ik;
      if ((null === Fk || void 0 === Fk ? void 0 : Fk.running) !== kk) throw new Error("the core's session has ended");
      const Ik = await Zk(Fk.shell.audio).catch((kk => {
        throw new Xk(kk)
      }));
      if (null !== yk) return yk;
      if (ik !== Fk || kk.isStopped) throw new Error("the core stopped while the game code loaded");
      if (yk = Ik.startGameHost(kk, Fk.shell), null === yk) throw new Error("the core's shared tables didn't read, so the game can't start");
      return yk
    }

    function Jk() {
      null !== yk && (null !== ak ? ak.endGameHost(yk) : yk.closeGame()), yk = null, ik = null
    }
  },
  40729: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    const Xk = {
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
  40689: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk,
      f: () => ik,
      g: () => yk,
      i: () => Tk,
      j: () => jk,
      m: () => Lk,
      o: () => ak,
      r: () => Zk,
      t: () => tk,
      v: () => lk
    });
    var Xk = Ik(1738);
    const Tk = new Uint8Array([12]),
      ik = 2e3,
      yk = 257;

    function lk(kk) {
      const Fk = new Uint8Array(4);
      return new DataView(Fk.buffer).setUint32(0, kk, !0), Fk
    }
    class ak extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class qk extends Error {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(kk), this.stage = Fk, this.code = Ik, this.serverText = Xk, this.socketOpened = Tk, this.name = "JoinError"
      }
    }
    class Lk extends Error {
      constructor(kk) {
        super(kk), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class tk extends Error {
      constructor(kk) {
        super((0, Xk.e)(kk), {
          cause: kk
        }), this.name = "TrafficCheckError"
      }
    }
    class Zk extends Error {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(kk, {
          cause: Ik
        }), this.networkLost = Fk, this.httpStatus = Xk, this.name = "SeatRequestError"
      }
    }
    class jk extends Error {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(kk), this.code = Fk, this.serverText = Ik, this.name = "MatchmakeError"
      }
    }
  },
  40697: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => jk,
      e: () => Zk,
      h: () => ek
    });
    var Xk = Ik(2546),
      Tk = Ik(2898),
      ik = Ik(39058),
      yk = Ik(36486),
      lk = Ik(39066),
      ak = Ik(40689),
      qk = Ik(40702);
    const Lk = "seat reservation expired.",
      tk = "early_leave";

    function Zk(kk) {
      if (kk instanceof yk.f) return "expected";
      if (kk instanceof ak.r) return kk.networkLost ? "expected" : "unrecognised";
      if (kk instanceof ak.b) {
        if ("closed" === kk.stage && (0 === kk.code || (0, Tk.f)(kk.code))) return "expected";
        if ("roomError" === kk.stage && (kk.serverText === Lk || kk.serverText === tk)) return "expected"
      }
      return kk instanceof ak.b || kk instanceof ak.j ? null === (0, lk.l)(kk.code).name ? "unrecognised" : "known" : (0, Xk.i)(kk) ? "expected" : kk instanceof ak.t || kk instanceof qk.d ? "known" : "unrecognised"
    }

    function jk(kk) {
      return kk instanceof yk.f ? "timedOut" : "expected" !== Zk(kk) || (0, Xk.i)(kk) || kk instanceof ak.b && 1001 === kk.code ? void 0 : "failed"
    }

    function ek(kk) {
      return kk instanceof ak.b && "attach" !== kk.stage ? (0, ik.d)(kk, "closed" !== kk.stage || kk.socketOpened ? "socket" : "socket_unopened") : kk instanceof ak.r ? {
        at: "seat_lost",
        code: kk.httpStatus
      } : kk instanceof ak.j || kk instanceof yk.f ? (0, ik.d)(kk, kk instanceof yk.f ? kk.leg : "seat") : void 0
    }
  },
  40745: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak,
      f: () => lk,
      g: () => qk
    });
    var Xk = Ik(705),
      Tk = Ik(710);

    function ik(kk, Fk) {
      const Ik = null === Fk ? void 0 : Xk.c.get(Fk);
      return "all" === Ik || "webgl" === Ik && "webgpu" !== kk.backend ? Fk : null
    }

    function yk(kk) {
      return "software_adapter" === kk.reason ? null : kk.adapter
    }

    function lk(kk) {
      const Fk = (0, Xk.t)();
      return null === Fk ? null : (0, Xk.g)(yk(kk), Fk, Xk.i)
    }

    function ak(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tk.k;
      const Xk = ik(kk, Fk);
      return null !== Xk && "webgl" === kk.backend && Ik(Xk) ? null : Xk
    }

    function qk(kk) {
      const Fk = (0, Xk.t)();
      return null !== Fk && (0, Xk.B)((0, Xk.g)(kk, Fk, Xk.o))
    }
  },
  40796: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ak,
      g: () => qk,
      h: () => jk,
      l: () => tk
    });
    var Xk = Ik(2803),
      Tk = Ik(4797),
      ik = Ik(40799),
      yk = Ik(40808),
      lk = Ik(36249);
    const ak = 395,
      qk = 2147483648,
      Lk = new Uint8Array(0);
    class tk extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class Zk extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class jk {
      constructor(kk, Fk, Ik) {
        var Xk, Tk, yk, lk;
        let ak = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = kk, this.build = Fk, this.onFailure = Ik, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.Gj = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Xk = ak.fetchFile) && void 0 !== Xk ? Xk : kk => (0, ik.f)(kk), this.onWritten = null !== (Tk = ak.onWritten) && void 0 !== Tk ? Tk : null, this.onTaken = null !== (yk = ak.onTaken) && void 0 !== yk ? yk : null, this.onPackFileFailed = null !== (lk = ak.onPackFileFailed) && void 0 !== lk ? lk : null, this.startupLeft = new Set(kk.startup);
        for (const ik of kk.startup) this.request(ik)
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
        const Fk = this.pending.get(kk);
        if (!0 === (null === Fk || void 0 === Fk ? void 0 : Fk.ask)) return;
        const Ik = this.Hj(kk, !0);
        Ik.recheck = void 0 !== Fk;
        const Xk = this.drawn.get(kk);
        if (void 0 !== Xk) return Ik.eq = !0, Ik.recheck = !0, void this.fetch(kk, Ik, Xk);
        this.fetchWanted(kk, Ik)
      }
      async refresh() {
        const kk = ++this.refreshes,
          Fk = new Set;
        for (const yk of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const kk of yk) 0 === (kk & ik.e) && Fk.add(kk);
        const Ik = [...Fk];
        let Xk;
        try {
          Xk = await Promise.all(Ik.map((kk => this.wanted(kk))))
        } catch {
          return null
        }
        if (kk !== this.refreshes) return null;
        const Tk = {
          resent: 0,
          refetched: 0,
          delivered: Ik.filter((kk => this.drawn.has(kk))).length
        };
        return Ik.forEach(((kk, Fk) => {
          const {
            url: Ik,
            inPlaceOf: ik
          } = Xk[Fk], yk = this.pending.get(kk);
          if (void 0 !== yk) {
            if (yk.eq || void 0 === yk.url) return void(yk.recheck = !0);
            if (yk.url === Ik) return;
            Tk.refetched++;
            const Fk = this.Hj(kk, yk.ask);
            return Fk.recheck = yk.recheck, void this.fetch(kk, Fk, Ik, ik)
          }
          const lk = this.written.get(kk);
          void 0 === lk ? this.drawn.get(kk) !== (null !== Ik && void 0 !== Ik ? Ik : void 0) && (Tk.resent++, this.fetch(kk, this.Hj(kk, !1), Ik, ik)) : lk.url !== (null !== Ik && void 0 !== Ik ? Ik : "") && (lk.attempt.recheck = !0)
        })), Tk
      }
      taken(kk, Fk) {
        const Ik = new Set,
          Xk = new Set;
        for (const Tk of Array.from(Fk)) 0 === (Tk & qk) ? Ik.add(Tk) : Xk.add((Tk & ~qk) >>> 0);
        for (const [Tk, ik] of this.written) ik.seq > kk || (this.written.delete(Tk), Ik.has(ik.seq) ? this.refusedFile(Tk, ik) : this.takenFile(Tk, ik, !ik.empty && !Xk.has(ik.seq)))
      }
      takenFile(kk, Fk, Ik) {
        const {
          attempt: Xk
        } = Fk;
        if (Ik) {
          var Tk;
          this.drawn.set(kk, Fk.url), this.undrawn.delete(kk), void 0 !== Xk.inPlaceOf ? this.refusedPack.set(kk, Xk.inPlaceOf) : Xk.eq || this.refusedPack.delete(kk), null === (Tk = this.onTaken) || void 0 === Tk || Tk.call(this, kk, !0);
          const Ik = this.pending.get(kk);
          if (!0 === (null === Ik || void 0 === Ik ? void 0 : Ik.eq) && Ik.url !== Fk.url) {
            const Ik = this.Hj(kk, !0);
            Ik.eq = !0, Ik.recheck = !0, this.fetch(kk, Ik, Fk.url)
          }
        } else {
          var ik;
          this.drawn.has(kk) || this.undrawn.add(kk), null === (ik = this.onTaken) || void 0 === ik || ik.call(this, kk, !1)
        }
        Xk.recheck && this.resendIfChanged(kk)
      }
      refusedFile(kk, Fk) {
        var Ik, Xk;
        if (null === (Ik = this.onTaken) || void 0 === Ik || Ik.call(this, kk, !1), this.refusedPack.set(kk, Fk.url), this.pending.has(kk)) return void(null === (Xk = this.onPackFileFailed) || void 0 === Xk || Xk.call(this, kk, ek(Fk.url)));
        const Tk = this.Hj(kk, Fk.attempt.ask);
        Tk.recheck = Fk.attempt.recheck, this.afterRefusal(kk, Tk, Fk.url)
      }
      async afterRefusal(kk, Fk, Ik) {
        var Xk;
        let Tk;
        try {
          Tk = await this.wanted(kk)
        } catch (ik) {
          return void(this.pending.get(kk) === Fk && this.giveUp(kk, Fk, Ik, ik))
        }
        this.pending.get(kk) === Fk && (Tk.inPlaceOf !== Ik ? Fk.ask || (null !== (Xk = Tk.url) && void 0 !== Xk ? Xk : void 0) !== this.drawn.get(kk) ? this.fetch(kk, Fk, Tk.url, Tk.inPlaceOf) : this.pending.delete(kk) : this.fallBack(kk, Fk, Ik, ek(Ik)))
      }
      Hj(kk, Fk) {
        const Ik = {
          url: void 0,
          ask: Fk,
          eq: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(kk, Ik);
        for (let Xk = this.ready.length - 1; Xk >= 0; Xk--) this.ready[Xk].file === kk && this.ready.splice(Xk, 1);
        return Ik
      }
      async wanted(kk) {
        const Fk = await this.files.url(kk);
        return null !== Fk && this.refusedPack.get(kk) === Fk ? {
          url: await this.files.shippedUrl(kk),
          inPlaceOf: Fk
        } : {
          url: Fk,
          inPlaceOf: void 0
        }
      }
      fetchWanted(kk, Fk) {
        const Ik = this.files.url(kk);
        Ik instanceof Promise ? Ik.then((Ik => {
          this.fetchFound(kk, Fk, Ik)
        }), (Ik => {
          this.pending.get(kk) === Fk && this.giveUp(kk, Fk, "", Ik)
        })) : this.fetchFound(kk, Fk, Ik)
      }
      fetchFound(kk, Fk, Ik) {
        null !== Ik && this.refusedPack.get(kk) === Ik ? Promise.resolve(this.files.shippedUrl(kk)).then((Xk => {
          this.fetch(kk, Fk, Xk, Ik)
        }), (Xk => {
          this.pending.get(kk) === Fk && this.giveUp(kk, Fk, Ik, Xk)
        })) : this.fetch(kk, Fk, Ik)
      }
      fetch(kk, Fk, Ik, Xk) {
        this.pending.get(kk) === Fk && (Fk.url = Ik, Fk.inPlaceOf = Xk, null !== Ik ? this.load(kk, Fk, Ik) : this.buildFile(kk, Fk, "", Lk))
      }
      load(kk, Fk, Ik) {
        const Xk = this.Gj.get(kk);
        (null === Xk || void 0 === Xk ? void 0 : Xk.url) !== Ik ? this.fetchFile(Ik).then((Xk => {
          var Tk, ik;
          this.pending.get(kk) === Fk && (this.keptTotal += Xk.byteLength - (null !== (Tk = null === (ik = this.Gj.get(kk)) || void 0 === ik ? void 0 : ik.glb.byteLength) && void 0 !== Tk ? Tk : 0), this.Gj.set(kk, {
            url: Ik,
            glb: Xk
          }), this.buildFile(kk, Fk, Ik, Xk))
        }), (Xk => {
          this.pending.get(kk) === Fk && this.fallBack(kk, Fk, Ik, Xk)
        })) : this.buildFile(kk, Fk, Ik, Xk.glb)
      }
      buildFile(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const yk = Xk.byteLength > 0 && (0, ik.h)(Ik) ? (kk | ik.c) >>> 0 : kk;
        this.queueRecord(kk, Fk, Ik, Xk, this.build(yk, Xk), Tk)
      }
      queueRecord(kk, Fk, Ik, Xk, ik, lk) {
        ik.then((ik => {
          if (this.pending.get(kk) !== Fk) return;
          if (Tk.t + (0, Tk.pe)(ik.byteLength) > Tk.Lc) return void this.ringRefused(kk, Fk, Ik, new tk(`${wk(Ik)}'s record is ${ik.byteLength-yk.b} bytes, past the cmd ring's ${Tk.Lc}`), lk);
          const ak = {
            file: kk,
            url: Ik,
            payload: ik,
            glb: Xk,
            attempt: Fk
          };
          lk ? this.ready.unshift(ak) : this.ready.push(ak)
        }))
      }
      async fallBack(kk, Fk, Ik, Xk) {
        var Tk;
        let ik = null,
          yk = Xk;
        try {
          ik = await this.files.shippedUrl(kk)
        } catch (lk) {
          yk = lk
        }
        this.pending.get(kk) === Fk && (null !== ik && ik !== Ik ? (null === (Tk = this.onPackFileFailed) || void 0 === Tk || Tk.call(this, kk, Xk), Fk.ask || this.drawn.get(kk) !== ik ? (Fk.url = ik, Fk.inPlaceOf = Ik, this.load(kk, Fk, ik)) : this.pending.delete(kk)) : this.giveUp(kk, Fk, Ik, yk))
      }
      ringRefused(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, ik.h)(Ik) ? this.fallBack(kk, Fk, Ik, Xk): this.giveUp(kk, Fk, Ik, Xk, Tk)
      }
      giveUp(kk, Fk, Ik, Tk) {
        let ik = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: kk,
          url: wk(Ik),
          error: Tk,
          startup: this.startupLeft.has(kk)
        }), Fk.ask || !this.drawn.has(kk) ? (0, Xk.U)(Tk) ? this.queueRecord(kk, Fk, Ik, Lk, Promise.resolve((0, yk.l)(kk, (0, lk.j)(Tk))), ik) : this.buildFile(kk, Fk, Ik, Lk, ik) : this.pending.delete(kk)
      }
      async resendIfChanged(kk) {
        var Fk;
        if (0 !== (kk & ik.e)) return;
        let Ik;
        try {
          Ik = await this.wanted(kk)
        } catch {
          return
        }(null !== (Fk = Ik.url) && void 0 !== Fk ? Fk : void 0) === this.drawn.get(kk) || this.pending.has(kk) || this.written.has(kk) || this.fetch(kk, this.Hj(kk, !1), Ik.url, Ik.inPlaceOf)
      }
      drain(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === kk) return;
        let Ik = 0,
          Xk = 0;
        for (; Xk < this.ready.length && Ik < 262144;) {
          const lk = this.ready[Xk];
          if (this.written.has(lk.file)) {
            Xk++;
            continue
          }
          const Lk = this.nextSeq;
          new DataView(lk.payload.buffer, lk.payload.byteOffset, lk.payload.byteLength).setUint32(yk.f, Lk, !0);
          const Zk = lk.attempt.eq && lk.glb.byteLength > 0 && this.drawn.get(lk.file) === lk.url;
          if (kk(ak, Zk ? 1 : 0, lk.payload)) {
            if (this.nextSeq = Lk >= qk - 1 ? 1 : Lk + 1, this.ready.splice(Xk, 1), Ik += lk.payload.byteLength, this.pending.delete(lk.file), this.startupLeft.delete(lk.file), this.written.set(lk.file, {
                seq: Lk,
                url: lk.url,
                empty: 0 === lk.glb.byteLength,
                attempt: lk.attempt
              }), lk.glb.byteLength > 0) try {
              var Tk;
              null === (Tk = this.onWritten) || void 0 === Tk || Tk.call(this, lk.file, lk.glb)
            } catch (ik) {
              console.warn("ModelFeed: reading the file's images failed", ik)
            }
          } else {
            if (null === Fk || 0 === lk.glb.byteLength || Fk(lk.payload.byteLength)) return;
            this.ready.splice(Xk, 1);
            const kk = new tk(`${wk(lk.url)}'s record is ${lk.payload.byteLength-yk.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(lk.file, lk.attempt, lk.url, kk, !0)
          }
        }
      }
    }

    function ek(kk) {
      return new Zk(`presentation refused ${wk(kk)}`)
    }

    function wk(kk) {
      return kk.startsWith("data:") ? `${kk.slice(0,Math.min(Math.max(kk.indexOf(","),5),64))},...` : kk
    }
  },
  40799: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      e: () => ik,
      f: () => Lk,
      h: () => lk,
      i: () => qk,
      j: () => ak
    });
    var Xk = Ik(2803),
      Tk = Ik(3147);
    const ik = 2147483648,
      yk = 1073741824;

    function lk(kk) {
      return kk.startsWith("data:")
    }

    function ak(kk) {
      let {
        onTableFailed: Fk,
        packUrl: Ik
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Xk = qk();
      Xk.catch((kk => {
        null === Fk || void 0 === Fk || Fk(kk)
      }));
      const Tk = async Fk => (await Xk).fileUrl((Fk & ~ik) >>> 0, kk);
      return {
        startup: [],
        url: async kk => {
          if (Ik && 0 === (kk & ik)) {
            const Fk = await Xk,
              Tk = Fk.filePackName(kk),
              ik = null === Tk || "lifeform" === Fk.fileSource(kk) ? null : Ik(Tk);
            if (null !== ik) return ik
          }
          return Tk(kk)
        },
        shippedUrl: Tk
      }
    }

    function qk() {
      return Ik.e(41).then((() => Ik(42665)))
    }
    async function Lk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return kk.startsWith("data:") ? (0, Tk.b)(kk.slice(kk.indexOf(",") + 1), Fk) : (0, Xk.K)(kk, {
        spare: Fk
      })
    }
  },
  40808: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk,
      f: () => Lk,
      i: () => jk,
      k: () => Hk,
      l: () => ek,
      p: () => Zk,
      q: () => wk
    });
    const Xk = 826427981,
      Tk = 1,
      ik = 2,
      yk = 44,
      lk = 46,
      ak = 58,
      qk = 8,
      Lk = 4;

    function tk(kk, Fk, Ik) {
      const Tk = (new TextEncoder).encode(Ik),
        ik = qk + 4 * (Fk.length + 2),
        yk = new Uint8Array(ik + (Tk.byteLength + 3 & -4)),
        lk = new DataView(yk.buffer);
      return lk.setUint32(0, kk, !0), lk.setUint32(qk, Xk, !0), Fk.forEach(((kk, Fk) => {
        lk.setUint32(qk + 4 * (Fk + 1), kk, !0)
      })), lk.setUint32(ik - 4, Tk.byteLength, !0), yk.set(Tk, ik), yk
    }

    function Zk(kk, Fk) {
      return tk(kk, [ik], Fk)
    }

    function jk(kk, Fk) {
      return tk(kk, [Tk, lk], Fk)
    }

    function ek(kk, Fk) {
      return tk(kk, [Tk, ak], Fk)
    }

    function wk(kk, Fk) {
      return tk(kk, [Tk, yk], Fk)
    }

    function Hk(kk) {
      const Fk = qk;
      if (kk.byteLength < Fk + 12) return !1;
      const Ik = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      return Ik.getUint32(Fk, !0) === Xk && Ik.getUint32(Fk + 4, !0) === Tk && Ik.getUint32(Fk + 8, !0) === yk
    }
  },
  40738: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      d: () => Lk,
      f: () => yk,
      g: () => ak
    });
    var Xk = Ik(36249);
    class Tk extends Error {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${kk}: the module trapped${Ik?" in an earlier call":""}: ${String(Fk)}`, {
          cause: Fk
        }), this.site = kk, this.trap = Fk, this.earlier = Ik, this.name = "ModuleTrapError", Fk instanceof Error && void 0 !== Fk.stack && (this.stack = `${this.name}: ${this.message}\n${Fk.stack}`)
      }
    }
    const ik = new WeakMap;

    function yk(kk) {
      return ik.has(kk)
    }

    function lk(kk, Fk) {
      ik.has(kk) || ik.set(kk, Fk)
    }

    function ak(kk, Fk) {
      return !!(0, Xk.g)(Fk) && (lk(kk, Fk), !0)
    }
    const qk = [
      ["error", kk => kk.error],
      ["unhandledrejection", kk => kk.reason]
    ];

    function Lk(kk, Fk, Ik) {
      let yk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return ik.has(kk) ? Promise.reject(new Tk(Fk, ik.get(kk), !0)) : new Promise(((ik, ak) => {
        const Lk = Ik => {
            lk(kk, Ik), jk(), ak(new Tk(Fk, Ik))
          },
          tk = kk => {
            kk instanceof WebAssembly.RuntimeError ? Lk(kk) : (jk(), ak(kk))
          },
          Zk = qk.map((kk => {
            let [Fk, Ik] = kk;
            return [Fk, kk => {
              const Fk = Ik(kk);
              (0, Xk.g)(Fk) && Lk(Fk)
            }]
          })),
          jk = () => {
            for (const [kk, Fk] of Zk) null === yk || void 0 === yk || yk.removeEventListener(kk, Fk)
          };
        for (const [kk, Fk] of Zk) null === yk || void 0 === yk || yk.addEventListener(kk, Fk);
        let ek;
        try {
          ek = Ik()
        } catch (wk) {
          return void tk(wk)
        }
        ek.then((kk => {
          jk(), ik(kk)
        }), tk)
      }))
    }
  },
  40721: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => fk,
      F: () => Wk,
      J: () => uk,
      N: () => zk,
      O: () => Gk,
      P: () => Bk,
      Q: () => pk,
      S: () => Rk,
      V: () => nk,
      e: () => Vk,
      f: () => Kk,
      j: () => Uk,
      l: () => bk,
      p: () => Pk,
      r: () => sk,
      v: () => Jk,
      y: () => vk,
      z: () => Ok
    });
    var Xk = Ik(198),
      Tk = Ik(25),
      ik = Ik(3511),
      yk = Ik(314),
      lk = Ik(41),
      ak = Ik(40726),
      qk = Ik(36466),
      Lk = Ik(40752),
      tk = (Ik(40779), Ik(40834)),
      Zk = Ik(40774);
    const jk = "wasmJoinBuild";
    let ek = null,
      wk = null,
      Hk = null;

    function Jk(kk) {
      Hk = kk
    }
    let xk = !1;

    function Pk() {
      xk = !0
    }

    function Kk() {
      return xk
    }
    let Qk = !1;

    function sk() {
      Qk = !0
    }

    function Vk() {
      return Qk
    }

    function zk() {
      return Hk
    }
    let Sk = null;

    function vk(kk) {
      Sk = kk, (0, yk.b)(kk)
    }
    const Ek = "wasmClientRenderLost";

    function Ok() {
      lk.m.setItem(Ek, !0)
    }

    function nk() {
      return !0 === lk.m.getItem(Ek)
    }

    function Gk() {
      return Sk
    }

    function pk() {
      return null === ek && (lk.j.removeItem("wasmLastPick"), lk.j.removeItem("wasmGuessVerdict"), (0, yk.j)(), ek = (0, ak.o)(Lk.h).then((kk => (null === kk || (0, ak.h)(kk) || (wk = tk.e[kk.backend], Tk.d.followGameGpu("webgpu" === kk.backend ? kk.adapter : null), "webgpu" === kk.backend && (0, Zk.g)()), kk)))), ek
    }

    function uk() {
      return wk
    }

    function bk(kk) {
      return kk ? kk.load() : Promise.resolve().then((function() {
        var kk = new Error("Cannot find module '@bloxd/wasm/client'");
        throw kk.code = "MODULE_NOT_FOUND", kk
      })).then((kk => kk.bloxdWasmClient))
    }

    function Rk(kk) {
      lk.j.setItem(jk, kk)
    }
    async function Uk() {
      if (null === Lk.h) return bk(null);
      const kk = lk.j.getItem(jk);
      let Fk = "none" === kk ? null : "webgl";
      return null !== kk && "none" !== kk && ("string" === typeof kk && void 0 !== (0, Xk.d)(Lk.h, kk) ? Fk = kk : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(kk)}, is none of this client's: guessing WebGL2's`)), null === Fk ? null : Lk.h[Fk]()
    }
    let Ck = null,
      Nk = null,
      ck = null;

    function Wk() {
      return Ck ??= pk().then((async kk => {
        const Fk = null !== kk && !(0, ak.h)(kk),
          Ik = {
            indirectHangs: Fk && await (0, ak.y)(kk, window.location.search),
            storagePullBreaks: Fk && (0, ak.F)(kk, window.location.search),
            splitPassBreaks: Fk && (0, ak.D)(kk, window.location.search),
            earlySky: Fk && (0, ak.v)(kk, window.location.search),
            instancedTerrain: Fk ? (0, ak.A)(kk, window.location.search) : null,
            cellLight: Fk && await (0, ik.i)("cellLight"),
            framesAhead: (0, ak.f)(window.location.search),
            webGpuRestores: !Fk || (0, ak.I)(kk, (0, qk.e)()),
            bufferCopiesCrash: Fk && (0, ak.s)(kk, window.location.search)
          };
        return Nk = Ik.indirectHangs, ck = !Ik.webGpuRestores, Ik
      })), Ck
    }

    function fk() {
      return Nk
    }

    function Bk() {
      return ck
    }
  },
  40991: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk
    });
    var Xk = Ik(36297),
      Tk = Ik(40870),
      ik = Ik(36466);

    function yk(kk, Fk) {
      return (0, Xk.h)(kk, Tk.f, {
        ...Fk,
        memoryMaximumBytes: (0, ik.m)()
      })
    }
  },
  40771: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Vk,
      e: () => xk,
      i: () => Jk,
      m: () => sk,
      q: () => Ek,
      s: () => vk,
      t: () => Ok,
      u: () => Kk
    });
    var Xk = Ik(4799),
      Tk = Ik(40774);
    const ik = 1,
      yk = 18,
      lk = 19,
      ak = 20,
      qk = {
        [ik]: "link",
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
        [yk]: "retry linked",
        [lk]: "fallback linked",
        [ak]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function Lk(kk, Fk, Ik) {
      return kk === yk ? "program retry" : kk === ik ? "program link" : kk === lk || kk === ak ? `program ${Fk} ${Ik}` : "program"
    }
    const tk = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      Zk = {
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
      jk = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      ek = {
        11: "none read after view",
        12: "some read after view"
      },
      wk = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...ek
      },
      Hk = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function Jk(kk, Fk) {
      return kk === Xk.m.RenderSerialLinks && void 0 !== ek[Fk]
    }

    function xk(kk, Fk) {
      return kk === Xk.m.RenderSerialLinks && void 0 !== Hk[15 & Fk]
    }
    const Pk = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function Kk(kk) {
      return String(kk).replace(/\d/g, (kk => String.fromCharCode(97 + Number(kk))))
    }

    function Qk(kk, Fk) {
      var Ik;
      return null !== (Ik = kk[Fk]) && void 0 !== Ik ? Ik : Kk(Fk)
    }

    function sk() {
      return Kk((0, Tk.d)())
    }

    function Vk(kk, Fk) {
      switch (kk) {
        case Xk.m.RenderSceneRowNotDrawn:
          return {
            words: ` ${Qk(Zk,Fk)}`, instance: String(Fk), group: String(kk)
          };
        case Xk.m.RenderChunkMeshNotDrawn: {
          const Ik = 0 === (128 & Fk) ? "" : " shortage",
            Xk = Fk >>> 8;
          return {
            words: ` ${Qk(jk,127&Fk)}${Ik}${0===Xk?"":` kind ${Kk(Xk)}`}`,
            instance: String(Fk),
            group: String(kk)
          }
        }
        case Xk.m.RenderInternal: {
          const Ik = Qk(tk, 255 & Fk),
            Xk = Fk >>> 8 & 255;
          if (0 === Xk) return {
            words: ` ${Ik}`,
            instance: String(Fk),
            group: String(kk)
          };
          const Tk = Qk(qk, Xk),
            ik = Fk >>> 16;
          return {
            words: ` ${Ik} ${Tk} program ${Kk(ik)}`,
            instance: `${Ik} ${Tk} ${ik}`,
            group: Lk(Xk, Tk, Ik),
            gpuDetails: {
              programFailure: Tk,
              program: String(ik)
            }
          }
        }
        case Xk.m.RenderSerialLinks: {
          if (xk(kk, Fk)) {
            const kk = function(kk) {
              const Fk = (Fk, Ik) => Kk(kk >>> Fk & (1 << Ik) - 1),
                Ik = kk >>> 30 & 1 ? " restored" : "";
              return `link census ${Hk[15&kk]} linked ${Fk(22,8)} failed ${Fk(4,6)} retried ${Fk(10,6)} fallback ${Fk(16,6)}${Ik}`
            }(Fk);
            return {
              words: ` ${kk}`,
              instance: String(15 & Fk),
              group: "link census",
              gpuDetails: {
                linkCensus: kk
              }
            }
          }
          const Ik = Qk(wk, Fk);
          return {
            words: ` ${Ik}`,
            instance: String(Fk),
            group: String(kk),
            gpuDetails: {
              serialLinks: Ik
            }
          }
        }
        case Xk.m.RenderGlErrorAfterRestore: {
          const Ik = Qk(Pk, 65535 & Fk),
            Xk = Fk >>> 16,
            Tk = 65535 !== Xk;
          return {
            words: ` ${Ik}${Tk?` program ${Kk(Xk)}`:""}`,
            instance: String(Fk),
            group: String(kk),
            gpuDetails: Tk ? {
              glError: Ik,
              program: String(Xk)
            } : {
              glError: Ik
            }
          }
        }
        default:
          return null
      }
    }
    const zk = 2,
      Sk = new Map;

    function vk(kk) {
      let {
        group: Fk,
        instance: Ik
      } = kk, Xk = Sk.get(Fk);
      return void 0 === Xk && (Xk = [], Sk.set(Fk, Xk)), !Xk.includes(Ik) && (Xk.length >= zk || (Xk.push(Ik), !1))
    }

    function Ek() {
      return Sk.size > 0
    }

    function Ok() {
      Sk.clear()
    }
  },
  40752: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk,
      h: () => ik
    });
    var Xk = Ik(40757);
    const Tk = new WeakSet;
    const ik = {
        webgpu: async () => (function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === kk || Tk.has(kk.prototype)) return;
          Tk.add(kk.prototype);
          const Fk = kk.prototype.requestDevice;
          kk.prototype.requestDevice = function(kk) {
            var Ik;
            const Tk = null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.requiredLimits) && void 0 !== Ik ? Ik : {},
              ik = Object.keys(Tk).filter((kk => !(kk in this.limits)));
            if (0 === ik.length) return Fk.call(this, kk);
            const yk = Object.fromEntries(Object.entries(Tk).filter((kk => {
              let [Fk] = kk;
              return Fk in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${ik.join(", ")}`), (0, Xk.reportDroppedRequiredLimits)(ik), Fk.call(this, {
              ...kk,
              requiredLimits: yk
            })
          }
        }(), (await Ik.e(8).then((() => Ik(42613)))).bloxdWasmWebgpu),
        webgl: async () => (await Ik.e(6).then((() => Ik(42624)))).bloxdWasmWebgl,
        webgl1: async () => (await Ik.e(7).then((() => Ik(42636)))).bloxdWasmWebgl1
      },
      yk = async () => (await Ik.e(5).then((() => Ik(42653)))).compileAnimationPackInWasm
  },
  40702: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Jk,
      g: () => Hk,
      i: () => Qk
    });
    var Xk = Ik(6622),
      Tk = Ik(34),
      ik = Ik(4269),
      yk = Ik(4799),
      lk = Ik(6614),
      ak = Ik(40708);

    function qk(kk, Fk) {
      const Ik = (0, lk.b)(Fk.variants);
      return kk.setShaderPack(Ik.variantFlags, Ik.hooks, Ik.moduleCodes, (0, ak.y)(Fk.layers), ak.l[Fk.Ya], Fk.keepCircleShadows)
    }
    const Lk = 0,
      tk = 1,
      Zk = 2,
      jk = "shaderPack:failedToCompile",
      ek = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      wk = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function Hk(kk, Fk) {
      var Ik;
      const Xk = null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.reason) && void 0 !== Ik ? Ik : "none";
      return ek.has(Xk) ? {
        messageKey: Fk ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Xk && "override" === (null === kk || void 0 === kk ? void 0 : kk.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: wk.has(Xk) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class Jk extends Error {
      constructor(kk) {
        super(`the shader pack can't run in this game: ${kk}`), this.messageKey = kk, this.name = "ShaderPackJoinError"
      }
    }
    const xk = "strict";
    class Pk {
      constructor(kk) {
        this.deps = kk, this.pagePack = void 0, this.loaded = null, this.Ya = xk, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = kk.load().catch((Fk => (kk.warn("the shader pack could not load: the game draws without it", Fk), {
          status: "none"
        }))).then((kk => (this.loaded = kk, "active" === kk.status && (this.handOverToPreviews(kk), null !== kk.harnessPolicy && (this.Ya = kk.harnessPolicy, this.handOver())), kk)))
      }
      async join(kk) {
        this.leave();
        const Fk = this.game,
          [Ik, Tk] = await Promise.all([this.pagePack, this.policyOf(kk)]);
        if (Fk !== this.game || "none" === Ik.status) return null;
        const ik = "active" === Ik.status ? Ik.pack.variants : Ik.variants,
          yk = (0, Xk.f)(ik, Tk);
        if (yk && "active" === Ik.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (yk) {
          const kk = this.cantRun(Ik, Tk);
          if (null !== kk) return kk
        } else if ("blocked" === Ik.status || null === this.deps.core) return null;
        return this.Ya = Tk, this.handOver(), yk && this.refused ? jk : (this.joined = !0, this.offInThisGame = !yk, null)
      }
      async replay(kk) {
        const Fk = await this.join(kk);
        null === Fk ? this.playable() : this.deps.failInGame(Fk)
      }
      cantRun(kk, Fk) {
        const {
          core: Ik,
          noWebGpu: Xk
        } = this.deps;
        if ("blocked" === kk.status) {
          return "shaderPack:failedUnchecked" === kk.messageKey && null === Ik && Xk.noAdapter ? Xk.messageKey : kk.messageKey
        }
        return this.refused || this.failedPolicies.has(Fk) ? jk : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var kk;
        return this.runsInJoinedGame() && "active" === (null === (kk = this.loaded) || void 0 === kk ? void 0 : kk.status) ? function(kk, Fk) {
          const Ik = kk.filter((kk => (0, Xk.f)([kk], Fk))),
            Tk = kk => Ik.some((Fk => Fk[kk]));
          return {
            sceneDepth: Tk("sceneDepth"),
            sunShadow: Tk("sunShadow"),
            airShadow: Tk("airShadow")
          }
        }(this.loaded.pack.variants, this.Ya) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(jk) : (null !== this.couldntRun ? this.notify(ik.c, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Ya) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(kk) {
        for (const {
            code: Fk,
            detail: Ik
          }
          of kk)
          if (Fk === yk.m.RenderShaderPackNotRun) switch (255 & Ik) {
            case Lk:
              this.refused = !0, this.failed();
              break;
            case tk:
              this.failedPolicies.add(this.Ya), this.failed();
              break;
            case Zk:
              this.failedModelPolicies.add(this.Ya), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(jk) : this.failedWhileJoining = !0)
      }
      fail(kk) {
        this.leave(), this.deps.failInGame(kk)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(kk, Fk) {
        const Ik = this.game;
        this.deps.notify(kk, (() => Ik === this.game && this.joined), Fk)
      }
      handOver() {
        var kk;
        const {
          core: Fk
        } = this.deps;
        null !== Fk && "active" === (null === (kk = this.loaded) || void 0 === kk ? void 0 : kk.status) && (qk(Fk, {
          ...this.loaded.pack,
          Ya: this.Ya
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(kk) {
        let {
          pack: Fk,
          harnessPolicy: Ik
        } = kk;
        const {
          previews: Xk
        } = this.deps;
        null !== Xk && qk(Xk, {
          ...Fk,
          Ya: null !== Ik && void 0 !== Ik ? Ik : xk
        })
      }
      policyOf(kk) {
        return this.deps.policyOf(kk).catch((kk => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", kk), xk)))
      }
    }
    const Kk = "wasmShaderPackNotice";

    function Qk(kk, Fk, Ik, Xk) {
      return Tk.g.subscribe(Kk, (kk => {
        let {
          translationKey: Fk,
          stillCurrent: Ik,
          reasonKey: Xk
        } = kk;
        Ik() && Tk.g.GL("chat", (0, ik.j)(Fk, Xk))
      })), new Pk({
        load: sk,
        policyOf: Vk,
        core: kk,
        previews: Fk,
        noWebGpu: Ik,
        notify: (kk, Fk, Ik) => {
          const Xk = {
            translationKey: kk,
            stillCurrent: Fk,
            reasonKey: Ik
          };
          Tk.g.GL(Kk, Xk, !0)
        },
        failInGame: kk => {
          Tk.g.GL(ik.f, kk)
        },
        warn: Xk
      })
    }
    async function sk() {
      const [{
        shaderPackPage: kk,
        harnessShaderPackMode: Fk
      }, {
        shaderPackTextures: Xk
      }] = await Promise.all([Ik.e(115).then((() => Ik(39224))), Ik.e(116).then((() => Ik(6611)))]), Tk = await kk.load();
      return "active" !== Tk.status ? Tk : {
        status: "active",
        pack: {
          variants: Tk.pack.variants,
          layers: Xk().layers,
          keepCircleShadows: Tk.pack.keepCircleShadows
        },
        harnessPolicy: Fk()
      }
    }
    async function Vk(kk) {
      var Fk;
      const [{
        shaderPackPage: Xk,
        harnessShaderPackMode: Tk
      }, {
        getShaderPackPolicy: ik
      }] = await Promise.all([Ik.e(115).then((() => Ik(39224))), Ik.e(91).then((() => Ik(41266)))]);
      return await Xk.load(), null !== (Fk = Tk()) && void 0 !== Fk ? Fk : ik(kk)
    }
  },
  40819: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      g: () => Hk,
      i: () => ak,
      l: () => qk,
      o: () => Lk,
      q: () => Zk
    });
    var Xk = Ik(40825),
      Tk = Ik(40827);
    const ik = "atlas:",
      yk = 3e4;
    class lk extends Error {
      constructor(kk, Fk) {
        super(`fetching ${kk} answered HTTP ${Fk}`), this.url = kk, this.status = Fk, this.name = "TerrainTextureFetchError"
      }
    }

    function ak(kk) {
      if (!kk.startsWith(ik)) return null;
      const Fk = Number(kk.slice(ik.length));
      return Number.isInteger(Fk) && Fk >= 0 ? Fk : null
    }
    async function qk() {
      const kk = await Ik.e(204).then((() => Ik(34274)));
      return {
        atlasSheets: kk.blockAtlasUrls,
        texture: Fk => {
          var Ik, Xk, ik;
          return null !== (Ik = null !== (Xk = null !== (ik = kk.animatedBlockTextures[Fk]) && void 0 !== ik ? ik : kk.rotatedBlockTextures[Fk]) && void 0 !== Xk ? Xk : Tk.c[Fk]) && void 0 !== Ik ? Ik : null
        }
      }
    }
    async function Lk(kk) {
      const Fk = new AbortController,
        Ik = setTimeout((() => {
          Fk.abort(new DOMException(`${kk} took over ${yk} ms`, "TimeoutError"))
        }), yk);
      let Xk;
      try {
        const Ik = await fetch(kk, {
          signal: Fk.signal
        });
        if (!Ik.ok) throw new lk(kk, Ik.status);
        Xk = await Ik.blob()
      } finally {
        clearTimeout(Ik)
      }
      const Tk = await createImageBitmap(Xk, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Zk(Tk)
      } finally {
        Tk.close()
      }
    }
    const tk = 8192;

    function Zk(kk) {
      const {
        width: Fk,
        height: Ik
      } = kk, Tk = Math.max(1, Math.min(Ik, tk)), ik = (0, Xk.g)(Fk, Tk, {
        willReadFrequently: !0
      });
      if (!ik) throw new Error("no 2D context to read the texture back");
      ik.globalCompositeOperation = "copy";
      const yk = new Uint8Array(Fk * Ik * 4);
      for (let Xk = 0; Xk < Ik; Xk += Tk) {
        const lk = Math.min(Tk, Ik - Xk);
        ik.drawImage(kk, 0, Xk, Fk, lk, 0, 0, Fk, lk), yk.set(ik.getImageData(0, 0, Fk, lk).data, Xk * Fk * 4)
      }
      return {
        width: Fk,
        height: Ik,
        pixels: yk
      }
    }
    async function jk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Lk;
      const Xk = [],
        Tk = await Promise.all(kk.map((async kk => {
          var Tk, yk;
          const lk = null !== (Tk = null === (yk = Fk.decoded) || void 0 === yk ? void 0 : yk.call(Fk, kk)) && void 0 !== Tk ? Tk : null,
            qk = null === lk ? function(kk, Fk) {
              if (kk.startsWith(ik)) {
                var Ik;
                const Xk = ak(kk);
                return null === Xk ? null : null !== (Ik = Fk.atlasSheets[Xk]) && void 0 !== Ik ? Ik : null
              }
              return Fk.texture(kk)
            }(kk, Fk) : null,
            Lk = null !== lk && void 0 !== lk ? lk : null === qk ? null : Ik(qk);
          if (null === Lk) return Xk.push({
            name: kk,
            url: qk,
            error: new Error(`no URL for terrain texture ${kk}`)
          }), null;
          try {
            const Fk = await Lk;
            if (Fk.pixels.byteLength !== Fk.width * Fk.height * 4) throw new Error(`decoded ${Fk.pixels.byteLength} bytes for ${Fk.width}x${Fk.height} texels`);
            return {
              name: kk,
              texture: Fk
            }
          } catch (tk) {
            return Xk.push({
              name: kk,
              url: qk,
              error: tk
            }), null
          }
        }))),
        yk = Tk.filter((kk => null !== kk)),
        lk = new Uint32Array(2 * yk.length);
      yk.forEach(((kk, Fk) => {
        let {
          texture: Ik
        } = kk;
        lk[2 * Fk] = Ik.width, lk[2 * Fk + 1] = Ik.height
      }));
      return {
        handOver: {
          names: yk.map((kk => {
            let {
              name: Fk
            } = kk;
            return Fk
          })),
          textures: yk.map((kk => {
            let {
              texture: Fk
            } = kk;
            return Fk.pixels
          })),
          sizes: lk
        },
        failures: Xk
      }
    }
    const ek = [2e3, 1e4, 3e4, 6e4, 12e4];

    function wk() {}
    class Hk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = kk, this.retryMs = Fk, this.keepBelow = Ik, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qk,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Xk = ++this.started,
          Tk = {
            decode: Ik.decode,
            wholeAtlas: Ik.wholeAtlas
          };
        return this.loadAndHandOver(Fk, Tk, kk, (() => {
          var kk;
          return Xk < this.landed || !1 === (null === (kk = Ik.wanted) || void 0 === kk ? void 0 : kk.call(Ik))
        }), {
          onTaken: (kk, Ik) => {
            this.landed = Xk, this.current = {
              mine: Xk,
              sources: Fk,
              load: Tk,
              Gj: kk,
              failed: Ik
            }
          }
        })
      }
      restore(kk) {
        var Fk;
        const Ik = this.current;
        if (null === Ik) return Promise.resolve(null);
        if ((null === (Fk = this.restoring) || void 0 === Fk ? void 0 : Fk.mine) === Ik.mine) return this.restoring.done;
        const Xk = {
          mine: Ik.mine,
          done: this.restoreLanded(Ik, kk).finally((() => {
            this.restoring === Xk && (this.restoring = null)
          }))
        };
        return this.restoring = Xk, Xk.done
      }
      async restoreLanded(kk, Fk) {
        const Ik = () => this.landed !== kk.mine,
          {
            Gj: Xk
          } = kk;
        if (null !== Xk) return this.stopped() ? null : this.core.setTerrainTextures(Xk.names, Xk.textures, Xk.sizes);
        let Tk = Fk;
        for (let ik = 0;; ik++) {
          const Fk = this.retryMs.at(ik),
            Xk = {
              allOrNothingExcept: void 0 === Fk ? void 0 : kk.failed
            },
            yk = await this.loadAndHandOver(kk.sources, kk.load, Tk, Ik, Xk);
          if (!1 !== yk || void 0 === Fk || this.stopped()) return yk;
          if (Tk = wk, await new Promise((kk => {
              setTimeout(kk, Fk)
            })), Ik()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const ik = this.core.terrainTextureNames();
        var yk;
        if (0 === ik.length) return null === (yk = Tk.onTaken) || void 0 === yk || yk.call(Tk, null, new Set), !0;
        let lk, qk;
        try {
          lk = await kk(), qk = await jk(ik, lk, Fk.decode)
        } catch (Hk) {
          return Xk() ? null : (Ik({
            name: null,
            url: null,
            error: Hk
          }), !1)
        }
        if (Xk() || this.stopped()) return null;
        for (const ak of qk.failures) Ik(ak);
        const Lk = Tk.allOrNothingExcept;
        if (void 0 !== Lk && qk.failures.some((kk => {
            let {
              name: Fk
            } = kk;
            return null === Fk || !Lk.has(Fk)
          })) || !0 === Fk.wholeAtlas && qk.failures.some((kk => {
            let {
              name: Fk
            } = kk;
            return null === Fk || null !== ak(Fk)
          }))) return !1;
        const {
          handOver: tk
        } = qk, Zk = function(kk) {
          return kk.textures.reduce(((kk, Fk) => kk + Fk.byteLength), 0)
        }(tk) < this.keepBelow, ek = this.core.setTerrainTextures(tk.names, tk.textures, tk.sizes, Zk ? void 0 : () => {
          !async function(kk, Fk) {
            await Fk;
            for (const {
                buffer: Xk
              }
              of kk) {
              const kk = Xk;
              var Ik;
              if (!kk.detached) null === (Ik = kk.transfer) || void 0 === Ik || Ik.call(kk, 0)
            }
          }(tk.textures, lk.heldUntil)
        });
        if (ek) {
          var wk;
          const kk = new Set(qk.failures.flatMap((kk => {
            let {
              name: Fk
            } = kk;
            return null === Fk ? [] : [Fk]
          })));
          null === (wk = Tk.onTaken) || void 0 === wk || wk.call(Tk, Zk ? tk : null, kk)
        }
        return ek
      }
    }
  },
  40774: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => lk,
      g: () => ak
    });
    var Xk = Ik(95);
    const Tk = "webgpuPipeline";

    function ik(kk) {
      return kk.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let yk = null;

    function lk() {
      if (null === yk) try {
        kk = (0, Xk.getBrowserName)(), Fk = (0, Xk.getBrowserVersion)(), Ik = (0, Xk.getOperatingSystem)(), Tk = (0, Xk.getOperatingSystemVersion)(), yk = `${kk.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===Fk?"unknown":ik(Fk)}-${Ik}${void 0===Tk?"":`_${ik(Tk)}`}`
      } catch (lk) {
        console.warn("The user agent couldn't be read for its browser code", lk), yk = "unknown"
      }
      var kk, Fk, Ik, Tk;
      return yk
    }

    function ak() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const Fk = `WGPU-${lk()}`,
        Xk = (kk, Xk) => {
          const {
            reason: ik,
            message: yk
          } = Xk, lk = {
            pipeline: null !== kk && void 0 !== kk ? kk : "",
            reason: String(ik),
            browserMessage: String(yk)
          };
          Promise.resolve().then((() => Ik(40757))).then((kk => {
            let {
              reportCrash: Ik
            } = kk;
            Ik({
              kind: "coreError",
              code: Fk,
              site: Tk,
              fatal: !1,
              message: `${lk.pipeline} ${lk.reason}: ${lk.browserMessage}`,
              details: lk,
              error: Xk
            })
          })).catch((kk => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", kk)
          }))
        },
        ik = kk.createRenderPipelineAsync;
      kk.createRenderPipelineAsync = function(kk) {
        return ik.call(this, kk).catch((Fk => {
          throw Xk(kk.label, Fk), Fk
        }))
      };
      const yk = kk.createComputePipelineAsync;
      kk.createComputePipelineAsync = function(kk) {
        return yk.call(this, kk).catch((Fk => {
          throw Xk(kk.label, Fk), Fk
        }))
      }
    }
  },
  40882: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/bloxd_wasm_models_bg.48f1457bc8fb4903ee57.wasm"
  },
  40874: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/bloxd_wasm_workers_bg.51c0924193aa4e57b2ad.wasm"
  },
  40870: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      f: () => Xk
    });
    const Xk = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new Ik.U(Ik(40874))
      }
    };
    const Tk = {
      name: "bloxd_wasm_models",
      url: function() {
        return new Ik.U(Ik(40882))
      }
    }
  },
  6614: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Kk,
      d: () => Qk,
      g: () => xk,
      k: () => Jk
    });
    var Xk = Ik(6622);
    const Tk = 6,
      ik = 3,
      yk = 1,
      lk = 2,
      ak = 4,
      qk = 8,
      Lk = 16,
      tk = 32,
      Zk = 64,
      jk = 128,
      ek = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function wk(kk) {
      if (!kk) return 0;
      const Fk = ek.indexOf(kk);
      if (Fk <= 0) throw new Error(`"${kk}" is not a shader pack hook function`);
      return Fk
    }

    function Hk(kk) {
      if (0 === kk) return null;
      const Fk = ek[kk];
      if (void 0 === Fk) throw new Error(`${kk} is not a shader pack hook function id`);
      return Fk
    }

    function Jk(kk) {
      const Fk = Xk.b.length;
      return {
        strict: kk >= Fk,
        program: Xk.b[kk % Fk]
      }
    }

    function xk(kk) {
      return Number(kk.strict) * Xk.b.length + Xk.b.indexOf(kk.program)
    }

    function Pk(kk) {
      return "" === kk ? [] : kk.split(" ")
    }

    function Kk(kk) {
      const Fk = {
        variantFlags: new Uint8Array(Tk),
        hooks: new Uint8Array(Tk * ik),
        moduleCodes: Array(Tk).fill(""),
        reads: Array(2 * Tk).fill("")
      };
      for (const Ik of kk) {
        const kk = xk(Ik.key),
          Xk = (kk, Fk) => null === Ik.hooks.surface || Ik.reads.fragment.includes(kk) ? 0 : Fk;
        Fk.variantFlags[kk] = (Ik.sceneDepth ? yk : 0) | (Ik.movesVertices ? lk : 0) | (Ik.sunShadow ? ak : 0) | (Ik.airShadow ? qk : 0) | (Ik.discards ? Lk : 0) | Xk("localPosition", tk) | Xk("enchantSpeed", Zk) | Xk("enchantTier", jk), Fk.hooks[kk * ik] = wk(Ik.hooks.vertex), Fk.hooks[kk * ik + 1] = wk(Ik.hooks.surface), Fk.hooks[kk * ik + 2] = wk(Ik.hooks.light), Fk.moduleCodes[kk] = Ik.moduleCode, Fk.reads[2 * kk] = Ik.reads.vertex.join(" "), Fk.reads[2 * kk + 1] = Ik.reads.fragment.join(" ")
      }
      return Fk
    }

    function Qk(kk) {
      const {
        hooks: Fk,
        moduleCodes: Ik,
        reads: Xk
      } = kk;
      return Array.from(kk.variantFlags, ((kk, Tk) => {
        const tk = Tk * ik;
        return {
          key: Jk(Tk),
          hooks: {
            vertex: Hk(Fk[tk]),
            surface: Hk(Fk[tk + 1]),
            light: Hk(Fk[tk + 2])
          },
          moduleCode: Ik[Tk],
          sceneDepth: 0 !== (kk & yk),
          sunShadow: 0 !== (kk & ak),
          airShadow: 0 !== (kk & qk),
          movesVertices: 0 !== (kk & lk),
          discards: 0 !== (kk & Lk),
          reads: {
            vertex: Pk(Xk[2 * Tk]),
            fragment: Pk(Xk[2 * Tk + 1])
          }
        }
      }))
    }
  },
  40708: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => jk,
      G: () => ek,
      e: () => Tk,
      h: () => Xk,
      i: () => Zk,
      k: () => Lk,
      l: () => Hk,
      m: () => ik,
      q: () => lk,
      s: () => ak,
      v: () => yk,
      y: () => wk
    });
    const Xk = 3,
      Tk = 0,
      ik = 1,
      yk = 2,
      lk = {
        uniform: 3,
        GZ: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      ak = 10,
      qk = "BloxdPackInputs",
      Lk = "bloxdPackInputs",
      tk = [{
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
      Zk = 80;

    function jk() {
      const kk = tk.map((kk => {
        let {
          name: Fk,
          type: Ik
        } = kk;
        return `    ${Fk}: ${Ik},\n`
      })).join("");
      return `struct ${qk} {\n${kk}}\n@group(${Xk}) @binding(${Tk}) var<uniform> ${Lk}: ${qk};\n`
    }

    function ek(kk, Fk) {
      const Ik = new DataView(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Zk),
        [Xk, Tk, ik, yk, lk, ak] = tk;
      Ik.setFloat32(Xk.offset, Fk.seconds, !0), Ik.setUint32(Tk.offset, Fk.lit ? 1 : 0, !0);
      for (let qk = 0; qk < 3; qk++) Ik.setInt32(ik.offset + 4 * qk, Fk.renderOffset[qk], !0), Ik.setFloat32(yk.offset + 4 * qk, Fk.Fkk[qk], !0), Ik.setFloat32(lk.offset + 4 * qk, Fk.eyePosition[qk], !0), Ik.setFloat32(ak.offset + 4 * qk, Fk.shadowDirection[qk], !0)
    }

    function wk(kk) {
      const Fk = new Uint32Array(Math.max(1, kk.length));
      return kk.forEach(((kk, Ik) => {
        let {
          id: Xk,
          rotation: Tk
        } = kk;
        Fk[Ik] = 65535 & Xk | (3 & Tk) << 16
      })), Fk
    }
    const Hk = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);