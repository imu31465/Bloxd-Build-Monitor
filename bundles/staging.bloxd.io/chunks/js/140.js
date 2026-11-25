export const id = 140;
export const ids = [140];
export const modules = {
  38816: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => cB,
      e: () => zB,
      h: () => FB,
      l: () => qB,
      p: () => hB,
      q: () => nB,
      t: () => GB,
      x: () => NB
    });
    var TB = ZB(339),
      JB = ZB(1787);
    const oB = "A valid external Instance reference no longer exists.";

    function GB(BB) {
      return BB.includes(oB)
    }
    const vB = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      kB = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const cB = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function nB(BB, IB) {
      return BB ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(BB) {
        var IB;
        const ZB = null !== (IB = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(BB)) && void 0 !== IB ? IB : /failed with ([A-Z][A-Z0-9_]+)/.exec(BB);
        return ZB ? ZB[1] : GB(BB) ? "gpu_process_lost" : "other"
      }(IB)
    }

    function hB(BB) {
      return `${(null===BB||void 0===BB?void 0:BB.vendor)||"unknown vendor"} ${(null===BB||void 0===BB?void 0:BB.architecture)||"unknown architecture"}`
    }

    function zB(BB) {
      return yB(BB)[1]
    }

    function FB(BB) {
      return yB(BB)[2]
    }

    function NB(BB, IB, ZB) {
      const JB = (0, TB.g)(),
        oB = null !== JB && JB >= IB,
        GB = document.hidden ? "hidden" : oB ? "shown" : "visible",
        vB = oB ? ZB - JB : null;
      return {
        page: null === vB ? GB : `${GB}${zB(vB)}`,
        code: `${BB}_${null===vB?GB:`${GB}_${FB(vB)}`}_${gB(ZB)}`
      }
    }

    function gB(BB) {
      if ((0, JB.g)()) return "ad_open";
      const IB = (0, JB.e)();
      return null === IB ? "ad_none" : `ad_${FB(BB-IB.endedAt)}_${IB.pageHid?"h":"v"}`
    }

    function qB(BB) {
      return UB(kB, BB)[1]
    }

    function yB(BB) {
      return UB(vB, BB)
    }

    function UB(BB, IB) {
      var ZB;
      return null !== (ZB = BB.find((BB => {
        let [ZB] = BB;
        return IB < ZB
      }))) && void 0 !== ZB ? ZB : BB[BB.length - 1]
    }
  },
  40701: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB,
      g: () => nB,
      k: () => GB,
      n: () => JB,
      r: () => vB,
      u: () => cB
    });
    class TB extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function JB(BB) {
      return BB instanceof RangeError && /call stack/i.test(BB.message) || BB instanceof Error && "InternalError" === BB.name && /recursion/i.test(BB.message)
    }
    const oB = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function GB(BB) {
      var IB;
      return BB instanceof WebAssembly.RuntimeError || BB instanceof TB || JB(BB) && oB.test(null !== (IB = BB.stack) && void 0 !== IB ? IB : "")
    }

    function vB(BB, IB) {
      if (GB(BB)) throw BB;
      console.error(IB, BB)
    }

    function kB(BB, IB, ZB, JB, oB) {
      if (IB % JB !== 0 || IB + ZB > BB.byteLength) throw new TB(`${oB}: ${ZB} bytes at ${IB}, ${JB}-aligned, outside ${BB.byteLength} bytes of memory`)
    }

    function cB(BB, IB, ZB, TB, JB) {
      return 0 === ZB ? null : (kB(IB, ZB, TB * BB.BYTES_PER_ELEMENT, BB.BYTES_PER_ELEMENT, JB), new BB(IB, ZB, TB))
    }

    function nB(BB, IB, ZB, TB, JB) {
      return 0 === IB ? null : (kB(BB, IB, ZB, TB, JB), new DataView(BB, IB, ZB))
    }
  },
  40759: (BB, IB, ZB) => {
    ZB.d(IB, {
      $: () => oI,
      A: () => EB,
      D: () => fB,
      G: () => SB,
      J: () => VB,
      N: () => DB,
      O: () => II,
      Q: () => zI,
      U: () => BI,
      W: () => KB,
      X: () => ZI,
      db: () => kI,
      e: () => iB,
      eb: () => aB,
      f: () => FI,
      g: () => yI,
      i: () => vI,
      l: () => hI,
      o: () => JI,
      p: () => nI,
      t: () => cI,
      v: () => qI,
      y: () => bB
    });
    var TB = ZB(342),
      JB = ZB(267),
      oB = ZB(273),
      GB = ZB(20),
      vB = ZB(2973),
      kB = ZB(714),
      cB = ZB(4701),
      nB = ZB(2941),
      hB = ZB(3640),
      zB = ZB(105),
      FB = ZB(339),
      NB = ZB(36),
      gB = ZB(331),
      qB = ZB(129),
      yB = ZB(682),
      UB = ZB(138),
      WB = ZB(132),
      dB = ZB(4975),
      CB = ZB(40765),
      QB = ZB(1860),
      sB = ZB(40768),
      wB = ZB(34134),
      OB = ZB(40771);
    const YB = "bloxd-webgpuOffAfterLoss",
      iB = "context:webgl",
      pB = "probe:threw";

    function aB(BB) {
      let IB;
      try {
        IB = BB.getContext("webgl", {
          powerPreference: UB.e
        })
      } catch {
        IB = null
      }
      if (null === IB) return null;
      let ZB = null;
      try {
        const BB = IB.getParameter(IB.MAX_TEXTURE_SIZE);
        ZB = "number" === typeof BB && BB > 0 ? BB : null
      } catch {
        ZB = null
      }
      try {
        var TB;
        null === (TB = IB.getExtension("WEBGL_lose_context")) || void 0 === TB || TB.loseContext()
      } catch {}
      return ZB
    }
    const HB = new Set(["android_arm", "chromeos_other", "windows_intel_low", "ios"]);

    function MB() {
      return "ios" === (0, zB.getOperatingSystem)() ? "ios" : "other"
    }
    const jB = "mali_valhall",
      PB = new Set(["nvidia_pre_turing"]),
      RB = new Set(["intel_gen7_8"]);

    function rB(BB, IB) {
      return HB.has(BB) ? "android_arm" === BB && IB === jB ? "webgpu_default" : "webgl_default" : null
    }

    function mB(BB) {
      return function(BB) {
        try {
          return BB()
        } catch {
          return null
        }
      }((() => {
        var IB, ZB, TB, GB;
        const vB = null !== (IB = null === (ZB = BB.info) || void 0 === ZB ? void 0 : ZB.vendor) && void 0 !== IB ? IB : "";
        return "windows" === (0, zB.getOperatingSystem)() && "" !== vB && "intel" !== (0, zB.normaliseGpuVendor)(vB) ? null : ((0, zB.seedGpuVendor)(vB), rB((0, JB.j)(), (0, oB.f)(vB, null !== (TB = null === (GB = BB.info) || void 0 === GB ? void 0 : GB.architecture) && void 0 !== TB ? TB : "")))
      }))
    }

    function XB() {
      var BB;
      return {
        gpu: null !== (BB = navigator.gpu) && void 0 !== BB ? BB : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(BB) {
          let IB, ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CB.b;
          try {
            IB = BB.getContext("webgl")
          } catch {
            IB = null
          }
          if (null === IB) return [iB];
          const TB = [];
          try {
            for (const JB of ZB.extensions) null === IB.getExtension(JB) && TB.push(JB);
            for (const [JB, oB] of Object.entries(ZB.limits)) {
              const BB = IB[JB],
                ZB = "number" === typeof BB ? IB.getParameter(BB) : null;
              ("number" !== typeof ZB || ZB < oB) && TB.push(`limit:${JB}`)
            }
            const BB = IB.getShaderPrecisionFormat(IB.VERTEX_SHADER, IB.HIGH_FLOAT);
            (null === BB || BB.precision < ZB.vertexHighFloatBits) && TB.push("precision:vertex_high_float")
          } catch {
            TB.push(pB)
          }
          try {
            var JB;
            null === (JB = IB.getExtension("WEBGL_lose_context")) || void 0 === JB || JB.loseContext()
          } catch {}
          return TB
        }(document.createElement("canvas")),
        offAfterLoss: BB => eB((() => BB ? (0, gB.K)() : GB.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: BB => eB((() => (0, qB.f)(BB))),
        intelGen9: BB => eB((() => (0, qB.o)(BB))),
        storeIntelGen9Verdict: BB => {
          NB.m.setItem(qB.G, BB)
        },
        gpuClassWebGlArm: mB,
        storeGpuClassVerdict: BB => {
          NB.m.setItem(qB.E, BB)
        },
        gpuClassOnWebGl: BB => (0, yB.b)(BB),
        webGlDefaultFamily: BB => RB.has((0, oB.f)(BB.vendor, BB.architecture)),
        storeWebGlDefaultFamilyVerdict: BB => {
          NB.m.setItem(qB.L, BB)
        },
        override: () => LB(),
        claimed: () => uB((0, kB.l)()),
        webGpuSetting: () => {
          const BB = NB.m.getItem(TB.wc);
          return "boolean" === typeof BB ? BB : null
        },
        heldBack: () => yB.c,
        storeHoldbackSpared: BB => {
          NB.m.setItem(qB.C, BB)
        },
        intelGen9OnWebGl: () => yB.f,
        oN: () => eB((() => (0, hB.g)(zB.featureFlags.settings.canUseShaderPacks))),
        windows: () => eB((() => "windows" === (0, zB.getOperatingSystem)())),
        defaultCompatibility: wB.c
      }
    }

    function LB() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, vB.t)("render") && "webgl1" === (0, vB.r)("renderer")) return "webgl1";
      const IB = [() => new URLSearchParams(window.location.search).get(nB.b), () => NB.m.getItem(nB.c), () => {
        const IB = localStorage.getItem(YB);
        return null !== IB && BB && localStorage.removeItem(YB), "1" === IB ? "webgl2" : null
      }];
      for (const ZB of IB) {
        let BB = null;
        try {
          BB = uB(ZB())
        } catch {}
        if (null !== BB) return BB
      }
      return null
    }

    function eB(BB) {
      try {
        return BB()
      } catch {
        return !1
      }
    }

    function uB(BB) {
      return "lite" === BB ? "webgpu" : "webgl2" === BB || "babylon" === BB ? "webgl" : null
    }

    function fB(BB) {
      return "none" === BB || "compatibility_mode" === BB
    }
    async function lB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XB();
      const IB = await async function(BB) {
        const IB = tB(BB),
          {
            source: ZB
          } = IB,
          TB = !IB.asked,
          JB = "gpu" in IB && IB.heldBack,
          GB = function(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return JB && !fB(BB) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: ZB
            } : {
              reason: BB,
              adapter: IB,
              source: ZB
            }
          };
        if (!("gpu" in IB)) return GB(IB.refused);
        let vB;
        try {
          vB = await (0, QB.j)((0, WB.o)(IB.gpu, {
            compatibility: AB(BB, IB)
          }), NI, `requestAdapter didn't settle in ${NI/1e3} s`)
        } catch {
          return GB("adapter_error")
        }
        if ("string" === typeof vB) return GB(vB);
        const {
          adapter: kB,
          compatibility: cB
        } = vB, nB = (0, WB.d)(kB);
        if ((0, WB.h)(kB)) return GB("software_adapter", nB);
        const hB = BB.windows() && function(BB) {
          return PB.has((0, oB.f)(BB.vendor, BB.architecture))
        }(nB);
        if (BB.storeHoldbackSpared(hB), JB && !hB) return GB("webgl_holdback");
        const zB = BB.intelGen9(kB);
        BB.storeIntelGen9Verdict(zB);
        const FB = zB ? null : BB.gpuClassWebGlArm(kB);
        BB.storeGpuClassVerdict(null !== FB && void 0 !== FB && FB);
        const NB = BB.webGlDefaultFamily(nB);
        if (BB.storeWebGlDefaultFamilyVerdict(NB), TB && BB.oldIntelDriver(kB)) return GB("old_intel_driver", nB);
        if ("default" === ZB && zB && BB.intelGen9OnWebGl()) return GB("intel_gen9", nB);
        if ("default" === ZB && null !== FB && BB.gpuClassOnWebGl(FB)) return GB("gpu_class_webgl", nB);
        if ("default" === ZB && NB) return GB("gpu_wasm_arm", nB);
        return GB(cB ? "compatibility_mode" : "none", nB)
      }(BB);
      if (fB(IB.reason)) return {
        backend: "webgpu",
        ...IB
      };
      if ("webgl1" !== BB.override() && BB.webgl2()) return {
        backend: "webgl",
        ...IB
      };
      const ZB = BB.webgl1();
      return 0 === ZB.length ? {
        backend: "webgl1",
        ...IB
      } : {
        missing: ZB
      }
    }

    function AB(BB, IB) {
      let {
        source: ZB,
        asked: TB
      } = IB;
      return TB || "default" === ZB ? (0, wB.i)(TB, BB.defaultCompatibility) : void 0
    }

    function tB(BB) {
      const IB = BB.override(),
        ZB = BB.webGpuSetting(),
        TB = null === IB && !0 !== ZB && BB.oN(),
        JB = null !== IB || null !== ZB || TB ? null : BB.claimed(),
        oB = null !== IB ? "override" : !0 === ZB ? "setting" : TB ? "pack" : !1 === ZB ? "setting" : null !== JB ? "claim" : "default",
        GB = function(BB) {
          return "override" === BB || "setting" === BB
        }(oB);
      if ("webgl" === IB || "webgl1" === IB || "webgl" === JB || "setting" === oB && !1 === ZB) return {
        source: oB,
        asked: GB,
        refused: "not_requested"
      };
      if (!BB.gpu) return {
        source: oB,
        asked: GB,
        refused: "no_webgpu_api"
      };
      const vB = "default" === oB && BB.heldBack();
      return vB && !BB.windows() ? {
        source: oB,
        asked: GB,
        refused: "webgl_holdback"
      } : !GB && BB.offAfterLoss("pack" === oB) ? {
        source: oB,
        asked: GB,
        refused: vB ? "webgl_holdback" : "off_after_loss"
      } : {
        source: oB,
        asked: GB,
        heldBack: vB,
        gpu: BB.gpu
      }
    }

    function bB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...XB(),
          override: () => LB(!1)
        },
        IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zB.isWebKit,
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MB;
      try {
        if (!IB()) return !1;
        const TB = tB(BB);
        if (!("gpu" in TB) || TB.heldBack) return !1;
        const JB = "default" === TB.source ? rB(ZB(), "apple") : null;
        return null === JB || !BB.gpuClassOnWebGl(JB)
      } catch (TB) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", TB), !1
      }
    }
    let xB = !1;
    async function EB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XB();
      if (null === BB) return null;
      const ZB = await lB(IB);
      return xB = !("missing" in ZB) && "webgpu" === ZB.backend && "claim" === ZB.source, "missing" in ZB ? ZB : {
        ...ZB,
        load: BB[ZB.backend]
      }
    }
    async function DB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XB().gpu,
        TB = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== BB.backend) return !1;
      const JB = TI(BB, IB, "indirectDraws", "off", "on");
      if (null !== JB) return JB;
      if (null !== BB.adapter && (0, qB.q)(BB.adapter, TB)) return !0;
      if (null === ZB) return !1;
      try {
        var oB;
        const BB = await (0, QB.j)(ZB.requestAdapter({
          powerPreference: "low-power"
        }).then((async BB => (null !== BB && await (0, WB.f)(BB), BB))), NI, `the low-power requestAdapter didn't settle in ${NI/1e3} s`);
        return (0, qB.q)(null !== (oB = null === BB || void 0 === BB ? void 0 : BB.info) && void 0 !== oB ? oB : {}, TB)
      } catch (GB) {
        return GB instanceof QB.d
      }
    }

    function KB(BB, IB, ZB) {
      if ("webgpu" !== BB.backend) return !1;
      const TB = TI(BB, IB, "terrainFetch", "texture", "storage");
      return null !== TB ? TB : null !== BB.adapter && (0, qB.j)(BB.adapter, ZB)
    }

    function VB(BB, IB) {
      if ("webgpu" !== BB.backend) return !1;
      const ZB = TI(BB, IB, "skyOrder", "early", "last");
      return null !== ZB ? ZB : null !== BB.adapter && (0, oB.f)(BB.adapter.vendor, BB.adapter.architecture) === jB
    }

    function SB(BB, IB) {
      if ("webgpu" !== BB.backend) return !1;
      const ZB = TI(BB, IB, "uploadCopies", "off", "on");
      return null !== ZB ? ZB : null !== BB.adapter && "powervr_rogue" === (0, oB.f)(BB.adapter.vendor, BB.adapter.architecture)
    }

    function BI(BB, IB, ZB) {
      if ("webgpu" !== BB.backend) return !1;
      const TB = TI(BB, IB, "sceneDepth", "off", "on");
      return null !== TB ? TB : null !== BB.adapter && (0, qB.n)(BB.adapter, ZB)
    }

    function II(BB, IB) {
      return "webgl" === BB.backend ? TI(BB, IB, "instancedTerrain", "1", "0") : null
    }

    function ZI(BB, IB) {
      return "webgpu" !== BB.backend || IB && (null === BB.adapter || !(0, gB.N)(BB.adapter))
    }

    function TI(BB, IB, ZB, TB, JB) {
      const oB = new URLSearchParams(IB).get(ZB),
        GB = null !== oB && void 0 !== oB ? oB : (0, kB.f)(ZB);
      return GB !== TB && GB !== JB ? null : (xB ||= null === oB && "webgpu" === BB.backend, GB === TB)
    }

    function JI(BB) {
      return null !== BB && "missing" in BB
    }

    function oI(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !kI(),
        ZB = arguments.length > 2 ? arguments[2] : void 0;
      return IB ? function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GB.d,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const TB = "start_failed" === BB || "pipeline_failed" === BB,
            JB = (0, OB.h)(BB, ZB),
            oB = IB.turnOffWebGpuAfterDeviceLoss(TB ? "visible" : (0, gB.n)((0, FB.i)()), TB, JB);
          return xB && (0, kB.z)("webgpuLoss"), IB.isWebGpuOffAfterLoss() && "webgpu" === uB(NB.m.getItem(nB.c)) && NB.m.removeItem(nB.c), (0, vB.t)("webgpuloss") && (0, cB.e)((IB => {
            var ZB;
            IB.noteWebGpuLoss("wasm", oB ? BB : `${BB}, which storage didn't keep`, null !== (ZB = JB.message) && void 0 !== ZB ? ZB : null)
          })), oB
        } catch {
          return !1
        }
      }(BB, GB.d, ZB) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const GI = "framePacing";

    function vI(BB) {
      const IB = new URLSearchParams(BB).get(GI);
      return null !== IB && /^\d{1,9}$/.test(IB) ? Number(IB) : void 0
    }

    function kI() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === uB(new URLSearchParams(BB).get(nB.b))
      } catch {
        return !1
      }
    }

    function cI(BB) {
      return !!nI(BB) || BB instanceof Error && !(BB instanceof WebAssembly.RuntimeError) && BB.message.startsWith(`${dB.n.RenderSurfaceUnusable}:`)
    }

    function nI(BB) {
      const {
        name: IB,
        message: ZB
      } = null !== BB && void 0 !== BB ? BB : {};
      return "InvalidStateError" === IB && "string" === typeof ZB && ZB.startsWith("GPUDevice.")
    }

    function hI(BB) {
      const IB = BB;
      return "function" === typeof IB.WTB && "function" === typeof IB.dTB ? IB : null
    }

    function zI(BB) {
      return "function" === typeof BB.eq ? BB : null
    }
    const FI = "openRenderer";
    const NI = 5e3,
      gI = 15e3;

    function qI(BB, IB, ZB, TB, JB, oB) {
      return (0, QB.j)(function(BB, IB, ZB, TB, JB, oB) {
        return (0, sB.e)(BB, IB, (() => BB.eq(ZB, TB, JB, oB.indirectHangs, oB.storagePullBreaks, oB.splitPassBreaks, oB.earlySky, oB.instancedTerrain, oB.cellLight, oB.framesAhead, oB.webGpuRestores, oB.bufferCopiesCrash)))
      }(BB, IB, ZB, TB, JB, oB), gI, `${dB.n.RenderSurfaceUnusable}: the renderer didn't open in ${gI/1e3} s`, UI)
    }
    async function yI(BB, IB, ZB, TB, JB, oB) {
      if ("function" !== typeof BB.iGB) throw new Error("this core has no set_renderer");
      const GB = await qI(IB, FI, ZB, JB, TB, oB);
      try {
        BB.iGB(GB)
      } catch (vB) {
        throw UI(GB), vB
      }
    }

    function UI(BB) {
      try {
        BB.free()
      } catch {}
    }
  },
  40851: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    const TB = {
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
  40790: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => NB,
      g: () => gB,
      j: () => zB,
      n: () => hB
    });
    const TB = 2e3,
      JB = "unavailable";
    let oB = () => Promise.resolve().then((() => ZB(3110))),
      GB = null,
      vB = null,
      kB = cB();

    function cB() {
      let BB = () => {};
      return {
        promise: new Promise((IB => {
          BB = () => {
            IB(null)
          }
        })),
        resolve: BB
      }
    }

    function nB() {
      if (null === GB) {
        const BB = oB();
        GB = BB, BB.then((IB => {
          GB === BB && (vB = IB)
        }), (() => {
          GB === BB && (GB = null)
        }))
      }
      return GB
    }

    function hB() {
      nB().catch((() => {}))
    }

    function zB() {
      kB.resolve()
    }

    function FB(BB, IB, ZB, TB) {
      if (null === BB) return {
        errorKind: IB,
        fingerprint: JB,
        dedupe: `${IB}|${TB}`
      };
      const {
        fingerprint: oB
      } = BB.clientErrorKey(IB, ZB, TB);
      return {
        errorKind: IB,
        fingerprint: oB,
        dedupe: oB
      }
    }

    function NB(BB, IB, ZB, TB) {
      return null === vB ? TB ? (hB(), FB(null, BB, IB, ZB)) : null : FB(vB, BB, IB, ZB)
    }
    async function gB(BB, IB, ZB) {
      let JB;
      const oB = new Promise((BB => {
        JB = setTimeout((() => {
          BB(null)
        }), TB)
      }));
      try {
        return FB(await Promise.race([nB(), oB, kB.promise]), BB, IB, ZB)
      } catch {
        return FB(null, BB, IB, ZB)
      } finally {
        clearTimeout(JB)
      }
    }
  },
  40784: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      BUILT_IN_ANIMATIONS_SITE: () => EB,
      CORE_ERRORS_SITE: () => XB,
      EVENT_OVERFLOW_SITE: () => xB,
      FIRST_VIEW_SITE: () => VB,
      JOIN_SITE: () => eB,
      LEAVE_SITE: () => uB,
      MAIN_THREAD_SITE: () => SB,
      MODEL_FEED_SITE: () => fB,
      MODEL_POOL_SITE: () => lB,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => TI,
      NON_FATAL_REPORTS_PER_SESSION: () => CI,
      PREVIEW_ANIMATIONS_SITE: () => bB,
      RENDER_RELOAD_SITE: () => tB,
      REQUEST_DEVICE_SITE: () => BI,
      TEXTURE_NAMES_SITE: () => AB,
      TEXTURE_PACK_FEED_SITE: () => DB,
      TEXTURE_PACK_SWAP_SITE: () => KB,
      TurnstilePageError: () => oZ,
      WASM_LOAD_SITE: () => LB,
      countRenderLost: () => XZ,
      crashError: () => iI,
      crashReportsSettled: () => mI,
      deviceLossWords: () => PZ,
      flushCrashReports: () => RI,
      joinFailureCode: () => GZ,
      lokiTransport: () => GI,
      modelFailureCode: () => FZ,
      readTrap: () => AI,
      renderLoss: () => mZ,
      renderReloadMessage: () => RZ,
      reportCoreErrors: () => eI,
      reportCountedLoadFallback: () => TZ,
      reportCrash: () => pI,
      reportDataLoadFailure: () => AZ,
      reportDisconnect: () => hZ,
      reportDracoDecoderFailure: () => yZ,
      reportDroppedRequiredLimits: () => IZ,
      reportEventOverflow: () => CZ,
      reportFirstViewNoTerrain: () => YZ,
      reportLightFault: () => sZ,
      reportMainStall: () => iZ,
      reportMemoryShed: () => OZ,
      reportModelFailure: () => NZ,
      reportModelPoolFailure: () => gZ,
      reportModelsModuleRetry: () => qZ,
      reportNoBackendRetry: () => BZ,
      reportPageJoinFailure: () => kZ,
      reportReconnectGaveUp: () => zZ,
      reportRenderRecovery: () => MI,
      reportRenderReload: () => uZ,
      reportReplayFault: () => aZ,
      reportStaleBuildReload: () => bZ,
      reportStoppedCore: () => EI,
      reportTerrainTextureFailure: () => fZ,
      reportTexturePackFeedLoadFailure: () => WZ,
      reportTexturePackKeptOut: () => dZ,
      reportUnstreamedCoreLoad: () => JZ,
      reportUnsupportedFallback: () => SI,
      reportUnusedSeat: () => nZ,
      reportWorkerLost: () => QZ,
      reportWorkerStartTimeout: () => pZ,
      reportWorldgenGaveUp: () => wZ,
      reportWorldgenLoadFailure: () => UZ,
      resetCrashReports: () => XI,
      setCrashAdPreload: () => gI,
      setCrashBackend: () => NI,
      setCrashScreen: () => hI,
      setCrashTransport: () => cI,
      showCrash: () => xI,
      showJoinFailure: () => vZ,
      showUnsupported: () => KI,
      unknownSkyWords: () => LI
    });
    var TB = ZB(1058),
      JB = ZB(1385),
      oB = ZB(1382),
      GB = ZB(1125),
      vB = ZB(273),
      kB = ZB(3112),
      cB = ZB(4491),
      nB = ZB(40790),
      hB = ZB(4969),
      zB = ZB(40792),
      FB = ZB(3141),
      NB = ZB(38816),
      gB = ZB(140),
      qB = ZB(138),
      yB = ZB(3150),
      UB = ZB(36516),
      WB = ZB(1860),
      dB = ZB(40801),
      CB = ZB(40643),
      QB = ZB(40733),
      sB = ZB(40736),
      wB = ZB(36509),
      OB = ZB(3036),
      YB = ZB(3043),
      iB = ZB(40821),
      pB = ZB(40838),
      aB = ZB(40840),
      HB = ZB(36869),
      MB = ZB(3396),
      jB = ZB(36292),
      PB = ZB(40768),
      RB = ZB(36297),
      rB = ZB(40860);
    const mB = "[bloxd-wasm-client]",
      XB = "coreErrors",
      LB = "wasmLoad",
      eB = "join",
      uB = "leave",
      fB = "modelFeed",
      lB = "modelWorkerPool",
      AB = "textureNames",
      tB = "renderReload",
      bB = "previewAnimations",
      xB = "eventOverflow",
      EB = "builtInAnimations",
      DB = "texturePackFeed",
      KB = "texturePackSwap",
      VB = "firstView",
      SB = "mainThread",
      BI = "requestDevice",
      II = 300,
      ZI = 64,
      TI = 8;
    let JI = 0;
    const oI = new Set,
      GI = (BB, IB) => {
        const ZB = qI[BB.kind],
          TB = {
            backend: zI,
            adPreload: FI
          };
        if (null === ZB) return void vI(BB, IB, TB, null);
        const JB = (0, nB.e)(ZB, BB.message, BB.code, BB.fatal);
        null === JB ? PI("Loki", (async () => {
          vI(BB, IB, TB, await (0, nB.g)(ZB, BB.message, BB.code))
        })) : vI(BB, IB, TB, JB)
      };

    function vI(BB, IB, ZB, TB) {
      let {
        backend: JB,
        adPreload: oB
      } = ZB;
      const {
        kind: vB,
        code: cB,
        site: nB,
        fatal: hB,
        details: zB
      } = BB;
      if (!hB)
        if (null === TB || (0, kB.b)(TB.errorKind) || oI.has(TB.dedupe)) {
          if (JI >= TI) return;
          JI++
        } else oI.add(TB.dedupe);
      const FB = {
        ...zB,
        kind: vB,
        code: cB,
        site: nB,
        fatal: String(hB),
        backend: JB
      };
      oB && (FB.adPreload = "true"), null !== TB && (FB.errorKind = TB.errorKind, FB.fingerprint = TB.fingerprint), IB instanceof Error && "string" === typeof IB.stack && (FB.causeStack = IB.stack.slice(0, 2e3)), (0, GB.Og)(iI(BB, IB), FB)
    }
    let kI = GI;

    function cI(BB) {
      const IB = kI;
      return kI = BB, IB
    }
    let nI = () => {};

    function hI(BB) {
      const IB = nI;
      return nI = BB, IB
    }
    let zI = "unpicked",
      FI = !1;

    function NI(BB) {
      zI = BB
    }

    function gI(BB) {
      FI = BB
    }
    const qI = {
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
      yI = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      UI = new Set(["unstreamedLoad"]),
      WI = new Set(["linkCensus", "linksReadAfterView"]);
    let dI = !1;
    const CI = 20,
      QI = new Map;
    let sI = 0,
      wI = 0;
    const OI = new Set,
      YI = new Set;

    function iI(BB, IB) {
      const ZB = Object.assign(new Error(`${BB.code}: ${BB.message}`), {
        name: "WasmClientCrash",
        cause: null !== IB && void 0 !== IB ? IB : void 0
      });
      return IB instanceof Error && IB.stack && (ZB.stack = IB.stack), ZB
    }

    function pI(BB) {
      var IB, TB;
      const {
        kind: JB,
        code: oB,
        site: GB,
        fatal: vB,
        message: kB,
        error: cB
      } = BB, nB = !1 !== BB.toTransport && !UI.has(JB), hB = !vB && nB && !WI.has(JB), zB = {
        kind: JB,
        code: oB,
        site: GB,
        fatal: vB,
        message: kB,
        details: null !== (IB = BB.details) && void 0 !== IB ? IB : {}
      }, FB = `${oB}@${GB}${void 0===BB.instance?"":`#${BB.instance}`}${vB?"!":""}`, NB = (null !== (TB = QI.get(FB)) && void 0 !== TB ? TB : 0) + 1;
      if (QI.set(FB, NB), void 0 !== BB.countAs && 1 === NB && HI(BB.countAs), NB > 1 ? 0 === (NB & NB - 1) && jI((() => {
          console.warn(`${mB} ${oB} at ${GB} reported ${NB} times`)
        })) : hB && sI >= CI ? jI((() => {
          console.warn(`${mB} ${JB} ${oB} at ${GB}: ${kB} (not sent: the session's ${CI} went)`, zB.details, null !== cB && void 0 !== cB ? cB : "")
        })) : (hB && sI++, function(BB, IB, TB, JB) {
          var oB, GB;
          const {
            kind: vB,
            code: kB,
            site: cB,
            fatal: nB,
            message: hB,
            details: zB
          } = BB;
          jI((() => {
            (nB ? console.error : console.warn)(`${mB} ${vB} ${kB} at ${cB}: ${hB}`, zB, null !== IB && void 0 !== IB ? IB : "")
          }));
          const FB = yI[vB],
            NB = null !== (oB = null !== (GB = qI[vB]) && void 0 !== GB ? GB : FB) && void 0 !== oB ? oB : null;
          JB || null === NB || aI((async () => {
            const {
              reportCappedWasmFailure: BB,
              reportUncappedWasmFailure: IB,
              reportWasmFailure: TB
            } = await ZB.e(213).then((() => ZB(36283)));
            (WI.has(vB) ? IB : void 0 === FB ? TB : BB)(NB, hB, kB)
          }));
          TB && jI((() => {
            kI(BB, IB)
          }))
        }(zB, cB, nB, void 0 !== BB.countAs)), vB) {
        var gB;
        const IB = null !== (gB = BB.screen) && void 0 !== gB ? gB : {
          text: (0, HB.d)(zB, !0),
          reload: !0
        };
        jI((() => {
          nI(IB)
        }))
      }
      return zB
    }

    function aI(BB) {
      PI("counts", (async () => {
        const {
          peekVisitSessionId: IB
        } = await Promise.resolve().then((() => ZB(696)));
        null !== IB() && (await BB(), dI = !0)
      }))
    }

    function HI(BB) {
      OI.has(BB.errorKind) || (OI.add(BB.errorKind), aI((async () => {
        const {
          reportClientError: IB
        } = await Promise.resolve().then((() => ZB(3101)));
        IB(BB.errorKind, BB.error, BB.code, !0, void 0, BB.fields)
      })))
    }

    function MI(BB, IB) {
      PI("render_lost", (async () => {
        const [{
          reportClientError: TB
        }, {
          CAPPED_COUNTS_VISIT_CAP: JB
        }] = await Promise.all([Promise.resolve().then((() => ZB(3101))), ZB.e(213).then((() => ZB(36283)))]);
        TB("render_lost", IB, BB, !0, JB)
      }))
    }

    function jI(BB) {
      try {
        BB()
      } catch (IB) {
        try {
          console.warn(`${mB} could not send a report`, IB)
        } catch {}
      }
    }

    function PI(BB, IB) {
      try {
        const ZB = IB().catch((IB => {
          console.warn(`${mB} could not send the report to ${BB}`, IB)
        })).finally((() => {
          YI.delete(ZB)
        }));
        YI.add(ZB)
      } catch (ZB) {
        console.warn(`${mB} could not send the report to ${BB}`, ZB)
      }
    }
    async function RI(BB) {
      let IB;
      (0, nB.j)();
      const ZB = new Promise((ZB => {
        IB = setTimeout(ZB, BB)
      }));
      await Promise.race([rI(), ZB]), clearTimeout(IB)
    }
    async function rI() {
      if (await Promise.allSettled([...YI]), dI) try {
        const {
          flushClientAnalyticsEvents: BB
        } = await Promise.resolve().then((() => ZB(1559)));
        await BB()
      } catch (BB) {
        console.warn(`${mB} could not send the counts`, BB)
      }
    }
    async function mI() {
      for (; YI.size > 0;) await Promise.allSettled([...YI])
    }

    function XI() {
      QI.clear(), sI = 0, dI = !1, JI = 0, oI.clear(), wI = 0, OI.clear(), (0, zB.n)()
    }

    function LI(BB) {
      const IB = "object" === typeof BB && null !== BB ? BB.type : BB;
      return "string" !== typeof IB ? "sky not named" : `sky ${JSON.stringify(Array.from(IB).slice(0,ZI).join(""))}`
    }

    function eI(BB, IB, ZB, TB) {
      wI += IB;
      for (const {
          code: vB,
          detail: kB
        }
        of BB) {
        var JB, oB, GB;
        const BB = (0, hB.fe)(vB),
          IB = (0, zB.b)(vB, kB),
          cB = null === TB || void 0 === TB ? void 0 : TB(vB, kB),
          nB = void 0 !== (null === IB || void 0 === IB ? void 0 : IB.gpuDetails),
          FB = nB ? null === (JB = (0, qB.p)()) || void 0 === JB ? void 0 : JB.renderer : void 0,
          NB = nB ? ` ${(0,zB.e)()}` : "",
          gB = Array.from([FB && `gpu ${(0,zB.q)(FB)}`, cB].filter(Boolean).join("; ")).slice(0, II).join(""),
          yB = `core error ${BB}${null!==(oB=null===IB||void 0===IB?void 0:IB.words)&&void 0!==oB?oB:""}${NB}${gB?`: ${gB}`:""}`,
          UB = {
            errorCode: String(vB),
            detail: String(kB),
            droppedBefore: String(wI),
            wasmBuild: ZB.wasm,
            clientVersion: ZB.client,
            ...null === IB || void 0 === IB ? void 0 : IB.gpuDetails
          };
        null !== IB && (0, zB.j)(IB) ? jI((() => {
          console.warn(`${mB} coreError CORE-${BB}: ${yB} (not sent: the session's render warnings of its kind went)`, UB)
        })) : uI(vB) ? jI((() => {
          console.warn(`${mB} coreError CORE-${BB}: ${yB} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, UB)
        })) : pI({
          kind: lI(vB, kB),
          code: `CORE-${BB}`,
          site: XB,
          fatal: !1,
          message: yB,
          details: UB,
          instance: null !== (GB = null === IB || void 0 === IB ? void 0 : IB.instance) && void 0 !== GB ? GB : fI(vB, kB)
        })
      }
    }

    function uI(BB) {
      if (BB !== hB.K.AudioUnknownSound && BB !== hB.K.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: IB,
        lobbyName: ZB
      } = (0, oB.c)();
      return null !== IB && (!!(0, TB.i)(IB) || BB === hB.K.AudioUnknownSound && (0, JB.g)(IB, ZB))
    }

    function fI(BB, IB) {
      return BB === hB.K.RenderDeviceLost && 0 !== (IB & hB.Q.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function lI(BB, IB) {
      return BB === hB.K.JobsHeapGaveUp ? "meshHeap" : (0, zB.d)(BB, IB) ? "linksReadAfterView" : (0, zB.c)(BB, IB) ? "linkCensus" : "coreError"
    }

    function AI(BB) {
      return (0, jB.l)(BB instanceof PB.b ? BB.trap : BB, OB.B, OB.Z)
    }
    const tI = "declined=js";

    function bI(BB) {
      return BB ? {
        labels: [tI],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function xI(BB, IB, ZB) {
      return DI(BB, IB, ZB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function EI(BB, IB, ZB) {
      return DI(BB, IB, ZB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function DI(BB, IB, ZB, TB, JB) {
      let {
        memoryDetails: oB = {},
        declined: GB = !1
      } = TB;
      const {
        code: vB,
        details: kB,
        message: cB
      } = (0, dB.K)(BB, IB), nB = [];
      Object.assign(kB, (0, RB.g)(BB.error)), null !== ZB && (kB.trapKind = ZB.kind, null !== ZB.panic && (kB.panic = (0, jB.j)(ZB.panic)), ZB.refusedBytes > 0 && (kB.refusedAllocation = String(ZB.refusedBytes)), nB.push((0, jB.m)(ZB.kind, ZB.refusedBytes)));
      const hB = bI(GB);
      return pI({
        kind: "crash",
        code: vB,
        site: BB.site,
        fatal: JB,
        message: [...nB, ...hB.labels, cB].join("; "),
        details: {
          ...kB,
          ...hB.details,
          ...oB
        },
        error: BB.error
      })
    }

    function KI(BB, IB, ZB) {
      return pI({
        kind: "unsupported",
        code: IB,
        site: LB,
        fatal: !0,
        message: ZB,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: BB,
          status: IB
        },
        screen: {
          text: (0, HB.q)(BB),
          reload: "download" === BB
        }
      })
    }
    const VI = {
      unsupported: "unsupported_js_fallback",
      blockedAfterLoss: "blocked_after_loss",
      noContext: "no_context_js_fallback"
    };

    function SI(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return pI({
        kind: "unsupportedFallback",
        code: VI[IB],
        site: LB,
        fatal: !1,
        message: ZB,
        details: {
          ...TB,
          cause: BB,
          status: "unsupported",
          decline: IB,
          fallback: "js"
        }
      })
    }

    function BZ(BB, IB, ZB) {
      return pI({
        kind: "recovered",
        code: "reprobed" === BB ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: LB,
        fatal: !1,
        message: ZB,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: IB,
          step: BB
        }
      })
    }

    function IZ(BB) {
      return pI({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: BI,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: BB.join(",")
        }
      })
    }
    const ZZ = "reload=wasm";

    function TZ(BB, IB, ZB, TB) {
      const JB = bI("declined" === TB),
        oB = "wasmReload" === TB ? [ZZ] : JB.labels;
      return pI({
        kind: "unsupported",
        code: IB,
        site: LB,
        fatal: !1,
        message: [...oB, ZB].join("; "),
        details: {
          cause: BB,
          status: IB,
          fallback: "wasmReload" === TB ? "wasmReload" : "js",
          ...JB.details
        }
      })
    }

    function JZ() {
      const {
        code: BB,
        message: IB
      } = MB.d;
      return pI({
        kind: "unstreamedLoad",
        code: BB,
        site: LB,
        fatal: !1,
        message: IB
      })
    }
    class oZ extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function GZ(BB) {
      return BB instanceof QB.n ? 0 === BB.code ? "JOIN-matchmake" : `JOIN-${BB.code}` : BB instanceof QB.c ? 0 === BB.code ? `JOIN-${BB.stage}` : `JOIN-${BB.stage}-${BB.code}` : BB instanceof CB.d ? "JOIN-gameCode" : BB instanceof oZ ? "JOIN-turnstilePage" : BB instanceof QB.z ? "JOIN-trafficCheck" : BB instanceof UB.f ? "JOIN-timeout" : "JOIN-network"
    }

    function vZ(BB, IB) {
      const ZB = (0, RB.k)(BB),
        TB = {
          wasmBuild: IB.wasm,
          clientVersion: IB.client
        },
        JB = BB instanceof oZ ? {
          text: (0, HB.k)(),
          reload: !1
        } : void 0,
        oB = (0, sB.f)(BB),
        GB = "expected" !== oB;
      return pI({
        kind: "join",
        code: GZ(BB),
        site: eB,
        fatal: !0,
        message: ZB,
        details: TB,
        error: BB,
        screen: JB,
        toTransport: GB,
        instance: oB
      })
    }

    function kZ(BB, IB, ZB) {
      var TB;
      const JB = (0, sB.f)(BB),
        oB = {
          cause: (BB instanceof QB.c || BB instanceof QB.n) && null !== (TB = BB.serverText) && void 0 !== TB ? TB : "",
          sinceJoinStart: (0, yB.e)(ZB.sinceJoinStartMs),
          game: ZB.game,
          ...(0, yB.l)(),
          wasmBuild: IB.wasm,
          clientVersion: IB.client
        };
      return pI({
        kind: "pageJoin",
        code: GZ(BB),
        site: eB,
        fatal: !1,
        message: (0, RB.k)(BB),
        details: oB,
        error: BB,
        toTransport: "unrecognised" === JB,
        instance: JB
      })
    }
    const cZ = {
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

    function nZ(BB, IB) {
      let {
        unused: ZB,
        answered: TB,
        heldMs: JB
      } = BB;
      const {
        code: oB,
        message: GB
      } = cZ[ZB], vB = {
        unused: ZB,
        answered: String(TB),
        heldMs: String(JB),
        wasmBuild: IB.wasm,
        clientVersion: IB.client
      };
      return pI({
        kind: "seat",
        code: oB,
        site: eB,
        fatal: !1,
        message: GB,
        details: vB
      })
    }

    function hZ(BB, IB, ZB) {
      var TB;
      let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (TB = BB.name) && void 0 !== TB ? TB : String(BB.code);
      const oB = {
          closeCode: String(BB.code),
          recognised: String(null !== BB.name),
          closeReason: ZB.closeReason,
          sinceJoined: (0, yB.e)(ZB.sinceJoinedMs),
          game: ZB.game,
          ...(0, yB.l)(),
          wasmBuild: IB.wasm,
          clientVersion: IB.client
        },
        GB = null === BB.name && !(0, yB.g)(BB.code);
      return pI({
        kind: "disconnect",
        code: JB,
        site: uB,
        fatal: !1,
        message: "Left room",
        details: oB,
        toTransport: GB
      })
    }

    function zZ(BB, IB) {
      const ZB = {
        ...(0, FB.j)(BB),
        wasmBuild: IB.wasm,
        clientVersion: IB.client
      };
      return pI({
        kind: "disconnect",
        code: `reconnect-${BB.reason}`,
        site: eB,
        fatal: !1,
        message: "Reconnect failed",
        details: ZB
      })
    }

    function FZ(BB) {
      return BB.error instanceof YB.e ? `MODEL-${BB.error.status}` : BB.error instanceof iB.j ? "MODEL-ring" : "MODEL-network"
    }

    function NZ(BB, IB) {
      const ZB = FZ(BB),
        TB = `model file ${BB.file} ${BB.startup?"(startup) ":""}could not load`,
        JB = {
          file: String(BB.file),
          url: BB.url,
          wasmBuild: IB.wasm,
          clientVersion: IB.client
        };
      return pI({
        kind: BB.startup ? "model" : "modelLate",
        code: ZB,
        site: fB,
        fatal: BB.startup,
        message: TB,
        details: JB,
        error: BB.error
      })
    }

    function gZ(BB, IB) {
      const ZB = {
        wasmBuild: IB.wasm,
        clientVersion: IB.client
      };
      return pI({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: lB,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: ZB,
        error: BB
      })
    }

    function qZ(BB, IB, ZB) {
      const TB = {
        delayMs: String(IB),
        wasmBuild: ZB.wasm,
        clientVersion: ZB.client
      };
      BB instanceof YB.e && (TB.status = String(BB.status));
      return pI({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: lB,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: TB,
        error: BB
      })
    }

    function yZ(BB, IB) {
      const ZB = {
        wasmBuild: IB.wasm,
        clientVersion: IB.client
      };
      return pI({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: lB,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: ZB,
        error: BB
      })
    }

    function UZ(BB, IB) {
      const ZB = {
        wasmBuild: IB.wasm,
        clientVersion: IB.client
      };
      return pI({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: dB.H,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: ZB,
        error: BB
      })
    }

    function WZ(BB, IB) {
      const ZB = {
        wasmBuild: IB.wasm,
        clientVersion: IB.client
      };
      return pI({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: DB,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: ZB,
        error: BB
      })
    }

    function dZ(BB, IB, ZB, TB) {
      const JB = {
        wasmBuild: TB.wasm,
        clientVersion: TB.client
      };
      return pI({
        kind: "texturePackKeptOut",
        code: (0, cB.f)("wasm", BB, IB),
        site: KB,
        fatal: !1,
        message: IB.detail,
        details: JB,
        error: ZB
      })
    }

    function CZ(BB, IB) {
      const {
        frames: ZB,
        acks: TB,
        mask: JB,
        outcome: oB
      } = BB, GB = {
        frames: String(ZB),
        acks: String(TB),
        mask: String(JB),
        outcome: null !== oB && void 0 !== oB ? oB : "resynced",
        wasmBuild: IB.wasm,
        clientVersion: IB.client
      };
      return pI({
        kind: "recovered",
        code: "rejoined" === oB ? "CORE-eventOverflowRejoin" : "failed" === oB ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: xB,
        fatal: !1,
        message: `the event buffer refused records in ${ZB} frames`,
        details: GB
      })
    }

    function QZ(BB, IB, ZB) {
      return pI({
        kind: "recovered",
        code: "CORE-workerLost",
        site: BB,
        fatal: !1,
        message: `a ${BB} worker was lost`,
        details: {
          reason: IB,
          wasmBuild: ZB.wasm,
          clientVersion: ZB.client
        }
      })
    }

    function sZ(BB, IB, ZB) {
      const TB = {
        wasmBuild: ZB.wasm,
        clientVersion: ZB.client
      };
      return pI({
        kind: "recovered",
        code: BB,
        site: dB.o,
        fatal: !1,
        message: IB,
        details: TB
      })
    }

    function wZ(BB, IB) {
      const ZB = {
        lastReason: BB,
        wasmBuild: IB.wasm,
        clientVersion: IB.client
      };
      return pI({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: dB.H,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: ZB
      })
    }

    function OZ(BB, IB, ZB) {
      return pI({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: dB.m,
        fatal: !1,
        message: (0, wB.l)(BB) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: BB,
          ...IB,
          wasmBuild: ZB.wasm,
          clientVersion: ZB.client
        }
      })
    }

    function YZ(BB, IB, ZB, TB) {
      var JB, oB;
      const GB = (0, zB.h)(),
        vB = {
          game: BB,
          cause: IB,
          census: null === ZB ? "none" : JSON.stringify(ZB),
          gpu: null !== (JB = null === (oB = (0, qB.p)()) || void 0 === oB ? void 0 : oB.renderer) && void 0 !== JB ? JB : "",
          renderWarned: String(GB),
          browser: (0, zB.e)(),
          wasmBuild: TB.wasm,
          clientVersion: TB.client
        },
        kB = `first view drew no whole terrain in ${pB.f/1e3} s, ${IB}${GB?", render warned":""}`;
      return pI({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: VB,
        fatal: !1,
        message: kB,
        details: vB
      })
    }

    function iZ(BB, IB, ZB, TB) {
      var JB, oB, GB;
      const kB = null !== (JB = (0, vB.h)(null !== (oB = null === (GB = (0, qB.m)()) || void 0 === GB ? void 0 : GB.renderer) && void 0 !== oB ? oB : null, (0, qB.l)())) && void 0 !== JB ? JB : "unknown",
        cB = null === IB ? "untimed" : `${Math.round(IB)} ms`,
        nB = `frames stalled, ${ZB}, gpu ${(0,zB.q)(kB)}, blocking ${cB}, drawn ${Math.round(BB)} ms apart`,
        hB = {
          gpuModel: kB,
          wasmBuild: TB.wasm,
          clientVersion: TB.client
        };
      return pI({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: SB,
        fatal: !1,
        message: nB,
        details: hB
      })
    }

    function pZ(BB, IB, ZB) {
      return pI({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: BB,
        fatal: !1,
        message: `a ${BB} worker did not start`,
        details: {
          waitedMs: String(Math.round(IB)),
          wasmBuild: ZB.wasm,
          clientVersion: ZB.client
        }
      })
    }

    function aZ(BB, IB, ZB) {
      return pI({
        kind: "recovered",
        code: "CORE-replayFault",
        site: BB,
        fatal: !1,
        message: `the replay's ${BB} failed`,
        details: {
          wasmBuild: ZB.wasm,
          clientVersion: ZB.client
        },
        error: IB
      })
    }
    const HZ = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function MZ(BB) {
      if (0 === BB) return "none";
      const IB = [60, 600, 3600].find((IB => BB < IB));
      return void 0 === IB ? "ge3600" : `lt${IB}`
    }

    function jZ(BB, IB) {
      return null === BB ? "unbound" : (0, NB.h)(IB - BB)
    }

    function PZ(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (BB & hB.Q.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (BB & hB.Q.LINKS_RUNNING) ? "links running" : "", `frames ${(0,zB.q)(MZ(BB&hB.Q.FRAMES))}`, `up ${(0,zB.q)(jZ(IB,ZB))}`].filter(Boolean).join(", ")
    }

    function RZ(BB, IB, ZB) {
      const TB = "lost" === IB && void 0 !== ZB ? ` (${ZB})` : "";
      return `the ${BB} ${HZ[IB]}${TB}`
    }
    const rZ = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function mZ(BB, IB, ZB, TB) {
      var JB;
      let {
        restoreLost: oB = !1,
        adapterRemembered: GB = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, vB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const kB = null === ZB || void 0 === ZB ? void 0 : ZB.message,
        cB = "pipeline_failed" === IB ? IB : ZB instanceof WB.d ? "timeout" : (0, NB.q)("frames_refused" === IB, "string" === typeof kB ? kB : ""),
        nB = null === TB.boundAtMs ? "unbound" : `up${(0,NB.e)(vB-TB.boundAtMs)}`,
        hB = null === TB.adapter ? "no adapter" : (0, NB.p)(TB.adapter),
        zB = `${!0===TB.indirectHangs?" ih":""}${!0===TB.restoresSkipped?" nr":""}${oB?" rl":""}${GB?" ar":""}`,
        FB = `${cB} ${(0,WB.f)()?"hidden":"visible"} ${nB}${zB} ${hB}`;
      if ("webgpu" !== BB || "lost" !== IB && "frames_refused" !== IB) return {
        detail: FB,
        count: void 0
      };
      return {
        detail: FB,
        count: {
          errorKind: "render_lost",
          error: new Error(FB),
          code: (0, NB.x)(cB, null !== (JB = TB.boundAtMs) && void 0 !== JB ? JB : vB, vB).code,
          fields: {
            renderBackend: rB.b.webgpu
          }
        }
      }
    }

    function XZ(BB, IB, ZB) {
      const {
        count: TB
      } = mZ("webgpu", BB, IB, ZB);
      void 0 !== TB && HI(TB)
    }
    const LZ = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function eZ(BB) {
      var IB;
      return null !== (IB = BB instanceof Error ? BB.reason : void 0) && void 0 !== IB ? IB : ""
    }

    function uZ(BB, IB, TB) {
      var JB, oB, GB, kB, cB;
      let {
        from: nB,
        cause: hB = "lost",
        restoreLost: FB = !1,
        adapterRemembered: qB = !1,
        error: yB,
        context: UB = rZ,
        session: WB = LZ
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: CB,
        count: QB
      } = mZ(BB, hB, yB, UB, {
        restoreLost: FB,
        adapterRemembered: qB
      }, dB), sB = {
        reloadFrom: null !== nB && void 0 !== nB ? nB : "",
        losses: String(IB),
        cause: hB,
        detail: CB,
        vendor: null !== (JB = null === (oB = UB.adapter) || void 0 === oB ? void 0 : oB.vendor) && void 0 !== JB ? JB : "",
        architecture: null !== (GB = null === (kB = UB.adapter) || void 0 === kB ? void 0 : kB.architecture) && void 0 !== GB ? GB : "",
        indirectHangs: String(UB.indirectHangs),
        restoresSkipped: String(UB.restoresSkipped),
        restoreLost: String(FB),
        adapterRemembered: String(qB),
        lossReason: eZ(yB),
        samples: String(WB.samples),
        sunShadows: String(WB.sunShadows),
        renderDistance: String(WB.renderDistance),
        gpuFamily: null !== (cB = (0, vB.b)()) && void 0 !== cB ? cB : "",
        browser: (0, zB.e)(),
        siteUsed: gB.siteUsed,
        wasmBuild: TB.wasm,
        clientVersion: TB.client
      }, wB = "webgpu" !== BB && void 0 !== nB ? function(BB, IB, ZB, TB) {
        return `: ${BB}, ${IB?"restore lost":"not restored"}, up ${(0,zB.q)(jZ(ZB,TB))}`
      }(nB, FB, UB.boundAtMs, dB) : "", OB = `${RZ(BB,hB)}${wB}`, YB = pI({
        kind: "recovered",
        code: "CORE-renderLost",
        site: tB,
        fatal: !1,
        message: OB,
        details: sB,
        error: yB,
        countAs: QB
      });
      return PI("ga", (async () => {
        const {
          logError: IB
        } = await Promise.resolve().then((() => ZB(3088))), TB = `${NB.b["webgpu"===BB?"WebGPU":"WebGL2"]}\n Error: ${CB}`;
        IB("warning", TB), IB("error", TB)
      })), YB
    }

    function fZ(BB, IB) {
      var ZB, TB;
      const JB = null === BB.name ? "TEXTURE-sources" : null === BB.url ? "TEXTURE-nourl" : BB.error instanceof aB.e ? `TEXTURE-${BB.error.status}` : "TEXTURE-network",
        oB = null === BB.name ? "terrain textures could not load" : `terrain texture ${BB.name} could not load`,
        GB = {
          texture: null !== (ZB = BB.name) && void 0 !== ZB ? ZB : "",
          url: null !== (TB = BB.url) && void 0 !== TB ? TB : "",
          wasmBuild: IB.wasm,
          clientVersion: IB.client
        };
      return pI({
        kind: "terrainTexture",
        code: JB,
        site: dB.D,
        fatal: !1,
        message: oB,
        details: GB,
        error: BB.error
      })
    }
    const lZ = {
      previewAnimations: {
        site: bB,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: EB,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function AZ(BB, IB, ZB, TB) {
      const {
        site: JB,
        prefix: oB,
        name: GB
      } = lZ[BB], {
        stage: vB,
        error: kB
      } = ZB;
      return pI({
        kind: BB,
        code: "decode" === vB ? null === kB ? `${oB}-decode` : `${oB}-trap` : kB instanceof YB.e ? `${oB}-${kB.status}` : `${oB}-network`,
        site: JB,
        fatal: !1,
        message: "decode" === vB ? `${GB} did not decode` : `${GB} could not load`,
        details: {
          url: IB,
          wasmBuild: TB.wasm,
          clientVersion: TB.client
        },
        error: kB
      })
    }
    const tZ = "staleBuild";

    function bZ(BB, IB, ZB) {
      const TB = {
          failedSite: BB.site,
          url: BB.url,
          from: BB.from,
          sameBuild: String(BB.from === IB),
          reloadMs: String(Math.max(0, Date.now() - BB.at)),
          wasmBuild: ZB.wasm,
          clientVersion: ZB.client
        },
        JB = `reloaded into a newer build after ${BB.site} failed to load: ${BB.error}`;
      return pI({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: tZ,
        fatal: !1,
        message: JB,
        details: TB
      })
    }
  },
  40838: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      f: () => JB,
      i: () => GB
    });
    var TB = ZB(4975);
    const JB = 3e4;
    class oB {
      constructor(BB) {
        this.JN = BB, this.waitedMs = 0, this.lastMs = null
      }
      frame(BB, IB) {
        if (IB) return !0;
        const ZB = null === this.lastMs ? 0 : BB - this.lastMs;
        return this.lastMs = BB, ZB <= 900 && (this.waitedMs += ZB), !(this.waitedMs < JB) && (this.JN(), !0)
      }
    }

    function GB(BB, IB) {
      return 0 === (BB & TB.W.ChunkRequested) ? "no_chunk_request" : 0 === (BB & TB.W.ChunkStored) ? "chunk_not_stored" : 0 === (BB & TB.W.MeshLanded) ? "not_meshed" : null === IB ? "no_frame_drawn" : 0 === IB.terrainParts ? "no_terrain_parts" : IB.terrainCompiling > 0 ? "terrain_compiling" : IB.terrainOpaque + IB.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40643: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB,
      f: () => yB,
      j: () => gB,
      k: () => qB,
      m: () => zB,
      n: () => FB,
      q: () => nB,
      t: () => hB,
      v: () => NB
    });
    class TB extends Error {
      constructor(BB) {
        super(`the join's code did not load: ${BB instanceof Error?BB.message:String(BB)}`, {
          cause: BB
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === BB || void 0 === BB ? void 0 : BB.request
      }
    }
    let JB = null,
      oB = null,
      GB = null;
    const vB = [];
    let kB = null;

    function cB(BB, IB) {
      try {
        BB(IB)
      } catch (ZB) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ZB)
      }
    }

    function nB() {
      return kB
    }

    function hB(BB) {
      vB.push(BB), null !== kB && cB(BB, kB)
    }

    function zB(BB) {
      return JB ??= Promise.all([ZB.e(73), ZB.e(98), ZB.e(226), ZB.e(78), ZB.e(227), ZB.e(201), ZB.e(97), ZB.e(246), ZB.e(273), ZB.e(199), ZB.e(214), ZB.e(191), ZB.e(198), ZB.e(193), ZB.e(144), ZB.e(88), ZB.e(122), ZB.e(252), ZB.e(57)]).then((() => ZB(42579))).then((IB => {
        IB.loadAudio(BB), kB = IB;
        for (const BB of vB) cB(BB, IB);
        return IB
      })).catch((BB => {
        throw JB = null, BB
      })), JB
    }
    async function FB(BB, IB) {
      try {
        const ZB = await zB(BB);
        await ZB.loadClientGame(IB)
      } catch (ZB) {
        throw new TB(ZB)
      }
    }

    function NB(BB, IB) {
      oB = {
        running: BB,
        shell: IB
      }
    }

    function gB() {
      return GB
    }
    async function qB(BB) {
      const IB = oB;
      if ((null === IB || void 0 === IB ? void 0 : IB.running) !== BB) throw new Error("the core's session has ended");
      const ZB = await zB(IB.shell.audio).catch((BB => {
        throw new TB(BB)
      }));
      if (null !== GB) return GB;
      if (oB !== IB || BB.isStopped) throw new Error("the core stopped while the game code loaded");
      if (GB = ZB.startGameHost(BB, IB.shell), null === GB) throw new Error("the core's shared tables didn't read, so the game can't start");
      return GB
    }

    function yB() {
      null !== GB && (null !== kB ? kB.endGameHost(GB) : GB.closeGame()), GB = null, oB = null
    }
  },
  40765: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    const TB = {
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
  40733: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => vB,
      c: () => cB,
      f: () => oB,
      i: () => GB,
      l: () => JB,
      n: () => FB,
      q: () => nB,
      s: () => kB,
      v: () => zB,
      z: () => hB
    });
    var TB = ZB(1866);
    const JB = new Uint8Array([12]),
      oB = 2e3,
      GB = 257;

    function vB(BB) {
      const IB = new Uint8Array(4);
      return new DataView(IB.buffer).setUint32(0, BB, !0), IB
    }
    class kB extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class cB extends Error {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(BB), this.stage = IB, this.code = ZB, this.serverText = TB, this.socketOpened = JB, this.name = "JoinError"
      }
    }
    class nB extends Error {
      constructor(BB) {
        super(BB), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class hB extends Error {
      constructor(BB) {
        super((0, TB.g)(BB), {
          cause: BB
        }), this.name = "TrafficCheckError"
      }
    }
    class zB extends Error {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(BB, {
          cause: ZB
        }), this.networkLost = IB, this.httpStatus = TB, this.name = "SeatRequestError"
      }
    }
    class FB extends Error {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(BB), this.code = IB, this.serverText = ZB, this.name = "MatchmakeError"
      }
    }
  },
  40736: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => FB,
      f: () => zB,
      g: () => NB
    });
    var TB = ZB(2763),
      JB = ZB(3150),
      oB = ZB(39126),
      GB = ZB(36516),
      vB = ZB(39129),
      kB = ZB(40733),
      cB = ZB(40738);
    const nB = "seat reservation expired.",
      hB = "early_leave";

    function zB(BB) {
      if (BB instanceof GB.f) return "expected";
      if (BB instanceof kB.v) return BB.networkLost ? "expected" : "unrecognised";
      if (BB instanceof kB.c) {
        if ("closed" === BB.stage && (0 === BB.code || (0, JB.g)(BB.code))) return "expected";
        if ("roomError" === BB.stage && (BB.serverText === nB || BB.serverText === hB)) return "expected"
      }
      return BB instanceof kB.c || BB instanceof kB.n ? null === (0, vB.f)(BB.code).name ? "unrecognised" : "known" : (0, TB.f)(BB) ? "expected" : BB instanceof kB.z || BB instanceof cB.d ? "known" : "unrecognised"
    }

    function FB(BB) {
      return BB instanceof GB.f ? "timedOut" : "expected" !== zB(BB) || (0, TB.f)(BB) || BB instanceof kB.c && 1001 === BB.code ? void 0 : "failed"
    }

    function NB(BB) {
      return BB instanceof kB.c && "attach" !== BB.stage ? (0, oB.b)(BB, "closed" !== BB.stage || BB.socketOpened ? "socket" : "socket_unopened") : BB instanceof kB.v ? {
        at: "seat_lost",
        code: BB.httpStatus
      } : BB instanceof kB.n || BB instanceof GB.f ? (0, oB.b)(BB, BB instanceof GB.f ? BB.leg : "seat") : void 0
    }
  },
  40821: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      e: () => cB,
      f: () => FB,
      j: () => hB
    });
    var TB = ZB(3043),
      JB = ZB(4969),
      oB = ZB(40829),
      GB = ZB(40834),
      vB = ZB(36297);
    const kB = 395,
      cB = 2147483648,
      nB = new Uint8Array(0);
    class hB extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class zB extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class FB {
      constructor(BB, IB, ZB) {
        var TB, JB, GB, vB;
        let kB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = BB, this.build = IB, this.onFailure = ZB, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.XF = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (TB = kB.fetchFile) && void 0 !== TB ? TB : BB => (0, oB.i)(BB), this.onWritten = null !== (JB = kB.onWritten) && void 0 !== JB ? JB : null, this.onTaken = null !== (GB = kB.onTaken) && void 0 !== GB ? GB : null, this.onPackFileFailed = null !== (vB = kB.onPackFileFailed) && void 0 !== vB ? vB : null, this.startupLeft = new Set(BB.startup);
        for (const oB of BB.startup) this.request(oB)
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
      drawnUrl(BB) {
        return this.drawn.get(BB)
      }
      request(BB) {
        const IB = this.pending.get(BB);
        if (!0 === (null === IB || void 0 === IB ? void 0 : IB.ask)) return;
        const ZB = this.QF(BB, !0);
        ZB.recheck = void 0 !== IB;
        const TB = this.drawn.get(BB);
        if (void 0 !== TB) return ZB.sv = !0, ZB.recheck = !0, void this.fetch(BB, ZB, TB);
        this.fetchWanted(BB, ZB)
      }
      async refresh() {
        const BB = ++this.refreshes,
          IB = new Set;
        for (const GB of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const BB of GB) 0 === (BB & oB.f) && IB.add(BB);
        const ZB = [...IB];
        let TB;
        try {
          TB = await Promise.all(ZB.map((BB => this.wanted(BB))))
        } catch {
          return null
        }
        if (BB !== this.refreshes) return null;
        const JB = {
          resent: 0,
          refetched: 0,
          delivered: ZB.filter((BB => this.drawn.has(BB))).length
        };
        return ZB.forEach(((BB, IB) => {
          const {
            url: ZB,
            inPlaceOf: oB
          } = TB[IB], GB = this.pending.get(BB);
          if (void 0 !== GB) {
            if (GB.sv || void 0 === GB.url) return void(GB.recheck = !0);
            if (GB.url === ZB) return;
            JB.refetched++;
            const IB = this.QF(BB, GB.ask);
            return IB.recheck = GB.recheck, void this.fetch(BB, IB, ZB, oB)
          }
          const vB = this.written.get(BB);
          void 0 === vB ? this.drawn.get(BB) !== (null !== ZB && void 0 !== ZB ? ZB : void 0) && (JB.resent++, this.fetch(BB, this.QF(BB, !1), ZB, oB)) : vB.url !== (null !== ZB && void 0 !== ZB ? ZB : "") && (vB.attempt.recheck = !0)
        })), JB
      }
      taken(BB, IB) {
        const ZB = new Set,
          TB = new Set;
        for (const JB of Array.from(IB)) 0 === (JB & cB) ? ZB.add(JB) : TB.add((JB & ~cB) >>> 0);
        for (const [JB, oB] of this.written) oB.seq > BB || (this.written.delete(JB), ZB.has(oB.seq) ? this.refusedFile(JB, oB) : this.takenFile(JB, oB, !oB.empty && !TB.has(oB.seq)))
      }
      takenFile(BB, IB, ZB) {
        const {
          attempt: TB
        } = IB;
        if (ZB) {
          var JB;
          this.drawn.set(BB, IB.url), this.undrawn.delete(BB), void 0 !== TB.inPlaceOf ? this.refusedPack.set(BB, TB.inPlaceOf) : TB.sv || this.refusedPack.delete(BB), null === (JB = this.onTaken) || void 0 === JB || JB.call(this, BB, !0);
          const ZB = this.pending.get(BB);
          if (!0 === (null === ZB || void 0 === ZB ? void 0 : ZB.sv) && ZB.url !== IB.url) {
            const ZB = this.QF(BB, !0);
            ZB.sv = !0, ZB.recheck = !0, this.fetch(BB, ZB, IB.url)
          }
        } else {
          var oB;
          this.drawn.has(BB) || this.undrawn.add(BB), null === (oB = this.onTaken) || void 0 === oB || oB.call(this, BB, !1)
        }
        TB.recheck && this.resendIfChanged(BB)
      }
      refusedFile(BB, IB) {
        var ZB, TB;
        if (null === (ZB = this.onTaken) || void 0 === ZB || ZB.call(this, BB, !1), this.refusedPack.set(BB, IB.url), this.pending.has(BB)) return void(null === (TB = this.onPackFileFailed) || void 0 === TB || TB.call(this, BB, NB(IB.url)));
        const JB = this.QF(BB, IB.attempt.ask);
        JB.recheck = IB.attempt.recheck, this.afterRefusal(BB, JB, IB.url)
      }
      async afterRefusal(BB, IB, ZB) {
        var TB;
        let JB;
        try {
          JB = await this.wanted(BB)
        } catch (oB) {
          return void(this.pending.get(BB) === IB && this.giveUp(BB, IB, ZB, oB))
        }
        this.pending.get(BB) === IB && (JB.inPlaceOf !== ZB ? IB.ask || (null !== (TB = JB.url) && void 0 !== TB ? TB : void 0) !== this.drawn.get(BB) ? this.fetch(BB, IB, JB.url, JB.inPlaceOf) : this.pending.delete(BB) : this.fallBack(BB, IB, ZB, NB(ZB)))
      }
      QF(BB, IB) {
        const ZB = {
          url: void 0,
          ask: IB,
          sv: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(BB, ZB);
        for (let TB = this.ready.length - 1; TB >= 0; TB--) this.ready[TB].file === BB && this.ready.splice(TB, 1);
        return ZB
      }
      async wanted(BB) {
        const IB = await this.files.url(BB);
        return null !== IB && this.refusedPack.get(BB) === IB ? {
          url: await this.files.shippedUrl(BB),
          inPlaceOf: IB
        } : {
          url: IB,
          inPlaceOf: void 0
        }
      }
      fetchWanted(BB, IB) {
        const ZB = this.files.url(BB);
        ZB instanceof Promise ? ZB.then((ZB => {
          this.fetchFound(BB, IB, ZB)
        }), (ZB => {
          this.pending.get(BB) === IB && this.giveUp(BB, IB, "", ZB)
        })) : this.fetchFound(BB, IB, ZB)
      }
      fetchFound(BB, IB, ZB) {
        null !== ZB && this.refusedPack.get(BB) === ZB ? Promise.resolve(this.files.shippedUrl(BB)).then((TB => {
          this.fetch(BB, IB, TB, ZB)
        }), (TB => {
          this.pending.get(BB) === IB && this.giveUp(BB, IB, ZB, TB)
        })) : this.fetch(BB, IB, ZB)
      }
      fetch(BB, IB, ZB, TB) {
        this.pending.get(BB) === IB && (IB.url = ZB, IB.inPlaceOf = TB, null !== ZB ? this.load(BB, IB, ZB) : this.buildFile(BB, IB, "", nB))
      }
      load(BB, IB, ZB) {
        const TB = this.XF.get(BB);
        (null === TB || void 0 === TB ? void 0 : TB.url) !== ZB ? this.fetchFile(ZB).then((TB => {
          var JB, oB;
          this.pending.get(BB) === IB && (this.keptTotal += TB.byteLength - (null !== (JB = null === (oB = this.XF.get(BB)) || void 0 === oB ? void 0 : oB.glb.byteLength) && void 0 !== JB ? JB : 0), this.XF.set(BB, {
            url: ZB,
            glb: TB
          }), this.buildFile(BB, IB, ZB, TB))
        }), (TB => {
          this.pending.get(BB) === IB && this.fallBack(BB, IB, ZB, TB)
        })) : this.buildFile(BB, IB, ZB, TB.glb)
      }
      buildFile(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const GB = TB.byteLength > 0 && (0, oB.j)(ZB) ? (BB | oB.d) >>> 0 : BB;
        this.queueRecord(BB, IB, ZB, TB, this.build(GB, TB), JB)
      }
      queueRecord(BB, IB, ZB, TB, oB, vB) {
        oB.then((oB => {
          if (this.pending.get(BB) !== IB) return;
          if (JB.s + (0, JB.xe)(oB.byteLength) > JB.Qc) return void this.ringRefused(BB, IB, ZB, new hB(`${gB(ZB)}'s record is ${oB.byteLength-GB.c} bytes, past the cmd ring's ${JB.Qc}`), vB);
          const kB = {
            file: BB,
            url: ZB,
            payload: oB,
            glb: TB,
            attempt: IB
          };
          vB ? this.ready.unshift(kB) : this.ready.push(kB)
        }))
      }
      async fallBack(BB, IB, ZB, TB) {
        var JB;
        let oB = null,
          GB = TB;
        try {
          oB = await this.files.shippedUrl(BB)
        } catch (vB) {
          GB = vB
        }
        this.pending.get(BB) === IB && (null !== oB && oB !== ZB ? (null === (JB = this.onPackFileFailed) || void 0 === JB || JB.call(this, BB, TB), IB.ask || this.drawn.get(BB) !== oB ? (IB.url = oB, IB.inPlaceOf = ZB, this.load(BB, IB, oB)) : this.pending.delete(BB)) : this.giveUp(BB, IB, ZB, GB))
      }
      ringRefused(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, oB.j)(ZB) ? this.fallBack(BB, IB, ZB, TB): this.giveUp(BB, IB, ZB, TB, JB)
      }
      giveUp(BB, IB, ZB, JB) {
        let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: BB,
          url: gB(ZB),
          error: JB,
          startup: this.startupLeft.has(BB)
        }), IB.ask || !this.drawn.has(BB) ? (0, TB.U)(JB) ? this.queueRecord(BB, IB, ZB, nB, Promise.resolve((0, GB.n)(BB, (0, vB.k)(JB))), oB) : this.buildFile(BB, IB, ZB, nB, oB) : this.pending.delete(BB)
      }
      async resendIfChanged(BB) {
        var IB;
        if (0 !== (BB & oB.f)) return;
        let ZB;
        try {
          ZB = await this.wanted(BB)
        } catch {
          return
        }(null !== (IB = ZB.url) && void 0 !== IB ? IB : void 0) === this.drawn.get(BB) || this.pending.has(BB) || this.written.has(BB) || this.fetch(BB, this.QF(BB, !1), ZB.url, ZB.inPlaceOf)
      }
      drain(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === BB) return;
        let ZB = 0,
          TB = 0;
        for (; TB < this.ready.length && ZB < 262144;) {
          const vB = this.ready[TB];
          if (this.written.has(vB.file)) {
            TB++;
            continue
          }
          const nB = this.nextSeq;
          new DataView(vB.payload.buffer, vB.payload.byteOffset, vB.payload.byteLength).setUint32(GB.f, nB, !0);
          const zB = vB.attempt.sv && vB.glb.byteLength > 0 && this.drawn.get(vB.file) === vB.url;
          if (BB(kB, zB ? 1 : 0, vB.payload)) {
            if (this.nextSeq = nB >= cB - 1 ? 1 : nB + 1, this.ready.splice(TB, 1), ZB += vB.payload.byteLength, this.pending.delete(vB.file), this.startupLeft.delete(vB.file), this.written.set(vB.file, {
                seq: nB,
                url: vB.url,
                empty: 0 === vB.glb.byteLength,
                attempt: vB.attempt
              }), vB.glb.byteLength > 0) try {
              var JB;
              null === (JB = this.onWritten) || void 0 === JB || JB.call(this, vB.file, vB.glb)
            } catch (oB) {
              console.warn("ModelFeed: reading the file's images failed", oB)
            }
          } else {
            if (null === IB || 0 === vB.glb.byteLength || IB(vB.payload.byteLength)) return;
            this.ready.splice(TB, 1);
            const BB = new hB(`${gB(vB.url)}'s record is ${vB.payload.byteLength-GB.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(vB.file, vB.attempt, vB.url, BB, !0)
          }
        }
      }
    }

    function NB(BB) {
      return new zB(`presentation refused ${gB(BB)}`)
    }

    function gB(BB) {
      return BB.startsWith("data:") ? `${BB.slice(0,Math.min(Math.max(BB.indexOf(","),5),64))},...` : BB
    }
  },
  40829: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      f: () => oB,
      i: () => nB,
      j: () => vB,
      m: () => cB,
      q: () => kB
    });
    var TB = ZB(3043),
      JB = ZB(3372);
    const oB = 2147483648,
      GB = 1073741824;

    function vB(BB) {
      return BB.startsWith("data:")
    }

    function kB(BB) {
      let {
        onTableFailed: IB,
        packUrl: ZB
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const TB = cB();
      TB.catch((BB => {
        null === IB || void 0 === IB || IB(BB)
      }));
      const JB = async IB => (await TB).fileUrl((IB & ~oB) >>> 0, BB);
      return {
        startup: [],
        url: async BB => {
          if (ZB && 0 === (BB & oB)) {
            const IB = await TB,
              JB = IB.filePackName(BB),
              oB = null === JB || "lifeform" === IB.fileSource(BB) ? null : ZB(JB);
            if (null !== oB) return oB
          }
          return JB(BB)
        },
        shippedUrl: JB
      }
    }

    function cB() {
      return ZB.e(42).then((() => ZB(42644)))
    }
    async function nB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return BB.startsWith("data:") ? (0, JB.d)(BB.slice(BB.indexOf(",") + 1), IB) : (0, TB.K)(BB, {
        spare: IB
      })
    }
  },
  40834: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB,
      f: () => nB,
      i: () => FB,
      m: () => qB,
      n: () => NB,
      r: () => zB,
      v: () => gB
    });
    const TB = 826427981,
      JB = 1,
      oB = 2,
      GB = 44,
      vB = 46,
      kB = 58,
      cB = 8,
      nB = 4;

    function hB(BB, IB, ZB) {
      const JB = (new TextEncoder).encode(ZB),
        oB = cB + 4 * (IB.length + 2),
        GB = new Uint8Array(oB + (JB.byteLength + 3 & -4)),
        vB = new DataView(GB.buffer);
      return vB.setUint32(0, BB, !0), vB.setUint32(cB, TB, !0), IB.forEach(((BB, IB) => {
        vB.setUint32(cB + 4 * (IB + 1), BB, !0)
      })), vB.setUint32(oB - 4, JB.byteLength, !0), GB.set(JB, oB), GB
    }

    function zB(BB, IB) {
      return hB(BB, [oB], IB)
    }

    function FB(BB, IB) {
      return hB(BB, [JB, vB], IB)
    }

    function NB(BB, IB) {
      return hB(BB, [JB, kB], IB)
    }

    function gB(BB, IB) {
      return hB(BB, [JB, GB], IB)
    }

    function qB(BB) {
      const IB = cB;
      if (BB.byteLength < IB + 12) return !1;
      const ZB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      return ZB.getUint32(IB, !0) === TB && ZB.getUint32(IB + 4, !0) === JB && ZB.getUint32(IB + 8, !0) === GB
    }
  },
  40768: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB,
      e: () => nB,
      f: () => GB,
      h: () => kB
    });
    var TB = ZB(36297);
    class JB extends Error {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${BB}: the module trapped${ZB?" in an earlier call":""}: ${String(IB)}`, {
          cause: IB
        }), this.site = BB, this.trap = IB, this.earlier = ZB, this.name = "ModuleTrapError", IB instanceof Error && void 0 !== IB.stack && (this.stack = `${this.name}: ${this.message}\n${IB.stack}`)
      }
    }
    const oB = new WeakMap;

    function GB(BB) {
      return oB.has(BB)
    }

    function vB(BB, IB) {
      oB.has(BB) || oB.set(BB, IB)
    }

    function kB(BB, IB) {
      return !!(0, TB.h)(IB) && (vB(BB, IB), !0)
    }
    const cB = [
      ["error", BB => BB.error],
      ["unhandledrejection", BB => BB.reason]
    ];

    function nB(BB, IB, ZB) {
      let GB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return oB.has(BB) ? Promise.reject(new JB(IB, oB.get(BB), !0)) : new Promise(((oB, kB) => {
        const nB = ZB => {
            vB(BB, ZB), FB(), kB(new JB(IB, ZB))
          },
          hB = BB => {
            BB instanceof WebAssembly.RuntimeError ? nB(BB) : (FB(), kB(BB))
          },
          zB = cB.map((BB => {
            let [IB, ZB] = BB;
            return [IB, BB => {
              const IB = ZB(BB);
              (0, TB.h)(IB) && nB(IB)
            }]
          })),
          FB = () => {
            for (const [BB, IB] of zB) null === GB || void 0 === GB || GB.removeEventListener(BB, IB)
          };
        for (const [BB, IB] of zB) null === GB || void 0 === GB || GB.addEventListener(BB, IB);
        let NB;
        try {
          NB = ZB()
        } catch (gB) {
          return void hB(gB)
        }
        NB.then((BB => {
          FB(), oB(BB)
        }), hB)
      }))
    }
  },
  40751: (BB, IB, ZB) => {
    ZB.d(IB, {
      $: () => aB,
      B: () => uB,
      E: () => eB,
      I: () => jB,
      L: () => wB,
      M: () => HB,
      P: () => fB,
      T: () => MB,
      X: () => RB,
      ab: () => lB,
      e: () => sB,
      f: () => dB,
      g: () => rB,
      j: () => PB,
      m: () => WB,
      o: () => QB,
      s: () => yB,
      w: () => YB,
      x: () => pB
    });
    var TB = ZB(212),
      JB = ZB(20),
      oB = ZB(3726),
      GB = ZB(339),
      vB = ZB(36),
      kB = ZB(40759),
      cB = ZB(36501),
      nB = ZB(40780),
      hB = (ZB(40804), ZB(40860)),
      zB = ZB(40799);
    const FB = "wasmJoinBuild";
    let NB = null,
      gB = null,
      qB = null;

    function yB(BB) {
      qB = BB
    }
    let UB = !1;

    function WB() {
      UB = !0
    }

    function dB() {
      return UB
    }
    let CB = !1;

    function QB() {
      CB = !0
    }

    function sB() {
      return CB
    }

    function wB() {
      return qB
    }
    let OB = null;

    function YB(BB) {
      OB = BB, (0, GB.e)(BB)
    }
    const iB = "wasmClientRenderLost";

    function pB() {
      vB.n.setItem(iB, !0)
    }

    function aB() {
      return !0 === vB.n.getItem(iB)
    }

    function HB() {
      return OB
    }

    function MB() {
      if (null === NB) {
        vB.m.removeItem("wasmLastPick"), vB.m.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, GB.k)(), NB = (0, kB.A)(nB.g).then((BB => (null === BB || (0, kB.o)(BB) || (gB = hB.b[BB.backend], JB.d.followGameGpu("webgpu" === BB.backend ? BB.adapter : null), "webgpu" === BB.backend && (0, zB.g)()), BB)))
      }
      return NB
    }

    function jB() {
      return gB
    }

    function PB(BB) {
      return BB ? BB.load() : Promise.resolve().then((function() {
        var BB = new Error("Cannot find module '@bloxd/wasm/client'");
        throw BB.code = "MODULE_NOT_FOUND", BB
      })).then((BB => BB.bloxdWasmClient))
    }

    function RB(BB) {
      vB.m.setItem(FB, BB)
    }
    async function rB() {
      if (null === nB.g) return PB(null);
      const BB = vB.m.getItem(FB);
      let IB;
      return null === BB ? IB = void 0 !== (0, TB.e)(nB.g, "webgpu") && (0, kB.y)() ? "webgpu" : "webgl" : "none" === BB ? IB = null : "string" === typeof BB && void 0 !== (0, TB.e)(nB.g, BB) ? IB = BB : (console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(BB)}, is none of this client's: guessing WebGL2's`), IB = "webgl"), null === IB ? null : nB.g[IB]()
    }
    let mB = null,
      XB = null,
      LB = null;

    function eB() {
      return mB ??= MB().then((async BB => {
        const IB = null !== BB && !(0, kB.o)(BB),
          ZB = {
            indirectHangs: IB && await (0, kB.N)(BB, window.location.search),
            storagePullBreaks: IB && (0, kB.W)(BB, window.location.search),
            splitPassBreaks: IB && (0, kB.U)(BB, window.location.search),
            earlySky: IB && (0, kB.J)(BB, window.location.search),
            instancedTerrain: IB ? (0, kB.O)(BB, window.location.search) : null,
            cellLight: IB && await (0, oB.i)("cellLight"),
            framesAhead: (0, kB.i)(window.location.search),
            webGpuRestores: !IB || (0, kB.X)(BB, (0, cB.d)()),
            bufferCopiesCrash: IB && (0, kB.G)(BB, window.location.search)
          };
        return XB = ZB.indirectHangs, LB = !ZB.webGpuRestores, ZB
      })), mB
    }

    function uB() {
      return XB
    }

    function fB() {
      return LB
    }
    async function lB() {
      const BB = null === NB ? null : await NB;
      return null !== BB && (0, kB.o)(BB) && (NB = null, mB = null, XB = null, LB = null), MB()
    }
  },
  41008: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB = ZB(36330),
      JB = ZB(40884),
      oB = ZB(36501);

    function GB(BB, IB) {
      return (0, TB.h)(BB, JB.h, {
        ...IB,
        memoryMaximumBytes: (0, oB.o)()
      })
    }
  },
  40771: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB,
      e: () => vB,
      h: () => nB,
      i: () => GB
    });
    var TB = ZB(357),
      JB = ZB(680);
    let oB;

    function GB(BB) {
      var IB;
      const ZB = oB;
      return oB = void 0, null !== (IB = kB(BB)) && void 0 !== IB ? IB : ZB
    }

    function vB(BB) {
      try {
        const IB = kB(BB);
        void 0 !== IB && (oB = IB, (0, JB.g)((0, TB.s)(IB.reason, IB.message)))
      } catch (IB) {
        console.warn("Couldn't keep the WebGPU loss's cause", IB)
      }
    }

    function kB(BB) {
      var IB;
      const ZB = null === BB || void 0 === BB || null === (IB = BB.XoB) || void 0 === IB ? void 0 : IB.call(BB),
        TB = null === BB || void 0 === BB ? void 0 : BB.moB();
      if (void 0 === TB) return;
      const JB = new Error(TB);
      return void 0 !== ZB && (JB.reason = ZB), JB
    }

    function cB(BB) {
      return BB instanceof Error ? BB : void 0
    }

    function nB(BB, IB) {
      return "lost" !== BB && "frames_refused" !== BB ? {} : (0, TB.s)("frames_refused" === BB ? BB : null === IB || void 0 === IB ? void 0 : IB.reason, null === IB || void 0 === IB ? void 0 : IB.message)
    }
  },
  40792: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => wB,
      c: () => WB,
      d: () => UB,
      e: () => sB,
      h: () => pB,
      j: () => iB,
      n: () => aB,
      q: () => CB
    });
    var TB = ZB(4975),
      JB = ZB(40799);
    const oB = 1,
      GB = 18,
      vB = 19,
      kB = 20,
      cB = 21,
      nB = {
        [oB]: "link",
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
        [GB]: "retry linked",
        [vB]: "fallback linked",
        [kB]: "fallback failed",
        [cB]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function hB(BB, IB, ZB) {
      return BB === GB ? "program retry" : BB === oB ? "program link" : BB === cB ? "program link stall" : BB === vB || BB === kB ? `program ${IB} ${ZB}` : "program"
    }
    const zB = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      FB = {
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
      NB = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      gB = {
        11: "none read after view",
        12: "some read after view"
      },
      qB = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...gB
      },
      yB = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function UB(BB, IB) {
      return BB === TB.n.RenderSerialLinks && void 0 !== gB[IB]
    }

    function WB(BB, IB) {
      return BB === TB.n.RenderSerialLinks && void 0 !== yB[15 & IB]
    }
    const dB = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function CB(BB) {
      return String(BB).replace(/\d/g, (BB => String.fromCharCode(97 + Number(BB))))
    }

    function QB(BB, IB) {
      var ZB;
      return null !== (ZB = BB[IB]) && void 0 !== ZB ? ZB : CB(IB)
    }

    function sB() {
      return CB((0, JB.e)())
    }

    function wB(BB, IB) {
      switch (BB) {
        case TB.n.RenderSceneRowNotDrawn:
          return {
            words: ` ${QB(FB,IB)}`, instance: String(IB), group: String(BB)
          };
        case TB.n.RenderChunkMeshNotDrawn: {
          const ZB = 0 === (128 & IB) ? "" : " shortage",
            TB = IB >>> 8;
          return {
            words: ` ${QB(NB,127&IB)}${ZB}${0===TB?"":` kind ${CB(TB)}`}`,
            instance: String(IB),
            group: String(BB)
          }
        }
        case TB.n.RenderInternal: {
          const ZB = QB(zB, 255 & IB),
            TB = IB >>> 8 & 255;
          if (0 === TB) return {
            words: ` ${ZB}`,
            instance: String(IB),
            group: String(BB)
          };
          const JB = QB(nB, TB),
            oB = IB >>> 16;
          return {
            words: ` ${ZB} ${JB} program ${CB(oB)}`,
            instance: `${ZB} ${JB} ${oB}`,
            group: hB(TB, JB, ZB),
            gpuDetails: {
              programFailure: JB,
              program: String(oB)
            }
          }
        }
        case TB.n.RenderSerialLinks: {
          if (WB(BB, IB)) {
            const BB = function(BB) {
              const IB = (IB, ZB) => CB(BB >>> IB & (1 << ZB) - 1),
                ZB = BB >>> 30 & 1 ? " restored" : "";
              return `link census ${yB[15&BB]} linked ${IB(22,8)} failed ${IB(4,6)} retried ${IB(10,6)} fallback ${IB(16,6)}${ZB}`
            }(IB);
            return {
              words: ` ${BB}`,
              instance: String(15 & IB),
              group: "link census",
              gpuDetails: {
                linkCensus: BB
              }
            }
          }
          const ZB = QB(qB, IB);
          return {
            words: ` ${ZB}`,
            instance: String(IB),
            group: String(BB),
            gpuDetails: {
              serialLinks: ZB
            }
          }
        }
        case TB.n.RenderGlErrorAfterRestore: {
          const ZB = QB(dB, 65535 & IB),
            TB = IB >>> 16,
            JB = 65535 !== TB;
          return {
            words: ` ${ZB}${JB?` program ${CB(TB)}`:""}`,
            instance: String(IB),
            group: String(BB),
            gpuDetails: JB ? {
              glError: ZB,
              program: String(TB)
            } : {
              glError: ZB
            }
          }
        }
        default:
          return null
      }
    }
    const OB = 2,
      YB = new Map;

    function iB(BB) {
      let {
        group: IB,
        instance: ZB
      } = BB, TB = YB.get(IB);
      return void 0 === TB && (TB = [], YB.set(IB, TB)), !TB.includes(ZB) && (TB.length >= OB || (TB.push(ZB), !1))
    }

    function pB() {
      return YB.size > 0
    }

    function aB() {
      YB.clear()
    }
  },
  40780: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      g: () => oB
    });
    var TB = ZB(40784);
    const JB = new WeakSet;
    const oB = {
        webgpu: async () => (function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === BB || JB.has(BB.prototype)) return;
          JB.add(BB.prototype);
          const IB = BB.prototype.requestDevice;
          BB.prototype.requestDevice = function(BB) {
            var ZB;
            const JB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.requiredLimits) && void 0 !== ZB ? ZB : {},
              oB = Object.keys(JB).filter((BB => !(BB in this.limits)));
            if (0 === oB.length) return IB.call(this, BB);
            const GB = Object.fromEntries(Object.entries(JB).filter((BB => {
              let [IB] = BB;
              return IB in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${oB.join(", ")}`), (0, TB.reportDroppedRequiredLimits)(oB), IB.call(this, {
              ...BB,
              requiredLimits: GB
            })
          }
        }(), (await ZB.e(8).then((() => ZB(42595)))).bloxdWasmWebgpu),
        webgl: async () => (await ZB.e(6).then((() => ZB(42610)))).bloxdWasmWebgl,
        webgl1: async () => (await ZB.e(7).then((() => ZB(42619)))).bloxdWasmWebgl1
      },
      GB = async () => (await ZB.e(5).then((() => ZB(42634)))).compileAnimationPackInWasm
  },
  40738: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => yB,
      e: () => qB,
      h: () => CB
    });
    var TB = ZB(6784),
      JB = ZB(24),
      oB = ZB(4479),
      GB = ZB(4975),
      vB = ZB(6780),
      kB = ZB(40741);

    function cB(BB, IB) {
      const ZB = (0, vB.c)(IB.variants);
      return BB.setShaderPack(ZB.variantFlags, ZB.hooks, ZB.moduleCodes, (0, kB.A)(IB.layers), kB.p[IB.ov], IB.keepCircleShadows)
    }
    const nB = 0,
      hB = 1,
      zB = 2,
      FB = "shaderPack:failedToCompile",
      NB = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      gB = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function qB(BB, IB) {
      var ZB;
      const TB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.reason) && void 0 !== ZB ? ZB : "none";
      return NB.has(TB) ? {
        messageKey: IB ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === TB && "override" === (null === BB || void 0 === BB ? void 0 : BB.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: gB.has(TB) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class yB extends Error {
      constructor(BB) {
        super(`the shader pack can't run in this game: ${BB}`), this.messageKey = BB, this.name = "ShaderPackJoinError"
      }
    }
    const UB = "strict";
    class WB {
      constructor(BB) {
        this.deps = BB, this.pagePack = void 0, this.loaded = null, this.ov = UB, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = BB.load().catch((IB => (BB.warn("the shader pack could not load: the game draws without it", IB), {
          status: "none"
        }))).then((BB => (this.loaded = BB, "active" === BB.status && (this.handOverToPreviews(BB), null !== BB.harnessPolicy && (this.ov = BB.harnessPolicy, this.handOver())), BB)))
      }
      async join(BB) {
        this.leave();
        const IB = this.game,
          [ZB, JB] = await Promise.all([this.pagePack, this.policyOf(BB)]);
        if (IB !== this.game || "none" === ZB.status) return null;
        const oB = "active" === ZB.status ? ZB.pack.variants : ZB.variants,
          GB = (0, TB.l)(oB, JB);
        if (GB && "active" === ZB.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (GB) {
          const BB = this.cantRun(ZB, JB);
          if (null !== BB) return BB
        } else if ("blocked" === ZB.status || null === this.deps.core) return null;
        return this.ov = JB, this.handOver(), GB && this.refused ? FB : (this.joined = !0, this.offInThisGame = !GB, null)
      }
      async replay(BB) {
        const IB = await this.join(BB);
        null === IB ? this.playable() : this.deps.failInGame(IB)
      }
      cantRun(BB, IB) {
        const {
          core: ZB,
          noWebGpu: TB
        } = this.deps;
        if ("blocked" === BB.status) {
          return "shaderPack:failedUnchecked" === BB.messageKey && null === ZB && TB.noAdapter ? TB.messageKey : BB.messageKey
        }
        return this.refused || this.failedPolicies.has(IB) ? FB : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var BB;
        return this.runsInJoinedGame() && "active" === (null === (BB = this.loaded) || void 0 === BB ? void 0 : BB.status) ? function(BB, IB) {
          const ZB = BB.filter((BB => (0, TB.l)([BB], IB))),
            JB = BB => ZB.some((IB => IB[BB]));
          return {
            sceneDepth: JB("sceneDepth"),
            sunShadow: JB("sunShadow"),
            airShadow: JB("airShadow")
          }
        }(this.loaded.pack.variants, this.ov) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(FB) : (null !== this.couldntRun ? this.notify(oB.c, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.ov) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(BB) {
        for (const {
            code: IB,
            detail: ZB
          }
          of BB)
          if (IB === GB.n.RenderShaderPackNotRun) switch (255 & ZB) {
            case nB:
              this.refused = !0, this.failed();
              break;
            case hB:
              this.failedPolicies.add(this.ov), this.failed();
              break;
            case zB:
              this.failedModelPolicies.add(this.ov), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(FB) : this.failedWhileJoining = !0)
      }
      fail(BB) {
        this.leave(), this.deps.failInGame(BB)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(BB, IB) {
        const ZB = this.game;
        this.deps.notify(BB, (() => ZB === this.game && this.joined), IB)
      }
      handOver() {
        var BB;
        const {
          core: IB
        } = this.deps;
        null !== IB && "active" === (null === (BB = this.loaded) || void 0 === BB ? void 0 : BB.status) && (cB(IB, {
          ...this.loaded.pack,
          ov: this.ov
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(BB) {
        let {
          pack: IB,
          harnessPolicy: ZB
        } = BB;
        const {
          previews: TB
        } = this.deps;
        null !== TB && cB(TB, {
          ...IB,
          ov: null !== ZB && void 0 !== ZB ? ZB : UB
        })
      }
      policyOf(BB) {
        return this.deps.policyOf(BB).catch((BB => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", BB), UB)))
      }
    }
    const dB = "wasmShaderPackNotice";

    function CB(BB, IB, ZB, TB) {
      return JB.l.subscribe(dB, (BB => {
        let {
          translationKey: IB,
          stillCurrent: ZB,
          reasonKey: TB
        } = BB;
        ZB() && JB.l.Gq("chat", (0, oB.j)(IB, TB))
      })), new WB({
        load: QB,
        policyOf: sB,
        core: BB,
        previews: IB,
        noWebGpu: ZB,
        notify: (BB, IB, ZB) => {
          const TB = {
            translationKey: BB,
            stillCurrent: IB,
            reasonKey: ZB
          };
          JB.l.Gq(dB, TB, !0)
        },
        failInGame: BB => {
          JB.l.Gq(oB.f, BB)
        },
        warn: TB
      })
    }
    async function QB() {
      const [{
        shaderPackPage: BB,
        harnessShaderPackMode: IB
      }, {
        shaderPackTextures: TB
      }] = await Promise.all([ZB.e(117).then((() => ZB(39281))), ZB.e(118).then((() => ZB(6778)))]), JB = await BB.load();
      return "active" !== JB.status ? JB : {
        status: "active",
        pack: {
          variants: JB.pack.variants,
          layers: TB().layers,
          keepCircleShadows: JB.pack.keepCircleShadows
        },
        harnessPolicy: IB()
      }
    }
    async function sB(BB) {
      var IB;
      const [{
        shaderPackPage: TB,
        harnessShaderPackMode: JB
      }, {
        getShaderPackPolicy: oB
      }] = await Promise.all([ZB.e(117).then((() => ZB(39281))), ZB.e(93).then((() => ZB(41304)))]);
      return await TB.load(), null !== (IB = JB()) && void 0 !== IB ? IB : oB(BB)
    }
  },
  40840: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB,
      h: () => qB,
      k: () => kB,
      n: () => cB,
      q: () => nB,
      r: () => zB
    });
    var TB = ZB(40846),
      JB = ZB(40851);
    const oB = "atlas:",
      GB = 3e4;
    class vB extends Error {
      constructor(BB, IB) {
        super(`fetching ${BB} answered HTTP ${IB}`), this.url = BB, this.status = IB, this.name = "TerrainTextureFetchError"
      }
    }

    function kB(BB) {
      if (!BB.startsWith(oB)) return null;
      const IB = Number(BB.slice(oB.length));
      return Number.isInteger(IB) && IB >= 0 ? IB : null
    }
    async function cB() {
      const BB = await ZB.e(207).then((() => ZB(34276)));
      return {
        atlasSheets: BB.blockAtlasUrls,
        texture: IB => {
          var ZB, TB, oB;
          return null !== (ZB = null !== (TB = null !== (oB = BB.animatedBlockTextures[IB]) && void 0 !== oB ? oB : BB.rotatedBlockTextures[IB]) && void 0 !== TB ? TB : JB.c[IB]) && void 0 !== ZB ? ZB : null
        }
      }
    }
    async function nB(BB) {
      const IB = new AbortController,
        ZB = setTimeout((() => {
          IB.abort(new DOMException(`${BB} took over ${GB} ms`, "TimeoutError"))
        }), GB);
      let TB;
      try {
        const ZB = await fetch(BB, {
          signal: IB.signal
        });
        if (!ZB.ok) throw new vB(BB, ZB.status);
        TB = await ZB.blob()
      } finally {
        clearTimeout(ZB)
      }
      const JB = await createImageBitmap(TB, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return zB(JB)
      } finally {
        JB.close()
      }
    }
    const hB = 8192;

    function zB(BB) {
      const {
        width: IB,
        height: ZB
      } = BB, JB = Math.max(1, Math.min(ZB, hB)), oB = (0, TB.f)(IB, JB, {
        willReadFrequently: !0
      });
      if (!oB) throw new Error("no 2D context to read the texture back");
      oB.globalCompositeOperation = "copy";
      const GB = new Uint8Array(IB * ZB * 4);
      for (let TB = 0; TB < ZB; TB += JB) {
        const vB = Math.min(JB, ZB - TB);
        oB.drawImage(BB, 0, TB, IB, vB, 0, 0, IB, vB), GB.set(oB.getImageData(0, 0, IB, vB).data, TB * IB * 4)
      }
      return {
        width: IB,
        height: ZB,
        pixels: GB
      }
    }
    async function FB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nB;
      const TB = [],
        JB = await Promise.all(BB.map((async BB => {
          var JB, GB;
          const vB = null !== (JB = null === (GB = IB.decoded) || void 0 === GB ? void 0 : GB.call(IB, BB)) && void 0 !== JB ? JB : null,
            cB = null === vB ? function(BB, IB) {
              if (BB.startsWith(oB)) {
                var ZB;
                const TB = kB(BB);
                return null === TB ? null : null !== (ZB = IB.atlasSheets[TB]) && void 0 !== ZB ? ZB : null
              }
              return IB.texture(BB)
            }(BB, IB) : null,
            nB = null !== vB && void 0 !== vB ? vB : null === cB ? null : ZB(cB);
          if (null === nB) return TB.push({
            name: BB,
            url: cB,
            error: new Error(`no URL for terrain texture ${BB}`)
          }), null;
          try {
            const IB = await nB;
            if (IB.pixels.byteLength !== IB.width * IB.height * 4) throw new Error(`decoded ${IB.pixels.byteLength} bytes for ${IB.width}x${IB.height} texels`);
            return {
              name: BB,
              texture: IB
            }
          } catch (hB) {
            return TB.push({
              name: BB,
              url: cB,
              error: hB
            }), null
          }
        }))),
        GB = JB.filter((BB => null !== BB)),
        vB = new Uint32Array(2 * GB.length);
      GB.forEach(((BB, IB) => {
        let {
          texture: ZB
        } = BB;
        vB[2 * IB] = ZB.width, vB[2 * IB + 1] = ZB.height
      }));
      return {
        handOver: {
          names: GB.map((BB => {
            let {
              name: IB
            } = BB;
            return IB
          })),
          textures: GB.map((BB => {
            let {
              texture: IB
            } = BB;
            return IB.pixels
          })),
          sizes: vB
        },
        failures: TB
      }
    }
    const NB = [2e3, 1e4, 3e4, 6e4, 12e4];

    function gB() {}
    class qB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NB,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = BB, this.retryMs = IB, this.keepBelow = ZB, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const TB = ++this.started,
          JB = {
            decode: ZB.decode,
            wholeAtlas: ZB.wholeAtlas
          };
        return this.loadAndHandOver(IB, JB, BB, (() => {
          var BB;
          return TB < this.landed || !1 === (null === (BB = ZB.wanted) || void 0 === BB ? void 0 : BB.call(ZB))
        }), {
          onTaken: (BB, ZB) => {
            this.landed = TB, this.current = {
              mine: TB,
              sources: IB,
              load: JB,
              XF: BB,
              failed: ZB
            }
          }
        })
      }
      restore(BB) {
        var IB;
        const ZB = this.current;
        if (null === ZB) return Promise.resolve(null);
        if ((null === (IB = this.restoring) || void 0 === IB ? void 0 : IB.mine) === ZB.mine) return this.restoring.done;
        const TB = {
          mine: ZB.mine,
          done: this.restoreLanded(ZB, BB).finally((() => {
            this.restoring === TB && (this.restoring = null)
          }))
        };
        return this.restoring = TB, TB.done
      }
      async restoreLanded(BB, IB) {
        const ZB = () => this.landed !== BB.mine,
          {
            XF: TB
          } = BB;
        if (null !== TB) return this.stopped() ? null : this.core.setTerrainTextures(TB.names, TB.textures, TB.sizes);
        let JB = IB;
        for (let oB = 0;; oB++) {
          const IB = this.retryMs.at(oB),
            TB = {
              allOrNothingExcept: void 0 === IB ? void 0 : BB.failed
            },
            GB = await this.loadAndHandOver(BB.sources, BB.load, JB, ZB, TB);
          if (!1 !== GB || void 0 === IB || this.stopped()) return GB;
          if (JB = gB, await new Promise((BB => {
              setTimeout(BB, IB)
            })), ZB()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const oB = this.core.terrainTextureNames();
        var GB;
        if (0 === oB.length) return null === (GB = JB.onTaken) || void 0 === GB || GB.call(JB, null, new Set), !0;
        let vB, cB;
        try {
          vB = await BB(), cB = await FB(oB, vB, IB.decode)
        } catch (qB) {
          return TB() ? null : (ZB({
            name: null,
            url: null,
            error: qB
          }), !1)
        }
        if (TB() || this.stopped()) return null;
        for (const kB of cB.failures) ZB(kB);
        const nB = JB.allOrNothingExcept;
        if (void 0 !== nB && cB.failures.some((BB => {
            let {
              name: IB
            } = BB;
            return null === IB || !nB.has(IB)
          })) || !0 === IB.wholeAtlas && cB.failures.some((BB => {
            let {
              name: IB
            } = BB;
            return null === IB || null !== kB(IB)
          }))) return !1;
        const {
          handOver: hB
        } = cB, zB = function(BB) {
          return BB.textures.reduce(((BB, IB) => BB + IB.byteLength), 0)
        }(hB) < this.keepBelow, NB = this.core.setTerrainTextures(hB.names, hB.textures, hB.sizes, zB ? void 0 : () => {
          !async function(BB, IB) {
            await IB;
            for (const {
                buffer: TB
              }
              of BB) {
              const BB = TB;
              var ZB;
              if (!BB.detached) null === (ZB = BB.transfer) || void 0 === ZB || ZB.call(BB, 0)
            }
          }(hB.textures, vB.heldUntil)
        });
        if (NB) {
          var gB;
          const BB = new Set(cB.failures.flatMap((BB => {
            let {
              name: IB
            } = BB;
            return null === IB ? [] : [IB]
          })));
          null === (gB = JB.onTaken) || void 0 === gB || gB.call(JB, zB ? hB : null, BB)
        }
        return NB
      }
    }
  },
  36869: (BB, IB, ZB) => {
    function TB(BB) {
      return "fetch" === BB || "timeout" === BB || "integrity" === BB ? "download" : "browser"
    }
    ZB.d(IB, {
      c: () => JB,
      d: () => GB,
      g: () => kB,
      k: () => vB,
      n: () => TB,
      q: () => oB
    });
    const JB = "https://discord.gg/playbloxd";

    function oB(BB) {
      return "download" === BB ? {
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

    function GB(BB, IB) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: IB ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: BB.code
        },
        discordLink: IB,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function vB() {
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

    function kB(BB, IB, ZB) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: ZB ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: BB.reason
        },
        discordLink: null === BB.name,
        confirm: IB ? "general:reconnect" : BB.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  34134: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB,
      g: () => hB,
      i: () => nB
    });
    var TB = ZB(273),
      JB = ZB(105),
      oB = ZB(138),
      GB = ZB(132),
      vB = ZB(682);
    const kB = new Set(["mali_bifrost"]);

    function cB() {
      if ("android" !== (0, JB.pageOperatingSystem)() || vB.c || (0, vB.b)("webgl_default")) return;
      const BB = (0, oB.m)(),
        IB = null === BB ? (0, TB.o)() : (0, TB.g)(BB.vendor, BB.renderer);
      return null !== IB && kB.has(IB) ? BB => (0, TB.j)((0, GB.d)(BB).vendor, IB) : void 0
    }

    function nB(BB, IB) {
      return BB ? () => !0 : IB()
    }
    async function hB(BB) {
      try {
        const IB = nB(BB, cB),
          ZB = navigator.gpu;
        if (void 0 === IB || void 0 === ZB) return !1;
        const TB = await (0, GB.o)(ZB, {
          seed: !1,
          compatibility: IB
        });
        return "string" !== typeof TB && TB.compatibility && !(0, GB.h)(TB.adapter)
      } catch (IB) {
        return console.error("WebGPU compatibility-mode adapter request failed.", IB), !1
      }
    }
  },
  40799: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => kB,
      g: () => cB
    });
    var TB = ZB(105),
      JB = ZB(38816);
    const oB = "webgpuPipeline";

    function GB(BB) {
      return BB.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let vB = null;

    function kB() {
      if (null === vB) try {
        BB = (0, TB.getBrowserName)(), IB = (0, TB.getBrowserVersion)(), ZB = (0, TB.getOperatingSystem)(), JB = (0, TB.getOperatingSystemVersion)(), vB = `${BB.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===IB?"unknown":GB(IB)}-${ZB}${void 0===JB?"":`_${GB(JB)}`}`
      } catch (oB) {
        console.warn("The user agent couldn't be read for its browser code", oB), vB = "unknown"
      }
      var BB, IB, ZB, JB;
      return vB
    }

    function cB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const IB = `WGPU-${kB()}`,
        TB = (BB, TB) => {
          const {
            reason: GB,
            message: vB
          } = TB;
          if ((0, JB.t)(String(vB))) return;
          const kB = {
            pipeline: null !== BB && void 0 !== BB ? BB : "",
            reason: String(GB),
            browserMessage: String(vB)
          };
          Promise.resolve().then((() => ZB(40784))).then((BB => {
            let {
              reportCrash: ZB
            } = BB;
            ZB({
              kind: "coreError",
              code: IB,
              site: oB,
              fatal: !1,
              message: `${kB.pipeline} ${kB.reason}: ${kB.browserMessage}`,
              details: kB,
              error: TB
            })
          })).catch((BB => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", BB)
          }))
        },
        GB = BB.createRenderPipelineAsync;
      BB.createRenderPipelineAsync = function(BB) {
        return GB.call(this, BB).catch((IB => {
          throw TB(BB.label, IB), IB
        }))
      };
      const vB = BB.createComputePipelineAsync;
      BB.createComputePipelineAsync = function(BB) {
        return vB.call(this, BB).catch((IB => {
          throw TB(BB.label, IB), IB
        }))
      }
    }
  },
  40896: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/bloxd_wasm_models_bg.c760ed098084919d0030.wasm"
  },
  40890: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/bloxd_wasm_workers_bg.865ac94736d6e582f801.wasm"
  },
  40884: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      h: () => TB
    });
    const TB = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new ZB.U(ZB(40890))
      }
    };
    const JB = {
      name: "bloxd_wasm_models",
      url: function() {
        return new ZB.U(ZB(40896))
      }
    }
  },
  6780: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => dB,
      e: () => CB,
      h: () => UB,
      i: () => yB
    });
    var TB = ZB(6784);
    const JB = 6,
      oB = 3,
      GB = 1,
      vB = 2,
      kB = 4,
      cB = 8,
      nB = 16,
      hB = 32,
      zB = 64,
      FB = 128,
      NB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function gB(BB) {
      if (!BB) return 0;
      const IB = NB.indexOf(BB);
      if (IB <= 0) throw new Error(`"${BB}" is not a shader pack hook function`);
      return IB
    }

    function qB(BB) {
      if (0 === BB) return null;
      const IB = NB[BB];
      if (void 0 === IB) throw new Error(`${BB} is not a shader pack hook function id`);
      return IB
    }

    function yB(BB) {
      const IB = TB.e.length;
      return {
        strict: BB >= IB,
        program: TB.e[BB % IB]
      }
    }

    function UB(BB) {
      return Number(BB.strict) * TB.e.length + TB.e.indexOf(BB.program)
    }

    function WB(BB) {
      return "" === BB ? [] : BB.split(" ")
    }

    function dB(BB) {
      const IB = {
        variantFlags: new Uint8Array(JB),
        hooks: new Uint8Array(JB * oB),
        moduleCodes: Array(JB).fill(""),
        reads: Array(2 * JB).fill("")
      };
      for (const ZB of BB) {
        const BB = UB(ZB.key),
          TB = (BB, IB) => null === ZB.hooks.surface || ZB.reads.fragment.includes(BB) ? 0 : IB;
        IB.variantFlags[BB] = (ZB.sceneDepth ? GB : 0) | (ZB.movesVertices ? vB : 0) | (ZB.sunShadow ? kB : 0) | (ZB.airShadow ? cB : 0) | (ZB.discards ? nB : 0) | TB("localPosition", hB) | TB("enchantSpeed", zB) | TB("enchantTier", FB), IB.hooks[BB * oB] = gB(ZB.hooks.vertex), IB.hooks[BB * oB + 1] = gB(ZB.hooks.surface), IB.hooks[BB * oB + 2] = gB(ZB.hooks.light), IB.moduleCodes[BB] = ZB.moduleCode, IB.reads[2 * BB] = ZB.reads.vertex.join(" "), IB.reads[2 * BB + 1] = ZB.reads.fragment.join(" ")
      }
      return IB
    }

    function CB(BB) {
      const {
        hooks: IB,
        moduleCodes: ZB,
        reads: TB
      } = BB;
      return Array.from(BB.variantFlags, ((BB, JB) => {
        const hB = JB * oB;
        return {
          key: yB(JB),
          hooks: {
            vertex: qB(IB[hB]),
            surface: qB(IB[hB + 1]),
            light: qB(IB[hB + 2])
          },
          moduleCode: ZB[JB],
          sceneDepth: 0 !== (BB & GB),
          sunShadow: 0 !== (BB & kB),
          airShadow: 0 !== (BB & cB),
          movesVertices: 0 !== (BB & vB),
          discards: 0 !== (BB & nB),
          reads: {
            vertex: WB(TB[2 * JB]),
            fragment: WB(TB[2 * JB + 1])
          }
        }
      }))
    }
  },
  40741: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => gB,
      B: () => FB,
      D: () => NB,
      e: () => JB,
      f: () => TB,
      i: () => zB,
      m: () => nB,
      p: () => qB,
      q: () => oB,
      s: () => vB,
      u: () => kB,
      w: () => GB
    });
    const TB = 3,
      JB = 0,
      oB = 1,
      GB = 2,
      vB = {
        uniform: 3,
        mz: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      kB = 10,
      cB = "BloxdPackInputs",
      nB = "bloxdPackInputs",
      hB = [{
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
      zB = 80;

    function FB() {
      const BB = hB.map((BB => {
        let {
          name: IB,
          type: ZB
        } = BB;
        return `    ${IB}: ${ZB},\n`
      })).join("");
      return `struct ${cB} {\n${BB}}\n@group(${TB}) @binding(${JB}) var<uniform> ${nB}: ${cB};\n`
    }

    function NB(BB, IB) {
      const ZB = new DataView(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, zB),
        [TB, JB, oB, GB, vB, kB] = hB;
      ZB.setFloat32(TB.offset, IB.seconds, !0), ZB.setUint32(JB.offset, IB.lit ? 1 : 0, !0);
      for (let cB = 0; cB < 3; cB++) ZB.setInt32(oB.offset + 4 * cB, IB.renderOffset[cB], !0), ZB.setFloat32(GB.offset + 4 * cB, IB.WBB[cB], !0), ZB.setFloat32(vB.offset + 4 * cB, IB.eyePosition[cB], !0), ZB.setFloat32(kB.offset + 4 * cB, IB.shadowDirection[cB], !0)
    }

    function gB(BB) {
      const IB = new Uint32Array(Math.max(1, BB.length));
      return BB.forEach(((BB, ZB) => {
        let {
          id: TB,
          rotation: JB
        } = BB;
        IB[ZB] = 65535 & TB | (3 & JB) << 16
      })), IB
    }
    const qB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6784: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      i: () => GB,
      l: () => vB,
      o: () => JB,
      s: () => oB
    });
    const TB = ["terrain", "liquid", "model"];

    function JB() {
      const BB = [];
      for (const IB of [!1, !0])
        for (const ZB of TB) BB.push({
          strict: IB,
          program: ZB
        });
      return BB
    }

    function oB(BB) {
      return `${BB.strict?"strict":"allow"}.${BB.program}`
    }

    function GB(BB) {
      return !BB.hooks.vertex && !BB.hooks.surface && !BB.hooks.light
    }

    function vB(BB, IB) {
      return "off" !== IB && (null === BB || BB.some((BB => BB.key.strict === ("strict" === IB) && !GB(BB))))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);