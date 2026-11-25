export const id = 140;
export const ids = [140];
export const modules = {
  39110: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => Ou,
      c: () => fu,
      g: () => cu,
      k: () => Nu,
      n: () => hu,
      r: () => bu,
      u: () => Cu,
      y: () => Xu
    });
    var su = ju(330),
      Uu = ju(1767);
    const Zu = "A valid external Instance reference no longer exists.";

    function Xu(uu) {
      return uu.includes(Zu)
    }
    const lu = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      qu = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const fu = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function Cu(uu, Eu) {
      return uu ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(uu) {
        var Eu;
        const ju = null !== (Eu = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(uu)) && void 0 !== Eu ? Eu : /failed with ([A-Z][A-Z0-9_]+)/.exec(uu);
        return ju ? ju[1] : Xu(uu) ? "gpu_process_lost" : "other"
      }(Eu)
    }

    function bu(uu) {
      return `${(null===uu||void 0===uu?void 0:uu.vendor)||"unknown vendor"} ${(null===uu||void 0===uu?void 0:uu.architecture)||"unknown architecture"}`
    }

    function cu(uu) {
      return Du(uu)[1]
    }

    function Nu(uu) {
      return Du(uu)[2]
    }

    function Ou(uu, Eu, ju) {
      const Uu = (0, su.d)(),
        Zu = null !== Uu && Uu >= Eu,
        Xu = document.hidden ? "hidden" : Zu ? "shown" : "visible",
        lu = Zu ? ju - Uu : null;
      return {
        page: null === lu ? Xu : `${Xu}${cu(lu)}`,
        code: `${uu}_${null===lu?Xu:`${Xu}_${Nu(lu)}`}_${Yu(ju)}`
      }
    }

    function Yu(uu) {
      if ((0, Uu.d)()) return "ad_open";
      const Eu = (0, Uu.b)();
      return null === Eu ? "ad_none" : `ad_${Nu(uu-Eu.endedAt)}_${Eu.pageHid?"h":"v"}`
    }

    function hu(uu) {
      return gu(qu, uu)[1]
    }

    function Du(uu) {
      return gu(lu, uu)
    }

    function gu(uu, Eu) {
      var ju;
      return null !== (ju = uu.find((uu => {
        let [ju] = uu;
        return Eu < ju
      }))) && void 0 !== ju ? ju : uu[uu.length - 1]
    }
  },
  40897: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      h: () => Cu,
      k: () => Xu,
      l: () => Uu,
      p: () => lu,
      r: () => fu
    });
    class su extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Uu(uu) {
      return uu instanceof RangeError && /call stack/i.test(uu.message) || uu instanceof Error && "InternalError" === uu.name && /recursion/i.test(uu.message)
    }
    const Zu = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Xu(uu) {
      var Eu;
      return uu instanceof WebAssembly.RuntimeError || uu instanceof su || Uu(uu) && Zu.test(null !== (Eu = uu.stack) && void 0 !== Eu ? Eu : "")
    }

    function lu(uu, Eu) {
      if (Xu(uu)) throw uu;
      console.error(Eu, uu)
    }

    function qu(uu, Eu, ju, Uu, Zu) {
      if (Eu % Uu !== 0 || Eu + ju > uu.byteLength) throw new su(`${Zu}: ${ju} bytes at ${Eu}, ${Uu}-aligned, outside ${uu.byteLength} bytes of memory`)
    }

    function fu(uu, Eu, ju, su, Uu) {
      return 0 === ju ? null : (qu(Eu, ju, su * uu.BYTES_PER_ELEMENT, uu.BYTES_PER_ELEMENT, Uu), new uu(Eu, ju, su))
    }

    function Cu(uu, Eu, ju, su, Uu) {
      return 0 === Eu ? null : (qu(uu, Eu, ju, su, Uu), new DataView(uu, Eu, ju))
    }
  },
  40963: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => fE,
      B: () => hE,
      F: () => Tu,
      G: () => Au,
      K: () => Bu,
      M: () => Ru,
      Q: () => zu,
      R: () => nu,
      V: () => EE,
      Z: () => cE,
      ab: () => uE,
      db: () => yu,
      e: () => Pu,
      fb: () => jE,
      gb: () => ZE,
      h: () => NE,
      j: () => DE,
      jb: () => qE,
      mb: () => ku,
      n: () => lE,
      q: () => bE,
      t: () => UE,
      x: () => CE
    });
    var su = ju(337),
      Uu = ju(267),
      Zu = ju(274),
      Xu = ju(22),
      lu = ju(2943),
      qu = ju(719),
      fu = ju(4700),
      Cu = ju(2916),
      bu = ju(3651),
      cu = ju(91),
      Nu = ju(330),
      Ou = ju(31),
      Yu = ju(326),
      hu = ju(115),
      Du = ju(676),
      gu = ju(124),
      Mu = ju(117),
      eu = ju(4976),
      Gu = ju(40967),
      pu = ju(1843),
      wu = ju(40971),
      Ju = ju(34505),
      du = ju(40980);
    const au = "bloxd-webgpuOffAfterLoss",
      Pu = "context:webgl",
      ou = "probe:threw";

    function ku(uu) {
      let Eu;
      try {
        Eu = uu.getContext("webgl", {
          powerPreference: gu.d
        })
      } catch {
        Eu = null
      }
      if (null === Eu) return null;
      let ju = null;
      try {
        const uu = Eu.getParameter(Eu.MAX_TEXTURE_SIZE);
        ju = "number" === typeof uu && uu > 0 ? uu : null
      } catch {
        ju = null
      }
      try {
        var su;
        null === (su = Eu.getExtension("WEBGL_lose_context")) || void 0 === su || su.loseContext()
      } catch {}
      return ju
    }
    const mu = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function vu() {
      return "ios" === (0, cu.getOperatingSystem)() ? "ios" : "other"
    }
    const Ku = "mali_valhall",
      Vu = new Set(["nvidia_pre_turing"]),
      ru = new Set(["intel_gen7_8"]);

    function Qu(uu, Eu) {
      return mu.has(uu) ? "android_arm" === uu && Eu === Ku ? "webgpu_default" : "webgl_default" : null
    }

    function iu(uu) {
      return function(uu) {
        try {
          return uu()
        } catch {
          return null
        }
      }((() => {
        var Eu, ju, su, Xu;
        const lu = null !== (Eu = null === (ju = uu.info) || void 0 === ju ? void 0 : ju.vendor) && void 0 !== Eu ? Eu : "";
        return "windows" === (0, cu.getOperatingSystem)() && "" !== lu && "intel" !== (0, cu.normaliseGpuVendor)(lu) ? null : ((0, cu.seedGpuVendor)(lu), Qu((0, Uu.h)(), (0, Zu.g)(lu, null !== (su = null === (Xu = uu.info) || void 0 === Xu ? void 0 : Xu.architecture) && void 0 !== su ? su : "")))
      }))
    }

    function Wu() {
      var uu;
      return {
        gpu: null !== (uu = navigator.gpu) && void 0 !== uu ? uu : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(uu) {
          let Eu, ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Gu.c;
          try {
            Eu = uu.getContext("webgl")
          } catch {
            Eu = null
          }
          if (null === Eu) return [Pu];
          const su = [];
          try {
            for (const Uu of ju.extensions) null === Eu.getExtension(Uu) && su.push(Uu);
            for (const [Uu, Zu] of Object.entries(ju.limits)) {
              const uu = Eu[Uu],
                ju = "number" === typeof uu ? Eu.getParameter(uu) : null;
              ("number" !== typeof ju || ju < Zu) && su.push(`limit:${Uu}`)
            }
            const uu = Eu.getShaderPrecisionFormat(Eu.VERTEX_SHADER, Eu.HIGH_FLOAT);
            (null === uu || uu.precision < ju.vertexHighFloatBits) && su.push("precision:vertex_high_float")
          } catch {
            su.push(ou)
          }
          try {
            var Uu;
            null === (Uu = Eu.getExtension("WEBGL_lose_context")) || void 0 === Uu || Uu.loseContext()
          } catch {}
          return su
        }(document.createElement("canvas")),
        offAfterLoss: uu => Iu((() => uu ? (0, Yu.D)() : Xu.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: uu => Iu((() => (0, hu.g)(uu))),
        intelGen9: uu => Iu((() => (0, hu.n)(uu))),
        storeIntelGen9Verdict: uu => {
          Ou.k.setItem(hu.J, uu)
        },
        gpuClassWebGlArm: iu,
        storeGpuClassVerdict: uu => {
          Ou.k.setItem(hu.H, uu)
        },
        gpuClassOnWebGl: uu => (0, Du.c)(uu),
        webGlDefaultFamily: uu => ru.has((0, Zu.g)(uu.vendor, uu.architecture)),
        storeWebGlDefaultFamilyVerdict: uu => {
          Ou.k.setItem(hu.Q, uu)
        },
        override: () => Su(),
        claimed: () => Fu((0, qu.n)()),
        webGpuSetting: () => {
          const uu = Ou.k.getItem(su.jc);
          return "boolean" === typeof uu ? uu : null
        },
        heldBack: () => Du.d,
        storeHoldbackSpared: uu => {
          Ou.k.setItem(hu.D, uu)
        },
        intelGen9OnWebGl: () => Du.g,
        AN: () => Iu((() => (0, bu.d)(cu.featureFlags.settings.canUseShaderPacks))),
        windows: () => Iu((() => "windows" === (0, cu.getOperatingSystem)())),
        defaultCompatibility: Ju.d
      }
    }

    function Su() {
      let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, lu.p)("render") && "webgl1" === (0, lu.l)("renderer")) return "webgl1";
      const Eu = [() => new URLSearchParams(window.location.search).get(Cu.e), () => Ou.k.getItem(Cu.f), () => {
        const Eu = localStorage.getItem(au);
        return null !== Eu && uu && localStorage.removeItem(au), "1" === Eu ? "webgl2" : null
      }];
      for (const ju of Eu) {
        let uu = null;
        try {
          uu = Fu(ju())
        } catch {}
        if (null !== uu) return uu
      }
      return null
    }

    function Iu(uu) {
      try {
        return uu()
      } catch {
        return !1
      }
    }

    function Fu(uu) {
      return "lite" === uu ? "webgpu" : "webgl2" === uu || "babylon" === uu ? "webgl" : null
    }

    function Bu(uu) {
      return "none" === uu || "compatibility_mode" === uu
    }
    async function Lu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wu();
      const Eu = await async function(uu) {
        const Eu = xu(uu),
          {
            source: ju
          } = Eu,
          su = !Eu.asked,
          Uu = "gpu" in Eu && Eu.heldBack,
          Xu = function(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return Uu && !Bu(uu) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: ju
            } : {
              reason: uu,
              adapter: Eu,
              source: ju
            }
          };
        if (!("gpu" in Eu)) return Xu(Eu.refused);
        let lu;
        try {
          lu = await (0, pu.i)((0, Mu.o)(Eu.gpu, {
            compatibility: tu(uu, Eu)
          }), OE, `requestAdapter didn't settle in ${OE/1e3} s`)
        } catch {
          return Xu("adapter_error")
        }
        if ("string" === typeof lu) return Xu(lu);
        const {
          adapter: qu,
          compatibility: fu
        } = lu, Cu = (0, Mu.d)(qu);
        if ((0, Mu.j)(qu)) return Xu("software_adapter", Cu);
        const bu = uu.windows() && function(uu) {
          return Vu.has((0, Zu.g)(uu.vendor, uu.architecture))
        }(Cu);
        if (uu.storeHoldbackSpared(bu), Uu && !bu) return Xu("webgl_holdback");
        const cu = uu.intelGen9(qu);
        uu.storeIntelGen9Verdict(cu);
        const Nu = cu ? null : uu.gpuClassWebGlArm(qu);
        uu.storeGpuClassVerdict(null !== Nu && void 0 !== Nu && Nu);
        const Ou = uu.webGlDefaultFamily(Cu);
        if (uu.storeWebGlDefaultFamilyVerdict(Ou), su && uu.oldIntelDriver(qu)) return Xu("old_intel_driver", Cu);
        if ("default" === ju && cu && uu.intelGen9OnWebGl()) return Xu("intel_gen9", Cu);
        if ("default" === ju && null !== Nu && uu.gpuClassOnWebGl(Nu)) return Xu("gpu_class_webgl", Cu);
        if ("default" === ju && Ou) return Xu("gpu_wasm_arm", Cu);
        return Xu(fu ? "compatibility_mode" : "none", Cu)
      }(uu);
      if (Bu(Eu.reason)) return {
        backend: "webgpu",
        ...Eu
      };
      if ("webgl1" !== uu.override() && uu.webgl2()) return {
        backend: "webgl",
        ...Eu
      };
      const ju = uu.webgl1();
      return 0 === ju.length ? {
        backend: "webgl1",
        ...Eu
      } : {
        missing: ju
      }
    }

    function tu(uu, Eu) {
      let {
        source: ju,
        asked: su
      } = Eu;
      return su || "default" === ju ? (0, Ju.j)(su, uu.defaultCompatibility) : void 0
    }

    function xu(uu) {
      const Eu = uu.override(),
        ju = uu.webGpuSetting(),
        su = null === Eu && !0 !== ju && uu.AN(),
        Uu = null !== Eu || null !== ju || su ? null : uu.claimed(),
        Zu = null !== Eu ? "override" : !0 === ju ? "setting" : su ? "pack" : !1 === ju ? "setting" : null !== Uu ? "claim" : "default",
        Xu = function(uu) {
          return "override" === uu || "setting" === uu
        }(Zu);
      if ("webgl" === Eu || "webgl1" === Eu || "webgl" === Uu || "setting" === Zu && !1 === ju) return {
        source: Zu,
        asked: Xu,
        refused: "not_requested"
      };
      if (!uu.gpu) return {
        source: Zu,
        asked: Xu,
        refused: "no_webgpu_api"
      };
      const lu = "default" === Zu && uu.heldBack();
      return lu && !uu.windows() ? {
        source: Zu,
        asked: Xu,
        refused: "webgl_holdback"
      } : !Xu && uu.offAfterLoss("pack" === Zu) ? {
        source: Zu,
        asked: Xu,
        refused: lu ? "webgl_holdback" : "off_after_loss"
      } : {
        source: Zu,
        asked: Xu,
        heldBack: lu,
        gpu: uu.gpu
      }
    }

    function Tu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...Wu(),
          override: () => Su(!1)
        },
        Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cu.isWebKit,
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vu;
      try {
        if (!Eu()) return !1;
        const su = xu(uu);
        if (!("gpu" in su) || su.heldBack) return !1;
        const Uu = "default" === su.source ? Qu(ju(), "apple") : null;
        return null === Uu || !uu.gpuClassOnWebGl(Uu)
      } catch (su) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", su), !1
      }
    }
    let Hu = !1;
    async function Au(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wu();
      if (null === uu) return null;
      const ju = await Lu(Eu);
      return Hu = !("missing" in ju) && "webgpu" === ju.backend && "claim" === ju.source, "missing" in ju ? ju : {
        ...ju,
        load: uu[ju.backend]
      }
    }
    async function nu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wu().gpu,
        su = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== uu.backend) return !1;
      const Uu = sE(uu, Eu, "indirectDraws", "off", "on");
      if (null !== Uu) return Uu;
      if (null !== uu.adapter && (0, hu.q)(uu.adapter, su)) return !0;
      if (null === ju) return !1;
      try {
        var Zu;
        const uu = await (0, pu.i)(ju.requestAdapter({
          powerPreference: "low-power"
        }).then((async uu => (null !== uu && await (0, Mu.g)(uu), uu))), OE, `the low-power requestAdapter didn't settle in ${OE/1e3} s`);
        return (0, hu.q)(null !== (Zu = null === uu || void 0 === uu ? void 0 : uu.info) && void 0 !== Zu ? Zu : {}, su)
      } catch (Xu) {
        return Xu instanceof pu.f
      }
    }

    function yu(uu, Eu, ju) {
      if ("webgpu" !== uu.backend) return !1;
      const su = sE(uu, Eu, "terrainFetch", "texture", "storage");
      return null !== su ? su : null !== uu.adapter && (0, hu.h)(uu.adapter, ju)
    }

    function zu(uu, Eu) {
      if ("webgpu" !== uu.backend) return !1;
      const ju = sE(uu, Eu, "skyOrder", "early", "last");
      return null !== ju ? ju : null !== uu.adapter && (0, Zu.g)(uu.adapter.vendor, uu.adapter.architecture) === Ku
    }

    function Ru(uu, Eu) {
      if ("webgpu" !== uu.backend) return !1;
      const ju = sE(uu, Eu, "uploadCopies", "off", "on");
      return null !== ju ? ju : null !== uu.adapter && "powervr_rogue" === (0, Zu.g)(uu.adapter.vendor, uu.adapter.architecture)
    }

    function uE(uu, Eu, ju) {
      if ("webgpu" !== uu.backend) return !1;
      const su = sE(uu, Eu, "sceneDepth", "off", "on");
      return null !== su ? su : null !== uu.adapter && (0, hu.l)(uu.adapter, ju)
    }

    function EE(uu, Eu) {
      return "webgl" === uu.backend ? sE(uu, Eu, "instancedTerrain", "1", "0") : null
    }

    function jE(uu, Eu) {
      return "webgpu" !== uu.backend || Eu && (null === uu.adapter || !(0, Yu.E)(uu.adapter))
    }

    function sE(uu, Eu, ju, su, Uu) {
      const Zu = new URLSearchParams(Eu).get(ju),
        Xu = null !== Zu && void 0 !== Zu ? Zu : (0, qu.g)(ju);
      return Xu !== su && Xu !== Uu ? null : (Hu ||= null === Zu && "webgpu" === uu.backend, Xu === su)
    }

    function UE(uu) {
      return null !== uu && "missing" in uu
    }

    function ZE(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !qE(),
        ju = arguments.length > 2 ? arguments[2] : void 0;
      return Eu ? function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xu.d,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const su = "start_failed" === uu || "pipeline_failed" === uu,
            Uu = (0, du.e)(uu, ju),
            Zu = Eu.turnOffWebGpuAfterDeviceLoss(su ? "visible" : (0, Yu.i)((0, Nu.e)()), su, Uu);
          return Hu && (0, qu.x)("webgpuLoss"), Eu.isWebGpuOffAfterLoss() && "webgpu" === Fu(Ou.k.getItem(Cu.f)) && Ou.k.removeItem(Cu.f), (0, lu.p)("webgpuloss") && (0, fu.c)((Eu => {
            var ju;
            Eu.noteWebGpuLoss("wasm", Zu ? uu : `${uu}, which storage didn't keep`, null !== (ju = Uu.message) && void 0 !== ju ? ju : null)
          })), Zu
        } catch {
          return !1
        }
      }(uu, Xu.d, ju) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const XE = "framePacing";

    function lE(uu) {
      const Eu = new URLSearchParams(uu).get(XE);
      return null !== Eu && /^\d{1,9}$/.test(Eu) ? Number(Eu) : void 0
    }

    function qE() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === Fu(new URLSearchParams(uu).get(Cu.e))
      } catch {
        return !1
      }
    }

    function fE(uu) {
      return !!CE(uu) || uu instanceof Error && !(uu instanceof WebAssembly.RuntimeError) && uu.message.startsWith(`${eu.j.RenderSurfaceUnusable}:`)
    }

    function CE(uu) {
      const {
        name: Eu,
        message: ju
      } = null !== uu && void 0 !== uu ? uu : {};
      return "InvalidStateError" === Eu && "string" === typeof ju && ju.startsWith("GPUDevice.")
    }

    function bE(uu) {
      const Eu = uu;
      return "function" === typeof Eu.ssu && "function" === typeof Eu.Usu ? Eu : null
    }

    function cE(uu) {
      return "function" === typeof uu.Wh ? uu : null
    }
    const NE = "openRenderer";
    const OE = 5e3,
      YE = 15e3;

    function hE(uu, Eu, ju, su, Uu, Zu) {
      return (0, pu.i)(function(uu, Eu, ju, su, Uu, Zu) {
        return (0, wu.g)(uu, Eu, (() => uu.Wh(ju, su, Uu, Zu.indirectHangs, Zu.storagePullBreaks, Zu.splitPassBreaks, Zu.earlySky, Zu.instancedTerrain, Zu.cellLight, Zu.framesAhead, Zu.webGpuRestores, Zu.bufferCopiesCrash)))
      }(uu, Eu, ju, su, Uu, Zu), YE, `${eu.j.RenderSurfaceUnusable}: the renderer didn't open in ${YE/1e3} s`, gE)
    }
    async function DE(uu, Eu, ju, su, Uu, Zu) {
      if ("function" !== typeof uu.CXu) throw new Error("this core has no set_renderer");
      const Xu = await hE(Eu, NE, ju, Uu, su, Zu);
      try {
        uu.CXu(Xu)
      } catch (lu) {
        throw gE(Xu), lu
      }
    }

    function gE(uu) {
      try {
        uu.free()
      } catch {}
    }
  },
  41067: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    const su = {
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
  40992: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Ou,
      g: () => Yu,
      h: () => cu,
      l: () => bu
    });
    const su = 2e3,
      Uu = "unavailable";
    let Zu = () => Promise.resolve().then((() => ju(3108))),
      Xu = null,
      lu = null,
      qu = fu();

    function fu() {
      let uu = () => {};
      return {
        promise: new Promise((Eu => {
          uu = () => {
            Eu(null)
          }
        })),
        resolve: uu
      }
    }

    function Cu() {
      if (null === Xu) {
        const uu = Zu();
        Xu = uu, uu.then((Eu => {
          Xu === uu && (lu = Eu)
        }), (() => {
          Xu === uu && (Xu = null)
        }))
      }
      return Xu
    }

    function bu() {
      Cu().catch((() => {}))
    }

    function cu() {
      qu.resolve()
    }

    function Nu(uu, Eu, ju, su) {
      if (null === uu) return {
        errorKind: Eu,
        fingerprint: Uu,
        dedupe: `${Eu}|${su}`
      };
      const {
        fingerprint: Zu
      } = uu.clientErrorKey(Eu, ju, su);
      return {
        errorKind: Eu,
        fingerprint: Zu,
        dedupe: Zu
      }
    }

    function Ou(uu, Eu, ju, su) {
      return null === lu ? su ? (bu(), Nu(null, uu, Eu, ju)) : null : Nu(lu, uu, Eu, ju)
    }
    async function Yu(uu, Eu, ju) {
      let Uu;
      const Zu = new Promise((uu => {
        Uu = setTimeout((() => {
          uu(null)
        }), su)
      }));
      try {
        return Nu(await Promise.race([Cu(), Zu, qu.promise]), uu, Eu, ju)
      } catch {
        return Nu(null, uu, Eu, ju)
      } finally {
        clearTimeout(Uu)
      }
    }
  },
  40988: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      BUILT_IN_ANIMATIONS_SITE: () => Au,
      CORE_ERRORS_SITE: () => Wu,
      EVENT_OVERFLOW_SITE: () => Hu,
      FIRST_VIEW_SITE: () => zu,
      JOIN_SITE: () => Iu,
      LEAVE_SITE: () => Fu,
      MAIN_THREAD_SITE: () => Ru,
      MODEL_FEED_SITE: () => Bu,
      MODEL_POOL_SITE: () => Lu,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => sE,
      NON_FATAL_REPORTS_PER_SESSION: () => GE,
      PREVIEW_ANIMATIONS_SITE: () => Tu,
      RENDER_RELOAD_SITE: () => xu,
      REQUEST_DEVICE_SITE: () => uE,
      TEXTURE_NAMES_SITE: () => tu,
      TEXTURE_PACK_FEED_SITE: () => nu,
      TEXTURE_PACK_SWAP_SITE: () => yu,
      TurnstilePageError: () => Zj,
      WASM_LOAD_SITE: () => Su,
      countRenderLost: () => Wj,
      crashError: () => PE,
      crashReportsSettled: () => iE,
      deviceLossWords: () => Vj,
      flushCrashReports: () => rE,
      joinFailureCode: () => Xj,
      lokiTransport: () => XE,
      modelFailureCode: () => Nj,
      readTrap: () => tE,
      renderLoss: () => ij,
      renderReloadMessage: () => rj,
      reportCoreErrors: () => IE,
      reportCountedLoadFallback: () => sj,
      reportCrash: () => oE,
      reportDataLoadFailure: () => tj,
      reportDisconnect: () => bj,
      reportDracoDecoderFailure: () => Dj,
      reportDroppedRequiredLimits: () => Ej,
      reportEventOverflow: () => Gj,
      reportFirstViewNoTerrain: () => aj,
      reportLightFault: () => wj,
      reportMainStall: () => Pj,
      reportMemoryShed: () => dj,
      reportModelFailure: () => Oj,
      reportModelPoolFailure: () => Yj,
      reportModelsModuleRetry: () => hj,
      reportNoBackendRetry: () => uj,
      reportPageJoinFailure: () => qj,
      reportReconnectGaveUp: () => cj,
      reportRenderRecovery: () => vE,
      reportRenderReload: () => Fj,
      reportReplayFault: () => kj,
      reportStaleBuildReload: () => Tj,
      reportStoppedCore: () => AE,
      reportTerrainTextureFailure: () => Bj,
      reportTexturePackFeedLoadFailure: () => Mj,
      reportTexturePackKeptOut: () => ej,
      reportUnstreamedCoreLoad: () => Uj,
      reportUnsupportedFallback: () => RE,
      reportUnusedSeat: () => Cj,
      reportWorkerLost: () => pj,
      reportWorkerStartTimeout: () => oj,
      reportWorldgenGaveUp: () => Jj,
      reportWorldgenLoadFailure: () => gj,
      resetCrashReports: () => WE,
      setCrashAdPreload: () => YE,
      setCrashBackend: () => OE,
      setCrashScreen: () => bE,
      setCrashTransport: () => fE,
      showCrash: () => HE,
      showJoinFailure: () => lj,
      showUnsupported: () => yE,
      unknownSkyWords: () => SE
    });
    var su = ju(1069),
      Uu = ju(1376),
      Zu = ju(1369),
      Xu = ju(1128),
      lu = ju(274),
      qu = ju(3117),
      fu = ju(4473),
      Cu = ju(40992),
      bu = ju(4970),
      cu = ju(40997),
      Nu = ju(3148),
      Ou = ju(39110),
      Yu = ju(131),
      hu = ju(124),
      Du = ju(3152),
      gu = ju(36870),
      Mu = ju(1843),
      eu = ju(41011),
      Gu = ju(40847),
      pu = ju(40935),
      wu = ju(40944),
      Ju = ju(36868),
      du = ju(3017),
      au = ju(3020),
      Pu = ju(41033),
      ou = ju(41054),
      ku = ju(41056),
      mu = ju(37241),
      vu = ju(3405),
      Ku = ju(36670),
      Vu = ju(40971),
      ru = ju(36684),
      Qu = ju(41072);
    const iu = "[bloxd-wasm-client]",
      Wu = "coreErrors",
      Su = "wasmLoad",
      Iu = "join",
      Fu = "leave",
      Bu = "modelFeed",
      Lu = "modelWorkerPool",
      tu = "textureNames",
      xu = "renderReload",
      Tu = "previewAnimations",
      Hu = "eventOverflow",
      Au = "builtInAnimations",
      nu = "texturePackFeed",
      yu = "texturePackSwap",
      zu = "firstView",
      Ru = "mainThread",
      uE = "requestDevice",
      EE = 300,
      jE = 64,
      sE = 8;
    let UE = 0;
    const ZE = new Set,
      XE = (uu, Eu) => {
        const ju = hE[uu.kind],
          su = {
            backend: cE,
            adPreload: NE
          };
        if (null === ju) return void lE(uu, Eu, su, null);
        const Uu = (0, Cu.e)(ju, uu.message, uu.code, uu.fatal);
        null === Uu ? VE("Loki", (async () => {
          lE(uu, Eu, su, await (0, Cu.g)(ju, uu.message, uu.code))
        })) : lE(uu, Eu, su, Uu)
      };

    function lE(uu, Eu, ju, su) {
      let {
        backend: Uu,
        adPreload: Zu
      } = ju;
      const {
        kind: lu,
        code: fu,
        site: Cu,
        fatal: bu,
        details: cu
      } = uu;
      if (!bu)
        if (null === su || (0, qu.b)(su.errorKind) || ZE.has(su.dedupe)) {
          if (UE >= sE) return;
          UE++
        } else ZE.add(su.dedupe);
      const Nu = {
        ...cu,
        kind: lu,
        code: fu,
        site: Cu,
        fatal: String(bu),
        backend: Uu
      };
      Zu && (Nu.adPreload = "true"), null !== su && (Nu.errorKind = su.errorKind, Nu.fingerprint = su.fingerprint), Eu instanceof Error && "string" === typeof Eu.stack && (Nu.causeStack = Eu.stack.slice(0, 2e3)), (0, Xu.YY)(PE(uu, Eu), Nu)
    }
    let qE = XE;

    function fE(uu) {
      const Eu = qE;
      return qE = uu, Eu
    }
    let CE = () => {};

    function bE(uu) {
      const Eu = CE;
      return CE = uu, Eu
    }
    let cE = "unpicked",
      NE = !1;

    function OE(uu) {
      cE = uu
    }

    function YE(uu) {
      NE = uu
    }
    const hE = {
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
      DE = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      gE = new Set(["unstreamedLoad"]),
      ME = new Set(["linkCensus", "linksReadAfterView"]);
    let eE = !1;
    const GE = 20,
      pE = new Map;
    let wE = 0,
      JE = 0;
    const dE = new Set,
      aE = new Set;

    function PE(uu, Eu) {
      const ju = Object.assign(new Error(`${uu.code}: ${uu.message}`), {
        name: "WasmClientCrash",
        cause: null !== Eu && void 0 !== Eu ? Eu : void 0
      });
      return Eu instanceof Error && Eu.stack && (ju.stack = Eu.stack), ju
    }

    function oE(uu) {
      var Eu, su;
      const {
        kind: Uu,
        code: Zu,
        site: Xu,
        fatal: lu,
        message: qu,
        error: fu
      } = uu, Cu = !1 !== uu.toTransport && !gE.has(Uu), bu = !lu && Cu && !ME.has(Uu), cu = {
        kind: Uu,
        code: Zu,
        site: Xu,
        fatal: lu,
        message: qu,
        details: null !== (Eu = uu.details) && void 0 !== Eu ? Eu : {}
      }, Nu = `${Zu}@${Xu}${void 0===uu.instance?"":`#${uu.instance}`}${lu?"!":""}`, Ou = (null !== (su = pE.get(Nu)) && void 0 !== su ? su : 0) + 1;
      if (pE.set(Nu, Ou), void 0 !== uu.countAs && 1 === Ou && mE(uu.countAs), Ou > 1 ? 0 === (Ou & Ou - 1) && KE((() => {
          console.warn(`${iu} ${Zu} at ${Xu} reported ${Ou} times`)
        })) : bu && wE >= GE ? KE((() => {
          console.warn(`${iu} ${Uu} ${Zu} at ${Xu}: ${qu} (not sent: the session's ${GE} went)`, cu.details, null !== fu && void 0 !== fu ? fu : "")
        })) : (bu && wE++, function(uu, Eu, su, Uu) {
          var Zu, Xu;
          const {
            kind: lu,
            code: qu,
            site: fu,
            fatal: Cu,
            message: bu,
            details: cu
          } = uu;
          KE((() => {
            (Cu ? console.error : console.warn)(`${iu} ${lu} ${qu} at ${fu}: ${bu}`, cu, null !== Eu && void 0 !== Eu ? Eu : "")
          }));
          const Nu = DE[lu],
            Ou = null !== (Zu = null !== (Xu = hE[lu]) && void 0 !== Xu ? Xu : Nu) && void 0 !== Zu ? Zu : null;
          Uu || null === Ou || kE((async () => {
            const {
              reportCappedWasmFailure: uu,
              reportUncappedWasmFailure: Eu,
              reportWasmFailure: su
            } = await ju.e(213).then((() => ju(36668)));
            (ME.has(lu) ? Eu : void 0 === Nu ? su : uu)(Ou, bu, qu)
          }));
          su && KE((() => {
            qE(uu, Eu)
          }))
        }(cu, fu, Cu, void 0 !== uu.countAs)), lu) {
        var Yu;
        const Eu = null !== (Yu = uu.screen) && void 0 !== Yu ? Yu : {
          text: (0, mu.h)(cu, !0),
          reload: !0
        };
        KE((() => {
          CE(Eu)
        }))
      }
      return cu
    }

    function kE(uu) {
      VE("counts", (async () => {
        const {
          peekVisitSessionId: Eu
        } = await Promise.resolve().then((() => ju(701)));
        null !== Eu() && (await uu(), eE = !0)
      }))
    }

    function mE(uu) {
      dE.has(uu.errorKind) || (dE.add(uu.errorKind), kE((async () => {
        const {
          reportClientError: Eu
        } = await Promise.resolve().then((() => ju(3099)));
        Eu(uu.errorKind, uu.error, uu.code, !0, void 0, uu.fields)
      })))
    }

    function vE(uu, Eu) {
      VE("render_lost", (async () => {
        const [{
          reportClientError: su
        }, {
          CAPPED_COUNTS_VISIT_CAP: Uu
        }] = await Promise.all([Promise.resolve().then((() => ju(3099))), ju.e(213).then((() => ju(36668)))]);
        su("render_lost", Eu, uu, !0, Uu)
      }))
    }

    function KE(uu) {
      try {
        uu()
      } catch (Eu) {
        try {
          console.warn(`${iu} could not send a report`, Eu)
        } catch {}
      }
    }

    function VE(uu, Eu) {
      try {
        const ju = Eu().catch((Eu => {
          console.warn(`${iu} could not send the report to ${uu}`, Eu)
        })).finally((() => {
          aE.delete(ju)
        }));
        aE.add(ju)
      } catch (ju) {
        console.warn(`${iu} could not send the report to ${uu}`, ju)
      }
    }
    async function rE(uu) {
      let Eu;
      (0, Cu.h)();
      const ju = new Promise((ju => {
        Eu = setTimeout(ju, uu)
      }));
      await Promise.race([QE(), ju]), clearTimeout(Eu)
    }
    async function QE() {
      if (await Promise.allSettled([...aE]), eE) try {
        const {
          flushClientAnalyticsEvents: uu
        } = await Promise.resolve().then((() => ju(1555)));
        await uu()
      } catch (uu) {
        console.warn(`${iu} could not send the counts`, uu)
      }
    }
    async function iE() {
      for (; aE.size > 0;) await Promise.allSettled([...aE])
    }

    function WE() {
      pE.clear(), wE = 0, eE = !1, UE = 0, ZE.clear(), JE = 0, dE.clear(), (0, cu.u)()
    }

    function SE(uu) {
      const Eu = "object" === typeof uu && null !== uu ? uu.type : uu;
      return "string" !== typeof Eu ? "sky not named" : `sky ${JSON.stringify(Array.from(Eu).slice(0,jE).join(""))}`
    }

    function IE(uu, Eu, ju, su) {
      JE += Eu;
      for (const {
          code: lu,
          detail: qu
        }
        of uu) {
        var Uu, Zu, Xu;
        const uu = (0, bu.he)(lu),
          Eu = (0, cu.e)(lu, qu),
          fu = null === su || void 0 === su ? void 0 : su(lu, qu),
          Cu = void 0 !== (null === Eu || void 0 === Eu ? void 0 : Eu.gpuDetails),
          Nu = Cu ? null === (Uu = (0, hu.q)()) || void 0 === Uu ? void 0 : Uu.renderer : void 0,
          Ou = Cu ? ` ${(0,cu.l)()}` : "",
          Yu = Array.from([Nu && `gpu ${(0,cu.y)(Nu)}`, fu].filter(Boolean).join("; ")).slice(0, EE).join(""),
          Du = `core error ${uu}${null!==(Zu=null===Eu||void 0===Eu?void 0:Eu.words)&&void 0!==Zu?Zu:""}${Ou}${Yu?`: ${Yu}`:""}`,
          gu = {
            errorCode: String(lu),
            detail: String(qu),
            droppedBefore: String(JE),
            wasmBuild: ju.wasm,
            clientVersion: ju.client,
            ...null === Eu || void 0 === Eu ? void 0 : Eu.gpuDetails
          };
        null !== Eu && (0, cu.q)(Eu) ? KE((() => {
          console.warn(`${iu} coreError CORE-${uu}: ${Du} (not sent: the session's render warnings of its kind went)`, gu)
        })) : FE(lu) ? KE((() => {
          console.warn(`${iu} coreError CORE-${uu}: ${Du} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, gu)
        })) : oE({
          kind: LE(lu, qu),
          code: `CORE-${uu}`,
          site: Wu,
          fatal: !1,
          message: Du,
          details: gu,
          instance: null !== (Xu = null === Eu || void 0 === Eu ? void 0 : Eu.instance) && void 0 !== Xu ? Xu : BE(lu, qu)
        })
      }
    }

    function FE(uu) {
      if (uu !== bu.D.AudioUnknownSound && uu !== bu.D.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: Eu,
        lobbyName: ju
      } = (0, Zu.b)();
      return null !== Eu && (!!(0, su.l)(Eu) || uu === bu.D.AudioUnknownSound && (0, Uu.k)(Eu, ju))
    }

    function BE(uu, Eu) {
      return uu === bu.D.RenderDeviceLost && 0 !== (Eu & bu.L.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function LE(uu, Eu) {
      return uu === bu.D.JobsHeapGaveUp ? "meshHeap" : (0, cu.j)(uu, Eu) ? "linksReadAfterView" : (0, cu.g)(uu, Eu) ? "linkCensus" : "coreError"
    }

    function tE(uu) {
      return (0, Ku.j)(uu instanceof Vu.d ? uu.trap : uu, du.J, du.ab)
    }
    const xE = "declined=js";

    function TE(uu) {
      return uu ? {
        labels: [xE],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function HE(uu, Eu, ju) {
      return nE(uu, Eu, ju, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function AE(uu, Eu, ju) {
      return nE(uu, Eu, ju, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function nE(uu, Eu, ju, su, Uu) {
      let {
        memoryDetails: Zu = {},
        declined: Xu = !1
      } = su;
      const {
        code: lu,
        details: qu,
        message: fu
      } = (0, eu.C)(uu, Eu), Cu = [];
      Object.assign(qu, (0, ru.f)(uu.error)), null !== ju && (qu.trapKind = ju.kind, null !== ju.panic && (qu.panic = (0, Ku.i)(ju.panic)), ju.refusedBytes > 0 && (qu.refusedAllocation = String(ju.refusedBytes)), Cu.push((0, Ku.n)(ju.kind, ju.refusedBytes)));
      const bu = TE(Xu);
      return oE({
        kind: "crash",
        code: lu,
        site: uu.site,
        fatal: Uu,
        message: [...Cu, ...bu.labels, fu].join("; "),
        details: {
          ...qu,
          ...bu.details,
          ...Zu
        },
        error: uu.error
      })
    }

    function yE(uu, Eu, ju) {
      return oE({
        kind: "unsupported",
        code: Eu,
        site: Su,
        fatal: !0,
        message: ju,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: uu,
          status: Eu
        },
        screen: {
          text: (0, mu.q)(uu),
          reload: "download" === uu
        }
      })
    }
    const zE = {
      unsupported: "unsupported_js_fallback",
      blockedAfterLoss: "blocked_after_loss",
      noContext: "no_context_js_fallback"
    };

    function RE(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return oE({
        kind: "unsupportedFallback",
        code: zE[Eu],
        site: Su,
        fatal: !1,
        message: ju,
        details: {
          ...su,
          cause: uu,
          status: "unsupported",
          decline: Eu,
          fallback: "js"
        }
      })
    }

    function uj(uu, Eu, ju) {
      return oE({
        kind: "recovered",
        code: "reprobed" === uu ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: Su,
        fatal: !1,
        message: ju,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: Eu,
          step: uu
        }
      })
    }

    function Ej(uu) {
      return oE({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: uE,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: uu.join(",")
        }
      })
    }
    const jj = "reload=wasm";

    function sj(uu, Eu, ju, su) {
      const Uu = TE("declined" === su),
        Zu = "wasmReload" === su ? [jj] : Uu.labels;
      return oE({
        kind: "unsupported",
        code: Eu,
        site: Su,
        fatal: !1,
        message: [...Zu, ju].join("; "),
        details: {
          cause: uu,
          status: Eu,
          fallback: "wasmReload" === su ? "wasmReload" : "js",
          ...Uu.details
        }
      })
    }

    function Uj() {
      const {
        code: uu,
        message: Eu
      } = vu.b;
      return oE({
        kind: "unstreamedLoad",
        code: uu,
        site: Su,
        fatal: !1,
        message: Eu
      })
    }
    class Zj extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Xj(uu) {
      return uu instanceof pu.o ? 0 === uu.code ? "JOIN-matchmake" : `JOIN-${uu.code}` : uu instanceof pu.e ? 0 === uu.code ? `JOIN-${uu.stage}` : `JOIN-${uu.stage}-${uu.code}` : uu instanceof Gu.e ? "JOIN-gameCode" : uu instanceof Zj ? "JOIN-turnstilePage" : uu instanceof pu.w ? "JOIN-trafficCheck" : uu instanceof gu.g ? "JOIN-timeout" : "JOIN-network"
    }

    function lj(uu, Eu) {
      const ju = (0, ru.j)(uu),
        su = {
          wasmBuild: Eu.wasm,
          clientVersion: Eu.client
        },
        Uu = uu instanceof Zj ? {
          text: (0, mu.l)(),
          reload: !1
        } : void 0,
        Zu = (0, wu.g)(uu),
        Xu = "expected" !== Zu;
      return oE({
        kind: "join",
        code: Xj(uu),
        site: Iu,
        fatal: !0,
        message: ju,
        details: su,
        error: uu,
        screen: Uu,
        toTransport: Xu,
        instance: Zu
      })
    }

    function qj(uu, Eu, ju) {
      var su;
      const Uu = (0, wu.g)(uu),
        Zu = {
          cause: (uu instanceof pu.e || uu instanceof pu.o) && null !== (su = uu.serverText) && void 0 !== su ? su : "",
          sinceJoinStart: (0, Du.e)(ju.sinceJoinStartMs),
          game: ju.game,
          ...(0, Du.n)(),
          wasmBuild: Eu.wasm,
          clientVersion: Eu.client
        };
      return oE({
        kind: "pageJoin",
        code: Xj(uu),
        site: Iu,
        fatal: !1,
        message: (0, ru.j)(uu),
        details: Zu,
        error: uu,
        toTransport: "unrecognised" === Uu,
        instance: Uu
      })
    }
    const fj = {
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

    function Cj(uu, Eu) {
      let {
        unused: ju,
        answered: su,
        heldMs: Uu
      } = uu;
      const {
        code: Zu,
        message: Xu
      } = fj[ju], lu = {
        unused: ju,
        answered: String(su),
        heldMs: String(Uu),
        wasmBuild: Eu.wasm,
        clientVersion: Eu.client
      };
      return oE({
        kind: "seat",
        code: Zu,
        site: Iu,
        fatal: !1,
        message: Xu,
        details: lu
      })
    }

    function bj(uu, Eu, ju) {
      var su;
      let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (su = uu.name) && void 0 !== su ? su : String(uu.code);
      const Zu = {
          closeCode: String(uu.code),
          recognised: String(null !== uu.name),
          closeReason: ju.closeReason,
          sinceJoined: (0, Du.e)(ju.sinceJoinedMs),
          game: ju.game,
          ...(0, Du.n)(),
          wasmBuild: Eu.wasm,
          clientVersion: Eu.client
        },
        Xu = null === uu.name && !(0, Du.i)(uu.code);
      return oE({
        kind: "disconnect",
        code: Uu,
        site: Fu,
        fatal: !1,
        message: "Left room",
        details: Zu,
        toTransport: Xu
      })
    }

    function cj(uu, Eu) {
      const ju = {
        ...(0, Nu.l)(uu),
        wasmBuild: Eu.wasm,
        clientVersion: Eu.client
      };
      return oE({
        kind: "disconnect",
        code: `reconnect-${uu.reason}`,
        site: Iu,
        fatal: !1,
        message: "Reconnect failed",
        details: ju
      })
    }

    function Nj(uu) {
      return uu.error instanceof au.g ? `MODEL-${uu.error.status}` : uu.error instanceof Pu.h ? "MODEL-ring" : "MODEL-network"
    }

    function Oj(uu, Eu) {
      const ju = Nj(uu),
        su = `model file ${uu.file} ${uu.startup?"(startup) ":""}could not load`,
        Uu = {
          file: String(uu.file),
          url: uu.url,
          wasmBuild: Eu.wasm,
          clientVersion: Eu.client
        };
      return oE({
        kind: uu.startup ? "model" : "modelLate",
        code: ju,
        site: Bu,
        fatal: uu.startup,
        message: su,
        details: Uu,
        error: uu.error
      })
    }

    function Yj(uu, Eu) {
      const ju = {
        wasmBuild: Eu.wasm,
        clientVersion: Eu.client
      };
      return oE({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: Lu,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: ju,
        error: uu
      })
    }

    function hj(uu, Eu, ju) {
      const su = {
        delayMs: String(Eu),
        wasmBuild: ju.wasm,
        clientVersion: ju.client
      };
      uu instanceof au.g && (su.status = String(uu.status));
      return oE({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: Lu,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: su,
        error: uu
      })
    }

    function Dj(uu, Eu) {
      const ju = {
        wasmBuild: Eu.wasm,
        clientVersion: Eu.client
      };
      return oE({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: Lu,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: ju,
        error: uu
      })
    }

    function gj(uu, Eu) {
      const ju = {
        wasmBuild: Eu.wasm,
        clientVersion: Eu.client
      };
      return oE({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: eu.A,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: ju,
        error: uu
      })
    }

    function Mj(uu, Eu) {
      const ju = {
        wasmBuild: Eu.wasm,
        clientVersion: Eu.client
      };
      return oE({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: nu,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: ju,
        error: uu
      })
    }

    function ej(uu, Eu, ju, su) {
      const Uu = {
        wasmBuild: su.wasm,
        clientVersion: su.client
      };
      return oE({
        kind: "texturePackKeptOut",
        code: (0, fu.f)("wasm", uu, Eu),
        site: yu,
        fatal: !1,
        message: Eu.detail,
        details: Uu,
        error: ju
      })
    }

    function Gj(uu, Eu) {
      const {
        frames: ju,
        acks: su,
        mask: Uu,
        outcome: Zu
      } = uu, Xu = {
        frames: String(ju),
        acks: String(su),
        mask: String(Uu),
        outcome: null !== Zu && void 0 !== Zu ? Zu : "resynced",
        wasmBuild: Eu.wasm,
        clientVersion: Eu.client
      };
      return oE({
        kind: "recovered",
        code: "rejoined" === Zu ? "CORE-eventOverflowRejoin" : "failed" === Zu ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: Hu,
        fatal: !1,
        message: `the event buffer refused records in ${ju} frames`,
        details: Xu
      })
    }

    function pj(uu, Eu, ju) {
      return oE({
        kind: "recovered",
        code: "CORE-workerLost",
        site: uu,
        fatal: !1,
        message: `a ${uu} worker was lost`,
        details: {
          reason: Eu,
          wasmBuild: ju.wasm,
          clientVersion: ju.client
        }
      })
    }

    function wj(uu, Eu, ju) {
      const su = {
        wasmBuild: ju.wasm,
        clientVersion: ju.client
      };
      return oE({
        kind: "recovered",
        code: uu,
        site: eu.m,
        fatal: !1,
        message: Eu,
        details: su
      })
    }

    function Jj(uu, Eu) {
      const ju = {
        lastReason: uu,
        wasmBuild: Eu.wasm,
        clientVersion: Eu.client
      };
      return oE({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: eu.A,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: ju
      })
    }

    function dj(uu, Eu, ju) {
      return oE({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: eu.l,
        fatal: !1,
        message: (0, Ju.l)(uu) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: uu,
          ...Eu,
          wasmBuild: ju.wasm,
          clientVersion: ju.client
        }
      })
    }

    function aj(uu, Eu, ju, su) {
      var Uu, Zu;
      const Xu = (0, cu.m)(),
        lu = {
          game: uu,
          cause: Eu,
          census: null === ju ? "none" : JSON.stringify(ju),
          gpu: null !== (Uu = null === (Zu = (0, hu.q)()) || void 0 === Zu ? void 0 : Zu.renderer) && void 0 !== Uu ? Uu : "",
          renderWarned: String(Xu),
          browser: (0, cu.l)(),
          wasmBuild: su.wasm,
          clientVersion: su.client
        },
        qu = `first view drew no whole terrain in ${ou.c/1e3} s, ${Eu}${Xu?", render warned":""}`;
      return oE({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: zu,
        fatal: !1,
        message: qu,
        details: lu
      })
    }

    function Pj(uu, Eu, ju, su) {
      var Uu, Zu, Xu;
      const qu = null !== (Uu = (0, lu.j)(null !== (Zu = null === (Xu = (0, hu.o)()) || void 0 === Xu ? void 0 : Xu.renderer) && void 0 !== Zu ? Zu : null, (0, hu.l)())) && void 0 !== Uu ? Uu : "unknown",
        fu = null === Eu ? "untimed" : `${Math.round(Eu)} ms`,
        Cu = `frames stalled, ${ju}, gpu ${(0,cu.y)(qu)}, blocking ${fu}, drawn ${Math.round(uu)} ms apart`,
        bu = {
          gpuModel: qu,
          wasmBuild: su.wasm,
          clientVersion: su.client
        };
      return oE({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: Ru,
        fatal: !1,
        message: Cu,
        details: bu
      })
    }

    function oj(uu, Eu, ju) {
      return oE({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: uu,
        fatal: !1,
        message: `a ${uu} worker did not start`,
        details: {
          waitedMs: String(Math.round(Eu)),
          wasmBuild: ju.wasm,
          clientVersion: ju.client
        }
      })
    }

    function kj(uu, Eu, ju) {
      return oE({
        kind: "recovered",
        code: "CORE-replayFault",
        site: uu,
        fatal: !1,
        message: `the replay's ${uu} failed`,
        details: {
          wasmBuild: ju.wasm,
          clientVersion: ju.client
        },
        error: Eu
      })
    }
    const mj = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function vj(uu) {
      if (0 === uu) return "none";
      const Eu = [60, 600, 3600].find((Eu => uu < Eu));
      return void 0 === Eu ? "ge3600" : `lt${Eu}`
    }

    function Kj(uu, Eu) {
      return null === uu ? "unbound" : (0, Ou.k)(Eu - uu)
    }

    function Vj(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (uu & bu.L.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (uu & bu.L.LINKS_RUNNING) ? "links running" : "", `frames ${(0,cu.y)(vj(uu&bu.L.FRAMES))}`, `up ${(0,cu.y)(Kj(Eu,ju))}`].filter(Boolean).join(", ")
    }

    function rj(uu, Eu, ju) {
      const su = "lost" === Eu && void 0 !== ju ? ` (${ju})` : "";
      return `the ${uu} ${mj[Eu]}${su}`
    }
    const Qj = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function ij(uu, Eu, ju, su) {
      var Uu;
      let {
        restoreLost: Zu = !1,
        adapterRemembered: Xu = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, lu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const qu = null === ju || void 0 === ju ? void 0 : ju.message,
        fu = "pipeline_failed" === Eu ? Eu : ju instanceof Mu.f ? "timeout" : (0, Ou.u)("frames_refused" === Eu, "string" === typeof qu ? qu : ""),
        Cu = null === su.boundAtMs ? "unbound" : `up${(0,Ou.g)(lu-su.boundAtMs)}`,
        bu = null === su.adapter ? "no adapter" : (0, Ou.r)(su.adapter),
        cu = `${!0===su.indirectHangs?" ih":""}${!0===su.restoresSkipped?" nr":""}${Zu?" rl":""}${Xu?" ar":""}`,
        Nu = `${fu} ${(0,Mu.g)()?"hidden":"visible"} ${Cu}${cu} ${bu}`;
      if ("webgpu" !== uu || "lost" !== Eu && "frames_refused" !== Eu) return {
        detail: Nu,
        count: void 0
      };
      return {
        detail: Nu,
        count: {
          errorKind: "render_lost",
          error: new Error(Nu),
          code: (0, Ou.A)(fu, null !== (Uu = su.boundAtMs) && void 0 !== Uu ? Uu : lu, lu).code,
          fields: {
            renderBackend: Qu.b.webgpu
          }
        }
      }
    }

    function Wj(uu, Eu, ju) {
      const {
        count: su
      } = ij("webgpu", uu, Eu, ju);
      void 0 !== su && mE(su)
    }
    const Sj = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function Ij(uu) {
      var Eu;
      return null !== (Eu = uu instanceof Error ? uu.reason : void 0) && void 0 !== Eu ? Eu : ""
    }

    function Fj(uu, Eu, su) {
      var Uu, Zu, Xu, qu, fu;
      let {
        from: Cu,
        cause: bu = "lost",
        restoreLost: Nu = !1,
        adapterRemembered: hu = !1,
        error: Du,
        context: gu = Qj,
        session: Mu = Sj
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, eu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: Gu,
        count: pu
      } = ij(uu, bu, Du, gu, {
        restoreLost: Nu,
        adapterRemembered: hu
      }, eu), wu = {
        reloadFrom: null !== Cu && void 0 !== Cu ? Cu : "",
        losses: String(Eu),
        cause: bu,
        detail: Gu,
        vendor: null !== (Uu = null === (Zu = gu.adapter) || void 0 === Zu ? void 0 : Zu.vendor) && void 0 !== Uu ? Uu : "",
        architecture: null !== (Xu = null === (qu = gu.adapter) || void 0 === qu ? void 0 : qu.architecture) && void 0 !== Xu ? Xu : "",
        indirectHangs: String(gu.indirectHangs),
        restoresSkipped: String(gu.restoresSkipped),
        restoreLost: String(Nu),
        adapterRemembered: String(hu),
        lossReason: Ij(Du),
        samples: String(Mu.samples),
        sunShadows: String(Mu.sunShadows),
        renderDistance: String(Mu.renderDistance),
        gpuFamily: null !== (fu = (0, lu.e)()) && void 0 !== fu ? fu : "",
        browser: (0, cu.l)(),
        siteUsed: Yu.siteUsed,
        wasmBuild: su.wasm,
        clientVersion: su.client
      }, Ju = "webgpu" !== uu && void 0 !== Cu ? function(uu, Eu, ju, su) {
        return `: ${uu}, ${Eu?"restore lost":"not restored"}, up ${(0,cu.y)(Kj(ju,su))}`
      }(Cu, Nu, gu.boundAtMs, eu) : "", du = `${rj(uu,bu)}${Ju}`, au = oE({
        kind: "recovered",
        code: "CORE-renderLost",
        site: xu,
        fatal: !1,
        message: du,
        details: wu,
        error: Du,
        countAs: pu
      });
      return VE("ga", (async () => {
        const {
          logError: Eu
        } = await Promise.resolve().then((() => ju(3074))), su = `${Ou.c["webgpu"===uu?"WebGPU":"WebGL2"]}\n Error: ${Gu}`;
        Eu("warning", su), Eu("error", su)
      })), au
    }

    function Bj(uu, Eu) {
      var ju, su;
      const Uu = null === uu.name ? "TEXTURE-sources" : null === uu.url ? "TEXTURE-nourl" : uu.error instanceof ku.b ? `TEXTURE-${uu.error.status}` : "TEXTURE-network",
        Zu = null === uu.name ? "terrain textures could not load" : `terrain texture ${uu.name} could not load`,
        Xu = {
          texture: null !== (ju = uu.name) && void 0 !== ju ? ju : "",
          url: null !== (su = uu.url) && void 0 !== su ? su : "",
          wasmBuild: Eu.wasm,
          clientVersion: Eu.client
        };
      return oE({
        kind: "terrainTexture",
        code: Uu,
        site: eu.y,
        fatal: !1,
        message: Zu,
        details: Xu,
        error: uu.error
      })
    }
    const Lj = {
      previewAnimations: {
        site: Tu,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: Au,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function tj(uu, Eu, ju, su) {
      const {
        site: Uu,
        prefix: Zu,
        name: Xu
      } = Lj[uu], {
        stage: lu,
        error: qu
      } = ju;
      return oE({
        kind: uu,
        code: "decode" === lu ? null === qu ? `${Zu}-decode` : `${Zu}-trap` : qu instanceof au.g ? `${Zu}-${qu.status}` : `${Zu}-network`,
        site: Uu,
        fatal: !1,
        message: "decode" === lu ? `${Xu} did not decode` : `${Xu} could not load`,
        details: {
          url: Eu,
          wasmBuild: su.wasm,
          clientVersion: su.client
        },
        error: qu
      })
    }
    const xj = "staleBuild";

    function Tj(uu, Eu, ju) {
      const su = {
          failedSite: uu.site,
          url: uu.url,
          from: uu.from,
          sameBuild: String(uu.from === Eu),
          reloadMs: String(Math.max(0, Date.now() - uu.at)),
          wasmBuild: ju.wasm,
          clientVersion: ju.client
        },
        Uu = `reloaded into a newer build after ${uu.site} failed to load: ${uu.error}`;
      return oE({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: xj,
        fatal: !1,
        message: Uu,
        details: su
      })
    }
  },
  41054: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      c: () => Uu,
      e: () => Xu
    });
    var su = ju(4976);
    const Uu = 3e4;
    class Zu {
      constructor(uu) {
        this.HN = uu, this.waitedMs = 0, this.lastMs = null
      }
      frame(uu, Eu) {
        if (Eu) return !0;
        const ju = null === this.lastMs ? 0 : uu - this.lastMs;
        return this.lastMs = uu, ju <= 900 && (this.waitedMs += ju), !(this.waitedMs < Uu) && (this.HN(), !0)
      }
    }

    function Xu(uu, Eu) {
      return 0 === (uu & su.X.ChunkRequested) ? "no_chunk_request" : 0 === (uu & su.X.ChunkStored) ? "chunk_not_stored" : 0 === (uu & su.X.MeshLanded) ? "not_meshed" : null === Eu ? "no_frame_drawn" : 0 === Eu.terrainParts ? "no_terrain_parts" : Eu.terrainCompiling > 0 ? "terrain_compiling" : Eu.terrainOpaque + Eu.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40847: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => bu,
      B: () => Ou,
      e: () => su,
      i: () => Du,
      l: () => Yu,
      m: () => hu,
      p: () => cu,
      s: () => Nu,
      w: () => Cu
    });
    class su extends Error {
      constructor(uu) {
        super(`the join's code did not load: ${uu instanceof Error?uu.message:String(uu)}`, {
          cause: uu
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === uu || void 0 === uu ? void 0 : uu.request
      }
    }
    let Uu = null,
      Zu = null,
      Xu = null;
    const lu = [];
    let qu = null;

    function fu(uu, Eu) {
      try {
        uu(Eu)
      } catch (ju) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ju)
      }
    }

    function Cu() {
      return qu
    }

    function bu(uu) {
      lu.push(uu), null !== qu && fu(uu, qu)
    }

    function cu(uu) {
      return Uu ??= Promise.all([ju.e(73), ju.e(98), ju.e(226), ju.e(78), ju.e(227), ju.e(201), ju.e(97), ju.e(246), ju.e(273), ju.e(199), ju.e(214), ju.e(191), ju.e(198), ju.e(193), ju.e(144), ju.e(88), ju.e(122), ju.e(252), ju.e(57)]).then((() => ju(42862))).then((Eu => {
        Eu.loadAudio(uu), qu = Eu;
        for (const uu of lu) fu(uu, Eu);
        return Eu
      })).catch((uu => {
        throw Uu = null, uu
      })), Uu
    }
    async function Nu(uu, Eu) {
      try {
        const ju = await cu(uu);
        await ju.loadClientGame(Eu)
      } catch (ju) {
        throw new su(ju)
      }
    }

    function Ou(uu, Eu) {
      Zu = {
        running: uu,
        shell: Eu
      }
    }

    function Yu() {
      return Xu
    }
    async function hu(uu) {
      const Eu = Zu;
      if ((null === Eu || void 0 === Eu ? void 0 : Eu.running) !== uu) throw new Error("the core's session has ended");
      const ju = await cu(Eu.shell.audio).catch((uu => {
        throw new su(uu)
      }));
      if (null !== Xu) return Xu;
      if (Zu !== Eu || uu.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Xu = ju.startGameHost(uu, Eu.shell), null === Xu) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Xu
    }

    function Du() {
      null !== Xu && (null !== qu ? qu.endGameHost(Xu) : Xu.closeGame()), Xu = null, Zu = null
    }
  },
  40967: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    const su = {
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
  40935: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => fu,
      h: () => Zu,
      j: () => Xu,
      n: () => Uu,
      o: () => Nu,
      p: () => Cu,
      r: () => qu,
      u: () => cu,
      w: () => bu,
      y: () => lu
    });
    var su = ju(1852);
    const Uu = new Uint8Array([12]),
      Zu = 2e3,
      Xu = 257;

    function lu(uu) {
      const Eu = new Uint8Array(4);
      return new DataView(Eu.buffer).setUint32(0, uu, !0), Eu
    }
    class qu extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class fu extends Error {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(uu), this.stage = Eu, this.code = ju, this.serverText = su, this.socketOpened = Uu, this.name = "JoinError"
      }
    }
    class Cu extends Error {
      constructor(uu) {
        super(uu), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class bu extends Error {
      constructor(uu) {
        super((0, su.e)(uu), {
          cause: uu
        }), this.name = "TrafficCheckError"
      }
    }
    class cu extends Error {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(uu, {
          cause: ju
        }), this.networkLost = Eu, this.httpStatus = su, this.name = "SeatRequestError"
      }
    }
    class Nu extends Error {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(uu), this.code = Eu, this.serverText = ju, this.name = "MatchmakeError"
      }
    }
  },
  40944: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Nu,
      g: () => cu,
      i: () => Ou
    });
    var su = ju(2742),
      Uu = ju(3152),
      Zu = ju(39371),
      Xu = ju(36870),
      lu = ju(39375),
      qu = ju(40935),
      fu = ju(40949);
    const Cu = "seat reservation expired.",
      bu = "early_leave";

    function cu(uu) {
      if (uu instanceof Xu.g) return "expected";
      if (uu instanceof qu.u) return uu.networkLost ? "expected" : "unrecognised";
      if (uu instanceof qu.e) {
        if ("closed" === uu.stage && (0 === uu.code || (0, Uu.i)(uu.code))) return "expected";
        if ("roomError" === uu.stage && (uu.serverText === Cu || uu.serverText === bu)) return "expected"
      }
      return uu instanceof qu.e || uu instanceof qu.o ? null === (0, lu.k)(uu.code).name ? "unrecognised" : "known" : (0, su.e)(uu) ? "expected" : uu instanceof qu.w || uu instanceof fu.e ? "known" : "unrecognised"
    }

    function Nu(uu) {
      return uu instanceof Xu.g ? "timedOut" : "expected" !== cu(uu) || (0, su.e)(uu) || uu instanceof qu.e && 1001 === uu.code ? void 0 : "failed"
    }

    function Ou(uu) {
      return uu instanceof qu.e && "attach" !== uu.stage ? (0, Zu.d)(uu, "closed" !== uu.stage || uu.socketOpened ? "socket" : "socket_unopened") : uu instanceof qu.u ? {
        at: "seat_lost",
        code: uu.httpStatus
      } : uu instanceof qu.o || uu instanceof Xu.g ? (0, Zu.d)(uu, uu instanceof Xu.g ? uu.leg : "seat") : void 0
    }
  },
  41033: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => qu,
      f: () => fu,
      g: () => Nu,
      h: () => bu
    });
    var su = ju(3020),
      Uu = ju(4970),
      Zu = ju(41040),
      Xu = ju(41046),
      lu = ju(36684);
    const qu = 395,
      fu = 2147483648,
      Cu = new Uint8Array(0);
    class bu extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class cu extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Nu {
      constructor(uu, Eu, ju) {
        var su, Uu, Xu, lu;
        let qu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = uu, this.build = Eu, this.onFailure = ju, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.oN = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (su = qu.fetchFile) && void 0 !== su ? su : uu => (0, Zu.e)(uu), this.onWritten = null !== (Uu = qu.onWritten) && void 0 !== Uu ? Uu : null, this.onTaken = null !== (Xu = qu.onTaken) && void 0 !== Xu ? Xu : null, this.onPackFileFailed = null !== (lu = qu.onPackFileFailed) && void 0 !== lu ? lu : null, this.startupLeft = new Set(uu.startup);
        for (const Zu of uu.startup) this.request(Zu)
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
      drawnUrl(uu) {
        return this.drawn.get(uu)
      }
      request(uu) {
        const Eu = this.pending.get(uu);
        if (!0 === (null === Eu || void 0 === Eu ? void 0 : Eu.ask)) return;
        const ju = this.NN(uu, !0);
        ju.recheck = void 0 !== Eu;
        const su = this.drawn.get(uu);
        if (void 0 !== su) return ju.dl = !0, ju.recheck = !0, void this.fetch(uu, ju, su);
        this.fetchWanted(uu, ju)
      }
      async refresh() {
        const uu = ++this.refreshes,
          Eu = new Set;
        for (const Xu of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const uu of Xu) 0 === (uu & Zu.d) && Eu.add(uu);
        const ju = [...Eu];
        let su;
        try {
          su = await Promise.all(ju.map((uu => this.wanted(uu))))
        } catch {
          return null
        }
        if (uu !== this.refreshes) return null;
        const Uu = {
          resent: 0,
          refetched: 0,
          delivered: ju.filter((uu => this.drawn.has(uu))).length
        };
        return ju.forEach(((uu, Eu) => {
          const {
            url: ju,
            inPlaceOf: Zu
          } = su[Eu], Xu = this.pending.get(uu);
          if (void 0 !== Xu) {
            if (Xu.dl || void 0 === Xu.url) return void(Xu.recheck = !0);
            if (Xu.url === ju) return;
            Uu.refetched++;
            const Eu = this.NN(uu, Xu.ask);
            return Eu.recheck = Xu.recheck, void this.fetch(uu, Eu, ju, Zu)
          }
          const lu = this.written.get(uu);
          void 0 === lu ? this.drawn.get(uu) !== (null !== ju && void 0 !== ju ? ju : void 0) && (Uu.resent++, this.fetch(uu, this.NN(uu, !1), ju, Zu)) : lu.url !== (null !== ju && void 0 !== ju ? ju : "") && (lu.attempt.recheck = !0)
        })), Uu
      }
      taken(uu, Eu) {
        const ju = new Set,
          su = new Set;
        for (const Uu of Array.from(Eu)) 0 === (Uu & fu) ? ju.add(Uu) : su.add((Uu & ~fu) >>> 0);
        for (const [Uu, Zu] of this.written) Zu.seq > uu || (this.written.delete(Uu), ju.has(Zu.seq) ? this.refusedFile(Uu, Zu) : this.takenFile(Uu, Zu, !Zu.empty && !su.has(Zu.seq)))
      }
      takenFile(uu, Eu, ju) {
        const {
          attempt: su
        } = Eu;
        if (ju) {
          var Uu;
          this.drawn.set(uu, Eu.url), this.undrawn.delete(uu), void 0 !== su.inPlaceOf ? this.refusedPack.set(uu, su.inPlaceOf) : su.dl || this.refusedPack.delete(uu), null === (Uu = this.onTaken) || void 0 === Uu || Uu.call(this, uu, !0);
          const ju = this.pending.get(uu);
          if (!0 === (null === ju || void 0 === ju ? void 0 : ju.dl) && ju.url !== Eu.url) {
            const ju = this.NN(uu, !0);
            ju.dl = !0, ju.recheck = !0, this.fetch(uu, ju, Eu.url)
          }
        } else {
          var Zu;
          this.drawn.has(uu) || this.undrawn.add(uu), null === (Zu = this.onTaken) || void 0 === Zu || Zu.call(this, uu, !1)
        }
        su.recheck && this.resendIfChanged(uu)
      }
      refusedFile(uu, Eu) {
        var ju, su;
        if (null === (ju = this.onTaken) || void 0 === ju || ju.call(this, uu, !1), this.refusedPack.set(uu, Eu.url), this.pending.has(uu)) return void(null === (su = this.onPackFileFailed) || void 0 === su || su.call(this, uu, Ou(Eu.url)));
        const Uu = this.NN(uu, Eu.attempt.ask);
        Uu.recheck = Eu.attempt.recheck, this.afterRefusal(uu, Uu, Eu.url)
      }
      async afterRefusal(uu, Eu, ju) {
        var su;
        let Uu;
        try {
          Uu = await this.wanted(uu)
        } catch (Zu) {
          return void(this.pending.get(uu) === Eu && this.giveUp(uu, Eu, ju, Zu))
        }
        this.pending.get(uu) === Eu && (Uu.inPlaceOf !== ju ? Eu.ask || (null !== (su = Uu.url) && void 0 !== su ? su : void 0) !== this.drawn.get(uu) ? this.fetch(uu, Eu, Uu.url, Uu.inPlaceOf) : this.pending.delete(uu) : this.fallBack(uu, Eu, ju, Ou(ju)))
      }
      NN(uu, Eu) {
        const ju = {
          url: void 0,
          ask: Eu,
          dl: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(uu, ju);
        for (let su = this.ready.length - 1; su >= 0; su--) this.ready[su].file === uu && this.ready.splice(su, 1);
        return ju
      }
      async wanted(uu) {
        const Eu = await this.files.url(uu);
        return null !== Eu && this.refusedPack.get(uu) === Eu ? {
          url: await this.files.shippedUrl(uu),
          inPlaceOf: Eu
        } : {
          url: Eu,
          inPlaceOf: void 0
        }
      }
      fetchWanted(uu, Eu) {
        const ju = this.files.url(uu);
        ju instanceof Promise ? ju.then((ju => {
          this.fetchFound(uu, Eu, ju)
        }), (ju => {
          this.pending.get(uu) === Eu && this.giveUp(uu, Eu, "", ju)
        })) : this.fetchFound(uu, Eu, ju)
      }
      fetchFound(uu, Eu, ju) {
        null !== ju && this.refusedPack.get(uu) === ju ? Promise.resolve(this.files.shippedUrl(uu)).then((su => {
          this.fetch(uu, Eu, su, ju)
        }), (su => {
          this.pending.get(uu) === Eu && this.giveUp(uu, Eu, ju, su)
        })) : this.fetch(uu, Eu, ju)
      }
      fetch(uu, Eu, ju, su) {
        this.pending.get(uu) === Eu && (Eu.url = ju, Eu.inPlaceOf = su, null !== ju ? this.load(uu, Eu, ju) : this.buildFile(uu, Eu, "", Cu))
      }
      load(uu, Eu, ju) {
        const su = this.oN.get(uu);
        (null === su || void 0 === su ? void 0 : su.url) !== ju ? this.fetchFile(ju).then((su => {
          var Uu, Zu;
          this.pending.get(uu) === Eu && (this.keptTotal += su.byteLength - (null !== (Uu = null === (Zu = this.oN.get(uu)) || void 0 === Zu ? void 0 : Zu.glb.byteLength) && void 0 !== Uu ? Uu : 0), this.oN.set(uu, {
            url: ju,
            glb: su
          }), this.buildFile(uu, Eu, ju, su))
        }), (su => {
          this.pending.get(uu) === Eu && this.fallBack(uu, Eu, ju, su)
        })) : this.buildFile(uu, Eu, ju, su.glb)
      }
      buildFile(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Xu = su.byteLength > 0 && (0, Zu.f)(ju) ? (uu | Zu.c) >>> 0 : uu;
        this.queueRecord(uu, Eu, ju, su, this.build(Xu, su), Uu)
      }
      queueRecord(uu, Eu, ju, su, Zu, lu) {
        Zu.then((Zu => {
          if (this.pending.get(uu) !== Eu) return;
          if (Uu.s + (0, Uu.xe)(Zu.byteLength) > Uu.Lc) return void this.ringRefused(uu, Eu, ju, new bu(`${Yu(ju)}'s record is ${Zu.byteLength-Xu.d} bytes, past the cmd ring's ${Uu.Lc}`), lu);
          const qu = {
            file: uu,
            url: ju,
            payload: Zu,
            glb: su,
            attempt: Eu
          };
          lu ? this.ready.unshift(qu) : this.ready.push(qu)
        }))
      }
      async fallBack(uu, Eu, ju, su) {
        var Uu;
        let Zu = null,
          Xu = su;
        try {
          Zu = await this.files.shippedUrl(uu)
        } catch (lu) {
          Xu = lu
        }
        this.pending.get(uu) === Eu && (null !== Zu && Zu !== ju ? (null === (Uu = this.onPackFileFailed) || void 0 === Uu || Uu.call(this, uu, su), Eu.ask || this.drawn.get(uu) !== Zu ? (Eu.url = Zu, Eu.inPlaceOf = ju, this.load(uu, Eu, Zu)) : this.pending.delete(uu)) : this.giveUp(uu, Eu, ju, Xu))
      }
      ringRefused(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Zu.f)(ju) ? this.fallBack(uu, Eu, ju, su): this.giveUp(uu, Eu, ju, su, Uu)
      }
      giveUp(uu, Eu, ju, Uu) {
        let Zu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: uu,
          url: Yu(ju),
          error: Uu,
          startup: this.startupLeft.has(uu)
        }), Eu.ask || !this.drawn.has(uu) ? (0, su.X)(Uu) ? this.queueRecord(uu, Eu, ju, Cu, Promise.resolve((0, Xu.n)(uu, (0, lu.j)(Uu))), Zu) : this.buildFile(uu, Eu, ju, Cu, Zu) : this.pending.delete(uu)
      }
      async resendIfChanged(uu) {
        var Eu;
        if (0 !== (uu & Zu.d)) return;
        let ju;
        try {
          ju = await this.wanted(uu)
        } catch {
          return
        }(null !== (Eu = ju.url) && void 0 !== Eu ? Eu : void 0) === this.drawn.get(uu) || this.pending.has(uu) || this.written.has(uu) || this.fetch(uu, this.NN(uu, !1), ju.url, ju.inPlaceOf)
      }
      drain(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === uu) return;
        let ju = 0,
          su = 0;
        for (; su < this.ready.length && ju < 262144;) {
          const lu = this.ready[su];
          if (this.written.has(lu.file)) {
            su++;
            continue
          }
          const Cu = this.nextSeq;
          new DataView(lu.payload.buffer, lu.payload.byteOffset, lu.payload.byteLength).setUint32(Xu.g, Cu, !0);
          const cu = lu.attempt.dl && lu.glb.byteLength > 0 && this.drawn.get(lu.file) === lu.url;
          if (uu(qu, cu ? 1 : 0, lu.payload)) {
            if (this.nextSeq = Cu >= fu - 1 ? 1 : Cu + 1, this.ready.splice(su, 1), ju += lu.payload.byteLength, this.pending.delete(lu.file), this.startupLeft.delete(lu.file), this.written.set(lu.file, {
                seq: Cu,
                url: lu.url,
                empty: 0 === lu.glb.byteLength,
                attempt: lu.attempt
              }), lu.glb.byteLength > 0) try {
              var Uu;
              null === (Uu = this.onWritten) || void 0 === Uu || Uu.call(this, lu.file, lu.glb)
            } catch (Zu) {
              console.warn("ModelFeed: reading the file's images failed", Zu)
            }
          } else {
            if (null === Eu || 0 === lu.glb.byteLength || Eu(lu.payload.byteLength)) return;
            this.ready.splice(su, 1);
            const uu = new bu(`${Yu(lu.url)}'s record is ${lu.payload.byteLength-Xu.d} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(lu.file, lu.attempt, lu.url, uu, !0)
          }
        }
      }
    }

    function Ou(uu) {
      return new cu(`presentation refused ${Yu(uu)}`)
    }

    function Yu(uu) {
      return uu.startsWith("data:") ? `${uu.slice(0,Math.min(Math.max(uu.indexOf(","),5),64))},...` : uu
    }
  },
  41040: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu,
      d: () => Zu,
      e: () => Cu,
      f: () => lu,
      g: () => fu,
      i: () => qu
    });
    var su = ju(3020),
      Uu = ju(3375);
    const Zu = 2147483648,
      Xu = 1073741824;

    function lu(uu) {
      return uu.startsWith("data:")
    }

    function qu(uu) {
      let {
        onTableFailed: Eu,
        packUrl: ju
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const su = fu();
      su.catch((uu => {
        null === Eu || void 0 === Eu || Eu(uu)
      }));
      const Uu = async Eu => (await su).fileUrl((Eu & ~Zu) >>> 0, uu);
      return {
        startup: [],
        url: async uu => {
          if (ju && 0 === (uu & Zu)) {
            const Eu = await su,
              Uu = Eu.filePackName(uu),
              Zu = null === Uu || "lifeform" === Eu.fileSource(uu) ? null : ju(Uu);
            if (null !== Zu) return Zu
          }
          return Uu(uu)
        },
        shippedUrl: Uu
      }
    }

    function fu() {
      return ju.e(42).then((() => ju(42925)))
    }
    async function Cu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return uu.startsWith("data:") ? (0, Uu.d)(uu.slice(uu.indexOf(",") + 1), Eu) : (0, su.K)(uu, {
        spare: Eu
      })
    }
  },
  41046: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu,
      g: () => Cu,
      h: () => Nu,
      l: () => hu,
      n: () => Ou,
      o: () => cu,
      s: () => Yu
    });
    const su = 826427981,
      Uu = 1,
      Zu = 2,
      Xu = 44,
      lu = 46,
      qu = 58,
      fu = 8,
      Cu = 4;

    function bu(uu, Eu, ju) {
      const Uu = (new TextEncoder).encode(ju),
        Zu = fu + 4 * (Eu.length + 2),
        Xu = new Uint8Array(Zu + (Uu.byteLength + 3 & -4)),
        lu = new DataView(Xu.buffer);
      return lu.setUint32(0, uu, !0), lu.setUint32(fu, su, !0), Eu.forEach(((uu, Eu) => {
        lu.setUint32(fu + 4 * (Eu + 1), uu, !0)
      })), lu.setUint32(Zu - 4, Uu.byteLength, !0), Xu.set(Uu, Zu), Xu
    }

    function cu(uu, Eu) {
      return bu(uu, [Zu], Eu)
    }

    function Nu(uu, Eu) {
      return bu(uu, [Uu, lu], Eu)
    }

    function Ou(uu, Eu) {
      return bu(uu, [Uu, qu], Eu)
    }

    function Yu(uu, Eu) {
      return bu(uu, [Uu, Xu], Eu)
    }

    function hu(uu) {
      const Eu = fu;
      if (uu.byteLength < Eu + 12) return !1;
      const ju = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      return ju.getUint32(Eu, !0) === su && ju.getUint32(Eu + 4, !0) === Uu && ju.getUint32(Eu + 8, !0) === Xu
    }
  },
  40971: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu,
      g: () => Cu,
      k: () => Xu,
      l: () => qu
    });
    var su = ju(36684);
    class Uu extends Error {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${uu}: the module trapped${ju?" in an earlier call":""}: ${String(Eu)}`, {
          cause: Eu
        }), this.site = uu, this.trap = Eu, this.earlier = ju, this.name = "ModuleTrapError", Eu instanceof Error && void 0 !== Eu.stack && (this.stack = `${this.name}: ${this.message}\n${Eu.stack}`)
      }
    }
    const Zu = new WeakMap;

    function Xu(uu) {
      return Zu.has(uu)
    }

    function lu(uu, Eu) {
      Zu.has(uu) || Zu.set(uu, Eu)
    }

    function qu(uu, Eu) {
      return !!(0, su.h)(Eu) && (lu(uu, Eu), !0)
    }
    const fu = [
      ["error", uu => uu.error],
      ["unhandledrejection", uu => uu.reason]
    ];

    function Cu(uu, Eu, ju) {
      let Xu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Zu.has(uu) ? Promise.reject(new Uu(Eu, Zu.get(uu), !0)) : new Promise(((Zu, qu) => {
        const Cu = ju => {
            lu(uu, ju), Nu(), qu(new Uu(Eu, ju))
          },
          bu = uu => {
            uu instanceof WebAssembly.RuntimeError ? Cu(uu) : (Nu(), qu(uu))
          },
          cu = fu.map((uu => {
            let [Eu, ju] = uu;
            return [Eu, uu => {
              const Eu = ju(uu);
              (0, su.h)(Eu) && Cu(Eu)
            }]
          })),
          Nu = () => {
            for (const [uu, Eu] of cu) null === Xu || void 0 === Xu || Xu.removeEventListener(uu, Eu)
          };
        for (const [uu, Eu] of cu) null === Xu || void 0 === Xu || Xu.addEventListener(uu, Eu);
        let Ou;
        try {
          Ou = ju()
        } catch (Yu) {
          return void bu(Yu)
        }
        Ou.then((uu => {
          Nu(), Zu(uu)
        }), bu)
      }))
    }
  },
  40960: (uu, Eu, ju) => {
    ju.d(Eu, {
      B: () => Iu,
      D: () => Ku,
      H: () => Ju,
      K: () => mu,
      N: () => Bu,
      O: () => vu,
      S: () => ru,
      U: () => ku,
      V: () => Lu,
      e: () => wu,
      h: () => eu,
      l: () => Qu,
      m: () => Vu,
      p: () => Mu,
      r: () => pu,
      t: () => Du,
      w: () => au,
      x: () => ou,
      z: () => Fu
    });
    var su = ju(207),
      Uu = ju(22),
      Zu = ju(3761),
      Xu = ju(330),
      lu = ju(31),
      qu = ju(40963),
      fu = ju(36860),
      Cu = ju(40984),
      bu = (ju(41017), ju(41072)),
      cu = ju(41002);
    const Nu = "wasmJoinBuild";
    let Ou = null,
      Yu = null,
      hu = null;

    function Du(uu) {
      hu = uu
    }
    let gu = !1;

    function Mu() {
      gu = !0
    }

    function eu() {
      return gu
    }
    let Gu = !1;

    function pu() {
      Gu = !0
    }

    function wu() {
      return Gu
    }

    function Ju() {
      return hu
    }
    let du = null;

    function au(uu) {
      du = uu, (0, Xu.c)(uu)
    }
    const Pu = "wasmClientRenderLost";

    function ou() {
      lu.l.setItem(Pu, !0)
    }

    function ku() {
      return !0 === lu.l.getItem(Pu)
    }

    function mu() {
      return du
    }

    function vu() {
      if (null === Ou) {
        lu.k.removeItem("wasmLastPick"), lu.k.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, Xu.h)(), Ou = (0, qu.G)(Cu.e).then((uu => (null === uu || (0, qu.t)(uu) || (Yu = bu.b[uu.backend], Uu.d.followGameGpu("webgpu" === uu.backend ? uu.adapter : null), "webgpu" === uu.backend && (0, cu.h)()), uu)))
      }
      return Ou
    }

    function Ku() {
      return Yu
    }

    function Vu(uu) {
      return uu ? uu.load() : Promise.resolve().then((function() {
        var uu = new Error("Cannot find module '@bloxd/wasm/client'");
        throw uu.code = "MODULE_NOT_FOUND", uu
      })).then((uu => uu.bloxdWasmClient))
    }

    function ru(uu) {
      lu.k.setItem(Nu, uu)
    }
    async function Qu() {
      if (null === Cu.e) return Vu(null);
      const uu = lu.k.getItem(Nu);
      let Eu;
      return null === uu ? Eu = void 0 !== (0, su.c)(Cu.e, "webgpu") && (0, qu.F)() ? "webgpu" : "webgl" : "none" === uu ? Eu = null : "string" === typeof uu && void 0 !== (0, su.c)(Cu.e, uu) ? Eu = uu : (console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(uu)}, is none of this client's: guessing WebGL2's`), Eu = "webgl"), null === Eu ? null : Cu.e[Eu]()
    }
    let iu = null,
      Wu = null,
      Su = null;

    function Iu() {
      return iu ??= vu().then((async uu => {
        const Eu = null !== uu && !(0, qu.t)(uu),
          ju = {
            indirectHangs: Eu && await (0, qu.R)(uu, window.location.search),
            storagePullBreaks: Eu && (0, qu.db)(uu, window.location.search),
            splitPassBreaks: Eu && (0, qu.ab)(uu, window.location.search),
            earlySky: Eu && (0, qu.Q)(uu, window.location.search),
            instancedTerrain: Eu ? (0, qu.V)(uu, window.location.search) : null,
            cellLight: Eu && await (0, Zu.j)("cellLight"),
            framesAhead: (0, qu.n)(window.location.search),
            webGpuRestores: !Eu || (0, qu.fb)(uu, (0, fu.c)()),
            bufferCopiesCrash: Eu && (0, qu.M)(uu, window.location.search)
          };
        return Wu = ju.indirectHangs, Su = !ju.webGpuRestores, ju
      })), iu
    }

    function Fu() {
      return Wu
    }

    function Bu() {
      return Su
    }
    async function Lu() {
      const uu = null === Ou ? null : await Ou;
      return null !== uu && (0, qu.t)(uu) && (Ou = null, iu = null, Wu = null, Su = null), vu()
    }
  },
  41199: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(36713),
      Uu = ju(41093),
      Zu = ju(36860);

    function Xu(uu, Eu) {
      return (0, su.o)(uu, Uu.g, {
        ...Eu,
        memoryMaximumBytes: (0, Zu.o)()
      })
    }
  },
  40980: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => fu,
      d: () => lu,
      e: () => Cu,
      h: () => Xu
    });
    var su = ju(345),
      Uu = ju(669);
    let Zu;

    function Xu(uu) {
      var Eu;
      const ju = Zu;
      return Zu = void 0, null !== (Eu = qu(uu)) && void 0 !== Eu ? Eu : ju
    }

    function lu(uu) {
      try {
        const Eu = qu(uu);
        void 0 !== Eu && (Zu = Eu, (0, Uu.g)((0, su.s)(Eu.reason, Eu.message)))
      } catch (Eu) {
        console.warn("Couldn't keep the WebGPU loss's cause", Eu)
      }
    }

    function qu(uu) {
      var Eu;
      const ju = null === uu || void 0 === uu || null === (Eu = uu.wZu) || void 0 === Eu ? void 0 : Eu.call(uu),
        su = null === uu || void 0 === uu ? void 0 : uu.pZu();
      if (void 0 === su) return;
      const Uu = new Error(su);
      return void 0 !== ju && (Uu.reason = ju), Uu
    }

    function fu(uu) {
      return uu instanceof Error ? uu : void 0
    }

    function Cu(uu, Eu) {
      return "lost" !== uu && "frames_refused" !== uu ? {} : (0, su.s)("frames_refused" === uu ? uu : null === Eu || void 0 === Eu ? void 0 : Eu.reason, null === Eu || void 0 === Eu ? void 0 : Eu.message)
    }
  },
  40997: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Ju,
      g: () => Mu,
      j: () => gu,
      l: () => wu,
      m: () => ou,
      q: () => Pu,
      u: () => ku,
      y: () => Gu
    });
    var su = ju(4976),
      Uu = ju(41002);
    const Zu = 1,
      Xu = 18,
      lu = 19,
      qu = 20,
      fu = 21,
      Cu = {
        [Zu]: "link",
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
        [Xu]: "retry linked",
        [lu]: "fallback linked",
        [qu]: "fallback failed",
        [fu]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function bu(uu, Eu, ju) {
      return uu === Xu ? "program retry" : uu === Zu ? "program link" : uu === fu ? "program link stall" : uu === lu || uu === qu ? `program ${Eu} ${ju}` : "program"
    }
    const cu = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      Nu = {
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
      Ou = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Yu = {
        11: "none read after view",
        12: "some read after view"
      },
      hu = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...Yu
      },
      Du = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function gu(uu, Eu) {
      return uu === su.j.RenderSerialLinks && void 0 !== Yu[Eu]
    }

    function Mu(uu, Eu) {
      return uu === su.j.RenderSerialLinks && void 0 !== Du[15 & Eu]
    }
    const eu = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function Gu(uu) {
      return String(uu).replace(/\d/g, (uu => String.fromCharCode(97 + Number(uu))))
    }

    function pu(uu, Eu) {
      var ju;
      return null !== (ju = uu[Eu]) && void 0 !== ju ? ju : Gu(Eu)
    }

    function wu() {
      return Gu((0, Uu.e)())
    }

    function Ju(uu, Eu) {
      switch (uu) {
        case su.j.RenderSceneRowNotDrawn:
          return {
            words: ` ${pu(Nu,Eu)}`, instance: String(Eu), group: String(uu)
          };
        case su.j.RenderChunkMeshNotDrawn: {
          const ju = 0 === (128 & Eu) ? "" : " shortage",
            su = Eu >>> 8;
          return {
            words: ` ${pu(Ou,127&Eu)}${ju}${0===su?"":` kind ${Gu(su)}`}`,
            instance: String(Eu),
            group: String(uu)
          }
        }
        case su.j.RenderInternal: {
          const ju = pu(cu, 255 & Eu),
            su = Eu >>> 8 & 255;
          if (0 === su) return {
            words: ` ${ju}`,
            instance: String(Eu),
            group: String(uu)
          };
          const Uu = pu(Cu, su),
            Zu = Eu >>> 16;
          return {
            words: ` ${ju} ${Uu} program ${Gu(Zu)}`,
            instance: `${ju} ${Uu} ${Zu}`,
            group: bu(su, Uu, ju),
            gpuDetails: {
              programFailure: Uu,
              program: String(Zu)
            }
          }
        }
        case su.j.RenderSerialLinks: {
          if (Mu(uu, Eu)) {
            const uu = function(uu) {
              const Eu = (Eu, ju) => Gu(uu >>> Eu & (1 << ju) - 1),
                ju = uu >>> 30 & 1 ? " restored" : "";
              return `link census ${Du[15&uu]} linked ${Eu(22,8)} failed ${Eu(4,6)} retried ${Eu(10,6)} fallback ${Eu(16,6)}${ju}`
            }(Eu);
            return {
              words: ` ${uu}`,
              instance: String(15 & Eu),
              group: "link census",
              gpuDetails: {
                linkCensus: uu
              }
            }
          }
          const ju = pu(hu, Eu);
          return {
            words: ` ${ju}`,
            instance: String(Eu),
            group: String(uu),
            gpuDetails: {
              serialLinks: ju
            }
          }
        }
        case su.j.RenderGlErrorAfterRestore: {
          const ju = pu(eu, 65535 & Eu),
            su = Eu >>> 16,
            Uu = 65535 !== su;
          return {
            words: ` ${ju}${Uu?` program ${Gu(su)}`:""}`,
            instance: String(Eu),
            group: String(uu),
            gpuDetails: Uu ? {
              glError: ju,
              program: String(su)
            } : {
              glError: ju
            }
          }
        }
        default:
          return null
      }
    }
    const du = 2,
      au = new Map;

    function Pu(uu) {
      let {
        group: Eu,
        instance: ju
      } = uu, su = au.get(Eu);
      return void 0 === su && (su = [], au.set(Eu, su)), !su.includes(ju) && (su.length >= du || (su.push(ju), !1))
    }

    function ou() {
      return au.size > 0
    }

    function ku() {
      au.clear()
    }
  },
  40984: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu,
      e: () => Zu
    });
    var su = ju(40988);
    const Uu = new WeakSet;
    const Zu = {
        webgpu: async () => (function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === uu || Uu.has(uu.prototype)) return;
          Uu.add(uu.prototype);
          const Eu = uu.prototype.requestDevice;
          uu.prototype.requestDevice = function(uu) {
            var ju;
            const Uu = null !== (ju = null === uu || void 0 === uu ? void 0 : uu.requiredLimits) && void 0 !== ju ? ju : {},
              Zu = Object.keys(Uu).filter((uu => !(uu in this.limits)));
            if (0 === Zu.length) return Eu.call(this, uu);
            const Xu = Object.fromEntries(Object.entries(Uu).filter((uu => {
              let [Eu] = uu;
              return Eu in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${Zu.join(", ")}`), (0, su.reportDroppedRequiredLimits)(Zu), Eu.call(this, {
              ...uu,
              requiredLimits: Xu
            })
          }
        }(), (await ju.e(8).then((() => ju(42876)))).bloxdWasmWebgpu),
        webgl: async () => (await ju.e(6).then((() => ju(42888)))).bloxdWasmWebgl,
        webgl1: async () => (await ju.e(7).then((() => ju(42899)))).bloxdWasmWebgl1
      },
      Xu = async () => (await ju.e(5).then((() => ju(42912)))).compileAnimationPackInWasm
  },
  40949: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Du,
      g: () => hu,
      k: () => Gu
    });
    var su = ju(6840),
      Uu = ju(24),
      Zu = ju(4466),
      Xu = ju(4976),
      lu = ju(6836),
      qu = ju(40952);

    function fu(uu, Eu) {
      const ju = (0, lu.e)(Eu.variants);
      return uu.setShaderPack(ju.variantFlags, ju.hooks, ju.moduleCodes, (0, qu.w)(Eu.layers), qu.k[Eu.ql], Eu.keepCircleShadows)
    }
    const Cu = 0,
      bu = 1,
      cu = 2,
      Nu = "shaderPack:failedToCompile",
      Ou = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      Yu = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function hu(uu, Eu) {
      var ju;
      const su = null !== (ju = null === uu || void 0 === uu ? void 0 : uu.reason) && void 0 !== ju ? ju : "none";
      return Ou.has(su) ? {
        messageKey: Eu ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === su && "override" === (null === uu || void 0 === uu ? void 0 : uu.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Yu.has(su) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class Du extends Error {
      constructor(uu) {
        super(`the shader pack can't run in this game: ${uu}`), this.messageKey = uu, this.name = "ShaderPackJoinError"
      }
    }
    const gu = "strict";
    class Mu {
      constructor(uu) {
        this.deps = uu, this.pagePack = void 0, this.loaded = null, this.ql = gu, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = uu.load().catch((Eu => (uu.warn("the shader pack could not load: the game draws without it", Eu), {
          status: "none"
        }))).then((uu => (this.loaded = uu, "active" === uu.status && (this.handOverToPreviews(uu), null !== uu.harnessPolicy && (this.ql = uu.harnessPolicy, this.handOver())), uu)))
      }
      async join(uu) {
        this.leave();
        const Eu = this.game,
          [ju, Uu] = await Promise.all([this.pagePack, this.policyOf(uu)]);
        if (Eu !== this.game || "none" === ju.status) return null;
        const Zu = "active" === ju.status ? ju.pack.variants : ju.variants,
          Xu = (0, su.i)(Zu, Uu);
        if (Xu && "active" === ju.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Xu) {
          const uu = this.cantRun(ju, Uu);
          if (null !== uu) return uu
        } else if ("blocked" === ju.status || null === this.deps.core) return null;
        return this.ql = Uu, this.handOver(), Xu && this.refused ? Nu : (this.joined = !0, this.offInThisGame = !Xu, null)
      }
      async replay(uu) {
        const Eu = await this.join(uu);
        null === Eu ? this.playable() : this.deps.failInGame(Eu)
      }
      cantRun(uu, Eu) {
        const {
          core: ju,
          noWebGpu: su
        } = this.deps;
        if ("blocked" === uu.status) {
          return "shaderPack:failedUnchecked" === uu.messageKey && null === ju && su.noAdapter ? su.messageKey : uu.messageKey
        }
        return this.refused || this.failedPolicies.has(Eu) ? Nu : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var uu;
        return this.runsInJoinedGame() && "active" === (null === (uu = this.loaded) || void 0 === uu ? void 0 : uu.status) ? function(uu, Eu) {
          const ju = uu.filter((uu => (0, su.i)([uu], Eu))),
            Uu = uu => ju.some((Eu => Eu[uu]));
          return {
            sceneDepth: Uu("sceneDepth"),
            sunShadow: Uu("sunShadow"),
            airShadow: Uu("airShadow")
          }
        }(this.loaded.pack.variants, this.ql) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Nu) : (null !== this.couldntRun ? this.notify(Zu.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.ql) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(uu) {
        for (const {
            code: Eu,
            detail: ju
          }
          of uu)
          if (Eu === Xu.j.RenderShaderPackNotRun) switch (255 & ju) {
            case Cu:
              this.refused = !0, this.failed();
              break;
            case bu:
              this.failedPolicies.add(this.ql), this.failed();
              break;
            case cu:
              this.failedModelPolicies.add(this.ql), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Nu) : this.failedWhileJoining = !0)
      }
      fail(uu) {
        this.leave(), this.deps.failInGame(uu)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(uu, Eu) {
        const ju = this.game;
        this.deps.notify(uu, (() => ju === this.game && this.joined), Eu)
      }
      handOver() {
        var uu;
        const {
          core: Eu
        } = this.deps;
        null !== Eu && "active" === (null === (uu = this.loaded) || void 0 === uu ? void 0 : uu.status) && (fu(Eu, {
          ...this.loaded.pack,
          ql: this.ql
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(uu) {
        let {
          pack: Eu,
          harnessPolicy: ju
        } = uu;
        const {
          previews: su
        } = this.deps;
        null !== su && fu(su, {
          ...Eu,
          ql: null !== ju && void 0 !== ju ? ju : gu
        })
      }
      policyOf(uu) {
        return this.deps.policyOf(uu).catch((uu => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", uu), gu)))
      }
    }
    const eu = "wasmShaderPackNotice";

    function Gu(uu, Eu, ju, su) {
      return Uu.h.subscribe(eu, (uu => {
        let {
          translationKey: Eu,
          stillCurrent: ju,
          reasonKey: su
        } = uu;
        ju() && Uu.h.TY("chat", (0, Zu.e)(Eu, su))
      })), new Mu({
        load: pu,
        policyOf: wu,
        core: uu,
        previews: Eu,
        noWebGpu: ju,
        notify: (uu, Eu, ju) => {
          const su = {
            translationKey: uu,
            stillCurrent: Eu,
            reasonKey: ju
          };
          Uu.h.TY(eu, su, !0)
        },
        failInGame: uu => {
          Uu.h.TY(Zu.c, uu)
        },
        warn: su
      })
    }
    async function pu() {
      const [{
        shaderPackPage: uu,
        harnessShaderPackMode: Eu
      }, {
        shaderPackTextures: su
      }] = await Promise.all([ju.e(117).then((() => ju(39525))), ju.e(118).then((() => ju(6827)))]), Uu = await uu.load();
      return "active" !== Uu.status ? Uu : {
        status: "active",
        pack: {
          variants: Uu.pack.variants,
          layers: su().layers,
          keepCircleShadows: Uu.pack.keepCircleShadows
        },
        harnessPolicy: Eu()
      }
    }
    async function wu(uu) {
      var Eu;
      const [{
        shaderPackPage: su,
        harnessShaderPackMode: Uu
      }, {
        getShaderPackPolicy: Zu
      }] = await Promise.all([ju.e(117).then((() => ju(39525))), ju.e(93).then((() => ju(41498)))]);
      return await su.load(), null !== (Eu = Uu()) && void 0 !== Eu ? Eu : Zu(uu)
    }
  },
  41056: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu,
      c: () => hu,
      f: () => qu,
      h: () => fu,
      l: () => Cu,
      o: () => cu
    });
    var su = ju(41062),
      Uu = ju(41067);
    const Zu = "atlas:",
      Xu = 3e4;
    class lu extends Error {
      constructor(uu, Eu) {
        super(`fetching ${uu} answered HTTP ${Eu}`), this.url = uu, this.status = Eu, this.name = "TerrainTextureFetchError"
      }
    }

    function qu(uu) {
      if (!uu.startsWith(Zu)) return null;
      const Eu = Number(uu.slice(Zu.length));
      return Number.isInteger(Eu) && Eu >= 0 ? Eu : null
    }
    async function fu() {
      const uu = await ju.e(207).then((() => ju(34634)));
      return {
        atlasSheets: uu.blockAtlasUrls,
        texture: Eu => {
          var ju, su, Zu;
          return null !== (ju = null !== (su = null !== (Zu = uu.animatedBlockTextures[Eu]) && void 0 !== Zu ? Zu : uu.rotatedBlockTextures[Eu]) && void 0 !== su ? su : Uu.c[Eu]) && void 0 !== ju ? ju : null
        }
      }
    }
    async function Cu(uu) {
      const Eu = new AbortController,
        ju = setTimeout((() => {
          Eu.abort(new DOMException(`${uu} took over ${Xu} ms`, "TimeoutError"))
        }), Xu);
      let su;
      try {
        const ju = await fetch(uu, {
          signal: Eu.signal
        });
        if (!ju.ok) throw new lu(uu, ju.status);
        su = await ju.blob()
      } finally {
        clearTimeout(ju)
      }
      const Uu = await createImageBitmap(su, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return cu(Uu)
      } finally {
        Uu.close()
      }
    }
    const bu = 8192;

    function cu(uu) {
      const {
        width: Eu,
        height: ju
      } = uu, Uu = Math.max(1, Math.min(ju, bu)), Zu = (0, su.i)(Eu, Uu, {
        willReadFrequently: !0
      });
      if (!Zu) throw new Error("no 2D context to read the texture back");
      Zu.globalCompositeOperation = "copy";
      const Xu = new Uint8Array(Eu * ju * 4);
      for (let su = 0; su < ju; su += Uu) {
        const lu = Math.min(Uu, ju - su);
        Zu.drawImage(uu, 0, su, Eu, lu, 0, 0, Eu, lu), Xu.set(Zu.getImageData(0, 0, Eu, lu).data, su * Eu * 4)
      }
      return {
        width: Eu,
        height: ju,
        pixels: Xu
      }
    }
    async function Nu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Cu;
      const su = [],
        Uu = await Promise.all(uu.map((async uu => {
          var Uu, Xu;
          const lu = null !== (Uu = null === (Xu = Eu.decoded) || void 0 === Xu ? void 0 : Xu.call(Eu, uu)) && void 0 !== Uu ? Uu : null,
            fu = null === lu ? function(uu, Eu) {
              if (uu.startsWith(Zu)) {
                var ju;
                const su = qu(uu);
                return null === su ? null : null !== (ju = Eu.atlasSheets[su]) && void 0 !== ju ? ju : null
              }
              return Eu.texture(uu)
            }(uu, Eu) : null,
            Cu = null !== lu && void 0 !== lu ? lu : null === fu ? null : ju(fu);
          if (null === Cu) return su.push({
            name: uu,
            url: fu,
            error: new Error(`no URL for terrain texture ${uu}`)
          }), null;
          try {
            const Eu = await Cu;
            if (Eu.pixels.byteLength !== Eu.width * Eu.height * 4) throw new Error(`decoded ${Eu.pixels.byteLength} bytes for ${Eu.width}x${Eu.height} texels`);
            return {
              name: uu,
              texture: Eu
            }
          } catch (bu) {
            return su.push({
              name: uu,
              url: fu,
              error: bu
            }), null
          }
        }))),
        Xu = Uu.filter((uu => null !== uu)),
        lu = new Uint32Array(2 * Xu.length);
      Xu.forEach(((uu, Eu) => {
        let {
          texture: ju
        } = uu;
        lu[2 * Eu] = ju.width, lu[2 * Eu + 1] = ju.height
      }));
      return {
        handOver: {
          names: Xu.map((uu => {
            let {
              name: Eu
            } = uu;
            return Eu
          })),
          textures: Xu.map((uu => {
            let {
              texture: Eu
            } = uu;
            return Eu.pixels
          })),
          sizes: lu
        },
        failures: su
      }
    }
    const Ou = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Yu() {}
    class hu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ou,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = uu, this.retryMs = Eu, this.keepBelow = ju, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fu,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const su = ++this.started,
          Uu = {
            decode: ju.decode,
            wholeAtlas: ju.wholeAtlas
          };
        return this.loadAndHandOver(Eu, Uu, uu, (() => {
          var uu;
          return su < this.landed || !1 === (null === (uu = ju.wanted) || void 0 === uu ? void 0 : uu.call(ju))
        }), {
          onTaken: (uu, ju) => {
            this.landed = su, this.current = {
              mine: su,
              sources: Eu,
              load: Uu,
              oN: uu,
              failed: ju
            }
          }
        })
      }
      restore(uu) {
        var Eu;
        const ju = this.current;
        if (null === ju) return Promise.resolve(null);
        if ((null === (Eu = this.restoring) || void 0 === Eu ? void 0 : Eu.mine) === ju.mine) return this.restoring.done;
        const su = {
          mine: ju.mine,
          done: this.restoreLanded(ju, uu).finally((() => {
            this.restoring === su && (this.restoring = null)
          }))
        };
        return this.restoring = su, su.done
      }
      async restoreLanded(uu, Eu) {
        const ju = () => this.landed !== uu.mine,
          {
            oN: su
          } = uu;
        if (null !== su) return this.stopped() ? null : this.core.setTerrainTextures(su.names, su.textures, su.sizes);
        let Uu = Eu;
        for (let Zu = 0;; Zu++) {
          const Eu = this.retryMs.at(Zu),
            su = {
              allOrNothingExcept: void 0 === Eu ? void 0 : uu.failed
            },
            Xu = await this.loadAndHandOver(uu.sources, uu.load, Uu, ju, su);
          if (!1 !== Xu || void 0 === Eu || this.stopped()) return Xu;
          if (Uu = Yu, await new Promise((uu => {
              setTimeout(uu, Eu)
            })), ju()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Zu = this.core.terrainTextureNames();
        var Xu;
        if (0 === Zu.length) return null === (Xu = Uu.onTaken) || void 0 === Xu || Xu.call(Uu, null, new Set), !0;
        let lu, fu;
        try {
          lu = await uu(), fu = await Nu(Zu, lu, Eu.decode)
        } catch (hu) {
          return su() ? null : (ju({
            name: null,
            url: null,
            error: hu
          }), !1)
        }
        if (su() || this.stopped()) return null;
        for (const qu of fu.failures) ju(qu);
        const Cu = Uu.allOrNothingExcept;
        if (void 0 !== Cu && fu.failures.some((uu => {
            let {
              name: Eu
            } = uu;
            return null === Eu || !Cu.has(Eu)
          })) || !0 === Eu.wholeAtlas && fu.failures.some((uu => {
            let {
              name: Eu
            } = uu;
            return null === Eu || null !== qu(Eu)
          }))) return !1;
        const {
          handOver: bu
        } = fu, cu = function(uu) {
          return uu.textures.reduce(((uu, Eu) => uu + Eu.byteLength), 0)
        }(bu) < this.keepBelow, Ou = this.core.setTerrainTextures(bu.names, bu.textures, bu.sizes, cu ? void 0 : () => {
          !async function(uu, Eu) {
            await Eu;
            for (const {
                buffer: su
              }
              of uu) {
              const uu = su;
              var ju;
              if (!uu.detached) null === (ju = uu.transfer) || void 0 === ju || ju.call(uu, 0)
            }
          }(bu.textures, lu.heldUntil)
        });
        if (Ou) {
          var Yu;
          const uu = new Set(fu.failures.flatMap((uu => {
            let {
              name: Eu
            } = uu;
            return null === Eu ? [] : [Eu]
          })));
          null === (Yu = Uu.onTaken) || void 0 === Yu || Yu.call(Uu, cu ? bu : null, uu)
        }
        return Ou
      }
    }
  },
  37241: (uu, Eu, ju) => {
    function su(uu) {
      return "fetch" === uu || "timeout" === uu || "integrity" === uu ? "download" : "browser"
    }
    ju.d(Eu, {
      e: () => Uu,
      h: () => Xu,
      k: () => qu,
      l: () => lu,
      m: () => su,
      q: () => Zu
    });
    const Uu = "https://discord.gg/playbloxd";

    function Zu(uu) {
      return "download" === uu ? {
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

    function Xu(uu, Eu) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Eu ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: uu.code
        },
        discordLink: Eu,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function lu() {
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

    function qu(uu, Eu, ju) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: ju ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: uu.reason
        },
        discordLink: null === uu.name,
        confirm: Eu ? "general:reconnect" : uu.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  34505: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu,
      g: () => bu,
      j: () => Cu
    });
    var su = ju(274),
      Uu = ju(91),
      Zu = ju(124),
      Xu = ju(117),
      lu = ju(676);
    const qu = new Set(["mali_bifrost"]);

    function fu() {
      if ("android" !== (0, Uu.pageOperatingSystem)() || lu.d || (0, lu.c)("webgl_default")) return;
      const uu = (0, Zu.o)(),
        Eu = null === uu ? (0, su.o)() : (0, su.h)(uu.vendor, uu.renderer);
      return null !== Eu && qu.has(Eu) ? uu => (0, su.l)((0, Xu.d)(uu).vendor, Eu) : void 0
    }

    function Cu(uu, Eu) {
      return uu ? () => !0 : Eu()
    }
    async function bu(uu) {
      try {
        const Eu = Cu(uu, fu),
          ju = navigator.gpu;
        if (void 0 === Eu || void 0 === ju) return !1;
        const su = await (0, Xu.o)(ju, {
          seed: !1,
          compatibility: Eu
        });
        return "string" !== typeof su && su.compatibility && !(0, Xu.j)(su.adapter)
      } catch (Eu) {
        return console.error("WebGPU compatibility-mode adapter request failed.", Eu), !1
      }
    }
  },
  41002: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => qu,
      h: () => fu
    });
    var su = ju(91),
      Uu = ju(39110);
    const Zu = "webgpuPipeline";

    function Xu(uu) {
      return uu.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let lu = null;

    function qu() {
      if (null === lu) try {
        uu = (0, su.getBrowserName)(), Eu = (0, su.getBrowserVersion)(), ju = (0, su.getOperatingSystem)(), Uu = (0, su.getOperatingSystemVersion)(), lu = `${uu.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===Eu?"unknown":Xu(Eu)}-${ju}${void 0===Uu?"":`_${Xu(Uu)}`}`
      } catch (Zu) {
        console.warn("The user agent couldn't be read for its browser code", Zu), lu = "unknown"
      }
      var uu, Eu, ju, Uu;
      return lu
    }

    function fu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const Eu = `WGPU-${qu()}`,
        su = (uu, su) => {
          const {
            reason: Xu,
            message: lu
          } = su;
          if ((0, Uu.y)(String(lu))) return;
          const qu = {
            pipeline: null !== uu && void 0 !== uu ? uu : "",
            reason: String(Xu),
            browserMessage: String(lu)
          };
          Promise.resolve().then((() => ju(40988))).then((uu => {
            let {
              reportCrash: ju
            } = uu;
            ju({
              kind: "coreError",
              code: Eu,
              site: Zu,
              fatal: !1,
              message: `${qu.pipeline} ${qu.reason}: ${qu.browserMessage}`,
              details: qu,
              error: su
            })
          })).catch((uu => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", uu)
          }))
        },
        Xu = uu.createRenderPipelineAsync;
      uu.createRenderPipelineAsync = function(uu) {
        return Xu.call(this, uu).catch((Eu => {
          throw su(uu.label, Eu), Eu
        }))
      };
      const lu = uu.createComputePipelineAsync;
      uu.createComputePipelineAsync = function(uu) {
        return lu.call(this, uu).catch((Eu => {
          throw su(uu.label, Eu), Eu
        }))
      }
    }
  },
  41101: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/bloxd_wasm_models_bg.6a584871f5a35c4c72aa.wasm"
  },
  41097: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/bloxd_wasm_workers_bg.2965d4f827f7e0548197.wasm"
  },
  41093: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      g: () => su
    });
    const su = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new ju.U(ju(41097))
      }
    };
    const Uu = {
      name: "bloxd_wasm_models",
      url: function() {
        return new ju.U(ju(41101))
      }
    }
  },
  6836: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => eu,
      f: () => Gu,
      j: () => gu,
      m: () => Du
    });
    var su = ju(6840);
    const Uu = 6,
      Zu = 3,
      Xu = 1,
      lu = 2,
      qu = 4,
      fu = 8,
      Cu = 16,
      bu = 32,
      cu = 64,
      Nu = 128,
      Ou = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Yu(uu) {
      if (!uu) return 0;
      const Eu = Ou.indexOf(uu);
      if (Eu <= 0) throw new Error(`"${uu}" is not a shader pack hook function`);
      return Eu
    }

    function hu(uu) {
      if (0 === uu) return null;
      const Eu = Ou[uu];
      if (void 0 === Eu) throw new Error(`${uu} is not a shader pack hook function id`);
      return Eu
    }

    function Du(uu) {
      const Eu = su.b.length;
      return {
        strict: uu >= Eu,
        program: su.b[uu % Eu]
      }
    }

    function gu(uu) {
      return Number(uu.strict) * su.b.length + su.b.indexOf(uu.program)
    }

    function Mu(uu) {
      return "" === uu ? [] : uu.split(" ")
    }

    function eu(uu) {
      const Eu = {
        variantFlags: new Uint8Array(Uu),
        hooks: new Uint8Array(Uu * Zu),
        moduleCodes: Array(Uu).fill(""),
        reads: Array(2 * Uu).fill("")
      };
      for (const ju of uu) {
        const uu = gu(ju.key),
          su = (uu, Eu) => null === ju.hooks.surface || ju.reads.fragment.includes(uu) ? 0 : Eu;
        Eu.variantFlags[uu] = (ju.sceneDepth ? Xu : 0) | (ju.movesVertices ? lu : 0) | (ju.sunShadow ? qu : 0) | (ju.airShadow ? fu : 0) | (ju.discards ? Cu : 0) | su("localPosition", bu) | su("enchantSpeed", cu) | su("enchantTier", Nu), Eu.hooks[uu * Zu] = Yu(ju.hooks.vertex), Eu.hooks[uu * Zu + 1] = Yu(ju.hooks.surface), Eu.hooks[uu * Zu + 2] = Yu(ju.hooks.light), Eu.moduleCodes[uu] = ju.moduleCode, Eu.reads[2 * uu] = ju.reads.vertex.join(" "), Eu.reads[2 * uu + 1] = ju.reads.fragment.join(" ")
      }
      return Eu
    }

    function Gu(uu) {
      const {
        hooks: Eu,
        moduleCodes: ju,
        reads: su
      } = uu;
      return Array.from(uu.variantFlags, ((uu, Uu) => {
        const bu = Uu * Zu;
        return {
          key: Du(Uu),
          hooks: {
            vertex: hu(Eu[bu]),
            surface: hu(Eu[bu + 1]),
            light: hu(Eu[bu + 2])
          },
          moduleCode: ju[Uu],
          sceneDepth: 0 !== (uu & Xu),
          sunShadow: 0 !== (uu & qu),
          airShadow: 0 !== (uu & fu),
          movesVertices: 0 !== (uu & lu),
          discards: 0 !== (uu & Cu),
          reads: {
            vertex: Mu(su[2 * Uu]),
            fragment: Mu(su[2 * Uu + 1])
          }
        }
      }))
    }
  },
  40952: (uu, Eu, ju) => {
    ju.d(Eu, {
      D: () => Ou,
      b: () => Uu,
      f: () => su,
      g: () => cu,
      i: () => Cu,
      k: () => hu,
      n: () => Zu,
      o: () => lu,
      q: () => qu,
      t: () => Xu,
      w: () => Yu,
      z: () => Nu
    });
    const su = 3,
      Uu = 0,
      Zu = 1,
      Xu = 2,
      lu = {
        uniform: 3,
        ac: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      qu = 10,
      fu = "BloxdPackInputs",
      Cu = "bloxdPackInputs",
      bu = [{
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
      cu = 80;

    function Nu() {
      const uu = bu.map((uu => {
        let {
          name: Eu,
          type: ju
        } = uu;
        return `    ${Eu}: ${ju},\n`
      })).join("");
      return `struct ${fu} {\n${uu}}\n@group(${su}) @binding(${Uu}) var<uniform> ${Cu}: ${fu};\n`
    }

    function Ou(uu, Eu) {
      const ju = new DataView(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, cu),
        [su, Uu, Zu, Xu, lu, qu] = bu;
      ju.setFloat32(su.offset, Eu.seconds, !0), ju.setUint32(Uu.offset, Eu.lit ? 1 : 0, !0);
      for (let fu = 0; fu < 3; fu++) ju.setInt32(Zu.offset + 4 * fu, Eu.renderOffset[fu], !0), ju.setFloat32(Xu.offset + 4 * fu, Eu.fuu[fu], !0), ju.setFloat32(lu.offset + 4 * fu, Eu.eyePosition[fu], !0), ju.setFloat32(qu.offset + 4 * fu, Eu.shadowDirection[fu], !0)
    }

    function Yu(uu) {
      const Eu = new Uint32Array(Math.max(1, uu.length));
      return uu.forEach(((uu, ju) => {
        let {
          id: su,
          rotation: Uu
        } = uu;
        Eu[ju] = 65535 & su | (3 & Uu) << 16
      })), Eu
    }
    const hu = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6840: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      f: () => Xu,
      i: () => lu,
      j: () => Uu,
      l: () => Zu
    });
    const su = ["terrain", "liquid", "model"];

    function Uu() {
      const uu = [];
      for (const Eu of [!1, !0])
        for (const ju of su) uu.push({
          strict: Eu,
          program: ju
        });
      return uu
    }

    function Zu(uu) {
      return `${uu.strict?"strict":"allow"}.${uu.program}`
    }

    function Xu(uu) {
      return !uu.hooks.vertex && !uu.hooks.surface && !uu.hooks.light
    }

    function lu(uu, Eu) {
      return "off" !== Eu && (null === uu || uu.some((uu => uu.key.strict === ("strict" === Eu) && !Xu(uu))))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);