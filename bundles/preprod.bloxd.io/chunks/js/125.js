export const id = 125;
export const ids = [125];
export const modules = {
  39288: (yb, bb, Wy) => {
    Wy.d(bb, {
      D: () => Fy,
      H: () => Qy,
      K: () => dy,
      M: () => jb,
      P: () => wy,
      S: () => tb,
      V: () => bW,
      W: () => zb,
      X: () => Ry,
      d: () => yW,
      g: () => fb,
      i: () => Ny,
      m: () => py,
      n: () => Ay,
      p: () => Dy,
      s: () => xb,
      u: () => Iy,
      w: () => hb,
      z: () => Ly
    });
    var Uy = Wy(248),
      hy = Wy(229),
      fy = Wy(234),
      Zy = Wy(19),
      cb = Wy(2444),
      Py = Wy(2263),
      oy = Wy(2754),
      By = Wy(94),
      Ky = Wy(139),
      ey = Wy(244),
      qb = Wy(33),
      sy = Wy(240),
      Sy = Wy(107),
      Ey = Wy(555),
      ly = Wy(121),
      mb = Wy(114),
      Cy = Wy(4001),
      Ty = Wy(39297),
      Vy = Wy(2363),
      Jy = Wy(39305);
    const gb = "bloxd-webgpuOffAfterLoss",
      Gy = "context:webgl",
      Oy = "probe:threw";

    function Ry(yb) {
      let bb;
      try {
        bb = yb.getContext("webgl", {
          powerPreference: ly.d
        })
      } catch {
        bb = null
      }
      if (null === bb) return null;
      let Wy = null;
      try {
        const yb = bb.getParameter(bb.MAX_TEXTURE_SIZE);
        Wy = "number" === typeof yb && yb > 0 ? yb : null
      } catch {
        Wy = null
      }
      try {
        var Uy;
        null === (Uy = bb.getExtension("WEBGL_lose_context")) || void 0 === Uy || Uy.loseContext()
      } catch {}
      return Wy
    }
    const vb = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      ib = "mali_valhall";

    function My() {
      var yb;
      return {
        gpu: null !== (yb = navigator.gpu) && void 0 !== yb ? yb : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(yb) {
          let bb, Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ty.b;
          try {
            bb = yb.getContext("webgl")
          } catch {
            bb = null
          }
          if (null === bb) return [Gy];
          const Uy = [];
          try {
            for (const hy of Wy.extensions) null === bb.getExtension(hy) && Uy.push(hy);
            for (const [hy, fy] of Object.entries(Wy.limits)) {
              const yb = bb[hy],
                Wy = "number" === typeof yb ? bb.getParameter(yb) : null;
              ("number" !== typeof Wy || Wy < fy) && Uy.push(`limit:${hy}`)
            }
            const yb = bb.getShaderPrecisionFormat(bb.VERTEX_SHADER, bb.HIGH_FLOAT);
            (null === yb || yb.precision < Wy.vertexHighFloatBits) && Uy.push("precision:vertex_high_float")
          } catch {
            Uy.push(Oy)
          }
          try {
            var hy;
            null === (hy = bb.getExtension("WEBGL_lose_context")) || void 0 === hy || hy.loseContext()
          } catch {}
          return Uy
        }(document.createElement("canvas")),
        offAfterLoss: yb => Xy((() => yb ? (0, sy.n)() : Zy.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: yb => Xy((() => (0, Sy.c)(yb))),
        intelGen9: yb => Xy((() => (0, Sy.i)(yb))),
        gpuClassWebGlArm: yb => function(yb) {
          try {
            return yb()
          } catch {
            return null
          }
        }((() => {
          var bb, Wy, Uy, Zy;
          const cb = null !== (bb = null === (Wy = yb.info) || void 0 === Wy ? void 0 : Wy.vendor) && void 0 !== bb ? bb : "";
          return "windows" === (0, By.getOperatingSystem)() && "" !== cb && "intel" !== (0, By.normaliseGpuVendor)(cb) ? null : ((0, By.seedGpuVendor)(cb), Py = (0, hy.h)(), oy = (0, fy.i)(cb, null !== (Uy = null === (Zy = yb.info) || void 0 === Zy ? void 0 : Zy.architecture) && void 0 !== Uy ? Uy : ""), vb.has(Py) ? "android_arm" === Py && oy === ib ? "webgpu_default" : "webgl_default" : null);
          var Py, oy
        })),
        storeGpuClassVerdict: yb => {
          qb.e.setItem(Sy.u, yb)
        },
        gpuClassOnWebGl: yb => (0, Ey.c)(yb),
        override: () => Yy(!0),
        webGpuSetting: () => {
          const yb = qb.e.getItem(Uy._b);
          return "boolean" === typeof yb ? yb : null
        },
        heldBack: () => Ey.f,
        intelGen9OnWebGl: () => Ey.h,
        eU: () => Xy((() => (0, oy.e)(By.featureFlags.settings.canUseShaderPacks))),
        ios: () => "mobileIos" === Ky.u || Xy((() => "ios" === (0, By.getOperatingSystem)()))
      }
    }

    function Yy(yb) {
      if ((0, cb.l)("render") && "webgl1" === (0, cb.j)("renderer")) return "webgl1";
      const bb = [() => new URLSearchParams(window.location.search).get(Py.c), () => qb.e.getItem(Py.g), () => {
        const bb = localStorage.getItem(gb);
        return null !== bb && yb && localStorage.removeItem(gb), "1" === bb ? "webgl2" : null
      }];
      for (const Wy of bb) {
        let yb = null;
        try {
          yb = ny(Wy())
        } catch {}
        if (null !== yb) return yb
      }
      return null
    }

    function Xy(yb) {
      try {
        return yb()
      } catch {
        return !1
      }
    }

    function ny(yb) {
      return "lite" === yb ? "webgpu" : "webgl2" === yb || "babylon" === yb ? "webgl" : null
    }
    async function uy() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : My();
      const bb = await async function(yb) {
        var bb, Wy, Uy, hy;
        const fy = Hy(yb),
          {
            source: Zy
          } = fy,
          cb = !fy.asked,
          Py = function(yb) {
            return {
              reason: yb,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: Zy
            }
          };
        if (!("gpu" in fy)) return Py(fy.refused);
        let oy;
        try {
          oy = await (0, Vy.h)((0, mb.j)(fy.gpu), Wb, `requestAdapter didn't settle in ${Wb/1e3} s`)
        } catch {
          return Py("adapter_error")
        }
        if ("string" === typeof oy) return Py(oy);
        const By = {
          vendor: null !== (bb = null === (Wy = oy.info) || void 0 === Wy ? void 0 : Wy.vendor) && void 0 !== bb ? bb : "",
          architecture: null !== (Uy = null === (hy = oy.info) || void 0 === hy ? void 0 : hy.architecture) && void 0 !== Uy ? Uy : ""
        };
        if ((0, mb.d)(oy)) return Py("software_adapter", By);
        const Ky = yb.intelGen9(oy),
          ey = Ky ? null : yb.gpuClassWebGlArm(oy);
        if (yb.storeGpuClassVerdict(null !== ey && void 0 !== ey && ey), cb && yb.oldIntelDriver(oy)) return Py("old_intel_driver", By);
        if ("default" === Zy && yb.intelGen9OnWebGl() && Ky) return Py("intel_gen9", By);
        if ("default" === Zy && null !== ey && yb.gpuClassOnWebGl(ey)) return Py("gpu_class_webgl", By);
        return Py("none", By)
      }(yb);
      if ("none" === bb.reason) return {
        backend: "webgpu",
        ...bb
      };
      if ("webgl1" !== yb.override() && yb.webgl2()) return {
        backend: "webgl",
        ...bb
      };
      const Wy = yb.webgl1();
      return 0 === Wy.length ? {
        backend: "webgl1",
        ...bb
      } : {
        missing: Wy
      }
    }

    function rb(yb) {
      return "override" === yb || "setting" === yb
    }

    function Hy(yb) {
      const bb = yb.override(),
        Wy = yb.webGpuSetting(),
        Uy = null !== bb ? "override" : !0 === Wy ? "setting" : yb.eU() ? "pack" : !1 === Wy ? "setting" : "default",
        hy = rb(Uy);
      return "webgl" === bb || "webgl1" === bb || "setting" === Uy && !1 === Wy ? {
        source: Uy,
        asked: hy,
        refused: "not_requested"
      } : yb.gpu ? "override" !== Uy && yb.ios() ? {
        source: Uy,
        asked: hy,
        refused: "gpu_class_webgl"
      } : "default" === Uy && yb.heldBack() ? {
        source: Uy,
        asked: hy,
        refused: "webgl_holdback"
      } : !hy && yb.offAfterLoss("pack" === Uy) ? {
        source: Uy,
        asked: hy,
        refused: "off_after_loss"
      } : {
        source: Uy,
        asked: hy,
        gpu: yb.gpu
      } : {
        source: Uy,
        asked: hy,
        refused: "no_webgpu_api"
      }
    }
    const ab = "bloxd-wasmLastPick";

    function Fy(yb) {
      if ("override" === yb.source && "webgl1" === yb.backend) return;
      const bb = {
        backend: yb.backend,
        asked: rb(yb.source)
      };
      try {
        localStorage.setItem(ab, JSON.stringify(bb))
      } catch {}
    }

    function py() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        ...My(),
        override: () => Yy(!1),
        webgl2Api: "undefined" !== typeof WebGL2RenderingContext,
        lastPick: () => {
          var yb, bb;
          let Wy = null;
          try {
            var Uy;
            Wy = JSON.parse(null !== (Uy = localStorage.getItem(ab)) && void 0 !== Uy ? Uy : "null")
          } catch {}
          const hy = null === (yb = Wy) || void 0 === yb ? void 0 : yb.backend;
          return "webgpu" !== hy && "webgl" !== hy && "webgl1" !== hy || "boolean" !== typeof(null === (bb = Wy) || void 0 === bb ? void 0 : bb.asked) ? null : {
            backend: hy,
            asked: Wy.asked
          }
        }
      };
      if ("webgl1" === yb.override()) return "webgl1";
      const bb = yb.lastPick(),
        Wy = Hy(yb);
      return "gpu" in Wy ? null !== bb && bb.asked === Wy.asked ? bb.backend : "webgpu" : null !== bb && "webgpu" !== bb.backend ? bb.backend : yb.webgl2Api ? "webgl" : null
    }
    async function Ly(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : My();
      if (null === yb) return null;
      const Wy = await uy(bb);
      return "missing" in Wy ? Wy : {
        ...Wy,
        load: yb[Wy.backend]
      }
    }
    async function Qy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : My().gpu,
        Wy = arguments.length > 2 ? arguments[2] : void 0;
      if ("webgpu" !== yb.backend) return !1;
      if (null !== yb.adapter && (0, Sy.k)(yb.adapter, Wy)) return !0;
      if (null === bb) return !1;
      try {
        var Uy;
        const yb = await (0, Vy.h)(bb.requestAdapter({
          powerPreference: "low-power"
        }), Wb, `the low-power requestAdapter didn't settle in ${Wb/1e3} s`);
        return (0, Sy.k)(null !== (Uy = null === yb || void 0 === yb ? void 0 : yb.info) && void 0 !== Uy ? Uy : {}, Wy)
      } catch (hy) {
        return hy instanceof Vy.c
      }
    }

    function jb(yb, bb, Wy) {
      if ("webgpu" !== yb.backend) return !1;
      const Uy = new URLSearchParams(bb).get("terrainFetch");
      return "texture" === Uy || "storage" === Uy ? "texture" === Uy : null !== yb.adapter && (0, Sy.e)(yb.adapter, Wy)
    }

    function Dy(yb) {
      return null !== yb && "missing" in yb
    }

    function tb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zy.d;
      try {
        const Wy = "start_failed" === yb || "pipeline_failed" === yb,
          Uy = bb.turnOffWebGpuAfterDeviceLoss(Wy ? "visible" : (0, sy.c)((0, ey.l)()));
        return bb.isWebGpuOffAfterLoss() && "webgpu" === ny(qb.e.getItem(Py.g)) && qb.e.removeItem(Py.g), Uy
      } catch {
        return !1
      }
    }

    function wy(yb) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !zb()) ? tb(yb) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const kb = "framePacing";

    function Ny(yb) {
      const bb = new URLSearchParams(yb).get(kb);
      return null !== bb && /^\d{1,9}$/.test(bb) ? Number(bb) : void 0
    }

    function zb() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === ny(new URLSearchParams(yb).get(Py.c))
      } catch {
        return !1
      }
    }

    function Iy(yb) {
      return !!xb(yb) || yb instanceof Error && !(yb instanceof WebAssembly.RuntimeError) && yb.message.startsWith(`${Cy.f.RenderSurfaceUnusable}:`)
    }

    function xb(yb) {
      const {
        name: bb,
        message: Wy
      } = null !== yb && void 0 !== yb ? yb : {};
      return "InvalidStateError" === bb && "string" === typeof Wy && Wy.startsWith("GPUDevice.")
    }

    function Ay(yb) {
      const bb = yb;
      return "function" === typeof bb.Loy && "function" === typeof bb.Qoy ? bb : null
    }

    function dy(yb) {
      return "function" === typeof yb.Ioy ? yb : null
    }
    const yW = "openRenderer";

    function bW(yb) {
      const bb = null === yb || void 0 === yb ? void 0 : yb.eey();
      return void 0 === bb ? void 0 : new Error(bb)
    }
    const Wb = 5e3,
      Ub = 15e3;

    function hb(yb, bb, Wy, Uy, hy, fy) {
      return (0, Vy.h)(function(yb, bb, Wy, Uy, hy, fy) {
        return (0, Jy.f)(yb, bb, (() => yb.Ioy(Wy, Uy, hy, fy.indirectHangs, fy.storagePullBreaks, fy.framesAhead)))
      }(yb, bb, Wy, Uy, hy, fy), Ub, `${Cy.f.RenderSurfaceUnusable}: the renderer didn't open in ${Ub/1e3} s`, Zb)
    }
    async function fb(yb, bb, Wy, Uy, hy, fy) {
      if ("function" !== typeof yb.bsy) throw new Error("this core has no set_renderer");
      const Zy = await hb(bb, yW, Wy, hy, Uy, fy);
      try {
        yb.bsy(Zy)
      } catch (cb) {
        throw Zb(Zy), cb
      }
    }

    function Zb(yb) {
      try {
        yb.free()
      } catch {}
    }
  },
  39297: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    const Uy = {
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
  39305: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy,
      f: () => By,
      i: () => Zy,
      k: () => Py
    });
    var Uy = Wy(39307);
    class hy extends Error {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${yb}: the module trapped${Wy?" in an earlier call":""}: ${String(bb)}`, {
          cause: bb
        }), this.site = yb, this.trap = bb, this.earlier = Wy, this.name = "ModuleTrapError", bb instanceof Error && void 0 !== bb.stack && (this.stack = `${this.name}: ${this.message}\n${bb.stack}`)
      }
    }
    const fy = new WeakMap;

    function Zy(yb) {
      return fy.has(yb)
    }

    function cb(yb, bb) {
      fy.has(yb) || fy.set(yb, bb)
    }

    function Py(yb, bb) {
      return !!(0, Uy.b)(bb) && (cb(yb, bb), !0)
    }
    const oy = [
      ["error", yb => yb.error],
      ["unhandledrejection", yb => yb.reason]
    ];

    function By(yb, bb, Wy) {
      let Zy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return fy.has(yb) ? Promise.reject(new hy(bb, fy.get(yb), !0)) : new Promise(((fy, Py) => {
        const By = Wy => {
            cb(yb, Wy), qb(), Py(new hy(bb, Wy))
          },
          Ky = yb => {
            yb instanceof WebAssembly.RuntimeError ? By(yb) : (qb(), Py(yb))
          },
          ey = oy.map((yb => {
            let [bb, Wy] = yb;
            return [bb, yb => {
              const bb = Wy(yb);
              (0, Uy.b)(bb) && By(bb)
            }]
          })),
          qb = () => {
            for (const [yb, bb] of ey) null === Zy || void 0 === Zy || Zy.removeEventListener(yb, bb)
          };
        for (const [yb, bb] of ey) null === Zy || void 0 === Zy || Zy.addEventListener(yb, bb);
        let sy;
        try {
          sy = Wy()
        } catch (Sy) {
          return void Ky(Sy)
        }
        sy.then((yb => {
          qb(), fy(yb)
        }), Ky)
      }))
    }
  },
  39310: (yb, bb, Wy) => {
    Wy.d(bb, {
      C: () => Ry,
      F: () => Vy,
      G: () => Gy,
      I: () => Oy,
      e: () => Ty,
      i: () => ly,
      k: () => vb,
      o: () => ib,
      p: () => Ey,
      q: () => Cy,
      t: () => sy,
      u: () => gb,
      y: () => Yy
    });
    var Uy = Wy(19),
      hy = Wy(244),
      fy = Wy(39288),
      Zy = Wy(39317),
      cb = Wy(39322);
    let Py = null,
      oy = () => {};
    const By = new Promise((yb => {
        oy = yb
      })),
      Ky = new Promise((() => {}));
    let ey = null,
      qb = null;

    function sy(yb) {
      qb = yb
    }
    let Sy = !1;

    function Ey() {
      Sy = !0
    }

    function ly() {
      return Sy
    }
    let mb = !1;

    function Cy() {
      mb = !0
    }

    function Ty() {
      return mb
    }

    function Vy() {
      return qb
    }
    let Jy = null;

    function gb(yb) {
      Jy = yb, (0, hy.d)(yb)
    }

    function Gy() {
      return Jy
    }

    function Oy() {
      return null === Py && ((0, hy.o)(), Py = (0, fy.z)(Zy.e).then((yb => (null === yb || (0, fy.p)(yb) || (ey = cb.b[yb.backend], (0, fy.D)(yb), Uy.d.followGameGpu("webgpu" === yb.backend ? yb.adapter : null)), yb))), oy(Py.catch((() => null)))), Py
    }

    function Ry() {
      return ey
    }
    async function vb() {
      if (null !== Py) {
        const yb = await Py;
        return (0, fy.p)(yb) ? null : {
          build: await ib(yb),
          superseded: Ky
        }
      }
      if (null === Zy.e) return {
        build: await ib(null),
        superseded: Ky
      };
      const yb = (0, fy.m)();
      if (null === yb) return null;
      const bb = await Zy.e[yb]();
      if (null !== Py) return null;
      return {
        build: bb,
        superseded: By.then((bb => null === bb || (0, fy.p)(bb) || bb.backend !== yb ? void 0 : Ky))
      }
    }

    function ib(yb) {
      return yb ? yb.load() : Promise.resolve().then((function() {
        var yb = new Error("Cannot find module '@bloxd/wasm/client'");
        throw yb.code = "MODULE_NOT_FOUND", yb
      })).then((yb => yb.bloxdWasmClient))
    }
    let My = null;

    function Yy() {
      return My ??= Oy().then((async yb => {
        const bb = null !== yb && !(0, fy.p)(yb);
        return {
          indirectHangs: bb && await (0, fy.H)(yb),
          storagePullBreaks: bb && (0, fy.M)(yb, window.location.search),
          framesAhead: (0, fy.i)(window.location.search)
        }
      })), My
    }
  },
  39322: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    const Uy = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39317: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      e: () => Uy
    });
    const Uy = {
        webgpu: async () => (await Wy.e(8).then((() => Wy(41766)))).bloxdWasmWebgpu,
        webgl: async () => (await Wy.e(6).then((() => Wy(41774)))).bloxdWasmWebgl,
        webgl1: async () => (await Wy.e(7).then((() => Wy(41780)))).bloxdWasmWebgl1
      },
      hy = async () => (await Wy.e(5).then((() => Wy(41795)))).compileAnimationPackInWasm
  },
  39307: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      f: () => Zy
    });
    const Uy = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function hy(yb) {
      if (yb instanceof WebAssembly.RuntimeError) return !0;
      const bb = yb instanceof Error ? yb.stack : void 0;
      return "string" === typeof bb && Uy.test(bb)
    }
    const fy = 500;

    function Zy(yb) {
      let bb = "[object Object]";
      try {
        bb = String(yb)
      } catch {}
      if ("[object Object]" !== bb) return bb;
      try {
        var Wy, Uy;
        return null !== (Wy = null === (Uy = JSON.stringify(yb)) || void 0 === Uy ? void 0 : Uy.slice(0, fy)) && void 0 !== Wy ? Wy : bb
      } catch {
        return bb
      }
    }
  },
  39284: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bloxd_wasm_models_bg.92aee5d85e208db9318f.wasm"
  },
  39275: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bloxd_wasm_workers_bg.0e99145adbd1827b17ae.wasm"
  },
  35132: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ey,
      h: () => By
    });
    var Uy = Wy(2995),
      hy = Wy(3004),
      fy = Wy(3006),
      Zy = Wy(5876),
      cb = Wy(5885);
    let Py = null,
      oy = !1;

    function By(yb, bb, Wy) {
      return null === Py ? Py = Ky(yb, bb) : yb !== Py.build ? console.warn(`Bloxd wasm: ${yb.name} was asked for after ${Py.build.name} started loading, which this thread keeps`) : bb.name !== Py.workers.name && console.warn(`Bloxd wasm: ${bb.name} was asked for workers after ${Py.workers.name}, which this thread keeps`), Wy?.reloadFailedDownload && !oy && (0, Uy.Z)() && (oy = !0, Py = Ky(Py.build, Py.workers)), Py.loaded
    }

    function Ky(yb, bb) {
      const Wy = (0, Uy.G)((async () => {
        (0, cb.D)();
        const Wy = qb(yb),
          Uy = bb.name === yb.name ? Wy : qb(bb);
        await (0, fy.f)([Wy, Uy]);
        const hy = await Wy,
          Zy = await Uy;
        return (0, cb.D)(), {
          module: hy,
          workerModule: Zy
        }
      }), yb);
      return {
        build: yb,
        workers: bb,
        loaded: Wy
      }
    }
    async function ey(yb) {
      return qb(yb)
    }

    function qb(yb) {
      return (0, hy.z)(yb.url(), (0, Zy.c)(yb.name))
    }
  },
  39273: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      h: () => Uy
    });
    const Uy = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new Wy.U(Wy(39275))
      }
    };
    const hy = {
      name: "bloxd_wasm_models",
      url: function() {
        return new Wy.U(Wy(39284))
      }
    }
  },
  5876: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(3004);
    const hy = {
      bloxd_wasm: () => "e989db87a5f557ada4026e67d4a47376d430f543eee7f32e573c5d2b0032769c",
      bloxd_wasm_client: () => "8d612fbb1f0fe61d983b3bb2556fca3c1e0e6e782fc4ff198ebb3ba8107630a1",
      bloxd_wasm_workers: () => "cbab96479f2e9d4b565163fbfed0a59652418d0ac96c6e003d25c290e07d4914",
      bloxd_wasm_models: () => "cc3b97b02887fd959e6aac8c92ca5a5dfadcad1b80974004972b3a75c05d019a",
      bloxd_wasm_webgpu: () => "f3096279c3044b96be48162245d6e2e7da73e95228a85108b38562687782c907",
      bloxd_wasm_webgl: () => "d1cf22f5f978b51ac1b571ba29da08f1047b0873e044e89ec4676008d8fb7dbe",
      bloxd_wasm_webgl1: () => "4f03aae37dd37be5853f99a485338b001156b35ae47408243bd7f398d9dadad0",
      bloxd_wasm_replay: () => "3a65742f81727412c93734593748664778ee7e0f880fb5b4fe95355c282b47f8",
      bloxd_wasm_recorder: () => "bdd92d3bc5cb3b7a56800dfdad0945608d21aaed71ba700787eff7a8f099dcb8",
      bloxd_wasm_anim: () => "fa451e940fd7a94a9f64df816befb028036aee037b6fddac4025b8a26ccc6baa",
      bloxd_wasm_textures: () => "a73fa025fa307732d8ccf3d5ffb9a75731ee9d6cc37337ca3de332d06d5f932c",
      bloxd_wasm_shader_pack: () => "f3b46e3e760a1ee4ffe1e8533bd7ea8910dfaab4ac6a38d16a2f09b79c3a124d"
    };
    var fy = Wy(5885);

    function Zy(yb) {
      const bb = Object.prototype.hasOwnProperty.call(hy, yb) ? hy[yb]() : void 0;
      if (void 0 !== bb) return {
        sha256: bb,
        onMismatch: fy.z
      };
      throw new Uy.f(`${yb} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);