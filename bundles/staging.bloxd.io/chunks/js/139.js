export const id = 139;
export const ids = [139];
export const modules = {
  40716: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm,
      i: () => Rm,
      k: () => xm,
      l: () => Am,
      m: () => wm,
      o: () => im
    });
    class hm extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Am(mm) {
      return mm instanceof RangeError && /call stack/i.test(mm.message) || mm instanceof Error && "InternalError" === mm.name && /recursion/i.test(mm.message)
    }
    const am = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function xm(mm) {
      var Tm;
      return mm instanceof WebAssembly.RuntimeError || mm instanceof hm || Am(mm) && am.test(null !== (Tm = mm.stack) && void 0 !== Tm ? Tm : "")
    }

    function wm(mm, Tm) {
      if (xm(mm)) throw mm;
      console.error(Tm, mm)
    }

    function Dm(mm, Tm, fm, Am, am) {
      if (Tm % Am !== 0 || Tm + fm > mm.byteLength) throw new hm(`${am}: ${fm} bytes at ${Tm}, ${Am}-aligned, outside ${mm.byteLength} bytes of memory`)
    }

    function im(mm, Tm, fm, hm, Am) {
      return 0 === fm ? null : (Dm(Tm, fm, hm * mm.BYTES_PER_ELEMENT, mm.BYTES_PER_ELEMENT, Am), new mm(Tm, fm, hm))
    }

    function Rm(mm, Tm, fm, hm, Am) {
      return 0 === Tm ? null : (Dm(mm, Tm, fm, hm, Am), new DataView(mm, Tm, fm))
    }
  },
  40793: (mm, Tm, fm) => {
    fm.d(Tm, {
      A: () => um,
      B: () => Mm,
      D: () => sm,
      H: () => Lm,
      L: () => AT,
      N: () => Bm,
      P: () => lm,
      S: () => tm,
      W: () => gm,
      Z: () => xT,
      _: () => mT,
      b: () => aT,
      cb: () => bm,
      f: () => RT,
      j: () => Fm,
      k: () => hT,
      o: () => dm,
      p: () => fT,
      t: () => TT,
      v: () => iT,
      x: () => rm
    });
    var hm = fm(339),
      Am = fm(281),
      am = fm(284),
      xm = fm(23),
      wm = fm(2813),
      Dm = fm(713),
      im = fm(4455),
      Rm = fm(2785),
      pm = fm(3461),
      Em = fm(105),
      om = fm(336),
      Om = fm(37),
      Ym = fm(330),
      qm = fm(118),
      jm = fm(667),
      Vm = fm(130),
      Im = fm(123),
      Km = fm(4741),
      Qm = fm(40798),
      nm = fm(1782),
      Jm = fm(40807),
      cm = fm(40814);
    const zm = "bloxd-webgpuOffAfterLoss",
      Zm = "context:webgl",
      km = "probe:threw";

    function bm(mm) {
      let Tm;
      try {
        Tm = mm.getContext("webgl", {
          powerPreference: Vm.e
        })
      } catch {
        Tm = null
      }
      if (null === Tm) return null;
      let fm = null;
      try {
        const mm = Tm.getParameter(Tm.MAX_TEXTURE_SIZE);
        fm = "number" === typeof mm && mm > 0 ? mm : null
      } catch {
        fm = null
      }
      try {
        var hm;
        null === (hm = Tm.getExtension("WEBGL_lose_context")) || void 0 === hm || hm.loseContext()
      } catch {}
      return fm
    }
    const Sm = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      em = "mali_valhall",
      Nm = new Set(["nvidia_pre_turing"]);

    function Gm(mm) {
      return function(mm) {
        try {
          return mm()
        } catch {
          return null
        }
      }((() => {
        var Tm, fm, hm, xm;
        const wm = null !== (Tm = null === (fm = mm.info) || void 0 === fm ? void 0 : fm.vendor) && void 0 !== Tm ? Tm : "";
        return "windows" === (0, Em.getOperatingSystem)() && "" !== wm && "intel" !== (0, Em.normaliseGpuVendor)(wm) ? null : ((0, Em.seedGpuVendor)(wm), Dm = (0, Am.h)(), im = (0, am.h)(wm, null !== (hm = null === (xm = mm.info) || void 0 === xm ? void 0 : xm.architecture) && void 0 !== hm ? hm : ""), Sm.has(Dm) ? "android_arm" === Dm && im === em ? "webgpu_default" : "webgl_default" : null);
        var Dm, im
      }))
    }

    function Xm() {
      var mm;
      return {
        gpu: null !== (mm = navigator.gpu) && void 0 !== mm ? mm : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(mm) {
          let Tm, fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qm.e;
          try {
            Tm = mm.getContext("webgl")
          } catch {
            Tm = null
          }
          if (null === Tm) return [Zm];
          const hm = [];
          try {
            for (const Am of fm.extensions) null === Tm.getExtension(Am) && hm.push(Am);
            for (const [Am, am] of Object.entries(fm.limits)) {
              const mm = Tm[Am],
                fm = "number" === typeof mm ? Tm.getParameter(mm) : null;
              ("number" !== typeof fm || fm < am) && hm.push(`limit:${Am}`)
            }
            const mm = Tm.getShaderPrecisionFormat(Tm.VERTEX_SHADER, Tm.HIGH_FLOAT);
            (null === mm || mm.precision < fm.vertexHighFloatBits) && hm.push("precision:vertex_high_float")
          } catch {
            hm.push(km)
          }
          try {
            var Am;
            null === (Am = Tm.getExtension("WEBGL_lose_context")) || void 0 === Am || Am.loseContext()
          } catch {}
          return hm
        }(document.createElement("canvas")),
        offAfterLoss: mm => Pm((() => mm ? (0, Ym.F)() : xm.c.isWebGpuOffAfterLoss())),
        oldIntelDriver: mm => Pm((() => (0, qm.f)(mm))),
        intelGen9: mm => Pm((() => (0, qm.p)(mm))),
        storeIntelGen9Verdict: mm => {
          Om.g.setItem(qm.F, mm)
        },
        gpuClassWebGlArm: Gm,
        storeGpuClassVerdict: mm => {
          Om.g.setItem(qm.D, mm)
        },
        gpuClassOnWebGl: mm => (0, jm.d)(mm),
        wasmArmOnWebGl: cm.k,
        storeWasmArmVerdict: mm => {
          Om.g.setItem(qm.M, mm)
        },
        override: () => function() {
          if ((0, wm.o)("render") && "webgl1" === (0, wm.k)("renderer")) return "webgl1";
          const mm = [() => new URLSearchParams(window.location.search).get(Rm.d), () => Om.g.getItem(Rm.f), () => {
            const mm = localStorage.getItem(zm);
            return null !== mm && localStorage.removeItem(zm), "1" === mm ? "webgl2" : null
          }];
          for (const Tm of mm) {
            let mm = null;
            try {
              mm = Hm(Tm())
            } catch {}
            if (null !== mm) return mm
          }
          return null
        }(),
        claimed: () => Hm((0, Dm.g)()),
        webGpuSetting: () => {
          const mm = Om.g.getItem(hm.dc);
          return "boolean" === typeof mm ? mm : null
        },
        heldBack: () => jm.e,
        storeHoldbackSpared: mm => {
          Om.g.setItem(qm.B, mm)
        },
        intelGen9OnWebGl: () => jm.f,
        KO: () => Pm((() => (0, pm.e)(Em.featureFlags.settings.canUseShaderPacks))),
        windows: () => Pm((() => "windows" === (0, Em.getOperatingSystem)()))
      }
    }

    function Pm(mm) {
      try {
        return mm()
      } catch {
        return !1
      }
    }

    function Hm(mm) {
      return "lite" === mm ? "webgpu" : "webgl2" === mm || "babylon" === mm ? "webgl" : null
    }
    async function ym() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xm();
      const Tm = await async function(mm) {
        const Tm = function(mm) {
            const Tm = mm.override(),
              fm = mm.webGpuSetting(),
              hm = null === Tm && !0 !== fm && mm.KO(),
              Am = null !== Tm || null !== fm || hm ? null : mm.claimed(),
              am = null !== Tm ? "override" : !0 === fm ? "setting" : hm ? "pack" : !1 === fm ? "setting" : null !== Am ? "claim" : "default",
              xm = function(mm) {
                return "override" === mm || "setting" === mm
              }(am);
            if ("webgl" === Tm || "webgl1" === Tm || "webgl" === Am || "setting" === am && !1 === fm) return {
              source: am,
              asked: xm,
              refused: "not_requested"
            };
            if (!mm.gpu) return {
              source: am,
              asked: xm,
              refused: "no_webgpu_api"
            };
            const wm = "default" === am && mm.heldBack();
            if (wm && !mm.windows()) return {
              source: am,
              asked: xm,
              refused: "webgl_holdback"
            };
            if (!xm && mm.offAfterLoss("pack" === am)) return {
              source: am,
              asked: xm,
              refused: wm ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: am,
              asked: xm,
              heldBack: wm,
              gpu: mm.gpu
            }
          }(mm),
          {
            source: fm
          } = Tm,
          hm = !Tm.asked,
          Am = "gpu" in Tm && Tm.heldBack,
          xm = function(mm) {
            return Am && "none" !== mm ? {
              reason: "webgl_holdback",
              adapter: null,
              source: fm
            } : {
              reason: mm,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: fm
            }
          };
        if (!("gpu" in Tm)) return xm(Tm.refused);
        let wm;
        try {
          wm = await (0, nm.l)((0, Im.m)(Tm.gpu, {
            compatibility: Tm.asked
          }), wT, `requestAdapter didn't settle in ${wT/1e3} s`)
        } catch {
          return xm("adapter_error")
        }
        if ("string" === typeof wm) return xm(wm);
        const Dm = (0, Im.c)(wm);
        if ((0, Im.h)(wm)) return xm("software_adapter", Dm);
        const im = mm.windows() && function(mm) {
          return Nm.has((0, am.h)(mm.vendor, mm.architecture))
        }(Dm);
        if (mm.storeHoldbackSpared(im), Am && !im) return xm("webgl_holdback");
        const Rm = mm.intelGen9(wm);
        mm.storeIntelGen9Verdict(Rm);
        const pm = Rm ? null : mm.gpuClassWebGlArm(wm);
        mm.storeGpuClassVerdict(null !== pm && void 0 !== pm && pm);
        const Em = mm.wasmArmOnWebGl(Dm);
        if (mm.storeWasmArmVerdict(Em), hm && mm.oldIntelDriver(wm)) return xm("old_intel_driver", Dm);
        if ("default" === fm && Rm && mm.intelGen9OnWebGl()) return xm("intel_gen9", Dm);
        if ("default" === fm && null !== pm && mm.gpuClassOnWebGl(pm)) return xm("gpu_class_webgl", Dm);
        if ("default" === fm && Em) return xm("gpu_wasm_arm", Dm);
        return xm("none", Dm)
      }(mm);
      if ("none" === Tm.reason) return {
        backend: "webgpu",
        ...Tm
      };
      if ("webgl1" !== mm.override() && mm.webgl2()) return {
        backend: "webgl",
        ...Tm
      };
      const fm = mm.webgl1();
      return 0 === fm.length ? {
        backend: "webgl1",
        ...Tm
      } : {
        missing: fm
      }
    }
    let Cm = !1;
    async function rm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xm();
      if (null === mm) return null;
      const fm = await ym(Tm);
      return Cm = !("missing" in fm) && "webgpu" === fm.backend && "claim" === fm.source, "missing" in fm ? fm : {
        ...fm,
        load: mm[fm.backend]
      }
    }
    async function sm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xm().gpu,
        hm = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== mm.backend) return !1;
      const Am = Um(mm, Tm, "indirectDraws", "off", "on");
      if (null !== Am) return Am;
      if (null !== mm.adapter && (0, qm.q)(mm.adapter, hm)) return !0;
      if (null === fm) return !1;
      try {
        var am;
        const mm = await (0, nm.l)(fm.requestAdapter({
          powerPreference: "low-power"
        }).then((async mm => (null !== mm && await (0, Im.e)(mm), mm))), wT, `the low-power requestAdapter didn't settle in ${wT/1e3} s`);
        return (0, qm.q)(null !== (am = null === mm || void 0 === mm ? void 0 : mm.info) && void 0 !== am ? am : {}, hm)
      } catch (xm) {
        return xm instanceof nm.g
      }
    }

    function lm(mm, Tm, fm) {
      if ("webgpu" !== mm.backend) return !1;
      const hm = Um(mm, Tm, "terrainFetch", "texture", "storage");
      return null !== hm ? hm : null !== mm.adapter && (0, qm.j)(mm.adapter, fm)
    }

    function Mm(mm, Tm) {
      if ("webgpu" !== mm.backend) return !1;
      const fm = Um(mm, Tm, "skyOrder", "early", "last");
      return null !== fm ? fm : null !== mm.adapter && (0, am.h)(mm.adapter.vendor, mm.adapter.architecture) === em
    }

    function um(mm, Tm) {
      if ("webgpu" !== mm.backend) return !1;
      const fm = Um(mm, Tm, "uploadCopies", "off", "on");
      return null !== fm ? fm : null !== mm.adapter && "powervr_rogue" === (0, am.h)(mm.adapter.vendor, mm.adapter.architecture)
    }

    function Bm(mm, Tm, fm) {
      if ("webgpu" !== mm.backend) return !1;
      const hm = Um(mm, Tm, "sceneDepth", "off", "on");
      return null !== hm ? hm : null !== mm.adapter && (0, qm.n)(mm.adapter, fm)
    }

    function Lm(mm, Tm) {
      return "webgl" === mm.backend ? Um(mm, Tm, "instancedTerrain", "1", "0") : null
    }

    function tm(mm, Tm) {
      return "webgpu" !== mm.backend || Tm && (null === mm.adapter || !(0, Ym.H)(mm.adapter))
    }

    function Um(mm, Tm, fm, hm, Am) {
      const am = new URLSearchParams(Tm).get(fm),
        xm = null !== am && void 0 !== am ? am : (0, Dm.e)(fm);
      return xm !== hm && xm !== Am ? null : (Cm ||= null === am && "webgpu" === mm.backend, xm === hm)
    }

    function dm(mm) {
      return null !== mm && "missing" in mm
    }

    function gm(mm) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !mT()) ? function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xm.c;
        try {
          const fm = "start_failed" === mm || "pipeline_failed" === mm,
            hm = Tm.turnOffWebGpuAfterDeviceLoss(fm ? "visible" : (0, Ym.i)((0, om.j)()), fm);
          return Cm && (0, Dm.p)("webgpuLoss"), Tm.isWebGpuOffAfterLoss() && "webgpu" === Hm(Om.g.getItem(Rm.f)) && Om.g.removeItem(Rm.f), (0, wm.o)("webgpuloss") && (0, im.e)((Tm => {
            Tm.noteWebGpuLoss("wasm", hm ? mm : `${mm}, which storage didn't keep`, null)
          })), hm
        } catch {
          return !1
        }
      }(mm) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Wm = "framePacing";

    function Fm(mm) {
      const Tm = new URLSearchParams(mm).get(Wm);
      return null !== Tm && /^\d{1,9}$/.test(Tm) ? Number(Tm) : void 0
    }

    function mT() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === Hm(new URLSearchParams(mm).get(Rm.d))
      } catch {
        return !1
      }
    }

    function TT(mm) {
      return !!fT(mm) || mm instanceof Error && !(mm instanceof WebAssembly.RuntimeError) && mm.message.startsWith(`${Km.p.RenderSurfaceUnusable}:`)
    }

    function fT(mm) {
      const {
        name: Tm,
        message: fm
      } = null !== mm && void 0 !== mm ? mm : {};
      return "InvalidStateError" === Tm && "string" === typeof fm && fm.startsWith("GPUDevice.")
    }

    function hT(mm) {
      const Tm = mm;
      return "function" === typeof Tm.tfm && "function" === typeof Tm.Ufm ? Tm : null
    }

    function AT(mm) {
      return "function" === typeof mm.Uq ? mm : null
    }
    const aT = "openRenderer";

    function xT(mm) {
      const Tm = null === mm || void 0 === mm ? void 0 : mm.Oam();
      return void 0 === Tm ? void 0 : new Error(Tm)
    }
    const wT = 5e3,
      DT = 15e3;

    function iT(mm, Tm, fm, hm, Am, am) {
      return (0, nm.l)(function(mm, Tm, fm, hm, Am, am) {
        return (0, Jm.h)(mm, Tm, (() => mm.Uq(fm, hm, Am, am.indirectHangs, am.storagePullBreaks, am.splitPassBreaks, am.earlySky, am.instancedTerrain, am.cellLight, am.framesAhead, am.webGpuRestores, am.bufferCopiesCrash)))
      }(mm, Tm, fm, hm, Am, am), DT, `${Km.p.RenderSurfaceUnusable}: the renderer didn't open in ${DT/1e3} s`, pT)
    }
    async function RT(mm, Tm, fm, hm, Am, am) {
      if ("function" !== typeof mm.ixm) throw new Error("this core has no set_renderer");
      const xm = await iT(Tm, aT, fm, Am, hm, am);
      try {
        mm.ixm(xm)
      } catch (wm) {
        throw pT(xm), wm
      }
    }

    function pT(mm) {
      try {
        mm.free()
      } catch {}
    }
  },
  40905: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    const hm = {
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
  40830: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Om,
      e: () => Ym,
      f: () => Em,
      j: () => pm
    });
    const hm = 2e3,
      Am = "unavailable";
    let am = () => Promise.resolve().then((() => fm(2935))),
      xm = null,
      wm = null,
      Dm = im();

    function im() {
      let mm = () => {};
      return {
        promise: new Promise((Tm => {
          mm = () => {
            Tm(null)
          }
        })),
        resolve: mm
      }
    }

    function Rm() {
      if (null === xm) {
        const mm = am();
        xm = mm, mm.then((Tm => {
          xm === mm && (wm = Tm)
        }), (() => {
          xm === mm && (xm = null)
        }))
      }
      return xm
    }

    function pm() {
      Rm().catch((() => {}))
    }

    function Em() {
      Dm.resolve()
    }

    function om(mm, Tm, fm, hm) {
      if (null === mm) return {
        errorKind: Tm,
        fingerprint: Am,
        dedupe: `${Tm}|${hm}`
      };
      const {
        fingerprint: am
      } = mm.clientErrorKey(Tm, fm, hm);
      return {
        errorKind: Tm,
        fingerprint: am,
        dedupe: am
      }
    }

    function Om(mm, Tm, fm, hm) {
      return null === wm ? hm ? (pm(), om(null, mm, Tm, fm)) : null : om(wm, mm, Tm, fm)
    }
    async function Ym(mm, Tm, fm) {
      let Am;
      const am = new Promise((mm => {
        Am = setTimeout((() => {
          mm(null)
        }), hm)
      }));
      try {
        return om(await Promise.race([Rm(), am, Dm.promise]), mm, Tm, fm)
      } catch {
        return om(null, mm, Tm, fm)
      } finally {
        clearTimeout(Am)
      }
    }
  },
  40821: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      BUILT_IN_ANIMATIONS_SITE: () => tm,
      CORE_ERRORS_SITE: () => Hm,
      EVENT_OVERFLOW_SITE: () => Lm,
      FIRST_VIEW_SITE: () => gm,
      JOIN_SITE: () => Cm,
      LEAVE_SITE: () => rm,
      MAIN_THREAD_SITE: () => Wm,
      MODEL_FEED_SITE: () => sm,
      MODEL_POOL_SITE: () => lm,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => fT,
      NON_FATAL_REPORTS_PER_SESSION: () => KT,
      PREVIEW_ANIMATIONS_SITE: () => Bm,
      RENDER_RELOAD_SITE: () => um,
      REQUEST_DEVICE_SITE: () => Fm,
      TEXTURE_NAMES_SITE: () => Mm,
      TEXTURE_PACK_FEED_SITE: () => Um,
      TEXTURE_PACK_SWAP_SITE: () => dm,
      TurnstilePageError: () => ff,
      WASM_LOAD_SITE: () => ym,
      countRenderLost: () => yf,
      crashError: () => ZT,
      crashReportsSettled: () => PT,
      deviceLossWords: () => Gf,
      flushCrashReports: () => GT,
      joinFailureCode: () => hf,
      lokiTransport: () => aT,
      modelFailureCode: () => pf,
      readTrap: () => lT,
      renderLoss: () => Hf,
      renderReloadMessage: () => Xf,
      reportCoreErrors: () => CT,
      reportCountedLoadFallback: () => mf,
      reportCrash: () => kT,
      reportDataLoadFailure: () => Mf,
      reportDisconnect: () => Df,
      reportDracoDecoderFailure: () => Yf,
      reportDroppedRequiredLimits: () => WT,
      reportEventOverflow: () => If,
      reportFirstViewNoTerrain: () => zf,
      reportGpuFallback: () => gT,
      reportGpuWasmPopulation: () => FT,
      reportLightFault: () => Qf,
      reportMainStall: () => Zf,
      reportMemoryShed: () => Jf,
      reportModelFailure: () => Ef,
      reportModelPoolFailure: () => of,
      reportModelsModuleRetry: () => Of,
      reportPageJoinFailure: () => af,
      reportReconnectGaveUp: () => Rf,
      reportRenderReload: () => rf,
      reportReplayFault: () => bf,
      reportStaleBuildReload: () => Bf,
      reportStoppedCore: () => LT,
      reportTerrainTextureFailure: () => sf,
      reportTexturePackFeedLoadFailure: () => jf,
      reportTexturePackKeptOut: () => Vf,
      reportUnstreamedCoreLoad: () => Tf,
      reportUnsupportedFallback: () => UT,
      reportUnusedSeat: () => wf,
      reportWorkerLost: () => Kf,
      reportWorkerStartTimeout: () => kf,
      reportWorldgenGaveUp: () => nf,
      reportWorldgenLoadFailure: () => qf,
      resetCrashReports: () => HT,
      setCrashAdPreload: () => OT,
      setCrashBackend: () => oT,
      setCrashScreen: () => RT,
      setCrashTransport: () => DT,
      showCrash: () => BT,
      showJoinFailure: () => Af,
      showUnsupported: () => tT,
      unknownSkyWords: () => yT
    });
    var hm = fm(1103),
      Am = fm(284),
      am = fm(2944),
      xm = fm(4238),
      wm = fm(40830),
      Dm = fm(4732),
      im = fm(40832),
      Rm = fm(2979),
      pm = fm(38858),
      Em = fm(135),
      om = fm(730),
      Om = fm(130),
      Ym = fm(2982),
      qm = fm(36573),
      jm = fm(1782),
      Vm = fm(40841),
      Im = fm(40669),
      Km = fm(40765),
      Qm = fm(40769),
      nm = fm(36564),
      Jm = fm(2873),
      cm = fm(2876),
      zm = fm(40864),
      Zm = fm(40878),
      km = fm(40887),
      bm = fm(36943),
      Sm = fm(3224),
      em = fm(36348),
      Nm = fm(40807),
      Gm = fm(36363),
      Xm = fm(40913);
    const Pm = "[bloxd-wasm-client]",
      Hm = "coreErrors",
      ym = "wasmLoad",
      Cm = "join",
      rm = "leave",
      sm = "modelFeed",
      lm = "modelWorkerPool",
      Mm = "textureNames",
      um = "renderReload",
      Bm = "previewAnimations",
      Lm = "eventOverflow",
      tm = "builtInAnimations",
      Um = "texturePackFeed",
      dm = "texturePackSwap",
      gm = "firstView",
      Wm = "mainThread",
      Fm = "requestDevice",
      mT = 300,
      TT = 64,
      fT = 8;
    let hT = 0;
    const AT = new Set,
      aT = (mm, Tm) => {
        const fm = YT[mm.kind],
          hm = {
            backend: pT,
            adPreload: ET
          };
        if (null === fm) return void xT(mm, Tm, hm, null);
        const Am = (0, wm.d)(fm, mm.message, mm.code, mm.fatal);
        null === Am ? NT("Loki", (async () => {
          xT(mm, Tm, hm, await (0, wm.e)(fm, mm.message, mm.code))
        })) : xT(mm, Tm, hm, Am)
      };

    function xT(mm, Tm, fm, Am) {
      let {
        backend: xm,
        adPreload: wm
      } = fm;
      const {
        kind: Dm,
        code: im,
        site: Rm,
        fatal: pm,
        details: Em
      } = mm;
      if (!pm)
        if (null === Am || (0, am.b)(Am.errorKind) || AT.has(Am.dedupe)) {
          if (hT >= fT) return;
          hT++
        } else AT.add(Am.dedupe);
      const om = {
        ...Em,
        kind: Dm,
        code: im,
        site: Rm,
        fatal: String(pm),
        backend: xm
      };
      wm && (om.adPreload = "true"), null !== Am && (om.errorKind = Am.errorKind, om.fingerprint = Am.fingerprint), Tm instanceof Error && "string" === typeof Tm.stack && (om.causeStack = Tm.stack.slice(0, 2e3)), (0, hm.lY)(ZT(mm, Tm), om)
    }
    let wT = aT;

    function DT(mm) {
      const Tm = wT;
      return wT = mm, Tm
    }
    let iT = () => {};

    function RT(mm) {
      const Tm = iT;
      return iT = mm, Tm
    }
    let pT = "unpicked",
      ET = !1;

    function oT(mm) {
      pT = mm
    }

    function OT(mm) {
      ET = mm
    }
    const YT = {
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
      qT = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        gpuFallback: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      jT = new Set(["unstreamedLoad"]),
      VT = new Set(["linkCensus", "linksReadAfterView"]);
    let IT = !1;
    const KT = 20,
      QT = new Map;
    let nT = 0,
      JT = 0;
    const cT = new Set,
      zT = new Set;

    function ZT(mm, Tm) {
      const fm = Object.assign(new Error(`${mm.code}: ${mm.message}`), {
        name: "WasmClientCrash",
        cause: null !== Tm && void 0 !== Tm ? Tm : void 0
      });
      return Tm instanceof Error && Tm.stack && (fm.stack = Tm.stack), fm
    }

    function kT(mm) {
      var Tm, hm;
      const {
        kind: Am,
        code: am,
        site: xm,
        fatal: wm,
        message: Dm,
        error: im
      } = mm, Rm = !1 !== mm.toTransport && !jT.has(Am), pm = !wm && Rm && !VT.has(Am), Em = {
        kind: Am,
        code: am,
        site: xm,
        fatal: wm,
        message: Dm,
        details: null !== (Tm = mm.details) && void 0 !== Tm ? Tm : {}
      }, om = `${am}@${xm}${void 0===mm.instance?"":`#${mm.instance}`}${wm?"!":""}`, Om = (null !== (hm = QT.get(om)) && void 0 !== hm ? hm : 0) + 1;
      if (QT.set(om, Om), void 0 !== mm.countAs && 1 === Om && ST(mm.countAs), Om > 1 ? 0 === (Om & Om - 1) && eT((() => {
          console.warn(`${Pm} ${am} at ${xm} reported ${Om} times`)
        })) : pm && nT >= KT ? eT((() => {
          console.warn(`${Pm} ${Am} ${am} at ${xm}: ${Dm} (not sent: the session's ${KT} went)`, Em.details, null !== im && void 0 !== im ? im : "")
        })) : (pm && nT++, function(mm, Tm, hm, Am) {
          var am, xm;
          const {
            kind: wm,
            code: Dm,
            site: im,
            fatal: Rm,
            message: pm,
            details: Em
          } = mm;
          eT((() => {
            (Rm ? console.error : console.warn)(`${Pm} ${wm} ${Dm} at ${im}: ${pm}`, Em, null !== Tm && void 0 !== Tm ? Tm : "")
          }));
          const om = qT[wm],
            Om = null !== (am = null !== (xm = YT[wm]) && void 0 !== xm ? xm : om) && void 0 !== am ? am : null;
          Am || null === Om || bT((async () => {
            const {
              reportCappedWasmFailure: mm,
              reportUncappedWasmFailure: Tm,
              reportWasmFailure: hm
            } = await fm.e(209).then((() => fm(36340)));
            (VT.has(wm) ? Tm : void 0 === om ? hm : mm)(Om, pm, Dm)
          }));
          hm && eT((() => {
            wT(mm, Tm)
          }))
        }(Em, im, Rm, void 0 !== mm.countAs)), wm) {
        var Ym;
        const Tm = null !== (Ym = mm.screen) && void 0 !== Ym ? Ym : {
          text: (0, bm.e)(Em, !0),
          reload: !0
        };
        eT((() => {
          iT(Tm)
        }))
      }
      return Em
    }

    function bT(mm) {
      NT("counts", (async () => {
        const {
          peekVisitSessionId: Tm
        } = await Promise.resolve().then((() => fm(690)));
        null !== Tm() && (await mm(), IT = !0)
      }))
    }

    function ST(mm) {
      cT.has(mm.errorKind) || (cT.add(mm.errorKind), bT((async () => {
        const {
          reportClientError: Tm
        } = await Promise.resolve().then((() => fm(2932)));
        Tm(mm.errorKind, mm.error, mm.code, !0, void 0, mm.fields)
      })))
    }

    function eT(mm) {
      try {
        mm()
      } catch (Tm) {
        try {
          console.warn(`${Pm} could not send a report`, Tm)
        } catch {}
      }
    }

    function NT(mm, Tm) {
      try {
        const fm = Tm().catch((Tm => {
          console.warn(`${Pm} could not send the report to ${mm}`, Tm)
        })).finally((() => {
          zT.delete(fm)
        }));
        zT.add(fm)
      } catch (fm) {
        console.warn(`${Pm} could not send the report to ${mm}`, fm)
      }
    }
    async function GT(mm) {
      let Tm;
      (0, wm.f)();
      const fm = new Promise((fm => {
        Tm = setTimeout(fm, mm)
      }));
      await Promise.race([XT(), fm]), clearTimeout(Tm)
    }
    async function XT() {
      if (await Promise.allSettled([...zT]), IT) try {
        const {
          flushClientAnalyticsEvents: mm
        } = await Promise.resolve().then((() => fm(1491)));
        await mm()
      } catch (mm) {
        console.warn(`${Pm} could not send the counts`, mm)
      }
    }
    async function PT() {
      for (; zT.size > 0;) await Promise.allSettled([...zT])
    }

    function HT() {
      QT.clear(), nT = 0, IT = !1, hT = 0, AT.clear(), JT = 0, cT.clear(), (0, im.t)()
    }

    function yT(mm) {
      const Tm = "object" === typeof mm && null !== mm ? mm.type : mm;
      return "string" !== typeof Tm ? "sky not named" : `sky ${JSON.stringify(Array.from(Tm).slice(0,TT).join(""))}`
    }

    function CT(mm, Tm, fm, hm) {
      JT += Tm;
      for (const {
          code: wm,
          detail: Rm
        }
        of mm) {
        var Am, am, xm;
        const mm = (0, Dm.ee)(wm),
          Tm = (0, im.d)(wm, Rm),
          pm = null === hm || void 0 === hm ? void 0 : hm(wm, Rm),
          Em = void 0 !== (null === Tm || void 0 === Tm ? void 0 : Tm.gpuDetails),
          om = Em ? null === (Am = (0, Om.p)()) || void 0 === Am ? void 0 : Am.renderer : void 0,
          Ym = Em ? ` ${(0,im.k)()}` : "",
          qm = Array.from([om && `gpu ${(0,im.v)(om)}`, pm].filter(Boolean).join("; ")).slice(0, mT).join(""),
          jm = `core error ${mm}${null!==(am=null===Tm||void 0===Tm?void 0:Tm.words)&&void 0!==am?am:""}${Ym}${qm?`: ${qm}`:""}`,
          Vm = {
            errorCode: String(wm),
            detail: String(Rm),
            droppedBefore: String(JT),
            wasmBuild: fm.wasm,
            clientVersion: fm.client,
            ...null === Tm || void 0 === Tm ? void 0 : Tm.gpuDetails
          };
        null !== Tm && (0, im.q)(Tm) ? eT((() => {
          console.warn(`${Pm} coreError CORE-${mm}: ${jm} (not sent: the session's render warnings of its kind went)`, Vm)
        })) : kT({
          kind: sT(wm, Rm),
          code: `CORE-${mm}`,
          site: Hm,
          fatal: !1,
          message: jm,
          details: Vm,
          instance: null !== (xm = null === Tm || void 0 === Tm ? void 0 : Tm.instance) && void 0 !== xm ? xm : rT(wm, Rm)
        })
      }
    }

    function rT(mm, Tm) {
      return mm === Dm.Q.RenderDeviceLost && 0 !== (Tm & Dm.V.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function sT(mm, Tm) {
      return mm === Dm.Q.JobsHeapGaveUp ? "meshHeap" : (0, im.g)(mm, Tm) ? "linksReadAfterView" : (0, im.e)(mm, Tm) ? "linkCensus" : "coreError"
    }

    function lT(mm) {
      return (0, em.m)(mm instanceof Nm.e ? mm.trap : mm, Jm.G, Jm.fb)
    }
    const MT = "declined=js";

    function uT(mm) {
      return mm ? {
        labels: [MT],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function BT(mm, Tm, fm) {
      return vT(mm, Tm, fm, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function LT(mm, Tm, fm) {
      return vT(mm, Tm, fm, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function vT(mm, Tm, fm, hm, Am) {
      let {
        memoryDetails: am = {},
        declined: xm = !1
      } = hm;
      const {
        code: wm,
        details: Dm,
        message: im
      } = (0, Vm.I)(mm, Tm), Rm = [];
      Object.assign(Dm, (0, Gm.f)(mm.error)), null !== fm && (Dm.trapKind = fm.kind, null !== fm.panic && (Dm.panic = (0, em.i)(fm.panic)), fm.refusedBytes > 0 && (Dm.refusedAllocation = String(fm.refusedBytes)), Rm.push((0, em.q)(fm.kind, fm.refusedBytes)));
      const pm = uT(xm);
      return kT({
        kind: "crash",
        code: wm,
        site: mm.site,
        fatal: Am,
        message: [...Rm, ...pm.labels, im].join("; "),
        details: {
          ...Dm,
          ...pm.details,
          ...am
        },
        error: mm.error
      })
    }

    function tT(mm, Tm, fm) {
      return kT({
        kind: "unsupported",
        code: Tm,
        site: ym,
        fatal: !0,
        message: fm,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: mm,
          status: Tm
        },
        screen: {
          text: (0, bm.q)(mm),
          reload: "download" === mm
        }
      })
    }

    function UT(mm, Tm, fm) {
      return kT({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === Tm ? "blocked_after_loss" : "unsupported_js_fallback",
        site: ym,
        fatal: !1,
        message: fm,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: mm,
          status: "unsupported",
          decline: Tm,
          fallback: "js"
        }
      })
    }
    const dT = "misdrawn_gpu_js_fallback";

    function gT(mm, Tm) {
      return kT({
        kind: "gpuFallback",
        code: dT,
        site: ym,
        fatal: !1,
        message: `the renderer plays ${mm} on ${Tm} worse than the JS client`,
        details: {
          gpuFamily: mm,
          backend: Tm,
          fallback: "js"
        }
      })
    }

    function WT(mm) {
      return kT({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: Fm,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: mm.join(",")
        }
      })
    }

    function FT(mm) {
      NT("counts", (async () => {
        await (0, om.b)(mm), IT = !0
      }))
    }

    function mf(mm, Tm, fm, hm) {
      const Am = uT(hm);
      return kT({
        kind: "unsupported",
        code: Tm,
        site: ym,
        fatal: !1,
        message: [...Am.labels, fm].join("; "),
        details: {
          cause: mm,
          status: Tm,
          fallback: "js",
          ...Am.details
        }
      })
    }

    function Tf() {
      const {
        code: mm,
        message: Tm
      } = Sm.e;
      return kT({
        kind: "unstreamedLoad",
        code: mm,
        site: ym,
        fatal: !1,
        message: Tm
      })
    }
    class ff extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function hf(mm) {
      return mm instanceof Km.j ? 0 === mm.code ? "JOIN-matchmake" : `JOIN-${mm.code}` : mm instanceof Km.b ? 0 === mm.code ? `JOIN-${mm.stage}` : `JOIN-${mm.stage}-${mm.code}` : mm instanceof Im.d ? "JOIN-gameCode" : mm instanceof ff ? "JOIN-turnstilePage" : mm instanceof Km.s ? "JOIN-trafficCheck" : mm instanceof qm.e ? "JOIN-timeout" : "JOIN-network"
    }

    function Af(mm, Tm) {
      const fm = (0, Gm.l)(mm),
        hm = {
          wasmBuild: Tm.wasm,
          clientVersion: Tm.client
        },
        Am = mm instanceof ff ? {
          text: (0, bm.j)(),
          reload: !1
        } : void 0,
        am = (0, Qm.g)(mm),
        xm = "expected" !== am;
      return kT({
        kind: "join",
        code: hf(mm),
        site: Cm,
        fatal: !0,
        message: fm,
        details: hm,
        error: mm,
        screen: Am,
        toTransport: xm,
        instance: am
      })
    }

    function af(mm, Tm, fm) {
      var hm;
      const Am = (0, Qm.g)(mm),
        am = {
          cause: (mm instanceof Km.b || mm instanceof Km.j) && null !== (hm = mm.serverText) && void 0 !== hm ? hm : "",
          sinceJoinStart: (0, Ym.c)(fm.sinceJoinStartMs),
          game: fm.game,
          ...(0, Ym.n)(),
          wasmBuild: Tm.wasm,
          clientVersion: Tm.client
        };
      return kT({
        kind: "pageJoin",
        code: hf(mm),
        site: Cm,
        fatal: !1,
        message: (0, Gm.l)(mm),
        details: am,
        error: mm,
        toTransport: "unrecognised" === Am,
        instance: Am
      })
    }
    const xf = {
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

    function wf(mm, Tm) {
      let {
        unused: fm,
        answered: hm,
        heldMs: Am
      } = mm;
      const {
        code: am,
        message: xm
      } = xf[fm], wm = {
        unused: fm,
        answered: String(hm),
        heldMs: String(Am),
        wasmBuild: Tm.wasm,
        clientVersion: Tm.client
      };
      return kT({
        kind: "seat",
        code: am,
        site: Cm,
        fatal: !1,
        message: xm,
        details: wm
      })
    }

    function Df(mm, Tm, fm) {
      var hm;
      let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (hm = mm.name) && void 0 !== hm ? hm : String(mm.code);
      const am = {
          closeCode: String(mm.code),
          recognised: String(null !== mm.name),
          closeReason: fm.closeReason,
          sinceJoined: (0, Ym.c)(fm.sinceJoinedMs),
          game: fm.game,
          ...(0, Ym.n)(),
          wasmBuild: Tm.wasm,
          clientVersion: Tm.client
        },
        xm = null === mm.name && !(0, Ym.g)(mm.code);
      return kT({
        kind: "disconnect",
        code: Am,
        site: rm,
        fatal: !1,
        message: "Left room",
        details: am,
        toTransport: xm
      })
    }

    function Rf(mm, Tm) {
      const fm = {
        ...(0, Rm.k)(mm),
        wasmBuild: Tm.wasm,
        clientVersion: Tm.client
      };
      return kT({
        kind: "disconnect",
        code: `reconnect-${mm.reason}`,
        site: Cm,
        fatal: !1,
        message: "Reconnect failed",
        details: fm
      })
    }

    function pf(mm) {
      return mm.error instanceof cm.g ? `MODEL-${mm.error.status}` : mm.error instanceof zm.k ? "MODEL-ring" : "MODEL-network"
    }

    function Ef(mm, Tm) {
      const fm = pf(mm),
        hm = `model file ${mm.file} ${mm.startup?"(startup) ":""}could not load`,
        Am = {
          file: String(mm.file),
          url: mm.url,
          wasmBuild: Tm.wasm,
          clientVersion: Tm.client
        };
      return kT({
        kind: mm.startup ? "model" : "modelLate",
        code: fm,
        site: sm,
        fatal: mm.startup,
        message: hm,
        details: Am,
        error: mm.error
      })
    }

    function of(mm, Tm) {
      const fm = {
        wasmBuild: Tm.wasm,
        clientVersion: Tm.client
      };
      return kT({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: lm,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: fm,
        error: mm
      })
    }

    function Of(mm, Tm, fm) {
      const hm = {
        delayMs: String(Tm),
        wasmBuild: fm.wasm,
        clientVersion: fm.client
      };
      mm instanceof cm.g && (hm.status = String(mm.status));
      return kT({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: lm,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: hm,
        error: mm
      })
    }

    function Yf(mm, Tm) {
      const fm = {
        wasmBuild: Tm.wasm,
        clientVersion: Tm.client
      };
      return kT({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: lm,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: fm,
        error: mm
      })
    }

    function qf(mm, Tm) {
      const fm = {
        wasmBuild: Tm.wasm,
        clientVersion: Tm.client
      };
      return kT({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: Vm.B,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: fm,
        error: mm
      })
    }

    function jf(mm, Tm) {
      const fm = {
        wasmBuild: Tm.wasm,
        clientVersion: Tm.client
      };
      return kT({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: Um,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: fm,
        error: mm
      })
    }

    function Vf(mm, Tm, fm, hm) {
      const Am = {
        wasmBuild: hm.wasm,
        clientVersion: hm.client
      };
      return kT({
        kind: "texturePackKeptOut",
        code: (0, xm.f)("wasm", mm, Tm),
        site: dm,
        fatal: !1,
        message: Tm.detail,
        details: Am,
        error: fm
      })
    }

    function If(mm, Tm) {
      const {
        frames: fm,
        acks: hm,
        mask: Am,
        outcome: am
      } = mm, xm = {
        frames: String(fm),
        acks: String(hm),
        mask: String(Am),
        outcome: null !== am && void 0 !== am ? am : "resynced",
        wasmBuild: Tm.wasm,
        clientVersion: Tm.client
      };
      return kT({
        kind: "recovered",
        code: "rejoined" === am ? "CORE-eventOverflowRejoin" : "failed" === am ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: Lm,
        fatal: !1,
        message: `the event buffer refused records in ${fm} frames`,
        details: xm
      })
    }

    function Kf(mm, Tm, fm) {
      return kT({
        kind: "recovered",
        code: "CORE-workerLost",
        site: mm,
        fatal: !1,
        message: `a ${mm} worker was lost`,
        details: {
          reason: Tm,
          wasmBuild: fm.wasm,
          clientVersion: fm.client
        }
      })
    }

    function Qf(mm, Tm, fm) {
      const hm = {
        wasmBuild: fm.wasm,
        clientVersion: fm.client
      };
      return kT({
        kind: "recovered",
        code: mm,
        site: Vm.r,
        fatal: !1,
        message: Tm,
        details: hm
      })
    }

    function nf(mm, Tm) {
      const fm = {
        lastReason: mm,
        wasmBuild: Tm.wasm,
        clientVersion: Tm.client
      };
      return kT({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: Vm.B,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: fm
      })
    }

    function Jf(mm, Tm, fm) {
      return kT({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: Vm.q,
        fatal: !1,
        message: (0, nm.m)(mm) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: mm,
          ...Tm,
          wasmBuild: fm.wasm,
          clientVersion: fm.client
        }
      })
    }

    function zf(mm, Tm, fm, hm) {
      var Am, am;
      const xm = (0, im.m)(),
        wm = {
          game: mm,
          cause: Tm,
          census: null === fm ? "none" : JSON.stringify(fm),
          gpu: null !== (Am = null === (am = (0, Om.p)()) || void 0 === am ? void 0 : am.renderer) && void 0 !== Am ? Am : "",
          renderWarned: String(xm),
          browser: (0, im.k)(),
          wasmBuild: hm.wasm,
          clientVersion: hm.client
        },
        Dm = `first view drew no whole terrain in ${Zm.c/1e3} s, ${Tm}${xm?", render warned":""}`;
      return kT({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: gm,
        fatal: !1,
        message: Dm,
        details: wm
      })
    }

    function Zf(mm, Tm, fm, hm) {
      var am, xm, wm;
      const Dm = null !== (am = (0, Am.n)(null !== (xm = null === (wm = (0, Om.i)()) || void 0 === wm ? void 0 : wm.renderer) && void 0 !== xm ? xm : null, (0, Om.h)())) && void 0 !== am ? am : "unknown",
        Rm = null === Tm ? "untimed" : `${Math.round(Tm)} ms`,
        pm = `frames stalled, ${fm}, gpu ${(0,im.v)(Dm)}, blocking ${Rm}, drawn ${Math.round(mm)} ms apart`,
        Em = {
          gpuModel: Dm,
          wasmBuild: hm.wasm,
          clientVersion: hm.client
        };
      return kT({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: Wm,
        fatal: !1,
        message: pm,
        details: Em
      })
    }

    function kf(mm, Tm, fm) {
      return kT({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: mm,
        fatal: !1,
        message: `a ${mm} worker did not start`,
        details: {
          waitedMs: String(Math.round(Tm)),
          wasmBuild: fm.wasm,
          clientVersion: fm.client
        }
      })
    }

    function bf(mm, Tm, fm) {
      return kT({
        kind: "recovered",
        code: "CORE-replayFault",
        site: mm,
        fatal: !1,
        message: `the replay's ${mm} failed`,
        details: {
          wasmBuild: fm.wasm,
          clientVersion: fm.client
        },
        error: Tm
      })
    }
    const Sf = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function ef(mm) {
      if (0 === mm) return "none";
      const Tm = [60, 600, 3600].find((Tm => mm < Tm));
      return void 0 === Tm ? "ge3600" : `lt${Tm}`
    }

    function Nf(mm, Tm) {
      return null === mm ? "unbound" : (0, pm.i)(Tm - mm)
    }

    function Gf(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (mm & Dm.V.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (mm & Dm.V.LINKS_RUNNING) ? "links running" : "", `frames ${(0,im.v)(ef(mm&Dm.V.FRAMES))}`, `up ${(0,im.v)(Nf(Tm,fm))}`].filter(Boolean).join(", ")
    }

    function Xf(mm, Tm, fm) {
      const hm = "lost" === Tm && void 0 !== fm ? ` (${fm})` : "";
      return `the ${mm} ${Sf[Tm]}${hm}`
    }
    const Pf = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function Hf(mm, Tm, fm, hm) {
      var Am;
      let {
        restoreLost: am = !1,
        adapterRemembered: xm = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, wm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const Dm = null === fm || void 0 === fm ? void 0 : fm.message,
        im = "pipeline_failed" === Tm ? Tm : fm instanceof jm.g ? "timeout" : (0, pm.q)("frames_refused" === Tm, "string" === typeof Dm ? Dm : ""),
        Rm = null === hm.boundAtMs ? "unbound" : `up${(0,pm.g)(wm-hm.boundAtMs)}`,
        Em = null === hm.adapter ? "no adapter" : (0, pm.n)(hm.adapter),
        om = `${!0===hm.indirectHangs?" ih":""}${!0===hm.restoresSkipped?" nr":""}${am?" rl":""}${xm?" ar":""}`,
        Om = `${im} ${(0,jm.k)()?"hidden":"visible"} ${Rm}${om} ${Em}`;
      if ("webgpu" !== mm || "lost" !== Tm && "frames_refused" !== Tm) return {
        detail: Om,
        count: void 0
      };
      return {
        detail: Om,
        count: {
          errorKind: "render_lost",
          error: new Error(Om),
          code: (0, pm.u)(im, null !== (Am = hm.boundAtMs) && void 0 !== Am ? Am : wm, wm).code,
          fields: {
            renderBackend: Xm.b.webgpu
          }
        }
      }
    }

    function yf(mm, Tm, fm) {
      const {
        count: hm
      } = Hf("webgpu", mm, Tm, fm);
      void 0 !== hm && ST(hm)
    }
    const Cf = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function rf(mm, Tm, hm) {
      var am, xm, wm, Dm, Rm;
      let {
        from: om,
        cause: Om = "lost",
        restoreLost: Ym = !1,
        adapterRemembered: qm = !1,
        error: jm,
        context: Vm = Pf,
        session: Im = Cf
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, Km = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: Qm,
        count: nm
      } = Hf(mm, Om, jm, Vm, {
        restoreLost: Ym,
        adapterRemembered: qm
      }, Km), Jm = {
        reloadFrom: null !== om && void 0 !== om ? om : "",
        losses: String(Tm),
        cause: Om,
        detail: Qm,
        vendor: null !== (am = null === (xm = Vm.adapter) || void 0 === xm ? void 0 : xm.vendor) && void 0 !== am ? am : "",
        architecture: null !== (wm = null === (Dm = Vm.adapter) || void 0 === Dm ? void 0 : Dm.architecture) && void 0 !== wm ? wm : "",
        indirectHangs: String(Vm.indirectHangs),
        restoresSkipped: String(Vm.restoresSkipped),
        restoreLost: String(Ym),
        adapterRemembered: String(qm),
        samples: String(Im.samples),
        sunShadows: String(Im.sunShadows),
        renderDistance: String(Im.renderDistance),
        gpuFamily: null !== (Rm = (0, Am.e)()) && void 0 !== Rm ? Rm : "",
        browser: (0, im.k)(),
        siteUsed: Em.q,
        wasmBuild: hm.wasm,
        clientVersion: hm.client
      }, cm = "webgpu" !== mm && void 0 !== om ? function(mm, Tm, fm, hm) {
        return `: ${mm}, ${Tm?"restore lost":"not restored"}, up ${(0,im.v)(Nf(fm,hm))}`
      }(om, Ym, Vm.boundAtMs, Km) : "", zm = `${Xf(mm,Om)}${cm}`, Zm = kT({
        kind: "recovered",
        code: "CORE-renderLost",
        site: um,
        fatal: !1,
        message: zm,
        details: Jm,
        error: jm,
        countAs: nm
      });
      return NT("ga", (async () => {
        const {
          logError: Tm
        } = await Promise.resolve().then((() => fm(2903))), hm = `${pm.e["webgpu"===mm?"WebGPU":"WebGL2"]}\n Error: ${Qm}`;
        Tm("warning", hm), Tm("error", hm)
      })), Zm
    }

    function sf(mm, Tm) {
      var fm, hm;
      const Am = null === mm.name ? "TEXTURE-sources" : null === mm.url ? "TEXTURE-nourl" : mm.error instanceof km.b ? `TEXTURE-${mm.error.status}` : "TEXTURE-network",
        am = null === mm.name ? "terrain textures could not load" : `terrain texture ${mm.name} could not load`,
        xm = {
          texture: null !== (fm = mm.name) && void 0 !== fm ? fm : "",
          url: null !== (hm = mm.url) && void 0 !== hm ? hm : "",
          wasmBuild: Tm.wasm,
          clientVersion: Tm.client
        };
      return kT({
        kind: "terrainTexture",
        code: Am,
        site: Vm.y,
        fatal: !1,
        message: am,
        details: xm,
        error: mm.error
      })
    }
    const lf = {
      previewAnimations: {
        site: Bm,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: tm,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Mf(mm, Tm, fm, hm) {
      const {
        site: Am,
        prefix: am,
        name: xm
      } = lf[mm], {
        stage: wm,
        error: Dm
      } = fm;
      return kT({
        kind: mm,
        code: "decode" === wm ? null === Dm ? `${am}-decode` : `${am}-trap` : Dm instanceof cm.g ? `${am}-${Dm.status}` : `${am}-network`,
        site: Am,
        fatal: !1,
        message: "decode" === wm ? `${xm} did not decode` : `${xm} could not load`,
        details: {
          url: Tm,
          wasmBuild: hm.wasm,
          clientVersion: hm.client
        },
        error: Dm
      })
    }
    const uf = "staleBuild";

    function Bf(mm, Tm, fm) {
      const hm = {
          failedSite: mm.site,
          url: mm.url,
          from: mm.from,
          sameBuild: String(mm.from === Tm),
          reloadMs: String(Math.max(0, Date.now() - mm.at)),
          wasmBuild: fm.wasm,
          clientVersion: fm.client
        },
        Am = `reloaded into a newer build after ${mm.site} failed to load: ${mm.error}`;
      return kT({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: uf,
        fatal: !1,
        message: Am,
        details: hm
      })
    }
  },
  40878: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am,
      c: () => Am,
      e: () => xm
    });
    var hm = fm(4741);
    const Am = 3e4;
    class am {
      constructor(mm) {
        this.IO = mm, this.waitedMs = 0, this.lastMs = null
      }
      frame(mm, Tm) {
        if (Tm) return !0;
        const fm = null === this.lastMs ? 0 : mm - this.lastMs;
        return this.lastMs = mm, fm <= 900 && (this.waitedMs += fm), !(this.waitedMs < Am) && (this.IO(), !0)
      }
    }

    function xm(mm, Tm) {
      return 0 === (mm & hm._.ChunkRequested) ? "no_chunk_request" : 0 === (mm & hm._.ChunkStored) ? "chunk_not_stored" : 0 === (mm & hm._.MeshLanded) ? "not_meshed" : null === Tm ? "no_frame_drawn" : 0 === Tm.terrainParts ? "no_terrain_parts" : Tm.terrainCompiling > 0 ? "terrain_compiling" : Tm.terrainOpaque + Tm.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40669: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      f: () => jm,
      i: () => Ym,
      j: () => qm,
      k: () => Em,
      o: () => om,
      s: () => Rm,
      u: () => pm,
      x: () => Om
    });
    class hm extends Error {
      constructor(mm) {
        super(`the join's code did not load: ${mm instanceof Error?mm.message:String(mm)}`, {
          cause: mm
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === mm || void 0 === mm ? void 0 : mm.request
      }
    }
    let Am = null,
      am = null,
      xm = null;
    const wm = [];
    let Dm = null;

    function im(mm, Tm) {
      try {
        mm(Tm)
      } catch (fm) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", fm)
      }
    }

    function Rm() {
      return Dm
    }

    function pm(mm) {
      wm.push(mm), null !== Dm && im(mm, Dm)
    }

    function Em(mm) {
      return Am ??= Promise.all([fm.e(72), fm.e(96), fm.e(221), fm.e(77), fm.e(222), fm.e(198), fm.e(95), fm.e(240), fm.e(269), fm.e(197), fm.e(210), fm.e(189), fm.e(196), fm.e(191), fm.e(142), fm.e(87), fm.e(121), fm.e(247), fm.e(56)]).then((() => fm(42622))).then((Tm => {
        Tm.loadAudio(mm), Dm = Tm;
        for (const mm of wm) im(mm, Tm);
        return Tm
      })).catch((mm => {
        throw Am = null, mm
      })), Am
    }
    async function om(mm, Tm) {
      try {
        const fm = await Em(mm);
        await fm.loadClientGame(Tm)
      } catch (fm) {
        throw new hm(fm)
      }
    }

    function Om(mm, Tm) {
      am = {
        running: mm,
        shell: Tm
      }
    }

    function Ym() {
      return xm
    }
    async function qm(mm) {
      const Tm = am;
      if ((null === Tm || void 0 === Tm ? void 0 : Tm.running) !== mm) throw new Error("the core's session has ended");
      const fm = await Em(Tm.shell.audio).catch((mm => {
        throw new hm(mm)
      }));
      if (null !== xm) return xm;
      if (am !== Tm || mm.isStopped) throw new Error("the core stopped while the game code loaded");
      if (xm = fm.startGameHost(mm, Tm.shell), null === xm) throw new Error("the core's shared tables didn't read, so the game can't start");
      return xm
    }

    function jm() {
      null !== xm && (null !== Dm ? Dm.endGameHost(xm) : xm.closeGame()), xm = null, am = null
    }
  },
  40798: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    const hm = {
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
  40765: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => im,
      d: () => am,
      h: () => xm,
      i: () => Am,
      j: () => om,
      k: () => Rm,
      m: () => Dm,
      q: () => Em,
      s: () => pm,
      w: () => wm
    });
    var hm = fm(1789);
    const Am = new Uint8Array([12]),
      am = 2e3,
      xm = 257;

    function wm(mm) {
      const Tm = new Uint8Array(4);
      return new DataView(Tm.buffer).setUint32(0, mm, !0), Tm
    }
    class Dm extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class im extends Error {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(mm), this.stage = Tm, this.code = fm, this.serverText = hm, this.socketOpened = Am, this.name = "JoinError"
      }
    }
    class Rm extends Error {
      constructor(mm) {
        super(mm), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class pm extends Error {
      constructor(mm) {
        super((0, hm.e)(mm), {
          cause: mm
        }), this.name = "TrafficCheckError"
      }
    }
    class Em extends Error {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(mm, {
          cause: fm
        }), this.networkLost = Tm, this.httpStatus = hm, this.name = "SeatRequestError"
      }
    }
    class om extends Error {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(mm), this.code = Tm, this.serverText = fm, this.name = "MatchmakeError"
      }
    }
  },
  40769: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => om,
      g: () => Em,
      i: () => Om
    });
    var hm = fm(2616),
      Am = fm(2982),
      am = fm(39180),
      xm = fm(36573),
      wm = fm(39187),
      Dm = fm(40765),
      im = fm(40774);
    const Rm = "seat reservation expired.",
      pm = "early_leave";

    function Em(mm) {
      if (mm instanceof xm.e) return "expected";
      if (mm instanceof Dm.q) return mm.networkLost ? "expected" : "unrecognised";
      if (mm instanceof Dm.b) {
        if ("closed" === mm.stage && (0 === mm.code || (0, Am.g)(mm.code))) return "expected";
        if ("roomError" === mm.stage && (mm.serverText === Rm || mm.serverText === pm)) return "expected"
      }
      return mm instanceof Dm.b || mm instanceof Dm.j ? null === (0, wm.k)(mm.code).name ? "unrecognised" : "known" : (0, hm.g)(mm) ? "expected" : mm instanceof Dm.s || mm instanceof im.e ? "known" : "unrecognised"
    }

    function om(mm) {
      return mm instanceof xm.e ? "timedOut" : "expected" !== Em(mm) || (0, hm.g)(mm) || mm instanceof Dm.b && 1001 === mm.code ? void 0 : "failed"
    }

    function Om(mm) {
      return mm instanceof Dm.b && "attach" !== mm.stage ? (0, am.e)(mm, "closed" !== mm.stage || mm.socketOpened ? "socket" : "socket_unopened") : mm instanceof Dm.q ? {
        at: "seat_lost",
        code: mm.httpStatus
      } : mm instanceof Dm.j || mm instanceof xm.e ? (0, am.e)(mm, mm instanceof xm.e ? mm.leg : "seat") : void 0
    }
  },
  40814: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Dm,
      g: () => wm,
      k: () => im
    });
    var hm = fm(723),
      Am = fm(730);

    function am(mm, Tm) {
      const fm = null === Tm ? void 0 : hm.e.get(Tm);
      return "all" === fm || "webgl" === fm && "webgpu" !== mm.backend ? Tm : null
    }

    function xm(mm) {
      return "software_adapter" === mm.reason ? null : mm.adapter
    }

    function wm(mm) {
      const Tm = (0, hm.q)();
      return null === Tm ? null : (0, hm.h)(xm(mm), Tm, hm.k)
    }

    function Dm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Am.k;
      const hm = am(mm, Tm);
      return null !== hm && "webgl" === mm.backend && fm(hm) ? null : hm
    }

    function im(mm) {
      const Tm = (0, hm.q)();
      return null !== Tm && (0, hm.v)((0, hm.h)(mm, Tm, hm.o))
    }
  },
  40864: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm,
      f: () => im,
      i: () => om,
      k: () => pm
    });
    var hm = fm(2876),
      Am = fm(4732),
      am = fm(40866),
      xm = fm(40870),
      wm = fm(36363);
    const Dm = 395,
      im = 2147483648,
      Rm = new Uint8Array(0);
    class pm extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class Em extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class om {
      constructor(mm, Tm, fm) {
        var hm, Am, xm, wm;
        let Dm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = mm, this.build = Tm, this.onFailure = fm, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.mO = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (hm = Dm.fetchFile) && void 0 !== hm ? hm : mm => (0, am.l)(mm), this.onWritten = null !== (Am = Dm.onWritten) && void 0 !== Am ? Am : null, this.onTaken = null !== (xm = Dm.onTaken) && void 0 !== xm ? xm : null, this.onPackFileFailed = null !== (wm = Dm.onPackFileFailed) && void 0 !== wm ? wm : null, this.startupLeft = new Set(mm.startup);
        for (const am of mm.startup) this.request(am)
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
      drawnUrl(mm) {
        return this.drawn.get(mm)
      }
      request(mm) {
        const Tm = this.pending.get(mm);
        if (!0 === (null === Tm || void 0 === Tm ? void 0 : Tm.ask)) return;
        const fm = this.Go(mm, !0);
        fm.recheck = void 0 !== Tm;
        const hm = this.drawn.get(mm);
        if (void 0 !== hm) return fm.ni = !0, fm.recheck = !0, void this.fetch(mm, fm, hm);
        this.fetchWanted(mm, fm)
      }
      async refresh() {
        const mm = ++this.refreshes,
          Tm = new Set;
        for (const xm of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const mm of xm) 0 === (mm & am.h) && Tm.add(mm);
        const fm = [...Tm];
        let hm;
        try {
          hm = await Promise.all(fm.map((mm => this.wanted(mm))))
        } catch {
          return null
        }
        if (mm !== this.refreshes) return null;
        const Am = {
          resent: 0,
          refetched: 0,
          delivered: fm.filter((mm => this.drawn.has(mm))).length
        };
        return fm.forEach(((mm, Tm) => {
          const {
            url: fm,
            inPlaceOf: am
          } = hm[Tm], xm = this.pending.get(mm);
          if (void 0 !== xm) {
            if (xm.ni || void 0 === xm.url) return void(xm.recheck = !0);
            if (xm.url === fm) return;
            Am.refetched++;
            const Tm = this.Go(mm, xm.ask);
            return Tm.recheck = xm.recheck, void this.fetch(mm, Tm, fm, am)
          }
          const wm = this.written.get(mm);
          void 0 === wm ? this.drawn.get(mm) !== (null !== fm && void 0 !== fm ? fm : void 0) && (Am.resent++, this.fetch(mm, this.Go(mm, !1), fm, am)) : wm.url !== (null !== fm && void 0 !== fm ? fm : "") && (wm.attempt.recheck = !0)
        })), Am
      }
      taken(mm, Tm) {
        const fm = new Set,
          hm = new Set;
        for (const Am of Array.from(Tm)) 0 === (Am & im) ? fm.add(Am) : hm.add((Am & ~im) >>> 0);
        for (const [Am, am] of this.written) am.seq > mm || (this.written.delete(Am), fm.has(am.seq) ? this.refusedFile(Am, am) : this.takenFile(Am, am, !am.empty && !hm.has(am.seq)))
      }
      takenFile(mm, Tm, fm) {
        const {
          attempt: hm
        } = Tm;
        if (fm) {
          var Am;
          this.drawn.set(mm, Tm.url), this.undrawn.delete(mm), void 0 !== hm.inPlaceOf ? this.refusedPack.set(mm, hm.inPlaceOf) : hm.ni || this.refusedPack.delete(mm), null === (Am = this.onTaken) || void 0 === Am || Am.call(this, mm, !0);
          const fm = this.pending.get(mm);
          if (!0 === (null === fm || void 0 === fm ? void 0 : fm.ni) && fm.url !== Tm.url) {
            const fm = this.Go(mm, !0);
            fm.ni = !0, fm.recheck = !0, this.fetch(mm, fm, Tm.url)
          }
        } else {
          var am;
          this.drawn.has(mm) || this.undrawn.add(mm), null === (am = this.onTaken) || void 0 === am || am.call(this, mm, !1)
        }
        hm.recheck && this.resendIfChanged(mm)
      }
      refusedFile(mm, Tm) {
        var fm, hm;
        if (null === (fm = this.onTaken) || void 0 === fm || fm.call(this, mm, !1), this.refusedPack.set(mm, Tm.url), this.pending.has(mm)) return void(null === (hm = this.onPackFileFailed) || void 0 === hm || hm.call(this, mm, Om(Tm.url)));
        const Am = this.Go(mm, Tm.attempt.ask);
        Am.recheck = Tm.attempt.recheck, this.afterRefusal(mm, Am, Tm.url)
      }
      async afterRefusal(mm, Tm, fm) {
        var hm;
        let Am;
        try {
          Am = await this.wanted(mm)
        } catch (am) {
          return void(this.pending.get(mm) === Tm && this.giveUp(mm, Tm, fm, am))
        }
        this.pending.get(mm) === Tm && (Am.inPlaceOf !== fm ? Tm.ask || (null !== (hm = Am.url) && void 0 !== hm ? hm : void 0) !== this.drawn.get(mm) ? this.fetch(mm, Tm, Am.url, Am.inPlaceOf) : this.pending.delete(mm) : this.fallBack(mm, Tm, fm, Om(fm)))
      }
      Go(mm, Tm) {
        const fm = {
          url: void 0,
          ask: Tm,
          ni: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(mm, fm);
        for (let hm = this.ready.length - 1; hm >= 0; hm--) this.ready[hm].file === mm && this.ready.splice(hm, 1);
        return fm
      }
      async wanted(mm) {
        const Tm = await this.files.url(mm);
        return null !== Tm && this.refusedPack.get(mm) === Tm ? {
          url: await this.files.shippedUrl(mm),
          inPlaceOf: Tm
        } : {
          url: Tm,
          inPlaceOf: void 0
        }
      }
      fetchWanted(mm, Tm) {
        const fm = this.files.url(mm);
        fm instanceof Promise ? fm.then((fm => {
          this.fetchFound(mm, Tm, fm)
        }), (fm => {
          this.pending.get(mm) === Tm && this.giveUp(mm, Tm, "", fm)
        })) : this.fetchFound(mm, Tm, fm)
      }
      fetchFound(mm, Tm, fm) {
        null !== fm && this.refusedPack.get(mm) === fm ? Promise.resolve(this.files.shippedUrl(mm)).then((hm => {
          this.fetch(mm, Tm, hm, fm)
        }), (hm => {
          this.pending.get(mm) === Tm && this.giveUp(mm, Tm, fm, hm)
        })) : this.fetch(mm, Tm, fm)
      }
      fetch(mm, Tm, fm, hm) {
        this.pending.get(mm) === Tm && (Tm.url = fm, Tm.inPlaceOf = hm, null !== fm ? this.load(mm, Tm, fm) : this.buildFile(mm, Tm, "", Rm))
      }
      load(mm, Tm, fm) {
        const hm = this.mO.get(mm);
        (null === hm || void 0 === hm ? void 0 : hm.url) !== fm ? this.fetchFile(fm).then((hm => {
          var Am, am;
          this.pending.get(mm) === Tm && (this.keptTotal += hm.byteLength - (null !== (Am = null === (am = this.mO.get(mm)) || void 0 === am ? void 0 : am.glb.byteLength) && void 0 !== Am ? Am : 0), this.mO.set(mm, {
            url: fm,
            glb: hm
          }), this.buildFile(mm, Tm, fm, hm))
        }), (hm => {
          this.pending.get(mm) === Tm && this.fallBack(mm, Tm, fm, hm)
        })) : this.buildFile(mm, Tm, fm, hm.glb)
      }
      buildFile(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xm = hm.byteLength > 0 && (0, am.m)(fm) ? (mm | am.e) >>> 0 : mm;
        this.queueRecord(mm, Tm, fm, hm, this.build(xm, hm), Am)
      }
      queueRecord(mm, Tm, fm, hm, am, wm) {
        am.then((am => {
          if (this.pending.get(mm) !== Tm) return;
          if (Am.v + (0, Am.te)(am.byteLength) > Am.Fc) return void this.ringRefused(mm, Tm, fm, new pm(`${Ym(fm)}'s record is ${am.byteLength-xm.d} bytes, past the cmd ring's ${Am.Fc}`), wm);
          const Dm = {
            file: mm,
            url: fm,
            payload: am,
            glb: hm,
            attempt: Tm
          };
          wm ? this.ready.unshift(Dm) : this.ready.push(Dm)
        }))
      }
      async fallBack(mm, Tm, fm, hm) {
        var Am;
        let am = null,
          xm = hm;
        try {
          am = await this.files.shippedUrl(mm)
        } catch (wm) {
          xm = wm
        }
        this.pending.get(mm) === Tm && (null !== am && am !== fm ? (null === (Am = this.onPackFileFailed) || void 0 === Am || Am.call(this, mm, hm), Tm.ask || this.drawn.get(mm) !== am ? (Tm.url = am, Tm.inPlaceOf = fm, this.load(mm, Tm, am)) : this.pending.delete(mm)) : this.giveUp(mm, Tm, fm, xm))
      }
      ringRefused(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, am.m)(fm) ? this.fallBack(mm, Tm, fm, hm): this.giveUp(mm, Tm, fm, hm, Am)
      }
      giveUp(mm, Tm, fm, Am) {
        let am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: mm,
          url: Ym(fm),
          error: Am,
          startup: this.startupLeft.has(mm)
        }), Tm.ask || !this.drawn.has(mm) ? (0, hm.V)(Am) ? this.queueRecord(mm, Tm, fm, Rm, Promise.resolve((0, xm.o)(mm, (0, wm.l)(Am))), am) : this.buildFile(mm, Tm, fm, Rm, am) : this.pending.delete(mm)
      }
      async resendIfChanged(mm) {
        var Tm;
        if (0 !== (mm & am.h)) return;
        let fm;
        try {
          fm = await this.wanted(mm)
        } catch {
          return
        }(null !== (Tm = fm.url) && void 0 !== Tm ? Tm : void 0) === this.drawn.get(mm) || this.pending.has(mm) || this.written.has(mm) || this.fetch(mm, this.Go(mm, !1), fm.url, fm.inPlaceOf)
      }
      drain(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === mm) return;
        let fm = 0,
          hm = 0;
        for (; hm < this.ready.length && fm < 262144;) {
          const wm = this.ready[hm];
          if (this.written.has(wm.file)) {
            hm++;
            continue
          }
          const Rm = this.nextSeq;
          new DataView(wm.payload.buffer, wm.payload.byteOffset, wm.payload.byteLength).setUint32(xm.g, Rm, !0);
          const Em = wm.attempt.ni && wm.glb.byteLength > 0 && this.drawn.get(wm.file) === wm.url;
          if (mm(Dm, Em ? 1 : 0, wm.payload)) {
            if (this.nextSeq = Rm >= im - 1 ? 1 : Rm + 1, this.ready.splice(hm, 1), fm += wm.payload.byteLength, this.pending.delete(wm.file), this.startupLeft.delete(wm.file), this.written.set(wm.file, {
                seq: Rm,
                url: wm.url,
                empty: 0 === wm.glb.byteLength,
                attempt: wm.attempt
              }), wm.glb.byteLength > 0) try {
              var Am;
              null === (Am = this.onWritten) || void 0 === Am || Am.call(this, wm.file, wm.glb)
            } catch (am) {
              console.warn("ModelFeed: reading the file's images failed", am)
            }
          } else {
            if (null === Tm || 0 === wm.glb.byteLength || Tm(wm.payload.byteLength)) return;
            this.ready.splice(hm, 1);
            const mm = new pm(`${Ym(wm.url)}'s record is ${wm.payload.byteLength-xm.d} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(wm.file, wm.attempt, wm.url, mm, !0)
          }
        }
      }
    }

    function Om(mm) {
      return new Em(`presentation refused ${Ym(mm)}`)
    }

    function Ym(mm) {
      return mm.startsWith("data:") ? `${mm.slice(0,Math.min(Math.max(mm.indexOf(","),5),64))},...` : mm
    }
  },
  40866: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm,
      h: () => am,
      l: () => Rm,
      m: () => wm,
      p: () => im,
      s: () => Dm
    });
    var hm = fm(2876),
      Am = fm(3197);
    const am = 2147483648,
      xm = 1073741824;

    function wm(mm) {
      return mm.startsWith("data:")
    }

    function Dm(mm) {
      let {
        onTableFailed: Tm,
        packUrl: fm
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const hm = im();
      hm.catch((mm => {
        null === Tm || void 0 === Tm || Tm(mm)
      }));
      const Am = async Tm => (await hm).fileUrl((Tm & ~am) >>> 0, mm);
      return {
        startup: [],
        url: async mm => {
          if (fm && 0 === (mm & am)) {
            const Tm = await hm,
              Am = Tm.filePackName(mm),
              am = null === Am || "lifeform" === Tm.fileSource(mm) ? null : fm(Am);
            if (null !== am) return am
          }
          return Am(mm)
        },
        shippedUrl: Am
      }
    }

    function im() {
      return fm.e(41).then((() => fm(42691)))
    }
    async function Rm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return mm.startsWith("data:") ? (0, Am.d)(mm.slice(mm.indexOf(",") + 1), Tm) : (0, hm.I)(mm, {
        spare: Tm
      })
    }
  },
  40870: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im,
      g: () => Rm,
      j: () => om,
      n: () => qm,
      o: () => Om,
      q: () => Em,
      r: () => Ym
    });
    const hm = 826427981,
      Am = 1,
      am = 2,
      xm = 44,
      wm = 46,
      Dm = 58,
      im = 8,
      Rm = 4;

    function pm(mm, Tm, fm) {
      const Am = (new TextEncoder).encode(fm),
        am = im + 4 * (Tm.length + 2),
        xm = new Uint8Array(am + (Am.byteLength + 3 & -4)),
        wm = new DataView(xm.buffer);
      return wm.setUint32(0, mm, !0), wm.setUint32(im, hm, !0), Tm.forEach(((mm, Tm) => {
        wm.setUint32(im + 4 * (Tm + 1), mm, !0)
      })), wm.setUint32(am - 4, Am.byteLength, !0), xm.set(Am, am), xm
    }

    function Em(mm, Tm) {
      return pm(mm, [am], Tm)
    }

    function om(mm, Tm) {
      return pm(mm, [Am, wm], Tm)
    }

    function Om(mm, Tm) {
      return pm(mm, [Am, Dm], Tm)
    }

    function Ym(mm, Tm) {
      return pm(mm, [Am, xm], Tm)
    }

    function qm(mm) {
      const Tm = im;
      if (mm.byteLength < Tm + 12) return !1;
      const fm = new DataView(mm.buffer, mm.byteOffset, mm.byteLength);
      return fm.getUint32(Tm, !0) === hm && fm.getUint32(Tm + 4, !0) === Am && fm.getUint32(Tm + 8, !0) === xm
    }
  },
  40807: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      h: () => Rm,
      i: () => xm,
      m: () => Dm
    });
    var hm = fm(36363);
    class Am extends Error {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${mm}: the module trapped${fm?" in an earlier call":""}: ${String(Tm)}`, {
          cause: Tm
        }), this.site = mm, this.trap = Tm, this.earlier = fm, this.name = "ModuleTrapError", Tm instanceof Error && void 0 !== Tm.stack && (this.stack = `${this.name}: ${this.message}\n${Tm.stack}`)
      }
    }
    const am = new WeakMap;

    function xm(mm) {
      return am.has(mm)
    }

    function wm(mm, Tm) {
      am.has(mm) || am.set(mm, Tm)
    }

    function Dm(mm, Tm) {
      return !!(0, hm.h)(Tm) && (wm(mm, Tm), !0)
    }
    const im = [
      ["error", mm => mm.error],
      ["unhandledrejection", mm => mm.reason]
    ];

    function Rm(mm, Tm, fm) {
      let xm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return am.has(mm) ? Promise.reject(new Am(Tm, am.get(mm), !0)) : new Promise(((am, Dm) => {
        const Rm = fm => {
            wm(mm, fm), om(), Dm(new Am(Tm, fm))
          },
          pm = mm => {
            mm instanceof WebAssembly.RuntimeError ? Rm(mm) : (om(), Dm(mm))
          },
          Em = im.map((mm => {
            let [Tm, fm] = mm;
            return [Tm, mm => {
              const Tm = fm(mm);
              (0, hm.h)(Tm) && Rm(Tm)
            }]
          })),
          om = () => {
            for (const [mm, Tm] of Em) null === xm || void 0 === xm || xm.removeEventListener(mm, Tm)
          };
        for (const [mm, Tm] of Em) null === xm || void 0 === xm || xm.addEventListener(mm, Tm);
        let Om;
        try {
          Om = fm()
        } catch (Ym) {
          return void pm(Ym)
        }
        Om.then((mm => {
          om(), am(mm)
        }), pm)
      }))
    }
  },
  40790: (mm, Tm, fm) => {
    fm.d(Tm, {
      $: () => Sm,
      D: () => bm,
      H: () => lm,
      K: () => sm,
      O: () => Gm,
      P: () => cm,
      S: () => em,
      T: () => Mm,
      X: () => Nm,
      Z: () => Pm,
      e: () => Jm,
      i: () => Km,
      m: () => Hm,
      q: () => Xm,
      s: () => Im,
      t: () => nm,
      x: () => jm,
      z: () => Zm
    });
    var hm = fm(208),
      Am = fm(23),
      am = fm(3571),
      xm = fm(336),
      wm = fm(37),
      Dm = fm(40793),
      im = fm(36554),
      Rm = fm(40818),
      pm = (fm(40848), fm(40913)),
      Em = fm(40835);
    const om = "wasmJoinBuild";
    let Om = null,
      Ym = null,
      qm = null;

    function jm(mm) {
      qm = mm
    }
    let Vm = !1;

    function Im() {
      Vm = !0
    }

    function Km() {
      return Vm
    }
    let Qm = !1;

    function nm() {
      Qm = !0
    }

    function Jm() {
      return Qm
    }

    function cm() {
      return qm
    }
    let zm = null;

    function Zm(mm) {
      zm = mm, (0, xm.d)(mm)
    }
    const km = "wasmClientRenderLost";

    function bm() {
      wm.k.setItem(km, !0)
    }

    function Sm() {
      return !0 === wm.k.getItem(km)
    }

    function em() {
      return zm
    }

    function Nm() {
      return null === Om && (wm.g.removeItem("wasmLastPick"), wm.g.removeItem("wasmGuessVerdict"), (0, xm.l)(), Om = (0, Dm.x)(Rm.f).then((mm => (null === mm || (0, Dm.o)(mm) || (Ym = pm.b[mm.backend], Am.c.followGameGpu("webgpu" === mm.backend ? mm.adapter : null), "webgpu" === mm.backend && (0, Em.h)()), mm)))), Om
    }

    function Gm() {
      return Ym
    }

    function Xm(mm) {
      return mm ? mm.load() : Promise.resolve().then((function() {
        var mm = new Error("Cannot find module '@bloxd/wasm/client'");
        throw mm.code = "MODULE_NOT_FOUND", mm
      })).then((mm => mm.bloxdWasmClient))
    }

    function Pm(mm) {
      wm.g.setItem(om, mm)
    }
    async function Hm() {
      if (null === Rm.f) return Xm(null);
      const mm = wm.g.getItem(om);
      let Tm = "none" === mm ? null : "webgl";
      return null !== mm && "none" !== mm && ("string" === typeof mm && void 0 !== (0, hm.c)(Rm.f, mm) ? Tm = mm : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(mm)}, is none of this client's: guessing WebGL2's`)), null === Tm ? null : Rm.f[Tm]()
    }
    let ym = null,
      Cm = null,
      rm = null;

    function sm() {
      return ym ??= Nm().then((async mm => {
        const Tm = null !== mm && !(0, Dm.o)(mm),
          fm = {
            indirectHangs: Tm && await (0, Dm.D)(mm, window.location.search),
            storagePullBreaks: Tm && (0, Dm.P)(mm, window.location.search),
            splitPassBreaks: Tm && (0, Dm.N)(mm, window.location.search),
            earlySky: Tm && (0, Dm.B)(mm, window.location.search),
            instancedTerrain: Tm ? (0, Dm.H)(mm, window.location.search) : null,
            cellLight: Tm && await (0, am.i)("cellLight"),
            framesAhead: (0, Dm.j)(window.location.search),
            webGpuRestores: !Tm || (0, Dm.S)(mm, (0, im.d)()),
            bufferCopiesCrash: Tm && (0, Dm.A)(mm, window.location.search)
          };
        return Cm = fm.indirectHangs, rm = !fm.webGpuRestores, fm
      })), ym
    }

    function lm() {
      return Cm
    }

    function Mm() {
      return rm
    }
  },
  41052: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(36395),
      Am = fm(40950),
      am = fm(36554);

    function xm(mm, Tm) {
      return (0, hm.i)(mm, Am.g, {
        ...Tm,
        memoryMaximumBytes: (0, am.k)()
      })
    }
  },
  40832: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => cm,
      e: () => Im,
      g: () => Vm,
      k: () => Jm,
      m: () => bm,
      q: () => km,
      t: () => Sm,
      v: () => Qm
    });
    var hm = fm(4741),
      Am = fm(40835);
    const am = 1,
      xm = 18,
      wm = 19,
      Dm = 20,
      im = 21,
      Rm = {
        [am]: "link",
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
        [xm]: "retry linked",
        [wm]: "fallback linked",
        [Dm]: "fallback failed",
        [im]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function pm(mm, Tm, fm) {
      return mm === xm ? "program retry" : mm === am ? "program link" : mm === im ? "program link stall" : mm === wm || mm === Dm ? `program ${Tm} ${fm}` : "program"
    }
    const Em = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      om = {
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
      Om = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Ym = {
        11: "none read after view",
        12: "some read after view"
      },
      qm = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...Ym
      },
      jm = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function Vm(mm, Tm) {
      return mm === hm.p.RenderSerialLinks && void 0 !== Ym[Tm]
    }

    function Im(mm, Tm) {
      return mm === hm.p.RenderSerialLinks && void 0 !== jm[15 & Tm]
    }
    const Km = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function Qm(mm) {
      return String(mm).replace(/\d/g, (mm => String.fromCharCode(97 + Number(mm))))
    }

    function nm(mm, Tm) {
      var fm;
      return null !== (fm = mm[Tm]) && void 0 !== fm ? fm : Qm(Tm)
    }

    function Jm() {
      return Qm((0, Am.d)())
    }

    function cm(mm, Tm) {
      switch (mm) {
        case hm.p.RenderSceneRowNotDrawn:
          return {
            words: ` ${nm(om,Tm)}`, instance: String(Tm), group: String(mm)
          };
        case hm.p.RenderChunkMeshNotDrawn: {
          const fm = 0 === (128 & Tm) ? "" : " shortage",
            hm = Tm >>> 8;
          return {
            words: ` ${nm(Om,127&Tm)}${fm}${0===hm?"":` kind ${Qm(hm)}`}`,
            instance: String(Tm),
            group: String(mm)
          }
        }
        case hm.p.RenderInternal: {
          const fm = nm(Em, 255 & Tm),
            hm = Tm >>> 8 & 255;
          if (0 === hm) return {
            words: ` ${fm}`,
            instance: String(Tm),
            group: String(mm)
          };
          const Am = nm(Rm, hm),
            am = Tm >>> 16;
          return {
            words: ` ${fm} ${Am} program ${Qm(am)}`,
            instance: `${fm} ${Am} ${am}`,
            group: pm(hm, Am, fm),
            gpuDetails: {
              programFailure: Am,
              program: String(am)
            }
          }
        }
        case hm.p.RenderSerialLinks: {
          if (Im(mm, Tm)) {
            const mm = function(mm) {
              const Tm = (Tm, fm) => Qm(mm >>> Tm & (1 << fm) - 1),
                fm = mm >>> 30 & 1 ? " restored" : "";
              return `link census ${jm[15&mm]} linked ${Tm(22,8)} failed ${Tm(4,6)} retried ${Tm(10,6)} fallback ${Tm(16,6)}${fm}`
            }(Tm);
            return {
              words: ` ${mm}`,
              instance: String(15 & Tm),
              group: "link census",
              gpuDetails: {
                linkCensus: mm
              }
            }
          }
          const fm = nm(qm, Tm);
          return {
            words: ` ${fm}`,
            instance: String(Tm),
            group: String(mm),
            gpuDetails: {
              serialLinks: fm
            }
          }
        }
        case hm.p.RenderGlErrorAfterRestore: {
          const fm = nm(Km, 65535 & Tm),
            hm = Tm >>> 16,
            Am = 65535 !== hm;
          return {
            words: ` ${fm}${Am?` program ${Qm(hm)}`:""}`,
            instance: String(Tm),
            group: String(mm),
            gpuDetails: Am ? {
              glError: fm,
              program: String(hm)
            } : {
              glError: fm
            }
          }
        }
        default:
          return null
      }
    }
    const zm = 2,
      Zm = new Map;

    function km(mm) {
      let {
        group: Tm,
        instance: fm
      } = mm, hm = Zm.get(Tm);
      return void 0 === hm && (hm = [], Zm.set(Tm, hm)), !hm.includes(fm) && (hm.length >= zm || (hm.push(fm), !1))
    }

    function bm() {
      return Zm.size > 0
    }

    function Sm() {
      Zm.clear()
    }
  },
  40818: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      f: () => am
    });
    var hm = fm(40821);
    const Am = new WeakSet;
    const am = {
        webgpu: async () => (function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === mm || Am.has(mm.prototype)) return;
          Am.add(mm.prototype);
          const Tm = mm.prototype.requestDevice;
          mm.prototype.requestDevice = function(mm) {
            var fm;
            const Am = null !== (fm = null === mm || void 0 === mm ? void 0 : mm.requiredLimits) && void 0 !== fm ? fm : {},
              am = Object.keys(Am).filter((mm => !(mm in this.limits)));
            if (0 === am.length) return Tm.call(this, mm);
            const xm = Object.fromEntries(Object.entries(Am).filter((mm => {
              let [Tm] = mm;
              return Tm in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${am.join(", ")}`), (0, hm.reportDroppedRequiredLimits)(am), Tm.call(this, {
              ...mm,
              requiredLimits: xm
            })
          }
        }(), (await fm.e(8).then((() => fm(42652)))).bloxdWasmWebgpu),
        webgl: async () => (await fm.e(6).then((() => fm(42663)))).bloxdWasmWebgl,
        webgl1: async () => (await fm.e(7).then((() => fm(42672)))).bloxdWasmWebgl1
      },
      xm = async () => (await fm.e(5).then((() => fm(42683)))).compileAnimationPackInWasm
  },
  40774: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => jm,
      i: () => qm,
      j: () => Qm
    });
    var hm = fm(6586),
      Am = fm(31),
      am = fm(4228),
      xm = fm(4741),
      wm = fm(6580),
      Dm = fm(40776);

    function im(mm, Tm) {
      const fm = (0, wm.b)(Tm.variants);
      return mm.setShaderPack(fm.variantFlags, fm.hooks, fm.moduleCodes, (0, Dm.u)(Tm.layers), Dm.h[Tm.dD], Tm.keepCircleShadows)
    }
    const Rm = 0,
      pm = 1,
      Em = 2,
      om = "shaderPack:failedToCompile",
      Om = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      Ym = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function qm(mm, Tm) {
      var fm;
      const hm = null !== (fm = null === mm || void 0 === mm ? void 0 : mm.reason) && void 0 !== fm ? fm : "none";
      return Om.has(hm) ? {
        messageKey: Tm ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === hm && "override" === (null === mm || void 0 === mm ? void 0 : mm.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Ym.has(hm) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class jm extends Error {
      constructor(mm) {
        super(`the shader pack can't run in this game: ${mm}`), this.messageKey = mm, this.name = "ShaderPackJoinError"
      }
    }
    const Vm = "strict";
    class Im {
      constructor(mm) {
        this.deps = mm, this.pagePack = void 0, this.loaded = null, this.dD = Vm, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = mm.load().catch((Tm => (mm.warn("the shader pack could not load: the game draws without it", Tm), {
          status: "none"
        }))).then((mm => (this.loaded = mm, "active" === mm.status && (this.handOverToPreviews(mm), null !== mm.harnessPolicy && (this.dD = mm.harnessPolicy, this.handOver())), mm)))
      }
      async join(mm) {
        this.leave();
        const Tm = this.game,
          [fm, Am] = await Promise.all([this.pagePack, this.policyOf(mm)]);
        if (Tm !== this.game || "none" === fm.status) return null;
        const am = "active" === fm.status ? fm.pack.variants : fm.variants,
          xm = (0, hm.l)(am, Am);
        if (xm && "active" === fm.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (xm) {
          const mm = this.cantRun(fm, Am);
          if (null !== mm) return mm
        } else if ("blocked" === fm.status || null === this.deps.core) return null;
        return this.dD = Am, this.handOver(), xm && this.refused ? om : (this.joined = !0, this.offInThisGame = !xm, null)
      }
      async replay(mm) {
        const Tm = await this.join(mm);
        null === Tm ? this.playable() : this.deps.failInGame(Tm)
      }
      cantRun(mm, Tm) {
        const {
          core: fm,
          noWebGpu: hm
        } = this.deps;
        if ("blocked" === mm.status) {
          return "shaderPack:failedUnchecked" === mm.messageKey && null === fm && hm.noAdapter ? hm.messageKey : mm.messageKey
        }
        return this.refused || this.failedPolicies.has(Tm) ? om : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var mm;
        return this.runsInJoinedGame() && "active" === (null === (mm = this.loaded) || void 0 === mm ? void 0 : mm.status) ? function(mm, Tm) {
          const fm = mm.filter((mm => (0, hm.l)([mm], Tm))),
            Am = mm => fm.some((Tm => Tm[mm]));
          return {
            sceneDepth: Am("sceneDepth"),
            sunShadow: Am("sunShadow"),
            airShadow: Am("airShadow")
          }
        }(this.loaded.pack.variants, this.dD) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(om) : (null !== this.couldntRun ? this.notify(am.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.dD) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(mm) {
        for (const {
            code: Tm,
            detail: fm
          }
          of mm)
          if (Tm === xm.p.RenderShaderPackNotRun) switch (255 & fm) {
            case Rm:
              this.refused = !0, this.failed();
              break;
            case pm:
              this.failedPolicies.add(this.dD), this.failed();
              break;
            case Em:
              this.failedModelPolicies.add(this.dD), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(om) : this.failedWhileJoining = !0)
      }
      fail(mm) {
        this.leave(), this.deps.failInGame(mm)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(mm, Tm) {
        const fm = this.game;
        this.deps.notify(mm, (() => fm === this.game && this.joined), Tm)
      }
      handOver() {
        var mm;
        const {
          core: Tm
        } = this.deps;
        null !== Tm && "active" === (null === (mm = this.loaded) || void 0 === mm ? void 0 : mm.status) && (im(Tm, {
          ...this.loaded.pack,
          dD: this.dD
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(mm) {
        let {
          pack: Tm,
          harnessPolicy: fm
        } = mm;
        const {
          previews: hm
        } = this.deps;
        null !== hm && im(hm, {
          ...Tm,
          dD: null !== fm && void 0 !== fm ? fm : Vm
        })
      }
      policyOf(mm) {
        return this.deps.policyOf(mm).catch((mm => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", mm), Vm)))
      }
    }
    const Km = "wasmShaderPackNotice";

    function Qm(mm, Tm, fm, hm) {
      return Am.j.subscribe(Km, (mm => {
        let {
          translationKey: Tm,
          stillCurrent: fm,
          reasonKey: hm
        } = mm;
        fm() && Am.j.gp("chat", (0, am.j)(Tm, hm))
      })), new Im({
        load: nm,
        policyOf: Jm,
        core: mm,
        previews: Tm,
        noWebGpu: fm,
        notify: (mm, Tm, fm) => {
          const hm = {
            translationKey: mm,
            stillCurrent: Tm,
            reasonKey: fm
          };
          Am.j.gp(Km, hm, !0)
        },
        failInGame: mm => {
          Am.j.gp(am.h, mm)
        },
        warn: hm
      })
    }
    async function nm() {
      const [{
        shaderPackPage: mm,
        harnessShaderPackMode: Tm
      }, {
        shaderPackTextures: hm
      }] = await Promise.all([fm.e(115).then((() => fm(39342))), fm.e(116).then((() => fm(6578)))]), Am = await mm.load();
      return "active" !== Am.status ? Am : {
        status: "active",
        pack: {
          variants: Am.pack.variants,
          layers: hm().layers,
          keepCircleShadows: Am.pack.keepCircleShadows
        },
        harnessPolicy: Tm()
      }
    }
    async function Jm(mm) {
      var Tm;
      const [{
        shaderPackPage: hm,
        harnessShaderPackMode: Am
      }, {
        getShaderPackPolicy: am
      }] = await Promise.all([fm.e(115).then((() => fm(39342))), fm.e(91).then((() => fm(41314)))]);
      return await hm.load(), null !== (Tm = Am()) && void 0 !== Tm ? Tm : am(mm)
    }
  },
  40887: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      c: () => qm,
      d: () => Dm,
      h: () => im,
      i: () => Rm,
      j: () => Em
    });
    var hm = fm(40896),
      Am = fm(40905);
    const am = "atlas:",
      xm = 3e4;
    class wm extends Error {
      constructor(mm, Tm) {
        super(`fetching ${mm} answered HTTP ${Tm}`), this.url = mm, this.status = Tm, this.name = "TerrainTextureFetchError"
      }
    }

    function Dm(mm) {
      if (!mm.startsWith(am)) return null;
      const Tm = Number(mm.slice(am.length));
      return Number.isInteger(Tm) && Tm >= 0 ? Tm : null
    }
    async function im() {
      const mm = await fm.e(204).then((() => fm(34376)));
      return {
        atlasSheets: mm.blockAtlasUrls,
        texture: Tm => {
          var fm, hm, am;
          return null !== (fm = null !== (hm = null !== (am = mm.animatedBlockTextures[Tm]) && void 0 !== am ? am : mm.rotatedBlockTextures[Tm]) && void 0 !== hm ? hm : Am.e[Tm]) && void 0 !== fm ? fm : null
        }
      }
    }
    async function Rm(mm) {
      const Tm = new AbortController,
        fm = setTimeout((() => {
          Tm.abort(new DOMException(`${mm} took over ${xm} ms`, "TimeoutError"))
        }), xm);
      let hm;
      try {
        const fm = await fetch(mm, {
          signal: Tm.signal
        });
        if (!fm.ok) throw new wm(mm, fm.status);
        hm = await fm.blob()
      } finally {
        clearTimeout(fm)
      }
      const Am = await createImageBitmap(hm, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Em(Am)
      } finally {
        Am.close()
      }
    }
    const pm = 8192;

    function Em(mm) {
      const {
        width: Tm,
        height: fm
      } = mm, Am = Math.max(1, Math.min(fm, pm)), am = (0, hm.c)(Tm, Am, {
        willReadFrequently: !0
      });
      if (!am) throw new Error("no 2D context to read the texture back");
      am.globalCompositeOperation = "copy";
      const xm = new Uint8Array(Tm * fm * 4);
      for (let hm = 0; hm < fm; hm += Am) {
        const wm = Math.min(Am, fm - hm);
        am.drawImage(mm, 0, hm, Tm, wm, 0, 0, Tm, wm), xm.set(am.getImageData(0, 0, Tm, wm).data, hm * Tm * 4)
      }
      return {
        width: Tm,
        height: fm,
        pixels: xm
      }
    }
    async function om(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rm;
      const hm = [],
        Am = await Promise.all(mm.map((async mm => {
          var Am, xm;
          const wm = null !== (Am = null === (xm = Tm.decoded) || void 0 === xm ? void 0 : xm.call(Tm, mm)) && void 0 !== Am ? Am : null,
            im = null === wm ? function(mm, Tm) {
              if (mm.startsWith(am)) {
                var fm;
                const hm = Dm(mm);
                return null === hm ? null : null !== (fm = Tm.atlasSheets[hm]) && void 0 !== fm ? fm : null
              }
              return Tm.texture(mm)
            }(mm, Tm) : null,
            Rm = null !== wm && void 0 !== wm ? wm : null === im ? null : fm(im);
          if (null === Rm) return hm.push({
            name: mm,
            url: im,
            error: new Error(`no URL for terrain texture ${mm}`)
          }), null;
          try {
            const Tm = await Rm;
            if (Tm.pixels.byteLength !== Tm.width * Tm.height * 4) throw new Error(`decoded ${Tm.pixels.byteLength} bytes for ${Tm.width}x${Tm.height} texels`);
            return {
              name: mm,
              texture: Tm
            }
          } catch (pm) {
            return hm.push({
              name: mm,
              url: im,
              error: pm
            }), null
          }
        }))),
        xm = Am.filter((mm => null !== mm)),
        wm = new Uint32Array(2 * xm.length);
      xm.forEach(((mm, Tm) => {
        let {
          texture: fm
        } = mm;
        wm[2 * Tm] = fm.width, wm[2 * Tm + 1] = fm.height
      }));
      return {
        handOver: {
          names: xm.map((mm => {
            let {
              name: Tm
            } = mm;
            return Tm
          })),
          textures: xm.map((mm => {
            let {
              texture: Tm
            } = mm;
            return Tm.pixels
          })),
          sizes: wm
        },
        failures: hm
      }
    }
    const Om = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Ym() {}
    class qm {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Om,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = mm, this.retryMs = Tm, this.keepBelow = fm, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : im,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const hm = ++this.started,
          Am = {
            decode: fm.decode,
            wholeAtlas: fm.wholeAtlas
          };
        return this.loadAndHandOver(Tm, Am, mm, (() => {
          var mm;
          return hm < this.landed || !1 === (null === (mm = fm.wanted) || void 0 === mm ? void 0 : mm.call(fm))
        }), {
          onTaken: (mm, fm) => {
            this.landed = hm, this.current = {
              mine: hm,
              sources: Tm,
              load: Am,
              mO: mm,
              failed: fm
            }
          }
        })
      }
      restore(mm) {
        var Tm;
        const fm = this.current;
        if (null === fm) return Promise.resolve(null);
        if ((null === (Tm = this.restoring) || void 0 === Tm ? void 0 : Tm.mine) === fm.mine) return this.restoring.done;
        const hm = {
          mine: fm.mine,
          done: this.restoreLanded(fm, mm).finally((() => {
            this.restoring === hm && (this.restoring = null)
          }))
        };
        return this.restoring = hm, hm.done
      }
      async restoreLanded(mm, Tm) {
        const fm = () => this.landed !== mm.mine,
          {
            mO: hm
          } = mm;
        if (null !== hm) return this.stopped() ? null : this.core.setTerrainTextures(hm.names, hm.textures, hm.sizes);
        let Am = Tm;
        for (let am = 0;; am++) {
          const Tm = this.retryMs.at(am),
            hm = {
              allOrNothingExcept: void 0 === Tm ? void 0 : mm.failed
            },
            xm = await this.loadAndHandOver(mm.sources, mm.load, Am, fm, hm);
          if (!1 !== xm || void 0 === Tm || this.stopped()) return xm;
          if (Am = Ym, await new Promise((mm => {
              setTimeout(mm, Tm)
            })), fm()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const am = this.core.terrainTextureNames();
        var xm;
        if (0 === am.length) return null === (xm = Am.onTaken) || void 0 === xm || xm.call(Am, null, new Set), !0;
        let wm, im;
        try {
          wm = await mm(), im = await om(am, wm, Tm.decode)
        } catch (qm) {
          return hm() ? null : (fm({
            name: null,
            url: null,
            error: qm
          }), !1)
        }
        if (hm() || this.stopped()) return null;
        for (const Dm of im.failures) fm(Dm);
        const Rm = Am.allOrNothingExcept;
        if (void 0 !== Rm && im.failures.some((mm => {
            let {
              name: Tm
            } = mm;
            return null === Tm || !Rm.has(Tm)
          })) || !0 === Tm.wholeAtlas && im.failures.some((mm => {
            let {
              name: Tm
            } = mm;
            return null === Tm || null !== Dm(Tm)
          }))) return !1;
        const {
          handOver: pm
        } = im, Em = function(mm) {
          return mm.textures.reduce(((mm, Tm) => mm + Tm.byteLength), 0)
        }(pm) < this.keepBelow, Om = this.core.setTerrainTextures(pm.names, pm.textures, pm.sizes, Em ? void 0 : () => {
          !async function(mm, Tm) {
            await Tm;
            for (const {
                buffer: hm
              }
              of mm) {
              const mm = hm;
              var fm;
              if (!mm.detached) null === (fm = mm.transfer) || void 0 === fm || fm.call(mm, 0)
            }
          }(pm.textures, wm.heldUntil)
        });
        if (Om) {
          var Ym;
          const mm = new Set(im.failures.flatMap((mm => {
            let {
              name: Tm
            } = mm;
            return null === Tm ? [] : [Tm]
          })));
          null === (Ym = Am.onTaken) || void 0 === Ym || Ym.call(Am, Em ? pm : null, mm)
        }
        return Om
      }
    }
  },
  40835: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => wm,
      h: () => Dm
    });
    var hm = fm(105);
    const Am = "webgpuPipeline";

    function am(mm) {
      return mm.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let xm = null;

    function wm() {
      if (null === xm) try {
        mm = (0, hm.getBrowserName)(), Tm = (0, hm.getBrowserVersion)(), fm = (0, hm.getOperatingSystem)(), Am = (0, hm.getOperatingSystemVersion)(), xm = `${mm.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===Tm?"unknown":am(Tm)}-${fm}${void 0===Am?"":`_${am(Am)}`}`
      } catch (wm) {
        console.warn("The user agent couldn't be read for its browser code", wm), xm = "unknown"
      }
      var mm, Tm, fm, Am;
      return xm
    }

    function Dm() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const Tm = `WGPU-${wm()}`,
        hm = (mm, hm) => {
          const {
            reason: am,
            message: xm
          } = hm, wm = {
            pipeline: null !== mm && void 0 !== mm ? mm : "",
            reason: String(am),
            browserMessage: String(xm)
          };
          Promise.resolve().then((() => fm(40821))).then((mm => {
            let {
              reportCrash: fm
            } = mm;
            fm({
              kind: "coreError",
              code: Tm,
              site: Am,
              fatal: !1,
              message: `${wm.pipeline} ${wm.reason}: ${wm.browserMessage}`,
              details: wm,
              error: hm
            })
          })).catch((mm => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", mm)
          }))
        },
        am = mm.createRenderPipelineAsync;
      mm.createRenderPipelineAsync = function(mm) {
        return am.call(this, mm).catch((Tm => {
          throw hm(mm.label, Tm), Tm
        }))
      };
      const xm = mm.createComputePipelineAsync;
      mm.createComputePipelineAsync = function(mm) {
        return xm.call(this, mm).catch((Tm => {
          throw hm(mm.label, Tm), Tm
        }))
      }
    }
  },
  40959: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/bloxd_wasm_models_bg.688ec3ae9c26eb6ffb79.wasm"
  },
  40953: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/bloxd_wasm_workers_bg.c42abae2abbd8f270ea8.wasm"
  },
  40950: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      g: () => hm
    });
    const hm = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new fm.U(fm(40953))
      }
    };
    const Am = {
      name: "bloxd_wasm_models",
      url: function() {
        return new fm.U(fm(40959))
      }
    }
  },
  6580: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Km,
      e: () => Qm,
      f: () => Vm,
      i: () => jm
    });
    var hm = fm(6586);
    const Am = 6,
      am = 3,
      xm = 1,
      wm = 2,
      Dm = 4,
      im = 8,
      Rm = 16,
      pm = 32,
      Em = 64,
      om = 128,
      Om = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Ym(mm) {
      if (!mm) return 0;
      const Tm = Om.indexOf(mm);
      if (Tm <= 0) throw new Error(`"${mm}" is not a shader pack hook function`);
      return Tm
    }

    function qm(mm) {
      if (0 === mm) return null;
      const Tm = Om[mm];
      if (void 0 === Tm) throw new Error(`${mm} is not a shader pack hook function id`);
      return Tm
    }

    function jm(mm) {
      const Tm = hm.e.length;
      return {
        strict: mm >= Tm,
        program: hm.e[mm % Tm]
      }
    }

    function Vm(mm) {
      return Number(mm.strict) * hm.e.length + hm.e.indexOf(mm.program)
    }

    function Im(mm) {
      return "" === mm ? [] : mm.split(" ")
    }

    function Km(mm) {
      const Tm = {
        variantFlags: new Uint8Array(Am),
        hooks: new Uint8Array(Am * am),
        moduleCodes: Array(Am).fill(""),
        reads: Array(2 * Am).fill("")
      };
      for (const fm of mm) {
        const mm = Vm(fm.key),
          hm = (mm, Tm) => null === fm.hooks.surface || fm.reads.fragment.includes(mm) ? 0 : Tm;
        Tm.variantFlags[mm] = (fm.sceneDepth ? xm : 0) | (fm.movesVertices ? wm : 0) | (fm.sunShadow ? Dm : 0) | (fm.airShadow ? im : 0) | (fm.discards ? Rm : 0) | hm("localPosition", pm) | hm("enchantSpeed", Em) | hm("enchantTier", om), Tm.hooks[mm * am] = Ym(fm.hooks.vertex), Tm.hooks[mm * am + 1] = Ym(fm.hooks.surface), Tm.hooks[mm * am + 2] = Ym(fm.hooks.light), Tm.moduleCodes[mm] = fm.moduleCode, Tm.reads[2 * mm] = fm.reads.vertex.join(" "), Tm.reads[2 * mm + 1] = fm.reads.fragment.join(" ")
      }
      return Tm
    }

    function Qm(mm) {
      const {
        hooks: Tm,
        moduleCodes: fm,
        reads: hm
      } = mm;
      return Array.from(mm.variantFlags, ((mm, Am) => {
        const pm = Am * am;
        return {
          key: jm(Am),
          hooks: {
            vertex: qm(Tm[pm]),
            surface: qm(Tm[pm + 1]),
            light: qm(Tm[pm + 2])
          },
          moduleCode: fm[Am],
          sceneDepth: 0 !== (mm & xm),
          sunShadow: 0 !== (mm & Dm),
          airShadow: 0 !== (mm & im),
          movesVertices: 0 !== (mm & wm),
          discards: 0 !== (mm & Rm),
          reads: {
            vertex: Im(hm[2 * Am]),
            fragment: Im(hm[2 * Am + 1])
          }
        }
      }))
    }
  },
  40776: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      e: () => hm,
      f: () => Em,
      g: () => Rm,
      h: () => qm,
      i: () => am,
      k: () => wm,
      n: () => Dm,
      q: () => xm,
      u: () => Ym,
      v: () => om,
      x: () => Om
    });
    const hm = 3,
      Am = 0,
      am = 1,
      xm = 2,
      wm = {
        uniform: 3,
        lE: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Dm = 10,
      im = "BloxdPackInputs",
      Rm = "bloxdPackInputs",
      pm = [{
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
      Em = 80;

    function om() {
      const mm = pm.map((mm => {
        let {
          name: Tm,
          type: fm
        } = mm;
        return `    ${Tm}: ${fm},\n`
      })).join("");
      return `struct ${im} {\n${mm}}\n@group(${hm}) @binding(${Am}) var<uniform> ${Rm}: ${im};\n`
    }

    function Om(mm, Tm) {
      const fm = new DataView(mm, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Em),
        [hm, Am, am, xm, wm, Dm] = pm;
      fm.setFloat32(hm.offset, Tm.seconds, !0), fm.setUint32(Am.offset, Tm.lit ? 1 : 0, !0);
      for (let im = 0; im < 3; im++) fm.setInt32(am.offset + 4 * im, Tm.renderOffset[im], !0), fm.setFloat32(xm.offset + 4 * im, Tm.Q0[im], !0), fm.setFloat32(wm.offset + 4 * im, Tm.eyePosition[im], !0), fm.setFloat32(Dm.offset + 4 * im, Tm.shadowDirection[im], !0)
    }

    function Ym(mm) {
      const Tm = new Uint32Array(Math.max(1, mm.length));
      return mm.forEach(((mm, fm) => {
        let {
          id: hm,
          rotation: Am
        } = mm;
        Tm[fm] = 65535 & hm | (3 & Am) << 16
      })), Tm
    }
    const qm = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);