export const id = 139;
export const ids = [139];
export const modules = {
  40562: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD,
      c: () => RD,
      d: () => rD,
      g: () => sD,
      k: () => LD,
      l: () => gD
    });
    class pD extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function sD(DD) {
      return DD instanceof RangeError && /call stack/i.test(DD.message) || DD instanceof Error && "InternalError" === DD.name && /recursion/i.test(DD.message)
    }
    const KD = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function rD(DD) {
      var zD;
      return DD instanceof WebAssembly.RuntimeError || DD instanceof pD || sD(DD) && KD.test(null !== (zD = DD.stack) && void 0 !== zD ? zD : "")
    }

    function LD(DD, zD) {
      if (rD(DD)) throw DD;
      console.error(zD, DD)
    }

    function cD(DD, zD, wD, sD, KD) {
      if (zD % sD !== 0 || zD + wD > DD.byteLength) throw new pD(`${KD}: ${wD} bytes at ${zD}, ${sD}-aligned, outside ${DD.byteLength} bytes of memory`)
    }

    function gD(DD, zD, wD, pD, sD) {
      return 0 === wD ? null : (cD(zD, wD, pD * DD.BYTES_PER_ELEMENT, DD.BYTES_PER_ELEMENT, sD), new DD(zD, wD, pD))
    }

    function RD(DD, zD, wD, pD, sD) {
      return 0 === zD ? null : (cD(DD, zD, wD, pD, sD), new DataView(DD, zD, wD))
    }
  },
  40634: (DD, zD, wD) => {
    wD.d(zD, {
      $: () => FD,
      B: () => eD,
      D: () => mD,
      G: () => yD,
      J: () => aD,
      N: () => pz,
      R: () => oD,
      V: () => kD,
      X: () => uD,
      ab: () => Kz,
      c: () => sz,
      e: () => gz,
      eb: () => qD,
      gb: () => xD,
      i: () => HD,
      m: () => wz,
      n: () => tD,
      o: () => zz,
      s: () => Dz,
      v: () => cz,
      y: () => ZD
    });
    var pD = wD(338),
      sD = wD(275),
      KD = wD(277),
      rD = wD(20),
      LD = wD(2811),
      cD = wD(676),
      gD = wD(4536),
      RD = wD(2788),
      AD = wD(3462),
      UD = wD(103),
      fD = wD(330),
      ID = wD(35),
      BD = wD(323),
      GD = wD(119),
      hD = wD(629),
      nD = wD(125),
      MD = wD(121),
      OD = wD(4820),
      JD = wD(40636),
      ED = wD(1797),
      QD = wD(40645),
      XD = wD(40654);
    const VD = "bloxd-webgpuOffAfterLoss",
      PD = "context:webgl",
      CD = "probe:threw";

    function xD(DD) {
      let zD;
      try {
        zD = DD.getContext("webgl", {
          powerPreference: nD.b
        })
      } catch {
        zD = null
      }
      if (null === zD) return null;
      let wD = null;
      try {
        const DD = zD.getParameter(zD.MAX_TEXTURE_SIZE);
        wD = "number" === typeof DD && DD > 0 ? DD : null
      } catch {
        wD = null
      }
      try {
        var pD;
        null === (pD = zD.getExtension("WEBGL_lose_context")) || void 0 === pD || pD.loseContext()
      } catch {}
      return wD
    }
    const TD = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      bD = "mali_valhall",
      jD = new Set(["nvidia_pre_turing"]);

    function dD(DD) {
      return function(DD) {
        try {
          return DD()
        } catch {
          return null
        }
      }((() => {
        var zD, wD, pD, rD;
        const LD = null !== (zD = null === (wD = DD.info) || void 0 === wD ? void 0 : wD.vendor) && void 0 !== zD ? zD : "";
        return "windows" === (0, UD.getOperatingSystem)() && "" !== LD && "intel" !== (0, UD.normaliseGpuVendor)(LD) ? null : ((0, UD.seedGpuVendor)(LD), cD = (0, sD.i)(), gD = (0, KD.g)(LD, null !== (pD = null === (rD = DD.info) || void 0 === rD ? void 0 : rD.architecture) && void 0 !== pD ? pD : ""), TD.has(cD) ? "android_arm" === cD && gD === bD ? "webgpu_default" : "webgl_default" : null);
        var cD, gD
      }))
    }

    function SD() {
      var DD;
      return {
        gpu: null !== (DD = navigator.gpu) && void 0 !== DD ? DD : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(DD) {
          let zD, wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JD.d;
          try {
            zD = DD.getContext("webgl")
          } catch {
            zD = null
          }
          if (null === zD) return [PD];
          const pD = [];
          try {
            for (const sD of wD.extensions) null === zD.getExtension(sD) && pD.push(sD);
            for (const [sD, KD] of Object.entries(wD.limits)) {
              const DD = zD[sD],
                wD = "number" === typeof DD ? zD.getParameter(DD) : null;
              ("number" !== typeof wD || wD < KD) && pD.push(`limit:${sD}`)
            }
            const DD = zD.getShaderPrecisionFormat(zD.VERTEX_SHADER, zD.HIGH_FLOAT);
            (null === DD || DD.precision < wD.vertexHighFloatBits) && pD.push("precision:vertex_high_float")
          } catch {
            pD.push(CD)
          }
          try {
            var sD;
            null === (sD = zD.getExtension("WEBGL_lose_context")) || void 0 === sD || sD.loseContext()
          } catch {}
          return pD
        }(document.createElement("canvas")),
        offAfterLoss: DD => iD((() => DD ? (0, BD.G)() : rD.e.isWebGpuOffAfterLoss())),
        oldIntelDriver: DD => iD((() => (0, GD.e)(DD))),
        intelGen9: DD => iD((() => (0, GD.l)(DD))),
        storeIntelGen9Verdict: DD => {
          ID.h.setItem(GD.D, DD)
        },
        gpuClassWebGlArm: dD,
        storeGpuClassVerdict: DD => {
          ID.h.setItem(GD.C, DD)
        },
        gpuClassOnWebGl: DD => (0, hD.d)(DD),
        wasmArmOnWebGl: XD.g,
        storeWasmArmVerdict: DD => {
          ID.h.setItem(GD.L, DD)
        },
        override: () => function() {
          if ((0, LD.t)("render") && "webgl1" === (0, LD.p)("renderer")) return "webgl1";
          const DD = [() => new URLSearchParams(window.location.search).get(RD.b), () => ID.h.getItem(RD.c), () => {
            const DD = localStorage.getItem(VD);
            return null !== DD && localStorage.removeItem(VD), "1" === DD ? "webgl2" : null
          }];
          for (const zD of DD) {
            let DD = null;
            try {
              DD = lD(zD())
            } catch {}
            if (null !== DD) return DD
          }
          return null
        }(),
        claimed: () => lD((0, cD.m)()),
        webGpuSetting: () => {
          const DD = ID.h.getItem(pD.Zb);
          return "boolean" === typeof DD ? DD : null
        },
        heldBack: () => hD.g,
        storeHoldbackSpared: DD => {
          ID.h.setItem(GD.z, DD)
        },
        intelGen9OnWebGl: () => hD.i,
        KI: () => iD((() => (0, AD.h)(UD.featureFlags.settings.canUseShaderPacks))),
        windows: () => iD((() => "windows" === (0, UD.getOperatingSystem)()))
      }
    }

    function iD(DD) {
      try {
        return DD()
      } catch {
        return !1
      }
    }

    function lD(DD) {
      return "lite" === DD ? "webgpu" : "webgl2" === DD || "babylon" === DD ? "webgl" : null
    }
    async function WD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SD();
      const zD = await async function(DD) {
        const zD = function(DD) {
            const zD = DD.override(),
              wD = DD.webGpuSetting(),
              pD = null === zD && !0 !== wD && DD.KI(),
              sD = null !== zD || null !== wD || pD ? null : DD.claimed(),
              KD = null !== zD ? "override" : !0 === wD ? "setting" : pD ? "pack" : !1 === wD ? "setting" : null !== sD ? "claim" : "default",
              rD = function(DD) {
                return "override" === DD || "setting" === DD
              }(KD);
            if ("webgl" === zD || "webgl1" === zD || "webgl" === sD || "setting" === KD && !1 === wD) return {
              source: KD,
              asked: rD,
              refused: "not_requested"
            };
            if (!DD.gpu) return {
              source: KD,
              asked: rD,
              refused: "no_webgpu_api"
            };
            const LD = "default" === KD && DD.heldBack();
            if (LD && !DD.windows()) return {
              source: KD,
              asked: rD,
              refused: "webgl_holdback"
            };
            if (!rD && DD.offAfterLoss("pack" === KD)) return {
              source: KD,
              asked: rD,
              refused: LD ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: KD,
              asked: rD,
              heldBack: LD,
              gpu: DD.gpu
            }
          }(DD),
          {
            source: wD
          } = zD,
          pD = !zD.asked,
          sD = "gpu" in zD && zD.heldBack,
          rD = function(DD) {
            return sD && "none" !== DD ? {
              reason: "webgl_holdback",
              adapter: null,
              source: wD
            } : {
              reason: DD,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: wD
            }
          };
        if (!("gpu" in zD)) return rD(zD.refused);
        let LD;
        try {
          LD = await (0, ED.m)((0, MD.o)(zD.gpu, {
            compatibility: zD.asked
          }), rz, `requestAdapter didn't settle in ${rz/1e3} s`)
        } catch {
          return rD("adapter_error")
        }
        if ("string" === typeof LD) return rD(LD);
        const cD = (0, MD.d)(LD);
        if ((0, MD.j)(LD)) return rD("software_adapter", cD);
        const gD = DD.windows() && function(DD) {
          return jD.has((0, KD.g)(DD.vendor, DD.architecture))
        }(cD);
        if (DD.storeHoldbackSpared(gD), sD && !gD) return rD("webgl_holdback");
        const RD = DD.intelGen9(LD);
        DD.storeIntelGen9Verdict(RD);
        const AD = RD ? null : DD.gpuClassWebGlArm(LD);
        DD.storeGpuClassVerdict(null !== AD && void 0 !== AD && AD);
        const UD = DD.wasmArmOnWebGl(cD);
        if (DD.storeWasmArmVerdict(UD), pD && DD.oldIntelDriver(LD)) return rD("old_intel_driver", cD);
        if ("default" === wD && RD && DD.intelGen9OnWebGl()) return rD("intel_gen9", cD);
        if ("default" === wD && null !== AD && DD.gpuClassOnWebGl(AD)) return rD("gpu_class_webgl", cD);
        if ("default" === wD && UD) return rD("gpu_wasm_arm", cD);
        return rD("none", cD)
      }(DD);
      if ("none" === zD.reason) return {
        backend: "webgpu",
        ...zD
      };
      if ("webgl1" !== DD.override() && DD.webgl2()) return {
        backend: "webgl",
        ...zD
      };
      const wD = DD.webgl1();
      return 0 === wD.length ? {
        backend: "webgl1",
        ...zD
      } : {
        missing: wD
      }
    }
    let ND = !1;
    async function ZD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SD();
      if (null === DD) return null;
      const wD = await WD(zD);
      return ND = !("missing" in wD) && "webgpu" === wD.backend && "claim" === wD.source, "missing" in wD ? wD : {
        ...wD,
        load: DD[wD.backend]
      }
    }
    async function yD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SD().gpu,
        pD = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== DD.backend) return !1;
      const sD = vD(DD, zD, "indirectDraws", "off", "on");
      if (null !== sD) return sD;
      if (null !== DD.adapter && (0, GD.p)(DD.adapter, pD)) return !0;
      if (null === wD) return !1;
      try {
        var KD;
        const DD = await (0, ED.m)(wD.requestAdapter({
          powerPreference: "low-power"
        }).then((async DD => (null !== DD && await (0, MD.g)(DD), DD))), rz, `the low-power requestAdapter didn't settle in ${rz/1e3} s`);
        return (0, GD.p)(null !== (KD = null === DD || void 0 === DD ? void 0 : DD.info) && void 0 !== KD ? KD : {}, pD)
      } catch (rD) {
        return rD instanceof ED.h
      }
    }

    function kD(DD, zD, wD) {
      if ("webgpu" !== DD.backend) return !1;
      const pD = vD(DD, zD, "terrainFetch", "texture", "storage");
      return null !== pD ? pD : null !== DD.adapter && (0, GD.g)(DD.adapter, wD)
    }

    function mD(DD, zD) {
      if ("webgpu" !== DD.backend) return !1;
      const wD = vD(DD, zD, "skyOrder", "early", "last");
      return null !== wD ? wD : null !== DD.adapter && (0, KD.g)(DD.adapter.vendor, DD.adapter.architecture) === bD
    }

    function eD(DD, zD) {
      if ("webgpu" !== DD.backend) return !1;
      const wD = vD(DD, zD, "uploadCopies", "off", "on");
      return null !== wD ? wD : null !== DD.adapter && "powervr_rogue" === (0, KD.g)(DD.adapter.vendor, DD.adapter.architecture)
    }

    function oD(DD, zD, wD) {
      if ("webgpu" !== DD.backend) return !1;
      const pD = vD(DD, zD, "sceneDepth", "off", "on");
      return null !== pD ? pD : null !== DD.adapter && (0, GD.j)(DD.adapter, wD)
    }

    function aD(DD, zD) {
      return "webgl" === DD.backend ? vD(DD, zD, "instancedTerrain", "1", "0") : null
    }

    function uD(DD, zD) {
      return "webgpu" !== DD.backend || zD && (null === DD.adapter || !(0, BD.K)(DD.adapter))
    }

    function vD(DD, zD, wD, pD, sD) {
      const KD = new URLSearchParams(zD).get(wD),
        rD = null !== KD && void 0 !== KD ? KD : (0, cD.h)(wD);
      return rD !== pD && rD !== sD ? null : (ND ||= null === KD && "webgpu" === DD.backend, rD === pD)
    }

    function tD(DD) {
      return null !== DD && "missing" in DD
    }

    function FD(DD) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !qD()) ? function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rD.e;
        try {
          const wD = "start_failed" === DD || "pipeline_failed" === DD,
            pD = zD.turnOffWebGpuAfterDeviceLoss(wD ? "visible" : (0, BD.l)((0, fD.g)()), wD);
          return ND && (0, cD.u)("webgpuLoss"), zD.isWebGpuOffAfterLoss() && "webgpu" === lD(ID.h.getItem(RD.c)) && ID.h.removeItem(RD.c), (0, LD.t)("webgpuloss") && (0, gD.e)((zD => {
            zD.noteWebGpuLoss("wasm", pD ? DD : `${DD}, which storage didn't keep`, null)
          })), pD
        } catch {
          return !1
        }
      }(DD) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const YD = "framePacing";

    function HD(DD) {
      const zD = new URLSearchParams(DD).get(YD);
      return null !== zD && /^\d{1,9}$/.test(zD) ? Number(zD) : void 0
    }

    function qD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === lD(new URLSearchParams(DD).get(RD.b))
      } catch {
        return !1
      }
    }

    function Dz(DD) {
      return !!zz(DD) || DD instanceof Error && !(DD instanceof WebAssembly.RuntimeError) && DD.message.startsWith(`${OD.o.RenderSurfaceUnusable}:`)
    }

    function zz(DD) {
      const {
        name: zD,
        message: wD
      } = null !== DD && void 0 !== DD ? DD : {};
      return "InvalidStateError" === zD && "string" === typeof wD && wD.startsWith("GPUDevice.")
    }

    function wz(DD) {
      const zD = DD;
      return "function" === typeof zD.UpD && "function" === typeof zD.fpD ? zD : null
    }

    function pz(DD) {
      return "function" === typeof DD.kG ? DD : null
    }
    const sz = "openRenderer";

    function Kz(DD) {
      const zD = null === DD || void 0 === DD ? void 0 : DD.lKD();
      return void 0 === zD ? void 0 : new Error(zD)
    }
    const rz = 5e3,
      Lz = 15e3;

    function cz(DD, zD, wD, pD, sD, KD) {
      return (0, ED.m)(function(DD, zD, wD, pD, sD, KD) {
        return (0, QD.f)(DD, zD, (() => DD.kG(wD, pD, sD, KD.indirectHangs, KD.storagePullBreaks, KD.splitPassBreaks, KD.earlySky, KD.instancedTerrain, KD.cellLight, KD.framesAhead, KD.webGpuRestores, KD.bufferCopiesCrash)))
      }(DD, zD, wD, pD, sD, KD), Lz, `${OD.o.RenderSurfaceUnusable}: the renderer didn't open in ${Lz/1e3} s`, Rz)
    }
    async function gz(DD, zD, wD, pD, sD, KD) {
      if ("function" !== typeof DD.VrD) throw new Error("this core has no set_renderer");
      const rD = await cz(zD, sz, wD, sD, pD, KD);
      try {
        DD.VrD(rD)
      } catch (LD) {
        throw Rz(rD), LD
      }
    }

    function Rz(DD) {
      try {
        DD.free()
      } catch {}
    }
  },
  40743: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD
    });
    const pD = {
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
  40669: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => ID,
      d: () => BD,
      g: () => UD,
      i: () => AD
    });
    const pD = 2e3,
      sD = "unavailable";
    let KD = () => Promise.resolve().then((() => wD(2927))),
      rD = null,
      LD = null,
      cD = gD();

    function gD() {
      let DD = () => {};
      return {
        promise: new Promise((zD => {
          DD = () => {
            zD(null)
          }
        })),
        resolve: DD
      }
    }

    function RD() {
      if (null === rD) {
        const DD = KD();
        rD = DD, DD.then((zD => {
          rD === DD && (LD = zD)
        }), (() => {
          rD === DD && (rD = null)
        }))
      }
      return rD
    }

    function AD() {
      RD().catch((() => {}))
    }

    function UD() {
      cD.resolve()
    }

    function fD(DD, zD, wD, pD) {
      if (null === DD) return {
        errorKind: zD,
        fingerprint: sD,
        dedupe: `${zD}|${pD}`
      };
      const {
        fingerprint: KD
      } = DD.clientErrorKey(zD, wD, pD);
      return {
        errorKind: zD,
        fingerprint: KD,
        dedupe: KD
      }
    }

    function ID(DD, zD, wD, pD) {
      return null === LD ? pD ? (AD(), fD(null, DD, zD, wD)) : null : fD(LD, DD, zD, wD)
    }
    async function BD(DD, zD, wD) {
      let sD;
      const KD = new Promise((DD => {
        sD = setTimeout((() => {
          DD(null)
        }), pD)
      }));
      try {
        return fD(await Promise.race([RD(), KD, cD.promise]), DD, zD, wD)
      } catch {
        return fD(null, DD, zD, wD)
      } finally {
        clearTimeout(sD)
      }
    }
  },
  40666: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      BUILT_IN_ANIMATIONS_SITE: () => uD,
      CORE_ERRORS_SITE: () => lD,
      EVENT_OVERFLOW_SITE: () => aD,
      FIRST_VIEW_SITE: () => FD,
      JOIN_SITE: () => ND,
      LEAVE_SITE: () => ZD,
      MAIN_THREAD_SITE: () => YD,
      MODEL_FEED_SITE: () => yD,
      MODEL_POOL_SITE: () => kD,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => zz,
      NON_FATAL_REPORTS_PER_SESSION: () => Mz,
      PREVIEW_ANIMATIONS_SITE: () => oD,
      RENDER_RELOAD_SITE: () => eD,
      REQUEST_DEVICE_SITE: () => HD,
      TEXTURE_NAMES_SITE: () => mD,
      TEXTURE_PACK_FEED_SITE: () => vD,
      TEXTURE_PACK_SWAP_SITE: () => tD,
      TurnstilePageError: () => zw,
      WASM_LOAD_SITE: () => WD,
      countRenderLost: () => iw,
      crashError: () => Vz,
      crashReportsSettled: () => Sz,
      deviceLossWords: () => bw,
      flushCrashReports: () => jz,
      joinFailureCode: () => ww,
      lokiTransport: () => sz,
      modelFailureCode: () => Rw,
      readTrap: () => yz,
      renderLoss: () => Sw,
      renderReloadMessage: () => jw,
      reportCoreErrors: () => Wz,
      reportCountedLoadFallback: () => qz,
      reportCrash: () => Pz,
      reportDataLoadFailure: () => yw,
      reportDisconnect: () => Lw,
      reportDracoDecoderFailure: () => Iw,
      reportDroppedRequiredLimits: () => Yz,
      reportEventOverflow: () => nw,
      reportFirstViewNoTerrain: () => Qw,
      reportGpuFallback: () => Fz,
      reportGpuWasmPopulation: () => Hz,
      reportLightFault: () => Ow,
      reportMainStall: () => Xw,
      reportMemoryShed: () => Ew,
      reportModelFailure: () => Aw,
      reportModelPoolFailure: () => Uw,
      reportModelsModuleRetry: () => fw,
      reportPageJoinFailure: () => sw,
      reportReconnectGaveUp: () => gw,
      reportRenderReload: () => Ww,
      reportReplayFault: () => Pw,
      reportStaleBuildReload: () => mw,
      reportStoppedCore: () => oz,
      reportTerrainTextureFailure: () => Nw,
      reportTexturePackFeedLoadFailure: () => Gw,
      reportTexturePackKeptOut: () => hw,
      reportUnstreamedCoreLoad: () => Dw,
      reportUnsupportedFallback: () => vz,
      reportUnusedSeat: () => rw,
      reportWorkerLost: () => Mw,
      reportWorkerStartTimeout: () => Vw,
      reportWorldgenGaveUp: () => Jw,
      reportWorldgenLoadFailure: () => Bw,
      resetCrashReports: () => iz,
      setCrashAdPreload: () => fz,
      setCrashBackend: () => Uz,
      setCrashScreen: () => gz,
      setCrashTransport: () => Lz,
      showCrash: () => ez,
      showJoinFailure: () => pw,
      showUnsupported: () => uz,
      unknownSkyWords: () => lz
    });
    var pD = wD(1075),
      sD = wD(277),
      KD = wD(2933),
      rD = wD(4328),
      LD = wD(40669),
      cD = wD(4817),
      gD = wD(40672),
      RD = wD(2962),
      AD = wD(38736),
      UD = wD(128),
      fD = wD(690),
      ID = wD(125),
      BD = wD(2968),
      GD = wD(36486),
      hD = wD(1797),
      nD = wD(40686),
      MD = wD(40516),
      OD = wD(40603),
      JD = wD(40610),
      ED = wD(36483),
      QD = wD(2861),
      XD = wD(2868),
      VD = wD(40707),
      PD = wD(40724),
      CD = wD(40732),
      xD = wD(36808),
      TD = wD(3214),
      bD = wD(36244),
      jD = wD(40645),
      dD = wD(36254),
      SD = wD(40748);
    const iD = "[bloxd-wasm-client]",
      lD = "coreErrors",
      WD = "wasmLoad",
      ND = "join",
      ZD = "leave",
      yD = "modelFeed",
      kD = "modelWorkerPool",
      mD = "textureNames",
      eD = "renderReload",
      oD = "previewAnimations",
      aD = "eventOverflow",
      uD = "builtInAnimations",
      vD = "texturePackFeed",
      tD = "texturePackSwap",
      FD = "firstView",
      YD = "mainThread",
      HD = "requestDevice",
      qD = 300,
      Dz = 64,
      zz = 8;
    let wz = 0;
    const pz = new Set,
      sz = (DD, zD) => {
        const wD = Iz[DD.kind],
          pD = {
            backend: Rz,
            adPreload: Az
          };
        if (null === wD) return void Kz(DD, zD, pD, null);
        const sD = (0, LD.b)(wD, DD.message, DD.code, DD.fatal);
        null === sD ? bz("Loki", (async () => {
          Kz(DD, zD, pD, await (0, LD.d)(wD, DD.message, DD.code))
        })) : Kz(DD, zD, pD, sD)
      };

    function Kz(DD, zD, wD, sD) {
      let {
        backend: rD,
        adPreload: LD
      } = wD;
      const {
        kind: cD,
        code: gD,
        site: RD,
        fatal: AD,
        details: UD
      } = DD;
      if (!AD)
        if (null === sD || (0, KD.e)(sD.errorKind) || pz.has(sD.dedupe)) {
          if (wz >= zz) return;
          wz++
        } else pz.add(sD.dedupe);
      const fD = {
        ...UD,
        kind: cD,
        code: gD,
        site: RD,
        fatal: String(AD),
        backend: rD
      };
      LD && (fD.adPreload = "true"), null !== sD && (fD.errorKind = sD.errorKind, fD.fingerprint = sD.fingerprint), zD instanceof Error && "string" === typeof zD.stack && (fD.causeStack = zD.stack.slice(0, 2e3)), (0, pD.CB)(Vz(DD, zD), fD)
    }
    let rz = sz;

    function Lz(DD) {
      const zD = rz;
      return rz = DD, zD
    }
    let cz = () => {};

    function gz(DD) {
      const zD = cz;
      return cz = DD, zD
    }
    let Rz = "unpicked",
      Az = !1;

    function Uz(DD) {
      Rz = DD
    }

    function fz(DD) {
      Az = DD
    }
    const Iz = {
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
      Bz = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        gpuFallback: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      Gz = new Set(["unstreamedLoad"]),
      hz = new Set(["linkCensus", "linksReadAfterView"]);
    let nz = !1;
    const Mz = 20,
      Oz = new Map;
    let Jz = 0,
      Ez = 0;
    const Qz = new Set,
      Xz = new Set;

    function Vz(DD, zD) {
      const wD = Object.assign(new Error(`${DD.code}: ${DD.message}`), {
        name: "WasmClientCrash",
        cause: null !== zD && void 0 !== zD ? zD : void 0
      });
      return zD instanceof Error && zD.stack && (wD.stack = zD.stack), wD
    }

    function Pz(DD) {
      var zD, pD;
      const {
        kind: sD,
        code: KD,
        site: rD,
        fatal: LD,
        message: cD,
        error: gD
      } = DD, RD = !1 !== DD.toTransport && !Gz.has(sD), AD = !LD && RD && !hz.has(sD), UD = {
        kind: sD,
        code: KD,
        site: rD,
        fatal: LD,
        message: cD,
        details: null !== (zD = DD.details) && void 0 !== zD ? zD : {}
      }, fD = `${KD}@${rD}${void 0===DD.instance?"":`#${DD.instance}`}${LD?"!":""}`, ID = (null !== (pD = Oz.get(fD)) && void 0 !== pD ? pD : 0) + 1;
      if (Oz.set(fD, ID), void 0 !== DD.countAs && 1 === ID && xz(DD.countAs), ID > 1 ? 0 === (ID & ID - 1) && Tz((() => {
          console.warn(`${iD} ${KD} at ${rD} reported ${ID} times`)
        })) : AD && Jz >= Mz ? Tz((() => {
          console.warn(`${iD} ${sD} ${KD} at ${rD}: ${cD} (not sent: the session's ${Mz} went)`, UD.details, null !== gD && void 0 !== gD ? gD : "")
        })) : (AD && Jz++, function(DD, zD, pD, sD) {
          var KD, rD;
          const {
            kind: LD,
            code: cD,
            site: gD,
            fatal: RD,
            message: AD,
            details: UD
          } = DD;
          Tz((() => {
            (RD ? console.error : console.warn)(`${iD} ${LD} ${cD} at ${gD}: ${AD}`, UD, null !== zD && void 0 !== zD ? zD : "")
          }));
          const fD = Bz[LD],
            ID = null !== (KD = null !== (rD = Iz[LD]) && void 0 !== rD ? rD : fD) && void 0 !== KD ? KD : null;
          sD || null === ID || Cz((async () => {
            const {
              reportCappedWasmFailure: DD,
              reportUncappedWasmFailure: zD,
              reportWasmFailure: pD
            } = await wD.e(209).then((() => wD(36240)));
            (hz.has(LD) ? zD : void 0 === fD ? pD : DD)(ID, AD, cD)
          }));
          pD && Tz((() => {
            rz(DD, zD)
          }))
        }(UD, gD, RD, void 0 !== DD.countAs)), LD) {
        var BD;
        const zD = null !== (BD = DD.screen) && void 0 !== BD ? BD : {
          text: (0, xD.d)(UD, !0),
          reload: !0
        };
        Tz((() => {
          cz(zD)
        }))
      }
      return UD
    }

    function Cz(DD) {
      bz("counts", (async () => {
        const {
          peekVisitSessionId: zD
        } = await Promise.resolve().then((() => wD(655)));
        null !== zD() && (await DD(), nz = !0)
      }))
    }

    function xz(DD) {
      Qz.has(DD.errorKind) || (Qz.add(DD.errorKind), Cz((async () => {
        const {
          reportClientError: zD
        } = await Promise.resolve().then((() => wD(2925)));
        zD(DD.errorKind, DD.error, DD.code, !0, void 0, DD.fields)
      })))
    }

    function Tz(DD) {
      try {
        DD()
      } catch (zD) {
        try {
          console.warn(`${iD} could not send a report`, zD)
        } catch {}
      }
    }

    function bz(DD, zD) {
      try {
        const wD = zD().catch((zD => {
          console.warn(`${iD} could not send the report to ${DD}`, zD)
        })).finally((() => {
          Xz.delete(wD)
        }));
        Xz.add(wD)
      } catch (wD) {
        console.warn(`${iD} could not send the report to ${DD}`, wD)
      }
    }
    async function jz(DD) {
      let zD;
      (0, LD.g)();
      const wD = new Promise((wD => {
        zD = setTimeout(wD, DD)
      }));
      await Promise.race([dz(), wD]), clearTimeout(zD)
    }
    async function dz() {
      if (await Promise.allSettled([...Xz]), nz) try {
        const {
          flushClientAnalyticsEvents: DD
        } = await Promise.resolve().then((() => wD(1492)));
        await DD()
      } catch (DD) {
        console.warn(`${iD} could not send the counts`, DD)
      }
    }
    async function Sz() {
      for (; Xz.size > 0;) await Promise.allSettled([...Xz])
    }

    function iz() {
      Oz.clear(), Jz = 0, nz = !1, wz = 0, pz.clear(), Ez = 0, Qz.clear(), (0, gD.v)()
    }

    function lz(DD) {
      const zD = "object" === typeof DD && null !== DD ? DD.type : DD;
      return "string" !== typeof zD ? "sky not named" : `sky ${JSON.stringify(Array.from(zD).slice(0,Dz).join(""))}`
    }

    function Wz(DD, zD, wD, pD) {
      Ez += zD;
      for (const {
          code: LD,
          detail: RD
        }
        of DD) {
        var sD, KD, rD;
        const DD = (0, cD.fe)(LD),
          zD = (0, gD.e)(LD, RD),
          AD = null === pD || void 0 === pD ? void 0 : pD(LD, RD),
          UD = void 0 !== (null === zD || void 0 === zD ? void 0 : zD.gpuDetails),
          fD = UD ? null === (sD = (0, ID.p)()) || void 0 === sD ? void 0 : sD.renderer : void 0,
          BD = UD ? ` ${(0,gD.n)()}` : "",
          GD = Array.from([fD && `gpu ${(0,gD.y)(fD)}`, AD].filter(Boolean).join("; ")).slice(0, qD).join(""),
          hD = `core error ${DD}${null!==(KD=null===zD||void 0===zD?void 0:zD.words)&&void 0!==KD?KD:""}${BD}${GD?`: ${GD}`:""}`,
          nD = {
            errorCode: String(LD),
            detail: String(RD),
            droppedBefore: String(Ez),
            wasmBuild: wD.wasm,
            clientVersion: wD.client,
            ...null === zD || void 0 === zD ? void 0 : zD.gpuDetails
          };
        null !== zD && (0, gD.r)(zD) ? Tz((() => {
          console.warn(`${iD} coreError CORE-${DD}: ${hD} (not sent: the session's render warnings of its kind went)`, nD)
        })) : Pz({
          kind: Zz(LD, RD),
          code: `CORE-${DD}`,
          site: lD,
          fatal: !1,
          message: hD,
          details: nD,
          instance: null !== (rD = null === zD || void 0 === zD ? void 0 : zD.instance) && void 0 !== rD ? rD : Nz(LD, RD)
        })
      }
    }

    function Nz(DD, zD) {
      return DD === cD.F.RenderDeviceLost && 0 !== (zD & cD.M.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function Zz(DD, zD) {
      return DD === cD.F.JobsHeapGaveUp ? "meshHeap" : (0, gD.j)(DD, zD) ? "linksReadAfterView" : (0, gD.g)(DD, zD) ? "linkCensus" : "coreError"
    }

    function yz(DD) {
      return (0, bD.l)(DD instanceof jD.d ? DD.trap : DD, QD.B, QD.db)
    }
    const kz = "declined=js";

    function mz(DD) {
      return DD ? {
        labels: [kz],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function ez(DD, zD, wD) {
      return az(DD, zD, wD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function oz(DD, zD, wD) {
      return az(DD, zD, wD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function az(DD, zD, wD, pD, sD) {
      let {
        memoryDetails: KD = {},
        declined: rD = !1
      } = pD;
      const {
        code: LD,
        details: cD,
        message: gD
      } = (0, nD.K)(DD, zD), RD = [];
      Object.assign(cD, (0, dD.h)(DD.error)), null !== wD && (cD.trapKind = wD.kind, null !== wD.panic && (cD.panic = (0, bD.k)(wD.panic)), wD.refusedBytes > 0 && (cD.refusedAllocation = String(wD.refusedBytes)), RD.push((0, bD.n)(wD.kind, wD.refusedBytes)));
      const AD = mz(rD);
      return Pz({
        kind: "crash",
        code: LD,
        site: DD.site,
        fatal: sD,
        message: [...RD, ...AD.labels, gD].join("; "),
        details: {
          ...cD,
          ...AD.details,
          ...KD
        },
        error: DD.error
      })
    }

    function uz(DD, zD, wD) {
      return Pz({
        kind: "unsupported",
        code: zD,
        site: WD,
        fatal: !0,
        message: wD,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: DD,
          status: zD
        },
        screen: {
          text: (0, xD.l)(DD),
          reload: "download" === DD
        }
      })
    }

    function vz(DD, zD, wD) {
      return Pz({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === zD ? "blocked_after_loss" : "unsupported_js_fallback",
        site: WD,
        fatal: !1,
        message: wD,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: DD,
          status: "unsupported",
          decline: zD,
          fallback: "js"
        }
      })
    }
    const tz = "misdrawn_gpu_js_fallback";

    function Fz(DD, zD) {
      return Pz({
        kind: "gpuFallback",
        code: tz,
        site: WD,
        fatal: !1,
        message: `the renderer plays ${DD} on ${zD} worse than the JS client`,
        details: {
          gpuFamily: DD,
          backend: zD,
          fallback: "js"
        }
      })
    }

    function Yz(DD) {
      return Pz({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: HD,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: DD.join(",")
        }
      })
    }

    function Hz(DD) {
      bz("counts", (async () => {
        await (0, fD.e)(DD), nz = !0
      }))
    }

    function qz(DD, zD, wD, pD) {
      const sD = mz(pD);
      return Pz({
        kind: "unsupported",
        code: zD,
        site: WD,
        fatal: !1,
        message: [...sD.labels, wD].join("; "),
        details: {
          cause: DD,
          status: zD,
          fallback: "js",
          ...sD.details
        }
      })
    }

    function Dw() {
      const {
        code: DD,
        message: zD
      } = TD.d;
      return Pz({
        kind: "unstreamedLoad",
        code: DD,
        site: WD,
        fatal: !1,
        message: zD
      })
    }
    class zw extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function ww(DD) {
      return DD instanceof OD.l ? 0 === DD.code ? "JOIN-matchmake" : `JOIN-${DD.code}` : DD instanceof OD.c ? 0 === DD.code ? `JOIN-${DD.stage}` : `JOIN-${DD.stage}-${DD.code}` : DD instanceof MD.c ? "JOIN-gameCode" : DD instanceof zw ? "JOIN-turnstilePage" : DD instanceof OD.u ? "JOIN-trafficCheck" : DD instanceof GD.c ? "JOIN-timeout" : "JOIN-network"
    }

    function pw(DD, zD) {
      const wD = (0, dD.m)(DD),
        pD = {
          wasmBuild: zD.wasm,
          clientVersion: zD.client
        },
        sD = DD instanceof zw ? {
          text: (0, xD.i)(),
          reload: !1
        } : void 0,
        KD = (0, JD.i)(DD),
        rD = "expected" !== KD;
      return Pz({
        kind: "join",
        code: ww(DD),
        site: ND,
        fatal: !0,
        message: wD,
        details: pD,
        error: DD,
        screen: sD,
        toTransport: rD,
        instance: KD
      })
    }

    function sw(DD, zD, wD) {
      var pD;
      const sD = (0, JD.i)(DD),
        KD = {
          cause: (DD instanceof OD.c || DD instanceof OD.l) && null !== (pD = DD.serverText) && void 0 !== pD ? pD : "",
          sinceJoinStart: (0, BD.c)(wD.sinceJoinStartMs),
          game: wD.game,
          ...(0, BD.i)(),
          wasmBuild: zD.wasm,
          clientVersion: zD.client
        };
      return Pz({
        kind: "pageJoin",
        code: ww(DD),
        site: ND,
        fatal: !1,
        message: (0, dD.m)(DD),
        details: KD,
        error: DD,
        toTransport: "unrecognised" === sD,
        instance: sD
      })
    }
    const Kw = {
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

    function rw(DD, zD) {
      let {
        unused: wD,
        answered: pD,
        heldMs: sD
      } = DD;
      const {
        code: KD,
        message: rD
      } = Kw[wD], LD = {
        unused: wD,
        answered: String(pD),
        heldMs: String(sD),
        wasmBuild: zD.wasm,
        clientVersion: zD.client
      };
      return Pz({
        kind: "seat",
        code: KD,
        site: ND,
        fatal: !1,
        message: rD,
        details: LD
      })
    }

    function Lw(DD, zD, wD) {
      var pD;
      let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (pD = DD.name) && void 0 !== pD ? pD : String(DD.code);
      const KD = {
          closeCode: String(DD.code),
          recognised: String(null !== DD.name),
          closeReason: wD.closeReason,
          sinceJoined: (0, BD.c)(wD.sinceJoinedMs),
          game: wD.game,
          ...(0, BD.i)(),
          wasmBuild: zD.wasm,
          clientVersion: zD.client
        },
        rD = null === DD.name && !(0, BD.f)(DD.code);
      return Pz({
        kind: "disconnect",
        code: sD,
        site: ZD,
        fatal: !1,
        message: "Left room",
        details: KD,
        toTransport: rD
      })
    }

    function gw(DD, zD) {
      const wD = {
        ...(0, RD.m)(DD),
        wasmBuild: zD.wasm,
        clientVersion: zD.client
      };
      return Pz({
        kind: "disconnect",
        code: `reconnect-${DD.reason}`,
        site: ND,
        fatal: !1,
        message: "Reconnect failed",
        details: wD
      })
    }

    function Rw(DD) {
      return DD.error instanceof XD.i ? `MODEL-${DD.error.status}` : DD.error instanceof VD.k ? "MODEL-ring" : "MODEL-network"
    }

    function Aw(DD, zD) {
      const wD = Rw(DD),
        pD = `model file ${DD.file} ${DD.startup?"(startup) ":""}could not load`,
        sD = {
          file: String(DD.file),
          url: DD.url,
          wasmBuild: zD.wasm,
          clientVersion: zD.client
        };
      return Pz({
        kind: DD.startup ? "model" : "modelLate",
        code: wD,
        site: yD,
        fatal: DD.startup,
        message: pD,
        details: sD,
        error: DD.error
      })
    }

    function Uw(DD, zD) {
      const wD = {
        wasmBuild: zD.wasm,
        clientVersion: zD.client
      };
      return Pz({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: kD,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: wD,
        error: DD
      })
    }

    function fw(DD, zD, wD) {
      const pD = {
        delayMs: String(zD),
        wasmBuild: wD.wasm,
        clientVersion: wD.client
      };
      DD instanceof XD.i && (pD.status = String(DD.status));
      return Pz({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: kD,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: pD,
        error: DD
      })
    }

    function Iw(DD, zD) {
      const wD = {
        wasmBuild: zD.wasm,
        clientVersion: zD.client
      };
      return Pz({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: kD,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: wD,
        error: DD
      })
    }

    function Bw(DD, zD) {
      const wD = {
        wasmBuild: zD.wasm,
        clientVersion: zD.client
      };
      return Pz({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: nD.H,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: wD,
        error: DD
      })
    }

    function Gw(DD, zD) {
      const wD = {
        wasmBuild: zD.wasm,
        clientVersion: zD.client
      };
      return Pz({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: vD,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: wD,
        error: DD
      })
    }

    function hw(DD, zD, wD, pD) {
      const sD = {
        wasmBuild: pD.wasm,
        clientVersion: pD.client
      };
      return Pz({
        kind: "texturePackKeptOut",
        code: (0, rD.d)("wasm", DD, zD),
        site: tD,
        fatal: !1,
        message: zD.detail,
        details: sD,
        error: wD
      })
    }

    function nw(DD, zD) {
      const {
        frames: wD,
        acks: pD,
        mask: sD,
        outcome: KD
      } = DD, rD = {
        frames: String(wD),
        acks: String(pD),
        mask: String(sD),
        outcome: null !== KD && void 0 !== KD ? KD : "resynced",
        wasmBuild: zD.wasm,
        clientVersion: zD.client
      };
      return Pz({
        kind: "recovered",
        code: "rejoined" === KD ? "CORE-eventOverflowRejoin" : "failed" === KD ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: aD,
        fatal: !1,
        message: `the event buffer refused records in ${wD} frames`,
        details: rD
      })
    }

    function Mw(DD, zD, wD) {
      return Pz({
        kind: "recovered",
        code: "CORE-workerLost",
        site: DD,
        fatal: !1,
        message: `a ${DD} worker was lost`,
        details: {
          reason: zD,
          wasmBuild: wD.wasm,
          clientVersion: wD.client
        }
      })
    }

    function Ow(DD, zD, wD) {
      const pD = {
        wasmBuild: wD.wasm,
        clientVersion: wD.client
      };
      return Pz({
        kind: "recovered",
        code: DD,
        site: nD.s,
        fatal: !1,
        message: zD,
        details: pD
      })
    }

    function Jw(DD, zD) {
      const wD = {
        lastReason: DD,
        wasmBuild: zD.wasm,
        clientVersion: zD.client
      };
      return Pz({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: nD.H,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: wD
      })
    }

    function Ew(DD, zD, wD) {
      return Pz({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: nD.o,
        fatal: !1,
        message: (0, ED.k)(DD) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: DD,
          ...zD,
          wasmBuild: wD.wasm,
          clientVersion: wD.client
        }
      })
    }

    function Qw(DD, zD, wD, pD) {
      var sD, KD;
      const rD = (0, gD.o)(),
        LD = {
          game: DD,
          cause: zD,
          census: null === wD ? "none" : JSON.stringify(wD),
          gpu: null !== (sD = null === (KD = (0, ID.p)()) || void 0 === KD ? void 0 : KD.renderer) && void 0 !== sD ? sD : "",
          renderWarned: String(rD),
          browser: (0, gD.n)(),
          wasmBuild: pD.wasm,
          clientVersion: pD.client
        },
        cD = `first view drew no whole terrain in ${PD.h/1e3} s, ${zD}${rD?", render warned":""}`;
      return Pz({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: FD,
        fatal: !1,
        message: cD,
        details: LD
      })
    }

    function Xw(DD, zD, wD, pD) {
      var KD, rD, LD;
      const cD = null !== (KD = (0, sD.l)(null !== (rD = null === (LD = (0, ID.h)()) || void 0 === LD ? void 0 : LD.renderer) && void 0 !== rD ? rD : null, (0, ID.g)())) && void 0 !== KD ? KD : "unknown",
        RD = null === zD ? "untimed" : `${Math.round(zD)} ms`,
        AD = `frames stalled, ${wD}, gpu ${(0,gD.y)(cD)}, blocking ${RD}, drawn ${Math.round(DD)} ms apart`,
        UD = {
          gpuModel: cD,
          wasmBuild: pD.wasm,
          clientVersion: pD.client
        };
      return Pz({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: YD,
        fatal: !1,
        message: AD,
        details: UD
      })
    }

    function Vw(DD, zD, wD) {
      return Pz({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: DD,
        fatal: !1,
        message: `a ${DD} worker did not start`,
        details: {
          waitedMs: String(Math.round(zD)),
          wasmBuild: wD.wasm,
          clientVersion: wD.client
        }
      })
    }

    function Pw(DD, zD, wD) {
      return Pz({
        kind: "recovered",
        code: "CORE-replayFault",
        site: DD,
        fatal: !1,
        message: `the replay's ${DD} failed`,
        details: {
          wasmBuild: wD.wasm,
          clientVersion: wD.client
        },
        error: zD
      })
    }
    const Cw = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function xw(DD) {
      if (0 === DD) return "none";
      const zD = [60, 600, 3600].find((zD => DD < zD));
      return void 0 === zD ? "ge3600" : `lt${zD}`
    }

    function Tw(DD, zD) {
      return null === DD ? "unbound" : (0, AD.i)(zD - DD)
    }

    function bw(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (DD & cD.M.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (DD & cD.M.LINKS_RUNNING) ? "links running" : "", `frames ${(0,gD.y)(xw(DD&cD.M.FRAMES))}`, `up ${(0,gD.y)(Tw(zD,wD))}`].filter(Boolean).join(", ")
    }

    function jw(DD, zD, wD) {
      const pD = "lost" === zD && void 0 !== wD ? ` (${wD})` : "";
      return `the ${DD} ${Cw[zD]}${pD}`
    }
    const dw = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function Sw(DD, zD, wD, pD) {
      var sD;
      let {
        restoreLost: KD = !1,
        adapterRemembered: rD = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, LD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const cD = null === wD || void 0 === wD ? void 0 : wD.message,
        gD = "pipeline_failed" === zD ? zD : wD instanceof hD.h ? "timeout" : (0, AD.n)("frames_refused" === zD, "string" === typeof cD ? cD : ""),
        RD = null === pD.boundAtMs ? "unbound" : `up${(0,AD.f)(LD-pD.boundAtMs)}`,
        UD = null === pD.adapter ? "no adapter" : (0, AD.k)(pD.adapter),
        fD = `${!0===pD.indirectHangs?" ih":""}${!0===pD.restoresSkipped?" nr":""}${KD?" rl":""}${rD?" ar":""}`,
        ID = `${gD} ${(0,hD.i)()?"hidden":"visible"} ${RD}${fD} ${UD}`;
      if ("webgpu" !== DD || "lost" !== zD && "frames_refused" !== zD) return {
        detail: ID,
        count: void 0
      };
      return {
        detail: ID,
        count: {
          errorKind: "render_lost",
          error: new Error(ID),
          code: (0, AD.p)(gD, null !== (sD = pD.boundAtMs) && void 0 !== sD ? sD : LD, LD).code,
          fields: {
            renderBackend: SD.e.webgpu
          }
        }
      }
    }

    function iw(DD, zD, wD) {
      const {
        count: pD
      } = Sw("webgpu", DD, zD, wD);
      void 0 !== pD && xz(pD)
    }
    const lw = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function Ww(DD, zD, pD) {
      var KD, rD, LD, cD, RD;
      let {
        from: fD,
        cause: ID = "lost",
        restoreLost: BD = !1,
        adapterRemembered: GD = !1,
        error: hD,
        context: nD = dw,
        session: MD = lw
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, OD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: JD,
        count: ED
      } = Sw(DD, ID, hD, nD, {
        restoreLost: BD,
        adapterRemembered: GD
      }, OD), QD = {
        reloadFrom: null !== fD && void 0 !== fD ? fD : "",
        losses: String(zD),
        cause: ID,
        detail: JD,
        vendor: null !== (KD = null === (rD = nD.adapter) || void 0 === rD ? void 0 : rD.vendor) && void 0 !== KD ? KD : "",
        architecture: null !== (LD = null === (cD = nD.adapter) || void 0 === cD ? void 0 : cD.architecture) && void 0 !== LD ? LD : "",
        indirectHangs: String(nD.indirectHangs),
        restoresSkipped: String(nD.restoresSkipped),
        restoreLost: String(BD),
        adapterRemembered: String(GD),
        samples: String(MD.samples),
        sunShadows: String(MD.sunShadows),
        renderDistance: String(MD.renderDistance),
        gpuFamily: null !== (RD = (0, sD.e)()) && void 0 !== RD ? RD : "",
        browser: (0, gD.n)(),
        siteUsed: UD.v,
        wasmBuild: pD.wasm,
        clientVersion: pD.client
      }, XD = "webgpu" !== DD && void 0 !== fD ? function(DD, zD, wD, pD) {
        return `: ${DD}, ${zD?"restore lost":"not restored"}, up ${(0,gD.y)(Tw(wD,pD))}`
      }(fD, BD, nD.boundAtMs, OD) : "", VD = `${jw(DD,ID)}${XD}`, PD = Pz({
        kind: "recovered",
        code: "CORE-renderLost",
        site: eD,
        fatal: !1,
        message: VD,
        details: QD,
        error: hD,
        countAs: ED
      });
      return bz("ga", (async () => {
        const {
          logError: zD
        } = await Promise.resolve().then((() => wD(2901))), pD = `${AD.b["webgpu"===DD?"WebGPU":"WebGL2"]}\n Error: ${JD}`;
        zD("warning", pD), zD("error", pD)
      })), PD
    }

    function Nw(DD, zD) {
      var wD, pD;
      const sD = null === DD.name ? "TEXTURE-sources" : null === DD.url ? "TEXTURE-nourl" : DD.error instanceof CD.b ? `TEXTURE-${DD.error.status}` : "TEXTURE-network",
        KD = null === DD.name ? "terrain textures could not load" : `terrain texture ${DD.name} could not load`,
        rD = {
          texture: null !== (wD = DD.name) && void 0 !== wD ? wD : "",
          url: null !== (pD = DD.url) && void 0 !== pD ? pD : "",
          wasmBuild: zD.wasm,
          clientVersion: zD.client
        };
      return Pz({
        kind: "terrainTexture",
        code: sD,
        site: nD.G,
        fatal: !1,
        message: KD,
        details: rD,
        error: DD.error
      })
    }
    const Zw = {
      previewAnimations: {
        site: oD,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: uD,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function yw(DD, zD, wD, pD) {
      const {
        site: sD,
        prefix: KD,
        name: rD
      } = Zw[DD], {
        stage: LD,
        error: cD
      } = wD;
      return Pz({
        kind: DD,
        code: "decode" === LD ? null === cD ? `${KD}-decode` : `${KD}-trap` : cD instanceof XD.i ? `${KD}-${cD.status}` : `${KD}-network`,
        site: sD,
        fatal: !1,
        message: "decode" === LD ? `${rD} did not decode` : `${rD} could not load`,
        details: {
          url: zD,
          wasmBuild: pD.wasm,
          clientVersion: pD.client
        },
        error: cD
      })
    }
    const kw = "staleBuild";

    function mw(DD, zD, wD) {
      const pD = {
          failedSite: DD.site,
          url: DD.url,
          from: DD.from,
          sameBuild: String(DD.from === zD),
          reloadMs: String(Math.max(0, Date.now() - DD.at)),
          wasmBuild: wD.wasm,
          clientVersion: wD.client
        },
        sD = `reloaded into a newer build after ${DD.site} failed to load: ${DD.error}`;
      return Pz({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: kw,
        fatal: !1,
        message: sD,
        details: pD
      })
    }
  },
  40724: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      h: () => sD,
      k: () => rD
    });
    var pD = wD(4820);
    const sD = 3e4;
    class KD {
      constructor(DD) {
        this.sI = DD, this.waitedMs = 0, this.lastMs = null
      }
      frame(DD, zD) {
        if (zD) return !0;
        const wD = null === this.lastMs ? 0 : DD - this.lastMs;
        return this.lastMs = DD, wD <= 900 && (this.waitedMs += wD), !(this.waitedMs < sD) && (this.sI(), !0)
      }
    }

    function rD(DD, zD) {
      return 0 === (DD & pD.V.ChunkRequested) ? "no_chunk_request" : 0 === (DD & pD.V.ChunkStored) ? "chunk_not_stored" : 0 === (DD & pD.V.MeshLanded) ? "not_meshed" : null === zD ? "no_frame_drawn" : 0 === zD.terrainParts ? "no_terrain_parts" : zD.terrainCompiling > 0 ? "terrain_compiling" : zD.terrainOpaque + zD.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40516: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      f: () => hD,
      i: () => BD,
      k: () => GD,
      o: () => UD,
      p: () => fD,
      t: () => RD,
      w: () => AD,
      y: () => ID
    });
    class pD extends Error {
      constructor(DD) {
        super(`the join's code did not load: ${DD instanceof Error?DD.message:String(DD)}`, {
          cause: DD
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === DD || void 0 === DD ? void 0 : DD.request
      }
    }
    let sD = null,
      KD = null,
      rD = null;
    const LD = [];
    let cD = null;

    function gD(DD, zD) {
      try {
        DD(zD)
      } catch (wD) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", wD)
      }
    }

    function RD() {
      return cD
    }

    function AD(DD) {
      LD.push(DD), null !== cD && gD(DD, cD)
    }

    function UD(DD) {
      return sD ??= Promise.all([wD.e(72), wD.e(96), wD.e(221), wD.e(77), wD.e(222), wD.e(198), wD.e(95), wD.e(240), wD.e(269), wD.e(197), wD.e(210), wD.e(189), wD.e(196), wD.e(191), wD.e(142), wD.e(87), wD.e(121), wD.e(247), wD.e(56)]).then((() => wD(42447))).then((zD => {
        zD.loadAudio(DD), cD = zD;
        for (const DD of LD) gD(DD, zD);
        return zD
      })).catch((DD => {
        throw sD = null, DD
      })), sD
    }
    async function fD(DD, zD) {
      try {
        const wD = await UD(DD);
        await wD.loadClientGame(zD)
      } catch (wD) {
        throw new pD(wD)
      }
    }

    function ID(DD, zD) {
      KD = {
        running: DD,
        shell: zD
      }
    }

    function BD() {
      return rD
    }
    async function GD(DD) {
      const zD = KD;
      if ((null === zD || void 0 === zD ? void 0 : zD.running) !== DD) throw new Error("the core's session has ended");
      const wD = await UD(zD.shell.audio).catch((DD => {
        throw new pD(DD)
      }));
      if (null !== rD) return rD;
      if (KD !== zD || DD.isStopped) throw new Error("the core stopped while the game code loaded");
      if (rD = wD.startGameHost(DD, zD.shell), null === rD) throw new Error("the core's shared tables didn't read, so the game can't start");
      return rD
    }

    function hD() {
      null !== rD && (null !== cD ? cD.endGameHost(rD) : rD.closeGame()), rD = null, KD = null
    }
  },
  40636: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    const pD = {
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
  40603: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => gD,
      e: () => KD,
      f: () => rD,
      i: () => sD,
      l: () => fD,
      m: () => RD,
      q: () => cD,
      s: () => UD,
      u: () => AD,
      w: () => LD
    });
    var pD = wD(1799);
    const sD = new Uint8Array([12]),
      KD = 2e3,
      rD = 257;

    function LD(DD) {
      const zD = new Uint8Array(4);
      return new DataView(zD.buffer).setUint32(0, DD, !0), zD
    }
    class cD extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class gD extends Error {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(DD), this.stage = zD, this.code = wD, this.serverText = pD, this.socketOpened = sD, this.name = "JoinError"
      }
    }
    class RD extends Error {
      constructor(DD) {
        super(DD), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class AD extends Error {
      constructor(DD) {
        super((0, pD.g)(DD), {
          cause: DD
        }), this.name = "TrafficCheckError"
      }
    }
    class UD extends Error {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(DD, {
          cause: wD
        }), this.networkLost = zD, this.httpStatus = pD, this.name = "SeatRequestError"
      }
    }
    class fD extends Error {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(DD), this.code = zD, this.serverText = wD, this.name = "MatchmakeError"
      }
    }
  },
  40610: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => fD,
      i: () => UD,
      m: () => ID
    });
    var pD = wD(2624),
      sD = wD(2968),
      KD = wD(39038),
      rD = wD(36486),
      LD = wD(39042),
      cD = wD(40603),
      gD = wD(40615);
    const RD = "seat reservation expired.",
      AD = "early_leave";

    function UD(DD) {
      if (DD instanceof rD.c) return "expected";
      if (DD instanceof cD.s) return DD.networkLost ? "expected" : "unrecognised";
      if (DD instanceof cD.c) {
        if ("closed" === DD.stage && (0 === DD.code || (0, sD.f)(DD.code))) return "expected";
        if ("roomError" === DD.stage && (DD.serverText === RD || DD.serverText === AD)) return "expected"
      }
      return DD instanceof cD.c || DD instanceof cD.l ? null === (0, LD.j)(DD.code).name ? "unrecognised" : "known" : (0, pD.f)(DD) ? "expected" : DD instanceof cD.u || DD instanceof gD.e ? "known" : "unrecognised"
    }

    function fD(DD) {
      return DD instanceof rD.c ? "timedOut" : "expected" !== UD(DD) || (0, pD.f)(DD) || DD instanceof cD.c && 1001 === DD.code ? void 0 : "failed"
    }

    function ID(DD) {
      return DD instanceof cD.c && "attach" !== DD.stage ? (0, KD.b)(DD, "closed" !== DD.stage || DD.socketOpened ? "socket" : "socket_unopened") : DD instanceof cD.s ? {
        at: "seat_lost",
        code: DD.httpStatus
      } : DD instanceof cD.l || DD instanceof rD.c ? (0, KD.b)(DD, DD instanceof rD.c ? DD.leg : "seat") : void 0
    }
  },
  40654: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => cD,
      c: () => LD,
      g: () => gD
    });
    var pD = wD(688),
      sD = wD(690);

    function KD(DD, zD) {
      const wD = null === zD ? void 0 : pD.d.get(zD);
      return "all" === wD || "webgl" === wD && "webgpu" !== DD.backend ? zD : null
    }

    function rD(DD) {
      return "software_adapter" === DD.reason ? null : DD.adapter
    }

    function LD(DD) {
      const zD = (0, pD.p)();
      return null === zD ? null : (0, pD.e)(rD(DD), zD, pD.f)
    }

    function cD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sD.k;
      const pD = KD(DD, zD);
      return null !== pD && "webgl" === DD.backend && wD(pD) ? null : pD
    }

    function gD(DD) {
      const zD = (0, pD.p)();
      return null !== zD && (0, pD.v)((0, pD.e)(DD, zD, pD.i))
    }
  },
  40707: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => cD,
      c: () => gD,
      g: () => fD,
      k: () => AD
    });
    var pD = wD(2868),
      sD = wD(4817),
      KD = wD(40710),
      rD = wD(40719),
      LD = wD(36254);
    const cD = 395,
      gD = 2147483648,
      RD = new Uint8Array(0);
    class AD extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class UD extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class fD {
      constructor(DD, zD, wD) {
        var pD, sD, rD, LD;
        let cD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = DD, this.build = zD, this.onFailure = wD, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.Nf = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (pD = cD.fetchFile) && void 0 !== pD ? pD : DD => (0, KD.g)(DD), this.onWritten = null !== (sD = cD.onWritten) && void 0 !== sD ? sD : null, this.onTaken = null !== (rD = cD.onTaken) && void 0 !== rD ? rD : null, this.onPackFileFailed = null !== (LD = cD.onPackFileFailed) && void 0 !== LD ? LD : null, this.startupLeft = new Set(DD.startup);
        for (const KD of DD.startup) this.request(KD)
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
      drawnUrl(DD) {
        return this.drawn.get(DD)
      }
      request(DD) {
        const zD = this.pending.get(DD);
        if (!0 === (null === zD || void 0 === zD ? void 0 : zD.ask)) return;
        const wD = this.Jf(DD, !0);
        wD.recheck = void 0 !== zD;
        const pD = this.drawn.get(DD);
        if (void 0 !== pD) return wD.Qg = !0, wD.recheck = !0, void this.fetch(DD, wD, pD);
        this.fetchWanted(DD, wD)
      }
      async refresh() {
        const DD = ++this.refreshes,
          zD = new Set;
        for (const rD of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const DD of rD) 0 === (DD & KD.f) && zD.add(DD);
        const wD = [...zD];
        let pD;
        try {
          pD = await Promise.all(wD.map((DD => this.wanted(DD))))
        } catch {
          return null
        }
        if (DD !== this.refreshes) return null;
        const sD = {
          resent: 0,
          refetched: 0,
          delivered: wD.filter((DD => this.drawn.has(DD))).length
        };
        return wD.forEach(((DD, zD) => {
          const {
            url: wD,
            inPlaceOf: KD
          } = pD[zD], rD = this.pending.get(DD);
          if (void 0 !== rD) {
            if (rD.Qg || void 0 === rD.url) return void(rD.recheck = !0);
            if (rD.url === wD) return;
            sD.refetched++;
            const zD = this.Jf(DD, rD.ask);
            return zD.recheck = rD.recheck, void this.fetch(DD, zD, wD, KD)
          }
          const LD = this.written.get(DD);
          void 0 === LD ? this.drawn.get(DD) !== (null !== wD && void 0 !== wD ? wD : void 0) && (sD.resent++, this.fetch(DD, this.Jf(DD, !1), wD, KD)) : LD.url !== (null !== wD && void 0 !== wD ? wD : "") && (LD.attempt.recheck = !0)
        })), sD
      }
      taken(DD, zD) {
        const wD = new Set,
          pD = new Set;
        for (const sD of Array.from(zD)) 0 === (sD & gD) ? wD.add(sD) : pD.add((sD & ~gD) >>> 0);
        for (const [sD, KD] of this.written) KD.seq > DD || (this.written.delete(sD), wD.has(KD.seq) ? this.refusedFile(sD, KD) : this.takenFile(sD, KD, !KD.empty && !pD.has(KD.seq)))
      }
      takenFile(DD, zD, wD) {
        const {
          attempt: pD
        } = zD;
        if (wD) {
          var sD;
          this.drawn.set(DD, zD.url), this.undrawn.delete(DD), void 0 !== pD.inPlaceOf ? this.refusedPack.set(DD, pD.inPlaceOf) : pD.Qg || this.refusedPack.delete(DD), null === (sD = this.onTaken) || void 0 === sD || sD.call(this, DD, !0);
          const wD = this.pending.get(DD);
          if (!0 === (null === wD || void 0 === wD ? void 0 : wD.Qg) && wD.url !== zD.url) {
            const wD = this.Jf(DD, !0);
            wD.Qg = !0, wD.recheck = !0, this.fetch(DD, wD, zD.url)
          }
        } else {
          var KD;
          this.drawn.has(DD) || this.undrawn.add(DD), null === (KD = this.onTaken) || void 0 === KD || KD.call(this, DD, !1)
        }
        pD.recheck && this.resendIfChanged(DD)
      }
      refusedFile(DD, zD) {
        var wD, pD;
        if (null === (wD = this.onTaken) || void 0 === wD || wD.call(this, DD, !1), this.refusedPack.set(DD, zD.url), this.pending.has(DD)) return void(null === (pD = this.onPackFileFailed) || void 0 === pD || pD.call(this, DD, ID(zD.url)));
        const sD = this.Jf(DD, zD.attempt.ask);
        sD.recheck = zD.attempt.recheck, this.afterRefusal(DD, sD, zD.url)
      }
      async afterRefusal(DD, zD, wD) {
        var pD;
        let sD;
        try {
          sD = await this.wanted(DD)
        } catch (KD) {
          return void(this.pending.get(DD) === zD && this.giveUp(DD, zD, wD, KD))
        }
        this.pending.get(DD) === zD && (sD.inPlaceOf !== wD ? zD.ask || (null !== (pD = sD.url) && void 0 !== pD ? pD : void 0) !== this.drawn.get(DD) ? this.fetch(DD, zD, sD.url, sD.inPlaceOf) : this.pending.delete(DD) : this.fallBack(DD, zD, wD, ID(wD)))
      }
      Jf(DD, zD) {
        const wD = {
          url: void 0,
          ask: zD,
          Qg: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(DD, wD);
        for (let pD = this.ready.length - 1; pD >= 0; pD--) this.ready[pD].file === DD && this.ready.splice(pD, 1);
        return wD
      }
      async wanted(DD) {
        const zD = await this.files.url(DD);
        return null !== zD && this.refusedPack.get(DD) === zD ? {
          url: await this.files.shippedUrl(DD),
          inPlaceOf: zD
        } : {
          url: zD,
          inPlaceOf: void 0
        }
      }
      fetchWanted(DD, zD) {
        const wD = this.files.url(DD);
        wD instanceof Promise ? wD.then((wD => {
          this.fetchFound(DD, zD, wD)
        }), (wD => {
          this.pending.get(DD) === zD && this.giveUp(DD, zD, "", wD)
        })) : this.fetchFound(DD, zD, wD)
      }
      fetchFound(DD, zD, wD) {
        null !== wD && this.refusedPack.get(DD) === wD ? Promise.resolve(this.files.shippedUrl(DD)).then((pD => {
          this.fetch(DD, zD, pD, wD)
        }), (pD => {
          this.pending.get(DD) === zD && this.giveUp(DD, zD, wD, pD)
        })) : this.fetch(DD, zD, wD)
      }
      fetch(DD, zD, wD, pD) {
        this.pending.get(DD) === zD && (zD.url = wD, zD.inPlaceOf = pD, null !== wD ? this.load(DD, zD, wD) : this.buildFile(DD, zD, "", RD))
      }
      load(DD, zD, wD) {
        const pD = this.Nf.get(DD);
        (null === pD || void 0 === pD ? void 0 : pD.url) !== wD ? this.fetchFile(wD).then((pD => {
          var sD, KD;
          this.pending.get(DD) === zD && (this.keptTotal += pD.byteLength - (null !== (sD = null === (KD = this.Nf.get(DD)) || void 0 === KD ? void 0 : KD.glb.byteLength) && void 0 !== sD ? sD : 0), this.Nf.set(DD, {
            url: wD,
            glb: pD
          }), this.buildFile(DD, zD, wD, pD))
        }), (pD => {
          this.pending.get(DD) === zD && this.fallBack(DD, zD, wD, pD)
        })) : this.buildFile(DD, zD, wD, pD.glb)
      }
      buildFile(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const rD = pD.byteLength > 0 && (0, KD.k)(wD) ? (DD | KD.c) >>> 0 : DD;
        this.queueRecord(DD, zD, wD, pD, this.build(rD, pD), sD)
      }
      queueRecord(DD, zD, wD, pD, KD, LD) {
        KD.then((KD => {
          if (this.pending.get(DD) !== zD) return;
          if (sD.q + (0, sD.we)(KD.byteLength) > sD.Jc) return void this.ringRefused(DD, zD, wD, new AD(`${BD(wD)}'s record is ${KD.byteLength-rD.e} bytes, past the cmd ring's ${sD.Jc}`), LD);
          const cD = {
            file: DD,
            url: wD,
            payload: KD,
            glb: pD,
            attempt: zD
          };
          LD ? this.ready.unshift(cD) : this.ready.push(cD)
        }))
      }
      async fallBack(DD, zD, wD, pD) {
        var sD;
        let KD = null,
          rD = pD;
        try {
          KD = await this.files.shippedUrl(DD)
        } catch (LD) {
          rD = LD
        }
        this.pending.get(DD) === zD && (null !== KD && KD !== wD ? (null === (sD = this.onPackFileFailed) || void 0 === sD || sD.call(this, DD, pD), zD.ask || this.drawn.get(DD) !== KD ? (zD.url = KD, zD.inPlaceOf = wD, this.load(DD, zD, KD)) : this.pending.delete(DD)) : this.giveUp(DD, zD, wD, rD))
      }
      ringRefused(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, KD.k)(wD) ? this.fallBack(DD, zD, wD, pD): this.giveUp(DD, zD, wD, pD, sD)
      }
      giveUp(DD, zD, wD, sD) {
        let KD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: DD,
          url: BD(wD),
          error: sD,
          startup: this.startupLeft.has(DD)
        }), zD.ask || !this.drawn.has(DD) ? (0, pD.O)(sD) ? this.queueRecord(DD, zD, wD, RD, Promise.resolve((0, rD.l)(DD, (0, LD.m)(sD))), KD) : this.buildFile(DD, zD, wD, RD, KD) : this.pending.delete(DD)
      }
      async resendIfChanged(DD) {
        var zD;
        if (0 !== (DD & KD.f)) return;
        let wD;
        try {
          wD = await this.wanted(DD)
        } catch {
          return
        }(null !== (zD = wD.url) && void 0 !== zD ? zD : void 0) === this.drawn.get(DD) || this.pending.has(DD) || this.written.has(DD) || this.fetch(DD, this.Jf(DD, !1), wD.url, wD.inPlaceOf)
      }
      drain(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === DD) return;
        let wD = 0,
          pD = 0;
        for (; pD < this.ready.length && wD < 262144;) {
          const LD = this.ready[pD];
          if (this.written.has(LD.file)) {
            pD++;
            continue
          }
          const RD = this.nextSeq;
          new DataView(LD.payload.buffer, LD.payload.byteOffset, LD.payload.byteLength).setUint32(rD.h, RD, !0);
          const UD = LD.attempt.Qg && LD.glb.byteLength > 0 && this.drawn.get(LD.file) === LD.url;
          if (DD(cD, UD ? 1 : 0, LD.payload)) {
            if (this.nextSeq = RD >= gD - 1 ? 1 : RD + 1, this.ready.splice(pD, 1), wD += LD.payload.byteLength, this.pending.delete(LD.file), this.startupLeft.delete(LD.file), this.written.set(LD.file, {
                seq: RD,
                url: LD.url,
                empty: 0 === LD.glb.byteLength,
                attempt: LD.attempt
              }), LD.glb.byteLength > 0) try {
              var sD;
              null === (sD = this.onWritten) || void 0 === sD || sD.call(this, LD.file, LD.glb)
            } catch (KD) {
              console.warn("ModelFeed: reading the file's images failed", KD)
            }
          } else {
            if (null === zD || 0 === LD.glb.byteLength || zD(LD.payload.byteLength)) return;
            this.ready.splice(pD, 1);
            const DD = new AD(`${BD(LD.url)}'s record is ${LD.payload.byteLength-rD.e} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(LD.file, LD.attempt, LD.url, DD, !0)
          }
        }
      }
    }

    function ID(DD) {
      return new UD(`presentation refused ${BD(DD)}`)
    }

    function BD(DD) {
      return DD.startsWith("data:") ? `${DD.slice(0,Math.min(Math.max(DD.indexOf(","),5),64))},...` : DD
    }
  },
  40710: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD,
      f: () => KD,
      g: () => RD,
      k: () => LD,
      n: () => gD,
      q: () => cD
    });
    var pD = wD(2868),
      sD = wD(3186);
    const KD = 2147483648,
      rD = 1073741824;

    function LD(DD) {
      return DD.startsWith("data:")
    }

    function cD(DD) {
      let {
        onTableFailed: zD,
        packUrl: wD
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const pD = gD();
      pD.catch((DD => {
        null === zD || void 0 === zD || zD(DD)
      }));
      const sD = async zD => (await pD).fileUrl((zD & ~KD) >>> 0, DD);
      return {
        startup: [],
        url: async DD => {
          if (wD && 0 === (DD & KD)) {
            const zD = await pD,
              sD = zD.filePackName(DD),
              KD = null === sD || "lifeform" === zD.fileSource(DD) ? null : wD(sD);
            if (null !== KD) return KD
          }
          return sD(DD)
        },
        shippedUrl: sD
      }
    }

    function gD() {
      return wD.e(41).then((() => wD(42510)))
    }
    async function RD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return DD.startsWith("data:") ? (0, sD.d)(DD.slice(DD.indexOf(",") + 1), zD) : (0, pD.C)(DD, {
        spare: zD
      })
    }
  },
  40719: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD,
      h: () => RD,
      i: () => fD,
      k: () => GD,
      l: () => ID,
      m: () => UD,
      q: () => BD
    });
    const pD = 826427981,
      sD = 1,
      KD = 2,
      rD = 44,
      LD = 46,
      cD = 58,
      gD = 8,
      RD = 4;

    function AD(DD, zD, wD) {
      const sD = (new TextEncoder).encode(wD),
        KD = gD + 4 * (zD.length + 2),
        rD = new Uint8Array(KD + (sD.byteLength + 3 & -4)),
        LD = new DataView(rD.buffer);
      return LD.setUint32(0, DD, !0), LD.setUint32(gD, pD, !0), zD.forEach(((DD, zD) => {
        LD.setUint32(gD + 4 * (zD + 1), DD, !0)
      })), LD.setUint32(KD - 4, sD.byteLength, !0), rD.set(sD, KD), rD
    }

    function UD(DD, zD) {
      return AD(DD, [KD], zD)
    }

    function fD(DD, zD) {
      return AD(DD, [sD, LD], zD)
    }

    function ID(DD, zD) {
      return AD(DD, [sD, cD], zD)
    }

    function BD(DD, zD) {
      return AD(DD, [sD, rD], zD)
    }

    function GD(DD) {
      const zD = gD;
      if (DD.byteLength < zD + 12) return !1;
      const wD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      return wD.getUint32(zD, !0) === pD && wD.getUint32(zD + 4, !0) === sD && wD.getUint32(zD + 8, !0) === rD
    }
  },
  40645: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      f: () => RD,
      i: () => rD,
      k: () => cD
    });
    var pD = wD(36254);
    class sD extends Error {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${DD}: the module trapped${wD?" in an earlier call":""}: ${String(zD)}`, {
          cause: zD
        }), this.site = DD, this.trap = zD, this.earlier = wD, this.name = "ModuleTrapError", zD instanceof Error && void 0 !== zD.stack && (this.stack = `${this.name}: ${this.message}\n${zD.stack}`)
      }
    }
    const KD = new WeakMap;

    function rD(DD) {
      return KD.has(DD)
    }

    function LD(DD, zD) {
      KD.has(DD) || KD.set(DD, zD)
    }

    function cD(DD, zD) {
      return !!(0, pD.j)(zD) && (LD(DD, zD), !0)
    }
    const gD = [
      ["error", DD => DD.error],
      ["unhandledrejection", DD => DD.reason]
    ];

    function RD(DD, zD, wD) {
      let rD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return KD.has(DD) ? Promise.reject(new sD(zD, KD.get(DD), !0)) : new Promise(((KD, cD) => {
        const RD = wD => {
            LD(DD, wD), fD(), cD(new sD(zD, wD))
          },
          AD = DD => {
            DD instanceof WebAssembly.RuntimeError ? RD(DD) : (fD(), cD(DD))
          },
          UD = gD.map((DD => {
            let [zD, wD] = DD;
            return [zD, DD => {
              const zD = wD(DD);
              (0, pD.j)(zD) && RD(zD)
            }]
          })),
          fD = () => {
            for (const [DD, zD] of UD) null === rD || void 0 === rD || rD.removeEventListener(DD, zD)
          };
        for (const [DD, zD] of UD) null === rD || void 0 === rD || rD.addEventListener(DD, zD);
        let ID;
        try {
          ID = wD()
        } catch (BD) {
          return void AD(BD)
        }
        ID.then((DD => {
          fD(), KD(DD)
        }), AD)
      }))
    }
  },
  40630: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => dD,
      D: () => XD,
      H: () => bD,
      L: () => mD,
      N: () => jD,
      Q: () => iD,
      R: () => TD,
      b: () => QD,
      d: () => OD,
      f: () => lD,
      h: () => SD,
      k: () => MD,
      n: () => ED,
      p: () => hD,
      t: () => PD,
      w: () => xD,
      x: () => kD,
      y: () => yD
    });
    var pD = wD(212),
      sD = wD(20),
      KD = wD(3556),
      rD = wD(330),
      LD = wD(35),
      cD = wD(40634),
      gD = wD(36473),
      RD = wD(40659),
      AD = (wD(40689), wD(40748)),
      UD = wD(40681);
    const fD = "wasmJoinBuild";
    let ID = null,
      BD = null,
      GD = null;

    function hD(DD) {
      GD = DD
    }
    let nD = !1;

    function MD() {
      nD = !0
    }

    function OD() {
      return nD
    }
    let JD = !1;

    function ED() {
      JD = !0
    }

    function QD() {
      return JD
    }

    function XD() {
      return GD
    }
    let VD = null;

    function PD(DD) {
      VD = DD, (0, rD.d)(DD)
    }
    const CD = "wasmClientRenderLost";

    function xD() {
      LD.k.setItem(CD, !0)
    }

    function TD() {
      return !0 === LD.k.getItem(CD)
    }

    function bD() {
      return VD
    }

    function jD() {
      return null === ID && (LD.h.removeItem("wasmLastPick"), LD.h.removeItem("wasmGuessVerdict"), (0, rD.i)(), ID = (0, cD.y)(RD.f).then((DD => (null === DD || (0, cD.n)(DD) || (BD = AD.e[DD.backend], sD.e.followGameGpu("webgpu" === DD.backend ? DD.adapter : null), "webgpu" === DD.backend && (0, UD.c)()), DD)))), ID
    }

    function dD() {
      return BD
    }

    function SD(DD) {
      return DD ? DD.load() : Promise.resolve().then((function() {
        var DD = new Error("Cannot find module '@bloxd/wasm/client'");
        throw DD.code = "MODULE_NOT_FOUND", DD
      })).then((DD => DD.bloxdWasmClient))
    }

    function iD(DD) {
      LD.h.setItem(fD, DD)
    }
    async function lD() {
      if (null === RD.f) return SD(null);
      const DD = LD.h.getItem(fD);
      let zD = "none" === DD ? null : "webgl";
      return null !== DD && "none" !== DD && ("string" === typeof DD && void 0 !== (0, pD.d)(RD.f, DD) ? zD = DD : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(DD)}, is none of this client's: guessing WebGL2's`)), null === zD ? null : RD.f[zD]()
    }
    let WD = null,
      ND = null,
      ZD = null;

    function yD() {
      return WD ??= jD().then((async DD => {
        const zD = null !== DD && !(0, cD.n)(DD),
          wD = {
            indirectHangs: zD && await (0, cD.G)(DD, window.location.search),
            storagePullBreaks: zD && (0, cD.V)(DD, window.location.search),
            splitPassBreaks: zD && (0, cD.R)(DD, window.location.search),
            earlySky: zD && (0, cD.D)(DD, window.location.search),
            instancedTerrain: zD ? (0, cD.J)(DD, window.location.search) : null,
            cellLight: zD && await (0, KD.m)("cellLight"),
            framesAhead: (0, cD.i)(window.location.search),
            webGpuRestores: !zD || (0, cD.X)(DD, (0, gD.b)()),
            bufferCopiesCrash: zD && (0, cD.B)(DD, window.location.search)
          };
        return ND = wD.indirectHangs, ZD = !wD.webGpuRestores, wD
      })), WD
    }

    function kD() {
      return ND
    }

    function mD() {
      return ZD
    }
  },
  40895: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD
    });
    var pD = wD(36290),
      sD = wD(40780),
      KD = wD(36473);

    function rD(DD, zD) {
      return (0, pD.m)(DD, sD.e, {
        ...zD,
        memoryMaximumBytes: (0, KD.o)()
      })
    }
  },
  40672: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => XD,
      g: () => MD,
      j: () => nD,
      n: () => QD,
      o: () => xD,
      r: () => CD,
      v: () => TD,
      y: () => JD
    });
    var pD = wD(4820),
      sD = wD(40681);
    const KD = 1,
      rD = 18,
      LD = 19,
      cD = 20,
      gD = 21,
      RD = {
        [KD]: "link",
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
        [rD]: "retry linked",
        [LD]: "fallback linked",
        [cD]: "fallback failed",
        [gD]: "link stalled",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function AD(DD, zD, wD) {
      return DD === rD ? "program retry" : DD === KD ? "program link" : DD === gD ? "program link stall" : DD === LD || DD === cD ? `program ${zD} ${wD}` : "program"
    }
    const UD = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      fD = {
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
      ID = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      BD = {
        11: "none read after view",
        12: "some read after view"
      },
      GD = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...BD
      },
      hD = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function nD(DD, zD) {
      return DD === pD.o.RenderSerialLinks && void 0 !== BD[zD]
    }

    function MD(DD, zD) {
      return DD === pD.o.RenderSerialLinks && void 0 !== hD[15 & zD]
    }
    const OD = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function JD(DD) {
      return String(DD).replace(/\d/g, (DD => String.fromCharCode(97 + Number(DD))))
    }

    function ED(DD, zD) {
      var wD;
      return null !== (wD = DD[zD]) && void 0 !== wD ? wD : JD(zD)
    }

    function QD() {
      return JD((0, sD.b)())
    }

    function XD(DD, zD) {
      switch (DD) {
        case pD.o.RenderSceneRowNotDrawn:
          return {
            words: ` ${ED(fD,zD)}`, instance: String(zD), group: String(DD)
          };
        case pD.o.RenderChunkMeshNotDrawn: {
          const wD = 0 === (128 & zD) ? "" : " shortage",
            pD = zD >>> 8;
          return {
            words: ` ${ED(ID,127&zD)}${wD}${0===pD?"":` kind ${JD(pD)}`}`,
            instance: String(zD),
            group: String(DD)
          }
        }
        case pD.o.RenderInternal: {
          const wD = ED(UD, 255 & zD),
            pD = zD >>> 8 & 255;
          if (0 === pD) return {
            words: ` ${wD}`,
            instance: String(zD),
            group: String(DD)
          };
          const sD = ED(RD, pD),
            KD = zD >>> 16;
          return {
            words: ` ${wD} ${sD} program ${JD(KD)}`,
            instance: `${wD} ${sD} ${KD}`,
            group: AD(pD, sD, wD),
            gpuDetails: {
              programFailure: sD,
              program: String(KD)
            }
          }
        }
        case pD.o.RenderSerialLinks: {
          if (MD(DD, zD)) {
            const DD = function(DD) {
              const zD = (zD, wD) => JD(DD >>> zD & (1 << wD) - 1),
                wD = DD >>> 30 & 1 ? " restored" : "";
              return `link census ${hD[15&DD]} linked ${zD(22,8)} failed ${zD(4,6)} retried ${zD(10,6)} fallback ${zD(16,6)}${wD}`
            }(zD);
            return {
              words: ` ${DD}`,
              instance: String(15 & zD),
              group: "link census",
              gpuDetails: {
                linkCensus: DD
              }
            }
          }
          const wD = ED(GD, zD);
          return {
            words: ` ${wD}`,
            instance: String(zD),
            group: String(DD),
            gpuDetails: {
              serialLinks: wD
            }
          }
        }
        case pD.o.RenderGlErrorAfterRestore: {
          const wD = ED(OD, 65535 & zD),
            pD = zD >>> 16,
            sD = 65535 !== pD;
          return {
            words: ` ${wD}${sD?` program ${JD(pD)}`:""}`,
            instance: String(zD),
            group: String(DD),
            gpuDetails: sD ? {
              glError: wD,
              program: String(pD)
            } : {
              glError: wD
            }
          }
        }
        default:
          return null
      }
    }
    const VD = 2,
      PD = new Map;

    function CD(DD) {
      let {
        group: zD,
        instance: wD
      } = DD, pD = PD.get(zD);
      return void 0 === pD && (pD = [], PD.set(zD, pD)), !pD.includes(wD) && (pD.length >= VD || (pD.push(wD), !1))
    }

    function xD() {
      return PD.size > 0
    }

    function TD() {
      PD.clear()
    }
  },
  40659: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD,
      f: () => KD
    });
    var pD = wD(40666);
    const sD = new WeakSet;
    const KD = {
        webgpu: async () => (function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === DD || sD.has(DD.prototype)) return;
          sD.add(DD.prototype);
          const zD = DD.prototype.requestDevice;
          DD.prototype.requestDevice = function(DD) {
            var wD;
            const sD = null !== (wD = null === DD || void 0 === DD ? void 0 : DD.requiredLimits) && void 0 !== wD ? wD : {},
              KD = Object.keys(sD).filter((DD => !(DD in this.limits)));
            if (0 === KD.length) return zD.call(this, DD);
            const rD = Object.fromEntries(Object.entries(sD).filter((DD => {
              let [zD] = DD;
              return zD in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${KD.join(", ")}`), (0, pD.reportDroppedRequiredLimits)(KD), zD.call(this, {
              ...DD,
              requiredLimits: rD
            })
          }
        }(), (await wD.e(8).then((() => wD(42470)))).bloxdWasmWebgpu),
        webgl: async () => (await wD.e(6).then((() => wD(42484)))).bloxdWasmWebgl,
        webgl1: async () => (await wD.e(7).then((() => wD(42493)))).bloxdWasmWebgl1
      },
      rD = async () => (await wD.e(5).then((() => wD(42499)))).compileAnimationPackInWasm
  },
  40615: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => hD,
      f: () => GD,
      j: () => JD
    });
    var pD = wD(6678),
      sD = wD(25),
      KD = wD(4313),
      rD = wD(4820),
      LD = wD(6670),
      cD = wD(40617);

    function gD(DD, zD) {
      const wD = (0, LD.b)(zD.variants);
      return DD.setShaderPack(wD.variantFlags, wD.hooks, wD.moduleCodes, (0, cD.z)(zD.layers), cD.n[zD.Dg], zD.keepCircleShadows)
    }
    const RD = 0,
      AD = 1,
      UD = 2,
      fD = "shaderPack:failedToCompile",
      ID = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      BD = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function GD(DD, zD) {
      var wD;
      const pD = null !== (wD = null === DD || void 0 === DD ? void 0 : DD.reason) && void 0 !== wD ? wD : "none";
      return ID.has(pD) ? {
        messageKey: zD ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === pD && "override" === (null === DD || void 0 === DD ? void 0 : DD.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: BD.has(pD) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class hD extends Error {
      constructor(DD) {
        super(`the shader pack can't run in this game: ${DD}`), this.messageKey = DD, this.name = "ShaderPackJoinError"
      }
    }
    const nD = "strict";
    class MD {
      constructor(DD) {
        this.deps = DD, this.pagePack = void 0, this.loaded = null, this.Dg = nD, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = DD.load().catch((zD => (DD.warn("the shader pack could not load: the game draws without it", zD), {
          status: "none"
        }))).then((DD => (this.loaded = DD, "active" === DD.status && (this.handOverToPreviews(DD), null !== DD.harnessPolicy && (this.Dg = DD.harnessPolicy, this.handOver())), DD)))
      }
      async join(DD) {
        this.leave();
        const zD = this.game,
          [wD, sD] = await Promise.all([this.pagePack, this.policyOf(DD)]);
        if (zD !== this.game || "none" === wD.status) return null;
        const KD = "active" === wD.status ? wD.pack.variants : wD.variants,
          rD = (0, pD.f)(KD, sD);
        if (rD && "active" === wD.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (rD) {
          const DD = this.cantRun(wD, sD);
          if (null !== DD) return DD
        } else if ("blocked" === wD.status || null === this.deps.core) return null;
        return this.Dg = sD, this.handOver(), rD && this.refused ? fD : (this.joined = !0, this.offInThisGame = !rD, null)
      }
      async replay(DD) {
        const zD = await this.join(DD);
        null === zD ? this.playable() : this.deps.failInGame(zD)
      }
      cantRun(DD, zD) {
        const {
          core: wD,
          noWebGpu: pD
        } = this.deps;
        if ("blocked" === DD.status) {
          return "shaderPack:failedUnchecked" === DD.messageKey && null === wD && pD.noAdapter ? pD.messageKey : DD.messageKey
        }
        return this.refused || this.failedPolicies.has(zD) ? fD : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var DD;
        return this.runsInJoinedGame() && "active" === (null === (DD = this.loaded) || void 0 === DD ? void 0 : DD.status) ? function(DD, zD) {
          const wD = DD.filter((DD => (0, pD.f)([DD], zD))),
            sD = DD => wD.some((zD => zD[DD]));
          return {
            sceneDepth: sD("sceneDepth"),
            sunShadow: sD("sunShadow"),
            airShadow: sD("airShadow")
          }
        }(this.loaded.pack.variants, this.Dg) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(fD) : (null !== this.couldntRun ? this.notify(KD.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Dg) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(DD) {
        for (const {
            code: zD,
            detail: wD
          }
          of DD)
          if (zD === rD.o.RenderShaderPackNotRun) switch (255 & wD) {
            case RD:
              this.refused = !0, this.failed();
              break;
            case AD:
              this.failedPolicies.add(this.Dg), this.failed();
              break;
            case UD:
              this.failedModelPolicies.add(this.Dg), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(fD) : this.failedWhileJoining = !0)
      }
      fail(DD) {
        this.leave(), this.deps.failInGame(DD)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(DD, zD) {
        const wD = this.game;
        this.deps.notify(DD, (() => wD === this.game && this.joined), zD)
      }
      handOver() {
        var DD;
        const {
          core: zD
        } = this.deps;
        null !== zD && "active" === (null === (DD = this.loaded) || void 0 === DD ? void 0 : DD.status) && (gD(zD, {
          ...this.loaded.pack,
          Dg: this.Dg
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(DD) {
        let {
          pack: zD,
          harnessPolicy: wD
        } = DD;
        const {
          previews: pD
        } = this.deps;
        null !== pD && gD(pD, {
          ...zD,
          Dg: null !== wD && void 0 !== wD ? wD : nD
        })
      }
      policyOf(DD) {
        return this.deps.policyOf(DD).catch((DD => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", DD), nD)))
      }
    }
    const OD = "wasmShaderPackNotice";

    function JD(DD, zD, wD, pD) {
      return sD.l.subscribe(OD, (DD => {
        let {
          translationKey: zD,
          stillCurrent: wD,
          reasonKey: pD
        } = DD;
        wD() && sD.l.KG("chat", (0, KD.k)(zD, pD))
      })), new MD({
        load: ED,
        policyOf: QD,
        core: DD,
        previews: zD,
        noWebGpu: wD,
        notify: (DD, zD, wD) => {
          const pD = {
            translationKey: DD,
            stillCurrent: zD,
            reasonKey: wD
          };
          sD.l.KG(OD, pD, !0)
        },
        failInGame: DD => {
          sD.l.KG(KD.g, DD)
        },
        warn: pD
      })
    }
    async function ED() {
      const [{
        shaderPackPage: DD,
        harnessShaderPackMode: zD
      }, {
        shaderPackTextures: pD
      }] = await Promise.all([wD.e(115).then((() => wD(39186))), wD.e(116).then((() => wD(6664)))]), sD = await DD.load();
      return "active" !== sD.status ? sD : {
        status: "active",
        pack: {
          variants: sD.pack.variants,
          layers: pD().layers,
          keepCircleShadows: sD.pack.keepCircleShadows
        },
        harnessPolicy: zD()
      }
    }
    async function QD(DD) {
      var zD;
      const [{
        shaderPackPage: pD,
        harnessShaderPackMode: sD
      }, {
        getShaderPackPolicy: KD
      }] = await Promise.all([wD.e(115).then((() => wD(39186))), wD.e(91).then((() => wD(41179)))]);
      return await pD.load(), null !== (zD = sD()) && void 0 !== zD ? zD : KD(DD)
    }
  },
  40732: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => LD,
      f: () => GD,
      g: () => cD,
      h: () => gD,
      j: () => RD,
      l: () => UD
    });
    var pD = wD(40734),
      sD = wD(40743);
    const KD = "atlas:",
      rD = 3e4;
    class LD extends Error {
      constructor(DD, zD) {
        super(`fetching ${DD} answered HTTP ${zD}`), this.url = DD, this.status = zD, this.name = "TerrainTextureFetchError"
      }
    }

    function cD(DD) {
      if (!DD.startsWith(KD)) return null;
      const zD = Number(DD.slice(KD.length));
      return Number.isInteger(zD) && zD >= 0 ? zD : null
    }
    async function gD() {
      const DD = await wD.e(204).then((() => wD(34299)));
      return {
        atlasSheets: DD.blockAtlasUrls,
        texture: zD => {
          var wD, pD, KD;
          return null !== (wD = null !== (pD = null !== (KD = DD.animatedBlockTextures[zD]) && void 0 !== KD ? KD : DD.rotatedBlockTextures[zD]) && void 0 !== pD ? pD : sD.b[zD]) && void 0 !== wD ? wD : null
        }
      }
    }
    async function RD(DD) {
      const zD = new AbortController,
        wD = setTimeout((() => {
          zD.abort(new DOMException(`${DD} took over ${rD} ms`, "TimeoutError"))
        }), rD);
      let pD;
      try {
        const wD = await fetch(DD, {
          signal: zD.signal
        });
        if (!wD.ok) throw new LD(DD, wD.status);
        pD = await wD.blob()
      } finally {
        clearTimeout(wD)
      }
      const sD = await createImageBitmap(pD, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return UD(sD)
      } finally {
        sD.close()
      }
    }
    const AD = 8192;

    function UD(DD) {
      const {
        width: zD,
        height: wD
      } = DD, sD = Math.max(1, Math.min(wD, AD)), KD = (0, pD.d)(zD, sD, {
        willReadFrequently: !0
      });
      if (!KD) throw new Error("no 2D context to read the texture back");
      KD.globalCompositeOperation = "copy";
      const rD = new Uint8Array(zD * wD * 4);
      for (let pD = 0; pD < wD; pD += sD) {
        const LD = Math.min(sD, wD - pD);
        KD.drawImage(DD, 0, pD, zD, LD, 0, 0, zD, LD), rD.set(KD.getImageData(0, 0, zD, LD).data, pD * zD * 4)
      }
      return {
        width: zD,
        height: wD,
        pixels: rD
      }
    }
    async function fD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RD;
      const pD = [],
        sD = await Promise.all(DD.map((async DD => {
          var sD, rD;
          const LD = null !== (sD = null === (rD = zD.decoded) || void 0 === rD ? void 0 : rD.call(zD, DD)) && void 0 !== sD ? sD : null,
            gD = null === LD ? function(DD, zD) {
              if (DD.startsWith(KD)) {
                var wD;
                const pD = cD(DD);
                return null === pD ? null : null !== (wD = zD.atlasSheets[pD]) && void 0 !== wD ? wD : null
              }
              return zD.texture(DD)
            }(DD, zD) : null,
            RD = null !== LD && void 0 !== LD ? LD : null === gD ? null : wD(gD);
          if (null === RD) return pD.push({
            name: DD,
            url: gD,
            error: new Error(`no URL for terrain texture ${DD}`)
          }), null;
          try {
            const zD = await RD;
            if (zD.pixels.byteLength !== zD.width * zD.height * 4) throw new Error(`decoded ${zD.pixels.byteLength} bytes for ${zD.width}x${zD.height} texels`);
            return {
              name: DD,
              texture: zD
            }
          } catch (AD) {
            return pD.push({
              name: DD,
              url: gD,
              error: AD
            }), null
          }
        }))),
        rD = sD.filter((DD => null !== DD)),
        LD = new Uint32Array(2 * rD.length);
      rD.forEach(((DD, zD) => {
        let {
          texture: wD
        } = DD;
        LD[2 * zD] = wD.width, LD[2 * zD + 1] = wD.height
      }));
      return {
        handOver: {
          names: rD.map((DD => {
            let {
              name: zD
            } = DD;
            return zD
          })),
          textures: rD.map((DD => {
            let {
              texture: zD
            } = DD;
            return zD.pixels
          })),
          sizes: LD
        },
        failures: pD
      }
    }
    const ID = [2e3, 1e4, 3e4, 6e4, 12e4];

    function BD() {}
    class GD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ID,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = DD, this.retryMs = zD, this.keepBelow = wD, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gD,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const pD = ++this.started,
          sD = {
            decode: wD.decode,
            wholeAtlas: wD.wholeAtlas
          };
        return this.loadAndHandOver(zD, sD, DD, (() => {
          var DD;
          return pD < this.landed || !1 === (null === (DD = wD.wanted) || void 0 === DD ? void 0 : DD.call(wD))
        }), {
          onTaken: (DD, wD) => {
            this.landed = pD, this.current = {
              mine: pD,
              sources: zD,
              load: sD,
              Nf: DD,
              failed: wD
            }
          }
        })
      }
      restore(DD) {
        var zD;
        const wD = this.current;
        if (null === wD) return Promise.resolve(null);
        if ((null === (zD = this.restoring) || void 0 === zD ? void 0 : zD.mine) === wD.mine) return this.restoring.done;
        const pD = {
          mine: wD.mine,
          done: this.restoreLanded(wD, DD).finally((() => {
            this.restoring === pD && (this.restoring = null)
          }))
        };
        return this.restoring = pD, pD.done
      }
      async restoreLanded(DD, zD) {
        const wD = () => this.landed !== DD.mine,
          {
            Nf: pD
          } = DD;
        if (null !== pD) return this.stopped() ? null : this.core.setTerrainTextures(pD.names, pD.textures, pD.sizes);
        let sD = zD;
        for (let KD = 0;; KD++) {
          const zD = this.retryMs.at(KD),
            pD = {
              allOrNothingExcept: void 0 === zD ? void 0 : DD.failed
            },
            rD = await this.loadAndHandOver(DD.sources, DD.load, sD, wD, pD);
          if (!1 !== rD || void 0 === zD || this.stopped()) return rD;
          if (sD = BD, await new Promise((DD => {
              setTimeout(DD, zD)
            })), wD()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const KD = this.core.terrainTextureNames();
        var rD;
        if (0 === KD.length) return null === (rD = sD.onTaken) || void 0 === rD || rD.call(sD, null, new Set), !0;
        let LD, gD;
        try {
          LD = await DD(), gD = await fD(KD, LD, zD.decode)
        } catch (GD) {
          return pD() ? null : (wD({
            name: null,
            url: null,
            error: GD
          }), !1)
        }
        if (pD() || this.stopped()) return null;
        for (const cD of gD.failures) wD(cD);
        const RD = sD.allOrNothingExcept;
        if (void 0 !== RD && gD.failures.some((DD => {
            let {
              name: zD
            } = DD;
            return null === zD || !RD.has(zD)
          })) || !0 === zD.wholeAtlas && gD.failures.some((DD => {
            let {
              name: zD
            } = DD;
            return null === zD || null !== cD(zD)
          }))) return !1;
        const {
          handOver: AD
        } = gD, UD = function(DD) {
          return DD.textures.reduce(((DD, zD) => DD + zD.byteLength), 0)
        }(AD) < this.keepBelow, ID = this.core.setTerrainTextures(AD.names, AD.textures, AD.sizes, UD ? void 0 : () => {
          !async function(DD, zD) {
            await zD;
            for (const {
                buffer: pD
              }
              of DD) {
              const DD = pD;
              var wD;
              if (!DD.detached) null === (wD = DD.transfer) || void 0 === wD || wD.call(DD, 0)
            }
          }(AD.textures, LD.heldUntil)
        });
        if (ID) {
          var BD;
          const DD = new Set(gD.failures.flatMap((DD => {
            let {
              name: zD
            } = DD;
            return null === zD ? [] : [zD]
          })));
          null === (BD = sD.onTaken) || void 0 === BD || BD.call(sD, UD ? AD : null, DD)
        }
        return ID
      }
    }
  },
  40681: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => LD,
      c: () => cD
    });
    var pD = wD(103);
    const sD = "webgpuPipeline";

    function KD(DD) {
      return DD.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let rD = null;

    function LD() {
      if (null === rD) try {
        DD = (0, pD.getBrowserName)(), zD = (0, pD.getBrowserVersion)(), wD = (0, pD.getOperatingSystem)(), sD = (0, pD.getOperatingSystemVersion)(), rD = `${DD.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===zD?"unknown":KD(zD)}-${wD}${void 0===sD?"":`_${KD(sD)}`}`
      } catch (LD) {
        console.warn("The user agent couldn't be read for its browser code", LD), rD = "unknown"
      }
      var DD, zD, wD, sD;
      return rD
    }

    function cD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const zD = `WGPU-${LD()}`,
        pD = (DD, pD) => {
          const {
            reason: KD,
            message: rD
          } = pD, LD = {
            pipeline: null !== DD && void 0 !== DD ? DD : "",
            reason: String(KD),
            browserMessage: String(rD)
          };
          Promise.resolve().then((() => wD(40666))).then((DD => {
            let {
              reportCrash: wD
            } = DD;
            wD({
              kind: "coreError",
              code: zD,
              site: sD,
              fatal: !1,
              message: `${LD.pipeline} ${LD.reason}: ${LD.browserMessage}`,
              details: LD,
              error: pD
            })
          })).catch((DD => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", DD)
          }))
        },
        KD = DD.createRenderPipelineAsync;
      DD.createRenderPipelineAsync = function(DD) {
        return KD.call(this, DD).catch((zD => {
          throw pD(DD.label, zD), zD
        }))
      };
      const rD = DD.createComputePipelineAsync;
      DD.createComputePipelineAsync = function(DD) {
        return rD.call(this, DD).catch((zD => {
          throw pD(DD.label, zD), zD
        }))
      }
    }
  },
  40788: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/bloxd_wasm_models_bg.bb21bce727311f7e7c54.wasm"
  },
  40782: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/bloxd_wasm_workers_bg.d01206b2af08189a0ae1.wasm"
  },
  40780: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      e: () => pD
    });
    const pD = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new wD.U(wD(40782))
      }
    };
    const sD = {
      name: "bloxd_wasm_models",
      url: function() {
        return new wD.U(wD(40788))
      }
    }
  },
  6670: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => OD,
      e: () => JD,
      f: () => nD,
      h: () => hD
    });
    var pD = wD(6678);
    const sD = 6,
      KD = 3,
      rD = 1,
      LD = 2,
      cD = 4,
      gD = 8,
      RD = 16,
      AD = 32,
      UD = 64,
      fD = 128,
      ID = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function BD(DD) {
      if (!DD) return 0;
      const zD = ID.indexOf(DD);
      if (zD <= 0) throw new Error(`"${DD}" is not a shader pack hook function`);
      return zD
    }

    function GD(DD) {
      if (0 === DD) return null;
      const zD = ID[DD];
      if (void 0 === zD) throw new Error(`${DD} is not a shader pack hook function id`);
      return zD
    }

    function hD(DD) {
      const zD = pD.c.length;
      return {
        strict: DD >= zD,
        program: pD.c[DD % zD]
      }
    }

    function nD(DD) {
      return Number(DD.strict) * pD.c.length + pD.c.indexOf(DD.program)
    }

    function MD(DD) {
      return "" === DD ? [] : DD.split(" ")
    }

    function OD(DD) {
      const zD = {
        variantFlags: new Uint8Array(sD),
        hooks: new Uint8Array(sD * KD),
        moduleCodes: Array(sD).fill(""),
        reads: Array(2 * sD).fill("")
      };
      for (const wD of DD) {
        const DD = nD(wD.key),
          pD = (DD, zD) => null === wD.hooks.surface || wD.reads.fragment.includes(DD) ? 0 : zD;
        zD.variantFlags[DD] = (wD.sceneDepth ? rD : 0) | (wD.movesVertices ? LD : 0) | (wD.sunShadow ? cD : 0) | (wD.airShadow ? gD : 0) | (wD.discards ? RD : 0) | pD("localPosition", AD) | pD("enchantSpeed", UD) | pD("enchantTier", fD), zD.hooks[DD * KD] = BD(wD.hooks.vertex), zD.hooks[DD * KD + 1] = BD(wD.hooks.surface), zD.hooks[DD * KD + 2] = BD(wD.hooks.light), zD.moduleCodes[DD] = wD.moduleCode, zD.reads[2 * DD] = wD.reads.vertex.join(" "), zD.reads[2 * DD + 1] = wD.reads.fragment.join(" ")
      }
      return zD
    }

    function JD(DD) {
      const {
        hooks: zD,
        moduleCodes: wD,
        reads: pD
      } = DD;
      return Array.from(DD.variantFlags, ((DD, sD) => {
        const AD = sD * KD;
        return {
          key: hD(sD),
          hooks: {
            vertex: GD(zD[AD]),
            surface: GD(zD[AD + 1]),
            light: GD(zD[AD + 2])
          },
          moduleCode: wD[sD],
          sceneDepth: 0 !== (DD & rD),
          sunShadow: 0 !== (DD & cD),
          airShadow: 0 !== (DD & gD),
          movesVertices: 0 !== (DD & LD),
          discards: 0 !== (DD & RD),
          reads: {
            vertex: MD(pD[2 * sD]),
            fragment: MD(pD[2 * sD + 1])
          }
        }
      }))
    }
  },
  40617: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => fD,
      E: () => ID,
      e: () => sD,
      i: () => pD,
      j: () => UD,
      m: () => RD,
      n: () => GD,
      q: () => KD,
      u: () => LD,
      v: () => cD,
      x: () => rD,
      z: () => BD
    });
    const pD = 3,
      sD = 0,
      KD = 1,
      rD = 2,
      LD = {
        uniform: 3,
        dU: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      cD = 10,
      gD = "BloxdPackInputs",
      RD = "bloxdPackInputs",
      AD = [{
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
      UD = 80;

    function fD() {
      const DD = AD.map((DD => {
        let {
          name: zD,
          type: wD
        } = DD;
        return `    ${zD}: ${wD},\n`
      })).join("");
      return `struct ${gD} {\n${DD}}\n@group(${pD}) @binding(${sD}) var<uniform> ${RD}: ${gD};\n`
    }

    function ID(DD, zD) {
      const wD = new DataView(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, UD),
        [pD, sD, KD, rD, LD, cD] = AD;
      wD.setFloat32(pD.offset, zD.seconds, !0), wD.setUint32(sD.offset, zD.lit ? 1 : 0, !0);
      for (let gD = 0; gD < 3; gD++) wD.setInt32(KD.offset + 4 * gD, zD.renderOffset[gD], !0), wD.setFloat32(rD.offset + 4 * gD, zD.gDD[gD], !0), wD.setFloat32(LD.offset + 4 * gD, zD.eyePosition[gD], !0), wD.setFloat32(cD.offset + 4 * gD, zD.shadowDirection[gD], !0)
    }

    function BD(DD) {
      const zD = new Uint32Array(Math.max(1, DD.length));
      return DD.forEach(((DD, wD) => {
        let {
          id: pD,
          rotation: sD
        } = DD;
        zD[wD] = 65535 & pD | (3 & sD) << 16
      })), zD
    }
    const GD = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);