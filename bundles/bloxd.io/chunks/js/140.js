export const id = 140;
export const ids = [140];
export const modules = {
  38985: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht,
      f: () => lt,
      h: () => Et,
      j: () => yt,
      k: () => Qt,
      n: () => Xt,
      r: () => mt,
      v: () => ft
    });
    var Ot = Vt(373),
      qt = Vt(1820);
    const Dt = "A valid external Instance reference no longer exists.";

    function mt(tt) {
      return tt.includes(Dt)
    }
    const dt = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      jt = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const Ht = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function Xt(tt, et) {
      return tt ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(tt) {
        var et;
        const Vt = null !== (et = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(tt)) && void 0 !== et ? et : /failed with ([A-Z][A-Z0-9_]+)/.exec(tt);
        return Vt ? Vt[1] : mt(tt) ? "gpu_process_lost" : "other"
      }(et)
    }

    function Qt(tt) {
      return `${(null===tt||void 0===tt?void 0:tt.vendor)||"unknown vendor"} ${(null===tt||void 0===tt?void 0:tt.architecture)||"unknown architecture"}`
    }

    function lt(tt) {
      return Nt(tt)[1]
    }

    function Et(tt) {
      return Nt(tt)[2]
    }

    function ft(tt, et, Vt) {
      const qt = (0, Ot.d)(),
        Dt = null !== qt && qt >= et,
        mt = document.hidden ? "hidden" : Dt ? "shown" : "visible",
        dt = Dt ? Vt - qt : null;
      return {
        page: null === dt ? mt : `${mt}${lt(dt)}`,
        code: `${tt}_${null===dt?mt:`${mt}_${Et(dt)}`}_${wt(Vt)}`
      }
    }

    function wt(tt) {
      if ((0, qt.h)()) return "ad_open";
      const et = (0, qt.e)();
      return null === et ? "ad_none" : `ad_${Et(tt-et.endedAt)}_${et.pageHid?"h":"v"}`
    }

    function yt(tt) {
      return Mt(jt, tt)[1]
    }

    function Nt(tt) {
      return Mt(dt, tt)
    }

    function Mt(tt, et) {
      var Vt;
      return null !== (Vt = tt.find((tt => {
        let [Vt] = tt;
        return et < Vt
      }))) && void 0 !== Vt ? Vt : tt[tt.length - 1]
    }
  },
  40831: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot,
      e: () => Xt,
      h: () => mt,
      k: () => qt,
      n: () => dt,
      o: () => Ht
    });
    class Ot extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function qt(tt) {
      return tt instanceof RangeError && /call stack/i.test(tt.message) || tt instanceof Error && "InternalError" === tt.name && /recursion/i.test(tt.message)
    }
    const Dt = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function mt(tt) {
      var et;
      return tt instanceof WebAssembly.RuntimeError || tt instanceof Ot || qt(tt) && Dt.test(null !== (et = tt.stack) && void 0 !== et ? et : "")
    }

    function dt(tt, et) {
      if (mt(tt)) throw tt;
      console.error(et, tt)
    }

    function jt(tt, et, Vt, qt, Dt) {
      if (et % qt !== 0 || et + Vt > tt.byteLength) throw new Ot(`${Dt}: ${Vt} bytes at ${et}, ${qt}-aligned, outside ${tt.byteLength} bytes of memory`)
    }

    function Ht(tt, et, Vt, Ot, qt) {
      return 0 === Vt ? null : (jt(et, Vt, Ot * tt.BYTES_PER_ELEMENT, tt.BYTES_PER_ELEMENT, qt), new tt(et, Vt, Ot))
    }

    function Xt(tt, et, Vt, Ot, qt) {
      return 0 === et ? null : (jt(tt, et, Vt, Ot, qt), new DataView(tt, et, Vt))
    }
  },
  40905: (tt, et, Vt) => {
    Vt.d(et, {
      $: () => me,
      A: () => Tt,
      B: () => At,
      D: () => te,
      E: () => nt,
      I: () => gt,
      L: () => Ve,
      P: () => Ee,
      T: () => ee,
      W: () => st,
      _: () => Oe,
      bb: () => He,
      c: () => St,
      d: () => fe,
      e: () => ae,
      fb: () => Rt,
      g: () => je,
      h: () => le,
      l: () => De,
      o: () => Qe,
      r: () => Xe,
      t: () => Ne,
      w: () => pt
    });
    var Ot = Vt(377),
      qt = Vt(304),
      Dt = Vt(312),
      mt = Vt(26),
      dt = Vt(2902),
      jt = Vt(757),
      Ht = Vt(4650),
      Xt = Vt(2872),
      Qt = Vt(3524),
      lt = Vt(106),
      Et = Vt(373),
      ft = Vt(39),
      wt = Vt(366),
      yt = Vt(133),
      Nt = Vt(723),
      Mt = Vt(146),
      bt = Vt(139),
      Jt = Vt(4963),
      Ct = Vt(40913),
      ut = Vt(1883),
      Kt = Vt(40916),
      ht = Vt(34330),
      vt = Vt(40920);
    const Wt = "bloxd-webgpuOffAfterLoss",
      St = "context:webgl",
      ct = "probe:threw";

    function Rt(tt) {
      let et;
      try {
        et = tt.getContext("webgl", {
          powerPreference: Mt.e
        })
      } catch {
        et = null
      }
      if (null === et) return null;
      let Vt = null;
      try {
        const tt = et.getParameter(et.MAX_TEXTURE_SIZE);
        Vt = "number" === typeof tt && tt > 0 ? tt : null
      } catch {
        Vt = null
      }
      try {
        var Ot;
        null === (Ot = et.getExtension("WEBGL_lose_context")) || void 0 === Ot || Ot.loseContext()
      } catch {}
      return Vt
    }
    const It = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function Pt() {
      return "ios" === (0, lt.getOperatingSystem)() ? "ios" : "other"
    }
    const Zt = "mali_valhall",
      Lt = new Set(["nvidia_pre_turing"]),
      Ft = new Set(["intel_gen7_8"]);

    function kt(tt, et) {
      return It.has(tt) ? "android_arm" === tt && et === Zt ? "webgpu_default" : "webgl_default" : null
    }

    function Gt(tt) {
      return function(tt) {
        try {
          return tt()
        } catch {
          return null
        }
      }((() => {
        var et, Vt, Ot, mt;
        const dt = null !== (et = null === (Vt = tt.info) || void 0 === Vt ? void 0 : Vt.vendor) && void 0 !== et ? et : "";
        return "windows" === (0, lt.getOperatingSystem)() && "" !== dt && "intel" !== (0, lt.normaliseGpuVendor)(dt) ? null : ((0, lt.seedGpuVendor)(dt), kt((0, qt.j)(), (0, Dt.e)(dt, null !== (Ot = null === (mt = tt.info) || void 0 === mt ? void 0 : mt.architecture) && void 0 !== Ot ? Ot : "")))
      }))
    }

    function zt() {
      var tt;
      return {
        gpu: null !== (tt = navigator.gpu) && void 0 !== tt ? tt : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(tt) {
          let et, Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ct.e;
          try {
            et = tt.getContext("webgl")
          } catch {
            et = null
          }
          if (null === et) return [St];
          const Ot = [];
          try {
            for (const qt of Vt.extensions) null === et.getExtension(qt) && Ot.push(qt);
            for (const [qt, Dt] of Object.entries(Vt.limits)) {
              const tt = et[qt],
                Vt = "number" === typeof tt ? et.getParameter(tt) : null;
              ("number" !== typeof Vt || Vt < Dt) && Ot.push(`limit:${qt}`)
            }
            const tt = et.getShaderPrecisionFormat(et.VERTEX_SHADER, et.HIGH_FLOAT);
            (null === tt || tt.precision < Vt.vertexHighFloatBits) && Ot.push("precision:vertex_high_float")
          } catch {
            Ot.push(ct)
          }
          try {
            var qt;
            null === (qt = et.getExtension("WEBGL_lose_context")) || void 0 === qt || qt.loseContext()
          } catch {}
          return Ot
        }(document.createElement("canvas")),
        offAfterLoss: tt => rt((() => tt ? (0, wt.F)() : mt.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: tt => rt((() => (0, yt.c)(tt))),
        intelGen9: tt => rt((() => (0, yt.j)(tt))),
        storeIntelGen9Verdict: tt => {
          ft.e.setItem(yt.D, tt)
        },
        gpuClassWebGlArm: Gt,
        storeGpuClassVerdict: tt => {
          ft.e.setItem(yt.B, tt)
        },
        gpuClassOnWebGl: tt => (0, Nt.d)(tt),
        webGlDefaultFamily: tt => Ft.has((0, Dt.e)(tt.vendor, tt.architecture)),
        storeWebGlDefaultFamilyVerdict: tt => {
          ft.e.setItem(yt.L, tt)
        },
        override: () => ot(),
        claimed: () => Ut((0, jt.j)()),
        webGpuSetting: () => {
          const tt = ft.e.getItem(Ot.Rb);
          return "boolean" === typeof tt ? tt : null
        },
        heldBack: () => Nt.g,
        storeHoldbackSpared: tt => {
          ft.e.setItem(yt.x, tt)
        },
        intelGen9OnWebGl: () => Nt.k,
        YE: () => rt((() => (0, Qt.g)(lt.featureFlags.settings.canUseShaderPacks))),
        windows: () => rt((() => "windows" === (0, lt.getOperatingSystem)())),
        defaultCompatibility: ht.b
      }
    }

    function ot() {
      let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, dt.v)("render") && "webgl1" === (0, dt.r)("renderer")) return "webgl1";
      const et = [() => new URLSearchParams(window.location.search).get(Xt.c), () => ft.e.getItem(Xt.e), () => {
        const et = localStorage.getItem(Wt);
        return null !== et && tt && localStorage.removeItem(Wt), "1" === et ? "webgl2" : null
      }];
      for (const Vt of et) {
        let tt = null;
        try {
          tt = Ut(Vt())
        } catch {}
        if (null !== tt) return tt
      }
      return null
    }

    function rt(tt) {
      try {
        return tt()
      } catch {
        return !1
      }
    }

    function Ut(tt) {
      return "lite" === tt ? "webgpu" : "webgl2" === tt || "babylon" === tt ? "webgl" : null
    }

    function At(tt) {
      return "none" === tt || "compatibility_mode" === tt
    }
    async function it() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zt();
      const et = await async function(tt) {
        const et = Bt(tt),
          {
            source: Vt
          } = et,
          Ot = !et.asked,
          qt = "gpu" in et && et.heldBack,
          mt = function(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return qt && !At(tt) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: Vt
            } : {
              reason: tt,
              adapter: et,
              source: Vt
            }
          };
        if (!("gpu" in et)) return mt(et.refused);
        let dt;
        try {
          dt = await (0, ut.h)((0, bt.n)(et.gpu, {
            compatibility: Yt(tt, et)
          }), we, `requestAdapter didn't settle in ${we/1e3} s`)
        } catch {
          return mt("adapter_error")
        }
        if ("string" === typeof dt) return mt(dt);
        const {
          adapter: jt,
          compatibility: Ht
        } = dt, Xt = (0, bt.b)(jt);
        if ((0, bt.i)(jt)) return mt("software_adapter", Xt);
        const Qt = tt.windows() && function(tt) {
          return Lt.has((0, Dt.e)(tt.vendor, tt.architecture))
        }(Xt);
        if (tt.storeHoldbackSpared(Qt), qt && !Qt) return mt("webgl_holdback");
        const lt = tt.intelGen9(jt);
        tt.storeIntelGen9Verdict(lt);
        const Et = lt ? null : tt.gpuClassWebGlArm(jt);
        tt.storeGpuClassVerdict(null !== Et && void 0 !== Et && Et);
        const ft = tt.webGlDefaultFamily(Xt);
        if (tt.storeWebGlDefaultFamilyVerdict(ft), Ot && tt.oldIntelDriver(jt)) return mt("old_intel_driver", Xt);
        if ("default" === Vt && lt && tt.intelGen9OnWebGl()) return mt("intel_gen9", Xt);
        if ("default" === Vt && null !== Et && tt.gpuClassOnWebGl(Et)) return mt("gpu_class_webgl", Xt);
        if ("default" === Vt && ft) return mt("gpu_wasm_arm", Xt);
        return mt(Ht ? "compatibility_mode" : "none", Xt)
      }(tt);
      if (At(et.reason)) return {
        backend: "webgpu",
        ...et
      };
      if ("webgl1" !== tt.override() && tt.webgl2()) return {
        backend: "webgl",
        ...et
      };
      const Vt = tt.webgl1();
      return 0 === Vt.length ? {
        backend: "webgl1",
        ...et
      } : {
        missing: Vt
      }
    }

    function Yt(tt, et) {
      let {
        source: Vt,
        asked: Ot
      } = et;
      return Ot || "default" === Vt ? (0, ht.j)(Ot, tt.defaultCompatibility) : void 0
    }

    function Bt(tt) {
      const et = tt.override(),
        Vt = tt.webGpuSetting(),
        Ot = null === et && !0 !== Vt && tt.YE(),
        qt = null !== et || null !== Vt || Ot ? null : tt.claimed(),
        Dt = null !== et ? "override" : !0 === Vt ? "setting" : Ot ? "pack" : !1 === Vt ? "setting" : null !== qt ? "claim" : "default",
        mt = function(tt) {
          return "override" === tt || "setting" === tt
        }(Dt);
      if ("webgl" === et || "webgl1" === et || "webgl" === qt || "setting" === Dt && !1 === Vt) return {
        source: Dt,
        asked: mt,
        refused: "not_requested"
      };
      if (!tt.gpu) return {
        source: Dt,
        asked: mt,
        refused: "no_webgpu_api"
      };
      const dt = "default" === Dt && tt.heldBack();
      return dt && !tt.windows() ? {
        source: Dt,
        asked: mt,
        refused: "webgl_holdback"
      } : !mt && tt.offAfterLoss("pack" === Dt) ? {
        source: Dt,
        asked: mt,
        refused: dt ? "webgl_holdback" : "off_after_loss"
      } : {
        source: Dt,
        asked: mt,
        heldBack: dt,
        gpu: tt.gpu
      }
    }

    function pt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...zt(),
          override: () => ot(!1)
        },
        et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lt.isWebKit,
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pt;
      try {
        if (!et()) return !1;
        const Ot = Bt(tt);
        if (!("gpu" in Ot) || Ot.heldBack) return !1;
        const qt = "default" === Ot.source ? kt(Vt(), "apple") : null;
        return null === qt || !tt.gpuClassOnWebGl(qt)
      } catch (Ot) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", Ot), !1
      }
    }
    let xt = !1;
    async function Tt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zt();
      if (null === tt) return null;
      const Vt = await it(et);
      return xt = !("missing" in Vt) && "webgpu" === Vt.backend && "claim" === Vt.source, "missing" in Vt ? Vt : {
        ...Vt,
        load: tt[Vt.backend]
      }
    }
    async function gt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zt().gpu,
        Ot = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== tt.backend) return !1;
      const qt = qe(tt, et, "indirectDraws", "off", "on");
      if (null !== qt) return qt;
      if (null !== tt.adapter && (0, yt.l)(tt.adapter, Ot)) return !0;
      if (null === Vt) return !1;
      try {
        var Dt;
        const tt = await (0, ut.h)(Vt.requestAdapter({
          powerPreference: "low-power"
        }).then((async tt => (null !== tt && await (0, bt.e)(tt), tt))), we, `the low-power requestAdapter didn't settle in ${we/1e3} s`);
        return (0, yt.l)(null !== (Dt = null === tt || void 0 === tt ? void 0 : tt.info) && void 0 !== Dt ? Dt : {}, Ot)
      } catch (mt) {
        return mt instanceof ut.d
      }
    }

    function st(tt, et, Vt) {
      if ("webgpu" !== tt.backend) return !1;
      const Ot = qe(tt, et, "terrainFetch", "texture", "storage");
      return null !== Ot ? Ot : null !== tt.adapter && (0, yt.e)(tt.adapter, Vt)
    }

    function nt(tt, et) {
      if ("webgpu" !== tt.backend) return !1;
      const Vt = qe(tt, et, "skyOrder", "early", "last");
      return null !== Vt ? Vt : null !== tt.adapter && (0, Dt.e)(tt.adapter.vendor, tt.adapter.architecture) === Zt
    }

    function te(tt, et) {
      if ("webgpu" !== tt.backend) return !1;
      const Vt = qe(tt, et, "uploadCopies", "off", "on");
      return null !== Vt ? Vt : null !== tt.adapter && "powervr_rogue" === (0, Dt.e)(tt.adapter.vendor, tt.adapter.architecture)
    }

    function ee(tt, et, Vt) {
      if ("webgpu" !== tt.backend) return !1;
      const Ot = qe(tt, et, "sceneDepth", "off", "on");
      return null !== Ot ? Ot : null !== tt.adapter && (0, yt.h)(tt.adapter, Vt)
    }

    function Ve(tt, et) {
      return "webgl" === tt.backend ? qe(tt, et, "instancedTerrain", "1", "0") : null
    }

    function Oe(tt, et) {
      return "webgpu" !== tt.backend || et && (null === tt.adapter || !(0, wt.H)(tt.adapter))
    }

    function qe(tt, et, Vt, Ot, qt) {
      const Dt = new URLSearchParams(et).get(Vt),
        mt = null !== Dt && void 0 !== Dt ? Dt : (0, jt.e)(Vt);
      return mt !== Ot && mt !== qt ? null : (xt ||= null === Dt && "webgpu" === tt.backend, mt === Ot)
    }

    function De(tt) {
      return null !== tt && "missing" in tt
    }

    function me(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !He(),
        Vt = arguments.length > 2 ? arguments[2] : void 0;
      return et ? function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mt.b,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const Ot = "start_failed" === tt || "pipeline_failed" === tt,
            qt = (0, vt.h)(tt, Vt),
            Dt = et.turnOffWebGpuAfterDeviceLoss(Ot ? "visible" : (0, wt.j)((0, Et.g)()), Ot, qt);
          return xt && (0, jt.s)("webgpuLoss"), et.isWebGpuOffAfterLoss() && "webgpu" === Ut(ft.e.getItem(Xt.e)) && ft.e.removeItem(Xt.e), (0, dt.v)("webgpuloss") && (0, Ht.c)((et => {
            var Vt;
            et.noteWebGpuLoss("wasm", Dt ? tt : `${tt}, which storage didn't keep`, null !== (Vt = qt.message) && void 0 !== Vt ? Vt : null)
          })), Dt
        } catch {
          return !1
        }
      }(tt, mt.b, Vt) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const de = "framePacing";

    function je(tt) {
      const et = new URLSearchParams(tt).get(de);
      return null !== et && /^\d{1,9}$/.test(et) ? Number(et) : void 0
    }

    function He() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === Ut(new URLSearchParams(tt).get(Xt.c))
      } catch {
        return !1
      }
    }

    function Xe(tt) {
      return !!Qe(tt) || tt instanceof Error && !(tt instanceof WebAssembly.RuntimeError) && tt.message.startsWith(`${Jt.l.RenderSurfaceUnusable}:`)
    }

    function Qe(tt) {
      const {
        name: et,
        message: Vt
      } = null !== tt && void 0 !== tt ? tt : {};
      return "InvalidStateError" === et && "string" === typeof Vt && Vt.startsWith("GPUDevice.")
    }

    function le(tt) {
      const et = tt;
      return "function" === typeof et.vOt && "function" === typeof et.WOt ? et : null
    }

    function Ee(tt) {
      return "function" === typeof tt.Ay ? tt : null
    }
    const fe = "openRenderer";
    const we = 5e3,
      ye = 15e3;

    function Ne(tt, et, Vt, Ot, qt, Dt) {
      return (0, ut.h)(function(tt, et, Vt, Ot, qt, Dt) {
        return (0, Kt.h)(tt, et, (() => tt.Ay(Vt, Ot, qt, Dt.indirectHangs, Dt.storagePullBreaks, Dt.splitPassBreaks, Dt.earlySky, Dt.instancedTerrain, Dt.cellLight, Dt.framesAhead, Dt.webGpuRestores, Dt.bufferCopiesCrash)))
      }(tt, et, Vt, Ot, qt, Dt), ye, `${Jt.l.RenderSurfaceUnusable}: the renderer didn't open in ${ye/1e3} s`, Me)
    }
    async function ae(tt, et, Vt, Ot, qt, Dt) {
      if ("function" !== typeof tt.zmt) throw new Error("this core has no set_renderer");
      const mt = await Ne(et, fe, Vt, qt, Ot, Dt);
      try {
        tt.zmt(mt)
      } catch (dt) {
        throw Me(mt), dt
      }
    }

    function Me(tt) {
      try {
        tt.free()
      } catch {}
    }
  },
  41014: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    const Ot = {
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
  40937: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => ft,
      e: () => wt,
      i: () => lt,
      l: () => Qt
    });
    const Ot = 2e3,
      qt = "unavailable";
    let Dt = () => Promise.resolve().then((() => Vt(3015))),
      mt = null,
      dt = null,
      jt = Ht();

    function Ht() {
      let tt = () => {};
      return {
        promise: new Promise((et => {
          tt = () => {
            et(null)
          }
        })),
        resolve: tt
      }
    }

    function Xt() {
      if (null === mt) {
        const tt = Dt();
        mt = tt, tt.then((et => {
          mt === tt && (dt = et)
        }), (() => {
          mt === tt && (mt = null)
        }))
      }
      return mt
    }

    function Qt() {
      Xt().catch((() => {}))
    }

    function lt() {
      jt.resolve()
    }

    function Et(tt, et, Vt, Ot) {
      if (null === tt) return {
        errorKind: et,
        fingerprint: qt,
        dedupe: `${et}|${Ot}`
      };
      const {
        fingerprint: Dt
      } = tt.clientErrorKey(et, Vt, Ot);
      return {
        errorKind: et,
        fingerprint: Dt,
        dedupe: Dt
      }
    }

    function ft(tt, et, Vt, Ot) {
      return null === dt ? Ot ? (Qt(), Et(null, tt, et, Vt)) : null : Et(dt, tt, et, Vt)
    }
    async function wt(tt, et, Vt) {
      let qt;
      const Dt = new Promise((tt => {
        qt = setTimeout((() => {
          tt(null)
        }), Ot)
      }));
      try {
        return Et(await Promise.race([Xt(), Dt, jt.promise]), tt, et, Vt)
      } catch {
        return Et(null, tt, et, Vt)
      } finally {
        clearTimeout(qt)
      }
    }
  },
  40933: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      BUILT_IN_ANIMATIONS_SITE: () => Tt,
      CORE_ERRORS_SITE: () => zt,
      EVENT_OVERFLOW_SITE: () => xt,
      FIRST_VIEW_SITE: () => nt,
      JOIN_SITE: () => rt,
      LEAVE_SITE: () => Ut,
      MAIN_THREAD_SITE: () => te,
      MODEL_FEED_SITE: () => At,
      MODEL_POOL_SITE: () => it,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => qe,
      NON_FATAL_REPORTS_PER_SESSION: () => Ce,
      PREVIEW_ANIMATIONS_SITE: () => pt,
      RENDER_RELOAD_SITE: () => Bt,
      REQUEST_DEVICE_SITE: () => ee,
      TEXTURE_NAMES_SITE: () => Yt,
      TEXTURE_PACK_FEED_SITE: () => gt,
      TEXTURE_PACK_SWAP_SITE: () => st,
      TurnstilePageError: () => mV,
      WASM_LOAD_SITE: () => ot,
      countRenderLost: () => zV,
      crashError: () => Se,
      crashReportsSettled: () => Ge,
      deviceLossWords: () => LV,
      flushCrashReports: () => Fe,
      joinFailureCode: () => dV,
      lokiTransport: () => de,
      modelFailureCode: () => fV,
      readTrap: () => Ye,
      renderLoss: () => GV,
      renderReloadMessage: () => FV,
      reportCoreErrors: () => re,
      reportCountedLoadFallback: () => qV,
      reportCrash: () => ce,
      reportDataLoadFailure: () => YV,
      reportDisconnect: () => lV,
      reportDracoDecoderFailure: () => aV,
      reportDroppedRequiredLimits: () => VV,
      reportEventOverflow: () => CV,
      reportFirstViewNoTerrain: () => WV,
      reportLightFault: () => KV,
      reportMainStall: () => SV,
      reportMemoryShed: () => vV,
      reportModelFailure: () => wV,
      reportModelPoolFailure: () => yV,
      reportModelsModuleRetry: () => NV,
      reportNoBackendRetry: () => eV,
      reportPageJoinFailure: () => HV,
      reportReconnectGaveUp: () => EV,
      reportRenderRecovery: () => Pe,
      reportRenderReload: () => UV,
      reportReplayFault: () => RV,
      reportStaleBuildReload: () => pV,
      reportStoppedCore: () => Te,
      reportTerrainTextureFailure: () => AV,
      reportTexturePackFeedLoadFailure: () => bV,
      reportTexturePackKeptOut: () => JV,
      reportUnstreamedCoreLoad: () => DV,
      reportUnsupportedFallback: () => tV,
      reportUnusedSeat: () => QV,
      reportWorkerLost: () => uV,
      reportWorkerStartTimeout: () => cV,
      reportWorldgenGaveUp: () => hV,
      reportWorldgenLoadFailure: () => MV,
      resetCrashReports: () => ze,
      setCrashAdPreload: () => ye,
      setCrashBackend: () => we,
      setCrashScreen: () => le,
      setCrashTransport: () => Xe,
      showCrash: () => xe,
      showJoinFailure: () => jV,
      showUnsupported: () => se,
      unknownSkyWords: () => oe
    });
    var Ot = Vt(1103),
      qt = Vt(1429),
      Dt = Vt(1423),
      mt = Vt(1167),
      dt = Vt(312),
      jt = Vt(3018),
      Ht = Vt(4415),
      Xt = Vt(40937),
      Qt = Vt(4960),
      lt = Vt(40940),
      Et = Vt(3055),
      ft = Vt(38985),
      wt = Vt(153),
      yt = Vt(146),
      Nt = Vt(3059),
      Mt = Vt(36738),
      bt = Vt(1883),
      Jt = Vt(40952),
      Ct = Vt(40769),
      ut = Vt(40882),
      Kt = Vt(40886),
      ht = Vt(36729),
      vt = Vt(2961),
      Wt = Vt(2965),
      St = Vt(40977),
      ct = Vt(40996),
      Rt = Vt(41003),
      It = Vt(37078),
      Pt = Vt(3295),
      Zt = Vt(36489),
      Lt = Vt(40916),
      Ft = Vt(36507),
      kt = Vt(41022);
    const Gt = "[bloxd-wasm-client]",
      zt = "coreErrors",
      ot = "wasmLoad",
      rt = "join",
      Ut = "leave",
      At = "modelFeed",
      it = "modelWorkerPool",
      Yt = "textureNames",
      Bt = "renderReload",
      pt = "previewAnimations",
      xt = "eventOverflow",
      Tt = "builtInAnimations",
      gt = "texturePackFeed",
      st = "texturePackSwap",
      nt = "firstView",
      te = "mainThread",
      ee = "requestDevice",
      Ve = 300,
      Oe = 64,
      qe = 8;
    let De = 0;
    const me = new Set,
      de = (tt, et) => {
        const Vt = Ne[tt.kind],
          Ot = {
            backend: Ee,
            adPreload: fe
          };
        if (null === Vt) return void je(tt, et, Ot, null);
        const qt = (0, Xt.b)(Vt, tt.message, tt.code, tt.fatal);
        null === qt ? Le("Loki", (async () => {
          je(tt, et, Ot, await (0, Xt.e)(Vt, tt.message, tt.code))
        })) : je(tt, et, Ot, qt)
      };

    function je(tt, et, Vt, Ot) {
      let {
        backend: qt,
        adPreload: Dt
      } = Vt;
      const {
        kind: dt,
        code: Ht,
        site: Xt,
        fatal: Qt,
        details: lt
      } = tt;
      if (!Qt)
        if (null === Ot || (0, jt.e)(Ot.errorKind) || me.has(Ot.dedupe)) {
          if (De >= qe) return;
          De++
        } else me.add(Ot.dedupe);
      const Et = {
        ...lt,
        kind: dt,
        code: Ht,
        site: Xt,
        fatal: String(Qt),
        backend: qt
      };
      Dt && (Et.adPreload = "true"), null !== Ot && (Et.errorKind = Ot.errorKind, Et.fingerprint = Ot.fingerprint), et instanceof Error && "string" === typeof et.stack && (Et.causeStack = et.stack.slice(0, 2e3)), (0, mt.Nw)(Se(tt, et), Et)
    }
    let He = de;

    function Xe(tt) {
      const et = He;
      return He = tt, et
    }
    let Qe = () => {};

    function le(tt) {
      const et = Qe;
      return Qe = tt, et
    }
    let Ee = "unpicked",
      fe = !1;

    function we(tt) {
      Ee = tt
    }

    function ye(tt) {
      fe = tt
    }
    const Ne = {
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
      ae = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      Me = new Set(["unstreamedLoad"]),
      be = new Set(["linkCensus", "linksReadAfterView"]);
    let Je = !1;
    const Ce = 20,
      ue = new Map;
    let Ke = 0,
      he = 0;
    const ve = new Set,
      We = new Set;

    function Se(tt, et) {
      const Vt = Object.assign(new Error(`${tt.code}: ${tt.message}`), {
        name: "WasmClientCrash",
        cause: null !== et && void 0 !== et ? et : void 0
      });
      return et instanceof Error && et.stack && (Vt.stack = et.stack), Vt
    }

    function ce(tt) {
      var et, Ot;
      const {
        kind: qt,
        code: Dt,
        site: mt,
        fatal: dt,
        message: jt,
        error: Ht
      } = tt, Xt = !1 !== tt.toTransport && !Me.has(qt), Qt = !dt && Xt && !be.has(qt), lt = {
        kind: qt,
        code: Dt,
        site: mt,
        fatal: dt,
        message: jt,
        details: null !== (et = tt.details) && void 0 !== et ? et : {}
      }, Et = `${Dt}@${mt}${void 0===tt.instance?"":`#${tt.instance}`}${dt?"!":""}`, ft = (null !== (Ot = ue.get(Et)) && void 0 !== Ot ? Ot : 0) + 1;
      if (ue.set(Et, ft), void 0 !== tt.countAs && 1 === ft && Ie(tt.countAs), ft > 1 ? 0 === (ft & ft - 1) && Ze((() => {
          console.warn(`${Gt} ${Dt} at ${mt} reported ${ft} times`)
        })) : Qt && Ke >= Ce ? Ze((() => {
          console.warn(`${Gt} ${qt} ${Dt} at ${mt}: ${jt} (not sent: the session's ${Ce} went)`, lt.details, null !== Ht && void 0 !== Ht ? Ht : "")
        })) : (Qt && Ke++, function(tt, et, Ot, qt) {
          var Dt, mt;
          const {
            kind: dt,
            code: jt,
            site: Ht,
            fatal: Xt,
            message: Qt,
            details: lt
          } = tt;
          Ze((() => {
            (Xt ? console.error : console.warn)(`${Gt} ${dt} ${jt} at ${Ht}: ${Qt}`, lt, null !== et && void 0 !== et ? et : "")
          }));
          const Et = ae[dt],
            ft = null !== (Dt = null !== (mt = Ne[dt]) && void 0 !== mt ? mt : Et) && void 0 !== Dt ? Dt : null;
          qt || null === ft || Re((async () => {
            const {
              reportCappedWasmFailure: tt,
              reportUncappedWasmFailure: et,
              reportWasmFailure: Ot
            } = await Vt.e(213).then((() => Vt(36487)));
            (be.has(dt) ? et : void 0 === Et ? Ot : tt)(ft, Qt, jt)
          }));
          Ot && Ze((() => {
            He(tt, et)
          }))
        }(lt, Ht, Xt, void 0 !== tt.countAs)), dt) {
        var wt;
        const et = null !== (wt = tt.screen) && void 0 !== wt ? wt : {
          text: (0, It.h)(lt, !0),
          reload: !0
        };
        Ze((() => {
          Qe(et)
        }))
      }
      return lt
    }

    function Re(tt) {
      Le("counts", (async () => {
        const {
          peekVisitSessionId: et
        } = await Promise.resolve().then((() => Vt(738)));
        null !== et() && (await tt(), Je = !0)
      }))
    }

    function Ie(tt) {
      ve.has(tt.errorKind) || (ve.add(tt.errorKind), Re((async () => {
        const {
          reportClientError: et
        } = await Promise.resolve().then((() => Vt(3012)));
        et(tt.errorKind, tt.error, tt.code, !0, void 0, tt.fields)
      })))
    }

    function Pe(tt, et) {
      Le("render_lost", (async () => {
        const [{
          reportClientError: Ot
        }, {
          CAPPED_COUNTS_VISIT_CAP: qt
        }] = await Promise.all([Promise.resolve().then((() => Vt(3012))), Vt.e(213).then((() => Vt(36487)))]);
        Ot("render_lost", et, tt, !0, qt)
      }))
    }

    function Ze(tt) {
      try {
        tt()
      } catch (et) {
        try {
          console.warn(`${Gt} could not send a report`, et)
        } catch {}
      }
    }

    function Le(tt, et) {
      try {
        const Vt = et().catch((et => {
          console.warn(`${Gt} could not send the report to ${tt}`, et)
        })).finally((() => {
          We.delete(Vt)
        }));
        We.add(Vt)
      } catch (Vt) {
        console.warn(`${Gt} could not send the report to ${tt}`, Vt)
      }
    }
    async function Fe(tt) {
      let et;
      (0, Xt.i)();
      const Vt = new Promise((Vt => {
        et = setTimeout(Vt, tt)
      }));
      await Promise.race([ke(), Vt]), clearTimeout(et)
    }
    async function ke() {
      if (await Promise.allSettled([...We]), Je) try {
        const {
          flushClientAnalyticsEvents: tt
        } = await Promise.resolve().then((() => Vt(1597)));
        await tt()
      } catch (tt) {
        console.warn(`${Gt} could not send the counts`, tt)
      }
    }
    async function Ge() {
      for (; We.size > 0;) await Promise.allSettled([...We])
    }

    function ze() {
      ue.clear(), Ke = 0, Je = !1, De = 0, me.clear(), he = 0, ve.clear(), (0, lt.o)()
    }

    function oe(tt) {
      const et = "object" === typeof tt && null !== tt ? tt.type : tt;
      return "string" !== typeof et ? "sky not named" : `sky ${JSON.stringify(Array.from(et).slice(0,Oe).join(""))}`
    }

    function re(tt, et, Vt, Ot) {
      he += et;
      for (const {
          code: dt,
          detail: jt
        }
        of tt) {
        var qt, Dt, mt;
        const tt = (0, Qt.qe)(dt),
          et = (0, lt.b)(dt, jt),
          Ht = null === Ot || void 0 === Ot ? void 0 : Ot(dt, jt),
          Xt = void 0 !== (null === et || void 0 === et ? void 0 : et.gpuDetails),
          Et = Xt ? null === (qt = (0, yt.y)()) || void 0 === qt ? void 0 : qt.renderer : void 0,
          ft = Xt ? ` ${(0,lt.j)()}` : "",
          wt = Array.from([Et && `gpu ${(0,lt.p)(Et)}`, Ht].filter(Boolean).join("; ")).slice(0, Ve).join(""),
          Nt = `core error ${tt}${null!==(Dt=null===et||void 0===et?void 0:et.words)&&void 0!==Dt?Dt:""}${ft}${wt?`: ${wt}`:""}`,
          Mt = {
            errorCode: String(dt),
            detail: String(jt),
            droppedBefore: String(he),
            wasmBuild: Vt.wasm,
            clientVersion: Vt.client,
            ...null === et || void 0 === et ? void 0 : et.gpuDetails
          };
        null !== et && (0, lt.n)(et) ? Ze((() => {
          console.warn(`${Gt} coreError CORE-${tt}: ${Nt} (not sent: the session's render warnings of its kind went)`, Mt)
        })) : Ue(dt) ? Ze((() => {
          console.warn(`${Gt} coreError CORE-${tt}: ${Nt} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, Mt)
        })) : ce({
          kind: ie(dt, jt),
          code: `CORE-${tt}`,
          site: zt,
          fatal: !1,
          message: Nt,
          details: Mt,
          instance: null !== (mt = null === et || void 0 === et ? void 0 : et.instance) && void 0 !== mt ? mt : Ae(dt, jt)
        })
      }
    }

    function Ue(tt) {
      if (tt !== Qt.M.AudioUnknownSound && tt !== Qt.M.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: et,
        lobbyName: Vt
      } = (0, Dt.c)();
      return null !== et && (!!(0, Ot.k)(et) || tt === Qt.M.AudioUnknownSound && (0, qt.h)(et, Vt))
    }

    function Ae(tt, et) {
      return tt === Qt.M.RenderDeviceLost && 0 !== (et & Qt.V.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function ie(tt, et) {
      return tt === Qt.M.JobsHeapGaveUp ? "meshHeap" : (0, lt.f)(tt, et) ? "linksReadAfterView" : (0, lt.d)(tt, et) ? "linkCensus" : "coreError"
    }

    function Ye(tt) {
      return (0, Zt.h)(tt instanceof Lt.e ? tt.trap : tt, vt.J, vt.hb)
    }
    const Be = "declined=js";

    function pe(tt) {
      return tt ? {
        labels: [Be],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function xe(tt, et, Vt) {
      return ge(tt, et, Vt, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Te(tt, et, Vt) {
      return ge(tt, et, Vt, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function ge(tt, et, Vt, Ot, qt) {
      let {
        memoryDetails: Dt = {},
        declined: mt = !1
      } = Ot;
      const {
        code: dt,
        details: jt,
        message: Ht
      } = (0, Jt.J)(tt, et), Xt = [];
      Object.assign(jt, (0, Ft.e)(tt.error)), null !== Vt && (jt.trapKind = Vt.kind, null !== Vt.panic && (jt.panic = (0, Zt.e)(Vt.panic)), Vt.refusedBytes > 0 && (jt.refusedAllocation = String(Vt.refusedBytes)), Xt.push((0, Zt.j)(Vt.kind, Vt.refusedBytes)));
      const Qt = pe(mt);
      return ce({
        kind: "crash",
        code: dt,
        site: tt.site,
        fatal: qt,
        message: [...Xt, ...Qt.labels, Ht].join("; "),
        details: {
          ...jt,
          ...Qt.details,
          ...Dt
        },
        error: tt.error
      })
    }

    function se(tt, et, Vt) {
      return ce({
        kind: "unsupported",
        code: et,
        site: ot,
        fatal: !0,
        message: Vt,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: tt,
          status: et
        },
        screen: {
          text: (0, It.r)(tt),
          reload: "download" === tt
        }
      })
    }
    const ne = {
      unsupported: "unsupported_js_fallback",
      blockedAfterLoss: "blocked_after_loss",
      noContext: "no_context_js_fallback"
    };

    function tV(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return ce({
        kind: "unsupportedFallback",
        code: ne[et],
        site: ot,
        fatal: !1,
        message: Vt,
        details: {
          ...Ot,
          cause: tt,
          status: "unsupported",
          decline: et,
          fallback: "js"
        }
      })
    }

    function eV(tt, et, Vt) {
      return ce({
        kind: "recovered",
        code: "reprobed" === tt ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: ot,
        fatal: !1,
        message: Vt,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: et,
          step: tt
        }
      })
    }

    function VV(tt) {
      return ce({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: ee,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: tt.join(",")
        }
      })
    }
    const OV = "reload=wasm";

    function qV(tt, et, Vt, Ot) {
      const qt = pe("declined" === Ot),
        Dt = "wasmReload" === Ot ? [OV] : qt.labels;
      return ce({
        kind: "unsupported",
        code: et,
        site: ot,
        fatal: !1,
        message: [...Dt, Vt].join("; "),
        details: {
          cause: tt,
          status: et,
          fallback: "wasmReload" === Ot ? "wasmReload" : "js",
          ...qt.details
        }
      })
    }

    function DV() {
      const {
        code: tt,
        message: et
      } = Pt.d;
      return ce({
        kind: "unstreamedLoad",
        code: tt,
        site: ot,
        fatal: !1,
        message: et
      })
    }
    class mV extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function dV(tt) {
      return tt instanceof ut.n ? 0 === tt.code ? "JOIN-matchmake" : `JOIN-${tt.code}` : tt instanceof ut.c ? 0 === tt.code ? `JOIN-${tt.stage}` : `JOIN-${tt.stage}-${tt.code}` : tt instanceof Ct.d ? "JOIN-gameCode" : tt instanceof mV ? "JOIN-turnstilePage" : tt instanceof ut.z ? "JOIN-trafficCheck" : tt instanceof Mt.c ? "JOIN-timeout" : "JOIN-network"
    }

    function jV(tt, et) {
      const Vt = (0, Ft.j)(tt),
        Ot = {
          wasmBuild: et.wasm,
          clientVersion: et.client
        },
        qt = tt instanceof mV ? {
          text: (0, It.n)(),
          reload: !1
        } : void 0,
        Dt = (0, Kt.g)(tt),
        mt = "expected" !== Dt;
      return ce({
        kind: "join",
        code: dV(tt),
        site: rt,
        fatal: !0,
        message: Vt,
        details: Ot,
        error: tt,
        screen: qt,
        toTransport: mt,
        instance: Dt
      })
    }

    function HV(tt, et, Vt) {
      var Ot;
      const qt = (0, Kt.g)(tt),
        Dt = {
          cause: (tt instanceof ut.c || tt instanceof ut.n) && null !== (Ot = tt.serverText) && void 0 !== Ot ? Ot : "",
          sinceJoinStart: (0, Nt.d)(Vt.sinceJoinStartMs),
          game: Vt.game,
          ...(0, Nt.k)(),
          wasmBuild: et.wasm,
          clientVersion: et.client
        };
      return ce({
        kind: "pageJoin",
        code: dV(tt),
        site: rt,
        fatal: !1,
        message: (0, Ft.j)(tt),
        details: Dt,
        error: tt,
        toTransport: "unrecognised" === qt,
        instance: qt
      })
    }
    const XV = {
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

    function QV(tt, et) {
      let {
        unused: Vt,
        answered: Ot,
        heldMs: qt
      } = tt;
      const {
        code: Dt,
        message: mt
      } = XV[Vt], dt = {
        unused: Vt,
        answered: String(Ot),
        heldMs: String(qt),
        wasmBuild: et.wasm,
        clientVersion: et.client
      };
      return ce({
        kind: "seat",
        code: Dt,
        site: rt,
        fatal: !1,
        message: mt,
        details: dt
      })
    }

    function lV(tt, et, Vt) {
      var Ot;
      let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Ot = tt.name) && void 0 !== Ot ? Ot : String(tt.code);
      const Dt = {
          closeCode: String(tt.code),
          recognised: String(null !== tt.name),
          closeReason: Vt.closeReason,
          sinceJoined: (0, Nt.d)(Vt.sinceJoinedMs),
          game: Vt.game,
          ...(0, Nt.k)(),
          wasmBuild: et.wasm,
          clientVersion: et.client
        },
        mt = null === tt.name && !(0, Nt.e)(tt.code);
      return ce({
        kind: "disconnect",
        code: qt,
        site: Ut,
        fatal: !1,
        message: "Left room",
        details: Dt,
        toTransport: mt
      })
    }

    function EV(tt, et) {
      const Vt = {
        ...(0, Et.i)(tt),
        wasmBuild: et.wasm,
        clientVersion: et.client
      };
      return ce({
        kind: "disconnect",
        code: `reconnect-${tt.reason}`,
        site: rt,
        fatal: !1,
        message: "Reconnect failed",
        details: Vt
      })
    }

    function fV(tt) {
      return tt.error instanceof Wt.f ? `MODEL-${tt.error.status}` : tt.error instanceof St.l ? "MODEL-ring" : "MODEL-network"
    }

    function wV(tt, et) {
      const Vt = fV(tt),
        Ot = `model file ${tt.file} ${tt.startup?"(startup) ":""}could not load`,
        qt = {
          file: String(tt.file),
          url: tt.url,
          wasmBuild: et.wasm,
          clientVersion: et.client
        };
      return ce({
        kind: tt.startup ? "model" : "modelLate",
        code: Vt,
        site: At,
        fatal: tt.startup,
        message: Ot,
        details: qt,
        error: tt.error
      })
    }

    function yV(tt, et) {
      const Vt = {
        wasmBuild: et.wasm,
        clientVersion: et.client
      };
      return ce({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: it,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: Vt,
        error: tt
      })
    }

    function NV(tt, et, Vt) {
      const Ot = {
        delayMs: String(et),
        wasmBuild: Vt.wasm,
        clientVersion: Vt.client
      };
      tt instanceof Wt.f && (Ot.status = String(tt.status));
      return ce({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: it,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Ot,
        error: tt
      })
    }

    function aV(tt, et) {
      const Vt = {
        wasmBuild: et.wasm,
        clientVersion: et.client
      };
      return ce({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: it,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: Vt,
        error: tt
      })
    }

    function MV(tt, et) {
      const Vt = {
        wasmBuild: et.wasm,
        clientVersion: et.client
      };
      return ce({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: Jt.E,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: Vt,
        error: tt
      })
    }

    function bV(tt, et) {
      const Vt = {
        wasmBuild: et.wasm,
        clientVersion: et.client
      };
      return ce({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: gt,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: Vt,
        error: tt
      })
    }

    function JV(tt, et, Vt, Ot) {
      const qt = {
        wasmBuild: Ot.wasm,
        clientVersion: Ot.client
      };
      return ce({
        kind: "texturePackKeptOut",
        code: (0, Ht.d)("wasm", tt, et),
        site: st,
        fatal: !1,
        message: et.detail,
        details: qt,
        error: Vt
      })
    }

    function CV(tt, et) {
      const {
        frames: Vt,
        acks: Ot,
        mask: qt,
        outcome: Dt
      } = tt, mt = {
        frames: String(Vt),
        acks: String(Ot),
        mask: String(qt),
        outcome: null !== Dt && void 0 !== Dt ? Dt : "resynced",
        wasmBuild: et.wasm,
        clientVersion: et.client
      };
      return ce({
        kind: "recovered",
        code: "rejoined" === Dt ? "CORE-eventOverflowRejoin" : "failed" === Dt ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: xt,
        fatal: !1,
        message: `the event buffer refused records in ${Vt} frames`,
        details: mt
      })
    }

    function uV(tt, et, Vt) {
      return ce({
        kind: "recovered",
        code: "CORE-workerLost",
        site: tt,
        fatal: !1,
        message: `a ${tt} worker was lost`,
        details: {
          reason: et,
          wasmBuild: Vt.wasm,
          clientVersion: Vt.client
        }
      })
    }

    function KV(tt, et, Vt) {
      const Ot = {
        wasmBuild: Vt.wasm,
        clientVersion: Vt.client
      };
      return ce({
        kind: "recovered",
        code: tt,
        site: Jt.p,
        fatal: !1,
        message: et,
        details: Ot
      })
    }

    function hV(tt, et) {
      const Vt = {
        lastReason: tt,
        wasmBuild: et.wasm,
        clientVersion: et.client
      };
      return ce({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: Jt.E,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: Vt
      })
    }

    function vV(tt, et, Vt) {
      return ce({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: Jt.l,
        fatal: !1,
        message: (0, ht.m)(tt) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: tt,
          ...et,
          wasmBuild: Vt.wasm,
          clientVersion: Vt.client
        }
      })
    }

    function WV(tt, et, Vt, Ot) {
      var qt, Dt;
      const mt = (0, lt.k)(),
        dt = {
          game: tt,
          cause: et,
          census: null === Vt ? "none" : JSON.stringify(Vt),
          gpu: null !== (qt = null === (Dt = (0, yt.y)()) || void 0 === Dt ? void 0 : Dt.renderer) && void 0 !== qt ? qt : "",
          renderWarned: String(mt),
          browser: (0, lt.j)(),
          wasmBuild: Ot.wasm,
          clientVersion: Ot.client
        },
        jt = `first view drew no whole terrain in ${ct.i/1e3} s, ${et}${mt?", render warned":""}`;
      return ce({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: nt,
        fatal: !1,
        message: jt,
        details: dt
      })
    }

    function SV(tt, et, Vt, Ot) {
      var qt, Dt, mt;
      const jt = null !== (qt = (0, dt.j)(null !== (Dt = null === (mt = (0, yt.t)()) || void 0 === mt ? void 0 : mt.renderer) && void 0 !== Dt ? Dt : null, (0, yt.p)())) && void 0 !== qt ? qt : "unknown",
        Ht = null === et ? "untimed" : `${Math.round(et)} ms`,
        Xt = `frames stalled, ${Vt}, gpu ${(0,lt.p)(jt)}, blocking ${Ht}, drawn ${Math.round(tt)} ms apart`,
        Qt = {
          gpuModel: jt,
          wasmBuild: Ot.wasm,
          clientVersion: Ot.client
        };
      return ce({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: te,
        fatal: !1,
        message: Xt,
        details: Qt
      })
    }

    function cV(tt, et, Vt) {
      return ce({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: tt,
        fatal: !1,
        message: `a ${tt} worker did not start`,
        details: {
          waitedMs: String(Math.round(et)),
          wasmBuild: Vt.wasm,
          clientVersion: Vt.client
        }
      })
    }

    function RV(tt, et, Vt) {
      return ce({
        kind: "recovered",
        code: "CORE-replayFault",
        site: tt,
        fatal: !1,
        message: `the replay's ${tt} failed`,
        details: {
          wasmBuild: Vt.wasm,
          clientVersion: Vt.client
        },
        error: et
      })
    }
    const IV = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function PV(tt) {
      if (0 === tt) return "none";
      const et = [60, 600, 3600].find((et => tt < et));
      return void 0 === et ? "ge3600" : `lt${et}`
    }

    function ZV(tt, et) {
      return null === tt ? "unbound" : (0, ft.h)(et - tt)
    }

    function LV(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (tt & Qt.V.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (tt & Qt.V.LINKS_RUNNING) ? "links running" : "", `frames ${(0,lt.p)(PV(tt&Qt.V.FRAMES))}`, `up ${(0,lt.p)(ZV(et,Vt))}`].filter(Boolean).join(", ")
    }

    function FV(tt, et, Vt) {
      const Ot = "lost" === et && void 0 !== Vt ? ` (${Vt})` : "";
      return `the ${tt} ${IV[et]}${Ot}`
    }
    const kV = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function GV(tt, et, Vt, Ot) {
      var qt;
      let {
        restoreLost: Dt = !1,
        adapterRemembered: mt = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const jt = null === Vt || void 0 === Vt ? void 0 : Vt.message,
        Ht = "pipeline_failed" === et ? et : Vt instanceof bt.d ? "timeout" : (0, ft.n)("frames_refused" === et, "string" === typeof jt ? jt : ""),
        Xt = null === Ot.boundAtMs ? "unbound" : `up${(0,ft.f)(dt-Ot.boundAtMs)}`,
        Qt = null === Ot.adapter ? "no adapter" : (0, ft.k)(Ot.adapter),
        lt = `${!0===Ot.indirectHangs?" ih":""}${!0===Ot.restoresSkipped?" nr":""}${Dt?" rl":""}${mt?" ar":""}`,
        Et = `${Ht} ${(0,bt.f)()?"hidden":"visible"} ${Xt}${lt} ${Qt}`;
      if ("webgpu" !== tt || "lost" !== et && "frames_refused" !== et) return {
        detail: Et,
        count: void 0
      };
      return {
        detail: Et,
        count: {
          errorKind: "render_lost",
          error: new Error(Et),
          code: (0, ft.v)(Ht, null !== (qt = Ot.boundAtMs) && void 0 !== qt ? qt : dt, dt).code,
          fields: {
            renderBackend: kt.c.webgpu
          }
        }
      }
    }

    function zV(tt, et, Vt) {
      const {
        count: Ot
      } = GV("webgpu", tt, et, Vt);
      void 0 !== Ot && Ie(Ot)
    }
    const oV = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function rV(tt) {
      var et;
      return null !== (et = tt instanceof Error ? tt.reason : void 0) && void 0 !== et ? et : ""
    }

    function UV(tt, et, Ot) {
      var qt, Dt, mt, jt, Ht;
      let {
        from: Xt,
        cause: Qt = "lost",
        restoreLost: Et = !1,
        adapterRemembered: yt = !1,
        error: Nt,
        context: Mt = kV,
        session: bt = oV
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, Jt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: Ct,
        count: ut
      } = GV(tt, Qt, Nt, Mt, {
        restoreLost: Et,
        adapterRemembered: yt
      }, Jt), Kt = {
        reloadFrom: null !== Xt && void 0 !== Xt ? Xt : "",
        losses: String(et),
        cause: Qt,
        detail: Ct,
        vendor: null !== (qt = null === (Dt = Mt.adapter) || void 0 === Dt ? void 0 : Dt.vendor) && void 0 !== qt ? qt : "",
        architecture: null !== (mt = null === (jt = Mt.adapter) || void 0 === jt ? void 0 : jt.architecture) && void 0 !== mt ? mt : "",
        indirectHangs: String(Mt.indirectHangs),
        restoresSkipped: String(Mt.restoresSkipped),
        restoreLost: String(Et),
        adapterRemembered: String(yt),
        lossReason: rV(Nt),
        samples: String(bt.samples),
        sunShadows: String(bt.sunShadows),
        renderDistance: String(bt.renderDistance),
        gpuFamily: null !== (Ht = (0, dt.b)()) && void 0 !== Ht ? Ht : "",
        browser: (0, lt.j)(),
        siteUsed: wt.siteUsed,
        wasmBuild: Ot.wasm,
        clientVersion: Ot.client
      }, ht = "webgpu" !== tt && void 0 !== Xt ? function(tt, et, Vt, Ot) {
        return `: ${tt}, ${et?"restore lost":"not restored"}, up ${(0,lt.p)(ZV(Vt,Ot))}`
      }(Xt, Et, Mt.boundAtMs, Jt) : "", vt = `${FV(tt,Qt)}${ht}`, Wt = ce({
        kind: "recovered",
        code: "CORE-renderLost",
        site: Bt,
        fatal: !1,
        message: vt,
        details: Kt,
        error: Nt,
        countAs: ut
      });
      return Le("ga", (async () => {
        const {
          logError: et
        } = await Promise.resolve().then((() => Vt(2990))), Ot = `${ft.c["webgpu"===tt?"WebGPU":"WebGL2"]}\n Error: ${Ct}`;
        et("warning", Ot), et("error", Ot)
      })), Wt
    }

    function AV(tt, et) {
      var Vt, Ot;
      const qt = null === tt.name ? "TEXTURE-sources" : null === tt.url ? "TEXTURE-nourl" : tt.error instanceof Rt.b ? `TEXTURE-${tt.error.status}` : "TEXTURE-network",
        Dt = null === tt.name ? "terrain textures could not load" : `terrain texture ${tt.name} could not load`,
        mt = {
          texture: null !== (Vt = tt.name) && void 0 !== Vt ? Vt : "",
          url: null !== (Ot = tt.url) && void 0 !== Ot ? Ot : "",
          wasmBuild: et.wasm,
          clientVersion: et.client
        };
      return ce({
        kind: "terrainTexture",
        code: qt,
        site: Jt.C,
        fatal: !1,
        message: Dt,
        details: mt,
        error: tt.error
      })
    }
    const iV = {
      previewAnimations: {
        site: pt,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: Tt,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function YV(tt, et, Vt, Ot) {
      const {
        site: qt,
        prefix: Dt,
        name: mt
      } = iV[tt], {
        stage: dt,
        error: jt
      } = Vt;
      return ce({
        kind: tt,
        code: "decode" === dt ? null === jt ? `${Dt}-decode` : `${Dt}-trap` : jt instanceof Wt.f ? `${Dt}-${jt.status}` : `${Dt}-network`,
        site: qt,
        fatal: !1,
        message: "decode" === dt ? `${mt} did not decode` : `${mt} could not load`,
        details: {
          url: et,
          wasmBuild: Ot.wasm,
          clientVersion: Ot.client
        },
        error: jt
      })
    }
    const BV = "staleBuild";

    function pV(tt, et, Vt) {
      const Ot = {
          failedSite: tt.site,
          url: tt.url,
          from: tt.from,
          sameBuild: String(tt.from === et),
          reloadMs: String(Math.max(0, Date.now() - tt.at)),
          wasmBuild: Vt.wasm,
          clientVersion: Vt.client
        },
        qt = `reloaded into a newer build after ${tt.site} failed to load: ${tt.error}`;
      return ce({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: BV,
        fatal: !1,
        message: qt,
        details: Ot
      })
    }
  },
  40996: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      i: () => qt,
      m: () => mt
    });
    var Ot = Vt(4963);
    const qt = 3e4;
    class Dt {
      constructor(tt) {
        this.iE = tt, this.waitedMs = 0, this.lastMs = null
      }
      frame(tt, et) {
        if (et) return !0;
        const Vt = null === this.lastMs ? 0 : tt - this.lastMs;
        return this.lastMs = tt, Vt <= 900 && (this.waitedMs += Vt), !(this.waitedMs < qt) && (this.iE(), !0)
      }
    }

    function mt(tt, et) {
      return 0 === (tt & Ot.X.ChunkRequested) ? "no_chunk_request" : 0 === (tt & Ot.X.ChunkStored) ? "chunk_not_stored" : 0 === (tt & Ot.X.MeshLanded) ? "not_meshed" : null === et ? "no_frame_drawn" : 0 === et.terrainParts ? "no_terrain_parts" : et.terrainCompiling > 0 ? "terrain_compiling" : et.terrainOpaque + et.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40769: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot,
      e: () => Nt,
      g: () => wt,
      k: () => yt,
      m: () => lt,
      n: () => Et,
      q: () => Xt,
      r: () => Qt,
      u: () => ft
    });
    class Ot extends Error {
      constructor(tt) {
        super(`the join's code did not load: ${tt instanceof Error?tt.message:String(tt)}`, {
          cause: tt
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === tt || void 0 === tt ? void 0 : tt.request
      }
    }
    let qt = null,
      Dt = null,
      mt = null;
    const dt = [];
    let jt = null;

    function Ht(tt, et) {
      try {
        tt(et)
      } catch (Vt) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Vt)
      }
    }

    function Xt() {
      return jt
    }

    function Qt(tt) {
      dt.push(tt), null !== jt && Ht(tt, jt)
    }

    function lt(tt) {
      return qt ??= Promise.all([Vt.e(73), Vt.e(98), Vt.e(226), Vt.e(78), Vt.e(227), Vt.e(201), Vt.e(97), Vt.e(246), Vt.e(273), Vt.e(199), Vt.e(214), Vt.e(191), Vt.e(198), Vt.e(193), Vt.e(144), Vt.e(88), Vt.e(122), Vt.e(252), Vt.e(57)]).then((() => Vt(42820))).then((et => {
        et.loadAudio(tt), jt = et;
        for (const tt of dt) Ht(tt, et);
        return et
      })).catch((tt => {
        throw qt = null, tt
      })), qt
    }
    async function Et(tt, et) {
      try {
        const Vt = await lt(tt);
        await Vt.loadClientGame(et)
      } catch (Vt) {
        throw new Ot(Vt)
      }
    }

    function ft(tt, et) {
      Dt = {
        running: tt,
        shell: et
      }
    }

    function wt() {
      return mt
    }
    async function yt(tt) {
      const et = Dt;
      if ((null === et || void 0 === et ? void 0 : et.running) !== tt) throw new Error("the core's session has ended");
      const Vt = await lt(et.shell.audio).catch((tt => {
        throw new Ot(tt)
      }));
      if (null !== mt) return mt;
      if (Dt !== et || tt.isStopped) throw new Error("the core stopped while the game code loaded");
      if (mt = Vt.startGameHost(tt, et.shell), null === mt) throw new Error("the core's shared tables didn't read, so the game can't start");
      return mt
    }

    function Nt() {
      null !== mt && (null !== jt ? jt.endGameHost(mt) : mt.closeGame()), mt = null, Dt = null
    }
  },
  40913: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    const Ot = {
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
  40882: (tt, et, Vt) => {
    Vt.d(et, {
      C: () => dt,
      c: () => Ht,
      e: () => Dt,
      i: () => mt,
      l: () => qt,
      n: () => Et,
      r: () => Xt,
      s: () => jt,
      w: () => lt,
      z: () => Qt
    });
    var Ot = Vt(1889);
    const qt = new Uint8Array([12]),
      Dt = 2e3,
      mt = 257;

    function dt(tt) {
      const et = new Uint8Array(4);
      return new DataView(et.buffer).setUint32(0, tt, !0), et
    }
    class jt extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Ht extends Error {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(tt), this.stage = et, this.code = Vt, this.serverText = Ot, this.socketOpened = qt, this.name = "JoinError"
      }
    }
    class Xt extends Error {
      constructor(tt) {
        super(tt), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Qt extends Error {
      constructor(tt) {
        super((0, Ot.f)(tt), {
          cause: tt
        }), this.name = "TrafficCheckError"
      }
    }
    class lt extends Error {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(tt, {
          cause: Vt
        }), this.networkLost = et, this.httpStatus = Ot, this.name = "SeatRequestError"
      }
    }
    class Et extends Error {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(tt), this.code = et, this.serverText = Vt, this.name = "MatchmakeError"
      }
    }
  },
  40886: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Et,
      g: () => lt,
      h: () => ft
    });
    var Ot = Vt(2719),
      qt = Vt(3059),
      Dt = Vt(39263),
      mt = Vt(36738),
      dt = Vt(39271),
      jt = Vt(40882),
      Ht = Vt(40890);
    const Xt = "seat reservation expired.",
      Qt = "early_leave";

    function lt(tt) {
      if (tt instanceof mt.c) return "expected";
      if (tt instanceof jt.w) return tt.networkLost ? "expected" : "unrecognised";
      if (tt instanceof jt.c) {
        if ("closed" === tt.stage && (0 === tt.code || (0, qt.e)(tt.code))) return "expected";
        if ("roomError" === tt.stage && (tt.serverText === Xt || tt.serverText === Qt)) return "expected"
      }
      return tt instanceof jt.c || tt instanceof jt.n ? null === (0, dt.l)(tt.code).name ? "unrecognised" : "known" : (0, Ot.f)(tt) ? "expected" : tt instanceof jt.z || tt instanceof Ht.c ? "known" : "unrecognised"
    }

    function Et(tt) {
      return tt instanceof mt.c ? "timedOut" : "expected" !== lt(tt) || (0, Ot.f)(tt) || tt instanceof jt.c && 1001 === tt.code ? void 0 : "failed"
    }

    function ft(tt) {
      return tt instanceof jt.c && "attach" !== tt.stage ? (0, Dt.b)(tt, "closed" !== tt.stage || tt.socketOpened ? "socket" : "socket_unopened") : tt instanceof jt.w ? {
        at: "seat_lost",
        code: tt.httpStatus
      } : tt instanceof jt.n || tt instanceof mt.c ? (0, Dt.b)(tt, tt instanceof mt.c ? tt.leg : "seat") : void 0
    }
  },
  40977: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => jt,
      f: () => Ht,
      i: () => Et,
      l: () => Qt
    });
    var Ot = Vt(2965),
      qt = Vt(4960),
      Dt = Vt(40985),
      mt = Vt(40987),
      dt = Vt(36507);
    const jt = 395,
      Ht = 2147483648,
      Xt = new Uint8Array(0);
    class Qt extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class lt extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Et {
      constructor(tt, et, Vt) {
        var Ot, qt, mt, dt;
        let jt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = tt, this.build = et, this.onFailure = Vt, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.hE = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Ot = jt.fetchFile) && void 0 !== Ot ? Ot : tt => (0, Dt.i)(tt), this.onWritten = null !== (qt = jt.onWritten) && void 0 !== qt ? qt : null, this.onTaken = null !== (mt = jt.onTaken) && void 0 !== mt ? mt : null, this.onPackFileFailed = null !== (dt = jt.onPackFileFailed) && void 0 !== dt ? dt : null, this.startupLeft = new Set(tt.startup);
        for (const Dt of tt.startup) this.request(Dt)
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
      drawnUrl(tt) {
        return this.drawn.get(tt)
      }
      request(tt) {
        const et = this.pending.get(tt);
        if (!0 === (null === et || void 0 === et ? void 0 : et.ask)) return;
        const Vt = this.XE(tt, !0);
        Vt.recheck = void 0 !== et;
        const Ot = this.drawn.get(tt);
        if (void 0 !== Ot) return Vt.Pd = !0, Vt.recheck = !0, void this.fetch(tt, Vt, Ot);
        this.fetchWanted(tt, Vt)
      }
      async refresh() {
        const tt = ++this.refreshes,
          et = new Set;
        for (const mt of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const tt of mt) 0 === (tt & Dt.e) && et.add(tt);
        const Vt = [...et];
        let Ot;
        try {
          Ot = await Promise.all(Vt.map((tt => this.wanted(tt))))
        } catch {
          return null
        }
        if (tt !== this.refreshes) return null;
        const qt = {
          resent: 0,
          refetched: 0,
          delivered: Vt.filter((tt => this.drawn.has(tt))).length
        };
        return Vt.forEach(((tt, et) => {
          const {
            url: Vt,
            inPlaceOf: Dt
          } = Ot[et], mt = this.pending.get(tt);
          if (void 0 !== mt) {
            if (mt.Pd || void 0 === mt.url) return void(mt.recheck = !0);
            if (mt.url === Vt) return;
            qt.refetched++;
            const et = this.XE(tt, mt.ask);
            return et.recheck = mt.recheck, void this.fetch(tt, et, Vt, Dt)
          }
          const dt = this.written.get(tt);
          void 0 === dt ? this.drawn.get(tt) !== (null !== Vt && void 0 !== Vt ? Vt : void 0) && (qt.resent++, this.fetch(tt, this.XE(tt, !1), Vt, Dt)) : dt.url !== (null !== Vt && void 0 !== Vt ? Vt : "") && (dt.attempt.recheck = !0)
        })), qt
      }
      taken(tt, et) {
        const Vt = new Set,
          Ot = new Set;
        for (const qt of Array.from(et)) 0 === (qt & Ht) ? Vt.add(qt) : Ot.add((qt & ~Ht) >>> 0);
        for (const [qt, Dt] of this.written) Dt.seq > tt || (this.written.delete(qt), Vt.has(Dt.seq) ? this.refusedFile(qt, Dt) : this.takenFile(qt, Dt, !Dt.empty && !Ot.has(Dt.seq)))
      }
      takenFile(tt, et, Vt) {
        const {
          attempt: Ot
        } = et;
        if (Vt) {
          var qt;
          this.drawn.set(tt, et.url), this.undrawn.delete(tt), void 0 !== Ot.inPlaceOf ? this.refusedPack.set(tt, Ot.inPlaceOf) : Ot.Pd || this.refusedPack.delete(tt), null === (qt = this.onTaken) || void 0 === qt || qt.call(this, tt, !0);
          const Vt = this.pending.get(tt);
          if (!0 === (null === Vt || void 0 === Vt ? void 0 : Vt.Pd) && Vt.url !== et.url) {
            const Vt = this.XE(tt, !0);
            Vt.Pd = !0, Vt.recheck = !0, this.fetch(tt, Vt, et.url)
          }
        } else {
          var Dt;
          this.drawn.has(tt) || this.undrawn.add(tt), null === (Dt = this.onTaken) || void 0 === Dt || Dt.call(this, tt, !1)
        }
        Ot.recheck && this.resendIfChanged(tt)
      }
      refusedFile(tt, et) {
        var Vt, Ot;
        if (null === (Vt = this.onTaken) || void 0 === Vt || Vt.call(this, tt, !1), this.refusedPack.set(tt, et.url), this.pending.has(tt)) return void(null === (Ot = this.onPackFileFailed) || void 0 === Ot || Ot.call(this, tt, ft(et.url)));
        const qt = this.XE(tt, et.attempt.ask);
        qt.recheck = et.attempt.recheck, this.afterRefusal(tt, qt, et.url)
      }
      async afterRefusal(tt, et, Vt) {
        var Ot;
        let qt;
        try {
          qt = await this.wanted(tt)
        } catch (Dt) {
          return void(this.pending.get(tt) === et && this.giveUp(tt, et, Vt, Dt))
        }
        this.pending.get(tt) === et && (qt.inPlaceOf !== Vt ? et.ask || (null !== (Ot = qt.url) && void 0 !== Ot ? Ot : void 0) !== this.drawn.get(tt) ? this.fetch(tt, et, qt.url, qt.inPlaceOf) : this.pending.delete(tt) : this.fallBack(tt, et, Vt, ft(Vt)))
      }
      XE(tt, et) {
        const Vt = {
          url: void 0,
          ask: et,
          Pd: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(tt, Vt);
        for (let Ot = this.ready.length - 1; Ot >= 0; Ot--) this.ready[Ot].file === tt && this.ready.splice(Ot, 1);
        return Vt
      }
      async wanted(tt) {
        const et = await this.files.url(tt);
        return null !== et && this.refusedPack.get(tt) === et ? {
          url: await this.files.shippedUrl(tt),
          inPlaceOf: et
        } : {
          url: et,
          inPlaceOf: void 0
        }
      }
      fetchWanted(tt, et) {
        const Vt = this.files.url(tt);
        Vt instanceof Promise ? Vt.then((Vt => {
          this.fetchFound(tt, et, Vt)
        }), (Vt => {
          this.pending.get(tt) === et && this.giveUp(tt, et, "", Vt)
        })) : this.fetchFound(tt, et, Vt)
      }
      fetchFound(tt, et, Vt) {
        null !== Vt && this.refusedPack.get(tt) === Vt ? Promise.resolve(this.files.shippedUrl(tt)).then((Ot => {
          this.fetch(tt, et, Ot, Vt)
        }), (Ot => {
          this.pending.get(tt) === et && this.giveUp(tt, et, Vt, Ot)
        })) : this.fetch(tt, et, Vt)
      }
      fetch(tt, et, Vt, Ot) {
        this.pending.get(tt) === et && (et.url = Vt, et.inPlaceOf = Ot, null !== Vt ? this.load(tt, et, Vt) : this.buildFile(tt, et, "", Xt))
      }
      load(tt, et, Vt) {
        const Ot = this.hE.get(tt);
        (null === Ot || void 0 === Ot ? void 0 : Ot.url) !== Vt ? this.fetchFile(Vt).then((Ot => {
          var qt, Dt;
          this.pending.get(tt) === et && (this.keptTotal += Ot.byteLength - (null !== (qt = null === (Dt = this.hE.get(tt)) || void 0 === Dt ? void 0 : Dt.glb.byteLength) && void 0 !== qt ? qt : 0), this.hE.set(tt, {
            url: Vt,
            glb: Ot
          }), this.buildFile(tt, et, Vt, Ot))
        }), (Ot => {
          this.pending.get(tt) === et && this.fallBack(tt, et, Vt, Ot)
        })) : this.buildFile(tt, et, Vt, Ot.glb)
      }
      buildFile(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const mt = Ot.byteLength > 0 && (0, Dt.m)(Vt) ? (tt | Dt.c) >>> 0 : tt;
        this.queueRecord(tt, et, Vt, Ot, this.build(mt, Ot), qt)
      }
      queueRecord(tt, et, Vt, Ot, Dt, dt) {
        Dt.then((Dt => {
          if (this.pending.get(tt) !== et) return;
          if (qt.q + (0, qt.Fe)(Dt.byteLength) > qt.Xc) return void this.ringRefused(tt, et, Vt, new Qt(`${wt(Vt)}'s record is ${Dt.byteLength-mt.b} bytes, past the cmd ring's ${qt.Xc}`), dt);
          const jt = {
            file: tt,
            url: Vt,
            payload: Dt,
            glb: Ot,
            attempt: et
          };
          dt ? this.ready.unshift(jt) : this.ready.push(jt)
        }))
      }
      async fallBack(tt, et, Vt, Ot) {
        var qt;
        let Dt = null,
          mt = Ot;
        try {
          Dt = await this.files.shippedUrl(tt)
        } catch (dt) {
          mt = dt
        }
        this.pending.get(tt) === et && (null !== Dt && Dt !== Vt ? (null === (qt = this.onPackFileFailed) || void 0 === qt || qt.call(this, tt, Ot), et.ask || this.drawn.get(tt) !== Dt ? (et.url = Dt, et.inPlaceOf = Vt, this.load(tt, et, Dt)) : this.pending.delete(tt)) : this.giveUp(tt, et, Vt, mt))
      }
      ringRefused(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Dt.m)(Vt) ? this.fallBack(tt, et, Vt, Ot): this.giveUp(tt, et, Vt, Ot, qt)
      }
      giveUp(tt, et, Vt, qt) {
        let Dt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: tt,
          url: wt(Vt),
          error: qt,
          startup: this.startupLeft.has(tt)
        }), et.ask || !this.drawn.has(tt) ? (0, Ot.N)(qt) ? this.queueRecord(tt, et, Vt, Xt, Promise.resolve((0, mt.m)(tt, (0, dt.j)(qt))), Dt) : this.buildFile(tt, et, Vt, Xt, Dt) : this.pending.delete(tt)
      }
      async resendIfChanged(tt) {
        var et;
        if (0 !== (tt & Dt.e)) return;
        let Vt;
        try {
          Vt = await this.wanted(tt)
        } catch {
          return
        }(null !== (et = Vt.url) && void 0 !== et ? et : void 0) === this.drawn.get(tt) || this.pending.has(tt) || this.written.has(tt) || this.fetch(tt, this.XE(tt, !1), Vt.url, Vt.inPlaceOf)
      }
      drain(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === tt) return;
        let Vt = 0,
          Ot = 0;
        for (; Ot < this.ready.length && Vt < 262144;) {
          const dt = this.ready[Ot];
          if (this.written.has(dt.file)) {
            Ot++;
            continue
          }
          const Xt = this.nextSeq;
          new DataView(dt.payload.buffer, dt.payload.byteOffset, dt.payload.byteLength).setUint32(mt.f, Xt, !0);
          const lt = dt.attempt.Pd && dt.glb.byteLength > 0 && this.drawn.get(dt.file) === dt.url;
          if (tt(jt, lt ? 1 : 0, dt.payload)) {
            if (this.nextSeq = Xt >= Ht - 1 ? 1 : Xt + 1, this.ready.splice(Ot, 1), Vt += dt.payload.byteLength, this.pending.delete(dt.file), this.startupLeft.delete(dt.file), this.written.set(dt.file, {
                seq: Xt,
                url: dt.url,
                empty: 0 === dt.glb.byteLength,
                attempt: dt.attempt
              }), dt.glb.byteLength > 0) try {
              var qt;
              null === (qt = this.onWritten) || void 0 === qt || qt.call(this, dt.file, dt.glb)
            } catch (Dt) {
              console.warn("ModelFeed: reading the file's images failed", Dt)
            }
          } else {
            if (null === et || 0 === dt.glb.byteLength || et(dt.payload.byteLength)) return;
            this.ready.splice(Ot, 1);
            const tt = new Qt(`${wt(dt.url)}'s record is ${dt.payload.byteLength-mt.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(dt.file, dt.attempt, dt.url, tt, !0)
          }
        }
      }
    }

    function ft(tt) {
      return new lt(`presentation refused ${wt(tt)}`)
    }

    function wt(tt) {
      return tt.startsWith("data:") ? `${tt.slice(0,Math.min(Math.max(tt.indexOf(","),5),64))},...` : tt
    }
  },
  40985: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt,
      e: () => Dt,
      i: () => Xt,
      m: () => dt,
      n: () => Ht,
      p: () => jt
    });
    var Ot = Vt(2965),
      qt = Vt(3266);
    const Dt = 2147483648,
      mt = 1073741824;

    function dt(tt) {
      return tt.startsWith("data:")
    }

    function jt(tt) {
      let {
        onTableFailed: et,
        packUrl: Vt
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Ot = Ht();
      Ot.catch((tt => {
        null === et || void 0 === et || et(tt)
      }));
      const qt = async et => (await Ot).fileUrl((et & ~Dt) >>> 0, tt);
      return {
        startup: [],
        url: async tt => {
          if (Vt && 0 === (tt & Dt)) {
            const et = await Ot,
              qt = et.filePackName(tt),
              Dt = null === qt || "lifeform" === et.fileSource(tt) ? null : Vt(qt);
            if (null !== Dt) return Dt
          }
          return qt(tt)
        },
        shippedUrl: qt
      }
    }

    function Ht() {
      return Vt.e(42).then((() => Vt(42906)))
    }
    async function Xt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return tt.startsWith("data:") ? (0, qt.c)(tt.slice(tt.indexOf(",") + 1), et) : (0, Ot.I)(tt, {
        spare: et
      })
    }
  },
  40987: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ht,
      f: () => Xt,
      h: () => Et,
      k: () => yt,
      m: () => ft,
      q: () => lt,
      s: () => wt
    });
    const Ot = 826427981,
      qt = 1,
      Dt = 2,
      mt = 44,
      dt = 46,
      jt = 58,
      Ht = 8,
      Xt = 4;

    function Qt(tt, et, Vt) {
      const qt = (new TextEncoder).encode(Vt),
        Dt = Ht + 4 * (et.length + 2),
        mt = new Uint8Array(Dt + (qt.byteLength + 3 & -4)),
        dt = new DataView(mt.buffer);
      return dt.setUint32(0, tt, !0), dt.setUint32(Ht, Ot, !0), et.forEach(((tt, et) => {
        dt.setUint32(Ht + 4 * (et + 1), tt, !0)
      })), dt.setUint32(Dt - 4, qt.byteLength, !0), mt.set(qt, Dt), mt
    }

    function lt(tt, et) {
      return Qt(tt, [Dt], et)
    }

    function Et(tt, et) {
      return Qt(tt, [qt, dt], et)
    }

    function ft(tt, et) {
      return Qt(tt, [qt, jt], et)
    }

    function wt(tt, et) {
      return Qt(tt, [qt, mt], et)
    }

    function yt(tt) {
      const et = Ht;
      if (tt.byteLength < et + 12) return !1;
      const Vt = new DataView(tt.buffer, tt.byteOffset, tt.byteLength);
      return Vt.getUint32(et, !0) === Ot && Vt.getUint32(et + 4, !0) === qt && Vt.getUint32(et + 8, !0) === mt
    }
  },
  40916: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      h: () => Xt,
      l: () => mt,
      p: () => jt
    });
    var Ot = Vt(36507);
    class qt extends Error {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${tt}: the module trapped${Vt?" in an earlier call":""}: ${String(et)}`, {
          cause: et
        }), this.site = tt, this.trap = et, this.earlier = Vt, this.name = "ModuleTrapError", et instanceof Error && void 0 !== et.stack && (this.stack = `${this.name}: ${this.message}\n${et.stack}`)
      }
    }
    const Dt = new WeakMap;

    function mt(tt) {
      return Dt.has(tt)
    }

    function dt(tt, et) {
      Dt.has(tt) || Dt.set(tt, et)
    }

    function jt(tt, et) {
      return !!(0, Ot.i)(et) && (dt(tt, et), !0)
    }
    const Ht = [
      ["error", tt => tt.error],
      ["unhandledrejection", tt => tt.reason]
    ];

    function Xt(tt, et, Vt) {
      let mt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Dt.has(tt) ? Promise.reject(new qt(et, Dt.get(tt), !0)) : new Promise(((Dt, jt) => {
        const Xt = Vt => {
            dt(tt, Vt), Et(), jt(new qt(et, Vt))
          },
          Qt = tt => {
            tt instanceof WebAssembly.RuntimeError ? Xt(tt) : (Et(), jt(tt))
          },
          lt = Ht.map((tt => {
            let [et, Vt] = tt;
            return [et, tt => {
              const et = Vt(tt);
              (0, Ot.i)(et) && Xt(et)
            }]
          })),
          Et = () => {
            for (const [tt, et] of lt) null === mt || void 0 === mt || mt.removeEventListener(tt, et)
          };
        for (const [tt, et] of lt) null === mt || void 0 === mt || mt.addEventListener(tt, et);
        let ft;
        try {
          ft = Vt()
        } catch (wt) {
          return void Qt(wt)
        }
        ft.then((tt => {
          Et(), Dt(tt)
        }), Qt)
      }))
    }
  },
  40903: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => ct,
      D: () => Ut,
      F: () => rt,
      H: () => Zt,
      J: () => ht,
      L: () => It,
      N: () => At,
      Q: () => Pt,
      S: () => Ft,
      V: () => Rt,
      Y: () => it,
      e: () => Kt,
      g: () => Jt,
      k: () => kt,
      l: () => Lt,
      o: () => bt,
      q: () => ut,
      t: () => Nt,
      x: () => Wt
    });
    var Ot = Vt(241),
      qt = Vt(26),
      Dt = Vt(3630),
      mt = Vt(373),
      dt = Vt(39),
      jt = Vt(40905),
      Ht = Vt(36715),
      Xt = Vt(40927),
      Qt = (Vt(40960), Vt(41022)),
      lt = Vt(40946);
    const Et = "wasmJoinBuild";
    let ft = null,
      wt = null,
      yt = null;

    function Nt(tt) {
      yt = tt
    }
    let Mt = !1;

    function bt() {
      Mt = !0
    }

    function Jt() {
      return Mt
    }
    let Ct = !1;

    function ut() {
      Ct = !0
    }

    function Kt() {
      return Ct
    }

    function ht() {
      return yt
    }
    let vt = null;

    function Wt(tt) {
      vt = tt, (0, mt.b)(tt)
    }
    const St = "wasmClientRenderLost";

    function ct() {
      dt.h.setItem(St, !0)
    }

    function Rt() {
      return !0 === dt.h.getItem(St)
    }

    function It() {
      return vt
    }

    function Pt() {
      if (null === ft) {
        dt.e.removeItem("wasmLastPick"), dt.e.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, mt.h)(), ft = (0, jt.A)(Xt.i).then((tt => (null === tt || (0, jt.l)(tt) || (wt = Qt.c[tt.backend], qt.b.followGameGpu("webgpu" === tt.backend ? tt.adapter : null), "webgpu" === tt.backend && (0, lt.f)()), tt)))
      }
      return ft
    }

    function Zt() {
      return wt
    }

    function Lt(tt) {
      return tt ? tt.load() : Promise.resolve().then((function() {
        var tt = new Error("Cannot find module '@bloxd/wasm/client'");
        throw tt.code = "MODULE_NOT_FOUND", tt
      })).then((tt => tt.bloxdWasmClient))
    }

    function Ft(tt) {
      dt.e.setItem(Et, tt)
    }
    async function kt() {
      if (null === Xt.i) return Lt(null);
      const tt = dt.e.getItem(Et);
      let et;
      return null === tt ? et = void 0 !== (0, Ot.c)(Xt.i, "webgpu") && (0, jt.w)() ? "webgpu" : "webgl" : "none" === tt ? et = null : "string" === typeof tt && void 0 !== (0, Ot.c)(Xt.i, tt) ? et = tt : (console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(tt)}, is none of this client's: guessing WebGL2's`), et = "webgl"), null === et ? null : Xt.i[et]()
    }
    let Gt = null,
      zt = null,
      ot = null;

    function rt() {
      return Gt ??= Pt().then((async tt => {
        const et = null !== tt && !(0, jt.l)(tt),
          Vt = {
            indirectHangs: et && await (0, jt.I)(tt, window.location.search),
            storagePullBreaks: et && (0, jt.W)(tt, window.location.search),
            splitPassBreaks: et && (0, jt.T)(tt, window.location.search),
            earlySky: et && (0, jt.E)(tt, window.location.search),
            instancedTerrain: et ? (0, jt.L)(tt, window.location.search) : null,
            cellLight: et && await (0, Dt.i)("cellLight"),
            framesAhead: (0, jt.g)(window.location.search),
            webGpuRestores: !et || (0, jt._)(tt, (0, Ht.b)()),
            bufferCopiesCrash: et && (0, jt.D)(tt, window.location.search)
          };
        return zt = Vt.indirectHangs, ot = !Vt.webGpuRestores, Vt
      })), Gt
    }

    function Ut() {
      return zt
    }

    function At() {
      return ot
    }
    async function it() {
      const tt = null === ft ? null : await ft;
      return null !== tt && (0, jt.l)(tt) && (ft = null, Gt = null, zt = null, ot = null), Pt()
    }
  },
  41167: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt
    });
    var Ot = Vt(36535),
      qt = Vt(41057),
      Dt = Vt(36715);

    function mt(tt, et) {
      return (0, Ot.o)(tt, qt.d, {
        ...et,
        memoryMaximumBytes: (0, Dt.l)()
      })
    }
  },
  40920: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht,
      d: () => dt,
      h: () => Xt,
      l: () => mt
    });
    var Ot = Vt(388),
      qt = Vt(720);
    let Dt;

    function mt(tt) {
      var et;
      const Vt = Dt;
      return Dt = void 0, null !== (et = jt(tt)) && void 0 !== et ? et : Vt
    }

    function dt(tt) {
      try {
        const et = jt(tt);
        void 0 !== et && (Dt = et, (0, qt.h)((0, Ot.n)(et.reason, et.message)))
      } catch (et) {
        console.warn("Couldn't keep the WebGPU loss's cause", et)
      }
    }

    function jt(tt) {
      var et;
      const Vt = null === tt || void 0 === tt || null === (et = tt.BDt) || void 0 === et ? void 0 : et.call(tt),
        Ot = null === tt || void 0 === tt ? void 0 : tt.YDt();
      if (void 0 === Ot) return;
      const qt = new Error(Ot);
      return void 0 !== Vt && (qt.reason = Vt), qt
    }

    function Ht(tt) {
      return tt instanceof Error ? tt : void 0
    }

    function Xt(tt, et) {
      return "lost" !== tt && "frames_refused" !== tt ? {} : (0, Ot.n)("frames_refused" === tt ? tt : null === et || void 0 === et ? void 0 : et.reason, null === et || void 0 === et ? void 0 : et.message)
    }
  },
  40940: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => ht,
      d: () => bt,
      f: () => Mt,
      j: () => Kt,
      k: () => ct,
      n: () => St,
      o: () => Rt,
      p: () => Ct
    });
    var Ot = Vt(4963),
      qt = Vt(40946);
    const Dt = 1,
      mt = 18,
      dt = 19,
      jt = 20,
      Ht = 21,
      Xt = {
        [Dt]: "link",
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
        [mt]: "retry linked",
        [dt]: "fallback linked",
        [jt]: "fallback failed",
        [Ht]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function Qt(tt, et, Vt) {
      return tt === mt ? "program retry" : tt === Dt ? "program link" : tt === Ht ? "program link stall" : tt === dt || tt === jt ? `program ${et} ${Vt}` : "program"
    }
    const lt = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      Et = {
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
      ft = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      wt = {
        11: "none read after view",
        12: "some read after view"
      },
      yt = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...wt
      },
      Nt = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function Mt(tt, et) {
      return tt === Ot.l.RenderSerialLinks && void 0 !== wt[et]
    }

    function bt(tt, et) {
      return tt === Ot.l.RenderSerialLinks && void 0 !== Nt[15 & et]
    }
    const Jt = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function Ct(tt) {
      return String(tt).replace(/\d/g, (tt => String.fromCharCode(97 + Number(tt))))
    }

    function ut(tt, et) {
      var Vt;
      return null !== (Vt = tt[et]) && void 0 !== Vt ? Vt : Ct(et)
    }

    function Kt() {
      return Ct((0, qt.c)())
    }

    function ht(tt, et) {
      switch (tt) {
        case Ot.l.RenderSceneRowNotDrawn:
          return {
            words: ` ${ut(Et,et)}`, instance: String(et), group: String(tt)
          };
        case Ot.l.RenderChunkMeshNotDrawn: {
          const Vt = 0 === (128 & et) ? "" : " shortage",
            Ot = et >>> 8;
          return {
            words: ` ${ut(ft,127&et)}${Vt}${0===Ot?"":` kind ${Ct(Ot)}`}`,
            instance: String(et),
            group: String(tt)
          }
        }
        case Ot.l.RenderInternal: {
          const Vt = ut(lt, 255 & et),
            Ot = et >>> 8 & 255;
          if (0 === Ot) return {
            words: ` ${Vt}`,
            instance: String(et),
            group: String(tt)
          };
          const qt = ut(Xt, Ot),
            Dt = et >>> 16;
          return {
            words: ` ${Vt} ${qt} program ${Ct(Dt)}`,
            instance: `${Vt} ${qt} ${Dt}`,
            group: Qt(Ot, qt, Vt),
            gpuDetails: {
              programFailure: qt,
              program: String(Dt)
            }
          }
        }
        case Ot.l.RenderSerialLinks: {
          if (bt(tt, et)) {
            const tt = function(tt) {
              const et = (et, Vt) => Ct(tt >>> et & (1 << Vt) - 1),
                Vt = tt >>> 30 & 1 ? " restored" : "";
              return `link census ${Nt[15&tt]} linked ${et(22,8)} failed ${et(4,6)} retried ${et(10,6)} fallback ${et(16,6)}${Vt}`
            }(et);
            return {
              words: ` ${tt}`,
              instance: String(15 & et),
              group: "link census",
              gpuDetails: {
                linkCensus: tt
              }
            }
          }
          const Vt = ut(yt, et);
          return {
            words: ` ${Vt}`,
            instance: String(et),
            group: String(tt),
            gpuDetails: {
              serialLinks: Vt
            }
          }
        }
        case Ot.l.RenderGlErrorAfterRestore: {
          const Vt = ut(Jt, 65535 & et),
            Ot = et >>> 16,
            qt = 65535 !== Ot;
          return {
            words: ` ${Vt}${qt?` program ${Ct(Ot)}`:""}`,
            instance: String(et),
            group: String(tt),
            gpuDetails: qt ? {
              glError: Vt,
              program: String(Ot)
            } : {
              glError: Vt
            }
          }
        }
        default:
          return null
      }
    }
    const vt = 2,
      Wt = new Map;

    function St(tt) {
      let {
        group: et,
        instance: Vt
      } = tt, Ot = Wt.get(et);
      return void 0 === Ot && (Ot = [], Wt.set(et, Ot)), !Ot.includes(Vt) && (Ot.length >= vt || (Ot.push(Vt), !1))
    }

    function ct() {
      return Wt.size > 0
    }

    function Rt() {
      Wt.clear()
    }
  },
  40927: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      i: () => Dt
    });
    var Ot = Vt(40933);
    const qt = new WeakSet;
    const Dt = {
        webgpu: async () => (function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === tt || qt.has(tt.prototype)) return;
          qt.add(tt.prototype);
          const et = tt.prototype.requestDevice;
          tt.prototype.requestDevice = function(tt) {
            var Vt;
            const qt = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.requiredLimits) && void 0 !== Vt ? Vt : {},
              Dt = Object.keys(qt).filter((tt => !(tt in this.limits)));
            if (0 === Dt.length) return et.call(this, tt);
            const mt = Object.fromEntries(Object.entries(qt).filter((tt => {
              let [et] = tt;
              return et in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${Dt.join(", ")}`), (0, Ot.reportDroppedRequiredLimits)(Dt), et.call(this, {
              ...tt,
              requiredLimits: mt
            })
          }
        }(), (await Vt.e(8).then((() => Vt(42851)))).bloxdWasmWebgpu),
        webgl: async () => (await Vt.e(6).then((() => Vt(42861)))).bloxdWasmWebgl,
        webgl1: async () => (await Vt.e(7).then((() => Vt(42875)))).bloxdWasmWebgl1
      },
      mt = async () => (await Vt.e(5).then((() => Vt(42890)))).compileAnimationPackInWasm
  },
  40890: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Nt,
      g: () => yt,
      j: () => Ct
    });
    var Ot = Vt(6848),
      qt = Vt(31),
      Dt = Vt(4406),
      mt = Vt(4963),
      dt = Vt(6839),
      jt = Vt(40892);

    function Ht(tt, et) {
      const Vt = (0, dt.e)(et.variants);
      return tt.setShaderPack(Vt.variantFlags, Vt.hooks, Vt.moduleCodes, (0, jt.w)(et.layers), jt.n[et.Ed], et.keepCircleShadows)
    }
    const Xt = 0,
      Qt = 1,
      lt = 2,
      Et = "shaderPack:failedToCompile",
      ft = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      wt = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function yt(tt, et) {
      var Vt;
      const Ot = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.reason) && void 0 !== Vt ? Vt : "none";
      return ft.has(Ot) ? {
        messageKey: et ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Ot && "override" === (null === tt || void 0 === tt ? void 0 : tt.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: wt.has(Ot) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class Nt extends Error {
      constructor(tt) {
        super(`the shader pack can't run in this game: ${tt}`), this.messageKey = tt, this.name = "ShaderPackJoinError"
      }
    }
    const Mt = "strict";
    class bt {
      constructor(tt) {
        this.deps = tt, this.pagePack = void 0, this.loaded = null, this.Ed = Mt, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = tt.load().catch((et => (tt.warn("the shader pack could not load: the game draws without it", et), {
          status: "none"
        }))).then((tt => (this.loaded = tt, "active" === tt.status && (this.handOverToPreviews(tt), null !== tt.harnessPolicy && (this.Ed = tt.harnessPolicy, this.handOver())), tt)))
      }
      async join(tt) {
        this.leave();
        const et = this.game,
          [Vt, qt] = await Promise.all([this.pagePack, this.policyOf(tt)]);
        if (et !== this.game || "none" === Vt.status) return null;
        const Dt = "active" === Vt.status ? Vt.pack.variants : Vt.variants,
          mt = (0, Ot.i)(Dt, qt);
        if (mt && "active" === Vt.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (mt) {
          const tt = this.cantRun(Vt, qt);
          if (null !== tt) return tt
        } else if ("blocked" === Vt.status || null === this.deps.core) return null;
        return this.Ed = qt, this.handOver(), mt && this.refused ? Et : (this.joined = !0, this.offInThisGame = !mt, null)
      }
      async replay(tt) {
        const et = await this.join(tt);
        null === et ? this.playable() : this.deps.failInGame(et)
      }
      cantRun(tt, et) {
        const {
          core: Vt,
          noWebGpu: Ot
        } = this.deps;
        if ("blocked" === tt.status) {
          return "shaderPack:failedUnchecked" === tt.messageKey && null === Vt && Ot.noAdapter ? Ot.messageKey : tt.messageKey
        }
        return this.refused || this.failedPolicies.has(et) ? Et : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var tt;
        return this.runsInJoinedGame() && "active" === (null === (tt = this.loaded) || void 0 === tt ? void 0 : tt.status) ? function(tt, et) {
          const Vt = tt.filter((tt => (0, Ot.i)([tt], et))),
            qt = tt => Vt.some((et => et[tt]));
          return {
            sceneDepth: qt("sceneDepth"),
            sunShadow: qt("sunShadow"),
            airShadow: qt("airShadow")
          }
        }(this.loaded.pack.variants, this.Ed) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Et) : (null !== this.couldntRun ? this.notify(Dt.d, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Ed) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(tt) {
        for (const {
            code: et,
            detail: Vt
          }
          of tt)
          if (et === mt.l.RenderShaderPackNotRun) switch (255 & Vt) {
            case Xt:
              this.refused = !0, this.failed();
              break;
            case Qt:
              this.failedPolicies.add(this.Ed), this.failed();
              break;
            case lt:
              this.failedModelPolicies.add(this.Ed), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Et) : this.failedWhileJoining = !0)
      }
      fail(tt) {
        this.leave(), this.deps.failInGame(tt)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(tt, et) {
        const Vt = this.game;
        this.deps.notify(tt, (() => Vt === this.game && this.joined), et)
      }
      handOver() {
        var tt;
        const {
          core: et
        } = this.deps;
        null !== et && "active" === (null === (tt = this.loaded) || void 0 === tt ? void 0 : tt.status) && (Ht(et, {
          ...this.loaded.pack,
          Ed: this.Ed
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(tt) {
        let {
          pack: et,
          harnessPolicy: Vt
        } = tt;
        const {
          previews: Ot
        } = this.deps;
        null !== Ot && Ht(Ot, {
          ...et,
          Ed: null !== Vt && void 0 !== Vt ? Vt : Mt
        })
      }
      policyOf(tt) {
        return this.deps.policyOf(tt).catch((tt => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", tt), Mt)))
      }
    }
    const Jt = "wasmShaderPackNotice";

    function Ct(tt, et, Vt, Ot) {
      return qt.j.subscribe(Jt, (tt => {
        let {
          translationKey: et,
          stillCurrent: Vt,
          reasonKey: Ot
        } = tt;
        Vt() && qt.j.sw("chat", (0, Dt.h)(et, Ot))
      })), new bt({
        load: ut,
        policyOf: Kt,
        core: tt,
        previews: et,
        noWebGpu: Vt,
        notify: (tt, et, Vt) => {
          const Ot = {
            translationKey: tt,
            stillCurrent: et,
            reasonKey: Vt
          };
          qt.j.sw(Jt, Ot, !0)
        },
        failInGame: tt => {
          qt.j.sw(Dt.e, tt)
        },
        warn: Ot
      })
    }
    async function ut() {
      const [{
        shaderPackPage: tt,
        harnessShaderPackMode: et
      }, {
        shaderPackTextures: Ot
      }] = await Promise.all([Vt.e(117).then((() => Vt(39419))), Vt.e(118).then((() => Vt(6830)))]), qt = await tt.load();
      return "active" !== qt.status ? qt : {
        status: "active",
        pack: {
          variants: qt.pack.variants,
          layers: Ot().layers,
          keepCircleShadows: qt.pack.keepCircleShadows
        },
        harnessPolicy: et()
      }
    }
    async function Kt(tt) {
      var et;
      const [{
        shaderPackPage: Ot,
        harnessShaderPackMode: qt
      }, {
        getShaderPackPolicy: Dt
      }] = await Promise.all([Vt.e(117).then((() => Vt(39419))), Vt.e(93).then((() => Vt(41494)))]);
      return await Ot.load(), null !== (et = qt()) && void 0 !== et ? et : Dt(tt)
    }
  },
  41003: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      c: () => yt,
      d: () => jt,
      g: () => Ht,
      k: () => Xt,
      n: () => lt
    });
    var Ot = Vt(41008),
      qt = Vt(41014);
    const Dt = "atlas:",
      mt = 3e4;
    class dt extends Error {
      constructor(tt, et) {
        super(`fetching ${tt} answered HTTP ${et}`), this.url = tt, this.status = et, this.name = "TerrainTextureFetchError"
      }
    }

    function jt(tt) {
      if (!tt.startsWith(Dt)) return null;
      const et = Number(tt.slice(Dt.length));
      return Number.isInteger(et) && et >= 0 ? et : null
    }
    async function Ht() {
      const tt = await Vt.e(207).then((() => Vt(34482)));
      return {
        atlasSheets: tt.blockAtlasUrls,
        texture: et => {
          var Vt, Ot, Dt;
          return null !== (Vt = null !== (Ot = null !== (Dt = tt.animatedBlockTextures[et]) && void 0 !== Dt ? Dt : tt.rotatedBlockTextures[et]) && void 0 !== Ot ? Ot : qt.e[et]) && void 0 !== Vt ? Vt : null
        }
      }
    }
    async function Xt(tt) {
      const et = new AbortController,
        Vt = setTimeout((() => {
          et.abort(new DOMException(`${tt} took over ${mt} ms`, "TimeoutError"))
        }), mt);
      let Ot;
      try {
        const Vt = await fetch(tt, {
          signal: et.signal
        });
        if (!Vt.ok) throw new dt(tt, Vt.status);
        Ot = await Vt.blob()
      } finally {
        clearTimeout(Vt)
      }
      const qt = await createImageBitmap(Ot, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return lt(qt)
      } finally {
        qt.close()
      }
    }
    const Qt = 8192;

    function lt(tt) {
      const {
        width: et,
        height: Vt
      } = tt, qt = Math.max(1, Math.min(Vt, Qt)), Dt = (0, Ot.e)(et, qt, {
        willReadFrequently: !0
      });
      if (!Dt) throw new Error("no 2D context to read the texture back");
      Dt.globalCompositeOperation = "copy";
      const mt = new Uint8Array(et * Vt * 4);
      for (let Ot = 0; Ot < Vt; Ot += qt) {
        const dt = Math.min(qt, Vt - Ot);
        Dt.drawImage(tt, 0, Ot, et, dt, 0, 0, et, dt), mt.set(Dt.getImageData(0, 0, et, dt).data, Ot * et * 4)
      }
      return {
        width: et,
        height: Vt,
        pixels: mt
      }
    }
    async function Et(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xt;
      const Ot = [],
        qt = await Promise.all(tt.map((async tt => {
          var qt, mt;
          const dt = null !== (qt = null === (mt = et.decoded) || void 0 === mt ? void 0 : mt.call(et, tt)) && void 0 !== qt ? qt : null,
            Ht = null === dt ? function(tt, et) {
              if (tt.startsWith(Dt)) {
                var Vt;
                const Ot = jt(tt);
                return null === Ot ? null : null !== (Vt = et.atlasSheets[Ot]) && void 0 !== Vt ? Vt : null
              }
              return et.texture(tt)
            }(tt, et) : null,
            Xt = null !== dt && void 0 !== dt ? dt : null === Ht ? null : Vt(Ht);
          if (null === Xt) return Ot.push({
            name: tt,
            url: Ht,
            error: new Error(`no URL for terrain texture ${tt}`)
          }), null;
          try {
            const et = await Xt;
            if (et.pixels.byteLength !== et.width * et.height * 4) throw new Error(`decoded ${et.pixels.byteLength} bytes for ${et.width}x${et.height} texels`);
            return {
              name: tt,
              texture: et
            }
          } catch (Qt) {
            return Ot.push({
              name: tt,
              url: Ht,
              error: Qt
            }), null
          }
        }))),
        mt = qt.filter((tt => null !== tt)),
        dt = new Uint32Array(2 * mt.length);
      mt.forEach(((tt, et) => {
        let {
          texture: Vt
        } = tt;
        dt[2 * et] = Vt.width, dt[2 * et + 1] = Vt.height
      }));
      return {
        handOver: {
          names: mt.map((tt => {
            let {
              name: et
            } = tt;
            return et
          })),
          textures: mt.map((tt => {
            let {
              texture: et
            } = tt;
            return et.pixels
          })),
          sizes: dt
        },
        failures: Ot
      }
    }
    const ft = [2e3, 1e4, 3e4, 6e4, 12e4];

    function wt() {}
    class yt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ft,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = tt, this.retryMs = et, this.keepBelow = Vt, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ht,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Ot = ++this.started,
          qt = {
            decode: Vt.decode,
            wholeAtlas: Vt.wholeAtlas
          };
        return this.loadAndHandOver(et, qt, tt, (() => {
          var tt;
          return Ot < this.landed || !1 === (null === (tt = Vt.wanted) || void 0 === tt ? void 0 : tt.call(Vt))
        }), {
          onTaken: (tt, Vt) => {
            this.landed = Ot, this.current = {
              mine: Ot,
              sources: et,
              load: qt,
              hE: tt,
              failed: Vt
            }
          }
        })
      }
      restore(tt) {
        var et;
        const Vt = this.current;
        if (null === Vt) return Promise.resolve(null);
        if ((null === (et = this.restoring) || void 0 === et ? void 0 : et.mine) === Vt.mine) return this.restoring.done;
        const Ot = {
          mine: Vt.mine,
          done: this.restoreLanded(Vt, tt).finally((() => {
            this.restoring === Ot && (this.restoring = null)
          }))
        };
        return this.restoring = Ot, Ot.done
      }
      async restoreLanded(tt, et) {
        const Vt = () => this.landed !== tt.mine,
          {
            hE: Ot
          } = tt;
        if (null !== Ot) return this.stopped() ? null : this.core.setTerrainTextures(Ot.names, Ot.textures, Ot.sizes);
        let qt = et;
        for (let Dt = 0;; Dt++) {
          const et = this.retryMs.at(Dt),
            Ot = {
              allOrNothingExcept: void 0 === et ? void 0 : tt.failed
            },
            mt = await this.loadAndHandOver(tt.sources, tt.load, qt, Vt, Ot);
          if (!1 !== mt || void 0 === et || this.stopped()) return mt;
          if (qt = wt, await new Promise((tt => {
              setTimeout(tt, et)
            })), Vt()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Dt = this.core.terrainTextureNames();
        var mt;
        if (0 === Dt.length) return null === (mt = qt.onTaken) || void 0 === mt || mt.call(qt, null, new Set), !0;
        let dt, Ht;
        try {
          dt = await tt(), Ht = await Et(Dt, dt, et.decode)
        } catch (yt) {
          return Ot() ? null : (Vt({
            name: null,
            url: null,
            error: yt
          }), !1)
        }
        if (Ot() || this.stopped()) return null;
        for (const jt of Ht.failures) Vt(jt);
        const Xt = qt.allOrNothingExcept;
        if (void 0 !== Xt && Ht.failures.some((tt => {
            let {
              name: et
            } = tt;
            return null === et || !Xt.has(et)
          })) || !0 === et.wholeAtlas && Ht.failures.some((tt => {
            let {
              name: et
            } = tt;
            return null === et || null !== jt(et)
          }))) return !1;
        const {
          handOver: Qt
        } = Ht, lt = function(tt) {
          return tt.textures.reduce(((tt, et) => tt + et.byteLength), 0)
        }(Qt) < this.keepBelow, ft = this.core.setTerrainTextures(Qt.names, Qt.textures, Qt.sizes, lt ? void 0 : () => {
          !async function(tt, et) {
            await et;
            for (const {
                buffer: Ot
              }
              of tt) {
              const tt = Ot;
              var Vt;
              if (!tt.detached) null === (Vt = tt.transfer) || void 0 === Vt || Vt.call(tt, 0)
            }
          }(Qt.textures, dt.heldUntil)
        });
        if (ft) {
          var wt;
          const tt = new Set(Ht.failures.flatMap((tt => {
            let {
              name: et
            } = tt;
            return null === et ? [] : [et]
          })));
          null === (wt = qt.onTaken) || void 0 === wt || wt.call(qt, lt ? Qt : null, tt)
        }
        return ft
      }
    }
  },
  37078: (tt, et, Vt) => {
    function Ot(tt) {
      return "fetch" === tt || "timeout" === tt || "integrity" === tt ? "download" : "browser"
    }
    Vt.d(et, {
      d: () => qt,
      h: () => mt,
      l: () => jt,
      n: () => dt,
      q: () => Ot,
      r: () => Dt
    });
    const qt = "https://discord.gg/playbloxd";

    function Dt(tt) {
      return "download" === tt ? {
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

    function mt(tt, et) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: et ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: tt.code
        },
        discordLink: et,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function dt() {
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

    function jt(tt, et, Vt) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Vt ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: tt.reason
        },
        discordLink: null === tt.name,
        confirm: et ? "general:reconnect" : tt.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  34330: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ht,
      f: () => Qt,
      j: () => Xt
    });
    var Ot = Vt(312),
      qt = Vt(106),
      Dt = Vt(146),
      mt = Vt(139),
      dt = Vt(723);
    const jt = new Set(["mali_bifrost"]);

    function Ht() {
      if ("android" !== (0, qt.pageOperatingSystem)() || dt.g || (0, dt.d)("webgl_default")) return;
      const tt = (0, Dt.t)(),
        et = null === tt ? (0, Ot.u)() : (0, Ot.h)(tt.vendor, tt.renderer);
      return null !== et && jt.has(et) ? tt => (0, Ot.m)((0, mt.b)(tt).vendor, et) : void 0
    }

    function Xt(tt, et) {
      return tt ? () => !0 : et()
    }
    async function Qt(tt) {
      try {
        const et = Xt(tt, Ht),
          Vt = navigator.gpu;
        if (void 0 === et || void 0 === Vt) return !1;
        const Ot = await (0, mt.n)(Vt, {
          seed: !1,
          compatibility: et
        });
        return "string" !== typeof Ot && Ot.compatibility && !(0, mt.i)(Ot.adapter)
      } catch (et) {
        return console.error("WebGPU compatibility-mode adapter request failed.", et), !1
      }
    }
  },
  40946: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => jt,
      f: () => Ht
    });
    var Ot = Vt(106),
      qt = Vt(38985);
    const Dt = "webgpuPipeline";

    function mt(tt) {
      return tt.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let dt = null;

    function jt() {
      if (null === dt) try {
        tt = (0, Ot.getBrowserName)(), et = (0, Ot.getBrowserVersion)(), Vt = (0, Ot.getOperatingSystem)(), qt = (0, Ot.getOperatingSystemVersion)(), dt = `${tt.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===et?"unknown":mt(et)}-${Vt}${void 0===qt?"":`_${mt(qt)}`}`
      } catch (Dt) {
        console.warn("The user agent couldn't be read for its browser code", Dt), dt = "unknown"
      }
      var tt, et, Vt, qt;
      return dt
    }

    function Ht() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const et = `WGPU-${jt()}`,
        Ot = (tt, Ot) => {
          const {
            reason: mt,
            message: dt
          } = Ot;
          if ((0, qt.r)(String(dt))) return;
          const jt = {
            pipeline: null !== tt && void 0 !== tt ? tt : "",
            reason: String(mt),
            browserMessage: String(dt)
          };
          Promise.resolve().then((() => Vt(40933))).then((tt => {
            let {
              reportCrash: Vt
            } = tt;
            Vt({
              kind: "coreError",
              code: et,
              site: Dt,
              fatal: !1,
              message: `${jt.pipeline} ${jt.reason}: ${jt.browserMessage}`,
              details: jt,
              error: Ot
            })
          })).catch((tt => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", tt)
          }))
        },
        mt = tt.createRenderPipelineAsync;
      tt.createRenderPipelineAsync = function(tt) {
        return mt.call(this, tt).catch((et => {
          throw Ot(tt.label, et), et
        }))
      };
      const dt = tt.createComputePipelineAsync;
      tt.createComputePipelineAsync = function(tt) {
        return dt.call(this, tt).catch((et => {
          throw Ot(tt.label, et), et
        }))
      }
    }
  },
  41062: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/bloxd_wasm_models_bg.678868ed465a3d05d07e.wasm"
  },
  41060: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/bloxd_wasm_workers_bg.d1bec491cfc6568868da.wasm"
  },
  41057: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      d: () => Ot
    });
    const Ot = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new Vt.U(Vt(41060))
      }
    };
    const qt = {
      name: "bloxd_wasm_models",
      url: function() {
        return new Vt.U(Vt(41062))
      }
    }
  },
  6839: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Jt,
      i: () => Ct,
      j: () => Mt,
      n: () => Nt
    });
    var Ot = Vt(6848);
    const qt = 6,
      Dt = 3,
      mt = 1,
      dt = 2,
      jt = 4,
      Ht = 8,
      Xt = 16,
      Qt = 32,
      lt = 64,
      Et = 128,
      ft = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function wt(tt) {
      if (!tt) return 0;
      const et = ft.indexOf(tt);
      if (et <= 0) throw new Error(`"${tt}" is not a shader pack hook function`);
      return et
    }

    function yt(tt) {
      if (0 === tt) return null;
      const et = ft[tt];
      if (void 0 === et) throw new Error(`${tt} is not a shader pack hook function id`);
      return et
    }

    function Nt(tt) {
      const et = Ot.b.length;
      return {
        strict: tt >= et,
        program: Ot.b[tt % et]
      }
    }

    function Mt(tt) {
      return Number(tt.strict) * Ot.b.length + Ot.b.indexOf(tt.program)
    }

    function bt(tt) {
      return "" === tt ? [] : tt.split(" ")
    }

    function Jt(tt) {
      const et = {
        variantFlags: new Uint8Array(qt),
        hooks: new Uint8Array(qt * Dt),
        moduleCodes: Array(qt).fill(""),
        reads: Array(2 * qt).fill("")
      };
      for (const Vt of tt) {
        const tt = Mt(Vt.key),
          Ot = (tt, et) => null === Vt.hooks.surface || Vt.reads.fragment.includes(tt) ? 0 : et;
        et.variantFlags[tt] = (Vt.sceneDepth ? mt : 0) | (Vt.movesVertices ? dt : 0) | (Vt.sunShadow ? jt : 0) | (Vt.airShadow ? Ht : 0) | (Vt.discards ? Xt : 0) | Ot("localPosition", Qt) | Ot("enchantSpeed", lt) | Ot("enchantTier", Et), et.hooks[tt * Dt] = wt(Vt.hooks.vertex), et.hooks[tt * Dt + 1] = wt(Vt.hooks.surface), et.hooks[tt * Dt + 2] = wt(Vt.hooks.light), et.moduleCodes[tt] = Vt.moduleCode, et.reads[2 * tt] = Vt.reads.vertex.join(" "), et.reads[2 * tt + 1] = Vt.reads.fragment.join(" ")
      }
      return et
    }

    function Ct(tt) {
      const {
        hooks: et,
        moduleCodes: Vt,
        reads: Ot
      } = tt;
      return Array.from(tt.variantFlags, ((tt, qt) => {
        const Qt = qt * Dt;
        return {
          key: Nt(qt),
          hooks: {
            vertex: yt(et[Qt]),
            surface: yt(et[Qt + 1]),
            light: yt(et[Qt + 2])
          },
          moduleCode: Vt[qt],
          sceneDepth: 0 !== (tt & mt),
          sunShadow: 0 !== (tt & jt),
          airShadow: 0 !== (tt & Ht),
          movesVertices: 0 !== (tt & dt),
          discards: 0 !== (tt & Xt),
          reads: {
            vertex: bt(Ot[2 * qt]),
            fragment: bt(Ot[2 * qt + 1])
          }
        }
      }))
    }
  },
  40892: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => Et,
      E: () => ft,
      e: () => qt,
      f: () => Ot,
      i: () => lt,
      k: () => Xt,
      n: () => yt,
      q: () => Dt,
      s: () => dt,
      t: () => jt,
      v: () => mt,
      w: () => wt
    });
    const Ot = 3,
      qt = 0,
      Dt = 1,
      mt = 2,
      dt = {
        uniform: 3,
        hl: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      jt = 10,
      Ht = "BloxdPackInputs",
      Xt = "bloxdPackInputs",
      Qt = [{
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
      lt = 80;

    function Et() {
      const tt = Qt.map((tt => {
        let {
          name: et,
          type: Vt
        } = tt;
        return `    ${et}: ${Vt},\n`
      })).join("");
      return `struct ${Ht} {\n${tt}}\n@group(${Ot}) @binding(${qt}) var<uniform> ${Xt}: ${Ht};\n`
    }

    function ft(tt, et) {
      const Vt = new DataView(tt, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, lt),
        [Ot, qt, Dt, mt, dt, jt] = Qt;
      Vt.setFloat32(Ot.offset, et.seconds, !0), Vt.setUint32(qt.offset, et.lit ? 1 : 0, !0);
      for (let Ht = 0; Ht < 3; Ht++) Vt.setInt32(Dt.offset + 4 * Ht, et.renderOffset[Ht], !0), Vt.setFloat32(mt.offset + 4 * Ht, et.jtt[Ht], !0), Vt.setFloat32(dt.offset + 4 * Ht, et.eyePosition[Ht], !0), Vt.setFloat32(jt.offset + 4 * Ht, et.shadowDirection[Ht], !0)
    }

    function wt(tt) {
      const et = new Uint32Array(Math.max(1, tt.length));
      return tt.forEach(((tt, Vt) => {
        let {
          id: Ot,
          rotation: qt
        } = tt;
        et[Vt] = 65535 & Ot | (3 & qt) << 16
      })), et
    }
    const yt = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6848: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot,
      f: () => mt,
      i: () => dt,
      j: () => qt,
      m: () => Dt
    });
    const Ot = ["terrain", "liquid", "model"];

    function qt() {
      const tt = [];
      for (const et of [!1, !0])
        for (const Vt of Ot) tt.push({
          strict: et,
          program: Vt
        });
      return tt
    }

    function Dt(tt) {
      return `${tt.strict?"strict":"allow"}.${tt.program}`
    }

    function mt(tt) {
      return !tt.hooks.vertex && !tt.hooks.surface && !tt.hooks.light
    }

    function dt(tt, et) {
      return "off" !== et && (null === tt || tt.some((tt => tt.key.strict === ("strict" === et) && !mt(tt))))
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);