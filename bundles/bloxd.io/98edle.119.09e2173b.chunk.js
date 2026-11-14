export const id = 119;
export const ids = [119];
export const modules = {
  38292: (WW, RW, MW) => {
    MW.d(RW, {
      B: () => UW,
      F: () => GW,
      H: () => mR,
      J: () => VW,
      K: () => HW,
      M: () => KW,
      P: () => lW,
      b: () => LW,
      e: () => SW,
      i: () => vR,
      j: () => pW,
      k: () => nW,
      l: () => EW,
      n: () => OW,
      o: () => uW,
      s: () => ZW,
      w: () => hW,
      y: () => dW
    });
    var wW = MW(232),
      CW = MW(2195),
      zR = MW(2198),
      AW = MW(27),
      bR = MW(2175),
      yR = MW(2518),
      NW = MW(116),
      eW = MW(50),
      BW = MW(137),
      tR = MW(242),
      TW = MW(142),
      gR = MW(3775),
      iR = MW(38301),
      YW = MW(38310),
      JW = MW(38317);
    const PW = "bloxd-webgpuOffAfterLoss",
      IW = "context:webgl",
      oW = "probe:threw";

    function lW(WW) {
      let RW;
      try {
        RW = WW.getContext("webgl", {
          powerPreference: "high-performance"
        })
      } catch {
        RW = null
      }
      if (null === RW) return null;
      let MW = null;
      try {
        const WW = RW.getParameter(RW.MAX_TEXTURE_SIZE);
        MW = "number" === typeof WW && WW > 0 ? WW : null
      } catch {
        MW = null
      }
      try {
        var wW;
        null === (wW = RW.getExtension("WEBGL_lose_context")) || void 0 === wW || wW.loseContext()
      } catch {}
      return MW
    }
    const FW = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      fW = "mali_valhall";

    function QW() {
      var WW;
      return {
        gpu: null !== (WW = navigator.gpu) && void 0 !== WW ? WW : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(WW) {
          let RW, MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iR.b;
          try {
            RW = WW.getContext("webgl")
          } catch {
            RW = null
          }
          if (null === RW) return [IW];
          const wW = [];
          try {
            for (const CW of MW.extensions) null === RW.getExtension(CW) && wW.push(CW);
            for (const [CW, zR] of Object.entries(MW.limits)) {
              const WW = RW[CW],
                MW = "number" === typeof WW ? RW.getParameter(WW) : null;
              ("number" !== typeof MW || MW < zR) && wW.push(`limit:${CW}`)
            }
            const WW = RW.getShaderPrecisionFormat(RW.VERTEX_SHADER, RW.HIGH_FLOAT);
            (null === WW || WW.precision < MW.vertexHighFloatBits) && wW.push("precision:vertex_high_float")
          } catch {
            wW.push(oW)
          }
          try {
            var CW;
            null === (CW = RW.getExtension("WEBGL_lose_context")) || void 0 === CW || CW.loseContext()
          } catch {}
          return wW
        }(document.createElement("canvas")),
        offAfterLoss: () => cR((() => AW.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: WW => cR((() => (0, BW.f)(WW))),
        intelGen9: WW => cR((() => (0, BW.l)(WW))),
        gpuClassWebGlArm: WW => function(WW) {
          try {
            return WW()
          } catch {
            return null
          }
        }((() => {
          var RW, MW, wW, AW;
          const bR = null !== (RW = null === (MW = WW.info) || void 0 === MW ? void 0 : MW.vendor) && void 0 !== RW ? RW : "";
          return "windows" === (0, NW.getOperatingSystem)() && "" !== bR && "intel" !== (0, NW.normaliseGpuVendor)(bR) ? null : ((0, NW.seedGpuVendor)(bR), yR = (0, CW.g)(), eW = (0, zR.g)(bR, null !== (wW = null === (AW = WW.info) || void 0 === AW ? void 0 : AW.architecture) && void 0 !== wW ? wW : ""), FW.has(yR) ? "android_arm" === yR && eW === fW ? "webgpu_default" : "webgl_default" : null);
          var yR, eW
        })),
        storeGpuClassVerdict: WW => {
          eW.g.setItem(BW.u, WW)
        },
        gpuClassOnWebGl: WW => (0, tR.d)(WW),
        override: () => rR(!0),
        webGpuSetting: () => {
          const WW = eW.g.getItem(wW.Zb);
          return "boolean" === typeof WW ? WW : null
        },
        heldBack: () => tR.g,
        windowsFirefox: () => (0, BW.i)(),
        intelGen9OnWebGl: () => tR.i,
        ww: () => cR((() => (0, yR.f)(NW.featureFlags.settings.canUseShaderPacks)))
      }
    }

    function rR(WW) {
      const RW = [() => new URLSearchParams(window.location.search).get(bR.b), () => eW.g.getItem(bR.f), () => {
        const RW = localStorage.getItem(PW);
        return null !== RW && WW && localStorage.removeItem(PW), "1" === RW ? "webgl2" : null
      }];
      for (const MW of RW) {
        let WW = null;
        try {
          WW = XW(MW())
        } catch {}
        if (null !== WW) return WW
      }
      return null
    }

    function cR(WW) {
      try {
        return WW()
      } catch {
        return !1
      }
    }

    function XW(WW) {
      return "lite" === WW ? "webgpu" : "webgl2" === WW || "babylon" === WW ? "webgl" : null
    }
    async function jR() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QW();
      const RW = await async function(WW) {
        var RW, MW, wW, CW;
        const zR = aR(WW),
          {
            source: AW
          } = zR,
          bR = !zR.asked,
          yR = function(WW) {
            return {
              reason: WW,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: AW
            }
          };
        if (!("gpu" in zR)) return yR(zR.refused);
        let NW;
        try {
          NW = await (0, YW.h)((0, TW.e)(zR.gpu), DW, `requestAdapter didn't settle in ${DW/1e3} s`)
        } catch {
          return yR("adapter_error")
        }
        if ("string" === typeof NW) return yR(NW);
        const eW = {
          vendor: null !== (RW = null === (MW = NW.info) || void 0 === MW ? void 0 : MW.vendor) && void 0 !== RW ? RW : "",
          architecture: null !== (wW = null === (CW = NW.info) || void 0 === CW ? void 0 : CW.architecture) && void 0 !== wW ? wW : ""
        };
        if ((0, TW.c)(NW)) return yR("software_adapter", eW);
        const BW = WW.intelGen9(NW),
          tR = BW ? null : WW.gpuClassWebGlArm(NW);
        if (WW.storeGpuClassVerdict(null !== tR && void 0 !== tR && tR), bR && WW.oldIntelDriver(NW)) return yR("old_intel_driver", eW);
        if ("default" === AW && WW.intelGen9OnWebGl() && BW) return yR("intel_gen9", eW);
        if ("default" === AW && null !== tR && WW.gpuClassOnWebGl(tR)) return yR("gpu_class_webgl", eW);
        return yR("none", eW)
      }(WW);
      if ("none" === RW.reason) return {
        backend: "webgpu",
        ...RW
      };
      if (WW.webgl2()) return {
        backend: "webgl",
        ...RW
      };
      const MW = WW.webgl1();
      return 0 === MW.length ? {
        backend: "webgl1",
        ...RW
      } : {
        missing: MW
      }
    }

    function kR(WW) {
      return "override" === WW || "setting" === WW
    }

    function aR(WW) {
      const RW = WW.override(),
        MW = WW.webGpuSetting(),
        wW = null !== RW ? "override" : !0 === MW ? "setting" : WW.ww() ? "pack" : !1 === MW ? "setting" : "default",
        CW = kR(wW);
      return "webgl" === RW || "setting" === wW && !1 === MW ? {
        source: wW,
        asked: CW,
        refused: "not_requested"
      } : WW.gpu ? "default" === wW && WW.heldBack() ? {
        source: wW,
        asked: CW,
        refused: "webgl_holdback"
      } : "default" === wW && WW.windowsFirefox() ? {
        source: wW,
        asked: CW,
        refused: "windows_firefox"
      } : !CW && WW.offAfterLoss() ? {
        source: wW,
        asked: CW,
        refused: "off_after_loss"
      } : {
        source: wW,
        asked: CW,
        gpu: WW.gpu
      } : {
        source: wW,
        asked: CW,
        refused: "no_webgpu_api"
      }
    }
    const sW = "bloxd-wasmLastPick";

    function dW(WW) {
      const RW = {
        backend: WW.backend,
        asked: kR(WW.source)
      };
      try {
        localStorage.setItem(sW, JSON.stringify(RW))
      } catch {}
    }

    function pW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        ...QW(),
        override: () => rR(!1),
        webgl2Api: "undefined" !== typeof WebGL2RenderingContext,
        lastPick: () => {
          var WW, RW;
          let MW = null;
          try {
            var wW;
            MW = JSON.parse(null !== (wW = localStorage.getItem(sW)) && void 0 !== wW ? wW : "null")
          } catch {}
          const CW = null === (WW = MW) || void 0 === WW ? void 0 : WW.backend;
          return "webgpu" !== CW && "webgl" !== CW && "webgl1" !== CW || "boolean" !== typeof(null === (RW = MW) || void 0 === RW ? void 0 : RW.asked) ? null : {
            backend: CW,
            asked: MW.asked
          }
        }
      };
      const RW = WW.lastPick(),
        MW = aR(WW);
      return "gpu" in MW ? null !== RW && RW.asked === MW.asked ? RW.backend : "webgpu" : null !== RW && "webgpu" !== RW.backend ? RW.backend : WW.webgl2Api ? "webgl" : null
    }
    async function hW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QW();
      if (null === WW) return null;
      const MW = await jR(RW);
      return "missing" in MW ? MW : {
        ...MW,
        load: WW[MW.backend]
      }
    }
    async function UW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QW().gpu,
        MW = arguments.length > 2 ? arguments[2] : void 0;
      if ("webgpu" !== WW.backend) return !1;
      if (null !== WW.adapter && (0, BW.n)(WW.adapter, MW)) return !0;
      if (null === RW) return !1;
      try {
        var wW;
        const WW = await (0, YW.h)(RW.requestAdapter({
          powerPreference: "low-power"
        }), DW, `the low-power requestAdapter didn't settle in ${DW/1e3} s`);
        return (0, BW.n)(null !== (wW = null === WW || void 0 === WW ? void 0 : WW.info) && void 0 !== wW ? wW : {}, MW)
      } catch (CW) {
        return CW instanceof YW.d
      }
    }

    function EW(WW) {
      return null !== WW && "missing" in WW
    }

    function VW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.b;
      try {
        const RW = WW.turnOffWebGpuAfterDeviceLoss();
        return "webgpu" === XW(eW.g.getItem(bR.f)) && eW.g.removeItem(bR.f), RW
      } catch {
        return !1
      }
    }

    function mR() {
      return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !KW()) ? VW() ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const xR = "framePacing";

    function vR(WW) {
      const RW = new URLSearchParams(WW).get(xR);
      return null !== RW && /^\d{1,9}$/.test(RW) ? Number(RW) : void 0
    }

    function KW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === XW(new URLSearchParams(WW).get(bR.b))
      } catch {
        return !1
      }
    }

    function uW(WW) {
      return !!OW(WW) || WW instanceof Error && !(WW instanceof WebAssembly.RuntimeError) && WW.message.startsWith(`${gR.i.RenderSurfaceUnusable}:`)
    }

    function OW(WW) {
      const {
        name: RW,
        message: MW
      } = null !== WW && void 0 !== WW ? WW : {};
      return "InvalidStateError" === RW && "string" === typeof MW && MW.startsWith("GPUDevice.")
    }

    function nW(WW) {
      const RW = WW;
      return "function" === typeof RW.MNW && "function" === typeof RW.wNW ? RW : null
    }

    function GW(WW) {
      return "function" === typeof WW.NNW ? WW : null
    }
    const LW = "openRenderer";

    function HW(WW) {
      const RW = null === WW || void 0 === WW ? void 0 : WW.IBW();
      return void 0 === RW ? void 0 : new Error(RW)
    }
    const DW = 5e3,
      qR = 15e3;

    function ZW(WW, RW, MW, wW, CW, zR) {
      return (0, YW.h)(function(WW, RW, MW, wW, CW, zR) {
        return (0, JW.h)(WW, RW, (() => WW.NNW(MW, wW, CW, zR.indirectHangs, zR.framesAhead)))
      }(WW, RW, MW, wW, CW, zR), qR, `${gR.i.RenderSurfaceUnusable}: the renderer didn't open in ${qR/1e3} s`, WR)
    }
    async function SW(WW, RW, MW, wW, CW, zR) {
      if ("function" !== typeof WW.yTW) throw new Error("this core has no set_renderer");
      const AW = await ZW(RW, LW, MW, CW, wW, zR);
      try {
        WW.yTW(AW)
      } catch (bR) {
        throw WR(AW), bR
      }
    }

    function WR(WW) {
      try {
        WW.free()
      } catch {}
    }
  },
  38301: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    const wW = {
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
  38317: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      h: () => eW,
      j: () => AW,
      l: () => yR
    });
    var wW = MW(38324);
    class CW extends Error {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${WW}: the module trapped${MW?" in an earlier call":""}: ${String(RW)}`, {
          cause: RW
        }), this.site = WW, this.trap = RW, this.earlier = MW, this.name = "ModuleTrapError", RW instanceof Error && void 0 !== RW.stack && (this.stack = `${this.name}: ${this.message}\n${RW.stack}`)
      }
    }
    const zR = new WeakMap;

    function AW(WW) {
      return zR.has(WW)
    }

    function bR(WW, RW) {
      zR.has(WW) || zR.set(WW, RW)
    }

    function yR(WW, RW) {
      return !!(0, wW.d)(RW) && (bR(WW, RW), !0)
    }
    const NW = [
      ["error", WW => WW.error],
      ["unhandledrejection", WW => WW.reason]
    ];

    function eW(WW, RW, MW) {
      let AW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return zR.has(WW) ? Promise.reject(new CW(RW, zR.get(WW), !0)) : new Promise(((zR, yR) => {
        const eW = MW => {
            bR(WW, MW), TW(), yR(new CW(RW, MW))
          },
          BW = WW => {
            WW instanceof WebAssembly.RuntimeError ? eW(WW) : (TW(), yR(WW))
          },
          tR = NW.map((WW => {
            let [RW, MW] = WW;
            return [RW, WW => {
              const RW = MW(WW);
              (0, wW.d)(RW) && eW(RW)
            }]
          })),
          TW = () => {
            for (const [WW, RW] of tR) null === AW || void 0 === AW || AW.removeEventListener(WW, RW)
          };
        for (const [WW, RW] of tR) null === AW || void 0 === AW || AW.addEventListener(WW, RW);
        let gR;
        try {
          gR = MW()
        } catch (iR) {
          return void BW(iR)
        }
        gR.then((WW => {
          TW(), zR(WW)
        }), BW)
      }))
    }
  },
  38326: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => JW,
      B: () => oW,
      D: () => lW,
      b: () => YW,
      f: () => TW,
      j: () => FW,
      n: () => fW,
      q: () => tR,
      s: () => iR,
      t: () => eW,
      v: () => IW,
      x: () => rR
    });
    var wW = MW(38292),
      CW = MW(38332);
    let zR = null,
      AW = () => {};
    const bR = new Promise((WW => {
        AW = WW
      })),
      yR = new Promise((() => {}));
    let NW = null;

    function eW(WW) {
      NW = WW
    }
    let BW = !1;

    function tR() {
      BW = !0
    }

    function TW() {
      return BW
    }
    let gR = !1;

    function iR() {
      gR = !0
    }

    function YW() {
      return gR
    }

    function JW() {
      return NW
    }
    let PW = null;

    function IW(WW) {
      PW = WW
    }

    function oW() {
      return PW
    }

    function lW() {
      return null === zR && (zR = (0, wW.w)(CW.f).then((WW => (null === WW || (0, wW.l)(WW) || (0, wW.y)(WW), WW))), AW(zR.catch((() => null)))), zR
    }
    async function FW() {
      if (null !== zR) {
        const WW = await zR;
        return (0, wW.l)(WW) ? null : {
          build: await fW(WW),
          superseded: yR
        }
      }
      if (null === CW.f) return {
        build: await fW(null),
        superseded: yR
      };
      const WW = (0, wW.j)();
      if (null === WW) return null;
      const RW = await CW.f[WW]();
      if (null !== zR) return null;
      return {
        build: RW,
        superseded: bR.then((RW => null === RW || (0, wW.l)(RW) || RW.backend !== WW ? void 0 : yR))
      }
    }

    function fW(WW) {
      return WW ? WW.load() : Promise.resolve().then((function() {
        var WW = new Error("Cannot find module '@bloxd/wasm/client'");
        throw WW.code = "MODULE_NOT_FOUND", WW
      })).then((WW => WW.bloxdWasmClient))
    }
    let QW = null;

    function rR() {
      return QW ??= lW().then((async WW => ({
        indirectHangs: null !== WW && !(0, wW.l)(WW) && await (0, wW.B)(WW),
        framesAhead: (0, wW.i)(window.location.search)
      }))), QW
    }
  },
  38332: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW,
      f: () => wW
    });
    const wW = {
        webgpu: async () => (await MW.e(7).then((() => MW(40679)))).bloxdWasmWebgpu,
        webgl: async () => (await MW.e(5).then((() => MW(40687)))).bloxdWasmWebgl,
        webgl1: async () => (await MW.e(6).then((() => MW(40696)))).bloxdWasmWebgl1
      },
      CW = async () => (await MW.e(4).then((() => MW(40701)))).compileAnimationPackInWasm
  },
  38310: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      g: () => zR,
      h: () => bR
    });
    const wW = 250,
      CW = 1e3;

    function zR() {
      return "undefined" !== typeof document && document.hidden
    }
    class AW extends Error {}

    function bR(WW, RW, MW) {
      let bR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
        yR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zR;
      return new Promise(((zR, NW) => {
        let eW = !1,
          BW = RW,
          tR = performance.now(),
          TW = !yR();
        const gR = setInterval((() => {
          const WW = performance.now(),
            RW = TW;
          TW = !yR(), RW && TW && (BW -= Math.min(WW - tR, CW)), tR = WW, BW <= 0 && (eW = !0, clearInterval(gR), NW(new AW(MW)))
        }), wW);
        WW.then((WW => {
          clearInterval(gR), eW ? bR(WW) : (eW = !0, zR(WW))
        }), (WW => {
          clearInterval(gR), eW || (eW = !0, NW(WW))
        }))
      }))
    }
  },
  38324: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      g: () => AW
    });
    const wW = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function CW(WW) {
      if (WW instanceof WebAssembly.RuntimeError) return !0;
      const RW = WW instanceof Error ? WW.stack : void 0;
      return "string" === typeof RW && wW.test(RW)
    }
    const zR = 500;

    function AW(WW) {
      let RW = "[object Object]";
      try {
        RW = String(WW)
      } catch {}
      if ("[object Object]" !== RW) return RW;
      try {
        var MW, wW;
        return null !== (MW = null === (wW = JSON.stringify(WW)) || void 0 === wW ? void 0 : wW.slice(0, zR)) && void 0 !== MW ? MW : RW
      } catch {
        return RW
      }
    }
  },
  38285: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bloxd_wasm_models_bg.69cdc8ec265d1202d37e.wasm"
  },
  38280: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bloxd_wasm_workers_bg.0ce37d6c88d8799ae5f8.wasm"
  },
  34631: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => tR,
      c: () => eW
    });
    var wW = MW(2793),
      CW = MW(2801),
      zR = MW(2803),
      AW = MW(5629),
      bR = MW(5631);
    let yR = null,
      NW = !1;

    function eW(WW, RW, MW) {
      return null === yR ? yR = BW(WW, RW) : WW !== yR.build ? console.warn(`Bloxd wasm: ${WW.name} was asked for after ${yR.build.name} started loading, which this thread keeps`) : RW.name !== yR.workers.name && console.warn(`Bloxd wasm: ${RW.name} was asked for workers after ${yR.workers.name}, which this thread keeps`), MW?.reloadFailedDownload && !NW && (0, wW.lb)() && (NW = !0, yR = BW(yR.build, yR.workers)), yR.loaded
    }

    function BW(WW, RW) {
      const MW = (0, wW.T)((async () => {
        (0, bR.t)();
        const MW = TW(WW),
          wW = RW.name === WW.name ? MW : TW(RW);
        await (0, zR.g)([MW, wW]);
        const CW = await MW,
          AW = await wW;
        return (0, bR.t)(), {
          module: CW,
          workerModule: AW
        }
      }), WW);
      return {
        build: WW,
        workers: RW,
        loaded: MW
      }
    }
    async function tR(WW) {
      return TW(WW)
    }

    function TW(WW) {
      return (0, CW.p)(WW.url(), (0, AW.e)(WW.name))
    }
  },
  38277: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      i: () => wW
    });
    const wW = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new MW.U(MW(38280))
      }
    };
    const CW = {
      name: "bloxd_wasm_models",
      url: function() {
        return new MW.U(MW(38285))
      }
    }
  },
  5629: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(2801);
    const CW = {
      bloxd_wasm: () => "203c21aa685dc02d7135644abbcd3b43a006a971312aadf6b579e5c0912ba5f7",
      bloxd_wasm_client: () => "a77ff3d7010d2eb8b76b633277c458a02aa69d73a6b7b0f61b4b56c179565d82",
      bloxd_wasm_workers: () => "8f412dfdd4f30dbd2d7737bcfcbe48d8a44b2a8da10bfb2ae1b7e29d51125437",
      bloxd_wasm_models: () => "a2c24e83a17a8ea51d6d551a71c56cb26ce4162026e1cbbb094de7dc563c2466",
      bloxd_wasm_webgpu: () => "03136cbb4279f6e19dbdc7a6b27a89a1e9dbcfb41906d617400c1b8098a140cb",
      bloxd_wasm_webgl: () => "4b1a25494c2ed4cf220a7bb9a10b8c6844ff1f76c23929d2be00a88620743abd",
      bloxd_wasm_webgl1: () => "52bf789737e0035155091501532e60c5bb14c4059bdcbfb7216afa8b3715b02c",
      bloxd_wasm_replay: () => "1f5392d4ced29d91bff7aeba499f106661213b56c971b192288c4811b41cd07d",
      bloxd_wasm_recorder: () => "1fac86a86643ebd2010f3fe11c6a8cc2c6566f8162e97196ae75675bc3261673",
      bloxd_wasm_anim: () => "64cb5cc983adf707988a6c6507854d48955c50f80be9775c4150614da93910d2",
      bloxd_wasm_textures: () => "80b1e00de8cbc353671c67c9ae46a7c22ba4eb45364a0d4e33added505ec03be",
      bloxd_wasm_shader_pack: () => "13dad2e0aefbfe2a4f35d53d1b0b8cf2c467c8940e7540c4c139f66d272dac12"
    };
    var zR = MW(5631);

    function AW(WW) {
      const RW = Object.prototype.hasOwnProperty.call(CW, WW) ? CW[WW]() : void 0;
      if (void 0 !== RW) return {
        sha256: RW,
        onMismatch: zR.p
      };
      throw new wW.f(`${WW} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);