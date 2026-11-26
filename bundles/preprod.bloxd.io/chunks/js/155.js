export const id = 155;
export const ids = [155];
export const modules = {
  34825: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      h: () => hH
    });
    var AH = LH(241),
      rH = LH(114),
      SH = LH(34828);

    function hH() {
      var HH, BH, LH;
      return null !== (HH = (0, AH.o)(null !== (BH = null === (LH = (0, rH.l)()) || void 0 === LH ? void 0 : LH.renderer) && void 0 !== BH ? BH : null, (0, rH.i)())) && void 0 !== HH ? HH : "unknown"
    }

    function tH(HH, BH, LH, AH, rH) {
      const hH = null === BH ? "untimed" : `${Math.round(BH)} ms`;
      return `frames stalled, ${LH}, gpu ${(0,SH.c)(rH)}, blocking ${hH}, drawn ${Math.round(HH)} ms apart, timers ${AH.timers}, timer gap ${Math.round(AH.longestGapMs)} ms`
    }
  },
  34828: (HH, BH, LH) => {
    function AH(HH) {
      return String(HH).replace(/\d/g, (HH => String.fromCharCode(97 + Number(HH))))
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  41962: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      f: () => EH,
      h: () => hH,
      j: () => rH,
      m: () => tH,
      o: () => CH
    });
    class AH extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function rH(HH) {
      return HH instanceof RangeError && /call stack/i.test(HH.message) || HH instanceof Error && "InternalError" === HH.name && /recursion/i.test(HH.message)
    }
    const SH = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function hH(HH) {
      var BH;
      return HH instanceof WebAssembly.RuntimeError || HH instanceof AH || rH(HH) && SH.test(null !== (BH = HH.stack) && void 0 !== BH ? BH : "")
    }

    function tH(HH, BH) {
      if (hH(HH)) throw HH;
      console.error(BH, HH)
    }

    function zH(HH, BH, LH, rH, SH) {
      if (BH % rH !== 0 || BH + LH > HH.byteLength) throw new AH(`${SH}: ${LH} bytes at ${BH}, ${rH}-aligned, outside ${HH.byteLength} bytes of memory`)
    }

    function CH(HH, BH, LH, AH, rH) {
      return 0 === LH ? null : (zH(BH, LH, AH * HH.BYTES_PER_ELEMENT, HH.BYTES_PER_ELEMENT, rH), new HH(BH, LH, AH))
    }

    function EH(HH, BH, LH, AH, rH) {
      return 0 === BH ? null : (zH(HH, BH, LH, AH, rH), new DataView(HH, BH, LH))
    }
  },
  42034: (HH, BH, LH) => {
    LH.d(BH, {
      $: () => KH,
      C: () => dH,
      G: () => AB,
      H: () => LB,
      I: () => HB,
      L: () => SB,
      M: () => MB,
      O: () => rB,
      S: () => BB,
      T: () => hB,
      X: () => EB,
      Y: () => YB,
      ab: () => cH,
      b: () => fH,
      e: () => xB,
      f: () => UB,
      h: () => GB,
      j: () => WB,
      k: () => CB,
      n: () => QB,
      p: () => uB,
      q: () => TB,
      u: () => iH,
      y: () => yH
    });
    var AH = LH(304),
      rH = LH(233),
      SH = LH(241),
      hH = LH(15),
      tH = LH(3105),
      zH = LH(673),
      CH = LH(4926),
      EH = LH(3056),
      XH = LH(3831),
      GH = LH(81),
      YH = LH(120),
      uH = LH(297),
      QH = LH(30),
      WH = LH(293),
      MH = LH(105),
      xH = LH(635),
      vH = LH(114),
      PH = LH(112),
      TH = LH(5268),
      UH = LH(42041),
      VH = LH(1863),
      OH = LH(42049),
      bH = LH(42054),
      kH = LH(34936),
      mH = LH(42056),
      oH = LH(42060);
    const IH = "bloxd-webgpuOffAfterLoss",
      fH = "context:webgl",
      lH = "probe:threw";

    function KH() {
      const HH = document.createElement("canvas");
      let BH = "";
      HH.addEventListener("webglcontextcreationerror", (HH => {
        BH = HH.statusMessage
      }));
      try {
        var LH, AH;
        null === (LH = HH.getContext("webgl")) || void 0 === LH || null === (AH = LH.getExtension("WEBGL_lose_context")) || void 0 === AH || AH.loseContext()
      } catch (rH) {
        return String(rH)
      }
      return BH
    }

    function cH(HH) {
      let BH;
      try {
        BH = HH.getContext("webgl", {
          powerPreference: vH.e
        })
      } catch {
        BH = null
      }
      if (null === BH) return null;
      let LH = null;
      try {
        const HH = BH.getParameter(BH.MAX_TEXTURE_SIZE);
        LH = "number" === typeof HH && HH > 0 ? HH : null
      } catch {
        LH = null
      }
      try {
        var AH;
        null === (AH = BH.getExtension("WEBGL_lose_context")) || void 0 === AH || AH.loseContext()
      } catch {}
      return LH
    }
    const eH = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function qH() {
      return "ios" === (0, GH.getOperatingSystem)() ? "ios" : "other"
    }
    const gH = "mali_valhall",
      NH = new Set(["nvidia_pre_turing"]),
      RH = new Set(["intel_gen7_8"]);

    function jH(HH, BH, LH) {
      return eH.has(HH) ? "android_arm" === HH && BH === gH && "mobileAndroid" !== LH ? "webgpu_default" : "webgl_default" : null
    }

    function nH(HH) {
      return function(HH) {
        try {
          return HH()
        } catch {
          return null
        }
      }((() => {
        var BH, LH, AH, hH;
        const tH = null !== (BH = null === (LH = HH.info) || void 0 === LH ? void 0 : LH.vendor) && void 0 !== BH ? BH : "";
        return "windows" === (0, GH.getOperatingSystem)() && "" !== tH && "intel" !== (0, GH.normaliseGpuVendor)(tH) ? null : ((0, GH.seedGpuVendor)(tH), jH((0, rH.i)(), (0, SH.g)(tH, null !== (AH = null === (hH = HH.info) || void 0 === hH ? void 0 : hH.architecture) && void 0 !== AH ? AH : ""), YH.siteUsed))
      }))
    }

    function FH() {
      var HH;
      return {
        gpu: null !== (HH = navigator.gpu) && void 0 !== HH ? HH : null,
        webgl2: mH.g,
        webgl1: () => function(HH) {
          let BH, LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UH.b;
          try {
            BH = HH.getContext("webgl")
          } catch {
            BH = null
          }
          if (null === BH) return [fH];
          const AH = [];
          try {
            for (const rH of LH.extensions) null === BH.getExtension(rH) && AH.push(rH);
            for (const [rH, SH] of Object.entries(LH.limits)) {
              const HH = BH[rH],
                LH = "number" === typeof HH ? BH.getParameter(HH) : null;
              ("number" !== typeof LH || LH < SH) && AH.push(`limit:${rH}`)
            }
            const HH = BH.getShaderPrecisionFormat(BH.VERTEX_SHADER, BH.HIGH_FLOAT);
            (null === HH || HH.precision < LH.vertexHighFloatBits) && AH.push("precision:vertex_high_float")
          } catch {
            AH.push(lH)
          }
          try {
            var rH;
            null === (rH = BH.getExtension("WEBGL_lose_context")) || void 0 === rH || rH.loseContext()
          } catch {}
          return AH
        }(document.createElement("canvas")),
        offAfterLoss: HH => wH((() => HH ? (0, WH.E)() : hH.c.isWebGpuOffAfterLoss())),
        oldIntelDriver: HH => wH((() => (0, MH.d)(HH))),
        intelGen9: HH => wH((() => (0, MH.p)(HH))),
        storeIntelGen9Verdict: HH => {
          QH.e.setItem(MH.K, HH)
        },
        gpuClassWebGlArm: nH,
        storeGpuClassVerdict: HH => {
          QH.e.setItem(MH.I, HH)
        },
        gpuClassOnWebGl: HH => (0, xH.e)(HH),
        webGlDefaultFamily: HH => RH.has((0, SH.g)(HH.vendor, HH.architecture)),
        storeWebGlDefaultFamilyVerdict: HH => {
          QH.e.setItem(MH.R, HH)
        },
        override: () => DH(),
        claimed: () => ZH((0, zH.l)()),
        webGpuSetting: () => {
          const HH = QH.e.getItem(AH.zc);
          return "boolean" === typeof HH ? HH : null
        },
        heldBack: () => xH.g,
        storeHoldbackSpared: HH => {
          QH.e.setItem(MH.E, HH)
        },
        intelGen9OnWebGl: () => xH.h,
        Cu: () => wH((() => (0, XH.h)(GH.featureFlags.settings.canUseShaderPacks))),
        windows: () => wH((() => "windows" === (0, GH.getOperatingSystem)())),
        defaultCompatibility: kH.e
      }
    }

    function DH() {
      let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, tH.o)("render") && "webgl1" === (0, tH.n)("renderer")) return "webgl1";
      const BH = [() => new URLSearchParams(window.location.search).get(EH.e), () => QH.e.getItem(EH.g), () => {
        const BH = localStorage.getItem(IH);
        return null !== BH && HH && localStorage.removeItem(IH), "1" === BH ? "webgl2" : null
      }];
      for (const LH of BH) {
        let HH = null;
        try {
          HH = ZH(LH())
        } catch {}
        if (null !== HH) return HH
      }
      return null
    }

    function wH(HH) {
      try {
        return HH()
      } catch {
        return !1
      }
    }

    function ZH(HH) {
      return "lite" === HH ? "webgpu" : "webgl2" === HH || "babylon" === HH ? "webgl" : null
    }

    function dH(HH) {
      return "none" === HH || "compatibility_mode" === HH
    }
    async function aH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FH();
      const BH = await async function(HH) {
        const BH = JH(HH),
          {
            source: LH
          } = BH,
          AH = !BH.asked,
          rH = "gpu" in BH && BH.heldBack,
          hH = function(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return rH && !dH(HH) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: LH
            } : {
              reason: HH,
              adapter: BH,
              source: LH
            }
          };
        if (!("gpu" in BH)) return hH(BH.refused);
        let tH;
        try {
          tH = await (0, VH.j)((0, PH.o)(BH.gpu, {
            compatibility: sH(HH, BH)
          }), vB, `requestAdapter didn't settle in ${vB/1e3} s`)
        } catch {
          return hH("adapter_error")
        }
        if ("string" === typeof tH) return hH(tH);
        const {
          adapter: zH,
          compatibility: CH
        } = tH, EH = (0, PH.b)(zH);
        if ((0, PH.h)(zH)) return hH("software_adapter", EH);
        const XH = HH.windows() && function(HH) {
          return NH.has((0, SH.g)(HH.vendor, HH.architecture))
        }(EH);
        if (HH.storeHoldbackSpared(XH), rH && !XH) return hH("webgl_holdback");
        const GH = HH.intelGen9(zH);
        HH.storeIntelGen9Verdict(GH);
        const YH = GH ? null : HH.gpuClassWebGlArm(zH);
        HH.storeGpuClassVerdict(null !== YH && void 0 !== YH && YH);
        const uH = HH.webGlDefaultFamily(EH);
        if (HH.storeWebGlDefaultFamilyVerdict(uH), AH && HH.oldIntelDriver(zH)) return hH("old_intel_driver", EH);
        if ("default" === LH && GH && HH.intelGen9OnWebGl()) return hH("intel_gen9", EH);
        if ("default" === LH && null !== YH && HH.gpuClassOnWebGl(YH)) return hH("gpu_class_webgl", EH);
        if ("default" === LH && uH) return hH("gpu_wasm_arm", EH);
        return hH(CH ? "compatibility_mode" : "none", EH)
      }(HH);
      if (dH(BH.reason)) return {
        backend: "webgpu",
        ...BH
      };
      if ("webgl1" !== HH.override() && HH.webgl2()) return {
        backend: "webgl",
        ...BH
      };
      const LH = HH.webgl1();
      return 0 === LH.length ? {
        backend: "webgl1",
        ...BH
      } : {
        missing: LH
      }
    }

    function sH(HH, BH) {
      let {
        source: LH,
        asked: AH
      } = BH;
      return AH || "default" === LH ? (0, kH.i)(AH, HH.defaultCompatibility) : void 0
    }

    function JH(HH) {
      const BH = HH.override(),
        LH = HH.webGpuSetting(),
        AH = null === BH && !0 !== LH && HH.Cu(),
        rH = null !== BH || null !== LH || AH ? null : HH.claimed(),
        SH = null !== BH ? "override" : !0 === LH ? "setting" : AH ? "pack" : !1 === LH ? "setting" : null !== rH ? "claim" : "default",
        hH = function(HH) {
          return "override" === HH || "setting" === HH
        }(SH);
      if ("webgl" === BH || "webgl1" === BH || "webgl" === rH || "setting" === SH && !1 === LH) return {
        source: SH,
        asked: hH,
        refused: "not_requested"
      };
      if (!HH.gpu) return {
        source: SH,
        asked: hH,
        refused: "no_webgpu_api"
      };
      const tH = "default" === SH && HH.heldBack();
      return tH && !HH.windows() ? {
        source: SH,
        asked: hH,
        refused: "webgl_holdback"
      } : !hH && HH.offAfterLoss("pack" === SH) ? {
        source: SH,
        asked: hH,
        refused: tH ? "webgl_holdback" : "off_after_loss"
      } : {
        source: SH,
        asked: hH,
        heldBack: tH,
        gpu: HH.gpu
      }
    }

    function iH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...FH(),
          override: () => DH(!1)
        },
        BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GH.isWebKit,
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qH;
      try {
        if (!BH()) return !1;
        const AH = JH(HH);
        if (!("gpu" in AH) || AH.heldBack) return !1;
        const rH = "default" === AH.source ? jH(LH(), "apple", YH.siteUsed) : null;
        return null === rH || !HH.gpuClassOnWebGl(rH)
      } catch (AH) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", AH), !1
      }
    }
    let pH = !1;
    async function yH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FH();
      if (null === HH) return null;
      const LH = await aH(BH);
      return pH = !("missing" in LH) && "webgpu" === LH.backend && "claim" === LH.source, "missing" in LH ? LH : {
        ...LH,
        load: HH[LH.backend]
      }
    }
    async function HB(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FH().gpu,
        AH = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== HH.backend) return !1;
      const rH = zB(HH, BH, "indirectDraws", "off", "on");
      if (null !== rH) return rH;
      if (null !== HH.adapter && (0, MH.s)(HH.adapter, AH)) return !0;
      if (null === LH) return !1;
      try {
        var SH;
        const HH = await (0, VH.j)(LH.requestAdapter({
          powerPreference: "low-power"
        }).then((async HH => (null !== HH && await (0, PH.f)(HH), HH))), vB, `the low-power requestAdapter didn't settle in ${vB/1e3} s`);
        return (0, MH.s)(null !== (SH = null === HH || void 0 === HH ? void 0 : HH.info) && void 0 !== SH ? SH : {}, AH)
      } catch (hH) {
        return hH instanceof VH.e
      }
    }

    function BB(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, GH.pageOperatingSystem)();
      if ("webgpu" !== HH.backend) return !1;
      const rH = zB(HH, BH, "terrainFetch", "texture", "storage");
      return null !== rH ? rH : null !== HH.adapter && ((0, MH.k)(HH.adapter, LH) || (0, MH.g)(HH.adapter, AH))
    }

    function LB(HH, BH) {
      if ("webgpu" !== HH.backend) return !1;
      const LH = zB(HH, BH, "skyOrder", "early", "last");
      return null !== LH ? LH : null !== HH.adapter && (0, SH.g)(HH.adapter.vendor, HH.adapter.architecture) === gH
    }

    function AB(HH, BH) {
      if ("webgpu" !== HH.backend) return !1;
      const LH = zB(HH, BH, "uploadCopies", "off", "on");
      return null !== LH ? LH : null !== HH.adapter && "powervr_rogue" === (0, SH.g)(HH.adapter.vendor, HH.adapter.architecture)
    }

    function rB(HH, BH, LH) {
      if ("webgpu" !== HH.backend) return !1;
      const AH = zB(HH, BH, "sceneDepth", "off", "on");
      return null !== AH ? AH : null !== HH.adapter && (0, MH.n)(HH.adapter, LH)
    }

    function SB(HH, BH) {
      return "webgl" === HH.backend ? zB(HH, BH, "instancedTerrain", "1", "0") : null
    }

    function hB(HH, BH) {
      return "webgpu" !== HH.backend || BH && (null === HH.adapter || !(0, WH.H)(HH.adapter))
    }

    function tB(HH, BH, LH, AH) {
      const rH = new URLSearchParams(BH).get(LH),
        SH = null !== rH && void 0 !== rH ? rH : null === HH ? null : (0, zH.f)(LH);
      return null !== SH && AH(SH) ? (pH ||= null === rH && "webgpu" === (null === HH || void 0 === HH ? void 0 : HH.backend), SH) : null
    }

    function zB(HH, BH, LH, AH, rH) {
      const SH = tB(HH, BH, LH, (HH => HH === AH || HH === rH));
      return null === SH ? null : SH === AH
    }

    function CB(HH) {
      return null !== HH && "missing" in HH
    }

    function EB(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !YB(),
        LH = arguments.length > 2 ? arguments[2] : void 0;
      return BH ? function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.c,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const AH = "start_failed" === HH || "pipeline_failed" === HH,
            rH = (0, oH.e)(HH, LH),
            SH = BH.turnOffWebGpuAfterDeviceLoss(AH ? "visible" : (0, WH.m)((0, uH.k)()), AH, rH);
          return pH && (0, zH.x)("webgpuLoss"), BH.isWebGpuOffAfterLoss() && "webgpu" === ZH(QH.e.getItem(EH.g)) && QH.e.removeItem(EH.g), (0, tH.o)("webgpuloss") && (0, CH.b)((BH => {
            var LH;
            BH.noteWebGpuLoss("wasm", SH ? HH : `${HH}, which storage didn't keep`, null !== (LH = rH.message) && void 0 !== LH ? LH : null)
          })), SH
        } catch {
          return !1
        }
      }(HH, hH.c, LH) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const XB = "framePacing";

    function GB(HH, BH) {
      const LH = tB("webgpu" === (null === BH || void 0 === BH ? void 0 : BH.backend) ? BH : null, HH, XB, (HH => /^\d{1,9}$/.test(HH)));
      return null === LH ? void 0 : Number(LH)
    }

    function YB() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === ZH(new URLSearchParams(HH).get(EH.e))
      } catch {
        return !1
      }
    }

    function uB(HH) {
      return !!QB(HH) || HH instanceof Error && !(HH instanceof WebAssembly.RuntimeError) && HH.message.startsWith(`${TH.p.RenderSurfaceUnusable}:`)
    }

    function QB(HH) {
      const {
        name: BH,
        message: LH
      } = null !== HH && void 0 !== HH ? HH : {};
      return "InvalidStateError" === BH && "string" === typeof LH && LH.startsWith("GPUDevice.")
    }

    function WB(HH) {
      const BH = HH;
      return "function" === typeof BH.trH && "function" === typeof BH.zrH ? BH : null
    }

    function MB(HH) {
      return "function" === typeof HH.sW ? HH : null
    }
    const xB = "openRenderer";
    const vB = 5e3,
      PB = 15e3;

    function TB(HH, BH, LH, AH, rH, SH) {
      return (0, VH.j)(function(HH, BH, LH, AH, rH, SH) {
        const hH = (0, OH.g)(HH, BH, (() => HH.sW(LH, AH, rH, SH.indirectHangs, SH.storagePullBreaks, SH.splitPassBreaks, SH.earlySky, SH.instancedTerrain, SH.cellLight, SH.framesAhead, SH.webGpuRestores, SH.bufferCopiesCrash))),
          {
            firstVertex: tH
          } = SH;
        return void 0 === tH ? hH : hH.then((HH => ((0, bH.e)(LH, tH), HH)))
      }(HH, BH, LH, AH, rH, SH), PB, `${TH.p.RenderSurfaceUnusable}: the renderer didn't open in ${PB/1e3} s`, VB)
    }
    async function UB(HH, BH, LH, AH, rH, SH) {
      if ("function" !== typeof HH.GtH) throw new Error("this core has no set_renderer");
      const hH = await TB(BH, xB, LH, rH, AH, SH);
      try {
        HH.GtH(hH)
      } catch (tH) {
        throw VB(hH), tH
      }
    }

    function VB(HH) {
      try {
        HH.free()
      } catch {}
    }
  },
  42145: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    const AH = {
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
  42078: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => uH,
      g: () => QH,
      k: () => GH,
      o: () => XH
    });
    const AH = 2e3,
      rH = "unavailable";
    let SH = () => Promise.resolve().then((() => LH(1833))),
      hH = null,
      tH = null,
      zH = CH();

    function CH() {
      let HH = () => {};
      return {
        promise: new Promise((BH => {
          HH = () => {
            BH(null)
          }
        })),
        resolve: HH
      }
    }

    function EH() {
      if (null === hH) {
        const HH = SH();
        hH = HH, HH.then((BH => {
          hH === HH && (tH = BH)
        }), (() => {
          hH === HH && (hH = null)
        }))
      }
      return hH
    }

    function XH() {
      EH().catch((() => {}))
    }

    function GH() {
      zH.resolve()
    }

    function YH(HH, BH, LH, AH) {
      if (null === HH) return {
        errorKind: BH,
        fingerprint: rH,
        dedupe: `${BH}|${AH}`
      };
      const {
        fingerprint: SH
      } = HH.clientErrorKey(BH, LH, AH);
      return {
        errorKind: BH,
        fingerprint: SH,
        dedupe: SH
      }
    }

    function uH(HH, BH, LH, AH) {
      return null === tH ? AH ? (XH(), YH(null, HH, BH, LH)) : null : YH(tH, HH, BH, LH)
    }
    async function QH(HH, BH, LH) {
      let rH;
      const SH = new Promise((HH => {
        rH = setTimeout((() => {
          HH(null)
        }), AH)
      }));
      try {
        return YH(await Promise.race([EH(), SH, zH.promise]), HH, BH, LH)
      } catch {
        return YH(null, HH, BH, LH)
      } finally {
        clearTimeout(rH)
      }
    }
  },
  42075: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      BUILT_IN_ANIMATIONS_SITE: () => yH,
      CAMERA_DIRECTOR_SITE: () => SB,
      CORE_ERRORS_SITE: () => FH,
      EVENT_OVERFLOW_SITE: () => pH,
      FIRST_VIEW_SITE: () => LB,
      GraphicsLostError: () => BL,
      JOIN_SITE: () => wH,
      LEAVE_SITE: () => ZH,
      MAIN_THREAD_SITE: () => AB,
      MODEL_FEED_SITE: () => dH,
      MODEL_POOL_SITE: () => aH,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => zB,
      NON_FATAL_REPORTS_PER_SESSION: () => kB,
      PREVIEW_ANIMATIONS_SITE: () => iH,
      RENDER_RELOAD_SITE: () => JH,
      REQUEST_DEVICE_SITE: () => rB,
      TEXTURE_NAMES_SITE: () => sH,
      TEXTURE_PACK_FEED_SITE: () => HB,
      TEXTURE_PACK_SWAP_SITE: () => BB,
      TurnstilePageError: () => GL,
      WASM_LOAD_SITE: () => DH,
      countRenderLost: () => dL,
      crashError: () => KB,
      crashReportsSettled: () => FB,
      deviceLossFields: () => aB,
      deviceLossWords: () => FL,
      flushCrashReports: () => jB,
      joinFailureCode: () => YL,
      loadRecoveryCode: () => hL,
      lokiTransport: () => XB,
      modelFailureCode: () => PL,
      readTrap: () => iB,
      renderLoss: () => ZL,
      renderReloadMessage: () => DL,
      reportCameraDirectorFault: () => NL,
      reportCoreErrors: () => ZB,
      reportCrash: () => cB,
      reportDataLoadFailure: () => yL,
      reportDisconnect: () => xL,
      reportDroppedRequiredLimits: () => zL,
      reportEventOverflow: () => mL,
      reportFirstViewNoTerrain: () => cL,
      reportLightFault: () => fL,
      reportLoadRecovery: () => tL,
      reportLoadReload: () => EL,
      reportMainStall: () => eL,
      reportMemoryShed: () => KL,
      reportModelFailure: () => TL,
      reportModelPoolFailure: () => UL,
      reportModelsModuleRetry: () => VL,
      reportNoBackendRetry: () => rL,
      reportPageJoinFailure: () => QL,
      reportReconnectGaveUp: () => vL,
      reportRenderRecovery: () => gB,
      reportRenderReload: () => JL,
      reportReplayFault: () => gL,
      reportStaleBuildReload: () => BA,
      reportStoppedCore: () => yB,
      reportTerrainTextureFailure: () => iL,
      reportTexturePackFeedLoadFailure: () => bL,
      reportTexturePackKeptOut: () => kL,
      reportUnstreamedCoreLoad: () => XL,
      reportUnusedSeat: () => ML,
      reportWorkerLost: () => oL,
      reportWorkerStartTimeout: () => qL,
      reportWorldgenGaveUp: () => lL,
      reportWorldgenLoadFailure: () => OL,
      reportWorldgenWorkerLost: () => IL,
      resetCrashReports: () => DB,
      setCrashAdPreload: () => PB,
      setCrashBackend: () => vB,
      setCrashScreen: () => WB,
      setCrashTransport: () => uB,
      showCrash: () => pB,
      showJoinFailure: () => uL,
      showUnsupported: () => LL,
      unknownSkyWords: () => wB,
      unsupportedCrashScreen: () => AL
    });
    var AH = LH(1005),
      rH = LH(1306),
      SH = LH(168),
      hH = LH(1297),
      tH = LH(1260),
      zH = LH(241),
      CH = LH(1837),
      EH = LH(4701),
      XH = LH(42078),
      GH = LH(5265),
      YH = LH(42082),
      uH = LH(34828),
      QH = LH(3296),
      WH = LH(34825),
      MH = LH(39689),
      xH = LH(120),
      vH = LH(114),
      PH = LH(3299),
      TH = LH(37366),
      UH = LH(1863),
      VH = LH(42092),
      OH = LH(41911),
      bH = LH(42006),
      kH = LH(42010),
      mH = LH(37358),
      oH = LH(3168),
      IH = LH(3171),
      fH = LH(42117),
      lH = LH(42136),
      KH = LH(42142),
      cH = LH(37702),
      eH = LH(642),
      qH = LH(3585),
      gH = LH(37023),
      NH = LH(42049),
      RH = LH(37037),
      jH = LH(42150);
    const nH = "[bloxd-wasm-client]",
      FH = "coreErrors",
      DH = "wasmLoad",
      wH = "join",
      ZH = "leave",
      dH = "modelFeed",
      aH = "modelWorkerPool",
      sH = "textureNames",
      JH = "renderReload",
      iH = "previewAnimations",
      pH = "eventOverflow",
      yH = "builtInAnimations",
      HB = "texturePackFeed",
      BB = "texturePackSwap",
      LB = "firstView",
      AB = "mainThread",
      rB = "requestDevice",
      SB = "cameraDirector",
      hB = 300,
      tB = 64,
      zB = 8;
    let CB = 0;
    const EB = new Set,
      XB = (HH, BH) => {
        const LH = TB[HH.kind],
          AH = {
            backend: MB,
            adPreload: xB
          };
        if (null === LH) return void GB(HH, BH, AH, null);
        const rH = (0, XH.c)(LH, HH.message, HH.code, HH.fatal);
        null === rH ? RB("Loki", (async () => {
          GB(HH, BH, AH, await (0, XH.g)(LH, HH.message, HH.code))
        })) : GB(HH, BH, AH, rH)
      };

    function GB(HH, BH, LH, AH) {
      let {
        backend: rH,
        adPreload: SH
      } = LH;
      const {
        kind: hH,
        code: zH,
        site: EH,
        fatal: XH,
        details: GH
      } = HH;
      if (!XH)
        if (null === AH || (0, CH.d)(AH.errorKind) || EB.has(AH.dedupe)) {
          if (CB >= zB) return;
          CB++
        } else EB.add(AH.dedupe);
      const YH = {
        ...GH,
        kind: hH,
        code: zH,
        site: EH,
        fatal: String(XH),
        backend: rH
      };
      SH && (YH.adPreload = "true"), null !== AH && (YH.errorKind = AH.errorKind, YH.fingerprint = AH.fingerprint), BH instanceof Error && "string" === typeof BH.stack && (YH.causeStack = BH.stack.slice(0, 2e3)), (0, tH.TQ)(KB(HH, BH), YH)
    }
    let YB = XB;

    function uB(HH) {
      const BH = YB;
      return YB = HH, BH
    }
    let QB = () => {};

    function WB(HH) {
      const BH = QB;
      return QB = HH, BH
    }
    let MB = "unpicked",
      xB = !1;

    function vB(HH) {
      MB = HH
    }

    function PB(HH) {
      xB = HH
    }
    const TB = {
        crash: "wasm_load",
        unsupported: "wasm_load",
        model: "wasm_load",
        join: "matchmake_failed",
        pageJoin: null,
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
      UB = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      VB = new Set(["unstreamedLoad"]),
      OB = new Set(["linkCensus", "linksReadAfterView"]);
    let bB = !1;
    const kB = 20,
      mB = new Map;
    let oB = 0,
      IB = 0;
    const fB = new Set,
      lB = new Set;

    function KB(HH, BH) {
      const LH = Object.assign(new Error(`${HH.code}: ${HH.message}`), {
        name: "WasmClientCrash",
        cause: null !== BH && void 0 !== BH ? BH : void 0
      });
      return BH instanceof Error && BH.stack && (LH.stack = BH.stack), LH
    }

    function cB(HH) {
      var BH, AH;
      const {
        kind: rH,
        code: SH,
        site: hH,
        fatal: tH,
        message: zH,
        error: CH
      } = HH, EH = !1 !== HH.toTransport && !VB.has(rH), XH = !tH && EH && !OB.has(rH), GH = {
        kind: rH,
        code: SH,
        site: hH,
        fatal: tH,
        message: zH,
        details: null !== (BH = HH.details) && void 0 !== BH ? BH : {}
      }, YH = `${SH}@${hH}${void 0===HH.instance?"":`#${HH.instance}`}${tH?"!":""}`, uH = (null !== (AH = mB.get(YH)) && void 0 !== AH ? AH : 0) + 1;
      if (mB.set(YH, uH), void 0 !== HH.countAs && 1 === uH && qB(HH.countAs), uH > 1 ? 0 === (uH & uH - 1) && NB((() => {
          console.warn(`${nH} ${SH} at ${hH} reported ${uH} times`)
        })) : XH && oB >= kB ? NB((() => {
          console.warn(`${nH} ${rH} ${SH} at ${hH}: ${zH} (not sent: the session's ${kB} went)`, GH.details, null !== CH && void 0 !== CH ? CH : "")
        })) : (XH && oB++, function(HH, BH, AH, rH) {
          var SH, hH;
          const {
            kind: tH,
            code: zH,
            site: CH,
            fatal: EH,
            message: XH,
            details: GH
          } = HH;
          NB((() => {
            (EH ? console.error : console.warn)(`${nH} ${tH} ${zH} at ${CH}: ${XH}`, GH, null !== BH && void 0 !== BH ? BH : "")
          }));
          const YH = UB[tH],
            uH = null !== (SH = null !== (hH = TB[tH]) && void 0 !== hH ? hH : YH) && void 0 !== SH ? SH : null;
          rH || null === uH || eB((async () => {
            const {
              reportCappedWasmFailure: BH,
              reportUncappedWasmFailure: AH,
              reportWasmFailure: rH
            } = await LH.e(212).then((() => LH(34821))), SH = OB.has(tH) ? AH : void 0 === YH ? rH : BH, hH = function(HH) {
              let {
                kind: BH,
                site: LH,
                fatal: AH,
                details: rH
              } = HH;
              if ("crash" !== BH) return;
              return {
                ...rH,
                site: LH,
                fatal: String(AH)
              }
            }(HH);
            void 0 === hH ? SH(uH, XH, zH) : SH(uH, XH, zH, hH)
          }));
          AH && NB((() => {
            YB(HH, BH)
          }))
        }(GH, CH, EH, void 0 !== HH.countAs)), tH) {
        var QH;
        const BH = null !== (QH = HH.screen) && void 0 !== QH ? QH : {
          text: (0, cH.e)(GH, !0),
          reload: !0,
          stillBlocked: null
        };
        NB((() => {
          QB(BH)
        }))
      }
      return GH
    }

    function eB(HH) {
      RB("counts", (async () => {
        const {
          peekVisitSessionId: BH
        } = await Promise.resolve().then((() => LH(656)));
        null !== BH() && (await HH(), bB = !0)
      }))
    }

    function qB(HH) {
      fB.has(HH.errorKind) || (fB.add(HH.errorKind), eB((async () => {
        const {
          reportClientError: BH
        } = await Promise.resolve().then((() => LH(1826)));
        BH(HH.errorKind, HH.error, HH.code, !0, void 0, HH.fields)
      })))
    }

    function gB(HH, BH) {
      RB("render_lost", (async () => {
        const [{
          reportClientError: AH
        }, {
          CAPPED_COUNTS_VISIT_CAP: rH
        }] = await Promise.all([Promise.resolve().then((() => LH(1826))), LH.e(212).then((() => LH(34821)))]);
        AH("render_lost", BH, HH, !0, rH)
      }))
    }

    function NB(HH) {
      try {
        HH()
      } catch (BH) {
        try {
          console.warn(`${nH} could not send a report`, BH)
        } catch {}
      }
    }

    function RB(HH, BH) {
      try {
        const LH = BH().catch((BH => {
          console.warn(`${nH} could not send the report to ${HH}`, BH)
        })).finally((() => {
          lB.delete(LH)
        }));
        lB.add(LH)
      } catch (LH) {
        console.warn(`${nH} could not send the report to ${HH}`, LH)
      }
    }
    async function jB(HH) {
      let BH;
      (0, XH.k)();
      const LH = new Promise((LH => {
        BH = setTimeout(LH, HH)
      }));
      await Promise.race([nB(), LH]), clearTimeout(BH)
    }
    async function nB() {
      if (await Promise.allSettled([...lB]), bB) try {
        const {
          flushClientAnalyticsEvents: HH
        } = await Promise.resolve().then((() => LH(1497)));
        await HH()
      } catch (HH) {
        console.warn(`${nH} could not send the counts`, HH)
      }
    }
    async function FB() {
      for (; lB.size > 0;) await Promise.allSettled([...lB])
    }

    function DB() {
      mB.clear(), oB = 0, bB = !1, CB = 0, EB.clear(), IB = 0, fB.clear(), (0, YH.v)()
    }

    function wB(HH) {
      const BH = "object" === typeof HH && null !== HH ? HH.type : HH;
      return "string" !== typeof BH ? "sky not named" : `sky ${JSON.stringify(Array.from(BH).slice(0,tB).join(""))}`
    }

    function ZB(HH, BH, LH, AH) {
      IB += BH;
      for (const {
          code: tH,
          detail: zH
        }
        of HH) {
        var rH, SH, hH;
        const HH = (0, GH.Zd)(tH),
          BH = (0, YH.d)(tH, zH),
          CH = null === AH || void 0 === AH ? void 0 : AH(tH, zH),
          EH = void 0 !== (null === BH || void 0 === BH ? void 0 : BH.gpuDetails),
          XH = EH ? null === (rH = (0, vH.z)()) || void 0 === rH ? void 0 : rH.renderer : void 0,
          QH = EH ? ` ${(0,YH.n)()}` : "",
          WH = Array.from([XH && `gpu ${(0,uH.c)(XH)}`, CH].filter(Boolean).join("; ")).slice(0, hB).join(""),
          MH = `core error ${HH}${null!==(SH=null===BH||void 0===BH?void 0:BH.words)&&void 0!==SH?SH:""}${QH}${WH?`: ${WH}`:""}`,
          xH = {
            errorCode: String(tH),
            detail: String(zH),
            droppedBefore: String(IB),
            wasmBuild: LH.wasm,
            clientVersion: LH.client,
            ...null === BH || void 0 === BH ? void 0 : BH.gpuDetails,
            ...aB(tH, zH)
          };
        null !== BH && (0, YH.s)(BH) ? NB((() => {
          console.warn(`${nH} coreError CORE-${HH}: ${MH} (not sent: the session's render warnings of its kind went)`, xH)
        })) : dB(tH) ? NB((() => {
          console.warn(`${nH} coreError CORE-${HH}: ${MH} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, xH)
        })) : cB({
          kind: JB(tH, zH),
          code: `CORE-${HH}`,
          site: FH,
          fatal: !1,
          message: MH,
          details: xH,
          instance: null !== (hH = null === BH || void 0 === BH ? void 0 : BH.instance) && void 0 !== hH ? hH : sB(tH, zH)
        })
      }
    }

    function dB(HH) {
      if (HH !== GH.F.AudioUnknownSound && HH !== GH.F.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: BH,
        lobbyName: LH
      } = (0, hH.c)();
      return null !== BH && (!!(0, AH.l)(BH) || HH === GH.F.AudioUnknownSound && (0, rH.j)(BH, LH))
    }

    function aB(HH, BH) {
      if (HH !== GH.F.RenderDeviceLost) return;
      const LH = BH >>> GH.P.LINKS_IN_FLIGHT_SHIFT & GH.P.LINKS_IN_FLIGHT_MAX,
        AH = BH >>> GH.P.OLDEST_LINK_SHIFT & GH.P.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(LH),
        oldestLinkMs: String(AH * GH.P.OLDEST_LINK_UNIT_MS)
      }
    }

    function sB(HH, BH) {
      return HH === GH.F.RenderDeviceLost && 0 !== (BH & GH.P.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function JB(HH, BH) {
      return HH === GH.F.JobsHeapGaveUp ? "meshHeap" : (0, YH.k)(HH, BH) ? "linksReadAfterView" : (0, YH.g)(HH, BH) ? "linkCensus" : "coreError"
    }

    function iB(HH) {
      return (0, gH.j)(HH instanceof NH.e ? HH.trap : HH, oH.G, oH.gb)
    }

    function pB(HH, BH, LH) {
      return HL(HH, BH, LH, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function yB(HH, BH, LH) {
      return HL(HH, BH, LH, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function HL(HH, BH, LH, AH, rH) {
      let {
        memoryDetails: SH = {},
        memoryStep: hH
      } = AH;
      const {
        code: tH,
        details: zH,
        message: CH
      } = (0, VH.J)(HH, BH), EH = [];
      Object.assign(zH, (0, RH.f)(HH.error)), null !== LH && (zH.trapKind = LH.kind, null !== LH.panic && (zH.panic = (0, gH.i)(LH.panic)), LH.refusedBytes > 0 && (zH.refusedAllocation = String(LH.refusedBytes)), EH.push((0, gH.m)(LH.kind, LH.refusedBytes))), void 0 !== hH && EH.push(`memory=${hH}`);
      const XH = HH.error instanceof BL;
      return XH && (0, eH.G)(), cB({
        kind: "crash",
        code: tH,
        site: HH.site,
        fatal: rH,
        message: [...EH, CH].join("; "),
        details: {
          ...zH,
          ...SH,
          ...void 0 === hH ? {} : {
            memoryStep: hH
          }
        },
        error: HH.error,
        screen: XH ? AL("graphicsLost") : void 0
      })
    }
    class BL extends Error {}

    function LL(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return "download" !== HH && (0, eH.G)(), cB({
        kind: "unsupported",
        code: BH,
        site: DH,
        fatal: !0,
        message: LH,
        details: {
          ...AH,
          cause: HH,
          status: BH
        },
        screen: AL(HH)
      })
    }

    function AL(HH) {
      const BH = (0, SH.s)(xH.siteUsed),
        LH = (0, cH.r)(HH, BH),
        AH = "noContext" === HH || "graphicsLost" === HH ? (0, cH.l)(HH, BH) : null;
      return {
        text: LH,
        reload: "general:tryAgain" === LH.confirm,
        stillBlocked: AH
      }
    }

    function rL(HH, BH, LH) {
      return cB({
        kind: "recovered",
        code: "reprobed" === HH ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: DH,
        fatal: !1,
        message: LH,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: BH,
          step: HH
        }
      })
    }
    const SL = 9;

    function hL(HH) {
      const BH = "recovered" === HH.outcome ? "recovered" : "gave_up",
        LH = "load" === HH.step ? `wasm_load_${BH}${HH.oom?"_oom":""}` : `no_context_${BH}`;
      return "recovered" === HH.outcome ? `${LH}_t${Math.min(HH.tries,SL)}` : "load" === HH.step ? `${LH}_${HH.stage}` : LH
    }

    function tL(HH) {
      const {
        step: BH,
        outcome: LH,
        tries: AH,
        detail: rH,
        details: SH = {}
      } = HH, hH = "load" === HH.step ? {
        stage: HH.stage,
        ...HH.oom ? {
          oom: "true"
        } : {}
      } : {};
      return cB({
        kind: "recovered",
        code: hL(HH),
        site: DH,
        fatal: !1,
        message: rH,
        details: {
          ...SH,
          step: BH,
          outcome: LH,
          tries: String(AH),
          ...hH
        }
      })
    }

    function zL(HH) {
      return cB({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: rB,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: HH.join(",")
        }
      })
    }
    const CL = "reload=wasm";

    function EL(HH, BH, LH) {
      return cB({
        kind: "unsupported",
        code: BH,
        site: DH,
        fatal: !1,
        message: [CL, LH].join("; "),
        details: {
          cause: HH,
          status: BH,
          fallback: "wasmReload"
        }
      })
    }

    function XL() {
      const {
        code: HH,
        message: BH
      } = qH.e;
      return cB({
        kind: "unstreamedLoad",
        code: HH,
        site: DH,
        fatal: !1,
        message: BH
      })
    }
    class GL extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function YL(HH) {
      return HH instanceof bH.n ? 0 === HH.code ? "JOIN-matchmake" : `JOIN-${HH.code}` : HH instanceof bH.d ? 0 === HH.code ? `JOIN-${HH.stage}` : `JOIN-${HH.stage}-${HH.code}` : HH instanceof OH.d ? "JOIN-gameCode" : HH instanceof GL ? "JOIN-turnstilePage" : HH instanceof bH.y ? "JOIN-trafficCheck" : HH instanceof TH.c ? "JOIN-timeout" : "JOIN-network"
    }

    function uL(HH, BH) {
      const LH = (0, RH.k)(HH),
        AH = {
          wasmBuild: BH.wasm,
          clientVersion: BH.client
        },
        rH = HH instanceof GL ? {
          text: (0, cH.n)(),
          reload: !1,
          stillBlocked: null
        } : void 0,
        SH = (0, kH.g)(HH),
        hH = "expected" !== SH;
      return cB({
        kind: "join",
        code: YL(HH),
        site: wH,
        fatal: !0,
        message: LH,
        details: AH,
        error: HH,
        screen: rH,
        toTransport: hH,
        instance: SH
      })
    }

    function QL(HH, BH, LH) {
      var AH;
      const rH = (0, kH.g)(HH),
        SH = {
          cause: (HH instanceof bH.d || HH instanceof bH.n) && null !== (AH = HH.serverText) && void 0 !== AH ? AH : "",
          sinceJoinStart: (0, PH.d)(LH.sinceJoinStartMs),
          game: LH.game,
          ...(0, PH.i)(),
          wasmBuild: BH.wasm,
          clientVersion: BH.client
        };
      return cB({
        kind: "pageJoin",
        code: YL(HH),
        site: wH,
        fatal: !1,
        message: (0, RH.k)(HH),
        details: SH,
        error: HH,
        toTransport: "unrecognised" === rH,
        instance: rH
      })
    }
    const WL = {
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

    function ML(HH, BH) {
      let {
        unused: LH,
        answered: AH,
        heldMs: rH
      } = HH;
      const {
        code: SH,
        message: hH
      } = WL[LH], tH = {
        unused: LH,
        answered: String(AH),
        heldMs: String(rH),
        wasmBuild: BH.wasm,
        clientVersion: BH.client
      };
      return cB({
        kind: "seat",
        code: SH,
        site: wH,
        fatal: !1,
        message: hH,
        details: tH
      })
    }

    function xL(HH, BH, LH) {
      var AH;
      let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (AH = HH.name) && void 0 !== AH ? AH : String(HH.code);
      const SH = {
          closeCode: String(HH.code),
          recognised: String(null !== HH.name),
          closeReason: LH.closeReason,
          sinceJoined: (0, PH.d)(LH.sinceJoinedMs),
          game: LH.game,
          ...(0, PH.i)(),
          wasmBuild: BH.wasm,
          clientVersion: BH.client
        },
        hH = null === HH.name && !(0, PH.e)(HH.code);
      return cB({
        kind: "disconnect",
        code: rH,
        site: ZH,
        fatal: !1,
        message: "Left room",
        details: SH,
        toTransport: hH
      })
    }

    function vL(HH, BH) {
      const LH = {
        ...(0, QH.f)(HH),
        wasmBuild: BH.wasm,
        clientVersion: BH.client
      };
      return cB({
        kind: "disconnect",
        code: `reconnect-${HH.reason}`,
        site: wH,
        fatal: !1,
        message: "Reconnect failed",
        details: LH
      })
    }

    function PL(HH) {
      return HH.error instanceof IH.g ? `MODEL-${HH.error.status}` : HH.error instanceof fH.m ? "MODEL-ring" : "MODEL-network"
    }

    function TL(HH, BH) {
      const LH = PL(HH),
        AH = `model file ${HH.file} ${HH.startup?"(startup) ":""}could not load`,
        rH = {
          file: String(HH.file),
          url: HH.url,
          wasmBuild: BH.wasm,
          clientVersion: BH.client
        };
      return cB({
        kind: HH.startup ? "model" : "modelLate",
        code: LH,
        site: dH,
        fatal: HH.startup,
        message: AH,
        details: rH,
        error: HH.error
      })
    }

    function UL(HH, BH) {
      const LH = {
        wasmBuild: BH.wasm,
        clientVersion: BH.client
      };
      return cB({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: aH,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: LH,
        error: HH
      })
    }

    function VL(HH, BH, LH) {
      const AH = {
        delayMs: String(BH),
        wasmBuild: LH.wasm,
        clientVersion: LH.client
      };
      HH instanceof IH.g && (AH.status = String(HH.status));
      return cB({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: aH,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: AH,
        error: HH
      })
    }

    function OL(HH, BH) {
      const LH = {
        wasmBuild: BH.wasm,
        clientVersion: BH.client
      };
      return cB({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: VH.E,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: LH,
        error: HH
      })
    }

    function bL(HH, BH) {
      const LH = {
        wasmBuild: BH.wasm,
        clientVersion: BH.client
      };
      return cB({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: HB,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: LH,
        error: HH
      })
    }

    function kL(HH, BH, LH, AH) {
      const rH = {
        wasmBuild: AH.wasm,
        clientVersion: AH.client
      };
      return cB({
        kind: "texturePackKeptOut",
        code: (0, EH.g)("wasm", HH, BH),
        site: BB,
        fatal: !1,
        message: BH.detail,
        details: rH,
        error: LH
      })
    }

    function mL(HH, BH) {
      const {
        frames: LH,
        acks: AH,
        mask: rH,
        outcome: SH
      } = HH, hH = {
        frames: String(LH),
        acks: String(AH),
        mask: String(rH),
        outcome: null !== SH && void 0 !== SH ? SH : "resynced",
        wasmBuild: BH.wasm,
        clientVersion: BH.client
      };
      return cB({
        kind: "recovered",
        code: "rejoined" === SH ? "CORE-eventOverflowRejoin" : "failed" === SH ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: pH,
        fatal: !1,
        message: `the event buffer refused records in ${LH} frames`,
        details: hH
      })
    }

    function oL(HH, BH, LH) {
      return cB({
        kind: "recovered",
        code: "CORE-workerLost",
        site: HH,
        fatal: !1,
        message: `a ${HH} worker was lost`,
        details: {
          reason: BH,
          wasmBuild: LH.wasm,
          clientVersion: LH.client
        }
      })
    }

    function IL(HH, BH, LH, AH) {
      const rH = {
          reason: HH,
          pageBuild: AH.build,
          pageAgeMin: String(Math.floor(AH.ageMs / 6e4)),
          wasmBuild: LH.wasm,
          clientVersion: LH.client
        },
        SH = BH ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return cB({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: VH.E,
        fatal: !1,
        message: SH,
        details: rH
      })
    }

    function fL(HH, BH, LH) {
      const AH = {
        wasmBuild: LH.wasm,
        clientVersion: LH.client
      };
      return cB({
        kind: "recovered",
        code: HH,
        site: VH.p,
        fatal: !1,
        message: BH,
        details: AH
      })
    }

    function lL(HH, BH) {
      const LH = {
        lastReason: HH,
        wasmBuild: BH.wasm,
        clientVersion: BH.client
      };
      return cB({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: VH.E,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: LH
      })
    }

    function KL(HH, BH, LH) {
      return cB({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: VH.n,
        fatal: !1,
        message: `${(0,mH.z)(HH)}: the session shed load`,
        details: {
          cause: HH,
          ...BH,
          wasmBuild: LH.wasm,
          clientVersion: LH.client
        }
      })
    }

    function cL(HH, BH, LH, AH) {
      var rH, SH;
      const hH = (0, YH.p)(),
        tH = {
          game: HH,
          cause: BH,
          census: null === LH ? "none" : JSON.stringify(LH),
          gpu: null !== (rH = null === (SH = (0, vH.z)()) || void 0 === SH ? void 0 : SH.renderer) && void 0 !== rH ? rH : "",
          renderWarned: String(hH),
          browser: (0, YH.n)(),
          wasmBuild: AH.wasm,
          clientVersion: AH.client
        },
        zH = `first view drew no whole terrain in ${lH.g/1e3} s, ${BH}${hH?", render warned":""}`;
      return cB({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: LB,
        fatal: !1,
        message: zH,
        details: tH
      })
    }

    function eL(HH, BH, LH, AH, rH) {
      const SH = (0, WH.h)(),
        hH = (0, WH.e)(HH, BH, LH, AH, SH),
        tH = {
          gpuModel: SH,
          wasmBuild: rH.wasm,
          clientVersion: rH.client
        };
      return cB({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: AB,
        fatal: !1,
        message: hH,
        details: tH
      })
    }

    function qL(HH, BH, LH) {
      return cB({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: HH,
        fatal: !1,
        message: `a ${HH} worker did not start`,
        details: {
          waitedMs: String(Math.round(BH)),
          wasmBuild: LH.wasm,
          clientVersion: LH.client
        }
      })
    }

    function gL(HH, BH, LH) {
      return cB({
        kind: "recovered",
        code: "CORE-replayFault",
        site: HH,
        fatal: !1,
        message: `the replay's ${HH} failed`,
        details: {
          wasmBuild: LH.wasm,
          clientVersion: LH.client
        },
        error: BH
      })
    }

    function NL(HH, BH) {
      const LH = {
          wasmBuild: BH.wasm,
          clientVersion: BH.client
        },
        AH = HH instanceof Error ? HH.message : String(HH);
      return cB({
        kind: "recovered",
        code: "CORE-cameraDirector",
        site: SB,
        fatal: !1,
        message: "the scripted camera's director threw",
        details: LH,
        instance: AH,
        error: HH
      })
    }
    const RL = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function jL(HH) {
      if (0 === HH) return "none";
      const BH = [60, 600, 3600].find((BH => HH < BH));
      return void 0 === BH ? "ge3600" : `lt${BH}`
    }

    function nL(HH, BH) {
      return null === HH ? "unbound" : (0, MH.f)(BH - HH)
    }

    function FL(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (HH & GH.P.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (HH & GH.P.LINKS_RUNNING) ? "links running" : "", `frames ${(0,uH.c)(jL(HH&GH.P.FRAMES))}`, `up ${(0,uH.c)(nL(BH,LH))}`].filter(Boolean).join(", ")
    }

    function DL(HH, BH, LH) {
      const AH = "lost" === BH && void 0 !== LH ? ` (${LH})` : "";
      return `the ${HH} ${RL[BH]}${AH}`
    }
    const wL = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function ZL(HH, BH, LH, AH) {
      var rH;
      let {
        restoreLost: SH = !1,
        adapterRemembered: hH = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, tH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const zH = null === LH || void 0 === LH ? void 0 : LH.message,
        CH = "pipeline_failed" === BH ? BH : LH instanceof UH.e ? "timeout" : (0, MH.p)("frames_refused" === BH, "string" === typeof zH ? zH : ""),
        EH = null === AH.boundAtMs ? "unbound" : `up${(0,MH.e)(tH-AH.boundAtMs)}`,
        XH = null === AH.adapter ? "no adapter" : (0, MH.l)(AH.adapter),
        GH = `${!0===AH.indirectHangs?" ih":""}${!0===AH.restoresSkipped?" nr":""}${SH?" rl":""}${hH?" ar":""}`,
        YH = `${CH} ${(0,UH.h)()?"hidden":"visible"} ${EH}${GH} ${XH}`;
      if ("webgpu" !== HH || "lost" !== BH && "frames_refused" !== BH) return {
        detail: YH,
        count: void 0
      };
      return {
        detail: YH,
        count: {
          errorKind: "render_lost",
          error: new Error(YH),
          code: (0, MH.r)(CH, null !== (rH = AH.boundAtMs) && void 0 !== rH ? rH : tH, tH).code,
          fields: {
            renderBackend: jH.b.webgpu
          }
        }
      }
    }

    function dL(HH, BH, LH) {
      const {
        count: AH
      } = ZL("webgpu", HH, BH, LH);
      void 0 !== AH && qB(AH)
    }
    const aL = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function sL(HH) {
      var BH;
      return null !== (BH = HH instanceof Error ? HH.reason : void 0) && void 0 !== BH ? BH : ""
    }

    function JL(HH, BH, AH) {
      var rH, SH, hH, tH, CH;
      let {
        from: EH,
        cause: XH = "lost",
        restoreLost: GH = !1,
        adapterRemembered: QH = !1,
        error: WH,
        context: vH = wL,
        session: PH = aL
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: UH,
        count: VH
      } = ZL(HH, XH, WH, vH, {
        restoreLost: GH,
        adapterRemembered: QH
      }, TH), OH = {
        reloadFrom: null !== EH && void 0 !== EH ? EH : "",
        losses: String(BH),
        cause: XH,
        detail: UH,
        vendor: null !== (rH = null === (SH = vH.adapter) || void 0 === SH ? void 0 : SH.vendor) && void 0 !== rH ? rH : "",
        architecture: null !== (hH = null === (tH = vH.adapter) || void 0 === tH ? void 0 : tH.architecture) && void 0 !== hH ? hH : "",
        indirectHangs: String(vH.indirectHangs),
        restoresSkipped: String(vH.restoresSkipped),
        restoreLost: String(GH),
        adapterRemembered: String(QH),
        lossReason: sL(WH),
        samples: String(PH.samples),
        sunShadows: String(PH.sunShadows),
        renderDistance: String(PH.renderDistance),
        gpuFamily: null !== (CH = (0, zH.e)()) && void 0 !== CH ? CH : "",
        browser: (0, YH.n)(),
        siteUsed: xH.siteUsed,
        wasmBuild: AH.wasm,
        clientVersion: AH.client
      }, bH = "webgpu" !== HH && void 0 !== EH ? function(HH, BH, LH, AH) {
        return `: ${HH}, ${BH?"restore lost":"not restored"}, up ${(0,uH.c)(nL(LH,AH))}`
      }(EH, GH, vH.boundAtMs, TH) : "", kH = `${DL(HH,XH)}${bH}`, mH = cB({
        kind: "recovered",
        code: "CORE-renderLost",
        site: JH,
        fatal: !1,
        message: kH,
        details: OH,
        error: WH,
        countAs: VH
      });
      return RB("ga", (async () => {
        const {
          logError: BH
        } = await Promise.resolve().then((() => LH(3209))), AH = `${MH.d["webgpu"===HH?"WebGPU":"WebGL2"]}\n Error: ${UH}`;
        BH("warning", AH), BH("error", AH)
      })), mH
    }

    function iL(HH, BH) {
      var LH, AH;
      const rH = null === HH.name ? "TEXTURE-sources" : null === HH.url ? "TEXTURE-nourl" : HH.error instanceof KH.c ? `TEXTURE-${HH.error.status}` : "TEXTURE-network",
        SH = null === HH.name ? "terrain textures could not load" : `terrain texture ${HH.name} could not load`,
        hH = {
          texture: null !== (LH = HH.name) && void 0 !== LH ? LH : "",
          url: null !== (AH = HH.url) && void 0 !== AH ? AH : "",
          wasmBuild: BH.wasm,
          clientVersion: BH.client
        };
      return cB({
        kind: "terrainTexture",
        code: rH,
        site: VH.B,
        fatal: !1,
        message: SH,
        details: hH,
        error: HH.error
      })
    }
    const pL = {
      previewAnimations: {
        site: iH,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: yH,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function yL(HH, BH, LH, AH) {
      const {
        site: rH,
        prefix: SH,
        name: hH
      } = pL[HH], {
        stage: tH,
        error: zH
      } = LH;
      return cB({
        kind: HH,
        code: "decode" === tH ? null === zH ? `${SH}-decode` : `${SH}-trap` : zH instanceof IH.g ? `${SH}-${zH.status}` : `${SH}-network`,
        site: rH,
        fatal: !1,
        message: "decode" === tH ? `${hH} did not decode` : `${hH} could not load`,
        details: {
          url: BH,
          wasmBuild: AH.wasm,
          clientVersion: AH.client
        },
        error: zH
      })
    }
    const HA = "staleBuild";

    function BA(HH, BH, LH) {
      const AH = {
          failedSite: HH.site,
          url: HH.url,
          from: HH.from,
          sameBuild: String(HH.from === BH),
          reloadMs: String(Math.max(0, Date.now() - HH.at)),
          wasmBuild: LH.wasm,
          clientVersion: LH.client
        },
        rH = `reloaded into a newer build after ${HH.site} failed to load: ${HH.error}`;
      return cB({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: HA,
        fatal: !1,
        message: rH,
        details: AH
      })
    }
  },
  42136: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      g: () => rH,
      j: () => hH
    });
    var AH = LH(5268);
    const rH = 3e4;
    class SH {
      constructor(HH) {
        this.XX = HH, this.waitedMs = 0, this.lastMs = null
      }
      frame(HH, BH) {
        if (BH) return !0;
        const LH = null === this.lastMs ? 0 : HH - this.lastMs;
        return this.lastMs = HH, LH <= 900 && (this.waitedMs += LH), !(this.waitedMs < rH) && (this.XX(), !0)
      }
    }

    function hH(HH, BH) {
      return 0 === (HH & AH.$.ChunkRequested) ? "no_chunk_request" : 0 === (HH & AH.$.ChunkStored) ? "chunk_not_stored" : 0 === (HH & AH.$.MeshLanded) ? "not_meshed" : null === BH ? "no_frame_drawn" : 0 === BH.terrainParts ? "no_terrain_parts" : BH.terrainCompiling > 0 ? "terrain_compiling" : BH.terrainOpaque + BH.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  41911: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      f: () => MH,
      i: () => QH,
      j: () => WH,
      m: () => GH,
      n: () => YH,
      r: () => EH,
      v: () => XH,
      x: () => uH
    });
    class AH extends Error {
      constructor(HH) {
        super(`the join's code did not load: ${HH instanceof Error?HH.message:String(HH)}`, {
          cause: HH
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === HH || void 0 === HH ? void 0 : HH.request
      }
    }
    let rH = null,
      SH = null,
      hH = null;
    const tH = [];
    let zH = null;

    function CH(HH, BH) {
      try {
        HH(BH)
      } catch (LH) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", LH)
      }
    }

    function EH() {
      return zH
    }

    function XH(HH) {
      tH.push(HH), null !== zH && CH(HH, zH)
    }

    function GH(HH) {
      return rH ??= Promise.all([LH.e(84), LH.e(111), LH.e(86), LH.e(248), LH.e(89), LH.e(220), LH.e(170), LH.e(249), LH.e(109), LH.e(268), LH.e(238), LH.e(300), LH.e(49), LH.e(217), LH.e(233), LH.e(216), LH.e(207), LH.e(208), LH.e(101), LH.e(134), LH.e(274), LH.e(68)]).then((() => LH(46017))).then((BH => {
        BH.loadAudio(HH), zH = BH;
        for (const HH of tH) CH(HH, BH);
        return BH
      })).catch((HH => {
        throw rH = null, HH
      })), rH
    }
    async function YH(HH, BH) {
      try {
        const LH = await GH(HH);
        await LH.loadClientGame(BH)
      } catch (LH) {
        throw new AH(LH)
      }
    }

    function uH(HH, BH) {
      SH = {
        running: HH,
        shell: BH
      }
    }

    function QH() {
      return hH
    }
    async function WH(HH) {
      const BH = SH;
      if ((null === BH || void 0 === BH ? void 0 : BH.running) !== HH) throw new Error("the core's session has ended");
      const LH = await GH(BH.shell.audio).catch((HH => {
        throw new AH(HH)
      }));
      if (null !== hH) return hH;
      if (SH !== BH || HH.isStopped) throw new Error("the core stopped while the game code loaded");
      if (hH = LH.startGameHost(HH, BH.shell), null === hH) throw new Error("the core's shared tables didn't read, so the game can't start");
      return hH
    }

    function MH() {
      null !== hH && (null !== zH ? zH.endGameHost(hH) : hH.closeGame()), hH = null, SH = null
    }
  },
  42041: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    const AH = {
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
  42006: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH,
      f: () => SH,
      j: () => hH,
      m: () => rH,
      n: () => YH,
      o: () => EH,
      q: () => zH,
      u: () => GH,
      y: () => XH,
      z: () => tH
    });
    var AH = LH(1868);
    const rH = new Uint8Array([12]),
      SH = 2e3,
      hH = 257;

    function tH(HH) {
      const BH = new Uint8Array(4);
      return new DataView(BH.buffer).setUint32(0, HH, !0), BH
    }
    class zH extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class CH extends Error {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(HH), this.stage = BH, this.code = LH, this.serverText = AH, this.socketOpened = rH, this.name = "JoinError"
      }
    }
    class EH extends Error {
      constructor(HH) {
        super(HH), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class XH extends Error {
      constructor(HH) {
        super((0, AH.g)(HH), {
          cause: HH
        }), this.name = "TrafficCheckError"
      }
    }
    class GH extends Error {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(HH, {
          cause: LH
        }), this.networkLost = BH, this.httpStatus = AH, this.name = "SeatRequestError"
      }
    }
    class YH extends Error {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(HH), this.code = BH, this.serverText = LH, this.name = "MatchmakeError"
      }
    }
  },
  42010: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => YH,
      g: () => GH,
      k: () => uH
    });
    var AH = LH(2864),
      rH = LH(3299),
      SH = LH(39983),
      hH = LH(37366),
      tH = LH(39991),
      zH = LH(42006),
      CH = LH(42016);
    const EH = "seat reservation expired.",
      XH = "early_leave";

    function GH(HH) {
      if (HH instanceof hH.c) return "expected";
      if (HH instanceof zH.u) return HH.networkLost ? "expected" : "unrecognised";
      if (HH instanceof zH.d) {
        if ("closed" === HH.stage && (0 === HH.code || (0, rH.e)(HH.code))) return "expected";
        if ("roomError" === HH.stage && (HH.serverText === EH || HH.serverText === XH)) return "expected"
      }
      return HH instanceof zH.d || HH instanceof zH.n ? null === (0, tH.l)(HH.code).name ? "unrecognised" : "known" : (0, AH.g)(HH) ? "expected" : HH instanceof zH.y || HH instanceof CH.c ? "known" : "unrecognised"
    }

    function YH(HH) {
      return HH instanceof hH.c ? "timedOut" : "expected" !== GH(HH) || (0, AH.g)(HH) || HH instanceof zH.d && 1001 === HH.code ? void 0 : "failed"
    }

    function uH(HH) {
      return HH instanceof zH.d && "attach" !== HH.stage ? (0, SH.b)(HH, "closed" !== HH.stage || HH.socketOpened ? "socket" : "socket_unopened") : HH instanceof zH.u ? {
        at: "seat_lost",
        code: HH.httpStatus
      } : HH instanceof zH.n || HH instanceof hH.c ? (0, SH.b)(HH, HH instanceof hH.c ? HH.leg : "seat") : void 0
    }
  },
  42117: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => zH,
      g: () => CH,
      k: () => YH,
      m: () => XH
    });
    var AH = LH(3171),
      rH = LH(5265),
      SH = LH(42125),
      hH = LH(42129),
      tH = LH(37037);
    const zH = 395,
      CH = 2147483648,
      EH = new Uint8Array(0);
    class XH extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class GH extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class YH {
      constructor(HH, BH, LH) {
        var AH, rH, hH, tH;
        let zH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = HH, this.build = BH, this.onFailure = LH, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.hX = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (AH = zH.fetchFile) && void 0 !== AH ? AH : HH => (0, SH.g)(HH), this.onWritten = null !== (rH = zH.onWritten) && void 0 !== rH ? rH : null, this.onTaken = null !== (hH = zH.onTaken) && void 0 !== hH ? hH : null, this.onPackFileFailed = null !== (tH = zH.onPackFileFailed) && void 0 !== tH ? tH : null, this.startupLeft = new Set(HH.startup);
        for (const SH of HH.startup) this.request(SH)
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
      drawnUrl(HH) {
        return this.drawn.get(HH)
      }
      request(HH) {
        const BH = this.pending.get(HH);
        if (!0 === (null === BH || void 0 === BH ? void 0 : BH.ask)) return;
        const LH = this.PX(HH, !0);
        LH.recheck = void 0 !== BH;
        const AH = this.drawn.get(HH);
        if (void 0 !== AH) return LH.LX = !0, LH.recheck = !0, void this.fetch(HH, LH, AH);
        this.fetchWanted(HH, LH)
      }
      async refresh() {
        const HH = ++this.refreshes,
          BH = new Set;
        for (const hH of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const HH of hH) 0 === (HH & SH.f) && BH.add(HH);
        const LH = [...BH];
        let AH;
        try {
          AH = await Promise.all(LH.map((HH => this.wanted(HH))))
        } catch {
          return null
        }
        if (HH !== this.refreshes) return null;
        const rH = {
          resent: 0,
          refetched: 0,
          delivered: LH.filter((HH => this.drawn.has(HH))).length
        };
        return LH.forEach(((HH, BH) => {
          const {
            url: LH,
            inPlaceOf: SH
          } = AH[BH], hH = this.pending.get(HH);
          if (void 0 !== hH) {
            if (hH.LX || void 0 === hH.url) return void(hH.recheck = !0);
            if (hH.url === LH) return;
            rH.refetched++;
            const BH = this.PX(HH, hH.ask);
            return BH.recheck = hH.recheck, void this.fetch(HH, BH, LH, SH)
          }
          const tH = this.written.get(HH);
          void 0 === tH ? this.drawn.get(HH) !== (null !== LH && void 0 !== LH ? LH : void 0) && (rH.resent++, this.fetch(HH, this.PX(HH, !1), LH, SH)) : tH.url !== (null !== LH && void 0 !== LH ? LH : "") && (tH.attempt.recheck = !0)
        })), rH
      }
      taken(HH, BH) {
        const LH = new Set,
          AH = new Set;
        for (const rH of Array.from(BH)) 0 === (rH & CH) ? LH.add(rH) : AH.add((rH & ~CH) >>> 0);
        for (const [rH, SH] of this.written) SH.seq > HH || (this.written.delete(rH), LH.has(SH.seq) ? this.refusedFile(rH, SH) : this.takenFile(rH, SH, !SH.empty && !AH.has(SH.seq)))
      }
      takenFile(HH, BH, LH) {
        const {
          attempt: AH
        } = BH;
        if (LH) {
          var rH;
          this.drawn.set(HH, BH.url), this.undrawn.delete(HH), void 0 !== AH.inPlaceOf ? this.refusedPack.set(HH, AH.inPlaceOf) : AH.LX || this.refusedPack.delete(HH), null === (rH = this.onTaken) || void 0 === rH || rH.call(this, HH, !0);
          const LH = this.pending.get(HH);
          if (!0 === (null === LH || void 0 === LH ? void 0 : LH.LX) && LH.url !== BH.url) {
            const LH = this.PX(HH, !0);
            LH.LX = !0, LH.recheck = !0, this.fetch(HH, LH, BH.url)
          }
        } else {
          var SH;
          this.drawn.has(HH) || this.undrawn.add(HH), null === (SH = this.onTaken) || void 0 === SH || SH.call(this, HH, !1)
        }
        AH.recheck && this.resendIfChanged(HH)
      }
      refusedFile(HH, BH) {
        var LH, AH;
        if (null === (LH = this.onTaken) || void 0 === LH || LH.call(this, HH, !1), this.refusedPack.set(HH, BH.url), this.pending.has(HH)) return void(null === (AH = this.onPackFileFailed) || void 0 === AH || AH.call(this, HH, uH(BH.url)));
        const rH = this.PX(HH, BH.attempt.ask);
        rH.recheck = BH.attempt.recheck, this.afterRefusal(HH, rH, BH.url)
      }
      async afterRefusal(HH, BH, LH) {
        var AH;
        let rH;
        try {
          rH = await this.wanted(HH)
        } catch (SH) {
          return void(this.pending.get(HH) === BH && this.giveUp(HH, BH, LH, SH))
        }
        this.pending.get(HH) === BH && (rH.inPlaceOf !== LH ? BH.ask || (null !== (AH = rH.url) && void 0 !== AH ? AH : void 0) !== this.drawn.get(HH) ? this.fetch(HH, BH, rH.url, rH.inPlaceOf) : this.pending.delete(HH) : this.fallBack(HH, BH, LH, uH(LH)))
      }
      PX(HH, BH) {
        const LH = {
          url: void 0,
          ask: BH,
          LX: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(HH, LH);
        for (let AH = this.ready.length - 1; AH >= 0; AH--) this.ready[AH].file === HH && this.ready.splice(AH, 1);
        return LH
      }
      async wanted(HH) {
        const BH = await this.files.url(HH);
        return null !== BH && this.refusedPack.get(HH) === BH ? {
          url: await this.files.shippedUrl(HH),
          inPlaceOf: BH
        } : {
          url: BH,
          inPlaceOf: void 0
        }
      }
      fetchWanted(HH, BH) {
        const LH = this.files.url(HH);
        LH instanceof Promise ? LH.then((LH => {
          this.fetchFound(HH, BH, LH)
        }), (LH => {
          this.pending.get(HH) === BH && this.giveUp(HH, BH, "", LH)
        })) : this.fetchFound(HH, BH, LH)
      }
      fetchFound(HH, BH, LH) {
        null !== LH && this.refusedPack.get(HH) === LH ? Promise.resolve(this.files.shippedUrl(HH)).then((AH => {
          this.fetch(HH, BH, AH, LH)
        }), (AH => {
          this.pending.get(HH) === BH && this.giveUp(HH, BH, LH, AH)
        })) : this.fetch(HH, BH, LH)
      }
      fetch(HH, BH, LH, AH) {
        this.pending.get(HH) === BH && (BH.url = LH, BH.inPlaceOf = AH, null !== LH ? this.load(HH, BH, LH) : this.buildFile(HH, BH, "", EH))
      }
      load(HH, BH, LH) {
        const AH = this.hX.get(HH);
        (null === AH || void 0 === AH ? void 0 : AH.url) !== LH ? this.fetchFile(LH).then((AH => {
          var rH, SH;
          this.pending.get(HH) === BH && (this.keptTotal += AH.byteLength - (null !== (rH = null === (SH = this.hX.get(HH)) || void 0 === SH ? void 0 : SH.glb.byteLength) && void 0 !== rH ? rH : 0), this.hX.set(HH, {
            url: LH,
            glb: AH
          }), this.buildFile(HH, BH, LH, AH))
        }), (AH => {
          this.pending.get(HH) === BH && this.fallBack(HH, BH, LH, AH)
        })) : this.buildFile(HH, BH, LH, AH.glb)
      }
      buildFile(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const hH = AH.byteLength > 0 && (0, SH.h)(LH) ? (HH | SH.e) >>> 0 : HH;
        this.queueRecord(HH, BH, LH, AH, this.build(hH, AH), rH)
      }
      queueRecord(HH, BH, LH, AH, SH, tH) {
        SH.then((SH => {
          if (this.pending.get(HH) !== BH) return;
          if (rH.r + (0, rH.te)(SH.byteLength) > rH.Hc) return void this.ringRefused(HH, BH, LH, new XH(`${QH(LH)}'s record is ${SH.byteLength-hH.b} bytes, past the cmd ring's ${rH.Hc}`), tH);
          const zH = {
            file: HH,
            url: LH,
            payload: SH,
            glb: AH,
            attempt: BH
          };
          tH ? this.ready.unshift(zH) : this.ready.push(zH)
        }))
      }
      async fallBack(HH, BH, LH, AH) {
        var rH;
        let SH = null,
          hH = AH;
        try {
          SH = await this.files.shippedUrl(HH)
        } catch (tH) {
          hH = tH
        }
        this.pending.get(HH) === BH && (null !== SH && SH !== LH ? (null === (rH = this.onPackFileFailed) || void 0 === rH || rH.call(this, HH, AH), BH.ask || this.drawn.get(HH) !== SH ? (BH.url = SH, BH.inPlaceOf = LH, this.load(HH, BH, SH)) : this.pending.delete(HH)) : this.giveUp(HH, BH, LH, hH))
      }
      ringRefused(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, SH.h)(LH) ? this.fallBack(HH, BH, LH, AH): this.giveUp(HH, BH, LH, AH, rH)
      }
      giveUp(HH, BH, LH, rH) {
        let SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: HH,
          url: QH(LH),
          error: rH,
          startup: this.startupLeft.has(HH)
        }), BH.ask || !this.drawn.has(HH) ? (0, AH.U)(rH) ? this.queueRecord(HH, BH, LH, EH, Promise.resolve((0, hH.l)(HH, (0, tH.k)(rH))), SH) : this.buildFile(HH, BH, LH, EH, SH) : this.pending.delete(HH)
      }
      async resendIfChanged(HH) {
        var BH;
        if (0 !== (HH & SH.f)) return;
        let LH;
        try {
          LH = await this.wanted(HH)
        } catch {
          return
        }(null !== (BH = LH.url) && void 0 !== BH ? BH : void 0) === this.drawn.get(HH) || this.pending.has(HH) || this.written.has(HH) || this.fetch(HH, this.PX(HH, !1), LH.url, LH.inPlaceOf)
      }
      drain(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === HH) return;
        let LH = 0,
          AH = 0;
        for (; AH < this.ready.length && LH < 262144;) {
          const tH = this.ready[AH];
          if (this.written.has(tH.file)) {
            AH++;
            continue
          }
          const EH = this.nextSeq;
          new DataView(tH.payload.buffer, tH.payload.byteOffset, tH.payload.byteLength).setUint32(hH.f, EH, !0);
          const GH = tH.attempt.LX && tH.glb.byteLength > 0 && this.drawn.get(tH.file) === tH.url;
          if (HH(zH, GH ? 1 : 0, tH.payload)) {
            if (this.nextSeq = EH >= CH - 1 ? 1 : EH + 1, this.ready.splice(AH, 1), LH += tH.payload.byteLength, this.pending.delete(tH.file), this.startupLeft.delete(tH.file), this.written.set(tH.file, {
                seq: EH,
                url: tH.url,
                empty: 0 === tH.glb.byteLength,
                attempt: tH.attempt
              }), tH.glb.byteLength > 0) try {
              var rH;
              null === (rH = this.onWritten) || void 0 === rH || rH.call(this, tH.file, tH.glb)
            } catch (SH) {
              console.warn("ModelFeed: reading the file's images failed", SH)
            }
          } else {
            if (null === BH || 0 === tH.glb.byteLength || BH(tH.payload.byteLength)) return;
            this.ready.splice(AH, 1);
            const HH = new XH(`${QH(tH.url)}'s record is ${tH.payload.byteLength-hH.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(tH.file, tH.attempt, tH.url, HH, !0)
          }
        }
      }
    }

    function uH(HH) {
      return new GH(`presentation refused ${QH(HH)}`)
    }

    function QH(HH) {
      return HH.startsWith("data:") ? `${HH.slice(0,Math.min(Math.max(HH.indexOf(","),5),64))},...` : HH
    }
  },
  42125: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH,
      f: () => SH,
      g: () => EH,
      h: () => tH,
      i: () => CH,
      j: () => zH
    });
    var AH = LH(3171),
      rH = LH(3562);
    const SH = 2147483648,
      hH = 1073741824;

    function tH(HH) {
      return HH.startsWith("data:")
    }

    function zH(HH) {
      let {
        onTableFailed: BH,
        packUrl: LH
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const AH = CH();
      AH.catch((HH => {
        null === BH || void 0 === BH || BH(HH)
      }));
      const rH = async BH => (await AH).fileUrl((BH & ~SH) >>> 0, HH);
      return {
        startup: [],
        url: async HH => {
          if (LH && 0 === (HH & SH)) {
            const BH = await AH,
              rH = BH.filePackName(HH),
              SH = null === rH || "lifeform" === BH.fileSource(HH) ? null : LH(rH);
            if (null !== SH) return SH
          }
          return rH(HH)
        },
        shippedUrl: rH
      }
    }

    function CH() {
      return LH.e(49).then((() => LH(46020)))
    }
    async function EH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return HH.startsWith("data:") ? (0, rH.e)(HH.slice(HH.indexOf(",") + 1), BH) : (0, AH.M)(HH, {
        spare: BH
      })
    }
  },
  42129: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH,
      f: () => CH,
      j: () => uH,
      l: () => GH,
      m: () => XH,
      p: () => YH
    });
    const AH = 826427981,
      rH = 1,
      SH = 2,
      hH = 44,
      tH = 58,
      zH = 8,
      CH = 4;

    function EH(HH, BH, LH) {
      const rH = (new TextEncoder).encode(LH),
        SH = zH + 4 * (BH.length + 2),
        hH = new Uint8Array(SH + (rH.byteLength + 3 & -4)),
        tH = new DataView(hH.buffer);
      return tH.setUint32(0, HH, !0), tH.setUint32(zH, AH, !0), BH.forEach(((HH, BH) => {
        tH.setUint32(zH + 4 * (BH + 1), HH, !0)
      })), tH.setUint32(SH - 4, rH.byteLength, !0), hH.set(rH, SH), hH
    }

    function XH(HH, BH) {
      return EH(HH, [SH], BH)
    }

    function GH(HH, BH) {
      return EH(HH, [rH, tH], BH)
    }

    function YH(HH, BH) {
      return EH(HH, [rH, hH], BH)
    }

    function uH(HH) {
      const BH = zH;
      if (HH.byteLength < BH + 12) return !1;
      const LH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
      return LH.getUint32(BH, !0) === AH && LH.getUint32(BH + 4, !0) === rH && LH.getUint32(BH + 8, !0) === hH
    }
  },
  42049: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      g: () => EH,
      k: () => hH,
      o: () => zH
    });
    var AH = LH(37037);
    class rH extends Error {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${HH}: the module trapped${LH?" in an earlier call":""}: ${String(BH)}`, {
          cause: BH
        }), this.site = HH, this.trap = BH, this.earlier = LH, this.name = "ModuleTrapError", BH instanceof Error && void 0 !== BH.stack && (this.stack = `${this.name}: ${this.message}\n${BH.stack}`)
      }
    }
    const SH = new WeakMap;

    function hH(HH) {
      return SH.has(HH)
    }

    function tH(HH, BH) {
      SH.has(HH) || SH.set(HH, BH)
    }

    function zH(HH, BH) {
      return !!(0, AH.g)(BH) && (tH(HH, BH), !0)
    }
    const CH = [
      ["error", HH => HH.error],
      ["unhandledrejection", HH => HH.reason]
    ];

    function EH(HH, BH, LH) {
      let hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return SH.has(HH) ? Promise.reject(new rH(BH, SH.get(HH), !0)) : new Promise(((SH, zH) => {
        const EH = LH => {
            tH(HH, LH), YH(), zH(new rH(BH, LH))
          },
          XH = HH => {
            HH instanceof WebAssembly.RuntimeError ? EH(HH) : (YH(), zH(HH))
          },
          GH = CH.map((HH => {
            let [BH, LH] = HH;
            return [BH, HH => {
              const BH = LH(HH);
              (0, AH.g)(BH) && EH(BH)
            }]
          })),
          YH = () => {
            for (const [HH, BH] of GH) null === hH || void 0 === hH || hH.removeEventListener(HH, BH)
          };
        for (const [HH, BH] of GH) null === hH || void 0 === hH || hH.addEventListener(HH, BH);
        let uH;
        try {
          uH = LH()
        } catch (QH) {
          return void XH(QH)
        }
        uH.then((HH => {
          YH(), SH(HH)
        }), XH)
      }))
    }
  },
  42032: (HH, BH, LH) => {
    LH.d(BH, {
      D: () => ZH,
      H: () => qH,
      K: () => mH,
      N: () => cH,
      Q: () => aH,
      R: () => eH,
      S: () => nH,
      W: () => NH,
      _: () => KH,
      cb: () => sH,
      e: () => kH,
      h: () => VH,
      j: () => jH,
      k: () => gH,
      o: () => UH,
      q: () => bH,
      u: () => PH,
      v: () => IH,
      w: () => lH,
      z: () => dH
    });
    var AH = LH(186),
      rH = LH(15),
      SH = LH(3950),
      hH = LH(114),
      tH = LH(297),
      zH = LH(30),
      CH = LH(42034),
      EH = LH(42054),
      XH = LH(37347),
      GH = LH(42069),
      YH = (LH(42101), LH(42150)),
      uH = LH(42086),
      QH = LH(42056);
    const WH = "wasmJoinBuild";
    let MH = null,
      xH = null,
      vH = null;

    function PH(HH) {
      vH = HH
    }
    let TH = !1;

    function UH() {
      TH = !0
    }

    function VH() {
      return TH
    }
    let OH = !1;

    function bH() {
      OH = !0
    }

    function kH() {
      return OH
    }

    function mH() {
      return vH
    }
    let oH = null;

    function IH(HH) {
      oH = HH, (0, tH.e)(HH)
    }
    const fH = "wasmClientRenderLost";

    function lH() {
      zH.f.setItem(fH, !0)
    }

    function KH() {
      return !0 === zH.f.getItem(fH)
    }

    function cH() {
      return oH
    }

    function eH() {
      if (null === MH) {
        zH.e.removeItem("wasmLastPick"), zH.e.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, tH.l)(), MH = (0, CH.y)(GH.h).then((HH => (null === HH || (0, CH.k)(HH) || (xH = YH.b[HH.backend], rH.c.followGameGpu("webgpu" === HH.backend ? HH.adapter : null), "webgpu" === HH.backend && (0, uH.h)()), HH)))
      }
      return MH
    }

    function qH() {
      return xH
    }

    function gH(HH) {
      return HH ? HH.load() : Promise.resolve().then((function() {
        var HH = new Error("Cannot find module '@bloxd/wasm/client'");
        throw HH.code = "MODULE_NOT_FOUND", HH
      })).then((HH => HH.bloxdWasmClient))
    }

    function NH(HH) {
      zH.e.setItem(WH, HH)
    }

    function RH(HH, BH) {
      const LH = zH.e.getItem(WH);
      return null === LH ? function(HH) {
        if (void 0 !== (0, AH.d)(HH, "webgpu") && (0, CH.u)()) return "webgpu";
        return !1 === (0, hH.t)() ? "webgl1" : "webgl"
      }(HH) : "none" === LH ? null : "string" === typeof LH && void 0 !== (0, AH.d)(HH, LH) ? LH : (BH && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(LH)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function jH() {
      if (null === GH.h) return gH(null);
      const HH = RH(GH.h, !0);
      return null === HH ? null : GH.h[HH]()
    }

    function nH() {
      null === MH && null !== GH.h && "webgl" === RH(GH.h, !1) && (0, QH.d)()
    }
    let FH = null,
      DH = null,
      wH = null;

    function ZH() {
      return FH ??= eH().then((async HH => {
        const BH = null !== HH && !(0, CH.k)(HH),
          LH = {
            indirectHangs: BH && await (0, CH.I)(HH, window.location.search),
            storagePullBreaks: BH && (0, CH.S)(HH, window.location.search),
            splitPassBreaks: BH && (0, CH.O)(HH, window.location.search),
            earlySky: BH && (0, CH.H)(HH, window.location.search),
            instancedTerrain: BH ? (0, CH.L)(HH, window.location.search) : null,
            cellLight: BH && await (0, SH.j)("cellLight"),
            framesAhead: (0, CH.h)(window.location.search, BH ? HH : null),
            webGpuRestores: !BH || (0, CH.T)(HH, (0, XH.b)()),
            bufferCopiesCrash: BH && (0, CH.G)(HH, window.location.search),
            firstVertex: BH ? (0, EH.f)(HH.backend, window.location.search) : void 0
          };
        return DH = LH.indirectHangs, wH = !LH.webGpuRestores, LH
      })), FH
    }

    function dH() {
      return DH
    }

    function aH() {
      return wH
    }
    async function sH() {
      const HH = null === MH ? null : await MH;
      return null !== HH && (0, CH.k)(HH) && (MH = null, FH = null, DH = null, wH = null), eH()
    }
  },
  42295: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => zH,
      h: () => CH
    });
    var AH = LH(37083),
      rH = LH(42172),
      SH = LH(4802),
      hH = LH(3595),
      tH = LH(37347);
    async function zH(HH, BH) {
      return await Promise.all([(0, SH.g)(void 0, !0), (0, hH.l)()]), (0, AH.l)(HH, rH.e, {
        ...BH,
        memoryMaximumBytes: (0, tH.k)()
      })
    }
    async function CH() {
      return await (0, SH.g)(void 0, !0), (0, AH.m)((0, tH.k)())
    }
  },
  42054: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      f: () => SH
    });
    var AH = LH(241);
    const rH = "provokingVertex";

    function SH(HH, BH) {
      if ("webgl" !== HH) return;
      const LH = new URLSearchParams(BH).get(rH);
      return "first" === LH || "last" !== LH && null
    }
    const hH = new WeakSet;

    function tH(HH, BH) {
      var LH, rH;
      let SH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (LH = null === (rH = globalThis.navigator) || void 0 === rH ? void 0 : rH.userAgent) && void 0 !== LH ? LH : "";
      try {
        !1 === BH || hH.has(HH) || (hH.add(HH), HH.addEventListener("webglcontextrestored", (() => {
          tH(HH, BH, SH)
        })));
        const LH = HH.getContext("webgl2");
        if (null === LH || LH.isContextLost()) return !1;
        if (!(null !== BH && void 0 !== BH ? BH : function(HH, BH) {
            var LH, rH;
            const SH = HH.getExtension("WEBGL_debug_renderer_info");
            if (null === SH) return !1;
            return function(HH, BH, LH) {
              return LH.includes("Windows") && "adreno_6" === (0, AH.k)(HH, BH)
            }(String(null !== (LH = HH.getParameter(SH.UNMASKED_VENDOR_WEBGL)) && void 0 !== LH ? LH : ""), String(null !== (rH = HH.getParameter(SH.UNMASKED_RENDERER_WEBGL)) && void 0 !== rH ? rH : ""), BH)
          }(LH, SH))) return !1;
        const rH = LH.getExtension("WEBGL_provoking_vertex");
        return null !== rH && (rH.provokingVertexWEBGL(rH.FIRST_VERTEX_CONVENTION_WEBGL), console.info("WebGL2 draws flat varyings from the first vertex (WEBGL_provoking_vertex)"), !0)
      } catch (zH) {
        return console.warn("WebGL2's provoking vertex couldn't be set: flat varyings draw from the last vertex", zH), !1
      }
    }
  },
  42060: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => CH,
      d: () => tH,
      e: () => EH,
      i: () => hH
    });
    var AH = LH(314),
      rH = LH(633);
    let SH;

    function hH(HH) {
      var BH;
      const LH = SH;
      return SH = void 0, null !== (BH = zH(HH)) && void 0 !== BH ? BH : LH
    }

    function tH(HH) {
      try {
        const BH = zH(HH);
        void 0 !== BH && (SH = BH, (0, rH.e)((0, AH.p)(BH.reason, BH.message)))
      } catch (BH) {
        console.warn("Couldn't keep the WebGPU loss's cause", BH)
      }
    }

    function zH(HH) {
      var BH;
      const LH = null === HH || void 0 === HH || null === (BH = HH.bhH) || void 0 === BH ? void 0 : BH.call(HH),
        AH = null === HH || void 0 === HH ? void 0 : HH.OhH();
      if (void 0 === AH) return;
      const rH = new Error(AH);
      return void 0 !== LH && (rH.reason = LH), rH
    }

    function CH(HH) {
      return HH instanceof Error ? HH : void 0
    }

    function EH(HH, BH) {
      return "lost" !== HH && "frames_refused" !== HH ? {} : (0, AH.p)("frames_refused" === HH ? HH : null === BH || void 0 === BH ? void 0 : BH.reason, null === BH || void 0 === BH ? void 0 : BH.message)
    }
  },
  42082: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => bH,
      g: () => TH,
      k: () => PH,
      n: () => OH,
      p: () => IH,
      s: () => oH,
      v: () => fH
    });
    var AH = LH(5268),
      rH = LH(42086),
      SH = LH(34828);
    const hH = 1,
      tH = 18,
      zH = 19,
      CH = 20,
      EH = 21,
      XH = 22,
      GH = {
        [hH]: "link",
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
        [tH]: "retry linked",
        [zH]: "fallback linked",
        [CH]: "fallback failed",
        [EH]: "link stalled",
        [XH]: "link left pending",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function YH(HH, BH, LH) {
      return HH === tH ? "program retry" : HH === hH ? "program link" : HH === EH || HH === XH ? "program link stall" : HH === zH || HH === CH ? `program ${BH} ${LH}` : "program"
    }
    const uH = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      QH = {
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
      WH = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      MH = {
        11: "none read after view",
        12: "some read after view"
      },
      xH = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...MH
      },
      vH = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function PH(HH, BH) {
      return HH === AH.p.RenderSerialLinks && void 0 !== MH[BH]
    }

    function TH(HH, BH) {
      return HH === AH.p.RenderSerialLinks && void 0 !== vH[15 & BH]
    }
    const UH = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function VH(HH, BH) {
      var LH;
      return null !== (LH = HH[BH]) && void 0 !== LH ? LH : (0, SH.c)(BH)
    }

    function OH() {
      return (0, SH.c)((0, rH.d)())
    }

    function bH(HH, BH) {
      switch (HH) {
        case AH.p.RenderSceneRowNotDrawn:
          return {
            words: ` ${VH(QH,BH)}`, instance: String(BH), group: String(HH)
          };
        case AH.p.RenderChunkMeshNotDrawn: {
          const LH = 0 === (128 & BH) ? "" : " shortage",
            AH = BH >>> 8;
          return {
            words: ` ${VH(WH,127&BH)}${LH}${0===AH?"":` kind ${(0,SH.c)(AH)}`}`,
            instance: String(BH),
            group: String(HH)
          }
        }
        case AH.p.RenderInternal: {
          const LH = VH(uH, 255 & BH),
            AH = BH >>> 8 & 255;
          if (0 === AH) return {
            words: ` ${LH}`,
            instance: String(BH),
            group: String(HH)
          };
          const rH = VH(GH, AH),
            hH = BH >>> 16;
          return {
            words: ` ${LH} ${rH} program ${(0,SH.c)(hH)}`,
            instance: `${LH} ${rH} ${hH}`,
            group: YH(AH, rH, LH),
            gpuDetails: {
              programFailure: rH,
              program: String(hH)
            }
          }
        }
        case AH.p.RenderSerialLinks: {
          if (TH(HH, BH)) {
            const HH = function(HH) {
              const BH = (BH, LH) => (0, SH.c)(HH >>> BH & (1 << LH) - 1),
                LH = HH >>> 30 & 1 ? " restored" : "";
              return `link census ${vH[15&HH]} linked ${BH(22,8)} failed ${BH(4,6)} retried ${BH(10,6)} fallback ${BH(16,6)}${LH}`
            }(BH);
            return {
              words: ` ${HH}`,
              instance: String(15 & BH),
              group: "link census",
              gpuDetails: {
                linkCensus: HH
              }
            }
          }
          const LH = VH(xH, BH);
          return {
            words: ` ${LH}`,
            instance: String(BH),
            group: String(HH),
            gpuDetails: {
              serialLinks: LH
            }
          }
        }
        case AH.p.RenderGlErrorAfterRestore: {
          const LH = VH(UH, 65535 & BH),
            AH = BH >>> 16,
            rH = 65535 !== AH;
          return {
            words: ` ${LH}${rH?` program ${(0,SH.c)(AH)}`:""}`,
            instance: String(BH),
            group: String(HH),
            gpuDetails: rH ? {
              glError: LH,
              program: String(AH)
            } : {
              glError: LH
            }
          }
        }
        default:
          return null
      }
    }
    const kH = 2,
      mH = new Map;

    function oH(HH) {
      let {
        group: BH,
        instance: LH
      } = HH, AH = mH.get(BH);
      return void 0 === AH && (AH = [], mH.set(BH, AH)), !AH.includes(LH) && (AH.length >= kH || (AH.push(LH), !1))
    }

    function IH() {
      return mH.size > 0
    }

    function fH() {
      mH.clear()
    }
  },
  42069: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH,
      h: () => SH
    });
    var AH = LH(42075);
    const rH = new WeakSet;
    const SH = {
        webgpu: async () => (function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === HH || rH.has(HH.prototype)) return;
          rH.add(HH.prototype);
          const BH = HH.prototype.requestDevice;
          HH.prototype.requestDevice = function(HH) {
            var LH;
            const rH = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.requiredLimits) && void 0 !== LH ? LH : {},
              SH = Object.keys(rH).filter((HH => !(HH in this.limits)));
            if (0 === SH.length) return BH.call(this, HH);
            const hH = Object.fromEntries(Object.entries(rH).filter((HH => {
              let [BH] = HH;
              return BH in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${SH.join(", ")}`), (0, AH.reportDroppedRequiredLimits)(SH), BH.call(this, {
              ...HH,
              requiredLimits: hH
            })
          }
        }(), (await LH.e(8).then((() => LH(54476)))).bloxdWasmWebgpu),
        webgl: async () => (await LH.e(6).then((() => LH(54489)))).bloxdWasmWebgl,
        webgl1: async () => (await LH.e(7).then((() => LH(54500)))).bloxdWasmWebgl1
      },
      hH = async () => (await LH.e(5).then((() => LH(54514)))).compileAnimationPackInWasm
  },
  42016: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => MH,
      f: () => WH,
      g: () => TH
    });
    var AH = LH(7189),
      rH = LH(18),
      SH = LH(4697),
      hH = LH(5268),
      tH = LH(7187),
      zH = LH(42020);

    function CH(HH, BH) {
      const LH = (0, tH.e)(BH.variants);
      return HH.setShaderPack(LH.variantFlags, LH.hooks, LH.moduleCodes, (0, zH.D)(BH.layers), zH.r[BH.policy], BH.keepCircleShadows)
    }
    const EH = 0,
      XH = 1,
      GH = 2,
      YH = "shaderPack:failedToCompile",
      uH = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      QH = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function WH(HH, BH) {
      var LH;
      const AH = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.reason) && void 0 !== LH ? LH : "none";
      return uH.has(AH) ? {
        messageKey: BH ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === AH && "override" === (null === HH || void 0 === HH ? void 0 : HH.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: QH.has(AH) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class MH extends Error {
      constructor(HH) {
        super(`the shader pack can't run in this game: ${HH}`), this.messageKey = HH, this.name = "ShaderPackJoinError"
      }
    }
    const xH = "strict";
    class vH {
      constructor(HH) {
        this.deps = HH, this.pagePack = void 0, this.loaded = null, this.policy = xH, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = HH.load().catch((BH => (HH.warn("the shader pack could not load: the game draws without it", BH), {
          status: "none"
        }))).then((HH => (this.loaded = HH, "active" === HH.status && (this.handOverToPreviews(HH), null !== HH.harnessPolicy && (this.policy = HH.harnessPolicy, this.handOver())), HH)))
      }
      async join(HH) {
        this.leave();
        const BH = this.game,
          [LH, rH] = await Promise.all([this.pagePack, this.policyOf(HH)]);
        if (BH !== this.game || "none" === LH.status) return null;
        const SH = "active" === LH.status ? LH.pack.variants : LH.variants,
          hH = (0, AH.i)(SH, rH);
        if (hH && "active" === LH.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (hH) {
          const HH = this.cantRun(LH, rH);
          if (null !== HH) return HH
        } else if ("blocked" === LH.status || null === this.deps.core) return null;
        return this.policy = rH, this.handOver(), hH && this.refused ? YH : (this.joined = !0, this.offInThisGame = !hH, null)
      }
      async replay(HH) {
        const BH = await this.join(HH);
        null === BH ? this.playable() : this.deps.failInGame(BH)
      }
      cantRun(HH, BH) {
        const {
          core: LH,
          noWebGpu: AH
        } = this.deps;
        if ("blocked" === HH.status) {
          return "shaderPack:failedUnchecked" === HH.messageKey && null === LH && AH.noAdapter ? AH.messageKey : HH.messageKey
        }
        return this.refused || this.failedPolicies.has(BH) ? YH : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var HH;
        return this.runsInJoinedGame() && "active" === (null === (HH = this.loaded) || void 0 === HH ? void 0 : HH.status) ? function(HH, BH) {
          const LH = HH.filter((HH => (0, AH.i)([HH], BH))),
            rH = HH => LH.some((BH => BH[HH]));
          return {
            sceneDepth: rH("sceneDepth"),
            sunShadow: rH("sunShadow"),
            airShadow: rH("airShadow")
          }
        }(this.loaded.pack.variants, this.policy) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(YH) : (null !== this.couldntRun ? this.notify(SH.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.policy) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(HH) {
        for (const {
            code: BH,
            detail: LH
          }
          of HH)
          if (BH === hH.p.RenderShaderPackNotRun) switch (255 & LH) {
            case EH:
              this.refused = !0, this.failed();
              break;
            case XH:
              this.failedPolicies.add(this.policy), this.failed();
              break;
            case GH:
              this.failedModelPolicies.add(this.policy), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(YH) : this.failedWhileJoining = !0)
      }
      fail(HH) {
        this.leave(), this.deps.failInGame(HH)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(HH, BH) {
        const LH = this.game;
        this.deps.notify(HH, (() => LH === this.game && this.joined), BH)
      }
      handOver() {
        var HH;
        const {
          core: BH
        } = this.deps;
        null !== BH && "active" === (null === (HH = this.loaded) || void 0 === HH ? void 0 : HH.status) && (CH(BH, {
          ...this.loaded.pack,
          policy: this.policy
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(HH) {
        let {
          pack: BH,
          harnessPolicy: LH
        } = HH;
        const {
          previews: AH
        } = this.deps;
        null !== AH && CH(AH, {
          ...BH,
          policy: null !== LH && void 0 !== LH ? LH : xH
        })
      }
      policyOf(HH) {
        return this.deps.policyOf(HH).catch((HH => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", HH), xH)))
      }
    }
    const PH = "wasmShaderPackNotice";

    function TH(HH, BH, LH, AH) {
      return rH.k.subscribe(PH, (HH => {
        let {
          translationKey: BH,
          stillCurrent: LH,
          reasonKey: AH
        } = HH;
        LH() && rH.k.AX("chat", (0, SH.h)(BH, AH))
      })), new vH({
        load: UH,
        policyOf: VH,
        core: HH,
        previews: BH,
        noWebGpu: LH,
        notify: (HH, BH, LH) => {
          const AH = {
            translationKey: HH,
            stillCurrent: BH,
            reasonKey: LH
          };
          rH.k.AX(PH, AH, !0)
        },
        failInGame: HH => {
          rH.k.AX(SH.d, HH)
        },
        warn: AH
      })
    }
    async function UH() {
      const [{
        shaderPackPage: HH,
        harnessShaderPackMode: BH
      }, {
        shaderPackTextures: AH
      }] = await Promise.all([LH.e(130).then((() => LH(40182))), LH.e(131).then((() => LH(7179)))]), rH = await HH.load();
      return "active" !== rH.status ? rH : {
        status: "active",
        pack: {
          variants: rH.pack.variants,
          layers: AH().layers,
          keepCircleShadows: rH.pack.keepCircleShadows
        },
        harnessPolicy: BH()
      }
    }
    async function VH(HH) {
      var BH;
      const [{
        shaderPackPage: AH,
        harnessShaderPackMode: rH
      }, {
        getShaderPackPolicy: SH
      }] = await Promise.all([LH.e(130).then((() => LH(40182))), LH.e(106).then((() => LH(44779)))]);
      return await AH.load(), null !== (BH = rH()) && void 0 !== BH ? BH : SH(HH)
    }
  },
  42142: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      f: () => WH,
      h: () => zH,
      j: () => CH,
      m: () => EH,
      n: () => GH
    });
    var AH = LH(37112),
      rH = LH(42145);
    const SH = "atlas:",
      hH = 3e4;
    class tH extends Error {
      constructor(HH, BH) {
        super(`fetching ${HH} answered HTTP ${BH}`), this.url = HH, this.status = BH, this.name = "TerrainTextureFetchError"
      }
    }

    function zH(HH) {
      if (!HH.startsWith(SH)) return null;
      const BH = Number(HH.slice(SH.length));
      return Number.isInteger(BH) && BH >= 0 ? BH : null
    }
    async function CH() {
      const HH = await LH.e(228).then((() => LH(35079)));
      return {
        atlasSheets: HH.blockAtlasUrls,
        texture: BH => {
          var LH, AH, SH;
          return null !== (LH = null !== (AH = null !== (SH = HH.animatedBlockTextures[BH]) && void 0 !== SH ? SH : HH.rotatedBlockTextures[BH]) && void 0 !== AH ? AH : rH.e[BH]) && void 0 !== LH ? LH : null
        }
      }
    }
    async function EH(HH) {
      const BH = new AbortController,
        LH = setTimeout((() => {
          BH.abort(new DOMException(`${HH} took over ${hH} ms`, "TimeoutError"))
        }), hH);
      let AH;
      try {
        const LH = await fetch(HH, {
          signal: BH.signal
        });
        if (!LH.ok) throw new tH(HH, LH.status);
        AH = await LH.blob()
      } finally {
        clearTimeout(LH)
      }
      const rH = await createImageBitmap(AH, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return GH(rH)
      } finally {
        rH.close()
      }
    }
    const XH = 8192;

    function GH(HH) {
      const {
        width: BH,
        height: LH
      } = HH, rH = Math.max(1, Math.min(LH, XH)), SH = (0, AH.h)(BH, rH, {
        willReadFrequently: !0
      });
      if (!SH) throw new Error("no 2D context to read the texture back");
      SH.globalCompositeOperation = "copy";
      const hH = new Uint8Array(BH * LH * 4);
      for (let AH = 0; AH < LH; AH += rH) {
        const tH = Math.min(rH, LH - AH);
        SH.drawImage(HH, 0, AH, BH, tH, 0, 0, BH, tH), hH.set(SH.getImageData(0, 0, BH, tH).data, AH * BH * 4)
      }
      return {
        width: BH,
        height: LH,
        pixels: hH
      }
    }
    async function YH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EH;
      const AH = [],
        rH = await Promise.all(HH.map((async HH => {
          var rH, hH;
          const tH = null !== (rH = null === (hH = BH.decoded) || void 0 === hH ? void 0 : hH.call(BH, HH)) && void 0 !== rH ? rH : null,
            CH = null === tH ? function(HH, BH) {
              if (HH.startsWith(SH)) {
                var LH;
                const AH = zH(HH);
                return null === AH ? null : null !== (LH = BH.atlasSheets[AH]) && void 0 !== LH ? LH : null
              }
              return BH.texture(HH)
            }(HH, BH) : null,
            EH = null !== tH && void 0 !== tH ? tH : null === CH ? null : LH(CH);
          if (null === EH) return AH.push({
            name: HH,
            url: CH,
            error: new Error(`no URL for terrain texture ${HH}`)
          }), null;
          try {
            const BH = await EH;
            if (BH.pixels.byteLength !== BH.width * BH.height * 4) throw new Error(`decoded ${BH.pixels.byteLength} bytes for ${BH.width}x${BH.height} texels`);
            return {
              name: HH,
              texture: BH
            }
          } catch (XH) {
            return AH.push({
              name: HH,
              url: CH,
              error: XH
            }), null
          }
        }))),
        hH = rH.filter((HH => null !== HH)),
        tH = new Uint32Array(2 * hH.length);
      hH.forEach(((HH, BH) => {
        let {
          texture: LH
        } = HH;
        tH[2 * BH] = LH.width, tH[2 * BH + 1] = LH.height
      }));
      return {
        handOver: {
          names: hH.map((HH => {
            let {
              name: BH
            } = HH;
            return BH
          })),
          textures: hH.map((HH => {
            let {
              texture: BH
            } = HH;
            return BH.pixels
          })),
          sizes: tH
        },
        failures: AH
      }
    }
    const uH = [2e3, 1e4, 3e4, 6e4, 12e4];

    function QH() {}
    class WH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uH,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = HH, this.retryMs = BH, this.keepBelow = LH, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CH,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const AH = ++this.started,
          rH = {
            decode: LH.decode,
            wholeAtlas: LH.wholeAtlas
          };
        return this.loadAndHandOver(BH, rH, HH, (() => {
          var HH;
          return AH < this.landed || !1 === (null === (HH = LH.wanted) || void 0 === HH ? void 0 : HH.call(LH))
        }), {
          onTaken: (HH, LH) => {
            this.landed = AH, this.current = {
              mine: AH,
              sources: BH,
              load: rH,
              hX: HH,
              failed: LH
            }
          }
        })
      }
      restore(HH) {
        var BH;
        const LH = this.current;
        if (null === LH) return Promise.resolve(null);
        if ((null === (BH = this.restoring) || void 0 === BH ? void 0 : BH.mine) === LH.mine) return this.restoring.done;
        const AH = {
          mine: LH.mine,
          done: this.restoreLanded(LH, HH).finally((() => {
            this.restoring === AH && (this.restoring = null)
          }))
        };
        return this.restoring = AH, AH.done
      }
      async restoreLanded(HH, BH) {
        const LH = () => this.landed !== HH.mine,
          {
            hX: AH
          } = HH;
        if (null !== AH) return this.stopped() ? null : this.core.setTerrainTextures(AH.names, AH.textures, AH.sizes);
        let rH = BH;
        for (let SH = 0;; SH++) {
          const BH = this.retryMs.at(SH),
            AH = {
              allOrNothingExcept: void 0 === BH ? void 0 : HH.failed
            },
            hH = await this.loadAndHandOver(HH.sources, HH.load, rH, LH, AH);
          if (!1 !== hH || void 0 === BH || this.stopped()) return hH;
          if (rH = QH, await new Promise((HH => {
              setTimeout(HH, BH)
            })), LH()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const SH = this.core.terrainTextureNames();
        var hH;
        if (0 === SH.length) return null === (hH = rH.onTaken) || void 0 === hH || hH.call(rH, null, new Set), !0;
        let tH, CH;
        try {
          tH = await HH(), CH = await YH(SH, tH, BH.decode)
        } catch (WH) {
          return AH() ? null : (LH({
            name: null,
            url: null,
            error: WH
          }), !1)
        }
        if (AH() || this.stopped()) return null;
        for (const zH of CH.failures) LH(zH);
        const EH = rH.allOrNothingExcept;
        if (void 0 !== EH && CH.failures.some((HH => {
            let {
              name: BH
            } = HH;
            return null === BH || !EH.has(BH)
          })) || !0 === BH.wholeAtlas && CH.failures.some((HH => {
            let {
              name: BH
            } = HH;
            return null === BH || null !== zH(BH)
          }))) return !1;
        const {
          handOver: XH
        } = CH, GH = function(HH) {
          return HH.textures.reduce(((HH, BH) => HH + BH.byteLength), 0)
        }(XH) < this.keepBelow, uH = this.core.setTerrainTextures(XH.names, XH.textures, XH.sizes, GH ? void 0 : () => {
          !async function(HH, BH) {
            await BH;
            for (const {
                buffer: AH
              }
              of HH) {
              const HH = AH;
              var LH;
              if (!HH.detached) null === (LH = HH.transfer) || void 0 === LH || LH.call(HH, 0)
            }
          }(XH.textures, tH.heldUntil)
        });
        if (uH) {
          var QH;
          const HH = new Set(CH.failures.flatMap((HH => {
            let {
              name: BH
            } = HH;
            return null === BH ? [] : [BH]
          })));
          null === (QH = rH.onTaken) || void 0 === QH || QH.call(rH, GH ? XH : null, HH)
        }
        return uH
      }
    }
  },
  34936: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      f: () => XH,
      i: () => EH
    });
    var AH = LH(241),
      rH = LH(81),
      SH = LH(114),
      hH = LH(112),
      tH = LH(635);
    const zH = new Set(["mali_bifrost"]);

    function CH() {
      if (tH.g) return;
      const HH = (0, rH.pageOperatingSystem)();
      if ("android" !== HH && "windows" !== HH || (0, tH.e)("webgl_default")) return;
      if ("windows" === HH) return HH => "qualcomm" === (0, rH.normaliseGpuVendor)((0, hH.b)(HH).vendor);
      const BH = (0, SH.l)(),
        LH = null === BH ? (0, AH.x)() : (0, AH.k)(BH.vendor, BH.renderer);
      return null !== LH && zH.has(LH) ? HH => (0, AH.q)((0, hH.b)(HH).vendor, LH) : void 0
    }

    function EH(HH, BH) {
      return HH ? () => !0 : BH()
    }
    async function XH(HH) {
      try {
        const BH = EH(HH, CH),
          LH = navigator.gpu;
        if (void 0 === BH || void 0 === LH) return !1;
        const AH = await (0, hH.o)(LH, {
          seed: !1,
          compatibility: BH
        });
        return "string" !== typeof AH && AH.compatibility && !(0, hH.h)(AH.adapter)
      } catch (BH) {
        return console.error("WebGPU compatibility-mode adapter request failed.", BH), !1
      }
    }
  },
  42086: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => zH,
      h: () => CH
    });
    var AH = LH(81),
      rH = LH(39689);
    const SH = "webgpuPipeline";

    function hH(HH) {
      return HH.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let tH = null;

    function zH() {
      if (null === tH) try {
        HH = (0, AH.getBrowserName)(), BH = (0, AH.getBrowserVersion)(), LH = (0, AH.getOperatingSystem)(), rH = (0, AH.getOperatingSystemVersion)(), tH = `${HH.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===BH?"unknown":hH(BH)}-${LH}${void 0===rH?"":`_${hH(rH)}`}`
      } catch (SH) {
        console.warn("The user agent couldn't be read for its browser code", SH), tH = "unknown"
      }
      var HH, BH, LH, rH;
      return tH
    }

    function CH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const BH = `WGPU-${zH()}`,
        AH = (HH, AH) => {
          const {
            reason: hH,
            message: tH
          } = AH;
          if ((0, rH.q)(String(tH))) return;
          const zH = {
            pipeline: null !== HH && void 0 !== HH ? HH : "",
            reason: String(hH),
            browserMessage: String(tH)
          };
          Promise.resolve().then((() => LH(42075))).then((HH => {
            let {
              reportCrash: LH
            } = HH;
            LH({
              kind: "coreError",
              code: BH,
              site: SH,
              fatal: !1,
              message: `${zH.pipeline} ${zH.reason}: ${zH.browserMessage}`,
              details: zH,
              error: AH
            })
          })).catch((HH => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", HH)
          }))
        },
        hH = HH.createRenderPipelineAsync;
      HH.createRenderPipelineAsync = function(HH) {
        return hH.call(this, HH).catch((BH => {
          throw AH(HH.label, BH), BH
        }))
      };
      const tH = HH.createComputePipelineAsync;
      HH.createComputePipelineAsync = function(HH) {
        return tH.call(this, HH).catch((BH => {
          throw AH(HH.label, BH), BH
        }))
      }
    }
  },
  42056: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      g: () => zH
    });
    var AH = LH(114);
    let rH = !1;

    function SH() {
      let HH = null;
      try {
        return HH = document.createElement("canvas").getContext("webgl2"), null !== HH
      } catch {
        return !1
      } finally {
        try {
          var BH, LH;
          null === (BH = HH) || void 0 === BH || null === (LH = BH.getExtension("WEBGL_lose_context")) || void 0 === LH || LH.loseContext()
        } catch {}
      }
    }

    function hH() {
      "hidden" === document.visibilityState && (rH = !1, document.removeEventListener("visibilitychange", hH))
    }

    function tH() {
      rH || "visible" !== document.visibilityState || !(0, AH.p)() && !SH() || (rH = !0, document.addEventListener("visibilitychange", hH))
    }

    function zH() {
      return rH || SH()
    }
  },
  42187: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/bloxd_wasm_models_bg.75ba595cf1465bb9af8f.wasm"
  },
  42180: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/bloxd_wasm_workers_bg.9e605c08626df73d0bbf.wasm"
  },
  42172: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      e: () => AH
    });
    const AH = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new LH.U(LH(42180))
      }
    };
    const rH = {
      name: "bloxd_wasm_models",
      url: function() {
        return new LH.U(LH(42187))
      }
    }
  },
  7187: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => PH,
      h: () => TH,
      l: () => xH,
      p: () => MH
    });
    var AH = LH(7189);
    const rH = 6,
      SH = 3,
      hH = 1,
      tH = 2,
      zH = 4,
      CH = 8,
      EH = 16,
      XH = 32,
      GH = 64,
      YH = 128,
      uH = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function QH(HH) {
      if (!HH) return 0;
      const BH = uH.indexOf(HH);
      if (BH <= 0) throw new Error(`"${HH}" is not a shader pack hook function`);
      return BH
    }

    function WH(HH) {
      if (0 === HH) return null;
      const BH = uH[HH];
      if (void 0 === BH) throw new Error(`${HH} is not a shader pack hook function id`);
      return BH
    }

    function MH(HH) {
      const BH = AH.d.length;
      return {
        strict: HH >= BH,
        program: AH.d[HH % BH]
      }
    }

    function xH(HH) {
      return Number(HH.strict) * AH.d.length + AH.d.indexOf(HH.program)
    }

    function vH(HH) {
      return "" === HH ? [] : HH.split(" ")
    }

    function PH(HH) {
      const BH = {
        variantFlags: new Uint8Array(rH),
        hooks: new Uint8Array(rH * SH),
        moduleCodes: Array(rH).fill(""),
        reads: Array(2 * rH).fill("")
      };
      for (const LH of HH) {
        const HH = xH(LH.key),
          AH = (HH, BH) => null === LH.hooks.surface || LH.reads.fragment.includes(HH) ? 0 : BH;
        BH.variantFlags[HH] = (LH.sceneDepth ? hH : 0) | (LH.movesVertices ? tH : 0) | (LH.sunShadow ? zH : 0) | (LH.airShadow ? CH : 0) | (LH.discards ? EH : 0) | AH("localPosition", XH) | AH("enchantSpeed", GH) | AH("enchantTier", YH), BH.hooks[HH * SH] = QH(LH.hooks.vertex), BH.hooks[HH * SH + 1] = QH(LH.hooks.surface), BH.hooks[HH * SH + 2] = QH(LH.hooks.light), BH.moduleCodes[HH] = LH.moduleCode, BH.reads[2 * HH] = LH.reads.vertex.join(" "), BH.reads[2 * HH + 1] = LH.reads.fragment.join(" ")
      }
      return BH
    }

    function TH(HH) {
      const {
        hooks: BH,
        moduleCodes: LH,
        reads: AH
      } = HH;
      return Array.from(HH.variantFlags, ((HH, rH) => {
        const XH = rH * SH;
        return {
          key: MH(rH),
          hooks: {
            vertex: WH(BH[XH]),
            surface: WH(BH[XH + 1]),
            light: WH(BH[XH + 2])
          },
          moduleCode: LH[rH],
          sceneDepth: 0 !== (HH & hH),
          sunShadow: 0 !== (HH & zH),
          airShadow: 0 !== (HH & CH),
          movesVertices: 0 !== (HH & tH),
          discards: 0 !== (HH & EH),
          reads: {
            vertex: vH(AH[2 * rH]),
            fragment: vH(AH[2 * rH + 1])
          }
        }
      }))
    }
  },
  42020: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => hH,
      D: () => QH,
      H: () => YH,
      L: () => uH,
      d: () => rH,
      g: () => AH,
      k: () => GH,
      o: () => EH,
      r: () => WH,
      v: () => SH,
      w: () => tH,
      y: () => zH
    });
    const AH = 3,
      rH = 0,
      SH = 1,
      hH = 2,
      tH = {
        uniform: 3,
        aG: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      zH = 10,
      CH = "BloxdPackInputs",
      EH = "bloxdPackInputs",
      XH = [{
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
      GH = 80;

    function YH() {
      const HH = XH.map((HH => {
        let {
          name: BH,
          type: LH
        } = HH;
        return `    ${BH}: ${LH},\n`
      })).join("");
      return `struct ${CH} {\n${HH}}\n@group(${AH}) @binding(${rH}) var<uniform> ${EH}: ${CH};\n`
    }

    function uH(HH, BH) {
      const LH = new DataView(HH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, GH),
        [AH, rH, SH, hH, tH, zH] = XH;
      LH.setFloat32(AH.offset, BH.seconds, !0), LH.setUint32(rH.offset, BH.lit ? 1 : 0, !0);
      for (let CH = 0; CH < 3; CH++) LH.setInt32(SH.offset + 4 * CH, BH.renderOffset[CH], !0), LH.setFloat32(hH.offset + 4 * CH, BH.QBH[CH], !0), LH.setFloat32(tH.offset + 4 * CH, BH.eyePosition[CH], !0), LH.setFloat32(zH.offset + 4 * CH, BH.shadowDirection[CH], !0)
    }

    function QH(HH) {
      const BH = new Uint32Array(Math.max(1, HH.length));
      return HH.forEach(((HH, LH) => {
        let {
          id: AH,
          rotation: rH
        } = HH;
        BH[LH] = 65535 & AH | (3 & rH) << 16
      })), BH
    }
    const WH = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);