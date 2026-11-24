export const id = 140;
export const ids = [140];
export const modules = {
  38880: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT,
      f: () => LT,
      i: () => pT,
      l: () => cT,
      m: () => lT,
      p: () => jT,
      q: () => gT,
      t: () => BT
    });
    var WT = mT(344),
      zT = mT(1843);
    const MT = "A valid external Instance reference no longer exists.";

    function gT(TT) {
      return TT.includes(MT)
    }
    const nT = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      HT = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const kT = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function jT(TT, UT) {
      return TT ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(TT) {
        var UT;
        const mT = null !== (UT = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(TT)) && void 0 !== UT ? UT : /failed with ([A-Z][A-Z0-9_]+)/.exec(TT);
        return mT ? mT[1] : gT(TT) ? "gpu_process_lost" : "other"
      }(UT)
    }

    function lT(TT) {
      return `${(null===TT||void 0===TT?void 0:TT.vendor)||"unknown vendor"} ${(null===TT||void 0===TT?void 0:TT.architecture)||"unknown architecture"}`
    }

    function LT(TT) {
      return vT(TT)[1]
    }

    function pT(TT) {
      return vT(TT)[2]
    }

    function BT(TT, UT, mT) {
      const zT = (0, WT.h)(),
        MT = null !== zT && zT >= UT,
        gT = document.hidden ? "hidden" : MT ? "shown" : "visible",
        nT = MT ? mT - zT : null;
      return {
        page: null === nT ? gT : `${gT}${LT(nT)}`,
        code: `${TT}_${null===nT?gT:`${gT}_${pT(nT)}`}_${ZT(mT)}`
      }
    }

    function ZT(TT) {
      if ((0, zT.h)()) return "ad_open";
      const UT = (0, zT.e)();
      return null === UT ? "ad_none" : `ad_${pT(TT-UT.endedAt)}_${UT.pageHid?"h":"v"}`
    }

    function cT(TT) {
      return fT(HT, TT)[1]
    }

    function vT(TT) {
      return fT(nT, TT)
    }

    function fT(TT, UT) {
      var mT;
      return null !== (mT = TT.find((TT => {
        let [mT] = TT;
        return UT < mT
      }))) && void 0 !== mT ? mT : TT[TT.length - 1]
    }
  },
  40786: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT,
      e: () => jT,
      h: () => gT,
      i: () => zT,
      l: () => nT,
      o: () => kT
    });
    class WT extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function zT(TT) {
      return TT instanceof RangeError && /call stack/i.test(TT.message) || TT instanceof Error && "InternalError" === TT.name && /recursion/i.test(TT.message)
    }
    const MT = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function gT(TT) {
      var UT;
      return TT instanceof WebAssembly.RuntimeError || TT instanceof WT || zT(TT) && MT.test(null !== (UT = TT.stack) && void 0 !== UT ? UT : "")
    }

    function nT(TT, UT) {
      if (gT(TT)) throw TT;
      console.error(UT, TT)
    }

    function HT(TT, UT, mT, zT, MT) {
      if (UT % zT !== 0 || UT + mT > TT.byteLength) throw new WT(`${MT}: ${mT} bytes at ${UT}, ${zT}-aligned, outside ${TT.byteLength} bytes of memory`)
    }

    function kT(TT, UT, mT, WT, zT) {
      return 0 === mT ? null : (HT(UT, mT, WT * TT.BYTES_PER_ELEMENT, TT.BYTES_PER_ELEMENT, zT), new TT(UT, mT, WT))
    }

    function jT(TT, UT, mT, WT, zT) {
      return 0 === UT ? null : (HT(TT, UT, mT, WT, zT), new DataView(TT, UT, mT))
    }
  },
  40860: (TT, UT, mT) => {
    mT.d(UT, {
      $: () => MU,
      B: () => rT,
      C: () => RT,
      F: () => AT,
      J: () => DT,
      K: () => UU,
      O: () => LU,
      R: () => TU,
      T: () => oT,
      X: () => mU,
      c: () => dT,
      db: () => HU,
      f: () => pU,
      g: () => vU,
      hb: () => tT,
      i: () => nU,
      k: () => lU,
      n: () => zU,
      p: () => jU,
      s: () => kU,
      u: () => cU,
      v: () => NT,
      z: () => hT
    });
    var WT = mT(351),
      zT = mT(278),
      MT = mT(280),
      gT = mT(25),
      nT = mT(2929),
      HT = mT(712),
      kT = mT(4627),
      jT = mT(2893),
      lT = mT(3551),
      LT = mT(102),
      pT = mT(344),
      BT = mT(44),
      ZT = mT(340),
      cT = mT(117),
      vT = mT(677),
      fT = mT(130),
      qT = mT(126),
      iT = mT(4904),
      bT = mT(40869),
      OT = mT(1926),
      eT = mT(40871),
      YT = mT(34219),
      JT = mT(40879);
    const xT = "bloxd-webgpuOffAfterLoss",
      dT = "context:webgl",
      wT = "probe:threw";

    function tT(TT) {
      let UT;
      try {
        UT = TT.getContext("webgl", {
          powerPreference: fT.c
        })
      } catch {
        UT = null
      }
      if (null === UT) return null;
      let mT = null;
      try {
        const TT = UT.getParameter(UT.MAX_TEXTURE_SIZE);
        mT = "number" === typeof TT && TT > 0 ? TT : null
      } catch {
        mT = null
      }
      try {
        var WT;
        null === (WT = UT.getExtension("WEBGL_lose_context")) || void 0 === WT || WT.loseContext()
      } catch {}
      return mT
    }
    const aT = new Set(["android_arm", "chromeos_other", "windows_intel_low", "ios"]);

    function yT() {
      return "ios" === (0, LT.getOperatingSystem)() ? "ios" : "other"
    }
    const XT = "mali_valhall",
      IT = new Set(["nvidia_pre_turing"]),
      QT = new Set(["intel_gen7_8"]);

    function sT(TT, UT) {
      return aT.has(TT) ? "android_arm" === TT && UT === XT ? "webgpu_default" : "webgl_default" : null
    }

    function FT(TT) {
      return function(TT) {
        try {
          return TT()
        } catch {
          return null
        }
      }((() => {
        var UT, mT, WT, gT;
        const nT = null !== (UT = null === (mT = TT.info) || void 0 === mT ? void 0 : mT.vendor) && void 0 !== UT ? UT : "";
        return "windows" === (0, LT.getOperatingSystem)() && "" !== nT && "intel" !== (0, LT.normaliseGpuVendor)(nT) ? null : ((0, LT.seedGpuVendor)(nT), sT((0, zT.i)(), (0, MT.g)(nT, null !== (WT = null === (gT = TT.info) || void 0 === gT ? void 0 : gT.architecture) && void 0 !== WT ? WT : "")))
      }))
    }

    function PT() {
      var TT;
      return {
        gpu: null !== (TT = navigator.gpu) && void 0 !== TT ? TT : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(TT) {
          let UT, mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bT.d;
          try {
            UT = TT.getContext("webgl")
          } catch {
            UT = null
          }
          if (null === UT) return [dT];
          const WT = [];
          try {
            for (const zT of mT.extensions) null === UT.getExtension(zT) && WT.push(zT);
            for (const [zT, MT] of Object.entries(mT.limits)) {
              const TT = UT[zT],
                mT = "number" === typeof TT ? UT.getParameter(TT) : null;
              ("number" !== typeof mT || mT < MT) && WT.push(`limit:${zT}`)
            }
            const TT = UT.getShaderPrecisionFormat(UT.VERTEX_SHADER, UT.HIGH_FLOAT);
            (null === TT || TT.precision < mT.vertexHighFloatBits) && WT.push("precision:vertex_high_float")
          } catch {
            WT.push(wT)
          }
          try {
            var zT;
            null === (zT = UT.getExtension("WEBGL_lose_context")) || void 0 === zT || zT.loseContext()
          } catch {}
          return WT
        }(document.createElement("canvas")),
        offAfterLoss: TT => uT((() => TT ? (0, ZT.z)() : gT.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: TT => uT((() => (0, cT.f)(TT))),
        intelGen9: TT => uT((() => (0, cT.l)(TT))),
        storeIntelGen9Verdict: TT => {
          BT.l.setItem(cT.D, TT)
        },
        gpuClassWebGlArm: FT,
        storeGpuClassVerdict: TT => {
          BT.l.setItem(cT.C, TT)
        },
        gpuClassOnWebGl: TT => (0, vT.d)(TT),
        webGlDefaultFamily: TT => QT.has((0, MT.g)(TT.vendor, TT.architecture)),
        storeWebGlDefaultFamilyVerdict: TT => {
          BT.l.setItem(cT.G, TT)
        },
        override: () => VT(),
        claimed: () => CT((0, HT.j)()),
        webGpuSetting: () => {
          const TT = BT.l.getItem(WT.ac);
          return "boolean" === typeof TT ? TT : null
        },
        heldBack: () => vT.h,
        storeHoldbackSpared: TT => {
          BT.l.setItem(cT.y, TT)
        },
        intelGen9OnWebGl: () => vT.i,
        Np: () => uT((() => (0, lT.i)(LT.featureFlags.settings.canUseShaderPacks))),
        windows: () => uT((() => "windows" === (0, LT.getOperatingSystem)())),
        defaultCompatibility: YT.b
      }
    }

    function VT() {
      let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, nT.r)("render") && "webgl1" === (0, nT.o)("renderer")) return "webgl1";
      const UT = [() => new URLSearchParams(window.location.search).get(jT.c), () => BT.l.getItem(jT.e), () => {
        const UT = localStorage.getItem(xT);
        return null !== UT && TT && localStorage.removeItem(xT), "1" === UT ? "webgl2" : null
      }];
      for (const mT of UT) {
        let TT = null;
        try {
          TT = CT(mT())
        } catch {}
        if (null !== TT) return TT
      }
      return null
    }

    function uT(TT) {
      try {
        return TT()
      } catch {
        return !1
      }
    }

    function CT(TT) {
      return "lite" === TT ? "webgpu" : "webgl2" === TT || "babylon" === TT ? "webgl" : null
    }

    function rT(TT) {
      return "none" === TT || "compatibility_mode" === TT
    }
    async function KT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PT();
      const UT = await async function(TT) {
        const UT = GT(TT),
          {
            source: mT
          } = UT,
          WT = !UT.asked,
          zT = "gpu" in UT && UT.heldBack,
          gT = function(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return zT && !rT(TT) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: mT
            } : {
              reason: TT,
              adapter: UT,
              source: mT
            }
          };
        if (!("gpu" in UT)) return gT(UT.refused);
        let nT;
        try {
          nT = await (0, OT.l)((0, qT.o)(UT.gpu, {
            compatibility: ST(TT, UT)
          }), BU, `requestAdapter didn't settle in ${BU/1e3} s`)
        } catch {
          return gT("adapter_error")
        }
        if ("string" === typeof nT) return gT(nT);
        const {
          adapter: HT,
          compatibility: kT
        } = nT, jT = (0, qT.c)(HT);
        if ((0, qT.g)(HT)) return gT("software_adapter", jT);
        const lT = TT.windows() && function(TT) {
          return IT.has((0, MT.g)(TT.vendor, TT.architecture))
        }(jT);
        if (TT.storeHoldbackSpared(lT), zT && !lT) return gT("webgl_holdback");
        const LT = TT.intelGen9(HT);
        TT.storeIntelGen9Verdict(LT);
        const pT = LT ? null : TT.gpuClassWebGlArm(HT);
        TT.storeGpuClassVerdict(null !== pT && void 0 !== pT && pT);
        const BT = TT.webGlDefaultFamily(jT);
        if (TT.storeWebGlDefaultFamilyVerdict(BT), WT && TT.oldIntelDriver(HT)) return gT("old_intel_driver", jT);
        if ("default" === mT && LT && TT.intelGen9OnWebGl()) return gT("intel_gen9", jT);
        if ("default" === mT && null !== pT && TT.gpuClassOnWebGl(pT)) return gT("gpu_class_webgl", jT);
        if ("default" === mT && BT) return gT("gpu_wasm_arm", jT);
        return gT(kT ? "compatibility_mode" : "none", jT)
      }(TT);
      if (rT(UT.reason)) return {
        backend: "webgpu",
        ...UT
      };
      if ("webgl1" !== TT.override() && TT.webgl2()) return {
        backend: "webgl",
        ...UT
      };
      const mT = TT.webgl1();
      return 0 === mT.length ? {
        backend: "webgl1",
        ...UT
      } : {
        missing: mT
      }
    }

    function ST(TT, UT) {
      let {
        source: mT,
        asked: WT
      } = UT;
      return WT || "default" === mT ? (0, YT.i)(WT, TT.defaultCompatibility) : void 0
    }

    function GT(TT) {
      const UT = TT.override(),
        mT = TT.webGpuSetting(),
        WT = null === UT && !0 !== mT && TT.Np(),
        zT = null !== UT || null !== mT || WT ? null : TT.claimed(),
        MT = null !== UT ? "override" : !0 === mT ? "setting" : WT ? "pack" : !1 === mT ? "setting" : null !== zT ? "claim" : "default",
        gT = function(TT) {
          return "override" === TT || "setting" === TT
        }(MT);
      if ("webgl" === UT || "webgl1" === UT || "webgl" === zT || "setting" === MT && !1 === mT) return {
        source: MT,
        asked: gT,
        refused: "not_requested"
      };
      if (!TT.gpu) return {
        source: MT,
        asked: gT,
        refused: "no_webgpu_api"
      };
      const nT = "default" === MT && TT.heldBack();
      return nT && !TT.windows() ? {
        source: MT,
        asked: gT,
        refused: "webgl_holdback"
      } : !gT && TT.offAfterLoss("pack" === MT) ? {
        source: MT,
        asked: gT,
        refused: nT ? "webgl_holdback" : "off_after_loss"
      } : {
        source: MT,
        asked: gT,
        heldBack: nT,
        gpu: TT.gpu
      }
    }

    function NT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...PT(),
          override: () => VT(!1)
        },
        UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LT.isWebKit,
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yT;
      try {
        if (!UT()) return !1;
        const WT = GT(TT);
        if (!("gpu" in WT) || WT.heldBack) return !1;
        const zT = "default" === WT.source ? sT(mT(), "apple") : null;
        return null === zT || !TT.gpuClassOnWebGl(zT)
      } catch (WT) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", WT), !1
      }
    }
    let ET = !1;
    async function hT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PT();
      if (null === TT) return null;
      const mT = await KT(UT);
      return ET = !("missing" in mT) && "webgpu" === mT.backend && "claim" === mT.source, "missing" in mT ? mT : {
        ...mT,
        load: TT[mT.backend]
      }
    }
    async function DT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PT().gpu,
        WT = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== TT.backend) return !1;
      const zT = WU(TT, UT, "indirectDraws", "off", "on");
      if (null !== zT) return zT;
      if (null !== TT.adapter && (0, cT.m)(TT.adapter, WT)) return !0;
      if (null === mT) return !1;
      try {
        var MT;
        const TT = await (0, OT.l)(mT.requestAdapter({
          powerPreference: "low-power"
        }).then((async TT => (null !== TT && await (0, qT.e)(TT), TT))), BU, `the low-power requestAdapter didn't settle in ${BU/1e3} s`);
        return (0, cT.m)(null !== (MT = null === TT || void 0 === TT ? void 0 : TT.info) && void 0 !== MT ? MT : {}, WT)
      } catch (gT) {
        return gT instanceof OT.f
      }
    }

    function oT(TT, UT, mT) {
      if ("webgpu" !== TT.backend) return !1;
      const WT = WU(TT, UT, "terrainFetch", "texture", "storage");
      return null !== WT ? WT : null !== TT.adapter && (0, cT.j)(TT.adapter, mT)
    }

    function AT(TT, UT) {
      if ("webgpu" !== TT.backend) return !1;
      const mT = WU(TT, UT, "skyOrder", "early", "last");
      return null !== mT ? mT : null !== TT.adapter && (0, MT.g)(TT.adapter.vendor, TT.adapter.architecture) === XT
    }

    function RT(TT, UT) {
      if ("webgpu" !== TT.backend) return !1;
      const mT = WU(TT, UT, "uploadCopies", "off", "on");
      return null !== mT ? mT : null !== TT.adapter && "powervr_rogue" === (0, MT.g)(TT.adapter.vendor, TT.adapter.architecture)
    }

    function TU(TT, UT, mT) {
      if ("webgpu" !== TT.backend) return !1;
      const WT = WU(TT, UT, "sceneDepth", "off", "on");
      return null !== WT ? WT : null !== TT.adapter && (0, cT.k)(TT.adapter, mT)
    }

    function UU(TT, UT) {
      return "webgl" === TT.backend ? WU(TT, UT, "instancedTerrain", "1", "0") : null
    }

    function mU(TT, UT) {
      return "webgpu" !== TT.backend || UT && (null === TT.adapter || !(0, ZT.B)(TT.adapter))
    }

    function WU(TT, UT, mT, WT, zT) {
      const MT = new URLSearchParams(UT).get(mT),
        gT = null !== MT && void 0 !== MT ? MT : (0, HT.c)(mT);
      return gT !== WT && gT !== zT ? null : (ET ||= null === MT && "webgpu" === TT.backend, gT === WT)
    }

    function zU(TT) {
      return null !== TT && "missing" in TT
    }

    function MU(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !HU(),
        mT = arguments.length > 2 ? arguments[2] : void 0;
      return UT ? function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gT.b,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const WT = "start_failed" === TT || "pipeline_failed" === TT,
            zT = (0, JT.g)(TT, mT),
            MT = UT.turnOffWebGpuAfterDeviceLoss(WT ? "visible" : (0, ZT.i)((0, pT.l)()), WT, zT);
          return ET && (0, HT.v)("webgpuLoss"), UT.isWebGpuOffAfterLoss() && "webgpu" === CT(BT.l.getItem(jT.e)) && BT.l.removeItem(jT.e), (0, nT.r)("webgpuloss") && (0, kT.c)((UT => {
            var mT;
            UT.noteWebGpuLoss("wasm", MT ? TT : `${TT}, which storage didn't keep`, null !== (mT = zT.message) && void 0 !== mT ? mT : null)
          })), MT
        } catch {
          return !1
        }
      }(TT, gT.b, mT) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const gU = "framePacing";

    function nU(TT) {
      const UT = new URLSearchParams(TT).get(gU);
      return null !== UT && /^\d{1,9}$/.test(UT) ? Number(UT) : void 0
    }

    function HU() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === CT(new URLSearchParams(TT).get(jT.c))
      } catch {
        return !1
      }
    }

    function kU(TT) {
      return !!jU(TT) || TT instanceof Error && !(TT instanceof WebAssembly.RuntimeError) && TT.message.startsWith(`${iT.l.RenderSurfaceUnusable}:`)
    }

    function jU(TT) {
      const {
        name: UT,
        message: mT
      } = null !== TT && void 0 !== TT ? TT : {};
      return "InvalidStateError" === UT && "string" === typeof mT && mT.startsWith("GPUDevice.")
    }

    function lU(TT) {
      const UT = TT;
      return "function" === typeof UT.MWT && "function" === typeof UT.gWT ? UT : null
    }

    function LU(TT) {
      return "function" === typeof TT.Qc ? TT : null
    }
    const pU = "openRenderer";
    const BU = 5e3,
      ZU = 15e3;

    function cU(TT, UT, mT, WT, zT, MT) {
      return (0, OT.l)(function(TT, UT, mT, WT, zT, MT) {
        return (0, eT.e)(TT, UT, (() => TT.Qc(mT, WT, zT, MT.indirectHangs, MT.storagePullBreaks, MT.splitPassBreaks, MT.earlySky, MT.instancedTerrain, MT.cellLight, MT.framesAhead, MT.webGpuRestores, MT.bufferCopiesCrash)))
      }(TT, UT, mT, WT, zT, MT), ZU, `${iT.l.RenderSurfaceUnusable}: the renderer didn't open in ${ZU/1e3} s`, fU)
    }
    async function vU(TT, UT, mT, WT, zT, MT) {
      if ("function" !== typeof TT.OgT) throw new Error("this core has no set_renderer");
      const gT = await cU(UT, pU, mT, zT, WT, MT);
      try {
        TT.OgT(gT)
      } catch (nT) {
        throw fU(gT), nT
      }
    }

    function fU(TT) {
      try {
        TT.free()
      } catch {}
    }
  },
  40966: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    const WT = {
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
  40893: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => BT,
      e: () => ZT,
      f: () => LT,
      h: () => lT
    });
    const WT = 2e3,
      zT = "unavailable";
    let MT = () => Promise.resolve().then((() => mT(3075))),
      gT = null,
      nT = null,
      HT = kT();

    function kT() {
      let TT = () => {};
      return {
        promise: new Promise((UT => {
          TT = () => {
            UT(null)
          }
        })),
        resolve: TT
      }
    }

    function jT() {
      if (null === gT) {
        const TT = MT();
        gT = TT, TT.then((UT => {
          gT === TT && (nT = UT)
        }), (() => {
          gT === TT && (gT = null)
        }))
      }
      return gT
    }

    function lT() {
      jT().catch((() => {}))
    }

    function LT() {
      HT.resolve()
    }

    function pT(TT, UT, mT, WT) {
      if (null === TT) return {
        errorKind: UT,
        fingerprint: zT,
        dedupe: `${UT}|${WT}`
      };
      const {
        fingerprint: MT
      } = TT.clientErrorKey(UT, mT, WT);
      return {
        errorKind: UT,
        fingerprint: MT,
        dedupe: MT
      }
    }

    function BT(TT, UT, mT, WT) {
      return null === nT ? WT ? (lT(), pT(null, TT, UT, mT)) : null : pT(nT, TT, UT, mT)
    }
    async function ZT(TT, UT, mT) {
      let zT;
      const MT = new Promise((TT => {
        zT = setTimeout((() => {
          TT(null)
        }), WT)
      }));
      try {
        return pT(await Promise.race([jT(), MT, HT.promise]), TT, UT, mT)
      } catch {
        return pT(null, TT, UT, mT)
      } finally {
        clearTimeout(zT)
      }
    }
  },
  40887: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      BUILT_IN_ANIMATIONS_SITE: () => hT,
      CORE_ERRORS_SITE: () => PT,
      EVENT_OVERFLOW_SITE: () => ET,
      FIRST_VIEW_SITE: () => AT,
      JOIN_SITE: () => uT,
      LEAVE_SITE: () => CT,
      MAIN_THREAD_SITE: () => RT,
      MODEL_FEED_SITE: () => rT,
      MODEL_POOL_SITE: () => KT,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => WU,
      NON_FATAL_REPORTS_PER_SESSION: () => bU,
      PREVIEW_ANIMATIONS_SITE: () => NT,
      RENDER_RELOAD_SITE: () => GT,
      REQUEST_DEVICE_SITE: () => TU,
      TEXTURE_NAMES_SITE: () => ST,
      TEXTURE_PACK_FEED_SITE: () => DT,
      TEXTURE_PACK_SWAP_SITE: () => oT,
      TurnstilePageError: () => zm,
      WASM_LOAD_SITE: () => VT,
      countRenderLost: () => Pm,
      crashError: () => dU,
      crashReportsSettled: () => sU,
      deviceLossWords: () => Im,
      flushCrashReports: () => IU,
      joinFailureCode: () => Mm,
      lokiTransport: () => gU,
      modelFailureCode: () => Lm,
      readTrap: () => KU,
      renderLoss: () => Fm,
      renderReloadMessage: () => Qm,
      reportCoreErrors: () => VU,
      reportCountedLoadFallback: () => mm,
      reportCrash: () => wU,
      reportDataLoadFailure: () => Sm,
      reportDisconnect: () => jm,
      reportDracoDecoderFailure: () => cm,
      reportDroppedRequiredLimits: () => Tm,
      reportEventOverflow: () => bm,
      reportFirstViewNoTerrain: () => xm,
      reportLightFault: () => em,
      reportMainStall: () => dm,
      reportMemoryShed: () => Jm,
      reportModelFailure: () => pm,
      reportModelPoolFailure: () => Bm,
      reportModelsModuleRetry: () => Zm,
      reportNoBackendRetry: () => RU,
      reportPageJoinFailure: () => nm,
      reportReconnectGaveUp: () => lm,
      reportRenderReload: () => Cm,
      reportReplayFault: () => tm,
      reportStaleBuildReload: () => Nm,
      reportStoppedCore: () => EU,
      reportTerrainTextureFailure: () => rm,
      reportTexturePackFeedLoadFailure: () => qm,
      reportTexturePackKeptOut: () => im,
      reportUnstreamedCoreLoad: () => Wm,
      reportUnsupportedFallback: () => AU,
      reportUnusedSeat: () => km,
      reportWorkerLost: () => Om,
      reportWorkerStartTimeout: () => wm,
      reportWorldgenGaveUp: () => Ym,
      reportWorldgenLoadFailure: () => fm,
      resetCrashReports: () => FU,
      setCrashAdPreload: () => ZU,
      setCrashBackend: () => BU,
      setCrashScreen: () => lU,
      setCrashTransport: () => kU,
      showCrash: () => NU,
      showJoinFailure: () => gm,
      showUnsupported: () => DU,
      unknownSkyWords: () => PU
    });
    var WT = mT(1089),
      zT = mT(1437),
      MT = mT(1429),
      gT = mT(1153),
      nT = mT(280),
      HT = mT(3081),
      kT = mT(4399),
      jT = mT(40893),
      lT = mT(4895),
      LT = mT(40900),
      pT = mT(3116),
      BT = mT(38880),
      ZT = mT(133),
      cT = mT(130),
      vT = mT(3119),
      fT = mT(36565),
      qT = mT(1926),
      iT = mT(40907),
      bT = mT(40724),
      OT = mT(40824),
      eT = mT(40827),
      YT = mT(36557),
      JT = mT(2992),
      xT = mT(3001),
      dT = mT(40926),
      wT = mT(40944),
      tT = mT(40951),
      aT = mT(36945),
      yT = mT(3342),
      XT = mT(36349),
      IT = mT(40871),
      QT = mT(36358),
      sT = mT(40975);
    const FT = "[bloxd-wasm-client]",
      PT = "coreErrors",
      VT = "wasmLoad",
      uT = "join",
      CT = "leave",
      rT = "modelFeed",
      KT = "modelWorkerPool",
      ST = "textureNames",
      GT = "renderReload",
      NT = "previewAnimations",
      ET = "eventOverflow",
      hT = "builtInAnimations",
      DT = "texturePackFeed",
      oT = "texturePackSwap",
      AT = "firstView",
      RT = "mainThread",
      TU = "requestDevice",
      UU = 300,
      mU = 64,
      WU = 8;
    let zU = 0;
    const MU = new Set,
      gU = (TT, UT) => {
        const mT = cU[TT.kind],
          WT = {
            backend: LU,
            adPreload: pU
          };
        if (null === mT) return void nU(TT, UT, WT, null);
        const zT = (0, jT.b)(mT, TT.message, TT.code, TT.fatal);
        null === zT ? XU("Loki", (async () => {
          nU(TT, UT, WT, await (0, jT.e)(mT, TT.message, TT.code))
        })) : nU(TT, UT, WT, zT)
      };

    function nU(TT, UT, mT, WT) {
      let {
        backend: zT,
        adPreload: MT
      } = mT;
      const {
        kind: nT,
        code: kT,
        site: jT,
        fatal: lT,
        details: LT
      } = TT;
      if (!lT)
        if (null === WT || (0, HT.c)(WT.errorKind) || MU.has(WT.dedupe)) {
          if (zU >= WU) return;
          zU++
        } else MU.add(WT.dedupe);
      const pT = {
        ...LT,
        kind: nT,
        code: kT,
        site: jT,
        fatal: String(lT),
        backend: zT
      };
      MT && (pT.adPreload = "true"), null !== WT && (pT.errorKind = WT.errorKind, pT.fingerprint = WT.fingerprint), UT instanceof Error && "string" === typeof UT.stack && (pT.causeStack = UT.stack.slice(0, 2e3)), (0, gT.cZ)(dU(TT, UT), pT)
    }
    let HU = gU;

    function kU(TT) {
      const UT = HU;
      return HU = TT, UT
    }
    let jU = () => {};

    function lU(TT) {
      const UT = jU;
      return jU = TT, UT
    }
    let LU = "unpicked",
      pU = !1;

    function BU(TT) {
      LU = TT
    }

    function ZU(TT) {
      pU = TT
    }
    const cU = {
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
      vU = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      fU = new Set(["unstreamedLoad"]),
      qU = new Set(["linkCensus", "linksReadAfterView"]);
    let iU = !1;
    const bU = 20,
      OU = new Map;
    let eU = 0,
      YU = 0;
    const JU = new Set,
      xU = new Set;

    function dU(TT, UT) {
      const mT = Object.assign(new Error(`${TT.code}: ${TT.message}`), {
        name: "WasmClientCrash",
        cause: null !== UT && void 0 !== UT ? UT : void 0
      });
      return UT instanceof Error && UT.stack && (mT.stack = UT.stack), mT
    }

    function wU(TT) {
      var UT, WT;
      const {
        kind: zT,
        code: MT,
        site: gT,
        fatal: nT,
        message: HT,
        error: kT
      } = TT, jT = !1 !== TT.toTransport && !fU.has(zT), lT = !nT && jT && !qU.has(zT), LT = {
        kind: zT,
        code: MT,
        site: gT,
        fatal: nT,
        message: HT,
        details: null !== (UT = TT.details) && void 0 !== UT ? UT : {}
      }, pT = `${MT}@${gT}${void 0===TT.instance?"":`#${TT.instance}`}${nT?"!":""}`, BT = (null !== (WT = OU.get(pT)) && void 0 !== WT ? WT : 0) + 1;
      if (OU.set(pT, BT), void 0 !== TT.countAs && 1 === BT && aU(TT.countAs), BT > 1 ? 0 === (BT & BT - 1) && yU((() => {
          console.warn(`${FT} ${MT} at ${gT} reported ${BT} times`)
        })) : lT && eU >= bU ? yU((() => {
          console.warn(`${FT} ${zT} ${MT} at ${gT}: ${HT} (not sent: the session's ${bU} went)`, LT.details, null !== kT && void 0 !== kT ? kT : "")
        })) : (lT && eU++, function(TT, UT, WT, zT) {
          var MT, gT;
          const {
            kind: nT,
            code: HT,
            site: kT,
            fatal: jT,
            message: lT,
            details: LT
          } = TT;
          yU((() => {
            (jT ? console.error : console.warn)(`${FT} ${nT} ${HT} at ${kT}: ${lT}`, LT, null !== UT && void 0 !== UT ? UT : "")
          }));
          const pT = vU[nT],
            BT = null !== (MT = null !== (gT = cU[nT]) && void 0 !== gT ? gT : pT) && void 0 !== MT ? MT : null;
          zT || null === BT || tU((async () => {
            const {
              reportCappedWasmFailure: TT,
              reportUncappedWasmFailure: UT,
              reportWasmFailure: WT
            } = await mT.e(213).then((() => mT(36341)));
            (qU.has(nT) ? UT : void 0 === pT ? WT : TT)(BT, lT, HT)
          }));
          WT && yU((() => {
            HU(TT, UT)
          }))
        }(LT, kT, jT, void 0 !== TT.countAs)), nT) {
        var ZT;
        const UT = null !== (ZT = TT.screen) && void 0 !== ZT ? ZT : {
          text: (0, aT.d)(LT, !0),
          reload: !0
        };
        yU((() => {
          jU(UT)
        }))
      }
      return LT
    }

    function tU(TT) {
      XU("counts", (async () => {
        const {
          peekVisitSessionId: UT
        } = await Promise.resolve().then((() => mT(696)));
        null !== UT() && (await TT(), iU = !0)
      }))
    }

    function aU(TT) {
      JU.has(TT.errorKind) || (JU.add(TT.errorKind), tU((async () => {
        const {
          reportClientError: UT
        } = await Promise.resolve().then((() => mT(3068)));
        UT(TT.errorKind, TT.error, TT.code, !0, void 0, TT.fields)
      })))
    }

    function yU(TT) {
      try {
        TT()
      } catch (UT) {
        try {
          console.warn(`${FT} could not send a report`, UT)
        } catch {}
      }
    }

    function XU(TT, UT) {
      try {
        const mT = UT().catch((UT => {
          console.warn(`${FT} could not send the report to ${TT}`, UT)
        })).finally((() => {
          xU.delete(mT)
        }));
        xU.add(mT)
      } catch (mT) {
        console.warn(`${FT} could not send the report to ${TT}`, mT)
      }
    }
    async function IU(TT) {
      let UT;
      (0, jT.f)();
      const mT = new Promise((mT => {
        UT = setTimeout(mT, TT)
      }));
      await Promise.race([QU(), mT]), clearTimeout(UT)
    }
    async function QU() {
      if (await Promise.allSettled([...xU]), iU) try {
        const {
          flushClientAnalyticsEvents: TT
        } = await Promise.resolve().then((() => mT(1607)));
        await TT()
      } catch (TT) {
        console.warn(`${FT} could not send the counts`, TT)
      }
    }
    async function sU() {
      for (; xU.size > 0;) await Promise.allSettled([...xU])
    }

    function FU() {
      OU.clear(), eU = 0, iU = !1, zU = 0, MU.clear(), YU = 0, JU.clear(), (0, LT.v)()
    }

    function PU(TT) {
      const UT = "object" === typeof TT && null !== TT ? TT.type : TT;
      return "string" !== typeof UT ? "sky not named" : `sky ${JSON.stringify(Array.from(UT).slice(0,mU).join(""))}`
    }

    function VU(TT, UT, mT, WT) {
      YU += UT;
      for (const {
          code: nT,
          detail: HT
        }
        of TT) {
        var zT, MT, gT;
        const TT = (0, lT.pe)(nT),
          UT = (0, LT.e)(nT, HT),
          kT = null === WT || void 0 === WT ? void 0 : WT(nT, HT),
          jT = void 0 !== (null === UT || void 0 === UT ? void 0 : UT.gpuDetails),
          pT = jT ? null === (zT = (0, cT.s)()) || void 0 === zT ? void 0 : zT.renderer : void 0,
          BT = jT ? ` ${(0,LT.m)()}` : "",
          ZT = Array.from([pT && `gpu ${(0,LT.z)(pT)}`, kT].filter(Boolean).join("; ")).slice(0, UU).join(""),
          vT = `core error ${TT}${null!==(MT=null===UT||void 0===UT?void 0:UT.words)&&void 0!==MT?MT:""}${BT}${ZT?`: ${ZT}`:""}`,
          fT = {
            errorCode: String(nT),
            detail: String(HT),
            droppedBefore: String(YU),
            wasmBuild: mT.wasm,
            clientVersion: mT.client,
            ...null === UT || void 0 === UT ? void 0 : UT.gpuDetails
          };
        null !== UT && (0, LT.t)(UT) ? yU((() => {
          console.warn(`${FT} coreError CORE-${TT}: ${vT} (not sent: the session's render warnings of its kind went)`, fT)
        })) : uU(nT) ? yU((() => {
          console.warn(`${FT} coreError CORE-${TT}: ${vT} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, fT)
        })) : wU({
          kind: rU(nT, HT),
          code: `CORE-${TT}`,
          site: PT,
          fatal: !1,
          message: vT,
          details: fT,
          instance: null !== (gT = null === UT || void 0 === UT ? void 0 : UT.instance) && void 0 !== gT ? gT : CU(nT, HT)
        })
      }
    }

    function uU(TT) {
      if (TT !== lT.S.AudioUnknownSound && TT !== lT.S.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: UT,
        lobbyName: mT
      } = (0, MT.c)();
      return null !== UT && (!!(0, WT.k)(UT) || TT === lT.S.AudioUnknownSound && (0, zT.f)(UT, mT))
    }

    function CU(TT, UT) {
      return TT === lT.S.RenderDeviceLost && 0 !== (UT & lT.$.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function rU(TT, UT) {
      return TT === lT.S.JobsHeapGaveUp ? "meshHeap" : (0, LT.j)(TT, UT) ? "linksReadAfterView" : (0, LT.g)(TT, UT) ? "linkCensus" : "coreError"
    }

    function KU(TT) {
      return (0, XT.o)(TT instanceof IT.b ? TT.trap : TT, JT.F, JT.bb)
    }
    const SU = "declined=js";

    function GU(TT) {
      return TT ? {
        labels: [SU],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function NU(TT, UT, mT) {
      return hU(TT, UT, mT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function EU(TT, UT, mT) {
      return hU(TT, UT, mT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function hU(TT, UT, mT, WT, zT) {
      let {
        memoryDetails: MT = {},
        declined: gT = !1
      } = WT;
      const {
        code: nT,
        details: HT,
        message: kT
      } = (0, iT.E)(TT, UT), jT = [];
      Object.assign(HT, (0, QT.e)(TT.error)), null !== mT && (HT.trapKind = mT.kind, null !== mT.panic && (HT.panic = (0, XT.k)(mT.panic)), mT.refusedBytes > 0 && (HT.refusedAllocation = String(mT.refusedBytes)), jT.push((0, XT.p)(mT.kind, mT.refusedBytes)));
      const lT = GU(gT);
      return wU({
        kind: "crash",
        code: nT,
        site: TT.site,
        fatal: zT,
        message: [...jT, ...lT.labels, kT].join("; "),
        details: {
          ...HT,
          ...lT.details,
          ...MT
        },
        error: TT.error
      })
    }

    function DU(TT, UT, mT) {
      return wU({
        kind: "unsupported",
        code: UT,
        site: VT,
        fatal: !0,
        message: mT,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: TT,
          status: UT
        },
        screen: {
          text: (0, aT.k)(TT),
          reload: "download" === TT
        }
      })
    }
    const oU = {
      unsupported: "unsupported_js_fallback",
      blockedAfterLoss: "blocked_after_loss",
      noContext: "no_context_js_fallback"
    };

    function AU(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return wU({
        kind: "unsupportedFallback",
        code: oU[UT],
        site: VT,
        fatal: !1,
        message: mT,
        details: {
          ...WT,
          cause: TT,
          status: "unsupported",
          decline: UT,
          fallback: "js"
        }
      })
    }

    function RU(TT, UT, mT) {
      return wU({
        kind: "recovered",
        code: "reprobed" === TT ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: VT,
        fatal: !1,
        message: mT,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: UT,
          step: TT
        }
      })
    }

    function Tm(TT) {
      return wU({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: TU,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: TT.join(",")
        }
      })
    }
    const Um = "reload=wasm";

    function mm(TT, UT, mT, WT) {
      const zT = GU("declined" === WT),
        MT = "wasmReload" === WT ? [Um] : zT.labels;
      return wU({
        kind: "unsupported",
        code: UT,
        site: VT,
        fatal: !1,
        message: [...MT, mT].join("; "),
        details: {
          cause: TT,
          status: UT,
          fallback: "wasmReload" === WT ? "wasmReload" : "js",
          ...zT.details
        }
      })
    }

    function Wm() {
      const {
        code: TT,
        message: UT
      } = yT.e;
      return wU({
        kind: "unstreamedLoad",
        code: TT,
        site: VT,
        fatal: !1,
        message: UT
      })
    }
    class zm extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Mm(TT) {
      return TT instanceof OT.n ? 0 === TT.code ? "JOIN-matchmake" : `JOIN-${TT.code}` : TT instanceof OT.d ? 0 === TT.code ? `JOIN-${TT.stage}` : `JOIN-${TT.stage}-${TT.code}` : TT instanceof bT.b ? "JOIN-gameCode" : TT instanceof zm ? "JOIN-turnstilePage" : TT instanceof OT.s ? "JOIN-trafficCheck" : TT instanceof fT.d ? "JOIN-timeout" : "JOIN-network"
    }

    function gm(TT, UT) {
      const mT = (0, QT.k)(TT),
        WT = {
          wasmBuild: UT.wasm,
          clientVersion: UT.client
        },
        zT = TT instanceof zm ? {
          text: (0, aT.h)(),
          reload: !1
        } : void 0,
        MT = (0, eT.h)(TT),
        gT = "expected" !== MT;
      return wU({
        kind: "join",
        code: Mm(TT),
        site: uT,
        fatal: !0,
        message: mT,
        details: WT,
        error: TT,
        screen: zT,
        toTransport: gT,
        instance: MT
      })
    }

    function nm(TT, UT, mT) {
      var WT;
      const zT = (0, eT.h)(TT),
        MT = {
          cause: (TT instanceof OT.d || TT instanceof OT.n) && null !== (WT = TT.serverText) && void 0 !== WT ? WT : "",
          sinceJoinStart: (0, vT.b)(mT.sinceJoinStartMs),
          game: mT.game,
          ...(0, vT.h)(),
          wasmBuild: UT.wasm,
          clientVersion: UT.client
        };
      return wU({
        kind: "pageJoin",
        code: Mm(TT),
        site: uT,
        fatal: !1,
        message: (0, QT.k)(TT),
        details: MT,
        error: TT,
        toTransport: "unrecognised" === zT,
        instance: zT
      })
    }
    const Hm = {
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

    function km(TT, UT) {
      let {
        unused: mT,
        answered: WT,
        heldMs: zT
      } = TT;
      const {
        code: MT,
        message: gT
      } = Hm[mT], nT = {
        unused: mT,
        answered: String(WT),
        heldMs: String(zT),
        wasmBuild: UT.wasm,
        clientVersion: UT.client
      };
      return wU({
        kind: "seat",
        code: MT,
        site: uT,
        fatal: !1,
        message: gT,
        details: nT
      })
    }

    function jm(TT, UT, mT) {
      var WT;
      let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (WT = TT.name) && void 0 !== WT ? WT : String(TT.code);
      const MT = {
          closeCode: String(TT.code),
          recognised: String(null !== TT.name),
          closeReason: mT.closeReason,
          sinceJoined: (0, vT.b)(mT.sinceJoinedMs),
          game: mT.game,
          ...(0, vT.h)(),
          wasmBuild: UT.wasm,
          clientVersion: UT.client
        },
        gT = null === TT.name && !(0, vT.f)(TT.code);
      return wU({
        kind: "disconnect",
        code: zT,
        site: CT,
        fatal: !1,
        message: "Left room",
        details: MT,
        toTransport: gT
      })
    }

    function lm(TT, UT) {
      const mT = {
        ...(0, pT.k)(TT),
        wasmBuild: UT.wasm,
        clientVersion: UT.client
      };
      return wU({
        kind: "disconnect",
        code: `reconnect-${TT.reason}`,
        site: uT,
        fatal: !1,
        message: "Reconnect failed",
        details: mT
      })
    }

    function Lm(TT) {
      return TT.error instanceof xT.f ? `MODEL-${TT.error.status}` : TT.error instanceof dT.h ? "MODEL-ring" : "MODEL-network"
    }

    function pm(TT, UT) {
      const mT = Lm(TT),
        WT = `model file ${TT.file} ${TT.startup?"(startup) ":""}could not load`,
        zT = {
          file: String(TT.file),
          url: TT.url,
          wasmBuild: UT.wasm,
          clientVersion: UT.client
        };
      return wU({
        kind: TT.startup ? "model" : "modelLate",
        code: mT,
        site: rT,
        fatal: TT.startup,
        message: WT,
        details: zT,
        error: TT.error
      })
    }

    function Bm(TT, UT) {
      const mT = {
        wasmBuild: UT.wasm,
        clientVersion: UT.client
      };
      return wU({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: KT,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: mT,
        error: TT
      })
    }

    function Zm(TT, UT, mT) {
      const WT = {
        delayMs: String(UT),
        wasmBuild: mT.wasm,
        clientVersion: mT.client
      };
      TT instanceof xT.f && (WT.status = String(TT.status));
      return wU({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: KT,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: WT,
        error: TT
      })
    }

    function cm(TT, UT) {
      const mT = {
        wasmBuild: UT.wasm,
        clientVersion: UT.client
      };
      return wU({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: KT,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: mT,
        error: TT
      })
    }

    function fm(TT, UT) {
      const mT = {
        wasmBuild: UT.wasm,
        clientVersion: UT.client
      };
      return wU({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: iT.B,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: mT,
        error: TT
      })
    }

    function qm(TT, UT) {
      const mT = {
        wasmBuild: UT.wasm,
        clientVersion: UT.client
      };
      return wU({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: DT,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: mT,
        error: TT
      })
    }

    function im(TT, UT, mT, WT) {
      const zT = {
        wasmBuild: WT.wasm,
        clientVersion: WT.client
      };
      return wU({
        kind: "texturePackKeptOut",
        code: (0, kT.d)("wasm", TT, UT),
        site: oT,
        fatal: !1,
        message: UT.detail,
        details: zT,
        error: mT
      })
    }

    function bm(TT, UT) {
      const {
        frames: mT,
        acks: WT,
        mask: zT,
        outcome: MT
      } = TT, gT = {
        frames: String(mT),
        acks: String(WT),
        mask: String(zT),
        outcome: null !== MT && void 0 !== MT ? MT : "resynced",
        wasmBuild: UT.wasm,
        clientVersion: UT.client
      };
      return wU({
        kind: "recovered",
        code: "rejoined" === MT ? "CORE-eventOverflowRejoin" : "failed" === MT ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: ET,
        fatal: !1,
        message: `the event buffer refused records in ${mT} frames`,
        details: gT
      })
    }

    function Om(TT, UT, mT) {
      return wU({
        kind: "recovered",
        code: "CORE-workerLost",
        site: TT,
        fatal: !1,
        message: `a ${TT} worker was lost`,
        details: {
          reason: UT,
          wasmBuild: mT.wasm,
          clientVersion: mT.client
        }
      })
    }

    function em(TT, UT, mT) {
      const WT = {
        wasmBuild: mT.wasm,
        clientVersion: mT.client
      };
      return wU({
        kind: "recovered",
        code: TT,
        site: iT.n,
        fatal: !1,
        message: UT,
        details: WT
      })
    }

    function Ym(TT, UT) {
      const mT = {
        lastReason: TT,
        wasmBuild: UT.wasm,
        clientVersion: UT.client
      };
      return wU({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: iT.B,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: mT
      })
    }

    function Jm(TT, UT, mT) {
      return wU({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: iT.m,
        fatal: !1,
        message: (0, YT.o)(TT) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: TT,
          ...UT,
          wasmBuild: mT.wasm,
          clientVersion: mT.client
        }
      })
    }

    function xm(TT, UT, mT, WT) {
      var zT, MT;
      const gT = (0, LT.q)(),
        nT = {
          game: TT,
          cause: UT,
          census: null === mT ? "none" : JSON.stringify(mT),
          gpu: null !== (zT = null === (MT = (0, cT.s)()) || void 0 === MT ? void 0 : MT.renderer) && void 0 !== zT ? zT : "",
          renderWarned: String(gT),
          browser: (0, LT.m)(),
          wasmBuild: WT.wasm,
          clientVersion: WT.client
        },
        HT = `first view drew no whole terrain in ${wT.h/1e3} s, ${UT}${gT?", render warned":""}`;
      return wU({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: AT,
        fatal: !1,
        message: HT,
        details: nT
      })
    }

    function dm(TT, UT, mT, WT) {
      var zT, MT, gT;
      const HT = null !== (zT = (0, nT.m)(null !== (MT = null === (gT = (0, cT.l)()) || void 0 === gT ? void 0 : gT.renderer) && void 0 !== MT ? MT : null, (0, cT.i)())) && void 0 !== zT ? zT : "unknown",
        kT = null === UT ? "untimed" : `${Math.round(UT)} ms`,
        jT = `frames stalled, ${mT}, gpu ${(0,LT.z)(HT)}, blocking ${kT}, drawn ${Math.round(TT)} ms apart`,
        lT = {
          gpuModel: HT,
          wasmBuild: WT.wasm,
          clientVersion: WT.client
        };
      return wU({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: RT,
        fatal: !1,
        message: jT,
        details: lT
      })
    }

    function wm(TT, UT, mT) {
      return wU({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: TT,
        fatal: !1,
        message: `a ${TT} worker did not start`,
        details: {
          waitedMs: String(Math.round(UT)),
          wasmBuild: mT.wasm,
          clientVersion: mT.client
        }
      })
    }

    function tm(TT, UT, mT) {
      return wU({
        kind: "recovered",
        code: "CORE-replayFault",
        site: TT,
        fatal: !1,
        message: `the replay's ${TT} failed`,
        details: {
          wasmBuild: mT.wasm,
          clientVersion: mT.client
        },
        error: UT
      })
    }
    const am = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function ym(TT) {
      if (0 === TT) return "none";
      const UT = [60, 600, 3600].find((UT => TT < UT));
      return void 0 === UT ? "ge3600" : `lt${UT}`
    }

    function Xm(TT, UT) {
      return null === TT ? "unbound" : (0, BT.i)(UT - TT)
    }

    function Im(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (TT & lT.$.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (TT & lT.$.LINKS_RUNNING) ? "links running" : "", `frames ${(0,LT.z)(ym(TT&lT.$.FRAMES))}`, `up ${(0,LT.z)(Xm(UT,mT))}`].filter(Boolean).join(", ")
    }

    function Qm(TT, UT, mT) {
      const WT = "lost" === UT && void 0 !== mT ? ` (${mT})` : "";
      return `the ${TT} ${am[UT]}${WT}`
    }
    const sm = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function Fm(TT, UT, mT, WT) {
      var zT;
      let {
        restoreLost: MT = !1,
        adapterRemembered: gT = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, nT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const HT = null === mT || void 0 === mT ? void 0 : mT.message,
        kT = "pipeline_failed" === UT ? UT : mT instanceof qT.f ? "timeout" : (0, BT.p)("frames_refused" === UT, "string" === typeof HT ? HT : ""),
        jT = null === WT.boundAtMs ? "unbound" : `up${(0,BT.f)(nT-WT.boundAtMs)}`,
        lT = null === WT.adapter ? "no adapter" : (0, BT.m)(WT.adapter),
        LT = `${!0===WT.indirectHangs?" ih":""}${!0===WT.restoresSkipped?" nr":""}${MT?" rl":""}${gT?" ar":""}`,
        pT = `${kT} ${(0,qT.h)()?"hidden":"visible"} ${jT}${LT} ${lT}`;
      if ("webgpu" !== TT || "lost" !== UT && "frames_refused" !== UT) return {
        detail: pT,
        count: void 0
      };
      return {
        detail: pT,
        count: {
          errorKind: "render_lost",
          error: new Error(pT),
          code: (0, BT.t)(kT, null !== (zT = WT.boundAtMs) && void 0 !== zT ? zT : nT, nT).code,
          fields: {
            renderBackend: sT.e.webgpu
          }
        }
      }
    }

    function Pm(TT, UT, mT) {
      const {
        count: WT
      } = Fm("webgpu", TT, UT, mT);
      void 0 !== WT && aU(WT)
    }
    const Vm = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function um(TT) {
      var UT;
      return null !== (UT = TT instanceof Error ? TT.reason : void 0) && void 0 !== UT ? UT : ""
    }

    function Cm(TT, UT, WT) {
      var zT, MT, gT, HT, kT;
      let {
        from: jT,
        cause: lT = "lost",
        restoreLost: pT = !1,
        adapterRemembered: cT = !1,
        error: vT,
        context: fT = sm,
        session: qT = Vm
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, iT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: bT,
        count: OT
      } = Fm(TT, lT, vT, fT, {
        restoreLost: pT,
        adapterRemembered: cT
      }, iT), eT = {
        reloadFrom: null !== jT && void 0 !== jT ? jT : "",
        losses: String(UT),
        cause: lT,
        detail: bT,
        vendor: null !== (zT = null === (MT = fT.adapter) || void 0 === MT ? void 0 : MT.vendor) && void 0 !== zT ? zT : "",
        architecture: null !== (gT = null === (HT = fT.adapter) || void 0 === HT ? void 0 : HT.architecture) && void 0 !== gT ? gT : "",
        indirectHangs: String(fT.indirectHangs),
        restoresSkipped: String(fT.restoresSkipped),
        restoreLost: String(pT),
        adapterRemembered: String(cT),
        lossReason: um(vT),
        samples: String(qT.samples),
        sunShadows: String(qT.sunShadows),
        renderDistance: String(qT.renderDistance),
        gpuFamily: null !== (kT = (0, nT.d)()) && void 0 !== kT ? kT : "",
        browser: (0, LT.m)(),
        siteUsed: ZT.siteUsed,
        wasmBuild: WT.wasm,
        clientVersion: WT.client
      }, YT = "webgpu" !== TT && void 0 !== jT ? function(TT, UT, mT, WT) {
        return `: ${TT}, ${UT?"restore lost":"not restored"}, up ${(0,LT.z)(Xm(mT,WT))}`
      }(jT, pT, fT.boundAtMs, iT) : "", JT = `${Qm(TT,lT)}${YT}`, xT = wU({
        kind: "recovered",
        code: "CORE-renderLost",
        site: GT,
        fatal: !1,
        message: JT,
        details: eT,
        error: vT,
        countAs: OT
      });
      return XU("ga", (async () => {
        const {
          logError: UT
        } = await Promise.resolve().then((() => mT(3047))), WT = `${BT.b["webgpu"===TT?"WebGPU":"WebGL2"]}\n Error: ${bT}`;
        UT("warning", WT), UT("error", WT)
      })), xT
    }

    function rm(TT, UT) {
      var mT, WT;
      const zT = null === TT.name ? "TEXTURE-sources" : null === TT.url ? "TEXTURE-nourl" : TT.error instanceof tT.d ? `TEXTURE-${TT.error.status}` : "TEXTURE-network",
        MT = null === TT.name ? "terrain textures could not load" : `terrain texture ${TT.name} could not load`,
        gT = {
          texture: null !== (mT = TT.name) && void 0 !== mT ? mT : "",
          url: null !== (WT = TT.url) && void 0 !== WT ? WT : "",
          wasmBuild: UT.wasm,
          clientVersion: UT.client
        };
      return wU({
        kind: "terrainTexture",
        code: zT,
        site: iT.y,
        fatal: !1,
        message: MT,
        details: gT,
        error: TT.error
      })
    }
    const Km = {
      previewAnimations: {
        site: NT,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: hT,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Sm(TT, UT, mT, WT) {
      const {
        site: zT,
        prefix: MT,
        name: gT
      } = Km[TT], {
        stage: nT,
        error: HT
      } = mT;
      return wU({
        kind: TT,
        code: "decode" === nT ? null === HT ? `${MT}-decode` : `${MT}-trap` : HT instanceof xT.f ? `${MT}-${HT.status}` : `${MT}-network`,
        site: zT,
        fatal: !1,
        message: "decode" === nT ? `${gT} did not decode` : `${gT} could not load`,
        details: {
          url: UT,
          wasmBuild: WT.wasm,
          clientVersion: WT.client
        },
        error: HT
      })
    }
    const Gm = "staleBuild";

    function Nm(TT, UT, mT) {
      const WT = {
          failedSite: TT.site,
          url: TT.url,
          from: TT.from,
          sameBuild: String(TT.from === UT),
          reloadMs: String(Math.max(0, Date.now() - TT.at)),
          wasmBuild: mT.wasm,
          clientVersion: mT.client
        },
        zT = `reloaded into a newer build after ${TT.site} failed to load: ${TT.error}`;
      return wU({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: Gm,
        fatal: !1,
        message: zT,
        details: WT
      })
    }
  },
  40944: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT,
      h: () => zT,
      i: () => gT
    });
    var WT = mT(4904);
    const zT = 3e4;
    class MT {
      constructor(TT) {
        this.Gp = TT, this.waitedMs = 0, this.lastMs = null
      }
      frame(TT, UT) {
        if (UT) return !0;
        const mT = null === this.lastMs ? 0 : TT - this.lastMs;
        return this.lastMs = TT, mT <= 900 && (this.waitedMs += mT), !(this.waitedMs < zT) && (this.Gp(), !0)
      }
    }

    function gT(TT, UT) {
      return 0 === (TT & WT.V.ChunkRequested) ? "no_chunk_request" : 0 === (TT & WT.V.ChunkStored) ? "chunk_not_stored" : 0 === (TT & WT.V.MeshLanded) ? "not_meshed" : null === UT ? "no_frame_drawn" : 0 === UT.terrainParts ? "no_terrain_parts" : UT.terrainCompiling > 0 ? "terrain_compiling" : UT.terrainOpaque + UT.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40724: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      f: () => vT,
      i: () => ZT,
      m: () => cT,
      o: () => LT,
      s: () => pT,
      v: () => jT,
      w: () => lT,
      x: () => BT
    });
    class WT extends Error {
      constructor(TT) {
        super(`the join's code did not load: ${TT instanceof Error?TT.message:String(TT)}`, {
          cause: TT
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === TT || void 0 === TT ? void 0 : TT.request
      }
    }
    let zT = null,
      MT = null,
      gT = null;
    const nT = [];
    let HT = null;

    function kT(TT, UT) {
      try {
        TT(UT)
      } catch (mT) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", mT)
      }
    }

    function jT() {
      return HT
    }

    function lT(TT) {
      nT.push(TT), null !== HT && kT(TT, HT)
    }

    function LT(TT) {
      return zT ??= Promise.all([mT.e(73), mT.e(98), mT.e(226), mT.e(78), mT.e(227), mT.e(201), mT.e(97), mT.e(246), mT.e(273), mT.e(199), mT.e(214), mT.e(191), mT.e(198), mT.e(193), mT.e(144), mT.e(88), mT.e(122), mT.e(252), mT.e(57)]).then((() => mT(42743))).then((UT => {
        UT.loadAudio(TT), HT = UT;
        for (const TT of nT) kT(TT, UT);
        return UT
      })).catch((TT => {
        throw zT = null, TT
      })), zT
    }
    async function pT(TT, UT) {
      try {
        const mT = await LT(TT);
        await mT.loadClientGame(UT)
      } catch (mT) {
        throw new WT(mT)
      }
    }

    function BT(TT, UT) {
      MT = {
        running: TT,
        shell: UT
      }
    }

    function ZT() {
      return gT
    }
    async function cT(TT) {
      const UT = MT;
      if ((null === UT || void 0 === UT ? void 0 : UT.running) !== TT) throw new Error("the core's session has ended");
      const mT = await LT(UT.shell.audio).catch((TT => {
        throw new WT(TT)
      }));
      if (null !== gT) return gT;
      if (MT !== UT || TT.isStopped) throw new Error("the core stopped while the game code loaded");
      if (gT = mT.startGameHost(TT, UT.shell), null === gT) throw new Error("the core's shared tables didn't read, so the game can't start");
      return gT
    }

    function vT() {
      null !== gT && (null !== HT ? HT.endGameHost(gT) : gT.closeGame()), gT = null, MT = null
    }
  },
  40869: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    const WT = {
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
  40824: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => kT,
      f: () => MT,
      h: () => gT,
      j: () => zT,
      n: () => pT,
      o: () => jT,
      p: () => HT,
      r: () => LT,
      s: () => lT,
      v: () => nT
    });
    var WT = mT(1928);
    const zT = new Uint8Array([12]),
      MT = 2e3,
      gT = 257;

    function nT(TT) {
      const UT = new Uint8Array(4);
      return new DataView(UT.buffer).setUint32(0, TT, !0), UT
    }
    class HT extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class kT extends Error {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(TT), this.stage = UT, this.code = mT, this.serverText = WT, this.socketOpened = zT, this.name = "JoinError"
      }
    }
    class jT extends Error {
      constructor(TT) {
        super(TT), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class lT extends Error {
      constructor(TT) {
        super((0, WT.f)(TT), {
          cause: TT
        }), this.name = "TrafficCheckError"
      }
    }
    class LT extends Error {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(TT, {
          cause: mT
        }), this.networkLost = UT, this.httpStatus = WT, this.name = "SeatRequestError"
      }
    }
    class pT extends Error {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(TT), this.code = UT, this.serverText = mT, this.name = "MatchmakeError"
      }
    }
  },
  40827: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => pT,
      h: () => LT,
      i: () => BT
    });
    var WT = mT(2731),
      zT = mT(3119),
      MT = mT(39207),
      gT = mT(36565),
      nT = mT(39216),
      HT = mT(40824),
      kT = mT(40832);
    const jT = "seat reservation expired.",
      lT = "early_leave";

    function LT(TT) {
      if (TT instanceof gT.d) return "expected";
      if (TT instanceof HT.r) return TT.networkLost ? "expected" : "unrecognised";
      if (TT instanceof HT.d) {
        if ("closed" === TT.stage && (0 === TT.code || (0, zT.f)(TT.code))) return "expected";
        if ("roomError" === TT.stage && (TT.serverText === jT || TT.serverText === lT)) return "expected"
      }
      return TT instanceof HT.d || TT instanceof HT.n ? null === (0, nT.o)(TT.code).name ? "unrecognised" : "known" : (0, WT.c)(TT) ? "expected" : TT instanceof HT.s || TT instanceof kT.b ? "known" : "unrecognised"
    }

    function pT(TT) {
      return TT instanceof gT.d ? "timedOut" : "expected" !== LT(TT) || (0, WT.c)(TT) || TT instanceof HT.d && 1001 === TT.code ? void 0 : "failed"
    }

    function BT(TT) {
      return TT instanceof HT.d && "attach" !== TT.stage ? (0, MT.b)(TT, "closed" !== TT.stage || TT.socketOpened ? "socket" : "socket_unopened") : TT instanceof HT.r ? {
        at: "seat_lost",
        code: TT.httpStatus
      } : TT instanceof HT.n || TT instanceof gT.d ? (0, MT.b)(TT, TT instanceof gT.d ? TT.leg : "seat") : void 0
    }
  },
  40926: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => HT,
      f: () => kT,
      g: () => pT,
      h: () => lT
    });
    var WT = mT(3001),
      zT = mT(4895),
      MT = mT(40929),
      gT = mT(40935),
      nT = mT(36358);
    const HT = 395,
      kT = 2147483648,
      jT = new Uint8Array(0);
    class lT extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class LT extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class pT {
      constructor(TT, UT, mT) {
        var WT, zT, gT, nT;
        let HT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = TT, this.build = UT, this.onFailure = mT, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.Jp = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (WT = HT.fetchFile) && void 0 !== WT ? WT : TT => (0, MT.j)(TT), this.onWritten = null !== (zT = HT.onWritten) && void 0 !== zT ? zT : null, this.onTaken = null !== (gT = HT.onTaken) && void 0 !== gT ? gT : null, this.onPackFileFailed = null !== (nT = HT.onPackFileFailed) && void 0 !== nT ? nT : null, this.startupLeft = new Set(TT.startup);
        for (const MT of TT.startup) this.request(MT)
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
      drawnUrl(TT) {
        return this.drawn.get(TT)
      }
      request(TT) {
        const UT = this.pending.get(TT);
        if (!0 === (null === UT || void 0 === UT ? void 0 : UT.ask)) return;
        const mT = this.np(TT, !0);
        mT.recheck = void 0 !== UT;
        const WT = this.drawn.get(TT);
        if (void 0 !== WT) return mT.fn = !0, mT.recheck = !0, void this.fetch(TT, mT, WT);
        this.fetchWanted(TT, mT)
      }
      async refresh() {
        const TT = ++this.refreshes,
          UT = new Set;
        for (const gT of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const TT of gT) 0 === (TT & MT.f) && UT.add(TT);
        const mT = [...UT];
        let WT;
        try {
          WT = await Promise.all(mT.map((TT => this.wanted(TT))))
        } catch {
          return null
        }
        if (TT !== this.refreshes) return null;
        const zT = {
          resent: 0,
          refetched: 0,
          delivered: mT.filter((TT => this.drawn.has(TT))).length
        };
        return mT.forEach(((TT, UT) => {
          const {
            url: mT,
            inPlaceOf: MT
          } = WT[UT], gT = this.pending.get(TT);
          if (void 0 !== gT) {
            if (gT.fn || void 0 === gT.url) return void(gT.recheck = !0);
            if (gT.url === mT) return;
            zT.refetched++;
            const UT = this.np(TT, gT.ask);
            return UT.recheck = gT.recheck, void this.fetch(TT, UT, mT, MT)
          }
          const nT = this.written.get(TT);
          void 0 === nT ? this.drawn.get(TT) !== (null !== mT && void 0 !== mT ? mT : void 0) && (zT.resent++, this.fetch(TT, this.np(TT, !1), mT, MT)) : nT.url !== (null !== mT && void 0 !== mT ? mT : "") && (nT.attempt.recheck = !0)
        })), zT
      }
      taken(TT, UT) {
        const mT = new Set,
          WT = new Set;
        for (const zT of Array.from(UT)) 0 === (zT & kT) ? mT.add(zT) : WT.add((zT & ~kT) >>> 0);
        for (const [zT, MT] of this.written) MT.seq > TT || (this.written.delete(zT), mT.has(MT.seq) ? this.refusedFile(zT, MT) : this.takenFile(zT, MT, !MT.empty && !WT.has(MT.seq)))
      }
      takenFile(TT, UT, mT) {
        const {
          attempt: WT
        } = UT;
        if (mT) {
          var zT;
          this.drawn.set(TT, UT.url), this.undrawn.delete(TT), void 0 !== WT.inPlaceOf ? this.refusedPack.set(TT, WT.inPlaceOf) : WT.fn || this.refusedPack.delete(TT), null === (zT = this.onTaken) || void 0 === zT || zT.call(this, TT, !0);
          const mT = this.pending.get(TT);
          if (!0 === (null === mT || void 0 === mT ? void 0 : mT.fn) && mT.url !== UT.url) {
            const mT = this.np(TT, !0);
            mT.fn = !0, mT.recheck = !0, this.fetch(TT, mT, UT.url)
          }
        } else {
          var MT;
          this.drawn.has(TT) || this.undrawn.add(TT), null === (MT = this.onTaken) || void 0 === MT || MT.call(this, TT, !1)
        }
        WT.recheck && this.resendIfChanged(TT)
      }
      refusedFile(TT, UT) {
        var mT, WT;
        if (null === (mT = this.onTaken) || void 0 === mT || mT.call(this, TT, !1), this.refusedPack.set(TT, UT.url), this.pending.has(TT)) return void(null === (WT = this.onPackFileFailed) || void 0 === WT || WT.call(this, TT, BT(UT.url)));
        const zT = this.np(TT, UT.attempt.ask);
        zT.recheck = UT.attempt.recheck, this.afterRefusal(TT, zT, UT.url)
      }
      async afterRefusal(TT, UT, mT) {
        var WT;
        let zT;
        try {
          zT = await this.wanted(TT)
        } catch (MT) {
          return void(this.pending.get(TT) === UT && this.giveUp(TT, UT, mT, MT))
        }
        this.pending.get(TT) === UT && (zT.inPlaceOf !== mT ? UT.ask || (null !== (WT = zT.url) && void 0 !== WT ? WT : void 0) !== this.drawn.get(TT) ? this.fetch(TT, UT, zT.url, zT.inPlaceOf) : this.pending.delete(TT) : this.fallBack(TT, UT, mT, BT(mT)))
      }
      np(TT, UT) {
        const mT = {
          url: void 0,
          ask: UT,
          fn: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(TT, mT);
        for (let WT = this.ready.length - 1; WT >= 0; WT--) this.ready[WT].file === TT && this.ready.splice(WT, 1);
        return mT
      }
      async wanted(TT) {
        const UT = await this.files.url(TT);
        return null !== UT && this.refusedPack.get(TT) === UT ? {
          url: await this.files.shippedUrl(TT),
          inPlaceOf: UT
        } : {
          url: UT,
          inPlaceOf: void 0
        }
      }
      fetchWanted(TT, UT) {
        const mT = this.files.url(TT);
        mT instanceof Promise ? mT.then((mT => {
          this.fetchFound(TT, UT, mT)
        }), (mT => {
          this.pending.get(TT) === UT && this.giveUp(TT, UT, "", mT)
        })) : this.fetchFound(TT, UT, mT)
      }
      fetchFound(TT, UT, mT) {
        null !== mT && this.refusedPack.get(TT) === mT ? Promise.resolve(this.files.shippedUrl(TT)).then((WT => {
          this.fetch(TT, UT, WT, mT)
        }), (WT => {
          this.pending.get(TT) === UT && this.giveUp(TT, UT, mT, WT)
        })) : this.fetch(TT, UT, mT)
      }
      fetch(TT, UT, mT, WT) {
        this.pending.get(TT) === UT && (UT.url = mT, UT.inPlaceOf = WT, null !== mT ? this.load(TT, UT, mT) : this.buildFile(TT, UT, "", jT))
      }
      load(TT, UT, mT) {
        const WT = this.Jp.get(TT);
        (null === WT || void 0 === WT ? void 0 : WT.url) !== mT ? this.fetchFile(mT).then((WT => {
          var zT, MT;
          this.pending.get(TT) === UT && (this.keptTotal += WT.byteLength - (null !== (zT = null === (MT = this.Jp.get(TT)) || void 0 === MT ? void 0 : MT.glb.byteLength) && void 0 !== zT ? zT : 0), this.Jp.set(TT, {
            url: mT,
            glb: WT
          }), this.buildFile(TT, UT, mT, WT))
        }), (WT => {
          this.pending.get(TT) === UT && this.fallBack(TT, UT, mT, WT)
        })) : this.buildFile(TT, UT, mT, WT.glb)
      }
      buildFile(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const gT = WT.byteLength > 0 && (0, MT.m)(mT) ? (TT | MT.e) >>> 0 : TT;
        this.queueRecord(TT, UT, mT, WT, this.build(gT, WT), zT)
      }
      queueRecord(TT, UT, mT, WT, MT, nT) {
        MT.then((MT => {
          if (this.pending.get(TT) !== UT) return;
          if (zT.v + (0, zT.Ge)(MT.byteLength) > zT.Kc) return void this.ringRefused(TT, UT, mT, new lT(`${ZT(mT)}'s record is ${MT.byteLength-gT.c} bytes, past the cmd ring's ${zT.Kc}`), nT);
          const HT = {
            file: TT,
            url: mT,
            payload: MT,
            glb: WT,
            attempt: UT
          };
          nT ? this.ready.unshift(HT) : this.ready.push(HT)
        }))
      }
      async fallBack(TT, UT, mT, WT) {
        var zT;
        let MT = null,
          gT = WT;
        try {
          MT = await this.files.shippedUrl(TT)
        } catch (nT) {
          gT = nT
        }
        this.pending.get(TT) === UT && (null !== MT && MT !== mT ? (null === (zT = this.onPackFileFailed) || void 0 === zT || zT.call(this, TT, WT), UT.ask || this.drawn.get(TT) !== MT ? (UT.url = MT, UT.inPlaceOf = mT, this.load(TT, UT, MT)) : this.pending.delete(TT)) : this.giveUp(TT, UT, mT, gT))
      }
      ringRefused(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, MT.m)(mT) ? this.fallBack(TT, UT, mT, WT): this.giveUp(TT, UT, mT, WT, zT)
      }
      giveUp(TT, UT, mT, zT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: TT,
          url: ZT(mT),
          error: zT,
          startup: this.startupLeft.has(TT)
        }), UT.ask || !this.drawn.has(TT) ? (0, WT.V)(zT) ? this.queueRecord(TT, UT, mT, jT, Promise.resolve((0, gT.l)(TT, (0, nT.k)(zT))), MT) : this.buildFile(TT, UT, mT, jT, MT) : this.pending.delete(TT)
      }
      async resendIfChanged(TT) {
        var UT;
        if (0 !== (TT & MT.f)) return;
        let mT;
        try {
          mT = await this.wanted(TT)
        } catch {
          return
        }(null !== (UT = mT.url) && void 0 !== UT ? UT : void 0) === this.drawn.get(TT) || this.pending.has(TT) || this.written.has(TT) || this.fetch(TT, this.np(TT, !1), mT.url, mT.inPlaceOf)
      }
      drain(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === TT) return;
        let mT = 0,
          WT = 0;
        for (; WT < this.ready.length && mT < 262144;) {
          const nT = this.ready[WT];
          if (this.written.has(nT.file)) {
            WT++;
            continue
          }
          const jT = this.nextSeq;
          new DataView(nT.payload.buffer, nT.payload.byteOffset, nT.payload.byteLength).setUint32(gT.f, jT, !0);
          const LT = nT.attempt.fn && nT.glb.byteLength > 0 && this.drawn.get(nT.file) === nT.url;
          if (TT(HT, LT ? 1 : 0, nT.payload)) {
            if (this.nextSeq = jT >= kT - 1 ? 1 : jT + 1, this.ready.splice(WT, 1), mT += nT.payload.byteLength, this.pending.delete(nT.file), this.startupLeft.delete(nT.file), this.written.set(nT.file, {
                seq: jT,
                url: nT.url,
                empty: 0 === nT.glb.byteLength,
                attempt: nT.attempt
              }), nT.glb.byteLength > 0) try {
              var zT;
              null === (zT = this.onWritten) || void 0 === zT || zT.call(this, nT.file, nT.glb)
            } catch (MT) {
              console.warn("ModelFeed: reading the file's images failed", MT)
            }
          } else {
            if (null === UT || 0 === nT.glb.byteLength || UT(nT.payload.byteLength)) return;
            this.ready.splice(WT, 1);
            const TT = new lT(`${ZT(nT.url)}'s record is ${nT.payload.byteLength-gT.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(nT.file, nT.attempt, nT.url, TT, !0)
          }
        }
      }
    }

    function BT(TT) {
      return new LT(`presentation refused ${ZT(TT)}`)
    }

    function ZT(TT) {
      return TT.startsWith("data:") ? `${TT.slice(0,Math.min(Math.max(TT.indexOf(","),5),64))},...` : TT
    }
  },
  40929: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT,
      f: () => MT,
      j: () => jT,
      m: () => nT,
      q: () => kT,
      s: () => HT
    });
    var WT = mT(3001),
      zT = mT(3327);
    const MT = 2147483648,
      gT = 1073741824;

    function nT(TT) {
      return TT.startsWith("data:")
    }

    function HT(TT) {
      let {
        onTableFailed: UT,
        packUrl: mT
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const WT = kT();
      WT.catch((TT => {
        null === UT || void 0 === UT || UT(TT)
      }));
      const zT = async UT => (await WT).fileUrl((UT & ~MT) >>> 0, TT);
      return {
        startup: [],
        url: async TT => {
          if (mT && 0 === (TT & MT)) {
            const UT = await WT,
              zT = UT.filePackName(TT),
              MT = null === zT || "lifeform" === UT.fileSource(TT) ? null : mT(zT);
            if (null !== MT) return MT
          }
          return zT(TT)
        },
        shippedUrl: zT
      }
    }

    function kT() {
      return mT.e(42).then((() => mT(42823)))
    }
    async function jT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return TT.startsWith("data:") ? (0, zT.c)(TT.slice(TT.indexOf(",") + 1), UT) : (0, WT.M)(TT, {
        spare: UT
      })
    }
  },
  40935: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => kT,
      f: () => jT,
      g: () => pT,
      j: () => cT,
      l: () => BT,
      n: () => LT,
      q: () => ZT
    });
    const WT = 826427981,
      zT = 1,
      MT = 2,
      gT = 44,
      nT = 46,
      HT = 58,
      kT = 8,
      jT = 4;

    function lT(TT, UT, mT) {
      const zT = (new TextEncoder).encode(mT),
        MT = kT + 4 * (UT.length + 2),
        gT = new Uint8Array(MT + (zT.byteLength + 3 & -4)),
        nT = new DataView(gT.buffer);
      return nT.setUint32(0, TT, !0), nT.setUint32(kT, WT, !0), UT.forEach(((TT, UT) => {
        nT.setUint32(kT + 4 * (UT + 1), TT, !0)
      })), nT.setUint32(MT - 4, zT.byteLength, !0), gT.set(zT, MT), gT
    }

    function LT(TT, UT) {
      return lT(TT, [MT], UT)
    }

    function pT(TT, UT) {
      return lT(TT, [zT, nT], UT)
    }

    function BT(TT, UT) {
      return lT(TT, [zT, HT], UT)
    }

    function ZT(TT, UT) {
      return lT(TT, [zT, gT], UT)
    }

    function cT(TT) {
      const UT = kT;
      if (TT.byteLength < UT + 12) return !1;
      const mT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      return mT.getUint32(UT, !0) === WT && mT.getUint32(UT + 4, !0) === zT && mT.getUint32(UT + 8, !0) === gT
    }
  },
  40871: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT,
      e: () => jT,
      g: () => gT,
      i: () => HT
    });
    var WT = mT(36358);
    class zT extends Error {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${TT}: the module trapped${mT?" in an earlier call":""}: ${String(UT)}`, {
          cause: UT
        }), this.site = TT, this.trap = UT, this.earlier = mT, this.name = "ModuleTrapError", UT instanceof Error && void 0 !== UT.stack && (this.stack = `${this.name}: ${this.message}\n${UT.stack}`)
      }
    }
    const MT = new WeakMap;

    function gT(TT) {
      return MT.has(TT)
    }

    function nT(TT, UT) {
      MT.has(TT) || MT.set(TT, UT)
    }

    function HT(TT, UT) {
      return !!(0, WT.i)(UT) && (nT(TT, UT), !0)
    }
    const kT = [
      ["error", TT => TT.error],
      ["unhandledrejection", TT => TT.reason]
    ];

    function jT(TT, UT, mT) {
      let gT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return MT.has(TT) ? Promise.reject(new zT(UT, MT.get(TT), !0)) : new Promise(((MT, HT) => {
        const jT = mT => {
            nT(TT, mT), pT(), HT(new zT(UT, mT))
          },
          lT = TT => {
            TT instanceof WebAssembly.RuntimeError ? jT(TT) : (pT(), HT(TT))
          },
          LT = kT.map((TT => {
            let [UT, mT] = TT;
            return [UT, TT => {
              const UT = mT(TT);
              (0, WT.i)(UT) && jT(UT)
            }]
          })),
          pT = () => {
            for (const [TT, UT] of LT) null === gT || void 0 === gT || gT.removeEventListener(TT, UT)
          };
        for (const [TT, UT] of LT) null === gT || void 0 === gT || gT.addEventListener(TT, UT);
        let BT;
        try {
          BT = mT()
        } catch (ZT) {
          return void lT(ZT)
        }
        BT.then((TT => {
          pT(), MT(TT)
        }), lT)
      }))
    }
  },
  40855: (TT, UT, mT) => {
    mT.d(UT, {
      $: () => KT,
      A: () => CT,
      C: () => uT,
      F: () => XT,
      J: () => YT,
      L: () => aT,
      O: () => rT,
      R: () => yT,
      U: () => QT,
      X: () => tT,
      d: () => eT,
      g: () => iT,
      i: () => sT,
      l: () => IT,
      o: () => qT,
      r: () => OT,
      s: () => vT,
      w: () => xT,
      x: () => wT
    });
    var WT = mT(218),
      zT = mT(25),
      MT = mT(3672),
      gT = mT(344),
      nT = mT(44),
      HT = mT(40860),
      kT = mT(36546),
      jT = mT(40883),
      lT = (mT(40912), mT(40975)),
      LT = mT(40902);
    const pT = "wasmJoinBuild";
    let BT = null,
      ZT = null,
      cT = null;

    function vT(TT) {
      cT = TT
    }
    let fT = !1;

    function qT() {
      fT = !0
    }

    function iT() {
      return fT
    }
    let bT = !1;

    function OT() {
      bT = !0
    }

    function eT() {
      return bT
    }

    function YT() {
      return cT
    }
    let JT = null;

    function xT(TT) {
      JT = TT, (0, gT.d)(TT)
    }
    const dT = "wasmClientRenderLost";

    function wT() {
      nT.m.setItem(dT, !0)
    }

    function tT() {
      return !0 === nT.m.getItem(dT)
    }

    function aT() {
      return JT
    }

    function yT() {
      if (null === BT) {
        nT.l.removeItem("wasmLastPick"), nT.l.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, gT.p)(), BT = (0, HT.z)(jT.d).then((TT => (null === TT || (0, HT.n)(TT) || (ZT = lT.e[TT.backend], zT.b.followGameGpu("webgpu" === TT.backend ? TT.adapter : null), "webgpu" === TT.backend && (0, LT.e)()), TT)))
      }
      return BT
    }

    function XT() {
      return ZT
    }

    function IT(TT) {
      return TT ? TT.load() : Promise.resolve().then((function() {
        var TT = new Error("Cannot find module '@bloxd/wasm/client'");
        throw TT.code = "MODULE_NOT_FOUND", TT
      })).then((TT => TT.bloxdWasmClient))
    }

    function QT(TT) {
      nT.l.setItem(pT, TT)
    }
    async function sT() {
      if (null === jT.d) return IT(null);
      const TT = nT.l.getItem(pT);
      let UT;
      return null === TT ? UT = void 0 !== (0, WT.b)(jT.d, "webgpu") && (0, HT.v)() ? "webgpu" : "webgl" : "none" === TT ? UT = null : "string" === typeof TT && void 0 !== (0, WT.b)(jT.d, TT) ? UT = TT : (console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(TT)}, is none of this client's: guessing WebGL2's`), UT = "webgl"), null === UT ? null : jT.d[UT]()
    }
    let FT = null,
      PT = null,
      VT = null;

    function uT() {
      return FT ??= yT().then((async TT => {
        const UT = null !== TT && !(0, HT.n)(TT),
          mT = {
            indirectHangs: UT && await (0, HT.J)(TT, window.location.search),
            storagePullBreaks: UT && (0, HT.T)(TT, window.location.search),
            splitPassBreaks: UT && (0, HT.R)(TT, window.location.search),
            earlySky: UT && (0, HT.F)(TT, window.location.search),
            instancedTerrain: UT ? (0, HT.K)(TT, window.location.search) : null,
            cellLight: UT && await (0, MT.k)("cellLight"),
            framesAhead: (0, HT.i)(window.location.search),
            webGpuRestores: !UT || (0, HT.X)(TT, (0, kT.d)()),
            bufferCopiesCrash: UT && (0, HT.C)(TT, window.location.search)
          };
        return PT = mT.indirectHangs, VT = !mT.webGpuRestores, mT
      })), FT
    }

    function CT() {
      return PT
    }

    function rT() {
      return VT
    }
    async function KT() {
      const TT = null === BT ? null : await BT;
      return null !== TT && (0, HT.n)(TT) && (BT = null, FT = null, PT = null, VT = null), yT()
    }
  },
  41117: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(36394),
      zT = mT(41009),
      MT = mT(36546);

    function gT(TT, UT) {
      return (0, WT.h)(TT, zT.g, {
        ...UT,
        memoryMaximumBytes: (0, MT.n)()
      })
    }
  },
  40879: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => kT,
      e: () => nT,
      g: () => jT,
      j: () => gT
    });
    var WT = mT(363),
      zT = mT(675);
    let MT;

    function gT(TT) {
      var UT;
      const mT = MT;
      return MT = void 0, null !== (UT = HT(TT)) && void 0 !== UT ? UT : mT
    }

    function nT(TT) {
      try {
        const UT = HT(TT);
        void 0 !== UT && (MT = UT, (0, zT.e)((0, WT.p)(UT.reason, UT.message)))
      } catch (UT) {
        console.warn("Couldn't keep the WebGPU loss's cause", UT)
      }
    }

    function HT(TT) {
      var UT;
      const mT = null === TT || void 0 === TT || null === (UT = TT.IMT) || void 0 === UT ? void 0 : UT.call(TT),
        WT = null === TT || void 0 === TT ? void 0 : TT.XMT();
      if (void 0 === WT) return;
      const zT = new Error(WT);
      return void 0 !== mT && (zT.reason = mT), zT
    }

    function kT(TT) {
      return TT instanceof Error ? TT : void 0
    }

    function jT(TT, UT) {
      return "lost" !== TT && "frames_refused" !== TT ? {} : (0, WT.p)("frames_refused" === TT ? TT : null === UT || void 0 === UT ? void 0 : UT.reason, null === UT || void 0 === UT ? void 0 : UT.message)
    }
  },
  40900: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => YT,
      g: () => qT,
      j: () => fT,
      m: () => eT,
      q: () => wT,
      t: () => dT,
      v: () => tT,
      z: () => bT
    });
    var WT = mT(4904),
      zT = mT(40902);
    const MT = 1,
      gT = 18,
      nT = 19,
      HT = 20,
      kT = 21,
      jT = {
        [MT]: "link",
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
        [gT]: "retry linked",
        [nT]: "fallback linked",
        [HT]: "fallback failed",
        [kT]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function lT(TT, UT, mT) {
      return TT === gT ? "program retry" : TT === MT ? "program link" : TT === kT ? "program link stall" : TT === nT || TT === HT ? `program ${UT} ${mT}` : "program"
    }
    const LT = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      pT = {
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
      BT = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      ZT = {
        11: "none read after view",
        12: "some read after view"
      },
      cT = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...ZT
      },
      vT = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function fT(TT, UT) {
      return TT === WT.l.RenderSerialLinks && void 0 !== ZT[UT]
    }

    function qT(TT, UT) {
      return TT === WT.l.RenderSerialLinks && void 0 !== vT[15 & UT]
    }
    const iT = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function bT(TT) {
      return String(TT).replace(/\d/g, (TT => String.fromCharCode(97 + Number(TT))))
    }

    function OT(TT, UT) {
      var mT;
      return null !== (mT = TT[UT]) && void 0 !== mT ? mT : bT(UT)
    }

    function eT() {
      return bT((0, zT.c)())
    }

    function YT(TT, UT) {
      switch (TT) {
        case WT.l.RenderSceneRowNotDrawn:
          return {
            words: ` ${OT(pT,UT)}`, instance: String(UT), group: String(TT)
          };
        case WT.l.RenderChunkMeshNotDrawn: {
          const mT = 0 === (128 & UT) ? "" : " shortage",
            WT = UT >>> 8;
          return {
            words: ` ${OT(BT,127&UT)}${mT}${0===WT?"":` kind ${bT(WT)}`}`,
            instance: String(UT),
            group: String(TT)
          }
        }
        case WT.l.RenderInternal: {
          const mT = OT(LT, 255 & UT),
            WT = UT >>> 8 & 255;
          if (0 === WT) return {
            words: ` ${mT}`,
            instance: String(UT),
            group: String(TT)
          };
          const zT = OT(jT, WT),
            MT = UT >>> 16;
          return {
            words: ` ${mT} ${zT} program ${bT(MT)}`,
            instance: `${mT} ${zT} ${MT}`,
            group: lT(WT, zT, mT),
            gpuDetails: {
              programFailure: zT,
              program: String(MT)
            }
          }
        }
        case WT.l.RenderSerialLinks: {
          if (qT(TT, UT)) {
            const TT = function(TT) {
              const UT = (UT, mT) => bT(TT >>> UT & (1 << mT) - 1),
                mT = TT >>> 30 & 1 ? " restored" : "";
              return `link census ${vT[15&TT]} linked ${UT(22,8)} failed ${UT(4,6)} retried ${UT(10,6)} fallback ${UT(16,6)}${mT}`
            }(UT);
            return {
              words: ` ${TT}`,
              instance: String(15 & UT),
              group: "link census",
              gpuDetails: {
                linkCensus: TT
              }
            }
          }
          const mT = OT(cT, UT);
          return {
            words: ` ${mT}`,
            instance: String(UT),
            group: String(TT),
            gpuDetails: {
              serialLinks: mT
            }
          }
        }
        case WT.l.RenderGlErrorAfterRestore: {
          const mT = OT(iT, 65535 & UT),
            WT = UT >>> 16,
            zT = 65535 !== WT;
          return {
            words: ` ${mT}${zT?` program ${bT(WT)}`:""}`,
            instance: String(UT),
            group: String(TT),
            gpuDetails: zT ? {
              glError: mT,
              program: String(WT)
            } : {
              glError: mT
            }
          }
        }
        default:
          return null
      }
    }
    const JT = 2,
      xT = new Map;

    function dT(TT) {
      let {
        group: UT,
        instance: mT
      } = TT, WT = xT.get(UT);
      return void 0 === WT && (WT = [], xT.set(UT, WT)), !WT.includes(mT) && (WT.length >= JT || (WT.push(mT), !1))
    }

    function wT() {
      return xT.size > 0
    }

    function tT() {
      xT.clear()
    }
  },
  40883: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT,
      d: () => MT
    });
    var WT = mT(40887);
    const zT = new WeakSet;
    const MT = {
        webgpu: async () => (function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === TT || zT.has(TT.prototype)) return;
          zT.add(TT.prototype);
          const UT = TT.prototype.requestDevice;
          TT.prototype.requestDevice = function(TT) {
            var mT;
            const zT = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.requiredLimits) && void 0 !== mT ? mT : {},
              MT = Object.keys(zT).filter((TT => !(TT in this.limits)));
            if (0 === MT.length) return UT.call(this, TT);
            const gT = Object.fromEntries(Object.entries(zT).filter((TT => {
              let [UT] = TT;
              return UT in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${MT.join(", ")}`), (0, WT.reportDroppedRequiredLimits)(MT), UT.call(this, {
              ...TT,
              requiredLimits: gT
            })
          }
        }(), (await mT.e(8).then((() => mT(42777)))).bloxdWasmWebgpu),
        webgl: async () => (await mT.e(6).then((() => mT(42790)))).bloxdWasmWebgl,
        webgl1: async () => (await mT.e(7).then((() => mT(42803)))).bloxdWasmWebgl1
      },
      gT = async () => (await mT.e(5).then((() => mT(42816)))).compileAnimationPackInWasm
  },
  40832: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => vT,
      f: () => cT,
      h: () => bT
    });
    var WT = mT(6713),
      zT = mT(31),
      MT = mT(4388),
      gT = mT(4904),
      nT = mT(6706),
      HT = mT(40839);

    function kT(TT, UT) {
      const mT = (0, nT.d)(UT.variants);
      return TT.setShaderPack(mT.variantFlags, mT.hooks, mT.moduleCodes, (0, HT.F)(UT.layers), HT.r[UT.Tn], UT.keepCircleShadows)
    }
    const jT = 0,
      lT = 1,
      LT = 2,
      pT = "shaderPack:failedToCompile",
      BT = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      ZT = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function cT(TT, UT) {
      var mT;
      const WT = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.reason) && void 0 !== mT ? mT : "none";
      return BT.has(WT) ? {
        messageKey: UT ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === WT && "override" === (null === TT || void 0 === TT ? void 0 : TT.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: ZT.has(WT) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class vT extends Error {
      constructor(TT) {
        super(`the shader pack can't run in this game: ${TT}`), this.messageKey = TT, this.name = "ShaderPackJoinError"
      }
    }
    const fT = "strict";
    class qT {
      constructor(TT) {
        this.deps = TT, this.pagePack = void 0, this.loaded = null, this.Tn = fT, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = TT.load().catch((UT => (TT.warn("the shader pack could not load: the game draws without it", UT), {
          status: "none"
        }))).then((TT => (this.loaded = TT, "active" === TT.status && (this.handOverToPreviews(TT), null !== TT.harnessPolicy && (this.Tn = TT.harnessPolicy, this.handOver())), TT)))
      }
      async join(TT) {
        this.leave();
        const UT = this.game,
          [mT, zT] = await Promise.all([this.pagePack, this.policyOf(TT)]);
        if (UT !== this.game || "none" === mT.status) return null;
        const MT = "active" === mT.status ? mT.pack.variants : mT.variants,
          gT = (0, WT.l)(MT, zT);
        if (gT && "active" === mT.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (gT) {
          const TT = this.cantRun(mT, zT);
          if (null !== TT) return TT
        } else if ("blocked" === mT.status || null === this.deps.core) return null;
        return this.Tn = zT, this.handOver(), gT && this.refused ? pT : (this.joined = !0, this.offInThisGame = !gT, null)
      }
      async replay(TT) {
        const UT = await this.join(TT);
        null === UT ? this.playable() : this.deps.failInGame(UT)
      }
      cantRun(TT, UT) {
        const {
          core: mT,
          noWebGpu: WT
        } = this.deps;
        if ("blocked" === TT.status) {
          return "shaderPack:failedUnchecked" === TT.messageKey && null === mT && WT.noAdapter ? WT.messageKey : TT.messageKey
        }
        return this.refused || this.failedPolicies.has(UT) ? pT : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var TT;
        return this.runsInJoinedGame() && "active" === (null === (TT = this.loaded) || void 0 === TT ? void 0 : TT.status) ? function(TT, UT) {
          const mT = TT.filter((TT => (0, WT.l)([TT], UT))),
            zT = TT => mT.some((UT => UT[TT]));
          return {
            sceneDepth: zT("sceneDepth"),
            sunShadow: zT("sunShadow"),
            airShadow: zT("airShadow")
          }
        }(this.loaded.pack.variants, this.Tn) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(pT) : (null !== this.couldntRun ? this.notify(MT.c, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Tn) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(TT) {
        for (const {
            code: UT,
            detail: mT
          }
          of TT)
          if (UT === gT.l.RenderShaderPackNotRun) switch (255 & mT) {
            case jT:
              this.refused = !0, this.failed();
              break;
            case lT:
              this.failedPolicies.add(this.Tn), this.failed();
              break;
            case LT:
              this.failedModelPolicies.add(this.Tn), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(pT) : this.failedWhileJoining = !0)
      }
      fail(TT) {
        this.leave(), this.deps.failInGame(TT)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(TT, UT) {
        const mT = this.game;
        this.deps.notify(TT, (() => mT === this.game && this.joined), UT)
      }
      handOver() {
        var TT;
        const {
          core: UT
        } = this.deps;
        null !== UT && "active" === (null === (TT = this.loaded) || void 0 === TT ? void 0 : TT.status) && (kT(UT, {
          ...this.loaded.pack,
          Tn: this.Tn
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(TT) {
        let {
          pack: UT,
          harnessPolicy: mT
        } = TT;
        const {
          previews: WT
        } = this.deps;
        null !== WT && kT(WT, {
          ...UT,
          Tn: null !== mT && void 0 !== mT ? mT : fT
        })
      }
      policyOf(TT) {
        return this.deps.policyOf(TT).catch((TT => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", TT), fT)))
      }
    }
    const iT = "wasmShaderPackNotice";

    function bT(TT, UT, mT, WT) {
      return zT.j.subscribe(iT, (TT => {
        let {
          translationKey: UT,
          stillCurrent: mT,
          reasonKey: WT
        } = TT;
        mT() && zT.j.EZ("chat", (0, MT.e)(UT, WT))
      })), new qT({
        load: OT,
        policyOf: eT,
        core: TT,
        previews: UT,
        noWebGpu: mT,
        notify: (TT, UT, mT) => {
          const WT = {
            translationKey: TT,
            stillCurrent: UT,
            reasonKey: mT
          };
          zT.j.EZ(iT, WT, !0)
        },
        failInGame: TT => {
          zT.j.EZ(MT.d, TT)
        },
        warn: WT
      })
    }
    async function OT() {
      const [{
        shaderPackPage: TT,
        harnessShaderPackMode: UT
      }, {
        shaderPackTextures: WT
      }] = await Promise.all([mT.e(117).then((() => mT(39343))), mT.e(118).then((() => mT(6698)))]), zT = await TT.load();
      return "active" !== zT.status ? zT : {
        status: "active",
        pack: {
          variants: zT.pack.variants,
          layers: WT().layers,
          keepCircleShadows: zT.pack.keepCircleShadows
        },
        harnessPolicy: UT()
      }
    }
    async function eT(TT) {
      var UT;
      const [{
        shaderPackPage: WT,
        harnessShaderPackMode: zT
      }, {
        getShaderPackPolicy: MT
      }] = await Promise.all([mT.e(117).then((() => mT(39343))), mT.e(93).then((() => mT(41427)))]);
      return await WT.load(), null !== (UT = zT()) && void 0 !== UT ? UT : MT(TT)
    }
  },
  40951: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT,
      f: () => cT,
      j: () => HT,
      k: () => kT,
      l: () => jT,
      o: () => LT
    });
    var WT = mT(40957),
      zT = mT(40966);
    const MT = "atlas:",
      gT = 3e4;
    class nT extends Error {
      constructor(TT, UT) {
        super(`fetching ${TT} answered HTTP ${UT}`), this.url = TT, this.status = UT, this.name = "TerrainTextureFetchError"
      }
    }

    function HT(TT) {
      if (!TT.startsWith(MT)) return null;
      const UT = Number(TT.slice(MT.length));
      return Number.isInteger(UT) && UT >= 0 ? UT : null
    }
    async function kT() {
      const TT = await mT.e(207).then((() => mT(34366)));
      return {
        atlasSheets: TT.blockAtlasUrls,
        texture: UT => {
          var mT, WT, MT;
          return null !== (mT = null !== (WT = null !== (MT = TT.animatedBlockTextures[UT]) && void 0 !== MT ? MT : TT.rotatedBlockTextures[UT]) && void 0 !== WT ? WT : zT.e[UT]) && void 0 !== mT ? mT : null
        }
      }
    }
    async function jT(TT) {
      const UT = new AbortController,
        mT = setTimeout((() => {
          UT.abort(new DOMException(`${TT} took over ${gT} ms`, "TimeoutError"))
        }), gT);
      let WT;
      try {
        const mT = await fetch(TT, {
          signal: UT.signal
        });
        if (!mT.ok) throw new nT(TT, mT.status);
        WT = await mT.blob()
      } finally {
        clearTimeout(mT)
      }
      const zT = await createImageBitmap(WT, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return LT(zT)
      } finally {
        zT.close()
      }
    }
    const lT = 8192;

    function LT(TT) {
      const {
        width: UT,
        height: mT
      } = TT, zT = Math.max(1, Math.min(mT, lT)), MT = (0, WT.e)(UT, zT, {
        willReadFrequently: !0
      });
      if (!MT) throw new Error("no 2D context to read the texture back");
      MT.globalCompositeOperation = "copy";
      const gT = new Uint8Array(UT * mT * 4);
      for (let WT = 0; WT < mT; WT += zT) {
        const nT = Math.min(zT, mT - WT);
        MT.drawImage(TT, 0, WT, UT, nT, 0, 0, UT, nT), gT.set(MT.getImageData(0, 0, UT, nT).data, WT * UT * 4)
      }
      return {
        width: UT,
        height: mT,
        pixels: gT
      }
    }
    async function pT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jT;
      const WT = [],
        zT = await Promise.all(TT.map((async TT => {
          var zT, gT;
          const nT = null !== (zT = null === (gT = UT.decoded) || void 0 === gT ? void 0 : gT.call(UT, TT)) && void 0 !== zT ? zT : null,
            kT = null === nT ? function(TT, UT) {
              if (TT.startsWith(MT)) {
                var mT;
                const WT = HT(TT);
                return null === WT ? null : null !== (mT = UT.atlasSheets[WT]) && void 0 !== mT ? mT : null
              }
              return UT.texture(TT)
            }(TT, UT) : null,
            jT = null !== nT && void 0 !== nT ? nT : null === kT ? null : mT(kT);
          if (null === jT) return WT.push({
            name: TT,
            url: kT,
            error: new Error(`no URL for terrain texture ${TT}`)
          }), null;
          try {
            const UT = await jT;
            if (UT.pixels.byteLength !== UT.width * UT.height * 4) throw new Error(`decoded ${UT.pixels.byteLength} bytes for ${UT.width}x${UT.height} texels`);
            return {
              name: TT,
              texture: UT
            }
          } catch (lT) {
            return WT.push({
              name: TT,
              url: kT,
              error: lT
            }), null
          }
        }))),
        gT = zT.filter((TT => null !== TT)),
        nT = new Uint32Array(2 * gT.length);
      gT.forEach(((TT, UT) => {
        let {
          texture: mT
        } = TT;
        nT[2 * UT] = mT.width, nT[2 * UT + 1] = mT.height
      }));
      return {
        handOver: {
          names: gT.map((TT => {
            let {
              name: UT
            } = TT;
            return UT
          })),
          textures: gT.map((TT => {
            let {
              texture: UT
            } = TT;
            return UT.pixels
          })),
          sizes: nT
        },
        failures: WT
      }
    }
    const BT = [2e3, 1e4, 3e4, 6e4, 12e4];

    function ZT() {}
    class cT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BT,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = TT, this.retryMs = UT, this.keepBelow = mT, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kT,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const WT = ++this.started,
          zT = {
            decode: mT.decode,
            wholeAtlas: mT.wholeAtlas
          };
        return this.loadAndHandOver(UT, zT, TT, (() => {
          var TT;
          return WT < this.landed || !1 === (null === (TT = mT.wanted) || void 0 === TT ? void 0 : TT.call(mT))
        }), {
          onTaken: (TT, mT) => {
            this.landed = WT, this.current = {
              mine: WT,
              sources: UT,
              load: zT,
              Jp: TT,
              failed: mT
            }
          }
        })
      }
      restore(TT) {
        var UT;
        const mT = this.current;
        if (null === mT) return Promise.resolve(null);
        if ((null === (UT = this.restoring) || void 0 === UT ? void 0 : UT.mine) === mT.mine) return this.restoring.done;
        const WT = {
          mine: mT.mine,
          done: this.restoreLanded(mT, TT).finally((() => {
            this.restoring === WT && (this.restoring = null)
          }))
        };
        return this.restoring = WT, WT.done
      }
      async restoreLanded(TT, UT) {
        const mT = () => this.landed !== TT.mine,
          {
            Jp: WT
          } = TT;
        if (null !== WT) return this.stopped() ? null : this.core.setTerrainTextures(WT.names, WT.textures, WT.sizes);
        let zT = UT;
        for (let MT = 0;; MT++) {
          const UT = this.retryMs.at(MT),
            WT = {
              allOrNothingExcept: void 0 === UT ? void 0 : TT.failed
            },
            gT = await this.loadAndHandOver(TT.sources, TT.load, zT, mT, WT);
          if (!1 !== gT || void 0 === UT || this.stopped()) return gT;
          if (zT = ZT, await new Promise((TT => {
              setTimeout(TT, UT)
            })), mT()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const MT = this.core.terrainTextureNames();
        var gT;
        if (0 === MT.length) return null === (gT = zT.onTaken) || void 0 === gT || gT.call(zT, null, new Set), !0;
        let nT, kT;
        try {
          nT = await TT(), kT = await pT(MT, nT, UT.decode)
        } catch (cT) {
          return WT() ? null : (mT({
            name: null,
            url: null,
            error: cT
          }), !1)
        }
        if (WT() || this.stopped()) return null;
        for (const HT of kT.failures) mT(HT);
        const jT = zT.allOrNothingExcept;
        if (void 0 !== jT && kT.failures.some((TT => {
            let {
              name: UT
            } = TT;
            return null === UT || !jT.has(UT)
          })) || !0 === UT.wholeAtlas && kT.failures.some((TT => {
            let {
              name: UT
            } = TT;
            return null === UT || null !== HT(UT)
          }))) return !1;
        const {
          handOver: lT
        } = kT, LT = function(TT) {
          return TT.textures.reduce(((TT, UT) => TT + UT.byteLength), 0)
        }(lT) < this.keepBelow, BT = this.core.setTerrainTextures(lT.names, lT.textures, lT.sizes, LT ? void 0 : () => {
          !async function(TT, UT) {
            await UT;
            for (const {
                buffer: WT
              }
              of TT) {
              const TT = WT;
              var mT;
              if (!TT.detached) null === (mT = TT.transfer) || void 0 === mT || mT.call(TT, 0)
            }
          }(lT.textures, nT.heldUntil)
        });
        if (BT) {
          var ZT;
          const TT = new Set(kT.failures.flatMap((TT => {
            let {
              name: UT
            } = TT;
            return null === UT ? [] : [UT]
          })));
          null === (ZT = zT.onTaken) || void 0 === ZT || ZT.call(zT, LT ? lT : null, TT)
        }
        return BT
      }
    }
  },
  36945: (TT, UT, mT) => {
    function WT(TT) {
      return "fetch" === TT || "timeout" === TT || "integrity" === TT ? "download" : "browser"
    }
    mT.d(UT, {
      b: () => zT,
      d: () => gT,
      e: () => HT,
      h: () => nT,
      j: () => WT,
      k: () => MT
    });
    const zT = "https://discord.gg/playbloxd";

    function MT(TT) {
      return "download" === TT ? {
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

    function gT(TT, UT) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: UT ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: TT.code
        },
        discordLink: UT,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function nT() {
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

    function HT(TT, UT, mT) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: mT ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: TT.reason
        },
        discordLink: null === TT.name,
        confirm: UT ? "general:reconnect" : TT.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  34219: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT,
      e: () => lT,
      i: () => jT
    });
    var WT = mT(280),
      zT = mT(102),
      MT = mT(130),
      gT = mT(126),
      nT = mT(677);
    const HT = new Set(["mali_bifrost"]);

    function kT() {
      if ("android" !== (0, zT.pageOperatingSystem)() || nT.h || (0, nT.d)("webgl_default")) return;
      const TT = (0, MT.l)(),
        UT = null === TT ? (0, WT.u)() : (0, WT.i)(TT.vendor, TT.renderer);
      return null !== UT && HT.has(UT) ? TT => (0, WT.n)((0, gT.c)(TT).vendor, UT) : void 0
    }

    function jT(TT, UT) {
      return TT ? () => !0 : UT()
    }
    async function lT(TT) {
      try {
        const UT = jT(TT, kT),
          mT = navigator.gpu;
        if (void 0 === UT || void 0 === mT) return !1;
        const WT = await (0, gT.o)(mT, {
          seed: !1,
          compatibility: UT
        });
        return "string" !== typeof WT && WT.compatibility && !(0, gT.g)(WT.adapter)
      } catch (UT) {
        return console.error("WebGPU compatibility-mode adapter request failed.", UT), !1
      }
    }
  },
  40902: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => HT,
      e: () => kT
    });
    var WT = mT(102),
      zT = mT(38880);
    const MT = "webgpuPipeline";

    function gT(TT) {
      return TT.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let nT = null;

    function HT() {
      if (null === nT) try {
        TT = (0, WT.getBrowserName)(), UT = (0, WT.getBrowserVersion)(), mT = (0, WT.getOperatingSystem)(), zT = (0, WT.getOperatingSystemVersion)(), nT = `${TT.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===UT?"unknown":gT(UT)}-${mT}${void 0===zT?"":`_${gT(zT)}`}`
      } catch (MT) {
        console.warn("The user agent couldn't be read for its browser code", MT), nT = "unknown"
      }
      var TT, UT, mT, zT;
      return nT
    }

    function kT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const UT = `WGPU-${HT()}`,
        WT = (TT, WT) => {
          const {
            reason: gT,
            message: nT
          } = WT;
          if ((0, zT.q)(String(nT))) return;
          const HT = {
            pipeline: null !== TT && void 0 !== TT ? TT : "",
            reason: String(gT),
            browserMessage: String(nT)
          };
          Promise.resolve().then((() => mT(40887))).then((TT => {
            let {
              reportCrash: mT
            } = TT;
            mT({
              kind: "coreError",
              code: UT,
              site: MT,
              fatal: !1,
              message: `${HT.pipeline} ${HT.reason}: ${HT.browserMessage}`,
              details: HT,
              error: WT
            })
          })).catch((TT => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", TT)
          }))
        },
        gT = TT.createRenderPipelineAsync;
      TT.createRenderPipelineAsync = function(TT) {
        return gT.call(this, TT).catch((UT => {
          throw WT(TT.label, UT), UT
        }))
      };
      const nT = TT.createComputePipelineAsync;
      TT.createComputePipelineAsync = function(TT) {
        return nT.call(this, TT).catch((UT => {
          throw WT(TT.label, UT), UT
        }))
      }
    }
  },
  41019: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/bloxd_wasm_models_bg.c0c932fa53a0ea7342c3.wasm"
  },
  41012: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/bloxd_wasm_workers_bg.38b4ba0c4cedd2c6271b.wasm"
  },
  41009: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      g: () => WT
    });
    const WT = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new mT.U(mT(41012))
      }
    };
    const zT = {
      name: "bloxd_wasm_models",
      url: function() {
        return new mT.U(mT(41019))
      }
    }
  },
  6706: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => iT,
      h: () => bT,
      i: () => fT,
      m: () => vT
    });
    var WT = mT(6713);
    const zT = 6,
      MT = 3,
      gT = 1,
      nT = 2,
      HT = 4,
      kT = 8,
      jT = 16,
      lT = 32,
      LT = 64,
      pT = 128,
      BT = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function ZT(TT) {
      if (!TT) return 0;
      const UT = BT.indexOf(TT);
      if (UT <= 0) throw new Error(`"${TT}" is not a shader pack hook function`);
      return UT
    }

    function cT(TT) {
      if (0 === TT) return null;
      const UT = BT[TT];
      if (void 0 === UT) throw new Error(`${TT} is not a shader pack hook function id`);
      return UT
    }

    function vT(TT) {
      const UT = WT.e.length;
      return {
        strict: TT >= UT,
        program: WT.e[TT % UT]
      }
    }

    function fT(TT) {
      return Number(TT.strict) * WT.e.length + WT.e.indexOf(TT.program)
    }

    function qT(TT) {
      return "" === TT ? [] : TT.split(" ")
    }

    function iT(TT) {
      const UT = {
        variantFlags: new Uint8Array(zT),
        hooks: new Uint8Array(zT * MT),
        moduleCodes: Array(zT).fill(""),
        reads: Array(2 * zT).fill("")
      };
      for (const mT of TT) {
        const TT = fT(mT.key),
          WT = (TT, UT) => null === mT.hooks.surface || mT.reads.fragment.includes(TT) ? 0 : UT;
        UT.variantFlags[TT] = (mT.sceneDepth ? gT : 0) | (mT.movesVertices ? nT : 0) | (mT.sunShadow ? HT : 0) | (mT.airShadow ? kT : 0) | (mT.discards ? jT : 0) | WT("localPosition", lT) | WT("enchantSpeed", LT) | WT("enchantTier", pT), UT.hooks[TT * MT] = ZT(mT.hooks.vertex), UT.hooks[TT * MT + 1] = ZT(mT.hooks.surface), UT.hooks[TT * MT + 2] = ZT(mT.hooks.light), UT.moduleCodes[TT] = mT.moduleCode, UT.reads[2 * TT] = mT.reads.vertex.join(" "), UT.reads[2 * TT + 1] = mT.reads.fragment.join(" ")
      }
      return UT
    }

    function bT(TT) {
      const {
        hooks: UT,
        moduleCodes: mT,
        reads: WT
      } = TT;
      return Array.from(TT.variantFlags, ((TT, zT) => {
        const lT = zT * MT;
        return {
          key: vT(zT),
          hooks: {
            vertex: cT(UT[lT]),
            surface: cT(UT[lT + 1]),
            light: cT(UT[lT + 2])
          },
          moduleCode: mT[zT],
          sceneDepth: 0 !== (TT & gT),
          sunShadow: 0 !== (TT & HT),
          airShadow: 0 !== (TT & kT),
          movesVertices: 0 !== (TT & nT),
          discards: 0 !== (TT & jT),
          reads: {
            vertex: qT(WT[2 * zT]),
            fragment: qT(WT[2 * zT + 1])
          }
        }
      }))
    }
  },
  40839: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => HT,
      E: () => gT,
      F: () => ZT,
      H: () => pT,
      K: () => BT,
      e: () => zT,
      i: () => WT,
      m: () => LT,
      p: () => jT,
      r: () => cT,
      u: () => MT,
      x: () => nT
    });
    const WT = 3,
      zT = 0,
      MT = 1,
      gT = 2,
      nT = {
        uniform: 3,
        iL: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      HT = 10,
      kT = "BloxdPackInputs",
      jT = "bloxdPackInputs",
      lT = [{
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
      LT = 80;

    function pT() {
      const TT = lT.map((TT => {
        let {
          name: UT,
          type: mT
        } = TT;
        return `    ${UT}: ${mT},\n`
      })).join("");
      return `struct ${kT} {\n${TT}}\n@group(${WT}) @binding(${zT}) var<uniform> ${jT}: ${kT};\n`
    }

    function BT(TT, UT) {
      const mT = new DataView(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, LT),
        [WT, zT, MT, gT, nT, HT] = lT;
      mT.setFloat32(WT.offset, UT.seconds, !0), mT.setUint32(zT.offset, UT.lit ? 1 : 0, !0);
      for (let kT = 0; kT < 3; kT++) mT.setInt32(MT.offset + 4 * kT, UT.renderOffset[kT], !0), mT.setFloat32(gT.offset + 4 * kT, UT.zTT[kT], !0), mT.setFloat32(nT.offset + 4 * kT, UT.eyePosition[kT], !0), mT.setFloat32(HT.offset + 4 * kT, UT.shadowDirection[kT], !0)
    }

    function ZT(TT) {
      const UT = new Uint32Array(Math.max(1, TT.length));
      return TT.forEach(((TT, mT) => {
        let {
          id: WT,
          rotation: zT
        } = TT;
        UT[mT] = 65535 & WT | (3 & zT) << 16
      })), UT
    }
    const cT = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6713: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT,
      i: () => gT,
      l: () => nT,
      n: () => zT,
      r: () => MT
    });
    const WT = ["terrain", "liquid", "model"];

    function zT() {
      const TT = [];
      for (const UT of [!1, !0])
        for (const mT of WT) TT.push({
          strict: UT,
          program: mT
        });
      return TT
    }

    function MT(TT) {
      return `${TT.strict?"strict":"allow"}.${TT.program}`
    }

    function gT(TT) {
      return !TT.hooks.vertex && !TT.hooks.surface && !TT.hooks.light
    }

    function nT(TT, UT) {
      return "off" !== UT && (null === TT || TT.some((TT => TT.key.strict === ("strict" === UT) && !gT(TT))))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);