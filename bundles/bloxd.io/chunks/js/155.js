export const id = 155;
export const ids = [155];
export const modules = {
  34712: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      e: () => Ke
    });
    var ye = He(260),
      be = He(123),
      Me = He(34717);

    function Ke() {
      var ee, ie, He;
      return null !== (ee = (0, ye.j)(null !== (ie = null === (He = (0, be.p)()) || void 0 === He ? void 0 : He.renderer) && void 0 !== ie ? ie : null, (0, be.n)())) && void 0 !== ee ? ee : "unknown"
    }

    function Ue(ee, ie, He, ye, be) {
      const Ke = null === ie ? "untimed" : `${Math.round(ie)} ms`;
      return `frames stalled, ${He}, gpu ${(0,Me.d)(be)}, blocking ${Ke}, drawn ${Math.round(ee)} ms apart, timers ${ye.timers}, timer gap ${Math.round(ye.longestGapMs)} ms`
    }
  },
  34717: (ee, ie, He) => {
    function ye(ee) {
      return String(ee).replace(/\d/g, (ee => String.fromCharCode(97 + Number(ee))))
    }
    He.d(ie, {
      d: () => ye
    })
  },
  41743: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      d: () => oe,
      g: () => Ke,
      i: () => be,
      j: () => Ue,
      k: () => Je
    });
    class ye extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function be(ee) {
      return ee instanceof RangeError && /call stack/i.test(ee.message) || ee instanceof Error && "InternalError" === ee.name && /recursion/i.test(ee.message)
    }
    const Me = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Ke(ee) {
      var ie;
      return ee instanceof WebAssembly.RuntimeError || ee instanceof ye || be(ee) && Me.test(null !== (ie = ee.stack) && void 0 !== ie ? ie : "")
    }

    function Ue(ee, ie) {
      if (Ke(ee)) throw ee;
      console.error(ie, ee)
    }

    function Fe(ee, ie, He, be, Me) {
      if (ie % be !== 0 || ie + He > ee.byteLength) throw new ye(`${Me}: ${He} bytes at ${ie}, ${be}-aligned, outside ${ee.byteLength} bytes of memory`)
    }

    function Je(ee, ie, He, ye, be) {
      return 0 === He ? null : (Fe(ie, He, ye * ee.BYTES_PER_ELEMENT, ee.BYTES_PER_ELEMENT, be), new ee(ie, He, ye))
    }

    function oe(ee, ie, He, ye, be) {
      return 0 === ie ? null : (Fe(ee, ie, He, ye, be), new DataView(ee, ie, He))
    }
  },
  41827: (ee, ie, He) => {
    He.d(ie, {
      C: () => ii,
      G: () => he,
      J: () => Mi,
      K: () => bi,
      L: () => Hi,
      P: () => Ui,
      Q: () => Ei,
      R: () => Ki,
      U: () => yi,
      V: () => Fi,
      W: () => Ve,
      Y: () => ki,
      ab: () => Ti,
      b: () => Ae,
      cb: () => ae,
      d: () => gi,
      db: () => ce,
      g: () => ti,
      k: () => fi,
      o: () => Bi,
      p: () => Ri,
      s: () => zi,
      t: () => Xi,
      u: () => Wi,
      y: () => Qe
    });
    var ye = He(335),
      be = He(253),
      Me = He(260),
      Ke = He(18),
      Ue = He(3037),
      Fe = He(677),
      Je = He(4899),
      oe = He(2996),
      Re = He(3808),
      ke = He(97),
      qe = He(125),
      fe = He(330),
      Te = He(35),
      pe = He(325),
      Xe = He(115),
      ze = He(643),
      Be = He(123),
      Ee = He(120),
      ge = He(5279),
      Oe = He(41834),
      de = He(1851),
      We = He(41836),
      te = He(41841),
      Ze = He(34815),
      we = He(41844),
      De = He(41846);
    const Pe = "bloxd-webgpuOffAfterLoss",
      Ae = "context:webgl",
      Ye = "probe:threw";

    function Ve(ee) {
      return ee.includes("Web page caused context loss and was blocked")
    }

    function ae() {
      const ee = document.createElement("canvas");
      let ie = "";
      ee.addEventListener("webglcontextcreationerror", (ee => {
        ie = ee.statusMessage
      }));
      try {
        var He, ye;
        null === (He = ee.getContext("webgl")) || void 0 === He || null === (ye = He.getExtension("WEBGL_lose_context")) || void 0 === ye || ye.loseContext()
      } catch (be) {
        return String(be)
      }
      return ie
    }

    function ce(ee) {
      let ie;
      try {
        ie = ee.getContext("webgl", {
          powerPreference: Be.e
        })
      } catch {
        ie = null
      }
      if (null === ie) return null;
      let He = null;
      try {
        const ee = ie.getParameter(ie.MAX_TEXTURE_SIZE);
        He = "number" === typeof ee && ee > 0 ? ee : null
      } catch {
        He = null
      }
      try {
        var ye;
        null === (ye = ie.getExtension("WEBGL_lose_context")) || void 0 === ye || ye.loseContext()
      } catch {}
      return He
    }
    const xe = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function Le() {
      return "ios" === (0, ke.getOperatingSystem)() ? "ios" : "other"
    }
    const Ce = "mali_valhall",
      ve = new Set(["nvidia_pre_turing"]),
      ue = new Set(["intel_gen7_8"]),
      me = new Set(["powervr_rogue"]);

    function le(ee, ie, He) {
      return xe.has(ee) ? "android_arm" === ee && ie === Ce && "mobileAndroid" !== He ? "webgpu_default" : "webgl_default" : null
    }

    function Se(ee) {
      return function(ee) {
        try {
          return ee()
        } catch {
          return null
        }
      }((() => {
        var ie, He, ye, Ke;
        const Ue = null !== (ie = null === (He = ee.info) || void 0 === He ? void 0 : He.vendor) && void 0 !== ie ? ie : "";
        return "windows" === (0, ke.getOperatingSystem)() && "" !== Ue && "intel" !== (0, ke.normaliseGpuVendor)(Ue) ? null : ((0, ke.seedGpuVendor)(Ue), le((0, be.h)(), (0, Me.e)(Ue, null !== (ye = null === (Ke = ee.info) || void 0 === Ke ? void 0 : Ke.architecture) && void 0 !== ye ? ye : ""), qe.siteUsed))
      }))
    }

    function ne() {
      var ee;
      return {
        gpu: null !== (ee = navigator.gpu) && void 0 !== ee ? ee : null,
        webgl2: we.e,
        webgl1: () => function(ee) {
          let ie, He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oe.e;
          try {
            ie = ee.getContext("webgl")
          } catch {
            ie = null
          }
          if (null === ie) return [Ae];
          const ye = [];
          try {
            for (const be of He.extensions) null === ie.getExtension(be) && ye.push(be);
            for (const [be, Me] of Object.entries(He.limits)) {
              const ee = ie[be],
                He = "number" === typeof ee ? ie.getParameter(ee) : null;
              ("number" !== typeof He || He < Me) && ye.push(`limit:${be}`)
            }
            const ee = ie.getShaderPrecisionFormat(ie.VERTEX_SHADER, ie.HIGH_FLOAT);
            (null === ee || ee.precision < He.vertexHighFloatBits) && ye.push("precision:vertex_high_float")
          } catch {
            ye.push(Ye)
          }
          try {
            var be;
            null === (be = ie.getExtension("WEBGL_lose_context")) || void 0 === be || be.loseContext()
          } catch {}
          return ye
        }(document.createElement("canvas")),
        webgl1First: () => se((() => function(ee, ie) {
          if ("chrome_os" !== ee) return !1;
          const He = ie();
          return null !== He && me.has((0, Me.i)(He.vendor, He.renderer))
        }((0, ke.getOperatingSystem)(), Be.G))),
        offAfterLoss: ee => se((() => ee ? (0, pe.H)() : Ke.e.isWebGpuOffAfterLoss())),
        oldIntelDriver: ee => se((() => (0, Xe.e)(ee))),
        intelGen9: ee => se((() => (0, Xe.m)(ee))),
        storeIntelGen9Verdict: ee => {
          Te.i.setItem(Xe.E, ee)
        },
        gpuClassWebGlArm: Se,
        storeGpuClassVerdict: ee => {
          Te.i.setItem(Xe.D, ee)
        },
        gpuClassOnWebGl: ee => (0, ze.d)(ee),
        webGlDefaultFamily: ee => ue.has((0, Me.e)(ee.vendor, ee.architecture)),
        storeWebGlDefaultFamilyVerdict: ee => {
          Te.i.setItem(Xe.N, ee)
        },
        override: () => je(),
        claimed: () => Ie((0, Fe.l)()),
        webGpuSetting: () => {
          const ee = Te.i.getItem(ye.nc);
          return "boolean" === typeof ee ? ee : null
        },
        heldBack: () => ze.g,
        storeHoldbackSpared: ee => {
          Te.i.setItem(Xe.B, ee)
        },
        intelGen9OnWebGl: () => ze.i,
        Zf: () => se((() => (0, Re.f)(ke.featureFlags.settings.canUseShaderPacks))),
        windows: () => se((() => "windows" === (0, ke.getOperatingSystem)())),
        defaultCompatibility: Ze.c
      }
    }

    function je() {
      let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, Ue.q)("render") && "webgl1" === (0, Ue.n)("renderer")) return "webgl1";
      const ie = [() => new URLSearchParams(window.location.search).get(oe.e), () => Te.i.getItem(oe.h), () => {
        const ie = localStorage.getItem(Pe);
        return null !== ie && ee && localStorage.removeItem(Pe), "1" === ie ? "webgl2" : null
      }];
      for (const He of ie) {
        let ee = null;
        try {
          ee = Ie(He())
        } catch {}
        if (null !== ee) return ee
      }
      return null
    }

    function se(ee) {
      try {
        return ee()
      } catch {
        return !1
      }
    }

    function Ie(ee) {
      return "lite" === ee ? "webgpu" : "webgl2" === ee || "babylon" === ee ? "webgl" : null
    }

    function he(ee) {
      return "none" === ee || "compatibility_mode" === ee
    }
    async function Ne() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne();
      const ie = await async function(ee) {
        const ie = re(ee),
          {
            source: He
          } = ie,
          ye = !ie.asked,
          be = "gpu" in ie && ie.heldBack,
          Ke = function(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return be && !he(ee) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: He
            } : {
              reason: ee,
              adapter: ie,
              source: He
            }
          };
        if (!("gpu" in ie)) return Ke(ie.refused);
        let Ue;
        try {
          Ue = await (0, de.k)((0, Ee.q)(ie.gpu, {
            compatibility: Ge(ee, ie)
          }), Oi, `requestAdapter didn't settle in ${Oi/1e3} s`)
        } catch {
          return Ke("adapter_error")
        }
        if ("string" === typeof Ue) return Ke(Ue);
        const {
          adapter: Fe,
          compatibility: Je
        } = Ue, oe = (0, Ee.e)(Fe);
        if ((0, Ee.l)(Fe)) return Ke("software_adapter", oe);
        const Re = ee.windows() && function(ee) {
          return ve.has((0, Me.e)(ee.vendor, ee.architecture))
        }(oe);
        if (ee.storeHoldbackSpared(Re), be && !Re) return Ke("webgl_holdback");
        const ke = ee.intelGen9(Fe);
        ee.storeIntelGen9Verdict(ke);
        const qe = ke ? null : ee.gpuClassWebGlArm(Fe);
        ee.storeGpuClassVerdict(null !== qe && void 0 !== qe && qe);
        const fe = ee.webGlDefaultFamily(oe);
        if (ee.storeWebGlDefaultFamilyVerdict(fe), ye && ee.oldIntelDriver(Fe)) return Ke("old_intel_driver", oe);
        if ("default" === He && ke && ee.intelGen9OnWebGl()) return Ke("intel_gen9", oe);
        if ("default" === He && null !== qe && ee.gpuClassOnWebGl(qe)) return Ke("gpu_class_webgl", oe);
        if ("default" === He && fe) return Ke("gpu_wasm_arm", oe);
        return Ke(Je ? "compatibility_mode" : "none", oe)
      }(ee);
      if (he(ie.reason)) return {
        backend: "webgpu",
        ...ie
      };
      const He = "webgl1" === ee.override(),
        ye = "not_requested" === ie.reason && ("override" === ie.source || "claim" === ie.source),
        be = !He && !ye && ee.webgl1First();
      if (!He && !be && ee.webgl2()) return {
        backend: "webgl",
        ...ie
      };
      const Ke = ee.webgl1();
      return 0 === Ke.length ? {
        backend: "webgl1",
        ...ie
      } : be && ee.webgl2() ? {
        backend: "webgl",
        ...ie
      } : {
        missing: Ke
      }
    }

    function Ge(ee, ie) {
      let {
        source: He,
        asked: ye
      } = ie;
      return ye || "default" === He ? (0, Ze.e)(ye, ee.defaultCompatibility) : void 0
    }

    function re(ee) {
      const ie = ee.override(),
        He = ee.webGpuSetting(),
        ye = null === ie && !0 !== He && ee.Zf(),
        be = null !== ie || null !== He || ye ? null : ee.claimed(),
        Me = null !== ie ? "override" : !0 === He ? "setting" : ye ? "pack" : !1 === He ? "setting" : null !== be ? "claim" : "default",
        Ke = function(ee) {
          return "override" === ee || "setting" === ee
        }(Me);
      if ("webgl" === ie || "webgl1" === ie || "webgl" === be || "setting" === Me && !1 === He) return {
        source: Me,
        asked: Ke,
        refused: "not_requested"
      };
      if (!ee.gpu) return {
        source: Me,
        asked: Ke,
        refused: "no_webgpu_api"
      };
      const Ue = "default" === Me && ee.heldBack();
      return Ue && !ee.windows() ? {
        source: Me,
        asked: Ke,
        refused: "webgl_holdback"
      } : !Ke && ee.offAfterLoss("pack" === Me) ? {
        source: Me,
        asked: Ke,
        refused: Ue ? "webgl_holdback" : "off_after_loss"
      } : {
        source: Me,
        asked: Ke,
        heldBack: Ue,
        gpu: ee.gpu
      }
    }

    function Qe() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...ne(),
          override: () => je(!1)
        },
        ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ke.isWebKit,
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Le;
      try {
        if (!ie()) return !1;
        const ye = re(ee);
        if (!("gpu" in ye) || ye.heldBack) return !1;
        const be = "default" === ye.source ? le(He(), "apple", qe.siteUsed) : null;
        return null === be || !ee.gpuClassOnWebGl(be)
      } catch (ye) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", ye), !1
      }
    }
    let ei = !1;
    async function ii(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ne();
      if (null === ee) return null;
      const He = await Ne(ie);
      return ei = !("missing" in He) && "webgpu" === He.backend && "claim" === He.source, "missing" in He ? He : {
        ...He,
        load: ee[He.backend]
      }
    }
    async function Hi(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ne().gpu,
        ye = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== ee.backend) return !1;
      const be = oi(ee, ie, "indirectDraws", "off", "on");
      if (null !== be) return be;
      if (null !== ee.adapter && (0, Xe.q)(ee.adapter, ye)) return !0;
      if (null === He) return !1;
      try {
        var Me;
        const ee = await (0, de.k)(He.requestAdapter({
          powerPreference: "low-power"
        }).then((async ee => (null !== ee && await (0, Ee.h)(ee), ee))), Oi, `the low-power requestAdapter didn't settle in ${Oi/1e3} s`);
        return (0, Xe.q)(null !== (Me = null === ee || void 0 === ee ? void 0 : ee.info) && void 0 !== Me ? Me : {}, ye)
      } catch (Ke) {
        return Ke instanceof de.f
      }
    }

    function yi(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, ke.pageOperatingSystem)();
      if ("webgpu" !== ee.backend) return !1;
      const be = oi(ee, ie, "terrainFetch", "texture", "storage");
      return null !== be ? be : null !== ee.adapter && ((0, Xe.i)(ee.adapter, He) || (0, Xe.f)(ee.adapter, ye))
    }

    function bi(ee, ie) {
      if ("webgpu" !== ee.backend) return !1;
      const He = oi(ee, ie, "skyOrder", "early", "last");
      return null !== He ? He : null !== ee.adapter && (0, Me.e)(ee.adapter.vendor, ee.adapter.architecture) === Ce
    }

    function Mi(ee, ie) {
      if ("webgpu" !== ee.backend) return !1;
      const He = oi(ee, ie, "uploadCopies", "off", "on");
      return null !== He ? He : null !== ee.adapter && "powervr_rogue" === (0, Me.e)(ee.adapter.vendor, ee.adapter.architecture)
    }

    function Ki(ee, ie, He) {
      if ("webgpu" !== ee.backend) return !1;
      const ye = oi(ee, ie, "sceneDepth", "off", "on");
      return null !== ye ? ye : null !== ee.adapter && (0, Xe.l)(ee.adapter, He)
    }

    function Ui(ee, ie) {
      return "webgl" === ee.backend ? oi(ee, ie, "instancedTerrain", "1", "0") : null
    }

    function Fi(ee, ie) {
      return "webgpu" !== ee.backend || ie && (null === ee.adapter || !(0, pe.J)(ee.adapter))
    }

    function Ji(ee, ie, He, ye) {
      const be = new URLSearchParams(ie).get(He),
        Me = null !== be && void 0 !== be ? be : null === ee ? null : (0, Fe.f)(He);
      return null !== Me && ye(Me) ? (ei ||= null === be && "webgpu" === (null === ee || void 0 === ee ? void 0 : ee.backend), Me) : null
    }

    function oi(ee, ie, He, ye, be) {
      const Me = Ji(ee, ie, He, (ee => ee === ye || ee === be));
      return null === Me ? null : Me === ye
    }

    function Ri(ee) {
      return null !== ee && "missing" in ee
    }

    function ki(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Ti(),
        He = arguments.length > 2 ? arguments[2] : void 0;
      return ie ? function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke.e,
          He = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const ye = "start_failed" === ee || "pipeline_failed" === ee,
            be = (0, De.g)(ee, He),
            Me = ie.turnOffWebGpuAfterDeviceLoss(ye ? "visible" : (0, pe.n)((0, fe.h)()), ye, be);
          return ei && (0, Fe.s)("webgpuLoss"), ie.isWebGpuOffAfterLoss() && "webgpu" === Ie(Te.i.getItem(oe.h)) && Te.i.removeItem(oe.h), (0, Ue.q)("webgpuloss") && (0, Je.d)((ie => {
            var He;
            ie.noteWebGpuLoss("wasm", Me ? ee : `${ee}, which storage didn't keep`, null !== (He = be.message) && void 0 !== He ? He : null)
          })), Me
        } catch {
          return !1
        }
      }(ee, Ke.e, He) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const qi = "framePacing";

    function fi(ee, ie) {
      const He = Ji("webgpu" === (null === ie || void 0 === ie ? void 0 : ie.backend) ? ie : null, ee, qi, (ee => /^\d{1,9}$/.test(ee)));
      return null === He ? void 0 : Number(He)
    }

    function Ti() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === Ie(new URLSearchParams(ee).get(oe.e))
      } catch {
        return !1
      }
    }

    function Xi(ee) {
      return !!zi(ee) || ee instanceof Error && !(ee instanceof WebAssembly.RuntimeError) && ee.message.startsWith(`${ge.o.RenderSurfaceUnusable}:`)
    }

    function zi(ee) {
      const {
        name: ie,
        message: He
      } = null !== ee && void 0 !== ee ? ee : {};
      return "InvalidStateError" === ie && "string" === typeof He && He.startsWith("GPUDevice.")
    }

    function Bi(ee) {
      const ie = ee;
      return "function" === typeof ie.mbe && "function" === typeof ie.lbe ? ie : null
    }

    function Ei(ee) {
      return "function" === typeof ee.MX ? ee : null
    }
    const gi = "openRenderer";
    const Oi = 5e3,
      di = 15e3;

    function Wi(ee, ie, He, ye, be, Me) {
      return (0, de.k)(function(ee, ie, He, ye, be, Me) {
        const Ke = (0, We.f)(ee, ie, (() => ee.MX(He, ye, be, Me.indirectHangs, Me.storagePullBreaks, Me.splitPassBreaks, Me.earlySky, Me.instancedTerrain, Me.cellLight, Me.framesAhead, Me.webGpuRestores, Me.bufferCopiesCrash))),
          {
            firstVertex: Ue
          } = Me;
        return void 0 === Ue ? Ke : Ke.then((ee => ((0, te.e)(He, Ue), ee)))
      }(ee, ie, He, ye, be, Me), di, `${ge.o.RenderSurfaceUnusable}: the renderer didn't open in ${di/1e3} s`, Zi)
    }
    async function ti(ee, ie, He, ye, be, Me) {
      if ("function" !== typeof ee.hUe) throw new Error("this core has no set_renderer");
      const Ke = await Wi(ie, gi, He, be, ye, Me);
      try {
        ee.hUe(Ke)
      } catch (Ue) {
        throw Zi(Ke), Ue
      }
    }

    function Zi(ee) {
      try {
        ee.free()
      } catch {}
    }
  },
  41941: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    const ye = {
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
  41870: (ee, ie, He) => {
    He.d(ie, {
      b: () => fe,
      c: () => Te,
      f: () => ke,
      i: () => Re
    });
    const ye = 2e3,
      be = "unavailable";
    let Me = () => Promise.resolve().then((() => He(1817))),
      Ke = null,
      Ue = null,
      Fe = Je();

    function Je() {
      let ee = () => {};
      return {
        promise: new Promise((ie => {
          ee = () => {
            ie(null)
          }
        })),
        resolve: ee
      }
    }

    function oe() {
      if (null === Ke) {
        const ee = Me();
        Ke = ee, ee.then((ie => {
          Ke === ee && (Ue = ie)
        }), (() => {
          Ke === ee && (Ke = null)
        }))
      }
      return Ke
    }

    function Re() {
      oe().catch((() => {}))
    }

    function ke() {
      Fe.resolve()
    }

    function qe(ee, ie, He, ye) {
      if (null === ee) return {
        errorKind: ie,
        fingerprint: be,
        dedupe: `${ie}|${ye}`
      };
      const {
        fingerprint: Me
      } = ee.clientErrorKey(ie, He, ye);
      return {
        errorKind: ie,
        fingerprint: Me,
        dedupe: Me
      }
    }

    function fe(ee, ie, He, ye) {
      return null === Ue ? ye ? (Re(), qe(null, ee, ie, He)) : null : qe(Ue, ee, ie, He)
    }
    async function Te(ee, ie, He) {
      let be;
      const Me = new Promise((ee => {
        be = setTimeout((() => {
          ee(null)
        }), ye)
      }));
      try {
        return qe(await Promise.race([oe(), Me, Fe.promise]), ee, ie, He)
      } catch {
        return qe(null, ee, ie, He)
      } finally {
        clearTimeout(be)
      }
    }
  },
  41864: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      BUILT_IN_ANIMATIONS_SITE: () => ei,
      CAMERA_DIRECTOR_SITE: () => Ki,
      CORE_ERRORS_SITE: () => Se,
      EVENT_OVERFLOW_SITE: () => Qe,
      FIRST_VIEW_SITE: () => yi,
      GraphicsLostError: () => MH,
      JOIN_SITE: () => je,
      LEAVE_SITE: () => se,
      MAIN_THREAD_SITE: () => bi,
      MODEL_FEED_SITE: () => Ie,
      MODEL_POOL_SITE: () => he,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Ji,
      NON_FATAL_REPORTS_PER_SESSION: () => Di,
      PREVIEW_ANIMATIONS_SITE: () => re,
      RENDER_RELOAD_SITE: () => Ge,
      REQUEST_DEVICE_SITE: () => Mi,
      TEXTURE_NAMES_SITE: () => Ne,
      TEXTURE_PACK_FEED_SITE: () => ii,
      TEXTURE_PACK_SWAP_SITE: () => Hi,
      TurnstilePageError: () => pH,
      WASM_LOAD_SITE: () => ne,
      countRenderLost: () => QH,
      crashError: () => ci,
      crashReportsSettled: () => ji,
      deviceLossFields: () => ri,
      deviceLossWords: () => hH,
      flushCrashReports: () => Si,
      joinFailureCode: () => XH,
      loadRecoveryCode: () => oH,
      lokiTransport: () => ki,
      modelFailureCode: () => WH,
      readTrap: () => iH,
      renderLoss: () => rH,
      renderReloadMessage: () => NH,
      reportCameraDirectorFault: () => nH,
      reportCoreErrors: () => Ni,
      reportCrash: () => xi,
      reportDataLoadFailure: () => My,
      reportDisconnect: () => OH,
      reportDroppedRequiredLimits: () => kH,
      reportEventOverflow: () => YH,
      reportFirstViewNoTerrain: () => vH,
      reportFirstViewUnshown: () => uH,
      reportLightFault: () => cH,
      reportLoadRecovery: () => RH,
      reportLoadReload: () => fH,
      reportMainStall: () => mH,
      reportMemoryShed: () => LH,
      reportModelFailure: () => tH,
      reportModelPoolFailure: () => ZH,
      reportModelsModuleRetry: () => wH,
      reportNoBackendRetry: () => FH,
      reportPageJoinFailure: () => BH,
      reportReconnectGaveUp: () => dH,
      reportRenderRecovery: () => ui,
      reportRenderReload: () => Hy,
      reportReplayFault: () => SH,
      reportStaleBuildReload: () => Uy,
      reportStoppedCore: () => yH,
      reportTerrainTextureFailure: () => yy,
      reportTexturePackFeedLoadFailure: () => PH,
      reportTexturePackKeptOut: () => AH,
      reportUnstreamedCoreLoad: () => TH,
      reportUnusedSeat: () => gH,
      reportWorkerLost: () => VH,
      reportWorkerStartTimeout: () => lH,
      reportWorldgenGaveUp: () => xH,
      reportWorldgenLoadFailure: () => DH,
      reportWorldgenWorkerLost: () => aH,
      resetCrashReports: () => si,
      setCrashAdPreload: () => Oi,
      setCrashBackend: () => gi,
      setCrashScreen: () => zi,
      setCrashTransport: () => Ti,
      showCrash: () => HH,
      showJoinFailure: () => zH,
      showUnsupported: () => KH,
      unknownSkyWords: () => Ii,
      unsupportedCrashScreen: () => UH,
      warmCrashCounts: () => Ci
    });
    var ye = He(1033),
      be = He(1315),
      Me = He(173),
      Ke = He(1305),
      Ue = He(1268),
      Fe = He(260),
      Je = He(1826),
      oe = He(4673),
      Re = He(41870),
      ke = He(5271),
      qe = He(41878),
      fe = He(34717),
      Te = He(3228),
      pe = He(34712),
      Xe = He(39553),
      ze = He(125),
      Be = He(123),
      Ee = He(3236),
      ge = He(37286),
      Oe = He(1851),
      de = He(41887),
      We = He(41910),
      te = He(41704),
      Ze = He(41782),
      we = He(41789),
      De = He(37281),
      Pe = He(3094),
      Ae = He(3101),
      Ye = He(41920),
      Ve = He(41915),
      ae = He(41936),
      ce = He(37669),
      xe = He(645),
      Le = He(3550),
      Ce = He(36950),
      ve = He(41836),
      ue = He(36965),
      me = He(41948);
    const le = "[bloxd-wasm-client]",
      Se = "coreErrors",
      ne = "wasmLoad",
      je = "join",
      se = "leave",
      Ie = "modelFeed",
      he = "modelWorkerPool",
      Ne = "textureNames",
      Ge = "renderReload",
      re = "previewAnimations",
      Qe = "eventOverflow",
      ei = "builtInAnimations",
      ii = "texturePackFeed",
      Hi = "texturePackSwap",
      yi = "firstView",
      bi = "mainThread",
      Mi = "requestDevice",
      Ki = "cameraDirector",
      Ui = 300,
      Fi = 64,
      Ji = 8;
    let oi = 0;
    const Ri = new Set,
      ki = (ee, ie) => {
        const He = di[ee.kind],
          ye = {
            backend: Bi,
            adPreload: Ei
          };
        if (null === He) return void qi(ee, ie, ye, null);
        const be = (0, Re.b)(He, ee.message, ee.code, ee.fatal);
        null === be ? li("Loki", (async () => {
          qi(ee, ie, ye, await (0, Re.c)(He, ee.message, ee.code))
        })) : qi(ee, ie, ye, be)
      };

    function qi(ee, ie, He, ye) {
      let {
        backend: be,
        adPreload: Me
      } = He;
      const {
        kind: Ke,
        code: Fe,
        site: oe,
        fatal: Re,
        details: ke
      } = ee;
      if (!Re)
        if (null === ye || (0, Je.c)(ye.errorKind) || Ri.has(ye.dedupe)) {
          if (oi >= Ji) return;
          oi++
        } else Ri.add(ye.dedupe);
      const qe = {
        ...ke,
        kind: Ke,
        code: Fe,
        site: oe,
        fatal: String(Re),
        backend: be
      };
      Me && (qe.adPreload = "true"), null !== ye && (qe.errorKind = ye.errorKind, qe.fingerprint = ye.fingerprint), ie instanceof Error && "string" === typeof ie.stack && (qe.causeStack = ie.stack.slice(0, 2e3)), (0, Ue.vT)(ci(ee, ie), qe)
    }
    let fi = ki;

    function Ti(ee) {
      const ie = fi;
      return fi = ee, ie
    }
    let Xi = () => {};

    function zi(ee) {
      const ie = Xi;
      return Xi = ee, ie
    }
    let Bi = "unpicked",
      Ei = !1;

    function gi(ee) {
      Bi = ee
    }

    function Oi(ee) {
      Ei = ee
    }
    const di = {
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
      Wi = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        viewUnshown: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      ti = new Set(["unstreamedLoad"]),
      Zi = new Set(["linkCensus", "linksReadAfterView"]);
    let wi = !1;
    const Di = 20,
      Pi = new Map;
    let Ai = 0,
      Yi = 0;
    const Vi = new Set,
      ai = new Set;

    function ci(ee, ie) {
      const He = Object.assign(new Error(`${ee.code}: ${ee.message}`), {
        name: "WasmClientCrash",
        cause: null !== ie && void 0 !== ie ? ie : void 0
      });
      return ie instanceof Error && ie.stack && (He.stack = ie.stack), He
    }

    function xi(ee) {
      var ie, ye;
      const {
        kind: be,
        code: Me,
        site: Ke,
        fatal: Ue,
        message: Fe,
        error: Je
      } = ee, oe = !1 !== ee.toTransport && !ti.has(be), Re = !Ue && oe && !Zi.has(be), ke = {
        kind: be,
        code: Me,
        site: Ke,
        fatal: Ue,
        message: Fe,
        details: null !== (ie = ee.details) && void 0 !== ie ? ie : {}
      }, qe = `${Me}@${Ke}${void 0===ee.instance?"":`#${ee.instance}`}${Ue?"!":""}`, fe = (null !== (ye = Pi.get(qe)) && void 0 !== ye ? ye : 0) + 1;
      if (Pi.set(qe, fe), void 0 !== ee.countAs && 1 === fe && vi(ee.countAs), fe > 1 ? 0 === (fe & fe - 1) && mi((() => {
          console.warn(`${le} ${Me} at ${Ke} reported ${fe} times`)
        })) : Re && Ai >= Di ? mi((() => {
          console.warn(`${le} ${be} ${Me} at ${Ke}: ${Fe} (not sent: the session's ${Di} went)`, ke.details, null !== Je && void 0 !== Je ? Je : "")
        })) : (Re && Ai++, function(ee, ie, ye, be) {
          var Me, Ke;
          const {
            kind: Ue,
            code: Fe,
            site: Je,
            fatal: oe,
            message: Re,
            details: ke
          } = ee;
          mi((() => {
            (oe ? console.error : console.warn)(`${le} ${Ue} ${Fe} at ${Je}: ${Re}`, ke, null !== ie && void 0 !== ie ? ie : "")
          }));
          const qe = Wi[Ue],
            fe = null !== (Me = null !== (Ke = di[Ue]) && void 0 !== Ke ? Ke : qe) && void 0 !== Me ? Me : null;
          be || null === fe || Li((async () => {
            const {
              reportCappedWasmFailure: ie,
              reportUncappedWasmFailure: ye,
              reportWasmFailure: be
            } = await He.e(212).then((() => He(34708))), Me = Zi.has(Ue) ? ye : void 0 === qe ? be : ie, Ke = function(ee) {
              let {
                kind: ie,
                site: He,
                fatal: ye,
                details: be
              } = ee;
              if ("crash" !== ie) return;
              return {
                ...be,
                site: He,
                fatal: String(ye)
              }
            }(ee);
            void 0 === Ke ? Me(fe, Re, Fe) : Me(fe, Re, Fe, Ke)
          }));
          ye && mi((() => {
            fi(ee, ie)
          }))
        }(ke, Je, oe, void 0 !== ee.countAs)), Ue) {
        var Te;
        const ie = null !== (Te = ee.screen) && void 0 !== Te ? Te : {
          text: (0, ce.g)(ke, !0),
          reload: !0,
          stillBlocked: null
        };
        mi((() => {
          Xi(ie)
        }))
      }
      return ke
    }

    function Li(ee) {
      li("counts", (async () => {
        const {
          peekVisitSessionId: ie
        } = await Promise.resolve().then((() => He(660)));
        null !== ie() && (await ee(), wi = !0)
      }))
    }

    function Ci() {
      Promise.all([Promise.resolve().then((() => He(660))), He.e(212).then((() => He(34708)))]).catch((ee => {
        console.warn(`${le} the counts' modules didn't load ahead`, ee)
      }))
    }

    function vi(ee) {
      Vi.has(ee.errorKind) || (Vi.add(ee.errorKind), Li((async () => {
        const {
          reportClientError: ie
        } = await Promise.resolve().then((() => He(1814)));
        ie(ee.errorKind, ee.error, ee.code, !0, void 0, ee.fields)
      })))
    }

    function ui(ee, ie) {
      li("render_lost", (async () => {
        const [{
          reportClientError: ye
        }, {
          CAPPED_COUNTS_VISIT_CAP: be
        }] = await Promise.all([Promise.resolve().then((() => He(1814))), He.e(212).then((() => He(34708)))]);
        ye("render_lost", ie, ee, !0, be)
      }))
    }

    function mi(ee) {
      try {
        ee()
      } catch (ie) {
        try {
          console.warn(`${le} could not send a report`, ie)
        } catch {}
      }
    }

    function li(ee, ie) {
      try {
        const He = ie().catch((ie => {
          console.warn(`${le} could not send the report to ${ee}`, ie)
        })).finally((() => {
          ai.delete(He)
        }));
        ai.add(He)
      } catch (He) {
        console.warn(`${le} could not send the report to ${ee}`, He)
      }
    }
    async function Si(ee) {
      let ie;
      (0, Re.f)();
      const He = new Promise((He => {
        ie = setTimeout(He, ee)
      }));
      await Promise.race([ni(), He]), clearTimeout(ie)
    }
    async function ni() {
      if (await Promise.allSettled([...ai]), wi) try {
        const {
          flushClientAnalyticsEvents: ee
        } = await Promise.resolve().then((() => He(1488)));
        await ee()
      } catch (ee) {
        console.warn(`${le} could not send the counts`, ee)
      }
    }
    async function ji() {
      for (; ai.size > 0;) await Promise.allSettled([...ai])
    }

    function si() {
      Pi.clear(), Ai = 0, wi = !1, oi = 0, Ri.clear(), Yi = 0, Vi.clear(), (0, qe.t)()
    }

    function Ii(ee) {
      const ie = "object" === typeof ee && null !== ee ? ee.type : ee;
      return "string" !== typeof ie ? "sky not named" : `sky ${JSON.stringify(Array.from(ie).slice(0,Fi).join(""))}`
    }

    function Ni(ee, ie, He, ye) {
      Yi += ie;
      for (const {
          code: Ue,
          detail: Fe
        }
        of ee) {
        var be, Me, Ke;
        const ee = (0, ke.Xd)(Ue),
          ie = (0, qe.d)(Ue, Fe),
          Je = null === ye || void 0 === ye ? void 0 : ye(Ue, Fe),
          oe = void 0 !== (null === ie || void 0 === ie ? void 0 : ie.gpuDetails),
          Re = oe ? null === (be = (0, Be.D)()) || void 0 === be ? void 0 : be.renderer : void 0,
          Te = oe ? ` ${(0,qe.l)()}` : "",
          pe = Array.from([Re && `gpu ${(0,fe.d)(Re)}`, Je].filter(Boolean).join("; ")).slice(0, Ui).join(""),
          Xe = `core error ${ee}${null!==(Me=null===ie||void 0===ie?void 0:ie.words)&&void 0!==Me?Me:""}${Te}${pe?`: ${pe}`:""}`,
          ze = {
            errorCode: String(Ue),
            detail: String(Fe),
            droppedBefore: String(Yi),
            wasmBuild: He.wasm,
            clientVersion: He.client,
            ...null === ie || void 0 === ie ? void 0 : ie.gpuDetails,
            ...ri(Ue, Fe)
          };
        null !== ie && (0, qe.p)(ie) ? mi((() => {
          console.warn(`${le} coreError CORE-${ee}: ${Xe} (not sent: the session's render warnings of its kind went)`, ze)
        })) : Gi(Ue) ? mi((() => {
          console.warn(`${le} coreError CORE-${ee}: ${Xe} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, ze)
        })) : xi({
          kind: eH(Ue, Fe),
          code: `CORE-${ee}`,
          site: Se,
          fatal: !1,
          message: Xe,
          details: ze,
          instance: null !== (Ke = null === ie || void 0 === ie ? void 0 : ie.instance) && void 0 !== Ke ? Ke : Qi(Ue, Fe)
        })
      }
    }

    function Gi(ee) {
      if (ee !== ke.E.AudioUnknownSound && ee !== ke.E.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: ie,
        lobbyName: He
      } = (0, Ke.e)();
      return null !== ie && (!!(0, ye.k)(ie) || ee === ke.E.AudioUnknownSound && (0, be.f)(ie, He))
    }

    function ri(ee, ie) {
      if (ee !== ke.E.RenderDeviceLost) return;
      const He = ie >>> ke.L.LINKS_IN_FLIGHT_SHIFT & ke.L.LINKS_IN_FLIGHT_MAX,
        ye = ie >>> ke.L.OLDEST_LINK_SHIFT & ke.L.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(He),
        oldestLinkMs: String(ye * ke.L.OLDEST_LINK_UNIT_MS)
      }
    }

    function Qi(ee, ie) {
      return ee === ke.E.RenderDeviceLost && 0 !== (ie & ke.L.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function eH(ee, ie) {
      return ee === ke.E.JobsHeapGaveUp ? "meshHeap" : (0, qe.i)(ee, ie) ? "linksReadAfterView" : (0, qe.g)(ee, ie) ? "linkCensus" : "coreError"
    }

    function iH(ee) {
      return (0, Ce.k)(ee instanceof ve.b ? ee.trap : ee, Pe.J, Pe.lb)
    }

    function HH(ee, ie, He) {
      return bH(ee, ie, He, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function yH(ee, ie, He) {
      return bH(ee, ie, He, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function bH(ee, ie, He, ye, be) {
      let {
        memoryDetails: Me = {},
        memoryStep: Ke
      } = ye;
      const {
        code: Ue,
        details: Fe,
        message: Je
      } = (0, de.E)(ee, ie), oe = [];
      Object.assign(Fe, (0, ue.g)(ee.error)), null !== He && (Fe.trapKind = He.kind, null !== He.panic && (Fe.panic = (0, Ce.i)(He.panic)), He.refusedBytes > 0 && (Fe.refusedAllocation = String(He.refusedBytes)), oe.push((0, Ce.m)(He.kind, He.refusedBytes))), void 0 !== Ke && oe.push(`memory=${Ke}`);
      const Re = ee.error instanceof MH;
      return Re && (0, xe.H)(), xi({
        kind: "crash",
        code: Ue,
        site: ee.site,
        fatal: be,
        message: [...oe, Je].join("; "),
        details: {
          ...Fe,
          ...Me,
          ...void 0 === Ke ? {} : {
            memoryStep: Ke
          }
        },
        error: ee.error,
        screen: Re ? UH("graphicsLost") : void 0
      })
    }
    class MH extends Error {}

    function KH(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return "download" !== ee && (0, xe.H)(), xi({
        kind: "unsupported",
        code: ie,
        site: ne,
        fatal: !0,
        message: He,
        details: {
          ...ye,
          cause: ee,
          status: ie
        },
        screen: UH(ee)
      })
    }

    function UH(ee) {
      const ie = (0, Me.s)(ze.siteUsed),
        He = (0, ce.u)(ee, ie),
        ye = "noContext" === ee || "graphicsLost" === ee ? (0, ce.m)(ee, ie) : null;
      return {
        text: He,
        reload: "general:tryAgain" === He.confirm,
        stillBlocked: ye
      }
    }

    function FH(ee, ie, He) {
      return xi({
        kind: "recovered",
        code: "reprobed" === ee ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: ne,
        fatal: !1,
        message: He,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: ie,
          step: ee
        }
      })
    }
    const JH = 9;

    function oH(ee) {
      const ie = "recovered" === ee.outcome ? "recovered" : "gave_up",
        He = "load" === ee.step ? `wasm_load_${ie}${ee.oom?"_oom":""}` : `no_context_${ie}`;
      return "recovered" === ee.outcome ? `${He}_t${Math.min(ee.tries,JH)}` : "load" === ee.step ? `${He}_${ee.stage}` : He
    }

    function RH(ee) {
      const {
        step: ie,
        outcome: He,
        tries: ye,
        detail: be,
        details: Me = {}
      } = ee, Ke = "load" === ee.step ? {
        stage: ee.stage,
        ...ee.oom ? {
          oom: "true"
        } : {}
      } : {};
      return xi({
        kind: "recovered",
        code: oH(ee),
        site: ne,
        fatal: !1,
        message: be,
        details: {
          ...Me,
          step: ie,
          outcome: He,
          tries: String(ye),
          ...Ke
        }
      })
    }

    function kH(ee) {
      return xi({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: Mi,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: ee.join(",")
        }
      })
    }
    const qH = "reload=wasm";

    function fH(ee, ie, He) {
      return xi({
        kind: "unsupported",
        code: ie,
        site: ne,
        fatal: !1,
        message: [qH, He].join("; "),
        details: {
          cause: ee,
          status: ie,
          fallback: "wasmReload"
        }
      })
    }

    function TH() {
      const {
        code: ee,
        message: ie
      } = Le.c;
      return xi({
        kind: "unstreamedLoad",
        code: ee,
        site: ne,
        fatal: !1,
        message: ie
      })
    }
    class pH extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function XH(ee) {
      return ee instanceof Ze.h ? 0 === ee.code ? "JOIN-matchmake" : `JOIN-${ee.code}` : ee instanceof Ze.c ? 0 === ee.code ? `JOIN-${ee.stage}` : `JOIN-${ee.stage}-${ee.code}` : ee instanceof te.d ? "JOIN-gameCode" : ee instanceof pH ? "JOIN-turnstilePage" : ee instanceof Ze.w ? "JOIN-trafficCheck" : ee instanceof ge.d ? "JOIN-timeout" : "JOIN-network"
    }

    function zH(ee, ie) {
      const He = (0, ue.n)(ee),
        ye = {
          wasmBuild: ie.wasm,
          clientVersion: ie.client
        },
        be = ee instanceof pH ? {
          text: (0, ce.o)(),
          reload: !1,
          stillBlocked: null
        } : void 0,
        Me = (0, we.d)(ee),
        Ke = "expected" !== Me;
      return xi({
        kind: "join",
        code: XH(ee),
        site: je,
        fatal: !0,
        message: He,
        details: ye,
        error: ee,
        screen: be,
        toTransport: Ke,
        instance: Me
      })
    }

    function BH(ee, ie, He) {
      var ye;
      const be = (0, we.d)(ee),
        Me = {
          cause: (ee instanceof Ze.c || ee instanceof Ze.h) && null !== (ye = ee.serverText) && void 0 !== ye ? ye : "",
          sinceJoinStart: (0, Ee.e)(He.sinceJoinStartMs),
          game: He.game,
          ...(0, Ee.j)(),
          wasmBuild: ie.wasm,
          clientVersion: ie.client
        };
      return xi({
        kind: "pageJoin",
        code: XH(ee),
        site: je,
        fatal: !1,
        message: (0, ue.n)(ee),
        details: Me,
        error: ee,
        toTransport: "unrecognised" === be,
        instance: be
      })
    }
    const EH = {
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

    function gH(ee, ie) {
      let {
        unused: He,
        answered: ye,
        heldMs: be
      } = ee;
      const {
        code: Me,
        message: Ke
      } = EH[He], Ue = {
        unused: He,
        answered: String(ye),
        heldMs: String(be),
        wasmBuild: ie.wasm,
        clientVersion: ie.client
      };
      return xi({
        kind: "seat",
        code: Me,
        site: je,
        fatal: !1,
        message: Ke,
        details: Ue
      })
    }

    function OH(ee, ie, He) {
      var ye;
      let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (ye = ee.name) && void 0 !== ye ? ye : String(ee.code);
      const Me = {
          closeCode: String(ee.code),
          recognised: String(null !== ee.name),
          closeReason: He.closeReason,
          sinceJoined: (0, Ee.e)(He.sinceJoinedMs),
          game: He.game,
          ...(0, Ee.j)(),
          wasmBuild: ie.wasm,
          clientVersion: ie.client
        },
        Ke = null === ee.name && !(0, Ee.h)(ee.code);
      return xi({
        kind: "disconnect",
        code: be,
        site: se,
        fatal: !1,
        message: "Left room",
        details: Me,
        toTransport: Ke
      })
    }

    function dH(ee, ie) {
      const He = {
        ...(0, Te.l)(ee),
        wasmBuild: ie.wasm,
        clientVersion: ie.client
      };
      return xi({
        kind: "disconnect",
        code: `reconnect-${ee.reason}`,
        site: je,
        fatal: !1,
        message: "Reconnect failed",
        details: He
      })
    }

    function WH(ee) {
      return ee.error instanceof Ae.e ? `MODEL-${ee.error.status}` : ee.error instanceof Ye.g ? "MODEL-ring" : "MODEL-network"
    }

    function tH(ee, ie) {
      const He = WH(ee),
        ye = `model file ${ee.file} ${ee.startup?"(startup) ":""}could not load`,
        be = {
          file: String(ee.file),
          url: ee.url,
          wasmBuild: ie.wasm,
          clientVersion: ie.client
        };
      return xi({
        kind: ee.startup ? "model" : "modelLate",
        code: He,
        site: Ie,
        fatal: ee.startup,
        message: ye,
        details: be,
        error: ee.error
      })
    }

    function ZH(ee, ie) {
      const He = {
        wasmBuild: ie.wasm,
        clientVersion: ie.client
      };
      return xi({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: he,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: He,
        error: ee
      })
    }

    function wH(ee, ie, He) {
      const ye = {
        delayMs: String(ie),
        wasmBuild: He.wasm,
        clientVersion: He.client
      };
      ee instanceof Ae.e && (ye.status = String(ee.status));
      return xi({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: he,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: ye,
        error: ee
      })
    }

    function DH(ee, ie) {
      const He = {
        wasmBuild: ie.wasm,
        clientVersion: ie.client
      };
      return xi({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: de.y,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: He,
        error: ee
      })
    }

    function PH(ee, ie) {
      const He = {
        wasmBuild: ie.wasm,
        clientVersion: ie.client
      };
      return xi({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: ii,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: He,
        error: ee
      })
    }

    function AH(ee, ie, He, ye) {
      const be = {
        wasmBuild: ye.wasm,
        clientVersion: ye.client
      };
      return xi({
        kind: "texturePackKeptOut",
        code: (0, oe.g)("wasm", ee, ie),
        site: Hi,
        fatal: !1,
        message: ie.detail,
        details: be,
        error: He
      })
    }

    function YH(ee, ie) {
      const {
        frames: He,
        acks: ye,
        mask: be,
        outcome: Me
      } = ee, Ke = {
        frames: String(He),
        acks: String(ye),
        mask: String(be),
        outcome: null !== Me && void 0 !== Me ? Me : "resynced",
        wasmBuild: ie.wasm,
        clientVersion: ie.client
      };
      return xi({
        kind: "recovered",
        code: "rejoined" === Me ? "CORE-eventOverflowRejoin" : "failed" === Me ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: Qe,
        fatal: !1,
        message: `the event buffer refused records in ${He} frames`,
        details: Ke
      })
    }

    function VH(ee, ie, He) {
      return xi({
        kind: "recovered",
        code: "CORE-workerLost",
        site: ee,
        fatal: !1,
        message: `a ${ee} worker was lost`,
        details: {
          reason: ie,
          wasmBuild: He.wasm,
          clientVersion: He.client
        }
      })
    }

    function aH(ee, ie, He, ye) {
      const be = {
          reason: ee,
          pageBuild: ye.build,
          pageAgeMin: String(Math.floor(ye.ageMs / 6e4)),
          wasmBuild: He.wasm,
          clientVersion: He.client
        },
        Me = ie ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return xi({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: de.y,
        fatal: !1,
        message: Me,
        details: be
      })
    }

    function cH(ee, ie, He) {
      const ye = {
        wasmBuild: He.wasm,
        clientVersion: He.client
      };
      return xi({
        kind: "recovered",
        code: ee,
        site: de.m,
        fatal: !1,
        message: ie,
        details: ye
      })
    }

    function xH(ee, ie) {
      const He = {
        lastReason: ee,
        wasmBuild: ie.wasm,
        clientVersion: ie.client
      };
      return xi({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: de.y,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: He
      })
    }

    function LH(ee, ie, He) {
      return xi({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: de.j,
        fatal: !1,
        message: `${(0,De.u)(ee)}: the session shed load`,
        details: {
          cause: ee,
          ...ie,
          wasmBuild: He.wasm,
          clientVersion: He.client
        }
      })
    }

    function CH(ee, ie, He, ye) {
      var be, Me;
      return {
        game: ee,
        cause: ie,
        census: null === He ? "none" : JSON.stringify(He),
        gpu: null !== (be = null === (Me = (0, Be.D)()) || void 0 === Me ? void 0 : Me.renderer) && void 0 !== be ? be : "",
        browser: (0, qe.l)(),
        wasmBuild: ye.wasm,
        clientVersion: ye.client
      }
    }

    function vH(ee, ie, He, ye) {
      const be = (0, qe.n)(),
        Me = {
          ...CH(ee, ie, He, ye),
          renderWarned: String(be)
        },
        Ke = `first view drew no whole terrain in ${Ve.h/1e3} s, ${ie}${be?", render warned":""}`;
      return xi({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: yi,
        fatal: !1,
        message: Ke,
        details: Me
      })
    }

    function uH(ee, ie, He, ye, be) {
      const Me = {
          ...CH(ee, He.cause, ye, be),
          waitedMs: String(Math.round(ie.waitedMs)),
          drawnMs: String(Math.round(ie.drawnMs)),
          frames: String(ie.frames),
          renderPending: String(He.renderPending),
          viewWait: null === He.wait ? "none" : He.wait.slice(0, 6).join(",")
        },
        Ke = (0, We.d)(ie, He);
      return xi({
        kind: "viewUnshown",
        code: "CORE-firstViewUnshown",
        site: yi,
        fatal: !1,
        message: Ke,
        details: Me
      })
    }

    function mH(ee, ie, He, ye, be) {
      const Me = (0, pe.e)(),
        Ke = (0, pe.c)(ee, ie, He, ye, Me),
        Ue = {
          gpuModel: Me,
          wasmBuild: be.wasm,
          clientVersion: be.client
        };
      return xi({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: bi,
        fatal: !1,
        message: Ke,
        details: Ue
      })
    }

    function lH(ee, ie, He) {
      return xi({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: ee,
        fatal: !1,
        message: `a ${ee} worker did not start`,
        details: {
          waitedMs: String(Math.round(ie)),
          wasmBuild: He.wasm,
          clientVersion: He.client
        }
      })
    }

    function SH(ee, ie, He) {
      return xi({
        kind: "recovered",
        code: "CORE-replayFault",
        site: ee,
        fatal: !1,
        message: `the replay's ${ee} failed`,
        details: {
          wasmBuild: He.wasm,
          clientVersion: He.client
        },
        error: ie
      })
    }

    function nH(ee, ie) {
      const He = {
          wasmBuild: ie.wasm,
          clientVersion: ie.client
        },
        ye = ee instanceof Error ? ee.message : String(ee);
      return xi({
        kind: "recovered",
        code: "CORE-cameraDirector",
        site: Ki,
        fatal: !1,
        message: "the scripted camera's director threw",
        details: He,
        instance: ye,
        error: ee
      })
    }
    const jH = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function sH(ee) {
      if (0 === ee) return "none";
      const ie = [60, 600, 3600].find((ie => ee < ie));
      return void 0 === ie ? "ge3600" : `lt${ie}`
    }

    function IH(ee, ie) {
      return null === ee ? "unbound" : (0, Xe.f)(ie - ee)
    }

    function hH(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (ee & ke.L.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (ee & ke.L.LINKS_RUNNING) ? "links running" : "", `frames ${(0,fe.d)(sH(ee&ke.L.FRAMES))}`, `up ${(0,fe.d)(IH(ie,He))}`].filter(Boolean).join(", ")
    }

    function NH(ee, ie, He) {
      const ye = "lost" === ie && void 0 !== He ? ` (${He})` : "";
      return `the ${ee} ${jH[ie]}${ye}`
    }
    const GH = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function rH(ee, ie, He, ye) {
      var be;
      let {
        restoreLost: Me = !1,
        adapterRemembered: Ke = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, Ue = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const Fe = null === He || void 0 === He ? void 0 : He.message,
        Je = "pipeline_failed" === ie ? ie : He instanceof Oe.f ? "timeout" : (0, Xe.k)("frames_refused" === ie, "string" === typeof Fe ? Fe : ""),
        oe = null === ye.boundAtMs ? "unbound" : `up${(0,Xe.e)(Ue-ye.boundAtMs)}`,
        Re = null === ye.adapter ? "no adapter" : (0, Xe.j)(ye.adapter),
        ke = `${!0===ye.indirectHangs?" ih":""}${!0===ye.restoresSkipped?" nr":""}${Me?" rl":""}${Ke?" ar":""}`,
        qe = `${Je} ${(0,Oe.h)()?"hidden":"visible"} ${oe}${ke} ${Re}`;
      if ("webgpu" !== ee || "lost" !== ie && "frames_refused" !== ie) return {
        detail: qe,
        count: void 0
      };
      return {
        detail: qe,
        count: {
          errorKind: "render_lost",
          error: new Error(qe),
          code: (0, Xe.n)(Je, null !== (be = ye.boundAtMs) && void 0 !== be ? be : Ue, Ue).code,
          fields: {
            renderBackend: me.e.webgpu
          }
        }
      }
    }

    function QH(ee, ie, He) {
      const {
        count: ye
      } = rH("webgpu", ee, ie, He);
      void 0 !== ye && vi(ye)
    }
    const ey = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function iy(ee) {
      var ie;
      return null !== (ie = ee instanceof Error ? ee.reason : void 0) && void 0 !== ie ? ie : ""
    }

    function Hy(ee, ie, ye) {
      var be, Me, Ke, Ue, Je;
      let {
        from: oe,
        cause: Re = "lost",
        restoreLost: ke = !1,
        adapterRemembered: Te = !1,
        error: pe,
        context: Be = GH,
        session: Ee = ey
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, ge = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: Oe,
        count: de
      } = rH(ee, Re, pe, Be, {
        restoreLost: ke,
        adapterRemembered: Te
      }, ge), We = {
        reloadFrom: null !== oe && void 0 !== oe ? oe : "",
        losses: String(ie),
        cause: Re,
        detail: Oe,
        vendor: null !== (be = null === (Me = Be.adapter) || void 0 === Me ? void 0 : Me.vendor) && void 0 !== be ? be : "",
        architecture: null !== (Ke = null === (Ue = Be.adapter) || void 0 === Ue ? void 0 : Ue.architecture) && void 0 !== Ke ? Ke : "",
        indirectHangs: String(Be.indirectHangs),
        restoresSkipped: String(Be.restoresSkipped),
        restoreLost: String(ke),
        adapterRemembered: String(Te),
        lossReason: iy(pe),
        samples: String(Ee.samples),
        sunShadows: String(Ee.sunShadows),
        renderDistance: String(Ee.renderDistance),
        gpuFamily: null !== (Je = (0, Fe.b)()) && void 0 !== Je ? Je : "",
        browser: (0, qe.l)(),
        siteUsed: ze.siteUsed,
        wasmBuild: ye.wasm,
        clientVersion: ye.client
      }, te = "webgpu" !== ee && void 0 !== oe ? function(ee, ie, He, ye) {
        return `: ${ee}, ${ie?"restore lost":"not restored"}, up ${(0,fe.d)(IH(He,ye))}`
      }(oe, ke, Be.boundAtMs, ge) : "", Ze = `${NH(ee,Re)}${te}`, we = xi({
        kind: "recovered",
        code: "CORE-renderLost",
        site: Ge,
        fatal: !1,
        message: Ze,
        details: We,
        error: pe,
        countAs: de
      });
      return li("ga", (async () => {
        const {
          logError: ie
        } = await Promise.resolve().then((() => He(3142))), ye = `${Xe.d["webgpu"===ee?"WebGPU":"WebGL2"]}\n Error: ${Oe}`;
        ie("warning", ye), ie("error", ye)
      })), we
    }

    function yy(ee, ie) {
      var He, ye;
      const be = null === ee.name ? "TEXTURE-sources" : null === ee.url ? "TEXTURE-nourl" : ee.error instanceof ae.c ? `TEXTURE-${ee.error.status}` : "TEXTURE-network",
        Me = null === ee.name ? "terrain textures could not load" : `terrain texture ${ee.name} could not load`,
        Ke = {
          texture: null !== (He = ee.name) && void 0 !== He ? He : "",
          url: null !== (ye = ee.url) && void 0 !== ye ? ye : "",
          wasmBuild: ie.wasm,
          clientVersion: ie.client
        };
      return xi({
        kind: "terrainTexture",
        code: be,
        site: de.w,
        fatal: !1,
        message: Me,
        details: Ke,
        error: ee.error
      })
    }
    const by = {
      previewAnimations: {
        site: re,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: ei,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function My(ee, ie, He, ye) {
      const {
        site: be,
        prefix: Me,
        name: Ke
      } = by[ee], {
        stage: Ue,
        error: Fe
      } = He;
      return xi({
        kind: ee,
        code: "decode" === Ue ? null === Fe ? `${Me}-decode` : `${Me}-trap` : Fe instanceof Ae.e ? `${Me}-${Fe.status}` : `${Me}-network`,
        site: be,
        fatal: !1,
        message: "decode" === Ue ? `${Ke} did not decode` : `${Ke} could not load`,
        details: {
          url: ie,
          wasmBuild: ye.wasm,
          clientVersion: ye.client
        },
        error: Fe
      })
    }
    const Ky = "staleBuild";

    function Uy(ee, ie, He) {
      const ye = {
          failedSite: ee.site,
          url: ee.url,
          from: ee.from,
          sameBuild: String(ee.from === ie),
          reloadMs: String(Math.max(0, Date.now() - ee.at)),
          wasmBuild: He.wasm,
          clientVersion: He.client
        },
        be = `reloaded into a newer build after ${ee.site} failed to load: ${ee.error}`;
      return xi({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: Ky,
        fatal: !1,
        message: be,
        details: ye
      })
    }
  },
  41915: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      h: () => be,
      j: () => Ke,
      m: () => Fe
    });
    var ye = He(5279);
    const be = 3e4,
      Me = 900;

    function Ke(ee, ie) {
      const He = null === ee ? 0 : ie - ee;
      return He <= Me ? He : 0
    }
    class Ue {
      constructor(ee) {
        this.RR = ee, this.waitedMs = 0, this.lastMs = null
      }
      frame(ee, ie) {
        return !!ie || (this.waitedMs += Ke(this.lastMs, ee), this.lastMs = ee, !(this.waitedMs < be) && (this.RR(), !0))
      }
    }

    function Fe(ee, ie) {
      return 0 === (ee & ye.U.ChunkRequested) ? "no_chunk_request" : 0 === (ee & ye.U.ChunkStored) ? "chunk_not_stored" : 0 === (ee & ye.U.MeshLanded) ? "not_meshed" : null === ie ? "no_frame_drawn" : 0 === ie.terrainParts ? "no_terrain_parts" : ie.terrainCompiling > 0 ? "terrain_compiling" : ie.terrainOpaque + ie.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  41910: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      d: () => Ue
    });
    var ye = He(41915);

    function be(ee) {
      if (null === ee) return "none";
      const [ie, He, ye, be] = ee, Me = [
        ["link", ie],
        ["terrain", He],
        ["lJ", ye],
        ["other", be]
      ];
      let Ke = "none",
        Ue = 0;
      for (const [Fe, Je] of Me) Je > Ue && (Ke = Fe, Ue = Je);
      return Ke
    }
    class Me {
      constructor() {
        this.chunkAtMs = null, this.lastFrameMs = null, this.drawnMs = 0, this.frames = 0, this.over = !1
      }
      playerChunk(ee) {
        null !== this.chunkAtMs || this.over || (this.chunkAtMs = ee)
      }
      frame(ee) {
        null === this.chunkAtMs || this.over || (this.drawnMs += (0, ye.j)(this.lastFrameMs, ee), this.lastFrameMs = ee, this.frames++)
      }
      shown() {
        this.over = !0
      }
      end(ee, ie) {
        return null === this.chunkAtMs || this.over ? null : (this.over = !0, {
          end: ee,
          waitedMs: Math.max(ie - this.chunkAtMs, 0),
          drawnMs: this.drawnMs,
          frames: this.frames
        })
      }
    }

    function Ke(ee) {
      return ee < 5e3 ? "brief" : ee < 15e3 ? "short" : ee < 6e4 ? "long" : "very_long"
    }

    function Ue(ee, ie) {
      var He, ye;
      const Me = [ie.bound ? "bound" : "unbound", ...ie.preload ? ["preload"] : [], ie.startupLoaded ? "startup in" : "startup out", ie.renderPending > 0 ? "render pending" : "render resolved", `lacked ${be(ie.wait)}${(null!==(He=null===(ye=ie.wait)||void 0===ye?void 0:ye[4])&&void 0!==He?He:0)>0?" gapped":""}`],
        Ue = 0 === ee.frames ? "no frames" : `drew ${Ke(ee.drawnMs)}`;
      return `first view not shown after the player chunk, ${ie.cause}, ${Me.join(", ")}, waited ${Ke(ee.waitedMs)}, ${Ue}, ended ${ee.end}`
    }
  },
  41704: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      g: () => Xe,
      h: () => Te,
      l: () => pe,
      n: () => ke,
      o: () => qe,
      q: () => oe,
      r: () => Re,
      u: () => fe
    });
    class ye extends Error {
      constructor(ee) {
        super(`the join's code did not load: ${ee instanceof Error?ee.message:String(ee)}`, {
          cause: ee
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === ee || void 0 === ee ? void 0 : ee.request
      }
    }
    let be = null,
      Me = null,
      Ke = null;
    const Ue = [];
    let Fe = null;

    function Je(ee, ie) {
      try {
        ee(ie)
      } catch (He) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", He)
      }
    }

    function oe() {
      return Fe
    }

    function Re(ee) {
      Ue.push(ee), null !== Fe && Je(ee, Fe)
    }

    function ke(ee) {
      return be ??= Promise.all([He.e(84), He.e(111), He.e(86), He.e(248), He.e(89), He.e(220), He.e(170), He.e(249), He.e(109), He.e(268), He.e(238), He.e(300), He.e(49), He.e(217), He.e(233), He.e(216), He.e(207), He.e(208), He.e(101), He.e(134), He.e(274), He.e(68)]).then((() => He(45791))).then((ie => {
        ie.loadAudio(ee), Fe = ie;
        for (const ee of Ue) Je(ee, ie);
        return ie
      })).catch((ee => {
        throw be = null, ee
      })), be
    }
    async function qe(ee, ie) {
      try {
        const He = await ke(ee);
        await He.loadClientGame(ie)
      } catch (He) {
        throw new ye(He)
      }
    }

    function fe(ee, ie) {
      Me = {
        running: ee,
        shell: ie
      }
    }

    function Te() {
      return Ke
    }
    async function pe(ee) {
      const ie = Me;
      if ((null === ie || void 0 === ie ? void 0 : ie.running) !== ee) throw new Error("the core's session has ended");
      const He = await ke(ie.shell.audio).catch((ee => {
        throw new ye(ee)
      }));
      if (null !== Ke) return Ke;
      if (Me !== ie || ee.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Ke = He.startGameHost(ee, ie.shell), null === Ke) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Ke
    }

    function Xe() {
      null !== Ke && (null !== Fe ? Fe.endGameHost(Ke) : Ke.closeGame()), Ke = null, Me = null
    }
  },
  41834: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    const ye = {
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
  41782: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      d: () => Me,
      e: () => Ke,
      f: () => be,
      h: () => qe,
      k: () => oe,
      o: () => Fe,
      s: () => ke,
      w: () => Re,
      y: () => Ue
    });
    var ye = He(1853);
    const be = new Uint8Array([12]),
      Me = 2e3,
      Ke = 257;

    function Ue(ee) {
      const ie = new Uint8Array(4);
      return new DataView(ie.buffer).setUint32(0, ee, !0), ie
    }
    class Fe extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Je extends Error {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(ee), this.stage = ie, this.code = He, this.serverText = ye, this.socketOpened = be, this.name = "JoinError"
      }
    }
    class oe extends Error {
      constructor(ee) {
        super(ee), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Re extends Error {
      constructor(ee) {
        super((0, ye.f)(ee), {
          cause: ee
        }), this.name = "TrafficCheckError"
      }
    }
    class ke extends Error {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(ee, {
          cause: He
        }), this.networkLost = ie, this.httpStatus = ye, this.name = "SeatRequestError"
      }
    }
    class qe extends Error {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(ee), this.code = ie, this.serverText = He, this.name = "MatchmakeError"
      }
    }
  },
  41789: (ee, ie, He) => {
    He.d(ie, {
      b: () => qe,
      d: () => ke,
      g: () => fe
    });
    var ye = He(2777),
      be = He(3236),
      Me = He(39845),
      Ke = He(37286),
      Ue = He(39854),
      Fe = He(41782),
      Je = He(41798);
    const oe = "seat reservation expired.",
      Re = "early_leave";

    function ke(ee) {
      if (ee instanceof Ke.d) return "expected";
      if (ee instanceof Fe.s) return ee.networkLost ? "expected" : "unrecognised";
      if (ee instanceof Fe.c) {
        if ("closed" === ee.stage && (0 === ee.code || (0, be.h)(ee.code))) return "expected";
        if ("roomError" === ee.stage && (ee.serverText === oe || ee.serverText === Re)) return "expected"
      }
      return ee instanceof Fe.c || ee instanceof Fe.h ? null === (0, Ue.g)(ee.code).name ? "unrecognised" : "known" : (0, ye.f)(ee) ? "expected" : ee instanceof Fe.w || ee instanceof Je.e ? "known" : "unrecognised"
    }

    function qe(ee) {
      return ee instanceof Ke.d ? "timedOut" : "expected" !== ke(ee) || (0, ye.f)(ee) || ee instanceof Fe.c && 1001 === ee.code ? void 0 : "failed"
    }

    function fe(ee) {
      return ee instanceof Fe.c && "attach" !== ee.stage ? (0, Me.e)(ee, "closed" !== ee.stage || ee.socketOpened ? "socket" : "socket_unopened") : ee instanceof Fe.s ? {
        at: "seat_lost",
        code: ee.httpStatus
      } : ee instanceof Fe.h || ee instanceof Ke.d ? (0, Me.e)(ee, ee instanceof Ke.d ? ee.leg : "seat") : void 0
    }
  },
  41920: (ee, ie, He) => {
    He.d(ie, {
      d: () => Fe,
      e: () => Je,
      f: () => qe,
      g: () => Re
    });
    var ye = He(3101),
      be = He(5271),
      Me = He(41925),
      Ke = He(41933),
      Ue = He(36965);
    const Fe = 395,
      Je = 2147483648,
      oe = new Uint8Array(0);
    class Re extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class ke extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class qe {
      constructor(ee, ie, He) {
        var ye, be, Ke, Ue;
        let Fe = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = ee, this.build = ie, this.onFailure = He, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.KR = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (ye = Fe.fetchFile) && void 0 !== ye ? ye : ee => (0, Me.k)(ee), this.onWritten = null !== (be = Fe.onWritten) && void 0 !== be ? be : null, this.onTaken = null !== (Ke = Fe.onTaken) && void 0 !== Ke ? Ke : null, this.onPackFileFailed = null !== (Ue = Fe.onPackFileFailed) && void 0 !== Ue ? Ue : null, this.startupLeft = new Set(ee.startup);
        for (const Me of ee.startup) this.request(Me)
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
      drawnUrl(ee) {
        return this.drawn.get(ee)
      }
      request(ee) {
        const ie = this.pending.get(ee);
        if (!0 === (null === ie || void 0 === ie ? void 0 : ie.ask)) return;
        const He = this.gR(ee, !0);
        He.recheck = void 0 !== ie;
        const ye = this.drawn.get(ee);
        if (void 0 !== ye) return He.lJ = !0, He.recheck = !0, void this.fetch(ee, He, ye);
        this.fetchWanted(ee, He)
      }
      async refresh() {
        const ee = ++this.refreshes,
          ie = new Set;
        for (const Ke of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const ee of Ke) 0 === (ee & Me.h) && ie.add(ee);
        const He = [...ie];
        let ye;
        try {
          ye = await Promise.all(He.map((ee => this.wanted(ee))))
        } catch {
          return null
        }
        if (ee !== this.refreshes) return null;
        const be = {
          resent: 0,
          refetched: 0,
          delivered: He.filter((ee => this.drawn.has(ee))).length
        };
        return He.forEach(((ee, ie) => {
          const {
            url: He,
            inPlaceOf: Me
          } = ye[ie], Ke = this.pending.get(ee);
          if (void 0 !== Ke) {
            if (Ke.lJ || void 0 === Ke.url) return void(Ke.recheck = !0);
            if (Ke.url === He) return;
            be.refetched++;
            const ie = this.gR(ee, Ke.ask);
            return ie.recheck = Ke.recheck, void this.fetch(ee, ie, He, Me)
          }
          const Ue = this.written.get(ee);
          void 0 === Ue ? this.drawn.get(ee) !== (null !== He && void 0 !== He ? He : void 0) && (be.resent++, this.fetch(ee, this.gR(ee, !1), He, Me)) : Ue.url !== (null !== He && void 0 !== He ? He : "") && (Ue.attempt.recheck = !0)
        })), be
      }
      taken(ee, ie) {
        const He = new Set,
          ye = new Set;
        for (const be of Array.from(ie)) 0 === (be & Je) ? He.add(be) : ye.add((be & ~Je) >>> 0);
        for (const [be, Me] of this.written) Me.seq > ee || (this.written.delete(be), He.has(Me.seq) ? this.refusedFile(be, Me) : this.takenFile(be, Me, !Me.empty && !ye.has(Me.seq)))
      }
      takenFile(ee, ie, He) {
        const {
          attempt: ye
        } = ie;
        if (He) {
          var be;
          this.drawn.set(ee, ie.url), this.undrawn.delete(ee), void 0 !== ye.inPlaceOf ? this.refusedPack.set(ee, ye.inPlaceOf) : ye.lJ || this.refusedPack.delete(ee), null === (be = this.onTaken) || void 0 === be || be.call(this, ee, !0);
          const He = this.pending.get(ee);
          if (!0 === (null === He || void 0 === He ? void 0 : He.lJ) && He.url !== ie.url) {
            const He = this.gR(ee, !0);
            He.lJ = !0, He.recheck = !0, this.fetch(ee, He, ie.url)
          }
        } else {
          var Me;
          this.drawn.has(ee) || this.undrawn.add(ee), null === (Me = this.onTaken) || void 0 === Me || Me.call(this, ee, !1)
        }
        ye.recheck && this.resendIfChanged(ee)
      }
      refusedFile(ee, ie) {
        var He, ye;
        if (null === (He = this.onTaken) || void 0 === He || He.call(this, ee, !1), this.refusedPack.set(ee, ie.url), this.pending.has(ee)) return void(null === (ye = this.onPackFileFailed) || void 0 === ye || ye.call(this, ee, fe(ie.url)));
        const be = this.gR(ee, ie.attempt.ask);
        be.recheck = ie.attempt.recheck, this.afterRefusal(ee, be, ie.url)
      }
      async afterRefusal(ee, ie, He) {
        var ye;
        let be;
        try {
          be = await this.wanted(ee)
        } catch (Me) {
          return void(this.pending.get(ee) === ie && this.giveUp(ee, ie, He, Me))
        }
        this.pending.get(ee) === ie && (be.inPlaceOf !== He ? ie.ask || (null !== (ye = be.url) && void 0 !== ye ? ye : void 0) !== this.drawn.get(ee) ? this.fetch(ee, ie, be.url, be.inPlaceOf) : this.pending.delete(ee) : this.fallBack(ee, ie, He, fe(He)))
      }
      gR(ee, ie) {
        const He = {
          url: void 0,
          ask: ie,
          lJ: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(ee, He);
        for (let ye = this.ready.length - 1; ye >= 0; ye--) this.ready[ye].file === ee && this.ready.splice(ye, 1);
        return He
      }
      async wanted(ee) {
        const ie = await this.files.url(ee);
        return null !== ie && this.refusedPack.get(ee) === ie ? {
          url: await this.files.shippedUrl(ee),
          inPlaceOf: ie
        } : {
          url: ie,
          inPlaceOf: void 0
        }
      }
      fetchWanted(ee, ie) {
        const He = this.files.url(ee);
        He instanceof Promise ? He.then((He => {
          this.fetchFound(ee, ie, He)
        }), (He => {
          this.pending.get(ee) === ie && this.giveUp(ee, ie, "", He)
        })) : this.fetchFound(ee, ie, He)
      }
      fetchFound(ee, ie, He) {
        null !== He && this.refusedPack.get(ee) === He ? Promise.resolve(this.files.shippedUrl(ee)).then((ye => {
          this.fetch(ee, ie, ye, He)
        }), (ye => {
          this.pending.get(ee) === ie && this.giveUp(ee, ie, He, ye)
        })) : this.fetch(ee, ie, He)
      }
      fetch(ee, ie, He, ye) {
        this.pending.get(ee) === ie && (ie.url = He, ie.inPlaceOf = ye, null !== He ? this.load(ee, ie, He) : this.buildFile(ee, ie, "", oe))
      }
      load(ee, ie, He) {
        const ye = this.KR.get(ee);
        (null === ye || void 0 === ye ? void 0 : ye.url) !== He ? this.fetchFile(He).then((ye => {
          var be, Me;
          this.pending.get(ee) === ie && (this.keptTotal += ye.byteLength - (null !== (be = null === (Me = this.KR.get(ee)) || void 0 === Me ? void 0 : Me.glb.byteLength) && void 0 !== be ? be : 0), this.KR.set(ee, {
            url: He,
            glb: ye
          }), this.buildFile(ee, ie, He, ye))
        }), (ye => {
          this.pending.get(ee) === ie && this.fallBack(ee, ie, He, ye)
        })) : this.buildFile(ee, ie, He, ye.glb)
      }
      buildFile(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ke = ye.byteLength > 0 && (0, Me.n)(He) ? (ee | Me.e) >>> 0 : ee;
        this.queueRecord(ee, ie, He, ye, this.build(Ke, ye), be)
      }
      queueRecord(ee, ie, He, ye, Me, Ue) {
        Me.then((Me => {
          if (this.pending.get(ee) !== ie) return;
          if (be.m + (0, be.le)(Me.byteLength) > be.Ac) return void this.ringRefused(ee, ie, He, new Re(`${Te(He)}'s record is ${Me.byteLength-Ke.e} bytes, past the cmd ring's ${be.Ac}`), Ue);
          const Fe = {
            file: ee,
            url: He,
            payload: Me,
            glb: ye,
            attempt: ie
          };
          Ue ? this.ready.unshift(Fe) : this.ready.push(Fe)
        }))
      }
      async fallBack(ee, ie, He, ye) {
        var be;
        let Me = null,
          Ke = ye;
        try {
          Me = await this.files.shippedUrl(ee)
        } catch (Ue) {
          Ke = Ue
        }
        this.pending.get(ee) === ie && (null !== Me && Me !== He ? (null === (be = this.onPackFileFailed) || void 0 === be || be.call(this, ee, ye), ie.ask || this.drawn.get(ee) !== Me ? (ie.url = Me, ie.inPlaceOf = He, this.load(ee, ie, Me)) : this.pending.delete(ee)) : this.giveUp(ee, ie, He, Ke))
      }
      ringRefused(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Me.n)(He) ? this.fallBack(ee, ie, He, ye): this.giveUp(ee, ie, He, ye, be)
      }
      giveUp(ee, ie, He, be) {
        let Me = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: ee,
          url: Te(He),
          error: be,
          startup: this.startupLeft.has(ee)
        }), ie.ask || !this.drawn.has(ee) ? (0, ye.Q)(be) ? this.queueRecord(ee, ie, He, oe, Promise.resolve((0, Ke.n)(ee, (0, Ue.n)(be))), Me) : this.buildFile(ee, ie, He, oe, Me) : this.pending.delete(ee)
      }
      async resendIfChanged(ee) {
        var ie;
        if (0 !== (ee & Me.h)) return;
        let He;
        try {
          He = await this.wanted(ee)
        } catch {
          return
        }(null !== (ie = He.url) && void 0 !== ie ? ie : void 0) === this.drawn.get(ee) || this.pending.has(ee) || this.written.has(ee) || this.fetch(ee, this.gR(ee, !1), He.url, He.inPlaceOf)
      }
      drain(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === ee) return;
        let He = 0,
          ye = 0;
        for (; ye < this.ready.length && He < 262144;) {
          const Ue = this.ready[ye];
          if (this.written.has(Ue.file)) {
            ye++;
            continue
          }
          const oe = this.nextSeq;
          new DataView(Ue.payload.buffer, Ue.payload.byteOffset, Ue.payload.byteLength).setUint32(Ke.f, oe, !0);
          const ke = Ue.attempt.lJ && Ue.glb.byteLength > 0 && this.drawn.get(Ue.file) === Ue.url;
          if (ee(Fe, ke ? 1 : 0, Ue.payload)) {
            if (this.nextSeq = oe >= Je - 1 ? 1 : oe + 1, this.ready.splice(ye, 1), He += Ue.payload.byteLength, this.pending.delete(Ue.file), this.startupLeft.delete(Ue.file), this.written.set(Ue.file, {
                seq: oe,
                url: Ue.url,
                empty: 0 === Ue.glb.byteLength,
                attempt: Ue.attempt
              }), Ue.glb.byteLength > 0) try {
              var be;
              null === (be = this.onWritten) || void 0 === be || be.call(this, Ue.file, Ue.glb)
            } catch (Me) {
              console.warn("ModelFeed: reading the file's images failed", Me)
            }
          } else {
            if (null === ie || 0 === Ue.glb.byteLength || ie(Ue.payload.byteLength)) return;
            this.ready.splice(ye, 1);
            const ee = new Re(`${Te(Ue.url)}'s record is ${Ue.payload.byteLength-Ke.e} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(Ue.file, Ue.attempt, Ue.url, ee, !0)
          }
        }
      }
    }

    function fe(ee) {
      return new ke(`presentation refused ${Te(ee)}`)
    }

    function Te(ee) {
      return ee.startsWith("data:") ? `${ee.slice(0,Math.min(Math.max(ee.indexOf(","),5),64))},...` : ee
    }
  },
  41925: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      h: () => Me,
      k: () => oe,
      n: () => Ue,
      r: () => Je,
      t: () => Fe
    });
    var ye = He(3101),
      be = He(3529);
    const Me = 2147483648,
      Ke = 1073741824;

    function Ue(ee) {
      return ee.startsWith("data:")
    }

    function Fe(ee) {
      let {
        onTableFailed: ie,
        packUrl: He
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ye = Je();
      ye.catch((ee => {
        null === ie || void 0 === ie || ie(ee)
      }));
      const be = async ie => (await ye).fileUrl((ie & ~Me) >>> 0, ee);
      return {
        startup: [],
        url: async ee => {
          if (He && 0 === (ee & Me)) {
            const ie = await ye,
              be = ie.filePackName(ee),
              Me = null === be || "lifeform" === ie.fileSource(ee) ? null : He(be);
            if (null !== Me) return Me
          }
          return be(ee)
        },
        shippedUrl: be
      }
    }

    function Je() {
      return He.e(49).then((() => He(45796)))
    }
    async function oe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return ee.startsWith("data:") ? (0, be.e)(ee.slice(ee.indexOf(",") + 1), ie) : (0, ye.F)(ee, {
        spare: ie
      })
    }
  },
  41933: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe,
      f: () => Je,
      j: () => fe,
      n: () => ke,
      q: () => Re,
      s: () => qe
    });
    const ye = 826427981,
      be = 1,
      Me = 2,
      Ke = 44,
      Ue = 58,
      Fe = 8,
      Je = 4;

    function oe(ee, ie, He) {
      const be = (new TextEncoder).encode(He),
        Me = Fe + 4 * (ie.length + 2),
        Ke = new Uint8Array(Me + (be.byteLength + 3 & -4)),
        Ue = new DataView(Ke.buffer);
      return Ue.setUint32(0, ee, !0), Ue.setUint32(Fe, ye, !0), ie.forEach(((ee, ie) => {
        Ue.setUint32(Fe + 4 * (ie + 1), ee, !0)
      })), Ue.setUint32(Me - 4, be.byteLength, !0), Ke.set(be, Me), Ke
    }

    function Re(ee, ie) {
      return oe(ee, [Me], ie)
    }

    function ke(ee, ie) {
      return oe(ee, [be, Ue], ie)
    }

    function qe(ee, ie) {
      return oe(ee, [be, Ke], ie)
    }

    function fe(ee) {
      const ie = Fe;
      if (ee.byteLength < ie + 12) return !1;
      const He = new DataView(ee.buffer, ee.byteOffset, ee.byteLength);
      return He.getUint32(ie, !0) === ye && He.getUint32(ie + 4, !0) === be && He.getUint32(ie + 8, !0) === Ke
    }
  },
  41836: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      f: () => oe,
      h: () => Ke,
      j: () => Fe
    });
    var ye = He(36965);
    class be extends Error {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${ee}: the module trapped${He?" in an earlier call":""}: ${String(ie)}`, {
          cause: ie
        }), this.site = ee, this.trap = ie, this.earlier = He, this.name = "ModuleTrapError", ie instanceof Error && void 0 !== ie.stack && (this.stack = `${this.name}: ${this.message}\n${ie.stack}`)
      }
    }
    const Me = new WeakMap;

    function Ke(ee) {
      return Me.has(ee)
    }

    function Ue(ee, ie) {
      Me.has(ee) || Me.set(ee, ie)
    }

    function Fe(ee, ie) {
      return !!(0, ye.k)(ie) && (Ue(ee, ie), !0)
    }
    const Je = [
      ["error", ee => ee.error],
      ["unhandledrejection", ee => ee.reason]
    ];

    function oe(ee, ie, He) {
      let Ke = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Me.has(ee) ? Promise.reject(new be(ie, Me.get(ee), !0)) : new Promise(((Me, Fe) => {
        const oe = He => {
            Ue(ee, He), qe(), Fe(new be(ie, He))
          },
          Re = ee => {
            ee instanceof WebAssembly.RuntimeError ? oe(ee) : (qe(), Fe(ee))
          },
          ke = Je.map((ee => {
            let [ie, He] = ee;
            return [ie, ee => {
              const ie = He(ee);
              (0, ye.k)(ie) && oe(ie)
            }]
          })),
          qe = () => {
            for (const [ee, ie] of ke) null === Ke || void 0 === Ke || Ke.removeEventListener(ee, ie)
          };
        for (const [ee, ie] of ke) null === Ke || void 0 === Ke || Ke.addEventListener(ee, ie);
        let fe;
        try {
          fe = He()
        } catch (Te) {
          return void Re(Te)
        }
        fe.then((ee => {
          qe(), Me(ee)
        }), Re)
      }))
    }
  },
  41823: (ee, ie, He) => {
    He.d(ie, {
      C: () => xe,
      G: () => we,
      H: () => ae,
      L: () => Ie,
      N: () => ce,
      Q: () => me,
      S: () => Ce,
      T: () => Ve,
      V: () => he,
      b: () => Ze,
      c: () => de,
      f: () => ue,
      h: () => Le,
      j: () => Oe,
      m: () => te,
      n: () => Ee,
      p: () => Pe,
      q: () => Ye,
      u: () => se,
      y: () => je
    });
    var ye = He(198),
      be = He(18),
      Me = He(3962),
      Ke = He(123),
      Ue = He(330),
      Fe = He(35),
      Je = He(41827),
      oe = He(41841),
      Re = He(37266),
      ke = He(41855),
      qe = (He(41890), He(41948)),
      fe = He(41882),
      Te = He(41844);
    const pe = "wasmJoinBuild";
    let Xe = null,
      ze = null,
      Be = null;

    function Ee(ee) {
      Be = ee
    }
    let ge = !1;

    function Oe() {
      ge = !0
    }

    function de() {
      return ge
    }
    let We = !1;

    function te() {
      We = !0
    }

    function Ze() {
      return We
    }

    function we() {
      return Be
    }
    let De = null;

    function Pe(ee) {
      De = ee, (0, Ue.d)(ee)
    }
    const Ae = "wasmClientRenderLost";

    function Ye() {
      Fe.m.setItem(Ae, !0)
    }

    function Ve() {
      return !0 === Fe.m.getItem(Ae)
    }

    function ae() {
      return De
    }

    function ce() {
      if (null === Xe) {
        Fe.i.removeItem("wasmLastPick"), Fe.i.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, Ue.k)(), Xe = (0, Je.C)(ke.f).then((ee => (null === ee || (0, Je.p)(ee) || (ze = qe.e[ee.backend], be.e.followGameGpu("webgpu" === ee.backend ? ee.adapter : null), "webgpu" === ee.backend && (0, fe.d)()), ee)))
      }
      return Xe
    }

    function xe() {
      return ze
    }

    function Le(ee) {
      return ee ? ee.load() : Promise.resolve().then((function() {
        var ee = new Error("Cannot find module '@bloxd/wasm/client'");
        throw ee.code = "MODULE_NOT_FOUND", ee
      })).then((ee => ee.bloxdWasmClient))
    }

    function Ce(ee) {
      Fe.i.setItem(pe, ee)
    }

    function ve(ee, ie) {
      const He = Fe.i.getItem(pe);
      return null === He ? function(ee) {
        if (void 0 !== (0, ye.b)(ee, "webgpu") && (0, Je.y)()) return "webgpu";
        return !1 === (0, Ke.x)() ? "webgl1" : "webgl"
      }(ee) : "none" === He ? null : "string" === typeof He && void 0 !== (0, ye.b)(ee, He) ? He : (ie && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(He)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function ue() {
      if (null === ke.f) return Le(null);
      const ee = ve(ke.f, !0);
      return null === ee ? null : ke.f[ee]()
    }

    function me() {
      null === Xe && null !== ke.f && "webgl" === ve(ke.f, !1) && (0, Te.c)()
    }
    let le = null,
      Se = null,
      ne = null;

    function je() {
      return le ??= ce().then((async ee => {
        const ie = null !== ee && !(0, Je.p)(ee),
          He = {
            indirectHangs: ie && await (0, Je.L)(ee, window.location.search),
            storagePullBreaks: ie && (0, Je.U)(ee, window.location.search),
            splitPassBreaks: ie && (0, Je.R)(ee, window.location.search),
            earlySky: ie && (0, Je.K)(ee, window.location.search),
            instancedTerrain: ie ? (0, Je.P)(ee, window.location.search) : null,
            cellLight: ie && await (0, Me.i)("cellLight"),
            framesAhead: (0, Je.k)(window.location.search, ie ? ee : null),
            webGpuRestores: !ie || (0, Je.V)(ee, (0, Re.e)()),
            bufferCopiesCrash: ie && (0, Je.J)(ee, window.location.search),
            firstVertex: ie ? (0, oe.i)(ee.backend, window.location.search) : void 0
          };
        return Se = He.indirectHangs, ne = !He.webGpuRestores, He
      })), le
    }

    function se() {
      return Se
    }

    function Ie() {
      return ne
    }
    async function he() {
      const ee = null === Xe ? null : await Xe;
      return null !== ee && (0, Je.p)(ee) && (Xe = null, le = null, Se = null, ne = null), ce()
    }
  },
  42068: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe,
      e: () => Je
    });
    var ye = He(37003),
      be = He(41955),
      Me = He(4781),
      Ke = He(3565),
      Ue = He(37266);
    async function Fe(ee, ie) {
      return await Promise.all([(0, Me.d)(void 0, !0), (0, Ke.g)()]), (0, ye.m)(ee, be.e, {
        ...ie,
        memoryMaximumBytes: (0, Ue.r)()
      })
    }
    async function Je() {
      return await (0, Me.d)(void 0, !0), (0, ye.q)((0, Ue.r)())
    }
  },
  41841: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue,
      i: () => Me
    });
    var ye = He(260);
    const be = "provokingVertex";

    function Me(ee, ie) {
      if ("webgl" !== ee) return;
      const He = new URLSearchParams(ie).get(be);
      return "first" === He || "last" !== He && null
    }
    const Ke = new WeakSet;

    function Ue(ee, ie) {
      var He, be;
      let Me = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (He = null === (be = globalThis.navigator) || void 0 === be ? void 0 : be.userAgent) && void 0 !== He ? He : "";
      try {
        !1 === ie || Ke.has(ee) || (Ke.add(ee), ee.addEventListener("webglcontextrestored", (() => {
          Ue(ee, ie, Me)
        })));
        const He = ee.getContext("webgl2");
        if (null === He || He.isContextLost()) return !1;
        if (!(null !== ie && void 0 !== ie ? ie : function(ee, ie) {
            var He, be;
            const Me = ee.getExtension("WEBGL_debug_renderer_info");
            if (null === Me) return !1;
            return function(ee, ie, He) {
              return He.includes("Windows") && "adreno_6" === (0, ye.i)(ee, ie)
            }(String(null !== (He = ee.getParameter(Me.UNMASKED_VENDOR_WEBGL)) && void 0 !== He ? He : ""), String(null !== (be = ee.getParameter(Me.UNMASKED_RENDERER_WEBGL)) && void 0 !== be ? be : ""), ie)
          }(He, Me))) return !1;
        const be = He.getExtension("WEBGL_provoking_vertex");
        return null !== be && (be.provokingVertexWEBGL(be.FIRST_VERTEX_CONVENTION_WEBGL), console.info("WebGL2 draws flat varyings from the first vertex (WEBGL_provoking_vertex)"), !0)
      } catch (Fe) {
        return console.warn("WebGL2's provoking vertex couldn't be set: flat varyings draw from the last vertex", Fe), !1
      }
    }
  },
  41846: (ee, ie, He) => {
    He.d(ie, {
      d: () => Je,
      e: () => Ue,
      g: () => oe,
      k: () => Ke
    });
    var ye = He(345),
      be = He(634);
    let Me;

    function Ke(ee) {
      var ie;
      const He = Me;
      return Me = void 0, null !== (ie = Fe(ee)) && void 0 !== ie ? ie : He
    }

    function Ue(ee) {
      try {
        const ie = Fe(ee);
        void 0 !== ie && (Me = ie, (0, be.f)((0, ye.r)(ie.reason, ie.message)))
      } catch (ie) {
        console.warn("Couldn't keep the WebGPU loss's cause", ie)
      }
    }

    function Fe(ee) {
      var ie;
      const He = null === ee || void 0 === ee || null === (ie = ee.FUe) || void 0 === ie ? void 0 : ie.call(ee),
        ye = null === ee || void 0 === ee ? void 0 : ee.UUe();
      if (void 0 === ye) return;
      const be = new Error(ye);
      return void 0 !== He && (be.reason = He), be
    }

    function Je(ee) {
      return ee instanceof Error ? ee : void 0
    }

    function oe(ee, ie) {
      return "lost" !== ee && "frames_refused" !== ee ? {} : (0, ye.r)("frames_refused" === ee ? ee : null === ie || void 0 === ie ? void 0 : ie.reason, null === ie || void 0 === ie ? void 0 : ie.message)
    }
  },
  41878: (ee, ie, He) => {
    He.d(ie, {
      d: () => te,
      g: () => ge,
      i: () => Ee,
      l: () => We,
      n: () => Pe,
      p: () => De,
      t: () => Ae
    });
    var ye = He(5279),
      be = He(41882),
      Me = He(34717);
    const Ke = 1,
      Ue = 18,
      Fe = 19,
      Je = 20,
      oe = 21,
      Re = 22,
      ke = {
        [Ke]: "link",
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
        [Ue]: "retry linked",
        [Fe]: "fallback linked",
        [Je]: "fallback failed",
        [oe]: "link stalled",
        [Re]: "link left pending",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function qe(ee, ie, He) {
      return ee === Ue ? "program retry" : ee === Ke ? "program link" : ee === oe || ee === Re ? "program link stall" : ee === Fe || ee === Je ? `program ${ie} ${He}` : "program"
    }
    const fe = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      Te = {
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
      pe = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Xe = {
        11: "none read after view",
        12: "some read after view"
      },
      ze = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...Xe
      },
      Be = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function Ee(ee, ie) {
      return ee === ye.o.RenderSerialLinks && void 0 !== Xe[ie]
    }

    function ge(ee, ie) {
      return ee === ye.o.RenderSerialLinks && void 0 !== Be[15 & ie]
    }
    const Oe = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function de(ee, ie) {
      var He;
      return null !== (He = ee[ie]) && void 0 !== He ? He : (0, Me.d)(ie)
    }

    function We() {
      return (0, Me.d)((0, be.b)())
    }

    function te(ee, ie) {
      switch (ee) {
        case ye.o.RenderSceneRowNotDrawn:
          return {
            words: ` ${de(Te,ie)}`, instance: String(ie), group: String(ee)
          };
        case ye.o.RenderChunkMeshNotDrawn: {
          const He = 0 === (128 & ie) ? "" : " shortage",
            ye = ie >>> 8;
          return {
            words: ` ${de(pe,127&ie)}${He}${0===ye?"":` kind ${(0,Me.d)(ye)}`}`,
            instance: String(ie),
            group: String(ee)
          }
        }
        case ye.o.RenderInternal: {
          const He = de(fe, 255 & ie),
            ye = ie >>> 8 & 255;
          if (0 === ye) return {
            words: ` ${He}`,
            instance: String(ie),
            group: String(ee)
          };
          const be = de(ke, ye),
            Ke = ie >>> 16;
          return {
            words: ` ${He} ${be} program ${(0,Me.d)(Ke)}`,
            instance: `${He} ${be} ${Ke}`,
            group: qe(ye, be, He),
            gpuDetails: {
              programFailure: be,
              program: String(Ke)
            }
          }
        }
        case ye.o.RenderSerialLinks: {
          if (ge(ee, ie)) {
            const ee = function(ee) {
              const ie = (ie, He) => (0, Me.d)(ee >>> ie & (1 << He) - 1),
                He = ee >>> 30 & 1 ? " restored" : "";
              return `link census ${Be[15&ee]} linked ${ie(22,8)} failed ${ie(4,6)} retried ${ie(10,6)} fallback ${ie(16,6)}${He}`
            }(ie);
            return {
              words: ` ${ee}`,
              instance: String(15 & ie),
              group: "link census",
              gpuDetails: {
                linkCensus: ee
              }
            }
          }
          const He = de(ze, ie);
          return {
            words: ` ${He}`,
            instance: String(ie),
            group: String(ee),
            gpuDetails: {
              serialLinks: He
            }
          }
        }
        case ye.o.RenderGlErrorAfterRestore: {
          const He = de(Oe, 65535 & ie),
            ye = ie >>> 16,
            be = 65535 !== ye;
          return {
            words: ` ${He}${be?` program ${(0,Me.d)(ye)}`:""}`,
            instance: String(ie),
            group: String(ee),
            gpuDetails: be ? {
              glError: He,
              program: String(ye)
            } : {
              glError: He
            }
          }
        }
        default:
          return null
      }
    }
    const Ze = 2,
      we = new Map;

    function De(ee) {
      let {
        group: ie,
        instance: He
      } = ee, ye = we.get(ie);
      return void 0 === ye && (ye = [], we.set(ie, ye)), !ye.includes(He) && (ye.length >= Ze || (ye.push(He), !1))
    }

    function Pe() {
      return we.size > 0
    }

    function Ae() {
      we.clear()
    }
  },
  41855: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      f: () => Me
    });
    var ye = He(41864);
    const be = new WeakSet;
    const Me = {
        webgpu: async () => (function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === ee || be.has(ee.prototype)) return;
          be.add(ee.prototype);
          const ie = ee.prototype.requestDevice;
          ee.prototype.requestDevice = function(ee) {
            var He;
            const be = null !== (He = null === ee || void 0 === ee ? void 0 : ee.requiredLimits) && void 0 !== He ? He : {},
              Me = Object.keys(be).filter((ee => !(ee in this.limits)));
            if (0 === Me.length) return ie.call(this, ee);
            const Ke = Object.fromEntries(Object.entries(be).filter((ee => {
              let [ie] = ee;
              return ie in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${Me.join(", ")}`), (0, ye.reportDroppedRequiredLimits)(Me), ie.call(this, {
              ...ee,
              requiredLimits: Ke
            })
          }
        }(), (await He.e(8).then((() => He(54203)))).bloxdWasmWebgpu),
        webgl: async () => (await He.e(6).then((() => He(54212)))).bloxdWasmWebgl,
        webgl1: async () => (await He.e(7).then((() => He(54223)))).bloxdWasmWebgl1
      },
      Ke = async () => (await He.e(5).then((() => He(54238)))).compileAnimationPackInWasm
  },
  41798: (ee, ie, He) => {
    He.d(ie, {
      e: () => Xe,
      i: () => pe,
      j: () => ge
    });
    var ye = He(7276),
      be = He(27),
      Me = He(4662),
      Ke = He(5279),
      Ue = He(7268),
      Fe = He(41807);

    function Je(ee, ie) {
      const He = (0, Ue.d)(ie.variants);
      return ee.setShaderPack(He.variantFlags, He.hooks, He.moduleCodes, (0, Fe.x)(ie.layers), Fe.n[ie.policy], ie.keepCircleShadows)
    }
    const oe = 0,
      Re = 1,
      ke = 2,
      qe = "shaderPack:failedToCompile",
      fe = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      Te = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function pe(ee, ie) {
      var He;
      const ye = null !== (He = null === ee || void 0 === ee ? void 0 : ee.reason) && void 0 !== He ? He : "none";
      return fe.has(ye) ? {
        messageKey: ie ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === ye && "override" === (null === ee || void 0 === ee ? void 0 : ee.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Te.has(ye) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class Xe extends Error {
      constructor(ee) {
        super(`the shader pack can't run in this game: ${ee}`), this.messageKey = ee, this.name = "ShaderPackJoinError"
      }
    }
    const ze = "strict";
    class Be {
      constructor(ee) {
        this.deps = ee, this.pagePack = void 0, this.loaded = null, this.policy = ze, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = ee.load().catch((ie => (ee.warn("the shader pack could not load: the game draws without it", ie), {
          status: "none"
        }))).then((ee => (this.loaded = ee, "active" === ee.status && (this.handOverToPreviews(ee), null !== ee.harnessPolicy && (this.policy = ee.harnessPolicy, this.handOver())), ee)))
      }
      async join(ee) {
        this.leave();
        const ie = this.game,
          [He, be] = await Promise.all([this.pagePack, this.policyOf(ee)]);
        if (ie !== this.game || "none" === He.status) return null;
        const Me = "active" === He.status ? He.pack.variants : He.variants,
          Ke = (0, ye.l)(Me, be);
        if (Ke && "active" === He.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Ke) {
          const ee = this.cantRun(He, be);
          if (null !== ee) return ee
        } else if ("blocked" === He.status || null === this.deps.core) return null;
        return this.policy = be, this.handOver(), Ke && this.refused ? qe : (this.joined = !0, this.offInThisGame = !Ke, null)
      }
      async replay(ee) {
        const ie = await this.join(ee);
        null === ie ? this.playable() : this.deps.failInGame(ie)
      }
      cantRun(ee, ie) {
        const {
          core: He,
          noWebGpu: ye
        } = this.deps;
        if ("blocked" === ee.status) {
          return "shaderPack:failedUnchecked" === ee.messageKey && null === He && ye.noAdapter ? ye.messageKey : ee.messageKey
        }
        return this.refused || this.failedPolicies.has(ie) ? qe : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var ee;
        return this.runsInJoinedGame() && "active" === (null === (ee = this.loaded) || void 0 === ee ? void 0 : ee.status) ? function(ee, ie) {
          const He = ee.filter((ee => (0, ye.l)([ee], ie))),
            be = ee => He.some((ie => ie[ee]));
          return {
            sceneDepth: be("sceneDepth"),
            sunShadow: be("sunShadow"),
            airShadow: be("airShadow")
          }
        }(this.loaded.pack.variants, this.policy) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(qe) : (null !== this.couldntRun ? this.notify(Me.c, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.policy) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(ee) {
        for (const {
            code: ie,
            detail: He
          }
          of ee)
          if (ie === Ke.o.RenderShaderPackNotRun) switch (255 & He) {
            case oe:
              this.refused = !0, this.failed();
              break;
            case Re:
              this.failedPolicies.add(this.policy), this.failed();
              break;
            case ke:
              this.failedModelPolicies.add(this.policy), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(qe) : this.failedWhileJoining = !0)
      }
      fail(ee) {
        this.leave(), this.deps.failInGame(ee)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(ee, ie) {
        const He = this.game;
        this.deps.notify(ee, (() => He === this.game && this.joined), ie)
      }
      handOver() {
        var ee;
        const {
          core: ie
        } = this.deps;
        null !== ie && "active" === (null === (ee = this.loaded) || void 0 === ee ? void 0 : ee.status) && (Je(ie, {
          ...this.loaded.pack,
          policy: this.policy
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(ee) {
        let {
          pack: ie,
          harnessPolicy: He
        } = ee;
        const {
          previews: ye
        } = this.deps;
        null !== ye && Je(ye, {
          ...ie,
          policy: null !== He && void 0 !== He ? He : ze
        })
      }
      policyOf(ee) {
        return this.deps.policyOf(ee).catch((ee => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", ee), ze)))
      }
    }
    const Ee = "wasmShaderPackNotice";

    function ge(ee, ie, He, ye) {
      return be.h.subscribe(Ee, (ee => {
        let {
          translationKey: ie,
          stillCurrent: He,
          reasonKey: ye
        } = ee;
        He() && be.h.yR("chat", (0, Me.j)(ie, ye))
      })), new Be({
        load: Oe,
        policyOf: de,
        core: ee,
        previews: ie,
        noWebGpu: He,
        notify: (ee, ie, He) => {
          const ye = {
            translationKey: ee,
            stillCurrent: ie,
            reasonKey: He
          };
          be.h.yR(Ee, ye, !0)
        },
        failInGame: ee => {
          be.h.yR(Me.g, ee)
        },
        warn: ye
      })
    }
    async function Oe() {
      const [{
        shaderPackPage: ee,
        harnessShaderPackMode: ie
      }, {
        shaderPackTextures: ye
      }] = await Promise.all([He.e(130).then((() => He(40056))), He.e(131).then((() => He(7262)))]), be = await ee.load();
      return "active" !== be.status ? be : {
        status: "active",
        pack: {
          variants: be.pack.variants,
          layers: ye().layers,
          keepCircleShadows: be.pack.keepCircleShadows
        },
        harnessPolicy: ie()
      }
    }
    async function de(ee) {
      var ie;
      const [{
        shaderPackPage: ye,
        harnessShaderPackMode: be
      }, {
        getShaderPackPolicy: Me
      }] = await Promise.all([He.e(130).then((() => He(40056))), He.e(106).then((() => He(44463)))]);
      return await ye.load(), null !== (ie = be()) && void 0 !== ie ? ie : Me(ee)
    }
  },
  41936: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      f: () => pe,
      j: () => Fe,
      l: () => Je,
      o: () => oe,
      q: () => ke
    });
    var ye = He(37049),
      be = He(41941);
    const Me = "atlas:",
      Ke = 3e4;
    class Ue extends Error {
      constructor(ee, ie) {
        super(`fetching ${ee} answered HTTP ${ie}`), this.url = ee, this.status = ie, this.name = "TerrainTextureFetchError"
      }
    }

    function Fe(ee) {
      if (!ee.startsWith(Me)) return null;
      const ie = Number(ee.slice(Me.length));
      return Number.isInteger(ie) && ie >= 0 ? ie : null
    }
    async function Je() {
      const ee = await He.e(228).then((() => He(34995)));
      return {
        atlasSheets: ee.blockAtlasUrls,
        texture: ie => {
          var He, ye, Me;
          return null !== (He = null !== (ye = null !== (Me = ee.animatedBlockTextures[ie]) && void 0 !== Me ? Me : ee.rotatedBlockTextures[ie]) && void 0 !== ye ? ye : be.e[ie]) && void 0 !== He ? He : null
        }
      }
    }
    async function oe(ee) {
      const ie = new AbortController,
        He = setTimeout((() => {
          ie.abort(new DOMException(`${ee} took over ${Ke} ms`, "TimeoutError"))
        }), Ke);
      let ye;
      try {
        const He = await fetch(ee, {
          signal: ie.signal
        });
        if (!He.ok) throw new Ue(ee, He.status);
        ye = await He.blob()
      } finally {
        clearTimeout(He)
      }
      const be = await createImageBitmap(ye, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return ke(be)
      } finally {
        be.close()
      }
    }
    const Re = 8192;

    function ke(ee) {
      const {
        width: ie,
        height: He
      } = ee, be = Math.max(1, Math.min(He, Re)), Me = (0, ye.f)(ie, be, {
        willReadFrequently: !0
      });
      if (!Me) throw new Error("no 2D context to read the texture back");
      Me.globalCompositeOperation = "copy";
      const Ke = new Uint8Array(ie * He * 4);
      for (let ye = 0; ye < He; ye += be) {
        const Ue = Math.min(be, He - ye);
        Me.drawImage(ee, 0, ye, ie, Ue, 0, 0, ie, Ue), Ke.set(Me.getImageData(0, 0, ie, Ue).data, ye * ie * 4)
      }
      return {
        width: ie,
        height: He,
        pixels: Ke
      }
    }
    async function qe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oe;
      const ye = [],
        be = await Promise.all(ee.map((async ee => {
          var be, Ke;
          const Ue = null !== (be = null === (Ke = ie.decoded) || void 0 === Ke ? void 0 : Ke.call(ie, ee)) && void 0 !== be ? be : null,
            Je = null === Ue ? function(ee, ie) {
              if (ee.startsWith(Me)) {
                var He;
                const ye = Fe(ee);
                return null === ye ? null : null !== (He = ie.atlasSheets[ye]) && void 0 !== He ? He : null
              }
              return ie.texture(ee)
            }(ee, ie) : null,
            oe = null !== Ue && void 0 !== Ue ? Ue : null === Je ? null : He(Je);
          if (null === oe) return ye.push({
            name: ee,
            url: Je,
            error: new Error(`no URL for terrain texture ${ee}`)
          }), null;
          try {
            const ie = await oe;
            if (ie.pixels.byteLength !== ie.width * ie.height * 4) throw new Error(`decoded ${ie.pixels.byteLength} bytes for ${ie.width}x${ie.height} texels`);
            return {
              name: ee,
              texture: ie
            }
          } catch (Re) {
            return ye.push({
              name: ee,
              url: Je,
              error: Re
            }), null
          }
        }))),
        Ke = be.filter((ee => null !== ee)),
        Ue = new Uint32Array(2 * Ke.length);
      Ke.forEach(((ee, ie) => {
        let {
          texture: He
        } = ee;
        Ue[2 * ie] = He.width, Ue[2 * ie + 1] = He.height
      }));
      return {
        handOver: {
          names: Ke.map((ee => {
            let {
              name: ie
            } = ee;
            return ie
          })),
          textures: Ke.map((ee => {
            let {
              texture: ie
            } = ee;
            return ie.pixels
          })),
          sizes: Ue
        },
        failures: ye
      }
    }
    const fe = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Te() {}
    class pe {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fe,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = ee, this.retryMs = ie, this.keepBelow = He, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Je,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const ye = ++this.started,
          be = {
            decode: He.decode,
            wholeAtlas: He.wholeAtlas
          };
        return this.loadAndHandOver(ie, be, ee, (() => {
          var ee;
          return ye < this.landed || !1 === (null === (ee = He.wanted) || void 0 === ee ? void 0 : ee.call(He))
        }), {
          onTaken: (ee, He) => {
            this.landed = ye, this.current = {
              mine: ye,
              sources: ie,
              load: be,
              KR: ee,
              failed: He
            }
          }
        })
      }
      restore(ee) {
        var ie;
        const He = this.current;
        if (null === He) return Promise.resolve(null);
        if ((null === (ie = this.restoring) || void 0 === ie ? void 0 : ie.mine) === He.mine) return this.restoring.done;
        const ye = {
          mine: He.mine,
          done: this.restoreLanded(He, ee).finally((() => {
            this.restoring === ye && (this.restoring = null)
          }))
        };
        return this.restoring = ye, ye.done
      }
      async restoreLanded(ee, ie) {
        const He = () => this.landed !== ee.mine,
          {
            KR: ye
          } = ee;
        if (null !== ye) return this.stopped() ? null : this.core.setTerrainTextures(ye.names, ye.textures, ye.sizes);
        let be = ie;
        for (let Me = 0;; Me++) {
          const ie = this.retryMs.at(Me),
            ye = {
              allOrNothingExcept: void 0 === ie ? void 0 : ee.failed
            },
            Ke = await this.loadAndHandOver(ee.sources, ee.load, be, He, ye);
          if (!1 !== Ke || void 0 === ie || this.stopped()) return Ke;
          if (be = Te, await new Promise((ee => {
              setTimeout(ee, ie)
            })), He()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Me = this.core.terrainTextureNames();
        var Ke;
        if (0 === Me.length) return null === (Ke = be.onTaken) || void 0 === Ke || Ke.call(be, null, new Set), !0;
        let Ue, Je;
        try {
          Ue = await ee(), Je = await qe(Me, Ue, ie.decode)
        } catch (pe) {
          return ye() ? null : (He({
            name: null,
            url: null,
            error: pe
          }), !1)
        }
        if (ye() || this.stopped()) return null;
        for (const Fe of Je.failures) He(Fe);
        const oe = be.allOrNothingExcept;
        if (void 0 !== oe && Je.failures.some((ee => {
            let {
              name: ie
            } = ee;
            return null === ie || !oe.has(ie)
          })) || !0 === ie.wholeAtlas && Je.failures.some((ee => {
            let {
              name: ie
            } = ee;
            return null === ie || null !== Fe(ie)
          }))) return !1;
        const {
          handOver: Re
        } = Je, ke = function(ee) {
          return ee.textures.reduce(((ee, ie) => ee + ie.byteLength), 0)
        }(Re) < this.keepBelow, fe = this.core.setTerrainTextures(Re.names, Re.textures, Re.sizes, ke ? void 0 : () => {
          !async function(ee, ie) {
            await ie;
            for (const {
                buffer: ye
              }
              of ee) {
              const ee = ye;
              var He;
              if (!ee.detached) null === (He = ee.transfer) || void 0 === He || He.call(ee, 0)
            }
          }(Re.textures, Ue.heldUntil)
        });
        if (fe) {
          var Te;
          const ee = new Set(Je.failures.flatMap((ee => {
            let {
              name: ie
            } = ee;
            return null === ie ? [] : [ie]
          })));
          null === (Te = be.onTaken) || void 0 === Te || Te.call(be, ke ? Re : null, ee)
        }
        return fe
      }
    }
  },
  34815: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      d: () => Re,
      e: () => oe
    });
    var ye = He(260),
      be = He(97),
      Me = He(123),
      Ke = He(120),
      Ue = He(643);
    const Fe = new Set(["mali_bifrost"]);

    function Je() {
      if (Ue.g) return;
      const ee = (0, be.pageOperatingSystem)();
      if ("android" !== ee && "windows" !== ee || (0, Ue.d)("webgl_default")) return;
      if ("windows" === ee) return ee => "qualcomm" === (0, be.normaliseGpuVendor)((0, Ke.e)(ee).vendor);
      const ie = (0, Me.p)(),
        He = null === ie ? (0, ye.m)() : (0, ye.i)(ie.vendor, ie.renderer);
      return null !== He && Fe.has(He) ? ee => (0, ye.k)((0, Ke.e)(ee).vendor, He) : void 0
    }

    function oe(ee, ie) {
      return ee ? () => !0 : ie()
    }
    async function Re(ee) {
      try {
        const ie = oe(ee, Je),
          He = navigator.gpu;
        if (void 0 === ie || void 0 === He) return !1;
        const ye = await (0, Ke.q)(He, {
          seed: !1,
          compatibility: ie
        });
        return "string" !== typeof ye && ye.compatibility && !(0, Ke.l)(ye.adapter)
      } catch (ie) {
        return console.error("WebGPU compatibility-mode adapter request failed.", ie), !1
      }
    }
  },
  41882: (ee, ie, He) => {
    He.d(ie, {
      b: () => Fe,
      d: () => Je
    });
    var ye = He(97),
      be = He(39553);
    const Me = "webgpuPipeline";

    function Ke(ee) {
      return ee.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let Ue = null;

    function Fe() {
      if (null === Ue) try {
        ee = (0, ye.getBrowserName)(), ie = (0, ye.getBrowserVersion)(), He = (0, ye.getOperatingSystem)(), be = (0, ye.getOperatingSystemVersion)(), Ue = `${ee.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===ie?"unknown":Ke(ie)}-${He}${void 0===be?"":`_${Ke(be)}`}`
      } catch (Me) {
        console.warn("The user agent couldn't be read for its browser code", Me), Ue = "unknown"
      }
      var ee, ie, He, be;
      return Ue
    }

    function Je() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const ie = `WGPU-${Fe()}`,
        ye = (ee, ye) => {
          const {
            reason: Ke,
            message: Ue
          } = ye;
          if ((0, be.m)(String(Ue))) return;
          const Fe = {
            pipeline: null !== ee && void 0 !== ee ? ee : "",
            reason: String(Ke),
            browserMessage: String(Ue)
          };
          Promise.resolve().then((() => He(41864))).then((ee => {
            let {
              reportCrash: He
            } = ee;
            He({
              kind: "coreError",
              code: ie,
              site: Me,
              fatal: !1,
              message: `${Fe.pipeline} ${Fe.reason}: ${Fe.browserMessage}`,
              details: Fe,
              error: ye
            })
          })).catch((ee => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", ee)
          }))
        },
        Ke = ee.createRenderPipelineAsync;
      ee.createRenderPipelineAsync = function(ee) {
        return Ke.call(this, ee).catch((ie => {
          throw ye(ee.label, ie), ie
        }))
      };
      const Ue = ee.createComputePipelineAsync;
      ee.createComputePipelineAsync = function(ee) {
        return Ue.call(this, ee).catch((ie => {
          throw ye(ee.label, ie), ie
        }))
      }
    }
  },
  41844: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      e: () => Fe
    });
    var ye = He(123);
    let be = !1;

    function Me() {
      let ee = null;
      try {
        return ee = document.createElement("canvas").getContext("webgl2"), null !== ee
      } catch {
        return !1
      } finally {
        try {
          var ie, He;
          null === (ie = ee) || void 0 === ie || null === (He = ie.getExtension("WEBGL_lose_context")) || void 0 === He || He.loseContext()
        } catch {}
      }
    }

    function Ke() {
      "hidden" === document.visibilityState && (be = !1, document.removeEventListener("visibilitychange", Ke))
    }

    function Ue() {
      be || "visible" !== document.visibilityState || !(0, ye.t)() && !Me() || (be = !0, document.addEventListener("visibilitychange", Ke))
    }

    function Fe() {
      return be || Me()
    }
  },
  41972: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bloxd_wasm_models_bg.e21e4a54752216afcd2d.wasm"
  },
  41963: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bloxd_wasm_workers_bg.007bf444610b634de8e6.wasm"
  },
  41955: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      e: () => ye
    });
    const ye = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new He.U(He(41963))
      }
    };
    const be = {
      name: "bloxd_wasm_models",
      url: function() {
        return new He.U(He(41972))
      }
    }
  },
  7268: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ee,
      e: () => ge,
      g: () => ze,
      k: () => Xe
    });
    var ye = He(7276);
    const be = 6,
      Me = 3,
      Ke = 1,
      Ue = 2,
      Fe = 4,
      Je = 8,
      oe = 16,
      Re = 32,
      ke = 64,
      qe = 128,
      fe = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Te(ee) {
      if (!ee) return 0;
      const ie = fe.indexOf(ee);
      if (ie <= 0) throw new Error(`"${ee}" is not a shader pack hook function`);
      return ie
    }

    function pe(ee) {
      if (0 === ee) return null;
      const ie = fe[ee];
      if (void 0 === ie) throw new Error(`${ee} is not a shader pack hook function id`);
      return ie
    }

    function Xe(ee) {
      const ie = ye.d.length;
      return {
        strict: ee >= ie,
        program: ye.d[ee % ie]
      }
    }

    function ze(ee) {
      return Number(ee.strict) * ye.d.length + ye.d.indexOf(ee.program)
    }

    function Be(ee) {
      return "" === ee ? [] : ee.split(" ")
    }

    function Ee(ee) {
      const ie = {
        variantFlags: new Uint8Array(be),
        hooks: new Uint8Array(be * Me),
        moduleCodes: Array(be).fill(""),
        reads: Array(2 * be).fill("")
      };
      for (const He of ee) {
        const ee = ze(He.key),
          ye = (ee, ie) => null === He.hooks.surface || He.reads.fragment.includes(ee) ? 0 : ie;
        ie.variantFlags[ee] = (He.sceneDepth ? Ke : 0) | (He.movesVertices ? Ue : 0) | (He.sunShadow ? Fe : 0) | (He.airShadow ? Je : 0) | (He.discards ? oe : 0) | ye("localPosition", Re) | ye("enchantSpeed", ke) | ye("enchantTier", qe), ie.hooks[ee * Me] = Te(He.hooks.vertex), ie.hooks[ee * Me + 1] = Te(He.hooks.surface), ie.hooks[ee * Me + 2] = Te(He.hooks.light), ie.moduleCodes[ee] = He.moduleCode, ie.reads[2 * ee] = He.reads.vertex.join(" "), ie.reads[2 * ee + 1] = He.reads.fragment.join(" ")
      }
      return ie
    }

    function ge(ee) {
      const {
        hooks: ie,
        moduleCodes: He,
        reads: ye
      } = ee;
      return Array.from(ee.variantFlags, ((ee, be) => {
        const Re = be * Me;
        return {
          key: Xe(be),
          hooks: {
            vertex: pe(ie[Re]),
            surface: pe(ie[Re + 1]),
            light: pe(ie[Re + 2])
          },
          moduleCode: He[be],
          sceneDepth: 0 !== (ee & Ke),
          sunShadow: 0 !== (ee & Fe),
          airShadow: 0 !== (ee & Je),
          movesVertices: 0 !== (ee & Ue),
          discards: 0 !== (ee & oe),
          reads: {
            vertex: Be(ye[2 * be]),
            fragment: Be(ye[2 * be + 1])
          }
        }
      }))
    }
  },
  41807: (ee, ie, He) => {
    He.d(ie, {
      C: () => fe,
      d: () => be,
      f: () => ye,
      j: () => ke,
      k: () => oe,
      n: () => pe,
      p: () => Me,
      q: () => Ue,
      s: () => Fe,
      u: () => Ke,
      x: () => Te,
      z: () => qe
    });
    const ye = 3,
      be = 0,
      Me = 1,
      Ke = 2,
      Ue = {
        uniform: 3,
        Uq: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Fe = 10,
      Je = "BloxdPackInputs",
      oe = "bloxdPackInputs",
      Re = [{
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
      ke = 80;

    function qe() {
      const ee = Re.map((ee => {
        let {
          name: ie,
          type: He
        } = ee;
        return `    ${ie}: ${He},\n`
      })).join("");
      return `struct ${Je} {\n${ee}}\n@group(${ye}) @binding(${be}) var<uniform> ${oe}: ${Je};\n`
    }

    function fe(ee, ie) {
      const He = new DataView(ee, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, ke),
        [ye, be, Me, Ke, Ue, Fe] = Re;
      He.setFloat32(ye.offset, ie.seconds, !0), He.setUint32(be.offset, ie.lit ? 1 : 0, !0);
      for (let Je = 0; Je < 3; Je++) He.setInt32(Me.offset + 4 * Je, ie.renderOffset[Je], !0), He.setFloat32(Ke.offset + 4 * Je, ie.Sie[Je], !0), He.setFloat32(Ue.offset + 4 * Je, ie.eyePosition[Je], !0), He.setFloat32(Fe.offset + 4 * Je, ie.shadowDirection[Je], !0)
    }

    function Te(ee) {
      const ie = new Uint32Array(Math.max(1, ee.length));
      return ee.forEach(((ee, He) => {
        let {
          id: ye,
          rotation: be
        } = ee;
        ie[He] = 65535 & ye | (3 & be) << 16
      })), ie
    }
    const pe = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);