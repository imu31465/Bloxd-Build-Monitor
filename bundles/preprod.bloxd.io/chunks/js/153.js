export const id = 153;
export const ids = [153];
export const modules = {
  34880: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      e: () => aM
    });
    var OM = iM(243),
      SM = iM(114),
      jM = iM(34885);

    function aM() {
      var MM, rM, iM;
      return null !== (MM = (0, OM.p)(null !== (rM = null === (iM = (0, SM.o)()) || void 0 === iM ? void 0 : iM.renderer) && void 0 !== rM ? rM : null, (0, SM.k)())) && void 0 !== MM ? MM : "unknown"
    }

    function PM(MM, rM, iM, OM, SM) {
      const aM = null === rM ? "untimed" : `${Math.round(rM)} ms`;
      return `frames stalled, ${iM}, gpu ${(0,jM.b)(SM)}, blocking ${aM}, drawn ${Math.round(MM)} ms apart, timers ${OM.timers}, timer gap ${Math.round(OM.longestGapMs)} ms`
    }
  },
  39814: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      e: () => mM,
      i: () => HM,
      l: () => dM,
      o: () => LM,
      s: () => zM,
      t: () => aM,
      w: () => hM
    });
    var OM = iM(310),
      SM = iM(1818);
    const jM = "A valid external Instance reference no longer exists.";

    function aM(MM) {
      return MM.includes(jM)
    }
    const PM = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      nM = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const QM = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function zM(MM, rM) {
      return MM ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(MM) {
        var rM;
        const iM = null !== (rM = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(MM)) && void 0 !== rM ? rM : /failed with ([A-Z][A-Z0-9_]+)/.exec(MM);
        return iM ? iM[1] : aM(MM) ? "gpu_process_lost" : "other"
      }(rM)
    }

    function LM(MM) {
      return `${(null===MM||void 0===MM?void 0:MM.vendor)||"unknown vendor"} ${(null===MM||void 0===MM?void 0:MM.architecture)||"unknown architecture"}`
    }

    function mM(MM) {
      return yM(MM)[1]
    }

    function HM(MM) {
      return yM(MM)[2]
    }

    function hM(MM, rM, iM) {
      const SM = (0, OM.e)(),
        jM = null !== SM && SM >= rM,
        aM = document.hidden ? "hidden" : jM ? "shown" : "visible",
        PM = jM ? iM - SM : null;
      return {
        page: null === PM ? aM : `${aM}${mM(PM)}`,
        code: `${MM}_${null===PM?aM:`${aM}_${HM(PM)}`}_${JM(iM)}`
      }
    }

    function JM(MM) {
      if ((0, SM.e)()) return "ad_open";
      const rM = (0, SM.d)();
      return null === rM ? "ad_none" : `ad_${HM(MM-rM.endedAt)}_${rM.pageHid?"h":"v"}`
    }

    function dM(MM) {
      return lM(nM, MM)[1]
    }

    function yM(MM) {
      return lM(PM, MM)
    }

    function lM(MM, rM) {
      var iM;
      return null !== (iM = MM.find((MM => {
        let [iM] = MM;
        return rM < iM
      }))) && void 0 !== iM ? iM : MM[MM.length - 1]
    }
  },
  34885: (MM, rM, iM) => {
    function OM(MM) {
      return String(MM).replace(/\d/g, (MM => String.fromCharCode(97 + Number(MM))))
    }
    iM.d(rM, {
      b: () => OM
    })
  },
  41714: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM,
      g: () => zM,
      h: () => aM,
      i: () => SM,
      k: () => PM,
      l: () => QM
    });
    class OM extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function SM(MM) {
      return MM instanceof RangeError && /call stack/i.test(MM.message) || MM instanceof Error && "InternalError" === MM.name && /recursion/i.test(MM.message)
    }
    const jM = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function aM(MM) {
      var rM;
      return MM instanceof WebAssembly.RuntimeError || MM instanceof OM || SM(MM) && jM.test(null !== (rM = MM.stack) && void 0 !== rM ? rM : "")
    }

    function PM(MM, rM) {
      if (aM(MM)) throw MM;
      console.error(rM, MM)
    }

    function nM(MM, rM, iM, SM, jM) {
      if (rM % SM !== 0 || rM + iM > MM.byteLength) throw new OM(`${jM}: ${iM} bytes at ${rM}, ${SM}-aligned, outside ${MM.byteLength} bytes of memory`)
    }

    function QM(MM, rM, iM, OM, SM) {
      return 0 === iM ? null : (nM(rM, iM, OM * MM.BYTES_PER_ELEMENT, MM.BYTES_PER_ELEMENT, SM), new MM(rM, iM, OM))
    }

    function zM(MM, rM, iM, OM, SM) {
      return 0 === rM ? null : (nM(MM, rM, iM, OM, SM), new DataView(MM, rM, iM))
    }
  },
  41798: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => TM,
      D: () => FM,
      G: () => rr,
      K: () => Mr,
      L: () => VM,
      M: () => Or,
      P: () => Jr,
      S: () => ir,
      U: () => cM,
      V: () => Sr,
      X: () => nr,
      _: () => Lr,
      cb: () => WM,
      e: () => RM,
      g: () => dr,
      h: () => Ur,
      j: () => zr,
      k: () => hr,
      l: () => Pr,
      p: () => Hr,
      t: () => mr,
      w: () => Er,
      z: () => KM
    });
    var OM = iM(313),
      SM = iM(236),
      jM = iM(243),
      aM = iM(19),
      PM = iM(3122),
      nM = iM(694),
      QM = iM(4903),
      zM = iM(3090),
      LM = iM(3855),
      mM = iM(83),
      HM = iM(119),
      hM = iM(310),
      JM = iM(30),
      dM = iM(308),
      yM = iM(106),
      lM = iM(650),
      EM = iM(114),
      UM = iM(110),
      GM = iM(5200),
      CM = iM(41800),
      eM = iM(1899),
      bM = iM(41809),
      wM = iM(34980),
      tM = iM(41812),
      gM = iM(41819);
    const uM = "bloxd-webgpuOffAfterLoss",
      RM = "context:webgl",
      pM = "probe:threw";

    function WM(MM) {
      let rM;
      try {
        rM = MM.getContext("webgl", {
          powerPreference: EM.c
        })
      } catch {
        rM = null
      }
      if (null === rM) return null;
      let iM = null;
      try {
        const MM = rM.getParameter(rM.MAX_TEXTURE_SIZE);
        iM = "number" === typeof MM && MM > 0 ? MM : null
      } catch {
        iM = null
      }
      try {
        var OM;
        null === (OM = rM.getExtension("WEBGL_lose_context")) || void 0 === OM || OM.loseContext()
      } catch {}
      return iM
    }
    const sM = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function DM() {
      return "ios" === (0, mM.getOperatingSystem)() ? "ios" : "other"
    }
    const kM = "mali_valhall",
      ZM = new Set(["nvidia_pre_turing"]),
      oM = new Set(["intel_gen7_8"]);

    function fM(MM, rM, iM) {
      return sM.has(MM) ? "android_arm" === MM && rM === kM && "mobileAndroid" !== iM ? "webgpu_default" : "webgl_default" : null
    }

    function YM(MM) {
      return function(MM) {
        try {
          return MM()
        } catch {
          return null
        }
      }((() => {
        var rM, iM, OM, aM;
        const PM = null !== (rM = null === (iM = MM.info) || void 0 === iM ? void 0 : iM.vendor) && void 0 !== rM ? rM : "";
        return "windows" === (0, mM.getOperatingSystem)() && "" !== PM && "intel" !== (0, mM.normaliseGpuVendor)(PM) ? null : ((0, mM.seedGpuVendor)(PM), fM((0, SM.j)(), (0, jM.i)(PM, null !== (OM = null === (aM = MM.info) || void 0 === aM ? void 0 : aM.architecture) && void 0 !== OM ? OM : ""), HM.siteUsed))
      }))
    }

    function NM() {
      var MM;
      return {
        gpu: null !== (MM = navigator.gpu) && void 0 !== MM ? MM : null,
        webgl2: tM.g,
        webgl1: () => function(MM) {
          let rM, iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CM.b;
          try {
            rM = MM.getContext("webgl")
          } catch {
            rM = null
          }
          if (null === rM) return [RM];
          const OM = [];
          try {
            for (const SM of iM.extensions) null === rM.getExtension(SM) && OM.push(SM);
            for (const [SM, jM] of Object.entries(iM.limits)) {
              const MM = rM[SM],
                iM = "number" === typeof MM ? rM.getParameter(MM) : null;
              ("number" !== typeof iM || iM < jM) && OM.push(`limit:${SM}`)
            }
            const MM = rM.getShaderPrecisionFormat(rM.VERTEX_SHADER, rM.HIGH_FLOAT);
            (null === MM || MM.precision < iM.vertexHighFloatBits) && OM.push("precision:vertex_high_float")
          } catch {
            OM.push(pM)
          }
          try {
            var SM;
            null === (SM = rM.getExtension("WEBGL_lose_context")) || void 0 === SM || SM.loseContext()
          } catch {}
          return OM
        }(document.createElement("canvas")),
        offAfterLoss: MM => xM((() => MM ? (0, dM.D)() : aM.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: MM => xM((() => (0, yM.i)(MM))),
        intelGen9: MM => xM((() => (0, yM.r)(MM))),
        storeIntelGen9Verdict: MM => {
          JM.g.setItem(yM.J, MM)
        },
        gpuClassWebGlArm: YM,
        storeGpuClassVerdict: MM => {
          JM.g.setItem(yM.H, MM)
        },
        gpuClassOnWebGl: MM => (0, lM.e)(MM),
        webGlDefaultFamily: MM => oM.has((0, jM.i)(MM.vendor, MM.architecture)),
        storeWebGlDefaultFamilyVerdict: MM => {
          JM.g.setItem(yM.R, MM)
        },
        override: () => AM(),
        claimed: () => vM((0, nM.i)()),
        webGpuSetting: () => {
          const MM = JM.g.getItem(OM.fc);
          return "boolean" === typeof MM ? MM : null
        },
        heldBack: () => lM.i,
        storeHoldbackSpared: MM => {
          JM.g.setItem(yM.E, MM)
        },
        intelGen9OnWebGl: () => lM.k,
        nh: () => xM((() => (0, LM.d)(mM.featureFlags.settings.canUseShaderPacks))),
        windows: () => xM((() => "windows" === (0, mM.getOperatingSystem)())),
        defaultCompatibility: wM.b
      }
    }

    function AM() {
      let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, PM.p)("render") && "webgl1" === (0, PM.o)("renderer")) return "webgl1";
      const rM = [() => new URLSearchParams(window.location.search).get(zM.d), () => JM.g.getItem(zM.h), () => {
        const rM = localStorage.getItem(uM);
        return null !== rM && MM && localStorage.removeItem(uM), "1" === rM ? "webgl2" : null
      }];
      for (const iM of rM) {
        let MM = null;
        try {
          MM = vM(iM())
        } catch {}
        if (null !== MM) return MM
      }
      return null
    }

    function xM(MM) {
      try {
        return MM()
      } catch {
        return !1
      }
    }

    function vM(MM) {
      return "lite" === MM ? "webgpu" : "webgl2" === MM || "babylon" === MM ? "webgl" : null
    }

    function FM(MM) {
      return "none" === MM || "compatibility_mode" === MM
    }
    async function BM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NM();
      const rM = await async function(MM) {
        const rM = IM(MM),
          {
            source: iM
          } = rM,
          OM = !rM.asked,
          SM = "gpu" in rM && rM.heldBack,
          aM = function(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return SM && !FM(MM) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: iM
            } : {
              reason: MM,
              adapter: rM,
              source: iM
            }
          };
        if (!("gpu" in rM)) return aM(rM.refused);
        let PM;
        try {
          PM = await (0, eM.n)((0, UM.o)(rM.gpu, {
            compatibility: XM(MM, rM)
          }), yr, `requestAdapter didn't settle in ${yr/1e3} s`)
        } catch {
          return aM("adapter_error")
        }
        if ("string" === typeof PM) return aM(PM);
        const {
          adapter: nM,
          compatibility: QM
        } = PM, zM = (0, UM.d)(nM);
        if ((0, UM.j)(nM)) return aM("software_adapter", zM);
        const LM = MM.windows() && function(MM) {
          return ZM.has((0, jM.i)(MM.vendor, MM.architecture))
        }(zM);
        if (MM.storeHoldbackSpared(LM), SM && !LM) return aM("webgl_holdback");
        const mM = MM.intelGen9(nM);
        MM.storeIntelGen9Verdict(mM);
        const HM = mM ? null : MM.gpuClassWebGlArm(nM);
        MM.storeGpuClassVerdict(null !== HM && void 0 !== HM && HM);
        const hM = MM.webGlDefaultFamily(zM);
        if (MM.storeWebGlDefaultFamilyVerdict(hM), OM && MM.oldIntelDriver(nM)) return aM("old_intel_driver", zM);
        if ("default" === iM && mM && MM.intelGen9OnWebGl()) return aM("intel_gen9", zM);
        if ("default" === iM && null !== HM && MM.gpuClassOnWebGl(HM)) return aM("gpu_class_webgl", zM);
        if ("default" === iM && hM) return aM("gpu_wasm_arm", zM);
        return aM(QM ? "compatibility_mode" : "none", zM)
      }(MM);
      if (FM(rM.reason)) return {
        backend: "webgpu",
        ...rM
      };
      if ("webgl1" !== MM.override() && MM.webgl2()) return {
        backend: "webgl",
        ...rM
      };
      const iM = MM.webgl1();
      return 0 === iM.length ? {
        backend: "webgl1",
        ...rM
      } : {
        missing: iM
      }
    }

    function XM(MM, rM) {
      let {
        source: iM,
        asked: OM
      } = rM;
      return OM || "default" === iM ? (0, wM.g)(OM, MM.defaultCompatibility) : void 0
    }

    function IM(MM) {
      const rM = MM.override(),
        iM = MM.webGpuSetting(),
        OM = null === rM && !0 !== iM && MM.nh(),
        SM = null !== rM || null !== iM || OM ? null : MM.claimed(),
        jM = null !== rM ? "override" : !0 === iM ? "setting" : OM ? "pack" : !1 === iM ? "setting" : null !== SM ? "claim" : "default",
        aM = function(MM) {
          return "override" === MM || "setting" === MM
        }(jM);
      if ("webgl" === rM || "webgl1" === rM || "webgl" === SM || "setting" === jM && !1 === iM) return {
        source: jM,
        asked: aM,
        refused: "not_requested"
      };
      if (!MM.gpu) return {
        source: jM,
        asked: aM,
        refused: "no_webgpu_api"
      };
      const PM = "default" === jM && MM.heldBack();
      return PM && !MM.windows() ? {
        source: jM,
        asked: aM,
        refused: "webgl_holdback"
      } : !aM && MM.offAfterLoss("pack" === jM) ? {
        source: jM,
        asked: aM,
        refused: PM ? "webgl_holdback" : "off_after_loss"
      } : {
        source: jM,
        asked: aM,
        heldBack: PM,
        gpu: MM.gpu
      }
    }

    function KM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...NM(),
          override: () => AM(!1)
        },
        rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mM.isWebKit,
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DM;
      try {
        if (!rM()) return !1;
        const OM = IM(MM);
        if (!("gpu" in OM) || OM.heldBack) return !1;
        const SM = "default" === OM.source ? fM(iM(), "apple", HM.siteUsed) : null;
        return null === SM || !MM.gpuClassOnWebGl(SM)
      } catch (OM) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", OM), !1
      }
    }
    let qM = !1;
    async function TM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NM();
      if (null === MM) return null;
      const iM = await BM(rM);
      return qM = !("missing" in iM) && "webgpu" === iM.backend && "claim" === iM.source, "missing" in iM ? iM : {
        ...iM,
        load: MM[iM.backend]
      }
    }
    async function VM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NM().gpu,
        OM = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== MM.backend) return !1;
      const SM = ar(MM, rM, "indirectDraws", "off", "on");
      if (null !== SM) return SM;
      if (null !== MM.adapter && (0, yM.s)(MM.adapter, OM)) return !0;
      if (null === iM) return !1;
      try {
        var jM;
        const MM = await (0, eM.n)(iM.requestAdapter({
          powerPreference: "low-power"
        }).then((async MM => (null !== MM && await (0, UM.h)(MM), MM))), yr, `the low-power requestAdapter didn't settle in ${yr/1e3} s`);
        return (0, yM.s)(null !== (jM = null === MM || void 0 === MM ? void 0 : MM.info) && void 0 !== jM ? jM : {}, OM)
      } catch (aM) {
        return aM instanceof eM.h
      }
    }

    function cM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, mM.pageOperatingSystem)();
      if ("webgpu" !== MM.backend) return !1;
      const SM = ar(MM, rM, "terrainFetch", "texture", "storage");
      return null !== SM ? SM : null !== MM.adapter && ((0, yM.k)(MM.adapter, iM) || (0, yM.j)(MM.adapter, OM))
    }

    function Mr(MM, rM) {
      if ("webgpu" !== MM.backend) return !1;
      const iM = ar(MM, rM, "skyOrder", "early", "last");
      return null !== iM ? iM : null !== MM.adapter && (0, jM.i)(MM.adapter.vendor, MM.adapter.architecture) === kM
    }

    function rr(MM, rM) {
      if ("webgpu" !== MM.backend) return !1;
      const iM = ar(MM, rM, "uploadCopies", "off", "on");
      return null !== iM ? iM : null !== MM.adapter && "powervr_rogue" === (0, jM.i)(MM.adapter.vendor, MM.adapter.architecture)
    }

    function ir(MM, rM, iM) {
      if ("webgpu" !== MM.backend) return !1;
      const OM = ar(MM, rM, "sceneDepth", "off", "on");
      return null !== OM ? OM : null !== MM.adapter && (0, yM.n)(MM.adapter, iM)
    }

    function Or(MM, rM) {
      return "webgl" === MM.backend ? ar(MM, rM, "instancedTerrain", "1", "0") : null
    }

    function Sr(MM, rM) {
      return "webgpu" !== MM.backend || rM && (null === MM.adapter || !(0, dM.H)(MM.adapter))
    }

    function jr(MM, rM, iM, OM) {
      const SM = new URLSearchParams(rM).get(iM),
        jM = null !== SM && void 0 !== SM ? SM : null === MM ? null : (0, nM.d)(iM);
      return null !== jM && OM(jM) ? (qM ||= null === SM && "webgpu" === (null === MM || void 0 === MM ? void 0 : MM.backend), jM) : null
    }

    function ar(MM, rM, iM, OM, SM) {
      const jM = jr(MM, rM, iM, (MM => MM === OM || MM === SM));
      return null === jM ? null : jM === OM
    }

    function Pr(MM) {
      return null !== MM && "missing" in MM
    }

    function nr(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Lr(),
        iM = arguments.length > 2 ? arguments[2] : void 0;
      return rM ? function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aM.d,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const OM = "start_failed" === MM || "pipeline_failed" === MM,
            SM = (0, gM.k)(MM, iM),
            jM = rM.turnOffWebGpuAfterDeviceLoss(OM ? "visible" : (0, dM.l)((0, hM.h)()), OM, SM);
          return qM && (0, nM.q)("webgpuLoss"), rM.isWebGpuOffAfterLoss() && "webgpu" === vM(JM.g.getItem(zM.h)) && JM.g.removeItem(zM.h), (0, PM.p)("webgpuloss") && (0, QM.d)((rM => {
            var iM;
            rM.noteWebGpuLoss("wasm", jM ? MM : `${MM}, which storage didn't keep`, null !== (iM = SM.message) && void 0 !== iM ? iM : null)
          })), jM
        } catch {
          return !1
        }
      }(MM, aM.d, iM) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Qr = "framePacing";

    function zr(MM, rM) {
      const iM = jr("webgpu" === (null === rM || void 0 === rM ? void 0 : rM.backend) ? rM : null, MM, Qr, (MM => /^\d{1,9}$/.test(MM)));
      return null === iM ? void 0 : Number(iM)
    }

    function Lr() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === vM(new URLSearchParams(MM).get(zM.d))
      } catch {
        return !1
      }
    }

    function mr(MM) {
      return !!Hr(MM) || MM instanceof Error && !(MM instanceof WebAssembly.RuntimeError) && MM.message.startsWith(`${GM.n.RenderSurfaceUnusable}:`)
    }

    function Hr(MM) {
      const {
        name: rM,
        message: iM
      } = null !== MM && void 0 !== MM ? MM : {};
      return "InvalidStateError" === rM && "string" === typeof iM && iM.startsWith("GPUDevice.")
    }

    function hr(MM) {
      const rM = MM;
      return "function" === typeof rM.iOM && "function" === typeof rM.SOM ? rM : null
    }

    function Jr(MM) {
      return "function" === typeof MM.Oy ? MM : null
    }
    const dr = "openRenderer";
    const yr = 5e3,
      lr = 15e3;

    function Er(MM, rM, iM, OM, SM, jM) {
      return (0, eM.n)(function(MM, rM, iM, OM, SM, jM) {
        return (0, bM.i)(MM, rM, (() => MM.Oy(iM, OM, SM, jM.indirectHangs, jM.storagePullBreaks, jM.splitPassBreaks, jM.earlySky, jM.instancedTerrain, jM.cellLight, jM.framesAhead, jM.webGpuRestores, jM.bufferCopiesCrash)))
      }(MM, rM, iM, OM, SM, jM), lr, `${GM.n.RenderSurfaceUnusable}: the renderer didn't open in ${lr/1e3} s`, Gr)
    }
    async function Ur(MM, rM, iM, OM, SM, jM) {
      if ("function" !== typeof MM.HaM) throw new Error("this core has no set_renderer");
      const aM = await Er(rM, dr, iM, SM, OM, jM);
      try {
        MM.HaM(aM)
      } catch (PM) {
        throw Gr(aM), PM
      }
    }

    function Gr(MM) {
      try {
        MM.free()
      } catch {}
    }
  },
  41913: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    const OM = {
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
  41840: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => hM,
      f: () => JM,
      j: () => mM,
      n: () => LM
    });
    const OM = 2e3,
      SM = "unavailable";
    let jM = () => Promise.resolve().then((() => iM(3262))),
      aM = null,
      PM = null,
      nM = QM();

    function QM() {
      let MM = () => {};
      return {
        promise: new Promise((rM => {
          MM = () => {
            rM(null)
          }
        })),
        resolve: MM
      }
    }

    function zM() {
      if (null === aM) {
        const MM = jM();
        aM = MM, MM.then((rM => {
          aM === MM && (PM = rM)
        }), (() => {
          aM === MM && (aM = null)
        }))
      }
      return aM
    }

    function LM() {
      zM().catch((() => {}))
    }

    function mM() {
      nM.resolve()
    }

    function HM(MM, rM, iM, OM) {
      if (null === MM) return {
        errorKind: rM,
        fingerprint: SM,
        dedupe: `${rM}|${OM}`
      };
      const {
        fingerprint: jM
      } = MM.clientErrorKey(rM, iM, OM);
      return {
        errorKind: rM,
        fingerprint: jM,
        dedupe: jM
      }
    }

    function hM(MM, rM, iM, OM) {
      return null === PM ? OM ? (LM(), HM(null, MM, rM, iM)) : null : HM(PM, MM, rM, iM)
    }
    async function JM(MM, rM, iM) {
      let SM;
      const jM = new Promise((MM => {
        SM = setTimeout((() => {
          MM(null)
        }), OM)
      }));
      try {
        return HM(await Promise.race([zM(), jM, nM.promise]), MM, rM, iM)
      } catch {
        return HM(null, MM, rM, iM)
      } finally {
        clearTimeout(SM)
      }
    }
  },
  41833: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      BUILT_IN_ANIMATIONS_SITE: () => TM,
      CORE_ERRORS_SITE: () => NM,
      EVENT_OVERFLOW_SITE: () => qM,
      FIRST_VIEW_SITE: () => Mr,
      JOIN_SITE: () => xM,
      LEAVE_SITE: () => vM,
      MAIN_THREAD_SITE: () => rr,
      MODEL_FEED_SITE: () => FM,
      MODEL_POOL_SITE: () => BM,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => jr,
      NON_FATAL_REPORTS_PER_SESSION: () => er,
      PREVIEW_ANIMATIONS_SITE: () => KM,
      RENDER_RELOAD_SITE: () => IM,
      REQUEST_DEVICE_SITE: () => ir,
      TEXTURE_NAMES_SITE: () => XM,
      TEXTURE_PACK_FEED_SITE: () => VM,
      TEXTURE_PACK_SWAP_SITE: () => cM,
      TurnstilePageError: () => ni,
      WASM_LOAD_SITE: () => AM,
      countRenderLost: () => Fi,
      crashError: () => Rr,
      crashReportsSettled: () => Yr,
      deviceLossFields: () => Fr,
      deviceLossWords: () => Ni,
      flushCrashReports: () => or,
      joinFailureCode: () => Qi,
      lokiTransport: () => nr,
      modelFailureCode: () => yi,
      readTrap: () => Ir,
      renderLoss: () => vi,
      renderReloadMessage: () => Ai,
      reportCoreErrors: () => xr,
      reportCountedLoadFallback: () => ai,
      reportCrash: () => pr,
      reportDataLoadFailure: () => Ti,
      reportDisconnect: () => Ji,
      reportDracoDecoderFailure: () => Gi,
      reportDroppedRequiredLimits: () => Si,
      reportEventOverflow: () => wi,
      reportFirstViewNoTerrain: () => si,
      reportLightFault: () => ui,
      reportMainStall: () => Di,
      reportMemoryShed: () => Wi,
      reportModelFailure: () => li,
      reportModelPoolFailure: () => Ei,
      reportModelsModuleRetry: () => Ui,
      reportNoBackendRetry: () => Oi,
      reportPageJoinFailure: () => Li,
      reportReconnectGaveUp: () => di,
      reportRenderRecovery: () => Dr,
      reportRenderReload: () => Ii,
      reportReplayFault: () => Zi,
      reportStaleBuildReload: () => ci,
      reportStoppedCore: () => Vr,
      reportTerrainTextureFailure: () => Ki,
      reportTexturePackFeedLoadFailure: () => ei,
      reportTexturePackKeptOut: () => bi,
      reportUnstreamedCoreLoad: () => Pi,
      reportUnsupportedFallback: () => ii,
      reportUnusedSeat: () => Hi,
      reportWorkerLost: () => ti,
      reportWorkerStartTimeout: () => ki,
      reportWorldgenGaveUp: () => Ri,
      reportWorldgenLoadFailure: () => Ci,
      reportWorldgenWorkerLost: () => gi,
      resetCrashReports: () => Nr,
      setCrashAdPreload: () => yr,
      setCrashBackend: () => dr,
      setCrashScreen: () => Hr,
      setCrashTransport: () => Lr,
      showCrash: () => Tr,
      showJoinFailure: () => zi,
      showUnsupported: () => Mi,
      unknownSkyWords: () => Ar
    });
    var OM = iM(1073),
      SM = iM(1382),
      jM = iM(1373),
      aM = iM(1329),
      PM = iM(243),
      nM = iM(3270),
      QM = iM(4654),
      zM = iM(41840),
      LM = iM(5198),
      mM = iM(41846),
      HM = iM(34885),
      hM = iM(3324),
      JM = iM(34880),
      dM = iM(39814),
      yM = iM(119),
      lM = iM(114),
      EM = iM(3333),
      UM = iM(37437),
      GM = iM(1899),
      CM = iM(41858),
      eM = iM(41677),
      bM = iM(41764),
      wM = iM(41767),
      tM = iM(37428),
      gM = iM(3185),
      uM = iM(3188),
      RM = iM(41882),
      pM = iM(41895),
      WM = iM(41900),
      sM = iM(37790),
      DM = iM(3632),
      kM = iM(37218),
      ZM = iM(41809),
      oM = iM(37229),
      fM = iM(41922);
    const YM = "[bloxd-wasm-client]",
      NM = "coreErrors",
      AM = "wasmLoad",
      xM = "join",
      vM = "leave",
      FM = "modelFeed",
      BM = "modelWorkerPool",
      XM = "textureNames",
      IM = "renderReload",
      KM = "previewAnimations",
      qM = "eventOverflow",
      TM = "builtInAnimations",
      VM = "texturePackFeed",
      cM = "texturePackSwap",
      Mr = "firstView",
      rr = "mainThread",
      ir = "requestDevice",
      Or = 300,
      Sr = 64,
      jr = 8;
    let ar = 0;
    const Pr = new Set,
      nr = (MM, rM) => {
        const iM = lr[MM.kind],
          OM = {
            backend: hr,
            adPreload: Jr
          };
        if (null === iM) return void Qr(MM, rM, OM, null);
        const SM = (0, zM.d)(iM, MM.message, MM.code, MM.fatal);
        null === SM ? Zr("Loki", (async () => {
          Qr(MM, rM, OM, await (0, zM.f)(iM, MM.message, MM.code))
        })) : Qr(MM, rM, OM, SM)
      };

    function Qr(MM, rM, iM, OM) {
      let {
        backend: SM,
        adPreload: jM
      } = iM;
      const {
        kind: PM,
        code: QM,
        site: zM,
        fatal: LM,
        details: mM
      } = MM;
      if (!LM)
        if (null === OM || (0, nM.c)(OM.errorKind) || Pr.has(OM.dedupe)) {
          if (ar >= jr) return;
          ar++
        } else Pr.add(OM.dedupe);
      const HM = {
        ...mM,
        kind: PM,
        code: QM,
        site: zM,
        fatal: String(LM),
        backend: SM
      };
      jM && (HM.adPreload = "true"), null !== OM && (HM.errorKind = OM.errorKind, HM.fingerprint = OM.fingerprint), rM instanceof Error && "string" === typeof rM.stack && (HM.causeStack = rM.stack.slice(0, 2e3)), (0, aM.CJ)(Rr(MM, rM), HM)
    }
    let zr = nr;

    function Lr(MM) {
      const rM = zr;
      return zr = MM, rM
    }
    let mr = () => {};

    function Hr(MM) {
      const rM = mr;
      return mr = MM, rM
    }
    let hr = "unpicked",
      Jr = !1;

    function dr(MM) {
      hr = MM
    }

    function yr(MM) {
      Jr = MM
    }
    const lr = {
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
      Er = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      Ur = new Set(["unstreamedLoad"]),
      Gr = new Set(["linkCensus", "linksReadAfterView"]);
    let Cr = !1;
    const er = 20,
      br = new Map;
    let wr = 0,
      tr = 0;
    const gr = new Set,
      ur = new Set;

    function Rr(MM, rM) {
      const iM = Object.assign(new Error(`${MM.code}: ${MM.message}`), {
        name: "WasmClientCrash",
        cause: null !== rM && void 0 !== rM ? rM : void 0
      });
      return rM instanceof Error && rM.stack && (iM.stack = rM.stack), iM
    }

    function pr(MM) {
      var rM, OM;
      const {
        kind: SM,
        code: jM,
        site: aM,
        fatal: PM,
        message: nM,
        error: QM
      } = MM, zM = !1 !== MM.toTransport && !Ur.has(SM), LM = !PM && zM && !Gr.has(SM), mM = {
        kind: SM,
        code: jM,
        site: aM,
        fatal: PM,
        message: nM,
        details: null !== (rM = MM.details) && void 0 !== rM ? rM : {}
      }, HM = `${jM}@${aM}${void 0===MM.instance?"":`#${MM.instance}`}${PM?"!":""}`, hM = (null !== (OM = br.get(HM)) && void 0 !== OM ? OM : 0) + 1;
      if (br.set(HM, hM), void 0 !== MM.countAs && 1 === hM && sr(MM.countAs), hM > 1 ? 0 === (hM & hM - 1) && kr((() => {
          console.warn(`${YM} ${jM} at ${aM} reported ${hM} times`)
        })) : LM && wr >= er ? kr((() => {
          console.warn(`${YM} ${SM} ${jM} at ${aM}: ${nM} (not sent: the session's ${er} went)`, mM.details, null !== QM && void 0 !== QM ? QM : "")
        })) : (LM && wr++, function(MM, rM, OM, SM) {
          var jM, aM;
          const {
            kind: PM,
            code: nM,
            site: QM,
            fatal: zM,
            message: LM,
            details: mM
          } = MM;
          kr((() => {
            (zM ? console.error : console.warn)(`${YM} ${PM} ${nM} at ${QM}: ${LM}`, mM, null !== rM && void 0 !== rM ? rM : "")
          }));
          const HM = Er[PM],
            hM = null !== (jM = null !== (aM = lr[PM]) && void 0 !== aM ? aM : HM) && void 0 !== jM ? jM : null;
          SM || null === hM || Wr((async () => {
            const {
              reportCappedWasmFailure: rM,
              reportUncappedWasmFailure: OM,
              reportWasmFailure: SM
            } = await iM.e(218).then((() => iM(34877))), jM = Gr.has(PM) ? OM : void 0 === HM ? SM : rM, aM = function(MM) {
              let {
                kind: rM,
                site: iM,
                fatal: OM,
                details: SM
              } = MM;
              if ("crash" !== rM) return;
              return {
                ...SM,
                site: iM,
                fatal: String(OM)
              }
            }(MM);
            void 0 === aM ? jM(hM, LM, nM) : jM(hM, LM, nM, aM)
          }));
          OM && kr((() => {
            zr(MM, rM)
          }))
        }(mM, QM, zM, void 0 !== MM.countAs)), PM) {
        var JM;
        const rM = null !== (JM = MM.screen) && void 0 !== JM ? JM : {
          text: (0, sM.f)(mM, !0),
          reload: !0
        };
        kr((() => {
          mr(rM)
        }))
      }
      return mM
    }

    function Wr(MM) {
      Zr("counts", (async () => {
        const {
          peekVisitSessionId: rM
        } = await Promise.resolve().then((() => iM(673)));
        null !== rM() && (await MM(), Cr = !0)
      }))
    }

    function sr(MM) {
      gr.has(MM.errorKind) || (gr.add(MM.errorKind), Wr((async () => {
        const {
          reportClientError: rM
        } = await Promise.resolve().then((() => iM(3258)));
        rM(MM.errorKind, MM.error, MM.code, !0, void 0, MM.fields)
      })))
    }

    function Dr(MM, rM) {
      Zr("render_lost", (async () => {
        const [{
          reportClientError: OM
        }, {
          CAPPED_COUNTS_VISIT_CAP: SM
        }] = await Promise.all([Promise.resolve().then((() => iM(3258))), iM.e(218).then((() => iM(34877)))]);
        OM("render_lost", rM, MM, !0, SM)
      }))
    }

    function kr(MM) {
      try {
        MM()
      } catch (rM) {
        try {
          console.warn(`${YM} could not send a report`, rM)
        } catch {}
      }
    }

    function Zr(MM, rM) {
      try {
        const iM = rM().catch((rM => {
          console.warn(`${YM} could not send the report to ${MM}`, rM)
        })).finally((() => {
          ur.delete(iM)
        }));
        ur.add(iM)
      } catch (iM) {
        console.warn(`${YM} could not send the report to ${MM}`, iM)
      }
    }
    async function or(MM) {
      let rM;
      (0, zM.j)();
      const iM = new Promise((iM => {
        rM = setTimeout(iM, MM)
      }));
      await Promise.race([fr(), iM]), clearTimeout(rM)
    }
    async function fr() {
      if (await Promise.allSettled([...ur]), Cr) try {
        const {
          flushClientAnalyticsEvents: MM
        } = await Promise.resolve().then((() => iM(1568)));
        await MM()
      } catch (MM) {
        console.warn(`${YM} could not send the counts`, MM)
      }
    }
    async function Yr() {
      for (; ur.size > 0;) await Promise.allSettled([...ur])
    }

    function Nr() {
      br.clear(), wr = 0, Cr = !1, ar = 0, Pr.clear(), tr = 0, gr.clear(), (0, mM.v)()
    }

    function Ar(MM) {
      const rM = "object" === typeof MM && null !== MM ? MM.type : MM;
      return "string" !== typeof rM ? "sky not named" : `sky ${JSON.stringify(Array.from(rM).slice(0,Sr).join(""))}`
    }

    function xr(MM, rM, iM, OM) {
      tr += rM;
      for (const {
          code: PM,
          detail: nM
        }
        of MM) {
        var SM, jM, aM;
        const MM = (0, LM.Yd)(PM),
          rM = (0, mM.e)(PM, nM),
          QM = null === OM || void 0 === OM ? void 0 : OM(PM, nM),
          zM = void 0 !== (null === rM || void 0 === rM ? void 0 : rM.gpuDetails),
          hM = zM ? null === (SM = (0, lM.y)()) || void 0 === SM ? void 0 : SM.renderer : void 0,
          JM = zM ? ` ${(0,mM.q)()}` : "",
          dM = Array.from([hM && `gpu ${(0,HM.b)(hM)}`, QM].filter(Boolean).join("; ")).slice(0, Or).join(""),
          yM = `core error ${MM}${null!==(jM=null===rM||void 0===rM?void 0:rM.words)&&void 0!==jM?jM:""}${JM}${dM?`: ${dM}`:""}`,
          EM = {
            errorCode: String(PM),
            detail: String(nM),
            droppedBefore: String(tr),
            wasmBuild: iM.wasm,
            clientVersion: iM.client,
            ...null === rM || void 0 === rM ? void 0 : rM.gpuDetails,
            ...Fr(PM, nM)
          };
        null !== rM && (0, mM.u)(rM) ? kr((() => {
          console.warn(`${YM} coreError CORE-${MM}: ${yM} (not sent: the session's render warnings of its kind went)`, EM)
        })) : vr(PM) ? kr((() => {
          console.warn(`${YM} coreError CORE-${MM}: ${yM} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, EM)
        })) : pr({
          kind: Xr(PM, nM),
          code: `CORE-${MM}`,
          site: NM,
          fatal: !1,
          message: yM,
          details: EM,
          instance: null !== (aM = null === rM || void 0 === rM ? void 0 : rM.instance) && void 0 !== aM ? aM : Br(PM, nM)
        })
      }
    }

    function vr(MM) {
      if (MM !== LM.H.AudioUnknownSound && MM !== LM.H.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: rM,
        lobbyName: iM
      } = (0, jM.e)();
      return null !== rM && (!!(0, OM.m)(rM) || MM === LM.H.AudioUnknownSound && (0, SM.f)(rM, iM))
    }

    function Fr(MM, rM) {
      if (MM !== LM.H.RenderDeviceLost) return;
      const iM = rM >>> LM.P.LINKS_IN_FLIGHT_SHIFT & LM.P.LINKS_IN_FLIGHT_MAX,
        OM = rM >>> LM.P.OLDEST_LINK_SHIFT & LM.P.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(iM),
        oldestLinkMs: String(OM * LM.P.OLDEST_LINK_UNIT_MS)
      }
    }

    function Br(MM, rM) {
      return MM === LM.H.RenderDeviceLost && 0 !== (rM & LM.P.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function Xr(MM, rM) {
      return MM === LM.H.JobsHeapGaveUp ? "meshHeap" : (0, mM.m)(MM, rM) ? "linksReadAfterView" : (0, mM.i)(MM, rM) ? "linkCensus" : "coreError"
    }

    function Ir(MM) {
      return (0, kM.k)(MM instanceof ZM.e ? MM.trap : MM, gM.I, gM.ab)
    }
    const Kr = "declined=js";

    function qr(MM) {
      return MM ? {
        labels: [Kr],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function Tr(MM, rM, iM) {
      return cr(MM, rM, iM, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Vr(MM, rM, iM) {
      return cr(MM, rM, iM, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function cr(MM, rM, iM, OM, SM) {
      let {
        memoryDetails: jM = {},
        declined: aM = !1
      } = OM;
      const {
        code: PM,
        details: nM,
        message: QM
      } = (0, CM.O)(MM, rM), zM = [];
      Object.assign(nM, (0, oM.f)(MM.error)), null !== iM && (nM.trapKind = iM.kind, null !== iM.panic && (nM.panic = (0, kM.i)(iM.panic)), iM.refusedBytes > 0 && (nM.refusedAllocation = String(iM.refusedBytes)), zM.push((0, kM.o)(iM.kind, iM.refusedBytes)));
      const LM = qr(aM);
      return pr({
        kind: "crash",
        code: PM,
        site: MM.site,
        fatal: SM,
        message: [...zM, ...LM.labels, QM].join("; "),
        details: {
          ...nM,
          ...LM.details,
          ...jM
        },
        error: MM.error
      })
    }

    function Mi(MM, rM, iM) {
      return pr({
        kind: "unsupported",
        code: rM,
        site: AM,
        fatal: !0,
        message: iM,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: MM,
          status: rM
        },
        screen: {
          text: (0, sM.p)(MM),
          reload: "download" === MM
        }
      })
    }
    const ri = {
      unsupported: "unsupported_js_fallback",
      blockedAfterLoss: "blocked_after_loss",
      noContext: "no_context_js_fallback"
    };

    function ii(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return pr({
        kind: "unsupportedFallback",
        code: ri[rM],
        site: AM,
        fatal: !1,
        message: iM,
        details: {
          ...OM,
          cause: MM,
          status: "unsupported",
          decline: rM,
          fallback: "js"
        }
      })
    }

    function Oi(MM, rM, iM) {
      return pr({
        kind: "recovered",
        code: "reprobed" === MM ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: AM,
        fatal: !1,
        message: iM,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: rM,
          step: MM
        }
      })
    }

    function Si(MM) {
      return pr({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: ir,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: MM.join(",")
        }
      })
    }
    const ji = "reload=wasm";

    function ai(MM, rM, iM, OM) {
      const SM = qr("declined" === OM),
        jM = "wasmReload" === OM ? [ji] : SM.labels;
      return pr({
        kind: "unsupported",
        code: rM,
        site: AM,
        fatal: !1,
        message: [...jM, iM].join("; "),
        details: {
          cause: MM,
          status: rM,
          fallback: "wasmReload" === OM ? "wasmReload" : "js",
          ...SM.details
        }
      })
    }

    function Pi() {
      const {
        code: MM,
        message: rM
      } = DM.d;
      return pr({
        kind: "unstreamedLoad",
        code: MM,
        site: AM,
        fatal: !1,
        message: rM
      })
    }
    class ni extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Qi(MM) {
      return MM instanceof bM.n ? 0 === MM.code ? "JOIN-matchmake" : `JOIN-${MM.code}` : MM instanceof bM.d ? 0 === MM.code ? `JOIN-${MM.stage}` : `JOIN-${MM.stage}-${MM.code}` : MM instanceof eM.b ? "JOIN-gameCode" : MM instanceof ni ? "JOIN-turnstilePage" : MM instanceof bM.w ? "JOIN-trafficCheck" : MM instanceof UM.i ? "JOIN-timeout" : "JOIN-network"
    }

    function zi(MM, rM) {
      const iM = (0, oM.k)(MM),
        OM = {
          wasmBuild: rM.wasm,
          clientVersion: rM.client
        },
        SM = MM instanceof ni ? {
          text: (0, sM.j)(),
          reload: !1
        } : void 0,
        jM = (0, wM.e)(MM),
        aM = "expected" !== jM;
      return pr({
        kind: "join",
        code: Qi(MM),
        site: xM,
        fatal: !0,
        message: iM,
        details: OM,
        error: MM,
        screen: SM,
        toTransport: aM,
        instance: jM
      })
    }

    function Li(MM, rM, iM) {
      var OM;
      const SM = (0, wM.e)(MM),
        jM = {
          cause: (MM instanceof bM.d || MM instanceof bM.n) && null !== (OM = MM.serverText) && void 0 !== OM ? OM : "",
          sinceJoinStart: (0, EM.c)(iM.sinceJoinStartMs),
          game: iM.game,
          ...(0, EM.h)(),
          wasmBuild: rM.wasm,
          clientVersion: rM.client
        };
      return pr({
        kind: "pageJoin",
        code: Qi(MM),
        site: xM,
        fatal: !1,
        message: (0, oM.k)(MM),
        details: jM,
        error: MM,
        toTransport: "unrecognised" === SM,
        instance: SM
      })
    }
    const mi = {
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

    function Hi(MM, rM) {
      let {
        unused: iM,
        answered: OM,
        heldMs: SM
      } = MM;
      const {
        code: jM,
        message: aM
      } = mi[iM], PM = {
        unused: iM,
        answered: String(OM),
        heldMs: String(SM),
        wasmBuild: rM.wasm,
        clientVersion: rM.client
      };
      return pr({
        kind: "seat",
        code: jM,
        site: xM,
        fatal: !1,
        message: aM,
        details: PM
      })
    }

    function Ji(MM, rM, iM) {
      var OM;
      let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (OM = MM.name) && void 0 !== OM ? OM : String(MM.code);
      const jM = {
          closeCode: String(MM.code),
          recognised: String(null !== MM.name),
          closeReason: iM.closeReason,
          sinceJoined: (0, EM.c)(iM.sinceJoinedMs),
          game: iM.game,
          ...(0, EM.h)(),
          wasmBuild: rM.wasm,
          clientVersion: rM.client
        },
        aM = null === MM.name && !(0, EM.d)(MM.code);
      return pr({
        kind: "disconnect",
        code: SM,
        site: vM,
        fatal: !1,
        message: "Left room",
        details: jM,
        toTransport: aM
      })
    }

    function di(MM, rM) {
      const iM = {
        ...(0, hM.i)(MM),
        wasmBuild: rM.wasm,
        clientVersion: rM.client
      };
      return pr({
        kind: "disconnect",
        code: `reconnect-${MM.reason}`,
        site: xM,
        fatal: !1,
        message: "Reconnect failed",
        details: iM
      })
    }

    function yi(MM) {
      return MM.error instanceof uM.e ? `MODEL-${MM.error.status}` : MM.error instanceof RM.h ? "MODEL-ring" : "MODEL-network"
    }

    function li(MM, rM) {
      const iM = yi(MM),
        OM = `model file ${MM.file} ${MM.startup?"(startup) ":""}could not load`,
        SM = {
          file: String(MM.file),
          url: MM.url,
          wasmBuild: rM.wasm,
          clientVersion: rM.client
        };
      return pr({
        kind: MM.startup ? "model" : "modelLate",
        code: iM,
        site: FM,
        fatal: MM.startup,
        message: OM,
        details: SM,
        error: MM.error
      })
    }

    function Ei(MM, rM) {
      const iM = {
        wasmBuild: rM.wasm,
        clientVersion: rM.client
      };
      return pr({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: BM,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: iM,
        error: MM
      })
    }

    function Ui(MM, rM, iM) {
      const OM = {
        delayMs: String(rM),
        wasmBuild: iM.wasm,
        clientVersion: iM.client
      };
      MM instanceof uM.e && (OM.status = String(MM.status));
      return pr({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: BM,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: OM,
        error: MM
      })
    }

    function Gi(MM, rM) {
      const iM = {
        wasmBuild: rM.wasm,
        clientVersion: rM.client
      };
      return pr({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: BM,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: iM,
        error: MM
      })
    }

    function Ci(MM, rM) {
      const iM = {
        wasmBuild: rM.wasm,
        clientVersion: rM.client
      };
      return pr({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: CM.I,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: iM,
        error: MM
      })
    }

    function ei(MM, rM) {
      const iM = {
        wasmBuild: rM.wasm,
        clientVersion: rM.client
      };
      return pr({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: VM,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: iM,
        error: MM
      })
    }

    function bi(MM, rM, iM, OM) {
      const SM = {
        wasmBuild: OM.wasm,
        clientVersion: OM.client
      };
      return pr({
        kind: "texturePackKeptOut",
        code: (0, QM.e)("wasm", MM, rM),
        site: cM,
        fatal: !1,
        message: rM.detail,
        details: SM,
        error: iM
      })
    }

    function wi(MM, rM) {
      const {
        frames: iM,
        acks: OM,
        mask: SM,
        outcome: jM
      } = MM, aM = {
        frames: String(iM),
        acks: String(OM),
        mask: String(SM),
        outcome: null !== jM && void 0 !== jM ? jM : "resynced",
        wasmBuild: rM.wasm,
        clientVersion: rM.client
      };
      return pr({
        kind: "recovered",
        code: "rejoined" === jM ? "CORE-eventOverflowRejoin" : "failed" === jM ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: qM,
        fatal: !1,
        message: `the event buffer refused records in ${iM} frames`,
        details: aM
      })
    }

    function ti(MM, rM, iM) {
      return pr({
        kind: "recovered",
        code: "CORE-workerLost",
        site: MM,
        fatal: !1,
        message: `a ${MM} worker was lost`,
        details: {
          reason: rM,
          wasmBuild: iM.wasm,
          clientVersion: iM.client
        }
      })
    }

    function gi(MM, rM, iM, OM) {
      const SM = {
          reason: MM,
          pageBuild: OM.build,
          pageAgeMin: String(Math.floor(OM.ageMs / 6e4)),
          wasmBuild: iM.wasm,
          clientVersion: iM.client
        },
        jM = rM ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return pr({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: CM.I,
        fatal: !1,
        message: jM,
        details: SM
      })
    }

    function ui(MM, rM, iM) {
      const OM = {
        wasmBuild: iM.wasm,
        clientVersion: iM.client
      };
      return pr({
        kind: "recovered",
        code: MM,
        site: CM.t,
        fatal: !1,
        message: rM,
        details: OM
      })
    }

    function Ri(MM, rM) {
      const iM = {
        lastReason: MM,
        wasmBuild: rM.wasm,
        clientVersion: rM.client
      };
      return pr({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: CM.I,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: iM
      })
    }

    function Wi(MM, rM, iM) {
      return pr({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: CM.p,
        fatal: !1,
        message: `${(0,tM.E)(MM)}: the session shed load`,
        details: {
          cause: MM,
          ...rM,
          wasmBuild: iM.wasm,
          clientVersion: iM.client
        }
      })
    }

    function si(MM, rM, iM, OM) {
      var SM, jM;
      const aM = (0, mM.r)(),
        PM = {
          game: MM,
          cause: rM,
          census: null === iM ? "none" : JSON.stringify(iM),
          gpu: null !== (SM = null === (jM = (0, lM.y)()) || void 0 === jM ? void 0 : jM.renderer) && void 0 !== SM ? SM : "",
          renderWarned: String(aM),
          browser: (0, mM.q)(),
          wasmBuild: OM.wasm,
          clientVersion: OM.client
        },
        nM = `first view drew no whole terrain in ${pM.c/1e3} s, ${rM}${aM?", render warned":""}`;
      return pr({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: Mr,
        fatal: !1,
        message: nM,
        details: PM
      })
    }

    function Di(MM, rM, iM, OM, SM) {
      const jM = (0, JM.e)(),
        aM = (0, JM.d)(MM, rM, iM, OM, jM),
        PM = {
          gpuModel: jM,
          wasmBuild: SM.wasm,
          clientVersion: SM.client
        };
      return pr({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: rr,
        fatal: !1,
        message: aM,
        details: PM
      })
    }

    function ki(MM, rM, iM) {
      return pr({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: MM,
        fatal: !1,
        message: `a ${MM} worker did not start`,
        details: {
          waitedMs: String(Math.round(rM)),
          wasmBuild: iM.wasm,
          clientVersion: iM.client
        }
      })
    }

    function Zi(MM, rM, iM) {
      return pr({
        kind: "recovered",
        code: "CORE-replayFault",
        site: MM,
        fatal: !1,
        message: `the replay's ${MM} failed`,
        details: {
          wasmBuild: iM.wasm,
          clientVersion: iM.client
        },
        error: rM
      })
    }
    const oi = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function fi(MM) {
      if (0 === MM) return "none";
      const rM = [60, 600, 3600].find((rM => MM < rM));
      return void 0 === rM ? "ge3600" : `lt${rM}`
    }

    function Yi(MM, rM) {
      return null === MM ? "unbound" : (0, dM.i)(rM - MM)
    }

    function Ni(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (MM & LM.P.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (MM & LM.P.LINKS_RUNNING) ? "links running" : "", `frames ${(0,HM.b)(fi(MM&LM.P.FRAMES))}`, `up ${(0,HM.b)(Yi(rM,iM))}`].filter(Boolean).join(", ")
    }

    function Ai(MM, rM, iM) {
      const OM = "lost" === rM && void 0 !== iM ? ` (${iM})` : "";
      return `the ${MM} ${oi[rM]}${OM}`
    }
    const xi = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function vi(MM, rM, iM, OM) {
      var SM;
      let {
        restoreLost: jM = !1,
        adapterRemembered: aM = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, PM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const nM = null === iM || void 0 === iM ? void 0 : iM.message,
        QM = "pipeline_failed" === rM ? rM : iM instanceof GM.h ? "timeout" : (0, dM.s)("frames_refused" === rM, "string" === typeof nM ? nM : ""),
        zM = null === OM.boundAtMs ? "unbound" : `up${(0,dM.e)(PM-OM.boundAtMs)}`,
        LM = null === OM.adapter ? "no adapter" : (0, dM.o)(OM.adapter),
        mM = `${!0===OM.indirectHangs?" ih":""}${!0===OM.restoresSkipped?" nr":""}${jM?" rl":""}${aM?" ar":""}`,
        HM = `${QM} ${(0,GM.k)()?"hidden":"visible"} ${zM}${mM} ${LM}`;
      if ("webgpu" !== MM || "lost" !== rM && "frames_refused" !== rM) return {
        detail: HM,
        count: void 0
      };
      return {
        detail: HM,
        count: {
          errorKind: "render_lost",
          error: new Error(HM),
          code: (0, dM.w)(QM, null !== (SM = OM.boundAtMs) && void 0 !== SM ? SM : PM, PM).code,
          fields: {
            renderBackend: fM.b.webgpu
          }
        }
      }
    }

    function Fi(MM, rM, iM) {
      const {
        count: OM
      } = vi("webgpu", MM, rM, iM);
      void 0 !== OM && sr(OM)
    }
    const Bi = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function Xi(MM) {
      var rM;
      return null !== (rM = MM instanceof Error ? MM.reason : void 0) && void 0 !== rM ? rM : ""
    }

    function Ii(MM, rM, OM) {
      var SM, jM, aM, nM, QM;
      let {
        from: zM,
        cause: LM = "lost",
        restoreLost: hM = !1,
        adapterRemembered: JM = !1,
        error: lM,
        context: EM = xi,
        session: UM = Bi
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, GM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: CM,
        count: eM
      } = vi(MM, LM, lM, EM, {
        restoreLost: hM,
        adapterRemembered: JM
      }, GM), bM = {
        reloadFrom: null !== zM && void 0 !== zM ? zM : "",
        losses: String(rM),
        cause: LM,
        detail: CM,
        vendor: null !== (SM = null === (jM = EM.adapter) || void 0 === jM ? void 0 : jM.vendor) && void 0 !== SM ? SM : "",
        architecture: null !== (aM = null === (nM = EM.adapter) || void 0 === nM ? void 0 : nM.architecture) && void 0 !== aM ? aM : "",
        indirectHangs: String(EM.indirectHangs),
        restoresSkipped: String(EM.restoresSkipped),
        restoreLost: String(hM),
        adapterRemembered: String(JM),
        lossReason: Xi(lM),
        samples: String(UM.samples),
        sunShadows: String(UM.sunShadows),
        renderDistance: String(UM.renderDistance),
        gpuFamily: null !== (QM = (0, PM.e)()) && void 0 !== QM ? QM : "",
        browser: (0, mM.q)(),
        siteUsed: yM.siteUsed,
        wasmBuild: OM.wasm,
        clientVersion: OM.client
      }, wM = "webgpu" !== MM && void 0 !== zM ? function(MM, rM, iM, OM) {
        return `: ${MM}, ${rM?"restore lost":"not restored"}, up ${(0,HM.b)(Yi(iM,OM))}`
      }(zM, hM, EM.boundAtMs, GM) : "", tM = `${Ai(MM,LM)}${wM}`, gM = pr({
        kind: "recovered",
        code: "CORE-renderLost",
        site: IM,
        fatal: !1,
        message: tM,
        details: bM,
        error: lM,
        countAs: eM
      });
      return Zr("ga", (async () => {
        const {
          logError: rM
        } = await Promise.resolve().then((() => iM(3241))), OM = `${dM.b["webgpu"===MM?"WebGPU":"WebGL2"]}\n Error: ${CM}`;
        rM("warning", OM), rM("error", OM)
      })), gM
    }

    function Ki(MM, rM) {
      var iM, OM;
      const SM = null === MM.name ? "TEXTURE-sources" : null === MM.url ? "TEXTURE-nourl" : MM.error instanceof WM.d ? `TEXTURE-${MM.error.status}` : "TEXTURE-network",
        jM = null === MM.name ? "terrain textures could not load" : `terrain texture ${MM.name} could not load`,
        aM = {
          texture: null !== (iM = MM.name) && void 0 !== iM ? iM : "",
          url: null !== (OM = MM.url) && void 0 !== OM ? OM : "",
          wasmBuild: rM.wasm,
          clientVersion: rM.client
        };
      return pr({
        kind: "terrainTexture",
        code: SM,
        site: CM.H,
        fatal: !1,
        message: jM,
        details: aM,
        error: MM.error
      })
    }
    const qi = {
      previewAnimations: {
        site: KM,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: TM,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Ti(MM, rM, iM, OM) {
      const {
        site: SM,
        prefix: jM,
        name: aM
      } = qi[MM], {
        stage: PM,
        error: nM
      } = iM;
      return pr({
        kind: MM,
        code: "decode" === PM ? null === nM ? `${jM}-decode` : `${jM}-trap` : nM instanceof uM.e ? `${jM}-${nM.status}` : `${jM}-network`,
        site: SM,
        fatal: !1,
        message: "decode" === PM ? `${aM} did not decode` : `${aM} could not load`,
        details: {
          url: rM,
          wasmBuild: OM.wasm,
          clientVersion: OM.client
        },
        error: nM
      })
    }
    const Vi = "staleBuild";

    function ci(MM, rM, iM) {
      const OM = {
          failedSite: MM.site,
          url: MM.url,
          from: MM.from,
          sameBuild: String(MM.from === rM),
          reloadMs: String(Math.max(0, Date.now() - MM.at)),
          wasmBuild: iM.wasm,
          clientVersion: iM.client
        },
        SM = `reloaded into a newer build after ${MM.site} failed to load: ${MM.error}`;
      return pr({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: Vi,
        fatal: !1,
        message: SM,
        details: OM
      })
    }
  },
  41895: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      c: () => SM,
      g: () => aM
    });
    var OM = iM(5200);
    const SM = 3e4;
    class jM {
      constructor(MM) {
        this.aL = MM, this.waitedMs = 0, this.lastMs = null
      }
      frame(MM, rM) {
        if (rM) return !0;
        const iM = null === this.lastMs ? 0 : MM - this.lastMs;
        return this.lastMs = MM, iM <= 900 && (this.waitedMs += iM), !(this.waitedMs < SM) && (this.aL(), !0)
      }
    }

    function aM(MM, rM) {
      return 0 === (MM & OM.T.ChunkRequested) ? "no_chunk_request" : 0 === (MM & OM.T.ChunkStored) ? "chunk_not_stored" : 0 === (MM & OM.T.MeshLanded) ? "not_meshed" : null === rM ? "no_frame_drawn" : 0 === rM.terrainParts ? "no_terrain_parts" : rM.terrainCompiling > 0 ? "terrain_compiling" : rM.terrainOpaque + rM.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  41677: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      c: () => yM,
      e: () => JM,
      h: () => dM,
      i: () => mM,
      m: () => HM,
      p: () => zM,
      r: () => LM,
      t: () => hM
    });
    class OM extends Error {
      constructor(MM) {
        super(`the join's code did not load: ${MM instanceof Error?MM.message:String(MM)}`, {
          cause: MM
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === MM || void 0 === MM ? void 0 : MM.request
      }
    }
    let SM = null,
      jM = null,
      aM = null;
    const PM = [];
    let nM = null;

    function QM(MM, rM) {
      try {
        MM(rM)
      } catch (iM) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", iM)
      }
    }

    function zM() {
      return nM
    }

    function LM(MM) {
      PM.push(MM), null !== nM && QM(MM, nM)
    }

    function mM(MM) {
      return SM ??= Promise.all([iM.e(84), iM.e(111), iM.e(86), iM.e(244), iM.e(89), iM.e(245), iM.e(224), iM.e(109), iM.e(264), iM.e(296), iM.e(48), iM.e(213), iM.e(232), iM.e(222), iM.e(205), iM.e(206), iM.e(170), iM.e(101), iM.e(134), iM.e(272), iM.e(68)]).then((() => iM(45248))).then((rM => {
        rM.loadAudio(MM), nM = rM;
        for (const MM of PM) QM(MM, rM);
        return rM
      })).catch((MM => {
        throw SM = null, MM
      })), SM
    }
    async function HM(MM, rM) {
      try {
        const iM = await mM(MM);
        await iM.loadClientGame(rM)
      } catch (iM) {
        throw new OM(iM)
      }
    }

    function hM(MM, rM) {
      jM = {
        running: MM,
        shell: rM
      }
    }

    function JM() {
      return aM
    }
    async function dM(MM) {
      const rM = jM;
      if ((null === rM || void 0 === rM ? void 0 : rM.running) !== MM) throw new Error("the core's session has ended");
      const iM = await mM(rM.shell.audio).catch((MM => {
        throw new OM(MM)
      }));
      if (null !== aM) return aM;
      if (jM !== rM || MM.isStopped) throw new Error("the core stopped while the game code loaded");
      if (aM = iM.startGameHost(MM, rM.shell), null === aM) throw new Error("the core's shared tables didn't read, so the game can't start");
      return aM
    }

    function yM() {
      null !== aM && (null !== nM ? nM.endGameHost(aM) : aM.closeGame()), aM = null, jM = null
    }
  },
  41800: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    const OM = {
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
  41764: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => QM,
      h: () => jM,
      j: () => aM,
      k: () => SM,
      n: () => HM,
      p: () => zM,
      t: () => nM,
      v: () => mM,
      w: () => LM,
      z: () => PM
    });
    var OM = iM(1906);
    const SM = new Uint8Array([12]),
      jM = 2e3,
      aM = 257;

    function PM(MM) {
      const rM = new Uint8Array(4);
      return new DataView(rM.buffer).setUint32(0, MM, !0), rM
    }
    class nM extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class QM extends Error {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(MM), this.stage = rM, this.code = iM, this.serverText = OM, this.socketOpened = SM, this.name = "JoinError"
      }
    }
    class zM extends Error {
      constructor(MM) {
        super(MM), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class LM extends Error {
      constructor(MM) {
        super((0, OM.e)(MM), {
          cause: MM
        }), this.name = "TrafficCheckError"
      }
    }
    class mM extends Error {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(MM, {
          cause: iM
        }), this.networkLost = rM, this.httpStatus = OM, this.name = "SeatRequestError"
      }
    }
    class HM extends Error {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(MM), this.code = rM, this.serverText = iM, this.name = "MatchmakeError"
      }
    }
  },
  41767: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => HM,
      e: () => mM,
      h: () => hM
    });
    var OM = iM(2843),
      SM = iM(3333),
      jM = iM(40094),
      aM = iM(37437),
      PM = iM(40100),
      nM = iM(41764),
      QM = iM(41776);
    const zM = "seat reservation expired.",
      LM = "early_leave";

    function mM(MM) {
      if (MM instanceof aM.i) return "expected";
      if (MM instanceof nM.v) return MM.networkLost ? "expected" : "unrecognised";
      if (MM instanceof nM.d) {
        if ("closed" === MM.stage && (0 === MM.code || (0, SM.d)(MM.code))) return "expected";
        if ("roomError" === MM.stage && (MM.serverText === zM || MM.serverText === LM)) return "expected"
      }
      return MM instanceof nM.d || MM instanceof nM.n ? null === (0, PM.m)(MM.code).name ? "unrecognised" : "known" : (0, OM.i)(MM) ? "expected" : MM instanceof nM.w || MM instanceof QM.e ? "known" : "unrecognised"
    }

    function HM(MM) {
      return MM instanceof aM.i ? "timedOut" : "expected" !== mM(MM) || (0, OM.i)(MM) || MM instanceof nM.d && 1001 === MM.code ? void 0 : "failed"
    }

    function hM(MM) {
      return MM instanceof nM.d && "attach" !== MM.stage ? (0, jM.e)(MM, "closed" !== MM.stage || MM.socketOpened ? "socket" : "socket_unopened") : MM instanceof nM.v ? {
        at: "seat_lost",
        code: MM.httpStatus
      } : MM instanceof nM.n || MM instanceof aM.i ? (0, jM.e)(MM, MM instanceof aM.i ? MM.leg : "seat") : void 0
    }
  },
  41882: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM,
      e: () => QM,
      f: () => HM,
      h: () => LM
    });
    var OM = iM(3188),
      SM = iM(5198),
      jM = iM(41884),
      aM = iM(41888),
      PM = iM(37229);
    const nM = 395,
      QM = 2147483648,
      zM = new Uint8Array(0);
    class LM extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class mM extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class HM {
      constructor(MM, rM, iM) {
        var OM, SM, aM, PM;
        let nM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = MM, this.build = rM, this.onFailure = iM, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.ML = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (OM = nM.fetchFile) && void 0 !== OM ? OM : MM => (0, jM.j)(MM), this.onWritten = null !== (SM = nM.onWritten) && void 0 !== SM ? SM : null, this.onTaken = null !== (aM = nM.onTaken) && void 0 !== aM ? aM : null, this.onPackFileFailed = null !== (PM = nM.onPackFileFailed) && void 0 !== PM ? PM : null, this.startupLeft = new Set(MM.startup);
        for (const jM of MM.startup) this.request(jM)
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
      drawnUrl(MM) {
        return this.drawn.get(MM)
      }
      request(MM) {
        const rM = this.pending.get(MM);
        if (!0 === (null === rM || void 0 === rM ? void 0 : rM.ask)) return;
        const iM = this.JL(MM, !0);
        iM.recheck = void 0 !== rM;
        const OM = this.drawn.get(MM);
        if (void 0 !== OM) return iM.sQ = !0, iM.recheck = !0, void this.fetch(MM, iM, OM);
        this.fetchWanted(MM, iM)
      }
      async refresh() {
        const MM = ++this.refreshes,
          rM = new Set;
        for (const aM of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const MM of aM) 0 === (MM & jM.f) && rM.add(MM);
        const iM = [...rM];
        let OM;
        try {
          OM = await Promise.all(iM.map((MM => this.wanted(MM))))
        } catch {
          return null
        }
        if (MM !== this.refreshes) return null;
        const SM = {
          resent: 0,
          refetched: 0,
          delivered: iM.filter((MM => this.drawn.has(MM))).length
        };
        return iM.forEach(((MM, rM) => {
          const {
            url: iM,
            inPlaceOf: jM
          } = OM[rM], aM = this.pending.get(MM);
          if (void 0 !== aM) {
            if (aM.sQ || void 0 === aM.url) return void(aM.recheck = !0);
            if (aM.url === iM) return;
            SM.refetched++;
            const rM = this.JL(MM, aM.ask);
            return rM.recheck = aM.recheck, void this.fetch(MM, rM, iM, jM)
          }
          const PM = this.written.get(MM);
          void 0 === PM ? this.drawn.get(MM) !== (null !== iM && void 0 !== iM ? iM : void 0) && (SM.resent++, this.fetch(MM, this.JL(MM, !1), iM, jM)) : PM.url !== (null !== iM && void 0 !== iM ? iM : "") && (PM.attempt.recheck = !0)
        })), SM
      }
      taken(MM, rM) {
        const iM = new Set,
          OM = new Set;
        for (const SM of Array.from(rM)) 0 === (SM & QM) ? iM.add(SM) : OM.add((SM & ~QM) >>> 0);
        for (const [SM, jM] of this.written) jM.seq > MM || (this.written.delete(SM), iM.has(jM.seq) ? this.refusedFile(SM, jM) : this.takenFile(SM, jM, !jM.empty && !OM.has(jM.seq)))
      }
      takenFile(MM, rM, iM) {
        const {
          attempt: OM
        } = rM;
        if (iM) {
          var SM;
          this.drawn.set(MM, rM.url), this.undrawn.delete(MM), void 0 !== OM.inPlaceOf ? this.refusedPack.set(MM, OM.inPlaceOf) : OM.sQ || this.refusedPack.delete(MM), null === (SM = this.onTaken) || void 0 === SM || SM.call(this, MM, !0);
          const iM = this.pending.get(MM);
          if (!0 === (null === iM || void 0 === iM ? void 0 : iM.sQ) && iM.url !== rM.url) {
            const iM = this.JL(MM, !0);
            iM.sQ = !0, iM.recheck = !0, this.fetch(MM, iM, rM.url)
          }
        } else {
          var jM;
          this.drawn.has(MM) || this.undrawn.add(MM), null === (jM = this.onTaken) || void 0 === jM || jM.call(this, MM, !1)
        }
        OM.recheck && this.resendIfChanged(MM)
      }
      refusedFile(MM, rM) {
        var iM, OM;
        if (null === (iM = this.onTaken) || void 0 === iM || iM.call(this, MM, !1), this.refusedPack.set(MM, rM.url), this.pending.has(MM)) return void(null === (OM = this.onPackFileFailed) || void 0 === OM || OM.call(this, MM, hM(rM.url)));
        const SM = this.JL(MM, rM.attempt.ask);
        SM.recheck = rM.attempt.recheck, this.afterRefusal(MM, SM, rM.url)
      }
      async afterRefusal(MM, rM, iM) {
        var OM;
        let SM;
        try {
          SM = await this.wanted(MM)
        } catch (jM) {
          return void(this.pending.get(MM) === rM && this.giveUp(MM, rM, iM, jM))
        }
        this.pending.get(MM) === rM && (SM.inPlaceOf !== iM ? rM.ask || (null !== (OM = SM.url) && void 0 !== OM ? OM : void 0) !== this.drawn.get(MM) ? this.fetch(MM, rM, SM.url, SM.inPlaceOf) : this.pending.delete(MM) : this.fallBack(MM, rM, iM, hM(iM)))
      }
      JL(MM, rM) {
        const iM = {
          url: void 0,
          ask: rM,
          sQ: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(MM, iM);
        for (let OM = this.ready.length - 1; OM >= 0; OM--) this.ready[OM].file === MM && this.ready.splice(OM, 1);
        return iM
      }
      async wanted(MM) {
        const rM = await this.files.url(MM);
        return null !== rM && this.refusedPack.get(MM) === rM ? {
          url: await this.files.shippedUrl(MM),
          inPlaceOf: rM
        } : {
          url: rM,
          inPlaceOf: void 0
        }
      }
      fetchWanted(MM, rM) {
        const iM = this.files.url(MM);
        iM instanceof Promise ? iM.then((iM => {
          this.fetchFound(MM, rM, iM)
        }), (iM => {
          this.pending.get(MM) === rM && this.giveUp(MM, rM, "", iM)
        })) : this.fetchFound(MM, rM, iM)
      }
      fetchFound(MM, rM, iM) {
        null !== iM && this.refusedPack.get(MM) === iM ? Promise.resolve(this.files.shippedUrl(MM)).then((OM => {
          this.fetch(MM, rM, OM, iM)
        }), (OM => {
          this.pending.get(MM) === rM && this.giveUp(MM, rM, iM, OM)
        })) : this.fetch(MM, rM, iM)
      }
      fetch(MM, rM, iM, OM) {
        this.pending.get(MM) === rM && (rM.url = iM, rM.inPlaceOf = OM, null !== iM ? this.load(MM, rM, iM) : this.buildFile(MM, rM, "", zM))
      }
      load(MM, rM, iM) {
        const OM = this.ML.get(MM);
        (null === OM || void 0 === OM ? void 0 : OM.url) !== iM ? this.fetchFile(iM).then((OM => {
          var SM, jM;
          this.pending.get(MM) === rM && (this.keptTotal += OM.byteLength - (null !== (SM = null === (jM = this.ML.get(MM)) || void 0 === jM ? void 0 : jM.glb.byteLength) && void 0 !== SM ? SM : 0), this.ML.set(MM, {
            url: iM,
            glb: OM
          }), this.buildFile(MM, rM, iM, OM))
        }), (OM => {
          this.pending.get(MM) === rM && this.fallBack(MM, rM, iM, OM)
        })) : this.buildFile(MM, rM, iM, OM.glb)
      }
      buildFile(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const aM = OM.byteLength > 0 && (0, jM.l)(iM) ? (MM | jM.e) >>> 0 : MM;
        this.queueRecord(MM, rM, iM, OM, this.build(aM, OM), SM)
      }
      queueRecord(MM, rM, iM, OM, jM, PM) {
        jM.then((jM => {
          if (this.pending.get(MM) !== rM) return;
          if (SM.s + (0, SM.oe)(jM.byteLength) > SM.Gc) return void this.ringRefused(MM, rM, iM, new LM(`${JM(iM)}'s record is ${jM.byteLength-aM.b} bytes, past the cmd ring's ${SM.Gc}`), PM);
          const nM = {
            file: MM,
            url: iM,
            payload: jM,
            glb: OM,
            attempt: rM
          };
          PM ? this.ready.unshift(nM) : this.ready.push(nM)
        }))
      }
      async fallBack(MM, rM, iM, OM) {
        var SM;
        let jM = null,
          aM = OM;
        try {
          jM = await this.files.shippedUrl(MM)
        } catch (PM) {
          aM = PM
        }
        this.pending.get(MM) === rM && (null !== jM && jM !== iM ? (null === (SM = this.onPackFileFailed) || void 0 === SM || SM.call(this, MM, OM), rM.ask || this.drawn.get(MM) !== jM ? (rM.url = jM, rM.inPlaceOf = iM, this.load(MM, rM, jM)) : this.pending.delete(MM)) : this.giveUp(MM, rM, iM, aM))
      }
      ringRefused(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, jM.l)(iM) ? this.fallBack(MM, rM, iM, OM): this.giveUp(MM, rM, iM, OM, SM)
      }
      giveUp(MM, rM, iM, SM) {
        let jM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: MM,
          url: JM(iM),
          error: SM,
          startup: this.startupLeft.has(MM)
        }), rM.ask || !this.drawn.has(MM) ? (0, OM.R)(SM) ? this.queueRecord(MM, rM, iM, zM, Promise.resolve((0, aM.m)(MM, (0, PM.k)(SM))), jM) : this.buildFile(MM, rM, iM, zM, jM) : this.pending.delete(MM)
      }
      async resendIfChanged(MM) {
        var rM;
        if (0 !== (MM & jM.f)) return;
        let iM;
        try {
          iM = await this.wanted(MM)
        } catch {
          return
        }(null !== (rM = iM.url) && void 0 !== rM ? rM : void 0) === this.drawn.get(MM) || this.pending.has(MM) || this.written.has(MM) || this.fetch(MM, this.JL(MM, !1), iM.url, iM.inPlaceOf)
      }
      drain(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === MM) return;
        let iM = 0,
          OM = 0;
        for (; OM < this.ready.length && iM < 262144;) {
          const PM = this.ready[OM];
          if (this.written.has(PM.file)) {
            OM++;
            continue
          }
          const zM = this.nextSeq;
          new DataView(PM.payload.buffer, PM.payload.byteOffset, PM.payload.byteLength).setUint32(aM.d, zM, !0);
          const mM = PM.attempt.sQ && PM.glb.byteLength > 0 && this.drawn.get(PM.file) === PM.url;
          if (MM(nM, mM ? 1 : 0, PM.payload)) {
            if (this.nextSeq = zM >= QM - 1 ? 1 : zM + 1, this.ready.splice(OM, 1), iM += PM.payload.byteLength, this.pending.delete(PM.file), this.startupLeft.delete(PM.file), this.written.set(PM.file, {
                seq: zM,
                url: PM.url,
                empty: 0 === PM.glb.byteLength,
                attempt: PM.attempt
              }), PM.glb.byteLength > 0) try {
              var SM;
              null === (SM = this.onWritten) || void 0 === SM || SM.call(this, PM.file, PM.glb)
            } catch (jM) {
              console.warn("ModelFeed: reading the file's images failed", jM)
            }
          } else {
            if (null === rM || 0 === PM.glb.byteLength || rM(PM.payload.byteLength)) return;
            this.ready.splice(OM, 1);
            const MM = new LM(`${JM(PM.url)}'s record is ${PM.payload.byteLength-aM.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(PM.file, PM.attempt, PM.url, MM, !0)
          }
        }
      }
    }

    function hM(MM) {
      return new mM(`presentation refused ${JM(MM)}`)
    }

    function JM(MM) {
      return MM.startsWith("data:") ? `${MM.slice(0,Math.min(Math.max(MM.indexOf(","),5),64))},...` : MM
    }
  },
  41884: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM,
      f: () => jM,
      j: () => zM,
      l: () => PM,
      o: () => QM,
      r: () => nM
    });
    var OM = iM(3188),
      SM = iM(3614);
    const jM = 2147483648,
      aM = 1073741824;

    function PM(MM) {
      return MM.startsWith("data:")
    }

    function nM(MM) {
      let {
        onTableFailed: rM,
        packUrl: iM
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const OM = QM();
      OM.catch((MM => {
        null === rM || void 0 === rM || rM(MM)
      }));
      const SM = async rM => (await OM).fileUrl((rM & ~jM) >>> 0, MM);
      return {
        startup: [],
        url: async MM => {
          if (iM && 0 === (MM & jM)) {
            const rM = await OM,
              SM = rM.filePackName(MM),
              jM = null === SM || "lifeform" === rM.fileSource(MM) ? null : iM(SM);
            if (null !== jM) return jM
          }
          return SM(MM)
        },
        shippedUrl: SM
      }
    }

    function QM() {
      return iM.e(48).then((() => iM(45251)))
    }
    async function zM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return MM.startsWith("data:") ? (0, SM.e)(MM.slice(MM.indexOf(",") + 1), rM) : (0, OM.F)(MM, {
        spare: rM
      })
    }
  },
  41888: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      d: () => zM,
      f: () => HM,
      i: () => dM,
      m: () => hM,
      p: () => mM,
      q: () => JM
    });
    const OM = 826427981,
      SM = 1,
      jM = 2,
      aM = 44,
      PM = 46,
      nM = 58,
      QM = 8,
      zM = 4;

    function LM(MM, rM, iM) {
      const SM = (new TextEncoder).encode(iM),
        jM = QM + 4 * (rM.length + 2),
        aM = new Uint8Array(jM + (SM.byteLength + 3 & -4)),
        PM = new DataView(aM.buffer);
      return PM.setUint32(0, MM, !0), PM.setUint32(QM, OM, !0), rM.forEach(((MM, rM) => {
        PM.setUint32(QM + 4 * (rM + 1), MM, !0)
      })), PM.setUint32(jM - 4, SM.byteLength, !0), aM.set(SM, jM), aM
    }

    function mM(MM, rM) {
      return LM(MM, [jM], rM)
    }

    function HM(MM, rM) {
      return LM(MM, [SM, PM], rM)
    }

    function hM(MM, rM) {
      return LM(MM, [SM, nM], rM)
    }

    function JM(MM, rM) {
      return LM(MM, [SM, aM], rM)
    }

    function dM(MM) {
      const rM = QM;
      if (MM.byteLength < rM + 12) return !1;
      const iM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
      return iM.getUint32(rM, !0) === OM && iM.getUint32(rM + 4, !0) === SM && iM.getUint32(rM + 8, !0) === aM
    }
  },
  41809: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM,
      i: () => zM,
      m: () => aM,
      q: () => nM
    });
    var OM = iM(37229);
    class SM extends Error {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${MM}: the module trapped${iM?" in an earlier call":""}: ${String(rM)}`, {
          cause: rM
        }), this.site = MM, this.trap = rM, this.earlier = iM, this.name = "ModuleTrapError", rM instanceof Error && void 0 !== rM.stack && (this.stack = `${this.name}: ${this.message}\n${rM.stack}`)
      }
    }
    const jM = new WeakMap;

    function aM(MM) {
      return jM.has(MM)
    }

    function PM(MM, rM) {
      jM.has(MM) || jM.set(MM, rM)
    }

    function nM(MM, rM) {
      return !!(0, OM.j)(rM) && (PM(MM, rM), !0)
    }
    const QM = [
      ["error", MM => MM.error],
      ["unhandledrejection", MM => MM.reason]
    ];

    function zM(MM, rM, iM) {
      let aM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return jM.has(MM) ? Promise.reject(new SM(rM, jM.get(MM), !0)) : new Promise(((jM, nM) => {
        const zM = iM => {
            PM(MM, iM), HM(), nM(new SM(rM, iM))
          },
          LM = MM => {
            MM instanceof WebAssembly.RuntimeError ? zM(MM) : (HM(), nM(MM))
          },
          mM = QM.map((MM => {
            let [rM, iM] = MM;
            return [rM, MM => {
              const rM = iM(MM);
              (0, OM.j)(rM) && zM(rM)
            }]
          })),
          HM = () => {
            for (const [MM, rM] of mM) null === aM || void 0 === aM || aM.removeEventListener(MM, rM)
          };
        for (const [MM, rM] of mM) null === aM || void 0 === aM || aM.addEventListener(MM, rM);
        let hM;
        try {
          hM = iM()
        } catch (JM) {
          return void LM(JM)
        }
        hM.then((MM => {
          HM(), jM(MM)
        }), LM)
      }))
    }
  },
  41793: (MM, rM, iM) => {
    iM.d(rM, {
      $: () => WM,
      C: () => BM,
      F: () => FM,
      G: () => kM,
      K: () => tM,
      O: () => sM,
      R: () => XM,
      U: () => DM,
      W: () => NM,
      Y: () => oM,
      cb: () => IM,
      e: () => wM,
      g: () => CM,
      k: () => YM,
      o: () => ZM,
      r: () => GM,
      s: () => bM,
      u: () => EM,
      v: () => uM,
      y: () => pM
    });
    var OM = iM(187),
      SM = iM(19),
      jM = iM(3961),
      aM = iM(114),
      PM = iM(310),
      nM = iM(30),
      QM = iM(41798),
      zM = iM(37422),
      LM = iM(41826),
      mM = (iM(41862), iM(41922)),
      HM = iM(41855),
      hM = iM(41812);
    const JM = "wasmJoinBuild";
    let dM = null,
      yM = null,
      lM = null;

    function EM(MM) {
      lM = MM
    }
    let UM = !1;

    function GM() {
      UM = !0
    }

    function CM() {
      return UM
    }
    let eM = !1;

    function bM() {
      eM = !0
    }

    function wM() {
      return eM
    }

    function tM() {
      return lM
    }
    let gM = null;

    function uM(MM) {
      gM = MM, (0, PM.d)(MM)
    }
    const RM = "wasmClientRenderLost";

    function pM() {
      nM.k.setItem(RM, !0)
    }

    function WM() {
      return !0 === nM.k.getItem(RM)
    }

    function sM() {
      return gM
    }

    function DM() {
      if (null === dM) {
        nM.g.removeItem("wasmLastPick"), nM.g.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, PM.l)(), dM = (0, QM.C)(LM.f).then((MM => (null === MM || (0, QM.l)(MM) || (yM = mM.b[MM.backend], SM.d.followGameGpu("webgpu" === MM.backend ? MM.adapter : null), "webgpu" === MM.backend && (0, HM.h)()), MM)))
      }
      return dM
    }

    function kM() {
      return yM
    }

    function ZM(MM) {
      return MM ? MM.load() : Promise.resolve().then((function() {
        var MM = new Error("Cannot find module '@bloxd/wasm/client'");
        throw MM.code = "MODULE_NOT_FOUND", MM
      })).then((MM => MM.bloxdWasmClient))
    }

    function oM(MM) {
      nM.g.setItem(JM, MM)
    }

    function fM(MM, rM) {
      const iM = nM.g.getItem(JM);
      return null === iM ? function(MM) {
        if (void 0 !== (0, OM.d)(MM, "webgpu") && (0, QM.z)()) return "webgpu";
        return !1 === (0, aM.u)() ? "webgl1" : "webgl"
      }(MM) : "none" === iM ? null : "string" === typeof iM && void 0 !== (0, OM.d)(MM, iM) ? iM : (rM && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(iM)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function YM() {
      if (null === LM.f) return ZM(null);
      const MM = fM(LM.f, !0);
      return null === MM ? null : LM.f[MM]()
    }

    function NM() {
      null === dM && null !== LM.f && "webgl" === fM(LM.f, !1) && (0, hM.e)()
    }
    let AM = null,
      xM = null,
      vM = null;

    function FM() {
      return AM ??= DM().then((async MM => {
        const rM = null !== MM && !(0, QM.l)(MM),
          iM = {
            indirectHangs: rM && await (0, QM.L)(MM, window.location.search),
            storagePullBreaks: rM && (0, QM.U)(MM, window.location.search),
            splitPassBreaks: rM && (0, QM.S)(MM, window.location.search),
            earlySky: rM && (0, QM.K)(MM, window.location.search),
            instancedTerrain: rM ? (0, QM.M)(MM, window.location.search) : null,
            cellLight: rM && await (0, jM.h)("cellLight"),
            framesAhead: (0, QM.j)(window.location.search, rM ? MM : null),
            webGpuRestores: !rM || (0, QM.V)(MM, (0, zM.b)()),
            bufferCopiesCrash: rM && (0, QM.G)(MM, window.location.search)
          };
        return xM = iM.indirectHangs, vM = !iM.webGpuRestores, iM
      })), AM
    }

    function BM() {
      return xM
    }

    function XM() {
      return vM
    }
    async function IM() {
      const MM = null === dM ? null : await dM;
      return null !== MM && (0, QM.l)(MM) && (dM = null, AM = null, xM = null, vM = null), DM()
    }
  },
  42076: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => PM
    });
    var OM = iM(37257),
      SM = iM(41961),
      jM = iM(4765),
      aM = iM(37422);
    async function PM(MM, rM) {
      return await (0, jM.b)(void 0, !0), (0, OM.k)(MM, SM.f, {
        ...rM,
        memoryMaximumBytes: (0, aM.j)()
      })
    }
  },
  41819: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM,
      g: () => PM,
      k: () => zM,
      o: () => aM
    });
    var OM = iM(327),
      SM = iM(643);
    let jM;

    function aM(MM) {
      var rM;
      const iM = jM;
      return jM = void 0, null !== (rM = nM(MM)) && void 0 !== rM ? rM : iM
    }

    function PM(MM) {
      try {
        const rM = nM(MM);
        void 0 !== rM && (jM = rM, (0, SM.e)((0, OM.h)(rM.reason, rM.message)))
      } catch (rM) {
        console.warn("Couldn't keep the WebGPU loss's cause", rM)
      }
    }

    function nM(MM) {
      var rM;
      const iM = null === MM || void 0 === MM || null === (rM = MM.tjM) || void 0 === rM ? void 0 : rM.call(MM),
        OM = null === MM || void 0 === MM ? void 0 : MM.wjM();
      if (void 0 === OM) return;
      const SM = new Error(OM);
      return void 0 !== iM && (SM.reason = iM), SM
    }

    function QM(MM) {
      return MM instanceof Error ? MM : void 0
    }

    function zM(MM, rM) {
      return "lost" !== MM && "frames_refused" !== MM ? {} : (0, OM.h)("frames_refused" === MM ? MM : null === rM || void 0 === rM ? void 0 : rM.reason, null === rM || void 0 === rM ? void 0 : rM.message)
    }
  },
  41846: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => bM,
      i: () => UM,
      m: () => EM,
      q: () => eM,
      r: () => uM,
      u: () => gM,
      v: () => RM
    });
    var OM = iM(5200),
      SM = iM(41855),
      jM = iM(34885);
    const aM = 1,
      PM = 18,
      nM = 19,
      QM = 20,
      zM = 21,
      LM = {
        [aM]: "link",
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
        [PM]: "retry linked",
        [nM]: "fallback linked",
        [QM]: "fallback failed",
        [zM]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function mM(MM, rM, iM) {
      return MM === PM ? "program retry" : MM === aM ? "program link" : MM === zM ? "program link stall" : MM === nM || MM === QM ? `program ${rM} ${iM}` : "program"
    }
    const HM = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      hM = {
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
      JM = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      dM = {
        11: "none read after view",
        12: "some read after view"
      },
      yM = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...dM
      },
      lM = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function EM(MM, rM) {
      return MM === OM.n.RenderSerialLinks && void 0 !== dM[rM]
    }

    function UM(MM, rM) {
      return MM === OM.n.RenderSerialLinks && void 0 !== lM[15 & rM]
    }
    const GM = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function CM(MM, rM) {
      var iM;
      return null !== (iM = MM[rM]) && void 0 !== iM ? iM : (0, jM.b)(rM)
    }

    function eM() {
      return (0, jM.b)((0, SM.d)())
    }

    function bM(MM, rM) {
      switch (MM) {
        case OM.n.RenderSceneRowNotDrawn:
          return {
            words: ` ${CM(hM,rM)}`, instance: String(rM), group: String(MM)
          };
        case OM.n.RenderChunkMeshNotDrawn: {
          const iM = 0 === (128 & rM) ? "" : " shortage",
            OM = rM >>> 8;
          return {
            words: ` ${CM(JM,127&rM)}${iM}${0===OM?"":` kind ${(0,jM.b)(OM)}`}`,
            instance: String(rM),
            group: String(MM)
          }
        }
        case OM.n.RenderInternal: {
          const iM = CM(HM, 255 & rM),
            OM = rM >>> 8 & 255;
          if (0 === OM) return {
            words: ` ${iM}`,
            instance: String(rM),
            group: String(MM)
          };
          const SM = CM(LM, OM),
            aM = rM >>> 16;
          return {
            words: ` ${iM} ${SM} program ${(0,jM.b)(aM)}`,
            instance: `${iM} ${SM} ${aM}`,
            group: mM(OM, SM, iM),
            gpuDetails: {
              programFailure: SM,
              program: String(aM)
            }
          }
        }
        case OM.n.RenderSerialLinks: {
          if (UM(MM, rM)) {
            const MM = function(MM) {
              const rM = (rM, iM) => (0, jM.b)(MM >>> rM & (1 << iM) - 1),
                iM = MM >>> 30 & 1 ? " restored" : "";
              return `link census ${lM[15&MM]} linked ${rM(22,8)} failed ${rM(4,6)} retried ${rM(10,6)} fallback ${rM(16,6)}${iM}`
            }(rM);
            return {
              words: ` ${MM}`,
              instance: String(15 & rM),
              group: "link census",
              gpuDetails: {
                linkCensus: MM
              }
            }
          }
          const iM = CM(yM, rM);
          return {
            words: ` ${iM}`,
            instance: String(rM),
            group: String(MM),
            gpuDetails: {
              serialLinks: iM
            }
          }
        }
        case OM.n.RenderGlErrorAfterRestore: {
          const iM = CM(GM, 65535 & rM),
            OM = rM >>> 16,
            SM = 65535 !== OM;
          return {
            words: ` ${iM}${SM?` program ${(0,jM.b)(OM)}`:""}`,
            instance: String(rM),
            group: String(MM),
            gpuDetails: SM ? {
              glError: iM,
              program: String(OM)
            } : {
              glError: iM
            }
          }
        }
        default:
          return null
      }
    }
    const wM = 2,
      tM = new Map;

    function gM(MM) {
      let {
        group: rM,
        instance: iM
      } = MM, OM = tM.get(rM);
      return void 0 === OM && (OM = [], tM.set(rM, OM)), !OM.includes(iM) && (OM.length >= wM || (OM.push(iM), !1))
    }

    function uM() {
      return tM.size > 0
    }

    function RM() {
      tM.clear()
    }
  },
  41826: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      f: () => jM
    });
    var OM = iM(41833);
    const SM = new WeakSet;
    const jM = {
        webgpu: async () => (function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === MM || SM.has(MM.prototype)) return;
          SM.add(MM.prototype);
          const rM = MM.prototype.requestDevice;
          MM.prototype.requestDevice = function(MM) {
            var iM;
            const SM = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.requiredLimits) && void 0 !== iM ? iM : {},
              jM = Object.keys(SM).filter((MM => !(MM in this.limits)));
            if (0 === jM.length) return rM.call(this, MM);
            const aM = Object.fromEntries(Object.entries(SM).filter((MM => {
              let [rM] = MM;
              return rM in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${jM.join(", ")}`), (0, OM.reportDroppedRequiredLimits)(jM), rM.call(this, {
              ...MM,
              requiredLimits: aM
            })
          }
        }(), (await iM.e(8).then((() => iM(53685)))).bloxdWasmWebgpu),
        webgl: async () => (await iM.e(6).then((() => iM(53702)))).bloxdWasmWebgl,
        webgl1: async () => (await iM.e(7).then((() => iM(53713)))).bloxdWasmWebgl1
      },
      aM = async () => (await iM.e(5).then((() => iM(53722)))).compileAnimationPackInWasm
  },
  41776: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => yM,
      g: () => dM,
      k: () => GM
    });
    var OM = iM(7131),
      SM = iM(22),
      jM = iM(4641),
      aM = iM(5200),
      PM = iM(7124),
      nM = iM(41782);

    function QM(MM, rM) {
      const iM = (0, PM.b)(rM.variants);
      return MM.setShaderPack(iM.variantFlags, iM.hooks, iM.moduleCodes, (0, nM.s)(rM.layers), nM.l[rM.lQ], rM.keepCircleShadows)
    }
    const zM = 0,
      LM = 1,
      mM = 2,
      HM = "shaderPack:failedToCompile",
      hM = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      JM = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function dM(MM, rM) {
      var iM;
      const OM = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.reason) && void 0 !== iM ? iM : "none";
      return hM.has(OM) ? {
        messageKey: rM ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === OM && "override" === (null === MM || void 0 === MM ? void 0 : MM.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: JM.has(OM) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class yM extends Error {
      constructor(MM) {
        super(`the shader pack can't run in this game: ${MM}`), this.messageKey = MM, this.name = "ShaderPackJoinError"
      }
    }
    const lM = "strict";
    class EM {
      constructor(MM) {
        this.deps = MM, this.pagePack = void 0, this.loaded = null, this.lQ = lM, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = MM.load().catch((rM => (MM.warn("the shader pack could not load: the game draws without it", rM), {
          status: "none"
        }))).then((MM => (this.loaded = MM, "active" === MM.status && (this.handOverToPreviews(MM), null !== MM.harnessPolicy && (this.lQ = MM.harnessPolicy, this.handOver())), MM)))
      }
      async join(MM) {
        this.leave();
        const rM = this.game,
          [iM, SM] = await Promise.all([this.pagePack, this.policyOf(MM)]);
        if (rM !== this.game || "none" === iM.status) return null;
        const jM = "active" === iM.status ? iM.pack.variants : iM.variants,
          aM = (0, OM.l)(jM, SM);
        if (aM && "active" === iM.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (aM) {
          const MM = this.cantRun(iM, SM);
          if (null !== MM) return MM
        } else if ("blocked" === iM.status || null === this.deps.core) return null;
        return this.lQ = SM, this.handOver(), aM && this.refused ? HM : (this.joined = !0, this.offInThisGame = !aM, null)
      }
      async replay(MM) {
        const rM = await this.join(MM);
        null === rM ? this.playable() : this.deps.failInGame(rM)
      }
      cantRun(MM, rM) {
        const {
          core: iM,
          noWebGpu: OM
        } = this.deps;
        if ("blocked" === MM.status) {
          return "shaderPack:failedUnchecked" === MM.messageKey && null === iM && OM.noAdapter ? OM.messageKey : MM.messageKey
        }
        return this.refused || this.failedPolicies.has(rM) ? HM : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var MM;
        return this.runsInJoinedGame() && "active" === (null === (MM = this.loaded) || void 0 === MM ? void 0 : MM.status) ? function(MM, rM) {
          const iM = MM.filter((MM => (0, OM.l)([MM], rM))),
            SM = MM => iM.some((rM => rM[MM]));
          return {
            sceneDepth: SM("sceneDepth"),
            sunShadow: SM("sunShadow"),
            airShadow: SM("airShadow")
          }
        }(this.loaded.pack.variants, this.lQ) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(HM) : (null !== this.couldntRun ? this.notify(jM.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.lQ) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(MM) {
        for (const {
            code: rM,
            detail: iM
          }
          of MM)
          if (rM === aM.n.RenderShaderPackNotRun) switch (255 & iM) {
            case zM:
              this.refused = !0, this.failed();
              break;
            case LM:
              this.failedPolicies.add(this.lQ), this.failed();
              break;
            case mM:
              this.failedModelPolicies.add(this.lQ), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(HM) : this.failedWhileJoining = !0)
      }
      fail(MM) {
        this.leave(), this.deps.failInGame(MM)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(MM, rM) {
        const iM = this.game;
        this.deps.notify(MM, (() => iM === this.game && this.joined), rM)
      }
      handOver() {
        var MM;
        const {
          core: rM
        } = this.deps;
        null !== rM && "active" === (null === (MM = this.loaded) || void 0 === MM ? void 0 : MM.status) && (QM(rM, {
          ...this.loaded.pack,
          lQ: this.lQ
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(MM) {
        let {
          pack: rM,
          harnessPolicy: iM
        } = MM;
        const {
          previews: OM
        } = this.deps;
        null !== OM && QM(OM, {
          ...rM,
          lQ: null !== iM && void 0 !== iM ? iM : lM
        })
      }
      policyOf(MM) {
        return this.deps.policyOf(MM).catch((MM => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", MM), lM)))
      }
    }
    const UM = "wasmShaderPackNotice";

    function GM(MM, rM, iM, OM) {
      return SM.i.subscribe(UM, (MM => {
        let {
          translationKey: rM,
          stillCurrent: iM,
          reasonKey: OM
        } = MM;
        iM() && SM.i.Tz("chat", (0, jM.f)(rM, OM))
      })), new EM({
        load: CM,
        policyOf: eM,
        core: MM,
        previews: rM,
        noWebGpu: iM,
        notify: (MM, rM, iM) => {
          const OM = {
            translationKey: MM,
            stillCurrent: rM,
            reasonKey: iM
          };
          SM.i.Tz(UM, OM, !0)
        },
        failInGame: MM => {
          SM.i.Tz(jM.e, MM)
        },
        warn: OM
      })
    }
    async function CM() {
      const [{
        shaderPackPage: MM,
        harnessShaderPackMode: rM
      }, {
        shaderPackTextures: OM
      }] = await Promise.all([iM.e(129).then((() => iM(40300))), iM.e(130).then((() => iM(7120)))]), SM = await MM.load();
      return "active" !== SM.status ? SM : {
        status: "active",
        pack: {
          variants: SM.pack.variants,
          layers: OM().layers,
          keepCircleShadows: SM.pack.keepCircleShadows
        },
        harnessPolicy: rM()
      }
    }
    async function eM(MM) {
      var rM;
      const [{
        shaderPackPage: OM,
        harnessShaderPackMode: SM
      }, {
        getShaderPackPolicy: jM
      }] = await Promise.all([iM.e(129).then((() => iM(40300))), iM.e(106).then((() => iM(43937)))]);
      return await OM.load(), null !== (rM = SM()) && void 0 !== rM ? rM : jM(MM)
    }
  },
  41900: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      g: () => dM,
      i: () => nM,
      k: () => QM,
      o: () => zM,
      p: () => mM
    });
    var OM = iM(41906),
      SM = iM(41913);
    const jM = "atlas:",
      aM = 3e4;
    class PM extends Error {
      constructor(MM, rM) {
        super(`fetching ${MM} answered HTTP ${rM}`), this.url = MM, this.status = rM, this.name = "TerrainTextureFetchError"
      }
    }

    function nM(MM) {
      if (!MM.startsWith(jM)) return null;
      const rM = Number(MM.slice(jM.length));
      return Number.isInteger(rM) && rM >= 0 ? rM : null
    }
    async function QM() {
      const MM = await iM.e(231).then((() => iM(35131)));
      return {
        atlasSheets: MM.blockAtlasUrls,
        texture: rM => {
          var iM, OM, jM;
          return null !== (iM = null !== (OM = null !== (jM = MM.animatedBlockTextures[rM]) && void 0 !== jM ? jM : MM.rotatedBlockTextures[rM]) && void 0 !== OM ? OM : SM.c[rM]) && void 0 !== iM ? iM : null
        }
      }
    }
    async function zM(MM) {
      const rM = new AbortController,
        iM = setTimeout((() => {
          rM.abort(new DOMException(`${MM} took over ${aM} ms`, "TimeoutError"))
        }), aM);
      let OM;
      try {
        const iM = await fetch(MM, {
          signal: rM.signal
        });
        if (!iM.ok) throw new PM(MM, iM.status);
        OM = await iM.blob()
      } finally {
        clearTimeout(iM)
      }
      const SM = await createImageBitmap(OM, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return mM(SM)
      } finally {
        SM.close()
      }
    }
    const LM = 8192;

    function mM(MM) {
      const {
        width: rM,
        height: iM
      } = MM, SM = Math.max(1, Math.min(iM, LM)), jM = (0, OM.d)(rM, SM, {
        willReadFrequently: !0
      });
      if (!jM) throw new Error("no 2D context to read the texture back");
      jM.globalCompositeOperation = "copy";
      const aM = new Uint8Array(rM * iM * 4);
      for (let OM = 0; OM < iM; OM += SM) {
        const PM = Math.min(SM, iM - OM);
        jM.drawImage(MM, 0, OM, rM, PM, 0, 0, rM, PM), aM.set(jM.getImageData(0, 0, rM, PM).data, OM * rM * 4)
      }
      return {
        width: rM,
        height: iM,
        pixels: aM
      }
    }
    async function HM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zM;
      const OM = [],
        SM = await Promise.all(MM.map((async MM => {
          var SM, aM;
          const PM = null !== (SM = null === (aM = rM.decoded) || void 0 === aM ? void 0 : aM.call(rM, MM)) && void 0 !== SM ? SM : null,
            QM = null === PM ? function(MM, rM) {
              if (MM.startsWith(jM)) {
                var iM;
                const OM = nM(MM);
                return null === OM ? null : null !== (iM = rM.atlasSheets[OM]) && void 0 !== iM ? iM : null
              }
              return rM.texture(MM)
            }(MM, rM) : null,
            zM = null !== PM && void 0 !== PM ? PM : null === QM ? null : iM(QM);
          if (null === zM) return OM.push({
            name: MM,
            url: QM,
            error: new Error(`no URL for terrain texture ${MM}`)
          }), null;
          try {
            const rM = await zM;
            if (rM.pixels.byteLength !== rM.width * rM.height * 4) throw new Error(`decoded ${rM.pixels.byteLength} bytes for ${rM.width}x${rM.height} texels`);
            return {
              name: MM,
              texture: rM
            }
          } catch (LM) {
            return OM.push({
              name: MM,
              url: QM,
              error: LM
            }), null
          }
        }))),
        aM = SM.filter((MM => null !== MM)),
        PM = new Uint32Array(2 * aM.length);
      aM.forEach(((MM, rM) => {
        let {
          texture: iM
        } = MM;
        PM[2 * rM] = iM.width, PM[2 * rM + 1] = iM.height
      }));
      return {
        handOver: {
          names: aM.map((MM => {
            let {
              name: rM
            } = MM;
            return rM
          })),
          textures: aM.map((MM => {
            let {
              texture: rM
            } = MM;
            return rM.pixels
          })),
          sizes: PM
        },
        failures: OM
      }
    }
    const hM = [2e3, 1e4, 3e4, 6e4, 12e4];

    function JM() {}
    class dM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hM,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = MM, this.retryMs = rM, this.keepBelow = iM, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QM,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const OM = ++this.started,
          SM = {
            decode: iM.decode,
            wholeAtlas: iM.wholeAtlas
          };
        return this.loadAndHandOver(rM, SM, MM, (() => {
          var MM;
          return OM < this.landed || !1 === (null === (MM = iM.wanted) || void 0 === MM ? void 0 : MM.call(iM))
        }), {
          onTaken: (MM, iM) => {
            this.landed = OM, this.current = {
              mine: OM,
              sources: rM,
              load: SM,
              ML: MM,
              failed: iM
            }
          }
        })
      }
      restore(MM) {
        var rM;
        const iM = this.current;
        if (null === iM) return Promise.resolve(null);
        if ((null === (rM = this.restoring) || void 0 === rM ? void 0 : rM.mine) === iM.mine) return this.restoring.done;
        const OM = {
          mine: iM.mine,
          done: this.restoreLanded(iM, MM).finally((() => {
            this.restoring === OM && (this.restoring = null)
          }))
        };
        return this.restoring = OM, OM.done
      }
      async restoreLanded(MM, rM) {
        const iM = () => this.landed !== MM.mine,
          {
            ML: OM
          } = MM;
        if (null !== OM) return this.stopped() ? null : this.core.setTerrainTextures(OM.names, OM.textures, OM.sizes);
        let SM = rM;
        for (let jM = 0;; jM++) {
          const rM = this.retryMs.at(jM),
            OM = {
              allOrNothingExcept: void 0 === rM ? void 0 : MM.failed
            },
            aM = await this.loadAndHandOver(MM.sources, MM.load, SM, iM, OM);
          if (!1 !== aM || void 0 === rM || this.stopped()) return aM;
          if (SM = JM, await new Promise((MM => {
              setTimeout(MM, rM)
            })), iM()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const jM = this.core.terrainTextureNames();
        var aM;
        if (0 === jM.length) return null === (aM = SM.onTaken) || void 0 === aM || aM.call(SM, null, new Set), !0;
        let PM, QM;
        try {
          PM = await MM(), QM = await HM(jM, PM, rM.decode)
        } catch (dM) {
          return OM() ? null : (iM({
            name: null,
            url: null,
            error: dM
          }), !1)
        }
        if (OM() || this.stopped()) return null;
        for (const nM of QM.failures) iM(nM);
        const zM = SM.allOrNothingExcept;
        if (void 0 !== zM && QM.failures.some((MM => {
            let {
              name: rM
            } = MM;
            return null === rM || !zM.has(rM)
          })) || !0 === rM.wholeAtlas && QM.failures.some((MM => {
            let {
              name: rM
            } = MM;
            return null === rM || null !== nM(rM)
          }))) return !1;
        const {
          handOver: LM
        } = QM, mM = function(MM) {
          return MM.textures.reduce(((MM, rM) => MM + rM.byteLength), 0)
        }(LM) < this.keepBelow, hM = this.core.setTerrainTextures(LM.names, LM.textures, LM.sizes, mM ? void 0 : () => {
          !async function(MM, rM) {
            await rM;
            for (const {
                buffer: OM
              }
              of MM) {
              const MM = OM;
              var iM;
              if (!MM.detached) null === (iM = MM.transfer) || void 0 === iM || iM.call(MM, 0)
            }
          }(LM.textures, PM.heldUntil)
        });
        if (hM) {
          var JM;
          const MM = new Set(QM.failures.flatMap((MM => {
            let {
              name: rM
            } = MM;
            return null === rM ? [] : [rM]
          })));
          null === (JM = SM.onTaken) || void 0 === JM || JM.call(SM, mM ? LM : null, MM)
        }
        return hM
      }
    }
  },
  37790: (MM, rM, iM) => {
    function OM(MM) {
      return "fetch" === MM || "timeout" === MM || "integrity" === MM ? "download" : "browser"
    }
    iM.d(rM, {
      d: () => SM,
      f: () => aM,
      g: () => nM,
      j: () => PM,
      n: () => OM,
      p: () => jM
    });
    const SM = "https://discord.gg/playbloxd";

    function jM(MM) {
      return "download" === MM ? {
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

    function aM(MM, rM) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: rM ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: MM.code
        },
        discordLink: rM,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function PM() {
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

    function nM(MM, rM, iM) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: iM ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: MM.reason
        },
        discordLink: null === MM.name,
        confirm: rM ? "general:reconnect" : MM.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  34980: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      d: () => LM,
      g: () => zM
    });
    var OM = iM(243),
      SM = iM(83),
      jM = iM(114),
      aM = iM(110),
      PM = iM(650);
    const nM = new Set(["mali_bifrost"]);

    function QM() {
      if (PM.i) return;
      const MM = (0, SM.pageOperatingSystem)();
      if ("android" !== MM && "windows" !== MM || (0, PM.e)("webgl_default")) return;
      if ("windows" === MM) return MM => "qualcomm" === (0, SM.normaliseGpuVendor)((0, aM.d)(MM).vendor);
      const rM = (0, jM.o)(),
        iM = null === rM ? (0, OM.w)() : (0, OM.l)(rM.vendor, rM.renderer);
      return null !== iM && nM.has(iM) ? MM => (0, OM.q)((0, aM.d)(MM).vendor, iM) : void 0
    }

    function zM(MM, rM) {
      return MM ? () => !0 : rM()
    }
    async function LM(MM) {
      try {
        const rM = zM(MM, QM),
          iM = navigator.gpu;
        if (void 0 === rM || void 0 === iM) return !1;
        const OM = await (0, aM.o)(iM, {
          seed: !1,
          compatibility: rM
        });
        return "string" !== typeof OM && OM.compatibility && !(0, aM.j)(OM.adapter)
      } catch (rM) {
        return console.error("WebGPU compatibility-mode adapter request failed.", rM), !1
      }
    }
  },
  41855: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM,
      h: () => QM
    });
    var OM = iM(83),
      SM = iM(39814);
    const jM = "webgpuPipeline";

    function aM(MM) {
      return MM.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let PM = null;

    function nM() {
      if (null === PM) try {
        MM = (0, OM.getBrowserName)(), rM = (0, OM.getBrowserVersion)(), iM = (0, OM.getOperatingSystem)(), SM = (0, OM.getOperatingSystemVersion)(), PM = `${MM.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===rM?"unknown":aM(rM)}-${iM}${void 0===SM?"":`_${aM(SM)}`}`
      } catch (jM) {
        console.warn("The user agent couldn't be read for its browser code", jM), PM = "unknown"
      }
      var MM, rM, iM, SM;
      return PM
    }

    function QM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const rM = `WGPU-${nM()}`,
        OM = (MM, OM) => {
          const {
            reason: aM,
            message: PM
          } = OM;
          if ((0, SM.t)(String(PM))) return;
          const nM = {
            pipeline: null !== MM && void 0 !== MM ? MM : "",
            reason: String(aM),
            browserMessage: String(PM)
          };
          Promise.resolve().then((() => iM(41833))).then((MM => {
            let {
              reportCrash: iM
            } = MM;
            iM({
              kind: "coreError",
              code: rM,
              site: jM,
              fatal: !1,
              message: `${nM.pipeline} ${nM.reason}: ${nM.browserMessage}`,
              details: nM,
              error: OM
            })
          })).catch((MM => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", MM)
          }))
        },
        aM = MM.createRenderPipelineAsync;
      MM.createRenderPipelineAsync = function(MM) {
        return aM.call(this, MM).catch((rM => {
          throw OM(MM.label, rM), rM
        }))
      };
      const PM = MM.createComputePipelineAsync;
      MM.createComputePipelineAsync = function(MM) {
        return PM.call(this, MM).catch((rM => {
          throw OM(MM.label, rM), rM
        }))
      }
    }
  },
  41812: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      g: () => nM
    });
    var OM = iM(114);
    let SM = !1;

    function jM() {
      let MM = null;
      try {
        return MM = document.createElement("canvas").getContext("webgl2"), null !== MM
      } catch {
        return !1
      } finally {
        try {
          var rM, iM;
          null === (rM = MM) || void 0 === rM || null === (iM = rM.getExtension("WEBGL_lose_context")) || void 0 === iM || iM.loseContext()
        } catch {}
      }
    }

    function aM() {
      "hidden" === document.visibilityState && (SM = !1, document.removeEventListener("visibilitychange", aM))
    }

    function PM() {
      SM || "visible" !== document.visibilityState || !(0, OM.q)() && !jM() || (SM = !0, document.addEventListener("visibilitychange", aM))
    }

    function nM() {
      return SM || jM()
    }
  },
  41971: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/bloxd_wasm_models_bg.20cde5d06eea3961364a.wasm"
  },
  41968: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/bloxd_wasm_workers_bg.a748c387a816d887f35c.wasm"
  },
  41961: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      f: () => OM
    });
    const OM = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new iM.U(iM(41968))
      }
    };
    const SM = {
      name: "bloxd_wasm_models",
      url: function() {
        return new iM.U(iM(41971))
      }
    }
  },
  7124: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => UM,
      c: () => GM,
      f: () => lM,
      g: () => yM
    });
    var OM = iM(7131);
    const SM = 6,
      jM = 3,
      aM = 1,
      PM = 2,
      nM = 4,
      QM = 8,
      zM = 16,
      LM = 32,
      mM = 64,
      HM = 128,
      hM = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function JM(MM) {
      if (!MM) return 0;
      const rM = hM.indexOf(MM);
      if (rM <= 0) throw new Error(`"${MM}" is not a shader pack hook function`);
      return rM
    }

    function dM(MM) {
      if (0 === MM) return null;
      const rM = hM[MM];
      if (void 0 === rM) throw new Error(`${MM} is not a shader pack hook function id`);
      return rM
    }

    function yM(MM) {
      const rM = OM.e.length;
      return {
        strict: MM >= rM,
        program: OM.e[MM % rM]
      }
    }

    function lM(MM) {
      return Number(MM.strict) * OM.e.length + OM.e.indexOf(MM.program)
    }

    function EM(MM) {
      return "" === MM ? [] : MM.split(" ")
    }

    function UM(MM) {
      const rM = {
        variantFlags: new Uint8Array(SM),
        hooks: new Uint8Array(SM * jM),
        moduleCodes: Array(SM).fill(""),
        reads: Array(2 * SM).fill("")
      };
      for (const iM of MM) {
        const MM = lM(iM.key),
          OM = (MM, rM) => null === iM.hooks.surface || iM.reads.fragment.includes(MM) ? 0 : rM;
        rM.variantFlags[MM] = (iM.sceneDepth ? aM : 0) | (iM.movesVertices ? PM : 0) | (iM.sunShadow ? nM : 0) | (iM.airShadow ? QM : 0) | (iM.discards ? zM : 0) | OM("localPosition", LM) | OM("enchantSpeed", mM) | OM("enchantTier", HM), rM.hooks[MM * jM] = JM(iM.hooks.vertex), rM.hooks[MM * jM + 1] = JM(iM.hooks.surface), rM.hooks[MM * jM + 2] = JM(iM.hooks.light), rM.moduleCodes[MM] = iM.moduleCode, rM.reads[2 * MM] = iM.reads.vertex.join(" "), rM.reads[2 * MM + 1] = iM.reads.fragment.join(" ")
      }
      return rM
    }

    function GM(MM) {
      const {
        hooks: rM,
        moduleCodes: iM,
        reads: OM
      } = MM;
      return Array.from(MM.variantFlags, ((MM, SM) => {
        const LM = SM * jM;
        return {
          key: yM(SM),
          hooks: {
            vertex: dM(rM[LM]),
            surface: dM(rM[LM + 1]),
            light: dM(rM[LM + 2])
          },
          moduleCode: iM[SM],
          sceneDepth: 0 !== (MM & aM),
          sunShadow: 0 !== (MM & nM),
          airShadow: 0 !== (MM & QM),
          movesVertices: 0 !== (MM & PM),
          discards: 0 !== (MM & zM),
          reads: {
            vertex: EM(OM[2 * SM]),
            fragment: EM(OM[2 * SM + 1])
          }
        }
      }))
    }
  },
  41782: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      f: () => OM,
      h: () => mM,
      i: () => zM,
      l: () => dM,
      n: () => jM,
      p: () => PM,
      q: () => nM,
      r: () => aM,
      s: () => JM,
      w: () => HM,
      x: () => hM
    });
    const OM = 3,
      SM = 0,
      jM = 1,
      aM = 2,
      PM = {
        uniform: 3,
        Xm: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      nM = 10,
      QM = "BloxdPackInputs",
      zM = "bloxdPackInputs",
      LM = [{
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
      mM = 80;

    function HM() {
      const MM = LM.map((MM => {
        let {
          name: rM,
          type: iM
        } = MM;
        return `    ${rM}: ${iM},\n`
      })).join("");
      return `struct ${QM} {\n${MM}}\n@group(${OM}) @binding(${SM}) var<uniform> ${zM}: ${QM};\n`
    }

    function hM(MM, rM) {
      const iM = new DataView(MM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, mM),
        [OM, SM, jM, aM, PM, nM] = LM;
      iM.setFloat32(OM.offset, rM.seconds, !0), iM.setUint32(SM.offset, rM.lit ? 1 : 0, !0);
      for (let QM = 0; QM < 3; QM++) iM.setInt32(jM.offset + 4 * QM, rM.renderOffset[QM], !0), iM.setFloat32(aM.offset + 4 * QM, rM.mMM[QM], !0), iM.setFloat32(PM.offset + 4 * QM, rM.eyePosition[QM], !0), iM.setFloat32(nM.offset + 4 * QM, rM.shadowDirection[QM], !0)
    }

    function JM(MM) {
      const rM = new Uint32Array(Math.max(1, MM.length));
      return MM.forEach(((MM, iM) => {
        let {
          id: OM,
          rotation: SM
        } = MM;
        rM[iM] = 65535 & OM | (3 & SM) << 16
      })), rM
    }
    const dM = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7131: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      h: () => aM,
      l: () => PM,
      m: () => SM,
      o: () => jM
    });
    const OM = ["terrain", "liquid", "model"];

    function SM() {
      const MM = [];
      for (const rM of [!1, !0])
        for (const iM of OM) MM.push({
          strict: rM,
          program: iM
        });
      return MM
    }

    function jM(MM) {
      return `${MM.strict?"strict":"allow"}.${MM.program}`
    }

    function aM(MM) {
      return !MM.hooks.vertex && !MM.hooks.surface && !MM.hooks.light
    }

    function PM(MM, rM) {
      return "off" !== rM && (null === MM || MM.some((MM => MM.key.strict === ("strict" === rM) && !aM(MM))))
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);