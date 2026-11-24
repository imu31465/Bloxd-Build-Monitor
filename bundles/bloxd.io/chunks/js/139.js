export const id = 139;
export const ids = [139];
export const modules = {
  40672: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS,
      c: () => IS,
      d: () => xS,
      h: () => bS,
      j: () => NS,
      m: () => uS
    });
    class tS extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function bS(SS) {
      return SS instanceof RangeError && /call stack/i.test(SS.message) || SS instanceof Error && "InternalError" === SS.name && /recursion/i.test(SS.message)
    }
    const XS = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function xS(SS) {
      var HS;
      return SS instanceof WebAssembly.RuntimeError || SS instanceof tS || bS(SS) && XS.test(null !== (HS = SS.stack) && void 0 !== HS ? HS : "")
    }

    function NS(SS, HS) {
      if (xS(SS)) throw SS;
      console.error(HS, SS)
    }

    function qS(SS, HS, gS, bS, XS) {
      if (HS % bS !== 0 || HS + gS > SS.byteLength) throw new tS(`${XS}: ${gS} bytes at ${HS}, ${bS}-aligned, outside ${SS.byteLength} bytes of memory`)
    }

    function uS(SS, HS, gS, tS, bS) {
      return 0 === gS ? null : (qS(HS, gS, tS * SS.BYTES_PER_ELEMENT, SS.BYTES_PER_ELEMENT, bS), new SS(HS, gS, tS))
    }

    function IS(SS, HS, gS, tS, bS) {
      return 0 === HS ? null : (qS(SS, HS, gS, tS, bS), new DataView(SS, HS, gS))
    }
  },
  40755: (SS, HS, gS) => {
    gS.d(HS, {
      B: () => sS,
      F: () => US,
      I: () => FS,
      M: () => tH,
      O: () => MS,
      P: () => pS,
      Q: () => RS,
      S: () => lS,
      W: () => XH,
      Z: () => rS,
      _: () => cS,
      d: () => bH,
      f: () => uH,
      h: () => eS,
      l: () => gH,
      m: () => oS,
      p: () => HH,
      t: () => SH,
      w: () => qH,
      x: () => zS,
      z: () => BS
    });
    var tS = gS(369),
      bS = gS(290),
      XS = gS(299),
      xS = gS(24),
      NS = gS(2953),
      qS = gS(727),
      uS = gS(4652),
      IS = gS(2924),
      fS = gS(3591),
      kS = gS(104),
      aS = gS(364),
      KS = gS(45),
      jS = gS(362),
      GS = gS(122),
      CS = gS(693),
      nS = gS(129),
      PS = gS(125),
      QS = gS(4935),
      DS = gS(40759),
      wS = gS(1920),
      hS = gS(40767),
      ZS = gS(40770);
    const JS = "bloxd-webgpuOffAfterLoss",
      OS = "context:webgl",
      dS = "probe:threw";

    function cS(SS) {
      let HS;
      try {
        HS = SS.getContext("webgl", {
          powerPreference: nS.b
        })
      } catch {
        HS = null
      }
      if (null === HS) return null;
      let gS = null;
      try {
        const SS = HS.getParameter(HS.MAX_TEXTURE_SIZE);
        gS = "number" === typeof SS && SS > 0 ? SS : null
      } catch {
        gS = null
      }
      try {
        var tS;
        null === (tS = HS.getExtension("WEBGL_lose_context")) || void 0 === tS || tS.loseContext()
      } catch {}
      return gS
    }
    const vS = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      ES = "mali_valhall",
      LS = new Set(["nvidia_pre_turing"]);

    function YS(SS) {
      return function(SS) {
        try {
          return SS()
        } catch {
          return null
        }
      }((() => {
        var HS, gS, tS, xS;
        const NS = null !== (HS = null === (gS = SS.info) || void 0 === gS ? void 0 : gS.vendor) && void 0 !== HS ? HS : "";
        return "windows" === (0, kS.getOperatingSystem)() && "" !== NS && "intel" !== (0, kS.normaliseGpuVendor)(NS) ? null : ((0, kS.seedGpuVendor)(NS), qS = (0, bS.f)(), uS = (0, XS.f)(NS, null !== (tS = null === (xS = SS.info) || void 0 === xS ? void 0 : xS.architecture) && void 0 !== tS ? tS : ""), vS.has(qS) ? "android_arm" === qS && uS === ES ? "webgpu_default" : "webgl_default" : null);
        var qS, uS
      }))
    }

    function AS() {
      var SS;
      return {
        gpu: null !== (SS = navigator.gpu) && void 0 !== SS ? SS : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(SS) {
          let HS, gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DS.c;
          try {
            HS = SS.getContext("webgl")
          } catch {
            HS = null
          }
          if (null === HS) return [OS];
          const tS = [];
          try {
            for (const bS of gS.extensions) null === HS.getExtension(bS) && tS.push(bS);
            for (const [bS, XS] of Object.entries(gS.limits)) {
              const SS = HS[bS],
                gS = "number" === typeof SS ? HS.getParameter(SS) : null;
              ("number" !== typeof gS || gS < XS) && tS.push(`limit:${bS}`)
            }
            const SS = HS.getShaderPrecisionFormat(HS.VERTEX_SHADER, HS.HIGH_FLOAT);
            (null === SS || SS.precision < gS.vertexHighFloatBits) && tS.push("precision:vertex_high_float")
          } catch {
            tS.push(dS)
          }
          try {
            var bS;
            null === (bS = HS.getExtension("WEBGL_lose_context")) || void 0 === bS || bS.loseContext()
          } catch {}
          return tS
        }(document.createElement("canvas")),
        offAfterLoss: SS => yS((() => SS ? (0, jS.J)() : xS.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: SS => yS((() => (0, GS.g)(SS))),
        intelGen9: SS => yS((() => (0, GS.n)(SS))),
        storeIntelGen9Verdict: SS => {
          KS.g.setItem(GS.H, SS)
        },
        gpuClassWebGlArm: YS,
        storeGpuClassVerdict: SS => {
          KS.g.setItem(GS.E, SS)
        },
        gpuClassOnWebGl: SS => (0, CS.d)(SS),
        wasmArmOnWebGl: ZS.h,
        storeWasmArmVerdict: SS => {
          KS.g.setItem(GS.N, SS)
        },
        override: () => function() {
          if ((0, NS.q)("render") && "webgl1" === (0, NS.m)("renderer")) return "webgl1";
          const SS = [() => new URLSearchParams(window.location.search).get(IS.e), () => KS.g.getItem(IS.f), () => {
            const SS = localStorage.getItem(JS);
            return null !== SS && localStorage.removeItem(JS), "1" === SS ? "webgl2" : null
          }];
          for (const HS of SS) {
            let SS = null;
            try {
              SS = VS(HS())
            } catch {}
            if (null !== SS) return SS
          }
          return null
        }(),
        claimed: () => VS((0, qS.m)()),
        webGpuSetting: () => {
          const SS = KS.g.getItem(tS.mc);
          return "boolean" === typeof SS ? SS : null
        },
        heldBack: () => CS.g,
        storeHoldbackSpared: SS => {
          KS.g.setItem(GS.C, SS)
        },
        intelGen9OnWebGl: () => CS.j,
        bK: () => yS((() => (0, fS.g)(kS.featureFlags.settings.canUseShaderPacks))),
        windows: () => yS((() => "windows" === (0, kS.getOperatingSystem)()))
      }
    }

    function yS(SS) {
      try {
        return SS()
      } catch {
        return !1
      }
    }

    function VS(SS) {
      return "lite" === SS ? "webgpu" : "webgl2" === SS || "babylon" === SS ? "webgl" : null
    }
    async function iS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AS();
      const HS = await async function(SS) {
        const HS = function(SS) {
            const HS = SS.override(),
              gS = SS.webGpuSetting(),
              tS = null === HS && !0 !== gS && SS.bK(),
              bS = null !== HS || null !== gS || tS ? null : SS.claimed(),
              XS = null !== HS ? "override" : !0 === gS ? "setting" : tS ? "pack" : !1 === gS ? "setting" : null !== bS ? "claim" : "default",
              xS = function(SS) {
                return "override" === SS || "setting" === SS
              }(XS);
            if ("webgl" === HS || "webgl1" === HS || "webgl" === bS || "setting" === XS && !1 === gS) return {
              source: XS,
              asked: xS,
              refused: "not_requested"
            };
            if (!SS.gpu) return {
              source: XS,
              asked: xS,
              refused: "no_webgpu_api"
            };
            const NS = "default" === XS && SS.heldBack();
            if (NS && !SS.windows()) return {
              source: XS,
              asked: xS,
              refused: "webgl_holdback"
            };
            if (!xS && SS.offAfterLoss("pack" === XS)) return {
              source: XS,
              asked: xS,
              refused: NS ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: XS,
              asked: xS,
              heldBack: NS,
              gpu: SS.gpu
            }
          }(SS),
          {
            source: gS
          } = HS,
          tS = !HS.asked,
          bS = "gpu" in HS && HS.heldBack,
          xS = function(SS) {
            return bS && "none" !== SS ? {
              reason: "webgl_holdback",
              adapter: null,
              source: gS
            } : {
              reason: SS,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: gS
            }
          };
        if (!("gpu" in HS)) return xS(HS.refused);
        let NS;
        try {
          NS = await (0, wS.m)((0, PS.q)(HS.gpu, {
            compatibility: HS.asked
          }), xH, `requestAdapter didn't settle in ${xH/1e3} s`)
        } catch {
          return xS("adapter_error")
        }
        if ("string" === typeof NS) return xS(NS);
        const qS = (0, PS.b)(NS);
        if ((0, PS.j)(NS)) return xS("software_adapter", qS);
        const uS = SS.windows() && function(SS) {
          return LS.has((0, XS.f)(SS.vendor, SS.architecture))
        }(qS);
        if (SS.storeHoldbackSpared(uS), bS && !uS) return xS("webgl_holdback");
        const IS = SS.intelGen9(NS);
        SS.storeIntelGen9Verdict(IS);
        const fS = IS ? null : SS.gpuClassWebGlArm(NS);
        SS.storeGpuClassVerdict(null !== fS && void 0 !== fS && fS);
        const kS = SS.wasmArmOnWebGl(qS);
        if (SS.storeWasmArmVerdict(kS), tS && SS.oldIntelDriver(NS)) return xS("old_intel_driver", qS);
        if ("default" === gS && IS && SS.intelGen9OnWebGl()) return xS("intel_gen9", qS);
        if ("default" === gS && null !== fS && SS.gpuClassOnWebGl(fS)) return xS("gpu_class_webgl", qS);
        if ("default" === gS && kS) return xS("gpu_wasm_arm", qS);
        return xS("none", qS)
      }(SS);
      if ("none" === HS.reason) return {
        backend: "webgpu",
        ...HS
      };
      if ("webgl1" !== SS.override() && SS.webgl2()) return {
        backend: "webgl",
        ...HS
      };
      const gS = SS.webgl1();
      return 0 === gS.length ? {
        backend: "webgl1",
        ...HS
      } : {
        missing: gS
      }
    }
    let WS = !1;
    async function zS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AS();
      if (null === SS) return null;
      const gS = await iS(HS);
      return WS = !("missing" in gS) && "webgpu" === gS.backend && "claim" === gS.source, "missing" in gS ? gS : {
        ...gS,
        load: SS[gS.backend]
      }
    }
    async function US(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AS().gpu,
        tS = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== SS.backend) return !1;
      const bS = TS(SS, HS, "indirectDraws", "off", "on");
      if (null !== bS) return bS;
      if (null !== SS.adapter && (0, GS.p)(SS.adapter, tS)) return !0;
      if (null === gS) return !1;
      try {
        var XS;
        const SS = await (0, wS.m)(gS.requestAdapter({
          powerPreference: "low-power"
        }).then((async SS => (null !== SS && await (0, PS.f)(SS), SS))), xH, `the low-power requestAdapter didn't settle in ${xH/1e3} s`);
        return (0, GS.p)(null !== (XS = null === SS || void 0 === SS ? void 0 : SS.info) && void 0 !== XS ? XS : {}, tS)
      } catch (xS) {
        return xS instanceof wS.h
      }
    }

    function pS(SS, HS, gS) {
      if ("webgpu" !== SS.backend) return !1;
      const tS = TS(SS, HS, "terrainFetch", "texture", "storage");
      return null !== tS ? tS : null !== SS.adapter && (0, GS.j)(SS.adapter, gS)
    }

    function sS(SS, HS) {
      if ("webgpu" !== SS.backend) return !1;
      const gS = TS(SS, HS, "skyOrder", "early", "last");
      return null !== gS ? gS : null !== SS.adapter && (0, XS.f)(SS.adapter.vendor, SS.adapter.architecture) === ES
    }

    function BS(SS, HS) {
      if ("webgpu" !== SS.backend) return !1;
      const gS = TS(SS, HS, "uploadCopies", "off", "on");
      return null !== gS ? gS : null !== SS.adapter && "powervr_rogue" === (0, XS.f)(SS.adapter.vendor, SS.adapter.architecture)
    }

    function MS(SS, HS, gS) {
      if ("webgpu" !== SS.backend) return !1;
      const tS = TS(SS, HS, "sceneDepth", "off", "on");
      return null !== tS ? tS : null !== SS.adapter && (0, GS.k)(SS.adapter, gS)
    }

    function FS(SS, HS) {
      return "webgl" === SS.backend ? TS(SS, HS, "instancedTerrain", "1", "0") : null
    }

    function RS(SS, HS) {
      return "webgpu" !== SS.backend || HS && (null === SS.adapter || !(0, jS.N)(SS.adapter))
    }

    function TS(SS, HS, gS, tS, bS) {
      const XS = new URLSearchParams(HS).get(gS),
        xS = null !== XS && void 0 !== XS ? XS : (0, qS.f)(gS);
      return xS !== tS && xS !== bS ? null : (WS ||= null === XS && "webgpu" === SS.backend, xS === tS)
    }

    function oS(SS) {
      return null !== SS && "missing" in SS
    }

    function lS(SS) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !rS()) ? function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xS.b;
        try {
          const gS = "start_failed" === SS || "pipeline_failed" === SS,
            tS = HS.turnOffWebGpuAfterDeviceLoss(gS ? "visible" : (0, jS.p)((0, aS.h)()), gS);
          return WS && (0, qS.u)("webgpuLoss"), HS.isWebGpuOffAfterLoss() && "webgpu" === VS(KS.g.getItem(IS.f)) && KS.g.removeItem(IS.f), (0, NS.q)("webgpuloss") && (0, uS.c)((HS => {
            HS.noteWebGpuLoss("wasm", tS ? SS : `${SS}, which storage didn't keep`, null)
          })), tS
        } catch {
          return !1
        }
      }(SS) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const mS = "framePacing";

    function eS(SS) {
      const HS = new URLSearchParams(SS).get(mS);
      return null !== HS && /^\d{1,9}$/.test(HS) ? Number(HS) : void 0
    }

    function rS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === VS(new URLSearchParams(SS).get(IS.e))
      } catch {
        return !1
      }
    }

    function SH(SS) {
      return !!HH(SS) || SS instanceof Error && !(SS instanceof WebAssembly.RuntimeError) && SS.message.startsWith(`${QS.k.RenderSurfaceUnusable}:`)
    }

    function HH(SS) {
      const {
        name: HS,
        message: gS
      } = null !== SS && void 0 !== SS ? SS : {};
      return "InvalidStateError" === HS && "string" === typeof gS && gS.startsWith("GPUDevice.")
    }

    function gH(SS) {
      const HS = SS;
      return "function" === typeof HS.WgS && "function" === typeof HS.zgS ? HS : null
    }

    function tH(SS) {
      return "function" === typeof SS.zG ? SS : null
    }
    const bH = "openRenderer";

    function XH(SS) {
      const HS = null === SS || void 0 === SS ? void 0 : SS.xXS();
      return void 0 === HS ? void 0 : new Error(HS)
    }
    const xH = 5e3,
      NH = 15e3;

    function qH(SS, HS, gS, tS, bS, XS) {
      return (0, wS.m)(function(SS, HS, gS, tS, bS, XS) {
        return (0, hS.e)(SS, HS, (() => SS.zG(gS, tS, bS, XS.indirectHangs, XS.storagePullBreaks, XS.splitPassBreaks, XS.earlySky, XS.instancedTerrain, XS.cellLight, XS.framesAhead, XS.webGpuRestores, XS.bufferCopiesCrash)))
      }(SS, HS, gS, tS, bS, XS), NH, `${QS.k.RenderSurfaceUnusable}: the renderer didn't open in ${NH/1e3} s`, IH)
    }
    async function uH(SS, HS, gS, tS, bS, XS) {
      if ("function" !== typeof SS.RXS) throw new Error("this core has no set_renderer");
      const xS = await qH(HS, bH, gS, bS, tS, XS);
      try {
        SS.RXS(xS)
      } catch (NS) {
        throw IH(xS), NS
      }
    }

    function IH(SS) {
      try {
        SS.free()
      } catch {}
    }
  },
  40852: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS
    });
    const tS = {
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
  40784: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => KS,
      e: () => jS,
      g: () => kS,
      i: () => fS
    });
    const tS = 2e3,
      bS = "unavailable";
    let XS = () => Promise.resolve().then((() => gS(3087))),
      xS = null,
      NS = null,
      qS = uS();

    function uS() {
      let SS = () => {};
      return {
        promise: new Promise((HS => {
          SS = () => {
            HS(null)
          }
        })),
        resolve: SS
      }
    }

    function IS() {
      if (null === xS) {
        const SS = XS();
        xS = SS, SS.then((HS => {
          xS === SS && (NS = HS)
        }), (() => {
          xS === SS && (xS = null)
        }))
      }
      return xS
    }

    function fS() {
      IS().catch((() => {}))
    }

    function kS() {
      qS.resolve()
    }

    function aS(SS, HS, gS, tS) {
      if (null === SS) return {
        errorKind: HS,
        fingerprint: bS,
        dedupe: `${HS}|${tS}`
      };
      const {
        fingerprint: XS
      } = SS.clientErrorKey(HS, gS, tS);
      return {
        errorKind: HS,
        fingerprint: XS,
        dedupe: XS
      }
    }

    function KS(SS, HS, gS, tS) {
      return null === NS ? tS ? (fS(), aS(null, SS, HS, gS)) : null : aS(NS, SS, HS, gS)
    }
    async function jS(SS, HS, gS) {
      let bS;
      const XS = new Promise((SS => {
        bS = setTimeout((() => {
          SS(null)
        }), tS)
      }));
      try {
        return aS(await Promise.race([IS(), XS, qS.promise]), SS, HS, gS)
      } catch {
        return aS(null, SS, HS, gS)
      } finally {
        clearTimeout(bS)
      }
    }
  },
  40782: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      BUILT_IN_ANIMATIONS_SITE: () => RS,
      CORE_ERRORS_SITE: () => VS,
      EVENT_OVERFLOW_SITE: () => FS,
      FIRST_VIEW_SITE: () => lS,
      JOIN_SITE: () => WS,
      LEAVE_SITE: () => zS,
      MAIN_THREAD_SITE: () => mS,
      MODEL_FEED_SITE: () => US,
      MODEL_POOL_SITE: () => pS,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => HH,
      NON_FATAL_REPORTS_PER_SESSION: () => PH,
      PREVIEW_ANIMATIONS_SITE: () => MS,
      RENDER_RELOAD_SITE: () => BS,
      REQUEST_DEVICE_SITE: () => eS,
      TEXTURE_NAMES_SITE: () => sS,
      TEXTURE_PACK_FEED_SITE: () => TS,
      TEXTURE_PACK_SWAP_SITE: () => oS,
      TurnstilePageError: () => Hg,
      WASM_LOAD_SITE: () => iS,
      countRenderLost: () => Eg,
      crashError: () => JH,
      crashReportsSettled: () => AH,
      flushCrashReports: () => LH,
      joinFailureCode: () => gg,
      lokiTransport: () => bH,
      modelFailureCode: () => ug,
      readTrap: () => UH,
      renderLoss: () => vg,
      renderReloadMessage: () => dg,
      reportCoreErrors: () => iH,
      reportCountedLoadFallback: () => rH,
      reportCrash: () => OH,
      reportDataLoadFailure: () => Vg,
      reportDisconnect: () => Ng,
      reportDracoDecoderFailure: () => ag,
      reportDroppedRequiredLimits: () => mH,
      reportEventOverflow: () => Cg,
      reportFirstViewNoTerrain: () => wg,
      reportGpuFallback: () => lH,
      reportGpuWasmPopulation: () => eH,
      reportLightFault: () => Pg,
      reportMainStall: () => hg,
      reportMemoryShed: () => Dg,
      reportModelFailure: () => Ig,
      reportModelPoolFailure: () => fg,
      reportModelsModuleRetry: () => kg,
      reportPageJoinFailure: () => bg,
      reportReconnectGaveUp: () => qg,
      reportRenderReload: () => Yg,
      reportReplayFault: () => Jg,
      reportStaleBuildReload: () => Wg,
      reportStoppedCore: () => MH,
      reportTerrainTextureFailure: () => Ag,
      reportTexturePackFeedLoadFailure: () => jg,
      reportTexturePackKeptOut: () => Gg,
      reportUnstreamedCoreLoad: () => Sg,
      reportUnsupportedFallback: () => TH,
      reportUnusedSeat: () => xg,
      reportWorkerLost: () => ng,
      reportWorkerStartTimeout: () => Zg,
      reportWorldgenGaveUp: () => Qg,
      reportWorldgenLoadFailure: () => Kg,
      resetCrashReports: () => yH,
      setCrashAdPreload: () => aH,
      setCrashBackend: () => kH,
      setCrashScreen: () => uH,
      setCrashTransport: () => NH,
      showCrash: () => BH,
      showJoinFailure: () => tg,
      showUnsupported: () => RH,
      unknownSkyWords: () => VH
    });
    var tS = gS(1149),
      bS = gS(299),
      XS = gS(3094),
      xS = gS(4438),
      NS = gS(40784),
      qS = gS(4926),
      uS = gS(40789),
      IS = gS(3127),
      fS = gS(38784),
      kS = gS(138),
      aS = gS(751),
      KS = gS(129),
      jS = gS(3133),
      GS = gS(36503),
      CS = gS(1920),
      nS = gS(40802),
      PS = gS(40625),
      QS = gS(40716),
      DS = gS(40723),
      wS = gS(36498),
      hS = gS(3021),
      ZS = gS(3030),
      JS = gS(40818),
      OS = gS(40838),
      dS = gS(40844),
      cS = gS(36877),
      vS = gS(3388),
      ES = gS(36277),
      LS = gS(40767),
      YS = gS(36287),
      AS = gS(40860);
    const yS = "[bloxd-wasm-client]",
      VS = "coreErrors",
      iS = "wasmLoad",
      WS = "join",
      zS = "leave",
      US = "modelFeed",
      pS = "modelWorkerPool",
      sS = "textureNames",
      BS = "renderReload",
      MS = "previewAnimations",
      FS = "eventOverflow",
      RS = "builtInAnimations",
      TS = "texturePackFeed",
      oS = "texturePackSwap",
      lS = "firstView",
      mS = "mainThread",
      eS = "requestDevice",
      rS = 300,
      SH = 64,
      HH = 8;
    let gH = 0;
    const tH = new Set,
      bH = (SS, HS) => {
        const gS = KH[SS.kind],
          tS = {
            backend: IH,
            adPreload: fH
          };
        if (null === gS) return void XH(SS, HS, tS, null);
        const bS = (0, NS.b)(gS, SS.message, SS.code, SS.fatal);
        null === bS ? EH("Loki", (async () => {
          XH(SS, HS, tS, await (0, NS.e)(gS, SS.message, SS.code))
        })) : XH(SS, HS, tS, bS)
      };

    function XH(SS, HS, gS, bS) {
      let {
        backend: xS,
        adPreload: NS
      } = gS;
      const {
        kind: qS,
        code: uS,
        site: IS,
        fatal: fS,
        details: kS
      } = SS;
      if (!fS)
        if (null === bS || (0, XS.d)(bS.errorKind) || tH.has(bS.dedupe)) {
          if (gH >= HH) return;
          gH++
        } else tH.add(bS.dedupe);
      const aS = {
        ...kS,
        kind: qS,
        code: uS,
        site: IS,
        fatal: String(fS),
        backend: xS
      };
      NS && (aS.adPreload = "true"), null !== bS && (aS.errorKind = bS.errorKind, aS.fingerprint = bS.fingerprint), HS instanceof Error && "string" === typeof HS.stack && (aS.causeStack = HS.stack.slice(0, 2e3)), (0, tS.Zj)(JH(SS, HS), aS)
    }
    let xH = bH;

    function NH(SS) {
      const HS = xH;
      return xH = SS, HS
    }
    let qH = () => {};

    function uH(SS) {
      const HS = qH;
      return qH = SS, HS
    }
    let IH = "unpicked",
      fH = !1;

    function kH(SS) {
      IH = SS
    }

    function aH(SS) {
      fH = SS
    }
    const KH = {
        crash: "wasm_load",
        unsupported: "wasm_load",
        model: "wasm_load",
        join: "matchmake_failed",
        pageJoin: null,
        unsupportedFallback: "wasm_load",
        gpuFallback: null,
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
      jH = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        gpuFallback: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      GH = new Set(["unstreamedLoad"]),
      CH = new Set(["linkCensus", "linksReadAfterView"]);
    let nH = !1;
    const PH = 20,
      QH = new Map;
    let DH = 0,
      wH = 0;
    const hH = new Set,
      ZH = new Set;

    function JH(SS, HS) {
      const gS = Object.assign(new Error(`${SS.code}: ${SS.message}`), {
        name: "WasmClientCrash",
        cause: null !== HS && void 0 !== HS ? HS : void 0
      });
      return HS instanceof Error && HS.stack && (gS.stack = HS.stack), gS
    }

    function OH(SS) {
      var HS, tS;
      const {
        kind: bS,
        code: XS,
        site: xS,
        fatal: NS,
        message: qS,
        error: uS
      } = SS, IS = !1 !== SS.toTransport && !GH.has(bS), fS = !NS && IS && !CH.has(bS), kS = {
        kind: bS,
        code: XS,
        site: xS,
        fatal: NS,
        message: qS,
        details: null !== (HS = SS.details) && void 0 !== HS ? HS : {}
      }, aS = `${XS}@${xS}${void 0===SS.instance?"":`#${SS.instance}`}${NS?"!":""}`, KS = (null !== (tS = QH.get(aS)) && void 0 !== tS ? tS : 0) + 1;
      if (QH.set(aS, KS), void 0 !== SS.countAs && 1 === KS && cH(SS.countAs), KS > 1 ? 0 === (KS & KS - 1) && vH((() => {
          console.warn(`${yS} ${XS} at ${xS} reported ${KS} times`)
        })) : fS && DH >= PH ? vH((() => {
          console.warn(`${yS} ${bS} ${XS} at ${xS}: ${qS} (not sent: the session's ${PH} went)`, kS.details, null !== uS && void 0 !== uS ? uS : "")
        })) : (fS && DH++, function(SS, HS, tS, bS) {
          var XS, xS;
          const {
            kind: NS,
            code: qS,
            site: uS,
            fatal: IS,
            message: fS,
            details: kS
          } = SS;
          vH((() => {
            (IS ? console.error : console.warn)(`${yS} ${NS} ${qS} at ${uS}: ${fS}`, kS, null !== HS && void 0 !== HS ? HS : "")
          }));
          const aS = jH[NS],
            KS = null !== (XS = null !== (xS = KH[NS]) && void 0 !== xS ? xS : aS) && void 0 !== XS ? XS : null;
          bS || null === KS || dH((async () => {
            const {
              reportCappedWasmFailure: SS,
              reportUncappedWasmFailure: HS,
              reportWasmFailure: tS
            } = await gS.e(209).then((() => gS(36275)));
            (CH.has(NS) ? HS : void 0 === aS ? tS : SS)(KS, fS, qS)
          }));
          tS && vH((() => {
            xH(SS, HS)
          }))
        }(kS, uS, IS, void 0 !== SS.countAs)), NS) {
        var jS;
        const HS = null !== (jS = SS.screen) && void 0 !== jS ? jS : {
          text: (0, cS.e)(kS, !0),
          reload: !0
        };
        vH((() => {
          qH(HS)
        }))
      }
      return kS
    }

    function dH(SS) {
      EH("counts", (async () => {
        const {
          peekVisitSessionId: HS
        } = await Promise.resolve().then((() => gS(713)));
        null !== HS() && (await SS(), nH = !0)
      }))
    }

    function cH(SS) {
      hH.has(SS.errorKind) || (hH.add(SS.errorKind), dH((async () => {
        const {
          reportClientError: HS
        } = await Promise.resolve().then((() => gS(3083)));
        HS(SS.errorKind, SS.error, SS.code, !0, void 0, SS.fields)
      })))
    }

    function vH(SS) {
      try {
        SS()
      } catch (HS) {
        try {
          console.warn(`${yS} could not send a report`, HS)
        } catch {}
      }
    }

    function EH(SS, HS) {
      try {
        const gS = HS().catch((HS => {
          console.warn(`${yS} could not send the report to ${SS}`, HS)
        })).finally((() => {
          ZH.delete(gS)
        }));
        ZH.add(gS)
      } catch (gS) {
        console.warn(`${yS} could not send the report to ${SS}`, gS)
      }
    }
    async function LH(SS) {
      let HS;
      (0, NS.g)();
      const gS = new Promise((gS => {
        HS = setTimeout(gS, SS)
      }));
      await Promise.race([YH(), gS]), clearTimeout(HS)
    }
    async function YH() {
      if (await Promise.allSettled([...ZH]), nH) try {
        const {
          flushClientAnalyticsEvents: SS
        } = await Promise.resolve().then((() => gS(1581)));
        await SS()
      } catch (SS) {
        console.warn(`${yS} could not send the counts`, SS)
      }
    }
    async function AH() {
      for (; ZH.size > 0;) await Promise.allSettled([...ZH])
    }

    function yH() {
      QH.clear(), DH = 0, nH = !1, gH = 0, tH.clear(), wH = 0, hH.clear(), (0, uS.r)()
    }

    function VH(SS) {
      const HS = "object" === typeof SS && null !== SS ? SS.type : SS;
      return "string" !== typeof HS ? "sky not named" : `sky ${JSON.stringify(Array.from(HS).slice(0,SH).join(""))}`
    }

    function iH(SS, HS, gS, tS) {
      wH += HS;
      for (const {
          code: NS,
          detail: IS
        }
        of SS) {
        var bS, XS, xS;
        const SS = (0, qS.de)(NS),
          HS = (0, uS.d)(NS, IS),
          fS = null === tS || void 0 === tS ? void 0 : tS(NS, IS),
          kS = void 0 !== (null === HS || void 0 === HS ? void 0 : HS.gpuDetails),
          aS = kS ? null === (bS = (0, KS.l)()) || void 0 === bS ? void 0 : bS.renderer : void 0,
          jS = kS ? ` ${(0,uS.l)()}` : "",
          GS = Array.from([aS && `gpu ${(0,uS.s)(aS)}`, fS].filter(Boolean).join("; ")).slice(0, rS).join(""),
          CS = `core error ${SS}${null!==(XS=null===HS||void 0===HS?void 0:HS.words)&&void 0!==XS?XS:""}${jS}${GS?`: ${GS}`:""}`,
          nS = {
            errorCode: String(NS),
            detail: String(IS),
            droppedBefore: String(wH),
            wasmBuild: gS.wasm,
            clientVersion: gS.client,
            ...null === HS || void 0 === HS ? void 0 : HS.gpuDetails
          };
        null !== HS && (0, uS.p)(HS) ? vH((() => {
          console.warn(`${yS} coreError CORE-${SS}: ${CS} (not sent: the session's render warnings of its kind went)`, nS)
        })) : OH({
          kind: zH(NS, IS),
          code: `CORE-${SS}`,
          site: VS,
          fatal: !1,
          message: CS,
          details: nS,
          instance: null !== (xS = null === HS || void 0 === HS ? void 0 : HS.instance) && void 0 !== xS ? xS : WH(NS, IS)
        })
      }
    }

    function WH(SS, HS) {
      return SS === qS.K.RenderDeviceLost && 0 !== (HS & qS.U.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function zH(SS, HS) {
      return SS === qS.K.JobsHeapGaveUp ? "meshHeap" : (0, uS.k)(SS, HS) ? "linksReadAfterView" : (0, uS.h)(SS, HS) ? "linkCensus" : "coreError"
    }

    function UH(SS) {
      return (0, ES.k)(SS instanceof LS.c ? SS.trap : SS, hS.J, hS.bb)
    }
    const pH = "declined=js";

    function sH(SS) {
      return SS ? {
        labels: [pH],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function BH(SS, HS, gS) {
      return FH(SS, HS, gS, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function MH(SS, HS, gS) {
      return FH(SS, HS, gS, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function FH(SS, HS, gS, tS, bS) {
      let {
        memoryDetails: XS = {},
        declined: xS = !1
      } = tS;
      const {
        code: NS,
        details: qS,
        message: uS
      } = (0, nS.L)(SS, HS), IS = [];
      Object.assign(qS, (0, YS.e)(SS.error)), null !== gS && (qS.trapKind = gS.kind, null !== gS.panic && (qS.panic = (0, ES.h)(gS.panic)), gS.refusedBytes > 0 && (qS.refusedAllocation = String(gS.refusedBytes)), IS.push((0, ES.m)(gS.kind, gS.refusedBytes)));
      const fS = sH(xS);
      return OH({
        kind: "crash",
        code: NS,
        site: SS.site,
        fatal: bS,
        message: [...IS, ...fS.labels, uS].join("; "),
        details: {
          ...qS,
          ...fS.details,
          ...XS
        },
        error: SS.error
      })
    }

    function RH(SS, HS, gS) {
      return OH({
        kind: "unsupported",
        code: HS,
        site: iS,
        fatal: !0,
        message: gS,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: SS,
          status: HS
        },
        screen: {
          text: (0, cS.p)(SS),
          reload: "download" === SS
        }
      })
    }

    function TH(SS, HS, gS) {
      return OH({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === HS ? "blocked_after_loss" : "unsupported_js_fallback",
        site: iS,
        fatal: !1,
        message: gS,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: SS,
          status: "unsupported",
          decline: HS,
          fallback: "js"
        }
      })
    }
    const oH = "misdrawn_gpu_js_fallback";

    function lH(SS, HS) {
      return OH({
        kind: "gpuFallback",
        code: oH,
        site: iS,
        fatal: !1,
        message: `the renderer plays ${SS} on ${HS} worse than the JS client`,
        details: {
          gpuFamily: SS,
          backend: HS,
          fallback: "js"
        }
      })
    }

    function mH(SS) {
      return OH({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: eS,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: SS.join(",")
        }
      })
    }

    function eH(SS) {
      EH("counts", (async () => {
        await (0, aS.d)(SS), nH = !0
      }))
    }

    function rH(SS, HS, gS, tS) {
      const bS = sH(tS);
      return OH({
        kind: "unsupported",
        code: HS,
        site: iS,
        fatal: !1,
        message: [...bS.labels, gS].join("; "),
        details: {
          cause: SS,
          status: HS,
          fallback: "js",
          ...bS.details
        }
      })
    }

    function Sg() {
      const {
        code: SS,
        message: HS
      } = vS.d;
      return OH({
        kind: "unstreamedLoad",
        code: SS,
        site: iS,
        fatal: !1,
        message: HS
      })
    }
    class Hg extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function gg(SS) {
      return SS instanceof QS.k ? 0 === SS.code ? "JOIN-matchmake" : `JOIN-${SS.code}` : SS instanceof QS.d ? 0 === SS.code ? `JOIN-${SS.stage}` : `JOIN-${SS.stage}-${SS.code}` : SS instanceof PS.c ? "JOIN-gameCode" : SS instanceof Hg ? "JOIN-turnstilePage" : SS instanceof QS.p ? "JOIN-trafficCheck" : SS instanceof GS.e ? "JOIN-timeout" : "JOIN-network"
    }

    function tg(SS, HS) {
      const gS = (0, YS.g)(SS),
        tS = {
          wasmBuild: HS.wasm,
          clientVersion: HS.client
        },
        bS = SS instanceof Hg ? {
          text: (0, cS.m)(),
          reload: !1
        } : void 0,
        XS = (0, DS.g)(SS),
        xS = "expected" !== XS;
      return OH({
        kind: "join",
        code: gg(SS),
        site: WS,
        fatal: !0,
        message: gS,
        details: tS,
        error: SS,
        screen: bS,
        toTransport: xS,
        instance: XS
      })
    }

    function bg(SS, HS, gS) {
      var tS;
      const bS = (0, DS.g)(SS),
        XS = {
          cause: (SS instanceof QS.d || SS instanceof QS.k) && null !== (tS = SS.serverText) && void 0 !== tS ? tS : "",
          sinceJoinStart: (0, jS.b)(gS.sinceJoinStartMs),
          game: gS.game,
          ...(0, jS.i)(),
          wasmBuild: HS.wasm,
          clientVersion: HS.client
        };
      return OH({
        kind: "pageJoin",
        code: gg(SS),
        site: WS,
        fatal: !1,
        message: (0, YS.g)(SS),
        details: XS,
        error: SS,
        toTransport: "unrecognised" === bS,
        instance: bS
      })
    }
    const Xg = {
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

    function xg(SS, HS) {
      let {
        unused: gS,
        answered: tS,
        heldMs: bS
      } = SS;
      const {
        code: XS,
        message: xS
      } = Xg[gS], NS = {
        unused: gS,
        answered: String(tS),
        heldMs: String(bS),
        wasmBuild: HS.wasm,
        clientVersion: HS.client
      };
      return OH({
        kind: "seat",
        code: XS,
        site: WS,
        fatal: !1,
        message: xS,
        details: NS
      })
    }

    function Ng(SS, HS, gS) {
      var tS;
      let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (tS = SS.name) && void 0 !== tS ? tS : String(SS.code);
      const XS = {
          closeCode: String(SS.code),
          recognised: String(null !== SS.name),
          closeReason: gS.closeReason,
          sinceJoined: (0, jS.b)(gS.sinceJoinedMs),
          game: gS.game,
          ...(0, jS.i)(),
          wasmBuild: HS.wasm,
          clientVersion: HS.client
        },
        xS = null === SS.name && !(0, jS.c)(SS.code);
      return OH({
        kind: "disconnect",
        code: bS,
        site: zS,
        fatal: !1,
        message: "Left room",
        details: XS,
        toTransport: xS
      })
    }

    function qg(SS, HS) {
      const gS = {
        ...(0, IS.l)(SS),
        wasmBuild: HS.wasm,
        clientVersion: HS.client
      };
      return OH({
        kind: "disconnect",
        code: `reconnect-${SS.reason}`,
        site: WS,
        fatal: !1,
        message: "Reconnect failed",
        details: gS
      })
    }

    function ug(SS) {
      return SS.error instanceof ZS.f ? `MODEL-${SS.error.status}` : SS.error instanceof JS.n ? "MODEL-ring" : "MODEL-network"
    }

    function Ig(SS, HS) {
      const gS = ug(SS),
        tS = `model file ${SS.file} ${SS.startup?"(startup) ":""}could not load`,
        bS = {
          file: String(SS.file),
          url: SS.url,
          wasmBuild: HS.wasm,
          clientVersion: HS.client
        };
      return OH({
        kind: SS.startup ? "model" : "modelLate",
        code: gS,
        site: US,
        fatal: SS.startup,
        message: tS,
        details: bS,
        error: SS.error
      })
    }

    function fg(SS, HS) {
      const gS = {
        wasmBuild: HS.wasm,
        clientVersion: HS.client
      };
      return OH({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: pS,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: gS,
        error: SS
      })
    }

    function kg(SS, HS, gS) {
      const tS = {
        delayMs: String(HS),
        wasmBuild: gS.wasm,
        clientVersion: gS.client
      };
      SS instanceof ZS.f && (tS.status = String(SS.status));
      return OH({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: pS,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: tS,
        error: SS
      })
    }

    function ag(SS, HS) {
      const gS = {
        wasmBuild: HS.wasm,
        clientVersion: HS.client
      };
      return OH({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: pS,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: gS,
        error: SS
      })
    }

    function Kg(SS, HS) {
      const gS = {
        wasmBuild: HS.wasm,
        clientVersion: HS.client
      };
      return OH({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: nS.G,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: gS,
        error: SS
      })
    }

    function jg(SS, HS) {
      const gS = {
        wasmBuild: HS.wasm,
        clientVersion: HS.client
      };
      return OH({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: TS,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: gS,
        error: SS
      })
    }

    function Gg(SS, HS, gS, tS) {
      const bS = {
        wasmBuild: tS.wasm,
        clientVersion: tS.client
      };
      return OH({
        kind: "texturePackKeptOut",
        code: (0, xS.g)("wasm", SS, HS),
        site: oS,
        fatal: !1,
        message: HS.detail,
        details: bS,
        error: gS
      })
    }

    function Cg(SS, HS) {
      const {
        frames: gS,
        acks: tS,
        mask: bS,
        outcome: XS
      } = SS, xS = {
        frames: String(gS),
        acks: String(tS),
        mask: String(bS),
        outcome: null !== XS && void 0 !== XS ? XS : "resynced",
        wasmBuild: HS.wasm,
        clientVersion: HS.client
      };
      return OH({
        kind: "recovered",
        code: "rejoined" === XS ? "CORE-eventOverflowRejoin" : "failed" === XS ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: FS,
        fatal: !1,
        message: `the event buffer refused records in ${gS} frames`,
        details: xS
      })
    }

    function ng(SS, HS, gS) {
      return OH({
        kind: "recovered",
        code: "CORE-workerLost",
        site: SS,
        fatal: !1,
        message: `a ${SS} worker was lost`,
        details: {
          reason: HS,
          wasmBuild: gS.wasm,
          clientVersion: gS.client
        }
      })
    }

    function Pg(SS, HS, gS) {
      const tS = {
        wasmBuild: gS.wasm,
        clientVersion: gS.client
      };
      return OH({
        kind: "recovered",
        code: SS,
        site: nS.l,
        fatal: !1,
        message: HS,
        details: tS
      })
    }

    function Qg(SS, HS) {
      const gS = {
        lastReason: SS,
        wasmBuild: HS.wasm,
        clientVersion: HS.client
      };
      return OH({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: nS.G,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: gS
      })
    }

    function Dg(SS, HS, gS) {
      return OH({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: nS.k,
        fatal: !1,
        message: (0, wS.j)(SS) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: SS,
          ...HS,
          wasmBuild: gS.wasm,
          clientVersion: gS.client
        }
      })
    }

    function wg(SS, HS, gS, tS) {
      var bS, XS;
      const xS = (0, uS.n)(),
        NS = {
          game: SS,
          cause: HS,
          census: null === gS ? "none" : JSON.stringify(gS),
          gpu: null !== (bS = null === (XS = (0, KS.l)()) || void 0 === XS ? void 0 : XS.renderer) && void 0 !== bS ? bS : "",
          renderWarned: String(xS),
          browser: (0, uS.l)(),
          wasmBuild: tS.wasm,
          clientVersion: tS.client
        },
        qS = `first view drew no whole terrain in ${OS.i/1e3} s, ${HS}${xS?", render warned":""}`;
      return OH({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: lS,
        fatal: !1,
        message: qS,
        details: NS
      })
    }

    function hg(SS, HS, gS, tS) {
      var XS, xS, NS;
      const qS = null !== (XS = (0, bS.j)(null !== (xS = null === (NS = (0, KS.g)()) || void 0 === NS ? void 0 : NS.renderer) && void 0 !== xS ? xS : null, (0, KS.f)())) && void 0 !== XS ? XS : "unknown",
        IS = null === HS ? "untimed" : `${Math.round(HS)} ms`,
        fS = `frames stalled, ${gS}, gpu ${(0,uS.s)(qS)}, blocking ${IS}, drawn ${Math.round(SS)} ms apart`,
        kS = {
          gpuModel: qS,
          wasmBuild: tS.wasm,
          clientVersion: tS.client
        };
      return OH({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: mS,
        fatal: !1,
        message: fS,
        details: kS
      })
    }

    function Zg(SS, HS, gS) {
      return OH({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: SS,
        fatal: !1,
        message: `a ${SS} worker did not start`,
        details: {
          waitedMs: String(Math.round(HS)),
          wasmBuild: gS.wasm,
          clientVersion: gS.client
        }
      })
    }

    function Jg(SS, HS, gS) {
      return OH({
        kind: "recovered",
        code: "CORE-replayFault",
        site: SS,
        fatal: !1,
        message: `the replay's ${SS} failed`,
        details: {
          wasmBuild: gS.wasm,
          clientVersion: gS.client
        },
        error: HS
      })
    }
    const Og = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function dg(SS, HS, gS) {
      const tS = "lost" === HS && void 0 !== gS ? ` (${gS})` : "";
      return `the ${SS} ${Og[HS]}${tS}`
    }
    const cg = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function vg(SS, HS, gS, tS) {
      var bS;
      let {
        restoreLost: XS = !1,
        adapterRemembered: xS = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, NS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const qS = null === gS || void 0 === gS ? void 0 : gS.message,
        uS = "pipeline_failed" === HS ? HS : gS instanceof CS.h ? "timeout" : (0, fS.n)("frames_refused" === HS, "string" === typeof qS ? qS : ""),
        IS = null === tS.boundAtMs ? "unbound" : `up${(0,fS.e)(NS-tS.boundAtMs)}`,
        kS = null === tS.adapter ? "no adapter" : (0, fS.k)(tS.adapter),
        aS = `${!0===tS.indirectHangs?" ih":""}${!0===tS.restoresSkipped?" nr":""}${XS?" rl":""}${xS?" ar":""}`,
        KS = `${uS} ${(0,CS.l)()?"hidden":"visible"} ${IS}${aS} ${kS}`;
      if ("webgpu" !== SS || "lost" !== HS && "frames_refused" !== HS) return {
        detail: KS,
        count: void 0
      };
      return {
        detail: KS,
        count: {
          errorKind: "render_lost",
          error: new Error(KS),
          code: (0, fS.r)(uS, null !== (bS = tS.boundAtMs) && void 0 !== bS ? bS : NS, NS).code,
          fields: {
            renderBackend: AS.b.webgpu
          }
        }
      }
    }

    function Eg(SS, HS, gS) {
      const {
        count: tS
      } = vg("webgpu", SS, HS, gS);
      void 0 !== tS && cH(tS)
    }
    const Lg = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function Yg(SS, HS, tS) {
      var XS, xS, NS, qS, IS;
      let {
        cause: aS = "lost",
        restoreLost: KS = !1,
        adapterRemembered: jS = !1,
        error: GS,
        context: CS = cg,
        session: nS = Lg
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        detail: PS,
        count: QS
      } = vg(SS, aS, GS, CS, {
        restoreLost: KS,
        adapterRemembered: jS
      }), DS = {
        losses: String(HS),
        cause: aS,
        detail: PS,
        vendor: null !== (XS = null === (xS = CS.adapter) || void 0 === xS ? void 0 : xS.vendor) && void 0 !== XS ? XS : "",
        architecture: null !== (NS = null === (qS = CS.adapter) || void 0 === qS ? void 0 : qS.architecture) && void 0 !== NS ? NS : "",
        indirectHangs: String(CS.indirectHangs),
        restoresSkipped: String(CS.restoresSkipped),
        restoreLost: String(KS),
        adapterRemembered: String(jS),
        samples: String(nS.samples),
        sunShadows: String(nS.sunShadows),
        renderDistance: String(nS.renderDistance),
        gpuFamily: null !== (IS = (0, bS.c)()) && void 0 !== IS ? IS : "",
        browser: (0, uS.l)(),
        siteUsed: kS.r,
        wasmBuild: tS.wasm,
        clientVersion: tS.client
      }, wS = dg(SS, aS), hS = OH({
        kind: "recovered",
        code: "CORE-renderLost",
        site: BS,
        fatal: !1,
        message: wS,
        details: DS,
        error: GS,
        countAs: QS
      });
      return EH("ga", (async () => {
        const {
          logError: HS
        } = await Promise.resolve().then((() => gS(3067))), tS = `${fS.c["webgpu"===SS?"WebGPU":"WebGL2"]}\n Error: ${PS}`;
        HS("warning", tS), HS("error", tS)
      })), hS
    }

    function Ag(SS, HS) {
      var gS, tS;
      const bS = null === SS.name ? "TEXTURE-sources" : null === SS.url ? "TEXTURE-nourl" : SS.error instanceof dS.d ? `TEXTURE-${SS.error.status}` : "TEXTURE-network",
        XS = null === SS.name ? "terrain textures could not load" : `terrain texture ${SS.name} could not load`,
        xS = {
          texture: null !== (gS = SS.name) && void 0 !== gS ? gS : "",
          url: null !== (tS = SS.url) && void 0 !== tS ? tS : "",
          wasmBuild: HS.wasm,
          clientVersion: HS.client
        };
      return OH({
        kind: "terrainTexture",
        code: bS,
        site: nS.D,
        fatal: !1,
        message: XS,
        details: xS,
        error: SS.error
      })
    }
    const yg = {
      previewAnimations: {
        site: MS,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: RS,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Vg(SS, HS, gS, tS) {
      const {
        site: bS,
        prefix: XS,
        name: xS
      } = yg[SS], {
        stage: NS,
        error: qS
      } = gS;
      return OH({
        kind: SS,
        code: "decode" === NS ? null === qS ? `${XS}-decode` : `${XS}-trap` : qS instanceof ZS.f ? `${XS}-${qS.status}` : `${XS}-network`,
        site: bS,
        fatal: !1,
        message: "decode" === NS ? `${xS} did not decode` : `${xS} could not load`,
        details: {
          url: HS,
          wasmBuild: tS.wasm,
          clientVersion: tS.client
        },
        error: qS
      })
    }
    const ig = "staleBuild";

    function Wg(SS, HS, gS) {
      const tS = {
          failedSite: SS.site,
          url: SS.url,
          from: SS.from,
          sameBuild: String(SS.from === HS),
          reloadMs: String(Math.max(0, Date.now() - SS.at)),
          wasmBuild: gS.wasm,
          clientVersion: gS.client
        },
        bS = `reloaded into a newer build after ${SS.site} failed to load: ${SS.error}`;
      return OH({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: ig,
        fatal: !1,
        message: bS,
        details: tS
      })
    }
  },
  40838: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      i: () => bS,
      k: () => xS
    });
    var tS = gS(4935);
    const bS = 3e4;
    class XS {
      constructor(SS) {
        this.tK = SS, this.waitedMs = 0, this.lastMs = null
      }
      frame(SS, HS) {
        if (HS) return !0;
        const gS = null === this.lastMs ? 0 : SS - this.lastMs;
        return this.lastMs = SS, gS <= 900 && (this.waitedMs += gS), !(this.waitedMs < bS) && (this.tK(), !0)
      }
    }

    function xS(SS, HS) {
      return 0 === (SS & tS.V.ChunkRequested) ? "no_chunk_request" : 0 === (SS & tS.V.ChunkStored) ? "chunk_not_stored" : 0 === (SS & tS.V.MeshLanded) ? "not_meshed" : null === HS ? "no_frame_drawn" : 0 === HS.terrainParts ? "no_terrain_parts" : HS.terrainCompiling > 0 ? "terrain_compiling" : HS.terrainOpaque + HS.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40625: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS,
      f: () => CS,
      h: () => jS,
      i: () => GS,
      k: () => kS,
      m: () => aS,
      q: () => IS,
      t: () => fS,
      x: () => KS
    });
    class tS extends Error {
      constructor(SS) {
        super(`the join's code did not load: ${SS instanceof Error?SS.message:String(SS)}`, {
          cause: SS
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === SS || void 0 === SS ? void 0 : SS.request
      }
    }
    let bS = null,
      XS = null,
      xS = null;
    const NS = [];
    let qS = null;

    function uS(SS, HS) {
      try {
        SS(HS)
      } catch (gS) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", gS)
      }
    }

    function IS() {
      return qS
    }

    function fS(SS) {
      NS.push(SS), null !== qS && uS(SS, qS)
    }

    function kS(SS) {
      return bS ??= Promise.all([gS.e(72), gS.e(96), gS.e(221), gS.e(77), gS.e(222), gS.e(198), gS.e(95), gS.e(240), gS.e(269), gS.e(197), gS.e(210), gS.e(189), gS.e(196), gS.e(191), gS.e(142), gS.e(87), gS.e(121), gS.e(247), gS.e(56)]).then((() => gS(42593))).then((HS => {
        HS.loadAudio(SS), qS = HS;
        for (const SS of NS) uS(SS, HS);
        return HS
      })).catch((SS => {
        throw bS = null, SS
      })), bS
    }
    async function aS(SS, HS) {
      try {
        const gS = await kS(SS);
        await gS.loadClientGame(HS)
      } catch (gS) {
        throw new tS(gS)
      }
    }

    function KS(SS, HS) {
      XS = {
        running: SS,
        shell: HS
      }
    }

    function jS() {
      return xS
    }
    async function GS(SS) {
      const HS = XS;
      if ((null === HS || void 0 === HS ? void 0 : HS.running) !== SS) throw new Error("the core's session has ended");
      const gS = await kS(HS.shell.audio).catch((SS => {
        throw new tS(SS)
      }));
      if (null !== xS) return xS;
      if (XS !== HS || SS.isStopped) throw new Error("the core stopped while the game code loaded");
      if (xS = gS.startGameHost(SS, HS.shell), null === xS) throw new Error("the core's shared tables didn't read, so the game can't start");
      return xS
    }

    function CS() {
      null !== xS && (null !== qS ? qS.endGameHost(xS) : xS.closeGame()), xS = null, XS = null
    }
  },
  40759: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    const tS = {
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
  40716: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => uS,
      g: () => XS,
      i: () => xS,
      j: () => bS,
      k: () => aS,
      l: () => IS,
      m: () => qS,
      o: () => kS,
      p: () => fS,
      r: () => NS
    });
    var tS = gS(1923);
    const bS = new Uint8Array([12]),
      XS = 2e3,
      xS = 257;

    function NS(SS) {
      const HS = new Uint8Array(4);
      return new DataView(HS.buffer).setUint32(0, SS, !0), HS
    }
    class qS extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class uS extends Error {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(SS), this.stage = HS, this.code = gS, this.serverText = tS, this.socketOpened = bS, this.name = "JoinError"
      }
    }
    class IS extends Error {
      constructor(SS) {
        super(SS), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class fS extends Error {
      constructor(SS) {
        super((0, tS.d)(SS), {
          cause: SS
        }), this.name = "TrafficCheckError"
      }
    }
    class kS extends Error {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(SS, {
          cause: gS
        }), this.networkLost = HS, this.httpStatus = tS, this.name = "SeatRequestError"
      }
    }
    class aS extends Error {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(SS), this.code = HS, this.serverText = gS, this.name = "MatchmakeError"
      }
    }
  },
  40723: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => aS,
      g: () => kS,
      i: () => KS
    });
    var tS = gS(2748),
      bS = gS(3133),
      XS = gS(39083),
      xS = gS(36503),
      NS = gS(39087),
      qS = gS(40716),
      uS = gS(40727);
    const IS = "seat reservation expired.",
      fS = "early_leave";

    function kS(SS) {
      if (SS instanceof xS.e) return "expected";
      if (SS instanceof qS.o) return SS.networkLost ? "expected" : "unrecognised";
      if (SS instanceof qS.d) {
        if ("closed" === SS.stage && (0 === SS.code || (0, bS.c)(SS.code))) return "expected";
        if ("roomError" === SS.stage && (SS.serverText === IS || SS.serverText === fS)) return "expected"
      }
      return SS instanceof qS.d || SS instanceof qS.k ? null === (0, NS.k)(SS.code).name ? "unrecognised" : "known" : (0, tS.h)(SS) ? "expected" : SS instanceof qS.p || SS instanceof uS.b ? "known" : "unrecognised"
    }

    function aS(SS) {
      return SS instanceof xS.e ? "timedOut" : "expected" !== kS(SS) || (0, tS.h)(SS) || SS instanceof qS.d && 1001 === SS.code ? void 0 : "failed"
    }

    function KS(SS) {
      return SS instanceof qS.d && "attach" !== SS.stage ? (0, XS.d)(SS, "closed" !== SS.stage || SS.socketOpened ? "socket" : "socket_unopened") : SS instanceof qS.o ? {
        at: "seat_lost",
        code: SS.httpStatus
      } : SS instanceof qS.k || SS instanceof xS.e ? (0, XS.d)(SS, SS instanceof xS.e ? SS.leg : "seat") : void 0
    }
  },
  40770: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => qS,
      f: () => NS,
      h: () => uS
    });
    var tS = gS(748),
      bS = gS(751);

    function XS(SS, HS) {
      const gS = null === HS ? void 0 : tS.c.get(HS);
      return "all" === gS || "webgl" === gS && "webgpu" !== SS.backend ? HS : null
    }

    function xS(SS) {
      return "software_adapter" === SS.reason ? null : SS.adapter
    }

    function NS(SS) {
      const HS = (0, tS.m)();
      return null === HS ? null : (0, tS.d)(xS(SS), HS, tS.f)
    }

    function qS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bS.j;
      const tS = XS(SS, HS);
      return null !== tS && "webgl" === SS.backend && gS(tS) ? null : tS
    }

    function uS(SS) {
      const HS = (0, tS.m)();
      return null !== HS && (0, tS.s)((0, tS.d)(SS, HS, tS.h))
    }
  },
  40818: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => qS,
      h: () => uS,
      k: () => aS,
      n: () => fS
    });
    var tS = gS(3030),
      bS = gS(4926),
      XS = gS(40824),
      xS = gS(40832),
      NS = gS(36287);
    const qS = 395,
      uS = 2147483648,
      IS = new Uint8Array(0);
    class fS extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class kS extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class aS {
      constructor(SS, HS, gS) {
        var tS, bS, xS, NS;
        let qS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = SS, this.build = HS, this.onFailure = gS, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.ia = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (tS = qS.fetchFile) && void 0 !== tS ? tS : SS => (0, XS.g)(SS), this.onWritten = null !== (bS = qS.onWritten) && void 0 !== bS ? bS : null, this.onTaken = null !== (xS = qS.onTaken) && void 0 !== xS ? xS : null, this.onPackFileFailed = null !== (NS = qS.onPackFileFailed) && void 0 !== NS ? NS : null, this.startupLeft = new Set(SS.startup);
        for (const XS of SS.startup) this.request(XS)
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
      drawnUrl(SS) {
        return this.drawn.get(SS)
      }
      request(SS) {
        const HS = this.pending.get(SS);
        if (!0 === (null === HS || void 0 === HS ? void 0 : HS.ask)) return;
        const gS = this.Qa(SS, !0);
        gS.recheck = void 0 !== HS;
        const tS = this.drawn.get(SS);
        if (void 0 !== tS) return gS.Ku = !0, gS.recheck = !0, void this.fetch(SS, gS, tS);
        this.fetchWanted(SS, gS)
      }
      async refresh() {
        const SS = ++this.refreshes,
          HS = new Set;
        for (const xS of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const SS of xS) 0 === (SS & XS.f) && HS.add(SS);
        const gS = [...HS];
        let tS;
        try {
          tS = await Promise.all(gS.map((SS => this.wanted(SS))))
        } catch {
          return null
        }
        if (SS !== this.refreshes) return null;
        const bS = {
          resent: 0,
          refetched: 0,
          delivered: gS.filter((SS => this.drawn.has(SS))).length
        };
        return gS.forEach(((SS, HS) => {
          const {
            url: gS,
            inPlaceOf: XS
          } = tS[HS], xS = this.pending.get(SS);
          if (void 0 !== xS) {
            if (xS.Ku || void 0 === xS.url) return void(xS.recheck = !0);
            if (xS.url === gS) return;
            bS.refetched++;
            const HS = this.Qa(SS, xS.ask);
            return HS.recheck = xS.recheck, void this.fetch(SS, HS, gS, XS)
          }
          const NS = this.written.get(SS);
          void 0 === NS ? this.drawn.get(SS) !== (null !== gS && void 0 !== gS ? gS : void 0) && (bS.resent++, this.fetch(SS, this.Qa(SS, !1), gS, XS)) : NS.url !== (null !== gS && void 0 !== gS ? gS : "") && (NS.attempt.recheck = !0)
        })), bS
      }
      taken(SS, HS) {
        const gS = new Set,
          tS = new Set;
        for (const bS of Array.from(HS)) 0 === (bS & uS) ? gS.add(bS) : tS.add((bS & ~uS) >>> 0);
        for (const [bS, XS] of this.written) XS.seq > SS || (this.written.delete(bS), gS.has(XS.seq) ? this.refusedFile(bS, XS) : this.takenFile(bS, XS, !XS.empty && !tS.has(XS.seq)))
      }
      takenFile(SS, HS, gS) {
        const {
          attempt: tS
        } = HS;
        if (gS) {
          var bS;
          this.drawn.set(SS, HS.url), this.undrawn.delete(SS), void 0 !== tS.inPlaceOf ? this.refusedPack.set(SS, tS.inPlaceOf) : tS.Ku || this.refusedPack.delete(SS), null === (bS = this.onTaken) || void 0 === bS || bS.call(this, SS, !0);
          const gS = this.pending.get(SS);
          if (!0 === (null === gS || void 0 === gS ? void 0 : gS.Ku) && gS.url !== HS.url) {
            const gS = this.Qa(SS, !0);
            gS.Ku = !0, gS.recheck = !0, this.fetch(SS, gS, HS.url)
          }
        } else {
          var XS;
          this.drawn.has(SS) || this.undrawn.add(SS), null === (XS = this.onTaken) || void 0 === XS || XS.call(this, SS, !1)
        }
        tS.recheck && this.resendIfChanged(SS)
      }
      refusedFile(SS, HS) {
        var gS, tS;
        if (null === (gS = this.onTaken) || void 0 === gS || gS.call(this, SS, !1), this.refusedPack.set(SS, HS.url), this.pending.has(SS)) return void(null === (tS = this.onPackFileFailed) || void 0 === tS || tS.call(this, SS, KS(HS.url)));
        const bS = this.Qa(SS, HS.attempt.ask);
        bS.recheck = HS.attempt.recheck, this.afterRefusal(SS, bS, HS.url)
      }
      async afterRefusal(SS, HS, gS) {
        var tS;
        let bS;
        try {
          bS = await this.wanted(SS)
        } catch (XS) {
          return void(this.pending.get(SS) === HS && this.giveUp(SS, HS, gS, XS))
        }
        this.pending.get(SS) === HS && (bS.inPlaceOf !== gS ? HS.ask || (null !== (tS = bS.url) && void 0 !== tS ? tS : void 0) !== this.drawn.get(SS) ? this.fetch(SS, HS, bS.url, bS.inPlaceOf) : this.pending.delete(SS) : this.fallBack(SS, HS, gS, KS(gS)))
      }
      Qa(SS, HS) {
        const gS = {
          url: void 0,
          ask: HS,
          Ku: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(SS, gS);
        for (let tS = this.ready.length - 1; tS >= 0; tS--) this.ready[tS].file === SS && this.ready.splice(tS, 1);
        return gS
      }
      async wanted(SS) {
        const HS = await this.files.url(SS);
        return null !== HS && this.refusedPack.get(SS) === HS ? {
          url: await this.files.shippedUrl(SS),
          inPlaceOf: HS
        } : {
          url: HS,
          inPlaceOf: void 0
        }
      }
      fetchWanted(SS, HS) {
        const gS = this.files.url(SS);
        gS instanceof Promise ? gS.then((gS => {
          this.fetchFound(SS, HS, gS)
        }), (gS => {
          this.pending.get(SS) === HS && this.giveUp(SS, HS, "", gS)
        })) : this.fetchFound(SS, HS, gS)
      }
      fetchFound(SS, HS, gS) {
        null !== gS && this.refusedPack.get(SS) === gS ? Promise.resolve(this.files.shippedUrl(SS)).then((tS => {
          this.fetch(SS, HS, tS, gS)
        }), (tS => {
          this.pending.get(SS) === HS && this.giveUp(SS, HS, gS, tS)
        })) : this.fetch(SS, HS, gS)
      }
      fetch(SS, HS, gS, tS) {
        this.pending.get(SS) === HS && (HS.url = gS, HS.inPlaceOf = tS, null !== gS ? this.load(SS, HS, gS) : this.buildFile(SS, HS, "", IS))
      }
      load(SS, HS, gS) {
        const tS = this.ia.get(SS);
        (null === tS || void 0 === tS ? void 0 : tS.url) !== gS ? this.fetchFile(gS).then((tS => {
          var bS, XS;
          this.pending.get(SS) === HS && (this.keptTotal += tS.byteLength - (null !== (bS = null === (XS = this.ia.get(SS)) || void 0 === XS ? void 0 : XS.glb.byteLength) && void 0 !== bS ? bS : 0), this.ia.set(SS, {
            url: gS,
            glb: tS
          }), this.buildFile(SS, HS, gS, tS))
        }), (tS => {
          this.pending.get(SS) === HS && this.fallBack(SS, HS, gS, tS)
        })) : this.buildFile(SS, HS, gS, tS.glb)
      }
      buildFile(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xS = tS.byteLength > 0 && (0, XS.i)(gS) ? (SS | XS.c) >>> 0 : SS;
        this.queueRecord(SS, HS, gS, tS, this.build(xS, tS), bS)
      }
      queueRecord(SS, HS, gS, tS, XS, NS) {
        XS.then((XS => {
          if (this.pending.get(SS) !== HS) return;
          if (bS.u + (0, bS.ue)(XS.byteLength) > bS.Vc) return void this.ringRefused(SS, HS, gS, new fS(`${jS(gS)}'s record is ${XS.byteLength-xS.c} bytes, past the cmd ring's ${bS.Vc}`), NS);
          const qS = {
            file: SS,
            url: gS,
            payload: XS,
            glb: tS,
            attempt: HS
          };
          NS ? this.ready.unshift(qS) : this.ready.push(qS)
        }))
      }
      async fallBack(SS, HS, gS, tS) {
        var bS;
        let XS = null,
          xS = tS;
        try {
          XS = await this.files.shippedUrl(SS)
        } catch (NS) {
          xS = NS
        }
        this.pending.get(SS) === HS && (null !== XS && XS !== gS ? (null === (bS = this.onPackFileFailed) || void 0 === bS || bS.call(this, SS, tS), HS.ask || this.drawn.get(SS) !== XS ? (HS.url = XS, HS.inPlaceOf = gS, this.load(SS, HS, XS)) : this.pending.delete(SS)) : this.giveUp(SS, HS, gS, xS))
      }
      ringRefused(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, XS.i)(gS) ? this.fallBack(SS, HS, gS, tS): this.giveUp(SS, HS, gS, tS, bS)
      }
      giveUp(SS, HS, gS, bS) {
        let XS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: SS,
          url: jS(gS),
          error: bS,
          startup: this.startupLeft.has(SS)
        }), HS.ask || !this.drawn.has(SS) ? (0, tS.T)(bS) ? this.queueRecord(SS, HS, gS, IS, Promise.resolve((0, xS.h)(SS, (0, NS.g)(bS))), XS) : this.buildFile(SS, HS, gS, IS, XS) : this.pending.delete(SS)
      }
      async resendIfChanged(SS) {
        var HS;
        if (0 !== (SS & XS.f)) return;
        let gS;
        try {
          gS = await this.wanted(SS)
        } catch {
          return
        }(null !== (HS = gS.url) && void 0 !== HS ? HS : void 0) === this.drawn.get(SS) || this.pending.has(SS) || this.written.has(SS) || this.fetch(SS, this.Qa(SS, !1), gS.url, gS.inPlaceOf)
      }
      drain(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === SS) return;
        let gS = 0,
          tS = 0;
        for (; tS < this.ready.length && gS < 262144;) {
          const NS = this.ready[tS];
          if (this.written.has(NS.file)) {
            tS++;
            continue
          }
          const IS = this.nextSeq;
          new DataView(NS.payload.buffer, NS.payload.byteOffset, NS.payload.byteLength).setUint32(xS.d, IS, !0);
          const kS = NS.attempt.Ku && NS.glb.byteLength > 0 && this.drawn.get(NS.file) === NS.url;
          if (SS(qS, kS ? 1 : 0, NS.payload)) {
            if (this.nextSeq = IS >= uS - 1 ? 1 : IS + 1, this.ready.splice(tS, 1), gS += NS.payload.byteLength, this.pending.delete(NS.file), this.startupLeft.delete(NS.file), this.written.set(NS.file, {
                seq: IS,
                url: NS.url,
                empty: 0 === NS.glb.byteLength,
                attempt: NS.attempt
              }), NS.glb.byteLength > 0) try {
              var bS;
              null === (bS = this.onWritten) || void 0 === bS || bS.call(this, NS.file, NS.glb)
            } catch (XS) {
              console.warn("ModelFeed: reading the file's images failed", XS)
            }
          } else {
            if (null === HS || 0 === NS.glb.byteLength || HS(NS.payload.byteLength)) return;
            this.ready.splice(tS, 1);
            const SS = new fS(`${jS(NS.url)}'s record is ${NS.payload.byteLength-xS.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(NS.file, NS.attempt, NS.url, SS, !0)
          }
        }
      }
    }

    function KS(SS) {
      return new kS(`presentation refused ${jS(SS)}`)
    }

    function jS(SS) {
      return SS.startsWith("data:") ? `${SS.slice(0,Math.min(Math.max(SS.indexOf(","),5),64))},...` : SS
    }
  },
  40824: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      f: () => XS,
      g: () => IS,
      i: () => NS,
      l: () => uS,
      m: () => qS
    });
    var tS = gS(3030),
      bS = gS(3372);
    const XS = 2147483648,
      xS = 1073741824;

    function NS(SS) {
      return SS.startsWith("data:")
    }

    function qS(SS) {
      let {
        onTableFailed: HS,
        packUrl: gS
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const tS = uS();
      tS.catch((SS => {
        null === HS || void 0 === HS || HS(SS)
      }));
      const bS = async HS => (await tS).fileUrl((HS & ~XS) >>> 0, SS);
      return {
        startup: [],
        url: async SS => {
          if (gS && 0 === (SS & XS)) {
            const HS = await tS,
              bS = HS.filePackName(SS),
              XS = null === bS || "lifeform" === HS.fileSource(SS) ? null : gS(bS);
            if (null !== XS) return XS
          }
          return bS(SS)
        },
        shippedUrl: bS
      }
    }

    function uS() {
      return gS.e(41).then((() => gS(42668)))
    }
    async function IS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return SS.startsWith("data:") ? (0, bS.e)(SS.slice(SS.indexOf(",") + 1), HS) : (0, tS.J)(SS, {
        spare: HS
      })
    }
  },
  40832: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS,
      d: () => IS,
      f: () => aS,
      g: () => GS,
      h: () => KS,
      i: () => kS,
      m: () => jS
    });
    const tS = 826427981,
      bS = 1,
      XS = 2,
      xS = 44,
      NS = 46,
      qS = 58,
      uS = 8,
      IS = 4;

    function fS(SS, HS, gS) {
      const bS = (new TextEncoder).encode(gS),
        XS = uS + 4 * (HS.length + 2),
        xS = new Uint8Array(XS + (bS.byteLength + 3 & -4)),
        NS = new DataView(xS.buffer);
      return NS.setUint32(0, SS, !0), NS.setUint32(uS, tS, !0), HS.forEach(((SS, HS) => {
        NS.setUint32(uS + 4 * (HS + 1), SS, !0)
      })), NS.setUint32(XS - 4, bS.byteLength, !0), xS.set(bS, XS), xS
    }

    function kS(SS, HS) {
      return fS(SS, [XS], HS)
    }

    function aS(SS, HS) {
      return fS(SS, [bS, NS], HS)
    }

    function KS(SS, HS) {
      return fS(SS, [bS, qS], HS)
    }

    function jS(SS, HS) {
      return fS(SS, [bS, xS], HS)
    }

    function GS(SS) {
      const HS = uS;
      if (SS.byteLength < HS + 12) return !1;
      const gS = new DataView(SS.buffer, SS.byteOffset, SS.byteLength);
      return gS.getUint32(HS, !0) === tS && gS.getUint32(HS + 4, !0) === bS && gS.getUint32(HS + 8, !0) === xS
    }
  },
  40767: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      e: () => IS,
      i: () => xS,
      k: () => qS
    });
    var tS = gS(36287);
    class bS extends Error {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${SS}: the module trapped${gS?" in an earlier call":""}: ${String(HS)}`, {
          cause: HS
        }), this.site = SS, this.trap = HS, this.earlier = gS, this.name = "ModuleTrapError", HS instanceof Error && void 0 !== HS.stack && (this.stack = `${this.name}: ${this.message}\n${HS.stack}`)
      }
    }
    const XS = new WeakMap;

    function xS(SS) {
      return XS.has(SS)
    }

    function NS(SS, HS) {
      XS.has(SS) || XS.set(SS, HS)
    }

    function qS(SS, HS) {
      return !!(0, tS.f)(HS) && (NS(SS, HS), !0)
    }
    const uS = [
      ["error", SS => SS.error],
      ["unhandledrejection", SS => SS.reason]
    ];

    function IS(SS, HS, gS) {
      let xS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return XS.has(SS) ? Promise.reject(new bS(HS, XS.get(SS), !0)) : new Promise(((XS, qS) => {
        const IS = gS => {
            NS(SS, gS), aS(), qS(new bS(HS, gS))
          },
          fS = SS => {
            SS instanceof WebAssembly.RuntimeError ? IS(SS) : (aS(), qS(SS))
          },
          kS = uS.map((SS => {
            let [HS, gS] = SS;
            return [HS, SS => {
              const HS = gS(SS);
              (0, tS.f)(HS) && IS(HS)
            }]
          })),
          aS = () => {
            for (const [SS, HS] of kS) null === xS || void 0 === xS || xS.removeEventListener(SS, HS)
          };
        for (const [SS, HS] of kS) null === xS || void 0 === xS || xS.addEventListener(SS, HS);
        let KS;
        try {
          KS = gS()
        } catch (jS) {
          return void fS(jS)
        }
        KS.then((SS => {
          aS(), XS(SS)
        }), fS)
      }))
    }
  },
  40748: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => pS,
      B: () => US,
      F: () => YS,
      J: () => ZS,
      M: () => ES,
      N: () => sS,
      P: () => LS,
      S: () => yS,
      W: () => vS,
      c: () => hS,
      g: () => QS,
      k: () => VS,
      n: () => AS,
      p: () => PS,
      t: () => wS,
      v: () => CS,
      x: () => OS,
      y: () => cS
    });
    var tS = gS(215),
      bS = gS(24),
      XS = gS(3694),
      xS = gS(364),
      NS = gS(45),
      qS = gS(40755),
      uS = gS(36485),
      IS = gS(40773),
      fS = (gS(40805), gS(40860)),
      kS = gS(40795);
    const aS = "wasmJoinBuild";
    let KS = null,
      jS = null,
      GS = null;

    function CS(SS) {
      GS = SS
    }
    let nS = !1;

    function PS() {
      nS = !0
    }

    function QS() {
      return nS
    }
    let DS = !1;

    function wS() {
      DS = !0
    }

    function hS() {
      return DS
    }

    function ZS() {
      return GS
    }
    let JS = null;

    function OS(SS) {
      JS = SS, (0, xS.b)(SS)
    }
    const dS = "wasmClientRenderLost";

    function cS() {
      NS.h.setItem(dS, !0)
    }

    function vS() {
      return !0 === NS.h.getItem(dS)
    }

    function ES() {
      return JS
    }

    function LS() {
      return null === KS && (NS.g.removeItem("wasmLastPick"), NS.g.removeItem("wasmGuessVerdict"), (0, xS.k)(), KS = (0, qS.x)(IS.d).then((SS => (null === SS || (0, qS.m)(SS) || (jS = fS.b[SS.backend], bS.b.followGameGpu("webgpu" === SS.backend ? SS.adapter : null), "webgpu" === SS.backend && (0, kS.f)()), SS)))), KS
    }

    function YS() {
      return jS
    }

    function AS(SS) {
      return SS ? SS.load() : Promise.resolve().then((function() {
        var SS = new Error("Cannot find module '@bloxd/wasm/client'");
        throw SS.code = "MODULE_NOT_FOUND", SS
      })).then((SS => SS.bloxdWasmClient))
    }

    function yS(SS) {
      NS.g.setItem(aS, SS)
    }
    async function VS() {
      if (null === IS.d) return AS(null);
      const SS = NS.g.getItem(aS);
      let HS = "none" === SS ? null : "webgl";
      return null !== SS && "none" !== SS && ("string" === typeof SS && void 0 !== (0, tS.c)(IS.d, SS) ? HS = SS : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(SS)}, is none of this client's: guessing WebGL2's`)), null === HS ? null : IS.d[HS]()
    }
    let iS = null,
      WS = null,
      zS = null;

    function US() {
      return iS ??= LS().then((async SS => {
        const HS = null !== SS && !(0, qS.m)(SS),
          gS = {
            indirectHangs: HS && await (0, qS.F)(SS, window.location.search),
            storagePullBreaks: HS && (0, qS.P)(SS, window.location.search),
            splitPassBreaks: HS && (0, qS.O)(SS, window.location.search),
            earlySky: HS && (0, qS.B)(SS, window.location.search),
            instancedTerrain: HS ? (0, qS.I)(SS, window.location.search) : null,
            cellLight: HS && await (0, XS.j)("cellLight"),
            framesAhead: (0, qS.h)(window.location.search),
            webGpuRestores: !HS || (0, qS.Q)(SS, (0, uS.c)()),
            bufferCopiesCrash: HS && (0, qS.z)(SS, window.location.search)
          };
        return WS = gS.indirectHangs, zS = !gS.webGpuRestores, gS
      })), iS
    }

    function pS() {
      return WS
    }

    function sS() {
      return zS
    }
  },
  41005: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(36322),
      bS = gS(40889),
      XS = gS(36485);

    function xS(SS, HS) {
      return (0, tS.i)(SS, bS.h, {
        ...HS,
        memoryMaximumBytes: (0, XS.o)()
      })
    }
  },
  40789: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => hS,
      h: () => nS,
      k: () => CS,
      l: () => wS,
      n: () => dS,
      p: () => OS,
      r: () => cS,
      s: () => QS
    });
    var tS = gS(4935),
      bS = gS(40795);
    const XS = 1,
      xS = 18,
      NS = 19,
      qS = 20,
      uS = {
        [XS]: "link",
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
        [xS]: "retry linked",
        [NS]: "fallback linked",
        [qS]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function IS(SS, HS, gS) {
      return SS === xS ? "program retry" : SS === XS ? "program link" : SS === NS || SS === qS ? `program ${HS} ${gS}` : "program"
    }
    const fS = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      kS = {
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
      aS = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      KS = {
        11: "none read after view",
        12: "some read after view"
      },
      jS = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...KS
      },
      GS = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function CS(SS, HS) {
      return SS === tS.k.RenderSerialLinks && void 0 !== KS[HS]
    }

    function nS(SS, HS) {
      return SS === tS.k.RenderSerialLinks && void 0 !== GS[15 & HS]
    }
    const PS = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function QS(SS) {
      return String(SS).replace(/\d/g, (SS => String.fromCharCode(97 + Number(SS))))
    }

    function DS(SS, HS) {
      var gS;
      return null !== (gS = SS[HS]) && void 0 !== gS ? gS : QS(HS)
    }

    function wS() {
      return QS((0, bS.d)())
    }

    function hS(SS, HS) {
      switch (SS) {
        case tS.k.RenderSceneRowNotDrawn:
          return {
            words: ` ${DS(kS,HS)}`, instance: String(HS), group: String(SS)
          };
        case tS.k.RenderChunkMeshNotDrawn: {
          const gS = 0 === (128 & HS) ? "" : " shortage",
            tS = HS >>> 8;
          return {
            words: ` ${DS(aS,127&HS)}${gS}${0===tS?"":` kind ${QS(tS)}`}`,
            instance: String(HS),
            group: String(SS)
          }
        }
        case tS.k.RenderInternal: {
          const gS = DS(fS, 255 & HS),
            tS = HS >>> 8 & 255;
          if (0 === tS) return {
            words: ` ${gS}`,
            instance: String(HS),
            group: String(SS)
          };
          const bS = DS(uS, tS),
            XS = HS >>> 16;
          return {
            words: ` ${gS} ${bS} program ${QS(XS)}`,
            instance: `${gS} ${bS} ${XS}`,
            group: IS(tS, bS, gS),
            gpuDetails: {
              programFailure: bS,
              program: String(XS)
            }
          }
        }
        case tS.k.RenderSerialLinks: {
          if (nS(SS, HS)) {
            const SS = function(SS) {
              const HS = (HS, gS) => QS(SS >>> HS & (1 << gS) - 1),
                gS = SS >>> 30 & 1 ? " restored" : "";
              return `link census ${GS[15&SS]} linked ${HS(22,8)} failed ${HS(4,6)} retried ${HS(10,6)} fallback ${HS(16,6)}${gS}`
            }(HS);
            return {
              words: ` ${SS}`,
              instance: String(15 & HS),
              group: "link census",
              gpuDetails: {
                linkCensus: SS
              }
            }
          }
          const gS = DS(jS, HS);
          return {
            words: ` ${gS}`,
            instance: String(HS),
            group: String(SS),
            gpuDetails: {
              serialLinks: gS
            }
          }
        }
        case tS.k.RenderGlErrorAfterRestore: {
          const gS = DS(PS, 65535 & HS),
            tS = HS >>> 16,
            bS = 65535 !== tS;
          return {
            words: ` ${gS}${bS?` program ${QS(tS)}`:""}`,
            instance: String(HS),
            group: String(SS),
            gpuDetails: bS ? {
              glError: gS,
              program: String(tS)
            } : {
              glError: gS
            }
          }
        }
        default:
          return null
      }
    }
    const ZS = 2,
      JS = new Map;

    function OS(SS) {
      let {
        group: HS,
        instance: gS
      } = SS, tS = JS.get(HS);
      return void 0 === tS && (tS = [], JS.set(HS, tS)), !tS.includes(gS) && (tS.length >= ZS || (tS.push(gS), !1))
    }

    function dS() {
      return JS.size > 0
    }

    function cS() {
      JS.clear()
    }
  },
  40773: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      d: () => XS
    });
    var tS = gS(40782);
    const bS = new WeakSet;
    const XS = {
        webgpu: async () => (function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === SS || bS.has(SS.prototype)) return;
          bS.add(SS.prototype);
          const HS = SS.prototype.requestDevice;
          SS.prototype.requestDevice = function(SS) {
            var gS;
            const bS = null !== (gS = null === SS || void 0 === SS ? void 0 : SS.requiredLimits) && void 0 !== gS ? gS : {},
              XS = Object.keys(bS).filter((SS => !(SS in this.limits)));
            if (0 === XS.length) return HS.call(this, SS);
            const xS = Object.fromEntries(Object.entries(bS).filter((SS => {
              let [HS] = SS;
              return HS in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${XS.join(", ")}`), (0, tS.reportDroppedRequiredLimits)(XS), HS.call(this, {
              ...SS,
              requiredLimits: xS
            })
          }
        }(), (await gS.e(8).then((() => gS(42620)))).bloxdWasmWebgpu),
        webgl: async () => (await gS.e(6).then((() => gS(42630)))).bloxdWasmWebgl,
        webgl1: async () => (await gS.e(7).then((() => gS(42647)))).bloxdWasmWebgl1
      },
      xS = async () => (await gS.e(5).then((() => gS(42660)))).compileAnimationPackInWasm
  },
  40727: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => CS,
      e: () => GS,
      h: () => DS
    });
    var tS = gS(6832),
      bS = gS(31),
      XS = gS(4424),
      xS = gS(4935),
      NS = gS(6826),
      qS = gS(40735);

    function uS(SS, HS) {
      const gS = (0, NS.e)(HS.variants);
      return SS.setShaderPack(gS.variantFlags, gS.hooks, gS.moduleCodes, (0, qS.y)(HS.layers), qS.k[HS.Mq], HS.keepCircleShadows)
    }
    const IS = 0,
      fS = 1,
      kS = 2,
      aS = "shaderPack:failedToCompile",
      KS = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      jS = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function GS(SS, HS) {
      var gS;
      const tS = null !== (gS = null === SS || void 0 === SS ? void 0 : SS.reason) && void 0 !== gS ? gS : "none";
      return KS.has(tS) ? {
        messageKey: HS ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === tS && "override" === (null === SS || void 0 === SS ? void 0 : SS.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: jS.has(tS) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class CS extends Error {
      constructor(SS) {
        super(`the shader pack can't run in this game: ${SS}`), this.messageKey = SS, this.name = "ShaderPackJoinError"
      }
    }
    const nS = "strict";
    class PS {
      constructor(SS) {
        this.deps = SS, this.pagePack = void 0, this.loaded = null, this.Mq = nS, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = SS.load().catch((HS => (SS.warn("the shader pack could not load: the game draws without it", HS), {
          status: "none"
        }))).then((SS => (this.loaded = SS, "active" === SS.status && (this.handOverToPreviews(SS), null !== SS.harnessPolicy && (this.Mq = SS.harnessPolicy, this.handOver())), SS)))
      }
      async join(SS) {
        this.leave();
        const HS = this.game,
          [gS, bS] = await Promise.all([this.pagePack, this.policyOf(SS)]);
        if (HS !== this.game || "none" === gS.status) return null;
        const XS = "active" === gS.status ? gS.pack.variants : gS.variants,
          xS = (0, tS.e)(XS, bS);
        if (xS && "active" === gS.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (xS) {
          const SS = this.cantRun(gS, bS);
          if (null !== SS) return SS
        } else if ("blocked" === gS.status || null === this.deps.core) return null;
        return this.Mq = bS, this.handOver(), xS && this.refused ? aS : (this.joined = !0, this.offInThisGame = !xS, null)
      }
      async replay(SS) {
        const HS = await this.join(SS);
        null === HS ? this.playable() : this.deps.failInGame(HS)
      }
      cantRun(SS, HS) {
        const {
          core: gS,
          noWebGpu: tS
        } = this.deps;
        if ("blocked" === SS.status) {
          return "shaderPack:failedUnchecked" === SS.messageKey && null === gS && tS.noAdapter ? tS.messageKey : SS.messageKey
        }
        return this.refused || this.failedPolicies.has(HS) ? aS : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var SS;
        return this.runsInJoinedGame() && "active" === (null === (SS = this.loaded) || void 0 === SS ? void 0 : SS.status) ? function(SS, HS) {
          const gS = SS.filter((SS => (0, tS.e)([SS], HS))),
            bS = SS => gS.some((HS => HS[SS]));
          return {
            sceneDepth: bS("sceneDepth"),
            sunShadow: bS("sunShadow"),
            airShadow: bS("airShadow")
          }
        }(this.loaded.pack.variants, this.Mq) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(aS) : (null !== this.couldntRun ? this.notify(XS.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Mq) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(SS) {
        for (const {
            code: HS,
            detail: gS
          }
          of SS)
          if (HS === xS.k.RenderShaderPackNotRun) switch (255 & gS) {
            case IS:
              this.refused = !0, this.failed();
              break;
            case fS:
              this.failedPolicies.add(this.Mq), this.failed();
              break;
            case kS:
              this.failedModelPolicies.add(this.Mq), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(aS) : this.failedWhileJoining = !0)
      }
      fail(SS) {
        this.leave(), this.deps.failInGame(SS)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(SS, HS) {
        const gS = this.game;
        this.deps.notify(SS, (() => gS === this.game && this.joined), HS)
      }
      handOver() {
        var SS;
        const {
          core: HS
        } = this.deps;
        null !== HS && "active" === (null === (SS = this.loaded) || void 0 === SS ? void 0 : SS.status) && (uS(HS, {
          ...this.loaded.pack,
          Mq: this.Mq
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(SS) {
        let {
          pack: HS,
          harnessPolicy: gS
        } = SS;
        const {
          previews: tS
        } = this.deps;
        null !== tS && uS(tS, {
          ...HS,
          Mq: null !== gS && void 0 !== gS ? gS : nS
        })
      }
      policyOf(SS) {
        return this.deps.policyOf(SS).catch((SS => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", SS), nS)))
      }
    }
    const QS = "wasmShaderPackNotice";

    function DS(SS, HS, gS, tS) {
      return bS.k.subscribe(QS, (SS => {
        let {
          translationKey: HS,
          stillCurrent: gS,
          reasonKey: tS
        } = SS;
        gS() && bS.k.cj("chat", (0, XS.j)(HS, tS))
      })), new PS({
        load: wS,
        policyOf: hS,
        core: SS,
        previews: HS,
        noWebGpu: gS,
        notify: (SS, HS, gS) => {
          const tS = {
            translationKey: SS,
            stillCurrent: HS,
            reasonKey: gS
          };
          bS.k.cj(QS, tS, !0)
        },
        failInGame: SS => {
          bS.k.cj(XS.f, SS)
        },
        warn: tS
      })
    }
    async function wS() {
      const [{
        shaderPackPage: SS,
        harnessShaderPackMode: HS
      }, {
        shaderPackTextures: tS
      }] = await Promise.all([gS.e(115).then((() => gS(39226))), gS.e(116).then((() => gS(6824)))]), bS = await SS.load();
      return "active" !== bS.status ? bS : {
        status: "active",
        pack: {
          variants: bS.pack.variants,
          layers: tS().layers,
          keepCircleShadows: bS.pack.keepCircleShadows
        },
        harnessPolicy: HS()
      }
    }
    async function hS(SS) {
      var HS;
      const [{
        shaderPackPage: tS,
        harnessShaderPackMode: bS
      }, {
        getShaderPackPolicy: XS
      }] = await Promise.all([gS.e(115).then((() => gS(39226))), gS.e(91).then((() => gS(41274)))]);
      return await tS.load(), null !== (HS = bS()) && void 0 !== HS ? HS : XS(SS)
    }
  },
  40844: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      e: () => GS,
      f: () => qS,
      g: () => uS,
      i: () => IS,
      k: () => kS
    });
    var tS = gS(40849),
      bS = gS(40852);
    const XS = "atlas:",
      xS = 3e4;
    class NS extends Error {
      constructor(SS, HS) {
        super(`fetching ${SS} answered HTTP ${HS}`), this.url = SS, this.status = HS, this.name = "TerrainTextureFetchError"
      }
    }

    function qS(SS) {
      if (!SS.startsWith(XS)) return null;
      const HS = Number(SS.slice(XS.length));
      return Number.isInteger(HS) && HS >= 0 ? HS : null
    }
    async function uS() {
      const SS = await gS.e(204).then((() => gS(34324)));
      return {
        atlasSheets: SS.blockAtlasUrls,
        texture: HS => {
          var gS, tS, XS;
          return null !== (gS = null !== (tS = null !== (XS = SS.animatedBlockTextures[HS]) && void 0 !== XS ? XS : SS.rotatedBlockTextures[HS]) && void 0 !== tS ? tS : bS.d[HS]) && void 0 !== gS ? gS : null
        }
      }
    }
    async function IS(SS) {
      const HS = new AbortController,
        gS = setTimeout((() => {
          HS.abort(new DOMException(`${SS} took over ${xS} ms`, "TimeoutError"))
        }), xS);
      let tS;
      try {
        const gS = await fetch(SS, {
          signal: HS.signal
        });
        if (!gS.ok) throw new NS(SS, gS.status);
        tS = await gS.blob()
      } finally {
        clearTimeout(gS)
      }
      const bS = await createImageBitmap(tS, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return kS(bS)
      } finally {
        bS.close()
      }
    }
    const fS = 8192;

    function kS(SS) {
      const {
        width: HS,
        height: gS
      } = SS, bS = Math.max(1, Math.min(gS, fS)), XS = (0, tS.f)(HS, bS, {
        willReadFrequently: !0
      });
      if (!XS) throw new Error("no 2D context to read the texture back");
      XS.globalCompositeOperation = "copy";
      const xS = new Uint8Array(HS * gS * 4);
      for (let tS = 0; tS < gS; tS += bS) {
        const NS = Math.min(bS, gS - tS);
        XS.drawImage(SS, 0, tS, HS, NS, 0, 0, HS, NS), xS.set(XS.getImageData(0, 0, HS, NS).data, tS * HS * 4)
      }
      return {
        width: HS,
        height: gS,
        pixels: xS
      }
    }
    async function aS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IS;
      const tS = [],
        bS = await Promise.all(SS.map((async SS => {
          var bS, xS;
          const NS = null !== (bS = null === (xS = HS.decoded) || void 0 === xS ? void 0 : xS.call(HS, SS)) && void 0 !== bS ? bS : null,
            uS = null === NS ? function(SS, HS) {
              if (SS.startsWith(XS)) {
                var gS;
                const tS = qS(SS);
                return null === tS ? null : null !== (gS = HS.atlasSheets[tS]) && void 0 !== gS ? gS : null
              }
              return HS.texture(SS)
            }(SS, HS) : null,
            IS = null !== NS && void 0 !== NS ? NS : null === uS ? null : gS(uS);
          if (null === IS) return tS.push({
            name: SS,
            url: uS,
            error: new Error(`no URL for terrain texture ${SS}`)
          }), null;
          try {
            const HS = await IS;
            if (HS.pixels.byteLength !== HS.width * HS.height * 4) throw new Error(`decoded ${HS.pixels.byteLength} bytes for ${HS.width}x${HS.height} texels`);
            return {
              name: SS,
              texture: HS
            }
          } catch (fS) {
            return tS.push({
              name: SS,
              url: uS,
              error: fS
            }), null
          }
        }))),
        xS = bS.filter((SS => null !== SS)),
        NS = new Uint32Array(2 * xS.length);
      xS.forEach(((SS, HS) => {
        let {
          texture: gS
        } = SS;
        NS[2 * HS] = gS.width, NS[2 * HS + 1] = gS.height
      }));
      return {
        handOver: {
          names: xS.map((SS => {
            let {
              name: HS
            } = SS;
            return HS
          })),
          textures: xS.map((SS => {
            let {
              texture: HS
            } = SS;
            return HS.pixels
          })),
          sizes: NS
        },
        failures: tS
      }
    }
    const KS = [2e3, 1e4, 3e4, 6e4, 12e4];

    function jS() {}
    class GS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KS,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = SS, this.retryMs = HS, this.keepBelow = gS, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uS,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const tS = ++this.started,
          bS = {
            decode: gS.decode,
            wholeAtlas: gS.wholeAtlas
          };
        return this.loadAndHandOver(HS, bS, SS, (() => {
          var SS;
          return tS < this.landed || !1 === (null === (SS = gS.wanted) || void 0 === SS ? void 0 : SS.call(gS))
        }), {
          onTaken: (SS, gS) => {
            this.landed = tS, this.current = {
              mine: tS,
              sources: HS,
              load: bS,
              ia: SS,
              failed: gS
            }
          }
        })
      }
      restore(SS) {
        var HS;
        const gS = this.current;
        if (null === gS) return Promise.resolve(null);
        if ((null === (HS = this.restoring) || void 0 === HS ? void 0 : HS.mine) === gS.mine) return this.restoring.done;
        const tS = {
          mine: gS.mine,
          done: this.restoreLanded(gS, SS).finally((() => {
            this.restoring === tS && (this.restoring = null)
          }))
        };
        return this.restoring = tS, tS.done
      }
      async restoreLanded(SS, HS) {
        const gS = () => this.landed !== SS.mine,
          {
            ia: tS
          } = SS;
        if (null !== tS) return this.stopped() ? null : this.core.setTerrainTextures(tS.names, tS.textures, tS.sizes);
        let bS = HS;
        for (let XS = 0;; XS++) {
          const HS = this.retryMs.at(XS),
            tS = {
              allOrNothingExcept: void 0 === HS ? void 0 : SS.failed
            },
            xS = await this.loadAndHandOver(SS.sources, SS.load, bS, gS, tS);
          if (!1 !== xS || void 0 === HS || this.stopped()) return xS;
          if (bS = jS, await new Promise((SS => {
              setTimeout(SS, HS)
            })), gS()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const XS = this.core.terrainTextureNames();
        var xS;
        if (0 === XS.length) return null === (xS = bS.onTaken) || void 0 === xS || xS.call(bS, null, new Set), !0;
        let NS, uS;
        try {
          NS = await SS(), uS = await aS(XS, NS, HS.decode)
        } catch (GS) {
          return tS() ? null : (gS({
            name: null,
            url: null,
            error: GS
          }), !1)
        }
        if (tS() || this.stopped()) return null;
        for (const qS of uS.failures) gS(qS);
        const IS = bS.allOrNothingExcept;
        if (void 0 !== IS && uS.failures.some((SS => {
            let {
              name: HS
            } = SS;
            return null === HS || !IS.has(HS)
          })) || !0 === HS.wholeAtlas && uS.failures.some((SS => {
            let {
              name: HS
            } = SS;
            return null === HS || null !== qS(HS)
          }))) return !1;
        const {
          handOver: fS
        } = uS, kS = function(SS) {
          return SS.textures.reduce(((SS, HS) => SS + HS.byteLength), 0)
        }(fS) < this.keepBelow, KS = this.core.setTerrainTextures(fS.names, fS.textures, fS.sizes, kS ? void 0 : () => {
          !async function(SS, HS) {
            await HS;
            for (const {
                buffer: tS
              }
              of SS) {
              const SS = tS;
              var gS;
              if (!SS.detached) null === (gS = SS.transfer) || void 0 === gS || gS.call(SS, 0)
            }
          }(fS.textures, NS.heldUntil)
        });
        if (KS) {
          var jS;
          const SS = new Set(uS.failures.flatMap((SS => {
            let {
              name: HS
            } = SS;
            return null === HS ? [] : [HS]
          })));
          null === (jS = bS.onTaken) || void 0 === jS || jS.call(bS, kS ? fS : null, SS)
        }
        return KS
      }
    }
  },
  40795: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      f: () => qS
    });
    var tS = gS(104);
    const bS = "webgpuPipeline";

    function XS(SS) {
      return SS.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let xS = null;

    function NS() {
      if (null === xS) try {
        SS = (0, tS.getBrowserName)(), HS = (0, tS.getBrowserVersion)(), gS = (0, tS.getOperatingSystem)(), bS = (0, tS.getOperatingSystemVersion)(), xS = `${SS.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===HS?"unknown":XS(HS)}-${gS}${void 0===bS?"":`_${XS(bS)}`}`
      } catch (NS) {
        console.warn("The user agent couldn't be read for its browser code", NS), xS = "unknown"
      }
      var SS, HS, gS, bS;
      return xS
    }

    function qS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const HS = `WGPU-${NS()}`,
        tS = (SS, tS) => {
          const {
            reason: XS,
            message: xS
          } = tS, NS = {
            pipeline: null !== SS && void 0 !== SS ? SS : "",
            reason: String(XS),
            browserMessage: String(xS)
          };
          Promise.resolve().then((() => gS(40782))).then((SS => {
            let {
              reportCrash: gS
            } = SS;
            gS({
              kind: "coreError",
              code: HS,
              site: bS,
              fatal: !1,
              message: `${NS.pipeline} ${NS.reason}: ${NS.browserMessage}`,
              details: NS,
              error: tS
            })
          })).catch((SS => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", SS)
          }))
        },
        XS = SS.createRenderPipelineAsync;
      SS.createRenderPipelineAsync = function(SS) {
        return XS.call(this, SS).catch((HS => {
          throw tS(SS.label, HS), HS
        }))
      };
      const xS = SS.createComputePipelineAsync;
      SS.createComputePipelineAsync = function(SS) {
        return xS.call(this, SS).catch((HS => {
          throw tS(SS.label, HS), HS
        }))
      }
    }
  },
  40905: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/bloxd_wasm_models_bg.4e2a3cdd5086f13dd5bf.wasm"
  },
  40897: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/bloxd_wasm_workers_bg.7c42e93ed496da8125ed.wasm"
  },
  40889: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      h: () => tS
    });
    const tS = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new gS.U(gS(40897))
      }
    };
    const bS = {
      name: "bloxd_wasm_models",
      url: function() {
        return new gS.U(gS(40905))
      }
    }
  },
  6826: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => QS,
      i: () => DS,
      m: () => nS,
      p: () => CS
    });
    var tS = gS(6832);
    const bS = 6,
      XS = 3,
      xS = 1,
      NS = 2,
      qS = 4,
      uS = 8,
      IS = 16,
      fS = 32,
      kS = 64,
      aS = 128,
      KS = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function jS(SS) {
      if (!SS) return 0;
      const HS = KS.indexOf(SS);
      if (HS <= 0) throw new Error(`"${SS}" is not a shader pack hook function`);
      return HS
    }

    function GS(SS) {
      if (0 === SS) return null;
      const HS = KS[SS];
      if (void 0 === HS) throw new Error(`${SS} is not a shader pack hook function id`);
      return HS
    }

    function CS(SS) {
      const HS = tS.c.length;
      return {
        strict: SS >= HS,
        program: tS.c[SS % HS]
      }
    }

    function nS(SS) {
      return Number(SS.strict) * tS.c.length + tS.c.indexOf(SS.program)
    }

    function PS(SS) {
      return "" === SS ? [] : SS.split(" ")
    }

    function QS(SS) {
      const HS = {
        variantFlags: new Uint8Array(bS),
        hooks: new Uint8Array(bS * XS),
        moduleCodes: Array(bS).fill(""),
        reads: Array(2 * bS).fill("")
      };
      for (const gS of SS) {
        const SS = nS(gS.key),
          tS = (SS, HS) => null === gS.hooks.surface || gS.reads.fragment.includes(SS) ? 0 : HS;
        HS.variantFlags[SS] = (gS.sceneDepth ? xS : 0) | (gS.movesVertices ? NS : 0) | (gS.sunShadow ? qS : 0) | (gS.airShadow ? uS : 0) | (gS.discards ? IS : 0) | tS("localPosition", fS) | tS("enchantSpeed", kS) | tS("enchantTier", aS), HS.hooks[SS * XS] = jS(gS.hooks.vertex), HS.hooks[SS * XS + 1] = jS(gS.hooks.surface), HS.hooks[SS * XS + 2] = jS(gS.hooks.light), HS.moduleCodes[SS] = gS.moduleCode, HS.reads[2 * SS] = gS.reads.vertex.join(" "), HS.reads[2 * SS + 1] = gS.reads.fragment.join(" ")
      }
      return HS
    }

    function DS(SS) {
      const {
        hooks: HS,
        moduleCodes: gS,
        reads: tS
      } = SS;
      return Array.from(SS.variantFlags, ((SS, bS) => {
        const fS = bS * XS;
        return {
          key: CS(bS),
          hooks: {
            vertex: GS(HS[fS]),
            surface: GS(HS[fS + 1]),
            light: GS(HS[fS + 2])
          },
          moduleCode: gS[bS],
          sceneDepth: 0 !== (SS & xS),
          sunShadow: 0 !== (SS & qS),
          airShadow: 0 !== (SS & uS),
          movesVertices: 0 !== (SS & NS),
          discards: 0 !== (SS & IS),
          reads: {
            vertex: PS(tS[2 * bS]),
            fragment: PS(tS[2 * bS + 1])
          }
        }
      }))
    }
  },
  40735: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => aS,
      C: () => KS,
      c: () => bS,
      g: () => tS,
      h: () => kS,
      i: () => IS,
      k: () => GS,
      o: () => XS,
      s: () => NS,
      t: () => qS,
      u: () => xS,
      y: () => jS
    });
    const tS = 3,
      bS = 0,
      XS = 1,
      xS = 2,
      NS = {
        uniform: 3,
        Lk: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      qS = 10,
      uS = "BloxdPackInputs",
      IS = "bloxdPackInputs",
      fS = [{
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
      kS = 80;

    function aS() {
      const SS = fS.map((SS => {
        let {
          name: HS,
          type: gS
        } = SS;
        return `    ${HS}: ${gS},\n`
      })).join("");
      return `struct ${uS} {\n${SS}}\n@group(${tS}) @binding(${bS}) var<uniform> ${IS}: ${uS};\n`
    }

    function KS(SS, HS) {
      const gS = new DataView(SS, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, kS),
        [tS, bS, XS, xS, NS, qS] = fS;
      gS.setFloat32(tS.offset, HS.seconds, !0), gS.setUint32(bS.offset, HS.lit ? 1 : 0, !0);
      for (let uS = 0; uS < 3; uS++) gS.setInt32(XS.offset + 4 * uS, HS.renderOffset[uS], !0), gS.setFloat32(xS.offset + 4 * uS, HS.Z6[uS], !0), gS.setFloat32(NS.offset + 4 * uS, HS.eyePosition[uS], !0), gS.setFloat32(qS.offset + 4 * uS, HS.shadowDirection[uS], !0)
    }

    function jS(SS) {
      const HS = new Uint32Array(Math.max(1, SS.length));
      return SS.forEach(((SS, gS) => {
        let {
          id: tS,
          rotation: bS
        } = SS;
        HS[gS] = 65535 & tS | (3 & bS) << 16
      })), HS
    }
    const GS = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);