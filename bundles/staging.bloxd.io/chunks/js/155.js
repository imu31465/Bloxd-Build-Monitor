export const id = 155;
export const ids = [155];
export const modules = {
  34631: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      d: () => oB
    });
    var YB = GB(258),
      DB = GB(118),
      QB = GB(34637);

    function oB() {
      var BB, OB, GB;
      return null !== (BB = (0, YB.j)(null !== (OB = null === (GB = (0, DB.o)()) || void 0 === GB ? void 0 : GB.renderer) && void 0 !== OB ? OB : null, (0, DB.m)())) && void 0 !== BB ? BB : "unknown"
    }

    function jB(BB, OB, GB, YB, DB) {
      const oB = null === OB ? "untimed" : `${Math.round(OB)} ms`;
      return `frames stalled, ${GB}, gpu ${(0,QB.c)(DB)}, blocking ${oB}, drawn ${Math.round(BB)} ms apart, timers ${YB.timers}, timer gap ${Math.round(YB.longestGapMs)} ms`
    }
  },
  34637: (BB, OB, GB) => {
    function YB(BB) {
      return String(BB).replace(/\d/g, (BB => String.fromCharCode(97 + Number(BB))))
    }
    GB.d(OB, {
      c: () => YB
    })
  },
  41646: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      c: () => MB,
      d: () => oB,
      h: () => DB,
      j: () => jB,
      k: () => JB
    });
    class YB extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function DB(BB) {
      return BB instanceof RangeError && /call stack/i.test(BB.message) || BB instanceof Error && "InternalError" === BB.name && /recursion/i.test(BB.message)
    }
    const QB = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function oB(BB) {
      var OB;
      return BB instanceof WebAssembly.RuntimeError || BB instanceof YB || DB(BB) && QB.test(null !== (OB = BB.stack) && void 0 !== OB ? OB : "")
    }

    function jB(BB, OB) {
      if (oB(BB)) throw BB;
      console.error(OB, BB)
    }

    function yB(BB, OB, GB, DB, QB) {
      if (OB % DB !== 0 || OB + GB > BB.byteLength) throw new YB(`${QB}: ${GB} bytes at ${OB}, ${DB}-aligned, outside ${BB.byteLength} bytes of memory`)
    }

    function JB(BB, OB, GB, YB, DB) {
      return 0 === GB ? null : (yB(OB, GB, YB * BB.BYTES_PER_ELEMENT, BB.BYTES_PER_ELEMENT, DB), new BB(OB, GB, YB))
    }

    function MB(BB, OB, GB, YB, DB) {
      return 0 === OB ? null : (yB(BB, OB, GB, YB, DB), new DataView(BB, OB, GB))
    }
  },
  41729: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => VO,
      E: () => sB,
      I: () => tB,
      K: () => bB,
      N: () => YO,
      O: () => GO,
      Q: () => BO,
      U: () => QO,
      W: () => NO,
      Z: () => DO,
      _: () => OO,
      bb: () => oO,
      e: () => mB,
      eb: () => MO,
      gb: () => lO,
      h: () => RO,
      hb: () => FB,
      k: () => SO,
      lb: () => iB,
      o: () => zO,
      r: () => ZO,
      u: () => JO,
      v: () => qO,
      y: () => pO
    });
    var YB = GB(331),
      DB = GB(254),
      QB = GB(258),
      oB = GB(16),
      jB = GB(3136),
      yB = GB(694),
      JB = GB(4927),
      MB = GB(3111),
      PB = GB(3885),
      zB = GB(92),
      lB = GB(120),
      pB = GB(328),
      qB = GB(31),
      ZB = GB(320),
      NB = GB(113),
      RB = GB(656),
      WB = GB(118),
      AB = GB(116),
      VB = GB(5287),
      SB = GB(41736),
      nB = GB(1896),
      UB = GB(41742),
      fB = GB(41750),
      kB = GB(34746),
      dB = GB(41753),
      KB = GB(41761);
    const uB = "bloxd-webgpuOffAfterLoss",
      mB = "context:webgl",
      IB = "probe:threw";

    function FB() {
      const BB = document.createElement("canvas");
      let OB = "";
      BB.addEventListener("webglcontextcreationerror", (BB => {
        OB = BB.statusMessage
      }));
      try {
        var GB, YB;
        null === (GB = BB.getContext("webgl")) || void 0 === GB || null === (YB = GB.getExtension("WEBGL_lose_context")) || void 0 === YB || YB.loseContext()
      } catch (DB) {
        return String(DB)
      }
      return OB
    }

    function iB(BB) {
      let OB;
      try {
        OB = BB.getContext("webgl", {
          powerPreference: WB.e
        })
      } catch {
        OB = null
      }
      if (null === OB) return null;
      let GB = null;
      try {
        const BB = OB.getParameter(OB.MAX_TEXTURE_SIZE);
        GB = "number" === typeof BB && BB > 0 ? BB : null
      } catch {
        GB = null
      }
      try {
        var YB;
        null === (YB = OB.getExtension("WEBGL_lose_context")) || void 0 === YB || YB.loseContext()
      } catch {}
      return GB
    }
    const LB = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function gB() {
      return "ios" === (0, zB.getOperatingSystem)() ? "ios" : "other"
    }
    const rB = "mali_valhall",
      XB = new Set(["nvidia_pre_turing"]),
      wB = new Set(["intel_gen7_8"]);

    function EB(BB, OB, GB) {
      return LB.has(BB) ? "android_arm" === BB && OB === rB && "mobileAndroid" !== GB ? "webgpu_default" : "webgl_default" : null
    }

    function cB(BB) {
      return function(BB) {
        try {
          return BB()
        } catch {
          return null
        }
      }((() => {
        var OB, GB, YB, oB;
        const jB = null !== (OB = null === (GB = BB.info) || void 0 === GB ? void 0 : GB.vendor) && void 0 !== OB ? OB : "";
        return "windows" === (0, zB.getOperatingSystem)() && "" !== jB && "intel" !== (0, zB.normaliseGpuVendor)(jB) ? null : ((0, zB.seedGpuVendor)(jB), EB((0, DB.l)(), (0, QB.d)(jB, null !== (YB = null === (oB = BB.info) || void 0 === oB ? void 0 : oB.architecture) && void 0 !== YB ? YB : ""), lB.siteUsed))
      }))
    }

    function hB() {
      var BB;
      return {
        gpu: null !== (BB = navigator.gpu) && void 0 !== BB ? BB : null,
        webgl2: dB.f,
        webgl1: () => function(BB) {
          let OB, GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SB.e;
          try {
            OB = BB.getContext("webgl")
          } catch {
            OB = null
          }
          if (null === OB) return [mB];
          const YB = [];
          try {
            for (const DB of GB.extensions) null === OB.getExtension(DB) && YB.push(DB);
            for (const [DB, QB] of Object.entries(GB.limits)) {
              const BB = OB[DB],
                GB = "number" === typeof BB ? OB.getParameter(BB) : null;
              ("number" !== typeof GB || GB < QB) && YB.push(`limit:${DB}`)
            }
            const BB = OB.getShaderPrecisionFormat(OB.VERTEX_SHADER, OB.HIGH_FLOAT);
            (null === BB || BB.precision < GB.vertexHighFloatBits) && YB.push("precision:vertex_high_float")
          } catch {
            YB.push(IB)
          }
          try {
            var DB;
            null === (DB = OB.getExtension("WEBGL_lose_context")) || void 0 === DB || DB.loseContext()
          } catch {}
          return YB
        }(document.createElement("canvas")),
        offAfterLoss: BB => eB((() => BB ? (0, ZB.E)() : oB.c.isWebGpuOffAfterLoss())),
        oldIntelDriver: BB => eB((() => (0, NB.d)(BB))),
        intelGen9: BB => eB((() => (0, NB.q)(BB))),
        storeIntelGen9Verdict: BB => {
          qB.g.setItem(NB.F, BB)
        },
        gpuClassWebGlArm: cB,
        storeGpuClassVerdict: BB => {
          qB.g.setItem(NB.D, BB)
        },
        gpuClassOnWebGl: BB => (0, RB.c)(BB),
        webGlDefaultFamily: BB => wB.has((0, QB.d)(BB.vendor, BB.architecture)),
        storeWebGlDefaultFamilyVerdict: BB => {
          qB.g.setItem(NB.Q, BB)
        },
        override: () => aB(),
        claimed: () => TB((0, yB.k)()),
        webGpuSetting: () => {
          const BB = qB.g.getItem(YB.nc);
          return "boolean" === typeof BB ? BB : null
        },
        heldBack: () => RB.f,
        storeHoldbackSpared: BB => {
          qB.g.setItem(NB.C, BB)
        },
        intelGen9OnWebGl: () => RB.g,
        zp: () => eB((() => (0, PB.f)(zB.featureFlags.settings.canUseShaderPacks))),
        windows: () => eB((() => "windows" === (0, zB.getOperatingSystem)())),
        defaultCompatibility: kB.b
      }
    }

    function aB() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, jB.s)("render") && "webgl1" === (0, jB.p)("renderer")) return "webgl1";
      const OB = [() => new URLSearchParams(window.location.search).get(MB.d), () => qB.g.getItem(MB.f), () => {
        const OB = localStorage.getItem(uB);
        return null !== OB && BB && localStorage.removeItem(uB), "1" === OB ? "webgl2" : null
      }];
      for (const GB of OB) {
        let BB = null;
        try {
          BB = TB(GB())
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

    function TB(BB) {
      return "lite" === BB ? "webgpu" : "webgl2" === BB || "babylon" === BB ? "webgl" : null
    }

    function bB(BB) {
      return "none" === BB || "compatibility_mode" === BB
    }
    async function CB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hB();
      const OB = await async function(BB) {
        const OB = vB(BB),
          {
            source: GB
          } = OB,
          YB = !OB.asked,
          DB = "gpu" in OB && OB.heldBack,
          oB = function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return DB && !bB(BB) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: GB
            } : {
              reason: BB,
              adapter: OB,
              source: GB
            }
          };
        if (!("gpu" in OB)) return oB(OB.refused);
        let jB;
        try {
          jB = await (0, nB.h)((0, AB.r)(OB.gpu, {
            compatibility: HB(BB, OB)
          }), WO, `requestAdapter didn't settle in ${WO/1e3} s`)
        } catch {
          return oB("adapter_error")
        }
        if ("string" === typeof jB) return oB(jB);
        const {
          adapter: yB,
          compatibility: JB
        } = jB, MB = (0, AB.e)(yB);
        if ((0, AB.k)(yB)) return oB("software_adapter", MB);
        const PB = BB.windows() && function(BB) {
          return XB.has((0, QB.d)(BB.vendor, BB.architecture))
        }(MB);
        if (BB.storeHoldbackSpared(PB), DB && !PB) return oB("webgl_holdback");
        const zB = BB.intelGen9(yB);
        BB.storeIntelGen9Verdict(zB);
        const lB = zB ? null : BB.gpuClassWebGlArm(yB);
        BB.storeGpuClassVerdict(null !== lB && void 0 !== lB && lB);
        const pB = BB.webGlDefaultFamily(MB);
        if (BB.storeWebGlDefaultFamilyVerdict(pB), YB && BB.oldIntelDriver(yB)) return oB("old_intel_driver", MB);
        if ("default" === GB && zB && BB.intelGen9OnWebGl()) return oB("intel_gen9", MB);
        if ("default" === GB && null !== lB && BB.gpuClassOnWebGl(lB)) return oB("gpu_class_webgl", MB);
        if ("default" === GB && pB) return oB("gpu_wasm_arm", MB);
        return oB(JB ? "compatibility_mode" : "none", MB)
      }(BB);
      if (bB(OB.reason)) return {
        backend: "webgpu",
        ...OB
      };
      if ("webgl1" !== BB.override() && BB.webgl2()) return {
        backend: "webgl",
        ...OB
      };
      const GB = BB.webgl1();
      return 0 === GB.length ? {
        backend: "webgl1",
        ...OB
      } : {
        missing: GB
      }
    }

    function HB(BB, OB) {
      let {
        source: GB,
        asked: YB
      } = OB;
      return YB || "default" === GB ? (0, kB.i)(YB, BB.defaultCompatibility) : void 0
    }

    function vB(BB) {
      const OB = BB.override(),
        GB = BB.webGpuSetting(),
        YB = null === OB && !0 !== GB && BB.zp(),
        DB = null !== OB || null !== GB || YB ? null : BB.claimed(),
        QB = null !== OB ? "override" : !0 === GB ? "setting" : YB ? "pack" : !1 === GB ? "setting" : null !== DB ? "claim" : "default",
        oB = function(BB) {
          return "override" === BB || "setting" === BB
        }(QB);
      if ("webgl" === OB || "webgl1" === OB || "webgl" === DB || "setting" === QB && !1 === GB) return {
        source: QB,
        asked: oB,
        refused: "not_requested"
      };
      if (!BB.gpu) return {
        source: QB,
        asked: oB,
        refused: "no_webgpu_api"
      };
      const jB = "default" === QB && BB.heldBack();
      return jB && !BB.windows() ? {
        source: QB,
        asked: oB,
        refused: "webgl_holdback"
      } : !oB && BB.offAfterLoss("pack" === QB) ? {
        source: QB,
        asked: oB,
        refused: jB ? "webgl_holdback" : "off_after_loss"
      } : {
        source: QB,
        asked: oB,
        heldBack: jB,
        gpu: BB.gpu
      }
    }

    function sB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...hB(),
          override: () => aB(!1)
        },
        OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zB.isWebKit,
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gB;
      try {
        if (!OB()) return !1;
        const YB = vB(BB);
        if (!("gpu" in YB) || YB.heldBack) return !1;
        const DB = "default" === YB.source ? EB(GB(), "apple", lB.siteUsed) : null;
        return null === DB || !BB.gpuClassOnWebGl(DB)
      } catch (YB) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", YB), !1
      }
    }
    let xB = !1;
    async function tB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hB();
      if (null === BB) return null;
      const GB = await CB(OB);
      return xB = !("missing" in GB) && "webgpu" === GB.backend && "claim" === GB.source, "missing" in GB ? GB : {
        ...GB,
        load: BB[GB.backend]
      }
    }
    async function BO(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hB().gpu,
        YB = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== BB.backend) return !1;
      const DB = yO(BB, OB, "indirectDraws", "off", "on");
      if (null !== DB) return DB;
      if (null !== BB.adapter && (0, NB.r)(BB.adapter, YB)) return !0;
      if (null === GB) return !1;
      try {
        var QB;
        const BB = await (0, nB.h)(GB.requestAdapter({
          powerPreference: "low-power"
        }).then((async BB => (null !== BB && await (0, AB.g)(BB), BB))), WO, `the low-power requestAdapter didn't settle in ${WO/1e3} s`);
        return (0, NB.r)(null !== (QB = null === BB || void 0 === BB ? void 0 : BB.info) && void 0 !== QB ? QB : {}, YB)
      } catch (oB) {
        return oB instanceof nB.d
      }
    }

    function OO(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, zB.pageOperatingSystem)();
      if ("webgpu" !== BB.backend) return !1;
      const DB = yO(BB, OB, "terrainFetch", "texture", "storage");
      return null !== DB ? DB : null !== BB.adapter && ((0, NB.l)(BB.adapter, GB) || (0, NB.h)(BB.adapter, YB))
    }

    function GO(BB, OB) {
      if ("webgpu" !== BB.backend) return !1;
      const GB = yO(BB, OB, "skyOrder", "early", "last");
      return null !== GB ? GB : null !== BB.adapter && (0, QB.d)(BB.adapter.vendor, BB.adapter.architecture) === rB
    }

    function YO(BB, OB) {
      if ("webgpu" !== BB.backend) return !1;
      const GB = yO(BB, OB, "uploadCopies", "off", "on");
      return null !== GB ? GB : null !== BB.adapter && "powervr_rogue" === (0, QB.d)(BB.adapter.vendor, BB.adapter.architecture)
    }

    function DO(BB, OB, GB) {
      if ("webgpu" !== BB.backend) return !1;
      const YB = yO(BB, OB, "sceneDepth", "off", "on");
      return null !== YB ? YB : null !== BB.adapter && (0, NB.p)(BB.adapter, GB)
    }

    function QO(BB, OB) {
      return "webgl" === BB.backend ? yO(BB, OB, "instancedTerrain", "1", "0") : null
    }

    function oO(BB, OB) {
      return "webgpu" !== BB.backend || OB && (null === BB.adapter || !(0, ZB.H)(BB.adapter))
    }

    function jO(BB, OB, GB, YB) {
      const DB = new URLSearchParams(OB).get(GB),
        QB = null !== DB && void 0 !== DB ? DB : null === BB ? null : (0, yB.g)(GB);
      return null !== QB && YB(QB) ? (xB ||= null === DB && "webgpu" === (null === BB || void 0 === BB ? void 0 : BB.backend), QB) : null
    }

    function yO(BB, OB, GB, YB, DB) {
      const QB = jO(BB, OB, GB, (BB => BB === YB || BB === DB));
      return null === QB ? null : QB === YB
    }

    function JO(BB) {
      return null !== BB && "missing" in BB
    }

    function MO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !lO(),
        GB = arguments.length > 2 ? arguments[2] : void 0;
      return OB ? function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB.c,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const YB = "start_failed" === BB || "pipeline_failed" === BB,
            DB = (0, KB.h)(BB, GB),
            QB = OB.turnOffWebGpuAfterDeviceLoss(YB ? "visible" : (0, ZB.p)((0, pB.f)()), YB, DB);
          return xB && (0, yB.u)("webgpuLoss"), OB.isWebGpuOffAfterLoss() && "webgpu" === TB(qB.g.getItem(MB.f)) && qB.g.removeItem(MB.f), (0, jB.s)("webgpuloss") && (0, JB.d)((OB => {
            var GB;
            OB.noteWebGpuLoss("wasm", QB ? BB : `${BB}, which storage didn't keep`, null !== (GB = DB.message) && void 0 !== GB ? GB : null)
          })), QB
        } catch {
          return !1
        }
      }(BB, oB.c, GB) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const PO = "framePacing";

    function zO(BB, OB) {
      const GB = jO("webgpu" === (null === OB || void 0 === OB ? void 0 : OB.backend) ? OB : null, BB, PO, (BB => /^\d{1,9}$/.test(BB)));
      return null === GB ? void 0 : Number(GB)
    }

    function lO() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === TB(new URLSearchParams(BB).get(MB.d))
      } catch {
        return !1
      }
    }

    function pO(BB) {
      return !!qO(BB) || BB instanceof Error && !(BB instanceof WebAssembly.RuntimeError) && BB.message.startsWith(`${VB.p.RenderSurfaceUnusable}:`)
    }

    function qO(BB) {
      const {
        name: OB,
        message: GB
      } = null !== BB && void 0 !== BB ? BB : {};
      return "InvalidStateError" === OB && "string" === typeof GB && GB.startsWith("GPUDevice.")
    }

    function ZO(BB) {
      const OB = BB;
      return "function" === typeof OB.ZDB && "function" === typeof OB.NDB ? OB : null
    }

    function NO(BB) {
      return "function" === typeof BB.vZ ? BB : null
    }
    const RO = "openRenderer";
    const WO = 5e3,
      AO = 15e3;

    function VO(BB, OB, GB, YB, DB, QB) {
      return (0, nB.h)(function(BB, OB, GB, YB, DB, QB) {
        const oB = (0, UB.i)(BB, OB, (() => BB.vZ(GB, YB, DB, QB.indirectHangs, QB.storagePullBreaks, QB.splitPassBreaks, QB.earlySky, QB.instancedTerrain, QB.cellLight, QB.framesAhead, QB.webGpuRestores, QB.bufferCopiesCrash))),
          {
            firstVertex: jB
          } = QB;
        return void 0 === jB ? oB : oB.then((BB => ((0, fB.e)(GB, jB), BB)))
      }(BB, OB, GB, YB, DB, QB), AO, `${VB.p.RenderSurfaceUnusable}: the renderer didn't open in ${AO/1e3} s`, nO)
    }
    async function SO(BB, OB, GB, YB, DB, QB) {
      if ("function" !== typeof BB.UjB) throw new Error("this core has no set_renderer");
      const oB = await VO(OB, RO, GB, DB, YB, QB);
      try {
        BB.UjB(oB)
      } catch (jB) {
        throw nO(oB), jB
      }
    }

    function nO(BB) {
      try {
        BB.free()
      } catch {}
    }
  },
  41858: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    const YB = {
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
  41782: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => pB,
      e: () => qB,
      f: () => zB,
      i: () => PB
    });
    const YB = 2e3,
      DB = "unavailable";
    let QB = () => Promise.resolve().then((() => GB(1859))),
      oB = null,
      jB = null,
      yB = JB();

    function JB() {
      let BB = () => {};
      return {
        promise: new Promise((OB => {
          BB = () => {
            OB(null)
          }
        })),
        resolve: BB
      }
    }

    function MB() {
      if (null === oB) {
        const BB = QB();
        oB = BB, BB.then((OB => {
          oB === BB && (jB = OB)
        }), (() => {
          oB === BB && (oB = null)
        }))
      }
      return oB
    }

    function PB() {
      MB().catch((() => {}))
    }

    function zB() {
      yB.resolve()
    }

    function lB(BB, OB, GB, YB) {
      if (null === BB) return {
        errorKind: OB,
        fingerprint: DB,
        dedupe: `${OB}|${YB}`
      };
      const {
        fingerprint: QB
      } = BB.clientErrorKey(OB, GB, YB);
      return {
        errorKind: OB,
        fingerprint: QB,
        dedupe: QB
      }
    }

    function pB(BB, OB, GB, YB) {
      return null === jB ? YB ? (PB(), lB(null, BB, OB, GB)) : null : lB(jB, BB, OB, GB)
    }
    async function qB(BB, OB, GB) {
      let DB;
      const QB = new Promise((BB => {
        DB = setTimeout((() => {
          BB(null)
        }), YB)
      }));
      try {
        return lB(await Promise.race([MB(), QB, yB.promise]), BB, OB, GB)
      } catch {
        return lB(null, BB, OB, GB)
      } finally {
        clearTimeout(DB)
      }
    }
  },
  41773: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      BUILT_IN_ANIMATIONS_SITE: () => BO,
      CAMERA_DIRECTOR_SITE: () => oO,
      CORE_ERRORS_SITE: () => aB,
      EVENT_OVERFLOW_SITE: () => tB,
      FIRST_VIEW_SITE: () => YO,
      GraphicsLostError: () => YG,
      JOIN_SITE: () => TB,
      LEAVE_SITE: () => bB,
      MAIN_THREAD_SITE: () => DO,
      MODEL_FEED_SITE: () => CB,
      MODEL_POOL_SITE: () => HB,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => JO,
      NON_FATAL_REPORTS_PER_SESSION: () => dO,
      PREVIEW_ANIMATIONS_SITE: () => xB,
      RENDER_RELOAD_SITE: () => sB,
      REQUEST_DEVICE_SITE: () => QO,
      TEXTURE_NAMES_SITE: () => vB,
      TEXTURE_PACK_FEED_SITE: () => OO,
      TEXTURE_PACK_SWAP_SITE: () => GO,
      TurnstilePageError: () => pG,
      WASM_LOAD_SITE: () => eB,
      countRenderLost: () => sG,
      crashError: () => iO,
      crashReportsSettled: () => eO,
      deviceLossFields: () => vO,
      deviceLossWords: () => bG,
      flushCrashReports: () => hO,
      joinFailureCode: () => qG,
      loadRecoveryCode: () => yG,
      lokiTransport: () => zO,
      modelFailureCode: () => SG,
      readTrap: () => tO,
      renderLoss: () => vG,
      renderReloadMessage: () => CG,
      reportCameraDirectorFault: () => hG,
      reportCoreErrors: () => CO,
      reportCrash: () => LO,
      reportDataLoadFailure: () => YY,
      reportDisconnect: () => AG,
      reportDroppedRequiredLimits: () => MG,
      reportEventOverflow: () => uG,
      reportFirstViewNoTerrain: () => rG,
      reportFirstViewUnshown: () => XG,
      reportLightFault: () => FG,
      reportLoadRecovery: () => JG,
      reportLoadReload: () => zG,
      reportMainStall: () => wG,
      reportMemoryShed: () => LG,
      reportModelFailure: () => nG,
      reportModelPoolFailure: () => UG,
      reportModelsModuleRetry: () => fG,
      reportNoBackendRetry: () => oG,
      reportPageJoinFailure: () => NG,
      reportReconnectGaveUp: () => VG,
      reportRenderRecovery: () => wO,
      reportRenderReload: () => BY,
      reportReplayFault: () => cG,
      reportStaleBuildReload: () => QY,
      reportStoppedCore: () => OG,
      reportTerrainTextureFailure: () => OY,
      reportTexturePackFeedLoadFailure: () => dG,
      reportTexturePackKeptOut: () => KG,
      reportUnstreamedCoreLoad: () => lG,
      reportUnusedSeat: () => WG,
      reportWorkerLost: () => mG,
      reportWorkerStartTimeout: () => EG,
      reportWorldgenGaveUp: () => iG,
      reportWorldgenLoadFailure: () => kG,
      reportWorldgenWorkerLost: () => IG,
      resetCrashReports: () => TO,
      setCrashAdPreload: () => VO,
      setCrashBackend: () => AO,
      setCrashScreen: () => NO,
      setCrashTransport: () => qO,
      showCrash: () => BG,
      showJoinFailure: () => ZG,
      showUnsupported: () => DG,
      unknownSkyWords: () => bO,
      unsupportedCrashScreen: () => QG,
      warmCrashCounts: () => rO
    });
    var YB = GB(1049),
      DB = GB(1360),
      QB = GB(182),
      oB = GB(1350),
      jB = GB(1308),
      yB = GB(258),
      JB = GB(1862),
      MB = GB(4714),
      PB = GB(41782),
      zB = GB(5281),
      lB = GB(41784),
      pB = GB(34637),
      qB = GB(3351),
      ZB = GB(34631),
      NB = GB(39470),
      RB = GB(120),
      WB = GB(118),
      AB = GB(3355),
      VB = GB(37160),
      SB = GB(1896),
      nB = GB(41797),
      UB = GB(41817),
      fB = GB(41593),
      kB = GB(41692),
      dB = GB(41700),
      KB = GB(37154),
      uB = GB(3206),
      mB = GB(3210),
      IB = GB(41827),
      FB = GB(41820),
      iB = GB(41851),
      LB = GB(37536),
      gB = GB(662),
      rB = GB(3645),
      XB = GB(36871),
      wB = GB(41742),
      EB = GB(36876),
      cB = GB(41864);
    const hB = "[bloxd-wasm-client]",
      aB = "coreErrors",
      eB = "wasmLoad",
      TB = "join",
      bB = "leave",
      CB = "modelFeed",
      HB = "modelWorkerPool",
      vB = "textureNames",
      sB = "renderReload",
      xB = "previewAnimations",
      tB = "eventOverflow",
      BO = "builtInAnimations",
      OO = "texturePackFeed",
      GO = "texturePackSwap",
      YO = "firstView",
      DO = "mainThread",
      QO = "requestDevice",
      oO = "cameraDirector",
      jO = 300,
      yO = 64,
      JO = 8;
    let MO = 0;
    const PO = new Set,
      zO = (BB, OB) => {
        const GB = SO[BB.kind],
          YB = {
            backend: RO,
            adPreload: WO
          };
        if (null === GB) return void lO(BB, OB, YB, null);
        const DB = (0, PB.d)(GB, BB.message, BB.code, BB.fatal);
        null === DB ? cO("Loki", (async () => {
          lO(BB, OB, YB, await (0, PB.e)(GB, BB.message, BB.code))
        })) : lO(BB, OB, YB, DB)
      };

    function lO(BB, OB, GB, YB) {
      let {
        backend: DB,
        adPreload: QB
      } = GB;
      const {
        kind: oB,
        code: yB,
        site: MB,
        fatal: PB,
        details: zB
      } = BB;
      if (!PB)
        if (null === YB || (0, JB.c)(YB.errorKind) || PO.has(YB.dedupe)) {
          if (MO >= JO) return;
          MO++
        } else PO.add(YB.dedupe);
      const lB = {
        ...zB,
        kind: oB,
        code: yB,
        site: MB,
        fatal: String(PB),
        backend: DB
      };
      QB && (lB.adPreload = "true"), null !== YB && (lB.errorKind = YB.errorKind, lB.fingerprint = YB.fingerprint), OB instanceof Error && "string" === typeof OB.stack && (lB.causeStack = OB.stack.slice(0, 2e3)), (0, jB.kq)(iO(BB, OB), lB)
    }
    let pO = zO;

    function qO(BB) {
      const OB = pO;
      return pO = BB, OB
    }
    let ZO = () => {};

    function NO(BB) {
      const OB = ZO;
      return ZO = BB, OB
    }
    let RO = "unpicked",
      WO = !1;

    function AO(BB) {
      RO = BB
    }

    function VO(BB) {
      WO = BB
    }
    const SO = {
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
        viewUnshown: null,
        mainStall: null,
        staleBuild: "wasm_load",
        disconnect: "disconnect",
        linkCensus: "wasm_load",
        linksReadAfterView: "wasm_load"
      },
      nO = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        viewUnshown: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      UO = new Set(["unstreamedLoad"]),
      fO = new Set(["linkCensus", "linksReadAfterView"]);
    let kO = !1;
    const dO = 20,
      KO = new Map;
    let uO = 0,
      mO = 0;
    const IO = new Set,
      FO = new Set;

    function iO(BB, OB) {
      const GB = Object.assign(new Error(`${BB.code}: ${BB.message}`), {
        name: "WasmClientCrash",
        cause: null !== OB && void 0 !== OB ? OB : void 0
      });
      return OB instanceof Error && OB.stack && (GB.stack = OB.stack), GB
    }

    function LO(BB) {
      var OB, YB;
      const {
        kind: DB,
        code: QB,
        site: oB,
        fatal: jB,
        message: yB,
        error: JB
      } = BB, MB = !1 !== BB.toTransport && !UO.has(DB), PB = !jB && MB && !fO.has(DB), zB = {
        kind: DB,
        code: QB,
        site: oB,
        fatal: jB,
        message: yB,
        details: null !== (OB = BB.details) && void 0 !== OB ? OB : {}
      }, lB = `${QB}@${oB}${void 0===BB.instance?"":`#${BB.instance}`}${jB?"!":""}`, pB = (null !== (YB = KO.get(lB)) && void 0 !== YB ? YB : 0) + 1;
      if (KO.set(lB, pB), void 0 !== BB.countAs && 1 === pB && XO(BB.countAs), pB > 1 ? 0 === (pB & pB - 1) && EO((() => {
          console.warn(`${hB} ${QB} at ${oB} reported ${pB} times`)
        })) : PB && uO >= dO ? EO((() => {
          console.warn(`${hB} ${DB} ${QB} at ${oB}: ${yB} (not sent: the session's ${dO} went)`, zB.details, null !== JB && void 0 !== JB ? JB : "")
        })) : (PB && uO++, function(BB, OB, YB, DB) {
          var QB, oB;
          const {
            kind: jB,
            code: yB,
            site: JB,
            fatal: MB,
            message: PB,
            details: zB
          } = BB;
          EO((() => {
            (MB ? console.error : console.warn)(`${hB} ${jB} ${yB} at ${JB}: ${PB}`, zB, null !== OB && void 0 !== OB ? OB : "")
          }));
          const lB = nO[jB],
            pB = null !== (QB = null !== (oB = SO[jB]) && void 0 !== oB ? oB : lB) && void 0 !== QB ? QB : null;
          DB || null === pB || gO((async () => {
            const {
              reportCappedWasmFailure: OB,
              reportUncappedWasmFailure: YB,
              reportWasmFailure: DB
            } = await GB.e(212).then((() => GB(34626))), QB = fO.has(jB) ? YB : void 0 === lB ? DB : OB, oB = function(BB) {
              let {
                kind: OB,
                site: GB,
                fatal: YB,
                details: DB
              } = BB;
              if ("crash" !== OB) return;
              return {
                ...DB,
                site: GB,
                fatal: String(YB)
              }
            }(BB);
            void 0 === oB ? QB(pB, PB, yB) : QB(pB, PB, yB, oB)
          }));
          YB && EO((() => {
            pO(BB, OB)
          }))
        }(zB, JB, MB, void 0 !== BB.countAs)), jB) {
        var qB;
        const OB = null !== (qB = BB.screen) && void 0 !== qB ? qB : {
          text: (0, LB.c)(zB, !0),
          reload: !0,
          stillBlocked: null
        };
        EO((() => {
          ZO(OB)
        }))
      }
      return zB
    }

    function gO(BB) {
      cO("counts", (async () => {
        const {
          peekVisitSessionId: OB
        } = await Promise.resolve().then((() => GB(677)));
        null !== OB() && (await BB(), kO = !0)
      }))
    }

    function rO() {
      Promise.all([Promise.resolve().then((() => GB(677))), GB.e(212).then((() => GB(34626)))]).catch((BB => {
        console.warn(`${hB} the counts' modules didn't load ahead`, BB)
      }))
    }

    function XO(BB) {
      IO.has(BB.errorKind) || (IO.add(BB.errorKind), gO((async () => {
        const {
          reportClientError: OB
        } = await Promise.resolve().then((() => GB(1856)));
        OB(BB.errorKind, BB.error, BB.code, !0, void 0, BB.fields)
      })))
    }

    function wO(BB, OB) {
      cO("render_lost", (async () => {
        const [{
          reportClientError: YB
        }, {
          CAPPED_COUNTS_VISIT_CAP: DB
        }] = await Promise.all([Promise.resolve().then((() => GB(1856))), GB.e(212).then((() => GB(34626)))]);
        YB("render_lost", OB, BB, !0, DB)
      }))
    }

    function EO(BB) {
      try {
        BB()
      } catch (OB) {
        try {
          console.warn(`${hB} could not send a report`, OB)
        } catch {}
      }
    }

    function cO(BB, OB) {
      try {
        const GB = OB().catch((OB => {
          console.warn(`${hB} could not send the report to ${BB}`, OB)
        })).finally((() => {
          FO.delete(GB)
        }));
        FO.add(GB)
      } catch (GB) {
        console.warn(`${hB} could not send the report to ${BB}`, GB)
      }
    }
    async function hO(BB) {
      let OB;
      (0, PB.f)();
      const GB = new Promise((GB => {
        OB = setTimeout(GB, BB)
      }));
      await Promise.race([aO(), GB]), clearTimeout(OB)
    }
    async function aO() {
      if (await Promise.allSettled([...FO]), kO) try {
        const {
          flushClientAnalyticsEvents: BB
        } = await Promise.resolve().then((() => GB(1535)));
        await BB()
      } catch (BB) {
        console.warn(`${hB} could not send the counts`, BB)
      }
    }
    async function eO() {
      for (; FO.size > 0;) await Promise.allSettled([...FO])
    }

    function TO() {
      KO.clear(), uO = 0, kO = !1, MO = 0, PO.clear(), mO = 0, IO.clear(), (0, lB.r)()
    }

    function bO(BB) {
      const OB = "object" === typeof BB && null !== BB ? BB.type : BB;
      return "string" !== typeof OB ? "sky not named" : `sky ${JSON.stringify(Array.from(OB).slice(0,yO).join(""))}`
    }

    function CO(BB, OB, GB, YB) {
      mO += OB;
      for (const {
          code: jB,
          detail: yB
        }
        of BB) {
        var DB, QB, oB;
        const BB = (0, zB.$d)(jB),
          OB = (0, lB.d)(jB, yB),
          JB = null === YB || void 0 === YB ? void 0 : YB(jB, yB),
          MB = void 0 !== (null === OB || void 0 === OB ? void 0 : OB.gpuDetails),
          PB = MB ? null === (DB = (0, WB.B)()) || void 0 === DB ? void 0 : DB.renderer : void 0,
          qB = MB ? ` ${(0,lB.m)()}` : "",
          ZB = Array.from([PB && `gpu ${(0,pB.c)(PB)}`, JB].filter(Boolean).join("; ")).slice(0, jO).join(""),
          NB = `core error ${BB}${null!==(QB=null===OB||void 0===OB?void 0:OB.words)&&void 0!==QB?QB:""}${qB}${ZB?`: ${ZB}`:""}`,
          RB = {
            errorCode: String(jB),
            detail: String(yB),
            droppedBefore: String(mO),
            wasmBuild: GB.wasm,
            clientVersion: GB.client,
            ...null === OB || void 0 === OB ? void 0 : OB.gpuDetails,
            ...vO(jB, yB)
          };
        null !== OB && (0, lB.o)(OB) ? EO((() => {
          console.warn(`${hB} coreError CORE-${BB}: ${NB} (not sent: the session's render warnings of its kind went)`, RB)
        })) : HO(jB) ? EO((() => {
          console.warn(`${hB} coreError CORE-${BB}: ${NB} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, RB)
        })) : LO({
          kind: xO(jB, yB),
          code: `CORE-${BB}`,
          site: aB,
          fatal: !1,
          message: NB,
          details: RB,
          instance: null !== (oB = null === OB || void 0 === OB ? void 0 : OB.instance) && void 0 !== oB ? oB : sO(jB, yB)
        })
      }
    }

    function HO(BB) {
      if (BB !== zB.I.AudioUnknownSound && BB !== zB.I.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: OB,
        lobbyName: GB
      } = (0, oB.c)();
      return null !== OB && (!!(0, YB.l)(OB) || BB === zB.I.AudioUnknownSound && (0, DB.k)(OB, GB))
    }

    function vO(BB, OB) {
      if (BB !== zB.I.RenderDeviceLost) return;
      const GB = OB >>> zB.Q.LINKS_IN_FLIGHT_SHIFT & zB.Q.LINKS_IN_FLIGHT_MAX,
        YB = OB >>> zB.Q.OLDEST_LINK_SHIFT & zB.Q.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(GB),
        oldestLinkMs: String(YB * zB.Q.OLDEST_LINK_UNIT_MS)
      }
    }

    function sO(BB, OB) {
      return BB === zB.I.RenderDeviceLost && 0 !== (OB & zB.Q.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function xO(BB, OB) {
      return BB === zB.I.JobsHeapGaveUp ? "meshHeap" : (0, lB.k)(BB, OB) ? "linksReadAfterView" : (0, lB.h)(BB, OB) ? "linkCensus" : "coreError"
    }

    function tO(BB) {
      return (0, XB.k)(BB instanceof wB.e ? BB.trap : BB, uB.B, uB.bb)
    }

    function BG(BB, OB, GB) {
      return GG(BB, OB, GB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function OG(BB, OB, GB) {
      return GG(BB, OB, GB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function GG(BB, OB, GB, YB, DB) {
      let {
        memoryDetails: QB = {},
        memoryStep: oB
      } = YB;
      const {
        code: jB,
        details: yB,
        message: JB
      } = (0, nB.I)(BB, OB), MB = [];
      Object.assign(yB, (0, EB.d)(BB.error)), null !== GB && (yB.trapKind = GB.kind, null !== GB.panic && (yB.panic = (0, XB.h)(GB.panic)), GB.refusedBytes > 0 && (yB.refusedAllocation = String(GB.refusedBytes)), MB.push((0, XB.n)(GB.kind, GB.refusedBytes))), void 0 !== oB && MB.push(`memory=${oB}`);
      const PB = BB.error instanceof YG;
      return PB && (0, gB.z)(), LO({
        kind: "crash",
        code: jB,
        site: BB.site,
        fatal: DB,
        message: [...MB, JB].join("; "),
        details: {
          ...yB,
          ...QB,
          ...void 0 === oB ? {} : {
            memoryStep: oB
          }
        },
        error: BB.error,
        screen: PB ? QG("graphicsLost") : void 0
      })
    }
    class YG extends Error {}

    function DG(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return "download" !== BB && (0, gB.z)(), LO({
        kind: "unsupported",
        code: OB,
        site: eB,
        fatal: !0,
        message: GB,
        details: {
          ...YB,
          cause: BB,
          status: OB
        },
        screen: QG(BB)
      })
    }

    function QG(BB) {
      const OB = (0, QB.x)(RB.siteUsed),
        GB = (0, LB.q)(BB, OB),
        YB = "noContext" === BB || "graphicsLost" === BB ? (0, LB.l)(BB, OB) : null;
      return {
        text: GB,
        reload: "general:tryAgain" === GB.confirm,
        stillBlocked: YB
      }
    }

    function oG(BB, OB, GB) {
      return LO({
        kind: "recovered",
        code: "reprobed" === BB ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: eB,
        fatal: !1,
        message: GB,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: OB,
          step: BB
        }
      })
    }
    const jG = 9;

    function yG(BB) {
      const OB = "recovered" === BB.outcome ? "recovered" : "gave_up",
        GB = "load" === BB.step ? `wasm_load_${OB}${BB.oom?"_oom":""}` : `no_context_${OB}`;
      return "recovered" === BB.outcome ? `${GB}_t${Math.min(BB.tries,jG)}` : "load" === BB.step ? `${GB}_${BB.stage}` : GB
    }

    function JG(BB) {
      const {
        step: OB,
        outcome: GB,
        tries: YB,
        detail: DB,
        details: QB = {}
      } = BB, oB = "load" === BB.step ? {
        stage: BB.stage,
        ...BB.oom ? {
          oom: "true"
        } : {}
      } : {};
      return LO({
        kind: "recovered",
        code: yG(BB),
        site: eB,
        fatal: !1,
        message: DB,
        details: {
          ...QB,
          step: OB,
          outcome: GB,
          tries: String(YB),
          ...oB
        }
      })
    }

    function MG(BB) {
      return LO({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: QO,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: BB.join(",")
        }
      })
    }
    const PG = "reload=wasm";

    function zG(BB, OB, GB) {
      return LO({
        kind: "unsupported",
        code: OB,
        site: eB,
        fatal: !1,
        message: [PG, GB].join("; "),
        details: {
          cause: BB,
          status: OB,
          fallback: "wasmReload"
        }
      })
    }

    function lG() {
      const {
        code: BB,
        message: OB
      } = rB.b;
      return LO({
        kind: "unstreamedLoad",
        code: BB,
        site: eB,
        fatal: !1,
        message: OB
      })
    }
    class pG extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function qG(BB) {
      return BB instanceof kB.l ? 0 === BB.code ? "JOIN-matchmake" : `JOIN-${BB.code}` : BB instanceof kB.d ? 0 === BB.code ? `JOIN-${BB.stage}` : `JOIN-${BB.stage}-${BB.code}` : BB instanceof fB.e ? "JOIN-gameCode" : BB instanceof pG ? "JOIN-turnstilePage" : BB instanceof kB.u ? "JOIN-trafficCheck" : BB instanceof VB.d ? "JOIN-timeout" : "JOIN-network"
    }

    function ZG(BB, OB) {
      const GB = (0, EB.l)(BB),
        YB = {
          wasmBuild: OB.wasm,
          clientVersion: OB.client
        },
        DB = BB instanceof pG ? {
          text: (0, LB.m)(),
          reload: !1,
          stillBlocked: null
        } : void 0,
        QB = (0, dB.f)(BB),
        oB = "expected" !== QB;
      return LO({
        kind: "join",
        code: qG(BB),
        site: TB,
        fatal: !0,
        message: GB,
        details: YB,
        error: BB,
        screen: DB,
        toTransport: oB,
        instance: QB
      })
    }

    function NG(BB, OB, GB) {
      var YB;
      const DB = (0, dB.f)(BB),
        QB = {
          cause: (BB instanceof kB.d || BB instanceof kB.l) && null !== (YB = BB.serverText) && void 0 !== YB ? YB : "",
          sinceJoinStart: (0, AB.c)(GB.sinceJoinStartMs),
          game: GB.game,
          ...(0, AB.l)(),
          wasmBuild: OB.wasm,
          clientVersion: OB.client
        };
      return LO({
        kind: "pageJoin",
        code: qG(BB),
        site: TB,
        fatal: !1,
        message: (0, EB.l)(BB),
        details: QB,
        error: BB,
        toTransport: "unrecognised" === DB,
        instance: DB
      })
    }
    const RG = {
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

    function WG(BB, OB) {
      let {
        unused: GB,
        answered: YB,
        heldMs: DB
      } = BB;
      const {
        code: QB,
        message: oB
      } = RG[GB], jB = {
        unused: GB,
        answered: String(YB),
        heldMs: String(DB),
        wasmBuild: OB.wasm,
        clientVersion: OB.client
      };
      return LO({
        kind: "seat",
        code: QB,
        site: TB,
        fatal: !1,
        message: oB,
        details: jB
      })
    }

    function AG(BB, OB, GB) {
      var YB;
      let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (YB = BB.name) && void 0 !== YB ? YB : String(BB.code);
      const QB = {
          closeCode: String(BB.code),
          recognised: String(null !== BB.name),
          closeReason: GB.closeReason,
          sinceJoined: (0, AB.c)(GB.sinceJoinedMs),
          game: GB.game,
          ...(0, AB.l)(),
          wasmBuild: OB.wasm,
          clientVersion: OB.client
        },
        oB = null === BB.name && !(0, AB.f)(BB.code);
      return LO({
        kind: "disconnect",
        code: DB,
        site: bB,
        fatal: !1,
        message: "Left room",
        details: QB,
        toTransport: oB
      })
    }

    function VG(BB, OB) {
      const GB = {
        ...(0, qB.j)(BB),
        wasmBuild: OB.wasm,
        clientVersion: OB.client
      };
      return LO({
        kind: "disconnect",
        code: `reconnect-${BB.reason}`,
        site: TB,
        fatal: !1,
        message: "Reconnect failed",
        details: GB
      })
    }

    function SG(BB) {
      return BB.error instanceof mB.c ? `MODEL-${BB.error.status}` : BB.error instanceof IB.i ? "MODEL-ring" : "MODEL-network"
    }

    function nG(BB, OB) {
      const GB = SG(BB),
        YB = `model file ${BB.file} ${BB.startup?"(startup) ":""}could not load`,
        DB = {
          file: String(BB.file),
          url: BB.url,
          wasmBuild: OB.wasm,
          clientVersion: OB.client
        };
      return LO({
        kind: BB.startup ? "model" : "modelLate",
        code: GB,
        site: CB,
        fatal: BB.startup,
        message: YB,
        details: DB,
        error: BB.error
      })
    }

    function UG(BB, OB) {
      const GB = {
        wasmBuild: OB.wasm,
        clientVersion: OB.client
      };
      return LO({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: HB,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: GB,
        error: BB
      })
    }

    function fG(BB, OB, GB) {
      const YB = {
        delayMs: String(OB),
        wasmBuild: GB.wasm,
        clientVersion: GB.client
      };
      BB instanceof mB.c && (YB.status = String(BB.status));
      return LO({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: HB,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: YB,
        error: BB
      })
    }

    function kG(BB, OB) {
      const GB = {
        wasmBuild: OB.wasm,
        clientVersion: OB.client
      };
      return LO({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: nB.C,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: GB,
        error: BB
      })
    }

    function dG(BB, OB) {
      const GB = {
        wasmBuild: OB.wasm,
        clientVersion: OB.client
      };
      return LO({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: OO,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: GB,
        error: BB
      })
    }

    function KG(BB, OB, GB, YB) {
      const DB = {
        wasmBuild: YB.wasm,
        clientVersion: YB.client
      };
      return LO({
        kind: "texturePackKeptOut",
        code: (0, MB.g)("wasm", BB, OB),
        site: GO,
        fatal: !1,
        message: OB.detail,
        details: DB,
        error: GB
      })
    }

    function uG(BB, OB) {
      const {
        frames: GB,
        acks: YB,
        mask: DB,
        outcome: QB
      } = BB, oB = {
        frames: String(GB),
        acks: String(YB),
        mask: String(DB),
        outcome: null !== QB && void 0 !== QB ? QB : "resynced",
        wasmBuild: OB.wasm,
        clientVersion: OB.client
      };
      return LO({
        kind: "recovered",
        code: "rejoined" === QB ? "CORE-eventOverflowRejoin" : "failed" === QB ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: tB,
        fatal: !1,
        message: `the event buffer refused records in ${GB} frames`,
        details: oB
      })
    }

    function mG(BB, OB, GB) {
      return LO({
        kind: "recovered",
        code: "CORE-workerLost",
        site: BB,
        fatal: !1,
        message: `a ${BB} worker was lost`,
        details: {
          reason: OB,
          wasmBuild: GB.wasm,
          clientVersion: GB.client
        }
      })
    }

    function IG(BB, OB, GB, YB) {
      const DB = {
          reason: BB,
          pageBuild: YB.build,
          pageAgeMin: String(Math.floor(YB.ageMs / 6e4)),
          wasmBuild: GB.wasm,
          clientVersion: GB.client
        },
        QB = OB ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return LO({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: nB.C,
        fatal: !1,
        message: QB,
        details: DB
      })
    }

    function FG(BB, OB, GB) {
      const YB = {
        wasmBuild: GB.wasm,
        clientVersion: GB.client
      };
      return LO({
        kind: "recovered",
        code: BB,
        site: nB.l,
        fatal: !1,
        message: OB,
        details: YB
      })
    }

    function iG(BB, OB) {
      const GB = {
        lastReason: BB,
        wasmBuild: OB.wasm,
        clientVersion: OB.client
      };
      return LO({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: nB.C,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: GB
      })
    }

    function LG(BB, OB, GB) {
      return LO({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: nB.k,
        fatal: !1,
        message: `${(0,KB.A)(BB)}: the session shed load`,
        details: {
          cause: BB,
          ...OB,
          wasmBuild: GB.wasm,
          clientVersion: GB.client
        }
      })
    }

    function gG(BB, OB, GB, YB) {
      var DB, QB;
      return {
        game: BB,
        cause: OB,
        census: null === GB ? "none" : JSON.stringify(GB),
        gpu: null !== (DB = null === (QB = (0, WB.B)()) || void 0 === QB ? void 0 : QB.renderer) && void 0 !== DB ? DB : "",
        browser: (0, lB.m)(),
        wasmBuild: YB.wasm,
        clientVersion: YB.client
      }
    }

    function rG(BB, OB, GB, YB) {
      const DB = (0, lB.n)(),
        QB = {
          ...gG(BB, OB, GB, YB),
          renderWarned: String(DB)
        },
        oB = `first view drew no whole terrain in ${FB.d/1e3} s, ${OB}${DB?", render warned":""}`;
      return LO({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: YO,
        fatal: !1,
        message: oB,
        details: QB
      })
    }

    function XG(BB, OB, GB, YB, DB) {
      const QB = {
          ...gG(BB, GB.cause, YB, DB),
          waitedMs: String(Math.round(OB.waitedMs)),
          drawnMs: String(Math.round(OB.drawnMs)),
          frames: String(OB.frames),
          renderPending: String(GB.renderPending),
          viewWait: null === GB.wait ? "none" : GB.wait.slice(0, 6).join(",")
        },
        oB = (0, UB.f)(OB, GB);
      return LO({
        kind: "viewUnshown",
        code: "CORE-firstViewUnshown",
        site: YO,
        fatal: !1,
        message: oB,
        details: QB
      })
    }

    function wG(BB, OB, GB, YB, DB) {
      const QB = (0, ZB.d)(),
        oB = (0, ZB.b)(BB, OB, GB, YB, QB),
        jB = {
          gpuModel: QB,
          wasmBuild: DB.wasm,
          clientVersion: DB.client
        };
      return LO({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: DO,
        fatal: !1,
        message: oB,
        details: jB
      })
    }

    function EG(BB, OB, GB) {
      return LO({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: BB,
        fatal: !1,
        message: `a ${BB} worker did not start`,
        details: {
          waitedMs: String(Math.round(OB)),
          wasmBuild: GB.wasm,
          clientVersion: GB.client
        }
      })
    }

    function cG(BB, OB, GB) {
      return LO({
        kind: "recovered",
        code: "CORE-replayFault",
        site: BB,
        fatal: !1,
        message: `the replay's ${BB} failed`,
        details: {
          wasmBuild: GB.wasm,
          clientVersion: GB.client
        },
        error: OB
      })
    }

    function hG(BB, OB) {
      const GB = {
          wasmBuild: OB.wasm,
          clientVersion: OB.client
        },
        YB = BB instanceof Error ? BB.message : String(BB);
      return LO({
        kind: "recovered",
        code: "CORE-cameraDirector",
        site: oO,
        fatal: !1,
        message: "the scripted camera's director threw",
        details: GB,
        instance: YB,
        error: BB
      })
    }
    const aG = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function eG(BB) {
      if (0 === BB) return "none";
      const OB = [60, 600, 3600].find((OB => BB < OB));
      return void 0 === OB ? "ge3600" : `lt${OB}`
    }

    function TG(BB, OB) {
      return null === BB ? "unbound" : (0, NB.i)(OB - BB)
    }

    function bG(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (BB & zB.Q.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (BB & zB.Q.LINKS_RUNNING) ? "links running" : "", `frames ${(0,pB.c)(eG(BB&zB.Q.FRAMES))}`, `up ${(0,pB.c)(TG(OB,GB))}`].filter(Boolean).join(", ")
    }

    function CG(BB, OB, GB) {
      const YB = "lost" === OB && void 0 !== GB ? ` (${GB})` : "";
      return `the ${BB} ${aG[OB]}${YB}`
    }
    const HG = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function vG(BB, OB, GB, YB) {
      var DB;
      let {
        restoreLost: QB = !1,
        adapterRemembered: oB = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, jB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const yB = null === GB || void 0 === GB ? void 0 : GB.message,
        JB = "pipeline_failed" === OB ? OB : GB instanceof SB.d ? "timeout" : (0, NB.q)("frames_refused" === OB, "string" === typeof yB ? yB : ""),
        MB = null === YB.boundAtMs ? "unbound" : `up${(0,NB.g)(jB-YB.boundAtMs)}`,
        PB = null === YB.adapter ? "no adapter" : (0, NB.n)(YB.adapter),
        zB = `${!0===YB.indirectHangs?" ih":""}${!0===YB.restoresSkipped?" nr":""}${QB?" rl":""}${oB?" ar":""}`,
        lB = `${JB} ${(0,SB.f)()?"hidden":"visible"} ${MB}${zB} ${PB}`;
      if ("webgpu" !== BB || "lost" !== OB && "frames_refused" !== OB) return {
        detail: lB,
        count: void 0
      };
      return {
        detail: lB,
        count: {
          errorKind: "render_lost",
          error: new Error(lB),
          code: (0, NB.u)(JB, null !== (DB = YB.boundAtMs) && void 0 !== DB ? DB : jB, jB).code,
          fields: {
            renderBackend: cB.e.webgpu
          }
        }
      }
    }

    function sG(BB, OB, GB) {
      const {
        count: YB
      } = vG("webgpu", BB, OB, GB);
      void 0 !== YB && XO(YB)
    }
    const xG = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function tG(BB) {
      var OB;
      return null !== (OB = BB instanceof Error ? BB.reason : void 0) && void 0 !== OB ? OB : ""
    }

    function BY(BB, OB, YB) {
      var DB, QB, oB, jB, JB;
      let {
        from: MB,
        cause: PB = "lost",
        restoreLost: zB = !1,
        adapterRemembered: qB = !1,
        error: ZB,
        context: WB = HG,
        session: AB = xG
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, VB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: SB,
        count: nB
      } = vG(BB, PB, ZB, WB, {
        restoreLost: zB,
        adapterRemembered: qB
      }, VB), UB = {
        reloadFrom: null !== MB && void 0 !== MB ? MB : "",
        losses: String(OB),
        cause: PB,
        detail: SB,
        vendor: null !== (DB = null === (QB = WB.adapter) || void 0 === QB ? void 0 : QB.vendor) && void 0 !== DB ? DB : "",
        architecture: null !== (oB = null === (jB = WB.adapter) || void 0 === jB ? void 0 : jB.architecture) && void 0 !== oB ? oB : "",
        indirectHangs: String(WB.indirectHangs),
        restoresSkipped: String(WB.restoresSkipped),
        restoreLost: String(zB),
        adapterRemembered: String(qB),
        lossReason: tG(ZB),
        samples: String(AB.samples),
        sunShadows: String(AB.sunShadows),
        renderDistance: String(AB.renderDistance),
        gpuFamily: null !== (JB = (0, yB.c)()) && void 0 !== JB ? JB : "",
        browser: (0, lB.m)(),
        siteUsed: RB.siteUsed,
        wasmBuild: YB.wasm,
        clientVersion: YB.client
      }, fB = "webgpu" !== BB && void 0 !== MB ? function(BB, OB, GB, YB) {
        return `: ${BB}, ${OB?"restore lost":"not restored"}, up ${(0,pB.c)(TG(GB,YB))}`
      }(MB, zB, WB.boundAtMs, VB) : "", kB = `${CG(BB,PB)}${fB}`, dB = LO({
        kind: "recovered",
        code: "CORE-renderLost",
        site: sB,
        fatal: !1,
        message: kB,
        details: UB,
        error: ZB,
        countAs: nB
      });
      return cO("ga", (async () => {
        const {
          logError: OB
        } = await Promise.resolve().then((() => GB(3262))), YB = `${NB.e["webgpu"===BB?"WebGPU":"WebGL2"]}\n Error: ${SB}`;
        OB("warning", YB), OB("error", YB)
      })), dB
    }

    function OY(BB, OB) {
      var GB, YB;
      const DB = null === BB.name ? "TEXTURE-sources" : null === BB.url ? "TEXTURE-nourl" : BB.error instanceof iB.e ? `TEXTURE-${BB.error.status}` : "TEXTURE-network",
        QB = null === BB.name ? "terrain textures could not load" : `terrain texture ${BB.name} could not load`,
        oB = {
          texture: null !== (GB = BB.name) && void 0 !== GB ? GB : "",
          url: null !== (YB = BB.url) && void 0 !== YB ? YB : "",
          wasmBuild: OB.wasm,
          clientVersion: OB.client
        };
      return LO({
        kind: "terrainTexture",
        code: DB,
        site: nB.z,
        fatal: !1,
        message: QB,
        details: oB,
        error: BB.error
      })
    }
    const GY = {
      previewAnimations: {
        site: xB,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: BO,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function YY(BB, OB, GB, YB) {
      const {
        site: DB,
        prefix: QB,
        name: oB
      } = GY[BB], {
        stage: jB,
        error: yB
      } = GB;
      return LO({
        kind: BB,
        code: "decode" === jB ? null === yB ? `${QB}-decode` : `${QB}-trap` : yB instanceof mB.c ? `${QB}-${yB.status}` : `${QB}-network`,
        site: DB,
        fatal: !1,
        message: "decode" === jB ? `${oB} did not decode` : `${oB} could not load`,
        details: {
          url: OB,
          wasmBuild: YB.wasm,
          clientVersion: YB.client
        },
        error: yB
      })
    }
    const DY = "staleBuild";

    function QY(BB, OB, GB) {
      const YB = {
          failedSite: BB.site,
          url: BB.url,
          from: BB.from,
          sameBuild: String(BB.from === OB),
          reloadMs: String(Math.max(0, Date.now() - BB.at)),
          wasmBuild: GB.wasm,
          clientVersion: GB.client
        },
        DB = `reloaded into a newer build after ${BB.site} failed to load: ${BB.error}`;
      return LO({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: DY,
        fatal: !1,
        message: DB,
        details: YB
      })
    }
  },
  41820: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      d: () => DB,
      f: () => oB,
      j: () => yB
    });
    var YB = GB(5287);
    const DB = 3e4,
      QB = 900;

    function oB(BB, OB) {
      const GB = null === BB ? 0 : OB - BB;
      return GB <= QB ? GB : 0
    }
    class jB {
      constructor(BB) {
        this.jP = BB, this.waitedMs = 0, this.lastMs = null
      }
      frame(BB, OB) {
        return !!OB || (this.waitedMs += oB(this.lastMs, BB), this.lastMs = BB, !(this.waitedMs < DB) && (this.jP(), !0))
      }
    }

    function yB(BB, OB) {
      return 0 === (BB & YB.bb.ChunkRequested) ? "no_chunk_request" : 0 === (BB & YB.bb.ChunkStored) ? "chunk_not_stored" : 0 === (BB & YB.bb.MeshLanded) ? "not_meshed" : null === OB ? "no_frame_drawn" : 0 === OB.terrainParts ? "no_terrain_parts" : OB.terrainCompiling > 0 ? "terrain_compiling" : OB.terrainOpaque + OB.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  41817: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB,
      f: () => jB
    });
    var YB = GB(41820);

    function DB(BB) {
      if (null === BB) return "none";
      const [OB, GB, YB, DB] = BB, QB = [
        ["link", OB],
        ["terrain", GB],
        ["sJ", YB],
        ["other", DB]
      ];
      let oB = "none",
        jB = 0;
      for (const [yB, JB] of QB) JB > jB && (oB = yB, jB = JB);
      return oB
    }
    class QB {
      constructor() {
        this.chunkAtMs = null, this.lastFrameMs = null, this.drawnMs = 0, this.frames = 0, this.over = !1
      }
      playerChunk(BB) {
        null !== this.chunkAtMs || this.over || (this.chunkAtMs = BB)
      }
      frame(BB) {
        null === this.chunkAtMs || this.over || (this.drawnMs += (0, YB.f)(this.lastFrameMs, BB), this.lastFrameMs = BB, this.frames++)
      }
      shown() {
        this.over = !0
      }
      end(BB, OB) {
        return null === this.chunkAtMs || this.over ? null : (this.over = !0, {
          end: BB,
          waitedMs: Math.max(OB - this.chunkAtMs, 0),
          drawnMs: this.drawnMs,
          frames: this.frames
        })
      }
    }

    function oB(BB) {
      return BB < 5e3 ? "brief" : BB < 15e3 ? "short" : BB < 6e4 ? "long" : "very_long"
    }

    function jB(BB, OB) {
      var GB, YB;
      const QB = [OB.bound ? "bound" : "unbound", ...OB.preload ? ["preload"] : [], OB.startupLoaded ? "startup in" : "startup out", OB.renderPending > 0 ? "render pending" : "render resolved", `lacked ${DB(OB.wait)}${(null!==(GB=null===(YB=OB.wait)||void 0===YB?void 0:YB[4])&&void 0!==GB?GB:0)>0?" gapped":""}`],
        jB = 0 === BB.frames ? "no frames" : `drew ${oB(BB.drawnMs)}`;
      return `first view not shown after the player chunk, ${OB.cause}, ${QB.join(", ")}, waited ${oB(BB.waitedMs)}, ${jB}, ended ${BB.end}`
    }
  },
  41593: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      h: () => NB,
      j: () => qB,
      m: () => ZB,
      p: () => zB,
      r: () => lB,
      s: () => MB,
      u: () => PB,
      v: () => pB
    });
    class YB extends Error {
      constructor(BB) {
        super(`the join's code did not load: ${BB instanceof Error?BB.message:String(BB)}`, {
          cause: BB
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === BB || void 0 === BB ? void 0 : BB.request
      }
    }
    let DB = null,
      QB = null,
      oB = null;
    const jB = [];
    let yB = null;

    function JB(BB, OB) {
      try {
        BB(OB)
      } catch (GB) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", GB)
      }
    }

    function MB() {
      return yB
    }

    function PB(BB) {
      jB.push(BB), null !== yB && JB(BB, yB)
    }

    function zB(BB) {
      return DB ??= Promise.all([GB.e(84), GB.e(111), GB.e(86), GB.e(248), GB.e(89), GB.e(220), GB.e(170), GB.e(249), GB.e(109), GB.e(268), GB.e(238), GB.e(300), GB.e(49), GB.e(217), GB.e(233), GB.e(216), GB.e(207), GB.e(208), GB.e(101), GB.e(134), GB.e(274), GB.e(68)]).then((() => GB(45727))).then((OB => {
        OB.loadAudio(BB), yB = OB;
        for (const BB of jB) JB(BB, OB);
        return OB
      })).catch((BB => {
        throw DB = null, BB
      })), DB
    }
    async function lB(BB, OB) {
      try {
        const GB = await zB(BB);
        await GB.loadClientGame(OB)
      } catch (GB) {
        throw new YB(GB)
      }
    }

    function pB(BB, OB) {
      QB = {
        running: BB,
        shell: OB
      }
    }

    function qB() {
      return oB
    }
    async function ZB(BB) {
      const OB = QB;
      if ((null === OB || void 0 === OB ? void 0 : OB.running) !== BB) throw new Error("the core's session has ended");
      const GB = await zB(OB.shell.audio).catch((BB => {
        throw new YB(BB)
      }));
      if (null !== oB) return oB;
      if (QB !== OB || BB.isStopped) throw new Error("the core stopped while the game code loaded");
      if (oB = GB.startGameHost(BB, OB.shell), null === oB) throw new Error("the core's shared tables didn't read, so the game can't start");
      return oB
    }

    function NB() {
      null !== oB && (null !== yB ? yB.endGameHost(oB) : oB.closeGame()), oB = null, QB = null
    }
  },
  41736: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    const YB = {
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
  41692: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB,
      f: () => QB,
      g: () => oB,
      h: () => DB,
      l: () => lB,
      m: () => MB,
      o: () => yB,
      s: () => zB,
      u: () => PB,
      v: () => jB
    });
    var YB = GB(1905);
    const DB = new Uint8Array([12]),
      QB = 2e3,
      oB = 257;

    function jB(BB) {
      const OB = new Uint8Array(4);
      return new DataView(OB.buffer).setUint32(0, BB, !0), OB
    }
    class yB extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class JB extends Error {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(BB), this.stage = OB, this.code = GB, this.serverText = YB, this.socketOpened = DB, this.name = "JoinError"
      }
    }
    class MB extends Error {
      constructor(BB) {
        super(BB), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class PB extends Error {
      constructor(BB) {
        super((0, YB.e)(BB), {
          cause: BB
        }), this.name = "TrafficCheckError"
      }
    }
    class zB extends Error {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(BB, {
          cause: GB
        }), this.networkLost = OB, this.httpStatus = YB, this.name = "SeatRequestError"
      }
    }
    class lB extends Error {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(BB), this.code = OB, this.serverText = GB, this.name = "MatchmakeError"
      }
    }
  },
  41700: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => lB,
      f: () => zB,
      j: () => pB
    });
    var YB = GB(2898),
      DB = GB(3355),
      QB = GB(39769),
      oB = GB(37160),
      jB = GB(39772),
      yB = GB(41692),
      JB = GB(41705);
    const MB = "seat reservation expired.",
      PB = "early_leave";

    function zB(BB) {
      if (BB instanceof oB.d) return "expected";
      if (BB instanceof yB.s) return BB.networkLost ? "expected" : "unrecognised";
      if (BB instanceof yB.d) {
        if ("closed" === BB.stage && (0 === BB.code || (0, DB.f)(BB.code))) return "expected";
        if ("roomError" === BB.stage && (BB.serverText === MB || BB.serverText === PB)) return "expected"
      }
      return BB instanceof yB.d || BB instanceof yB.l ? null === (0, jB.i)(BB.code).name ? "unrecognised" : "known" : (0, YB.g)(BB) ? "expected" : BB instanceof yB.u || BB instanceof JB.d ? "known" : "unrecognised"
    }

    function lB(BB) {
      return BB instanceof oB.d ? "timedOut" : "expected" !== zB(BB) || (0, YB.g)(BB) || BB instanceof yB.d && 1001 === BB.code ? void 0 : "failed"
    }

    function pB(BB) {
      return BB instanceof yB.d && "attach" !== BB.stage ? (0, QB.c)(BB, "closed" !== BB.stage || BB.socketOpened ? "socket" : "socket_unopened") : BB instanceof yB.s ? {
        at: "seat_lost",
        code: BB.httpStatus
      } : BB instanceof yB.l || BB instanceof oB.d ? (0, QB.c)(BB, BB instanceof oB.d ? BB.leg : "seat") : void 0
    }
  },
  41827: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => yB,
      e: () => JB,
      f: () => lB,
      i: () => PB
    });
    var YB = GB(3210),
      DB = GB(5281),
      QB = GB(41834),
      oB = GB(41842),
      jB = GB(36876);
    const yB = 395,
      JB = 2147483648,
      MB = new Uint8Array(0);
    class PB extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class zB extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class lB {
      constructor(BB, OB, GB) {
        var YB, DB, oB, jB;
        let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = BB, this.build = OB, this.onFailure = GB, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.GP = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (YB = yB.fetchFile) && void 0 !== YB ? YB : BB => (0, QB.h)(BB), this.onWritten = null !== (DB = yB.onWritten) && void 0 !== DB ? DB : null, this.onTaken = null !== (oB = yB.onTaken) && void 0 !== oB ? oB : null, this.onPackFileFailed = null !== (jB = yB.onPackFileFailed) && void 0 !== jB ? jB : null, this.startupLeft = new Set(BB.startup);
        for (const QB of BB.startup) this.request(QB)
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
        const OB = this.pending.get(BB);
        if (!0 === (null === OB || void 0 === OB ? void 0 : OB.ask)) return;
        const GB = this.ZP(BB, !0);
        GB.recheck = void 0 !== OB;
        const YB = this.drawn.get(BB);
        if (void 0 !== YB) return GB.sJ = !0, GB.recheck = !0, void this.fetch(BB, GB, YB);
        this.fetchWanted(BB, GB)
      }
      async refresh() {
        const BB = ++this.refreshes,
          OB = new Set;
        for (const oB of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const BB of oB) 0 === (BB & QB.f) && OB.add(BB);
        const GB = [...OB];
        let YB;
        try {
          YB = await Promise.all(GB.map((BB => this.wanted(BB))))
        } catch {
          return null
        }
        if (BB !== this.refreshes) return null;
        const DB = {
          resent: 0,
          refetched: 0,
          delivered: GB.filter((BB => this.drawn.has(BB))).length
        };
        return GB.forEach(((BB, OB) => {
          const {
            url: GB,
            inPlaceOf: QB
          } = YB[OB], oB = this.pending.get(BB);
          if (void 0 !== oB) {
            if (oB.sJ || void 0 === oB.url) return void(oB.recheck = !0);
            if (oB.url === GB) return;
            DB.refetched++;
            const OB = this.ZP(BB, oB.ask);
            return OB.recheck = oB.recheck, void this.fetch(BB, OB, GB, QB)
          }
          const jB = this.written.get(BB);
          void 0 === jB ? this.drawn.get(BB) !== (null !== GB && void 0 !== GB ? GB : void 0) && (DB.resent++, this.fetch(BB, this.ZP(BB, !1), GB, QB)) : jB.url !== (null !== GB && void 0 !== GB ? GB : "") && (jB.attempt.recheck = !0)
        })), DB
      }
      taken(BB, OB) {
        const GB = new Set,
          YB = new Set;
        for (const DB of Array.from(OB)) 0 === (DB & JB) ? GB.add(DB) : YB.add((DB & ~JB) >>> 0);
        for (const [DB, QB] of this.written) QB.seq > BB || (this.written.delete(DB), GB.has(QB.seq) ? this.refusedFile(DB, QB) : this.takenFile(DB, QB, !QB.empty && !YB.has(QB.seq)))
      }
      takenFile(BB, OB, GB) {
        const {
          attempt: YB
        } = OB;
        if (GB) {
          var DB;
          this.drawn.set(BB, OB.url), this.undrawn.delete(BB), void 0 !== YB.inPlaceOf ? this.refusedPack.set(BB, YB.inPlaceOf) : YB.sJ || this.refusedPack.delete(BB), null === (DB = this.onTaken) || void 0 === DB || DB.call(this, BB, !0);
          const GB = this.pending.get(BB);
          if (!0 === (null === GB || void 0 === GB ? void 0 : GB.sJ) && GB.url !== OB.url) {
            const GB = this.ZP(BB, !0);
            GB.sJ = !0, GB.recheck = !0, this.fetch(BB, GB, OB.url)
          }
        } else {
          var QB;
          this.drawn.has(BB) || this.undrawn.add(BB), null === (QB = this.onTaken) || void 0 === QB || QB.call(this, BB, !1)
        }
        YB.recheck && this.resendIfChanged(BB)
      }
      refusedFile(BB, OB) {
        var GB, YB;
        if (null === (GB = this.onTaken) || void 0 === GB || GB.call(this, BB, !1), this.refusedPack.set(BB, OB.url), this.pending.has(BB)) return void(null === (YB = this.onPackFileFailed) || void 0 === YB || YB.call(this, BB, pB(OB.url)));
        const DB = this.ZP(BB, OB.attempt.ask);
        DB.recheck = OB.attempt.recheck, this.afterRefusal(BB, DB, OB.url)
      }
      async afterRefusal(BB, OB, GB) {
        var YB;
        let DB;
        try {
          DB = await this.wanted(BB)
        } catch (QB) {
          return void(this.pending.get(BB) === OB && this.giveUp(BB, OB, GB, QB))
        }
        this.pending.get(BB) === OB && (DB.inPlaceOf !== GB ? OB.ask || (null !== (YB = DB.url) && void 0 !== YB ? YB : void 0) !== this.drawn.get(BB) ? this.fetch(BB, OB, DB.url, DB.inPlaceOf) : this.pending.delete(BB) : this.fallBack(BB, OB, GB, pB(GB)))
      }
      ZP(BB, OB) {
        const GB = {
          url: void 0,
          ask: OB,
          sJ: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(BB, GB);
        for (let YB = this.ready.length - 1; YB >= 0; YB--) this.ready[YB].file === BB && this.ready.splice(YB, 1);
        return GB
      }
      async wanted(BB) {
        const OB = await this.files.url(BB);
        return null !== OB && this.refusedPack.get(BB) === OB ? {
          url: await this.files.shippedUrl(BB),
          inPlaceOf: OB
        } : {
          url: OB,
          inPlaceOf: void 0
        }
      }
      fetchWanted(BB, OB) {
        const GB = this.files.url(BB);
        GB instanceof Promise ? GB.then((GB => {
          this.fetchFound(BB, OB, GB)
        }), (GB => {
          this.pending.get(BB) === OB && this.giveUp(BB, OB, "", GB)
        })) : this.fetchFound(BB, OB, GB)
      }
      fetchFound(BB, OB, GB) {
        null !== GB && this.refusedPack.get(BB) === GB ? Promise.resolve(this.files.shippedUrl(BB)).then((YB => {
          this.fetch(BB, OB, YB, GB)
        }), (YB => {
          this.pending.get(BB) === OB && this.giveUp(BB, OB, GB, YB)
        })) : this.fetch(BB, OB, GB)
      }
      fetch(BB, OB, GB, YB) {
        this.pending.get(BB) === OB && (OB.url = GB, OB.inPlaceOf = YB, null !== GB ? this.load(BB, OB, GB) : this.buildFile(BB, OB, "", MB))
      }
      load(BB, OB, GB) {
        const YB = this.GP.get(BB);
        (null === YB || void 0 === YB ? void 0 : YB.url) !== GB ? this.fetchFile(GB).then((YB => {
          var DB, QB;
          this.pending.get(BB) === OB && (this.keptTotal += YB.byteLength - (null !== (DB = null === (QB = this.GP.get(BB)) || void 0 === QB ? void 0 : QB.glb.byteLength) && void 0 !== DB ? DB : 0), this.GP.set(BB, {
            url: GB,
            glb: YB
          }), this.buildFile(BB, OB, GB, YB))
        }), (YB => {
          this.pending.get(BB) === OB && this.fallBack(BB, OB, GB, YB)
        })) : this.buildFile(BB, OB, GB, YB.glb)
      }
      buildFile(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const oB = YB.byteLength > 0 && (0, QB.j)(GB) ? (BB | QB.c) >>> 0 : BB;
        this.queueRecord(BB, OB, GB, YB, this.build(oB, YB), DB)
      }
      queueRecord(BB, OB, GB, YB, QB, jB) {
        QB.then((QB => {
          if (this.pending.get(BB) !== OB) return;
          if (DB.r + (0, DB.qe)(QB.byteLength) > DB.Tc) return void this.ringRefused(BB, OB, GB, new PB(`${qB(GB)}'s record is ${QB.byteLength-oB.d} bytes, past the cmd ring's ${DB.Tc}`), jB);
          const yB = {
            file: BB,
            url: GB,
            payload: QB,
            glb: YB,
            attempt: OB
          };
          jB ? this.ready.unshift(yB) : this.ready.push(yB)
        }))
      }
      async fallBack(BB, OB, GB, YB) {
        var DB;
        let QB = null,
          oB = YB;
        try {
          QB = await this.files.shippedUrl(BB)
        } catch (jB) {
          oB = jB
        }
        this.pending.get(BB) === OB && (null !== QB && QB !== GB ? (null === (DB = this.onPackFileFailed) || void 0 === DB || DB.call(this, BB, YB), OB.ask || this.drawn.get(BB) !== QB ? (OB.url = QB, OB.inPlaceOf = GB, this.load(BB, OB, QB)) : this.pending.delete(BB)) : this.giveUp(BB, OB, GB, oB))
      }
      ringRefused(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, QB.j)(GB) ? this.fallBack(BB, OB, GB, YB): this.giveUp(BB, OB, GB, YB, DB)
      }
      giveUp(BB, OB, GB, DB) {
        let QB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: BB,
          url: qB(GB),
          error: DB,
          startup: this.startupLeft.has(BB)
        }), OB.ask || !this.drawn.has(BB) ? (0, YB.T)(DB) ? this.queueRecord(BB, OB, GB, MB, Promise.resolve((0, oB.l)(BB, (0, jB.l)(DB))), QB) : this.buildFile(BB, OB, GB, MB, QB) : this.pending.delete(BB)
      }
      async resendIfChanged(BB) {
        var OB;
        if (0 !== (BB & QB.f)) return;
        let GB;
        try {
          GB = await this.wanted(BB)
        } catch {
          return
        }(null !== (OB = GB.url) && void 0 !== OB ? OB : void 0) === this.drawn.get(BB) || this.pending.has(BB) || this.written.has(BB) || this.fetch(BB, this.ZP(BB, !1), GB.url, GB.inPlaceOf)
      }
      drain(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === BB) return;
        let GB = 0,
          YB = 0;
        for (; YB < this.ready.length && GB < 262144;) {
          const jB = this.ready[YB];
          if (this.written.has(jB.file)) {
            YB++;
            continue
          }
          const MB = this.nextSeq;
          new DataView(jB.payload.buffer, jB.payload.byteOffset, jB.payload.byteLength).setUint32(oB.f, MB, !0);
          const zB = jB.attempt.sJ && jB.glb.byteLength > 0 && this.drawn.get(jB.file) === jB.url;
          if (BB(yB, zB ? 1 : 0, jB.payload)) {
            if (this.nextSeq = MB >= JB - 1 ? 1 : MB + 1, this.ready.splice(YB, 1), GB += jB.payload.byteLength, this.pending.delete(jB.file), this.startupLeft.delete(jB.file), this.written.set(jB.file, {
                seq: MB,
                url: jB.url,
                empty: 0 === jB.glb.byteLength,
                attempt: jB.attempt
              }), jB.glb.byteLength > 0) try {
              var DB;
              null === (DB = this.onWritten) || void 0 === DB || DB.call(this, jB.file, jB.glb)
            } catch (QB) {
              console.warn("ModelFeed: reading the file's images failed", QB)
            }
          } else {
            if (null === OB || 0 === jB.glb.byteLength || OB(jB.payload.byteLength)) return;
            this.ready.splice(YB, 1);
            const BB = new PB(`${qB(jB.url)}'s record is ${jB.payload.byteLength-oB.d} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(jB.file, jB.attempt, jB.url, BB, !0)
          }
        }
      }
    }

    function pB(BB) {
      return new zB(`presentation refused ${qB(BB)}`)
    }

    function qB(BB) {
      return BB.startsWith("data:") ? `${BB.slice(0,Math.min(Math.max(BB.indexOf(","),5),64))},...` : BB
    }
  },
  41834: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      f: () => QB,
      h: () => MB,
      j: () => jB,
      m: () => JB,
      n: () => yB
    });
    var YB = GB(3210),
      DB = GB(3629);
    const QB = 2147483648,
      oB = 1073741824;

    function jB(BB) {
      return BB.startsWith("data:")
    }

    function yB(BB) {
      let {
        onTableFailed: OB,
        packUrl: GB
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const YB = JB();
      YB.catch((BB => {
        null === OB || void 0 === OB || OB(BB)
      }));
      const DB = async OB => (await YB).fileUrl((OB & ~QB) >>> 0, BB);
      return {
        startup: [],
        url: async BB => {
          if (GB && 0 === (BB & QB)) {
            const OB = await YB,
              DB = OB.filePackName(BB),
              QB = null === DB || "lifeform" === OB.fileSource(BB) ? null : GB(DB);
            if (null !== QB) return QB
          }
          return DB(BB)
        },
        shippedUrl: DB
      }
    }

    function JB() {
      return GB.e(49).then((() => GB(45733)))
    }
    async function MB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return BB.startsWith("data:") ? (0, DB.d)(BB.slice(BB.indexOf(",") + 1), OB) : (0, YB.I)(BB, {
        spare: OB
      })
    }
  },
  41842: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => yB,
      f: () => JB,
      j: () => pB,
      l: () => zB,
      m: () => PB,
      o: () => lB
    });
    const YB = 826427981,
      DB = 1,
      QB = 2,
      oB = 44,
      jB = 58,
      yB = 8,
      JB = 4;

    function MB(BB, OB, GB) {
      const DB = (new TextEncoder).encode(GB),
        QB = yB + 4 * (OB.length + 2),
        oB = new Uint8Array(QB + (DB.byteLength + 3 & -4)),
        jB = new DataView(oB.buffer);
      return jB.setUint32(0, BB, !0), jB.setUint32(yB, YB, !0), OB.forEach(((BB, OB) => {
        jB.setUint32(yB + 4 * (OB + 1), BB, !0)
      })), jB.setUint32(QB - 4, DB.byteLength, !0), oB.set(DB, QB), oB
    }

    function PB(BB, OB) {
      return MB(BB, [QB], OB)
    }

    function zB(BB, OB) {
      return MB(BB, [DB, jB], OB)
    }

    function lB(BB, OB) {
      return MB(BB, [DB, oB], OB)
    }

    function pB(BB) {
      const OB = yB;
      if (BB.byteLength < OB + 12) return !1;
      const GB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      return GB.getUint32(OB, !0) === YB && GB.getUint32(OB + 4, !0) === DB && GB.getUint32(OB + 8, !0) === oB
    }
  },
  41742: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB,
      i: () => MB,
      m: () => oB,
      q: () => yB
    });
    var YB = GB(36876);
    class DB extends Error {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${BB}: the module trapped${GB?" in an earlier call":""}: ${String(OB)}`, {
          cause: OB
        }), this.site = BB, this.trap = OB, this.earlier = GB, this.name = "ModuleTrapError", OB instanceof Error && void 0 !== OB.stack && (this.stack = `${this.name}: ${this.message}\n${OB.stack}`)
      }
    }
    const QB = new WeakMap;

    function oB(BB) {
      return QB.has(BB)
    }

    function jB(BB, OB) {
      QB.has(BB) || QB.set(BB, OB)
    }

    function yB(BB, OB) {
      return !!(0, YB.h)(OB) && (jB(BB, OB), !0)
    }
    const JB = [
      ["error", BB => BB.error],
      ["unhandledrejection", BB => BB.reason]
    ];

    function MB(BB, OB, GB) {
      let oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return QB.has(BB) ? Promise.reject(new DB(OB, QB.get(BB), !0)) : new Promise(((QB, yB) => {
        const MB = GB => {
            jB(BB, GB), lB(), yB(new DB(OB, GB))
          },
          PB = BB => {
            BB instanceof WebAssembly.RuntimeError ? MB(BB) : (lB(), yB(BB))
          },
          zB = JB.map((BB => {
            let [OB, GB] = BB;
            return [OB, BB => {
              const OB = GB(BB);
              (0, YB.h)(OB) && MB(OB)
            }]
          })),
          lB = () => {
            for (const [BB, OB] of zB) null === oB || void 0 === oB || oB.removeEventListener(BB, OB)
          };
        for (const [BB, OB] of zB) null === oB || void 0 === oB || oB.addEventListener(BB, OB);
        let pB;
        try {
          pB = GB()
        } catch (qB) {
          return void PB(qB)
        }
        pB.then((BB => {
          lB(), QB(BB)
        }), PB)
      }))
    }
  },
  41723: (BB, OB, GB) => {
    GB.d(OB, {
      D: () => IB,
      E: () => bB,
      G: () => TB,
      I: () => gB,
      K: () => dB,
      L: () => iB,
      O: () => CB,
      P: () => LB,
      R: () => cB,
      S: () => XB,
      T: () => FB,
      X: () => HB,
      c: () => kB,
      g: () => nB,
      k: () => EB,
      m: () => rB,
      q: () => SB,
      s: () => fB,
      v: () => AB,
      z: () => uB
    });
    var YB = GB(204),
      DB = GB(16),
      QB = GB(4004),
      oB = GB(118),
      jB = GB(328),
      yB = GB(31),
      JB = GB(41729),
      MB = GB(41750),
      PB = GB(37142),
      zB = GB(41770),
      lB = (GB(41805), GB(41864)),
      pB = GB(41788),
      qB = GB(41753);
    const ZB = "wasmJoinBuild";
    let NB = null,
      RB = null,
      WB = null;

    function AB(BB) {
      WB = BB
    }
    let VB = !1;

    function SB() {
      VB = !0
    }

    function nB() {
      return VB
    }
    let UB = !1;

    function fB() {
      UB = !0
    }

    function kB() {
      return UB
    }

    function dB() {
      return WB
    }
    let KB = null;

    function uB(BB) {
      KB = BB, (0, jB.b)(BB)
    }
    const mB = "wasmClientRenderLost";

    function IB() {
      yB.i.setItem(mB, !0)
    }

    function FB() {
      return !0 === yB.i.getItem(mB)
    }

    function iB() {
      return KB
    }

    function LB() {
      if (null === NB) {
        yB.g.removeItem("wasmLastPick"), yB.g.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, jB.j)(), NB = (0, JB.I)(zB.f).then((BB => (null === BB || (0, JB.u)(BB) || (RB = lB.e[BB.backend], DB.c.followGameGpu("webgpu" === BB.backend ? BB.adapter : null), "webgpu" === BB.backend && (0, pB.f)()), BB)))
      }
      return NB
    }

    function gB() {
      return RB
    }

    function rB(BB) {
      return BB ? BB.load() : Promise.resolve().then((function() {
        var BB = new Error("Cannot find module '@bloxd/wasm/client'");
        throw BB.code = "MODULE_NOT_FOUND", BB
      })).then((BB => BB.bloxdWasmClient))
    }

    function XB(BB) {
      yB.g.setItem(ZB, BB)
    }

    function wB(BB, OB) {
      const GB = yB.g.getItem(ZB);
      return null === GB ? function(BB) {
        if (void 0 !== (0, YB.c)(BB, "webgpu") && (0, JB.E)()) return "webgpu";
        return !1 === (0, oB.t)() ? "webgl1" : "webgl"
      }(BB) : "none" === GB ? null : "string" === typeof GB && void 0 !== (0, YB.c)(BB, GB) ? GB : (OB && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(GB)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function EB() {
      if (null === zB.f) return rB(null);
      const BB = wB(zB.f, !0);
      return null === BB ? null : zB.f[BB]()
    }

    function cB() {
      null === NB && null !== zB.f && "webgl" === wB(zB.f, !1) && (0, qB.e)()
    }
    let hB = null,
      aB = null,
      eB = null;

    function TB() {
      return hB ??= LB().then((async BB => {
        const OB = null !== BB && !(0, JB.u)(BB),
          GB = {
            indirectHangs: OB && await (0, JB.Q)(BB, window.location.search),
            storagePullBreaks: OB && (0, JB._)(BB, window.location.search),
            splitPassBreaks: OB && (0, JB.Z)(BB, window.location.search),
            earlySky: OB && (0, JB.O)(BB, window.location.search),
            instancedTerrain: OB ? (0, JB.U)(BB, window.location.search) : null,
            cellLight: OB && await (0, QB.h)("cellLight"),
            framesAhead: (0, JB.o)(window.location.search, OB ? BB : null),
            webGpuRestores: !OB || (0, JB.bb)(BB, (0, PB.d)()),
            bufferCopiesCrash: OB && (0, JB.N)(BB, window.location.search),
            firstVertex: OB ? (0, MB.i)(BB.backend, window.location.search) : void 0
          };
        return aB = GB.indirectHangs, eB = !GB.webGpuRestores, GB
      })), hB
    }

    function bB() {
      return aB
    }

    function CB() {
      return eB
    }
    async function HB() {
      const BB = null === NB ? null : await NB;
      return null !== BB && (0, JB.u)(BB) && (NB = null, hB = null, aB = null, eB = null), LB()
    }
  },
  41995: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => yB,
      e: () => JB
    });
    var YB = GB(36912),
      DB = GB(41882),
      QB = GB(4820),
      oB = GB(3656),
      jB = GB(37142);
    async function yB(BB, OB) {
      return await Promise.all([(0, QB.g)(void 0, !0), (0, oB.g)()]), (0, YB.m)(BB, DB.e, {
        ...OB,
        memoryMaximumBytes: (0, jB.o)()
      })
    }
    async function JB() {
      return await (0, QB.g)(void 0, !0), (0, YB.o)((0, jB.o)())
    }
  },
  41750: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      i: () => QB
    });
    var YB = GB(258);
    const DB = "provokingVertex";

    function QB(BB, OB) {
      if ("webgl" !== BB) return;
      const GB = new URLSearchParams(OB).get(DB);
      return "first" === GB || "last" !== GB && null
    }
    const oB = new WeakSet;

    function jB(BB, OB) {
      var GB, DB;
      let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (GB = null === (DB = globalThis.navigator) || void 0 === DB ? void 0 : DB.userAgent) && void 0 !== GB ? GB : "";
      try {
        !1 === OB || oB.has(BB) || (oB.add(BB), BB.addEventListener("webglcontextrestored", (() => {
          jB(BB, OB, QB)
        })));
        const GB = BB.getContext("webgl2");
        if (null === GB || GB.isContextLost()) return !1;
        if (!(null !== OB && void 0 !== OB ? OB : function(BB, OB) {
            var GB, DB;
            const QB = BB.getExtension("WEBGL_debug_renderer_info");
            if (null === QB) return !1;
            return function(BB, OB, GB) {
              return GB.includes("Windows") && "adreno_6" === (0, YB.f)(BB, OB)
            }(String(null !== (GB = BB.getParameter(QB.UNMASKED_VENDOR_WEBGL)) && void 0 !== GB ? GB : ""), String(null !== (DB = BB.getParameter(QB.UNMASKED_RENDERER_WEBGL)) && void 0 !== DB ? DB : ""), OB)
          }(GB, QB))) return !1;
        const DB = GB.getExtension("WEBGL_provoking_vertex");
        return null !== DB && (DB.provokingVertexWEBGL(DB.FIRST_VERTEX_CONVENTION_WEBGL), console.info("WebGL2 draws flat varyings from the first vertex (WEBGL_provoking_vertex)"), !0)
      } catch (yB) {
        return console.warn("WebGL2's provoking vertex couldn't be set: flat varyings draw from the last vertex", yB), !1
      }
    }
  },
  41761: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB,
      d: () => jB,
      h: () => MB,
      l: () => oB
    });
    var YB = GB(347),
      DB = GB(651);
    let QB;

    function oB(BB) {
      var OB;
      const GB = QB;
      return QB = void 0, null !== (OB = yB(BB)) && void 0 !== OB ? OB : GB
    }

    function jB(BB) {
      try {
        const OB = yB(BB);
        void 0 !== OB && (QB = OB, (0, DB.f)((0, YB.n)(OB.reason, OB.message)))
      } catch (OB) {
        console.warn("Couldn't keep the WebGPU loss's cause", OB)
      }
    }

    function yB(BB) {
      var OB;
      const GB = null === BB || void 0 === BB || null === (OB = BB.roB) || void 0 === OB ? void 0 : OB.call(BB),
        YB = null === BB || void 0 === BB ? void 0 : BB.goB();
      if (void 0 === YB) return;
      const DB = new Error(YB);
      return void 0 !== GB && (DB.reason = GB), DB
    }

    function JB(BB) {
      return BB instanceof Error ? BB : void 0
    }

    function MB(BB, OB) {
      return "lost" !== BB && "frames_refused" !== BB ? {} : (0, YB.n)("frames_refused" === BB ? BB : null === OB || void 0 === OB ? void 0 : OB.reason, null === OB || void 0 === OB ? void 0 : OB.message)
    }
  },
  41784: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => fB,
      h: () => VB,
      k: () => AB,
      m: () => UB,
      n: () => uB,
      o: () => KB,
      r: () => mB
    });
    var YB = GB(5287),
      DB = GB(41788),
      QB = GB(34637);
    const oB = 1,
      jB = 18,
      yB = 19,
      JB = 20,
      MB = 21,
      PB = 22,
      zB = {
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
        [jB]: "retry linked",
        [yB]: "fallback linked",
        [JB]: "fallback failed",
        [MB]: "link stalled",
        [PB]: "link left pending",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function lB(BB, OB, GB) {
      return BB === jB ? "program retry" : BB === oB ? "program link" : BB === MB || BB === PB ? "program link stall" : BB === yB || BB === JB ? `program ${OB} ${GB}` : "program"
    }
    const pB = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      qB = {
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
      ZB = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      NB = {
        11: "none read after view",
        12: "some read after view"
      },
      RB = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...NB
      },
      WB = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function AB(BB, OB) {
      return BB === YB.p.RenderSerialLinks && void 0 !== NB[OB]
    }

    function VB(BB, OB) {
      return BB === YB.p.RenderSerialLinks && void 0 !== WB[15 & OB]
    }
    const SB = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function nB(BB, OB) {
      var GB;
      return null !== (GB = BB[OB]) && void 0 !== GB ? GB : (0, QB.c)(OB)
    }

    function UB() {
      return (0, QB.c)((0, DB.c)())
    }

    function fB(BB, OB) {
      switch (BB) {
        case YB.p.RenderSceneRowNotDrawn:
          return {
            words: ` ${nB(qB,OB)}`, instance: String(OB), group: String(BB)
          };
        case YB.p.RenderChunkMeshNotDrawn: {
          const GB = 0 === (128 & OB) ? "" : " shortage",
            YB = OB >>> 8;
          return {
            words: ` ${nB(ZB,127&OB)}${GB}${0===YB?"":` kind ${(0,QB.c)(YB)}`}`,
            instance: String(OB),
            group: String(BB)
          }
        }
        case YB.p.RenderInternal: {
          const GB = nB(pB, 255 & OB),
            YB = OB >>> 8 & 255;
          if (0 === YB) return {
            words: ` ${GB}`,
            instance: String(OB),
            group: String(BB)
          };
          const DB = nB(zB, YB),
            oB = OB >>> 16;
          return {
            words: ` ${GB} ${DB} program ${(0,QB.c)(oB)}`,
            instance: `${GB} ${DB} ${oB}`,
            group: lB(YB, DB, GB),
            gpuDetails: {
              programFailure: DB,
              program: String(oB)
            }
          }
        }
        case YB.p.RenderSerialLinks: {
          if (VB(BB, OB)) {
            const BB = function(BB) {
              const OB = (OB, GB) => (0, QB.c)(BB >>> OB & (1 << GB) - 1),
                GB = BB >>> 30 & 1 ? " restored" : "";
              return `link census ${WB[15&BB]} linked ${OB(22,8)} failed ${OB(4,6)} retried ${OB(10,6)} fallback ${OB(16,6)}${GB}`
            }(OB);
            return {
              words: ` ${BB}`,
              instance: String(15 & OB),
              group: "link census",
              gpuDetails: {
                linkCensus: BB
              }
            }
          }
          const GB = nB(RB, OB);
          return {
            words: ` ${GB}`,
            instance: String(OB),
            group: String(BB),
            gpuDetails: {
              serialLinks: GB
            }
          }
        }
        case YB.p.RenderGlErrorAfterRestore: {
          const GB = nB(SB, 65535 & OB),
            YB = OB >>> 16,
            DB = 65535 !== YB;
          return {
            words: ` ${GB}${DB?` program ${(0,QB.c)(YB)}`:""}`,
            instance: String(OB),
            group: String(BB),
            gpuDetails: DB ? {
              glError: GB,
              program: String(YB)
            } : {
              glError: GB
            }
          }
        }
        default:
          return null
      }
    }
    const kB = 2,
      dB = new Map;

    function KB(BB) {
      let {
        group: OB,
        instance: GB
      } = BB, YB = dB.get(OB);
      return void 0 === YB && (YB = [], dB.set(OB, YB)), !YB.includes(GB) && (YB.length >= kB || (YB.push(GB), !1))
    }

    function uB() {
      return dB.size > 0
    }

    function mB() {
      dB.clear()
    }
  },
  41770: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB,
      f: () => QB
    });
    var YB = GB(41773);
    const DB = new WeakSet;
    const QB = {
        webgpu: async () => (function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === BB || DB.has(BB.prototype)) return;
          DB.add(BB.prototype);
          const OB = BB.prototype.requestDevice;
          BB.prototype.requestDevice = function(BB) {
            var GB;
            const DB = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.requiredLimits) && void 0 !== GB ? GB : {},
              QB = Object.keys(DB).filter((BB => !(BB in this.limits)));
            if (0 === QB.length) return OB.call(this, BB);
            const oB = Object.fromEntries(Object.entries(DB).filter((BB => {
              let [OB] = BB;
              return OB in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${QB.join(", ")}`), (0, YB.reportDroppedRequiredLimits)(QB), OB.call(this, {
              ...BB,
              requiredLimits: oB
            })
          }
        }(), (await GB.e(8).then((() => GB(54004)))).bloxdWasmWebgpu),
        webgl: async () => (await GB.e(6).then((() => GB(54010)))).bloxdWasmWebgl,
        webgl1: async () => (await GB.e(7).then((() => GB(54022)))).bloxdWasmWebgl1
      },
      oB = async () => (await GB.e(5).then((() => GB(54029)))).compileAnimationPackInWasm
  },
  41705: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => NB,
      e: () => ZB,
      g: () => VB
    });
    var YB = GB(7179),
      DB = GB(25),
      QB = GB(4709),
      oB = GB(5287),
      jB = GB(7176),
      yB = GB(41714);

    function JB(BB, OB) {
      const GB = (0, jB.d)(OB.variants);
      return BB.setShaderPack(GB.variantFlags, GB.hooks, GB.moduleCodes, (0, yB.t)(OB.layers), yB.j[OB.policy], OB.keepCircleShadows)
    }
    const MB = 0,
      PB = 1,
      zB = 2,
      lB = "shaderPack:failedToCompile",
      pB = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      qB = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function ZB(BB, OB) {
      var GB;
      const YB = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.reason) && void 0 !== GB ? GB : "none";
      return pB.has(YB) ? {
        messageKey: OB ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === YB && "override" === (null === BB || void 0 === BB ? void 0 : BB.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: qB.has(YB) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class NB extends Error {
      constructor(BB) {
        super(`the shader pack can't run in this game: ${BB}`), this.messageKey = BB, this.name = "ShaderPackJoinError"
      }
    }
    const RB = "strict";
    class WB {
      constructor(BB) {
        this.deps = BB, this.pagePack = void 0, this.loaded = null, this.policy = RB, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = BB.load().catch((OB => (BB.warn("the shader pack could not load: the game draws without it", OB), {
          status: "none"
        }))).then((BB => (this.loaded = BB, "active" === BB.status && (this.handOverToPreviews(BB), null !== BB.harnessPolicy && (this.policy = BB.harnessPolicy, this.handOver())), BB)))
      }
      async join(BB) {
        this.leave();
        const OB = this.game,
          [GB, DB] = await Promise.all([this.pagePack, this.policyOf(BB)]);
        if (OB !== this.game || "none" === GB.status) return null;
        const QB = "active" === GB.status ? GB.pack.variants : GB.variants,
          oB = (0, YB.k)(QB, DB);
        if (oB && "active" === GB.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (oB) {
          const BB = this.cantRun(GB, DB);
          if (null !== BB) return BB
        } else if ("blocked" === GB.status || null === this.deps.core) return null;
        return this.policy = DB, this.handOver(), oB && this.refused ? lB : (this.joined = !0, this.offInThisGame = !oB, null)
      }
      async replay(BB) {
        const OB = await this.join(BB);
        null === OB ? this.playable() : this.deps.failInGame(OB)
      }
      cantRun(BB, OB) {
        const {
          core: GB,
          noWebGpu: YB
        } = this.deps;
        if ("blocked" === BB.status) {
          return "shaderPack:failedUnchecked" === BB.messageKey && null === GB && YB.noAdapter ? YB.messageKey : BB.messageKey
        }
        return this.refused || this.failedPolicies.has(OB) ? lB : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var BB;
        return this.runsInJoinedGame() && "active" === (null === (BB = this.loaded) || void 0 === BB ? void 0 : BB.status) ? function(BB, OB) {
          const GB = BB.filter((BB => (0, YB.k)([BB], OB))),
            DB = BB => GB.some((OB => OB[BB]));
          return {
            sceneDepth: DB("sceneDepth"),
            sunShadow: DB("sunShadow"),
            airShadow: DB("airShadow")
          }
        }(this.loaded.pack.variants, this.policy) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(lB) : (null !== this.couldntRun ? this.notify(QB.c, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.policy) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(BB) {
        for (const {
            code: OB,
            detail: GB
          }
          of BB)
          if (OB === oB.p.RenderShaderPackNotRun) switch (255 & GB) {
            case MB:
              this.refused = !0, this.failed();
              break;
            case PB:
              this.failedPolicies.add(this.policy), this.failed();
              break;
            case zB:
              this.failedModelPolicies.add(this.policy), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(lB) : this.failedWhileJoining = !0)
      }
      fail(BB) {
        this.leave(), this.deps.failInGame(BB)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(BB, OB) {
        const GB = this.game;
        this.deps.notify(BB, (() => GB === this.game && this.joined), OB)
      }
      handOver() {
        var BB;
        const {
          core: OB
        } = this.deps;
        null !== OB && "active" === (null === (BB = this.loaded) || void 0 === BB ? void 0 : BB.status) && (JB(OB, {
          ...this.loaded.pack,
          policy: this.policy
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(BB) {
        let {
          pack: OB,
          harnessPolicy: GB
        } = BB;
        const {
          previews: YB
        } = this.deps;
        null !== YB && JB(YB, {
          ...OB,
          policy: null !== GB && void 0 !== GB ? GB : RB
        })
      }
      policyOf(BB) {
        return this.deps.policyOf(BB).catch((BB => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", BB), RB)))
      }
    }
    const AB = "wasmShaderPackNotice";

    function VB(BB, OB, GB, YB) {
      return DB.o.subscribe(AB, (BB => {
        let {
          translationKey: OB,
          stillCurrent: GB,
          reasonKey: YB
        } = BB;
        GB() && DB.o.tM("chat", (0, QB.j)(OB, YB))
      })), new WB({
        load: SB,
        policyOf: nB,
        core: BB,
        previews: OB,
        noWebGpu: GB,
        notify: (BB, OB, GB) => {
          const YB = {
            translationKey: BB,
            stillCurrent: OB,
            reasonKey: GB
          };
          DB.o.tM(AB, YB, !0)
        },
        failInGame: BB => {
          DB.o.tM(QB.f, BB)
        },
        warn: YB
      })
    }
    async function SB() {
      const [{
        shaderPackPage: BB,
        harnessShaderPackMode: OB
      }, {
        shaderPackTextures: YB
      }] = await Promise.all([GB.e(130).then((() => GB(39925))), GB.e(131).then((() => GB(7174)))]), DB = await BB.load();
      return "active" !== DB.status ? DB : {
        status: "active",
        pack: {
          variants: DB.pack.variants,
          layers: YB().layers,
          keepCircleShadows: DB.pack.keepCircleShadows
        },
        harnessPolicy: OB()
      }
    }
    async function nB(BB) {
      var OB;
      const [{
        shaderPackPage: YB,
        harnessShaderPackMode: DB
      }, {
        getShaderPackPolicy: QB
      }] = await Promise.all([GB.e(130).then((() => GB(39925))), GB.e(106).then((() => GB(44437)))]);
      return await YB.load(), null !== (OB = DB()) && void 0 !== OB ? OB : QB(BB)
    }
  },
  41851: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      i: () => ZB,
      j: () => yB,
      m: () => JB,
      p: () => MB,
      s: () => zB
    });
    var YB = GB(36948),
      DB = GB(41858);
    const QB = "atlas:",
      oB = 3e4;
    class jB extends Error {
      constructor(BB, OB) {
        super(`fetching ${BB} answered HTTP ${OB}`), this.url = BB, this.status = OB, this.name = "TerrainTextureFetchError"
      }
    }

    function yB(BB) {
      if (!BB.startsWith(QB)) return null;
      const OB = Number(BB.slice(QB.length));
      return Number.isInteger(OB) && OB >= 0 ? OB : null
    }
    async function JB() {
      const BB = await GB.e(228).then((() => GB(34878)));
      return {
        atlasSheets: BB.blockAtlasUrls,
        texture: OB => {
          var GB, YB, QB;
          return null !== (GB = null !== (YB = null !== (QB = BB.animatedBlockTextures[OB]) && void 0 !== QB ? QB : BB.rotatedBlockTextures[OB]) && void 0 !== YB ? YB : DB.c[OB]) && void 0 !== GB ? GB : null
        }
      }
    }
    async function MB(BB) {
      const OB = new AbortController,
        GB = setTimeout((() => {
          OB.abort(new DOMException(`${BB} took over ${oB} ms`, "TimeoutError"))
        }), oB);
      let YB;
      try {
        const GB = await fetch(BB, {
          signal: OB.signal
        });
        if (!GB.ok) throw new jB(BB, GB.status);
        YB = await GB.blob()
      } finally {
        clearTimeout(GB)
      }
      const DB = await createImageBitmap(YB, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return zB(DB)
      } finally {
        DB.close()
      }
    }
    const PB = 8192;

    function zB(BB) {
      const {
        width: OB,
        height: GB
      } = BB, DB = Math.max(1, Math.min(GB, PB)), QB = (0, YB.f)(OB, DB, {
        willReadFrequently: !0
      });
      if (!QB) throw new Error("no 2D context to read the texture back");
      QB.globalCompositeOperation = "copy";
      const oB = new Uint8Array(OB * GB * 4);
      for (let YB = 0; YB < GB; YB += DB) {
        const jB = Math.min(DB, GB - YB);
        QB.drawImage(BB, 0, YB, OB, jB, 0, 0, OB, jB), oB.set(QB.getImageData(0, 0, OB, jB).data, YB * OB * 4)
      }
      return {
        width: OB,
        height: GB,
        pixels: oB
      }
    }
    async function lB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MB;
      const YB = [],
        DB = await Promise.all(BB.map((async BB => {
          var DB, oB;
          const jB = null !== (DB = null === (oB = OB.decoded) || void 0 === oB ? void 0 : oB.call(OB, BB)) && void 0 !== DB ? DB : null,
            JB = null === jB ? function(BB, OB) {
              if (BB.startsWith(QB)) {
                var GB;
                const YB = yB(BB);
                return null === YB ? null : null !== (GB = OB.atlasSheets[YB]) && void 0 !== GB ? GB : null
              }
              return OB.texture(BB)
            }(BB, OB) : null,
            MB = null !== jB && void 0 !== jB ? jB : null === JB ? null : GB(JB);
          if (null === MB) return YB.push({
            name: BB,
            url: JB,
            error: new Error(`no URL for terrain texture ${BB}`)
          }), null;
          try {
            const OB = await MB;
            if (OB.pixels.byteLength !== OB.width * OB.height * 4) throw new Error(`decoded ${OB.pixels.byteLength} bytes for ${OB.width}x${OB.height} texels`);
            return {
              name: BB,
              texture: OB
            }
          } catch (PB) {
            return YB.push({
              name: BB,
              url: JB,
              error: PB
            }), null
          }
        }))),
        oB = DB.filter((BB => null !== BB)),
        jB = new Uint32Array(2 * oB.length);
      oB.forEach(((BB, OB) => {
        let {
          texture: GB
        } = BB;
        jB[2 * OB] = GB.width, jB[2 * OB + 1] = GB.height
      }));
      return {
        handOver: {
          names: oB.map((BB => {
            let {
              name: OB
            } = BB;
            return OB
          })),
          textures: oB.map((BB => {
            let {
              texture: OB
            } = BB;
            return OB.pixels
          })),
          sizes: jB
        },
        failures: YB
      }
    }
    const pB = [2e3, 1e4, 3e4, 6e4, 12e4];

    function qB() {}
    class ZB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pB,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = BB, this.retryMs = OB, this.keepBelow = GB, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const YB = ++this.started,
          DB = {
            decode: GB.decode,
            wholeAtlas: GB.wholeAtlas
          };
        return this.loadAndHandOver(OB, DB, BB, (() => {
          var BB;
          return YB < this.landed || !1 === (null === (BB = GB.wanted) || void 0 === BB ? void 0 : BB.call(GB))
        }), {
          onTaken: (BB, GB) => {
            this.landed = YB, this.current = {
              mine: YB,
              sources: OB,
              load: DB,
              GP: BB,
              failed: GB
            }
          }
        })
      }
      restore(BB) {
        var OB;
        const GB = this.current;
        if (null === GB) return Promise.resolve(null);
        if ((null === (OB = this.restoring) || void 0 === OB ? void 0 : OB.mine) === GB.mine) return this.restoring.done;
        const YB = {
          mine: GB.mine,
          done: this.restoreLanded(GB, BB).finally((() => {
            this.restoring === YB && (this.restoring = null)
          }))
        };
        return this.restoring = YB, YB.done
      }
      async restoreLanded(BB, OB) {
        const GB = () => this.landed !== BB.mine,
          {
            GP: YB
          } = BB;
        if (null !== YB) return this.stopped() ? null : this.core.setTerrainTextures(YB.names, YB.textures, YB.sizes);
        let DB = OB;
        for (let QB = 0;; QB++) {
          const OB = this.retryMs.at(QB),
            YB = {
              allOrNothingExcept: void 0 === OB ? void 0 : BB.failed
            },
            oB = await this.loadAndHandOver(BB.sources, BB.load, DB, GB, YB);
          if (!1 !== oB || void 0 === OB || this.stopped()) return oB;
          if (DB = qB, await new Promise((BB => {
              setTimeout(BB, OB)
            })), GB()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const QB = this.core.terrainTextureNames();
        var oB;
        if (0 === QB.length) return null === (oB = DB.onTaken) || void 0 === oB || oB.call(DB, null, new Set), !0;
        let jB, JB;
        try {
          jB = await BB(), JB = await lB(QB, jB, OB.decode)
        } catch (ZB) {
          return YB() ? null : (GB({
            name: null,
            url: null,
            error: ZB
          }), !1)
        }
        if (YB() || this.stopped()) return null;
        for (const yB of JB.failures) GB(yB);
        const MB = DB.allOrNothingExcept;
        if (void 0 !== MB && JB.failures.some((BB => {
            let {
              name: OB
            } = BB;
            return null === OB || !MB.has(OB)
          })) || !0 === OB.wholeAtlas && JB.failures.some((BB => {
            let {
              name: OB
            } = BB;
            return null === OB || null !== yB(OB)
          }))) return !1;
        const {
          handOver: PB
        } = JB, zB = function(BB) {
          return BB.textures.reduce(((BB, OB) => BB + OB.byteLength), 0)
        }(PB) < this.keepBelow, pB = this.core.setTerrainTextures(PB.names, PB.textures, PB.sizes, zB ? void 0 : () => {
          !async function(BB, OB) {
            await OB;
            for (const {
                buffer: YB
              }
              of BB) {
              const BB = YB;
              var GB;
              if (!BB.detached) null === (GB = BB.transfer) || void 0 === GB || GB.call(BB, 0)
            }
          }(PB.textures, jB.heldUntil)
        });
        if (pB) {
          var qB;
          const BB = new Set(JB.failures.flatMap((BB => {
            let {
              name: OB
            } = BB;
            return null === OB ? [] : [OB]
          })));
          null === (qB = DB.onTaken) || void 0 === qB || qB.call(DB, zB ? PB : null, BB)
        }
        return pB
      }
    }
  },
  34746: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB,
      e: () => PB,
      i: () => MB
    });
    var YB = GB(258),
      DB = GB(92),
      QB = GB(118),
      oB = GB(116),
      jB = GB(656);
    const yB = new Set(["mali_bifrost"]);

    function JB() {
      if (jB.f) return;
      const BB = (0, DB.pageOperatingSystem)();
      if ("android" !== BB && "windows" !== BB || (0, jB.c)("webgl_default")) return;
      if ("windows" === BB) return BB => "qualcomm" === (0, DB.normaliseGpuVendor)((0, oB.e)(BB).vendor);
      const OB = (0, QB.o)(),
        GB = null === OB ? (0, YB.r)() : (0, YB.f)(OB.vendor, OB.renderer);
      return null !== GB && yB.has(GB) ? BB => (0, YB.m)((0, oB.e)(BB).vendor, GB) : void 0
    }

    function MB(BB, OB) {
      return BB ? () => !0 : OB()
    }
    async function PB(BB) {
      try {
        const OB = MB(BB, JB),
          GB = navigator.gpu;
        if (void 0 === OB || void 0 === GB) return !1;
        const YB = await (0, oB.r)(GB, {
          seed: !1,
          compatibility: OB
        });
        return "string" !== typeof YB && YB.compatibility && !(0, oB.k)(YB.adapter)
      } catch (OB) {
        return console.error("WebGPU compatibility-mode adapter request failed.", OB), !1
      }
    }
  },
  41788: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB,
      f: () => JB
    });
    var YB = GB(92),
      DB = GB(39470);
    const QB = "webgpuPipeline";

    function oB(BB) {
      return BB.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let jB = null;

    function yB() {
      if (null === jB) try {
        BB = (0, YB.getBrowserName)(), OB = (0, YB.getBrowserVersion)(), GB = (0, YB.getOperatingSystem)(), DB = (0, YB.getOperatingSystemVersion)(), jB = `${BB.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===OB?"unknown":oB(OB)}-${GB}${void 0===DB?"":`_${oB(DB)}`}`
      } catch (QB) {
        console.warn("The user agent couldn't be read for its browser code", QB), jB = "unknown"
      }
      var BB, OB, GB, DB;
      return jB
    }

    function JB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const OB = `WGPU-${yB()}`,
        YB = (BB, YB) => {
          const {
            reason: oB,
            message: jB
          } = YB;
          if ((0, DB.s)(String(jB))) return;
          const yB = {
            pipeline: null !== BB && void 0 !== BB ? BB : "",
            reason: String(oB),
            browserMessage: String(jB)
          };
          Promise.resolve().then((() => GB(41773))).then((BB => {
            let {
              reportCrash: GB
            } = BB;
            GB({
              kind: "coreError",
              code: OB,
              site: QB,
              fatal: !1,
              message: `${yB.pipeline} ${yB.reason}: ${yB.browserMessage}`,
              details: yB,
              error: YB
            })
          })).catch((BB => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", BB)
          }))
        },
        oB = BB.createRenderPipelineAsync;
      BB.createRenderPipelineAsync = function(BB) {
        return oB.call(this, BB).catch((OB => {
          throw YB(BB.label, OB), OB
        }))
      };
      const jB = BB.createComputePipelineAsync;
      BB.createComputePipelineAsync = function(BB) {
        return jB.call(this, BB).catch((OB => {
          throw YB(BB.label, OB), OB
        }))
      }
    }
  },
  41753: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      f: () => yB
    });
    var YB = GB(118);
    let DB = !1;

    function QB() {
      let BB = null;
      try {
        return BB = document.createElement("canvas").getContext("webgl2"), null !== BB
      } catch {
        return !1
      } finally {
        try {
          var OB, GB;
          null === (OB = BB) || void 0 === OB || null === (GB = OB.getExtension("WEBGL_lose_context")) || void 0 === GB || GB.loseContext()
        } catch {}
      }
    }

    function oB() {
      "hidden" === document.visibilityState && (DB = !1, document.removeEventListener("visibilitychange", oB))
    }

    function jB() {
      DB || "visible" !== document.visibilityState || !(0, YB.s)() && !QB() || (DB = !0, document.addEventListener("visibilitychange", oB))
    }

    function yB() {
      return DB || QB()
    }
  },
  41895: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bloxd_wasm_models_bg.c056c17e1ab42e347d0b.wasm"
  },
  41891: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bloxd_wasm_workers_bg.3c7e2cdc5e1d8df49340.wasm"
  },
  41882: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      e: () => YB
    });
    const YB = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new GB.U(GB(41891))
      }
    };
    const DB = {
      name: "bloxd_wasm_models",
      url: function() {
        return new GB.U(GB(41895))
      }
    }
  },
  7176: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => AB,
      g: () => VB,
      h: () => RB,
      l: () => NB
    });
    var YB = GB(7179);
    const DB = 6,
      QB = 3,
      oB = 1,
      jB = 2,
      yB = 4,
      JB = 8,
      MB = 16,
      PB = 32,
      zB = 64,
      lB = 128,
      pB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function qB(BB) {
      if (!BB) return 0;
      const OB = pB.indexOf(BB);
      if (OB <= 0) throw new Error(`"${BB}" is not a shader pack hook function`);
      return OB
    }

    function ZB(BB) {
      if (0 === BB) return null;
      const OB = pB[BB];
      if (void 0 === OB) throw new Error(`${BB} is not a shader pack hook function id`);
      return OB
    }

    function NB(BB) {
      const OB = YB.e.length;
      return {
        strict: BB >= OB,
        program: YB.e[BB % OB]
      }
    }

    function RB(BB) {
      return Number(BB.strict) * YB.e.length + YB.e.indexOf(BB.program)
    }

    function WB(BB) {
      return "" === BB ? [] : BB.split(" ")
    }

    function AB(BB) {
      const OB = {
        variantFlags: new Uint8Array(DB),
        hooks: new Uint8Array(DB * QB),
        moduleCodes: Array(DB).fill(""),
        reads: Array(2 * DB).fill("")
      };
      for (const GB of BB) {
        const BB = RB(GB.key),
          YB = (BB, OB) => null === GB.hooks.surface || GB.reads.fragment.includes(BB) ? 0 : OB;
        OB.variantFlags[BB] = (GB.sceneDepth ? oB : 0) | (GB.movesVertices ? jB : 0) | (GB.sunShadow ? yB : 0) | (GB.airShadow ? JB : 0) | (GB.discards ? MB : 0) | YB("localPosition", PB) | YB("enchantSpeed", zB) | YB("enchantTier", lB), OB.hooks[BB * QB] = qB(GB.hooks.vertex), OB.hooks[BB * QB + 1] = qB(GB.hooks.surface), OB.hooks[BB * QB + 2] = qB(GB.hooks.light), OB.moduleCodes[BB] = GB.moduleCode, OB.reads[2 * BB] = GB.reads.vertex.join(" "), OB.reads[2 * BB + 1] = GB.reads.fragment.join(" ")
      }
      return OB
    }

    function VB(BB) {
      const {
        hooks: OB,
        moduleCodes: GB,
        reads: YB
      } = BB;
      return Array.from(BB.variantFlags, ((BB, DB) => {
        const PB = DB * QB;
        return {
          key: NB(DB),
          hooks: {
            vertex: ZB(OB[PB]),
            surface: ZB(OB[PB + 1]),
            light: ZB(OB[PB + 2])
          },
          moduleCode: GB[DB],
          sceneDepth: 0 !== (BB & oB),
          sunShadow: 0 !== (BB & yB),
          airShadow: 0 !== (BB & JB),
          movesVertices: 0 !== (BB & jB),
          discards: 0 !== (BB & MB),
          reads: {
            vertex: WB(YB[2 * DB]),
            fragment: WB(YB[2 * DB + 1])
          }
        }
      }))
    }
  },
  41714: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      e: () => YB,
      f: () => zB,
      g: () => MB,
      j: () => ZB,
      k: () => QB,
      n: () => jB,
      o: () => yB,
      p: () => oB,
      t: () => qB,
      w: () => lB,
      z: () => pB
    });
    const YB = 3,
      DB = 0,
      QB = 1,
      oB = 2,
      jB = {
        uniform: 3,
        sz: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      yB = 10,
      JB = "BloxdPackInputs",
      MB = "bloxdPackInputs",
      PB = [{
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

    function lB() {
      const BB = PB.map((BB => {
        let {
          name: OB,
          type: GB
        } = BB;
        return `    ${OB}: ${GB},\n`
      })).join("");
      return `struct ${JB} {\n${BB}}\n@group(${YB}) @binding(${DB}) var<uniform> ${MB}: ${JB};\n`
    }

    function pB(BB, OB) {
      const GB = new DataView(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, zB),
        [YB, DB, QB, oB, jB, yB] = PB;
      GB.setFloat32(YB.offset, OB.seconds, !0), GB.setUint32(DB.offset, OB.lit ? 1 : 0, !0);
      for (let JB = 0; JB < 3; JB++) GB.setInt32(QB.offset + 4 * JB, OB.renderOffset[JB], !0), GB.setFloat32(oB.offset + 4 * JB, OB.nOB[JB], !0), GB.setFloat32(jB.offset + 4 * JB, OB.eyePosition[JB], !0), GB.setFloat32(yB.offset + 4 * JB, OB.shadowDirection[JB], !0)
    }

    function qB(BB) {
      const OB = new Uint32Array(Math.max(1, BB.length));
      return BB.forEach(((BB, GB) => {
        let {
          id: YB,
          rotation: DB
        } = BB;
        OB[GB] = 65535 & YB | (3 & DB) << 16
      })), OB
    }
    const ZB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);