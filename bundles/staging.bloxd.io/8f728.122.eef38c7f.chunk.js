export const id = 122;
export const ids = [122];
export const modules = {
  38798: (cB, Bc, nc) => {
    nc.d(Bc, {
      B: () => Gc,
      E: () => Ec,
      I: () => Dc,
      M: () => oc,
      N: () => iB,
      O: () => kB,
      Q: () => wc,
      T: () => xB,
      X: () => Fc,
      Y: () => aB,
      b: () => Kc,
      f: () => cn,
      j: () => Hc,
      n: () => Nc,
      r: () => Rc,
      v: () => Wc,
      w: () => jB,
      y: () => Jc
    });
    var Vc = nc(244),
      Ic = nc(226),
      rB = nc(233),
      uc = nc(27),
      sc = nc(2202),
      Mc = nc(2585),
      Pc = nc(107),
      qB = nc(51),
      Oc = nc(134),
      Tc = nc(256),
      fc = nc(142),
      mB = nc(138),
      ec = nc(3846),
      tB = nc(38801),
      Sc = nc(35097),
      yB = nc(38810);
    const zB = "bloxd-webgpuOffAfterLoss",
      pc = "context:webgl",
      hc = "probe:threw";

    function aB(cB) {
      let Bc;
      try {
        Bc = cB.getContext("webgl", {
          powerPreference: fc.e
        })
      } catch {
        Bc = null
      }
      if (null === Bc) return null;
      let nc = null;
      try {
        const cB = Bc.getParameter(Bc.MAX_TEXTURE_SIZE);
        nc = "number" === typeof cB && cB > 0 ? cB : null
      } catch {
        nc = null
      }
      try {
        var Vc;
        null === (Vc = Bc.getExtension("WEBGL_lose_context")) || void 0 === Vc || Vc.loseContext()
      } catch {}
      return nc
    }
    const lc = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      Yc = "mali_valhall";

    function Lc() {
      var cB;
      return {
        gpu: null !== (cB = navigator.gpu) && void 0 !== cB ? cB : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(cB) {
          let Bc, nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tB.d;
          try {
            Bc = cB.getContext("webgl")
          } catch {
            Bc = null
          }
          if (null === Bc) return [pc];
          const Vc = [];
          try {
            for (const Ic of nc.extensions) null === Bc.getExtension(Ic) && Vc.push(Ic);
            for (const [Ic, rB] of Object.entries(nc.limits)) {
              const cB = Bc[Ic],
                nc = "number" === typeof cB ? Bc.getParameter(cB) : null;
              ("number" !== typeof nc || nc < rB) && Vc.push(`limit:${Ic}`)
            }
            const cB = Bc.getShaderPrecisionFormat(Bc.VERTEX_SHADER, Bc.HIGH_FLOAT);
            (null === cB || cB.precision < nc.vertexHighFloatBits) && Vc.push("precision:vertex_high_float")
          } catch {
            Vc.push(hc)
          }
          try {
            var Ic;
            null === (Ic = Bc.getExtension("WEBGL_lose_context")) || void 0 === Ic || Ic.loseContext()
          } catch {}
          return Vc
        }(document.createElement("canvas")),
        offAfterLoss: () => Uc((() => uc.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: cB => Uc((() => (0, Oc.h)(cB))),
        intelGen9: cB => Uc((() => (0, Oc.l)(cB))),
        gpuClassWebGlArm: cB => function(cB) {
          try {
            return cB()
          } catch {
            return null
          }
        }((() => {
          var Bc, nc, Vc, uc;
          const sc = null !== (Bc = null === (nc = cB.info) || void 0 === nc ? void 0 : nc.vendor) && void 0 !== Bc ? Bc : "";
          return "windows" === (0, Pc.getOperatingSystem)() && "" !== sc && "intel" !== (0, Pc.normaliseGpuVendor)(sc) ? null : ((0, Pc.seedGpuVendor)(sc), Mc = (0, Ic.f)(), qB = (0, rB.h)(sc, null !== (Vc = null === (uc = cB.info) || void 0 === uc ? void 0 : uc.architecture) && void 0 !== Vc ? Vc : ""), lc.has(Mc) ? "android_arm" === Mc && qB === Yc ? "webgpu_default" : "webgl_default" : null);
          var Mc, qB
        })),
        storeGpuClassVerdict: cB => {
          qB.h.setItem(Oc.y, cB)
        },
        gpuClassOnWebGl: cB => (0, Tc.d)(cB),
        override: () => gB(!0),
        webGpuSetting: () => {
          const cB = qB.h.getItem(Vc.fc);
          return "boolean" === typeof cB ? cB : null
        },
        heldBack: () => Tc.f,
        intelGen9OnWebGl: () => Tc.i,
        qI: () => Uc((() => (0, Mc.d)(Pc.featureFlags.settings.canUseShaderPacks)))
      }
    }

    function gB(cB) {
      const Bc = [() => new URLSearchParams(window.location.search).get(sc.c), () => qB.h.getItem(sc.d), () => {
        const Bc = localStorage.getItem(zB);
        return null !== Bc && cB && localStorage.removeItem(zB), "1" === Bc ? "webgl2" : null
      }];
      for (const nc of Bc) {
        let cB = null;
        try {
          cB = bB(nc())
        } catch {}
        if (null !== cB) return cB
      }
      return null
    }

    function Uc(cB) {
      try {
        return cB()
      } catch {
        return !1
      }
    }

    function bB(cB) {
      return "lite" === cB ? "webgpu" : "webgl2" === cB || "babylon" === cB ? "webgl" : null
    }
    async function Zc() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lc();
      const Bc = await async function(cB) {
        var Bc, nc, Vc, Ic;
        const rB = Cc(cB),
          {
            source: uc
          } = rB,
          sc = !rB.asked,
          Mc = function(cB) {
            return {
              reason: cB,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: uc
            }
          };
        if (!("gpu" in rB)) return Mc(rB.refused);
        let Pc;
        try {
          Pc = await (0, Sc.f)((0, mB.i)(rB.gpu), dc, `requestAdapter didn't settle in ${dc/1e3} s`)
        } catch {
          return Mc("adapter_error")
        }
        if ("string" === typeof Pc) return Mc(Pc);
        const qB = {
          vendor: null !== (Bc = null === (nc = Pc.info) || void 0 === nc ? void 0 : nc.vendor) && void 0 !== Bc ? Bc : "",
          architecture: null !== (Vc = null === (Ic = Pc.info) || void 0 === Ic ? void 0 : Ic.architecture) && void 0 !== Vc ? Vc : ""
        };
        if ((0, mB.c)(Pc)) return Mc("software_adapter", qB);
        const Oc = cB.intelGen9(Pc),
          Tc = Oc ? null : cB.gpuClassWebGlArm(Pc);
        if (cB.storeGpuClassVerdict(null !== Tc && void 0 !== Tc && Tc), sc && cB.oldIntelDriver(Pc)) return Mc("old_intel_driver", qB);
        if ("default" === uc && cB.intelGen9OnWebGl() && Oc) return Mc("intel_gen9", qB);
        if ("default" === uc && null !== Tc && cB.gpuClassOnWebGl(Tc)) return Mc("gpu_class_webgl", qB);
        return Mc("none", qB)
      }(cB);
      if ("none" === Bc.reason) return {
        backend: "webgpu",
        ...Bc
      };
      if (cB.webgl2()) return {
        backend: "webgl",
        ...Bc
      };
      const nc = cB.webgl1();
      return 0 === nc.length ? {
        backend: "webgl1",
        ...Bc
      } : {
        missing: nc
      }
    }

    function Qc(cB) {
      return "override" === cB || "setting" === cB
    }

    function Cc(cB) {
      const Bc = cB.override(),
        nc = cB.webGpuSetting(),
        Vc = null !== Bc ? "override" : !0 === nc ? "setting" : cB.qI() ? "pack" : !1 === nc ? "setting" : "default",
        Ic = Qc(Vc);
      return "webgl" === Bc || "setting" === Vc && !1 === nc ? {
        source: Vc,
        asked: Ic,
        refused: "not_requested"
      } : cB.gpu ? "default" === Vc && cB.heldBack() ? {
        source: Vc,
        asked: Ic,
        refused: "webgl_holdback"
      } : !Ic && cB.offAfterLoss() ? {
        source: Vc,
        asked: Ic,
        refused: "off_after_loss"
      } : {
        source: Vc,
        asked: Ic,
        gpu: cB.gpu
      } : {
        source: Vc,
        asked: Ic,
        refused: "no_webgpu_api"
      }
    }
    const vB = "bloxd-wasmLastPick";

    function Dc(cB) {
      const Bc = {
        backend: cB.backend,
        asked: Qc(cB.source)
      };
      try {
        localStorage.setItem(vB, JSON.stringify(Bc))
      } catch {}
    }

    function Nc() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        ...Lc(),
        override: () => gB(!1),
        webgl2Api: "undefined" !== typeof WebGL2RenderingContext,
        lastPick: () => {
          var cB, Bc;
          let nc = null;
          try {
            var Vc;
            nc = JSON.parse(null !== (Vc = localStorage.getItem(vB)) && void 0 !== Vc ? Vc : "null")
          } catch {}
          const Ic = null === (cB = nc) || void 0 === cB ? void 0 : cB.backend;
          return "webgpu" !== Ic && "webgl" !== Ic && "webgl1" !== Ic || "boolean" !== typeof(null === (Bc = nc) || void 0 === Bc ? void 0 : Bc.asked) ? null : {
            backend: Ic,
            asked: nc.asked
          }
        }
      };
      const Bc = cB.lastPick(),
        nc = Cc(cB);
      return "gpu" in nc ? null !== Bc && Bc.asked === nc.asked ? Bc.backend : "webgpu" : null !== Bc && "webgpu" !== Bc.backend ? Bc.backend : cB.webgl2Api ? "webgl" : null
    }
    async function Ec(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lc();
      if (null === cB) return null;
      const nc = await Zc(Bc);
      return "missing" in nc ? nc : {
        ...nc,
        load: cB[nc.backend]
      }
    }
    async function oc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lc().gpu,
        nc = arguments.length > 2 ? arguments[2] : void 0;
      if ("webgpu" !== cB.backend) return !1;
      if (null !== cB.adapter && (0, Oc.m)(cB.adapter, nc)) return !0;
      if (null === Bc) return !1;
      try {
        var Vc;
        const cB = await (0, Sc.f)(Bc.requestAdapter({
          powerPreference: "low-power"
        }), dc, `the low-power requestAdapter didn't settle in ${dc/1e3} s`);
        return (0, Oc.m)(null !== (Vc = null === cB || void 0 === cB ? void 0 : cB.info) && void 0 !== Vc ? Vc : {}, nc)
      } catch (Ic) {
        return Ic instanceof Sc.d
      }
    }

    function Wc(cB) {
      return null !== cB && "missing" in cB
    }

    function wc() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.d;
      try {
        const Bc = cB.turnOffWebGpuAfterDeviceLoss();
        return "webgpu" === bB(qB.h.getItem(sc.d)) && qB.h.removeItem(sc.d), Bc
      } catch {
        return !1
      }
    }

    function kB() {
      return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !Fc()) ? wc() ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Xc = "framePacing";

    function Hc(cB) {
      const Bc = new URLSearchParams(cB).get(Xc);
      return null !== Bc && /^\d{1,9}$/.test(Bc) ? Number(Bc) : void 0
    }

    function Fc() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === bB(new URLSearchParams(cB).get(sc.c))
      } catch {
        return !1
      }
    }

    function Jc(cB) {
      return !!jB(cB) || cB instanceof Error && !(cB instanceof WebAssembly.RuntimeError) && cB.message.startsWith(`${ec.c.RenderSurfaceUnusable}:`)
    }

    function jB(cB) {
      const {
        name: Bc,
        message: nc
      } = null !== cB && void 0 !== cB ? cB : {};
      return "InvalidStateError" === Bc && "string" === typeof nc && nc.startsWith("GPUDevice.")
    }

    function Rc(cB) {
      const Bc = cB;
      return "function" === typeof Bc.QPc && "function" === typeof Bc.CPc ? Bc : null
    }

    function iB(cB) {
      return "function" === typeof cB.kqc ? cB : null
    }
    const Kc = "openRenderer";

    function xB(cB) {
      const Bc = null === cB || void 0 === cB ? void 0 : cB.dOc();
      return void 0 === Bc ? void 0 : new Error(Bc)
    }
    const dc = 5e3,
      Ac = 15e3;

    function Gc(cB, Bc, nc, Vc, Ic, rB) {
      return (0, Sc.f)(function(cB, Bc, nc, Vc, Ic, rB) {
        return (0, yB.e)(cB, Bc, (() => cB.kqc(nc, Vc, Ic, rB.indirectHangs, rB.framesAhead)))
      }(cB, Bc, nc, Vc, Ic, rB), Ac, `${ec.c.RenderSurfaceUnusable}: the renderer didn't open in ${Ac/1e3} s`, BB)
    }
    async function cn(cB, Bc, nc, Vc, Ic, rB) {
      if ("function" !== typeof cB.WTc) throw new Error("this core has no set_renderer");
      const uc = await Gc(Bc, Kc, nc, Ic, Vc, rB);
      try {
        cB.WTc(uc)
      } catch (sc) {
        throw BB(uc), sc
      }
    }

    function BB(cB) {
      try {
        cB.free()
      } catch {}
    }
  },
  38801: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc
    });
    const Vc = {
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
  38810: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      e: () => qB,
      i: () => uc,
      k: () => Mc
    });
    var Vc = nc(38814);
    class Ic extends Error {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${cB}: the module trapped${nc?" in an earlier call":""}: ${String(Bc)}`, {
          cause: Bc
        }), this.site = cB, this.trap = Bc, this.earlier = nc, this.name = "ModuleTrapError", Bc instanceof Error && void 0 !== Bc.stack && (this.stack = `${this.name}: ${this.message}\n${Bc.stack}`)
      }
    }
    const rB = new WeakMap;

    function uc(cB) {
      return rB.has(cB)
    }

    function sc(cB, Bc) {
      rB.has(cB) || rB.set(cB, Bc)
    }

    function Mc(cB, Bc) {
      return !!(0, Vc.c)(Bc) && (sc(cB, Bc), !0)
    }
    const Pc = [
      ["error", cB => cB.error],
      ["unhandledrejection", cB => cB.reason]
    ];

    function qB(cB, Bc, nc) {
      let uc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return rB.has(cB) ? Promise.reject(new Ic(Bc, rB.get(cB), !0)) : new Promise(((rB, Mc) => {
        const qB = nc => {
            sc(cB, nc), fc(), Mc(new Ic(Bc, nc))
          },
          Oc = cB => {
            cB instanceof WebAssembly.RuntimeError ? qB(cB) : (fc(), Mc(cB))
          },
          Tc = Pc.map((cB => {
            let [Bc, nc] = cB;
            return [Bc, cB => {
              const Bc = nc(cB);
              (0, Vc.c)(Bc) && qB(Bc)
            }]
          })),
          fc = () => {
            for (const [cB, Bc] of Tc) null === uc || void 0 === uc || uc.removeEventListener(cB, Bc)
          };
        for (const [cB, Bc] of Tc) null === uc || void 0 === uc || uc.addEventListener(cB, Bc);
        let mB;
        try {
          mB = nc()
        } catch (ec) {
          return void Oc(ec)
        }
        mB.then((cB => {
          fc(), rB(cB)
        }), Oc)
      }))
    }
  },
  38820: (cB, Bc, nc) => {
    nc.d(Bc, {
      A: () => aB,
      b: () => Sc,
      e: () => mB,
      h: () => lc,
      i: () => Yc,
      k: () => fc,
      n: () => tB,
      r: () => Oc,
      u: () => pc,
      v: () => gB,
      x: () => yB,
      z: () => hc
    });
    var Vc = nc(27),
      Ic = nc(38798),
      rB = nc(38822);
    let uc = null,
      sc = () => {};
    const Mc = new Promise((cB => {
        sc = cB
      })),
      Pc = new Promise((() => {}));
    let qB = null;

    function Oc(cB) {
      qB = cB
    }
    let Tc = !1;

    function fc() {
      Tc = !0
    }

    function mB() {
      return Tc
    }
    let ec = !1;

    function tB() {
      ec = !0
    }

    function Sc() {
      return ec
    }

    function yB() {
      return qB
    }
    let zB = null;

    function pc(cB) {
      zB = cB
    }

    function hc() {
      return zB
    }

    function aB() {
      return null === uc && (uc = (0, Ic.E)(rB.g).then((cB => (null === cB || (0, Ic.v)(cB) || ((0, Ic.I)(cB), Vc.d.followGameGpu("webgpu" === cB.backend ? cB.adapter : null)), cB))), sc(uc.catch((() => null)))), uc
    }
    async function lc() {
      if (null !== uc) {
        const cB = await uc;
        return (0, Ic.v)(cB) ? null : {
          build: await Yc(cB),
          superseded: Pc
        }
      }
      if (null === rB.g) return {
        build: await Yc(null),
        superseded: Pc
      };
      const cB = (0, Ic.n)();
      if (null === cB) return null;
      const Bc = await rB.g[cB]();
      if (null !== uc) return null;
      return {
        build: Bc,
        superseded: Mc.then((Bc => null === Bc || (0, Ic.v)(Bc) || Bc.backend !== cB ? void 0 : Pc))
      }
    }

    function Yc(cB) {
      return cB ? cB.load() : Promise.resolve().then((function() {
        var cB = new Error("Cannot find module '@bloxd/wasm/client'");
        throw cB.code = "MODULE_NOT_FOUND", cB
      })).then((cB => cB.bloxdWasmClient))
    }
    let Lc = null;

    function gB() {
      return Lc ??= aB().then((async cB => ({
        indirectHangs: null !== cB && !(0, Ic.v)(cB) && await (0, Ic.M)(cB),
        framesAhead: (0, Ic.j)(window.location.search)
      }))), Lc
    }
  },
  38822: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      g: () => Vc
    });
    const Vc = {
        webgpu: async () => (await nc.e(8).then((() => nc(41145)))).bloxdWasmWebgpu,
        webgl: async () => (await nc.e(6).then((() => nc(41157)))).bloxdWasmWebgl,
        webgl1: async () => (await nc.e(7).then((() => nc(41169)))).bloxdWasmWebgl1
      },
      Ic = async () => (await nc.e(5).then((() => nc(41179)))).compileAnimationPackInWasm
  },
  35097: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      e: () => rB,
      f: () => sc
    });
    const Vc = 250,
      Ic = 1e3;

    function rB() {
      return "undefined" !== typeof document && document.hidden
    }
    class uc extends Error {}

    function sc(cB, Bc, nc) {
      let sc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
        Mc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rB;
      return new Promise(((rB, Pc) => {
        let qB = !1,
          Oc = Bc,
          Tc = performance.now(),
          fc = !Mc();
        const mB = setInterval((() => {
          const cB = performance.now(),
            Bc = fc;
          fc = !Mc(), Bc && fc && (Oc -= Math.min(cB - Tc, Ic)), Tc = cB, Oc <= 0 && (qB = !0, clearInterval(mB), Pc(new uc(nc)))
        }), Vc);
        cB.then((cB => {
          clearInterval(mB), qB ? sc(cB) : (qB = !0, rB(cB))
        }), (cB => {
          clearInterval(mB), qB || (qB = !0, Pc(cB))
        }))
      }))
    }
  },
  38814: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      e: () => uc
    });
    const Vc = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Ic(cB) {
      if (cB instanceof WebAssembly.RuntimeError) return !0;
      const Bc = cB instanceof Error ? cB.stack : void 0;
      return "string" === typeof Bc && Vc.test(Bc)
    }
    const rB = 500;

    function uc(cB) {
      let Bc = "[object Object]";
      try {
        Bc = String(cB)
      } catch {}
      if ("[object Object]" !== Bc) return Bc;
      try {
        var nc, Vc;
        return null !== (nc = null === (Vc = JSON.stringify(cB)) || void 0 === Vc ? void 0 : Vc.slice(0, rB)) && void 0 !== nc ? nc : Bc
      } catch {
        return Bc
      }
    }
  },
  38792: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/bloxd_wasm_models_bg.1941d653971760ad1bb6.wasm"
  },
  38786: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/bloxd_wasm_workers_bg.6ade5fff16dcb3394502.wasm"
  },
  35045: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Tc,
      h: () => qB
    });
    var Vc = nc(2870),
      Ic = nc(2876),
      rB = nc(2878),
      uc = nc(5590),
      sc = nc(5599);
    let Mc = null,
      Pc = !1;

    function qB(cB, Bc, nc) {
      return null === Mc ? Mc = Oc(cB, Bc) : cB !== Mc.build ? console.warn(`Bloxd wasm: ${cB.name} was asked for after ${Mc.build.name} started loading, which this thread keeps`) : Bc.name !== Mc.workers.name && console.warn(`Bloxd wasm: ${Bc.name} was asked for workers after ${Mc.workers.name}, which this thread keeps`), nc?.reloadFailedDownload && !Pc && (0, Vc.Z)() && (Pc = !0, Mc = Oc(Mc.build, Mc.workers)), Mc.loaded
    }

    function Oc(cB, Bc) {
      const nc = (0, Vc.L)((async () => {
        (0, sc.z)();
        const nc = fc(cB),
          Vc = Bc.name === cB.name ? nc : fc(Bc);
        await (0, rB.d)([nc, Vc]);
        const Ic = await nc,
          uc = await Vc;
        return (0, sc.z)(), {
          module: Ic,
          workerModule: uc
        }
      }), cB);
      return {
        build: cB,
        workers: Bc,
        loaded: nc
      }
    }
    async function Tc(cB) {
      return fc(cB)
    }

    function fc(cB) {
      return (0, Ic.w)(cB.url(), (0, uc.c)(cB.name))
    }
  },
  38780: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => Vc
    });
    const Vc = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new nc.U(nc(38786))
      }
    };
    const Ic = {
      name: "bloxd_wasm_models",
      url: function() {
        return new nc.U(nc(38792))
      }
    }
  },
  5590: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(2876);
    const Ic = {
      bloxd_wasm: () => "9830e55728d5b3a3e8e247acd9246d2afe9397afee3d7679c5186851b795279c",
      bloxd_wasm_client: () => "43b3dfe64b3f024b6ccadbc049b79c4bb01c3e906087eb702c13c76147ff6677",
      bloxd_wasm_workers: () => "f4667efb6edb11a5211786ebcbc8ff7ce445266c880aec3c3d635a4938e6ddee",
      bloxd_wasm_models: () => "e94dddee8db9a336b3072dca709432712894517261740ac0727858f4eb30123c",
      bloxd_wasm_webgpu: () => "dc3942e9838cce244b965d553196c7d403b31e947a3320d8fe5125346df312a4",
      bloxd_wasm_webgl: () => "a7d28f783db7c957405c1710e67df1a6dd352be69de5c1e6f77063bd8a448f21",
      bloxd_wasm_webgl1: () => "8c83eaeef0605129534a3d33690b45134286f4be4c6b67256ccbc82b15fb0a71",
      bloxd_wasm_replay: () => "26e1b96269b08aacc0c285eeee797aaac2ec51f6c54851fc1f5723fb98d27bc7",
      bloxd_wasm_recorder: () => "4fb59ecd47035f4cb6fb6b1e85d7546f4a01834acf32b594b6cd3fcac63a1867",
      bloxd_wasm_anim: () => "8ad9f4be7b931ce1b3f37c84ac34ed980350e5fc2f4b2d370736511ed2d289b4",
      bloxd_wasm_textures: () => "c51701085747355a7c41b99390b0bf4d2f6651a7c8972b29cc009568c50194b7",
      bloxd_wasm_shader_pack: () => "20f2099776f53d80b4976988e6dc4239208c30631bebb5d9cd48e9735424635d"
    };
    var rB = nc(5599);

    function uc(cB) {
      const Bc = Object.prototype.hasOwnProperty.call(Ic, cB) ? Ic[cB]() : void 0;
      if (void 0 !== Bc) return {
        sha256: Bc,
        onMismatch: rB.y
      };
      throw new Vc.j(`${cB} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);