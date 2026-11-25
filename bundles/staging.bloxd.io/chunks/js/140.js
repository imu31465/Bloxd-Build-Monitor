export const id = 140;
export const ids = [140];
export const modules = {
  39165: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => YG,
      g: () => fG,
      k: () => QG,
      l: () => dG,
      p: () => pG,
      t: () => VG,
      u: () => yG,
      w: () => KG
    });
    var wG = ZG(326),
      SG = ZG(1682);
    const LG = "A valid external Instance reference no longer exists.";

    function yG(GG) {
      return GG.includes(LG)
    }
    const kG = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      UG = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const YG = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function VG(GG, bG) {
      return GG ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(GG) {
        var bG;
        const ZG = null !== (bG = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(GG)) && void 0 !== bG ? bG : /failed with ([A-Z][A-Z0-9_]+)/.exec(GG);
        return ZG ? ZG[1] : yG(GG) ? "gpu_process_lost" : "other"
      }(bG)
    }

    function pG(GG) {
      return `${(null===GG||void 0===GG?void 0:GG.vendor)||"unknown vendor"} ${(null===GG||void 0===GG?void 0:GG.architecture)||"unknown architecture"}`
    }

    function fG(GG) {
      return JG(GG)[1]
    }

    function QG(GG) {
      return JG(GG)[2]
    }

    function KG(GG, bG, ZG) {
      const SG = (0, wG.f)(),
        LG = null !== SG && SG >= bG,
        yG = document.hidden ? "hidden" : LG ? "shown" : "visible",
        kG = LG ? ZG - SG : null;
      return {
        page: null === kG ? yG : `${yG}${fG(kG)}`,
        code: `${GG}_${null===kG?yG:`${yG}_${QG(kG)}`}_${hG(ZG)}`
      }
    }

    function hG(GG) {
      if ((0, SG.g)()) return "ad_open";
      const bG = (0, SG.d)();
      return null === bG ? "ad_none" : `ad_${QG(GG-bG.endedAt)}_${bG.pageHid?"h":"v"}`
    }

    function dG(GG) {
      return rG(UG, GG)[1]
    }

    function JG(GG) {
      return rG(kG, GG)
    }

    function rG(GG, bG) {
      var ZG;
      return null !== (ZG = GG.find((GG => {
        let [ZG] = GG;
        return bG < ZG
      }))) && void 0 !== ZG ? ZG : GG[GG.length - 1]
    }
  },
  41018: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG,
      e: () => VG,
      h: () => yG,
      j: () => SG,
      n: () => kG,
      o: () => YG
    });
    class wG extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function SG(GG) {
      return GG instanceof RangeError && /call stack/i.test(GG.message) || GG instanceof Error && "InternalError" === GG.name && /recursion/i.test(GG.message)
    }
    const LG = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function yG(GG) {
      var bG;
      return GG instanceof WebAssembly.RuntimeError || GG instanceof wG || SG(GG) && LG.test(null !== (bG = GG.stack) && void 0 !== bG ? bG : "")
    }

    function kG(GG, bG) {
      if (yG(GG)) throw GG;
      console.error(bG, GG)
    }

    function UG(GG, bG, ZG, SG, LG) {
      if (bG % SG !== 0 || bG + ZG > GG.byteLength) throw new wG(`${LG}: ${ZG} bytes at ${bG}, ${SG}-aligned, outside ${GG.byteLength} bytes of memory`)
    }

    function YG(GG, bG, ZG, wG, SG) {
      return 0 === ZG ? null : (UG(bG, ZG, wG * GG.BYTES_PER_ELEMENT, GG.BYTES_PER_ELEMENT, SG), new GG(bG, ZG, wG))
    }

    function VG(GG, bG, ZG, wG, SG) {
      return 0 === bG ? null : (UG(GG, bG, ZG, wG, SG), new DataView(GG, bG, ZG))
    }
  },
  41100: (GG, bG, ZG) => {
    ZG.d(bG, {
      B: () => DG,
      D: () => gG,
      H: () => BG,
      I: () => xG,
      L: () => NG,
      N: () => bb,
      P: () => fb,
      S: () => Gb,
      T: () => OG,
      W: () => Zb,
      _: () => Lb,
      c: () => mG,
      cb: () => Ub,
      d: () => Qb,
      eb: () => FG,
      g: () => Jb,
      j: () => kb,
      m: () => pb,
      q: () => Sb,
      r: () => Vb,
      v: () => Yb,
      w: () => db,
      y: () => HG
    });
    var wG = ZG(333),
      SG = ZG(264),
      LG = ZG(273),
      yG = ZG(17),
      kG = ZG(2801),
      UG = ZG(666),
      YG = ZG(4531),
      VG = ZG(2773),
      pG = ZG(3441),
      fG = ZG(80),
      QG = ZG(326),
      KG = ZG(29),
      hG = ZG(318),
      dG = ZG(101),
      JG = ZG(626),
      rG = ZG(111),
      zG = ZG(105),
      EG = ZG(4818),
      oG = ZG(41104),
      XG = ZG(1775),
      uG = ZG(41112),
      iG = ZG(34429),
      CG = ZG(41115);
    const WG = "bloxd-webgpuOffAfterLoss",
      mG = "context:webgl",
      IG = "probe:threw";

    function FG(GG) {
      let bG;
      try {
        bG = GG.getContext("webgl", {
          powerPreference: rG.e
        })
      } catch {
        bG = null
      }
      if (null === bG) return null;
      let ZG = null;
      try {
        const GG = bG.getParameter(bG.MAX_TEXTURE_SIZE);
        ZG = "number" === typeof GG && GG > 0 ? GG : null
      } catch {
        ZG = null
      }
      try {
        var wG;
        null === (wG = bG.getExtension("WEBGL_lose_context")) || void 0 === wG || wG.loseContext()
      } catch {}
      return ZG
    }
    const vG = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function aG() {
      return "ios" === (0, fG.getOperatingSystem)() ? "ios" : "other"
    }
    const cG = "mali_valhall",
      lG = new Set(["nvidia_pre_turing"]),
      jG = new Set(["intel_gen7_8"]);

    function PG(GG, bG) {
      return vG.has(GG) ? "android_arm" === GG && bG === cG ? "webgpu_default" : "webgl_default" : null
    }

    function MG(GG) {
      return function(GG) {
        try {
          return GG()
        } catch {
          return null
        }
      }((() => {
        var bG, ZG, wG, yG;
        const kG = null !== (bG = null === (ZG = GG.info) || void 0 === ZG ? void 0 : ZG.vendor) && void 0 !== bG ? bG : "";
        return "windows" === (0, fG.getOperatingSystem)() && "" !== kG && "intel" !== (0, fG.normaliseGpuVendor)(kG) ? null : ((0, fG.seedGpuVendor)(kG), PG((0, SG.f)(), (0, LG.g)(kG, null !== (wG = null === (yG = GG.info) || void 0 === yG ? void 0 : yG.architecture) && void 0 !== wG ? wG : "")))
      }))
    }

    function AG() {
      var GG;
      return {
        gpu: null !== (GG = navigator.gpu) && void 0 !== GG ? GG : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(GG) {
          let bG, ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oG.b;
          try {
            bG = GG.getContext("webgl")
          } catch {
            bG = null
          }
          if (null === bG) return [mG];
          const wG = [];
          try {
            for (const SG of ZG.extensions) null === bG.getExtension(SG) && wG.push(SG);
            for (const [SG, LG] of Object.entries(ZG.limits)) {
              const GG = bG[SG],
                ZG = "number" === typeof GG ? bG.getParameter(GG) : null;
              ("number" !== typeof ZG || ZG < LG) && wG.push(`limit:${SG}`)
            }
            const GG = bG.getShaderPrecisionFormat(bG.VERTEX_SHADER, bG.HIGH_FLOAT);
            (null === GG || GG.precision < ZG.vertexHighFloatBits) && wG.push("precision:vertex_high_float")
          } catch {
            wG.push(IG)
          }
          try {
            var SG;
            null === (SG = bG.getExtension("WEBGL_lose_context")) || void 0 === SG || SG.loseContext()
          } catch {}
          return wG
        }(document.createElement("canvas")),
        offAfterLoss: GG => qG((() => GG ? (0, hG.T)() : yG.e.isWebGpuOffAfterLoss())),
        oldIntelDriver: GG => qG((() => (0, dG.f)(GG))),
        intelGen9: GG => qG((() => (0, dG.l)(GG))),
        storeIntelGen9Verdict: GG => {
          KG.h.setItem(dG.z, GG)
        },
        gpuClassWebGlArm: MG,
        storeGpuClassVerdict: GG => {
          KG.h.setItem(dG.y, GG)
        },
        gpuClassOnWebGl: GG => (0, JG.e)(GG),
        webGlDefaultFamily: GG => jG.has((0, LG.g)(GG.vendor, GG.architecture)),
        storeWebGlDefaultFamilyVerdict: GG => {
          KG.h.setItem(dG.H, GG)
        },
        override: () => sG(),
        claimed: () => nG((0, UG.i)()),
        webGpuSetting: () => {
          const GG = KG.h.getItem(wG.Cc);
          return "boolean" === typeof GG ? GG : null
        },
        heldBack: () => JG.i,
        storeHoldbackSpared: GG => {
          KG.h.setItem(dG.x, GG)
        },
        intelGen9OnWebGl: () => JG.j,
        OQ: () => qG((() => (0, pG.e)(fG.featureFlags.settings.canUseShaderPacks))),
        windows: () => qG((() => "windows" === (0, fG.getOperatingSystem)())),
        defaultCompatibility: iG.c
      }
    }

    function sG() {
      let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, kG.m)("render") && "webgl1" === (0, kG.k)("renderer")) return "webgl1";
      const bG = [() => new URLSearchParams(window.location.search).get(VG.b), () => KG.h.getItem(VG.c), () => {
        const bG = localStorage.getItem(WG);
        return null !== bG && GG && localStorage.removeItem(WG), "1" === bG ? "webgl2" : null
      }];
      for (const ZG of bG) {
        let GG = null;
        try {
          GG = nG(ZG())
        } catch {}
        if (null !== GG) return GG
      }
      return null
    }

    function qG(GG) {
      try {
        return GG()
      } catch {
        return !1
      }
    }

    function nG(GG) {
      return "lite" === GG ? "webgpu" : "webgl2" === GG || "babylon" === GG ? "webgl" : null
    }

    function gG(GG) {
      return "none" === GG || "compatibility_mode" === GG
    }
    async function eG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AG();
      const bG = await async function(GG) {
        const bG = TG(GG),
          {
            source: ZG
          } = bG,
          wG = !bG.asked,
          SG = "gpu" in bG && bG.heldBack,
          yG = function(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return SG && !gG(GG) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: ZG
            } : {
              reason: GG,
              adapter: bG,
              source: ZG
            }
          };
        if (!("gpu" in bG)) return yG(bG.refused);
        let kG;
        try {
          kG = await (0, XG.n)((0, zG.l)(bG.gpu, {
            compatibility: RG(GG, bG)
          }), Kb, `requestAdapter didn't settle in ${Kb/1e3} s`)
        } catch {
          return yG("adapter_error")
        }
        if ("string" === typeof kG) return yG(kG);
        const {
          adapter: UG,
          compatibility: YG
        } = kG, VG = (0, zG.c)(UG);
        if ((0, zG.g)(UG)) return yG("software_adapter", VG);
        const pG = GG.windows() && function(GG) {
          return lG.has((0, LG.g)(GG.vendor, GG.architecture))
        }(VG);
        if (GG.storeHoldbackSpared(pG), SG && !pG) return yG("webgl_holdback");
        const fG = GG.intelGen9(UG);
        GG.storeIntelGen9Verdict(fG);
        const QG = fG ? null : GG.gpuClassWebGlArm(UG);
        GG.storeGpuClassVerdict(null !== QG && void 0 !== QG && QG);
        const KG = GG.webGlDefaultFamily(VG);
        if (GG.storeWebGlDefaultFamilyVerdict(KG), wG && GG.oldIntelDriver(UG)) return yG("old_intel_driver", VG);
        if ("default" === ZG && fG && GG.intelGen9OnWebGl()) return yG("intel_gen9", VG);
        if ("default" === ZG && null !== QG && GG.gpuClassOnWebGl(QG)) return yG("gpu_class_webgl", VG);
        if ("default" === ZG && KG) return yG("gpu_wasm_arm", VG);
        return yG(YG ? "compatibility_mode" : "none", VG)
      }(GG);
      if (gG(bG.reason)) return {
        backend: "webgpu",
        ...bG
      };
      if ("webgl1" !== GG.override() && GG.webgl2()) return {
        backend: "webgl",
        ...bG
      };
      const ZG = GG.webgl1();
      return 0 === ZG.length ? {
        backend: "webgl1",
        ...bG
      } : {
        missing: ZG
      }
    }

    function RG(GG, bG) {
      let {
        source: ZG,
        asked: wG
      } = bG;
      return wG || "default" === ZG ? (0, iG.j)(wG, GG.defaultCompatibility) : void 0
    }

    function TG(GG) {
      const bG = GG.override(),
        ZG = GG.webGpuSetting(),
        wG = null === bG && !0 !== ZG && GG.OQ(),
        SG = null !== bG || null !== ZG || wG ? null : GG.claimed(),
        LG = null !== bG ? "override" : !0 === ZG ? "setting" : wG ? "pack" : !1 === ZG ? "setting" : null !== SG ? "claim" : "default",
        yG = function(GG) {
          return "override" === GG || "setting" === GG
        }(LG);
      if ("webgl" === bG || "webgl1" === bG || "webgl" === SG || "setting" === LG && !1 === ZG) return {
        source: LG,
        asked: yG,
        refused: "not_requested"
      };
      if (!GG.gpu) return {
        source: LG,
        asked: yG,
        refused: "no_webgpu_api"
      };
      const kG = "default" === LG && GG.heldBack();
      return kG && !GG.windows() ? {
        source: LG,
        asked: yG,
        refused: "webgl_holdback"
      } : !yG && GG.offAfterLoss("pack" === LG) ? {
        source: LG,
        asked: yG,
        refused: kG ? "webgl_holdback" : "off_after_loss"
      } : {
        source: LG,
        asked: yG,
        heldBack: kG,
        gpu: GG.gpu
      }
    }

    function HG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...AG(),
          override: () => sG(!1)
        },
        bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fG.isWebKit,
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aG;
      try {
        if (!bG()) return !1;
        const wG = TG(GG);
        if (!("gpu" in wG) || wG.heldBack) return !1;
        const SG = "default" === wG.source ? PG(ZG(), "apple") : null;
        return null === SG || !GG.gpuClassOnWebGl(SG)
      } catch (wG) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", wG), !1
      }
    }
    let tG = !1;
    async function DG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AG();
      if (null === GG) return null;
      const ZG = await eG(bG);
      return tG = !("missing" in ZG) && "webgpu" === ZG.backend && "claim" === ZG.source, "missing" in ZG ? ZG : {
        ...ZG,
        load: GG[ZG.backend]
      }
    }
    async function NG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AG().gpu,
        wG = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== GG.backend) return !1;
      const SG = wb(GG, bG, "indirectDraws", "off", "on");
      if (null !== SG) return SG;
      if (null !== GG.adapter && (0, dG.o)(GG.adapter, wG)) return !0;
      if (null === ZG) return !1;
      try {
        var LG;
        const GG = await (0, XG.n)(ZG.requestAdapter({
          powerPreference: "low-power"
        }).then((async GG => (null !== GG && await (0, zG.f)(GG), GG))), Kb, `the low-power requestAdapter didn't settle in ${Kb/1e3} s`);
        return (0, dG.o)(null !== (LG = null === GG || void 0 === GG ? void 0 : GG.info) && void 0 !== LG ? LG : {}, wG)
      } catch (yG) {
        return yG instanceof XG.h
      }
    }

    function OG(GG, bG, ZG) {
      if ("webgpu" !== GG.backend) return !1;
      const wG = wb(GG, bG, "terrainFetch", "texture", "storage");
      return null !== wG ? wG : null !== GG.adapter && (0, dG.h)(GG.adapter, ZG)
    }

    function xG(GG, bG) {
      if ("webgpu" !== GG.backend) return !1;
      const ZG = wb(GG, bG, "skyOrder", "early", "last");
      return null !== ZG ? ZG : null !== GG.adapter && (0, LG.g)(GG.adapter.vendor, GG.adapter.architecture) === cG
    }

    function BG(GG, bG) {
      if ("webgpu" !== GG.backend) return !1;
      const ZG = wb(GG, bG, "uploadCopies", "off", "on");
      return null !== ZG ? ZG : null !== GG.adapter && "powervr_rogue" === (0, LG.g)(GG.adapter.vendor, GG.adapter.architecture)
    }

    function Gb(GG, bG, ZG) {
      if ("webgpu" !== GG.backend) return !1;
      const wG = wb(GG, bG, "sceneDepth", "off", "on");
      return null !== wG ? wG : null !== GG.adapter && (0, dG.k)(GG.adapter, ZG)
    }

    function bb(GG, bG) {
      return "webgl" === GG.backend ? wb(GG, bG, "instancedTerrain", "1", "0") : null
    }

    function Zb(GG, bG) {
      return "webgpu" !== GG.backend || bG && (null === GG.adapter || !(0, hG.W)(GG.adapter))
    }

    function wb(GG, bG, ZG, wG, SG) {
      const LG = new URLSearchParams(bG).get(ZG),
        yG = null !== LG && void 0 !== LG ? LG : (0, UG.e)(ZG);
      return yG !== wG && yG !== SG ? null : (tG ||= null === LG && "webgpu" === GG.backend, yG === wG)
    }

    function Sb(GG) {
      return null !== GG && "missing" in GG
    }

    function Lb(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Ub(),
        ZG = arguments.length > 2 ? arguments[2] : void 0;
      return bG ? function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yG.e,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const wG = "start_failed" === GG || "pipeline_failed" === GG,
            SG = (0, CG.h)(GG, ZG),
            LG = bG.turnOffWebGpuAfterDeviceLoss(wG ? "visible" : (0, hG.n)((0, QG.h)()), wG, SG);
          return tG && (0, UG.s)("webgpuLoss"), bG.isWebGpuOffAfterLoss() && "webgpu" === nG(KG.h.getItem(VG.c)) && KG.h.removeItem(VG.c), (0, kG.m)("webgpuloss") && (0, YG.b)((bG => {
            var ZG;
            bG.noteWebGpuLoss("wasm", LG ? GG : `${GG}, which storage didn't keep`, null !== (ZG = SG.message) && void 0 !== ZG ? ZG : null)
          })), LG
        } catch {
          return !1
        }
      }(GG, yG.e, ZG) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const yb = "framePacing";

    function kb(GG) {
      const bG = new URLSearchParams(GG).get(yb);
      return null !== bG && /^\d{1,9}$/.test(bG) ? Number(bG) : void 0
    }

    function Ub() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === nG(new URLSearchParams(GG).get(VG.b))
      } catch {
        return !1
      }
    }

    function Yb(GG) {
      return !!Vb(GG) || GG instanceof Error && !(GG instanceof WebAssembly.RuntimeError) && GG.message.startsWith(`${EG.m.RenderSurfaceUnusable}:`)
    }

    function Vb(GG) {
      const {
        name: bG,
        message: ZG
      } = null !== GG && void 0 !== GG ? GG : {};
      return "InvalidStateError" === bG && "string" === typeof ZG && ZG.startsWith("GPUDevice.")
    }

    function pb(GG) {
      const bG = GG;
      return "function" === typeof bG.dwG && "function" === typeof bG.JwG ? bG : null
    }

    function fb(GG) {
      return "function" === typeof GG.Td ? GG : null
    }
    const Qb = "openRenderer";
    const Kb = 5e3,
      hb = 15e3;

    function db(GG, bG, ZG, wG, SG, LG) {
      return (0, XG.n)(function(GG, bG, ZG, wG, SG, LG) {
        return (0, uG.i)(GG, bG, (() => GG.Td(ZG, wG, SG, LG.indirectHangs, LG.storagePullBreaks, LG.splitPassBreaks, LG.earlySky, LG.instancedTerrain, LG.cellLight, LG.framesAhead, LG.webGpuRestores, LG.bufferCopiesCrash)))
      }(GG, bG, ZG, wG, SG, LG), hb, `${EG.m.RenderSurfaceUnusable}: the renderer didn't open in ${hb/1e3} s`, rb)
    }
    async function Jb(GG, bG, ZG, wG, SG, LG) {
      if ("function" !== typeof GG.oyG) throw new Error("this core has no set_renderer");
      const yG = await db(bG, Qb, ZG, SG, wG, LG);
      try {
        GG.oyG(yG)
      } catch (kG) {
        throw rb(yG), kG
      }
    }

    function rb(GG) {
      try {
        GG.free()
      } catch {}
    }
  },
  41205: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG
    });
    const wG = {
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
  41131: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => KG,
      h: () => hG,
      k: () => fG,
      o: () => pG
    });
    const wG = 2e3,
      SG = "unavailable";
    let LG = () => Promise.resolve().then((() => ZG(2928))),
      yG = null,
      kG = null,
      UG = YG();

    function YG() {
      let GG = () => {};
      return {
        promise: new Promise((bG => {
          GG = () => {
            bG(null)
          }
        })),
        resolve: GG
      }
    }

    function VG() {
      if (null === yG) {
        const GG = LG();
        yG = GG, GG.then((bG => {
          yG === GG && (kG = bG)
        }), (() => {
          yG === GG && (yG = null)
        }))
      }
      return yG
    }

    function pG() {
      VG().catch((() => {}))
    }

    function fG() {
      UG.resolve()
    }

    function QG(GG, bG, ZG, wG) {
      if (null === GG) return {
        errorKind: bG,
        fingerprint: SG,
        dedupe: `${bG}|${wG}`
      };
      const {
        fingerprint: LG
      } = GG.clientErrorKey(bG, ZG, wG);
      return {
        errorKind: bG,
        fingerprint: LG,
        dedupe: LG
      }
    }

    function KG(GG, bG, ZG, wG) {
      return null === kG ? wG ? (pG(), QG(null, GG, bG, ZG)) : null : QG(kG, GG, bG, ZG)
    }
    async function hG(GG, bG, ZG) {
      let SG;
      const LG = new Promise((GG => {
        SG = setTimeout((() => {
          GG(null)
        }), wG)
      }));
      try {
        return QG(await Promise.race([VG(), LG, UG.promise]), GG, bG, ZG)
      } catch {
        return QG(null, GG, bG, ZG)
      } finally {
        clearTimeout(SG)
      }
    }
  },
  41122: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      BUILT_IN_ANIMATIONS_SITE: () => DG,
      CORE_ERRORS_SITE: () => AG,
      EVENT_OVERFLOW_SITE: () => tG,
      FIRST_VIEW_SITE: () => xG,
      JOIN_SITE: () => qG,
      LEAVE_SITE: () => nG,
      MAIN_THREAD_SITE: () => BG,
      MODEL_FEED_SITE: () => gG,
      MODEL_POOL_SITE: () => eG,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => wb,
      NON_FATAL_REPORTS_PER_SESSION: () => ob,
      PREVIEW_ANIMATIONS_SITE: () => HG,
      RENDER_RELOAD_SITE: () => TG,
      REQUEST_DEVICE_SITE: () => Gb,
      TEXTURE_NAMES_SITE: () => RG,
      TEXTURE_PACK_FEED_SITE: () => NG,
      TEXTURE_PACK_SWAP_SITE: () => OG,
      TurnstilePageError: () => LZ,
      WASM_LOAD_SITE: () => sG,
      countRenderLost: () => AZ,
      crashError: () => mb,
      crashReportsSettled: () => Mb,
      deviceLossWords: () => lZ,
      flushCrashReports: () => jb,
      joinFailureCode: () => yZ,
      lokiTransport: () => yb,
      modelFailureCode: () => QZ,
      readTrap: () => Rb,
      renderLoss: () => MZ,
      renderReloadMessage: () => jZ,
      reportCoreErrors: () => qb,
      reportCountedLoadFallback: () => wZ,
      reportCrash: () => Ib,
      reportDataLoadFailure: () => RZ,
      reportDisconnect: () => pZ,
      reportDracoDecoderFailure: () => JZ,
      reportDroppedRequiredLimits: () => bZ,
      reportEventOverflow: () => oZ,
      reportFirstViewNoTerrain: () => WZ,
      reportLightFault: () => uZ,
      reportMainStall: () => mZ,
      reportMemoryShed: () => CZ,
      reportModelFailure: () => KZ,
      reportModelPoolFailure: () => hZ,
      reportModelsModuleRetry: () => dZ,
      reportNoBackendRetry: () => GZ,
      reportPageJoinFailure: () => UZ,
      reportReconnectGaveUp: () => fZ,
      reportRenderRecovery: () => ab,
      reportRenderReload: () => nZ,
      reportReplayFault: () => FZ,
      reportStaleBuildReload: () => HZ,
      reportStoppedCore: () => Db,
      reportTerrainTextureFailure: () => gZ,
      reportTexturePackFeedLoadFailure: () => zZ,
      reportTexturePackKeptOut: () => EZ,
      reportUnstreamedCoreLoad: () => SZ,
      reportUnsupportedFallback: () => Bb,
      reportUnusedSeat: () => VZ,
      reportWorkerLost: () => XZ,
      reportWorkerStartTimeout: () => IZ,
      reportWorldgenGaveUp: () => iZ,
      reportWorldgenLoadFailure: () => rZ,
      resetCrashReports: () => Ab,
      setCrashAdPreload: () => hb,
      setCrashBackend: () => Kb,
      setCrashScreen: () => pb,
      setCrashTransport: () => Yb,
      showCrash: () => tb,
      showJoinFailure: () => kZ,
      showUnsupported: () => Ob,
      unknownSkyWords: () => sb
    });
    var wG = ZG(982),
      SG = ZG(1290),
      LG = ZG(1287),
      yG = ZG(1032),
      kG = ZG(273),
      UG = ZG(2936),
      YG = ZG(4318),
      VG = ZG(41131),
      pG = ZG(4810),
      fG = ZG(41133),
      QG = ZG(2968),
      KG = ZG(39165),
      hG = ZG(116),
      dG = ZG(111),
      JG = ZG(2970),
      rG = ZG(36826),
      zG = ZG(1775),
      EG = ZG(41143),
      oG = ZG(40971),
      XG = ZG(41065),
      uG = ZG(41072),
      iG = ZG(36820),
      CG = ZG(2868),
      WG = ZG(2872),
      mG = ZG(41170),
      IG = ZG(41190),
      FG = ZG(41195),
      vG = ZG(37193),
      aG = ZG(3206),
      cG = ZG(36594),
      lG = ZG(41112),
      jG = ZG(36606),
      PG = ZG(41214);
    const MG = "[bloxd-wasm-client]",
      AG = "coreErrors",
      sG = "wasmLoad",
      qG = "join",
      nG = "leave",
      gG = "modelFeed",
      eG = "modelWorkerPool",
      RG = "textureNames",
      TG = "renderReload",
      HG = "previewAnimations",
      tG = "eventOverflow",
      DG = "builtInAnimations",
      NG = "texturePackFeed",
      OG = "texturePackSwap",
      xG = "firstView",
      BG = "mainThread",
      Gb = "requestDevice",
      bb = 300,
      Zb = 64,
      wb = 8;
    let Sb = 0;
    const Lb = new Set,
      yb = (GG, bG) => {
        const ZG = db[GG.kind],
          wG = {
            backend: fb,
            adPreload: Qb
          };
        if (null === ZG) return void kb(GG, bG, wG, null);
        const SG = (0, VG.d)(ZG, GG.message, GG.code, GG.fatal);
        null === SG ? lb("Loki", (async () => {
          kb(GG, bG, wG, await (0, VG.h)(ZG, GG.message, GG.code))
        })) : kb(GG, bG, wG, SG)
      };

    function kb(GG, bG, ZG, wG) {
      let {
        backend: SG,
        adPreload: LG
      } = ZG;
      const {
        kind: kG,
        code: YG,
        site: VG,
        fatal: pG,
        details: fG
      } = GG;
      if (!pG)
        if (null === wG || (0, UG.c)(wG.errorKind) || Lb.has(wG.dedupe)) {
          if (Sb >= wb) return;
          Sb++
        } else Lb.add(wG.dedupe);
      const QG = {
        ...fG,
        kind: kG,
        code: YG,
        site: VG,
        fatal: String(pG),
        backend: SG
      };
      LG && (QG.adPreload = "true"), null !== wG && (QG.errorKind = wG.errorKind, QG.fingerprint = wG.fingerprint), bG instanceof Error && "string" === typeof bG.stack && (QG.causeStack = bG.stack.slice(0, 2e3)), (0, yG.rh)(mb(GG, bG), QG)
    }
    let Ub = yb;

    function Yb(GG) {
      const bG = Ub;
      return Ub = GG, bG
    }
    let Vb = () => {};

    function pb(GG) {
      const bG = Vb;
      return Vb = GG, bG
    }
    let fb = "unpicked",
      Qb = !1;

    function Kb(GG) {
      fb = GG
    }

    function hb(GG) {
      Qb = GG
    }
    const db = {
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
      Jb = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      rb = new Set(["unstreamedLoad"]),
      zb = new Set(["linkCensus", "linksReadAfterView"]);
    let Eb = !1;
    const ob = 20,
      Xb = new Map;
    let ub = 0,
      ib = 0;
    const Cb = new Set,
      Wb = new Set;

    function mb(GG, bG) {
      const ZG = Object.assign(new Error(`${GG.code}: ${GG.message}`), {
        name: "WasmClientCrash",
        cause: null !== bG && void 0 !== bG ? bG : void 0
      });
      return bG instanceof Error && bG.stack && (ZG.stack = bG.stack), ZG
    }

    function Ib(GG) {
      var bG, wG;
      const {
        kind: SG,
        code: LG,
        site: yG,
        fatal: kG,
        message: UG,
        error: YG
      } = GG, VG = !1 !== GG.toTransport && !rb.has(SG), pG = !kG && VG && !zb.has(SG), fG = {
        kind: SG,
        code: LG,
        site: yG,
        fatal: kG,
        message: UG,
        details: null !== (bG = GG.details) && void 0 !== bG ? bG : {}
      }, QG = `${LG}@${yG}${void 0===GG.instance?"":`#${GG.instance}`}${kG?"!":""}`, KG = (null !== (wG = Xb.get(QG)) && void 0 !== wG ? wG : 0) + 1;
      if (Xb.set(QG, KG), void 0 !== GG.countAs && 1 === KG && vb(GG.countAs), KG > 1 ? 0 === (KG & KG - 1) && cb((() => {
          console.warn(`${MG} ${LG} at ${yG} reported ${KG} times`)
        })) : pG && ub >= ob ? cb((() => {
          console.warn(`${MG} ${SG} ${LG} at ${yG}: ${UG} (not sent: the session's ${ob} went)`, fG.details, null !== YG && void 0 !== YG ? YG : "")
        })) : (pG && ub++, function(GG, bG, wG, SG) {
          var LG, yG;
          const {
            kind: kG,
            code: UG,
            site: YG,
            fatal: VG,
            message: pG,
            details: fG
          } = GG;
          cb((() => {
            (VG ? console.error : console.warn)(`${MG} ${kG} ${UG} at ${YG}: ${pG}`, fG, null !== bG && void 0 !== bG ? bG : "")
          }));
          const QG = Jb[kG],
            KG = null !== (LG = null !== (yG = db[kG]) && void 0 !== yG ? yG : QG) && void 0 !== LG ? LG : null;
          SG || null === KG || Fb((async () => {
            const {
              reportCappedWasmFailure: GG,
              reportUncappedWasmFailure: bG,
              reportWasmFailure: wG
            } = await ZG.e(213).then((() => ZG(36586)));
            (zb.has(kG) ? bG : void 0 === QG ? wG : GG)(KG, pG, UG)
          }));
          wG && cb((() => {
            Ub(GG, bG)
          }))
        }(fG, YG, VG, void 0 !== GG.countAs)), kG) {
        var hG;
        const bG = null !== (hG = GG.screen) && void 0 !== hG ? hG : {
          text: (0, vG.c)(fG, !0),
          reload: !0
        };
        cb((() => {
          Vb(bG)
        }))
      }
      return fG
    }

    function Fb(GG) {
      lb("counts", (async () => {
        const {
          peekVisitSessionId: bG
        } = await Promise.resolve().then((() => ZG(647)));
        null !== bG() && (await GG(), Eb = !0)
      }))
    }

    function vb(GG) {
      Cb.has(GG.errorKind) || (Cb.add(GG.errorKind), Fb((async () => {
        const {
          reportClientError: bG
        } = await Promise.resolve().then((() => ZG(2920)));
        bG(GG.errorKind, GG.error, GG.code, !0, void 0, GG.fields)
      })))
    }

    function ab(GG, bG) {
      lb("render_lost", (async () => {
        const [{
          reportClientError: wG
        }, {
          CAPPED_COUNTS_VISIT_CAP: SG
        }] = await Promise.all([Promise.resolve().then((() => ZG(2920))), ZG.e(213).then((() => ZG(36586)))]);
        wG("render_lost", bG, GG, !0, SG)
      }))
    }

    function cb(GG) {
      try {
        GG()
      } catch (bG) {
        try {
          console.warn(`${MG} could not send a report`, bG)
        } catch {}
      }
    }

    function lb(GG, bG) {
      try {
        const ZG = bG().catch((bG => {
          console.warn(`${MG} could not send the report to ${GG}`, bG)
        })).finally((() => {
          Wb.delete(ZG)
        }));
        Wb.add(ZG)
      } catch (ZG) {
        console.warn(`${MG} could not send the report to ${GG}`, ZG)
      }
    }
    async function jb(GG) {
      let bG;
      (0, VG.k)();
      const ZG = new Promise((ZG => {
        bG = setTimeout(ZG, GG)
      }));
      await Promise.race([Pb(), ZG]), clearTimeout(bG)
    }
    async function Pb() {
      if (await Promise.allSettled([...Wb]), Eb) try {
        const {
          flushClientAnalyticsEvents: GG
        } = await Promise.resolve().then((() => ZG(1428)));
        await GG()
      } catch (GG) {
        console.warn(`${MG} could not send the counts`, GG)
      }
    }
    async function Mb() {
      for (; Wb.size > 0;) await Promise.allSettled([...Wb])
    }

    function Ab() {
      Xb.clear(), ub = 0, Eb = !1, Sb = 0, Lb.clear(), ib = 0, Cb.clear(), (0, fG.u)()
    }

    function sb(GG) {
      const bG = "object" === typeof GG && null !== GG ? GG.type : GG;
      return "string" !== typeof bG ? "sky not named" : `sky ${JSON.stringify(Array.from(bG).slice(0,Zb).join(""))}`
    }

    function qb(GG, bG, ZG, wG) {
      ib += bG;
      for (const {
          code: kG,
          detail: UG
        }
        of GG) {
        var SG, LG, yG;
        const GG = (0, pG.de)(kG),
          bG = (0, fG.c)(kG, UG),
          YG = null === wG || void 0 === wG ? void 0 : wG(kG, UG),
          VG = void 0 !== (null === bG || void 0 === bG ? void 0 : bG.gpuDetails),
          QG = VG ? null === (SG = (0, dG.q)()) || void 0 === SG ? void 0 : SG.renderer : void 0,
          KG = VG ? ` ${(0,fG.l)()}` : "",
          hG = Array.from([QG && `gpu ${(0,fG.y)(QG)}`, YG].filter(Boolean).join("; ")).slice(0, bb).join(""),
          JG = `core error ${GG}${null!==(LG=null===bG||void 0===bG?void 0:bG.words)&&void 0!==LG?LG:""}${KG}${hG?`: ${hG}`:""}`,
          rG = {
            errorCode: String(kG),
            detail: String(UG),
            droppedBefore: String(ib),
            wasmBuild: ZG.wasm,
            clientVersion: ZG.client,
            ...null === bG || void 0 === bG ? void 0 : bG.gpuDetails
          };
        null !== bG && (0, fG.q)(bG) ? cb((() => {
          console.warn(`${MG} coreError CORE-${GG}: ${JG} (not sent: the session's render warnings of its kind went)`, rG)
        })) : nb(kG) ? cb((() => {
          console.warn(`${MG} coreError CORE-${GG}: ${JG} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, rG)
        })) : Ib({
          kind: eb(kG, UG),
          code: `CORE-${GG}`,
          site: AG,
          fatal: !1,
          message: JG,
          details: rG,
          instance: null !== (yG = null === bG || void 0 === bG ? void 0 : bG.instance) && void 0 !== yG ? yG : gb(kG, UG)
        })
      }
    }

    function nb(GG) {
      if (GG !== pG.R.AudioUnknownSound && GG !== pG.R.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: bG,
        lobbyName: ZG
      } = (0, LG.d)();
      return null !== bG && (!!(0, wG.h)(bG) || GG === pG.R.AudioUnknownSound && (0, SG.i)(bG, ZG))
    }

    function gb(GG, bG) {
      return GG === pG.R.RenderDeviceLost && 0 !== (bG & pG.X.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function eb(GG, bG) {
      return GG === pG.R.JobsHeapGaveUp ? "meshHeap" : (0, fG.h)(GG, bG) ? "linksReadAfterView" : (0, fG.d)(GG, bG) ? "linkCensus" : "coreError"
    }

    function Rb(GG) {
      return (0, cG.i)(GG instanceof lG.e ? GG.trap : GG, CG.I, CG.eb)
    }
    const Tb = "declined=js";

    function Hb(GG) {
      return GG ? {
        labels: [Tb],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function tb(GG, bG, ZG) {
      return Nb(GG, bG, ZG, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Db(GG, bG, ZG) {
      return Nb(GG, bG, ZG, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Nb(GG, bG, ZG, wG, SG) {
      let {
        memoryDetails: LG = {},
        declined: yG = !1
      } = wG;
      const {
        code: kG,
        details: UG,
        message: YG
      } = (0, EG.O)(GG, bG), VG = [];
      Object.assign(UG, (0, jG.e)(GG.error)), null !== ZG && (UG.trapKind = ZG.kind, null !== ZG.panic && (UG.panic = (0, cG.h)(ZG.panic)), ZG.refusedBytes > 0 && (UG.refusedAllocation = String(ZG.refusedBytes)), VG.push((0, cG.m)(ZG.kind, ZG.refusedBytes)));
      const pG = Hb(yG);
      return Ib({
        kind: "crash",
        code: kG,
        site: GG.site,
        fatal: SG,
        message: [...VG, ...pG.labels, YG].join("; "),
        details: {
          ...UG,
          ...pG.details,
          ...LG
        },
        error: GG.error
      })
    }

    function Ob(GG, bG, ZG) {
      return Ib({
        kind: "unsupported",
        code: bG,
        site: sG,
        fatal: !0,
        message: ZG,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: GG,
          status: bG
        },
        screen: {
          text: (0, vG.p)(GG),
          reload: "download" === GG
        }
      })
    }
    const xb = {
      unsupported: "unsupported_js_fallback",
      blockedAfterLoss: "blocked_after_loss",
      noContext: "no_context_js_fallback"
    };

    function Bb(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return Ib({
        kind: "unsupportedFallback",
        code: xb[bG],
        site: sG,
        fatal: !1,
        message: ZG,
        details: {
          ...wG,
          cause: GG,
          status: "unsupported",
          decline: bG,
          fallback: "js"
        }
      })
    }

    function GZ(GG, bG, ZG) {
      return Ib({
        kind: "recovered",
        code: "reprobed" === GG ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: sG,
        fatal: !1,
        message: ZG,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: bG,
          step: GG
        }
      })
    }

    function bZ(GG) {
      return Ib({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: Gb,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: GG.join(",")
        }
      })
    }
    const ZZ = "reload=wasm";

    function wZ(GG, bG, ZG, wG) {
      const SG = Hb("declined" === wG),
        LG = "wasmReload" === wG ? [ZZ] : SG.labels;
      return Ib({
        kind: "unsupported",
        code: bG,
        site: sG,
        fatal: !1,
        message: [...LG, ZG].join("; "),
        details: {
          cause: GG,
          status: bG,
          fallback: "wasmReload" === wG ? "wasmReload" : "js",
          ...SG.details
        }
      })
    }

    function SZ() {
      const {
        code: GG,
        message: bG
      } = aG.b;
      return Ib({
        kind: "unstreamedLoad",
        code: GG,
        site: sG,
        fatal: !1,
        message: bG
      })
    }
    class LZ extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function yZ(GG) {
      return GG instanceof XG.k ? 0 === GG.code ? "JOIN-matchmake" : `JOIN-${GG.code}` : GG instanceof XG.c ? 0 === GG.code ? `JOIN-${GG.stage}` : `JOIN-${GG.stage}-${GG.code}` : GG instanceof oG.d ? "JOIN-gameCode" : GG instanceof LZ ? "JOIN-turnstilePage" : GG instanceof XG.r ? "JOIN-trafficCheck" : GG instanceof rG.g ? "JOIN-timeout" : "JOIN-network"
    }

    function kZ(GG, bG) {
      const ZG = (0, jG.h)(GG),
        wG = {
          wasmBuild: bG.wasm,
          clientVersion: bG.client
        },
        SG = GG instanceof LZ ? {
          text: (0, vG.i)(),
          reload: !1
        } : void 0,
        LG = (0, uG.f)(GG),
        yG = "expected" !== LG;
      return Ib({
        kind: "join",
        code: yZ(GG),
        site: qG,
        fatal: !0,
        message: ZG,
        details: wG,
        error: GG,
        screen: SG,
        toTransport: yG,
        instance: LG
      })
    }

    function UZ(GG, bG, ZG) {
      var wG;
      const SG = (0, uG.f)(GG),
        LG = {
          cause: (GG instanceof XG.c || GG instanceof XG.k) && null !== (wG = GG.serverText) && void 0 !== wG ? wG : "",
          sinceJoinStart: (0, JG.d)(ZG.sinceJoinStartMs),
          game: ZG.game,
          ...(0, JG.k)(),
          wasmBuild: bG.wasm,
          clientVersion: bG.client
        };
      return Ib({
        kind: "pageJoin",
        code: yZ(GG),
        site: qG,
        fatal: !1,
        message: (0, jG.h)(GG),
        details: LG,
        error: GG,
        toTransport: "unrecognised" === SG,
        instance: SG
      })
    }
    const YZ = {
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

    function VZ(GG, bG) {
      let {
        unused: ZG,
        answered: wG,
        heldMs: SG
      } = GG;
      const {
        code: LG,
        message: yG
      } = YZ[ZG], kG = {
        unused: ZG,
        answered: String(wG),
        heldMs: String(SG),
        wasmBuild: bG.wasm,
        clientVersion: bG.client
      };
      return Ib({
        kind: "seat",
        code: LG,
        site: qG,
        fatal: !1,
        message: yG,
        details: kG
      })
    }

    function pZ(GG, bG, ZG) {
      var wG;
      let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (wG = GG.name) && void 0 !== wG ? wG : String(GG.code);
      const LG = {
          closeCode: String(GG.code),
          recognised: String(null !== GG.name),
          closeReason: ZG.closeReason,
          sinceJoined: (0, JG.d)(ZG.sinceJoinedMs),
          game: ZG.game,
          ...(0, JG.k)(),
          wasmBuild: bG.wasm,
          clientVersion: bG.client
        },
        yG = null === GG.name && !(0, JG.f)(GG.code);
      return Ib({
        kind: "disconnect",
        code: SG,
        site: nG,
        fatal: !1,
        message: "Left room",
        details: LG,
        toTransport: yG
      })
    }

    function fZ(GG, bG) {
      const ZG = {
        ...(0, QG.n)(GG),
        wasmBuild: bG.wasm,
        clientVersion: bG.client
      };
      return Ib({
        kind: "disconnect",
        code: `reconnect-${GG.reason}`,
        site: qG,
        fatal: !1,
        message: "Reconnect failed",
        details: ZG
      })
    }

    function QZ(GG) {
      return GG.error instanceof WG.g ? `MODEL-${GG.error.status}` : GG.error instanceof mG.j ? "MODEL-ring" : "MODEL-network"
    }

    function KZ(GG, bG) {
      const ZG = QZ(GG),
        wG = `model file ${GG.file} ${GG.startup?"(startup) ":""}could not load`,
        SG = {
          file: String(GG.file),
          url: GG.url,
          wasmBuild: bG.wasm,
          clientVersion: bG.client
        };
      return Ib({
        kind: GG.startup ? "model" : "modelLate",
        code: ZG,
        site: gG,
        fatal: GG.startup,
        message: wG,
        details: SG,
        error: GG.error
      })
    }

    function hZ(GG, bG) {
      const ZG = {
        wasmBuild: bG.wasm,
        clientVersion: bG.client
      };
      return Ib({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: eG,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: ZG,
        error: GG
      })
    }

    function dZ(GG, bG, ZG) {
      const wG = {
        delayMs: String(bG),
        wasmBuild: ZG.wasm,
        clientVersion: ZG.client
      };
      GG instanceof WG.g && (wG.status = String(GG.status));
      return Ib({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: eG,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: wG,
        error: GG
      })
    }

    function JZ(GG, bG) {
      const ZG = {
        wasmBuild: bG.wasm,
        clientVersion: bG.client
      };
      return Ib({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: eG,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: ZG,
        error: GG
      })
    }

    function rZ(GG, bG) {
      const ZG = {
        wasmBuild: bG.wasm,
        clientVersion: bG.client
      };
      return Ib({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: EG.J,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: ZG,
        error: GG
      })
    }

    function zZ(GG, bG) {
      const ZG = {
        wasmBuild: bG.wasm,
        clientVersion: bG.client
      };
      return Ib({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: NG,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: ZG,
        error: GG
      })
    }

    function EZ(GG, bG, ZG, wG) {
      const SG = {
        wasmBuild: wG.wasm,
        clientVersion: wG.client
      };
      return Ib({
        kind: "texturePackKeptOut",
        code: (0, YG.f)("wasm", GG, bG),
        site: OG,
        fatal: !1,
        message: bG.detail,
        details: SG,
        error: ZG
      })
    }

    function oZ(GG, bG) {
      const {
        frames: ZG,
        acks: wG,
        mask: SG,
        outcome: LG
      } = GG, yG = {
        frames: String(ZG),
        acks: String(wG),
        mask: String(SG),
        outcome: null !== LG && void 0 !== LG ? LG : "resynced",
        wasmBuild: bG.wasm,
        clientVersion: bG.client
      };
      return Ib({
        kind: "recovered",
        code: "rejoined" === LG ? "CORE-eventOverflowRejoin" : "failed" === LG ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: tG,
        fatal: !1,
        message: `the event buffer refused records in ${ZG} frames`,
        details: yG
      })
    }

    function XZ(GG, bG, ZG) {
      return Ib({
        kind: "recovered",
        code: "CORE-workerLost",
        site: GG,
        fatal: !1,
        message: `a ${GG} worker was lost`,
        details: {
          reason: bG,
          wasmBuild: ZG.wasm,
          clientVersion: ZG.client
        }
      })
    }

    function uZ(GG, bG, ZG) {
      const wG = {
        wasmBuild: ZG.wasm,
        clientVersion: ZG.client
      };
      return Ib({
        kind: "recovered",
        code: GG,
        site: EG.t,
        fatal: !1,
        message: bG,
        details: wG
      })
    }

    function iZ(GG, bG) {
      const ZG = {
        lastReason: GG,
        wasmBuild: bG.wasm,
        clientVersion: bG.client
      };
      return Ib({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: EG.J,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: ZG
      })
    }

    function CZ(GG, bG, ZG) {
      return Ib({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: EG.p,
        fatal: !1,
        message: (0, iG.k)(GG) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: GG,
          ...bG,
          wasmBuild: ZG.wasm,
          clientVersion: ZG.client
        }
      })
    }

    function WZ(GG, bG, ZG, wG) {
      var SG, LG;
      const yG = (0, fG.n)(),
        kG = {
          game: GG,
          cause: bG,
          census: null === ZG ? "none" : JSON.stringify(ZG),
          gpu: null !== (SG = null === (LG = (0, dG.q)()) || void 0 === LG ? void 0 : LG.renderer) && void 0 !== SG ? SG : "",
          renderWarned: String(yG),
          browser: (0, fG.l)(),
          wasmBuild: wG.wasm,
          clientVersion: wG.client
        },
        UG = `first view drew no whole terrain in ${IG.g/1e3} s, ${bG}${yG?", render warned":""}`;
      return Ib({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: xG,
        fatal: !1,
        message: UG,
        details: kG
      })
    }

    function mZ(GG, bG, ZG, wG) {
      var SG, LG, yG;
      const UG = null !== (SG = (0, kG.i)(null !== (LG = null === (yG = (0, dG.l)()) || void 0 === yG ? void 0 : yG.renderer) && void 0 !== LG ? LG : null, (0, dG.i)())) && void 0 !== SG ? SG : "unknown",
        YG = null === bG ? "untimed" : `${Math.round(bG)} ms`,
        VG = `frames stalled, ${ZG}, gpu ${(0,fG.y)(UG)}, blocking ${YG}, drawn ${Math.round(GG)} ms apart`,
        pG = {
          gpuModel: UG,
          wasmBuild: wG.wasm,
          clientVersion: wG.client
        };
      return Ib({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: BG,
        fatal: !1,
        message: VG,
        details: pG
      })
    }

    function IZ(GG, bG, ZG) {
      return Ib({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: GG,
        fatal: !1,
        message: `a ${GG} worker did not start`,
        details: {
          waitedMs: String(Math.round(bG)),
          wasmBuild: ZG.wasm,
          clientVersion: ZG.client
        }
      })
    }

    function FZ(GG, bG, ZG) {
      return Ib({
        kind: "recovered",
        code: "CORE-replayFault",
        site: GG,
        fatal: !1,
        message: `the replay's ${GG} failed`,
        details: {
          wasmBuild: ZG.wasm,
          clientVersion: ZG.client
        },
        error: bG
      })
    }
    const vZ = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function aZ(GG) {
      if (0 === GG) return "none";
      const bG = [60, 600, 3600].find((bG => GG < bG));
      return void 0 === bG ? "ge3600" : `lt${bG}`
    }

    function cZ(GG, bG) {
      return null === GG ? "unbound" : (0, KG.k)(bG - GG)
    }

    function lZ(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (GG & pG.X.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (GG & pG.X.LINKS_RUNNING) ? "links running" : "", `frames ${(0,fG.y)(aZ(GG&pG.X.FRAMES))}`, `up ${(0,fG.y)(cZ(bG,ZG))}`].filter(Boolean).join(", ")
    }

    function jZ(GG, bG, ZG) {
      const wG = "lost" === bG && void 0 !== ZG ? ` (${ZG})` : "";
      return `the ${GG} ${vZ[bG]}${wG}`
    }
    const PZ = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function MZ(GG, bG, ZG, wG) {
      var SG;
      let {
        restoreLost: LG = !1,
        adapterRemembered: yG = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, kG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const UG = null === ZG || void 0 === ZG ? void 0 : ZG.message,
        YG = "pipeline_failed" === bG ? bG : ZG instanceof zG.h ? "timeout" : (0, KG.t)("frames_refused" === bG, "string" === typeof UG ? UG : ""),
        VG = null === wG.boundAtMs ? "unbound" : `up${(0,KG.g)(kG-wG.boundAtMs)}`,
        pG = null === wG.adapter ? "no adapter" : (0, KG.p)(wG.adapter),
        fG = `${!0===wG.indirectHangs?" ih":""}${!0===wG.restoresSkipped?" nr":""}${LG?" rl":""}${yG?" ar":""}`,
        QG = `${YG} ${(0,zG.j)()?"hidden":"visible"} ${VG}${fG} ${pG}`;
      if ("webgpu" !== GG || "lost" !== bG && "frames_refused" !== bG) return {
        detail: QG,
        count: void 0
      };
      return {
        detail: QG,
        count: {
          errorKind: "render_lost",
          error: new Error(QG),
          code: (0, KG.w)(YG, null !== (SG = wG.boundAtMs) && void 0 !== SG ? SG : kG, kG).code,
          fields: {
            renderBackend: PG.c.webgpu
          }
        }
      }
    }

    function AZ(GG, bG, ZG) {
      const {
        count: wG
      } = MZ("webgpu", GG, bG, ZG);
      void 0 !== wG && vb(wG)
    }
    const sZ = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function qZ(GG) {
      var bG;
      return null !== (bG = GG instanceof Error ? GG.reason : void 0) && void 0 !== bG ? bG : ""
    }

    function nZ(GG, bG, wG) {
      var SG, LG, yG, UG, YG;
      let {
        from: VG,
        cause: pG = "lost",
        restoreLost: QG = !1,
        adapterRemembered: dG = !1,
        error: JG,
        context: rG = PZ,
        session: zG = sZ
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, EG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: oG,
        count: XG
      } = MZ(GG, pG, JG, rG, {
        restoreLost: QG,
        adapterRemembered: dG
      }, EG), uG = {
        reloadFrom: null !== VG && void 0 !== VG ? VG : "",
        losses: String(bG),
        cause: pG,
        detail: oG,
        vendor: null !== (SG = null === (LG = rG.adapter) || void 0 === LG ? void 0 : LG.vendor) && void 0 !== SG ? SG : "",
        architecture: null !== (yG = null === (UG = rG.adapter) || void 0 === UG ? void 0 : UG.architecture) && void 0 !== yG ? yG : "",
        indirectHangs: String(rG.indirectHangs),
        restoresSkipped: String(rG.restoresSkipped),
        restoreLost: String(QG),
        adapterRemembered: String(dG),
        lossReason: qZ(JG),
        samples: String(zG.samples),
        sunShadows: String(zG.sunShadows),
        renderDistance: String(zG.renderDistance),
        gpuFamily: null !== (YG = (0, kG.d)()) && void 0 !== YG ? YG : "",
        browser: (0, fG.l)(),
        siteUsed: hG.siteUsed,
        wasmBuild: wG.wasm,
        clientVersion: wG.client
      }, iG = "webgpu" !== GG && void 0 !== VG ? function(GG, bG, ZG, wG) {
        return `: ${GG}, ${bG?"restore lost":"not restored"}, up ${(0,fG.y)(cZ(ZG,wG))}`
      }(VG, QG, rG.boundAtMs, EG) : "", CG = `${jZ(GG,pG)}${iG}`, WG = Ib({
        kind: "recovered",
        code: "CORE-renderLost",
        site: TG,
        fatal: !1,
        message: CG,
        details: uG,
        error: JG,
        countAs: XG
      });
      return lb("ga", (async () => {
        const {
          logError: bG
        } = await Promise.resolve().then((() => ZG(2897))), wG = `${KG.e["webgpu"===GG?"WebGPU":"WebGL2"]}\n Error: ${oG}`;
        bG("warning", wG), bG("error", wG)
      })), WG
    }

    function gZ(GG, bG) {
      var ZG, wG;
      const SG = null === GG.name ? "TEXTURE-sources" : null === GG.url ? "TEXTURE-nourl" : GG.error instanceof FG.b ? `TEXTURE-${GG.error.status}` : "TEXTURE-network",
        LG = null === GG.name ? "terrain textures could not load" : `terrain texture ${GG.name} could not load`,
        yG = {
          texture: null !== (ZG = GG.name) && void 0 !== ZG ? ZG : "",
          url: null !== (wG = GG.url) && void 0 !== wG ? wG : "",
          wasmBuild: bG.wasm,
          clientVersion: bG.client
        };
      return Ib({
        kind: "terrainTexture",
        code: SG,
        site: EG.F,
        fatal: !1,
        message: LG,
        details: yG,
        error: GG.error
      })
    }
    const eZ = {
      previewAnimations: {
        site: HG,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: DG,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function RZ(GG, bG, ZG, wG) {
      const {
        site: SG,
        prefix: LG,
        name: yG
      } = eZ[GG], {
        stage: kG,
        error: UG
      } = ZG;
      return Ib({
        kind: GG,
        code: "decode" === kG ? null === UG ? `${LG}-decode` : `${LG}-trap` : UG instanceof WG.g ? `${LG}-${UG.status}` : `${LG}-network`,
        site: SG,
        fatal: !1,
        message: "decode" === kG ? `${yG} did not decode` : `${yG} could not load`,
        details: {
          url: bG,
          wasmBuild: wG.wasm,
          clientVersion: wG.client
        },
        error: UG
      })
    }
    const TZ = "staleBuild";

    function HZ(GG, bG, ZG) {
      const wG = {
          failedSite: GG.site,
          url: GG.url,
          from: GG.from,
          sameBuild: String(GG.from === bG),
          reloadMs: String(Math.max(0, Date.now() - GG.at)),
          wasmBuild: ZG.wasm,
          clientVersion: ZG.client
        },
        SG = `reloaded into a newer build after ${GG.site} failed to load: ${GG.error}`;
      return Ib({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: TZ,
        fatal: !1,
        message: SG,
        details: wG
      })
    }
  },
  41190: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG,
      h: () => yG
    });
    var wG = ZG(4818);
    const SG = 3e4;
    class LG {
      constructor(GG) {
        this.NQ = GG, this.waitedMs = 0, this.lastMs = null
      }
      frame(GG, bG) {
        if (bG) return !0;
        const ZG = null === this.lastMs ? 0 : GG - this.lastMs;
        return this.lastMs = GG, ZG <= 900 && (this.waitedMs += ZG), !(this.waitedMs < SG) && (this.NQ(), !0)
      }
    }

    function yG(GG, bG) {
      return 0 === (GG & wG.X.ChunkRequested) ? "no_chunk_request" : 0 === (GG & wG.X.ChunkStored) ? "chunk_not_stored" : 0 === (GG & wG.X.MeshLanded) ? "not_meshed" : null === bG ? "no_frame_drawn" : 0 === bG.terrainParts ? "no_terrain_parts" : bG.terrainCompiling > 0 ? "terrain_compiling" : bG.terrainOpaque + bG.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40971: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG,
      e: () => JG,
      f: () => hG,
      g: () => dG,
      k: () => fG,
      o: () => QG,
      q: () => VG,
      r: () => pG,
      v: () => KG
    });
    class wG extends Error {
      constructor(GG) {
        super(`the join's code did not load: ${GG instanceof Error?GG.message:String(GG)}`, {
          cause: GG
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === GG || void 0 === GG ? void 0 : GG.request
      }
    }
    let SG = null,
      LG = null,
      yG = null;
    const kG = [];
    let UG = null;

    function YG(GG, bG) {
      try {
        GG(bG)
      } catch (ZG) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ZG)
      }
    }

    function VG() {
      return UG
    }

    function pG(GG) {
      kG.push(GG), null !== UG && YG(GG, UG)
    }

    function fG(GG) {
      return SG ??= Promise.all([ZG.e(73), ZG.e(98), ZG.e(226), ZG.e(78), ZG.e(227), ZG.e(201), ZG.e(97), ZG.e(246), ZG.e(273), ZG.e(199), ZG.e(214), ZG.e(191), ZG.e(198), ZG.e(193), ZG.e(144), ZG.e(88), ZG.e(122), ZG.e(252), ZG.e(57)]).then((() => ZG(43025))).then((bG => {
        bG.loadAudio(GG), UG = bG;
        for (const GG of kG) YG(GG, bG);
        return bG
      })).catch((GG => {
        throw SG = null, GG
      })), SG
    }
    async function QG(GG, bG) {
      try {
        const ZG = await fG(GG);
        await ZG.loadClientGame(bG)
      } catch (ZG) {
        throw new wG(ZG)
      }
    }

    function KG(GG, bG) {
      LG = {
        running: GG,
        shell: bG
      }
    }

    function hG() {
      return yG
    }
    async function dG(GG) {
      const bG = LG;
      if ((null === bG || void 0 === bG ? void 0 : bG.running) !== GG) throw new Error("the core's session has ended");
      const ZG = await fG(bG.shell.audio).catch((GG => {
        throw new wG(GG)
      }));
      if (null !== yG) return yG;
      if (LG !== bG || GG.isStopped) throw new Error("the core stopped while the game code loaded");
      if (yG = ZG.startGameHost(GG, bG.shell), null === yG) throw new Error("the core's shared tables didn't read, so the game can't start");
      return yG
    }

    function JG() {
      null !== yG && (null !== UG ? UG.endGameHost(yG) : yG.closeGame()), yG = null, LG = null
    }
  },
  41104: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG
    });
    const wG = {
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
  41065: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG,
      g: () => LG,
      h: () => yG,
      i: () => SG,
      k: () => QG,
      l: () => VG,
      n: () => UG,
      q: () => fG,
      r: () => pG,
      t: () => kG
    });
    var wG = ZG(1778);
    const SG = new Uint8Array([12]),
      LG = 2e3,
      yG = 257;

    function kG(GG) {
      const bG = new Uint8Array(4);
      return new DataView(bG.buffer).setUint32(0, GG, !0), bG
    }
    class UG extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class YG extends Error {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(GG), this.stage = bG, this.code = ZG, this.serverText = wG, this.socketOpened = SG, this.name = "JoinError"
      }
    }
    class VG extends Error {
      constructor(GG) {
        super(GG), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class pG extends Error {
      constructor(GG) {
        super((0, wG.f)(GG), {
          cause: GG
        }), this.name = "TrafficCheckError"
      }
    }
    class fG extends Error {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(GG, {
          cause: ZG
        }), this.networkLost = bG, this.httpStatus = wG, this.name = "SeatRequestError"
      }
    }
    class QG extends Error {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(GG), this.code = bG, this.serverText = ZG, this.name = "MatchmakeError"
      }
    }
  },
  41072: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => QG,
      f: () => fG,
      g: () => KG
    });
    var wG = ZG(2602),
      SG = ZG(2970),
      LG = ZG(39470),
      yG = ZG(36826),
      kG = ZG(39478),
      UG = ZG(41065),
      YG = ZG(41077);
    const VG = "seat reservation expired.",
      pG = "early_leave";

    function fG(GG) {
      if (GG instanceof yG.g) return "expected";
      if (GG instanceof UG.q) return GG.networkLost ? "expected" : "unrecognised";
      if (GG instanceof UG.c) {
        if ("closed" === GG.stage && (0 === GG.code || (0, SG.f)(GG.code))) return "expected";
        if ("roomError" === GG.stage && (GG.serverText === VG || GG.serverText === pG)) return "expected"
      }
      return GG instanceof UG.c || GG instanceof UG.k ? null === (0, kG.k)(GG.code).name ? "unrecognised" : "known" : (0, wG.h)(GG) ? "expected" : GG instanceof UG.r || GG instanceof YG.e ? "known" : "unrecognised"
    }

    function QG(GG) {
      return GG instanceof yG.g ? "timedOut" : "expected" !== fG(GG) || (0, wG.h)(GG) || GG instanceof UG.c && 1001 === GG.code ? void 0 : "failed"
    }

    function KG(GG) {
      return GG instanceof UG.c && "attach" !== GG.stage ? (0, LG.c)(GG, "closed" !== GG.stage || GG.socketOpened ? "socket" : "socket_unopened") : GG instanceof UG.q ? {
        at: "seat_lost",
        code: GG.httpStatus
      } : GG instanceof UG.k || GG instanceof yG.g ? (0, LG.c)(GG, GG instanceof yG.g ? GG.leg : "seat") : void 0
    }
  },
  41170: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => UG,
      f: () => YG,
      g: () => QG,
      j: () => pG
    });
    var wG = ZG(2872),
      SG = ZG(4810),
      LG = ZG(41175),
      yG = ZG(41182),
      kG = ZG(36606);
    const UG = 395,
      YG = 2147483648,
      VG = new Uint8Array(0);
    class pG extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class fG extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class QG {
      constructor(GG, bG, ZG) {
        var wG, SG, yG, kG;
        let UG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = GG, this.build = bG, this.onFailure = ZG, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.vQ = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (wG = UG.fetchFile) && void 0 !== wG ? wG : GG => (0, LG.g)(GG), this.onWritten = null !== (SG = UG.onWritten) && void 0 !== SG ? SG : null, this.onTaken = null !== (yG = UG.onTaken) && void 0 !== yG ? yG : null, this.onPackFileFailed = null !== (kG = UG.onPackFileFailed) && void 0 !== kG ? kG : null, this.startupLeft = new Set(GG.startup);
        for (const LG of GG.startup) this.request(LG)
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
      drawnUrl(GG) {
        return this.drawn.get(GG)
      }
      request(GG) {
        const bG = this.pending.get(GG);
        if (!0 === (null === bG || void 0 === bG ? void 0 : bG.ask)) return;
        const ZG = this.hQ(GG, !0);
        ZG.recheck = void 0 !== bG;
        const wG = this.drawn.get(GG);
        if (void 0 !== wG) return ZG.Ik = !0, ZG.recheck = !0, void this.fetch(GG, ZG, wG);
        this.fetchWanted(GG, ZG)
      }
      async refresh() {
        const GG = ++this.refreshes,
          bG = new Set;
        for (const yG of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const GG of yG) 0 === (GG & LG.f) && bG.add(GG);
        const ZG = [...bG];
        let wG;
        try {
          wG = await Promise.all(ZG.map((GG => this.wanted(GG))))
        } catch {
          return null
        }
        if (GG !== this.refreshes) return null;
        const SG = {
          resent: 0,
          refetched: 0,
          delivered: ZG.filter((GG => this.drawn.has(GG))).length
        };
        return ZG.forEach(((GG, bG) => {
          const {
            url: ZG,
            inPlaceOf: LG
          } = wG[bG], yG = this.pending.get(GG);
          if (void 0 !== yG) {
            if (yG.Ik || void 0 === yG.url) return void(yG.recheck = !0);
            if (yG.url === ZG) return;
            SG.refetched++;
            const bG = this.hQ(GG, yG.ask);
            return bG.recheck = yG.recheck, void this.fetch(GG, bG, ZG, LG)
          }
          const kG = this.written.get(GG);
          void 0 === kG ? this.drawn.get(GG) !== (null !== ZG && void 0 !== ZG ? ZG : void 0) && (SG.resent++, this.fetch(GG, this.hQ(GG, !1), ZG, LG)) : kG.url !== (null !== ZG && void 0 !== ZG ? ZG : "") && (kG.attempt.recheck = !0)
        })), SG
      }
      taken(GG, bG) {
        const ZG = new Set,
          wG = new Set;
        for (const SG of Array.from(bG)) 0 === (SG & YG) ? ZG.add(SG) : wG.add((SG & ~YG) >>> 0);
        for (const [SG, LG] of this.written) LG.seq > GG || (this.written.delete(SG), ZG.has(LG.seq) ? this.refusedFile(SG, LG) : this.takenFile(SG, LG, !LG.empty && !wG.has(LG.seq)))
      }
      takenFile(GG, bG, ZG) {
        const {
          attempt: wG
        } = bG;
        if (ZG) {
          var SG;
          this.drawn.set(GG, bG.url), this.undrawn.delete(GG), void 0 !== wG.inPlaceOf ? this.refusedPack.set(GG, wG.inPlaceOf) : wG.Ik || this.refusedPack.delete(GG), null === (SG = this.onTaken) || void 0 === SG || SG.call(this, GG, !0);
          const ZG = this.pending.get(GG);
          if (!0 === (null === ZG || void 0 === ZG ? void 0 : ZG.Ik) && ZG.url !== bG.url) {
            const ZG = this.hQ(GG, !0);
            ZG.Ik = !0, ZG.recheck = !0, this.fetch(GG, ZG, bG.url)
          }
        } else {
          var LG;
          this.drawn.has(GG) || this.undrawn.add(GG), null === (LG = this.onTaken) || void 0 === LG || LG.call(this, GG, !1)
        }
        wG.recheck && this.resendIfChanged(GG)
      }
      refusedFile(GG, bG) {
        var ZG, wG;
        if (null === (ZG = this.onTaken) || void 0 === ZG || ZG.call(this, GG, !1), this.refusedPack.set(GG, bG.url), this.pending.has(GG)) return void(null === (wG = this.onPackFileFailed) || void 0 === wG || wG.call(this, GG, KG(bG.url)));
        const SG = this.hQ(GG, bG.attempt.ask);
        SG.recheck = bG.attempt.recheck, this.afterRefusal(GG, SG, bG.url)
      }
      async afterRefusal(GG, bG, ZG) {
        var wG;
        let SG;
        try {
          SG = await this.wanted(GG)
        } catch (LG) {
          return void(this.pending.get(GG) === bG && this.giveUp(GG, bG, ZG, LG))
        }
        this.pending.get(GG) === bG && (SG.inPlaceOf !== ZG ? bG.ask || (null !== (wG = SG.url) && void 0 !== wG ? wG : void 0) !== this.drawn.get(GG) ? this.fetch(GG, bG, SG.url, SG.inPlaceOf) : this.pending.delete(GG) : this.fallBack(GG, bG, ZG, KG(ZG)))
      }
      hQ(GG, bG) {
        const ZG = {
          url: void 0,
          ask: bG,
          Ik: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(GG, ZG);
        for (let wG = this.ready.length - 1; wG >= 0; wG--) this.ready[wG].file === GG && this.ready.splice(wG, 1);
        return ZG
      }
      async wanted(GG) {
        const bG = await this.files.url(GG);
        return null !== bG && this.refusedPack.get(GG) === bG ? {
          url: await this.files.shippedUrl(GG),
          inPlaceOf: bG
        } : {
          url: bG,
          inPlaceOf: void 0
        }
      }
      fetchWanted(GG, bG) {
        const ZG = this.files.url(GG);
        ZG instanceof Promise ? ZG.then((ZG => {
          this.fetchFound(GG, bG, ZG)
        }), (ZG => {
          this.pending.get(GG) === bG && this.giveUp(GG, bG, "", ZG)
        })) : this.fetchFound(GG, bG, ZG)
      }
      fetchFound(GG, bG, ZG) {
        null !== ZG && this.refusedPack.get(GG) === ZG ? Promise.resolve(this.files.shippedUrl(GG)).then((wG => {
          this.fetch(GG, bG, wG, ZG)
        }), (wG => {
          this.pending.get(GG) === bG && this.giveUp(GG, bG, ZG, wG)
        })) : this.fetch(GG, bG, ZG)
      }
      fetch(GG, bG, ZG, wG) {
        this.pending.get(GG) === bG && (bG.url = ZG, bG.inPlaceOf = wG, null !== ZG ? this.load(GG, bG, ZG) : this.buildFile(GG, bG, "", VG))
      }
      load(GG, bG, ZG) {
        const wG = this.vQ.get(GG);
        (null === wG || void 0 === wG ? void 0 : wG.url) !== ZG ? this.fetchFile(ZG).then((wG => {
          var SG, LG;
          this.pending.get(GG) === bG && (this.keptTotal += wG.byteLength - (null !== (SG = null === (LG = this.vQ.get(GG)) || void 0 === LG ? void 0 : LG.glb.byteLength) && void 0 !== SG ? SG : 0), this.vQ.set(GG, {
            url: ZG,
            glb: wG
          }), this.buildFile(GG, bG, ZG, wG))
        }), (wG => {
          this.pending.get(GG) === bG && this.fallBack(GG, bG, ZG, wG)
        })) : this.buildFile(GG, bG, ZG, wG.glb)
      }
      buildFile(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const yG = wG.byteLength > 0 && (0, LG.k)(ZG) ? (GG | LG.e) >>> 0 : GG;
        this.queueRecord(GG, bG, ZG, wG, this.build(yG, wG), SG)
      }
      queueRecord(GG, bG, ZG, wG, LG, kG) {
        LG.then((LG => {
          if (this.pending.get(GG) !== bG) return;
          if (SG.w + (0, SG.ve)(LG.byteLength) > SG.Pc) return void this.ringRefused(GG, bG, ZG, new pG(`${hG(ZG)}'s record is ${LG.byteLength-yG.b} bytes, past the cmd ring's ${SG.Pc}`), kG);
          const UG = {
            file: GG,
            url: ZG,
            payload: LG,
            glb: wG,
            attempt: bG
          };
          kG ? this.ready.unshift(UG) : this.ready.push(UG)
        }))
      }
      async fallBack(GG, bG, ZG, wG) {
        var SG;
        let LG = null,
          yG = wG;
        try {
          LG = await this.files.shippedUrl(GG)
        } catch (kG) {
          yG = kG
        }
        this.pending.get(GG) === bG && (null !== LG && LG !== ZG ? (null === (SG = this.onPackFileFailed) || void 0 === SG || SG.call(this, GG, wG), bG.ask || this.drawn.get(GG) !== LG ? (bG.url = LG, bG.inPlaceOf = ZG, this.load(GG, bG, LG)) : this.pending.delete(GG)) : this.giveUp(GG, bG, ZG, yG))
      }
      ringRefused(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, LG.k)(ZG) ? this.fallBack(GG, bG, ZG, wG): this.giveUp(GG, bG, ZG, wG, SG)
      }
      giveUp(GG, bG, ZG, SG) {
        let LG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: GG,
          url: hG(ZG),
          error: SG,
          startup: this.startupLeft.has(GG)
        }), bG.ask || !this.drawn.has(GG) ? (0, wG.U)(SG) ? this.queueRecord(GG, bG, ZG, VG, Promise.resolve((0, yG.n)(GG, (0, kG.h)(SG))), LG) : this.buildFile(GG, bG, ZG, VG, LG) : this.pending.delete(GG)
      }
      async resendIfChanged(GG) {
        var bG;
        if (0 !== (GG & LG.f)) return;
        let ZG;
        try {
          ZG = await this.wanted(GG)
        } catch {
          return
        }(null !== (bG = ZG.url) && void 0 !== bG ? bG : void 0) === this.drawn.get(GG) || this.pending.has(GG) || this.written.has(GG) || this.fetch(GG, this.hQ(GG, !1), ZG.url, ZG.inPlaceOf)
      }
      drain(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === GG) return;
        let ZG = 0,
          wG = 0;
        for (; wG < this.ready.length && ZG < 262144;) {
          const kG = this.ready[wG];
          if (this.written.has(kG.file)) {
            wG++;
            continue
          }
          const VG = this.nextSeq;
          new DataView(kG.payload.buffer, kG.payload.byteOffset, kG.payload.byteLength).setUint32(yG.f, VG, !0);
          const fG = kG.attempt.Ik && kG.glb.byteLength > 0 && this.drawn.get(kG.file) === kG.url;
          if (GG(UG, fG ? 1 : 0, kG.payload)) {
            if (this.nextSeq = VG >= YG - 1 ? 1 : VG + 1, this.ready.splice(wG, 1), ZG += kG.payload.byteLength, this.pending.delete(kG.file), this.startupLeft.delete(kG.file), this.written.set(kG.file, {
                seq: VG,
                url: kG.url,
                empty: 0 === kG.glb.byteLength,
                attempt: kG.attempt
              }), kG.glb.byteLength > 0) try {
              var SG;
              null === (SG = this.onWritten) || void 0 === SG || SG.call(this, kG.file, kG.glb)
            } catch (LG) {
              console.warn("ModelFeed: reading the file's images failed", LG)
            }
          } else {
            if (null === bG || 0 === kG.glb.byteLength || bG(kG.payload.byteLength)) return;
            this.ready.splice(wG, 1);
            const GG = new pG(`${hG(kG.url)}'s record is ${kG.payload.byteLength-yG.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(kG.file, kG.attempt, kG.url, GG, !0)
          }
        }
      }
    }

    function KG(GG) {
      return new fG(`presentation refused ${hG(GG)}`)
    }

    function hG(GG) {
      return GG.startsWith("data:") ? `${GG.slice(0,Math.min(Math.max(GG.indexOf(","),5),64))},...` : GG
    }
  },
  41175: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      f: () => LG,
      g: () => VG,
      k: () => kG,
      o: () => YG,
      r: () => UG
    });
    var wG = ZG(2872),
      SG = ZG(3180);
    const LG = 2147483648,
      yG = 1073741824;

    function kG(GG) {
      return GG.startsWith("data:")
    }

    function UG(GG) {
      let {
        onTableFailed: bG,
        packUrl: ZG
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const wG = YG();
      wG.catch((GG => {
        null === bG || void 0 === bG || bG(GG)
      }));
      const SG = async bG => (await wG).fileUrl((bG & ~LG) >>> 0, GG);
      return {
        startup: [],
        url: async GG => {
          if (ZG && 0 === (GG & LG)) {
            const bG = await wG,
              SG = bG.filePackName(GG),
              LG = null === SG || "lifeform" === bG.fileSource(GG) ? null : ZG(SG);
            if (null !== LG) return LG
          }
          return SG(GG)
        },
        shippedUrl: SG
      }
    }

    function YG() {
      return ZG.e(42).then((() => ZG(43080)))
    }
    async function VG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return GG.startsWith("data:") ? (0, SG.d)(GG.slice(GG.indexOf(",") + 1), bG) : (0, wG.K)(GG, {
        spare: bG
      })
    }
  },
  41182: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG,
      f: () => VG,
      j: () => QG,
      l: () => dG,
      n: () => KG,
      o: () => fG,
      r: () => hG
    });
    const wG = 826427981,
      SG = 1,
      LG = 2,
      yG = 44,
      kG = 46,
      UG = 58,
      YG = 8,
      VG = 4;

    function pG(GG, bG, ZG) {
      const SG = (new TextEncoder).encode(ZG),
        LG = YG + 4 * (bG.length + 2),
        yG = new Uint8Array(LG + (SG.byteLength + 3 & -4)),
        kG = new DataView(yG.buffer);
      return kG.setUint32(0, GG, !0), kG.setUint32(YG, wG, !0), bG.forEach(((GG, bG) => {
        kG.setUint32(YG + 4 * (bG + 1), GG, !0)
      })), kG.setUint32(LG - 4, SG.byteLength, !0), yG.set(SG, LG), yG
    }

    function fG(GG, bG) {
      return pG(GG, [LG], bG)
    }

    function QG(GG, bG) {
      return pG(GG, [SG, kG], bG)
    }

    function KG(GG, bG) {
      return pG(GG, [SG, UG], bG)
    }

    function hG(GG, bG) {
      return pG(GG, [SG, yG], bG)
    }

    function dG(GG) {
      const bG = YG;
      if (GG.byteLength < bG + 12) return !1;
      const ZG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength);
      return ZG.getUint32(bG, !0) === wG && ZG.getUint32(bG + 4, !0) === SG && ZG.getUint32(bG + 8, !0) === yG
    }
  },
  41112: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG,
      i: () => VG,
      k: () => yG,
      m: () => UG
    });
    var wG = ZG(36606);
    class SG extends Error {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${GG}: the module trapped${ZG?" in an earlier call":""}: ${String(bG)}`, {
          cause: bG
        }), this.site = GG, this.trap = bG, this.earlier = ZG, this.name = "ModuleTrapError", bG instanceof Error && void 0 !== bG.stack && (this.stack = `${this.name}: ${this.message}\n${bG.stack}`)
      }
    }
    const LG = new WeakMap;

    function yG(GG) {
      return LG.has(GG)
    }

    function kG(GG, bG) {
      LG.has(GG) || LG.set(GG, bG)
    }

    function UG(GG, bG) {
      return !!(0, wG.g)(bG) && (kG(GG, bG), !0)
    }
    const YG = [
      ["error", GG => GG.error],
      ["unhandledrejection", GG => GG.reason]
    ];

    function VG(GG, bG, ZG) {
      let yG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return LG.has(GG) ? Promise.reject(new SG(bG, LG.get(GG), !0)) : new Promise(((LG, UG) => {
        const VG = ZG => {
            kG(GG, ZG), QG(), UG(new SG(bG, ZG))
          },
          pG = GG => {
            GG instanceof WebAssembly.RuntimeError ? VG(GG) : (QG(), UG(GG))
          },
          fG = YG.map((GG => {
            let [bG, ZG] = GG;
            return [bG, GG => {
              const bG = ZG(GG);
              (0, wG.g)(bG) && VG(bG)
            }]
          })),
          QG = () => {
            for (const [GG, bG] of fG) null === yG || void 0 === yG || yG.removeEventListener(GG, bG)
          };
        for (const [GG, bG] of fG) null === yG || void 0 === yG || yG.addEventListener(GG, bG);
        let KG;
        try {
          KG = ZG()
        } catch (hG) {
          return void pG(hG)
        }
        KG.then((GG => {
          QG(), LG(GG)
        }), pG)
      }))
    }
  },
  41092: (GG, bG, ZG) => {
    ZG.d(bG, {
      C: () => qG,
      E: () => cG,
      I: () => iG,
      K: () => vG,
      L: () => gG,
      N: () => aG,
      P: () => jG,
      Q: () => FG,
      S: () => eG,
      c: () => uG,
      e: () => EG,
      i: () => PG,
      j: () => lG,
      l: () => zG,
      m: () => XG,
      n: () => JG,
      q: () => WG,
      u: () => IG,
      y: () => nG
    });
    var wG = ZG(200),
      SG = ZG(17),
      LG = ZG(3543),
      yG = ZG(326),
      kG = ZG(29),
      UG = ZG(41100),
      YG = ZG(36810),
      VG = ZG(41119),
      pG = (ZG(41150), ZG(41214)),
      fG = ZG(41136);
    const QG = "wasmJoinBuild";
    let KG = null,
      hG = null,
      dG = null;

    function JG(GG) {
      dG = GG
    }
    let rG = !1;

    function zG() {
      rG = !0
    }

    function EG() {
      return rG
    }
    let oG = !1;

    function XG() {
      oG = !0
    }

    function uG() {
      return oG
    }

    function iG() {
      return dG
    }
    let CG = null;

    function WG(GG) {
      CG = GG, (0, yG.c)(GG)
    }
    const mG = "wasmClientRenderLost";

    function IG() {
      kG.l.setItem(mG, !0)
    }

    function FG() {
      return !0 === kG.l.getItem(mG)
    }

    function vG() {
      return CG
    }

    function aG() {
      if (null === KG) {
        kG.h.removeItem("wasmLastPick"), kG.h.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, yG.i)(), KG = (0, UG.B)(VG.h).then((GG => (null === GG || (0, UG.q)(GG) || (hG = pG.c[GG.backend], SG.e.followGameGpu("webgpu" === GG.backend ? GG.adapter : null), "webgpu" === GG.backend && (0, fG.e)()), GG)))
      }
      return KG
    }

    function cG() {
      return hG
    }

    function lG(GG) {
      return GG ? GG.load() : Promise.resolve().then((function() {
        var GG = new Error("Cannot find module '@bloxd/wasm/client'");
        throw GG.code = "MODULE_NOT_FOUND", GG
      })).then((GG => GG.bloxdWasmClient))
    }

    function jG(GG) {
      kG.h.setItem(QG, GG)
    }
    async function PG() {
      if (null === VG.h) return lG(null);
      const GG = kG.h.getItem(QG);
      let bG;
      return null === GG ? bG = void 0 !== (0, wG.c)(VG.h, "webgpu") && (0, UG.y)() ? "webgpu" : "webgl" : "none" === GG ? bG = null : "string" === typeof GG && void 0 !== (0, wG.c)(VG.h, GG) ? bG = GG : (console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(GG)}, is none of this client's: guessing WebGL2's`), bG = "webgl"), null === bG ? null : VG.h[bG]()
    }
    let MG = null,
      AG = null,
      sG = null;

    function qG() {
      return MG ??= aG().then((async GG => {
        const bG = null !== GG && !(0, UG.q)(GG),
          ZG = {
            indirectHangs: bG && await (0, UG.L)(GG, window.location.search),
            storagePullBreaks: bG && (0, UG.T)(GG, window.location.search),
            splitPassBreaks: bG && (0, UG.S)(GG, window.location.search),
            earlySky: bG && (0, UG.I)(GG, window.location.search),
            instancedTerrain: bG ? (0, UG.N)(GG, window.location.search) : null,
            cellLight: bG && await (0, LG.g)("cellLight"),
            framesAhead: (0, UG.j)(window.location.search),
            webGpuRestores: !bG || (0, UG.W)(GG, (0, YG.e)()),
            bufferCopiesCrash: bG && (0, UG.H)(GG, window.location.search)
          };
        return AG = ZG.indirectHangs, sG = !ZG.webGpuRestores, ZG
      })), MG
    }

    function nG() {
      return AG
    }

    function gG() {
      return sG
    }
    async function eG() {
      const GG = null === KG ? null : await KG;
      return null !== GG && (0, UG.q)(GG) && (KG = null, MG = null, AG = null, sG = null), aG()
    }
  },
  41374: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG
    });
    var wG = ZG(36643),
      SG = ZG(41248),
      LG = ZG(36810);

    function yG(GG, bG) {
      return (0, wG.l)(GG, SG.c, {
        ...bG,
        memoryMaximumBytes: (0, LG.o)()
      })
    }
  },
  41115: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => YG,
      f: () => kG,
      h: () => VG,
      j: () => yG
    });
    var wG = ZG(346),
      SG = ZG(620);
    let LG;

    function yG(GG) {
      var bG;
      const ZG = LG;
      return LG = void 0, null !== (bG = UG(GG)) && void 0 !== bG ? bG : ZG
    }

    function kG(GG) {
      try {
        const bG = UG(GG);
        void 0 !== bG && (LG = bG, (0, SG.g)((0, wG.p)(bG.reason, bG.message)))
      } catch (bG) {
        console.warn("Couldn't keep the WebGPU loss's cause", bG)
      }
    }

    function UG(GG) {
      var bG;
      const ZG = null === GG || void 0 === GG || null === (bG = GG.jLG) || void 0 === bG ? void 0 : bG.call(GG),
        wG = null === GG || void 0 === GG ? void 0 : GG.lLG();
      if (void 0 === wG) return;
      const SG = new Error(wG);
      return void 0 !== ZG && (SG.reason = ZG), SG
    }

    function YG(GG) {
      return GG instanceof Error ? GG : void 0
    }

    function VG(GG, bG) {
      return "lost" !== GG && "frames_refused" !== GG ? {} : (0, wG.p)("frames_refused" === GG ? GG : null === bG || void 0 === bG ? void 0 : bG.reason, null === bG || void 0 === bG ? void 0 : bG.message)
    }
  },
  41133: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => iG,
      d: () => zG,
      h: () => rG,
      l: () => uG,
      n: () => IG,
      q: () => mG,
      u: () => FG,
      y: () => oG
    });
    var wG = ZG(4818),
      SG = ZG(41136);
    const LG = 1,
      yG = 18,
      kG = 19,
      UG = 20,
      YG = 21,
      VG = {
        [LG]: "link",
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
        [yG]: "retry linked",
        [kG]: "fallback linked",
        [UG]: "fallback failed",
        [YG]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function pG(GG, bG, ZG) {
      return GG === yG ? "program retry" : GG === LG ? "program link" : GG === YG ? "program link stall" : GG === kG || GG === UG ? `program ${bG} ${ZG}` : "program"
    }
    const fG = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      QG = {
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
      KG = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      hG = {
        11: "none read after view",
        12: "some read after view"
      },
      dG = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...hG
      },
      JG = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function rG(GG, bG) {
      return GG === wG.m.RenderSerialLinks && void 0 !== hG[bG]
    }

    function zG(GG, bG) {
      return GG === wG.m.RenderSerialLinks && void 0 !== JG[15 & bG]
    }
    const EG = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function oG(GG) {
      return String(GG).replace(/\d/g, (GG => String.fromCharCode(97 + Number(GG))))
    }

    function XG(GG, bG) {
      var ZG;
      return null !== (ZG = GG[bG]) && void 0 !== ZG ? ZG : oG(bG)
    }

    function uG() {
      return oG((0, SG.d)())
    }

    function iG(GG, bG) {
      switch (GG) {
        case wG.m.RenderSceneRowNotDrawn:
          return {
            words: ` ${XG(QG,bG)}`, instance: String(bG), group: String(GG)
          };
        case wG.m.RenderChunkMeshNotDrawn: {
          const ZG = 0 === (128 & bG) ? "" : " shortage",
            wG = bG >>> 8;
          return {
            words: ` ${XG(KG,127&bG)}${ZG}${0===wG?"":` kind ${oG(wG)}`}`,
            instance: String(bG),
            group: String(GG)
          }
        }
        case wG.m.RenderInternal: {
          const ZG = XG(fG, 255 & bG),
            wG = bG >>> 8 & 255;
          if (0 === wG) return {
            words: ` ${ZG}`,
            instance: String(bG),
            group: String(GG)
          };
          const SG = XG(VG, wG),
            LG = bG >>> 16;
          return {
            words: ` ${ZG} ${SG} program ${oG(LG)}`,
            instance: `${ZG} ${SG} ${LG}`,
            group: pG(wG, SG, ZG),
            gpuDetails: {
              programFailure: SG,
              program: String(LG)
            }
          }
        }
        case wG.m.RenderSerialLinks: {
          if (zG(GG, bG)) {
            const GG = function(GG) {
              const bG = (bG, ZG) => oG(GG >>> bG & (1 << ZG) - 1),
                ZG = GG >>> 30 & 1 ? " restored" : "";
              return `link census ${JG[15&GG]} linked ${bG(22,8)} failed ${bG(4,6)} retried ${bG(10,6)} fallback ${bG(16,6)}${ZG}`
            }(bG);
            return {
              words: ` ${GG}`,
              instance: String(15 & bG),
              group: "link census",
              gpuDetails: {
                linkCensus: GG
              }
            }
          }
          const ZG = XG(dG, bG);
          return {
            words: ` ${ZG}`,
            instance: String(bG),
            group: String(GG),
            gpuDetails: {
              serialLinks: ZG
            }
          }
        }
        case wG.m.RenderGlErrorAfterRestore: {
          const ZG = XG(EG, 65535 & bG),
            wG = bG >>> 16,
            SG = 65535 !== wG;
          return {
            words: ` ${ZG}${SG?` program ${oG(wG)}`:""}`,
            instance: String(bG),
            group: String(GG),
            gpuDetails: SG ? {
              glError: ZG,
              program: String(wG)
            } : {
              glError: ZG
            }
          }
        }
        default:
          return null
      }
    }
    const CG = 2,
      WG = new Map;

    function mG(GG) {
      let {
        group: bG,
        instance: ZG
      } = GG, wG = WG.get(bG);
      return void 0 === wG && (wG = [], WG.set(bG, wG)), !wG.includes(ZG) && (wG.length >= CG || (wG.push(ZG), !1))
    }

    function IG() {
      return WG.size > 0
    }

    function FG() {
      WG.clear()
    }
  },
  41119: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      h: () => LG
    });
    var wG = ZG(41122);
    const SG = new WeakSet;
    const LG = {
        webgpu: async () => (function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === GG || SG.has(GG.prototype)) return;
          SG.add(GG.prototype);
          const bG = GG.prototype.requestDevice;
          GG.prototype.requestDevice = function(GG) {
            var ZG;
            const SG = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.requiredLimits) && void 0 !== ZG ? ZG : {},
              LG = Object.keys(SG).filter((GG => !(GG in this.limits)));
            if (0 === LG.length) return bG.call(this, GG);
            const yG = Object.fromEntries(Object.entries(SG).filter((GG => {
              let [bG] = GG;
              return bG in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${LG.join(", ")}`), (0, wG.reportDroppedRequiredLimits)(LG), bG.call(this, {
              ...GG,
              requiredLimits: yG
            })
          }
        }(), (await ZG.e(8).then((() => ZG(43049)))).bloxdWasmWebgpu),
        webgl: async () => (await ZG.e(6).then((() => ZG(43062)))).bloxdWasmWebgl,
        webgl1: async () => (await ZG.e(7).then((() => ZG(43067)))).bloxdWasmWebgl1
      },
      yG = async () => (await ZG.e(5).then((() => ZG(43073)))).compileAnimationPackInWasm
  },
  41077: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => JG,
      h: () => dG,
      i: () => oG
    });
    var wG = ZG(6636),
      SG = ZG(19),
      LG = ZG(4309),
      yG = ZG(4818),
      kG = ZG(6629),
      UG = ZG(41084);

    function YG(GG, bG) {
      const ZG = (0, kG.e)(bG.variants);
      return GG.setShaderPack(ZG.variantFlags, ZG.hooks, ZG.moduleCodes, (0, UG.v)(bG.layers), UG.j[bG.Uk], bG.keepCircleShadows)
    }
    const VG = 0,
      pG = 1,
      fG = 2,
      QG = "shaderPack:failedToCompile",
      KG = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      hG = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function dG(GG, bG) {
      var ZG;
      const wG = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.reason) && void 0 !== ZG ? ZG : "none";
      return KG.has(wG) ? {
        messageKey: bG ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === wG && "override" === (null === GG || void 0 === GG ? void 0 : GG.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: hG.has(wG) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class JG extends Error {
      constructor(GG) {
        super(`the shader pack can't run in this game: ${GG}`), this.messageKey = GG, this.name = "ShaderPackJoinError"
      }
    }
    const rG = "strict";
    class zG {
      constructor(GG) {
        this.deps = GG, this.pagePack = void 0, this.loaded = null, this.Uk = rG, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = GG.load().catch((bG => (GG.warn("the shader pack could not load: the game draws without it", bG), {
          status: "none"
        }))).then((GG => (this.loaded = GG, "active" === GG.status && (this.handOverToPreviews(GG), null !== GG.harnessPolicy && (this.Uk = GG.harnessPolicy, this.handOver())), GG)))
      }
      async join(GG) {
        this.leave();
        const bG = this.game,
          [ZG, SG] = await Promise.all([this.pagePack, this.policyOf(GG)]);
        if (bG !== this.game || "none" === ZG.status) return null;
        const LG = "active" === ZG.status ? ZG.pack.variants : ZG.variants,
          yG = (0, wG.m)(LG, SG);
        if (yG && "active" === ZG.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (yG) {
          const GG = this.cantRun(ZG, SG);
          if (null !== GG) return GG
        } else if ("blocked" === ZG.status || null === this.deps.core) return null;
        return this.Uk = SG, this.handOver(), yG && this.refused ? QG : (this.joined = !0, this.offInThisGame = !yG, null)
      }
      async replay(GG) {
        const bG = await this.join(GG);
        null === bG ? this.playable() : this.deps.failInGame(bG)
      }
      cantRun(GG, bG) {
        const {
          core: ZG,
          noWebGpu: wG
        } = this.deps;
        if ("blocked" === GG.status) {
          return "shaderPack:failedUnchecked" === GG.messageKey && null === ZG && wG.noAdapter ? wG.messageKey : GG.messageKey
        }
        return this.refused || this.failedPolicies.has(bG) ? QG : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var GG;
        return this.runsInJoinedGame() && "active" === (null === (GG = this.loaded) || void 0 === GG ? void 0 : GG.status) ? function(GG, bG) {
          const ZG = GG.filter((GG => (0, wG.m)([GG], bG))),
            SG = GG => ZG.some((bG => bG[GG]));
          return {
            sceneDepth: SG("sceneDepth"),
            sunShadow: SG("sunShadow"),
            airShadow: SG("airShadow")
          }
        }(this.loaded.pack.variants, this.Uk) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(QG) : (null !== this.couldntRun ? this.notify(LG.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Uk) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(GG) {
        for (const {
            code: bG,
            detail: ZG
          }
          of GG)
          if (bG === yG.m.RenderShaderPackNotRun) switch (255 & ZG) {
            case VG:
              this.refused = !0, this.failed();
              break;
            case pG:
              this.failedPolicies.add(this.Uk), this.failed();
              break;
            case fG:
              this.failedModelPolicies.add(this.Uk), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(QG) : this.failedWhileJoining = !0)
      }
      fail(GG) {
        this.leave(), this.deps.failInGame(GG)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(GG, bG) {
        const ZG = this.game;
        this.deps.notify(GG, (() => ZG === this.game && this.joined), bG)
      }
      handOver() {
        var GG;
        const {
          core: bG
        } = this.deps;
        null !== bG && "active" === (null === (GG = this.loaded) || void 0 === GG ? void 0 : GG.status) && (YG(bG, {
          ...this.loaded.pack,
          Uk: this.Uk
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(GG) {
        let {
          pack: bG,
          harnessPolicy: ZG
        } = GG;
        const {
          previews: wG
        } = this.deps;
        null !== wG && YG(wG, {
          ...bG,
          Uk: null !== ZG && void 0 !== ZG ? ZG : rG
        })
      }
      policyOf(GG) {
        return this.deps.policyOf(GG).catch((GG => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", GG), rG)))
      }
    }
    const EG = "wasmShaderPackNotice";

    function oG(GG, bG, ZG, wG) {
      return SG.l.subscribe(EG, (GG => {
        let {
          translationKey: bG,
          stillCurrent: ZG,
          reasonKey: wG
        } = GG;
        ZG() && SG.l.xh("chat", (0, LG.l)(bG, wG))
      })), new zG({
        load: XG,
        policyOf: uG,
        core: GG,
        previews: bG,
        noWebGpu: ZG,
        notify: (GG, bG, ZG) => {
          const wG = {
            translationKey: GG,
            stillCurrent: bG,
            reasonKey: ZG
          };
          SG.l.xh(EG, wG, !0)
        },
        failInGame: GG => {
          SG.l.xh(LG.h, GG)
        },
        warn: wG
      })
    }
    async function XG() {
      const [{
        shaderPackPage: GG,
        harnessShaderPackMode: bG
      }, {
        shaderPackTextures: wG
      }] = await Promise.all([ZG.e(117).then((() => ZG(39633))), ZG.e(118).then((() => ZG(6627)))]), SG = await GG.load();
      return "active" !== SG.status ? SG : {
        status: "active",
        pack: {
          variants: SG.pack.variants,
          layers: wG().layers,
          keepCircleShadows: SG.pack.keepCircleShadows
        },
        harnessPolicy: bG()
      }
    }
    async function uG(GG) {
      var bG;
      const [{
        shaderPackPage: wG,
        harnessShaderPackMode: SG
      }, {
        getShaderPackPolicy: LG
      }] = await Promise.all([ZG.e(117).then((() => ZG(39633))), ZG.e(93).then((() => ZG(41687)))]);
      return await wG.load(), null !== (bG = SG()) && void 0 !== bG ? bG : LG(GG)
    }
  },
  41195: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      d: () => dG,
      f: () => UG,
      g: () => YG,
      k: () => VG,
      n: () => fG
    });
    var wG = ZG(41199),
      SG = ZG(41205);
    const LG = "atlas:",
      yG = 3e4;
    class kG extends Error {
      constructor(GG, bG) {
        super(`fetching ${GG} answered HTTP ${bG}`), this.url = GG, this.status = bG, this.name = "TerrainTextureFetchError"
      }
    }

    function UG(GG) {
      if (!GG.startsWith(LG)) return null;
      const bG = Number(GG.slice(LG.length));
      return Number.isInteger(bG) && bG >= 0 ? bG : null
    }
    async function YG() {
      const GG = await ZG.e(207).then((() => ZG(34575)));
      return {
        atlasSheets: GG.blockAtlasUrls,
        texture: bG => {
          var ZG, wG, LG;
          return null !== (ZG = null !== (wG = null !== (LG = GG.animatedBlockTextures[bG]) && void 0 !== LG ? LG : GG.rotatedBlockTextures[bG]) && void 0 !== wG ? wG : SG.b[bG]) && void 0 !== ZG ? ZG : null
        }
      }
    }
    async function VG(GG) {
      const bG = new AbortController,
        ZG = setTimeout((() => {
          bG.abort(new DOMException(`${GG} took over ${yG} ms`, "TimeoutError"))
        }), yG);
      let wG;
      try {
        const ZG = await fetch(GG, {
          signal: bG.signal
        });
        if (!ZG.ok) throw new kG(GG, ZG.status);
        wG = await ZG.blob()
      } finally {
        clearTimeout(ZG)
      }
      const SG = await createImageBitmap(wG, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return fG(SG)
      } finally {
        SG.close()
      }
    }
    const pG = 8192;

    function fG(GG) {
      const {
        width: bG,
        height: ZG
      } = GG, SG = Math.max(1, Math.min(ZG, pG)), LG = (0, wG.f)(bG, SG, {
        willReadFrequently: !0
      });
      if (!LG) throw new Error("no 2D context to read the texture back");
      LG.globalCompositeOperation = "copy";
      const yG = new Uint8Array(bG * ZG * 4);
      for (let wG = 0; wG < ZG; wG += SG) {
        const kG = Math.min(SG, ZG - wG);
        LG.drawImage(GG, 0, wG, bG, kG, 0, 0, bG, kG), yG.set(LG.getImageData(0, 0, bG, kG).data, wG * bG * 4)
      }
      return {
        width: bG,
        height: ZG,
        pixels: yG
      }
    }
    async function QG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VG;
      const wG = [],
        SG = await Promise.all(GG.map((async GG => {
          var SG, yG;
          const kG = null !== (SG = null === (yG = bG.decoded) || void 0 === yG ? void 0 : yG.call(bG, GG)) && void 0 !== SG ? SG : null,
            YG = null === kG ? function(GG, bG) {
              if (GG.startsWith(LG)) {
                var ZG;
                const wG = UG(GG);
                return null === wG ? null : null !== (ZG = bG.atlasSheets[wG]) && void 0 !== ZG ? ZG : null
              }
              return bG.texture(GG)
            }(GG, bG) : null,
            VG = null !== kG && void 0 !== kG ? kG : null === YG ? null : ZG(YG);
          if (null === VG) return wG.push({
            name: GG,
            url: YG,
            error: new Error(`no URL for terrain texture ${GG}`)
          }), null;
          try {
            const bG = await VG;
            if (bG.pixels.byteLength !== bG.width * bG.height * 4) throw new Error(`decoded ${bG.pixels.byteLength} bytes for ${bG.width}x${bG.height} texels`);
            return {
              name: GG,
              texture: bG
            }
          } catch (pG) {
            return wG.push({
              name: GG,
              url: YG,
              error: pG
            }), null
          }
        }))),
        yG = SG.filter((GG => null !== GG)),
        kG = new Uint32Array(2 * yG.length);
      yG.forEach(((GG, bG) => {
        let {
          texture: ZG
        } = GG;
        kG[2 * bG] = ZG.width, kG[2 * bG + 1] = ZG.height
      }));
      return {
        handOver: {
          names: yG.map((GG => {
            let {
              name: bG
            } = GG;
            return bG
          })),
          textures: yG.map((GG => {
            let {
              texture: bG
            } = GG;
            return bG.pixels
          })),
          sizes: kG
        },
        failures: wG
      }
    }
    const KG = [2e3, 1e4, 3e4, 6e4, 12e4];

    function hG() {}
    class dG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KG,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = GG, this.retryMs = bG, this.keepBelow = ZG, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YG,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const wG = ++this.started,
          SG = {
            decode: ZG.decode,
            wholeAtlas: ZG.wholeAtlas
          };
        return this.loadAndHandOver(bG, SG, GG, (() => {
          var GG;
          return wG < this.landed || !1 === (null === (GG = ZG.wanted) || void 0 === GG ? void 0 : GG.call(ZG))
        }), {
          onTaken: (GG, ZG) => {
            this.landed = wG, this.current = {
              mine: wG,
              sources: bG,
              load: SG,
              vQ: GG,
              failed: ZG
            }
          }
        })
      }
      restore(GG) {
        var bG;
        const ZG = this.current;
        if (null === ZG) return Promise.resolve(null);
        if ((null === (bG = this.restoring) || void 0 === bG ? void 0 : bG.mine) === ZG.mine) return this.restoring.done;
        const wG = {
          mine: ZG.mine,
          done: this.restoreLanded(ZG, GG).finally((() => {
            this.restoring === wG && (this.restoring = null)
          }))
        };
        return this.restoring = wG, wG.done
      }
      async restoreLanded(GG, bG) {
        const ZG = () => this.landed !== GG.mine,
          {
            vQ: wG
          } = GG;
        if (null !== wG) return this.stopped() ? null : this.core.setTerrainTextures(wG.names, wG.textures, wG.sizes);
        let SG = bG;
        for (let LG = 0;; LG++) {
          const bG = this.retryMs.at(LG),
            wG = {
              allOrNothingExcept: void 0 === bG ? void 0 : GG.failed
            },
            yG = await this.loadAndHandOver(GG.sources, GG.load, SG, ZG, wG);
          if (!1 !== yG || void 0 === bG || this.stopped()) return yG;
          if (SG = hG, await new Promise((GG => {
              setTimeout(GG, bG)
            })), ZG()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const LG = this.core.terrainTextureNames();
        var yG;
        if (0 === LG.length) return null === (yG = SG.onTaken) || void 0 === yG || yG.call(SG, null, new Set), !0;
        let kG, YG;
        try {
          kG = await GG(), YG = await QG(LG, kG, bG.decode)
        } catch (dG) {
          return wG() ? null : (ZG({
            name: null,
            url: null,
            error: dG
          }), !1)
        }
        if (wG() || this.stopped()) return null;
        for (const UG of YG.failures) ZG(UG);
        const VG = SG.allOrNothingExcept;
        if (void 0 !== VG && YG.failures.some((GG => {
            let {
              name: bG
            } = GG;
            return null === bG || !VG.has(bG)
          })) || !0 === bG.wholeAtlas && YG.failures.some((GG => {
            let {
              name: bG
            } = GG;
            return null === bG || null !== UG(bG)
          }))) return !1;
        const {
          handOver: pG
        } = YG, fG = function(GG) {
          return GG.textures.reduce(((GG, bG) => GG + bG.byteLength), 0)
        }(pG) < this.keepBelow, KG = this.core.setTerrainTextures(pG.names, pG.textures, pG.sizes, fG ? void 0 : () => {
          !async function(GG, bG) {
            await bG;
            for (const {
                buffer: wG
              }
              of GG) {
              const GG = wG;
              var ZG;
              if (!GG.detached) null === (ZG = GG.transfer) || void 0 === ZG || ZG.call(GG, 0)
            }
          }(pG.textures, kG.heldUntil)
        });
        if (KG) {
          var hG;
          const GG = new Set(YG.failures.flatMap((GG => {
            let {
              name: bG
            } = GG;
            return null === bG ? [] : [bG]
          })));
          null === (hG = SG.onTaken) || void 0 === hG || hG.call(SG, fG ? pG : null, GG)
        }
        return KG
      }
    }
  },
  37193: (GG, bG, ZG) => {
    function wG(GG) {
      return "fetch" === GG || "timeout" === GG || "integrity" === GG ? "download" : "browser"
    }
    ZG.d(bG, {
      b: () => SG,
      c: () => yG,
      f: () => UG,
      i: () => kG,
      m: () => wG,
      p: () => LG
    });
    const SG = "https://discord.gg/playbloxd";

    function LG(GG) {
      return "download" === GG ? {
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

    function yG(GG, bG) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: bG ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: GG.code
        },
        discordLink: bG,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function kG() {
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

    function UG(GG, bG, ZG) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: ZG ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: GG.reason
        },
        discordLink: null === GG.name,
        confirm: bG ? "general:reconnect" : GG.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  34429: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG,
      f: () => pG,
      j: () => VG
    });
    var wG = ZG(273),
      SG = ZG(80),
      LG = ZG(111),
      yG = ZG(105),
      kG = ZG(626);
    const UG = new Set(["mali_bifrost"]);

    function YG() {
      if ("android" !== (0, SG.pageOperatingSystem)() || kG.i || (0, kG.e)("webgl_default")) return;
      const GG = (0, LG.l)(),
        bG = null === GG ? (0, wG.q)() : (0, wG.h)(GG.vendor, GG.renderer);
      return null !== bG && UG.has(bG) ? GG => (0, wG.m)((0, yG.c)(GG).vendor, bG) : void 0
    }

    function VG(GG, bG) {
      return GG ? () => !0 : bG()
    }
    async function pG(GG) {
      try {
        const bG = VG(GG, YG),
          ZG = navigator.gpu;
        if (void 0 === bG || void 0 === ZG) return !1;
        const wG = await (0, yG.l)(ZG, {
          seed: !1,
          compatibility: bG
        });
        return "string" !== typeof wG && wG.compatibility && !(0, yG.g)(wG.adapter)
      } catch (bG) {
        return console.error("WebGPU compatibility-mode adapter request failed.", bG), !1
      }
    }
  },
  41136: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG,
      e: () => YG
    });
    var wG = ZG(80),
      SG = ZG(39165);
    const LG = "webgpuPipeline";

    function yG(GG) {
      return GG.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let kG = null;

    function UG() {
      if (null === kG) try {
        GG = (0, wG.getBrowserName)(), bG = (0, wG.getBrowserVersion)(), ZG = (0, wG.getOperatingSystem)(), SG = (0, wG.getOperatingSystemVersion)(), kG = `${GG.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===bG?"unknown":yG(bG)}-${ZG}${void 0===SG?"":`_${yG(SG)}`}`
      } catch (LG) {
        console.warn("The user agent couldn't be read for its browser code", LG), kG = "unknown"
      }
      var GG, bG, ZG, SG;
      return kG
    }

    function YG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const bG = `WGPU-${UG()}`,
        wG = (GG, wG) => {
          const {
            reason: yG,
            message: kG
          } = wG;
          if ((0, SG.u)(String(kG))) return;
          const UG = {
            pipeline: null !== GG && void 0 !== GG ? GG : "",
            reason: String(yG),
            browserMessage: String(kG)
          };
          Promise.resolve().then((() => ZG(41122))).then((GG => {
            let {
              reportCrash: ZG
            } = GG;
            ZG({
              kind: "coreError",
              code: bG,
              site: LG,
              fatal: !1,
              message: `${UG.pipeline} ${UG.reason}: ${UG.browserMessage}`,
              details: UG,
              error: wG
            })
          })).catch((GG => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", GG)
          }))
        },
        yG = GG.createRenderPipelineAsync;
      GG.createRenderPipelineAsync = function(GG) {
        return yG.call(this, GG).catch((bG => {
          throw wG(GG.label, bG), bG
        }))
      };
      const kG = GG.createComputePipelineAsync;
      GG.createComputePipelineAsync = function(GG) {
        return kG.call(this, GG).catch((bG => {
          throw wG(GG.label, bG), bG
        }))
      }
    }
  },
  41256: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/bloxd_wasm_models_bg.357f4673ec199af40944.wasm"
  },
  41252: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/bloxd_wasm_workers_bg.2f814b1ca28aae22617b.wasm"
  },
  41248: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      c: () => wG
    });
    const wG = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new ZG.U(ZG(41252))
      }
    };
    const SG = {
      name: "bloxd_wasm_models",
      url: function() {
        return new ZG.U(ZG(41256))
      }
    }
  },
  6629: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => EG,
      h: () => oG,
      k: () => rG,
      o: () => JG
    });
    var wG = ZG(6636);
    const SG = 6,
      LG = 3,
      yG = 1,
      kG = 2,
      UG = 4,
      YG = 8,
      VG = 16,
      pG = 32,
      fG = 64,
      QG = 128,
      KG = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function hG(GG) {
      if (!GG) return 0;
      const bG = KG.indexOf(GG);
      if (bG <= 0) throw new Error(`"${GG}" is not a shader pack hook function`);
      return bG
    }

    function dG(GG) {
      if (0 === GG) return null;
      const bG = KG[GG];
      if (void 0 === bG) throw new Error(`${GG} is not a shader pack hook function id`);
      return bG
    }

    function JG(GG) {
      const bG = wG.e.length;
      return {
        strict: GG >= bG,
        program: wG.e[GG % bG]
      }
    }

    function rG(GG) {
      return Number(GG.strict) * wG.e.length + wG.e.indexOf(GG.program)
    }

    function zG(GG) {
      return "" === GG ? [] : GG.split(" ")
    }

    function EG(GG) {
      const bG = {
        variantFlags: new Uint8Array(SG),
        hooks: new Uint8Array(SG * LG),
        moduleCodes: Array(SG).fill(""),
        reads: Array(2 * SG).fill("")
      };
      for (const ZG of GG) {
        const GG = rG(ZG.key),
          wG = (GG, bG) => null === ZG.hooks.surface || ZG.reads.fragment.includes(GG) ? 0 : bG;
        bG.variantFlags[GG] = (ZG.sceneDepth ? yG : 0) | (ZG.movesVertices ? kG : 0) | (ZG.sunShadow ? UG : 0) | (ZG.airShadow ? YG : 0) | (ZG.discards ? VG : 0) | wG("localPosition", pG) | wG("enchantSpeed", fG) | wG("enchantTier", QG), bG.hooks[GG * LG] = hG(ZG.hooks.vertex), bG.hooks[GG * LG + 1] = hG(ZG.hooks.surface), bG.hooks[GG * LG + 2] = hG(ZG.hooks.light), bG.moduleCodes[GG] = ZG.moduleCode, bG.reads[2 * GG] = ZG.reads.vertex.join(" "), bG.reads[2 * GG + 1] = ZG.reads.fragment.join(" ")
      }
      return bG
    }

    function oG(GG) {
      const {
        hooks: bG,
        moduleCodes: ZG,
        reads: wG
      } = GG;
      return Array.from(GG.variantFlags, ((GG, SG) => {
        const pG = SG * LG;
        return {
          key: JG(SG),
          hooks: {
            vertex: dG(bG[pG]),
            surface: dG(bG[pG + 1]),
            light: dG(bG[pG + 2])
          },
          moduleCode: ZG[SG],
          sceneDepth: 0 !== (GG & yG),
          sunShadow: 0 !== (GG & UG),
          airShadow: 0 !== (GG & YG),
          movesVertices: 0 !== (GG & kG),
          discards: 0 !== (GG & VG),
          reads: {
            vertex: zG(wG[2 * SG]),
            fragment: zG(wG[2 * SG + 1])
          }
        }
      }))
    }
  },
  41084: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => KG,
      b: () => SG,
      f: () => wG,
      h: () => fG,
      i: () => VG,
      j: () => dG,
      l: () => LG,
      m: () => kG,
      q: () => UG,
      u: () => yG,
      v: () => hG,
      x: () => QG
    });
    const wG = 3,
      SG = 0,
      LG = 1,
      yG = 2,
      kG = {
        uniform: 3,
        Wf: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      UG = 10,
      YG = "BloxdPackInputs",
      VG = "bloxdPackInputs",
      pG = [{
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
      fG = 80;

    function QG() {
      const GG = pG.map((GG => {
        let {
          name: bG,
          type: ZG
        } = GG;
        return `    ${bG}: ${ZG},\n`
      })).join("");
      return `struct ${YG} {\n${GG}}\n@group(${wG}) @binding(${SG}) var<uniform> ${VG}: ${YG};\n`
    }

    function KG(GG, bG) {
      const ZG = new DataView(GG, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, fG),
        [wG, SG, LG, yG, kG, UG] = pG;
      ZG.setFloat32(wG.offset, bG.seconds, !0), ZG.setUint32(SG.offset, bG.lit ? 1 : 0, !0);
      for (let YG = 0; YG < 3; YG++) ZG.setInt32(LG.offset + 4 * YG, bG.renderOffset[YG], !0), ZG.setFloat32(yG.offset + 4 * YG, bG.XGG[YG], !0), ZG.setFloat32(kG.offset + 4 * YG, bG.eyePosition[YG], !0), ZG.setFloat32(UG.offset + 4 * YG, bG.shadowDirection[YG], !0)
    }

    function hG(GG) {
      const bG = new Uint32Array(Math.max(1, GG.length));
      return GG.forEach(((GG, ZG) => {
        let {
          id: wG,
          rotation: SG
        } = GG;
        bG[ZG] = 65535 & wG | (3 & SG) << 16
      })), bG
    }
    const dG = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6636: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      i: () => yG,
      m: () => kG,
      q: () => SG,
      u: () => LG
    });
    const wG = ["terrain", "liquid", "model"];

    function SG() {
      const GG = [];
      for (const bG of [!1, !0])
        for (const ZG of wG) GG.push({
          strict: bG,
          program: ZG
        });
      return GG
    }

    function LG(GG) {
      return `${GG.strict?"strict":"allow"}.${GG.program}`
    }

    function yG(GG) {
      return !GG.hooks.vertex && !GG.hooks.surface && !GG.hooks.light
    }

    function kG(GG, bG) {
      return "off" !== bG && (null === GG || GG.some((GG => GG.key.strict === ("strict" === bG) && !yG(GG))))
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);