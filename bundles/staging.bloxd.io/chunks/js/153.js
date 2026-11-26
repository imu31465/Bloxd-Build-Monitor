export const id = 153;
export const ids = [153];
export const modules = {
  35146: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      f: () => yV
    });
    var JV = xV(296),
      YV = xV(134),
      UV = xV(35148);

    function yV() {
      var VV, eV, xV;
      return null !== (VV = (0, JV.k)(null !== (eV = null === (xV = (0, YV.o)()) || void 0 === xV ? void 0 : xV.renderer) && void 0 !== eV ? eV : null, (0, YV.k)())) && void 0 !== VV ? VV : "unknown"
    }

    function pV(VV, eV, xV, JV, YV) {
      const yV = null === eV ? "untimed" : `${Math.round(eV)} ms`;
      return `frames stalled, ${xV}, gpu ${(0,UV.b)(YV)}, blocking ${yV}, drawn ${Math.round(VV)} ms apart, timers ${JV.timers}, timer gap ${Math.round(JV.longestGapMs)} ms`
    }
  },
  39952: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV,
      g: () => vV,
      h: () => rV,
      l: () => EV,
      m: () => ZV,
      p: () => wV,
      t: () => yV,
      x: () => kV
    });
    var JV = xV(355),
      YV = xV(1817);
    const UV = "A valid external Instance reference no longer exists.";

    function yV(VV) {
      return VV.includes(UV)
    }
    const pV = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      QV = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const nV = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function wV(VV, eV) {
      return VV ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(VV) {
        var eV;
        const xV = null !== (eV = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(VV)) && void 0 !== eV ? eV : /failed with ([A-Z][A-Z0-9_]+)/.exec(VV);
        return xV ? xV[1] : yV(VV) ? "gpu_process_lost" : "other"
      }(eV)
    }

    function ZV(VV) {
      return `${(null===VV||void 0===VV?void 0:VV.vendor)||"unknown vendor"} ${(null===VV||void 0===VV?void 0:VV.architecture)||"unknown architecture"}`
    }

    function vV(VV) {
      return BV(VV)[1]
    }

    function rV(VV) {
      return BV(VV)[2]
    }

    function kV(VV, eV, xV) {
      const YV = (0, JV.h)(),
        UV = null !== YV && YV >= eV,
        yV = document.hidden ? "hidden" : UV ? "shown" : "visible",
        pV = UV ? xV - YV : null;
      return {
        page: null === pV ? yV : `${yV}${vV(pV)}`,
        code: `${VV}_${null===pV?yV:`${yV}_${rV(pV)}`}_${bV(xV)}`
      }
    }

    function bV(VV) {
      if ((0, YV.e)()) return "ad_open";
      const eV = (0, YV.b)();
      return null === eV ? "ad_none" : `ad_${rV(VV-eV.endedAt)}_${eV.pageHid?"h":"v"}`
    }

    function EV(VV) {
      return jV(QV, VV)[1]
    }

    function BV(VV) {
      return jV(pV, VV)
    }

    function jV(VV, eV) {
      var xV;
      return null !== (xV = VV.find((VV => {
        let [xV] = VV;
        return eV < xV
      }))) && void 0 !== xV ? xV : VV[VV.length - 1]
    }
  },
  35148: (VV, eV, xV) => {
    function JV(VV) {
      return String(VV).replace(/\d/g, (VV => String.fromCharCode(97 + Number(VV))))
    }
    xV.d(eV, {
      b: () => JV
    })
  },
  41914: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV,
      g: () => wV,
      j: () => yV,
      k: () => YV,
      o: () => pV,
      r: () => nV
    });
    class JV extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function YV(VV) {
      return VV instanceof RangeError && /call stack/i.test(VV.message) || VV instanceof Error && "InternalError" === VV.name && /recursion/i.test(VV.message)
    }
    const UV = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function yV(VV) {
      var eV;
      return VV instanceof WebAssembly.RuntimeError || VV instanceof JV || YV(VV) && UV.test(null !== (eV = VV.stack) && void 0 !== eV ? eV : "")
    }

    function pV(VV, eV) {
      if (yV(VV)) throw VV;
      console.error(eV, VV)
    }

    function QV(VV, eV, xV, YV, UV) {
      if (eV % YV !== 0 || eV + xV > VV.byteLength) throw new JV(`${UV}: ${xV} bytes at ${eV}, ${YV}-aligned, outside ${VV.byteLength} bytes of memory`)
    }

    function nV(VV, eV, xV, JV, YV) {
      return 0 === xV ? null : (QV(eV, xV, JV * VV.BYTES_PER_ELEMENT, VV.BYTES_PER_ELEMENT, YV), new VV(eV, xV, JV))
    }

    function wV(VV, eV, xV, JV, YV) {
      return 0 === eV ? null : (QV(VV, eV, xV, JV, YV), new DataView(VV, eV, xV))
    }
  },
  42001: (VV, eV, xV) => {
    xV.d(eV, {
      $: () => Ze,
      C: () => IV,
      D: () => mV,
      E: () => ee,
      H: () => Ve,
      I: () => dV,
      M: () => Je,
      P: () => be,
      S: () => xe,
      U: () => OV,
      V: () => Ye,
      Y: () => Qe,
      ab: () => RV,
      e: () => GV,
      f: () => Ee,
      j: () => te,
      k: () => we,
      n: () => ke,
      q: () => pe,
      s: () => re,
      w: () => ve,
      x: () => qe,
      y: () => sV
    });
    var JV = xV(364),
      YV = xV(291),
      UV = xV(296),
      yV = xV(27),
      pV = xV(3142),
      QV = xV(717),
      nV = xV(4990),
      wV = xV(3111),
      ZV = xV(3907),
      vV = xV(99),
      rV = xV(138),
      kV = xV(355),
      bV = xV(40),
      EV = xV(348),
      BV = xV(124),
      jV = xV(679),
      qV = xV(134),
      tV = xV(129),
      FV = xV(5301),
      TV = xV(42007),
      PV = xV(1900),
      AV = xV(42011),
      NV = xV(35259),
      XV = xV(42017),
      MV = xV(42024);
    const zV = "bloxd-webgpuOffAfterLoss",
      GV = "context:webgl",
      WV = "probe:threw";

    function RV(VV) {
      let eV;
      try {
        eV = VV.getContext("webgl", {
          powerPreference: qV.c
        })
      } catch {
        eV = null
      }
      if (null === eV) return null;
      let xV = null;
      try {
        const VV = eV.getParameter(eV.MAX_TEXTURE_SIZE);
        xV = "number" === typeof VV && VV > 0 ? VV : null
      } catch {
        xV = null
      }
      try {
        var JV;
        null === (JV = eV.getExtension("WEBGL_lose_context")) || void 0 === JV || JV.loseContext()
      } catch {}
      return xV
    }
    const gV = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function DV() {
      return "ios" === (0, vV.getOperatingSystem)() ? "ios" : "other"
    }
    const iV = "mali_valhall",
      CV = new Set(["nvidia_pre_turing"]),
      aV = new Set(["intel_gen7_8"]);

    function oV(VV, eV, xV) {
      return gV.has(VV) ? "android_arm" === VV && eV === iV && "mobileAndroid" !== xV ? "webgpu_default" : "webgl_default" : null
    }

    function cV(VV) {
      return function(VV) {
        try {
          return VV()
        } catch {
          return null
        }
      }((() => {
        var eV, xV, JV, yV;
        const pV = null !== (eV = null === (xV = VV.info) || void 0 === xV ? void 0 : xV.vendor) && void 0 !== eV ? eV : "";
        return "windows" === (0, vV.getOperatingSystem)() && "" !== pV && "intel" !== (0, vV.normaliseGpuVendor)(pV) ? null : ((0, vV.seedGpuVendor)(pV), oV((0, YV.i)(), (0, UV.e)(pV, null !== (JV = null === (yV = VV.info) || void 0 === yV ? void 0 : yV.architecture) && void 0 !== JV ? JV : ""), rV.siteUsed))
      }))
    }

    function hV() {
      var VV;
      return {
        gpu: null !== (VV = navigator.gpu) && void 0 !== VV ? VV : null,
        webgl2: XV.g,
        webgl1: () => function(VV) {
          let eV, xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TV.c;
          try {
            eV = VV.getContext("webgl")
          } catch {
            eV = null
          }
          if (null === eV) return [GV];
          const JV = [];
          try {
            for (const YV of xV.extensions) null === eV.getExtension(YV) && JV.push(YV);
            for (const [YV, UV] of Object.entries(xV.limits)) {
              const VV = eV[YV],
                xV = "number" === typeof VV ? eV.getParameter(VV) : null;
              ("number" !== typeof xV || xV < UV) && JV.push(`limit:${YV}`)
            }
            const VV = eV.getShaderPrecisionFormat(eV.VERTEX_SHADER, eV.HIGH_FLOAT);
            (null === VV || VV.precision < xV.vertexHighFloatBits) && JV.push("precision:vertex_high_float")
          } catch {
            JV.push(WV)
          }
          try {
            var YV;
            null === (YV = eV.getExtension("WEBGL_lose_context")) || void 0 === YV || YV.loseContext()
          } catch {}
          return JV
        }(document.createElement("canvas")),
        offAfterLoss: VV => LV((() => VV ? (0, EV.H)() : yV.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: VV => LV((() => (0, BV.e)(VV))),
        intelGen9: VV => LV((() => (0, BV.q)(VV))),
        storeIntelGen9Verdict: VV => {
          bV.m.setItem(BV.F, VV)
        },
        gpuClassWebGlArm: cV,
        storeGpuClassVerdict: VV => {
          bV.m.setItem(BV.B, VV)
        },
        gpuClassOnWebGl: VV => (0, jV.e)(VV),
        webGlDefaultFamily: VV => aV.has((0, UV.e)(VV.vendor, VV.architecture)),
        storeWebGlDefaultFamilyVerdict: VV => {
          bV.m.setItem(BV.N, VV)
        },
        override: () => lV(),
        claimed: () => fV((0, QV.k)()),
        webGpuSetting: () => {
          const VV = bV.m.getItem(JV.jc);
          return "boolean" === typeof VV ? VV : null
        },
        heldBack: () => jV.f,
        storeHoldbackSpared: VV => {
          bV.m.setItem(BV.A, VV)
        },
        intelGen9OnWebGl: () => jV.h,
        Xk: () => LV((() => (0, ZV.e)(vV.featureFlags.settings.canUseShaderPacks))),
        windows: () => LV((() => "windows" === (0, vV.getOperatingSystem)())),
        defaultCompatibility: NV.c
      }
    }

    function lV() {
      let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, pV.o)("render") && "webgl1" === (0, pV.k)("renderer")) return "webgl1";
      const eV = [() => new URLSearchParams(window.location.search).get(wV.e), () => bV.m.getItem(wV.i), () => {
        const eV = localStorage.getItem(zV);
        return null !== eV && VV && localStorage.removeItem(zV), "1" === eV ? "webgl2" : null
      }];
      for (const xV of eV) {
        let VV = null;
        try {
          VV = fV(xV())
        } catch {}
        if (null !== VV) return VV
      }
      return null
    }

    function LV(VV) {
      try {
        return VV()
      } catch {
        return !1
      }
    }

    function fV(VV) {
      return "lite" === VV ? "webgpu" : "webgl2" === VV || "babylon" === VV ? "webgl" : null
    }

    function mV(VV) {
      return "none" === VV || "compatibility_mode" === VV
    }
    async function KV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hV();
      const eV = await async function(VV) {
        const eV = uV(VV),
          {
            source: xV
          } = eV,
          JV = !eV.asked,
          YV = "gpu" in eV && eV.heldBack,
          yV = function(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return YV && !mV(VV) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: xV
            } : {
              reason: VV,
              adapter: eV,
              source: xV
            }
          };
        if (!("gpu" in eV)) return yV(eV.refused);
        let pV;
        try {
          pV = await (0, PV.m)((0, tV.l)(eV.gpu, {
            compatibility: HV(VV, eV)
          }), Be, `requestAdapter didn't settle in ${Be/1e3} s`)
        } catch {
          return yV("adapter_error")
        }
        if ("string" === typeof pV) return yV(pV);
        const {
          adapter: QV,
          compatibility: nV
        } = pV, wV = (0, tV.c)(QV);
        if ((0, tV.j)(QV)) return yV("software_adapter", wV);
        const ZV = VV.windows() && function(VV) {
          return CV.has((0, UV.e)(VV.vendor, VV.architecture))
        }(wV);
        if (VV.storeHoldbackSpared(ZV), YV && !ZV) return yV("webgl_holdback");
        const vV = VV.intelGen9(QV);
        VV.storeIntelGen9Verdict(vV);
        const rV = vV ? null : VV.gpuClassWebGlArm(QV);
        VV.storeGpuClassVerdict(null !== rV && void 0 !== rV && rV);
        const kV = VV.webGlDefaultFamily(wV);
        if (VV.storeWebGlDefaultFamilyVerdict(kV), JV && VV.oldIntelDriver(QV)) return yV("old_intel_driver", wV);
        if ("default" === xV && vV && VV.intelGen9OnWebGl()) return yV("intel_gen9", wV);
        if ("default" === xV && null !== rV && VV.gpuClassOnWebGl(rV)) return yV("gpu_class_webgl", wV);
        if ("default" === xV && kV) return yV("gpu_wasm_arm", wV);
        return yV(nV ? "compatibility_mode" : "none", wV)
      }(VV);
      if (mV(eV.reason)) return {
        backend: "webgpu",
        ...eV
      };
      if ("webgl1" !== VV.override() && VV.webgl2()) return {
        backend: "webgl",
        ...eV
      };
      const xV = VV.webgl1();
      return 0 === xV.length ? {
        backend: "webgl1",
        ...eV
      } : {
        missing: xV
      }
    }

    function HV(VV, eV) {
      let {
        source: xV,
        asked: JV
      } = eV;
      return JV || "default" === xV ? (0, NV.j)(JV, VV.defaultCompatibility) : void 0
    }

    function uV(VV) {
      const eV = VV.override(),
        xV = VV.webGpuSetting(),
        JV = null === eV && !0 !== xV && VV.Xk(),
        YV = null !== eV || null !== xV || JV ? null : VV.claimed(),
        UV = null !== eV ? "override" : !0 === xV ? "setting" : JV ? "pack" : !1 === xV ? "setting" : null !== YV ? "claim" : "default",
        yV = function(VV) {
          return "override" === VV || "setting" === VV
        }(UV);
      if ("webgl" === eV || "webgl1" === eV || "webgl" === YV || "setting" === UV && !1 === xV) return {
        source: UV,
        asked: yV,
        refused: "not_requested"
      };
      if (!VV.gpu) return {
        source: UV,
        asked: yV,
        refused: "no_webgpu_api"
      };
      const pV = "default" === UV && VV.heldBack();
      return pV && !VV.windows() ? {
        source: UV,
        asked: yV,
        refused: "webgl_holdback"
      } : !yV && VV.offAfterLoss("pack" === UV) ? {
        source: UV,
        asked: yV,
        refused: pV ? "webgl_holdback" : "off_after_loss"
      } : {
        source: UV,
        asked: yV,
        heldBack: pV,
        gpu: VV.gpu
      }
    }

    function sV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...hV(),
          override: () => lV(!1)
        },
        eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vV.isWebKit,
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DV;
      try {
        if (!eV()) return !1;
        const JV = uV(VV);
        if (!("gpu" in JV) || JV.heldBack) return !1;
        const YV = "default" === JV.source ? oV(xV(), "apple", rV.siteUsed) : null;
        return null === YV || !VV.gpuClassOnWebGl(YV)
      } catch (JV) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", JV), !1
      }
    }
    let SV = !1;
    async function IV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hV();
      if (null === VV) return null;
      const xV = await KV(eV);
      return SV = !("missing" in xV) && "webgpu" === xV.backend && "claim" === xV.source, "missing" in xV ? xV : {
        ...xV,
        load: VV[xV.backend]
      }
    }
    async function dV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hV().gpu,
        JV = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== VV.backend) return !1;
      const YV = ye(VV, eV, "indirectDraws", "off", "on");
      if (null !== YV) return YV;
      if (null !== VV.adapter && (0, BV.t)(VV.adapter, JV)) return !0;
      if (null === xV) return !1;
      try {
        var UV;
        const VV = await (0, PV.m)(xV.requestAdapter({
          powerPreference: "low-power"
        }).then((async VV => (null !== VV && await (0, tV.g)(VV), VV))), Be, `the low-power requestAdapter didn't settle in ${Be/1e3} s`);
        return (0, BV.t)(null !== (UV = null === VV || void 0 === VV ? void 0 : VV.info) && void 0 !== UV ? UV : {}, JV)
      } catch (yV) {
        return yV instanceof PV.i
      }
    }

    function OV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, vV.pageOperatingSystem)();
      if ("webgpu" !== VV.backend) return !1;
      const YV = ye(VV, eV, "terrainFetch", "texture", "storage");
      return null !== YV ? YV : null !== VV.adapter && ((0, BV.j)(VV.adapter, xV) || (0, BV.h)(VV.adapter, JV))
    }

    function Ve(VV, eV) {
      if ("webgpu" !== VV.backend) return !1;
      const xV = ye(VV, eV, "skyOrder", "early", "last");
      return null !== xV ? xV : null !== VV.adapter && (0, UV.e)(VV.adapter.vendor, VV.adapter.architecture) === iV
    }

    function ee(VV, eV) {
      if ("webgpu" !== VV.backend) return !1;
      const xV = ye(VV, eV, "uploadCopies", "off", "on");
      return null !== xV ? xV : null !== VV.adapter && "powervr_rogue" === (0, UV.e)(VV.adapter.vendor, VV.adapter.architecture)
    }

    function xe(VV, eV, xV) {
      if ("webgpu" !== VV.backend) return !1;
      const JV = ye(VV, eV, "sceneDepth", "off", "on");
      return null !== JV ? JV : null !== VV.adapter && (0, BV.n)(VV.adapter, xV)
    }

    function Je(VV, eV) {
      return "webgl" === VV.backend ? ye(VV, eV, "instancedTerrain", "1", "0") : null
    }

    function Ye(VV, eV) {
      return "webgpu" !== VV.backend || eV && (null === VV.adapter || !(0, EV.L)(VV.adapter))
    }

    function Ue(VV, eV, xV, JV) {
      const YV = new URLSearchParams(eV).get(xV),
        UV = null !== YV && void 0 !== YV ? YV : null === VV ? null : (0, QV.g)(xV);
      return null !== UV && JV(UV) ? (SV ||= null === YV && "webgpu" === (null === VV || void 0 === VV ? void 0 : VV.backend), UV) : null
    }

    function ye(VV, eV, xV, JV, YV) {
      const UV = Ue(VV, eV, xV, (VV => VV === JV || VV === YV));
      return null === UV ? null : UV === JV
    }

    function pe(VV) {
      return null !== VV && "missing" in VV
    }

    function Qe(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Ze(),
        xV = arguments.length > 2 ? arguments[2] : void 0;
      return eV ? function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yV.b,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const JV = "start_failed" === VV || "pipeline_failed" === VV,
            YV = (0, MV.l)(VV, xV),
            UV = eV.turnOffWebGpuAfterDeviceLoss(JV ? "visible" : (0, EV.o)((0, kV.i)()), JV, YV);
          return SV && (0, QV.q)("webgpuLoss"), eV.isWebGpuOffAfterLoss() && "webgpu" === fV(bV.m.getItem(wV.i)) && bV.m.removeItem(wV.i), (0, pV.o)("webgpuloss") && (0, nV.b)((eV => {
            var xV;
            eV.noteWebGpuLoss("wasm", UV ? VV : `${VV}, which storage didn't keep`, null !== (xV = YV.message) && void 0 !== xV ? xV : null)
          })), UV
        } catch {
          return !1
        }
      }(VV, yV.b, xV) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const ne = "framePacing";

    function we(VV, eV) {
      const xV = Ue("webgpu" === (null === eV || void 0 === eV ? void 0 : eV.backend) ? eV : null, VV, ne, (VV => /^\d{1,9}$/.test(VV)));
      return null === xV ? void 0 : Number(xV)
    }

    function Ze() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === fV(new URLSearchParams(VV).get(wV.e))
      } catch {
        return !1
      }
    }

    function ve(VV) {
      return !!re(VV) || VV instanceof Error && !(VV instanceof WebAssembly.RuntimeError) && VV.message.startsWith(`${FV.s.RenderSurfaceUnusable}:`)
    }

    function re(VV) {
      const {
        name: eV,
        message: xV
      } = null !== VV && void 0 !== VV ? VV : {};
      return "InvalidStateError" === eV && "string" === typeof xV && xV.startsWith("GPUDevice.")
    }

    function ke(VV) {
      const eV = VV;
      return "function" === typeof eV.tYV && "function" === typeof eV.FYV ? eV : null
    }

    function be(VV) {
      return "function" === typeof VV.pB ? VV : null
    }
    const Ee = "openRenderer";
    const Be = 5e3,
      je = 15e3;

    function qe(VV, eV, xV, JV, YV, UV) {
      return (0, PV.m)(function(VV, eV, xV, JV, YV, UV) {
        return (0, AV.g)(VV, eV, (() => VV.pB(xV, JV, YV, UV.indirectHangs, UV.storagePullBreaks, UV.splitPassBreaks, UV.earlySky, UV.instancedTerrain, UV.cellLight, UV.framesAhead, UV.webGpuRestores, UV.bufferCopiesCrash)))
      }(VV, eV, xV, JV, YV, UV), je, `${FV.s.RenderSurfaceUnusable}: the renderer didn't open in ${je/1e3} s`, Fe)
    }
    async function te(VV, eV, xV, JV, YV, UV) {
      if ("function" !== typeof VV.DpV) throw new Error("this core has no set_renderer");
      const yV = await qe(eV, Ee, xV, YV, JV, UV);
      try {
        VV.DpV(yV)
      } catch (pV) {
        throw Fe(yV), pV
      }
    }

    function Fe(VV) {
      try {
        VV.free()
      } catch {}
    }
  },
  42123: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    const JV = {
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
  42039: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => kV,
      f: () => bV,
      i: () => vV,
      k: () => ZV
    });
    const JV = 2e3,
      YV = "unavailable";
    let UV = () => Promise.resolve().then((() => xV(3271))),
      yV = null,
      pV = null,
      QV = nV();

    function nV() {
      let VV = () => {};
      return {
        promise: new Promise((eV => {
          VV = () => {
            eV(null)
          }
        })),
        resolve: VV
      }
    }

    function wV() {
      if (null === yV) {
        const VV = UV();
        yV = VV, VV.then((eV => {
          yV === VV && (pV = eV)
        }), (() => {
          yV === VV && (yV = null)
        }))
      }
      return yV
    }

    function ZV() {
      wV().catch((() => {}))
    }

    function vV() {
      QV.resolve()
    }

    function rV(VV, eV, xV, JV) {
      if (null === VV) return {
        errorKind: eV,
        fingerprint: YV,
        dedupe: `${eV}|${JV}`
      };
      const {
        fingerprint: UV
      } = VV.clientErrorKey(eV, xV, JV);
      return {
        errorKind: eV,
        fingerprint: UV,
        dedupe: UV
      }
    }

    function kV(VV, eV, xV, JV) {
      return null === pV ? JV ? (ZV(), rV(null, VV, eV, xV)) : null : rV(pV, VV, eV, xV)
    }
    async function bV(VV, eV, xV) {
      let YV;
      const UV = new Promise((VV => {
        YV = setTimeout((() => {
          VV(null)
        }), JV)
      }));
      try {
        return rV(await Promise.race([wV(), UV, QV.promise]), VV, eV, xV)
      } catch {
        return rV(null, VV, eV, xV)
      } finally {
        clearTimeout(YV)
      }
    }
  },
  42034: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      BUILT_IN_ANIMATIONS_SITE: () => IV,
      CORE_ERRORS_SITE: () => hV,
      EVENT_OVERFLOW_SITE: () => SV,
      FIRST_VIEW_SITE: () => Ve,
      JOIN_SITE: () => LV,
      LEAVE_SITE: () => fV,
      MAIN_THREAD_SITE: () => ee,
      MODEL_FEED_SITE: () => mV,
      MODEL_POOL_SITE: () => KV,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Ue,
      NON_FATAL_REPORTS_PER_SESSION: () => Pe,
      PREVIEW_ANIMATIONS_SITE: () => sV,
      RENDER_RELOAD_SITE: () => uV,
      REQUEST_DEVICE_SITE: () => xe,
      TEXTURE_NAMES_SITE: () => HV,
      TEXTURE_PACK_FEED_SITE: () => dV,
      TEXTURE_PACK_SWAP_SITE: () => OV,
      TurnstilePageError: () => Qx,
      WASM_LOAD_SITE: () => lV,
      countRenderLost: () => Lx,
      crashError: () => Ge,
      crashReportsSettled: () => ce,
      deviceLossFields: () => me,
      deviceLossWords: () => ox,
      flushCrashReports: () => ae,
      joinFailureCode: () => nx,
      lokiTransport: () => Qe,
      modelFailureCode: () => Ex,
      readTrap: () => ue,
      renderLoss: () => lx,
      renderReloadMessage: () => cx,
      reportCoreErrors: () => Le,
      reportCountedLoadFallback: () => yx,
      reportCrash: () => We,
      reportDataLoadFailure: () => sx,
      reportDisconnect: () => kx,
      reportDracoDecoderFailure: () => tx,
      reportDroppedRequiredLimits: () => Yx,
      reportEventOverflow: () => Ax,
      reportFirstViewNoTerrain: () => Wx,
      reportLightFault: () => Mx,
      reportMainStall: () => Rx,
      reportMemoryShed: () => Gx,
      reportModelFailure: () => Bx,
      reportModelPoolFailure: () => jx,
      reportModelsModuleRetry: () => qx,
      reportNoBackendRetry: () => Jx,
      reportPageJoinFailure: () => Zx,
      reportReconnectGaveUp: () => bx,
      reportRenderRecovery: () => De,
      reportRenderReload: () => Kx,
      reportReplayFault: () => Dx,
      reportStaleBuildReload: () => Ix,
      reportStoppedCore: () => de,
      reportTerrainTextureFailure: () => Hx,
      reportTexturePackFeedLoadFailure: () => Tx,
      reportTexturePackKeptOut: () => Px,
      reportUnstreamedCoreLoad: () => px,
      reportUnsupportedFallback: () => xx,
      reportUnusedSeat: () => rx,
      reportWorkerLost: () => Nx,
      reportWorkerStartTimeout: () => gx,
      reportWorldgenGaveUp: () => zx,
      reportWorldgenLoadFailure: () => Fx,
      reportWorldgenWorkerLost: () => Xx,
      resetCrashReports: () => he,
      setCrashAdPreload: () => Be,
      setCrashBackend: () => Ee,
      setCrashScreen: () => re,
      setCrashTransport: () => Ze,
      showCrash: () => Ie,
      showJoinFailure: () => wx,
      showUnsupported: () => Vx,
      unknownSkyWords: () => le
    });
    var JV = xV(1099),
      YV = xV(1397),
      UV = xV(1391),
      yV = xV(1353),
      pV = xV(296),
      QV = xV(3273),
      nV = xV(4716),
      wV = xV(42039),
      ZV = xV(5297),
      vV = xV(42046),
      rV = xV(35148),
      kV = xV(3328),
      bV = xV(35146),
      EV = xV(39952),
      BV = xV(138),
      jV = xV(134),
      qV = xV(3336),
      tV = xV(37633),
      FV = xV(1900),
      TV = xV(42057),
      PV = xV(41861),
      AV = xV(41963),
      NV = xV(41968),
      XV = xV(37631),
      MV = xV(3194),
      zV = xV(3196),
      GV = xV(42085),
      WV = xV(42101),
      RV = xV(42109),
      gV = xV(38036),
      DV = xV(3658),
      iV = xV(37422),
      CV = xV(42011),
      aV = xV(37437),
      oV = xV(42125);
    const cV = "[bloxd-wasm-client]",
      hV = "coreErrors",
      lV = "wasmLoad",
      LV = "join",
      fV = "leave",
      mV = "modelFeed",
      KV = "modelWorkerPool",
      HV = "textureNames",
      uV = "renderReload",
      sV = "previewAnimations",
      SV = "eventOverflow",
      IV = "builtInAnimations",
      dV = "texturePackFeed",
      OV = "texturePackSwap",
      Ve = "firstView",
      ee = "mainThread",
      xe = "requestDevice",
      Je = 300,
      Ye = 64,
      Ue = 8;
    let ye = 0;
    const pe = new Set,
      Qe = (VV, eV) => {
        const xV = je[VV.kind],
          JV = {
            backend: ke,
            adPreload: be
          };
        if (null === xV) return void ne(VV, eV, JV, null);
        const YV = (0, wV.d)(xV, VV.message, VV.code, VV.fatal);
        null === YV ? Ce("Loki", (async () => {
          ne(VV, eV, JV, await (0, wV.f)(xV, VV.message, VV.code))
        })) : ne(VV, eV, JV, YV)
      };

    function ne(VV, eV, xV, JV) {
      let {
        backend: YV,
        adPreload: UV
      } = xV;
      const {
        kind: pV,
        code: nV,
        site: wV,
        fatal: ZV,
        details: vV
      } = VV;
      if (!ZV)
        if (null === JV || (0, QV.e)(JV.errorKind) || pe.has(JV.dedupe)) {
          if (ye >= Ue) return;
          ye++
        } else pe.add(JV.dedupe);
      const rV = {
        ...vV,
        kind: pV,
        code: nV,
        site: wV,
        fatal: String(ZV),
        backend: YV
      };
      UV && (rV.adPreload = "true"), null !== JV && (rV.errorKind = JV.errorKind, rV.fingerprint = JV.fingerprint), eV instanceof Error && "string" === typeof eV.stack && (rV.causeStack = eV.stack.slice(0, 2e3)), (0, yV.lb)(Ge(VV, eV), rV)
    }
    let we = Qe;

    function Ze(VV) {
      const eV = we;
      return we = VV, eV
    }
    let ve = () => {};

    function re(VV) {
      const eV = ve;
      return ve = VV, eV
    }
    let ke = "unpicked",
      be = !1;

    function Ee(VV) {
      ke = VV
    }

    function Be(VV) {
      be = VV
    }
    const je = {
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
      qe = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      te = new Set(["unstreamedLoad"]),
      Fe = new Set(["linkCensus", "linksReadAfterView"]);
    let Te = !1;
    const Pe = 20,
      Ae = new Map;
    let Ne = 0,
      Xe = 0;
    const Me = new Set,
      ze = new Set;

    function Ge(VV, eV) {
      const xV = Object.assign(new Error(`${VV.code}: ${VV.message}`), {
        name: "WasmClientCrash",
        cause: null !== eV && void 0 !== eV ? eV : void 0
      });
      return eV instanceof Error && eV.stack && (xV.stack = eV.stack), xV
    }

    function We(VV) {
      var eV, JV;
      const {
        kind: YV,
        code: UV,
        site: yV,
        fatal: pV,
        message: QV,
        error: nV
      } = VV, wV = !1 !== VV.toTransport && !te.has(YV), ZV = !pV && wV && !Fe.has(YV), vV = {
        kind: YV,
        code: UV,
        site: yV,
        fatal: pV,
        message: QV,
        details: null !== (eV = VV.details) && void 0 !== eV ? eV : {}
      }, rV = `${UV}@${yV}${void 0===VV.instance?"":`#${VV.instance}`}${pV?"!":""}`, kV = (null !== (JV = Ae.get(rV)) && void 0 !== JV ? JV : 0) + 1;
      if (Ae.set(rV, kV), void 0 !== VV.countAs && 1 === kV && ge(VV.countAs), kV > 1 ? 0 === (kV & kV - 1) && ie((() => {
          console.warn(`${cV} ${UV} at ${yV} reported ${kV} times`)
        })) : ZV && Ne >= Pe ? ie((() => {
          console.warn(`${cV} ${YV} ${UV} at ${yV}: ${QV} (not sent: the session's ${Pe} went)`, vV.details, null !== nV && void 0 !== nV ? nV : "")
        })) : (ZV && Ne++, function(VV, eV, JV, YV) {
          var UV, yV;
          const {
            kind: pV,
            code: QV,
            site: nV,
            fatal: wV,
            message: ZV,
            details: vV
          } = VV;
          ie((() => {
            (wV ? console.error : console.warn)(`${cV} ${pV} ${QV} at ${nV}: ${ZV}`, vV, null !== eV && void 0 !== eV ? eV : "")
          }));
          const rV = qe[pV],
            kV = null !== (UV = null !== (yV = je[pV]) && void 0 !== yV ? yV : rV) && void 0 !== UV ? UV : null;
          YV || null === kV || Re((async () => {
            const {
              reportCappedWasmFailure: eV,
              reportUncappedWasmFailure: JV,
              reportWasmFailure: YV
            } = await xV.e(218).then((() => xV(35139))), UV = Fe.has(pV) ? JV : void 0 === rV ? YV : eV, yV = function(VV) {
              let {
                kind: eV,
                site: xV,
                fatal: JV,
                details: YV
              } = VV;
              if ("crash" !== eV) return;
              return {
                ...YV,
                site: xV,
                fatal: String(JV)
              }
            }(VV);
            void 0 === yV ? UV(kV, ZV, QV) : UV(kV, ZV, QV, yV)
          }));
          JV && ie((() => {
            we(VV, eV)
          }))
        }(vV, nV, wV, void 0 !== VV.countAs)), pV) {
        var bV;
        const eV = null !== (bV = VV.screen) && void 0 !== bV ? bV : {
          text: (0, gV.e)(vV, !0),
          reload: !0
        };
        ie((() => {
          ve(eV)
        }))
      }
      return vV
    }

    function Re(VV) {
      Ce("counts", (async () => {
        const {
          peekVisitSessionId: eV
        } = await Promise.resolve().then((() => xV(701)));
        null !== eV() && (await VV(), Te = !0)
      }))
    }

    function ge(VV) {
      Me.has(VV.errorKind) || (Me.add(VV.errorKind), Re((async () => {
        const {
          reportClientError: eV
        } = await Promise.resolve().then((() => xV(3268)));
        eV(VV.errorKind, VV.error, VV.code, !0, void 0, VV.fields)
      })))
    }

    function De(VV, eV) {
      Ce("render_lost", (async () => {
        const [{
          reportClientError: JV
        }, {
          CAPPED_COUNTS_VISIT_CAP: YV
        }] = await Promise.all([Promise.resolve().then((() => xV(3268))), xV.e(218).then((() => xV(35139)))]);
        JV("render_lost", eV, VV, !0, YV)
      }))
    }

    function ie(VV) {
      try {
        VV()
      } catch (eV) {
        try {
          console.warn(`${cV} could not send a report`, eV)
        } catch {}
      }
    }

    function Ce(VV, eV) {
      try {
        const xV = eV().catch((eV => {
          console.warn(`${cV} could not send the report to ${VV}`, eV)
        })).finally((() => {
          ze.delete(xV)
        }));
        ze.add(xV)
      } catch (xV) {
        console.warn(`${cV} could not send the report to ${VV}`, xV)
      }
    }
    async function ae(VV) {
      let eV;
      (0, wV.i)();
      const xV = new Promise((xV => {
        eV = setTimeout(xV, VV)
      }));
      await Promise.race([oe(), xV]), clearTimeout(eV)
    }
    async function oe() {
      if (await Promise.allSettled([...ze]), Te) try {
        const {
          flushClientAnalyticsEvents: VV
        } = await Promise.resolve().then((() => xV(1601)));
        await VV()
      } catch (VV) {
        console.warn(`${cV} could not send the counts`, VV)
      }
    }
    async function ce() {
      for (; ze.size > 0;) await Promise.allSettled([...ze])
    }

    function he() {
      Ae.clear(), Ne = 0, Te = !1, ye = 0, pe.clear(), Xe = 0, Me.clear(), (0, vV.s)()
    }

    function le(VV) {
      const eV = "object" === typeof VV && null !== VV ? VV.type : VV;
      return "string" !== typeof eV ? "sky not named" : `sky ${JSON.stringify(Array.from(eV).slice(0,Ye).join(""))}`
    }

    function Le(VV, eV, xV, JV) {
      Xe += eV;
      for (const {
          code: pV,
          detail: QV
        }
        of VV) {
        var YV, UV, yV;
        const VV = (0, ZV.be)(pV),
          eV = (0, vV.c)(pV, QV),
          nV = null === JV || void 0 === JV ? void 0 : JV(pV, QV),
          wV = void 0 !== (null === eV || void 0 === eV ? void 0 : eV.gpuDetails),
          kV = wV ? null === (YV = (0, jV.z)()) || void 0 === YV ? void 0 : YV.renderer : void 0,
          bV = wV ? ` ${(0,vV.k)()}` : "",
          EV = Array.from([kV && `gpu ${(0,rV.b)(kV)}`, nV].filter(Boolean).join("; ")).slice(0, Je).join(""),
          BV = `core error ${VV}${null!==(UV=null===eV||void 0===eV?void 0:eV.words)&&void 0!==UV?UV:""}${bV}${EV?`: ${EV}`:""}`,
          qV = {
            errorCode: String(pV),
            detail: String(QV),
            droppedBefore: String(Xe),
            wasmBuild: xV.wasm,
            clientVersion: xV.client,
            ...null === eV || void 0 === eV ? void 0 : eV.gpuDetails,
            ...me(pV, QV)
          };
        null !== eV && (0, vV.r)(eV) ? ie((() => {
          console.warn(`${cV} coreError CORE-${VV}: ${BV} (not sent: the session's render warnings of its kind went)`, qV)
        })) : fe(pV) ? ie((() => {
          console.warn(`${cV} coreError CORE-${VV}: ${BV} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, qV)
        })) : We({
          kind: He(pV, QV),
          code: `CORE-${VV}`,
          site: hV,
          fatal: !1,
          message: BV,
          details: qV,
          instance: null !== (yV = null === eV || void 0 === eV ? void 0 : eV.instance) && void 0 !== yV ? yV : Ke(pV, QV)
        })
      }
    }

    function fe(VV) {
      if (VV !== ZV.M.AudioUnknownSound && VV !== ZV.M.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: eV,
        lobbyName: xV
      } = (0, UV.e)();
      return null !== eV && (!!(0, JV.l)(eV) || VV === ZV.M.AudioUnknownSound && (0, YV.f)(eV, xV))
    }

    function me(VV, eV) {
      if (VV !== ZV.M.RenderDeviceLost) return;
      const xV = eV >>> ZV.Y.LINKS_IN_FLIGHT_SHIFT & ZV.Y.LINKS_IN_FLIGHT_MAX,
        JV = eV >>> ZV.Y.OLDEST_LINK_SHIFT & ZV.Y.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(xV),
        oldestLinkMs: String(JV * ZV.Y.OLDEST_LINK_UNIT_MS)
      }
    }

    function Ke(VV, eV) {
      return VV === ZV.M.RenderDeviceLost && 0 !== (eV & ZV.Y.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function He(VV, eV) {
      return VV === ZV.M.JobsHeapGaveUp ? "meshHeap" : (0, vV.h)(VV, eV) ? "linksReadAfterView" : (0, vV.f)(VV, eV) ? "linkCensus" : "coreError"
    }

    function ue(VV) {
      return (0, iV.j)(VV instanceof CV.e ? VV.trap : VV, MV.G, MV.ab)
    }
    const se = "declined=js";

    function Se(VV) {
      return VV ? {
        labels: [se],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function Ie(VV, eV, xV) {
      return Oe(VV, eV, xV, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function de(VV, eV, xV) {
      return Oe(VV, eV, xV, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Oe(VV, eV, xV, JV, YV) {
      let {
        memoryDetails: UV = {},
        declined: yV = !1
      } = JV;
      const {
        code: pV,
        details: QV,
        message: nV
      } = (0, TV.M)(VV, eV), wV = [];
      Object.assign(QV, (0, aV.h)(VV.error)), null !== xV && (QV.trapKind = xV.kind, null !== xV.panic && (QV.panic = (0, iV.i)(xV.panic)), xV.refusedBytes > 0 && (QV.refusedAllocation = String(xV.refusedBytes)), wV.push((0, iV.l)(xV.kind, xV.refusedBytes)));
      const ZV = Se(yV);
      return We({
        kind: "crash",
        code: pV,
        site: VV.site,
        fatal: YV,
        message: [...wV, ...ZV.labels, nV].join("; "),
        details: {
          ...QV,
          ...ZV.details,
          ...UV
        },
        error: VV.error
      })
    }

    function Vx(VV, eV, xV) {
      return We({
        kind: "unsupported",
        code: eV,
        site: lV,
        fatal: !0,
        message: xV,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: VV,
          status: eV
        },
        screen: {
          text: (0, gV.k)(VV),
          reload: "download" === VV
        }
      })
    }
    const ex = {
      unsupported: "unsupported_js_fallback",
      blockedAfterLoss: "blocked_after_loss",
      noContext: "no_context_js_fallback"
    };

    function xx(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return We({
        kind: "unsupportedFallback",
        code: ex[eV],
        site: lV,
        fatal: !1,
        message: xV,
        details: {
          ...JV,
          cause: VV,
          status: "unsupported",
          decline: eV,
          fallback: "js"
        }
      })
    }

    function Jx(VV, eV, xV) {
      return We({
        kind: "recovered",
        code: "reprobed" === VV ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: lV,
        fatal: !1,
        message: xV,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: eV,
          step: VV
        }
      })
    }

    function Yx(VV) {
      return We({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: xe,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: VV.join(",")
        }
      })
    }
    const Ux = "reload=wasm";

    function yx(VV, eV, xV, JV) {
      const YV = Se("declined" === JV),
        UV = "wasmReload" === JV ? [Ux] : YV.labels;
      return We({
        kind: "unsupported",
        code: eV,
        site: lV,
        fatal: !1,
        message: [...UV, xV].join("; "),
        details: {
          cause: VV,
          status: eV,
          fallback: "wasmReload" === JV ? "wasmReload" : "js",
          ...YV.details
        }
      })
    }

    function px() {
      const {
        code: VV,
        message: eV
      } = DV.d;
      return We({
        kind: "unstreamedLoad",
        code: VV,
        site: lV,
        fatal: !1,
        message: eV
      })
    }
    class Qx extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function nx(VV) {
      return VV instanceof AV.n ? 0 === VV.code ? "JOIN-matchmake" : `JOIN-${VV.code}` : VV instanceof AV.c ? 0 === VV.code ? `JOIN-${VV.stage}` : `JOIN-${VV.stage}-${VV.code}` : VV instanceof PV.e ? "JOIN-gameCode" : VV instanceof Qx ? "JOIN-turnstilePage" : VV instanceof AV.u ? "JOIN-trafficCheck" : VV instanceof tV.d ? "JOIN-timeout" : "JOIN-network"
    }

    function wx(VV, eV) {
      const xV = (0, aV.m)(VV),
        JV = {
          wasmBuild: eV.wasm,
          clientVersion: eV.client
        },
        YV = VV instanceof Qx ? {
          text: (0, gV.i)(),
          reload: !1
        } : void 0,
        UV = (0, NV.f)(VV),
        yV = "expected" !== UV;
      return We({
        kind: "join",
        code: nx(VV),
        site: LV,
        fatal: !0,
        message: xV,
        details: JV,
        error: VV,
        screen: YV,
        toTransport: yV,
        instance: UV
      })
    }

    function Zx(VV, eV, xV) {
      var JV;
      const YV = (0, NV.f)(VV),
        UV = {
          cause: (VV instanceof AV.c || VV instanceof AV.n) && null !== (JV = VV.serverText) && void 0 !== JV ? JV : "",
          sinceJoinStart: (0, qV.c)(xV.sinceJoinStartMs),
          game: xV.game,
          ...(0, qV.h)(),
          wasmBuild: eV.wasm,
          clientVersion: eV.client
        };
      return We({
        kind: "pageJoin",
        code: nx(VV),
        site: LV,
        fatal: !1,
        message: (0, aV.m)(VV),
        details: UV,
        error: VV,
        toTransport: "unrecognised" === YV,
        instance: YV
      })
    }
    const vx = {
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

    function rx(VV, eV) {
      let {
        unused: xV,
        answered: JV,
        heldMs: YV
      } = VV;
      const {
        code: UV,
        message: yV
      } = vx[xV], pV = {
        unused: xV,
        answered: String(JV),
        heldMs: String(YV),
        wasmBuild: eV.wasm,
        clientVersion: eV.client
      };
      return We({
        kind: "seat",
        code: UV,
        site: LV,
        fatal: !1,
        message: yV,
        details: pV
      })
    }

    function kx(VV, eV, xV) {
      var JV;
      let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (JV = VV.name) && void 0 !== JV ? JV : String(VV.code);
      const UV = {
          closeCode: String(VV.code),
          recognised: String(null !== VV.name),
          closeReason: xV.closeReason,
          sinceJoined: (0, qV.c)(xV.sinceJoinedMs),
          game: xV.game,
          ...(0, qV.h)(),
          wasmBuild: eV.wasm,
          clientVersion: eV.client
        },
        yV = null === VV.name && !(0, qV.d)(VV.code);
      return We({
        kind: "disconnect",
        code: YV,
        site: fV,
        fatal: !1,
        message: "Left room",
        details: UV,
        toTransport: yV
      })
    }

    function bx(VV, eV) {
      const xV = {
        ...(0, kV.l)(VV),
        wasmBuild: eV.wasm,
        clientVersion: eV.client
      };
      return We({
        kind: "disconnect",
        code: `reconnect-${VV.reason}`,
        site: LV,
        fatal: !1,
        message: "Reconnect failed",
        details: xV
      })
    }

    function Ex(VV) {
      return VV.error instanceof zV.f ? `MODEL-${VV.error.status}` : VV.error instanceof GV.l ? "MODEL-ring" : "MODEL-network"
    }

    function Bx(VV, eV) {
      const xV = Ex(VV),
        JV = `model file ${VV.file} ${VV.startup?"(startup) ":""}could not load`,
        YV = {
          file: String(VV.file),
          url: VV.url,
          wasmBuild: eV.wasm,
          clientVersion: eV.client
        };
      return We({
        kind: VV.startup ? "model" : "modelLate",
        code: xV,
        site: mV,
        fatal: VV.startup,
        message: JV,
        details: YV,
        error: VV.error
      })
    }

    function jx(VV, eV) {
      const xV = {
        wasmBuild: eV.wasm,
        clientVersion: eV.client
      };
      return We({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: KV,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: xV,
        error: VV
      })
    }

    function qx(VV, eV, xV) {
      const JV = {
        delayMs: String(eV),
        wasmBuild: xV.wasm,
        clientVersion: xV.client
      };
      VV instanceof zV.f && (JV.status = String(VV.status));
      return We({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: KV,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: JV,
        error: VV
      })
    }

    function tx(VV, eV) {
      const xV = {
        wasmBuild: eV.wasm,
        clientVersion: eV.client
      };
      return We({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: KV,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: xV,
        error: VV
      })
    }

    function Fx(VV, eV) {
      const xV = {
        wasmBuild: eV.wasm,
        clientVersion: eV.client
      };
      return We({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: TV.H,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: xV,
        error: VV
      })
    }

    function Tx(VV, eV) {
      const xV = {
        wasmBuild: eV.wasm,
        clientVersion: eV.client
      };
      return We({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: dV,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: xV,
        error: VV
      })
    }

    function Px(VV, eV, xV, JV) {
      const YV = {
        wasmBuild: JV.wasm,
        clientVersion: JV.client
      };
      return We({
        kind: "texturePackKeptOut",
        code: (0, nV.c)("wasm", VV, eV),
        site: OV,
        fatal: !1,
        message: eV.detail,
        details: YV,
        error: xV
      })
    }

    function Ax(VV, eV) {
      const {
        frames: xV,
        acks: JV,
        mask: YV,
        outcome: UV
      } = VV, yV = {
        frames: String(xV),
        acks: String(JV),
        mask: String(YV),
        outcome: null !== UV && void 0 !== UV ? UV : "resynced",
        wasmBuild: eV.wasm,
        clientVersion: eV.client
      };
      return We({
        kind: "recovered",
        code: "rejoined" === UV ? "CORE-eventOverflowRejoin" : "failed" === UV ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: SV,
        fatal: !1,
        message: `the event buffer refused records in ${xV} frames`,
        details: yV
      })
    }

    function Nx(VV, eV, xV) {
      return We({
        kind: "recovered",
        code: "CORE-workerLost",
        site: VV,
        fatal: !1,
        message: `a ${VV} worker was lost`,
        details: {
          reason: eV,
          wasmBuild: xV.wasm,
          clientVersion: xV.client
        }
      })
    }

    function Xx(VV, eV, xV, JV) {
      const YV = {
          reason: VV,
          pageBuild: JV.build,
          pageAgeMin: String(Math.floor(JV.ageMs / 6e4)),
          wasmBuild: xV.wasm,
          clientVersion: xV.client
        },
        UV = eV ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return We({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: TV.H,
        fatal: !1,
        message: UV,
        details: YV
      })
    }

    function Mx(VV, eV, xV) {
      const JV = {
        wasmBuild: xV.wasm,
        clientVersion: xV.client
      };
      return We({
        kind: "recovered",
        code: VV,
        site: TV.p,
        fatal: !1,
        message: eV,
        details: JV
      })
    }

    function zx(VV, eV) {
      const xV = {
        lastReason: VV,
        wasmBuild: eV.wasm,
        clientVersion: eV.client
      };
      return We({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: TV.H,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: xV
      })
    }

    function Gx(VV, eV, xV) {
      return We({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: TV.l,
        fatal: !1,
        message: `${(0,XV.y)(VV)}: the session shed load`,
        details: {
          cause: VV,
          ...eV,
          wasmBuild: xV.wasm,
          clientVersion: xV.client
        }
      })
    }

    function Wx(VV, eV, xV, JV) {
      var YV, UV;
      const yV = (0, vV.o)(),
        pV = {
          game: VV,
          cause: eV,
          census: null === xV ? "none" : JSON.stringify(xV),
          gpu: null !== (YV = null === (UV = (0, jV.z)()) || void 0 === UV ? void 0 : UV.renderer) && void 0 !== YV ? YV : "",
          renderWarned: String(yV),
          browser: (0, vV.k)(),
          wasmBuild: JV.wasm,
          clientVersion: JV.client
        },
        QV = `first view drew no whole terrain in ${WV.e/1e3} s, ${eV}${yV?", render warned":""}`;
      return We({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: Ve,
        fatal: !1,
        message: QV,
        details: pV
      })
    }

    function Rx(VV, eV, xV, JV, YV) {
      const UV = (0, bV.f)(),
        yV = (0, bV.d)(VV, eV, xV, JV, UV),
        pV = {
          gpuModel: UV,
          wasmBuild: YV.wasm,
          clientVersion: YV.client
        };
      return We({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: ee,
        fatal: !1,
        message: yV,
        details: pV
      })
    }

    function gx(VV, eV, xV) {
      return We({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: VV,
        fatal: !1,
        message: `a ${VV} worker did not start`,
        details: {
          waitedMs: String(Math.round(eV)),
          wasmBuild: xV.wasm,
          clientVersion: xV.client
        }
      })
    }

    function Dx(VV, eV, xV) {
      return We({
        kind: "recovered",
        code: "CORE-replayFault",
        site: VV,
        fatal: !1,
        message: `the replay's ${VV} failed`,
        details: {
          wasmBuild: xV.wasm,
          clientVersion: xV.client
        },
        error: eV
      })
    }
    const ix = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function Cx(VV) {
      if (0 === VV) return "none";
      const eV = [60, 600, 3600].find((eV => VV < eV));
      return void 0 === eV ? "ge3600" : `lt${eV}`
    }

    function ax(VV, eV) {
      return null === VV ? "unbound" : (0, EV.h)(eV - VV)
    }

    function ox(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (VV & ZV.Y.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (VV & ZV.Y.LINKS_RUNNING) ? "links running" : "", `frames ${(0,rV.b)(Cx(VV&ZV.Y.FRAMES))}`, `up ${(0,rV.b)(ax(eV,xV))}`].filter(Boolean).join(", ")
    }

    function cx(VV, eV, xV) {
      const JV = "lost" === eV && void 0 !== xV ? ` (${xV})` : "";
      return `the ${VV} ${ix[eV]}${JV}`
    }
    const hx = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function lx(VV, eV, xV, JV) {
      var YV;
      let {
        restoreLost: UV = !1,
        adapterRemembered: yV = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, pV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const QV = null === xV || void 0 === xV ? void 0 : xV.message,
        nV = "pipeline_failed" === eV ? eV : xV instanceof FV.i ? "timeout" : (0, EV.p)("frames_refused" === eV, "string" === typeof QV ? QV : ""),
        wV = null === JV.boundAtMs ? "unbound" : `up${(0,EV.g)(pV-JV.boundAtMs)}`,
        ZV = null === JV.adapter ? "no adapter" : (0, EV.m)(JV.adapter),
        vV = `${!0===JV.indirectHangs?" ih":""}${!0===JV.restoresSkipped?" nr":""}${UV?" rl":""}${yV?" ar":""}`,
        rV = `${nV} ${(0,FV.j)()?"hidden":"visible"} ${wV}${vV} ${ZV}`;
      if ("webgpu" !== VV || "lost" !== eV && "frames_refused" !== eV) return {
        detail: rV,
        count: void 0
      };
      return {
        detail: rV,
        count: {
          errorKind: "render_lost",
          error: new Error(rV),
          code: (0, EV.x)(nV, null !== (YV = JV.boundAtMs) && void 0 !== YV ? YV : pV, pV).code,
          fields: {
            renderBackend: oV.b.webgpu
          }
        }
      }
    }

    function Lx(VV, eV, xV) {
      const {
        count: JV
      } = lx("webgpu", VV, eV, xV);
      void 0 !== JV && ge(JV)
    }
    const fx = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function mx(VV) {
      var eV;
      return null !== (eV = VV instanceof Error ? VV.reason : void 0) && void 0 !== eV ? eV : ""
    }

    function Kx(VV, eV, JV) {
      var YV, UV, yV, QV, nV;
      let {
        from: wV,
        cause: ZV = "lost",
        restoreLost: kV = !1,
        adapterRemembered: bV = !1,
        error: jV,
        context: qV = hx,
        session: tV = fx
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, FV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: TV,
        count: PV
      } = lx(VV, ZV, jV, qV, {
        restoreLost: kV,
        adapterRemembered: bV
      }, FV), AV = {
        reloadFrom: null !== wV && void 0 !== wV ? wV : "",
        losses: String(eV),
        cause: ZV,
        detail: TV,
        vendor: null !== (YV = null === (UV = qV.adapter) || void 0 === UV ? void 0 : UV.vendor) && void 0 !== YV ? YV : "",
        architecture: null !== (yV = null === (QV = qV.adapter) || void 0 === QV ? void 0 : QV.architecture) && void 0 !== yV ? yV : "",
        indirectHangs: String(qV.indirectHangs),
        restoresSkipped: String(qV.restoresSkipped),
        restoreLost: String(kV),
        adapterRemembered: String(bV),
        lossReason: mx(jV),
        samples: String(tV.samples),
        sunShadows: String(tV.sunShadows),
        renderDistance: String(tV.renderDistance),
        gpuFamily: null !== (nV = (0, pV.d)()) && void 0 !== nV ? nV : "",
        browser: (0, vV.k)(),
        siteUsed: BV.siteUsed,
        wasmBuild: JV.wasm,
        clientVersion: JV.client
      }, NV = "webgpu" !== VV && void 0 !== wV ? function(VV, eV, xV, JV) {
        return `: ${VV}, ${eV?"restore lost":"not restored"}, up ${(0,rV.b)(ax(xV,JV))}`
      }(wV, kV, qV.boundAtMs, FV) : "", XV = `${cx(VV,ZV)}${NV}`, MV = We({
        kind: "recovered",
        code: "CORE-renderLost",
        site: uV,
        fatal: !1,
        message: XV,
        details: AV,
        error: jV,
        countAs: PV
      });
      return Ce("ga", (async () => {
        const {
          logError: eV
        } = await Promise.resolve().then((() => xV(3245))), JV = `${EV.e["webgpu"===VV?"WebGPU":"WebGL2"]}\n Error: ${TV}`;
        eV("warning", JV), eV("error", JV)
      })), MV
    }

    function Hx(VV, eV) {
      var xV, JV;
      const YV = null === VV.name ? "TEXTURE-sources" : null === VV.url ? "TEXTURE-nourl" : VV.error instanceof RV.b ? `TEXTURE-${VV.error.status}` : "TEXTURE-network",
        UV = null === VV.name ? "terrain textures could not load" : `terrain texture ${VV.name} could not load`,
        yV = {
          texture: null !== (xV = VV.name) && void 0 !== xV ? xV : "",
          url: null !== (JV = VV.url) && void 0 !== JV ? JV : "",
          wasmBuild: eV.wasm,
          clientVersion: eV.client
        };
      return We({
        kind: "terrainTexture",
        code: YV,
        site: TV.E,
        fatal: !1,
        message: UV,
        details: yV,
        error: VV.error
      })
    }
    const ux = {
      previewAnimations: {
        site: sV,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: IV,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function sx(VV, eV, xV, JV) {
      const {
        site: YV,
        prefix: UV,
        name: yV
      } = ux[VV], {
        stage: pV,
        error: QV
      } = xV;
      return We({
        kind: VV,
        code: "decode" === pV ? null === QV ? `${UV}-decode` : `${UV}-trap` : QV instanceof zV.f ? `${UV}-${QV.status}` : `${UV}-network`,
        site: YV,
        fatal: !1,
        message: "decode" === pV ? `${yV} did not decode` : `${yV} could not load`,
        details: {
          url: eV,
          wasmBuild: JV.wasm,
          clientVersion: JV.client
        },
        error: QV
      })
    }
    const Sx = "staleBuild";

    function Ix(VV, eV, xV) {
      const JV = {
          failedSite: VV.site,
          url: VV.url,
          from: VV.from,
          sameBuild: String(VV.from === eV),
          reloadMs: String(Math.max(0, Date.now() - VV.at)),
          wasmBuild: xV.wasm,
          clientVersion: xV.client
        },
        YV = `reloaded into a newer build after ${VV.site} failed to load: ${VV.error}`;
      return We({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: Sx,
        fatal: !1,
        message: YV,
        details: JV
      })
    }
  },
  42101: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      e: () => YV,
      i: () => yV
    });
    var JV = xV(5301);
    const YV = 3e4;
    class UV {
      constructor(VV) {
        this.EZ = VV, this.waitedMs = 0, this.lastMs = null
      }
      frame(VV, eV) {
        if (eV) return !0;
        const xV = null === this.lastMs ? 0 : VV - this.lastMs;
        return this.lastMs = VV, xV <= 900 && (this.waitedMs += xV), !(this.waitedMs < YV) && (this.EZ(), !0)
      }
    }

    function yV(VV, eV) {
      return 0 === (VV & JV.cb.ChunkRequested) ? "no_chunk_request" : 0 === (VV & JV.cb.ChunkStored) ? "chunk_not_stored" : 0 === (VV & JV.cb.MeshLanded) ? "not_meshed" : null === eV ? "no_frame_drawn" : 0 === eV.terrainParts ? "no_terrain_parts" : eV.terrainCompiling > 0 ? "terrain_compiling" : eV.terrainOpaque + eV.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  41861: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => kV,
      e: () => JV,
      i: () => BV,
      k: () => bV,
      n: () => EV,
      p: () => vV,
      t: () => rV,
      v: () => wV,
      z: () => ZV
    });
    class JV extends Error {
      constructor(VV) {
        super(`the join's code did not load: ${VV instanceof Error?VV.message:String(VV)}`, {
          cause: VV
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === VV || void 0 === VV ? void 0 : VV.request
      }
    }
    let YV = null,
      UV = null,
      yV = null;
    const pV = [];
    let QV = null;

    function nV(VV, eV) {
      try {
        VV(eV)
      } catch (xV) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", xV)
      }
    }

    function wV() {
      return QV
    }

    function ZV(VV) {
      pV.push(VV), null !== QV && nV(VV, QV)
    }

    function vV(VV) {
      return YV ??= Promise.all([xV.e(84), xV.e(111), xV.e(86), xV.e(244), xV.e(89), xV.e(245), xV.e(224), xV.e(109), xV.e(264), xV.e(296), xV.e(48), xV.e(213), xV.e(232), xV.e(222), xV.e(205), xV.e(206), xV.e(170), xV.e(101), xV.e(134), xV.e(272), xV.e(68)]).then((() => xV(45460))).then((eV => {
        eV.loadAudio(VV), QV = eV;
        for (const VV of pV) nV(VV, eV);
        return eV
      })).catch((VV => {
        throw YV = null, VV
      })), YV
    }
    async function rV(VV, eV) {
      try {
        const xV = await vV(VV);
        await xV.loadClientGame(eV)
      } catch (xV) {
        throw new JV(xV)
      }
    }

    function kV(VV, eV) {
      UV = {
        running: VV,
        shell: eV
      }
    }

    function bV() {
      return yV
    }
    async function EV(VV) {
      const eV = UV;
      if ((null === eV || void 0 === eV ? void 0 : eV.running) !== VV) throw new Error("the core's session has ended");
      const xV = await vV(eV.shell.audio).catch((VV => {
        throw new JV(VV)
      }));
      if (null !== yV) return yV;
      if (UV !== eV || VV.isStopped) throw new Error("the core stopped while the game code loaded");
      if (yV = xV.startGameHost(VV, eV.shell), null === yV) throw new Error("the core's shared tables didn't read, so the game can't start");
      return yV
    }

    function BV() {
      null !== yV && (null !== QV ? QV.endGameHost(yV) : yV.closeGame()), yV = null, UV = null
    }
  },
  42007: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    const JV = {
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
  41963: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV,
      e: () => UV,
      h: () => yV,
      k: () => YV,
      n: () => rV,
      o: () => wV,
      p: () => QV,
      t: () => vV,
      u: () => ZV,
      x: () => pV
    });
    var JV = xV(1908);
    const YV = new Uint8Array([12]),
      UV = 2e3,
      yV = 257;

    function pV(VV) {
      const eV = new Uint8Array(4);
      return new DataView(eV.buffer).setUint32(0, VV, !0), eV
    }
    class QV extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class nV extends Error {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(VV), this.stage = eV, this.code = xV, this.serverText = JV, this.socketOpened = YV, this.name = "JoinError"
      }
    }
    class wV extends Error {
      constructor(VV) {
        super(VV), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class ZV extends Error {
      constructor(VV) {
        super((0, JV.f)(VV), {
          cause: VV
        }), this.name = "TrafficCheckError"
      }
    }
    class vV extends Error {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(VV, {
          cause: xV
        }), this.networkLost = eV, this.httpStatus = JV, this.name = "SeatRequestError"
      }
    }
    class rV extends Error {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(VV), this.code = eV, this.serverText = xV, this.name = "MatchmakeError"
      }
    }
  },
  41968: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => rV,
      f: () => vV,
      g: () => kV
    });
    var JV = xV(2919),
      YV = xV(3336),
      UV = xV(40258),
      yV = xV(37633),
      pV = xV(40264),
      QV = xV(41963),
      nV = xV(41977);
    const wV = "seat reservation expired.",
      ZV = "early_leave";

    function vV(VV) {
      if (VV instanceof yV.d) return "expected";
      if (VV instanceof QV.t) return VV.networkLost ? "expected" : "unrecognised";
      if (VV instanceof QV.c) {
        if ("closed" === VV.stage && (0 === VV.code || (0, YV.d)(VV.code))) return "expected";
        if ("roomError" === VV.stage && (VV.serverText === wV || VV.serverText === ZV)) return "expected"
      }
      return VV instanceof QV.c || VV instanceof QV.n ? null === (0, pV.l)(VV.code).name ? "unrecognised" : "known" : (0, JV.g)(VV) ? "expected" : VV instanceof QV.u || VV instanceof nV.e ? "known" : "unrecognised"
    }

    function rV(VV) {
      return VV instanceof yV.d ? "timedOut" : "expected" !== vV(VV) || (0, JV.g)(VV) || VV instanceof QV.c && 1001 === VV.code ? void 0 : "failed"
    }

    function kV(VV) {
      return VV instanceof QV.c && "attach" !== VV.stage ? (0, UV.d)(VV, "closed" !== VV.stage || VV.socketOpened ? "socket" : "socket_unopened") : VV instanceof QV.t ? {
        at: "seat_lost",
        code: VV.httpStatus
      } : VV instanceof QV.n || VV instanceof yV.d ? (0, UV.d)(VV, VV instanceof yV.d ? VV.leg : "seat") : void 0
    }
  },
  42085: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV,
      f: () => nV,
      h: () => rV,
      l: () => ZV
    });
    var JV = xV(3196),
      YV = xV(5297),
      UV = xV(42091),
      yV = xV(42096),
      pV = xV(37437);
    const QV = 395,
      nV = 2147483648,
      wV = new Uint8Array(0);
    class ZV extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class vV extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class rV {
      constructor(VV, eV, xV) {
        var JV, YV, yV, pV;
        let QV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = VV, this.build = eV, this.onFailure = xV, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.ZZ = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (JV = QV.fetchFile) && void 0 !== JV ? JV : VV => (0, UV.i)(VV), this.onWritten = null !== (YV = QV.onWritten) && void 0 !== YV ? YV : null, this.onTaken = null !== (yV = QV.onTaken) && void 0 !== yV ? yV : null, this.onPackFileFailed = null !== (pV = QV.onPackFileFailed) && void 0 !== pV ? pV : null, this.startupLeft = new Set(VV.startup);
        for (const UV of VV.startup) this.request(UV)
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
      drawnUrl(VV) {
        return this.drawn.get(VV)
      }
      request(VV) {
        const eV = this.pending.get(VV);
        if (!0 === (null === eV || void 0 === eV ? void 0 : eV.ask)) return;
        const xV = this.NZ(VV, !0);
        xV.recheck = void 0 !== eV;
        const JV = this.drawn.get(VV);
        if (void 0 !== JV) return xV.hn = !0, xV.recheck = !0, void this.fetch(VV, xV, JV);
        this.fetchWanted(VV, xV)
      }
      async refresh() {
        const VV = ++this.refreshes,
          eV = new Set;
        for (const yV of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const VV of yV) 0 === (VV & UV.f) && eV.add(VV);
        const xV = [...eV];
        let JV;
        try {
          JV = await Promise.all(xV.map((VV => this.wanted(VV))))
        } catch {
          return null
        }
        if (VV !== this.refreshes) return null;
        const YV = {
          resent: 0,
          refetched: 0,
          delivered: xV.filter((VV => this.drawn.has(VV))).length
        };
        return xV.forEach(((VV, eV) => {
          const {
            url: xV,
            inPlaceOf: UV
          } = JV[eV], yV = this.pending.get(VV);
          if (void 0 !== yV) {
            if (yV.hn || void 0 === yV.url) return void(yV.recheck = !0);
            if (yV.url === xV) return;
            YV.refetched++;
            const eV = this.NZ(VV, yV.ask);
            return eV.recheck = yV.recheck, void this.fetch(VV, eV, xV, UV)
          }
          const pV = this.written.get(VV);
          void 0 === pV ? this.drawn.get(VV) !== (null !== xV && void 0 !== xV ? xV : void 0) && (YV.resent++, this.fetch(VV, this.NZ(VV, !1), xV, UV)) : pV.url !== (null !== xV && void 0 !== xV ? xV : "") && (pV.attempt.recheck = !0)
        })), YV
      }
      taken(VV, eV) {
        const xV = new Set,
          JV = new Set;
        for (const YV of Array.from(eV)) 0 === (YV & nV) ? xV.add(YV) : JV.add((YV & ~nV) >>> 0);
        for (const [YV, UV] of this.written) UV.seq > VV || (this.written.delete(YV), xV.has(UV.seq) ? this.refusedFile(YV, UV) : this.takenFile(YV, UV, !UV.empty && !JV.has(UV.seq)))
      }
      takenFile(VV, eV, xV) {
        const {
          attempt: JV
        } = eV;
        if (xV) {
          var YV;
          this.drawn.set(VV, eV.url), this.undrawn.delete(VV), void 0 !== JV.inPlaceOf ? this.refusedPack.set(VV, JV.inPlaceOf) : JV.hn || this.refusedPack.delete(VV), null === (YV = this.onTaken) || void 0 === YV || YV.call(this, VV, !0);
          const xV = this.pending.get(VV);
          if (!0 === (null === xV || void 0 === xV ? void 0 : xV.hn) && xV.url !== eV.url) {
            const xV = this.NZ(VV, !0);
            xV.hn = !0, xV.recheck = !0, this.fetch(VV, xV, eV.url)
          }
        } else {
          var UV;
          this.drawn.has(VV) || this.undrawn.add(VV), null === (UV = this.onTaken) || void 0 === UV || UV.call(this, VV, !1)
        }
        JV.recheck && this.resendIfChanged(VV)
      }
      refusedFile(VV, eV) {
        var xV, JV;
        if (null === (xV = this.onTaken) || void 0 === xV || xV.call(this, VV, !1), this.refusedPack.set(VV, eV.url), this.pending.has(VV)) return void(null === (JV = this.onPackFileFailed) || void 0 === JV || JV.call(this, VV, kV(eV.url)));
        const YV = this.NZ(VV, eV.attempt.ask);
        YV.recheck = eV.attempt.recheck, this.afterRefusal(VV, YV, eV.url)
      }
      async afterRefusal(VV, eV, xV) {
        var JV;
        let YV;
        try {
          YV = await this.wanted(VV)
        } catch (UV) {
          return void(this.pending.get(VV) === eV && this.giveUp(VV, eV, xV, UV))
        }
        this.pending.get(VV) === eV && (YV.inPlaceOf !== xV ? eV.ask || (null !== (JV = YV.url) && void 0 !== JV ? JV : void 0) !== this.drawn.get(VV) ? this.fetch(VV, eV, YV.url, YV.inPlaceOf) : this.pending.delete(VV) : this.fallBack(VV, eV, xV, kV(xV)))
      }
      NZ(VV, eV) {
        const xV = {
          url: void 0,
          ask: eV,
          hn: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(VV, xV);
        for (let JV = this.ready.length - 1; JV >= 0; JV--) this.ready[JV].file === VV && this.ready.splice(JV, 1);
        return xV
      }
      async wanted(VV) {
        const eV = await this.files.url(VV);
        return null !== eV && this.refusedPack.get(VV) === eV ? {
          url: await this.files.shippedUrl(VV),
          inPlaceOf: eV
        } : {
          url: eV,
          inPlaceOf: void 0
        }
      }
      fetchWanted(VV, eV) {
        const xV = this.files.url(VV);
        xV instanceof Promise ? xV.then((xV => {
          this.fetchFound(VV, eV, xV)
        }), (xV => {
          this.pending.get(VV) === eV && this.giveUp(VV, eV, "", xV)
        })) : this.fetchFound(VV, eV, xV)
      }
      fetchFound(VV, eV, xV) {
        null !== xV && this.refusedPack.get(VV) === xV ? Promise.resolve(this.files.shippedUrl(VV)).then((JV => {
          this.fetch(VV, eV, JV, xV)
        }), (JV => {
          this.pending.get(VV) === eV && this.giveUp(VV, eV, xV, JV)
        })) : this.fetch(VV, eV, xV)
      }
      fetch(VV, eV, xV, JV) {
        this.pending.get(VV) === eV && (eV.url = xV, eV.inPlaceOf = JV, null !== xV ? this.load(VV, eV, xV) : this.buildFile(VV, eV, "", wV))
      }
      load(VV, eV, xV) {
        const JV = this.ZZ.get(VV);
        (null === JV || void 0 === JV ? void 0 : JV.url) !== xV ? this.fetchFile(xV).then((JV => {
          var YV, UV;
          this.pending.get(VV) === eV && (this.keptTotal += JV.byteLength - (null !== (YV = null === (UV = this.ZZ.get(VV)) || void 0 === UV ? void 0 : UV.glb.byteLength) && void 0 !== YV ? YV : 0), this.ZZ.set(VV, {
            url: xV,
            glb: JV
          }), this.buildFile(VV, eV, xV, JV))
        }), (JV => {
          this.pending.get(VV) === eV && this.fallBack(VV, eV, xV, JV)
        })) : this.buildFile(VV, eV, xV, JV.glb)
      }
      buildFile(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const yV = JV.byteLength > 0 && (0, UV.m)(xV) ? (VV | UV.e) >>> 0 : VV;
        this.queueRecord(VV, eV, xV, JV, this.build(yV, JV), YV)
      }
      queueRecord(VV, eV, xV, JV, UV, pV) {
        UV.then((UV => {
          if (this.pending.get(VV) !== eV) return;
          if (YV.x + (0, YV.ze)(UV.byteLength) > YV.Qc) return void this.ringRefused(VV, eV, xV, new ZV(`${bV(xV)}'s record is ${UV.byteLength-yV.c} bytes, past the cmd ring's ${YV.Qc}`), pV);
          const QV = {
            file: VV,
            url: xV,
            payload: UV,
            glb: JV,
            attempt: eV
          };
          pV ? this.ready.unshift(QV) : this.ready.push(QV)
        }))
      }
      async fallBack(VV, eV, xV, JV) {
        var YV;
        let UV = null,
          yV = JV;
        try {
          UV = await this.files.shippedUrl(VV)
        } catch (pV) {
          yV = pV
        }
        this.pending.get(VV) === eV && (null !== UV && UV !== xV ? (null === (YV = this.onPackFileFailed) || void 0 === YV || YV.call(this, VV, JV), eV.ask || this.drawn.get(VV) !== UV ? (eV.url = UV, eV.inPlaceOf = xV, this.load(VV, eV, UV)) : this.pending.delete(VV)) : this.giveUp(VV, eV, xV, yV))
      }
      ringRefused(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, UV.m)(xV) ? this.fallBack(VV, eV, xV, JV): this.giveUp(VV, eV, xV, JV, YV)
      }
      giveUp(VV, eV, xV, YV) {
        let UV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: VV,
          url: bV(xV),
          error: YV,
          startup: this.startupLeft.has(VV)
        }), eV.ask || !this.drawn.has(VV) ? (0, JV.R)(YV) ? this.queueRecord(VV, eV, xV, wV, Promise.resolve((0, yV.m)(VV, (0, pV.m)(YV))), UV) : this.buildFile(VV, eV, xV, wV, UV) : this.pending.delete(VV)
      }
      async resendIfChanged(VV) {
        var eV;
        if (0 !== (VV & UV.f)) return;
        let xV;
        try {
          xV = await this.wanted(VV)
        } catch {
          return
        }(null !== (eV = xV.url) && void 0 !== eV ? eV : void 0) === this.drawn.get(VV) || this.pending.has(VV) || this.written.has(VV) || this.fetch(VV, this.NZ(VV, !1), xV.url, xV.inPlaceOf)
      }
      drain(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === VV) return;
        let xV = 0,
          JV = 0;
        for (; JV < this.ready.length && xV < 262144;) {
          const pV = this.ready[JV];
          if (this.written.has(pV.file)) {
            JV++;
            continue
          }
          const wV = this.nextSeq;
          new DataView(pV.payload.buffer, pV.payload.byteOffset, pV.payload.byteLength).setUint32(yV.e, wV, !0);
          const vV = pV.attempt.hn && pV.glb.byteLength > 0 && this.drawn.get(pV.file) === pV.url;
          if (VV(QV, vV ? 1 : 0, pV.payload)) {
            if (this.nextSeq = wV >= nV - 1 ? 1 : wV + 1, this.ready.splice(JV, 1), xV += pV.payload.byteLength, this.pending.delete(pV.file), this.startupLeft.delete(pV.file), this.written.set(pV.file, {
                seq: wV,
                url: pV.url,
                empty: 0 === pV.glb.byteLength,
                attempt: pV.attempt
              }), pV.glb.byteLength > 0) try {
              var YV;
              null === (YV = this.onWritten) || void 0 === YV || YV.call(this, pV.file, pV.glb)
            } catch (UV) {
              console.warn("ModelFeed: reading the file's images failed", UV)
            }
          } else {
            if (null === eV || 0 === pV.glb.byteLength || eV(pV.payload.byteLength)) return;
            this.ready.splice(JV, 1);
            const VV = new ZV(`${bV(pV.url)}'s record is ${pV.payload.byteLength-yV.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(pV.file, pV.attempt, pV.url, VV, !0)
          }
        }
      }
    }

    function kV(VV) {
      return new vV(`presentation refused ${bV(VV)}`)
    }

    function bV(VV) {
      return VV.startsWith("data:") ? `${VV.slice(0,Math.min(Math.max(VV.indexOf(","),5),64))},...` : VV
    }
  },
  42091: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      f: () => UV,
      i: () => wV,
      m: () => pV,
      n: () => nV,
      r: () => QV
    });
    var JV = xV(3196),
      YV = xV(3630);
    const UV = 2147483648,
      yV = 1073741824;

    function pV(VV) {
      return VV.startsWith("data:")
    }

    function QV(VV) {
      let {
        onTableFailed: eV,
        packUrl: xV
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const JV = nV();
      JV.catch((VV => {
        null === eV || void 0 === eV || eV(VV)
      }));
      const YV = async eV => (await JV).fileUrl((eV & ~UV) >>> 0, VV);
      return {
        startup: [],
        url: async VV => {
          if (xV && 0 === (VV & UV)) {
            const eV = await JV,
              YV = eV.filePackName(VV),
              UV = null === YV || "lifeform" === eV.fileSource(VV) ? null : xV(YV);
            if (null !== UV) return UV
          }
          return YV(VV)
        },
        shippedUrl: YV
      }
    }

    function nV() {
      return xV.e(48).then((() => xV(45462)))
    }
    async function wV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return VV.startsWith("data:") ? (0, YV.b)(VV.slice(VV.indexOf(",") + 1), eV) : (0, JV.H)(VV, {
        spare: eV
      })
    }
  },
  42096: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV,
      e: () => wV,
      g: () => rV,
      j: () => EV,
      m: () => kV,
      p: () => vV,
      t: () => bV
    });
    const JV = 826427981,
      YV = 1,
      UV = 2,
      yV = 44,
      pV = 46,
      QV = 58,
      nV = 8,
      wV = 4;

    function ZV(VV, eV, xV) {
      const YV = (new TextEncoder).encode(xV),
        UV = nV + 4 * (eV.length + 2),
        yV = new Uint8Array(UV + (YV.byteLength + 3 & -4)),
        pV = new DataView(yV.buffer);
      return pV.setUint32(0, VV, !0), pV.setUint32(nV, JV, !0), eV.forEach(((VV, eV) => {
        pV.setUint32(nV + 4 * (eV + 1), VV, !0)
      })), pV.setUint32(UV - 4, YV.byteLength, !0), yV.set(YV, UV), yV
    }

    function vV(VV, eV) {
      return ZV(VV, [UV], eV)
    }

    function rV(VV, eV) {
      return ZV(VV, [YV, pV], eV)
    }

    function kV(VV, eV) {
      return ZV(VV, [YV, QV], eV)
    }

    function bV(VV, eV) {
      return ZV(VV, [YV, yV], eV)
    }

    function EV(VV) {
      const eV = nV;
      if (VV.byteLength < eV + 12) return !1;
      const xV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength);
      return xV.getUint32(eV, !0) === JV && xV.getUint32(eV + 4, !0) === YV && xV.getUint32(eV + 8, !0) === yV
    }
  },
  42011: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      g: () => wV,
      j: () => yV,
      n: () => QV
    });
    var JV = xV(37437);
    class YV extends Error {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${VV}: the module trapped${xV?" in an earlier call":""}: ${String(eV)}`, {
          cause: eV
        }), this.site = VV, this.trap = eV, this.earlier = xV, this.name = "ModuleTrapError", eV instanceof Error && void 0 !== eV.stack && (this.stack = `${this.name}: ${this.message}\n${eV.stack}`)
      }
    }
    const UV = new WeakMap;

    function yV(VV) {
      return UV.has(VV)
    }

    function pV(VV, eV) {
      UV.has(VV) || UV.set(VV, eV)
    }

    function QV(VV, eV) {
      return !!(0, JV.j)(eV) && (pV(VV, eV), !0)
    }
    const nV = [
      ["error", VV => VV.error],
      ["unhandledrejection", VV => VV.reason]
    ];

    function wV(VV, eV, xV) {
      let yV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return UV.has(VV) ? Promise.reject(new YV(eV, UV.get(VV), !0)) : new Promise(((UV, QV) => {
        const wV = xV => {
            pV(VV, xV), rV(), QV(new YV(eV, xV))
          },
          ZV = VV => {
            VV instanceof WebAssembly.RuntimeError ? wV(VV) : (rV(), QV(VV))
          },
          vV = nV.map((VV => {
            let [eV, xV] = VV;
            return [eV, VV => {
              const eV = xV(VV);
              (0, JV.j)(eV) && wV(eV)
            }]
          })),
          rV = () => {
            for (const [VV, eV] of vV) null === yV || void 0 === yV || yV.removeEventListener(VV, eV)
          };
        for (const [VV, eV] of vV) null === yV || void 0 === yV || yV.addEventListener(VV, eV);
        let kV;
        try {
          kV = xV()
        } catch (bV) {
          return void ZV(bV)
        }
        kV.then((VV => {
          rV(), UV(VV)
        }), ZV)
      }))
    }
  },
  41994: (VV, eV, xV) => {
    xV.d(eV, {
      C: () => KV,
      F: () => mV,
      G: () => iV,
      J: () => XV,
      N: () => gV,
      O: () => HV,
      R: () => DV,
      S: () => hV,
      U: () => aV,
      Y: () => RV,
      _: () => uV,
      e: () => NV,
      h: () => TV,
      j: () => cV,
      l: () => CV,
      n: () => FV,
      r: () => AV,
      v: () => qV,
      w: () => zV,
      z: () => WV
    });
    var JV = xV(220),
      YV = xV(27),
      UV = xV(3992),
      yV = xV(134),
      pV = xV(355),
      QV = xV(40),
      nV = xV(42001),
      wV = xV(37622),
      ZV = xV(42029),
      vV = (xV(42066), xV(42125)),
      rV = xV(42049),
      kV = xV(42017);
    const bV = "wasmJoinBuild";
    let EV = null,
      BV = null,
      jV = null;

    function qV(VV) {
      jV = VV
    }
    let tV = !1;

    function FV() {
      tV = !0
    }

    function TV() {
      return tV
    }
    let PV = !1;

    function AV() {
      PV = !0
    }

    function NV() {
      return PV
    }

    function XV() {
      return jV
    }
    let MV = null;

    function zV(VV) {
      MV = VV, (0, pV.d)(VV)
    }
    const GV = "wasmClientRenderLost";

    function WV() {
      QV.q.setItem(GV, !0)
    }

    function RV() {
      return !0 === QV.q.getItem(GV)
    }

    function gV() {
      return MV
    }

    function DV() {
      if (null === EV) {
        QV.m.removeItem("wasmLastPick"), QV.m.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, pV.m)(), EV = (0, nV.C)(ZV.f).then((VV => (null === VV || (0, nV.q)(VV) || (BV = vV.b[VV.backend], YV.b.followGameGpu("webgpu" === VV.backend ? VV.adapter : null), "webgpu" === VV.backend && (0, rV.g)()), VV)))
      }
      return EV
    }

    function iV() {
      return BV
    }

    function CV(VV) {
      return VV ? VV.load() : Promise.resolve().then((function() {
        var VV = new Error("Cannot find module '@bloxd/wasm/client'");
        throw VV.code = "MODULE_NOT_FOUND", VV
      })).then((VV => VV.bloxdWasmClient))
    }

    function aV(VV) {
      QV.m.setItem(bV, VV)
    }

    function oV(VV, eV) {
      const xV = QV.m.getItem(bV);
      return null === xV ? function(VV) {
        if (void 0 !== (0, JV.b)(VV, "webgpu") && (0, nV.y)()) return "webgpu";
        return !1 === (0, yV.u)() ? "webgl1" : "webgl"
      }(VV) : "none" === xV ? null : "string" === typeof xV && void 0 !== (0, JV.b)(VV, xV) ? xV : (eV && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(xV)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function cV() {
      if (null === ZV.f) return CV(null);
      const VV = oV(ZV.f, !0);
      return null === VV ? null : ZV.f[VV]()
    }

    function hV() {
      null === EV && null !== ZV.f && "webgl" === oV(ZV.f, !1) && (0, kV.c)()
    }
    let lV = null,
      LV = null,
      fV = null;

    function mV() {
      return lV ??= DV().then((async VV => {
        const eV = null !== VV && !(0, nV.q)(VV),
          xV = {
            indirectHangs: eV && await (0, nV.I)(VV, window.location.search),
            storagePullBreaks: eV && (0, nV.U)(VV, window.location.search),
            splitPassBreaks: eV && (0, nV.S)(VV, window.location.search),
            earlySky: eV && (0, nV.H)(VV, window.location.search),
            instancedTerrain: eV ? (0, nV.M)(VV, window.location.search) : null,
            cellLight: eV && await (0, UV.h)("cellLight"),
            framesAhead: (0, nV.k)(window.location.search, eV ? VV : null),
            webGpuRestores: !eV || (0, nV.V)(VV, (0, wV.e)()),
            bufferCopiesCrash: eV && (0, nV.E)(VV, window.location.search)
          };
        return LV = xV.indirectHangs, fV = !xV.webGpuRestores, xV
      })), lV
    }

    function KV() {
      return LV
    }

    function HV() {
      return fV
    }
    async function uV() {
      const VV = null === EV ? null : await EV;
      return null !== VV && (0, nV.q)(VV) && (EV = null, lV = null, LV = null, fV = null), DV()
    }
  },
  42295: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV
    });
    var JV = xV(37469),
      YV = xV(42158),
      UV = xV(4846),
      yV = xV(37622);
    async function pV(VV, eV) {
      return await (0, UV.b)(void 0, !0), (0, JV.h)(VV, YV.f, {
        ...eV,
        memoryMaximumBytes: (0, yV.q)()
      })
    }
  },
  42024: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => nV,
      h: () => pV,
      l: () => wV,
      o: () => yV
    });
    var JV = xV(370),
      YV = xV(670);
    let UV;

    function yV(VV) {
      var eV;
      const xV = UV;
      return UV = void 0, null !== (eV = QV(VV)) && void 0 !== eV ? eV : xV
    }

    function pV(VV) {
      try {
        const eV = QV(VV);
        void 0 !== eV && (UV = eV, (0, YV.g)((0, JV.l)(eV.reason, eV.message)))
      } catch (eV) {
        console.warn("Couldn't keep the WebGPU loss's cause", eV)
      }
    }

    function QV(VV) {
      var eV;
      const xV = null === VV || void 0 === VV || null === (eV = VV.KyV) || void 0 === eV ? void 0 : eV.call(VV),
        JV = null === VV || void 0 === VV ? void 0 : VV.myV();
      if (void 0 === JV) return;
      const YV = new Error(JV);
      return void 0 !== xV && (YV.reason = xV), YV
    }

    function nV(VV) {
      return VV instanceof Error ? VV : void 0
    }

    function wV(VV, eV) {
      return "lost" !== VV && "frames_refused" !== VV ? {} : (0, JV.l)("frames_refused" === VV ? VV : null === eV || void 0 === eV ? void 0 : eV.reason, null === eV || void 0 === eV ? void 0 : eV.message)
    }
  },
  42046: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => AV,
      f: () => tV,
      h: () => qV,
      k: () => PV,
      o: () => zV,
      r: () => MV,
      s: () => GV
    });
    var JV = xV(5301),
      YV = xV(42049),
      UV = xV(35148);
    const yV = 1,
      pV = 18,
      QV = 19,
      nV = 20,
      wV = 21,
      ZV = {
        [yV]: "link",
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
        [pV]: "retry linked",
        [QV]: "fallback linked",
        [nV]: "fallback failed",
        [wV]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function vV(VV, eV, xV) {
      return VV === pV ? "program retry" : VV === yV ? "program link" : VV === wV ? "program link stall" : VV === QV || VV === nV ? `program ${eV} ${xV}` : "program"
    }
    const rV = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      kV = {
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
      bV = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      EV = {
        11: "none read after view",
        12: "some read after view"
      },
      BV = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...EV
      },
      jV = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function qV(VV, eV) {
      return VV === JV.s.RenderSerialLinks && void 0 !== EV[eV]
    }

    function tV(VV, eV) {
      return VV === JV.s.RenderSerialLinks && void 0 !== jV[15 & eV]
    }
    const FV = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function TV(VV, eV) {
      var xV;
      return null !== (xV = VV[eV]) && void 0 !== xV ? xV : (0, UV.b)(eV)
    }

    function PV() {
      return (0, UV.b)((0, YV.c)())
    }

    function AV(VV, eV) {
      switch (VV) {
        case JV.s.RenderSceneRowNotDrawn:
          return {
            words: ` ${TV(kV,eV)}`, instance: String(eV), group: String(VV)
          };
        case JV.s.RenderChunkMeshNotDrawn: {
          const xV = 0 === (128 & eV) ? "" : " shortage",
            JV = eV >>> 8;
          return {
            words: ` ${TV(bV,127&eV)}${xV}${0===JV?"":` kind ${(0,UV.b)(JV)}`}`,
            instance: String(eV),
            group: String(VV)
          }
        }
        case JV.s.RenderInternal: {
          const xV = TV(rV, 255 & eV),
            JV = eV >>> 8 & 255;
          if (0 === JV) return {
            words: ` ${xV}`,
            instance: String(eV),
            group: String(VV)
          };
          const YV = TV(ZV, JV),
            yV = eV >>> 16;
          return {
            words: ` ${xV} ${YV} program ${(0,UV.b)(yV)}`,
            instance: `${xV} ${YV} ${yV}`,
            group: vV(JV, YV, xV),
            gpuDetails: {
              programFailure: YV,
              program: String(yV)
            }
          }
        }
        case JV.s.RenderSerialLinks: {
          if (tV(VV, eV)) {
            const VV = function(VV) {
              const eV = (eV, xV) => (0, UV.b)(VV >>> eV & (1 << xV) - 1),
                xV = VV >>> 30 & 1 ? " restored" : "";
              return `link census ${jV[15&VV]} linked ${eV(22,8)} failed ${eV(4,6)} retried ${eV(10,6)} fallback ${eV(16,6)}${xV}`
            }(eV);
            return {
              words: ` ${VV}`,
              instance: String(15 & eV),
              group: "link census",
              gpuDetails: {
                linkCensus: VV
              }
            }
          }
          const xV = TV(BV, eV);
          return {
            words: ` ${xV}`,
            instance: String(eV),
            group: String(VV),
            gpuDetails: {
              serialLinks: xV
            }
          }
        }
        case JV.s.RenderGlErrorAfterRestore: {
          const xV = TV(FV, 65535 & eV),
            JV = eV >>> 16,
            YV = 65535 !== JV;
          return {
            words: ` ${xV}${YV?` program ${(0,UV.b)(JV)}`:""}`,
            instance: String(eV),
            group: String(VV),
            gpuDetails: YV ? {
              glError: xV,
              program: String(JV)
            } : {
              glError: xV
            }
          }
        }
        default:
          return null
      }
    }
    const NV = 2,
      XV = new Map;

    function MV(VV) {
      let {
        group: eV,
        instance: xV
      } = VV, JV = XV.get(eV);
      return void 0 === JV && (JV = [], XV.set(eV, JV)), !JV.includes(xV) && (JV.length >= NV || (JV.push(xV), !1))
    }

    function zV() {
      return XV.size > 0
    }

    function GV() {
      XV.clear()
    }
  },
  42029: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      f: () => UV
    });
    var JV = xV(42034);
    const YV = new WeakSet;
    const UV = {
        webgpu: async () => (function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === VV || YV.has(VV.prototype)) return;
          YV.add(VV.prototype);
          const eV = VV.prototype.requestDevice;
          VV.prototype.requestDevice = function(VV) {
            var xV;
            const YV = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.requiredLimits) && void 0 !== xV ? xV : {},
              UV = Object.keys(YV).filter((VV => !(VV in this.limits)));
            if (0 === UV.length) return eV.call(this, VV);
            const yV = Object.fromEntries(Object.entries(YV).filter((VV => {
              let [eV] = VV;
              return eV in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${UV.join(", ")}`), (0, JV.reportDroppedRequiredLimits)(UV), eV.call(this, {
              ...VV,
              requiredLimits: yV
            })
          }
        }(), (await xV.e(8).then((() => xV(53885)))).bloxdWasmWebgpu),
        webgl: async () => (await xV.e(6).then((() => xV(53898)))).bloxdWasmWebgl,
        webgl1: async () => (await xV.e(7).then((() => xV(53911)))).bloxdWasmWebgl1
      },
      yV = async () => (await xV.e(5).then((() => xV(53922)))).compileAnimationPackInWasm
  },
  41977: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => BV,
      f: () => EV,
      g: () => FV
    });
    var JV = xV(7201),
      YV = xV(32),
      UV = xV(4703),
      yV = xV(5301),
      pV = xV(7193),
      QV = xV(41983);

    function nV(VV, eV) {
      const xV = (0, pV.b)(eV.variants);
      return VV.setShaderPack(xV.variantFlags, xV.hooks, xV.moduleCodes, (0, QV.z)(eV.layers), QV.n[eV.Fn], eV.keepCircleShadows)
    }
    const wV = 0,
      ZV = 1,
      vV = 2,
      rV = "shaderPack:failedToCompile",
      kV = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      bV = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function EV(VV, eV) {
      var xV;
      const JV = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.reason) && void 0 !== xV ? xV : "none";
      return kV.has(JV) ? {
        messageKey: eV ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === JV && "override" === (null === VV || void 0 === VV ? void 0 : VV.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: bV.has(JV) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class BV extends Error {
      constructor(VV) {
        super(`the shader pack can't run in this game: ${VV}`), this.messageKey = VV, this.name = "ShaderPackJoinError"
      }
    }
    const jV = "strict";
    class qV {
      constructor(VV) {
        this.deps = VV, this.pagePack = void 0, this.loaded = null, this.Fn = jV, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = VV.load().catch((eV => (VV.warn("the shader pack could not load: the game draws without it", eV), {
          status: "none"
        }))).then((VV => (this.loaded = VV, "active" === VV.status && (this.handOverToPreviews(VV), null !== VV.harnessPolicy && (this.Fn = VV.harnessPolicy, this.handOver())), VV)))
      }
      async join(VV) {
        this.leave();
        const eV = this.game,
          [xV, YV] = await Promise.all([this.pagePack, this.policyOf(VV)]);
        if (eV !== this.game || "none" === xV.status) return null;
        const UV = "active" === xV.status ? xV.pack.variants : xV.variants,
          yV = (0, JV.h)(UV, YV);
        if (yV && "active" === xV.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (yV) {
          const VV = this.cantRun(xV, YV);
          if (null !== VV) return VV
        } else if ("blocked" === xV.status || null === this.deps.core) return null;
        return this.Fn = YV, this.handOver(), yV && this.refused ? rV : (this.joined = !0, this.offInThisGame = !yV, null)
      }
      async replay(VV) {
        const eV = await this.join(VV);
        null === eV ? this.playable() : this.deps.failInGame(eV)
      }
      cantRun(VV, eV) {
        const {
          core: xV,
          noWebGpu: JV
        } = this.deps;
        if ("blocked" === VV.status) {
          return "shaderPack:failedUnchecked" === VV.messageKey && null === xV && JV.noAdapter ? JV.messageKey : VV.messageKey
        }
        return this.refused || this.failedPolicies.has(eV) ? rV : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var VV;
        return this.runsInJoinedGame() && "active" === (null === (VV = this.loaded) || void 0 === VV ? void 0 : VV.status) ? function(VV, eV) {
          const xV = VV.filter((VV => (0, JV.h)([VV], eV))),
            YV = VV => xV.some((eV => eV[VV]));
          return {
            sceneDepth: YV("sceneDepth"),
            sunShadow: YV("sunShadow"),
            airShadow: YV("airShadow")
          }
        }(this.loaded.pack.variants, this.Fn) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(rV) : (null !== this.couldntRun ? this.notify(UV.d, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Fn) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(VV) {
        for (const {
            code: eV,
            detail: xV
          }
          of VV)
          if (eV === yV.s.RenderShaderPackNotRun) switch (255 & xV) {
            case wV:
              this.refused = !0, this.failed();
              break;
            case ZV:
              this.failedPolicies.add(this.Fn), this.failed();
              break;
            case vV:
              this.failedModelPolicies.add(this.Fn), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(rV) : this.failedWhileJoining = !0)
      }
      fail(VV) {
        this.leave(), this.deps.failInGame(VV)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(VV, eV) {
        const xV = this.game;
        this.deps.notify(VV, (() => xV === this.game && this.joined), eV)
      }
      handOver() {
        var VV;
        const {
          core: eV
        } = this.deps;
        null !== eV && "active" === (null === (VV = this.loaded) || void 0 === VV ? void 0 : VV.status) && (nV(eV, {
          ...this.loaded.pack,
          Fn: this.Fn
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(VV) {
        let {
          pack: eV,
          harnessPolicy: xV
        } = VV;
        const {
          previews: JV
        } = this.deps;
        null !== JV && nV(JV, {
          ...eV,
          Fn: null !== xV && void 0 !== xV ? xV : jV
        })
      }
      policyOf(VV) {
        return this.deps.policyOf(VV).catch((VV => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", VV), jV)))
      }
    }
    const tV = "wasmShaderPackNotice";

    function FV(VV, eV, xV, JV) {
      return YV.h.subscribe(tV, (VV => {
        let {
          translationKey: eV,
          stillCurrent: xV,
          reasonKey: JV
        } = VV;
        xV() && YV.h.QZ("chat", (0, UV.i)(eV, JV))
      })), new qV({
        load: TV,
        policyOf: PV,
        core: VV,
        previews: eV,
        noWebGpu: xV,
        notify: (VV, eV, xV) => {
          const JV = {
            translationKey: VV,
            stillCurrent: eV,
            reasonKey: xV
          };
          YV.h.QZ(tV, JV, !0)
        },
        failInGame: VV => {
          YV.h.QZ(UV.e, VV)
        },
        warn: JV
      })
    }
    async function TV() {
      const [{
        shaderPackPage: VV,
        harnessShaderPackMode: eV
      }, {
        shaderPackTextures: JV
      }] = await Promise.all([xV.e(129).then((() => xV(40443))), xV.e(130).then((() => xV(7191)))]), YV = await VV.load();
      return "active" !== YV.status ? YV : {
        status: "active",
        pack: {
          variants: YV.pack.variants,
          layers: JV().layers,
          keepCircleShadows: YV.pack.keepCircleShadows
        },
        harnessPolicy: eV()
      }
    }
    async function PV(VV) {
      var eV;
      const [{
        shaderPackPage: JV,
        harnessShaderPackMode: YV
      }, {
        getShaderPackPolicy: UV
      }] = await Promise.all([xV.e(129).then((() => xV(40443))), xV.e(106).then((() => xV(44193)))]);
      return await JV.load(), null !== (eV = YV()) && void 0 !== eV ? eV : UV(VV)
    }
  },
  42109: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => pV,
      c: () => EV,
      f: () => QV,
      i: () => nV,
      j: () => wV,
      k: () => vV
    });
    var JV = xV(42117),
      YV = xV(42123);
    const UV = "atlas:",
      yV = 3e4;
    class pV extends Error {
      constructor(VV, eV) {
        super(`fetching ${VV} answered HTTP ${eV}`), this.url = VV, this.status = eV, this.name = "TerrainTextureFetchError"
      }
    }

    function QV(VV) {
      if (!VV.startsWith(UV)) return null;
      const eV = Number(VV.slice(UV.length));
      return Number.isInteger(eV) && eV >= 0 ? eV : null
    }
    async function nV() {
      const VV = await xV.e(231).then((() => xV(35423)));
      return {
        atlasSheets: VV.blockAtlasUrls,
        texture: eV => {
          var xV, JV, UV;
          return null !== (xV = null !== (JV = null !== (UV = VV.animatedBlockTextures[eV]) && void 0 !== UV ? UV : VV.rotatedBlockTextures[eV]) && void 0 !== JV ? JV : YV.d[eV]) && void 0 !== xV ? xV : null
        }
      }
    }
    async function wV(VV) {
      const eV = new AbortController,
        xV = setTimeout((() => {
          eV.abort(new DOMException(`${VV} took over ${yV} ms`, "TimeoutError"))
        }), yV);
      let JV;
      try {
        const xV = await fetch(VV, {
          signal: eV.signal
        });
        if (!xV.ok) throw new pV(VV, xV.status);
        JV = await xV.blob()
      } finally {
        clearTimeout(xV)
      }
      const YV = await createImageBitmap(JV, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return vV(YV)
      } finally {
        YV.close()
      }
    }
    const ZV = 8192;

    function vV(VV) {
      const {
        width: eV,
        height: xV
      } = VV, YV = Math.max(1, Math.min(xV, ZV)), UV = (0, JV.c)(eV, YV, {
        willReadFrequently: !0
      });
      if (!UV) throw new Error("no 2D context to read the texture back");
      UV.globalCompositeOperation = "copy";
      const yV = new Uint8Array(eV * xV * 4);
      for (let JV = 0; JV < xV; JV += YV) {
        const pV = Math.min(YV, xV - JV);
        UV.drawImage(VV, 0, JV, eV, pV, 0, 0, eV, pV), yV.set(UV.getImageData(0, 0, eV, pV).data, JV * eV * 4)
      }
      return {
        width: eV,
        height: xV,
        pixels: yV
      }
    }
    async function rV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wV;
      const JV = [],
        YV = await Promise.all(VV.map((async VV => {
          var YV, yV;
          const pV = null !== (YV = null === (yV = eV.decoded) || void 0 === yV ? void 0 : yV.call(eV, VV)) && void 0 !== YV ? YV : null,
            nV = null === pV ? function(VV, eV) {
              if (VV.startsWith(UV)) {
                var xV;
                const JV = QV(VV);
                return null === JV ? null : null !== (xV = eV.atlasSheets[JV]) && void 0 !== xV ? xV : null
              }
              return eV.texture(VV)
            }(VV, eV) : null,
            wV = null !== pV && void 0 !== pV ? pV : null === nV ? null : xV(nV);
          if (null === wV) return JV.push({
            name: VV,
            url: nV,
            error: new Error(`no URL for terrain texture ${VV}`)
          }), null;
          try {
            const eV = await wV;
            if (eV.pixels.byteLength !== eV.width * eV.height * 4) throw new Error(`decoded ${eV.pixels.byteLength} bytes for ${eV.width}x${eV.height} texels`);
            return {
              name: VV,
              texture: eV
            }
          } catch (ZV) {
            return JV.push({
              name: VV,
              url: nV,
              error: ZV
            }), null
          }
        }))),
        yV = YV.filter((VV => null !== VV)),
        pV = new Uint32Array(2 * yV.length);
      yV.forEach(((VV, eV) => {
        let {
          texture: xV
        } = VV;
        pV[2 * eV] = xV.width, pV[2 * eV + 1] = xV.height
      }));
      return {
        handOver: {
          names: yV.map((VV => {
            let {
              name: eV
            } = VV;
            return eV
          })),
          textures: yV.map((VV => {
            let {
              texture: eV
            } = VV;
            return eV.pixels
          })),
          sizes: pV
        },
        failures: JV
      }
    }
    const kV = [2e3, 1e4, 3e4, 6e4, 12e4];

    function bV() {}
    class EV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kV,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = VV, this.retryMs = eV, this.keepBelow = xV, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nV,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const JV = ++this.started,
          YV = {
            decode: xV.decode,
            wholeAtlas: xV.wholeAtlas
          };
        return this.loadAndHandOver(eV, YV, VV, (() => {
          var VV;
          return JV < this.landed || !1 === (null === (VV = xV.wanted) || void 0 === VV ? void 0 : VV.call(xV))
        }), {
          onTaken: (VV, xV) => {
            this.landed = JV, this.current = {
              mine: JV,
              sources: eV,
              load: YV,
              ZZ: VV,
              failed: xV
            }
          }
        })
      }
      restore(VV) {
        var eV;
        const xV = this.current;
        if (null === xV) return Promise.resolve(null);
        if ((null === (eV = this.restoring) || void 0 === eV ? void 0 : eV.mine) === xV.mine) return this.restoring.done;
        const JV = {
          mine: xV.mine,
          done: this.restoreLanded(xV, VV).finally((() => {
            this.restoring === JV && (this.restoring = null)
          }))
        };
        return this.restoring = JV, JV.done
      }
      async restoreLanded(VV, eV) {
        const xV = () => this.landed !== VV.mine,
          {
            ZZ: JV
          } = VV;
        if (null !== JV) return this.stopped() ? null : this.core.setTerrainTextures(JV.names, JV.textures, JV.sizes);
        let YV = eV;
        for (let UV = 0;; UV++) {
          const eV = this.retryMs.at(UV),
            JV = {
              allOrNothingExcept: void 0 === eV ? void 0 : VV.failed
            },
            yV = await this.loadAndHandOver(VV.sources, VV.load, YV, xV, JV);
          if (!1 !== yV || void 0 === eV || this.stopped()) return yV;
          if (YV = bV, await new Promise((VV => {
              setTimeout(VV, eV)
            })), xV()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const UV = this.core.terrainTextureNames();
        var yV;
        if (0 === UV.length) return null === (yV = YV.onTaken) || void 0 === yV || yV.call(YV, null, new Set), !0;
        let pV, nV;
        try {
          pV = await VV(), nV = await rV(UV, pV, eV.decode)
        } catch (EV) {
          return JV() ? null : (xV({
            name: null,
            url: null,
            error: EV
          }), !1)
        }
        if (JV() || this.stopped()) return null;
        for (const QV of nV.failures) xV(QV);
        const wV = YV.allOrNothingExcept;
        if (void 0 !== wV && nV.failures.some((VV => {
            let {
              name: eV
            } = VV;
            return null === eV || !wV.has(eV)
          })) || !0 === eV.wholeAtlas && nV.failures.some((VV => {
            let {
              name: eV
            } = VV;
            return null === eV || null !== QV(eV)
          }))) return !1;
        const {
          handOver: ZV
        } = nV, vV = function(VV) {
          return VV.textures.reduce(((VV, eV) => VV + eV.byteLength), 0)
        }(ZV) < this.keepBelow, kV = this.core.setTerrainTextures(ZV.names, ZV.textures, ZV.sizes, vV ? void 0 : () => {
          !async function(VV, eV) {
            await eV;
            for (const {
                buffer: JV
              }
              of VV) {
              const VV = JV;
              var xV;
              if (!VV.detached) null === (xV = VV.transfer) || void 0 === xV || xV.call(VV, 0)
            }
          }(ZV.textures, pV.heldUntil)
        });
        if (kV) {
          var bV;
          const VV = new Set(nV.failures.flatMap((VV => {
            let {
              name: eV
            } = VV;
            return null === eV ? [] : [eV]
          })));
          null === (bV = YV.onTaken) || void 0 === bV || bV.call(YV, vV ? ZV : null, VV)
        }
        return kV
      }
    }
  },
  38036: (VV, eV, xV) => {
    function JV(VV) {
      return "fetch" === VV || "timeout" === VV || "integrity" === VV ? "download" : "browser"
    }
    xV.d(eV, {
      d: () => YV,
      e: () => yV,
      g: () => QV,
      i: () => pV,
      j: () => JV,
      k: () => UV
    });
    const YV = "https://discord.gg/playbloxd";

    function UV(VV) {
      return "download" === VV ? {
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

    function yV(VV, eV) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: eV ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: VV.code
        },
        discordLink: eV,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function pV() {
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

    function QV(VV, eV, xV) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: xV ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: VV.reason
        },
        discordLink: null === VV.name,
        confirm: eV ? "general:reconnect" : VV.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  35259: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV,
      f: () => ZV,
      j: () => wV
    });
    var JV = xV(296),
      YV = xV(99),
      UV = xV(134),
      yV = xV(129),
      pV = xV(679);
    const QV = new Set(["mali_bifrost"]);

    function nV() {
      if (pV.f) return;
      const VV = (0, YV.pageOperatingSystem)();
      if ("android" !== VV && "windows" !== VV || (0, pV.e)("webgl_default")) return;
      if ("windows" === VV) return VV => "qualcomm" === (0, YV.normaliseGpuVendor)((0, yV.c)(VV).vendor);
      const eV = (0, UV.o)(),
        xV = null === eV ? (0, JV.p)() : (0, JV.h)(eV.vendor, eV.renderer);
      return null !== xV && QV.has(xV) ? VV => (0, JV.m)((0, yV.c)(VV).vendor, xV) : void 0
    }

    function wV(VV, eV) {
      return VV ? () => !0 : eV()
    }
    async function ZV(VV) {
      try {
        const eV = wV(VV, nV),
          xV = navigator.gpu;
        if (void 0 === eV || void 0 === xV) return !1;
        const JV = await (0, yV.l)(xV, {
          seed: !1,
          compatibility: eV
        });
        return "string" !== typeof JV && JV.compatibility && !(0, yV.j)(JV.adapter)
      } catch (eV) {
        return console.error("WebGPU compatibility-mode adapter request failed.", eV), !1
      }
    }
  },
  42049: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV,
      g: () => nV
    });
    var JV = xV(99),
      YV = xV(39952);
    const UV = "webgpuPipeline";

    function yV(VV) {
      return VV.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let pV = null;

    function QV() {
      if (null === pV) try {
        VV = (0, JV.getBrowserName)(), eV = (0, JV.getBrowserVersion)(), xV = (0, JV.getOperatingSystem)(), YV = (0, JV.getOperatingSystemVersion)(), pV = `${VV.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===eV?"unknown":yV(eV)}-${xV}${void 0===YV?"":`_${yV(YV)}`}`
      } catch (UV) {
        console.warn("The user agent couldn't be read for its browser code", UV), pV = "unknown"
      }
      var VV, eV, xV, YV;
      return pV
    }

    function nV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const eV = `WGPU-${QV()}`,
        JV = (VV, JV) => {
          const {
            reason: yV,
            message: pV
          } = JV;
          if ((0, YV.t)(String(pV))) return;
          const QV = {
            pipeline: null !== VV && void 0 !== VV ? VV : "",
            reason: String(yV),
            browserMessage: String(pV)
          };
          Promise.resolve().then((() => xV(42034))).then((VV => {
            let {
              reportCrash: xV
            } = VV;
            xV({
              kind: "coreError",
              code: eV,
              site: UV,
              fatal: !1,
              message: `${QV.pipeline} ${QV.reason}: ${QV.browserMessage}`,
              details: QV,
              error: JV
            })
          })).catch((VV => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", VV)
          }))
        },
        yV = VV.createRenderPipelineAsync;
      VV.createRenderPipelineAsync = function(VV) {
        return yV.call(this, VV).catch((eV => {
          throw JV(VV.label, eV), eV
        }))
      };
      const pV = VV.createComputePipelineAsync;
      VV.createComputePipelineAsync = function(VV) {
        return pV.call(this, VV).catch((eV => {
          throw JV(VV.label, eV), eV
        }))
      }
    }
  },
  42017: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      g: () => QV
    });
    var JV = xV(134);
    let YV = !1;

    function UV() {
      let VV = null;
      try {
        return VV = document.createElement("canvas").getContext("webgl2"), null !== VV
      } catch {
        return !1
      } finally {
        try {
          var eV, xV;
          null === (eV = VV) || void 0 === eV || null === (xV = eV.getExtension("WEBGL_lose_context")) || void 0 === xV || xV.loseContext()
        } catch {}
      }
    }

    function yV() {
      "hidden" === document.visibilityState && (YV = !1, document.removeEventListener("visibilitychange", yV))
    }

    function pV() {
      YV || "visible" !== document.visibilityState || !(0, JV.q)() && !UV() || (YV = !0, document.addEventListener("visibilitychange", yV))
    }

    function QV() {
      return YV || UV()
    }
  },
  42165: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/bloxd_wasm_models_bg.d897fc9b9fa0d1538289.wasm"
  },
  42160: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/bloxd_wasm_workers_bg.ee04f59e40d645c6ee05.wasm"
  },
  42158: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => JV
    });
    const JV = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new xV.U(xV(42160))
      }
    };
    const YV = {
      name: "bloxd_wasm_models",
      url: function() {
        return new xV.U(xV(42165))
      }
    }
  },
  7193: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => tV,
      e: () => FV,
      g: () => jV,
      j: () => BV
    });
    var JV = xV(7201);
    const YV = 6,
      UV = 3,
      yV = 1,
      pV = 2,
      QV = 4,
      nV = 8,
      wV = 16,
      ZV = 32,
      vV = 64,
      rV = 128,
      kV = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function bV(VV) {
      if (!VV) return 0;
      const eV = kV.indexOf(VV);
      if (eV <= 0) throw new Error(`"${VV}" is not a shader pack hook function`);
      return eV
    }

    function EV(VV) {
      if (0 === VV) return null;
      const eV = kV[VV];
      if (void 0 === eV) throw new Error(`${VV} is not a shader pack hook function id`);
      return eV
    }

    function BV(VV) {
      const eV = JV.c.length;
      return {
        strict: VV >= eV,
        program: JV.c[VV % eV]
      }
    }

    function jV(VV) {
      return Number(VV.strict) * JV.c.length + JV.c.indexOf(VV.program)
    }

    function qV(VV) {
      return "" === VV ? [] : VV.split(" ")
    }

    function tV(VV) {
      const eV = {
        variantFlags: new Uint8Array(YV),
        hooks: new Uint8Array(YV * UV),
        moduleCodes: Array(YV).fill(""),
        reads: Array(2 * YV).fill("")
      };
      for (const xV of VV) {
        const VV = jV(xV.key),
          JV = (VV, eV) => null === xV.hooks.surface || xV.reads.fragment.includes(VV) ? 0 : eV;
        eV.variantFlags[VV] = (xV.sceneDepth ? yV : 0) | (xV.movesVertices ? pV : 0) | (xV.sunShadow ? QV : 0) | (xV.airShadow ? nV : 0) | (xV.discards ? wV : 0) | JV("localPosition", ZV) | JV("enchantSpeed", vV) | JV("enchantTier", rV), eV.hooks[VV * UV] = bV(xV.hooks.vertex), eV.hooks[VV * UV + 1] = bV(xV.hooks.surface), eV.hooks[VV * UV + 2] = bV(xV.hooks.light), eV.moduleCodes[VV] = xV.moduleCode, eV.reads[2 * VV] = xV.reads.vertex.join(" "), eV.reads[2 * VV + 1] = xV.reads.fragment.join(" ")
      }
      return eV
    }

    function FV(VV) {
      const {
        hooks: eV,
        moduleCodes: xV,
        reads: JV
      } = VV;
      return Array.from(VV.variantFlags, ((VV, YV) => {
        const ZV = YV * UV;
        return {
          key: BV(YV),
          hooks: {
            vertex: EV(eV[ZV]),
            surface: EV(eV[ZV + 1]),
            light: EV(eV[ZV + 2])
          },
          moduleCode: xV[YV],
          sceneDepth: 0 !== (VV & yV),
          sunShadow: 0 !== (VV & QV),
          airShadow: 0 !== (VV & nV),
          movesVertices: 0 !== (VV & pV),
          discards: 0 !== (VV & wV),
          reads: {
            vertex: qV(JV[2 * YV]),
            fragment: qV(JV[2 * YV + 1])
          }
        }
      }))
    }
  },
  41983: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => rV,
      E: () => kV,
      d: () => YV,
      e: () => JV,
      g: () => vV,
      j: () => wV,
      n: () => EV,
      o: () => UV,
      r: () => pV,
      u: () => QV,
      y: () => yV,
      z: () => bV
    });
    const JV = 3,
      YV = 0,
      UV = 1,
      yV = 2,
      pV = {
        uniform: 3,
        Ur: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      QV = 10,
      nV = "BloxdPackInputs",
      wV = "bloxdPackInputs",
      ZV = [{
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
      vV = 80;

    function rV() {
      const VV = ZV.map((VV => {
        let {
          name: eV,
          type: xV
        } = VV;
        return `    ${eV}: ${xV},\n`
      })).join("");
      return `struct ${nV} {\n${VV}}\n@group(${JV}) @binding(${YV}) var<uniform> ${wV}: ${nV};\n`
    }

    function kV(VV, eV) {
      const xV = new DataView(VV, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, vV),
        [JV, YV, UV, yV, pV, QV] = ZV;
      xV.setFloat32(JV.offset, eV.seconds, !0), xV.setUint32(YV.offset, eV.lit ? 1 : 0, !0);
      for (let nV = 0; nV < 3; nV++) xV.setInt32(UV.offset + 4 * nV, eV.renderOffset[nV], !0), xV.setFloat32(yV.offset + 4 * nV, eV.ReV[nV], !0), xV.setFloat32(pV.offset + 4 * nV, eV.eyePosition[nV], !0), xV.setFloat32(QV.offset + 4 * nV, eV.shadowDirection[nV], !0)
    }

    function bV(VV) {
      const eV = new Uint32Array(Math.max(1, VV.length));
      return VV.forEach(((VV, xV) => {
        let {
          id: JV,
          rotation: YV
        } = VV;
        eV[xV] = 65535 & JV | (3 & YV) << 16
      })), eV
    }
    const EV = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7201: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV,
      g: () => yV,
      h: () => pV,
      l: () => YV,
      p: () => UV
    });
    const JV = ["terrain", "liquid", "model"];

    function YV() {
      const VV = [];
      for (const eV of [!1, !0])
        for (const xV of JV) VV.push({
          strict: eV,
          program: xV
        });
      return VV
    }

    function UV(VV) {
      return `${VV.strict?"strict":"allow"}.${VV.program}`
    }

    function yV(VV) {
      return !VV.hooks.vertex && !VV.hooks.surface && !VV.hooks.light
    }

    function pV(VV, eV) {
      return "off" !== eV && (null === VV || VV.some((VV => VV.key.strict === ("strict" === eV) && !yV(VV))))
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);