export const id = 119;
export const ids = [119];
export const modules = {
  38682: (FF, WF, SF) => {
    SF.d(WF, {
      C: () => MF,
      F: () => zW,
      G: () => UF,
      K: () => yW,
      M: () => fF,
      O: () => jW,
      P: () => HF,
      R: () => qW,
      b: () => BF,
      c: () => lF,
      g: () => nF,
      k: () => cW,
      o: () => XF,
      s: () => IF,
      v: () => wF,
      w: () => KF,
      x: () => pF,
      z: () => GF
    });
    var CF = SF(220),
      AF = SF(2232),
      uF = SF(2236),
      hF = SF(11),
      bW = SF(2197),
      dF = SF(2591),
      PF = SF(89),
      RF = SF(33),
      iW = SF(112),
      eF = SF(228),
      EF = SF(121),
      QF = SF(3793),
      rW = SF(38685),
      gW = SF(38693),
      tW = SF(38698);
    const TF = "bloxd-webgpuOffAfterLoss",
      aW = "context:webgl",
      kW = "probe:threw";

    function qW(FF) {
      let WF;
      try {
        WF = FF.getContext("webgl", {
          powerPreference: "high-performance"
        })
      } catch {
        WF = null
      }
      if (null === WF) return null;
      let SF = null;
      try {
        const FF = WF.getParameter(WF.MAX_TEXTURE_SIZE);
        SF = "number" === typeof FF && FF > 0 ? FF : null
      } catch {
        SF = null
      }
      try {
        var CF;
        null === (CF = WF.getExtension("WEBGL_lose_context")) || void 0 === CF || CF.loseContext()
      } catch {}
      return SF
    }
    const VF = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      NF = "mali_valhall";

    function DF() {
      var FF;
      return {
        gpu: null !== (FF = navigator.gpu) && void 0 !== FF ? FF : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(FF) {
          let WF, SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rW.d;
          try {
            WF = FF.getContext("webgl")
          } catch {
            WF = null
          }
          if (null === WF) return [aW];
          const CF = [];
          try {
            for (const AF of SF.extensions) null === WF.getExtension(AF) && CF.push(AF);
            for (const [AF, uF] of Object.entries(SF.limits)) {
              const FF = WF[AF],
                SF = "number" === typeof FF ? WF.getParameter(FF) : null;
              ("number" !== typeof SF || SF < uF) && CF.push(`limit:${AF}`)
            }
            const FF = WF.getShaderPrecisionFormat(WF.VERTEX_SHADER, WF.HIGH_FLOAT);
            (null === FF || FF.precision < SF.vertexHighFloatBits) && CF.push("precision:vertex_high_float")
          } catch {
            CF.push(kW)
          }
          try {
            var AF;
            null === (AF = WF.getExtension("WEBGL_lose_context")) || void 0 === AF || AF.loseContext()
          } catch {}
          return CF
        }(document.createElement("canvas")),
        offAfterLoss: () => mW((() => hF.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: FF => mW((() => (0, iW.h)(FF))),
        intelGen9: FF => mW((() => (0, iW.k)(FF))),
        gpuClassWebGlArm: FF => function(FF) {
          try {
            return FF()
          } catch {
            return null
          }
        }((() => {
          var WF, SF, CF, hF;
          const bW = null !== (WF = null === (SF = FF.info) || void 0 === SF ? void 0 : SF.vendor) && void 0 !== WF ? WF : "";
          return "windows" === (0, PF.getOperatingSystem)() && "" !== bW && "intel" !== (0, PF.normaliseGpuVendor)(bW) ? null : ((0, PF.seedGpuVendor)(bW), dF = (0, AF.m)(), RF = (0, uF.f)(bW, null !== (CF = null === (hF = FF.info) || void 0 === hF ? void 0 : hF.architecture) && void 0 !== CF ? CF : ""), VF.has(dF) ? "android_arm" === dF && RF === NF ? "webgpu_default" : "webgl_default" : null);
          var dF, RF
        })),
        storeGpuClassVerdict: FF => {
          RF.h.setItem(iW.v, FF)
        },
        gpuClassOnWebGl: FF => (0, eF.c)(FF),
        override: () => LF(!0),
        webGpuSetting: () => {
          const FF = RF.h.getItem(CF.gc);
          return "boolean" === typeof FF ? FF : null
        },
        heldBack: () => eF.e,
        windowsFirefox: () => (0, iW.j)(),
        intelGen9OnWebGl: () => eF.f,
        CC: () => mW((() => (0, dF.i)(PF.featureFlags.settings.canUseShaderPacks)))
      }
    }

    function LF(FF) {
      const WF = [() => new URLSearchParams(window.location.search).get(bW.d), () => RF.h.getItem(bW.f), () => {
        const WF = localStorage.getItem(TF);
        return null !== WF && FF && localStorage.removeItem(TF), "1" === WF ? "webgl2" : null
      }];
      for (const SF of WF) {
        let FF = null;
        try {
          FF = OF(SF())
        } catch {}
        if (null !== FF) return FF
      }
      return null
    }

    function mW(FF) {
      try {
        return FF()
      } catch {
        return !1
      }
    }

    function OF(FF) {
      return "lite" === FF ? "webgpu" : "webgl2" === FF || "babylon" === FF ? "webgl" : null
    }
    async function xW() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DF();
      const WF = await async function(FF) {
        var WF, SF, CF, AF;
        const uF = oF(FF),
          {
            source: hF
          } = uF,
          bW = !uF.asked,
          dF = function(FF) {
            return {
              reason: FF,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: hF
            }
          };
        if (!("gpu" in uF)) return dF(uF.refused);
        let PF;
        try {
          PF = await (0, gW.g)((0, EF.f)(uF.gpu), vW, `requestAdapter didn't settle in ${vW/1e3} s`)
        } catch {
          return dF("adapter_error")
        }
        if ("string" === typeof PF) return dF(PF);
        const RF = {
          vendor: null !== (WF = null === (SF = PF.info) || void 0 === SF ? void 0 : SF.vendor) && void 0 !== WF ? WF : "",
          architecture: null !== (CF = null === (AF = PF.info) || void 0 === AF ? void 0 : AF.architecture) && void 0 !== CF ? CF : ""
        };
        if ((0, EF.c)(PF)) return dF("software_adapter", RF);
        const iW = FF.intelGen9(PF),
          eF = iW ? null : FF.gpuClassWebGlArm(PF);
        if (FF.storeGpuClassVerdict(null !== eF && void 0 !== eF && eF), bW && FF.oldIntelDriver(PF)) return dF("old_intel_driver", RF);
        if ("default" === hF && FF.intelGen9OnWebGl() && iW) return dF("intel_gen9", RF);
        if ("default" === hF && null !== eF && FF.gpuClassOnWebGl(eF)) return dF("gpu_class_webgl", RF);
        return dF("none", RF)
      }(FF);
      if ("none" === WF.reason) return {
        backend: "webgpu",
        ...WF
      };
      if (FF.webgl2()) return {
        backend: "webgl",
        ...WF
      };
      const SF = FF.webgl1();
      return 0 === SF.length ? {
        backend: "webgl1",
        ...WF
      } : {
        missing: SF
      }
    }

    function ZF(FF) {
      return "override" === FF || "setting" === FF
    }

    function oF(FF) {
      const WF = FF.override(),
        SF = FF.webGpuSetting(),
        CF = null !== WF ? "override" : !0 === SF ? "setting" : FF.CC() ? "pack" : !1 === SF ? "setting" : "default",
        AF = ZF(CF);
      return "webgl" === WF || "setting" === CF && !1 === SF ? {
        source: CF,
        asked: AF,
        refused: "not_requested"
      } : FF.gpu ? "default" === CF && FF.heldBack() ? {
        source: CF,
        asked: AF,
        refused: "webgl_holdback"
      } : "default" === CF && FF.windowsFirefox() ? {
        source: CF,
        asked: AF,
        refused: "windows_firefox"
      } : !AF && FF.offAfterLoss() ? {
        source: CF,
        asked: AF,
        refused: "off_after_loss"
      } : {
        source: CF,
        asked: AF,
        gpu: FF.gpu
      } : {
        source: CF,
        asked: AF,
        refused: "no_webgpu_api"
      }
    }
    const YF = "bloxd-wasmLastPick";

    function MF(FF) {
      const WF = {
        backend: FF.backend,
        asked: ZF(FF.source)
      };
      try {
        localStorage.setItem(YF, JSON.stringify(WF))
      } catch {}
    }

    function cW() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        ...DF(),
        override: () => LF(!1),
        webgl2Api: "undefined" !== typeof WebGL2RenderingContext,
        lastPick: () => {
          var FF, WF;
          let SF = null;
          try {
            var CF;
            SF = JSON.parse(null !== (CF = localStorage.getItem(YF)) && void 0 !== CF ? CF : "null")
          } catch {}
          const AF = null === (FF = SF) || void 0 === FF ? void 0 : FF.backend;
          return "webgpu" !== AF && "webgl" !== AF && "webgl1" !== AF || "boolean" !== typeof(null === (WF = SF) || void 0 === WF ? void 0 : WF.asked) ? null : {
            backend: AF,
            asked: SF.asked
          }
        }
      };
      const WF = FF.lastPick(),
        SF = oF(FF);
      return "gpu" in SF ? null !== WF && WF.asked === SF.asked ? WF.backend : "webgpu" : null !== WF && "webgpu" !== WF.backend ? WF.backend : FF.webgl2Api ? "webgl" : null
    }
    async function GF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DF();
      if (null === FF) return null;
      const SF = await xW(WF);
      return "missing" in SF ? SF : {
        ...SF,
        load: FF[SF.backend]
      }
    }
    async function zW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DF().gpu,
        SF = arguments.length > 2 ? arguments[2] : void 0;
      if ("webgpu" !== FF.backend) return !1;
      if (null !== FF.adapter && (0, iW.l)(FF.adapter, SF)) return !0;
      if (null === WF) return !1;
      try {
        var CF;
        const FF = await (0, gW.g)(WF.requestAdapter({
          powerPreference: "low-power"
        }), vW, `the low-power requestAdapter didn't settle in ${vW/1e3} s`);
        return (0, iW.l)(null !== (CF = null === FF || void 0 === FF ? void 0 : FF.info) && void 0 !== CF ? CF : {}, SF)
      } catch (AF) {
        return AF instanceof gW.d
      }
    }

    function IF(FF) {
      return null !== FF && "missing" in FF
    }

    function fF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.b;
      try {
        const WF = FF.turnOffWebGpuAfterDeviceLoss();
        return "webgpu" === OF(RF.h.getItem(bW.f)) && RF.h.removeItem(bW.f), WF
      } catch {
        return !1
      }
    }

    function yW() {
      return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !HF()) ? fF() ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const sF = "framePacing";

    function nF(FF) {
      const WF = new URLSearchParams(FF).get(sF);
      return null !== WF && /^\d{1,9}$/.test(WF) ? Number(WF) : void 0
    }

    function HF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === OF(new URLSearchParams(FF).get(bW.d))
      } catch {
        return !1
      }
    }

    function KF(FF) {
      return !!wF(FF) || FF instanceof Error && !(FF instanceof WebAssembly.RuntimeError) && FF.message.startsWith(`${QF.f.RenderSurfaceUnusable}:`)
    }

    function wF(FF) {
      const {
        name: WF,
        message: SF
      } = null !== FF && void 0 !== FF ? FF : {};
      return "InvalidStateError" === WF && "string" === typeof SF && SF.startsWith("GPUDevice.")
    }

    function XF(FF) {
      const WF = FF;
      return "function" === typeof WF.uPF && "function" === typeof WF.hPF ? WF : null
    }

    function UF(FF) {
      return "function" === typeof FF.ePF ? FF : null
    }
    const BF = "openRenderer";

    function jW(FF) {
      const WF = null === FF || void 0 === FF ? void 0 : FF.ViF();
      return void 0 === WF ? void 0 : new Error(WF)
    }
    const vW = 5e3,
      JF = 15e3;

    function pF(FF, WF, SF, CF, AF, uF) {
      return (0, gW.g)(function(FF, WF, SF, CF, AF, uF) {
        return (0, tW.g)(FF, WF, (() => FF.ePF(SF, CF, AF, uF.indirectHangs, uF.framesAhead)))
      }(FF, WF, SF, CF, AF, uF), JF, `${QF.f.RenderSurfaceUnusable}: the renderer didn't open in ${JF/1e3} s`, FW)
    }
    async function lF(FF, WF, SF, CF, AF, uF) {
      if ("function" !== typeof FF.eeF) throw new Error("this core has no set_renderer");
      const hF = await pF(WF, BF, SF, AF, CF, uF);
      try {
        FF.eeF(hF)
      } catch (bW) {
        throw FW(hF), bW
      }
    }

    function FW(FF) {
      try {
        FF.free()
      } catch {}
    }
  },
  38685: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF
    });
    const CF = {
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
  38698: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      g: () => RF,
      k: () => hF,
      m: () => dF
    });
    var CF = SF(38700);
    class AF extends Error {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${FF}: the module trapped${SF?" in an earlier call":""}: ${String(WF)}`, {
          cause: WF
        }), this.site = FF, this.trap = WF, this.earlier = SF, this.name = "ModuleTrapError", WF instanceof Error && void 0 !== WF.stack && (this.stack = `${this.name}: ${this.message}\n${WF.stack}`)
      }
    }
    const uF = new WeakMap;

    function hF(FF) {
      return uF.has(FF)
    }

    function bW(FF, WF) {
      uF.has(FF) || uF.set(FF, WF)
    }

    function dF(FF, WF) {
      return !!(0, CF.d)(WF) && (bW(FF, WF), !0)
    }
    const PF = [
      ["error", FF => FF.error],
      ["unhandledrejection", FF => FF.reason]
    ];

    function RF(FF, WF, SF) {
      let hF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return uF.has(FF) ? Promise.reject(new AF(WF, uF.get(FF), !0)) : new Promise(((uF, dF) => {
        const RF = SF => {
            bW(FF, SF), EF(), dF(new AF(WF, SF))
          },
          iW = FF => {
            FF instanceof WebAssembly.RuntimeError ? RF(FF) : (EF(), dF(FF))
          },
          eF = PF.map((FF => {
            let [WF, SF] = FF;
            return [WF, FF => {
              const WF = SF(FF);
              (0, CF.d)(WF) && RF(WF)
            }]
          })),
          EF = () => {
            for (const [FF, WF] of eF) null === hF || void 0 === hF || hF.removeEventListener(FF, WF)
          };
        for (const [FF, WF] of eF) null === hF || void 0 === hF || hF.addEventListener(FF, WF);
        let QF;
        try {
          QF = SF()
        } catch (rW) {
          return void iW(rW)
        }
        QF.then((FF => {
          EF(), uF(FF)
        }), iW)
      }))
    }
  },
  38707: (FF, WF, SF) => {
    SF.d(WF, {
      C: () => tW,
      F: () => kW,
      J: () => qW,
      c: () => gW,
      f: () => EF,
      i: () => VF,
      m: () => NF,
      o: () => eF,
      q: () => rW,
      u: () => RF,
      x: () => aW,
      z: () => LF
    });
    var CF = SF(38682),
      AF = SF(38710);
    let uF = null,
      hF = () => {};
    const bW = new Promise((FF => {
        hF = FF
      })),
      dF = new Promise((() => {}));
    let PF = null;

    function RF(FF) {
      PF = FF
    }
    let iW = !1;

    function eF() {
      iW = !0
    }

    function EF() {
      return iW
    }
    let QF = !1;

    function rW() {
      QF = !0
    }

    function gW() {
      return QF
    }

    function tW() {
      return PF
    }
    let TF = null;

    function aW(FF) {
      TF = FF
    }

    function kW() {
      return TF
    }

    function qW() {
      return null === uF && (uF = (0, CF.z)(AF.i).then((FF => (null === FF || (0, CF.s)(FF) || (0, CF.C)(FF), FF))), hF(uF.catch((() => null)))), uF
    }
    async function VF() {
      if (null !== uF) {
        const FF = await uF;
        return (0, CF.s)(FF) ? null : {
          build: await NF(FF),
          superseded: dF
        }
      }
      if (null === AF.i) return {
        build: await NF(null),
        superseded: dF
      };
      const FF = (0, CF.k)();
      if (null === FF) return null;
      const WF = await AF.i[FF]();
      if (null !== uF) return null;
      return {
        build: WF,
        superseded: bW.then((WF => null === WF || (0, CF.s)(WF) || WF.backend !== FF ? void 0 : dF))
      }
    }

    function NF(FF) {
      return FF ? FF.load() : Promise.resolve().then((function() {
        var FF = new Error("Cannot find module '@bloxd/wasm/client'");
        throw FF.code = "MODULE_NOT_FOUND", FF
      })).then((FF => FF.bloxdWasmClient))
    }
    let DF = null;

    function LF() {
      return DF ??= qW().then((async FF => ({
        indirectHangs: null !== FF && !(0, CF.s)(FF) && await (0, CF.F)(FF),
        framesAhead: (0, CF.g)(window.location.search)
      }))), DF
    }
  },
  38710: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      i: () => CF
    });
    const CF = {
        webgpu: async () => (await SF.e(7).then((() => SF(41110)))).bloxdWasmWebgpu,
        webgl: async () => (await SF.e(5).then((() => SF(41118)))).bloxdWasmWebgl,
        webgl1: async () => (await SF.e(6).then((() => SF(41133)))).bloxdWasmWebgl1
      },
      AF = async () => (await SF.e(4).then((() => SF(41143)))).compileAnimationPackInWasm
  },
  38693: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF,
      e: () => uF,
      g: () => bW
    });
    const CF = 250,
      AF = 1e3;

    function uF() {
      return "undefined" !== typeof document && document.hidden
    }
    class hF extends Error {}

    function bW(FF, WF, SF) {
      let bW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
        dF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uF;
      return new Promise(((uF, PF) => {
        let RF = !1,
          iW = WF,
          eF = performance.now(),
          EF = !dF();
        const QF = setInterval((() => {
          const FF = performance.now(),
            WF = EF;
          EF = !dF(), WF && EF && (iW -= Math.min(FF - eF, AF)), eF = FF, iW <= 0 && (RF = !0, clearInterval(QF), PF(new hF(SF)))
        }), CF);
        FF.then((FF => {
          clearInterval(QF), RF ? bW(FF) : (RF = !0, uF(FF))
        }), (FF => {
          clearInterval(QF), RF || (RF = !0, PF(FF))
        }))
      }))
    }
  },
  38700: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      e: () => hF
    });
    const CF = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function AF(FF) {
      if (FF instanceof WebAssembly.RuntimeError) return !0;
      const WF = FF instanceof Error ? FF.stack : void 0;
      return "string" === typeof WF && CF.test(WF)
    }
    const uF = 500;

    function hF(FF) {
      let WF = "[object Object]";
      try {
        WF = String(FF)
      } catch {}
      if ("[object Object]" !== WF) return WF;
      try {
        var SF, CF;
        return null !== (SF = null === (CF = JSON.stringify(FF)) || void 0 === CF ? void 0 : CF.slice(0, uF)) && void 0 !== SF ? SF : WF
      } catch {
        return WF
      }
    }
  },
  38679: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/bloxd_wasm_models_bg.4bcf8c1ca9b4667ddf76.wasm"
  },
  38674: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/bloxd_wasm_workers_bg.c93d23f08d7333a6afeb.wasm"
  },
  34921: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => eF,
      i: () => RF
    });
    var CF = SF(2903),
      AF = SF(2906),
      uF = SF(2911),
      hF = SF(5592),
      bW = SF(5597);
    let dF = null,
      PF = !1;

    function RF(FF, WF, SF) {
      return null === dF ? dF = iW(FF, WF) : FF !== dF.build ? console.warn(`Bloxd wasm: ${FF.name} was asked for after ${dF.build.name} started loading, which this thread keeps`) : WF.name !== dF.workers.name && console.warn(`Bloxd wasm: ${WF.name} was asked for workers after ${dF.workers.name}, which this thread keeps`), SF?.reloadFailedDownload && !PF && (0, CF.Z)() && (PF = !0, dF = iW(dF.build, dF.workers)), dF.loaded
    }

    function iW(FF, WF) {
      const SF = (0, CF.K)((async () => {
        (0, bW.y)();
        const SF = EF(FF),
          CF = WF.name === FF.name ? SF : EF(WF);
        await (0, uF.g)([SF, CF]);
        const AF = await SF,
          hF = await CF;
        return (0, bW.y)(), {
          module: AF,
          workerModule: hF
        }
      }), FF);
      return {
        build: FF,
        workers: WF,
        loaded: SF
      }
    }
    async function eF(FF) {
      return EF(FF)
    }

    function EF(FF) {
      return (0, AF.w)(FF.url(), (0, hF.c)(FF.name))
    }
  },
  38665: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      g: () => CF
    });
    const CF = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new SF.U(SF(38674))
      }
    };
    const AF = {
      name: "bloxd_wasm_models",
      url: function() {
        return new SF.U(SF(38679))
      }
    }
  },
  5592: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(2906);
    const AF = {
      bloxd_wasm: () => "efcb444ad55054c75697ffc5686b17c1e3eb879bb002e111d264400e5de1a7ef",
      bloxd_wasm_client: () => "65255c90568b92887cb7530f65eed7c264bd4d50f08bc9bc108e00e98823fda1",
      bloxd_wasm_workers: () => "2cf8c5bb27543bd4c7dd6eabc3ff93edf11951f5cdb3a91906a467fc555106a3",
      bloxd_wasm_models: () => "a35d9de38e3cf77c5e0fd6302e8d6441c7b74c8d7bbbc2107b391ee98e2a8705",
      bloxd_wasm_webgpu: () => "4651122938542673b8d1bb5182e5a3e9ea54388c7db91adaeb4e878c90357e28",
      bloxd_wasm_webgl: () => "2da9697d5fa07af2fa6a6c154de5747af69b0b82f9d43c42e23748cb38e5d792",
      bloxd_wasm_webgl1: () => "3291109b80221408283e1499ae815394058938b8c353b9666d4b000ec38111b5",
      bloxd_wasm_replay: () => "fbae3a18b4e1534e284a9b41c64ea1f4ca46295ede9f96f6f2eb289bfbc00eb7",
      bloxd_wasm_recorder: () => "4da07565cbac43c165e972a237929edb5cb5009240c5c6feb67a3d80d0a13d20",
      bloxd_wasm_anim: () => "92ff8c8ca8cb8ec6f988da657ebcbaa7cc34b2565776af355950e873d8dba0ec",
      bloxd_wasm_textures: () => "87d7ce2c083790ea891ab410fab82340e4cae9ea4816c1f40ed5a2411f277fef",
      bloxd_wasm_shader_pack: () => "0618b025e02df188195cc584c0eaec51b0034deee6589ca394e966c72f4d3bfa"
    };
    var uF = SF(5597);

    function hF(FF) {
      const WF = Object.prototype.hasOwnProperty.call(AF, FF) ? AF[FF]() : void 0;
      if (void 0 !== WF) return {
        sha256: WF,
        onMismatch: uF.x
      };
      throw new CF.g(`${FF} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);