export const id = 153;
export const ids = [153];
export const modules = {
  34715: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      g: () => AU
    });
    var cU = zU(281),
      yU = zU(134),
      QU = zU(34719);

    function AU() {
      var UU, XU, zU;
      return null !== (UU = (0, cU.k)(null !== (XU = null === (zU = (0, yU.o)()) || void 0 === zU ? void 0 : zU.renderer) && void 0 !== XU ? XU : null, (0, yU.l)())) && void 0 !== UU ? UU : "unknown"
    }

    function FU(UU, XU, zU, cU, yU) {
      const AU = null === XU ? "untimed" : `${Math.round(XU)} ms`;
      return `frames stalled, ${zU}, gpu ${(0,QU.b)(yU)}, blocking ${AU}, drawn ${Math.round(UU)} ms apart, timers ${cU.timers}, timer gap ${Math.round(cU.longestGapMs)} ms`
    }
  },
  34719: (UU, XU, zU) => {
    function cU(UU) {
      return String(UU).replace(/\d/g, (UU => String.fromCharCode(97 + Number(UU))))
    }
    zU.d(XU, {
      b: () => cU
    })
  },
  41699: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      e: () => EU,
      h: () => AU,
      l: () => yU,
      p: () => FU,
      t: () => DU
    });
    class cU extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function yU(UU) {
      return UU instanceof RangeError && /call stack/i.test(UU.message) || UU instanceof Error && "InternalError" === UU.name && /recursion/i.test(UU.message)
    }
    const QU = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function AU(UU) {
      var XU;
      return UU instanceof WebAssembly.RuntimeError || UU instanceof cU || yU(UU) && QU.test(null !== (XU = UU.stack) && void 0 !== XU ? XU : "")
    }

    function FU(UU, XU) {
      if (AU(UU)) throw UU;
      console.error(XU, UU)
    }

    function oU(UU, XU, zU, yU, QU) {
      if (XU % yU !== 0 || XU + zU > UU.byteLength) throw new cU(`${QU}: ${zU} bytes at ${XU}, ${yU}-aligned, outside ${UU.byteLength} bytes of memory`)
    }

    function DU(UU, XU, zU, cU, yU) {
      return 0 === zU ? null : (oU(XU, zU, cU * UU.BYTES_PER_ELEMENT, UU.BYTES_PER_ELEMENT, yU), new UU(XU, zU, cU))
    }

    function EU(UU, XU, zU, cU, yU) {
      return 0 === XU ? null : (oU(UU, XU, zU, cU, yU), new DataView(UU, XU, zU))
    }
  },
  41795: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => BX,
      D: () => KU,
      F: () => TU,
      I: () => lU,
      K: () => zX,
      O: () => XX,
      R: () => hU,
      V: () => yX,
      Y: () => tX,
      ab: () => cX,
      d: () => qU,
      eb: () => UX,
      h: () => gX,
      hb: () => QX,
      j: () => ZX,
      lb: () => DX,
      m: () => YX,
      nb: () => NX,
      p: () => aX,
      pb: () => SU,
      r: () => oX,
      t: () => pX,
      x: () => IX
    });
    var cU = zU(320),
      yU = zU(274),
      QU = zU(281),
      AU = zU(27),
      FU = zU(3099),
      oU = zU(730),
      DU = zU(4953),
      EU = zU(3073),
      YU = zU(3849),
      NU = zU(97),
      IU = zU(142),
      pU = zU(318),
      aU = zU(42),
      tU = zU(316),
      gU = zU(123),
      kU = zU(678),
      GU = zU(134),
      BU = zU(127),
      ZU = zU(5326),
      RU = zU(41799),
      PU = zU(1877),
      WU = zU(41808),
      dU = zU(41814),
      LU = zU(34816),
      eU = zU(41820),
      CU = zU(41823);
    const wU = "bloxd-webgpuOffAfterLoss",
      qU = "context:webgl",
      OU = "probe:threw";

    function SU(UU) {
      let XU;
      try {
        XU = UU.getContext("webgl", {
          powerPreference: GU.c
        })
      } catch {
        XU = null
      }
      if (null === XU) return null;
      let zU = null;
      try {
        const UU = XU.getParameter(XU.MAX_TEXTURE_SIZE);
        zU = "number" === typeof UU && UU > 0 ? UU : null
      } catch {
        zU = null
      }
      try {
        var cU;
        null === (cU = XU.getExtension("WEBGL_lose_context")) || void 0 === cU || cU.loseContext()
      } catch {}
      return zU
    }
    const rU = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function uU() {
      return "ios" === (0, NU.getOperatingSystem)() ? "ios" : "other"
    }
    const fU = "mali_valhall",
      iU = new Set(["nvidia_pre_turing"]),
      HU = new Set(["intel_gen7_8"]);

    function MU(UU, XU, zU) {
      return rU.has(UU) ? "android_arm" === UU && XU === fU && "mobileAndroid" !== zU ? "webgpu_default" : "webgl_default" : null
    }

    function vU(UU) {
      return function(UU) {
        try {
          return UU()
        } catch {
          return null
        }
      }((() => {
        var XU, zU, cU, AU;
        const FU = null !== (XU = null === (zU = UU.info) || void 0 === zU ? void 0 : zU.vendor) && void 0 !== XU ? XU : "";
        return "windows" === (0, NU.getOperatingSystem)() && "" !== FU && "intel" !== (0, NU.normaliseGpuVendor)(FU) ? null : ((0, NU.seedGpuVendor)(FU), MU((0, yU.i)(), (0, QU.d)(FU, null !== (cU = null === (AU = UU.info) || void 0 === AU ? void 0 : AU.architecture) && void 0 !== cU ? cU : ""), IU.siteUsed))
      }))
    }

    function VU() {
      var UU;
      return {
        gpu: null !== (UU = navigator.gpu) && void 0 !== UU ? UU : null,
        webgl2: eU.e,
        webgl1: () => function(UU) {
          let XU, zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RU.d;
          try {
            XU = UU.getContext("webgl")
          } catch {
            XU = null
          }
          if (null === XU) return [qU];
          const cU = [];
          try {
            for (const yU of zU.extensions) null === XU.getExtension(yU) && cU.push(yU);
            for (const [yU, QU] of Object.entries(zU.limits)) {
              const UU = XU[yU],
                zU = "number" === typeof UU ? XU.getParameter(UU) : null;
              ("number" !== typeof zU || zU < QU) && cU.push(`limit:${yU}`)
            }
            const UU = XU.getShaderPrecisionFormat(XU.VERTEX_SHADER, XU.HIGH_FLOAT);
            (null === UU || UU.precision < zU.vertexHighFloatBits) && cU.push("precision:vertex_high_float")
          } catch {
            cU.push(OU)
          }
          try {
            var yU;
            null === (yU = XU.getExtension("WEBGL_lose_context")) || void 0 === yU || yU.loseContext()
          } catch {}
          return cU
        }(document.createElement("canvas")),
        offAfterLoss: UU => nU((() => UU ? (0, tU.M)() : AU.e.isWebGpuOffAfterLoss())),
        oldIntelDriver: UU => nU((() => (0, gU.e)(UU))),
        intelGen9: UU => nU((() => (0, gU.m)(UU))),
        storeIntelGen9Verdict: UU => {
          aU.k.setItem(gU.A, UU)
        },
        gpuClassWebGlArm: vU,
        storeGpuClassVerdict: UU => {
          aU.k.setItem(gU.x, UU)
        },
        gpuClassOnWebGl: UU => (0, kU.e)(UU),
        webGlDefaultFamily: UU => HU.has((0, QU.d)(UU.vendor, UU.architecture)),
        storeWebGlDefaultFamilyVerdict: UU => {
          aU.k.setItem(gU.I, UU)
        },
        override: () => sU(),
        claimed: () => mU((0, oU.j)()),
        webGpuSetting: () => {
          const UU = aU.k.getItem(cU.vc);
          return "boolean" === typeof UU ? UU : null
        },
        heldBack: () => kU.h,
        storeHoldbackSpared: UU => {
          aU.k.setItem(gU.v, UU)
        },
        intelGen9OnWebGl: () => kU.j,
        Fp: () => nU((() => (0, YU.d)(NU.featureFlags.settings.canUseShaderPacks))),
        windows: () => nU((() => "windows" === (0, NU.getOperatingSystem)())),
        defaultCompatibility: LU.b
      }
    }

    function sU() {
      let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, FU.q)("render") && "webgl1" === (0, FU.p)("renderer")) return "webgl1";
      const XU = [() => new URLSearchParams(window.location.search).get(EU.c), () => aU.k.getItem(EU.g), () => {
        const XU = localStorage.getItem(wU);
        return null !== XU && UU && localStorage.removeItem(wU), "1" === XU ? "webgl2" : null
      }];
      for (const zU of XU) {
        let UU = null;
        try {
          UU = mU(zU())
        } catch {}
        if (null !== UU) return UU
      }
      return null
    }

    function nU(UU) {
      try {
        return UU()
      } catch {
        return !1
      }
    }

    function mU(UU) {
      return "lite" === UU ? "webgpu" : "webgl2" === UU || "babylon" === UU ? "webgl" : null
    }

    function lU(UU) {
      return "none" === UU || "compatibility_mode" === UU
    }
    async function xU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VU();
      const XU = await async function(UU) {
        const XU = jU(UU),
          {
            source: zU
          } = XU,
          cU = !XU.asked,
          yU = "gpu" in XU && XU.heldBack,
          AU = function(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return yU && !lU(UU) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: zU
            } : {
              reason: UU,
              adapter: XU,
              source: zU
            }
          };
        if (!("gpu" in XU)) return AU(XU.refused);
        let FU;
        try {
          FU = await (0, PU.l)((0, BU.m)(XU.gpu, {
            compatibility: JU(UU, XU)
          }), kX, `requestAdapter didn't settle in ${kX/1e3} s`)
        } catch {
          return AU("adapter_error")
        }
        if ("string" === typeof FU) return AU(FU);
        const {
          adapter: oU,
          compatibility: DU
        } = FU, EU = (0, BU.d)(oU);
        if ((0, BU.i)(oU)) return AU("software_adapter", EU);
        const YU = UU.windows() && function(UU) {
          return iU.has((0, QU.d)(UU.vendor, UU.architecture))
        }(EU);
        if (UU.storeHoldbackSpared(YU), yU && !YU) return AU("webgl_holdback");
        const NU = UU.intelGen9(oU);
        UU.storeIntelGen9Verdict(NU);
        const IU = NU ? null : UU.gpuClassWebGlArm(oU);
        UU.storeGpuClassVerdict(null !== IU && void 0 !== IU && IU);
        const pU = UU.webGlDefaultFamily(EU);
        if (UU.storeWebGlDefaultFamilyVerdict(pU), cU && UU.oldIntelDriver(oU)) return AU("old_intel_driver", EU);
        if ("default" === zU && NU && UU.intelGen9OnWebGl()) return AU("intel_gen9", EU);
        if ("default" === zU && null !== IU && UU.gpuClassOnWebGl(IU)) return AU("gpu_class_webgl", EU);
        if ("default" === zU && pU) return AU("gpu_wasm_arm", EU);
        return AU(DU ? "compatibility_mode" : "none", EU)
      }(UU);
      if (lU(XU.reason)) return {
        backend: "webgpu",
        ...XU
      };
      if ("webgl1" !== UU.override() && UU.webgl2()) return {
        backend: "webgl",
        ...XU
      };
      const zU = UU.webgl1();
      return 0 === zU.length ? {
        backend: "webgl1",
        ...XU
      } : {
        missing: zU
      }
    }

    function JU(UU, XU) {
      let {
        source: zU,
        asked: cU
      } = XU;
      return cU || "default" === zU ? (0, LU.g)(cU, UU.defaultCompatibility) : void 0
    }

    function jU(UU) {
      const XU = UU.override(),
        zU = UU.webGpuSetting(),
        cU = null === XU && !0 !== zU && UU.Fp(),
        yU = null !== XU || null !== zU || cU ? null : UU.claimed(),
        QU = null !== XU ? "override" : !0 === zU ? "setting" : cU ? "pack" : !1 === zU ? "setting" : null !== yU ? "claim" : "default",
        AU = function(UU) {
          return "override" === UU || "setting" === UU
        }(QU);
      if ("webgl" === XU || "webgl1" === XU || "webgl" === yU || "setting" === QU && !1 === zU) return {
        source: QU,
        asked: AU,
        refused: "not_requested"
      };
      if (!UU.gpu) return {
        source: QU,
        asked: AU,
        refused: "no_webgpu_api"
      };
      const FU = "default" === QU && UU.heldBack();
      return FU && !UU.windows() ? {
        source: QU,
        asked: AU,
        refused: "webgl_holdback"
      } : !AU && UU.offAfterLoss("pack" === QU) ? {
        source: QU,
        asked: AU,
        refused: FU ? "webgl_holdback" : "off_after_loss"
      } : {
        source: QU,
        asked: AU,
        heldBack: FU,
        gpu: UU.gpu
      }
    }

    function KU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...VU(),
          override: () => sU(!1)
        },
        XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NU.isWebKit,
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uU;
      try {
        if (!XU()) return !1;
        const cU = jU(UU);
        if (!("gpu" in cU) || cU.heldBack) return !1;
        const yU = "default" === cU.source ? MU(zU(), "apple", IU.siteUsed) : null;
        return null === yU || !UU.gpuClassOnWebGl(yU)
      } catch (cU) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", cU), !1
      }
    }
    let bU = !1;
    async function TU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VU();
      if (null === UU) return null;
      const zU = await xU(XU);
      return bU = !("missing" in zU) && "webgpu" === zU.backend && "claim" === zU.source, "missing" in zU ? zU : {
        ...zU,
        load: UU[zU.backend]
      }
    }
    async function hU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VU().gpu,
        cU = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== UU.backend) return !1;
      const yU = FX(UU, XU, "indirectDraws", "off", "on");
      if (null !== yU) return yU;
      if (null !== UU.adapter && (0, gU.n)(UU.adapter, cU)) return !0;
      if (null === zU) return !1;
      try {
        var QU;
        const UU = await (0, PU.l)(zU.requestAdapter({
          powerPreference: "low-power"
        }).then((async UU => (null !== UU && await (0, BU.h)(UU), UU))), kX, `the low-power requestAdapter didn't settle in ${kX/1e3} s`);
        return (0, gU.n)(null !== (QU = null === UU || void 0 === UU ? void 0 : UU.info) && void 0 !== QU ? QU : {}, cU)
      } catch (AU) {
        return AU instanceof PU.g
      }
    }

    function UX(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, NU.pageOperatingSystem)();
      if ("webgpu" !== UU.backend) return !1;
      const yU = FX(UU, XU, "terrainFetch", "texture", "storage");
      return null !== yU ? yU : null !== UU.adapter && ((0, gU.h)(UU.adapter, zU) || (0, gU.g)(UU.adapter, cU))
    }

    function XX(UU, XU) {
      if ("webgpu" !== UU.backend) return !1;
      const zU = FX(UU, XU, "skyOrder", "early", "last");
      return null !== zU ? zU : null !== UU.adapter && (0, QU.d)(UU.adapter.vendor, UU.adapter.architecture) === fU
    }

    function zX(UU, XU) {
      if ("webgpu" !== UU.backend) return !1;
      const zU = FX(UU, XU, "uploadCopies", "off", "on");
      return null !== zU ? zU : null !== UU.adapter && "powervr_rogue" === (0, QU.d)(UU.adapter.vendor, UU.adapter.architecture)
    }

    function cX(UU, XU, zU) {
      if ("webgpu" !== UU.backend) return !1;
      const cU = FX(UU, XU, "sceneDepth", "off", "on");
      return null !== cU ? cU : null !== UU.adapter && (0, gU.l)(UU.adapter, zU)
    }

    function yX(UU, XU) {
      return "webgl" === UU.backend ? FX(UU, XU, "instancedTerrain", "1", "0") : null
    }

    function QX(UU, XU) {
      return "webgpu" !== UU.backend || XU && (null === UU.adapter || !(0, tU.P)(UU.adapter))
    }

    function AX(UU, XU, zU, cU) {
      const yU = new URLSearchParams(XU).get(zU),
        QU = null !== yU && void 0 !== yU ? yU : null === UU ? null : (0, oU.g)(zU);
      return null !== QU && cU(QU) ? (bU ||= null === yU && "webgpu" === (null === UU || void 0 === UU ? void 0 : UU.backend), QU) : null
    }

    function FX(UU, XU, zU, cU, yU) {
      const QU = AX(UU, XU, zU, (UU => UU === cU || UU === yU));
      return null === QU ? null : QU === cU
    }

    function oX(UU) {
      return null !== UU && "missing" in UU
    }

    function DX(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !NX(),
        zU = arguments.length > 2 ? arguments[2] : void 0;
      return XU ? function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU.e,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const cU = "start_failed" === UU || "pipeline_failed" === UU,
            yU = (0, CU.h)(UU, zU),
            QU = XU.turnOffWebGpuAfterDeviceLoss(cU ? "visible" : (0, tU.n)((0, pU.i)()), cU, yU);
          return bU && (0, oU.s)("webgpuLoss"), XU.isWebGpuOffAfterLoss() && "webgpu" === mU(aU.k.getItem(EU.g)) && aU.k.removeItem(EU.g), (0, FU.q)("webgpuloss") && (0, DU.b)((XU => {
            var zU;
            XU.noteWebGpuLoss("wasm", QU ? UU : `${UU}, which storage didn't keep`, null !== (zU = yU.message) && void 0 !== zU ? zU : null)
          })), QU
        } catch {
          return !1
        }
      }(UU, AU.e, zU) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const EX = "framePacing";

    function YX(UU, XU) {
      const zU = AX("webgpu" === (null === XU || void 0 === XU ? void 0 : XU.backend) ? XU : null, UU, EX, (UU => /^\d{1,9}$/.test(UU)));
      return null === zU ? void 0 : Number(zU)
    }

    function NX() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === mU(new URLSearchParams(UU).get(EU.c))
      } catch {
        return !1
      }
    }

    function IX(UU) {
      return !!pX(UU) || UU instanceof Error && !(UU instanceof WebAssembly.RuntimeError) && UU.message.startsWith(`${ZU.h.RenderSurfaceUnusable}:`)
    }

    function pX(UU) {
      const {
        name: XU,
        message: zU
      } = null !== UU && void 0 !== UU ? UU : {};
      return "InvalidStateError" === XU && "string" === typeof zU && zU.startsWith("GPUDevice.")
    }

    function aX(UU) {
      const XU = UU;
      return "function" === typeof XU.lcU && "function" === typeof XU.xcU ? XU : null
    }

    function tX(UU) {
      return "function" === typeof UU.Xg ? UU : null
    }
    const gX = "openRenderer";
    const kX = 5e3,
      GX = 15e3;

    function BX(UU, XU, zU, cU, yU, QU) {
      return (0, PU.l)(function(UU, XU, zU, cU, yU, QU) {
        const AU = (0, WU.g)(UU, XU, (() => UU.Xg(zU, cU, yU, QU.indirectHangs, QU.storagePullBreaks, QU.splitPassBreaks, QU.earlySky, QU.instancedTerrain, QU.cellLight, QU.framesAhead, QU.webGpuRestores, QU.bufferCopiesCrash))),
          {
            firstVertex: FU
          } = QU;
        return void 0 === FU ? AU : AU.then((UU => ((0, dU.c)(zU, FU), UU)))
      }(UU, XU, zU, cU, yU, QU), GX, `${ZU.h.RenderSurfaceUnusable}: the renderer didn't open in ${GX/1e3} s`, RX)
    }
    async function ZX(UU, XU, zU, cU, yU, QU) {
      if ("function" !== typeof UU.hAU) throw new Error("this core has no set_renderer");
      const AU = await BX(XU, gX, zU, yU, cU, QU);
      try {
        UU.hAU(AU)
      } catch (FU) {
        throw RX(AU), FU
      }
    }

    function RX(UU) {
      try {
        UU.free()
      } catch {}
    }
  },
  41919: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    const cU = {
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
  41848: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => pU,
      c: () => aU,
      e: () => NU,
      i: () => YU
    });
    const cU = 2e3,
      yU = "unavailable";
    let QU = () => Promise.resolve().then((() => zU(1842))),
      AU = null,
      FU = null,
      oU = DU();

    function DU() {
      let UU = () => {};
      return {
        promise: new Promise((XU => {
          UU = () => {
            XU(null)
          }
        })),
        resolve: UU
      }
    }

    function EU() {
      if (null === AU) {
        const UU = QU();
        AU = UU, UU.then((XU => {
          AU === UU && (FU = XU)
        }), (() => {
          AU === UU && (AU = null)
        }))
      }
      return AU
    }

    function YU() {
      EU().catch((() => {}))
    }

    function NU() {
      oU.resolve()
    }

    function IU(UU, XU, zU, cU) {
      if (null === UU) return {
        errorKind: XU,
        fingerprint: yU,
        dedupe: `${XU}|${cU}`
      };
      const {
        fingerprint: QU
      } = UU.clientErrorKey(XU, zU, cU);
      return {
        errorKind: XU,
        fingerprint: QU,
        dedupe: QU
      }
    }

    function pU(UU, XU, zU, cU) {
      return null === FU ? cU ? (YU(), IU(null, UU, XU, zU)) : null : IU(FU, UU, XU, zU)
    }
    async function aU(UU, XU, zU) {
      let yU;
      const QU = new Promise((UU => {
        yU = setTimeout((() => {
          UU(null)
        }), cU)
      }));
      try {
        return IU(await Promise.race([EU(), QU, oU.promise]), UU, XU, zU)
      } catch {
        return IU(null, UU, XU, zU)
      } finally {
        clearTimeout(yU)
      }
    }
  },
  41840: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      BUILT_IN_ANIMATIONS_SITE: () => bU,
      CORE_ERRORS_SITE: () => vU,
      EVENT_OVERFLOW_SITE: () => KU,
      FIRST_VIEW_SITE: () => UX,
      JOIN_SITE: () => sU,
      LEAVE_SITE: () => nU,
      MAIN_THREAD_SITE: () => XX,
      MODEL_FEED_SITE: () => mU,
      MODEL_POOL_SITE: () => lU,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => QX,
      NON_FATAL_REPORTS_PER_SESSION: () => PX,
      PREVIEW_ANIMATIONS_SITE: () => jU,
      RENDER_RELOAD_SITE: () => JU,
      REQUEST_DEVICE_SITE: () => zX,
      TEXTURE_NAMES_SITE: () => xU,
      TEXTURE_PACK_FEED_SITE: () => TU,
      TEXTURE_PACK_SWAP_SITE: () => hU,
      TurnstilePageError: () => Yz,
      WASM_LOAD_SITE: () => VU,
      countRenderLost: () => mz,
      crashError: () => wX,
      crashReportsSettled: () => MX,
      deviceLossFields: () => mX,
      deviceLossWords: () => vz,
      flushCrashReports: () => iX,
      joinFailureCode: () => Nz,
      loadRecoveryCode: () => Qz,
      lokiTransport: () => oX,
      modelFailureCode: () => Gz,
      readTrap: () => JX,
      renderLoss: () => nz,
      renderReloadMessage: () => Vz,
      reportCoreErrors: () => sX,
      reportCountedLoadFallback: () => Dz,
      reportCrash: () => qX,
      reportDataLoadFailure: () => bz,
      reportDisconnect: () => gz,
      reportDroppedRequiredLimits: () => Fz,
      reportEventOverflow: () => Lz,
      reportFirstViewNoTerrain: () => Sz,
      reportLightFault: () => wz,
      reportLoadRecovery: () => Az,
      reportMainStall: () => rz,
      reportMemoryShed: () => Oz,
      reportModelFailure: () => Bz,
      reportModelPoolFailure: () => Zz,
      reportModelsModuleRetry: () => Rz,
      reportNoBackendRetry: () => cz,
      reportPageJoinFailure: () => pz,
      reportReconnectGaveUp: () => kz,
      reportRenderRecovery: () => rX,
      reportRenderReload: () => Jz,
      reportReplayFault: () => fz,
      reportStaleBuildReload: () => hz,
      reportStoppedCore: () => TX,
      reportTerrainTextureFailure: () => jz,
      reportTexturePackFeedLoadFailure: () => Wz,
      reportTexturePackKeptOut: () => dz,
      reportUnstreamedCoreLoad: () => Ez,
      reportUnsupportedFallback: () => zz,
      reportUnusedSeat: () => tz,
      reportWorkerLost: () => ez,
      reportWorkerStartTimeout: () => uz,
      reportWorldgenGaveUp: () => qz,
      reportWorldgenLoadFailure: () => Pz,
      reportWorldgenWorkerLost: () => Cz,
      resetCrashReports: () => vX,
      setCrashAdPreload: () => gX,
      setCrashBackend: () => tX,
      setCrashScreen: () => IX,
      setCrashTransport: () => YX,
      showCrash: () => bX,
      showJoinFailure: () => Iz,
      showUnsupported: () => Uz,
      unknownSkyWords: () => VX
    });
    var cU = zU(1079),
      yU = zU(1376),
      QU = zU(1360),
      AU = zU(1325),
      FU = zU(281),
      oU = zU(1850),
      DU = zU(4704),
      EU = zU(41848),
      YU = zU(5318),
      NU = zU(41857),
      IU = zU(34719),
      pU = zU(3295),
      aU = zU(34715),
      tU = zU(39586),
      gU = zU(142),
      kU = zU(134),
      GU = zU(3304),
      BU = zU(37201),
      ZU = zU(1877),
      RU = zU(41863),
      PU = zU(41660),
      WU = zU(41750),
      dU = zU(41752),
      LU = zU(37197),
      eU = zU(3169),
      CU = zU(3176),
      wU = zU(41877),
      qU = zU(41894),
      OU = zU(41902),
      SU = zU(37564),
      rU = zU(3596),
      uU = zU(36972),
      fU = zU(41808),
      iU = zU(36981),
      HU = zU(41927);
    const MU = "[bloxd-wasm-client]",
      vU = "coreErrors",
      VU = "wasmLoad",
      sU = "join",
      nU = "leave",
      mU = "modelFeed",
      lU = "modelWorkerPool",
      xU = "textureNames",
      JU = "renderReload",
      jU = "previewAnimations",
      KU = "eventOverflow",
      bU = "builtInAnimations",
      TU = "texturePackFeed",
      hU = "texturePackSwap",
      UX = "firstView",
      XX = "mainThread",
      zX = "requestDevice",
      cX = 300,
      yX = 64,
      QX = 8;
    let AX = 0;
    const FX = new Set,
      oX = (UU, XU) => {
        const zU = kX[UU.kind],
          cU = {
            backend: pX,
            adPreload: aX
          };
        if (null === zU) return void DX(UU, XU, cU, null);
        const yU = (0, EU.b)(zU, UU.message, UU.code, UU.fatal);
        null === yU ? fX("Loki", (async () => {
          DX(UU, XU, cU, await (0, EU.c)(zU, UU.message, UU.code))
        })) : DX(UU, XU, cU, yU)
      };

    function DX(UU, XU, zU, cU) {
      let {
        backend: yU,
        adPreload: QU
      } = zU;
      const {
        kind: FU,
        code: DU,
        site: EU,
        fatal: YU,
        details: NU
      } = UU;
      if (!YU)
        if (null === cU || (0, oU.e)(cU.errorKind) || FX.has(cU.dedupe)) {
          if (AX >= QX) return;
          AX++
        } else FX.add(cU.dedupe);
      const IU = {
        ...NU,
        kind: FU,
        code: DU,
        site: EU,
        fatal: String(YU),
        backend: yU
      };
      QU && (IU.adPreload = "true"), null !== cU && (IU.errorKind = cU.errorKind, IU.fingerprint = cU.fingerprint), XU instanceof Error && "string" === typeof XU.stack && (IU.causeStack = XU.stack.slice(0, 2e3)), (0, AU.Wa)(wX(UU, XU), IU)
    }
    let EX = oX;

    function YX(UU) {
      const XU = EX;
      return EX = UU, XU
    }
    let NX = () => {};

    function IX(UU) {
      const XU = NX;
      return NX = UU, XU
    }
    let pX = "unpicked",
      aX = !1;

    function tX(UU) {
      pX = UU
    }

    function gX(UU) {
      aX = UU
    }
    const kX = {
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
      GX = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      BX = new Set(["unstreamedLoad"]),
      ZX = new Set(["linkCensus", "linksReadAfterView"]);
    let RX = !1;
    const PX = 20,
      WX = new Map;
    let dX = 0,
      LX = 0;
    const eX = new Set,
      CX = new Set;

    function wX(UU, XU) {
      const zU = Object.assign(new Error(`${UU.code}: ${UU.message}`), {
        name: "WasmClientCrash",
        cause: null !== XU && void 0 !== XU ? XU : void 0
      });
      return XU instanceof Error && XU.stack && (zU.stack = XU.stack), zU
    }

    function qX(UU) {
      var XU, cU;
      const {
        kind: yU,
        code: QU,
        site: AU,
        fatal: FU,
        message: oU,
        error: DU
      } = UU, EU = !1 !== UU.toTransport && !BX.has(yU), YU = !FU && EU && !ZX.has(yU), NU = {
        kind: yU,
        code: QU,
        site: AU,
        fatal: FU,
        message: oU,
        details: null !== (XU = UU.details) && void 0 !== XU ? XU : {}
      }, IU = `${QU}@${AU}${void 0===UU.instance?"":`#${UU.instance}`}${FU?"!":""}`, pU = (null !== (cU = WX.get(IU)) && void 0 !== cU ? cU : 0) + 1;
      if (WX.set(IU, pU), void 0 !== UU.countAs && 1 === pU && SX(UU.countAs), pU > 1 ? 0 === (pU & pU - 1) && uX((() => {
          console.warn(`${MU} ${QU} at ${AU} reported ${pU} times`)
        })) : YU && dX >= PX ? uX((() => {
          console.warn(`${MU} ${yU} ${QU} at ${AU}: ${oU} (not sent: the session's ${PX} went)`, NU.details, null !== DU && void 0 !== DU ? DU : "")
        })) : (YU && dX++, function(UU, XU, cU, yU) {
          var QU, AU;
          const {
            kind: FU,
            code: oU,
            site: DU,
            fatal: EU,
            message: YU,
            details: NU
          } = UU;
          uX((() => {
            (EU ? console.error : console.warn)(`${MU} ${FU} ${oU} at ${DU}: ${YU}`, NU, null !== XU && void 0 !== XU ? XU : "")
          }));
          const IU = GX[FU],
            pU = null !== (QU = null !== (AU = kX[FU]) && void 0 !== AU ? AU : IU) && void 0 !== QU ? QU : null;
          yU || null === pU || OX((async () => {
            const {
              reportCappedWasmFailure: XU,
              reportUncappedWasmFailure: cU,
              reportWasmFailure: yU
            } = await zU.e(208).then((() => zU(34708))), QU = ZX.has(FU) ? cU : void 0 === IU ? yU : XU, AU = function(UU) {
              let {
                kind: XU,
                site: zU,
                fatal: cU,
                details: yU
              } = UU;
              if ("crash" !== XU) return;
              return {
                ...yU,
                site: zU,
                fatal: String(cU)
              }
            }(UU);
            void 0 === AU ? QU(pU, YU, oU) : QU(pU, YU, oU, AU)
          }));
          cU && uX((() => {
            EX(UU, XU)
          }))
        }(NU, DU, EU, void 0 !== UU.countAs)), FU) {
        var aU;
        const XU = null !== (aU = UU.screen) && void 0 !== aU ? aU : {
          text: (0, SU.i)(NU, !0),
          reload: !0
        };
        uX((() => {
          NX(XU)
        }))
      }
      return NU
    }

    function OX(UU) {
      fX("counts", (async () => {
        const {
          peekVisitSessionId: XU
        } = await Promise.resolve().then((() => zU(702)));
        null !== XU() && (await UU(), RX = !0)
      }))
    }

    function SX(UU) {
      eX.has(UU.errorKind) || (eX.add(UU.errorKind), OX((async () => {
        const {
          reportClientError: XU
        } = await Promise.resolve().then((() => zU(1835)));
        XU(UU.errorKind, UU.error, UU.code, !0, void 0, UU.fields)
      })))
    }

    function rX(UU, XU) {
      fX("render_lost", (async () => {
        const [{
          reportClientError: cU
        }, {
          CAPPED_COUNTS_VISIT_CAP: yU
        }] = await Promise.all([Promise.resolve().then((() => zU(1835))), zU.e(208).then((() => zU(34708)))]);
        cU("render_lost", XU, UU, !0, yU)
      }))
    }

    function uX(UU) {
      try {
        UU()
      } catch (XU) {
        try {
          console.warn(`${MU} could not send a report`, XU)
        } catch {}
      }
    }

    function fX(UU, XU) {
      try {
        const zU = XU().catch((XU => {
          console.warn(`${MU} could not send the report to ${UU}`, XU)
        })).finally((() => {
          CX.delete(zU)
        }));
        CX.add(zU)
      } catch (zU) {
        console.warn(`${MU} could not send the report to ${UU}`, zU)
      }
    }
    async function iX(UU) {
      let XU;
      (0, EU.e)();
      const zU = new Promise((zU => {
        XU = setTimeout(zU, UU)
      }));
      await Promise.race([HX(), zU]), clearTimeout(XU)
    }
    async function HX() {
      if (await Promise.allSettled([...CX]), RX) try {
        const {
          flushClientAnalyticsEvents: UU
        } = await Promise.resolve().then((() => zU(1537)));
        await UU()
      } catch (UU) {
        console.warn(`${MU} could not send the counts`, UU)
      }
    }
    async function MX() {
      for (; CX.size > 0;) await Promise.allSettled([...CX])
    }

    function vX() {
      WX.clear(), dX = 0, RX = !1, AX = 0, FX.clear(), LX = 0, eX.clear(), (0, NU.w)()
    }

    function VX(UU) {
      const XU = "object" === typeof UU && null !== UU ? UU.type : UU;
      return "string" !== typeof XU ? "sky not named" : `sky ${JSON.stringify(Array.from(XU).slice(0,yX).join(""))}`
    }

    function sX(UU, XU, zU, cU) {
      LX += XU;
      for (const {
          code: FU,
          detail: oU
        }
        of UU) {
        var yU, QU, AU;
        const UU = (0, YU.ke)(FU),
          XU = (0, NU.d)(FU, oU),
          DU = null === cU || void 0 === cU ? void 0 : cU(FU, oU),
          EU = void 0 !== (null === XU || void 0 === XU ? void 0 : XU.gpuDetails),
          pU = EU ? null === (yU = (0, kU.A)()) || void 0 === yU ? void 0 : yU.renderer : void 0,
          aU = EU ? ` ${(0,NU.n)()}` : "",
          tU = Array.from([pU && `gpu ${(0,IU.b)(pU)}`, DU].filter(Boolean).join("; ")).slice(0, cX).join(""),
          gU = `core error ${UU}${null!==(QU=null===XU||void 0===XU?void 0:XU.words)&&void 0!==QU?QU:""}${aU}${tU?`: ${tU}`:""}`,
          GU = {
            errorCode: String(FU),
            detail: String(oU),
            droppedBefore: String(LX),
            wasmBuild: zU.wasm,
            clientVersion: zU.client,
            ...null === XU || void 0 === XU ? void 0 : XU.gpuDetails,
            ...mX(FU, oU)
          };
        null !== XU && (0, NU.s)(XU) ? uX((() => {
          console.warn(`${MU} coreError CORE-${UU}: ${gU} (not sent: the session's render warnings of its kind went)`, GU)
        })) : nX(FU) ? uX((() => {
          console.warn(`${MU} coreError CORE-${UU}: ${gU} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, GU)
        })) : qX({
          kind: xX(FU, oU),
          code: `CORE-${UU}`,
          site: vU,
          fatal: !1,
          message: gU,
          details: GU,
          instance: null !== (AU = null === XU || void 0 === XU ? void 0 : XU.instance) && void 0 !== AU ? AU : lX(FU, oU)
        })
      }
    }

    function nX(UU) {
      if (UU !== YU.K.AudioUnknownSound && UU !== YU.K.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: XU,
        lobbyName: zU
      } = (0, QU.b)();
      return null !== XU && (!!(0, cU.l)(XU) || UU === YU.K.AudioUnknownSound && (0, yU.g)(XU, zU))
    }

    function mX(UU, XU) {
      if (UU !== YU.K.RenderDeviceLost) return;
      const zU = XU >>> YU.Q.LINKS_IN_FLIGHT_SHIFT & YU.Q.LINKS_IN_FLIGHT_MAX,
        cU = XU >>> YU.Q.OLDEST_LINK_SHIFT & YU.Q.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(zU),
        oldestLinkMs: String(cU * YU.Q.OLDEST_LINK_UNIT_MS)
      }
    }

    function lX(UU, XU) {
      return UU === YU.K.RenderDeviceLost && 0 !== (XU & YU.Q.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function xX(UU, XU) {
      return UU === YU.K.JobsHeapGaveUp ? "meshHeap" : (0, NU.j)(UU, XU) ? "linksReadAfterView" : (0, NU.f)(UU, XU) ? "linkCensus" : "coreError"
    }

    function JX(UU) {
      return (0, uU.i)(UU instanceof fU.c ? UU.trap : UU, eU.G, eU.jb)
    }
    const jX = "declined=js";

    function KX(UU) {
      return UU ? {
        labels: [jX],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function bX(UU, XU, zU) {
      return hX(UU, XU, zU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function TX(UU, XU, zU) {
      return hX(UU, XU, zU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function hX(UU, XU, zU, cU, yU) {
      let {
        memoryDetails: QU = {},
        declined: AU = !1,
        memoryStep: FU
      } = cU;
      const {
        code: oU,
        details: DU,
        message: EU
      } = (0, RU.L)(UU, XU), YU = [];
      Object.assign(DU, (0, iU.h)(UU.error)), null !== zU && (DU.trapKind = zU.kind, null !== zU.panic && (DU.panic = (0, uU.e)(zU.panic)), zU.refusedBytes > 0 && (DU.refusedAllocation = String(zU.refusedBytes)), YU.push((0, uU.l)(zU.kind, zU.refusedBytes))), void 0 !== FU && YU.push(`memory=${FU}`);
      const NU = KX(AU);
      return qX({
        kind: "crash",
        code: oU,
        site: UU.site,
        fatal: yU,
        message: [...YU, ...NU.labels, EU].join("; "),
        details: {
          ...DU,
          ...NU.details,
          ...QU,
          ...void 0 === FU ? {} : {
            memoryStep: FU
          }
        },
        error: UU.error
      })
    }

    function Uz(UU, XU, zU) {
      return qX({
        kind: "unsupported",
        code: XU,
        site: VU,
        fatal: !0,
        message: zU,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: UU,
          status: XU
        },
        screen: {
          text: (0, SU.v)(UU),
          reload: "download" === UU
        }
      })
    }
    const Xz = {
      unsupported: "unsupported_js_fallback",
      blockedAfterLoss: "blocked_after_loss",
      noContext: "no_context_js_fallback"
    };

    function zz(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return qX({
        kind: "unsupportedFallback",
        code: Xz[XU],
        site: VU,
        fatal: !1,
        message: zU,
        details: {
          ...cU,
          cause: UU,
          status: "unsupported",
          decline: XU,
          fallback: "js"
        }
      })
    }

    function cz(UU, XU, zU) {
      return qX({
        kind: "recovered",
        code: "reprobed" === UU ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: VU,
        fatal: !1,
        message: zU,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: XU,
          step: UU
        }
      })
    }
    const yz = 9;

    function Qz(UU) {
      const XU = "recovered" === UU.outcome ? "recovered" : "gave_up",
        zU = "load" === UU.step ? `wasm_load_${XU}${UU.oom?"_oom":""}` : `no_context_${XU}`;
      return "recovered" === UU.outcome ? `${zU}_t${Math.min(UU.tries,yz)}` : "load" === UU.step ? `${zU}_${UU.stage}` : zU
    }

    function Az(UU) {
      const {
        step: XU,
        outcome: zU,
        tries: cU,
        detail: yU,
        details: QU = {}
      } = UU, AU = "load" === UU.step ? {
        stage: UU.stage,
        ...UU.oom ? {
          oom: "true"
        } : {}
      } : {};
      return qX({
        kind: "recovered",
        code: Qz(UU),
        site: VU,
        fatal: !1,
        message: yU,
        details: {
          ...QU,
          step: XU,
          outcome: zU,
          tries: String(cU),
          ...AU
        }
      })
    }

    function Fz(UU) {
      return qX({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: zX,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: UU.join(",")
        }
      })
    }
    const oz = "reload=wasm";

    function Dz(UU, XU, zU, cU) {
      const yU = KX("declined" === cU),
        QU = "wasmReload" === cU ? [oz] : yU.labels;
      return qX({
        kind: "unsupported",
        code: XU,
        site: VU,
        fatal: !1,
        message: [...QU, zU].join("; "),
        details: {
          cause: UU,
          status: XU,
          fallback: "wasmReload" === cU ? "wasmReload" : "js",
          ...yU.details
        }
      })
    }

    function Ez() {
      const {
        code: UU,
        message: XU
      } = rU.b;
      return qX({
        kind: "unstreamedLoad",
        code: UU,
        site: VU,
        fatal: !1,
        message: XU
      })
    }
    class Yz extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Nz(UU) {
      return UU instanceof WU.m ? 0 === UU.code ? "JOIN-matchmake" : `JOIN-${UU.code}` : UU instanceof WU.c ? 0 === UU.code ? `JOIN-${UU.stage}` : `JOIN-${UU.stage}-${UU.code}` : UU instanceof PU.b ? "JOIN-gameCode" : UU instanceof Yz ? "JOIN-turnstilePage" : UU instanceof WU.s ? "JOIN-trafficCheck" : UU instanceof BU.c ? "JOIN-timeout" : "JOIN-network"
    }

    function Iz(UU, XU) {
      const zU = (0, iU.l)(UU),
        cU = {
          wasmBuild: XU.wasm,
          clientVersion: XU.client
        },
        yU = UU instanceof Yz ? {
          text: (0, SU.r)(),
          reload: !1
        } : void 0,
        QU = (0, dU.d)(UU),
        AU = "expected" !== QU;
      return qX({
        kind: "join",
        code: Nz(UU),
        site: sU,
        fatal: !0,
        message: zU,
        details: cU,
        error: UU,
        screen: yU,
        toTransport: AU,
        instance: QU
      })
    }

    function pz(UU, XU, zU) {
      var cU;
      const yU = (0, dU.d)(UU),
        QU = {
          cause: (UU instanceof WU.c || UU instanceof WU.m) && null !== (cU = UU.serverText) && void 0 !== cU ? cU : "",
          sinceJoinStart: (0, GU.b)(zU.sinceJoinStartMs),
          game: zU.game,
          ...(0, GU.j)(),
          wasmBuild: XU.wasm,
          clientVersion: XU.client
        };
      return qX({
        kind: "pageJoin",
        code: Nz(UU),
        site: sU,
        fatal: !1,
        message: (0, iU.l)(UU),
        details: QU,
        error: UU,
        toTransport: "unrecognised" === yU,
        instance: yU
      })
    }
    const az = {
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

    function tz(UU, XU) {
      let {
        unused: zU,
        answered: cU,
        heldMs: yU
      } = UU;
      const {
        code: QU,
        message: AU
      } = az[zU], FU = {
        unused: zU,
        answered: String(cU),
        heldMs: String(yU),
        wasmBuild: XU.wasm,
        clientVersion: XU.client
      };
      return qX({
        kind: "seat",
        code: QU,
        site: sU,
        fatal: !1,
        message: AU,
        details: FU
      })
    }

    function gz(UU, XU, zU) {
      var cU;
      let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (cU = UU.name) && void 0 !== cU ? cU : String(UU.code);
      const QU = {
          closeCode: String(UU.code),
          recognised: String(null !== UU.name),
          closeReason: zU.closeReason,
          sinceJoined: (0, GU.b)(zU.sinceJoinedMs),
          game: zU.game,
          ...(0, GU.j)(),
          wasmBuild: XU.wasm,
          clientVersion: XU.client
        },
        AU = null === UU.name && !(0, GU.c)(UU.code);
      return qX({
        kind: "disconnect",
        code: yU,
        site: nU,
        fatal: !1,
        message: "Left room",
        details: QU,
        toTransport: AU
      })
    }

    function kz(UU, XU) {
      const zU = {
        ...(0, pU.m)(UU),
        wasmBuild: XU.wasm,
        clientVersion: XU.client
      };
      return qX({
        kind: "disconnect",
        code: `reconnect-${UU.reason}`,
        site: sU,
        fatal: !1,
        message: "Reconnect failed",
        details: zU
      })
    }

    function Gz(UU) {
      return UU.error instanceof CU.f ? `MODEL-${UU.error.status}` : UU.error instanceof wU.l ? "MODEL-ring" : "MODEL-network"
    }

    function Bz(UU, XU) {
      const zU = Gz(UU),
        cU = `model file ${UU.file} ${UU.startup?"(startup) ":""}could not load`,
        yU = {
          file: String(UU.file),
          url: UU.url,
          wasmBuild: XU.wasm,
          clientVersion: XU.client
        };
      return qX({
        kind: UU.startup ? "model" : "modelLate",
        code: zU,
        site: mU,
        fatal: UU.startup,
        message: cU,
        details: yU,
        error: UU.error
      })
    }

    function Zz(UU, XU) {
      const zU = {
        wasmBuild: XU.wasm,
        clientVersion: XU.client
      };
      return qX({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: lU,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: zU,
        error: UU
      })
    }

    function Rz(UU, XU, zU) {
      const cU = {
        delayMs: String(XU),
        wasmBuild: zU.wasm,
        clientVersion: zU.client
      };
      UU instanceof CU.f && (cU.status = String(UU.status));
      return qX({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: lU,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: cU,
        error: UU
      })
    }

    function Pz(UU, XU) {
      const zU = {
        wasmBuild: XU.wasm,
        clientVersion: XU.client
      };
      return qX({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: RU.J,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: zU,
        error: UU
      })
    }

    function Wz(UU, XU) {
      const zU = {
        wasmBuild: XU.wasm,
        clientVersion: XU.client
      };
      return qX({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: TU,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: zU,
        error: UU
      })
    }

    function dz(UU, XU, zU, cU) {
      const yU = {
        wasmBuild: cU.wasm,
        clientVersion: cU.client
      };
      return qX({
        kind: "texturePackKeptOut",
        code: (0, DU.d)("wasm", UU, XU),
        site: hU,
        fatal: !1,
        message: XU.detail,
        details: yU,
        error: zU
      })
    }

    function Lz(UU, XU) {
      const {
        frames: zU,
        acks: cU,
        mask: yU,
        outcome: QU
      } = UU, AU = {
        frames: String(zU),
        acks: String(cU),
        mask: String(yU),
        outcome: null !== QU && void 0 !== QU ? QU : "resynced",
        wasmBuild: XU.wasm,
        clientVersion: XU.client
      };
      return qX({
        kind: "recovered",
        code: "rejoined" === QU ? "CORE-eventOverflowRejoin" : "failed" === QU ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: KU,
        fatal: !1,
        message: `the event buffer refused records in ${zU} frames`,
        details: AU
      })
    }

    function ez(UU, XU, zU) {
      return qX({
        kind: "recovered",
        code: "CORE-workerLost",
        site: UU,
        fatal: !1,
        message: `a ${UU} worker was lost`,
        details: {
          reason: XU,
          wasmBuild: zU.wasm,
          clientVersion: zU.client
        }
      })
    }

    function Cz(UU, XU, zU, cU) {
      const yU = {
          reason: UU,
          pageBuild: cU.build,
          pageAgeMin: String(Math.floor(cU.ageMs / 6e4)),
          wasmBuild: zU.wasm,
          clientVersion: zU.client
        },
        QU = XU ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return qX({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: RU.J,
        fatal: !1,
        message: QU,
        details: yU
      })
    }

    function wz(UU, XU, zU) {
      const cU = {
        wasmBuild: zU.wasm,
        clientVersion: zU.client
      };
      return qX({
        kind: "recovered",
        code: UU,
        site: RU.r,
        fatal: !1,
        message: XU,
        details: cU
      })
    }

    function qz(UU, XU) {
      const zU = {
        lastReason: UU,
        wasmBuild: XU.wasm,
        clientVersion: XU.client
      };
      return qX({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: RU.J,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: zU
      })
    }

    function Oz(UU, XU, zU) {
      return qX({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: RU.o,
        fatal: !1,
        message: `${(0,LU.z)(UU)}: the session shed load`,
        details: {
          cause: UU,
          ...XU,
          wasmBuild: zU.wasm,
          clientVersion: zU.client
        }
      })
    }

    function Sz(UU, XU, zU, cU) {
      var yU, QU;
      const AU = (0, NU.q)(),
        FU = {
          game: UU,
          cause: XU,
          census: null === zU ? "none" : JSON.stringify(zU),
          gpu: null !== (yU = null === (QU = (0, kU.A)()) || void 0 === QU ? void 0 : QU.renderer) && void 0 !== yU ? yU : "",
          renderWarned: String(AU),
          browser: (0, NU.n)(),
          wasmBuild: cU.wasm,
          clientVersion: cU.client
        },
        oU = `first view drew no whole terrain in ${qU.d/1e3} s, ${XU}${AU?", render warned":""}`;
      return qX({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: UX,
        fatal: !1,
        message: oU,
        details: FU
      })
    }

    function rz(UU, XU, zU, cU, yU) {
      const QU = (0, aU.g)(),
        AU = (0, aU.e)(UU, XU, zU, cU, QU),
        FU = {
          gpuModel: QU,
          wasmBuild: yU.wasm,
          clientVersion: yU.client
        };
      return qX({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: XX,
        fatal: !1,
        message: AU,
        details: FU
      })
    }

    function uz(UU, XU, zU) {
      return qX({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: UU,
        fatal: !1,
        message: `a ${UU} worker did not start`,
        details: {
          waitedMs: String(Math.round(XU)),
          wasmBuild: zU.wasm,
          clientVersion: zU.client
        }
      })
    }

    function fz(UU, XU, zU) {
      return qX({
        kind: "recovered",
        code: "CORE-replayFault",
        site: UU,
        fatal: !1,
        message: `the replay's ${UU} failed`,
        details: {
          wasmBuild: zU.wasm,
          clientVersion: zU.client
        },
        error: XU
      })
    }
    const iz = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function Hz(UU) {
      if (0 === UU) return "none";
      const XU = [60, 600, 3600].find((XU => UU < XU));
      return void 0 === XU ? "ge3600" : `lt${XU}`
    }

    function Mz(UU, XU) {
      return null === UU ? "unbound" : (0, tU.k)(XU - UU)
    }

    function vz(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (UU & YU.Q.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (UU & YU.Q.LINKS_RUNNING) ? "links running" : "", `frames ${(0,IU.b)(Hz(UU&YU.Q.FRAMES))}`, `up ${(0,IU.b)(Mz(XU,zU))}`].filter(Boolean).join(", ")
    }

    function Vz(UU, XU, zU) {
      const cU = "lost" === XU && void 0 !== zU ? ` (${zU})` : "";
      return `the ${UU} ${iz[XU]}${cU}`
    }
    const sz = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function nz(UU, XU, zU, cU) {
      var yU;
      let {
        restoreLost: QU = !1,
        adapterRemembered: AU = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, FU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const oU = null === zU || void 0 === zU ? void 0 : zU.message,
        DU = "pipeline_failed" === XU ? XU : zU instanceof ZU.g ? "timeout" : (0, tU.r)("frames_refused" === XU, "string" === typeof oU ? oU : ""),
        EU = null === cU.boundAtMs ? "unbound" : `up${(0,tU.h)(FU-cU.boundAtMs)}`,
        YU = null === cU.adapter ? "no adapter" : (0, tU.q)(cU.adapter),
        NU = `${!0===cU.indirectHangs?" ih":""}${!0===cU.restoresSkipped?" nr":""}${QU?" rl":""}${AU?" ar":""}`,
        IU = `${DU} ${(0,ZU.j)()?"hidden":"visible"} ${EU}${NU} ${YU}`;
      if ("webgpu" !== UU || "lost" !== XU && "frames_refused" !== XU) return {
        detail: IU,
        count: void 0
      };
      return {
        detail: IU,
        count: {
          errorKind: "render_lost",
          error: new Error(IU),
          code: (0, tU.v)(DU, null !== (yU = cU.boundAtMs) && void 0 !== yU ? yU : FU, FU).code,
          fields: {
            renderBackend: HU.e.webgpu
          }
        }
      }
    }

    function mz(UU, XU, zU) {
      const {
        count: cU
      } = nz("webgpu", UU, XU, zU);
      void 0 !== cU && SX(cU)
    }
    const lz = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function xz(UU) {
      var XU;
      return null !== (XU = UU instanceof Error ? UU.reason : void 0) && void 0 !== XU ? XU : ""
    }

    function Jz(UU, XU, cU) {
      var yU, QU, AU, oU, DU;
      let {
        from: EU,
        cause: YU = "lost",
        restoreLost: pU = !1,
        adapterRemembered: aU = !1,
        error: kU,
        context: GU = sz,
        session: BU = lz
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, ZU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: RU,
        count: PU
      } = nz(UU, YU, kU, GU, {
        restoreLost: pU,
        adapterRemembered: aU
      }, ZU), WU = {
        reloadFrom: null !== EU && void 0 !== EU ? EU : "",
        losses: String(XU),
        cause: YU,
        detail: RU,
        vendor: null !== (yU = null === (QU = GU.adapter) || void 0 === QU ? void 0 : QU.vendor) && void 0 !== yU ? yU : "",
        architecture: null !== (AU = null === (oU = GU.adapter) || void 0 === oU ? void 0 : oU.architecture) && void 0 !== AU ? AU : "",
        indirectHangs: String(GU.indirectHangs),
        restoresSkipped: String(GU.restoresSkipped),
        restoreLost: String(pU),
        adapterRemembered: String(aU),
        lossReason: xz(kU),
        samples: String(BU.samples),
        sunShadows: String(BU.sunShadows),
        renderDistance: String(BU.renderDistance),
        gpuFamily: null !== (DU = (0, FU.b)()) && void 0 !== DU ? DU : "",
        browser: (0, NU.n)(),
        siteUsed: gU.siteUsed,
        wasmBuild: cU.wasm,
        clientVersion: cU.client
      }, dU = "webgpu" !== UU && void 0 !== EU ? function(UU, XU, zU, cU) {
        return `: ${UU}, ${XU?"restore lost":"not restored"}, up ${(0,IU.b)(Mz(zU,cU))}`
      }(EU, pU, GU.boundAtMs, ZU) : "", LU = `${Vz(UU,YU)}${dU}`, eU = qX({
        kind: "recovered",
        code: "CORE-renderLost",
        site: JU,
        fatal: !1,
        message: LU,
        details: WU,
        error: kU,
        countAs: PU
      });
      return fX("ga", (async () => {
        const {
          logError: XU
        } = await Promise.resolve().then((() => zU(3221))), cU = `${tU.e["webgpu"===UU?"WebGPU":"WebGL2"]}\n Error: ${RU}`;
        XU("warning", cU), XU("error", cU)
      })), eU
    }

    function jz(UU, XU) {
      var zU, cU;
      const yU = null === UU.name ? "TEXTURE-sources" : null === UU.url ? "TEXTURE-nourl" : UU.error instanceof OU.b ? `TEXTURE-${UU.error.status}` : "TEXTURE-network",
        QU = null === UU.name ? "terrain textures could not load" : `terrain texture ${UU.name} could not load`,
        AU = {
          texture: null !== (zU = UU.name) && void 0 !== zU ? zU : "",
          url: null !== (cU = UU.url) && void 0 !== cU ? cU : "",
          wasmBuild: XU.wasm,
          clientVersion: XU.client
        };
      return qX({
        kind: "terrainTexture",
        code: yU,
        site: RU.F,
        fatal: !1,
        message: QU,
        details: AU,
        error: UU.error
      })
    }
    const Kz = {
      previewAnimations: {
        site: jU,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: bU,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function bz(UU, XU, zU, cU) {
      const {
        site: yU,
        prefix: QU,
        name: AU
      } = Kz[UU], {
        stage: FU,
        error: oU
      } = zU;
      return qX({
        kind: UU,
        code: "decode" === FU ? null === oU ? `${QU}-decode` : `${QU}-trap` : oU instanceof CU.f ? `${QU}-${oU.status}` : `${QU}-network`,
        site: yU,
        fatal: !1,
        message: "decode" === FU ? `${AU} did not decode` : `${AU} could not load`,
        details: {
          url: XU,
          wasmBuild: cU.wasm,
          clientVersion: cU.client
        },
        error: oU
      })
    }
    const Tz = "staleBuild";

    function hz(UU, XU, zU) {
      const cU = {
          failedSite: UU.site,
          url: UU.url,
          from: UU.from,
          sameBuild: String(UU.from === XU),
          reloadMs: String(Math.max(0, Date.now() - UU.at)),
          wasmBuild: zU.wasm,
          clientVersion: zU.client
        },
        yU = `reloaded into a newer build after ${UU.site} failed to load: ${UU.error}`;
      return qX({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: Tz,
        fatal: !1,
        message: yU,
        details: cU
      })
    }
  },
  41894: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      d: () => yU,
      g: () => AU
    });
    var cU = zU(5326);
    const yU = 3e4;
    class QU {
      constructor(UU) {
        this.oY = UU, this.waitedMs = 0, this.lastMs = null
      }
      frame(UU, XU) {
        if (XU) return !0;
        const zU = null === this.lastMs ? 0 : UU - this.lastMs;
        return this.lastMs = UU, zU <= 900 && (this.waitedMs += zU), !(this.waitedMs < yU) && (this.oY(), !0)
      }
    }

    function AU(UU, XU) {
      return 0 === (UU & cU.Y.ChunkRequested) ? "no_chunk_request" : 0 === (UU & cU.Y.ChunkStored) ? "chunk_not_stored" : 0 === (UU & cU.Y.MeshLanded) ? "not_meshed" : null === XU ? "no_frame_drawn" : 0 === XU.terrainParts ? "no_terrain_parts" : XU.terrainCompiling > 0 ? "terrain_compiling" : XU.terrainOpaque + XU.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  41660: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU,
      d: () => gU,
      f: () => aU,
      j: () => tU,
      l: () => NU,
      n: () => IU,
      o: () => EU,
      s: () => YU,
      u: () => pU
    });
    class cU extends Error {
      constructor(UU) {
        super(`the join's code did not load: ${UU instanceof Error?UU.message:String(UU)}`, {
          cause: UU
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === UU || void 0 === UU ? void 0 : UU.request
      }
    }
    let yU = null,
      QU = null,
      AU = null;
    const FU = [];
    let oU = null;

    function DU(UU, XU) {
      try {
        UU(XU)
      } catch (zU) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", zU)
      }
    }

    function EU() {
      return oU
    }

    function YU(UU) {
      FU.push(UU), null !== oU && DU(UU, oU)
    }

    function NU(UU) {
      return yU ??= Promise.all([zU.e(84), zU.e(111), zU.e(86), zU.e(240), zU.e(89), zU.e(241), zU.e(215), zU.e(109), zU.e(260), zU.e(294), zU.e(49), zU.e(213), zU.e(227), zU.e(212), zU.e(203), zU.e(204), zU.e(168), zU.e(101), zU.e(132), zU.e(268), zU.e(68)]).then((() => zU(45247))).then((XU => {
        XU.loadAudio(UU), oU = XU;
        for (const UU of FU) DU(UU, XU);
        return XU
      })).catch((UU => {
        throw yU = null, UU
      })), yU
    }
    async function IU(UU, XU) {
      try {
        const zU = await NU(UU);
        await zU.loadClientGame(XU)
      } catch (zU) {
        throw new cU(zU)
      }
    }

    function pU(UU, XU) {
      QU = {
        running: UU,
        shell: XU
      }
    }

    function aU() {
      return AU
    }
    async function tU(UU) {
      const XU = QU;
      if ((null === XU || void 0 === XU ? void 0 : XU.running) !== UU) throw new Error("the core's session has ended");
      const zU = await NU(XU.shell.audio).catch((UU => {
        throw new cU(UU)
      }));
      if (null !== AU) return AU;
      if (QU !== XU || UU.isStopped) throw new Error("the core stopped while the game code loaded");
      if (AU = zU.startGameHost(UU, XU.shell), null === AU) throw new Error("the core's shared tables didn't read, so the game can't start");
      return AU
    }

    function gU() {
      null !== AU && (null !== oU ? oU.endGameHost(AU) : AU.closeGame()), AU = null, QU = null
    }
  },
  41799: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    const cU = {
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
  41750: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU,
      g: () => QU,
      h: () => AU,
      k: () => yU,
      m: () => IU,
      o: () => EU,
      q: () => oU,
      r: () => NU,
      s: () => YU,
      u: () => FU
    });
    var cU = zU(1885);
    const yU = new Uint8Array([12]),
      QU = 2e3,
      AU = 257;

    function FU(UU) {
      const XU = new Uint8Array(4);
      return new DataView(XU.buffer).setUint32(0, UU, !0), XU
    }
    class oU extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class DU extends Error {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(UU), this.stage = XU, this.code = zU, this.serverText = cU, this.socketOpened = yU, this.name = "JoinError"
      }
    }
    class EU extends Error {
      constructor(UU) {
        super(UU), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class YU extends Error {
      constructor(UU) {
        super((0, cU.h)(UU), {
          cause: UU
        }), this.name = "TrafficCheckError"
      }
    }
    class NU extends Error {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(UU, {
          cause: zU
        }), this.networkLost = XU, this.httpStatus = cU, this.name = "SeatRequestError"
      }
    }
    class IU extends Error {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(UU), this.code = XU, this.serverText = zU, this.name = "MatchmakeError"
      }
    }
  },
  41752: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => IU,
      d: () => NU,
      g: () => pU
    });
    var cU = zU(2858),
      yU = zU(3304),
      QU = zU(39876),
      AU = zU(37201),
      FU = zU(39882),
      oU = zU(41750),
      DU = zU(41761);
    const EU = "seat reservation expired.",
      YU = "early_leave";

    function NU(UU) {
      if (UU instanceof AU.c) return "expected";
      if (UU instanceof oU.r) return UU.networkLost ? "expected" : "unrecognised";
      if (UU instanceof oU.c) {
        if ("closed" === UU.stage && (0 === UU.code || (0, yU.c)(UU.code))) return "expected";
        if ("roomError" === UU.stage && (UU.serverText === EU || UU.serverText === YU)) return "expected"
      }
      return UU instanceof oU.c || UU instanceof oU.m ? null === (0, FU.l)(UU.code).name ? "unrecognised" : "known" : (0, cU.f)(UU) ? "expected" : UU instanceof oU.s || UU instanceof DU.b ? "known" : "unrecognised"
    }

    function IU(UU) {
      return UU instanceof AU.c ? "timedOut" : "expected" !== NU(UU) || (0, cU.f)(UU) || UU instanceof oU.c && 1001 === UU.code ? void 0 : "failed"
    }

    function pU(UU) {
      return UU instanceof oU.c && "attach" !== UU.stage ? (0, QU.e)(UU, "closed" !== UU.stage || UU.socketOpened ? "socket" : "socket_unopened") : UU instanceof oU.r ? {
        at: "seat_lost",
        code: UU.httpStatus
      } : UU instanceof oU.m || UU instanceof AU.c ? (0, QU.e)(UU, UU instanceof AU.c ? UU.leg : "seat") : void 0
    }
  },
  41877: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU,
      h: () => DU,
      i: () => IU,
      l: () => YU
    });
    var cU = zU(3176),
      yU = zU(5318),
      QU = zU(41886),
      AU = zU(41889),
      FU = zU(36981);
    const oU = 395,
      DU = 2147483648,
      EU = new Uint8Array(0);
    class YU extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class NU extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class IU {
      constructor(UU, XU, zU) {
        var cU, yU, AU, FU;
        let oU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = UU, this.build = XU, this.onFailure = zU, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.cY = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (cU = oU.fetchFile) && void 0 !== cU ? cU : UU => (0, QU.f)(UU), this.onWritten = null !== (yU = oU.onWritten) && void 0 !== yU ? yU : null, this.onTaken = null !== (AU = oU.onTaken) && void 0 !== AU ? AU : null, this.onPackFileFailed = null !== (FU = oU.onPackFileFailed) && void 0 !== FU ? FU : null, this.startupLeft = new Set(UU.startup);
        for (const QU of UU.startup) this.request(QU)
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
      drawnUrl(UU) {
        return this.drawn.get(UU)
      }
      request(UU) {
        const XU = this.pending.get(UU);
        if (!0 === (null === XU || void 0 === XU ? void 0 : XU.ask)) return;
        const zU = this.gY(UU, !0);
        zU.recheck = void 0 !== XU;
        const cU = this.drawn.get(UU);
        if (void 0 !== cU) return zU.uD = !0, zU.recheck = !0, void this.fetch(UU, zU, cU);
        this.fetchWanted(UU, zU)
      }
      async refresh() {
        const UU = ++this.refreshes,
          XU = new Set;
        for (const AU of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const UU of AU) 0 === (UU & QU.e) && XU.add(UU);
        const zU = [...XU];
        let cU;
        try {
          cU = await Promise.all(zU.map((UU => this.wanted(UU))))
        } catch {
          return null
        }
        if (UU !== this.refreshes) return null;
        const yU = {
          resent: 0,
          refetched: 0,
          delivered: zU.filter((UU => this.drawn.has(UU))).length
        };
        return zU.forEach(((UU, XU) => {
          const {
            url: zU,
            inPlaceOf: QU
          } = cU[XU], AU = this.pending.get(UU);
          if (void 0 !== AU) {
            if (AU.uD || void 0 === AU.url) return void(AU.recheck = !0);
            if (AU.url === zU) return;
            yU.refetched++;
            const XU = this.gY(UU, AU.ask);
            return XU.recheck = AU.recheck, void this.fetch(UU, XU, zU, QU)
          }
          const FU = this.written.get(UU);
          void 0 === FU ? this.drawn.get(UU) !== (null !== zU && void 0 !== zU ? zU : void 0) && (yU.resent++, this.fetch(UU, this.gY(UU, !1), zU, QU)) : FU.url !== (null !== zU && void 0 !== zU ? zU : "") && (FU.attempt.recheck = !0)
        })), yU
      }
      taken(UU, XU) {
        const zU = new Set,
          cU = new Set;
        for (const yU of Array.from(XU)) 0 === (yU & DU) ? zU.add(yU) : cU.add((yU & ~DU) >>> 0);
        for (const [yU, QU] of this.written) QU.seq > UU || (this.written.delete(yU), zU.has(QU.seq) ? this.refusedFile(yU, QU) : this.takenFile(yU, QU, !QU.empty && !cU.has(QU.seq)))
      }
      takenFile(UU, XU, zU) {
        const {
          attempt: cU
        } = XU;
        if (zU) {
          var yU;
          this.drawn.set(UU, XU.url), this.undrawn.delete(UU), void 0 !== cU.inPlaceOf ? this.refusedPack.set(UU, cU.inPlaceOf) : cU.uD || this.refusedPack.delete(UU), null === (yU = this.onTaken) || void 0 === yU || yU.call(this, UU, !0);
          const zU = this.pending.get(UU);
          if (!0 === (null === zU || void 0 === zU ? void 0 : zU.uD) && zU.url !== XU.url) {
            const zU = this.gY(UU, !0);
            zU.uD = !0, zU.recheck = !0, this.fetch(UU, zU, XU.url)
          }
        } else {
          var QU;
          this.drawn.has(UU) || this.undrawn.add(UU), null === (QU = this.onTaken) || void 0 === QU || QU.call(this, UU, !1)
        }
        cU.recheck && this.resendIfChanged(UU)
      }
      refusedFile(UU, XU) {
        var zU, cU;
        if (null === (zU = this.onTaken) || void 0 === zU || zU.call(this, UU, !1), this.refusedPack.set(UU, XU.url), this.pending.has(UU)) return void(null === (cU = this.onPackFileFailed) || void 0 === cU || cU.call(this, UU, pU(XU.url)));
        const yU = this.gY(UU, XU.attempt.ask);
        yU.recheck = XU.attempt.recheck, this.afterRefusal(UU, yU, XU.url)
      }
      async afterRefusal(UU, XU, zU) {
        var cU;
        let yU;
        try {
          yU = await this.wanted(UU)
        } catch (QU) {
          return void(this.pending.get(UU) === XU && this.giveUp(UU, XU, zU, QU))
        }
        this.pending.get(UU) === XU && (yU.inPlaceOf !== zU ? XU.ask || (null !== (cU = yU.url) && void 0 !== cU ? cU : void 0) !== this.drawn.get(UU) ? this.fetch(UU, XU, yU.url, yU.inPlaceOf) : this.pending.delete(UU) : this.fallBack(UU, XU, zU, pU(zU)))
      }
      gY(UU, XU) {
        const zU = {
          url: void 0,
          ask: XU,
          uD: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(UU, zU);
        for (let cU = this.ready.length - 1; cU >= 0; cU--) this.ready[cU].file === UU && this.ready.splice(cU, 1);
        return zU
      }
      async wanted(UU) {
        const XU = await this.files.url(UU);
        return null !== XU && this.refusedPack.get(UU) === XU ? {
          url: await this.files.shippedUrl(UU),
          inPlaceOf: XU
        } : {
          url: XU,
          inPlaceOf: void 0
        }
      }
      fetchWanted(UU, XU) {
        const zU = this.files.url(UU);
        zU instanceof Promise ? zU.then((zU => {
          this.fetchFound(UU, XU, zU)
        }), (zU => {
          this.pending.get(UU) === XU && this.giveUp(UU, XU, "", zU)
        })) : this.fetchFound(UU, XU, zU)
      }
      fetchFound(UU, XU, zU) {
        null !== zU && this.refusedPack.get(UU) === zU ? Promise.resolve(this.files.shippedUrl(UU)).then((cU => {
          this.fetch(UU, XU, cU, zU)
        }), (cU => {
          this.pending.get(UU) === XU && this.giveUp(UU, XU, zU, cU)
        })) : this.fetch(UU, XU, zU)
      }
      fetch(UU, XU, zU, cU) {
        this.pending.get(UU) === XU && (XU.url = zU, XU.inPlaceOf = cU, null !== zU ? this.load(UU, XU, zU) : this.buildFile(UU, XU, "", EU))
      }
      load(UU, XU, zU) {
        const cU = this.cY.get(UU);
        (null === cU || void 0 === cU ? void 0 : cU.url) !== zU ? this.fetchFile(zU).then((cU => {
          var yU, QU;
          this.pending.get(UU) === XU && (this.keptTotal += cU.byteLength - (null !== (yU = null === (QU = this.cY.get(UU)) || void 0 === QU ? void 0 : QU.glb.byteLength) && void 0 !== yU ? yU : 0), this.cY.set(UU, {
            url: zU,
            glb: cU
          }), this.buildFile(UU, XU, zU, cU))
        }), (cU => {
          this.pending.get(UU) === XU && this.fallBack(UU, XU, zU, cU)
        })) : this.buildFile(UU, XU, zU, cU.glb)
      }
      buildFile(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const AU = cU.byteLength > 0 && (0, QU.j)(zU) ? (UU | QU.d) >>> 0 : UU;
        this.queueRecord(UU, XU, zU, cU, this.build(AU, cU), yU)
      }
      queueRecord(UU, XU, zU, cU, QU, FU) {
        QU.then((QU => {
          if (this.pending.get(UU) !== XU) return;
          if (yU.q + (0, yU.De)(QU.byteLength) > yU.Gc) return void this.ringRefused(UU, XU, zU, new YU(`${aU(zU)}'s record is ${QU.byteLength-AU.c} bytes, past the cmd ring's ${yU.Gc}`), FU);
          const oU = {
            file: UU,
            url: zU,
            payload: QU,
            glb: cU,
            attempt: XU
          };
          FU ? this.ready.unshift(oU) : this.ready.push(oU)
        }))
      }
      async fallBack(UU, XU, zU, cU) {
        var yU;
        let QU = null,
          AU = cU;
        try {
          QU = await this.files.shippedUrl(UU)
        } catch (FU) {
          AU = FU
        }
        this.pending.get(UU) === XU && (null !== QU && QU !== zU ? (null === (yU = this.onPackFileFailed) || void 0 === yU || yU.call(this, UU, cU), XU.ask || this.drawn.get(UU) !== QU ? (XU.url = QU, XU.inPlaceOf = zU, this.load(UU, XU, QU)) : this.pending.delete(UU)) : this.giveUp(UU, XU, zU, AU))
      }
      ringRefused(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, QU.j)(zU) ? this.fallBack(UU, XU, zU, cU): this.giveUp(UU, XU, zU, cU, yU)
      }
      giveUp(UU, XU, zU, yU) {
        let QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: UU,
          url: aU(zU),
          error: yU,
          startup: this.startupLeft.has(UU)
        }), XU.ask || !this.drawn.has(UU) ? (0, cU.ab)(yU) ? this.queueRecord(UU, XU, zU, EU, Promise.resolve((0, AU.k)(UU, (0, FU.l)(yU))), QU) : this.buildFile(UU, XU, zU, EU, QU) : this.pending.delete(UU)
      }
      async resendIfChanged(UU) {
        var XU;
        if (0 !== (UU & QU.e)) return;
        let zU;
        try {
          zU = await this.wanted(UU)
        } catch {
          return
        }(null !== (XU = zU.url) && void 0 !== XU ? XU : void 0) === this.drawn.get(UU) || this.pending.has(UU) || this.written.has(UU) || this.fetch(UU, this.gY(UU, !1), zU.url, zU.inPlaceOf)
      }
      drain(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === UU) return;
        let zU = 0,
          cU = 0;
        for (; cU < this.ready.length && zU < 262144;) {
          const FU = this.ready[cU];
          if (this.written.has(FU.file)) {
            cU++;
            continue
          }
          const EU = this.nextSeq;
          new DataView(FU.payload.buffer, FU.payload.byteOffset, FU.payload.byteLength).setUint32(AU.f, EU, !0);
          const NU = FU.attempt.uD && FU.glb.byteLength > 0 && this.drawn.get(FU.file) === FU.url;
          if (UU(oU, NU ? 1 : 0, FU.payload)) {
            if (this.nextSeq = EU >= DU - 1 ? 1 : EU + 1, this.ready.splice(cU, 1), zU += FU.payload.byteLength, this.pending.delete(FU.file), this.startupLeft.delete(FU.file), this.written.set(FU.file, {
                seq: EU,
                url: FU.url,
                empty: 0 === FU.glb.byteLength,
                attempt: FU.attempt
              }), FU.glb.byteLength > 0) try {
              var yU;
              null === (yU = this.onWritten) || void 0 === yU || yU.call(this, FU.file, FU.glb)
            } catch (QU) {
              console.warn("ModelFeed: reading the file's images failed", QU)
            }
          } else {
            if (null === XU || 0 === FU.glb.byteLength || XU(FU.payload.byteLength)) return;
            this.ready.splice(cU, 1);
            const UU = new YU(`${aU(FU.url)}'s record is ${FU.payload.byteLength-AU.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(FU.file, FU.attempt, FU.url, UU, !0)
          }
        }
      }
    }

    function pU(UU) {
      return new NU(`presentation refused ${aU(UU)}`)
    }

    function aU(UU) {
      return UU.startsWith("data:") ? `${UU.slice(0,Math.min(Math.max(UU.indexOf(","),5),64))},...` : UU
    }
  },
  41886: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      e: () => QU,
      f: () => EU,
      j: () => FU,
      n: () => DU,
      p: () => oU
    });
    var cU = zU(3176),
      yU = zU(3572);
    const QU = 2147483648,
      AU = 1073741824;

    function FU(UU) {
      return UU.startsWith("data:")
    }

    function oU(UU) {
      let {
        onTableFailed: XU,
        packUrl: zU
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const cU = DU();
      cU.catch((UU => {
        null === XU || void 0 === XU || XU(UU)
      }));
      const yU = async XU => (await cU).fileUrl((XU & ~QU) >>> 0, UU);
      return {
        startup: [],
        url: async UU => {
          if (zU && 0 === (UU & QU)) {
            const XU = await cU,
              yU = XU.filePackName(UU),
              QU = null === yU || "lifeform" === XU.fileSource(UU) ? null : zU(yU);
            if (null !== QU) return QU
          }
          return yU(UU)
        },
        shippedUrl: yU
      }
    }

    function DU() {
      return zU.e(49).then((() => zU(45253)))
    }
    async function EU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return UU.startsWith("data:") ? (0, yU.e)(UU.slice(UU.indexOf(",") + 1), XU) : (0, cU.Q)(UU, {
        spare: XU
      })
    }
  },
  41889: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU,
      f: () => DU,
      j: () => pU,
      k: () => NU,
      o: () => YU,
      s: () => IU
    });
    const cU = 826427981,
      yU = 1,
      QU = 2,
      AU = 44,
      FU = 58,
      oU = 8,
      DU = 4;

    function EU(UU, XU, zU) {
      const yU = (new TextEncoder).encode(zU),
        QU = oU + 4 * (XU.length + 2),
        AU = new Uint8Array(QU + (yU.byteLength + 3 & -4)),
        FU = new DataView(AU.buffer);
      return FU.setUint32(0, UU, !0), FU.setUint32(oU, cU, !0), XU.forEach(((UU, XU) => {
        FU.setUint32(oU + 4 * (XU + 1), UU, !0)
      })), FU.setUint32(QU - 4, yU.byteLength, !0), AU.set(yU, QU), AU
    }

    function YU(UU, XU) {
      return EU(UU, [QU], XU)
    }

    function NU(UU, XU) {
      return EU(UU, [yU, FU], XU)
    }

    function IU(UU, XU) {
      return EU(UU, [yU, AU], XU)
    }

    function pU(UU) {
      const XU = oU;
      if (UU.byteLength < XU + 12) return !1;
      const zU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
      return zU.getUint32(XU, !0) === cU && zU.getUint32(XU + 4, !0) === yU && zU.getUint32(XU + 8, !0) === AU
    }
  },
  41808: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      g: () => EU,
      i: () => AU,
      k: () => oU
    });
    var cU = zU(36981);
    class yU extends Error {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${UU}: the module trapped${zU?" in an earlier call":""}: ${String(XU)}`, {
          cause: XU
        }), this.site = UU, this.trap = XU, this.earlier = zU, this.name = "ModuleTrapError", XU instanceof Error && void 0 !== XU.stack && (this.stack = `${this.name}: ${this.message}\n${XU.stack}`)
      }
    }
    const QU = new WeakMap;

    function AU(UU) {
      return QU.has(UU)
    }

    function FU(UU, XU) {
      QU.has(UU) || QU.set(UU, XU)
    }

    function oU(UU, XU) {
      return !!(0, cU.j)(XU) && (FU(UU, XU), !0)
    }
    const DU = [
      ["error", UU => UU.error],
      ["unhandledrejection", UU => UU.reason]
    ];

    function EU(UU, XU, zU) {
      let AU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return QU.has(UU) ? Promise.reject(new yU(XU, QU.get(UU), !0)) : new Promise(((QU, oU) => {
        const EU = zU => {
            FU(UU, zU), IU(), oU(new yU(XU, zU))
          },
          YU = UU => {
            UU instanceof WebAssembly.RuntimeError ? EU(UU) : (IU(), oU(UU))
          },
          NU = DU.map((UU => {
            let [XU, zU] = UU;
            return [XU, UU => {
              const XU = zU(UU);
              (0, cU.j)(XU) && EU(XU)
            }]
          })),
          IU = () => {
            for (const [UU, XU] of NU) null === AU || void 0 === AU || AU.removeEventListener(UU, XU)
          };
        for (const [UU, XU] of NU) null === AU || void 0 === AU || AU.addEventListener(UU, XU);
        let pU;
        try {
          pU = zU()
        } catch (aU) {
          return void YU(aU)
        }
        pU.then((UU => {
          IU(), QU(UU)
        }), YU)
      }))
    }
  },
  41786: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => fU,
      F: () => eU,
      I: () => rU,
      M: () => JU,
      N: () => uU,
      R: () => VU,
      T: () => HU,
      V: () => SU,
      X: () => jU,
      c: () => LU,
      f: () => PU,
      i: () => vU,
      k: () => iU,
      l: () => RU,
      n: () => dU,
      p: () => BU,
      t: () => wU,
      u: () => OU,
      v: () => xU,
      x: () => lU
    });
    var cU = zU(220),
      yU = zU(27),
      QU = zU(3958),
      AU = zU(134),
      FU = zU(318),
      oU = zU(42),
      DU = zU(41795),
      EU = zU(41814),
      YU = zU(37186),
      NU = zU(41831),
      IU = (zU(41865), zU(41927)),
      pU = zU(41861),
      aU = zU(41820);
    const tU = "wasmJoinBuild";
    let gU = null,
      kU = null,
      GU = null;

    function BU(UU) {
      GU = UU
    }
    let ZU = !1;

    function RU() {
      ZU = !0
    }

    function PU() {
      return ZU
    }
    let WU = !1;

    function dU() {
      WU = !0
    }

    function LU() {
      return WU
    }

    function eU() {
      return GU
    }
    let CU = null;

    function wU(UU) {
      CU = UU, (0, FU.b)(UU)
    }
    const qU = "wasmClientRenderLost";

    function OU() {
      oU.n.setItem(qU, !0)
    }

    function SU() {
      return !0 === oU.n.getItem(qU)
    }

    function rU() {
      return CU
    }

    function uU() {
      if (null === gU) {
        oU.k.removeItem("wasmLastPick"), oU.k.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, FU.m)(), gU = (0, DU.F)(NU.g).then((UU => (null === UU || (0, DU.r)(UU) || (kU = IU.e[UU.backend], yU.e.followGameGpu("webgpu" === UU.backend ? UU.adapter : null), "webgpu" === UU.backend && (0, pU.f)()), UU)))
      }
      return gU
    }

    function fU() {
      return kU
    }

    function iU(UU) {
      return UU ? UU.load() : Promise.resolve().then((function() {
        var UU = new Error("Cannot find module '@bloxd/wasm/client'");
        throw UU.code = "MODULE_NOT_FOUND", UU
      })).then((UU => UU.bloxdWasmClient))
    }

    function HU(UU) {
      oU.k.setItem(tU, UU)
    }

    function MU(UU, XU) {
      const zU = oU.k.getItem(tU);
      return null === zU ? function(UU) {
        if (void 0 !== (0, cU.b)(UU, "webgpu") && (0, DU.D)()) return "webgpu";
        return !1 === (0, AU.t)() ? "webgl1" : "webgl"
      }(UU) : "none" === zU ? null : "string" === typeof zU && void 0 !== (0, cU.b)(UU, zU) ? zU : (XU && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(zU)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function vU() {
      if (null === NU.g) return iU(null);
      const UU = MU(NU.g, !0);
      return null === UU ? null : NU.g[UU]()
    }

    function VU() {
      null === gU && null !== NU.g && "webgl" === MU(NU.g, !1) && (0, aU.b)()
    }
    let sU = null,
      nU = null,
      mU = null;

    function lU() {
      return sU ??= uU().then((async UU => {
        const XU = null !== UU && !(0, DU.r)(UU),
          zU = {
            indirectHangs: XU && await (0, DU.R)(UU, window.location.search),
            storagePullBreaks: XU && (0, DU.eb)(UU, window.location.search),
            splitPassBreaks: XU && (0, DU.ab)(UU, window.location.search),
            earlySky: XU && (0, DU.O)(UU, window.location.search),
            instancedTerrain: XU ? (0, DU.V)(UU, window.location.search) : null,
            cellLight: XU && await (0, QU.g)("cellLight"),
            framesAhead: (0, DU.m)(window.location.search, XU ? UU : null),
            webGpuRestores: !XU || (0, DU.hb)(UU, (0, YU.c)()),
            bufferCopiesCrash: XU && (0, DU.K)(UU, window.location.search),
            firstVertex: XU ? (0, EU.f)(UU.backend, window.location.search) : void 0
          };
        return nU = zU.indirectHangs, mU = !zU.webGpuRestores, zU
      })), sU
    }

    function xU() {
      return nU
    }

    function JU() {
      return mU
    }
    async function jU() {
      const UU = null === gU ? null : await gU;
      return null !== UU && (0, DU.r)(UU) && (gU = null, sU = null, nU = null, mU = null), uU()
    }
  },
  42084: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU,
      i: () => DU
    });
    var cU = zU(37014),
      yU = zU(41959),
      QU = zU(4809),
      AU = zU(3604),
      FU = zU(37186);
    async function oU(UU, XU) {
      return await Promise.all([(0, QU.h)(void 0, !0), (0, AU.j)()]), (0, cU.n)(UU, yU.g, {
        ...XU,
        memoryMaximumBytes: (0, FU.k)()
      })
    }
    async function DU() {
      return await (0, QU.h)(void 0, !0), (0, cU.q)((0, FU.k)())
    }
  },
  41814: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      f: () => QU
    });
    var cU = zU(281);
    const yU = "provokingVertex";

    function QU(UU, XU) {
      if ("webgl" !== UU) return;
      const zU = new URLSearchParams(XU).get(yU);
      return "first" === zU || "last" !== zU && null
    }
    const AU = new WeakSet;

    function FU(UU, XU) {
      var zU, yU;
      let QU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (zU = null === (yU = globalThis.navigator) || void 0 === yU ? void 0 : yU.userAgent) && void 0 !== zU ? zU : "";
      try {
        !1 === XU || AU.has(UU) || (AU.add(UU), UU.addEventListener("webglcontextrestored", (() => {
          FU(UU, XU, QU)
        })));
        const zU = UU.getContext("webgl2");
        if (null === zU || zU.isContextLost()) return !1;
        if (!(null !== XU && void 0 !== XU ? XU : function(UU, XU) {
            var zU, yU;
            const QU = UU.getExtension("WEBGL_debug_renderer_info");
            if (null === QU) return !1;
            return function(UU, XU, zU) {
              return zU.includes("Windows") && "adreno_6" === (0, cU.h)(UU, XU)
            }(String(null !== (zU = UU.getParameter(QU.UNMASKED_VENDOR_WEBGL)) && void 0 !== zU ? zU : ""), String(null !== (yU = UU.getParameter(QU.UNMASKED_RENDERER_WEBGL)) && void 0 !== yU ? yU : ""), XU)
          }(zU, QU))) return !1;
        const yU = zU.getExtension("WEBGL_provoking_vertex");
        return null !== yU && (yU.provokingVertexWEBGL(yU.FIRST_VERTEX_CONVENTION_WEBGL), console.info("WebGL2 draws flat varyings from the first vertex (WEBGL_provoking_vertex)"), !0)
      } catch (oU) {
        return console.warn("WebGL2's provoking vertex couldn't be set: flat varyings draw from the last vertex", oU), !1
      }
    }
  },
  41823: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU,
      f: () => FU,
      h: () => EU,
      j: () => AU
    });
    var cU = zU(337),
      yU = zU(670);
    let QU;

    function AU(UU) {
      var XU;
      const zU = QU;
      return QU = void 0, null !== (XU = oU(UU)) && void 0 !== XU ? XU : zU
    }

    function FU(UU) {
      try {
        const XU = oU(UU);
        void 0 !== XU && (QU = XU, (0, yU.e)((0, cU.n)(XU.reason, XU.message)))
      } catch (XU) {
        console.warn("Couldn't keep the WebGPU loss's cause", XU)
      }
    }

    function oU(UU) {
      var XU;
      const zU = null === UU || void 0 === UU || null === (XU = UU.NAU) || void 0 === XU ? void 0 : XU.call(UU),
        cU = null === UU || void 0 === UU ? void 0 : UU.YAU();
      if (void 0 === cU) return;
      const yU = new Error(cU);
      return void 0 !== zU && (yU.reason = zU), yU
    }

    function DU(UU) {
      return UU instanceof Error ? UU : void 0
    }

    function EU(UU, XU) {
      return "lost" !== UU && "frames_refused" !== UU ? {} : (0, cU.n)("frames_refused" === UU ? UU : null === XU || void 0 === XU ? void 0 : XU.reason, null === XU || void 0 === XU ? void 0 : XU.message)
    }
  },
  41857: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => WU,
      f: () => BU,
      j: () => GU,
      n: () => PU,
      q: () => CU,
      s: () => eU,
      w: () => wU
    });
    var cU = zU(5326),
      yU = zU(41861),
      QU = zU(34719);
    const AU = 1,
      FU = 18,
      oU = 19,
      DU = 20,
      EU = 21,
      YU = {
        [AU]: "link",
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
        [FU]: "retry linked",
        [oU]: "fallback linked",
        [DU]: "fallback failed",
        [EU]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function NU(UU, XU, zU) {
      return UU === FU ? "program retry" : UU === AU ? "program link" : UU === EU ? "program link stall" : UU === oU || UU === DU ? `program ${XU} ${zU}` : "program"
    }
    const IU = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      pU = {
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
      aU = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      tU = {
        11: "none read after view",
        12: "some read after view"
      },
      gU = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...tU
      },
      kU = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function GU(UU, XU) {
      return UU === cU.h.RenderSerialLinks && void 0 !== tU[XU]
    }

    function BU(UU, XU) {
      return UU === cU.h.RenderSerialLinks && void 0 !== kU[15 & XU]
    }
    const ZU = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function RU(UU, XU) {
      var zU;
      return null !== (zU = UU[XU]) && void 0 !== zU ? zU : (0, QU.b)(XU)
    }

    function PU() {
      return (0, QU.b)((0, yU.d)())
    }

    function WU(UU, XU) {
      switch (UU) {
        case cU.h.RenderSceneRowNotDrawn:
          return {
            words: ` ${RU(pU,XU)}`, instance: String(XU), group: String(UU)
          };
        case cU.h.RenderChunkMeshNotDrawn: {
          const zU = 0 === (128 & XU) ? "" : " shortage",
            cU = XU >>> 8;
          return {
            words: ` ${RU(aU,127&XU)}${zU}${0===cU?"":` kind ${(0,QU.b)(cU)}`}`,
            instance: String(XU),
            group: String(UU)
          }
        }
        case cU.h.RenderInternal: {
          const zU = RU(IU, 255 & XU),
            cU = XU >>> 8 & 255;
          if (0 === cU) return {
            words: ` ${zU}`,
            instance: String(XU),
            group: String(UU)
          };
          const yU = RU(YU, cU),
            AU = XU >>> 16;
          return {
            words: ` ${zU} ${yU} program ${(0,QU.b)(AU)}`,
            instance: `${zU} ${yU} ${AU}`,
            group: NU(cU, yU, zU),
            gpuDetails: {
              programFailure: yU,
              program: String(AU)
            }
          }
        }
        case cU.h.RenderSerialLinks: {
          if (BU(UU, XU)) {
            const UU = function(UU) {
              const XU = (XU, zU) => (0, QU.b)(UU >>> XU & (1 << zU) - 1),
                zU = UU >>> 30 & 1 ? " restored" : "";
              return `link census ${kU[15&UU]} linked ${XU(22,8)} failed ${XU(4,6)} retried ${XU(10,6)} fallback ${XU(16,6)}${zU}`
            }(XU);
            return {
              words: ` ${UU}`,
              instance: String(15 & XU),
              group: "link census",
              gpuDetails: {
                linkCensus: UU
              }
            }
          }
          const zU = RU(gU, XU);
          return {
            words: ` ${zU}`,
            instance: String(XU),
            group: String(UU),
            gpuDetails: {
              serialLinks: zU
            }
          }
        }
        case cU.h.RenderGlErrorAfterRestore: {
          const zU = RU(ZU, 65535 & XU),
            cU = XU >>> 16,
            yU = 65535 !== cU;
          return {
            words: ` ${zU}${yU?` program ${(0,QU.b)(cU)}`:""}`,
            instance: String(XU),
            group: String(UU),
            gpuDetails: yU ? {
              glError: zU,
              program: String(cU)
            } : {
              glError: zU
            }
          }
        }
        default:
          return null
      }
    }
    const dU = 2,
      LU = new Map;

    function eU(UU) {
      let {
        group: XU,
        instance: zU
      } = UU, cU = LU.get(XU);
      return void 0 === cU && (cU = [], LU.set(XU, cU)), !cU.includes(zU) && (cU.length >= dU || (cU.push(zU), !1))
    }

    function CU() {
      return LU.size > 0
    }

    function wU() {
      LU.clear()
    }
  },
  41831: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      g: () => QU
    });
    var cU = zU(41840);
    const yU = new WeakSet;
    const QU = {
        webgpu: async () => (function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === UU || yU.has(UU.prototype)) return;
          yU.add(UU.prototype);
          const XU = UU.prototype.requestDevice;
          UU.prototype.requestDevice = function(UU) {
            var zU;
            const yU = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.requiredLimits) && void 0 !== zU ? zU : {},
              QU = Object.keys(yU).filter((UU => !(UU in this.limits)));
            if (0 === QU.length) return XU.call(this, UU);
            const AU = Object.fromEntries(Object.entries(yU).filter((UU => {
              let [XU] = UU;
              return XU in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${QU.join(", ")}`), (0, cU.reportDroppedRequiredLimits)(QU), XU.call(this, {
              ...UU,
              requiredLimits: AU
            })
          }
        }(), (await zU.e(8).then((() => zU(53674)))).bloxdWasmWebgpu),
        webgl: async () => (await zU.e(6).then((() => zU(53683)))).bloxdWasmWebgl,
        webgl1: async () => (await zU.e(7).then((() => zU(53696)))).bloxdWasmWebgl1
      },
      AU = async () => (await zU.e(5).then((() => zU(53713)))).compileAnimationPackInWasm
  },
  41761: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => gU,
      c: () => tU,
      g: () => ZU
    });
    var cU = zU(7233),
      yU = zU(31),
      QU = zU(4692),
      AU = zU(5326),
      FU = zU(7226),
      oU = zU(41770);

    function DU(UU, XU) {
      const zU = (0, FU.e)(XU.variants);
      return UU.setShaderPack(zU.variantFlags, zU.hooks, zU.moduleCodes, (0, oU.D)(XU.layers), oU.o[XU.policy], XU.keepCircleShadows)
    }
    const EU = 0,
      YU = 1,
      NU = 2,
      IU = "shaderPack:failedToCompile",
      pU = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      aU = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function tU(UU, XU) {
      var zU;
      const cU = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.reason) && void 0 !== zU ? zU : "none";
      return pU.has(cU) ? {
        messageKey: XU ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === cU && "override" === (null === UU || void 0 === UU ? void 0 : UU.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: aU.has(cU) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class gU extends Error {
      constructor(UU) {
        super(`the shader pack can't run in this game: ${UU}`), this.messageKey = UU, this.name = "ShaderPackJoinError"
      }
    }
    const kU = "strict";
    class GU {
      constructor(UU) {
        this.deps = UU, this.pagePack = void 0, this.loaded = null, this.policy = kU, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = UU.load().catch((XU => (UU.warn("the shader pack could not load: the game draws without it", XU), {
          status: "none"
        }))).then((UU => (this.loaded = UU, "active" === UU.status && (this.handOverToPreviews(UU), null !== UU.harnessPolicy && (this.policy = UU.harnessPolicy, this.handOver())), UU)))
      }
      async join(UU) {
        this.leave();
        const XU = this.game,
          [zU, yU] = await Promise.all([this.pagePack, this.policyOf(UU)]);
        if (XU !== this.game || "none" === zU.status) return null;
        const QU = "active" === zU.status ? zU.pack.variants : zU.variants,
          AU = (0, cU.j)(QU, yU);
        if (AU && "active" === zU.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (AU) {
          const UU = this.cantRun(zU, yU);
          if (null !== UU) return UU
        } else if ("blocked" === zU.status || null === this.deps.core) return null;
        return this.policy = yU, this.handOver(), AU && this.refused ? IU : (this.joined = !0, this.offInThisGame = !AU, null)
      }
      async replay(UU) {
        const XU = await this.join(UU);
        null === XU ? this.playable() : this.deps.failInGame(XU)
      }
      cantRun(UU, XU) {
        const {
          core: zU,
          noWebGpu: cU
        } = this.deps;
        if ("blocked" === UU.status) {
          return "shaderPack:failedUnchecked" === UU.messageKey && null === zU && cU.noAdapter ? cU.messageKey : UU.messageKey
        }
        return this.refused || this.failedPolicies.has(XU) ? IU : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var UU;
        return this.runsInJoinedGame() && "active" === (null === (UU = this.loaded) || void 0 === UU ? void 0 : UU.status) ? function(UU, XU) {
          const zU = UU.filter((UU => (0, cU.j)([UU], XU))),
            yU = UU => zU.some((XU => XU[UU]));
          return {
            sceneDepth: yU("sceneDepth"),
            sunShadow: yU("sunShadow"),
            airShadow: yU("airShadow")
          }
        }(this.loaded.pack.variants, this.policy) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(IU) : (null !== this.couldntRun ? this.notify(QU.c, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.policy) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(UU) {
        for (const {
            code: XU,
            detail: zU
          }
          of UU)
          if (XU === AU.h.RenderShaderPackNotRun) switch (255 & zU) {
            case EU:
              this.refused = !0, this.failed();
              break;
            case YU:
              this.failedPolicies.add(this.policy), this.failed();
              break;
            case NU:
              this.failedModelPolicies.add(this.policy), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(IU) : this.failedWhileJoining = !0)
      }
      fail(UU) {
        this.leave(), this.deps.failInGame(UU)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(UU, XU) {
        const zU = this.game;
        this.deps.notify(UU, (() => zU === this.game && this.joined), XU)
      }
      handOver() {
        var UU;
        const {
          core: XU
        } = this.deps;
        null !== XU && "active" === (null === (UU = this.loaded) || void 0 === UU ? void 0 : UU.status) && (DU(XU, {
          ...this.loaded.pack,
          policy: this.policy
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(UU) {
        let {
          pack: XU,
          harnessPolicy: zU
        } = UU;
        const {
          previews: cU
        } = this.deps;
        null !== cU && DU(cU, {
          ...XU,
          policy: null !== zU && void 0 !== zU ? zU : kU
        })
      }
      policyOf(UU) {
        return this.deps.policyOf(UU).catch((UU => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", UU), kU)))
      }
    }
    const BU = "wasmShaderPackNotice";

    function ZU(UU, XU, zU, cU) {
      return yU.k.subscribe(BU, (UU => {
        let {
          translationKey: XU,
          stillCurrent: zU,
          reasonKey: cU
        } = UU;
        zU() && yU.k.UY("chat", (0, QU.h)(XU, cU))
      })), new GU({
        load: RU,
        policyOf: PU,
        core: UU,
        previews: XU,
        noWebGpu: zU,
        notify: (UU, XU, zU) => {
          const cU = {
            translationKey: UU,
            stillCurrent: XU,
            reasonKey: zU
          };
          yU.k.UY(BU, cU, !0)
        },
        failInGame: UU => {
          yU.k.UY(QU.g, UU)
        },
        warn: cU
      })
    }
    async function RU() {
      const [{
        shaderPackPage: UU,
        harnessShaderPackMode: XU
      }, {
        shaderPackTextures: cU
      }] = await Promise.all([zU.e(128).then((() => zU(40071))), zU.e(129).then((() => zU(7219)))]), yU = await UU.load();
      return "active" !== yU.status ? yU : {
        status: "active",
        pack: {
          variants: yU.pack.variants,
          layers: cU().layers,
          keepCircleShadows: yU.pack.keepCircleShadows
        },
        harnessPolicy: XU()
      }
    }
    async function PU(UU) {
      var XU;
      const [{
        shaderPackPage: cU,
        harnessShaderPackMode: yU
      }, {
        getShaderPackPolicy: QU
      }] = await Promise.all([zU.e(128).then((() => zU(40071))), zU.e(106).then((() => zU(43968)))]);
      return await cU.load(), null !== (XU = yU()) && void 0 !== XU ? XU : QU(UU)
    }
  },
  41902: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      d: () => tU,
      e: () => oU,
      i: () => DU,
      j: () => EU,
      m: () => NU
    });
    var cU = zU(41910),
      yU = zU(41919);
    const QU = "atlas:",
      AU = 3e4;
    class FU extends Error {
      constructor(UU, XU) {
        super(`fetching ${UU} answered HTTP ${XU}`), this.url = UU, this.status = XU, this.name = "TerrainTextureFetchError"
      }
    }

    function oU(UU) {
      if (!UU.startsWith(QU)) return null;
      const XU = Number(UU.slice(QU.length));
      return Number.isInteger(XU) && XU >= 0 ? XU : null
    }
    async function DU() {
      const UU = await zU.e(222).then((() => zU(34975)));
      return {
        atlasSheets: UU.blockAtlasUrls,
        texture: XU => {
          var zU, cU, QU;
          return null !== (zU = null !== (cU = null !== (QU = UU.animatedBlockTextures[XU]) && void 0 !== QU ? QU : UU.rotatedBlockTextures[XU]) && void 0 !== cU ? cU : yU.c[XU]) && void 0 !== zU ? zU : null
        }
      }
    }
    async function EU(UU) {
      const XU = new AbortController,
        zU = setTimeout((() => {
          XU.abort(new DOMException(`${UU} took over ${AU} ms`, "TimeoutError"))
        }), AU);
      let cU;
      try {
        const zU = await fetch(UU, {
          signal: XU.signal
        });
        if (!zU.ok) throw new FU(UU, zU.status);
        cU = await zU.blob()
      } finally {
        clearTimeout(zU)
      }
      const yU = await createImageBitmap(cU, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return NU(yU)
      } finally {
        yU.close()
      }
    }
    const YU = 8192;

    function NU(UU) {
      const {
        width: XU,
        height: zU
      } = UU, yU = Math.max(1, Math.min(zU, YU)), QU = (0, cU.d)(XU, yU, {
        willReadFrequently: !0
      });
      if (!QU) throw new Error("no 2D context to read the texture back");
      QU.globalCompositeOperation = "copy";
      const AU = new Uint8Array(XU * zU * 4);
      for (let cU = 0; cU < zU; cU += yU) {
        const FU = Math.min(yU, zU - cU);
        QU.drawImage(UU, 0, cU, XU, FU, 0, 0, XU, FU), AU.set(QU.getImageData(0, 0, XU, FU).data, cU * XU * 4)
      }
      return {
        width: XU,
        height: zU,
        pixels: AU
      }
    }
    async function IU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EU;
      const cU = [],
        yU = await Promise.all(UU.map((async UU => {
          var yU, AU;
          const FU = null !== (yU = null === (AU = XU.decoded) || void 0 === AU ? void 0 : AU.call(XU, UU)) && void 0 !== yU ? yU : null,
            DU = null === FU ? function(UU, XU) {
              if (UU.startsWith(QU)) {
                var zU;
                const cU = oU(UU);
                return null === cU ? null : null !== (zU = XU.atlasSheets[cU]) && void 0 !== zU ? zU : null
              }
              return XU.texture(UU)
            }(UU, XU) : null,
            EU = null !== FU && void 0 !== FU ? FU : null === DU ? null : zU(DU);
          if (null === EU) return cU.push({
            name: UU,
            url: DU,
            error: new Error(`no URL for terrain texture ${UU}`)
          }), null;
          try {
            const XU = await EU;
            if (XU.pixels.byteLength !== XU.width * XU.height * 4) throw new Error(`decoded ${XU.pixels.byteLength} bytes for ${XU.width}x${XU.height} texels`);
            return {
              name: UU,
              texture: XU
            }
          } catch (YU) {
            return cU.push({
              name: UU,
              url: DU,
              error: YU
            }), null
          }
        }))),
        AU = yU.filter((UU => null !== UU)),
        FU = new Uint32Array(2 * AU.length);
      AU.forEach(((UU, XU) => {
        let {
          texture: zU
        } = UU;
        FU[2 * XU] = zU.width, FU[2 * XU + 1] = zU.height
      }));
      return {
        handOver: {
          names: AU.map((UU => {
            let {
              name: XU
            } = UU;
            return XU
          })),
          textures: AU.map((UU => {
            let {
              texture: XU
            } = UU;
            return XU.pixels
          })),
          sizes: FU
        },
        failures: cU
      }
    }
    const pU = [2e3, 1e4, 3e4, 6e4, 12e4];

    function aU() {}
    class tU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pU,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = UU, this.retryMs = XU, this.keepBelow = zU, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DU,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const cU = ++this.started,
          yU = {
            decode: zU.decode,
            wholeAtlas: zU.wholeAtlas
          };
        return this.loadAndHandOver(XU, yU, UU, (() => {
          var UU;
          return cU < this.landed || !1 === (null === (UU = zU.wanted) || void 0 === UU ? void 0 : UU.call(zU))
        }), {
          onTaken: (UU, zU) => {
            this.landed = cU, this.current = {
              mine: cU,
              sources: XU,
              load: yU,
              cY: UU,
              failed: zU
            }
          }
        })
      }
      restore(UU) {
        var XU;
        const zU = this.current;
        if (null === zU) return Promise.resolve(null);
        if ((null === (XU = this.restoring) || void 0 === XU ? void 0 : XU.mine) === zU.mine) return this.restoring.done;
        const cU = {
          mine: zU.mine,
          done: this.restoreLanded(zU, UU).finally((() => {
            this.restoring === cU && (this.restoring = null)
          }))
        };
        return this.restoring = cU, cU.done
      }
      async restoreLanded(UU, XU) {
        const zU = () => this.landed !== UU.mine,
          {
            cY: cU
          } = UU;
        if (null !== cU) return this.stopped() ? null : this.core.setTerrainTextures(cU.names, cU.textures, cU.sizes);
        let yU = XU;
        for (let QU = 0;; QU++) {
          const XU = this.retryMs.at(QU),
            cU = {
              allOrNothingExcept: void 0 === XU ? void 0 : UU.failed
            },
            AU = await this.loadAndHandOver(UU.sources, UU.load, yU, zU, cU);
          if (!1 !== AU || void 0 === XU || this.stopped()) return AU;
          if (yU = aU, await new Promise((UU => {
              setTimeout(UU, XU)
            })), zU()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const QU = this.core.terrainTextureNames();
        var AU;
        if (0 === QU.length) return null === (AU = yU.onTaken) || void 0 === AU || AU.call(yU, null, new Set), !0;
        let FU, DU;
        try {
          FU = await UU(), DU = await IU(QU, FU, XU.decode)
        } catch (tU) {
          return cU() ? null : (zU({
            name: null,
            url: null,
            error: tU
          }), !1)
        }
        if (cU() || this.stopped()) return null;
        for (const oU of DU.failures) zU(oU);
        const EU = yU.allOrNothingExcept;
        if (void 0 !== EU && DU.failures.some((UU => {
            let {
              name: XU
            } = UU;
            return null === XU || !EU.has(XU)
          })) || !0 === XU.wholeAtlas && DU.failures.some((UU => {
            let {
              name: XU
            } = UU;
            return null === XU || null !== oU(XU)
          }))) return !1;
        const {
          handOver: YU
        } = DU, NU = function(UU) {
          return UU.textures.reduce(((UU, XU) => UU + XU.byteLength), 0)
        }(YU) < this.keepBelow, pU = this.core.setTerrainTextures(YU.names, YU.textures, YU.sizes, NU ? void 0 : () => {
          !async function(UU, XU) {
            await XU;
            for (const {
                buffer: cU
              }
              of UU) {
              const UU = cU;
              var zU;
              if (!UU.detached) null === (zU = UU.transfer) || void 0 === zU || zU.call(UU, 0)
            }
          }(YU.textures, FU.heldUntil)
        });
        if (pU) {
          var aU;
          const UU = new Set(DU.failures.flatMap((UU => {
            let {
              name: XU
            } = UU;
            return null === XU ? [] : [XU]
          })));
          null === (aU = yU.onTaken) || void 0 === aU || aU.call(yU, NU ? YU : null, UU)
        }
        return pU
      }
    }
  },
  34816: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU,
      c: () => YU,
      g: () => EU
    });
    var cU = zU(281),
      yU = zU(97),
      QU = zU(134),
      AU = zU(127),
      FU = zU(678);
    const oU = new Set(["mali_bifrost"]);

    function DU() {
      if (FU.h) return;
      const UU = (0, yU.pageOperatingSystem)();
      if ("android" !== UU && "windows" !== UU || (0, FU.e)("webgl_default")) return;
      if ("windows" === UU) return UU => "qualcomm" === (0, yU.normaliseGpuVendor)((0, AU.d)(UU).vendor);
      const XU = (0, QU.o)(),
        zU = null === XU ? (0, cU.q)() : (0, cU.h)(XU.vendor, XU.renderer);
      return null !== zU && oU.has(zU) ? UU => (0, cU.l)((0, AU.d)(UU).vendor, zU) : void 0
    }

    function EU(UU, XU) {
      return UU ? () => !0 : XU()
    }
    async function YU(UU) {
      try {
        const XU = EU(UU, DU),
          zU = navigator.gpu;
        if (void 0 === XU || void 0 === zU) return !1;
        const cU = await (0, AU.m)(zU, {
          seed: !1,
          compatibility: XU
        });
        return "string" !== typeof cU && cU.compatibility && !(0, AU.i)(cU.adapter)
      } catch (XU) {
        return console.error("WebGPU compatibility-mode adapter request failed.", XU), !1
      }
    }
  },
  41861: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU,
      f: () => DU
    });
    var cU = zU(97),
      yU = zU(39586);
    const QU = "webgpuPipeline";

    function AU(UU) {
      return UU.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let FU = null;

    function oU() {
      if (null === FU) try {
        UU = (0, cU.getBrowserName)(), XU = (0, cU.getBrowserVersion)(), zU = (0, cU.getOperatingSystem)(), yU = (0, cU.getOperatingSystemVersion)(), FU = `${UU.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===XU?"unknown":AU(XU)}-${zU}${void 0===yU?"":`_${AU(yU)}`}`
      } catch (QU) {
        console.warn("The user agent couldn't be read for its browser code", QU), FU = "unknown"
      }
      var UU, XU, zU, yU;
      return FU
    }

    function DU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const XU = `WGPU-${oU()}`,
        cU = (UU, cU) => {
          const {
            reason: AU,
            message: FU
          } = cU;
          if ((0, yU.s)(String(FU))) return;
          const oU = {
            pipeline: null !== UU && void 0 !== UU ? UU : "",
            reason: String(AU),
            browserMessage: String(FU)
          };
          Promise.resolve().then((() => zU(41840))).then((UU => {
            let {
              reportCrash: zU
            } = UU;
            zU({
              kind: "coreError",
              code: XU,
              site: QU,
              fatal: !1,
              message: `${oU.pipeline} ${oU.reason}: ${oU.browserMessage}`,
              details: oU,
              error: cU
            })
          })).catch((UU => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", UU)
          }))
        },
        AU = UU.createRenderPipelineAsync;
      UU.createRenderPipelineAsync = function(UU) {
        return AU.call(this, UU).catch((XU => {
          throw cU(UU.label, XU), XU
        }))
      };
      const FU = UU.createComputePipelineAsync;
      UU.createComputePipelineAsync = function(UU) {
        return FU.call(this, UU).catch((XU => {
          throw cU(UU.label, XU), XU
        }))
      }
    }
  },
  41820: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      e: () => oU
    });
    var cU = zU(134);
    let yU = !1;

    function QU() {
      let UU = null;
      try {
        return UU = document.createElement("canvas").getContext("webgl2"), null !== UU
      } catch {
        return !1
      } finally {
        try {
          var XU, zU;
          null === (XU = UU) || void 0 === XU || null === (zU = XU.getExtension("WEBGL_lose_context")) || void 0 === zU || zU.loseContext()
        } catch {}
      }
    }

    function AU() {
      "hidden" === document.visibilityState && (yU = !1, document.removeEventListener("visibilitychange", AU))
    }

    function FU() {
      yU || "visible" !== document.visibilityState || !(0, cU.q)() && !QU() || (yU = !0, document.addEventListener("visibilitychange", AU))
    }

    function oU() {
      return yU || QU()
    }
  },
  41974: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/bloxd_wasm_models_bg.2bf764b975051a969c78.wasm"
  },
  41967: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/bloxd_wasm_workers_bg.8d69bfc9c0063cf52d1d.wasm"
  },
  41959: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      g: () => cU
    });
    const cU = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new zU.U(zU(41967))
      }
    };
    const yU = {
      name: "bloxd_wasm_models",
      url: function() {
        return new zU.U(zU(41974))
      }
    }
  },
  7226: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => BU,
      f: () => ZU,
      g: () => kU,
      h: () => gU
    });
    var cU = zU(7233);
    const yU = 6,
      QU = 3,
      AU = 1,
      FU = 2,
      oU = 4,
      DU = 8,
      EU = 16,
      YU = 32,
      NU = 64,
      IU = 128,
      pU = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function aU(UU) {
      if (!UU) return 0;
      const XU = pU.indexOf(UU);
      if (XU <= 0) throw new Error(`"${UU}" is not a shader pack hook function`);
      return XU
    }

    function tU(UU) {
      if (0 === UU) return null;
      const XU = pU[UU];
      if (void 0 === XU) throw new Error(`${UU} is not a shader pack hook function id`);
      return XU
    }

    function gU(UU) {
      const XU = cU.e.length;
      return {
        strict: UU >= XU,
        program: cU.e[UU % XU]
      }
    }

    function kU(UU) {
      return Number(UU.strict) * cU.e.length + cU.e.indexOf(UU.program)
    }

    function GU(UU) {
      return "" === UU ? [] : UU.split(" ")
    }

    function BU(UU) {
      const XU = {
        variantFlags: new Uint8Array(yU),
        hooks: new Uint8Array(yU * QU),
        moduleCodes: Array(yU).fill(""),
        reads: Array(2 * yU).fill("")
      };
      for (const zU of UU) {
        const UU = kU(zU.key),
          cU = (UU, XU) => null === zU.hooks.surface || zU.reads.fragment.includes(UU) ? 0 : XU;
        XU.variantFlags[UU] = (zU.sceneDepth ? AU : 0) | (zU.movesVertices ? FU : 0) | (zU.sunShadow ? oU : 0) | (zU.airShadow ? DU : 0) | (zU.discards ? EU : 0) | cU("localPosition", YU) | cU("enchantSpeed", NU) | cU("enchantTier", IU), XU.hooks[UU * QU] = aU(zU.hooks.vertex), XU.hooks[UU * QU + 1] = aU(zU.hooks.surface), XU.hooks[UU * QU + 2] = aU(zU.hooks.light), XU.moduleCodes[UU] = zU.moduleCode, XU.reads[2 * UU] = zU.reads.vertex.join(" "), XU.reads[2 * UU + 1] = zU.reads.fragment.join(" ")
      }
      return XU
    }

    function ZU(UU) {
      const {
        hooks: XU,
        moduleCodes: zU,
        reads: cU
      } = UU;
      return Array.from(UU.variantFlags, ((UU, yU) => {
        const YU = yU * QU;
        return {
          key: gU(yU),
          hooks: {
            vertex: tU(XU[YU]),
            surface: tU(XU[YU + 1]),
            light: tU(XU[YU + 2])
          },
          moduleCode: zU[yU],
          sceneDepth: 0 !== (UU & AU),
          sunShadow: 0 !== (UU & oU),
          airShadow: 0 !== (UU & DU),
          movesVertices: 0 !== (UU & FU),
          discards: 0 !== (UU & EU),
          reads: {
            vertex: GU(cU[2 * yU]),
            fragment: GU(cU[2 * yU + 1])
          }
        }
      }))
    }
  },
  41770: (UU, XU, zU) => {
    zU.d(XU, {
      D: () => aU,
      E: () => IU,
      I: () => pU,
      d: () => yU,
      h: () => cU,
      l: () => NU,
      m: () => EU,
      o: () => tU,
      r: () => QU,
      u: () => FU,
      y: () => oU,
      z: () => AU
    });
    const cU = 3,
      yU = 0,
      QU = 1,
      AU = 2,
      FU = {
        uniform: 3,
        lN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      oU = 10,
      DU = "BloxdPackInputs",
      EU = "bloxdPackInputs",
      YU = [{
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
      NU = 80;

    function IU() {
      const UU = YU.map((UU => {
        let {
          name: XU,
          type: zU
        } = UU;
        return `    ${XU}: ${zU},\n`
      })).join("");
      return `struct ${DU} {\n${UU}}\n@group(${cU}) @binding(${yU}) var<uniform> ${EU}: ${DU};\n`
    }

    function pU(UU, XU) {
      const zU = new DataView(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, NU),
        [cU, yU, QU, AU, FU, oU] = YU;
      zU.setFloat32(cU.offset, XU.seconds, !0), zU.setUint32(yU.offset, XU.lit ? 1 : 0, !0);
      for (let DU = 0; DU < 3; DU++) zU.setInt32(QU.offset + 4 * DU, XU.renderOffset[DU], !0), zU.setFloat32(AU.offset + 4 * DU, XU.hUU[DU], !0), zU.setFloat32(FU.offset + 4 * DU, XU.eyePosition[DU], !0), zU.setFloat32(oU.offset + 4 * DU, XU.shadowDirection[DU], !0)
    }

    function aU(UU) {
      const XU = new Uint32Array(Math.max(1, UU.length));
      return UU.forEach(((UU, zU) => {
        let {
          id: cU,
          rotation: yU
        } = UU;
        XU[zU] = 65535 & cU | (3 & yU) << 16
      })), XU
    }
    const tU = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);