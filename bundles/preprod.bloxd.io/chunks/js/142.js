export const id = 142;
export const ids = [142];
export const modules = {
  34346: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      e: () => zQ
    });
    var wQ = XQ(307),
      qQ = XQ(150),
      TQ = XQ(34354);

    function zQ() {
      var QQ, WQ, XQ;
      return null !== (QQ = (0, wQ.h)(null !== (WQ = null === (XQ = (0, qQ.n)()) || void 0 === XQ ? void 0 : XQ.renderer) && void 0 !== WQ ? WQ : null, (0, qQ.j)())) && void 0 !== QQ ? QQ : "unknown"
    }

    function sQ(QQ, WQ, XQ, wQ, qQ) {
      const zQ = null === WQ ? "untimed" : `${Math.round(WQ)} ms`;
      return `frames stalled, ${XQ}, gpu ${(0,TQ.b)(qQ)}, blocking ${zQ}, drawn ${Math.round(QQ)} ms apart, timers ${wQ.timers}, timer gap ${Math.round(wQ.longestGapMs)} ms`
    }
  },
  39038: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ,
      h: () => rQ,
      l: () => IQ,
      n: () => yQ,
      o: () => JQ,
      s: () => gQ,
      v: () => zQ,
      z: () => jQ
    });
    var wQ = XQ(374),
      qQ = XQ(1783);
    const TQ = "A valid external Instance reference no longer exists.";

    function zQ(QQ) {
      return QQ.includes(TQ)
    }
    const sQ = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      FQ = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const PQ = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function gQ(QQ, WQ) {
      return QQ ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(QQ) {
        var WQ;
        const XQ = null !== (WQ = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(QQ)) && void 0 !== WQ ? WQ : /failed with ([A-Z][A-Z0-9_]+)/.exec(QQ);
        return XQ ? XQ[1] : zQ(QQ) ? "gpu_process_lost" : "other"
      }(WQ)
    }

    function JQ(QQ) {
      return `${(null===QQ||void 0===QQ?void 0:QQ.vendor)||"unknown vendor"} ${(null===QQ||void 0===QQ?void 0:QQ.architecture)||"unknown architecture"}`
    }

    function rQ(QQ) {
      return VQ(QQ)[1]
    }

    function IQ(QQ) {
      return VQ(QQ)[2]
    }

    function jQ(QQ, WQ, XQ) {
      const qQ = (0, wQ.f)(),
        TQ = null !== qQ && qQ >= WQ,
        zQ = document.hidden ? "hidden" : TQ ? "shown" : "visible",
        sQ = TQ ? XQ - qQ : null;
      return {
        page: null === sQ ? zQ : `${zQ}${rQ(sQ)}`,
        code: `${QQ}_${null===sQ?zQ:`${zQ}_${IQ(sQ)}`}_${BQ(XQ)}`
      }
    }

    function BQ(QQ) {
      if ((0, qQ.e)()) return "ad_open";
      const WQ = (0, qQ.d)();
      return null === WQ ? "ad_none" : `ad_${IQ(QQ-WQ.endedAt)}_${WQ.pageHid?"h":"v"}`
    }

    function yQ(QQ) {
      return DQ(FQ, QQ)[1]
    }

    function VQ(QQ) {
      return DQ(sQ, QQ)
    }

    function DQ(QQ, WQ) {
      var XQ;
      return null !== (XQ = QQ.find((QQ => {
        let [XQ] = QQ;
        return WQ < XQ
      }))) && void 0 !== XQ ? XQ : QQ[QQ.length - 1]
    }
  },
  34354: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return String(QQ).replace(/\d/g, (QQ => String.fromCharCode(97 + Number(QQ))))
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  },
  40864: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      g: () => gQ,
      h: () => zQ,
      j: () => qQ,
      m: () => sQ,
      n: () => PQ
    });
    class wQ extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function qQ(QQ) {
      return QQ instanceof RangeError && /call stack/i.test(QQ.message) || QQ instanceof Error && "InternalError" === QQ.name && /recursion/i.test(QQ.message)
    }
    const TQ = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function zQ(QQ) {
      var WQ;
      return QQ instanceof WebAssembly.RuntimeError || QQ instanceof wQ || qQ(QQ) && TQ.test(null !== (WQ = QQ.stack) && void 0 !== WQ ? WQ : "")
    }

    function sQ(QQ, WQ) {
      if (zQ(QQ)) throw QQ;
      console.error(WQ, QQ)
    }

    function FQ(QQ, WQ, XQ, qQ, TQ) {
      if (WQ % qQ !== 0 || WQ + XQ > QQ.byteLength) throw new wQ(`${TQ}: ${XQ} bytes at ${WQ}, ${qQ}-aligned, outside ${QQ.byteLength} bytes of memory`)
    }

    function PQ(QQ, WQ, XQ, wQ, qQ) {
      return 0 === XQ ? null : (FQ(WQ, XQ, wQ * QQ.BYTES_PER_ELEMENT, QQ.BYTES_PER_ELEMENT, qQ), new QQ(WQ, XQ, wQ))
    }

    function gQ(QQ, WQ, XQ, wQ, qQ) {
      return 0 === WQ ? null : (FQ(QQ, WQ, XQ, wQ, qQ), new DataView(QQ, WQ, XQ))
    }
  },
  40930: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => sW,
      B: () => eQ,
      C: () => QW,
      G: () => MQ,
      I: () => KQ,
      L: () => XW,
      P: () => jW,
      T: () => WW,
      X: () => mQ,
      Y: () => wW,
      c: () => hQ,
      cb: () => gW,
      f: () => BW,
      g: () => pW,
      gb: () => cQ,
      i: () => PW,
      k: () => IW,
      n: () => zW,
      o: () => rW,
      p: () => JW,
      r: () => DW,
      u: () => NQ,
      x: () => OQ
    });
    var wQ = XQ(382),
      qQ = XQ(299),
      TQ = XQ(307),
      zQ = XQ(26),
      sQ = XQ(3045),
      FQ = XQ(714),
      PQ = XQ(4827),
      gQ = XQ(3012),
      JQ = XQ(3716),
      rQ = XQ(105),
      IQ = XQ(374),
      jQ = XQ(43),
      BQ = XQ(367),
      yQ = XQ(134),
      VQ = XQ(689),
      DQ = XQ(150),
      pQ = XQ(141),
      GQ = XQ(5140),
      UQ = XQ(40934),
      bQ = XQ(1854),
      vQ = XQ(40943),
      dQ = XQ(34461),
      HQ = XQ(40951),
      aQ = XQ(40954);
    const lQ = "bloxd-webgpuOffAfterLoss",
      hQ = "context:webgl",
      iQ = "probe:threw";

    function cQ(QQ) {
      let WQ;
      try {
        WQ = QQ.getContext("webgl", {
          powerPreference: DQ.e
        })
      } catch {
        WQ = null
      }
      if (null === WQ) return null;
      let XQ = null;
      try {
        const QQ = WQ.getParameter(WQ.MAX_TEXTURE_SIZE);
        XQ = "number" === typeof QQ && QQ > 0 ? QQ : null
      } catch {
        XQ = null
      }
      try {
        var wQ;
        null === (wQ = WQ.getExtension("WEBGL_lose_context")) || void 0 === wQ || wQ.loseContext()
      } catch {}
      return XQ
    }
    const AQ = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function RQ() {
      return "ios" === (0, rQ.getOperatingSystem)() ? "ios" : "other"
    }
    const EQ = "mali_valhall",
      CQ = new Set(["nvidia_pre_turing"]),
      uQ = new Set(["intel_gen7_8"]);

    function LQ(QQ, WQ) {
      return AQ.has(QQ) ? "android_arm" === QQ && WQ === EQ ? "webgpu_default" : "webgl_default" : null
    }

    function kQ(QQ) {
      return function(QQ) {
        try {
          return QQ()
        } catch {
          return null
        }
      }((() => {
        var WQ, XQ, wQ, zQ;
        const sQ = null !== (WQ = null === (XQ = QQ.info) || void 0 === XQ ? void 0 : XQ.vendor) && void 0 !== WQ ? WQ : "";
        return "windows" === (0, rQ.getOperatingSystem)() && "" !== sQ && "intel" !== (0, rQ.normaliseGpuVendor)(sQ) ? null : ((0, rQ.seedGpuVendor)(sQ), LQ((0, qQ.g)(), (0, TQ.e)(sQ, null !== (wQ = null === (zQ = QQ.info) || void 0 === zQ ? void 0 : zQ.architecture) && void 0 !== wQ ? wQ : "")))
      }))
    }

    function fQ() {
      var QQ;
      return {
        gpu: null !== (QQ = navigator.gpu) && void 0 !== QQ ? QQ : null,
        webgl2: HQ.g,
        webgl1: () => function(QQ) {
          let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UQ.d;
          try {
            WQ = QQ.getContext("webgl")
          } catch {
            WQ = null
          }
          if (null === WQ) return [hQ];
          const wQ = [];
          try {
            for (const qQ of XQ.extensions) null === WQ.getExtension(qQ) && wQ.push(qQ);
            for (const [qQ, TQ] of Object.entries(XQ.limits)) {
              const QQ = WQ[qQ],
                XQ = "number" === typeof QQ ? WQ.getParameter(QQ) : null;
              ("number" !== typeof XQ || XQ < TQ) && wQ.push(`limit:${qQ}`)
            }
            const QQ = WQ.getShaderPrecisionFormat(WQ.VERTEX_SHADER, WQ.HIGH_FLOAT);
            (null === QQ || QQ.precision < XQ.vertexHighFloatBits) && wQ.push("precision:vertex_high_float")
          } catch {
            wQ.push(iQ)
          }
          try {
            var qQ;
            null === (qQ = WQ.getExtension("WEBGL_lose_context")) || void 0 === qQ || qQ.loseContext()
          } catch {}
          return wQ
        }(document.createElement("canvas")),
        offAfterLoss: QQ => tQ((() => QQ ? (0, BQ.D)() : zQ.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: QQ => tQ((() => (0, yQ.g)(QQ))),
        intelGen9: QQ => tQ((() => (0, yQ.m)(QQ))),
        storeIntelGen9Verdict: QQ => {
          jQ.i.setItem(yQ.A, QQ)
        },
        gpuClassWebGlArm: kQ,
        storeGpuClassVerdict: QQ => {
          jQ.i.setItem(yQ.x, QQ)
        },
        gpuClassOnWebGl: QQ => (0, VQ.e)(QQ),
        webGlDefaultFamily: QQ => uQ.has((0, TQ.e)(QQ.vendor, QQ.architecture)),
        storeWebGlDefaultFamilyVerdict: QQ => {
          jQ.i.setItem(yQ.G, QQ)
        },
        override: () => SQ(),
        claimed: () => oQ((0, FQ.o)()),
        webGpuSetting: () => {
          const QQ = jQ.i.getItem(wQ.mc);
          return "boolean" === typeof QQ ? QQ : null
        },
        heldBack: () => VQ.f,
        storeHoldbackSpared: QQ => {
          jQ.i.setItem(yQ.u, QQ)
        },
        intelGen9OnWebGl: () => VQ.h,
        xI: () => tQ((() => (0, JQ.f)(rQ.featureFlags.settings.canUseShaderPacks))),
        windows: () => tQ((() => "windows" === (0, rQ.getOperatingSystem)())),
        defaultCompatibility: dQ.b
      }
    }

    function SQ() {
      let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, sQ.m)("render") && "webgl1" === (0, sQ.k)("renderer")) return "webgl1";
      const WQ = [() => new URLSearchParams(window.location.search).get(gQ.c), () => jQ.i.getItem(gQ.d), () => {
        const WQ = localStorage.getItem(lQ);
        return null !== WQ && QQ && localStorage.removeItem(lQ), "1" === WQ ? "webgl2" : null
      }];
      for (const XQ of WQ) {
        let QQ = null;
        try {
          QQ = oQ(XQ())
        } catch {}
        if (null !== QQ) return QQ
      }
      return null
    }

    function tQ(QQ) {
      try {
        return QQ()
      } catch {
        return !1
      }
    }

    function oQ(QQ) {
      return "lite" === QQ ? "webgpu" : "webgl2" === QQ || "babylon" === QQ ? "webgl" : null
    }

    function eQ(QQ) {
      return "none" === QQ || "compatibility_mode" === QQ
    }
    async function nQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fQ();
      const WQ = await async function(QQ) {
        const WQ = YQ(QQ),
          {
            source: XQ
          } = WQ,
          wQ = !WQ.asked,
          qQ = "gpu" in WQ && WQ.heldBack,
          zQ = function(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return qQ && !eQ(QQ) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: XQ
            } : {
              reason: QQ,
              adapter: WQ,
              source: XQ
            }
          };
        if (!("gpu" in WQ)) return zQ(WQ.refused);
        let sQ;
        try {
          sQ = await (0, bQ.n)((0, pQ.m)(WQ.gpu, {
            compatibility: xQ(QQ, WQ)
          }), yW, `requestAdapter didn't settle in ${yW/1e3} s`)
        } catch {
          return zQ("adapter_error")
        }
        if ("string" === typeof sQ) return zQ(sQ);
        const {
          adapter: FQ,
          compatibility: PQ
        } = sQ, gQ = (0, pQ.c)(FQ);
        if ((0, pQ.h)(FQ)) return zQ("software_adapter", gQ);
        const JQ = QQ.windows() && function(QQ) {
          return CQ.has((0, TQ.e)(QQ.vendor, QQ.architecture))
        }(gQ);
        if (QQ.storeHoldbackSpared(JQ), qQ && !JQ) return zQ("webgl_holdback");
        const rQ = QQ.intelGen9(FQ);
        QQ.storeIntelGen9Verdict(rQ);
        const IQ = rQ ? null : QQ.gpuClassWebGlArm(FQ);
        QQ.storeGpuClassVerdict(null !== IQ && void 0 !== IQ && IQ);
        const jQ = QQ.webGlDefaultFamily(gQ);
        if (QQ.storeWebGlDefaultFamilyVerdict(jQ), wQ && QQ.oldIntelDriver(FQ)) return zQ("old_intel_driver", gQ);
        if ("default" === XQ && rQ && QQ.intelGen9OnWebGl()) return zQ("intel_gen9", gQ);
        if ("default" === XQ && null !== IQ && QQ.gpuClassOnWebGl(IQ)) return zQ("gpu_class_webgl", gQ);
        if ("default" === XQ && jQ) return zQ("gpu_wasm_arm", gQ);
        return zQ(PQ ? "compatibility_mode" : "none", gQ)
      }(QQ);
      if (eQ(WQ.reason)) return {
        backend: "webgpu",
        ...WQ
      };
      if ("webgl1" !== QQ.override() && QQ.webgl2()) return {
        backend: "webgl",
        ...WQ
      };
      const XQ = QQ.webgl1();
      return 0 === XQ.length ? {
        backend: "webgl1",
        ...WQ
      } : {
        missing: XQ
      }
    }

    function xQ(QQ, WQ) {
      let {
        source: XQ,
        asked: wQ
      } = WQ;
      return wQ || "default" === XQ ? (0, dQ.i)(wQ, QQ.defaultCompatibility) : void 0
    }

    function YQ(QQ) {
      const WQ = QQ.override(),
        XQ = QQ.webGpuSetting(),
        wQ = null === WQ && !0 !== XQ && QQ.xI(),
        qQ = null !== WQ || null !== XQ || wQ ? null : QQ.claimed(),
        TQ = null !== WQ ? "override" : !0 === XQ ? "setting" : wQ ? "pack" : !1 === XQ ? "setting" : null !== qQ ? "claim" : "default",
        zQ = function(QQ) {
          return "override" === QQ || "setting" === QQ
        }(TQ);
      if ("webgl" === WQ || "webgl1" === WQ || "webgl" === qQ || "setting" === TQ && !1 === XQ) return {
        source: TQ,
        asked: zQ,
        refused: "not_requested"
      };
      if (!QQ.gpu) return {
        source: TQ,
        asked: zQ,
        refused: "no_webgpu_api"
      };
      const sQ = "default" === TQ && QQ.heldBack();
      return sQ && !QQ.windows() ? {
        source: TQ,
        asked: zQ,
        refused: "webgl_holdback"
      } : !zQ && QQ.offAfterLoss("pack" === TQ) ? {
        source: TQ,
        asked: zQ,
        refused: sQ ? "webgl_holdback" : "off_after_loss"
      } : {
        source: TQ,
        asked: zQ,
        heldBack: sQ,
        gpu: QQ.gpu
      }
    }

    function NQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...fQ(),
          override: () => SQ(!1)
        },
        WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rQ.isWebKit,
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RQ;
      try {
        if (!WQ()) return !1;
        const wQ = YQ(QQ);
        if (!("gpu" in wQ) || wQ.heldBack) return !1;
        const qQ = "default" === wQ.source ? LQ(XQ(), "apple") : null;
        return null === qQ || !QQ.gpuClassOnWebGl(qQ)
      } catch (wQ) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", wQ), !1
      }
    }
    let ZQ = !1;
    async function OQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fQ();
      if (null === QQ) return null;
      const XQ = await nQ(WQ);
      return ZQ = !("missing" in XQ) && "webgpu" === XQ.backend && "claim" === XQ.source, "missing" in XQ ? XQ : {
        ...XQ,
        load: QQ[XQ.backend]
      }
    }
    async function KQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fQ().gpu,
        wQ = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== QQ.backend) return !1;
      const qQ = TW(QQ, WQ, "indirectDraws", "off", "on");
      if (null !== qQ) return qQ;
      if (null !== QQ.adapter && (0, yQ.n)(QQ.adapter, wQ)) return !0;
      if (null === XQ) return !1;
      try {
        var TQ;
        const QQ = await (0, bQ.n)(XQ.requestAdapter({
          powerPreference: "low-power"
        }).then((async QQ => (null !== QQ && await (0, pQ.f)(QQ), QQ))), yW, `the low-power requestAdapter didn't settle in ${yW/1e3} s`);
        return (0, yQ.n)(null !== (TQ = null === QQ || void 0 === QQ ? void 0 : QQ.info) && void 0 !== TQ ? TQ : {}, wQ)
      } catch (zQ) {
        return zQ instanceof bQ.g
      }
    }

    function mQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, rQ.pageOperatingSystem)();
      if ("webgpu" !== QQ.backend) return !1;
      const qQ = TW(QQ, WQ, "terrainFetch", "texture", "storage");
      return null !== qQ ? qQ : null !== QQ.adapter && ((0, yQ.j)(QQ.adapter, XQ) || (0, yQ.h)(QQ.adapter, wQ))
    }

    function MQ(QQ, WQ) {
      if ("webgpu" !== QQ.backend) return !1;
      const XQ = TW(QQ, WQ, "skyOrder", "early", "last");
      return null !== XQ ? XQ : null !== QQ.adapter && (0, TQ.e)(QQ.adapter.vendor, QQ.adapter.architecture) === EQ
    }

    function QW(QQ, WQ) {
      if ("webgpu" !== QQ.backend) return !1;
      const XQ = TW(QQ, WQ, "uploadCopies", "off", "on");
      return null !== XQ ? XQ : null !== QQ.adapter && "powervr_rogue" === (0, TQ.e)(QQ.adapter.vendor, QQ.adapter.architecture)
    }

    function WW(QQ, WQ, XQ) {
      if ("webgpu" !== QQ.backend) return !1;
      const wQ = TW(QQ, WQ, "sceneDepth", "off", "on");
      return null !== wQ ? wQ : null !== QQ.adapter && (0, yQ.l)(QQ.adapter, XQ)
    }

    function XW(QQ, WQ) {
      return "webgl" === QQ.backend ? TW(QQ, WQ, "instancedTerrain", "1", "0") : null
    }

    function wW(QQ, WQ) {
      return "webgpu" !== QQ.backend || WQ && (null === QQ.adapter || !(0, BQ.E)(QQ.adapter))
    }

    function qW(QQ, WQ, XQ, wQ) {
      const qQ = new URLSearchParams(WQ).get(XQ),
        TQ = null !== qQ && void 0 !== qQ ? qQ : null === QQ ? null : (0, FQ.h)(XQ);
      return null !== TQ && wQ(TQ) ? (ZQ ||= null === qQ && "webgpu" === (null === QQ || void 0 === QQ ? void 0 : QQ.backend), TQ) : null
    }

    function TW(QQ, WQ, XQ, wQ, qQ) {
      const TQ = qW(QQ, WQ, XQ, (QQ => QQ === wQ || QQ === qQ));
      return null === TQ ? null : TQ === wQ
    }

    function zW(QQ) {
      return null !== QQ && "missing" in QQ
    }

    function sW(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !gW(),
        XQ = arguments.length > 2 ? arguments[2] : void 0;
      return WQ ? function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ.b,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const wQ = "start_failed" === QQ || "pipeline_failed" === QQ,
            qQ = (0, aQ.i)(QQ, XQ),
            TQ = WQ.turnOffWebGpuAfterDeviceLoss(wQ ? "visible" : (0, BQ.n)((0, IQ.g)()), wQ, qQ);
          return ZQ && (0, FQ.A)("webgpuLoss"), WQ.isWebGpuOffAfterLoss() && "webgpu" === oQ(jQ.i.getItem(gQ.d)) && jQ.i.removeItem(gQ.d), (0, sQ.m)("webgpuloss") && (0, PQ.b)((WQ => {
            var XQ;
            WQ.noteWebGpuLoss("wasm", TQ ? QQ : `${QQ}, which storage didn't keep`, null !== (XQ = qQ.message) && void 0 !== XQ ? XQ : null)
          })), TQ
        } catch {
          return !1
        }
      }(QQ, zQ.b, XQ) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const FW = "framePacing";

    function PW(QQ, WQ) {
      const XQ = qW("webgpu" === (null === WQ || void 0 === WQ ? void 0 : WQ.backend) ? WQ : null, QQ, FW, (QQ => /^\d{1,9}$/.test(QQ)));
      return null === XQ ? void 0 : Number(XQ)
    }

    function gW() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === oQ(new URLSearchParams(QQ).get(gQ.c))
      } catch {
        return !1
      }
    }

    function JW(QQ) {
      return !!rW(QQ) || QQ instanceof Error && !(QQ instanceof WebAssembly.RuntimeError) && QQ.message.startsWith(`${GQ.n.RenderSurfaceUnusable}:`)
    }

    function rW(QQ) {
      const {
        name: WQ,
        message: XQ
      } = null !== QQ && void 0 !== QQ ? QQ : {};
      return "InvalidStateError" === WQ && "string" === typeof XQ && XQ.startsWith("GPUDevice.")
    }

    function IW(QQ) {
      const WQ = QQ;
      return "function" === typeof WQ.jwQ && "function" === typeof WQ.BwQ ? WQ : null
    }

    function jW(QQ) {
      return "function" === typeof QQ.ey ? QQ : null
    }
    const BW = "openRenderer";
    const yW = 5e3,
      VW = 15e3;

    function DW(QQ, WQ, XQ, wQ, qQ, TQ) {
      return (0, bQ.n)(function(QQ, WQ, XQ, wQ, qQ, TQ) {
        return (0, vQ.i)(QQ, WQ, (() => QQ.ey(XQ, wQ, qQ, TQ.indirectHangs, TQ.storagePullBreaks, TQ.splitPassBreaks, TQ.earlySky, TQ.instancedTerrain, TQ.cellLight, TQ.framesAhead, TQ.webGpuRestores, TQ.bufferCopiesCrash)))
      }(QQ, WQ, XQ, wQ, qQ, TQ), VW, `${GQ.n.RenderSurfaceUnusable}: the renderer didn't open in ${VW/1e3} s`, GW)
    }
    async function pW(QQ, WQ, XQ, wQ, qQ, TQ) {
      if ("function" !== typeof QQ.hzQ) throw new Error("this core has no set_renderer");
      const zQ = await DW(WQ, BW, XQ, qQ, wQ, TQ);
      try {
        QQ.hzQ(zQ)
      } catch (sQ) {
        throw GW(zQ), sQ
      }
    }

    function GW(QQ) {
      try {
        QQ.free()
      } catch {}
    }
  },
  41034: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    const wQ = {
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
  40967: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => jQ,
      e: () => BQ,
      g: () => rQ,
      i: () => JQ
    });
    const wQ = 2e3,
      qQ = "unavailable";
    let TQ = () => Promise.resolve().then((() => XQ(3179))),
      zQ = null,
      sQ = null,
      FQ = PQ();

    function PQ() {
      let QQ = () => {};
      return {
        promise: new Promise((WQ => {
          QQ = () => {
            WQ(null)
          }
        })),
        resolve: QQ
      }
    }

    function gQ() {
      if (null === zQ) {
        const QQ = TQ();
        zQ = QQ, QQ.then((WQ => {
          zQ === QQ && (sQ = WQ)
        }), (() => {
          zQ === QQ && (zQ = null)
        }))
      }
      return zQ
    }

    function JQ() {
      gQ().catch((() => {}))
    }

    function rQ() {
      FQ.resolve()
    }

    function IQ(QQ, WQ, XQ, wQ) {
      if (null === QQ) return {
        errorKind: WQ,
        fingerprint: qQ,
        dedupe: `${WQ}|${wQ}`
      };
      const {
        fingerprint: TQ
      } = QQ.clientErrorKey(WQ, XQ, wQ);
      return {
        errorKind: WQ,
        fingerprint: TQ,
        dedupe: TQ
      }
    }

    function jQ(QQ, WQ, XQ, wQ) {
      return null === sQ ? wQ ? (JQ(), IQ(null, QQ, WQ, XQ)) : null : IQ(sQ, QQ, WQ, XQ)
    }
    async function BQ(QQ, WQ, XQ) {
      let qQ;
      const TQ = new Promise((QQ => {
        qQ = setTimeout((() => {
          QQ(null)
        }), wQ)
      }));
      try {
        return IQ(await Promise.race([gQ(), TQ, FQ.promise]), QQ, WQ, XQ)
      } catch {
        return IQ(null, QQ, WQ, XQ)
      } finally {
        clearTimeout(qQ)
      }
    }
  },
  40963: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      BUILT_IN_ANIMATIONS_SITE: () => KQ,
      CORE_ERRORS_SITE: () => SQ,
      EVENT_OVERFLOW_SITE: () => OQ,
      FIRST_VIEW_SITE: () => QW,
      JOIN_SITE: () => oQ,
      LEAVE_SITE: () => eQ,
      MAIN_THREAD_SITE: () => WW,
      MODEL_FEED_SITE: () => nQ,
      MODEL_POOL_SITE: () => xQ,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => TW,
      NON_FATAL_REPORTS_PER_SESSION: () => vW,
      PREVIEW_ANIMATIONS_SITE: () => ZQ,
      RENDER_RELOAD_SITE: () => NQ,
      REQUEST_DEVICE_SITE: () => XW,
      TEXTURE_NAMES_SITE: () => YQ,
      TEXTURE_PACK_FEED_SITE: () => mQ,
      TEXTURE_PACK_SWAP_SITE: () => MQ,
      TurnstilePageError: () => FX,
      WASM_LOAD_SITE: () => tQ,
      countRenderLost: () => oX,
      crashError: () => iW,
      crashReportsSettled: () => fW,
      deviceLossFields: () => nW,
      deviceLossWords: () => kX,
      flushCrashReports: () => LW,
      joinFailureCode: () => PX,
      lokiTransport: () => FW,
      modelFailureCode: () => yX,
      readTrap: () => NW,
      renderLoss: () => tX,
      renderReloadMessage: () => fX,
      reportCoreErrors: () => oW,
      reportCountedLoadFallback: () => zX,
      reportCrash: () => cW,
      reportDataLoadFailure: () => ZX,
      reportDisconnect: () => jX,
      reportDracoDecoderFailure: () => GX,
      reportDroppedRequiredLimits: () => qX,
      reportEventOverflow: () => dX,
      reportFirstViewNoTerrain: () => cX,
      reportLightFault: () => lX,
      reportMainStall: () => AX,
      reportMemoryShed: () => iX,
      reportModelFailure: () => VX,
      reportModelPoolFailure: () => DX,
      reportModelsModuleRetry: () => pX,
      reportNoBackendRetry: () => wX,
      reportPageJoinFailure: () => JX,
      reportReconnectGaveUp: () => BX,
      reportRenderRecovery: () => EW,
      reportRenderReload: () => xX,
      reportReplayFault: () => EX,
      reportStaleBuildReload: () => KX,
      reportStoppedCore: () => mW,
      reportTerrainTextureFailure: () => YX,
      reportTexturePackFeedLoadFailure: () => bX,
      reportTexturePackKeptOut: () => vX,
      reportUnstreamedCoreLoad: () => sX,
      reportUnsupportedFallback: () => XX,
      reportUnusedSeat: () => IX,
      reportWorkerLost: () => HX,
      reportWorkerStartTimeout: () => RX,
      reportWorldgenGaveUp: () => hX,
      reportWorldgenLoadFailure: () => UX,
      reportWorldgenWorkerLost: () => aX,
      resetCrashReports: () => SW,
      setCrashAdPreload: () => VW,
      setCrashBackend: () => yW,
      setCrashScreen: () => IW,
      setCrashTransport: () => JW,
      showCrash: () => KW,
      showJoinFailure: () => gX,
      showUnsupported: () => QX,
      unknownSkyWords: () => tW
    });
    var wQ = XQ(1049),
      qQ = XQ(1384),
      TQ = XQ(1376),
      zQ = XQ(1109),
      sQ = XQ(307),
      FQ = XQ(3183),
      PQ = XQ(4610),
      gQ = XQ(40967),
      JQ = XQ(5134),
      rQ = XQ(40970),
      IQ = XQ(34354),
      jQ = XQ(3223),
      BQ = XQ(34346),
      yQ = XQ(39038),
      VQ = XQ(158),
      DQ = XQ(150),
      pQ = XQ(3230),
      GQ = XQ(36795),
      UQ = XQ(1854),
      bQ = XQ(40984),
      vQ = XQ(40829),
      dQ = XQ(40908),
      HQ = XQ(40910),
      aQ = XQ(36788),
      lQ = XQ(3107),
      hQ = XQ(3110),
      iQ = XQ(41002),
      cQ = XQ(41020),
      AQ = XQ(41022),
      RQ = XQ(37149),
      EQ = XQ(3500),
      CQ = XQ(36552),
      uQ = XQ(40943),
      LQ = XQ(36568),
      kQ = XQ(41039);
    const fQ = "[bloxd-wasm-client]",
      SQ = "coreErrors",
      tQ = "wasmLoad",
      oQ = "join",
      eQ = "leave",
      nQ = "modelFeed",
      xQ = "modelWorkerPool",
      YQ = "textureNames",
      NQ = "renderReload",
      ZQ = "previewAnimations",
      OQ = "eventOverflow",
      KQ = "builtInAnimations",
      mQ = "texturePackFeed",
      MQ = "texturePackSwap",
      QW = "firstView",
      WW = "mainThread",
      XW = "requestDevice",
      wW = 300,
      qW = 64,
      TW = 8;
    let zW = 0;
    const sW = new Set,
      FW = (QQ, WQ) => {
        const XQ = DW[QQ.kind],
          wQ = {
            backend: jW,
            adPreload: BW
          };
        if (null === XQ) return void PW(QQ, WQ, wQ, null);
        const qQ = (0, gQ.b)(XQ, QQ.message, QQ.code, QQ.fatal);
        null === qQ ? uW("Loki", (async () => {
          PW(QQ, WQ, wQ, await (0, gQ.e)(XQ, QQ.message, QQ.code))
        })) : PW(QQ, WQ, wQ, qQ)
      };

    function PW(QQ, WQ, XQ, wQ) {
      let {
        backend: qQ,
        adPreload: TQ
      } = XQ;
      const {
        kind: sQ,
        code: PQ,
        site: gQ,
        fatal: JQ,
        details: rQ
      } = QQ;
      if (!JQ)
        if (null === wQ || (0, FQ.e)(wQ.errorKind) || sW.has(wQ.dedupe)) {
          if (zW >= TW) return;
          zW++
        } else sW.add(wQ.dedupe);
      const IQ = {
        ...rQ,
        kind: sQ,
        code: PQ,
        site: gQ,
        fatal: String(JQ),
        backend: qQ
      };
      TQ && (IQ.adPreload = "true"), null !== wQ && (IQ.errorKind = wQ.errorKind, IQ.fingerprint = wQ.fingerprint), WQ instanceof Error && "string" === typeof WQ.stack && (IQ.causeStack = WQ.stack.slice(0, 2e3)), (0, zQ.jB)(iW(QQ, WQ), IQ)
    }
    let gW = FW;

    function JW(QQ) {
      const WQ = gW;
      return gW = QQ, WQ
    }
    let rW = () => {};

    function IW(QQ) {
      const WQ = rW;
      return rW = QQ, WQ
    }
    let jW = "unpicked",
      BW = !1;

    function yW(QQ) {
      jW = QQ
    }

    function VW(QQ) {
      BW = QQ
    }
    const DW = {
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
      pW = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      GW = new Set(["unstreamedLoad"]),
      UW = new Set(["linkCensus", "linksReadAfterView"]);
    let bW = !1;
    const vW = 20,
      dW = new Map;
    let HW = 0,
      aW = 0;
    const lW = new Set,
      hW = new Set;

    function iW(QQ, WQ) {
      const XQ = Object.assign(new Error(`${QQ.code}: ${QQ.message}`), {
        name: "WasmClientCrash",
        cause: null !== WQ && void 0 !== WQ ? WQ : void 0
      });
      return WQ instanceof Error && WQ.stack && (XQ.stack = WQ.stack), XQ
    }

    function cW(QQ) {
      var WQ, wQ;
      const {
        kind: qQ,
        code: TQ,
        site: zQ,
        fatal: sQ,
        message: FQ,
        error: PQ
      } = QQ, gQ = !1 !== QQ.toTransport && !GW.has(qQ), JQ = !sQ && gQ && !UW.has(qQ), rQ = {
        kind: qQ,
        code: TQ,
        site: zQ,
        fatal: sQ,
        message: FQ,
        details: null !== (WQ = QQ.details) && void 0 !== WQ ? WQ : {}
      }, IQ = `${TQ}@${zQ}${void 0===QQ.instance?"":`#${QQ.instance}`}${sQ?"!":""}`, jQ = (null !== (wQ = dW.get(IQ)) && void 0 !== wQ ? wQ : 0) + 1;
      if (dW.set(IQ, jQ), void 0 !== QQ.countAs && 1 === jQ && RW(QQ.countAs), jQ > 1 ? 0 === (jQ & jQ - 1) && CW((() => {
          console.warn(`${fQ} ${TQ} at ${zQ} reported ${jQ} times`)
        })) : JQ && HW >= vW ? CW((() => {
          console.warn(`${fQ} ${qQ} ${TQ} at ${zQ}: ${FQ} (not sent: the session's ${vW} went)`, rQ.details, null !== PQ && void 0 !== PQ ? PQ : "")
        })) : (JQ && HW++, function(QQ, WQ, wQ, qQ) {
          var TQ, zQ;
          const {
            kind: sQ,
            code: FQ,
            site: PQ,
            fatal: gQ,
            message: JQ,
            details: rQ
          } = QQ;
          CW((() => {
            (gQ ? console.error : console.warn)(`${fQ} ${sQ} ${FQ} at ${PQ}: ${JQ}`, rQ, null !== WQ && void 0 !== WQ ? WQ : "")
          }));
          const IQ = pW[sQ],
            jQ = null !== (TQ = null !== (zQ = DW[sQ]) && void 0 !== zQ ? zQ : IQ) && void 0 !== TQ ? TQ : null;
          qQ || null === jQ || AW((async () => {
            const {
              reportCappedWasmFailure: WQ,
              reportUncappedWasmFailure: wQ,
              reportWasmFailure: qQ
            } = await XQ.e(199).then((() => XQ(34339))), TQ = UW.has(sQ) ? wQ : void 0 === IQ ? qQ : WQ, zQ = function(QQ) {
              let {
                kind: WQ,
                site: XQ,
                fatal: wQ,
                details: qQ
              } = QQ;
              if ("crash" !== WQ) return;
              return {
                ...qQ,
                site: XQ,
                fatal: String(wQ)
              }
            }(QQ);
            void 0 === zQ ? TQ(jQ, JQ, FQ) : TQ(jQ, JQ, FQ, zQ)
          }));
          wQ && CW((() => {
            gW(QQ, WQ)
          }))
        }(rQ, PQ, gQ, void 0 !== QQ.countAs)), sQ) {
        var BQ;
        const WQ = null !== (BQ = QQ.screen) && void 0 !== BQ ? BQ : {
          text: (0, RQ.f)(rQ, !0),
          reload: !0
        };
        CW((() => {
          rW(WQ)
        }))
      }
      return rQ
    }

    function AW(QQ) {
      uW("counts", (async () => {
        const {
          peekVisitSessionId: WQ
        } = await Promise.resolve().then((() => XQ(698)));
        null !== WQ() && (await QQ(), bW = !0)
      }))
    }

    function RW(QQ) {
      lW.has(QQ.errorKind) || (lW.add(QQ.errorKind), AW((async () => {
        const {
          reportClientError: WQ
        } = await Promise.resolve().then((() => XQ(3176)));
        WQ(QQ.errorKind, QQ.error, QQ.code, !0, void 0, QQ.fields)
      })))
    }

    function EW(QQ, WQ) {
      uW("render_lost", (async () => {
        const [{
          reportClientError: wQ
        }, {
          CAPPED_COUNTS_VISIT_CAP: qQ
        }] = await Promise.all([Promise.resolve().then((() => XQ(3176))), XQ.e(199).then((() => XQ(34339)))]);
        wQ("render_lost", WQ, QQ, !0, qQ)
      }))
    }

    function CW(QQ) {
      try {
        QQ()
      } catch (WQ) {
        try {
          console.warn(`${fQ} could not send a report`, WQ)
        } catch {}
      }
    }

    function uW(QQ, WQ) {
      try {
        const XQ = WQ().catch((WQ => {
          console.warn(`${fQ} could not send the report to ${QQ}`, WQ)
        })).finally((() => {
          hW.delete(XQ)
        }));
        hW.add(XQ)
      } catch (XQ) {
        console.warn(`${fQ} could not send the report to ${QQ}`, XQ)
      }
    }
    async function LW(QQ) {
      let WQ;
      (0, gQ.g)();
      const XQ = new Promise((XQ => {
        WQ = setTimeout(XQ, QQ)
      }));
      await Promise.race([kW(), XQ]), clearTimeout(WQ)
    }
    async function kW() {
      if (await Promise.allSettled([...hW]), bW) try {
        const {
          flushClientAnalyticsEvents: QQ
        } = await Promise.resolve().then((() => XQ(1546)));
        await QQ()
      } catch (QQ) {
        console.warn(`${fQ} could not send the counts`, QQ)
      }
    }
    async function fW() {
      for (; hW.size > 0;) await Promise.allSettled([...hW])
    }

    function SW() {
      dW.clear(), HW = 0, bW = !1, zW = 0, sW.clear(), aW = 0, lW.clear(), (0, rQ.w)()
    }

    function tW(QQ) {
      const WQ = "object" === typeof QQ && null !== QQ ? QQ.type : QQ;
      return "string" !== typeof WQ ? "sky not named" : `sky ${JSON.stringify(Array.from(WQ).slice(0,qW).join(""))}`
    }

    function oW(QQ, WQ, XQ, wQ) {
      aW += WQ;
      for (const {
          code: sQ,
          detail: FQ
        }
        of QQ) {
        var qQ, TQ, zQ;
        const QQ = (0, JQ.de)(sQ),
          WQ = (0, rQ.c)(sQ, FQ),
          PQ = null === wQ || void 0 === wQ ? void 0 : wQ(sQ, FQ),
          gQ = void 0 !== (null === WQ || void 0 === WQ ? void 0 : WQ.gpuDetails),
          jQ = gQ ? null === (qQ = (0, DQ.y)()) || void 0 === qQ ? void 0 : qQ.renderer : void 0,
          BQ = gQ ? ` ${(0,rQ.m)()}` : "",
          yQ = Array.from([jQ && `gpu ${(0,IQ.b)(jQ)}`, PQ].filter(Boolean).join("; ")).slice(0, wW).join(""),
          VQ = `core error ${QQ}${null!==(TQ=null===WQ||void 0===WQ?void 0:WQ.words)&&void 0!==TQ?TQ:""}${BQ}${yQ?`: ${yQ}`:""}`,
          pQ = {
            errorCode: String(sQ),
            detail: String(FQ),
            droppedBefore: String(aW),
            wasmBuild: XQ.wasm,
            clientVersion: XQ.client,
            ...null === WQ || void 0 === WQ ? void 0 : WQ.gpuDetails,
            ...nW(sQ, FQ)
          };
        null !== WQ && (0, rQ.s)(WQ) ? CW((() => {
          console.warn(`${fQ} coreError CORE-${QQ}: ${VQ} (not sent: the session's render warnings of its kind went)`, pQ)
        })) : eW(sQ) ? CW((() => {
          console.warn(`${fQ} coreError CORE-${QQ}: ${VQ} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, pQ)
        })) : cW({
          kind: YW(sQ, FQ),
          code: `CORE-${QQ}`,
          site: SQ,
          fatal: !1,
          message: VQ,
          details: pQ,
          instance: null !== (zQ = null === WQ || void 0 === WQ ? void 0 : WQ.instance) && void 0 !== zQ ? zQ : xW(sQ, FQ)
        })
      }
    }

    function eW(QQ) {
      if (QQ !== JQ.K.AudioUnknownSound && QQ !== JQ.K.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: WQ,
        lobbyName: XQ
      } = (0, TQ.e)();
      return null !== WQ && (!!(0, wQ.k)(WQ) || QQ === JQ.K.AudioUnknownSound && (0, qQ.g)(WQ, XQ))
    }

    function nW(QQ, WQ) {
      if (QQ !== JQ.K.RenderDeviceLost) return;
      const XQ = WQ >>> JQ.S.LINKS_IN_FLIGHT_SHIFT & JQ.S.LINKS_IN_FLIGHT_MAX,
        wQ = WQ >>> JQ.S.OLDEST_LINK_SHIFT & JQ.S.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(XQ),
        oldestLinkMs: String(wQ * JQ.S.OLDEST_LINK_UNIT_MS)
      }
    }

    function xW(QQ, WQ) {
      return QQ === JQ.K.RenderDeviceLost && 0 !== (WQ & JQ.S.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function YW(QQ, WQ) {
      return QQ === JQ.K.JobsHeapGaveUp ? "meshHeap" : (0, rQ.j)(QQ, WQ) ? "linksReadAfterView" : (0, rQ.g)(QQ, WQ) ? "linkCensus" : "coreError"
    }

    function NW(QQ) {
      return (0, CQ.k)(QQ instanceof uQ.e ? QQ.trap : QQ, lQ.C, lQ.Z)
    }
    const ZW = "declined=js";

    function OW(QQ) {
      return QQ ? {
        labels: [ZW],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function KW(QQ, WQ, XQ) {
      return MW(QQ, WQ, XQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function mW(QQ, WQ, XQ) {
      return MW(QQ, WQ, XQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function MW(QQ, WQ, XQ, wQ, qQ) {
      let {
        memoryDetails: TQ = {},
        declined: zQ = !1
      } = wQ;
      const {
        code: sQ,
        details: FQ,
        message: PQ
      } = (0, bQ.O)(QQ, WQ), gQ = [];
      Object.assign(FQ, (0, LQ.f)(QQ.error)), null !== XQ && (FQ.trapKind = XQ.kind, null !== XQ.panic && (FQ.panic = (0, CQ.i)(XQ.panic)), XQ.refusedBytes > 0 && (FQ.refusedAllocation = String(XQ.refusedBytes)), gQ.push((0, CQ.l)(XQ.kind, XQ.refusedBytes)));
      const JQ = OW(zQ);
      return cW({
        kind: "crash",
        code: sQ,
        site: QQ.site,
        fatal: qQ,
        message: [...gQ, ...JQ.labels, PQ].join("; "),
        details: {
          ...FQ,
          ...JQ.details,
          ...TQ
        },
        error: QQ.error
      })
    }

    function QX(QQ, WQ, XQ) {
      return cW({
        kind: "unsupported",
        code: WQ,
        site: tQ,
        fatal: !0,
        message: XQ,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: QQ,
          status: WQ
        },
        screen: {
          text: (0, RQ.o)(QQ),
          reload: "download" === QQ
        }
      })
    }
    const WX = {
      unsupported: "unsupported_js_fallback",
      blockedAfterLoss: "blocked_after_loss",
      noContext: "no_context_js_fallback"
    };

    function XX(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return cW({
        kind: "unsupportedFallback",
        code: WX[WQ],
        site: tQ,
        fatal: !1,
        message: XQ,
        details: {
          ...wQ,
          cause: QQ,
          status: "unsupported",
          decline: WQ,
          fallback: "js"
        }
      })
    }

    function wX(QQ, WQ, XQ) {
      return cW({
        kind: "recovered",
        code: "reprobed" === QQ ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: tQ,
        fatal: !1,
        message: XQ,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: WQ,
          step: QQ
        }
      })
    }

    function qX(QQ) {
      return cW({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: XW,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: QQ.join(",")
        }
      })
    }
    const TX = "reload=wasm";

    function zX(QQ, WQ, XQ, wQ) {
      const qQ = OW("declined" === wQ),
        TQ = "wasmReload" === wQ ? [TX] : qQ.labels;
      return cW({
        kind: "unsupported",
        code: WQ,
        site: tQ,
        fatal: !1,
        message: [...TQ, XQ].join("; "),
        details: {
          cause: QQ,
          status: WQ,
          fallback: "wasmReload" === wQ ? "wasmReload" : "js",
          ...qQ.details
        }
      })
    }

    function sX() {
      const {
        code: QQ,
        message: WQ
      } = EQ.b;
      return cW({
        kind: "unstreamedLoad",
        code: QQ,
        site: tQ,
        fatal: !1,
        message: WQ
      })
    }
    class FX extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function PX(QQ) {
      return QQ instanceof dQ.q ? 0 === QQ.code ? "JOIN-matchmake" : `JOIN-${QQ.code}` : QQ instanceof dQ.d ? 0 === QQ.code ? `JOIN-${QQ.stage}` : `JOIN-${QQ.stage}-${QQ.code}` : QQ instanceof vQ.c ? "JOIN-gameCode" : QQ instanceof FX ? "JOIN-turnstilePage" : QQ instanceof dQ.B ? "JOIN-trafficCheck" : QQ instanceof GQ.f ? "JOIN-timeout" : "JOIN-network"
    }

    function gX(QQ, WQ) {
      const XQ = (0, LQ.j)(QQ),
        wQ = {
          wasmBuild: WQ.wasm,
          clientVersion: WQ.client
        },
        qQ = QQ instanceof FX ? {
          text: (0, RQ.i)(),
          reload: !1
        } : void 0,
        TQ = (0, HQ.f)(QQ),
        zQ = "expected" !== TQ;
      return cW({
        kind: "join",
        code: PX(QQ),
        site: oQ,
        fatal: !0,
        message: XQ,
        details: wQ,
        error: QQ,
        screen: qQ,
        toTransport: zQ,
        instance: TQ
      })
    }

    function JX(QQ, WQ, XQ) {
      var wQ;
      const qQ = (0, HQ.f)(QQ),
        TQ = {
          cause: (QQ instanceof dQ.d || QQ instanceof dQ.q) && null !== (wQ = QQ.serverText) && void 0 !== wQ ? wQ : "",
          sinceJoinStart: (0, pQ.d)(XQ.sinceJoinStartMs),
          game: XQ.game,
          ...(0, pQ.j)(),
          wasmBuild: WQ.wasm,
          clientVersion: WQ.client
        };
      return cW({
        kind: "pageJoin",
        code: PX(QQ),
        site: oQ,
        fatal: !1,
        message: (0, LQ.j)(QQ),
        details: TQ,
        error: QQ,
        toTransport: "unrecognised" === qQ,
        instance: qQ
      })
    }
    const rX = {
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

    function IX(QQ, WQ) {
      let {
        unused: XQ,
        answered: wQ,
        heldMs: qQ
      } = QQ;
      const {
        code: TQ,
        message: zQ
      } = rX[XQ], sQ = {
        unused: XQ,
        answered: String(wQ),
        heldMs: String(qQ),
        wasmBuild: WQ.wasm,
        clientVersion: WQ.client
      };
      return cW({
        kind: "seat",
        code: TQ,
        site: oQ,
        fatal: !1,
        message: zQ,
        details: sQ
      })
    }

    function jX(QQ, WQ, XQ) {
      var wQ;
      let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (wQ = QQ.name) && void 0 !== wQ ? wQ : String(QQ.code);
      const TQ = {
          closeCode: String(QQ.code),
          recognised: String(null !== QQ.name),
          closeReason: XQ.closeReason,
          sinceJoined: (0, pQ.d)(XQ.sinceJoinedMs),
          game: XQ.game,
          ...(0, pQ.j)(),
          wasmBuild: WQ.wasm,
          clientVersion: WQ.client
        },
        zQ = null === QQ.name && !(0, pQ.e)(QQ.code);
      return cW({
        kind: "disconnect",
        code: qQ,
        site: eQ,
        fatal: !1,
        message: "Left room",
        details: TQ,
        toTransport: zQ
      })
    }

    function BX(QQ, WQ) {
      const XQ = {
        ...(0, jQ.k)(QQ),
        wasmBuild: WQ.wasm,
        clientVersion: WQ.client
      };
      return cW({
        kind: "disconnect",
        code: `reconnect-${QQ.reason}`,
        site: oQ,
        fatal: !1,
        message: "Reconnect failed",
        details: XQ
      })
    }

    function yX(QQ) {
      return QQ.error instanceof hQ.f ? `MODEL-${QQ.error.status}` : QQ.error instanceof iQ.m ? "MODEL-ring" : "MODEL-network"
    }

    function VX(QQ, WQ) {
      const XQ = yX(QQ),
        wQ = `model file ${QQ.file} ${QQ.startup?"(startup) ":""}could not load`,
        qQ = {
          file: String(QQ.file),
          url: QQ.url,
          wasmBuild: WQ.wasm,
          clientVersion: WQ.client
        };
      return cW({
        kind: QQ.startup ? "model" : "modelLate",
        code: XQ,
        site: nQ,
        fatal: QQ.startup,
        message: wQ,
        details: qQ,
        error: QQ.error
      })
    }

    function DX(QQ, WQ) {
      const XQ = {
        wasmBuild: WQ.wasm,
        clientVersion: WQ.client
      };
      return cW({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: xQ,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: XQ,
        error: QQ
      })
    }

    function pX(QQ, WQ, XQ) {
      const wQ = {
        delayMs: String(WQ),
        wasmBuild: XQ.wasm,
        clientVersion: XQ.client
      };
      QQ instanceof hQ.f && (wQ.status = String(QQ.status));
      return cW({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: xQ,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: wQ,
        error: QQ
      })
    }

    function GX(QQ, WQ) {
      const XQ = {
        wasmBuild: WQ.wasm,
        clientVersion: WQ.client
      };
      return cW({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: xQ,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: XQ,
        error: QQ
      })
    }

    function UX(QQ, WQ) {
      const XQ = {
        wasmBuild: WQ.wasm,
        clientVersion: WQ.client
      };
      return cW({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: bQ.I,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: XQ,
        error: QQ
      })
    }

    function bX(QQ, WQ) {
      const XQ = {
        wasmBuild: WQ.wasm,
        clientVersion: WQ.client
      };
      return cW({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: mQ,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: XQ,
        error: QQ
      })
    }

    function vX(QQ, WQ, XQ, wQ) {
      const qQ = {
        wasmBuild: wQ.wasm,
        clientVersion: wQ.client
      };
      return cW({
        kind: "texturePackKeptOut",
        code: (0, PQ.f)("wasm", QQ, WQ),
        site: MQ,
        fatal: !1,
        message: WQ.detail,
        details: qQ,
        error: XQ
      })
    }

    function dX(QQ, WQ) {
      const {
        frames: XQ,
        acks: wQ,
        mask: qQ,
        outcome: TQ
      } = QQ, zQ = {
        frames: String(XQ),
        acks: String(wQ),
        mask: String(qQ),
        outcome: null !== TQ && void 0 !== TQ ? TQ : "resynced",
        wasmBuild: WQ.wasm,
        clientVersion: WQ.client
      };
      return cW({
        kind: "recovered",
        code: "rejoined" === TQ ? "CORE-eventOverflowRejoin" : "failed" === TQ ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: OQ,
        fatal: !1,
        message: `the event buffer refused records in ${XQ} frames`,
        details: zQ
      })
    }

    function HX(QQ, WQ, XQ) {
      return cW({
        kind: "recovered",
        code: "CORE-workerLost",
        site: QQ,
        fatal: !1,
        message: `a ${QQ} worker was lost`,
        details: {
          reason: WQ,
          wasmBuild: XQ.wasm,
          clientVersion: XQ.client
        }
      })
    }

    function aX(QQ, WQ, XQ, wQ) {
      const qQ = {
          reason: QQ,
          pageBuild: wQ.build,
          pageAgeMin: String(Math.floor(wQ.ageMs / 6e4)),
          wasmBuild: XQ.wasm,
          clientVersion: XQ.client
        },
        TQ = WQ ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return cW({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: bQ.I,
        fatal: !1,
        message: TQ,
        details: qQ
      })
    }

    function lX(QQ, WQ, XQ) {
      const wQ = {
        wasmBuild: XQ.wasm,
        clientVersion: XQ.client
      };
      return cW({
        kind: "recovered",
        code: QQ,
        site: bQ.q,
        fatal: !1,
        message: WQ,
        details: wQ
      })
    }

    function hX(QQ, WQ) {
      const XQ = {
        lastReason: QQ,
        wasmBuild: WQ.wasm,
        clientVersion: WQ.client
      };
      return cW({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: bQ.I,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: XQ
      })
    }

    function iX(QQ, WQ, XQ) {
      return cW({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: bQ.n,
        fatal: !1,
        message: `${(0,aQ.z)(QQ)}: the session shed load`,
        details: {
          cause: QQ,
          ...WQ,
          wasmBuild: XQ.wasm,
          clientVersion: XQ.client
        }
      })
    }

    function cX(QQ, WQ, XQ, wQ) {
      var qQ, TQ;
      const zQ = (0, rQ.o)(),
        sQ = {
          game: QQ,
          cause: WQ,
          census: null === XQ ? "none" : JSON.stringify(XQ),
          gpu: null !== (qQ = null === (TQ = (0, DQ.y)()) || void 0 === TQ ? void 0 : TQ.renderer) && void 0 !== qQ ? qQ : "",
          renderWarned: String(zQ),
          browser: (0, rQ.m)(),
          wasmBuild: wQ.wasm,
          clientVersion: wQ.client
        },
        FQ = `first view drew no whole terrain in ${cQ.h/1e3} s, ${WQ}${zQ?", render warned":""}`;
      return cW({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: QW,
        fatal: !1,
        message: FQ,
        details: sQ
      })
    }

    function AX(QQ, WQ, XQ, wQ, qQ) {
      const TQ = (0, BQ.e)(),
        zQ = (0, BQ.d)(QQ, WQ, XQ, wQ, TQ),
        sQ = {
          gpuModel: TQ,
          wasmBuild: qQ.wasm,
          clientVersion: qQ.client
        };
      return cW({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: WW,
        fatal: !1,
        message: zQ,
        details: sQ
      })
    }

    function RX(QQ, WQ, XQ) {
      return cW({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: QQ,
        fatal: !1,
        message: `a ${QQ} worker did not start`,
        details: {
          waitedMs: String(Math.round(WQ)),
          wasmBuild: XQ.wasm,
          clientVersion: XQ.client
        }
      })
    }

    function EX(QQ, WQ, XQ) {
      return cW({
        kind: "recovered",
        code: "CORE-replayFault",
        site: QQ,
        fatal: !1,
        message: `the replay's ${QQ} failed`,
        details: {
          wasmBuild: XQ.wasm,
          clientVersion: XQ.client
        },
        error: WQ
      })
    }
    const CX = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function uX(QQ) {
      if (0 === QQ) return "none";
      const WQ = [60, 600, 3600].find((WQ => QQ < WQ));
      return void 0 === WQ ? "ge3600" : `lt${WQ}`
    }

    function LX(QQ, WQ) {
      return null === QQ ? "unbound" : (0, yQ.l)(WQ - QQ)
    }

    function kX(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (QQ & JQ.S.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (QQ & JQ.S.LINKS_RUNNING) ? "links running" : "", `frames ${(0,IQ.b)(uX(QQ&JQ.S.FRAMES))}`, `up ${(0,IQ.b)(LX(WQ,XQ))}`].filter(Boolean).join(", ")
    }

    function fX(QQ, WQ, XQ) {
      const wQ = "lost" === WQ && void 0 !== XQ ? ` (${XQ})` : "";
      return `the ${QQ} ${CX[WQ]}${wQ}`
    }
    const SX = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function tX(QQ, WQ, XQ, wQ) {
      var qQ;
      let {
        restoreLost: TQ = !1,
        adapterRemembered: zQ = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, sQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const FQ = null === XQ || void 0 === XQ ? void 0 : XQ.message,
        PQ = "pipeline_failed" === WQ ? WQ : XQ instanceof UQ.g ? "timeout" : (0, yQ.s)("frames_refused" === WQ, "string" === typeof FQ ? FQ : ""),
        gQ = null === wQ.boundAtMs ? "unbound" : `up${(0,yQ.h)(sQ-wQ.boundAtMs)}`,
        JQ = null === wQ.adapter ? "no adapter" : (0, yQ.o)(wQ.adapter),
        rQ = `${!0===wQ.indirectHangs?" ih":""}${!0===wQ.restoresSkipped?" nr":""}${TQ?" rl":""}${zQ?" ar":""}`,
        IQ = `${PQ} ${(0,UQ.k)()?"hidden":"visible"} ${gQ}${rQ} ${JQ}`;
      if ("webgpu" !== QQ || "lost" !== WQ && "frames_refused" !== WQ) return {
        detail: IQ,
        count: void 0
      };
      return {
        detail: IQ,
        count: {
          errorKind: "render_lost",
          error: new Error(IQ),
          code: (0, yQ.z)(PQ, null !== (qQ = wQ.boundAtMs) && void 0 !== qQ ? qQ : sQ, sQ).code,
          fields: {
            renderBackend: kQ.e.webgpu
          }
        }
      }
    }

    function oX(QQ, WQ, XQ) {
      const {
        count: wQ
      } = tX("webgpu", QQ, WQ, XQ);
      void 0 !== wQ && RW(wQ)
    }
    const eX = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function nX(QQ) {
      var WQ;
      return null !== (WQ = QQ instanceof Error ? QQ.reason : void 0) && void 0 !== WQ ? WQ : ""
    }

    function xX(QQ, WQ, wQ) {
      var qQ, TQ, zQ, FQ, PQ;
      let {
        from: gQ,
        cause: JQ = "lost",
        restoreLost: jQ = !1,
        adapterRemembered: BQ = !1,
        error: DQ,
        context: pQ = SX,
        session: GQ = eX
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, UQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: bQ,
        count: vQ
      } = tX(QQ, JQ, DQ, pQ, {
        restoreLost: jQ,
        adapterRemembered: BQ
      }, UQ), dQ = {
        reloadFrom: null !== gQ && void 0 !== gQ ? gQ : "",
        losses: String(WQ),
        cause: JQ,
        detail: bQ,
        vendor: null !== (qQ = null === (TQ = pQ.adapter) || void 0 === TQ ? void 0 : TQ.vendor) && void 0 !== qQ ? qQ : "",
        architecture: null !== (zQ = null === (FQ = pQ.adapter) || void 0 === FQ ? void 0 : FQ.architecture) && void 0 !== zQ ? zQ : "",
        indirectHangs: String(pQ.indirectHangs),
        restoresSkipped: String(pQ.restoresSkipped),
        restoreLost: String(jQ),
        adapterRemembered: String(BQ),
        lossReason: nX(DQ),
        samples: String(GQ.samples),
        sunShadows: String(GQ.sunShadows),
        renderDistance: String(GQ.renderDistance),
        gpuFamily: null !== (PQ = (0, sQ.b)()) && void 0 !== PQ ? PQ : "",
        browser: (0, rQ.m)(),
        siteUsed: VQ.siteUsed,
        wasmBuild: wQ.wasm,
        clientVersion: wQ.client
      }, HQ = "webgpu" !== QQ && void 0 !== gQ ? function(QQ, WQ, XQ, wQ) {
        return `: ${QQ}, ${WQ?"restore lost":"not restored"}, up ${(0,IQ.b)(LX(XQ,wQ))}`
      }(gQ, jQ, pQ.boundAtMs, UQ) : "", aQ = `${fX(QQ,JQ)}${HQ}`, lQ = cW({
        kind: "recovered",
        code: "CORE-renderLost",
        site: NQ,
        fatal: !1,
        message: aQ,
        details: dQ,
        error: DQ,
        countAs: vQ
      });
      return uW("ga", (async () => {
        const {
          logError: WQ
        } = await Promise.resolve().then((() => XQ(3158))), wQ = `${yQ.d["webgpu"===QQ?"WebGPU":"WebGL2"]}\n Error: ${bQ}`;
        WQ("warning", wQ), WQ("error", wQ)
      })), lQ
    }

    function YX(QQ, WQ) {
      var XQ, wQ;
      const qQ = null === QQ.name ? "TEXTURE-sources" : null === QQ.url ? "TEXTURE-nourl" : QQ.error instanceof AQ.d ? `TEXTURE-${QQ.error.status}` : "TEXTURE-network",
        TQ = null === QQ.name ? "terrain textures could not load" : `terrain texture ${QQ.name} could not load`,
        zQ = {
          texture: null !== (XQ = QQ.name) && void 0 !== XQ ? XQ : "",
          url: null !== (wQ = QQ.url) && void 0 !== wQ ? wQ : "",
          wasmBuild: WQ.wasm,
          clientVersion: WQ.client
        };
      return cW({
        kind: "terrainTexture",
        code: qQ,
        site: bQ.E,
        fatal: !1,
        message: TQ,
        details: zQ,
        error: QQ.error
      })
    }
    const NX = {
      previewAnimations: {
        site: ZQ,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: KQ,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function ZX(QQ, WQ, XQ, wQ) {
      const {
        site: qQ,
        prefix: TQ,
        name: zQ
      } = NX[QQ], {
        stage: sQ,
        error: FQ
      } = XQ;
      return cW({
        kind: QQ,
        code: "decode" === sQ ? null === FQ ? `${TQ}-decode` : `${TQ}-trap` : FQ instanceof hQ.f ? `${TQ}-${FQ.status}` : `${TQ}-network`,
        site: qQ,
        fatal: !1,
        message: "decode" === sQ ? `${zQ} did not decode` : `${zQ} could not load`,
        details: {
          url: WQ,
          wasmBuild: wQ.wasm,
          clientVersion: wQ.client
        },
        error: FQ
      })
    }
    const OX = "staleBuild";

    function KX(QQ, WQ, XQ) {
      const wQ = {
          failedSite: QQ.site,
          url: QQ.url,
          from: QQ.from,
          sameBuild: String(QQ.from === WQ),
          reloadMs: String(Math.max(0, Date.now() - QQ.at)),
          wasmBuild: XQ.wasm,
          clientVersion: XQ.client
        },
        qQ = `reloaded into a newer build after ${QQ.site} failed to load: ${QQ.error}`;
      return cW({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: OX,
        fatal: !1,
        message: qQ,
        details: wQ
      })
    }
  },
  41020: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      h: () => qQ,
      k: () => zQ
    });
    var wQ = XQ(5140);
    const qQ = 3e4;
    class TQ {
      constructor(QQ) {
        this.nI = QQ, this.waitedMs = 0, this.lastMs = null
      }
      frame(QQ, WQ) {
        if (WQ) return !0;
        const XQ = null === this.lastMs ? 0 : QQ - this.lastMs;
        return this.lastMs = QQ, XQ <= 900 && (this.waitedMs += XQ), !(this.waitedMs < qQ) && (this.nI(), !0)
      }
    }

    function zQ(QQ, WQ) {
      return 0 === (QQ & wQ.V.ChunkRequested) ? "no_chunk_request" : 0 === (QQ & wQ.V.ChunkStored) ? "chunk_not_stored" : 0 === (QQ & wQ.V.MeshLanded) ? "not_meshed" : null === WQ ? "no_frame_drawn" : 0 === WQ.terrainParts ? "no_terrain_parts" : WQ.terrainCompiling > 0 ? "terrain_compiling" : WQ.terrainOpaque + WQ.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40829: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => jQ,
      c: () => wQ,
      f: () => VQ,
      j: () => BQ,
      m: () => yQ,
      p: () => rQ,
      t: () => IQ,
      u: () => gQ,
      y: () => JQ
    });
    class wQ extends Error {
      constructor(QQ) {
        super(`the join's code did not load: ${QQ instanceof Error?QQ.message:String(QQ)}`, {
          cause: QQ
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === QQ || void 0 === QQ ? void 0 : QQ.request
      }
    }
    let qQ = null,
      TQ = null,
      zQ = null;
    const sQ = [];
    let FQ = null;

    function PQ(QQ, WQ) {
      try {
        QQ(WQ)
      } catch (XQ) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", XQ)
      }
    }

    function gQ() {
      return FQ
    }

    function JQ(QQ) {
      sQ.push(QQ), null !== FQ && PQ(QQ, FQ)
    }

    function rQ(QQ) {
      return qQ ??= Promise.all([XQ.e(75), XQ.e(101), XQ.e(230), XQ.e(80), XQ.e(231), XQ.e(206), XQ.e(100), XQ.e(250), XQ.e(277), XQ.e(204), XQ.e(218), XQ.e(203), XQ.e(193), XQ.e(195), XQ.e(146), XQ.e(91), XQ.e(124), XQ.e(256), XQ.e(59)]).then((() => XQ(42859))).then((WQ => {
        WQ.loadAudio(QQ), FQ = WQ;
        for (const QQ of sQ) PQ(QQ, WQ);
        return WQ
      })).catch((QQ => {
        throw qQ = null, QQ
      })), qQ
    }
    async function IQ(QQ, WQ) {
      try {
        const XQ = await rQ(QQ);
        await XQ.loadClientGame(WQ)
      } catch (XQ) {
        throw new wQ(XQ)
      }
    }

    function jQ(QQ, WQ) {
      TQ = {
        running: QQ,
        shell: WQ
      }
    }

    function BQ() {
      return zQ
    }
    async function yQ(QQ) {
      const WQ = TQ;
      if ((null === WQ || void 0 === WQ ? void 0 : WQ.running) !== QQ) throw new Error("the core's session has ended");
      const XQ = await rQ(WQ.shell.audio).catch((QQ => {
        throw new wQ(QQ)
      }));
      if (null !== zQ) return zQ;
      if (TQ !== WQ || QQ.isStopped) throw new Error("the core stopped while the game code loaded");
      if (zQ = XQ.startGameHost(QQ, WQ.shell), null === zQ) throw new Error("the core's shared tables didn't read, so the game can't start");
      return zQ
    }

    function VQ() {
      null !== zQ && (null !== FQ ? FQ.endGameHost(zQ) : zQ.closeGame()), zQ = null, TQ = null
    }
  },
  40934: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    const wQ = {
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
  40908: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => JQ,
      C: () => sQ,
      d: () => PQ,
      f: () => TQ,
      j: () => zQ,
      m: () => qQ,
      q: () => IQ,
      r: () => gQ,
      t: () => FQ,
      x: () => rQ
    });
    var wQ = XQ(1857);
    const qQ = new Uint8Array([12]),
      TQ = 2e3,
      zQ = 257;

    function sQ(QQ) {
      const WQ = new Uint8Array(4);
      return new DataView(WQ.buffer).setUint32(0, QQ, !0), WQ
    }
    class FQ extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class PQ extends Error {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(QQ), this.stage = WQ, this.code = XQ, this.serverText = wQ, this.socketOpened = qQ, this.name = "JoinError"
      }
    }
    class gQ extends Error {
      constructor(QQ) {
        super(QQ), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class JQ extends Error {
      constructor(QQ) {
        super((0, wQ.f)(QQ), {
          cause: QQ
        }), this.name = "TrafficCheckError"
      }
    }
    class rQ extends Error {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(QQ, {
          cause: XQ
        }), this.networkLost = WQ, this.httpStatus = wQ, this.name = "SeatRequestError"
      }
    }
    class IQ extends Error {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(QQ), this.code = WQ, this.serverText = XQ, this.name = "MatchmakeError"
      }
    }
  },
  40910: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => IQ,
      f: () => rQ,
      g: () => jQ
    });
    var wQ = XQ(2780),
      qQ = XQ(3230),
      TQ = XQ(39336),
      zQ = XQ(36795),
      sQ = XQ(39341),
      FQ = XQ(40908),
      PQ = XQ(40915);
    const gQ = "seat reservation expired.",
      JQ = "early_leave";

    function rQ(QQ) {
      if (QQ instanceof zQ.f) return "expected";
      if (QQ instanceof FQ.x) return QQ.networkLost ? "expected" : "unrecognised";
      if (QQ instanceof FQ.d) {
        if ("closed" === QQ.stage && (0 === QQ.code || (0, qQ.e)(QQ.code))) return "expected";
        if ("roomError" === QQ.stage && (QQ.serverText === gQ || QQ.serverText === JQ)) return "expected"
      }
      return QQ instanceof FQ.d || QQ instanceof FQ.q ? null === (0, sQ.m)(QQ.code).name ? "unrecognised" : "known" : (0, wQ.d)(QQ) ? "expected" : QQ instanceof FQ.B || QQ instanceof PQ.c ? "known" : "unrecognised"
    }

    function IQ(QQ) {
      return QQ instanceof zQ.f ? "timedOut" : "expected" !== rQ(QQ) || (0, wQ.d)(QQ) || QQ instanceof FQ.d && 1001 === QQ.code ? void 0 : "failed"
    }

    function jQ(QQ) {
      return QQ instanceof FQ.d && "attach" !== QQ.stage ? (0, TQ.e)(QQ, "closed" !== QQ.stage || QQ.socketOpened ? "socket" : "socket_unopened") : QQ instanceof FQ.x ? {
        at: "seat_lost",
        code: QQ.httpStatus
      } : QQ instanceof FQ.q || QQ instanceof zQ.f ? (0, TQ.e)(QQ, QQ instanceof zQ.f ? QQ.leg : "seat") : void 0
    }
  },
  41002: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      h: () => PQ,
      i: () => IQ,
      m: () => JQ
    });
    var wQ = XQ(3110),
      qQ = XQ(5134),
      TQ = XQ(41010),
      zQ = XQ(41012),
      sQ = XQ(36568);
    const FQ = 395,
      PQ = 2147483648,
      gQ = new Uint8Array(0);
    class JQ extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class rQ extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class IQ {
      constructor(QQ, WQ, XQ) {
        var wQ, qQ, zQ, sQ;
        let FQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = QQ, this.build = WQ, this.onFailure = XQ, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.HI = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (wQ = FQ.fetchFile) && void 0 !== wQ ? wQ : QQ => (0, TQ.i)(QQ), this.onWritten = null !== (qQ = FQ.onWritten) && void 0 !== qQ ? qQ : null, this.onTaken = null !== (zQ = FQ.onTaken) && void 0 !== zQ ? zQ : null, this.onPackFileFailed = null !== (sQ = FQ.onPackFileFailed) && void 0 !== sQ ? sQ : null, this.startupLeft = new Set(QQ.startup);
        for (const TQ of QQ.startup) this.request(TQ)
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
      drawnUrl(QQ) {
        return this.drawn.get(QQ)
      }
      request(QQ) {
        const WQ = this.pending.get(QQ);
        if (!0 === (null === WQ || void 0 === WQ ? void 0 : WQ.ask)) return;
        const XQ = this.gI(QQ, !0);
        XQ.recheck = void 0 !== WQ;
        const wQ = this.drawn.get(QQ);
        if (void 0 !== wQ) return XQ.Ds = !0, XQ.recheck = !0, void this.fetch(QQ, XQ, wQ);
        this.fetchWanted(QQ, XQ)
      }
      async refresh() {
        const QQ = ++this.refreshes,
          WQ = new Set;
        for (const zQ of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const QQ of zQ) 0 === (QQ & TQ.f) && WQ.add(QQ);
        const XQ = [...WQ];
        let wQ;
        try {
          wQ = await Promise.all(XQ.map((QQ => this.wanted(QQ))))
        } catch {
          return null
        }
        if (QQ !== this.refreshes) return null;
        const qQ = {
          resent: 0,
          refetched: 0,
          delivered: XQ.filter((QQ => this.drawn.has(QQ))).length
        };
        return XQ.forEach(((QQ, WQ) => {
          const {
            url: XQ,
            inPlaceOf: TQ
          } = wQ[WQ], zQ = this.pending.get(QQ);
          if (void 0 !== zQ) {
            if (zQ.Ds || void 0 === zQ.url) return void(zQ.recheck = !0);
            if (zQ.url === XQ) return;
            qQ.refetched++;
            const WQ = this.gI(QQ, zQ.ask);
            return WQ.recheck = zQ.recheck, void this.fetch(QQ, WQ, XQ, TQ)
          }
          const sQ = this.written.get(QQ);
          void 0 === sQ ? this.drawn.get(QQ) !== (null !== XQ && void 0 !== XQ ? XQ : void 0) && (qQ.resent++, this.fetch(QQ, this.gI(QQ, !1), XQ, TQ)) : sQ.url !== (null !== XQ && void 0 !== XQ ? XQ : "") && (sQ.attempt.recheck = !0)
        })), qQ
      }
      taken(QQ, WQ) {
        const XQ = new Set,
          wQ = new Set;
        for (const qQ of Array.from(WQ)) 0 === (qQ & PQ) ? XQ.add(qQ) : wQ.add((qQ & ~PQ) >>> 0);
        for (const [qQ, TQ] of this.written) TQ.seq > QQ || (this.written.delete(qQ), XQ.has(TQ.seq) ? this.refusedFile(qQ, TQ) : this.takenFile(qQ, TQ, !TQ.empty && !wQ.has(TQ.seq)))
      }
      takenFile(QQ, WQ, XQ) {
        const {
          attempt: wQ
        } = WQ;
        if (XQ) {
          var qQ;
          this.drawn.set(QQ, WQ.url), this.undrawn.delete(QQ), void 0 !== wQ.inPlaceOf ? this.refusedPack.set(QQ, wQ.inPlaceOf) : wQ.Ds || this.refusedPack.delete(QQ), null === (qQ = this.onTaken) || void 0 === qQ || qQ.call(this, QQ, !0);
          const XQ = this.pending.get(QQ);
          if (!0 === (null === XQ || void 0 === XQ ? void 0 : XQ.Ds) && XQ.url !== WQ.url) {
            const XQ = this.gI(QQ, !0);
            XQ.Ds = !0, XQ.recheck = !0, this.fetch(QQ, XQ, WQ.url)
          }
        } else {
          var TQ;
          this.drawn.has(QQ) || this.undrawn.add(QQ), null === (TQ = this.onTaken) || void 0 === TQ || TQ.call(this, QQ, !1)
        }
        wQ.recheck && this.resendIfChanged(QQ)
      }
      refusedFile(QQ, WQ) {
        var XQ, wQ;
        if (null === (XQ = this.onTaken) || void 0 === XQ || XQ.call(this, QQ, !1), this.refusedPack.set(QQ, WQ.url), this.pending.has(QQ)) return void(null === (wQ = this.onPackFileFailed) || void 0 === wQ || wQ.call(this, QQ, jQ(WQ.url)));
        const qQ = this.gI(QQ, WQ.attempt.ask);
        qQ.recheck = WQ.attempt.recheck, this.afterRefusal(QQ, qQ, WQ.url)
      }
      async afterRefusal(QQ, WQ, XQ) {
        var wQ;
        let qQ;
        try {
          qQ = await this.wanted(QQ)
        } catch (TQ) {
          return void(this.pending.get(QQ) === WQ && this.giveUp(QQ, WQ, XQ, TQ))
        }
        this.pending.get(QQ) === WQ && (qQ.inPlaceOf !== XQ ? WQ.ask || (null !== (wQ = qQ.url) && void 0 !== wQ ? wQ : void 0) !== this.drawn.get(QQ) ? this.fetch(QQ, WQ, qQ.url, qQ.inPlaceOf) : this.pending.delete(QQ) : this.fallBack(QQ, WQ, XQ, jQ(XQ)))
      }
      gI(QQ, WQ) {
        const XQ = {
          url: void 0,
          ask: WQ,
          Ds: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(QQ, XQ);
        for (let wQ = this.ready.length - 1; wQ >= 0; wQ--) this.ready[wQ].file === QQ && this.ready.splice(wQ, 1);
        return XQ
      }
      async wanted(QQ) {
        const WQ = await this.files.url(QQ);
        return null !== WQ && this.refusedPack.get(QQ) === WQ ? {
          url: await this.files.shippedUrl(QQ),
          inPlaceOf: WQ
        } : {
          url: WQ,
          inPlaceOf: void 0
        }
      }
      fetchWanted(QQ, WQ) {
        const XQ = this.files.url(QQ);
        XQ instanceof Promise ? XQ.then((XQ => {
          this.fetchFound(QQ, WQ, XQ)
        }), (XQ => {
          this.pending.get(QQ) === WQ && this.giveUp(QQ, WQ, "", XQ)
        })) : this.fetchFound(QQ, WQ, XQ)
      }
      fetchFound(QQ, WQ, XQ) {
        null !== XQ && this.refusedPack.get(QQ) === XQ ? Promise.resolve(this.files.shippedUrl(QQ)).then((wQ => {
          this.fetch(QQ, WQ, wQ, XQ)
        }), (wQ => {
          this.pending.get(QQ) === WQ && this.giveUp(QQ, WQ, XQ, wQ)
        })) : this.fetch(QQ, WQ, XQ)
      }
      fetch(QQ, WQ, XQ, wQ) {
        this.pending.get(QQ) === WQ && (WQ.url = XQ, WQ.inPlaceOf = wQ, null !== XQ ? this.load(QQ, WQ, XQ) : this.buildFile(QQ, WQ, "", gQ))
      }
      load(QQ, WQ, XQ) {
        const wQ = this.HI.get(QQ);
        (null === wQ || void 0 === wQ ? void 0 : wQ.url) !== XQ ? this.fetchFile(XQ).then((wQ => {
          var qQ, TQ;
          this.pending.get(QQ) === WQ && (this.keptTotal += wQ.byteLength - (null !== (qQ = null === (TQ = this.HI.get(QQ)) || void 0 === TQ ? void 0 : TQ.glb.byteLength) && void 0 !== qQ ? qQ : 0), this.HI.set(QQ, {
            url: XQ,
            glb: wQ
          }), this.buildFile(QQ, WQ, XQ, wQ))
        }), (wQ => {
          this.pending.get(QQ) === WQ && this.fallBack(QQ, WQ, XQ, wQ)
        })) : this.buildFile(QQ, WQ, XQ, wQ.glb)
      }
      buildFile(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const zQ = wQ.byteLength > 0 && (0, TQ.m)(XQ) ? (QQ | TQ.b) >>> 0 : QQ;
        this.queueRecord(QQ, WQ, XQ, wQ, this.build(zQ, wQ), qQ)
      }
      queueRecord(QQ, WQ, XQ, wQ, TQ, sQ) {
        TQ.then((TQ => {
          if (this.pending.get(QQ) !== WQ) return;
          if (qQ.q + (0, qQ.te)(TQ.byteLength) > qQ.Rc) return void this.ringRefused(QQ, WQ, XQ, new JQ(`${BQ(XQ)}'s record is ${TQ.byteLength-zQ.e} bytes, past the cmd ring's ${qQ.Rc}`), sQ);
          const FQ = {
            file: QQ,
            url: XQ,
            payload: TQ,
            glb: wQ,
            attempt: WQ
          };
          sQ ? this.ready.unshift(FQ) : this.ready.push(FQ)
        }))
      }
      async fallBack(QQ, WQ, XQ, wQ) {
        var qQ;
        let TQ = null,
          zQ = wQ;
        try {
          TQ = await this.files.shippedUrl(QQ)
        } catch (sQ) {
          zQ = sQ
        }
        this.pending.get(QQ) === WQ && (null !== TQ && TQ !== XQ ? (null === (qQ = this.onPackFileFailed) || void 0 === qQ || qQ.call(this, QQ, wQ), WQ.ask || this.drawn.get(QQ) !== TQ ? (WQ.url = TQ, WQ.inPlaceOf = XQ, this.load(QQ, WQ, TQ)) : this.pending.delete(QQ)) : this.giveUp(QQ, WQ, XQ, zQ))
      }
      ringRefused(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, TQ.m)(XQ) ? this.fallBack(QQ, WQ, XQ, wQ): this.giveUp(QQ, WQ, XQ, wQ, qQ)
      }
      giveUp(QQ, WQ, XQ, qQ) {
        let TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: QQ,
          url: BQ(XQ),
          error: qQ,
          startup: this.startupLeft.has(QQ)
        }), WQ.ask || !this.drawn.has(QQ) ? (0, wQ.U)(qQ) ? this.queueRecord(QQ, WQ, XQ, gQ, Promise.resolve((0, zQ.n)(QQ, (0, sQ.j)(qQ))), TQ) : this.buildFile(QQ, WQ, XQ, gQ, TQ) : this.pending.delete(QQ)
      }
      async resendIfChanged(QQ) {
        var WQ;
        if (0 !== (QQ & TQ.f)) return;
        let XQ;
        try {
          XQ = await this.wanted(QQ)
        } catch {
          return
        }(null !== (WQ = XQ.url) && void 0 !== WQ ? WQ : void 0) === this.drawn.get(QQ) || this.pending.has(QQ) || this.written.has(QQ) || this.fetch(QQ, this.gI(QQ, !1), XQ.url, XQ.inPlaceOf)
      }
      drain(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === QQ) return;
        let XQ = 0,
          wQ = 0;
        for (; wQ < this.ready.length && XQ < 262144;) {
          const sQ = this.ready[wQ];
          if (this.written.has(sQ.file)) {
            wQ++;
            continue
          }
          const gQ = this.nextSeq;
          new DataView(sQ.payload.buffer, sQ.payload.byteOffset, sQ.payload.byteLength).setUint32(zQ.g, gQ, !0);
          const rQ = sQ.attempt.Ds && sQ.glb.byteLength > 0 && this.drawn.get(sQ.file) === sQ.url;
          if (QQ(FQ, rQ ? 1 : 0, sQ.payload)) {
            if (this.nextSeq = gQ >= PQ - 1 ? 1 : gQ + 1, this.ready.splice(wQ, 1), XQ += sQ.payload.byteLength, this.pending.delete(sQ.file), this.startupLeft.delete(sQ.file), this.written.set(sQ.file, {
                seq: gQ,
                url: sQ.url,
                empty: 0 === sQ.glb.byteLength,
                attempt: sQ.attempt
              }), sQ.glb.byteLength > 0) try {
              var qQ;
              null === (qQ = this.onWritten) || void 0 === qQ || qQ.call(this, sQ.file, sQ.glb)
            } catch (TQ) {
              console.warn("ModelFeed: reading the file's images failed", TQ)
            }
          } else {
            if (null === WQ || 0 === sQ.glb.byteLength || WQ(sQ.payload.byteLength)) return;
            this.ready.splice(wQ, 1);
            const QQ = new JQ(`${BQ(sQ.url)}'s record is ${sQ.payload.byteLength-zQ.e} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(sQ.file, sQ.attempt, sQ.url, QQ, !0)
          }
        }
      }
    }

    function jQ(QQ) {
      return new rQ(`presentation refused ${BQ(QQ)}`)
    }

    function BQ(QQ) {
      return QQ.startsWith("data:") ? `${QQ.slice(0,Math.min(Math.max(QQ.indexOf(","),5),64))},...` : QQ
    }
  },
  41010: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      f: () => TQ,
      i: () => gQ,
      m: () => sQ,
      o: () => PQ,
      p: () => FQ
    });
    var wQ = XQ(3110),
      qQ = XQ(3480);
    const TQ = 2147483648,
      zQ = 1073741824;

    function sQ(QQ) {
      return QQ.startsWith("data:")
    }

    function FQ(QQ) {
      let {
        onTableFailed: WQ,
        packUrl: XQ
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const wQ = PQ();
      wQ.catch((QQ => {
        null === WQ || void 0 === WQ || WQ(QQ)
      }));
      const qQ = async WQ => (await wQ).fileUrl((WQ & ~TQ) >>> 0, QQ);
      return {
        startup: [],
        url: async QQ => {
          if (XQ && 0 === (QQ & TQ)) {
            const WQ = await wQ,
              qQ = WQ.filePackName(QQ),
              TQ = null === qQ || "lifeform" === WQ.fileSource(QQ) ? null : XQ(qQ);
            if (null !== TQ) return TQ
          }
          return qQ(QQ)
        },
        shippedUrl: qQ
      }
    }

    function PQ() {
      return XQ.e(44).then((() => XQ(42942)))
    }
    async function gQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return QQ.startsWith("data:") ? (0, qQ.e)(QQ.slice(QQ.indexOf(",") + 1), WQ) : (0, wQ.K)(QQ, {
        spare: WQ
      })
    }
  },
  41012: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ,
      g: () => gQ,
      i: () => IQ,
      l: () => yQ,
      n: () => jQ,
      o: () => rQ,
      r: () => BQ
    });
    const wQ = 826427981,
      qQ = 1,
      TQ = 2,
      zQ = 44,
      sQ = 46,
      FQ = 58,
      PQ = 8,
      gQ = 4;

    function JQ(QQ, WQ, XQ) {
      const qQ = (new TextEncoder).encode(XQ),
        TQ = PQ + 4 * (WQ.length + 2),
        zQ = new Uint8Array(TQ + (qQ.byteLength + 3 & -4)),
        sQ = new DataView(zQ.buffer);
      return sQ.setUint32(0, QQ, !0), sQ.setUint32(PQ, wQ, !0), WQ.forEach(((QQ, WQ) => {
        sQ.setUint32(PQ + 4 * (WQ + 1), QQ, !0)
      })), sQ.setUint32(TQ - 4, qQ.byteLength, !0), zQ.set(qQ, TQ), zQ
    }

    function rQ(QQ, WQ) {
      return JQ(QQ, [TQ], WQ)
    }

    function IQ(QQ, WQ) {
      return JQ(QQ, [qQ, sQ], WQ)
    }

    function jQ(QQ, WQ) {
      return JQ(QQ, [qQ, FQ], WQ)
    }

    function BQ(QQ, WQ) {
      return JQ(QQ, [qQ, zQ], WQ)
    }

    function yQ(QQ) {
      const WQ = PQ;
      if (QQ.byteLength < WQ + 12) return !1;
      const XQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      return XQ.getUint32(WQ, !0) === wQ && XQ.getUint32(WQ + 4, !0) === qQ && XQ.getUint32(WQ + 8, !0) === zQ
    }
  },
  40943: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      i: () => gQ,
      m: () => zQ,
      q: () => FQ
    });
    var wQ = XQ(36568);
    class qQ extends Error {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${QQ}: the module trapped${XQ?" in an earlier call":""}: ${String(WQ)}`, {
          cause: WQ
        }), this.site = QQ, this.trap = WQ, this.earlier = XQ, this.name = "ModuleTrapError", WQ instanceof Error && void 0 !== WQ.stack && (this.stack = `${this.name}: ${this.message}\n${WQ.stack}`)
      }
    }
    const TQ = new WeakMap;

    function zQ(QQ) {
      return TQ.has(QQ)
    }

    function sQ(QQ, WQ) {
      TQ.has(QQ) || TQ.set(QQ, WQ)
    }

    function FQ(QQ, WQ) {
      return !!(0, wQ.g)(WQ) && (sQ(QQ, WQ), !0)
    }
    const PQ = [
      ["error", QQ => QQ.error],
      ["unhandledrejection", QQ => QQ.reason]
    ];

    function gQ(QQ, WQ, XQ) {
      let zQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return TQ.has(QQ) ? Promise.reject(new qQ(WQ, TQ.get(QQ), !0)) : new Promise(((TQ, FQ) => {
        const gQ = XQ => {
            sQ(QQ, XQ), IQ(), FQ(new qQ(WQ, XQ))
          },
          JQ = QQ => {
            QQ instanceof WebAssembly.RuntimeError ? gQ(QQ) : (IQ(), FQ(QQ))
          },
          rQ = PQ.map((QQ => {
            let [WQ, XQ] = QQ;
            return [WQ, QQ => {
              const WQ = XQ(QQ);
              (0, wQ.g)(WQ) && gQ(WQ)
            }]
          })),
          IQ = () => {
            for (const [QQ, WQ] of rQ) null === zQ || void 0 === zQ || zQ.removeEventListener(QQ, WQ)
          };
        for (const [QQ, WQ] of rQ) null === zQ || void 0 === zQ || zQ.addEventListener(QQ, WQ);
        let jQ;
        try {
          jQ = XQ()
        } catch (BQ) {
          return void JQ(BQ)
        }
        jQ.then((QQ => {
          IQ(), TQ(QQ)
        }), JQ)
      }))
    }
  },
  40928: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => CQ,
      D: () => aQ,
      G: () => RQ,
      I: () => YQ,
      J: () => EQ,
      N: () => SQ,
      O: () => LQ,
      S: () => AQ,
      V: () => NQ,
      b: () => HQ,
      e: () => bQ,
      f: () => fQ,
      j: () => uQ,
      n: () => UQ,
      q: () => dQ,
      s: () => pQ,
      u: () => hQ,
      w: () => cQ,
      y: () => xQ,
      z: () => nQ
    });
    var wQ = XQ(243),
      qQ = XQ(26),
      TQ = XQ(3810),
      zQ = XQ(150),
      sQ = XQ(374),
      FQ = XQ(43),
      PQ = XQ(40930),
      gQ = XQ(36777),
      JQ = XQ(40961),
      rQ = (XQ(40991), XQ(41039)),
      IQ = XQ(40975),
      jQ = XQ(40951);
    const BQ = "wasmJoinBuild";
    let yQ = null,
      VQ = null,
      DQ = null;

    function pQ(QQ) {
      DQ = QQ
    }
    let GQ = !1;

    function UQ() {
      GQ = !0
    }

    function bQ() {
      return GQ
    }
    let vQ = !1;

    function dQ() {
      vQ = !0
    }

    function HQ() {
      return vQ
    }

    function aQ() {
      return DQ
    }
    let lQ = null;

    function hQ(QQ) {
      lQ = QQ, (0, sQ.d)(QQ)
    }
    const iQ = "wasmClientRenderLost";

    function cQ() {
      FQ.m.setItem(iQ, !0)
    }

    function AQ() {
      return !0 === FQ.m.getItem(iQ)
    }

    function RQ() {
      return lQ
    }

    function EQ() {
      if (null === yQ) {
        FQ.i.removeItem("wasmLastPick"), FQ.i.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, sQ.j)(), yQ = (0, PQ.x)(JQ.g).then((QQ => (null === QQ || (0, PQ.n)(QQ) || (VQ = rQ.e[QQ.backend], qQ.b.followGameGpu("webgpu" === QQ.backend ? QQ.adapter : null), "webgpu" === QQ.backend && (0, IQ.f)()), QQ)))
      }
      return yQ
    }

    function CQ() {
      return VQ
    }

    function uQ(QQ) {
      return QQ ? QQ.load() : Promise.resolve().then((function() {
        var QQ = new Error("Cannot find module '@bloxd/wasm/client'");
        throw QQ.code = "MODULE_NOT_FOUND", QQ
      })).then((QQ => QQ.bloxdWasmClient))
    }

    function LQ(QQ) {
      FQ.i.setItem(BQ, QQ)
    }

    function kQ(QQ, WQ) {
      const XQ = FQ.i.getItem(BQ);
      return null === XQ ? function(QQ) {
        if (void 0 !== (0, wQ.e)(QQ, "webgpu") && (0, PQ.u)()) return "webgpu";
        return !1 === (0, zQ.r)() ? "webgl1" : "webgl"
      }(QQ) : "none" === XQ ? null : "string" === typeof XQ && void 0 !== (0, wQ.e)(QQ, XQ) ? XQ : (WQ && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(XQ)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function fQ() {
      if (null === JQ.g) return uQ(null);
      const QQ = kQ(JQ.g, !0);
      return null === QQ ? null : JQ.g[QQ]()
    }

    function SQ() {
      null === yQ && null !== JQ.g && "webgl" === kQ(JQ.g, !1) && (0, jQ.c)()
    }
    let tQ = null,
      oQ = null,
      eQ = null;

    function nQ() {
      return tQ ??= EQ().then((async QQ => {
        const WQ = null !== QQ && !(0, PQ.n)(QQ),
          XQ = {
            indirectHangs: WQ && await (0, PQ.I)(QQ, window.location.search),
            storagePullBreaks: WQ && (0, PQ.X)(QQ, window.location.search),
            splitPassBreaks: WQ && (0, PQ.T)(QQ, window.location.search),
            earlySky: WQ && (0, PQ.G)(QQ, window.location.search),
            instancedTerrain: WQ ? (0, PQ.L)(QQ, window.location.search) : null,
            cellLight: WQ && await (0, TQ.d)("cellLight"),
            framesAhead: (0, PQ.i)(window.location.search, WQ ? QQ : null),
            webGpuRestores: !WQ || (0, PQ.Y)(QQ, (0, gQ.d)()),
            bufferCopiesCrash: WQ && (0, PQ.C)(QQ, window.location.search)
          };
        return oQ = XQ.indirectHangs, eQ = !XQ.webGpuRestores, XQ
      })), tQ
    }

    function xQ() {
      return oQ
    }

    function YQ() {
      return eQ
    }
    async function NQ() {
      const QQ = null === yQ ? null : await yQ;
      return null !== QQ && (0, PQ.n)(QQ) && (yQ = null, tQ = null, oQ = null, eQ = null), EQ()
    }
  },
  41186: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ
    });
    var wQ = XQ(36608),
      qQ = XQ(41076),
      TQ = XQ(4710),
      zQ = XQ(36777);
    async function sQ(QQ, WQ) {
      return await (0, TQ.e)(void 0, !0), (0, wQ.k)(QQ, qQ.e, {
        ...WQ,
        memoryMaximumBytes: (0, zQ.m)()
      })
    }
  },
  40954: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ,
      h: () => sQ,
      i: () => gQ,
      j: () => zQ
    });
    var wQ = XQ(400),
      qQ = XQ(684);
    let TQ;

    function zQ(QQ) {
      var WQ;
      const XQ = TQ;
      return TQ = void 0, null !== (WQ = FQ(QQ)) && void 0 !== WQ ? WQ : XQ
    }

    function sQ(QQ) {
      try {
        const WQ = FQ(QQ);
        void 0 !== WQ && (TQ = WQ, (0, qQ.i)((0, wQ.k)(WQ.reason, WQ.message)))
      } catch (WQ) {
        console.warn("Couldn't keep the WebGPU loss's cause", WQ)
      }
    }

    function FQ(QQ) {
      var WQ;
      const XQ = null === QQ || void 0 === QQ || null === (WQ = QQ.tTQ) || void 0 === WQ ? void 0 : WQ.call(QQ),
        wQ = null === QQ || void 0 === QQ ? void 0 : QQ.STQ();
      if (void 0 === wQ) return;
      const qQ = new Error(wQ);
      return void 0 !== XQ && (qQ.reason = XQ), qQ
    }

    function PQ(QQ) {
      return QQ instanceof Error ? QQ : void 0
    }

    function gQ(QQ, WQ) {
      return "lost" !== QQ && "frames_refused" !== QQ ? {} : (0, wQ.k)("frames_refused" === QQ ? QQ : null === WQ || void 0 === WQ ? void 0 : WQ.reason, null === WQ || void 0 === WQ ? void 0 : WQ.message)
    }
  },
  40970: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => dQ,
      g: () => GQ,
      j: () => pQ,
      m: () => vQ,
      o: () => hQ,
      s: () => lQ,
      w: () => iQ
    });
    var wQ = XQ(5140),
      qQ = XQ(40975),
      TQ = XQ(34354);
    const zQ = 1,
      sQ = 18,
      FQ = 19,
      PQ = 20,
      gQ = 21,
      JQ = {
        [zQ]: "link",
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
        [sQ]: "retry linked",
        [FQ]: "fallback linked",
        [PQ]: "fallback failed",
        [gQ]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function rQ(QQ, WQ, XQ) {
      return QQ === sQ ? "program retry" : QQ === zQ ? "program link" : QQ === gQ ? "program link stall" : QQ === FQ || QQ === PQ ? `program ${WQ} ${XQ}` : "program"
    }
    const IQ = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      jQ = {
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
      BQ = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      yQ = {
        11: "none read after view",
        12: "some read after view"
      },
      VQ = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...yQ
      },
      DQ = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function pQ(QQ, WQ) {
      return QQ === wQ.n.RenderSerialLinks && void 0 !== yQ[WQ]
    }

    function GQ(QQ, WQ) {
      return QQ === wQ.n.RenderSerialLinks && void 0 !== DQ[15 & WQ]
    }
    const UQ = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function bQ(QQ, WQ) {
      var XQ;
      return null !== (XQ = QQ[WQ]) && void 0 !== XQ ? XQ : (0, TQ.b)(WQ)
    }

    function vQ() {
      return (0, TQ.b)((0, qQ.e)())
    }

    function dQ(QQ, WQ) {
      switch (QQ) {
        case wQ.n.RenderSceneRowNotDrawn:
          return {
            words: ` ${bQ(jQ,WQ)}`, instance: String(WQ), group: String(QQ)
          };
        case wQ.n.RenderChunkMeshNotDrawn: {
          const XQ = 0 === (128 & WQ) ? "" : " shortage",
            wQ = WQ >>> 8;
          return {
            words: ` ${bQ(BQ,127&WQ)}${XQ}${0===wQ?"":` kind ${(0,TQ.b)(wQ)}`}`,
            instance: String(WQ),
            group: String(QQ)
          }
        }
        case wQ.n.RenderInternal: {
          const XQ = bQ(IQ, 255 & WQ),
            wQ = WQ >>> 8 & 255;
          if (0 === wQ) return {
            words: ` ${XQ}`,
            instance: String(WQ),
            group: String(QQ)
          };
          const qQ = bQ(JQ, wQ),
            zQ = WQ >>> 16;
          return {
            words: ` ${XQ} ${qQ} program ${(0,TQ.b)(zQ)}`,
            instance: `${XQ} ${qQ} ${zQ}`,
            group: rQ(wQ, qQ, XQ),
            gpuDetails: {
              programFailure: qQ,
              program: String(zQ)
            }
          }
        }
        case wQ.n.RenderSerialLinks: {
          if (GQ(QQ, WQ)) {
            const QQ = function(QQ) {
              const WQ = (WQ, XQ) => (0, TQ.b)(QQ >>> WQ & (1 << XQ) - 1),
                XQ = QQ >>> 30 & 1 ? " restored" : "";
              return `link census ${DQ[15&QQ]} linked ${WQ(22,8)} failed ${WQ(4,6)} retried ${WQ(10,6)} fallback ${WQ(16,6)}${XQ}`
            }(WQ);
            return {
              words: ` ${QQ}`,
              instance: String(15 & WQ),
              group: "link census",
              gpuDetails: {
                linkCensus: QQ
              }
            }
          }
          const XQ = bQ(VQ, WQ);
          return {
            words: ` ${XQ}`,
            instance: String(WQ),
            group: String(QQ),
            gpuDetails: {
              serialLinks: XQ
            }
          }
        }
        case wQ.n.RenderGlErrorAfterRestore: {
          const XQ = bQ(UQ, 65535 & WQ),
            wQ = WQ >>> 16,
            qQ = 65535 !== wQ;
          return {
            words: ` ${XQ}${qQ?` program ${(0,TQ.b)(wQ)}`:""}`,
            instance: String(WQ),
            group: String(QQ),
            gpuDetails: qQ ? {
              glError: XQ,
              program: String(wQ)
            } : {
              glError: XQ
            }
          }
        }
        default:
          return null
      }
    }
    const HQ = 2,
      aQ = new Map;

    function lQ(QQ) {
      let {
        group: WQ,
        instance: XQ
      } = QQ, wQ = aQ.get(WQ);
      return void 0 === wQ && (wQ = [], aQ.set(WQ, wQ)), !wQ.includes(XQ) && (wQ.length >= HQ || (wQ.push(XQ), !1))
    }

    function hQ() {
      return aQ.size > 0
    }

    function iQ() {
      aQ.clear()
    }
  },
  40961: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      g: () => TQ
    });
    var wQ = XQ(40963);
    const qQ = new WeakSet;
    const TQ = {
        webgpu: async () => (function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === QQ || qQ.has(QQ.prototype)) return;
          qQ.add(QQ.prototype);
          const WQ = QQ.prototype.requestDevice;
          QQ.prototype.requestDevice = function(QQ) {
            var XQ;
            const qQ = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.requiredLimits) && void 0 !== XQ ? XQ : {},
              TQ = Object.keys(qQ).filter((QQ => !(QQ in this.limits)));
            if (0 === TQ.length) return WQ.call(this, QQ);
            const zQ = Object.fromEntries(Object.entries(qQ).filter((QQ => {
              let [WQ] = QQ;
              return WQ in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${TQ.join(", ")}`), (0, wQ.reportDroppedRequiredLimits)(TQ), WQ.call(this, {
              ...QQ,
              requiredLimits: zQ
            })
          }
        }(), (await XQ.e(8).then((() => XQ(42891)))).bloxdWasmWebgpu),
        webgl: async () => (await XQ.e(6).then((() => XQ(42907)))).bloxdWasmWebgl,
        webgl1: async () => (await XQ.e(7).then((() => XQ(42923)))).bloxdWasmWebgl1
      },
      zQ = async () => (await XQ.e(5).then((() => XQ(42932)))).compileAnimationPackInWasm
  },
  40915: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => VQ,
      g: () => yQ,
      j: () => UQ
    });
    var wQ = XQ(7015),
      qQ = XQ(31),
      TQ = XQ(4596),
      zQ = XQ(5140),
      sQ = XQ(7007),
      FQ = XQ(40917);

    function PQ(QQ, WQ) {
      const XQ = (0, sQ.e)(WQ.variants);
      return QQ.setShaderPack(XQ.variantFlags, XQ.hooks, XQ.moduleCodes, (0, FQ.w)(WQ.layers), FQ.k[WQ.mz], WQ.keepCircleShadows)
    }
    const gQ = 0,
      JQ = 1,
      rQ = 2,
      IQ = "shaderPack:failedToCompile",
      jQ = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      BQ = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function yQ(QQ, WQ) {
      var XQ;
      const wQ = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.reason) && void 0 !== XQ ? XQ : "none";
      return jQ.has(wQ) ? {
        messageKey: WQ ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === wQ && "override" === (null === QQ || void 0 === QQ ? void 0 : QQ.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: BQ.has(wQ) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class VQ extends Error {
      constructor(QQ) {
        super(`the shader pack can't run in this game: ${QQ}`), this.messageKey = QQ, this.name = "ShaderPackJoinError"
      }
    }
    const DQ = "strict";
    class pQ {
      constructor(QQ) {
        this.deps = QQ, this.pagePack = void 0, this.loaded = null, this.mz = DQ, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = QQ.load().catch((WQ => (QQ.warn("the shader pack could not load: the game draws without it", WQ), {
          status: "none"
        }))).then((QQ => (this.loaded = QQ, "active" === QQ.status && (this.handOverToPreviews(QQ), null !== QQ.harnessPolicy && (this.mz = QQ.harnessPolicy, this.handOver())), QQ)))
      }
      async join(QQ) {
        this.leave();
        const WQ = this.game,
          [XQ, qQ] = await Promise.all([this.pagePack, this.policyOf(QQ)]);
        if (WQ !== this.game || "none" === XQ.status) return null;
        const TQ = "active" === XQ.status ? XQ.pack.variants : XQ.variants,
          zQ = (0, wQ.i)(TQ, qQ);
        if (zQ && "active" === XQ.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (zQ) {
          const QQ = this.cantRun(XQ, qQ);
          if (null !== QQ) return QQ
        } else if ("blocked" === XQ.status || null === this.deps.core) return null;
        return this.mz = qQ, this.handOver(), zQ && this.refused ? IQ : (this.joined = !0, this.offInThisGame = !zQ, null)
      }
      async replay(QQ) {
        const WQ = await this.join(QQ);
        null === WQ ? this.playable() : this.deps.failInGame(WQ)
      }
      cantRun(QQ, WQ) {
        const {
          core: XQ,
          noWebGpu: wQ
        } = this.deps;
        if ("blocked" === QQ.status) {
          return "shaderPack:failedUnchecked" === QQ.messageKey && null === XQ && wQ.noAdapter ? wQ.messageKey : QQ.messageKey
        }
        return this.refused || this.failedPolicies.has(WQ) ? IQ : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var QQ;
        return this.runsInJoinedGame() && "active" === (null === (QQ = this.loaded) || void 0 === QQ ? void 0 : QQ.status) ? function(QQ, WQ) {
          const XQ = QQ.filter((QQ => (0, wQ.i)([QQ], WQ))),
            qQ = QQ => XQ.some((WQ => WQ[QQ]));
          return {
            sceneDepth: qQ("sceneDepth"),
            sunShadow: qQ("sunShadow"),
            airShadow: qQ("airShadow")
          }
        }(this.loaded.pack.variants, this.mz) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(IQ) : (null !== this.couldntRun ? this.notify(TQ.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.mz) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(QQ) {
        for (const {
            code: WQ,
            detail: XQ
          }
          of QQ)
          if (WQ === zQ.n.RenderShaderPackNotRun) switch (255 & XQ) {
            case gQ:
              this.refused = !0, this.failed();
              break;
            case JQ:
              this.failedPolicies.add(this.mz), this.failed();
              break;
            case rQ:
              this.failedModelPolicies.add(this.mz), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(IQ) : this.failedWhileJoining = !0)
      }
      fail(QQ) {
        this.leave(), this.deps.failInGame(QQ)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(QQ, WQ) {
        const XQ = this.game;
        this.deps.notify(QQ, (() => XQ === this.game && this.joined), WQ)
      }
      handOver() {
        var QQ;
        const {
          core: WQ
        } = this.deps;
        null !== WQ && "active" === (null === (QQ = this.loaded) || void 0 === QQ ? void 0 : QQ.status) && (PQ(WQ, {
          ...this.loaded.pack,
          mz: this.mz
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(QQ) {
        let {
          pack: WQ,
          harnessPolicy: XQ
        } = QQ;
        const {
          previews: wQ
        } = this.deps;
        null !== wQ && PQ(wQ, {
          ...WQ,
          mz: null !== XQ && void 0 !== XQ ? XQ : DQ
        })
      }
      policyOf(QQ) {
        return this.deps.policyOf(QQ).catch((QQ => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", QQ), DQ)))
      }
    }
    const GQ = "wasmShaderPackNotice";

    function UQ(QQ, WQ, XQ, wQ) {
      return qQ.k.subscribe(GQ, (QQ => {
        let {
          translationKey: WQ,
          stillCurrent: XQ,
          reasonKey: wQ
        } = QQ;
        XQ() && qQ.k.mB("chat", (0, TQ.k)(WQ, wQ))
      })), new pQ({
        load: bQ,
        policyOf: vQ,
        core: QQ,
        previews: WQ,
        noWebGpu: XQ,
        notify: (QQ, WQ, XQ) => {
          const wQ = {
            translationKey: QQ,
            stillCurrent: WQ,
            reasonKey: XQ
          };
          qQ.k.mB(GQ, wQ, !0)
        },
        failInGame: QQ => {
          qQ.k.mB(TQ.h, QQ)
        },
        warn: wQ
      })
    }
    async function bQ() {
      const [{
        shaderPackPage: QQ,
        harnessShaderPackMode: WQ
      }, {
        shaderPackTextures: wQ
      }] = await Promise.all([XQ.e(119).then((() => XQ(39494))), XQ.e(120).then((() => XQ(7002)))]), qQ = await QQ.load();
      return "active" !== qQ.status ? qQ : {
        status: "active",
        pack: {
          variants: qQ.pack.variants,
          layers: wQ().layers,
          keepCircleShadows: qQ.pack.keepCircleShadows
        },
        harnessPolicy: WQ()
      }
    }
    async function vQ(QQ) {
      var WQ;
      const [{
        shaderPackPage: wQ,
        harnessShaderPackMode: qQ
      }, {
        getShaderPackPolicy: TQ
      }] = await Promise.all([XQ.e(119).then((() => XQ(39494))), XQ.e(96).then((() => XQ(41505)))]);
      return await wQ.load(), null !== (WQ = qQ()) && void 0 !== WQ ? WQ : TQ(QQ)
    }
  },
  41022: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      f: () => yQ,
      j: () => FQ,
      l: () => PQ,
      m: () => gQ,
      n: () => rQ
    });
    var wQ = XQ(41028),
      qQ = XQ(41034);
    const TQ = "atlas:",
      zQ = 3e4;
    class sQ extends Error {
      constructor(QQ, WQ) {
        super(`fetching ${QQ} answered HTTP ${WQ}`), this.url = QQ, this.status = WQ, this.name = "TerrainTextureFetchError"
      }
    }

    function FQ(QQ) {
      if (!QQ.startsWith(TQ)) return null;
      const WQ = Number(QQ.slice(TQ.length));
      return Number.isInteger(WQ) && WQ >= 0 ? WQ : null
    }
    async function PQ() {
      const QQ = await XQ.e(213).then((() => XQ(34609)));
      return {
        atlasSheets: QQ.blockAtlasUrls,
        texture: WQ => {
          var XQ, wQ, TQ;
          return null !== (XQ = null !== (wQ = null !== (TQ = QQ.animatedBlockTextures[WQ]) && void 0 !== TQ ? TQ : QQ.rotatedBlockTextures[WQ]) && void 0 !== wQ ? wQ : qQ.e[WQ]) && void 0 !== XQ ? XQ : null
        }
      }
    }
    async function gQ(QQ) {
      const WQ = new AbortController,
        XQ = setTimeout((() => {
          WQ.abort(new DOMException(`${QQ} took over ${zQ} ms`, "TimeoutError"))
        }), zQ);
      let wQ;
      try {
        const XQ = await fetch(QQ, {
          signal: WQ.signal
        });
        if (!XQ.ok) throw new sQ(QQ, XQ.status);
        wQ = await XQ.blob()
      } finally {
        clearTimeout(XQ)
      }
      const qQ = await createImageBitmap(wQ, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return rQ(qQ)
      } finally {
        qQ.close()
      }
    }
    const JQ = 8192;

    function rQ(QQ) {
      const {
        width: WQ,
        height: XQ
      } = QQ, qQ = Math.max(1, Math.min(XQ, JQ)), TQ = (0, wQ.g)(WQ, qQ, {
        willReadFrequently: !0
      });
      if (!TQ) throw new Error("no 2D context to read the texture back");
      TQ.globalCompositeOperation = "copy";
      const zQ = new Uint8Array(WQ * XQ * 4);
      for (let wQ = 0; wQ < XQ; wQ += qQ) {
        const sQ = Math.min(qQ, XQ - wQ);
        TQ.drawImage(QQ, 0, wQ, WQ, sQ, 0, 0, WQ, sQ), zQ.set(TQ.getImageData(0, 0, WQ, sQ).data, wQ * WQ * 4)
      }
      return {
        width: WQ,
        height: XQ,
        pixels: zQ
      }
    }
    async function IQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gQ;
      const wQ = [],
        qQ = await Promise.all(QQ.map((async QQ => {
          var qQ, zQ;
          const sQ = null !== (qQ = null === (zQ = WQ.decoded) || void 0 === zQ ? void 0 : zQ.call(WQ, QQ)) && void 0 !== qQ ? qQ : null,
            PQ = null === sQ ? function(QQ, WQ) {
              if (QQ.startsWith(TQ)) {
                var XQ;
                const wQ = FQ(QQ);
                return null === wQ ? null : null !== (XQ = WQ.atlasSheets[wQ]) && void 0 !== XQ ? XQ : null
              }
              return WQ.texture(QQ)
            }(QQ, WQ) : null,
            gQ = null !== sQ && void 0 !== sQ ? sQ : null === PQ ? null : XQ(PQ);
          if (null === gQ) return wQ.push({
            name: QQ,
            url: PQ,
            error: new Error(`no URL for terrain texture ${QQ}`)
          }), null;
          try {
            const WQ = await gQ;
            if (WQ.pixels.byteLength !== WQ.width * WQ.height * 4) throw new Error(`decoded ${WQ.pixels.byteLength} bytes for ${WQ.width}x${WQ.height} texels`);
            return {
              name: QQ,
              texture: WQ
            }
          } catch (JQ) {
            return wQ.push({
              name: QQ,
              url: PQ,
              error: JQ
            }), null
          }
        }))),
        zQ = qQ.filter((QQ => null !== QQ)),
        sQ = new Uint32Array(2 * zQ.length);
      zQ.forEach(((QQ, WQ) => {
        let {
          texture: XQ
        } = QQ;
        sQ[2 * WQ] = XQ.width, sQ[2 * WQ + 1] = XQ.height
      }));
      return {
        handOver: {
          names: zQ.map((QQ => {
            let {
              name: WQ
            } = QQ;
            return WQ
          })),
          textures: zQ.map((QQ => {
            let {
              texture: WQ
            } = QQ;
            return WQ.pixels
          })),
          sizes: sQ
        },
        failures: wQ
      }
    }
    const jQ = [2e3, 1e4, 3e4, 6e4, 12e4];

    function BQ() {}
    class yQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jQ,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = QQ, this.retryMs = WQ, this.keepBelow = XQ, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PQ,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const wQ = ++this.started,
          qQ = {
            decode: XQ.decode,
            wholeAtlas: XQ.wholeAtlas
          };
        return this.loadAndHandOver(WQ, qQ, QQ, (() => {
          var QQ;
          return wQ < this.landed || !1 === (null === (QQ = XQ.wanted) || void 0 === QQ ? void 0 : QQ.call(XQ))
        }), {
          onTaken: (QQ, XQ) => {
            this.landed = wQ, this.current = {
              mine: wQ,
              sources: WQ,
              load: qQ,
              HI: QQ,
              failed: XQ
            }
          }
        })
      }
      restore(QQ) {
        var WQ;
        const XQ = this.current;
        if (null === XQ) return Promise.resolve(null);
        if ((null === (WQ = this.restoring) || void 0 === WQ ? void 0 : WQ.mine) === XQ.mine) return this.restoring.done;
        const wQ = {
          mine: XQ.mine,
          done: this.restoreLanded(XQ, QQ).finally((() => {
            this.restoring === wQ && (this.restoring = null)
          }))
        };
        return this.restoring = wQ, wQ.done
      }
      async restoreLanded(QQ, WQ) {
        const XQ = () => this.landed !== QQ.mine,
          {
            HI: wQ
          } = QQ;
        if (null !== wQ) return this.stopped() ? null : this.core.setTerrainTextures(wQ.names, wQ.textures, wQ.sizes);
        let qQ = WQ;
        for (let TQ = 0;; TQ++) {
          const WQ = this.retryMs.at(TQ),
            wQ = {
              allOrNothingExcept: void 0 === WQ ? void 0 : QQ.failed
            },
            zQ = await this.loadAndHandOver(QQ.sources, QQ.load, qQ, XQ, wQ);
          if (!1 !== zQ || void 0 === WQ || this.stopped()) return zQ;
          if (qQ = BQ, await new Promise((QQ => {
              setTimeout(QQ, WQ)
            })), XQ()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const TQ = this.core.terrainTextureNames();
        var zQ;
        if (0 === TQ.length) return null === (zQ = qQ.onTaken) || void 0 === zQ || zQ.call(qQ, null, new Set), !0;
        let sQ, PQ;
        try {
          sQ = await QQ(), PQ = await IQ(TQ, sQ, WQ.decode)
        } catch (yQ) {
          return wQ() ? null : (XQ({
            name: null,
            url: null,
            error: yQ
          }), !1)
        }
        if (wQ() || this.stopped()) return null;
        for (const FQ of PQ.failures) XQ(FQ);
        const gQ = qQ.allOrNothingExcept;
        if (void 0 !== gQ && PQ.failures.some((QQ => {
            let {
              name: WQ
            } = QQ;
            return null === WQ || !gQ.has(WQ)
          })) || !0 === WQ.wholeAtlas && PQ.failures.some((QQ => {
            let {
              name: WQ
            } = QQ;
            return null === WQ || null !== FQ(WQ)
          }))) return !1;
        const {
          handOver: JQ
        } = PQ, rQ = function(QQ) {
          return QQ.textures.reduce(((QQ, WQ) => QQ + WQ.byteLength), 0)
        }(JQ) < this.keepBelow, jQ = this.core.setTerrainTextures(JQ.names, JQ.textures, JQ.sizes, rQ ? void 0 : () => {
          !async function(QQ, WQ) {
            await WQ;
            for (const {
                buffer: wQ
              }
              of QQ) {
              const QQ = wQ;
              var XQ;
              if (!QQ.detached) null === (XQ = QQ.transfer) || void 0 === XQ || XQ.call(QQ, 0)
            }
          }(JQ.textures, sQ.heldUntil)
        });
        if (jQ) {
          var BQ;
          const QQ = new Set(PQ.failures.flatMap((QQ => {
            let {
              name: WQ
            } = QQ;
            return null === WQ ? [] : [WQ]
          })));
          null === (BQ = qQ.onTaken) || void 0 === BQ || BQ.call(qQ, rQ ? JQ : null, QQ)
        }
        return jQ
      }
    }
  },
  37149: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return "fetch" === QQ || "timeout" === QQ || "integrity" === QQ ? "download" : "browser"
    }
    XQ.d(WQ, {
      c: () => qQ,
      f: () => zQ,
      h: () => FQ,
      i: () => sQ,
      m: () => wQ,
      o: () => TQ
    });
    const qQ = "https://discord.gg/playbloxd";

    function TQ(QQ) {
      return "download" === QQ ? {
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

    function zQ(QQ, WQ) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: WQ ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: QQ.code
        },
        discordLink: WQ,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function sQ() {
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

    function FQ(QQ, WQ, XQ) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: XQ ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: QQ.reason
        },
        discordLink: null === QQ.name,
        confirm: WQ ? "general:reconnect" : QQ.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  34461: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => PQ,
      e: () => JQ,
      i: () => gQ
    });
    var wQ = XQ(307),
      qQ = XQ(105),
      TQ = XQ(150),
      zQ = XQ(141),
      sQ = XQ(689);
    const FQ = new Set(["mali_bifrost"]);

    function PQ() {
      if (sQ.f) return;
      const QQ = (0, qQ.pageOperatingSystem)();
      if ("android" !== QQ && "windows" !== QQ || (0, sQ.e)("webgl_default")) return;
      if ("windows" === QQ) return QQ => "qualcomm" === (0, qQ.normaliseGpuVendor)((0, zQ.c)(QQ).vendor);
      const WQ = (0, TQ.n)(),
        XQ = null === WQ ? (0, wQ.o)() : (0, wQ.g)(WQ.vendor, WQ.renderer);
      return null !== XQ && FQ.has(XQ) ? QQ => (0, wQ.i)((0, zQ.c)(QQ).vendor, XQ) : void 0
    }

    function gQ(QQ, WQ) {
      return QQ ? () => !0 : WQ()
    }
    async function JQ(QQ) {
      try {
        const WQ = gQ(QQ, PQ),
          XQ = navigator.gpu;
        if (void 0 === WQ || void 0 === XQ) return !1;
        const wQ = await (0, zQ.m)(XQ, {
          seed: !1,
          compatibility: WQ
        });
        return "string" !== typeof wQ && wQ.compatibility && !(0, zQ.h)(wQ.adapter)
      } catch (WQ) {
        return console.error("WebGPU compatibility-mode adapter request failed.", WQ), !1
      }
    }
  },
  40975: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      f: () => PQ
    });
    var wQ = XQ(105),
      qQ = XQ(39038);
    const TQ = "webgpuPipeline";

    function zQ(QQ) {
      return QQ.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let sQ = null;

    function FQ() {
      if (null === sQ) try {
        QQ = (0, wQ.getBrowserName)(), WQ = (0, wQ.getBrowserVersion)(), XQ = (0, wQ.getOperatingSystem)(), qQ = (0, wQ.getOperatingSystemVersion)(), sQ = `${QQ.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===WQ?"unknown":zQ(WQ)}-${XQ}${void 0===qQ?"":`_${zQ(qQ)}`}`
      } catch (TQ) {
        console.warn("The user agent couldn't be read for its browser code", TQ), sQ = "unknown"
      }
      var QQ, WQ, XQ, qQ;
      return sQ
    }

    function PQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const WQ = `WGPU-${FQ()}`,
        wQ = (QQ, wQ) => {
          const {
            reason: zQ,
            message: sQ
          } = wQ;
          if ((0, qQ.v)(String(sQ))) return;
          const FQ = {
            pipeline: null !== QQ && void 0 !== QQ ? QQ : "",
            reason: String(zQ),
            browserMessage: String(sQ)
          };
          Promise.resolve().then((() => XQ(40963))).then((QQ => {
            let {
              reportCrash: XQ
            } = QQ;
            XQ({
              kind: "coreError",
              code: WQ,
              site: TQ,
              fatal: !1,
              message: `${FQ.pipeline} ${FQ.reason}: ${FQ.browserMessage}`,
              details: FQ,
              error: wQ
            })
          })).catch((QQ => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", QQ)
          }))
        },
        zQ = QQ.createRenderPipelineAsync;
      QQ.createRenderPipelineAsync = function(QQ) {
        return zQ.call(this, QQ).catch((WQ => {
          throw wQ(QQ.label, WQ), WQ
        }))
      };
      const sQ = QQ.createComputePipelineAsync;
      QQ.createComputePipelineAsync = function(QQ) {
        return sQ.call(this, QQ).catch((WQ => {
          throw wQ(QQ.label, WQ), WQ
        }))
      }
    }
  },
  40951: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ,
      g: () => FQ
    });
    var wQ = XQ(150);
    let qQ = !1;

    function TQ() {
      let QQ = null;
      try {
        return QQ = document.createElement("canvas").getContext("webgl2"), null !== QQ
      } catch {
        return !1
      } finally {
        try {
          var WQ, XQ;
          null === (WQ = QQ) || void 0 === WQ || null === (XQ = WQ.getExtension("WEBGL_lose_context")) || void 0 === XQ || XQ.loseContext()
        } catch {}
      }
    }

    function zQ() {
      "hidden" === document.visibilityState && (qQ = !1, document.removeEventListener("visibilitychange", zQ))
    }

    function sQ() {
      qQ || "visible" !== document.visibilityState || !(0, wQ.q)() && !TQ() || (qQ = !0, document.addEventListener("visibilitychange", zQ))
    }

    function FQ() {
      return qQ || TQ()
    }
  },
  41089: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/bloxd_wasm_models_bg.fd2d194913003313349e.wasm"
  },
  41085: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/bloxd_wasm_workers_bg.6190cf97a585b3cfea4b.wasm"
  },
  41076: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      e: () => wQ
    });
    const wQ = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new XQ.U(XQ(41085))
      }
    };
    const qQ = {
      name: "bloxd_wasm_models",
      url: function() {
        return new XQ.U(XQ(41089))
      }
    }
  },
  7007: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => GQ,
      i: () => UQ,
      k: () => DQ,
      n: () => VQ
    });
    var wQ = XQ(7015);
    const qQ = 6,
      TQ = 3,
      zQ = 1,
      sQ = 2,
      FQ = 4,
      PQ = 8,
      gQ = 16,
      JQ = 32,
      rQ = 64,
      IQ = 128,
      jQ = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function BQ(QQ) {
      if (!QQ) return 0;
      const WQ = jQ.indexOf(QQ);
      if (WQ <= 0) throw new Error(`"${QQ}" is not a shader pack hook function`);
      return WQ
    }

    function yQ(QQ) {
      if (0 === QQ) return null;
      const WQ = jQ[QQ];
      if (void 0 === WQ) throw new Error(`${QQ} is not a shader pack hook function id`);
      return WQ
    }

    function VQ(QQ) {
      const WQ = wQ.d.length;
      return {
        strict: QQ >= WQ,
        program: wQ.d[QQ % WQ]
      }
    }

    function DQ(QQ) {
      return Number(QQ.strict) * wQ.d.length + wQ.d.indexOf(QQ.program)
    }

    function pQ(QQ) {
      return "" === QQ ? [] : QQ.split(" ")
    }

    function GQ(QQ) {
      const WQ = {
        variantFlags: new Uint8Array(qQ),
        hooks: new Uint8Array(qQ * TQ),
        moduleCodes: Array(qQ).fill(""),
        reads: Array(2 * qQ).fill("")
      };
      for (const XQ of QQ) {
        const QQ = DQ(XQ.key),
          wQ = (QQ, WQ) => null === XQ.hooks.surface || XQ.reads.fragment.includes(QQ) ? 0 : WQ;
        WQ.variantFlags[QQ] = (XQ.sceneDepth ? zQ : 0) | (XQ.movesVertices ? sQ : 0) | (XQ.sunShadow ? FQ : 0) | (XQ.airShadow ? PQ : 0) | (XQ.discards ? gQ : 0) | wQ("localPosition", JQ) | wQ("enchantSpeed", rQ) | wQ("enchantTier", IQ), WQ.hooks[QQ * TQ] = BQ(XQ.hooks.vertex), WQ.hooks[QQ * TQ + 1] = BQ(XQ.hooks.surface), WQ.hooks[QQ * TQ + 2] = BQ(XQ.hooks.light), WQ.moduleCodes[QQ] = XQ.moduleCode, WQ.reads[2 * QQ] = XQ.reads.vertex.join(" "), WQ.reads[2 * QQ + 1] = XQ.reads.fragment.join(" ")
      }
      return WQ
    }

    function UQ(QQ) {
      const {
        hooks: WQ,
        moduleCodes: XQ,
        reads: wQ
      } = QQ;
      return Array.from(QQ.variantFlags, ((QQ, qQ) => {
        const JQ = qQ * TQ;
        return {
          key: VQ(qQ),
          hooks: {
            vertex: yQ(WQ[JQ]),
            surface: yQ(WQ[JQ + 1]),
            light: yQ(WQ[JQ + 2])
          },
          moduleCode: XQ[qQ],
          sceneDepth: 0 !== (QQ & zQ),
          sunShadow: 0 !== (QQ & FQ),
          airShadow: 0 !== (QQ & PQ),
          movesVertices: 0 !== (QQ & sQ),
          discards: 0 !== (QQ & gQ),
          reads: {
            vertex: pQ(wQ[2 * qQ]),
            fragment: pQ(wQ[2 * qQ + 1])
          }
        }
      }))
    }
  },
  40917: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => jQ,
      b: () => qQ,
      d: () => wQ,
      h: () => rQ,
      i: () => gQ,
      k: () => yQ,
      n: () => TQ,
      p: () => sQ,
      r: () => FQ,
      t: () => zQ,
      w: () => BQ,
      z: () => IQ
    });
    const wQ = 3,
      qQ = 0,
      TQ = 1,
      zQ = 2,
      sQ = {
        uniform: 3,
        Gr: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      FQ = 10,
      PQ = "BloxdPackInputs",
      gQ = "bloxdPackInputs",
      JQ = [{
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
      rQ = 80;

    function IQ() {
      const QQ = JQ.map((QQ => {
        let {
          name: WQ,
          type: XQ
        } = QQ;
        return `    ${WQ}: ${XQ},\n`
      })).join("");
      return `struct ${PQ} {\n${QQ}}\n@group(${wQ}) @binding(${qQ}) var<uniform> ${gQ}: ${PQ};\n`
    }

    function jQ(QQ, WQ) {
      const XQ = new DataView(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, rQ),
        [wQ, qQ, TQ, zQ, sQ, FQ] = JQ;
      XQ.setFloat32(wQ.offset, WQ.seconds, !0), XQ.setUint32(qQ.offset, WQ.lit ? 1 : 0, !0);
      for (let PQ = 0; PQ < 3; PQ++) XQ.setInt32(TQ.offset + 4 * PQ, WQ.renderOffset[PQ], !0), XQ.setFloat32(zQ.offset + 4 * PQ, WQ.IQQ[PQ], !0), XQ.setFloat32(sQ.offset + 4 * PQ, WQ.eyePosition[PQ], !0), XQ.setFloat32(FQ.offset + 4 * PQ, WQ.shadowDirection[PQ], !0)
    }

    function BQ(QQ) {
      const WQ = new Uint32Array(Math.max(1, QQ.length));
      return QQ.forEach(((QQ, XQ) => {
        let {
          id: wQ,
          rotation: qQ
        } = QQ;
        WQ[XQ] = 65535 & wQ | (3 & qQ) << 16
      })), WQ
    }
    const yQ = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7015: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      h: () => zQ,
      i: () => sQ,
      m: () => qQ,
      n: () => TQ
    });
    const wQ = ["terrain", "liquid", "model"];

    function qQ() {
      const QQ = [];
      for (const WQ of [!1, !0])
        for (const XQ of wQ) QQ.push({
          strict: WQ,
          program: XQ
        });
      return QQ
    }

    function TQ(QQ) {
      return `${QQ.strict?"strict":"allow"}.${QQ.program}`
    }

    function zQ(QQ) {
      return !QQ.hooks.vertex && !QQ.hooks.surface && !QQ.hooks.light
    }

    function sQ(QQ, WQ) {
      return "off" !== WQ && (null === QQ || QQ.some((QQ => QQ.key.strict === ("strict" === WQ) && !zQ(QQ))))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);