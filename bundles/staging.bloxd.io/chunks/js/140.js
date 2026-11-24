export const id = 140;
export const ids = [140];
export const modules = {
  38875: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB,
      e: () => rB,
      f: () => sB,
      h: () => yB,
      j: () => pB,
      m: () => aB,
      n: () => IB,
      p: () => JB
    });
    var QB = zB(355),
      nB = zB(1760);
    const dB = "A valid external Instance reference no longer exists.";

    function IB(BB) {
      return BB.includes(dB)
    }
    const NB = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      uB = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const UB = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function aB(BB, jB) {
      return BB ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(BB) {
        var jB;
        const zB = null !== (jB = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(BB)) && void 0 !== jB ? jB : /failed with ([A-Z][A-Z0-9_]+)/.exec(BB);
        return zB ? zB[1] : IB(BB) ? "gpu_process_lost" : "other"
      }(jB)
    }

    function pB(BB) {
      return `${(null===BB||void 0===BB?void 0:BB.vendor)||"unknown vendor"} ${(null===BB||void 0===BB?void 0:BB.architecture)||"unknown architecture"}`
    }

    function rB(BB) {
      return kB(BB)[1]
    }

    function sB(BB) {
      return kB(BB)[2]
    }

    function JB(BB, jB, zB) {
      const nB = (0, QB.f)(),
        dB = null !== nB && nB >= jB,
        IB = document.hidden ? "hidden" : dB ? "shown" : "visible",
        NB = dB ? zB - nB : null;
      return {
        page: null === NB ? IB : `${IB}${rB(NB)}`,
        code: `${BB}_${null===NB?IB:`${IB}_${sB(NB)}`}_${mB(zB)}`
      }
    }

    function mB(BB) {
      if ((0, nB.i)()) return "ad_open";
      const jB = (0, nB.e)();
      return null === jB ? "ad_none" : `ad_${sB(BB-jB.endedAt)}_${jB.pageHid?"h":"v"}`
    }

    function yB(BB) {
      return GB(uB, BB)[1]
    }

    function kB(BB) {
      return GB(NB, BB)
    }

    function GB(BB, jB) {
      var zB;
      return null !== (zB = BB.find((BB => {
        let [zB] = BB;
        return jB < zB
      }))) && void 0 !== zB ? zB : BB[BB.length - 1]
    }
  },
  40730: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB,
      g: () => aB,
      i: () => IB,
      l: () => nB,
      p: () => NB,
      t: () => UB
    });
    class QB extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function nB(BB) {
      return BB instanceof RangeError && /call stack/i.test(BB.message) || BB instanceof Error && "InternalError" === BB.name && /recursion/i.test(BB.message)
    }
    const dB = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function IB(BB) {
      var jB;
      return BB instanceof WebAssembly.RuntimeError || BB instanceof QB || nB(BB) && dB.test(null !== (jB = BB.stack) && void 0 !== jB ? jB : "")
    }

    function NB(BB, jB) {
      if (IB(BB)) throw BB;
      console.error(jB, BB)
    }

    function uB(BB, jB, zB, nB, dB) {
      if (jB % nB !== 0 || jB + zB > BB.byteLength) throw new QB(`${dB}: ${zB} bytes at ${jB}, ${nB}-aligned, outside ${BB.byteLength} bytes of memory`)
    }

    function UB(BB, jB, zB, QB, nB) {
      return 0 === zB ? null : (uB(jB, zB, QB * BB.BYTES_PER_ELEMENT, BB.BYTES_PER_ELEMENT, nB), new BB(jB, zB, QB))
    }

    function aB(BB, jB, zB, QB, nB) {
      return 0 === jB ? null : (uB(BB, jB, zB, QB, nB), new DataView(BB, jB, zB))
    }
  },
  40805: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => yj,
      C: () => KB,
      G: () => cB,
      J: () => eB,
      M: () => OB,
      O: () => RB,
      P: () => bB,
      Q: () => jj,
      S: () => rj,
      W: () => Bj,
      Z: () => vB,
      ab: () => zj,
      db: () => dj,
      e: () => fB,
      fb: () => uj,
      gb: () => HB,
      i: () => sj,
      l: () => kj,
      p: () => Nj,
      q: () => pj,
      r: () => nj,
      u: () => aj,
      y: () => Uj
    });
    var QB = zB(363),
      nB = zB(281),
      dB = zB(283),
      IB = zB(28),
      NB = zB(2912),
      uB = zB(722),
      UB = zB(4640),
      aB = zB(2887),
      pB = zB(3572),
      rB = zB(106),
      sB = zB(355),
      JB = zB(41),
      mB = zB(348),
      yB = zB(128),
      kB = zB(687),
      GB = zB(140),
      LB = zB(132),
      gB = zB(4893),
      tB = zB(40814),
      SB = zB(1842),
      MB = zB(40822),
      EB = zB(34196),
      iB = zB(40824);
    const qB = "bloxd-webgpuOffAfterLoss",
      fB = "context:webgl",
      oB = "probe:threw";

    function HB(BB) {
      let jB;
      try {
        jB = BB.getContext("webgl", {
          powerPreference: GB.e
        })
      } catch {
        jB = null
      }
      if (null === jB) return null;
      let zB = null;
      try {
        const BB = jB.getParameter(jB.MAX_TEXTURE_SIZE);
        zB = "number" === typeof BB && BB > 0 ? BB : null
      } catch {
        zB = null
      }
      try {
        var QB;
        null === (QB = jB.getExtension("WEBGL_lose_context")) || void 0 === QB || QB.loseContext()
      } catch {}
      return zB
    }
    const DB = new Set(["android_arm", "chromeos_other", "windows_intel_low", "ios"]);

    function FB() {
      return "ios" === (0, rB.getOperatingSystem)() ? "ios" : "other"
    }
    const YB = "mali_valhall",
      VB = new Set(["nvidia_pre_turing"]),
      hB = new Set(["intel_gen7_8"]);

    function XB(BB, jB) {
      return DB.has(BB) ? "android_arm" === BB && jB === YB ? "webgpu_default" : "webgl_default" : null
    }

    function ZB(BB) {
      return function(BB) {
        try {
          return BB()
        } catch {
          return null
        }
      }((() => {
        var jB, zB, QB, IB;
        const NB = null !== (jB = null === (zB = BB.info) || void 0 === zB ? void 0 : zB.vendor) && void 0 !== jB ? jB : "";
        return "windows" === (0, rB.getOperatingSystem)() && "" !== NB && "intel" !== (0, rB.normaliseGpuVendor)(NB) ? null : ((0, rB.seedGpuVendor)(NB), XB((0, nB.f)(), (0, dB.f)(NB, null !== (QB = null === (IB = BB.info) || void 0 === IB ? void 0 : IB.architecture) && void 0 !== QB ? QB : "")))
      }))
    }

    function AB() {
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
          let jB, zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tB.c;
          try {
            jB = BB.getContext("webgl")
          } catch {
            jB = null
          }
          if (null === jB) return [fB];
          const QB = [];
          try {
            for (const nB of zB.extensions) null === jB.getExtension(nB) && QB.push(nB);
            for (const [nB, dB] of Object.entries(zB.limits)) {
              const BB = jB[nB],
                zB = "number" === typeof BB ? jB.getParameter(BB) : null;
              ("number" !== typeof zB || zB < dB) && QB.push(`limit:${nB}`)
            }
            const BB = jB.getShaderPrecisionFormat(jB.VERTEX_SHADER, jB.HIGH_FLOAT);
            (null === BB || BB.precision < zB.vertexHighFloatBits) && QB.push("precision:vertex_high_float")
          } catch {
            QB.push(oB)
          }
          try {
            var nB;
            null === (nB = jB.getExtension("WEBGL_lose_context")) || void 0 === nB || nB.loseContext()
          } catch {}
          return QB
        }(document.createElement("canvas")),
        offAfterLoss: BB => PB((() => BB ? (0, mB.J)() : IB.c.isWebGpuOffAfterLoss())),
        oldIntelDriver: BB => PB((() => (0, yB.g)(BB))),
        intelGen9: BB => PB((() => (0, yB.p)(BB))),
        storeIntelGen9Verdict: BB => {
          JB.j.setItem(yB.I, BB)
        },
        gpuClassWebGlArm: ZB,
        storeGpuClassVerdict: BB => {
          JB.j.setItem(yB.G, BB)
        },
        gpuClassOnWebGl: BB => (0, kB.d)(BB),
        webGlDefaultFamily: BB => hB.has((0, dB.f)(BB.vendor, BB.architecture)),
        storeWebGlDefaultFamilyVerdict: BB => {
          JB.j.setItem(yB.Q, BB)
        },
        override: () => TB(),
        claimed: () => WB((0, uB.i)()),
        webGpuSetting: () => {
          const BB = JB.j.getItem(QB.Wb);
          return "boolean" === typeof BB ? BB : null
        },
        heldBack: () => kB.f,
        storeHoldbackSpared: BB => {
          JB.j.setItem(yB.C, BB)
        },
        intelGen9OnWebGl: () => kB.h,
        mJ: () => PB((() => (0, pB.g)(rB.featureFlags.settings.canUseShaderPacks))),
        windows: () => PB((() => "windows" === (0, rB.getOperatingSystem)())),
        defaultCompatibility: EB.d
      }
    }

    function TB() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, NB.q)("render") && "webgl1" === (0, NB.o)("renderer")) return "webgl1";
      const jB = [() => new URLSearchParams(window.location.search).get(aB.c), () => JB.j.getItem(aB.g), () => {
        const jB = localStorage.getItem(qB);
        return null !== jB && BB && localStorage.removeItem(qB), "1" === jB ? "webgl2" : null
      }];
      for (const zB of jB) {
        let BB = null;
        try {
          BB = WB(zB())
        } catch {}
        if (null !== BB) return BB
      }
      return null
    }

    function PB(BB) {
      try {
        return BB()
      } catch {
        return !1
      }
    }

    function WB(BB) {
      return "lite" === BB ? "webgpu" : "webgl2" === BB || "babylon" === BB ? "webgl" : null
    }

    function eB(BB) {
      return "none" === BB || "compatibility_mode" === BB
    }
    async function lB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AB();
      const jB = await async function(BB) {
        const jB = xB(BB),
          {
            source: zB
          } = jB,
          QB = !jB.asked,
          nB = "gpu" in jB && jB.heldBack,
          IB = function(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return nB && !eB(BB) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: zB
            } : {
              reason: BB,
              adapter: jB,
              source: zB
            }
          };
        if (!("gpu" in jB)) return IB(jB.refused);
        let NB;
        try {
          NB = await (0, SB.j)((0, LB.m)(jB.gpu, {
            compatibility: wB(BB, jB)
          }), Jj, `requestAdapter didn't settle in ${Jj/1e3} s`)
        } catch {
          return IB("adapter_error")
        }
        if ("string" === typeof NB) return IB(NB);
        const {
          adapter: uB,
          compatibility: UB
        } = NB, aB = (0, LB.c)(uB);
        if ((0, LB.h)(uB)) return IB("software_adapter", aB);
        const pB = BB.windows() && function(BB) {
          return VB.has((0, dB.f)(BB.vendor, BB.architecture))
        }(aB);
        if (BB.storeHoldbackSpared(pB), nB && !pB) return IB("webgl_holdback");
        const rB = BB.intelGen9(uB);
        BB.storeIntelGen9Verdict(rB);
        const sB = rB ? null : BB.gpuClassWebGlArm(uB);
        BB.storeGpuClassVerdict(null !== sB && void 0 !== sB && sB);
        const JB = BB.webGlDefaultFamily(aB);
        if (BB.storeWebGlDefaultFamilyVerdict(JB), QB && BB.oldIntelDriver(uB)) return IB("old_intel_driver", aB);
        if ("default" === zB && rB && BB.intelGen9OnWebGl()) return IB("intel_gen9", aB);
        if ("default" === zB && null !== sB && BB.gpuClassOnWebGl(sB)) return IB("gpu_class_webgl", aB);
        if ("default" === zB && JB) return IB("gpu_wasm_arm", aB);
        return IB(UB ? "compatibility_mode" : "none", aB)
      }(BB);
      if (eB(jB.reason)) return {
        backend: "webgpu",
        ...jB
      };
      if ("webgl1" !== BB.override() && BB.webgl2()) return {
        backend: "webgl",
        ...jB
      };
      const zB = BB.webgl1();
      return 0 === zB.length ? {
        backend: "webgl1",
        ...jB
      } : {
        missing: zB
      }
    }

    function wB(BB, jB) {
      let {
        source: zB,
        asked: QB
      } = jB;
      return QB || "default" === zB ? (0, EB.l)(QB, BB.defaultCompatibility) : void 0
    }

    function xB(BB) {
      const jB = BB.override(),
        zB = BB.webGpuSetting(),
        QB = null === jB && !0 !== zB && BB.mJ(),
        nB = null !== jB || null !== zB || QB ? null : BB.claimed(),
        dB = null !== jB ? "override" : !0 === zB ? "setting" : QB ? "pack" : !1 === zB ? "setting" : null !== nB ? "claim" : "default",
        IB = function(BB) {
          return "override" === BB || "setting" === BB
        }(dB);
      if ("webgl" === jB || "webgl1" === jB || "webgl" === nB || "setting" === dB && !1 === zB) return {
        source: dB,
        asked: IB,
        refused: "not_requested"
      };
      if (!BB.gpu) return {
        source: dB,
        asked: IB,
        refused: "no_webgpu_api"
      };
      const NB = "default" === dB && BB.heldBack();
      return NB && !BB.windows() ? {
        source: dB,
        asked: IB,
        refused: "webgl_holdback"
      } : !IB && BB.offAfterLoss("pack" === dB) ? {
        source: dB,
        asked: IB,
        refused: NB ? "webgl_holdback" : "off_after_loss"
      } : {
        source: dB,
        asked: IB,
        heldBack: NB,
        gpu: BB.gpu
      }
    }

    function KB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...AB(),
          override: () => TB(!1)
        },
        jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rB.isWebKit,
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FB;
      try {
        if (!jB()) return !1;
        const QB = xB(BB);
        if (!("gpu" in QB) || QB.heldBack) return !1;
        const nB = "default" === QB.source ? XB(zB(), "apple") : null;
        return null === nB || !BB.gpuClassOnWebGl(nB)
      } catch (QB) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", QB), !1
      }
    }
    let CB = !1;
    async function cB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AB();
      if (null === BB) return null;
      const zB = await lB(jB);
      return CB = !("missing" in zB) && "webgpu" === zB.backend && "claim" === zB.source, "missing" in zB ? zB : {
        ...zB,
        load: BB[zB.backend]
      }
    }
    async function bB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AB().gpu,
        QB = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== BB.backend) return !1;
      const nB = Qj(BB, jB, "indirectDraws", "off", "on");
      if (null !== nB) return nB;
      if (null !== BB.adapter && (0, yB.s)(BB.adapter, QB)) return !0;
      if (null === zB) return !1;
      try {
        var dB;
        const BB = await (0, SB.j)(zB.requestAdapter({
          powerPreference: "low-power"
        }).then((async BB => (null !== BB && await (0, LB.d)(BB), BB))), Jj, `the low-power requestAdapter didn't settle in ${Jj/1e3} s`);
        return (0, yB.s)(null !== (dB = null === BB || void 0 === BB ? void 0 : BB.info) && void 0 !== dB ? dB : {}, QB)
      } catch (IB) {
        return IB instanceof SB.g
      }
    }

    function vB(BB, jB, zB) {
      if ("webgpu" !== BB.backend) return !1;
      const QB = Qj(BB, jB, "terrainFetch", "texture", "storage");
      return null !== QB ? QB : null !== BB.adapter && (0, yB.i)(BB.adapter, zB)
    }

    function RB(BB, jB) {
      if ("webgpu" !== BB.backend) return !1;
      const zB = Qj(BB, jB, "skyOrder", "early", "last");
      return null !== zB ? zB : null !== BB.adapter && (0, dB.f)(BB.adapter.vendor, BB.adapter.architecture) === YB
    }

    function OB(BB, jB) {
      if ("webgpu" !== BB.backend) return !1;
      const zB = Qj(BB, jB, "uploadCopies", "off", "on");
      return null !== zB ? zB : null !== BB.adapter && "powervr_rogue" === (0, dB.f)(BB.adapter.vendor, BB.adapter.architecture)
    }

    function Bj(BB, jB, zB) {
      if ("webgpu" !== BB.backend) return !1;
      const QB = Qj(BB, jB, "sceneDepth", "off", "on");
      return null !== QB ? QB : null !== BB.adapter && (0, yB.m)(BB.adapter, zB)
    }

    function jj(BB, jB) {
      return "webgl" === BB.backend ? Qj(BB, jB, "instancedTerrain", "1", "0") : null
    }

    function zj(BB, jB) {
      return "webgpu" !== BB.backend || jB && (null === BB.adapter || !(0, mB.K)(BB.adapter))
    }

    function Qj(BB, jB, zB, QB, nB) {
      const dB = new URLSearchParams(jB).get(zB),
        IB = null !== dB && void 0 !== dB ? dB : (0, uB.d)(zB);
      return IB !== QB && IB !== nB ? null : (CB ||= null === dB && "webgpu" === BB.backend, IB === QB)
    }

    function nj(BB) {
      return null !== BB && "missing" in BB
    }

    function dj(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !uj(),
        zB = arguments.length > 2 ? arguments[2] : void 0;
      return jB ? function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IB.c,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const QB = "start_failed" === BB || "pipeline_failed" === BB,
            nB = (0, iB.i)(BB, zB),
            dB = jB.turnOffWebGpuAfterDeviceLoss(QB ? "visible" : (0, mB.p)((0, sB.h)()), QB, nB);
          return CB && (0, uB.p)("webgpuLoss"), jB.isWebGpuOffAfterLoss() && "webgpu" === WB(JB.j.getItem(aB.g)) && JB.j.removeItem(aB.g), (0, NB.q)("webgpuloss") && (0, UB.d)((jB => {
            var zB;
            jB.noteWebGpuLoss("wasm", dB ? BB : `${BB}, which storage didn't keep`, null !== (zB = nB.message) && void 0 !== zB ? zB : null)
          })), dB
        } catch {
          return !1
        }
      }(BB, IB.c, zB) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Ij = "framePacing";

    function Nj(BB) {
      const jB = new URLSearchParams(BB).get(Ij);
      return null !== jB && /^\d{1,9}$/.test(jB) ? Number(jB) : void 0
    }

    function uj() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === WB(new URLSearchParams(BB).get(aB.c))
      } catch {
        return !1
      }
    }

    function Uj(BB) {
      return !!aj(BB) || BB instanceof Error && !(BB instanceof WebAssembly.RuntimeError) && BB.message.startsWith(`${gB.m.RenderSurfaceUnusable}:`)
    }

    function aj(BB) {
      const {
        name: jB,
        message: zB
      } = null !== BB && void 0 !== BB ? BB : {};
      return "InvalidStateError" === jB && "string" === typeof zB && zB.startsWith("GPUDevice.")
    }

    function pj(BB) {
      const jB = BB;
      return "function" === typeof jB.KzB && "function" === typeof jB.CzB ? jB : null
    }

    function rj(BB) {
      return "function" === typeof BB.Ry ? BB : null
    }
    const sj = "openRenderer";
    const Jj = 5e3,
      mj = 15e3;

    function yj(BB, jB, zB, QB, nB, dB) {
      return (0, SB.j)(function(BB, jB, zB, QB, nB, dB) {
        return (0, MB.e)(BB, jB, (() => BB.Ry(zB, QB, nB, dB.indirectHangs, dB.storagePullBreaks, dB.splitPassBreaks, dB.earlySky, dB.instancedTerrain, dB.cellLight, dB.framesAhead, dB.webGpuRestores, dB.bufferCopiesCrash)))
      }(BB, jB, zB, QB, nB, dB), mj, `${gB.m.RenderSurfaceUnusable}: the renderer didn't open in ${mj/1e3} s`, Gj)
    }
    async function kj(BB, jB, zB, QB, nB, dB) {
      if ("function" !== typeof BB.OdB) throw new Error("this core has no set_renderer");
      const IB = await yj(jB, sj, zB, nB, QB, dB);
      try {
        BB.OdB(IB)
      } catch (NB) {
        throw Gj(IB), NB
      }
    }

    function Gj(BB) {
      try {
        BB.free()
      } catch {}
    }
  },
  40906: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB
    });
    const QB = {
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
  40835: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => JB,
      g: () => mB,
      h: () => rB,
      i: () => pB
    });
    const QB = 2e3,
      nB = "unavailable";
    let dB = () => Promise.resolve().then((() => zB(3039))),
      IB = null,
      NB = null,
      uB = UB();

    function UB() {
      let BB = () => {};
      return {
        promise: new Promise((jB => {
          BB = () => {
            jB(null)
          }
        })),
        resolve: BB
      }
    }

    function aB() {
      if (null === IB) {
        const BB = dB();
        IB = BB, BB.then((jB => {
          IB === BB && (NB = jB)
        }), (() => {
          IB === BB && (IB = null)
        }))
      }
      return IB
    }

    function pB() {
      aB().catch((() => {}))
    }

    function rB() {
      uB.resolve()
    }

    function sB(BB, jB, zB, QB) {
      if (null === BB) return {
        errorKind: jB,
        fingerprint: nB,
        dedupe: `${jB}|${QB}`
      };
      const {
        fingerprint: dB
      } = BB.clientErrorKey(jB, zB, QB);
      return {
        errorKind: jB,
        fingerprint: dB,
        dedupe: dB
      }
    }

    function JB(BB, jB, zB, QB) {
      return null === NB ? QB ? (pB(), sB(null, BB, jB, zB)) : null : sB(NB, BB, jB, zB)
    }
    async function mB(BB, jB, zB) {
      let nB;
      const dB = new Promise((BB => {
        nB = setTimeout((() => {
          BB(null)
        }), QB)
      }));
      try {
        return sB(await Promise.race([aB(), dB, uB.promise]), BB, jB, zB)
      } catch {
        return sB(null, BB, jB, zB)
      } finally {
        clearTimeout(nB)
      }
    }
  },
  40830: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      BUILT_IN_ANIMATIONS_SITE: () => cB,
      CORE_ERRORS_SITE: () => AB,
      EVENT_OVERFLOW_SITE: () => CB,
      FIRST_VIEW_SITE: () => RB,
      JOIN_SITE: () => PB,
      LEAVE_SITE: () => WB,
      MAIN_THREAD_SITE: () => OB,
      MODEL_FEED_SITE: () => eB,
      MODEL_POOL_SITE: () => lB,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Qj,
      NON_FATAL_REPORTS_PER_SESSION: () => tj,
      PREVIEW_ANIMATIONS_SITE: () => KB,
      RENDER_RELOAD_SITE: () => xB,
      REQUEST_DEVICE_SITE: () => Bj,
      TEXTURE_NAMES_SITE: () => wB,
      TEXTURE_PACK_FEED_SITE: () => bB,
      TEXTURE_PACK_SWAP_SITE: () => vB,
      TurnstilePageError: () => nz,
      WASM_LOAD_SITE: () => TB,
      countRenderLost: () => Zz,
      crashError: () => fj,
      crashReportsSettled: () => Xj,
      deviceLossWords: () => Yz,
      flushCrashReports: () => Vj,
      joinFailureCode: () => dz,
      lokiTransport: () => Ij,
      modelFailureCode: () => rz,
      readTrap: () => lj,
      renderLoss: () => Xz,
      renderReloadMessage: () => Vz,
      reportCoreErrors: () => Tj,
      reportCountedLoadFallback: () => zz,
      reportCrash: () => oj,
      reportDataLoadFailure: () => lz,
      reportDisconnect: () => az,
      reportDracoDecoderFailure: () => yz,
      reportDroppedRequiredLimits: () => Bz,
      reportEventOverflow: () => gz,
      reportFirstViewNoTerrain: () => iz,
      reportLightFault: () => Sz,
      reportMainStall: () => qz,
      reportMemoryShed: () => Ez,
      reportModelFailure: () => sz,
      reportModelPoolFailure: () => Jz,
      reportModelsModuleRetry: () => mz,
      reportNoBackendRetry: () => Oj,
      reportPageJoinFailure: () => Nz,
      reportReconnectGaveUp: () => pz,
      reportRenderReload: () => Pz,
      reportReplayFault: () => oz,
      reportStaleBuildReload: () => xz,
      reportStoppedCore: () => Cj,
      reportTerrainTextureFailure: () => Wz,
      reportTexturePackFeedLoadFailure: () => Gz,
      reportTexturePackKeptOut: () => Lz,
      reportUnstreamedCoreLoad: () => Qz,
      reportUnsupportedFallback: () => Rj,
      reportUnusedSeat: () => Uz,
      reportWorkerLost: () => tz,
      reportWorkerStartTimeout: () => fz,
      reportWorldgenGaveUp: () => Mz,
      reportWorldgenLoadFailure: () => kz,
      resetCrashReports: () => Zj,
      setCrashAdPreload: () => mj,
      setCrashBackend: () => Jj,
      setCrashScreen: () => pj,
      setCrashTransport: () => Uj,
      showCrash: () => Kj,
      showJoinFailure: () => Iz,
      showUnsupported: () => bj,
      unknownSkyWords: () => Aj
    });
    var QB = zB(1067),
      nB = zB(1359),
      dB = zB(1357),
      IB = zB(1121),
      NB = zB(283),
      uB = zB(3043),
      UB = zB(4410),
      aB = zB(40835),
      pB = zB(4887),
      rB = zB(40842),
      sB = zB(3084),
      JB = zB(38875),
      mB = zB(145),
      yB = zB(140),
      kB = zB(3092),
      GB = zB(36568),
      LB = zB(1842),
      gB = zB(40854),
      tB = zB(40695),
      SB = zB(40770),
      MB = zB(40775),
      EB = zB(36560),
      iB = zB(2967),
      qB = zB(2974),
      fB = zB(40872),
      oB = zB(40887),
      HB = zB(40889),
      DB = zB(36926),
      FB = zB(3334),
      YB = zB(36340),
      VB = zB(40822),
      hB = zB(36347),
      XB = zB(40909);
    const ZB = "[bloxd-wasm-client]",
      AB = "coreErrors",
      TB = "wasmLoad",
      PB = "join",
      WB = "leave",
      eB = "modelFeed",
      lB = "modelWorkerPool",
      wB = "textureNames",
      xB = "renderReload",
      KB = "previewAnimations",
      CB = "eventOverflow",
      cB = "builtInAnimations",
      bB = "texturePackFeed",
      vB = "texturePackSwap",
      RB = "firstView",
      OB = "mainThread",
      Bj = "requestDevice",
      jj = 300,
      zj = 64,
      Qj = 8;
    let nj = 0;
    const dj = new Set,
      Ij = (BB, jB) => {
        const zB = yj[BB.kind],
          QB = {
            backend: rj,
            adPreload: sj
          };
        if (null === zB) return void Nj(BB, jB, QB, null);
        const nB = (0, aB.d)(zB, BB.message, BB.code, BB.fatal);
        null === nB ? Yj("Loki", (async () => {
          Nj(BB, jB, QB, await (0, aB.g)(zB, BB.message, BB.code))
        })) : Nj(BB, jB, QB, nB)
      };

    function Nj(BB, jB, zB, QB) {
      let {
        backend: nB,
        adPreload: dB
      } = zB;
      const {
        kind: NB,
        code: UB,
        site: aB,
        fatal: pB,
        details: rB
      } = BB;
      if (!pB)
        if (null === QB || (0, uB.c)(QB.errorKind) || dj.has(QB.dedupe)) {
          if (nj >= Qj) return;
          nj++
        } else dj.add(QB.dedupe);
      const sB = {
        ...rB,
        kind: NB,
        code: UB,
        site: aB,
        fatal: String(pB),
        backend: nB
      };
      dB && (sB.adPreload = "true"), null !== QB && (sB.errorKind = QB.errorKind, sB.fingerprint = QB.fingerprint), jB instanceof Error && "string" === typeof jB.stack && (sB.causeStack = jB.stack.slice(0, 2e3)), (0, IB.Zm)(fj(BB, jB), sB)
    }
    let uj = Ij;

    function Uj(BB) {
      const jB = uj;
      return uj = BB, jB
    }
    let aj = () => {};

    function pj(BB) {
      const jB = aj;
      return aj = BB, jB
    }
    let rj = "unpicked",
      sj = !1;

    function Jj(BB) {
      rj = BB
    }

    function mj(BB) {
      sj = BB
    }
    const yj = {
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
      kj = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      Gj = new Set(["unstreamedLoad"]),
      Lj = new Set(["linkCensus", "linksReadAfterView"]);
    let gj = !1;
    const tj = 20,
      Sj = new Map;
    let Mj = 0,
      Ej = 0;
    const ij = new Set,
      qj = new Set;

    function fj(BB, jB) {
      const zB = Object.assign(new Error(`${BB.code}: ${BB.message}`), {
        name: "WasmClientCrash",
        cause: null !== jB && void 0 !== jB ? jB : void 0
      });
      return jB instanceof Error && jB.stack && (zB.stack = jB.stack), zB
    }

    function oj(BB) {
      var jB, QB;
      const {
        kind: nB,
        code: dB,
        site: IB,
        fatal: NB,
        message: uB,
        error: UB
      } = BB, aB = !1 !== BB.toTransport && !Gj.has(nB), pB = !NB && aB && !Lj.has(nB), rB = {
        kind: nB,
        code: dB,
        site: IB,
        fatal: NB,
        message: uB,
        details: null !== (jB = BB.details) && void 0 !== jB ? jB : {}
      }, sB = `${dB}@${IB}${void 0===BB.instance?"":`#${BB.instance}`}${NB?"!":""}`, JB = (null !== (QB = Sj.get(sB)) && void 0 !== QB ? QB : 0) + 1;
      if (Sj.set(sB, JB), void 0 !== BB.countAs && 1 === JB && Dj(BB.countAs), JB > 1 ? 0 === (JB & JB - 1) && Fj((() => {
          console.warn(`${ZB} ${dB} at ${IB} reported ${JB} times`)
        })) : pB && Mj >= tj ? Fj((() => {
          console.warn(`${ZB} ${nB} ${dB} at ${IB}: ${uB} (not sent: the session's ${tj} went)`, rB.details, null !== UB && void 0 !== UB ? UB : "")
        })) : (pB && Mj++, function(BB, jB, QB, nB) {
          var dB, IB;
          const {
            kind: NB,
            code: uB,
            site: UB,
            fatal: aB,
            message: pB,
            details: rB
          } = BB;
          Fj((() => {
            (aB ? console.error : console.warn)(`${ZB} ${NB} ${uB} at ${UB}: ${pB}`, rB, null !== jB && void 0 !== jB ? jB : "")
          }));
          const sB = kj[NB],
            JB = null !== (dB = null !== (IB = yj[NB]) && void 0 !== IB ? IB : sB) && void 0 !== dB ? dB : null;
          nB || null === JB || Hj((async () => {
            const {
              reportCappedWasmFailure: BB,
              reportUncappedWasmFailure: jB,
              reportWasmFailure: QB
            } = await zB.e(213).then((() => zB(36337)));
            (Lj.has(NB) ? jB : void 0 === sB ? QB : BB)(JB, pB, uB)
          }));
          QB && Fj((() => {
            uj(BB, jB)
          }))
        }(rB, UB, aB, void 0 !== BB.countAs)), NB) {
        var mB;
        const jB = null !== (mB = BB.screen) && void 0 !== mB ? mB : {
          text: (0, DB.e)(rB, !0),
          reload: !0
        };
        Fj((() => {
          aj(jB)
        }))
      }
      return rB
    }

    function Hj(BB) {
      Yj("counts", (async () => {
        const {
          peekVisitSessionId: jB
        } = await Promise.resolve().then((() => zB(701)));
        null !== jB() && (await BB(), gj = !0)
      }))
    }

    function Dj(BB) {
      ij.has(BB.errorKind) || (ij.add(BB.errorKind), Hj((async () => {
        const {
          reportClientError: jB
        } = await Promise.resolve().then((() => zB(3036)));
        jB(BB.errorKind, BB.error, BB.code, !0, void 0, BB.fields)
      })))
    }

    function Fj(BB) {
      try {
        BB()
      } catch (jB) {
        try {
          console.warn(`${ZB} could not send a report`, jB)
        } catch {}
      }
    }

    function Yj(BB, jB) {
      try {
        const zB = jB().catch((jB => {
          console.warn(`${ZB} could not send the report to ${BB}`, jB)
        })).finally((() => {
          qj.delete(zB)
        }));
        qj.add(zB)
      } catch (zB) {
        console.warn(`${ZB} could not send the report to ${BB}`, zB)
      }
    }
    async function Vj(BB) {
      let jB;
      (0, aB.h)();
      const zB = new Promise((zB => {
        jB = setTimeout(zB, BB)
      }));
      await Promise.race([hj(), zB]), clearTimeout(jB)
    }
    async function hj() {
      if (await Promise.allSettled([...qj]), gj) try {
        const {
          flushClientAnalyticsEvents: BB
        } = await Promise.resolve().then((() => zB(1525)));
        await BB()
      } catch (BB) {
        console.warn(`${ZB} could not send the counts`, BB)
      }
    }
    async function Xj() {
      for (; qj.size > 0;) await Promise.allSettled([...qj])
    }

    function Zj() {
      Sj.clear(), Mj = 0, gj = !1, nj = 0, dj.clear(), Ej = 0, ij.clear(), (0, rB.w)()
    }

    function Aj(BB) {
      const jB = "object" === typeof BB && null !== BB ? BB.type : BB;
      return "string" !== typeof jB ? "sky not named" : `sky ${JSON.stringify(Array.from(jB).slice(0,zj).join(""))}`
    }

    function Tj(BB, jB, zB, QB) {
      Ej += jB;
      for (const {
          code: NB,
          detail: uB
        }
        of BB) {
        var nB, dB, IB;
        const BB = (0, pB.Od)(NB),
          jB = (0, rB.e)(NB, uB),
          UB = null === QB || void 0 === QB ? void 0 : QB(NB, uB),
          aB = void 0 !== (null === jB || void 0 === jB ? void 0 : jB.gpuDetails),
          sB = aB ? null === (nB = (0, yB.q)()) || void 0 === nB ? void 0 : nB.renderer : void 0,
          JB = aB ? ` ${(0,rB.n)()}` : "",
          mB = Array.from([sB && `gpu ${(0,rB.A)(sB)}`, UB].filter(Boolean).join("; ")).slice(0, jj).join(""),
          kB = `core error ${BB}${null!==(dB=null===jB||void 0===jB?void 0:jB.words)&&void 0!==dB?dB:""}${JB}${mB?`: ${mB}`:""}`,
          GB = {
            errorCode: String(NB),
            detail: String(uB),
            droppedBefore: String(Ej),
            wasmBuild: zB.wasm,
            clientVersion: zB.client,
            ...null === jB || void 0 === jB ? void 0 : jB.gpuDetails
          };
        null !== jB && (0, rB.t)(jB) ? Fj((() => {
          console.warn(`${ZB} coreError CORE-${BB}: ${kB} (not sent: the session's render warnings of its kind went)`, GB)
        })) : Pj(NB) ? Fj((() => {
          console.warn(`${ZB} coreError CORE-${BB}: ${kB} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, GB)
        })) : oj({
          kind: ej(NB, uB),
          code: `CORE-${BB}`,
          site: AB,
          fatal: !1,
          message: kB,
          details: GB,
          instance: null !== (IB = null === jB || void 0 === jB ? void 0 : jB.instance) && void 0 !== IB ? IB : Wj(NB, uB)
        })
      }
    }

    function Pj(BB) {
      if (BB !== pB.J.AudioUnknownSound && BB !== pB.J.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: jB,
        lobbyName: zB
      } = (0, dB.d)();
      return null !== jB && (!!(0, QB.n)(jB) || BB === pB.J.AudioUnknownSound && (0, nB.k)(jB, zB))
    }

    function Wj(BB, jB) {
      return BB === pB.J.RenderDeviceLost && 0 !== (jB & pB.N.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function ej(BB, jB) {
      return BB === pB.J.JobsHeapGaveUp ? "meshHeap" : (0, rB.l)(BB, jB) ? "linksReadAfterView" : (0, rB.h)(BB, jB) ? "linkCensus" : "coreError"
    }

    function lj(BB) {
      return (0, YB.m)(BB instanceof VB.c ? BB.trap : BB, iB.F, iB.T)
    }
    const wj = "declined=js";

    function xj(BB) {
      return BB ? {
        labels: [wj],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function Kj(BB, jB, zB) {
      return cj(BB, jB, zB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Cj(BB, jB, zB) {
      return cj(BB, jB, zB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function cj(BB, jB, zB, QB, nB) {
      let {
        memoryDetails: dB = {},
        declined: IB = !1
      } = QB;
      const {
        code: NB,
        details: uB,
        message: UB
      } = (0, gB.B)(BB, jB), aB = [];
      Object.assign(uB, (0, hB.i)(BB.error)), null !== zB && (uB.trapKind = zB.kind, null !== zB.panic && (uB.panic = (0, YB.k)(zB.panic)), zB.refusedBytes > 0 && (uB.refusedAllocation = String(zB.refusedBytes)), aB.push((0, YB.o)(zB.kind, zB.refusedBytes)));
      const pB = xj(IB);
      return oj({
        kind: "crash",
        code: NB,
        site: BB.site,
        fatal: nB,
        message: [...aB, ...pB.labels, UB].join("; "),
        details: {
          ...uB,
          ...pB.details,
          ...dB
        },
        error: BB.error
      })
    }

    function bj(BB, jB, zB) {
      return oj({
        kind: "unsupported",
        code: jB,
        site: TB,
        fatal: !0,
        message: zB,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: BB,
          status: jB
        },
        screen: {
          text: (0, DB.q)(BB),
          reload: "download" === BB
        }
      })
    }
    const vj = {
      unsupported: "unsupported_js_fallback",
      blockedAfterLoss: "blocked_after_loss",
      noContext: "no_context_js_fallback"
    };

    function Rj(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return oj({
        kind: "unsupportedFallback",
        code: vj[jB],
        site: TB,
        fatal: !1,
        message: zB,
        details: {
          ...QB,
          cause: BB,
          status: "unsupported",
          decline: jB,
          fallback: "js"
        }
      })
    }

    function Oj(BB, jB, zB) {
      return oj({
        kind: "recovered",
        code: "reprobed" === BB ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: TB,
        fatal: !1,
        message: zB,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: jB,
          step: BB
        }
      })
    }

    function Bz(BB) {
      return oj({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: Bj,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: BB.join(",")
        }
      })
    }
    const jz = "reload=wasm";

    function zz(BB, jB, zB, QB) {
      const nB = xj("declined" === QB),
        dB = "wasmReload" === QB ? [jz] : nB.labels;
      return oj({
        kind: "unsupported",
        code: jB,
        site: TB,
        fatal: !1,
        message: [...dB, zB].join("; "),
        details: {
          cause: BB,
          status: jB,
          fallback: "wasmReload" === QB ? "wasmReload" : "js",
          ...nB.details
        }
      })
    }

    function Qz() {
      const {
        code: BB,
        message: jB
      } = FB.d;
      return oj({
        kind: "unstreamedLoad",
        code: BB,
        site: TB,
        fatal: !1,
        message: jB
      })
    }
    class nz extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function dz(BB) {
      return BB instanceof SB.j ? 0 === BB.code ? "JOIN-matchmake" : `JOIN-${BB.code}` : BB instanceof SB.d ? 0 === BB.code ? `JOIN-${BB.stage}` : `JOIN-${BB.stage}-${BB.code}` : BB instanceof tB.e ? "JOIN-gameCode" : BB instanceof nz ? "JOIN-turnstilePage" : BB instanceof SB.u ? "JOIN-trafficCheck" : BB instanceof GB.h ? "JOIN-timeout" : "JOIN-network"
    }

    function Iz(BB, jB) {
      const zB = (0, hB.m)(BB),
        QB = {
          wasmBuild: jB.wasm,
          clientVersion: jB.client
        },
        nB = BB instanceof nz ? {
          text: (0, DB.i)(),
          reload: !1
        } : void 0,
        dB = (0, MB.g)(BB),
        IB = "expected" !== dB;
      return oj({
        kind: "join",
        code: dz(BB),
        site: PB,
        fatal: !0,
        message: zB,
        details: QB,
        error: BB,
        screen: nB,
        toTransport: IB,
        instance: dB
      })
    }

    function Nz(BB, jB, zB) {
      var QB;
      const nB = (0, MB.g)(BB),
        dB = {
          cause: (BB instanceof SB.d || BB instanceof SB.j) && null !== (QB = BB.serverText) && void 0 !== QB ? QB : "",
          sinceJoinStart: (0, kB.b)(zB.sinceJoinStartMs),
          game: zB.game,
          ...(0, kB.e)(),
          wasmBuild: jB.wasm,
          clientVersion: jB.client
        };
      return oj({
        kind: "pageJoin",
        code: dz(BB),
        site: PB,
        fatal: !1,
        message: (0, hB.m)(BB),
        details: dB,
        error: BB,
        toTransport: "unrecognised" === nB,
        instance: nB
      })
    }
    const uz = {
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

    function Uz(BB, jB) {
      let {
        unused: zB,
        answered: QB,
        heldMs: nB
      } = BB;
      const {
        code: dB,
        message: IB
      } = uz[zB], NB = {
        unused: zB,
        answered: String(QB),
        heldMs: String(nB),
        wasmBuild: jB.wasm,
        clientVersion: jB.client
      };
      return oj({
        kind: "seat",
        code: dB,
        site: PB,
        fatal: !1,
        message: IB,
        details: NB
      })
    }

    function az(BB, jB, zB) {
      var QB;
      let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (QB = BB.name) && void 0 !== QB ? QB : String(BB.code);
      const dB = {
          closeCode: String(BB.code),
          recognised: String(null !== BB.name),
          closeReason: zB.closeReason,
          sinceJoined: (0, kB.b)(zB.sinceJoinedMs),
          game: zB.game,
          ...(0, kB.e)(),
          wasmBuild: jB.wasm,
          clientVersion: jB.client
        },
        IB = null === BB.name && !(0, kB.c)(BB.code);
      return oj({
        kind: "disconnect",
        code: nB,
        site: WB,
        fatal: !1,
        message: "Left room",
        details: dB,
        toTransport: IB
      })
    }

    function pz(BB, jB) {
      const zB = {
        ...(0, sB.h)(BB),
        wasmBuild: jB.wasm,
        clientVersion: jB.client
      };
      return oj({
        kind: "disconnect",
        code: `reconnect-${BB.reason}`,
        site: PB,
        fatal: !1,
        message: "Reconnect failed",
        details: zB
      })
    }

    function rz(BB) {
      return BB.error instanceof qB.g ? `MODEL-${BB.error.status}` : BB.error instanceof fB.j ? "MODEL-ring" : "MODEL-network"
    }

    function sz(BB, jB) {
      const zB = rz(BB),
        QB = `model file ${BB.file} ${BB.startup?"(startup) ":""}could not load`,
        nB = {
          file: String(BB.file),
          url: BB.url,
          wasmBuild: jB.wasm,
          clientVersion: jB.client
        };
      return oj({
        kind: BB.startup ? "model" : "modelLate",
        code: zB,
        site: eB,
        fatal: BB.startup,
        message: QB,
        details: nB,
        error: BB.error
      })
    }

    function Jz(BB, jB) {
      const zB = {
        wasmBuild: jB.wasm,
        clientVersion: jB.client
      };
      return oj({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: lB,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: zB,
        error: BB
      })
    }

    function mz(BB, jB, zB) {
      const QB = {
        delayMs: String(jB),
        wasmBuild: zB.wasm,
        clientVersion: zB.client
      };
      BB instanceof qB.g && (QB.status = String(BB.status));
      return oj({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: lB,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: QB,
        error: BB
      })
    }

    function yz(BB, jB) {
      const zB = {
        wasmBuild: jB.wasm,
        clientVersion: jB.client
      };
      return oj({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: lB,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: zB,
        error: BB
      })
    }

    function kz(BB, jB) {
      const zB = {
        wasmBuild: jB.wasm,
        clientVersion: jB.client
      };
      return oj({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: gB.x,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: zB,
        error: BB
      })
    }

    function Gz(BB, jB) {
      const zB = {
        wasmBuild: jB.wasm,
        clientVersion: jB.client
      };
      return oj({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: bB,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: zB,
        error: BB
      })
    }

    function Lz(BB, jB, zB, QB) {
      const nB = {
        wasmBuild: QB.wasm,
        clientVersion: QB.client
      };
      return oj({
        kind: "texturePackKeptOut",
        code: (0, UB.c)("wasm", BB, jB),
        site: vB,
        fatal: !1,
        message: jB.detail,
        details: nB,
        error: zB
      })
    }

    function gz(BB, jB) {
      const {
        frames: zB,
        acks: QB,
        mask: nB,
        outcome: dB
      } = BB, IB = {
        frames: String(zB),
        acks: String(QB),
        mask: String(nB),
        outcome: null !== dB && void 0 !== dB ? dB : "resynced",
        wasmBuild: jB.wasm,
        clientVersion: jB.client
      };
      return oj({
        kind: "recovered",
        code: "rejoined" === dB ? "CORE-eventOverflowRejoin" : "failed" === dB ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: CB,
        fatal: !1,
        message: `the event buffer refused records in ${zB} frames`,
        details: IB
      })
    }

    function tz(BB, jB, zB) {
      return oj({
        kind: "recovered",
        code: "CORE-workerLost",
        site: BB,
        fatal: !1,
        message: `a ${BB} worker was lost`,
        details: {
          reason: jB,
          wasmBuild: zB.wasm,
          clientVersion: zB.client
        }
      })
    }

    function Sz(BB, jB, zB) {
      const QB = {
        wasmBuild: zB.wasm,
        clientVersion: zB.client
      };
      return oj({
        kind: "recovered",
        code: BB,
        site: gB.o,
        fatal: !1,
        message: jB,
        details: QB
      })
    }

    function Mz(BB, jB) {
      const zB = {
        lastReason: BB,
        wasmBuild: jB.wasm,
        clientVersion: jB.client
      };
      return oj({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: gB.x,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: zB
      })
    }

    function Ez(BB, jB, zB) {
      return oj({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: gB.m,
        fatal: !1,
        message: (0, EB.m)(BB) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: BB,
          ...jB,
          wasmBuild: zB.wasm,
          clientVersion: zB.client
        }
      })
    }

    function iz(BB, jB, zB, QB) {
      var nB, dB;
      const IB = (0, rB.p)(),
        NB = {
          game: BB,
          cause: jB,
          census: null === zB ? "none" : JSON.stringify(zB),
          gpu: null !== (nB = null === (dB = (0, yB.q)()) || void 0 === dB ? void 0 : dB.renderer) && void 0 !== nB ? nB : "",
          renderWarned: String(IB),
          browser: (0, rB.n)(),
          wasmBuild: QB.wasm,
          clientVersion: QB.client
        },
        uB = `first view drew no whole terrain in ${oB.f/1e3} s, ${jB}${IB?", render warned":""}`;
      return oj({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: RB,
        fatal: !1,
        message: uB,
        details: NB
      })
    }

    function qz(BB, jB, zB, QB) {
      var nB, dB, IB;
      const uB = null !== (nB = (0, NB.h)(null !== (dB = null === (IB = (0, yB.j)()) || void 0 === IB ? void 0 : IB.renderer) && void 0 !== dB ? dB : null, (0, yB.i)())) && void 0 !== nB ? nB : "unknown",
        UB = null === jB ? "untimed" : `${Math.round(jB)} ms`,
        aB = `frames stalled, ${zB}, gpu ${(0,rB.A)(uB)}, blocking ${UB}, drawn ${Math.round(BB)} ms apart`,
        pB = {
          gpuModel: uB,
          wasmBuild: QB.wasm,
          clientVersion: QB.client
        };
      return oj({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: OB,
        fatal: !1,
        message: aB,
        details: pB
      })
    }

    function fz(BB, jB, zB) {
      return oj({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: BB,
        fatal: !1,
        message: `a ${BB} worker did not start`,
        details: {
          waitedMs: String(Math.round(jB)),
          wasmBuild: zB.wasm,
          clientVersion: zB.client
        }
      })
    }

    function oz(BB, jB, zB) {
      return oj({
        kind: "recovered",
        code: "CORE-replayFault",
        site: BB,
        fatal: !1,
        message: `the replay's ${BB} failed`,
        details: {
          wasmBuild: zB.wasm,
          clientVersion: zB.client
        },
        error: jB
      })
    }
    const Hz = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function Dz(BB) {
      if (0 === BB) return "none";
      const jB = [60, 600, 3600].find((jB => BB < jB));
      return void 0 === jB ? "ge3600" : `lt${jB}`
    }

    function Fz(BB, jB) {
      return null === BB ? "unbound" : (0, JB.f)(jB - BB)
    }

    function Yz(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (BB & pB.N.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (BB & pB.N.LINKS_RUNNING) ? "links running" : "", `frames ${(0,rB.A)(Dz(BB&pB.N.FRAMES))}`, `up ${(0,rB.A)(Fz(jB,zB))}`].filter(Boolean).join(", ")
    }

    function Vz(BB, jB, zB) {
      const QB = "lost" === jB && void 0 !== zB ? ` (${zB})` : "";
      return `the ${BB} ${Hz[jB]}${QB}`
    }
    const hz = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function Xz(BB, jB, zB, QB) {
      var nB;
      let {
        restoreLost: dB = !1,
        adapterRemembered: IB = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, NB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const uB = null === zB || void 0 === zB ? void 0 : zB.message,
        UB = "pipeline_failed" === jB ? jB : zB instanceof LB.g ? "timeout" : (0, JB.m)("frames_refused" === jB, "string" === typeof uB ? uB : ""),
        aB = null === QB.boundAtMs ? "unbound" : `up${(0,JB.e)(NB-QB.boundAtMs)}`,
        pB = null === QB.adapter ? "no adapter" : (0, JB.j)(QB.adapter),
        rB = `${!0===QB.indirectHangs?" ih":""}${!0===QB.restoresSkipped?" nr":""}${dB?" rl":""}${IB?" ar":""}`,
        sB = `${UB} ${(0,LB.h)()?"hidden":"visible"} ${aB}${rB} ${pB}`;
      if ("webgpu" !== BB || "lost" !== jB && "frames_refused" !== jB) return {
        detail: sB,
        count: void 0
      };
      return {
        detail: sB,
        count: {
          errorKind: "render_lost",
          error: new Error(sB),
          code: (0, JB.p)(UB, null !== (nB = QB.boundAtMs) && void 0 !== nB ? nB : NB, NB).code,
          fields: {
            renderBackend: XB.c.webgpu
          }
        }
      }
    }

    function Zz(BB, jB, zB) {
      const {
        count: QB
      } = Xz("webgpu", BB, jB, zB);
      void 0 !== QB && Dj(QB)
    }
    const Az = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function Tz(BB) {
      var jB;
      return null !== (jB = BB instanceof Error ? BB.reason : void 0) && void 0 !== jB ? jB : ""
    }

    function Pz(BB, jB, QB) {
      var nB, dB, IB, uB, UB;
      let {
        from: aB,
        cause: pB = "lost",
        restoreLost: sB = !1,
        adapterRemembered: yB = !1,
        error: kB,
        context: GB = hz,
        session: LB = Az
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, gB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: tB,
        count: SB
      } = Xz(BB, pB, kB, GB, {
        restoreLost: sB,
        adapterRemembered: yB
      }, gB), MB = {
        reloadFrom: null !== aB && void 0 !== aB ? aB : "",
        losses: String(jB),
        cause: pB,
        detail: tB,
        vendor: null !== (nB = null === (dB = GB.adapter) || void 0 === dB ? void 0 : dB.vendor) && void 0 !== nB ? nB : "",
        architecture: null !== (IB = null === (uB = GB.adapter) || void 0 === uB ? void 0 : uB.architecture) && void 0 !== IB ? IB : "",
        indirectHangs: String(GB.indirectHangs),
        restoresSkipped: String(GB.restoresSkipped),
        restoreLost: String(sB),
        adapterRemembered: String(yB),
        lossReason: Tz(kB),
        samples: String(LB.samples),
        sunShadows: String(LB.sunShadows),
        renderDistance: String(LB.renderDistance),
        gpuFamily: null !== (UB = (0, NB.e)()) && void 0 !== UB ? UB : "",
        browser: (0, rB.n)(),
        siteUsed: mB.siteUsed,
        wasmBuild: QB.wasm,
        clientVersion: QB.client
      }, EB = "webgpu" !== BB && void 0 !== aB ? function(BB, jB, zB, QB) {
        return `: ${BB}, ${jB?"restore lost":"not restored"}, up ${(0,rB.A)(Fz(zB,QB))}`
      }(aB, sB, GB.boundAtMs, gB) : "", iB = `${Vz(BB,pB)}${EB}`, qB = oj({
        kind: "recovered",
        code: "CORE-renderLost",
        site: xB,
        fatal: !1,
        message: iB,
        details: MB,
        error: kB,
        countAs: SB
      });
      return Yj("ga", (async () => {
        const {
          logError: jB
        } = await Promise.resolve().then((() => zB(3015))), QB = `${JB.b["webgpu"===BB?"WebGPU":"WebGL2"]}\n Error: ${tB}`;
        jB("warning", QB), jB("error", QB)
      })), qB
    }

    function Wz(BB, jB) {
      var zB, QB;
      const nB = null === BB.name ? "TEXTURE-sources" : null === BB.url ? "TEXTURE-nourl" : BB.error instanceof HB.c ? `TEXTURE-${BB.error.status}` : "TEXTURE-network",
        dB = null === BB.name ? "terrain textures could not load" : `terrain texture ${BB.name} could not load`,
        IB = {
          texture: null !== (zB = BB.name) && void 0 !== zB ? zB : "",
          url: null !== (QB = BB.url) && void 0 !== QB ? QB : "",
          wasmBuild: jB.wasm,
          clientVersion: jB.client
        };
      return oj({
        kind: "terrainTexture",
        code: nB,
        site: gB.w,
        fatal: !1,
        message: dB,
        details: IB,
        error: BB.error
      })
    }
    const ez = {
      previewAnimations: {
        site: KB,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: cB,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function lz(BB, jB, zB, QB) {
      const {
        site: nB,
        prefix: dB,
        name: IB
      } = ez[BB], {
        stage: NB,
        error: uB
      } = zB;
      return oj({
        kind: BB,
        code: "decode" === NB ? null === uB ? `${dB}-decode` : `${dB}-trap` : uB instanceof qB.g ? `${dB}-${uB.status}` : `${dB}-network`,
        site: nB,
        fatal: !1,
        message: "decode" === NB ? `${IB} did not decode` : `${IB} could not load`,
        details: {
          url: jB,
          wasmBuild: QB.wasm,
          clientVersion: QB.client
        },
        error: uB
      })
    }
    const wz = "staleBuild";

    function xz(BB, jB, zB) {
      const QB = {
          failedSite: BB.site,
          url: BB.url,
          from: BB.from,
          sameBuild: String(BB.from === jB),
          reloadMs: String(Math.max(0, Date.now() - BB.at)),
          wasmBuild: zB.wasm,
          clientVersion: zB.client
        },
        nB = `reloaded into a newer build after ${BB.site} failed to load: ${BB.error}`;
      return oj({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: wz,
        fatal: !1,
        message: nB,
        details: QB
      })
    }
  },
  40887: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      f: () => nB,
      i: () => IB
    });
    var QB = zB(4893);
    const nB = 3e4;
    class dB {
      constructor(BB) {
        this.JJ = BB, this.waitedMs = 0, this.lastMs = null
      }
      frame(BB, jB) {
        if (jB) return !0;
        const zB = null === this.lastMs ? 0 : BB - this.lastMs;
        return this.lastMs = BB, zB <= 900 && (this.waitedMs += zB), !(this.waitedMs < nB) && (this.JJ(), !0)
      }
    }

    function IB(BB, jB) {
      return 0 === (BB & QB.M.ChunkRequested) ? "no_chunk_request" : 0 === (BB & QB.M.ChunkStored) ? "chunk_not_stored" : 0 === (BB & QB.M.MeshLanded) ? "not_meshed" : null === jB ? "no_frame_drawn" : 0 === jB.terrainParts ? "no_terrain_parts" : jB.terrainCompiling > 0 ? "terrain_compiling" : jB.terrainOpaque + jB.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40695: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB,
      f: () => kB,
      g: () => mB,
      j: () => yB,
      m: () => rB,
      o: () => sB,
      q: () => aB,
      r: () => pB,
      t: () => JB
    });
    class QB extends Error {
      constructor(BB) {
        super(`the join's code did not load: ${BB instanceof Error?BB.message:String(BB)}`, {
          cause: BB
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === BB || void 0 === BB ? void 0 : BB.request
      }
    }
    let nB = null,
      dB = null,
      IB = null;
    const NB = [];
    let uB = null;

    function UB(BB, jB) {
      try {
        BB(jB)
      } catch (zB) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", zB)
      }
    }

    function aB() {
      return uB
    }

    function pB(BB) {
      NB.push(BB), null !== uB && UB(BB, uB)
    }

    function rB(BB) {
      return nB ??= Promise.all([zB.e(73), zB.e(98), zB.e(226), zB.e(78), zB.e(227), zB.e(201), zB.e(97), zB.e(246), zB.e(273), zB.e(199), zB.e(214), zB.e(191), zB.e(198), zB.e(193), zB.e(144), zB.e(88), zB.e(122), zB.e(252), zB.e(57)]).then((() => zB(42718))).then((jB => {
        jB.loadAudio(BB), uB = jB;
        for (const BB of NB) UB(BB, jB);
        return jB
      })).catch((BB => {
        throw nB = null, BB
      })), nB
    }
    async function sB(BB, jB) {
      try {
        const zB = await rB(BB);
        await zB.loadClientGame(jB)
      } catch (zB) {
        throw new QB(zB)
      }
    }

    function JB(BB, jB) {
      dB = {
        running: BB,
        shell: jB
      }
    }

    function mB() {
      return IB
    }
    async function yB(BB) {
      const jB = dB;
      if ((null === jB || void 0 === jB ? void 0 : jB.running) !== BB) throw new Error("the core's session has ended");
      const zB = await rB(jB.shell.audio).catch((BB => {
        throw new QB(BB)
      }));
      if (null !== IB) return IB;
      if (dB !== jB || BB.isStopped) throw new Error("the core stopped while the game code loaded");
      if (IB = zB.startGameHost(BB, jB.shell), null === IB) throw new Error("the core's shared tables didn't read, so the game can't start");
      return IB
    }

    function kB() {
      null !== IB && (null !== uB ? uB.endGameHost(IB) : IB.closeGame()), IB = null, dB = null
    }
  },
  40814: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    const QB = {
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
  40770: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      e: () => dB,
      g: () => IB,
      h: () => nB,
      j: () => sB,
      m: () => aB,
      p: () => uB,
      r: () => rB,
      u: () => pB,
      x: () => NB
    });
    var QB = zB(1851);
    const nB = new Uint8Array([12]),
      dB = 2e3,
      IB = 257;

    function NB(BB) {
      const jB = new Uint8Array(4);
      return new DataView(jB.buffer).setUint32(0, BB, !0), jB
    }
    class uB extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class UB extends Error {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(BB), this.stage = jB, this.code = zB, this.serverText = QB, this.socketOpened = nB, this.name = "JoinError"
      }
    }
    class aB extends Error {
      constructor(BB) {
        super(BB), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class pB extends Error {
      constructor(BB) {
        super((0, QB.i)(BB), {
          cause: BB
        }), this.name = "TrafficCheckError"
      }
    }
    class rB extends Error {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(BB, {
          cause: zB
        }), this.networkLost = jB, this.httpStatus = QB, this.name = "SeatRequestError"
      }
    }
    class sB extends Error {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(BB), this.code = jB, this.serverText = zB, this.name = "MatchmakeError"
      }
    }
  },
  40775: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => sB,
      g: () => rB,
      h: () => JB
    });
    var QB = zB(2733),
      nB = zB(3092),
      dB = zB(39166),
      IB = zB(36568),
      NB = zB(39169),
      uB = zB(40770),
      UB = zB(40780);
    const aB = "seat reservation expired.",
      pB = "early_leave";

    function rB(BB) {
      if (BB instanceof IB.h) return "expected";
      if (BB instanceof uB.r) return BB.networkLost ? "expected" : "unrecognised";
      if (BB instanceof uB.d) {
        if ("closed" === BB.stage && (0 === BB.code || (0, nB.c)(BB.code))) return "expected";
        if ("roomError" === BB.stage && (BB.serverText === aB || BB.serverText === pB)) return "expected"
      }
      return BB instanceof uB.d || BB instanceof uB.j ? null === (0, NB.m)(BB.code).name ? "unrecognised" : "known" : (0, QB.e)(BB) ? "expected" : BB instanceof uB.u || BB instanceof UB.b ? "known" : "unrecognised"
    }

    function sB(BB) {
      return BB instanceof IB.h ? "timedOut" : "expected" !== rB(BB) || (0, QB.e)(BB) || BB instanceof uB.d && 1001 === BB.code ? void 0 : "failed"
    }

    function JB(BB) {
      return BB instanceof uB.d && "attach" !== BB.stage ? (0, dB.b)(BB, "closed" !== BB.stage || BB.socketOpened ? "socket" : "socket_unopened") : BB instanceof uB.r ? {
        at: "seat_lost",
        code: BB.httpStatus
      } : BB instanceof uB.j || BB instanceof IB.h ? (0, dB.b)(BB, BB instanceof IB.h ? BB.leg : "seat") : void 0
    }
  },
  40872: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => uB,
      h: () => UB,
      i: () => sB,
      j: () => pB
    });
    var QB = zB(2974),
      nB = zB(4887),
      dB = zB(40881),
      IB = zB(40883),
      NB = zB(36347);
    const uB = 395,
      UB = 2147483648,
      aB = new Uint8Array(0);
    class pB extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class rB extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class sB {
      constructor(BB, jB, zB) {
        var QB, nB, IB, NB;
        let uB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = BB, this.build = jB, this.onFailure = zB, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.Cs = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (QB = uB.fetchFile) && void 0 !== QB ? QB : BB => (0, dB.j)(BB), this.onWritten = null !== (nB = uB.onWritten) && void 0 !== nB ? nB : null, this.onTaken = null !== (IB = uB.onTaken) && void 0 !== IB ? IB : null, this.onPackFileFailed = null !== (NB = uB.onPackFileFailed) && void 0 !== NB ? NB : null, this.startupLeft = new Set(BB.startup);
        for (const dB of BB.startup) this.request(dB)
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
        const jB = this.pending.get(BB);
        if (!0 === (null === jB || void 0 === jB ? void 0 : jB.ask)) return;
        const zB = this.Ds(BB, !0);
        zB.recheck = void 0 !== jB;
        const QB = this.drawn.get(BB);
        if (void 0 !== QB) return zB.DN = !0, zB.recheck = !0, void this.fetch(BB, zB, QB);
        this.fetchWanted(BB, zB)
      }
      async refresh() {
        const BB = ++this.refreshes,
          jB = new Set;
        for (const IB of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const BB of IB) 0 === (BB & dB.f) && jB.add(BB);
        const zB = [...jB];
        let QB;
        try {
          QB = await Promise.all(zB.map((BB => this.wanted(BB))))
        } catch {
          return null
        }
        if (BB !== this.refreshes) return null;
        const nB = {
          resent: 0,
          refetched: 0,
          delivered: zB.filter((BB => this.drawn.has(BB))).length
        };
        return zB.forEach(((BB, jB) => {
          const {
            url: zB,
            inPlaceOf: dB
          } = QB[jB], IB = this.pending.get(BB);
          if (void 0 !== IB) {
            if (IB.DN || void 0 === IB.url) return void(IB.recheck = !0);
            if (IB.url === zB) return;
            nB.refetched++;
            const jB = this.Ds(BB, IB.ask);
            return jB.recheck = IB.recheck, void this.fetch(BB, jB, zB, dB)
          }
          const NB = this.written.get(BB);
          void 0 === NB ? this.drawn.get(BB) !== (null !== zB && void 0 !== zB ? zB : void 0) && (nB.resent++, this.fetch(BB, this.Ds(BB, !1), zB, dB)) : NB.url !== (null !== zB && void 0 !== zB ? zB : "") && (NB.attempt.recheck = !0)
        })), nB
      }
      taken(BB, jB) {
        const zB = new Set,
          QB = new Set;
        for (const nB of Array.from(jB)) 0 === (nB & UB) ? zB.add(nB) : QB.add((nB & ~UB) >>> 0);
        for (const [nB, dB] of this.written) dB.seq > BB || (this.written.delete(nB), zB.has(dB.seq) ? this.refusedFile(nB, dB) : this.takenFile(nB, dB, !dB.empty && !QB.has(dB.seq)))
      }
      takenFile(BB, jB, zB) {
        const {
          attempt: QB
        } = jB;
        if (zB) {
          var nB;
          this.drawn.set(BB, jB.url), this.undrawn.delete(BB), void 0 !== QB.inPlaceOf ? this.refusedPack.set(BB, QB.inPlaceOf) : QB.DN || this.refusedPack.delete(BB), null === (nB = this.onTaken) || void 0 === nB || nB.call(this, BB, !0);
          const zB = this.pending.get(BB);
          if (!0 === (null === zB || void 0 === zB ? void 0 : zB.DN) && zB.url !== jB.url) {
            const zB = this.Ds(BB, !0);
            zB.DN = !0, zB.recheck = !0, this.fetch(BB, zB, jB.url)
          }
        } else {
          var dB;
          this.drawn.has(BB) || this.undrawn.add(BB), null === (dB = this.onTaken) || void 0 === dB || dB.call(this, BB, !1)
        }
        QB.recheck && this.resendIfChanged(BB)
      }
      refusedFile(BB, jB) {
        var zB, QB;
        if (null === (zB = this.onTaken) || void 0 === zB || zB.call(this, BB, !1), this.refusedPack.set(BB, jB.url), this.pending.has(BB)) return void(null === (QB = this.onPackFileFailed) || void 0 === QB || QB.call(this, BB, JB(jB.url)));
        const nB = this.Ds(BB, jB.attempt.ask);
        nB.recheck = jB.attempt.recheck, this.afterRefusal(BB, nB, jB.url)
      }
      async afterRefusal(BB, jB, zB) {
        var QB;
        let nB;
        try {
          nB = await this.wanted(BB)
        } catch (dB) {
          return void(this.pending.get(BB) === jB && this.giveUp(BB, jB, zB, dB))
        }
        this.pending.get(BB) === jB && (nB.inPlaceOf !== zB ? jB.ask || (null !== (QB = nB.url) && void 0 !== QB ? QB : void 0) !== this.drawn.get(BB) ? this.fetch(BB, jB, nB.url, nB.inPlaceOf) : this.pending.delete(BB) : this.fallBack(BB, jB, zB, JB(zB)))
      }
      Ds(BB, jB) {
        const zB = {
          url: void 0,
          ask: jB,
          DN: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(BB, zB);
        for (let QB = this.ready.length - 1; QB >= 0; QB--) this.ready[QB].file === BB && this.ready.splice(QB, 1);
        return zB
      }
      async wanted(BB) {
        const jB = await this.files.url(BB);
        return null !== jB && this.refusedPack.get(BB) === jB ? {
          url: await this.files.shippedUrl(BB),
          inPlaceOf: jB
        } : {
          url: jB,
          inPlaceOf: void 0
        }
      }
      fetchWanted(BB, jB) {
        const zB = this.files.url(BB);
        zB instanceof Promise ? zB.then((zB => {
          this.fetchFound(BB, jB, zB)
        }), (zB => {
          this.pending.get(BB) === jB && this.giveUp(BB, jB, "", zB)
        })) : this.fetchFound(BB, jB, zB)
      }
      fetchFound(BB, jB, zB) {
        null !== zB && this.refusedPack.get(BB) === zB ? Promise.resolve(this.files.shippedUrl(BB)).then((QB => {
          this.fetch(BB, jB, QB, zB)
        }), (QB => {
          this.pending.get(BB) === jB && this.giveUp(BB, jB, zB, QB)
        })) : this.fetch(BB, jB, zB)
      }
      fetch(BB, jB, zB, QB) {
        this.pending.get(BB) === jB && (jB.url = zB, jB.inPlaceOf = QB, null !== zB ? this.load(BB, jB, zB) : this.buildFile(BB, jB, "", aB))
      }
      load(BB, jB, zB) {
        const QB = this.Cs.get(BB);
        (null === QB || void 0 === QB ? void 0 : QB.url) !== zB ? this.fetchFile(zB).then((QB => {
          var nB, dB;
          this.pending.get(BB) === jB && (this.keptTotal += QB.byteLength - (null !== (nB = null === (dB = this.Cs.get(BB)) || void 0 === dB ? void 0 : dB.glb.byteLength) && void 0 !== nB ? nB : 0), this.Cs.set(BB, {
            url: zB,
            glb: QB
          }), this.buildFile(BB, jB, zB, QB))
        }), (QB => {
          this.pending.get(BB) === jB && this.fallBack(BB, jB, zB, QB)
        })) : this.buildFile(BB, jB, zB, QB.glb)
      }
      buildFile(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const IB = QB.byteLength > 0 && (0, dB.l)(zB) ? (BB | dB.c) >>> 0 : BB;
        this.queueRecord(BB, jB, zB, QB, this.build(IB, QB), nB)
      }
      queueRecord(BB, jB, zB, QB, dB, NB) {
        dB.then((dB => {
          if (this.pending.get(BB) !== jB) return;
          if (nB.u + (0, nB.ie)(dB.byteLength) > nB.Ec) return void this.ringRefused(BB, jB, zB, new pB(`${mB(zB)}'s record is ${dB.byteLength-IB.c} bytes, past the cmd ring's ${nB.Ec}`), NB);
          const uB = {
            file: BB,
            url: zB,
            payload: dB,
            glb: QB,
            attempt: jB
          };
          NB ? this.ready.unshift(uB) : this.ready.push(uB)
        }))
      }
      async fallBack(BB, jB, zB, QB) {
        var nB;
        let dB = null,
          IB = QB;
        try {
          dB = await this.files.shippedUrl(BB)
        } catch (NB) {
          IB = NB
        }
        this.pending.get(BB) === jB && (null !== dB && dB !== zB ? (null === (nB = this.onPackFileFailed) || void 0 === nB || nB.call(this, BB, QB), jB.ask || this.drawn.get(BB) !== dB ? (jB.url = dB, jB.inPlaceOf = zB, this.load(BB, jB, dB)) : this.pending.delete(BB)) : this.giveUp(BB, jB, zB, IB))
      }
      ringRefused(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, dB.l)(zB) ? this.fallBack(BB, jB, zB, QB): this.giveUp(BB, jB, zB, QB, nB)
      }
      giveUp(BB, jB, zB, nB) {
        let dB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: BB,
          url: mB(zB),
          error: nB,
          startup: this.startupLeft.has(BB)
        }), jB.ask || !this.drawn.has(BB) ? (0, QB.T)(nB) ? this.queueRecord(BB, jB, zB, aB, Promise.resolve((0, IB.l)(BB, (0, NB.m)(nB))), dB) : this.buildFile(BB, jB, zB, aB, dB) : this.pending.delete(BB)
      }
      async resendIfChanged(BB) {
        var jB;
        if (0 !== (BB & dB.f)) return;
        let zB;
        try {
          zB = await this.wanted(BB)
        } catch {
          return
        }(null !== (jB = zB.url) && void 0 !== jB ? jB : void 0) === this.drawn.get(BB) || this.pending.has(BB) || this.written.has(BB) || this.fetch(BB, this.Ds(BB, !1), zB.url, zB.inPlaceOf)
      }
      drain(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === BB) return;
        let zB = 0,
          QB = 0;
        for (; QB < this.ready.length && zB < 262144;) {
          const NB = this.ready[QB];
          if (this.written.has(NB.file)) {
            QB++;
            continue
          }
          const aB = this.nextSeq;
          new DataView(NB.payload.buffer, NB.payload.byteOffset, NB.payload.byteLength).setUint32(IB.g, aB, !0);
          const rB = NB.attempt.DN && NB.glb.byteLength > 0 && this.drawn.get(NB.file) === NB.url;
          if (BB(uB, rB ? 1 : 0, NB.payload)) {
            if (this.nextSeq = aB >= UB - 1 ? 1 : aB + 1, this.ready.splice(QB, 1), zB += NB.payload.byteLength, this.pending.delete(NB.file), this.startupLeft.delete(NB.file), this.written.set(NB.file, {
                seq: aB,
                url: NB.url,
                empty: 0 === NB.glb.byteLength,
                attempt: NB.attempt
              }), NB.glb.byteLength > 0) try {
              var nB;
              null === (nB = this.onWritten) || void 0 === nB || nB.call(this, NB.file, NB.glb)
            } catch (dB) {
              console.warn("ModelFeed: reading the file's images failed", dB)
            }
          } else {
            if (null === jB || 0 === NB.glb.byteLength || jB(NB.payload.byteLength)) return;
            this.ready.splice(QB, 1);
            const BB = new pB(`${mB(NB.url)}'s record is ${NB.payload.byteLength-IB.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(NB.file, NB.attempt, NB.url, BB, !0)
          }
        }
      }
    }

    function JB(BB) {
      return new rB(`presentation refused ${mB(BB)}`)
    }

    function mB(BB) {
      return BB.startsWith("data:") ? `${BB.slice(0,Math.min(Math.max(BB.indexOf(","),5),64))},...` : BB
    }
  },
  40881: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB,
      f: () => dB,
      j: () => aB,
      l: () => NB,
      p: () => UB,
      q: () => uB
    });
    var QB = zB(2974),
      nB = zB(3310);
    const dB = 2147483648,
      IB = 1073741824;

    function NB(BB) {
      return BB.startsWith("data:")
    }

    function uB(BB) {
      let {
        onTableFailed: jB,
        packUrl: zB
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const QB = UB();
      QB.catch((BB => {
        null === jB || void 0 === jB || jB(BB)
      }));
      const nB = async jB => (await QB).fileUrl((jB & ~dB) >>> 0, BB);
      return {
        startup: [],
        url: async BB => {
          if (zB && 0 === (BB & dB)) {
            const jB = await QB,
              nB = jB.filePackName(BB),
              dB = null === nB || "lifeform" === jB.fileSource(BB) ? null : zB(nB);
            if (null !== dB) return dB
          }
          return nB(BB)
        },
        shippedUrl: nB
      }
    }

    function UB() {
      return zB.e(42).then((() => zB(42785)))
    }
    async function aB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return BB.startsWith("data:") ? (0, nB.c)(BB.slice(BB.indexOf(",") + 1), jB) : (0, QB.L)(BB, {
        spare: jB
      })
    }
  },
  40883: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => UB,
      g: () => aB,
      h: () => sB,
      j: () => yB,
      l: () => JB,
      o: () => rB,
      q: () => mB
    });
    const QB = 826427981,
      nB = 1,
      dB = 2,
      IB = 44,
      NB = 46,
      uB = 58,
      UB = 8,
      aB = 4;

    function pB(BB, jB, zB) {
      const nB = (new TextEncoder).encode(zB),
        dB = UB + 4 * (jB.length + 2),
        IB = new Uint8Array(dB + (nB.byteLength + 3 & -4)),
        NB = new DataView(IB.buffer);
      return NB.setUint32(0, BB, !0), NB.setUint32(UB, QB, !0), jB.forEach(((BB, jB) => {
        NB.setUint32(UB + 4 * (jB + 1), BB, !0)
      })), NB.setUint32(dB - 4, nB.byteLength, !0), IB.set(nB, dB), IB
    }

    function rB(BB, jB) {
      return pB(BB, [dB], jB)
    }

    function sB(BB, jB) {
      return pB(BB, [nB, NB], jB)
    }

    function JB(BB, jB) {
      return pB(BB, [nB, uB], jB)
    }

    function mB(BB, jB) {
      return pB(BB, [nB, IB], jB)
    }

    function yB(BB) {
      const jB = UB;
      if (BB.byteLength < jB + 12) return !1;
      const zB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      return zB.getUint32(jB, !0) === QB && zB.getUint32(jB + 4, !0) === nB && zB.getUint32(jB + 8, !0) === IB
    }
  },
  40822: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB,
      e: () => aB,
      h: () => IB,
      j: () => uB
    });
    var QB = zB(36347);
    class nB extends Error {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${BB}: the module trapped${zB?" in an earlier call":""}: ${String(jB)}`, {
          cause: jB
        }), this.site = BB, this.trap = jB, this.earlier = zB, this.name = "ModuleTrapError", jB instanceof Error && void 0 !== jB.stack && (this.stack = `${this.name}: ${this.message}\n${jB.stack}`)
      }
    }
    const dB = new WeakMap;

    function IB(BB) {
      return dB.has(BB)
    }

    function NB(BB, jB) {
      dB.has(BB) || dB.set(BB, jB)
    }

    function uB(BB, jB) {
      return !!(0, QB.l)(jB) && (NB(BB, jB), !0)
    }
    const UB = [
      ["error", BB => BB.error],
      ["unhandledrejection", BB => BB.reason]
    ];

    function aB(BB, jB, zB) {
      let IB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return dB.has(BB) ? Promise.reject(new nB(jB, dB.get(BB), !0)) : new Promise(((dB, uB) => {
        const aB = zB => {
            NB(BB, zB), sB(), uB(new nB(jB, zB))
          },
          pB = BB => {
            BB instanceof WebAssembly.RuntimeError ? aB(BB) : (sB(), uB(BB))
          },
          rB = UB.map((BB => {
            let [jB, zB] = BB;
            return [jB, BB => {
              const jB = zB(BB);
              (0, QB.l)(jB) && aB(jB)
            }]
          })),
          sB = () => {
            for (const [BB, jB] of rB) null === IB || void 0 === IB || IB.removeEventListener(BB, jB)
          };
        for (const [BB, jB] of rB) null === IB || void 0 === IB || IB.addEventListener(BB, jB);
        let JB;
        try {
          JB = zB()
        } catch (mB) {
          return void pB(mB)
        }
        JB.then((BB => {
          sB(), dB(BB)
        }), pB)
      }))
    }
  },
  40796: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => WB,
      C: () => PB,
      D: () => YB,
      G: () => EB,
      H: () => DB,
      I: () => eB,
      M: () => FB,
      N: () => hB,
      R: () => HB,
      V: () => lB,
      d: () => MB,
      g: () => gB,
      k: () => XB,
      o: () => VB,
      p: () => LB,
      s: () => SB,
      t: () => kB,
      x: () => qB,
      y: () => oB
    });
    var QB = zB(225),
      nB = zB(28),
      dB = zB(3665),
      IB = zB(355),
      NB = zB(41),
      uB = zB(40805),
      UB = zB(36547),
      aB = zB(40826),
      pB = (zB(40856), zB(40909)),
      rB = zB(40845);
    const sB = "wasmJoinBuild";
    let JB = null,
      mB = null,
      yB = null;

    function kB(BB) {
      yB = BB
    }
    let GB = !1;

    function LB() {
      GB = !0
    }

    function gB() {
      return GB
    }
    let tB = !1;

    function SB() {
      tB = !0
    }

    function MB() {
      return tB
    }

    function EB() {
      return yB
    }
    let iB = null;

    function qB(BB) {
      iB = BB, (0, IB.e)(BB)
    }
    const fB = "wasmClientRenderLost";

    function oB() {
      NB.k.setItem(fB, !0)
    }

    function HB() {
      return !0 === NB.k.getItem(fB)
    }

    function DB() {
      return iB
    }

    function FB() {
      if (null === JB) {
        NB.j.removeItem("wasmLastPick"), NB.j.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, IB.j)(), JB = (0, uB.G)(aB.c).then((BB => (null === BB || (0, uB.r)(BB) || (mB = pB.c[BB.backend], nB.c.followGameGpu("webgpu" === BB.backend ? BB.adapter : null), "webgpu" === BB.backend && (0, rB.g)()), BB)))
      }
      return JB
    }

    function YB() {
      return mB
    }

    function VB(BB) {
      return BB ? BB.load() : Promise.resolve().then((function() {
        var BB = new Error("Cannot find module '@bloxd/wasm/client'");
        throw BB.code = "MODULE_NOT_FOUND", BB
      })).then((BB => BB.bloxdWasmClient))
    }

    function hB(BB) {
      NB.j.setItem(sB, BB)
    }
    async function XB() {
      if (null === aB.c) return VB(null);
      const BB = NB.j.getItem(sB);
      let jB;
      return null === BB ? jB = void 0 !== (0, QB.b)(aB.c, "webgpu") && (0, uB.C)() ? "webgpu" : "webgl" : "none" === BB ? jB = null : "string" === typeof BB && void 0 !== (0, QB.b)(aB.c, BB) ? jB = BB : (console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(BB)}, is none of this client's: guessing WebGL2's`), jB = "webgl"), null === jB ? null : aB.c[jB]()
    }
    let ZB = null,
      AB = null,
      TB = null;

    function PB() {
      return ZB ??= FB().then((async BB => {
        const jB = null !== BB && !(0, uB.r)(BB),
          zB = {
            indirectHangs: jB && await (0, uB.P)(BB, window.location.search),
            storagePullBreaks: jB && (0, uB.Z)(BB, window.location.search),
            splitPassBreaks: jB && (0, uB.W)(BB, window.location.search),
            earlySky: jB && (0, uB.O)(BB, window.location.search),
            instancedTerrain: jB ? (0, uB.Q)(BB, window.location.search) : null,
            cellLight: jB && await (0, dB.j)("cellLight"),
            framesAhead: (0, uB.p)(window.location.search),
            webGpuRestores: !jB || (0, uB.ab)(BB, (0, UB.d)()),
            bufferCopiesCrash: jB && (0, uB.M)(BB, window.location.search)
          };
        return AB = zB.indirectHangs, TB = !zB.webGpuRestores, zB
      })), ZB
    }

    function WB() {
      return AB
    }

    function eB() {
      return TB
    }
    async function lB() {
      const BB = null === JB ? null : await JB;
      return null !== BB && (0, uB.r)(BB) && (JB = null, ZB = null, AB = null, TB = null), FB()
    }
  },
  41054: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(36387),
      nB = zB(40948),
      dB = zB(36547);

    function IB(BB, jB) {
      return (0, QB.i)(BB, nB.c, {
        ...jB,
        memoryMaximumBytes: (0, dB.m)()
      })
    }
  },
  40824: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      h: () => NB,
      i: () => aB,
      m: () => IB
    });
    var QB = zB(373),
      nB = zB(681);
    let dB;

    function IB(BB) {
      var jB;
      const zB = dB;
      return dB = void 0, null !== (jB = uB(BB)) && void 0 !== jB ? jB : zB
    }

    function NB(BB) {
      try {
        const jB = uB(BB);
        void 0 !== jB && (dB = jB, (0, nB.h)((0, QB.l)(jB.reason, jB.message)))
      } catch (jB) {
        console.warn("Couldn't keep the WebGPU loss's cause", jB)
      }
    }

    function uB(BB) {
      var jB;
      const zB = null === BB || void 0 === BB || null === (jB = BB.pdB) || void 0 === jB ? void 0 : jB.call(BB),
        QB = null === BB || void 0 === BB ? void 0 : BB.adB();
      if (void 0 === QB) return;
      const nB = new Error(QB);
      return void 0 !== zB && (nB.reason = zB), nB
    }

    function UB(BB) {
      return BB instanceof Error ? BB : void 0
    }

    function aB(BB, jB) {
      return "lost" !== BB && "frames_refused" !== BB ? {} : (0, QB.l)("frames_refused" === BB ? BB : null === jB || void 0 === jB ? void 0 : jB.reason, null === jB || void 0 === jB ? void 0 : jB.message)
    }
  },
  40842: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => tB,
      e: () => EB,
      h: () => LB,
      l: () => GB,
      n: () => MB,
      p: () => oB,
      t: () => fB,
      w: () => HB
    });
    var QB = zB(4893),
      nB = zB(40845);
    const dB = 1,
      IB = 18,
      NB = 19,
      uB = 20,
      UB = 21,
      aB = {
        [dB]: "link",
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
        [IB]: "retry linked",
        [NB]: "fallback linked",
        [uB]: "fallback failed",
        [UB]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function pB(BB, jB, zB) {
      return BB === IB ? "program retry" : BB === dB ? "program link" : BB === UB ? "program link stall" : BB === NB || BB === uB ? `program ${jB} ${zB}` : "program"
    }
    const rB = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      sB = {
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
      JB = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      mB = {
        11: "none read after view",
        12: "some read after view"
      },
      yB = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...mB
      },
      kB = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function GB(BB, jB) {
      return BB === QB.m.RenderSerialLinks && void 0 !== mB[jB]
    }

    function LB(BB, jB) {
      return BB === QB.m.RenderSerialLinks && void 0 !== kB[15 & jB]
    }
    const gB = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function tB(BB) {
      return String(BB).replace(/\d/g, (BB => String.fromCharCode(97 + Number(BB))))
    }

    function SB(BB, jB) {
      var zB;
      return null !== (zB = BB[jB]) && void 0 !== zB ? zB : tB(jB)
    }

    function MB() {
      return tB((0, nB.c)())
    }

    function EB(BB, jB) {
      switch (BB) {
        case QB.m.RenderSceneRowNotDrawn:
          return {
            words: ` ${SB(sB,jB)}`, instance: String(jB), group: String(BB)
          };
        case QB.m.RenderChunkMeshNotDrawn: {
          const zB = 0 === (128 & jB) ? "" : " shortage",
            QB = jB >>> 8;
          return {
            words: ` ${SB(JB,127&jB)}${zB}${0===QB?"":` kind ${tB(QB)}`}`,
            instance: String(jB),
            group: String(BB)
          }
        }
        case QB.m.RenderInternal: {
          const zB = SB(rB, 255 & jB),
            QB = jB >>> 8 & 255;
          if (0 === QB) return {
            words: ` ${zB}`,
            instance: String(jB),
            group: String(BB)
          };
          const nB = SB(aB, QB),
            dB = jB >>> 16;
          return {
            words: ` ${zB} ${nB} program ${tB(dB)}`,
            instance: `${zB} ${nB} ${dB}`,
            group: pB(QB, nB, zB),
            gpuDetails: {
              programFailure: nB,
              program: String(dB)
            }
          }
        }
        case QB.m.RenderSerialLinks: {
          if (LB(BB, jB)) {
            const BB = function(BB) {
              const jB = (jB, zB) => tB(BB >>> jB & (1 << zB) - 1),
                zB = BB >>> 30 & 1 ? " restored" : "";
              return `link census ${kB[15&BB]} linked ${jB(22,8)} failed ${jB(4,6)} retried ${jB(10,6)} fallback ${jB(16,6)}${zB}`
            }(jB);
            return {
              words: ` ${BB}`,
              instance: String(15 & jB),
              group: "link census",
              gpuDetails: {
                linkCensus: BB
              }
            }
          }
          const zB = SB(yB, jB);
          return {
            words: ` ${zB}`,
            instance: String(jB),
            group: String(BB),
            gpuDetails: {
              serialLinks: zB
            }
          }
        }
        case QB.m.RenderGlErrorAfterRestore: {
          const zB = SB(gB, 65535 & jB),
            QB = jB >>> 16,
            nB = 65535 !== QB;
          return {
            words: ` ${zB}${nB?` program ${tB(QB)}`:""}`,
            instance: String(jB),
            group: String(BB),
            gpuDetails: nB ? {
              glError: zB,
              program: String(QB)
            } : {
              glError: zB
            }
          }
        }
        default:
          return null
      }
    }
    const iB = 2,
      qB = new Map;

    function fB(BB) {
      let {
        group: jB,
        instance: zB
      } = BB, QB = qB.get(jB);
      return void 0 === QB && (QB = [], qB.set(jB, QB)), !QB.includes(zB) && (QB.length >= iB || (QB.push(zB), !1))
    }

    function oB() {
      return qB.size > 0
    }

    function HB() {
      qB.clear()
    }
  },
  40826: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      c: () => dB
    });
    var QB = zB(40830);
    const nB = new WeakSet;
    const dB = {
        webgpu: async () => (function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === BB || nB.has(BB.prototype)) return;
          nB.add(BB.prototype);
          const jB = BB.prototype.requestDevice;
          BB.prototype.requestDevice = function(BB) {
            var zB;
            const nB = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.requiredLimits) && void 0 !== zB ? zB : {},
              dB = Object.keys(nB).filter((BB => !(BB in this.limits)));
            if (0 === dB.length) return jB.call(this, BB);
            const IB = Object.fromEntries(Object.entries(nB).filter((BB => {
              let [jB] = BB;
              return jB in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${dB.join(", ")}`), (0, QB.reportDroppedRequiredLimits)(dB), jB.call(this, {
              ...BB,
              requiredLimits: IB
            })
          }
        }(), (await zB.e(8).then((() => zB(42746)))).bloxdWasmWebgpu),
        webgl: async () => (await zB.e(6).then((() => zB(42759)))).bloxdWasmWebgl,
        webgl1: async () => (await zB.e(7).then((() => zB(42771)))).bloxdWasmWebgl1
      },
      IB = async () => (await zB.e(5).then((() => zB(42778)))).compileAnimationPackInWasm
  },
  40780: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => kB,
      d: () => yB,
      e: () => tB
    });
    var QB = zB(6592),
      nB = zB(31),
      dB = zB(4396),
      IB = zB(4893),
      NB = zB(6587),
      uB = zB(40789);

    function UB(BB, jB) {
      const zB = (0, NB.d)(jB.variants);
      return BB.setShaderPack(zB.variantFlags, zB.hooks, zB.moduleCodes, (0, uB.E)(jB.layers), uB.r[jB.sN], jB.keepCircleShadows)
    }
    const aB = 0,
      pB = 1,
      rB = 2,
      sB = "shaderPack:failedToCompile",
      JB = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      mB = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function yB(BB, jB) {
      var zB;
      const QB = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.reason) && void 0 !== zB ? zB : "none";
      return JB.has(QB) ? {
        messageKey: jB ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === QB && "override" === (null === BB || void 0 === BB ? void 0 : BB.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: mB.has(QB) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class kB extends Error {
      constructor(BB) {
        super(`the shader pack can't run in this game: ${BB}`), this.messageKey = BB, this.name = "ShaderPackJoinError"
      }
    }
    const GB = "strict";
    class LB {
      constructor(BB) {
        this.deps = BB, this.pagePack = void 0, this.loaded = null, this.sN = GB, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = BB.load().catch((jB => (BB.warn("the shader pack could not load: the game draws without it", jB), {
          status: "none"
        }))).then((BB => (this.loaded = BB, "active" === BB.status && (this.handOverToPreviews(BB), null !== BB.harnessPolicy && (this.sN = BB.harnessPolicy, this.handOver())), BB)))
      }
      async join(BB) {
        this.leave();
        const jB = this.game,
          [zB, nB] = await Promise.all([this.pagePack, this.policyOf(BB)]);
        if (jB !== this.game || "none" === zB.status) return null;
        const dB = "active" === zB.status ? zB.pack.variants : zB.variants,
          IB = (0, QB.m)(dB, nB);
        if (IB && "active" === zB.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (IB) {
          const BB = this.cantRun(zB, nB);
          if (null !== BB) return BB
        } else if ("blocked" === zB.status || null === this.deps.core) return null;
        return this.sN = nB, this.handOver(), IB && this.refused ? sB : (this.joined = !0, this.offInThisGame = !IB, null)
      }
      async replay(BB) {
        const jB = await this.join(BB);
        null === jB ? this.playable() : this.deps.failInGame(jB)
      }
      cantRun(BB, jB) {
        const {
          core: zB,
          noWebGpu: QB
        } = this.deps;
        if ("blocked" === BB.status) {
          return "shaderPack:failedUnchecked" === BB.messageKey && null === zB && QB.noAdapter ? QB.messageKey : BB.messageKey
        }
        return this.refused || this.failedPolicies.has(jB) ? sB : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var BB;
        return this.runsInJoinedGame() && "active" === (null === (BB = this.loaded) || void 0 === BB ? void 0 : BB.status) ? function(BB, jB) {
          const zB = BB.filter((BB => (0, QB.m)([BB], jB))),
            nB = BB => zB.some((jB => jB[BB]));
          return {
            sceneDepth: nB("sceneDepth"),
            sunShadow: nB("sunShadow"),
            airShadow: nB("airShadow")
          }
        }(this.loaded.pack.variants, this.sN) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(sB) : (null !== this.couldntRun ? this.notify(dB.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.sN) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(BB) {
        for (const {
            code: jB,
            detail: zB
          }
          of BB)
          if (jB === IB.m.RenderShaderPackNotRun) switch (255 & zB) {
            case aB:
              this.refused = !0, this.failed();
              break;
            case pB:
              this.failedPolicies.add(this.sN), this.failed();
              break;
            case rB:
              this.failedModelPolicies.add(this.sN), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(sB) : this.failedWhileJoining = !0)
      }
      fail(BB) {
        this.leave(), this.deps.failInGame(BB)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(BB, jB) {
        const zB = this.game;
        this.deps.notify(BB, (() => zB === this.game && this.joined), jB)
      }
      handOver() {
        var BB;
        const {
          core: jB
        } = this.deps;
        null !== jB && "active" === (null === (BB = this.loaded) || void 0 === BB ? void 0 : BB.status) && (UB(jB, {
          ...this.loaded.pack,
          sN: this.sN
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(BB) {
        let {
          pack: jB,
          harnessPolicy: zB
        } = BB;
        const {
          previews: QB
        } = this.deps;
        null !== QB && UB(QB, {
          ...jB,
          sN: null !== zB && void 0 !== zB ? zB : GB
        })
      }
      policyOf(BB) {
        return this.deps.policyOf(BB).catch((BB => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", BB), GB)))
      }
    }
    const gB = "wasmShaderPackNotice";

    function tB(BB, jB, zB, QB) {
      return nB.n.subscribe(gB, (BB => {
        let {
          translationKey: jB,
          stillCurrent: zB,
          reasonKey: QB
        } = BB;
        zB() && nB.n.Ly("chat", (0, dB.g)(jB, QB))
      })), new LB({
        load: SB,
        policyOf: MB,
        core: BB,
        previews: jB,
        noWebGpu: zB,
        notify: (BB, jB, zB) => {
          const QB = {
            translationKey: BB,
            stillCurrent: jB,
            reasonKey: zB
          };
          nB.n.Ly(gB, QB, !0)
        },
        failInGame: BB => {
          nB.n.Ly(dB.f, BB)
        },
        warn: QB
      })
    }
    async function SB() {
      const [{
        shaderPackPage: BB,
        harnessShaderPackMode: jB
      }, {
        shaderPackTextures: QB
      }] = await Promise.all([zB.e(117).then((() => zB(39307))), zB.e(118).then((() => zB(6585)))]), nB = await BB.load();
      return "active" !== nB.status ? nB : {
        status: "active",
        pack: {
          variants: nB.pack.variants,
          layers: QB().layers,
          keepCircleShadows: nB.pack.keepCircleShadows
        },
        harnessPolicy: jB()
      }
    }
    async function MB(BB) {
      var jB;
      const [{
        shaderPackPage: QB,
        harnessShaderPackMode: nB
      }, {
        getShaderPackPolicy: dB
      }] = await Promise.all([zB.e(117).then((() => zB(39307))), zB.e(93).then((() => zB(41362)))]);
      return await QB.load(), null !== (jB = nB()) && void 0 !== jB ? jB : dB(BB)
    }
  },
  40889: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      f: () => yB,
      h: () => uB,
      k: () => UB,
      o: () => aB,
      s: () => rB
    });
    var QB = zB(40898),
      nB = zB(40906);
    const dB = "atlas:",
      IB = 3e4;
    class NB extends Error {
      constructor(BB, jB) {
        super(`fetching ${BB} answered HTTP ${jB}`), this.url = BB, this.status = jB, this.name = "TerrainTextureFetchError"
      }
    }

    function uB(BB) {
      if (!BB.startsWith(dB)) return null;
      const jB = Number(BB.slice(dB.length));
      return Number.isInteger(jB) && jB >= 0 ? jB : null
    }
    async function UB() {
      const BB = await zB.e(207).then((() => zB(34335)));
      return {
        atlasSheets: BB.blockAtlasUrls,
        texture: jB => {
          var zB, QB, dB;
          return null !== (zB = null !== (QB = null !== (dB = BB.animatedBlockTextures[jB]) && void 0 !== dB ? dB : BB.rotatedBlockTextures[jB]) && void 0 !== QB ? QB : nB.b[jB]) && void 0 !== zB ? zB : null
        }
      }
    }
    async function aB(BB) {
      const jB = new AbortController,
        zB = setTimeout((() => {
          jB.abort(new DOMException(`${BB} took over ${IB} ms`, "TimeoutError"))
        }), IB);
      let QB;
      try {
        const zB = await fetch(BB, {
          signal: jB.signal
        });
        if (!zB.ok) throw new NB(BB, zB.status);
        QB = await zB.blob()
      } finally {
        clearTimeout(zB)
      }
      const nB = await createImageBitmap(QB, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return rB(nB)
      } finally {
        nB.close()
      }
    }
    const pB = 8192;

    function rB(BB) {
      const {
        width: jB,
        height: zB
      } = BB, nB = Math.max(1, Math.min(zB, pB)), dB = (0, QB.g)(jB, nB, {
        willReadFrequently: !0
      });
      if (!dB) throw new Error("no 2D context to read the texture back");
      dB.globalCompositeOperation = "copy";
      const IB = new Uint8Array(jB * zB * 4);
      for (let QB = 0; QB < zB; QB += nB) {
        const NB = Math.min(nB, zB - QB);
        dB.drawImage(BB, 0, QB, jB, NB, 0, 0, jB, NB), IB.set(dB.getImageData(0, 0, jB, NB).data, QB * jB * 4)
      }
      return {
        width: jB,
        height: zB,
        pixels: IB
      }
    }
    async function sB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aB;
      const QB = [],
        nB = await Promise.all(BB.map((async BB => {
          var nB, IB;
          const NB = null !== (nB = null === (IB = jB.decoded) || void 0 === IB ? void 0 : IB.call(jB, BB)) && void 0 !== nB ? nB : null,
            UB = null === NB ? function(BB, jB) {
              if (BB.startsWith(dB)) {
                var zB;
                const QB = uB(BB);
                return null === QB ? null : null !== (zB = jB.atlasSheets[QB]) && void 0 !== zB ? zB : null
              }
              return jB.texture(BB)
            }(BB, jB) : null,
            aB = null !== NB && void 0 !== NB ? NB : null === UB ? null : zB(UB);
          if (null === aB) return QB.push({
            name: BB,
            url: UB,
            error: new Error(`no URL for terrain texture ${BB}`)
          }), null;
          try {
            const jB = await aB;
            if (jB.pixels.byteLength !== jB.width * jB.height * 4) throw new Error(`decoded ${jB.pixels.byteLength} bytes for ${jB.width}x${jB.height} texels`);
            return {
              name: BB,
              texture: jB
            }
          } catch (pB) {
            return QB.push({
              name: BB,
              url: UB,
              error: pB
            }), null
          }
        }))),
        IB = nB.filter((BB => null !== BB)),
        NB = new Uint32Array(2 * IB.length);
      IB.forEach(((BB, jB) => {
        let {
          texture: zB
        } = BB;
        NB[2 * jB] = zB.width, NB[2 * jB + 1] = zB.height
      }));
      return {
        handOver: {
          names: IB.map((BB => {
            let {
              name: jB
            } = BB;
            return jB
          })),
          textures: IB.map((BB => {
            let {
              texture: jB
            } = BB;
            return jB.pixels
          })),
          sizes: NB
        },
        failures: QB
      }
    }
    const JB = [2e3, 1e4, 3e4, 6e4, 12e4];

    function mB() {}
    class yB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = BB, this.retryMs = jB, this.keepBelow = zB, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UB,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const QB = ++this.started,
          nB = {
            decode: zB.decode,
            wholeAtlas: zB.wholeAtlas
          };
        return this.loadAndHandOver(jB, nB, BB, (() => {
          var BB;
          return QB < this.landed || !1 === (null === (BB = zB.wanted) || void 0 === BB ? void 0 : BB.call(zB))
        }), {
          onTaken: (BB, zB) => {
            this.landed = QB, this.current = {
              mine: QB,
              sources: jB,
              load: nB,
              Cs: BB,
              failed: zB
            }
          }
        })
      }
      restore(BB) {
        var jB;
        const zB = this.current;
        if (null === zB) return Promise.resolve(null);
        if ((null === (jB = this.restoring) || void 0 === jB ? void 0 : jB.mine) === zB.mine) return this.restoring.done;
        const QB = {
          mine: zB.mine,
          done: this.restoreLanded(zB, BB).finally((() => {
            this.restoring === QB && (this.restoring = null)
          }))
        };
        return this.restoring = QB, QB.done
      }
      async restoreLanded(BB, jB) {
        const zB = () => this.landed !== BB.mine,
          {
            Cs: QB
          } = BB;
        if (null !== QB) return this.stopped() ? null : this.core.setTerrainTextures(QB.names, QB.textures, QB.sizes);
        let nB = jB;
        for (let dB = 0;; dB++) {
          const jB = this.retryMs.at(dB),
            QB = {
              allOrNothingExcept: void 0 === jB ? void 0 : BB.failed
            },
            IB = await this.loadAndHandOver(BB.sources, BB.load, nB, zB, QB);
          if (!1 !== IB || void 0 === jB || this.stopped()) return IB;
          if (nB = mB, await new Promise((BB => {
              setTimeout(BB, jB)
            })), zB()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const dB = this.core.terrainTextureNames();
        var IB;
        if (0 === dB.length) return null === (IB = nB.onTaken) || void 0 === IB || IB.call(nB, null, new Set), !0;
        let NB, UB;
        try {
          NB = await BB(), UB = await sB(dB, NB, jB.decode)
        } catch (yB) {
          return QB() ? null : (zB({
            name: null,
            url: null,
            error: yB
          }), !1)
        }
        if (QB() || this.stopped()) return null;
        for (const uB of UB.failures) zB(uB);
        const aB = nB.allOrNothingExcept;
        if (void 0 !== aB && UB.failures.some((BB => {
            let {
              name: jB
            } = BB;
            return null === jB || !aB.has(jB)
          })) || !0 === jB.wholeAtlas && UB.failures.some((BB => {
            let {
              name: jB
            } = BB;
            return null === jB || null !== uB(jB)
          }))) return !1;
        const {
          handOver: pB
        } = UB, rB = function(BB) {
          return BB.textures.reduce(((BB, jB) => BB + jB.byteLength), 0)
        }(pB) < this.keepBelow, JB = this.core.setTerrainTextures(pB.names, pB.textures, pB.sizes, rB ? void 0 : () => {
          !async function(BB, jB) {
            await jB;
            for (const {
                buffer: QB
              }
              of BB) {
              const BB = QB;
              var zB;
              if (!BB.detached) null === (zB = BB.transfer) || void 0 === zB || zB.call(BB, 0)
            }
          }(pB.textures, NB.heldUntil)
        });
        if (JB) {
          var mB;
          const BB = new Set(UB.failures.flatMap((BB => {
            let {
              name: jB
            } = BB;
            return null === jB ? [] : [jB]
          })));
          null === (mB = nB.onTaken) || void 0 === mB || mB.call(nB, rB ? pB : null, BB)
        }
        return JB
      }
    }
  },
  36926: (BB, jB, zB) => {
    function QB(BB) {
      return "fetch" === BB || "timeout" === BB || "integrity" === BB ? "download" : "browser"
    }
    zB.d(jB, {
      c: () => nB,
      e: () => IB,
      f: () => uB,
      i: () => NB,
      m: () => QB,
      q: () => dB
    });
    const nB = "https://discord.gg/playbloxd";

    function dB(BB) {
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

    function IB(BB, jB) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: jB ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: BB.code
        },
        discordLink: jB,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function NB() {
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

    function uB(BB, jB, zB) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: zB ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: BB.reason
        },
        discordLink: null === BB.name,
        confirm: jB ? "general:reconnect" : BB.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  34196: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      h: () => pB,
      l: () => aB
    });
    var QB = zB(283),
      nB = zB(106),
      dB = zB(140),
      IB = zB(132),
      NB = zB(687);
    const uB = new Set(["mali_bifrost"]);

    function UB() {
      if ("android" !== (0, nB.pageOperatingSystem)() || NB.f || (0, NB.d)("webgl_default")) return;
      const BB = (0, dB.j)(),
        jB = null === BB ? (0, QB.r)() : (0, QB.g)(BB.vendor, BB.renderer);
      return null !== jB && uB.has(jB) ? BB => (0, QB.k)((0, IB.c)(BB).vendor, jB) : void 0
    }

    function aB(BB, jB) {
      return BB ? () => !0 : jB()
    }
    async function pB(BB) {
      try {
        const jB = aB(BB, UB),
          zB = navigator.gpu;
        if (void 0 === jB || void 0 === zB) return !1;
        const QB = await (0, IB.m)(zB, {
          seed: !1,
          compatibility: jB
        });
        return "string" !== typeof QB && QB.compatibility && !(0, IB.h)(QB.adapter)
      } catch (jB) {
        return console.error("WebGPU compatibility-mode adapter request failed.", jB), !1
      }
    }
  },
  40845: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => uB,
      g: () => UB
    });
    var QB = zB(106),
      nB = zB(38875);
    const dB = "webgpuPipeline";

    function IB(BB) {
      return BB.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let NB = null;

    function uB() {
      if (null === NB) try {
        BB = (0, QB.getBrowserName)(), jB = (0, QB.getBrowserVersion)(), zB = (0, QB.getOperatingSystem)(), nB = (0, QB.getOperatingSystemVersion)(), NB = `${BB.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===jB?"unknown":IB(jB)}-${zB}${void 0===nB?"":`_${IB(nB)}`}`
      } catch (dB) {
        console.warn("The user agent couldn't be read for its browser code", dB), NB = "unknown"
      }
      var BB, jB, zB, nB;
      return NB
    }

    function UB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const jB = `WGPU-${uB()}`,
        QB = (BB, QB) => {
          const {
            reason: IB,
            message: NB
          } = QB;
          if ((0, nB.n)(String(NB))) return;
          const uB = {
            pipeline: null !== BB && void 0 !== BB ? BB : "",
            reason: String(IB),
            browserMessage: String(NB)
          };
          Promise.resolve().then((() => zB(40830))).then((BB => {
            let {
              reportCrash: zB
            } = BB;
            zB({
              kind: "coreError",
              code: jB,
              site: dB,
              fatal: !1,
              message: `${uB.pipeline} ${uB.reason}: ${uB.browserMessage}`,
              details: uB,
              error: QB
            })
          })).catch((BB => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", BB)
          }))
        },
        IB = BB.createRenderPipelineAsync;
      BB.createRenderPipelineAsync = function(BB) {
        return IB.call(this, BB).catch((jB => {
          throw QB(BB.label, jB), jB
        }))
      };
      const NB = BB.createComputePipelineAsync;
      BB.createComputePipelineAsync = function(BB) {
        return NB.call(this, BB).catch((jB => {
          throw QB(BB.label, jB), jB
        }))
      }
    }
  },
  40953: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/bloxd_wasm_models_bg.5d0de0280583c1dde4dd.wasm"
  },
  40951: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/bloxd_wasm_workers_bg.574abd1dccf92ef7010f.wasm"
  },
  40948: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      c: () => QB
    });
    const QB = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new zB.U(zB(40951))
      }
    };
    const nB = {
      name: "bloxd_wasm_models",
      url: function() {
        return new zB.U(zB(40953))
      }
    }
  },
  6587: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => gB,
      g: () => tB,
      i: () => GB,
      j: () => kB
    });
    var QB = zB(6592);
    const nB = 6,
      dB = 3,
      IB = 1,
      NB = 2,
      uB = 4,
      UB = 8,
      aB = 16,
      pB = 32,
      rB = 64,
      sB = 128,
      JB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function mB(BB) {
      if (!BB) return 0;
      const jB = JB.indexOf(BB);
      if (jB <= 0) throw new Error(`"${BB}" is not a shader pack hook function`);
      return jB
    }

    function yB(BB) {
      if (0 === BB) return null;
      const jB = JB[BB];
      if (void 0 === jB) throw new Error(`${BB} is not a shader pack hook function id`);
      return jB
    }

    function kB(BB) {
      const jB = QB.e.length;
      return {
        strict: BB >= jB,
        program: QB.e[BB % jB]
      }
    }

    function GB(BB) {
      return Number(BB.strict) * QB.e.length + QB.e.indexOf(BB.program)
    }

    function LB(BB) {
      return "" === BB ? [] : BB.split(" ")
    }

    function gB(BB) {
      const jB = {
        variantFlags: new Uint8Array(nB),
        hooks: new Uint8Array(nB * dB),
        moduleCodes: Array(nB).fill(""),
        reads: Array(2 * nB).fill("")
      };
      for (const zB of BB) {
        const BB = GB(zB.key),
          QB = (BB, jB) => null === zB.hooks.surface || zB.reads.fragment.includes(BB) ? 0 : jB;
        jB.variantFlags[BB] = (zB.sceneDepth ? IB : 0) | (zB.movesVertices ? NB : 0) | (zB.sunShadow ? uB : 0) | (zB.airShadow ? UB : 0) | (zB.discards ? aB : 0) | QB("localPosition", pB) | QB("enchantSpeed", rB) | QB("enchantTier", sB), jB.hooks[BB * dB] = mB(zB.hooks.vertex), jB.hooks[BB * dB + 1] = mB(zB.hooks.surface), jB.hooks[BB * dB + 2] = mB(zB.hooks.light), jB.moduleCodes[BB] = zB.moduleCode, jB.reads[2 * BB] = zB.reads.vertex.join(" "), jB.reads[2 * BB + 1] = zB.reads.fragment.join(" ")
      }
      return jB
    }

    function tB(BB) {
      const {
        hooks: jB,
        moduleCodes: zB,
        reads: QB
      } = BB;
      return Array.from(BB.variantFlags, ((BB, nB) => {
        const pB = nB * dB;
        return {
          key: kB(nB),
          hooks: {
            vertex: yB(jB[pB]),
            surface: yB(jB[pB + 1]),
            light: yB(jB[pB + 2])
          },
          moduleCode: zB[nB],
          sceneDepth: 0 !== (BB & IB),
          sunShadow: 0 !== (BB & uB),
          airShadow: 0 !== (BB & UB),
          movesVertices: 0 !== (BB & NB),
          discards: 0 !== (BB & aB),
          reads: {
            vertex: LB(QB[2 * nB]),
            fragment: LB(QB[2 * nB + 1])
          }
        }
      }))
    }
  },
  40789: (BB, jB, zB) => {
    zB.d(jB, {
      C: () => IB,
      E: () => mB,
      I: () => sB,
      J: () => JB,
      d: () => nB,
      h: () => QB,
      k: () => rB,
      o: () => aB,
      r: () => yB,
      u: () => dB,
      v: () => NB,
      y: () => uB
    });
    const QB = 3,
      nB = 0,
      dB = 1,
      IB = 2,
      NB = {
        uniform: 3,
        Vr: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      uB = 10,
      UB = "BloxdPackInputs",
      aB = "bloxdPackInputs",
      pB = [{
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
      rB = 80;

    function sB() {
      const BB = pB.map((BB => {
        let {
          name: jB,
          type: zB
        } = BB;
        return `    ${jB}: ${zB},\n`
      })).join("");
      return `struct ${UB} {\n${BB}}\n@group(${QB}) @binding(${nB}) var<uniform> ${aB}: ${UB};\n`
    }

    function JB(BB, jB) {
      const zB = new DataView(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, rB),
        [QB, nB, dB, IB, NB, uB] = pB;
      zB.setFloat32(QB.offset, jB.seconds, !0), zB.setUint32(nB.offset, jB.lit ? 1 : 0, !0);
      for (let UB = 0; UB < 3; UB++) zB.setInt32(dB.offset + 4 * UB, jB.renderOffset[UB], !0), zB.setFloat32(IB.offset + 4 * UB, jB.J7[UB], !0), zB.setFloat32(NB.offset + 4 * UB, jB.eyePosition[UB], !0), zB.setFloat32(uB.offset + 4 * UB, jB.shadowDirection[UB], !0)
    }

    function mB(BB) {
      const jB = new Uint32Array(Math.max(1, BB.length));
      return BB.forEach(((BB, zB) => {
        let {
          id: QB,
          rotation: nB
        } = BB;
        jB[zB] = 65535 & QB | (3 & nB) << 16
      })), jB
    }
    const yB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6592: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB,
      i: () => IB,
      m: () => NB,
      q: () => nB,
      s: () => dB
    });
    const QB = ["terrain", "liquid", "model"];

    function nB() {
      const BB = [];
      for (const jB of [!1, !0])
        for (const zB of QB) BB.push({
          strict: jB,
          program: zB
        });
      return BB
    }

    function dB(BB) {
      return `${BB.strict?"strict":"allow"}.${BB.program}`
    }

    function IB(BB) {
      return !BB.hooks.vertex && !BB.hooks.surface && !BB.hooks.light
    }

    function NB(BB, jB) {
      return "off" !== jB && (null === BB || BB.some((BB => BB.key.strict === ("strict" === jB) && !IB(BB))))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);